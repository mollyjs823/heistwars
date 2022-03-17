export default class Location{
    constructor(colors, location) {
      this.x = 50;
      this.y = 50;
      this.color = colors[1];
      this.location = location;
    }
  
    draw(c) {
      c.fillStyle = this.color;
      c.font = "15px Consolas";
      c.fillText(this.location, this.x, this.y);
    }
  
    update(c, choice) {
      this.draw(c);
    }
  }