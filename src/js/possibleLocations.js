export default class PossLocations{
    constructor(colors, locations) {
      this.x = 15;
      this.y = 270;
      this.color = colors[1];
      this.locations = locations;
    }
  
    draw(c) {
      c.fillStyle = this.color;
      c.font = "10px Consolas";
      for (let i=0; i < this.locations.length; i++){
        c.fillText(this.locations[i], this.x, this.y + (i * 10));
      }
    }
  
    update(c, choice) {
      if (choice == 't'){
        this.draw(c);
      }
    }
  }