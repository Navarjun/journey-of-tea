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
    .style("opacity", 1)
    .each("end",function() {
      d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("bottom", "0")
        .style("font-size", "0.5em")
        .style("padding-left", "50px")
        .style("opacity", 0)
        .html("References:</br>"+
        "FAOSTAT. Accessed February 29, 2016. http://faostat3.fao.org/home/E.<br/>"+
        "Gascoyne, Kevin, Francois Marchand, and Jasmin Desharnais. Tea: History, Terroirs, Varieties. First edition. edition. Richmond Hill, Ont: Firefly Books, 2011.<br/>"+
        "Heiss, Mary Lou, and Robert J. Heiss. The Tea Enthusiast’s Handbook: A Guide to Enjoying the World’s Best Teas. 1 edition. New York: Ten Speed Press, 2010.<br/>"+
        "The Growing Demand for Tea in the US - Market Realist. Accessed April 25, 2016. http://marketrealist.com/2015/06/growing-demand-tea-us/.<br/>"+
        "Younger Americans Are Ditching Coffee For Tea [Infographic] - Forbes. Accessed April 25, 2016.<br/>"+
        "“America Is Slowly—but Surely—becoming a Nation of Tea Drinkers.” Washington Post. Accessed April 25, 2016.https://www.washingtonpost.com/news/wonk/wp/2014/09/03/america-is-slowly-but-surely-becoming-a-nation-of-tea-drinkers/.<br/>" +
        "http://www.forbes.com/sites/niallmccarthy/2015/02/26/younger-americans-are-ditching-coffee-for-tea-infographic/#4c5e8dc560b0.<br/>")
        .transition()
        .duration(config.transitionAnimationTime)
        .style("opacity", 1);
    });
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
