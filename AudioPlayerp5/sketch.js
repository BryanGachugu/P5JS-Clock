// create a variable for the button
let myBtn;
let mySound;
var slider;
var sliderRate; //for rate

function preload() {
  mySound = loadSound('sound.mp3');

}
function setup() {
  createCanvas(200, 200);
  mySound.play();
  //slider for volume
  slider = createSlider(0, 1, 0.5, 0.01);

  //slider for rate
  sliderRate = createSlider(0, 1, 1, 0.01);

  // create the button to control sound
  myBtn = createButton('Play Pause');
  // call the function playPause when the user presses the mouse
  myBtn.mousePressed(playPause);

  

}

function playPause() {
  //use the isPlaying to determine whether the sound is playing or not
  // if the sound is not playing
  if (!mySound.isPlaying()) {
    // make it play
    mySound.play();
    // define the sound level
    mySound.setVolume(0.5);
    
  }
  // else pause it
  else {
    mySound.pause();
  }
}

function draw(){
  background(random(80, 255));
  const volume = slider.value();
  const rate = sliderRate.value();

  mySound.setVolume(volume);
  mySound.rate(rate);
}