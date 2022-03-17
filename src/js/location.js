export default class Location{
    constructor(canvas, colors, location) {
      this.color = colors[1];
      this.location = location;
      this.x = (canvas.width - 13) / 6 * 2 + 18;
      this.y = 53;
    }
  
    draw(c) {
      c.fillStyle = this.color;
      c.font = "11px Consolas";
      c.fillText(this.location, this.x, this.y);
    }
  
    update(c, choice) {
      this.draw(c);
    }
  }