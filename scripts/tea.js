"use strict";
var svg = d3.select("#canvas")
  .attr("width", innerWidth)
  .attr("height", innerHeight)
  .style("background", "rgb(250, 250, 250)");

var config = {
  animationTime: 2000,
  transitionAnimationTime: 2000,
  margin: {l: 50, r: 50, t: 50, b: 50},
  lineHeight: 10
}

var data = {};

var parse = function(d) {
  return d;
}

queue()
  .defer(d3.csv, "./data/tea-production.csv")
  .await(function(err, productionData) {
    if (!err) {
      data.productionData = productionData;
      scene1();
    }
  })

var sceneTransition = function(callback) {
  setTimeout(function() {
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
      });
  }, 1000);
}
