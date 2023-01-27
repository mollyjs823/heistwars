export default class Background {
    constructor(canvas) {
      this.x = 15;
      this.y = 30;
      this.width = canvas.width;
      this.height = canvas.height;
      this.colors = {'text': '#70d9ff'}
    }
  
    draw(c) {
      // GRID
      // 1 2 3 4 5 6 
      // 1 2 3 4 5 6

      let wUnit = c.wUnit;
      let hUnit = c.hUnit / 4;

      c.strokeStyle = this.colors['text'];
      c.lineWidth = 3;

      c.beginPath();
      c.strokeRect(this.x, this.y, wUnit * 2, hUnit);
      c.closePath();

      c.beginPath();
      c.strokeRect(this.x + wUnit * 2, this.y, wUnit * 2, hUnit);
      c.closePath();

      c.beginPath();
      c.strokeRect(this.x + wUnit * 4, this.y, wUnit * 2, hUnit);
      c.closePath();

      c.beginPath();
      c.strokeRect(this.x, this.y + hUnit, wUnit * 3, hUnit * 6);
      c.closePath();

      c.beginPath();
      c.strokeRect(this.x + wUnit * 3, this.y + hUnit, wUnit * 3, hUnit * 6);
      c.closePath();

      c.fillStyle = this.colors['text'];
      c.font = "16px Consolas";
      c.fillText("Warehouse", this.x + 15, 62);
      c.fillText("Briefcase", this.x + 15 + wUnit * 4, 62);
    }
  }