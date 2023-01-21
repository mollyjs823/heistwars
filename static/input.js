export default class Input {
    constructor(c) {
      this.x = 0;
      this.y = c.context.hUnit * 2;
      this.width = 0;
      this.height = 4;
      this.color = '#70d9ff';
      this.text = "";
    }
  
    draw(c) {
      c.fillStyle = this.color;
      c.font = "12px Consolas";
      c.fillText(this.text, this.x, this.y);
      this.width = c.measureText(this.text).width;
    }
  
    update(x, key) {
        if (key == "Backspace") {
            this.text = this.text.substring(0, this.text.length - 1);
        } else if (key.length === 1 && key.match(/[a-zA-Z]/i)) {
            this.text += key.toLowerCase();
        }
        this.x = x;
    }
  }