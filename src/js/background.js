export default class Background {
    constructor(canvas, color) {
      this.x = 0;
      this.y = 0;
      this.width = canvas.width;
      this.height = canvas.height;
      this.color = color;
    }
  
    draw(c) {
      c.beginPath()
      c.rect(this.x, this.y, this.width, this.height);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  
    update(c, choice) {
      this.draw(c);
    }
  }