'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _okBlocks = require('@all-user/ok-blocks');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * default options
 */

var _DEFAULT_OPTIONS = {
  displayTime: 1500,
  duration: 200,
  loop: false,
  random: false,
  pedal: true
};

/*
 * DOM in instance of OKBlock.
 */
var _BASE_DOM = function () {
  var wrapper = document.createElement('div');
  var part = document.createElement('div');
  var whiteBoxWrapper = document.createElement('div');
  var whiteBoxBase = document.createElement('div');
  var docFrag = document.createDocumentFragment();

  wrapper.className = 'lines-emblem weight_3';
  part.className = 'part';
  whiteBoxWrapper.className = 'whitebox-wrapper';

  // in emmet syntax.
  // div.whitebox-wrapper > div.whitebox * 4
  var _arr = [0, 1, 2, 3];
  for (var _i = 0; _i < _arr.length; _i++) {
    var i = _arr[_i];
    var whiteBox = whiteBoxBase.cloneNode();
    whiteBox.className = 'whitebox pos_' + i;
    whiteBoxWrapper.appendChild(whiteBox);
  }

  part.appendChild(whiteBoxWrapper);

  // in emmet syntax.
  // div.wrapper > div.part * 9
  for (var _i2 = 0; _i2 < 9; _i2++) {
    var _part = part.cloneNode(true);
    _part.classList.add('pos_' + _i2 % 3 + '_' + (_i2 / 3 | 0));
    docFrag.appendChild(_part);
  }
  wrapper.appendChild(docFrag);

  return wrapper;
}();

/*
 * Parts className table.
 */
var _I_R0 = 'part i-shaped rotate0 rotate-default';
var _I_R90 = 'part i-shaped rotate90 rotate-default';
var _L_R0 = 'part l-shaped rotate0 rotate-default';
var _L_R90 = 'part l-shaped rotate90 rotate-default';
var _L_R180 = 'part l-shaped rotate180 rotate-default';
var _L_R270 = 'part l-shaped rotate270 rotate-default';
var _L_RD_R0 = 'part l-shaped-radius rotate0 rotate-default';
var _L_RD_R90 = 'part l-shaped-radius rotate90 rotate-default';
var _L_RD_R180 = 'part l-shaped-radius rotate180 rotate-default';
var _L_RD_R270 = 'part l-shaped-radius rotate270 rotate-default';
var _T_R0 = 'part t-shaped rotate0 rotate-default';
var _T_R90 = 'part t-shaped rotate90 rotate-default';
var _T_R180 = 'part t-shaped rotate180 rotate-default';
var _T_R270 = 'part t-shaped rotate270 rotate-default';
var _T_RD_R0 = 'part t-shaped-radius rotate0 rotate-default';
var _T_RD_R90 = 'part t-shaped-radius rotate90 rotate-default';
var _T_RD_R180 = 'part t-shaped-radius rotate180 rotate-default';
var _T_RD_R270 = 'part t-shaped-radius rotate270 rotate-default';
var _T_LRD_R0 = 'part t-shaped-l-radius rotate0 rotate-default';
var _T_LRD_R90 = 'part t-shaped-l-radius rotate90 rotate-default';
var _T_LRD_R180 = 'part t-shaped-l-radius rotate180 rotate-default';
var _T_LRD_R270 = 'part t-shaped-l-radius rotate270 rotate-default';
var _T_RRD_R0 = 'part t-shaped-r-radius rotate0 rotate-default';
var _T_RRD_R90 = 'part t-shaped-r-radius rotate90 rotate-default';
var _T_RRD_R180 = 'part t-shaped-r-radius rotate180 rotate-default';
var _T_RRD_R270 = 'part t-shaped-r-radius rotate270 rotate-default';
var _D_R0 = 'part dash-shaped rotate0 rotate-default';
var _D_R90 = 'part dash-shaped rotate90 rotate-default';
var _D_R180 = 'part dash-shaped rotate180 rotate-default';
var _D_R270 = 'part dash-shaped rotate270 rotate-default';
var _C_R0 = 'part cross-shaped rotate0 rotate-default';
var _C_RD_R0 = 'part cross-shaped-radius rotate0 rotate-default';
var _C_3RD_R0 = 'part cross-shaped-3-radius rotate0 rotate-default';
var _C_3RD_R90 = 'part cross-shaped-3-radius rotate90 rotate-default';
var _C_3RD_R180 = 'part cross-shaped-3-radius rotate180 rotate-default';
var _C_3RD_R270 = 'part cross-shaped-3-radius rotate270 rotate-default';
var _C_1RD_R0 = 'part cross-shaped-1-radius rotate0 rotate-default';
var _C_1RD_R90 = 'part cross-shaped-1-radius rotate90 rotate-default';
var _C_1RD_R180 = 'part cross-shaped-1-radius rotate180 rotate-default';
var _C_1RD_R270 = 'part cross-shaped-1-radius rotate270 rotate-default';
var _C_2RD_R0 = 'part cross-shaped-2-radius rotate0 rotate-default';
var _C_2RD_R90 = 'part cross-shaped-2-radius rotate90 rotate-default';
var _C_2RD_R180 = 'part cross-shaped-2-radius rotate180 rotate-default';
var _C_2RD_R270 = 'part cross-shaped-2-radius rotate270 rotate-default';
var _C_DRD_R0 = 'part cross-shaped-diagonal-radius rotate0 rotate-default';
var _C_DRD_R90 = 'part cross-shaped-diagonal-radius rotate90 rotate-default';
var _BL = 'part blank';

/*
 * Formation settings of all characters.
 */
var _formationTable = {
  'a': [_L_R90, _I_R90, _L_R180, _T_R270, _I_R90, _T_R90, _D_R0, _BL, _D_R0],
  'b': [_L_R90, _I_R90, _L_RD_R180, _T_R270, _I_R90, _T_RD_R90, _L_R0, _I_R90, _L_RD_R270],
  'c': [_L_RD_R90, _I_R90, _D_R270, _I_R0, _BL, _BL, _L_RD_R0, _I_R90, _D_R270],
  'd': [_L_R90, _I_R90, _L_RD_R180, _I_R0, _BL, _I_R0, _L_R0, _I_R90, _L_RD_R270],
  'e': [_L_R90, _I_R90, _D_R270, _T_R270, _I_R90, _BL, _L_R0, _I_R90, _D_R270],
  'f': [_L_R90, _I_R90, _D_R270, _T_R270, _I_R90, _BL, _D_R0, _BL, _BL],
  'g': [_L_R90, _I_R90, _D_R270, _I_R0, _BL, _L_RD_R180, _L_RD_R0, _I_R90, _L_R270],
  'h': [_D_R180, _BL, _D_R180, _T_R270, _I_R90, _T_R90, _D_R0, _BL, _D_R0],
  'i': [_BL, _D_R180, _BL, _BL, _I_R0, _BL, _BL, _D_R0, _BL],
  'j': [_BL, _BL, _D_R180, _BL, _BL, _I_R0, _L_RD_R0, _I_R90, _L_RD_R270],
  'k': [_D_R180, _L_RD_R90, _D_R270, _T_R270, _T_RD_R90, _BL, _D_R0, _L_RD_R0, _D_R270],
  'l': [_D_R180, _BL, _BL, _I_R0, _BL, _BL, _L_R0, _I_R90, _D_R270],
  'm': [_L_R90, _T_R0, _L_RD_R180, _I_R0, _D_R0, _I_R0, _D_R0, _BL, _D_R0],
  'n': [_L_R90, _I_R90, _L_RD_R180, _I_R0, _BL, _I_R0, _D_R0, _BL, _D_R0],
  'o': [_L_R90, _I_R90, _L_R180, _I_R0, _BL, _I_R0, _L_R0, _I_R90, _L_R270],
  'p': [_L_R90, _I_R90, _L_RD_R180, _T_R270, _I_R90, _L_RD_R270, _D_R0, _BL, _BL],
  'q': [_L_R90, _I_R90, _L_R180, _I_R0, _BL, _I_R0, _L_R0, _I_R90, _T_RRD_R90],
  'r': [_L_R90, _I_R90, _L_RD_R180, _T_R270, _I_R90, _T_RD_R90, _D_R0, _BL, _D_R0],
  's': [_L_RD_R90, _I_R90, _D_R270, _L_RD_R0, _I_R90, _L_R180, _D_R90, _I_R90, _L_R270],
  't': [_D_R90, _T_R0, _D_R270, _BL, _I_R0, _BL, _BL, _D_R0, _BL],
  'u': [_D_R180, _BL, _D_R180, _I_R0, _BL, _I_R0, _L_RD_R0, _I_R90, _L_RD_R270],
  'v': [_D_R180, _BL, _D_R180, _I_R0, _BL, _I_R0, _T_LRD_R270, _I_R90, _L_RD_R270],
  'w': [_D_R180, _BL, _D_R180, _I_R0, _I_R0, _I_R0, _T_LRD_R270, _C_DRD_R0, _L_RD_R270],
  'x': [_D_R90, _T_RD_R0, _D_R270, _BL, _I_R0, _BL, _D_R90, _T_RD_R180, _D_R270],
  'y': [_D_R180, _BL, _D_R180, _L_RD_R0, _T_R0, _L_R270, _BL, _D_R0, _BL],
  'z': [_D_R90, _I_R90, _L_R180, _L_RD_R90, _C_DRD_R90, _L_RD_R270, _L_R0, _I_R90, _D_R270],
  '1': [_BL, _BL, _BL, _BL, _T_LRD_R90, _BL, _BL, _D_R0, _BL],
  '2': [_D_R90, _I_R90, _L_RD_R180, _L_RD_R90, _I_R90, _L_RD_R270, _L_R0, _I_R90, _D_R270],
  '3': [_D_R90, _I_R90, _L_RD_R180, _BL, _I_R90, _T_RD_R90, _D_R90, _I_R90, _L_RD_R270],
  '4': [_D_R180, _BL, _D_R180, _L_RD_R0, _I_R90, _C_R0, _BL, _BL, _D_R0],
  '5': [_L_R90, _I_R90, _D_R270, _L_R0, _I_R90, _L_RD_R180, _L_RD_R0, _I_R90, _L_RD_R270],
  '6': [_L_RD_R90, _I_R90, _D_R270, _T_LRD_R270, _I_R90, _L_RD_R180, _L_RD_R0, _I_R90, _L_RD_R270],
  '7': [_L_RD_R90, _I_R90, _L_R180, _BL, _BL, _I_R0, _BL, _BL, _D_R0],
  '8': [_L_RD_R90, _I_R90, _L_RD_R180, _T_RD_R270, _I_R90, _T_RD_R90, _L_RD_R0, _I_R90, _L_RD_R270],
  '9': [_L_RD_R90, _I_R90, _L_RD_R180, _L_RD_R0, _I_R90, _T_RD_R90, _D_R90, _I_R90, _L_RD_R270],
  '0': [_L_RD_R90, _I_R90, _L_RD_R180, _I_R0, _BL, _I_R0, _L_RD_R0, _I_R90, _L_RD_R270],
  '+': [_BL, _D_R180, _BL, _D_R90, _C_R0, _D_R270, _BL, _D_R0, _BL],
  '-': [_BL, _BL, _BL, _D_R90, _I_R90, _D_R270, _BL, _BL, _BL],
  '*': [_BL, _BL, _BL, _BL, _C_RD_R0, _BL, _BL, _BL, _BL],
  '%': [_D_R180, _L_RD_R90, _BL, _BL, _I_R0, _BL, _BL, _L_RD_R270, _D_R0],
  '.': [_BL, _BL, _BL, _BL, _BL, _BL, _BL, _D_R0, _BL],
  ',': [_BL, _BL, _BL, _BL, _BL, _BL, _BL, _T_RD_R90, _BL],
  ':': [_BL, _D_R180, _BL, _BL, _BL, _BL, _BL, _D_R0, _BL],
  ';': [_BL, _D_R180, _BL, _BL, _BL, _BL, _BL, _T_RD_R90, _BL],
  '/': [_BL, _L_RD_R90, _BL, _BL, _I_R0, _BL, _BL, _L_RD_R270, _BL],
  '\\': [_BL, _L_RD_R180, _BL, _BL, _I_R0, _BL, _BL, _L_RD_R0, _BL],
  '{': [_BL, _L_RD_R90, _BL, _BL, _T_RD_R90, _BL, _BL, _L_RD_R0, _BL],
  '}': [_BL, _L_RD_R180, _BL, _BL, _T_RD_R270, _BL, _BL, _L_RD_R270, _BL],
  '[': [_BL, _L_R90, _BL, _BL, _I_R0, _BL, _BL, _L_R0, _BL],
  ']': [_BL, _L_R180, _BL, _BL, _I_R0, _BL, _BL, _L_R270, _BL],
  '#': [_BL, _BL, _BL, _C_R0, _C_R0, _BL, _C_R0, _C_R0, _BL],
  '(': [_BL, _L_RD_R90, _BL, _BL, _I_R0, _BL, _BL, _L_RD_R0, _BL],
  ')': [_BL, _L_RD_R180, _BL, _BL, _I_R0, _BL, _BL, _L_RD_R270, _BL],
  '!': [_BL, _D_R180, _BL, _BL, _I_R0, _BL, _BL, _D_R180, _BL],
  '?': [_L_RD_R90, _I_R90, _L_RD_R180, _BL, _L_RD_R90, _L_RD_R270, _BL, _D_R180, _BL],
  '\'': [_BL, _L_RD_R270, _BL, _BL, _BL, _BL, _BL, _BL, _BL],
  '"': [_L_RD_R270, _L_RD_R270, _BL, _BL, _BL, _BL, _BL, _BL, _BL],
  '$': [_L_RD_R90, _C_2RD_R0, _L_RD_R180, _L_RD_R0, _C_RD_R0, _L_RD_R180, _L_RD_R0, _C_2RD_R180, _L_RD_R270],
  '&': [_BL, _L_RD_R90, _L_RD_R180, _L_RD_R90, _T_RD_R180, _T_RD_R90, _L_RD_R0, _I_R90, _C_R0],
  '=': [_BL, _BL, _BL, _D_R90, _I_R90, _D_R270, _D_R90, _I_R90, _D_R270],
  '_': [_BL, _BL, _BL, _BL, _BL, _BL, _D_R90, _I_R90, _D_R270],
  '^': [_L_R90, _T_RD_R180, _L_R180, _D_R0, _BL, _D_R0, _BL, _BL, _BL],
  '|': [_BL, _I_R0, _BL, _BL, _I_R0, _BL, _BL, _I_R0, _BL],
  '`': [_BL, _L_RD_R180, _BL, _BL, _BL, _BL, _BL, _BL, _BL],
  '~': [_L_RD_R90, _L_RD_R180, _D_R180, _D_R0, _L_RD_R0, _L_RD_R270, _BL, _BL, _BL],
  '<': [_L_RD_R90, _I_R90, _D_R270, _T_RD_R90, _BL, _BL, _L_RD_R0, _I_R90, _D_R270],
  '>': [_D_R90, _I_R90, _L_RD_R180, _BL, _BL, _T_RD_R270, _D_R90, _I_R90, _L_RD_R270],
  '@': [_L_RD_R90, _I_R90, _L_RD_R180, _L_RD_R90, _L_RD_R180, _I_R0, _L_RD_R0, _T_LRD_R180, _L_RD_R270],
  ' ': [_BL, _BL, _BL, _BL, _BL, _BL, _BL, _BL, _BL]
};

/*
 * Transition settings.
 */
var _TRANSITION_PROPS = ['width', 'height', 'background-color', 'border-radius'];

module.exports = function (OKBlockBase) {
  var definition = { _DEFAULT_OPTIONS: _DEFAULT_OPTIONS, _BASE_DOM: _BASE_DOM, _TRANSITION_PROPS: _TRANSITION_PROPS, _formationTable: _formationTable };
  OKBlockBase.define('Lines', definition);

  /*
   * advanced properties
   */

  var AdvancedByLinesPattern = function (_OKBlockBase) {
    _inherits(AdvancedByLinesPattern, _OKBlockBase);

    function AdvancedByLinesPattern(c, options) {
      _classCallCheck(this, AdvancedByLinesPattern);

      var _this = _possibleConstructorReturn(this, (AdvancedByLinesPattern.__proto__ || Object.getPrototypeOf(AdvancedByLinesPattern)).call(this, c, options));

      _this._weight = 3;
      return _this;
    }

    _createClass(AdvancedByLinesPattern, [{
      key: 'bolder',
      value: function bolder() {
        this.weight = this._weight + 1;
      }
    }, {
      key: 'lighter',
      value: function lighter() {
        this.weight = this._weight - 1;
      }
    }, {
      key: 'weight',
      get: function get() {
        return this._weight;
      },
      set: function set(n) {
        if (n > this.constructor.WEIGHT_LIMIT || n < 0) {
          return;
        }
        if (this._weight === n) {
          return;
        }
        this.dom.classList.add('weight_' + n);
        this.dom.classList.remove('weight_' + this._weight);
        this._weight = n;
      }
    }, {
      key: 'lineColor',
      get: function get() {
        return this._lineColor;
      },
      set: function set(color) {
        [].concat(_toConsumableArray(this.dom.querySelectorAll('.part'))).forEach(function (p) {
          p.style.backgroundColor = color;
        });
        this._lineColor = color;
      }
    }, {
      key: 'paddingColor',
      get: function get() {
        return this._paddingColor;
      },
      set: function set(color) {
        [].concat(_toConsumableArray(this.dom.querySelectorAll('.whitebox'))).forEach(function (p) {
          p.style.backgroundColor = color;
        });
        this._paddingColor = color;
      }
    }]);

    return AdvancedByLinesPattern;
  }(OKBlockBase);

  AdvancedByLinesPattern.WEIGHT_LIMIT = 6;

  return AdvancedByLinesPattern;
};