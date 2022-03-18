import Background from './background';
import PossLocations from './possibleLocations';
import Location from './location';
import Question from './question';
import Inventory from './inventory';
import Money from './money';
import Values from './values';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;
const colors = ['#171717', '#70d9ff'];


// Global Variables
let objects;
let location;
let question;
let locations = ["New York City, New York", 
                    "Hong Kong, China", 
                    "Dubai, United Arab Emirates", 
                    "San Francisco, California", 
                    "Berlin, Germany", 
                    "Paris, France", 
                    "Florence, Italy",
                    "Melbourne, Australia"];
var possLocationsList = [];
let options = ["t", "s", "b"];
var inv;
var money;
var currValues;
let wInventory = {
  "Diamonds": 0,
  "Emeralds": 0,
  "Rubies": 0,
};
let bInventory = {
  "Diamonds": 5,
  "Emeralds": 0,
  "Rubies": 2,
  //"Rockefeller Emerald": true,
};
let selling = false;
let startMoney = {
  'cash': 0,
  'bank': 0,
  'debt': 5000,
} 

//Implementation
function listLocations() {
  for (let i=0; i < locations.length; i++) {
    if (possLocationsList.length <= locations.length - 1) {
      possLocationsList.push(locations[i]);
    }
  }
}

function getNewQuestion() {
  if (choice == 't' && prevChoice != 's' && prevChoice != 'b') {
    prevChoice = 't';
    listLocations();
    options = ['n', 'h', 'd', 's', 'b', 'p', 'f', 'm'];
    return "Where would you like to travel?";
  } else if (choice == 's' && prevChoice != 't' && prevChoice != 'b') {
    prevChoice = 's';
    selling = true;
    options = ['d', 'e', 'r'];
    return "";
  } else if (choice == 'b' && prevChoice != 't' && prevChoice != 's') {
    prevChoice = 'b';
    selling = false;
    options = ['d', 'e', 'r'];
    return "";
  }
  else return ""
}

function resetLocation(){
  choice = "";
  prevChoice = "";
  goodInput = false;
  options = ["t", "s", "b"];
  let currCash = money.cash;
  let currBank = money.bank;
  let currDebt = money.debt;
  init();
  money.cash = currCash;
  money.bank = currBank;
  money.debt = currDebt;
}

function getNewLocation() {
  if (choice == 'n' && prevChoice == 't') {
    resetLocation();
    location.location = locations[0];
    return location.location;
  } else if (choice == 'h' && prevChoice == 't') {
    resetLocation();
    location.location = locations[1];
    return location.location;
  } else if (choice == 'd' && prevChoice == 't') {
    resetLocation();
    location.location = locations[2];
    return location.location;
  } else if (choice == 's' && prevChoice == 't') {
    resetLocation();
    location.location = locations[3];
    return location.location;
  } else if (choice == 'b' && prevChoice == 't') {
    resetLocation();
    location.location = locations[4];
    return location.location;
  } else if (choice == 'p' && prevChoice == 't') {
    resetLocation();
    location.location = locations[5];
    return location.location;
  } else if (choice == 'f' && prevChoice == 't') {
    resetLocation();
    location.location = locations[6];
    return location.location;
  } else if (choice == 'm' && prevChoice == 't') {
    resetLocation();
    location.location = locations[7];
    return location.location;
  }
  else return location.location;
}

function getSelling(){
  function range(item){
    let arr = Array.from(Array(item).keys())
    arr.push(arr.length);
    var strArr = arr.map(String);
    return strArr;
  }
  switch(choice){
    case 'd':
      //console.log("selling diamonds");
      options = range(bInventory["Diamonds"]);
      prevChoice = 'Diamonds';
      goodInput = false;
      return "How many diamonds would you like to sell?";
    case 'e':
      //console.log("selling emeralds");
      options = range(bInventory["Emeralds"]);
      prevChoice = 'Emeralds';
      goodInput = false;
      return "How many emeralds would you like to sell?";
    case 'r':
      //console.log("selling rubies");
      options = range(bInventory["Rubies"]);
      prevChoice = 'Rubies';
      goodInput = false;
      return "How many rubies would you like to sell?";
    default:
      return "What do you want to sell?";
  }
}

function getNumSelling(){
    return parseInt(choice);
}

function getBuying(){
  function range(item){
    let maxAmount = 9;
    let currAmount = item;
    let allowed = maxAmount - currAmount;
    let arr = Array.from(Array(allowed).keys());
    arr.push(arr.length);
    var strArr = arr.map(String);
    return strArr;
  }
  switch(choice){
    case 'd':
      //console.log("buying diamonds");
      options = range(bInventory["Diamonds"]);
      prevChoice = 'Diamonds';
      goodInput = false;
      return "How many diamonds would you like to buy?";
    case 'e':
      //console.log("buying emeralds");
      options = range(bInventory["Emeralds"]);
      prevChoice = 'Emeralds';
      goodInput = false;
      return "How many emeralds would you like to buy?";
    case 'r':
      //console.log("buying rubies");
      options = range(bInventory["Rubies"]);
      prevChoice = 'Rubies';
      goodInput = false;
      return "How many rubies would you like to buy?";
    default:
      return "What are you looking to buy?";
  }
}

function getNumBuying(){
    return parseInt(choice);
}



function init() {
  const bg = new Background(canvas, colors);
  objects = [];
  location = new Location(canvas, colors, locations[Math.floor(Math.random() * locations.length)]);
  question = new Question(colors, "What would you like to do? (Buy, Sell, Travel)");
  var possLocations = new PossLocations(colors, possLocationsList);
  inv = new Inventory(wInventory, bInventory, colors);
  money = new Money(colors, startMoney);
  currValues = new Values(location.location, colors);
  objects.push(bg);
  objects.push(location);
  objects.push(question);
  objects.push(possLocations);  
  objects.push(inv);
  objects.push(money);
  objects.push(currValues);
}


// Animation Loop
function animate() {
  setTimeout(() => {requestAnimationFrame(animate)}, 500);
  c.clearRect(0, 0, canvas.width, canvas.height);
  currValues.currLocation = location.location;
  
  if (goodInput == true) {
    question.question = getNewQuestion();
    location.location = getNewLocation();
  }

  //SELLING
  if (goodInput == true && prevChoice == "s"){
    goodInput = false;
    selling = true;
    question.question = getSelling();
  }
  if (goodInput == true && selling == true && (prevChoice == 'Diamonds' || prevChoice == 'Emeralds' || prevChoice == 'Rubies')) {
    goodInput = false;
    money.cash = inv.decrease(prevChoice, getNumSelling(), (currValues.locations[currValues.currLocation][prevChoice]), money.cash);
    let currLoc = location.location;
    resetLocation();
    location.location = currLoc;
  }

  //BUYING
  if (goodInput == true && prevChoice == 'b'){
    goodInput = false;
    question.question = getBuying();
  }
  if (goodInput == true && selling == false && (prevChoice == 'Diamonds' || prevChoice == 'Emeralds' || prevChoice == 'Rubies')) {
    goodInput = false;
    // if (cash.cash >= currValues.locations[location.location][prevChoice]){
    //   console.log('ENough money');
    // }
    inv.increase(prevChoice, getNumBuying());
    let currLoc = location.location;
    resetLocation();
    location.location = currLoc;
  }

  objects.forEach(object => {
    object.update(c, choice);
  })
}

var goodInput = false;
var choice = "";
var prevChoice = "";

init();
animate();


//User input check
document.addEventListener('keyup', (e) => {
  if (options.includes(e.key)){
    goodInput = true;
    choice = e.key;
  }
});
