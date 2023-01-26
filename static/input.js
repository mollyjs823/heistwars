export default class Input {
    constructor(c, x=0) {
      this.x = x;
      this.y = c.context.hUnit * 2;
      this.height = 4;
      this.color = '#00ff99';
      this.text = "";
      this.width = c.context.measureText(this.text).width;
    }
  
    draw(c) {
      c.fillStyle = this.color;
      c.font = "12px Consolas";
      c.fillText(this.text, this.x + 4, this.y);
      this.width = c.measureText(this.text).width;
    }
  
    update(x=this.x, key) {
      if (key == "Backspace") {
        this.text = this.text.substring(0, this.text.length - 1);
      } else if (key == 'Enter') {
        return true;
      } else if (key.length === 1 && key.match(/[0-9]/i)) {
        this.text += key.toLowerCase();
      }
      this.x = x;
      return false;
    }
  }