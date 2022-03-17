export default class Question {
    constructor(colors, question) {
      this.x = 50;
      this.y = 100;
      this.color = colors[1];
      this.question = question;
    }
  
    draw(c) {
      c.fillStyle = this.color;
      c.font = "20px Consolas";
      c.fillText(this.question, this.x, this.y);
    }
  
    update(c, choice) {
      this.draw(c);
    }
  }