export default class Question {
    constructor(colors, question) {
      this.x = 15;
      this.y = 250;
      this.color = colors[1];
      this.question = question;
    }
  
    draw(c) {
      c.fillStyle = this.color;
      c.font = "15px Consolas";
      c.fillText(this.question, this.x, this.y);
    }
  
    update(c, choice) {
      this.draw(c);
    }
  }