export default class Location{
    constructor(c) {
      this.color = '#70d9ff';
      this.location = c.locations[Math.floor(Math.random() * c.locations.length)];
      this.x = (c.width - 13) / 6 * 2 + 18;
      this.y = 53;
    }
  
    draw(c) {
      c.fillStyle = this.color;
      c.font = "11px Consolas";
      c.fillText(this.location, this.x, this.y);
    }
  
    update(c) {
    }
  }