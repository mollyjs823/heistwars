/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;
var colors = ['#171717', '#70d9ff']; // Event Listeners
// Objects

var Background = /*#__PURE__*/function () {
  function Background(color) {
    _classCallCheck(this, Background);

    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.color = color;
  }

  _createClass(Background, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.rect(this.x, this.y, this.width, this.height);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return Background;
}();

var Location = /*#__PURE__*/function () {
  function Location(location) {
    _classCallCheck(this, Location);

    this.x = 50;
    this.y = 50;
    this.color = colors[1];
    this.location = location;
  }

  _createClass(Location, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = this.color;
      c.font = "15px Consolas";
      c.fillText(this.location, this.x, this.y);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return Location;
}();

var PossLocations = /*#__PURE__*/function () {
  function PossLocations(locations) {
    _classCallCheck(this, PossLocations);

    this.x = 50;
    this.y = 130;
    this.color = colors[1];
    this.locations = locations;
  }

  _createClass(PossLocations, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = this.color;
      c.font = "10px Consolas";

      for (var i = 0; i < this.locations.length; i++) {
        c.fillText(this.locations[i], this.x, this.y + i * 10);
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return PossLocations;
}();

var Question = /*#__PURE__*/function () {
  function Question(question) {
    _classCallCheck(this, Question);

    this.x = 50;
    this.y = 100;
    this.color = colors[1];
    this.question = question;
  }

  _createClass(Question, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = this.color;
      c.font = "20px Consolas";
      c.fillText(this.question, this.x, this.y);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return Question;
}(); // Implementation


var objects;
var question = new Question("What would you like to do?");
var locations = ["New York City, New York", "Hong Kong, China", "Dubai, United Arab Emirates", "San Francisco, California", "Berlin, Germany", "Paris, France", "Florence, Italy", "Melbourne, Australia"];
var possLocationsList = [];
var options = ["t", "s", "b"];
var travelOptions = ['n', 'h', 'd', 's', 'b', 'p', 'f', 'm'];

function listLocations() {
  for (var i = 0; i < locations.length; i++) {
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
  var bg = new Background(colors[0]);
  objects.push(bg);
  objects.push(location);
  objects.push(question);
  objects.push(possLocations);
} // Animation Loop


function animate() {
  setTimeout(function () {
    requestAnimationFrame(animate);
  }, 500);
  c.clearRect(0, 0, canvas.width, canvas.height);

  if (goodInput == true) {
    question.question = getNewQuestion();
  }

  objects.forEach(function (object) {
    object.update();
  });
}

init();
animate();

function getOverallInput(e) {
  if (options.includes(e.key)) {
    goodInput = true;
    choice = e.key;
    document.addEventListener('keyup', function (e) {
      console.log("correct");
    });
  }
}

var goodInput = false;
var choice = "";
document.addEventListener('keyup', getOverallInput(e)); //   if (choice == 't' && travelOptions.includes(e.key)){
//     console.log("Going there");
//   }

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map