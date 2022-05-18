let hr = 0;
let mn = 0;
let sec = 0;

const canvasSize = 200;

function drawClock() {
  noFill();

  // Seconds display
  strokeWeight(8);
  stroke(255, 0, 0);
  let secAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, canvasSize*19/20, canvasSize*19/20, 0, secAngle);
  push();
  strokeWeight(4);
  rotate(secAngle);
  line(0, 0, canvasSize/3, 0);
  pop();
  
  // Minute display  
  strokeWeight(8);
  stroke(0, 100, 255);
  let minAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, canvasSize*17/20, canvasSize*17/20, 0, minAngle);
  push();
  strokeWeight(4);
  rotate(minAngle);
  line(0, 0, canvasSize/4, 0);
  pop();
  
  // Hours display
  strokeWeight(8);
  stroke(0, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, canvasSize*15/20, canvasSize*15/20, 0, hourAngle);
  push();
  strokeWeight(4);
  rotate(hourAngle);
  line(0, 0, canvasSize/5, 0);
  pop();
  
  push();
  stroke(200);
  point(0, 0);
  pop();
}

function setup() {
  canvas = createCanvas(canvasSize, canvasSize);
  angleMode(DEGREES);
}

function draw() {
  
  background(400);
  hr = hour();
  mn = minute();
  sec = second();
  
  translate(canvasSize/2, canvasSize/2);
  rotate(-90);
  
  drawClock();
}