let image;
let cnv;

function preload(){
  image = loadImage("assets/horse.jpeg")
}

function setup() {
  cnv = createCanvas(image.width, image.height);

  //centering the image in our browser
  let newCanvasX = (windowWidth - image.width) / 2;
  let newCanvasY = (windowHeight - image.height) / 2;

  cnv.position(newCanvasX, newCanvasY);

  //every time we access a pixel, multiply it by 10 for each row and column
  for(let col = 0; col < image.width; col+=10){
    for(let row = 0; row < image.height; row+=10){
      let xPos = col;
      let yPos = row;
      let c = image.get(xPos, yPos);
      push();
      translate(xPos, yPos);
      noFill();
      strokeWeight(random(5)); //since we are multiplying by 10
      stroke(color(c));
      rect(col, row, 10, 10);
      //BUILD A CURVE (from p5 website reference)
    
      //curve(xPos, yPos, sin(xPos) * 60, cos(xPos) * sin(xPos) * 40, 0, 0, cos(yPos ) * sin(xPos) * random(140), cos(yPos) * sin(xPos) * 50);
      pop();
    }
  }

}