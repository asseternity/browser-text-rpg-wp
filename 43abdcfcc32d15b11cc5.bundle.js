(self["webpackChunkbrowser_text_rpg_wp"] = self["webpackChunkbrowser_text_rpg_wp"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./KGNoRegretsSketch.ttf */ "./src/KGNoRegretsSketch.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --purple1: #0F3325; 
    --purple2: #1E2B21;
    --purple3: #2E634F; 
    --grey: #282828;
}

@font-face {
    font-family: 'VT';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
    font-weight: 400;
    font-style: normal;
}

html, body {
    margin: 0;
    height: 100%;
    color: white;
    font-family: 'VT';
    font-size: 110%;
}

.mainMenuContainer {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
}

.mainMenu button {
    font-size: 140%;
}

.container {
    min-height: 100%;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr 3fr;
    grid-template-rows: 70px 450px 1fr 70px;
}

.top_bar {
    padding: 10px;
    background-color: var(--purple3);
    grid-column: 1 / 7;
}

.image_window {
    padding: 10px;
    background-color: var(--purple1);
    grid-column: 1 / 3;
    grid-row: 2 / 4;
}

.image_window button {
    font-size: 100%;
}

.image_window button:hover {
    background-color: var(--purple3);
}

.image_window p {
    margin-bottom: 5px;
}

.main_window {
    padding: 10px;
    background-color: var(--purple1);
    grid-column: 3 / 5;
    grid-row: 2 / 4;
    font-size: 100%;
}

.main_window p, .main_window button, .main_window input {
    opacity: 0;
    animation: fadeIn 1s ease-out forwards;
}

.main_window select {
    background-color: var(--grey);
    padding: 5px;
    font-family: 'VT';
    margin-right:1000px;
    margin-bottom: 10px;
    color: white;
}

input.checkmark[type=checkbox] {
    background-color: white;
    outline: var(--grey) solid 2px;
    border: 2px solid white;
    appearance: none;
}

input.checkmark[type=checkbox]:checked {
    background-color: var(--grey);
}

option {
    font-family: 'VT';
}

dialog {
    opacity: 0;
    animation: fadeIn 1s ease-out forwards;
}

.hide {
    animation: fadeOut 1s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeOut{
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.main_window button {
    font-size: 90%;
    margin-bottom: 10px;
}

.main_window .choiceButton {
    display: block;
}

.main_window button:hover{
    background-color: var(--purple3);
}

.main_window input {
    background-color: var(--grey);
    color: white;
    font-family: 'VT';
    font-size: 100%;
    margin-right: 5px;
    padding: 5px;
    border: 1px solid var(--purple1);
}

.main_window input[type=submit] {
    background-color: var(--grey);
    color: white;
    font-family: 'VT';
    font-size: 100%;
    padding: 5px;
    border: 1px solid var(--purple1);
}

.main_window input[type=submit]:hover {
    background-color: var(--purple3);
}

.button_window {
    padding: 10px;
    background-color: var(--purple3);
    grid-column: 1 / 7;
    grid-row: 4;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
}

button {
    background-color: var(--grey);
    color: white;
    font-family: 'VT';
    border: none;
}

button:hover {
    background-color: var(--purple3);
}

.button_window button {
    font-size: 150%;
}

.log {
    overflow: auto;
    padding: 10px;
    background-color: var(--purple2);
    grid-column: 5 / 6;
}

.menu {
    padding: 10px;
    background-color: var(--purple2);
    grid-column: 5 / 6;
}

dialog {
    background-color: var(--purple2);
    color: white;
    font-size: 85%;
    max-width: 500px;
}

#closeButton, #closeButton2 {
    margin-left:450px;
    font-size:80%;
}

.stats_meter {
    border: 1px solid white;
    display: grid;
    grid-template-columns: 50fr 50fr;
}

#stats_meter_evil {
    margin-top: 15px;
}

#stats_line_evil, #stats_line_somber {
    background-color: maroon;
    padding-left: 5px;
}

#stats_line_benevolent, #stats_line_silly {
    background-color: blue;
    padding-left: 5px;
}

@media screen and (max-width:768px) {
    .container {
        min-height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 50px 580px 250px 65px;
    }
    p:first-child {
        margin-top: 0;
    }
    .top_bar {
        grid-column: 1 / 3;
        grid-row: 1 / 5;
    }
    .image_window {
        grid-column: 1;
        grid-row: 2;
        font-size: 80%;
    }
    #explorationBoard {
        display: flex;
        flex-direction: column;
    }
    .main_window {
        grid-column: 2;
        grid-row: 2;
        overflow: scroll;
    }
    .button_window {
        grid-column: 1 / 3;
        grid-row: 4;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 5px;
    }
    .button_window button {
        font-size: 90%;
    }
    .log {
        grid-column: 1;
        grid-row: 3;
        font-size: 80%;
    }
    .menu {
        grid-column: 2;
        grid-row: 3;
    }
    dialog {
        max-width: 270px;
    }
    #closeButton, #closeButton2 {
        margin-left:250px;
        font-size:80%;
    }
    .main_window input[type=text] {
        width:120px;
    }
}

.death {
    background-color: rgb(0, 0, 0, 0.5);
}`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --purple1: #0F3325; \n    --purple2: #1E2B21;\n    --purple3: #2E634F; \n    --grey: #282828;\n}\n\n@font-face {\n    font-family: 'VT';\n    src: url('./KGNoRegretsSketch.ttf') format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n\nhtml, body {\n    margin: 0;\n    height: 100%;\n    color: white;\n    font-family: 'VT';\n    font-size: 110%;\n}\n\n.mainMenuContainer {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: space-between;\n}\n\n.mainMenu button {\n    font-size: 140%;\n}\n\n.container {\n    min-height: 100%;\n    display: grid;\n    grid-template-columns: 2fr 2fr 2fr 2fr 3fr;\n    grid-template-rows: 70px 450px 1fr 70px;\n}\n\n.top_bar {\n    padding: 10px;\n    background-color: var(--purple3);\n    grid-column: 1 / 7;\n}\n\n.image_window {\n    padding: 10px;\n    background-color: var(--purple1);\n    grid-column: 1 / 3;\n    grid-row: 2 / 4;\n}\n\n.image_window button {\n    font-size: 100%;\n}\n\n.image_window button:hover {\n    background-color: var(--purple3);\n}\n\n.image_window p {\n    margin-bottom: 5px;\n}\n\n.main_window {\n    padding: 10px;\n    background-color: var(--purple1);\n    grid-column: 3 / 5;\n    grid-row: 2 / 4;\n    font-size: 100%;\n}\n\n.main_window p, .main_window button, .main_window input {\n    opacity: 0;\n    animation: fadeIn 1s ease-out forwards;\n}\n\n.main_window select {\n    background-color: var(--grey);\n    padding: 5px;\n    font-family: 'VT';\n    margin-right:1000px;\n    margin-bottom: 10px;\n    color: white;\n}\n\ninput.checkmark[type=checkbox] {\n    background-color: white;\n    outline: var(--grey) solid 2px;\n    border: 2px solid white;\n    appearance: none;\n}\n\ninput.checkmark[type=checkbox]:checked {\n    background-color: var(--grey);\n}\n\noption {\n    font-family: 'VT';\n}\n\ndialog {\n    opacity: 0;\n    animation: fadeIn 1s ease-out forwards;\n}\n\n.hide {\n    animation: fadeOut 1s ease-out forwards;\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes fadeOut{\n    from {\n        opacity: 1;\n    }\n    to {\n        opacity: 0;\n    }\n}\n\n.main_window button {\n    font-size: 90%;\n    margin-bottom: 10px;\n}\n\n.main_window .choiceButton {\n    display: block;\n}\n\n.main_window button:hover{\n    background-color: var(--purple3);\n}\n\n.main_window input {\n    background-color: var(--grey);\n    color: white;\n    font-family: 'VT';\n    font-size: 100%;\n    margin-right: 5px;\n    padding: 5px;\n    border: 1px solid var(--purple1);\n}\n\n.main_window input[type=submit] {\n    background-color: var(--grey);\n    color: white;\n    font-family: 'VT';\n    font-size: 100%;\n    padding: 5px;\n    border: 1px solid var(--purple1);\n}\n\n.main_window input[type=submit]:hover {\n    background-color: var(--purple3);\n}\n\n.button_window {\n    padding: 10px;\n    background-color: var(--purple3);\n    grid-column: 1 / 7;\n    grid-row: 4;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    gap: 20px;\n}\n\nbutton {\n    background-color: var(--grey);\n    color: white;\n    font-family: 'VT';\n    border: none;\n}\n\nbutton:hover {\n    background-color: var(--purple3);\n}\n\n.button_window button {\n    font-size: 150%;\n}\n\n.log {\n    overflow: auto;\n    padding: 10px;\n    background-color: var(--purple2);\n    grid-column: 5 / 6;\n}\n\n.menu {\n    padding: 10px;\n    background-color: var(--purple2);\n    grid-column: 5 / 6;\n}\n\ndialog {\n    background-color: var(--purple2);\n    color: white;\n    font-size: 85%;\n    max-width: 500px;\n}\n\n#closeButton, #closeButton2 {\n    margin-left:450px;\n    font-size:80%;\n}\n\n.stats_meter {\n    border: 1px solid white;\n    display: grid;\n    grid-template-columns: 50fr 50fr;\n}\n\n#stats_meter_evil {\n    margin-top: 15px;\n}\n\n#stats_line_evil, #stats_line_somber {\n    background-color: maroon;\n    padding-left: 5px;\n}\n\n#stats_line_benevolent, #stats_line_silly {\n    background-color: blue;\n    padding-left: 5px;\n}\n\n@media screen and (max-width:768px) {\n    .container {\n        min-height: 100%;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 50px 580px 250px 65px;\n    }\n    p:first-child {\n        margin-top: 0;\n    }\n    .top_bar {\n        grid-column: 1 / 3;\n        grid-row: 1 / 5;\n    }\n    .image_window {\n        grid-column: 1;\n        grid-row: 2;\n        font-size: 80%;\n    }\n    #explorationBoard {\n        display: flex;\n        flex-direction: column;\n    }\n    .main_window {\n        grid-column: 2;\n        grid-row: 2;\n        overflow: scroll;\n    }\n    .button_window {\n        grid-column: 1 / 3;\n        grid-row: 4;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr 1fr;\n        gap: 5px;\n    }\n    .button_window button {\n        font-size: 90%;\n    }\n    .log {\n        grid-column: 1;\n        grid-row: 3;\n        font-size: 80%;\n    }\n    .menu {\n        grid-column: 2;\n        grid-row: 3;\n    }\n    dialog {\n        max-width: 270px;\n    }\n    #closeButton, #closeButton2 {\n        margin-left:250px;\n        font-size:80%;\n    }\n    .main_window input[type=text] {\n        width:120px;\n    }\n}\n\n.death {\n    background-color: rgb(0, 0, 0, 0.5);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/blacklake.mp3":
/*!***************************!*\
  !*** ./src/blacklake.mp3 ***!
  \***************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '\u0004' (1:3)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/comp_assets.js":
/*!****************************!*\
  !*** ./src/comp_assets.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   icons: () => (/* binding */ icons),
/* harmony export */   song: () => (/* reexport default from dynamic */ _blacklake_mp3__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var _blacklake_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blacklake.mp3 */ "./src/blacklake.mp3");
/* harmony import */ var _blacklake_mp3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blacklake_mp3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _tree_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree.png */ "./src/tree.png");
/* harmony import */ var _person_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person.png */ "./src/person.png");
// importing




// initialize images
let iconTree = document.createElement('img'); iconTree.setAttribute('style','height:15px;width:15px;'); iconTree.src = `${_tree_png__WEBPACK_IMPORTED_MODULE_2__}`;
let iconTree2 = document.createElement('img'); iconTree2.setAttribute('style','height:15px;width:15px;'); iconTree2.src = `${_tree_png__WEBPACK_IMPORTED_MODULE_2__}`;
let iconTree3 = document.createElement('img'); iconTree3.setAttribute('style','height:15px;width:15px;'); iconTree3.src = `${_tree_png__WEBPACK_IMPORTED_MODULE_2__}`;
let iconPerson = document.createElement('img'); iconPerson.setAttribute('style', 'height:15px;width:15px;'); iconPerson.src = `${_person_png__WEBPACK_IMPORTED_MODULE_3__}`;
// array of images
let icons = { iconTree, iconTree2, iconTree3, iconPerson }
// export images


/***/ }),

/***/ "./src/comp_battle_functions.js":
/*!**************************************!*\
  !*** ./src/comp_battle_functions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enemies: () => (/* binding */ enemies),
/* harmony export */   enemyToAttack: () => (/* binding */ enemyToAttack),
/* harmony export */   isHeDead: () => (/* binding */ isHeDead),
/* harmony export */   isPlayerDead: () => (/* binding */ isPlayerDead),
/* harmony export */   listEnemies: () => (/* binding */ listEnemies),
/* harmony export */   startBattle: () => (/* binding */ startBattle),
/* harmony export */   switchAttack: () => (/* binding */ switchAttack)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _comp_hud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comp_hud */ "./src/comp_hud.js");
/* harmony import */ var _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comp_objects_and_methods */ "./src/comp_objects_and_methods.js");
// import: IsBattleOver, hud, monster objects, char1, classes



const eventEmitter = __webpack_require__(/*! ./comp_event_emitter.js */ "./src/comp_event_emitter.js");
// important vars
let enemies = [];
let enemyToAttack;
//button effects
let attack_button = document.querySelector('#attackButton');
attack_button.addEventListener('click', () => _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.attack(enemyToAttack));
// change enemies function
function isHeDead(damagedEnemy) {
    if (damagedEnemy.currentHP <= 0) {
        let entry = document.createElement('p');
        entry.textContent = `${damagedEnemy.name} dies!`;
        entry.setAttribute('style','color:yellow');
        _comp_hud__WEBPACK_IMPORTED_MODULE_1__.log_window.appendChild(entry);
        let deadMonsterID = enemies.findIndex(i => i.name == damagedEnemy.name);
        enemies.splice(deadMonsterID, 1);
        if (enemies.length == 0) {
            eventEmitter.emit('battle:win');
            // isBattleOver('win');
        }
    };
    isPlayerDead();
}
function isPlayerDead() {
    if (_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.currentHP <= 0) {
        eventEmitter.emit('battle:lose');
        for (let i = 0; i < _comp_hud__WEBPACK_IMPORTED_MODULE_1__.main_window.children.length; i++) {
            if (_comp_hud__WEBPACK_IMPORTED_MODULE_1__.main_window.children[i].tagName.toLowerCase() == 'button') {
                _comp_hud__WEBPACK_IMPORTED_MODULE_1__.main_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_1__.main_window.children[i]);
            }
        }
        for (let j = 0; j < _comp_hud__WEBPACK_IMPORTED_MODULE_1__.image_window.children.length; j++) {
            if (_comp_hud__WEBPACK_IMPORTED_MODULE_1__.image_window.children[j].tagName.toLowerCase() == 'button') {
                _comp_hud__WEBPACK_IMPORTED_MODULE_1__.image_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_1__.image_window.children[j]);
            }
        }
        while(_comp_hud__WEBPACK_IMPORTED_MODULE_1__.top_bar.firstChild) {_comp_hud__WEBPACK_IMPORTED_MODULE_1__.top_bar.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_1__.top_bar.firstChild)};
        let death = document.createElement('div');
        death.setAttribute('style', `position:absolute;height:100%;width:100%;z-index:500;overflow:hidden;`);
        death.classList.add('death');
        let container = document.querySelector('.container');
        container.appendChild(death);
    }
}
// update enemies list
function listEnemies() {
    let board = document.querySelector('#explorationBoard');
    Array.from(_comp_hud__WEBPACK_IMPORTED_MODULE_1__.image_window.children).forEach(entry => {
        if (entry !== board) {
            _comp_hud__WEBPACK_IMPORTED_MODULE_1__.image_window.removeChild(entry);
        } 
    })
    enemies.forEach((thisEnemy) => {
        let enemy_entry = document.createElement('p');
        let enemy_button = document.createElement('button');
        enemy_entry.textContent = `${thisEnemy.name} is there. It has AC of ${thisEnemy.armorClass}, attack bonus of ${thisEnemy.monsterAttackBonus} and HP of ${thisEnemy.currentHP}/${thisEnemy.maxHP}.`
        enemy_button.textContent = `Select`;
        enemy_button.setAttribute('id', thisEnemy.name);
        enemy_button.addEventListener('click', () => selectEnemy(thisEnemy));
        _comp_hud__WEBPACK_IMPORTED_MODULE_1__.image_window.appendChild(enemy_entry);
        _comp_hud__WEBPACK_IMPORTED_MODULE_1__.image_window.appendChild(enemy_button);
    });
}
// attacking
function selectEnemy(enemy) {
    enemyToAttack = enemy;
    _comp_hud__WEBPACK_IMPORTED_MODULE_1__.top_bar.textContent = `Selected enemy: ${enemy.name}.`;
}
// special button that switches attack modes
let JanitorSpecials = ['Spirit Slam', 'Spectral Blade', 'Wrathful Visage'];
let AccountantSpecials = ['Spirit Slam', 'Withering Bolt', 'Essence Drain'];
let DancerSpecials = ['Spirit Slam', 'Spirit Blessing', 'Bind of the Guardian'];
let attackIndex = 0;
let playerClass = '';
eventEmitter.on('Wraith', () => {
    playerClass = 'Wraith';
});
eventEmitter.on('Poltergeist', () => {
    playerClass = 'Poltergeist';
});
eventEmitter.on('GuardianSpirit', () => {
    playerClass = 'GuardianSpirit';
});
function switchAttack(char) {
    if (playerClass !== '') {
        if (char instanceof _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.Janitor) {
            attackIndex = (attackIndex + 1) % JanitorSpecials.length;
            char.specialAttack = JanitorSpecials[attackIndex];
        } else if (char instanceof _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.Accountant) {
            attackIndex = (attackIndex + 1) % AccountantSpecials.length;
            char.specialAttack = AccountantSpecials[attackIndex];
        } else if (char instanceof _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.Dancer) {
            attackIndex = (attackIndex + 1) % DancerSpecials.length;
            char.specialAttack = DancerSpecials[attackIndex];
        }
        let entry = document.createElement('p');
        entry.textContent = `You get ready to use ${char.specialAttack}.`;
        _comp_hud__WEBPACK_IMPORTED_MODULE_1__.log_window.appendChild(entry);
    };
};
//start battle
function startBattle(...encounterEnemies) {
    encounterEnemies.forEach((thisEnemy) => {
        thisEnemy.currentHP = thisEnemy.maxHP;
    });
    enemies = encounterEnemies;
    listEnemies();
}
// export


/***/ }),

/***/ "./src/comp_dice_game.js":
/*!*******************************!*\
  !*** ./src/comp_dice_game.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accusation: () => (/* binding */ accusation),
/* harmony export */   bidPhase: () => (/* binding */ bidPhase),
/* harmony export */   callOut: () => (/* binding */ callOut),
/* harmony export */   currentBid: () => (/* binding */ currentBid),
/* harmony export */   die1: () => (/* binding */ die1),
/* harmony export */   die2: () => (/* binding */ die2),
/* harmony export */   die3: () => (/* binding */ die3),
/* harmony export */   die4: () => (/* binding */ die4),
/* harmony export */   die5: () => (/* binding */ die5),
/* harmony export */   die6: () => (/* binding */ die6),
/* harmony export */   exampleLines: () => (/* binding */ exampleLines),
/* harmony export */   falseCubes: () => (/* binding */ falseCubes),
/* harmony export */   fiftyFifty: () => (/* binding */ fiftyFifty),
/* harmony export */   gameEnd: () => (/* binding */ gameEnd),
/* harmony export */   oneThird: () => (/* binding */ oneThird),
/* harmony export */   opponentBid: () => (/* binding */ opponentBid),
/* harmony export */   opponentHand: () => (/* binding */ opponentHand),
/* harmony export */   opponentResponse: () => (/* binding */ opponentResponse),
/* harmony export */   playerHand: () => (/* binding */ playerHand),
/* harmony export */   roll1d4: () => (/* binding */ roll1d4),
/* harmony export */   roll6d4Opponent: () => (/* binding */ roll6d4Opponent),
/* harmony export */   roll6d4Player: () => (/* binding */ roll6d4Player),
/* harmony export */   rollPhase: () => (/* binding */ rollPhase),
/* harmony export */   startDiceGame: () => (/* binding */ startDiceGame)
/* harmony export */ });
// initialize hud
let main_window = document.querySelector('.main_window');
// initialize vars
let die1 = {result: 0, reRollFlag: false};
let die2 = {result: 0, reRollFlag: false};
let die3 = {result: 0, reRollFlag: false};
let die4 = {result: 0, reRollFlag: false};
let die5 = {result: 0, reRollFlag: false};
let die6 = {result: 0, reRollFlag: false};
let playerHand = [die1, die2, die3, die4, die5, die6];
let opponentHand = [];
let currentBid = { player: '', numberOfDice: 0, dots: 0 };
let accusation = { accuser: '', numberOfDice: 0, dots: 0 };
let exampleLines = {
    openLine: `Come on, let's play`,
    bidLine: `Luck is on my side today`,
    bluffLine: `I have good dice today, kid`,
    accuseLine: `Yeah, I don't think so`,
    winLine: `Gotcha, kid`,
    loseLine: `Darn. You got lucky, pal`
}
function startDiceGame(opponentName, lines, callbackEnd, prize) {
    // clear main window
    while (main_window.firstChild) { main_window.removeChild(main_window.firstChild) };
    // instructions
    let instruction = document.createElement('p');
    instruction.setAttribute('style','color:yellow');
    instruction.textContent = '[You are about to play Falsecubes. Here are the instructions.]';
    main_window.appendChild(instruction);
    // start game button
    let startDiceGameButton = document.createElement('button');
    startDiceGameButton.textContent = `Let's play Falsecubes!`
    main_window.appendChild(startDiceGameButton);
    startDiceGameButton.addEventListener('click', () => {
        falseCubes(opponentName, lines, callbackEnd, prize);
        main_window.removeChild(startDiceGameButton);
    });
}
// function that starts the game
function falseCubes(opponentName, lines, callbackEnd, prize) {
    // openLine from the opponent
    let openLineEntry = document.createElement('p');
    openLineEntry.textContent = `${opponentName}: ${lines.openLine}`;
    main_window.appendChild(openLineEntry);
    // roll dice button
    let rollDiceButton = document.createElement('button');
    rollDiceButton.textContent = `Roll the dice.`
    main_window.appendChild(rollDiceButton);
    rollDiceButton.addEventListener('click', () => {
        main_window.removeChild(rollDiceButton);
        rollPhase(opponentName, lines, callbackEnd, prize)
    });
}
// rolling 6d4
function roll6d4Player() {
    die1.result = Math.floor((Math.random() * 4) + 1);
    die2.result = Math.floor((Math.random() * 4) + 1);
    die3.result = Math.floor((Math.random() * 4) + 1);
    die4.result = Math.floor((Math.random() * 4) + 1);
    die5.result = Math.floor((Math.random() * 4) + 1);
    die6.result = Math.floor((Math.random() * 4) + 1);    
    return [die1, die2, die3, die4, die5, die6]
}
function roll6d4Opponent() {
    let opponentDie1 = Math.floor((Math.random() * 4) + 1);
    let opponentDie2 = Math.floor((Math.random() * 4) + 1);
    let opponentDie3 = Math.floor((Math.random() * 4) + 1);
    let opponentDie4 = Math.floor((Math.random() * 4) + 1);
    let opponentDie5 = Math.floor((Math.random() * 4) + 1);
    let opponentDie6 = Math.floor((Math.random() * 4) + 1);    
    return [opponentDie1, opponentDie2, opponentDie3, opponentDie4, opponentDie5, opponentDie6]
}
function roll1d4() {
    return Math.floor((Math.random() * 4) + 1);
}
// rolling phase
function rollPhase(opponentName, lines, callbackEnd, prize) {
    // playerHand and opponentHand arrays get assigned six integers
    roll6d4Player();
    opponentHand = roll6d4Opponent();
    // a message pops out: 'You rolled: x, y, a, b, c, d'
    let message = document.createElement('p');
    message.textContent = `You rolled: ${die1.result}, ${die2.result}, ${die3.result}, ${die4.result}, ${die5.result}, ${die6.result}.`;
    main_window.appendChild(message);
    // below each number a checkmark form
    let playerRerollForm = document.createElement('form');
    main_window.appendChild(playerRerollForm);
    for (let i = 0; i < 6; i++) {
        let checkmark = document.createElement('input');
        checkmark.setAttribute('type', 'checkbox');
        checkmark.setAttribute('value', `${i+1}`);
        checkmark.setAttribute('name', `${i+1}`);
        checkmark.classList.add('checkmark');
        let label = document.createElement('label');
        label.setAttribute('for', `${i+1}`);
        label.textContent = `Dice ${i+1}`;
        playerRerollForm.appendChild(checkmark);
        playerRerollForm.appendChild(label);
        let br = document.createElement('br');
        playerRerollForm.appendChild(br);
    }
    let submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('style', 'margin-top: 10px;');
    playerRerollForm.appendChild(submit);
    // opponent re-rolls logic
    let allOpponent1s = opponentHand.filter(i => i == 1);
    let allOpponent2s = opponentHand.filter(i => i == 2);
    let allOpponent3s = opponentHand.filter(i => i == 3);
    let allOpponent4s = opponentHand.filter(i => i == 4);
    let opponent1sObject = { number: allOpponent1s.length, dots: 1 };
    let opponent2sObject = { number: allOpponent2s.length, dots: 2 };
    let opponent3sObject = { number: allOpponent3s.length, dots: 3 };
    let opponent4sObject = { number: allOpponent4s.length, dots: 4 };
    let opponentObjects = [opponent1sObject, opponent2sObject, opponent3sObject, opponent4sObject];
    console.log(`Orig opponentHand: ${opponentHand}`);
    let opponentObjectsSorted = opponentObjects.sort((a, b) => (a.number > b.number) ? -1 : 1);
    let opponentLastDots;
    let opponentSecondToLastDots;
    if (opponentObjectsSorted[3].number !== 0) {
        opponentLastDots = opponentObjectsSorted[3].dots;
        console.log(`Bad dots: ${opponentLastDots}`);
        opponentSecondToLastDots = opponentObjectsSorted[2].dots;
        console.log(`Second bad dots: ${opponentSecondToLastDots}`);    
    } else {
        opponentLastDots = opponentObjectsSorted[2].dots;
        console.log(`Bad dots: ${opponentLastDots}`);
        opponentSecondToLastDots = opponentObjectsSorted[1].dots;
        console.log(`Second bad dots: ${opponentSecondToLastDots}`);
    }
    let opponentHandToKeep = opponentHand.filter(i => (i !== opponentLastDots && i !== opponentSecondToLastDots));
    // if we remove 3 dice
    // howManyDiceToReRoll = 6 - 3 = 3
    // i = 0, i = 1, i = 2, runs three times
    while (opponentHandToKeep.length < 6) {
        let newOpponentRoll = roll1d4();
        opponentHandToKeep.push(newOpponentRoll);
    }
    opponentHand = opponentHandToKeep;
    console.log(`New Opponent Hand: ${opponentHand}`);
    // below that, a submit/reroll
    // playerHand is emptied
    // non-selected dice get added back to playerHand
    // for the indexes of the selected die, what is added to playerHand is the return of reRollDie
    playerRerollForm.addEventListener('submit', function(event) {
        event.preventDefault();
        for (let i = 0; i < 6; i++) {
            let checkbox = document.querySelector(`input[name="${i+1}"`);
            if (checkbox.checked) {
                // 1, 2, [3], [4], 1, 2
                playerHand[i].reRollFlag = true;
            }
        }
        let j = 0;
        while (j < 6)  {
            // 1, 2, [3], [4], 1, 2
            if (playerHand[j].reRollFlag == true) {
                playerHand.splice(j, 1);
                let newDie = {result: roll1d4(), reRollFlag: false};
                playerHand.push(newDie);
            } else {
                j++;
            }
        }
        bidPhase(opponentName, lines, callbackEnd, prize);
    });
}
// bidding phase
function bidPhase(opponentName, lines, callbackEnd, prize) {
// writes a message. you rerolled dice. after re-rolls, your new hand is:
    let reRollMessage = document.createElement('p');
    if (currentBid.numberOfDice == 0) {
        while (main_window.firstChild) { main_window.removeChild(main_window.firstChild) };
        reRollMessage.textContent = `You re-roll some dice.`
        let reRollMessage2 = document.createElement('p');
        reRollMessage2.textContent = `Your new hand is: ${playerHand[0].result}, ${playerHand[1].result}, ${playerHand[2].result}, ${playerHand[3].result}, ${playerHand[4].result}, ${playerHand[5].result}. Time for the first bluffing phase.`;
        main_window.appendChild(reRollMessage);
        main_window.appendChild(reRollMessage2);
        playerBluffs(opponentName, lines, callbackEnd, prize);
    } else {
        reRollMessage.textContent = `Your hand is: ${playerHand[0].result}, ${playerHand[1].result}, ${playerHand[2].result}, ${playerHand[3].result}, ${playerHand[4].result}, ${playerHand[5].result}. Do you want to bluff, or accuse the opponent?`;
        main_window.appendChild(reRollMessage);
        // decide what to do here!
        let whatToDoButtons = document.createElement('div');
        main_window.appendChild(whatToDoButtons);
        let bluffButton = document.createElement('button');
        bluffButton.textContent = 'Bluff';
        bluffButton.style.marginRight = '5px';
        whatToDoButtons.appendChild(bluffButton);
        let accuseButton = document.createElement('button');
        accuseButton.textContent = 'Accuse';
        whatToDoButtons.appendChild(accuseButton);
        bluffButton.addEventListener('click', () => {
            main_window.removeChild(whatToDoButtons);
            playerBluffs(opponentName, lines, callbackEnd, prize);
        });
        accuseButton.addEventListener('click', () => {
            main_window.removeChild(whatToDoButtons);
            accusation.accuser = 'Player';
            accusation.numberOfDice = currentBid.numberOfDice;
            accusation.dots = currentBid.dots;
            let gameResult = callOut();
            gameEnd(gameResult, opponentName, lines, callbackEnd, prize);    
        });
    }
}
function playerBluffs(opponentName, lines, callbackEnd, prize) {
    // creates a dropdown form to bluff: "I have [1/2/3/4] of [1/2/3/4]"
    let bluffForm = document.createElement('form');
    main_window.appendChild(bluffForm);
    // --- number of dice ---
    let numberLabel = document.createElement('label');
    numberLabel.textContent = `I have this many...`;
    numberLabel.setAttribute('for', 'numberOfDice');
    bluffForm.appendChild(numberLabel);
    let numberSelect = document.createElement('select');
    numberSelect.setAttribute('name', 'numberOfDice');
    numberSelect.setAttribute('id', 'numberOfDice');
    bluffForm.appendChild(numberSelect);
    // options for number of dice
    // dynamically calculate how many options are available
    // currentBid.numberOfDice = 2
    // currentBid.dots = 2
    // options should be: 2, 3, 4, 5, 6
    // numberOfOptions = 7 - currentBid.number
    // starter(i) = currentBid.numberOfDice
    if (currentBid.numberOfDice !== 0) {
        for (let i = currentBid.numberOfDice; i <= 6; i++) {
            let option = document.createElement('option');
            option.textContent = i;
            option.setAttribute('value', i);
            numberSelect.appendChild(option);
        }
    } else {
        for (let i = 1; i <= 6; i++) {
            let option = document.createElement('option');
            option.textContent = i;
            option.setAttribute('value', i);
            numberSelect.appendChild(option);
        }
    }
    // --- which dots ---
    let dotsLabel = document.createElement('label');
    dotsLabel.textContent = `of this dice...`;
    dotsLabel.setAttribute('for', 'dots');
    bluffForm.appendChild(dotsLabel);
    let dotsSelect = document.createElement('select');
    dotsSelect.setAttribute('name', 'dots');
    dotsSelect.setAttribute('id', 'dots');
    bluffForm.appendChild(dotsSelect);
    // options for dots
    // dynamically calculate number of dots
    // this is only a problem if you're betting the same number of dice as the current bid
    // so the check should not go here, but at submit
    for (let i = 0; i < 4; i++) {
        let option = document.createElement('option');
        option.textContent = `${i+1}`;
        option.setAttribute('value', i+1);
        dotsSelect.appendChild(option);
    }
    // final submit
    let bluffSubmit = document.createElement('input');
    bluffSubmit.setAttribute('type', 'submit');
    bluffSubmit.setAttribute('value', 'Bluff!');
    bluffForm.appendChild(bluffSubmit);
// on submit, calls the opponentResponse
    bluffForm.addEventListener('submit', function(event) {
        // check for dots goes here
        if (numberSelect.value == currentBid.numberOfDice) {
            if (dotsSelect.value <= currentBid.dots) {
                event.preventDefault();
                let errorMessage = document.createElement('p');
                errorMessage.setAttribute('style', 'color:yellow');
                errorMessage.textContent = `[You can only bid higher than your opponent!]`;
                main_window.appendChild(errorMessage);
            } else {
                event.preventDefault();
                currentBid = { player: 'player', numberOfDice: numberSelect.value, dots: dotsSelect.value };
                while(main_window.firstChild) {main_window.removeChild(main_window.firstChild)};
                let bidMessage = document.createElement('p');
                bidMessage.textContent = `You bid: "I have ${currentBid.numberOfDice} of ${currentBid.dots} dots".`;
                main_window.appendChild(bidMessage);
                opponentResponse(opponentName, lines, callbackEnd, prize);    
            }
        } else {
            event.preventDefault();
            currentBid = { player: 'player', numberOfDice: numberSelect.value, dots: dotsSelect.value };
            while(main_window.firstChild) {main_window.removeChild(main_window.firstChild)};
            let bidMessage = document.createElement('p');
            bidMessage.textContent = `You bid: "I have ${currentBid.numberOfDice} of ${currentBid.dots} dots".`;
            main_window.appendChild(bidMessage);
            opponentResponse(opponentName, lines, callbackEnd, prize);
        }
    });
}
// 50-50 function
function fiftyFifty() {
    return Math.floor((Math.random() * 2) + 1);
}
function oneThird() {
    return Math.floor((Math.random() * 3) + 1);
}
// opponent response
function opponentResponse(opponentName, lines, callbackEnd, prize) {
    // set currentBid
    // if currentBid.numberOfdice > 2, opponent calls bluff
    // fill the accusation object with 'opponent', and 'currentBid'
    if (currentBid.numberOfDice > 2) {
        accusation = { accuser: 'opponent', numberOfDice: currentBid.numberOfDice, dots: currentBid.dots };
        let accuseLineEntry = document.createElement('p');
        accuseLineEntry.textContent = `${opponentName}: "${lines.accuseLine}".`;
        main_window.appendChild(accuseLineEntry);
        let accuseContinueButton = document.createElement('button');
        accuseContinueButton.textContent = 'Continue';
        main_window.appendChild(accuseContinueButton);
        accuseContinueButton.addEventListener('click', () => {
            main_window.removeChild(accuseContinueButton);
            let gameResult = callOut();
            gameEnd(gameResult, opponentName, lines, callbackEnd, prize);    
        });
    // if currentBid.numberOfdice =2
    } else if (currentBid.numberOfDice == 2) {
    // then 50% to call out a bluff anyway
        if (fiftyFifty() == 2) {
            accusation = { accuser: 'opponent', numberOfDice: currentBid.numberOfDice, dots: currentBid.dots };
            let accuseLineEntry = document.createElement('p');
            accuseLineEntry.textContent = `${opponentName}: "${lines.accuseLine}".`;
            main_window.appendChild(accuseLineEntry);
            let accuseContinueButton = document.createElement('button');
            accuseContinueButton.textContent = 'Continue';
            main_window.appendChild(accuseContinueButton);
            accuseContinueButton.addEventListener('click', () => {
                main_window.removeChild(accuseContinueButton);
                let gameResult = callOut();
                gameEnd(gameResult, opponentName, lines, callbackEnd, prize);    
            });
        // if that doesn't trigger, the opponent bids    
        } else {
            opponentBid(opponentName, lines, callbackEnd, prize);
        }
    } else {
        opponentBid(opponentName, lines, callbackEnd, prize);
    }
}
function opponentBid(opponentName, lines, callbackEnd, prize) {
    // opponent looks at opponentHand, identifying if there are any repeats
    let allOpponent1s = opponentHand.filter(i => i == 1);
    let allOpponent2s = opponentHand.filter(i => i == 2);
    let allOpponent3s = opponentHand.filter(i => i == 3);
    let allOpponent4s = opponentHand.filter(i => i == 4);
    let opponent1sObject = { number: allOpponent1s.length, dots: 1 };
    let opponent2sObject = { number: allOpponent2s.length, dots: 2 };
    let opponent3sObject = { number: allOpponent3s.length, dots: 3 };
    let opponent4sObject = { number: allOpponent4s.length, dots: 4 };
    let opponentObjects = [opponent1sObject, opponent2sObject, opponent3sObject, opponent4sObject];
    let opponentObjectsSorted = opponentObjects.sort((a, b) => (a.number > b.number) ? -1 : 1);
    console.log(opponentObjectsSorted);
    // needs to check currentBid, opponent's bid cannot be lower number of dice. can be equal, but then the dots should be higher
    // initialize temporary opponentBid var for calculation purposes
    let temporaryOpponentBid = {player: 'opponent', numberOfDice: 0, dots: 0};
    // first, we calculate what the opponent would have bet in a vacuum 
    // it's always the same dots
    temporaryOpponentBid.dots = opponentObjectsSorted[0].dots;
    // 50% it's numberOfDice they have and 50% numberofDice+1 [changed to 33% to go -1, +1 or equal]
    let chance = oneThird();
    if (chance == 1) {
        temporaryOpponentBid.numberOfDice = opponentObjectsSorted[0].number;
    } else if (chance == 2) {
        temporaryOpponentBid.numberOfDice = opponentObjectsSorted[0].number + 1;
    } else {
        temporaryOpponentBid.numberOfDice = opponentObjectsSorted[0].number -1;
    }
    // now we check the opponent's wanted bid versus illegal scenarios
    if (currentBid.numberOfDice > temporaryOpponentBid.numberOfDice) {
        // check if dots are higher
        if (temporaryOpponentBid.dots > currentBid.dots) {
            // if i bid 3 dice of 1 dots and opponent wants to bid 2 dice of 2 dots
            // this triggers, number of dice IS higher
            // opponent should bid 3 dice of 2 dots
            temporaryOpponentBid.numberOfDice = currentBid.numberOfDice;
        } else {
            // if i bid 3 dice of 4 dots and opponent wants to bid 2 dice of 2 dots
            // if opponent's next highest dots > currentBid.dots
            if (opponentObjectsSorted[1].dots > currentBid.dots) {
                // then 50-50: same numberOfDice but with second highest dots
                // and 4 dice of 2 dots
                if (fiftyFifty() == 2) {
                    temporaryOpponentBid.dots = opponentObjectsSorted[1].dots;
                    temporaryOpponentBid.numberOfDice = currentBid.numberOfDice;
                } else {
                    temporaryOpponentBid.numberOfDice = currentBid.numberOfDice + 1;
                }
            } else {
                // if not, then just 4 dice of 2 dots
                temporaryOpponentBid.numberOfDice = currentBid.numberOfDice + 1;
            }
        }
    } else if (currentBid.numberOfDice == temporaryOpponentBid.numberOfDice) {
        // so if my bet is 2 dice 2 dots and opponent wants to bet 2 dice 3 dots
        // then its fine
        if (temporaryOpponentBid.dots <= currentBid.dots) {
            // but if opponent wants to bid 2 dice 2 dots or 2 dice 1 dot
            temporaryOpponentBid.numberOfDice = currentBid.numberOfDice + 1;
        }
    }
    // now make the opponentBid the currentBid
    currentBid = temporaryOpponentBid;
    // then they say one of their 'bettinglines' (add that) 
    let bluffLine1Entry = document.createElement('p');
    bluffLine1Entry.textContent = `${opponentName}: "${lines.bluffLine}".`;
    main_window.appendChild(bluffLine1Entry);
    let bluffLine2Entry = document.createElement('p');
    bluffLine2Entry.textContent = `"I rolled ${currentBid.numberOfDice} dice with ${currentBid.dots} dots."`;    
    main_window.appendChild(bluffLine2Entry);
    // re-bid, but can only do higher now!
    bidPhase(opponentName, lines, callbackEnd, prize);
    // thoughts on re-bidding: reuse the same function flow
    // introduce a limit on what the player can bid
    // but the limits don't work if currentBid is empty
}
// calling out a bluff
function callOut() {
    // if accusation.accuser = player, checks opponentHand, if accusation.accuser = opponent, checks playerHand
    // these are set up differently, so different calculations
    if (accusation.accuser == 'opponent') {
        // playerHand = [die1, ...]
        // die1 = {result: 0, ...}
        let allCorrectDots = playerHand.filter(i => (i.result == accusation.dots));
        console.log(`ALL CORRECT DOTS: ${allCorrectDots}`);
        console.log(`ACCUSATION DOTS: ${accusation.dots}`);
        console.log(`ACCUSATION NUMBER OF DICE: ${accusation.numberOfDice}`);
        if (allCorrectDots.length >= accusation.numberOfDice) {
            return 'playerWins';
        } else {
            return 'opponentWins';
        }
    } else {
        // opponentHand = [1, 3, 4, 1, 3, 2]
        let allCorrectDots = opponentHand.filter(i => (i == accusation.dots));
        console.log(`ALL CORRECT DOTS: ${allCorrectDots}`);
        console.log(`ACCUSATION DOTS: ${accusation.dots}`);
        console.log(`ACCUSATION NUMBER OF DICE: ${accusation.numberOfDice}`);
        if (allCorrectDots.length >= accusation.numberOfDice) {
            return 'opponentWins'; 
        } else {
            return 'playerWins';
        }
    }
    // checks that player/opponentHand.includes the integer equaling to the 'dots'
    // loops through the check a number of times = numberOfDice
    // if all true, accusation.accuser is the loser
    // returns a winner
}
// ending the game
function gameEnd(result, opponentName, lines, callbackEnd, prize) {
    // a message, who is being accused and what are they being accused of
    let gameEndEntry = document.createElement('p');
    if (accusation.accuser == 'Player') {
        gameEndEntry.textContent = `Accusation! You and ${opponentName} check the bluff. Your opponent is the bluffer. They said they have ${accusation.numberOfDice} of ${accusation.dots} dots. Time to see if they're bluffing.`
    } else {
        gameEndEntry.textContent = `Accusation! You and ${opponentName} check the bluff. You are the bluffer. You said that you've got ${accusation.numberOfDice} of ${accusation.dots} dots. ${opponentName} checks if you're bluffing.`
    }
    main_window.appendChild(gameEndEntry);
    let continueButton = document.createElement('button');
    continueButton.textContent = 'Let us find out'
    main_window.appendChild(continueButton);
    continueButton.addEventListener('click', () => {
        main_window.removeChild(continueButton);
        gameEnd2(result, opponentName, lines, callbackEnd, prize);
    })
}
function gameEnd2(result, opponentName, lines, callbackEnd, prize) {
    let opponentEndLineEntry = document.createElement('p');
    if (result == 'playerWins') {
        let gameResultEntry = document.createElement('p');
        gameResultEntry.textContent = 'And.... You win!';
        main_window.appendChild(gameResultEntry);
        opponentEndLineEntry.textContent = `${opponentName}: "${lines.loseLine}."`
        main_window.appendChild(opponentEndLineEntry);
        callbackEnd('win', prize);
    } else {
        let gameResultEntry = document.createElement('p');
        gameResultEntry.textContent = `And.... ${opponentName} wins!`;
        main_window.appendChild(gameResultEntry);
        opponentEndLineEntry.textContent = `${opponentName}: "${lines.winLine}."`
        main_window.appendChild(opponentEndLineEntry);
        callbackEnd('lose', prize);
    }
    // saying the 'winLine' or 'loseLine'  
    // keep track of gold!
    // show gold in the inventory
    // win or lose a set [FOR NOW] number of gold
    // gold could be spent on buying equipment
}


/***/ }),

/***/ "./src/comp_event_emitter.js":
/*!***********************************!*\
  !*** ./src/comp_event_emitter.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");

const eventEmitter = new EventEmitter();

module.exports = eventEmitter;

/***/ }),

/***/ "./src/comp_hud.js":
/*!*************************!*\
  !*** ./src/comp_hud.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attack_button: () => (/* binding */ attack_button),
/* harmony export */   button_window: () => (/* binding */ button_window),
/* harmony export */   dialogAnimationEnd: () => (/* binding */ dialogAnimationEnd),
/* harmony export */   image_window: () => (/* binding */ image_window),
/* harmony export */   inventory_button: () => (/* binding */ inventory_button),
/* harmony export */   log_window: () => (/* binding */ log_window),
/* harmony export */   main_window: () => (/* binding */ main_window),
/* harmony export */   menu_window: () => (/* binding */ menu_window),
/* harmony export */   special_button: () => (/* binding */ special_button),
/* harmony export */   stats_button: () => (/* binding */ stats_button),
/* harmony export */   top_bar: () => (/* binding */ top_bar)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bg.jpg */ "./src/bg.jpg");
/* harmony import */ var _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comp_objects_and_methods */ "./src/comp_objects_and_methods.js");
// import: char1, classes




// initialize spaces and buttons
let top_bar = document.querySelector('.top_bar');
let log_window = document.querySelector('.log');
let main_window = document.querySelector('.main_window');
let image_window = document.querySelector('.image_window');
let menu_window = document.querySelector('.menu');
let button_window = document.querySelector('.button_window');
let attack_button = document.querySelector('#attackButton');
let special_button = document.querySelector('#specialButton');
let inventory_button = document.querySelector('#inventoryButton');
let stats_button = document.querySelector('#statsButton');
//draw player stats
menu_window.textContent = `You are ${_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.name}. Your class is unknown. Your armor class is ${_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.armorClass}. Your HP is ${_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.currentHP}/${_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.maxHP}.`;
// dialog remover
function dialogAnimationEnd(event) {
    let dialog = event && event.target ? event.target : event;
    if (dialog.tagName == 'DIALOG') {
        dialog.close();
    } else {
        dialog.remove();
    }
    dialog.classList.remove('hide');
    dialog.removeEventListener('animationend', dialogAnimationEnd);
}
//---main menu---
let mainMenuDialog = document.createElement('dialog');
mainMenuDialog.setAttribute('style','height:75%;width:100%;z-index:1000;overflow:hidden;');
document.body.appendChild(mainMenuDialog);
mainMenuDialog.innerHTML = 
`
<div class='mainMenuContainer'>
    <div style='display:flex;justify-content:center;border-bottom:5px solid silver'>
        <h1 style='margin-bottom: 5px;'>What Makes You Live?</h1>
    </div>
    <h1 style='text-align:center;margin-bottom:-20px;'>Main Menu</h2>   
    <div class='mainMenu' style='display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:50px;'>
        <button id='startGameButton' style='display:block;margin:0 auto; border: 3px solid silver; border-radius: 5px; margin-bottom:20px;width:250px;'>Start game</button>
        <button id='settingsButton' style='display:block;margin:0 auto; border: 3px solid silver; border-radius: 5px; margin-bottom:20px;width:250px;'>Settings</button>
        <button id='aboutButton' style='display:block;margin:0 auto; border: 3px solid silver; border-radius: 5px; margin-bottom:20px;width:250px;'>About the creator</button>
        <button id='contactButton' style='display:block;margin:0 auto; border: 3px solid silver; border-radius: 5px; margin-bottom:0;width:250px;'>Contact me</button>
    </div>
    <br>
    <p style='color:white;font-size:80%;'><i>Note: If you play on mobile, scroll to the bottom of the screen to see the action buttons.</i></p>
</div>
    `
mainMenuDialog.showModal();

let blackMenu = document.createElement('div');
blackMenu.setAttribute('style', `background-color:black;position:absolute;height:100%;width:100%;z-index:500;overflow:hidden;`);
let bgMenu = document.createElement('div');
bgMenu.setAttribute('style', `height:100%;width:100%;opacity:0.5;background-image:url("${_bg_jpg__WEBPACK_IMPORTED_MODULE_1__}");background-position:center;background-size:cover;overflow:hidden;`);
blackMenu.appendChild(bgMenu);
let container = document.querySelector('.container');
container.appendChild(blackMenu);
document.body.style.overflow = 'hidden';

let startButton = document.querySelector('#startGameButton');
let mainMenuClosed = false;;
startButton.addEventListener('click', () => {
    mainMenuDialog.classList.add('hide');
    mainMenuDialog.addEventListener('animationend', () => {
        dialogAnimationEnd(mainMenuDialog);
        mainMenuClosed = true;
        checkAnimationComplete();
    });
});
function checkAnimationComplete() {
    if (mainMenuClosed) {
        blackMenu.classList.add('hide');
        blackMenu.addEventListener('animationend', dialogAnimationEnd);
        document.body.style.overflow = 'visible';    
    }
}
// export spaces and buttons


/***/ }),

/***/ "./src/comp_inventory_system.js":
/*!**************************************!*\
  !*** ./src/comp_inventory_system.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addGold: () => (/* binding */ addGold),
/* harmony export */   allItems: () => (/* binding */ allItems),
/* harmony export */   equipItem: () => (/* binding */ equipItem),
/* harmony export */   grabItem: () => (/* binding */ grabItem),
/* harmony export */   inventoryDialog: () => (/* binding */ inventoryDialog),
/* harmony export */   newItem: () => (/* binding */ newItem),
/* harmony export */   playerGold: () => (/* binding */ playerGold),
/* harmony export */   unequipItem: () => (/* binding */ unequipItem)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _comp_hud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comp_hud */ "./src/comp_hud.js");
/* harmony import */ var _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comp_objects_and_methods */ "./src/comp_objects_and_methods.js");
// import: hud, char1, menuUpdater,




// ---inventory system---
// create a dialog window when we click on inventory
let inventoryDialog = document.createElement('dialog');
inventoryDialog.setAttribute('style','max-width:500px;')
inventoryDialog.innerHTML = `
    <button id='closeButton'>Close</button>
    <div id='inventoryBox'>
        <h2>Inventory</h2>
        <div id='equippedBox'>
            Equipped weapon: <span id='equippedWeaponBox'></span>
            <br>
            Equipped armor: <span id='equippedArmorBox'></span>
            <br>
            Equipped misc: <span id='equippedMiscBox'></span>
        </div>
        <br>
        <br>
        Gold: <span id='goldBox'></span>
        <br>
        <div id='allBox'>
            Bag:
            <ul id='allList'>
            </ul>
        </div>
    </div>
`;
document.body.appendChild(inventoryDialog);
_comp_hud__WEBPACK_IMPORTED_MODULE_1__.inventory_button.addEventListener('click', () => {
    inventoryDialog.showModal();
    let closeButton = document.querySelector('#closeButton');
    closeButton.addEventListener('click', () => {
        inventoryDialog.classList.add('hide');
        inventoryDialog.addEventListener('animationend', _comp_hud__WEBPACK_IMPORTED_MODULE_1__.dialogAnimationEnd);
    })
})
// gold system
let playerGold = 0;
let goldBox = document.querySelector('#goldBox');
goldBox.textContent = playerGold;
function addGold(amount) {
    playerGold += amount;
    goldBox.textContent = playerGold;
}
// grab elements from dialog
let equippedWeaponBox = document.querySelector('#equippedWeaponBox');
let equippedArmorBox = document.querySelector('#equippedArmorBox');
let equippedMiscBox = document.querySelector('#equippedMiscBox');
let allList = document.querySelector('#allList')
// when an object is grabbed
function grabItem(item) {
    _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.inventory.push(item);
    let itemBullet = document.createElement('li')
    itemBullet.textContent = `${item.name}, ${item.type}. Attack bonus: ${item.itemAttack}. Armor bonus: ${item.itemArmor}.`
    allList.appendChild(itemBullet);
    if (item.type !== 'quest item') {
        let equipButton = document.createElement('button');
        equipButton.addEventListener('click', () => equipItem(item));
        equipButton.textContent = 'Equip';
        equipButton.setAttribute('style', 'font-size: 70%;');
        equipButton.setAttribute('id', `${item.id}`);
        allList.appendChild(equipButton);
    }
}
// when an object is equipped
function equipItem(item) {
    if (_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.inventory.includes(item)) {
        switch (item.type) {
            case 'weapon':
                if (_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedWeapon == '') {
                    _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedWeapon = item;
                    _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.armorClass = _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.armorClass + _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedWeapon.itemArmor;
                    equippedWeaponBox.textContent = `${item.name}`;
                    let equipButton = document.querySelector(`#${item.id}`);
                    equipButton.textContent = 'Unequip';
                    equipButton.removeEventListener('click', () => equipItem(item));
                    equipButton.addEventListener('click', () => unequipItem(item));   
                    (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.menuUpdater)();         
                } else {
                    // console.log('ERROR: please unequip your current item first')
                }
                break;
            case 'armor':
                if (_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedArmor == '') {
                    _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedArmor = item;
                    _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.armorClass = _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.armorClass + _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedArmor.itemArmor;
                    equippedArmorBox.textContent = `${item.name}`;
                    let equipButton = document.querySelector(`#${item.id}`);
                    equipButton.textContent = 'Unequip';
                    equipButton.removeEventListener('click', () => equipItem(item));
                    equipButton.addEventListener('click', () => unequipItem(item));   
                    (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.menuUpdater)();         
                } else {
                    // console.log('ERROR: please unequip your current item first')
                }
                break;
            case 'misc':
                if (_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedMisc == '') {
                    _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedMisc = item;
                    _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.armorClass = _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.armorClass + _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedMisc.itemArmor;
                    equippedMiscBox.textContent = `${item.name}`;
                    let equipButton = document.querySelector(`#${item.id}`);
                    equipButton.textContent = 'Unequip';
                    equipButton.removeEventListener('click', () => equipItem(item));
                    equipButton.addEventListener('click', () => unequipItem(item));   
                    (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.menuUpdater)();         
                } else {
                    // console.log('ERROR: please unequip your current item first')
                }
                break;
        }
    } else {
        // console.log('ERROR: you do not have this item in your inventory')
    }
}
// when an item is unequipped
function unequipItem(item) {
    if (_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedWeapon == item || _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedArmor == item || _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedMisc == item) {
        if (_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedWeapon == item) {
            _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.armorClass = _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.armorClass - _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedWeapon.itemArmor;
            _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedWeapon = '';
            equippedWeaponBox.textContent = ``;
        } else if (_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedArmor == item) {
            _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.armorClass = _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.armorClass - _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedArmor.itemArmor;
            _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedArmor = '';
            equippedArmorBox.textContent = ``;
        } else if (_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedMisc == item) {
            _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.armorClass = _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.armorClass - _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedMisc.itemArmor;
            _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.char1.equippedMisc = '';
            equippedMiscBox.textContent = ``;
        }
        (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.menuUpdater)();
        let equipButton = document.querySelector(`#${item.id}`);
        equipButton.textContent = 'Equip';
        equipButton.removeEventListener('click', () => unequipItem(item));
        equipButton.addEventListener('click', () => equipItem(item));
    } else {
        // console.log('ERROR: this item is not equipped;')
    }
}
// to character, add the following keys: equippedWeapon, equippedArmor, equippedMisc, inventory = []
// the item object will have keys: type (weapon, armor or misc); itemAttack; itemArmor
function newItem(name, type, itemAttack, itemArmor, id) {
    return {
        name: name,
        type: type,
        itemAttack: itemAttack,
        itemArmor: itemArmor,
        id: id
    }
}
let magicSword = newItem('Magic Sword', 'weapon', 20, 0, 'n1');
let magicArmor = newItem('Magic Armor', 'armor', 0, 2, 'n2');
let magicRing = newItem('Magic Ring', 'misc', 1, 1, 'n3');
let ultraSword = newItem('Ultra Sword', 'weapon', 40, 0, 'n4');
let ultraArmor = newItem('Ultra Armor', 'armor', 0, 4, 'n5');
let ultraRing = newItem('Ultra Ring', 'misc', 2, 2, 'n6');
let rustySword = newItem('Rusty Sword', 'weapon', 1, 0, 'n7');
let rustyArmor = newItem('Rusty Armor', 'armor', 0, 1, 'n8');
let goldRing = newItem('Gold Ring', 'misc', 0, 1, 'n9');
let healthPotion = newItem('Health Potion', 'quest item', 0, 0, 'n10');
let wispBall = newItem('Dimly Glowing Ball', 'misc', 0, 1, 'n11');
// exporting object
let allItems = { wispBall, magicArmor, magicRing, magicSword, ultraArmor, ultraRing, ultraSword, rustyArmor, rustySword, goldRing, healthPotion };
// export


/***/ }),

/***/ "./src/comp_objects_and_methods.js":
/*!*****************************************!*\
  !*** ./src/comp_objects_and_methods.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accountant: () => (/* binding */ Accountant),
/* harmony export */   Character: () => (/* binding */ Character),
/* harmony export */   Dancer: () => (/* binding */ Dancer),
/* harmony export */   Janitor: () => (/* binding */ Janitor),
/* harmony export */   Monster: () => (/* binding */ Monster),
/* harmony export */   NPCMaker: () => (/* binding */ NPCMaker),
/* harmony export */   NPCRole: () => (/* binding */ NPCRole),
/* harmony export */   char1: () => (/* binding */ char1),
/* harmony export */   goblin_chieftain: () => (/* binding */ goblin_chieftain),
/* harmony export */   goblin_fighter: () => (/* binding */ goblin_fighter),
/* harmony export */   goblin_grunt: () => (/* binding */ goblin_grunt),
/* harmony export */   goblin_shaman: () => (/* binding */ goblin_shaman),
/* harmony export */   imp1: () => (/* binding */ imp1),
/* harmony export */   imp2: () => (/* binding */ imp2),
/* harmony export */   menuUpdater: () => (/* binding */ menuUpdater),
/* harmony export */   monsters: () => (/* binding */ monsters),
/* harmony export */   wizard: () => (/* binding */ wizard)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _comp_battle_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comp_battle_functions */ "./src/comp_battle_functions.js");
/* harmony import */ var _comp_races__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comp_races */ "./src/comp_races.js");
// import: enemies array, isHeDead, listEnemies



// log_window
let log_window = document.querySelector('.log');
// object constructor functions
function Character(name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory, race, spiritConcept, concept, description) {
    this.name = name;
    this.attackBonus = attackBonus;
    this.armorClass = armorClass;
    this.currentHP = currentHP;
    this.maxHP = maxHP;
    this.specialAttack = specialAttack;
    this.equippedWeapon = '';
    this.equippedArmor = '';
    this.equippedMisc = '';
    this.inventory = [];
    this.race = race;
    this.spiritConcept = { concept: concept, description: description }
}

function Monster(name, monsterAttackBonus, armorClass, currentHP, maxHP, status) {
    this.name = name;
    this.monsterAttackBonus = monsterAttackBonus;
    this.armorClass = armorClass;
    this.currentHP = currentHP;
    this.maxHP = maxHP;
    this.status = status;
}
// hero.prototype attack method
Character.prototype.attack = function(selectedEnemy) {
    if (_comp_battle_functions__WEBPACK_IMPORTED_MODULE_1__.enemies.length !== 0) {
        if (selectedEnemy !== undefined) {
            _comp_battle_functions__WEBPACK_IMPORTED_MODULE_1__.enemies.forEach(enemy => {
                if (enemy.status == 'burning') {
                    enemy.currentHP = enemy.currentHP - 5;
                    (0,_comp_battle_functions__WEBPACK_IMPORTED_MODULE_1__.isHeDead)(enemy); 
                    let entry = document.createElement('p');
                    entry.textContent = `${enemy.name} is burning for 5 damage!`;
                    entry.setAttribute('style','color:yellow');
                    log_window.appendChild(entry);
                }
            });
            _comp_battle_functions__WEBPACK_IMPORTED_MODULE_1__.enemies.forEach(enemy => {
                enemy.status = '';
            });
            Array.from(log_window.children).forEach((entry) => {
                entry.setAttribute('style', 'color:white;');
            });
            if (selectedEnemy.currentHP > 0) {
                let attackRoll = Math.floor((Math.random() * 20) + 1 + this.attackBonus);
                if (char1.equippedWeapon !== '') {
                    attackRoll = attackRoll + this.equippedWeapon.itemAttack;
                }
                if (char1.equippedArmor !== '') {
                    attackRoll =+ attackRoll + this.equippedArmor.itemAttack;
                }
                if (char1.equippedMisc !== '') {
                    attackRoll =+ attackRoll + this.equippedMisc.itemAttack;
                }
                let extraComment = '';
                let extraAttack = 0;
                let extraDamage = 0;
                switch (this.specialAttack) {
                    case 'Normal Attack':
                        break;
                    case 'Spectral Blade':
                        extraComment = ' with the Spectral Blade (-2 accuracy, +2 damage if hits)';
                        extraAttack = -2;
                        extraDamage = +4;
                        break;
                    case 'Spirit Blessing':
                        extraAttack = -1000;
                        break;
                    case 'Withering Bolt':
                        extraComment = ' with the Withering Bolt (-4 accuracy, but +6 damage if hits)';
                        extraAttack = -4;
                        extraDamage = +6;
                        break;
                    case 'Wrathful Visage':
                        extraComment = ' with the Wrathful Visage (-4 accuracy, but stuns the target)';
                        extraAttack = -4;
                        if (attackRoll + extraAttack > selectedEnemy.armorClass) { selectedEnemy.status = 'stunned'; }
                        break;
                    case 'Bind of the Guardian':
                        extraComment = ' with the Bind of the Guardian (-4 accuracy, but stuns the target)';
                        extraAttack = -4;
                        if (attackRoll + extraAttack > selectedEnemy.armorClass) { selectedEnemy.status = 'stunned'; }
                        break;
                    case 'Essence Drain':
                        extraComment = ' with the Essence Drain (-4 accuracy, but sets target on fire for one turn)';
                        extraAttack = -4;
                        if (attackRoll + extraAttack > selectedEnemy.armorClass) { selectedEnemy.status = 'burning'; }
                        break;                        
                }
                if (this.race !== '') {
                    extraAttack += this.race.raceAttackBonus;
                }
                if (attackRoll + extraAttack > selectedEnemy.armorClass) {
                    selectedEnemy.currentHP -= attackRoll + extraAttack + extraDamage - selectedEnemy.armorClass;
                    let entry = document.createElement('p');
                    entry.textContent = `${this.name} attacks ${selectedEnemy.name}${extraComment}! The attack hits and deals ${attackRoll + extraAttack + extraDamage - selectedEnemy.armorClass} damage!`;
                    entry.setAttribute('style','color:yellow');
                    log_window.appendChild(entry);
                    (0,_comp_battle_functions__WEBPACK_IMPORTED_MODULE_1__.isHeDead)(selectedEnemy);
                    (0,_comp_battle_functions__WEBPACK_IMPORTED_MODULE_1__.listEnemies)();
                } else if (this.specialAttack == 'Spirit Blessing') {
                    let healed;
                    let playerHPmissing = this.maxHP - this.currentHP;
                    if (playerHPmissing > 5) {
                        this.currentHP = this.currentHP + 5;
                        healed = 5;
                    } else if (playerHPmissing > 0) {
                        healed = playerHPmissing;
                        this.currentHP = this.maxHP;
                    } else {
                        healed = 0;
                    }
                    let entry = document.createElement('p');
                    entry.textContent = `${this.name} casts Spirit Blessing, healing themself for ${healed} HP!`;
                    entry.setAttribute('style','color:yellow');
                    log_window.appendChild(entry);
                    menuUpdater();
                } else {
                    let entry = document.createElement('p');
                    entry.textContent = `${this.name} attacks ${selectedEnemy.name}! The attack misses!`;
                    entry.setAttribute('style','color:yellow');
                    log_window.appendChild(entry);
                }
                if (_comp_battle_functions__WEBPACK_IMPORTED_MODULE_1__.enemies.length !== 0) { 
                    _comp_battle_functions__WEBPACK_IMPORTED_MODULE_1__.enemies.forEach(enemy => {
                        if (enemy.status !== 'stunned') {
                            enemy.counterattack(); 
                        } else if (enemy.status == 'stunned') {
                            let entry = document.createElement('p');
                            entry.textContent = `${enemy.name} is stunned!`;
                            entry.setAttribute('style','color:yellow');
                            log_window.appendChild(entry);
                        }
                    }); 
                }
            }
        } else {
            let entry = document.createElement('p');
            entry.textContent = `Which monster do I attack?`;
            log_window.appendChild(entry);    
        }
    } else {
        let entry = document.createElement('p');
        entry.textContent = `No monsters around.`;
        log_window.appendChild(entry);
    }
}
// character classes
function Janitor(name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory, race, spiritConcept, concept, description) {
    Character.call(this, name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory, race, spiritConcept, concept, description);
}
function Accountant(name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory, race, spiritConcept, concept, description) {
    Character.call(this, name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory, race, spiritConcept, concept, description);
}
function Dancer(name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory, race, spiritConcept, concept, description) {
    Character.call(this, name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory, race, spiritConcept, concept, description);
}
// setting prototypes
Object.setPrototypeOf(Janitor.prototype, Character.prototype);
Object.setPrototypeOf(Accountant.prototype, Character.prototype); 
Object.setPrototypeOf(Dancer.prototype, Character.prototype); 
// character object
let char1 = new Character('Somebody', 0, 10, 20, 100, 'Normal Attack', '', '', '', [], _comp_races__WEBPACK_IMPORTED_MODULE_2__.races.Human, {concept:'', description: ''});
// enemies objects
let goblin_grunt = new Monster('Goblin', 0, 10, 40, 40, '');
let goblin_fighter = new Monster('Goblin Fighter', 2, 13, 25, 25, '');
let goblin_shaman = new Monster('Goblin Shaman', 3, 16, 30, 30, '');
let goblin_chieftain = new Monster('Goblin Chieftain', 5, 17, 40, 40, '');
let wizard = new Monster('Half Dead Old Guy', -1, 10, 5, 5, '');
let imp1 = new Monster('Red Imp', 0, 5, 5, 5, '');
let imp2 = new Monster('Blue Imp', 0, 5, 5, 5, '');
let wisp1 = new Monster('Wisp', 0, 0, 10, 10);
// monsters object
let monsters = { goblin_grunt, goblin_fighter, goblin_shaman, goblin_chieftain, wizard, imp1, imp2, wisp1 }
// monster counterattack
//enemy turn logic
Monster.prototype.counterattack = function() {
    let attackRoll =  Math.floor((Math.random() * 20) + 1) + this.monsterAttackBonus;
    if (attackRoll > char1.armorClass) {
        char1.currentHP -= attackRoll - char1.armorClass;
        if (char1.currentHP < 0) {
            char1.currentHP = 0;
        }
        menuUpdater();
        let entry = document.createElement('p');
        entry.textContent = `${this.name} attacks ${char1.name}! The attack hits and deals ${attackRoll - char1.armorClass} damage!`;
        entry.setAttribute('style','color:yellow');
        log_window.appendChild(entry);
        (0,_comp_battle_functions__WEBPACK_IMPORTED_MODULE_1__.isPlayerDead)();
    } else {
        let entry = document.createElement('p');
        entry.textContent = `${this.name} attacks ${char1.name}! The attack misses!`;
        entry.setAttribute('style','color:yellow');
        log_window.appendChild(entry);
    }
}
// ---menu text updater function---
function menuUpdater() {
    char1.race = _comp_races__WEBPACK_IMPORTED_MODULE_2__.races.Human;
    let menu_window = document.querySelector('.menu');
    if (char1 instanceof Janitor) { // Wraith
        menu_window.textContent = `You are ${char1.name}. Your are a Wraith${char1.spiritConcept.description}. In life, you were a ${char1.race.name}. Your armor class is ${char1.armorClass}. Your HP is ${char1.currentHP}/${char1.maxHP}.`;
    } else if (char1 instanceof Accountant) { // Poltergeist
        menu_window.textContent = `You are ${char1.name}. Your are a Poltergeist${char1.spiritConcept.description}. In life, you were a ${char1.race.name}. Your armor class is ${char1.armorClass}. Your HP is ${char1.currentHP}/${char1.maxHP}.`;
    } else if (char1 instanceof Dancer) { // Guardian Spirit
        menu_window.textContent = `You are ${char1.name}. Your are a Guardian Spirit${char1.spiritConcept.description}. In life, you were a ${char1.race.name}. Your armor class is ${char1.armorClass}. Your HP is ${char1.currentHP}/${char1.maxHP}.`;
    } else {
        menu_window.textContent = `You are ${char1.name}. Your class is unknown. Your armor class is ${char1.armorClass}. Your HP is ${char1.currentHP}/${char1.maxHP}.`;
    }
}
// object for important roles in the plot
class NPCRole {
    constructor(name, surname, he, his, him, himself) {
        this.name = name;
        this.surname = surname;
        this.he = he;
        this.his = his;
        this.him = him;
        this.himself = himself;
    }
}
function NPCMaker(name, surname, he, his, him, himself) {
    return new NPCRole(name, surname, he, his, him, himself)
}
// export


/***/ }),

/***/ "./src/comp_races.js":
/*!***************************!*\
  !*** ./src/comp_races.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Race: () => (/* binding */ Race),
/* harmony export */   races: () => (/* binding */ races)
/* harmony export */ });
// factory function / constructor / class
class Race {
    static instances = [];
    static getAllInstances() {
        return Race.instances;
    }
    constructor(name, description, raceAttackBonus, raceHPBonus, raceArmorBonus) {
        this.name = name;
        this.description = description;
        this.raceAttackBonus = raceAttackBonus;
        this.raceHPBonus = raceHPBonus;
        this.raceArmorBonus = raceArmorBonus;
    }
}
// creation of race objects
let Human = new Race('person from an unknown land', '[initial race]', 0, 0, 0);
let Realmer = new Race('Realmer', '[stocky and stout, blah blah]', 1, 0, 0);
let Mortar = new Race('Mortar', '[stocky and stout, blah blah]', 0, 0, 1); // already conquered by the Realm nation? Second-class citizens in the Realm
let Deadlander = new Race('Deadlander', '[stocky and stout, blah blah]', 0, 15, 0);
// object of objects for exporting
let races = { Human, Realmer, Mortar, Deadlander }
// exporting the class and the object of objects


/***/ }),

/***/ "./src/comp_script.js":
/*!****************************!*\
  !*** ./src/comp_script.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scriptObjects: () => (/* binding */ scriptObjects),
/* harmony export */   storyElement: () => (/* binding */ storyElement)
/* harmony export */ });
/* harmony import */ var _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comp_objects_and_methods */ "./src/comp_objects_and_methods.js");
/* harmony import */ var _comp_inventory_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comp_inventory_system */ "./src/comp_inventory_system.js");
/* harmony import */ var _comp_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comp_assets */ "./src/comp_assets.js");



// import { storyElement } from './comp_story_objects';
class storyElement {
    constructor(type, text, modifiers, nextStoryElement) {
        this.type = type;
        this.text = text;
        this.modifiers = modifiers;
        this.nextStoryElement = nextStoryElement;
        storyElement.instances.push(this);
    }
    static instances = [];
    static getAllInstances() {
        return storyElement.instances;
    }
}
// --- script ---
// from them learn about the New Dawn Edict

// --- FIRST APPEARANCE OF THE DIVINE MESSENGER ---
let firstAppearance_book1 = new storyElement('description',
    [`[This is the end of the prototype!]`, `[Thank you for playing and let me know what you think!]`],
    undefined,
    undefined)
let firstAppearance_dreams1 = new storyElement('description',
    [`[This is the end of the prototype!]`, `[Thank you for playing and let me know what you think!]`],
    undefined,
    undefined)
let firstAppearance_tree1 = new storyElement('description',
    [`[This is the end of the prototype!]`, `[Thank you for playing and let me know what you think!]`],
    undefined,
    undefined)
let firstAppearance_shadow1 = new storyElement('description',
    [`[This is the end of the prototype!]`, `[Thank you for playing and let me know what you think!]`],
    undefined,
    undefined)
let firstAppearance_animal1 = new storyElement('description',
    [`[This is the end of the prototype!]`, `[Thank you for playing and let me know what you think!]`],
    undefined,
    undefined)
let firstAppearance_reflection1 = new storyElement('description',
    [`[This is the end of the prototype!]`, `[Thank you for playing and let me know what you think!]`],
    undefined,
    undefined)
// CHOOSE YOUR CHOSEN! CHOOSE A GHOSTLY WAY TO COMMUNICATE!
// if watch them for a while, the selection of methods of appearance is smaller
// methods: write messages in their book, appear in their dreams
let methodOfContact2 = new storyElement('choice', 
    [`You have a few ideas on how to make contact with ChosenName...`],
    [{choiceText: `You wait for ChosenName to start reading, and change the words in xis book.`, // wait until the adventurer's reading and change the words in the book
    choiceModifiers: 'firstAppearance_book',
    choiceNextStory: firstAppearance_book1},
    {choiceText: `You wait for ChosenName to fall asleep, and alter xis dreams.`, // appear or alter the adventurer's dream
    choiceModifiers: 'firstAppearance_dreams',
    choiceNextStory: firstAppearance_dreams1},
    {choiceText: `You wait till ChosenName's alone on watch, and draw the symbol of Justice on a nearby tree.`, // Symbols or Runes: Using natural materials around the camp, the spirit could arrange symbols or runes that convey a message
    choiceModifiers: 'firstAppearance_tree',
    choiceNextStory: firstAppearance_tree1},
    {choiceText: `You wait till the others are asleep, and change the shape of ChosenName's shadow caused by the campfire.`, // Animated Shadows: The spirit could animate shadows cast by objects in the environment, causing them to move in ways that convey messages or images relevant to the adventurers' journey. For example, a shadow might mimic the shape of a key to indicate that they are unlocking a great mystery or power
    choiceModifiers: 'firstAppearance_shadow',
    choiceNextStory: firstAppearance_shadow1},
    {choiceText: `You search for an animal, and give it a command to approach the camp when the others are asleep.`, // Guiding Animals: The spirit could influence the behavior of animals in the area, causing them to act in ways that lead the adventurers in the right direction or warn them of impending danger
    choiceModifiers: 'firstAppearance_animal',
    choiceNextStory: firstAppearance_animal1},
    {choiceText: `You wait for ChosenName to get a drink or polish xis armor, then alter the reflection.`, // Visions in Reflective Surfaces: The spirit could communicate through visions that appear in reflective surfaces such as still water, mirrors, or polished metal. These visions could offer glimpses of the adventurers' future or provide cryptic clues about their destiny as the Chosen one
    choiceModifiers: 'firstAppearance_reflection',
    choiceNextStory: firstAppearance_reflection1}],
    undefined)
let methodOfContact1b = new storyElement('description',
    [`After a little bit of thinking and testing, far from the camp, you determine that all you can do for now as a Spirit, is to manipulate inanimate objects.`, `Theoretically, you also feel that you might be able to give little commands to non-human animals, and, if you concentrate hard, fill dreams of slumbering folks with images.`],
    undefined,
    methodOfContact2)
let methodOfContact1 = new storyElement('description',
    [`Now, how to make contact?`, `Humans can't see, hear or touch Spirits directly.`, `Spirits are told to have magical abilities.`, `The only beings in the world to have them, actually.`, `Those would be handy right about now.`, `You try to feel what you can do.`],
    undefined,
    methodOfContact1b)
let chosePeculiar = new storyElement('description',
    [`Captain Peculiar is the obvious choice.`, `In reality, you know nothing about these people's pasts, yet you're supposed to pick which one's most suitable to be the Chosen of Justice.`, `Who's more likely to BELIEVE they're Chosen, rather.`, `Peculiar's in charge, which means she's probably accomplished the most. Right?`],
    undefined,
    methodOfContact1)
let choseSnapdragon = new storyElement('description',
    [`Captain Peculiar and Lysander are honorable, military types.`, `It will be much harder to trick them into believing that they are the chosen ones.`, `Snapdragon, who looks egotistical, handsome and popular, is the obvious choice.`, `He'll be easier to convince that he's the Chosen One.`, `Right?`],
    undefined,
    methodOfContact1)
let choseLysander = new storyElement('description',
    [`You stop yourself for a moment.`, `Not just your survival as a Spirit is at stake.`, `This choice will have consequence on the entire Fated Realm.`, `The person you appear to and try to convince that they are the Chosen of the Phoenix of Justice will become a big deal eventually.`, `Lysander, a true warrior, a dependable, no-nonsense soldier, will carry this status the best.`],
    undefined,
    methodOfContact1)
// what are the stories of people talking to Spirits? mostly spirits acting like messengers of the Suns, choosing humans as their champions
// I need to promote Justice, hence they need to see me as an authority
// I'll tell them that they are the chosen one, for them to see me as an authority
let spiritAppear3 = new storyElement('choice',
    [`Question is: who to appear to?`, `Who portrays the idea of Justice the most? Or, who would BELIEVE that they are the Chosen of Justice?`, `Who do you make the Chosen one?`],
    [{choiceText: `Captain Peculiar, the serious commander who seems to be in tune with others; needs.`,
    choiceModifiers: 'chosenPeculiar',
    choiceNextStory: chosePeculiar},
    {choiceText: `Snapdragon, his easy and mischievous smile tells you that he's too egotistical to not believe that he's the Chosen one.`,
    choiceModifiers: 'chosenSnapdragon',
    choiceNextStory: choseSnapdragon},
    {choiceText: `Lysander. A true, restless warrior with impeccable care for their gear and vigilance in their eyes.`,
    choiceModifiers: 'chosenLysander',
    choiceNextStory: choseLysander}],
    undefined) 
let spiritAppear2b = new storyElement('description',
    [`You now know what you have to do.`, `You have to make your first contact seem as legitimate as possible.`, `Make contact with one of them, and make them believe they are the Chosen one. Chosen of the Phoenix of Justice.`, `Even though you really have no idea what you're doing.`],
    undefined,
    spiritAppear3)
let spiritAppear2 = new storyElement('description',
    [`A 'Chosen warrior'.`, `That's what you need to do if you want to seem legitimate to them.`, `That's right!`, `The trio would have heard tales of Spirits too.`, `So if you pick one of them, whoever seems to most fit the idea of Justice, and slowly become their guide, their divine messenger...`, `...This person will believe that they're the Chosen of Justice.`],
    undefined,
    spiritAppear2b)
let spiritAppear1 = new storyElement('description',
    [`This is a question, actually.`, `Should you make contact with one of them, or with all of them at once?`, `Literally every tale about Spirits portrayed them as guides, divine messengers of the Phoenixes. The Gods.`, `The Spirits of myths appear to Chosen warriors, those who showed dedication to the Spirit's concept.`, `The Spirit will first show signs to the Chosen warrior, signs that the warrior is on the right path.`],
    undefined,
    spiritAppear2)
// watching them
let spiritWatch8 = new storyElement('description',
    [`All this information will surely be useful if you want your first ghostly contact with the three to be successful.`, `You're likely to have one shot at this.`, `You need to make contact with them, or one of them.`],
    undefined,
    spiritAppear1)
let spiritWatch7 = new storyElement('description',
    [`You feel yourself growing weaker. You're about to diseappear from not serving the Phoenix of Justice.`, `You did learn a bunch about the three, however.`, `Their names: Captain Peculiar, Snapdragon and Lysander.`, `Their allegiance: the Adventurer's Guild, and what they're doing here: answering the New Dawn Edict.`, `The location fits - the Forest of Mirrors, where you currently are, is to the east of the Fated Realm's main cities. Between the Fated Realm and the Dead Lands.`],
    undefined,
    spiritWatch8)
let spiritWatch6 = new storyElement('description',
    [ `Adventurer's Guild members usually travel alone. They're taught to be self-sufficient, and to pick contracts suitable for their skill levels.`, `Yet there are three of them here, and that fits of this 'New Dawn Edict' from Captain Peculiar's document.`, 'The New Dawn Edict.', `According to the document you saw in Peculiar's satchel, an open mission from the Highfate herself, for Adventurers to venture into the Dead Lands.`],
    undefined,
    spiritWatch7)
let spiritWatch5 = new storyElement('description',
    [`You know of the Adventurer's Guild.`, `You don't remember your previous life, when you've been, you assume, a human.`, `However, you notice that you do retain memories of the Fated Realm, its culture, like nicknames and organizations.`],
    undefined,
    spiritWatch6)
let spiritWatch4 = new storyElement('description',
    [`Yes, it looks like the three belong to the Adventurer's Guild.`, `The Fated Realm's Adventurer's Guild is a loose union of skilled fighters.`, `They travel the Fated Realm, usually alone, taking on contracts from people to assist with wild creatures, bandits, or stray undead that might have wandered into the Realm's eastern regions from the Dead Lands.`],
    undefined,
    spiritWatch5)
let spiritWatch3 = new storyElement('description',
    [`The last person, androgynous-looking, with shoulder length red hair, is Lysander.`, `They wear the heaviest armor and seem to be the weapons specialist of the three.`, `Lysander's armor is perfectly maintained, even in this weather. So well, in fact, that they are even wearing their official Adventurer's League badge - giving you a chance to read their full name - Lysander MacAppleby, of the Adventurer's Guild.`],
    undefined,
    spiritWatch4)
let spiritWatch2 = new storyElement('description',
    [`"Peculiar" is probably a nickname. Nicknames are common in the Fated Realm.`, `The long-haired man is Peculiar's younger brother, Snapdragon, or Snap.`, `He seems to be the most uncomfortable here in the frozen wilderness.`, `Perhaps that's judgmental, but you assume that he's happier and more resourceful in a bustling city.`],
    undefined,
    spiritWatch3)
let spiritWatch1 = new storyElement('description',
    [`You decide to be methodical in how you approach them.`, `After all, if you botch your one chance to make contact, there might not be any other people around to preach Justice to, and you will disappear.`, `You can't take that chance, so you watch the trio for another hour or so.`, `You learn that the one you assumed to be in charge is Captain Peculiar. A serious woman with olive skin and dark hair who's always paying attention to her two companions.`],
    undefined,
    spiritWatch2)
// choice: watch them for a while to make a better selection but become weaker, or choose now
let campVibes6 = new storyElement('choice',
    [`You feel your vision getting even blurrier. Floating is harder and harder with each passing minute.`, `You need to make contact, to promote the idea of Justice to them, or to one of them, or you'll disappear.`, `You're not sure what happens to Spirits if they disappear without performing their function.`, `You have to make a decision. Do you try to use your abilities to make contact with one of them? Or do you wait, and keep watching?`],
    [{choiceText: `I will wait, and keep watching. I need to gather more information about the three before I can effectively communicate.`,
    choiceModifiers: null,
    choiceNextStory: spiritWatch1},
    {choiceText: `I need to make contact. I can feel that I am disappearing and I'll only get weaker with each wasted minute.`,
    choiceModifiers: null,
    choiceNextStory: spiritAppear1}],
    undefined) 
// VIBES OF THE CAMP
let campVibes5 = new storyElement('description',
    [`"Reading the edict again, sister?" a voice says as the second man, the one with the long hair and the easy smile, scoots over closer to the commander.`, `"Do you need anything, Snap?" the woman responds, ignoring his comment. There's a hint of concern in her voice.`, `"Nah, I'm fine. As fine as I can be," Snap chuckles and the short exchange is over."`],
    undefined,
    campVibes6)
let campVibes4 = new storyElement('description',
    [`The commander puts back the document, but you did manage to read a little.`, `The document described something called the New Dawn Edict.`, `An open call, a mission, from the Highfate for any adventurer to answer.`, `Before the commander put away the document, you managed to see that the mission of the New Dawn Edict involves traveling to the Dead Lands - land of undead and nomadic necromancers beyond the eastern border of the Fated Realm.`],
    undefined,
    campVibes5)
let campVibes3 = new storyElement('description',
    [`Luckily for you, the commander decides to retrieve the piece of paper, and starts to read it.`, `You quickly float over behind her shoulder, reading the paper to try to find out more about the three.`, `Floating closer to the commander, you get a better look at her face.`, `She's in her early 40's. Olive skin, dark hair, solemn, exhausted, in-charge expression. Cigarette butts in a small garbage sack near her.`],
    undefined,
    campVibes4)
let campVibes2 = new storyElement('description',
    [`The trio keep sitting near the fire.`, `You notice that the first woman, the commander, has a piece of paper sticking out of her rucksack.`, `The piece of paper bears the seal of the Highfate, the leader and protector of the Fated Realms.`, `Whoever, these three are, they're not only armed, but on official business, it seems.`],
    undefined,
    campVibes3)
let campVibes1 = new storyElement('description',
    [`You linger near their camp, watching the trio from different angles.`, `The reality of your new condition is slowly setting in. Like before, the trio don't hear you, don't see you, and can't touch you.`, `You push these thoughts away. You're alive. In a new form. With a new mission of Justice.`, `But alive. And to stay alive, you need these people. You need them to embrace Justice.`, `The mood in the camp is solemn, but determined. Perhaps this is to be expected, considering the surroundings and the weather.`, `The Forest of Mirrors is an unforgiving place indeed.`],
    undefined,
    campVibes2)
// DESCRIPTIONS OF THE THREE
let lysanderDescription = new storyElement('description',
    [`The last person around the campfire is a figure with shoulder-length red hair.`, `They look like the youngest of the trio, perhaps in their late 20's.`, `Despite that, they carry themselves with the poise of a seasoned warrior. They appear incredibly vigilant, as if awaiting a command.`],
    undefined,
    campVibes1)
let snapDescription = new storyElement('description',
    [`To her right is a man with long hair framing his face. He seems to be in his early 30's.`, `His demeanor is charming, his smile easy, inviting with a hint of mischief.`, `There's a sense of restlessness about him, as if he's constantly seeking something just out of reach.`],
    undefined,
    lysanderDescription)
let peculiarDescription = new storyElement('description',
    [`Despite the biting cold of the blizzard, she sits with a sense of control, her posture rigid.`, `She seems to be in her early 40's. Her face bears the marks of hardship, with lines etched deeply around her eyes and mouth.`, `Two scimitars and a musket are resting next to her. Judging by her outfit, she seems to be the one in charge.`, `Despite her outward appearance of stoicism, you sense a deep-seated fatigue, as if she's tired of always being the one in charge.`],
    undefined,
    snapDescription)
let approachCampKnow4 = new storyElement('description',
    [`The three people are armed - you see muskets and swords next to them. They look like soldiers, mercenaries, or guards of some sort.`, `It's kind of calming - to finally see some humans.`, `Despite the fact that it's too late for you.`, `No, stop it. It's not too late. You've died, but you're not dead. You're a Spirit. And you can survive.`, `The first woman huddles by the campfire, the olive skin of her face glowing softly in the firelight.`],
    undefined,
    peculiarDescription)
// FIND THE CAMP (DON'T KNOW)
let dontKnowRealize7 = new storyElement('description',
    [`Then you remember that Spirits are the only beings in the world who have magical abilities. No human or animal possesses them.`, `To promote their concepts, Spirits have the abilities to affect the material world in ghostly ways. The more powerful the Spirit, the more substantial the effects.`, `You can't touch or talk to these people, but you have to start somewhere. Start promoting Justice, or you'll disappear.`, `First of all, who are these people?`],
    undefined,
    approachCampKnow4)
let dontKnowRealize6 = new storyElement('description',
    [`Well, there are people right here.`, `To keep going, you tell yourself - "I'm not dead".`, `"I died, but I'm not dead."`, `Whoever you were in life, you did enough for the Phoenix of Justice to make you a Spirit of Justice.`, `You're not dead. You're able to think and to see.`, `You exist. In a different form now. And you can still save yourself, save your new form.`, `You just have to do your job and promote Justice.`, `You're not sure how you're supposed to do it, considering that these people can't hear you.`],
    undefined,
    dontKnowRealize7)
let dontKnowRealize5 = new storyElement('description',
    [`Right. So you must be a Spirit of a Phoenix of Justice. Of a Sun. Of the God of Justice.`, `It's pretty much common knowledge that Spirits exist to further promote the concept, or portfolio, of their Phoenix.`, `If they fail to promote their concept, the Spirit disappears. Dies, forever`, `Oh, Gods, is that why you've been feeling weaker and weaker!?`, `You rise to your 'feet', in panic again. Without promoting the idea of Justice to somebody, you'll disappear. And soon, your body feels it.`],
    undefined,
    dontKnowRealize6)
let dontKnowRealize4 = new storyElement('choice',
    [`"My Phoenix". That's right.`,`You're a Spirit, an Envoy of a Phoenix.`, `It means that in life, you must have worshipped one of the 20 Suns, or Phoenixes, how they're also called. Done enough, in fact, to have been made a Spirit of that Sun.`, `Why is it so hard to recall the details of your life?`, `You concentrate again, sitting there in the snow.`, `Snowflakes fall right through you. How did you not notice that? Perhaps from the panic, and from your rabid search for help.`, `'Which Sun did I worship in life?' You think.`],
    [{choiceText: `The Phoenix of Compassion.`,
    choiceModifiers: 'compassionSpirit',
    choiceNextStory: dontKnowRealize5},
    {choiceText: `The Phoenix of Justice.`,
    choiceModifiers: 'justiceSpirit',
    choiceNextStory: dontKnowRealize5},
    {choiceText: `The Phoenix of Freedom.`,
    choiceModifiers: 'freedomSpirit',
    choiceNextStory: dontKnowRealize5},
    {choiceText: `The Phoenix of Mastery.`,
    choiceModifiers: 'masterySpirit',
    choiceNextStory: dontKnowRealize5},
    {choiceText: `The Phoenix of Wisdom.`,
    choiceModifiers: 'wisdomSpirit',
    choiceNextStory: dontKnowRealize5}],
    undefined) 
let dontKnowRealize3 = new storyElement('choice',
    [`You don't know enough about them. You wonder what kind of Spirit you are.`, `You close your non-existent eyes. The answer is within you, you just have to feel it.`],
    [{choiceText: 'I am a Wraith, a spirit that brings punishment to those who wrong my Phoenix.',
    choiceModifiers: 'classWraith',
    choiceNextStory: dontKnowRealize4},
    {choiceText: 'I am a Poltergeist. Watcher, seer, subtle mastermind in the service of my Phoenix.',
    choiceModifiers: 'classPoltergeist',
    choiceNextStory: dontKnowRealize4},
    {choiceText: 'I am a Guardian Spirit, I exist to guide and protect those who follow my Phoenix.',
    choiceModifiers: 'classGuardianSpirit',
    choiceNextStory: dontKnowRealize4}],
    undefined)
let dontKnowRealize2 = new storyElement('description',
    [`You must be a Spirit.`, `People who did a lot in the service of a Phoenix reincarnate into Spirits when they die.`, `There are different kinds of Spirits, you're pretty sure.`],
    undefined,
    dontKnowRealize3)
let dontKnowRealize1 = new storyElement('description',
    [`You sit there for a moment. You stare at the three, then you stare at their fire, mind completely blank.`, `You're dead.`, `You're conscious, however. You have to be a Spirit, right?`, `You concentrate - what do you know of Spirits?`, `When people die, they reincarnate into animals. When animals die, they reincarnate into people.`, `However, if the dying person had done enough in the worship of one of the 20 Suns, they reincarnate into a Spirit.`],
    undefined,
    dontKnowRealize2)
let dontKnowWatch5 = new storyElement('description',
    [`A little while later, you are sitting not far from the three people's camp, just behind their backs.`, `Close enough to see the fire, yet you still don't feel it's warmth.`, `The embrace of death is too cold.`, `You tried calling out to them, or touching them. They can't see or hear you.`, `By now, your reality is irrefutable.`, `You didn't wake up in the Forest of Mirrors.`, `You died here.`],
    undefined,
    dontKnowRealize1)
let dontKnowWatch4 = new storyElement('description',
    [`Your mind races, panicking. There are people right here! People who might help! You made it, you saved yourself! So what the hell is wrong?`, `Your mind slowly accepts what it has been trying to ignore for all this time.`, `You pass through solid objects.`, `You don't feel the cold.`, `You don't remember anything about your life.`],
    undefined,
    dontKnowWatch5)
let dontKnowWatch3 = new storyElement('description',
    [`You lean on the tree and squint, trying to make anything out, when something unexpected happens.`, `As you go to lean on the tree, your hand passes right through it, disappearing into the bark.`, `You instinctively leap back. You approach the tree again, trying to touch it once more.`, `The result is the same. Your hand passes right through the tree.`, `What the hell is going on?`],
    undefined,
    dontKnowWatch4)
let dontKnowWatch2 = new storyElement('description',
    [`You can see muskets and scimitars lying next to the three huddled figures.`, `They are armed. Mercenaries? Soldiers? Robbers indeed?`, `Your vision is really blurry now. You're not sure why.`, `The blizzard doesn't help either. And although you're hiding behind a tree only a few dozen meters away from the three figures, you still can't make out much more than that.`],
    undefined,
    dontKnowWatch3)
let dontKnowWatch1 = new storyElement('description',
    [`You slow down. They could be robbers on the run from one of the Fated Realm's cities, or cultists of one of evil Suns.`, `You stop approaching them and dash behind a nearby tree.`, `You feel weaker with every passing minute. Nevertheless, you decide to watch them for a little while.`, `To make sure they won't harm you in your desperate state.`],
    undefined,
    dontKnowWatch2)
let dontKnowRun6 = new storyElement('description',
    [`A little while later, you are sitting not far from the three people's camp, just behind their backs.`, `Close enough to see the fire, yet you still don't feel it's warmth.`, `The embrace of death is too cold.`, `You tried touching the trees, or even the fire. Nothing. You pass right through.`, `By now, your reality is irrefutable.`, `You didn't wake up in the Forest of Mirrors.`, `You died here.`],
    undefined,
    dontKnowRealize1)
let dontKnowRun5 = new storyElement('description',
    [`You slowly walk up to one of the people, and try to tap on their shoulder.`, `You reach out towards their coat with your hand.`, `When you try to tap their shoulder, your hand passes right through their body.`, `You retract your hand and step back, horrified.`, `You try again, and the result is the same. Your hand passes right through them.`],
    undefined,
    dontKnowRun6)
let dontKnowRun4 = new storyElement('description',
    [`Your mind races, panicking. There are people right here! People who can help! You made it, you saved yourself! So what the hell is wrong?`, `Your mind slowly accepts what it has been trying to ignore for all this time.`, `No vibration when you talk.`, `You don't feel the cold.`, `You don't remember anything about your life.`],
    undefined,
    dontKnowRun5)
let dontKnowRun3 = new storyElement('description',
    [`You can't even hear yourself when you yell for them. So perhaps the blizzard is drowning out your voice?`, `Or maybe they're also injured and in need of help?`, `"Hello?" you scream again. This time, you notice it.`, `You don't even hear an internal vibration when you scream.`],
    undefined,
    dontKnowRun4)
let dontKnowRun2 = new storyElement('description',
    [`You run right up to the three figures huddled around the campfire.`, `You stop within 20 meters of them.`, `"I need help!", you yell out.`, `They don't react.`, `You walk closer to them. "Good people! Please help me! I'm lost and I'm freezing!" you continue.`, `No reaction.`],
    undefined,
    dontKnowRun3)
let dontKnowRun1 = new storyElement('description',
    [`You need the help. You're desperate and you're willing to take a chance on them.`, `Also, would it make sense for bandits to be camping in the middle of the impassable Forest of Mirrors?`, `You'd expect highway robbers to be camped around the main roads of the Fated Realm.`],
    undefined,
    dontKnowRun2)
let approachCampDontKnow3 = new storyElement('description',
    [`You don't even feel fatigue as you run. Probably the adrenaline. Survival instinct.`, `As you get closer to their camp, you see three figures, huddled around the fire.`, `You stop when you get within earshot of them.`, `How do you want to approach this?`],
    {choiceText: `Watch them from a distance. You might be freezing to death and desperate for help, but they might be bandits.`,
    choiceModifiers: null,
    choiceNextStory: dontKnowWatch1},
    {choiceText: `Run towards them, screaming for help. You're dying and you need warmth, food, anything they can spare.`,
    choiceModifiers: null,
    choiceNextStory: dontKnowRun1},
    undefined)
let approachCampDontKnow2 = new storyElement('description',
    [`No longer being on top of a hill, and with the blizzard roaring, you lose sight of the smoke.`, `You don't stop running, you can only hope that you've kept the right direction.`, `Eventually, between the trees, you see a flickering red light.`, `Someone's campfire is a few hundred meters away from you.`, `You're saved!`],
    undefined,
    approachCampDontKnow3)
let approachCampDontKnow1 = new storyElement('description',
    [`You run down the hill.`, `You run through the Forest of Mirrors in the direction of where you've seen the smoke.`, `You run for what feels like an hour.`],
    undefined,
    approachCampDontKnow2)
// FIND THE CAMP (KNOW THAT YOU'RE A SPIRIT)
let approachCampKnow3 = new storyElement('description',
    [`Knowing that they cannot see you, you float closer to them and take a closer look.`, `The first person is a woman dressed in a long, thick, dark red coat. You no longer care about the cold, but it's an understandable choice for her. Could the weather have killed you? You shake away these thoughts. It's pointless to speculate for now.`],
    undefined,
    approachCampKnow4)
let approachCampKnow2 = new storyElement('description',
    [`You float closer. It's common knowledge in the Fated Realm that humans cannot see Spirits physically.`, `To promote their concepts, Spirits have the abilities to affect the material world in ghostly ways. The more powerful the Spirit, the more substantial the effects.`, `For now, you float closer to the campfire, seeing three people huddled around the bright flame.`],
    undefined,
    approachCampKnow3)
let approachCampKnow1 = new storyElement('description',
    [`You float for what feels like hours.`, `Yes. Float. Now that you understand your situation, you realize that you don't have to move your feet to move. Perks of being a Spirit.`, `Occasionally you open your eyes, occasionally you close them.`, `It doesn't look like you can see through solid matter, so all you see is the snowy Forest of Mirrors.`, `Eventually, you see a light. This one's definitely a campfire.`],
    undefined,
    approachCampKnow2)
// THE FOREST OF MIRRORS
let endForestConcentrate4b = new storyElement('description',
    [`To keep going, you tell yourself - "I'm not dead".`, `"I died, but I'm not dead."`, `Whoever you were in life, you did enough for the Phoenix of Justice to make you a Spirit of Justice.`, `You're not dead. You're able to think and to see.`, `You exist. In a different form now. And you can still save yourself, save your new form.`, `You just have to do your job and promote Justice.`, `You remember stories that Spirits can sense life. You close your eyes and try to let your feelings guide you to the nearest people.`],
    undefined,
    approachCampKnow1)
let endForestConcentrate4 = new storyElement('description',
    [`Right. So you must be a Spirit of a Phoenix of Justice. Of a Sun. Of the God of Justice.`, `It's pretty much common knowledge that Spirits exist to further promote the concept, or portfolio, of their Phoenix.`, `If they fail to promote their concept, the Spirit disappears. Dies, forever`, `Oh, Gods, is that why you've been feeling weaker and weaker!?`, `You rise to your 'feet', in panic again. You have to find someone to promote your concept, the idea of Justice, to. Without people to promote Justice to, you'll disappear. And soon, your body feels it.`],
    undefined,
    endForestConcentrate4b)
let endForestConcentrate3c = new storyElement('choice',
    [`"My Phoenix". That's right.`,`You're a Spirit, an Envoy of a Phoenix.`, `It means that in life, you must have worshipped one of the 20 Suns, or Phoenixes, how they're also called. Done enough, in fact, to have been made a Spirit of that Sun.`, `Why is it so hard to recall the details of your life?`, `You concentrate again, sitting there in the snow.`, `Snowflakes fall right through you. How did you not notice that? Perhaps from the panic, and from your rabid search for help.`, `'Which Sun did I worship in life? You think.'`],
    [{choiceText: `The Phoenix of Compassion.`,
    choiceModifiers: 'compassionSpirit',
    choiceNextStory: endForestConcentrate4},
    {choiceText: `The Phoenix of Justice.`,
    choiceModifiers: 'justiceSpirit',
    choiceNextStory: endForestConcentrate4},
    {choiceText: `The Phoenix of Freedom.`,
    choiceModifiers: 'freedomSpirit',
    choiceNextStory: endForestConcentrate4},
    {choiceText: `The Phoenix of Mastery.`,
    choiceModifiers: 'masterySpirit',
    choiceNextStory: endForestConcentrate4},
    {choiceText: `The Phoenix of Wisdom.`,
    choiceModifiers: 'wisdomSpirit',
    choiceNextStory: endForestConcentrate4}],
    undefined) 
let endForestConcentrate3b = new storyElement('choice',
    [`You don't know enough about them. You wonder what kind of Spirit you are.`, `You close your non-existent eyes. The answer is within you, you just have to feel it.`],
    [{choiceText: 'I am a Wraith, a spirit that brings punishment to those who wrong my Phoenix.',
    choiceModifiers: 'classWraith',
    choiceNextStory: endForestConcentrate3c},
    {choiceText: 'I am a Poltergeist. Watcher, seer, subtle mastermind in the service of my Phoenix.',
    choiceModifiers: 'classPoltergeist',
    choiceNextStory: endForestConcentrate3c},
    {choiceText: 'I am a Guardian Spirit, I exist to guide and protect those who follow my Phoenix.',
    choiceModifiers: 'classGuardianSpirit',
    choiceNextStory: endForestConcentrate3c}],
    undefined)
let endForestConcentrate3a = new storyElement('description',
    [`You must be a Spirit.`, `People who did a lot in the service of a Phoenix reincarnate into Spirits when they die.`, `There are different kinds of Spirits, you're pretty sure.`],
    undefined,
    endForestConcentrate3b)
let endForestConcentrate2 = new storyElement('description',
    [`You sit there for a moment, mind completely blank.`, `You're dead.`, `You're conscious, however. You have to be a Spirit, right?`, `You concentrate - what do you know of Spirits?`, `When people die, they reincarnate into animals. When animals die, they reincarnate into people.`, `However, if the dying person had done enough in the worship of one of the 20 Suns, they reincarnate into a Spirit.`],
    undefined,
    endForestConcentrate3a)
let endForestConcentrate1 = new storyElement('description',
    [`You fall to the snowy ground of the forest, sitting with your legs outstretched in front of you.`, `Your mind races. Your body still can't feel the cold.`, `You're really dead.`],
    'FoMspiritKnow',
    endForestConcentrate2)
let endForestConcentrate1preB = new storyElement('description',
    [`You bend over and slowly reach with your hand towards the snow.`, `Your hand passes right through the snow.`, `You gulp, panic and realization starting to settle in.`, `Your hand passes right through the snow. You cannot move it.`, `You didn't wake up here in the Forest of Mirrors.`, `You died here.`],
    undefined,
    endForestConcentrate1)
let endForestConcentrate1pre = new storyElement('description',
    [`You try to remember your life, but nothing comes to you.`, `You focus on your condition. You can't feel the cold.`, `You look around through the blizzard. You notice something unusual.`, `You don't seem to leave footprints in the snow.`, `The blizzard can't fill in the indentations in the snow this fast, can it?`],
    undefined,
    endForestConcentrate1preB)
let endForestExploreScream3 = new storyElement('description',
    [`You try to scream, again and again. No sound comes out.`, `You stomp in the snow, but it doesn't move.`, `Finally, you approach a tree and reach out to touch its bark.`, `You gulp, panic and realization starting to settle in, as you slowly reach with your hand to the tree.`, `Your hand passes right through the tree, disappearing into the bark.`, `You didn't wake up here in the Forest of Mirrors. You died here, and now you're a Spirit.`],
    undefined,
    endForestConcentrate1)
let endForestExploreScream2 = new storyElement('description',
    [`You stop. What the hell is going on?`, `You've been feeling off ever since you woke up.`, `Now, you're starting to suspect that it's not just the cold and frostbite.`],
    undefined,
    endForestExploreScream3)
let endForestExploreScream1 = new storyElement('description',
    [`'A-a-anybody!'`, `You yell, but the only sound that you hear is the blizzard.`, `'Somebody help me!'`, `You scream again. This time you notice that you don't even feel the vibration in your throat.`],
    'FoMspiritKnow',
    endForestExploreScream2)
let endForestExploreNoScream3 = new storyElement('description',
    [`You look around from the top of the hill.`, `In the distance, you spot a faint glimpse of smoke.`, `Now this is definitely fire of some kind.`, `And hope for you.`, `You rush down the hill towards the fire.`],
    undefined,
    approachCampDontKnow1)
let endForestExploreNoScream2 = new storyElement('description',
    [`You keep running through the forest, and manage to reach the top of the hill.`, `You're not dead yet, despite being in the frozen Forest of Mirrors for at least an hour or two by now.`, `You're not even out of breath from springing up the hill.`, `No time to think about it now.`],
    undefined,
    endForestExploreNoScream3)
let endForestExploreNoScream1 = new storyElement('description',
    [`No screaming.`, `You keep running forward.`, `You sprint through the trees for what feels like an hour.`, `Finally, you manage to spot a big hill in the forest. It'll give you a vantage point, so you spring in its direction.`],
    'FoMnoSpiritKnow',
    endForestExploreNoScream2)
let endForestExplore1 = new storyElement('choice',
    [`You breathe, trying to keep your warmth.`, `Blurry vision, can't feel your legs - you might be close to death. You need help.`, `The Forest of Mirrors is enormous, it takes up a big part of the eastern side of the Fated Realm.`, `There must be somebody traversing the Forest that could help you.`, `Should you scream out for help?`],
    [{choiceText: `Yes. It'll be hard for anyone to hear you through the blizzard, but you're desperate.`,
    choiceModifiers: 'FoMscream',
    choiceNextStory: endForestExploreScream1},
    {choiceText: `No screaming. The only attention it'll attract are tuskwolves.`,
    choiceModifiers: 'FoMnoScream',
    choiceNextStory: endForestExploreNoScream1}],
    undefined)
let endForest5 = new storyElement('choice',
    [` Your vision is getting blurrier.`, `You need to keep moving. What to do now?`],
    [{choiceText: 'Keep moving, keep exploring the forest.',
    choiceModifiers: 'FoMendExplore',
    choiceNextStory: endForestExplore1},
    {choiceText: 'Stop and try to concentrate on your condition.',
    choiceModifiers: 'FoMendConcentrate',
    choiceNextStory: endForestConcentrate1pre}],
    undefined)
let endForest4 = new storyElement('consequence',
    [{dependency: 'FoMsawWisp', consequenceText: [`You remember: "Spirits cannot touch physical objects."`, `That creature in the woods - it must have been a Spirit.`, `It could touch you.`, `Could you be... dead?`, `Your thoughts are interrupted as your body is feeling weaker.`]},
    {dependency: 'FoMnotSeenWisp', consequenceText: [`Maybe you should have asked the campfire people for help. For food. Warmth. Anything.`, `You feel yourself getting weaker.`]},],
    undefined,
    endForest5)
let endForest3 = new storyElement('consequence',
    [{dependency: 'FoMsearchedBody', consequenceText: [`You concentrate, wincing. Trying to think back to your education. What do you know of Spirits?`, `Let's see... Spirits are the only creatures with magical abilities.`, `Spirits also... cannot touch physical objects.`]},
    {dependency: 'FoMleftBody', consequenceText: [`You should be dead by now, but you don't seem to feel the cold.`, `You can feel panic and frustration growing.`]},],
    undefined,
    endForest4)
let endForest2 = new storyElement('consequence',
    [{dependency: 'FoMsearchedBody', consequenceText: [`Stop. Recite the facts.`, `You woke up in the Forest of Mirrors.`, `You don't seem to feel the cold.`, `Your hand went right through that corpse.`, `Something is off here.`, `You have a theory.`]},
    {dependency: 'FoMleftBody', consequenceText: [`Stop. Recite the facts.`, `You woke up in the Forest of Mirrors.`]}],
    undefined,
    endForest3)
let endForest1 = new storyElement('endExploration',
    [`You continue trudging through the snowy woods, looking for any sort of help.`, `You can't feel weaker with each step, but you still don't feel the cold.`, `You stop and think.`],
    {unlocked: false},
    endForest2)
let wispLeave = new storyElement('description',
    [`You turn around step away from the light.`, `If it's a campfire, you can't be sure that these people won't be hostile.`, `And, with the blizzard and your blurred vision - from your injuries? - you can't even be sure that it's a campfire.`],
    'explorationEvent',
    undefined)
let wispApproach5 = new storyElement('description',
    [`That must have been... a Spirit, right? You do know of Spirits.`, `When ordinary people die, they reincarnate into animals.`, `If a person has done enough in the worship of one of the 20 Suns, they reincarnate into a Spirit.`, `Snowfall is getting worse. Time to move.`],
    'explorationEvent',
    undefined)
let wispApproach4 = new storyElement('item',
    [`The wisp ball flies towards you again. This time you're ready and you land a strike in the middle of its glowing body.`, `With a fizzing sound, the wisp explodes into tiny specks of light.`, `You see one of the bigger specks, a fist-sized ball of light, has landed under your feet.`, `You reach into the snow and pick it up. It emits a warming aura.`, `[Click the Inventory button to equip items]`],
    _comp_inventory_system__WEBPACK_IMPORTED_MODULE_1__.allItems.wispBall,
    wispApproach5)
let wispApproach3 = new storyElement('battle',
    [`You turn around, trying to keep it in sight.`, `It seems to be a glowing wisp of light.`, `It seems to be getting ready to swoop in towards you again.`, `It's certainly no campfire, and it doesn't seem to be friendly. You need answers, but survival comes first. You're not sure you can take many more of this "wisp's" fly-bys. You have nothing but your fists to defend yourself with.`],
    [_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_0__.monsters.wisp1],
    wispApproach4)
let wispApproach2 = new storyElement('description',
    [`The blizzard, the trees and the snow don't help.`, `As you step closer, the light suddenly moves. It flies a little upwards, and then moves closer towards you.`, `The light speeds up, flying towards you, until it flies right through you, painfully burning your flesh.`],
    'explorationEvent',
    wispApproach3)
let wispApproach1 = new storyElement('description',
    [`You can't help but feel weaker. The cold must be getting to you.`, `You need help. You decide to walk closer to the light.`, `You step slowly, trying to see what the light is.`],
    'explorationEvent',
    wispApproach2)
let wisp2 = new storyElement('choice',
    [`Your vision is so blurry that you can't quite make out what the light is.`, `Perhaps, campfire? Perhaps someone is in this forest after all.`, `It could also be bandits. Poachers. Worshihppers of evil Suns, ready to take advantage of a dying traveler.`, `Approach the light source?`],
    [{choiceText: 'Slowly approach the light.',
    choiceModifiers: 'FoMsawWisp',
    choiceNextStory: wispApproach1},
    {choiceText: 'Turn around and walk away form the light.',
    choiceModifiers: 'FoMnotSeenWisp',
    choiceNextStory: wispLeave}],
    undefined)
let wisp1 = new storyElement('randomEncounter',
    [`You continue trudging through the snow.`, `You don't seem to feel your feet. You hope it's not due to frostbite.`, `As you lift your head to look forward, placing your hand against your forehead to block off the wind, you see a light between the trees.`],
    {hasPlayerSeenMe: false},
    wisp2)
let corpseLeave = new storyElement('description',
    [`You turn around, not wishing to disturb the corpse.`, `You'll make it out of here.`, `Not this way, but you will.`, `As you walk away from the body, you can't help but feel weaker. Probably frostbite. Right?`],
    'explorationEvent',
    ['stats', 'benevolence', 10])
let corpseSearch2 = new storyElement('description',
    [`Your hand moves right through the snow.`, `You try again. You can't move the snow. Your hand moves right through the corpse too.`, `You turn around.`, `At first, you thought that the blizzard filled in any tracks in the snow. Now that you're looking - it's not that.`, `You're not leaving any footprints in the snow at all.`, `What the hell is going on?`],
    'explorationEvent',
    ['stats', 'evil', 10])
let corpseSearch1 = new storyElement('description',
    [`Alone, with no belongings, in the middle of winter in the Forest of Mirrors?`, `Yeah, you'll take anything, or it'll be very easy to end up like this person.`, `You lower yourself towards the body, trying to remove some snow from the body.`],
    'explorationEvent',
    corpseSearch2)
let corpse2 = new storyElement('choice',
    [`Looting would be a new low.`, `Although...`, `You're in no condition to be picky.`, `Search the body?`],
    [{choiceText: 'Search the body.',
    choiceModifiers: 'FoMsearchedBody',
    choiceNextStory: corpseSearch1},
    {choiceText: 'Leave the body alone.',
    choiceModifiers: 'FoMleftBody',
    choiceNextStory: corpseLeave}],
    'explorationEvent')
let corpse1 = new storyElement('randomEncounter',
    ['You continue moving through the Forest of Mirrors, when you see a mound in the snow.', 'The snow seems to be covering something.', 'Your suspicions are true. It is a lonely body, in the frosted forest, covered in snow.'],
    {hasPlayerSeenMe: false},
    corpse2)
let tuskwolf3 = new storyElement('description',
    [`Huh? Is it blind? Cursed? Perhaps it's a Spirit's illusion? Or maybe you're hallucinating.`, `Whatever it is, the tuskwolf at least seems very real. You're not in any condition to investigate.`, `You won't get another chance. You quickly back away from the tuskwolf while it's confused or distracted.`],
    'explorationEvent',
    undefined)
let tuskwolf2 = new storyElement('description',
    [`The growling seems to be close. Maybe 15 meters behind you.`, `The tuskwolf doesn't seem to be striking though. Odd.`, `You slowly turn around.`, `A big wolf of silver fur stands not far from where you are, two 30 cms long tusks at the ready.`, 'It spins around in place, sniffing and searching for something. It ignores you completely.'],
    'explorationEvent',
    tuskwolf3)
let tuskwolf1 = new storyElement('randomEncounter',
    ['As you run through the forest, your thoughts start gather.', 'You know the Fated Realm quite well.', 'Judging by the frosted peaks in the distance, this must be the Forest of Mirrors. Named after the clear white snow that lies here for 16 out of the 20 months.', 'Your thoughts pause as you hear growling behind you. A tuskwolf. Fuck.'],
    {hasPlayerSeenMe: false},
    tuskwolf2)
// WAKE UP SEQUENCE
let wakeUpMove = new storyElement('exploration',
    [`Your body moves quickly, but the feeling of numbness all over is overwhelming.`, `Must be the frostbite. If you're lucky, you won't lose any fingers or toes.`, `In any case, it's time to move, or you'll lose your life as well.`, `[USE WASD or click the map to move.]`],
    [{encounterStoryElement: wisp1, tileNumber: '#tile30', icon: _comp_assets__WEBPACK_IMPORTED_MODULE_2__.icons.iconTree},
    {encounterStoryElement: corpse1, tileNumber: '#tile50', icon: _comp_assets__WEBPACK_IMPORTED_MODULE_2__.icons.iconTree2},
    {encounterStoryElement: tuskwolf1, tileNumber: '#tile70', icon: _comp_assets__WEBPACK_IMPORTED_MODULE_2__.icons.iconTree3},
    {encounterStoryElement: endForest1, tileNumber: '#tile3', icon: _comp_assets__WEBPACK_IMPORTED_MODULE_2__.icons.iconPerson}],
    undefined)
let wakeUpLie2 = new storyElement('description',
    [`Your eyes open again. You feel noticeably weaker. Your vision seems blurry.`, `The clear evening sky has changed into a navy blue dusk.`, 'You almost let your eyes close again, when you hear the howl of a tuskwolf. Driven by pure instinct, you get to your knees, then to your feet, and start moving.', `Everyone has to go one day, but tuskwolf food isn't your way.`],
    undefined,
    wakeUpMove)
let wakeUpLie1 = new storyElement('description',
    [`You lie on your belly in the snow, feeling powerless to move.`, `You almost don't feel the cold. You wonder if it means that you're almost dead already. How did you get here? Were you robbed?`, 'You close your eyes again. Maybe this problem will disappear like a bad dream.'],
    undefined,
    wakeUpLie2)
let wakeUpRise2 = new storyElement('description',
    ['You get to your feet. Again, with surprising ease.', 'You must not have been out for long. You feel lucky. Frost takes lives quickly.', 'You look back down. The wind has already done its job - there is almost no indentation in the snow from your body already.', `You don't feel particularly cold yet, but you rub your hands for warmth nevertheless.`],
    ['gold', 200],
    wakeUpMove)
let wakeUpRise1 = new storyElement('description',
    ['You seem to be lying on your belly.', 'You plant your hands in the snow, trying to rise to your knees.', 'You rise to your knees with surprising ease.', `You look around. Your satchel doesn't seem to be with you. How did you get here? Were you robbed?`],
    undefined,
    wakeUpRise2)
let wakeUp1 = new storyElement('choice',
    ['You open your eyes to see pure white around you.', 'You lift your head. Treetops covered in sparkling white snow. Clear evening sky. Sounds of the wind.'],
    [{choiceText: 'Try to get up.',
    choiceModifiers: 'wakeUpDay',
    choiceNextStory: wakeUpRise1},
    {choiceText: 'Continue lying in the snow.',
    choiceModifiers: 'wakeUpNight',
    choiceNextStory: wakeUpLie1}],
    undefined)
// prologue
let prologue4 = new storyElement('description',
    [`You lost.`],
    undefined,
    wakeUp1)
let prologue3 = new storyElement('description',
    [`You won.`],
    undefined,
    wakeUp1)
let prologue2 = new storyElement('falsecubes',
    [`Mikey: "Hi, my name's Mikey."`, `Mikey: "Let's play Falsecubes!"`],
    {opponentName: 'Mikey',
    opponentLines: {
        openLine: `Come on, let's play`,
        bidLine: `Luck is on my side today`,
        bluffLine: `I have good dice today, kid`,
        accuseLine: `Yeah, I don't think so`,
        winLine: `Gotcha, kid`,
        loseLine: `Darn. You got lucky, pal`},
    consequences: {
        win: 'prologueFalsecubesWin',
        lose: 'prologueFalsecubesLose'},
    },
    {win: prologue3, lose: prologue4})
let prologue1 = new storyElement('description',
    [`Something something.`, `Ooh, something.`, `Let's play Falsecubes.`],
    undefined,
    prologue2)
// export
let scriptObjects = { prologue1 };


/***/ }),

/***/ "./src/comp_separator.js":
/*!*******************************!*\
  !*** ./src/comp_separator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ separator)
/* harmony export */ });
function separator(storyElement, playerConsequencesArray, storyTellerFunction) {
    let correctNextStoryElement;
    for (let i = 0; i < storyElement.text.length; i++) {
        if (playerConsequencesArray.includes(storyElement.text[i].dependency)) {
            correctNextStoryElement = i;
        }
    }
    if (correctNextStoryElement !== null) {
        storyTellerFunction(storyElement.text[correctNextStoryElement].nextStoryElement);
    }
}

/***/ }),

/***/ "./src/comp_story_functions.js":
/*!*************************************!*\
  !*** ./src/comp_story_functions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comp_separator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comp_separator */ "./src/comp_separator.js");
/* harmony import */ var _comp_dice_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comp_dice_game */ "./src/comp_dice_game.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _comp_hud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comp_hud */ "./src/comp_hud.js");
/* harmony import */ var _comp_battle_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comp_battle_functions */ "./src/comp_battle_functions.js");
/* harmony import */ var _comp_inventory_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comp_inventory_system */ "./src/comp_inventory_system.js");
/* harmony import */ var _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comp_objects_and_methods */ "./src/comp_objects_and_methods.js");
/* harmony import */ var _comp_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comp_script */ "./src/comp_script.js");
/* harmony import */ var _comp_races__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comp_races */ "./src/comp_races.js");
/* harmony import */ var _comp_assets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comp_assets */ "./src/comp_assets.js");
// import: storyElement, storyElements, hud, grabItem, char1, classes, listEnemies, moveOn, enemies array, enemy objects







// import {  storyElements } from './comp_story_objects';


const eventEmitter = __webpack_require__(/*! ./comp_event_emitter */ "./src/comp_event_emitter.js");

// song playing
let audio = document.createElement('audio');
audio.setAttribute('id', 'audio');
audio.setAttribute('control', 'control');
audio.setAttribute('loop', 'loop');
let source = document.createElement('source');
source.setAttribute('src', `${_comp_assets__WEBPACK_IMPORTED_MODULE_9__["default"]}`);
source.setAttribute('type' `audio/mpeg`);
audio.appendChild(source);
document.body.appendChild(audio);
audio.play();
// game-long vars
let newPlayerConsequences = [];
let isPlayerExploring = false;
let Chosen = {};
// update chosen
function updateChosen() {
    let allStoryElements = _comp_script__WEBPACK_IMPORTED_MODULE_7__.storyElement.getAllInstances();
    for (let i = 0; i < allStoryElements.length; i++) {
        switch (allStoryElements[i].type) {
            case 'description':
            case 'item':
            case 'battle':
            case 'exploration':
            case 'randomEncounter':
            case 'form':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('ChosenName', Chosen.name); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('ChosenSurname', Chosen.surname); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('xe', Chosen.he); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('xis', Chosen.his); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('xim', Chosen.him); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('ximself', Chosen.himself); 
                }
                break;
            case 'choice':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('ChosenName', Chosen.name); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('ChosenSurname', Chosen.surname); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('xe', Chosen.he); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('xis', Chosen.his); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('xim', Chosen.him); 
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('ximself', Chosen.himself); 
                }
                for (let k = 0; k < allStoryElements[i].modifiers.length; k++) {
                    allStoryElements[i].modifiers[k].choiceText = allStoryElements[i].modifiers[k].choiceText.replaceAll('ChosenName', Chosen.name);
                    allStoryElements[i].modifiers[k].choiceText = allStoryElements[i].modifiers[k].choiceText.replaceAll('ChosenSurname', Chosen.surname);
                    allStoryElements[i].modifiers[k].choiceText = allStoryElements[i].modifiers[k].choiceText.replaceAll('xe', Chosen.he);
                    allStoryElements[i].modifiers[k].choiceText = allStoryElements[i].modifiers[k].choiceText.replaceAll('xis', Chosen.his);
                    allStoryElements[i].modifiers[k].choiceText = allStoryElements[i].modifiers[k].choiceText.replaceAll('xim', Chosen.him);
                    allStoryElements[i].modifiers[k].choiceText = allStoryElements[i].modifiers[k].choiceText.replaceAll('ximself', Chosen.himself);
                }
                break;
            case 'dialogue':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    allStoryElements[i].text[j].npcLine = allStoryElements[i].text[j].npcLine.replaceAll('ChosenName', Chosen.name);
                    allStoryElements[i].text[j].npcLine = allStoryElements[i].text[j].npcLine.replaceAll('ChosenSurname', Chosen.surname); 
                    allStoryElements[i].text[j].npcLine = allStoryElements[i].text[j].npcLine.replaceAll('xe', Chosen.he); 
                    allStoryElements[i].text[j].npcLine = allStoryElements[i].text[j].npcLine.replaceAll('xis', Chosen.his);
                    allStoryElements[i].text[j].npcLine = allStoryElements[i].text[j].npcLine.replaceAll('xim', Chosen.him);
                    allStoryElements[i].text[j].npcLine = allStoryElements[i].text[j].npcLine.replaceAll('ximself', Chosen.himself);
                    for (let k = 0; k < allStoryElements[i].text[j].responses.length; k++) {
                        allStoryElements[i].text[j].responses[k].dialogueChoice = allStoryElements[i].text[j].responses[k].dialogueChoice.replaceAll('ChosenName', Chosen.name);
                        allStoryElements[i].text[j].responses[k].dialogueChoice = allStoryElements[i].text[j].responses[k].dialogueChoice.replaceAll('ChosenSurname', Chosen.surname); 
                        allStoryElements[i].text[j].responses[k].dialogueChoice = allStoryElements[i].text[j].responses[k].dialogueChoice.replaceAll('xe', Chosen.he); 
                        allStoryElements[i].text[j].responses[k].dialogueChoice = allStoryElements[i].text[j].responses[k].dialogueChoice.replaceAll('xis', Chosen.his);
                        allStoryElements[i].text[j].responses[k].dialogueChoice = allStoryElements[i].text[j].responses[k].dialogueChoice.replaceAll('xim', Chosen.him);
                        allStoryElements[i].text[j].responses[k].dialogueChoice = allStoryElements[i].text[j].responses[k].dialogueChoice.replaceAll('ximself', Chosen.himself);
                    }
                }
                break;
            case 'consequence':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    for (let k = 0; k < allStoryElements[i].text[j].consequenceText.length; k++) {
                        allStoryElements[i].text[j].consequenceText[k] = allStoryElements[i].text[j].consequenceText[k].replaceAll('ChosenName', Chosen.name); 
                        allStoryElements[i].text[j].consequenceText[k] = allStoryElements[i].text[j].consequenceText[k].replaceAll('ChosenSurname', Chosen.surname);
                        allStoryElements[i].text[j].consequenceText[k] = allStoryElements[i].text[j].consequenceText[k].replaceAll('xe', Chosen.he);
                        allStoryElements[i].text[j].consequenceText[k] = allStoryElements[i].text[j].consequenceText[k].replaceAll('xis', Chosen.his);
                        allStoryElements[i].text[j].consequenceText[k] = allStoryElements[i].text[j].consequenceText[k].replaceAll('xim', Chosen.him);
                        allStoryElements[i].text[j].consequenceText[k] = allStoryElements[i].text[j].consequenceText[k].replaceAll('ximself', Chosen.himself);
                    }
                }
                break;
        }
    }
}
// update concept
function updateConcept() {
    let allStoryElements = _comp_script__WEBPACK_IMPORTED_MODULE_7__.storyElement.getAllInstances();
    for (let i = 0; i < allStoryElements.length; i++) {
        switch (allStoryElements[i].type) {
            case 'description':
            case 'item':
            case 'battle':
            case 'choice':
            case 'exploration':
            case 'randomEncounter':
            case 'form':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('Justice', _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.spiritConcept.concept); 
                }
                break;
            case 'dialogue':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    allStoryElements[i].text[j].npcLine = allStoryElements[i].text[j].npcLine.replaceAll('Justice', _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.spiritConcept.concept);
                    for (let k = 0; k < allStoryElements[i].text[j].responses.length; k++) {
                        allStoryElements[i].text[j].responses[k].dialogueChoice = allStoryElements[i].text[j].responses[k].dialogueChoice.replaceAll('Justice', _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.spiritConcept.concept);
                    }
                }
                break;
            case 'consequence':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    for (let k = 0; k < allStoryElements[i].text[j].consequenceText.length; k++) {
                        allStoryElements[i].text[j].consequenceText[k] = allStoryElements[i].text[j].consequenceText[k].replaceAll('Justice', _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.spiritConcept.concept); 
                    }
                }
                break;
        }
    }
}
// update storyElements
function newUpdateNames(answer) {
    let allStoryElements = _comp_script__WEBPACK_IMPORTED_MODULE_7__.storyElement.getAllInstances();
    for (let i = 0; i < allStoryElements.length; i++) {
        switch (allStoryElements[i].type) {
            case 'description':
            case 'item':
            case 'battle':
            case 'choice':
            case 'exploration':
            case 'randomEncounter':
            case 'form':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('Somebody', answer); 
                }
                break;
            case 'dialogue':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    allStoryElements[i].text[j].npcLine = allStoryElements[i].text[j].npcLine.replaceAll('Somebody', answer);
                    for (let k = 0; k < allStoryElements[i].text[j].responses.length; k++) {
                        allStoryElements[i].text[j].responses[k].dialogueChoice = allStoryElements[i].text[j].responses[k].dialogueChoice.replaceAll('Somebody', answer);
                    }
                }
                break;
            case 'consequence':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    for (let k = 0; k < allStoryElements[i].text[j].consequenceText.length; k++) {
                        allStoryElements[i].text[j].consequenceText[k] = allStoryElements[i].text[j].consequenceText[k].replaceAll('Somebody', answer); 
                    }
                }
                break;
        }
    }
    _comp_hud__WEBPACK_IMPORTED_MODULE_3__.menu_window.textContent = _comp_hud__WEBPACK_IMPORTED_MODULE_3__.menu_window.textContent.replace('Somebody', answer);
}
// the function is ALWAYS static
// function story(type, text, modifiers)
function storyTeller(storyElement) {
    while (_comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.firstChild) {_comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.firstChild)};
    if (storyElement !== undefined) {
        if (storyElement.type == 'separator') {
            (0,_comp_separator__WEBPACK_IMPORTED_MODULE_0__["default"])(storyElement, newPlayerConsequences, storyTeller);
        } else {
            if (storyElement[0] == 'stats' || storyElement[0] == 'gold') {
                if (storyElement[0] == 'stats') {
                    giveStats(storyElement[1], storyElement[2]);
                } else {
                    (0,_comp_inventory_system__WEBPACK_IMPORTED_MODULE_5__.addGold)(storyElement[1]);
                }
            } else {
                if (storyElement !== undefined) {
                    if (storyElement.type !== 'dialogue' && storyElement.type !== 'consequence') {
                        textFlipper(storyElement, 0);
                    } else if (storyElement.type == 'dialogue') {
                        newDialogueMaker(storyElement, 0);
                    } else {
                        consequenceShower(storyElement, 0);
                    }
                }
            }    
        }
    } else {
        tileTriggers(whichTileIsPlayerOn, currentExplorationStoryElement);
    }
}
//--- supplementary functions ---
// new continue button operator
let announcement;
function textFlipper(storyElement, loop, style) {
    if (storyElement.type == 'randomEncounter' || storyElement.modifiers == 'explorationEvent' || storyElement.nextStoryElement == 'explorationEvent') { moveOn = false; }
    let storyParagraph = document.createElement('p');
    storyParagraph.textContent = storyElement.text[loop];
    if (style == 'yellow') { storyParagraph.setAttribute('style','color:yellow;'); }
    _comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.appendChild(storyParagraph);
    if (loop < storyElement.text.length) {
        let continueButton = document.createElement('button');
        continueButton.textContent = 'Click here to continue.';
        _comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.appendChild(continueButton);
        continueButton.focus();
        continueButton.addEventListener('click', () => {
            loop++;
            _comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.removeChild(continueButton);
            if (loop == storyElement.text.length) {
                switch (storyElement.type) {
                    case 'falsecubes':
                        console.log('falsecubes called in textFlipper')
                        storyFalsecubes(storyElement);
                        break;
                    case 'description':
                        if (storyElement.modifiers !== undefined) {
                            newPlayerConsequences.push(storyElement.modifiers);
                        }
                        storyTeller(storyElement.nextStoryElement);
                        break;
                    case 'battle':
                        newBattleStarter(storyElement);
                        break;
                    case 'item':
                        (0,_comp_inventory_system__WEBPACK_IMPORTED_MODULE_5__.grabItem)(storyElement.modifiers);
                        announcement = { text: [`Acquired ${storyElement.modifiers.name}!`], type: 'itemAcquired', nextStoryElement: storyElement.nextStoryElement };
                        textFlipper(announcement, 0, 'yellow');
                        break;
                    case 'itemAcquired':
                        storyTeller(announcement.nextStoryElement);
                        break;
                    case 'choice':
                        newChoice(storyElement);
                        break;
                    case 'exploration':
                        newExploration(storyElement);
                        isPlayerExploring = true;
                        break;
                    case 'randomEncounter':
                        while (_comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.firstChild) { _comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.firstChild) };
                        storyElement.modifiers.hasPlayerSeenMe = true;
                        sideEventsSeen++;
                        moveOn = true;
                        let circle = document.querySelector('#circle');
                        let currentTile = whichTileIsPlayerOn(circle);
                        for (let i = 0; i < 126; i++) {
                            let loopedTile = document.querySelector(`#tile${i}`);
                            if (loopedTile.id == currentTile) {
                                if (loopedTile.hasChildNodes) {
                                    loopedTile.removeChild(loopedTile.firstChild);
                                }
                            }
                        }
                        storyTeller(storyElement.nextStoryElement);
                        break;
                    case 'endExploration':
                        let board = document.querySelector('#explorationBoard');
                        _comp_hud__WEBPACK_IMPORTED_MODULE_3__.image_window.removeChild(board);
                        while (_comp_hud__WEBPACK_IMPORTED_MODULE_3__.image_window.firstChild) { _comp_hud__WEBPACK_IMPORTED_MODULE_3__.image_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_3__.image_window.firstChild) };
                        storyTeller(storyElement.nextStoryElement);                        
                        break;
                    case 'form':
                        newFormMaker(storyElement);
                        break;
                }
                if (storyElement.modifiers == 'explorationEvent') {
                    moveOn = true;
                } else if (storyElement.modifiers !== undefined) {
                    if (storyElement.modifiers[0] == 'stats' || storyElement.modifiers[0] == 'gold') {
                        if (storyElement.modifiers[0] == 'stats') {
                            giveStats(storyElement.modifiers[1], storyElement.modifiers[2]);
                        } else {
                            (0,_comp_inventory_system__WEBPACK_IMPORTED_MODULE_5__.addGold)(storyElement.modifiers[1]);
                        }
                    }
                }
            }
            textFlipper(storyElement, loop);
        })
    }
}
// consequence function
function consequenceShower(storyElement, line) {
    let entry = document.createElement('p');
    let correctConsequence = null;
    for (let i = 0; i < storyElement.text.length; i++) {
        if (newPlayerConsequences.includes(storyElement.text[i].dependency)) {
            correctConsequence = i;
        }
    }
    if (correctConsequence !== null) {
        entry.textContent = storyElement.text[correctConsequence].consequenceText[line];
        _comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.appendChild(entry);
        if (line < storyElement.text[correctConsequence].consequenceText.length) {
            let continueButton = document.createElement('button');
            continueButton.textContent = 'Click here to continue.';
            _comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.appendChild(continueButton);
            continueButton.focus();
            continueButton.addEventListener('click', () => {
                line++;
                _comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.removeChild(continueButton);
                consequenceShower(storyElement, line);
            })
        }
        if (line == storyElement.text[correctConsequence].consequenceText.length) {
            storyTeller(storyElement.nextStoryElement);
        }
    } else {
        storyTeller(storyElement.nextStoryElement);
    }
}
// new dialogue function
// each conversation is not like a dialogue tree in a videogame, but a sliding waterfall.
let relationshipMeter = 0;
function newDialogueMaker(storyElement, line) {
    let npcDialogueLine = document.createElement('p');
    npcDialogueLine.textContent = storyElement.text[line].npcLine;
    _comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.appendChild(npcDialogueLine);
    if (line !== storyElement.text.length - 1) {
        storyElement.text[line].responses.forEach((response) => {
            let responseButton = document.createElement('button');
            responseButton.textContent = response.dialogueChoice;
            _comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.appendChild(responseButton);
            responseButton.setAttribute('class', 'choiceButton');
            responseButton.addEventListener('click', () => {
                let dialogueButtons = _comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.querySelectorAll('button');
                dialogueButtons.forEach(button => {
                    button.remove();
                });
                let yourLine = document.createElement('p');
                yourLine.textContent = `"${response.dialogueChoice}"`;
                _comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.appendChild(yourLine);
                relationshipMeter = relationshipMeter + response.points;
                newDialogueMaker(storyElement, response.dialogueNextLine);
            })
        })
    } else {
        if (relationshipMeter <= -2) {
            newPlayerConsequences.push(storyElement.modifiers[2]);
        } else if (relationshipMeter < 2) {
            newPlayerConsequences.push(storyElement.modifiers[1]);
        } else if (relationshipMeter >= 2) {
            newPlayerConsequences.push(storyElement.modifiers[0]);
        }
        relationshipMeter = 0;
        let continueButton = document.createElement('button');
        continueButton.textContent = 'Click here to continue.';
        _comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.appendChild(continueButton);
        continueButton.focus();
        continueButton.addEventListener('click', () => {
            storyTeller(storyElement.nextStoryElement);
        });
    }
}
// new choice function
function newChoice(storyElement) {
    storyElement.modifiers.forEach((thisChoice) => {
        let choiceButton = document.createElement('button');
        choiceButton.textContent = thisChoice.choiceText;
        choiceButton.setAttribute('class','choiceButton');
        _comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.appendChild(choiceButton);
        choiceButton.addEventListener('click', () => {
            newPlayerConsequences.push(thisChoice.choiceModifiers);
            if (thisChoice.choiceModifiers == 'classWraith') {
                Object.setPrototypeOf(_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1, _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.Janitor.prototype);
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.Janitor.call(_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1, _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.name, 0, 10, 20, 100, 'Normal Attack', '', '', '', []);
                _comp_hud__WEBPACK_IMPORTED_MODULE_3__.menu_window.textContent = _comp_hud__WEBPACK_IMPORTED_MODULE_3__.menu_window.textContent.replace('Your class is unknown.', 'You are a Wraith.');
                _comp_hud__WEBPACK_IMPORTED_MODULE_3__.special_button.addEventListener('click', () => { (0,_comp_battle_functions__WEBPACK_IMPORTED_MODULE_4__.switchAttack)(_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1) });
                eventEmitter.emit('Wraith');    
            } else if (thisChoice.choiceModifiers == 'classPoltergeist') {
                Object.setPrototypeOf(_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1, _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.Accountant.prototype);
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.Accountant.call(_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1, _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.name, 0, 10, 20, 100, 'Normal Attack', '', '', '', []);
                _comp_hud__WEBPACK_IMPORTED_MODULE_3__.menu_window.textContent = _comp_hud__WEBPACK_IMPORTED_MODULE_3__.menu_window.textContent.replace('Your class is unknown.', 'You are a Poltegeist.');
                _comp_hud__WEBPACK_IMPORTED_MODULE_3__.special_button.addEventListener('click', () => { (0,_comp_battle_functions__WEBPACK_IMPORTED_MODULE_4__.switchAttack)(_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1) });    
                eventEmitter.emit('Poltergeist');
            } else if (thisChoice.choiceModifiers == 'classGuardianSpirit') {
                Object.setPrototypeOf(_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1, _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.Dancer.prototype);
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.Dancer.call(_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1, _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.name, 0, 10, 20, 100, 'Normal Attack', '', '', '', []);
                _comp_hud__WEBPACK_IMPORTED_MODULE_3__.menu_window.textContent = _comp_hud__WEBPACK_IMPORTED_MODULE_3__.menu_window.textContent.replace('Your class is unknown.', 'You are a Guardian Spirit.');
                _comp_hud__WEBPACK_IMPORTED_MODULE_3__.special_button.addEventListener('click', () => { (0,_comp_battle_functions__WEBPACK_IMPORTED_MODULE_4__.switchAttack)(_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1) });   
                eventEmitter.emit('GuardianSpirit');  
            }
            if (thisChoice.choiceModifiers == 'raceRealmer') {
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.race = _comp_races__WEBPACK_IMPORTED_MODULE_8__.races.Realmer;
                _comp_hud__WEBPACK_IMPORTED_MODULE_3__.menu_window.textContent = _comp_hud__WEBPACK_IMPORTED_MODULE_3__.menu_window.textContent.replace(' Your armor class', ' In life, you were a Realmer. Your armor class');
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.currentHP += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.race.raceHPBonus;
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.maxHP += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.race.raceHPBonus;
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.armorClass += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.race.raceArmorBonus;
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.menuUpdater)();
                let stats_race = document.querySelector('#stats_race');
                stats_race.textContent = 'In life, you were a Realmer.'
            } else if (thisChoice.choiceModifiers == 'raceMortar') {
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.race = _comp_races__WEBPACK_IMPORTED_MODULE_8__.races.Mortar;
                _comp_hud__WEBPACK_IMPORTED_MODULE_3__.menu_window.textContent = _comp_hud__WEBPACK_IMPORTED_MODULE_3__.menu_window.textContent.replace(' Your armor class', ' In life, you were a Mortar. Your armor class');
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.currentHP += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.race.raceHPBonus;
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.maxHP += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.race.raceHPBonus;
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.armorClass += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.race.raceArmorBonus;
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.menuUpdater)();
                stats_race.textContent = 'In life, you were a Mortar.'
            } else if (thisChoice.choiceModifiers == 'raceDeadlander') {
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.race = _comp_races__WEBPACK_IMPORTED_MODULE_8__.races.Deadlander;
                _comp_hud__WEBPACK_IMPORTED_MODULE_3__.menu_window.textContent = _comp_hud__WEBPACK_IMPORTED_MODULE_3__.menu_window.textContent.replace(' Your armor class', ' In life, you were a Deadlander. Your armor class');
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.currentHP += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.race.raceHPBonus;
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.maxHP += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.race.raceHPBonus;
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.armorClass += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.race.raceArmorBonus;
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.menuUpdater)();
                stats_race.textContent = 'In life, you were a Deadlander.'
            }
            if (thisChoice.choiceModifiers == 'compassionSpirit') {
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.spiritConcept.concept = 'Compassion';
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.spiritConcept.description = ' of Compassion';
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.menuUpdater)();
                updateConcept();
            }
            if (thisChoice.choiceModifiers == 'justiceSpirit') {
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.spiritConcept.concept = 'Justice';
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.spiritConcept.description = ' of Justice';
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.menuUpdater)();
                updateConcept();
            }
            if (thisChoice.choiceModifiers == 'freedomSpirit') {
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.spiritConcept.concept = 'Freedom';
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.spiritConcept.description = ' of Freedom';
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.menuUpdater)();
                updateConcept();
            }
            if (thisChoice.choiceModifiers == 'masterySpirit') {
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.spiritConcept.concept = 'Mastery';
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.spiritConcept.description = ' of Mastery';
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.menuUpdater)();
                updateConcept();
            }
            if (thisChoice.choiceModifiers == 'wisdomSpirit') {
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.spiritConcept.concept = 'Wisdom';
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.spiritConcept.description = ' of Wisdom';
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.menuUpdater)();
                updateConcept();
            }
            if (thisChoice.choiceModifiers == 'chosenPeculiar') {
                Chosen = (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.NPCMaker)('Peculiar', 'Quirke', 'she', 'her', 'her', 'herself');
                updateChosen();
            }
            if (thisChoice.choiceModifiers == 'chosenSnapdragon') {
                Chosen = (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.NPCMaker)('Snapdragon', 'Quirke', 'he', 'his', 'him', 'himself');
                updateChosen();
            }
            if (thisChoice.choiceModifiers == 'chosenLysander') {
                Chosen = (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.NPCMaker)('Lysander', 'MacAppleby', 'they', 'their', 'them', 'themselves');
                updateChosen();
            }
            storyTeller(thisChoice.choiceNextStory);
        });
    })
}
// new battle functions
let storyAfterBattle = null;
function newBattleStarter(storyElement) {
    storyElement.modifiers.forEach((currentEnemy) => { currentEnemy.currentHP = currentEnemy.maxHP });
    _comp_battle_functions__WEBPACK_IMPORTED_MODULE_4__.enemies.splice(0, _comp_battle_functions__WEBPACK_IMPORTED_MODULE_4__.enemies.length, ...storyElement.modifiers);
    storyAfterBattle = storyElement;
    let board = document.querySelector('#explorationBoard');
    if (board !== null) { board.style.display = 'none'; }
    (0,_comp_battle_functions__WEBPACK_IMPORTED_MODULE_4__.listEnemies)();
}
eventEmitter.on('battle:win', () => {
// function isBattleOver(battleResult) {
    // if (battleResult == 'win') {
        if (isPlayerExploring == true) {
            let board = document.querySelector('#explorationBoard');
            board.style.display = 'grid';        
        }    
        let entry = document.createElement('p');
        entry.textContent = 'You win the battle!';
        _comp_hud__WEBPACK_IMPORTED_MODULE_3__.log_window.appendChild(entry);
        while (_comp_hud__WEBPACK_IMPORTED_MODULE_3__.log_window.children.length > 2) { _comp_hud__WEBPACK_IMPORTED_MODULE_3__.log_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_3__.log_window.firstChild) };
        Array.from(_comp_hud__WEBPACK_IMPORTED_MODULE_3__.log_window.children).forEach((entry) => {
            entry.setAttribute('style', 'color:white;');
        });
        _comp_hud__WEBPACK_IMPORTED_MODULE_3__.top_bar.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_3__.top_bar.firstChild);
        while (_comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.firstChild) { _comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.firstChild) };
        storyTeller(storyAfterBattle.nextStoryElement);
        storyAfterBattle = null;   
}); 
    // } else {
eventEmitter.on('battle:lose', () => {
        let entry = document.createElement('p');
        entry.textContent = 'You died!';
        entry.setAttribute('style', 'color:red;');
        _comp_hud__WEBPACK_IMPORTED_MODULE_3__.log_window.appendChild(entry);
        _comp_hud__WEBPACK_IMPORTED_MODULE_3__.button_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_3__.attack_button);
        _comp_hud__WEBPACK_IMPORTED_MODULE_3__.button_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_3__.special_button);
        _comp_hud__WEBPACK_IMPORTED_MODULE_3__.button_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_3__.inventory_button);
        _comp_hud__WEBPACK_IMPORTED_MODULE_3__.button_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_3__.stats_button);
    // }
});
// new character creation function
function newFormMaker(storyElement) {
    let form_card = document.createElement('div');
    let form = document.createElement('form');
    let input = document.createElement('input');
    let submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    input.setAttribute('type', 'text');
    form.appendChild(input);
    form.appendChild(submit);
    form_card.appendChild(form);
    _comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.appendChild(form_card);
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        let answer = input.value;
        _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_6__.char1.name = answer;
        newUpdateNames(answer);
        while (_comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.firstChild) { _comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.firstChild); }
        storyTeller(storyElement.nextStoryElement);
    })
}
// --- exploration system ---
// tracking vars
let moveOn = true;
let sideEventsSeen = 0;
let currentExplorationStoryElement = '';
// new exploration functions
function newExploration(storyElement) {
    // clear main window
    currentExplorationStoryElement = storyElement;
    while (_comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.firstChild) {_comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_3__.main_window.firstChild)};
    // make board and boardUnder
    let board = document.createElement('div');
    board.setAttribute('id', 'explorationBoard');
    let boardUnder = document.createElement('div');
    boardUnder.setAttribute('style', 'border-collapse:collapse; margin:3px; display:inline-grid; grid-template-columns: repeat(6, 25px);')
    boardUnder.setAttribute('id', 'boardUnder');
    _comp_hud__WEBPACK_IMPORTED_MODULE_3__.image_window.appendChild(board);
    board.appendChild(boardUnder);
    // draw tiles
    for (let i = 0; i < 126; i++) {
        let tile = document.createElement('div');
        tile.setAttribute('style','padding:5px;border:1px solid white;height:15px;width:15px;');
        tile.setAttribute('id', `tile${i}`);
        boardUnder.appendChild(tile);
    }
    // call drawIcons function
    drawIcons(storyElement);
    // draw the circle inside the squares
    let circle = document.createElement('div');
    circle.setAttribute('id','circle');
    circle.setAttribute('style','background-color:white;border:1px solid white;border-radius:50%; z-index:10; height: 17px; width: 17px;');
    circle.setAttribute('tabindex', '0');
    let startTile = document.querySelector('#tile120');
    startTile.appendChild(circle);
    // coordinates of bounding rectangle (**IT DOESN'T MOVE WHEN CIRCLE MOVES!**)
    let initialCircleX = circle.getBoundingClientRect().x;
    let initialCircleY = circle.getBoundingClientRect().y;

    let currentCircleX = initialCircleX;
    let currentCircleY = initialCircleY;
    // WASD to move the circle
    document.addEventListener('keydown', (event) => {
        let step = 5;
        let boardUnderCollision = boardUnder.getBoundingClientRect();
        switch (event.key) {
            case 'w':
                //Transform (translate): CALCULATES FROM THE INITIAL POSITION! SO, initialCircle WILL BE 0, 0 for transform translate
                if (currentCircleY - step > boardUnderCollision.top && moveOn == true) {
                    currentCircleY -= step;
                    tileTriggers(whichTileIsPlayerOn(circle), storyElement);
                }
                break;
            case 'a':
                if (currentCircleX - step > boardUnderCollision.left && moveOn == true) {
                    currentCircleX -= step;
                    tileTriggers(whichTileIsPlayerOn(circle), storyElement);
                }
                break;
            case 's':
                if (currentCircleY + step + 20 < boardUnderCollision.bottom && moveOn == true) {
                    currentCircleY += step;
                    tileTriggers(whichTileIsPlayerOn(circle), storyElement);
                }
                break;
            case 'd':
                if (currentCircleX + step + 18 < boardUnderCollision.right && moveOn == true) {
                    currentCircleX += step;
                    tileTriggers(whichTileIsPlayerOn(circle), storyElement);
                }
                break;
        }
        let keyboardMoveY = currentCircleY - initialCircleY;
        let keyboardMoveX = currentCircleX - initialCircleX;
        circle.style.transform = `translate(${keyboardMoveX}px, ${keyboardMoveY}px)`;
    });
    // clicking to move
    // This works because it doesn't NEED a current position. it ALWAYS calculates from the starting one
    boardUnder.addEventListener('click', (event) => {
        if (moveOn == true) {
            let clickedTile = document.querySelector(`#${whichTileDidYouClick(event.clientX, event.clientY)}`);
            let clickedTileBoundaries = clickedTile.getBoundingClientRect();
            let moveX = clickedTileBoundaries.left + 4 - initialCircleX;
            let moveY = clickedTileBoundaries.top + 4 - initialCircleY + window.scrollY;
            circle.style.transform = `translate(${moveX}px, ${moveY}px)`;
            tileTriggers(whichTileIsPlayerOn(circle), storyElement);
            currentCircleX = clickedTileBoundaries.left + 4;
            currentCircleY = clickedTileBoundaries.top + 4 + window.scrollY;
        }
    });
}
// which tile did you click?
function whichTileDidYouClick(clickX, clickY) {
    let tiles = document.querySelectorAll('[id^="tile"]');
    for (let i = 0; i < tiles.length; i++) {
        let tileCollision = tiles[i].getBoundingClientRect();
        if (
            clickX < tileCollision.right &&
            clickX > tileCollision.left &&
            clickY < tileCollision.bottom &&
            clickY > tileCollision.top 
        ) {
            return tiles[i].id;
        }
    }
    return null;
}
// when a player moves, it is triggered. returns "#tile30" type number
function whichTileIsPlayerOn(circle) {
    let circleCollision = circle.getBoundingClientRect();
    let tiles = document.querySelectorAll('[id^="tile"]');
    for (let i = 0; i < tiles.length; i++) {
        let tileCollision = tiles[i].getBoundingClientRect();
        if (
            circleCollision.left < tileCollision.right &&
            circleCollision.right > tileCollision.left &&
            circleCollision.top < tileCollision.bottom &&
            circleCollision.bottom > tileCollision.top 
        ) {
            return tiles[i].id;
        }
    }
    return null;
}
// compares the tile id from above and activates a storyElement
function tileTriggers(playersTile, storyElement) {
        for (let i = 0; i < storyElement.modifiers.length - 1; i++) {
            // console.log(playersTile);
            // console.log(storyElement.modifiers[i].tileNumber);
            if (`#${playersTile}` == storyElement.modifiers[i].tileNumber && !storyElement.modifiers[i].encounterStoryElement.modifiers.hasPlayerSeenMe) {
                storyTeller(storyElement.modifiers[i].encounterStoryElement);
            }
        }
        if (sideEventsSeen == storyElement.modifiers.length - 1) {
            storyElement.modifiers[storyElement.modifiers.length-1].unlocked = true;
            drawLastIcon(storyElement);
        }
        if (`#${playersTile}` == storyElement.modifiers[storyElement.modifiers.length-1].tileNumber && storyElement.modifiers[storyElement.modifiers.length-1].unlocked) {
            storyTeller(storyElement.modifiers[storyElement.modifiers.length-1].encounterStoryElement);
            sideEventsSeen = 0;
        }
    }    
// draw icons on tiles
function drawIcons(storyElement) {
    let tiles = document.querySelectorAll('[id^="tile"]');
    for (let i = 0; i < tiles.length; i++) {
        for (let j = 0; j < storyElement.modifiers.length - 1; j++) {
            if (`#${tiles[i].id}` == storyElement.modifiers[j].tileNumber) {
                tiles[i].style.position = 'relative';
                storyElement.modifiers[j].icon.style.position = 'absolute';
                tiles[i].appendChild(storyElement.modifiers[j].icon);
            }
        }
    }
}
// draw last icon
function drawLastIcon(storyElement) {
    let tiles = document.querySelectorAll('[id^="tile"]');
    for (let i = 0; i < tiles.length; i++) {
        if (`#${tiles[i].id}` == storyElement.modifiers[storyElement.modifiers.length-1].tileNumber) {
            tiles[i].style.position = 'relative';
            storyElement.modifiers[storyElement.modifiers.length-1].icon.style.position = 'absolute';
            tiles[i].appendChild(storyElement.modifiers[storyElement.modifiers.length-1].icon);
        }
    }
}
// --- stats system ---
// track stats
let playerBenevolentBalance = 0;
let playerSillyBalance = 0;
// stats screen
let statsDialog = document.createElement('dialog');
statsDialog.innerHTML = `
    <button id='closeButton2'>Close</button>
    <div id='statsBox'>
    <h2>Stats</h2>
    <ul id ='statsList'>
        <li id='stats_gender'>You do not remember your gender.</li>
        <li id='stats_race'>You do not remember your race.</li>
        <li id='stats_romantic_partner'>You do not remember who your romantic partner was.</li>
        <li id='stats_cause_of_death'>You do not remember your cause of death.</li>
        <li id='stats_evil_benevolent'>
            <div class='stats_meter' id='stats_meter_evil'>
                <div class='stats_line' id='stats_line_evil'>Evil</div>
                <div class='stats_line' id='stats_line_benevolent'>Benevolent</div>
            </div>
        </li>
        <li id='stats_somber_silly'>
            <div class='stats_meter' id='stats_meter_somber'>
                <div class='stats_line' id='stats_line_somber'>Somber</div>
                <div class='stats_line' id='stats_line_silly'>Silly</div>
            </div>
        </li>
    </ul>
    </div>
`;
document.body.appendChild(statsDialog);
document.addEventListener('DOMContentLoaded', () => {
    _comp_hud__WEBPACK_IMPORTED_MODULE_3__.stats_button.addEventListener('click', () => {
        if (newPlayerConsequences.includes('classWraith') || newPlayerConsequences.includes('classPoltergeist') || newPlayerConsequences.includes('classGuardianSpirit')) {
            statsDialog.showModal();
            let closeButton2 = document.querySelector('#closeButton2');
            closeButton2.addEventListener('click', () => {
                statsDialog.classList.add('hide');
                statsDialog.addEventListener('animationend', _comp_hud__WEBPACK_IMPORTED_MODULE_3__.dialogAnimationEnd);
            });
        }
    });
});
// tracking and updating stats
function statsLinesUpdater() {
    let evilLine = document.querySelector('#stats_meter_evil');
    let somberLine = document.querySelector('#stats_meter_somber');
    evilLine.style.gridTemplateColumns = `${50-playerBenevolentBalance}fr ${50+playerBenevolentBalance}fr`;
    somberLine.style.gridTemplateColumns = `${50-playerSillyBalance}fr ${50+playerSillyBalance}fr`;
}
function giveStats(stat, amount) {
    switch (stat) {
        case 'evil':
            playerBenevolentBalance -= amount;
            break;
        case 'benevolent':
            playerBenevolentBalance += amount;
            break;
        case 'somber':
            playerSillyBalance -= amount;            
            break;
        case 'silly':
            playerSillyBalance += amount;
            break;
    }
    statsLinesUpdater();
    statsFlagsUpdater();
}
function statsFlagsUpdater() {
    if (playerBenevolentBalance > 14) {
        newPlayerConsequences.push('playerBenevolent15');
        if (playerBenevolentBalance > 29) {
            newPlayerConsequences.push('playerBenevolent30');
        }
    };
    if (playerBenevolentBalance < -14) {
        newPlayerConsequences.push('playerEvil15');
        if (playerBenevolentBalance < -29) {
            newPlayerConsequences.push('playerEvil30');
        }
    };
    if (playerSillyBalance > 14) {
        newPlayerConsequences.push('playerSilly15');
        if (playerSillyBalance > 29) {
            newPlayerConsequences.push('playerSilly30');
        }
    };
    if (playerSillyBalance < -14) {
        newPlayerConsequences.push('playerSomber15');
        if (playerSillyBalance < -29) {
            newPlayerConsequences.push('playerSomber15');
        }
    };
}
// Falsecubes
function storyFalsecubes(storyElement) {
    console.log('falsecubes function called');
    (0,_comp_dice_game__WEBPACK_IMPORTED_MODULE_1__.startDiceGame)(storyElement.modifiers.opponentName, storyElement.modifiers.opponentLines, storyFalsecubesEnd, storyElement);
}
function storyFalsecubesEnd(result, prize) {
    if (result == 'win') {
        newPlayerConsequences.push(prize.modifiers.consequences.win);
        console.log(newPlayerConsequences);
        storyTeller(prize.nextStoryElement.win);
    } else {
        newPlayerConsequences.push(prize.modifiers.consequences.lose);
        console.log(newPlayerConsequences);
        storyTeller(prize.nextStoryElement.lose);
    }
}
// Start game
storyTeller(_comp_script__WEBPACK_IMPORTED_MODULE_7__.scriptObjects.prologue1);


/***/ }),

/***/ "./src/KGNoRegretsSketch.ttf":
/*!***********************************!*\
  !*** ./src/KGNoRegretsSketch.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3835161464e8cef066ac.ttf";

/***/ }),

/***/ "./src/bg.jpg":
/*!********************!*\
  !*** ./src/bg.jpg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a0118664855979475e8b.jpg";

/***/ }),

/***/ "./src/person.png":
/*!************************!*\
  !*** ./src/person.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "826bfd9b6291010c09c1.png";

/***/ }),

/***/ "./src/tree.png":
/*!**********************!*\
  !*** ./src/tree.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5377b107b78fe75c2885.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/comp_story_functions.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDNhYmRjZmNjMzJkMTViMTFjYzUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySEFBMEM7QUFDdEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxX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QUFLO0FBQ0w7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxrQ0FBa0M7QUFDbEMsS0FBSztBQUNMO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLHNDQUFzQztBQUN0QyxLQUFLO0FBQ0w7QUFDQSxzQ0FBc0M7QUFDdEMsS0FBSztBQUNMO0FBQ0Esc0NBQXNDO0FBQ3RDLEtBQUs7QUFDTDtBQUNBLHNDQUFzQztBQUN0QyxLQUFLO0FBQ0w7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esc0NBQXNDO0FBQ3RDLEtBQUs7QUFDTDtBQUNBLHNDQUFzQztBQUN0QyxLQUFLO0FBQ0w7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxvQ0FBb0M7QUFDcEMsS0FBSztBQUNMO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLDJDQUEyQztBQUMzQyxLQUFLO0FBQ0w7QUFDQSwyQ0FBMkM7QUFDM0MsS0FBSztBQUNMO0FBQ0EsMkNBQTJDO0FBQzNDLEtBQUs7QUFDTDtBQUNBLDJDQUEyQztBQUMzQyxLQUFLO0FBQ0w7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsNENBQTRDO0FBQzVDLEtBQUs7QUFDTDtBQUNBLDRDQUE0QztBQUM1QyxLQUFLO0FBQ0w7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvY29tcF9hc3NldHMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL3NyYy9jb21wX2JhdHRsZV9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL3NyYy9jb21wX2RpY2VfZ2FtZS5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vc3JjL2NvbXBfZXZlbnRfZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vc3JjL2NvbXBfaHVkLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvY29tcF9pbnZlbnRvcnlfc3lzdGVtLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvY29tcF9vYmplY3RzX2FuZF9tZXRob2RzLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvY29tcF9yYWNlcy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vc3JjL2NvbXBfc2NyaXB0LmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvY29tcF9zZXBhcmF0b3IuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL3NyYy9jb21wX3N0b3J5X2Z1bmN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9LR05vUmVncmV0c1NrZXRjaC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXB1cnBsZTE6ICMwRjMzMjU7IFxuICAgIC0tcHVycGxlMjogIzFFMkIyMTtcbiAgICAtLXB1cnBsZTM6ICMyRTYzNEY7IFxuICAgIC0tZ3JleTogIzI4MjgyODtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5odG1sLCBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1ZUJztcbiAgICBmb250LXNpemU6IDExMCU7XG59XG5cbi5tYWluTWVudUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tYWluTWVudSBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTQwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAyZnIgMmZyIDNmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggNDUwcHggMWZyIDcwcHg7XG59XG5cbi50b3BfYmFyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gNztcbn1cblxuLmltYWdlX3dpbmRvdyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUxKTtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xufVxuXG4uaW1hZ2Vfd2luZG93IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMDAlO1xufVxuXG4uaW1hZ2Vfd2luZG93IGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMyk7XG59XG5cbi5pbWFnZV93aW5kb3cgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubWFpbl93aW5kb3cge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMSk7XG4gICAgZ3JpZC1jb2x1bW46IDMgLyA1O1xuICAgIGdyaWQtcm93OiAyIC8gNDtcbiAgICBmb250LXNpemU6IDEwMCU7XG59XG5cbi5tYWluX3dpbmRvdyBwLCAubWFpbl93aW5kb3cgYnV0dG9uLCAubWFpbl93aW5kb3cgaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5cbi5tYWluX3dpbmRvdyBzZWxlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LWZhbWlseTogJ1ZUJztcbiAgICBtYXJnaW4tcmlnaHQ6MTAwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dC5jaGVja21hcmtbdHlwZT1jaGVja2JveF0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG91dGxpbmU6IHZhcigtLWdyZXkpIHNvbGlkIDJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG5pbnB1dC5jaGVja21hcmtbdHlwZT1jaGVja2JveF06Y2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XG59XG5cbm9wdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XG59XG5cbmRpYWxvZyB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcyBlYXNlLW91dCBmb3J3YXJkcztcbn1cblxuLmhpZGUge1xuICAgIGFuaW1hdGlvbjogZmFkZU91dCAxcyBlYXNlLW91dCBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXR7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5cbi5tYWluX3dpbmRvdyBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tYWluX3dpbmRvdyAuY2hvaWNlQnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1haW5fd2luZG93IGJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUzKTtcbn1cblxuLm1haW5fd2luZG93IGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wdXJwbGUxKTtcbn1cblxuLm1haW5fd2luZG93IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnVlQnO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHVycGxlMSk7XG59XG5cbi5tYWluX3dpbmRvdyBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xufVxuXG4uYnV0dG9uX3dpbmRvdyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUzKTtcbiAgICBncmlkLWNvbHVtbjogMSAvIDc7XG4gICAgZ3JpZC1yb3c6IDQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xufVxuXG4uYnV0dG9uX3dpbmRvdyBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbn1cblxuLmxvZyB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUyKTtcbiAgICBncmlkLWNvbHVtbjogNSAvIDY7XG59XG5cbi5tZW51IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTIpO1xuICAgIGdyaWQtY29sdW1uOiA1IC8gNjtcbn1cblxuZGlhbG9nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUyKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA4NSU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuI2Nsb3NlQnV0dG9uLCAjY2xvc2VCdXR0b24yIHtcbiAgICBtYXJnaW4tbGVmdDo0NTBweDtcbiAgICBmb250LXNpemU6ODAlO1xufVxuXG4uc3RhdHNfbWV0ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MGZyIDUwZnI7XG59XG5cbiNzdGF0c19tZXRlcl9ldmlsIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4jc3RhdHNfbGluZV9ldmlsLCAjc3RhdHNfbGluZV9zb21iZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuI3N0YXRzX2xpbmVfYmVuZXZvbGVudCwgI3N0YXRzX2xpbmVfc2lsbHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggNTgwcHggMjUwcHggNjVweDtcbiAgICB9XG4gICAgcDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuICAgIC50b3BfYmFyIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgICAgICBncmlkLXJvdzogMSAvIDU7XG4gICAgfVxuICAgIC5pbWFnZV93aW5kb3cge1xuICAgICAgICBncmlkLWNvbHVtbjogMTtcbiAgICAgICAgZ3JpZC1yb3c6IDI7XG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIH1cbiAgICAjZXhwbG9yYXRpb25Cb2FyZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5tYWluX3dpbmRvdyB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyO1xuICAgICAgICBncmlkLXJvdzogMjtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB9XG4gICAgLmJ1dHRvbl93aW5kb3cge1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgICAgIGdyaWQtcm93OiA0O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgfVxuICAgIC5idXR0b25fd2luZG93IGJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIH1cbiAgICAubG9nIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgICAgIGdyaWQtcm93OiAzO1xuICAgICAgICBmb250LXNpemU6IDgwJTtcbiAgICB9XG4gICAgLm1lbnUge1xuICAgICAgICBncmlkLWNvbHVtbjogMjtcbiAgICAgICAgZ3JpZC1yb3c6IDM7XG4gICAgfVxuICAgIGRpYWxvZyB7XG4gICAgICAgIG1heC13aWR0aDogMjcwcHg7XG4gICAgfVxuICAgICNjbG9zZUJ1dHRvbiwgI2Nsb3NlQnV0dG9uMiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjI1MHB4O1xuICAgICAgICBmb250LXNpemU6ODAlO1xuICAgIH1cbiAgICAubWFpbl93aW5kb3cgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgICAgIHdpZHRoOjEyMHB4O1xuICAgIH1cbn1cblxuLmRlYXRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJu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aUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLHlDQUF5QztJQUM3QztJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGNBQWM7UUFDZCxXQUFXO1FBQ1gsY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksY0FBYztRQUNkLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsYUFBYTtRQUNiLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFDM0IsUUFBUTtJQUNaO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsV0FBVztRQUNYLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1wdXJwbGUxOiAjMEYzMzI1OyBcXG4gICAgLS1wdXJwbGUyOiAjMUUyQjIxO1xcbiAgICAtLXB1cnBsZTM6ICMyRTYzNEY7IFxcbiAgICAtLWdyZXk6ICMyODI4Mjg7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1ZUJztcXG4gICAgc3JjOiB1cmwoJy4vS0dOb1JlZ3JldHNTa2V0Y2gudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1ZUJztcXG4gICAgZm9udC1zaXplOiAxMTAlO1xcbn1cXG5cXG4ubWFpbk1lbnVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1haW5NZW51IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTQwJTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAyZnIgMmZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDQ1MHB4IDFmciA3MHB4O1xcbn1cXG5cXG4udG9wX2JhciB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDc7XFxufVxcblxcbi5pbWFnZV93aW5kb3cge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUxKTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxufVxcblxcbi5pbWFnZV93aW5kb3cgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG4uaW1hZ2Vfd2luZG93IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xcbn1cXG5cXG4uaW1hZ2Vfd2luZG93IHAge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5tYWluX3dpbmRvdyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTEpO1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDU7XFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG4ubWFpbl93aW5kb3cgcCwgLm1haW5fd2luZG93IGJ1dHRvbiwgLm1haW5fd2luZG93IGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5tYWluX3dpbmRvdyBzZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LWZhbWlseTogJ1ZUJztcXG4gICAgbWFyZ2luLXJpZ2h0OjEwMDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5pbnB1dC5jaGVja21hcmtbdHlwZT1jaGVja2JveF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3V0bGluZTogdmFyKC0tZ3JleSkgc29saWQgMnB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuaW5wdXQuY2hlY2ttYXJrW3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxub3B0aW9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XFxufVxcblxcbmRpYWxvZyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGFuaW1hdGlvbjogZmFkZU91dCAxcyBlYXNlLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXR7XFxuICAgIGZyb20ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxufVxcblxcbi5tYWluX3dpbmRvdyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDkwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm1haW5fd2luZG93IC5jaG9pY2VCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1haW5fd2luZG93IGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMyk7XFxufVxcblxcbi5tYWluX3dpbmRvdyBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnVlQnO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXB1cnBsZTEpO1xcbn1cXG5cXG4ubWFpbl93aW5kb3cgaW5wdXRbdHlwZT1zdWJtaXRdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wdXJwbGUxKTtcXG59XFxuXFxuLm1haW5fd2luZG93IGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xcbn1cXG5cXG4uYnV0dG9uX3dpbmRvdyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDc7XFxuICAgIGdyaWQtcm93OiA0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1ZUJztcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUzKTtcXG59XFxuXFxuLmJ1dHRvbl93aW5kb3cgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxNTAlO1xcbn1cXG5cXG4ubG9nIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTIpO1xcbiAgICBncmlkLWNvbHVtbjogNSAvIDY7XFxufVxcblxcbi5tZW51IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMik7XFxuICAgIGdyaWQtY29sdW1uOiA1IC8gNjtcXG59XFxuXFxuZGlhbG9nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiA4NSU7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxufVxcblxcbiNjbG9zZUJ1dHRvbiwgI2Nsb3NlQnV0dG9uMiB7XFxuICAgIG1hcmdpbi1sZWZ0OjQ1MHB4O1xcbiAgICBmb250LXNpemU6ODAlO1xcbn1cXG5cXG4uc3RhdHNfbWV0ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MGZyIDUwZnI7XFxufVxcblxcbiNzdGF0c19tZXRlcl9ldmlsIHtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuI3N0YXRzX2xpbmVfZXZpbCwgI3N0YXRzX2xpbmVfc29tYmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuI3N0YXRzX2xpbmVfYmVuZXZvbGVudCwgI3N0YXRzX2xpbmVfc2lsbHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDU4MHB4IDI1MHB4IDY1cHg7XFxuICAgIH1cXG4gICAgcDpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICB9XFxuICAgIC50b3BfYmFyIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gNTtcXG4gICAgfVxcbiAgICAuaW1hZ2Vfd2luZG93IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICAgICAgZ3JpZC1yb3c6IDI7XFxuICAgICAgICBmb250LXNpemU6IDgwJTtcXG4gICAgfVxcbiAgICAjZXhwbG9yYXRpb25Cb2FyZCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgICAubWFpbl93aW5kb3cge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgICAgICBncmlkLXJvdzogMjtcXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIH1cXG4gICAgLmJ1dHRvbl93aW5kb3cge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICAgICAgZ3JpZC1yb3c6IDQ7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG4gICAgLmJ1dHRvbl93aW5kb3cgYnV0dG9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogOTAlO1xcbiAgICB9XFxuICAgIC5sb2cge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgICAgICBncmlkLXJvdzogMztcXG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xcbiAgICB9XFxuICAgIC5tZW51IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDM7XFxuICAgIH1cXG4gICAgZGlhbG9nIHtcXG4gICAgICAgIG1heC13aWR0aDogMjcwcHg7XFxuICAgIH1cXG4gICAgI2Nsb3NlQnV0dG9uLCAjY2xvc2VCdXR0b24yIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OjI1MHB4O1xcbiAgICAgICAgZm9udC1zaXplOjgwJTtcXG4gICAgfVxcbiAgICAubWFpbl93aW5kb3cgaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgICAgICB3aWR0aDoxMjBweDtcXG4gICAgfVxcbn1cXG5cXG4uZGVhdGgge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzLm9uY2UgPSBvbmNlO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gb25jZShlbWl0dGVyLCBuYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZnVuY3Rpb24gZXJyb3JMaXN0ZW5lcihlcnIpIHtcbiAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIobmFtZSwgcmVzb2x2ZXIpO1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZXIoKSB7XG4gICAgICBpZiAodHlwZW9mIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBlcnJvckxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9O1xuXG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIHJlc29sdmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgaWYgKG5hbWUgIT09ICdlcnJvcicpIHtcbiAgICAgIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGVycm9yTGlzdGVuZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBoYW5kbGVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgJ2Vycm9yJywgaGFuZGxlciwgZmxhZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCBsaXN0ZW5lciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgIGVtaXR0ZXIub25jZShuYW1lLCBsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtaXR0ZXIub24obmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gRXZlbnRUYXJnZXQgZG9lcyBub3QgaGF2ZSBgZXJyb3JgIGV2ZW50IHNlbWFudGljcyBsaWtlIE5vZGVcbiAgICAvLyBFdmVudEVtaXR0ZXJzLCB3ZSBkbyBub3QgbGlzdGVuIGZvciBgZXJyb3JgIGV2ZW50cyBoZXJlLlxuICAgIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW5jdGlvbiB3cmFwTGlzdGVuZXIoYXJnKSB7XG4gICAgICAvLyBJRSBkb2VzIG5vdCBoYXZlIGJ1aWx0aW4gYHsgb25jZTogdHJ1ZSB9YCBzdXBwb3J0IHNvIHdlXG4gICAgICAvLyBoYXZlIHRvIGRvIGl0IG1hbnVhbGx5LlxuICAgICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIHdyYXBMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBsaXN0ZW5lcihhcmcpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImVtaXR0ZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRXZlbnRFbWl0dGVyLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgZW1pdHRlcik7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaW1wb3J0aW5nXG5pbXBvcnQgc29uZyBmcm9tICcuL2JsYWNrbGFrZS5tcDMnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgdHJlZUltZyBmcm9tICcuL3RyZWUucG5nJ1xuaW1wb3J0IHBlcnNvbkltZyBmcm9tICcuL3BlcnNvbi5wbmcnO1xuLy8gaW5pdGlhbGl6ZSBpbWFnZXNcbmxldCBpY29uVHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyBpY29uVHJlZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0OjE1cHg7d2lkdGg6MTVweDsnKTsgaWNvblRyZWUuc3JjID0gYCR7dHJlZUltZ31gO1xubGV0IGljb25UcmVlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyBpY29uVHJlZTIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2hlaWdodDoxNXB4O3dpZHRoOjE1cHg7Jyk7IGljb25UcmVlMi5zcmMgPSBgJHt0cmVlSW1nfWA7XG5sZXQgaWNvblRyZWUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IGljb25UcmVlMy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0OjE1cHg7d2lkdGg6MTVweDsnKTsgaWNvblRyZWUzLnNyYyA9IGAke3RyZWVJbWd9YDtcbmxldCBpY29uUGVyc29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IGljb25QZXJzb24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdoZWlnaHQ6MTVweDt3aWR0aDoxNXB4OycpOyBpY29uUGVyc29uLnNyYyA9IGAke3BlcnNvbkltZ31gO1xuLy8gYXJyYXkgb2YgaW1hZ2VzXG5sZXQgaWNvbnMgPSB7IGljb25UcmVlLCBpY29uVHJlZTIsIGljb25UcmVlMywgaWNvblBlcnNvbiB9XG4vLyBleHBvcnQgaW1hZ2VzXG5leHBvcnQge2ljb25zLCBzb25nfSIsIi8vIGltcG9ydDogSXNCYXR0bGVPdmVyLCBodWQsIG1vbnN0ZXIgb2JqZWN0cywgY2hhcjEsIGNsYXNzZXNcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHsgXG4gICAgdG9wX2JhcixcbiAgICBsb2dfd2luZG93LFxuICAgIGltYWdlX3dpbmRvdyxcbiAgICBtYWluX3dpbmRvdyxcbn0gZnJvbSAnLi9jb21wX2h1ZCc7XG5pbXBvcnQgeyBcbiAgICBKYW5pdG9yLFxuICAgIEFjY291bnRhbnQsXG4gICAgRGFuY2VyLFxuICAgIGNoYXIxLFxufSBmcm9tICcuL2NvbXBfb2JqZWN0c19hbmRfbWV0aG9kcyc7XG5jb25zdCBldmVudEVtaXR0ZXIgPSByZXF1aXJlKCcuL2NvbXBfZXZlbnRfZW1pdHRlci5qcycpO1xuLy8gaW1wb3J0YW50IHZhcnNcbmxldCBlbmVtaWVzID0gW107XG5sZXQgZW5lbXlUb0F0dGFjaztcbi8vYnV0dG9uIGVmZmVjdHNcbmxldCBhdHRhY2tfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F0dGFja0J1dHRvbicpO1xuYXR0YWNrX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNoYXIxLmF0dGFjayhlbmVteVRvQXR0YWNrKSk7XG4vLyBjaGFuZ2UgZW5lbWllcyBmdW5jdGlvblxuZnVuY3Rpb24gaXNIZURlYWQoZGFtYWdlZEVuZW15KSB7XG4gICAgaWYgKGRhbWFnZWRFbmVteS5jdXJyZW50SFAgPD0gMCkge1xuICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gYCR7ZGFtYWdlZEVuZW15Lm5hbWV9IGRpZXMhYDtcbiAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOnllbGxvdycpO1xuICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgbGV0IGRlYWRNb25zdGVySUQgPSBlbmVtaWVzLmZpbmRJbmRleChpID0+IGkubmFtZSA9PSBkYW1hZ2VkRW5lbXkubmFtZSk7XG4gICAgICAgIGVuZW1pZXMuc3BsaWNlKGRlYWRNb25zdGVySUQsIDEpO1xuICAgICAgICBpZiAoZW5lbWllcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoJ2JhdHRsZTp3aW4nKTtcbiAgICAgICAgICAgIC8vIGlzQmF0dGxlT3Zlcignd2luJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlzUGxheWVyRGVhZCgpO1xufVxuZnVuY3Rpb24gaXNQbGF5ZXJEZWFkKCkge1xuICAgIGlmIChjaGFyMS5jdXJyZW50SFAgPD0gMCkge1xuICAgICAgICBldmVudEVtaXR0ZXIuZW1pdCgnYmF0dGxlOmxvc2UnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYWluX3dpbmRvdy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG1haW5fd2luZG93LmNoaWxkcmVuW2ldLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIG1haW5fd2luZG93LnJlbW92ZUNoaWxkKG1haW5fd2luZG93LmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGltYWdlX3dpbmRvdy5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGltYWdlX3dpbmRvdy5jaGlsZHJlbltqXS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgICAgICBpbWFnZV93aW5kb3cucmVtb3ZlQ2hpbGQoaW1hZ2Vfd2luZG93LmNoaWxkcmVuW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aGlsZSh0b3BfYmFyLmZpcnN0Q2hpbGQpIHt0b3BfYmFyLnJlbW92ZUNoaWxkKHRvcF9iYXIuZmlyc3RDaGlsZCl9O1xuICAgICAgICBsZXQgZGVhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVhdGguc2V0QXR0cmlidXRlKCdzdHlsZScsIGBwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO3otaW5kZXg6NTAwO292ZXJmbG93OmhpZGRlbjtgKTtcbiAgICAgICAgZGVhdGguY2xhc3NMaXN0LmFkZCgnZGVhdGgnKTtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlYXRoKTtcbiAgICB9XG59XG4vLyB1cGRhdGUgZW5lbWllcyBsaXN0XG5mdW5jdGlvbiBsaXN0RW5lbWllcygpIHtcbiAgICBsZXQgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwbG9yYXRpb25Cb2FyZCcpO1xuICAgIEFycmF5LmZyb20oaW1hZ2Vfd2luZG93LmNoaWxkcmVuKS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgaWYgKGVudHJ5ICE9PSBib2FyZCkge1xuICAgICAgICAgICAgaW1hZ2Vfd2luZG93LnJlbW92ZUNoaWxkKGVudHJ5KTtcbiAgICAgICAgfSBcbiAgICB9KVxuICAgIGVuZW1pZXMuZm9yRWFjaCgodGhpc0VuZW15KSA9PiB7XG4gICAgICAgIGxldCBlbmVteV9lbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbGV0IGVuZW15X2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlbmVteV9lbnRyeS50ZXh0Q29udGVudCA9IGAke3RoaXNFbmVteS5uYW1lfSBpcyB0aGVyZS4gSXQgaGFzIEFDIG9mICR7dGhpc0VuZW15LmFybW9yQ2xhc3N9LCBhdHRhY2sgYm9udXMgb2YgJHt0aGlzRW5lbXkubW9uc3RlckF0dGFja0JvbnVzfSBhbmQgSFAgb2YgJHt0aGlzRW5lbXkuY3VycmVudEhQfS8ke3RoaXNFbmVteS5tYXhIUH0uYFxuICAgICAgICBlbmVteV9idXR0b24udGV4dENvbnRlbnQgPSBgU2VsZWN0YDtcbiAgICAgICAgZW5lbXlfYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzRW5lbXkubmFtZSk7XG4gICAgICAgIGVuZW15X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNlbGVjdEVuZW15KHRoaXNFbmVteSkpO1xuICAgICAgICBpbWFnZV93aW5kb3cuYXBwZW5kQ2hpbGQoZW5lbXlfZW50cnkpO1xuICAgICAgICBpbWFnZV93aW5kb3cuYXBwZW5kQ2hpbGQoZW5lbXlfYnV0dG9uKTtcbiAgICB9KTtcbn1cbi8vIGF0dGFja2luZ1xuZnVuY3Rpb24gc2VsZWN0RW5lbXkoZW5lbXkpIHtcbiAgICBlbmVteVRvQXR0YWNrID0gZW5lbXk7XG4gICAgdG9wX2Jhci50ZXh0Q29udGVudCA9IGBTZWxlY3RlZCBlbmVteTogJHtlbmVteS5uYW1lfS5gO1xufVxuLy8gc3BlY2lhbCBidXR0b24gdGhhdCBzd2l0Y2hlcyBhdHRhY2sgbW9kZXNcbmxldCBKYW5pdG9yU3BlY2lhbHMgPSBbJ1NwaXJpdCBTbGFtJywgJ1NwZWN0cmFsIEJsYWRlJywgJ1dyYXRoZnVsIFZpc2FnZSddO1xubGV0IEFjY291bnRhbnRTcGVjaWFscyA9IFsnU3Bpcml0IFNsYW0nLCAnV2l0aGVyaW5nIEJvbHQnLCAnRXNzZW5jZSBEcmFpbiddO1xubGV0IERhbmNlclNwZWNpYWxzID0gWydTcGlyaXQgU2xhbScsICdTcGlyaXQgQmxlc3NpbmcnLCAnQmluZCBvZiB0aGUgR3VhcmRpYW4nXTtcbmxldCBhdHRhY2tJbmRleCA9IDA7XG5sZXQgcGxheWVyQ2xhc3MgPSAnJztcbmV2ZW50RW1pdHRlci5vbignV3JhaXRoJywgKCkgPT4ge1xuICAgIHBsYXllckNsYXNzID0gJ1dyYWl0aCc7XG59KTtcbmV2ZW50RW1pdHRlci5vbignUG9sdGVyZ2Vpc3QnLCAoKSA9PiB7XG4gICAgcGxheWVyQ2xhc3MgPSAnUG9sdGVyZ2Vpc3QnO1xufSk7XG5ldmVudEVtaXR0ZXIub24oJ0d1YXJkaWFuU3Bpcml0JywgKCkgPT4ge1xuICAgIHBsYXllckNsYXNzID0gJ0d1YXJkaWFuU3Bpcml0Jztcbn0pO1xuZnVuY3Rpb24gc3dpdGNoQXR0YWNrKGNoYXIpIHtcbiAgICBpZiAocGxheWVyQ2xhc3MgIT09ICcnKSB7XG4gICAgICAgIGlmIChjaGFyIGluc3RhbmNlb2YgSmFuaXRvcikge1xuICAgICAgICAgICAgYXR0YWNrSW5kZXggPSAoYXR0YWNrSW5kZXggKyAxKSAlIEphbml0b3JTcGVjaWFscy5sZW5ndGg7XG4gICAgICAgICAgICBjaGFyLnNwZWNpYWxBdHRhY2sgPSBKYW5pdG9yU3BlY2lhbHNbYXR0YWNrSW5kZXhdO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXIgaW5zdGFuY2VvZiBBY2NvdW50YW50KSB7XG4gICAgICAgICAgICBhdHRhY2tJbmRleCA9IChhdHRhY2tJbmRleCArIDEpICUgQWNjb3VudGFudFNwZWNpYWxzLmxlbmd0aDtcbiAgICAgICAgICAgIGNoYXIuc3BlY2lhbEF0dGFjayA9IEFjY291bnRhbnRTcGVjaWFsc1thdHRhY2tJbmRleF07XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhciBpbnN0YW5jZW9mIERhbmNlcikge1xuICAgICAgICAgICAgYXR0YWNrSW5kZXggPSAoYXR0YWNrSW5kZXggKyAxKSAlIERhbmNlclNwZWNpYWxzLmxlbmd0aDtcbiAgICAgICAgICAgIGNoYXIuc3BlY2lhbEF0dGFjayA9IERhbmNlclNwZWNpYWxzW2F0dGFja0luZGV4XTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gYFlvdSBnZXQgcmVhZHkgdG8gdXNlICR7Y2hhci5zcGVjaWFsQXR0YWNrfS5gO1xuICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICB9O1xufTtcbi8vc3RhcnQgYmF0dGxlXG5mdW5jdGlvbiBzdGFydEJhdHRsZSguLi5lbmNvdW50ZXJFbmVtaWVzKSB7XG4gICAgZW5jb3VudGVyRW5lbWllcy5mb3JFYWNoKCh0aGlzRW5lbXkpID0+IHtcbiAgICAgICAgdGhpc0VuZW15LmN1cnJlbnRIUCA9IHRoaXNFbmVteS5tYXhIUDtcbiAgICB9KTtcbiAgICBlbmVtaWVzID0gZW5jb3VudGVyRW5lbWllcztcbiAgICBsaXN0RW5lbWllcygpO1xufVxuLy8gZXhwb3J0XG5leHBvcnQge1xuICAgIGlzSGVEZWFkLFxuICAgIGlzUGxheWVyRGVhZCxcbiAgICBsaXN0RW5lbWllcyxcbiAgICBzd2l0Y2hBdHRhY2ssXG4gICAgc3RhcnRCYXR0bGUsXG4gICAgZW5lbWllcyxcbiAgICBlbmVteVRvQXR0YWNrXG59IiwiLy8gaW5pdGlhbGl6ZSBodWRcbmxldCBtYWluX3dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX3dpbmRvdycpO1xuLy8gaW5pdGlhbGl6ZSB2YXJzXG5sZXQgZGllMSA9IHtyZXN1bHQ6IDAsIHJlUm9sbEZsYWc6IGZhbHNlfTtcbmxldCBkaWUyID0ge3Jlc3VsdDogMCwgcmVSb2xsRmxhZzogZmFsc2V9O1xubGV0IGRpZTMgPSB7cmVzdWx0OiAwLCByZVJvbGxGbGFnOiBmYWxzZX07XG5sZXQgZGllNCA9IHtyZXN1bHQ6IDAsIHJlUm9sbEZsYWc6IGZhbHNlfTtcbmxldCBkaWU1ID0ge3Jlc3VsdDogMCwgcmVSb2xsRmxhZzogZmFsc2V9O1xubGV0IGRpZTYgPSB7cmVzdWx0OiAwLCByZVJvbGxGbGFnOiBmYWxzZX07XG5sZXQgcGxheWVySGFuZCA9IFtkaWUxLCBkaWUyLCBkaWUzLCBkaWU0LCBkaWU1LCBkaWU2XTtcbmxldCBvcHBvbmVudEhhbmQgPSBbXTtcbmxldCBjdXJyZW50QmlkID0geyBwbGF5ZXI6ICcnLCBudW1iZXJPZkRpY2U6IDAsIGRvdHM6IDAgfTtcbmxldCBhY2N1c2F0aW9uID0geyBhY2N1c2VyOiAnJywgbnVtYmVyT2ZEaWNlOiAwLCBkb3RzOiAwIH07XG5sZXQgZXhhbXBsZUxpbmVzID0ge1xuICAgIG9wZW5MaW5lOiBgQ29tZSBvbiwgbGV0J3MgcGxheWAsXG4gICAgYmlkTGluZTogYEx1Y2sgaXMgb24gbXkgc2lkZSB0b2RheWAsXG4gICAgYmx1ZmZMaW5lOiBgSSBoYXZlIGdvb2QgZGljZSB0b2RheSwga2lkYCxcbiAgICBhY2N1c2VMaW5lOiBgWWVhaCwgSSBkb24ndCB0aGluayBzb2AsXG4gICAgd2luTGluZTogYEdvdGNoYSwga2lkYCxcbiAgICBsb3NlTGluZTogYERhcm4uIFlvdSBnb3QgbHVja3ksIHBhbGBcbn1cbmZ1bmN0aW9uIHN0YXJ0RGljZUdhbWUob3Bwb25lbnROYW1lLCBsaW5lcywgY2FsbGJhY2tFbmQsIHByaXplKSB7XG4gICAgLy8gY2xlYXIgbWFpbiB3aW5kb3dcbiAgICB3aGlsZSAobWFpbl93aW5kb3cuZmlyc3RDaGlsZCkgeyBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZChtYWluX3dpbmRvdy5maXJzdENoaWxkKSB9O1xuICAgIC8vIGluc3RydWN0aW9uc1xuICAgIGxldCBpbnN0cnVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbnN0cnVjdGlvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6eWVsbG93Jyk7XG4gICAgaW5zdHJ1Y3Rpb24udGV4dENvbnRlbnQgPSAnW1lvdSBhcmUgYWJvdXQgdG8gcGxheSBGYWxzZWN1YmVzLiBIZXJlIGFyZSB0aGUgaW5zdHJ1Y3Rpb25zLl0nO1xuICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGluc3RydWN0aW9uKTtcbiAgICAvLyBzdGFydCBnYW1lIGJ1dHRvblxuICAgIGxldCBzdGFydERpY2VHYW1lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3RhcnREaWNlR2FtZUJ1dHRvbi50ZXh0Q29udGVudCA9IGBMZXQncyBwbGF5IEZhbHNlY3ViZXMhYFxuICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKHN0YXJ0RGljZUdhbWVCdXR0b24pO1xuICAgIHN0YXJ0RGljZUdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGZhbHNlQ3ViZXMob3Bwb25lbnROYW1lLCBsaW5lcywgY2FsbGJhY2tFbmQsIHByaXplKTtcbiAgICAgICAgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQoc3RhcnREaWNlR2FtZUJ1dHRvbik7XG4gICAgfSk7XG59XG4vLyBmdW5jdGlvbiB0aGF0IHN0YXJ0cyB0aGUgZ2FtZVxuZnVuY3Rpb24gZmFsc2VDdWJlcyhvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpIHtcbiAgICAvLyBvcGVuTGluZSBmcm9tIHRoZSBvcHBvbmVudFxuICAgIGxldCBvcGVuTGluZUVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG9wZW5MaW5lRW50cnkudGV4dENvbnRlbnQgPSBgJHtvcHBvbmVudE5hbWV9OiAke2xpbmVzLm9wZW5MaW5lfWA7XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQob3BlbkxpbmVFbnRyeSk7XG4gICAgLy8gcm9sbCBkaWNlIGJ1dHRvblxuICAgIGxldCByb2xsRGljZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJvbGxEaWNlQnV0dG9uLnRleHRDb250ZW50ID0gYFJvbGwgdGhlIGRpY2UuYFxuICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKHJvbGxEaWNlQnV0dG9uKTtcbiAgICByb2xsRGljZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQocm9sbERpY2VCdXR0b24pO1xuICAgICAgICByb2xsUGhhc2Uob3Bwb25lbnROYW1lLCBsaW5lcywgY2FsbGJhY2tFbmQsIHByaXplKVxuICAgIH0pO1xufVxuLy8gcm9sbGluZyA2ZDRcbmZ1bmN0aW9uIHJvbGw2ZDRQbGF5ZXIoKSB7XG4gICAgZGllMS5yZXN1bHQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTtcbiAgICBkaWUyLnJlc3VsdCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpO1xuICAgIGRpZTMucmVzdWx0ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMSk7XG4gICAgZGllNC5yZXN1bHQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTtcbiAgICBkaWU1LnJlc3VsdCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpO1xuICAgIGRpZTYucmVzdWx0ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMSk7ICAgIFxuICAgIHJldHVybiBbZGllMSwgZGllMiwgZGllMywgZGllNCwgZGllNSwgZGllNl1cbn1cbmZ1bmN0aW9uIHJvbGw2ZDRPcHBvbmVudCgpIHtcbiAgICBsZXQgb3Bwb25lbnREaWUxID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMSk7XG4gICAgbGV0IG9wcG9uZW50RGllMiA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpO1xuICAgIGxldCBvcHBvbmVudERpZTMgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTtcbiAgICBsZXQgb3Bwb25lbnREaWU0ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMSk7XG4gICAgbGV0IG9wcG9uZW50RGllNSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpO1xuICAgIGxldCBvcHBvbmVudERpZTYgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTsgICAgXG4gICAgcmV0dXJuIFtvcHBvbmVudERpZTEsIG9wcG9uZW50RGllMiwgb3Bwb25lbnREaWUzLCBvcHBvbmVudERpZTQsIG9wcG9uZW50RGllNSwgb3Bwb25lbnREaWU2XVxufVxuZnVuY3Rpb24gcm9sbDFkNCgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMSk7XG59XG4vLyByb2xsaW5nIHBoYXNlXG5mdW5jdGlvbiByb2xsUGhhc2Uob3Bwb25lbnROYW1lLCBsaW5lcywgY2FsbGJhY2tFbmQsIHByaXplKSB7XG4gICAgLy8gcGxheWVySGFuZCBhbmQgb3Bwb25lbnRIYW5kIGFycmF5cyBnZXQgYXNzaWduZWQgc2l4IGludGVnZXJzXG4gICAgcm9sbDZkNFBsYXllcigpO1xuICAgIG9wcG9uZW50SGFuZCA9IHJvbGw2ZDRPcHBvbmVudCgpO1xuICAgIC8vIGEgbWVzc2FnZSBwb3BzIG91dDogJ1lvdSByb2xsZWQ6IHgsIHksIGEsIGIsIGMsIGQnXG4gICAgbGV0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IGBZb3Ugcm9sbGVkOiAke2RpZTEucmVzdWx0fSwgJHtkaWUyLnJlc3VsdH0sICR7ZGllMy5yZXN1bHR9LCAke2RpZTQucmVzdWx0fSwgJHtkaWU1LnJlc3VsdH0sICR7ZGllNi5yZXN1bHR9LmA7XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gICAgLy8gYmVsb3cgZWFjaCBudW1iZXIgYSBjaGVja21hcmsgZm9ybVxuICAgIGxldCBwbGF5ZXJSZXJvbGxGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKHBsYXllclJlcm9sbEZvcm0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIGxldCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja21hcmsuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNoZWNrbWFyay5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7aSsxfWApO1xuICAgICAgICBjaGVja21hcmsuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7aSsxfWApO1xuICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrJyk7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYCR7aSsxfWApO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBEaWNlICR7aSsxfWA7XG4gICAgICAgIHBsYXllclJlcm9sbEZvcm0uYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcbiAgICAgICAgcGxheWVyUmVyb2xsRm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGxldCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgIHBsYXllclJlcm9sbEZvcm0uYXBwZW5kQ2hpbGQoYnIpO1xuICAgIH1cbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21hcmdpbi10b3A6IDEwcHg7Jyk7XG4gICAgcGxheWVyUmVyb2xsRm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgIC8vIG9wcG9uZW50IHJlLXJvbGxzIGxvZ2ljXG4gICAgbGV0IGFsbE9wcG9uZW50MXMgPSBvcHBvbmVudEhhbmQuZmlsdGVyKGkgPT4gaSA9PSAxKTtcbiAgICBsZXQgYWxsT3Bwb25lbnQycyA9IG9wcG9uZW50SGFuZC5maWx0ZXIoaSA9PiBpID09IDIpO1xuICAgIGxldCBhbGxPcHBvbmVudDNzID0gb3Bwb25lbnRIYW5kLmZpbHRlcihpID0+IGkgPT0gMyk7XG4gICAgbGV0IGFsbE9wcG9uZW50NHMgPSBvcHBvbmVudEhhbmQuZmlsdGVyKGkgPT4gaSA9PSA0KTtcbiAgICBsZXQgb3Bwb25lbnQxc09iamVjdCA9IHsgbnVtYmVyOiBhbGxPcHBvbmVudDFzLmxlbmd0aCwgZG90czogMSB9O1xuICAgIGxldCBvcHBvbmVudDJzT2JqZWN0ID0geyBudW1iZXI6IGFsbE9wcG9uZW50MnMubGVuZ3RoLCBkb3RzOiAyIH07XG4gICAgbGV0IG9wcG9uZW50M3NPYmplY3QgPSB7IG51bWJlcjogYWxsT3Bwb25lbnQzcy5sZW5ndGgsIGRvdHM6IDMgfTtcbiAgICBsZXQgb3Bwb25lbnQ0c09iamVjdCA9IHsgbnVtYmVyOiBhbGxPcHBvbmVudDRzLmxlbmd0aCwgZG90czogNCB9O1xuICAgIGxldCBvcHBvbmVudE9iamVjdHMgPSBbb3Bwb25lbnQxc09iamVjdCwgb3Bwb25lbnQyc09iamVjdCwgb3Bwb25lbnQzc09iamVjdCwgb3Bwb25lbnQ0c09iamVjdF07XG4gICAgY29uc29sZS5sb2coYE9yaWcgb3Bwb25lbnRIYW5kOiAke29wcG9uZW50SGFuZH1gKTtcbiAgICBsZXQgb3Bwb25lbnRPYmplY3RzU29ydGVkID0gb3Bwb25lbnRPYmplY3RzLnNvcnQoKGEsIGIpID0+IChhLm51bWJlciA+IGIubnVtYmVyKSA/IC0xIDogMSk7XG4gICAgbGV0IG9wcG9uZW50TGFzdERvdHM7XG4gICAgbGV0IG9wcG9uZW50U2Vjb25kVG9MYXN0RG90cztcbiAgICBpZiAob3Bwb25lbnRPYmplY3RzU29ydGVkWzNdLm51bWJlciAhPT0gMCkge1xuICAgICAgICBvcHBvbmVudExhc3REb3RzID0gb3Bwb25lbnRPYmplY3RzU29ydGVkWzNdLmRvdHM7XG4gICAgICAgIGNvbnNvbGUubG9nKGBCYWQgZG90czogJHtvcHBvbmVudExhc3REb3RzfWApO1xuICAgICAgICBvcHBvbmVudFNlY29uZFRvTGFzdERvdHMgPSBvcHBvbmVudE9iamVjdHNTb3J0ZWRbMl0uZG90cztcbiAgICAgICAgY29uc29sZS5sb2coYFNlY29uZCBiYWQgZG90czogJHtvcHBvbmVudFNlY29uZFRvTGFzdERvdHN9YCk7ICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIG9wcG9uZW50TGFzdERvdHMgPSBvcHBvbmVudE9iamVjdHNTb3J0ZWRbMl0uZG90cztcbiAgICAgICAgY29uc29sZS5sb2coYEJhZCBkb3RzOiAke29wcG9uZW50TGFzdERvdHN9YCk7XG4gICAgICAgIG9wcG9uZW50U2Vjb25kVG9MYXN0RG90cyA9IG9wcG9uZW50T2JqZWN0c1NvcnRlZFsxXS5kb3RzO1xuICAgICAgICBjb25zb2xlLmxvZyhgU2Vjb25kIGJhZCBkb3RzOiAke29wcG9uZW50U2Vjb25kVG9MYXN0RG90c31gKTtcbiAgICB9XG4gICAgbGV0IG9wcG9uZW50SGFuZFRvS2VlcCA9IG9wcG9uZW50SGFuZC5maWx0ZXIoaSA9PiAoaSAhPT0gb3Bwb25lbnRMYXN0RG90cyAmJiBpICE9PSBvcHBvbmVudFNlY29uZFRvTGFzdERvdHMpKTtcbiAgICAvLyBpZiB3ZSByZW1vdmUgMyBkaWNlXG4gICAgLy8gaG93TWFueURpY2VUb1JlUm9sbCA9IDYgLSAzID0gM1xuICAgIC8vIGkgPSAwLCBpID0gMSwgaSA9IDIsIHJ1bnMgdGhyZWUgdGltZXNcbiAgICB3aGlsZSAob3Bwb25lbnRIYW5kVG9LZWVwLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgbGV0IG5ld09wcG9uZW50Um9sbCA9IHJvbGwxZDQoKTtcbiAgICAgICAgb3Bwb25lbnRIYW5kVG9LZWVwLnB1c2gobmV3T3Bwb25lbnRSb2xsKTtcbiAgICB9XG4gICAgb3Bwb25lbnRIYW5kID0gb3Bwb25lbnRIYW5kVG9LZWVwO1xuICAgIGNvbnNvbGUubG9nKGBOZXcgT3Bwb25lbnQgSGFuZDogJHtvcHBvbmVudEhhbmR9YCk7XG4gICAgLy8gYmVsb3cgdGhhdCwgYSBzdWJtaXQvcmVyb2xsXG4gICAgLy8gcGxheWVySGFuZCBpcyBlbXB0aWVkXG4gICAgLy8gbm9uLXNlbGVjdGVkIGRpY2UgZ2V0IGFkZGVkIGJhY2sgdG8gcGxheWVySGFuZFxuICAgIC8vIGZvciB0aGUgaW5kZXhlcyBvZiB0aGUgc2VsZWN0ZWQgZGllLCB3aGF0IGlzIGFkZGVkIHRvIHBsYXllckhhbmQgaXMgdGhlIHJldHVybiBvZiByZVJvbGxEaWVcbiAgICBwbGF5ZXJSZXJvbGxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiJHtpKzF9XCJgKTtcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgLy8gMSwgMiwgWzNdLCBbNF0sIDEsIDJcbiAgICAgICAgICAgICAgICBwbGF5ZXJIYW5kW2ldLnJlUm9sbEZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBqID0gMDtcbiAgICAgICAgd2hpbGUgKGogPCA2KSAge1xuICAgICAgICAgICAgLy8gMSwgMiwgWzNdLCBbNF0sIDEsIDJcbiAgICAgICAgICAgIGlmIChwbGF5ZXJIYW5kW2pdLnJlUm9sbEZsYWcgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHBsYXllckhhbmQuc3BsaWNlKGosIDEpO1xuICAgICAgICAgICAgICAgIGxldCBuZXdEaWUgPSB7cmVzdWx0OiByb2xsMWQ0KCksIHJlUm9sbEZsYWc6IGZhbHNlfTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJIYW5kLnB1c2gobmV3RGllKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJpZFBoYXNlKG9wcG9uZW50TmFtZSwgbGluZXMsIGNhbGxiYWNrRW5kLCBwcml6ZSk7XG4gICAgfSk7XG59XG4vLyBiaWRkaW5nIHBoYXNlXG5mdW5jdGlvbiBiaWRQaGFzZShvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpIHtcbi8vIHdyaXRlcyBhIG1lc3NhZ2UuIHlvdSByZXJvbGxlZCBkaWNlLiBhZnRlciByZS1yb2xscywgeW91ciBuZXcgaGFuZCBpczpcbiAgICBsZXQgcmVSb2xsTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpZiAoY3VycmVudEJpZC5udW1iZXJPZkRpY2UgPT0gMCkge1xuICAgICAgICB3aGlsZSAobWFpbl93aW5kb3cuZmlyc3RDaGlsZCkgeyBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZChtYWluX3dpbmRvdy5maXJzdENoaWxkKSB9O1xuICAgICAgICByZVJvbGxNZXNzYWdlLnRleHRDb250ZW50ID0gYFlvdSByZS1yb2xsIHNvbWUgZGljZS5gXG4gICAgICAgIGxldCByZVJvbGxNZXNzYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcmVSb2xsTWVzc2FnZTIudGV4dENvbnRlbnQgPSBgWW91ciBuZXcgaGFuZCBpczogJHtwbGF5ZXJIYW5kWzBdLnJlc3VsdH0sICR7cGxheWVySGFuZFsxXS5yZXN1bHR9LCAke3BsYXllckhhbmRbMl0ucmVzdWx0fSwgJHtwbGF5ZXJIYW5kWzNdLnJlc3VsdH0sICR7cGxheWVySGFuZFs0XS5yZXN1bHR9LCAke3BsYXllckhhbmRbNV0ucmVzdWx0fS4gVGltZSBmb3IgdGhlIGZpcnN0IGJsdWZmaW5nIHBoYXNlLmA7XG4gICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKHJlUm9sbE1lc3NhZ2UpO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChyZVJvbGxNZXNzYWdlMik7XG4gICAgICAgIHBsYXllckJsdWZmcyhvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlUm9sbE1lc3NhZ2UudGV4dENvbnRlbnQgPSBgWW91ciBoYW5kIGlzOiAke3BsYXllckhhbmRbMF0ucmVzdWx0fSwgJHtwbGF5ZXJIYW5kWzFdLnJlc3VsdH0sICR7cGxheWVySGFuZFsyXS5yZXN1bHR9LCAke3BsYXllckhhbmRbM10ucmVzdWx0fSwgJHtwbGF5ZXJIYW5kWzRdLnJlc3VsdH0sICR7cGxheWVySGFuZFs1XS5yZXN1bHR9LiBEbyB5b3Ugd2FudCB0byBibHVmZiwgb3IgYWNjdXNlIHRoZSBvcHBvbmVudD9gO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChyZVJvbGxNZXNzYWdlKTtcbiAgICAgICAgLy8gZGVjaWRlIHdoYXQgdG8gZG8gaGVyZSFcbiAgICAgICAgbGV0IHdoYXRUb0RvQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZCh3aGF0VG9Eb0J1dHRvbnMpO1xuICAgICAgICBsZXQgYmx1ZmZCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYmx1ZmZCdXR0b24udGV4dENvbnRlbnQgPSAnQmx1ZmYnO1xuICAgICAgICBibHVmZkJ1dHRvbi5zdHlsZS5tYXJnaW5SaWdodCA9ICc1cHgnO1xuICAgICAgICB3aGF0VG9Eb0J1dHRvbnMuYXBwZW5kQ2hpbGQoYmx1ZmZCdXR0b24pO1xuICAgICAgICBsZXQgYWNjdXNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFjY3VzZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdBY2N1c2UnO1xuICAgICAgICB3aGF0VG9Eb0J1dHRvbnMuYXBwZW5kQ2hpbGQoYWNjdXNlQnV0dG9uKTtcbiAgICAgICAgYmx1ZmZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZCh3aGF0VG9Eb0J1dHRvbnMpO1xuICAgICAgICAgICAgcGxheWVyQmx1ZmZzKG9wcG9uZW50TmFtZSwgbGluZXMsIGNhbGxiYWNrRW5kLCBwcml6ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBhY2N1c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZCh3aGF0VG9Eb0J1dHRvbnMpO1xuICAgICAgICAgICAgYWNjdXNhdGlvbi5hY2N1c2VyID0gJ1BsYXllcic7XG4gICAgICAgICAgICBhY2N1c2F0aW9uLm51bWJlck9mRGljZSA9IGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlO1xuICAgICAgICAgICAgYWNjdXNhdGlvbi5kb3RzID0gY3VycmVudEJpZC5kb3RzO1xuICAgICAgICAgICAgbGV0IGdhbWVSZXN1bHQgPSBjYWxsT3V0KCk7XG4gICAgICAgICAgICBnYW1lRW5kKGdhbWVSZXN1bHQsIG9wcG9uZW50TmFtZSwgbGluZXMsIGNhbGxiYWNrRW5kLCBwcml6ZSk7ICAgIFxuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBwbGF5ZXJCbHVmZnMob3Bwb25lbnROYW1lLCBsaW5lcywgY2FsbGJhY2tFbmQsIHByaXplKSB7XG4gICAgLy8gY3JlYXRlcyBhIGRyb3Bkb3duIGZvcm0gdG8gYmx1ZmY6IFwiSSBoYXZlIFsxLzIvMy80XSBvZiBbMS8yLzMvNF1cIlxuICAgIGxldCBibHVmZkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoYmx1ZmZGb3JtKTtcbiAgICAvLyAtLS0gbnVtYmVyIG9mIGRpY2UgLS0tXG4gICAgbGV0IG51bWJlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBudW1iZXJMYWJlbC50ZXh0Q29udGVudCA9IGBJIGhhdmUgdGhpcyBtYW55Li4uYDtcbiAgICBudW1iZXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdudW1iZXJPZkRpY2UnKTtcbiAgICBibHVmZkZvcm0uYXBwZW5kQ2hpbGQobnVtYmVyTGFiZWwpO1xuICAgIGxldCBudW1iZXJTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBudW1iZXJTZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ251bWJlck9mRGljZScpO1xuICAgIG51bWJlclNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ251bWJlck9mRGljZScpO1xuICAgIGJsdWZmRm9ybS5hcHBlbmRDaGlsZChudW1iZXJTZWxlY3QpO1xuICAgIC8vIG9wdGlvbnMgZm9yIG51bWJlciBvZiBkaWNlXG4gICAgLy8gZHluYW1pY2FsbHkgY2FsY3VsYXRlIGhvdyBtYW55IG9wdGlvbnMgYXJlIGF2YWlsYWJsZVxuICAgIC8vIGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlID0gMlxuICAgIC8vIGN1cnJlbnRCaWQuZG90cyA9IDJcbiAgICAvLyBvcHRpb25zIHNob3VsZCBiZTogMiwgMywgNCwgNSwgNlxuICAgIC8vIG51bWJlck9mT3B0aW9ucyA9IDcgLSBjdXJyZW50QmlkLm51bWJlclxuICAgIC8vIHN0YXJ0ZXIoaSkgPSBjdXJyZW50QmlkLm51bWJlck9mRGljZVxuICAgIGlmIChjdXJyZW50QmlkLm51bWJlck9mRGljZSAhPT0gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gY3VycmVudEJpZC5udW1iZXJPZkRpY2U7IGkgPD0gNjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBpO1xuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpKTtcbiAgICAgICAgICAgIG51bWJlclNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBpO1xuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpKTtcbiAgICAgICAgICAgIG51bWJlclNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIC0tLSB3aGljaCBkb3RzIC0tLVxuICAgIGxldCBkb3RzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRvdHNMYWJlbC50ZXh0Q29udGVudCA9IGBvZiB0aGlzIGRpY2UuLi5gO1xuICAgIGRvdHNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkb3RzJyk7XG4gICAgYmx1ZmZGb3JtLmFwcGVuZENoaWxkKGRvdHNMYWJlbCk7XG4gICAgbGV0IGRvdHNTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBkb3RzU2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkb3RzJyk7XG4gICAgZG90c1NlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RvdHMnKTtcbiAgICBibHVmZkZvcm0uYXBwZW5kQ2hpbGQoZG90c1NlbGVjdCk7XG4gICAgLy8gb3B0aW9ucyBmb3IgZG90c1xuICAgIC8vIGR5bmFtaWNhbGx5IGNhbGN1bGF0ZSBudW1iZXIgb2YgZG90c1xuICAgIC8vIHRoaXMgaXMgb25seSBhIHByb2JsZW0gaWYgeW91J3JlIGJldHRpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIGRpY2UgYXMgdGhlIGN1cnJlbnQgYmlkXG4gICAgLy8gc28gdGhlIGNoZWNrIHNob3VsZCBub3QgZ28gaGVyZSwgYnV0IGF0IHN1Ym1pdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gYCR7aSsxfWA7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaSsxKTtcbiAgICAgICAgZG90c1NlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cbiAgICAvLyBmaW5hbCBzdWJtaXRcbiAgICBsZXQgYmx1ZmZTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGJsdWZmU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBibHVmZlN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0JsdWZmIScpO1xuICAgIGJsdWZmRm9ybS5hcHBlbmRDaGlsZChibHVmZlN1Ym1pdCk7XG4vLyBvbiBzdWJtaXQsIGNhbGxzIHRoZSBvcHBvbmVudFJlc3BvbnNlXG4gICAgYmx1ZmZGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIC8vIGNoZWNrIGZvciBkb3RzIGdvZXMgaGVyZVxuICAgICAgICBpZiAobnVtYmVyU2VsZWN0LnZhbHVlID09IGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlKSB7XG4gICAgICAgICAgICBpZiAoZG90c1NlbGVjdC52YWx1ZSA8PSBjdXJyZW50QmlkLmRvdHMpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY29sb3I6eWVsbG93Jyk7XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gYFtZb3UgY2FuIG9ubHkgYmlkIGhpZ2hlciB0aGFuIHlvdXIgb3Bwb25lbnQhXWA7XG4gICAgICAgICAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50QmlkID0geyBwbGF5ZXI6ICdwbGF5ZXInLCBudW1iZXJPZkRpY2U6IG51bWJlclNlbGVjdC52YWx1ZSwgZG90czogZG90c1NlbGVjdC52YWx1ZSB9O1xuICAgICAgICAgICAgICAgIHdoaWxlKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIHttYWluX3dpbmRvdy5yZW1vdmVDaGlsZChtYWluX3dpbmRvdy5maXJzdENoaWxkKX07XG4gICAgICAgICAgICAgICAgbGV0IGJpZE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgYmlkTWVzc2FnZS50ZXh0Q29udGVudCA9IGBZb3UgYmlkOiBcIkkgaGF2ZSAke2N1cnJlbnRCaWQubnVtYmVyT2ZEaWNlfSBvZiAke2N1cnJlbnRCaWQuZG90c30gZG90c1wiLmA7XG4gICAgICAgICAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoYmlkTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgb3Bwb25lbnRSZXNwb25zZShvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpOyAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjdXJyZW50QmlkID0geyBwbGF5ZXI6ICdwbGF5ZXInLCBudW1iZXJPZkRpY2U6IG51bWJlclNlbGVjdC52YWx1ZSwgZG90czogZG90c1NlbGVjdC52YWx1ZSB9O1xuICAgICAgICAgICAgd2hpbGUobWFpbl93aW5kb3cuZmlyc3RDaGlsZCkge21haW5fd2luZG93LnJlbW92ZUNoaWxkKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpfTtcbiAgICAgICAgICAgIGxldCBiaWRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgYmlkTWVzc2FnZS50ZXh0Q29udGVudCA9IGBZb3UgYmlkOiBcIkkgaGF2ZSAke2N1cnJlbnRCaWQubnVtYmVyT2ZEaWNlfSBvZiAke2N1cnJlbnRCaWQuZG90c30gZG90c1wiLmA7XG4gICAgICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChiaWRNZXNzYWdlKTtcbiAgICAgICAgICAgIG9wcG9uZW50UmVzcG9uc2Uob3Bwb25lbnROYW1lLCBsaW5lcywgY2FsbGJhY2tFbmQsIHByaXplKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8gNTAtNTAgZnVuY3Rpb25cbmZ1bmN0aW9uIGZpZnR5RmlmdHkoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAyKSArIDEpO1xufVxuZnVuY3Rpb24gb25lVGhpcmQoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAzKSArIDEpO1xufVxuLy8gb3Bwb25lbnQgcmVzcG9uc2VcbmZ1bmN0aW9uIG9wcG9uZW50UmVzcG9uc2Uob3Bwb25lbnROYW1lLCBsaW5lcywgY2FsbGJhY2tFbmQsIHByaXplKSB7XG4gICAgLy8gc2V0IGN1cnJlbnRCaWRcbiAgICAvLyBpZiBjdXJyZW50QmlkLm51bWJlck9mZGljZSA+IDIsIG9wcG9uZW50IGNhbGxzIGJsdWZmXG4gICAgLy8gZmlsbCB0aGUgYWNjdXNhdGlvbiBvYmplY3Qgd2l0aCAnb3Bwb25lbnQnLCBhbmQgJ2N1cnJlbnRCaWQnXG4gICAgaWYgKGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlID4gMikge1xuICAgICAgICBhY2N1c2F0aW9uID0geyBhY2N1c2VyOiAnb3Bwb25lbnQnLCBudW1iZXJPZkRpY2U6IGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlLCBkb3RzOiBjdXJyZW50QmlkLmRvdHMgfTtcbiAgICAgICAgbGV0IGFjY3VzZUxpbmVFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgYWNjdXNlTGluZUVudHJ5LnRleHRDb250ZW50ID0gYCR7b3Bwb25lbnROYW1lfTogXCIke2xpbmVzLmFjY3VzZUxpbmV9XCIuYDtcbiAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoYWNjdXNlTGluZUVudHJ5KTtcbiAgICAgICAgbGV0IGFjY3VzZUNvbnRpbnVlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFjY3VzZUNvbnRpbnVlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRpbnVlJztcbiAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoYWNjdXNlQ29udGludWVCdXR0b24pO1xuICAgICAgICBhY2N1c2VDb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1haW5fd2luZG93LnJlbW92ZUNoaWxkKGFjY3VzZUNvbnRpbnVlQnV0dG9uKTtcbiAgICAgICAgICAgIGxldCBnYW1lUmVzdWx0ID0gY2FsbE91dCgpO1xuICAgICAgICAgICAgZ2FtZUVuZChnYW1lUmVzdWx0LCBvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpOyAgICBcbiAgICAgICAgfSk7XG4gICAgLy8gaWYgY3VycmVudEJpZC5udW1iZXJPZmRpY2UgPTJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlID09IDIpIHtcbiAgICAvLyB0aGVuIDUwJSB0byBjYWxsIG91dCBhIGJsdWZmIGFueXdheVxuICAgICAgICBpZiAoZmlmdHlGaWZ0eSgpID09IDIpIHtcbiAgICAgICAgICAgIGFjY3VzYXRpb24gPSB7IGFjY3VzZXI6ICdvcHBvbmVudCcsIG51bWJlck9mRGljZTogY3VycmVudEJpZC5udW1iZXJPZkRpY2UsIGRvdHM6IGN1cnJlbnRCaWQuZG90cyB9O1xuICAgICAgICAgICAgbGV0IGFjY3VzZUxpbmVFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGFjY3VzZUxpbmVFbnRyeS50ZXh0Q29udGVudCA9IGAke29wcG9uZW50TmFtZX06IFwiJHtsaW5lcy5hY2N1c2VMaW5lfVwiLmA7XG4gICAgICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChhY2N1c2VMaW5lRW50cnkpO1xuICAgICAgICAgICAgbGV0IGFjY3VzZUNvbnRpbnVlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBhY2N1c2VDb250aW51ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250aW51ZSc7XG4gICAgICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChhY2N1c2VDb250aW51ZUJ1dHRvbik7XG4gICAgICAgICAgICBhY2N1c2VDb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZChhY2N1c2VDb250aW51ZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgbGV0IGdhbWVSZXN1bHQgPSBjYWxsT3V0KCk7XG4gICAgICAgICAgICAgICAgZ2FtZUVuZChnYW1lUmVzdWx0LCBvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpOyAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAvLyBpZiB0aGF0IGRvZXNuJ3QgdHJpZ2dlciwgdGhlIG9wcG9uZW50IGJpZHMgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHBvbmVudEJpZChvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3Bwb25lbnRCaWQob3Bwb25lbnROYW1lLCBsaW5lcywgY2FsbGJhY2tFbmQsIHByaXplKTtcbiAgICB9XG59XG5mdW5jdGlvbiBvcHBvbmVudEJpZChvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpIHtcbiAgICAvLyBvcHBvbmVudCBsb29rcyBhdCBvcHBvbmVudEhhbmQsIGlkZW50aWZ5aW5nIGlmIHRoZXJlIGFyZSBhbnkgcmVwZWF0c1xuICAgIGxldCBhbGxPcHBvbmVudDFzID0gb3Bwb25lbnRIYW5kLmZpbHRlcihpID0+IGkgPT0gMSk7XG4gICAgbGV0IGFsbE9wcG9uZW50MnMgPSBvcHBvbmVudEhhbmQuZmlsdGVyKGkgPT4gaSA9PSAyKTtcbiAgICBsZXQgYWxsT3Bwb25lbnQzcyA9IG9wcG9uZW50SGFuZC5maWx0ZXIoaSA9PiBpID09IDMpO1xuICAgIGxldCBhbGxPcHBvbmVudDRzID0gb3Bwb25lbnRIYW5kLmZpbHRlcihpID0+IGkgPT0gNCk7XG4gICAgbGV0IG9wcG9uZW50MXNPYmplY3QgPSB7IG51bWJlcjogYWxsT3Bwb25lbnQxcy5sZW5ndGgsIGRvdHM6IDEgfTtcbiAgICBsZXQgb3Bwb25lbnQyc09iamVjdCA9IHsgbnVtYmVyOiBhbGxPcHBvbmVudDJzLmxlbmd0aCwgZG90czogMiB9O1xuICAgIGxldCBvcHBvbmVudDNzT2JqZWN0ID0geyBudW1iZXI6IGFsbE9wcG9uZW50M3MubGVuZ3RoLCBkb3RzOiAzIH07XG4gICAgbGV0IG9wcG9uZW50NHNPYmplY3QgPSB7IG51bWJlcjogYWxsT3Bwb25lbnQ0cy5sZW5ndGgsIGRvdHM6IDQgfTtcbiAgICBsZXQgb3Bwb25lbnRPYmplY3RzID0gW29wcG9uZW50MXNPYmplY3QsIG9wcG9uZW50MnNPYmplY3QsIG9wcG9uZW50M3NPYmplY3QsIG9wcG9uZW50NHNPYmplY3RdO1xuICAgIGxldCBvcHBvbmVudE9iamVjdHNTb3J0ZWQgPSBvcHBvbmVudE9iamVjdHMuc29ydCgoYSwgYikgPT4gKGEubnVtYmVyID4gYi5udW1iZXIpID8gLTEgOiAxKTtcbiAgICBjb25zb2xlLmxvZyhvcHBvbmVudE9iamVjdHNTb3J0ZWQpO1xuICAgIC8vIG5lZWRzIHRvIGNoZWNrIGN1cnJlbnRCaWQsIG9wcG9uZW50J3MgYmlkIGNhbm5vdCBiZSBsb3dlciBudW1iZXIgb2YgZGljZS4gY2FuIGJlIGVxdWFsLCBidXQgdGhlbiB0aGUgZG90cyBzaG91bGQgYmUgaGlnaGVyXG4gICAgLy8gaW5pdGlhbGl6ZSB0ZW1wb3Jhcnkgb3Bwb25lbnRCaWQgdmFyIGZvciBjYWxjdWxhdGlvbiBwdXJwb3Nlc1xuICAgIGxldCB0ZW1wb3JhcnlPcHBvbmVudEJpZCA9IHtwbGF5ZXI6ICdvcHBvbmVudCcsIG51bWJlck9mRGljZTogMCwgZG90czogMH07XG4gICAgLy8gZmlyc3QsIHdlIGNhbGN1bGF0ZSB3aGF0IHRoZSBvcHBvbmVudCB3b3VsZCBoYXZlIGJldCBpbiBhIHZhY3V1bSBcbiAgICAvLyBpdCdzIGFsd2F5cyB0aGUgc2FtZSBkb3RzXG4gICAgdGVtcG9yYXJ5T3Bwb25lbnRCaWQuZG90cyA9IG9wcG9uZW50T2JqZWN0c1NvcnRlZFswXS5kb3RzO1xuICAgIC8vIDUwJSBpdCdzIG51bWJlck9mRGljZSB0aGV5IGhhdmUgYW5kIDUwJSBudW1iZXJvZkRpY2UrMSBbY2hhbmdlZCB0byAzMyUgdG8gZ28gLTEsICsxIG9yIGVxdWFsXVxuICAgIGxldCBjaGFuY2UgPSBvbmVUaGlyZCgpO1xuICAgIGlmIChjaGFuY2UgPT0gMSkge1xuICAgICAgICB0ZW1wb3JhcnlPcHBvbmVudEJpZC5udW1iZXJPZkRpY2UgPSBvcHBvbmVudE9iamVjdHNTb3J0ZWRbMF0ubnVtYmVyO1xuICAgIH0gZWxzZSBpZiAoY2hhbmNlID09IDIpIHtcbiAgICAgICAgdGVtcG9yYXJ5T3Bwb25lbnRCaWQubnVtYmVyT2ZEaWNlID0gb3Bwb25lbnRPYmplY3RzU29ydGVkWzBdLm51bWJlciArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGVtcG9yYXJ5T3Bwb25lbnRCaWQubnVtYmVyT2ZEaWNlID0gb3Bwb25lbnRPYmplY3RzU29ydGVkWzBdLm51bWJlciAtMTtcbiAgICB9XG4gICAgLy8gbm93IHdlIGNoZWNrIHRoZSBvcHBvbmVudCdzIHdhbnRlZCBiaWQgdmVyc3VzIGlsbGVnYWwgc2NlbmFyaW9zXG4gICAgaWYgKGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlID4gdGVtcG9yYXJ5T3Bwb25lbnRCaWQubnVtYmVyT2ZEaWNlKSB7XG4gICAgICAgIC8vIGNoZWNrIGlmIGRvdHMgYXJlIGhpZ2hlclxuICAgICAgICBpZiAodGVtcG9yYXJ5T3Bwb25lbnRCaWQuZG90cyA+IGN1cnJlbnRCaWQuZG90cykge1xuICAgICAgICAgICAgLy8gaWYgaSBiaWQgMyBkaWNlIG9mIDEgZG90cyBhbmQgb3Bwb25lbnQgd2FudHMgdG8gYmlkIDIgZGljZSBvZiAyIGRvdHNcbiAgICAgICAgICAgIC8vIHRoaXMgdHJpZ2dlcnMsIG51bWJlciBvZiBkaWNlIElTIGhpZ2hlclxuICAgICAgICAgICAgLy8gb3Bwb25lbnQgc2hvdWxkIGJpZCAzIGRpY2Ugb2YgMiBkb3RzXG4gICAgICAgICAgICB0ZW1wb3JhcnlPcHBvbmVudEJpZC5udW1iZXJPZkRpY2UgPSBjdXJyZW50QmlkLm51bWJlck9mRGljZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIGkgYmlkIDMgZGljZSBvZiA0IGRvdHMgYW5kIG9wcG9uZW50IHdhbnRzIHRvIGJpZCAyIGRpY2Ugb2YgMiBkb3RzXG4gICAgICAgICAgICAvLyBpZiBvcHBvbmVudCdzIG5leHQgaGlnaGVzdCBkb3RzID4gY3VycmVudEJpZC5kb3RzXG4gICAgICAgICAgICBpZiAob3Bwb25lbnRPYmplY3RzU29ydGVkWzFdLmRvdHMgPiBjdXJyZW50QmlkLmRvdHMpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGVuIDUwLTUwOiBzYW1lIG51bWJlck9mRGljZSBidXQgd2l0aCBzZWNvbmQgaGlnaGVzdCBkb3RzXG4gICAgICAgICAgICAgICAgLy8gYW5kIDQgZGljZSBvZiAyIGRvdHNcbiAgICAgICAgICAgICAgICBpZiAoZmlmdHlGaWZ0eSgpID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcG9yYXJ5T3Bwb25lbnRCaWQuZG90cyA9IG9wcG9uZW50T2JqZWN0c1NvcnRlZFsxXS5kb3RzO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wb3JhcnlPcHBvbmVudEJpZC5udW1iZXJPZkRpY2UgPSBjdXJyZW50QmlkLm51bWJlck9mRGljZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wb3JhcnlPcHBvbmVudEJpZC5udW1iZXJPZkRpY2UgPSBjdXJyZW50QmlkLm51bWJlck9mRGljZSArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBub3QsIHRoZW4ganVzdCA0IGRpY2Ugb2YgMiBkb3RzXG4gICAgICAgICAgICAgICAgdGVtcG9yYXJ5T3Bwb25lbnRCaWQubnVtYmVyT2ZEaWNlID0gY3VycmVudEJpZC5udW1iZXJPZkRpY2UgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChjdXJyZW50QmlkLm51bWJlck9mRGljZSA9PSB0ZW1wb3JhcnlPcHBvbmVudEJpZC5udW1iZXJPZkRpY2UpIHtcbiAgICAgICAgLy8gc28gaWYgbXkgYmV0IGlzIDIgZGljZSAyIGRvdHMgYW5kIG9wcG9uZW50IHdhbnRzIHRvIGJldCAyIGRpY2UgMyBkb3RzXG4gICAgICAgIC8vIHRoZW4gaXRzIGZpbmVcbiAgICAgICAgaWYgKHRlbXBvcmFyeU9wcG9uZW50QmlkLmRvdHMgPD0gY3VycmVudEJpZC5kb3RzKSB7XG4gICAgICAgICAgICAvLyBidXQgaWYgb3Bwb25lbnQgd2FudHMgdG8gYmlkIDIgZGljZSAyIGRvdHMgb3IgMiBkaWNlIDEgZG90XG4gICAgICAgICAgICB0ZW1wb3JhcnlPcHBvbmVudEJpZC5udW1iZXJPZkRpY2UgPSBjdXJyZW50QmlkLm51bWJlck9mRGljZSArIDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gbm93IG1ha2UgdGhlIG9wcG9uZW50QmlkIHRoZSBjdXJyZW50QmlkXG4gICAgY3VycmVudEJpZCA9IHRlbXBvcmFyeU9wcG9uZW50QmlkO1xuICAgIC8vIHRoZW4gdGhleSBzYXkgb25lIG9mIHRoZWlyICdiZXR0aW5nbGluZXMnIChhZGQgdGhhdCkgXG4gICAgbGV0IGJsdWZmTGluZTFFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBibHVmZkxpbmUxRW50cnkudGV4dENvbnRlbnQgPSBgJHtvcHBvbmVudE5hbWV9OiBcIiR7bGluZXMuYmx1ZmZMaW5lfVwiLmA7XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoYmx1ZmZMaW5lMUVudHJ5KTtcbiAgICBsZXQgYmx1ZmZMaW5lMkVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJsdWZmTGluZTJFbnRyeS50ZXh0Q29udGVudCA9IGBcIkkgcm9sbGVkICR7Y3VycmVudEJpZC5udW1iZXJPZkRpY2V9IGRpY2Ugd2l0aCAke2N1cnJlbnRCaWQuZG90c30gZG90cy5cImA7ICAgIFxuICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGJsdWZmTGluZTJFbnRyeSk7XG4gICAgLy8gcmUtYmlkLCBidXQgY2FuIG9ubHkgZG8gaGlnaGVyIG5vdyFcbiAgICBiaWRQaGFzZShvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpO1xuICAgIC8vIHRob3VnaHRzIG9uIHJlLWJpZGRpbmc6IHJldXNlIHRoZSBzYW1lIGZ1bmN0aW9uIGZsb3dcbiAgICAvLyBpbnRyb2R1Y2UgYSBsaW1pdCBvbiB3aGF0IHRoZSBwbGF5ZXIgY2FuIGJpZFxuICAgIC8vIGJ1dCB0aGUgbGltaXRzIGRvbid0IHdvcmsgaWYgY3VycmVudEJpZCBpcyBlbXB0eVxufVxuLy8gY2FsbGluZyBvdXQgYSBibHVmZlxuZnVuY3Rpb24gY2FsbE91dCgpIHtcbiAgICAvLyBpZiBhY2N1c2F0aW9uLmFjY3VzZXIgPSBwbGF5ZXIsIGNoZWNrcyBvcHBvbmVudEhhbmQsIGlmIGFjY3VzYXRpb24uYWNjdXNlciA9IG9wcG9uZW50LCBjaGVja3MgcGxheWVySGFuZFxuICAgIC8vIHRoZXNlIGFyZSBzZXQgdXAgZGlmZmVyZW50bHksIHNvIGRpZmZlcmVudCBjYWxjdWxhdGlvbnNcbiAgICBpZiAoYWNjdXNhdGlvbi5hY2N1c2VyID09ICdvcHBvbmVudCcpIHtcbiAgICAgICAgLy8gcGxheWVySGFuZCA9IFtkaWUxLCAuLi5dXG4gICAgICAgIC8vIGRpZTEgPSB7cmVzdWx0OiAwLCAuLi59XG4gICAgICAgIGxldCBhbGxDb3JyZWN0RG90cyA9IHBsYXllckhhbmQuZmlsdGVyKGkgPT4gKGkucmVzdWx0ID09IGFjY3VzYXRpb24uZG90cykpO1xuICAgICAgICBjb25zb2xlLmxvZyhgQUxMIENPUlJFQ1QgRE9UUzogJHthbGxDb3JyZWN0RG90c31gKTtcbiAgICAgICAgY29uc29sZS5sb2coYEFDQ1VTQVRJT04gRE9UUzogJHthY2N1c2F0aW9uLmRvdHN9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBQ0NVU0FUSU9OIE5VTUJFUiBPRiBESUNFOiAke2FjY3VzYXRpb24ubnVtYmVyT2ZEaWNlfWApO1xuICAgICAgICBpZiAoYWxsQ29ycmVjdERvdHMubGVuZ3RoID49IGFjY3VzYXRpb24ubnVtYmVyT2ZEaWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3BsYXllcldpbnMnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdvcHBvbmVudFdpbnMnO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gb3Bwb25lbnRIYW5kID0gWzEsIDMsIDQsIDEsIDMsIDJdXG4gICAgICAgIGxldCBhbGxDb3JyZWN0RG90cyA9IG9wcG9uZW50SGFuZC5maWx0ZXIoaSA9PiAoaSA9PSBhY2N1c2F0aW9uLmRvdHMpKTtcbiAgICAgICAgY29uc29sZS5sb2coYEFMTCBDT1JSRUNUIERPVFM6ICR7YWxsQ29ycmVjdERvdHN9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBQ0NVU0FUSU9OIERPVFM6ICR7YWNjdXNhdGlvbi5kb3RzfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgQUNDVVNBVElPTiBOVU1CRVIgT0YgRElDRTogJHthY2N1c2F0aW9uLm51bWJlck9mRGljZX1gKTtcbiAgICAgICAgaWYgKGFsbENvcnJlY3REb3RzLmxlbmd0aCA+PSBhY2N1c2F0aW9uLm51bWJlck9mRGljZSkge1xuICAgICAgICAgICAgcmV0dXJuICdvcHBvbmVudFdpbnMnOyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAncGxheWVyV2lucyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY2hlY2tzIHRoYXQgcGxheWVyL29wcG9uZW50SGFuZC5pbmNsdWRlcyB0aGUgaW50ZWdlciBlcXVhbGluZyB0byB0aGUgJ2RvdHMnXG4gICAgLy8gbG9vcHMgdGhyb3VnaCB0aGUgY2hlY2sgYSBudW1iZXIgb2YgdGltZXMgPSBudW1iZXJPZkRpY2VcbiAgICAvLyBpZiBhbGwgdHJ1ZSwgYWNjdXNhdGlvbi5hY2N1c2VyIGlzIHRoZSBsb3NlclxuICAgIC8vIHJldHVybnMgYSB3aW5uZXJcbn1cbi8vIGVuZGluZyB0aGUgZ2FtZVxuZnVuY3Rpb24gZ2FtZUVuZChyZXN1bHQsIG9wcG9uZW50TmFtZSwgbGluZXMsIGNhbGxiYWNrRW5kLCBwcml6ZSkge1xuICAgIC8vIGEgbWVzc2FnZSwgd2hvIGlzIGJlaW5nIGFjY3VzZWQgYW5kIHdoYXQgYXJlIHRoZXkgYmVpbmcgYWNjdXNlZCBvZlxuICAgIGxldCBnYW1lRW5kRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaWYgKGFjY3VzYXRpb24uYWNjdXNlciA9PSAnUGxheWVyJykge1xuICAgICAgICBnYW1lRW5kRW50cnkudGV4dENvbnRlbnQgPSBgQWNjdXNhdGlvbiEgWW91IGFuZCAke29wcG9uZW50TmFtZX0gY2hlY2sgdGhlIGJsdWZmLiBZb3VyIG9wcG9uZW50IGlzIHRoZSBibHVmZmVyLiBUaGV5IHNhaWQgdGhleSBoYXZlICR7YWNjdXNhdGlvbi5udW1iZXJPZkRpY2V9IG9mICR7YWNjdXNhdGlvbi5kb3RzfSBkb3RzLiBUaW1lIHRvIHNlZSBpZiB0aGV5J3JlIGJsdWZmaW5nLmBcbiAgICB9IGVsc2Uge1xuICAgICAgICBnYW1lRW5kRW50cnkudGV4dENvbnRlbnQgPSBgQWNjdXNhdGlvbiEgWW91IGFuZCAke29wcG9uZW50TmFtZX0gY2hlY2sgdGhlIGJsdWZmLiBZb3UgYXJlIHRoZSBibHVmZmVyLiBZb3Ugc2FpZCB0aGF0IHlvdSd2ZSBnb3QgJHthY2N1c2F0aW9uLm51bWJlck9mRGljZX0gb2YgJHthY2N1c2F0aW9uLmRvdHN9IGRvdHMuICR7b3Bwb25lbnROYW1lfSBjaGVja3MgaWYgeW91J3JlIGJsdWZmaW5nLmBcbiAgICB9XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoZ2FtZUVuZEVudHJ5KTtcbiAgICBsZXQgY29udGludWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250aW51ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMZXQgdXMgZmluZCBvdXQnXG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoY29udGludWVCdXR0b24pO1xuICAgIGNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZChjb250aW51ZUJ1dHRvbik7XG4gICAgICAgIGdhbWVFbmQyKHJlc3VsdCwgb3Bwb25lbnROYW1lLCBsaW5lcywgY2FsbGJhY2tFbmQsIHByaXplKTtcbiAgICB9KVxufVxuZnVuY3Rpb24gZ2FtZUVuZDIocmVzdWx0LCBvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpIHtcbiAgICBsZXQgb3Bwb25lbnRFbmRMaW5lRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaWYgKHJlc3VsdCA9PSAncGxheWVyV2lucycpIHtcbiAgICAgICAgbGV0IGdhbWVSZXN1bHRFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZ2FtZVJlc3VsdEVudHJ5LnRleHRDb250ZW50ID0gJ0FuZC4uLi4gWW91IHdpbiEnO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChnYW1lUmVzdWx0RW50cnkpO1xuICAgICAgICBvcHBvbmVudEVuZExpbmVFbnRyeS50ZXh0Q29udGVudCA9IGAke29wcG9uZW50TmFtZX06IFwiJHtsaW5lcy5sb3NlTGluZX0uXCJgXG4gICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKG9wcG9uZW50RW5kTGluZUVudHJ5KTtcbiAgICAgICAgY2FsbGJhY2tFbmQoJ3dpbicsIHByaXplKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZ2FtZVJlc3VsdEVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBnYW1lUmVzdWx0RW50cnkudGV4dENvbnRlbnQgPSBgQW5kLi4uLiAke29wcG9uZW50TmFtZX0gd2lucyFgO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChnYW1lUmVzdWx0RW50cnkpO1xuICAgICAgICBvcHBvbmVudEVuZExpbmVFbnRyeS50ZXh0Q29udGVudCA9IGAke29wcG9uZW50TmFtZX06IFwiJHtsaW5lcy53aW5MaW5lfS5cImBcbiAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQob3Bwb25lbnRFbmRMaW5lRW50cnkpO1xuICAgICAgICBjYWxsYmFja0VuZCgnbG9zZScsIHByaXplKTtcbiAgICB9XG4gICAgLy8gc2F5aW5nIHRoZSAnd2luTGluZScgb3IgJ2xvc2VMaW5lJyAgXG4gICAgLy8ga2VlcCB0cmFjayBvZiBnb2xkIVxuICAgIC8vIHNob3cgZ29sZCBpbiB0aGUgaW52ZW50b3J5XG4gICAgLy8gd2luIG9yIGxvc2UgYSBzZXQgW0ZPUiBOT1ddIG51bWJlciBvZiBnb2xkXG4gICAgLy8gZ29sZCBjb3VsZCBiZSBzcGVudCBvbiBidXlpbmcgZXF1aXBtZW50XG59XG5leHBvcnQge1xuICAgIHBsYXllckhhbmQsIG9wcG9uZW50SGFuZCwgY3VycmVudEJpZCwgYWNjdXNhdGlvbiwgZXhhbXBsZUxpbmVzLCBkaWUxLCBkaWUyLCBkaWUzLCBkaWU0LCBkaWU1LCBkaWU2LCBzdGFydERpY2VHYW1lLCBmYWxzZUN1YmVzLCByb2xsNmQ0UGxheWVyLCByb2xsNmQ0T3Bwb25lbnQsIHJvbGwxZDQsIHJvbGxQaGFzZSwgYmlkUGhhc2UsIGZpZnR5RmlmdHksIG9uZVRoaXJkLCBvcHBvbmVudFJlc3BvbnNlLCBvcHBvbmVudEJpZCwgY2FsbE91dCwgZ2FtZUVuZFxufSIsImNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuXG5jb25zdCBldmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZXZlbnRFbWl0dGVyOyIsIi8vIGltcG9ydDogY2hhcjEsIGNsYXNzZXNcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGJnSW1nIGZyb20gJy4vYmcuanBnJztcbmltcG9ydCB7IGNoYXIxIH0gZnJvbSAnLi9jb21wX29iamVjdHNfYW5kX21ldGhvZHMnO1xuXG4vLyBpbml0aWFsaXplIHNwYWNlcyBhbmQgYnV0dG9uc1xubGV0IHRvcF9iYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wX2JhcicpO1xubGV0IGxvZ193aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nJyk7XG5sZXQgbWFpbl93aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl93aW5kb3cnKTtcbmxldCBpbWFnZV93aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2Vfd2luZG93Jyk7XG5sZXQgbWVudV93aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xubGV0IGJ1dHRvbl93aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX3dpbmRvdycpO1xubGV0IGF0dGFja19idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXR0YWNrQnV0dG9uJyk7XG5sZXQgc3BlY2lhbF9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BlY2lhbEJ1dHRvbicpO1xubGV0IGludmVudG9yeV9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW52ZW50b3J5QnV0dG9uJyk7XG5sZXQgc3RhdHNfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXRzQnV0dG9uJyk7XG4vL2RyYXcgcGxheWVyIHN0YXRzXG5tZW51X3dpbmRvdy50ZXh0Q29udGVudCA9IGBZb3UgYXJlICR7Y2hhcjEubmFtZX0uIFlvdXIgY2xhc3MgaXMgdW5rbm93bi4gWW91ciBhcm1vciBjbGFzcyBpcyAke2NoYXIxLmFybW9yQ2xhc3N9LiBZb3VyIEhQIGlzICR7Y2hhcjEuY3VycmVudEhQfS8ke2NoYXIxLm1heEhQfS5gO1xuLy8gZGlhbG9nIHJlbW92ZXJcbmZ1bmN0aW9uIGRpYWxvZ0FuaW1hdGlvbkVuZChldmVudCkge1xuICAgIGxldCBkaWFsb2cgPSBldmVudCAmJiBldmVudC50YXJnZXQgPyBldmVudC50YXJnZXQgOiBldmVudDtcbiAgICBpZiAoZGlhbG9nLnRhZ05hbWUgPT0gJ0RJQUxPRycpIHtcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGlhbG9nLnJlbW92ZSgpO1xuICAgIH1cbiAgICBkaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIGRpYWxvZy5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBkaWFsb2dBbmltYXRpb25FbmQpO1xufVxuLy8tLS1tYWluIG1lbnUtLS1cbmxldCBtYWluTWVudURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xubWFpbk1lbnVEaWFsb2cuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2hlaWdodDo3NSU7d2lkdGg6MTAwJTt6LWluZGV4OjEwMDA7b3ZlcmZsb3c6aGlkZGVuOycpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluTWVudURpYWxvZyk7XG5tYWluTWVudURpYWxvZy5pbm5lckhUTUwgPSBcbmBcbjxkaXYgY2xhc3M9J21haW5NZW51Q29udGFpbmVyJz5cbiAgICA8ZGl2IHN0eWxlPSdkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjtib3JkZXItYm90dG9tOjVweCBzb2xpZCBzaWx2ZXInPlxuICAgICAgICA8aDEgc3R5bGU9J21hcmdpbi1ib3R0b206IDVweDsnPldoYXQgTWFrZXMgWW91IExpdmU/PC9oMT5cbiAgICA8L2Rpdj5cbiAgICA8aDEgc3R5bGU9J3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1ib3R0b206LTIwcHg7Jz5NYWluIE1lbnU8L2gyPiAgIFxuICAgIDxkaXYgY2xhc3M9J21haW5NZW51JyBzdHlsZT0nZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW4tdG9wOjUwcHg7Jz5cbiAgICAgICAgPGJ1dHRvbiBpZD0nc3RhcnRHYW1lQnV0dG9uJyBzdHlsZT0nZGlzcGxheTpibG9jazttYXJnaW46MCBhdXRvOyBib3JkZXI6IDNweCBzb2xpZCBzaWx2ZXI7IGJvcmRlci1yYWRpdXM6IDVweDsgbWFyZ2luLWJvdHRvbToyMHB4O3dpZHRoOjI1MHB4Oyc+U3RhcnQgZ2FtZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPSdzZXR0aW5nc0J1dHRvbicgc3R5bGU9J2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgYXV0bzsgYm9yZGVyOiAzcHggc29saWQgc2lsdmVyOyBib3JkZXItcmFkaXVzOiA1cHg7IG1hcmdpbi1ib3R0b206MjBweDt3aWR0aDoyNTBweDsnPlNldHRpbmdzPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9J2Fib3V0QnV0dG9uJyBzdHlsZT0nZGlzcGxheTpibG9jazttYXJnaW46MCBhdXRvOyBib3JkZXI6IDNweCBzb2xpZCBzaWx2ZXI7IGJvcmRlci1yYWRpdXM6IDVweDsgbWFyZ2luLWJvdHRvbToyMHB4O3dpZHRoOjI1MHB4Oyc+QWJvdXQgdGhlIGNyZWF0b3I8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD0nY29udGFjdEJ1dHRvbicgc3R5bGU9J2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgYXV0bzsgYm9yZGVyOiAzcHggc29saWQgc2lsdmVyOyBib3JkZXItcmFkaXVzOiA1cHg7IG1hcmdpbi1ib3R0b206MDt3aWR0aDoyNTBweDsnPkNvbnRhY3QgbWU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8YnI+XG4gICAgPHAgc3R5bGU9J2NvbG9yOndoaXRlO2ZvbnQtc2l6ZTo4MCU7Jz48aT5Ob3RlOiBJZiB5b3UgcGxheSBvbiBtb2JpbGUsIHNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gdG8gc2VlIHRoZSBhY3Rpb24gYnV0dG9ucy48L2k+PC9wPlxuPC9kaXY+XG4gICAgYFxubWFpbk1lbnVEaWFsb2cuc2hvd01vZGFsKCk7XG5cbmxldCBibGFja01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJsYWNrTWVudS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGJhY2tncm91bmQtY29sb3I6YmxhY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTt6LWluZGV4OjUwMDtvdmVyZmxvdzpoaWRkZW47YCk7XG5sZXQgYmdNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5iZ01lbnUuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO29wYWNpdHk6MC41O2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiJHtiZ0ltZ31cIik7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7YmFja2dyb3VuZC1zaXplOmNvdmVyO292ZXJmbG93OmhpZGRlbjtgKTtcbmJsYWNrTWVudS5hcHBlbmRDaGlsZChiZ01lbnUpO1xubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChibGFja01lbnUpO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG5sZXQgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnRHYW1lQnV0dG9uJyk7XG5sZXQgbWFpbk1lbnVDbG9zZWQgPSBmYWxzZTs7XG5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWluTWVudURpYWxvZy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgbWFpbk1lbnVEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICBkaWFsb2dBbmltYXRpb25FbmQobWFpbk1lbnVEaWFsb2cpO1xuICAgICAgICBtYWluTWVudUNsb3NlZCA9IHRydWU7XG4gICAgICAgIGNoZWNrQW5pbWF0aW9uQ29tcGxldGUoKTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gY2hlY2tBbmltYXRpb25Db21wbGV0ZSgpIHtcbiAgICBpZiAobWFpbk1lbnVDbG9zZWQpIHtcbiAgICAgICAgYmxhY2tNZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgYmxhY2tNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGRpYWxvZ0FuaW1hdGlvbkVuZCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7ICAgIFxuICAgIH1cbn1cbi8vIGV4cG9ydCBzcGFjZXMgYW5kIGJ1dHRvbnNcbmV4cG9ydCB7XG4gICAgdG9wX2JhcixcbiAgICBsb2dfd2luZG93LFxuICAgIG1haW5fd2luZG93LFxuICAgIGltYWdlX3dpbmRvdyxcbiAgICBtZW51X3dpbmRvdyxcbiAgICBidXR0b25fd2luZG93LFxuICAgIGF0dGFja19idXR0b24sXG4gICAgc3BlY2lhbF9idXR0b24sXG4gICAgaW52ZW50b3J5X2J1dHRvbixcbiAgICBzdGF0c19idXR0b24sXG4gICAgZGlhbG9nQW5pbWF0aW9uRW5kXG59IiwiLy8gaW1wb3J0OiBodWQsIGNoYXIxLCBtZW51VXBkYXRlcixcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHsgXG4gICAgbWVudV93aW5kb3csXG4gICAgaW52ZW50b3J5X2J1dHRvbixcbiAgICBkaWFsb2dBbmltYXRpb25FbmRcbn0gZnJvbSAnLi9jb21wX2h1ZCc7XG5pbXBvcnQgeyBcbiAgICBtZW51VXBkYXRlciwgXG4gICAgY2hhcjEgXG59IGZyb20gJy4vY29tcF9vYmplY3RzX2FuZF9tZXRob2RzJztcblxuLy8gLS0taW52ZW50b3J5IHN5c3RlbS0tLVxuLy8gY3JlYXRlIGEgZGlhbG9nIHdpbmRvdyB3aGVuIHdlIGNsaWNrIG9uIGludmVudG9yeVxubGV0IGludmVudG9yeURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuaW52ZW50b3J5RGlhbG9nLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdtYXgtd2lkdGg6NTAwcHg7JylcbmludmVudG9yeURpYWxvZy5pbm5lckhUTUwgPSBgXG4gICAgPGJ1dHRvbiBpZD0nY2xvc2VCdXR0b24nPkNsb3NlPC9idXR0b24+XG4gICAgPGRpdiBpZD0naW52ZW50b3J5Qm94Jz5cbiAgICAgICAgPGgyPkludmVudG9yeTwvaDI+XG4gICAgICAgIDxkaXYgaWQ9J2VxdWlwcGVkQm94Jz5cbiAgICAgICAgICAgIEVxdWlwcGVkIHdlYXBvbjogPHNwYW4gaWQ9J2VxdWlwcGVkV2VhcG9uQm94Jz48L3NwYW4+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICBFcXVpcHBlZCBhcm1vcjogPHNwYW4gaWQ9J2VxdWlwcGVkQXJtb3JCb3gnPjwvc3Bhbj5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIEVxdWlwcGVkIG1pc2M6IDxzcGFuIGlkPSdlcXVpcHBlZE1pc2NCb3gnPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGJyPlxuICAgICAgICBHb2xkOiA8c3BhbiBpZD0nZ29sZEJveCc+PC9zcGFuPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxkaXYgaWQ9J2FsbEJveCc+XG4gICAgICAgICAgICBCYWc6XG4gICAgICAgICAgICA8dWwgaWQ9J2FsbExpc3QnPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnZlbnRvcnlEaWFsb2cpO1xuaW52ZW50b3J5X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpbnZlbnRvcnlEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgbGV0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlQnV0dG9uJyk7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGludmVudG9yeURpYWxvZy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGludmVudG9yeURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBkaWFsb2dBbmltYXRpb25FbmQpO1xuICAgIH0pXG59KVxuLy8gZ29sZCBzeXN0ZW1cbmxldCBwbGF5ZXJHb2xkID0gMDtcbmxldCBnb2xkQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvbGRCb3gnKTtcbmdvbGRCb3gudGV4dENvbnRlbnQgPSBwbGF5ZXJHb2xkO1xuZnVuY3Rpb24gYWRkR29sZChhbW91bnQpIHtcbiAgICBwbGF5ZXJHb2xkICs9IGFtb3VudDtcbiAgICBnb2xkQm94LnRleHRDb250ZW50ID0gcGxheWVyR29sZDtcbn1cbi8vIGdyYWIgZWxlbWVudHMgZnJvbSBkaWFsb2dcbmxldCBlcXVpcHBlZFdlYXBvbkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcXVpcHBlZFdlYXBvbkJveCcpO1xubGV0IGVxdWlwcGVkQXJtb3JCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXF1aXBwZWRBcm1vckJveCcpO1xubGV0IGVxdWlwcGVkTWlzY0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcXVpcHBlZE1pc2NCb3gnKTtcbmxldCBhbGxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbExpc3QnKVxuLy8gd2hlbiBhbiBvYmplY3QgaXMgZ3JhYmJlZFxuZnVuY3Rpb24gZ3JhYkl0ZW0oaXRlbSkge1xuICAgIGNoYXIxLmludmVudG9yeS5wdXNoKGl0ZW0pO1xuICAgIGxldCBpdGVtQnVsbGV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGl0ZW1CdWxsZXQudGV4dENvbnRlbnQgPSBgJHtpdGVtLm5hbWV9LCAke2l0ZW0udHlwZX0uIEF0dGFjayBib251czogJHtpdGVtLml0ZW1BdHRhY2t9LiBBcm1vciBib251czogJHtpdGVtLml0ZW1Bcm1vcn0uYFxuICAgIGFsbExpc3QuYXBwZW5kQ2hpbGQoaXRlbUJ1bGxldCk7XG4gICAgaWYgKGl0ZW0udHlwZSAhPT0gJ3F1ZXN0IGl0ZW0nKSB7XG4gICAgICAgIGxldCBlcXVpcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlcXVpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVxdWlwSXRlbShpdGVtKSk7XG4gICAgICAgIGVxdWlwQnV0dG9uLnRleHRDb250ZW50ID0gJ0VxdWlwJztcbiAgICAgICAgZXF1aXBCdXR0b24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdmb250LXNpemU6IDcwJTsnKTtcbiAgICAgICAgZXF1aXBCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGAke2l0ZW0uaWR9YCk7XG4gICAgICAgIGFsbExpc3QuYXBwZW5kQ2hpbGQoZXF1aXBCdXR0b24pO1xuICAgIH1cbn1cbi8vIHdoZW4gYW4gb2JqZWN0IGlzIGVxdWlwcGVkXG5mdW5jdGlvbiBlcXVpcEl0ZW0oaXRlbSkge1xuICAgIGlmIChjaGFyMS5pbnZlbnRvcnkuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3dlYXBvbic6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIxLmVxdWlwcGVkV2VhcG9uID09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXIxLmVxdWlwcGVkV2VhcG9uID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgY2hhcjEuYXJtb3JDbGFzcyA9IGNoYXIxLmFybW9yQ2xhc3MgKyBjaGFyMS5lcXVpcHBlZFdlYXBvbi5pdGVtQXJtb3I7XG4gICAgICAgICAgICAgICAgICAgIGVxdWlwcGVkV2VhcG9uQm94LnRleHRDb250ZW50ID0gYCR7aXRlbS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlcXVpcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2l0ZW0uaWR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGVxdWlwQnV0dG9uLnRleHRDb250ZW50ID0gJ1VuZXF1aXAnO1xuICAgICAgICAgICAgICAgICAgICBlcXVpcEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVxdWlwSXRlbShpdGVtKSk7XG4gICAgICAgICAgICAgICAgICAgIGVxdWlwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdW5lcXVpcEl0ZW0oaXRlbSkpOyAgIFxuICAgICAgICAgICAgICAgICAgICBtZW51VXBkYXRlcigpOyAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdFUlJPUjogcGxlYXNlIHVuZXF1aXAgeW91ciBjdXJyZW50IGl0ZW0gZmlyc3QnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FybW9yJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhcjEuZXF1aXBwZWRBcm1vciA9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBjaGFyMS5lcXVpcHBlZEFybW9yID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgY2hhcjEuYXJtb3JDbGFzcyA9IGNoYXIxLmFybW9yQ2xhc3MgKyBjaGFyMS5lcXVpcHBlZEFybW9yLml0ZW1Bcm1vcjtcbiAgICAgICAgICAgICAgICAgICAgZXF1aXBwZWRBcm1vckJveC50ZXh0Q29udGVudCA9IGAke2l0ZW0ubmFtZX1gO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXF1aXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpdGVtLmlkfWApO1xuICAgICAgICAgICAgICAgICAgICBlcXVpcEJ1dHRvbi50ZXh0Q29udGVudCA9ICdVbmVxdWlwJztcbiAgICAgICAgICAgICAgICAgICAgZXF1aXBCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlcXVpcEl0ZW0oaXRlbSkpO1xuICAgICAgICAgICAgICAgICAgICBlcXVpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVuZXF1aXBJdGVtKGl0ZW0pKTsgICBcbiAgICAgICAgICAgICAgICAgICAgbWVudVVwZGF0ZXIoKTsgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnRVJST1I6IHBsZWFzZSB1bmVxdWlwIHlvdXIgY3VycmVudCBpdGVtIGZpcnN0JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtaXNjJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhcjEuZXF1aXBwZWRNaXNjID09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXIxLmVxdWlwcGVkTWlzYyA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgIGNoYXIxLmFybW9yQ2xhc3MgPSBjaGFyMS5hcm1vckNsYXNzICsgY2hhcjEuZXF1aXBwZWRNaXNjLml0ZW1Bcm1vcjtcbiAgICAgICAgICAgICAgICAgICAgZXF1aXBwZWRNaXNjQm94LnRleHRDb250ZW50ID0gYCR7aXRlbS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlcXVpcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2l0ZW0uaWR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGVxdWlwQnV0dG9uLnRleHRDb250ZW50ID0gJ1VuZXF1aXAnO1xuICAgICAgICAgICAgICAgICAgICBlcXVpcEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVxdWlwSXRlbShpdGVtKSk7XG4gICAgICAgICAgICAgICAgICAgIGVxdWlwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdW5lcXVpcEl0ZW0oaXRlbSkpOyAgIFxuICAgICAgICAgICAgICAgICAgICBtZW51VXBkYXRlcigpOyAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdFUlJPUjogcGxlYXNlIHVuZXF1aXAgeW91ciBjdXJyZW50IGl0ZW0gZmlyc3QnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdFUlJPUjogeW91IGRvIG5vdCBoYXZlIHRoaXMgaXRlbSBpbiB5b3VyIGludmVudG9yeScpXG4gICAgfVxufVxuLy8gd2hlbiBhbiBpdGVtIGlzIHVuZXF1aXBwZWRcbmZ1bmN0aW9uIHVuZXF1aXBJdGVtKGl0ZW0pIHtcbiAgICBpZiAoY2hhcjEuZXF1aXBwZWRXZWFwb24gPT0gaXRlbSB8fCBjaGFyMS5lcXVpcHBlZEFybW9yID09IGl0ZW0gfHwgY2hhcjEuZXF1aXBwZWRNaXNjID09IGl0ZW0pIHtcbiAgICAgICAgaWYgKGNoYXIxLmVxdWlwcGVkV2VhcG9uID09IGl0ZW0pIHtcbiAgICAgICAgICAgIGNoYXIxLmFybW9yQ2xhc3MgPSBjaGFyMS5hcm1vckNsYXNzIC0gY2hhcjEuZXF1aXBwZWRXZWFwb24uaXRlbUFybW9yO1xuICAgICAgICAgICAgY2hhcjEuZXF1aXBwZWRXZWFwb24gPSAnJztcbiAgICAgICAgICAgIGVxdWlwcGVkV2VhcG9uQm94LnRleHRDb250ZW50ID0gYGA7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcjEuZXF1aXBwZWRBcm1vciA9PSBpdGVtKSB7XG4gICAgICAgICAgICBjaGFyMS5hcm1vckNsYXNzID0gY2hhcjEuYXJtb3JDbGFzcyAtIGNoYXIxLmVxdWlwcGVkQXJtb3IuaXRlbUFybW9yO1xuICAgICAgICAgICAgY2hhcjEuZXF1aXBwZWRBcm1vciA9ICcnO1xuICAgICAgICAgICAgZXF1aXBwZWRBcm1vckJveC50ZXh0Q29udGVudCA9IGBgO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXIxLmVxdWlwcGVkTWlzYyA9PSBpdGVtKSB7XG4gICAgICAgICAgICBjaGFyMS5hcm1vckNsYXNzID0gY2hhcjEuYXJtb3JDbGFzcyAtIGNoYXIxLmVxdWlwcGVkTWlzYy5pdGVtQXJtb3I7XG4gICAgICAgICAgICBjaGFyMS5lcXVpcHBlZE1pc2MgPSAnJztcbiAgICAgICAgICAgIGVxdWlwcGVkTWlzY0JveC50ZXh0Q29udGVudCA9IGBgO1xuICAgICAgICB9XG4gICAgICAgIG1lbnVVcGRhdGVyKCk7XG4gICAgICAgIGxldCBlcXVpcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2l0ZW0uaWR9YCk7XG4gICAgICAgIGVxdWlwQnV0dG9uLnRleHRDb250ZW50ID0gJ0VxdWlwJztcbiAgICAgICAgZXF1aXBCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB1bmVxdWlwSXRlbShpdGVtKSk7XG4gICAgICAgIGVxdWlwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZXF1aXBJdGVtKGl0ZW0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnRVJST1I6IHRoaXMgaXRlbSBpcyBub3QgZXF1aXBwZWQ7JylcbiAgICB9XG59XG4vLyB0byBjaGFyYWN0ZXIsIGFkZCB0aGUgZm9sbG93aW5nIGtleXM6IGVxdWlwcGVkV2VhcG9uLCBlcXVpcHBlZEFybW9yLCBlcXVpcHBlZE1pc2MsIGludmVudG9yeSA9IFtdXG4vLyB0aGUgaXRlbSBvYmplY3Qgd2lsbCBoYXZlIGtleXM6IHR5cGUgKHdlYXBvbiwgYXJtb3Igb3IgbWlzYyk7IGl0ZW1BdHRhY2s7IGl0ZW1Bcm1vclxuZnVuY3Rpb24gbmV3SXRlbShuYW1lLCB0eXBlLCBpdGVtQXR0YWNrLCBpdGVtQXJtb3IsIGlkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgaXRlbUF0dGFjazogaXRlbUF0dGFjayxcbiAgICAgICAgaXRlbUFybW9yOiBpdGVtQXJtb3IsXG4gICAgICAgIGlkOiBpZFxuICAgIH1cbn1cbmxldCBtYWdpY1N3b3JkID0gbmV3SXRlbSgnTWFnaWMgU3dvcmQnLCAnd2VhcG9uJywgMjAsIDAsICduMScpO1xubGV0IG1hZ2ljQXJtb3IgPSBuZXdJdGVtKCdNYWdpYyBBcm1vcicsICdhcm1vcicsIDAsIDIsICduMicpO1xubGV0IG1hZ2ljUmluZyA9IG5ld0l0ZW0oJ01hZ2ljIFJpbmcnLCAnbWlzYycsIDEsIDEsICduMycpO1xubGV0IHVsdHJhU3dvcmQgPSBuZXdJdGVtKCdVbHRyYSBTd29yZCcsICd3ZWFwb24nLCA0MCwgMCwgJ240Jyk7XG5sZXQgdWx0cmFBcm1vciA9IG5ld0l0ZW0oJ1VsdHJhIEFybW9yJywgJ2FybW9yJywgMCwgNCwgJ241Jyk7XG5sZXQgdWx0cmFSaW5nID0gbmV3SXRlbSgnVWx0cmEgUmluZycsICdtaXNjJywgMiwgMiwgJ242Jyk7XG5sZXQgcnVzdHlTd29yZCA9IG5ld0l0ZW0oJ1J1c3R5IFN3b3JkJywgJ3dlYXBvbicsIDEsIDAsICduNycpO1xubGV0IHJ1c3R5QXJtb3IgPSBuZXdJdGVtKCdSdXN0eSBBcm1vcicsICdhcm1vcicsIDAsIDEsICduOCcpO1xubGV0IGdvbGRSaW5nID0gbmV3SXRlbSgnR29sZCBSaW5nJywgJ21pc2MnLCAwLCAxLCAnbjknKTtcbmxldCBoZWFsdGhQb3Rpb24gPSBuZXdJdGVtKCdIZWFsdGggUG90aW9uJywgJ3F1ZXN0IGl0ZW0nLCAwLCAwLCAnbjEwJyk7XG5sZXQgd2lzcEJhbGwgPSBuZXdJdGVtKCdEaW1seSBHbG93aW5nIEJhbGwnLCAnbWlzYycsIDAsIDEsICduMTEnKTtcbi8vIGV4cG9ydGluZyBvYmplY3RcbmxldCBhbGxJdGVtcyA9IHsgd2lzcEJhbGwsIG1hZ2ljQXJtb3IsIG1hZ2ljUmluZywgbWFnaWNTd29yZCwgdWx0cmFBcm1vciwgdWx0cmFSaW5nLCB1bHRyYVN3b3JkLCBydXN0eUFybW9yLCBydXN0eVN3b3JkLCBnb2xkUmluZywgaGVhbHRoUG90aW9uIH07XG4vLyBleHBvcnRcbmV4cG9ydCB7XG4gICAgaW52ZW50b3J5RGlhbG9nLFxuICAgIGdyYWJJdGVtLFxuICAgIGVxdWlwSXRlbSxcbiAgICB1bmVxdWlwSXRlbSxcbiAgICBuZXdJdGVtLFxuICAgIGFsbEl0ZW1zLFxuICAgIHBsYXllckdvbGQsXG4gICAgYWRkR29sZFxufSIsIi8vIGltcG9ydDogZW5lbWllcyBhcnJheSwgaXNIZURlYWQsIGxpc3RFbmVtaWVzXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCB7IGVuZW1pZXMsIGlzSGVEZWFkLCBpc1BsYXllckRlYWQsIGxpc3RFbmVtaWVzIH0gZnJvbSBcIi4vY29tcF9iYXR0bGVfZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBSYWNlLCByYWNlcyB9IGZyb20gJy4vY29tcF9yYWNlcyc7XG4vLyBsb2dfd2luZG93XG5sZXQgbG9nX3dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2cnKTtcbi8vIG9iamVjdCBjb25zdHJ1Y3RvciBmdW5jdGlvbnNcbmZ1bmN0aW9uIENoYXJhY3RlcihuYW1lLCBhdHRhY2tCb251cywgYXJtb3JDbGFzcywgY3VycmVudEhQLCBtYXhIUCwgc3BlY2lhbEF0dGFjaywgZXF1aXBwZWRXZWFwb24sIGVxdWlwcGVkQXJtb3IsIGVxdWlwcGVkTWlzYywgaW52ZW50b3J5LCByYWNlLCBzcGlyaXRDb25jZXB0LCBjb25jZXB0LCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hdHRhY2tCb251cyA9IGF0dGFja0JvbnVzO1xuICAgIHRoaXMuYXJtb3JDbGFzcyA9IGFybW9yQ2xhc3M7XG4gICAgdGhpcy5jdXJyZW50SFAgPSBjdXJyZW50SFA7XG4gICAgdGhpcy5tYXhIUCA9IG1heEhQO1xuICAgIHRoaXMuc3BlY2lhbEF0dGFjayA9IHNwZWNpYWxBdHRhY2s7XG4gICAgdGhpcy5lcXVpcHBlZFdlYXBvbiA9ICcnO1xuICAgIHRoaXMuZXF1aXBwZWRBcm1vciA9ICcnO1xuICAgIHRoaXMuZXF1aXBwZWRNaXNjID0gJyc7XG4gICAgdGhpcy5pbnZlbnRvcnkgPSBbXTtcbiAgICB0aGlzLnJhY2UgPSByYWNlO1xuICAgIHRoaXMuc3Bpcml0Q29uY2VwdCA9IHsgY29uY2VwdDogY29uY2VwdCwgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uIH1cbn1cblxuZnVuY3Rpb24gTW9uc3RlcihuYW1lLCBtb25zdGVyQXR0YWNrQm9udXMsIGFybW9yQ2xhc3MsIGN1cnJlbnRIUCwgbWF4SFAsIHN0YXR1cykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5tb25zdGVyQXR0YWNrQm9udXMgPSBtb25zdGVyQXR0YWNrQm9udXM7XG4gICAgdGhpcy5hcm1vckNsYXNzID0gYXJtb3JDbGFzcztcbiAgICB0aGlzLmN1cnJlbnRIUCA9IGN1cnJlbnRIUDtcbiAgICB0aGlzLm1heEhQID0gbWF4SFA7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG59XG4vLyBoZXJvLnByb3RvdHlwZSBhdHRhY2sgbWV0aG9kXG5DaGFyYWN0ZXIucHJvdG90eXBlLmF0dGFjayA9IGZ1bmN0aW9uKHNlbGVjdGVkRW5lbXkpIHtcbiAgICBpZiAoZW5lbWllcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkRW5lbXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkuc3RhdHVzID09ICdidXJuaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBlbmVteS5jdXJyZW50SFAgPSBlbmVteS5jdXJyZW50SFAgLSA1O1xuICAgICAgICAgICAgICAgICAgICBpc0hlRGVhZChlbmVteSk7IFxuICAgICAgICAgICAgICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gYCR7ZW5lbXkubmFtZX0gaXMgYnVybmluZyBmb3IgNSBkYW1hZ2UhYDtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOnllbGxvdycpO1xuICAgICAgICAgICAgICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiB7XG4gICAgICAgICAgICAgICAgZW5lbXkuc3RhdHVzID0gJyc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIEFycmF5LmZyb20obG9nX3dpbmRvdy5jaGlsZHJlbikuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBlbnRyeS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2NvbG9yOndoaXRlOycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbmVteS5jdXJyZW50SFAgPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGF0dGFja1JvbGwgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMjApICsgMSArIHRoaXMuYXR0YWNrQm9udXMpO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyMS5lcXVpcHBlZFdlYXBvbiAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrUm9sbCA9IGF0dGFja1JvbGwgKyB0aGlzLmVxdWlwcGVkV2VhcG9uLml0ZW1BdHRhY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyMS5lcXVpcHBlZEFybW9yICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2tSb2xsID0rIGF0dGFja1JvbGwgKyB0aGlzLmVxdWlwcGVkQXJtb3IuaXRlbUF0dGFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIxLmVxdWlwcGVkTWlzYyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrUm9sbCA9KyBhdHRhY2tSb2xsICsgdGhpcy5lcXVpcHBlZE1pc2MuaXRlbUF0dGFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGV4dHJhQ29tbWVudCA9ICcnO1xuICAgICAgICAgICAgICAgIGxldCBleHRyYUF0dGFjayA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IGV4dHJhRGFtYWdlID0gMDtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuc3BlY2lhbEF0dGFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdOb3JtYWwgQXR0YWNrJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdTcGVjdHJhbCBCbGFkZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUNvbW1lbnQgPSAnIHdpdGggdGhlIFNwZWN0cmFsIEJsYWRlICgtMiBhY2N1cmFjeSwgKzIgZGFtYWdlIGlmIGhpdHMpJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQXR0YWNrID0gLTI7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYURhbWFnZSA9ICs0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1NwaXJpdCBCbGVzc2luZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUF0dGFjayA9IC0xMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1dpdGhlcmluZyBCb2x0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQ29tbWVudCA9ICcgd2l0aCB0aGUgV2l0aGVyaW5nIEJvbHQgKC00IGFjY3VyYWN5LCBidXQgKzYgZGFtYWdlIGlmIGhpdHMpJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQXR0YWNrID0gLTQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYURhbWFnZSA9ICs2O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1dyYXRoZnVsIFZpc2FnZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUNvbW1lbnQgPSAnIHdpdGggdGhlIFdyYXRoZnVsIFZpc2FnZSAoLTQgYWNjdXJhY3ksIGJ1dCBzdHVucyB0aGUgdGFyZ2V0KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUF0dGFjayA9IC00O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGFja1JvbGwgKyBleHRyYUF0dGFjayA+IHNlbGVjdGVkRW5lbXkuYXJtb3JDbGFzcykgeyBzZWxlY3RlZEVuZW15LnN0YXR1cyA9ICdzdHVubmVkJzsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0JpbmQgb2YgdGhlIEd1YXJkaWFuJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQ29tbWVudCA9ICcgd2l0aCB0aGUgQmluZCBvZiB0aGUgR3VhcmRpYW4gKC00IGFjY3VyYWN5LCBidXQgc3R1bnMgdGhlIHRhcmdldCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFBdHRhY2sgPSAtNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2tSb2xsICsgZXh0cmFBdHRhY2sgPiBzZWxlY3RlZEVuZW15LmFybW9yQ2xhc3MpIHsgc2VsZWN0ZWRFbmVteS5zdGF0dXMgPSAnc3R1bm5lZCc7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdFc3NlbmNlIERyYWluJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQ29tbWVudCA9ICcgd2l0aCB0aGUgRXNzZW5jZSBEcmFpbiAoLTQgYWNjdXJhY3ksIGJ1dCBzZXRzIHRhcmdldCBvbiBmaXJlIGZvciBvbmUgdHVybiknO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFBdHRhY2sgPSAtNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2tSb2xsICsgZXh0cmFBdHRhY2sgPiBzZWxlY3RlZEVuZW15LmFybW9yQ2xhc3MpIHsgc2VsZWN0ZWRFbmVteS5zdGF0dXMgPSAnYnVybmluZyc7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yYWNlICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBleHRyYUF0dGFjayArPSB0aGlzLnJhY2UucmFjZUF0dGFja0JvbnVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYXR0YWNrUm9sbCArIGV4dHJhQXR0YWNrID4gc2VsZWN0ZWRFbmVteS5hcm1vckNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRW5lbXkuY3VycmVudEhQIC09IGF0dGFja1JvbGwgKyBleHRyYUF0dGFjayArIGV4dHJhRGFtYWdlIC0gc2VsZWN0ZWRFbmVteS5hcm1vckNsYXNzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gYCR7dGhpcy5uYW1lfSBhdHRhY2tzICR7c2VsZWN0ZWRFbmVteS5uYW1lfSR7ZXh0cmFDb21tZW50fSEgVGhlIGF0dGFjayBoaXRzIGFuZCBkZWFscyAke2F0dGFja1JvbGwgKyBleHRyYUF0dGFjayArIGV4dHJhRGFtYWdlIC0gc2VsZWN0ZWRFbmVteS5hcm1vckNsYXNzfSBkYW1hZ2UhYDtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOnllbGxvdycpO1xuICAgICAgICAgICAgICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgaXNIZURlYWQoc2VsZWN0ZWRFbmVteSk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RFbmVtaWVzKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNwZWNpYWxBdHRhY2sgPT0gJ1NwaXJpdCBCbGVzc2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlYWxlZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllckhQbWlzc2luZyA9IHRoaXMubWF4SFAgLSB0aGlzLmN1cnJlbnRIUDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllckhQbWlzc2luZyA+IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEhQID0gdGhpcy5jdXJyZW50SFAgKyA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhbGVkID0gNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJIUG1pc3NpbmcgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFsZWQgPSBwbGF5ZXJIUG1pc3Npbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRIUCA9IHRoaXMubWF4SFA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFsZWQgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9IGNhc3RzIFNwaXJpdCBCbGVzc2luZywgaGVhbGluZyB0aGVtc2VsZiBmb3IgJHtoZWFsZWR9IEhQIWA7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjp5ZWxsb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgIG1lbnVVcGRhdGVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IGAke3RoaXMubmFtZX0gYXR0YWNrcyAke3NlbGVjdGVkRW5lbXkubmFtZX0hIFRoZSBhdHRhY2sgbWlzc2VzIWA7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjp5ZWxsb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbmVtaWVzLmxlbmd0aCAhPT0gMCkgeyBcbiAgICAgICAgICAgICAgICAgICAgZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbmVteS5zdGF0dXMgIT09ICdzdHVubmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LmNvdW50ZXJhdHRhY2soKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVuZW15LnN0YXR1cyA9PSAnc3R1bm5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSBgJHtlbmVteS5uYW1lfSBpcyBzdHVubmVkIWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOnllbGxvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ193aW5kb3cuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSBgV2hpY2ggbW9uc3RlciBkbyBJIGF0dGFjaz9gO1xuICAgICAgICAgICAgbG9nX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7ICAgIFxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IGBObyBtb25zdGVycyBhcm91bmQuYDtcbiAgICAgICAgbG9nX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgfVxufVxuLy8gY2hhcmFjdGVyIGNsYXNzZXNcbmZ1bmN0aW9uIEphbml0b3IobmFtZSwgYXR0YWNrQm9udXMsIGFybW9yQ2xhc3MsIGN1cnJlbnRIUCwgbWF4SFAsIHNwZWNpYWxBdHRhY2ssIGVxdWlwcGVkV2VhcG9uLCBlcXVpcHBlZEFybW9yLCBlcXVpcHBlZE1pc2MsIGludmVudG9yeSwgcmFjZSwgc3Bpcml0Q29uY2VwdCwgY29uY2VwdCwgZGVzY3JpcHRpb24pIHtcbiAgICBDaGFyYWN0ZXIuY2FsbCh0aGlzLCBuYW1lLCBhdHRhY2tCb251cywgYXJtb3JDbGFzcywgY3VycmVudEhQLCBtYXhIUCwgc3BlY2lhbEF0dGFjaywgZXF1aXBwZWRXZWFwb24sIGVxdWlwcGVkQXJtb3IsIGVxdWlwcGVkTWlzYywgaW52ZW50b3J5LCByYWNlLCBzcGlyaXRDb25jZXB0LCBjb25jZXB0LCBkZXNjcmlwdGlvbik7XG59XG5mdW5jdGlvbiBBY2NvdW50YW50KG5hbWUsIGF0dGFja0JvbnVzLCBhcm1vckNsYXNzLCBjdXJyZW50SFAsIG1heEhQLCBzcGVjaWFsQXR0YWNrLCBlcXVpcHBlZFdlYXBvbiwgZXF1aXBwZWRBcm1vciwgZXF1aXBwZWRNaXNjLCBpbnZlbnRvcnksIHJhY2UsIHNwaXJpdENvbmNlcHQsIGNvbmNlcHQsIGRlc2NyaXB0aW9uKSB7XG4gICAgQ2hhcmFjdGVyLmNhbGwodGhpcywgbmFtZSwgYXR0YWNrQm9udXMsIGFybW9yQ2xhc3MsIGN1cnJlbnRIUCwgbWF4SFAsIHNwZWNpYWxBdHRhY2ssIGVxdWlwcGVkV2VhcG9uLCBlcXVpcHBlZEFybW9yLCBlcXVpcHBlZE1pc2MsIGludmVudG9yeSwgcmFjZSwgc3Bpcml0Q29uY2VwdCwgY29uY2VwdCwgZGVzY3JpcHRpb24pO1xufVxuZnVuY3Rpb24gRGFuY2VyKG5hbWUsIGF0dGFja0JvbnVzLCBhcm1vckNsYXNzLCBjdXJyZW50SFAsIG1heEhQLCBzcGVjaWFsQXR0YWNrLCBlcXVpcHBlZFdlYXBvbiwgZXF1aXBwZWRBcm1vciwgZXF1aXBwZWRNaXNjLCBpbnZlbnRvcnksIHJhY2UsIHNwaXJpdENvbmNlcHQsIGNvbmNlcHQsIGRlc2NyaXB0aW9uKSB7XG4gICAgQ2hhcmFjdGVyLmNhbGwodGhpcywgbmFtZSwgYXR0YWNrQm9udXMsIGFybW9yQ2xhc3MsIGN1cnJlbnRIUCwgbWF4SFAsIHNwZWNpYWxBdHRhY2ssIGVxdWlwcGVkV2VhcG9uLCBlcXVpcHBlZEFybW9yLCBlcXVpcHBlZE1pc2MsIGludmVudG9yeSwgcmFjZSwgc3Bpcml0Q29uY2VwdCwgY29uY2VwdCwgZGVzY3JpcHRpb24pO1xufVxuLy8gc2V0dGluZyBwcm90b3R5cGVzXG5PYmplY3Quc2V0UHJvdG90eXBlT2YoSmFuaXRvci5wcm90b3R5cGUsIENoYXJhY3Rlci5wcm90b3R5cGUpO1xuT2JqZWN0LnNldFByb3RvdHlwZU9mKEFjY291bnRhbnQucHJvdG90eXBlLCBDaGFyYWN0ZXIucHJvdG90eXBlKTsgXG5PYmplY3Quc2V0UHJvdG90eXBlT2YoRGFuY2VyLnByb3RvdHlwZSwgQ2hhcmFjdGVyLnByb3RvdHlwZSk7IFxuLy8gY2hhcmFjdGVyIG9iamVjdFxubGV0IGNoYXIxID0gbmV3IENoYXJhY3RlcignU29tZWJvZHknLCAwLCAxMCwgMjAsIDEwMCwgJ05vcm1hbCBBdHRhY2snLCAnJywgJycsICcnLCBbXSwgcmFjZXMuSHVtYW4sIHtjb25jZXB0OicnLCBkZXNjcmlwdGlvbjogJyd9KTtcbi8vIGVuZW1pZXMgb2JqZWN0c1xubGV0IGdvYmxpbl9ncnVudCA9IG5ldyBNb25zdGVyKCdHb2JsaW4nLCAwLCAxMCwgNDAsIDQwLCAnJyk7XG5sZXQgZ29ibGluX2ZpZ2h0ZXIgPSBuZXcgTW9uc3RlcignR29ibGluIEZpZ2h0ZXInLCAyLCAxMywgMjUsIDI1LCAnJyk7XG5sZXQgZ29ibGluX3NoYW1hbiA9IG5ldyBNb25zdGVyKCdHb2JsaW4gU2hhbWFuJywgMywgMTYsIDMwLCAzMCwgJycpO1xubGV0IGdvYmxpbl9jaGllZnRhaW4gPSBuZXcgTW9uc3RlcignR29ibGluIENoaWVmdGFpbicsIDUsIDE3LCA0MCwgNDAsICcnKTtcbmxldCB3aXphcmQgPSBuZXcgTW9uc3RlcignSGFsZiBEZWFkIE9sZCBHdXknLCAtMSwgMTAsIDUsIDUsICcnKTtcbmxldCBpbXAxID0gbmV3IE1vbnN0ZXIoJ1JlZCBJbXAnLCAwLCA1LCA1LCA1LCAnJyk7XG5sZXQgaW1wMiA9IG5ldyBNb25zdGVyKCdCbHVlIEltcCcsIDAsIDUsIDUsIDUsICcnKTtcbmxldCB3aXNwMSA9IG5ldyBNb25zdGVyKCdXaXNwJywgMCwgMCwgMTAsIDEwKTtcbi8vIG1vbnN0ZXJzIG9iamVjdFxubGV0IG1vbnN0ZXJzID0geyBnb2JsaW5fZ3J1bnQsIGdvYmxpbl9maWdodGVyLCBnb2JsaW5fc2hhbWFuLCBnb2JsaW5fY2hpZWZ0YWluLCB3aXphcmQsIGltcDEsIGltcDIsIHdpc3AxIH1cbi8vIG1vbnN0ZXIgY291bnRlcmF0dGFja1xuLy9lbmVteSB0dXJuIGxvZ2ljXG5Nb25zdGVyLnByb3RvdHlwZS5jb3VudGVyYXR0YWNrID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGF0dGFja1JvbGwgPSAgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDIwKSArIDEpICsgdGhpcy5tb25zdGVyQXR0YWNrQm9udXM7XG4gICAgaWYgKGF0dGFja1JvbGwgPiBjaGFyMS5hcm1vckNsYXNzKSB7XG4gICAgICAgIGNoYXIxLmN1cnJlbnRIUCAtPSBhdHRhY2tSb2xsIC0gY2hhcjEuYXJtb3JDbGFzcztcbiAgICAgICAgaWYgKGNoYXIxLmN1cnJlbnRIUCA8IDApIHtcbiAgICAgICAgICAgIGNoYXIxLmN1cnJlbnRIUCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgbWVudVVwZGF0ZXIoKTtcbiAgICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IGAke3RoaXMubmFtZX0gYXR0YWNrcyAke2NoYXIxLm5hbWV9ISBUaGUgYXR0YWNrIGhpdHMgYW5kIGRlYWxzICR7YXR0YWNrUm9sbCAtIGNoYXIxLmFybW9yQ2xhc3N9IGRhbWFnZSFgO1xuICAgICAgICBlbnRyeS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6eWVsbG93Jyk7XG4gICAgICAgIGxvZ193aW5kb3cuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgICAgICBpc1BsYXllckRlYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gYCR7dGhpcy5uYW1lfSBhdHRhY2tzICR7Y2hhcjEubmFtZX0hIFRoZSBhdHRhY2sgbWlzc2VzIWA7XG4gICAgICAgIGVudHJ5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjp5ZWxsb3cnKTtcbiAgICAgICAgbG9nX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgfVxufVxuLy8gLS0tbWVudSB0ZXh0IHVwZGF0ZXIgZnVuY3Rpb24tLS1cbmZ1bmN0aW9uIG1lbnVVcGRhdGVyKCkge1xuICAgIGNoYXIxLnJhY2UgPSByYWNlcy5IdW1hbjtcbiAgICBsZXQgbWVudV93aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xuICAgIGlmIChjaGFyMSBpbnN0YW5jZW9mIEphbml0b3IpIHsgLy8gV3JhaXRoXG4gICAgICAgIG1lbnVfd2luZG93LnRleHRDb250ZW50ID0gYFlvdSBhcmUgJHtjaGFyMS5uYW1lfS4gWW91ciBhcmUgYSBXcmFpdGgke2NoYXIxLnNwaXJpdENvbmNlcHQuZGVzY3JpcHRpb259LiBJbiBsaWZlLCB5b3Ugd2VyZSBhICR7Y2hhcjEucmFjZS5uYW1lfS4gWW91ciBhcm1vciBjbGFzcyBpcyAke2NoYXIxLmFybW9yQ2xhc3N9LiBZb3VyIEhQIGlzICR7Y2hhcjEuY3VycmVudEhQfS8ke2NoYXIxLm1heEhQfS5gO1xuICAgIH0gZWxzZSBpZiAoY2hhcjEgaW5zdGFuY2VvZiBBY2NvdW50YW50KSB7IC8vIFBvbHRlcmdlaXN0XG4gICAgICAgIG1lbnVfd2luZG93LnRleHRDb250ZW50ID0gYFlvdSBhcmUgJHtjaGFyMS5uYW1lfS4gWW91ciBhcmUgYSBQb2x0ZXJnZWlzdCR7Y2hhcjEuc3Bpcml0Q29uY2VwdC5kZXNjcmlwdGlvbn0uIEluIGxpZmUsIHlvdSB3ZXJlIGEgJHtjaGFyMS5yYWNlLm5hbWV9LiBZb3VyIGFybW9yIGNsYXNzIGlzICR7Y2hhcjEuYXJtb3JDbGFzc30uIFlvdXIgSFAgaXMgJHtjaGFyMS5jdXJyZW50SFB9LyR7Y2hhcjEubWF4SFB9LmA7XG4gICAgfSBlbHNlIGlmIChjaGFyMSBpbnN0YW5jZW9mIERhbmNlcikgeyAvLyBHdWFyZGlhbiBTcGlyaXRcbiAgICAgICAgbWVudV93aW5kb3cudGV4dENvbnRlbnQgPSBgWW91IGFyZSAke2NoYXIxLm5hbWV9LiBZb3VyIGFyZSBhIEd1YXJkaWFuIFNwaXJpdCR7Y2hhcjEuc3Bpcml0Q29uY2VwdC5kZXNjcmlwdGlvbn0uIEluIGxpZmUsIHlvdSB3ZXJlIGEgJHtjaGFyMS5yYWNlLm5hbWV9LiBZb3VyIGFybW9yIGNsYXNzIGlzICR7Y2hhcjEuYXJtb3JDbGFzc30uIFlvdXIgSFAgaXMgJHtjaGFyMS5jdXJyZW50SFB9LyR7Y2hhcjEubWF4SFB9LmA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVudV93aW5kb3cudGV4dENvbnRlbnQgPSBgWW91IGFyZSAke2NoYXIxLm5hbWV9LiBZb3VyIGNsYXNzIGlzIHVua25vd24uIFlvdXIgYXJtb3IgY2xhc3MgaXMgJHtjaGFyMS5hcm1vckNsYXNzfS4gWW91ciBIUCBpcyAke2NoYXIxLmN1cnJlbnRIUH0vJHtjaGFyMS5tYXhIUH0uYDtcbiAgICB9XG59XG4vLyBvYmplY3QgZm9yIGltcG9ydGFudCByb2xlcyBpbiB0aGUgcGxvdFxuY2xhc3MgTlBDUm9sZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgc3VybmFtZSwgaGUsIGhpcywgaGltLCBoaW1zZWxmKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3VybmFtZSA9IHN1cm5hbWU7XG4gICAgICAgIHRoaXMuaGUgPSBoZTtcbiAgICAgICAgdGhpcy5oaXMgPSBoaXM7XG4gICAgICAgIHRoaXMuaGltID0gaGltO1xuICAgICAgICB0aGlzLmhpbXNlbGYgPSBoaW1zZWxmO1xuICAgIH1cbn1cbmZ1bmN0aW9uIE5QQ01ha2VyKG5hbWUsIHN1cm5hbWUsIGhlLCBoaXMsIGhpbSwgaGltc2VsZikge1xuICAgIHJldHVybiBuZXcgTlBDUm9sZShuYW1lLCBzdXJuYW1lLCBoZSwgaGlzLCBoaW0sIGhpbXNlbGYpXG59XG4vLyBleHBvcnRcbmV4cG9ydCB7XG4gICAgQ2hhcmFjdGVyLFxuICAgIE1vbnN0ZXIsXG4gICAgSmFuaXRvcixcbiAgICBBY2NvdW50YW50LFxuICAgIERhbmNlcixcbiAgICBjaGFyMSxcbiAgICBnb2JsaW5fZ3J1bnQsXG4gICAgZ29ibGluX2ZpZ2h0ZXIsXG4gICAgZ29ibGluX3NoYW1hbixcbiAgICBnb2JsaW5fY2hpZWZ0YWluLFxuICAgIHdpemFyZCxcbiAgICBpbXAxLFxuICAgIGltcDIsXG4gICAgbWVudVVwZGF0ZXIsXG4gICAgbW9uc3RlcnMsXG4gICAgTlBDUm9sZSxcbiAgICBOUENNYWtlclxufSIsIi8vIGZhY3RvcnkgZnVuY3Rpb24gLyBjb25zdHJ1Y3RvciAvIGNsYXNzXG5jbGFzcyBSYWNlIHtcbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gW107XG4gICAgc3RhdGljIGdldEFsbEluc3RhbmNlcygpIHtcbiAgICAgICAgcmV0dXJuIFJhY2UuaW5zdGFuY2VzO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgcmFjZUF0dGFja0JvbnVzLCByYWNlSFBCb251cywgcmFjZUFybW9yQm9udXMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnJhY2VBdHRhY2tCb251cyA9IHJhY2VBdHRhY2tCb251cztcbiAgICAgICAgdGhpcy5yYWNlSFBCb251cyA9IHJhY2VIUEJvbnVzO1xuICAgICAgICB0aGlzLnJhY2VBcm1vckJvbnVzID0gcmFjZUFybW9yQm9udXM7XG4gICAgfVxufVxuLy8gY3JlYXRpb24gb2YgcmFjZSBvYmplY3RzXG5sZXQgSHVtYW4gPSBuZXcgUmFjZSgncGVyc29uIGZyb20gYW4gdW5rbm93biBsYW5kJywgJ1tpbml0aWFsIHJhY2VdJywgMCwgMCwgMCk7XG5sZXQgUmVhbG1lciA9IG5ldyBSYWNlKCdSZWFsbWVyJywgJ1tzdG9ja3kgYW5kIHN0b3V0LCBibGFoIGJsYWhdJywgMSwgMCwgMCk7XG5sZXQgTW9ydGFyID0gbmV3IFJhY2UoJ01vcnRhcicsICdbc3RvY2t5IGFuZCBzdG91dCwgYmxhaCBibGFoXScsIDAsIDAsIDEpOyAvLyBhbHJlYWR5IGNvbnF1ZXJlZCBieSB0aGUgUmVhbG0gbmF0aW9uPyBTZWNvbmQtY2xhc3MgY2l0aXplbnMgaW4gdGhlIFJlYWxtXG5sZXQgRGVhZGxhbmRlciA9IG5ldyBSYWNlKCdEZWFkbGFuZGVyJywgJ1tzdG9ja3kgYW5kIHN0b3V0LCBibGFoIGJsYWhdJywgMCwgMTUsIDApO1xuLy8gb2JqZWN0IG9mIG9iamVjdHMgZm9yIGV4cG9ydGluZ1xubGV0IHJhY2VzID0geyBIdW1hbiwgUmVhbG1lciwgTW9ydGFyLCBEZWFkbGFuZGVyIH1cbi8vIGV4cG9ydGluZyB0aGUgY2xhc3MgYW5kIHRoZSBvYmplY3Qgb2Ygb2JqZWN0c1xuZXhwb3J0IHsgUmFjZSwgcmFjZXMgfSIsImltcG9ydCB7IG1vbnN0ZXJzIH0gZnJvbSAnLi9jb21wX29iamVjdHNfYW5kX21ldGhvZHMnO1xuaW1wb3J0IHsgYWxsSXRlbXMsIHBsYXllckdvbGQsIGFkZEdvbGQgfSBmcm9tICcuL2NvbXBfaW52ZW50b3J5X3N5c3RlbSc7XG5pbXBvcnQgeyBpY29ucyB9IGZyb20gJy4vY29tcF9hc3NldHMnO1xuLy8gaW1wb3J0IHsgc3RvcnlFbGVtZW50IH0gZnJvbSAnLi9jb21wX3N0b3J5X29iamVjdHMnO1xuY2xhc3Mgc3RvcnlFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCB0ZXh0LCBtb2RpZmllcnMsIG5leHRTdG9yeUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG4gICAgICAgIHRoaXMubmV4dFN0b3J5RWxlbWVudCA9IG5leHRTdG9yeUVsZW1lbnQ7XG4gICAgICAgIHN0b3J5RWxlbWVudC5pbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgICB9XG4gICAgc3RhdGljIGluc3RhbmNlcyA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGxJbnN0YW5jZXMoKSB7XG4gICAgICAgIHJldHVybiBzdG9yeUVsZW1lbnQuaW5zdGFuY2VzO1xuICAgIH1cbn1cbi8vIC0tLSBzY3JpcHQgLS0tXG4vLyBmcm9tIHRoZW0gbGVhcm4gYWJvdXQgdGhlIE5ldyBEYXduIEVkaWN0XG5cbi8vIC0tLSBGSVJTVCBBUFBFQVJBTkNFIE9GIFRIRSBESVZJTkUgTUVTU0VOR0VSIC0tLVxubGV0IGZpcnN0QXBwZWFyYW5jZV9ib29rMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFtUaGlzIGlzIHRoZSBlbmQgb2YgdGhlIHByb3RvdHlwZSFdYCwgYFtUaGFuayB5b3UgZm9yIHBsYXlpbmcgYW5kIGxldCBtZSBrbm93IHdoYXQgeW91IHRoaW5rIV1gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkKVxubGV0IGZpcnN0QXBwZWFyYW5jZV9kcmVhbXMxID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgW1RoaXMgaXMgdGhlIGVuZCBvZiB0aGUgcHJvdG90eXBlIV1gLCBgW1RoYW5rIHlvdSBmb3IgcGxheWluZyBhbmQgbGV0IG1lIGtub3cgd2hhdCB5b3UgdGhpbmshXWBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQpXG5sZXQgZmlyc3RBcHBlYXJhbmNlX3RyZWUxID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgW1RoaXMgaXMgdGhlIGVuZCBvZiB0aGUgcHJvdG90eXBlIV1gLCBgW1RoYW5rIHlvdSBmb3IgcGxheWluZyBhbmQgbGV0IG1lIGtub3cgd2hhdCB5b3UgdGhpbmshXWBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQpXG5sZXQgZmlyc3RBcHBlYXJhbmNlX3NoYWRvdzEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BbVGhpcyBpcyB0aGUgZW5kIG9mIHRoZSBwcm90b3R5cGUhXWAsIGBbVGhhbmsgeW91IGZvciBwbGF5aW5nIGFuZCBsZXQgbWUga25vdyB3aGF0IHlvdSB0aGluayFdYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZClcbmxldCBmaXJzdEFwcGVhcmFuY2VfYW5pbWFsMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFtUaGlzIGlzIHRoZSBlbmQgb2YgdGhlIHByb3RvdHlwZSFdYCwgYFtUaGFuayB5b3UgZm9yIHBsYXlpbmcgYW5kIGxldCBtZSBrbm93IHdoYXQgeW91IHRoaW5rIV1gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkKVxubGV0IGZpcnN0QXBwZWFyYW5jZV9yZWZsZWN0aW9uMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFtUaGlzIGlzIHRoZSBlbmQgb2YgdGhlIHByb3RvdHlwZSFdYCwgYFtUaGFuayB5b3UgZm9yIHBsYXlpbmcgYW5kIGxldCBtZSBrbm93IHdoYXQgeW91IHRoaW5rIV1gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkKVxuLy8gQ0hPT1NFIFlPVVIgQ0hPU0VOISBDSE9PU0UgQSBHSE9TVExZIFdBWSBUTyBDT01NVU5JQ0FURSFcbi8vIGlmIHdhdGNoIHRoZW0gZm9yIGEgd2hpbGUsIHRoZSBzZWxlY3Rpb24gb2YgbWV0aG9kcyBvZiBhcHBlYXJhbmNlIGlzIHNtYWxsZXJcbi8vIG1ldGhvZHM6IHdyaXRlIG1lc3NhZ2VzIGluIHRoZWlyIGJvb2ssIGFwcGVhciBpbiB0aGVpciBkcmVhbXNcbmxldCBtZXRob2RPZkNvbnRhY3QyID0gbmV3IHN0b3J5RWxlbWVudCgnY2hvaWNlJywgXG4gICAgW2BZb3UgaGF2ZSBhIGZldyBpZGVhcyBvbiBob3cgdG8gbWFrZSBjb250YWN0IHdpdGggQ2hvc2VuTmFtZS4uLmBdLFxuICAgIFt7Y2hvaWNlVGV4dDogYFlvdSB3YWl0IGZvciBDaG9zZW5OYW1lIHRvIHN0YXJ0IHJlYWRpbmcsIGFuZCBjaGFuZ2UgdGhlIHdvcmRzIGluIHhpcyBib29rLmAsIC8vIHdhaXQgdW50aWwgdGhlIGFkdmVudHVyZXIncyByZWFkaW5nIGFuZCBjaGFuZ2UgdGhlIHdvcmRzIGluIHRoZSBib29rXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnZmlyc3RBcHBlYXJhbmNlX2Jvb2snLFxuICAgIGNob2ljZU5leHRTdG9yeTogZmlyc3RBcHBlYXJhbmNlX2Jvb2sxfSxcbiAgICB7Y2hvaWNlVGV4dDogYFlvdSB3YWl0IGZvciBDaG9zZW5OYW1lIHRvIGZhbGwgYXNsZWVwLCBhbmQgYWx0ZXIgeGlzIGRyZWFtcy5gLCAvLyBhcHBlYXIgb3IgYWx0ZXIgdGhlIGFkdmVudHVyZXIncyBkcmVhbVxuICAgIGNob2ljZU1vZGlmaWVyczogJ2ZpcnN0QXBwZWFyYW5jZV9kcmVhbXMnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZmlyc3RBcHBlYXJhbmNlX2RyZWFtczF9LFxuICAgIHtjaG9pY2VUZXh0OiBgWW91IHdhaXQgdGlsbCBDaG9zZW5OYW1lJ3MgYWxvbmUgb24gd2F0Y2gsIGFuZCBkcmF3IHRoZSBzeW1ib2wgb2YgSnVzdGljZSBvbiBhIG5lYXJieSB0cmVlLmAsIC8vIFN5bWJvbHMgb3IgUnVuZXM6IFVzaW5nIG5hdHVyYWwgbWF0ZXJpYWxzIGFyb3VuZCB0aGUgY2FtcCwgdGhlIHNwaXJpdCBjb3VsZCBhcnJhbmdlIHN5bWJvbHMgb3IgcnVuZXMgdGhhdCBjb252ZXkgYSBtZXNzYWdlXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnZmlyc3RBcHBlYXJhbmNlX3RyZWUnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZmlyc3RBcHBlYXJhbmNlX3RyZWUxfSxcbiAgICB7Y2hvaWNlVGV4dDogYFlvdSB3YWl0IHRpbGwgdGhlIG90aGVycyBhcmUgYXNsZWVwLCBhbmQgY2hhbmdlIHRoZSBzaGFwZSBvZiBDaG9zZW5OYW1lJ3Mgc2hhZG93IGNhdXNlZCBieSB0aGUgY2FtcGZpcmUuYCwgLy8gQW5pbWF0ZWQgU2hhZG93czogVGhlIHNwaXJpdCBjb3VsZCBhbmltYXRlIHNoYWRvd3MgY2FzdCBieSBvYmplY3RzIGluIHRoZSBlbnZpcm9ubWVudCwgY2F1c2luZyB0aGVtIHRvIG1vdmUgaW4gd2F5cyB0aGF0IGNvbnZleSBtZXNzYWdlcyBvciBpbWFnZXMgcmVsZXZhbnQgdG8gdGhlIGFkdmVudHVyZXJzJyBqb3VybmV5LiBGb3IgZXhhbXBsZSwgYSBzaGFkb3cgbWlnaHQgbWltaWMgdGhlIHNoYXBlIG9mIGEga2V5IHRvIGluZGljYXRlIHRoYXQgdGhleSBhcmUgdW5sb2NraW5nIGEgZ3JlYXQgbXlzdGVyeSBvciBwb3dlclxuICAgIGNob2ljZU1vZGlmaWVyczogJ2ZpcnN0QXBwZWFyYW5jZV9zaGFkb3cnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZmlyc3RBcHBlYXJhbmNlX3NoYWRvdzF9LFxuICAgIHtjaG9pY2VUZXh0OiBgWW91IHNlYXJjaCBmb3IgYW4gYW5pbWFsLCBhbmQgZ2l2ZSBpdCBhIGNvbW1hbmQgdG8gYXBwcm9hY2ggdGhlIGNhbXAgd2hlbiB0aGUgb3RoZXJzIGFyZSBhc2xlZXAuYCwgLy8gR3VpZGluZyBBbmltYWxzOiBUaGUgc3Bpcml0IGNvdWxkIGluZmx1ZW5jZSB0aGUgYmVoYXZpb3Igb2YgYW5pbWFscyBpbiB0aGUgYXJlYSwgY2F1c2luZyB0aGVtIHRvIGFjdCBpbiB3YXlzIHRoYXQgbGVhZCB0aGUgYWR2ZW50dXJlcnMgaW4gdGhlIHJpZ2h0IGRpcmVjdGlvbiBvciB3YXJuIHRoZW0gb2YgaW1wZW5kaW5nIGRhbmdlclxuICAgIGNob2ljZU1vZGlmaWVyczogJ2ZpcnN0QXBwZWFyYW5jZV9hbmltYWwnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZmlyc3RBcHBlYXJhbmNlX2FuaW1hbDF9LFxuICAgIHtjaG9pY2VUZXh0OiBgWW91IHdhaXQgZm9yIENob3Nlbk5hbWUgdG8gZ2V0IGEgZHJpbmsgb3IgcG9saXNoIHhpcyBhcm1vciwgdGhlbiBhbHRlciB0aGUgcmVmbGVjdGlvbi5gLCAvLyBWaXNpb25zIGluIFJlZmxlY3RpdmUgU3VyZmFjZXM6IFRoZSBzcGlyaXQgY291bGQgY29tbXVuaWNhdGUgdGhyb3VnaCB2aXNpb25zIHRoYXQgYXBwZWFyIGluIHJlZmxlY3RpdmUgc3VyZmFjZXMgc3VjaCBhcyBzdGlsbCB3YXRlciwgbWlycm9ycywgb3IgcG9saXNoZWQgbWV0YWwuIFRoZXNlIHZpc2lvbnMgY291bGQgb2ZmZXIgZ2xpbXBzZXMgb2YgdGhlIGFkdmVudHVyZXJzJyBmdXR1cmUgb3IgcHJvdmlkZSBjcnlwdGljIGNsdWVzIGFib3V0IHRoZWlyIGRlc3RpbnkgYXMgdGhlIENob3NlbiBvbmVcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdmaXJzdEFwcGVhcmFuY2VfcmVmbGVjdGlvbicsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBmaXJzdEFwcGVhcmFuY2VfcmVmbGVjdGlvbjF9XSxcbiAgICB1bmRlZmluZWQpXG5sZXQgbWV0aG9kT2ZDb250YWN0MWIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BBZnRlciBhIGxpdHRsZSBiaXQgb2YgdGhpbmtpbmcgYW5kIHRlc3RpbmcsIGZhciBmcm9tIHRoZSBjYW1wLCB5b3UgZGV0ZXJtaW5lIHRoYXQgYWxsIHlvdSBjYW4gZG8gZm9yIG5vdyBhcyBhIFNwaXJpdCwgaXMgdG8gbWFuaXB1bGF0ZSBpbmFuaW1hdGUgb2JqZWN0cy5gLCBgVGhlb3JldGljYWxseSwgeW91IGFsc28gZmVlbCB0aGF0IHlvdSBtaWdodCBiZSBhYmxlIHRvIGdpdmUgbGl0dGxlIGNvbW1hbmRzIHRvIG5vbi1odW1hbiBhbmltYWxzLCBhbmQsIGlmIHlvdSBjb25jZW50cmF0ZSBoYXJkLCBmaWxsIGRyZWFtcyBvZiBzbHVtYmVyaW5nIGZvbGtzIHdpdGggaW1hZ2VzLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBtZXRob2RPZkNvbnRhY3QyKVxubGV0IG1ldGhvZE9mQ29udGFjdDEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BOb3csIGhvdyB0byBtYWtlIGNvbnRhY3Q/YCwgYEh1bWFucyBjYW4ndCBzZWUsIGhlYXIgb3IgdG91Y2ggU3Bpcml0cyBkaXJlY3RseS5gLCBgU3Bpcml0cyBhcmUgdG9sZCB0byBoYXZlIG1hZ2ljYWwgYWJpbGl0aWVzLmAsIGBUaGUgb25seSBiZWluZ3MgaW4gdGhlIHdvcmxkIHRvIGhhdmUgdGhlbSwgYWN0dWFsbHkuYCwgYFRob3NlIHdvdWxkIGJlIGhhbmR5IHJpZ2h0IGFib3V0IG5vdy5gLCBgWW91IHRyeSB0byBmZWVsIHdoYXQgeW91IGNhbiBkby5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgbWV0aG9kT2ZDb250YWN0MWIpXG5sZXQgY2hvc2VQZWN1bGlhciA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYENhcHRhaW4gUGVjdWxpYXIgaXMgdGhlIG9idmlvdXMgY2hvaWNlLmAsIGBJbiByZWFsaXR5LCB5b3Uga25vdyBub3RoaW5nIGFib3V0IHRoZXNlIHBlb3BsZSdzIHBhc3RzLCB5ZXQgeW91J3JlIHN1cHBvc2VkIHRvIHBpY2sgd2hpY2ggb25lJ3MgbW9zdCBzdWl0YWJsZSB0byBiZSB0aGUgQ2hvc2VuIG9mIEp1c3RpY2UuYCwgYFdobydzIG1vcmUgbGlrZWx5IHRvIEJFTElFVkUgdGhleSdyZSBDaG9zZW4sIHJhdGhlci5gLCBgUGVjdWxpYXIncyBpbiBjaGFyZ2UsIHdoaWNoIG1lYW5zIHNoZSdzIHByb2JhYmx5IGFjY29tcGxpc2hlZCB0aGUgbW9zdC4gUmlnaHQ/YF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIG1ldGhvZE9mQ29udGFjdDEpXG5sZXQgY2hvc2VTbmFwZHJhZ29uID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgQ2FwdGFpbiBQZWN1bGlhciBhbmQgTHlzYW5kZXIgYXJlIGhvbm9yYWJsZSwgbWlsaXRhcnkgdHlwZXMuYCwgYEl0IHdpbGwgYmUgbXVjaCBoYXJkZXIgdG8gdHJpY2sgdGhlbSBpbnRvIGJlbGlldmluZyB0aGF0IHRoZXkgYXJlIHRoZSBjaG9zZW4gb25lcy5gLCBgU25hcGRyYWdvbiwgd2hvIGxvb2tzIGVnb3Rpc3RpY2FsLCBoYW5kc29tZSBhbmQgcG9wdWxhciwgaXMgdGhlIG9idmlvdXMgY2hvaWNlLmAsIGBIZSdsbCBiZSBlYXNpZXIgdG8gY29udmluY2UgdGhhdCBoZSdzIHRoZSBDaG9zZW4gT25lLmAsIGBSaWdodD9gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgbWV0aG9kT2ZDb250YWN0MSlcbmxldCBjaG9zZUx5c2FuZGVyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IHN0b3AgeW91cnNlbGYgZm9yIGEgbW9tZW50LmAsIGBOb3QganVzdCB5b3VyIHN1cnZpdmFsIGFzIGEgU3Bpcml0IGlzIGF0IHN0YWtlLmAsIGBUaGlzIGNob2ljZSB3aWxsIGhhdmUgY29uc2VxdWVuY2Ugb24gdGhlIGVudGlyZSBGYXRlZCBSZWFsbS5gLCBgVGhlIHBlcnNvbiB5b3UgYXBwZWFyIHRvIGFuZCB0cnkgdG8gY29udmluY2UgdGhhdCB0aGV5IGFyZSB0aGUgQ2hvc2VuIG9mIHRoZSBQaG9lbml4IG9mIEp1c3RpY2Ugd2lsbCBiZWNvbWUgYSBiaWcgZGVhbCBldmVudHVhbGx5LmAsIGBMeXNhbmRlciwgYSB0cnVlIHdhcnJpb3IsIGEgZGVwZW5kYWJsZSwgbm8tbm9uc2Vuc2Ugc29sZGllciwgd2lsbCBjYXJyeSB0aGlzIHN0YXR1cyB0aGUgYmVzdC5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgbWV0aG9kT2ZDb250YWN0MSlcbi8vIHdoYXQgYXJlIHRoZSBzdG9yaWVzIG9mIHBlb3BsZSB0YWxraW5nIHRvIFNwaXJpdHM/IG1vc3RseSBzcGlyaXRzIGFjdGluZyBsaWtlIG1lc3NlbmdlcnMgb2YgdGhlIFN1bnMsIGNob29zaW5nIGh1bWFucyBhcyB0aGVpciBjaGFtcGlvbnNcbi8vIEkgbmVlZCB0byBwcm9tb3RlIEp1c3RpY2UsIGhlbmNlIHRoZXkgbmVlZCB0byBzZWUgbWUgYXMgYW4gYXV0aG9yaXR5XG4vLyBJJ2xsIHRlbGwgdGhlbSB0aGF0IHRoZXkgYXJlIHRoZSBjaG9zZW4gb25lLCBmb3IgdGhlbSB0byBzZWUgbWUgYXMgYW4gYXV0aG9yaXR5XG5sZXQgc3Bpcml0QXBwZWFyMyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Nob2ljZScsXG4gICAgW2BRdWVzdGlvbiBpczogd2hvIHRvIGFwcGVhciB0bz9gLCBgV2hvIHBvcnRyYXlzIHRoZSBpZGVhIG9mIEp1c3RpY2UgdGhlIG1vc3Q/IE9yLCB3aG8gd291bGQgQkVMSUVWRSB0aGF0IHRoZXkgYXJlIHRoZSBDaG9zZW4gb2YgSnVzdGljZT9gLCBgV2hvIGRvIHlvdSBtYWtlIHRoZSBDaG9zZW4gb25lP2BdLFxuICAgIFt7Y2hvaWNlVGV4dDogYENhcHRhaW4gUGVjdWxpYXIsIHRoZSBzZXJpb3VzIGNvbW1hbmRlciB3aG8gc2VlbXMgdG8gYmUgaW4gdHVuZSB3aXRoIG90aGVyczsgbmVlZHMuYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdjaG9zZW5QZWN1bGlhcicsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBjaG9zZVBlY3VsaWFyfSxcbiAgICB7Y2hvaWNlVGV4dDogYFNuYXBkcmFnb24sIGhpcyBlYXN5IGFuZCBtaXNjaGlldm91cyBzbWlsZSB0ZWxscyB5b3UgdGhhdCBoZSdzIHRvbyBlZ290aXN0aWNhbCB0byBub3QgYmVsaWV2ZSB0aGF0IGhlJ3MgdGhlIENob3NlbiBvbmUuYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdjaG9zZW5TbmFwZHJhZ29uJyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGNob3NlU25hcGRyYWdvbn0sXG4gICAge2Nob2ljZVRleHQ6IGBMeXNhbmRlci4gQSB0cnVlLCByZXN0bGVzcyB3YXJyaW9yIHdpdGggaW1wZWNjYWJsZSBjYXJlIGZvciB0aGVpciBnZWFyIGFuZCB2aWdpbGFuY2UgaW4gdGhlaXIgZXllcy5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ2Nob3Nlbkx5c2FuZGVyJyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGNob3NlTHlzYW5kZXJ9XSxcbiAgICB1bmRlZmluZWQpIFxubGV0IHNwaXJpdEFwcGVhcjJiID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IG5vdyBrbm93IHdoYXQgeW91IGhhdmUgdG8gZG8uYCwgYFlvdSBoYXZlIHRvIG1ha2UgeW91ciBmaXJzdCBjb250YWN0IHNlZW0gYXMgbGVnaXRpbWF0ZSBhcyBwb3NzaWJsZS5gLCBgTWFrZSBjb250YWN0IHdpdGggb25lIG9mIHRoZW0sIGFuZCBtYWtlIHRoZW0gYmVsaWV2ZSB0aGV5IGFyZSB0aGUgQ2hvc2VuIG9uZS4gQ2hvc2VuIG9mIHRoZSBQaG9lbml4IG9mIEp1c3RpY2UuYCwgYEV2ZW4gdGhvdWdoIHlvdSByZWFsbHkgaGF2ZSBubyBpZGVhIHdoYXQgeW91J3JlIGRvaW5nLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBzcGlyaXRBcHBlYXIzKVxubGV0IHNwaXJpdEFwcGVhcjIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BBICdDaG9zZW4gd2FycmlvcicuYCwgYFRoYXQncyB3aGF0IHlvdSBuZWVkIHRvIGRvIGlmIHlvdSB3YW50IHRvIHNlZW0gbGVnaXRpbWF0ZSB0byB0aGVtLmAsIGBUaGF0J3MgcmlnaHQhYCwgYFRoZSB0cmlvIHdvdWxkIGhhdmUgaGVhcmQgdGFsZXMgb2YgU3Bpcml0cyB0b28uYCwgYFNvIGlmIHlvdSBwaWNrIG9uZSBvZiB0aGVtLCB3aG9ldmVyIHNlZW1zIHRvIG1vc3QgZml0IHRoZSBpZGVhIG9mIEp1c3RpY2UsIGFuZCBzbG93bHkgYmVjb21lIHRoZWlyIGd1aWRlLCB0aGVpciBkaXZpbmUgbWVzc2VuZ2VyLi4uYCwgYC4uLlRoaXMgcGVyc29uIHdpbGwgYmVsaWV2ZSB0aGF0IHRoZXkncmUgdGhlIENob3NlbiBvZiBKdXN0aWNlLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBzcGlyaXRBcHBlYXIyYilcbmxldCBzcGlyaXRBcHBlYXIxID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgVGhpcyBpcyBhIHF1ZXN0aW9uLCBhY3R1YWxseS5gLCBgU2hvdWxkIHlvdSBtYWtlIGNvbnRhY3Qgd2l0aCBvbmUgb2YgdGhlbSwgb3Igd2l0aCBhbGwgb2YgdGhlbSBhdCBvbmNlP2AsIGBMaXRlcmFsbHkgZXZlcnkgdGFsZSBhYm91dCBTcGlyaXRzIHBvcnRyYXllZCB0aGVtIGFzIGd1aWRlcywgZGl2aW5lIG1lc3NlbmdlcnMgb2YgdGhlIFBob2VuaXhlcy4gVGhlIEdvZHMuYCwgYFRoZSBTcGlyaXRzIG9mIG15dGhzIGFwcGVhciB0byBDaG9zZW4gd2FycmlvcnMsIHRob3NlIHdobyBzaG93ZWQgZGVkaWNhdGlvbiB0byB0aGUgU3Bpcml0J3MgY29uY2VwdC5gLCBgVGhlIFNwaXJpdCB3aWxsIGZpcnN0IHNob3cgc2lnbnMgdG8gdGhlIENob3NlbiB3YXJyaW9yLCBzaWducyB0aGF0IHRoZSB3YXJyaW9yIGlzIG9uIHRoZSByaWdodCBwYXRoLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBzcGlyaXRBcHBlYXIyKVxuLy8gd2F0Y2hpbmcgdGhlbVxubGV0IHNwaXJpdFdhdGNoOCA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYEFsbCB0aGlzIGluZm9ybWF0aW9uIHdpbGwgc3VyZWx5IGJlIHVzZWZ1bCBpZiB5b3Ugd2FudCB5b3VyIGZpcnN0IGdob3N0bHkgY29udGFjdCB3aXRoIHRoZSB0aHJlZSB0byBiZSBzdWNjZXNzZnVsLmAsIGBZb3UncmUgbGlrZWx5IHRvIGhhdmUgb25lIHNob3QgYXQgdGhpcy5gLCBgWW91IG5lZWQgdG8gbWFrZSBjb250YWN0IHdpdGggdGhlbSwgb3Igb25lIG9mIHRoZW0uYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHNwaXJpdEFwcGVhcjEpXG5sZXQgc3Bpcml0V2F0Y2g3ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGZlZWwgeW91cnNlbGYgZ3Jvd2luZyB3ZWFrZXIuIFlvdSdyZSBhYm91dCB0byBkaXNlYXBwZWFyIGZyb20gbm90IHNlcnZpbmcgdGhlIFBob2VuaXggb2YgSnVzdGljZS5gLCBgWW91IGRpZCBsZWFybiBhIGJ1bmNoIGFib3V0IHRoZSB0aHJlZSwgaG93ZXZlci5gLCBgVGhlaXIgbmFtZXM6IENhcHRhaW4gUGVjdWxpYXIsIFNuYXBkcmFnb24gYW5kIEx5c2FuZGVyLmAsIGBUaGVpciBhbGxlZ2lhbmNlOiB0aGUgQWR2ZW50dXJlcidzIEd1aWxkLCBhbmQgd2hhdCB0aGV5J3JlIGRvaW5nIGhlcmU6IGFuc3dlcmluZyB0aGUgTmV3IERhd24gRWRpY3QuYCwgYFRoZSBsb2NhdGlvbiBmaXRzIC0gdGhlIEZvcmVzdCBvZiBNaXJyb3JzLCB3aGVyZSB5b3UgY3VycmVudGx5IGFyZSwgaXMgdG8gdGhlIGVhc3Qgb2YgdGhlIEZhdGVkIFJlYWxtJ3MgbWFpbiBjaXRpZXMuIEJldHdlZW4gdGhlIEZhdGVkIFJlYWxtIGFuZCB0aGUgRGVhZCBMYW5kcy5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgc3Bpcml0V2F0Y2g4KVxubGV0IHNwaXJpdFdhdGNoNiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbIGBBZHZlbnR1cmVyJ3MgR3VpbGQgbWVtYmVycyB1c3VhbGx5IHRyYXZlbCBhbG9uZS4gVGhleSdyZSB0YXVnaHQgdG8gYmUgc2VsZi1zdWZmaWNpZW50LCBhbmQgdG8gcGljayBjb250cmFjdHMgc3VpdGFibGUgZm9yIHRoZWlyIHNraWxsIGxldmVscy5gLCBgWWV0IHRoZXJlIGFyZSB0aHJlZSBvZiB0aGVtIGhlcmUsIGFuZCB0aGF0IGZpdHMgb2YgdGhpcyAnTmV3IERhd24gRWRpY3QnIGZyb20gQ2FwdGFpbiBQZWN1bGlhcidzIGRvY3VtZW50LmAsICdUaGUgTmV3IERhd24gRWRpY3QuJywgYEFjY29yZGluZyB0byB0aGUgZG9jdW1lbnQgeW91IHNhdyBpbiBQZWN1bGlhcidzIHNhdGNoZWwsIGFuIG9wZW4gbWlzc2lvbiBmcm9tIHRoZSBIaWdoZmF0ZSBoZXJzZWxmLCBmb3IgQWR2ZW50dXJlcnMgdG8gdmVudHVyZSBpbnRvIHRoZSBEZWFkIExhbmRzLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBzcGlyaXRXYXRjaDcpXG5sZXQgc3Bpcml0V2F0Y2g1ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGtub3cgb2YgdGhlIEFkdmVudHVyZXIncyBHdWlsZC5gLCBgWW91IGRvbid0IHJlbWVtYmVyIHlvdXIgcHJldmlvdXMgbGlmZSwgd2hlbiB5b3UndmUgYmVlbiwgeW91IGFzc3VtZSwgYSBodW1hbi5gLCBgSG93ZXZlciwgeW91IG5vdGljZSB0aGF0IHlvdSBkbyByZXRhaW4gbWVtb3JpZXMgb2YgdGhlIEZhdGVkIFJlYWxtLCBpdHMgY3VsdHVyZSwgbGlrZSBuaWNrbmFtZXMgYW5kIG9yZ2FuaXphdGlvbnMuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHNwaXJpdFdhdGNoNilcbmxldCBzcGlyaXRXYXRjaDQgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZZXMsIGl0IGxvb2tzIGxpa2UgdGhlIHRocmVlIGJlbG9uZyB0byB0aGUgQWR2ZW50dXJlcidzIEd1aWxkLmAsIGBUaGUgRmF0ZWQgUmVhbG0ncyBBZHZlbnR1cmVyJ3MgR3VpbGQgaXMgYSBsb29zZSB1bmlvbiBvZiBza2lsbGVkIGZpZ2h0ZXJzLmAsIGBUaGV5IHRyYXZlbCB0aGUgRmF0ZWQgUmVhbG0sIHVzdWFsbHkgYWxvbmUsIHRha2luZyBvbiBjb250cmFjdHMgZnJvbSBwZW9wbGUgdG8gYXNzaXN0IHdpdGggd2lsZCBjcmVhdHVyZXMsIGJhbmRpdHMsIG9yIHN0cmF5IHVuZGVhZCB0aGF0IG1pZ2h0IGhhdmUgd2FuZGVyZWQgaW50byB0aGUgUmVhbG0ncyBlYXN0ZXJuIHJlZ2lvbnMgZnJvbSB0aGUgRGVhZCBMYW5kcy5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgc3Bpcml0V2F0Y2g1KVxubGV0IHNwaXJpdFdhdGNoMyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFRoZSBsYXN0IHBlcnNvbiwgYW5kcm9neW5vdXMtbG9va2luZywgd2l0aCBzaG91bGRlciBsZW5ndGggcmVkIGhhaXIsIGlzIEx5c2FuZGVyLmAsIGBUaGV5IHdlYXIgdGhlIGhlYXZpZXN0IGFybW9yIGFuZCBzZWVtIHRvIGJlIHRoZSB3ZWFwb25zIHNwZWNpYWxpc3Qgb2YgdGhlIHRocmVlLmAsIGBMeXNhbmRlcidzIGFybW9yIGlzIHBlcmZlY3RseSBtYWludGFpbmVkLCBldmVuIGluIHRoaXMgd2VhdGhlci4gU28gd2VsbCwgaW4gZmFjdCwgdGhhdCB0aGV5IGFyZSBldmVuIHdlYXJpbmcgdGhlaXIgb2ZmaWNpYWwgQWR2ZW50dXJlcidzIExlYWd1ZSBiYWRnZSAtIGdpdmluZyB5b3UgYSBjaGFuY2UgdG8gcmVhZCB0aGVpciBmdWxsIG5hbWUgLSBMeXNhbmRlciBNYWNBcHBsZWJ5LCBvZiB0aGUgQWR2ZW50dXJlcidzIEd1aWxkLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBzcGlyaXRXYXRjaDQpXG5sZXQgc3Bpcml0V2F0Y2gyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgXCJQZWN1bGlhclwiIGlzIHByb2JhYmx5IGEgbmlja25hbWUuIE5pY2tuYW1lcyBhcmUgY29tbW9uIGluIHRoZSBGYXRlZCBSZWFsbS5gLCBgVGhlIGxvbmctaGFpcmVkIG1hbiBpcyBQZWN1bGlhcidzIHlvdW5nZXIgYnJvdGhlciwgU25hcGRyYWdvbiwgb3IgU25hcC5gLCBgSGUgc2VlbXMgdG8gYmUgdGhlIG1vc3QgdW5jb21mb3J0YWJsZSBoZXJlIGluIHRoZSBmcm96ZW4gd2lsZGVybmVzcy5gLCBgUGVyaGFwcyB0aGF0J3MganVkZ21lbnRhbCwgYnV0IHlvdSBhc3N1bWUgdGhhdCBoZSdzIGhhcHBpZXIgYW5kIG1vcmUgcmVzb3VyY2VmdWwgaW4gYSBidXN0bGluZyBjaXR5LmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBzcGlyaXRXYXRjaDMpXG5sZXQgc3Bpcml0V2F0Y2gxID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGRlY2lkZSB0byBiZSBtZXRob2RpY2FsIGluIGhvdyB5b3UgYXBwcm9hY2ggdGhlbS5gLCBgQWZ0ZXIgYWxsLCBpZiB5b3UgYm90Y2ggeW91ciBvbmUgY2hhbmNlIHRvIG1ha2UgY29udGFjdCwgdGhlcmUgbWlnaHQgbm90IGJlIGFueSBvdGhlciBwZW9wbGUgYXJvdW5kIHRvIHByZWFjaCBKdXN0aWNlIHRvLCBhbmQgeW91IHdpbGwgZGlzYXBwZWFyLmAsIGBZb3UgY2FuJ3QgdGFrZSB0aGF0IGNoYW5jZSwgc28geW91IHdhdGNoIHRoZSB0cmlvIGZvciBhbm90aGVyIGhvdXIgb3Igc28uYCwgYFlvdSBsZWFybiB0aGF0IHRoZSBvbmUgeW91IGFzc3VtZWQgdG8gYmUgaW4gY2hhcmdlIGlzIENhcHRhaW4gUGVjdWxpYXIuIEEgc2VyaW91cyB3b21hbiB3aXRoIG9saXZlIHNraW4gYW5kIGRhcmsgaGFpciB3aG8ncyBhbHdheXMgcGF5aW5nIGF0dGVudGlvbiB0byBoZXIgdHdvIGNvbXBhbmlvbnMuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHNwaXJpdFdhdGNoMilcbi8vIGNob2ljZTogd2F0Y2ggdGhlbSBmb3IgYSB3aGlsZSB0byBtYWtlIGEgYmV0dGVyIHNlbGVjdGlvbiBidXQgYmVjb21lIHdlYWtlciwgb3IgY2hvb3NlIG5vd1xubGV0IGNhbXBWaWJlczYgPSBuZXcgc3RvcnlFbGVtZW50KCdjaG9pY2UnLFxuICAgIFtgWW91IGZlZWwgeW91ciB2aXNpb24gZ2V0dGluZyBldmVuIGJsdXJyaWVyLiBGbG9hdGluZyBpcyBoYXJkZXIgYW5kIGhhcmRlciB3aXRoIGVhY2ggcGFzc2luZyBtaW51dGUuYCwgYFlvdSBuZWVkIHRvIG1ha2UgY29udGFjdCwgdG8gcHJvbW90ZSB0aGUgaWRlYSBvZiBKdXN0aWNlIHRvIHRoZW0sIG9yIHRvIG9uZSBvZiB0aGVtLCBvciB5b3UnbGwgZGlzYXBwZWFyLmAsIGBZb3UncmUgbm90IHN1cmUgd2hhdCBoYXBwZW5zIHRvIFNwaXJpdHMgaWYgdGhleSBkaXNhcHBlYXIgd2l0aG91dCBwZXJmb3JtaW5nIHRoZWlyIGZ1bmN0aW9uLmAsIGBZb3UgaGF2ZSB0byBtYWtlIGEgZGVjaXNpb24uIERvIHlvdSB0cnkgdG8gdXNlIHlvdXIgYWJpbGl0aWVzIHRvIG1ha2UgY29udGFjdCB3aXRoIG9uZSBvZiB0aGVtPyBPciBkbyB5b3Ugd2FpdCwgYW5kIGtlZXAgd2F0Y2hpbmc/YF0sXG4gICAgW3tjaG9pY2VUZXh0OiBgSSB3aWxsIHdhaXQsIGFuZCBrZWVwIHdhdGNoaW5nLiBJIG5lZWQgdG8gZ2F0aGVyIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRocmVlIGJlZm9yZSBJIGNhbiBlZmZlY3RpdmVseSBjb21tdW5pY2F0ZS5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogbnVsbCxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IHNwaXJpdFdhdGNoMX0sXG4gICAge2Nob2ljZVRleHQ6IGBJIG5lZWQgdG8gbWFrZSBjb250YWN0LiBJIGNhbiBmZWVsIHRoYXQgSSBhbSBkaXNhcHBlYXJpbmcgYW5kIEknbGwgb25seSBnZXQgd2Vha2VyIHdpdGggZWFjaCB3YXN0ZWQgbWludXRlLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiBudWxsLFxuICAgIGNob2ljZU5leHRTdG9yeTogc3Bpcml0QXBwZWFyMX1dLFxuICAgIHVuZGVmaW5lZCkgXG4vLyBWSUJFUyBPRiBUSEUgQ0FNUFxubGV0IGNhbXBWaWJlczUgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BcIlJlYWRpbmcgdGhlIGVkaWN0IGFnYWluLCBzaXN0ZXI/XCIgYSB2b2ljZSBzYXlzIGFzIHRoZSBzZWNvbmQgbWFuLCB0aGUgb25lIHdpdGggdGhlIGxvbmcgaGFpciBhbmQgdGhlIGVhc3kgc21pbGUsIHNjb290cyBvdmVyIGNsb3NlciB0byB0aGUgY29tbWFuZGVyLmAsIGBcIkRvIHlvdSBuZWVkIGFueXRoaW5nLCBTbmFwP1wiIHRoZSB3b21hbiByZXNwb25kcywgaWdub3JpbmcgaGlzIGNvbW1lbnQuIFRoZXJlJ3MgYSBoaW50IG9mIGNvbmNlcm4gaW4gaGVyIHZvaWNlLmAsIGBcIk5haCwgSSdtIGZpbmUuIEFzIGZpbmUgYXMgSSBjYW4gYmUsXCIgU25hcCBjaHVja2xlcyBhbmQgdGhlIHNob3J0IGV4Y2hhbmdlIGlzIG92ZXIuXCJgXSxcbiAgICB1bmRlZmluZWQsXG4gICAgY2FtcFZpYmVzNilcbmxldCBjYW1wVmliZXM0ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgVGhlIGNvbW1hbmRlciBwdXRzIGJhY2sgdGhlIGRvY3VtZW50LCBidXQgeW91IGRpZCBtYW5hZ2UgdG8gcmVhZCBhIGxpdHRsZS5gLCBgVGhlIGRvY3VtZW50IGRlc2NyaWJlZCBzb21ldGhpbmcgY2FsbGVkIHRoZSBOZXcgRGF3biBFZGljdC5gLCBgQW4gb3BlbiBjYWxsLCBhIG1pc3Npb24sIGZyb20gdGhlIEhpZ2hmYXRlIGZvciBhbnkgYWR2ZW50dXJlciB0byBhbnN3ZXIuYCwgYEJlZm9yZSB0aGUgY29tbWFuZGVyIHB1dCBhd2F5IHRoZSBkb2N1bWVudCwgeW91IG1hbmFnZWQgdG8gc2VlIHRoYXQgdGhlIG1pc3Npb24gb2YgdGhlIE5ldyBEYXduIEVkaWN0IGludm9sdmVzIHRyYXZlbGluZyB0byB0aGUgRGVhZCBMYW5kcyAtIGxhbmQgb2YgdW5kZWFkIGFuZCBub21hZGljIG5lY3JvbWFuY2VycyBiZXlvbmQgdGhlIGVhc3Rlcm4gYm9yZGVyIG9mIHRoZSBGYXRlZCBSZWFsbS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgY2FtcFZpYmVzNSlcbmxldCBjYW1wVmliZXMzID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgTHVja2lseSBmb3IgeW91LCB0aGUgY29tbWFuZGVyIGRlY2lkZXMgdG8gcmV0cmlldmUgdGhlIHBpZWNlIG9mIHBhcGVyLCBhbmQgc3RhcnRzIHRvIHJlYWQgaXQuYCwgYFlvdSBxdWlja2x5IGZsb2F0IG92ZXIgYmVoaW5kIGhlciBzaG91bGRlciwgcmVhZGluZyB0aGUgcGFwZXIgdG8gdHJ5IHRvIGZpbmQgb3V0IG1vcmUgYWJvdXQgdGhlIHRocmVlLmAsIGBGbG9hdGluZyBjbG9zZXIgdG8gdGhlIGNvbW1hbmRlciwgeW91IGdldCBhIGJldHRlciBsb29rIGF0IGhlciBmYWNlLmAsIGBTaGUncyBpbiBoZXIgZWFybHkgNDAncy4gT2xpdmUgc2tpbiwgZGFyayBoYWlyLCBzb2xlbW4sIGV4aGF1c3RlZCwgaW4tY2hhcmdlIGV4cHJlc3Npb24uIENpZ2FyZXR0ZSBidXR0cyBpbiBhIHNtYWxsIGdhcmJhZ2Ugc2FjayBuZWFyIGhlci5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgY2FtcFZpYmVzNClcbmxldCBjYW1wVmliZXMyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgVGhlIHRyaW8ga2VlcCBzaXR0aW5nIG5lYXIgdGhlIGZpcmUuYCwgYFlvdSBub3RpY2UgdGhhdCB0aGUgZmlyc3Qgd29tYW4sIHRoZSBjb21tYW5kZXIsIGhhcyBhIHBpZWNlIG9mIHBhcGVyIHN0aWNraW5nIG91dCBvZiBoZXIgcnVja3NhY2suYCwgYFRoZSBwaWVjZSBvZiBwYXBlciBiZWFycyB0aGUgc2VhbCBvZiB0aGUgSGlnaGZhdGUsIHRoZSBsZWFkZXIgYW5kIHByb3RlY3RvciBvZiB0aGUgRmF0ZWQgUmVhbG1zLmAsIGBXaG9ldmVyLCB0aGVzZSB0aHJlZSBhcmUsIHRoZXkncmUgbm90IG9ubHkgYXJtZWQsIGJ1dCBvbiBvZmZpY2lhbCBidXNpbmVzcywgaXQgc2VlbXMuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGNhbXBWaWJlczMpXG5sZXQgY2FtcFZpYmVzMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBsaW5nZXIgbmVhciB0aGVpciBjYW1wLCB3YXRjaGluZyB0aGUgdHJpbyBmcm9tIGRpZmZlcmVudCBhbmdsZXMuYCwgYFRoZSByZWFsaXR5IG9mIHlvdXIgbmV3IGNvbmRpdGlvbiBpcyBzbG93bHkgc2V0dGluZyBpbi4gTGlrZSBiZWZvcmUsIHRoZSB0cmlvIGRvbid0IGhlYXIgeW91LCBkb24ndCBzZWUgeW91LCBhbmQgY2FuJ3QgdG91Y2ggeW91LmAsIGBZb3UgcHVzaCB0aGVzZSB0aG91Z2h0cyBhd2F5LiBZb3UncmUgYWxpdmUuIEluIGEgbmV3IGZvcm0uIFdpdGggYSBuZXcgbWlzc2lvbiBvZiBKdXN0aWNlLmAsIGBCdXQgYWxpdmUuIEFuZCB0byBzdGF5IGFsaXZlLCB5b3UgbmVlZCB0aGVzZSBwZW9wbGUuIFlvdSBuZWVkIHRoZW0gdG8gZW1icmFjZSBKdXN0aWNlLmAsIGBUaGUgbW9vZCBpbiB0aGUgY2FtcCBpcyBzb2xlbW4sIGJ1dCBkZXRlcm1pbmVkLiBQZXJoYXBzIHRoaXMgaXMgdG8gYmUgZXhwZWN0ZWQsIGNvbnNpZGVyaW5nIHRoZSBzdXJyb3VuZGluZ3MgYW5kIHRoZSB3ZWF0aGVyLmAsIGBUaGUgRm9yZXN0IG9mIE1pcnJvcnMgaXMgYW4gdW5mb3JnaXZpbmcgcGxhY2UgaW5kZWVkLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBjYW1wVmliZXMyKVxuLy8gREVTQ1JJUFRJT05TIE9GIFRIRSBUSFJFRVxubGV0IGx5c2FuZGVyRGVzY3JpcHRpb24gPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BUaGUgbGFzdCBwZXJzb24gYXJvdW5kIHRoZSBjYW1wZmlyZSBpcyBhIGZpZ3VyZSB3aXRoIHNob3VsZGVyLWxlbmd0aCByZWQgaGFpci5gLCBgVGhleSBsb29rIGxpa2UgdGhlIHlvdW5nZXN0IG9mIHRoZSB0cmlvLCBwZXJoYXBzIGluIHRoZWlyIGxhdGUgMjAncy5gLCBgRGVzcGl0ZSB0aGF0LCB0aGV5IGNhcnJ5IHRoZW1zZWx2ZXMgd2l0aCB0aGUgcG9pc2Ugb2YgYSBzZWFzb25lZCB3YXJyaW9yLiBUaGV5IGFwcGVhciBpbmNyZWRpYmx5IHZpZ2lsYW50LCBhcyBpZiBhd2FpdGluZyBhIGNvbW1hbmQuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGNhbXBWaWJlczEpXG5sZXQgc25hcERlc2NyaXB0aW9uID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgVG8gaGVyIHJpZ2h0IGlzIGEgbWFuIHdpdGggbG9uZyBoYWlyIGZyYW1pbmcgaGlzIGZhY2UuIEhlIHNlZW1zIHRvIGJlIGluIGhpcyBlYXJseSAzMCdzLmAsIGBIaXMgZGVtZWFub3IgaXMgY2hhcm1pbmcsIGhpcyBzbWlsZSBlYXN5LCBpbnZpdGluZyB3aXRoIGEgaGludCBvZiBtaXNjaGllZi5gLCBgVGhlcmUncyBhIHNlbnNlIG9mIHJlc3RsZXNzbmVzcyBhYm91dCBoaW0sIGFzIGlmIGhlJ3MgY29uc3RhbnRseSBzZWVraW5nIHNvbWV0aGluZyBqdXN0IG91dCBvZiByZWFjaC5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgbHlzYW5kZXJEZXNjcmlwdGlvbilcbmxldCBwZWN1bGlhckRlc2NyaXB0aW9uID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgRGVzcGl0ZSB0aGUgYml0aW5nIGNvbGQgb2YgdGhlIGJsaXp6YXJkLCBzaGUgc2l0cyB3aXRoIGEgc2Vuc2Ugb2YgY29udHJvbCwgaGVyIHBvc3R1cmUgcmlnaWQuYCwgYFNoZSBzZWVtcyB0byBiZSBpbiBoZXIgZWFybHkgNDAncy4gSGVyIGZhY2UgYmVhcnMgdGhlIG1hcmtzIG9mIGhhcmRzaGlwLCB3aXRoIGxpbmVzIGV0Y2hlZCBkZWVwbHkgYXJvdW5kIGhlciBleWVzIGFuZCBtb3V0aC5gLCBgVHdvIHNjaW1pdGFycyBhbmQgYSBtdXNrZXQgYXJlIHJlc3RpbmcgbmV4dCB0byBoZXIuIEp1ZGdpbmcgYnkgaGVyIG91dGZpdCwgc2hlIHNlZW1zIHRvIGJlIHRoZSBvbmUgaW4gY2hhcmdlLmAsIGBEZXNwaXRlIGhlciBvdXR3YXJkIGFwcGVhcmFuY2Ugb2Ygc3RvaWNpc20sIHlvdSBzZW5zZSBhIGRlZXAtc2VhdGVkIGZhdGlndWUsIGFzIGlmIHNoZSdzIHRpcmVkIG9mIGFsd2F5cyBiZWluZyB0aGUgb25lIGluIGNoYXJnZS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgc25hcERlc2NyaXB0aW9uKVxubGV0IGFwcHJvYWNoQ2FtcEtub3c0ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgVGhlIHRocmVlIHBlb3BsZSBhcmUgYXJtZWQgLSB5b3Ugc2VlIG11c2tldHMgYW5kIHN3b3JkcyBuZXh0IHRvIHRoZW0uIFRoZXkgbG9vayBsaWtlIHNvbGRpZXJzLCBtZXJjZW5hcmllcywgb3IgZ3VhcmRzIG9mIHNvbWUgc29ydC5gLCBgSXQncyBraW5kIG9mIGNhbG1pbmcgLSB0byBmaW5hbGx5IHNlZSBzb21lIGh1bWFucy5gLCBgRGVzcGl0ZSB0aGUgZmFjdCB0aGF0IGl0J3MgdG9vIGxhdGUgZm9yIHlvdS5gLCBgTm8sIHN0b3AgaXQuIEl0J3Mgbm90IHRvbyBsYXRlLiBZb3UndmUgZGllZCwgYnV0IHlvdSdyZSBub3QgZGVhZC4gWW91J3JlIGEgU3Bpcml0LiBBbmQgeW91IGNhbiBzdXJ2aXZlLmAsIGBUaGUgZmlyc3Qgd29tYW4gaHVkZGxlcyBieSB0aGUgY2FtcGZpcmUsIHRoZSBvbGl2ZSBza2luIG9mIGhlciBmYWNlIGdsb3dpbmcgc29mdGx5IGluIHRoZSBmaXJlbGlnaHQuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHBlY3VsaWFyRGVzY3JpcHRpb24pXG4vLyBGSU5EIFRIRSBDQU1QIChET04nVCBLTk9XKVxubGV0IGRvbnRLbm93UmVhbGl6ZTcgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BUaGVuIHlvdSByZW1lbWJlciB0aGF0IFNwaXJpdHMgYXJlIHRoZSBvbmx5IGJlaW5ncyBpbiB0aGUgd29ybGQgd2hvIGhhdmUgbWFnaWNhbCBhYmlsaXRpZXMuIE5vIGh1bWFuIG9yIGFuaW1hbCBwb3NzZXNzZXMgdGhlbS5gLCBgVG8gcHJvbW90ZSB0aGVpciBjb25jZXB0cywgU3Bpcml0cyBoYXZlIHRoZSBhYmlsaXRpZXMgdG8gYWZmZWN0IHRoZSBtYXRlcmlhbCB3b3JsZCBpbiBnaG9zdGx5IHdheXMuIFRoZSBtb3JlIHBvd2VyZnVsIHRoZSBTcGlyaXQsIHRoZSBtb3JlIHN1YnN0YW50aWFsIHRoZSBlZmZlY3RzLmAsIGBZb3UgY2FuJ3QgdG91Y2ggb3IgdGFsayB0byB0aGVzZSBwZW9wbGUsIGJ1dCB5b3UgaGF2ZSB0byBzdGFydCBzb21ld2hlcmUuIFN0YXJ0IHByb21vdGluZyBKdXN0aWNlLCBvciB5b3UnbGwgZGlzYXBwZWFyLmAsIGBGaXJzdCBvZiBhbGwsIHdobyBhcmUgdGhlc2UgcGVvcGxlP2BdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBhcHByb2FjaENhbXBLbm93NClcbmxldCBkb250S25vd1JlYWxpemU2ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgV2VsbCwgdGhlcmUgYXJlIHBlb3BsZSByaWdodCBoZXJlLmAsIGBUbyBrZWVwIGdvaW5nLCB5b3UgdGVsbCB5b3Vyc2VsZiAtIFwiSSdtIG5vdCBkZWFkXCIuYCwgYFwiSSBkaWVkLCBidXQgSSdtIG5vdCBkZWFkLlwiYCwgYFdob2V2ZXIgeW91IHdlcmUgaW4gbGlmZSwgeW91IGRpZCBlbm91Z2ggZm9yIHRoZSBQaG9lbml4IG9mIEp1c3RpY2UgdG8gbWFrZSB5b3UgYSBTcGlyaXQgb2YgSnVzdGljZS5gLCBgWW91J3JlIG5vdCBkZWFkLiBZb3UncmUgYWJsZSB0byB0aGluayBhbmQgdG8gc2VlLmAsIGBZb3UgZXhpc3QuIEluIGEgZGlmZmVyZW50IGZvcm0gbm93LiBBbmQgeW91IGNhbiBzdGlsbCBzYXZlIHlvdXJzZWxmLCBzYXZlIHlvdXIgbmV3IGZvcm0uYCwgYFlvdSBqdXN0IGhhdmUgdG8gZG8geW91ciBqb2IgYW5kIHByb21vdGUgSnVzdGljZS5gLCBgWW91J3JlIG5vdCBzdXJlIGhvdyB5b3UncmUgc3VwcG9zZWQgdG8gZG8gaXQsIGNvbnNpZGVyaW5nIHRoYXQgdGhlc2UgcGVvcGxlIGNhbid0IGhlYXIgeW91LmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBkb250S25vd1JlYWxpemU3KVxubGV0IGRvbnRLbm93UmVhbGl6ZTUgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BSaWdodC4gU28geW91IG11c3QgYmUgYSBTcGlyaXQgb2YgYSBQaG9lbml4IG9mIEp1c3RpY2UuIE9mIGEgU3VuLiBPZiB0aGUgR29kIG9mIEp1c3RpY2UuYCwgYEl0J3MgcHJldHR5IG11Y2ggY29tbW9uIGtub3dsZWRnZSB0aGF0IFNwaXJpdHMgZXhpc3QgdG8gZnVydGhlciBwcm9tb3RlIHRoZSBjb25jZXB0LCBvciBwb3J0Zm9saW8sIG9mIHRoZWlyIFBob2VuaXguYCwgYElmIHRoZXkgZmFpbCB0byBwcm9tb3RlIHRoZWlyIGNvbmNlcHQsIHRoZSBTcGlyaXQgZGlzYXBwZWFycy4gRGllcywgZm9yZXZlcmAsIGBPaCwgR29kcywgaXMgdGhhdCB3aHkgeW91J3ZlIGJlZW4gZmVlbGluZyB3ZWFrZXIgYW5kIHdlYWtlciE/YCwgYFlvdSByaXNlIHRvIHlvdXIgJ2ZlZXQnLCBpbiBwYW5pYyBhZ2Fpbi4gV2l0aG91dCBwcm9tb3RpbmcgdGhlIGlkZWEgb2YgSnVzdGljZSB0byBzb21lYm9keSwgeW91J2xsIGRpc2FwcGVhci4gQW5kIHNvb24sIHlvdXIgYm9keSBmZWVscyBpdC5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZG9udEtub3dSZWFsaXplNilcbmxldCBkb250S25vd1JlYWxpemU0ID0gbmV3IHN0b3J5RWxlbWVudCgnY2hvaWNlJyxcbiAgICBbYFwiTXkgUGhvZW5peFwiLiBUaGF0J3MgcmlnaHQuYCxgWW91J3JlIGEgU3Bpcml0LCBhbiBFbnZveSBvZiBhIFBob2VuaXguYCwgYEl0IG1lYW5zIHRoYXQgaW4gbGlmZSwgeW91IG11c3QgaGF2ZSB3b3JzaGlwcGVkIG9uZSBvZiB0aGUgMjAgU3Vucywgb3IgUGhvZW5peGVzLCBob3cgdGhleSdyZSBhbHNvIGNhbGxlZC4gRG9uZSBlbm91Z2gsIGluIGZhY3QsIHRvIGhhdmUgYmVlbiBtYWRlIGEgU3Bpcml0IG9mIHRoYXQgU3VuLmAsIGBXaHkgaXMgaXQgc28gaGFyZCB0byByZWNhbGwgdGhlIGRldGFpbHMgb2YgeW91ciBsaWZlP2AsIGBZb3UgY29uY2VudHJhdGUgYWdhaW4sIHNpdHRpbmcgdGhlcmUgaW4gdGhlIHNub3cuYCwgYFNub3dmbGFrZXMgZmFsbCByaWdodCB0aHJvdWdoIHlvdS4gSG93IGRpZCB5b3Ugbm90IG5vdGljZSB0aGF0PyBQZXJoYXBzIGZyb20gdGhlIHBhbmljLCBhbmQgZnJvbSB5b3VyIHJhYmlkIHNlYXJjaCBmb3IgaGVscC5gLCBgJ1doaWNoIFN1biBkaWQgSSB3b3JzaGlwIGluIGxpZmU/JyBZb3UgdGhpbmsuYF0sXG4gICAgW3tjaG9pY2VUZXh0OiBgVGhlIFBob2VuaXggb2YgQ29tcGFzc2lvbi5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ2NvbXBhc3Npb25TcGlyaXQnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZG9udEtub3dSZWFsaXplNX0sXG4gICAge2Nob2ljZVRleHQ6IGBUaGUgUGhvZW5peCBvZiBKdXN0aWNlLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnanVzdGljZVNwaXJpdCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBkb250S25vd1JlYWxpemU1fSxcbiAgICB7Y2hvaWNlVGV4dDogYFRoZSBQaG9lbml4IG9mIEZyZWVkb20uYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdmcmVlZG9tU3Bpcml0JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGRvbnRLbm93UmVhbGl6ZTV9LFxuICAgIHtjaG9pY2VUZXh0OiBgVGhlIFBob2VuaXggb2YgTWFzdGVyeS5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ21hc3RlcnlTcGlyaXQnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZG9udEtub3dSZWFsaXplNX0sXG4gICAge2Nob2ljZVRleHQ6IGBUaGUgUGhvZW5peCBvZiBXaXNkb20uYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICd3aXNkb21TcGlyaXQnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZG9udEtub3dSZWFsaXplNX1dLFxuICAgIHVuZGVmaW5lZCkgXG5sZXQgZG9udEtub3dSZWFsaXplMyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Nob2ljZScsXG4gICAgW2BZb3UgZG9uJ3Qga25vdyBlbm91Z2ggYWJvdXQgdGhlbS4gWW91IHdvbmRlciB3aGF0IGtpbmQgb2YgU3Bpcml0IHlvdSBhcmUuYCwgYFlvdSBjbG9zZSB5b3VyIG5vbi1leGlzdGVudCBleWVzLiBUaGUgYW5zd2VyIGlzIHdpdGhpbiB5b3UsIHlvdSBqdXN0IGhhdmUgdG8gZmVlbCBpdC5gXSxcbiAgICBbe2Nob2ljZVRleHQ6ICdJIGFtIGEgV3JhaXRoLCBhIHNwaXJpdCB0aGF0IGJyaW5ncyBwdW5pc2htZW50IHRvIHRob3NlIHdobyB3cm9uZyBteSBQaG9lbml4LicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnY2xhc3NXcmFpdGgnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZG9udEtub3dSZWFsaXplNH0sXG4gICAge2Nob2ljZVRleHQ6ICdJIGFtIGEgUG9sdGVyZ2Vpc3QuIFdhdGNoZXIsIHNlZXIsIHN1YnRsZSBtYXN0ZXJtaW5kIGluIHRoZSBzZXJ2aWNlIG9mIG15IFBob2VuaXguJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdjbGFzc1BvbHRlcmdlaXN0JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGRvbnRLbm93UmVhbGl6ZTR9LFxuICAgIHtjaG9pY2VUZXh0OiAnSSBhbSBhIEd1YXJkaWFuIFNwaXJpdCwgSSBleGlzdCB0byBndWlkZSBhbmQgcHJvdGVjdCB0aG9zZSB3aG8gZm9sbG93IG15IFBob2VuaXguJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdjbGFzc0d1YXJkaWFuU3Bpcml0JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGRvbnRLbm93UmVhbGl6ZTR9XSxcbiAgICB1bmRlZmluZWQpXG5sZXQgZG9udEtub3dSZWFsaXplMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBtdXN0IGJlIGEgU3Bpcml0LmAsIGBQZW9wbGUgd2hvIGRpZCBhIGxvdCBpbiB0aGUgc2VydmljZSBvZiBhIFBob2VuaXggcmVpbmNhcm5hdGUgaW50byBTcGlyaXRzIHdoZW4gdGhleSBkaWUuYCwgYFRoZXJlIGFyZSBkaWZmZXJlbnQga2luZHMgb2YgU3Bpcml0cywgeW91J3JlIHByZXR0eSBzdXJlLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBkb250S25vd1JlYWxpemUzKVxubGV0IGRvbnRLbm93UmVhbGl6ZTEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3Ugc2l0IHRoZXJlIGZvciBhIG1vbWVudC4gWW91IHN0YXJlIGF0IHRoZSB0aHJlZSwgdGhlbiB5b3Ugc3RhcmUgYXQgdGhlaXIgZmlyZSwgbWluZCBjb21wbGV0ZWx5IGJsYW5rLmAsIGBZb3UncmUgZGVhZC5gLCBgWW91J3JlIGNvbnNjaW91cywgaG93ZXZlci4gWW91IGhhdmUgdG8gYmUgYSBTcGlyaXQsIHJpZ2h0P2AsIGBZb3UgY29uY2VudHJhdGUgLSB3aGF0IGRvIHlvdSBrbm93IG9mIFNwaXJpdHM/YCwgYFdoZW4gcGVvcGxlIGRpZSwgdGhleSByZWluY2FybmF0ZSBpbnRvIGFuaW1hbHMuIFdoZW4gYW5pbWFscyBkaWUsIHRoZXkgcmVpbmNhcm5hdGUgaW50byBwZW9wbGUuYCwgYEhvd2V2ZXIsIGlmIHRoZSBkeWluZyBwZXJzb24gaGFkIGRvbmUgZW5vdWdoIGluIHRoZSB3b3JzaGlwIG9mIG9uZSBvZiB0aGUgMjAgU3VucywgdGhleSByZWluY2FybmF0ZSBpbnRvIGEgU3Bpcml0LmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBkb250S25vd1JlYWxpemUyKVxubGV0IGRvbnRLbm93V2F0Y2g1ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgQSBsaXR0bGUgd2hpbGUgbGF0ZXIsIHlvdSBhcmUgc2l0dGluZyBub3QgZmFyIGZyb20gdGhlIHRocmVlIHBlb3BsZSdzIGNhbXAsIGp1c3QgYmVoaW5kIHRoZWlyIGJhY2tzLmAsIGBDbG9zZSBlbm91Z2ggdG8gc2VlIHRoZSBmaXJlLCB5ZXQgeW91IHN0aWxsIGRvbid0IGZlZWwgaXQncyB3YXJtdGguYCwgYFRoZSBlbWJyYWNlIG9mIGRlYXRoIGlzIHRvbyBjb2xkLmAsIGBZb3UgdHJpZWQgY2FsbGluZyBvdXQgdG8gdGhlbSwgb3IgdG91Y2hpbmcgdGhlbS4gVGhleSBjYW4ndCBzZWUgb3IgaGVhciB5b3UuYCwgYEJ5IG5vdywgeW91ciByZWFsaXR5IGlzIGlycmVmdXRhYmxlLmAsIGBZb3UgZGlkbid0IHdha2UgdXAgaW4gdGhlIEZvcmVzdCBvZiBNaXJyb3JzLmAsIGBZb3UgZGllZCBoZXJlLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBkb250S25vd1JlYWxpemUxKVxubGV0IGRvbnRLbm93V2F0Y2g0ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91ciBtaW5kIHJhY2VzLCBwYW5pY2tpbmcuIFRoZXJlIGFyZSBwZW9wbGUgcmlnaHQgaGVyZSEgUGVvcGxlIHdobyBtaWdodCBoZWxwISBZb3UgbWFkZSBpdCwgeW91IHNhdmVkIHlvdXJzZWxmISBTbyB3aGF0IHRoZSBoZWxsIGlzIHdyb25nP2AsIGBZb3VyIG1pbmQgc2xvd2x5IGFjY2VwdHMgd2hhdCBpdCBoYXMgYmVlbiB0cnlpbmcgdG8gaWdub3JlIGZvciBhbGwgdGhpcyB0aW1lLmAsIGBZb3UgcGFzcyB0aHJvdWdoIHNvbGlkIG9iamVjdHMuYCwgYFlvdSBkb24ndCBmZWVsIHRoZSBjb2xkLmAsIGBZb3UgZG9uJ3QgcmVtZW1iZXIgYW55dGhpbmcgYWJvdXQgeW91ciBsaWZlLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBkb250S25vd1dhdGNoNSlcbmxldCBkb250S25vd1dhdGNoMyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBsZWFuIG9uIHRoZSB0cmVlIGFuZCBzcXVpbnQsIHRyeWluZyB0byBtYWtlIGFueXRoaW5nIG91dCwgd2hlbiBzb21ldGhpbmcgdW5leHBlY3RlZCBoYXBwZW5zLmAsIGBBcyB5b3UgZ28gdG8gbGVhbiBvbiB0aGUgdHJlZSwgeW91ciBoYW5kIHBhc3NlcyByaWdodCB0aHJvdWdoIGl0LCBkaXNhcHBlYXJpbmcgaW50byB0aGUgYmFyay5gLCBgWW91IGluc3RpbmN0aXZlbHkgbGVhcCBiYWNrLiBZb3UgYXBwcm9hY2ggdGhlIHRyZWUgYWdhaW4sIHRyeWluZyB0byB0b3VjaCBpdCBvbmNlIG1vcmUuYCwgYFRoZSByZXN1bHQgaXMgdGhlIHNhbWUuIFlvdXIgaGFuZCBwYXNzZXMgcmlnaHQgdGhyb3VnaCB0aGUgdHJlZS5gLCBgV2hhdCB0aGUgaGVsbCBpcyBnb2luZyBvbj9gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZG9udEtub3dXYXRjaDQpXG5sZXQgZG9udEtub3dXYXRjaDIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgY2FuIHNlZSBtdXNrZXRzIGFuZCBzY2ltaXRhcnMgbHlpbmcgbmV4dCB0byB0aGUgdGhyZWUgaHVkZGxlZCBmaWd1cmVzLmAsIGBUaGV5IGFyZSBhcm1lZC4gTWVyY2VuYXJpZXM/IFNvbGRpZXJzPyBSb2JiZXJzIGluZGVlZD9gLCBgWW91ciB2aXNpb24gaXMgcmVhbGx5IGJsdXJyeSBub3cuIFlvdSdyZSBub3Qgc3VyZSB3aHkuYCwgYFRoZSBibGl6emFyZCBkb2Vzbid0IGhlbHAgZWl0aGVyLiBBbmQgYWx0aG91Z2ggeW91J3JlIGhpZGluZyBiZWhpbmQgYSB0cmVlIG9ubHkgYSBmZXcgZG96ZW4gbWV0ZXJzIGF3YXkgZnJvbSB0aGUgdGhyZWUgZmlndXJlcywgeW91IHN0aWxsIGNhbid0IG1ha2Ugb3V0IG11Y2ggbW9yZSB0aGFuIHRoYXQuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGRvbnRLbm93V2F0Y2gzKVxubGV0IGRvbnRLbm93V2F0Y2gxID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IHNsb3cgZG93bi4gVGhleSBjb3VsZCBiZSByb2JiZXJzIG9uIHRoZSBydW4gZnJvbSBvbmUgb2YgdGhlIEZhdGVkIFJlYWxtJ3MgY2l0aWVzLCBvciBjdWx0aXN0cyBvZiBvbmUgb2YgZXZpbCBTdW5zLmAsIGBZb3Ugc3RvcCBhcHByb2FjaGluZyB0aGVtIGFuZCBkYXNoIGJlaGluZCBhIG5lYXJieSB0cmVlLmAsIGBZb3UgZmVlbCB3ZWFrZXIgd2l0aCBldmVyeSBwYXNzaW5nIG1pbnV0ZS4gTmV2ZXJ0aGVsZXNzLCB5b3UgZGVjaWRlIHRvIHdhdGNoIHRoZW0gZm9yIGEgbGl0dGxlIHdoaWxlLmAsIGBUbyBtYWtlIHN1cmUgdGhleSB3b24ndCBoYXJtIHlvdSBpbiB5b3VyIGRlc3BlcmF0ZSBzdGF0ZS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZG9udEtub3dXYXRjaDIpXG5sZXQgZG9udEtub3dSdW42ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgQSBsaXR0bGUgd2hpbGUgbGF0ZXIsIHlvdSBhcmUgc2l0dGluZyBub3QgZmFyIGZyb20gdGhlIHRocmVlIHBlb3BsZSdzIGNhbXAsIGp1c3QgYmVoaW5kIHRoZWlyIGJhY2tzLmAsIGBDbG9zZSBlbm91Z2ggdG8gc2VlIHRoZSBmaXJlLCB5ZXQgeW91IHN0aWxsIGRvbid0IGZlZWwgaXQncyB3YXJtdGguYCwgYFRoZSBlbWJyYWNlIG9mIGRlYXRoIGlzIHRvbyBjb2xkLmAsIGBZb3UgdHJpZWQgdG91Y2hpbmcgdGhlIHRyZWVzLCBvciBldmVuIHRoZSBmaXJlLiBOb3RoaW5nLiBZb3UgcGFzcyByaWdodCB0aHJvdWdoLmAsIGBCeSBub3csIHlvdXIgcmVhbGl0eSBpcyBpcnJlZnV0YWJsZS5gLCBgWW91IGRpZG4ndCB3YWtlIHVwIGluIHRoZSBGb3Jlc3Qgb2YgTWlycm9ycy5gLCBgWW91IGRpZWQgaGVyZS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZG9udEtub3dSZWFsaXplMSlcbmxldCBkb250S25vd1J1bjUgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3Ugc2xvd2x5IHdhbGsgdXAgdG8gb25lIG9mIHRoZSBwZW9wbGUsIGFuZCB0cnkgdG8gdGFwIG9uIHRoZWlyIHNob3VsZGVyLmAsIGBZb3UgcmVhY2ggb3V0IHRvd2FyZHMgdGhlaXIgY29hdCB3aXRoIHlvdXIgaGFuZC5gLCBgV2hlbiB5b3UgdHJ5IHRvIHRhcCB0aGVpciBzaG91bGRlciwgeW91ciBoYW5kIHBhc3NlcyByaWdodCB0aHJvdWdoIHRoZWlyIGJvZHkuYCwgYFlvdSByZXRyYWN0IHlvdXIgaGFuZCBhbmQgc3RlcCBiYWNrLCBob3JyaWZpZWQuYCwgYFlvdSB0cnkgYWdhaW4sIGFuZCB0aGUgcmVzdWx0IGlzIHRoZSBzYW1lLiBZb3VyIGhhbmQgcGFzc2VzIHJpZ2h0IHRocm91Z2ggdGhlbS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZG9udEtub3dSdW42KVxubGV0IGRvbnRLbm93UnVuNCA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdXIgbWluZCByYWNlcywgcGFuaWNraW5nLiBUaGVyZSBhcmUgcGVvcGxlIHJpZ2h0IGhlcmUhIFBlb3BsZSB3aG8gY2FuIGhlbHAhIFlvdSBtYWRlIGl0LCB5b3Ugc2F2ZWQgeW91cnNlbGYhIFNvIHdoYXQgdGhlIGhlbGwgaXMgd3Jvbmc/YCwgYFlvdXIgbWluZCBzbG93bHkgYWNjZXB0cyB3aGF0IGl0IGhhcyBiZWVuIHRyeWluZyB0byBpZ25vcmUgZm9yIGFsbCB0aGlzIHRpbWUuYCwgYE5vIHZpYnJhdGlvbiB3aGVuIHlvdSB0YWxrLmAsIGBZb3UgZG9uJ3QgZmVlbCB0aGUgY29sZC5gLCBgWW91IGRvbid0IHJlbWVtYmVyIGFueXRoaW5nIGFib3V0IHlvdXIgbGlmZS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZG9udEtub3dSdW41KVxubGV0IGRvbnRLbm93UnVuMyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBjYW4ndCBldmVuIGhlYXIgeW91cnNlbGYgd2hlbiB5b3UgeWVsbCBmb3IgdGhlbS4gU28gcGVyaGFwcyB0aGUgYmxpenphcmQgaXMgZHJvd25pbmcgb3V0IHlvdXIgdm9pY2U/YCwgYE9yIG1heWJlIHRoZXkncmUgYWxzbyBpbmp1cmVkIGFuZCBpbiBuZWVkIG9mIGhlbHA/YCwgYFwiSGVsbG8/XCIgeW91IHNjcmVhbSBhZ2Fpbi4gVGhpcyB0aW1lLCB5b3Ugbm90aWNlIGl0LmAsIGBZb3UgZG9uJ3QgZXZlbiBoZWFyIGFuIGludGVybmFsIHZpYnJhdGlvbiB3aGVuIHlvdSBzY3JlYW0uYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGRvbnRLbm93UnVuNClcbmxldCBkb250S25vd1J1bjIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgcnVuIHJpZ2h0IHVwIHRvIHRoZSB0aHJlZSBmaWd1cmVzIGh1ZGRsZWQgYXJvdW5kIHRoZSBjYW1wZmlyZS5gLCBgWW91IHN0b3Agd2l0aGluIDIwIG1ldGVycyBvZiB0aGVtLmAsIGBcIkkgbmVlZCBoZWxwIVwiLCB5b3UgeWVsbCBvdXQuYCwgYFRoZXkgZG9uJ3QgcmVhY3QuYCwgYFlvdSB3YWxrIGNsb3NlciB0byB0aGVtLiBcIkdvb2QgcGVvcGxlISBQbGVhc2UgaGVscCBtZSEgSSdtIGxvc3QgYW5kIEknbSBmcmVlemluZyFcIiB5b3UgY29udGludWUuYCwgYE5vIHJlYWN0aW9uLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBkb250S25vd1J1bjMpXG5sZXQgZG9udEtub3dSdW4xID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IG5lZWQgdGhlIGhlbHAuIFlvdSdyZSBkZXNwZXJhdGUgYW5kIHlvdSdyZSB3aWxsaW5nIHRvIHRha2UgYSBjaGFuY2Ugb24gdGhlbS5gLCBgQWxzbywgd291bGQgaXQgbWFrZSBzZW5zZSBmb3IgYmFuZGl0cyB0byBiZSBjYW1waW5nIGluIHRoZSBtaWRkbGUgb2YgdGhlIGltcGFzc2FibGUgRm9yZXN0IG9mIE1pcnJvcnM/YCwgYFlvdSdkIGV4cGVjdCBoaWdod2F5IHJvYmJlcnMgdG8gYmUgY2FtcGVkIGFyb3VuZCB0aGUgbWFpbiByb2FkcyBvZiB0aGUgRmF0ZWQgUmVhbG0uYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGRvbnRLbm93UnVuMilcbmxldCBhcHByb2FjaENhbXBEb250S25vdzMgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgZG9uJ3QgZXZlbiBmZWVsIGZhdGlndWUgYXMgeW91IHJ1bi4gUHJvYmFibHkgdGhlIGFkcmVuYWxpbmUuIFN1cnZpdmFsIGluc3RpbmN0LmAsIGBBcyB5b3UgZ2V0IGNsb3NlciB0byB0aGVpciBjYW1wLCB5b3Ugc2VlIHRocmVlIGZpZ3VyZXMsIGh1ZGRsZWQgYXJvdW5kIHRoZSBmaXJlLmAsIGBZb3Ugc3RvcCB3aGVuIHlvdSBnZXQgd2l0aGluIGVhcnNob3Qgb2YgdGhlbS5gLCBgSG93IGRvIHlvdSB3YW50IHRvIGFwcHJvYWNoIHRoaXM/YF0sXG4gICAge2Nob2ljZVRleHQ6IGBXYXRjaCB0aGVtIGZyb20gYSBkaXN0YW5jZS4gWW91IG1pZ2h0IGJlIGZyZWV6aW5nIHRvIGRlYXRoIGFuZCBkZXNwZXJhdGUgZm9yIGhlbHAsIGJ1dCB0aGV5IG1pZ2h0IGJlIGJhbmRpdHMuYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6IG51bGwsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBkb250S25vd1dhdGNoMX0sXG4gICAge2Nob2ljZVRleHQ6IGBSdW4gdG93YXJkcyB0aGVtLCBzY3JlYW1pbmcgZm9yIGhlbHAuIFlvdSdyZSBkeWluZyBhbmQgeW91IG5lZWQgd2FybXRoLCBmb29kLCBhbnl0aGluZyB0aGV5IGNhbiBzcGFyZS5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogbnVsbCxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGRvbnRLbm93UnVuMX0sXG4gICAgdW5kZWZpbmVkKVxubGV0IGFwcHJvYWNoQ2FtcERvbnRLbm93MiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYE5vIGxvbmdlciBiZWluZyBvbiB0b3Agb2YgYSBoaWxsLCBhbmQgd2l0aCB0aGUgYmxpenphcmQgcm9hcmluZywgeW91IGxvc2Ugc2lnaHQgb2YgdGhlIHNtb2tlLmAsIGBZb3UgZG9uJ3Qgc3RvcCBydW5uaW5nLCB5b3UgY2FuIG9ubHkgaG9wZSB0aGF0IHlvdSd2ZSBrZXB0IHRoZSByaWdodCBkaXJlY3Rpb24uYCwgYEV2ZW50dWFsbHksIGJldHdlZW4gdGhlIHRyZWVzLCB5b3Ugc2VlIGEgZmxpY2tlcmluZyByZWQgbGlnaHQuYCwgYFNvbWVvbmUncyBjYW1wZmlyZSBpcyBhIGZldyBodW5kcmVkIG1ldGVycyBhd2F5IGZyb20geW91LmAsIGBZb3UncmUgc2F2ZWQhYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGFwcHJvYWNoQ2FtcERvbnRLbm93MylcbmxldCBhcHByb2FjaENhbXBEb250S25vdzEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgcnVuIGRvd24gdGhlIGhpbGwuYCwgYFlvdSBydW4gdGhyb3VnaCB0aGUgRm9yZXN0IG9mIE1pcnJvcnMgaW4gdGhlIGRpcmVjdGlvbiBvZiB3aGVyZSB5b3UndmUgc2VlbiB0aGUgc21va2UuYCwgYFlvdSBydW4gZm9yIHdoYXQgZmVlbHMgbGlrZSBhbiBob3VyLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBhcHByb2FjaENhbXBEb250S25vdzIpXG4vLyBGSU5EIFRIRSBDQU1QIChLTk9XIFRIQVQgWU9VJ1JFIEEgU1BJUklUKVxubGV0IGFwcHJvYWNoQ2FtcEtub3czID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgS25vd2luZyB0aGF0IHRoZXkgY2Fubm90IHNlZSB5b3UsIHlvdSBmbG9hdCBjbG9zZXIgdG8gdGhlbSBhbmQgdGFrZSBhIGNsb3NlciBsb29rLmAsIGBUaGUgZmlyc3QgcGVyc29uIGlzIGEgd29tYW4gZHJlc3NlZCBpbiBhIGxvbmcsIHRoaWNrLCBkYXJrIHJlZCBjb2F0LiBZb3Ugbm8gbG9uZ2VyIGNhcmUgYWJvdXQgdGhlIGNvbGQsIGJ1dCBpdCdzIGFuIHVuZGVyc3RhbmRhYmxlIGNob2ljZSBmb3IgaGVyLiBDb3VsZCB0aGUgd2VhdGhlciBoYXZlIGtpbGxlZCB5b3U/IFlvdSBzaGFrZSBhd2F5IHRoZXNlIHRob3VnaHRzLiBJdCdzIHBvaW50bGVzcyB0byBzcGVjdWxhdGUgZm9yIG5vdy5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgYXBwcm9hY2hDYW1wS25vdzQpXG5sZXQgYXBwcm9hY2hDYW1wS25vdzIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgZmxvYXQgY2xvc2VyLiBJdCdzIGNvbW1vbiBrbm93bGVkZ2UgaW4gdGhlIEZhdGVkIFJlYWxtIHRoYXQgaHVtYW5zIGNhbm5vdCBzZWUgU3Bpcml0cyBwaHlzaWNhbGx5LmAsIGBUbyBwcm9tb3RlIHRoZWlyIGNvbmNlcHRzLCBTcGlyaXRzIGhhdmUgdGhlIGFiaWxpdGllcyB0byBhZmZlY3QgdGhlIG1hdGVyaWFsIHdvcmxkIGluIGdob3N0bHkgd2F5cy4gVGhlIG1vcmUgcG93ZXJmdWwgdGhlIFNwaXJpdCwgdGhlIG1vcmUgc3Vic3RhbnRpYWwgdGhlIGVmZmVjdHMuYCwgYEZvciBub3csIHlvdSBmbG9hdCBjbG9zZXIgdG8gdGhlIGNhbXBmaXJlLCBzZWVpbmcgdGhyZWUgcGVvcGxlIGh1ZGRsZWQgYXJvdW5kIHRoZSBicmlnaHQgZmxhbWUuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGFwcHJvYWNoQ2FtcEtub3czKVxubGV0IGFwcHJvYWNoQ2FtcEtub3cxID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGZsb2F0IGZvciB3aGF0IGZlZWxzIGxpa2UgaG91cnMuYCwgYFllcy4gRmxvYXQuIE5vdyB0aGF0IHlvdSB1bmRlcnN0YW5kIHlvdXIgc2l0dWF0aW9uLCB5b3UgcmVhbGl6ZSB0aGF0IHlvdSBkb24ndCBoYXZlIHRvIG1vdmUgeW91ciBmZWV0IHRvIG1vdmUuIFBlcmtzIG9mIGJlaW5nIGEgU3Bpcml0LmAsIGBPY2Nhc2lvbmFsbHkgeW91IG9wZW4geW91ciBleWVzLCBvY2Nhc2lvbmFsbHkgeW91IGNsb3NlIHRoZW0uYCwgYEl0IGRvZXNuJ3QgbG9vayBsaWtlIHlvdSBjYW4gc2VlIHRocm91Z2ggc29saWQgbWF0dGVyLCBzbyBhbGwgeW91IHNlZSBpcyB0aGUgc25vd3kgRm9yZXN0IG9mIE1pcnJvcnMuYCwgYEV2ZW50dWFsbHksIHlvdSBzZWUgYSBsaWdodC4gVGhpcyBvbmUncyBkZWZpbml0ZWx5IGEgY2FtcGZpcmUuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGFwcHJvYWNoQ2FtcEtub3cyKVxuLy8gVEhFIEZPUkVTVCBPRiBNSVJST1JTXG5sZXQgZW5kRm9yZXN0Q29uY2VudHJhdGU0YiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFRvIGtlZXAgZ29pbmcsIHlvdSB0ZWxsIHlvdXJzZWxmIC0gXCJJJ20gbm90IGRlYWRcIi5gLCBgXCJJIGRpZWQsIGJ1dCBJJ20gbm90IGRlYWQuXCJgLCBgV2hvZXZlciB5b3Ugd2VyZSBpbiBsaWZlLCB5b3UgZGlkIGVub3VnaCBmb3IgdGhlIFBob2VuaXggb2YgSnVzdGljZSB0byBtYWtlIHlvdSBhIFNwaXJpdCBvZiBKdXN0aWNlLmAsIGBZb3UncmUgbm90IGRlYWQuIFlvdSdyZSBhYmxlIHRvIHRoaW5rIGFuZCB0byBzZWUuYCwgYFlvdSBleGlzdC4gSW4gYSBkaWZmZXJlbnQgZm9ybSBub3cuIEFuZCB5b3UgY2FuIHN0aWxsIHNhdmUgeW91cnNlbGYsIHNhdmUgeW91ciBuZXcgZm9ybS5gLCBgWW91IGp1c3QgaGF2ZSB0byBkbyB5b3VyIGpvYiBhbmQgcHJvbW90ZSBKdXN0aWNlLmAsIGBZb3UgcmVtZW1iZXIgc3RvcmllcyB0aGF0IFNwaXJpdHMgY2FuIHNlbnNlIGxpZmUuIFlvdSBjbG9zZSB5b3VyIGV5ZXMgYW5kIHRyeSB0byBsZXQgeW91ciBmZWVsaW5ncyBndWlkZSB5b3UgdG8gdGhlIG5lYXJlc3QgcGVvcGxlLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBhcHByb2FjaENhbXBLbm93MSlcbmxldCBlbmRGb3Jlc3RDb25jZW50cmF0ZTQgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BSaWdodC4gU28geW91IG11c3QgYmUgYSBTcGlyaXQgb2YgYSBQaG9lbml4IG9mIEp1c3RpY2UuIE9mIGEgU3VuLiBPZiB0aGUgR29kIG9mIEp1c3RpY2UuYCwgYEl0J3MgcHJldHR5IG11Y2ggY29tbW9uIGtub3dsZWRnZSB0aGF0IFNwaXJpdHMgZXhpc3QgdG8gZnVydGhlciBwcm9tb3RlIHRoZSBjb25jZXB0LCBvciBwb3J0Zm9saW8sIG9mIHRoZWlyIFBob2VuaXguYCwgYElmIHRoZXkgZmFpbCB0byBwcm9tb3RlIHRoZWlyIGNvbmNlcHQsIHRoZSBTcGlyaXQgZGlzYXBwZWFycy4gRGllcywgZm9yZXZlcmAsIGBPaCwgR29kcywgaXMgdGhhdCB3aHkgeW91J3ZlIGJlZW4gZmVlbGluZyB3ZWFrZXIgYW5kIHdlYWtlciE/YCwgYFlvdSByaXNlIHRvIHlvdXIgJ2ZlZXQnLCBpbiBwYW5pYyBhZ2Fpbi4gWW91IGhhdmUgdG8gZmluZCBzb21lb25lIHRvIHByb21vdGUgeW91ciBjb25jZXB0LCB0aGUgaWRlYSBvZiBKdXN0aWNlLCB0by4gV2l0aG91dCBwZW9wbGUgdG8gcHJvbW90ZSBKdXN0aWNlIHRvLCB5b3UnbGwgZGlzYXBwZWFyLiBBbmQgc29vbiwgeW91ciBib2R5IGZlZWxzIGl0LmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBlbmRGb3Jlc3RDb25jZW50cmF0ZTRiKVxubGV0IGVuZEZvcmVzdENvbmNlbnRyYXRlM2MgPSBuZXcgc3RvcnlFbGVtZW50KCdjaG9pY2UnLFxuICAgIFtgXCJNeSBQaG9lbml4XCIuIFRoYXQncyByaWdodC5gLGBZb3UncmUgYSBTcGlyaXQsIGFuIEVudm95IG9mIGEgUGhvZW5peC5gLCBgSXQgbWVhbnMgdGhhdCBpbiBsaWZlLCB5b3UgbXVzdCBoYXZlIHdvcnNoaXBwZWQgb25lIG9mIHRoZSAyMCBTdW5zLCBvciBQaG9lbml4ZXMsIGhvdyB0aGV5J3JlIGFsc28gY2FsbGVkLiBEb25lIGVub3VnaCwgaW4gZmFjdCwgdG8gaGF2ZSBiZWVuIG1hZGUgYSBTcGlyaXQgb2YgdGhhdCBTdW4uYCwgYFdoeSBpcyBpdCBzbyBoYXJkIHRvIHJlY2FsbCB0aGUgZGV0YWlscyBvZiB5b3VyIGxpZmU/YCwgYFlvdSBjb25jZW50cmF0ZSBhZ2Fpbiwgc2l0dGluZyB0aGVyZSBpbiB0aGUgc25vdy5gLCBgU25vd2ZsYWtlcyBmYWxsIHJpZ2h0IHRocm91Z2ggeW91LiBIb3cgZGlkIHlvdSBub3Qgbm90aWNlIHRoYXQ/IFBlcmhhcHMgZnJvbSB0aGUgcGFuaWMsIGFuZCBmcm9tIHlvdXIgcmFiaWQgc2VhcmNoIGZvciBoZWxwLmAsIGAnV2hpY2ggU3VuIGRpZCBJIHdvcnNoaXAgaW4gbGlmZT8gWW91IHRoaW5rLidgXSxcbiAgICBbe2Nob2ljZVRleHQ6IGBUaGUgUGhvZW5peCBvZiBDb21wYXNzaW9uLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnY29tcGFzc2lvblNwaXJpdCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBlbmRGb3Jlc3RDb25jZW50cmF0ZTR9LFxuICAgIHtjaG9pY2VUZXh0OiBgVGhlIFBob2VuaXggb2YgSnVzdGljZS5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ2p1c3RpY2VTcGlyaXQnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZW5kRm9yZXN0Q29uY2VudHJhdGU0fSxcbiAgICB7Y2hvaWNlVGV4dDogYFRoZSBQaG9lbml4IG9mIEZyZWVkb20uYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdmcmVlZG9tU3Bpcml0JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGVuZEZvcmVzdENvbmNlbnRyYXRlNH0sXG4gICAge2Nob2ljZVRleHQ6IGBUaGUgUGhvZW5peCBvZiBNYXN0ZXJ5LmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnbWFzdGVyeVNwaXJpdCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBlbmRGb3Jlc3RDb25jZW50cmF0ZTR9LFxuICAgIHtjaG9pY2VUZXh0OiBgVGhlIFBob2VuaXggb2YgV2lzZG9tLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnd2lzZG9tU3Bpcml0JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGVuZEZvcmVzdENvbmNlbnRyYXRlNH1dLFxuICAgIHVuZGVmaW5lZCkgXG5sZXQgZW5kRm9yZXN0Q29uY2VudHJhdGUzYiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Nob2ljZScsXG4gICAgW2BZb3UgZG9uJ3Qga25vdyBlbm91Z2ggYWJvdXQgdGhlbS4gWW91IHdvbmRlciB3aGF0IGtpbmQgb2YgU3Bpcml0IHlvdSBhcmUuYCwgYFlvdSBjbG9zZSB5b3VyIG5vbi1leGlzdGVudCBleWVzLiBUaGUgYW5zd2VyIGlzIHdpdGhpbiB5b3UsIHlvdSBqdXN0IGhhdmUgdG8gZmVlbCBpdC5gXSxcbiAgICBbe2Nob2ljZVRleHQ6ICdJIGFtIGEgV3JhaXRoLCBhIHNwaXJpdCB0aGF0IGJyaW5ncyBwdW5pc2htZW50IHRvIHRob3NlIHdobyB3cm9uZyBteSBQaG9lbml4LicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnY2xhc3NXcmFpdGgnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZW5kRm9yZXN0Q29uY2VudHJhdGUzY30sXG4gICAge2Nob2ljZVRleHQ6ICdJIGFtIGEgUG9sdGVyZ2Vpc3QuIFdhdGNoZXIsIHNlZXIsIHN1YnRsZSBtYXN0ZXJtaW5kIGluIHRoZSBzZXJ2aWNlIG9mIG15IFBob2VuaXguJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdjbGFzc1BvbHRlcmdlaXN0JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGVuZEZvcmVzdENvbmNlbnRyYXRlM2N9LFxuICAgIHtjaG9pY2VUZXh0OiAnSSBhbSBhIEd1YXJkaWFuIFNwaXJpdCwgSSBleGlzdCB0byBndWlkZSBhbmQgcHJvdGVjdCB0aG9zZSB3aG8gZm9sbG93IG15IFBob2VuaXguJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdjbGFzc0d1YXJkaWFuU3Bpcml0JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGVuZEZvcmVzdENvbmNlbnRyYXRlM2N9XSxcbiAgICB1bmRlZmluZWQpXG5sZXQgZW5kRm9yZXN0Q29uY2VudHJhdGUzYSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBtdXN0IGJlIGEgU3Bpcml0LmAsIGBQZW9wbGUgd2hvIGRpZCBhIGxvdCBpbiB0aGUgc2VydmljZSBvZiBhIFBob2VuaXggcmVpbmNhcm5hdGUgaW50byBTcGlyaXRzIHdoZW4gdGhleSBkaWUuYCwgYFRoZXJlIGFyZSBkaWZmZXJlbnQga2luZHMgb2YgU3Bpcml0cywgeW91J3JlIHByZXR0eSBzdXJlLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBlbmRGb3Jlc3RDb25jZW50cmF0ZTNiKVxubGV0IGVuZEZvcmVzdENvbmNlbnRyYXRlMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBzaXQgdGhlcmUgZm9yIGEgbW9tZW50LCBtaW5kIGNvbXBsZXRlbHkgYmxhbmsuYCwgYFlvdSdyZSBkZWFkLmAsIGBZb3UncmUgY29uc2Npb3VzLCBob3dldmVyLiBZb3UgaGF2ZSB0byBiZSBhIFNwaXJpdCwgcmlnaHQ/YCwgYFlvdSBjb25jZW50cmF0ZSAtIHdoYXQgZG8geW91IGtub3cgb2YgU3Bpcml0cz9gLCBgV2hlbiBwZW9wbGUgZGllLCB0aGV5IHJlaW5jYXJuYXRlIGludG8gYW5pbWFscy4gV2hlbiBhbmltYWxzIGRpZSwgdGhleSByZWluY2FybmF0ZSBpbnRvIHBlb3BsZS5gLCBgSG93ZXZlciwgaWYgdGhlIGR5aW5nIHBlcnNvbiBoYWQgZG9uZSBlbm91Z2ggaW4gdGhlIHdvcnNoaXAgb2Ygb25lIG9mIHRoZSAyMCBTdW5zLCB0aGV5IHJlaW5jYXJuYXRlIGludG8gYSBTcGlyaXQuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGVuZEZvcmVzdENvbmNlbnRyYXRlM2EpXG5sZXQgZW5kRm9yZXN0Q29uY2VudHJhdGUxID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGZhbGwgdG8gdGhlIHNub3d5IGdyb3VuZCBvZiB0aGUgZm9yZXN0LCBzaXR0aW5nIHdpdGggeW91ciBsZWdzIG91dHN0cmV0Y2hlZCBpbiBmcm9udCBvZiB5b3UuYCwgYFlvdXIgbWluZCByYWNlcy4gWW91ciBib2R5IHN0aWxsIGNhbid0IGZlZWwgdGhlIGNvbGQuYCwgYFlvdSdyZSByZWFsbHkgZGVhZC5gXSxcbiAgICAnRm9Nc3Bpcml0S25vdycsXG4gICAgZW5kRm9yZXN0Q29uY2VudHJhdGUyKVxubGV0IGVuZEZvcmVzdENvbmNlbnRyYXRlMXByZUIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgYmVuZCBvdmVyIGFuZCBzbG93bHkgcmVhY2ggd2l0aCB5b3VyIGhhbmQgdG93YXJkcyB0aGUgc25vdy5gLCBgWW91ciBoYW5kIHBhc3NlcyByaWdodCB0aHJvdWdoIHRoZSBzbm93LmAsIGBZb3UgZ3VscCwgcGFuaWMgYW5kIHJlYWxpemF0aW9uIHN0YXJ0aW5nIHRvIHNldHRsZSBpbi5gLCBgWW91ciBoYW5kIHBhc3NlcyByaWdodCB0aHJvdWdoIHRoZSBzbm93LiBZb3UgY2Fubm90IG1vdmUgaXQuYCwgYFlvdSBkaWRuJ3Qgd2FrZSB1cCBoZXJlIGluIHRoZSBGb3Jlc3Qgb2YgTWlycm9ycy5gLCBgWW91IGRpZWQgaGVyZS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZW5kRm9yZXN0Q29uY2VudHJhdGUxKVxubGV0IGVuZEZvcmVzdENvbmNlbnRyYXRlMXByZSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSB0cnkgdG8gcmVtZW1iZXIgeW91ciBsaWZlLCBidXQgbm90aGluZyBjb21lcyB0byB5b3UuYCwgYFlvdSBmb2N1cyBvbiB5b3VyIGNvbmRpdGlvbi4gWW91IGNhbid0IGZlZWwgdGhlIGNvbGQuYCwgYFlvdSBsb29rIGFyb3VuZCB0aHJvdWdoIHRoZSBibGl6emFyZC4gWW91IG5vdGljZSBzb21ldGhpbmcgdW51c3VhbC5gLCBgWW91IGRvbid0IHNlZW0gdG8gbGVhdmUgZm9vdHByaW50cyBpbiB0aGUgc25vdy5gLCBgVGhlIGJsaXp6YXJkIGNhbid0IGZpbGwgaW4gdGhlIGluZGVudGF0aW9ucyBpbiB0aGUgc25vdyB0aGlzIGZhc3QsIGNhbiBpdD9gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZW5kRm9yZXN0Q29uY2VudHJhdGUxcHJlQilcbmxldCBlbmRGb3Jlc3RFeHBsb3JlU2NyZWFtMyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSB0cnkgdG8gc2NyZWFtLCBhZ2FpbiBhbmQgYWdhaW4uIE5vIHNvdW5kIGNvbWVzIG91dC5gLCBgWW91IHN0b21wIGluIHRoZSBzbm93LCBidXQgaXQgZG9lc24ndCBtb3ZlLmAsIGBGaW5hbGx5LCB5b3UgYXBwcm9hY2ggYSB0cmVlIGFuZCByZWFjaCBvdXQgdG8gdG91Y2ggaXRzIGJhcmsuYCwgYFlvdSBndWxwLCBwYW5pYyBhbmQgcmVhbGl6YXRpb24gc3RhcnRpbmcgdG8gc2V0dGxlIGluLCBhcyB5b3Ugc2xvd2x5IHJlYWNoIHdpdGggeW91ciBoYW5kIHRvIHRoZSB0cmVlLmAsIGBZb3VyIGhhbmQgcGFzc2VzIHJpZ2h0IHRocm91Z2ggdGhlIHRyZWUsIGRpc2FwcGVhcmluZyBpbnRvIHRoZSBiYXJrLmAsIGBZb3UgZGlkbid0IHdha2UgdXAgaGVyZSBpbiB0aGUgRm9yZXN0IG9mIE1pcnJvcnMuIFlvdSBkaWVkIGhlcmUsIGFuZCBub3cgeW91J3JlIGEgU3Bpcml0LmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBlbmRGb3Jlc3RDb25jZW50cmF0ZTEpXG5sZXQgZW5kRm9yZXN0RXhwbG9yZVNjcmVhbTIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3Ugc3RvcC4gV2hhdCB0aGUgaGVsbCBpcyBnb2luZyBvbj9gLCBgWW91J3ZlIGJlZW4gZmVlbGluZyBvZmYgZXZlciBzaW5jZSB5b3Ugd29rZSB1cC5gLCBgTm93LCB5b3UncmUgc3RhcnRpbmcgdG8gc3VzcGVjdCB0aGF0IGl0J3Mgbm90IGp1c3QgdGhlIGNvbGQgYW5kIGZyb3N0Yml0ZS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZW5kRm9yZXN0RXhwbG9yZVNjcmVhbTMpXG5sZXQgZW5kRm9yZXN0RXhwbG9yZVNjcmVhbTEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2AnQS1hLWFueWJvZHkhJ2AsIGBZb3UgeWVsbCwgYnV0IHRoZSBvbmx5IHNvdW5kIHRoYXQgeW91IGhlYXIgaXMgdGhlIGJsaXp6YXJkLmAsIGAnU29tZWJvZHkgaGVscCBtZSEnYCwgYFlvdSBzY3JlYW0gYWdhaW4uIFRoaXMgdGltZSB5b3Ugbm90aWNlIHRoYXQgeW91IGRvbid0IGV2ZW4gZmVlbCB0aGUgdmlicmF0aW9uIGluIHlvdXIgdGhyb2F0LmBdLFxuICAgICdGb01zcGlyaXRLbm93JyxcbiAgICBlbmRGb3Jlc3RFeHBsb3JlU2NyZWFtMilcbmxldCBlbmRGb3Jlc3RFeHBsb3JlTm9TY3JlYW0zID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGxvb2sgYXJvdW5kIGZyb20gdGhlIHRvcCBvZiB0aGUgaGlsbC5gLCBgSW4gdGhlIGRpc3RhbmNlLCB5b3Ugc3BvdCBhIGZhaW50IGdsaW1wc2Ugb2Ygc21va2UuYCwgYE5vdyB0aGlzIGlzIGRlZmluaXRlbHkgZmlyZSBvZiBzb21lIGtpbmQuYCwgYEFuZCBob3BlIGZvciB5b3UuYCwgYFlvdSBydXNoIGRvd24gdGhlIGhpbGwgdG93YXJkcyB0aGUgZmlyZS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgYXBwcm9hY2hDYW1wRG9udEtub3cxKVxubGV0IGVuZEZvcmVzdEV4cGxvcmVOb1NjcmVhbTIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3Uga2VlcCBydW5uaW5nIHRocm91Z2ggdGhlIGZvcmVzdCwgYW5kIG1hbmFnZSB0byByZWFjaCB0aGUgdG9wIG9mIHRoZSBoaWxsLmAsIGBZb3UncmUgbm90IGRlYWQgeWV0LCBkZXNwaXRlIGJlaW5nIGluIHRoZSBmcm96ZW4gRm9yZXN0IG9mIE1pcnJvcnMgZm9yIGF0IGxlYXN0IGFuIGhvdXIgb3IgdHdvIGJ5IG5vdy5gLCBgWW91J3JlIG5vdCBldmVuIG91dCBvZiBicmVhdGggZnJvbSBzcHJpbmdpbmcgdXAgdGhlIGhpbGwuYCwgYE5vIHRpbWUgdG8gdGhpbmsgYWJvdXQgaXQgbm93LmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBlbmRGb3Jlc3RFeHBsb3JlTm9TY3JlYW0zKVxubGV0IGVuZEZvcmVzdEV4cGxvcmVOb1NjcmVhbTEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BObyBzY3JlYW1pbmcuYCwgYFlvdSBrZWVwIHJ1bm5pbmcgZm9yd2FyZC5gLCBgWW91IHNwcmludCB0aHJvdWdoIHRoZSB0cmVlcyBmb3Igd2hhdCBmZWVscyBsaWtlIGFuIGhvdXIuYCwgYEZpbmFsbHksIHlvdSBtYW5hZ2UgdG8gc3BvdCBhIGJpZyBoaWxsIGluIHRoZSBmb3Jlc3QuIEl0J2xsIGdpdmUgeW91IGEgdmFudGFnZSBwb2ludCwgc28geW91IHNwcmluZyBpbiBpdHMgZGlyZWN0aW9uLmBdLFxuICAgICdGb01ub1NwaXJpdEtub3cnLFxuICAgIGVuZEZvcmVzdEV4cGxvcmVOb1NjcmVhbTIpXG5sZXQgZW5kRm9yZXN0RXhwbG9yZTEgPSBuZXcgc3RvcnlFbGVtZW50KCdjaG9pY2UnLFxuICAgIFtgWW91IGJyZWF0aGUsIHRyeWluZyB0byBrZWVwIHlvdXIgd2FybXRoLmAsIGBCbHVycnkgdmlzaW9uLCBjYW4ndCBmZWVsIHlvdXIgbGVncyAtIHlvdSBtaWdodCBiZSBjbG9zZSB0byBkZWF0aC4gWW91IG5lZWQgaGVscC5gLCBgVGhlIEZvcmVzdCBvZiBNaXJyb3JzIGlzIGVub3Jtb3VzLCBpdCB0YWtlcyB1cCBhIGJpZyBwYXJ0IG9mIHRoZSBlYXN0ZXJuIHNpZGUgb2YgdGhlIEZhdGVkIFJlYWxtLmAsIGBUaGVyZSBtdXN0IGJlIHNvbWVib2R5IHRyYXZlcnNpbmcgdGhlIEZvcmVzdCB0aGF0IGNvdWxkIGhlbHAgeW91LmAsIGBTaG91bGQgeW91IHNjcmVhbSBvdXQgZm9yIGhlbHA/YF0sXG4gICAgW3tjaG9pY2VUZXh0OiBgWWVzLiBJdCdsbCBiZSBoYXJkIGZvciBhbnlvbmUgdG8gaGVhciB5b3UgdGhyb3VnaCB0aGUgYmxpenphcmQsIGJ1dCB5b3UncmUgZGVzcGVyYXRlLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnRm9Nc2NyZWFtJyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGVuZEZvcmVzdEV4cGxvcmVTY3JlYW0xfSxcbiAgICB7Y2hvaWNlVGV4dDogYE5vIHNjcmVhbWluZy4gVGhlIG9ubHkgYXR0ZW50aW9uIGl0J2xsIGF0dHJhY3QgYXJlIHR1c2t3b2x2ZXMuYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdGb01ub1NjcmVhbScsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBlbmRGb3Jlc3RFeHBsb3JlTm9TY3JlYW0xfV0sXG4gICAgdW5kZWZpbmVkKVxubGV0IGVuZEZvcmVzdDUgPSBuZXcgc3RvcnlFbGVtZW50KCdjaG9pY2UnLFxuICAgIFtgIFlvdXIgdmlzaW9uIGlzIGdldHRpbmcgYmx1cnJpZXIuYCwgYFlvdSBuZWVkIHRvIGtlZXAgbW92aW5nLiBXaGF0IHRvIGRvIG5vdz9gXSxcbiAgICBbe2Nob2ljZVRleHQ6ICdLZWVwIG1vdmluZywga2VlcCBleHBsb3JpbmcgdGhlIGZvcmVzdC4nLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ0ZvTWVuZEV4cGxvcmUnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZW5kRm9yZXN0RXhwbG9yZTF9LFxuICAgIHtjaG9pY2VUZXh0OiAnU3RvcCBhbmQgdHJ5IHRvIGNvbmNlbnRyYXRlIG9uIHlvdXIgY29uZGl0aW9uLicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnRm9NZW5kQ29uY2VudHJhdGUnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZW5kRm9yZXN0Q29uY2VudHJhdGUxcHJlfV0sXG4gICAgdW5kZWZpbmVkKVxubGV0IGVuZEZvcmVzdDQgPSBuZXcgc3RvcnlFbGVtZW50KCdjb25zZXF1ZW5jZScsXG4gICAgW3tkZXBlbmRlbmN5OiAnRm9Nc2F3V2lzcCcsIGNvbnNlcXVlbmNlVGV4dDogW2BZb3UgcmVtZW1iZXI6IFwiU3Bpcml0cyBjYW5ub3QgdG91Y2ggcGh5c2ljYWwgb2JqZWN0cy5cImAsIGBUaGF0IGNyZWF0dXJlIGluIHRoZSB3b29kcyAtIGl0IG11c3QgaGF2ZSBiZWVuIGEgU3Bpcml0LmAsIGBJdCBjb3VsZCB0b3VjaCB5b3UuYCwgYENvdWxkIHlvdSBiZS4uLiBkZWFkP2AsIGBZb3VyIHRob3VnaHRzIGFyZSBpbnRlcnJ1cHRlZCBhcyB5b3VyIGJvZHkgaXMgZmVlbGluZyB3ZWFrZXIuYF19LFxuICAgIHtkZXBlbmRlbmN5OiAnRm9Nbm90U2Vlbldpc3AnLCBjb25zZXF1ZW5jZVRleHQ6IFtgTWF5YmUgeW91IHNob3VsZCBoYXZlIGFza2VkIHRoZSBjYW1wZmlyZSBwZW9wbGUgZm9yIGhlbHAuIEZvciBmb29kLiBXYXJtdGguIEFueXRoaW5nLmAsIGBZb3UgZmVlbCB5b3Vyc2VsZiBnZXR0aW5nIHdlYWtlci5gXX0sXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZW5kRm9yZXN0NSlcbmxldCBlbmRGb3Jlc3QzID0gbmV3IHN0b3J5RWxlbWVudCgnY29uc2VxdWVuY2UnLFxuICAgIFt7ZGVwZW5kZW5jeTogJ0ZvTXNlYXJjaGVkQm9keScsIGNvbnNlcXVlbmNlVGV4dDogW2BZb3UgY29uY2VudHJhdGUsIHdpbmNpbmcuIFRyeWluZyB0byB0aGluayBiYWNrIHRvIHlvdXIgZWR1Y2F0aW9uLiBXaGF0IGRvIHlvdSBrbm93IG9mIFNwaXJpdHM/YCwgYExldCdzIHNlZS4uLiBTcGlyaXRzIGFyZSB0aGUgb25seSBjcmVhdHVyZXMgd2l0aCBtYWdpY2FsIGFiaWxpdGllcy5gLCBgU3Bpcml0cyBhbHNvLi4uIGNhbm5vdCB0b3VjaCBwaHlzaWNhbCBvYmplY3RzLmBdfSxcbiAgICB7ZGVwZW5kZW5jeTogJ0ZvTWxlZnRCb2R5JywgY29uc2VxdWVuY2VUZXh0OiBbYFlvdSBzaG91bGQgYmUgZGVhZCBieSBub3csIGJ1dCB5b3UgZG9uJ3Qgc2VlbSB0byBmZWVsIHRoZSBjb2xkLmAsIGBZb3UgY2FuIGZlZWwgcGFuaWMgYW5kIGZydXN0cmF0aW9uIGdyb3dpbmcuYF19LF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGVuZEZvcmVzdDQpXG5sZXQgZW5kRm9yZXN0MiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2NvbnNlcXVlbmNlJyxcbiAgICBbe2RlcGVuZGVuY3k6ICdGb01zZWFyY2hlZEJvZHknLCBjb25zZXF1ZW5jZVRleHQ6IFtgU3RvcC4gUmVjaXRlIHRoZSBmYWN0cy5gLCBgWW91IHdva2UgdXAgaW4gdGhlIEZvcmVzdCBvZiBNaXJyb3JzLmAsIGBZb3UgZG9uJ3Qgc2VlbSB0byBmZWVsIHRoZSBjb2xkLmAsIGBZb3VyIGhhbmQgd2VudCByaWdodCB0aHJvdWdoIHRoYXQgY29ycHNlLmAsIGBTb21ldGhpbmcgaXMgb2ZmIGhlcmUuYCwgYFlvdSBoYXZlIGEgdGhlb3J5LmBdfSxcbiAgICB7ZGVwZW5kZW5jeTogJ0ZvTWxlZnRCb2R5JywgY29uc2VxdWVuY2VUZXh0OiBbYFN0b3AuIFJlY2l0ZSB0aGUgZmFjdHMuYCwgYFlvdSB3b2tlIHVwIGluIHRoZSBGb3Jlc3Qgb2YgTWlycm9ycy5gXX1dLFxuICAgIHVuZGVmaW5lZCxcbiAgICBlbmRGb3Jlc3QzKVxubGV0IGVuZEZvcmVzdDEgPSBuZXcgc3RvcnlFbGVtZW50KCdlbmRFeHBsb3JhdGlvbicsXG4gICAgW2BZb3UgY29udGludWUgdHJ1ZGdpbmcgdGhyb3VnaCB0aGUgc25vd3kgd29vZHMsIGxvb2tpbmcgZm9yIGFueSBzb3J0IG9mIGhlbHAuYCwgYFlvdSBjYW4ndCBmZWVsIHdlYWtlciB3aXRoIGVhY2ggc3RlcCwgYnV0IHlvdSBzdGlsbCBkb24ndCBmZWVsIHRoZSBjb2xkLmAsIGBZb3Ugc3RvcCBhbmQgdGhpbmsuYF0sXG4gICAge3VubG9ja2VkOiBmYWxzZX0sXG4gICAgZW5kRm9yZXN0MilcbmxldCB3aXNwTGVhdmUgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgdHVybiBhcm91bmQgc3RlcCBhd2F5IGZyb20gdGhlIGxpZ2h0LmAsIGBJZiBpdCdzIGEgY2FtcGZpcmUsIHlvdSBjYW4ndCBiZSBzdXJlIHRoYXQgdGhlc2UgcGVvcGxlIHdvbid0IGJlIGhvc3RpbGUuYCwgYEFuZCwgd2l0aCB0aGUgYmxpenphcmQgYW5kIHlvdXIgYmx1cnJlZCB2aXNpb24gLSBmcm9tIHlvdXIgaW5qdXJpZXM/IC0geW91IGNhbid0IGV2ZW4gYmUgc3VyZSB0aGF0IGl0J3MgYSBjYW1wZmlyZS5gXSxcbiAgICAnZXhwbG9yYXRpb25FdmVudCcsXG4gICAgdW5kZWZpbmVkKVxubGV0IHdpc3BBcHByb2FjaDUgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BUaGF0IG11c3QgaGF2ZSBiZWVuLi4uIGEgU3Bpcml0LCByaWdodD8gWW91IGRvIGtub3cgb2YgU3Bpcml0cy5gLCBgV2hlbiBvcmRpbmFyeSBwZW9wbGUgZGllLCB0aGV5IHJlaW5jYXJuYXRlIGludG8gYW5pbWFscy5gLCBgSWYgYSBwZXJzb24gaGFzIGRvbmUgZW5vdWdoIGluIHRoZSB3b3JzaGlwIG9mIG9uZSBvZiB0aGUgMjAgU3VucywgdGhleSByZWluY2FybmF0ZSBpbnRvIGEgU3Bpcml0LmAsIGBTbm93ZmFsbCBpcyBnZXR0aW5nIHdvcnNlLiBUaW1lIHRvIG1vdmUuYF0sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnLFxuICAgIHVuZGVmaW5lZClcbmxldCB3aXNwQXBwcm9hY2g0ID0gbmV3IHN0b3J5RWxlbWVudCgnaXRlbScsXG4gICAgW2BUaGUgd2lzcCBiYWxsIGZsaWVzIHRvd2FyZHMgeW91IGFnYWluLiBUaGlzIHRpbWUgeW91J3JlIHJlYWR5IGFuZCB5b3UgbGFuZCBhIHN0cmlrZSBpbiB0aGUgbWlkZGxlIG9mIGl0cyBnbG93aW5nIGJvZHkuYCwgYFdpdGggYSBmaXp6aW5nIHNvdW5kLCB0aGUgd2lzcCBleHBsb2RlcyBpbnRvIHRpbnkgc3BlY2tzIG9mIGxpZ2h0LmAsIGBZb3Ugc2VlIG9uZSBvZiB0aGUgYmlnZ2VyIHNwZWNrcywgYSBmaXN0LXNpemVkIGJhbGwgb2YgbGlnaHQsIGhhcyBsYW5kZWQgdW5kZXIgeW91ciBmZWV0LmAsIGBZb3UgcmVhY2ggaW50byB0aGUgc25vdyBhbmQgcGljayBpdCB1cC4gSXQgZW1pdHMgYSB3YXJtaW5nIGF1cmEuYCwgYFtDbGljayB0aGUgSW52ZW50b3J5IGJ1dHRvbiB0byBlcXVpcCBpdGVtc11gXSxcbiAgICBhbGxJdGVtcy53aXNwQmFsbCxcbiAgICB3aXNwQXBwcm9hY2g1KVxubGV0IHdpc3BBcHByb2FjaDMgPSBuZXcgc3RvcnlFbGVtZW50KCdiYXR0bGUnLFxuICAgIFtgWW91IHR1cm4gYXJvdW5kLCB0cnlpbmcgdG8ga2VlcCBpdCBpbiBzaWdodC5gLCBgSXQgc2VlbXMgdG8gYmUgYSBnbG93aW5nIHdpc3Agb2YgbGlnaHQuYCwgYEl0IHNlZW1zIHRvIGJlIGdldHRpbmcgcmVhZHkgdG8gc3dvb3AgaW4gdG93YXJkcyB5b3UgYWdhaW4uYCwgYEl0J3MgY2VydGFpbmx5IG5vIGNhbXBmaXJlLCBhbmQgaXQgZG9lc24ndCBzZWVtIHRvIGJlIGZyaWVuZGx5LiBZb3UgbmVlZCBhbnN3ZXJzLCBidXQgc3Vydml2YWwgY29tZXMgZmlyc3QuIFlvdSdyZSBub3Qgc3VyZSB5b3UgY2FuIHRha2UgbWFueSBtb3JlIG9mIHRoaXMgXCJ3aXNwJ3NcIiBmbHktYnlzLiBZb3UgaGF2ZSBub3RoaW5nIGJ1dCB5b3VyIGZpc3RzIHRvIGRlZmVuZCB5b3Vyc2VsZiB3aXRoLmBdLFxuICAgIFttb25zdGVycy53aXNwMV0sXG4gICAgd2lzcEFwcHJvYWNoNClcbmxldCB3aXNwQXBwcm9hY2gyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgVGhlIGJsaXp6YXJkLCB0aGUgdHJlZXMgYW5kIHRoZSBzbm93IGRvbid0IGhlbHAuYCwgYEFzIHlvdSBzdGVwIGNsb3NlciwgdGhlIGxpZ2h0IHN1ZGRlbmx5IG1vdmVzLiBJdCBmbGllcyBhIGxpdHRsZSB1cHdhcmRzLCBhbmQgdGhlbiBtb3ZlcyBjbG9zZXIgdG93YXJkcyB5b3UuYCwgYFRoZSBsaWdodCBzcGVlZHMgdXAsIGZseWluZyB0b3dhcmRzIHlvdSwgdW50aWwgaXQgZmxpZXMgcmlnaHQgdGhyb3VnaCB5b3UsIHBhaW5mdWxseSBidXJuaW5nIHlvdXIgZmxlc2guYF0sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnLFxuICAgIHdpc3BBcHByb2FjaDMpXG5sZXQgd2lzcEFwcHJvYWNoMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBjYW4ndCBoZWxwIGJ1dCBmZWVsIHdlYWtlci4gVGhlIGNvbGQgbXVzdCBiZSBnZXR0aW5nIHRvIHlvdS5gLCBgWW91IG5lZWQgaGVscC4gWW91IGRlY2lkZSB0byB3YWxrIGNsb3NlciB0byB0aGUgbGlnaHQuYCwgYFlvdSBzdGVwIHNsb3dseSwgdHJ5aW5nIHRvIHNlZSB3aGF0IHRoZSBsaWdodCBpcy5gXSxcbiAgICAnZXhwbG9yYXRpb25FdmVudCcsXG4gICAgd2lzcEFwcHJvYWNoMilcbmxldCB3aXNwMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Nob2ljZScsXG4gICAgW2BZb3VyIHZpc2lvbiBpcyBzbyBibHVycnkgdGhhdCB5b3UgY2FuJ3QgcXVpdGUgbWFrZSBvdXQgd2hhdCB0aGUgbGlnaHQgaXMuYCwgYFBlcmhhcHMsIGNhbXBmaXJlPyBQZXJoYXBzIHNvbWVvbmUgaXMgaW4gdGhpcyBmb3Jlc3QgYWZ0ZXIgYWxsLmAsIGBJdCBjb3VsZCBhbHNvIGJlIGJhbmRpdHMuIFBvYWNoZXJzLiBXb3JzaGlocHBlcnMgb2YgZXZpbCBTdW5zLCByZWFkeSB0byB0YWtlIGFkdmFudGFnZSBvZiBhIGR5aW5nIHRyYXZlbGVyLmAsIGBBcHByb2FjaCB0aGUgbGlnaHQgc291cmNlP2BdLFxuICAgIFt7Y2hvaWNlVGV4dDogJ1Nsb3dseSBhcHByb2FjaCB0aGUgbGlnaHQuJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdGb01zYXdXaXNwJyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IHdpc3BBcHByb2FjaDF9LFxuICAgIHtjaG9pY2VUZXh0OiAnVHVybiBhcm91bmQgYW5kIHdhbGsgYXdheSBmb3JtIHRoZSBsaWdodC4nLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ0ZvTW5vdFNlZW5XaXNwJyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IHdpc3BMZWF2ZX1dLFxuICAgIHVuZGVmaW5lZClcbmxldCB3aXNwMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ3JhbmRvbUVuY291bnRlcicsXG4gICAgW2BZb3UgY29udGludWUgdHJ1ZGdpbmcgdGhyb3VnaCB0aGUgc25vdy5gLCBgWW91IGRvbid0IHNlZW0gdG8gZmVlbCB5b3VyIGZlZXQuIFlvdSBob3BlIGl0J3Mgbm90IGR1ZSB0byBmcm9zdGJpdGUuYCwgYEFzIHlvdSBsaWZ0IHlvdXIgaGVhZCB0byBsb29rIGZvcndhcmQsIHBsYWNpbmcgeW91ciBoYW5kIGFnYWluc3QgeW91ciBmb3JlaGVhZCB0byBibG9jayBvZmYgdGhlIHdpbmQsIHlvdSBzZWUgYSBsaWdodCBiZXR3ZWVuIHRoZSB0cmVlcy5gXSxcbiAgICB7aGFzUGxheWVyU2Vlbk1lOiBmYWxzZX0sXG4gICAgd2lzcDIpXG5sZXQgY29ycHNlTGVhdmUgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgdHVybiBhcm91bmQsIG5vdCB3aXNoaW5nIHRvIGRpc3R1cmIgdGhlIGNvcnBzZS5gLCBgWW91J2xsIG1ha2UgaXQgb3V0IG9mIGhlcmUuYCwgYE5vdCB0aGlzIHdheSwgYnV0IHlvdSB3aWxsLmAsIGBBcyB5b3Ugd2FsayBhd2F5IGZyb20gdGhlIGJvZHksIHlvdSBjYW4ndCBoZWxwIGJ1dCBmZWVsIHdlYWtlci4gUHJvYmFibHkgZnJvc3RiaXRlLiBSaWdodD9gXSxcbiAgICAnZXhwbG9yYXRpb25FdmVudCcsXG4gICAgWydzdGF0cycsICdiZW5ldm9sZW5jZScsIDEwXSlcbmxldCBjb3Jwc2VTZWFyY2gyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91ciBoYW5kIG1vdmVzIHJpZ2h0IHRocm91Z2ggdGhlIHNub3cuYCwgYFlvdSB0cnkgYWdhaW4uIFlvdSBjYW4ndCBtb3ZlIHRoZSBzbm93LiBZb3VyIGhhbmQgbW92ZXMgcmlnaHQgdGhyb3VnaCB0aGUgY29ycHNlIHRvby5gLCBgWW91IHR1cm4gYXJvdW5kLmAsIGBBdCBmaXJzdCwgeW91IHRob3VnaHQgdGhhdCB0aGUgYmxpenphcmQgZmlsbGVkIGluIGFueSB0cmFja3MgaW4gdGhlIHNub3cuIE5vdyB0aGF0IHlvdSdyZSBsb29raW5nIC0gaXQncyBub3QgdGhhdC5gLCBgWW91J3JlIG5vdCBsZWF2aW5nIGFueSBmb290cHJpbnRzIGluIHRoZSBzbm93IGF0IGFsbC5gLCBgV2hhdCB0aGUgaGVsbCBpcyBnb2luZyBvbj9gXSxcbiAgICAnZXhwbG9yYXRpb25FdmVudCcsXG4gICAgWydzdGF0cycsICdldmlsJywgMTBdKVxubGV0IGNvcnBzZVNlYXJjaDEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BBbG9uZSwgd2l0aCBubyBiZWxvbmdpbmdzLCBpbiB0aGUgbWlkZGxlIG9mIHdpbnRlciBpbiB0aGUgRm9yZXN0IG9mIE1pcnJvcnM/YCwgYFllYWgsIHlvdSdsbCB0YWtlIGFueXRoaW5nLCBvciBpdCdsbCBiZSB2ZXJ5IGVhc3kgdG8gZW5kIHVwIGxpa2UgdGhpcyBwZXJzb24uYCwgYFlvdSBsb3dlciB5b3Vyc2VsZiB0b3dhcmRzIHRoZSBib2R5LCB0cnlpbmcgdG8gcmVtb3ZlIHNvbWUgc25vdyBmcm9tIHRoZSBib2R5LmBdLFxuICAgICdleHBsb3JhdGlvbkV2ZW50JyxcbiAgICBjb3Jwc2VTZWFyY2gyKVxubGV0IGNvcnBzZTIgPSBuZXcgc3RvcnlFbGVtZW50KCdjaG9pY2UnLFxuICAgIFtgTG9vdGluZyB3b3VsZCBiZSBhIG5ldyBsb3cuYCwgYEFsdGhvdWdoLi4uYCwgYFlvdSdyZSBpbiBubyBjb25kaXRpb24gdG8gYmUgcGlja3kuYCwgYFNlYXJjaCB0aGUgYm9keT9gXSxcbiAgICBbe2Nob2ljZVRleHQ6ICdTZWFyY2ggdGhlIGJvZHkuJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdGb01zZWFyY2hlZEJvZHknLFxuICAgIGNob2ljZU5leHRTdG9yeTogY29ycHNlU2VhcmNoMX0sXG4gICAge2Nob2ljZVRleHQ6ICdMZWF2ZSB0aGUgYm9keSBhbG9uZS4nLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ0ZvTWxlZnRCb2R5JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGNvcnBzZUxlYXZlfV0sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnKVxubGV0IGNvcnBzZTEgPSBuZXcgc3RvcnlFbGVtZW50KCdyYW5kb21FbmNvdW50ZXInLFxuICAgIFsnWW91IGNvbnRpbnVlIG1vdmluZyB0aHJvdWdoIHRoZSBGb3Jlc3Qgb2YgTWlycm9ycywgd2hlbiB5b3Ugc2VlIGEgbW91bmQgaW4gdGhlIHNub3cuJywgJ1RoZSBzbm93IHNlZW1zIHRvIGJlIGNvdmVyaW5nIHNvbWV0aGluZy4nLCAnWW91ciBzdXNwaWNpb25zIGFyZSB0cnVlLiBJdCBpcyBhIGxvbmVseSBib2R5LCBpbiB0aGUgZnJvc3RlZCBmb3Jlc3QsIGNvdmVyZWQgaW4gc25vdy4nXSxcbiAgICB7aGFzUGxheWVyU2Vlbk1lOiBmYWxzZX0sXG4gICAgY29ycHNlMilcbmxldCB0dXNrd29sZjMgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BIdWg/IElzIGl0IGJsaW5kPyBDdXJzZWQ/IFBlcmhhcHMgaXQncyBhIFNwaXJpdCdzIGlsbHVzaW9uPyBPciBtYXliZSB5b3UncmUgaGFsbHVjaW5hdGluZy5gLCBgV2hhdGV2ZXIgaXQgaXMsIHRoZSB0dXNrd29sZiBhdCBsZWFzdCBzZWVtcyB2ZXJ5IHJlYWwuIFlvdSdyZSBub3QgaW4gYW55IGNvbmRpdGlvbiB0byBpbnZlc3RpZ2F0ZS5gLCBgWW91IHdvbid0IGdldCBhbm90aGVyIGNoYW5jZS4gWW91IHF1aWNrbHkgYmFjayBhd2F5IGZyb20gdGhlIHR1c2t3b2xmIHdoaWxlIGl0J3MgY29uZnVzZWQgb3IgZGlzdHJhY3RlZC5gXSxcbiAgICAnZXhwbG9yYXRpb25FdmVudCcsXG4gICAgdW5kZWZpbmVkKVxubGV0IHR1c2t3b2xmMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFRoZSBncm93bGluZyBzZWVtcyB0byBiZSBjbG9zZS4gTWF5YmUgMTUgbWV0ZXJzIGJlaGluZCB5b3UuYCwgYFRoZSB0dXNrd29sZiBkb2Vzbid0IHNlZW0gdG8gYmUgc3RyaWtpbmcgdGhvdWdoLiBPZGQuYCwgYFlvdSBzbG93bHkgdHVybiBhcm91bmQuYCwgYEEgYmlnIHdvbGYgb2Ygc2lsdmVyIGZ1ciBzdGFuZHMgbm90IGZhciBmcm9tIHdoZXJlIHlvdSBhcmUsIHR3byAzMCBjbXMgbG9uZyB0dXNrcyBhdCB0aGUgcmVhZHkuYCwgJ0l0IHNwaW5zIGFyb3VuZCBpbiBwbGFjZSwgc25pZmZpbmcgYW5kIHNlYXJjaGluZyBmb3Igc29tZXRoaW5nLiBJdCBpZ25vcmVzIHlvdSBjb21wbGV0ZWx5LiddLFxuICAgICdleHBsb3JhdGlvbkV2ZW50JyxcbiAgICB0dXNrd29sZjMpXG5sZXQgdHVza3dvbGYxID0gbmV3IHN0b3J5RWxlbWVudCgncmFuZG9tRW5jb3VudGVyJyxcbiAgICBbJ0FzIHlvdSBydW4gdGhyb3VnaCB0aGUgZm9yZXN0LCB5b3VyIHRob3VnaHRzIHN0YXJ0IGdhdGhlci4nLCAnWW91IGtub3cgdGhlIEZhdGVkIFJlYWxtIHF1aXRlIHdlbGwuJywgJ0p1ZGdpbmcgYnkgdGhlIGZyb3N0ZWQgcGVha3MgaW4gdGhlIGRpc3RhbmNlLCB0aGlzIG11c3QgYmUgdGhlIEZvcmVzdCBvZiBNaXJyb3JzLiBOYW1lZCBhZnRlciB0aGUgY2xlYXIgd2hpdGUgc25vdyB0aGF0IGxpZXMgaGVyZSBmb3IgMTYgb3V0IG9mIHRoZSAyMCBtb250aHMuJywgJ1lvdXIgdGhvdWdodHMgcGF1c2UgYXMgeW91IGhlYXIgZ3Jvd2xpbmcgYmVoaW5kIHlvdS4gQSB0dXNrd29sZi4gRnVjay4nXSxcbiAgICB7aGFzUGxheWVyU2Vlbk1lOiBmYWxzZX0sXG4gICAgdHVza3dvbGYyKVxuLy8gV0FLRSBVUCBTRVFVRU5DRVxubGV0IHdha2VVcE1vdmUgPSBuZXcgc3RvcnlFbGVtZW50KCdleHBsb3JhdGlvbicsXG4gICAgW2BZb3VyIGJvZHkgbW92ZXMgcXVpY2tseSwgYnV0IHRoZSBmZWVsaW5nIG9mIG51bWJuZXNzIGFsbCBvdmVyIGlzIG92ZXJ3aGVsbWluZy5gLCBgTXVzdCBiZSB0aGUgZnJvc3RiaXRlLiBJZiB5b3UncmUgbHVja3ksIHlvdSB3b24ndCBsb3NlIGFueSBmaW5nZXJzIG9yIHRvZXMuYCwgYEluIGFueSBjYXNlLCBpdCdzIHRpbWUgdG8gbW92ZSwgb3IgeW91J2xsIGxvc2UgeW91ciBsaWZlIGFzIHdlbGwuYCwgYFtVU0UgV0FTRCBvciBjbGljayB0aGUgbWFwIHRvIG1vdmUuXWBdLFxuICAgIFt7ZW5jb3VudGVyU3RvcnlFbGVtZW50OiB3aXNwMSwgdGlsZU51bWJlcjogJyN0aWxlMzAnLCBpY29uOiBpY29ucy5pY29uVHJlZX0sXG4gICAge2VuY291bnRlclN0b3J5RWxlbWVudDogY29ycHNlMSwgdGlsZU51bWJlcjogJyN0aWxlNTAnLCBpY29uOiBpY29ucy5pY29uVHJlZTJ9LFxuICAgIHtlbmNvdW50ZXJTdG9yeUVsZW1lbnQ6IHR1c2t3b2xmMSwgdGlsZU51bWJlcjogJyN0aWxlNzAnLCBpY29uOiBpY29ucy5pY29uVHJlZTN9LFxuICAgIHtlbmNvdW50ZXJTdG9yeUVsZW1lbnQ6IGVuZEZvcmVzdDEsIHRpbGVOdW1iZXI6ICcjdGlsZTMnLCBpY29uOiBpY29ucy5pY29uUGVyc29ufV0sXG4gICAgdW5kZWZpbmVkKVxubGV0IHdha2VVcExpZTIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3VyIGV5ZXMgb3BlbiBhZ2Fpbi4gWW91IGZlZWwgbm90aWNlYWJseSB3ZWFrZXIuIFlvdXIgdmlzaW9uIHNlZW1zIGJsdXJyeS5gLCBgVGhlIGNsZWFyIGV2ZW5pbmcgc2t5IGhhcyBjaGFuZ2VkIGludG8gYSBuYXZ5IGJsdWUgZHVzay5gLCAnWW91IGFsbW9zdCBsZXQgeW91ciBleWVzIGNsb3NlIGFnYWluLCB3aGVuIHlvdSBoZWFyIHRoZSBob3dsIG9mIGEgdHVza3dvbGYuIERyaXZlbiBieSBwdXJlIGluc3RpbmN0LCB5b3UgZ2V0IHRvIHlvdXIga25lZXMsIHRoZW4gdG8geW91ciBmZWV0LCBhbmQgc3RhcnQgbW92aW5nLicsIGBFdmVyeW9uZSBoYXMgdG8gZ28gb25lIGRheSwgYnV0IHR1c2t3b2xmIGZvb2QgaXNuJ3QgeW91ciB3YXkuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHdha2VVcE1vdmUpXG5sZXQgd2FrZVVwTGllMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBsaWUgb24geW91ciBiZWxseSBpbiB0aGUgc25vdywgZmVlbGluZyBwb3dlcmxlc3MgdG8gbW92ZS5gLCBgWW91IGFsbW9zdCBkb24ndCBmZWVsIHRoZSBjb2xkLiBZb3Ugd29uZGVyIGlmIGl0IG1lYW5zIHRoYXQgeW91J3JlIGFsbW9zdCBkZWFkIGFscmVhZHkuIEhvdyBkaWQgeW91IGdldCBoZXJlPyBXZXJlIHlvdSByb2JiZWQ/YCwgJ1lvdSBjbG9zZSB5b3VyIGV5ZXMgYWdhaW4uIE1heWJlIHRoaXMgcHJvYmxlbSB3aWxsIGRpc2FwcGVhciBsaWtlIGEgYmFkIGRyZWFtLiddLFxuICAgIHVuZGVmaW5lZCxcbiAgICB3YWtlVXBMaWUyKVxubGV0IHdha2VVcFJpc2UyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFsnWW91IGdldCB0byB5b3VyIGZlZXQuIEFnYWluLCB3aXRoIHN1cnByaXNpbmcgZWFzZS4nLCAnWW91IG11c3Qgbm90IGhhdmUgYmVlbiBvdXQgZm9yIGxvbmcuIFlvdSBmZWVsIGx1Y2t5LiBGcm9zdCB0YWtlcyBsaXZlcyBxdWlja2x5LicsICdZb3UgbG9vayBiYWNrIGRvd24uIFRoZSB3aW5kIGhhcyBhbHJlYWR5IGRvbmUgaXRzIGpvYiAtIHRoZXJlIGlzIGFsbW9zdCBubyBpbmRlbnRhdGlvbiBpbiB0aGUgc25vdyBmcm9tIHlvdXIgYm9keSBhbHJlYWR5LicsIGBZb3UgZG9uJ3QgZmVlbCBwYXJ0aWN1bGFybHkgY29sZCB5ZXQsIGJ1dCB5b3UgcnViIHlvdXIgaGFuZHMgZm9yIHdhcm10aCBuZXZlcnRoZWxlc3MuYF0sXG4gICAgWydnb2xkJywgMjAwXSxcbiAgICB3YWtlVXBNb3ZlKVxubGV0IHdha2VVcFJpc2UxID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFsnWW91IHNlZW0gdG8gYmUgbHlpbmcgb24geW91ciBiZWxseS4nLCAnWW91IHBsYW50IHlvdXIgaGFuZHMgaW4gdGhlIHNub3csIHRyeWluZyB0byByaXNlIHRvIHlvdXIga25lZXMuJywgJ1lvdSByaXNlIHRvIHlvdXIga25lZXMgd2l0aCBzdXJwcmlzaW5nIGVhc2UuJywgYFlvdSBsb29rIGFyb3VuZC4gWW91ciBzYXRjaGVsIGRvZXNuJ3Qgc2VlbSB0byBiZSB3aXRoIHlvdS4gSG93IGRpZCB5b3UgZ2V0IGhlcmU/IFdlcmUgeW91IHJvYmJlZD9gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgd2FrZVVwUmlzZTIpXG5sZXQgd2FrZVVwMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Nob2ljZScsXG4gICAgWydZb3Ugb3BlbiB5b3VyIGV5ZXMgdG8gc2VlIHB1cmUgd2hpdGUgYXJvdW5kIHlvdS4nLCAnWW91IGxpZnQgeW91ciBoZWFkLiBUcmVldG9wcyBjb3ZlcmVkIGluIHNwYXJrbGluZyB3aGl0ZSBzbm93LiBDbGVhciBldmVuaW5nIHNreS4gU291bmRzIG9mIHRoZSB3aW5kLiddLFxuICAgIFt7Y2hvaWNlVGV4dDogJ1RyeSB0byBnZXQgdXAuJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICd3YWtlVXBEYXknLFxuICAgIGNob2ljZU5leHRTdG9yeTogd2FrZVVwUmlzZTF9LFxuICAgIHtjaG9pY2VUZXh0OiAnQ29udGludWUgbHlpbmcgaW4gdGhlIHNub3cuJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICd3YWtlVXBOaWdodCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiB3YWtlVXBMaWUxfV0sXG4gICAgdW5kZWZpbmVkKVxuLy8gcHJvbG9ndWVcbmxldCBwcm9sb2d1ZTQgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgbG9zdC5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgd2FrZVVwMSlcbmxldCBwcm9sb2d1ZTMgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3Ugd29uLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICB3YWtlVXAxKVxubGV0IHByb2xvZ3VlMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2ZhbHNlY3ViZXMnLFxuICAgIFtgTWlrZXk6IFwiSGksIG15IG5hbWUncyBNaWtleS5cImAsIGBNaWtleTogXCJMZXQncyBwbGF5IEZhbHNlY3ViZXMhXCJgXSxcbiAgICB7b3Bwb25lbnROYW1lOiAnTWlrZXknLFxuICAgIG9wcG9uZW50TGluZXM6IHtcbiAgICAgICAgb3BlbkxpbmU6IGBDb21lIG9uLCBsZXQncyBwbGF5YCxcbiAgICAgICAgYmlkTGluZTogYEx1Y2sgaXMgb24gbXkgc2lkZSB0b2RheWAsXG4gICAgICAgIGJsdWZmTGluZTogYEkgaGF2ZSBnb29kIGRpY2UgdG9kYXksIGtpZGAsXG4gICAgICAgIGFjY3VzZUxpbmU6IGBZZWFoLCBJIGRvbid0IHRoaW5rIHNvYCxcbiAgICAgICAgd2luTGluZTogYEdvdGNoYSwga2lkYCxcbiAgICAgICAgbG9zZUxpbmU6IGBEYXJuLiBZb3UgZ290IGx1Y2t5LCBwYWxgfSxcbiAgICBjb25zZXF1ZW5jZXM6IHtcbiAgICAgICAgd2luOiAncHJvbG9ndWVGYWxzZWN1YmVzV2luJyxcbiAgICAgICAgbG9zZTogJ3Byb2xvZ3VlRmFsc2VjdWJlc0xvc2UnfSxcbiAgICB9LFxuICAgIHt3aW46IHByb2xvZ3VlMywgbG9zZTogcHJvbG9ndWU0fSlcbmxldCBwcm9sb2d1ZTEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BTb21ldGhpbmcgc29tZXRoaW5nLmAsIGBPb2gsIHNvbWV0aGluZy5gLCBgTGV0J3MgcGxheSBGYWxzZWN1YmVzLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBwcm9sb2d1ZTIpXG4vLyBleHBvcnRcbmxldCBzY3JpcHRPYmplY3RzID0geyBwcm9sb2d1ZTEgfTtcbmV4cG9ydCB7IHN0b3J5RWxlbWVudCwgc2NyaXB0T2JqZWN0cyB9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlcGFyYXRvcihzdG9yeUVsZW1lbnQsIHBsYXllckNvbnNlcXVlbmNlc0FycmF5LCBzdG9yeVRlbGxlckZ1bmN0aW9uKSB7XHJcbiAgICBsZXQgY29ycmVjdE5leHRTdG9yeUVsZW1lbnQ7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3J5RWxlbWVudC50ZXh0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHBsYXllckNvbnNlcXVlbmNlc0FycmF5LmluY2x1ZGVzKHN0b3J5RWxlbWVudC50ZXh0W2ldLmRlcGVuZGVuY3kpKSB7XHJcbiAgICAgICAgICAgIGNvcnJlY3ROZXh0U3RvcnlFbGVtZW50ID0gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY29ycmVjdE5leHRTdG9yeUVsZW1lbnQgIT09IG51bGwpIHtcclxuICAgICAgICBzdG9yeVRlbGxlckZ1bmN0aW9uKHN0b3J5RWxlbWVudC50ZXh0W2NvcnJlY3ROZXh0U3RvcnlFbGVtZW50XS5uZXh0U3RvcnlFbGVtZW50KTtcclxuICAgIH1cclxufSIsIi8vIGltcG9ydDogc3RvcnlFbGVtZW50LCBzdG9yeUVsZW1lbnRzLCBodWQsIGdyYWJJdGVtLCBjaGFyMSwgY2xhc3NlcywgbGlzdEVuZW1pZXMsIG1vdmVPbiwgZW5lbWllcyBhcnJheSwgZW5lbXkgb2JqZWN0c1xuaW1wb3J0IHNlcGFyYXRvciBmcm9tICcuL2NvbXBfc2VwYXJhdG9yJztcbmltcG9ydCB7XG4gICAgcGxheWVySGFuZCwgb3Bwb25lbnRIYW5kLCBjdXJyZW50QmlkLCBhY2N1c2F0aW9uLCBleGFtcGxlTGluZXMsIGRpZTEsIGRpZTIsIGRpZTMsIGRpZTQsIGRpZTUsIGRpZTYsIHN0YXJ0RGljZUdhbWUsIGZhbHNlQ3ViZXMsIHJvbGw2ZDRQbGF5ZXIsIHJvbGw2ZDRPcHBvbmVudCwgcm9sbDFkNCwgcm9sbFBoYXNlLCBiaWRQaGFzZSwgZmlmdHlGaWZ0eSwgb25lVGhpcmQsIG9wcG9uZW50UmVzcG9uc2UsIG9wcG9uZW50QmlkLCBjYWxsT3V0LCBnYW1lRW5kXG59IGZyb20gJy4vY29tcF9kaWNlX2dhbWUnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBcbiAgICB0b3BfYmFyLFxuICAgIGxvZ193aW5kb3csXG4gICAgbWFpbl93aW5kb3csXG4gICAgaW1hZ2Vfd2luZG93LFxuICAgIG1lbnVfd2luZG93LFxuICAgIGJ1dHRvbl93aW5kb3csXG4gICAgYXR0YWNrX2J1dHRvbixcbiAgICBzcGVjaWFsX2J1dHRvbixcbiAgICBpbnZlbnRvcnlfYnV0dG9uLFxuICAgIHN0YXRzX2J1dHRvbixcbiAgICBkaWFsb2dBbmltYXRpb25FbmRcbn0gZnJvbSAnLi9jb21wX2h1ZCc7XG5pbXBvcnQgeyBlbmVtaWVzLCBsaXN0RW5lbWllcywgc3dpdGNoQXR0YWNrIH0gZnJvbSBcIi4vY29tcF9iYXR0bGVfZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBncmFiSXRlbSwgcGxheWVyR29sZCwgYWRkR29sZCB9IGZyb20gJy4vY29tcF9pbnZlbnRvcnlfc3lzdGVtJztcbmltcG9ydCB7XG4gICAgQ2hhcmFjdGVyLFxuICAgIE1vbnN0ZXIsXG4gICAgSmFuaXRvcixcbiAgICBBY2NvdW50YW50LFxuICAgIERhbmNlcixcbiAgICBjaGFyMSxcbiAgICBtZW51VXBkYXRlcixcbiAgICBOUENNYWtlcixcbiAgICBOUENSb2xlXG59IGZyb20gJy4vY29tcF9vYmplY3RzX2FuZF9tZXRob2RzJztcbi8vIGltcG9ydCB7ICBzdG9yeUVsZW1lbnRzIH0gZnJvbSAnLi9jb21wX3N0b3J5X29iamVjdHMnO1xuaW1wb3J0IHsgc3RvcnlFbGVtZW50LCBzY3JpcHRPYmplY3RzIH0gZnJvbSAnLi9jb21wX3NjcmlwdCc7XG5pbXBvcnQgeyBSYWNlLCByYWNlcyB9IGZyb20gJy4vY29tcF9yYWNlcyc7XG5jb25zdCBldmVudEVtaXR0ZXIgPSByZXF1aXJlKCcuL2NvbXBfZXZlbnRfZW1pdHRlcicpO1xuaW1wb3J0IHNvbmcgZnJvbSAnLi9jb21wX2Fzc2V0cyc7XG4vLyBzb25nIHBsYXlpbmdcbmxldCBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XG5hdWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2F1ZGlvJyk7XG5hdWRpby5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2wnLCAnY29udHJvbCcpO1xuYXVkaW8uc2V0QXR0cmlidXRlKCdsb29wJywgJ2xvb3AnKTtcbmxldCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcbnNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke3Nvbmd9YCk7XG5zb3VyY2Uuc2V0QXR0cmlidXRlKCd0eXBlJyBgYXVkaW8vbXBlZ2ApO1xuYXVkaW8uYXBwZW5kQ2hpbGQoc291cmNlKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXVkaW8pO1xuYXVkaW8ucGxheSgpO1xuLy8gZ2FtZS1sb25nIHZhcnNcbmxldCBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMgPSBbXTtcbmxldCBpc1BsYXllckV4cGxvcmluZyA9IGZhbHNlO1xubGV0IENob3NlbiA9IHt9O1xuLy8gdXBkYXRlIGNob3NlblxuZnVuY3Rpb24gdXBkYXRlQ2hvc2VuKCkge1xuICAgIGxldCBhbGxTdG9yeUVsZW1lbnRzID0gc3RvcnlFbGVtZW50LmdldEFsbEluc3RhbmNlcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsU3RvcnlFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzd2l0Y2ggKGFsbFN0b3J5RWxlbWVudHNbaV0udHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZGVzY3JpcHRpb24nOlxuICAgICAgICAgICAgY2FzZSAnaXRlbSc6XG4gICAgICAgICAgICBjYXNlICdiYXR0bGUnOlxuICAgICAgICAgICAgY2FzZSAnZXhwbG9yYXRpb24nOlxuICAgICAgICAgICAgY2FzZSAncmFuZG9tRW5jb3VudGVyJzpcbiAgICAgICAgICAgIGNhc2UgJ2Zvcm0nOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXBsYWNlQWxsKCdDaG9zZW5OYW1lJywgQ2hvc2VuLm5hbWUpOyBcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlcGxhY2VBbGwoJ0Nob3NlblN1cm5hbWUnLCBDaG9zZW4uc3VybmFtZSk7IFxuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVwbGFjZUFsbCgneGUnLCBDaG9zZW4uaGUpOyBcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlcGxhY2VBbGwoJ3hpcycsIENob3Nlbi5oaXMpOyBcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlcGxhY2VBbGwoJ3hpbScsIENob3Nlbi5oaW0pOyBcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlcGxhY2VBbGwoJ3hpbXNlbGYnLCBDaG9zZW4uaGltc2VsZik7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Nob2ljZSc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlcGxhY2VBbGwoJ0Nob3Nlbk5hbWUnLCBDaG9zZW4ubmFtZSk7IFxuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVwbGFjZUFsbCgnQ2hvc2VuU3VybmFtZScsIENob3Nlbi5zdXJuYW1lKTsgXG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXBsYWNlQWxsKCd4ZScsIENob3Nlbi5oZSk7IFxuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVwbGFjZUFsbCgneGlzJywgQ2hvc2VuLmhpcyk7IFxuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVwbGFjZUFsbCgneGltJywgQ2hvc2VuLmhpbSk7IFxuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVwbGFjZUFsbCgneGltc2VsZicsIENob3Nlbi5oaW1zZWxmKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYWxsU3RvcnlFbGVtZW50c1tpXS5tb2RpZmllcnMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS5tb2RpZmllcnNba10uY2hvaWNlVGV4dCA9IGFsbFN0b3J5RWxlbWVudHNbaV0ubW9kaWZpZXJzW2tdLmNob2ljZVRleHQucmVwbGFjZUFsbCgnQ2hvc2VuTmFtZScsIENob3Nlbi5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS5tb2RpZmllcnNba10uY2hvaWNlVGV4dCA9IGFsbFN0b3J5RWxlbWVudHNbaV0ubW9kaWZpZXJzW2tdLmNob2ljZVRleHQucmVwbGFjZUFsbCgnQ2hvc2VuU3VybmFtZScsIENob3Nlbi5zdXJuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS5tb2RpZmllcnNba10uY2hvaWNlVGV4dCA9IGFsbFN0b3J5RWxlbWVudHNbaV0ubW9kaWZpZXJzW2tdLmNob2ljZVRleHQucmVwbGFjZUFsbCgneGUnLCBDaG9zZW4uaGUpO1xuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLm1vZGlmaWVyc1trXS5jaG9pY2VUZXh0ID0gYWxsU3RvcnlFbGVtZW50c1tpXS5tb2RpZmllcnNba10uY2hvaWNlVGV4dC5yZXBsYWNlQWxsKCd4aXMnLCBDaG9zZW4uaGlzKTtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS5tb2RpZmllcnNba10uY2hvaWNlVGV4dCA9IGFsbFN0b3J5RWxlbWVudHNbaV0ubW9kaWZpZXJzW2tdLmNob2ljZVRleHQucmVwbGFjZUFsbCgneGltJywgQ2hvc2VuLmhpbSk7XG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0ubW9kaWZpZXJzW2tdLmNob2ljZVRleHQgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLm1vZGlmaWVyc1trXS5jaG9pY2VUZXh0LnJlcGxhY2VBbGwoJ3hpbXNlbGYnLCBDaG9zZW4uaGltc2VsZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGlhbG9ndWUnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5ucGNMaW5lID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLm5wY0xpbmUucmVwbGFjZUFsbCgnQ2hvc2VuTmFtZScsIENob3Nlbi5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLm5wY0xpbmUgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ubnBjTGluZS5yZXBsYWNlQWxsKCdDaG9zZW5TdXJuYW1lJywgQ2hvc2VuLnN1cm5hbWUpOyBcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLm5wY0xpbmUgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ubnBjTGluZS5yZXBsYWNlQWxsKCd4ZScsIENob3Nlbi5oZSk7IFxuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ubnBjTGluZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5ucGNMaW5lLnJlcGxhY2VBbGwoJ3hpcycsIENob3Nlbi5oaXMpO1xuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ubnBjTGluZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5ucGNMaW5lLnJlcGxhY2VBbGwoJ3hpbScsIENob3Nlbi5oaW0pO1xuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ubnBjTGluZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5ucGNMaW5lLnJlcGxhY2VBbGwoJ3hpbXNlbGYnLCBDaG9zZW4uaGltc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlc1trXS5kaWFsb2d1ZUNob2ljZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXNba10uZGlhbG9ndWVDaG9pY2UucmVwbGFjZUFsbCgnQ2hvc2VuTmFtZScsIENob3Nlbi5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXNba10uZGlhbG9ndWVDaG9pY2UgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzW2tdLmRpYWxvZ3VlQ2hvaWNlLnJlcGxhY2VBbGwoJ0Nob3NlblN1cm5hbWUnLCBDaG9zZW4uc3VybmFtZSk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlc1trXS5kaWFsb2d1ZUNob2ljZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXNba10uZGlhbG9ndWVDaG9pY2UucmVwbGFjZUFsbCgneGUnLCBDaG9zZW4uaGUpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXNba10uZGlhbG9ndWVDaG9pY2UgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzW2tdLmRpYWxvZ3VlQ2hvaWNlLnJlcGxhY2VBbGwoJ3hpcycsIENob3Nlbi5oaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlc1trXS5kaWFsb2d1ZUNob2ljZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXNba10uZGlhbG9ndWVDaG9pY2UucmVwbGFjZUFsbCgneGltJywgQ2hvc2VuLmhpbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzW2tdLmRpYWxvZ3VlQ2hvaWNlID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlc1trXS5kaWFsb2d1ZUNob2ljZS5yZXBsYWNlQWxsKCd4aW1zZWxmJywgQ2hvc2VuLmhpbXNlbGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29uc2VxdWVuY2UnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dFtrXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHRba10ucmVwbGFjZUFsbCgnQ2hvc2VuTmFtZScsIENob3Nlbi5uYW1lKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0uY29uc2VxdWVuY2VUZXh0W2tdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dFtrXS5yZXBsYWNlQWxsKCdDaG9zZW5TdXJuYW1lJywgQ2hvc2VuLnN1cm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dFtrXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHRba10ucmVwbGFjZUFsbCgneGUnLCBDaG9zZW4uaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dFtrXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHRba10ucmVwbGFjZUFsbCgneGlzJywgQ2hvc2VuLmhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0uY29uc2VxdWVuY2VUZXh0W2tdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dFtrXS5yZXBsYWNlQWxsKCd4aW0nLCBDaG9zZW4uaGltKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHRba10gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0uY29uc2VxdWVuY2VUZXh0W2tdLnJlcGxhY2VBbGwoJ3hpbXNlbGYnLCBDaG9zZW4uaGltc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyB1cGRhdGUgY29uY2VwdFxuZnVuY3Rpb24gdXBkYXRlQ29uY2VwdCgpIHtcbiAgICBsZXQgYWxsU3RvcnlFbGVtZW50cyA9IHN0b3J5RWxlbWVudC5nZXRBbGxJbnN0YW5jZXMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFN0b3J5RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3dpdGNoIChhbGxTdG9yeUVsZW1lbnRzW2ldLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ2l0ZW0nOlxuICAgICAgICAgICAgY2FzZSAnYmF0dGxlJzpcbiAgICAgICAgICAgIGNhc2UgJ2Nob2ljZSc6XG4gICAgICAgICAgICBjYXNlICdleHBsb3JhdGlvbic6XG4gICAgICAgICAgICBjYXNlICdyYW5kb21FbmNvdW50ZXInOlxuICAgICAgICAgICAgY2FzZSAnZm9ybSc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlcGxhY2VBbGwoJ0p1c3RpY2UnLCBjaGFyMS5zcGlyaXRDb25jZXB0LmNvbmNlcHQpOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkaWFsb2d1ZSc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLm5wY0xpbmUgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ubnBjTGluZS5yZXBsYWNlQWxsKCdKdXN0aWNlJywgY2hhcjEuc3Bpcml0Q29uY2VwdC5jb25jZXB0KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzW2tdLmRpYWxvZ3VlQ2hvaWNlID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlc1trXS5kaWFsb2d1ZUNob2ljZS5yZXBsYWNlQWxsKCdKdXN0aWNlJywgY2hhcjEuc3Bpcml0Q29uY2VwdC5jb25jZXB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbnNlcXVlbmNlJzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHQubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHRba10gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0uY29uc2VxdWVuY2VUZXh0W2tdLnJlcGxhY2VBbGwoJ0p1c3RpY2UnLCBjaGFyMS5zcGlyaXRDb25jZXB0LmNvbmNlcHQpOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIHVwZGF0ZSBzdG9yeUVsZW1lbnRzXG5mdW5jdGlvbiBuZXdVcGRhdGVOYW1lcyhhbnN3ZXIpIHtcbiAgICBsZXQgYWxsU3RvcnlFbGVtZW50cyA9IHN0b3J5RWxlbWVudC5nZXRBbGxJbnN0YW5jZXMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFN0b3J5RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3dpdGNoIChhbGxTdG9yeUVsZW1lbnRzW2ldLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ2l0ZW0nOlxuICAgICAgICAgICAgY2FzZSAnYmF0dGxlJzpcbiAgICAgICAgICAgIGNhc2UgJ2Nob2ljZSc6XG4gICAgICAgICAgICBjYXNlICdleHBsb3JhdGlvbic6XG4gICAgICAgICAgICBjYXNlICdyYW5kb21FbmNvdW50ZXInOlxuICAgICAgICAgICAgY2FzZSAnZm9ybSc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlcGxhY2VBbGwoJ1NvbWVib2R5JywgYW5zd2VyKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGlhbG9ndWUnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5ucGNMaW5lID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLm5wY0xpbmUucmVwbGFjZUFsbCgnU29tZWJvZHknLCBhbnN3ZXIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXNba10uZGlhbG9ndWVDaG9pY2UgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzW2tdLmRpYWxvZ3VlQ2hvaWNlLnJlcGxhY2VBbGwoJ1NvbWVib2R5JywgYW5zd2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbnNlcXVlbmNlJzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHQubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHRba10gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0uY29uc2VxdWVuY2VUZXh0W2tdLnJlcGxhY2VBbGwoJ1NvbWVib2R5JywgYW5zd2VyKTsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWVudV93aW5kb3cudGV4dENvbnRlbnQgPSBtZW51X3dpbmRvdy50ZXh0Q29udGVudC5yZXBsYWNlKCdTb21lYm9keScsIGFuc3dlcik7XG59XG4vLyB0aGUgZnVuY3Rpb24gaXMgQUxXQVlTIHN0YXRpY1xuLy8gZnVuY3Rpb24gc3RvcnkodHlwZSwgdGV4dCwgbW9kaWZpZXJzKVxuZnVuY3Rpb24gc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50KSB7XG4gICAgd2hpbGUgKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIHttYWluX3dpbmRvdy5yZW1vdmVDaGlsZChtYWluX3dpbmRvdy5maXJzdENoaWxkKX07XG4gICAgaWYgKHN0b3J5RWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzdG9yeUVsZW1lbnQudHlwZSA9PSAnc2VwYXJhdG9yJykge1xuICAgICAgICAgICAgc2VwYXJhdG9yKHN0b3J5RWxlbWVudCwgbmV3UGxheWVyQ29uc2VxdWVuY2VzLCBzdG9yeVRlbGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc3RvcnlFbGVtZW50WzBdID09ICdzdGF0cycgfHwgc3RvcnlFbGVtZW50WzBdID09ICdnb2xkJykge1xuICAgICAgICAgICAgICAgIGlmIChzdG9yeUVsZW1lbnRbMF0gPT0gJ3N0YXRzJykge1xuICAgICAgICAgICAgICAgICAgICBnaXZlU3RhdHMoc3RvcnlFbGVtZW50WzFdLCBzdG9yeUVsZW1lbnRbMl0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZEdvbGQoc3RvcnlFbGVtZW50WzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzdG9yeUVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcnlFbGVtZW50LnR5cGUgIT09ICdkaWFsb2d1ZScgJiYgc3RvcnlFbGVtZW50LnR5cGUgIT09ICdjb25zZXF1ZW5jZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGbGlwcGVyKHN0b3J5RWxlbWVudCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RvcnlFbGVtZW50LnR5cGUgPT0gJ2RpYWxvZ3VlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGlhbG9ndWVNYWtlcihzdG9yeUVsZW1lbnQsIDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc2VxdWVuY2VTaG93ZXIoc3RvcnlFbGVtZW50LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aWxlVHJpZ2dlcnMod2hpY2hUaWxlSXNQbGF5ZXJPbiwgY3VycmVudEV4cGxvcmF0aW9uU3RvcnlFbGVtZW50KTtcbiAgICB9XG59XG4vLy0tLSBzdXBwbGVtZW50YXJ5IGZ1bmN0aW9ucyAtLS1cbi8vIG5ldyBjb250aW51ZSBidXR0b24gb3BlcmF0b3JcbmxldCBhbm5vdW5jZW1lbnQ7XG5mdW5jdGlvbiB0ZXh0RmxpcHBlcihzdG9yeUVsZW1lbnQsIGxvb3AsIHN0eWxlKSB7XG4gICAgaWYgKHN0b3J5RWxlbWVudC50eXBlID09ICdyYW5kb21FbmNvdW50ZXInIHx8IHN0b3J5RWxlbWVudC5tb2RpZmllcnMgPT0gJ2V4cGxvcmF0aW9uRXZlbnQnIHx8IHN0b3J5RWxlbWVudC5uZXh0U3RvcnlFbGVtZW50ID09ICdleHBsb3JhdGlvbkV2ZW50JykgeyBtb3ZlT24gPSBmYWxzZTsgfVxuICAgIGxldCBzdG9yeVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdG9yeVBhcmFncmFwaC50ZXh0Q29udGVudCA9IHN0b3J5RWxlbWVudC50ZXh0W2xvb3BdO1xuICAgIGlmIChzdHlsZSA9PSAneWVsbG93JykgeyBzdG9yeVBhcmFncmFwaC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6eWVsbG93OycpOyB9XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoc3RvcnlQYXJhZ3JhcGgpO1xuICAgIGlmIChsb29wIDwgc3RvcnlFbGVtZW50LnRleHQubGVuZ3RoKSB7XG4gICAgICAgIGxldCBjb250aW51ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb250aW51ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbGljayBoZXJlIHRvIGNvbnRpbnVlLic7XG4gICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGNvbnRpbnVlQnV0dG9uKTtcbiAgICAgICAgY29udGludWVCdXR0b24uZm9jdXMoKTtcbiAgICAgICAgY29udGludWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsb29wKys7XG4gICAgICAgICAgICBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZChjb250aW51ZUJ1dHRvbik7XG4gICAgICAgICAgICBpZiAobG9vcCA9PSBzdG9yeUVsZW1lbnQudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0b3J5RWxlbWVudC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZhbHNlY3ViZXMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZhbHNlY3ViZXMgY2FsbGVkIGluIHRleHRGbGlwcGVyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3J5RmFsc2VjdWJlcyhzdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdG9yeUVsZW1lbnQubW9kaWZpZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaChzdG9yeUVsZW1lbnQubW9kaWZpZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3J5VGVsbGVyKHN0b3J5RWxlbWVudC5uZXh0U3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdiYXR0bGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmF0dGxlU3RhcnRlcihzdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhYkl0ZW0oc3RvcnlFbGVtZW50Lm1vZGlmaWVycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbm5vdW5jZW1lbnQgPSB7IHRleHQ6IFtgQWNxdWlyZWQgJHtzdG9yeUVsZW1lbnQubW9kaWZpZXJzLm5hbWV9IWBdLCB0eXBlOiAnaXRlbUFjcXVpcmVkJywgbmV4dFN0b3J5RWxlbWVudDogc3RvcnlFbGVtZW50Lm5leHRTdG9yeUVsZW1lbnQgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGbGlwcGVyKGFubm91bmNlbWVudCwgMCwgJ3llbGxvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW1BY3F1aXJlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yeVRlbGxlcihhbm5vdW5jZW1lbnQubmV4dFN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hvaWNlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Nob2ljZShzdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2V4cGxvcmF0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V4cGxvcmF0aW9uKHN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1BsYXllckV4cGxvcmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmFuZG9tRW5jb3VudGVyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChtYWluX3dpbmRvdy5maXJzdENoaWxkKSB7IG1haW5fd2luZG93LnJlbW92ZUNoaWxkKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmhhc1BsYXllclNlZW5NZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlRXZlbnRzU2VlbisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZU9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2lyY2xlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRpbGUgPSB3aGljaFRpbGVJc1BsYXllck9uKGNpcmNsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyNjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvb3BlZFRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGlsZSR7aX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9vcGVkVGlsZS5pZCA9PSBjdXJyZW50VGlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9vcGVkVGlsZS5oYXNDaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29wZWRUaWxlLnJlbW92ZUNoaWxkKGxvb3BlZFRpbGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yeVRlbGxlcihzdG9yeUVsZW1lbnQubmV4dFN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5kRXhwbG9yYXRpb24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGxvcmF0aW9uQm9hcmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX3dpbmRvdy5yZW1vdmVDaGlsZChib2FyZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaW1hZ2Vfd2luZG93LmZpcnN0Q2hpbGQpIHsgaW1hZ2Vfd2luZG93LnJlbW92ZUNoaWxkKGltYWdlX3dpbmRvdy5maXJzdENoaWxkKSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50Lm5leHRTdG9yeUVsZW1lbnQpOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Zvcm0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Rm9ybU1ha2VyKHN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0b3J5RWxlbWVudC5tb2RpZmllcnMgPT0gJ2V4cGxvcmF0aW9uRXZlbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVPbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdG9yeUVsZW1lbnQubW9kaWZpZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3J5RWxlbWVudC5tb2RpZmllcnNbMF0gPT0gJ3N0YXRzJyB8fCBzdG9yeUVsZW1lbnQubW9kaWZpZXJzWzBdID09ICdnb2xkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3J5RWxlbWVudC5tb2RpZmllcnNbMF0gPT0gJ3N0YXRzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpdmVTdGF0cyhzdG9yeUVsZW1lbnQubW9kaWZpZXJzWzFdLCBzdG9yeUVsZW1lbnQubW9kaWZpZXJzWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkR29sZChzdG9yeUVsZW1lbnQubW9kaWZpZXJzWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRleHRGbGlwcGVyKHN0b3J5RWxlbWVudCwgbG9vcCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuLy8gY29uc2VxdWVuY2UgZnVuY3Rpb25cbmZ1bmN0aW9uIGNvbnNlcXVlbmNlU2hvd2VyKHN0b3J5RWxlbWVudCwgbGluZSkge1xuICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgY29ycmVjdENvbnNlcXVlbmNlID0gbnVsbDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3J5RWxlbWVudC50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChuZXdQbGF5ZXJDb25zZXF1ZW5jZXMuaW5jbHVkZXMoc3RvcnlFbGVtZW50LnRleHRbaV0uZGVwZW5kZW5jeSkpIHtcbiAgICAgICAgICAgIGNvcnJlY3RDb25zZXF1ZW5jZSA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvcnJlY3RDb25zZXF1ZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IHN0b3J5RWxlbWVudC50ZXh0W2NvcnJlY3RDb25zZXF1ZW5jZV0uY29uc2VxdWVuY2VUZXh0W2xpbmVdO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgICAgIGlmIChsaW5lIDwgc3RvcnlFbGVtZW50LnRleHRbY29ycmVjdENvbnNlcXVlbmNlXS5jb25zZXF1ZW5jZVRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgY29udGludWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbnRpbnVlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NsaWNrIGhlcmUgdG8gY29udGludWUuJztcbiAgICAgICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGNvbnRpbnVlQnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnRpbnVlQnV0dG9uLmZvY3VzKCk7XG4gICAgICAgICAgICBjb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsaW5lKys7XG4gICAgICAgICAgICAgICAgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQoY29udGludWVCdXR0b24pO1xuICAgICAgICAgICAgICAgIGNvbnNlcXVlbmNlU2hvd2VyKHN0b3J5RWxlbWVudCwgbGluZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5lID09IHN0b3J5RWxlbWVudC50ZXh0W2NvcnJlY3RDb25zZXF1ZW5jZV0uY29uc2VxdWVuY2VUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50Lm5leHRTdG9yeUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50Lm5leHRTdG9yeUVsZW1lbnQpO1xuICAgIH1cbn1cbi8vIG5ldyBkaWFsb2d1ZSBmdW5jdGlvblxuLy8gZWFjaCBjb252ZXJzYXRpb24gaXMgbm90IGxpa2UgYSBkaWFsb2d1ZSB0cmVlIGluIGEgdmlkZW9nYW1lLCBidXQgYSBzbGlkaW5nIHdhdGVyZmFsbC5cbmxldCByZWxhdGlvbnNoaXBNZXRlciA9IDA7XG5mdW5jdGlvbiBuZXdEaWFsb2d1ZU1ha2VyKHN0b3J5RWxlbWVudCwgbGluZSkge1xuICAgIGxldCBucGNEaWFsb2d1ZUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbnBjRGlhbG9ndWVMaW5lLnRleHRDb250ZW50ID0gc3RvcnlFbGVtZW50LnRleHRbbGluZV0ubnBjTGluZTtcbiAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChucGNEaWFsb2d1ZUxpbmUpO1xuICAgIGlmIChsaW5lICE9PSBzdG9yeUVsZW1lbnQudGV4dC5sZW5ndGggLSAxKSB7XG4gICAgICAgIHN0b3J5RWxlbWVudC50ZXh0W2xpbmVdLnJlc3BvbnNlcy5mb3JFYWNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICByZXNwb25zZUJ1dHRvbi50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmRpYWxvZ3VlQ2hvaWNlO1xuICAgICAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQocmVzcG9uc2VCdXR0b24pO1xuICAgICAgICAgICAgcmVzcG9uc2VCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaG9pY2VCdXR0b24nKTtcbiAgICAgICAgICAgIHJlc3BvbnNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkaWFsb2d1ZUJ1dHRvbnMgPSBtYWluX3dpbmRvdy5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBkaWFsb2d1ZUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbGV0IHlvdXJMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHlvdXJMaW5lLnRleHRDb250ZW50ID0gYFwiJHtyZXNwb25zZS5kaWFsb2d1ZUNob2ljZX1cImA7XG4gICAgICAgICAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoeW91ckxpbmUpO1xuICAgICAgICAgICAgICAgIHJlbGF0aW9uc2hpcE1ldGVyID0gcmVsYXRpb25zaGlwTWV0ZXIgKyByZXNwb25zZS5wb2ludHM7XG4gICAgICAgICAgICAgICAgbmV3RGlhbG9ndWVNYWtlcihzdG9yeUVsZW1lbnQsIHJlc3BvbnNlLmRpYWxvZ3VlTmV4dExpbmUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmVsYXRpb25zaGlwTWV0ZXIgPD0gLTIpIHtcbiAgICAgICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKHN0b3J5RWxlbWVudC5tb2RpZmllcnNbMl0pO1xuICAgICAgICB9IGVsc2UgaWYgKHJlbGF0aW9uc2hpcE1ldGVyIDwgMikge1xuICAgICAgICAgICAgbmV3UGxheWVyQ29uc2VxdWVuY2VzLnB1c2goc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1sxXSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVsYXRpb25zaGlwTWV0ZXIgPj0gMikge1xuICAgICAgICAgICAgbmV3UGxheWVyQ29uc2VxdWVuY2VzLnB1c2goc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVsYXRpb25zaGlwTWV0ZXIgPSAwO1xuICAgICAgICBsZXQgY29udGludWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29udGludWVCdXR0b24udGV4dENvbnRlbnQgPSAnQ2xpY2sgaGVyZSB0byBjb250aW51ZS4nO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChjb250aW51ZUJ1dHRvbik7XG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLmZvY3VzKCk7XG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50Lm5leHRTdG9yeUVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyBuZXcgY2hvaWNlIGZ1bmN0aW9uXG5mdW5jdGlvbiBuZXdDaG9pY2Uoc3RvcnlFbGVtZW50KSB7XG4gICAgc3RvcnlFbGVtZW50Lm1vZGlmaWVycy5mb3JFYWNoKCh0aGlzQ2hvaWNlKSA9PiB7XG4gICAgICAgIGxldCBjaG9pY2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2hvaWNlQnV0dG9uLnRleHRDb250ZW50ID0gdGhpc0Nob2ljZS5jaG9pY2VUZXh0O1xuICAgICAgICBjaG9pY2VCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsJ2Nob2ljZUJ1dHRvbicpO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChjaG9pY2VCdXR0b24pO1xuICAgICAgICBjaG9pY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaCh0aGlzQ2hvaWNlLmNob2ljZU1vZGlmaWVycyk7XG4gICAgICAgICAgICBpZiAodGhpc0Nob2ljZS5jaG9pY2VNb2RpZmllcnMgPT0gJ2NsYXNzV3JhaXRoJykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihjaGFyMSwgSmFuaXRvci5wcm90b3R5cGUpO1xuICAgICAgICAgICAgICAgIEphbml0b3IuY2FsbChjaGFyMSwgY2hhcjEubmFtZSwgMCwgMTAsIDIwLCAxMDAsICdOb3JtYWwgQXR0YWNrJywgJycsICcnLCAnJywgW10pO1xuICAgICAgICAgICAgICAgIG1lbnVfd2luZG93LnRleHRDb250ZW50ID0gbWVudV93aW5kb3cudGV4dENvbnRlbnQucmVwbGFjZSgnWW91ciBjbGFzcyBpcyB1bmtub3duLicsICdZb3UgYXJlIGEgV3JhaXRoLicpO1xuICAgICAgICAgICAgICAgIHNwZWNpYWxfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBzd2l0Y2hBdHRhY2soY2hhcjEpIH0pO1xuICAgICAgICAgICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KCdXcmFpdGgnKTsgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzID09ICdjbGFzc1BvbHRlcmdlaXN0Jykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihjaGFyMSwgQWNjb3VudGFudC5wcm90b3R5cGUpO1xuICAgICAgICAgICAgICAgIEFjY291bnRhbnQuY2FsbChjaGFyMSwgY2hhcjEubmFtZSwgMCwgMTAsIDIwLCAxMDAsICdOb3JtYWwgQXR0YWNrJywgJycsICcnLCAnJywgW10pO1xuICAgICAgICAgICAgICAgIG1lbnVfd2luZG93LnRleHRDb250ZW50ID0gbWVudV93aW5kb3cudGV4dENvbnRlbnQucmVwbGFjZSgnWW91ciBjbGFzcyBpcyB1bmtub3duLicsICdZb3UgYXJlIGEgUG9sdGVnZWlzdC4nKTtcbiAgICAgICAgICAgICAgICBzcGVjaWFsX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc3dpdGNoQXR0YWNrKGNoYXIxKSB9KTsgICAgXG4gICAgICAgICAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoJ1BvbHRlcmdlaXN0Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzID09ICdjbGFzc0d1YXJkaWFuU3Bpcml0Jykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihjaGFyMSwgRGFuY2VyLnByb3RvdHlwZSk7XG4gICAgICAgICAgICAgICAgRGFuY2VyLmNhbGwoY2hhcjEsIGNoYXIxLm5hbWUsIDAsIDEwLCAyMCwgMTAwLCAnTm9ybWFsIEF0dGFjaycsICcnLCAnJywgJycsIFtdKTtcbiAgICAgICAgICAgICAgICBtZW51X3dpbmRvdy50ZXh0Q29udGVudCA9IG1lbnVfd2luZG93LnRleHRDb250ZW50LnJlcGxhY2UoJ1lvdXIgY2xhc3MgaXMgdW5rbm93bi4nLCAnWW91IGFyZSBhIEd1YXJkaWFuIFNwaXJpdC4nKTtcbiAgICAgICAgICAgICAgICBzcGVjaWFsX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc3dpdGNoQXR0YWNrKGNoYXIxKSB9KTsgICBcbiAgICAgICAgICAgICAgICBldmVudEVtaXR0ZXIuZW1pdCgnR3VhcmRpYW5TcGlyaXQnKTsgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzID09ICdyYWNlUmVhbG1lcicpIHtcbiAgICAgICAgICAgICAgICBjaGFyMS5yYWNlID0gcmFjZXMuUmVhbG1lcjtcbiAgICAgICAgICAgICAgICBtZW51X3dpbmRvdy50ZXh0Q29udGVudCA9IG1lbnVfd2luZG93LnRleHRDb250ZW50LnJlcGxhY2UoJyBZb3VyIGFybW9yIGNsYXNzJywgJyBJbiBsaWZlLCB5b3Ugd2VyZSBhIFJlYWxtZXIuIFlvdXIgYXJtb3IgY2xhc3MnKTtcbiAgICAgICAgICAgICAgICBjaGFyMS5jdXJyZW50SFAgKz0gY2hhcjEucmFjZS5yYWNlSFBCb251cztcbiAgICAgICAgICAgICAgICBjaGFyMS5tYXhIUCArPSBjaGFyMS5yYWNlLnJhY2VIUEJvbnVzO1xuICAgICAgICAgICAgICAgIGNoYXIxLmFybW9yQ2xhc3MgKz0gY2hhcjEucmFjZS5yYWNlQXJtb3JCb251cztcbiAgICAgICAgICAgICAgICBtZW51VXBkYXRlcigpO1xuICAgICAgICAgICAgICAgIGxldCBzdGF0c19yYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXRzX3JhY2UnKTtcbiAgICAgICAgICAgICAgICBzdGF0c19yYWNlLnRleHRDb250ZW50ID0gJ0luIGxpZmUsIHlvdSB3ZXJlIGEgUmVhbG1lci4nXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzID09ICdyYWNlTW9ydGFyJykge1xuICAgICAgICAgICAgICAgIGNoYXIxLnJhY2UgPSByYWNlcy5Nb3J0YXI7XG4gICAgICAgICAgICAgICAgbWVudV93aW5kb3cudGV4dENvbnRlbnQgPSBtZW51X3dpbmRvdy50ZXh0Q29udGVudC5yZXBsYWNlKCcgWW91ciBhcm1vciBjbGFzcycsICcgSW4gbGlmZSwgeW91IHdlcmUgYSBNb3J0YXIuIFlvdXIgYXJtb3IgY2xhc3MnKTtcbiAgICAgICAgICAgICAgICBjaGFyMS5jdXJyZW50SFAgKz0gY2hhcjEucmFjZS5yYWNlSFBCb251cztcbiAgICAgICAgICAgICAgICBjaGFyMS5tYXhIUCArPSBjaGFyMS5yYWNlLnJhY2VIUEJvbnVzO1xuICAgICAgICAgICAgICAgIGNoYXIxLmFybW9yQ2xhc3MgKz0gY2hhcjEucmFjZS5yYWNlQXJtb3JCb251cztcbiAgICAgICAgICAgICAgICBtZW51VXBkYXRlcigpO1xuICAgICAgICAgICAgICAgIHN0YXRzX3JhY2UudGV4dENvbnRlbnQgPSAnSW4gbGlmZSwgeW91IHdlcmUgYSBNb3J0YXIuJ1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzQ2hvaWNlLmNob2ljZU1vZGlmaWVycyA9PSAncmFjZURlYWRsYW5kZXInKSB7XG4gICAgICAgICAgICAgICAgY2hhcjEucmFjZSA9IHJhY2VzLkRlYWRsYW5kZXI7XG4gICAgICAgICAgICAgICAgbWVudV93aW5kb3cudGV4dENvbnRlbnQgPSBtZW51X3dpbmRvdy50ZXh0Q29udGVudC5yZXBsYWNlKCcgWW91ciBhcm1vciBjbGFzcycsICcgSW4gbGlmZSwgeW91IHdlcmUgYSBEZWFkbGFuZGVyLiBZb3VyIGFybW9yIGNsYXNzJyk7XG4gICAgICAgICAgICAgICAgY2hhcjEuY3VycmVudEhQICs9IGNoYXIxLnJhY2UucmFjZUhQQm9udXM7XG4gICAgICAgICAgICAgICAgY2hhcjEubWF4SFAgKz0gY2hhcjEucmFjZS5yYWNlSFBCb251cztcbiAgICAgICAgICAgICAgICBjaGFyMS5hcm1vckNsYXNzICs9IGNoYXIxLnJhY2UucmFjZUFybW9yQm9udXM7XG4gICAgICAgICAgICAgICAgbWVudVVwZGF0ZXIoKTtcbiAgICAgICAgICAgICAgICBzdGF0c19yYWNlLnRleHRDb250ZW50ID0gJ0luIGxpZmUsIHlvdSB3ZXJlIGEgRGVhZGxhbmRlci4nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpc0Nob2ljZS5jaG9pY2VNb2RpZmllcnMgPT0gJ2NvbXBhc3Npb25TcGlyaXQnKSB7XG4gICAgICAgICAgICAgICAgY2hhcjEuc3Bpcml0Q29uY2VwdC5jb25jZXB0ID0gJ0NvbXBhc3Npb24nO1xuICAgICAgICAgICAgICAgIGNoYXIxLnNwaXJpdENvbmNlcHQuZGVzY3JpcHRpb24gPSAnIG9mIENvbXBhc3Npb24nO1xuICAgICAgICAgICAgICAgIG1lbnVVcGRhdGVyKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ29uY2VwdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzID09ICdqdXN0aWNlU3Bpcml0Jykge1xuICAgICAgICAgICAgICAgIGNoYXIxLnNwaXJpdENvbmNlcHQuY29uY2VwdCA9ICdKdXN0aWNlJztcbiAgICAgICAgICAgICAgICBjaGFyMS5zcGlyaXRDb25jZXB0LmRlc2NyaXB0aW9uID0gJyBvZiBKdXN0aWNlJztcbiAgICAgICAgICAgICAgICBtZW51VXBkYXRlcigpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNvbmNlcHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzQ2hvaWNlLmNob2ljZU1vZGlmaWVycyA9PSAnZnJlZWRvbVNwaXJpdCcpIHtcbiAgICAgICAgICAgICAgICBjaGFyMS5zcGlyaXRDb25jZXB0LmNvbmNlcHQgPSAnRnJlZWRvbSc7XG4gICAgICAgICAgICAgICAgY2hhcjEuc3Bpcml0Q29uY2VwdC5kZXNjcmlwdGlvbiA9ICcgb2YgRnJlZWRvbSc7XG4gICAgICAgICAgICAgICAgbWVudVVwZGF0ZXIoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVDb25jZXB0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpc0Nob2ljZS5jaG9pY2VNb2RpZmllcnMgPT0gJ21hc3RlcnlTcGlyaXQnKSB7XG4gICAgICAgICAgICAgICAgY2hhcjEuc3Bpcml0Q29uY2VwdC5jb25jZXB0ID0gJ01hc3RlcnknO1xuICAgICAgICAgICAgICAgIGNoYXIxLnNwaXJpdENvbmNlcHQuZGVzY3JpcHRpb24gPSAnIG9mIE1hc3RlcnknO1xuICAgICAgICAgICAgICAgIG1lbnVVcGRhdGVyKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ29uY2VwdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzID09ICd3aXNkb21TcGlyaXQnKSB7XG4gICAgICAgICAgICAgICAgY2hhcjEuc3Bpcml0Q29uY2VwdC5jb25jZXB0ID0gJ1dpc2RvbSc7XG4gICAgICAgICAgICAgICAgY2hhcjEuc3Bpcml0Q29uY2VwdC5kZXNjcmlwdGlvbiA9ICcgb2YgV2lzZG9tJztcbiAgICAgICAgICAgICAgICBtZW51VXBkYXRlcigpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNvbmNlcHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzQ2hvaWNlLmNob2ljZU1vZGlmaWVycyA9PSAnY2hvc2VuUGVjdWxpYXInKSB7XG4gICAgICAgICAgICAgICAgQ2hvc2VuID0gTlBDTWFrZXIoJ1BlY3VsaWFyJywgJ1F1aXJrZScsICdzaGUnLCAnaGVyJywgJ2hlcicsICdoZXJzZWxmJyk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2hvc2VuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpc0Nob2ljZS5jaG9pY2VNb2RpZmllcnMgPT0gJ2Nob3NlblNuYXBkcmFnb24nKSB7XG4gICAgICAgICAgICAgICAgQ2hvc2VuID0gTlBDTWFrZXIoJ1NuYXBkcmFnb24nLCAnUXVpcmtlJywgJ2hlJywgJ2hpcycsICdoaW0nLCAnaGltc2VsZicpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNob3NlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzID09ICdjaG9zZW5MeXNhbmRlcicpIHtcbiAgICAgICAgICAgICAgICBDaG9zZW4gPSBOUENNYWtlcignTHlzYW5kZXInLCAnTWFjQXBwbGVieScsICd0aGV5JywgJ3RoZWlyJywgJ3RoZW0nLCAndGhlbXNlbHZlcycpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNob3NlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RvcnlUZWxsZXIodGhpc0Nob2ljZS5jaG9pY2VOZXh0U3RvcnkpO1xuICAgICAgICB9KTtcbiAgICB9KVxufVxuLy8gbmV3IGJhdHRsZSBmdW5jdGlvbnNcbmxldCBzdG9yeUFmdGVyQmF0dGxlID0gbnVsbDtcbmZ1bmN0aW9uIG5ld0JhdHRsZVN0YXJ0ZXIoc3RvcnlFbGVtZW50KSB7XG4gICAgc3RvcnlFbGVtZW50Lm1vZGlmaWVycy5mb3JFYWNoKChjdXJyZW50RW5lbXkpID0+IHsgY3VycmVudEVuZW15LmN1cnJlbnRIUCA9IGN1cnJlbnRFbmVteS5tYXhIUCB9KTtcbiAgICBlbmVtaWVzLnNwbGljZSgwLCBlbmVtaWVzLmxlbmd0aCwgLi4uc3RvcnlFbGVtZW50Lm1vZGlmaWVycyk7XG4gICAgc3RvcnlBZnRlckJhdHRsZSA9IHN0b3J5RWxlbWVudDtcbiAgICBsZXQgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwbG9yYXRpb25Cb2FyZCcpO1xuICAgIGlmIChib2FyZCAhPT0gbnVsbCkgeyBib2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG4gICAgbGlzdEVuZW1pZXMoKTtcbn1cbmV2ZW50RW1pdHRlci5vbignYmF0dGxlOndpbicsICgpID0+IHtcbi8vIGZ1bmN0aW9uIGlzQmF0dGxlT3ZlcihiYXR0bGVSZXN1bHQpIHtcbiAgICAvLyBpZiAoYmF0dGxlUmVzdWx0ID09ICd3aW4nKSB7XG4gICAgICAgIGlmIChpc1BsYXllckV4cGxvcmluZyA9PSB0cnVlKSB7XG4gICAgICAgICAgICBsZXQgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwbG9yYXRpb25Cb2FyZCcpO1xuICAgICAgICAgICAgYm9hcmQuc3R5bGUuZGlzcGxheSA9ICdncmlkJzsgICAgICAgIFxuICAgICAgICB9ICAgIFxuICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gJ1lvdSB3aW4gdGhlIGJhdHRsZSEnO1xuICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgd2hpbGUgKGxvZ193aW5kb3cuY2hpbGRyZW4ubGVuZ3RoID4gMikgeyBsb2dfd2luZG93LnJlbW92ZUNoaWxkKGxvZ193aW5kb3cuZmlyc3RDaGlsZCkgfTtcbiAgICAgICAgQXJyYXkuZnJvbShsb2dfd2luZG93LmNoaWxkcmVuKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdjb2xvcjp3aGl0ZTsnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRvcF9iYXIucmVtb3ZlQ2hpbGQodG9wX2Jhci5maXJzdENoaWxkKTtcbiAgICAgICAgd2hpbGUgKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIHsgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQobWFpbl93aW5kb3cuZmlyc3RDaGlsZCkgfTtcbiAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlBZnRlckJhdHRsZS5uZXh0U3RvcnlFbGVtZW50KTtcbiAgICAgICAgc3RvcnlBZnRlckJhdHRsZSA9IG51bGw7ICAgXG59KTsgXG4gICAgLy8gfSBlbHNlIHtcbmV2ZW50RW1pdHRlci5vbignYmF0dGxlOmxvc2UnLCAoKSA9PiB7XG4gICAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSAnWW91IGRpZWQhJztcbiAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdjb2xvcjpyZWQ7Jyk7XG4gICAgICAgIGxvZ193aW5kb3cuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgICAgICBidXR0b25fd2luZG93LnJlbW92ZUNoaWxkKGF0dGFja19idXR0b24pO1xuICAgICAgICBidXR0b25fd2luZG93LnJlbW92ZUNoaWxkKHNwZWNpYWxfYnV0dG9uKTtcbiAgICAgICAgYnV0dG9uX3dpbmRvdy5yZW1vdmVDaGlsZChpbnZlbnRvcnlfYnV0dG9uKTtcbiAgICAgICAgYnV0dG9uX3dpbmRvdy5yZW1vdmVDaGlsZChzdGF0c19idXR0b24pO1xuICAgIC8vIH1cbn0pO1xuLy8gbmV3IGNoYXJhY3RlciBjcmVhdGlvbiBmdW5jdGlvblxuZnVuY3Rpb24gbmV3Rm9ybU1ha2VyKHN0b3J5RWxlbWVudCkge1xuICAgIGxldCBmb3JtX2NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgZm9ybV9jYXJkLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGZvcm1fY2FyZCk7XG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBhbnN3ZXIgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgY2hhcjEubmFtZSA9IGFuc3dlcjtcbiAgICAgICAgbmV3VXBkYXRlTmFtZXMoYW5zd2VyKTtcbiAgICAgICAgd2hpbGUgKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIHsgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQobWFpbl93aW5kb3cuZmlyc3RDaGlsZCk7IH1cbiAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50Lm5leHRTdG9yeUVsZW1lbnQpO1xuICAgIH0pXG59XG4vLyAtLS0gZXhwbG9yYXRpb24gc3lzdGVtIC0tLVxuLy8gdHJhY2tpbmcgdmFyc1xubGV0IG1vdmVPbiA9IHRydWU7XG5sZXQgc2lkZUV2ZW50c1NlZW4gPSAwO1xubGV0IGN1cnJlbnRFeHBsb3JhdGlvblN0b3J5RWxlbWVudCA9ICcnO1xuLy8gbmV3IGV4cGxvcmF0aW9uIGZ1bmN0aW9uc1xuZnVuY3Rpb24gbmV3RXhwbG9yYXRpb24oc3RvcnlFbGVtZW50KSB7XG4gICAgLy8gY2xlYXIgbWFpbiB3aW5kb3dcbiAgICBjdXJyZW50RXhwbG9yYXRpb25TdG9yeUVsZW1lbnQgPSBzdG9yeUVsZW1lbnQ7XG4gICAgd2hpbGUgKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIHttYWluX3dpbmRvdy5yZW1vdmVDaGlsZChtYWluX3dpbmRvdy5maXJzdENoaWxkKX07XG4gICAgLy8gbWFrZSBib2FyZCBhbmQgYm9hcmRVbmRlclxuICAgIGxldCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXhwbG9yYXRpb25Cb2FyZCcpO1xuICAgIGxldCBib2FyZFVuZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmRVbmRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTsgbWFyZ2luOjNweDsgZGlzcGxheTppbmxpbmUtZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMjVweCk7JylcbiAgICBib2FyZFVuZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYm9hcmRVbmRlcicpO1xuICAgIGltYWdlX3dpbmRvdy5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRVbmRlcik7XG4gICAgLy8gZHJhdyB0aWxlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI2OyBpKyspIHtcbiAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGlsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywncGFkZGluZzo1cHg7Ym9yZGVyOjFweCBzb2xpZCB3aGl0ZTtoZWlnaHQ6MTVweDt3aWR0aDoxNXB4OycpO1xuICAgICAgICB0aWxlLnNldEF0dHJpYnV0ZSgnaWQnLCBgdGlsZSR7aX1gKTtcbiAgICAgICAgYm9hcmRVbmRlci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICB9XG4gICAgLy8gY2FsbCBkcmF3SWNvbnMgZnVuY3Rpb25cbiAgICBkcmF3SWNvbnMoc3RvcnlFbGVtZW50KTtcbiAgICAvLyBkcmF3IHRoZSBjaXJjbGUgaW5zaWRlIHRoZSBzcXVhcmVzXG4gICAgbGV0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ2lkJywnY2lyY2xlJyk7XG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO2JvcmRlcjoxcHggc29saWQgd2hpdGU7Ym9yZGVyLXJhZGl1czo1MCU7IHotaW5kZXg6MTA7IGhlaWdodDogMTdweDsgd2lkdGg6IDE3cHg7Jyk7XG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgIGxldCBzdGFydFRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGlsZTEyMCcpO1xuICAgIHN0YXJ0VGlsZS5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgIC8vIGNvb3JkaW5hdGVzIG9mIGJvdW5kaW5nIHJlY3RhbmdsZSAoKipJVCBET0VTTidUIE1PVkUgV0hFTiBDSVJDTEUgTU9WRVMhKiopXG4gICAgbGV0IGluaXRpYWxDaXJjbGVYID0gY2lyY2xlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLng7XG4gICAgbGV0IGluaXRpYWxDaXJjbGVZID0gY2lyY2xlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XG5cbiAgICBsZXQgY3VycmVudENpcmNsZVggPSBpbml0aWFsQ2lyY2xlWDtcbiAgICBsZXQgY3VycmVudENpcmNsZVkgPSBpbml0aWFsQ2lyY2xlWTtcbiAgICAvLyBXQVNEIHRvIG1vdmUgdGhlIGNpcmNsZVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IHN0ZXAgPSA1O1xuICAgICAgICBsZXQgYm9hcmRVbmRlckNvbGxpc2lvbiA9IGJvYXJkVW5kZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICAgICAgICAvL1RyYW5zZm9ybSAodHJhbnNsYXRlKTogQ0FMQ1VMQVRFUyBGUk9NIFRIRSBJTklUSUFMIFBPU0lUSU9OISBTTywgaW5pdGlhbENpcmNsZSBXSUxMIEJFIDAsIDAgZm9yIHRyYW5zZm9ybSB0cmFuc2xhdGVcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudENpcmNsZVkgLSBzdGVwID4gYm9hcmRVbmRlckNvbGxpc2lvbi50b3AgJiYgbW92ZU9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENpcmNsZVkgLT0gc3RlcDtcbiAgICAgICAgICAgICAgICAgICAgdGlsZVRyaWdnZXJzKHdoaWNoVGlsZUlzUGxheWVyT24oY2lyY2xlKSwgc3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudENpcmNsZVggLSBzdGVwID4gYm9hcmRVbmRlckNvbGxpc2lvbi5sZWZ0ICYmIG1vdmVPbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDaXJjbGVYIC09IHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgIHRpbGVUcmlnZ2Vycyh3aGljaFRpbGVJc1BsYXllck9uKGNpcmNsZSksIHN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDaXJjbGVZICsgc3RlcCArIDIwIDwgYm9hcmRVbmRlckNvbGxpc2lvbi5ib3R0b20gJiYgbW92ZU9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENpcmNsZVkgKz0gc3RlcDtcbiAgICAgICAgICAgICAgICAgICAgdGlsZVRyaWdnZXJzKHdoaWNoVGlsZUlzUGxheWVyT24oY2lyY2xlKSwgc3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudENpcmNsZVggKyBzdGVwICsgMTggPCBib2FyZFVuZGVyQ29sbGlzaW9uLnJpZ2h0ICYmIG1vdmVPbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDaXJjbGVYICs9IHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgIHRpbGVUcmlnZ2Vycyh3aGljaFRpbGVJc1BsYXllck9uKGNpcmNsZSksIHN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGxldCBrZXlib2FyZE1vdmVZID0gY3VycmVudENpcmNsZVkgLSBpbml0aWFsQ2lyY2xlWTtcbiAgICAgICAgbGV0IGtleWJvYXJkTW92ZVggPSBjdXJyZW50Q2lyY2xlWCAtIGluaXRpYWxDaXJjbGVYO1xuICAgICAgICBjaXJjbGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2tleWJvYXJkTW92ZVh9cHgsICR7a2V5Ym9hcmRNb3ZlWX1weClgO1xuICAgIH0pO1xuICAgIC8vIGNsaWNraW5nIHRvIG1vdmVcbiAgICAvLyBUaGlzIHdvcmtzIGJlY2F1c2UgaXQgZG9lc24ndCBORUVEIGEgY3VycmVudCBwb3NpdGlvbi4gaXQgQUxXQVlTIGNhbGN1bGF0ZXMgZnJvbSB0aGUgc3RhcnRpbmcgb25lXG4gICAgYm9hcmRVbmRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAobW92ZU9uID09IHRydWUpIHtcbiAgICAgICAgICAgIGxldCBjbGlja2VkVGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3doaWNoVGlsZURpZFlvdUNsaWNrKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpfWApO1xuICAgICAgICAgICAgbGV0IGNsaWNrZWRUaWxlQm91bmRhcmllcyA9IGNsaWNrZWRUaWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IG1vdmVYID0gY2xpY2tlZFRpbGVCb3VuZGFyaWVzLmxlZnQgKyA0IC0gaW5pdGlhbENpcmNsZVg7XG4gICAgICAgICAgICBsZXQgbW92ZVkgPSBjbGlja2VkVGlsZUJvdW5kYXJpZXMudG9wICsgNCAtIGluaXRpYWxDaXJjbGVZICsgd2luZG93LnNjcm9sbFk7XG4gICAgICAgICAgICBjaXJjbGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke21vdmVYfXB4LCAke21vdmVZfXB4KWA7XG4gICAgICAgICAgICB0aWxlVHJpZ2dlcnMod2hpY2hUaWxlSXNQbGF5ZXJPbihjaXJjbGUpLCBzdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgY3VycmVudENpcmNsZVggPSBjbGlja2VkVGlsZUJvdW5kYXJpZXMubGVmdCArIDQ7XG4gICAgICAgICAgICBjdXJyZW50Q2lyY2xlWSA9IGNsaWNrZWRUaWxlQm91bmRhcmllcy50b3AgKyA0ICsgd2luZG93LnNjcm9sbFk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIHdoaWNoIHRpbGUgZGlkIHlvdSBjbGljaz9cbmZ1bmN0aW9uIHdoaWNoVGlsZURpZFlvdUNsaWNrKGNsaWNrWCwgY2xpY2tZKSB7XG4gICAgbGV0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cInRpbGVcIl0nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0aWxlQ29sbGlzaW9uID0gdGlsZXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGNsaWNrWCA8IHRpbGVDb2xsaXNpb24ucmlnaHQgJiZcbiAgICAgICAgICAgIGNsaWNrWCA+IHRpbGVDb2xsaXNpb24ubGVmdCAmJlxuICAgICAgICAgICAgY2xpY2tZIDwgdGlsZUNvbGxpc2lvbi5ib3R0b20gJiZcbiAgICAgICAgICAgIGNsaWNrWSA+IHRpbGVDb2xsaXNpb24udG9wIFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aWxlc1tpXS5pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbi8vIHdoZW4gYSBwbGF5ZXIgbW92ZXMsIGl0IGlzIHRyaWdnZXJlZC4gcmV0dXJucyBcIiN0aWxlMzBcIiB0eXBlIG51bWJlclxuZnVuY3Rpb24gd2hpY2hUaWxlSXNQbGF5ZXJPbihjaXJjbGUpIHtcbiAgICBsZXQgY2lyY2xlQ29sbGlzaW9uID0gY2lyY2xlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJ0aWxlXCJdJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGlsZUNvbGxpc2lvbiA9IHRpbGVzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjaXJjbGVDb2xsaXNpb24ubGVmdCA8IHRpbGVDb2xsaXNpb24ucmlnaHQgJiZcbiAgICAgICAgICAgIGNpcmNsZUNvbGxpc2lvbi5yaWdodCA+IHRpbGVDb2xsaXNpb24ubGVmdCAmJlxuICAgICAgICAgICAgY2lyY2xlQ29sbGlzaW9uLnRvcCA8IHRpbGVDb2xsaXNpb24uYm90dG9tICYmXG4gICAgICAgICAgICBjaXJjbGVDb2xsaXNpb24uYm90dG9tID4gdGlsZUNvbGxpc2lvbi50b3AgXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRpbGVzW2ldLmlkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuLy8gY29tcGFyZXMgdGhlIHRpbGUgaWQgZnJvbSBhYm92ZSBhbmQgYWN0aXZhdGVzIGEgc3RvcnlFbGVtZW50XG5mdW5jdGlvbiB0aWxlVHJpZ2dlcnMocGxheWVyc1RpbGUsIHN0b3J5RWxlbWVudCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3J5RWxlbWVudC5tb2RpZmllcnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJzVGlsZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdG9yeUVsZW1lbnQubW9kaWZpZXJzW2ldLnRpbGVOdW1iZXIpO1xuICAgICAgICAgICAgaWYgKGAjJHtwbGF5ZXJzVGlsZX1gID09IHN0b3J5RWxlbWVudC5tb2RpZmllcnNbaV0udGlsZU51bWJlciAmJiAhc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tpXS5lbmNvdW50ZXJTdG9yeUVsZW1lbnQubW9kaWZpZXJzLmhhc1BsYXllclNlZW5NZSkge1xuICAgICAgICAgICAgICAgIHN0b3J5VGVsbGVyKHN0b3J5RWxlbWVudC5tb2RpZmllcnNbaV0uZW5jb3VudGVyU3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2lkZUV2ZW50c1NlZW4gPT0gc3RvcnlFbGVtZW50Lm1vZGlmaWVycy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBzdG9yeUVsZW1lbnQubW9kaWZpZXJzW3N0b3J5RWxlbWVudC5tb2RpZmllcnMubGVuZ3RoLTFdLnVubG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRyYXdMYXN0SWNvbihzdG9yeUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChgIyR7cGxheWVyc1RpbGV9YCA9PSBzdG9yeUVsZW1lbnQubW9kaWZpZXJzW3N0b3J5RWxlbWVudC5tb2RpZmllcnMubGVuZ3RoLTFdLnRpbGVOdW1iZXIgJiYgc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aC0xXS51bmxvY2tlZCkge1xuICAgICAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aC0xXS5lbmNvdW50ZXJTdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgc2lkZUV2ZW50c1NlZW4gPSAwO1xuICAgICAgICB9XG4gICAgfSAgICBcbi8vIGRyYXcgaWNvbnMgb24gdGlsZXNcbmZ1bmN0aW9uIGRyYXdJY29ucyhzdG9yeUVsZW1lbnQpIHtcbiAgICBsZXQgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRePVwidGlsZVwiXScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aCAtIDE7IGorKykge1xuICAgICAgICAgICAgaWYgKGAjJHt0aWxlc1tpXS5pZH1gID09IHN0b3J5RWxlbWVudC5tb2RpZmllcnNbal0udGlsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIHRpbGVzW2ldLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgICAgICBzdG9yeUVsZW1lbnQubW9kaWZpZXJzW2pdLmljb24uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIHRpbGVzW2ldLmFwcGVuZENoaWxkKHN0b3J5RWxlbWVudC5tb2RpZmllcnNbal0uaWNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBkcmF3IGxhc3QgaWNvblxuZnVuY3Rpb24gZHJhd0xhc3RJY29uKHN0b3J5RWxlbWVudCkge1xuICAgIGxldCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJ0aWxlXCJdJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYCMke3RpbGVzW2ldLmlkfWAgPT0gc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aC0xXS50aWxlTnVtYmVyKSB7XG4gICAgICAgICAgICB0aWxlc1tpXS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICBzdG9yeUVsZW1lbnQubW9kaWZpZXJzW3N0b3J5RWxlbWVudC5tb2RpZmllcnMubGVuZ3RoLTFdLmljb24uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgdGlsZXNbaV0uYXBwZW5kQ2hpbGQoc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aC0xXS5pY29uKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIC0tLSBzdGF0cyBzeXN0ZW0gLS0tXG4vLyB0cmFjayBzdGF0c1xubGV0IHBsYXllckJlbmV2b2xlbnRCYWxhbmNlID0gMDtcbmxldCBwbGF5ZXJTaWxseUJhbGFuY2UgPSAwO1xuLy8gc3RhdHMgc2NyZWVuXG5sZXQgc3RhdHNEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbnN0YXRzRGlhbG9nLmlubmVySFRNTCA9IGBcbiAgICA8YnV0dG9uIGlkPSdjbG9zZUJ1dHRvbjInPkNsb3NlPC9idXR0b24+XG4gICAgPGRpdiBpZD0nc3RhdHNCb3gnPlxuICAgIDxoMj5TdGF0czwvaDI+XG4gICAgPHVsIGlkID0nc3RhdHNMaXN0Jz5cbiAgICAgICAgPGxpIGlkPSdzdGF0c19nZW5kZXInPllvdSBkbyBub3QgcmVtZW1iZXIgeW91ciBnZW5kZXIuPC9saT5cbiAgICAgICAgPGxpIGlkPSdzdGF0c19yYWNlJz5Zb3UgZG8gbm90IHJlbWVtYmVyIHlvdXIgcmFjZS48L2xpPlxuICAgICAgICA8bGkgaWQ9J3N0YXRzX3JvbWFudGljX3BhcnRuZXInPllvdSBkbyBub3QgcmVtZW1iZXIgd2hvIHlvdXIgcm9tYW50aWMgcGFydG5lciB3YXMuPC9saT5cbiAgICAgICAgPGxpIGlkPSdzdGF0c19jYXVzZV9vZl9kZWF0aCc+WW91IGRvIG5vdCByZW1lbWJlciB5b3VyIGNhdXNlIG9mIGRlYXRoLjwvbGk+XG4gICAgICAgIDxsaSBpZD0nc3RhdHNfZXZpbF9iZW5ldm9sZW50Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YXRzX21ldGVyJyBpZD0nc3RhdHNfbWV0ZXJfZXZpbCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhdHNfbGluZScgaWQ9J3N0YXRzX2xpbmVfZXZpbCc+RXZpbDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YXRzX2xpbmUnIGlkPSdzdGF0c19saW5lX2JlbmV2b2xlbnQnPkJlbmV2b2xlbnQ8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgaWQ9J3N0YXRzX3NvbWJlcl9zaWxseSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGF0c19tZXRlcicgaWQ9J3N0YXRzX21ldGVyX3NvbWJlcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhdHNfbGluZScgaWQ9J3N0YXRzX2xpbmVfc29tYmVyJz5Tb21iZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGF0c19saW5lJyBpZD0nc3RhdHNfbGluZV9zaWxseSc+U2lsbHk8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPC9kaXY+XG5gO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0c0RpYWxvZyk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHN0YXRzX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKG5ld1BsYXllckNvbnNlcXVlbmNlcy5pbmNsdWRlcygnY2xhc3NXcmFpdGgnKSB8fCBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMuaW5jbHVkZXMoJ2NsYXNzUG9sdGVyZ2Vpc3QnKSB8fCBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMuaW5jbHVkZXMoJ2NsYXNzR3VhcmRpYW5TcGlyaXQnKSkge1xuICAgICAgICAgICAgc3RhdHNEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgICAgICBsZXQgY2xvc2VCdXR0b24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlQnV0dG9uMicpO1xuICAgICAgICAgICAgY2xvc2VCdXR0b24yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRzRGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBzdGF0c0RpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBkaWFsb2dBbmltYXRpb25FbmQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuLy8gdHJhY2tpbmcgYW5kIHVwZGF0aW5nIHN0YXRzXG5mdW5jdGlvbiBzdGF0c0xpbmVzVXBkYXRlcigpIHtcbiAgICBsZXQgZXZpbExpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHNfbWV0ZXJfZXZpbCcpO1xuICAgIGxldCBzb21iZXJMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXRzX21ldGVyX3NvbWJlcicpO1xuICAgIGV2aWxMaW5lLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgJHs1MC1wbGF5ZXJCZW5ldm9sZW50QmFsYW5jZX1mciAkezUwK3BsYXllckJlbmV2b2xlbnRCYWxhbmNlfWZyYDtcbiAgICBzb21iZXJMaW5lLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgJHs1MC1wbGF5ZXJTaWxseUJhbGFuY2V9ZnIgJHs1MCtwbGF5ZXJTaWxseUJhbGFuY2V9ZnJgO1xufVxuZnVuY3Rpb24gZ2l2ZVN0YXRzKHN0YXQsIGFtb3VudCkge1xuICAgIHN3aXRjaCAoc3RhdCkge1xuICAgICAgICBjYXNlICdldmlsJzpcbiAgICAgICAgICAgIHBsYXllckJlbmV2b2xlbnRCYWxhbmNlIC09IGFtb3VudDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdiZW5ldm9sZW50JzpcbiAgICAgICAgICAgIHBsYXllckJlbmV2b2xlbnRCYWxhbmNlICs9IGFtb3VudDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzb21iZXInOlxuICAgICAgICAgICAgcGxheWVyU2lsbHlCYWxhbmNlIC09IGFtb3VudDsgICAgICAgICAgICBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzaWxseSc6XG4gICAgICAgICAgICBwbGF5ZXJTaWxseUJhbGFuY2UgKz0gYW1vdW50O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN0YXRzTGluZXNVcGRhdGVyKCk7XG4gICAgc3RhdHNGbGFnc1VwZGF0ZXIoKTtcbn1cbmZ1bmN0aW9uIHN0YXRzRmxhZ3NVcGRhdGVyKCkge1xuICAgIGlmIChwbGF5ZXJCZW5ldm9sZW50QmFsYW5jZSA+IDE0KSB7XG4gICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKCdwbGF5ZXJCZW5ldm9sZW50MTUnKTtcbiAgICAgICAgaWYgKHBsYXllckJlbmV2b2xlbnRCYWxhbmNlID4gMjkpIHtcbiAgICAgICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKCdwbGF5ZXJCZW5ldm9sZW50MzAnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKHBsYXllckJlbmV2b2xlbnRCYWxhbmNlIDwgLTE0KSB7XG4gICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKCdwbGF5ZXJFdmlsMTUnKTtcbiAgICAgICAgaWYgKHBsYXllckJlbmV2b2xlbnRCYWxhbmNlIDwgLTI5KSB7XG4gICAgICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaCgncGxheWVyRXZpbDMwJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChwbGF5ZXJTaWxseUJhbGFuY2UgPiAxNCkge1xuICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaCgncGxheWVyU2lsbHkxNScpO1xuICAgICAgICBpZiAocGxheWVyU2lsbHlCYWxhbmNlID4gMjkpIHtcbiAgICAgICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKCdwbGF5ZXJTaWxseTMwJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChwbGF5ZXJTaWxseUJhbGFuY2UgPCAtMTQpIHtcbiAgICAgICAgbmV3UGxheWVyQ29uc2VxdWVuY2VzLnB1c2goJ3BsYXllclNvbWJlcjE1Jyk7XG4gICAgICAgIGlmIChwbGF5ZXJTaWxseUJhbGFuY2UgPCAtMjkpIHtcbiAgICAgICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKCdwbGF5ZXJTb21iZXIxNScpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIEZhbHNlY3ViZXNcbmZ1bmN0aW9uIHN0b3J5RmFsc2VjdWJlcyhzdG9yeUVsZW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZygnZmFsc2VjdWJlcyBmdW5jdGlvbiBjYWxsZWQnKTtcbiAgICBzdGFydERpY2VHYW1lKHN0b3J5RWxlbWVudC5tb2RpZmllcnMub3Bwb25lbnROYW1lLCBzdG9yeUVsZW1lbnQubW9kaWZpZXJzLm9wcG9uZW50TGluZXMsIHN0b3J5RmFsc2VjdWJlc0VuZCwgc3RvcnlFbGVtZW50KTtcbn1cbmZ1bmN0aW9uIHN0b3J5RmFsc2VjdWJlc0VuZChyZXN1bHQsIHByaXplKSB7XG4gICAgaWYgKHJlc3VsdCA9PSAnd2luJykge1xuICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaChwcml6ZS5tb2RpZmllcnMuY29uc2VxdWVuY2VzLndpbik7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1BsYXllckNvbnNlcXVlbmNlcyk7XG4gICAgICAgIHN0b3J5VGVsbGVyKHByaXplLm5leHRTdG9yeUVsZW1lbnQud2luKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaChwcml6ZS5tb2RpZmllcnMuY29uc2VxdWVuY2VzLmxvc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdQbGF5ZXJDb25zZXF1ZW5jZXMpO1xuICAgICAgICBzdG9yeVRlbGxlcihwcml6ZS5uZXh0U3RvcnlFbGVtZW50Lmxvc2UpO1xuICAgIH1cbn1cbi8vIFN0YXJ0IGdhbWVcbnN0b3J5VGVsbGVyKHNjcmlwdE9iamVjdHMucHJvbG9ndWUxKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==