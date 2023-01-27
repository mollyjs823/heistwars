import Values from "./values.js";

export default class Location {
  constructor(c) {
    this.color = '#70d9ff';
    let locations = new Values().getLocations();
    this.location = locations[Math.floor(Math.random() * locations.length)];
    this.x = (c.context.wUnit * 2) + 30;
  }

  draw(c) {
    c.fillStyle = this.color;
    c.font = "16px Consolas";
    c.fillText(this.location, this.x, 62);
  }

  update(value) {
    this.location = value;
  }
}