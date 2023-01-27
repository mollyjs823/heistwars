import OptionsMap from "./optionsMap.js";
import Location from "./location.js";

export default class Question {
    constructor(c) {
      this.x = 30;
      this.y = c.context.hUnit * 2;
      this.color = '#70d9ff';
      this.question = "What would you like to do?";
      this.map = new OptionsMap(c);
      this.options = this.map.options
      this.selected = this.options[0];
      this.height = 16;
      this.width = c.context.measureText(this.question).width;

      this.resetting = false;
      this.transaction = false;
      this.location = new Location(c);
    }

    moveUp() {
      let index = this.options.indexOf(this.selected) - 1;
      if (index < 0) {
        index = this.options.length - 1;
      }
      this.selected = this.options[index];
    }
    
    moveDown() {
      let index = this.options.indexOf(this.selected) + 1;
      if (index >= this.options.length) {
        index = 0;
      }
      this.selected = this.options[index];
    }
  
    draw(c) {
      this.location.draw(c);
      c.font = "12px Consolas";
      c.fillStyle = this.color;
      c.fillText(this.question, this.x, this.y);
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i] == this.selected) {
          c.fillStyle = "#00ff99";
          c.fillRect(this.x, this.y + 6 + (this.height * i), 5, 14);
          c.fillText(this.options[i], this.x + 5, this.y + this.height + (this.height * i));
          c.fillText(this.options[i], this.x + 5, this.y + this.height + (this.height * i));
          c.fillStyle = this.color;
        } else {
          c.fillText(this.options[i], this.x + 5, this.y + this.height + (this.height * i));
        }
      }
    }
  
    update(c=null, num=null) {
      if (this.resetting) {
        this.resetting = false;
        this.location.update(this.selected);
        this.options = this.map.options;
      } else if (this.transaction) {
        this.transaction = false;
        this.question = 'How many?';
        this.width = c.measureText(this.question).width;
        this.options = [];
        return "transaction";  
      } else if (num) {
        this.options = this.map.options;
        this.question = "What would you like to do?";
      } else {
        let choice = this.map.getOptions(this.selected); 
        this.options = choice.options;
        this.question = choice.question;
        if (choice.level == 'primary') {
          this.resetting = true;
        } else if (choice.level == 'transaction') {
          this.transaction = true;
        }
      }
      this.selected = this.options[0];
      return false;
    }
  }