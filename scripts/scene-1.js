"use strict";

var s1Vars = {};

function scene1() {
  // console.log("scene-1");
  if (!s1Vars.titleText) {
    s1Vars.titleText = p5.text("Journey of Tea", 32, config.titleColor);
    s1Vars.titleText.x(windowWidth/2);
    s1Vars.titleText.y(30);
    s1Vars.titleText.draw();
    console.log(s1Vars.titleText);
    p5.animation.text(s1Vars.titleText)
      .tweenSize(32, 64)
      .play();
  }
}
