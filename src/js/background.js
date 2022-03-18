export default class Background {
    constructor(canvas, colors) {
      this.x = 0;
      this.y = 0;
      this.width = canvas.width;
      this.height = canvas.height;
      this.colors = colors;
    }
  
    draw(c) {
      c.beginPath();
      c.rect(this.x, this.y, this.width, this.height);
      c.fillStyle = this.colors['bg'];
      c.fill();
      c.closePath();

      let wUnit = (this.width - 30) / 6;
      let hUnit = 40;
      c.strokeStyle = this.colors['text'];
      c.lineWidth = 3;

      c.beginPath();
      c.strokeRect(this.x + 15, 30, wUnit * 2, hUnit);
      c.closePath();

      c.beginPath();
      c.strokeRect(this.x + 15 + wUnit * 2, 30, wUnit * 2, hUnit);
      c.closePath();

      c.beginPath();
      c.strokeRect(this.x + 15 + wUnit * 4, 30, wUnit * 2, hUnit);
      c.closePath();

      c.beginPath();
      c.strokeRect(this.x + 15, 30 + hUnit, wUnit * 3, 150);
      c.closePath();

      c.beginPath();
      c.strokeRect(this.x + 15 + wUnit * 3, 30 + hUnit, wUnit * 3, 150);
      c.closePath();

      c.fillStyle = this.colors['text'];
      c.font = "12px Consolas";
      c.fillText("Warehouse", this.x + 25, 53);
      c.fillText("Briefcase", this.x + 25 + wUnit * 4, 53);
    }
  
    update(c, choice) {
      this.draw(c);
    }
  }