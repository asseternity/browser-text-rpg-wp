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

/***/ "./src/comp_assets.js":
/*!****************************!*\
  !*** ./src/comp_assets.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   icons: () => (/* binding */ icons)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _tree_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree.png */ "./src/tree.png");
/* harmony import */ var _person_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./person.png */ "./src/person.png");
// importing



// initialize images
let iconTree = document.createElement('img'); iconTree.setAttribute('style','height:15px;width:15px;'); iconTree.src = `${_tree_png__WEBPACK_IMPORTED_MODULE_1__}`;
let iconTree2 = document.createElement('img'); iconTree2.setAttribute('style','height:15px;width:15px;'); iconTree2.src = `${_tree_png__WEBPACK_IMPORTED_MODULE_1__}`;
let iconTree3 = document.createElement('img'); iconTree3.setAttribute('style','height:15px;width:15px;'); iconTree3.src = `${_tree_png__WEBPACK_IMPORTED_MODULE_1__}`;
let iconPerson = document.createElement('img'); iconPerson.setAttribute('style', 'height:15px;width:15px;'); iconPerson.src = `${_person_png__WEBPACK_IMPORTED_MODULE_2__}`;
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
function startDiceGame(opponentName, lines) {
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
        falseCubes(opponentName, lines);
        main_window.removeChild(startDiceGameButton);
    });
}
// function that starts the game
function falseCubes(opponentName, lines) {
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
        rollPhase(opponentName, lines)
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
function rollPhase(opponentName, lines) {
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
        bidPhase(opponentName, lines);
    });
}
// bidding phase
function bidPhase(opponentName, lines) {
// writes a message. you rerolled dice. after re-rolls, your new hand is:
    let reRollMessage = document.createElement('p');
    if (currentBid.numberOfDice == 0) {
        while (main_window.firstChild) { main_window.removeChild(main_window.firstChild) };
        reRollMessage.textContent = `You re-roll some dice.`
        let reRollMessage2 = document.createElement('p');
        reRollMessage2.textContent = `Your new hand is: ${playerHand[0].result}, ${playerHand[1].result}, ${playerHand[2].result}, ${playerHand[3].result}, ${playerHand[4].result}, ${playerHand[5].result}. Time for the first bluffing phase.`;
        main_window.appendChild(reRollMessage);
        main_window.appendChild(reRollMessage2);
        playerBluffs(opponentName, lines);
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
            playerBluffs(opponentName, lines);
        });
        accuseButton.addEventListener('click', () => {
            main_window.removeChild(whatToDoButtons);
            accusation.accuser = 'Player';
            accusation.numberOfDice = currentBid.numberOfDice;
            accusation.dots = currentBid.dots;
            let gameResult = callOut();
            gameEnd(gameResult, opponentName, lines);    
        });
    }
}
function playerBluffs(opponentName, lines) {
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
                opponentResponse(opponentName, lines);    
            }
        } else {
            event.preventDefault();
            currentBid = { player: 'player', numberOfDice: numberSelect.value, dots: dotsSelect.value };
            while(main_window.firstChild) {main_window.removeChild(main_window.firstChild)};
            let bidMessage = document.createElement('p');
            bidMessage.textContent = `You bid: "I have ${currentBid.numberOfDice} of ${currentBid.dots} dots".`;
            main_window.appendChild(bidMessage);
            opponentResponse(opponentName, lines);
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
function opponentResponse(opponentName, lines) {
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
            gameEnd(gameResult, opponentName, lines);    
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
                gameEnd(gameResult, opponentName, lines);    
            });
        // if that doesn't trigger, the opponent bids    
        } else {
            opponentBid(opponentName, lines);
        }
    } else {
        opponentBid(opponentName, lines);
    }
}
function opponentBid(opponentName, lines) {
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
    bidPhase(opponentName, lines);
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
function gameEnd(result, opponentName, lines) {
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
        gameEnd2(result, opponentName, lines);
    })
}
function gameEnd2(result, opponentName, lines) {
    let opponentEndLineEntry = document.createElement('p');
    if (result == 'playerWins') {
        let gameResultEntry = document.createElement('p');
        gameResultEntry.textContent = 'And.... You win!';
        main_window.appendChild(gameResultEntry);
        opponentEndLineEntry.textContent = `${opponentName}: "${lines.loseLine}."`
    } else {
        let gameResultEntry = document.createElement('p');
        gameResultEntry.textContent = `And.... ${opponentName} wins!`;
        main_window.appendChild(gameResultEntry);
        opponentEndLineEntry.textContent = `${opponentName}: "${lines.winLine}."`
    }
    main_window.appendChild(opponentEndLineEntry);
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
function Character(name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory, race) {
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
function Janitor(name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory, race) {
    Character.call(this, name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory, race);
}
function Accountant(name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory, race) {
    Character.call(this, name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory, race);
}
function Dancer(name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory, race) {
    Character.call(this, name, attackBonus, armorClass, currentHP, maxHP, specialAttack, equippedWeapon, equippedArmor, equippedMisc, inventory, race);
}
// setting prototypes
Object.setPrototypeOf(Janitor.prototype, Character.prototype);
Object.setPrototypeOf(Accountant.prototype, Character.prototype); 
Object.setPrototypeOf(Dancer.prototype, Character.prototype); 
// character object
let char1 = new Character('Somebody', 0, 10, 20, 100, 'Normal Attack', '', '', '', [], '');
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
    let menu_window = document.querySelector('.menu');
    if (char1 instanceof Janitor) { // Wraith
        menu_window.textContent = `You are ${char1.name}. Your are a Wraith. In life, you were a ${char1.race.name}. Your armor class is ${char1.armorClass}. Your HP is ${char1.currentHP}/${char1.maxHP}.`;
    } else if (char1 instanceof Accountant) { // Poltergeist
        menu_window.textContent = `You are ${char1.name}. Your are a Poltergeist. In life, you were a ${char1.race.name}. Your armor class is ${char1.armorClass}. Your HP is ${char1.currentHP}/${char1.maxHP}.`;
    } else if (char1 instanceof Dancer) { // Guardian Spirit
        menu_window.textContent = `You are ${char1.name}. Your are a Guardian Spirit. In life, you were a ${char1.race.name}. Your armor class is ${char1.armorClass}. Your HP is ${char1.currentHP}/${char1.maxHP}.`;
    } else {
        menu_window.textContent = `You are ${char1.name}. Your class is unknown. Your armor class is ${char1.armorClass}. Your HP is ${char1.currentHP}/${char1.maxHP}.`;
    }
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
let Realmer = new Race('Realmer', '[stocky and stout, blah blah]', 1, 0, 0);
let Mortar = new Race('Mortar', '[stocky and stout, blah blah]', 0, 0, 1); // already conquered by the Realm nation? Second-class citizens in the Realm
let Deadlander = new Race('Deadlander', '[stocky and stout, blah blah]', 0, 15, 0);
// object of objects for exporting
let races = { Realmer, Mortar, Deadlander }
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
/* harmony export */   scriptObjects: () => (/* binding */ scriptObjects)
/* harmony export */ });
/* harmony import */ var _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comp_objects_and_methods */ "./src/comp_objects_and_methods.js");
/* harmony import */ var _comp_inventory_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comp_inventory_system */ "./src/comp_inventory_system.js");
/* harmony import */ var _comp_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comp_assets */ "./src/comp_assets.js");
/* harmony import */ var _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comp_story_objects */ "./src/comp_story_objects.js");




// player's choices!
let chosenSun = '';
// --- script ---
// FIND THE CAMP (DON'T KNOW)
let approachCampDontKnow1 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`You run through the Forest of Mirrors in the direction of where you've seen the smoke.`, `You run for what feels like an hour.`, ``], // see people, yell at them, realize that you're dead. then merge with descriptions
    undefined,
    undefined)
// FIND THE CAMP (KNOW THAT YOU'RE A SPIRIT)
let lysanderDescription = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`The last person around the campfire is a figure with shoulder-length red hair.`, `They look like the youngest of the trio, perhaps in their late 20's.`, `Despite that, they carry themselves with the poise of a seasoned warrior. They appear incredibly vigilant, as if awaiting a command.`],
    undefined,
    undefined)
let snapDescription = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`To her right is a man with long hair framing his face. He seems to be in his early 30's.`, `His demeanor is charming, his smile easy, inviting with a hint of mischief.`, `There's a sense of restlessness about him, as if he's constantly seeking something just out of reach.`],
    undefined,
    lysanderDescription)
let peculiarDescription = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`Despite the biting cold of the blizzard, she sits with a sense of control, her posture rigid.`, `She seems to be in her early 40's. Her face bears the marks of hardship, with lines etched deeply around her eyes and mouth.`, `Two scimitars and a musket are resting next to her. Judging by her outfit, she seems to be the one in charge.`, `Despite her outward appearance of stoicism, you sense a deep-seated fatigue, as if she's tired of always being the one in charge.`],
    undefined,
    snapDescription)
let approachCampKnow4 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`The three people are armed - you see muskets and swords next to them. They look like soldiers, mercenaries, or guards of some sort.`, `It's kind of calming - to finally see some humans.`, `Despite the fact that it's too late for you.`, `No, stop it. It's not too late. You've died, but you're not dead. You're a Spirit. And you can survive.`, `The first woman huddles by the campfire, the olive skin of her face glowing softly in the firelight.`],
    undefined,
    peculiarDescription)
let approachCampKnow3 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`Knowing that they cannot see you, you float closer to them and take a closer look.`, `The first person is a woman dressed in a long, thick, dark red coat. You no longer care about the cold, but it's an understandable choice for her. Could the weather have killed you? You shake away these thoughts. It's pointless to speculate for now.`],
    undefined,
    approachCampKnow4)
let approachCampKnow2 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`You float closer. It's common knowledge in the Fated Realm that humans cannot see Spirits physically.`, `To promote their concepts, Spirits have the abilities to affect the material world in ghostly ways. The more powerful the Spirit, the more substantial the effects.`, `For now, you float closer to the campfire, seeing three people huddled around the bright flame.`],
    undefined,
    approachCampKnow3)
let approachCampKnow1 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`You float for what feels like hours.`, `Yes. Float. Now that you understand your situation, you realize that you don't have to move your feet to move. Perks of being a Spirit.`, `Occasionally you open your eyes, occasionally you close them.`, `It doesn't look like you can see through solid matter, so all you see is the snowy Forest of Mirrors.`, `Eventually, you see a light. This one's definitely a campfire.`],
    undefined,
    approachCampKnow2)
// THE FOREST OF MIRRORS
let endForestConcentrate4 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`Right. So you must be a Spirit of a Phoenix. Of a Sun. Of a God.`, `It's pretty much common knowledge that Spirits exist to further promote the concept, or portfolio, of their Phoenix.`, `If they fail to promote their concept, the Spirit disappears. Dies, forever`, `Oh, Gods, is that why you've been feeling weaker and weaker!?`, `You rise to your 'feet', in panic again. You have to find someone to promote your concept to. Without people to promote your concept to, you'll disappear. And soon, your body feels it.`, `You remember stories that Spirits can sense life. You close your eyes and try to let your feelings guide you to the nearest peopel.`],
    undefined,
    approachCampKnow1)
let endForestConcentrate3 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('choice',
    [`You must be a Spirit.`, `This means, in life, you must have worshipped one of the 20 Suns, or Phoenixes, how they're also called. Done enough, in fact, to have been made a Spirit of that Sun.`, `Why is it so hard to recall the details of your life?`, `You concentrate again, sitting there in the snow.`, `Snowflakes fall right through you. How did you not notice that? Perhaps from the panic, and form your rabid search for help.`, `'Which Sun did I worship in life? You think.'`],
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
let endForestConcentrate2 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`You sit there for a moment, mind completely blank.`, `You're dead.`, `You're conscious, however. You have to be a Spirit, right?`, `You concentrate - what do you know of Spirits?`, `When people die, they reincarnate into animals. When animals die, they reincarnate into people`, `However, if the dying person had done enough in the worship of one of the 20 Suns, they reincarnate into a Spirit.`],
    undefined,
    endForestConcentrate3)
let endForestConcentrate1 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`You fall to the snowy ground of the forest, sitting with your legs outstretched in front of you.`, `Your mind races. Your body can't feel the cold.`, `You're really dead.`],
    'FoMspiritKnow',
    endForestConcentrate2)
let endForestExploreScream3 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`You try to scream, again and again. No sound comes out.`, `You stomp in the snow, but it doesn't move.`, `Finally, you approach a tree and reach out to touch its bark.`, `You gulp, panic and realization starting to settle in, as you slowly reach with your hand to the tree.`, `Your hand passes right through the tree, disappearing into the bark.`, `You didn't wake up here in the Forest of Mirrors. You died here, and now you're a Spirit.`],
    undefined,
    endForestConcentrate1)
let endForestExploreScream2 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`You stop. What the hell is going on?`, `You've been feeling off ever since you woke up.`, `Now, you're starting to suspect that it's not just the cold and frostbite.`],
    undefined,
    endForestExploreScream3)
let endForestExploreScream1 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`'A-a-anybody!'`, `You yell, but the only sound that you hear is the blizzard.`, `'Somebody help me!'`, `You scream again. This time you notice that you don't even feel the vibration in your throat.`],
    'FoMspiritKnow',
    endForestExploreScream2)
let endForestExploreNoScream3 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`You look around from the top of the hill.`, `In the distance, you spot a faint glimpse of smoke. Now this is definitely fire of some kind.`, `And hope for you.`],
    undefined,
    approachCampDontKnow1)
let endForestExploreNoScream2 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`You keep running through the forest, and manage to reach the top of the hill.`, `You're not dead yet, despite being in the frozen Forest of Mirrors for at least an hour or two by now.`, `You're not even out of breath from springing up the hill.`, `No time to think about it now.`],
    undefined,
    endForestExploreNoScream3)
let endForestExploreNoScream1 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`No screaming.`, `You keep running forward.`, `You sprint through the trees for what feels like an hour.`, `Finally, you manage to spot a big hill in the forest. It'll give you a vantage point, so you spring in its direction.`],
    'FoMnoSpiritKnow',
    endForestExploreNoScream2)
let endForestExplore1 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('choice',
    [`You breathe, trying to keep your warmth.`, `Blurry vision, can't feel your legs - you might be close to death. You need help.`, `The Forest of Mirrors is enormous, it takes up a big part of the eastern side of the Fated Realm.`, `There must be somebody traversing the Forest that could help you.`, `Should you scream out for help?`],
    [{choiceText: `Yes. It'll be hard for anyone to hear you through the blizzard, but you're desperate.`,
    choiceModifiers: 'FoMscream',
    choiceNextStory: endForestExploreScream1},
    {choiceText: `No screaming. The only attention it'll attract are tuskwolves.`,
    choiceModifiers: 'FoMnoScream',
    choiceNextStory: endForestExploreNoScream1}],
    undefined)
let endForest5 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('choice',
    [` Your vision is getting blurrier.`, `You need to keep moving. What to do now?`],
    [{choiceText: 'Keep moving, keep exploring the forest.',
    choiceModifiers: 'FoMendExplore',
    choiceNextStory: endForestExplore1},
    {choiceText: 'Stop and try to concentrate on your condition.',
    choiceModifiers: 'FoMendConcentrate',
    choiceNextStory: endForestConcentrate1}],
    undefined)
let endForest4 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('consequence',
    [{dependency: 'FoMsawWisp', consequenceText: [`You remember: "Spirits cannot touch physical objects."`, `That creature in the woods - it must have been a Spirit.`, `It could touch you.`, `Could you be... dead?`, `Your thoughts are interrupted as your body is feeling weaker.`]},
    {dependency: 'FoMnotSeenWisp', consequenceText: [`Maybe you should have asked the campfire people for help. For food. Warmth. Anything.`, `You feel yourself getting weaker.`]},],
    undefined,
    endForest5)
let endForest3 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('consequence',
    [{dependency: 'FoMsearchedBody', consequenceText: [`You concentrate, wincing. Trying to think back to your education. What do you know of Spirits?`, `Let's see... Spirits are the only creatures with magical abilities.`, `Spirits also... cannot touch physical objects.`]},
    {dependency: 'FoMleftBody', consequenceText: [`You should be dead by now, but you don't seem to feel the cold.`, `You can feel panic and frustration growing.`]},],
    undefined,
    endForest4)
let endForest2 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('consequence',
    [{dependency: 'FoMsearchedBody', consequenceText: [`Stop. Recite the facts.`, `You woke up in the Forest of Mirrors.`, `You don't seem to feel the cold.`, `Your hand went right through that corpse.`, `Something is off here.`, `You have a theory.`]},
    {dependency: 'FoMleftBody', consequenceText: [`Stop. Recite the facts.`, `You woke up in the Forest of Mirrors.`]}],
    undefined,
    endForest3)
let endForest1 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('endExploration',
    [`You continue trudging through the snowy woods, looking for any sort of help.`, `You can't feel weaker with each step, but you still don't feel the cold.`, `You stop and think.`],
    {unlocked: false},
    endForest2)
let wispLeave = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`You turn around step away from the light.`, `If it's a campfire, you can't be sure that these people won't be hostile.`, `And, with the blizzard and your blurred vision - from your injuries? - you can't even be sure that it's a campfire.`],
    'explorationEvent',
    undefined)
let wispApproach5 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`That must have been... a Spirit, right? You do know of Spirits.`, `When ordinary people die, they reincarnate into animals.`, `If a person has done enough in the worship of one of the 20 Suns, they reincarnate into a Spirit.`, `Snowfall is getting worse. Time to move.`],
    'explorationEvent',
    undefined)
let wispApproach4 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('item',
    [`The wisp ball flies towards you again. This time you're ready and you land a strike in the middle of its glowing body.`, `With a fizzing sound, the wisp explodes into tiny specks of light.`, `You see one of the bigger specks, a fist-sized ball of light, has landed under your feet.`, `You reach into the snow and pick it up. It emits a warming aura.`, `[Click the Inventory button to equip items]`],
    _comp_inventory_system__WEBPACK_IMPORTED_MODULE_1__.allItems.wispBall,
    wispApproach5)
let wispApproach3 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('battle',
    [`You turn around, trying to keep it in sight.`, `It seems to be a glowing wisp of light.`, `It seems to be getting ready to swoop in towards you again.`, `It's certainly no campfire, and it doesn't seem to be friendly. You need answers, but survival comes first. You're not sure you can take many more of this "wisp's" fly-bys. You have nothing but your fists to defend yourself with.`],
    [_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_0__.monsters.wisp1],
    wispApproach4)
let wispApproach2 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`The blizzard, the trees and the snow don't help.`, `As you step closer, the light suddenly moves. It flies a little upwards, and then moves closer towards you.`, `The light speeds up, flying towards you, until it flies right through you, painfully burning your flesh.`],
    'explorationEvent',
    wispApproach3)
let wispApproach1 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`You can't help but feel weaker. The cold must be getting to you.`, `You need help. You decide to walk closer to the light.`, `You step slowly, trying to see what the light is.`],
    'explorationEvent',
    wispApproach2)
let wisp2 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('choice',
    [`Your vision is so blurry that you can't quite make out what the light is.`, `Perhaps, campfire? Perhaps someone is in this forest after all.`, `It could also be bandits. Poachers. Worshihppers of evil Suns, ready to take advantage of a dying traveler.`, `Approach the light source?`],
    [{choiceText: 'Slowly approach the light.',
    choiceModifiers: 'FoMsawWisp',
    choiceNextStory: wispApproach1},
    {choiceText: 'Turn around and walk away form the light.',
    choiceModifiers: 'FoMnotSeenWisp',
    choiceNextStory: wispLeave}],
    undefined)
let wisp1 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('randomEncounter',
    [`You continue trudging through the snow.`, `You don't seem to feel your feet. You hope it's not due to frostbite.`, `As you lift your head to look forward, placing your hand against your forehead to block off the wind, you see a light between the trees.`],
    {hasPlayerSeenMe: false},
    wisp2)
let corpseLeave = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`You turn around, not wishing to disturb the corpse.`, `You'll make it out of here.`, `Not this way, but you will.`, `As you walk away from the body, you can't help but feel weaker. Probably frostbite. Right?`],
    'explorationEvent',
    ['stats', 'benevolence', 10])
let corpseSearch2 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`Your hand moves right through the snow.`, `You try again. You can't move the snow. Your hand moves right through the corpse too.`, `You turn around.`, `At first, you thought that the blizzard filled in any tracks in the snow. Now that you're looking - it's not that.`, `You're not leaving any footprints in the snow at all.`, `What the hell is going on?`],
    'explorationEvent',
    ['stats', 'evil', 10])
let corpseSearch1 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`Alone, with no belongings, in the middle of winter in the Forest of Mirrors?`, `Yeah, you'll take anything, or it'll be very easy to end up like this person.`, `You lower yourself towards the body, trying to remove some snow from the body.`],
    'explorationEvent',
    corpseSearch2)
let corpse2 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('choice',
    [`Looting would be a new low.`, `Although...`, `You're in no condition to be picky.`, `Search the body?`],
    [{choiceText: 'Search the body.',
    choiceModifiers: 'FoMsearchedBody',
    choiceNextStory: corpseSearch1},
    {choiceText: 'Leave the body alone.',
    choiceModifiers: 'FoMleftBody',
    choiceNextStory: corpseLeave}],
    'explorationEvent')
let corpse1 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('randomEncounter',
    ['You continue moving through the Forest of Mirrors, when you see a mound in the snow.', 'The snow seems to be covering something.', 'Your suspicions are true. It is a lonely body, in the frosted forest, covered in snow.'],
    {hasPlayerSeenMe: false},
    corpse2)
let tuskwolf3 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`Huh? Is it blind? Cursed? Perhaps it's a Spirit's illusion? Or maybe you're hallucinating.`, `Whatever it is, the tuskwolf at least seems very real. You're not in any condition to investigate.`, `You won't get another chance. You quickly back away from the tuskwolf while it's confused or distracted.`],
    'explorationEvent',
    undefined)
let tuskwolf2 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`The growling seems to be close. Maybe 15 meters behind you.`, `The tuskwolf doesn't seem to be striking though. Odd.`, `You slowly turn around.`, `A big wolf of silver fur stands not far from where you are, two 30 cms long tusks at the ready.`, 'It spins around in place, sniffing and searching for something. It ignores you completely.'],
    'explorationEvent',
    tuskwolf3)
let tuskwolf1 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('randomEncounter',
    ['As you run through the forest, your thoughts start gather.', 'You know the Fated Realm quite well.', 'Judging by the frosted peaks in the distance, this must be the Forest of Mirrors. Named after the clear white snow that lies here for 16 out of the 20 months.', 'Your thoughts pause as you hear growling behind you. A tuskwolf. Fuck.'],
    {hasPlayerSeenMe: false},
    tuskwolf2)
// WAKE UP SEQUENCE
let wakeUpMove = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('exploration',
    [`Your body moves quickly, but the feeling of numbness all over is overwhelming.`, `Must be the frostbite. If you're lucky, you won't lose any fingers or toes.`, `In any case, it's time to move, or you'll lose your life as well.`, `[USE WASD or click the map to move.]`],
    [{encounterStoryElement: wisp1, tileNumber: '#tile30', icon: _comp_assets__WEBPACK_IMPORTED_MODULE_2__.icons.iconTree},
    {encounterStoryElement: corpse1, tileNumber: '#tile50', icon: _comp_assets__WEBPACK_IMPORTED_MODULE_2__.icons.iconTree2},
    {encounterStoryElement: tuskwolf1, tileNumber: '#tile70', icon: _comp_assets__WEBPACK_IMPORTED_MODULE_2__.icons.iconTree3},
    {encounterStoryElement: endForest1, tileNumber: '#tile3', icon: _comp_assets__WEBPACK_IMPORTED_MODULE_2__.icons.iconPerson}],
    undefined)
let wakeUpLie2 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`Your eyes open again. You feel noticeably weaker. Your vision seems blurry.`, `The clear evening sky has changed into a navy blue dusk.`, 'You almost let your eyes close again, when you hear the howl of a tuskwolf. Driven by pure instinct, you get to your knees, then to your feet, and start moving.', `Everyone has to go one day, but tuskwolf food isn't your way.`],
    undefined,
    wakeUpMove)
let wakeUpLie1 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    [`You lie on your belly in the snow, feeling powerless to move.`, `You almost don't feel the cold. You wonder if it means that you're almost dead already. How did you get here? Were you robbed?`, 'You close your eyes again. Maybe this problem will disappear like a bad dream.'],
    undefined,
    wakeUpLie2)
let wakeUpRise2 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    ['You get to your feet. Again, with surprising ease.', 'You must not have been out for long. You feel lucky. Frost takes lives quickly.', 'You look back down. The wind has already done its job - there is almost no indentation in the snow from your body already.', `You don't feel particularly cold yet, but you rub your hands for warmth nevertheless.`],
    ['gold', 200],
    wakeUpMove)
let wakeUpRise1 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('description',
    ['You seem to be lying on your belly.', 'You plant your hands in the snow, trying to rise to your knees.', 'You rise to your knees with surprising ease.', `You look around. Your satchel doesn't seem to be with you. How did you get here? Were you robbed?`],
    undefined,
    wakeUpRise2)
let wakeUp1 = new _comp_story_objects__WEBPACK_IMPORTED_MODULE_3__.storyElement('choice',
    ['You open your eyes to see pure white around you.', 'You lift your head. Treetops covered in sparkling white snow. Clear evening sky. Sounds of the wind.'],
    [{choiceText: 'Try to get up.',
    choiceModifiers: 'wakeUpDay',
    choiceNextStory: wakeUpRise1},
    {choiceText: 'Continue lying in the snow.',
    choiceModifiers: 'wakeUpNight',
    choiceNextStory: wakeUpLie1}],
    undefined)
// export
let scriptObjects = { wakeUp1 };


/***/ }),

/***/ "./src/comp_story_functions.js":
/*!*************************************!*\
  !*** ./src/comp_story_functions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comp_dice_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comp_dice_game */ "./src/comp_dice_game.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _comp_hud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comp_hud */ "./src/comp_hud.js");
/* harmony import */ var _comp_battle_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comp_battle_functions */ "./src/comp_battle_functions.js");
/* harmony import */ var _comp_inventory_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comp_inventory_system */ "./src/comp_inventory_system.js");
/* harmony import */ var _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comp_objects_and_methods */ "./src/comp_objects_and_methods.js");
/* harmony import */ var _comp_story_objects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comp_story_objects */ "./src/comp_story_objects.js");
/* harmony import */ var _comp_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comp_script */ "./src/comp_script.js");
/* harmony import */ var _comp_races__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comp_races */ "./src/comp_races.js");
// import: storyElement, storyElements, hud, grabItem, char1, classes, listEnemies, moveOn, enemies array, enemy objects









const eventEmitter = __webpack_require__(/*! ./comp_event_emitter */ "./src/comp_event_emitter.js");
// game-long vars
let newPlayerConsequences = [];
let isPlayerExploring = false;
// update storyElements
function newUpdateNames(answer) {
    let allStoryElements = _comp_story_objects__WEBPACK_IMPORTED_MODULE_6__.storyElement.getAllInstances();
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
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('Dude', answer); 
                }
                break;
            case 'dialogue':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    allStoryElements[i].text[j].npcLine = allStoryElements[i].text[j].npcLine.replaceAll('Dude', answer);
                    for (let k = 0; k < allStoryElements[i].text[j].responses.length; k++) {
                        allStoryElements[i].text[j].responses[k].dialogueChoice = allStoryElements[i].text[j].responses[k].dialogueChoice.replaceAll('Dude', answer);
                    }
                }
                break;
            case 'consequence':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    for (let k = 0; k < allStoryElements[i].text[j].consequenceText.length; k++) {
                        allStoryElements[i].text[j].consequenceText[k] = allStoryElements[i].text[j].consequenceText[k].replaceAll('Dude', answer); 
                    }
                }
                break;
        }
    }
    _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent = _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent.replace('a person', answer);
}
// the function is ALWAYS static
// function story(type, text, modifiers)
function storyTeller(storyElement) {
    while (_comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.firstChild) {_comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.firstChild)};
    if (storyElement !== undefined) {
        if (storyElement[0] == 'stats' || storyElement[0] == 'gold') {
            if (storyElement[0] == 'stats') {
                giveStats(storyElement[1], storyElement[2]);
            } else {
                (0,_comp_inventory_system__WEBPACK_IMPORTED_MODULE_4__.addGold)(storyElement[1]);
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
    _comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.appendChild(storyParagraph);
    if (loop < storyElement.text.length) {
        let continueButton = document.createElement('button');
        continueButton.textContent = 'Click here to continue.';
        _comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.appendChild(continueButton);
        continueButton.focus();
        continueButton.addEventListener('click', () => {
            loop++;
            textFlipper(storyElement, loop);
            _comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.removeChild(continueButton);
            if (loop == storyElement.text.length) {
                switch (storyElement.type) {
                    case 'description':
                        if (storyElement.modifiers !== undefined) {
                            newPlayerConsequences.push(storyElement.modifiers);
                            console.log(newPlayerConsequences);
                        }
                        storyTeller(storyElement.nextStoryElement);
                        break;
                    case 'battle':
                        newBattleStarter(storyElement);
                        break;
                    case 'item':
                        (0,_comp_inventory_system__WEBPACK_IMPORTED_MODULE_4__.grabItem)(storyElement.modifiers);
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
                        while (_comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.firstChild) { _comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.firstChild) };
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
                        _comp_hud__WEBPACK_IMPORTED_MODULE_2__.image_window.removeChild(board);
                        while (_comp_hud__WEBPACK_IMPORTED_MODULE_2__.image_window.firstChild) { _comp_hud__WEBPACK_IMPORTED_MODULE_2__.image_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_2__.image_window.firstChild) };
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
                            (0,_comp_inventory_system__WEBPACK_IMPORTED_MODULE_4__.addGold)(storyElement.modifiers[1]);
                        }
                    }
                }
            }
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
        _comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.appendChild(entry);
        if (line < storyElement.text[correctConsequence].consequenceText.length) {
            let continueButton = document.createElement('button');
            continueButton.textContent = 'Click here to continue.';
            _comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.appendChild(continueButton);
            continueButton.focus();
            continueButton.addEventListener('click', () => {
                line++;
                _comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.removeChild(continueButton);
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
    _comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.appendChild(npcDialogueLine);
    if (line !== storyElement.text.length - 1) {
        storyElement.text[line].responses.forEach((response) => {
            let responseButton = document.createElement('button');
            responseButton.textContent = response.dialogueChoice;
            _comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.appendChild(responseButton);
            responseButton.setAttribute('class', 'choiceButton');
            responseButton.addEventListener('click', () => {
                let dialogueButtons = _comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.querySelectorAll('button');
                dialogueButtons.forEach(button => {
                    button.remove();
                });
                let yourLine = document.createElement('p');
                yourLine.textContent = `"${response.dialogueChoice}"`;
                _comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.appendChild(yourLine);
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
        _comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.appendChild(continueButton);
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
        _comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.appendChild(choiceButton);
        choiceButton.addEventListener('click', () => {
            newPlayerConsequences.push(thisChoice.choiceModifiers);
            if (thisChoice.choiceModifiers == 'classWraith') {
                Object.setPrototypeOf(_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1, _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.Janitor.prototype);
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.Janitor.call(_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1, _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.name, 0, 10, 20, 100, 'Normal Attack', '', '', '', []);
                _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent = _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent.replace('Your class is unknown.', 'You are a Wraith.');
                _comp_hud__WEBPACK_IMPORTED_MODULE_2__.special_button.addEventListener('click', () => { (0,_comp_battle_functions__WEBPACK_IMPORTED_MODULE_3__.switchAttack)(_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1) });
                eventEmitter.emit('Wraith');    
            } else if (thisChoice.choiceModifiers == 'classPoltergeist') {
                Object.setPrototypeOf(_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1, _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.Accountant.prototype);
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.Accountant.call(_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1, _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.name, 0, 10, 20, 100, 'Normal Attack', '', '', '', []);
                _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent = _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent.replace('Your class is unknown.', 'You are a Poltegeist.');
                _comp_hud__WEBPACK_IMPORTED_MODULE_2__.special_button.addEventListener('click', () => { (0,_comp_battle_functions__WEBPACK_IMPORTED_MODULE_3__.switchAttack)(_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1) });    
                eventEmitter.emit('Poltergeist');
            } else if (thisChoice.choiceModifiers == 'classGuardianSpirit') {
                Object.setPrototypeOf(_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1, _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.Dancer.prototype);
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.Dancer.call(_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1, _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.name, 0, 10, 20, 100, 'Normal Attack', '', '', '', []);
                _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent = _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent.replace('Your class is unknown.', 'You are a Guardian Spirit.');
                _comp_hud__WEBPACK_IMPORTED_MODULE_2__.special_button.addEventListener('click', () => { (0,_comp_battle_functions__WEBPACK_IMPORTED_MODULE_3__.switchAttack)(_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1) });   
                eventEmitter.emit('GuardianSpirit');  
            }
            if (thisChoice.choiceModifiers == 'raceRealmer') {
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race = _comp_races__WEBPACK_IMPORTED_MODULE_8__.races.Realmer;
                _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent = _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent.replace(' Your armor class', ' In life, you were a Realmer. Your armor class');
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.currentHP += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race.raceHPBonus;
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.maxHP += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race.raceHPBonus;
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.armorClass += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race.raceArmorBonus;
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.menuUpdater)();
                let stats_race = document.querySelector('#stats_race');
                stats_race.textContent = 'In life, you were a Realmer.'
            } else if (thisChoice.choiceModifiers == 'raceMortar') {
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race = _comp_races__WEBPACK_IMPORTED_MODULE_8__.races.Mortar;
                _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent = _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent.replace(' Your armor class', ' In life, you were a Mortar. Your armor class');
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.currentHP += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race.raceHPBonus;
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.maxHP += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race.raceHPBonus;
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.armorClass += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race.raceArmorBonus;
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.menuUpdater)();
                stats_race.textContent = 'In life, you were a Mortar.'
            } else if (thisChoice.choiceModifiers == 'raceDeadlander') {
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race = _comp_races__WEBPACK_IMPORTED_MODULE_8__.races.Deadlander;
                _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent = _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent.replace(' Your armor class', ' In life, you were a Deadlander. Your armor class');
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.currentHP += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race.raceHPBonus;
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.maxHP += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race.raceHPBonus;
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.armorClass += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race.raceArmorBonus;
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.menuUpdater)();
                stats_race.textContent = 'In life, you were a Deadlander.'
            }
            storyTeller(thisChoice.choiceNextStory);
        });
    })
}
// new battle functions
let storyAfterBattle = null;
function newBattleStarter(storyElement) {
    storyElement.modifiers.forEach((currentEnemy) => { currentEnemy.currentHP = currentEnemy.maxHP });
    _comp_battle_functions__WEBPACK_IMPORTED_MODULE_3__.enemies.splice(0, _comp_battle_functions__WEBPACK_IMPORTED_MODULE_3__.enemies.length, ...storyElement.modifiers);
    storyAfterBattle = storyElement;
    let board = document.querySelector('#explorationBoard');
    if (board !== null) { board.style.display = 'none'; }
    (0,_comp_battle_functions__WEBPACK_IMPORTED_MODULE_3__.listEnemies)();
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
        _comp_hud__WEBPACK_IMPORTED_MODULE_2__.log_window.appendChild(entry);
        while (_comp_hud__WEBPACK_IMPORTED_MODULE_2__.log_window.children.length > 2) { _comp_hud__WEBPACK_IMPORTED_MODULE_2__.log_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_2__.log_window.firstChild) };
        Array.from(_comp_hud__WEBPACK_IMPORTED_MODULE_2__.log_window.children).forEach((entry) => {
            entry.setAttribute('style', 'color:white;');
        });
        _comp_hud__WEBPACK_IMPORTED_MODULE_2__.top_bar.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_2__.top_bar.firstChild);
        while (_comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.firstChild) { _comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.firstChild) };
        storyTeller(storyAfterBattle.nextStoryElement);
        storyAfterBattle = null;   
}); 
    // } else {
eventEmitter.on('battle:lose', () => {
        let entry = document.createElement('p');
        entry.textContent = 'You died!';
        entry.setAttribute('style', 'color:red;');
        _comp_hud__WEBPACK_IMPORTED_MODULE_2__.log_window.appendChild(entry);
        _comp_hud__WEBPACK_IMPORTED_MODULE_2__.button_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_2__.attack_button);
        _comp_hud__WEBPACK_IMPORTED_MODULE_2__.button_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_2__.special_button);
        _comp_hud__WEBPACK_IMPORTED_MODULE_2__.button_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_2__.inventory_button);
        _comp_hud__WEBPACK_IMPORTED_MODULE_2__.button_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_2__.stats_button);
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
    _comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.appendChild(form_card);
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        let answer = input.value;
        _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.name = answer;
        newUpdateNames(answer);
        while (_comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.firstChild) { _comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.firstChild); }
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
    while (_comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.firstChild) {_comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.removeChild(_comp_hud__WEBPACK_IMPORTED_MODULE_2__.main_window.firstChild)};
    // make board and boardUnder
    let board = document.createElement('div');
    board.setAttribute('id', 'explorationBoard');
    let boardUnder = document.createElement('div');
    boardUnder.setAttribute('style', 'border-collapse:collapse; margin:3px; display:inline-grid; grid-template-columns: repeat(6, 25px);')
    boardUnder.setAttribute('id', 'boardUnder');
    _comp_hud__WEBPACK_IMPORTED_MODULE_2__.image_window.appendChild(board);
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
    _comp_hud__WEBPACK_IMPORTED_MODULE_2__.stats_button.addEventListener('click', () => {
        if (newPlayerConsequences.includes('classWraith') || newPlayerConsequences.includes('classPoltergeist') || newPlayerConsequences.includes('classGuardianSpirit')) {
            statsDialog.showModal();
            let closeButton2 = document.querySelector('#closeButton2');
            closeButton2.addEventListener('click', () => {
                statsDialog.classList.add('hide');
                statsDialog.addEventListener('animationend', _comp_hud__WEBPACK_IMPORTED_MODULE_2__.dialogAnimationEnd);
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
// TESTER. start game
// storyTeller(storyElements.testNaming);
// addGold(5000);
storyTeller(_comp_script__WEBPACK_IMPORTED_MODULE_7__.scriptObjects.wakeUp1);
// startDiceGame('Dave', exampleLines);

/***/ }),

/***/ "./src/comp_story_objects.js":
/*!***********************************!*\
  !*** ./src/comp_story_objects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storyElement: () => (/* binding */ storyElement),
/* harmony export */   storyElements: () => (/* binding */ storyElements)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _comp_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comp_assets */ "./src/comp_assets.js");
/* harmony import */ var _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comp_objects_and_methods */ "./src/comp_objects_and_methods.js");
/* harmony import */ var _comp_inventory_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comp_inventory_system */ "./src/comp_inventory_system.js");
// import




// class storyElement { type(dialogue, choice, battle, description, item); text = []; 
// modifiers(for battle: array of enemies, for choice/dialogue: choices, for item: item name);
// nextStory }
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
// objects of this class will be ALL that I have to edit
let wisp2 = new storyElement('description',
    [`1`, `2`],
    'explorationEvent',
    undefined)
let wisp1 = new storyElement('randomEncounter',
    ['1', '2'],
    {hasPlayerSeenMe: false},
    wisp2)
    let corpse2 = new storyElement('description',
    [`1`, `2`],
    'explorationEvent',
    undefined)
let corpse1 = new storyElement('randomEncounter',
    ['1', '2'],
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
    [{encounterStoryElement: wisp1, tileNumber: '#tile30', icon: _comp_assets__WEBPACK_IMPORTED_MODULE_1__.icons.iconTree},
    {encounterStoryElement: corpse1, tileNumber: '#tile50', icon: _comp_assets__WEBPACK_IMPORTED_MODULE_1__.icons.iconTree2},
    {encounterStoryElement: tuskwolf1, tileNumber: '#tile70', icon: _comp_assets__WEBPACK_IMPORTED_MODULE_1__.icons.iconTree3}],
    undefined)
let randomEventExit2 = new storyElement(
    'endExploration',
    ['1', '2'],
    'explorationEvent',
    wakeUpMove
)
let randomEventExit = new storyElement(
    'randomEncounter',
    ['1', '2'],
    {hasPlayerSeenMe: false},
    randomEventExit2
)
let randomEvent2b = new storyElement(
    'description',
    ['Holy ballsacks, what a fight.', 'Welp, back to exploring.'],
    'explorationEvent',
    undefined
)
let randomEvent2a = new storyElement(
    'battle',
    ['Encounter 2 is pissed though.', 'Oh, it is super pissed.', 'Time to fight!'],
    [_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.monsters.goblin_grunt],
    randomEvent2b
)
let randomEvent2 = new storyElement(
    'randomEncounter',
    ['You just found random encounter 2!'],
    {hasPlayerSeenMe: false},
    randomEvent2a
)
let randomEvent1a = new storyElement(
    'item',
    ['This event is nice! It gives you an item!'],
    _comp_inventory_system__WEBPACK_IMPORTED_MODULE_3__.allItems.magicArmor,
    undefined
)
let randomEvent1 = new storyElement(
    'randomEncounter',
    ['You just found random encounter 1!'],
    {hasPlayerSeenMe: false},
    randomEvent1a
)
let testExploration = new storyElement(
    'exploration',
    ['You set out on the road again.', 'The forest is lush and hard to walk through.', 'The stranger was right - it will be hard to find your way here.', '[Use WASD or click / tap on the map to move.]'],
    [{encounterStoryElement: randomEvent1, tileNumber: '#tile30', icon: _comp_assets__WEBPACK_IMPORTED_MODULE_1__.icons.iconTree},
    {encounterStoryElement: randomEvent2, tileNumber: '#tile100', icon: _comp_assets__WEBPACK_IMPORTED_MODULE_1__.icons.iconTree2},
    {encounterStoryElement: randomEventExit, tileNumber: '#tile45', icon: _comp_assets__WEBPACK_IMPORTED_MODULE_1__.icons.iconPerson}],
    undefined
)
let testAfterDialogue = new storyElement(
    'consequence',
    [{dependency: 'StrangerFriendly', consequenceText: [
        'You hope that person winds what they are looking for.',
        'Oh, well. You have your own needs to take care of, Dude.']},
    {dependency: 'StrangerAnnoyed', consequenceText: [
        'Well that person was a jerk. Not like Dude.',
        'What a shit-faced poopster.']}],
    undefined,
    testExploration
)
let testDialogue = new storyElement(
    'dialogue',
    [{ lineNumber: 0, npcLine: 'You see a person. They approach, and say: "Hello!".', responses: 
        [{ dialogueChoice: 'And hello to you kind person! My name is Dude.', dialogueNextLine: 1, points: 1 },
        { dialogueChoice: 'Hello, more like hyulo! Dude here.', dialogueNextLine: 2, points: -1 }]},
    { lineNumber: 1, npcLine: '"Well, hi, Dude. Nice to see a polite individual around these parts! How are you today?"', responses: 
        [{ dialogueChoice: 'I am doing well.', dialogueNextLine: 3, points: 1 },
        { dialogueChoice: 'I need help...', dialogueNextLine: 4, points: -1 }]},
    { lineNumber: 2, npcLine: '"Dude, I do not speak this foul-sounding language of yours," they say, sounding concerned. "Are you okay?".', responses: 
        [{ dialogueChoice: 'I am doing well.', dialogueNextLine: 3, points: 1 },
        { dialogueChoice: 'I need help...', dialogueNextLine: 4, points: 0 }]},
    { lineNumber: 3, npcLine: '"Glad to hear it. Well, stay safe out there."', responses: 
        [{ dialogueChoice: 'Goodbye, and good luck.', dialogueNextLine: 5, points: 1 },
        { dialogueChoice: 'Oh, piss off already.', dialogueNextLine: 5, points: -1 }]},
    { lineNumber: 4, npcLine: '"Wish I could help you, friend. God bless."', responses: 
        [{ dialogueChoice: 'It is alright. Take care of yourself, stranger.', dialogueNextLine: 5, points: 1 },
        { dialogueChoice: 'Thanks for nothing...', dialogueNextLine: 5, points: -1 }]},
    { lineNumber: 5, npcLine: 'The stranger says goodbye and leaves.', responses: []}],
    ['StrangerFriendly', 'StrangerNeutral', 'StrangerAnnoyed'],
    testAfterDialogue
) 
let testChoiceOutcome2 = new storyElement(
    'description',
    ['You chose 2.'],
    undefined,
    testDialogue
) 
let testChoiceOutcome1 = new storyElement(
    'description',
    ['You chose 1.'],
    undefined,
    testDialogue
) 
let testChoice = new storyElement(
    'choice',
    ['Hello!', 'This is the new introduction 2.', 'Fun again, is it not?', 'Certainly is.', 'Again. But now it is time to choose: 1 or 2?'],
    [{choiceText: 'I will choose 1.',
    choiceModifiers: 'testChoice1',
    choiceNextStory: testChoiceOutcome1},
    {choiceText: 'I will choose 2.',
    choiceModifiers: 'testChoice2',
    choiceNextStory: testChoiceOutcome2}],
    undefined
) 
let testItem = new storyElement(
    'item',
    ['Enemies are dead!', 'This description has more strings.', 'Like one more.', 'Thank you for your patience.', 'As a reward, here is an item.'],
    _comp_inventory_system__WEBPACK_IMPORTED_MODULE_3__.allItems.magicSword,
    testChoice
) 
let testBattle = new storyElement(
    'battle',
    ['Well now it is time to play!', 'This array has fewer strings too! Muahahaha.', 'It is a fight!'],
    [_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.monsters.imp1, _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.monsters.imp2, _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.monsters.goblin_chieftain, _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_2__.monsters.goblin_fighter],
    testItem
)
let testDescription = new storyElement(
    'description',
    ['Hello, Dude!', 'This is a new introduction.', 'Fun, is it not?', 'Certainly is.'],
    undefined,
    testBattle
)
let testRace = new storyElement(
    'choice',
    ['Now it is time to choose your race.', 'Choose wisely.'],
    [{choiceText: 'Realmer.',
    choiceModifiers: 'raceRealmer',
    choiceNextStory: testExploration},
    {choiceText: 'Mortar.',
    choiceModifiers: 'raceMortar',
    choiceNextStory: testExploration},
    {choiceText: 'Deadlander.',
    choiceModifiers: 'raceDeadlander',
    choiceNextStory: testExploration}],
    undefined    
)
let testClass = new storyElement(
    'choice',
    ['Now it is time to choose your class.', 'Choose wisely.', 'Or just clickity-clack.'],
    [{choiceText: 'Wraith.',
    choiceModifiers: 'classWraith',
    choiceNextStory: testRace},
    {choiceText: 'Poltergeist.',
    choiceModifiers: 'classPoltergeist',
    choiceNextStory: testRace},
    {choiceText: 'Guardian Spirit.',
    choiceModifiers: 'classGuardianSpirit',
    choiceNextStory: testRace}],
    undefined    
)
let testNaming = new storyElement(
    'form',
    ['Greetings!', 'Thank you for testing the game.', 'Please enter your name.'],
    undefined,
    testClass
)
// object for exporting
let storyElements = { testNaming, testClass, testDescription, testBattle, testItem, testChoice, testChoiceOutcome1, testChoiceOutcome2, testDescription, testAfterDialogue, testExploration, randomEvent1, randomEvent1a, randomEvent2, randomEvent2a, randomEvent2b }
// export


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOGNiMmFmMzgyMjUzMDM2ZmJlNzkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySEFBMEM7QUFDdEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxX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MEVBQTBFLEVBQUU7QUFDdEYsTUFBTSwrRUFBK0U7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esd0NBQXdDO0FBQ3hDLEtBQUs7QUFDTDtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLCtEQUFRLE9BQU8sK0RBQVEsT0FBTywrREFBUSxtQkFBbUIsK0RBQVE7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLHFDQUFxQztBQUNyQyxLQUFLO0FBQ0w7QUFDQSxxQ0FBcUM7QUFDckMsS0FBSztBQUNMO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSw4QkFBOEI7QUFDOUIsS0FBSztBQUNMO0FBQ0EsOEJBQThCO0FBQzlCLEtBQUs7QUFDTDtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vc3JjL2NvbXBfYXNzZXRzLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvY29tcF9iYXR0bGVfZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvY29tcF9kaWNlX2dhbWUuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL3NyYy9jb21wX2V2ZW50X2VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL3NyYy9jb21wX2h1ZC5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vc3JjL2NvbXBfaW52ZW50b3J5X3N5c3RlbS5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vc3JjL2NvbXBfb2JqZWN0c19hbmRfbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vc3JjL2NvbXBfcmFjZXMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL3NyYy9jb21wX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vc3JjL2NvbXBfc3RvcnlfZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvY29tcF9zdG9yeV9vYmplY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0tHTm9SZWdyZXRzU2tldGNoLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tcHVycGxlMTogIzBGMzMyNTsgXG4gICAgLS1wdXJwbGUyOiAjMUUyQjIxO1xuICAgIC0tcHVycGxlMzogIzJFNjM0RjsgXG4gICAgLS1ncmV5OiAjMjgyODI4O1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1ZUJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnVlQnO1xuICAgIGZvbnQtc2l6ZTogMTEwJTtcbn1cblxuLm1haW5NZW51Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1haW5NZW51IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDJmciAyZnIgM2ZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCA0NTBweCAxZnIgNzBweDtcbn1cblxuLnRvcF9iYXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMyk7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyA3O1xufVxuXG4uaW1hZ2Vfd2luZG93IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTEpO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBncmlkLXJvdzogMiAvIDQ7XG59XG5cbi5pbWFnZV93aW5kb3cgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEwMCU7XG59XG5cbi5pbWFnZV93aW5kb3cgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUzKTtcbn1cblxuLmltYWdlX3dpbmRvdyBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5tYWluX3dpbmRvdyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUxKTtcbiAgICBncmlkLWNvbHVtbjogMyAvIDU7XG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLm1haW5fd2luZG93IHAsIC5tYWluX3dpbmRvdyBidXR0b24sIC5tYWluX3dpbmRvdyBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcyBlYXNlLW91dCBmb3J3YXJkcztcbn1cblxuLm1haW5fd2luZG93IHNlbGVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnVlQnO1xuICAgIG1hcmdpbi1yaWdodDoxMDAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmlucHV0LmNoZWNrbWFya1t0eXBlPWNoZWNrYm94XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgb3V0bGluZTogdmFyKC0tZ3JleSkgc29saWQgMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbmlucHV0LmNoZWNrbWFya1t0eXBlPWNoZWNrYm94XTpjaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcbn1cblxub3B0aW9uIHtcbiAgICBmb250LWZhbWlseTogJ1ZUJztcbn1cblxuZGlhbG9nIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuXG4uaGlkZSB7XG4gICAgYW5pbWF0aW9uOiBmYWRlT3V0IDFzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuLm1haW5fd2luZG93IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1haW5fd2luZG93IC5jaG9pY2VCdXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWFpbl93aW5kb3cgYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xufVxuXG4ubWFpbl93aW5kb3cgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1ZUJztcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXB1cnBsZTEpO1xufVxuXG4ubWFpbl93aW5kb3cgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wdXJwbGUxKTtcbn1cblxuLm1haW5fd2luZG93IGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMyk7XG59XG5cbi5idXR0b25fd2luZG93IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gNztcbiAgICBncmlkLXJvdzogNDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1ZUJztcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMyk7XG59XG5cbi5idXR0b25fd2luZG93IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNTAlO1xufVxuXG4ubG9nIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTIpO1xuICAgIGdyaWQtY29sdW1uOiA1IC8gNjtcbn1cblxuLm1lbnUge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMik7XG4gICAgZ3JpZC1jb2x1bW46IDUgLyA2O1xufVxuXG5kaWFsb2cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTIpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDg1JTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4jY2xvc2VCdXR0b24sICNjbG9zZUJ1dHRvbjIge1xuICAgIG1hcmdpbi1sZWZ0OjQ1MHB4O1xuICAgIGZvbnQtc2l6ZTo4MCU7XG59XG5cbi5zdGF0c19tZXRlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwZnIgNTBmcjtcbn1cblxuI3N0YXRzX21ldGVyX2V2aWwge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbiNzdGF0c19saW5lX2V2aWwsICNzdGF0c19saW5lX3NvbWJlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4jc3RhdHNfbGluZV9iZW5ldm9sZW50LCAjc3RhdHNfbGluZV9zaWxseSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCA1ODBweCAyNTBweCA2NXB4O1xuICAgIH1cbiAgICBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gICAgLnRvcF9iYXIge1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgICAgIGdyaWQtcm93OiAxIC8gNTtcbiAgICB9XG4gICAgLmltYWdlX3dpbmRvdyB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxO1xuICAgICAgICBncmlkLXJvdzogMjtcbiAgICAgICAgZm9udC1zaXplOiA4MCU7XG4gICAgfVxuICAgICNleHBsb3JhdGlvbkJvYXJkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLm1haW5fd2luZG93IHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgICAgIGdyaWQtcm93OiAyO1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cbiAgICAuYnV0dG9uX3dpbmRvdyB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICAgICAgZ3JpZC1yb3c6IDQ7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgICAgICBnYXA6IDVweDtcbiAgICB9XG4gICAgLmJ1dHRvbl93aW5kb3cgYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgfVxuICAgIC5sb2cge1xuICAgICAgICBncmlkLWNvbHVtbjogMTtcbiAgICAgICAgZ3JpZC1yb3c6IDM7XG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIH1cbiAgICAubWVudSB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyO1xuICAgICAgICBncmlkLXJvdzogMztcbiAgICB9XG4gICAgZGlhbG9nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAyNzBweDtcbiAgICB9XG4gICAgI2Nsb3NlQnV0dG9uLCAjY2xvc2VCdXR0b24yIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6MjUwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTo4MCU7XG4gICAgfVxuICAgIC5tYWluX3dpbmRvdyBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICAgICAgd2lkdGg6MTIwcHg7XG4gICAgfVxufVxuXG4uZGVhdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsK0RBQXNEO0lBQ3RELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDBDQUEwQztJQUMxQyx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNo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ICAtLXB1cnBsZTE6ICMwRjMzMjU7IFxcbiAgICAtLXB1cnBsZTI6ICMxRTJCMjE7XFxuICAgIC0tcHVycGxlMzogIzJFNjM0RjsgXFxuICAgIC0tZ3JleTogIzI4MjgyODtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVlQnO1xcbiAgICBzcmM6IHVybCgnLi9LR05vUmVncmV0c1NrZXRjaC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnVlQnO1xcbiAgICBmb250LXNpemU6IDExMCU7XFxufVxcblxcbi5tYWluTWVudUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubWFpbk1lbnUgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxNDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDJmciAyZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggNDUwcHggMWZyIDcwcHg7XFxufVxcblxcbi50b3BfYmFyIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMyk7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNztcXG59XFxuXFxuLmltYWdlX3dpbmRvdyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTEpO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXG59XFxuXFxuLmltYWdlX3dpbmRvdyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbi5pbWFnZV93aW5kb3cgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMyk7XFxufVxcblxcbi5pbWFnZV93aW5kb3cgcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLm1haW5fd2luZG93IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMSk7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNTtcXG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbi5tYWluX3dpbmRvdyBwLCAubWFpbl93aW5kb3cgYnV0dG9uLCAubWFpbl93aW5kb3cgaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcyBlYXNlLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLm1haW5fd2luZG93IHNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnVlQnO1xcbiAgICBtYXJnaW4tcmlnaHQ6MTAwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmlucHV0LmNoZWNrbWFya1t0eXBlPWNoZWNrYm94XSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvdXRsaW5lOiB2YXIoLS1ncmV5KSBzb2xpZCAycHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5pbnB1dC5jaGVja21hcmtbdHlwZT1jaGVja2JveF06Y2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG5vcHRpb24ge1xcbiAgICBmb250LWZhbWlseTogJ1ZUJztcXG59XFxuXFxuZGlhbG9nIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgYW5pbWF0aW9uOiBmYWRlT3V0IDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXFxuLm1haW5fd2luZG93IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogOTAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubWFpbl93aW5kb3cgLmNob2ljZUJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubWFpbl93aW5kb3cgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUzKTtcXG59XFxuXFxuLm1haW5fd2luZG93IGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHVycGxlMSk7XFxufVxcblxcbi5tYWluX3dpbmRvdyBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1ZUJztcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXB1cnBsZTEpO1xcbn1cXG5cXG4ubWFpbl93aW5kb3cgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMyk7XFxufVxcblxcbi5idXR0b25fd2luZG93IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMyk7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNztcXG4gICAgZ3JpZC1yb3c6IDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnVlQnO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xcbn1cXG5cXG4uYnV0dG9uX3dpbmRvdyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDE1MCU7XFxufVxcblxcbi5sb2cge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMik7XFxuICAgIGdyaWQtY29sdW1uOiA1IC8gNjtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUyKTtcXG4gICAgZ3JpZC1jb2x1bW46IDUgLyA2O1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDg1JTtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG59XFxuXFxuI2Nsb3NlQnV0dG9uLCAjY2xvc2VCdXR0b24yIHtcXG4gICAgbWFyZ2luLWxlZnQ6NDUwcHg7XFxuICAgIGZvbnQtc2l6ZTo4MCU7XFxufVxcblxcbi5zdGF0c19tZXRlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwZnIgNTBmcjtcXG59XFxuXFxuI3N0YXRzX21ldGVyX2V2aWwge1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4jc3RhdHNfbGluZV9ldmlsLCAjc3RhdHNfbGluZV9zb21iZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXJvb247XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4jc3RhdHNfbGluZV9iZW5ldm9sZW50LCAjc3RhdHNfbGluZV9zaWxseSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggNTgwcHggMjUwcHggNjVweDtcXG4gICAgfVxcbiAgICBwOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIH1cXG4gICAgLnRvcF9iYXIge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyA1O1xcbiAgICB9XFxuICAgIC5pbWFnZV93aW5kb3cge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgICAgICBncmlkLXJvdzogMjtcXG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xcbiAgICB9XFxuICAgICNleHBsb3JhdGlvbkJvYXJkIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIC5tYWluX3dpbmRvdyB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgICAgIGdyaWQtcm93OiAyO1xcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgfVxcbiAgICAuYnV0dG9uX3dpbmRvdyB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgICAgICBncmlkLXJvdzogNDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgfVxcbiAgICAuYnV0dG9uX3dpbmRvdyBidXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiA5MCU7XFxuICAgIH1cXG4gICAgLmxvZyB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgICAgIGdyaWQtcm93OiAzO1xcbiAgICAgICAgZm9udC1zaXplOiA4MCU7XFxuICAgIH1cXG4gICAgLm1lbnUge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgICAgICBncmlkLXJvdzogMztcXG4gICAgfVxcbiAgICBkaWFsb2cge1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNzBweDtcXG4gICAgfVxcbiAgICAjY2xvc2VCdXR0b24sICNjbG9zZUJ1dHRvbjIge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6MjUwcHg7XFxuICAgICAgICBmb250LXNpemU6ODAlO1xcbiAgICB9XFxuICAgIC5tYWluX3dpbmRvdyBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgICAgIHdpZHRoOjEyMHB4O1xcbiAgICB9XFxufVxcblxcbi5kZWF0aCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xubW9kdWxlLmV4cG9ydHMub25jZSA9IG9uY2U7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5mdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBfZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiBfZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gX2dldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBvbmNlKGVtaXR0ZXIsIG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmdW5jdGlvbiBlcnJvckxpc3RlbmVyKGVycikge1xuICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihuYW1lLCByZXNvbHZlcik7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlcigpIHtcbiAgICAgIGlmICh0eXBlb2YgZW1pdHRlci5yZW1vdmVMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGVycm9yTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG5cbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgcmVzb2x2ZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICBpZiAobmFtZSAhPT0gJ2Vycm9yJykge1xuICAgICAgYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgZXJyb3JMaXN0ZW5lciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGhhbmRsZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCAnZXJyb3InLCBoYW5kbGVyLCBmbGFncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIGxpc3RlbmVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgZW1pdHRlci5vbmNlKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1pdHRlci5vbihuYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBFdmVudFRhcmdldCBkb2VzIG5vdCBoYXZlIGBlcnJvcmAgZXZlbnQgc2VtYW50aWNzIGxpa2UgTm9kZVxuICAgIC8vIEV2ZW50RW1pdHRlcnMsIHdlIGRvIG5vdCBsaXN0ZW4gZm9yIGBlcnJvcmAgZXZlbnRzIGhlcmUuXG4gICAgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZ1bmN0aW9uIHdyYXBMaXN0ZW5lcihhcmcpIHtcbiAgICAgIC8vIElFIGRvZXMgbm90IGhhdmUgYnVpbHRpbiBgeyBvbmNlOiB0cnVlIH1gIHN1cHBvcnQgc28gd2VcbiAgICAgIC8vIGhhdmUgdG8gZG8gaXQgbWFudWFsbHkuXG4gICAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgd3JhcExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIGxpc3RlbmVyKGFyZyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwiZW1pdHRlclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBFdmVudEVtaXR0ZXIuIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBlbWl0dGVyKTtcbiAgfVxufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBpbXBvcnRpbmdcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHRyZWVJbWcgZnJvbSAnLi90cmVlLnBuZydcbmltcG9ydCBwZXJzb25JbWcgZnJvbSAnLi9wZXJzb24ucG5nJztcbi8vIGluaXRpYWxpemUgaW1hZ2VzXG5sZXQgaWNvblRyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgaWNvblRyZWUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2hlaWdodDoxNXB4O3dpZHRoOjE1cHg7Jyk7IGljb25UcmVlLnNyYyA9IGAke3RyZWVJbWd9YDtcbmxldCBpY29uVHJlZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgaWNvblRyZWUyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6MTVweDt3aWR0aDoxNXB4OycpOyBpY29uVHJlZTIuc3JjID0gYCR7dHJlZUltZ31gO1xubGV0IGljb25UcmVlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyBpY29uVHJlZTMuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2hlaWdodDoxNXB4O3dpZHRoOjE1cHg7Jyk7IGljb25UcmVlMy5zcmMgPSBgJHt0cmVlSW1nfWA7XG5sZXQgaWNvblBlcnNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyBpY29uUGVyc29uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnaGVpZ2h0OjE1cHg7d2lkdGg6MTVweDsnKTsgaWNvblBlcnNvbi5zcmMgPSBgJHtwZXJzb25JbWd9YDtcbi8vIGFycmF5IG9mIGltYWdlc1xubGV0IGljb25zID0geyBpY29uVHJlZSwgaWNvblRyZWUyLCBpY29uVHJlZTMsIGljb25QZXJzb24gfVxuLy8gZXhwb3J0IGltYWdlc1xuZXhwb3J0IHtpY29uc30iLCIvLyBpbXBvcnQ6IElzQmF0dGxlT3ZlciwgaHVkLCBtb25zdGVyIG9iamVjdHMsIGNoYXIxLCBjbGFzc2VzXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCB7IFxuICAgIHRvcF9iYXIsXG4gICAgbG9nX3dpbmRvdyxcbiAgICBpbWFnZV93aW5kb3csXG4gICAgbWFpbl93aW5kb3csXG59IGZyb20gJy4vY29tcF9odWQnO1xuaW1wb3J0IHsgXG4gICAgSmFuaXRvcixcbiAgICBBY2NvdW50YW50LFxuICAgIERhbmNlcixcbiAgICBjaGFyMSxcbn0gZnJvbSAnLi9jb21wX29iamVjdHNfYW5kX21ldGhvZHMnO1xuY29uc3QgZXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnLi9jb21wX2V2ZW50X2VtaXR0ZXIuanMnKTtcbi8vIGltcG9ydGFudCB2YXJzXG5sZXQgZW5lbWllcyA9IFtdO1xubGV0IGVuZW15VG9BdHRhY2s7XG4vL2J1dHRvbiBlZmZlY3RzXG5sZXQgYXR0YWNrX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdHRhY2tCdXR0b24nKTtcbmF0dGFja19idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjaGFyMS5hdHRhY2soZW5lbXlUb0F0dGFjaykpO1xuLy8gY2hhbmdlIGVuZW1pZXMgZnVuY3Rpb25cbmZ1bmN0aW9uIGlzSGVEZWFkKGRhbWFnZWRFbmVteSkge1xuICAgIGlmIChkYW1hZ2VkRW5lbXkuY3VycmVudEhQIDw9IDApIHtcbiAgICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IGAke2RhbWFnZWRFbmVteS5uYW1lfSBkaWVzIWA7XG4gICAgICAgIGVudHJ5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjp5ZWxsb3cnKTtcbiAgICAgICAgbG9nX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgICAgIGxldCBkZWFkTW9uc3RlcklEID0gZW5lbWllcy5maW5kSW5kZXgoaSA9PiBpLm5hbWUgPT0gZGFtYWdlZEVuZW15Lm5hbWUpO1xuICAgICAgICBlbmVtaWVzLnNwbGljZShkZWFkTW9uc3RlcklELCAxKTtcbiAgICAgICAgaWYgKGVuZW1pZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KCdiYXR0bGU6d2luJyk7XG4gICAgICAgICAgICAvLyBpc0JhdHRsZU92ZXIoJ3dpbicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpc1BsYXllckRlYWQoKTtcbn1cbmZ1bmN0aW9uIGlzUGxheWVyRGVhZCgpIHtcbiAgICBpZiAoY2hhcjEuY3VycmVudEhQIDw9IDApIHtcbiAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoJ2JhdHRsZTpsb3NlJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFpbl93aW5kb3cuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChtYWluX3dpbmRvdy5jaGlsZHJlbltpXS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgICAgICBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZChtYWluX3dpbmRvdy5jaGlsZHJlbltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpbWFnZV93aW5kb3cuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChpbWFnZV93aW5kb3cuY2hpbGRyZW5bal0udGFnTmFtZS50b0xvd2VyQ2FzZSgpID09ICdidXR0b24nKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2Vfd2luZG93LnJlbW92ZUNoaWxkKGltYWdlX3dpbmRvdy5jaGlsZHJlbltqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUodG9wX2Jhci5maXJzdENoaWxkKSB7dG9wX2Jhci5yZW1vdmVDaGlsZCh0b3BfYmFyLmZpcnN0Q2hpbGQpfTtcbiAgICAgICAgbGV0IGRlYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlYXRoLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgcG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTt6LWluZGV4OjUwMDtvdmVyZmxvdzpoaWRkZW47YCk7XG4gICAgICAgIGRlYXRoLmNsYXNzTGlzdC5hZGQoJ2RlYXRoJyk7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWF0aCk7XG4gICAgfVxufVxuLy8gdXBkYXRlIGVuZW1pZXMgbGlzdFxuZnVuY3Rpb24gbGlzdEVuZW1pZXMoKSB7XG4gICAgbGV0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGxvcmF0aW9uQm9hcmQnKTtcbiAgICBBcnJheS5mcm9tKGltYWdlX3dpbmRvdy5jaGlsZHJlbikuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGlmIChlbnRyeSAhPT0gYm9hcmQpIHtcbiAgICAgICAgICAgIGltYWdlX3dpbmRvdy5yZW1vdmVDaGlsZChlbnRyeSk7XG4gICAgICAgIH0gXG4gICAgfSlcbiAgICBlbmVtaWVzLmZvckVhY2goKHRoaXNFbmVteSkgPT4ge1xuICAgICAgICBsZXQgZW5lbXlfZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxldCBlbmVteV9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZW5lbXlfZW50cnkudGV4dENvbnRlbnQgPSBgJHt0aGlzRW5lbXkubmFtZX0gaXMgdGhlcmUuIEl0IGhhcyBBQyBvZiAke3RoaXNFbmVteS5hcm1vckNsYXNzfSwgYXR0YWNrIGJvbnVzIG9mICR7dGhpc0VuZW15Lm1vbnN0ZXJBdHRhY2tCb251c30gYW5kIEhQIG9mICR7dGhpc0VuZW15LmN1cnJlbnRIUH0vJHt0aGlzRW5lbXkubWF4SFB9LmBcbiAgICAgICAgZW5lbXlfYnV0dG9uLnRleHRDb250ZW50ID0gYFNlbGVjdGA7XG4gICAgICAgIGVuZW15X2J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpc0VuZW15Lm5hbWUpO1xuICAgICAgICBlbmVteV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZWxlY3RFbmVteSh0aGlzRW5lbXkpKTtcbiAgICAgICAgaW1hZ2Vfd2luZG93LmFwcGVuZENoaWxkKGVuZW15X2VudHJ5KTtcbiAgICAgICAgaW1hZ2Vfd2luZG93LmFwcGVuZENoaWxkKGVuZW15X2J1dHRvbik7XG4gICAgfSk7XG59XG4vLyBhdHRhY2tpbmdcbmZ1bmN0aW9uIHNlbGVjdEVuZW15KGVuZW15KSB7XG4gICAgZW5lbXlUb0F0dGFjayA9IGVuZW15O1xuICAgIHRvcF9iYXIudGV4dENvbnRlbnQgPSBgU2VsZWN0ZWQgZW5lbXk6ICR7ZW5lbXkubmFtZX0uYDtcbn1cbi8vIHNwZWNpYWwgYnV0dG9uIHRoYXQgc3dpdGNoZXMgYXR0YWNrIG1vZGVzXG5sZXQgSmFuaXRvclNwZWNpYWxzID0gWydTcGlyaXQgU2xhbScsICdTcGVjdHJhbCBCbGFkZScsICdXcmF0aGZ1bCBWaXNhZ2UnXTtcbmxldCBBY2NvdW50YW50U3BlY2lhbHMgPSBbJ1NwaXJpdCBTbGFtJywgJ1dpdGhlcmluZyBCb2x0JywgJ0Vzc2VuY2UgRHJhaW4nXTtcbmxldCBEYW5jZXJTcGVjaWFscyA9IFsnU3Bpcml0IFNsYW0nLCAnU3Bpcml0IEJsZXNzaW5nJywgJ0JpbmQgb2YgdGhlIEd1YXJkaWFuJ107XG5sZXQgYXR0YWNrSW5kZXggPSAwO1xubGV0IHBsYXllckNsYXNzID0gJyc7XG5ldmVudEVtaXR0ZXIub24oJ1dyYWl0aCcsICgpID0+IHtcbiAgICBwbGF5ZXJDbGFzcyA9ICdXcmFpdGgnO1xufSk7XG5ldmVudEVtaXR0ZXIub24oJ1BvbHRlcmdlaXN0JywgKCkgPT4ge1xuICAgIHBsYXllckNsYXNzID0gJ1BvbHRlcmdlaXN0Jztcbn0pO1xuZXZlbnRFbWl0dGVyLm9uKCdHdWFyZGlhblNwaXJpdCcsICgpID0+IHtcbiAgICBwbGF5ZXJDbGFzcyA9ICdHdWFyZGlhblNwaXJpdCc7XG59KTtcbmZ1bmN0aW9uIHN3aXRjaEF0dGFjayhjaGFyKSB7XG4gICAgaWYgKHBsYXllckNsYXNzICE9PSAnJykge1xuICAgICAgICBpZiAoY2hhciBpbnN0YW5jZW9mIEphbml0b3IpIHtcbiAgICAgICAgICAgIGF0dGFja0luZGV4ID0gKGF0dGFja0luZGV4ICsgMSkgJSBKYW5pdG9yU3BlY2lhbHMubGVuZ3RoO1xuICAgICAgICAgICAgY2hhci5zcGVjaWFsQXR0YWNrID0gSmFuaXRvclNwZWNpYWxzW2F0dGFja0luZGV4XTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyIGluc3RhbmNlb2YgQWNjb3VudGFudCkge1xuICAgICAgICAgICAgYXR0YWNrSW5kZXggPSAoYXR0YWNrSW5kZXggKyAxKSAlIEFjY291bnRhbnRTcGVjaWFscy5sZW5ndGg7XG4gICAgICAgICAgICBjaGFyLnNwZWNpYWxBdHRhY2sgPSBBY2NvdW50YW50U3BlY2lhbHNbYXR0YWNrSW5kZXhdO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXIgaW5zdGFuY2VvZiBEYW5jZXIpIHtcbiAgICAgICAgICAgIGF0dGFja0luZGV4ID0gKGF0dGFja0luZGV4ICsgMSkgJSBEYW5jZXJTcGVjaWFscy5sZW5ndGg7XG4gICAgICAgICAgICBjaGFyLnNwZWNpYWxBdHRhY2sgPSBEYW5jZXJTcGVjaWFsc1thdHRhY2tJbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IGBZb3UgZ2V0IHJlYWR5IHRvIHVzZSAke2NoYXIuc3BlY2lhbEF0dGFja30uYDtcbiAgICAgICAgbG9nX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgfTtcbn07XG4vL3N0YXJ0IGJhdHRsZVxuZnVuY3Rpb24gc3RhcnRCYXR0bGUoLi4uZW5jb3VudGVyRW5lbWllcykge1xuICAgIGVuY291bnRlckVuZW1pZXMuZm9yRWFjaCgodGhpc0VuZW15KSA9PiB7XG4gICAgICAgIHRoaXNFbmVteS5jdXJyZW50SFAgPSB0aGlzRW5lbXkubWF4SFA7XG4gICAgfSk7XG4gICAgZW5lbWllcyA9IGVuY291bnRlckVuZW1pZXM7XG4gICAgbGlzdEVuZW1pZXMoKTtcbn1cbi8vIGV4cG9ydFxuZXhwb3J0IHtcbiAgICBpc0hlRGVhZCxcbiAgICBpc1BsYXllckRlYWQsXG4gICAgbGlzdEVuZW1pZXMsXG4gICAgc3dpdGNoQXR0YWNrLFxuICAgIHN0YXJ0QmF0dGxlLFxuICAgIGVuZW1pZXMsXG4gICAgZW5lbXlUb0F0dGFja1xufSIsIi8vIGluaXRpYWxpemUgaHVkXG5sZXQgbWFpbl93aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl93aW5kb3cnKTtcbi8vIGluaXRpYWxpemUgdmFyc1xubGV0IGRpZTEgPSB7cmVzdWx0OiAwLCByZVJvbGxGbGFnOiBmYWxzZX07XG5sZXQgZGllMiA9IHtyZXN1bHQ6IDAsIHJlUm9sbEZsYWc6IGZhbHNlfTtcbmxldCBkaWUzID0ge3Jlc3VsdDogMCwgcmVSb2xsRmxhZzogZmFsc2V9O1xubGV0IGRpZTQgPSB7cmVzdWx0OiAwLCByZVJvbGxGbGFnOiBmYWxzZX07XG5sZXQgZGllNSA9IHtyZXN1bHQ6IDAsIHJlUm9sbEZsYWc6IGZhbHNlfTtcbmxldCBkaWU2ID0ge3Jlc3VsdDogMCwgcmVSb2xsRmxhZzogZmFsc2V9O1xubGV0IHBsYXllckhhbmQgPSBbZGllMSwgZGllMiwgZGllMywgZGllNCwgZGllNSwgZGllNl07XG5sZXQgb3Bwb25lbnRIYW5kID0gW107XG5sZXQgY3VycmVudEJpZCA9IHsgcGxheWVyOiAnJywgbnVtYmVyT2ZEaWNlOiAwLCBkb3RzOiAwIH07XG5sZXQgYWNjdXNhdGlvbiA9IHsgYWNjdXNlcjogJycsIG51bWJlck9mRGljZTogMCwgZG90czogMCB9O1xubGV0IGV4YW1wbGVMaW5lcyA9IHtcbiAgICBvcGVuTGluZTogYENvbWUgb24sIGxldCdzIHBsYXlgLFxuICAgIGJpZExpbmU6IGBMdWNrIGlzIG9uIG15IHNpZGUgdG9kYXlgLFxuICAgIGJsdWZmTGluZTogYEkgaGF2ZSBnb29kIGRpY2UgdG9kYXksIGtpZGAsXG4gICAgYWNjdXNlTGluZTogYFllYWgsIEkgZG9uJ3QgdGhpbmsgc29gLFxuICAgIHdpbkxpbmU6IGBHb3RjaGEsIGtpZGAsXG4gICAgbG9zZUxpbmU6IGBEYXJuLiBZb3UgZ290IGx1Y2t5LCBwYWxgXG59XG5mdW5jdGlvbiBzdGFydERpY2VHYW1lKG9wcG9uZW50TmFtZSwgbGluZXMpIHtcbiAgICAvLyBjbGVhciBtYWluIHdpbmRvd1xuICAgIHdoaWxlIChtYWluX3dpbmRvdy5maXJzdENoaWxkKSB7IG1haW5fd2luZG93LnJlbW92ZUNoaWxkKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIH07XG4gICAgLy8gaW5zdHJ1Y3Rpb25zXG4gICAgbGV0IGluc3RydWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluc3RydWN0aW9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjp5ZWxsb3cnKTtcbiAgICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9ICdbWW91IGFyZSBhYm91dCB0byBwbGF5IEZhbHNlY3ViZXMuIEhlcmUgYXJlIHRoZSBpbnN0cnVjdGlvbnMuXSc7XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb24pO1xuICAgIC8vIHN0YXJ0IGdhbWUgYnV0dG9uXG4gICAgbGV0IHN0YXJ0RGljZUdhbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydERpY2VHYW1lQnV0dG9uLnRleHRDb250ZW50ID0gYExldCdzIHBsYXkgRmFsc2VjdWJlcyFgXG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoc3RhcnREaWNlR2FtZUJ1dHRvbik7XG4gICAgc3RhcnREaWNlR2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZmFsc2VDdWJlcyhvcHBvbmVudE5hbWUsIGxpbmVzKTtcbiAgICAgICAgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQoc3RhcnREaWNlR2FtZUJ1dHRvbik7XG4gICAgfSk7XG59XG4vLyBmdW5jdGlvbiB0aGF0IHN0YXJ0cyB0aGUgZ2FtZVxuZnVuY3Rpb24gZmFsc2VDdWJlcyhvcHBvbmVudE5hbWUsIGxpbmVzKSB7XG4gICAgLy8gb3BlbkxpbmUgZnJvbSB0aGUgb3Bwb25lbnRcbiAgICBsZXQgb3BlbkxpbmVFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBvcGVuTGluZUVudHJ5LnRleHRDb250ZW50ID0gYCR7b3Bwb25lbnROYW1lfTogJHtsaW5lcy5vcGVuTGluZX1gO1xuICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKG9wZW5MaW5lRW50cnkpO1xuICAgIC8vIHJvbGwgZGljZSBidXR0b25cbiAgICBsZXQgcm9sbERpY2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByb2xsRGljZUJ1dHRvbi50ZXh0Q29udGVudCA9IGBSb2xsIHRoZSBkaWNlLmBcbiAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChyb2xsRGljZUJ1dHRvbik7XG4gICAgcm9sbERpY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1haW5fd2luZG93LnJlbW92ZUNoaWxkKHJvbGxEaWNlQnV0dG9uKTtcbiAgICAgICAgcm9sbFBoYXNlKG9wcG9uZW50TmFtZSwgbGluZXMpXG4gICAgfSk7XG59XG4vLyByb2xsaW5nIDZkNFxuZnVuY3Rpb24gcm9sbDZkNFBsYXllcigpIHtcbiAgICBkaWUxLnJlc3VsdCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpO1xuICAgIGRpZTIucmVzdWx0ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMSk7XG4gICAgZGllMy5yZXN1bHQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTtcbiAgICBkaWU0LnJlc3VsdCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpO1xuICAgIGRpZTUucmVzdWx0ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMSk7XG4gICAgZGllNi5yZXN1bHQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTsgICAgXG4gICAgcmV0dXJuIFtkaWUxLCBkaWUyLCBkaWUzLCBkaWU0LCBkaWU1LCBkaWU2XVxufVxuZnVuY3Rpb24gcm9sbDZkNE9wcG9uZW50KCkge1xuICAgIGxldCBvcHBvbmVudERpZTEgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTtcbiAgICBsZXQgb3Bwb25lbnREaWUyID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMSk7XG4gICAgbGV0IG9wcG9uZW50RGllMyA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpO1xuICAgIGxldCBvcHBvbmVudERpZTQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTtcbiAgICBsZXQgb3Bwb25lbnREaWU1ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMSk7XG4gICAgbGV0IG9wcG9uZW50RGllNiA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpOyAgICBcbiAgICByZXR1cm4gW29wcG9uZW50RGllMSwgb3Bwb25lbnREaWUyLCBvcHBvbmVudERpZTMsIG9wcG9uZW50RGllNCwgb3Bwb25lbnREaWU1LCBvcHBvbmVudERpZTZdXG59XG5mdW5jdGlvbiByb2xsMWQ0KCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTtcbn1cbi8vIHJvbGxpbmcgcGhhc2VcbmZ1bmN0aW9uIHJvbGxQaGFzZShvcHBvbmVudE5hbWUsIGxpbmVzKSB7XG4gICAgLy8gcGxheWVySGFuZCBhbmQgb3Bwb25lbnRIYW5kIGFycmF5cyBnZXQgYXNzaWduZWQgc2l4IGludGVnZXJzXG4gICAgcm9sbDZkNFBsYXllcigpO1xuICAgIG9wcG9uZW50SGFuZCA9IHJvbGw2ZDRPcHBvbmVudCgpO1xuICAgIC8vIGEgbWVzc2FnZSBwb3BzIG91dDogJ1lvdSByb2xsZWQ6IHgsIHksIGEsIGIsIGMsIGQnXG4gICAgbGV0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IGBZb3Ugcm9sbGVkOiAke2RpZTEucmVzdWx0fSwgJHtkaWUyLnJlc3VsdH0sICR7ZGllMy5yZXN1bHR9LCAke2RpZTQucmVzdWx0fSwgJHtkaWU1LnJlc3VsdH0sICR7ZGllNi5yZXN1bHR9LmA7XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gICAgLy8gYmVsb3cgZWFjaCBudW1iZXIgYSBjaGVja21hcmsgZm9ybVxuICAgIGxldCBwbGF5ZXJSZXJvbGxGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKHBsYXllclJlcm9sbEZvcm0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIGxldCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja21hcmsuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNoZWNrbWFyay5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7aSsxfWApO1xuICAgICAgICBjaGVja21hcmsuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7aSsxfWApO1xuICAgICAgICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZCgnY2hlY2ttYXJrJyk7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYCR7aSsxfWApO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGBEaWNlICR7aSsxfWA7XG4gICAgICAgIHBsYXllclJlcm9sbEZvcm0uYXBwZW5kQ2hpbGQoY2hlY2ttYXJrKTtcbiAgICAgICAgcGxheWVyUmVyb2xsRm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGxldCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgIHBsYXllclJlcm9sbEZvcm0uYXBwZW5kQ2hpbGQoYnIpO1xuICAgIH1cbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21hcmdpbi10b3A6IDEwcHg7Jyk7XG4gICAgcGxheWVyUmVyb2xsRm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgIC8vIG9wcG9uZW50IHJlLXJvbGxzIGxvZ2ljXG4gICAgbGV0IGFsbE9wcG9uZW50MXMgPSBvcHBvbmVudEhhbmQuZmlsdGVyKGkgPT4gaSA9PSAxKTtcbiAgICBsZXQgYWxsT3Bwb25lbnQycyA9IG9wcG9uZW50SGFuZC5maWx0ZXIoaSA9PiBpID09IDIpO1xuICAgIGxldCBhbGxPcHBvbmVudDNzID0gb3Bwb25lbnRIYW5kLmZpbHRlcihpID0+IGkgPT0gMyk7XG4gICAgbGV0IGFsbE9wcG9uZW50NHMgPSBvcHBvbmVudEhhbmQuZmlsdGVyKGkgPT4gaSA9PSA0KTtcbiAgICBsZXQgb3Bwb25lbnQxc09iamVjdCA9IHsgbnVtYmVyOiBhbGxPcHBvbmVudDFzLmxlbmd0aCwgZG90czogMSB9O1xuICAgIGxldCBvcHBvbmVudDJzT2JqZWN0ID0geyBudW1iZXI6IGFsbE9wcG9uZW50MnMubGVuZ3RoLCBkb3RzOiAyIH07XG4gICAgbGV0IG9wcG9uZW50M3NPYmplY3QgPSB7IG51bWJlcjogYWxsT3Bwb25lbnQzcy5sZW5ndGgsIGRvdHM6IDMgfTtcbiAgICBsZXQgb3Bwb25lbnQ0c09iamVjdCA9IHsgbnVtYmVyOiBhbGxPcHBvbmVudDRzLmxlbmd0aCwgZG90czogNCB9O1xuICAgIGxldCBvcHBvbmVudE9iamVjdHMgPSBbb3Bwb25lbnQxc09iamVjdCwgb3Bwb25lbnQyc09iamVjdCwgb3Bwb25lbnQzc09iamVjdCwgb3Bwb25lbnQ0c09iamVjdF07XG4gICAgY29uc29sZS5sb2coYE9yaWcgb3Bwb25lbnRIYW5kOiAke29wcG9uZW50SGFuZH1gKTtcbiAgICBsZXQgb3Bwb25lbnRPYmplY3RzU29ydGVkID0gb3Bwb25lbnRPYmplY3RzLnNvcnQoKGEsIGIpID0+IChhLm51bWJlciA+IGIubnVtYmVyKSA/IC0xIDogMSk7XG4gICAgbGV0IG9wcG9uZW50TGFzdERvdHM7XG4gICAgbGV0IG9wcG9uZW50U2Vjb25kVG9MYXN0RG90cztcbiAgICBpZiAob3Bwb25lbnRPYmplY3RzU29ydGVkWzNdLm51bWJlciAhPT0gMCkge1xuICAgICAgICBvcHBvbmVudExhc3REb3RzID0gb3Bwb25lbnRPYmplY3RzU29ydGVkWzNdLmRvdHM7XG4gICAgICAgIGNvbnNvbGUubG9nKGBCYWQgZG90czogJHtvcHBvbmVudExhc3REb3RzfWApO1xuICAgICAgICBvcHBvbmVudFNlY29uZFRvTGFzdERvdHMgPSBvcHBvbmVudE9iamVjdHNTb3J0ZWRbMl0uZG90cztcbiAgICAgICAgY29uc29sZS5sb2coYFNlY29uZCBiYWQgZG90czogJHtvcHBvbmVudFNlY29uZFRvTGFzdERvdHN9YCk7ICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIG9wcG9uZW50TGFzdERvdHMgPSBvcHBvbmVudE9iamVjdHNTb3J0ZWRbMl0uZG90cztcbiAgICAgICAgY29uc29sZS5sb2coYEJhZCBkb3RzOiAke29wcG9uZW50TGFzdERvdHN9YCk7XG4gICAgICAgIG9wcG9uZW50U2Vjb25kVG9MYXN0RG90cyA9IG9wcG9uZW50T2JqZWN0c1NvcnRlZFsxXS5kb3RzO1xuICAgICAgICBjb25zb2xlLmxvZyhgU2Vjb25kIGJhZCBkb3RzOiAke29wcG9uZW50U2Vjb25kVG9MYXN0RG90c31gKTtcbiAgICB9XG4gICAgbGV0IG9wcG9uZW50SGFuZFRvS2VlcCA9IG9wcG9uZW50SGFuZC5maWx0ZXIoaSA9PiAoaSAhPT0gb3Bwb25lbnRMYXN0RG90cyAmJiBpICE9PSBvcHBvbmVudFNlY29uZFRvTGFzdERvdHMpKTtcbiAgICAvLyBpZiB3ZSByZW1vdmUgMyBkaWNlXG4gICAgLy8gaG93TWFueURpY2VUb1JlUm9sbCA9IDYgLSAzID0gM1xuICAgIC8vIGkgPSAwLCBpID0gMSwgaSA9IDIsIHJ1bnMgdGhyZWUgdGltZXNcbiAgICB3aGlsZSAob3Bwb25lbnRIYW5kVG9LZWVwLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgbGV0IG5ld09wcG9uZW50Um9sbCA9IHJvbGwxZDQoKTtcbiAgICAgICAgb3Bwb25lbnRIYW5kVG9LZWVwLnB1c2gobmV3T3Bwb25lbnRSb2xsKTtcbiAgICB9XG4gICAgb3Bwb25lbnRIYW5kID0gb3Bwb25lbnRIYW5kVG9LZWVwO1xuICAgIGNvbnNvbGUubG9nKGBOZXcgT3Bwb25lbnQgSGFuZDogJHtvcHBvbmVudEhhbmR9YCk7XG4gICAgLy8gYmVsb3cgdGhhdCwgYSBzdWJtaXQvcmVyb2xsXG4gICAgLy8gcGxheWVySGFuZCBpcyBlbXB0aWVkXG4gICAgLy8gbm9uLXNlbGVjdGVkIGRpY2UgZ2V0IGFkZGVkIGJhY2sgdG8gcGxheWVySGFuZFxuICAgIC8vIGZvciB0aGUgaW5kZXhlcyBvZiB0aGUgc2VsZWN0ZWQgZGllLCB3aGF0IGlzIGFkZGVkIHRvIHBsYXllckhhbmQgaXMgdGhlIHJldHVybiBvZiByZVJvbGxEaWVcbiAgICBwbGF5ZXJSZXJvbGxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiJHtpKzF9XCJgKTtcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgLy8gMSwgMiwgWzNdLCBbNF0sIDEsIDJcbiAgICAgICAgICAgICAgICBwbGF5ZXJIYW5kW2ldLnJlUm9sbEZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBqID0gMDtcbiAgICAgICAgd2hpbGUgKGogPCA2KSAge1xuICAgICAgICAgICAgLy8gMSwgMiwgWzNdLCBbNF0sIDEsIDJcbiAgICAgICAgICAgIGlmIChwbGF5ZXJIYW5kW2pdLnJlUm9sbEZsYWcgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHBsYXllckhhbmQuc3BsaWNlKGosIDEpO1xuICAgICAgICAgICAgICAgIGxldCBuZXdEaWUgPSB7cmVzdWx0OiByb2xsMWQ0KCksIHJlUm9sbEZsYWc6IGZhbHNlfTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJIYW5kLnB1c2gobmV3RGllKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJpZFBoYXNlKG9wcG9uZW50TmFtZSwgbGluZXMpO1xuICAgIH0pO1xufVxuLy8gYmlkZGluZyBwaGFzZVxuZnVuY3Rpb24gYmlkUGhhc2Uob3Bwb25lbnROYW1lLCBsaW5lcykge1xuLy8gd3JpdGVzIGEgbWVzc2FnZS4geW91IHJlcm9sbGVkIGRpY2UuIGFmdGVyIHJlLXJvbGxzLCB5b3VyIG5ldyBoYW5kIGlzOlxuICAgIGxldCByZVJvbGxNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGlmIChjdXJyZW50QmlkLm51bWJlck9mRGljZSA9PSAwKSB7XG4gICAgICAgIHdoaWxlIChtYWluX3dpbmRvdy5maXJzdENoaWxkKSB7IG1haW5fd2luZG93LnJlbW92ZUNoaWxkKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIH07XG4gICAgICAgIHJlUm9sbE1lc3NhZ2UudGV4dENvbnRlbnQgPSBgWW91IHJlLXJvbGwgc29tZSBkaWNlLmBcbiAgICAgICAgbGV0IHJlUm9sbE1lc3NhZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICByZVJvbGxNZXNzYWdlMi50ZXh0Q29udGVudCA9IGBZb3VyIG5ldyBoYW5kIGlzOiAke3BsYXllckhhbmRbMF0ucmVzdWx0fSwgJHtwbGF5ZXJIYW5kWzFdLnJlc3VsdH0sICR7cGxheWVySGFuZFsyXS5yZXN1bHR9LCAke3BsYXllckhhbmRbM10ucmVzdWx0fSwgJHtwbGF5ZXJIYW5kWzRdLnJlc3VsdH0sICR7cGxheWVySGFuZFs1XS5yZXN1bHR9LiBUaW1lIGZvciB0aGUgZmlyc3QgYmx1ZmZpbmcgcGhhc2UuYDtcbiAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQocmVSb2xsTWVzc2FnZSk7XG4gICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKHJlUm9sbE1lc3NhZ2UyKTtcbiAgICAgICAgcGxheWVyQmx1ZmZzKG9wcG9uZW50TmFtZSwgbGluZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlUm9sbE1lc3NhZ2UudGV4dENvbnRlbnQgPSBgWW91ciBoYW5kIGlzOiAke3BsYXllckhhbmRbMF0ucmVzdWx0fSwgJHtwbGF5ZXJIYW5kWzFdLnJlc3VsdH0sICR7cGxheWVySGFuZFsyXS5yZXN1bHR9LCAke3BsYXllckhhbmRbM10ucmVzdWx0fSwgJHtwbGF5ZXJIYW5kWzRdLnJlc3VsdH0sICR7cGxheWVySGFuZFs1XS5yZXN1bHR9LiBEbyB5b3Ugd2FudCB0byBibHVmZiwgb3IgYWNjdXNlIHRoZSBvcHBvbmVudD9gO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChyZVJvbGxNZXNzYWdlKTtcbiAgICAgICAgLy8gZGVjaWRlIHdoYXQgdG8gZG8gaGVyZSFcbiAgICAgICAgbGV0IHdoYXRUb0RvQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZCh3aGF0VG9Eb0J1dHRvbnMpO1xuICAgICAgICBsZXQgYmx1ZmZCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYmx1ZmZCdXR0b24udGV4dENvbnRlbnQgPSAnQmx1ZmYnO1xuICAgICAgICBibHVmZkJ1dHRvbi5zdHlsZS5tYXJnaW5SaWdodCA9ICc1cHgnO1xuICAgICAgICB3aGF0VG9Eb0J1dHRvbnMuYXBwZW5kQ2hpbGQoYmx1ZmZCdXR0b24pO1xuICAgICAgICBsZXQgYWNjdXNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFjY3VzZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdBY2N1c2UnO1xuICAgICAgICB3aGF0VG9Eb0J1dHRvbnMuYXBwZW5kQ2hpbGQoYWNjdXNlQnV0dG9uKTtcbiAgICAgICAgYmx1ZmZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZCh3aGF0VG9Eb0J1dHRvbnMpO1xuICAgICAgICAgICAgcGxheWVyQmx1ZmZzKG9wcG9uZW50TmFtZSwgbGluZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgYWNjdXNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQod2hhdFRvRG9CdXR0b25zKTtcbiAgICAgICAgICAgIGFjY3VzYXRpb24uYWNjdXNlciA9ICdQbGF5ZXInO1xuICAgICAgICAgICAgYWNjdXNhdGlvbi5udW1iZXJPZkRpY2UgPSBjdXJyZW50QmlkLm51bWJlck9mRGljZTtcbiAgICAgICAgICAgIGFjY3VzYXRpb24uZG90cyA9IGN1cnJlbnRCaWQuZG90cztcbiAgICAgICAgICAgIGxldCBnYW1lUmVzdWx0ID0gY2FsbE91dCgpO1xuICAgICAgICAgICAgZ2FtZUVuZChnYW1lUmVzdWx0LCBvcHBvbmVudE5hbWUsIGxpbmVzKTsgICAgXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBsYXllckJsdWZmcyhvcHBvbmVudE5hbWUsIGxpbmVzKSB7XG4gICAgLy8gY3JlYXRlcyBhIGRyb3Bkb3duIGZvcm0gdG8gYmx1ZmY6IFwiSSBoYXZlIFsxLzIvMy80XSBvZiBbMS8yLzMvNF1cIlxuICAgIGxldCBibHVmZkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoYmx1ZmZGb3JtKTtcbiAgICAvLyAtLS0gbnVtYmVyIG9mIGRpY2UgLS0tXG4gICAgbGV0IG51bWJlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBudW1iZXJMYWJlbC50ZXh0Q29udGVudCA9IGBJIGhhdmUgdGhpcyBtYW55Li4uYDtcbiAgICBudW1iZXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdudW1iZXJPZkRpY2UnKTtcbiAgICBibHVmZkZvcm0uYXBwZW5kQ2hpbGQobnVtYmVyTGFiZWwpO1xuICAgIGxldCBudW1iZXJTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBudW1iZXJTZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ251bWJlck9mRGljZScpO1xuICAgIG51bWJlclNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ251bWJlck9mRGljZScpO1xuICAgIGJsdWZmRm9ybS5hcHBlbmRDaGlsZChudW1iZXJTZWxlY3QpO1xuICAgIC8vIG9wdGlvbnMgZm9yIG51bWJlciBvZiBkaWNlXG4gICAgLy8gZHluYW1pY2FsbHkgY2FsY3VsYXRlIGhvdyBtYW55IG9wdGlvbnMgYXJlIGF2YWlsYWJsZVxuICAgIC8vIGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlID0gMlxuICAgIC8vIGN1cnJlbnRCaWQuZG90cyA9IDJcbiAgICAvLyBvcHRpb25zIHNob3VsZCBiZTogMiwgMywgNCwgNSwgNlxuICAgIC8vIG51bWJlck9mT3B0aW9ucyA9IDcgLSBjdXJyZW50QmlkLm51bWJlclxuICAgIC8vIHN0YXJ0ZXIoaSkgPSBjdXJyZW50QmlkLm51bWJlck9mRGljZVxuICAgIGlmIChjdXJyZW50QmlkLm51bWJlck9mRGljZSAhPT0gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gY3VycmVudEJpZC5udW1iZXJPZkRpY2U7IGkgPD0gNjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBpO1xuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpKTtcbiAgICAgICAgICAgIG51bWJlclNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBpO1xuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpKTtcbiAgICAgICAgICAgIG51bWJlclNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIC0tLSB3aGljaCBkb3RzIC0tLVxuICAgIGxldCBkb3RzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRvdHNMYWJlbC50ZXh0Q29udGVudCA9IGBvZiB0aGlzIGRpY2UuLi5gO1xuICAgIGRvdHNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkb3RzJyk7XG4gICAgYmx1ZmZGb3JtLmFwcGVuZENoaWxkKGRvdHNMYWJlbCk7XG4gICAgbGV0IGRvdHNTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBkb3RzU2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkb3RzJyk7XG4gICAgZG90c1NlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RvdHMnKTtcbiAgICBibHVmZkZvcm0uYXBwZW5kQ2hpbGQoZG90c1NlbGVjdCk7XG4gICAgLy8gb3B0aW9ucyBmb3IgZG90c1xuICAgIC8vIGR5bmFtaWNhbGx5IGNhbGN1bGF0ZSBudW1iZXIgb2YgZG90c1xuICAgIC8vIHRoaXMgaXMgb25seSBhIHByb2JsZW0gaWYgeW91J3JlIGJldHRpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIGRpY2UgYXMgdGhlIGN1cnJlbnQgYmlkXG4gICAgLy8gc28gdGhlIGNoZWNrIHNob3VsZCBub3QgZ28gaGVyZSwgYnV0IGF0IHN1Ym1pdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gYCR7aSsxfWA7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaSsxKTtcbiAgICAgICAgZG90c1NlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cbiAgICAvLyBmaW5hbCBzdWJtaXRcbiAgICBsZXQgYmx1ZmZTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGJsdWZmU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBibHVmZlN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0JsdWZmIScpO1xuICAgIGJsdWZmRm9ybS5hcHBlbmRDaGlsZChibHVmZlN1Ym1pdCk7XG4vLyBvbiBzdWJtaXQsIGNhbGxzIHRoZSBvcHBvbmVudFJlc3BvbnNlXG4gICAgYmx1ZmZGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIC8vIGNoZWNrIGZvciBkb3RzIGdvZXMgaGVyZVxuICAgICAgICBpZiAobnVtYmVyU2VsZWN0LnZhbHVlID09IGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlKSB7XG4gICAgICAgICAgICBpZiAoZG90c1NlbGVjdC52YWx1ZSA8PSBjdXJyZW50QmlkLmRvdHMpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY29sb3I6eWVsbG93Jyk7XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gYFtZb3UgY2FuIG9ubHkgYmlkIGhpZ2hlciB0aGFuIHlvdXIgb3Bwb25lbnQhXWA7XG4gICAgICAgICAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50QmlkID0geyBwbGF5ZXI6ICdwbGF5ZXInLCBudW1iZXJPZkRpY2U6IG51bWJlclNlbGVjdC52YWx1ZSwgZG90czogZG90c1NlbGVjdC52YWx1ZSB9O1xuICAgICAgICAgICAgICAgIHdoaWxlKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIHttYWluX3dpbmRvdy5yZW1vdmVDaGlsZChtYWluX3dpbmRvdy5maXJzdENoaWxkKX07XG4gICAgICAgICAgICAgICAgbGV0IGJpZE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgYmlkTWVzc2FnZS50ZXh0Q29udGVudCA9IGBZb3UgYmlkOiBcIkkgaGF2ZSAke2N1cnJlbnRCaWQubnVtYmVyT2ZEaWNlfSBvZiAke2N1cnJlbnRCaWQuZG90c30gZG90c1wiLmA7XG4gICAgICAgICAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoYmlkTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgb3Bwb25lbnRSZXNwb25zZShvcHBvbmVudE5hbWUsIGxpbmVzKTsgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY3VycmVudEJpZCA9IHsgcGxheWVyOiAncGxheWVyJywgbnVtYmVyT2ZEaWNlOiBudW1iZXJTZWxlY3QudmFsdWUsIGRvdHM6IGRvdHNTZWxlY3QudmFsdWUgfTtcbiAgICAgICAgICAgIHdoaWxlKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIHttYWluX3dpbmRvdy5yZW1vdmVDaGlsZChtYWluX3dpbmRvdy5maXJzdENoaWxkKX07XG4gICAgICAgICAgICBsZXQgYmlkTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGJpZE1lc3NhZ2UudGV4dENvbnRlbnQgPSBgWW91IGJpZDogXCJJIGhhdmUgJHtjdXJyZW50QmlkLm51bWJlck9mRGljZX0gb2YgJHtjdXJyZW50QmlkLmRvdHN9IGRvdHNcIi5gO1xuICAgICAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoYmlkTWVzc2FnZSk7XG4gICAgICAgICAgICBvcHBvbmVudFJlc3BvbnNlKG9wcG9uZW50TmFtZSwgbGluZXMpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyA1MC01MCBmdW5jdGlvblxuZnVuY3Rpb24gZmlmdHlGaWZ0eSgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDIpICsgMSk7XG59XG5mdW5jdGlvbiBvbmVUaGlyZCgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDMpICsgMSk7XG59XG4vLyBvcHBvbmVudCByZXNwb25zZVxuZnVuY3Rpb24gb3Bwb25lbnRSZXNwb25zZShvcHBvbmVudE5hbWUsIGxpbmVzKSB7XG4gICAgLy8gc2V0IGN1cnJlbnRCaWRcbiAgICAvLyBpZiBjdXJyZW50QmlkLm51bWJlck9mZGljZSA+IDIsIG9wcG9uZW50IGNhbGxzIGJsdWZmXG4gICAgLy8gZmlsbCB0aGUgYWNjdXNhdGlvbiBvYmplY3Qgd2l0aCAnb3Bwb25lbnQnLCBhbmQgJ2N1cnJlbnRCaWQnXG4gICAgaWYgKGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlID4gMikge1xuICAgICAgICBhY2N1c2F0aW9uID0geyBhY2N1c2VyOiAnb3Bwb25lbnQnLCBudW1iZXJPZkRpY2U6IGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlLCBkb3RzOiBjdXJyZW50QmlkLmRvdHMgfTtcbiAgICAgICAgbGV0IGFjY3VzZUxpbmVFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgYWNjdXNlTGluZUVudHJ5LnRleHRDb250ZW50ID0gYCR7b3Bwb25lbnROYW1lfTogXCIke2xpbmVzLmFjY3VzZUxpbmV9XCIuYDtcbiAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoYWNjdXNlTGluZUVudHJ5KTtcbiAgICAgICAgbGV0IGFjY3VzZUNvbnRpbnVlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFjY3VzZUNvbnRpbnVlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRpbnVlJztcbiAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoYWNjdXNlQ29udGludWVCdXR0b24pO1xuICAgICAgICBhY2N1c2VDb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1haW5fd2luZG93LnJlbW92ZUNoaWxkKGFjY3VzZUNvbnRpbnVlQnV0dG9uKTtcbiAgICAgICAgICAgIGxldCBnYW1lUmVzdWx0ID0gY2FsbE91dCgpO1xuICAgICAgICAgICAgZ2FtZUVuZChnYW1lUmVzdWx0LCBvcHBvbmVudE5hbWUsIGxpbmVzKTsgICAgXG4gICAgICAgIH0pO1xuICAgIC8vIGlmIGN1cnJlbnRCaWQubnVtYmVyT2ZkaWNlID0yXG4gICAgfSBlbHNlIGlmIChjdXJyZW50QmlkLm51bWJlck9mRGljZSA9PSAyKSB7XG4gICAgLy8gdGhlbiA1MCUgdG8gY2FsbCBvdXQgYSBibHVmZiBhbnl3YXlcbiAgICAgICAgaWYgKGZpZnR5RmlmdHkoKSA9PSAyKSB7XG4gICAgICAgICAgICBhY2N1c2F0aW9uID0geyBhY2N1c2VyOiAnb3Bwb25lbnQnLCBudW1iZXJPZkRpY2U6IGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlLCBkb3RzOiBjdXJyZW50QmlkLmRvdHMgfTtcbiAgICAgICAgICAgIGxldCBhY2N1c2VMaW5lRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBhY2N1c2VMaW5lRW50cnkudGV4dENvbnRlbnQgPSBgJHtvcHBvbmVudE5hbWV9OiBcIiR7bGluZXMuYWNjdXNlTGluZX1cIi5gO1xuICAgICAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoYWNjdXNlTGluZUVudHJ5KTtcbiAgICAgICAgICAgIGxldCBhY2N1c2VDb250aW51ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYWNjdXNlQ29udGludWVCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGludWUnO1xuICAgICAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoYWNjdXNlQ29udGludWVCdXR0b24pO1xuICAgICAgICAgICAgYWNjdXNlQ29udGludWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQoYWNjdXNlQ29udGludWVCdXR0b24pO1xuICAgICAgICAgICAgICAgIGxldCBnYW1lUmVzdWx0ID0gY2FsbE91dCgpO1xuICAgICAgICAgICAgICAgIGdhbWVFbmQoZ2FtZVJlc3VsdCwgb3Bwb25lbnROYW1lLCBsaW5lcyk7ICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIC8vIGlmIHRoYXQgZG9lc24ndCB0cmlnZ2VyLCB0aGUgb3Bwb25lbnQgYmlkcyAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wcG9uZW50QmlkKG9wcG9uZW50TmFtZSwgbGluZXMpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3Bwb25lbnRCaWQob3Bwb25lbnROYW1lLCBsaW5lcyk7XG4gICAgfVxufVxuZnVuY3Rpb24gb3Bwb25lbnRCaWQob3Bwb25lbnROYW1lLCBsaW5lcykge1xuICAgIC8vIG9wcG9uZW50IGxvb2tzIGF0IG9wcG9uZW50SGFuZCwgaWRlbnRpZnlpbmcgaWYgdGhlcmUgYXJlIGFueSByZXBlYXRzXG4gICAgbGV0IGFsbE9wcG9uZW50MXMgPSBvcHBvbmVudEhhbmQuZmlsdGVyKGkgPT4gaSA9PSAxKTtcbiAgICBsZXQgYWxsT3Bwb25lbnQycyA9IG9wcG9uZW50SGFuZC5maWx0ZXIoaSA9PiBpID09IDIpO1xuICAgIGxldCBhbGxPcHBvbmVudDNzID0gb3Bwb25lbnRIYW5kLmZpbHRlcihpID0+IGkgPT0gMyk7XG4gICAgbGV0IGFsbE9wcG9uZW50NHMgPSBvcHBvbmVudEhhbmQuZmlsdGVyKGkgPT4gaSA9PSA0KTtcbiAgICBsZXQgb3Bwb25lbnQxc09iamVjdCA9IHsgbnVtYmVyOiBhbGxPcHBvbmVudDFzLmxlbmd0aCwgZG90czogMSB9O1xuICAgIGxldCBvcHBvbmVudDJzT2JqZWN0ID0geyBudW1iZXI6IGFsbE9wcG9uZW50MnMubGVuZ3RoLCBkb3RzOiAyIH07XG4gICAgbGV0IG9wcG9uZW50M3NPYmplY3QgPSB7IG51bWJlcjogYWxsT3Bwb25lbnQzcy5sZW5ndGgsIGRvdHM6IDMgfTtcbiAgICBsZXQgb3Bwb25lbnQ0c09iamVjdCA9IHsgbnVtYmVyOiBhbGxPcHBvbmVudDRzLmxlbmd0aCwgZG90czogNCB9O1xuICAgIGxldCBvcHBvbmVudE9iamVjdHMgPSBbb3Bwb25lbnQxc09iamVjdCwgb3Bwb25lbnQyc09iamVjdCwgb3Bwb25lbnQzc09iamVjdCwgb3Bwb25lbnQ0c09iamVjdF07XG4gICAgbGV0IG9wcG9uZW50T2JqZWN0c1NvcnRlZCA9IG9wcG9uZW50T2JqZWN0cy5zb3J0KChhLCBiKSA9PiAoYS5udW1iZXIgPiBiLm51bWJlcikgPyAtMSA6IDEpO1xuICAgIGNvbnNvbGUubG9nKG9wcG9uZW50T2JqZWN0c1NvcnRlZCk7XG4gICAgLy8gbmVlZHMgdG8gY2hlY2sgY3VycmVudEJpZCwgb3Bwb25lbnQncyBiaWQgY2Fubm90IGJlIGxvd2VyIG51bWJlciBvZiBkaWNlLiBjYW4gYmUgZXF1YWwsIGJ1dCB0aGVuIHRoZSBkb3RzIHNob3VsZCBiZSBoaWdoZXJcbiAgICAvLyBpbml0aWFsaXplIHRlbXBvcmFyeSBvcHBvbmVudEJpZCB2YXIgZm9yIGNhbGN1bGF0aW9uIHB1cnBvc2VzXG4gICAgbGV0IHRlbXBvcmFyeU9wcG9uZW50QmlkID0ge3BsYXllcjogJ29wcG9uZW50JywgbnVtYmVyT2ZEaWNlOiAwLCBkb3RzOiAwfTtcbiAgICAvLyBmaXJzdCwgd2UgY2FsY3VsYXRlIHdoYXQgdGhlIG9wcG9uZW50IHdvdWxkIGhhdmUgYmV0IGluIGEgdmFjdXVtIFxuICAgIC8vIGl0J3MgYWx3YXlzIHRoZSBzYW1lIGRvdHNcbiAgICB0ZW1wb3JhcnlPcHBvbmVudEJpZC5kb3RzID0gb3Bwb25lbnRPYmplY3RzU29ydGVkWzBdLmRvdHM7XG4gICAgLy8gNTAlIGl0J3MgbnVtYmVyT2ZEaWNlIHRoZXkgaGF2ZSBhbmQgNTAlIG51bWJlcm9mRGljZSsxIFtjaGFuZ2VkIHRvIDMzJSB0byBnbyAtMSwgKzEgb3IgZXF1YWxdXG4gICAgbGV0IGNoYW5jZSA9IG9uZVRoaXJkKCk7XG4gICAgaWYgKGNoYW5jZSA9PSAxKSB7XG4gICAgICAgIHRlbXBvcmFyeU9wcG9uZW50QmlkLm51bWJlck9mRGljZSA9IG9wcG9uZW50T2JqZWN0c1NvcnRlZFswXS5udW1iZXI7XG4gICAgfSBlbHNlIGlmIChjaGFuY2UgPT0gMikge1xuICAgICAgICB0ZW1wb3JhcnlPcHBvbmVudEJpZC5udW1iZXJPZkRpY2UgPSBvcHBvbmVudE9iamVjdHNTb3J0ZWRbMF0ubnVtYmVyICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0ZW1wb3JhcnlPcHBvbmVudEJpZC5udW1iZXJPZkRpY2UgPSBvcHBvbmVudE9iamVjdHNTb3J0ZWRbMF0ubnVtYmVyIC0xO1xuICAgIH1cbiAgICAvLyBub3cgd2UgY2hlY2sgdGhlIG9wcG9uZW50J3Mgd2FudGVkIGJpZCB2ZXJzdXMgaWxsZWdhbCBzY2VuYXJpb3NcbiAgICBpZiAoY3VycmVudEJpZC5udW1iZXJPZkRpY2UgPiB0ZW1wb3JhcnlPcHBvbmVudEJpZC5udW1iZXJPZkRpY2UpIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgZG90cyBhcmUgaGlnaGVyXG4gICAgICAgIGlmICh0ZW1wb3JhcnlPcHBvbmVudEJpZC5kb3RzID4gY3VycmVudEJpZC5kb3RzKSB7XG4gICAgICAgICAgICAvLyBpZiBpIGJpZCAzIGRpY2Ugb2YgMSBkb3RzIGFuZCBvcHBvbmVudCB3YW50cyB0byBiaWQgMiBkaWNlIG9mIDIgZG90c1xuICAgICAgICAgICAgLy8gdGhpcyB0cmlnZ2VycywgbnVtYmVyIG9mIGRpY2UgSVMgaGlnaGVyXG4gICAgICAgICAgICAvLyBvcHBvbmVudCBzaG91bGQgYmlkIDMgZGljZSBvZiAyIGRvdHNcbiAgICAgICAgICAgIHRlbXBvcmFyeU9wcG9uZW50QmlkLm51bWJlck9mRGljZSA9IGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgaSBiaWQgMyBkaWNlIG9mIDQgZG90cyBhbmQgb3Bwb25lbnQgd2FudHMgdG8gYmlkIDIgZGljZSBvZiAyIGRvdHNcbiAgICAgICAgICAgIC8vIGlmIG9wcG9uZW50J3MgbmV4dCBoaWdoZXN0IGRvdHMgPiBjdXJyZW50QmlkLmRvdHNcbiAgICAgICAgICAgIGlmIChvcHBvbmVudE9iamVjdHNTb3J0ZWRbMV0uZG90cyA+IGN1cnJlbnRCaWQuZG90cykge1xuICAgICAgICAgICAgICAgIC8vIHRoZW4gNTAtNTA6IHNhbWUgbnVtYmVyT2ZEaWNlIGJ1dCB3aXRoIHNlY29uZCBoaWdoZXN0IGRvdHNcbiAgICAgICAgICAgICAgICAvLyBhbmQgNCBkaWNlIG9mIDIgZG90c1xuICAgICAgICAgICAgICAgIGlmIChmaWZ0eUZpZnR5KCkgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wb3JhcnlPcHBvbmVudEJpZC5kb3RzID0gb3Bwb25lbnRPYmplY3RzU29ydGVkWzFdLmRvdHM7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBvcmFyeU9wcG9uZW50QmlkLm51bWJlck9mRGljZSA9IGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBvcmFyeU9wcG9uZW50QmlkLm51bWJlck9mRGljZSA9IGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIG5vdCwgdGhlbiBqdXN0IDQgZGljZSBvZiAyIGRvdHNcbiAgICAgICAgICAgICAgICB0ZW1wb3JhcnlPcHBvbmVudEJpZC5udW1iZXJPZkRpY2UgPSBjdXJyZW50QmlkLm51bWJlck9mRGljZSArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlID09IHRlbXBvcmFyeU9wcG9uZW50QmlkLm51bWJlck9mRGljZSkge1xuICAgICAgICAvLyBzbyBpZiBteSBiZXQgaXMgMiBkaWNlIDIgZG90cyBhbmQgb3Bwb25lbnQgd2FudHMgdG8gYmV0IDIgZGljZSAzIGRvdHNcbiAgICAgICAgLy8gdGhlbiBpdHMgZmluZVxuICAgICAgICBpZiAodGVtcG9yYXJ5T3Bwb25lbnRCaWQuZG90cyA8PSBjdXJyZW50QmlkLmRvdHMpIHtcbiAgICAgICAgICAgIC8vIGJ1dCBpZiBvcHBvbmVudCB3YW50cyB0byBiaWQgMiBkaWNlIDIgZG90cyBvciAyIGRpY2UgMSBkb3RcbiAgICAgICAgICAgIHRlbXBvcmFyeU9wcG9uZW50QmlkLm51bWJlck9mRGljZSA9IGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlICsgMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBub3cgbWFrZSB0aGUgb3Bwb25lbnRCaWQgdGhlIGN1cnJlbnRCaWRcbiAgICBjdXJyZW50QmlkID0gdGVtcG9yYXJ5T3Bwb25lbnRCaWQ7XG4gICAgLy8gdGhlbiB0aGV5IHNheSBvbmUgb2YgdGhlaXIgJ2JldHRpbmdsaW5lcycgKGFkZCB0aGF0KSBcbiAgICBsZXQgYmx1ZmZMaW5lMUVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJsdWZmTGluZTFFbnRyeS50ZXh0Q29udGVudCA9IGAke29wcG9uZW50TmFtZX06IFwiJHtsaW5lcy5ibHVmZkxpbmV9XCIuYDtcbiAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChibHVmZkxpbmUxRW50cnkpO1xuICAgIGxldCBibHVmZkxpbmUyRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYmx1ZmZMaW5lMkVudHJ5LnRleHRDb250ZW50ID0gYFwiSSByb2xsZWQgJHtjdXJyZW50QmlkLm51bWJlck9mRGljZX0gZGljZSB3aXRoICR7Y3VycmVudEJpZC5kb3RzfSBkb3RzLlwiYDsgICAgXG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoYmx1ZmZMaW5lMkVudHJ5KTtcbiAgICAvLyByZS1iaWQsIGJ1dCBjYW4gb25seSBkbyBoaWdoZXIgbm93IVxuICAgIGJpZFBoYXNlKG9wcG9uZW50TmFtZSwgbGluZXMpO1xuICAgIC8vIHRob3VnaHRzIG9uIHJlLWJpZGRpbmc6IHJldXNlIHRoZSBzYW1lIGZ1bmN0aW9uIGZsb3dcbiAgICAvLyBpbnRyb2R1Y2UgYSBsaW1pdCBvbiB3aGF0IHRoZSBwbGF5ZXIgY2FuIGJpZFxuICAgIC8vIGJ1dCB0aGUgbGltaXRzIGRvbid0IHdvcmsgaWYgY3VycmVudEJpZCBpcyBlbXB0eVxufVxuLy8gY2FsbGluZyBvdXQgYSBibHVmZlxuZnVuY3Rpb24gY2FsbE91dCgpIHtcbiAgICAvLyBpZiBhY2N1c2F0aW9uLmFjY3VzZXIgPSBwbGF5ZXIsIGNoZWNrcyBvcHBvbmVudEhhbmQsIGlmIGFjY3VzYXRpb24uYWNjdXNlciA9IG9wcG9uZW50LCBjaGVja3MgcGxheWVySGFuZFxuICAgIC8vIHRoZXNlIGFyZSBzZXQgdXAgZGlmZmVyZW50bHksIHNvIGRpZmZlcmVudCBjYWxjdWxhdGlvbnNcbiAgICBpZiAoYWNjdXNhdGlvbi5hY2N1c2VyID09ICdvcHBvbmVudCcpIHtcbiAgICAgICAgLy8gcGxheWVySGFuZCA9IFtkaWUxLCAuLi5dXG4gICAgICAgIC8vIGRpZTEgPSB7cmVzdWx0OiAwLCAuLi59XG4gICAgICAgIGxldCBhbGxDb3JyZWN0RG90cyA9IHBsYXllckhhbmQuZmlsdGVyKGkgPT4gKGkucmVzdWx0ID09IGFjY3VzYXRpb24uZG90cykpO1xuICAgICAgICBjb25zb2xlLmxvZyhgQUxMIENPUlJFQ1QgRE9UUzogJHthbGxDb3JyZWN0RG90c31gKTtcbiAgICAgICAgY29uc29sZS5sb2coYEFDQ1VTQVRJT04gRE9UUzogJHthY2N1c2F0aW9uLmRvdHN9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBQ0NVU0FUSU9OIE5VTUJFUiBPRiBESUNFOiAke2FjY3VzYXRpb24ubnVtYmVyT2ZEaWNlfWApO1xuICAgICAgICBpZiAoYWxsQ29ycmVjdERvdHMubGVuZ3RoID49IGFjY3VzYXRpb24ubnVtYmVyT2ZEaWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3BsYXllcldpbnMnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdvcHBvbmVudFdpbnMnO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gb3Bwb25lbnRIYW5kID0gWzEsIDMsIDQsIDEsIDMsIDJdXG4gICAgICAgIGxldCBhbGxDb3JyZWN0RG90cyA9IG9wcG9uZW50SGFuZC5maWx0ZXIoaSA9PiAoaSA9PSBhY2N1c2F0aW9uLmRvdHMpKTtcbiAgICAgICAgY29uc29sZS5sb2coYEFMTCBDT1JSRUNUIERPVFM6ICR7YWxsQ29ycmVjdERvdHN9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBQ0NVU0FUSU9OIERPVFM6ICR7YWNjdXNhdGlvbi5kb3RzfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgQUNDVVNBVElPTiBOVU1CRVIgT0YgRElDRTogJHthY2N1c2F0aW9uLm51bWJlck9mRGljZX1gKTtcbiAgICAgICAgaWYgKGFsbENvcnJlY3REb3RzLmxlbmd0aCA+PSBhY2N1c2F0aW9uLm51bWJlck9mRGljZSkge1xuICAgICAgICAgICAgcmV0dXJuICdvcHBvbmVudFdpbnMnOyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAncGxheWVyV2lucyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY2hlY2tzIHRoYXQgcGxheWVyL29wcG9uZW50SGFuZC5pbmNsdWRlcyB0aGUgaW50ZWdlciBlcXVhbGluZyB0byB0aGUgJ2RvdHMnXG4gICAgLy8gbG9vcHMgdGhyb3VnaCB0aGUgY2hlY2sgYSBudW1iZXIgb2YgdGltZXMgPSBudW1iZXJPZkRpY2VcbiAgICAvLyBpZiBhbGwgdHJ1ZSwgYWNjdXNhdGlvbi5hY2N1c2VyIGlzIHRoZSBsb3NlclxuICAgIC8vIHJldHVybnMgYSB3aW5uZXJcbn1cbi8vIGVuZGluZyB0aGUgZ2FtZVxuZnVuY3Rpb24gZ2FtZUVuZChyZXN1bHQsIG9wcG9uZW50TmFtZSwgbGluZXMpIHtcbiAgICAvLyBhIG1lc3NhZ2UsIHdobyBpcyBiZWluZyBhY2N1c2VkIGFuZCB3aGF0IGFyZSB0aGV5IGJlaW5nIGFjY3VzZWQgb2ZcbiAgICBsZXQgZ2FtZUVuZEVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGlmIChhY2N1c2F0aW9uLmFjY3VzZXIgPT0gJ1BsYXllcicpIHtcbiAgICAgICAgZ2FtZUVuZEVudHJ5LnRleHRDb250ZW50ID0gYEFjY3VzYXRpb24hIFlvdSBhbmQgJHtvcHBvbmVudE5hbWV9IGNoZWNrIHRoZSBibHVmZi4gWW91ciBvcHBvbmVudCBpcyB0aGUgYmx1ZmZlci4gVGhleSBzYWlkIHRoZXkgaGF2ZSAke2FjY3VzYXRpb24ubnVtYmVyT2ZEaWNlfSBvZiAke2FjY3VzYXRpb24uZG90c30gZG90cy4gVGltZSB0byBzZWUgaWYgdGhleSdyZSBibHVmZmluZy5gXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2FtZUVuZEVudHJ5LnRleHRDb250ZW50ID0gYEFjY3VzYXRpb24hIFlvdSBhbmQgJHtvcHBvbmVudE5hbWV9IGNoZWNrIHRoZSBibHVmZi4gWW91IGFyZSB0aGUgYmx1ZmZlci4gWW91IHNhaWQgdGhhdCB5b3UndmUgZ290ICR7YWNjdXNhdGlvbi5udW1iZXJPZkRpY2V9IG9mICR7YWNjdXNhdGlvbi5kb3RzfSBkb3RzLiAke29wcG9uZW50TmFtZX0gY2hlY2tzIGlmIHlvdSdyZSBibHVmZmluZy5gXG4gICAgfVxuICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGdhbWVFbmRFbnRyeSk7XG4gICAgbGV0IGNvbnRpbnVlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGludWVCdXR0b24udGV4dENvbnRlbnQgPSAnTGV0IHVzIGZpbmQgb3V0J1xuICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGNvbnRpbnVlQnV0dG9uKTtcbiAgICBjb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQoY29udGludWVCdXR0b24pO1xuICAgICAgICBnYW1lRW5kMihyZXN1bHQsIG9wcG9uZW50TmFtZSwgbGluZXMpO1xuICAgIH0pXG59XG5mdW5jdGlvbiBnYW1lRW5kMihyZXN1bHQsIG9wcG9uZW50TmFtZSwgbGluZXMpIHtcbiAgICBsZXQgb3Bwb25lbnRFbmRMaW5lRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaWYgKHJlc3VsdCA9PSAncGxheWVyV2lucycpIHtcbiAgICAgICAgbGV0IGdhbWVSZXN1bHRFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZ2FtZVJlc3VsdEVudHJ5LnRleHRDb250ZW50ID0gJ0FuZC4uLi4gWW91IHdpbiEnO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChnYW1lUmVzdWx0RW50cnkpO1xuICAgICAgICBvcHBvbmVudEVuZExpbmVFbnRyeS50ZXh0Q29udGVudCA9IGAke29wcG9uZW50TmFtZX06IFwiJHtsaW5lcy5sb3NlTGluZX0uXCJgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGdhbWVSZXN1bHRFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZ2FtZVJlc3VsdEVudHJ5LnRleHRDb250ZW50ID0gYEFuZC4uLi4gJHtvcHBvbmVudE5hbWV9IHdpbnMhYDtcbiAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoZ2FtZVJlc3VsdEVudHJ5KTtcbiAgICAgICAgb3Bwb25lbnRFbmRMaW5lRW50cnkudGV4dENvbnRlbnQgPSBgJHtvcHBvbmVudE5hbWV9OiBcIiR7bGluZXMud2luTGluZX0uXCJgXG4gICAgfVxuICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKG9wcG9uZW50RW5kTGluZUVudHJ5KTtcbiAgICAvLyBzYXlpbmcgdGhlICd3aW5MaW5lJyBvciAnbG9zZUxpbmUnICBcbiAgICAvLyBrZWVwIHRyYWNrIG9mIGdvbGQhXG4gICAgLy8gc2hvdyBnb2xkIGluIHRoZSBpbnZlbnRvcnlcbiAgICAvLyB3aW4gb3IgbG9zZSBhIHNldCBbRk9SIE5PV10gbnVtYmVyIG9mIGdvbGRcbiAgICAvLyBnb2xkIGNvdWxkIGJlIHNwZW50IG9uIGJ1eWluZyBlcXVpcG1lbnRcbn1cbmV4cG9ydCB7XG4gICAgcGxheWVySGFuZCwgb3Bwb25lbnRIYW5kLCBjdXJyZW50QmlkLCBhY2N1c2F0aW9uLCBleGFtcGxlTGluZXMsIGRpZTEsIGRpZTIsIGRpZTMsIGRpZTQsIGRpZTUsIGRpZTYsIHN0YXJ0RGljZUdhbWUsIGZhbHNlQ3ViZXMsIHJvbGw2ZDRQbGF5ZXIsIHJvbGw2ZDRPcHBvbmVudCwgcm9sbDFkNCwgcm9sbFBoYXNlLCBiaWRQaGFzZSwgZmlmdHlGaWZ0eSwgb25lVGhpcmQsIG9wcG9uZW50UmVzcG9uc2UsIG9wcG9uZW50QmlkLCBjYWxsT3V0LCBnYW1lRW5kXG59IiwiY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5cbmNvbnN0IGV2ZW50RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBldmVudEVtaXR0ZXI7IiwiLy8gaW1wb3J0OiBjaGFyMSwgY2xhc3Nlc1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgYmdJbWcgZnJvbSAnLi9iZy5qcGcnO1xuaW1wb3J0IHsgY2hhcjEgfSBmcm9tICcuL2NvbXBfb2JqZWN0c19hbmRfbWV0aG9kcyc7XG5cbi8vIGluaXRpYWxpemUgc3BhY2VzIGFuZCBidXR0b25zXG5sZXQgdG9wX2JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BfYmFyJyk7XG5sZXQgbG9nX3dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2cnKTtcbmxldCBtYWluX3dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX3dpbmRvdycpO1xubGV0IGltYWdlX3dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZV93aW5kb3cnKTtcbmxldCBtZW51X3dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5sZXQgYnV0dG9uX3dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fd2luZG93Jyk7XG5sZXQgYXR0YWNrX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdHRhY2tCdXR0b24nKTtcbmxldCBzcGVjaWFsX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcGVjaWFsQnV0dG9uJyk7XG5sZXQgaW52ZW50b3J5X2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnZlbnRvcnlCdXR0b24nKTtcbmxldCBzdGF0c19idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHNCdXR0b24nKTtcbi8vZHJhdyBwbGF5ZXIgc3RhdHNcbm1lbnVfd2luZG93LnRleHRDb250ZW50ID0gYFlvdSBhcmUgJHtjaGFyMS5uYW1lfS4gWW91ciBjbGFzcyBpcyB1bmtub3duLiBZb3VyIGFybW9yIGNsYXNzIGlzICR7Y2hhcjEuYXJtb3JDbGFzc30uIFlvdXIgSFAgaXMgJHtjaGFyMS5jdXJyZW50SFB9LyR7Y2hhcjEubWF4SFB9LmA7XG4vLyBkaWFsb2cgcmVtb3ZlclxuZnVuY3Rpb24gZGlhbG9nQW5pbWF0aW9uRW5kKGV2ZW50KSB7XG4gICAgbGV0IGRpYWxvZyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCA/IGV2ZW50LnRhcmdldCA6IGV2ZW50O1xuICAgIGlmIChkaWFsb2cudGFnTmFtZSA9PSAnRElBTE9HJykge1xuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaWFsb2cucmVtb3ZlKCk7XG4gICAgfVxuICAgIGRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgZGlhbG9nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGRpYWxvZ0FuaW1hdGlvbkVuZCk7XG59XG4vLy0tLW1haW4gbWVudS0tLVxubGV0IG1haW5NZW51RGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG5tYWluTWVudURpYWxvZy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0Ojc1JTt3aWR0aDoxMDAlO3otaW5kZXg6MTAwMDtvdmVyZmxvdzpoaWRkZW47Jyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5NZW51RGlhbG9nKTtcbm1haW5NZW51RGlhbG9nLmlubmVySFRNTCA9IFxuYFxuPGRpdiBjbGFzcz0nbWFpbk1lbnVDb250YWluZXInPlxuICAgIDxkaXYgc3R5bGU9J2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JvcmRlci1ib3R0b206NXB4IHNvbGlkIHNpbHZlcic+XG4gICAgICAgIDxoMSBzdHlsZT0nbWFyZ2luLWJvdHRvbTogNXB4Oyc+V2hhdCBNYWtlcyBZb3UgTGl2ZT88L2gxPlxuICAgIDwvZGl2PlxuICAgIDxoMSBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLWJvdHRvbTotMjBweDsnPk1haW4gTWVudTwvaDI+ICAgXG4gICAgPGRpdiBjbGFzcz0nbWFpbk1lbnUnIHN0eWxlPSdkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbi10b3A6NTBweDsnPlxuICAgICAgICA8YnV0dG9uIGlkPSdzdGFydEdhbWVCdXR0b24nIHN0eWxlPSdkaXNwbGF5OmJsb2NrO21hcmdpbjowIGF1dG87IGJvcmRlcjogM3B4IHNvbGlkIHNpbHZlcjsgYm9yZGVyLXJhZGl1czogNXB4OyBtYXJnaW4tYm90dG9tOjIwcHg7d2lkdGg6MjUwcHg7Jz5TdGFydCBnYW1lPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9J3NldHRpbmdzQnV0dG9uJyBzdHlsZT0nZGlzcGxheTpibG9jazttYXJnaW46MCBhdXRvOyBib3JkZXI6IDNweCBzb2xpZCBzaWx2ZXI7IGJvcmRlci1yYWRpdXM6IDVweDsgbWFyZ2luLWJvdHRvbToyMHB4O3dpZHRoOjI1MHB4Oyc+U2V0dGluZ3M8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD0nYWJvdXRCdXR0b24nIHN0eWxlPSdkaXNwbGF5OmJsb2NrO21hcmdpbjowIGF1dG87IGJvcmRlcjogM3B4IHNvbGlkIHNpbHZlcjsgYm9yZGVyLXJhZGl1czogNXB4OyBtYXJnaW4tYm90dG9tOjIwcHg7d2lkdGg6MjUwcHg7Jz5BYm91dCB0aGUgY3JlYXRvcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPSdjb250YWN0QnV0dG9uJyBzdHlsZT0nZGlzcGxheTpibG9jazttYXJnaW46MCBhdXRvOyBib3JkZXI6IDNweCBzb2xpZCBzaWx2ZXI7IGJvcmRlci1yYWRpdXM6IDVweDsgbWFyZ2luLWJvdHRvbTowO3dpZHRoOjI1MHB4Oyc+Q29udGFjdCBtZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxicj5cbiAgICA8cCBzdHlsZT0nY29sb3I6d2hpdGU7Zm9udC1zaXplOjgwJTsnPjxpPk5vdGU6IElmIHlvdSBwbGF5IG9uIG1vYmlsZSwgc2Nyb2xsIHRvIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiB0byBzZWUgdGhlIGFjdGlvbiBidXR0b25zLjwvaT48L3A+XG48L2Rpdj5cbiAgICBgXG5tYWluTWVudURpYWxvZy5zaG93TW9kYWwoKTtcblxubGV0IGJsYWNrTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYmxhY2tNZW51LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgYmFja2dyb3VuZC1jb2xvcjpibGFjaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO3otaW5kZXg6NTAwO292ZXJmbG93OmhpZGRlbjtgKTtcbmxldCBiZ01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJnTWVudS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGhlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3BhY2l0eTowLjU7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIke2JnSW1nfVwiKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7b3ZlcmZsb3c6aGlkZGVuO2ApO1xuYmxhY2tNZW51LmFwcGVuZENoaWxkKGJnTWVudSk7XG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGJsYWNrTWVudSk7XG5kb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbmxldCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydEdhbWVCdXR0b24nKTtcbmxldCBtYWluTWVudUNsb3NlZCA9IGZhbHNlOztcbnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1haW5NZW51RGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBtYWluTWVudURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgIGRpYWxvZ0FuaW1hdGlvbkVuZChtYWluTWVudURpYWxvZyk7XG4gICAgICAgIG1haW5NZW51Q2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgY2hlY2tBbmltYXRpb25Db21wbGV0ZSgpO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBjaGVja0FuaW1hdGlvbkNvbXBsZXRlKCkge1xuICAgIGlmIChtYWluTWVudUNsb3NlZCkge1xuICAgICAgICBibGFja01lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBibGFja01lbnUuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZGlhbG9nQW5pbWF0aW9uRW5kKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJzsgICAgXG4gICAgfVxufVxuLy8gZXhwb3J0IHNwYWNlcyBhbmQgYnV0dG9uc1xuZXhwb3J0IHtcbiAgICB0b3BfYmFyLFxuICAgIGxvZ193aW5kb3csXG4gICAgbWFpbl93aW5kb3csXG4gICAgaW1hZ2Vfd2luZG93LFxuICAgIG1lbnVfd2luZG93LFxuICAgIGJ1dHRvbl93aW5kb3csXG4gICAgYXR0YWNrX2J1dHRvbixcbiAgICBzcGVjaWFsX2J1dHRvbixcbiAgICBpbnZlbnRvcnlfYnV0dG9uLFxuICAgIHN0YXRzX2J1dHRvbixcbiAgICBkaWFsb2dBbmltYXRpb25FbmRcbn0iLCIvLyBpbXBvcnQ6IGh1ZCwgY2hhcjEsIG1lbnVVcGRhdGVyLFxuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBcbiAgICBtZW51X3dpbmRvdyxcbiAgICBpbnZlbnRvcnlfYnV0dG9uLFxuICAgIGRpYWxvZ0FuaW1hdGlvbkVuZFxufSBmcm9tICcuL2NvbXBfaHVkJztcbmltcG9ydCB7IFxuICAgIG1lbnVVcGRhdGVyLCBcbiAgICBjaGFyMSBcbn0gZnJvbSAnLi9jb21wX29iamVjdHNfYW5kX21ldGhvZHMnO1xuXG4vLyAtLS1pbnZlbnRvcnkgc3lzdGVtLS0tXG4vLyBjcmVhdGUgYSBkaWFsb2cgd2luZG93IHdoZW4gd2UgY2xpY2sgb24gaW52ZW50b3J5XG5sZXQgaW52ZW50b3J5RGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG5pbnZlbnRvcnlEaWFsb2cuc2V0QXR0cmlidXRlKCdzdHlsZScsJ21heC13aWR0aDo1MDBweDsnKVxuaW52ZW50b3J5RGlhbG9nLmlubmVySFRNTCA9IGBcbiAgICA8YnV0dG9uIGlkPSdjbG9zZUJ1dHRvbic+Q2xvc2U8L2J1dHRvbj5cbiAgICA8ZGl2IGlkPSdpbnZlbnRvcnlCb3gnPlxuICAgICAgICA8aDI+SW52ZW50b3J5PC9oMj5cbiAgICAgICAgPGRpdiBpZD0nZXF1aXBwZWRCb3gnPlxuICAgICAgICAgICAgRXF1aXBwZWQgd2VhcG9uOiA8c3BhbiBpZD0nZXF1aXBwZWRXZWFwb25Cb3gnPjwvc3Bhbj5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIEVxdWlwcGVkIGFybW9yOiA8c3BhbiBpZD0nZXF1aXBwZWRBcm1vckJveCc+PC9zcGFuPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgRXF1aXBwZWQgbWlzYzogPHNwYW4gaWQ9J2VxdWlwcGVkTWlzY0JveCc+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8YnI+XG4gICAgICAgIEdvbGQ6IDxzcGFuIGlkPSdnb2xkQm94Jz48L3NwYW4+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGRpdiBpZD0nYWxsQm94Jz5cbiAgICAgICAgICAgIEJhZzpcbiAgICAgICAgICAgIDx1bCBpZD0nYWxsTGlzdCc+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGludmVudG9yeURpYWxvZyk7XG5pbnZlbnRvcnlfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGludmVudG9yeURpYWxvZy5zaG93TW9kYWwoKTtcbiAgICBsZXQgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2VCdXR0b24nKTtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaW52ZW50b3J5RGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgaW52ZW50b3J5RGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGRpYWxvZ0FuaW1hdGlvbkVuZCk7XG4gICAgfSlcbn0pXG4vLyBnb2xkIHN5c3RlbVxubGV0IHBsYXllckdvbGQgPSAwO1xubGV0IGdvbGRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ29sZEJveCcpO1xuZ29sZEJveC50ZXh0Q29udGVudCA9IHBsYXllckdvbGQ7XG5mdW5jdGlvbiBhZGRHb2xkKGFtb3VudCkge1xuICAgIHBsYXllckdvbGQgKz0gYW1vdW50O1xuICAgIGdvbGRCb3gudGV4dENvbnRlbnQgPSBwbGF5ZXJHb2xkO1xufVxuLy8gZ3JhYiBlbGVtZW50cyBmcm9tIGRpYWxvZ1xubGV0IGVxdWlwcGVkV2VhcG9uQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VxdWlwcGVkV2VhcG9uQm94Jyk7XG5sZXQgZXF1aXBwZWRBcm1vckJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcXVpcHBlZEFybW9yQm94Jyk7XG5sZXQgZXF1aXBwZWRNaXNjQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VxdWlwcGVkTWlzY0JveCcpO1xubGV0IGFsbExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsTGlzdCcpXG4vLyB3aGVuIGFuIG9iamVjdCBpcyBncmFiYmVkXG5mdW5jdGlvbiBncmFiSXRlbShpdGVtKSB7XG4gICAgY2hhcjEuaW52ZW50b3J5LnB1c2goaXRlbSk7XG4gICAgbGV0IGl0ZW1CdWxsZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgaXRlbUJ1bGxldC50ZXh0Q29udGVudCA9IGAke2l0ZW0ubmFtZX0sICR7aXRlbS50eXBlfS4gQXR0YWNrIGJvbnVzOiAke2l0ZW0uaXRlbUF0dGFja30uIEFybW9yIGJvbnVzOiAke2l0ZW0uaXRlbUFybW9yfS5gXG4gICAgYWxsTGlzdC5hcHBlbmRDaGlsZChpdGVtQnVsbGV0KTtcbiAgICBpZiAoaXRlbS50eXBlICE9PSAncXVlc3QgaXRlbScpIHtcbiAgICAgICAgbGV0IGVxdWlwQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVxdWlwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZXF1aXBJdGVtKGl0ZW0pKTtcbiAgICAgICAgZXF1aXBCdXR0b24udGV4dENvbnRlbnQgPSAnRXF1aXAnO1xuICAgICAgICBlcXVpcEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZvbnQtc2l6ZTogNzAlOycpO1xuICAgICAgICBlcXVpcEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aXRlbS5pZH1gKTtcbiAgICAgICAgYWxsTGlzdC5hcHBlbmRDaGlsZChlcXVpcEJ1dHRvbik7XG4gICAgfVxufVxuLy8gd2hlbiBhbiBvYmplY3QgaXMgZXF1aXBwZWRcbmZ1bmN0aW9uIGVxdWlwSXRlbShpdGVtKSB7XG4gICAgaWYgKGNoYXIxLmludmVudG9yeS5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnd2VhcG9uJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhcjEuZXF1aXBwZWRXZWFwb24gPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcjEuZXF1aXBwZWRXZWFwb24gPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICBjaGFyMS5hcm1vckNsYXNzID0gY2hhcjEuYXJtb3JDbGFzcyArIGNoYXIxLmVxdWlwcGVkV2VhcG9uLml0ZW1Bcm1vcjtcbiAgICAgICAgICAgICAgICAgICAgZXF1aXBwZWRXZWFwb25Cb3gudGV4dENvbnRlbnQgPSBgJHtpdGVtLm5hbWV9YDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVxdWlwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aXRlbS5pZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgZXF1aXBCdXR0b24udGV4dENvbnRlbnQgPSAnVW5lcXVpcCc7XG4gICAgICAgICAgICAgICAgICAgIGVxdWlwQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZXF1aXBJdGVtKGl0ZW0pKTtcbiAgICAgICAgICAgICAgICAgICAgZXF1aXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB1bmVxdWlwSXRlbShpdGVtKSk7ICAgXG4gICAgICAgICAgICAgICAgICAgIG1lbnVVcGRhdGVyKCk7ICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0VSUk9SOiBwbGVhc2UgdW5lcXVpcCB5b3VyIGN1cnJlbnQgaXRlbSBmaXJzdCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJtb3InOlxuICAgICAgICAgICAgICAgIGlmIChjaGFyMS5lcXVpcHBlZEFybW9yID09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXIxLmVxdWlwcGVkQXJtb3IgPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICBjaGFyMS5hcm1vckNsYXNzID0gY2hhcjEuYXJtb3JDbGFzcyArIGNoYXIxLmVxdWlwcGVkQXJtb3IuaXRlbUFybW9yO1xuICAgICAgICAgICAgICAgICAgICBlcXVpcHBlZEFybW9yQm94LnRleHRDb250ZW50ID0gYCR7aXRlbS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlcXVpcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2l0ZW0uaWR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGVxdWlwQnV0dG9uLnRleHRDb250ZW50ID0gJ1VuZXF1aXAnO1xuICAgICAgICAgICAgICAgICAgICBlcXVpcEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVxdWlwSXRlbShpdGVtKSk7XG4gICAgICAgICAgICAgICAgICAgIGVxdWlwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdW5lcXVpcEl0ZW0oaXRlbSkpOyAgIFxuICAgICAgICAgICAgICAgICAgICBtZW51VXBkYXRlcigpOyAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdFUlJPUjogcGxlYXNlIHVuZXF1aXAgeW91ciBjdXJyZW50IGl0ZW0gZmlyc3QnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21pc2MnOlxuICAgICAgICAgICAgICAgIGlmIChjaGFyMS5lcXVpcHBlZE1pc2MgPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcjEuZXF1aXBwZWRNaXNjID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgY2hhcjEuYXJtb3JDbGFzcyA9IGNoYXIxLmFybW9yQ2xhc3MgKyBjaGFyMS5lcXVpcHBlZE1pc2MuaXRlbUFybW9yO1xuICAgICAgICAgICAgICAgICAgICBlcXVpcHBlZE1pc2NCb3gudGV4dENvbnRlbnQgPSBgJHtpdGVtLm5hbWV9YDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVxdWlwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aXRlbS5pZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgZXF1aXBCdXR0b24udGV4dENvbnRlbnQgPSAnVW5lcXVpcCc7XG4gICAgICAgICAgICAgICAgICAgIGVxdWlwQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZXF1aXBJdGVtKGl0ZW0pKTtcbiAgICAgICAgICAgICAgICAgICAgZXF1aXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB1bmVxdWlwSXRlbShpdGVtKSk7ICAgXG4gICAgICAgICAgICAgICAgICAgIG1lbnVVcGRhdGVyKCk7ICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0VSUk9SOiBwbGVhc2UgdW5lcXVpcCB5b3VyIGN1cnJlbnQgaXRlbSBmaXJzdCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0VSUk9SOiB5b3UgZG8gbm90IGhhdmUgdGhpcyBpdGVtIGluIHlvdXIgaW52ZW50b3J5JylcbiAgICB9XG59XG4vLyB3aGVuIGFuIGl0ZW0gaXMgdW5lcXVpcHBlZFxuZnVuY3Rpb24gdW5lcXVpcEl0ZW0oaXRlbSkge1xuICAgIGlmIChjaGFyMS5lcXVpcHBlZFdlYXBvbiA9PSBpdGVtIHx8IGNoYXIxLmVxdWlwcGVkQXJtb3IgPT0gaXRlbSB8fCBjaGFyMS5lcXVpcHBlZE1pc2MgPT0gaXRlbSkge1xuICAgICAgICBpZiAoY2hhcjEuZXF1aXBwZWRXZWFwb24gPT0gaXRlbSkge1xuICAgICAgICAgICAgY2hhcjEuYXJtb3JDbGFzcyA9IGNoYXIxLmFybW9yQ2xhc3MgLSBjaGFyMS5lcXVpcHBlZFdlYXBvbi5pdGVtQXJtb3I7XG4gICAgICAgICAgICBjaGFyMS5lcXVpcHBlZFdlYXBvbiA9ICcnO1xuICAgICAgICAgICAgZXF1aXBwZWRXZWFwb25Cb3gudGV4dENvbnRlbnQgPSBgYDtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyMS5lcXVpcHBlZEFybW9yID09IGl0ZW0pIHtcbiAgICAgICAgICAgIGNoYXIxLmFybW9yQ2xhc3MgPSBjaGFyMS5hcm1vckNsYXNzIC0gY2hhcjEuZXF1aXBwZWRBcm1vci5pdGVtQXJtb3I7XG4gICAgICAgICAgICBjaGFyMS5lcXVpcHBlZEFybW9yID0gJyc7XG4gICAgICAgICAgICBlcXVpcHBlZEFybW9yQm94LnRleHRDb250ZW50ID0gYGA7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcjEuZXF1aXBwZWRNaXNjID09IGl0ZW0pIHtcbiAgICAgICAgICAgIGNoYXIxLmFybW9yQ2xhc3MgPSBjaGFyMS5hcm1vckNsYXNzIC0gY2hhcjEuZXF1aXBwZWRNaXNjLml0ZW1Bcm1vcjtcbiAgICAgICAgICAgIGNoYXIxLmVxdWlwcGVkTWlzYyA9ICcnO1xuICAgICAgICAgICAgZXF1aXBwZWRNaXNjQm94LnRleHRDb250ZW50ID0gYGA7XG4gICAgICAgIH1cbiAgICAgICAgbWVudVVwZGF0ZXIoKTtcbiAgICAgICAgbGV0IGVxdWlwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aXRlbS5pZH1gKTtcbiAgICAgICAgZXF1aXBCdXR0b24udGV4dENvbnRlbnQgPSAnRXF1aXAnO1xuICAgICAgICBlcXVpcEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVuZXF1aXBJdGVtKGl0ZW0pKTtcbiAgICAgICAgZXF1aXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlcXVpcEl0ZW0oaXRlbSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdFUlJPUjogdGhpcyBpdGVtIGlzIG5vdCBlcXVpcHBlZDsnKVxuICAgIH1cbn1cbi8vIHRvIGNoYXJhY3RlciwgYWRkIHRoZSBmb2xsb3dpbmcga2V5czogZXF1aXBwZWRXZWFwb24sIGVxdWlwcGVkQXJtb3IsIGVxdWlwcGVkTWlzYywgaW52ZW50b3J5ID0gW11cbi8vIHRoZSBpdGVtIG9iamVjdCB3aWxsIGhhdmUga2V5czogdHlwZSAod2VhcG9uLCBhcm1vciBvciBtaXNjKTsgaXRlbUF0dGFjazsgaXRlbUFybW9yXG5mdW5jdGlvbiBuZXdJdGVtKG5hbWUsIHR5cGUsIGl0ZW1BdHRhY2ssIGl0ZW1Bcm1vciwgaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBpdGVtQXR0YWNrOiBpdGVtQXR0YWNrLFxuICAgICAgICBpdGVtQXJtb3I6IGl0ZW1Bcm1vcixcbiAgICAgICAgaWQ6IGlkXG4gICAgfVxufVxubGV0IG1hZ2ljU3dvcmQgPSBuZXdJdGVtKCdNYWdpYyBTd29yZCcsICd3ZWFwb24nLCAyMCwgMCwgJ24xJyk7XG5sZXQgbWFnaWNBcm1vciA9IG5ld0l0ZW0oJ01hZ2ljIEFybW9yJywgJ2FybW9yJywgMCwgMiwgJ24yJyk7XG5sZXQgbWFnaWNSaW5nID0gbmV3SXRlbSgnTWFnaWMgUmluZycsICdtaXNjJywgMSwgMSwgJ24zJyk7XG5sZXQgdWx0cmFTd29yZCA9IG5ld0l0ZW0oJ1VsdHJhIFN3b3JkJywgJ3dlYXBvbicsIDQwLCAwLCAnbjQnKTtcbmxldCB1bHRyYUFybW9yID0gbmV3SXRlbSgnVWx0cmEgQXJtb3InLCAnYXJtb3InLCAwLCA0LCAnbjUnKTtcbmxldCB1bHRyYVJpbmcgPSBuZXdJdGVtKCdVbHRyYSBSaW5nJywgJ21pc2MnLCAyLCAyLCAnbjYnKTtcbmxldCBydXN0eVN3b3JkID0gbmV3SXRlbSgnUnVzdHkgU3dvcmQnLCAnd2VhcG9uJywgMSwgMCwgJ243Jyk7XG5sZXQgcnVzdHlBcm1vciA9IG5ld0l0ZW0oJ1J1c3R5IEFybW9yJywgJ2FybW9yJywgMCwgMSwgJ244Jyk7XG5sZXQgZ29sZFJpbmcgPSBuZXdJdGVtKCdHb2xkIFJpbmcnLCAnbWlzYycsIDAsIDEsICduOScpO1xubGV0IGhlYWx0aFBvdGlvbiA9IG5ld0l0ZW0oJ0hlYWx0aCBQb3Rpb24nLCAncXVlc3QgaXRlbScsIDAsIDAsICduMTAnKTtcbmxldCB3aXNwQmFsbCA9IG5ld0l0ZW0oJ0RpbWx5IEdsb3dpbmcgQmFsbCcsICdtaXNjJywgMCwgMSwgJ24xMScpO1xuLy8gZXhwb3J0aW5nIG9iamVjdFxubGV0IGFsbEl0ZW1zID0geyB3aXNwQmFsbCwgbWFnaWNBcm1vciwgbWFnaWNSaW5nLCBtYWdpY1N3b3JkLCB1bHRyYUFybW9yLCB1bHRyYVJpbmcsIHVsdHJhU3dvcmQsIHJ1c3R5QXJtb3IsIHJ1c3R5U3dvcmQsIGdvbGRSaW5nLCBoZWFsdGhQb3Rpb24gfTtcbi8vIGV4cG9ydFxuZXhwb3J0IHtcbiAgICBpbnZlbnRvcnlEaWFsb2csXG4gICAgZ3JhYkl0ZW0sXG4gICAgZXF1aXBJdGVtLFxuICAgIHVuZXF1aXBJdGVtLFxuICAgIG5ld0l0ZW0sXG4gICAgYWxsSXRlbXMsXG4gICAgcGxheWVyR29sZCxcbiAgICBhZGRHb2xkXG59IiwiLy8gaW1wb3J0OiBlbmVtaWVzIGFycmF5LCBpc0hlRGVhZCwgbGlzdEVuZW1pZXNcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHsgZW5lbWllcywgaXNIZURlYWQsIGlzUGxheWVyRGVhZCwgbGlzdEVuZW1pZXMgfSBmcm9tIFwiLi9jb21wX2JhdHRsZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IFJhY2UsIHJhY2VzIH0gZnJvbSAnLi9jb21wX3JhY2VzJztcbi8vIGxvZ193aW5kb3dcbmxldCBsb2dfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZycpO1xuLy8gb2JqZWN0IGNvbnN0cnVjdG9yIGZ1bmN0aW9uc1xuZnVuY3Rpb24gQ2hhcmFjdGVyKG5hbWUsIGF0dGFja0JvbnVzLCBhcm1vckNsYXNzLCBjdXJyZW50SFAsIG1heEhQLCBzcGVjaWFsQXR0YWNrLCBlcXVpcHBlZFdlYXBvbiwgZXF1aXBwZWRBcm1vciwgZXF1aXBwZWRNaXNjLCBpbnZlbnRvcnksIHJhY2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYXR0YWNrQm9udXMgPSBhdHRhY2tCb251cztcbiAgICB0aGlzLmFybW9yQ2xhc3MgPSBhcm1vckNsYXNzO1xuICAgIHRoaXMuY3VycmVudEhQID0gY3VycmVudEhQO1xuICAgIHRoaXMubWF4SFAgPSBtYXhIUDtcbiAgICB0aGlzLnNwZWNpYWxBdHRhY2sgPSBzcGVjaWFsQXR0YWNrO1xuICAgIHRoaXMuZXF1aXBwZWRXZWFwb24gPSAnJztcbiAgICB0aGlzLmVxdWlwcGVkQXJtb3IgPSAnJztcbiAgICB0aGlzLmVxdWlwcGVkTWlzYyA9ICcnO1xuICAgIHRoaXMuaW52ZW50b3J5ID0gW107XG4gICAgdGhpcy5yYWNlID0gcmFjZTtcbn1cblxuZnVuY3Rpb24gTW9uc3RlcihuYW1lLCBtb25zdGVyQXR0YWNrQm9udXMsIGFybW9yQ2xhc3MsIGN1cnJlbnRIUCwgbWF4SFAsIHN0YXR1cykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5tb25zdGVyQXR0YWNrQm9udXMgPSBtb25zdGVyQXR0YWNrQm9udXM7XG4gICAgdGhpcy5hcm1vckNsYXNzID0gYXJtb3JDbGFzcztcbiAgICB0aGlzLmN1cnJlbnRIUCA9IGN1cnJlbnRIUDtcbiAgICB0aGlzLm1heEhQID0gbWF4SFA7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG59XG4vLyBoZXJvLnByb3RvdHlwZSBhdHRhY2sgbWV0aG9kXG5DaGFyYWN0ZXIucHJvdG90eXBlLmF0dGFjayA9IGZ1bmN0aW9uKHNlbGVjdGVkRW5lbXkpIHtcbiAgICBpZiAoZW5lbWllcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkRW5lbXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW5lbXkuc3RhdHVzID09ICdidXJuaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBlbmVteS5jdXJyZW50SFAgPSBlbmVteS5jdXJyZW50SFAgLSA1O1xuICAgICAgICAgICAgICAgICAgICBpc0hlRGVhZChlbmVteSk7IFxuICAgICAgICAgICAgICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gYCR7ZW5lbXkubmFtZX0gaXMgYnVybmluZyBmb3IgNSBkYW1hZ2UhYDtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOnllbGxvdycpO1xuICAgICAgICAgICAgICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiB7XG4gICAgICAgICAgICAgICAgZW5lbXkuc3RhdHVzID0gJyc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIEFycmF5LmZyb20obG9nX3dpbmRvdy5jaGlsZHJlbikuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBlbnRyeS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2NvbG9yOndoaXRlOycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbmVteS5jdXJyZW50SFAgPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGF0dGFja1JvbGwgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMjApICsgMSArIHRoaXMuYXR0YWNrQm9udXMpO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyMS5lcXVpcHBlZFdlYXBvbiAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrUm9sbCA9IGF0dGFja1JvbGwgKyB0aGlzLmVxdWlwcGVkV2VhcG9uLml0ZW1BdHRhY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyMS5lcXVpcHBlZEFybW9yICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2tSb2xsID0rIGF0dGFja1JvbGwgKyB0aGlzLmVxdWlwcGVkQXJtb3IuaXRlbUF0dGFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIxLmVxdWlwcGVkTWlzYyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrUm9sbCA9KyBhdHRhY2tSb2xsICsgdGhpcy5lcXVpcHBlZE1pc2MuaXRlbUF0dGFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGV4dHJhQ29tbWVudCA9ICcnO1xuICAgICAgICAgICAgICAgIGxldCBleHRyYUF0dGFjayA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IGV4dHJhRGFtYWdlID0gMDtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuc3BlY2lhbEF0dGFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdOb3JtYWwgQXR0YWNrJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdTcGVjdHJhbCBCbGFkZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUNvbW1lbnQgPSAnIHdpdGggdGhlIFNwZWN0cmFsIEJsYWRlICgtMiBhY2N1cmFjeSwgKzIgZGFtYWdlIGlmIGhpdHMpJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQXR0YWNrID0gLTI7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYURhbWFnZSA9ICs0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1NwaXJpdCBCbGVzc2luZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUF0dGFjayA9IC0xMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1dpdGhlcmluZyBCb2x0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQ29tbWVudCA9ICcgd2l0aCB0aGUgV2l0aGVyaW5nIEJvbHQgKC00IGFjY3VyYWN5LCBidXQgKzYgZGFtYWdlIGlmIGhpdHMpJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQXR0YWNrID0gLTQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYURhbWFnZSA9ICs2O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1dyYXRoZnVsIFZpc2FnZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUNvbW1lbnQgPSAnIHdpdGggdGhlIFdyYXRoZnVsIFZpc2FnZSAoLTQgYWNjdXJhY3ksIGJ1dCBzdHVucyB0aGUgdGFyZ2V0KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUF0dGFjayA9IC00O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGFja1JvbGwgKyBleHRyYUF0dGFjayA+IHNlbGVjdGVkRW5lbXkuYXJtb3JDbGFzcykgeyBzZWxlY3RlZEVuZW15LnN0YXR1cyA9ICdzdHVubmVkJzsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0JpbmQgb2YgdGhlIEd1YXJkaWFuJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQ29tbWVudCA9ICcgd2l0aCB0aGUgQmluZCBvZiB0aGUgR3VhcmRpYW4gKC00IGFjY3VyYWN5LCBidXQgc3R1bnMgdGhlIHRhcmdldCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFBdHRhY2sgPSAtNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2tSb2xsICsgZXh0cmFBdHRhY2sgPiBzZWxlY3RlZEVuZW15LmFybW9yQ2xhc3MpIHsgc2VsZWN0ZWRFbmVteS5zdGF0dXMgPSAnc3R1bm5lZCc7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdFc3NlbmNlIERyYWluJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQ29tbWVudCA9ICcgd2l0aCB0aGUgRXNzZW5jZSBEcmFpbiAoLTQgYWNjdXJhY3ksIGJ1dCBzZXRzIHRhcmdldCBvbiBmaXJlIGZvciBvbmUgdHVybiknO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFBdHRhY2sgPSAtNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2tSb2xsICsgZXh0cmFBdHRhY2sgPiBzZWxlY3RlZEVuZW15LmFybW9yQ2xhc3MpIHsgc2VsZWN0ZWRFbmVteS5zdGF0dXMgPSAnYnVybmluZyc7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yYWNlICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBleHRyYUF0dGFjayArPSB0aGlzLnJhY2UucmFjZUF0dGFja0JvbnVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYXR0YWNrUm9sbCArIGV4dHJhQXR0YWNrID4gc2VsZWN0ZWRFbmVteS5hcm1vckNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRW5lbXkuY3VycmVudEhQIC09IGF0dGFja1JvbGwgKyBleHRyYUF0dGFjayArIGV4dHJhRGFtYWdlIC0gc2VsZWN0ZWRFbmVteS5hcm1vckNsYXNzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gYCR7dGhpcy5uYW1lfSBhdHRhY2tzICR7c2VsZWN0ZWRFbmVteS5uYW1lfSR7ZXh0cmFDb21tZW50fSEgVGhlIGF0dGFjayBoaXRzIGFuZCBkZWFscyAke2F0dGFja1JvbGwgKyBleHRyYUF0dGFjayArIGV4dHJhRGFtYWdlIC0gc2VsZWN0ZWRFbmVteS5hcm1vckNsYXNzfSBkYW1hZ2UhYDtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOnllbGxvdycpO1xuICAgICAgICAgICAgICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgaXNIZURlYWQoc2VsZWN0ZWRFbmVteSk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RFbmVtaWVzKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNwZWNpYWxBdHRhY2sgPT0gJ1NwaXJpdCBCbGVzc2luZycpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlYWxlZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllckhQbWlzc2luZyA9IHRoaXMubWF4SFAgLSB0aGlzLmN1cnJlbnRIUDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllckhQbWlzc2luZyA+IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEhQID0gdGhpcy5jdXJyZW50SFAgKyA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhbGVkID0gNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJIUG1pc3NpbmcgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFsZWQgPSBwbGF5ZXJIUG1pc3Npbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRIUCA9IHRoaXMubWF4SFA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFsZWQgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9IGNhc3RzIFNwaXJpdCBCbGVzc2luZywgaGVhbGluZyB0aGVtc2VsZiBmb3IgJHtoZWFsZWR9IEhQIWA7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjp5ZWxsb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgIG1lbnVVcGRhdGVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IGAke3RoaXMubmFtZX0gYXR0YWNrcyAke3NlbGVjdGVkRW5lbXkubmFtZX0hIFRoZSBhdHRhY2sgbWlzc2VzIWA7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjp5ZWxsb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbmVtaWVzLmxlbmd0aCAhPT0gMCkgeyBcbiAgICAgICAgICAgICAgICAgICAgZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbmVteS5zdGF0dXMgIT09ICdzdHVubmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15LmNvdW50ZXJhdHRhY2soKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVuZW15LnN0YXR1cyA9PSAnc3R1bm5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSBgJHtlbmVteS5uYW1lfSBpcyBzdHVubmVkIWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOnllbGxvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ193aW5kb3cuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSBgV2hpY2ggbW9uc3RlciBkbyBJIGF0dGFjaz9gO1xuICAgICAgICAgICAgbG9nX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7ICAgIFxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IGBObyBtb25zdGVycyBhcm91bmQuYDtcbiAgICAgICAgbG9nX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgfVxufVxuLy8gY2hhcmFjdGVyIGNsYXNzZXNcbmZ1bmN0aW9uIEphbml0b3IobmFtZSwgYXR0YWNrQm9udXMsIGFybW9yQ2xhc3MsIGN1cnJlbnRIUCwgbWF4SFAsIHNwZWNpYWxBdHRhY2ssIGVxdWlwcGVkV2VhcG9uLCBlcXVpcHBlZEFybW9yLCBlcXVpcHBlZE1pc2MsIGludmVudG9yeSwgcmFjZSkge1xuICAgIENoYXJhY3Rlci5jYWxsKHRoaXMsIG5hbWUsIGF0dGFja0JvbnVzLCBhcm1vckNsYXNzLCBjdXJyZW50SFAsIG1heEhQLCBzcGVjaWFsQXR0YWNrLCBlcXVpcHBlZFdlYXBvbiwgZXF1aXBwZWRBcm1vciwgZXF1aXBwZWRNaXNjLCBpbnZlbnRvcnksIHJhY2UpO1xufVxuZnVuY3Rpb24gQWNjb3VudGFudChuYW1lLCBhdHRhY2tCb251cywgYXJtb3JDbGFzcywgY3VycmVudEhQLCBtYXhIUCwgc3BlY2lhbEF0dGFjaywgZXF1aXBwZWRXZWFwb24sIGVxdWlwcGVkQXJtb3IsIGVxdWlwcGVkTWlzYywgaW52ZW50b3J5LCByYWNlKSB7XG4gICAgQ2hhcmFjdGVyLmNhbGwodGhpcywgbmFtZSwgYXR0YWNrQm9udXMsIGFybW9yQ2xhc3MsIGN1cnJlbnRIUCwgbWF4SFAsIHNwZWNpYWxBdHRhY2ssIGVxdWlwcGVkV2VhcG9uLCBlcXVpcHBlZEFybW9yLCBlcXVpcHBlZE1pc2MsIGludmVudG9yeSwgcmFjZSk7XG59XG5mdW5jdGlvbiBEYW5jZXIobmFtZSwgYXR0YWNrQm9udXMsIGFybW9yQ2xhc3MsIGN1cnJlbnRIUCwgbWF4SFAsIHNwZWNpYWxBdHRhY2ssIGVxdWlwcGVkV2VhcG9uLCBlcXVpcHBlZEFybW9yLCBlcXVpcHBlZE1pc2MsIGludmVudG9yeSwgcmFjZSkge1xuICAgIENoYXJhY3Rlci5jYWxsKHRoaXMsIG5hbWUsIGF0dGFja0JvbnVzLCBhcm1vckNsYXNzLCBjdXJyZW50SFAsIG1heEhQLCBzcGVjaWFsQXR0YWNrLCBlcXVpcHBlZFdlYXBvbiwgZXF1aXBwZWRBcm1vciwgZXF1aXBwZWRNaXNjLCBpbnZlbnRvcnksIHJhY2UpO1xufVxuLy8gc2V0dGluZyBwcm90b3R5cGVzXG5PYmplY3Quc2V0UHJvdG90eXBlT2YoSmFuaXRvci5wcm90b3R5cGUsIENoYXJhY3Rlci5wcm90b3R5cGUpO1xuT2JqZWN0LnNldFByb3RvdHlwZU9mKEFjY291bnRhbnQucHJvdG90eXBlLCBDaGFyYWN0ZXIucHJvdG90eXBlKTsgXG5PYmplY3Quc2V0UHJvdG90eXBlT2YoRGFuY2VyLnByb3RvdHlwZSwgQ2hhcmFjdGVyLnByb3RvdHlwZSk7IFxuLy8gY2hhcmFjdGVyIG9iamVjdFxubGV0IGNoYXIxID0gbmV3IENoYXJhY3RlcignU29tZWJvZHknLCAwLCAxMCwgMjAsIDEwMCwgJ05vcm1hbCBBdHRhY2snLCAnJywgJycsICcnLCBbXSwgJycpO1xuLy8gZW5lbWllcyBvYmplY3RzXG5sZXQgZ29ibGluX2dydW50ID0gbmV3IE1vbnN0ZXIoJ0dvYmxpbicsIDAsIDEwLCA0MCwgNDAsICcnKTtcbmxldCBnb2JsaW5fZmlnaHRlciA9IG5ldyBNb25zdGVyKCdHb2JsaW4gRmlnaHRlcicsIDIsIDEzLCAyNSwgMjUsICcnKTtcbmxldCBnb2JsaW5fc2hhbWFuID0gbmV3IE1vbnN0ZXIoJ0dvYmxpbiBTaGFtYW4nLCAzLCAxNiwgMzAsIDMwLCAnJyk7XG5sZXQgZ29ibGluX2NoaWVmdGFpbiA9IG5ldyBNb25zdGVyKCdHb2JsaW4gQ2hpZWZ0YWluJywgNSwgMTcsIDQwLCA0MCwgJycpO1xubGV0IHdpemFyZCA9IG5ldyBNb25zdGVyKCdIYWxmIERlYWQgT2xkIEd1eScsIC0xLCAxMCwgNSwgNSwgJycpO1xubGV0IGltcDEgPSBuZXcgTW9uc3RlcignUmVkIEltcCcsIDAsIDUsIDUsIDUsICcnKTtcbmxldCBpbXAyID0gbmV3IE1vbnN0ZXIoJ0JsdWUgSW1wJywgMCwgNSwgNSwgNSwgJycpO1xubGV0IHdpc3AxID0gbmV3IE1vbnN0ZXIoJ1dpc3AnLCAwLCAwLCAxMCwgMTApO1xuLy8gbW9uc3RlcnMgb2JqZWN0XG5sZXQgbW9uc3RlcnMgPSB7IGdvYmxpbl9ncnVudCwgZ29ibGluX2ZpZ2h0ZXIsIGdvYmxpbl9zaGFtYW4sIGdvYmxpbl9jaGllZnRhaW4sIHdpemFyZCwgaW1wMSwgaW1wMiwgd2lzcDEgfVxuLy8gbW9uc3RlciBjb3VudGVyYXR0YWNrXG4vL2VuZW15IHR1cm4gbG9naWNcbk1vbnN0ZXIucHJvdG90eXBlLmNvdW50ZXJhdHRhY2sgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgYXR0YWNrUm9sbCA9ICBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMjApICsgMSkgKyB0aGlzLm1vbnN0ZXJBdHRhY2tCb251cztcbiAgICBpZiAoYXR0YWNrUm9sbCA+IGNoYXIxLmFybW9yQ2xhc3MpIHtcbiAgICAgICAgY2hhcjEuY3VycmVudEhQIC09IGF0dGFja1JvbGwgLSBjaGFyMS5hcm1vckNsYXNzO1xuICAgICAgICBpZiAoY2hhcjEuY3VycmVudEhQIDwgMCkge1xuICAgICAgICAgICAgY2hhcjEuY3VycmVudEhQID0gMDtcbiAgICAgICAgfVxuICAgICAgICBtZW51VXBkYXRlcigpO1xuICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gYCR7dGhpcy5uYW1lfSBhdHRhY2tzICR7Y2hhcjEubmFtZX0hIFRoZSBhdHRhY2sgaGl0cyBhbmQgZGVhbHMgJHthdHRhY2tSb2xsIC0gY2hhcjEuYXJtb3JDbGFzc30gZGFtYWdlIWA7XG4gICAgICAgIGVudHJ5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjp5ZWxsb3cnKTtcbiAgICAgICAgbG9nX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgICAgIGlzUGxheWVyRGVhZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9IGF0dGFja3MgJHtjaGFyMS5uYW1lfSEgVGhlIGF0dGFjayBtaXNzZXMhYDtcbiAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOnllbGxvdycpO1xuICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICB9XG59XG4vLyAtLS1tZW51IHRleHQgdXBkYXRlciBmdW5jdGlvbi0tLVxuZnVuY3Rpb24gbWVudVVwZGF0ZXIoKSB7XG4gICAgbGV0IG1lbnVfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbiAgICBpZiAoY2hhcjEgaW5zdGFuY2VvZiBKYW5pdG9yKSB7IC8vIFdyYWl0aFxuICAgICAgICBtZW51X3dpbmRvdy50ZXh0Q29udGVudCA9IGBZb3UgYXJlICR7Y2hhcjEubmFtZX0uIFlvdXIgYXJlIGEgV3JhaXRoLiBJbiBsaWZlLCB5b3Ugd2VyZSBhICR7Y2hhcjEucmFjZS5uYW1lfS4gWW91ciBhcm1vciBjbGFzcyBpcyAke2NoYXIxLmFybW9yQ2xhc3N9LiBZb3VyIEhQIGlzICR7Y2hhcjEuY3VycmVudEhQfS8ke2NoYXIxLm1heEhQfS5gO1xuICAgIH0gZWxzZSBpZiAoY2hhcjEgaW5zdGFuY2VvZiBBY2NvdW50YW50KSB7IC8vIFBvbHRlcmdlaXN0XG4gICAgICAgIG1lbnVfd2luZG93LnRleHRDb250ZW50ID0gYFlvdSBhcmUgJHtjaGFyMS5uYW1lfS4gWW91ciBhcmUgYSBQb2x0ZXJnZWlzdC4gSW4gbGlmZSwgeW91IHdlcmUgYSAke2NoYXIxLnJhY2UubmFtZX0uIFlvdXIgYXJtb3IgY2xhc3MgaXMgJHtjaGFyMS5hcm1vckNsYXNzfS4gWW91ciBIUCBpcyAke2NoYXIxLmN1cnJlbnRIUH0vJHtjaGFyMS5tYXhIUH0uYDtcbiAgICB9IGVsc2UgaWYgKGNoYXIxIGluc3RhbmNlb2YgRGFuY2VyKSB7IC8vIEd1YXJkaWFuIFNwaXJpdFxuICAgICAgICBtZW51X3dpbmRvdy50ZXh0Q29udGVudCA9IGBZb3UgYXJlICR7Y2hhcjEubmFtZX0uIFlvdXIgYXJlIGEgR3VhcmRpYW4gU3Bpcml0LiBJbiBsaWZlLCB5b3Ugd2VyZSBhICR7Y2hhcjEucmFjZS5uYW1lfS4gWW91ciBhcm1vciBjbGFzcyBpcyAke2NoYXIxLmFybW9yQ2xhc3N9LiBZb3VyIEhQIGlzICR7Y2hhcjEuY3VycmVudEhQfS8ke2NoYXIxLm1heEhQfS5gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnVfd2luZG93LnRleHRDb250ZW50ID0gYFlvdSBhcmUgJHtjaGFyMS5uYW1lfS4gWW91ciBjbGFzcyBpcyB1bmtub3duLiBZb3VyIGFybW9yIGNsYXNzIGlzICR7Y2hhcjEuYXJtb3JDbGFzc30uIFlvdXIgSFAgaXMgJHtjaGFyMS5jdXJyZW50SFB9LyR7Y2hhcjEubWF4SFB9LmA7XG4gICAgfVxufVxuLy8gZXhwb3J0XG5leHBvcnQge1xuICAgIENoYXJhY3RlcixcbiAgICBNb25zdGVyLFxuICAgIEphbml0b3IsXG4gICAgQWNjb3VudGFudCxcbiAgICBEYW5jZXIsXG4gICAgY2hhcjEsXG4gICAgZ29ibGluX2dydW50LFxuICAgIGdvYmxpbl9maWdodGVyLFxuICAgIGdvYmxpbl9zaGFtYW4sXG4gICAgZ29ibGluX2NoaWVmdGFpbixcbiAgICB3aXphcmQsXG4gICAgaW1wMSxcbiAgICBpbXAyLFxuICAgIG1lbnVVcGRhdGVyLFxuICAgIG1vbnN0ZXJzXG59IiwiLy8gZmFjdG9yeSBmdW5jdGlvbiAvIGNvbnN0cnVjdG9yIC8gY2xhc3NcbmNsYXNzIFJhY2Uge1xuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsSW5zdGFuY2VzKCkge1xuICAgICAgICByZXR1cm4gUmFjZS5pbnN0YW5jZXM7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCByYWNlQXR0YWNrQm9udXMsIHJhY2VIUEJvbnVzLCByYWNlQXJtb3JCb251cykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucmFjZUF0dGFja0JvbnVzID0gcmFjZUF0dGFja0JvbnVzO1xuICAgICAgICB0aGlzLnJhY2VIUEJvbnVzID0gcmFjZUhQQm9udXM7XG4gICAgICAgIHRoaXMucmFjZUFybW9yQm9udXMgPSByYWNlQXJtb3JCb251cztcbiAgICB9XG59XG4vLyBjcmVhdGlvbiBvZiByYWNlIG9iamVjdHNcbmxldCBSZWFsbWVyID0gbmV3IFJhY2UoJ1JlYWxtZXInLCAnW3N0b2NreSBhbmQgc3RvdXQsIGJsYWggYmxhaF0nLCAxLCAwLCAwKTtcbmxldCBNb3J0YXIgPSBuZXcgUmFjZSgnTW9ydGFyJywgJ1tzdG9ja3kgYW5kIHN0b3V0LCBibGFoIGJsYWhdJywgMCwgMCwgMSk7IC8vIGFscmVhZHkgY29ucXVlcmVkIGJ5IHRoZSBSZWFsbSBuYXRpb24/IFNlY29uZC1jbGFzcyBjaXRpemVucyBpbiB0aGUgUmVhbG1cbmxldCBEZWFkbGFuZGVyID0gbmV3IFJhY2UoJ0RlYWRsYW5kZXInLCAnW3N0b2NreSBhbmQgc3RvdXQsIGJsYWggYmxhaF0nLCAwLCAxNSwgMCk7XG4vLyBvYmplY3Qgb2Ygb2JqZWN0cyBmb3IgZXhwb3J0aW5nXG5sZXQgcmFjZXMgPSB7IFJlYWxtZXIsIE1vcnRhciwgRGVhZGxhbmRlciB9XG4vLyBleHBvcnRpbmcgdGhlIGNsYXNzIGFuZCB0aGUgb2JqZWN0IG9mIG9iamVjdHNcbmV4cG9ydCB7IFJhY2UsIHJhY2VzIH0iLCJpbXBvcnQgeyBtb25zdGVycyB9IGZyb20gJy4vY29tcF9vYmplY3RzX2FuZF9tZXRob2RzJztcbmltcG9ydCB7IGFsbEl0ZW1zLCBwbGF5ZXJHb2xkLCBhZGRHb2xkIH0gZnJvbSAnLi9jb21wX2ludmVudG9yeV9zeXN0ZW0nO1xuaW1wb3J0IHsgaWNvbnMgfSBmcm9tICcuL2NvbXBfYXNzZXRzJztcbmltcG9ydCB7IHN0b3J5RWxlbWVudCB9IGZyb20gJy4vY29tcF9zdG9yeV9vYmplY3RzJztcbi8vIHBsYXllcidzIGNob2ljZXMhXG5sZXQgY2hvc2VuU3VuID0gJyc7XG4vLyAtLS0gc2NyaXB0IC0tLVxuLy8gRklORCBUSEUgQ0FNUCAoRE9OJ1QgS05PVylcbmxldCBhcHByb2FjaENhbXBEb250S25vdzEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgcnVuIHRocm91Z2ggdGhlIEZvcmVzdCBvZiBNaXJyb3JzIGluIHRoZSBkaXJlY3Rpb24gb2Ygd2hlcmUgeW91J3ZlIHNlZW4gdGhlIHNtb2tlLmAsIGBZb3UgcnVuIGZvciB3aGF0IGZlZWxzIGxpa2UgYW4gaG91ci5gLCBgYF0sIC8vIHNlZSBwZW9wbGUsIHllbGwgYXQgdGhlbSwgcmVhbGl6ZSB0aGF0IHlvdSdyZSBkZWFkLiB0aGVuIG1lcmdlIHdpdGggZGVzY3JpcHRpb25zXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZClcbi8vIEZJTkQgVEhFIENBTVAgKEtOT1cgVEhBVCBZT1UnUkUgQSBTUElSSVQpXG5sZXQgbHlzYW5kZXJEZXNjcmlwdGlvbiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFRoZSBsYXN0IHBlcnNvbiBhcm91bmQgdGhlIGNhbXBmaXJlIGlzIGEgZmlndXJlIHdpdGggc2hvdWxkZXItbGVuZ3RoIHJlZCBoYWlyLmAsIGBUaGV5IGxvb2sgbGlrZSB0aGUgeW91bmdlc3Qgb2YgdGhlIHRyaW8sIHBlcmhhcHMgaW4gdGhlaXIgbGF0ZSAyMCdzLmAsIGBEZXNwaXRlIHRoYXQsIHRoZXkgY2FycnkgdGhlbXNlbHZlcyB3aXRoIHRoZSBwb2lzZSBvZiBhIHNlYXNvbmVkIHdhcnJpb3IuIFRoZXkgYXBwZWFyIGluY3JlZGlibHkgdmlnaWxhbnQsIGFzIGlmIGF3YWl0aW5nIGEgY29tbWFuZC5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkKVxubGV0IHNuYXBEZXNjcmlwdGlvbiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFRvIGhlciByaWdodCBpcyBhIG1hbiB3aXRoIGxvbmcgaGFpciBmcmFtaW5nIGhpcyBmYWNlLiBIZSBzZWVtcyB0byBiZSBpbiBoaXMgZWFybHkgMzAncy5gLCBgSGlzIGRlbWVhbm9yIGlzIGNoYXJtaW5nLCBoaXMgc21pbGUgZWFzeSwgaW52aXRpbmcgd2l0aCBhIGhpbnQgb2YgbWlzY2hpZWYuYCwgYFRoZXJlJ3MgYSBzZW5zZSBvZiByZXN0bGVzc25lc3MgYWJvdXQgaGltLCBhcyBpZiBoZSdzIGNvbnN0YW50bHkgc2Vla2luZyBzb21ldGhpbmcganVzdCBvdXQgb2YgcmVhY2guYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGx5c2FuZGVyRGVzY3JpcHRpb24pXG5sZXQgcGVjdWxpYXJEZXNjcmlwdGlvbiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYERlc3BpdGUgdGhlIGJpdGluZyBjb2xkIG9mIHRoZSBibGl6emFyZCwgc2hlIHNpdHMgd2l0aCBhIHNlbnNlIG9mIGNvbnRyb2wsIGhlciBwb3N0dXJlIHJpZ2lkLmAsIGBTaGUgc2VlbXMgdG8gYmUgaW4gaGVyIGVhcmx5IDQwJ3MuIEhlciBmYWNlIGJlYXJzIHRoZSBtYXJrcyBvZiBoYXJkc2hpcCwgd2l0aCBsaW5lcyBldGNoZWQgZGVlcGx5IGFyb3VuZCBoZXIgZXllcyBhbmQgbW91dGguYCwgYFR3byBzY2ltaXRhcnMgYW5kIGEgbXVza2V0IGFyZSByZXN0aW5nIG5leHQgdG8gaGVyLiBKdWRnaW5nIGJ5IGhlciBvdXRmaXQsIHNoZSBzZWVtcyB0byBiZSB0aGUgb25lIGluIGNoYXJnZS5gLCBgRGVzcGl0ZSBoZXIgb3V0d2FyZCBhcHBlYXJhbmNlIG9mIHN0b2ljaXNtLCB5b3Ugc2Vuc2UgYSBkZWVwLXNlYXRlZCBmYXRpZ3VlLCBhcyBpZiBzaGUncyB0aXJlZCBvZiBhbHdheXMgYmVpbmcgdGhlIG9uZSBpbiBjaGFyZ2UuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHNuYXBEZXNjcmlwdGlvbilcbmxldCBhcHByb2FjaENhbXBLbm93NCA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFRoZSB0aHJlZSBwZW9wbGUgYXJlIGFybWVkIC0geW91IHNlZSBtdXNrZXRzIGFuZCBzd29yZHMgbmV4dCB0byB0aGVtLiBUaGV5IGxvb2sgbGlrZSBzb2xkaWVycywgbWVyY2VuYXJpZXMsIG9yIGd1YXJkcyBvZiBzb21lIHNvcnQuYCwgYEl0J3Mga2luZCBvZiBjYWxtaW5nIC0gdG8gZmluYWxseSBzZWUgc29tZSBodW1hbnMuYCwgYERlc3BpdGUgdGhlIGZhY3QgdGhhdCBpdCdzIHRvbyBsYXRlIGZvciB5b3UuYCwgYE5vLCBzdG9wIGl0LiBJdCdzIG5vdCB0b28gbGF0ZS4gWW91J3ZlIGRpZWQsIGJ1dCB5b3UncmUgbm90IGRlYWQuIFlvdSdyZSBhIFNwaXJpdC4gQW5kIHlvdSBjYW4gc3Vydml2ZS5gLCBgVGhlIGZpcnN0IHdvbWFuIGh1ZGRsZXMgYnkgdGhlIGNhbXBmaXJlLCB0aGUgb2xpdmUgc2tpbiBvZiBoZXIgZmFjZSBnbG93aW5nIHNvZnRseSBpbiB0aGUgZmlyZWxpZ2h0LmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBwZWN1bGlhckRlc2NyaXB0aW9uKVxubGV0IGFwcHJvYWNoQ2FtcEtub3czID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgS25vd2luZyB0aGF0IHRoZXkgY2Fubm90IHNlZSB5b3UsIHlvdSBmbG9hdCBjbG9zZXIgdG8gdGhlbSBhbmQgdGFrZSBhIGNsb3NlciBsb29rLmAsIGBUaGUgZmlyc3QgcGVyc29uIGlzIGEgd29tYW4gZHJlc3NlZCBpbiBhIGxvbmcsIHRoaWNrLCBkYXJrIHJlZCBjb2F0LiBZb3Ugbm8gbG9uZ2VyIGNhcmUgYWJvdXQgdGhlIGNvbGQsIGJ1dCBpdCdzIGFuIHVuZGVyc3RhbmRhYmxlIGNob2ljZSBmb3IgaGVyLiBDb3VsZCB0aGUgd2VhdGhlciBoYXZlIGtpbGxlZCB5b3U/IFlvdSBzaGFrZSBhd2F5IHRoZXNlIHRob3VnaHRzLiBJdCdzIHBvaW50bGVzcyB0byBzcGVjdWxhdGUgZm9yIG5vdy5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgYXBwcm9hY2hDYW1wS25vdzQpXG5sZXQgYXBwcm9hY2hDYW1wS25vdzIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgZmxvYXQgY2xvc2VyLiBJdCdzIGNvbW1vbiBrbm93bGVkZ2UgaW4gdGhlIEZhdGVkIFJlYWxtIHRoYXQgaHVtYW5zIGNhbm5vdCBzZWUgU3Bpcml0cyBwaHlzaWNhbGx5LmAsIGBUbyBwcm9tb3RlIHRoZWlyIGNvbmNlcHRzLCBTcGlyaXRzIGhhdmUgdGhlIGFiaWxpdGllcyB0byBhZmZlY3QgdGhlIG1hdGVyaWFsIHdvcmxkIGluIGdob3N0bHkgd2F5cy4gVGhlIG1vcmUgcG93ZXJmdWwgdGhlIFNwaXJpdCwgdGhlIG1vcmUgc3Vic3RhbnRpYWwgdGhlIGVmZmVjdHMuYCwgYEZvciBub3csIHlvdSBmbG9hdCBjbG9zZXIgdG8gdGhlIGNhbXBmaXJlLCBzZWVpbmcgdGhyZWUgcGVvcGxlIGh1ZGRsZWQgYXJvdW5kIHRoZSBicmlnaHQgZmxhbWUuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGFwcHJvYWNoQ2FtcEtub3czKVxubGV0IGFwcHJvYWNoQ2FtcEtub3cxID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGZsb2F0IGZvciB3aGF0IGZlZWxzIGxpa2UgaG91cnMuYCwgYFllcy4gRmxvYXQuIE5vdyB0aGF0IHlvdSB1bmRlcnN0YW5kIHlvdXIgc2l0dWF0aW9uLCB5b3UgcmVhbGl6ZSB0aGF0IHlvdSBkb24ndCBoYXZlIHRvIG1vdmUgeW91ciBmZWV0IHRvIG1vdmUuIFBlcmtzIG9mIGJlaW5nIGEgU3Bpcml0LmAsIGBPY2Nhc2lvbmFsbHkgeW91IG9wZW4geW91ciBleWVzLCBvY2Nhc2lvbmFsbHkgeW91IGNsb3NlIHRoZW0uYCwgYEl0IGRvZXNuJ3QgbG9vayBsaWtlIHlvdSBjYW4gc2VlIHRocm91Z2ggc29saWQgbWF0dGVyLCBzbyBhbGwgeW91IHNlZSBpcyB0aGUgc25vd3kgRm9yZXN0IG9mIE1pcnJvcnMuYCwgYEV2ZW50dWFsbHksIHlvdSBzZWUgYSBsaWdodC4gVGhpcyBvbmUncyBkZWZpbml0ZWx5IGEgY2FtcGZpcmUuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGFwcHJvYWNoQ2FtcEtub3cyKVxuLy8gVEhFIEZPUkVTVCBPRiBNSVJST1JTXG5sZXQgZW5kRm9yZXN0Q29uY2VudHJhdGU0ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgUmlnaHQuIFNvIHlvdSBtdXN0IGJlIGEgU3Bpcml0IG9mIGEgUGhvZW5peC4gT2YgYSBTdW4uIE9mIGEgR29kLmAsIGBJdCdzIHByZXR0eSBtdWNoIGNvbW1vbiBrbm93bGVkZ2UgdGhhdCBTcGlyaXRzIGV4aXN0IHRvIGZ1cnRoZXIgcHJvbW90ZSB0aGUgY29uY2VwdCwgb3IgcG9ydGZvbGlvLCBvZiB0aGVpciBQaG9lbml4LmAsIGBJZiB0aGV5IGZhaWwgdG8gcHJvbW90ZSB0aGVpciBjb25jZXB0LCB0aGUgU3Bpcml0IGRpc2FwcGVhcnMuIERpZXMsIGZvcmV2ZXJgLCBgT2gsIEdvZHMsIGlzIHRoYXQgd2h5IHlvdSd2ZSBiZWVuIGZlZWxpbmcgd2Vha2VyIGFuZCB3ZWFrZXIhP2AsIGBZb3UgcmlzZSB0byB5b3VyICdmZWV0JywgaW4gcGFuaWMgYWdhaW4uIFlvdSBoYXZlIHRvIGZpbmQgc29tZW9uZSB0byBwcm9tb3RlIHlvdXIgY29uY2VwdCB0by4gV2l0aG91dCBwZW9wbGUgdG8gcHJvbW90ZSB5b3VyIGNvbmNlcHQgdG8sIHlvdSdsbCBkaXNhcHBlYXIuIEFuZCBzb29uLCB5b3VyIGJvZHkgZmVlbHMgaXQuYCwgYFlvdSByZW1lbWJlciBzdG9yaWVzIHRoYXQgU3Bpcml0cyBjYW4gc2Vuc2UgbGlmZS4gWW91IGNsb3NlIHlvdXIgZXllcyBhbmQgdHJ5IHRvIGxldCB5b3VyIGZlZWxpbmdzIGd1aWRlIHlvdSB0byB0aGUgbmVhcmVzdCBwZW9wZWwuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGFwcHJvYWNoQ2FtcEtub3cxKVxubGV0IGVuZEZvcmVzdENvbmNlbnRyYXRlMyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Nob2ljZScsXG4gICAgW2BZb3UgbXVzdCBiZSBhIFNwaXJpdC5gLCBgVGhpcyBtZWFucywgaW4gbGlmZSwgeW91IG11c3QgaGF2ZSB3b3JzaGlwcGVkIG9uZSBvZiB0aGUgMjAgU3Vucywgb3IgUGhvZW5peGVzLCBob3cgdGhleSdyZSBhbHNvIGNhbGxlZC4gRG9uZSBlbm91Z2gsIGluIGZhY3QsIHRvIGhhdmUgYmVlbiBtYWRlIGEgU3Bpcml0IG9mIHRoYXQgU3VuLmAsIGBXaHkgaXMgaXQgc28gaGFyZCB0byByZWNhbGwgdGhlIGRldGFpbHMgb2YgeW91ciBsaWZlP2AsIGBZb3UgY29uY2VudHJhdGUgYWdhaW4sIHNpdHRpbmcgdGhlcmUgaW4gdGhlIHNub3cuYCwgYFNub3dmbGFrZXMgZmFsbCByaWdodCB0aHJvdWdoIHlvdS4gSG93IGRpZCB5b3Ugbm90IG5vdGljZSB0aGF0PyBQZXJoYXBzIGZyb20gdGhlIHBhbmljLCBhbmQgZm9ybSB5b3VyIHJhYmlkIHNlYXJjaCBmb3IgaGVscC5gLCBgJ1doaWNoIFN1biBkaWQgSSB3b3JzaGlwIGluIGxpZmU/IFlvdSB0aGluay4nYF0sXG4gICAgW3tjaG9pY2VUZXh0OiBgVGhlIFBob2VuaXggb2YgQ29tcGFzc2lvbi5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ2NvbXBhc3Npb25TcGlyaXQnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZW5kRm9yZXN0Q29uY2VudHJhdGU0fSxcbiAgICB7Y2hvaWNlVGV4dDogYFRoZSBQaG9lbml4IG9mIEp1c3RpY2UuYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdqdXN0aWNlU3Bpcml0JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGVuZEZvcmVzdENvbmNlbnRyYXRlNH0sXG4gICAge2Nob2ljZVRleHQ6IGBUaGUgUGhvZW5peCBvZiBGcmVlZG9tLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnZnJlZWRvbVNwaXJpdCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBlbmRGb3Jlc3RDb25jZW50cmF0ZTR9LFxuICAgIHtjaG9pY2VUZXh0OiBgVGhlIFBob2VuaXggb2YgTWFzdGVyeS5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ21hc3RlcnlTcGlyaXQnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZW5kRm9yZXN0Q29uY2VudHJhdGU0fSxcbiAgICB7Y2hvaWNlVGV4dDogYFRoZSBQaG9lbml4IG9mIFdpc2RvbS5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ3dpc2RvbVNwaXJpdCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBlbmRGb3Jlc3RDb25jZW50cmF0ZTR9XSxcbiAgICB1bmRlZmluZWQpIFxubGV0IGVuZEZvcmVzdENvbmNlbnRyYXRlMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBzaXQgdGhlcmUgZm9yIGEgbW9tZW50LCBtaW5kIGNvbXBsZXRlbHkgYmxhbmsuYCwgYFlvdSdyZSBkZWFkLmAsIGBZb3UncmUgY29uc2Npb3VzLCBob3dldmVyLiBZb3UgaGF2ZSB0byBiZSBhIFNwaXJpdCwgcmlnaHQ/YCwgYFlvdSBjb25jZW50cmF0ZSAtIHdoYXQgZG8geW91IGtub3cgb2YgU3Bpcml0cz9gLCBgV2hlbiBwZW9wbGUgZGllLCB0aGV5IHJlaW5jYXJuYXRlIGludG8gYW5pbWFscy4gV2hlbiBhbmltYWxzIGRpZSwgdGhleSByZWluY2FybmF0ZSBpbnRvIHBlb3BsZWAsIGBIb3dldmVyLCBpZiB0aGUgZHlpbmcgcGVyc29uIGhhZCBkb25lIGVub3VnaCBpbiB0aGUgd29yc2hpcCBvZiBvbmUgb2YgdGhlIDIwIFN1bnMsIHRoZXkgcmVpbmNhcm5hdGUgaW50byBhIFNwaXJpdC5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZW5kRm9yZXN0Q29uY2VudHJhdGUzKVxubGV0IGVuZEZvcmVzdENvbmNlbnRyYXRlMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBmYWxsIHRvIHRoZSBzbm93eSBncm91bmQgb2YgdGhlIGZvcmVzdCwgc2l0dGluZyB3aXRoIHlvdXIgbGVncyBvdXRzdHJldGNoZWQgaW4gZnJvbnQgb2YgeW91LmAsIGBZb3VyIG1pbmQgcmFjZXMuIFlvdXIgYm9keSBjYW4ndCBmZWVsIHRoZSBjb2xkLmAsIGBZb3UncmUgcmVhbGx5IGRlYWQuYF0sXG4gICAgJ0ZvTXNwaXJpdEtub3cnLFxuICAgIGVuZEZvcmVzdENvbmNlbnRyYXRlMilcbmxldCBlbmRGb3Jlc3RFeHBsb3JlU2NyZWFtMyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSB0cnkgdG8gc2NyZWFtLCBhZ2FpbiBhbmQgYWdhaW4uIE5vIHNvdW5kIGNvbWVzIG91dC5gLCBgWW91IHN0b21wIGluIHRoZSBzbm93LCBidXQgaXQgZG9lc24ndCBtb3ZlLmAsIGBGaW5hbGx5LCB5b3UgYXBwcm9hY2ggYSB0cmVlIGFuZCByZWFjaCBvdXQgdG8gdG91Y2ggaXRzIGJhcmsuYCwgYFlvdSBndWxwLCBwYW5pYyBhbmQgcmVhbGl6YXRpb24gc3RhcnRpbmcgdG8gc2V0dGxlIGluLCBhcyB5b3Ugc2xvd2x5IHJlYWNoIHdpdGggeW91ciBoYW5kIHRvIHRoZSB0cmVlLmAsIGBZb3VyIGhhbmQgcGFzc2VzIHJpZ2h0IHRocm91Z2ggdGhlIHRyZWUsIGRpc2FwcGVhcmluZyBpbnRvIHRoZSBiYXJrLmAsIGBZb3UgZGlkbid0IHdha2UgdXAgaGVyZSBpbiB0aGUgRm9yZXN0IG9mIE1pcnJvcnMuIFlvdSBkaWVkIGhlcmUsIGFuZCBub3cgeW91J3JlIGEgU3Bpcml0LmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBlbmRGb3Jlc3RDb25jZW50cmF0ZTEpXG5sZXQgZW5kRm9yZXN0RXhwbG9yZVNjcmVhbTIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3Ugc3RvcC4gV2hhdCB0aGUgaGVsbCBpcyBnb2luZyBvbj9gLCBgWW91J3ZlIGJlZW4gZmVlbGluZyBvZmYgZXZlciBzaW5jZSB5b3Ugd29rZSB1cC5gLCBgTm93LCB5b3UncmUgc3RhcnRpbmcgdG8gc3VzcGVjdCB0aGF0IGl0J3Mgbm90IGp1c3QgdGhlIGNvbGQgYW5kIGZyb3N0Yml0ZS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZW5kRm9yZXN0RXhwbG9yZVNjcmVhbTMpXG5sZXQgZW5kRm9yZXN0RXhwbG9yZVNjcmVhbTEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2AnQS1hLWFueWJvZHkhJ2AsIGBZb3UgeWVsbCwgYnV0IHRoZSBvbmx5IHNvdW5kIHRoYXQgeW91IGhlYXIgaXMgdGhlIGJsaXp6YXJkLmAsIGAnU29tZWJvZHkgaGVscCBtZSEnYCwgYFlvdSBzY3JlYW0gYWdhaW4uIFRoaXMgdGltZSB5b3Ugbm90aWNlIHRoYXQgeW91IGRvbid0IGV2ZW4gZmVlbCB0aGUgdmlicmF0aW9uIGluIHlvdXIgdGhyb2F0LmBdLFxuICAgICdGb01zcGlyaXRLbm93JyxcbiAgICBlbmRGb3Jlc3RFeHBsb3JlU2NyZWFtMilcbmxldCBlbmRGb3Jlc3RFeHBsb3JlTm9TY3JlYW0zID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGxvb2sgYXJvdW5kIGZyb20gdGhlIHRvcCBvZiB0aGUgaGlsbC5gLCBgSW4gdGhlIGRpc3RhbmNlLCB5b3Ugc3BvdCBhIGZhaW50IGdsaW1wc2Ugb2Ygc21va2UuIE5vdyB0aGlzIGlzIGRlZmluaXRlbHkgZmlyZSBvZiBzb21lIGtpbmQuYCwgYEFuZCBob3BlIGZvciB5b3UuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGFwcHJvYWNoQ2FtcERvbnRLbm93MSlcbmxldCBlbmRGb3Jlc3RFeHBsb3JlTm9TY3JlYW0yID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGtlZXAgcnVubmluZyB0aHJvdWdoIHRoZSBmb3Jlc3QsIGFuZCBtYW5hZ2UgdG8gcmVhY2ggdGhlIHRvcCBvZiB0aGUgaGlsbC5gLCBgWW91J3JlIG5vdCBkZWFkIHlldCwgZGVzcGl0ZSBiZWluZyBpbiB0aGUgZnJvemVuIEZvcmVzdCBvZiBNaXJyb3JzIGZvciBhdCBsZWFzdCBhbiBob3VyIG9yIHR3byBieSBub3cuYCwgYFlvdSdyZSBub3QgZXZlbiBvdXQgb2YgYnJlYXRoIGZyb20gc3ByaW5naW5nIHVwIHRoZSBoaWxsLmAsIGBObyB0aW1lIHRvIHRoaW5rIGFib3V0IGl0IG5vdy5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZW5kRm9yZXN0RXhwbG9yZU5vU2NyZWFtMylcbmxldCBlbmRGb3Jlc3RFeHBsb3JlTm9TY3JlYW0xID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgTm8gc2NyZWFtaW5nLmAsIGBZb3Uga2VlcCBydW5uaW5nIGZvcndhcmQuYCwgYFlvdSBzcHJpbnQgdGhyb3VnaCB0aGUgdHJlZXMgZm9yIHdoYXQgZmVlbHMgbGlrZSBhbiBob3VyLmAsIGBGaW5hbGx5LCB5b3UgbWFuYWdlIHRvIHNwb3QgYSBiaWcgaGlsbCBpbiB0aGUgZm9yZXN0LiBJdCdsbCBnaXZlIHlvdSBhIHZhbnRhZ2UgcG9pbnQsIHNvIHlvdSBzcHJpbmcgaW4gaXRzIGRpcmVjdGlvbi5gXSxcbiAgICAnRm9Nbm9TcGlyaXRLbm93JyxcbiAgICBlbmRGb3Jlc3RFeHBsb3JlTm9TY3JlYW0yKVxubGV0IGVuZEZvcmVzdEV4cGxvcmUxID0gbmV3IHN0b3J5RWxlbWVudCgnY2hvaWNlJyxcbiAgICBbYFlvdSBicmVhdGhlLCB0cnlpbmcgdG8ga2VlcCB5b3VyIHdhcm10aC5gLCBgQmx1cnJ5IHZpc2lvbiwgY2FuJ3QgZmVlbCB5b3VyIGxlZ3MgLSB5b3UgbWlnaHQgYmUgY2xvc2UgdG8gZGVhdGguIFlvdSBuZWVkIGhlbHAuYCwgYFRoZSBGb3Jlc3Qgb2YgTWlycm9ycyBpcyBlbm9ybW91cywgaXQgdGFrZXMgdXAgYSBiaWcgcGFydCBvZiB0aGUgZWFzdGVybiBzaWRlIG9mIHRoZSBGYXRlZCBSZWFsbS5gLCBgVGhlcmUgbXVzdCBiZSBzb21lYm9keSB0cmF2ZXJzaW5nIHRoZSBGb3Jlc3QgdGhhdCBjb3VsZCBoZWxwIHlvdS5gLCBgU2hvdWxkIHlvdSBzY3JlYW0gb3V0IGZvciBoZWxwP2BdLFxuICAgIFt7Y2hvaWNlVGV4dDogYFllcy4gSXQnbGwgYmUgaGFyZCBmb3IgYW55b25lIHRvIGhlYXIgeW91IHRocm91Z2ggdGhlIGJsaXp6YXJkLCBidXQgeW91J3JlIGRlc3BlcmF0ZS5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ0ZvTXNjcmVhbScsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBlbmRGb3Jlc3RFeHBsb3JlU2NyZWFtMX0sXG4gICAge2Nob2ljZVRleHQ6IGBObyBzY3JlYW1pbmcuIFRoZSBvbmx5IGF0dGVudGlvbiBpdCdsbCBhdHRyYWN0IGFyZSB0dXNrd29sdmVzLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnRm9Nbm9TY3JlYW0nLFxuICAgIGNob2ljZU5leHRTdG9yeTogZW5kRm9yZXN0RXhwbG9yZU5vU2NyZWFtMX1dLFxuICAgIHVuZGVmaW5lZClcbmxldCBlbmRGb3Jlc3Q1ID0gbmV3IHN0b3J5RWxlbWVudCgnY2hvaWNlJyxcbiAgICBbYCBZb3VyIHZpc2lvbiBpcyBnZXR0aW5nIGJsdXJyaWVyLmAsIGBZb3UgbmVlZCB0byBrZWVwIG1vdmluZy4gV2hhdCB0byBkbyBub3c/YF0sXG4gICAgW3tjaG9pY2VUZXh0OiAnS2VlcCBtb3ZpbmcsIGtlZXAgZXhwbG9yaW5nIHRoZSBmb3Jlc3QuJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdGb01lbmRFeHBsb3JlJyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGVuZEZvcmVzdEV4cGxvcmUxfSxcbiAgICB7Y2hvaWNlVGV4dDogJ1N0b3AgYW5kIHRyeSB0byBjb25jZW50cmF0ZSBvbiB5b3VyIGNvbmRpdGlvbi4nLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ0ZvTWVuZENvbmNlbnRyYXRlJyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGVuZEZvcmVzdENvbmNlbnRyYXRlMX1dLFxuICAgIHVuZGVmaW5lZClcbmxldCBlbmRGb3Jlc3Q0ID0gbmV3IHN0b3J5RWxlbWVudCgnY29uc2VxdWVuY2UnLFxuICAgIFt7ZGVwZW5kZW5jeTogJ0ZvTXNhd1dpc3AnLCBjb25zZXF1ZW5jZVRleHQ6IFtgWW91IHJlbWVtYmVyOiBcIlNwaXJpdHMgY2Fubm90IHRvdWNoIHBoeXNpY2FsIG9iamVjdHMuXCJgLCBgVGhhdCBjcmVhdHVyZSBpbiB0aGUgd29vZHMgLSBpdCBtdXN0IGhhdmUgYmVlbiBhIFNwaXJpdC5gLCBgSXQgY291bGQgdG91Y2ggeW91LmAsIGBDb3VsZCB5b3UgYmUuLi4gZGVhZD9gLCBgWW91ciB0aG91Z2h0cyBhcmUgaW50ZXJydXB0ZWQgYXMgeW91ciBib2R5IGlzIGZlZWxpbmcgd2Vha2VyLmBdfSxcbiAgICB7ZGVwZW5kZW5jeTogJ0ZvTW5vdFNlZW5XaXNwJywgY29uc2VxdWVuY2VUZXh0OiBbYE1heWJlIHlvdSBzaG91bGQgaGF2ZSBhc2tlZCB0aGUgY2FtcGZpcmUgcGVvcGxlIGZvciBoZWxwLiBGb3IgZm9vZC4gV2FybXRoLiBBbnl0aGluZy5gLCBgWW91IGZlZWwgeW91cnNlbGYgZ2V0dGluZyB3ZWFrZXIuYF19LF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGVuZEZvcmVzdDUpXG5sZXQgZW5kRm9yZXN0MyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2NvbnNlcXVlbmNlJyxcbiAgICBbe2RlcGVuZGVuY3k6ICdGb01zZWFyY2hlZEJvZHknLCBjb25zZXF1ZW5jZVRleHQ6IFtgWW91IGNvbmNlbnRyYXRlLCB3aW5jaW5nLiBUcnlpbmcgdG8gdGhpbmsgYmFjayB0byB5b3VyIGVkdWNhdGlvbi4gV2hhdCBkbyB5b3Uga25vdyBvZiBTcGlyaXRzP2AsIGBMZXQncyBzZWUuLi4gU3Bpcml0cyBhcmUgdGhlIG9ubHkgY3JlYXR1cmVzIHdpdGggbWFnaWNhbCBhYmlsaXRpZXMuYCwgYFNwaXJpdHMgYWxzby4uLiBjYW5ub3QgdG91Y2ggcGh5c2ljYWwgb2JqZWN0cy5gXX0sXG4gICAge2RlcGVuZGVuY3k6ICdGb01sZWZ0Qm9keScsIGNvbnNlcXVlbmNlVGV4dDogW2BZb3Ugc2hvdWxkIGJlIGRlYWQgYnkgbm93LCBidXQgeW91IGRvbid0IHNlZW0gdG8gZmVlbCB0aGUgY29sZC5gLCBgWW91IGNhbiBmZWVsIHBhbmljIGFuZCBmcnVzdHJhdGlvbiBncm93aW5nLmBdfSxdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBlbmRGb3Jlc3Q0KVxubGV0IGVuZEZvcmVzdDIgPSBuZXcgc3RvcnlFbGVtZW50KCdjb25zZXF1ZW5jZScsXG4gICAgW3tkZXBlbmRlbmN5OiAnRm9Nc2VhcmNoZWRCb2R5JywgY29uc2VxdWVuY2VUZXh0OiBbYFN0b3AuIFJlY2l0ZSB0aGUgZmFjdHMuYCwgYFlvdSB3b2tlIHVwIGluIHRoZSBGb3Jlc3Qgb2YgTWlycm9ycy5gLCBgWW91IGRvbid0IHNlZW0gdG8gZmVlbCB0aGUgY29sZC5gLCBgWW91ciBoYW5kIHdlbnQgcmlnaHQgdGhyb3VnaCB0aGF0IGNvcnBzZS5gLCBgU29tZXRoaW5nIGlzIG9mZiBoZXJlLmAsIGBZb3UgaGF2ZSBhIHRoZW9yeS5gXX0sXG4gICAge2RlcGVuZGVuY3k6ICdGb01sZWZ0Qm9keScsIGNvbnNlcXVlbmNlVGV4dDogW2BTdG9wLiBSZWNpdGUgdGhlIGZhY3RzLmAsIGBZb3Ugd29rZSB1cCBpbiB0aGUgRm9yZXN0IG9mIE1pcnJvcnMuYF19XSxcbiAgICB1bmRlZmluZWQsXG4gICAgZW5kRm9yZXN0MylcbmxldCBlbmRGb3Jlc3QxID0gbmV3IHN0b3J5RWxlbWVudCgnZW5kRXhwbG9yYXRpb24nLFxuICAgIFtgWW91IGNvbnRpbnVlIHRydWRnaW5nIHRocm91Z2ggdGhlIHNub3d5IHdvb2RzLCBsb29raW5nIGZvciBhbnkgc29ydCBvZiBoZWxwLmAsIGBZb3UgY2FuJ3QgZmVlbCB3ZWFrZXIgd2l0aCBlYWNoIHN0ZXAsIGJ1dCB5b3Ugc3RpbGwgZG9uJ3QgZmVlbCB0aGUgY29sZC5gLCBgWW91IHN0b3AgYW5kIHRoaW5rLmBdLFxuICAgIHt1bmxvY2tlZDogZmFsc2V9LFxuICAgIGVuZEZvcmVzdDIpXG5sZXQgd2lzcExlYXZlID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IHR1cm4gYXJvdW5kIHN0ZXAgYXdheSBmcm9tIHRoZSBsaWdodC5gLCBgSWYgaXQncyBhIGNhbXBmaXJlLCB5b3UgY2FuJ3QgYmUgc3VyZSB0aGF0IHRoZXNlIHBlb3BsZSB3b24ndCBiZSBob3N0aWxlLmAsIGBBbmQsIHdpdGggdGhlIGJsaXp6YXJkIGFuZCB5b3VyIGJsdXJyZWQgdmlzaW9uIC0gZnJvbSB5b3VyIGluanVyaWVzPyAtIHlvdSBjYW4ndCBldmVuIGJlIHN1cmUgdGhhdCBpdCdzIGEgY2FtcGZpcmUuYF0sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnLFxuICAgIHVuZGVmaW5lZClcbmxldCB3aXNwQXBwcm9hY2g1ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgVGhhdCBtdXN0IGhhdmUgYmVlbi4uLiBhIFNwaXJpdCwgcmlnaHQ/IFlvdSBkbyBrbm93IG9mIFNwaXJpdHMuYCwgYFdoZW4gb3JkaW5hcnkgcGVvcGxlIGRpZSwgdGhleSByZWluY2FybmF0ZSBpbnRvIGFuaW1hbHMuYCwgYElmIGEgcGVyc29uIGhhcyBkb25lIGVub3VnaCBpbiB0aGUgd29yc2hpcCBvZiBvbmUgb2YgdGhlIDIwIFN1bnMsIHRoZXkgcmVpbmNhcm5hdGUgaW50byBhIFNwaXJpdC5gLCBgU25vd2ZhbGwgaXMgZ2V0dGluZyB3b3JzZS4gVGltZSB0byBtb3ZlLmBdLFxuICAgICdleHBsb3JhdGlvbkV2ZW50JyxcbiAgICB1bmRlZmluZWQpXG5sZXQgd2lzcEFwcHJvYWNoNCA9IG5ldyBzdG9yeUVsZW1lbnQoJ2l0ZW0nLFxuICAgIFtgVGhlIHdpc3AgYmFsbCBmbGllcyB0b3dhcmRzIHlvdSBhZ2Fpbi4gVGhpcyB0aW1lIHlvdSdyZSByZWFkeSBhbmQgeW91IGxhbmQgYSBzdHJpa2UgaW4gdGhlIG1pZGRsZSBvZiBpdHMgZ2xvd2luZyBib2R5LmAsIGBXaXRoIGEgZml6emluZyBzb3VuZCwgdGhlIHdpc3AgZXhwbG9kZXMgaW50byB0aW55IHNwZWNrcyBvZiBsaWdodC5gLCBgWW91IHNlZSBvbmUgb2YgdGhlIGJpZ2dlciBzcGVja3MsIGEgZmlzdC1zaXplZCBiYWxsIG9mIGxpZ2h0LCBoYXMgbGFuZGVkIHVuZGVyIHlvdXIgZmVldC5gLCBgWW91IHJlYWNoIGludG8gdGhlIHNub3cgYW5kIHBpY2sgaXQgdXAuIEl0IGVtaXRzIGEgd2FybWluZyBhdXJhLmAsIGBbQ2xpY2sgdGhlIEludmVudG9yeSBidXR0b24gdG8gZXF1aXAgaXRlbXNdYF0sXG4gICAgYWxsSXRlbXMud2lzcEJhbGwsXG4gICAgd2lzcEFwcHJvYWNoNSlcbmxldCB3aXNwQXBwcm9hY2gzID0gbmV3IHN0b3J5RWxlbWVudCgnYmF0dGxlJyxcbiAgICBbYFlvdSB0dXJuIGFyb3VuZCwgdHJ5aW5nIHRvIGtlZXAgaXQgaW4gc2lnaHQuYCwgYEl0IHNlZW1zIHRvIGJlIGEgZ2xvd2luZyB3aXNwIG9mIGxpZ2h0LmAsIGBJdCBzZWVtcyB0byBiZSBnZXR0aW5nIHJlYWR5IHRvIHN3b29wIGluIHRvd2FyZHMgeW91IGFnYWluLmAsIGBJdCdzIGNlcnRhaW5seSBubyBjYW1wZmlyZSwgYW5kIGl0IGRvZXNuJ3Qgc2VlbSB0byBiZSBmcmllbmRseS4gWW91IG5lZWQgYW5zd2VycywgYnV0IHN1cnZpdmFsIGNvbWVzIGZpcnN0LiBZb3UncmUgbm90IHN1cmUgeW91IGNhbiB0YWtlIG1hbnkgbW9yZSBvZiB0aGlzIFwid2lzcCdzXCIgZmx5LWJ5cy4gWW91IGhhdmUgbm90aGluZyBidXQgeW91ciBmaXN0cyB0byBkZWZlbmQgeW91cnNlbGYgd2l0aC5gXSxcbiAgICBbbW9uc3RlcnMud2lzcDFdLFxuICAgIHdpc3BBcHByb2FjaDQpXG5sZXQgd2lzcEFwcHJvYWNoMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFRoZSBibGl6emFyZCwgdGhlIHRyZWVzIGFuZCB0aGUgc25vdyBkb24ndCBoZWxwLmAsIGBBcyB5b3Ugc3RlcCBjbG9zZXIsIHRoZSBsaWdodCBzdWRkZW5seSBtb3Zlcy4gSXQgZmxpZXMgYSBsaXR0bGUgdXB3YXJkcywgYW5kIHRoZW4gbW92ZXMgY2xvc2VyIHRvd2FyZHMgeW91LmAsIGBUaGUgbGlnaHQgc3BlZWRzIHVwLCBmbHlpbmcgdG93YXJkcyB5b3UsIHVudGlsIGl0IGZsaWVzIHJpZ2h0IHRocm91Z2ggeW91LCBwYWluZnVsbHkgYnVybmluZyB5b3VyIGZsZXNoLmBdLFxuICAgICdleHBsb3JhdGlvbkV2ZW50JyxcbiAgICB3aXNwQXBwcm9hY2gzKVxubGV0IHdpc3BBcHByb2FjaDEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgY2FuJ3QgaGVscCBidXQgZmVlbCB3ZWFrZXIuIFRoZSBjb2xkIG11c3QgYmUgZ2V0dGluZyB0byB5b3UuYCwgYFlvdSBuZWVkIGhlbHAuIFlvdSBkZWNpZGUgdG8gd2FsayBjbG9zZXIgdG8gdGhlIGxpZ2h0LmAsIGBZb3Ugc3RlcCBzbG93bHksIHRyeWluZyB0byBzZWUgd2hhdCB0aGUgbGlnaHQgaXMuYF0sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnLFxuICAgIHdpc3BBcHByb2FjaDIpXG5sZXQgd2lzcDIgPSBuZXcgc3RvcnlFbGVtZW50KCdjaG9pY2UnLFxuICAgIFtgWW91ciB2aXNpb24gaXMgc28gYmx1cnJ5IHRoYXQgeW91IGNhbid0IHF1aXRlIG1ha2Ugb3V0IHdoYXQgdGhlIGxpZ2h0IGlzLmAsIGBQZXJoYXBzLCBjYW1wZmlyZT8gUGVyaGFwcyBzb21lb25lIGlzIGluIHRoaXMgZm9yZXN0IGFmdGVyIGFsbC5gLCBgSXQgY291bGQgYWxzbyBiZSBiYW5kaXRzLiBQb2FjaGVycy4gV29yc2hpaHBwZXJzIG9mIGV2aWwgU3VucywgcmVhZHkgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgYSBkeWluZyB0cmF2ZWxlci5gLCBgQXBwcm9hY2ggdGhlIGxpZ2h0IHNvdXJjZT9gXSxcbiAgICBbe2Nob2ljZVRleHQ6ICdTbG93bHkgYXBwcm9hY2ggdGhlIGxpZ2h0LicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnRm9Nc2F3V2lzcCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiB3aXNwQXBwcm9hY2gxfSxcbiAgICB7Y2hvaWNlVGV4dDogJ1R1cm4gYXJvdW5kIGFuZCB3YWxrIGF3YXkgZm9ybSB0aGUgbGlnaHQuJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdGb01ub3RTZWVuV2lzcCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiB3aXNwTGVhdmV9XSxcbiAgICB1bmRlZmluZWQpXG5sZXQgd2lzcDEgPSBuZXcgc3RvcnlFbGVtZW50KCdyYW5kb21FbmNvdW50ZXInLFxuICAgIFtgWW91IGNvbnRpbnVlIHRydWRnaW5nIHRocm91Z2ggdGhlIHNub3cuYCwgYFlvdSBkb24ndCBzZWVtIHRvIGZlZWwgeW91ciBmZWV0LiBZb3UgaG9wZSBpdCdzIG5vdCBkdWUgdG8gZnJvc3RiaXRlLmAsIGBBcyB5b3UgbGlmdCB5b3VyIGhlYWQgdG8gbG9vayBmb3J3YXJkLCBwbGFjaW5nIHlvdXIgaGFuZCBhZ2FpbnN0IHlvdXIgZm9yZWhlYWQgdG8gYmxvY2sgb2ZmIHRoZSB3aW5kLCB5b3Ugc2VlIGEgbGlnaHQgYmV0d2VlbiB0aGUgdHJlZXMuYF0sXG4gICAge2hhc1BsYXllclNlZW5NZTogZmFsc2V9LFxuICAgIHdpc3AyKVxubGV0IGNvcnBzZUxlYXZlID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IHR1cm4gYXJvdW5kLCBub3Qgd2lzaGluZyB0byBkaXN0dXJiIHRoZSBjb3Jwc2UuYCwgYFlvdSdsbCBtYWtlIGl0IG91dCBvZiBoZXJlLmAsIGBOb3QgdGhpcyB3YXksIGJ1dCB5b3Ugd2lsbC5gLCBgQXMgeW91IHdhbGsgYXdheSBmcm9tIHRoZSBib2R5LCB5b3UgY2FuJ3QgaGVscCBidXQgZmVlbCB3ZWFrZXIuIFByb2JhYmx5IGZyb3N0Yml0ZS4gUmlnaHQ/YF0sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnLFxuICAgIFsnc3RhdHMnLCAnYmVuZXZvbGVuY2UnLCAxMF0pXG5sZXQgY29ycHNlU2VhcmNoMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdXIgaGFuZCBtb3ZlcyByaWdodCB0aHJvdWdoIHRoZSBzbm93LmAsIGBZb3UgdHJ5IGFnYWluLiBZb3UgY2FuJ3QgbW92ZSB0aGUgc25vdy4gWW91ciBoYW5kIG1vdmVzIHJpZ2h0IHRocm91Z2ggdGhlIGNvcnBzZSB0b28uYCwgYFlvdSB0dXJuIGFyb3VuZC5gLCBgQXQgZmlyc3QsIHlvdSB0aG91Z2h0IHRoYXQgdGhlIGJsaXp6YXJkIGZpbGxlZCBpbiBhbnkgdHJhY2tzIGluIHRoZSBzbm93LiBOb3cgdGhhdCB5b3UncmUgbG9va2luZyAtIGl0J3Mgbm90IHRoYXQuYCwgYFlvdSdyZSBub3QgbGVhdmluZyBhbnkgZm9vdHByaW50cyBpbiB0aGUgc25vdyBhdCBhbGwuYCwgYFdoYXQgdGhlIGhlbGwgaXMgZ29pbmcgb24/YF0sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnLFxuICAgIFsnc3RhdHMnLCAnZXZpbCcsIDEwXSlcbmxldCBjb3Jwc2VTZWFyY2gxID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgQWxvbmUsIHdpdGggbm8gYmVsb25naW5ncywgaW4gdGhlIG1pZGRsZSBvZiB3aW50ZXIgaW4gdGhlIEZvcmVzdCBvZiBNaXJyb3JzP2AsIGBZZWFoLCB5b3UnbGwgdGFrZSBhbnl0aGluZywgb3IgaXQnbGwgYmUgdmVyeSBlYXN5IHRvIGVuZCB1cCBsaWtlIHRoaXMgcGVyc29uLmAsIGBZb3UgbG93ZXIgeW91cnNlbGYgdG93YXJkcyB0aGUgYm9keSwgdHJ5aW5nIHRvIHJlbW92ZSBzb21lIHNub3cgZnJvbSB0aGUgYm9keS5gXSxcbiAgICAnZXhwbG9yYXRpb25FdmVudCcsXG4gICAgY29ycHNlU2VhcmNoMilcbmxldCBjb3Jwc2UyID0gbmV3IHN0b3J5RWxlbWVudCgnY2hvaWNlJyxcbiAgICBbYExvb3Rpbmcgd291bGQgYmUgYSBuZXcgbG93LmAsIGBBbHRob3VnaC4uLmAsIGBZb3UncmUgaW4gbm8gY29uZGl0aW9uIHRvIGJlIHBpY2t5LmAsIGBTZWFyY2ggdGhlIGJvZHk/YF0sXG4gICAgW3tjaG9pY2VUZXh0OiAnU2VhcmNoIHRoZSBib2R5LicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnRm9Nc2VhcmNoZWRCb2R5JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGNvcnBzZVNlYXJjaDF9LFxuICAgIHtjaG9pY2VUZXh0OiAnTGVhdmUgdGhlIGJvZHkgYWxvbmUuJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdGb01sZWZ0Qm9keScsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBjb3Jwc2VMZWF2ZX1dLFxuICAgICdleHBsb3JhdGlvbkV2ZW50JylcbmxldCBjb3Jwc2UxID0gbmV3IHN0b3J5RWxlbWVudCgncmFuZG9tRW5jb3VudGVyJyxcbiAgICBbJ1lvdSBjb250aW51ZSBtb3ZpbmcgdGhyb3VnaCB0aGUgRm9yZXN0IG9mIE1pcnJvcnMsIHdoZW4geW91IHNlZSBhIG1vdW5kIGluIHRoZSBzbm93LicsICdUaGUgc25vdyBzZWVtcyB0byBiZSBjb3ZlcmluZyBzb21ldGhpbmcuJywgJ1lvdXIgc3VzcGljaW9ucyBhcmUgdHJ1ZS4gSXQgaXMgYSBsb25lbHkgYm9keSwgaW4gdGhlIGZyb3N0ZWQgZm9yZXN0LCBjb3ZlcmVkIGluIHNub3cuJ10sXG4gICAge2hhc1BsYXllclNlZW5NZTogZmFsc2V9LFxuICAgIGNvcnBzZTIpXG5sZXQgdHVza3dvbGYzID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgSHVoPyBJcyBpdCBibGluZD8gQ3Vyc2VkPyBQZXJoYXBzIGl0J3MgYSBTcGlyaXQncyBpbGx1c2lvbj8gT3IgbWF5YmUgeW91J3JlIGhhbGx1Y2luYXRpbmcuYCwgYFdoYXRldmVyIGl0IGlzLCB0aGUgdHVza3dvbGYgYXQgbGVhc3Qgc2VlbXMgdmVyeSByZWFsLiBZb3UncmUgbm90IGluIGFueSBjb25kaXRpb24gdG8gaW52ZXN0aWdhdGUuYCwgYFlvdSB3b24ndCBnZXQgYW5vdGhlciBjaGFuY2UuIFlvdSBxdWlja2x5IGJhY2sgYXdheSBmcm9tIHRoZSB0dXNrd29sZiB3aGlsZSBpdCdzIGNvbmZ1c2VkIG9yIGRpc3RyYWN0ZWQuYF0sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnLFxuICAgIHVuZGVmaW5lZClcbmxldCB0dXNrd29sZjIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BUaGUgZ3Jvd2xpbmcgc2VlbXMgdG8gYmUgY2xvc2UuIE1heWJlIDE1IG1ldGVycyBiZWhpbmQgeW91LmAsIGBUaGUgdHVza3dvbGYgZG9lc24ndCBzZWVtIHRvIGJlIHN0cmlraW5nIHRob3VnaC4gT2RkLmAsIGBZb3Ugc2xvd2x5IHR1cm4gYXJvdW5kLmAsIGBBIGJpZyB3b2xmIG9mIHNpbHZlciBmdXIgc3RhbmRzIG5vdCBmYXIgZnJvbSB3aGVyZSB5b3UgYXJlLCB0d28gMzAgY21zIGxvbmcgdHVza3MgYXQgdGhlIHJlYWR5LmAsICdJdCBzcGlucyBhcm91bmQgaW4gcGxhY2UsIHNuaWZmaW5nIGFuZCBzZWFyY2hpbmcgZm9yIHNvbWV0aGluZy4gSXQgaWdub3JlcyB5b3UgY29tcGxldGVseS4nXSxcbiAgICAnZXhwbG9yYXRpb25FdmVudCcsXG4gICAgdHVza3dvbGYzKVxubGV0IHR1c2t3b2xmMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ3JhbmRvbUVuY291bnRlcicsXG4gICAgWydBcyB5b3UgcnVuIHRocm91Z2ggdGhlIGZvcmVzdCwgeW91ciB0aG91Z2h0cyBzdGFydCBnYXRoZXIuJywgJ1lvdSBrbm93IHRoZSBGYXRlZCBSZWFsbSBxdWl0ZSB3ZWxsLicsICdKdWRnaW5nIGJ5IHRoZSBmcm9zdGVkIHBlYWtzIGluIHRoZSBkaXN0YW5jZSwgdGhpcyBtdXN0IGJlIHRoZSBGb3Jlc3Qgb2YgTWlycm9ycy4gTmFtZWQgYWZ0ZXIgdGhlIGNsZWFyIHdoaXRlIHNub3cgdGhhdCBsaWVzIGhlcmUgZm9yIDE2IG91dCBvZiB0aGUgMjAgbW9udGhzLicsICdZb3VyIHRob3VnaHRzIHBhdXNlIGFzIHlvdSBoZWFyIGdyb3dsaW5nIGJlaGluZCB5b3UuIEEgdHVza3dvbGYuIEZ1Y2suJ10sXG4gICAge2hhc1BsYXllclNlZW5NZTogZmFsc2V9LFxuICAgIHR1c2t3b2xmMilcbi8vIFdBS0UgVVAgU0VRVUVOQ0VcbmxldCB3YWtlVXBNb3ZlID0gbmV3IHN0b3J5RWxlbWVudCgnZXhwbG9yYXRpb24nLFxuICAgIFtgWW91ciBib2R5IG1vdmVzIHF1aWNrbHksIGJ1dCB0aGUgZmVlbGluZyBvZiBudW1ibmVzcyBhbGwgb3ZlciBpcyBvdmVyd2hlbG1pbmcuYCwgYE11c3QgYmUgdGhlIGZyb3N0Yml0ZS4gSWYgeW91J3JlIGx1Y2t5LCB5b3Ugd29uJ3QgbG9zZSBhbnkgZmluZ2VycyBvciB0b2VzLmAsIGBJbiBhbnkgY2FzZSwgaXQncyB0aW1lIHRvIG1vdmUsIG9yIHlvdSdsbCBsb3NlIHlvdXIgbGlmZSBhcyB3ZWxsLmAsIGBbVVNFIFdBU0Qgb3IgY2xpY2sgdGhlIG1hcCB0byBtb3ZlLl1gXSxcbiAgICBbe2VuY291bnRlclN0b3J5RWxlbWVudDogd2lzcDEsIHRpbGVOdW1iZXI6ICcjdGlsZTMwJywgaWNvbjogaWNvbnMuaWNvblRyZWV9LFxuICAgIHtlbmNvdW50ZXJTdG9yeUVsZW1lbnQ6IGNvcnBzZTEsIHRpbGVOdW1iZXI6ICcjdGlsZTUwJywgaWNvbjogaWNvbnMuaWNvblRyZWUyfSxcbiAgICB7ZW5jb3VudGVyU3RvcnlFbGVtZW50OiB0dXNrd29sZjEsIHRpbGVOdW1iZXI6ICcjdGlsZTcwJywgaWNvbjogaWNvbnMuaWNvblRyZWUzfSxcbiAgICB7ZW5jb3VudGVyU3RvcnlFbGVtZW50OiBlbmRGb3Jlc3QxLCB0aWxlTnVtYmVyOiAnI3RpbGUzJywgaWNvbjogaWNvbnMuaWNvblBlcnNvbn1dLFxuICAgIHVuZGVmaW5lZClcbmxldCB3YWtlVXBMaWUyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91ciBleWVzIG9wZW4gYWdhaW4uIFlvdSBmZWVsIG5vdGljZWFibHkgd2Vha2VyLiBZb3VyIHZpc2lvbiBzZWVtcyBibHVycnkuYCwgYFRoZSBjbGVhciBldmVuaW5nIHNreSBoYXMgY2hhbmdlZCBpbnRvIGEgbmF2eSBibHVlIGR1c2suYCwgJ1lvdSBhbG1vc3QgbGV0IHlvdXIgZXllcyBjbG9zZSBhZ2Fpbiwgd2hlbiB5b3UgaGVhciB0aGUgaG93bCBvZiBhIHR1c2t3b2xmLiBEcml2ZW4gYnkgcHVyZSBpbnN0aW5jdCwgeW91IGdldCB0byB5b3VyIGtuZWVzLCB0aGVuIHRvIHlvdXIgZmVldCwgYW5kIHN0YXJ0IG1vdmluZy4nLCBgRXZlcnlvbmUgaGFzIHRvIGdvIG9uZSBkYXksIGJ1dCB0dXNrd29sZiBmb29kIGlzbid0IHlvdXIgd2F5LmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICB3YWtlVXBNb3ZlKVxubGV0IHdha2VVcExpZTEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgbGllIG9uIHlvdXIgYmVsbHkgaW4gdGhlIHNub3csIGZlZWxpbmcgcG93ZXJsZXNzIHRvIG1vdmUuYCwgYFlvdSBhbG1vc3QgZG9uJ3QgZmVlbCB0aGUgY29sZC4gWW91IHdvbmRlciBpZiBpdCBtZWFucyB0aGF0IHlvdSdyZSBhbG1vc3QgZGVhZCBhbHJlYWR5LiBIb3cgZGlkIHlvdSBnZXQgaGVyZT8gV2VyZSB5b3Ugcm9iYmVkP2AsICdZb3UgY2xvc2UgeW91ciBleWVzIGFnYWluLiBNYXliZSB0aGlzIHByb2JsZW0gd2lsbCBkaXNhcHBlYXIgbGlrZSBhIGJhZCBkcmVhbS4nXSxcbiAgICB1bmRlZmluZWQsXG4gICAgd2FrZVVwTGllMilcbmxldCB3YWtlVXBSaXNlMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbJ1lvdSBnZXQgdG8geW91ciBmZWV0LiBBZ2Fpbiwgd2l0aCBzdXJwcmlzaW5nIGVhc2UuJywgJ1lvdSBtdXN0IG5vdCBoYXZlIGJlZW4gb3V0IGZvciBsb25nLiBZb3UgZmVlbCBsdWNreS4gRnJvc3QgdGFrZXMgbGl2ZXMgcXVpY2tseS4nLCAnWW91IGxvb2sgYmFjayBkb3duLiBUaGUgd2luZCBoYXMgYWxyZWFkeSBkb25lIGl0cyBqb2IgLSB0aGVyZSBpcyBhbG1vc3Qgbm8gaW5kZW50YXRpb24gaW4gdGhlIHNub3cgZnJvbSB5b3VyIGJvZHkgYWxyZWFkeS4nLCBgWW91IGRvbid0IGZlZWwgcGFydGljdWxhcmx5IGNvbGQgeWV0LCBidXQgeW91IHJ1YiB5b3VyIGhhbmRzIGZvciB3YXJtdGggbmV2ZXJ0aGVsZXNzLmBdLFxuICAgIFsnZ29sZCcsIDIwMF0sXG4gICAgd2FrZVVwTW92ZSlcbmxldCB3YWtlVXBSaXNlMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbJ1lvdSBzZWVtIHRvIGJlIGx5aW5nIG9uIHlvdXIgYmVsbHkuJywgJ1lvdSBwbGFudCB5b3VyIGhhbmRzIGluIHRoZSBzbm93LCB0cnlpbmcgdG8gcmlzZSB0byB5b3VyIGtuZWVzLicsICdZb3UgcmlzZSB0byB5b3VyIGtuZWVzIHdpdGggc3VycHJpc2luZyBlYXNlLicsIGBZb3UgbG9vayBhcm91bmQuIFlvdXIgc2F0Y2hlbCBkb2Vzbid0IHNlZW0gdG8gYmUgd2l0aCB5b3UuIEhvdyBkaWQgeW91IGdldCBoZXJlPyBXZXJlIHlvdSByb2JiZWQ/YF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHdha2VVcFJpc2UyKVxubGV0IHdha2VVcDEgPSBuZXcgc3RvcnlFbGVtZW50KCdjaG9pY2UnLFxuICAgIFsnWW91IG9wZW4geW91ciBleWVzIHRvIHNlZSBwdXJlIHdoaXRlIGFyb3VuZCB5b3UuJywgJ1lvdSBsaWZ0IHlvdXIgaGVhZC4gVHJlZXRvcHMgY292ZXJlZCBpbiBzcGFya2xpbmcgd2hpdGUgc25vdy4gQ2xlYXIgZXZlbmluZyBza3kuIFNvdW5kcyBvZiB0aGUgd2luZC4nXSxcbiAgICBbe2Nob2ljZVRleHQ6ICdUcnkgdG8gZ2V0IHVwLicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnd2FrZVVwRGF5JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IHdha2VVcFJpc2UxfSxcbiAgICB7Y2hvaWNlVGV4dDogJ0NvbnRpbnVlIGx5aW5nIGluIHRoZSBzbm93LicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnd2FrZVVwTmlnaHQnLFxuICAgIGNob2ljZU5leHRTdG9yeTogd2FrZVVwTGllMX1dLFxuICAgIHVuZGVmaW5lZClcbi8vIGV4cG9ydFxubGV0IHNjcmlwdE9iamVjdHMgPSB7IHdha2VVcDEgfTtcbmV4cG9ydCB7IHNjcmlwdE9iamVjdHMgfTsiLCIvLyBpbXBvcnQ6IHN0b3J5RWxlbWVudCwgc3RvcnlFbGVtZW50cywgaHVkLCBncmFiSXRlbSwgY2hhcjEsIGNsYXNzZXMsIGxpc3RFbmVtaWVzLCBtb3ZlT24sIGVuZW1pZXMgYXJyYXksIGVuZW15IG9iamVjdHNcbmltcG9ydCB7XG4gICAgcGxheWVySGFuZCwgb3Bwb25lbnRIYW5kLCBjdXJyZW50QmlkLCBhY2N1c2F0aW9uLCBleGFtcGxlTGluZXMsIGRpZTEsIGRpZTIsIGRpZTMsIGRpZTQsIGRpZTUsIGRpZTYsIHN0YXJ0RGljZUdhbWUsIGZhbHNlQ3ViZXMsIHJvbGw2ZDRQbGF5ZXIsIHJvbGw2ZDRPcHBvbmVudCwgcm9sbDFkNCwgcm9sbFBoYXNlLCBiaWRQaGFzZSwgZmlmdHlGaWZ0eSwgb25lVGhpcmQsIG9wcG9uZW50UmVzcG9uc2UsIG9wcG9uZW50QmlkLCBjYWxsT3V0LCBnYW1lRW5kXG59IGZyb20gJy4vY29tcF9kaWNlX2dhbWUnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBcbiAgICB0b3BfYmFyLFxuICAgIGxvZ193aW5kb3csXG4gICAgbWFpbl93aW5kb3csXG4gICAgaW1hZ2Vfd2luZG93LFxuICAgIG1lbnVfd2luZG93LFxuICAgIGJ1dHRvbl93aW5kb3csXG4gICAgYXR0YWNrX2J1dHRvbixcbiAgICBzcGVjaWFsX2J1dHRvbixcbiAgICBpbnZlbnRvcnlfYnV0dG9uLFxuICAgIHN0YXRzX2J1dHRvbixcbiAgICBkaWFsb2dBbmltYXRpb25FbmRcbn0gZnJvbSAnLi9jb21wX2h1ZCc7XG5pbXBvcnQgeyBlbmVtaWVzLCBsaXN0RW5lbWllcywgc3dpdGNoQXR0YWNrIH0gZnJvbSBcIi4vY29tcF9iYXR0bGVfZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBncmFiSXRlbSwgcGxheWVyR29sZCwgYWRkR29sZCB9IGZyb20gJy4vY29tcF9pbnZlbnRvcnlfc3lzdGVtJztcbmltcG9ydCB7XG4gICAgQ2hhcmFjdGVyLFxuICAgIE1vbnN0ZXIsXG4gICAgSmFuaXRvcixcbiAgICBBY2NvdW50YW50LFxuICAgIERhbmNlcixcbiAgICBjaGFyMSxcbiAgICBtZW51VXBkYXRlclxufSBmcm9tICcuL2NvbXBfb2JqZWN0c19hbmRfbWV0aG9kcyc7XG5pbXBvcnQgeyBzdG9yeUVsZW1lbnQsIHN0b3J5RWxlbWVudHMgfSBmcm9tICcuL2NvbXBfc3Rvcnlfb2JqZWN0cyc7XG5pbXBvcnQgeyBzY3JpcHRPYmplY3RzIH0gZnJvbSAnLi9jb21wX3NjcmlwdCc7XG5pbXBvcnQgeyBSYWNlLCByYWNlcyB9IGZyb20gJy4vY29tcF9yYWNlcyc7XG5jb25zdCBldmVudEVtaXR0ZXIgPSByZXF1aXJlKCcuL2NvbXBfZXZlbnRfZW1pdHRlcicpO1xuLy8gZ2FtZS1sb25nIHZhcnNcbmxldCBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMgPSBbXTtcbmxldCBpc1BsYXllckV4cGxvcmluZyA9IGZhbHNlO1xuLy8gdXBkYXRlIHN0b3J5RWxlbWVudHNcbmZ1bmN0aW9uIG5ld1VwZGF0ZU5hbWVzKGFuc3dlcikge1xuICAgIGxldCBhbGxTdG9yeUVsZW1lbnRzID0gc3RvcnlFbGVtZW50LmdldEFsbEluc3RhbmNlcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsU3RvcnlFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzd2l0Y2ggKGFsbFN0b3J5RWxlbWVudHNbaV0udHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZGVzY3JpcHRpb24nOlxuICAgICAgICAgICAgY2FzZSAnaXRlbSc6XG4gICAgICAgICAgICBjYXNlICdiYXR0bGUnOlxuICAgICAgICAgICAgY2FzZSAnY2hvaWNlJzpcbiAgICAgICAgICAgIGNhc2UgJ2V4cGxvcmF0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ3JhbmRvbUVuY291bnRlcic6XG4gICAgICAgICAgICBjYXNlICdmb3JtJzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVwbGFjZUFsbCgnRHVkZScsIGFuc3dlcik7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RpYWxvZ3VlJzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ubnBjTGluZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5ucGNMaW5lLnJlcGxhY2VBbGwoJ0R1ZGUnLCBhbnN3ZXIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXNba10uZGlhbG9ndWVDaG9pY2UgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzW2tdLmRpYWxvZ3VlQ2hvaWNlLnJlcGxhY2VBbGwoJ0R1ZGUnLCBhbnN3ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29uc2VxdWVuY2UnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dFtrXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHRba10ucmVwbGFjZUFsbCgnRHVkZScsIGFuc3dlcik7IFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1lbnVfd2luZG93LnRleHRDb250ZW50ID0gbWVudV93aW5kb3cudGV4dENvbnRlbnQucmVwbGFjZSgnYSBwZXJzb24nLCBhbnN3ZXIpO1xufVxuLy8gdGhlIGZ1bmN0aW9uIGlzIEFMV0FZUyBzdGF0aWNcbi8vIGZ1bmN0aW9uIHN0b3J5KHR5cGUsIHRleHQsIG1vZGlmaWVycylcbmZ1bmN0aW9uIHN0b3J5VGVsbGVyKHN0b3J5RWxlbWVudCkge1xuICAgIHdoaWxlIChtYWluX3dpbmRvdy5maXJzdENoaWxkKSB7bWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQobWFpbl93aW5kb3cuZmlyc3RDaGlsZCl9O1xuICAgIGlmIChzdG9yeUVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoc3RvcnlFbGVtZW50WzBdID09ICdzdGF0cycgfHwgc3RvcnlFbGVtZW50WzBdID09ICdnb2xkJykge1xuICAgICAgICAgICAgaWYgKHN0b3J5RWxlbWVudFswXSA9PSAnc3RhdHMnKSB7XG4gICAgICAgICAgICAgICAgZ2l2ZVN0YXRzKHN0b3J5RWxlbWVudFsxXSwgc3RvcnlFbGVtZW50WzJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkR29sZChzdG9yeUVsZW1lbnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHN0b3J5RWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3J5RWxlbWVudC50eXBlICE9PSAnZGlhbG9ndWUnICYmIHN0b3J5RWxlbWVudC50eXBlICE9PSAnY29uc2VxdWVuY2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRGbGlwcGVyKHN0b3J5RWxlbWVudCwgMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdG9yeUVsZW1lbnQudHlwZSA9PSAnZGlhbG9ndWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0RpYWxvZ3VlTWFrZXIoc3RvcnlFbGVtZW50LCAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zZXF1ZW5jZVNob3dlcihzdG9yeUVsZW1lbnQsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbGVUcmlnZ2Vycyh3aGljaFRpbGVJc1BsYXllck9uLCBjdXJyZW50RXhwbG9yYXRpb25TdG9yeUVsZW1lbnQpO1xuICAgIH1cbn1cbi8vLS0tIHN1cHBsZW1lbnRhcnkgZnVuY3Rpb25zIC0tLVxuLy8gbmV3IGNvbnRpbnVlIGJ1dHRvbiBvcGVyYXRvclxubGV0IGFubm91bmNlbWVudDtcbmZ1bmN0aW9uIHRleHRGbGlwcGVyKHN0b3J5RWxlbWVudCwgbG9vcCwgc3R5bGUpIHtcbiAgICBpZiAoc3RvcnlFbGVtZW50LnR5cGUgPT0gJ3JhbmRvbUVuY291bnRlcicgfHwgc3RvcnlFbGVtZW50Lm1vZGlmaWVycyA9PSAnZXhwbG9yYXRpb25FdmVudCcgfHwgc3RvcnlFbGVtZW50Lm5leHRTdG9yeUVsZW1lbnQgPT0gJ2V4cGxvcmF0aW9uRXZlbnQnKSB7IG1vdmVPbiA9IGZhbHNlOyB9XG4gICAgbGV0IHN0b3J5UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHN0b3J5UGFyYWdyYXBoLnRleHRDb250ZW50ID0gc3RvcnlFbGVtZW50LnRleHRbbG9vcF07XG4gICAgaWYgKHN0eWxlID09ICd5ZWxsb3cnKSB7IHN0b3J5UGFyYWdyYXBoLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjp5ZWxsb3c7Jyk7IH1cbiAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChzdG9yeVBhcmFncmFwaCk7XG4gICAgaWYgKGxvb3AgPCBzdG9yeUVsZW1lbnQudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGNvbnRpbnVlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NsaWNrIGhlcmUgdG8gY29udGludWUuJztcbiAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoY29udGludWVCdXR0b24pO1xuICAgICAgICBjb250aW51ZUJ1dHRvbi5mb2N1cygpO1xuICAgICAgICBjb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxvb3ArKztcbiAgICAgICAgICAgIHRleHRGbGlwcGVyKHN0b3J5RWxlbWVudCwgbG9vcCk7XG4gICAgICAgICAgICBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZChjb250aW51ZUJ1dHRvbik7XG4gICAgICAgICAgICBpZiAobG9vcCA9PSBzdG9yeUVsZW1lbnQudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0b3J5RWxlbWVudC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdG9yeUVsZW1lbnQubW9kaWZpZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaChzdG9yeUVsZW1lbnQubW9kaWZpZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdQbGF5ZXJDb25zZXF1ZW5jZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50Lm5leHRTdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JhdHRsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCYXR0bGVTdGFydGVyKHN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaXRlbSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBncmFiSXRlbShzdG9yeUVsZW1lbnQubW9kaWZpZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm91bmNlbWVudCA9IHsgdGV4dDogW2BBY3F1aXJlZCAke3N0b3J5RWxlbWVudC5tb2RpZmllcnMubmFtZX0hYF0sIHR5cGU6ICdpdGVtQWNxdWlyZWQnLCBuZXh0U3RvcnlFbGVtZW50OiBzdG9yeUVsZW1lbnQubmV4dFN0b3J5RWxlbWVudCB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZsaXBwZXIoYW5ub3VuY2VtZW50LCAwLCAneWVsbG93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaXRlbUFjcXVpcmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3J5VGVsbGVyKGFubm91bmNlbWVudC5uZXh0U3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjaG9pY2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hvaWNlKHN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXhwbG9yYXRpb24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXhwbG9yYXRpb24oc3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUGxheWVyRXhwbG9yaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyYW5kb21FbmNvdW50ZXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIHsgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQobWFpbl93aW5kb3cuZmlyc3RDaGlsZCkgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3J5RWxlbWVudC5tb2RpZmllcnMuaGFzUGxheWVyU2Vlbk1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGVFdmVudHNTZWVuKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlT24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNpcmNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXJjbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGlsZSA9IHdoaWNoVGlsZUlzUGxheWVyT24oY2lyY2xlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI2OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9vcGVkVGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0aWxlJHtpfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb29wZWRUaWxlLmlkID09IGN1cnJlbnRUaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb29wZWRUaWxlLmhhc0NoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BlZFRpbGUucmVtb3ZlQ2hpbGQobG9vcGVkVGlsZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3J5VGVsbGVyKHN0b3J5RWxlbWVudC5uZXh0U3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmRFeHBsb3JhdGlvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwbG9yYXRpb25Cb2FyZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Vfd2luZG93LnJlbW92ZUNoaWxkKGJvYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChpbWFnZV93aW5kb3cuZmlyc3RDaGlsZCkgeyBpbWFnZV93aW5kb3cucmVtb3ZlQ2hpbGQoaW1hZ2Vfd2luZG93LmZpcnN0Q2hpbGQpIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yeVRlbGxlcihzdG9yeUVsZW1lbnQubmV4dFN0b3J5RWxlbWVudCk7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZm9ybSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdGb3JtTWFrZXIoc3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RvcnlFbGVtZW50Lm1vZGlmaWVycyA9PSAnZXhwbG9yYXRpb25FdmVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbW92ZU9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0b3J5RWxlbWVudC5tb2RpZmllcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1swXSA9PSAnc3RhdHMnIHx8IHN0b3J5RWxlbWVudC5tb2RpZmllcnNbMF0gPT0gJ2dvbGQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1swXSA9PSAnc3RhdHMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2l2ZVN0YXRzKHN0b3J5RWxlbWVudC5tb2RpZmllcnNbMV0sIHN0b3J5RWxlbWVudC5tb2RpZmllcnNbMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRHb2xkKHN0b3J5RWxlbWVudC5tb2RpZmllcnNbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbi8vIGNvbnNlcXVlbmNlIGZ1bmN0aW9uXG5mdW5jdGlvbiBjb25zZXF1ZW5jZVNob3dlcihzdG9yeUVsZW1lbnQsIGxpbmUpIHtcbiAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IGNvcnJlY3RDb25zZXF1ZW5jZSA9IG51bGw7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yeUVsZW1lbnQudGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobmV3UGxheWVyQ29uc2VxdWVuY2VzLmluY2x1ZGVzKHN0b3J5RWxlbWVudC50ZXh0W2ldLmRlcGVuZGVuY3kpKSB7XG4gICAgICAgICAgICBjb3JyZWN0Q29uc2VxdWVuY2UgPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjb3JyZWN0Q29uc2VxdWVuY2UgIT09IG51bGwpIHtcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSBzdG9yeUVsZW1lbnQudGV4dFtjb3JyZWN0Q29uc2VxdWVuY2VdLmNvbnNlcXVlbmNlVGV4dFtsaW5lXTtcbiAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgICAgICBpZiAobGluZSA8IHN0b3J5RWxlbWVudC50ZXh0W2NvcnJlY3RDb25zZXF1ZW5jZV0uY29uc2VxdWVuY2VUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGNvbnRpbnVlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb250aW51ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbGljayBoZXJlIHRvIGNvbnRpbnVlLic7XG4gICAgICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChjb250aW51ZUJ1dHRvbik7XG4gICAgICAgICAgICBjb250aW51ZUJ1dHRvbi5mb2N1cygpO1xuICAgICAgICAgICAgY29udGludWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGluZSsrO1xuICAgICAgICAgICAgICAgIG1haW5fd2luZG93LnJlbW92ZUNoaWxkKGNvbnRpbnVlQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBjb25zZXF1ZW5jZVNob3dlcihzdG9yeUVsZW1lbnQsIGxpbmUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAobGluZSA9PSBzdG9yeUVsZW1lbnQudGV4dFtjb3JyZWN0Q29uc2VxdWVuY2VdLmNvbnNlcXVlbmNlVGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN0b3J5VGVsbGVyKHN0b3J5RWxlbWVudC5uZXh0U3RvcnlFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3J5VGVsbGVyKHN0b3J5RWxlbWVudC5uZXh0U3RvcnlFbGVtZW50KTtcbiAgICB9XG59XG4vLyBuZXcgZGlhbG9ndWUgZnVuY3Rpb25cbi8vIGVhY2ggY29udmVyc2F0aW9uIGlzIG5vdCBsaWtlIGEgZGlhbG9ndWUgdHJlZSBpbiBhIHZpZGVvZ2FtZSwgYnV0IGEgc2xpZGluZyB3YXRlcmZhbGwuXG5sZXQgcmVsYXRpb25zaGlwTWV0ZXIgPSAwO1xuZnVuY3Rpb24gbmV3RGlhbG9ndWVNYWtlcihzdG9yeUVsZW1lbnQsIGxpbmUpIHtcbiAgICBsZXQgbnBjRGlhbG9ndWVMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5wY0RpYWxvZ3VlTGluZS50ZXh0Q29udGVudCA9IHN0b3J5RWxlbWVudC50ZXh0W2xpbmVdLm5wY0xpbmU7XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQobnBjRGlhbG9ndWVMaW5lKTtcbiAgICBpZiAobGluZSAhPT0gc3RvcnlFbGVtZW50LnRleHQubGVuZ3RoIC0gMSkge1xuICAgICAgICBzdG9yeUVsZW1lbnQudGV4dFtsaW5lXS5yZXNwb25zZXMuZm9yRWFjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCByZXNwb25zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcmVzcG9uc2VCdXR0b24udGV4dENvbnRlbnQgPSByZXNwb25zZS5kaWFsb2d1ZUNob2ljZTtcbiAgICAgICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKHJlc3BvbnNlQnV0dG9uKTtcbiAgICAgICAgICAgIHJlc3BvbnNlQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hvaWNlQnV0dG9uJyk7XG4gICAgICAgICAgICByZXNwb25zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGlhbG9ndWVCdXR0b25zID0gbWFpbl93aW5kb3cucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZGlhbG9ndWVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxldCB5b3VyTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICB5b3VyTGluZS50ZXh0Q29udGVudCA9IGBcIiR7cmVzcG9uc2UuZGlhbG9ndWVDaG9pY2V9XCJgO1xuICAgICAgICAgICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKHlvdXJMaW5lKTtcbiAgICAgICAgICAgICAgICByZWxhdGlvbnNoaXBNZXRlciA9IHJlbGF0aW9uc2hpcE1ldGVyICsgcmVzcG9uc2UucG9pbnRzO1xuICAgICAgICAgICAgICAgIG5ld0RpYWxvZ3VlTWFrZXIoc3RvcnlFbGVtZW50LCByZXNwb25zZS5kaWFsb2d1ZU5leHRMaW5lKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJlbGF0aW9uc2hpcE1ldGVyIDw9IC0yKSB7XG4gICAgICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaChzdG9yeUVsZW1lbnQubW9kaWZpZXJzWzJdKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZWxhdGlvbnNoaXBNZXRlciA8IDIpIHtcbiAgICAgICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKHN0b3J5RWxlbWVudC5tb2RpZmllcnNbMV0pO1xuICAgICAgICB9IGVsc2UgaWYgKHJlbGF0aW9uc2hpcE1ldGVyID49IDIpIHtcbiAgICAgICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKHN0b3J5RWxlbWVudC5tb2RpZmllcnNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIHJlbGF0aW9uc2hpcE1ldGVyID0gMDtcbiAgICAgICAgbGV0IGNvbnRpbnVlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NsaWNrIGhlcmUgdG8gY29udGludWUuJztcbiAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoY29udGludWVCdXR0b24pO1xuICAgICAgICBjb250aW51ZUJ1dHRvbi5mb2N1cygpO1xuICAgICAgICBjb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHN0b3J5VGVsbGVyKHN0b3J5RWxlbWVudC5uZXh0U3RvcnlFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8gbmV3IGNob2ljZSBmdW5jdGlvblxuZnVuY3Rpb24gbmV3Q2hvaWNlKHN0b3J5RWxlbWVudCkge1xuICAgIHN0b3J5RWxlbWVudC5tb2RpZmllcnMuZm9yRWFjaCgodGhpc0Nob2ljZSkgPT4ge1xuICAgICAgICBsZXQgY2hvaWNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNob2ljZUJ1dHRvbi50ZXh0Q29udGVudCA9IHRoaXNDaG9pY2UuY2hvaWNlVGV4dDtcbiAgICAgICAgY2hvaWNlQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjaG9pY2VCdXR0b24nKTtcbiAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoY2hvaWNlQnV0dG9uKTtcbiAgICAgICAgY2hvaWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbmV3UGxheWVyQ29uc2VxdWVuY2VzLnB1c2godGhpc0Nob2ljZS5jaG9pY2VNb2RpZmllcnMpO1xuICAgICAgICAgICAgaWYgKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzID09ICdjbGFzc1dyYWl0aCcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2hhcjEsIEphbml0b3IucHJvdG90eXBlKTtcbiAgICAgICAgICAgICAgICBKYW5pdG9yLmNhbGwoY2hhcjEsIGNoYXIxLm5hbWUsIDAsIDEwLCAyMCwgMTAwLCAnTm9ybWFsIEF0dGFjaycsICcnLCAnJywgJycsIFtdKTtcbiAgICAgICAgICAgICAgICBtZW51X3dpbmRvdy50ZXh0Q29udGVudCA9IG1lbnVfd2luZG93LnRleHRDb250ZW50LnJlcGxhY2UoJ1lvdXIgY2xhc3MgaXMgdW5rbm93bi4nLCAnWW91IGFyZSBhIFdyYWl0aC4nKTtcbiAgICAgICAgICAgICAgICBzcGVjaWFsX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc3dpdGNoQXR0YWNrKGNoYXIxKSB9KTtcbiAgICAgICAgICAgICAgICBldmVudEVtaXR0ZXIuZW1pdCgnV3JhaXRoJyk7ICAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzQ2hvaWNlLmNob2ljZU1vZGlmaWVycyA9PSAnY2xhc3NQb2x0ZXJnZWlzdCcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2hhcjEsIEFjY291bnRhbnQucHJvdG90eXBlKTtcbiAgICAgICAgICAgICAgICBBY2NvdW50YW50LmNhbGwoY2hhcjEsIGNoYXIxLm5hbWUsIDAsIDEwLCAyMCwgMTAwLCAnTm9ybWFsIEF0dGFjaycsICcnLCAnJywgJycsIFtdKTtcbiAgICAgICAgICAgICAgICBtZW51X3dpbmRvdy50ZXh0Q29udGVudCA9IG1lbnVfd2luZG93LnRleHRDb250ZW50LnJlcGxhY2UoJ1lvdXIgY2xhc3MgaXMgdW5rbm93bi4nLCAnWW91IGFyZSBhIFBvbHRlZ2Vpc3QuJyk7XG4gICAgICAgICAgICAgICAgc3BlY2lhbF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHN3aXRjaEF0dGFjayhjaGFyMSkgfSk7ICAgIFxuICAgICAgICAgICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KCdQb2x0ZXJnZWlzdCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzQ2hvaWNlLmNob2ljZU1vZGlmaWVycyA9PSAnY2xhc3NHdWFyZGlhblNwaXJpdCcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2hhcjEsIERhbmNlci5wcm90b3R5cGUpO1xuICAgICAgICAgICAgICAgIERhbmNlci5jYWxsKGNoYXIxLCBjaGFyMS5uYW1lLCAwLCAxMCwgMjAsIDEwMCwgJ05vcm1hbCBBdHRhY2snLCAnJywgJycsICcnLCBbXSk7XG4gICAgICAgICAgICAgICAgbWVudV93aW5kb3cudGV4dENvbnRlbnQgPSBtZW51X3dpbmRvdy50ZXh0Q29udGVudC5yZXBsYWNlKCdZb3VyIGNsYXNzIGlzIHVua25vd24uJywgJ1lvdSBhcmUgYSBHdWFyZGlhbiBTcGlyaXQuJyk7XG4gICAgICAgICAgICAgICAgc3BlY2lhbF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHN3aXRjaEF0dGFjayhjaGFyMSkgfSk7ICAgXG4gICAgICAgICAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoJ0d1YXJkaWFuU3Bpcml0Jyk7ICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzQ2hvaWNlLmNob2ljZU1vZGlmaWVycyA9PSAncmFjZVJlYWxtZXInKSB7XG4gICAgICAgICAgICAgICAgY2hhcjEucmFjZSA9IHJhY2VzLlJlYWxtZXI7XG4gICAgICAgICAgICAgICAgbWVudV93aW5kb3cudGV4dENvbnRlbnQgPSBtZW51X3dpbmRvdy50ZXh0Q29udGVudC5yZXBsYWNlKCcgWW91ciBhcm1vciBjbGFzcycsICcgSW4gbGlmZSwgeW91IHdlcmUgYSBSZWFsbWVyLiBZb3VyIGFybW9yIGNsYXNzJyk7XG4gICAgICAgICAgICAgICAgY2hhcjEuY3VycmVudEhQICs9IGNoYXIxLnJhY2UucmFjZUhQQm9udXM7XG4gICAgICAgICAgICAgICAgY2hhcjEubWF4SFAgKz0gY2hhcjEucmFjZS5yYWNlSFBCb251cztcbiAgICAgICAgICAgICAgICBjaGFyMS5hcm1vckNsYXNzICs9IGNoYXIxLnJhY2UucmFjZUFybW9yQm9udXM7XG4gICAgICAgICAgICAgICAgbWVudVVwZGF0ZXIoKTtcbiAgICAgICAgICAgICAgICBsZXQgc3RhdHNfcmFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0c19yYWNlJyk7XG4gICAgICAgICAgICAgICAgc3RhdHNfcmFjZS50ZXh0Q29udGVudCA9ICdJbiBsaWZlLCB5b3Ugd2VyZSBhIFJlYWxtZXIuJ1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzQ2hvaWNlLmNob2ljZU1vZGlmaWVycyA9PSAncmFjZU1vcnRhcicpIHtcbiAgICAgICAgICAgICAgICBjaGFyMS5yYWNlID0gcmFjZXMuTW9ydGFyO1xuICAgICAgICAgICAgICAgIG1lbnVfd2luZG93LnRleHRDb250ZW50ID0gbWVudV93aW5kb3cudGV4dENvbnRlbnQucmVwbGFjZSgnIFlvdXIgYXJtb3IgY2xhc3MnLCAnIEluIGxpZmUsIHlvdSB3ZXJlIGEgTW9ydGFyLiBZb3VyIGFybW9yIGNsYXNzJyk7XG4gICAgICAgICAgICAgICAgY2hhcjEuY3VycmVudEhQICs9IGNoYXIxLnJhY2UucmFjZUhQQm9udXM7XG4gICAgICAgICAgICAgICAgY2hhcjEubWF4SFAgKz0gY2hhcjEucmFjZS5yYWNlSFBCb251cztcbiAgICAgICAgICAgICAgICBjaGFyMS5hcm1vckNsYXNzICs9IGNoYXIxLnJhY2UucmFjZUFybW9yQm9udXM7XG4gICAgICAgICAgICAgICAgbWVudVVwZGF0ZXIoKTtcbiAgICAgICAgICAgICAgICBzdGF0c19yYWNlLnRleHRDb250ZW50ID0gJ0luIGxpZmUsIHlvdSB3ZXJlIGEgTW9ydGFyLidcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpc0Nob2ljZS5jaG9pY2VNb2RpZmllcnMgPT0gJ3JhY2VEZWFkbGFuZGVyJykge1xuICAgICAgICAgICAgICAgIGNoYXIxLnJhY2UgPSByYWNlcy5EZWFkbGFuZGVyO1xuICAgICAgICAgICAgICAgIG1lbnVfd2luZG93LnRleHRDb250ZW50ID0gbWVudV93aW5kb3cudGV4dENvbnRlbnQucmVwbGFjZSgnIFlvdXIgYXJtb3IgY2xhc3MnLCAnIEluIGxpZmUsIHlvdSB3ZXJlIGEgRGVhZGxhbmRlci4gWW91ciBhcm1vciBjbGFzcycpO1xuICAgICAgICAgICAgICAgIGNoYXIxLmN1cnJlbnRIUCArPSBjaGFyMS5yYWNlLnJhY2VIUEJvbnVzO1xuICAgICAgICAgICAgICAgIGNoYXIxLm1heEhQICs9IGNoYXIxLnJhY2UucmFjZUhQQm9udXM7XG4gICAgICAgICAgICAgICAgY2hhcjEuYXJtb3JDbGFzcyArPSBjaGFyMS5yYWNlLnJhY2VBcm1vckJvbnVzO1xuICAgICAgICAgICAgICAgIG1lbnVVcGRhdGVyKCk7XG4gICAgICAgICAgICAgICAgc3RhdHNfcmFjZS50ZXh0Q29udGVudCA9ICdJbiBsaWZlLCB5b3Ugd2VyZSBhIERlYWRsYW5kZXIuJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RvcnlUZWxsZXIodGhpc0Nob2ljZS5jaG9pY2VOZXh0U3RvcnkpO1xuICAgICAgICB9KTtcbiAgICB9KVxufVxuLy8gbmV3IGJhdHRsZSBmdW5jdGlvbnNcbmxldCBzdG9yeUFmdGVyQmF0dGxlID0gbnVsbDtcbmZ1bmN0aW9uIG5ld0JhdHRsZVN0YXJ0ZXIoc3RvcnlFbGVtZW50KSB7XG4gICAgc3RvcnlFbGVtZW50Lm1vZGlmaWVycy5mb3JFYWNoKChjdXJyZW50RW5lbXkpID0+IHsgY3VycmVudEVuZW15LmN1cnJlbnRIUCA9IGN1cnJlbnRFbmVteS5tYXhIUCB9KTtcbiAgICBlbmVtaWVzLnNwbGljZSgwLCBlbmVtaWVzLmxlbmd0aCwgLi4uc3RvcnlFbGVtZW50Lm1vZGlmaWVycyk7XG4gICAgc3RvcnlBZnRlckJhdHRsZSA9IHN0b3J5RWxlbWVudDtcbiAgICBsZXQgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwbG9yYXRpb25Cb2FyZCcpO1xuICAgIGlmIChib2FyZCAhPT0gbnVsbCkgeyBib2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG4gICAgbGlzdEVuZW1pZXMoKTtcbn1cbmV2ZW50RW1pdHRlci5vbignYmF0dGxlOndpbicsICgpID0+IHtcbi8vIGZ1bmN0aW9uIGlzQmF0dGxlT3ZlcihiYXR0bGVSZXN1bHQpIHtcbiAgICAvLyBpZiAoYmF0dGxlUmVzdWx0ID09ICd3aW4nKSB7XG4gICAgICAgIGlmIChpc1BsYXllckV4cGxvcmluZyA9PSB0cnVlKSB7XG4gICAgICAgICAgICBsZXQgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwbG9yYXRpb25Cb2FyZCcpO1xuICAgICAgICAgICAgYm9hcmQuc3R5bGUuZGlzcGxheSA9ICdncmlkJzsgICAgICAgIFxuICAgICAgICB9ICAgIFxuICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gJ1lvdSB3aW4gdGhlIGJhdHRsZSEnO1xuICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgd2hpbGUgKGxvZ193aW5kb3cuY2hpbGRyZW4ubGVuZ3RoID4gMikgeyBsb2dfd2luZG93LnJlbW92ZUNoaWxkKGxvZ193aW5kb3cuZmlyc3RDaGlsZCkgfTtcbiAgICAgICAgQXJyYXkuZnJvbShsb2dfd2luZG93LmNoaWxkcmVuKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdjb2xvcjp3aGl0ZTsnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRvcF9iYXIucmVtb3ZlQ2hpbGQodG9wX2Jhci5maXJzdENoaWxkKTtcbiAgICAgICAgd2hpbGUgKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIHsgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQobWFpbl93aW5kb3cuZmlyc3RDaGlsZCkgfTtcbiAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlBZnRlckJhdHRsZS5uZXh0U3RvcnlFbGVtZW50KTtcbiAgICAgICAgc3RvcnlBZnRlckJhdHRsZSA9IG51bGw7ICAgXG59KTsgXG4gICAgLy8gfSBlbHNlIHtcbmV2ZW50RW1pdHRlci5vbignYmF0dGxlOmxvc2UnLCAoKSA9PiB7XG4gICAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSAnWW91IGRpZWQhJztcbiAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdjb2xvcjpyZWQ7Jyk7XG4gICAgICAgIGxvZ193aW5kb3cuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgICAgICBidXR0b25fd2luZG93LnJlbW92ZUNoaWxkKGF0dGFja19idXR0b24pO1xuICAgICAgICBidXR0b25fd2luZG93LnJlbW92ZUNoaWxkKHNwZWNpYWxfYnV0dG9uKTtcbiAgICAgICAgYnV0dG9uX3dpbmRvdy5yZW1vdmVDaGlsZChpbnZlbnRvcnlfYnV0dG9uKTtcbiAgICAgICAgYnV0dG9uX3dpbmRvdy5yZW1vdmVDaGlsZChzdGF0c19idXR0b24pO1xuICAgIC8vIH1cbn0pO1xuLy8gbmV3IGNoYXJhY3RlciBjcmVhdGlvbiBmdW5jdGlvblxuZnVuY3Rpb24gbmV3Rm9ybU1ha2VyKHN0b3J5RWxlbWVudCkge1xuICAgIGxldCBmb3JtX2NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgZm9ybV9jYXJkLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGZvcm1fY2FyZCk7XG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBhbnN3ZXIgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgY2hhcjEubmFtZSA9IGFuc3dlcjtcbiAgICAgICAgbmV3VXBkYXRlTmFtZXMoYW5zd2VyKTtcbiAgICAgICAgd2hpbGUgKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIHsgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQobWFpbl93aW5kb3cuZmlyc3RDaGlsZCk7IH1cbiAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50Lm5leHRTdG9yeUVsZW1lbnQpO1xuICAgIH0pXG59XG4vLyAtLS0gZXhwbG9yYXRpb24gc3lzdGVtIC0tLVxuLy8gdHJhY2tpbmcgdmFyc1xubGV0IG1vdmVPbiA9IHRydWU7XG5sZXQgc2lkZUV2ZW50c1NlZW4gPSAwO1xubGV0IGN1cnJlbnRFeHBsb3JhdGlvblN0b3J5RWxlbWVudCA9ICcnO1xuLy8gbmV3IGV4cGxvcmF0aW9uIGZ1bmN0aW9uc1xuZnVuY3Rpb24gbmV3RXhwbG9yYXRpb24oc3RvcnlFbGVtZW50KSB7XG4gICAgLy8gY2xlYXIgbWFpbiB3aW5kb3dcbiAgICBjdXJyZW50RXhwbG9yYXRpb25TdG9yeUVsZW1lbnQgPSBzdG9yeUVsZW1lbnQ7XG4gICAgd2hpbGUgKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIHttYWluX3dpbmRvdy5yZW1vdmVDaGlsZChtYWluX3dpbmRvdy5maXJzdENoaWxkKX07XG4gICAgLy8gbWFrZSBib2FyZCBhbmQgYm9hcmRVbmRlclxuICAgIGxldCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXhwbG9yYXRpb25Cb2FyZCcpO1xuICAgIGxldCBib2FyZFVuZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmRVbmRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTsgbWFyZ2luOjNweDsgZGlzcGxheTppbmxpbmUtZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMjVweCk7JylcbiAgICBib2FyZFVuZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYm9hcmRVbmRlcicpO1xuICAgIGltYWdlX3dpbmRvdy5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRVbmRlcik7XG4gICAgLy8gZHJhdyB0aWxlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI2OyBpKyspIHtcbiAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGlsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywncGFkZGluZzo1cHg7Ym9yZGVyOjFweCBzb2xpZCB3aGl0ZTtoZWlnaHQ6MTVweDt3aWR0aDoxNXB4OycpO1xuICAgICAgICB0aWxlLnNldEF0dHJpYnV0ZSgnaWQnLCBgdGlsZSR7aX1gKTtcbiAgICAgICAgYm9hcmRVbmRlci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICB9XG4gICAgLy8gY2FsbCBkcmF3SWNvbnMgZnVuY3Rpb25cbiAgICBkcmF3SWNvbnMoc3RvcnlFbGVtZW50KTtcbiAgICAvLyBkcmF3IHRoZSBjaXJjbGUgaW5zaWRlIHRoZSBzcXVhcmVzXG4gICAgbGV0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ2lkJywnY2lyY2xlJyk7XG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO2JvcmRlcjoxcHggc29saWQgd2hpdGU7Ym9yZGVyLXJhZGl1czo1MCU7IHotaW5kZXg6MTA7IGhlaWdodDogMTdweDsgd2lkdGg6IDE3cHg7Jyk7XG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgIGxldCBzdGFydFRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGlsZTEyMCcpO1xuICAgIHN0YXJ0VGlsZS5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgIC8vIGNvb3JkaW5hdGVzIG9mIGJvdW5kaW5nIHJlY3RhbmdsZSAoKipJVCBET0VTTidUIE1PVkUgV0hFTiBDSVJDTEUgTU9WRVMhKiopXG4gICAgbGV0IGluaXRpYWxDaXJjbGVYID0gY2lyY2xlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLng7XG4gICAgbGV0IGluaXRpYWxDaXJjbGVZID0gY2lyY2xlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XG5cbiAgICBsZXQgY3VycmVudENpcmNsZVggPSBpbml0aWFsQ2lyY2xlWDtcbiAgICBsZXQgY3VycmVudENpcmNsZVkgPSBpbml0aWFsQ2lyY2xlWTtcbiAgICAvLyBXQVNEIHRvIG1vdmUgdGhlIGNpcmNsZVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IHN0ZXAgPSA1O1xuICAgICAgICBsZXQgYm9hcmRVbmRlckNvbGxpc2lvbiA9IGJvYXJkVW5kZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICAgICAgICAvL1RyYW5zZm9ybSAodHJhbnNsYXRlKTogQ0FMQ1VMQVRFUyBGUk9NIFRIRSBJTklUSUFMIFBPU0lUSU9OISBTTywgaW5pdGlhbENpcmNsZSBXSUxMIEJFIDAsIDAgZm9yIHRyYW5zZm9ybSB0cmFuc2xhdGVcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudENpcmNsZVkgLSBzdGVwID4gYm9hcmRVbmRlckNvbGxpc2lvbi50b3AgJiYgbW92ZU9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENpcmNsZVkgLT0gc3RlcDtcbiAgICAgICAgICAgICAgICAgICAgdGlsZVRyaWdnZXJzKHdoaWNoVGlsZUlzUGxheWVyT24oY2lyY2xlKSwgc3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudENpcmNsZVggLSBzdGVwID4gYm9hcmRVbmRlckNvbGxpc2lvbi5sZWZ0ICYmIG1vdmVPbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDaXJjbGVYIC09IHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgIHRpbGVUcmlnZ2Vycyh3aGljaFRpbGVJc1BsYXllck9uKGNpcmNsZSksIHN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDaXJjbGVZICsgc3RlcCArIDIwIDwgYm9hcmRVbmRlckNvbGxpc2lvbi5ib3R0b20gJiYgbW92ZU9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENpcmNsZVkgKz0gc3RlcDtcbiAgICAgICAgICAgICAgICAgICAgdGlsZVRyaWdnZXJzKHdoaWNoVGlsZUlzUGxheWVyT24oY2lyY2xlKSwgc3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudENpcmNsZVggKyBzdGVwICsgMTggPCBib2FyZFVuZGVyQ29sbGlzaW9uLnJpZ2h0ICYmIG1vdmVPbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDaXJjbGVYICs9IHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgIHRpbGVUcmlnZ2Vycyh3aGljaFRpbGVJc1BsYXllck9uKGNpcmNsZSksIHN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGxldCBrZXlib2FyZE1vdmVZID0gY3VycmVudENpcmNsZVkgLSBpbml0aWFsQ2lyY2xlWTtcbiAgICAgICAgbGV0IGtleWJvYXJkTW92ZVggPSBjdXJyZW50Q2lyY2xlWCAtIGluaXRpYWxDaXJjbGVYO1xuICAgICAgICBjaXJjbGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2tleWJvYXJkTW92ZVh9cHgsICR7a2V5Ym9hcmRNb3ZlWX1weClgO1xuICAgIH0pO1xuICAgIC8vIGNsaWNraW5nIHRvIG1vdmVcbiAgICAvLyBUaGlzIHdvcmtzIGJlY2F1c2UgaXQgZG9lc24ndCBORUVEIGEgY3VycmVudCBwb3NpdGlvbi4gaXQgQUxXQVlTIGNhbGN1bGF0ZXMgZnJvbSB0aGUgc3RhcnRpbmcgb25lXG4gICAgYm9hcmRVbmRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAobW92ZU9uID09IHRydWUpIHtcbiAgICAgICAgICAgIGxldCBjbGlja2VkVGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3doaWNoVGlsZURpZFlvdUNsaWNrKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpfWApO1xuICAgICAgICAgICAgbGV0IGNsaWNrZWRUaWxlQm91bmRhcmllcyA9IGNsaWNrZWRUaWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IG1vdmVYID0gY2xpY2tlZFRpbGVCb3VuZGFyaWVzLmxlZnQgKyA0IC0gaW5pdGlhbENpcmNsZVg7XG4gICAgICAgICAgICBsZXQgbW92ZVkgPSBjbGlja2VkVGlsZUJvdW5kYXJpZXMudG9wICsgNCAtIGluaXRpYWxDaXJjbGVZICsgd2luZG93LnNjcm9sbFk7XG4gICAgICAgICAgICBjaXJjbGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke21vdmVYfXB4LCAke21vdmVZfXB4KWA7XG4gICAgICAgICAgICB0aWxlVHJpZ2dlcnMod2hpY2hUaWxlSXNQbGF5ZXJPbihjaXJjbGUpLCBzdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgY3VycmVudENpcmNsZVggPSBjbGlja2VkVGlsZUJvdW5kYXJpZXMubGVmdCArIDQ7XG4gICAgICAgICAgICBjdXJyZW50Q2lyY2xlWSA9IGNsaWNrZWRUaWxlQm91bmRhcmllcy50b3AgKyA0ICsgd2luZG93LnNjcm9sbFk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIHdoaWNoIHRpbGUgZGlkIHlvdSBjbGljaz9cbmZ1bmN0aW9uIHdoaWNoVGlsZURpZFlvdUNsaWNrKGNsaWNrWCwgY2xpY2tZKSB7XG4gICAgbGV0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cInRpbGVcIl0nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0aWxlQ29sbGlzaW9uID0gdGlsZXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGNsaWNrWCA8IHRpbGVDb2xsaXNpb24ucmlnaHQgJiZcbiAgICAgICAgICAgIGNsaWNrWCA+IHRpbGVDb2xsaXNpb24ubGVmdCAmJlxuICAgICAgICAgICAgY2xpY2tZIDwgdGlsZUNvbGxpc2lvbi5ib3R0b20gJiZcbiAgICAgICAgICAgIGNsaWNrWSA+IHRpbGVDb2xsaXNpb24udG9wIFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aWxlc1tpXS5pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbi8vIHdoZW4gYSBwbGF5ZXIgbW92ZXMsIGl0IGlzIHRyaWdnZXJlZC4gcmV0dXJucyBcIiN0aWxlMzBcIiB0eXBlIG51bWJlclxuZnVuY3Rpb24gd2hpY2hUaWxlSXNQbGF5ZXJPbihjaXJjbGUpIHtcbiAgICBsZXQgY2lyY2xlQ29sbGlzaW9uID0gY2lyY2xlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJ0aWxlXCJdJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGlsZUNvbGxpc2lvbiA9IHRpbGVzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjaXJjbGVDb2xsaXNpb24ubGVmdCA8IHRpbGVDb2xsaXNpb24ucmlnaHQgJiZcbiAgICAgICAgICAgIGNpcmNsZUNvbGxpc2lvbi5yaWdodCA+IHRpbGVDb2xsaXNpb24ubGVmdCAmJlxuICAgICAgICAgICAgY2lyY2xlQ29sbGlzaW9uLnRvcCA8IHRpbGVDb2xsaXNpb24uYm90dG9tICYmXG4gICAgICAgICAgICBjaXJjbGVDb2xsaXNpb24uYm90dG9tID4gdGlsZUNvbGxpc2lvbi50b3AgXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRpbGVzW2ldLmlkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuLy8gY29tcGFyZXMgdGhlIHRpbGUgaWQgZnJvbSBhYm92ZSBhbmQgYWN0aXZhdGVzIGEgc3RvcnlFbGVtZW50XG5mdW5jdGlvbiB0aWxlVHJpZ2dlcnMocGxheWVyc1RpbGUsIHN0b3J5RWxlbWVudCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3J5RWxlbWVudC5tb2RpZmllcnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJzVGlsZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdG9yeUVsZW1lbnQubW9kaWZpZXJzW2ldLnRpbGVOdW1iZXIpO1xuICAgICAgICAgICAgaWYgKGAjJHtwbGF5ZXJzVGlsZX1gID09IHN0b3J5RWxlbWVudC5tb2RpZmllcnNbaV0udGlsZU51bWJlciAmJiAhc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tpXS5lbmNvdW50ZXJTdG9yeUVsZW1lbnQubW9kaWZpZXJzLmhhc1BsYXllclNlZW5NZSkge1xuICAgICAgICAgICAgICAgIHN0b3J5VGVsbGVyKHN0b3J5RWxlbWVudC5tb2RpZmllcnNbaV0uZW5jb3VudGVyU3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2lkZUV2ZW50c1NlZW4gPT0gc3RvcnlFbGVtZW50Lm1vZGlmaWVycy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBzdG9yeUVsZW1lbnQubW9kaWZpZXJzW3N0b3J5RWxlbWVudC5tb2RpZmllcnMubGVuZ3RoLTFdLnVubG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRyYXdMYXN0SWNvbihzdG9yeUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChgIyR7cGxheWVyc1RpbGV9YCA9PSBzdG9yeUVsZW1lbnQubW9kaWZpZXJzW3N0b3J5RWxlbWVudC5tb2RpZmllcnMubGVuZ3RoLTFdLnRpbGVOdW1iZXIgJiYgc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aC0xXS51bmxvY2tlZCkge1xuICAgICAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aC0xXS5lbmNvdW50ZXJTdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgc2lkZUV2ZW50c1NlZW4gPSAwO1xuICAgICAgICB9XG4gICAgfSAgICBcbi8vIGRyYXcgaWNvbnMgb24gdGlsZXNcbmZ1bmN0aW9uIGRyYXdJY29ucyhzdG9yeUVsZW1lbnQpIHtcbiAgICBsZXQgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRePVwidGlsZVwiXScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aCAtIDE7IGorKykge1xuICAgICAgICAgICAgaWYgKGAjJHt0aWxlc1tpXS5pZH1gID09IHN0b3J5RWxlbWVudC5tb2RpZmllcnNbal0udGlsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIHRpbGVzW2ldLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgICAgICBzdG9yeUVsZW1lbnQubW9kaWZpZXJzW2pdLmljb24uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIHRpbGVzW2ldLmFwcGVuZENoaWxkKHN0b3J5RWxlbWVudC5tb2RpZmllcnNbal0uaWNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBkcmF3IGxhc3QgaWNvblxuZnVuY3Rpb24gZHJhd0xhc3RJY29uKHN0b3J5RWxlbWVudCkge1xuICAgIGxldCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJ0aWxlXCJdJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYCMke3RpbGVzW2ldLmlkfWAgPT0gc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aC0xXS50aWxlTnVtYmVyKSB7XG4gICAgICAgICAgICB0aWxlc1tpXS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICBzdG9yeUVsZW1lbnQubW9kaWZpZXJzW3N0b3J5RWxlbWVudC5tb2RpZmllcnMubGVuZ3RoLTFdLmljb24uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgdGlsZXNbaV0uYXBwZW5kQ2hpbGQoc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aC0xXS5pY29uKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIC0tLSBzdGF0cyBzeXN0ZW0gLS0tXG4vLyB0cmFjayBzdGF0c1xubGV0IHBsYXllckJlbmV2b2xlbnRCYWxhbmNlID0gMDtcbmxldCBwbGF5ZXJTaWxseUJhbGFuY2UgPSAwO1xuLy8gc3RhdHMgc2NyZWVuXG5sZXQgc3RhdHNEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbnN0YXRzRGlhbG9nLmlubmVySFRNTCA9IGBcbiAgICA8YnV0dG9uIGlkPSdjbG9zZUJ1dHRvbjInPkNsb3NlPC9idXR0b24+XG4gICAgPGRpdiBpZD0nc3RhdHNCb3gnPlxuICAgIDxoMj5TdGF0czwvaDI+XG4gICAgPHVsIGlkID0nc3RhdHNMaXN0Jz5cbiAgICAgICAgPGxpIGlkPSdzdGF0c19nZW5kZXInPllvdSBkbyBub3QgcmVtZW1iZXIgeW91ciBnZW5kZXIuPC9saT5cbiAgICAgICAgPGxpIGlkPSdzdGF0c19yYWNlJz5Zb3UgZG8gbm90IHJlbWVtYmVyIHlvdXIgcmFjZS48L2xpPlxuICAgICAgICA8bGkgaWQ9J3N0YXRzX3JvbWFudGljX3BhcnRuZXInPllvdSBkbyBub3QgcmVtZW1iZXIgd2hvIHlvdXIgcm9tYW50aWMgcGFydG5lciB3YXMuPC9saT5cbiAgICAgICAgPGxpIGlkPSdzdGF0c19jYXVzZV9vZl9kZWF0aCc+WW91IGRvIG5vdCByZW1lbWJlciB5b3VyIGNhdXNlIG9mIGRlYXRoLjwvbGk+XG4gICAgICAgIDxsaSBpZD0nc3RhdHNfZXZpbF9iZW5ldm9sZW50Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YXRzX21ldGVyJyBpZD0nc3RhdHNfbWV0ZXJfZXZpbCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhdHNfbGluZScgaWQ9J3N0YXRzX2xpbmVfZXZpbCc+RXZpbDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YXRzX2xpbmUnIGlkPSdzdGF0c19saW5lX2JlbmV2b2xlbnQnPkJlbmV2b2xlbnQ8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgaWQ9J3N0YXRzX3NvbWJlcl9zaWxseSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGF0c19tZXRlcicgaWQ9J3N0YXRzX21ldGVyX3NvbWJlcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhdHNfbGluZScgaWQ9J3N0YXRzX2xpbmVfc29tYmVyJz5Tb21iZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGF0c19saW5lJyBpZD0nc3RhdHNfbGluZV9zaWxseSc+U2lsbHk8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPC9kaXY+XG5gO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0c0RpYWxvZyk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHN0YXRzX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKG5ld1BsYXllckNvbnNlcXVlbmNlcy5pbmNsdWRlcygnY2xhc3NXcmFpdGgnKSB8fCBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMuaW5jbHVkZXMoJ2NsYXNzUG9sdGVyZ2Vpc3QnKSB8fCBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMuaW5jbHVkZXMoJ2NsYXNzR3VhcmRpYW5TcGlyaXQnKSkge1xuICAgICAgICAgICAgc3RhdHNEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgICAgICBsZXQgY2xvc2VCdXR0b24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlQnV0dG9uMicpO1xuICAgICAgICAgICAgY2xvc2VCdXR0b24yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRzRGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBzdGF0c0RpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBkaWFsb2dBbmltYXRpb25FbmQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuLy8gdHJhY2tpbmcgYW5kIHVwZGF0aW5nIHN0YXRzXG5mdW5jdGlvbiBzdGF0c0xpbmVzVXBkYXRlcigpIHtcbiAgICBsZXQgZXZpbExpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHNfbWV0ZXJfZXZpbCcpO1xuICAgIGxldCBzb21iZXJMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXRzX21ldGVyX3NvbWJlcicpO1xuICAgIGV2aWxMaW5lLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgJHs1MC1wbGF5ZXJCZW5ldm9sZW50QmFsYW5jZX1mciAkezUwK3BsYXllckJlbmV2b2xlbnRCYWxhbmNlfWZyYDtcbiAgICBzb21iZXJMaW5lLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgJHs1MC1wbGF5ZXJTaWxseUJhbGFuY2V9ZnIgJHs1MCtwbGF5ZXJTaWxseUJhbGFuY2V9ZnJgO1xufVxuZnVuY3Rpb24gZ2l2ZVN0YXRzKHN0YXQsIGFtb3VudCkge1xuICAgIHN3aXRjaCAoc3RhdCkge1xuICAgICAgICBjYXNlICdldmlsJzpcbiAgICAgICAgICAgIHBsYXllckJlbmV2b2xlbnRCYWxhbmNlIC09IGFtb3VudDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdiZW5ldm9sZW50JzpcbiAgICAgICAgICAgIHBsYXllckJlbmV2b2xlbnRCYWxhbmNlICs9IGFtb3VudDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzb21iZXInOlxuICAgICAgICAgICAgcGxheWVyU2lsbHlCYWxhbmNlIC09IGFtb3VudDsgICAgICAgICAgICBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzaWxseSc6XG4gICAgICAgICAgICBwbGF5ZXJTaWxseUJhbGFuY2UgKz0gYW1vdW50O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN0YXRzTGluZXNVcGRhdGVyKCk7XG4gICAgc3RhdHNGbGFnc1VwZGF0ZXIoKTtcbn1cbmZ1bmN0aW9uIHN0YXRzRmxhZ3NVcGRhdGVyKCkge1xuICAgIGlmIChwbGF5ZXJCZW5ldm9sZW50QmFsYW5jZSA+IDE0KSB7XG4gICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKCdwbGF5ZXJCZW5ldm9sZW50MTUnKTtcbiAgICAgICAgaWYgKHBsYXllckJlbmV2b2xlbnRCYWxhbmNlID4gMjkpIHtcbiAgICAgICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKCdwbGF5ZXJCZW5ldm9sZW50MzAnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKHBsYXllckJlbmV2b2xlbnRCYWxhbmNlIDwgLTE0KSB7XG4gICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKCdwbGF5ZXJFdmlsMTUnKTtcbiAgICAgICAgaWYgKHBsYXllckJlbmV2b2xlbnRCYWxhbmNlIDwgLTI5KSB7XG4gICAgICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaCgncGxheWVyRXZpbDMwJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChwbGF5ZXJTaWxseUJhbGFuY2UgPiAxNCkge1xuICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaCgncGxheWVyU2lsbHkxNScpO1xuICAgICAgICBpZiAocGxheWVyU2lsbHlCYWxhbmNlID4gMjkpIHtcbiAgICAgICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKCdwbGF5ZXJTaWxseTMwJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChwbGF5ZXJTaWxseUJhbGFuY2UgPCAtMTQpIHtcbiAgICAgICAgbmV3UGxheWVyQ29uc2VxdWVuY2VzLnB1c2goJ3BsYXllclNvbWJlcjE1Jyk7XG4gICAgICAgIGlmIChwbGF5ZXJTaWxseUJhbGFuY2UgPCAtMjkpIHtcbiAgICAgICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKCdwbGF5ZXJTb21iZXIxNScpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIFRFU1RFUi4gc3RhcnQgZ2FtZVxuLy8gc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50cy50ZXN0TmFtaW5nKTtcbi8vIGFkZEdvbGQoNTAwMCk7XG5zdG9yeVRlbGxlcihzY3JpcHRPYmplY3RzLndha2VVcDEpO1xuLy8gc3RhcnREaWNlR2FtZSgnRGF2ZScsIGV4YW1wbGVMaW5lcyk7IiwiLy8gaW1wb3J0XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCB7IGljb25zIH0gZnJvbSAnLi9jb21wX2Fzc2V0cyc7XG5pbXBvcnQgeyBtb25zdGVycyB9IGZyb20gJy4vY29tcF9vYmplY3RzX2FuZF9tZXRob2RzJztcbmltcG9ydCB7IGFsbEl0ZW1zLCBwbGF5ZXJHb2xkLCBhZGRHb2xkIH0gZnJvbSAnLi9jb21wX2ludmVudG9yeV9zeXN0ZW0nO1xuLy8gY2xhc3Mgc3RvcnlFbGVtZW50IHsgdHlwZShkaWFsb2d1ZSwgY2hvaWNlLCBiYXR0bGUsIGRlc2NyaXB0aW9uLCBpdGVtKTsgdGV4dCA9IFtdOyBcbi8vIG1vZGlmaWVycyhmb3IgYmF0dGxlOiBhcnJheSBvZiBlbmVtaWVzLCBmb3IgY2hvaWNlL2RpYWxvZ3VlOiBjaG9pY2VzLCBmb3IgaXRlbTogaXRlbSBuYW1lKTtcbi8vIG5leHRTdG9yeSB9XG5jbGFzcyBzdG9yeUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHRleHQsIG1vZGlmaWVycywgbmV4dFN0b3J5RWxlbWVudCkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcbiAgICAgICAgdGhpcy5uZXh0U3RvcnlFbGVtZW50ID0gbmV4dFN0b3J5RWxlbWVudDtcbiAgICAgICAgc3RvcnlFbGVtZW50Lmluc3RhbmNlcy5wdXNoKHRoaXMpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gW107XG4gICAgc3RhdGljIGdldEFsbEluc3RhbmNlcygpIHtcbiAgICAgICAgcmV0dXJuIHN0b3J5RWxlbWVudC5pbnN0YW5jZXM7XG4gICAgfVxufVxuLy8gb2JqZWN0cyBvZiB0aGlzIGNsYXNzIHdpbGwgYmUgQUxMIHRoYXQgSSBoYXZlIHRvIGVkaXRcbmxldCB3aXNwMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYDFgLCBgMmBdLFxuICAgICdleHBsb3JhdGlvbkV2ZW50JyxcbiAgICB1bmRlZmluZWQpXG5sZXQgd2lzcDEgPSBuZXcgc3RvcnlFbGVtZW50KCdyYW5kb21FbmNvdW50ZXInLFxuICAgIFsnMScsICcyJ10sXG4gICAge2hhc1BsYXllclNlZW5NZTogZmFsc2V9LFxuICAgIHdpc3AyKVxuICAgIGxldCBjb3Jwc2UyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgMWAsIGAyYF0sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnLFxuICAgIHVuZGVmaW5lZClcbmxldCBjb3Jwc2UxID0gbmV3IHN0b3J5RWxlbWVudCgncmFuZG9tRW5jb3VudGVyJyxcbiAgICBbJzEnLCAnMiddLFxuICAgIHtoYXNQbGF5ZXJTZWVuTWU6IGZhbHNlfSxcbiAgICBjb3Jwc2UyKVxubGV0IHR1c2t3b2xmMyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYEh1aD8gSXMgaXQgYmxpbmQ/IEN1cnNlZD8gUGVyaGFwcyBpdCdzIGEgU3Bpcml0J3MgaWxsdXNpb24/IE9yIG1heWJlIHlvdSdyZSBoYWxsdWNpbmF0aW5nLmAsIGBXaGF0ZXZlciBpdCBpcywgdGhlIHR1c2t3b2xmIGF0IGxlYXN0IHNlZW1zIHZlcnkgcmVhbC4gWW91J3JlIG5vdCBpbiBhbnkgY29uZGl0aW9uIHRvIGludmVzdGlnYXRlLmAsIGBZb3Ugd29uJ3QgZ2V0IGFub3RoZXIgY2hhbmNlLiBZb3UgcXVpY2tseSBiYWNrIGF3YXkgZnJvbSB0aGUgdHVza3dvbGYgd2hpbGUgaXQncyBjb25mdXNlZCBvciBkaXN0cmFjdGVkLmBdLFxuICAgICdleHBsb3JhdGlvbkV2ZW50JyxcbiAgICB1bmRlZmluZWQpXG5sZXQgdHVza3dvbGYyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgVGhlIGdyb3dsaW5nIHNlZW1zIHRvIGJlIGNsb3NlLiBNYXliZSAxNSBtZXRlcnMgYmVoaW5kIHlvdS5gLCBgVGhlIHR1c2t3b2xmIGRvZXNuJ3Qgc2VlbSB0byBiZSBzdHJpa2luZyB0aG91Z2guIE9kZC5gLCBgWW91IHNsb3dseSB0dXJuIGFyb3VuZC5gLCBgQSBiaWcgd29sZiBvZiBzaWx2ZXIgZnVyIHN0YW5kcyBub3QgZmFyIGZyb20gd2hlcmUgeW91IGFyZSwgdHdvIDMwIGNtcyBsb25nIHR1c2tzIGF0IHRoZSByZWFkeS5gLCAnSXQgc3BpbnMgYXJvdW5kIGluIHBsYWNlLCBzbmlmZmluZyBhbmQgc2VhcmNoaW5nIGZvciBzb21ldGhpbmcuIEl0IGlnbm9yZXMgeW91IGNvbXBsZXRlbHkuJ10sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnLFxuICAgIHR1c2t3b2xmMylcbmxldCB0dXNrd29sZjEgPSBuZXcgc3RvcnlFbGVtZW50KCdyYW5kb21FbmNvdW50ZXInLFxuICAgIFsnQXMgeW91IHJ1biB0aHJvdWdoIHRoZSBmb3Jlc3QsIHlvdXIgdGhvdWdodHMgc3RhcnQgZ2F0aGVyLicsICdZb3Uga25vdyB0aGUgRmF0ZWQgUmVhbG0gcXVpdGUgd2VsbC4nLCAnSnVkZ2luZyBieSB0aGUgZnJvc3RlZCBwZWFrcyBpbiB0aGUgZGlzdGFuY2UsIHRoaXMgbXVzdCBiZSB0aGUgRm9yZXN0IG9mIE1pcnJvcnMuIE5hbWVkIGFmdGVyIHRoZSBjbGVhciB3aGl0ZSBzbm93IHRoYXQgbGllcyBoZXJlIGZvciAxNiBvdXQgb2YgdGhlIDIwIG1vbnRocy4nLCAnWW91ciB0aG91Z2h0cyBwYXVzZSBhcyB5b3UgaGVhciBncm93bGluZyBiZWhpbmQgeW91LiBBIHR1c2t3b2xmLiBGdWNrLiddLFxuICAgIHtoYXNQbGF5ZXJTZWVuTWU6IGZhbHNlfSxcbiAgICB0dXNrd29sZjIpXG4vLyBXQUtFIFVQIFNFUVVFTkNFXG5sZXQgd2FrZVVwTW92ZSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2V4cGxvcmF0aW9uJyxcbiAgICBbYFlvdXIgYm9keSBtb3ZlcyBxdWlja2x5LCBidXQgdGhlIGZlZWxpbmcgb2YgbnVtYm5lc3MgYWxsIG92ZXIgaXMgb3ZlcndoZWxtaW5nLmAsIGBNdXN0IGJlIHRoZSBmcm9zdGJpdGUuIElmIHlvdSdyZSBsdWNreSwgeW91IHdvbid0IGxvc2UgYW55IGZpbmdlcnMgb3IgdG9lcy5gLCBgSW4gYW55IGNhc2UsIGl0J3MgdGltZSB0byBtb3ZlLCBvciB5b3UnbGwgbG9zZSB5b3VyIGxpZmUgYXMgd2VsbC5gLCBgW1VTRSBXQVNEIG9yIGNsaWNrIHRoZSBtYXAgdG8gbW92ZS5dYF0sXG4gICAgW3tlbmNvdW50ZXJTdG9yeUVsZW1lbnQ6IHdpc3AxLCB0aWxlTnVtYmVyOiAnI3RpbGUzMCcsIGljb246IGljb25zLmljb25UcmVlfSxcbiAgICB7ZW5jb3VudGVyU3RvcnlFbGVtZW50OiBjb3Jwc2UxLCB0aWxlTnVtYmVyOiAnI3RpbGU1MCcsIGljb246IGljb25zLmljb25UcmVlMn0sXG4gICAge2VuY291bnRlclN0b3J5RWxlbWVudDogdHVza3dvbGYxLCB0aWxlTnVtYmVyOiAnI3RpbGU3MCcsIGljb246IGljb25zLmljb25UcmVlM31dLFxuICAgIHVuZGVmaW5lZClcbmxldCByYW5kb21FdmVudEV4aXQyID0gbmV3IHN0b3J5RWxlbWVudChcbiAgICAnZW5kRXhwbG9yYXRpb24nLFxuICAgIFsnMScsICcyJ10sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnLFxuICAgIHdha2VVcE1vdmVcbilcbmxldCByYW5kb21FdmVudEV4aXQgPSBuZXcgc3RvcnlFbGVtZW50KFxuICAgICdyYW5kb21FbmNvdW50ZXInLFxuICAgIFsnMScsICcyJ10sXG4gICAge2hhc1BsYXllclNlZW5NZTogZmFsc2V9LFxuICAgIHJhbmRvbUV2ZW50RXhpdDJcbilcbmxldCByYW5kb21FdmVudDJiID0gbmV3IHN0b3J5RWxlbWVudChcbiAgICAnZGVzY3JpcHRpb24nLFxuICAgIFsnSG9seSBiYWxsc2Fja3MsIHdoYXQgYSBmaWdodC4nLCAnV2VscCwgYmFjayB0byBleHBsb3JpbmcuJ10sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnLFxuICAgIHVuZGVmaW5lZFxuKVxubGV0IHJhbmRvbUV2ZW50MmEgPSBuZXcgc3RvcnlFbGVtZW50KFxuICAgICdiYXR0bGUnLFxuICAgIFsnRW5jb3VudGVyIDIgaXMgcGlzc2VkIHRob3VnaC4nLCAnT2gsIGl0IGlzIHN1cGVyIHBpc3NlZC4nLCAnVGltZSB0byBmaWdodCEnXSxcbiAgICBbbW9uc3RlcnMuZ29ibGluX2dydW50XSxcbiAgICByYW5kb21FdmVudDJiXG4pXG5sZXQgcmFuZG9tRXZlbnQyID0gbmV3IHN0b3J5RWxlbWVudChcbiAgICAncmFuZG9tRW5jb3VudGVyJyxcbiAgICBbJ1lvdSBqdXN0IGZvdW5kIHJhbmRvbSBlbmNvdW50ZXIgMiEnXSxcbiAgICB7aGFzUGxheWVyU2Vlbk1lOiBmYWxzZX0sXG4gICAgcmFuZG9tRXZlbnQyYVxuKVxubGV0IHJhbmRvbUV2ZW50MWEgPSBuZXcgc3RvcnlFbGVtZW50KFxuICAgICdpdGVtJyxcbiAgICBbJ1RoaXMgZXZlbnQgaXMgbmljZSEgSXQgZ2l2ZXMgeW91IGFuIGl0ZW0hJ10sXG4gICAgYWxsSXRlbXMubWFnaWNBcm1vcixcbiAgICB1bmRlZmluZWRcbilcbmxldCByYW5kb21FdmVudDEgPSBuZXcgc3RvcnlFbGVtZW50KFxuICAgICdyYW5kb21FbmNvdW50ZXInLFxuICAgIFsnWW91IGp1c3QgZm91bmQgcmFuZG9tIGVuY291bnRlciAxISddLFxuICAgIHtoYXNQbGF5ZXJTZWVuTWU6IGZhbHNlfSxcbiAgICByYW5kb21FdmVudDFhXG4pXG5sZXQgdGVzdEV4cGxvcmF0aW9uID0gbmV3IHN0b3J5RWxlbWVudChcbiAgICAnZXhwbG9yYXRpb24nLFxuICAgIFsnWW91IHNldCBvdXQgb24gdGhlIHJvYWQgYWdhaW4uJywgJ1RoZSBmb3Jlc3QgaXMgbHVzaCBhbmQgaGFyZCB0byB3YWxrIHRocm91Z2guJywgJ1RoZSBzdHJhbmdlciB3YXMgcmlnaHQgLSBpdCB3aWxsIGJlIGhhcmQgdG8gZmluZCB5b3VyIHdheSBoZXJlLicsICdbVXNlIFdBU0Qgb3IgY2xpY2sgLyB0YXAgb24gdGhlIG1hcCB0byBtb3ZlLl0nXSxcbiAgICBbe2VuY291bnRlclN0b3J5RWxlbWVudDogcmFuZG9tRXZlbnQxLCB0aWxlTnVtYmVyOiAnI3RpbGUzMCcsIGljb246IGljb25zLmljb25UcmVlfSxcbiAgICB7ZW5jb3VudGVyU3RvcnlFbGVtZW50OiByYW5kb21FdmVudDIsIHRpbGVOdW1iZXI6ICcjdGlsZTEwMCcsIGljb246IGljb25zLmljb25UcmVlMn0sXG4gICAge2VuY291bnRlclN0b3J5RWxlbWVudDogcmFuZG9tRXZlbnRFeGl0LCB0aWxlTnVtYmVyOiAnI3RpbGU0NScsIGljb246IGljb25zLmljb25QZXJzb259XSxcbiAgICB1bmRlZmluZWRcbilcbmxldCB0ZXN0QWZ0ZXJEaWFsb2d1ZSA9IG5ldyBzdG9yeUVsZW1lbnQoXG4gICAgJ2NvbnNlcXVlbmNlJyxcbiAgICBbe2RlcGVuZGVuY3k6ICdTdHJhbmdlckZyaWVuZGx5JywgY29uc2VxdWVuY2VUZXh0OiBbXG4gICAgICAgICdZb3UgaG9wZSB0aGF0IHBlcnNvbiB3aW5kcyB3aGF0IHRoZXkgYXJlIGxvb2tpbmcgZm9yLicsXG4gICAgICAgICdPaCwgd2VsbC4gWW91IGhhdmUgeW91ciBvd24gbmVlZHMgdG8gdGFrZSBjYXJlIG9mLCBEdWRlLiddfSxcbiAgICB7ZGVwZW5kZW5jeTogJ1N0cmFuZ2VyQW5ub3llZCcsIGNvbnNlcXVlbmNlVGV4dDogW1xuICAgICAgICAnV2VsbCB0aGF0IHBlcnNvbiB3YXMgYSBqZXJrLiBOb3QgbGlrZSBEdWRlLicsXG4gICAgICAgICdXaGF0IGEgc2hpdC1mYWNlZCBwb29wc3Rlci4nXX1dLFxuICAgIHVuZGVmaW5lZCxcbiAgICB0ZXN0RXhwbG9yYXRpb25cbilcbmxldCB0ZXN0RGlhbG9ndWUgPSBuZXcgc3RvcnlFbGVtZW50KFxuICAgICdkaWFsb2d1ZScsXG4gICAgW3sgbGluZU51bWJlcjogMCwgbnBjTGluZTogJ1lvdSBzZWUgYSBwZXJzb24uIFRoZXkgYXBwcm9hY2gsIGFuZCBzYXk6IFwiSGVsbG8hXCIuJywgcmVzcG9uc2VzOiBcbiAgICAgICAgW3sgZGlhbG9ndWVDaG9pY2U6ICdBbmQgaGVsbG8gdG8geW91IGtpbmQgcGVyc29uISBNeSBuYW1lIGlzIER1ZGUuJywgZGlhbG9ndWVOZXh0TGluZTogMSwgcG9pbnRzOiAxIH0sXG4gICAgICAgIHsgZGlhbG9ndWVDaG9pY2U6ICdIZWxsbywgbW9yZSBsaWtlIGh5dWxvISBEdWRlIGhlcmUuJywgZGlhbG9ndWVOZXh0TGluZTogMiwgcG9pbnRzOiAtMSB9XX0sXG4gICAgeyBsaW5lTnVtYmVyOiAxLCBucGNMaW5lOiAnXCJXZWxsLCBoaSwgRHVkZS4gTmljZSB0byBzZWUgYSBwb2xpdGUgaW5kaXZpZHVhbCBhcm91bmQgdGhlc2UgcGFydHMhIEhvdyBhcmUgeW91IHRvZGF5P1wiJywgcmVzcG9uc2VzOiBcbiAgICAgICAgW3sgZGlhbG9ndWVDaG9pY2U6ICdJIGFtIGRvaW5nIHdlbGwuJywgZGlhbG9ndWVOZXh0TGluZTogMywgcG9pbnRzOiAxIH0sXG4gICAgICAgIHsgZGlhbG9ndWVDaG9pY2U6ICdJIG5lZWQgaGVscC4uLicsIGRpYWxvZ3VlTmV4dExpbmU6IDQsIHBvaW50czogLTEgfV19LFxuICAgIHsgbGluZU51bWJlcjogMiwgbnBjTGluZTogJ1wiRHVkZSwgSSBkbyBub3Qgc3BlYWsgdGhpcyBmb3VsLXNvdW5kaW5nIGxhbmd1YWdlIG9mIHlvdXJzLFwiIHRoZXkgc2F5LCBzb3VuZGluZyBjb25jZXJuZWQuIFwiQXJlIHlvdSBva2F5P1wiLicsIHJlc3BvbnNlczogXG4gICAgICAgIFt7IGRpYWxvZ3VlQ2hvaWNlOiAnSSBhbSBkb2luZyB3ZWxsLicsIGRpYWxvZ3VlTmV4dExpbmU6IDMsIHBvaW50czogMSB9LFxuICAgICAgICB7IGRpYWxvZ3VlQ2hvaWNlOiAnSSBuZWVkIGhlbHAuLi4nLCBkaWFsb2d1ZU5leHRMaW5lOiA0LCBwb2ludHM6IDAgfV19LFxuICAgIHsgbGluZU51bWJlcjogMywgbnBjTGluZTogJ1wiR2xhZCB0byBoZWFyIGl0LiBXZWxsLCBzdGF5IHNhZmUgb3V0IHRoZXJlLlwiJywgcmVzcG9uc2VzOiBcbiAgICAgICAgW3sgZGlhbG9ndWVDaG9pY2U6ICdHb29kYnllLCBhbmQgZ29vZCBsdWNrLicsIGRpYWxvZ3VlTmV4dExpbmU6IDUsIHBvaW50czogMSB9LFxuICAgICAgICB7IGRpYWxvZ3VlQ2hvaWNlOiAnT2gsIHBpc3Mgb2ZmIGFscmVhZHkuJywgZGlhbG9ndWVOZXh0TGluZTogNSwgcG9pbnRzOiAtMSB9XX0sXG4gICAgeyBsaW5lTnVtYmVyOiA0LCBucGNMaW5lOiAnXCJXaXNoIEkgY291bGQgaGVscCB5b3UsIGZyaWVuZC4gR29kIGJsZXNzLlwiJywgcmVzcG9uc2VzOiBcbiAgICAgICAgW3sgZGlhbG9ndWVDaG9pY2U6ICdJdCBpcyBhbHJpZ2h0LiBUYWtlIGNhcmUgb2YgeW91cnNlbGYsIHN0cmFuZ2VyLicsIGRpYWxvZ3VlTmV4dExpbmU6IDUsIHBvaW50czogMSB9LFxuICAgICAgICB7IGRpYWxvZ3VlQ2hvaWNlOiAnVGhhbmtzIGZvciBub3RoaW5nLi4uJywgZGlhbG9ndWVOZXh0TGluZTogNSwgcG9pbnRzOiAtMSB9XX0sXG4gICAgeyBsaW5lTnVtYmVyOiA1LCBucGNMaW5lOiAnVGhlIHN0cmFuZ2VyIHNheXMgZ29vZGJ5ZSBhbmQgbGVhdmVzLicsIHJlc3BvbnNlczogW119XSxcbiAgICBbJ1N0cmFuZ2VyRnJpZW5kbHknLCAnU3RyYW5nZXJOZXV0cmFsJywgJ1N0cmFuZ2VyQW5ub3llZCddLFxuICAgIHRlc3RBZnRlckRpYWxvZ3VlXG4pIFxubGV0IHRlc3RDaG9pY2VPdXRjb21lMiA9IG5ldyBzdG9yeUVsZW1lbnQoXG4gICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICBbJ1lvdSBjaG9zZSAyLiddLFxuICAgIHVuZGVmaW5lZCxcbiAgICB0ZXN0RGlhbG9ndWVcbikgXG5sZXQgdGVzdENob2ljZU91dGNvbWUxID0gbmV3IHN0b3J5RWxlbWVudChcbiAgICAnZGVzY3JpcHRpb24nLFxuICAgIFsnWW91IGNob3NlIDEuJ10sXG4gICAgdW5kZWZpbmVkLFxuICAgIHRlc3REaWFsb2d1ZVxuKSBcbmxldCB0ZXN0Q2hvaWNlID0gbmV3IHN0b3J5RWxlbWVudChcbiAgICAnY2hvaWNlJyxcbiAgICBbJ0hlbGxvIScsICdUaGlzIGlzIHRoZSBuZXcgaW50cm9kdWN0aW9uIDIuJywgJ0Z1biBhZ2FpbiwgaXMgaXQgbm90PycsICdDZXJ0YWlubHkgaXMuJywgJ0FnYWluLiBCdXQgbm93IGl0IGlzIHRpbWUgdG8gY2hvb3NlOiAxIG9yIDI/J10sXG4gICAgW3tjaG9pY2VUZXh0OiAnSSB3aWxsIGNob29zZSAxLicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAndGVzdENob2ljZTEnLFxuICAgIGNob2ljZU5leHRTdG9yeTogdGVzdENob2ljZU91dGNvbWUxfSxcbiAgICB7Y2hvaWNlVGV4dDogJ0kgd2lsbCBjaG9vc2UgMi4nLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ3Rlc3RDaG9pY2UyJyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IHRlc3RDaG9pY2VPdXRjb21lMn1dLFxuICAgIHVuZGVmaW5lZFxuKSBcbmxldCB0ZXN0SXRlbSA9IG5ldyBzdG9yeUVsZW1lbnQoXG4gICAgJ2l0ZW0nLFxuICAgIFsnRW5lbWllcyBhcmUgZGVhZCEnLCAnVGhpcyBkZXNjcmlwdGlvbiBoYXMgbW9yZSBzdHJpbmdzLicsICdMaWtlIG9uZSBtb3JlLicsICdUaGFuayB5b3UgZm9yIHlvdXIgcGF0aWVuY2UuJywgJ0FzIGEgcmV3YXJkLCBoZXJlIGlzIGFuIGl0ZW0uJ10sXG4gICAgYWxsSXRlbXMubWFnaWNTd29yZCxcbiAgICB0ZXN0Q2hvaWNlXG4pIFxubGV0IHRlc3RCYXR0bGUgPSBuZXcgc3RvcnlFbGVtZW50KFxuICAgICdiYXR0bGUnLFxuICAgIFsnV2VsbCBub3cgaXQgaXMgdGltZSB0byBwbGF5IScsICdUaGlzIGFycmF5IGhhcyBmZXdlciBzdHJpbmdzIHRvbyEgTXVhaGFoYWhhLicsICdJdCBpcyBhIGZpZ2h0ISddLFxuICAgIFttb25zdGVycy5pbXAxLCBtb25zdGVycy5pbXAyLCBtb25zdGVycy5nb2JsaW5fY2hpZWZ0YWluLCBtb25zdGVycy5nb2JsaW5fZmlnaHRlcl0sXG4gICAgdGVzdEl0ZW1cbilcbmxldCB0ZXN0RGVzY3JpcHRpb24gPSBuZXcgc3RvcnlFbGVtZW50KFxuICAgICdkZXNjcmlwdGlvbicsXG4gICAgWydIZWxsbywgRHVkZSEnLCAnVGhpcyBpcyBhIG5ldyBpbnRyb2R1Y3Rpb24uJywgJ0Z1biwgaXMgaXQgbm90PycsICdDZXJ0YWlubHkgaXMuJ10sXG4gICAgdW5kZWZpbmVkLFxuICAgIHRlc3RCYXR0bGVcbilcbmxldCB0ZXN0UmFjZSA9IG5ldyBzdG9yeUVsZW1lbnQoXG4gICAgJ2Nob2ljZScsXG4gICAgWydOb3cgaXQgaXMgdGltZSB0byBjaG9vc2UgeW91ciByYWNlLicsICdDaG9vc2Ugd2lzZWx5LiddLFxuICAgIFt7Y2hvaWNlVGV4dDogJ1JlYWxtZXIuJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdyYWNlUmVhbG1lcicsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiB0ZXN0RXhwbG9yYXRpb259LFxuICAgIHtjaG9pY2VUZXh0OiAnTW9ydGFyLicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAncmFjZU1vcnRhcicsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiB0ZXN0RXhwbG9yYXRpb259LFxuICAgIHtjaG9pY2VUZXh0OiAnRGVhZGxhbmRlci4nLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ3JhY2VEZWFkbGFuZGVyJyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IHRlc3RFeHBsb3JhdGlvbn1dLFxuICAgIHVuZGVmaW5lZCAgICBcbilcbmxldCB0ZXN0Q2xhc3MgPSBuZXcgc3RvcnlFbGVtZW50KFxuICAgICdjaG9pY2UnLFxuICAgIFsnTm93IGl0IGlzIHRpbWUgdG8gY2hvb3NlIHlvdXIgY2xhc3MuJywgJ0Nob29zZSB3aXNlbHkuJywgJ09yIGp1c3QgY2xpY2tpdHktY2xhY2suJ10sXG4gICAgW3tjaG9pY2VUZXh0OiAnV3JhaXRoLicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnY2xhc3NXcmFpdGgnLFxuICAgIGNob2ljZU5leHRTdG9yeTogdGVzdFJhY2V9LFxuICAgIHtjaG9pY2VUZXh0OiAnUG9sdGVyZ2Vpc3QuJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdjbGFzc1BvbHRlcmdlaXN0JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IHRlc3RSYWNlfSxcbiAgICB7Y2hvaWNlVGV4dDogJ0d1YXJkaWFuIFNwaXJpdC4nLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ2NsYXNzR3VhcmRpYW5TcGlyaXQnLFxuICAgIGNob2ljZU5leHRTdG9yeTogdGVzdFJhY2V9XSxcbiAgICB1bmRlZmluZWQgICAgXG4pXG5sZXQgdGVzdE5hbWluZyA9IG5ldyBzdG9yeUVsZW1lbnQoXG4gICAgJ2Zvcm0nLFxuICAgIFsnR3JlZXRpbmdzIScsICdUaGFuayB5b3UgZm9yIHRlc3RpbmcgdGhlIGdhbWUuJywgJ1BsZWFzZSBlbnRlciB5b3VyIG5hbWUuJ10sXG4gICAgdW5kZWZpbmVkLFxuICAgIHRlc3RDbGFzc1xuKVxuLy8gb2JqZWN0IGZvciBleHBvcnRpbmdcbmxldCBzdG9yeUVsZW1lbnRzID0geyB0ZXN0TmFtaW5nLCB0ZXN0Q2xhc3MsIHRlc3REZXNjcmlwdGlvbiwgdGVzdEJhdHRsZSwgdGVzdEl0ZW0sIHRlc3RDaG9pY2UsIHRlc3RDaG9pY2VPdXRjb21lMSwgdGVzdENob2ljZU91dGNvbWUyLCB0ZXN0RGVzY3JpcHRpb24sIHRlc3RBZnRlckRpYWxvZ3VlLCB0ZXN0RXhwbG9yYXRpb24sIHJhbmRvbUV2ZW50MSwgcmFuZG9tRXZlbnQxYSwgcmFuZG9tRXZlbnQyLCByYW5kb21FdmVudDJhLCByYW5kb21FdmVudDJiIH1cbi8vIGV4cG9ydFxuZXhwb3J0IHsgc3RvcnlFbGVtZW50LCBzdG9yeUVsZW1lbnRzIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=