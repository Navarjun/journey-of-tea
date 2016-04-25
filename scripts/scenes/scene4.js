"use strict";

function scene4() {
  d3.select("#scene3G").remove();
}

function setupScene4() {
  scene4.scene4G = svg.append("g")
    .classed("scene", true)
    .attr("id", "scene4G")
    .attr("transform", "translate("+innerWidth+",0)");

  scene4.titleLine1 = scene4.scene4G.append("text")
    .classed("sceneTagLine", true)
    .html("")
    .attr("x", config.margin.l)
    .attr("y", config.margin.t);
  scene4.titleLine2 = scene4.scene4G.append("text")
    .classed("sceneTitle", true)
    .html("Did you know?")
    .attr("x", config.margin.l)
    .attr("y", scene4.titleLine1.node().getBBox().height + config.lineHeight + config.margin.t);

  sceneTransition(scene4);
}
