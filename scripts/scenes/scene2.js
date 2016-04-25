"use strict";

function scene2() {
  var scene2G = d3.select("#scene2G");
  d3.select("#scene1G").remove();

  var prodData = masterData.production;
  prodData.elementDimension.filter("Production");
  prodData.yearDimension.filter("2013");

  scene2.yAxisLabel = scene2G.append("g")
    .classed("yAxisMainLabel", true)
    .style("opacity", 0)
    .attr("transform", "translate("+(config.chartFrame.l-50)+", "+(config.chartFrame.height+config.chartFrame.t)+") rotate(-90)");
  scene2.yAxisLabel.append("text")
    .html("Production(tonnes)");
  scene2.yAxisLabel.transition()
    .duration(config.transitionAnimationTime)
    .style("opacity", 1);
  var topCountry = prodData.valueDimension.top(1)[0];
  // prodData.clearFilters();

  scene2.scaleX = d3.scale.ordinal()
    .domain(prodData.valueDimension.top(Infinity).map(function(d) { return d["AreaName"]; }))
    .rangePoints([config.chartFrame.l, config.chartFrame.width+config.chartFrame.l], 2);

  scene2.scaleY = d3.scale.linear()
    .domain([0, topCountry["Value"]+topCountry["Value"]*0.1])
    .range([config.chartFrame.height+config.chartFrame.t-5, config.chartFrame.t], 2);

  scene2.axisX = d3.svg.axis()
    .scale(scene2.scaleX)
    .orient("bottom")
    .tickFormat(function(d) {
      if (d == "United Republic of Tanzania") return "Tanzania";
      if (d == "Iran (Islamic Republic of)") return "Iran";
      if (d == "Viet Nam") return "Vietnam";
      return d;
    });
  scene2.axisY = d3.svg.axis()
    .scale(scene2.scaleY)
    .orient("left")
    .tickFormat(function(d) {
      return d/1000000 + "M";
    });


  scene2.xAxis = scene2G.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(0," + (config.chartFrame.t+config.chartFrame.height-5) + ")")
    .style("opacity", 0)
    .call(scene2.axisX)
    .transition()
    .duration(config.transitionAnimationTime)
    .style("opacity", 1);

  scene2.xAxis.selectAll("text")
    .attr("y", 0)
    .attr("x", 9)
    .attr("dy", ".35em")
    .attr("transform", "rotate(90)")
    .style("text-anchor", "start");;
  scene2.yAxis = scene2G.append("g")
    .attr("class", "y-axis")
    .attr("transform", "translate(" + (config.chartFrame.l) + ",0)")
    .style("opacity", 0)
    .call(scene2.axisY)
    .transition()
    .duration(config.transitionAnimationTime)
    .style("opacity", 1);

  scene2.barchartG = scene2G.append("g")
    .classed("barchart", true);
  scene2.barchartG.selectAll("rect")
    .data(prodData.valueDimension.top(Infinity))
    .enter()
    .append("rect")
    .style("fill", "rgb(183, 93, 93)")
    .attr("class", function(d) { return d["AreaName"].toLowerCase().replace(" ", ""); })
    .attr("x", function(d) { return scene2.scaleX(d["AreaName"])-7; })
    .attr("y", function(d) { return config.chartFrame.height+config.chartFrame.t-5; })
    .attr("width", "15px")
    .attr("height",0);
  var transitionCount = 0;
  scene2.barchartG.selectAll("rect")
    .transition()
    .delay(function(_, i) { return i*config.animationTimeDelay; })
    .attr("class", function(d) { return d["AreaName"].toLowerCase().replace(" ", ""); })
    .attr("y", function(d) { return scene2.scaleY(d["Value"]); })
    .attr("height", function(d) { return config.chartFrame.t+config.chartFrame.height-5 - scene2.scaleY(d["Value"]); })
    .each("start", function() {
      transitionCount++;
    })
    .each("end", function() {
      transitionCount--;
      if (transitionCount == 0) {
        scene2G.append("text")
          .classed("nextButton", true)
          .html("Next >")
          .attr("y", innerHeight-config.margin.b)
          .attr("x", function() { return innerWidth-config.margin.r-d3.select(this).node().getBBox().width; })
          .style("opacity", 0)
          .on("click", function() {
            setTimeout(scene2step2, 0);
          })
          .transition()
          .duration(config.transitionAnimationTime)
          .style("opacity", 1);
      }
    })

  prodData.clearFilters();
};

function scene2step2() {
  var scene2G = scene2.scene2G;

  scene2.barchartG.select("rect.china").moveToFront();
  scene2.barchartG.selectAll("rect.china")
    .transition()
    .duration(config.animationTime)
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", innerWidth)
    .attr("height", innerHeight)
    .style("fill", "rgb(250,250,250)")
    .each("end", function() {
      scene2G.remove();
      setupScene3();
    });
}

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
