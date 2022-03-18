export default class Question {
    constructor(colors, question) {
      this.x = 15;
      this.y = 250;
      this.color = colors['text'];
      this.question = question;
    }
  
    draw(c, choice) {
      c.fillStyle = this.color;
      c.font = "12px Consolas";
      c.fillText(this.question, this.x, this.y);
    }
  
    update(c, choice) {
      this.draw(c, choice);
    }
  }