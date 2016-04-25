"use strict";

function scene5() {
  var scene5G = scene5.scene5G;
  d3.select("#scene4G").remove();

  var transitionCount = 0;

  var tradeData = masterData.trade;
  tradeData.countryDimension.filter("China")
  tradeData.elementDimension.filter("Export Quantity");
  tradeData.yearDimension.filter(new Date(2013, 0, 0).getTime());

  scene5.yAxisLabel = scene5G.append("g")
    .classed("yAxisMainLabel", true)
    // .style("opacity", 0)
    .attr("transform", "translate("+(config.chartFrame.l-50)+", "+(config.chartFrame.height+config.chartFrame.t)+") rotate(-90)")
    .append("text")
    .html("Quantity(tonnes)")
  var topCountry = tradeData.valueDimension.top(1)[0];
  tradeData.yearDimension.filter(function(d) {
    var date = new Date(d);
    if (isNaN(date.getTime())) return false;
    return true;
  });

  scene5.scaleX = d3.time.scale()
    .domain([new Date(1961, 0, 0), new Date(2013, 0, 0)])
    .range([config.chartFrame.l, config.chartFrame.width+config.chartFrame.l]);

  scene5.scaleY = d3.scale.linear()
    .domain([0, topCountry["Value"]+topCountry["Value"]*0.1])
    .range([config.chartFrame.height+config.chartFrame.t, config.chartFrame.t], 2);

  scene5.axisX = d3.svg.axis()
    .scale(scene5.scaleX)
    .orient("bottom")
    .tickFormat(function(d) {
      return d.getFullYear();
    });;
  scene5.axisY = d3.svg.axis()
    .scale(scene5.scaleY)
    .orient("left")
    .tickFormat(function(d) {
      return (d/1000)+"k";
    });

  scene5.xAxis = scene5G.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (config.chartFrame.t+config.chartFrame.height) + ")")
    .call(scene5.axisX)
  scene5.yAxis = scene5G.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + (config.chartFrame.l) + ",0)")
    .call(scene5.axisY);

  var lineFunction = d3.svg.line()
                        .x(function(d) { return scene5.scaleX(d["Year"]); })
                        .y(function(d) { return scene5.scaleY(d["Value"]); })
                        .interpolate("linear");

  scene5G.append("g")
    .classed("chinaExportPathG", true)
    .append("path")
    .attr("d", lineFunction(tradeData.yearDimension.bottom(Infinity)));

  setTimeout(scene5step2, config.animationTime);
}

function scene5step2() {
  scene5.titleLine2
    .transition()
    .duration(config.animationTime/2)
    .style("opacity", 0)
    .each("end", function() {
      scene5.titleLine2
        .html("How much does US import?")
        .transition()
        .duration(config.animationTime/2)
        .style("opacity", 1)
        .each("end", function() {
          var tradeData = masterData.trade;
          tradeData.countryDimension.filter("United States of America")
          tradeData.elementDimension.filter("Import Quantity");

          var lineFunction = d3.svg.line()
                                .x(function(d) { return scene5.scaleX(d["Year"]); })
                                .y(function(d) { return scene5.scaleY(d["Value"]); })
                                .interpolate("linear");
                                console.log(tradeData.yearDimension.bottom(Infinity));
          scene5.scene5G.append("g")
            .classed("USImportPathG", true)
            .append("path")
            .attr("d", lineFunction(tradeData.yearDimension.bottom(Infinity)));
        })
    })
}

function setupScene5() {
  scene5.scene5G = svg.append("g")
    .classed("scene", true)
    .attr("id", "scene5G")
    .attr("transform", "translate("+innerWidth+",0)");

  scene5.titleLine1 = scene5.scene5G.append("text")
    .classed("sceneTagLine", true)
    .html("Coming back to how the tea reaches US:")
    .attr("x", config.margin.l)
    .attr("y", config.margin.t);
  scene5.titleLine2 = scene5.scene5G.append("text")
    .classed("sceneTitle", true)
    .html("How much tea does China export?")
    .style("opacity", 1)
    .attr("x", config.margin.l)
    .attr("y", scene5.titleLine1.node().getBBox().height + config.lineHeight + config.margin.t);

  sceneTransition(scene5);
}
