export default class PossLocations{
    constructor(c) {
      this.x = 35;
      this.y = c.context.hUnit + 60;
      this.color = '#70d9ff';
      this.locations = c.locations;
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