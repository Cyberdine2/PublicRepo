var x = 0;
var y = 0;
var myImage;
var myImage2;
var c;

function preload() {
  myImage = loadImage("pic2.jpg");
  myImage2 = loadImage("pic1.jpg");
}

function setup() {
  createCanvas(5184, 3888);
  pixelDensity(1);
}

function draw() {
  background(51);
  image(myImage2, 0, 0, width, height);

  let w = width / myImage.width;
  let h = height / myImage.height;

  myImage2.loadPixels();
  myImage.loadPixels();
  //c = myImage.get(x, y);
  console.log(c);

  for (i = 0; i < myImage.width; i++) {
    for (j = 0; j < myImage.height; j++) {
      const pixelIndex = (i + j * myImage.width) * 4;
      const r = myImage.pixels[pixelIndex + 0];
      const g = myImage.pixels[pixelIndex + 1];
      const b = myImage.pixels[pixelIndex + 2];
      const a = myImage.pixels[pixelIndex + 3];

      const r2 = myImage2.pixels[pixelIndex + 0];
      const g2 = myImage2.pixels[pixelIndex + 1];
      const b2 = myImage2.pixels[pixelIndex + 2];
      const a2 = myImage2.pixels[pixelIndex + 3];

      //if(r < 210 && r > 80  &&  g < 60  && b < 200 && b > 30) {
      if (r < 210 && r > 80 && g > 40 && b < 200 && b > 70) {
        //best one//
        noStroke();
        fill(255, 0, 0);
        square(i * w, j * h, w);
      }
    }
  }
}
