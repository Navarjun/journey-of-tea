"use strict";

function scene6() {
  var scene6G = scene6.scene6G;
  d3.select("#scene5G").remove();

  var desiredWidth = 960,
    desiredHeight = 684;

  var isWidthGreater = config.chartFrame.width/desiredWidth > config.chartFrame.height/desiredHeight;
  var adjustedWidth = isWidthGreater ? config.chartFrame.width * (config.chartFrame.height/desiredHeight) : config.chartFrame.width;
  var adjustedHeight = isWidthGreater ? config.chartFrame.height : config.chartFrame.height * (config.chartFrame.width/desiredWidth);

  scene6G.append("image")
    .attr("xlink:href", "http://blogs-images.forbes.com/niallmccarthy/files/2015/02/20150226_Coffee_Fo1.jpg")
    .attr("x", config.chartFrame.l)
    .attr("y", config.chartFrame.t)
    .attr("width", adjustedWidth)
    .attr("height", adjustedHeight)
    .style("opacity", 0)
    .transition()
    .duration(config.transitionAnimationTime)
    .style("opacity", 1);
}

function setupScene6() {
  scene6.scene6G = svg.append("g")
    .classed("scene", true)
    .attr("id", "scene6G")
    .attr("transform", "translate("+innerWidth+",0)");

  scene6.titleLine1 = scene6.scene6G.append("text")
    .classed("sceneTagLine", true)
    .html("And as we move into tea consumption data:")
    .attr("x", config.margin.l)
    .attr("y", config.margin.t);
  scene6.titleLine2 = scene6.scene6G.append("text")
    .classed("sceneTitle", true)
    .html("America is slowly—but surely—becoming a nation of tea drinkers")
    .style("opacity", 1)
    .attr("x", config.margin.l)
    .attr("y", scene6.titleLine1.node().getBBox().height + config.lineHeight + config.margin.t);

  sceneTransition(scene6);
}
