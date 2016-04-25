"use strict";

p5.scale = {};
p5.scale.linear = function() {
  function scale(value) {
    return ((value/(this._domain[1] - this._domain[0]))*(this._range[1]-this._range[0]))+this._range[0];
  }
  scale._domain = [0, 0];
  scale._range = [0, 0];

  scale.domain = function($) {
    if (typeof $ == "undefined") {
      return this._domain;
    } else if (!Array.isArray($)) {
      console.error("'domain' should be array");
    }
    scale._domain = $;
    return this;
  }

  scale.range = function($) {
    if (typeof $ == "undefined") {
      return this._range;
    } else if (!Array.isArray($)) {
      console.error("'range' should be array");
    }
    scale._range = $;
    return this;
  }

  return scale;
}
