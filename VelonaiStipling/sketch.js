let points = [];
let delaunay, veronoi;
let gloria;

function preload() {
  gloria = loadImage("Trophies.jpeg");
}

function setup() {
  createCanvas(736, 570);
  for (let i = 0; i < 100000; i++) {
    // points[i] = createVector(random(width), random(height));
    let x = random(width);
    let y = random(height);
    let col = gloria.get(x, y);

    if (random(100) > brightness(col)) {
      points.push(createVector(x, y));
    } else {
      i--;
    }
  }
  delaunay = calculateDelauny(points);
  veronoi = delaunay.voronoi([0, 0, width, height]);

  // noLoop();
}

function draw() {
  background(225);

  for (let v of points) {
    stroke(0);
    strokeWeight(4);
   // point(v.x, v.y);
  }

  let polygons = veronoi.cellPolygons();
  let cells = Array.from(polygons);



////// Veronia //////

  for (let poly of cells) {
    console.log(poly);
    stroke(0);
    strokeWeight(.5);
    noFill();
    beginShape();
    for (let i = 0; i < poly.length; i++) {
      vertex(poly[i][0], poly[i][1]);
    }
    endShape();
  }





  let centroids = new Array(cells.length);
  let weights = new Array(cells.length).fill(0);

  for (let i = 0; i < centroids.length; i++) {
   
    centroids[i] = createVector(0, 0);
    
  }

  gloria.loadPixels();
  let delaunayIndex = 0;
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let index = (i + j * width) * 4;
      let r = gloria.pixels[index + 0];
      let g = gloria.pixels[index + 1];
      let b = gloria.pixels[index + 2];

      let bright = (r + g + b) / 3;
      let weight = 1 - bright / 255;
       delaunayIndex = delaunay.find(i, j, delaunayIndex);
      centroids[delaunayIndex].x += i * weight;
      centroids[delaunayIndex].y += j * weight;
      weights[delaunayIndex] += weight;
    }
  }

  for (let i = 0; i < centroids.length; i++) {
    if (weights[i] > 0) {
    centroids[i].div(weights[i]);
    } else {
      centroids[i] = points[i].copy();
    }
  }

  for (let i = 0; i < points.length; i++) {
    points[i].lerp(centroids[i], 1);
  }
  delaunay = calculateDelauny(points);
  veronoi = delaunay.voronoi([0, 0, width, height]);
}

function calculateDelauny(points) {
  let pointsArray = [];

  for (let v of points) {
    pointsArray.push(v.x, v.y);
  }

  console.log(pointsArray);
  return new d3.Delaunay(pointsArray);
}
