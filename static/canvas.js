import Background from './background.js';
import Cursor from './cursor.js';
import PossLocations from './optionsMap.js';
import Location from './location.js';
import Question from './question.js';
import Input from './input.js';
// import Inventory from './inventory.js';
// import Money from './money.js';
// import Values from './values.js';

// // Global Variables
// let objects;
// let inv;
// let money;
// let currValues;
// let options = ["t", "s", "b", "travel", "sell", "buy"];
// //Warehouse inv
// let wInventory = {
//   "Diamonds": 0,
//   "Emeralds": 0,
//   "Rubies": 0,
// };
// //Briefcase inv
// let bInventory = {
//   "Diamonds": 5,
//   "Emeralds": 0,
//   "Rubies": 2,
//   //"Rockefeller Emerald": true,
// };
// //Determine if selling or buying
// let selling = false;
// let startMoney = {
//   'cash': 2000,
//   'bank': 0,
//   'debt': 5000,
// }

// function resetLocation(){
//   //Called when travel and after selling/buying
//   choice = "";
//   prevChoice = "";
//   goodInput = false;
//   options = ["t", "s", "b"];
//   let currCash = money.cash;
//   let currBank = money.bank;
//   let currDebt = money.debt;
//   init();
//   money.cash = currCash;
//   money.bank = currBank;
//   money.debt = currDebt;
// }

// function getNewLocation() {
//   //Set new location from user choice when traveling
//   if (choice == 'n' && prevChoice == 't') {
//     resetLocation();
//     location.location = locations[0];
//     return location.location;
//   } else if (choice == 'h' && prevChoice == 't') {
//     resetLocation();
//     location.location = locations[1];
//     return location.location;
//   } else if (choice == 'd' && prevChoice == 't') {
//     resetLocation();
//     location.location = locations[2];
//     return location.location;
//   } else if (choice == 's' && prevChoice == 't') {
//     resetLocation();
//     location.location = locations[3];
//     return location.location;
//   } else if (choice == 'b' && prevChoice == 't') {
//     resetLocation();
//     location.location = locations[4];
//     return location.location;
//   } else if (choice == 'p' && prevChoice == 't') {
//     resetLocation();
//     location.location = locations[5];
//     return location.location;
//   } else if (choice == 'f' && prevChoice == 't') {
//     resetLocation();
//     location.location = locations[6];
//     return location.location;
//   } else if (choice == 'm' && prevChoice == 't') {
//     resetLocation();
//     location.location = locations[7];
//     return location.location;
//   }
//   else return location.location;
// }

// function getSelling(){
//   //Determine options from inv, return new question
//   function range(item){
//     let arr = Array.from(Array(item).keys())
//     arr.push(arr.length);
//     var strArr = arr.map(String);
//     return strArr;
//   }
//   switch(choice){
//     case 'd':
//       options = range(bInventory["Diamonds"]);
//       prevChoice = 'Diamonds';
//       goodInput = false;
//       return "How many diamonds would you like to sell?";
//     case 'e':
//       options = range(bInventory["Emeralds"]);
//       prevChoice = 'Emeralds';
//       goodInput = false;
//       return "How many emeralds would you like to sell?";
//     case 'r':
//       options = range(bInventory["Rubies"]);
//       prevChoice = 'Rubies';
//       goodInput = false;
//       return "How many rubies would you like to sell?";
//     default:
//       return "What do you want to sell?";
//   }
// }

// function getNumSelling(){
//   //Convert user input to number
//     return parseInt(choice);
// }

// function getBuying(){
//   //Determine options from max possible and current amount, return new question
//   function range(item){
//     let maxAmount = 9;
//     let currAmount = item;
//     let allowed = maxAmount - currAmount;
//     let arr = Array.from(Array(allowed).keys());
//     arr.push(arr.length);
//     var strArr = arr.map(String);
//     return strArr;
//   }
//   let itemPrice = currValues.locations[currValues.currLocation];
//   switch(choice){
//     case 'd':
//       //console.log("buying diamonds");
//       options = range(bInventory["Diamonds"]);
//       prevChoice = 'Diamonds';
//       goodInput = false;
//       return `How many diamonds would you like to buy? You have enough cash for ${Math.floor(money.cash / itemPrice['Diamonds'])}`;
//     case 'e':
//       //console.log("buying emeralds");
//       options = range(bInventory["Emeralds"]);
//       prevChoice = 'Emeralds';
//       goodInput = false;
//       return `How many emeralds would you like to buy? You have enough cash for ${Math.floor(money.cash / itemPrice['Emeralds'])}`;
//     case 'r':
//       //console.log("buying rubies");
//       options = range(bInventory["Rubies"]);
//       prevChoice = 'Rubies';
//       goodInput = false;
//       return `How many rubies would you like to buy? You have enough cash for ${Math.floor(money.cash / itemPrice['Rubies'])}`;
//     default:
//       return "What are you looking to buy?";
//   }
// }

// function getNumBuying(){
//   //Convert user input to number
//   return parseInt(choice);
// }

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
  this.context.hUnit = (this.height - 30) / 4;

  this.locations = ["New York City, New York", 
                    "Hong Kong, China", 
                    "Dubai, United Arab Emirates", 
                    "San Francisco, California", 
                    "Berlin, Germany", 
                    "Paris, France", 
                    "Florence, Italy",
                    "Melbourne, Australia"];
  
  this.bg = new Background(this);
  this.location = new Location(this);
  this.question = new Question(this);
  this.cursor = new Cursor(rightEdge(this.question) + 5, bottomEdge(this.question));
  this.input = new Input(this);
  this.possLocations = new PossLocations(this);
  // inv = new Inventory(wInventory, bInventory, colors);
  // money = new Money(colors, startMoney);
  // currValues = new Values(location.location, colors);
}
Game.prototype.update = function () {
  if (document.keyPressed) {
    let action = this.input.update(rightEdge(this.question) + 5, document.keyPressed);
    document.keyPressed = false;
    if (action) {
      this.question.update(this.processInput(this.input.getText()))
    }
  }
  if (rightEdge(this.input) > rightEdge(this.question)) {
    this.cursor.update(rightEdge(this.input), bottomEdge(this.input));
  } else {
    this.cursor.update(rightEdge(this.question) + 5, bottomEdge(this.question));
  }
}
Game.prototype.draw = function () {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.bg.draw(this.context);
  this.location.draw(this.context);
  this.question.draw(this.context);
  this.possLocations.draw(this.context);
  this.input.draw(this.context);
  this.cursor.draw(this.context);
}

// function animate() {
  // currValues.currLocation = location.location;
  
  // if (goodInput == true) {
  //   question.question = getNewQuestion();
  //   location.location = getNewLocation();
  // }

  // let itemPrice = currValues.locations[currValues.currLocation][prevChoice];
  // //Selling
  // if (goodInput == true && prevChoice == "s"){
  //   goodInput = false;
  //   selling = true;
  //   question.question = getSelling();
  // }
  // if (goodInput == true && selling == true && (prevChoice == 'Diamonds' || prevChoice == 'Emeralds' || prevChoice == 'Rubies')) {
  //   goodInput = false;
  //   money.cash = inv.decrease(prevChoice, getNumSelling(), itemPrice, money.cash);
  //   let currLoc = location.location;
  //   resetLocation();
  //   location.location = currLoc;
  // }

  //Buying
  // if (goodInput == true && prevChoice == 'b'){
  //   goodInput = false;
  //   question.question = getBuying();
  // }
  // if (goodInput == true && selling == false && (prevChoice == 'Diamonds' || prevChoice == 'Emeralds' || prevChoice == 'Rubies')) {
  //   goodInput = false;
  //   if (money.cash >= itemPrice * getNumBuying()){
  //     money.cash = inv.increase(prevChoice, getNumBuying(), itemPrice, money.cash);
  //   }
  //   let currLoc = location.location;
  //   resetLocation();
  //   location.location = currLoc;
  // }

  // objects.forEach(object => {
  //   object.update(c, choice);
  // })
// }

//Initialize user input
// var goodInput = false;
// var choice = "";
// var prevChoice = "";

//User input check
// document.addEventListener('keyup', (e) => {
//   if (options.includes(e.key)){
//     choice = e.key;
//     goodInput = true;
//     }
// });

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