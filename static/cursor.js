export default class Cursor {
    constructor(x=0, y=0) {
        this.width = 5;
        this.height = 15;
        this.x = x;
        this.y = y;
        this.colors = {'text': '#ffffff'};
        this.on = true;
        this.count = 0;
    }
  
    draw(c) {
        if (this.on) {
            c.fillStyle = this.colors['text'];
            c.fillRect(this.x, this.y - 12, this.width, this.height);
        }
    }
  
    update(x=this.x) {
        this.x = x;
        this.count++;
        if (this.count == 30) {
            this.on = false;
        } else if (this.count == 60) {
            this.on = true;
            this.count = 0;
        }
    }
  }