"use strict";

function scene4() {
  var scene4G = scene4.scene4G;
  d3.select("#scene3G").remove();
  var typesOfTea = ["White", "Yellow", "Green", "Oolong", "Black"];

  scene4.scale = d3.scale.ordinal()
    .domain(typesOfTea)
    .rangePoints([config.chartFrame.t, config.chartFrame.t+config.chartFrame.height],2);

  scene4.typesOfTeaG = scene4G.append("g")
    .classed("typesOfTea", true)
    .attr("transform", "translate("+config.chartFrame.l+", "+0+")");

  scene4.typesOfTeaG.selectAll("text")
    .data(typesOfTea)
    .enter()
    .append("text")
    .html(function(d){ return "- " + d; })
    .attr("y", function(d) { return scene4.scale(d); })
    .attr("x", 0);

  scene4.processRectWidth = 100;
    scene4step2();
}

function scene4step2() {
  var whiteteaProcessG = scene4.typesOfTeaG.append("g").classed("processGroup", true)
    .attr("transform", "translate(15, "+(scene4.scale("White")+10)+")");

  whiteteaProcessG.append("rect")
    .classed("processRect", true)
    .classed("pickingRect", true)
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 100)
    .attr("height", 50)
    .style("opacity", 0)
    .transition()
    .duration(config.animationTimeDelay)
    .style("opacity", 1)
    .each("end", function() {
      // adding picking label
      whiteteaProcessG.append("text")
        .attr("x", 10)
        .attr("y", 20)
        .html("Picking")
        .style("opacity", 0)
        .transition()
        .duration(config.animationTimeDelay)
        .style("opacity", 1)
        .each("end", function() {
          // add next rect
          whiteteaProcessG.append("rect")
            .classed("processRect", true)
            .classed("witheringRect", true)
            .attr("x", 110)
            .attr("y", 0)
            .attr("width", scene4.processRectWidth)
            .attr("height", 50)
            .style("opacity", 0)
            .transition()
            .duration(config.animationTimeDelay)
            .style("opacity", 1)
            .each("end", function() {
              // add next label
              whiteteaProcessG.append("text")
                .attr("x", 120)
                .attr("y", 20)
                .html("Withering")
                .style("opacity", 0)
                .transition()
                .duration(config.animationTimeDelay)
                .style("opacity", 1)
                .each("end", function() {
                  // add next rect
                  whiteteaProcessG.append("rect")
                    .classed("processRect", true)
                    .classed("sortingRect", true)
                    .attr("x", 110+scene4.processRectWidth+10)
                    .attr("y", 0)
                    .attr("width", scene4.processRectWidth)
                    .attr("height", 50)
                    .style("opacity", 0)
                    .transition()
                    .duration(config.animationTimeDelay)
                    .style("opacity", 1)
                    .each("end", function() {
                      whiteteaProcessG.append("text")
                        .attr("x", 110+scene4.processRectWidth+20)
                        .attr("y", 20)
                        .html("Sorting")
                        .style("opacity", 0)
                        .transition()
                        .duration(config.animationTimeDelay)
                        .style("opacity", 1)
                        .each("end", function(){
                          setTimeout(scene4step3, config.animationTime);
                        })
                    });
                });
            })
        });
    });
}

function scene4step3() {
  var yellowteaProcessG = scene4.typesOfTeaG.append("g").classed("processGroup", true)
    .attr("transform", "translate(15, "+(scene4.scale("Yellow")+10)+")");

  yellowteaProcessG.append("rect")
    .classed("processRect", true)
    .classed("pickingRect", true)
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 100)
    .attr("height", 50)
    .style("opacity", 0)
    .transition()
    .duration(config.animationTimeDelay)
    .style("opacity", 1)
    .each("end", function() {
      // adding picking label
      yellowteaProcessG.append("text")
        .attr("x", 10)
        .attr("y", 20)
        .html("Picking")
        .style("opacity", 0)
        .transition()
        .duration(config.animationTimeDelay)
        .style("opacity", 1)
        .each("end", function() {
          // add next rect
          yellowteaProcessG.append("rect")
            .classed("processRect", true)
            .classed("witheringRect", true)
            .attr("x", 110)
            .attr("y", 0)
            .attr("width", scene4.processRectWidth)
            .attr("height", 50)
            .style("opacity", 0)
            .transition()
            .duration(config.animationTimeDelay)
            .style("opacity", 1)
            .each("end", function() {
              // add next label
              yellowteaProcessG.append("text")
                .attr("x", 120)
                .attr("y", 20)
                .html("Withering")
                .style("opacity", 0)
                .transition()
                .duration(config.animationTimeDelay)
                .style("opacity", 1)
                .each("end", function() {
                  // add next rect
                  yellowteaProcessG.append("rect")
                    .classed("processRect", true)
                    .classed("heatingRect", true)
                    .attr("x", 110+scene4.processRectWidth+10)
                    .attr("y", 0)
                    .attr("width", scene4.processRectWidth)
                    .attr("height", 50)
                    .style("opacity", 0)
                    .transition()
                    .duration(config.animationTimeDelay)
                    .style("opacity", 1)
                    .each("end", function() {
                      // add nextlabel
                      yellowteaProcessG.append("text")
                        .attr("x", 110+scene4.processRectWidth+20)
                        .attr("y", 20)
                        .html("Heating")
                        .style("opacity", 0)
                        .transition()
                        .duration(config.animationTimeDelay)
                        .style("opacity", 1)
                        .each("end", function(){
                          // add next rect
                          yellowteaProcessG.append("rect")
                            .classed("processRect", true)
                            .classed("oxidationRect", true)
                            .attr("x", 110+(scene4.processRectWidth+10)*2)
                            .attr("y", 0)
                            .attr("width", scene4.processRectWidth)
                            .attr("height", 50)
                            .style("opacity", 0)
                            .transition()
                            .duration(config.animationTimeDelay)
                            .style("opacity", 1)
                            .each("end", function() {
                              // add nextlabel
                              yellowteaProcessG.append("text")
                                .attr("x", 110+(scene4.processRectWidth+10)*2+10)
                                .attr("y", 20)
                                .html("Oxidation")
                                .style("opacity", 0)
                                .transition()
                                .duration(config.animationTimeDelay)
                                .style("opacity", 1)
                                .each("end", function(){
                                  // add next rect
                                  yellowteaProcessG.append("rect")
                                    .classed("processRect", true)
                                    .classed("dryingRect", true)
                                    .attr("x", 110+(scene4.processRectWidth+10)*3)
                                    .attr("y", 0)
                                    .attr("width", scene4.processRectWidth)
                                    .attr("height", 50)
                                    .style("opacity", 0)
                                    .transition()
                                    .duration(config.animationTimeDelay)
                                    .style("opacity", 1)
                                    .each("end", function() {
                                      // add nextlabel
                                      yellowteaProcessG.append("text")
                                        .attr("x", 110+(scene4.processRectWidth+10)*3+10)
                                        .attr("y", 20)
                                        .html("Drying")
                                        .style("opacity", 0)
                                        .transition()
                                        .duration(config.animationTimeDelay)
                                        .style("opacity", 1)
                                        .each("end", function(){
                                          setTimeout(scene4step4, config.animationTime);
                                        })
                                    });
                                })
                            });
                        })
                    });
                });
            })
        });
    });
}

function scene4step4() {
  var greenteaProcessG = scene4.typesOfTeaG.append("g").classed("processGroup", true)
    .attr("transform", "translate(15, "+(scene4.scale("Green")+10)+")");

  greenteaProcessG.append("rect")
    .classed("processRect", true)
    .classed("pickingRect", true)
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 100)
    .attr("height", 50)
    .style("opacity", 0)
    .transition()
    .duration(config.animationTimeDelay)
    .style("opacity", 1)
    .each("end", function() {
      // adding picking label
      greenteaProcessG.append("text")
        .attr("x", 10)
        .attr("y", 20)
        .html("Picking")
        .style("opacity", 0)
        .transition()
        .duration(config.animationTimeDelay)
        .style("opacity", 1)
        .each("end", function() {
          // add next rect
          greenteaProcessG.append("rect")
            .classed("processRect", true)
            .classed("witheringRect", true)
            .attr("x", 110)
            .attr("y", 0)
            .attr("width", scene4.processRectWidth)
            .attr("height", 50)
            .style("opacity", 0)
            .transition()
            .duration(config.animationTimeDelay)
            .style("opacity", 1)
            .each("end", function() {
              // add next label
              greenteaProcessG.append("text")
                .attr("x", 120)
                .attr("y", 20)
                .html("Withering")
                .style("opacity", 0)
                .transition()
                .duration(config.animationTimeDelay)
                .style("opacity", 1)
                .each("end", function() {
                  // add next rect
                  greenteaProcessG.append("rect")
                    .classed("processRect", true)
                    .classed("heatingRect", true)
                    .attr("x", 110+scene4.processRectWidth+10)
                    .attr("y", 0)
                    .attr("width", scene4.processRectWidth)
                    .attr("height", 50)
                    .style("opacity", 0)
                    .transition()
                    .duration(config.animationTimeDelay)
                    .style("opacity", 1)
                    .each("end", function() {
                      // add nextlabel
                      greenteaProcessG.append("text")
                        .attr("x", 110+scene4.processRectWidth+20)
                        .attr("y", 20)
                        .html("Heating")
                        .style("opacity", 0)
                        .transition()
                        .duration(config.animationTimeDelay)
                        .style("opacity", 1)
                        .each("end", function(){
                          // add next rect
                          greenteaProcessG.append("rect")
                            .classed("processRect", true)
                            .classed("oxidationRect", true)
                            .attr("x", 110+(scene4.processRectWidth+10)*2)
                            .attr("y", 0)
                            .attr("width", scene4.processRectWidth)
                            .attr("height", 50)
                            .style("opacity", 0)
                            .transition()
                            .duration(config.animationTimeDelay)
                            .style("opacity", 1)
                            .each("end", function() {
                              // add nextlabel
                              greenteaProcessG.append("text")
                                .attr("x", 110+(scene4.processRectWidth+10)*2+10)
                                .attr("y", 20)
                                .html("Rolling")
                                .style("opacity", 0)
                                .transition()
                                .duration(config.animationTimeDelay)
                                .style("opacity", 1)
                                .each("end", function(){
                                  // add next rect
                                  greenteaProcessG.append("rect")
                                    .classed("processRect", true)
                                    .classed("dryingRect", true)
                                    .attr("x", 110+(scene4.processRectWidth+10)*3)
                                    .attr("y", 0)
                                    .attr("width", scene4.processRectWidth)
                                    .attr("height", 50)
                                    .style("opacity", 0)
                                    .transition()
                                    .duration(config.animationTimeDelay)
                                    .style("opacity", 1)
                                    .each("end", function() {
                                      // add nextlabel
                                      greenteaProcessG.append("text")
                                        .attr("x", 110+(scene4.processRectWidth+10)*3+10)
                                        .attr("y", 20)
                                        .html("Drying")
                                        .style("opacity", 0)
                                        .transition()
                                        .duration(config.animationTimeDelay)
                                        .style("opacity", 1)
                                        .each("end", function(){
                                          // add next rect
                                          greenteaProcessG.append("rect")
                                            .classed("processRect", true)
                                            .classed("sortingRect", true)
                                            .attr("x", 110+(scene4.processRectWidth+10)*4)
                                            .attr("y", 0)
                                            .attr("width", scene4.processRectWidth)
                                            .attr("height", 50)
                                            .style("opacity", 0)
                                            .transition()
                                            .duration(config.animationTimeDelay)
                                            .style("opacity", 1)
                                            .each("end", function() {
                                              // add nextlabel
                                              greenteaProcessG.append("text")
                                                .attr("x", 110+(scene4.processRectWidth+10)*4+10)
                                                .attr("y", 20)
                                                .html("Sifting")
                                                .style("opacity", 0)
                                                .transition()
                                                .duration(config.animationTimeDelay)
                                                .style("opacity", 1)
                                                .each("end", function(){
                                                  setTimeout(scene4step5, config.animationTime);
                                                })
                                            });
                                        })
                                    });
                                })
                            });
                        })
                    });
                });
            })
        });
    });
}

function scene4step5() {
  var oolongteaProcessG = scene4.typesOfTeaG.append("g").classed("processGroup", true)
    .attr("transform", "translate(15, "+(scene4.scale("Oolong")+10)+")");

  oolongteaProcessG.append("rect")
    .classed("processRect", true)
    .classed("pickingRect", true)
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 100)
    .attr("height", 50)
    .style("opacity", 0)
    .transition()
    .duration(config.animationTimeDelay)
    .style("opacity", 1)
    .each("end", function() {
      // adding picking label
      oolongteaProcessG.append("text")
        .attr("x", 10)
        .attr("y", 20)
        .html("Picking")
        .style("opacity", 0)
        .transition()
        .duration(config.animationTimeDelay)
        .style("opacity", 1)
        .each("end", function() {
          // add next rect
          oolongteaProcessG.append("rect")
            .classed("processRect", true)
            .classed("witheringRect", true)
            .attr("x", 110)
            .attr("y", 0)
            .attr("width", scene4.processRectWidth)
            .attr("height", 50)
            .style("opacity", 0)
            .transition()
            .duration(config.animationTimeDelay)
            .style("opacity", 1)
            .each("end", function() {
              // add next label
              oolongteaProcessG.append("text")
                .attr("x", 120)
                .attr("y", 20)
                .html("Withering")
                .style("opacity", 0)
                .transition()
                .duration(config.animationTimeDelay)
                .style("opacity", 1)
                .each("end", function() {
                  // add next rect
                  oolongteaProcessG.append("rect")
                    .classed("processRect", true)
                    .classed("oxidationRect", true)
                    .attr("x", 110+scene4.processRectWidth+10)
                    .attr("y", 0)
                    .attr("width", scene4.processRectWidth)
                    .attr("height", 50)
                    .style("opacity", 0)
                    .transition()
                    .duration(config.animationTimeDelay)
                    .style("opacity", 1)
                    .each("end", function() {
                      // add nextlabel
                      oolongteaProcessG.append("text")
                        .attr("x", 110+scene4.processRectWidth+20)
                        .attr("y", 20)
                        .html("Oxidation")
                        .style("opacity", 0)
                        .transition()
                        .duration(config.animationTimeDelay)
                        .style("opacity", 1)
                        .each("end", function(){
                          // add next rect
                          oolongteaProcessG.append("rect")
                            .classed("processRect", true)
                            .classed("heatingRect", true)
                            .attr("x", 110+(scene4.processRectWidth+10)*2)
                            .attr("y", 0)
                            .attr("width", scene4.processRectWidth)
                            .attr("height", 50)
                            .style("opacity", 0)
                            .transition()
                            .duration(config.animationTimeDelay)
                            .style("opacity", 1)
                            .each("end", function() {
                              // add nextlabel
                              oolongteaProcessG.append("text")
                                .attr("x", 110+(scene4.processRectWidth+10)*2+10)
                                .attr("y", 20)
                                .html("Heating")
                                .style("opacity", 0)
                                .transition()
                                .duration(config.animationTimeDelay)
                                .style("opacity", 1)
                                .each("end", function(){
                                  // add next rect
                                  oolongteaProcessG.append("rect")
                                    .classed("processRect", true)
                                    .classed("sortingRect", true)
                                    .attr("x", 110+(scene4.processRectWidth+10)*3)
                                    .attr("y", 0)
                                    .attr("width", scene4.processRectWidth)
                                    .attr("height", 50)
                                    .style("opacity", 0)
                                    .transition()
                                    .duration(config.animationTimeDelay)
                                    .style("opacity", 1)
                                    .each("end", function() {
                                      // add nextlabel
                                      oolongteaProcessG.append("text")
                                        .attr("x", 110+(scene4.processRectWidth+10)*3+10)
                                        .attr("y", 20)
                                        .html("Rolling")
                                        .style("opacity", 0)
                                        .transition()
                                        .duration(config.animationTimeDelay)
                                        .style("opacity", 1)
                                        .each("end", function(){
                                          // add next rect
                                          oolongteaProcessG.append("rect")
                                            .classed("processRect", true)
                                            .classed("sortingRect", true)
                                            .attr("x", 110+(scene4.processRectWidth+10)*4)
                                            .attr("y", 0)
                                            .attr("width", scene4.processRectWidth)
                                            .attr("height", 50)
                                            .style("opacity", 0)
                                            .transition()
                                            .duration(config.animationTimeDelay)
                                            .style("opacity", 1)
                                            .each("end", function() {
                                              // add nextlabel
                                              oolongteaProcessG.append("text")
                                                .attr("x", 110+(scene4.processRectWidth+10)*4+10)
                                                .attr("y", 20)
                                                .html("Drying")
                                                .style("opacity", 0)
                                                .transition()
                                                .duration(config.animationTimeDelay)
                                                .style("opacity", 1)
                                                .each("end", function(){
                                                  setTimeout(scene4step6, config.animationTime);
                                                })
                                            });
                                        })
                                    });
                                })
                            });
                        })
                    });
                });
            })
        });
    });
}

function scene4step6() {
  var blackteaProcessG = scene4.typesOfTeaG.append("g").classed("processGroup", true)
    .attr("transform", "translate(15, "+(scene4.scale("Black")+10)+")");

  blackteaProcessG.append("rect")
    .classed("processRect", true)
    .classed("pickingRect", true)
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 100)
    .attr("height", 50)
    .style("opacity", 0)
    .transition()
    .duration(config.animationTimeDelay)
    .style("opacity", 1)
    .each("end", function() {
      // adding picking label
      blackteaProcessG.append("text")
        .attr("x", 10)
        .attr("y", 20)
        .html("Picking")
        .style("opacity", 0)
        .transition()
        .duration(config.animationTimeDelay)
        .style("opacity", 1)
        .each("end", function() {
          // add next rect
          blackteaProcessG.append("rect")
            .classed("processRect", true)
            .classed("witheringRect", true)
            .attr("x", 110)
            .attr("y", 0)
            .attr("width", scene4.processRectWidth)
            .attr("height", 50)
            .style("opacity", 0)
            .transition()
            .duration(config.animationTimeDelay)
            .style("opacity", 1)
            .each("end", function() {
              // add next label
              blackteaProcessG.append("text")
                .attr("x", 120)
                .attr("y", 20)
                .html("Withering")
                .style("opacity", 0)
                .transition()
                .duration(config.animationTimeDelay)
                .style("opacity", 1)
                .each("end", function() {
                  // add next rect
                  blackteaProcessG.append("rect")
                    .classed("processRect", true)
                    .classed("oxidationRect", true)
                    .attr("x", 110+scene4.processRectWidth+10)
                    .attr("y", 0)
                    .attr("width", scene4.processRectWidth)
                    .attr("height", 50)
                    .style("opacity", 0)
                    .transition()
                    .duration(config.animationTimeDelay)
                    .style("opacity", 1)
                    .each("end", function() {
                      // add nextlabel
                      blackteaProcessG.append("text")
                        .attr("x", 110+scene4.processRectWidth+20)
                        .attr("y", 20)
                        .html("Rolling")
                        .style("opacity", 0)
                        .transition()
                        .duration(config.animationTimeDelay)
                        .style("opacity", 1)
                        .each("end", function(){
                          // add next rect
                          blackteaProcessG.append("rect")
                            .classed("processRect", true)
                            .classed("oxidationRect", true)
                            .attr("x", 110+(scene4.processRectWidth+10)*2)
                            .attr("y", 0)
                            .attr("width", scene4.processRectWidth)
                            .attr("height", 50)
                            .style("opacity", 0)
                            .transition()
                            .duration(config.animationTimeDelay)
                            .style("opacity", 1)
                            .each("end", function() {
                              // add nextlabel
                              blackteaProcessG.append("text")
                                .attr("x", 110+(scene4.processRectWidth+10)*2+10)
                                .attr("y", 20)
                                .html("Oxidation")
                                .style("opacity", 0)
                                .transition()
                                .duration(config.animationTimeDelay)
                                .style("opacity", 1)
                                .each("end", function(){
                                  // add next rect
                                  blackteaProcessG.append("rect")
                                    .classed("processRect", true)
                                    .classed("sortingRect", true)
                                    .attr("x", 110+(scene4.processRectWidth+10)*3)
                                    .attr("y", 0)
                                    .attr("width", scene4.processRectWidth)
                                    .attr("height", 50)
                                    .style("opacity", 0)
                                    .transition()
                                    .duration(config.animationTimeDelay)
                                    .style("opacity", 1)
                                    .each("end", function() {
                                      // add nextlabel
                                      blackteaProcessG.append("text")
                                        .attr("x", 110+(scene4.processRectWidth+10)*3+10)
                                        .attr("y", 20)
                                        .html("Drying")
                                        .style("opacity", 0)
                                        .transition()
                                        .duration(config.animationTimeDelay)
                                        .style("opacity", 1)
                                        .each("end", function(){
                                          // add next rect
                                          blackteaProcessG.append("rect")
                                            .classed("processRect", true)
                                            .classed("sortingRect", true)
                                            .attr("x", 110+(scene4.processRectWidth+10)*4)
                                            .attr("y", 0)
                                            .attr("width", scene4.processRectWidth)
                                            .attr("height", 50)
                                            .style("opacity", 0)
                                            .transition()
                                            .duration(config.animationTimeDelay)
                                            .style("opacity", 1)
                                            .each("end", function() {
                                              // add nextlabel
                                              blackteaProcessG.append("text")
                                                .attr("x", 110+(scene4.processRectWidth+10)*4+10)
                                                .attr("y", 20)
                                                .html("Sorting")
                                                .style("opacity", 0)
                                                .transition()
                                                .duration(config.animationTimeDelay)
                                                .style("opacity", 1)
                                                .each("end", function(){
                                                  // setTimeout(scene4step4, config.animationTime);
                                                })
                                            });
                                        })
                                    });
                                })
                            });
                        })
                    });
                });
            })
        });
    });
}


function setupScene4() {
  scene4.scene4G = svg.append("g")
    .classed("scene", true)
    .attr("id", "scene4G")
    .attr("transform", "translate("+innerWidth+",0)");

  scene4.titleLine1 = scene4.scene4G.append("text")
    .classed("sceneTagLine", true)
    .html("Getting to know types of tea:")
    .attr("x", config.margin.l)
    .attr("y", config.margin.t);
  scene4.titleLine2 = scene4.scene4G.append("text")
    .classed("sceneTitle", true)
    .html("Process for different types of tea")
    .attr("x", config.margin.l)
    .attr("y", scene4.titleLine1.node().getBBox().height + config.lineHeight + config.margin.t);

  sceneTransition(scene4);
}
