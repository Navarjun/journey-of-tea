"use strict";

var config = {
  titleColor: new p5.color(183, 93, 93)
};

var sceneNumber = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  p5.animation.play();

  switch (sceneNumber) {
    case 1:
      scene1();
      break;

    default:
      break;
  }
}
