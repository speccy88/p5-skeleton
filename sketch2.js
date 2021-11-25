let bubble;
let slider1;

function setup() {
  createCanvas(600,400);
  bubble = new Bubble();
  slider1 = createSlider(10, 50, 25);
  slider1.position(10, height+10);
  slider1.style('width', '580px');
  //slider1.value(25);
}

function draw() {
  background(0);
  bubble.move();
  bubble.show();
}

class Bubble {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.size = 24;
  }

  move() {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, slider1.value(), slider1.value());
  }
}
