"use strict";

function scene1() {
  var scene1G = svg.append("g")
    .classed("scene", true)
    .attr("id", "scene1G")
    .attr("transform", "translate(0,0)");
  var placeholder = scene1G.append("text")
    .attr("x", "-10000px")
    .attr("y", "-10000px")
    .html("Journey of Tea")
    .attr("style", "font-size: 3em;")
  var placeholderWidth = placeholder.node().getBBox().width;
  var placeholderHeight = placeholder.node().getBBox().height;

  placeholder.remove();
  var titleText = scene1G.append("text")
    .classed("projectTitle", true)
    .html("Journey of Tea")
    .attr("x", function(d) { return innerWidth/2-d3.select(this).node().getBBox().width/2; })
    .attr("y", function(d) { return d3.select(this).node().getBBox().height; })
    .attr("style", "font-size: 1em;")
    .transition()
    .duration(config.animationTime)
    .attr("x", function(d) { return innerWidth/2-placeholderWidth/2; })
    .attr("y", function(d) { return innerHeight/2-placeholderHeight/2+config.lineHeight; })
    .attr("style", "font-size: 3em;")
    .each("end", function() {
      scene1G.append("text")
        .classed("projectTagLine", true)
        .html("adventurous journey of tea to reach you")
        .attr("x", function(d) { return innerWidth/2-d3.select(this).node().getBBox().width/2; })
        .attr("y", function(d) { return innerHeight/2+placeholderHeight/2; })
        .style("opacity", 0)
        .transition()
        .duration(config.animationTime)
        .style("opacity", 1)
        .each("end", function() {
          setupScene2();
        })
    });
}
