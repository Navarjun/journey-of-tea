"use strict";

function scene2() {
  var scene2G = d3.select("#scene2G");
  d3.select("#scene1G").remove();

  var prodData = masterData.production;
  prodData.elementDimension.filter("Production");
  prodData.yearDimension.filter("2013");

  var topCountry = prodData.valueDimension.top(1)[0];

  var scaleX = d3.scale.linear()
    .domain(prodData.valueDimension.top(Infinity).map(function(d) { return d["AreaName"]; }))
    .range([config.chartFrame.l, config.chartFrame.width+config.chartFrame.l]);

  var scaleY = d3.scale.linear()
    .domain([0, topCountry["Value"]])
    .range([config.chartFrame.t, config.chartFrame.height+config.chartFrame.t]);
};

function setupScene2() {
  scene2.scene2G = svg.append("g")
    .classed("scene", true)
    .attr("id", "scene2G")
    .attr("transform", "translate("+innerWidth+",0)");

  scene2.titleLine1 = scene2.scene2G.append("text")
    .classed("sceneTagLine", true)
    .html("Let's start by looking at:")
    .attr("x", config.margin.l)
    .attr("y", config.margin.t);
  scene2.titleLine2 = scene2.scene2G.append("text")
    .classed("sceneTitle", true)
    .html("Where is tea grown?")
    .attr("x", config.margin.l)
    .attr("y", scene2.titleLine1.node().getBBox().height + config.lineHeight + config.margin.t);

  sceneTransition(scene2);
}
