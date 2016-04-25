"use strict";

function scene3() {
  var scene3G = scene3.scene3G;
  d3.select("#scene2G").remove();
  var facts = [
    "- China is the only country that produces all kinds of tea.",
    "- All kinds of tea come from the same tree: Camelia Sinesis.",
    "- Only the method processing of the leaves makes it different."
  ];

  var transitionCount = 0;
  scene3G.append("g")
    .classed("factsG", true)
    .attr("transform", "translate("+config.chartFrame.l+", "+config.chartFrame.t+")")
    .selectAll("text")
    .data(facts)
    .enter()
    .append("text")
    .style("opacity", 0)
    .html(function(d) { return d; })
    .attr("x", 0)
    .attr("y", function(_, i) { return ((config.chartFrame.height/2) + (i - facts.length/2) * 40); })
    .transition()
    .duration(config.animationTime)
    .delay(function(d, i) { return i*config.animationTimeDelay; })
    .style("opacity", 1)
    .each("start", function() {
      transitionCount++;
    })
    .each("end", function() {
      transitionCount--;
      if (transitionCount == 0) {
        scene3G.append("text")
          .classed("nextButton", true)
          .html("Next >")
          .attr("y", innerHeight-config.margin.b)
          .attr("x", function() { return innerWidth-config.margin.r-d3.select(this).node().getBBox().width; })
          .style("opacity", 0)
          .on("click", function() {
            setTimeout(setupScene4, 0);
          })
          .transition()
          .duration(config.transitionAnimationTime)
          .style("opacity", 1);
      }
    })

}

function setupScene3() {
  scene3.scene3G = svg.append("g")
    .classed("scene", true)
    .attr("id", "scene3G")
    .attr("transform", "translate("+innerWidth+",0)");

  scene3.titleLine1 = scene3.scene3G.append("text")
    .classed("sceneTagLine", true)
    .html("")
    .attr("x", config.margin.l)
    .attr("y", config.margin.t);
  scene3.titleLine2 = scene3.scene3G.append("text")
    .classed("sceneTitle", true)
    .html("Did you know?")
    .attr("x", config.margin.l)
    .attr("y", scene3.titleLine1.node().getBBox().height + config.lineHeight + config.margin.t);

  sceneTransition(scene3);
}
