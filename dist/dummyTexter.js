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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _core = __webpack_require__(1);

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dummyTexter = new _core2.default();

dummyTexter.init();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dummyTexter = function () {
  function dummyTexter() {
    _classCallCheck(this, dummyTexter);

    this.questLists = {};

    // temp data, when have apis will remove
    this.name = [{ "data": "Erica Romaguera" }, { "data": "Caleigh Jerde" }, { "data": "Lucas Schultz" }, { "data": "Carole Marvin" }, { "data": "Dorian Feeney" }, { "data": "Nia Gutkowski" }, { "data": "Woodrow Nikolaus" }, { "data": "Jaquan Rolfson" }];
    this.address = [{ "data": "728 Dooley Branch, Beckershire, LA 63598-2909" }, { "data": "622 Dixie Path, South Tobinchester, UT 98336" }, { "data": "20464 Hirthe Curve Suite, Emardton, CT 12471-4107" }, { "data": "280 Suzanne Throughway, Breannabury, OR 45801" }, { "data": "6803 Dickens Islands Apt. 567, Port Malikaview, TX 14942" }, { "data": "655 Auer Garden Apt. 026, Wolffport, VA 80438-4929" }, { "data": "97561 Gene Rest, North Audreanneville, CO 00498-2987" }, { "data": "101 Purdy Lakes, West Jordanmouth, NH 38827-6100" }];
  }

  _createClass(dummyTexter, [{
    key: "init",
    value: function init() {
      this.prepareElements();
    }
  }, {
    key: "prepareElements",
    value: function prepareElements() {
      this.targets = Array.prototype.slice.call(document.querySelectorAll('[data-dummy]'));

      for (var i = 0; i < this.targets.length; i++) {
        var cat = this.stringToArray(this.targets[i].dataset.dummy)[0];

        if (this.questLists[cat] == undefined) {
          this.questLists[cat] = 1;
        } else {
          this.questLists[cat]++;
        }
      }

      this.getData();
    }
  }, {
    key: "stringToArray",
    value: function stringToArray(str) {
      return str.split("-");
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this = this;

      var _loop = function _loop(key) {
        if (_this.questLists.hasOwnProperty(key)) {
          _this.ajax(key, _this.questLists[key]).then(function (data) {
            _this.fillContent(key, data);
          }).catch(function (error) {
            console.error(error.message);
          });
        }
      };

      for (var key in this.questLists) {
        _loop(key);
      }
    }
  }, {
    key: "ajax",
    value: function ajax(cat, count) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        // temp, should be ajax call
        if (_this2[cat] !== undefined) {
          resolve(_this2[cat]);
        } else {
          reject({ message: "dummyTexter: " + cat + " is not a valid category" });
        }
      });
    }
  }, {
    key: "fillContent",
    value: function fillContent(cat, data) {
      var counter = 0;

      for (var i = 0; i < this.targets.length; i++) {
        var temp = this.stringToArray(this.targets[i].dataset.dummy);

        if (temp[0] === cat) {
          this.targets[i].innerHTML = data[counter++].data;
          this.targets.splice(i, 1);
        }

        if (counter >= data.length) {
          counter = 0;
        }
      }
    }
  }]);

  return dummyTexter;
}();

exports.default = dummyTexter;

/***/ })
/******/ ]);