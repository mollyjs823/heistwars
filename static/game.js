import Background from './background.js';
import Question from './question.js';
import Cursor from "./cursor.js";
import Input from "./input.js";
import Inventory from './inventory.js';

function rightEdge(obj) {
  return obj.x + obj.width;
}
function bottomEdge(obj) {
  return obj.y + obj.height;
}

function Game () {
  //Called in beginning and every time location reset @ resetLocation()
  this.canvas = document.querySelector('canvas');
  this.context = this.canvas.getContext('2d');
  this.width = window.innerWidth;
  this.height = window.innerHeight
  this.context.canvas.width = this.width;
  this.context.canvas.height = this.height;

  document.keyPressed = false;
  document.addEventListener("keydown", function(e) {
    if (canPress) {
      document.keyPressed = e.key;
      canPress = false;
    }
  });
  document.addEventListener("keyup", function(e) {
    document.keyPressed = false;
    canPress = true;
  });

  this.context.wUnit = (this.width - 30) / 6;
  this.context.hUnit = (this.height - 30) / 4
  
  this.bg = new Background(this);
  this.question = new Question(this);
  this.inventory = new Inventory(this);
}
Game.prototype.update = function () {
    if (document.keyPressed) {
        if (document.keyPressed === 'ArrowUp') {
            this.question.moveUp();
        } else if (document.keyPressed === 'ArrowDown') {
            this.question.moveDown();
        } else if (document.keyPressed === 'Enter') {
          if (this.input && this.input.text) {
            var userInput = this.question.update(this.context, this.input.text);
            delete this.cursor;
            delete this.input;
          } else {
            var userInput = this.question.update(this.context);
          }
        } else if (this.input) {
          this.input.update(rightEdge(this.question), document.keyPressed);
        }
        document.keyPressed = false;
    }
    if (userInput) {
        if (!this.cursor && userInput === "transaction") {
          this.cursor = new Cursor(this.question.x + this.question.width + 5, this.question.y);
          this.input = new Input(this, rightEdge(this.question));
        }
    }
    if (this.cursor) {
      if (this.input) {
        this.cursor.update(rightEdge(this.input) + 5);
      } else {
        this.cursor.update(rightEdge(this.question));
      }
    }
}
Game.prototype.draw = function () {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.bg.draw(this.context);
  this.question.draw(this.context);
  this.inventory.draw(this.context);
  if (this.cursor) {
    this.cursor.draw(this.context);
    this.input.draw(this.context);
  }
}

var canPress = true; 
function playGame(game) {
    function main () {
        game.update();
        game.draw();
        window.requestAnimationFrame(main);
    }
    window.requestAnimationFrame(main);
}
var game = new Game();
playGame(game);