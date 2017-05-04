// @flow
import type {
  OKPatternsDefinition,
  OKBlockOptions,
  OKBlockConstructorOptions,
  OKPatternsFormationTable,
  OKPatternsTransitionProps
} from '@all-user/ok-blocks';
import {
  OKBlock
} from '@all-user/ok-blocks';

/*
 * default options
 */

const _DEFAULT_OPTIONS: OKBlockOptions = {
  displayTime: 1500,
  duration:    200,
  loop:        false,
  random:      false,
  pedal:       true
};

/*
 * DOM in instance of OKBlock.
 */
const _BASE_DOM = (() => {
  let wrapper         = document.createElement('div');
  let part            = document.createElement('div');
  let whiteBoxWrapper = document.createElement('div');
  let whiteBoxBase    = document.createElement('div');
  let docFrag         = document.createDocumentFragment();

  wrapper.className         = 'lines-emblem weight_3';
  part.className            = 'part';
  whiteBoxWrapper.className = 'whitebox-wrapper';

  // in emmet syntax.
  // div.whitebox-wrapper > div.whitebox * 4
  for (let i of [0, 1, 2, 3]) {
    let whiteBox = whiteBoxBase.cloneNode();
    whiteBox.className = `whitebox pos_${ i }`;
    whiteBoxWrapper.appendChild(whiteBox);
  }

  part.appendChild(whiteBoxWrapper);

  // in emmet syntax.
  // div.wrapper > div.part * 9
  for (let i = 0; i < 9; i++) {
    let _part = part.cloneNode(true);
    _part.classList.add(`pos_${ i % 3 }_${ i / 3 | 0 }`);
    docFrag.appendChild(_part);
  }
  wrapper.appendChild(docFrag);

  return wrapper;
})();

/*
 * Parts className table.
 */
const _I_R0       = 'part i-shaped rotate0 rotate-default';
const _I_R90      = 'part i-shaped rotate90 rotate-default';
const _L_R0       = 'part l-shaped rotate0 rotate-default';
const _L_R90      = 'part l-shaped rotate90 rotate-default';
const _L_R180     = 'part l-shaped rotate180 rotate-default';
const _L_R270     = 'part l-shaped rotate270 rotate-default';
const _L_RD_R0    = 'part l-shaped-radius rotate0 rotate-default';
const _L_RD_R90   = 'part l-shaped-radius rotate90 rotate-default';
const _L_RD_R180  = 'part l-shaped-radius rotate180 rotate-default';
const _L_RD_R270  = 'part l-shaped-radius rotate270 rotate-default';
const _T_R0       = 'part t-shaped rotate0 rotate-default';
const _T_R90      = 'part t-shaped rotate90 rotate-default';
const _T_R180     = 'part t-shaped rotate180 rotate-default';
const _T_R270     = 'part t-shaped rotate270 rotate-default';
const _T_RD_R0    = 'part t-shaped-radius rotate0 rotate-default';
const _T_RD_R90   = 'part t-shaped-radius rotate90 rotate-default';
const _T_RD_R180  = 'part t-shaped-radius rotate180 rotate-default';
const _T_RD_R270  = 'part t-shaped-radius rotate270 rotate-default';
const _T_LRD_R0   = 'part t-shaped-l-radius rotate0 rotate-default';
const _T_LRD_R90  = 'part t-shaped-l-radius rotate90 rotate-default';
const _T_LRD_R180 = 'part t-shaped-l-radius rotate180 rotate-default';
const _T_LRD_R270 = 'part t-shaped-l-radius rotate270 rotate-default';
const _T_RRD_R0   = 'part t-shaped-r-radius rotate0 rotate-default';
const _T_RRD_R90  = 'part t-shaped-r-radius rotate90 rotate-default';
const _T_RRD_R180 = 'part t-shaped-r-radius rotate180 rotate-default';
const _T_RRD_R270 = 'part t-shaped-r-radius rotate270 rotate-default';
const _D_R0       = 'part dash-shaped rotate0 rotate-default';
const _D_R90      = 'part dash-shaped rotate90 rotate-default';
const _D_R180     = 'part dash-shaped rotate180 rotate-default';
const _D_R270     = 'part dash-shaped rotate270 rotate-default';
const _C_R0       = 'part cross-shaped rotate0 rotate-default';
const _C_RD_R0    = 'part cross-shaped-radius rotate0 rotate-default';
const _C_3RD_R0   = 'part cross-shaped-3-radius rotate0 rotate-default';
const _C_3RD_R90  = 'part cross-shaped-3-radius rotate90 rotate-default';
const _C_3RD_R180 = 'part cross-shaped-3-radius rotate180 rotate-default';
const _C_3RD_R270 = 'part cross-shaped-3-radius rotate270 rotate-default';
const _C_1RD_R0   = 'part cross-shaped-1-radius rotate0 rotate-default';
const _C_1RD_R90  = 'part cross-shaped-1-radius rotate90 rotate-default';
const _C_1RD_R180 = 'part cross-shaped-1-radius rotate180 rotate-default';
const _C_1RD_R270 = 'part cross-shaped-1-radius rotate270 rotate-default';
const _C_2RD_R0   = 'part cross-shaped-2-radius rotate0 rotate-default';
const _C_2RD_R90  = 'part cross-shaped-2-radius rotate90 rotate-default';
const _C_2RD_R180 = 'part cross-shaped-2-radius rotate180 rotate-default';
const _C_2RD_R270 = 'part cross-shaped-2-radius rotate270 rotate-default';
const _C_DRD_R0   = 'part cross-shaped-diagonal-radius rotate0 rotate-default';
const _C_DRD_R90  = 'part cross-shaped-diagonal-radius rotate90 rotate-default';
const _BL         = 'part blank';

/*
 * Formation settings of all characters.
 */
var _formationTable: OKPatternsFormationTable = {
  'a': [
    _L_R90,       _I_R90,     _L_R180,
    _T_R270,      _I_R90,     _T_R90,
    _D_R0,        _BL,        _D_R0
  ],
  'b': [
    _L_R90,       _I_R90,     _L_RD_R180,
    _T_R270,      _I_R90,     _T_RD_R90,
    _L_R0,        _I_R90,     _L_RD_R270
  ],
  'c': [
    _L_RD_R90,   _I_R90,      _D_R270,
    _I_R0,       _BL,         _BL,
    _L_RD_R0,    _I_R90,      _D_R270
  ],
  'd': [
    _L_R90,      _I_R90,      _L_RD_R180,
    _I_R0,       _BL,         _I_R0,
    _L_R0,       _I_R90,      _L_RD_R270
  ],
  'e': [
    _L_R90,      _I_R90,      _D_R270,
    _T_R270,     _I_R90,      _BL,
    _L_R0,       _I_R90,      _D_R270
  ],
  'f': [
    _L_R90,      _I_R90,      _D_R270,
    _T_R270,     _I_R90,      _BL,
    _D_R0,       _BL,         _BL
  ],
  'g': [
    _L_R90,      _I_R90,      _D_R270,
    _I_R0,       _BL,         _L_RD_R180,
    _L_RD_R0,    _I_R90,      _L_R270
  ],
  'h': [
    _D_R180,     _BL,         _D_R180,
    _T_R270,     _I_R90,      _T_R90,
    _D_R0,       _BL,         _D_R0
  ],
  'i': [
    _BL,         _D_R180,     _BL,
    _BL,         _I_R0,       _BL,
    _BL,         _D_R0,       _BL
  ],
  'j': [
    _BL,         _BL,         _D_R180,
    _BL,         _BL,         _I_R0,
    _L_RD_R0,    _I_R90,      _L_RD_R270
  ],
  'k': [
    _D_R180,     _L_RD_R90,   _D_R270,
    _T_R270,     _T_RD_R90,   _BL,
    _D_R0,       _L_RD_R0,    _D_R270
  ],
  'l': [
    _D_R180,     _BL,         _BL,
    _I_R0,       _BL,         _BL,
    _L_R0,       _I_R90,      _D_R270
  ],
  'm': [
    _L_R90,      _T_R0,       _L_RD_R180,
    _I_R0,       _D_R0,       _I_R0,
    _D_R0,       _BL,         _D_R0
  ],
  'n': [
    _L_R90,      _I_R90,      _L_RD_R180,
    _I_R0,       _BL,         _I_R0,
    _D_R0,       _BL,         _D_R0
  ],
  'o': [
    _L_R90,      _I_R90,      _L_R180,
    _I_R0,       _BL,         _I_R0,
    _L_R0,       _I_R90,      _L_R270
  ],
  'p': [
    _L_R90,      _I_R90,      _L_RD_R180,
    _T_R270,     _I_R90,      _L_RD_R270,
    _D_R0,       _BL,         _BL
  ],
  'q': [
    _L_R90,      _I_R90,      _L_R180,
    _I_R0,       _BL,         _I_R0,
    _L_R0,       _I_R90,      _T_RRD_R90
  ],
  'r': [
    _L_R90,      _I_R90,      _L_RD_R180,
    _T_R270,     _I_R90,      _T_RD_R90,
    _D_R0,       _BL,         _D_R0
  ],
  's': [
    _L_RD_R90,   _I_R90,      _D_R270,
    _L_RD_R0,    _I_R90,      _L_R180,
    _D_R90,      _I_R90,      _L_R270
  ],
  't': [
    _D_R90,      _T_R0,       _D_R270,
    _BL,         _I_R0,       _BL,
    _BL,         _D_R0,       _BL
  ],
  'u':  [
    _D_R180,     _BL,         _D_R180,
    _I_R0,       _BL,         _I_R0,
    _L_RD_R0,    _I_R90,      _L_RD_R270
  ],
  'v': [
    _D_R180,     _BL,         _D_R180,
    _I_R0,       _BL,         _I_R0,
    _T_LRD_R270, _I_R90,      _L_RD_R270
  ],
  'w': [
    _D_R180,     _BL,         _D_R180,
    _I_R0,       _I_R0,       _I_R0,
    _T_LRD_R270, _C_DRD_R0,   _L_RD_R270
  ],
  'x': [
    _D_R90,      _T_RD_R0,    _D_R270,
    _BL,         _I_R0,       _BL,
    _D_R90,      _T_RD_R180,  _D_R270
  ],
  'y': [
    _D_R180,     _BL,         _D_R180,
    _L_RD_R0,    _T_R0,       _L_R270,
    _BL,         _D_R0,       _BL
  ],
  'z': [
    _D_R90,      _I_R90,      _L_R180,
    _L_RD_R90,   _C_DRD_R90,  _L_RD_R270,
    _L_R0,       _I_R90,      _D_R270
  ],
  '1': [
    _BL,         _BL,         _BL,
    _BL,         _T_LRD_R90,  _BL,
    _BL,         _D_R0,       _BL
  ],
  '2': [
    _D_R90,      _I_R90,      _L_RD_R180,
    _L_RD_R90,   _I_R90,      _L_RD_R270,
    _L_R0,       _I_R90,      _D_R270
  ],
  '3': [
    _D_R90,      _I_R90,      _L_RD_R180,
    _BL,         _I_R90,      _T_RD_R90,
    _D_R90,      _I_R90,      _L_RD_R270
  ],
  '4': [
    _D_R180,     _BL, _D_R180,
    _L_RD_R0,    _I_R90,      _C_R0,
    _BL,         _BL,         _D_R0
  ],
  '5': [
    _L_R90,      _I_R90,      _D_R270,
    _L_R0,       _I_R90,      _L_RD_R180,
    _L_RD_R0,    _I_R90,      _L_RD_R270
  ],
  '6': [
    _L_RD_R90,   _I_R90,      _D_R270,
    _T_LRD_R270, _I_R90,      _L_RD_R180,
    _L_RD_R0,    _I_R90,      _L_RD_R270
  ],
  '7': [
    _L_RD_R90,   _I_R90,      _L_R180,
    _BL,         _BL,         _I_R0,
    _BL,         _BL,         _D_R0
  ],
  '8': [
    _L_RD_R90,   _I_R90,      _L_RD_R180,
    _T_RD_R270,  _I_R90,      _T_RD_R90,
    _L_RD_R0,    _I_R90,      _L_RD_R270
  ],
  '9': [
    _L_RD_R90,   _I_R90,      _L_RD_R180,
    _L_RD_R0,    _I_R90,      _T_RD_R90,
    _D_R90,      _I_R90,      _L_RD_R270
  ],
  '0': [
    _L_RD_R90,   _I_R90,      _L_RD_R180,
    _I_R0,       _BL,         _I_R0,
    _L_RD_R0,    _I_R90,      _L_RD_R270
  ],
  '+': [
    _BL,         _D_R180,     _BL,
    _D_R90,      _C_R0,       _D_R270,
    _BL,         _D_R0,       _BL
  ],
  '-': [
    _BL,         _BL,         _BL,
    _D_R90,      _I_R90,      _D_R270,
    _BL,         _BL,         _BL
  ],
  '*': [
    _BL,         _BL,         _BL,
    _BL,         _C_RD_R0,    _BL,
    _BL,         _BL,         _BL
  ],
  '%': [
    _D_R180,     _L_RD_R90,   _BL,
    _BL,         _I_R0,       _BL,
    _BL,         _L_RD_R270,  _D_R0
  ],
  '.': [
    _BL,         _BL,         _BL,
    _BL,         _BL,         _BL,
    _BL,         _D_R0,       _BL
  ],
  ',': [
    _BL,         _BL,         _BL,
    _BL,         _BL,         _BL,
    _BL,         _T_RD_R90,   _BL
  ],
  ':': [
    _BL,         _D_R180,     _BL,
    _BL,         _BL,         _BL,
    _BL,         _D_R0,       _BL
  ],
  ';': [
    _BL,         _D_R180,     _BL,
    _BL,         _BL,         _BL,
    _BL,         _T_RD_R90,   _BL
  ],
  '/': [
    _BL,         _L_RD_R90,   _BL,
    _BL,         _I_R0,       _BL,
    _BL,         _L_RD_R270,  _BL
  ],
  '\\': [
    _BL,         _L_RD_R180,  _BL,
    _BL,         _I_R0,       _BL,
    _BL,         _L_RD_R0,    _BL
  ],
  '{': [
    _BL,         _L_RD_R90,   _BL,
    _BL,         _T_RD_R90,   _BL,
    _BL,         _L_RD_R0,    _BL
  ],
  '}': [
    _BL,         _L_RD_R180,  _BL,
    _BL,         _T_RD_R270,  _BL,
    _BL,         _L_RD_R270,  _BL
  ],
  '[': [
    _BL,         _L_R90,      _BL,
    _BL,         _I_R0,       _BL,
    _BL,         _L_R0,       _BL
  ],
  ']': [
    _BL,         _L_R180,     _BL,
    _BL,         _I_R0,       _BL,
    _BL,         _L_R270,     _BL
  ],
  '#': [
    _BL,         _BL,         _BL,
    _C_R0,       _C_R0,       _BL,
    _C_R0,       _C_R0,       _BL
  ],
  '(': [
    _BL,         _L_RD_R90,   _BL,
    _BL,         _I_R0,       _BL,
    _BL,         _L_RD_R0,    _BL
  ],
  ')': [
    _BL,         _L_RD_R180,  _BL,
    _BL,         _I_R0,       _BL,
    _BL,         _L_RD_R270,  _BL
  ],
  '!': [
    _BL,         _D_R180,     _BL,
    _BL,         _I_R0,       _BL,
    _BL,         _D_R180,     _BL
  ],
  '?': [
    _L_RD_R90,   _I_R90,      _L_RD_R180,
    _BL,         _L_RD_R90,   _L_RD_R270,
    _BL,         _D_R180,     _BL
  ],
  '\'': [
    _BL,         _L_RD_R270,  _BL,
    _BL,         _BL,         _BL,
    _BL,         _BL,         _BL
  ],
  '"': [
    _L_RD_R270,  _L_RD_R270,  _BL,
    _BL,         _BL,         _BL,
    _BL,         _BL,         _BL
  ],
  '$': [
    _L_RD_R90,   _C_2RD_R0,   _L_RD_R180,
    _L_RD_R0,    _C_RD_R0,    _L_RD_R180,
    _L_RD_R0,    _C_2RD_R180, _L_RD_R270
  ],
  '&': [
    _BL,         _L_RD_R90,   _L_RD_R180,
    _L_RD_R90,   _T_RD_R180,  _T_RD_R90,
    _L_RD_R0,    _I_R90,      _C_R0
  ],
  '=': [
    _BL,         _BL,         _BL,
    _D_R90,      _I_R90,      _D_R270,
    _D_R90,      _I_R90,      _D_R270
  ],
  '_': [
    _BL,         _BL,         _BL,
    _BL,         _BL,         _BL,
    _D_R90,      _I_R90,      _D_R270
  ],
  '^': [
    _L_R90,      _T_RD_R180,  _L_R180,
    _D_R0,       _BL,         _D_R0,
    _BL,         _BL,         _BL
  ],
  '|': [
    _BL,         _I_R0,       _BL,
    _BL,         _I_R0,       _BL,
    _BL,         _I_R0,       _BL
  ],
  '`': [
    _BL,         _L_RD_R180,  _BL,
    _BL,         _BL,         _BL,
    _BL,         _BL,         _BL
  ],
  '~': [
    _L_RD_R90,   _L_RD_R180,  _D_R180,
    _D_R0,       _L_RD_R0,    _L_RD_R270,
    _BL,         _BL,         _BL
  ],
  '<': [
    _L_RD_R90,   _I_R90,      _D_R270,
    _T_RD_R90,   _BL,         _BL,
    _L_RD_R0,    _I_R90,      _D_R270
  ],
  '>': [
    _D_R90,      _I_R90,      _L_RD_R180,
    _BL,         _BL,         _T_RD_R270,
    _D_R90,      _I_R90,      _L_RD_R270
  ],
  '@': [
    _L_RD_R90,   _I_R90,      _L_RD_R180,
    _L_RD_R90,   _L_RD_R180,  _I_R0,
    _L_RD_R0,    _T_LRD_R180, _L_RD_R270
  ],
  ' ': [
    _BL,         _BL,         _BL,
    _BL,         _BL,         _BL,
    _BL,         _BL,         _BL
  ]
};


/*
 * Transition settings.
 */
const _TRANSITION_PROPS: OKPatternsTransitionProps = [
  'width',
  'height',
  'background-color',
  'border-radius'
];

module.exports = (OKBlockBase: Class<OKBlock>) => {
  const definition: OKPatternsDefinition = { _DEFAULT_OPTIONS, _BASE_DOM, _TRANSITION_PROPS, _formationTable };
  OKBlockBase.define('Lines', definition);

  /*
   * advanced properties
   */

  const ExtendedByLinesPattern = class extends OKBlockBase {
    static WEIGHT_LIMIT;
    _weight: number;
    _lineColor: string;
    _paddingColor: string;

    constructor(c: string, options?: OKBlockConstructorOptions) {
      super(c, options);
      this._weight = 3;
    }

    get weight(): number {
      return this._weight;
    }

    set weight(n: number) {
      if (n > this.constructor.WEIGHT_LIMIT || n < 0) { return; }
      if (this._weight === n) { return; }
      this.dom.classList.add(`weight_${ n }`);
      this.dom.classList.remove(`weight_${ this._weight }`);
      this._weight = n;
    }

    bolder() {
      this.weight = this._weight + 1;
    }

    lighter() {
      this.weight = this._weight - 1;
    }

    get lineColor(): string {
      return this._lineColor;
    }

    set lineColor(color: string) {
      [...this.dom.querySelectorAll('.part')].forEach(p => { p.style.backgroundColor = color; });
      this._lineColor = color;
    }

    get paddingColor(): string {
      return this._paddingColor;
    }

    set paddingColor(color: string) {
      [...this.dom.querySelectorAll('.whitebox')].forEach(p => { p.style.backgroundColor = color; });
      this._paddingColor = color;
    }
  };

  ExtendedByLinesPattern.WEIGHT_LIMIT = 6;

  return ExtendedByLinesPattern;
};
