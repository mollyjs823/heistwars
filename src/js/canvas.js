import utils from './utils'

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;


const colors = ['#171717', '#70d9ff'];

// Event Listeners

// Objects
class Background {
  constructor(color) {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.color = color;
  }

  draw() {
    c.beginPath()
    c.rect(this.x, this.y, this.width, this.height);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();
  }
}

class Location{
  constructor(location) {
    this.x = 50;
    this.y = 50;
    this.color = colors[1];
    this.location = location;
  }

  draw() {
    c.fillStyle = this.color;
    c.font = "15px Consolas";
    c.fillText(this.location, this.x, this.y);
  }

  update() {
    this.draw();
  }
}

class PossLocations{
  constructor(locations) {
    this.x = 50;
    this.y = 130;
    this.color = colors[1];
    this.locations = locations;
  }

  draw() {
    c.fillStyle = this.color;
    c.font = "10px Consolas";
    for (let i=0; i < this.locations.length; i++){
      c.fillText(this.locations[i], this.x, this.y + (i * 10));
    }
  }

  update() {
    this.draw();
  }
}

class Question {
  constructor(question) {
    this.x = 50;
    this.y = 100;
    this.color = colors[1];
    this.question = question;
  }

  draw() {
    c.fillStyle = this.color;
    c.font = "20px Consolas";
    c.fillText(this.question, this.x, this.y);
  }

  update() {
    this.draw();
  }
}



// Implementation
let objects;
let question = new Question("What would you like to do?");
const locations = ["New York City, New York", 
                    "Hong Kong, China", 
                    "Dubai, United Arab Emirates", 
                    "San Francisco, California", 
                    "Berlin, Germany", 
                    "Paris, France", 
                    "Florence, Italy",
                    "Melbourne, Australia"];
var possLocationsList = [];
const options = ["t", "s", "b"];
const travelOptions = ['n', 'h', 'd', 's', 'b', 'p', 'f', 'm'];


function listLocations() {
  for (let i=0; i < locations.length; i++) {
    if (possLocationsList.length <= locations.length - 1) {
      possLocationsList.push(locations[i]);
    }
  }
}

function getNewQuestion() {
  if (choice == 't') {
    listLocations();
    return "Where would you like to travel?";
  } else if (choice == 's') {
    return "What do you want to sell?";
  } else if (choice == 'b') {
    return "What are you looking to buy?";
  }
}


function init() {
  objects = [];
  
  var location = new Location(locations[Math.floor(Math.random() * locations.length)]);
  var possLocations = new PossLocations(possLocationsList);
  const bg = new Background(colors[0]);
  objects.push(bg);
  objects.push(location);
  objects.push(question);
  objects.push(possLocations);
}


// Animation Loop
function animate() {
  setTimeout(() => {requestAnimationFrame(animate)}, 500);
  c.clearRect(0, 0, canvas.width, canvas.height);
  
  if (goodInput == true) {
    question.question = getNewQuestion();
  }

  objects.forEach(object => {
    object.update();
  })
}

init();
animate();

function getOverallInput(e){
  if (options.includes(e.key)){
  goodInput = true;
  choice = e.key;
  document.addEventListener('keyup', (e) => {
    console.log("correct");
  });
}}

var goodInput = false;
var choice = ""
document.addEventListener('keyup', getOverallInput(e));
  //   if (choice == 't' && travelOptions.includes(e.key)){
  //     console.log("Going there");
  //   }