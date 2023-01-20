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

/***/ "./src/js/background.js":
/*!******************************!*\
  !*** ./src/js/background.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Background; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Background = /*#__PURE__*/function () {
  function Background(canvas, colors) {
    _classCallCheck(this, Background);

    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.colors = colors;
  }

  _createClass(Background, [{
    key: "draw",
    value: function draw(c) {
      c.beginPath();
      c.rect(this.x, this.y, this.width, this.height);
      c.fillStyle = this.colors['bg'];
      c.fill();
      c.closePath();
      var wUnit = (this.width - 30) / 6;
      var hUnit = 40;
      c.strokeStyle = this.colors['text'];
      c.lineWidth = 3;
      c.beginPath();
      c.strokeRect(this.x + 15, 30, wUnit * 2, hUnit);
      c.closePath();
      c.beginPath();
      c.strokeRect(this.x + 15 + wUnit * 2, 30, wUnit * 2, hUnit);
      c.closePath();
      c.beginPath();
      c.strokeRect(this.x + 15 + wUnit * 4, 30, wUnit * 2, hUnit);
      c.closePath();
      c.beginPath();
      c.strokeRect(this.x + 15, 30 + hUnit, wUnit * 3, 150);
      c.closePath();
      c.beginPath();
      c.strokeRect(this.x + 15 + wUnit * 3, 30 + hUnit, wUnit * 3, 150);
      c.closePath();
      c.fillStyle = this.colors['text'];
      c.font = "12px Consolas";
      c.fillText("Warehouse", this.x + 25, 53);
      c.fillText("Briefcase", this.x + 25 + wUnit * 4, 53);
    }
  }, {
    key: "update",
    value: function update(c, choice) {
      this.draw(c);
    }
  }]);

  return Background;
}();



/***/ }),

/***/ "./src/js/briefcaseInventory.js":
/*!**************************************!*\
  !*** ./src/js/briefcaseInventory.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBriefcaseInv; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getBriefcaseInv = function getBriefcaseInv(inventory) {
  _classCallCheck(this, getBriefcaseInv);

  this.inventory = inventory;
  this.x = 315;
  this.y = 90;
};



/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ "./src/js/background.js");
/* harmony import */ var _possibleLocations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./possibleLocations */ "./src/js/possibleLocations.js");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location */ "./src/js/location.js");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question */ "./src/js/question.js");
/* harmony import */ var _inventory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory */ "./src/js/inventory.js");
/* harmony import */ var _money__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./money */ "./src/js/money.js");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./values */ "./src/js/values.js");






 //Canvas variables

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;
var colors = {
  'bg': '#171717',
  'text': '#70d9ff'
}; // Global Variables

var objects;
var question;
var inv;
var money;
var currValues;
var location;
var locations = ["New York City, New York", "Hong Kong, China", "Dubai, United Arab Emirates", "San Francisco, California", "Berlin, Germany", "Paris, France", "Florence, Italy", "Melbourne, Australia"]; //Listed to screen as possibilities

var possLocationsList = []; //Initial options: travel, sell, buy; change throughout game

var options = ["t", "s", "b"]; //Warehouse inv

var wInventory = {
  "Diamonds": 0,
  "Emeralds": 0,
  "Rubies": 0
}; //Briefcase inv

var bInventory = {
  "Diamonds": 5,
  "Emeralds": 0,
  "Rubies": 2 //"Rockefeller Emerald": true,

}; //Determine if selling or buying

var selling = false;
var startMoney = {
  'cash': 2000,
  'bank': 0,
  'debt': 5000
};

function listLocations() {
  //Populates possible locations list from all locations
  for (var i = 0; i < locations.length; i++) {
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
  } else return "";
}

function resetLocation() {
  //Called when travel and after selling/buying
  choice = "";
  prevChoice = "";
  goodInput = false;
  options = ["t", "s", "b"];
  var currCash = money.cash;
  var currBank = money.bank;
  var currDebt = money.debt;
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
  } else return location.location;
}

function getSelling() {
  //Determine options from inv, return new question
  function range(item) {
    var arr = Array.from(Array(item).keys());
    arr.push(arr.length);
    var strArr = arr.map(String);
    return strArr;
  }

  switch (choice) {
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

function getNumSelling() {
  //Convert user input to number
  return parseInt(choice);
}

function getBuying() {
  //Determine options from max possible and current amount, return new question
  function range(item) {
    var maxAmount = 9;
    var currAmount = item;
    var allowed = maxAmount - currAmount;
    var arr = Array.from(Array(allowed).keys());
    arr.push(arr.length);
    var strArr = arr.map(String);
    return strArr;
  }

  var itemPrice = currValues.locations[currValues.currLocation];

  switch (choice) {
    case 'd':
      //console.log("buying diamonds");
      options = range(bInventory["Diamonds"]);
      prevChoice = 'Diamonds';
      goodInput = false;
      return "How many diamonds would you like to buy? You have enough cash for ".concat(Math.floor(money.cash / itemPrice['Diamonds']));

    case 'e':
      //console.log("buying emeralds");
      options = range(bInventory["Emeralds"]);
      prevChoice = 'Emeralds';
      goodInput = false;
      return "How many emeralds would you like to buy? You have enough cash for ".concat(Math.floor(money.cash / itemPrice['Emeralds']));

    case 'r':
      //console.log("buying rubies");
      options = range(bInventory["Rubies"]);
      prevChoice = 'Rubies';
      goodInput = false;
      return "How many rubies would you like to buy? You have enough cash for ".concat(Math.floor(money.cash / itemPrice['Rubies']));

    default:
      return "What are you looking to buy?";
  }
}

function getNumBuying() {
  //Convert user input to number
  return parseInt(choice);
}

function init() {
  //Called in beginning and every time location reset @ resetLocation()
  var bg = new _background__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, colors);
  location = new _location__WEBPACK_IMPORTED_MODULE_2__["default"](canvas, colors, locations[Math.floor(Math.random() * locations.length)]);
  question = new _question__WEBPACK_IMPORTED_MODULE_3__["default"](colors, "What would you like to do? (Buy, Sell, Travel)");
  var possLocations = new _possibleLocations__WEBPACK_IMPORTED_MODULE_1__["default"](colors, possLocationsList);
  inv = new _inventory__WEBPACK_IMPORTED_MODULE_4__["default"](wInventory, bInventory, colors);
  money = new _money__WEBPACK_IMPORTED_MODULE_5__["default"](colors, startMoney);
  currValues = new _values__WEBPACK_IMPORTED_MODULE_6__["default"](location.location, colors);
  objects = [];
  objects.push(bg);
  objects.push(location);
  objects.push(question);
  objects.push(possLocations);
  objects.push(inv);
  objects.push(money);
  objects.push(currValues);
} // ANIMATION LOOP


function animate() {
  setTimeout(function () {
    requestAnimationFrame(animate);
  }, 100);
  c.clearRect(0, 0, canvas.width, canvas.height);
  currValues.currLocation = location.location;

  if (goodInput == true) {
    question.question = getNewQuestion();
    location.location = getNewLocation();
  }

  var itemPrice = currValues.locations[currValues.currLocation][prevChoice]; //Selling

  if (goodInput == true && prevChoice == "s") {
    goodInput = false;
    selling = true;
    question.question = getSelling();
  }

  if (goodInput == true && selling == true && (prevChoice == 'Diamonds' || prevChoice == 'Emeralds' || prevChoice == 'Rubies')) {
    goodInput = false;
    money.cash = inv.decrease(prevChoice, getNumSelling(), itemPrice, money.cash);
    var currLoc = location.location;
    resetLocation();
    location.location = currLoc;
  } //Buying
  //PROBLEM: CANT ENTER 2 DIGIT NUMBER !!!!!!!!!!!!!!!!!!!!!!!!!!


  if (goodInput == true && prevChoice == 'b') {
    goodInput = false;
    question.question = getBuying();
  }

  if (goodInput == true && selling == false && (prevChoice == 'Diamonds' || prevChoice == 'Emeralds' || prevChoice == 'Rubies')) {
    goodInput = false;

    if (money.cash >= itemPrice * getNumBuying()) {
      money.cash = inv.increase(prevChoice, getNumBuying(), itemPrice, money.cash);
    }

    var _currLoc = location.location;
    resetLocation();
    location.location = _currLoc;
  }

  objects.forEach(function (object) {
    object.update(c, choice);
  });
} //Initialize user input


var goodInput = false;
var choice = "";
var prevChoice = "";
init();
animate(); //User input check

document.addEventListener('keyup', function (e) {
  if (options.includes(e.key)) {
    choice = e.key;
    goodInput = true;
  }
});

/***/ }),

/***/ "./src/js/inventory.js":
/*!*****************************!*\
  !*** ./src/js/inventory.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inventory; });
/* harmony import */ var _warehouseInventory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warehouseInventory */ "./src/js/warehouseInventory.js");
/* harmony import */ var _briefcaseInventory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./briefcaseInventory */ "./src/js/briefcaseInventory.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Inventory = /*#__PURE__*/function () {
  function Inventory(wInventory, bInventory, colors) {
    _classCallCheck(this, Inventory);

    this.warehouse = new _warehouseInventory__WEBPACK_IMPORTED_MODULE_0__["default"](wInventory);
    this.wInventory = this.warehouse.inventory;
    this.briefcase = new _briefcaseInventory__WEBPACK_IMPORTED_MODULE_1__["default"](bInventory);
    this.bInventory = this.briefcase.inventory;
    this.color = colors['text'];
  }

  _createClass(Inventory, [{
    key: "draw",
    value: function draw(c) {
      //Warehouse
      c.fillStyle = this.color;
      c.font = "12px Consolas";
      var i = 0;

      for (var _i = 0, _Object$entries = Object.entries(this.wInventory); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (value == true) {
          c.fillText("".concat(key), this.warehouse.x, this.warehouse.y + 20 * i);
        } else {
          c.fillText("".concat(key, ": ").concat(value), this.warehouse.x, this.warehouse.y + 20 * i);
          i++;
        }
      }

      ; //Briefcase

      i = 0;

      for (var _i2 = 0, _Object$entries2 = Object.entries(this.bInventory); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            _key = _Object$entries2$_i[0],
            _value = _Object$entries2$_i[1];

        if (_value === true) {
          c.fillText("".concat(_key), this.briefcase.x, this.briefcase.y + 20 * i);
        } else {
          c.fillText("".concat(_key, ": ").concat(_value), this.briefcase.x, this.briefcase.y + 20 * i);
          i++;
        }
      }

      ;
    }
  }, {
    key: "update",
    value: function update(c, choice) {
      this.draw(c);
    }
  }, {
    key: "increase",
    value: function increase(item, number, price, money) {
      this.bInventory[item] += number;
      return money -= price * number;
    }
  }, {
    key: "decrease",
    value: function decrease(item, number, price, money) {
      this.bInventory[item] -= number;
      return money += price * number;
    }
  }]);

  return Inventory;
}();



/***/ }),

/***/ "./src/js/location.js":
/*!****************************!*\
  !*** ./src/js/location.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Location; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Location = /*#__PURE__*/function () {
  function Location(canvas, colors, location) {
    _classCallCheck(this, Location);

    this.color = colors['text'];
    this.location = location;
    this.x = (canvas.width - 13) / 6 * 2 + 18;
    this.y = 53;
  }

  _createClass(Location, [{
    key: "draw",
    value: function draw(c) {
      c.fillStyle = this.color;
      c.font = "11px Consolas";
      c.fillText(this.location, this.x, this.y);
    }
  }, {
    key: "update",
    value: function update(c, choice) {
      this.draw(c);
    }
  }]);

  return Location;
}();



/***/ }),

/***/ "./src/js/money.js":
/*!*************************!*\
  !*** ./src/js/money.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Money; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Money = /*#__PURE__*/function () {
  function Money(colors, money) {
    _classCallCheck(this, Money);

    this.x = 315;
    this.y = 195;
    this.bx = 25;
    this.color = colors['text'];
    this.cash = money['cash'];
    this.bank = money['bank'];
    this.debt = money['debt'];
  }

  _createClass(Money, [{
    key: "draw",
    value: function draw(c) {
      c.fillStyle = this.color;
      c.font = "12px Consolas";
      c.fillText("Cash: ".concat(this.cash), this.x, this.y);
      c.fillText("Bank: ".concat(this.bank), this.bx, this.y);
      c.fillText("Debt: ".concat(this.debt), this.bx, this.y + 15);
    }
  }, {
    key: "update",
    value: function update(c, choice) {
      this.draw(c);
    }
  }]);

  return Money;
}();



/***/ }),

/***/ "./src/js/possibleLocations.js":
/*!*************************************!*\
  !*** ./src/js/possibleLocations.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PossLocations; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PossLocations = /*#__PURE__*/function () {
  function PossLocations(colors, locations) {
    _classCallCheck(this, PossLocations);

    this.x = 15;
    this.y = 270;
    this.color = colors['text'];
    this.locations = locations;
  }

  _createClass(PossLocations, [{
    key: "draw",
    value: function draw(c) {
      c.fillStyle = this.color;
      c.font = "10px Consolas";

      for (var i = 0; i < this.locations.length; i++) {
        c.fillText(this.locations[i], this.x, this.y + i * 10);
      }
    }
  }, {
    key: "update",
    value: function update(c, choice) {
      if (choice == 't') {
        this.draw(c);
      }
    }
  }]);

  return PossLocations;
}();



/***/ }),

/***/ "./src/js/question.js":
/*!****************************!*\
  !*** ./src/js/question.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Question; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Question = /*#__PURE__*/function () {
  function Question(colors, question) {
    _classCallCheck(this, Question);

    this.x = 15;
    this.y = 250;
    this.color = colors['text'];
    this.question = question;
  }

  _createClass(Question, [{
    key: "draw",
    value: function draw(c, choice) {
      c.fillStyle = this.color;
      c.font = "12px Consolas";
      c.fillText(this.question, this.x, this.y);
    }
  }, {
    key: "update",
    value: function update(c, choice) {
      this.draw(c, choice);
    }
  }]);

  return Question;
}();



/***/ }),

/***/ "./src/js/values.js":
/*!**************************!*\
  !*** ./src/js/values.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Values; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Values = /*#__PURE__*/function () {
  function Values(location, colors) {
    _classCallCheck(this, Values);

    this.locations = {
      "New York City, New York": {
        'Diamonds': 3225,
        'Emeralds': 700,
        'Rubies': 1620,
        'Rockefeller Emerald': 6000000
      },
      "Hong Kong, China": {
        'Diamonds': 10320,
        'Emeralds': 910,
        'Rubies': 1620,
        'Sunrise Ruby': 34200000
      },
      "Dubai, United Arab Emirates": {
        'Diamonds': 7110,
        'Emeralds': 900,
        'Rubies': 1620
      },
      "San Francisco, California": {
        'Diamonds': 2500,
        'Emeralds': 725,
        'Rubies': 1620
      },
      "Berlin, Germany": {
        'Diamonds': 7550,
        'Emeralds': 767,
        'Rubies': 1620,
        'Strawn-Wagner Diamond': 34700
      },
      "Paris, France": {
        'Diamonds': 6945,
        'Emeralds': 740,
        'Rubies': 1620
      },
      "Florence, Italy": {
        'Diamonds': 4125,
        'Emeralds': 990,
        'Rubies': 1620
      },
      "Melbourne, Australia": {
        'Diamonds': 2750,
        'Emeralds': 1010,
        'Rubies': 1620
      }
    };
    this.currLocation = location;
    this.x = 15;
    this.y = 310;
    this.color = colors['text'];
  }

  _createClass(Values, [{
    key: "draw",
    value: function draw(c) {
      c.fillStyle = this.color;
      c.font = "12px Consolas";
      c.fillText("The prices of gems here are:", this.x, this.y - 20);
      c.font = "11px Consolas";
      var i = 0;

      for (var _i = 0, _Object$entries = Object.entries(this.locations[this.currLocation]); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        c.fillText("".concat(key, ": ").concat(value), this.x, this.y + 20 * i);
        i++;
      }

      ;
    }
  }, {
    key: "update",
    value: function update(c, choice) {
      if (choice != 't') {
        this.draw(c);
      }
    }
  }]);

  return Values;
}();



/***/ }),

/***/ "./src/js/warehouseInventory.js":
/*!**************************************!*\
  !*** ./src/js/warehouseInventory.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWarehouseInv; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getWarehouseInv = function getWarehouseInv(inventory) {
  _classCallCheck(this, getWarehouseInv);

  this.inventory = inventory;
  this.x = 25;
  this.y = 90;
};



/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map