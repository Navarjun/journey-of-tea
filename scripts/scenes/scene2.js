"use strict";

function scene2() {
  var scene2G = d3.select("#scene2G");
  d3.select("#scene1G").remove();

  // var scaleX =
}

function setupScene2() {
  var scene2G = svg.append("g")
    .classed("scene", true)
    .attr("id", "scene2G")
    .attr("transform", "translate("+innerWidth+",0)");

  var titleLine1 = scene2G.append("text")
    .classed("sceneTagLine", true)
    .html("Let's start by looking at:")
    .attr("x", config.margin.l)
    .attr("y", config.margin.t);
  var titleLine2 = scene2G.append("text")
    .classed("sceneTitle", true)
    .html("Where is tea grown?")
    .attr("x", config.margin.l)
    .attr("y", titleLine1.node().getBBox().height + config.lineHeight + config.margin.t);

  sceneTransition(scene2);
}
