"use strict";

p5.animation = {
  animations: [],
  play: function() {
    this.animations.forEach(function(d) {
      d.play();
    })
  },
  add: function(object) {
    if (animations.indexOf(object) == -1) {
      animations.push(object);
    }
  }
};

p5.animation.text = function(textObj) {
  this._obj = textObj;
  this._duration = 1000;
  this._tween = [];

  this.duration = function($) {
    if (typeof $ == "undefined") {
      return this._duration;
    } else if (typeof $ != "number") {
      console.error("'duration' should be number");
    }
    this._duration = $;
    return this;
  };

  this.tweenSize = function(from, to) {
    if (typeof from == "undefined") {
      return this._tween.filter(function(d) { return d.param == "size"; });
    } else if (typeof from != "number") {
      console.error("'from' should be number");
    } else if (typeof to != "number") {
      console.error("'to' should be number");
    }

    this._tween = this._tween.filter(function(d) { return d.param != "size"; });

    this._tween.push({
      param: "size",
      from: from,
      to: to
    });
    return this;
  };

  this.tweenPosition = function(startX, startY, endX, endY) {
    if (typeof startX == "undefined") {
      return this._tween.filter(function(d) { return d.param == "position"; });
    } else if (typeof startX != "number") {
      console.error("'startX' should be number");
    } else if (typeof startY != "number") {
      console.error("'startY' should be number");
    } else if (typeof endX != "number") {
     console.error("'endX' should be number");
    } else if (typeof endY != "number") {
     console.error("'endY' should be number");
    }

    this._tween = this._tween.filter(function(d) { return d.param != "position"; });

    this._tween.push({
      param: "position",
      from: [startX, startY],
      to: [endX, endY]
    });
    return this;
  };

  this.play = function() {
    if (typeof this._startTime == "undefined") {
      var now = Date.now();
      this._startTime = new Date(now);
      this._endTime = new Date(now + this._duration);
      var obj = this._obj
      this._tween.forEach(function(d) {
        p5.animation.add(d);
      });
    }
  };

  return this;
}
