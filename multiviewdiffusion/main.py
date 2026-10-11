import os
# ROCm APU compatibility & fast convolution heuristics
os.environ["HSA_OVERRIDE_GFX_VERSION"] = "10.3.0"
os.environ["MIOPEN_FIND_MODE"] = "2"

import torch
import numpy as np
import requests
from io import BytesIO
from PIL import Image
from diffusers import DiffusionPipeline
from huggingface_hub import snapshot_download

# --- 1. ROCm xFormers SDPA Patch ---
import xformers
import xformers.ops

def custom_memory_efficient_attention(query, key, value, attn_bias=None, p=0.0, scale=None, *args, **kwargs):
    if query.dim() == 4:
        q = query.transpose(1, 2)
        k = key.transpose(1, 2)
        v = value.transpose(1, 2)
        mask = attn_bias if isinstance(attn_bias, torch.Tensor) else None
        out = torch.nn.functional.scaled_dot_product_attention(
            q, k, v, attn_mask=mask, dropout_p=p, scale=scale
        )
        return out.transpose(1, 2).contiguous()
    else:
        mask = attn_bias if isinstance(attn_bias, torch.Tensor) else None
        return torch.nn.functional.scaled_dot_product_attention(
            query, key, value, attn_mask=mask, dropout_p=p, scale=scale
        )

xformers.ops.memory_efficient_attention = custom_memory_efficient_attention
if hasattr(xformers.ops, "fmha"):
    xformers.ops.fmha.memory_efficient_attention = custom_memory_efficient_attention
# -----------------------------------

MODEL_ID = "dylanebert/multi-view-diffusion"
LOCAL_DIR = "/home/cyberdine1988/models/dylanebert"

print(f"Downloading snapshot for '{MODEL_ID}' into '{LOCAL_DIR}'...")
snapshot_download(
    repo_id=MODEL_ID,
    local_dir=LOCAL_DIR,
    token=os.getenv("HF_TOKEN"),
)
print("Snapshot check complete.\n")

print("Loading model onto AMD GPU...")
multi_view_diffusion_pipeline = DiffusionPipeline.from_pretrained(
    LOCAL_DIR,
    custom_pipeline="dylanebert/multi-view-diffusion",
    torch_dtype=torch.float16,
    trust_remote_code=True,
).to("cuda")

multi_view_diffusion_pipeline.enable_attention_slicing()

# --- 2. Fix VAE Hang: Decode on CPU ---
orig_vae_decode = multi_view_diffusion_pipeline.vae.decode

def safe_vae_decode(latents, *args, **kwargs):
    print("\n[INFO] 30 diffusion steps complete! Decoding latents on CPU to bypass ROCm VAE hang...")
    multi_view_diffusion_pipeline.vae.to("cpu", dtype=torch.float32)
    latents_cpu = latents.to("cpu", dtype=torch.float32)
    with torch.no_grad():
        out = orig_vae_decode(latents_cpu, *args, **kwargs)
    return out

multi_view_diffusion_pipeline.vae.decode = safe_vae_decode
# ---------------------------------------

print("Model loaded successfully.\n")

# 3. Load input image
image_url = "https://huggingface.co/datasets/dylanebert/3d-arena/resolve/main/inputs/images/a_cat_statue.jpg"
print(f"Downloading input image from {image_url}...")
response = requests.get(image_url)
image = Image.open(BytesIO(response.content)).convert("RGB")
print("Input image ready.\n")

def create_image_grid(images):
    images = [Image.fromarray((img * 255).astype("uint8")) for img in images]

    width, height = images[0].size
    grid_img = Image.new("RGB", (2 * width, 2 * height))

    grid_img.paste(images[0], (0, 0))
    grid_img.paste(images[1], (width, 0))
    grid_img.paste(images[2], (0, height))
    grid_img.paste(images[3], (width, height))

    return grid_img

# 4. Run Multi-View Generation
print("Generating multi-view images (30 steps)...")
image_np = np.array(image, dtype=np.float32) / 255.0
images = multi_view_diffusion_pipeline(
    prompt="",
    image=image_np,
    guidance_scale=5.0,
    num_inference_steps=30,
    elevation=0
)

# 5. Save and output
print("Stitching views into grid...")
output_grid = create_image_grid(images)
output_path = "output_grid.png"
output_grid.save(output_path)
print(f"\nSUCCESS! Multi-view grid saved to: {os.path.abspath(output_path)}")

try:
    output_grid.show()
except Exception:
    pass


# gradio


# import gradio as gr
#
# def run(image):
#   image = np.array(image, dtype=np.float32) / 255.0
#   images = multi_view_diffusion_pipeline("", image, guidance_scale=5, num_inference_steps=30, elevation=0)
#
#   images = [Image.fromarray((img * 255).astype("uint8")) for img in images]
#
#   width, height = images[0].size
#   grid_img = Image.new("RGB", (2 * width, 2 * height))
#
#   grid_img.paste(images[0], (0, 0))
#   grid_img.paste(images[1], (width, 0))
#   grid_img.paste(images[2], (0, height))
#   grid_img.paste(images[3], (width, height))
#
#   return grid_img
#
# demo = gr.Interface(fn=run, inputs="image", outputs="image")
# demo.launch()