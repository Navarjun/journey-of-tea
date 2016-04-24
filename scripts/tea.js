"use strict";
var svg = d3.select("#canvas")
  .attr("width", innerWidth)
  .attr("height", innerHeight);

var config = {
  animationTime: 2000,
  transitionAnimationTime: 2000,
  margin: {l: 50, r: 50, t: 50, b: 50},
  lineHeight: 10
}

var sceneTransition = function(callback) {
  var count = 0;
  d3.selectAll("g")
    .transition()
    .duration(config.transitionAnimationTime)
    .attr("transform", function(d) {
      var transformString = d3.select(this).attr("transform");
      var transformValue = transformString.substring(transformString.indexOf("(")+1, transformString.indexOf(","));
      transformValue = parseInt(transformValue) - innerWidth;
      console.log(transformValue);
      return "translate("+transformValue+",0)";
    })
    .each("start", function() { ++count; })
    .each("end", function() {
      --count;
      if (count == 0) {
        callback();
      }
    })
}

scene1();
