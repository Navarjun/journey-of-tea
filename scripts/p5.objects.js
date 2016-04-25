var p5 = {};

p5.color = function(r, g, b) {
  this.r = r; this.g = g; this.b = b;
  return this;
};

p5.fill = function(color){
  fill(color.r, color.g, color.b);
};

p5.text = function(content, size, color) {
  this.class = "p5.text";
  this._text = content;
  this._size = size;
  this._color = color;
  this._align = "center";
  this._x = 0;
  this._y = 0;

  this.draw = function() {
    textSize(this._size);
    textAlign(this._align);
    p5.fill(this._color);
    text(this._text, this._x, this._y);
  }

  this.x = function($) {
    if (typeof $ == "undefined") {
      return this._x;
    } else if (typeof $ != "number") {
      console.error("'x' should be number");
    }
    this._x = $;
    return this;
  }

  this.y = function($) {
    if (typeof $ == "undefined") {
      return this._y;
    } else if (typeof $ != "number") {
      console.error("'y' should be number");
    }
    this._y = $;
    return this;
  }

  this.size = function($) {
    if (typeof $ == "undefined") {
      return this._size;
    } else if (typeof $ != "number") {
      console.error("'size' should be number");
    }
    this._size = $;
    return this;
  }

  return this;
}
