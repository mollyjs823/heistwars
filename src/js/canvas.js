import Background from './background';
import PossLocations from './possibleLocations';
import Location from './location';
import Question from './question';
import Inventory from './inventory';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;
const colors = ['#171717', '#70d9ff'];


// Implementation
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


let wInventory = {
  "Diamonds": 0,
  "Emeralds": 0,
  "Rubies": 0,
  "Ghent Altarpiece PLACEHOLDER": true,
};
let bInventory = {
  "Diamonds": 9,
  "Emeralds": 0,
  "Rubies": 2,
  "Picasso PLACEHOLDER": true,
};

function listLocations() {
  for (let i=0; i < locations.length; i++) {
    if (possLocationsList.length <= locations.length - 1) {
      possLocationsList.push(locations[i]);
    }
  }
}

function getNewQuestion() {
  if (choice == 't' && prevChoice != 's') {
    prevChoice = 't';
    listLocations();
    options = ['n', 'h', 'd', 's', 'b', 'p', 'f', 'm'];
    return "Where would you like to travel?";
  } else if (choice == 's' && prevChoice != 't') {
    prevChoice = 's';
    options = ['d', 'e', 'r'];
    return "";
  } else if (choice == 'b' && prevChoice != 't') {
    return "What are you looking to buy?";
  }
  else return ""
}

function resetLocation(){
  choice = "";
  prevChoice = "";
  goodInput = false;
  options = ["t", "s", "b"]
  init();
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
    return choice;
}

var inv;
function init() {
  const bg = new Background(canvas, colors);
  objects = [];
  location = new Location(canvas, colors, locations[Math.floor(Math.random() * locations.length)]);
  question = new Question(colors, "What would you like to do? (Buy, Sell, Travel)");
  var possLocations = new PossLocations(colors, possLocationsList);
  inv = new Inventory(canvas, wInventory, bInventory, colors);
  objects.push(bg);
  objects.push(location);
  objects.push(question);
  objects.push(possLocations);  
  objects.push(inv);
}


// Animation Loop
function animate() {
  setTimeout(() => {requestAnimationFrame(animate)}, 500);
  c.clearRect(0, 0, canvas.width, canvas.height);
  
  if (goodInput == true) {
    question.question = getNewQuestion();
    location.location = getNewLocation();
  }

  if (goodInput == true && prevChoice == "s"){
    goodInput = false;
    question.question = getSelling();
  }

  if (goodInput == true && (prevChoice == 'Diamonds' || prevChoice == 'Emeralds' || prevChoice == 'Rubies')) {
    goodInput = false;
    inv.decrease(prevChoice, getNumSelling());
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
