export default class Question {
    constructor(c) {
      this.x = 30;
      this.y = c.context.hUnit * 2;
      this.color = '#70d9ff';
      this.question = "What would you like to do? (Buy, Sell, Travel)";
      this.width = c.context.measureText(this.question).width;
      this.height = 4;
    }
  
    draw(c) {
      c.fillStyle = this.color;
      c.font = "12px Consolas";
      c.fillText(this.question, this.x, this.y);
      this.width = c.measureText(this.question).width;
    }
  
    update(c) {
    }
  }