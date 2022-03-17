import utils from './utils'
import Background from './background';
import PossLocations from './possibleLocations';
import Location from './location';
import Question from './question';

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

function listLocations() {
  for (let i=0; i < locations.length; i++) {
    if (possLocationsList.length <= locations.length - 1) {
      possLocationsList.push(locations[i]);
    }
  }
}

function getNewQuestion() {
  if (choice == 't') {
    prevChoice = 't';
    listLocations();
    options = ['n', 'h', 'd', 's', 'b', 'p', 'f', 'm'];
    return "Where would you like to travel?";
  } else if (choice == 's' && prevChoice != 't') {
    return "What do you want to sell?";
  } else if (choice == 'b' && prevChoice != 't') {
    return "What are you looking to buy?";
  }
  else return ""
}

function atNewLocation(){
  choice = "";
  prevChoice = "";
  goodInput = false;
  options = ["t", "s", "b"]
  init();
}

function getNewLocation() {
  if (choice == 'n' && prevChoice == 't') {
    atNewLocation();
    location.location = locations[0];
    return location.location;
  } else if (choice == 'h' && prevChoice == 't') {
    atNewLocation();
    location.location = locations[1];
    return location.location;
  } else if (choice == 'd' && prevChoice == 't') {
    atNewLocation();
    location.location = locations[2];
    return location.location;
  } else if (choice == 's' && prevChoice == 't') {
    atNewLocation();
    location.location = locations[3];
    return location.location;
  } else if (choice == 'b' && prevChoice == 't') {
    atNewLocation();
    location.location = locations[4];
    return location.location;
  } else if (choice == 'p' && prevChoice == 't') {
    atNewLocation();
    location.location = locations[5];
    return location.location;
  } else if (choice == 'f' && prevChoice == 't') {
    atNewLocation();
    location.location = locations[6];
    return location.location;
  } else if (choice == 'm' && prevChoice == 't') {
    atNewLocation();
    location.location = locations[7];
    return location.location;
  }
  else return location.location;
}


function init() {
  objects = [];
  location = new Location(canvas, colors, locations[Math.floor(Math.random() * locations.length)]);
  question = new Question(colors, "What would you like to do? (Buy, Sell, Travel)");
  var possLocations = new PossLocations(colors, possLocationsList);
  const bg = new Background(canvas, colors);
  objects.push(bg);
  objects.push(location);
  objects.push(question);
  console.log(choice);
  objects.push(possLocations);  
}


// Animation Loop
function animate() {
  setTimeout(() => {requestAnimationFrame(animate)}, 500);
  c.clearRect(0, 0, canvas.width, canvas.height);
  
  if (goodInput == true) {
    question.question = getNewQuestion();
    location.location = getNewLocation();
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
