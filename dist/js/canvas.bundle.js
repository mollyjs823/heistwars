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
      c.fillStyle = this.colors[0];
      c.fill();
      c.closePath();
      var wUnit = (this.width - 30) / 6;
      var hUnit = 40;
      c.strokeStyle = this.colors[1];
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
      c.fillStyle = this.colors[1];
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





var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;
var colors = ['#171717', '#70d9ff']; // Implementation

var objects;
var location;
var question;
var locations = ["New York City, New York", "Hong Kong, China", "Dubai, United Arab Emirates", "San Francisco, California", "Berlin, Germany", "Paris, France", "Florence, Italy", "Melbourne, Australia"];
var possLocationsList = [];
var options = ["t", "s", "b"];
var wInventory = {
  "Diamonds": 0,
  "Picasso": 0,
  "Gold": 0
};
var bInventory = {
  "Diamonds": 0,
  "Picasso": 0,
  "Gold": 0
};

function listLocations() {
  for (var i = 0; i < locations.length; i++) {
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
  } else return "";
}

function atNewLocation() {
  choice = "";
  prevChoice = "";
  goodInput = false;
  options = ["t", "s", "b"];
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
  } else return location.location;
}

var inv;

function init() {
  var bg = new _background__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, colors);
  objects = [];
  location = new _location__WEBPACK_IMPORTED_MODULE_2__["default"](canvas, colors, locations[Math.floor(Math.random() * locations.length)]);
  question = new _question__WEBPACK_IMPORTED_MODULE_3__["default"](colors, "What would you like to do? (Buy, Sell, Travel)");
  var possLocations = new _possibleLocations__WEBPACK_IMPORTED_MODULE_1__["default"](colors, possLocationsList);
  inv = new _inventory__WEBPACK_IMPORTED_MODULE_4__["default"](canvas, wInventory, bInventory, colors);
  objects.push(bg);
  objects.push(location);
  objects.push(question);
  console.log(choice);
  objects.push(possLocations);
  objects.push(inv);
} // Animation Loop


function animate() {
  setTimeout(function () {
    requestAnimationFrame(animate);
  }, 500);
  c.clearRect(0, 0, canvas.width, canvas.height);

  if (goodInput == true) {
    question.question = getNewQuestion();
    location.location = getNewLocation();
  }

  if (goodInput == true && choice == "s") {
    inv.increase();
    goodInput = false;
  }

  objects.forEach(function (object) {
    object.update(c, choice);
  });
}

var goodInput = false;
var choice = "";
var prevChoice = "";
init();
animate(); //User input check

document.addEventListener('keyup', function (e) {
  if (options.includes(e.key)) {
    goodInput = true;
    choice = e.key;
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
  function Inventory(canvas, wInventory, bInventory, colors) {
    _classCallCheck(this, Inventory);

    this.canvas = canvas;
    this.warehouse = new _warehouseInventory__WEBPACK_IMPORTED_MODULE_0__["default"](wInventory);
    this.wInventory = this.warehouse.inventory;
    this.briefcase = new _briefcaseInventory__WEBPACK_IMPORTED_MODULE_1__["default"](bInventory);
    this.bInventory = this.briefcase.inventory;
    this.color = colors[1];
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

        c.fillText("".concat(key, ": ").concat(value), this.warehouse.x, this.warehouse.y + 20 * i);
        i++;
      }

      ; //Briefcase

      i = 0;

      for (var _i2 = 0, _Object$entries2 = Object.entries(this.bInventory); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            _key = _Object$entries2$_i[0],
            _value = _Object$entries2$_i[1];

        c.fillText("".concat(_key, ": ").concat(_value), this.briefcase.x, this.briefcase.y + 20 * i);
        i++;
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
    value: function increase() {
      this.inventory['Diamonds'] += 1;
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

    this.color = colors[1];
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
    this.color = colors[1];
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
    this.color = colors[1];
    this.question = question;
  }

  _createClass(Question, [{
    key: "draw",
    value: function draw(c) {
      c.fillStyle = this.color;
      c.font = "12px Consolas";
      c.fillText(this.question, this.x, this.y);
    }
  }, {
    key: "update",
    value: function update(c, choice) {
      this.draw(c);
    }
  }]);

  return Question;
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