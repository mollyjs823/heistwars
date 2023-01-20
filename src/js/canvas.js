import Background from './background';
import PossLocations from './possibleLocations';
import Location from './location';
import Question from './question';
import Inventory from './inventory';
import Money from './money';
import Values from './values';

//Canvas variables
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;
const colors = {'bg': '#171717', 'text': '#70d9ff'};

// Global Variables
let objects;
let question;
let inv;
let money;
let currValues;
let location;
let locations = ["New York City, New York", 
                    "Hong Kong, China", 
                    "Dubai, United Arab Emirates", 
                    "San Francisco, California", 
                    "Berlin, Germany", 
                    "Paris, France", 
                    "Florence, Italy",
                    "Melbourne, Australia"];
//Listed to screen as possibilities
var possLocationsList = [];
//Initial options: travel, sell, buy; change throughout game
let options = ["t", "s", "b"];
//Warehouse inv
let wInventory = {
  "Diamonds": 0,
  "Emeralds": 0,
  "Rubies": 0,
};
//Briefcase inv
let bInventory = {
  "Diamonds": 5,
  "Emeralds": 0,
  "Rubies": 2,
  //"Rockefeller Emerald": true,
};
//Determine if selling or buying
let selling = false;
let startMoney = {
  'cash': 2000,
  'bank': 0,
  'debt': 5000,
}

function listLocations() {
  //Populates possible locations list from all locations
  for (let i=0; i < locations.length; i++) {
    if (possLocationsList.length <= locations.length - 1) {
      possLocationsList.push(locations[i]);
    }
  }
}

function getNewQuestion() {
  //Get question to display on screen, set options
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
  //Called when travel and after selling/buying
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
  //Set new location from user choice when traveling
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
  //Determine options from inv, return new question
  function range(item){
    let arr = Array.from(Array(item).keys())
    arr.push(arr.length);
    var strArr = arr.map(String);
    return strArr;
  }
  switch(choice){
    case 'd':
      options = range(bInventory["Diamonds"]);
      prevChoice = 'Diamonds';
      goodInput = false;
      return "How many diamonds would you like to sell?";
    case 'e':
      options = range(bInventory["Emeralds"]);
      prevChoice = 'Emeralds';
      goodInput = false;
      return "How many emeralds would you like to sell?";
    case 'r':
      options = range(bInventory["Rubies"]);
      prevChoice = 'Rubies';
      goodInput = false;
      return "How many rubies would you like to sell?";
    default:
      return "What do you want to sell?";
  }
}

function getNumSelling(){
  //Convert user input to number
    return parseInt(choice);
}

function getBuying(){
  //Determine options from max possible and current amount, return new question
  function range(item){
    let maxAmount = 9;
    let currAmount = item;
    let allowed = maxAmount - currAmount;
    let arr = Array.from(Array(allowed).keys());
    arr.push(arr.length);
    var strArr = arr.map(String);
    return strArr;
  }
  let itemPrice = currValues.locations[currValues.currLocation];
  switch(choice){
    case 'd':
      //console.log("buying diamonds");
      options = range(bInventory["Diamonds"]);
      prevChoice = 'Diamonds';
      goodInput = false;
      return `How many diamonds would you like to buy? You have enough cash for ${Math.floor(money.cash / itemPrice['Diamonds'])}`;
    case 'e':
      //console.log("buying emeralds");
      options = range(bInventory["Emeralds"]);
      prevChoice = 'Emeralds';
      goodInput = false;
      return `How many emeralds would you like to buy? You have enough cash for ${Math.floor(money.cash / itemPrice['Emeralds'])}`;
    case 'r':
      //console.log("buying rubies");
      options = range(bInventory["Rubies"]);
      prevChoice = 'Rubies';
      goodInput = false;
      return `How many rubies would you like to buy? You have enough cash for ${Math.floor(money.cash / itemPrice['Rubies'])}`;
    default:
      return "What are you looking to buy?";
  }
}

function getNumBuying(){
  //Convert user input to number
  return parseInt(choice);
}



function init() {
  //Called in beginning and every time location reset @ resetLocation()
  const bg = new Background(canvas, colors);
  location = new Location(canvas, colors, locations[Math.floor(Math.random() * locations.length)]);
  question = new Question(colors, "What would you like to do? (Buy, Sell, Travel)");
  var possLocations = new PossLocations(colors, possLocationsList);
  inv = new Inventory(wInventory, bInventory, colors);
  money = new Money(colors, startMoney);
  currValues = new Values(location.location, colors);

  objects = [];
  objects.push(bg);
  objects.push(location);
  objects.push(question);
  objects.push(possLocations);  
  objects.push(inv);
  objects.push(money);
  objects.push(currValues);
}


// ANIMATION LOOP
function animate() {
  setTimeout(() => {requestAnimationFrame(animate)}, 100);
  c.clearRect(0, 0, canvas.width, canvas.height);
  currValues.currLocation = location.location;
  
  if (goodInput == true) {
    question.question = getNewQuestion();
    location.location = getNewLocation();
  }

  let itemPrice = currValues.locations[currValues.currLocation][prevChoice];
  //Selling
  if (goodInput == true && prevChoice == "s"){
    goodInput = false;
    selling = true;
    question.question = getSelling();
  }
  if (goodInput == true && selling == true && (prevChoice == 'Diamonds' || prevChoice == 'Emeralds' || prevChoice == 'Rubies')) {
    goodInput = false;
    money.cash = inv.decrease(prevChoice, getNumSelling(), itemPrice, money.cash);
    let currLoc = location.location;
    resetLocation();
    location.location = currLoc;
  }

  //Buying
  //PROBLEM: CANT ENTER 2 DIGIT NUMBER !!!!!!!!!!!!!!!!!!!!!!!!!!
  if (goodInput == true && prevChoice == 'b'){
    goodInput = false;
    question.question = getBuying();
  }
  if (goodInput == true && selling == false && (prevChoice == 'Diamonds' || prevChoice == 'Emeralds' || prevChoice == 'Rubies')) {
    goodInput = false;
    if (money.cash >= itemPrice * getNumBuying()){
      money.cash = inv.increase(prevChoice, getNumBuying(), itemPrice, money.cash);
    }
    let currLoc = location.location;
    resetLocation();
    location.location = currLoc;
  }

  objects.forEach(object => {
    object.update(c, choice);
  })
}

//Initialize user input
var goodInput = false;
var choice = "";
var prevChoice = "";

init();
animate();

//User input check
document.addEventListener('keyup', (e) => {
  if (options.includes(e.key)){
    choice = e.key;
    goodInput = true;
    }
  });
