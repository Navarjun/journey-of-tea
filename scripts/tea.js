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
config.chartFrame = {l: 50, t: 200, width: innerWidth-config.margin.l-config.margin.r, height: innerHeight-200-config.margin.b};

var masterData = {};

function parseProductionData(d) {
  return {
    AreaName: d["AreaName"],
    ElementName: d["ElementName"],
    Year: +d["Year"],
    Value: +d["Value"]
  };
}

queue()
  .defer(d3.csv, "./data/tea-production.csv", parseProductionData)
  .await(function(err, productionData) {
    if (!err) {
      var crossfilterObj = crossfilter(productionData);
      var countryDimension = crossfilterObj.dimension(function(d) { return d["AreaName"]; });
      var elementDimension = crossfilterObj.dimension(function(d) { return d["ElementName"]; });
      elementDimension.filter("Production");

      // CHINA FILTER
      countryDimension.filter(function(d) {
        if (typeof d == "undefined") {
          return false;
        }
        else if (d.toLowerCase().indexOf("china") != -1 && d.toLowerCase() != "china") {
          return false;
        }
        return true;
      });

      // get countries for max value in 2013
      var yearDimension = crossfilterObj.dimension(function(d) { return d["Year"]; });
      yearDimension.filter(2013);
      var valueDimension = crossfilterObj.dimension(function(d) { return d["Value"]; });
      var topCountries = valueDimension.top(20).map(function(d) { return d["AreaName"]; });

      // get data all the data for countries with top Production in 2013
      yearDimension.filter(null); yearDimension.dispose();
      elementDimension.filter(null); elementDimension.dispose();
      countryDimension.filter(topCountries);

      var data = valueDimension.top(Infinity);
      var dataCrossfilter = crossfilter(data);
      masterData.production = {
        data: data,
        crossfilterObj: dataCrossfilter,
        elementDimension: dataCrossfilter.dimension(function(d) { return d["ElementName"]; }),
        countryDimension: dataCrossfilter.dimension(function(d) { return d["AreaName"]; }),
        valueDimension: dataCrossfilter.dimension(function(d) { return d["Value"]; }),
        yearDimension: dataCrossfilter.dimension(function(d) { return d["Year"]; }),
        clearFilters: function() {
          data.production.elementDimension.filter(null);
          data.production.countryDimension.filter(null);
          data.production.valueDimension.filter(null);
          data.production.yearDimension.filter(null);
        }
      }
      countryDimension.dispose();
      elementDimension.dispose();
      yearDimension.dispose();
      valueDimension.dispose();
      crossfilterObj = null;
      scene1();
    }
  });

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
