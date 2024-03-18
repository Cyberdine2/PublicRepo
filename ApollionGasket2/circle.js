class Circle {
  constructor(bend, x, y) {
    // this.x = x;
    // this.y = y;
    this.center = new Complex(x, y);
    this.bend = bend;
    this.radius = abs(1 / this.bend);
  }

  show() {
    stroke(0);
    noFill();

    imageMode(CENTER);
    if (this.radius > 20) {
      image(
        shiff,
        this.center.a,
        this.center.b,
        this.radius * 2,
        this.radius * 2
      );
    }

    stroke(255);
    circle(this.center.a, this.center.b, this.radius * 2);

  }

  dist(other) {
    console.log(other + "not array");
    console.log(other[0] + "here 2");
    console.log(other[1] + "here 1");

    return dist(this.center.a, this.center.b, other.center.a, other.center.b);
  }
}
