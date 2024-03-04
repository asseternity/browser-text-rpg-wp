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

// CHOOSE YOUR CHOSEN! CHOOSE A GHOSTLY WAY TO COMMUNICATE!
// if watch them for a while, the selection of methods of appearance is smaller
// methods: write messages in their book, appear in their dreams
let methodOfContact2 = new storyElement('choice', 
    [`You have a few ideas on how to make contact with ChosenName...`],
    [{choiceText: `You wait for ChosenName to start reading, and change the words in xis book.`, // wait until the adventurer's reading and change the words in the book
    choiceModifiers: null,
    choiceNextStory: undefined},
    {choiceText: `You wait for ChosenName to fall asleep, and alter xis dreams.`, // appear or alter the adventurer's dream
    choiceModifiers: null,
    choiceNextStory: undefined},
    {choiceText: `You wait till ChosenName's alone on watch, and draw the symbol of Justice on a nearby tree.`, // Symbols or Runes: Using natural materials around the camp, the spirit could arrange symbols or runes that convey a message
    choiceModifiers: null,
    choiceNextStory: undefined},
    {choiceText: `You wait till the others are asleep, and change the shape of ChosenName's shadow caused by the campfire.`, // Animated Shadows: The spirit could animate shadows cast by objects in the environment, causing them to move in ways that convey messages or images relevant to the adventurers' journey. For example, a shadow might mimic the shape of a key to indicate that they are unlocking a great mystery or power
    choiceModifiers: null,
    choiceNextStory: undefined},
    {choiceText: `You search for an animal, and give it a command to approach the camp when the others are asleep.`, // Guiding Animals: The spirit could influence the behavior of animals in the area, causing them to act in ways that lead the adventurers in the right direction or warn them of impending danger
    choiceModifiers: null,
    choiceNextStory: undefined},
    {choiceText: `You wait for ChosenName to get a drink or polish xis armor, then alter the reflection.`, // Visions in Reflective Surfaces: The spirit could communicate through visions that appear in reflective surfaces such as still water, mirrors, or polished metal. These visions could offer glimpses of the adventurers' future or provide cryptic clues about their destiny as the Chosen one
    choiceModifiers: null,
    choiceNextStory: undefined}],
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
    [`1`, `2`],
    undefined,
    methodOfContact1)
let choseLysander = new storyElement('description',
    [`1`, `2`],
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
// export
let scriptObjects = { spiritAppear2 };


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
/* harmony import */ var _comp_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comp_script */ "./src/comp_script.js");
/* harmony import */ var _comp_races__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comp_races */ "./src/comp_races.js");
// import: storyElement, storyElements, hud, grabItem, char1, classes, listEnemies, moveOn, enemies array, enemy objects






// import {  storyElements } from './comp_story_objects';


const eventEmitter = __webpack_require__(/*! ./comp_event_emitter */ "./src/comp_event_emitter.js");
// game-long vars
let newPlayerConsequences = [];
let isPlayerExploring = false;
let Chosen = {};
// update chosen
function updateChosen() {
    let allStoryElements = _comp_script__WEBPACK_IMPORTED_MODULE_6__.storyElement.getAllInstances();
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
    let allStoryElements = _comp_script__WEBPACK_IMPORTED_MODULE_6__.storyElement.getAllInstances();
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
                    allStoryElements[i].text[j] = allStoryElements[i].text[j].replaceAll('Justice', _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.spiritConcept.concept); 
                }
                break;
            case 'dialogue':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    allStoryElements[i].text[j].npcLine = allStoryElements[i].text[j].npcLine.replaceAll('Justice', _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.spiritConcept.concept);
                    for (let k = 0; k < allStoryElements[i].text[j].responses.length; k++) {
                        allStoryElements[i].text[j].responses[k].dialogueChoice = allStoryElements[i].text[j].responses[k].dialogueChoice.replaceAll('Justice', _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.spiritConcept.concept);
                    }
                }
                break;
            case 'consequence':
                for (let j = 0; j < allStoryElements[i].text.length; j++) {
                    for (let k = 0; k < allStoryElements[i].text[j].consequenceText.length; k++) {
                        allStoryElements[i].text[j].consequenceText[k] = allStoryElements[i].text[j].consequenceText[k].replaceAll('Justice', _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.spiritConcept.concept); 
                    }
                }
                break;
        }
    }
}
// update storyElements
function newUpdateNames(answer) {
    let allStoryElements = _comp_script__WEBPACK_IMPORTED_MODULE_6__.storyElement.getAllInstances();
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
    _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent = _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent.replace('Somebody', answer);
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
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race = _comp_races__WEBPACK_IMPORTED_MODULE_7__.races.Realmer;
                _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent = _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent.replace(' Your armor class', ' In life, you were a Realmer. Your armor class');
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.currentHP += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race.raceHPBonus;
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.maxHP += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race.raceHPBonus;
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.armorClass += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race.raceArmorBonus;
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.menuUpdater)();
                let stats_race = document.querySelector('#stats_race');
                stats_race.textContent = 'In life, you were a Realmer.'
            } else if (thisChoice.choiceModifiers == 'raceMortar') {
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race = _comp_races__WEBPACK_IMPORTED_MODULE_7__.races.Mortar;
                _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent = _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent.replace(' Your armor class', ' In life, you were a Mortar. Your armor class');
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.currentHP += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race.raceHPBonus;
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.maxHP += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race.raceHPBonus;
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.armorClass += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race.raceArmorBonus;
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.menuUpdater)();
                stats_race.textContent = 'In life, you were a Mortar.'
            } else if (thisChoice.choiceModifiers == 'raceDeadlander') {
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race = _comp_races__WEBPACK_IMPORTED_MODULE_7__.races.Deadlander;
                _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent = _comp_hud__WEBPACK_IMPORTED_MODULE_2__.menu_window.textContent.replace(' Your armor class', ' In life, you were a Deadlander. Your armor class');
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.currentHP += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race.raceHPBonus;
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.maxHP += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race.raceHPBonus;
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.armorClass += _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.race.raceArmorBonus;
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.menuUpdater)();
                stats_race.textContent = 'In life, you were a Deadlander.'
            }
            if (thisChoice.choiceModifiers == 'compassionSpirit') {
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.spiritConcept.concept = 'Compassion';
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.spiritConcept.description = ' of Compassion';
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.menuUpdater)();
                updateConcept();
            }
            if (thisChoice.choiceModifiers == 'justiceSpirit') {
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.spiritConcept.concept = 'Justice';
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.spiritConcept.description = ' of Justice';
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.menuUpdater)();
                updateConcept();
            }
            if (thisChoice.choiceModifiers == 'freedomSpirit') {
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.spiritConcept.concept = 'Freedom';
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.spiritConcept.description = ' of Freedom';
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.menuUpdater)();
                updateConcept();
            }
            if (thisChoice.choiceModifiers == 'masterySpirit') {
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.spiritConcept.concept = 'Mastery';
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.spiritConcept.description = ' of Mastery';
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.menuUpdater)();
                updateConcept();
            }
            if (thisChoice.choiceModifiers == 'wisdomSpirit') {
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.spiritConcept.concept = 'Wisdom';
                _comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.char1.spiritConcept.description = ' of Wisdom';
                (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.menuUpdater)();
                updateConcept();
            }
            if (thisChoice.choiceModifiers == 'chosenPeculiar') {
                Chosen = (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.NPCMaker)('Peculiar', 'Quirke', 'she', 'her', 'her', 'herself');
                updateChosen();
            }
            if (thisChoice.choiceModifiers == 'chosenSnapdragon') {
                Chosen = (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.NPCMaker)('Snapdragon', 'Quirke', 'he', 'his', 'him', 'himself');
                updateChosen();
            }
            if (thisChoice.choiceModifiers == 'chosenLysander') {
                Chosen = (0,_comp_objects_and_methods__WEBPACK_IMPORTED_MODULE_5__.NPCMaker)('Lysander', 'MacAppleby', 'they', 'their', 'them', 'themselves');
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
storyTeller(_comp_script__WEBPACK_IMPORTED_MODULE_6__.scriptObjects.spiritAppear2);
// startDiceGame('Dave', exampleLines);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMWZjN2Q2MzEyZGJkMDUwMjhiMTQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySEFBMEM7QUFDdEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxpQ0FBaUMsMEJBQTBCLHlCQUF5QiwwQkFBMEIsc0JBQXNCLEdBQUcsZ0JBQWdCLHdCQUF3Qiw2REFBNkQsdUJBQXVCLHlCQUF5QixHQUFHLGdCQUFnQixnQkFBZ0IsbUJBQW1CLG1CQUFtQix3QkFBd0Isc0JBQXNCLEdBQUcsd0JBQXdCLG9CQUFvQiw2QkFBNkIsbUJBQW1CLHFDQUFxQyxHQUFHLHNCQUFzQixzQkFBc0IsR0FBRyxnQkFBZ0IsdUJBQXVCLG9CQUFvQixpREFBaUQsOENBQThDLEdBQUcsY0FBYyxvQkFBb0IsdUNBQXVDLHlCQUF5QixHQUFHLG1CQUFtQixvQkFBb0IsdUNBQXVDLHlCQUF5QixzQkFBc0IsR0FBRywwQkFBMEIsc0JBQXNCLEdBQUcsZ0NBQWdDLHVDQUF1QyxHQUFHLHFCQUFxQix5QkFBeUIsR0FBRyxrQkFBa0Isb0JBQW9CLHVDQUF1Qyx5QkFBeUIsc0JBQXNCLHNCQUFzQixHQUFHLDZEQUE2RCxpQkFBaUIsNkNBQTZDLEdBQUcseUJBQXlCLG9DQUFvQyxtQkFBbUIsd0JBQXdCLDBCQUEwQiwwQkFBMEIsbUJBQW1CLEdBQUcsb0NBQW9DLDhCQUE4QixxQ0FBcUMsOEJBQThCLHVCQUF1QixHQUFHLDRDQUE0QyxvQ0FBb0MsR0FBRyxZQUFZLHdCQUF3QixHQUFHLFlBQVksaUJBQWlCLDZDQUE2QyxHQUFHLFdBQVcsOENBQThDLEdBQUcsdUJBQXVCLFlBQVkscUJBQXFCLE9BQU8sVUFBVSxxQkFBcUIsT0FBTyxHQUFHLHVCQUF1QixZQUFZLHFCQUFxQixPQUFPLFVBQVUscUJBQXFCLE9BQU8sR0FBRyx5QkFBeUIscUJBQXFCLDBCQUEwQixHQUFHLGdDQUFnQyxxQkFBcUIsR0FBRyw4QkFBOEIsdUNBQXVDLEdBQUcsd0JBQXdCLG9DQUFvQyxtQkFBbUIsd0JBQXdCLHNCQUFzQix3QkFBd0IsbUJBQW1CLHVDQUF1QyxHQUFHLHFDQUFxQyxvQ0FBb0MsbUJBQW1CLHdCQUF3QixzQkFBc0IsbUJBQW1CLHVDQUF1QyxHQUFHLDJDQUEyQyx1Q0FBdUMsR0FBRyxvQkFBb0Isb0JBQW9CLHVDQUF1Qyx5QkFBeUIsa0JBQWtCLG9CQUFvQiwwQkFBMEIsOEJBQThCLGdCQUFnQixHQUFHLFlBQVksb0NBQW9DLG1CQUFtQix3QkFBd0IsbUJBQW1CLEdBQUcsa0JBQWtCLHVDQUF1QyxHQUFHLDJCQUEyQixzQkFBc0IsR0FBRyxVQUFVLHFCQUFxQixvQkFBb0IsdUNBQXVDLHlCQUF5QixHQUFHLFdBQVcsb0JBQW9CLHVDQUF1Qyx5QkFBeUIsR0FBRyxZQUFZLHVDQUF1QyxtQkFBbUIscUJBQXFCLHVCQUF1QixHQUFHLGlDQUFpQyx3QkFBd0Isb0JBQW9CLEdBQUcsa0JBQWtCLDhCQUE4QixvQkFBb0IsdUNBQXVDLEdBQUcsdUJBQXVCLHVCQUF1QixHQUFHLDBDQUEwQywrQkFBK0Isd0JBQXdCLEdBQUcsK0NBQStDLDZCQUE2Qix3QkFBd0IsR0FBRyx5Q0FBeUMsa0JBQWtCLDJCQUEyQix3QkFBd0IseUNBQXlDLG9EQUFvRCxPQUFPLHFCQUFxQix3QkFBd0IsT0FBTyxnQkFBZ0IsNkJBQTZCLDBCQUEwQixPQUFPLHFCQUFxQix5QkFBeUIsc0JBQXNCLHlCQUF5QixPQUFPLHlCQUF5Qix3QkFBd0IsaUNBQWlDLE9BQU8sb0JBQW9CLHlCQUF5QixzQkFBc0IsMkJBQTJCLE9BQU8sc0JBQXNCLDZCQUE2QixzQkFBc0Isd0JBQXdCLHlDQUF5QyxzQ0FBc0MsbUJBQW1CLE9BQU8sNkJBQTZCLHlCQUF5QixPQUFPLFlBQVkseUJBQXlCLHNCQUFzQix5QkFBeUIsT0FBTyxhQUFhLHlCQUF5QixzQkFBc0IsT0FBTyxjQUFjLDJCQUEyQixPQUFPLG1DQUFtQyw0QkFBNEIsd0JBQXdCLE9BQU8scUNBQXFDLHNCQUFzQixPQUFPLEdBQUcsWUFBWSwwQ0FBMEMsR0FBRyxtQkFBbUI7QUFDM3FQO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ3BUMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMseUJBQXlCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhEQUE4RCxZQUFZO0FBQzFFO0FBQ0EsOERBQThELFlBQVk7QUFDMUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL2VBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ3FCO0FBQ1c7QUFDSztBQUNyQztBQUNBLDhDQUE4QywyQ0FBMkMsV0FBVyxJQUFJLGtCQUFrQixzQ0FBTyxDQUFDO0FBQ2xJLCtDQUErQyw0Q0FBNEMsV0FBVyxJQUFJLG1CQUFtQixzQ0FBTyxDQUFDO0FBQ3JJLCtDQUErQyw0Q0FBNEMsV0FBVyxJQUFJLG1CQUFtQixzQ0FBTyxDQUFDO0FBQ3JJLGdEQUFnRCw4Q0FBOEMsV0FBVyxJQUFJLG9CQUFvQix3Q0FBUyxDQUFDO0FBQzNJO0FBQ0EsY0FBYztBQUNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDcUI7QUFNRDtBQU1nQjtBQUNwQyxxQkFBcUIsbUJBQU8sQ0FBQyw0REFBeUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw0REFBSztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQSxRQUFRLGlEQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBSztBQUNiO0FBQ0Esd0JBQXdCLElBQUksa0RBQVcsa0JBQWtCO0FBQ3pELGdCQUFnQixrREFBVztBQUMzQixnQkFBZ0Isa0RBQVcsYUFBYSxrREFBVztBQUNuRDtBQUNBO0FBQ0Esd0JBQXdCLElBQUksbURBQVksa0JBQWtCO0FBQzFELGdCQUFnQixtREFBWTtBQUM1QixnQkFBZ0IsbURBQVksYUFBYSxtREFBWTtBQUNyRDtBQUNBO0FBQ0EsY0FBYyw4Q0FBTyxjQUFjLDhDQUFPLGFBQWEsOENBQU87QUFDOUQ7QUFDQSx1REFBdUQsWUFBWSxXQUFXLFlBQVksZ0JBQWdCO0FBQzFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1EQUFZO0FBQzNCO0FBQ0EsWUFBWSxtREFBWTtBQUN4QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZ0JBQWdCLHlCQUF5QixxQkFBcUIsb0JBQW9CLDhCQUE4QixZQUFZLG9CQUFvQixHQUFHLGdCQUFnQjtBQUN4TTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFZO0FBQ3BCLFFBQVEsbURBQVk7QUFDcEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4Q0FBTyxrQ0FBa0MsV0FBVztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSw0QkFBNEIsOERBQU87QUFDbkM7QUFDQTtBQUNBLFVBQVUseUJBQXlCLGlFQUFVO0FBQzdDO0FBQ0E7QUFDQSxVQUFVLHlCQUF5Qiw2REFBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxtQkFBbUI7QUFDdkUsUUFBUSxpREFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFIQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaLFlBQVk7QUFDWixZQUFZO0FBQ1osWUFBWTtBQUNaLFlBQVk7QUFDWjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxhQUFhLElBQUksZUFBZTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxZQUFZLElBQUksWUFBWSxJQUFJLFlBQVksSUFBSSxZQUFZLElBQUksWUFBWSxJQUFJLFlBQVk7QUFDckk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0EsMkNBQTJDLElBQUk7QUFDL0MsMENBQTBDLElBQUk7QUFDOUM7QUFDQTtBQUNBLHFDQUFxQyxJQUFJO0FBQ3pDLG9DQUFvQyxJQUFJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3QjtBQUNBLHNDQUFzQyxhQUFhO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUJBQWlCO0FBQ2xEO0FBQ0Esd0NBQXdDLHlCQUF5QjtBQUNqRSxNQUFNO0FBQ047QUFDQSxpQ0FBaUMsaUJBQWlCO0FBQ2xEO0FBQ0Esd0NBQXdDLHlCQUF5QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxhQUFhO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLGlFQUFpRSxJQUFJO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0EsMERBQTBELHFCQUFxQixJQUFJLHFCQUFxQixJQUFJLHFCQUFxQixJQUFJLHFCQUFxQixJQUFJLHFCQUFxQixJQUFJLHFCQUFxQjtBQUM1TTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04scURBQXFELHFCQUFxQixJQUFJLHFCQUFxQixJQUFJLHFCQUFxQixJQUFJLHFCQUFxQixJQUFJLHFCQUFxQixJQUFJLHFCQUFxQjtBQUN2TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQSxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSwrQkFBK0I7QUFDL0IsK0NBQStDO0FBQy9DO0FBQ0EsNkRBQTZELHlCQUF5QixLQUFLLGlCQUFpQjtBQUM1RztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSwyQkFBMkI7QUFDM0IsMkNBQTJDO0FBQzNDO0FBQ0EseURBQXlELHlCQUF5QixLQUFLLGlCQUFpQjtBQUN4RztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLHlDQUF5QyxhQUFhLEtBQUssaUJBQWlCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLDZDQUE2QyxhQUFhLEtBQUssaUJBQWlCO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxhQUFhLEtBQUssZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQSwrQ0FBK0MseUJBQXlCLFlBQVksaUJBQWlCO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EseUNBQXlDLGVBQWU7QUFDeEQsd0NBQXdDLGdCQUFnQjtBQUN4RCxrREFBa0Qsd0JBQXdCO0FBQzFFO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EseUNBQXlDLGVBQWU7QUFDeEQsd0NBQXdDLGdCQUFnQjtBQUN4RCxrREFBa0Qsd0JBQXdCO0FBQzFFO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsY0FBYyxxRUFBcUUseUJBQXlCLEtBQUssaUJBQWlCO0FBQzVMLE1BQU07QUFDTiwwREFBMEQsY0FBYyxpRUFBaUUseUJBQXlCLEtBQUssaUJBQWlCLFFBQVEsY0FBYztBQUM5TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGFBQWEsS0FBSyxlQUFlO0FBQy9FLE1BQU07QUFDTjtBQUNBLGlEQUFpRCxjQUFjO0FBQy9EO0FBQ0EsOENBQThDLGFBQWEsS0FBSyxjQUFjO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDMWVBLHFCQUFxQixtQkFBTyxDQUFDLCtDQUFROztBQUVyQzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ3FCO0FBQ1E7QUFDc0I7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw0REFBSyxNQUFNLCtDQUErQyw0REFBSyxZQUFZLGVBQWUsNERBQUssV0FBVyxHQUFHLDREQUFLLE9BQU87QUFDOUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxXQUFXLGFBQWEsZ0JBQWdCO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVCQUF1QjtBQUNwRCxzQ0FBc0M7QUFDdEM7QUFDQSxpQ0FBaUMsb0JBQW9CO0FBQ3JELDhDQUE4QyxzQkFBc0IsdUJBQXVCLG1CQUFtQixnQkFBZ0I7QUFDOUgsMERBQTBELGVBQWUsMEJBQTBCLG9CQUFvQixtQkFBbUIsWUFBWTtBQUN0Six5REFBeUQsZUFBZSwwQkFBMEIsb0JBQW9CLG1CQUFtQixZQUFZO0FBQ3JKLHNEQUFzRCxlQUFlLDBCQUEwQixvQkFBb0IsbUJBQW1CLFlBQVk7QUFDbEosd0RBQXdELGVBQWUsMEJBQTBCLG9CQUFvQixnQkFBZ0IsWUFBWTtBQUNqSjtBQUNBO0FBQ0EsMEJBQTBCLGNBQWM7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0RBQXdELGtCQUFrQixZQUFZLFdBQVcsWUFBWSxnQkFBZ0I7QUFDN0g7QUFDQSwwQ0FBMEMsV0FBVyxZQUFZLHdCQUF3QixvQ0FBSyxDQUFDLEdBQUcsMkJBQTJCLHNCQUFzQixnQkFBZ0I7QUFDbks7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFDcUI7QUFLRDtBQUlnQjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQseURBQWtCO0FBQzNFLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBSztBQUNUO0FBQ0EsZ0NBQWdDLFVBQVUsSUFBSSxVQUFVLGtCQUFrQixnQkFBZ0IsaUJBQWlCLGVBQWU7QUFDMUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRCwwQ0FBMEMsUUFBUTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBSztBQUNiO0FBQ0E7QUFDQSxvQkFBb0IsNERBQUs7QUFDekIsb0JBQW9CLDREQUFLO0FBQ3pCLG9CQUFvQiw0REFBSyxjQUFjLDREQUFLLGNBQWMsNERBQUs7QUFDL0QsdURBQXVELFVBQVU7QUFDakUsaUVBQWlFLFFBQVE7QUFDekU7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNFQUFXO0FBQy9CLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBSztBQUN6QixvQkFBb0IsNERBQUs7QUFDekIsb0JBQW9CLDREQUFLLGNBQWMsNERBQUssY0FBYyw0REFBSztBQUMvRCxzREFBc0QsVUFBVTtBQUNoRSxpRUFBaUUsUUFBUTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0VBQVc7QUFDL0Isa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDREQUFLO0FBQ3pCLG9CQUFvQiw0REFBSztBQUN6QixvQkFBb0IsNERBQUssY0FBYyw0REFBSyxjQUFjLDREQUFLO0FBQy9ELHFEQUFxRCxVQUFVO0FBQy9ELGlFQUFpRSxRQUFRO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzRUFBVztBQUMvQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQUssMkJBQTJCLDREQUFLLDBCQUEwQiw0REFBSztBQUM1RSxZQUFZLDREQUFLO0FBQ2pCLFlBQVksNERBQUssY0FBYyw0REFBSyxjQUFjLDREQUFLO0FBQ3ZELFlBQVksNERBQUs7QUFDakI7QUFDQSxVQUFVLFNBQVMsNERBQUs7QUFDeEIsWUFBWSw0REFBSyxjQUFjLDREQUFLLGNBQWMsNERBQUs7QUFDdkQsWUFBWSw0REFBSztBQUNqQjtBQUNBLFVBQVUsU0FBUyw0REFBSztBQUN4QixZQUFZLDREQUFLLGNBQWMsNERBQUssY0FBYyw0REFBSztBQUN2RCxZQUFZLDREQUFLO0FBQ2pCO0FBQ0E7QUFDQSxRQUFRLHNFQUFXO0FBQ25CLHFEQUFxRCxRQUFRO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTix5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLFlBQVk7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9LQTtBQUNxQjtBQUNrRTtBQUM1QztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFPO0FBQ2Y7QUFDQSxZQUFZLDJEQUFPO0FBQ25CO0FBQ0E7QUFDQSxvQkFBb0IsZ0VBQVE7QUFDNUI7QUFDQSwyQ0FBMkMsWUFBWTtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsWUFBWSwyREFBTztBQUNuQjtBQUNBLGFBQWE7QUFDYjtBQUNBLHlEQUF5RDtBQUN6RCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsV0FBVyxVQUFVLG1CQUFtQixFQUFFLGFBQWEsOEJBQThCLG1FQUFtRTtBQUNuTTtBQUNBO0FBQ0Esb0JBQW9CLGdFQUFRO0FBQzVCLG9CQUFvQixtRUFBVztBQUMvQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxXQUFXLDhDQUE4QyxRQUFRO0FBQzVHO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLDJDQUEyQyxXQUFXLFVBQVUsbUJBQW1CO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyREFBTztBQUMzQixvQkFBb0IsMkRBQU87QUFDM0I7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLG1EQUFtRCxZQUFZO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsOENBQUssU0FBUyw0QkFBNEI7QUFDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXLFVBQVUsV0FBVyw4QkFBOEIsK0JBQStCO0FBQzVIO0FBQ0E7QUFDQSxRQUFRLG9FQUFZO0FBQ3BCLE1BQU07QUFDTjtBQUNBLCtCQUErQixXQUFXLFVBQVUsV0FBVztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsOENBQUs7QUFDdEI7QUFDQSxvQ0FBb0M7QUFDcEMsNkNBQTZDLFdBQVcscUJBQXFCLGdDQUFnQyx3QkFBd0IsZ0JBQWdCLHdCQUF3QixpQkFBaUIsZUFBZSxnQkFBZ0IsR0FBRyxZQUFZO0FBQzVPLE1BQU0sd0NBQXdDO0FBQzlDLDZDQUE2QyxXQUFXLDBCQUEwQixnQ0FBZ0Msd0JBQXdCLGdCQUFnQix3QkFBd0IsaUJBQWlCLGVBQWUsZ0JBQWdCLEdBQUcsWUFBWTtBQUNqUCxNQUFNLG9DQUFvQztBQUMxQyw2Q0FBNkMsV0FBVyw4QkFBOEIsZ0NBQWdDLHdCQUF3QixnQkFBZ0Isd0JBQXdCLGlCQUFpQixlQUFlLGdCQUFnQixHQUFHLFlBQVk7QUFDclAsTUFBTTtBQUNOLDZDQUE2QyxXQUFXLCtDQUErQyxpQkFBaUIsZUFBZSxnQkFBZ0IsR0FBRyxZQUFZO0FBQ3RLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBLGNBQWM7QUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnNEO0FBQ2tCO0FBQ2xDO0FBQ3RDLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLCtCQUErQjtBQUMvQixLQUFLO0FBQ0w7QUFDQSwrQkFBK0I7QUFDL0IsS0FBSztBQUNMO0FBQ0EsK0JBQStCO0FBQy9CLEtBQUs7QUFDTDtBQUNBLCtCQUErQjtBQUMvQixLQUFLO0FBQ0w7QUFDQSwrQkFBK0I7QUFDL0IsS0FBSztBQUNMO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBGQUEwRjtBQUNoRztBQUNBLG1DQUFtQztBQUNuQyxLQUFLO0FBQ0w7QUFDQSxxQ0FBcUM7QUFDckMsS0FBSztBQUNMO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esa0NBQWtDO0FBQ2xDLEtBQUs7QUFDTDtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxzQ0FBc0M7QUFDdEMsS0FBSztBQUNMO0FBQ0Esc0NBQXNDO0FBQ3RDLEtBQUs7QUFDTDtBQUNBLHNDQUFzQztBQUN0QyxLQUFLO0FBQ0w7QUFDQSxzQ0FBc0M7QUFDdEMsS0FBSztBQUNMO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLHNDQUFzQztBQUN0QyxLQUFLO0FBQ0w7QUFDQSxzQ0FBc0M7QUFDdEMsS0FBSztBQUNMO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esb0NBQW9DO0FBQ3BDLEtBQUs7QUFDTDtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSwyQ0FBMkM7QUFDM0MsS0FBSztBQUNMO0FBQ0EsMkNBQTJDO0FBQzNDLEtBQUs7QUFDTDtBQUNBLDJDQUEyQztBQUMzQyxLQUFLO0FBQ0w7QUFDQSwyQ0FBMkM7QUFDM0MsS0FBSztBQUNMO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLDRDQUE0QztBQUM1QyxLQUFLO0FBQ0w7QUFDQSw0Q0FBNEM7QUFDNUMsS0FBSztBQUNMO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSw2Q0FBNkM7QUFDN0MsS0FBSztBQUNMO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLHVDQUF1QztBQUN2QyxLQUFLO0FBQ0w7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBLE1BQU0sbVJBQW1SO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQseURBQWtCO0FBQy9FLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsMkJBQTJCLEtBQUssMkJBQTJCO0FBQ3ZHLDhDQUE4QyxzQkFBc0IsS0FBSyxzQkFBc0I7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBYTtBQUN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvY29tcF9hc3NldHMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL3NyYy9jb21wX2JhdHRsZV9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL3NyYy9jb21wX2RpY2VfZ2FtZS5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vc3JjL2NvbXBfZXZlbnRfZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vc3JjL2NvbXBfaHVkLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvY29tcF9pbnZlbnRvcnlfc3lzdGVtLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvY29tcF9vYmplY3RzX2FuZF9tZXRob2RzLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvY29tcF9yYWNlcy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vc3JjL2NvbXBfc2NyaXB0LmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvY29tcF9zdG9yeV9mdW5jdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vS0dOb1JlZ3JldHNTa2V0Y2gudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1wdXJwbGUxOiAjMEYzMzI1OyBcbiAgICAtLXB1cnBsZTI6ICMxRTJCMjE7XG4gICAgLS1wdXJwbGUzOiAjMkU2MzRGOyBcbiAgICAtLWdyZXk6ICMyODI4Mjg7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnVlQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuaHRtbCwgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XG4gICAgZm9udC1zaXplOiAxMTAlO1xufVxuXG4ubWFpbk1lbnVDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubWFpbk1lbnUgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE0MCU7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgMmZyIDJmciAzZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDQ1MHB4IDFmciA3MHB4O1xufVxuXG4udG9wX2JhciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUzKTtcbiAgICBncmlkLWNvbHVtbjogMSAvIDc7XG59XG5cbi5pbWFnZV93aW5kb3cge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMSk7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGdyaWQtcm93OiAyIC8gNDtcbn1cblxuLmltYWdlX3dpbmRvdyBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLmltYWdlX3dpbmRvdyBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xufVxuXG4uaW1hZ2Vfd2luZG93IHAge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm1haW5fd2luZG93IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTEpO1xuICAgIGdyaWQtY29sdW1uOiAzIC8gNTtcbiAgICBncmlkLXJvdzogMiAvIDQ7XG4gICAgZm9udC1zaXplOiAxMDAlO1xufVxuXG4ubWFpbl93aW5kb3cgcCwgLm1haW5fd2luZG93IGJ1dHRvbiwgLm1haW5fd2luZG93IGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuXG4ubWFpbl93aW5kb3cgc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XG4gICAgbWFyZ2luLXJpZ2h0OjEwMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXQuY2hlY2ttYXJrW3R5cGU9Y2hlY2tib3hdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBvdXRsaW5lOiB2YXIoLS1ncmV5KSBzb2xpZCAycHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuaW5wdXQuY2hlY2ttYXJrW3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xufVxuXG5vcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiAnVlQnO1xufVxuXG5kaWFsb2cge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5cbi5oaWRlIHtcbiAgICBhbmltYXRpb246IGZhZGVPdXQgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0e1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuXG4ubWFpbl93aW5kb3cgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDkwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubWFpbl93aW5kb3cgLmNob2ljZUJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tYWluX3dpbmRvdyBidXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMyk7XG59XG5cbi5tYWluX3dpbmRvdyBpbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnVlQnO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHVycGxlMSk7XG59XG5cbi5tYWluX3dpbmRvdyBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1ZUJztcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXB1cnBsZTEpO1xufVxuXG4ubWFpbl93aW5kb3cgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUzKTtcbn1cblxuLmJ1dHRvbl93aW5kb3cge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMyk7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyA3O1xuICAgIGdyaWQtcm93OiA0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnVlQnO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUzKTtcbn1cblxuLmJ1dHRvbl93aW5kb3cgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE1MCU7XG59XG5cbi5sb2cge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMik7XG4gICAgZ3JpZC1jb2x1bW46IDUgLyA2O1xufVxuXG4ubWVudSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUyKTtcbiAgICBncmlkLWNvbHVtbjogNSAvIDY7XG59XG5cbmRpYWxvZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogODUlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG59XG5cbiNjbG9zZUJ1dHRvbiwgI2Nsb3NlQnV0dG9uMiB7XG4gICAgbWFyZ2luLWxlZnQ6NDUwcHg7XG4gICAgZm9udC1zaXplOjgwJTtcbn1cblxuLnN0YXRzX21ldGVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBmciA1MGZyO1xufVxuXG4jc3RhdHNfbWV0ZXJfZXZpbCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuI3N0YXRzX2xpbmVfZXZpbCwgI3N0YXRzX2xpbmVfc29tYmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXJvb247XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbiNzdGF0c19saW5lX2JlbmV2b2xlbnQsICNzdGF0c19saW5lX3NpbGx5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDU4MHB4IDI1MHB4IDY1cHg7XG4gICAgfVxuICAgIHA6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgICAudG9wX2JhciB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyA1O1xuICAgIH1cbiAgICAuaW1hZ2Vfd2luZG93IHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgICAgIGdyaWQtcm93OiAyO1xuICAgICAgICBmb250LXNpemU6IDgwJTtcbiAgICB9XG4gICAgI2V4cGxvcmF0aW9uQm9hcmQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAubWFpbl93aW5kb3cge1xuICAgICAgICBncmlkLWNvbHVtbjogMjtcbiAgICAgICAgZ3JpZC1yb3c6IDI7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgfVxuICAgIC5idXR0b25fd2luZG93IHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgICAgICBncmlkLXJvdzogNDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAgICAgIGdhcDogNXB4O1xuICAgIH1cbiAgICAuYnV0dG9uX3dpbmRvdyBidXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDkwJTtcbiAgICB9XG4gICAgLmxvZyB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxO1xuICAgICAgICBncmlkLXJvdzogMztcbiAgICAgICAgZm9udC1zaXplOiA4MCU7XG4gICAgfVxuICAgIC5tZW51IHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgICAgIGdyaWQtcm93OiAzO1xuICAgIH1cbiAgICBkaWFsb2cge1xuICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xuICAgIH1cbiAgICAjY2xvc2VCdXR0b24sICNjbG9zZUJ1dHRvbjIge1xuICAgICAgICBtYXJnaW4tbGVmdDoyNTBweDtcbiAgICAgICAgZm9udC1zaXplOjgwJTtcbiAgICB9XG4gICAgLm1haW5fd2luZG93IGlucHV0W3R5cGU9dGV4dF0ge1xuICAgICAgICB3aWR0aDoxMjBweDtcbiAgICB9XG59XG5cbi5kZWF0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwrREFBc0Q7SUFDdEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLDhCQUE4QjtRQUM5Qix5Q0FBeUM7SUFDN0M7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsV0FBVztRQUNYLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGNBQWM7UUFDZCxXQUFXO1FBQ1gsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsMkJBQTJCO1FBQzNCLFFBQVE7SUFDWjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztRQUNkLFdBQVc7UUFDWCxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsV0FBVztJQUNmO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tcHVycGxlMTogIzBGMzMyNTsgXFxuICAgIC0tcHVycGxlMjogIzFFMkIyMTtcXG4gICAgLS1wdXJwbGUzOiAjMkU2MzRGOyBcXG4gICAgLS1ncmV5OiAjMjgyODI4O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XFxuICAgIHNyYzogdXJsKCcuL0tHTm9SZWdyZXRzU2tldGNoLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XFxuICAgIGZvbnQtc2l6ZTogMTEwJTtcXG59XFxuXFxuLm1haW5NZW51Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tYWluTWVudSBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDE0MCU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgMmZyIDJmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCA0NTBweCAxZnIgNzBweDtcXG59XFxuXFxuLnRvcF9iYXIge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUzKTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA3O1xcbn1cXG5cXG4uaW1hZ2Vfd2luZG93IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMSk7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xcbn1cXG5cXG4uaW1hZ2Vfd2luZG93IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLmltYWdlX3dpbmRvdyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUzKTtcXG59XFxuXFxuLmltYWdlX3dpbmRvdyBwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ubWFpbl93aW5kb3cge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUxKTtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA1O1xcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLm1haW5fd2luZG93IHAsIC5tYWluX3dpbmRvdyBidXR0b24sIC5tYWluX3dpbmRvdyBpbnB1dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4ubWFpbl93aW5kb3cgc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XFxuICAgIG1hcmdpbi1yaWdodDoxMDAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaW5wdXQuY2hlY2ttYXJrW3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG91dGxpbmU6IHZhcigtLWdyZXkpIHNvbGlkIDJweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbmlucHV0LmNoZWNrbWFya1t0eXBlPWNoZWNrYm94XTpjaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxufVxcblxcbm9wdGlvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVlQnO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcyBlYXNlLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLmhpZGUge1xcbiAgICBhbmltYXRpb246IGZhZGVPdXQgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0e1xcbiAgICBmcm9tIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbn1cXG5cXG4ubWFpbl93aW5kb3cgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tYWluX3dpbmRvdyAuY2hvaWNlQnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tYWluX3dpbmRvdyBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xcbn1cXG5cXG4ubWFpbl93aW5kb3cgaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1ZUJztcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wdXJwbGUxKTtcXG59XFxuXFxuLm1haW5fd2luZG93IGlucHV0W3R5cGU9c3VibWl0XSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnVlQnO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHVycGxlMSk7XFxufVxcblxcbi5tYWluX3dpbmRvdyBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUzKTtcXG59XFxuXFxuLmJ1dHRvbl93aW5kb3cge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUzKTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA3O1xcbiAgICBncmlkLXJvdzogNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMyk7XFxufVxcblxcbi5idXR0b25fd2luZG93IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTUwJTtcXG59XFxuXFxuLmxvZyB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUyKTtcXG4gICAgZ3JpZC1jb2x1bW46IDUgLyA2O1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTIpO1xcbiAgICBncmlkLWNvbHVtbjogNSAvIDY7XFxufVxcblxcbmRpYWxvZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogODUlO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4jY2xvc2VCdXR0b24sICNjbG9zZUJ1dHRvbjIge1xcbiAgICBtYXJnaW4tbGVmdDo0NTBweDtcXG4gICAgZm9udC1zaXplOjgwJTtcXG59XFxuXFxuLnN0YXRzX21ldGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBmciA1MGZyO1xcbn1cXG5cXG4jc3RhdHNfbWV0ZXJfZXZpbCB7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbiNzdGF0c19saW5lX2V2aWwsICNzdGF0c19saW5lX3NvbWJlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbiNzdGF0c19saW5lX2JlbmV2b2xlbnQsICNzdGF0c19saW5lX3NpbGx5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCA1ODBweCAyNTBweCA2NXB4O1xcbiAgICB9XFxuICAgIHA6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgfVxcbiAgICAudG9wX2JhciB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDU7XFxuICAgIH1cXG4gICAgLmltYWdlX3dpbmRvdyB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgICAgIGdyaWQtcm93OiAyO1xcbiAgICAgICAgZm9udC1zaXplOiA4MCU7XFxuICAgIH1cXG4gICAgI2V4cGxvcmF0aW9uQm9hcmQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgLm1haW5fd2luZG93IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDI7XFxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICB9XFxuICAgIC5idXR0b25fd2luZG93IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgICAgIGdyaWQtcm93OiA0O1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICB9XFxuICAgIC5idXR0b25fd2luZG93IGJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IDkwJTtcXG4gICAgfVxcbiAgICAubG9nIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICAgICAgZ3JpZC1yb3c6IDM7XFxuICAgICAgICBmb250LXNpemU6IDgwJTtcXG4gICAgfVxcbiAgICAubWVudSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgICAgIGdyaWQtcm93OiAzO1xcbiAgICB9XFxuICAgIGRpYWxvZyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xcbiAgICB9XFxuICAgICNjbG9zZUJ1dHRvbiwgI2Nsb3NlQnV0dG9uMiB7XFxuICAgICAgICBtYXJnaW4tbGVmdDoyNTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTo4MCU7XFxuICAgIH1cXG4gICAgLm1haW5fd2luZG93IGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICAgICAgd2lkdGg6MTIwcHg7XFxuICAgIH1cXG59XFxuXFxuLmRlYXRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5tb2R1bGUuZXhwb3J0cy5vbmNlID0gb25jZTtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG9uY2UoZW1pdHRlciwgbmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKG5hbWUsIHJlc29sdmVyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVyKCkge1xuICAgICAgaWYgKHR5cGVvZiBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcblxuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCByZXNvbHZlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGlmIChuYW1lICE9PSAnZXJyb3InKSB7XG4gICAgICBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBlcnJvckxpc3RlbmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgaGFuZGxlciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsICdlcnJvcicsIGhhbmRsZXIsIGZsYWdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgbGlzdGVuZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICBlbWl0dGVyLm9uY2UobmFtZSwgbGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0dGVyLm9uKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIEV2ZW50VGFyZ2V0IGRvZXMgbm90IGhhdmUgYGVycm9yYCBldmVudCBzZW1hbnRpY3MgbGlrZSBOb2RlXG4gICAgLy8gRXZlbnRFbWl0dGVycywgd2UgZG8gbm90IGxpc3RlbiBmb3IgYGVycm9yYCBldmVudHMgaGVyZS5cbiAgICBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuY3Rpb24gd3JhcExpc3RlbmVyKGFyZykge1xuICAgICAgLy8gSUUgZG9lcyBub3QgaGF2ZSBidWlsdGluIGB7IG9uY2U6IHRydWUgfWAgc3VwcG9ydCBzbyB3ZVxuICAgICAgLy8gaGF2ZSB0byBkbyBpdCBtYW51YWxseS5cbiAgICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB3cmFwTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbGlzdGVuZXIoYXJnKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJlbWl0dGVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEV2ZW50RW1pdHRlci4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGVtaXR0ZXIpO1xuICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGltcG9ydGluZ1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgdHJlZUltZyBmcm9tICcuL3RyZWUucG5nJ1xuaW1wb3J0IHBlcnNvbkltZyBmcm9tICcuL3BlcnNvbi5wbmcnO1xuLy8gaW5pdGlhbGl6ZSBpbWFnZXNcbmxldCBpY29uVHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyBpY29uVHJlZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0OjE1cHg7d2lkdGg6MTVweDsnKTsgaWNvblRyZWUuc3JjID0gYCR7dHJlZUltZ31gO1xubGV0IGljb25UcmVlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyBpY29uVHJlZTIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2hlaWdodDoxNXB4O3dpZHRoOjE1cHg7Jyk7IGljb25UcmVlMi5zcmMgPSBgJHt0cmVlSW1nfWA7XG5sZXQgaWNvblRyZWUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IGljb25UcmVlMy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0OjE1cHg7d2lkdGg6MTVweDsnKTsgaWNvblRyZWUzLnNyYyA9IGAke3RyZWVJbWd9YDtcbmxldCBpY29uUGVyc29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IGljb25QZXJzb24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdoZWlnaHQ6MTVweDt3aWR0aDoxNXB4OycpOyBpY29uUGVyc29uLnNyYyA9IGAke3BlcnNvbkltZ31gO1xuLy8gYXJyYXkgb2YgaW1hZ2VzXG5sZXQgaWNvbnMgPSB7IGljb25UcmVlLCBpY29uVHJlZTIsIGljb25UcmVlMywgaWNvblBlcnNvbiB9XG4vLyBleHBvcnQgaW1hZ2VzXG5leHBvcnQge2ljb25zfSIsIi8vIGltcG9ydDogSXNCYXR0bGVPdmVyLCBodWQsIG1vbnN0ZXIgb2JqZWN0cywgY2hhcjEsIGNsYXNzZXNcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHsgXG4gICAgdG9wX2JhcixcbiAgICBsb2dfd2luZG93LFxuICAgIGltYWdlX3dpbmRvdyxcbiAgICBtYWluX3dpbmRvdyxcbn0gZnJvbSAnLi9jb21wX2h1ZCc7XG5pbXBvcnQgeyBcbiAgICBKYW5pdG9yLFxuICAgIEFjY291bnRhbnQsXG4gICAgRGFuY2VyLFxuICAgIGNoYXIxLFxufSBmcm9tICcuL2NvbXBfb2JqZWN0c19hbmRfbWV0aG9kcyc7XG5jb25zdCBldmVudEVtaXR0ZXIgPSByZXF1aXJlKCcuL2NvbXBfZXZlbnRfZW1pdHRlci5qcycpO1xuLy8gaW1wb3J0YW50IHZhcnNcbmxldCBlbmVtaWVzID0gW107XG5sZXQgZW5lbXlUb0F0dGFjaztcbi8vYnV0dG9uIGVmZmVjdHNcbmxldCBhdHRhY2tfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F0dGFja0J1dHRvbicpO1xuYXR0YWNrX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNoYXIxLmF0dGFjayhlbmVteVRvQXR0YWNrKSk7XG4vLyBjaGFuZ2UgZW5lbWllcyBmdW5jdGlvblxuZnVuY3Rpb24gaXNIZURlYWQoZGFtYWdlZEVuZW15KSB7XG4gICAgaWYgKGRhbWFnZWRFbmVteS5jdXJyZW50SFAgPD0gMCkge1xuICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gYCR7ZGFtYWdlZEVuZW15Lm5hbWV9IGRpZXMhYDtcbiAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOnllbGxvdycpO1xuICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgbGV0IGRlYWRNb25zdGVySUQgPSBlbmVtaWVzLmZpbmRJbmRleChpID0+IGkubmFtZSA9PSBkYW1hZ2VkRW5lbXkubmFtZSk7XG4gICAgICAgIGVuZW1pZXMuc3BsaWNlKGRlYWRNb25zdGVySUQsIDEpO1xuICAgICAgICBpZiAoZW5lbWllcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoJ2JhdHRsZTp3aW4nKTtcbiAgICAgICAgICAgIC8vIGlzQmF0dGxlT3Zlcignd2luJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlzUGxheWVyRGVhZCgpO1xufVxuZnVuY3Rpb24gaXNQbGF5ZXJEZWFkKCkge1xuICAgIGlmIChjaGFyMS5jdXJyZW50SFAgPD0gMCkge1xuICAgICAgICBldmVudEVtaXR0ZXIuZW1pdCgnYmF0dGxlOmxvc2UnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYWluX3dpbmRvdy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG1haW5fd2luZG93LmNoaWxkcmVuW2ldLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIG1haW5fd2luZG93LnJlbW92ZUNoaWxkKG1haW5fd2luZG93LmNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGltYWdlX3dpbmRvdy5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGltYWdlX3dpbmRvdy5jaGlsZHJlbltqXS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgICAgICBpbWFnZV93aW5kb3cucmVtb3ZlQ2hpbGQoaW1hZ2Vfd2luZG93LmNoaWxkcmVuW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aGlsZSh0b3BfYmFyLmZpcnN0Q2hpbGQpIHt0b3BfYmFyLnJlbW92ZUNoaWxkKHRvcF9iYXIuZmlyc3RDaGlsZCl9O1xuICAgICAgICBsZXQgZGVhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVhdGguc2V0QXR0cmlidXRlKCdzdHlsZScsIGBwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO3otaW5kZXg6NTAwO292ZXJmbG93OmhpZGRlbjtgKTtcbiAgICAgICAgZGVhdGguY2xhc3NMaXN0LmFkZCgnZGVhdGgnKTtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlYXRoKTtcbiAgICB9XG59XG4vLyB1cGRhdGUgZW5lbWllcyBsaXN0XG5mdW5jdGlvbiBsaXN0RW5lbWllcygpIHtcbiAgICBsZXQgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwbG9yYXRpb25Cb2FyZCcpO1xuICAgIEFycmF5LmZyb20oaW1hZ2Vfd2luZG93LmNoaWxkcmVuKS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgaWYgKGVudHJ5ICE9PSBib2FyZCkge1xuICAgICAgICAgICAgaW1hZ2Vfd2luZG93LnJlbW92ZUNoaWxkKGVudHJ5KTtcbiAgICAgICAgfSBcbiAgICB9KVxuICAgIGVuZW1pZXMuZm9yRWFjaCgodGhpc0VuZW15KSA9PiB7XG4gICAgICAgIGxldCBlbmVteV9lbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbGV0IGVuZW15X2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlbmVteV9lbnRyeS50ZXh0Q29udGVudCA9IGAke3RoaXNFbmVteS5uYW1lfSBpcyB0aGVyZS4gSXQgaGFzIEFDIG9mICR7dGhpc0VuZW15LmFybW9yQ2xhc3N9LCBhdHRhY2sgYm9udXMgb2YgJHt0aGlzRW5lbXkubW9uc3RlckF0dGFja0JvbnVzfSBhbmQgSFAgb2YgJHt0aGlzRW5lbXkuY3VycmVudEhQfS8ke3RoaXNFbmVteS5tYXhIUH0uYFxuICAgICAgICBlbmVteV9idXR0b24udGV4dENvbnRlbnQgPSBgU2VsZWN0YDtcbiAgICAgICAgZW5lbXlfYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzRW5lbXkubmFtZSk7XG4gICAgICAgIGVuZW15X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNlbGVjdEVuZW15KHRoaXNFbmVteSkpO1xuICAgICAgICBpbWFnZV93aW5kb3cuYXBwZW5kQ2hpbGQoZW5lbXlfZW50cnkpO1xuICAgICAgICBpbWFnZV93aW5kb3cuYXBwZW5kQ2hpbGQoZW5lbXlfYnV0dG9uKTtcbiAgICB9KTtcbn1cbi8vIGF0dGFja2luZ1xuZnVuY3Rpb24gc2VsZWN0RW5lbXkoZW5lbXkpIHtcbiAgICBlbmVteVRvQXR0YWNrID0gZW5lbXk7XG4gICAgdG9wX2Jhci50ZXh0Q29udGVudCA9IGBTZWxlY3RlZCBlbmVteTogJHtlbmVteS5uYW1lfS5gO1xufVxuLy8gc3BlY2lhbCBidXR0b24gdGhhdCBzd2l0Y2hlcyBhdHRhY2sgbW9kZXNcbmxldCBKYW5pdG9yU3BlY2lhbHMgPSBbJ1NwaXJpdCBTbGFtJywgJ1NwZWN0cmFsIEJsYWRlJywgJ1dyYXRoZnVsIFZpc2FnZSddO1xubGV0IEFjY291bnRhbnRTcGVjaWFscyA9IFsnU3Bpcml0IFNsYW0nLCAnV2l0aGVyaW5nIEJvbHQnLCAnRXNzZW5jZSBEcmFpbiddO1xubGV0IERhbmNlclNwZWNpYWxzID0gWydTcGlyaXQgU2xhbScsICdTcGlyaXQgQmxlc3NpbmcnLCAnQmluZCBvZiB0aGUgR3VhcmRpYW4nXTtcbmxldCBhdHRhY2tJbmRleCA9IDA7XG5sZXQgcGxheWVyQ2xhc3MgPSAnJztcbmV2ZW50RW1pdHRlci5vbignV3JhaXRoJywgKCkgPT4ge1xuICAgIHBsYXllckNsYXNzID0gJ1dyYWl0aCc7XG59KTtcbmV2ZW50RW1pdHRlci5vbignUG9sdGVyZ2Vpc3QnLCAoKSA9PiB7XG4gICAgcGxheWVyQ2xhc3MgPSAnUG9sdGVyZ2Vpc3QnO1xufSk7XG5ldmVudEVtaXR0ZXIub24oJ0d1YXJkaWFuU3Bpcml0JywgKCkgPT4ge1xuICAgIHBsYXllckNsYXNzID0gJ0d1YXJkaWFuU3Bpcml0Jztcbn0pO1xuZnVuY3Rpb24gc3dpdGNoQXR0YWNrKGNoYXIpIHtcbiAgICBpZiAocGxheWVyQ2xhc3MgIT09ICcnKSB7XG4gICAgICAgIGlmIChjaGFyIGluc3RhbmNlb2YgSmFuaXRvcikge1xuICAgICAgICAgICAgYXR0YWNrSW5kZXggPSAoYXR0YWNrSW5kZXggKyAxKSAlIEphbml0b3JTcGVjaWFscy5sZW5ndGg7XG4gICAgICAgICAgICBjaGFyLnNwZWNpYWxBdHRhY2sgPSBKYW5pdG9yU3BlY2lhbHNbYXR0YWNrSW5kZXhdO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXIgaW5zdGFuY2VvZiBBY2NvdW50YW50KSB7XG4gICAgICAgICAgICBhdHRhY2tJbmRleCA9IChhdHRhY2tJbmRleCArIDEpICUgQWNjb3VudGFudFNwZWNpYWxzLmxlbmd0aDtcbiAgICAgICAgICAgIGNoYXIuc3BlY2lhbEF0dGFjayA9IEFjY291bnRhbnRTcGVjaWFsc1thdHRhY2tJbmRleF07XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhciBpbnN0YW5jZW9mIERhbmNlcikge1xuICAgICAgICAgICAgYXR0YWNrSW5kZXggPSAoYXR0YWNrSW5kZXggKyAxKSAlIERhbmNlclNwZWNpYWxzLmxlbmd0aDtcbiAgICAgICAgICAgIGNoYXIuc3BlY2lhbEF0dGFjayA9IERhbmNlclNwZWNpYWxzW2F0dGFja0luZGV4XTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gYFlvdSBnZXQgcmVhZHkgdG8gdXNlICR7Y2hhci5zcGVjaWFsQXR0YWNrfS5gO1xuICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICB9O1xufTtcbi8vc3RhcnQgYmF0dGxlXG5mdW5jdGlvbiBzdGFydEJhdHRsZSguLi5lbmNvdW50ZXJFbmVtaWVzKSB7XG4gICAgZW5jb3VudGVyRW5lbWllcy5mb3JFYWNoKCh0aGlzRW5lbXkpID0+IHtcbiAgICAgICAgdGhpc0VuZW15LmN1cnJlbnRIUCA9IHRoaXNFbmVteS5tYXhIUDtcbiAgICB9KTtcbiAgICBlbmVtaWVzID0gZW5jb3VudGVyRW5lbWllcztcbiAgICBsaXN0RW5lbWllcygpO1xufVxuLy8gZXhwb3J0XG5leHBvcnQge1xuICAgIGlzSGVEZWFkLFxuICAgIGlzUGxheWVyRGVhZCxcbiAgICBsaXN0RW5lbWllcyxcbiAgICBzd2l0Y2hBdHRhY2ssXG4gICAgc3RhcnRCYXR0bGUsXG4gICAgZW5lbWllcyxcbiAgICBlbmVteVRvQXR0YWNrXG59IiwiLy8gaW5pdGlhbGl6ZSBodWRcbmxldCBtYWluX3dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX3dpbmRvdycpO1xuLy8gaW5pdGlhbGl6ZSB2YXJzXG5sZXQgZGllMSA9IHtyZXN1bHQ6IDAsIHJlUm9sbEZsYWc6IGZhbHNlfTtcbmxldCBkaWUyID0ge3Jlc3VsdDogMCwgcmVSb2xsRmxhZzogZmFsc2V9O1xubGV0IGRpZTMgPSB7cmVzdWx0OiAwLCByZVJvbGxGbGFnOiBmYWxzZX07XG5sZXQgZGllNCA9IHtyZXN1bHQ6IDAsIHJlUm9sbEZsYWc6IGZhbHNlfTtcbmxldCBkaWU1ID0ge3Jlc3VsdDogMCwgcmVSb2xsRmxhZzogZmFsc2V9O1xubGV0IGRpZTYgPSB7cmVzdWx0OiAwLCByZVJvbGxGbGFnOiBmYWxzZX07XG5sZXQgcGxheWVySGFuZCA9IFtkaWUxLCBkaWUyLCBkaWUzLCBkaWU0LCBkaWU1LCBkaWU2XTtcbmxldCBvcHBvbmVudEhhbmQgPSBbXTtcbmxldCBjdXJyZW50QmlkID0geyBwbGF5ZXI6ICcnLCBudW1iZXJPZkRpY2U6IDAsIGRvdHM6IDAgfTtcbmxldCBhY2N1c2F0aW9uID0geyBhY2N1c2VyOiAnJywgbnVtYmVyT2ZEaWNlOiAwLCBkb3RzOiAwIH07XG5sZXQgZXhhbXBsZUxpbmVzID0ge1xuICAgIG9wZW5MaW5lOiBgQ29tZSBvbiwgbGV0J3MgcGxheWAsXG4gICAgYmlkTGluZTogYEx1Y2sgaXMgb24gbXkgc2lkZSB0b2RheWAsXG4gICAgYmx1ZmZMaW5lOiBgSSBoYXZlIGdvb2QgZGljZSB0b2RheSwga2lkYCxcbiAgICBhY2N1c2VMaW5lOiBgWWVhaCwgSSBkb24ndCB0aGluayBzb2AsXG4gICAgd2luTGluZTogYEdvdGNoYSwga2lkYCxcbiAgICBsb3NlTGluZTogYERhcm4uIFlvdSBnb3QgbHVja3ksIHBhbGBcbn1cbmZ1bmN0aW9uIHN0YXJ0RGljZUdhbWUob3Bwb25lbnROYW1lLCBsaW5lcykge1xuICAgIC8vIGNsZWFyIG1haW4gd2luZG93XG4gICAgd2hpbGUgKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIHsgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQobWFpbl93aW5kb3cuZmlyc3RDaGlsZCkgfTtcbiAgICAvLyBpbnN0cnVjdGlvbnNcbiAgICBsZXQgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5zdHJ1Y3Rpb24uc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOnllbGxvdycpO1xuICAgIGluc3RydWN0aW9uLnRleHRDb250ZW50ID0gJ1tZb3UgYXJlIGFib3V0IHRvIHBsYXkgRmFsc2VjdWJlcy4gSGVyZSBhcmUgdGhlIGluc3RydWN0aW9ucy5dJztcbiAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbik7XG4gICAgLy8gc3RhcnQgZ2FtZSBidXR0b25cbiAgICBsZXQgc3RhcnREaWNlR2FtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN0YXJ0RGljZUdhbWVCdXR0b24udGV4dENvbnRlbnQgPSBgTGV0J3MgcGxheSBGYWxzZWN1YmVzIWBcbiAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChzdGFydERpY2VHYW1lQnV0dG9uKTtcbiAgICBzdGFydERpY2VHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBmYWxzZUN1YmVzKG9wcG9uZW50TmFtZSwgbGluZXMpO1xuICAgICAgICBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZChzdGFydERpY2VHYW1lQnV0dG9uKTtcbiAgICB9KTtcbn1cbi8vIGZ1bmN0aW9uIHRoYXQgc3RhcnRzIHRoZSBnYW1lXG5mdW5jdGlvbiBmYWxzZUN1YmVzKG9wcG9uZW50TmFtZSwgbGluZXMpIHtcbiAgICAvLyBvcGVuTGluZSBmcm9tIHRoZSBvcHBvbmVudFxuICAgIGxldCBvcGVuTGluZUVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG9wZW5MaW5lRW50cnkudGV4dENvbnRlbnQgPSBgJHtvcHBvbmVudE5hbWV9OiAke2xpbmVzLm9wZW5MaW5lfWA7XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQob3BlbkxpbmVFbnRyeSk7XG4gICAgLy8gcm9sbCBkaWNlIGJ1dHRvblxuICAgIGxldCByb2xsRGljZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJvbGxEaWNlQnV0dG9uLnRleHRDb250ZW50ID0gYFJvbGwgdGhlIGRpY2UuYFxuICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKHJvbGxEaWNlQnV0dG9uKTtcbiAgICByb2xsRGljZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQocm9sbERpY2VCdXR0b24pO1xuICAgICAgICByb2xsUGhhc2Uob3Bwb25lbnROYW1lLCBsaW5lcylcbiAgICB9KTtcbn1cbi8vIHJvbGxpbmcgNmQ0XG5mdW5jdGlvbiByb2xsNmQ0UGxheWVyKCkge1xuICAgIGRpZTEucmVzdWx0ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMSk7XG4gICAgZGllMi5yZXN1bHQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTtcbiAgICBkaWUzLnJlc3VsdCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpO1xuICAgIGRpZTQucmVzdWx0ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMSk7XG4gICAgZGllNS5yZXN1bHQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTtcbiAgICBkaWU2LnJlc3VsdCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpOyAgICBcbiAgICByZXR1cm4gW2RpZTEsIGRpZTIsIGRpZTMsIGRpZTQsIGRpZTUsIGRpZTZdXG59XG5mdW5jdGlvbiByb2xsNmQ0T3Bwb25lbnQoKSB7XG4gICAgbGV0IG9wcG9uZW50RGllMSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpO1xuICAgIGxldCBvcHBvbmVudERpZTIgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTtcbiAgICBsZXQgb3Bwb25lbnREaWUzID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMSk7XG4gICAgbGV0IG9wcG9uZW50RGllNCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpO1xuICAgIGxldCBvcHBvbmVudERpZTUgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTtcbiAgICBsZXQgb3Bwb25lbnREaWU2ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMSk7ICAgIFxuICAgIHJldHVybiBbb3Bwb25lbnREaWUxLCBvcHBvbmVudERpZTIsIG9wcG9uZW50RGllMywgb3Bwb25lbnREaWU0LCBvcHBvbmVudERpZTUsIG9wcG9uZW50RGllNl1cbn1cbmZ1bmN0aW9uIHJvbGwxZDQoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpO1xufVxuLy8gcm9sbGluZyBwaGFzZVxuZnVuY3Rpb24gcm9sbFBoYXNlKG9wcG9uZW50TmFtZSwgbGluZXMpIHtcbiAgICAvLyBwbGF5ZXJIYW5kIGFuZCBvcHBvbmVudEhhbmQgYXJyYXlzIGdldCBhc3NpZ25lZCBzaXggaW50ZWdlcnNcbiAgICByb2xsNmQ0UGxheWVyKCk7XG4gICAgb3Bwb25lbnRIYW5kID0gcm9sbDZkNE9wcG9uZW50KCk7XG4gICAgLy8gYSBtZXNzYWdlIHBvcHMgb3V0OiAnWW91IHJvbGxlZDogeCwgeSwgYSwgYiwgYywgZCdcbiAgICBsZXQgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gYFlvdSByb2xsZWQ6ICR7ZGllMS5yZXN1bHR9LCAke2RpZTIucmVzdWx0fSwgJHtkaWUzLnJlc3VsdH0sICR7ZGllNC5yZXN1bHR9LCAke2RpZTUucmVzdWx0fSwgJHtkaWU2LnJlc3VsdH0uYDtcbiAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgICAvLyBiZWxvdyBlYWNoIG51bWJlciBhIGNoZWNrbWFyayBmb3JtXG4gICAgbGV0IHBsYXllclJlcm9sbEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQocGxheWVyUmVyb2xsRm9ybSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgbGV0IGNoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrbWFyay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgY2hlY2ttYXJrLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHtpKzF9YCk7XG4gICAgICAgIGNoZWNrbWFyay5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHtpKzF9YCk7XG4gICAgICAgIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKCdjaGVja21hcmsnKTtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgJHtpKzF9YCk7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gYERpY2UgJHtpKzF9YDtcbiAgICAgICAgcGxheWVyUmVyb2xsRm9ybS5hcHBlbmRDaGlsZChjaGVja21hcmspO1xuICAgICAgICBwbGF5ZXJSZXJvbGxGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgbGV0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgcGxheWVyUmVyb2xsRm9ybS5hcHBlbmRDaGlsZChicik7XG4gICAgfVxuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWFyZ2luLXRvcDogMTBweDsnKTtcbiAgICBwbGF5ZXJSZXJvbGxGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgLy8gb3Bwb25lbnQgcmUtcm9sbHMgbG9naWNcbiAgICBsZXQgYWxsT3Bwb25lbnQxcyA9IG9wcG9uZW50SGFuZC5maWx0ZXIoaSA9PiBpID09IDEpO1xuICAgIGxldCBhbGxPcHBvbmVudDJzID0gb3Bwb25lbnRIYW5kLmZpbHRlcihpID0+IGkgPT0gMik7XG4gICAgbGV0IGFsbE9wcG9uZW50M3MgPSBvcHBvbmVudEhhbmQuZmlsdGVyKGkgPT4gaSA9PSAzKTtcbiAgICBsZXQgYWxsT3Bwb25lbnQ0cyA9IG9wcG9uZW50SGFuZC5maWx0ZXIoaSA9PiBpID09IDQpO1xuICAgIGxldCBvcHBvbmVudDFzT2JqZWN0ID0geyBudW1iZXI6IGFsbE9wcG9uZW50MXMubGVuZ3RoLCBkb3RzOiAxIH07XG4gICAgbGV0IG9wcG9uZW50MnNPYmplY3QgPSB7IG51bWJlcjogYWxsT3Bwb25lbnQycy5sZW5ndGgsIGRvdHM6IDIgfTtcbiAgICBsZXQgb3Bwb25lbnQzc09iamVjdCA9IHsgbnVtYmVyOiBhbGxPcHBvbmVudDNzLmxlbmd0aCwgZG90czogMyB9O1xuICAgIGxldCBvcHBvbmVudDRzT2JqZWN0ID0geyBudW1iZXI6IGFsbE9wcG9uZW50NHMubGVuZ3RoLCBkb3RzOiA0IH07XG4gICAgbGV0IG9wcG9uZW50T2JqZWN0cyA9IFtvcHBvbmVudDFzT2JqZWN0LCBvcHBvbmVudDJzT2JqZWN0LCBvcHBvbmVudDNzT2JqZWN0LCBvcHBvbmVudDRzT2JqZWN0XTtcbiAgICBjb25zb2xlLmxvZyhgT3JpZyBvcHBvbmVudEhhbmQ6ICR7b3Bwb25lbnRIYW5kfWApO1xuICAgIGxldCBvcHBvbmVudE9iamVjdHNTb3J0ZWQgPSBvcHBvbmVudE9iamVjdHMuc29ydCgoYSwgYikgPT4gKGEubnVtYmVyID4gYi5udW1iZXIpID8gLTEgOiAxKTtcbiAgICBsZXQgb3Bwb25lbnRMYXN0RG90cztcbiAgICBsZXQgb3Bwb25lbnRTZWNvbmRUb0xhc3REb3RzO1xuICAgIGlmIChvcHBvbmVudE9iamVjdHNTb3J0ZWRbM10ubnVtYmVyICE9PSAwKSB7XG4gICAgICAgIG9wcG9uZW50TGFzdERvdHMgPSBvcHBvbmVudE9iamVjdHNTb3J0ZWRbM10uZG90cztcbiAgICAgICAgY29uc29sZS5sb2coYEJhZCBkb3RzOiAke29wcG9uZW50TGFzdERvdHN9YCk7XG4gICAgICAgIG9wcG9uZW50U2Vjb25kVG9MYXN0RG90cyA9IG9wcG9uZW50T2JqZWN0c1NvcnRlZFsyXS5kb3RzO1xuICAgICAgICBjb25zb2xlLmxvZyhgU2Vjb25kIGJhZCBkb3RzOiAke29wcG9uZW50U2Vjb25kVG9MYXN0RG90c31gKTsgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3Bwb25lbnRMYXN0RG90cyA9IG9wcG9uZW50T2JqZWN0c1NvcnRlZFsyXS5kb3RzO1xuICAgICAgICBjb25zb2xlLmxvZyhgQmFkIGRvdHM6ICR7b3Bwb25lbnRMYXN0RG90c31gKTtcbiAgICAgICAgb3Bwb25lbnRTZWNvbmRUb0xhc3REb3RzID0gb3Bwb25lbnRPYmplY3RzU29ydGVkWzFdLmRvdHM7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTZWNvbmQgYmFkIGRvdHM6ICR7b3Bwb25lbnRTZWNvbmRUb0xhc3REb3RzfWApO1xuICAgIH1cbiAgICBsZXQgb3Bwb25lbnRIYW5kVG9LZWVwID0gb3Bwb25lbnRIYW5kLmZpbHRlcihpID0+IChpICE9PSBvcHBvbmVudExhc3REb3RzICYmIGkgIT09IG9wcG9uZW50U2Vjb25kVG9MYXN0RG90cykpO1xuICAgIC8vIGlmIHdlIHJlbW92ZSAzIGRpY2VcbiAgICAvLyBob3dNYW55RGljZVRvUmVSb2xsID0gNiAtIDMgPSAzXG4gICAgLy8gaSA9IDAsIGkgPSAxLCBpID0gMiwgcnVucyB0aHJlZSB0aW1lc1xuICAgIHdoaWxlIChvcHBvbmVudEhhbmRUb0tlZXAubGVuZ3RoIDwgNikge1xuICAgICAgICBsZXQgbmV3T3Bwb25lbnRSb2xsID0gcm9sbDFkNCgpO1xuICAgICAgICBvcHBvbmVudEhhbmRUb0tlZXAucHVzaChuZXdPcHBvbmVudFJvbGwpO1xuICAgIH1cbiAgICBvcHBvbmVudEhhbmQgPSBvcHBvbmVudEhhbmRUb0tlZXA7XG4gICAgY29uc29sZS5sb2coYE5ldyBPcHBvbmVudCBIYW5kOiAke29wcG9uZW50SGFuZH1gKTtcbiAgICAvLyBiZWxvdyB0aGF0LCBhIHN1Ym1pdC9yZXJvbGxcbiAgICAvLyBwbGF5ZXJIYW5kIGlzIGVtcHRpZWRcbiAgICAvLyBub24tc2VsZWN0ZWQgZGljZSBnZXQgYWRkZWQgYmFjayB0byBwbGF5ZXJIYW5kXG4gICAgLy8gZm9yIHRoZSBpbmRleGVzIG9mIHRoZSBzZWxlY3RlZCBkaWUsIHdoYXQgaXMgYWRkZWQgdG8gcGxheWVySGFuZCBpcyB0aGUgcmV0dXJuIG9mIHJlUm9sbERpZVxuICAgIHBsYXllclJlcm9sbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCIke2krMX1cImApO1xuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAvLyAxLCAyLCBbM10sIFs0XSwgMSwgMlxuICAgICAgICAgICAgICAgIHBsYXllckhhbmRbaV0ucmVSb2xsRmxhZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGogPSAwO1xuICAgICAgICB3aGlsZSAoaiA8IDYpICB7XG4gICAgICAgICAgICAvLyAxLCAyLCBbM10sIFs0XSwgMSwgMlxuICAgICAgICAgICAgaWYgKHBsYXllckhhbmRbal0ucmVSb2xsRmxhZyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcGxheWVySGFuZC5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0RpZSA9IHtyZXN1bHQ6IHJvbGwxZDQoKSwgcmVSb2xsRmxhZzogZmFsc2V9O1xuICAgICAgICAgICAgICAgIHBsYXllckhhbmQucHVzaChuZXdEaWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYmlkUGhhc2Uob3Bwb25lbnROYW1lLCBsaW5lcyk7XG4gICAgfSk7XG59XG4vLyBiaWRkaW5nIHBoYXNlXG5mdW5jdGlvbiBiaWRQaGFzZShvcHBvbmVudE5hbWUsIGxpbmVzKSB7XG4vLyB3cml0ZXMgYSBtZXNzYWdlLiB5b3UgcmVyb2xsZWQgZGljZS4gYWZ0ZXIgcmUtcm9sbHMsIHlvdXIgbmV3IGhhbmQgaXM6XG4gICAgbGV0IHJlUm9sbE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaWYgKGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlID09IDApIHtcbiAgICAgICAgd2hpbGUgKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIHsgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQobWFpbl93aW5kb3cuZmlyc3RDaGlsZCkgfTtcbiAgICAgICAgcmVSb2xsTWVzc2FnZS50ZXh0Q29udGVudCA9IGBZb3UgcmUtcm9sbCBzb21lIGRpY2UuYFxuICAgICAgICBsZXQgcmVSb2xsTWVzc2FnZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHJlUm9sbE1lc3NhZ2UyLnRleHRDb250ZW50ID0gYFlvdXIgbmV3IGhhbmQgaXM6ICR7cGxheWVySGFuZFswXS5yZXN1bHR9LCAke3BsYXllckhhbmRbMV0ucmVzdWx0fSwgJHtwbGF5ZXJIYW5kWzJdLnJlc3VsdH0sICR7cGxheWVySGFuZFszXS5yZXN1bHR9LCAke3BsYXllckhhbmRbNF0ucmVzdWx0fSwgJHtwbGF5ZXJIYW5kWzVdLnJlc3VsdH0uIFRpbWUgZm9yIHRoZSBmaXJzdCBibHVmZmluZyBwaGFzZS5gO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChyZVJvbGxNZXNzYWdlKTtcbiAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQocmVSb2xsTWVzc2FnZTIpO1xuICAgICAgICBwbGF5ZXJCbHVmZnMob3Bwb25lbnROYW1lLCBsaW5lcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVSb2xsTWVzc2FnZS50ZXh0Q29udGVudCA9IGBZb3VyIGhhbmQgaXM6ICR7cGxheWVySGFuZFswXS5yZXN1bHR9LCAke3BsYXllckhhbmRbMV0ucmVzdWx0fSwgJHtwbGF5ZXJIYW5kWzJdLnJlc3VsdH0sICR7cGxheWVySGFuZFszXS5yZXN1bHR9LCAke3BsYXllckhhbmRbNF0ucmVzdWx0fSwgJHtwbGF5ZXJIYW5kWzVdLnJlc3VsdH0uIERvIHlvdSB3YW50IHRvIGJsdWZmLCBvciBhY2N1c2UgdGhlIG9wcG9uZW50P2A7XG4gICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKHJlUm9sbE1lc3NhZ2UpO1xuICAgICAgICAvLyBkZWNpZGUgd2hhdCB0byBkbyBoZXJlIVxuICAgICAgICBsZXQgd2hhdFRvRG9CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKHdoYXRUb0RvQnV0dG9ucyk7XG4gICAgICAgIGxldCBibHVmZkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBibHVmZkJ1dHRvbi50ZXh0Q29udGVudCA9ICdCbHVmZic7XG4gICAgICAgIGJsdWZmQnV0dG9uLnN0eWxlLm1hcmdpblJpZ2h0ID0gJzVweCc7XG4gICAgICAgIHdoYXRUb0RvQnV0dG9ucy5hcHBlbmRDaGlsZChibHVmZkJ1dHRvbik7XG4gICAgICAgIGxldCBhY2N1c2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWNjdXNlQnV0dG9uLnRleHRDb250ZW50ID0gJ0FjY3VzZSc7XG4gICAgICAgIHdoYXRUb0RvQnV0dG9ucy5hcHBlbmRDaGlsZChhY2N1c2VCdXR0b24pO1xuICAgICAgICBibHVmZkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1haW5fd2luZG93LnJlbW92ZUNoaWxkKHdoYXRUb0RvQnV0dG9ucyk7XG4gICAgICAgICAgICBwbGF5ZXJCbHVmZnMob3Bwb25lbnROYW1lLCBsaW5lcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBhY2N1c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZCh3aGF0VG9Eb0J1dHRvbnMpO1xuICAgICAgICAgICAgYWNjdXNhdGlvbi5hY2N1c2VyID0gJ1BsYXllcic7XG4gICAgICAgICAgICBhY2N1c2F0aW9uLm51bWJlck9mRGljZSA9IGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlO1xuICAgICAgICAgICAgYWNjdXNhdGlvbi5kb3RzID0gY3VycmVudEJpZC5kb3RzO1xuICAgICAgICAgICAgbGV0IGdhbWVSZXN1bHQgPSBjYWxsT3V0KCk7XG4gICAgICAgICAgICBnYW1lRW5kKGdhbWVSZXN1bHQsIG9wcG9uZW50TmFtZSwgbGluZXMpOyAgICBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gcGxheWVyQmx1ZmZzKG9wcG9uZW50TmFtZSwgbGluZXMpIHtcbiAgICAvLyBjcmVhdGVzIGEgZHJvcGRvd24gZm9ybSB0byBibHVmZjogXCJJIGhhdmUgWzEvMi8zLzRdIG9mIFsxLzIvMy80XVwiXG4gICAgbGV0IGJsdWZmRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChibHVmZkZvcm0pO1xuICAgIC8vIC0tLSBudW1iZXIgb2YgZGljZSAtLS1cbiAgICBsZXQgbnVtYmVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG51bWJlckxhYmVsLnRleHRDb250ZW50ID0gYEkgaGF2ZSB0aGlzIG1hbnkuLi5gO1xuICAgIG51bWJlckxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ251bWJlck9mRGljZScpO1xuICAgIGJsdWZmRm9ybS5hcHBlbmRDaGlsZChudW1iZXJMYWJlbCk7XG4gICAgbGV0IG51bWJlclNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIG51bWJlclNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbnVtYmVyT2ZEaWNlJyk7XG4gICAgbnVtYmVyU2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbnVtYmVyT2ZEaWNlJyk7XG4gICAgYmx1ZmZGb3JtLmFwcGVuZENoaWxkKG51bWJlclNlbGVjdCk7XG4gICAgLy8gb3B0aW9ucyBmb3IgbnVtYmVyIG9mIGRpY2VcbiAgICAvLyBkeW5hbWljYWxseSBjYWxjdWxhdGUgaG93IG1hbnkgb3B0aW9ucyBhcmUgYXZhaWxhYmxlXG4gICAgLy8gY3VycmVudEJpZC5udW1iZXJPZkRpY2UgPSAyXG4gICAgLy8gY3VycmVudEJpZC5kb3RzID0gMlxuICAgIC8vIG9wdGlvbnMgc2hvdWxkIGJlOiAyLCAzLCA0LCA1LCA2XG4gICAgLy8gbnVtYmVyT2ZPcHRpb25zID0gNyAtIGN1cnJlbnRCaWQubnVtYmVyXG4gICAgLy8gc3RhcnRlcihpKSA9IGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlXG4gICAgaWYgKGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlICE9PSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBjdXJyZW50QmlkLm51bWJlck9mRGljZTsgaSA8PSA2OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGk7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGkpO1xuICAgICAgICAgICAgbnVtYmVyU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA2OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGk7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGkpO1xuICAgICAgICAgICAgbnVtYmVyU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gLS0tIHdoaWNoIGRvdHMgLS0tXG4gICAgbGV0IGRvdHNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZG90c0xhYmVsLnRleHRDb250ZW50ID0gYG9mIHRoaXMgZGljZS4uLmA7XG4gICAgZG90c0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RvdHMnKTtcbiAgICBibHVmZkZvcm0uYXBwZW5kQ2hpbGQoZG90c0xhYmVsKTtcbiAgICBsZXQgZG90c1NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGRvdHNTZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ2RvdHMnKTtcbiAgICBkb3RzU2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZG90cycpO1xuICAgIGJsdWZmRm9ybS5hcHBlbmRDaGlsZChkb3RzU2VsZWN0KTtcbiAgICAvLyBvcHRpb25zIGZvciBkb3RzXG4gICAgLy8gZHluYW1pY2FsbHkgY2FsY3VsYXRlIG51bWJlciBvZiBkb3RzXG4gICAgLy8gdGhpcyBpcyBvbmx5IGEgcHJvYmxlbSBpZiB5b3UncmUgYmV0dGluZyB0aGUgc2FtZSBudW1iZXIgb2YgZGljZSBhcyB0aGUgY3VycmVudCBiaWRcbiAgICAvLyBzbyB0aGUgY2hlY2sgc2hvdWxkIG5vdCBnbyBoZXJlLCBidXQgYXQgc3VibWl0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBgJHtpKzF9YDtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpKzEpO1xuICAgICAgICBkb3RzU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuICAgIC8vIGZpbmFsIHN1Ym1pdFxuICAgIGxldCBibHVmZlN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgYmx1ZmZTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGJsdWZmU3VibWl0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQmx1ZmYhJyk7XG4gICAgYmx1ZmZGb3JtLmFwcGVuZENoaWxkKGJsdWZmU3VibWl0KTtcbi8vIG9uIHN1Ym1pdCwgY2FsbHMgdGhlIG9wcG9uZW50UmVzcG9uc2VcbiAgICBibHVmZkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgLy8gY2hlY2sgZm9yIGRvdHMgZ29lcyBoZXJlXG4gICAgICAgIGlmIChudW1iZXJTZWxlY3QudmFsdWUgPT0gY3VycmVudEJpZC5udW1iZXJPZkRpY2UpIHtcbiAgICAgICAgICAgIGlmIChkb3RzU2VsZWN0LnZhbHVlIDw9IGN1cnJlbnRCaWQuZG90cykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdzdHlsZScsICdjb2xvcjp5ZWxsb3cnKTtcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBgW1lvdSBjYW4gb25seSBiaWQgaGlnaGVyIHRoYW4geW91ciBvcHBvbmVudCFdYDtcbiAgICAgICAgICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCaWQgPSB7IHBsYXllcjogJ3BsYXllcicsIG51bWJlck9mRGljZTogbnVtYmVyU2VsZWN0LnZhbHVlLCBkb3RzOiBkb3RzU2VsZWN0LnZhbHVlIH07XG4gICAgICAgICAgICAgICAgd2hpbGUobWFpbl93aW5kb3cuZmlyc3RDaGlsZCkge21haW5fd2luZG93LnJlbW92ZUNoaWxkKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpfTtcbiAgICAgICAgICAgICAgICBsZXQgYmlkTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBiaWRNZXNzYWdlLnRleHRDb250ZW50ID0gYFlvdSBiaWQ6IFwiSSBoYXZlICR7Y3VycmVudEJpZC5udW1iZXJPZkRpY2V9IG9mICR7Y3VycmVudEJpZC5kb3RzfSBkb3RzXCIuYDtcbiAgICAgICAgICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChiaWRNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBvcHBvbmVudFJlc3BvbnNlKG9wcG9uZW50TmFtZSwgbGluZXMpOyAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjdXJyZW50QmlkID0geyBwbGF5ZXI6ICdwbGF5ZXInLCBudW1iZXJPZkRpY2U6IG51bWJlclNlbGVjdC52YWx1ZSwgZG90czogZG90c1NlbGVjdC52YWx1ZSB9O1xuICAgICAgICAgICAgd2hpbGUobWFpbl93aW5kb3cuZmlyc3RDaGlsZCkge21haW5fd2luZG93LnJlbW92ZUNoaWxkKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpfTtcbiAgICAgICAgICAgIGxldCBiaWRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgYmlkTWVzc2FnZS50ZXh0Q29udGVudCA9IGBZb3UgYmlkOiBcIkkgaGF2ZSAke2N1cnJlbnRCaWQubnVtYmVyT2ZEaWNlfSBvZiAke2N1cnJlbnRCaWQuZG90c30gZG90c1wiLmA7XG4gICAgICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChiaWRNZXNzYWdlKTtcbiAgICAgICAgICAgIG9wcG9uZW50UmVzcG9uc2Uob3Bwb25lbnROYW1lLCBsaW5lcyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIDUwLTUwIGZ1bmN0aW9uXG5mdW5jdGlvbiBmaWZ0eUZpZnR5KCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMikgKyAxKTtcbn1cbmZ1bmN0aW9uIG9uZVRoaXJkKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMykgKyAxKTtcbn1cbi8vIG9wcG9uZW50IHJlc3BvbnNlXG5mdW5jdGlvbiBvcHBvbmVudFJlc3BvbnNlKG9wcG9uZW50TmFtZSwgbGluZXMpIHtcbiAgICAvLyBzZXQgY3VycmVudEJpZFxuICAgIC8vIGlmIGN1cnJlbnRCaWQubnVtYmVyT2ZkaWNlID4gMiwgb3Bwb25lbnQgY2FsbHMgYmx1ZmZcbiAgICAvLyBmaWxsIHRoZSBhY2N1c2F0aW9uIG9iamVjdCB3aXRoICdvcHBvbmVudCcsIGFuZCAnY3VycmVudEJpZCdcbiAgICBpZiAoY3VycmVudEJpZC5udW1iZXJPZkRpY2UgPiAyKSB7XG4gICAgICAgIGFjY3VzYXRpb24gPSB7IGFjY3VzZXI6ICdvcHBvbmVudCcsIG51bWJlck9mRGljZTogY3VycmVudEJpZC5udW1iZXJPZkRpY2UsIGRvdHM6IGN1cnJlbnRCaWQuZG90cyB9O1xuICAgICAgICBsZXQgYWNjdXNlTGluZUVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBhY2N1c2VMaW5lRW50cnkudGV4dENvbnRlbnQgPSBgJHtvcHBvbmVudE5hbWV9OiBcIiR7bGluZXMuYWNjdXNlTGluZX1cIi5gO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChhY2N1c2VMaW5lRW50cnkpO1xuICAgICAgICBsZXQgYWNjdXNlQ29udGludWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWNjdXNlQ29udGludWVCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGludWUnO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChhY2N1c2VDb250aW51ZUJ1dHRvbik7XG4gICAgICAgIGFjY3VzZUNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQoYWNjdXNlQ29udGludWVCdXR0b24pO1xuICAgICAgICAgICAgbGV0IGdhbWVSZXN1bHQgPSBjYWxsT3V0KCk7XG4gICAgICAgICAgICBnYW1lRW5kKGdhbWVSZXN1bHQsIG9wcG9uZW50TmFtZSwgbGluZXMpOyAgICBcbiAgICAgICAgfSk7XG4gICAgLy8gaWYgY3VycmVudEJpZC5udW1iZXJPZmRpY2UgPTJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlID09IDIpIHtcbiAgICAvLyB0aGVuIDUwJSB0byBjYWxsIG91dCBhIGJsdWZmIGFueXdheVxuICAgICAgICBpZiAoZmlmdHlGaWZ0eSgpID09IDIpIHtcbiAgICAgICAgICAgIGFjY3VzYXRpb24gPSB7IGFjY3VzZXI6ICdvcHBvbmVudCcsIG51bWJlck9mRGljZTogY3VycmVudEJpZC5udW1iZXJPZkRpY2UsIGRvdHM6IGN1cnJlbnRCaWQuZG90cyB9O1xuICAgICAgICAgICAgbGV0IGFjY3VzZUxpbmVFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGFjY3VzZUxpbmVFbnRyeS50ZXh0Q29udGVudCA9IGAke29wcG9uZW50TmFtZX06IFwiJHtsaW5lcy5hY2N1c2VMaW5lfVwiLmA7XG4gICAgICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChhY2N1c2VMaW5lRW50cnkpO1xuICAgICAgICAgICAgbGV0IGFjY3VzZUNvbnRpbnVlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBhY2N1c2VDb250aW51ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250aW51ZSc7XG4gICAgICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChhY2N1c2VDb250aW51ZUJ1dHRvbik7XG4gICAgICAgICAgICBhY2N1c2VDb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZChhY2N1c2VDb250aW51ZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgbGV0IGdhbWVSZXN1bHQgPSBjYWxsT3V0KCk7XG4gICAgICAgICAgICAgICAgZ2FtZUVuZChnYW1lUmVzdWx0LCBvcHBvbmVudE5hbWUsIGxpbmVzKTsgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgLy8gaWYgdGhhdCBkb2Vzbid0IHRyaWdnZXIsIHRoZSBvcHBvbmVudCBiaWRzICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3Bwb25lbnRCaWQob3Bwb25lbnROYW1lLCBsaW5lcyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBvcHBvbmVudEJpZChvcHBvbmVudE5hbWUsIGxpbmVzKTtcbiAgICB9XG59XG5mdW5jdGlvbiBvcHBvbmVudEJpZChvcHBvbmVudE5hbWUsIGxpbmVzKSB7XG4gICAgLy8gb3Bwb25lbnQgbG9va3MgYXQgb3Bwb25lbnRIYW5kLCBpZGVudGlmeWluZyBpZiB0aGVyZSBhcmUgYW55IHJlcGVhdHNcbiAgICBsZXQgYWxsT3Bwb25lbnQxcyA9IG9wcG9uZW50SGFuZC5maWx0ZXIoaSA9PiBpID09IDEpO1xuICAgIGxldCBhbGxPcHBvbmVudDJzID0gb3Bwb25lbnRIYW5kLmZpbHRlcihpID0+IGkgPT0gMik7XG4gICAgbGV0IGFsbE9wcG9uZW50M3MgPSBvcHBvbmVudEhhbmQuZmlsdGVyKGkgPT4gaSA9PSAzKTtcbiAgICBsZXQgYWxsT3Bwb25lbnQ0cyA9IG9wcG9uZW50SGFuZC5maWx0ZXIoaSA9PiBpID09IDQpO1xuICAgIGxldCBvcHBvbmVudDFzT2JqZWN0ID0geyBudW1iZXI6IGFsbE9wcG9uZW50MXMubGVuZ3RoLCBkb3RzOiAxIH07XG4gICAgbGV0IG9wcG9uZW50MnNPYmplY3QgPSB7IG51bWJlcjogYWxsT3Bwb25lbnQycy5sZW5ndGgsIGRvdHM6IDIgfTtcbiAgICBsZXQgb3Bwb25lbnQzc09iamVjdCA9IHsgbnVtYmVyOiBhbGxPcHBvbmVudDNzLmxlbmd0aCwgZG90czogMyB9O1xuICAgIGxldCBvcHBvbmVudDRzT2JqZWN0ID0geyBudW1iZXI6IGFsbE9wcG9uZW50NHMubGVuZ3RoLCBkb3RzOiA0IH07XG4gICAgbGV0IG9wcG9uZW50T2JqZWN0cyA9IFtvcHBvbmVudDFzT2JqZWN0LCBvcHBvbmVudDJzT2JqZWN0LCBvcHBvbmVudDNzT2JqZWN0LCBvcHBvbmVudDRzT2JqZWN0XTtcbiAgICBsZXQgb3Bwb25lbnRPYmplY3RzU29ydGVkID0gb3Bwb25lbnRPYmplY3RzLnNvcnQoKGEsIGIpID0+IChhLm51bWJlciA+IGIubnVtYmVyKSA/IC0xIDogMSk7XG4gICAgY29uc29sZS5sb2cob3Bwb25lbnRPYmplY3RzU29ydGVkKTtcbiAgICAvLyBuZWVkcyB0byBjaGVjayBjdXJyZW50QmlkLCBvcHBvbmVudCdzIGJpZCBjYW5ub3QgYmUgbG93ZXIgbnVtYmVyIG9mIGRpY2UuIGNhbiBiZSBlcXVhbCwgYnV0IHRoZW4gdGhlIGRvdHMgc2hvdWxkIGJlIGhpZ2hlclxuICAgIC8vIGluaXRpYWxpemUgdGVtcG9yYXJ5IG9wcG9uZW50QmlkIHZhciBmb3IgY2FsY3VsYXRpb24gcHVycG9zZXNcbiAgICBsZXQgdGVtcG9yYXJ5T3Bwb25lbnRCaWQgPSB7cGxheWVyOiAnb3Bwb25lbnQnLCBudW1iZXJPZkRpY2U6IDAsIGRvdHM6IDB9O1xuICAgIC8vIGZpcnN0LCB3ZSBjYWxjdWxhdGUgd2hhdCB0aGUgb3Bwb25lbnQgd291bGQgaGF2ZSBiZXQgaW4gYSB2YWN1dW0gXG4gICAgLy8gaXQncyBhbHdheXMgdGhlIHNhbWUgZG90c1xuICAgIHRlbXBvcmFyeU9wcG9uZW50QmlkLmRvdHMgPSBvcHBvbmVudE9iamVjdHNTb3J0ZWRbMF0uZG90cztcbiAgICAvLyA1MCUgaXQncyBudW1iZXJPZkRpY2UgdGhleSBoYXZlIGFuZCA1MCUgbnVtYmVyb2ZEaWNlKzEgW2NoYW5nZWQgdG8gMzMlIHRvIGdvIC0xLCArMSBvciBlcXVhbF1cbiAgICBsZXQgY2hhbmNlID0gb25lVGhpcmQoKTtcbiAgICBpZiAoY2hhbmNlID09IDEpIHtcbiAgICAgICAgdGVtcG9yYXJ5T3Bwb25lbnRCaWQubnVtYmVyT2ZEaWNlID0gb3Bwb25lbnRPYmplY3RzU29ydGVkWzBdLm51bWJlcjtcbiAgICB9IGVsc2UgaWYgKGNoYW5jZSA9PSAyKSB7XG4gICAgICAgIHRlbXBvcmFyeU9wcG9uZW50QmlkLm51bWJlck9mRGljZSA9IG9wcG9uZW50T2JqZWN0c1NvcnRlZFswXS5udW1iZXIgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBvcmFyeU9wcG9uZW50QmlkLm51bWJlck9mRGljZSA9IG9wcG9uZW50T2JqZWN0c1NvcnRlZFswXS5udW1iZXIgLTE7XG4gICAgfVxuICAgIC8vIG5vdyB3ZSBjaGVjayB0aGUgb3Bwb25lbnQncyB3YW50ZWQgYmlkIHZlcnN1cyBpbGxlZ2FsIHNjZW5hcmlvc1xuICAgIGlmIChjdXJyZW50QmlkLm51bWJlck9mRGljZSA+IHRlbXBvcmFyeU9wcG9uZW50QmlkLm51bWJlck9mRGljZSkge1xuICAgICAgICAvLyBjaGVjayBpZiBkb3RzIGFyZSBoaWdoZXJcbiAgICAgICAgaWYgKHRlbXBvcmFyeU9wcG9uZW50QmlkLmRvdHMgPiBjdXJyZW50QmlkLmRvdHMpIHtcbiAgICAgICAgICAgIC8vIGlmIGkgYmlkIDMgZGljZSBvZiAxIGRvdHMgYW5kIG9wcG9uZW50IHdhbnRzIHRvIGJpZCAyIGRpY2Ugb2YgMiBkb3RzXG4gICAgICAgICAgICAvLyB0aGlzIHRyaWdnZXJzLCBudW1iZXIgb2YgZGljZSBJUyBoaWdoZXJcbiAgICAgICAgICAgIC8vIG9wcG9uZW50IHNob3VsZCBiaWQgMyBkaWNlIG9mIDIgZG90c1xuICAgICAgICAgICAgdGVtcG9yYXJ5T3Bwb25lbnRCaWQubnVtYmVyT2ZEaWNlID0gY3VycmVudEJpZC5udW1iZXJPZkRpY2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiBpIGJpZCAzIGRpY2Ugb2YgNCBkb3RzIGFuZCBvcHBvbmVudCB3YW50cyB0byBiaWQgMiBkaWNlIG9mIDIgZG90c1xuICAgICAgICAgICAgLy8gaWYgb3Bwb25lbnQncyBuZXh0IGhpZ2hlc3QgZG90cyA+IGN1cnJlbnRCaWQuZG90c1xuICAgICAgICAgICAgaWYgKG9wcG9uZW50T2JqZWN0c1NvcnRlZFsxXS5kb3RzID4gY3VycmVudEJpZC5kb3RzKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlbiA1MC01MDogc2FtZSBudW1iZXJPZkRpY2UgYnV0IHdpdGggc2Vjb25kIGhpZ2hlc3QgZG90c1xuICAgICAgICAgICAgICAgIC8vIGFuZCA0IGRpY2Ugb2YgMiBkb3RzXG4gICAgICAgICAgICAgICAgaWYgKGZpZnR5RmlmdHkoKSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBvcmFyeU9wcG9uZW50QmlkLmRvdHMgPSBvcHBvbmVudE9iamVjdHNTb3J0ZWRbMV0uZG90cztcbiAgICAgICAgICAgICAgICAgICAgdGVtcG9yYXJ5T3Bwb25lbnRCaWQubnVtYmVyT2ZEaWNlID0gY3VycmVudEJpZC5udW1iZXJPZkRpY2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcG9yYXJ5T3Bwb25lbnRCaWQubnVtYmVyT2ZEaWNlID0gY3VycmVudEJpZC5udW1iZXJPZkRpY2UgKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgbm90LCB0aGVuIGp1c3QgNCBkaWNlIG9mIDIgZG90c1xuICAgICAgICAgICAgICAgIHRlbXBvcmFyeU9wcG9uZW50QmlkLm51bWJlck9mRGljZSA9IGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY3VycmVudEJpZC5udW1iZXJPZkRpY2UgPT0gdGVtcG9yYXJ5T3Bwb25lbnRCaWQubnVtYmVyT2ZEaWNlKSB7XG4gICAgICAgIC8vIHNvIGlmIG15IGJldCBpcyAyIGRpY2UgMiBkb3RzIGFuZCBvcHBvbmVudCB3YW50cyB0byBiZXQgMiBkaWNlIDMgZG90c1xuICAgICAgICAvLyB0aGVuIGl0cyBmaW5lXG4gICAgICAgIGlmICh0ZW1wb3JhcnlPcHBvbmVudEJpZC5kb3RzIDw9IGN1cnJlbnRCaWQuZG90cykge1xuICAgICAgICAgICAgLy8gYnV0IGlmIG9wcG9uZW50IHdhbnRzIHRvIGJpZCAyIGRpY2UgMiBkb3RzIG9yIDIgZGljZSAxIGRvdFxuICAgICAgICAgICAgdGVtcG9yYXJ5T3Bwb25lbnRCaWQubnVtYmVyT2ZEaWNlID0gY3VycmVudEJpZC5udW1iZXJPZkRpY2UgKyAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIG5vdyBtYWtlIHRoZSBvcHBvbmVudEJpZCB0aGUgY3VycmVudEJpZFxuICAgIGN1cnJlbnRCaWQgPSB0ZW1wb3JhcnlPcHBvbmVudEJpZDtcbiAgICAvLyB0aGVuIHRoZXkgc2F5IG9uZSBvZiB0aGVpciAnYmV0dGluZ2xpbmVzJyAoYWRkIHRoYXQpIFxuICAgIGxldCBibHVmZkxpbmUxRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYmx1ZmZMaW5lMUVudHJ5LnRleHRDb250ZW50ID0gYCR7b3Bwb25lbnROYW1lfTogXCIke2xpbmVzLmJsdWZmTGluZX1cIi5gO1xuICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGJsdWZmTGluZTFFbnRyeSk7XG4gICAgbGV0IGJsdWZmTGluZTJFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBibHVmZkxpbmUyRW50cnkudGV4dENvbnRlbnQgPSBgXCJJIHJvbGxlZCAke2N1cnJlbnRCaWQubnVtYmVyT2ZEaWNlfSBkaWNlIHdpdGggJHtjdXJyZW50QmlkLmRvdHN9IGRvdHMuXCJgOyAgICBcbiAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChibHVmZkxpbmUyRW50cnkpO1xuICAgIC8vIHJlLWJpZCwgYnV0IGNhbiBvbmx5IGRvIGhpZ2hlciBub3chXG4gICAgYmlkUGhhc2Uob3Bwb25lbnROYW1lLCBsaW5lcyk7XG4gICAgLy8gdGhvdWdodHMgb24gcmUtYmlkZGluZzogcmV1c2UgdGhlIHNhbWUgZnVuY3Rpb24gZmxvd1xuICAgIC8vIGludHJvZHVjZSBhIGxpbWl0IG9uIHdoYXQgdGhlIHBsYXllciBjYW4gYmlkXG4gICAgLy8gYnV0IHRoZSBsaW1pdHMgZG9uJ3Qgd29yayBpZiBjdXJyZW50QmlkIGlzIGVtcHR5XG59XG4vLyBjYWxsaW5nIG91dCBhIGJsdWZmXG5mdW5jdGlvbiBjYWxsT3V0KCkge1xuICAgIC8vIGlmIGFjY3VzYXRpb24uYWNjdXNlciA9IHBsYXllciwgY2hlY2tzIG9wcG9uZW50SGFuZCwgaWYgYWNjdXNhdGlvbi5hY2N1c2VyID0gb3Bwb25lbnQsIGNoZWNrcyBwbGF5ZXJIYW5kXG4gICAgLy8gdGhlc2UgYXJlIHNldCB1cCBkaWZmZXJlbnRseSwgc28gZGlmZmVyZW50IGNhbGN1bGF0aW9uc1xuICAgIGlmIChhY2N1c2F0aW9uLmFjY3VzZXIgPT0gJ29wcG9uZW50Jykge1xuICAgICAgICAvLyBwbGF5ZXJIYW5kID0gW2RpZTEsIC4uLl1cbiAgICAgICAgLy8gZGllMSA9IHtyZXN1bHQ6IDAsIC4uLn1cbiAgICAgICAgbGV0IGFsbENvcnJlY3REb3RzID0gcGxheWVySGFuZC5maWx0ZXIoaSA9PiAoaS5yZXN1bHQgPT0gYWNjdXNhdGlvbi5kb3RzKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBTEwgQ09SUkVDVCBET1RTOiAke2FsbENvcnJlY3REb3RzfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgQUNDVVNBVElPTiBET1RTOiAke2FjY3VzYXRpb24uZG90c31gKTtcbiAgICAgICAgY29uc29sZS5sb2coYEFDQ1VTQVRJT04gTlVNQkVSIE9GIERJQ0U6ICR7YWNjdXNhdGlvbi5udW1iZXJPZkRpY2V9YCk7XG4gICAgICAgIGlmIChhbGxDb3JyZWN0RG90cy5sZW5ndGggPj0gYWNjdXNhdGlvbi5udW1iZXJPZkRpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiAncGxheWVyV2lucyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ29wcG9uZW50V2lucyc7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBvcHBvbmVudEhhbmQgPSBbMSwgMywgNCwgMSwgMywgMl1cbiAgICAgICAgbGV0IGFsbENvcnJlY3REb3RzID0gb3Bwb25lbnRIYW5kLmZpbHRlcihpID0+IChpID09IGFjY3VzYXRpb24uZG90cykpO1xuICAgICAgICBjb25zb2xlLmxvZyhgQUxMIENPUlJFQ1QgRE9UUzogJHthbGxDb3JyZWN0RG90c31gKTtcbiAgICAgICAgY29uc29sZS5sb2coYEFDQ1VTQVRJT04gRE9UUzogJHthY2N1c2F0aW9uLmRvdHN9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBQ0NVU0FUSU9OIE5VTUJFUiBPRiBESUNFOiAke2FjY3VzYXRpb24ubnVtYmVyT2ZEaWNlfWApO1xuICAgICAgICBpZiAoYWxsQ29ycmVjdERvdHMubGVuZ3RoID49IGFjY3VzYXRpb24ubnVtYmVyT2ZEaWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ29wcG9uZW50V2lucyc7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdwbGF5ZXJXaW5zJztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjaGVja3MgdGhhdCBwbGF5ZXIvb3Bwb25lbnRIYW5kLmluY2x1ZGVzIHRoZSBpbnRlZ2VyIGVxdWFsaW5nIHRvIHRoZSAnZG90cydcbiAgICAvLyBsb29wcyB0aHJvdWdoIHRoZSBjaGVjayBhIG51bWJlciBvZiB0aW1lcyA9IG51bWJlck9mRGljZVxuICAgIC8vIGlmIGFsbCB0cnVlLCBhY2N1c2F0aW9uLmFjY3VzZXIgaXMgdGhlIGxvc2VyXG4gICAgLy8gcmV0dXJucyBhIHdpbm5lclxufVxuLy8gZW5kaW5nIHRoZSBnYW1lXG5mdW5jdGlvbiBnYW1lRW5kKHJlc3VsdCwgb3Bwb25lbnROYW1lLCBsaW5lcykge1xuICAgIC8vIGEgbWVzc2FnZSwgd2hvIGlzIGJlaW5nIGFjY3VzZWQgYW5kIHdoYXQgYXJlIHRoZXkgYmVpbmcgYWNjdXNlZCBvZlxuICAgIGxldCBnYW1lRW5kRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaWYgKGFjY3VzYXRpb24uYWNjdXNlciA9PSAnUGxheWVyJykge1xuICAgICAgICBnYW1lRW5kRW50cnkudGV4dENvbnRlbnQgPSBgQWNjdXNhdGlvbiEgWW91IGFuZCAke29wcG9uZW50TmFtZX0gY2hlY2sgdGhlIGJsdWZmLiBZb3VyIG9wcG9uZW50IGlzIHRoZSBibHVmZmVyLiBUaGV5IHNhaWQgdGhleSBoYXZlICR7YWNjdXNhdGlvbi5udW1iZXJPZkRpY2V9IG9mICR7YWNjdXNhdGlvbi5kb3RzfSBkb3RzLiBUaW1lIHRvIHNlZSBpZiB0aGV5J3JlIGJsdWZmaW5nLmBcbiAgICB9IGVsc2Uge1xuICAgICAgICBnYW1lRW5kRW50cnkudGV4dENvbnRlbnQgPSBgQWNjdXNhdGlvbiEgWW91IGFuZCAke29wcG9uZW50TmFtZX0gY2hlY2sgdGhlIGJsdWZmLiBZb3UgYXJlIHRoZSBibHVmZmVyLiBZb3Ugc2FpZCB0aGF0IHlvdSd2ZSBnb3QgJHthY2N1c2F0aW9uLm51bWJlck9mRGljZX0gb2YgJHthY2N1c2F0aW9uLmRvdHN9IGRvdHMuICR7b3Bwb25lbnROYW1lfSBjaGVja3MgaWYgeW91J3JlIGJsdWZmaW5nLmBcbiAgICB9XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoZ2FtZUVuZEVudHJ5KTtcbiAgICBsZXQgY29udGludWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250aW51ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMZXQgdXMgZmluZCBvdXQnXG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoY29udGludWVCdXR0b24pO1xuICAgIGNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZChjb250aW51ZUJ1dHRvbik7XG4gICAgICAgIGdhbWVFbmQyKHJlc3VsdCwgb3Bwb25lbnROYW1lLCBsaW5lcyk7XG4gICAgfSlcbn1cbmZ1bmN0aW9uIGdhbWVFbmQyKHJlc3VsdCwgb3Bwb25lbnROYW1lLCBsaW5lcykge1xuICAgIGxldCBvcHBvbmVudEVuZExpbmVFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpZiAocmVzdWx0ID09ICdwbGF5ZXJXaW5zJykge1xuICAgICAgICBsZXQgZ2FtZVJlc3VsdEVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBnYW1lUmVzdWx0RW50cnkudGV4dENvbnRlbnQgPSAnQW5kLi4uLiBZb3Ugd2luISc7XG4gICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGdhbWVSZXN1bHRFbnRyeSk7XG4gICAgICAgIG9wcG9uZW50RW5kTGluZUVudHJ5LnRleHRDb250ZW50ID0gYCR7b3Bwb25lbnROYW1lfTogXCIke2xpbmVzLmxvc2VMaW5lfS5cImBcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZ2FtZVJlc3VsdEVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBnYW1lUmVzdWx0RW50cnkudGV4dENvbnRlbnQgPSBgQW5kLi4uLiAke29wcG9uZW50TmFtZX0gd2lucyFgO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChnYW1lUmVzdWx0RW50cnkpO1xuICAgICAgICBvcHBvbmVudEVuZExpbmVFbnRyeS50ZXh0Q29udGVudCA9IGAke29wcG9uZW50TmFtZX06IFwiJHtsaW5lcy53aW5MaW5lfS5cImBcbiAgICB9XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQob3Bwb25lbnRFbmRMaW5lRW50cnkpO1xuICAgIC8vIHNheWluZyB0aGUgJ3dpbkxpbmUnIG9yICdsb3NlTGluZScgIFxuICAgIC8vIGtlZXAgdHJhY2sgb2YgZ29sZCFcbiAgICAvLyBzaG93IGdvbGQgaW4gdGhlIGludmVudG9yeVxuICAgIC8vIHdpbiBvciBsb3NlIGEgc2V0IFtGT1IgTk9XXSBudW1iZXIgb2YgZ29sZFxuICAgIC8vIGdvbGQgY291bGQgYmUgc3BlbnQgb24gYnV5aW5nIGVxdWlwbWVudFxufVxuZXhwb3J0IHtcbiAgICBwbGF5ZXJIYW5kLCBvcHBvbmVudEhhbmQsIGN1cnJlbnRCaWQsIGFjY3VzYXRpb24sIGV4YW1wbGVMaW5lcywgZGllMSwgZGllMiwgZGllMywgZGllNCwgZGllNSwgZGllNiwgc3RhcnREaWNlR2FtZSwgZmFsc2VDdWJlcywgcm9sbDZkNFBsYXllciwgcm9sbDZkNE9wcG9uZW50LCByb2xsMWQ0LCByb2xsUGhhc2UsIGJpZFBoYXNlLCBmaWZ0eUZpZnR5LCBvbmVUaGlyZCwgb3Bwb25lbnRSZXNwb25zZSwgb3Bwb25lbnRCaWQsIGNhbGxPdXQsIGdhbWVFbmRcbn0iLCJjb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcblxuY29uc3QgZXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV2ZW50RW1pdHRlcjsiLCIvLyBpbXBvcnQ6IGNoYXIxLCBjbGFzc2VzXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBiZ0ltZyBmcm9tICcuL2JnLmpwZyc7XG5pbXBvcnQgeyBjaGFyMSB9IGZyb20gJy4vY29tcF9vYmplY3RzX2FuZF9tZXRob2RzJztcblxuLy8gaW5pdGlhbGl6ZSBzcGFjZXMgYW5kIGJ1dHRvbnNcbmxldCB0b3BfYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcF9iYXInKTtcbmxldCBsb2dfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZycpO1xubGV0IG1haW5fd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fd2luZG93Jyk7XG5sZXQgaW1hZ2Vfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlX3dpbmRvdycpO1xubGV0IG1lbnVfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbmxldCBidXR0b25fd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl93aW5kb3cnKTtcbmxldCBhdHRhY2tfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F0dGFja0J1dHRvbicpO1xubGV0IHNwZWNpYWxfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwZWNpYWxCdXR0b24nKTtcbmxldCBpbnZlbnRvcnlfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ludmVudG9yeUJ1dHRvbicpO1xubGV0IHN0YXRzX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0c0J1dHRvbicpO1xuLy9kcmF3IHBsYXllciBzdGF0c1xubWVudV93aW5kb3cudGV4dENvbnRlbnQgPSBgWW91IGFyZSAke2NoYXIxLm5hbWV9LiBZb3VyIGNsYXNzIGlzIHVua25vd24uIFlvdXIgYXJtb3IgY2xhc3MgaXMgJHtjaGFyMS5hcm1vckNsYXNzfS4gWW91ciBIUCBpcyAke2NoYXIxLmN1cnJlbnRIUH0vJHtjaGFyMS5tYXhIUH0uYDtcbi8vIGRpYWxvZyByZW1vdmVyXG5mdW5jdGlvbiBkaWFsb2dBbmltYXRpb25FbmQoZXZlbnQpIHtcbiAgICBsZXQgZGlhbG9nID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0IDogZXZlbnQ7XG4gICAgaWYgKGRpYWxvZy50YWdOYW1lID09ICdESUFMT0cnKSB7XG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpYWxvZy5yZW1vdmUoKTtcbiAgICB9XG4gICAgZGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBkaWFsb2cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZGlhbG9nQW5pbWF0aW9uRW5kKTtcbn1cbi8vLS0tbWFpbiBtZW51LS0tXG5sZXQgbWFpbk1lbnVEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbm1haW5NZW51RGlhbG9nLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6NzUlO3dpZHRoOjEwMCU7ei1pbmRleDoxMDAwO292ZXJmbG93OmhpZGRlbjsnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbk1lbnVEaWFsb2cpO1xubWFpbk1lbnVEaWFsb2cuaW5uZXJIVE1MID0gXG5gXG48ZGl2IGNsYXNzPSdtYWluTWVudUNvbnRhaW5lcic+XG4gICAgPGRpdiBzdHlsZT0nZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyLWJvdHRvbTo1cHggc29saWQgc2lsdmVyJz5cbiAgICAgICAgPGgxIHN0eWxlPSdtYXJnaW4tYm90dG9tOiA1cHg7Jz5XaGF0IE1ha2VzIFlvdSBMaXZlPzwvaDE+XG4gICAgPC9kaXY+XG4gICAgPGgxIHN0eWxlPSd0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tYm90dG9tOi0yMHB4Oyc+TWFpbiBNZW51PC9oMj4gICBcbiAgICA8ZGl2IGNsYXNzPSdtYWluTWVudScgc3R5bGU9J2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luLXRvcDo1MHB4Oyc+XG4gICAgICAgIDxidXR0b24gaWQ9J3N0YXJ0R2FtZUJ1dHRvbicgc3R5bGU9J2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgYXV0bzsgYm9yZGVyOiAzcHggc29saWQgc2lsdmVyOyBib3JkZXItcmFkaXVzOiA1cHg7IG1hcmdpbi1ib3R0b206MjBweDt3aWR0aDoyNTBweDsnPlN0YXJ0IGdhbWU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD0nc2V0dGluZ3NCdXR0b24nIHN0eWxlPSdkaXNwbGF5OmJsb2NrO21hcmdpbjowIGF1dG87IGJvcmRlcjogM3B4IHNvbGlkIHNpbHZlcjsgYm9yZGVyLXJhZGl1czogNXB4OyBtYXJnaW4tYm90dG9tOjIwcHg7d2lkdGg6MjUwcHg7Jz5TZXR0aW5nczwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPSdhYm91dEJ1dHRvbicgc3R5bGU9J2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgYXV0bzsgYm9yZGVyOiAzcHggc29saWQgc2lsdmVyOyBib3JkZXItcmFkaXVzOiA1cHg7IG1hcmdpbi1ib3R0b206MjBweDt3aWR0aDoyNTBweDsnPkFib3V0IHRoZSBjcmVhdG9yPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9J2NvbnRhY3RCdXR0b24nIHN0eWxlPSdkaXNwbGF5OmJsb2NrO21hcmdpbjowIGF1dG87IGJvcmRlcjogM3B4IHNvbGlkIHNpbHZlcjsgYm9yZGVyLXJhZGl1czogNXB4OyBtYXJnaW4tYm90dG9tOjA7d2lkdGg6MjUwcHg7Jz5Db250YWN0IG1lPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGJyPlxuICAgIDxwIHN0eWxlPSdjb2xvcjp3aGl0ZTtmb250LXNpemU6ODAlOyc+PGk+Tm90ZTogSWYgeW91IHBsYXkgb24gbW9iaWxlLCBzY3JvbGwgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIHRvIHNlZSB0aGUgYWN0aW9uIGJ1dHRvbnMuPC9pPjwvcD5cbjwvZGl2PlxuICAgIGBcbm1haW5NZW51RGlhbG9nLnNob3dNb2RhbCgpO1xuXG5sZXQgYmxhY2tNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ibGFja01lbnUuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7ei1pbmRleDo1MDA7b3ZlcmZsb3c6aGlkZGVuO2ApO1xubGV0IGJnTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYmdNZW51LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgaGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvcGFjaXR5OjAuNTtiYWNrZ3JvdW5kLWltYWdlOnVybChcIiR7YmdJbWd9XCIpO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtvdmVyZmxvdzpoaWRkZW47YCk7XG5ibGFja01lbnUuYXBwZW5kQ2hpbGQoYmdNZW51KTtcbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoYmxhY2tNZW51KTtcbmRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxubGV0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0R2FtZUJ1dHRvbicpO1xubGV0IG1haW5NZW51Q2xvc2VkID0gZmFsc2U7O1xuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWFpbk1lbnVEaWFsb2cuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIG1haW5NZW51RGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgZGlhbG9nQW5pbWF0aW9uRW5kKG1haW5NZW51RGlhbG9nKTtcbiAgICAgICAgbWFpbk1lbnVDbG9zZWQgPSB0cnVlO1xuICAgICAgICBjaGVja0FuaW1hdGlvbkNvbXBsZXRlKCk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGNoZWNrQW5pbWF0aW9uQ29tcGxldGUoKSB7XG4gICAgaWYgKG1haW5NZW51Q2xvc2VkKSB7XG4gICAgICAgIGJsYWNrTWVudS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGJsYWNrTWVudS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBkaWFsb2dBbmltYXRpb25FbmQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnOyAgICBcbiAgICB9XG59XG4vLyBleHBvcnQgc3BhY2VzIGFuZCBidXR0b25zXG5leHBvcnQge1xuICAgIHRvcF9iYXIsXG4gICAgbG9nX3dpbmRvdyxcbiAgICBtYWluX3dpbmRvdyxcbiAgICBpbWFnZV93aW5kb3csXG4gICAgbWVudV93aW5kb3csXG4gICAgYnV0dG9uX3dpbmRvdyxcbiAgICBhdHRhY2tfYnV0dG9uLFxuICAgIHNwZWNpYWxfYnV0dG9uLFxuICAgIGludmVudG9yeV9idXR0b24sXG4gICAgc3RhdHNfYnV0dG9uLFxuICAgIGRpYWxvZ0FuaW1hdGlvbkVuZFxufSIsIi8vIGltcG9ydDogaHVkLCBjaGFyMSwgbWVudVVwZGF0ZXIsXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCB7IFxuICAgIG1lbnVfd2luZG93LFxuICAgIGludmVudG9yeV9idXR0b24sXG4gICAgZGlhbG9nQW5pbWF0aW9uRW5kXG59IGZyb20gJy4vY29tcF9odWQnO1xuaW1wb3J0IHsgXG4gICAgbWVudVVwZGF0ZXIsIFxuICAgIGNoYXIxIFxufSBmcm9tICcuL2NvbXBfb2JqZWN0c19hbmRfbWV0aG9kcyc7XG5cbi8vIC0tLWludmVudG9yeSBzeXN0ZW0tLS1cbi8vIGNyZWF0ZSBhIGRpYWxvZyB3aW5kb3cgd2hlbiB3ZSBjbGljayBvbiBpbnZlbnRvcnlcbmxldCBpbnZlbnRvcnlEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbmludmVudG9yeURpYWxvZy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnbWF4LXdpZHRoOjUwMHB4OycpXG5pbnZlbnRvcnlEaWFsb2cuaW5uZXJIVE1MID0gYFxuICAgIDxidXR0b24gaWQ9J2Nsb3NlQnV0dG9uJz5DbG9zZTwvYnV0dG9uPlxuICAgIDxkaXYgaWQ9J2ludmVudG9yeUJveCc+XG4gICAgICAgIDxoMj5JbnZlbnRvcnk8L2gyPlxuICAgICAgICA8ZGl2IGlkPSdlcXVpcHBlZEJveCc+XG4gICAgICAgICAgICBFcXVpcHBlZCB3ZWFwb246IDxzcGFuIGlkPSdlcXVpcHBlZFdlYXBvbkJveCc+PC9zcGFuPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgRXF1aXBwZWQgYXJtb3I6IDxzcGFuIGlkPSdlcXVpcHBlZEFybW9yQm94Jz48L3NwYW4+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICBFcXVpcHBlZCBtaXNjOiA8c3BhbiBpZD0nZXF1aXBwZWRNaXNjQm94Jz48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnI+XG4gICAgICAgIDxicj5cbiAgICAgICAgR29sZDogPHNwYW4gaWQ9J2dvbGRCb3gnPjwvc3Bhbj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8ZGl2IGlkPSdhbGxCb3gnPlxuICAgICAgICAgICAgQmFnOlxuICAgICAgICAgICAgPHVsIGlkPSdhbGxMaXN0Jz5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW52ZW50b3J5RGlhbG9nKTtcbmludmVudG9yeV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaW52ZW50b3J5RGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIGxldCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZUJ1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpbnZlbnRvcnlEaWFsb2cuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBpbnZlbnRvcnlEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZGlhbG9nQW5pbWF0aW9uRW5kKTtcbiAgICB9KVxufSlcbi8vIGdvbGQgc3lzdGVtXG5sZXQgcGxheWVyR29sZCA9IDA7XG5sZXQgZ29sZEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnb2xkQm94Jyk7XG5nb2xkQm94LnRleHRDb250ZW50ID0gcGxheWVyR29sZDtcbmZ1bmN0aW9uIGFkZEdvbGQoYW1vdW50KSB7XG4gICAgcGxheWVyR29sZCArPSBhbW91bnQ7XG4gICAgZ29sZEJveC50ZXh0Q29udGVudCA9IHBsYXllckdvbGQ7XG59XG4vLyBncmFiIGVsZW1lbnRzIGZyb20gZGlhbG9nXG5sZXQgZXF1aXBwZWRXZWFwb25Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXF1aXBwZWRXZWFwb25Cb3gnKTtcbmxldCBlcXVpcHBlZEFybW9yQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VxdWlwcGVkQXJtb3JCb3gnKTtcbmxldCBlcXVpcHBlZE1pc2NCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXF1aXBwZWRNaXNjQm94Jyk7XG5sZXQgYWxsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGxMaXN0Jylcbi8vIHdoZW4gYW4gb2JqZWN0IGlzIGdyYWJiZWRcbmZ1bmN0aW9uIGdyYWJJdGVtKGl0ZW0pIHtcbiAgICBjaGFyMS5pbnZlbnRvcnkucHVzaChpdGVtKTtcbiAgICBsZXQgaXRlbUJ1bGxldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBpdGVtQnVsbGV0LnRleHRDb250ZW50ID0gYCR7aXRlbS5uYW1lfSwgJHtpdGVtLnR5cGV9LiBBdHRhY2sgYm9udXM6ICR7aXRlbS5pdGVtQXR0YWNrfS4gQXJtb3IgYm9udXM6ICR7aXRlbS5pdGVtQXJtb3J9LmBcbiAgICBhbGxMaXN0LmFwcGVuZENoaWxkKGl0ZW1CdWxsZXQpO1xuICAgIGlmIChpdGVtLnR5cGUgIT09ICdxdWVzdCBpdGVtJykge1xuICAgICAgICBsZXQgZXF1aXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZXF1aXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlcXVpcEl0ZW0oaXRlbSkpO1xuICAgICAgICBlcXVpcEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFcXVpcCc7XG4gICAgICAgIGVxdWlwQnV0dG9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZm9udC1zaXplOiA3MCU7Jyk7XG4gICAgICAgIGVxdWlwQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpdGVtLmlkfWApO1xuICAgICAgICBhbGxMaXN0LmFwcGVuZENoaWxkKGVxdWlwQnV0dG9uKTtcbiAgICB9XG59XG4vLyB3aGVuIGFuIG9iamVjdCBpcyBlcXVpcHBlZFxuZnVuY3Rpb24gZXF1aXBJdGVtKGl0ZW0pIHtcbiAgICBpZiAoY2hhcjEuaW52ZW50b3J5LmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICd3ZWFwb24nOlxuICAgICAgICAgICAgICAgIGlmIChjaGFyMS5lcXVpcHBlZFdlYXBvbiA9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBjaGFyMS5lcXVpcHBlZFdlYXBvbiA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgIGNoYXIxLmFybW9yQ2xhc3MgPSBjaGFyMS5hcm1vckNsYXNzICsgY2hhcjEuZXF1aXBwZWRXZWFwb24uaXRlbUFybW9yO1xuICAgICAgICAgICAgICAgICAgICBlcXVpcHBlZFdlYXBvbkJveC50ZXh0Q29udGVudCA9IGAke2l0ZW0ubmFtZX1gO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXF1aXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpdGVtLmlkfWApO1xuICAgICAgICAgICAgICAgICAgICBlcXVpcEJ1dHRvbi50ZXh0Q29udGVudCA9ICdVbmVxdWlwJztcbiAgICAgICAgICAgICAgICAgICAgZXF1aXBCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlcXVpcEl0ZW0oaXRlbSkpO1xuICAgICAgICAgICAgICAgICAgICBlcXVpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVuZXF1aXBJdGVtKGl0ZW0pKTsgICBcbiAgICAgICAgICAgICAgICAgICAgbWVudVVwZGF0ZXIoKTsgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnRVJST1I6IHBsZWFzZSB1bmVxdWlwIHlvdXIgY3VycmVudCBpdGVtIGZpcnN0JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcm1vcic6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIxLmVxdWlwcGVkQXJtb3IgPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcjEuZXF1aXBwZWRBcm1vciA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgIGNoYXIxLmFybW9yQ2xhc3MgPSBjaGFyMS5hcm1vckNsYXNzICsgY2hhcjEuZXF1aXBwZWRBcm1vci5pdGVtQXJtb3I7XG4gICAgICAgICAgICAgICAgICAgIGVxdWlwcGVkQXJtb3JCb3gudGV4dENvbnRlbnQgPSBgJHtpdGVtLm5hbWV9YDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVxdWlwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aXRlbS5pZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgZXF1aXBCdXR0b24udGV4dENvbnRlbnQgPSAnVW5lcXVpcCc7XG4gICAgICAgICAgICAgICAgICAgIGVxdWlwQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZXF1aXBJdGVtKGl0ZW0pKTtcbiAgICAgICAgICAgICAgICAgICAgZXF1aXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB1bmVxdWlwSXRlbShpdGVtKSk7ICAgXG4gICAgICAgICAgICAgICAgICAgIG1lbnVVcGRhdGVyKCk7ICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0VSUk9SOiBwbGVhc2UgdW5lcXVpcCB5b3VyIGN1cnJlbnQgaXRlbSBmaXJzdCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWlzYyc6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIxLmVxdWlwcGVkTWlzYyA9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBjaGFyMS5lcXVpcHBlZE1pc2MgPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICBjaGFyMS5hcm1vckNsYXNzID0gY2hhcjEuYXJtb3JDbGFzcyArIGNoYXIxLmVxdWlwcGVkTWlzYy5pdGVtQXJtb3I7XG4gICAgICAgICAgICAgICAgICAgIGVxdWlwcGVkTWlzY0JveC50ZXh0Q29udGVudCA9IGAke2l0ZW0ubmFtZX1gO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXF1aXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpdGVtLmlkfWApO1xuICAgICAgICAgICAgICAgICAgICBlcXVpcEJ1dHRvbi50ZXh0Q29udGVudCA9ICdVbmVxdWlwJztcbiAgICAgICAgICAgICAgICAgICAgZXF1aXBCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlcXVpcEl0ZW0oaXRlbSkpO1xuICAgICAgICAgICAgICAgICAgICBlcXVpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVuZXF1aXBJdGVtKGl0ZW0pKTsgICBcbiAgICAgICAgICAgICAgICAgICAgbWVudVVwZGF0ZXIoKTsgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnRVJST1I6IHBsZWFzZSB1bmVxdWlwIHlvdXIgY3VycmVudCBpdGVtIGZpcnN0JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnRVJST1I6IHlvdSBkbyBub3QgaGF2ZSB0aGlzIGl0ZW0gaW4geW91ciBpbnZlbnRvcnknKVxuICAgIH1cbn1cbi8vIHdoZW4gYW4gaXRlbSBpcyB1bmVxdWlwcGVkXG5mdW5jdGlvbiB1bmVxdWlwSXRlbShpdGVtKSB7XG4gICAgaWYgKGNoYXIxLmVxdWlwcGVkV2VhcG9uID09IGl0ZW0gfHwgY2hhcjEuZXF1aXBwZWRBcm1vciA9PSBpdGVtIHx8IGNoYXIxLmVxdWlwcGVkTWlzYyA9PSBpdGVtKSB7XG4gICAgICAgIGlmIChjaGFyMS5lcXVpcHBlZFdlYXBvbiA9PSBpdGVtKSB7XG4gICAgICAgICAgICBjaGFyMS5hcm1vckNsYXNzID0gY2hhcjEuYXJtb3JDbGFzcyAtIGNoYXIxLmVxdWlwcGVkV2VhcG9uLml0ZW1Bcm1vcjtcbiAgICAgICAgICAgIGNoYXIxLmVxdWlwcGVkV2VhcG9uID0gJyc7XG4gICAgICAgICAgICBlcXVpcHBlZFdlYXBvbkJveC50ZXh0Q29udGVudCA9IGBgO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXIxLmVxdWlwcGVkQXJtb3IgPT0gaXRlbSkge1xuICAgICAgICAgICAgY2hhcjEuYXJtb3JDbGFzcyA9IGNoYXIxLmFybW9yQ2xhc3MgLSBjaGFyMS5lcXVpcHBlZEFybW9yLml0ZW1Bcm1vcjtcbiAgICAgICAgICAgIGNoYXIxLmVxdWlwcGVkQXJtb3IgPSAnJztcbiAgICAgICAgICAgIGVxdWlwcGVkQXJtb3JCb3gudGV4dENvbnRlbnQgPSBgYDtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyMS5lcXVpcHBlZE1pc2MgPT0gaXRlbSkge1xuICAgICAgICAgICAgY2hhcjEuYXJtb3JDbGFzcyA9IGNoYXIxLmFybW9yQ2xhc3MgLSBjaGFyMS5lcXVpcHBlZE1pc2MuaXRlbUFybW9yO1xuICAgICAgICAgICAgY2hhcjEuZXF1aXBwZWRNaXNjID0gJyc7XG4gICAgICAgICAgICBlcXVpcHBlZE1pc2NCb3gudGV4dENvbnRlbnQgPSBgYDtcbiAgICAgICAgfVxuICAgICAgICBtZW51VXBkYXRlcigpO1xuICAgICAgICBsZXQgZXF1aXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpdGVtLmlkfWApO1xuICAgICAgICBlcXVpcEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFcXVpcCc7XG4gICAgICAgIGVxdWlwQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdW5lcXVpcEl0ZW0oaXRlbSkpO1xuICAgICAgICBlcXVpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVxdWlwSXRlbShpdGVtKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0VSUk9SOiB0aGlzIGl0ZW0gaXMgbm90IGVxdWlwcGVkOycpXG4gICAgfVxufVxuLy8gdG8gY2hhcmFjdGVyLCBhZGQgdGhlIGZvbGxvd2luZyBrZXlzOiBlcXVpcHBlZFdlYXBvbiwgZXF1aXBwZWRBcm1vciwgZXF1aXBwZWRNaXNjLCBpbnZlbnRvcnkgPSBbXVxuLy8gdGhlIGl0ZW0gb2JqZWN0IHdpbGwgaGF2ZSBrZXlzOiB0eXBlICh3ZWFwb24sIGFybW9yIG9yIG1pc2MpOyBpdGVtQXR0YWNrOyBpdGVtQXJtb3JcbmZ1bmN0aW9uIG5ld0l0ZW0obmFtZSwgdHlwZSwgaXRlbUF0dGFjaywgaXRlbUFybW9yLCBpZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGl0ZW1BdHRhY2s6IGl0ZW1BdHRhY2ssXG4gICAgICAgIGl0ZW1Bcm1vcjogaXRlbUFybW9yLFxuICAgICAgICBpZDogaWRcbiAgICB9XG59XG5sZXQgbWFnaWNTd29yZCA9IG5ld0l0ZW0oJ01hZ2ljIFN3b3JkJywgJ3dlYXBvbicsIDIwLCAwLCAnbjEnKTtcbmxldCBtYWdpY0FybW9yID0gbmV3SXRlbSgnTWFnaWMgQXJtb3InLCAnYXJtb3InLCAwLCAyLCAnbjInKTtcbmxldCBtYWdpY1JpbmcgPSBuZXdJdGVtKCdNYWdpYyBSaW5nJywgJ21pc2MnLCAxLCAxLCAnbjMnKTtcbmxldCB1bHRyYVN3b3JkID0gbmV3SXRlbSgnVWx0cmEgU3dvcmQnLCAnd2VhcG9uJywgNDAsIDAsICduNCcpO1xubGV0IHVsdHJhQXJtb3IgPSBuZXdJdGVtKCdVbHRyYSBBcm1vcicsICdhcm1vcicsIDAsIDQsICduNScpO1xubGV0IHVsdHJhUmluZyA9IG5ld0l0ZW0oJ1VsdHJhIFJpbmcnLCAnbWlzYycsIDIsIDIsICduNicpO1xubGV0IHJ1c3R5U3dvcmQgPSBuZXdJdGVtKCdSdXN0eSBTd29yZCcsICd3ZWFwb24nLCAxLCAwLCAnbjcnKTtcbmxldCBydXN0eUFybW9yID0gbmV3SXRlbSgnUnVzdHkgQXJtb3InLCAnYXJtb3InLCAwLCAxLCAnbjgnKTtcbmxldCBnb2xkUmluZyA9IG5ld0l0ZW0oJ0dvbGQgUmluZycsICdtaXNjJywgMCwgMSwgJ245Jyk7XG5sZXQgaGVhbHRoUG90aW9uID0gbmV3SXRlbSgnSGVhbHRoIFBvdGlvbicsICdxdWVzdCBpdGVtJywgMCwgMCwgJ24xMCcpO1xubGV0IHdpc3BCYWxsID0gbmV3SXRlbSgnRGltbHkgR2xvd2luZyBCYWxsJywgJ21pc2MnLCAwLCAxLCAnbjExJyk7XG4vLyBleHBvcnRpbmcgb2JqZWN0XG5sZXQgYWxsSXRlbXMgPSB7IHdpc3BCYWxsLCBtYWdpY0FybW9yLCBtYWdpY1JpbmcsIG1hZ2ljU3dvcmQsIHVsdHJhQXJtb3IsIHVsdHJhUmluZywgdWx0cmFTd29yZCwgcnVzdHlBcm1vciwgcnVzdHlTd29yZCwgZ29sZFJpbmcsIGhlYWx0aFBvdGlvbiB9O1xuLy8gZXhwb3J0XG5leHBvcnQge1xuICAgIGludmVudG9yeURpYWxvZyxcbiAgICBncmFiSXRlbSxcbiAgICBlcXVpcEl0ZW0sXG4gICAgdW5lcXVpcEl0ZW0sXG4gICAgbmV3SXRlbSxcbiAgICBhbGxJdGVtcyxcbiAgICBwbGF5ZXJHb2xkLFxuICAgIGFkZEdvbGRcbn0iLCIvLyBpbXBvcnQ6IGVuZW1pZXMgYXJyYXksIGlzSGVEZWFkLCBsaXN0RW5lbWllc1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBlbmVtaWVzLCBpc0hlRGVhZCwgaXNQbGF5ZXJEZWFkLCBsaXN0RW5lbWllcyB9IGZyb20gXCIuL2NvbXBfYmF0dGxlX2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgUmFjZSwgcmFjZXMgfSBmcm9tICcuL2NvbXBfcmFjZXMnO1xuLy8gbG9nX3dpbmRvd1xubGV0IGxvZ193aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nJyk7XG4vLyBvYmplY3QgY29uc3RydWN0b3IgZnVuY3Rpb25zXG5mdW5jdGlvbiBDaGFyYWN0ZXIobmFtZSwgYXR0YWNrQm9udXMsIGFybW9yQ2xhc3MsIGN1cnJlbnRIUCwgbWF4SFAsIHNwZWNpYWxBdHRhY2ssIGVxdWlwcGVkV2VhcG9uLCBlcXVpcHBlZEFybW9yLCBlcXVpcHBlZE1pc2MsIGludmVudG9yeSwgcmFjZSwgc3Bpcml0Q29uY2VwdCwgY29uY2VwdCwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYXR0YWNrQm9udXMgPSBhdHRhY2tCb251cztcbiAgICB0aGlzLmFybW9yQ2xhc3MgPSBhcm1vckNsYXNzO1xuICAgIHRoaXMuY3VycmVudEhQID0gY3VycmVudEhQO1xuICAgIHRoaXMubWF4SFAgPSBtYXhIUDtcbiAgICB0aGlzLnNwZWNpYWxBdHRhY2sgPSBzcGVjaWFsQXR0YWNrO1xuICAgIHRoaXMuZXF1aXBwZWRXZWFwb24gPSAnJztcbiAgICB0aGlzLmVxdWlwcGVkQXJtb3IgPSAnJztcbiAgICB0aGlzLmVxdWlwcGVkTWlzYyA9ICcnO1xuICAgIHRoaXMuaW52ZW50b3J5ID0gW107XG4gICAgdGhpcy5yYWNlID0gcmFjZTtcbiAgICB0aGlzLnNwaXJpdENvbmNlcHQgPSB7IGNvbmNlcHQ6IGNvbmNlcHQsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB9XG59XG5cbmZ1bmN0aW9uIE1vbnN0ZXIobmFtZSwgbW9uc3RlckF0dGFja0JvbnVzLCBhcm1vckNsYXNzLCBjdXJyZW50SFAsIG1heEhQLCBzdGF0dXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubW9uc3RlckF0dGFja0JvbnVzID0gbW9uc3RlckF0dGFja0JvbnVzO1xuICAgIHRoaXMuYXJtb3JDbGFzcyA9IGFybW9yQ2xhc3M7XG4gICAgdGhpcy5jdXJyZW50SFAgPSBjdXJyZW50SFA7XG4gICAgdGhpcy5tYXhIUCA9IG1heEhQO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xufVxuLy8gaGVyby5wcm90b3R5cGUgYXR0YWNrIG1ldGhvZFxuQ2hhcmFjdGVyLnByb3RvdHlwZS5hdHRhY2sgPSBmdW5jdGlvbihzZWxlY3RlZEVuZW15KSB7XG4gICAgaWYgKGVuZW1pZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZEVuZW15ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVuZW15LnN0YXR1cyA9PSAnYnVybmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXkuY3VycmVudEhQID0gZW5lbXkuY3VycmVudEhQIC0gNTtcbiAgICAgICAgICAgICAgICAgICAgaXNIZURlYWQoZW5lbXkpOyBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IGAke2VuZW15Lm5hbWV9IGlzIGJ1cm5pbmcgZm9yIDUgZGFtYWdlIWA7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjp5ZWxsb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbmVtaWVzLmZvckVhY2goZW5lbXkgPT4ge1xuICAgICAgICAgICAgICAgIGVuZW15LnN0YXR1cyA9ICcnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBBcnJheS5mcm9tKGxvZ193aW5kb3cuY2hpbGRyZW4pLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdjb2xvcjp3aGl0ZTsnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkRW5lbXkuY3VycmVudEhQID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBhdHRhY2tSb2xsID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDIwKSArIDEgKyB0aGlzLmF0dGFja0JvbnVzKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhcjEuZXF1aXBwZWRXZWFwb24gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFja1JvbGwgPSBhdHRhY2tSb2xsICsgdGhpcy5lcXVpcHBlZFdlYXBvbi5pdGVtQXR0YWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhcjEuZXF1aXBwZWRBcm1vciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrUm9sbCA9KyBhdHRhY2tSb2xsICsgdGhpcy5lcXVpcHBlZEFybW9yLml0ZW1BdHRhY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGFyMS5lcXVpcHBlZE1pc2MgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFja1JvbGwgPSsgYXR0YWNrUm9sbCArIHRoaXMuZXF1aXBwZWRNaXNjLml0ZW1BdHRhY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBleHRyYUNvbW1lbnQgPSAnJztcbiAgICAgICAgICAgICAgICBsZXQgZXh0cmFBdHRhY2sgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBleHRyYURhbWFnZSA9IDA7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnNwZWNpYWxBdHRhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTm9ybWFsIEF0dGFjayc6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU3BlY3RyYWwgQmxhZGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFDb21tZW50ID0gJyB3aXRoIHRoZSBTcGVjdHJhbCBCbGFkZSAoLTIgYWNjdXJhY3ksICsyIGRhbWFnZSBpZiBoaXRzKSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUF0dGFjayA9IC0yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFEYW1hZ2UgPSArNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdTcGlyaXQgQmxlc3NpbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFBdHRhY2sgPSAtMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdXaXRoZXJpbmcgQm9sdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUNvbW1lbnQgPSAnIHdpdGggdGhlIFdpdGhlcmluZyBCb2x0ICgtNCBhY2N1cmFjeSwgYnV0ICs2IGRhbWFnZSBpZiBoaXRzKSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUF0dGFjayA9IC00O1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFEYW1hZ2UgPSArNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdXcmF0aGZ1bCBWaXNhZ2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFDb21tZW50ID0gJyB3aXRoIHRoZSBXcmF0aGZ1bCBWaXNhZ2UgKC00IGFjY3VyYWN5LCBidXQgc3R1bnMgdGhlIHRhcmdldCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFBdHRhY2sgPSAtNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2tSb2xsICsgZXh0cmFBdHRhY2sgPiBzZWxlY3RlZEVuZW15LmFybW9yQ2xhc3MpIHsgc2VsZWN0ZWRFbmVteS5zdGF0dXMgPSAnc3R1bm5lZCc7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdCaW5kIG9mIHRoZSBHdWFyZGlhbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUNvbW1lbnQgPSAnIHdpdGggdGhlIEJpbmQgb2YgdGhlIEd1YXJkaWFuICgtNCBhY2N1cmFjeSwgYnV0IHN0dW5zIHRoZSB0YXJnZXQpJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQXR0YWNrID0gLTQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0YWNrUm9sbCArIGV4dHJhQXR0YWNrID4gc2VsZWN0ZWRFbmVteS5hcm1vckNsYXNzKSB7IHNlbGVjdGVkRW5lbXkuc3RhdHVzID0gJ3N0dW5uZWQnOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnRXNzZW5jZSBEcmFpbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUNvbW1lbnQgPSAnIHdpdGggdGhlIEVzc2VuY2UgRHJhaW4gKC00IGFjY3VyYWN5LCBidXQgc2V0cyB0YXJnZXQgb24gZmlyZSBmb3Igb25lIHR1cm4pJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQXR0YWNrID0gLTQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0YWNrUm9sbCArIGV4dHJhQXR0YWNrID4gc2VsZWN0ZWRFbmVteS5hcm1vckNsYXNzKSB7IHNlbGVjdGVkRW5lbXkuc3RhdHVzID0gJ2J1cm5pbmcnOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmFjZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFBdHRhY2sgKz0gdGhpcy5yYWNlLnJhY2VBdHRhY2tCb251cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGF0dGFja1JvbGwgKyBleHRyYUF0dGFjayA+IHNlbGVjdGVkRW5lbXkuYXJtb3JDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEVuZW15LmN1cnJlbnRIUCAtPSBhdHRhY2tSb2xsICsgZXh0cmFBdHRhY2sgKyBleHRyYURhbWFnZSAtIHNlbGVjdGVkRW5lbXkuYXJtb3JDbGFzcztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IGAke3RoaXMubmFtZX0gYXR0YWNrcyAke3NlbGVjdGVkRW5lbXkubmFtZX0ke2V4dHJhQ29tbWVudH0hIFRoZSBhdHRhY2sgaGl0cyBhbmQgZGVhbHMgJHthdHRhY2tSb2xsICsgZXh0cmFBdHRhY2sgKyBleHRyYURhbWFnZSAtIHNlbGVjdGVkRW5lbXkuYXJtb3JDbGFzc30gZGFtYWdlIWA7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjp5ZWxsb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgIGlzSGVEZWFkKHNlbGVjdGVkRW5lbXkpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0RW5lbWllcygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zcGVjaWFsQXR0YWNrID09ICdTcGlyaXQgQmxlc3NpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoZWFsZWQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXJIUG1pc3NpbmcgPSB0aGlzLm1heEhQIC0gdGhpcy5jdXJyZW50SFA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJIUG1pc3NpbmcgPiA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRIUCA9IHRoaXMuY3VycmVudEhQICsgNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWxlZCA9IDU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVySFBtaXNzaW5nID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhbGVkID0gcGxheWVySFBtaXNzaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SFAgPSB0aGlzLm1heEhQO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhbGVkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gYCR7dGhpcy5uYW1lfSBjYXN0cyBTcGlyaXQgQmxlc3NpbmcsIGhlYWxpbmcgdGhlbXNlbGYgZm9yICR7aGVhbGVkfSBIUCFgO1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6eWVsbG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxvZ193aW5kb3cuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICBtZW51VXBkYXRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9IGF0dGFja3MgJHtzZWxlY3RlZEVuZW15Lm5hbWV9ISBUaGUgYXR0YWNrIG1pc3NlcyFgO1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6eWVsbG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxvZ193aW5kb3cuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZW5lbWllcy5sZW5ndGggIT09IDApIHsgXG4gICAgICAgICAgICAgICAgICAgIGVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW5lbXkuc3RhdHVzICE9PSAnc3R1bm5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVteS5jb3VudGVyYXR0YWNrKCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbmVteS5zdGF0dXMgPT0gJ3N0dW5uZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gYCR7ZW5lbXkubmFtZX0gaXMgc3R1bm5lZCFgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjp5ZWxsb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gYFdoaWNoIG1vbnN0ZXIgZG8gSSBhdHRhY2s/YDtcbiAgICAgICAgICAgIGxvZ193aW5kb3cuYXBwZW5kQ2hpbGQoZW50cnkpOyAgICBcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSBgTm8gbW9uc3RlcnMgYXJvdW5kLmA7XG4gICAgICAgIGxvZ193aW5kb3cuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgIH1cbn1cbi8vIGNoYXJhY3RlciBjbGFzc2VzXG5mdW5jdGlvbiBKYW5pdG9yKG5hbWUsIGF0dGFja0JvbnVzLCBhcm1vckNsYXNzLCBjdXJyZW50SFAsIG1heEhQLCBzcGVjaWFsQXR0YWNrLCBlcXVpcHBlZFdlYXBvbiwgZXF1aXBwZWRBcm1vciwgZXF1aXBwZWRNaXNjLCBpbnZlbnRvcnksIHJhY2UsIHNwaXJpdENvbmNlcHQsIGNvbmNlcHQsIGRlc2NyaXB0aW9uKSB7XG4gICAgQ2hhcmFjdGVyLmNhbGwodGhpcywgbmFtZSwgYXR0YWNrQm9udXMsIGFybW9yQ2xhc3MsIGN1cnJlbnRIUCwgbWF4SFAsIHNwZWNpYWxBdHRhY2ssIGVxdWlwcGVkV2VhcG9uLCBlcXVpcHBlZEFybW9yLCBlcXVpcHBlZE1pc2MsIGludmVudG9yeSwgcmFjZSwgc3Bpcml0Q29uY2VwdCwgY29uY2VwdCwgZGVzY3JpcHRpb24pO1xufVxuZnVuY3Rpb24gQWNjb3VudGFudChuYW1lLCBhdHRhY2tCb251cywgYXJtb3JDbGFzcywgY3VycmVudEhQLCBtYXhIUCwgc3BlY2lhbEF0dGFjaywgZXF1aXBwZWRXZWFwb24sIGVxdWlwcGVkQXJtb3IsIGVxdWlwcGVkTWlzYywgaW52ZW50b3J5LCByYWNlLCBzcGlyaXRDb25jZXB0LCBjb25jZXB0LCBkZXNjcmlwdGlvbikge1xuICAgIENoYXJhY3Rlci5jYWxsKHRoaXMsIG5hbWUsIGF0dGFja0JvbnVzLCBhcm1vckNsYXNzLCBjdXJyZW50SFAsIG1heEhQLCBzcGVjaWFsQXR0YWNrLCBlcXVpcHBlZFdlYXBvbiwgZXF1aXBwZWRBcm1vciwgZXF1aXBwZWRNaXNjLCBpbnZlbnRvcnksIHJhY2UsIHNwaXJpdENvbmNlcHQsIGNvbmNlcHQsIGRlc2NyaXB0aW9uKTtcbn1cbmZ1bmN0aW9uIERhbmNlcihuYW1lLCBhdHRhY2tCb251cywgYXJtb3JDbGFzcywgY3VycmVudEhQLCBtYXhIUCwgc3BlY2lhbEF0dGFjaywgZXF1aXBwZWRXZWFwb24sIGVxdWlwcGVkQXJtb3IsIGVxdWlwcGVkTWlzYywgaW52ZW50b3J5LCByYWNlLCBzcGlyaXRDb25jZXB0LCBjb25jZXB0LCBkZXNjcmlwdGlvbikge1xuICAgIENoYXJhY3Rlci5jYWxsKHRoaXMsIG5hbWUsIGF0dGFja0JvbnVzLCBhcm1vckNsYXNzLCBjdXJyZW50SFAsIG1heEhQLCBzcGVjaWFsQXR0YWNrLCBlcXVpcHBlZFdlYXBvbiwgZXF1aXBwZWRBcm1vciwgZXF1aXBwZWRNaXNjLCBpbnZlbnRvcnksIHJhY2UsIHNwaXJpdENvbmNlcHQsIGNvbmNlcHQsIGRlc2NyaXB0aW9uKTtcbn1cbi8vIHNldHRpbmcgcHJvdG90eXBlc1xuT2JqZWN0LnNldFByb3RvdHlwZU9mKEphbml0b3IucHJvdG90eXBlLCBDaGFyYWN0ZXIucHJvdG90eXBlKTtcbk9iamVjdC5zZXRQcm90b3R5cGVPZihBY2NvdW50YW50LnByb3RvdHlwZSwgQ2hhcmFjdGVyLnByb3RvdHlwZSk7IFxuT2JqZWN0LnNldFByb3RvdHlwZU9mKERhbmNlci5wcm90b3R5cGUsIENoYXJhY3Rlci5wcm90b3R5cGUpOyBcbi8vIGNoYXJhY3RlciBvYmplY3RcbmxldCBjaGFyMSA9IG5ldyBDaGFyYWN0ZXIoJ1NvbWVib2R5JywgMCwgMTAsIDIwLCAxMDAsICdOb3JtYWwgQXR0YWNrJywgJycsICcnLCAnJywgW10sIHJhY2VzLkh1bWFuLCB7Y29uY2VwdDonJywgZGVzY3JpcHRpb246ICcnfSk7XG4vLyBlbmVtaWVzIG9iamVjdHNcbmxldCBnb2JsaW5fZ3J1bnQgPSBuZXcgTW9uc3RlcignR29ibGluJywgMCwgMTAsIDQwLCA0MCwgJycpO1xubGV0IGdvYmxpbl9maWdodGVyID0gbmV3IE1vbnN0ZXIoJ0dvYmxpbiBGaWdodGVyJywgMiwgMTMsIDI1LCAyNSwgJycpO1xubGV0IGdvYmxpbl9zaGFtYW4gPSBuZXcgTW9uc3RlcignR29ibGluIFNoYW1hbicsIDMsIDE2LCAzMCwgMzAsICcnKTtcbmxldCBnb2JsaW5fY2hpZWZ0YWluID0gbmV3IE1vbnN0ZXIoJ0dvYmxpbiBDaGllZnRhaW4nLCA1LCAxNywgNDAsIDQwLCAnJyk7XG5sZXQgd2l6YXJkID0gbmV3IE1vbnN0ZXIoJ0hhbGYgRGVhZCBPbGQgR3V5JywgLTEsIDEwLCA1LCA1LCAnJyk7XG5sZXQgaW1wMSA9IG5ldyBNb25zdGVyKCdSZWQgSW1wJywgMCwgNSwgNSwgNSwgJycpO1xubGV0IGltcDIgPSBuZXcgTW9uc3RlcignQmx1ZSBJbXAnLCAwLCA1LCA1LCA1LCAnJyk7XG5sZXQgd2lzcDEgPSBuZXcgTW9uc3RlcignV2lzcCcsIDAsIDAsIDEwLCAxMCk7XG4vLyBtb25zdGVycyBvYmplY3RcbmxldCBtb25zdGVycyA9IHsgZ29ibGluX2dydW50LCBnb2JsaW5fZmlnaHRlciwgZ29ibGluX3NoYW1hbiwgZ29ibGluX2NoaWVmdGFpbiwgd2l6YXJkLCBpbXAxLCBpbXAyLCB3aXNwMSB9XG4vLyBtb25zdGVyIGNvdW50ZXJhdHRhY2tcbi8vZW5lbXkgdHVybiBsb2dpY1xuTW9uc3Rlci5wcm90b3R5cGUuY291bnRlcmF0dGFjayA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBhdHRhY2tSb2xsID0gIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAyMCkgKyAxKSArIHRoaXMubW9uc3RlckF0dGFja0JvbnVzO1xuICAgIGlmIChhdHRhY2tSb2xsID4gY2hhcjEuYXJtb3JDbGFzcykge1xuICAgICAgICBjaGFyMS5jdXJyZW50SFAgLT0gYXR0YWNrUm9sbCAtIGNoYXIxLmFybW9yQ2xhc3M7XG4gICAgICAgIGlmIChjaGFyMS5jdXJyZW50SFAgPCAwKSB7XG4gICAgICAgICAgICBjaGFyMS5jdXJyZW50SFAgPSAwO1xuICAgICAgICB9XG4gICAgICAgIG1lbnVVcGRhdGVyKCk7XG4gICAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9IGF0dGFja3MgJHtjaGFyMS5uYW1lfSEgVGhlIGF0dGFjayBoaXRzIGFuZCBkZWFscyAke2F0dGFja1JvbGwgLSBjaGFyMS5hcm1vckNsYXNzfSBkYW1hZ2UhYDtcbiAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOnllbGxvdycpO1xuICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgaXNQbGF5ZXJEZWFkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IGAke3RoaXMubmFtZX0gYXR0YWNrcyAke2NoYXIxLm5hbWV9ISBUaGUgYXR0YWNrIG1pc3NlcyFgO1xuICAgICAgICBlbnRyeS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6eWVsbG93Jyk7XG4gICAgICAgIGxvZ193aW5kb3cuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgIH1cbn1cbi8vIC0tLW1lbnUgdGV4dCB1cGRhdGVyIGZ1bmN0aW9uLS0tXG5mdW5jdGlvbiBtZW51VXBkYXRlcigpIHtcbiAgICBjaGFyMS5yYWNlID0gcmFjZXMuSHVtYW47XG4gICAgbGV0IG1lbnVfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbiAgICBpZiAoY2hhcjEgaW5zdGFuY2VvZiBKYW5pdG9yKSB7IC8vIFdyYWl0aFxuICAgICAgICBtZW51X3dpbmRvdy50ZXh0Q29udGVudCA9IGBZb3UgYXJlICR7Y2hhcjEubmFtZX0uIFlvdXIgYXJlIGEgV3JhaXRoJHtjaGFyMS5zcGlyaXRDb25jZXB0LmRlc2NyaXB0aW9ufS4gSW4gbGlmZSwgeW91IHdlcmUgYSAke2NoYXIxLnJhY2UubmFtZX0uIFlvdXIgYXJtb3IgY2xhc3MgaXMgJHtjaGFyMS5hcm1vckNsYXNzfS4gWW91ciBIUCBpcyAke2NoYXIxLmN1cnJlbnRIUH0vJHtjaGFyMS5tYXhIUH0uYDtcbiAgICB9IGVsc2UgaWYgKGNoYXIxIGluc3RhbmNlb2YgQWNjb3VudGFudCkgeyAvLyBQb2x0ZXJnZWlzdFxuICAgICAgICBtZW51X3dpbmRvdy50ZXh0Q29udGVudCA9IGBZb3UgYXJlICR7Y2hhcjEubmFtZX0uIFlvdXIgYXJlIGEgUG9sdGVyZ2Vpc3Qke2NoYXIxLnNwaXJpdENvbmNlcHQuZGVzY3JpcHRpb259LiBJbiBsaWZlLCB5b3Ugd2VyZSBhICR7Y2hhcjEucmFjZS5uYW1lfS4gWW91ciBhcm1vciBjbGFzcyBpcyAke2NoYXIxLmFybW9yQ2xhc3N9LiBZb3VyIEhQIGlzICR7Y2hhcjEuY3VycmVudEhQfS8ke2NoYXIxLm1heEhQfS5gO1xuICAgIH0gZWxzZSBpZiAoY2hhcjEgaW5zdGFuY2VvZiBEYW5jZXIpIHsgLy8gR3VhcmRpYW4gU3Bpcml0XG4gICAgICAgIG1lbnVfd2luZG93LnRleHRDb250ZW50ID0gYFlvdSBhcmUgJHtjaGFyMS5uYW1lfS4gWW91ciBhcmUgYSBHdWFyZGlhbiBTcGlyaXQke2NoYXIxLnNwaXJpdENvbmNlcHQuZGVzY3JpcHRpb259LiBJbiBsaWZlLCB5b3Ugd2VyZSBhICR7Y2hhcjEucmFjZS5uYW1lfS4gWW91ciBhcm1vciBjbGFzcyBpcyAke2NoYXIxLmFybW9yQ2xhc3N9LiBZb3VyIEhQIGlzICR7Y2hhcjEuY3VycmVudEhQfS8ke2NoYXIxLm1heEhQfS5gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnVfd2luZG93LnRleHRDb250ZW50ID0gYFlvdSBhcmUgJHtjaGFyMS5uYW1lfS4gWW91ciBjbGFzcyBpcyB1bmtub3duLiBZb3VyIGFybW9yIGNsYXNzIGlzICR7Y2hhcjEuYXJtb3JDbGFzc30uIFlvdXIgSFAgaXMgJHtjaGFyMS5jdXJyZW50SFB9LyR7Y2hhcjEubWF4SFB9LmA7XG4gICAgfVxufVxuLy8gb2JqZWN0IGZvciBpbXBvcnRhbnQgcm9sZXMgaW4gdGhlIHBsb3RcbmNsYXNzIE5QQ1JvbGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHN1cm5hbWUsIGhlLCBoaXMsIGhpbSwgaGltc2VsZikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnN1cm5hbWUgPSBzdXJuYW1lO1xuICAgICAgICB0aGlzLmhlID0gaGU7XG4gICAgICAgIHRoaXMuaGlzID0gaGlzO1xuICAgICAgICB0aGlzLmhpbSA9IGhpbTtcbiAgICAgICAgdGhpcy5oaW1zZWxmID0gaGltc2VsZjtcbiAgICB9XG59XG5mdW5jdGlvbiBOUENNYWtlcihuYW1lLCBzdXJuYW1lLCBoZSwgaGlzLCBoaW0sIGhpbXNlbGYpIHtcbiAgICByZXR1cm4gbmV3IE5QQ1JvbGUobmFtZSwgc3VybmFtZSwgaGUsIGhpcywgaGltLCBoaW1zZWxmKVxufVxuLy8gZXhwb3J0XG5leHBvcnQge1xuICAgIENoYXJhY3RlcixcbiAgICBNb25zdGVyLFxuICAgIEphbml0b3IsXG4gICAgQWNjb3VudGFudCxcbiAgICBEYW5jZXIsXG4gICAgY2hhcjEsXG4gICAgZ29ibGluX2dydW50LFxuICAgIGdvYmxpbl9maWdodGVyLFxuICAgIGdvYmxpbl9zaGFtYW4sXG4gICAgZ29ibGluX2NoaWVmdGFpbixcbiAgICB3aXphcmQsXG4gICAgaW1wMSxcbiAgICBpbXAyLFxuICAgIG1lbnVVcGRhdGVyLFxuICAgIG1vbnN0ZXJzLFxuICAgIE5QQ1JvbGUsXG4gICAgTlBDTWFrZXJcbn0iLCIvLyBmYWN0b3J5IGZ1bmN0aW9uIC8gY29uc3RydWN0b3IgLyBjbGFzc1xuY2xhc3MgUmFjZSB7XG4gICAgc3RhdGljIGluc3RhbmNlcyA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGxJbnN0YW5jZXMoKSB7XG4gICAgICAgIHJldHVybiBSYWNlLmluc3RhbmNlcztcbiAgICB9XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIHJhY2VBdHRhY2tCb251cywgcmFjZUhQQm9udXMsIHJhY2VBcm1vckJvbnVzKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5yYWNlQXR0YWNrQm9udXMgPSByYWNlQXR0YWNrQm9udXM7XG4gICAgICAgIHRoaXMucmFjZUhQQm9udXMgPSByYWNlSFBCb251cztcbiAgICAgICAgdGhpcy5yYWNlQXJtb3JCb251cyA9IHJhY2VBcm1vckJvbnVzO1xuICAgIH1cbn1cbi8vIGNyZWF0aW9uIG9mIHJhY2Ugb2JqZWN0c1xubGV0IEh1bWFuID0gbmV3IFJhY2UoJ3BlcnNvbiBmcm9tIGFuIHVua25vd24gbGFuZCcsICdbaW5pdGlhbCByYWNlXScsIDAsIDAsIDApO1xubGV0IFJlYWxtZXIgPSBuZXcgUmFjZSgnUmVhbG1lcicsICdbc3RvY2t5IGFuZCBzdG91dCwgYmxhaCBibGFoXScsIDEsIDAsIDApO1xubGV0IE1vcnRhciA9IG5ldyBSYWNlKCdNb3J0YXInLCAnW3N0b2NreSBhbmQgc3RvdXQsIGJsYWggYmxhaF0nLCAwLCAwLCAxKTsgLy8gYWxyZWFkeSBjb25xdWVyZWQgYnkgdGhlIFJlYWxtIG5hdGlvbj8gU2Vjb25kLWNsYXNzIGNpdGl6ZW5zIGluIHRoZSBSZWFsbVxubGV0IERlYWRsYW5kZXIgPSBuZXcgUmFjZSgnRGVhZGxhbmRlcicsICdbc3RvY2t5IGFuZCBzdG91dCwgYmxhaCBibGFoXScsIDAsIDE1LCAwKTtcbi8vIG9iamVjdCBvZiBvYmplY3RzIGZvciBleHBvcnRpbmdcbmxldCByYWNlcyA9IHsgSHVtYW4sIFJlYWxtZXIsIE1vcnRhciwgRGVhZGxhbmRlciB9XG4vLyBleHBvcnRpbmcgdGhlIGNsYXNzIGFuZCB0aGUgb2JqZWN0IG9mIG9iamVjdHNcbmV4cG9ydCB7IFJhY2UsIHJhY2VzIH0iLCJpbXBvcnQgeyBtb25zdGVycyB9IGZyb20gJy4vY29tcF9vYmplY3RzX2FuZF9tZXRob2RzJztcbmltcG9ydCB7IGFsbEl0ZW1zLCBwbGF5ZXJHb2xkLCBhZGRHb2xkIH0gZnJvbSAnLi9jb21wX2ludmVudG9yeV9zeXN0ZW0nO1xuaW1wb3J0IHsgaWNvbnMgfSBmcm9tICcuL2NvbXBfYXNzZXRzJztcbi8vIGltcG9ydCB7IHN0b3J5RWxlbWVudCB9IGZyb20gJy4vY29tcF9zdG9yeV9vYmplY3RzJztcbmNsYXNzIHN0b3J5RWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IodHlwZSwgdGV4dCwgbW9kaWZpZXJzLCBuZXh0U3RvcnlFbGVtZW50KSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuICAgICAgICB0aGlzLm5leHRTdG9yeUVsZW1lbnQgPSBuZXh0U3RvcnlFbGVtZW50O1xuICAgICAgICBzdG9yeUVsZW1lbnQuaW5zdGFuY2VzLnB1c2godGhpcyk7XG4gICAgfVxuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsSW5zdGFuY2VzKCkge1xuICAgICAgICByZXR1cm4gc3RvcnlFbGVtZW50Lmluc3RhbmNlcztcbiAgICB9XG59XG4vLyAtLS0gc2NyaXB0IC0tLVxuLy8gZnJvbSB0aGVtIGxlYXJuIGFib3V0IHRoZSBOZXcgRGF3biBFZGljdFxuXG4vLyBDSE9PU0UgWU9VUiBDSE9TRU4hIENIT09TRSBBIEdIT1NUTFkgV0FZIFRPIENPTU1VTklDQVRFIVxuLy8gaWYgd2F0Y2ggdGhlbSBmb3IgYSB3aGlsZSwgdGhlIHNlbGVjdGlvbiBvZiBtZXRob2RzIG9mIGFwcGVhcmFuY2UgaXMgc21hbGxlclxuLy8gbWV0aG9kczogd3JpdGUgbWVzc2FnZXMgaW4gdGhlaXIgYm9vaywgYXBwZWFyIGluIHRoZWlyIGRyZWFtc1xubGV0IG1ldGhvZE9mQ29udGFjdDIgPSBuZXcgc3RvcnlFbGVtZW50KCdjaG9pY2UnLCBcbiAgICBbYFlvdSBoYXZlIGEgZmV3IGlkZWFzIG9uIGhvdyB0byBtYWtlIGNvbnRhY3Qgd2l0aCBDaG9zZW5OYW1lLi4uYF0sXG4gICAgW3tjaG9pY2VUZXh0OiBgWW91IHdhaXQgZm9yIENob3Nlbk5hbWUgdG8gc3RhcnQgcmVhZGluZywgYW5kIGNoYW5nZSB0aGUgd29yZHMgaW4geGlzIGJvb2suYCwgLy8gd2FpdCB1bnRpbCB0aGUgYWR2ZW50dXJlcidzIHJlYWRpbmcgYW5kIGNoYW5nZSB0aGUgd29yZHMgaW4gdGhlIGJvb2tcbiAgICBjaG9pY2VNb2RpZmllcnM6IG51bGwsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiB1bmRlZmluZWR9LFxuICAgIHtjaG9pY2VUZXh0OiBgWW91IHdhaXQgZm9yIENob3Nlbk5hbWUgdG8gZmFsbCBhc2xlZXAsIGFuZCBhbHRlciB4aXMgZHJlYW1zLmAsIC8vIGFwcGVhciBvciBhbHRlciB0aGUgYWR2ZW50dXJlcidzIGRyZWFtXG4gICAgY2hvaWNlTW9kaWZpZXJzOiBudWxsLFxuICAgIGNob2ljZU5leHRTdG9yeTogdW5kZWZpbmVkfSxcbiAgICB7Y2hvaWNlVGV4dDogYFlvdSB3YWl0IHRpbGwgQ2hvc2VuTmFtZSdzIGFsb25lIG9uIHdhdGNoLCBhbmQgZHJhdyB0aGUgc3ltYm9sIG9mIEp1c3RpY2Ugb24gYSBuZWFyYnkgdHJlZS5gLCAvLyBTeW1ib2xzIG9yIFJ1bmVzOiBVc2luZyBuYXR1cmFsIG1hdGVyaWFscyBhcm91bmQgdGhlIGNhbXAsIHRoZSBzcGlyaXQgY291bGQgYXJyYW5nZSBzeW1ib2xzIG9yIHJ1bmVzIHRoYXQgY29udmV5IGEgbWVzc2FnZVxuICAgIGNob2ljZU1vZGlmaWVyczogbnVsbCxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IHVuZGVmaW5lZH0sXG4gICAge2Nob2ljZVRleHQ6IGBZb3Ugd2FpdCB0aWxsIHRoZSBvdGhlcnMgYXJlIGFzbGVlcCwgYW5kIGNoYW5nZSB0aGUgc2hhcGUgb2YgQ2hvc2VuTmFtZSdzIHNoYWRvdyBjYXVzZWQgYnkgdGhlIGNhbXBmaXJlLmAsIC8vIEFuaW1hdGVkIFNoYWRvd3M6IFRoZSBzcGlyaXQgY291bGQgYW5pbWF0ZSBzaGFkb3dzIGNhc3QgYnkgb2JqZWN0cyBpbiB0aGUgZW52aXJvbm1lbnQsIGNhdXNpbmcgdGhlbSB0byBtb3ZlIGluIHdheXMgdGhhdCBjb252ZXkgbWVzc2FnZXMgb3IgaW1hZ2VzIHJlbGV2YW50IHRvIHRoZSBhZHZlbnR1cmVycycgam91cm5leS4gRm9yIGV4YW1wbGUsIGEgc2hhZG93IG1pZ2h0IG1pbWljIHRoZSBzaGFwZSBvZiBhIGtleSB0byBpbmRpY2F0ZSB0aGF0IHRoZXkgYXJlIHVubG9ja2luZyBhIGdyZWF0IG15c3Rlcnkgb3IgcG93ZXJcbiAgICBjaG9pY2VNb2RpZmllcnM6IG51bGwsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiB1bmRlZmluZWR9LFxuICAgIHtjaG9pY2VUZXh0OiBgWW91IHNlYXJjaCBmb3IgYW4gYW5pbWFsLCBhbmQgZ2l2ZSBpdCBhIGNvbW1hbmQgdG8gYXBwcm9hY2ggdGhlIGNhbXAgd2hlbiB0aGUgb3RoZXJzIGFyZSBhc2xlZXAuYCwgLy8gR3VpZGluZyBBbmltYWxzOiBUaGUgc3Bpcml0IGNvdWxkIGluZmx1ZW5jZSB0aGUgYmVoYXZpb3Igb2YgYW5pbWFscyBpbiB0aGUgYXJlYSwgY2F1c2luZyB0aGVtIHRvIGFjdCBpbiB3YXlzIHRoYXQgbGVhZCB0aGUgYWR2ZW50dXJlcnMgaW4gdGhlIHJpZ2h0IGRpcmVjdGlvbiBvciB3YXJuIHRoZW0gb2YgaW1wZW5kaW5nIGRhbmdlclxuICAgIGNob2ljZU1vZGlmaWVyczogbnVsbCxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IHVuZGVmaW5lZH0sXG4gICAge2Nob2ljZVRleHQ6IGBZb3Ugd2FpdCBmb3IgQ2hvc2VuTmFtZSB0byBnZXQgYSBkcmluayBvciBwb2xpc2ggeGlzIGFybW9yLCB0aGVuIGFsdGVyIHRoZSByZWZsZWN0aW9uLmAsIC8vIFZpc2lvbnMgaW4gUmVmbGVjdGl2ZSBTdXJmYWNlczogVGhlIHNwaXJpdCBjb3VsZCBjb21tdW5pY2F0ZSB0aHJvdWdoIHZpc2lvbnMgdGhhdCBhcHBlYXIgaW4gcmVmbGVjdGl2ZSBzdXJmYWNlcyBzdWNoIGFzIHN0aWxsIHdhdGVyLCBtaXJyb3JzLCBvciBwb2xpc2hlZCBtZXRhbC4gVGhlc2UgdmlzaW9ucyBjb3VsZCBvZmZlciBnbGltcHNlcyBvZiB0aGUgYWR2ZW50dXJlcnMnIGZ1dHVyZSBvciBwcm92aWRlIGNyeXB0aWMgY2x1ZXMgYWJvdXQgdGhlaXIgZGVzdGlueSBhcyB0aGUgQ2hvc2VuIG9uZVxuICAgIGNob2ljZU1vZGlmaWVyczogbnVsbCxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IHVuZGVmaW5lZH1dLFxuICAgIHVuZGVmaW5lZClcbmxldCBtZXRob2RPZkNvbnRhY3QxYiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYEFmdGVyIGEgbGl0dGxlIGJpdCBvZiB0aGlua2luZyBhbmQgdGVzdGluZywgZmFyIGZyb20gdGhlIGNhbXAsIHlvdSBkZXRlcm1pbmUgdGhhdCBhbGwgeW91IGNhbiBkbyBmb3Igbm93IGFzIGEgU3Bpcml0LCBpcyB0byBtYW5pcHVsYXRlIGluYW5pbWF0ZSBvYmplY3RzLmAsIGBUaGVvcmV0aWNhbGx5LCB5b3UgYWxzbyBmZWVsIHRoYXQgeW91IG1pZ2h0IGJlIGFibGUgdG8gZ2l2ZSBsaXR0bGUgY29tbWFuZHMgdG8gbm9uLWh1bWFuIGFuaW1hbHMsIGFuZCwgaWYgeW91IGNvbmNlbnRyYXRlIGhhcmQsIGZpbGwgZHJlYW1zIG9mIHNsdW1iZXJpbmcgZm9sa3Mgd2l0aCBpbWFnZXMuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIG1ldGhvZE9mQ29udGFjdDIpXG5sZXQgbWV0aG9kT2ZDb250YWN0MSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYE5vdywgaG93IHRvIG1ha2UgY29udGFjdD9gLCBgSHVtYW5zIGNhbid0IHNlZSwgaGVhciBvciB0b3VjaCBTcGlyaXRzIGRpcmVjdGx5LmAsIGBTcGlyaXRzIGFyZSB0b2xkIHRvIGhhdmUgbWFnaWNhbCBhYmlsaXRpZXMuYCwgYFRoZSBvbmx5IGJlaW5ncyBpbiB0aGUgd29ybGQgdG8gaGF2ZSB0aGVtLCBhY3R1YWxseS5gLCBgVGhvc2Ugd291bGQgYmUgaGFuZHkgcmlnaHQgYWJvdXQgbm93LmAsIGBZb3UgdHJ5IHRvIGZlZWwgd2hhdCB5b3UgY2FuIGRvLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBtZXRob2RPZkNvbnRhY3QxYilcbmxldCBjaG9zZVBlY3VsaWFyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgQ2FwdGFpbiBQZWN1bGlhciBpcyB0aGUgb2J2aW91cyBjaG9pY2UuYCwgYEluIHJlYWxpdHksIHlvdSBrbm93IG5vdGhpbmcgYWJvdXQgdGhlc2UgcGVvcGxlJ3MgcGFzdHMsIHlldCB5b3UncmUgc3VwcG9zZWQgdG8gcGljayB3aGljaCBvbmUncyBtb3N0IHN1aXRhYmxlIHRvIGJlIHRoZSBDaG9zZW4gb2YgSnVzdGljZS5gLCBgV2hvJ3MgbW9yZSBsaWtlbHkgdG8gQkVMSUVWRSB0aGV5J3JlIENob3NlbiwgcmF0aGVyLmAsIGBQZWN1bGlhcidzIGluIGNoYXJnZSwgd2hpY2ggbWVhbnMgc2hlJ3MgcHJvYmFibHkgYWNjb21wbGlzaGVkIHRoZSBtb3N0LiBSaWdodD9gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgbWV0aG9kT2ZDb250YWN0MSlcbmxldCBjaG9zZVNuYXBkcmFnb24gPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2AxYCwgYDJgXSxcbiAgICB1bmRlZmluZWQsXG4gICAgbWV0aG9kT2ZDb250YWN0MSlcbmxldCBjaG9zZUx5c2FuZGVyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgMWAsIGAyYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIG1ldGhvZE9mQ29udGFjdDEpXG4vLyB3aGF0IGFyZSB0aGUgc3RvcmllcyBvZiBwZW9wbGUgdGFsa2luZyB0byBTcGlyaXRzPyBtb3N0bHkgc3Bpcml0cyBhY3RpbmcgbGlrZSBtZXNzZW5nZXJzIG9mIHRoZSBTdW5zLCBjaG9vc2luZyBodW1hbnMgYXMgdGhlaXIgY2hhbXBpb25zXG4vLyBJIG5lZWQgdG8gcHJvbW90ZSBKdXN0aWNlLCBoZW5jZSB0aGV5IG5lZWQgdG8gc2VlIG1lIGFzIGFuIGF1dGhvcml0eVxuLy8gSSdsbCB0ZWxsIHRoZW0gdGhhdCB0aGV5IGFyZSB0aGUgY2hvc2VuIG9uZSwgZm9yIHRoZW0gdG8gc2VlIG1lIGFzIGFuIGF1dGhvcml0eVxubGV0IHNwaXJpdEFwcGVhcjMgPSBuZXcgc3RvcnlFbGVtZW50KCdjaG9pY2UnLFxuICAgIFtgUXVlc3Rpb24gaXM6IHdobyB0byBhcHBlYXIgdG8/YCwgYFdobyBwb3J0cmF5cyB0aGUgaWRlYSBvZiBKdXN0aWNlIHRoZSBtb3N0PyBPciwgd2hvIHdvdWxkIEJFTElFVkUgdGhhdCB0aGV5IGFyZSB0aGUgQ2hvc2VuIG9mIEp1c3RpY2U/YCwgYFdobyBkbyB5b3UgbWFrZSB0aGUgQ2hvc2VuIG9uZT9gXSxcbiAgICBbe2Nob2ljZVRleHQ6IGBDYXB0YWluIFBlY3VsaWFyLCB0aGUgc2VyaW91cyBjb21tYW5kZXIgd2hvIHNlZW1zIHRvIGJlIGluIHR1bmUgd2l0aCBvdGhlcnM7IG5lZWRzLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnY2hvc2VuUGVjdWxpYXInLFxuICAgIGNob2ljZU5leHRTdG9yeTogY2hvc2VQZWN1bGlhcn0sXG4gICAge2Nob2ljZVRleHQ6IGBTbmFwZHJhZ29uLCBoaXMgZWFzeSBhbmQgbWlzY2hpZXZvdXMgc21pbGUgdGVsbHMgeW91IHRoYXQgaGUncyB0b28gZWdvdGlzdGljYWwgdG8gbm90IGJlbGlldmUgdGhhdCBoZSdzIHRoZSBDaG9zZW4gb25lLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnY2hvc2VuU25hcGRyYWdvbicsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBjaG9zZVNuYXBkcmFnb259LFxuICAgIHtjaG9pY2VUZXh0OiBgTHlzYW5kZXIuIEEgdHJ1ZSwgcmVzdGxlc3Mgd2FycmlvciB3aXRoIGltcGVjY2FibGUgY2FyZSBmb3IgdGhlaXIgZ2VhciBhbmQgdmlnaWxhbmNlIGluIHRoZWlyIGV5ZXMuYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdjaG9zZW5MeXNhbmRlcicsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBjaG9zZUx5c2FuZGVyfV0sXG4gICAgdW5kZWZpbmVkKSBcbmxldCBzcGlyaXRBcHBlYXIyYiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBub3cga25vdyB3aGF0IHlvdSBoYXZlIHRvIGRvLmAsIGBZb3UgaGF2ZSB0byBtYWtlIHlvdXIgZmlyc3QgY29udGFjdCBzZWVtIGFzIGxlZ2l0aW1hdGUgYXMgcG9zc2libGUuYCwgYE1ha2UgY29udGFjdCB3aXRoIG9uZSBvZiB0aGVtLCBhbmQgbWFrZSB0aGVtIGJlbGlldmUgdGhleSBhcmUgdGhlIENob3NlbiBvbmUuIENob3NlbiBvZiB0aGUgUGhvZW5peCBvZiBKdXN0aWNlLmAsIGBFdmVuIHRob3VnaCB5b3UgcmVhbGx5IGhhdmUgbm8gaWRlYSB3aGF0IHlvdSdyZSBkb2luZy5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgc3Bpcml0QXBwZWFyMylcbmxldCBzcGlyaXRBcHBlYXIyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgQSAnQ2hvc2VuIHdhcnJpb3InLmAsIGBUaGF0J3Mgd2hhdCB5b3UgbmVlZCB0byBkbyBpZiB5b3Ugd2FudCB0byBzZWVtIGxlZ2l0aW1hdGUgdG8gdGhlbS5gLCBgVGhhdCdzIHJpZ2h0IWAsIGBUaGUgdHJpbyB3b3VsZCBoYXZlIGhlYXJkIHRhbGVzIG9mIFNwaXJpdHMgdG9vLmAsIGBTbyBpZiB5b3UgcGljayBvbmUgb2YgdGhlbSwgd2hvZXZlciBzZWVtcyB0byBtb3N0IGZpdCB0aGUgaWRlYSBvZiBKdXN0aWNlLCBhbmQgc2xvd2x5IGJlY29tZSB0aGVpciBndWlkZSwgdGhlaXIgZGl2aW5lIG1lc3Nlbmdlci4uLmAsIGAuLi5UaGlzIHBlcnNvbiB3aWxsIGJlbGlldmUgdGhhdCB0aGV5J3JlIHRoZSBDaG9zZW4gb2YgSnVzdGljZS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgc3Bpcml0QXBwZWFyMmIpXG5sZXQgc3Bpcml0QXBwZWFyMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFRoaXMgaXMgYSBxdWVzdGlvbiwgYWN0dWFsbHkuYCwgYFNob3VsZCB5b3UgbWFrZSBjb250YWN0IHdpdGggb25lIG9mIHRoZW0sIG9yIHdpdGggYWxsIG9mIHRoZW0gYXQgb25jZT9gLCBgTGl0ZXJhbGx5IGV2ZXJ5IHRhbGUgYWJvdXQgU3Bpcml0cyBwb3J0cmF5ZWQgdGhlbSBhcyBndWlkZXMsIGRpdmluZSBtZXNzZW5nZXJzIG9mIHRoZSBQaG9lbml4ZXMuIFRoZSBHb2RzLmAsIGBUaGUgU3Bpcml0cyBvZiBteXRocyBhcHBlYXIgdG8gQ2hvc2VuIHdhcnJpb3JzLCB0aG9zZSB3aG8gc2hvd2VkIGRlZGljYXRpb24gdG8gdGhlIFNwaXJpdCdzIGNvbmNlcHQuYCwgYFRoZSBTcGlyaXQgd2lsbCBmaXJzdCBzaG93IHNpZ25zIHRvIHRoZSBDaG9zZW4gd2Fycmlvciwgc2lnbnMgdGhhdCB0aGUgd2FycmlvciBpcyBvbiB0aGUgcmlnaHQgcGF0aC5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgc3Bpcml0QXBwZWFyMilcbi8vIHdhdGNoaW5nIHRoZW1cbmxldCBzcGlyaXRXYXRjaDggPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BBbGwgdGhpcyBpbmZvcm1hdGlvbiB3aWxsIHN1cmVseSBiZSB1c2VmdWwgaWYgeW91IHdhbnQgeW91ciBmaXJzdCBnaG9zdGx5IGNvbnRhY3Qgd2l0aCB0aGUgdGhyZWUgdG8gYmUgc3VjY2Vzc2Z1bC5gLCBgWW91J3JlIGxpa2VseSB0byBoYXZlIG9uZSBzaG90IGF0IHRoaXMuYCwgYFlvdSBuZWVkIHRvIG1ha2UgY29udGFjdCB3aXRoIHRoZW0sIG9yIG9uZSBvZiB0aGVtLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBzcGlyaXRBcHBlYXIxKVxubGV0IHNwaXJpdFdhdGNoNyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBmZWVsIHlvdXJzZWxmIGdyb3dpbmcgd2Vha2VyLiBZb3UncmUgYWJvdXQgdG8gZGlzZWFwcGVhciBmcm9tIG5vdCBzZXJ2aW5nIHRoZSBQaG9lbml4IG9mIEp1c3RpY2UuYCwgYFlvdSBkaWQgbGVhcm4gYSBidW5jaCBhYm91dCB0aGUgdGhyZWUsIGhvd2V2ZXIuYCwgYFRoZWlyIG5hbWVzOiBDYXB0YWluIFBlY3VsaWFyLCBTbmFwZHJhZ29uIGFuZCBMeXNhbmRlci5gLCBgVGhlaXIgYWxsZWdpYW5jZTogdGhlIEFkdmVudHVyZXIncyBHdWlsZCwgYW5kIHdoYXQgdGhleSdyZSBkb2luZyBoZXJlOiBhbnN3ZXJpbmcgdGhlIE5ldyBEYXduIEVkaWN0LmAsIGBUaGUgbG9jYXRpb24gZml0cyAtIHRoZSBGb3Jlc3Qgb2YgTWlycm9ycywgd2hlcmUgeW91IGN1cnJlbnRseSBhcmUsIGlzIHRvIHRoZSBlYXN0IG9mIHRoZSBGYXRlZCBSZWFsbSdzIG1haW4gY2l0aWVzLiBCZXR3ZWVuIHRoZSBGYXRlZCBSZWFsbSBhbmQgdGhlIERlYWQgTGFuZHMuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHNwaXJpdFdhdGNoOClcbmxldCBzcGlyaXRXYXRjaDYgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgWyBgQWR2ZW50dXJlcidzIEd1aWxkIG1lbWJlcnMgdXN1YWxseSB0cmF2ZWwgYWxvbmUuIFRoZXkncmUgdGF1Z2h0IHRvIGJlIHNlbGYtc3VmZmljaWVudCwgYW5kIHRvIHBpY2sgY29udHJhY3RzIHN1aXRhYmxlIGZvciB0aGVpciBza2lsbCBsZXZlbHMuYCwgYFlldCB0aGVyZSBhcmUgdGhyZWUgb2YgdGhlbSBoZXJlLCBhbmQgdGhhdCBmaXRzIG9mIHRoaXMgJ05ldyBEYXduIEVkaWN0JyBmcm9tIENhcHRhaW4gUGVjdWxpYXIncyBkb2N1bWVudC5gLCAnVGhlIE5ldyBEYXduIEVkaWN0LicsIGBBY2NvcmRpbmcgdG8gdGhlIGRvY3VtZW50IHlvdSBzYXcgaW4gUGVjdWxpYXIncyBzYXRjaGVsLCBhbiBvcGVuIG1pc3Npb24gZnJvbSB0aGUgSGlnaGZhdGUgaGVyc2VsZiwgZm9yIEFkdmVudHVyZXJzIHRvIHZlbnR1cmUgaW50byB0aGUgRGVhZCBMYW5kcy5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgc3Bpcml0V2F0Y2g3KVxubGV0IHNwaXJpdFdhdGNoNSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBrbm93IG9mIHRoZSBBZHZlbnR1cmVyJ3MgR3VpbGQuYCwgYFlvdSBkb24ndCByZW1lbWJlciB5b3VyIHByZXZpb3VzIGxpZmUsIHdoZW4geW91J3ZlIGJlZW4sIHlvdSBhc3N1bWUsIGEgaHVtYW4uYCwgYEhvd2V2ZXIsIHlvdSBub3RpY2UgdGhhdCB5b3UgZG8gcmV0YWluIG1lbW9yaWVzIG9mIHRoZSBGYXRlZCBSZWFsbSwgaXRzIGN1bHR1cmUsIGxpa2Ugbmlja25hbWVzIGFuZCBvcmdhbml6YXRpb25zLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBzcGlyaXRXYXRjaDYpXG5sZXQgc3Bpcml0V2F0Y2g0ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWWVzLCBpdCBsb29rcyBsaWtlIHRoZSB0aHJlZSBiZWxvbmcgdG8gdGhlIEFkdmVudHVyZXIncyBHdWlsZC5gLCBgVGhlIEZhdGVkIFJlYWxtJ3MgQWR2ZW50dXJlcidzIEd1aWxkIGlzIGEgbG9vc2UgdW5pb24gb2Ygc2tpbGxlZCBmaWdodGVycy5gLCBgVGhleSB0cmF2ZWwgdGhlIEZhdGVkIFJlYWxtLCB1c3VhbGx5IGFsb25lLCB0YWtpbmcgb24gY29udHJhY3RzIGZyb20gcGVvcGxlIHRvIGFzc2lzdCB3aXRoIHdpbGQgY3JlYXR1cmVzLCBiYW5kaXRzLCBvciBzdHJheSB1bmRlYWQgdGhhdCBtaWdodCBoYXZlIHdhbmRlcmVkIGludG8gdGhlIFJlYWxtJ3MgZWFzdGVybiByZWdpb25zIGZyb20gdGhlIERlYWQgTGFuZHMuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHNwaXJpdFdhdGNoNSlcbmxldCBzcGlyaXRXYXRjaDMgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BUaGUgbGFzdCBwZXJzb24sIGFuZHJvZ3lub3VzLWxvb2tpbmcsIHdpdGggc2hvdWxkZXIgbGVuZ3RoIHJlZCBoYWlyLCBpcyBMeXNhbmRlci5gLCBgVGhleSB3ZWFyIHRoZSBoZWF2aWVzdCBhcm1vciBhbmQgc2VlbSB0byBiZSB0aGUgd2VhcG9ucyBzcGVjaWFsaXN0IG9mIHRoZSB0aHJlZS5gLCBgTHlzYW5kZXIncyBhcm1vciBpcyBwZXJmZWN0bHkgbWFpbnRhaW5lZCwgZXZlbiBpbiB0aGlzIHdlYXRoZXIuIFNvIHdlbGwsIGluIGZhY3QsIHRoYXQgdGhleSBhcmUgZXZlbiB3ZWFyaW5nIHRoZWlyIG9mZmljaWFsIEFkdmVudHVyZXIncyBMZWFndWUgYmFkZ2UgLSBnaXZpbmcgeW91IGEgY2hhbmNlIHRvIHJlYWQgdGhlaXIgZnVsbCBuYW1lIC0gTHlzYW5kZXIgTWFjQXBwbGVieSwgb2YgdGhlIEFkdmVudHVyZXIncyBHdWlsZC5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgc3Bpcml0V2F0Y2g0KVxubGV0IHNwaXJpdFdhdGNoMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFwiUGVjdWxpYXJcIiBpcyBwcm9iYWJseSBhIG5pY2tuYW1lLiBOaWNrbmFtZXMgYXJlIGNvbW1vbiBpbiB0aGUgRmF0ZWQgUmVhbG0uYCwgYFRoZSBsb25nLWhhaXJlZCBtYW4gaXMgUGVjdWxpYXIncyB5b3VuZ2VyIGJyb3RoZXIsIFNuYXBkcmFnb24sIG9yIFNuYXAuYCwgYEhlIHNlZW1zIHRvIGJlIHRoZSBtb3N0IHVuY29tZm9ydGFibGUgaGVyZSBpbiB0aGUgZnJvemVuIHdpbGRlcm5lc3MuYCwgYFBlcmhhcHMgdGhhdCdzIGp1ZGdtZW50YWwsIGJ1dCB5b3UgYXNzdW1lIHRoYXQgaGUncyBoYXBwaWVyIGFuZCBtb3JlIHJlc291cmNlZnVsIGluIGEgYnVzdGxpbmcgY2l0eS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgc3Bpcml0V2F0Y2gzKVxubGV0IHNwaXJpdFdhdGNoMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBkZWNpZGUgdG8gYmUgbWV0aG9kaWNhbCBpbiBob3cgeW91IGFwcHJvYWNoIHRoZW0uYCwgYEFmdGVyIGFsbCwgaWYgeW91IGJvdGNoIHlvdXIgb25lIGNoYW5jZSB0byBtYWtlIGNvbnRhY3QsIHRoZXJlIG1pZ2h0IG5vdCBiZSBhbnkgb3RoZXIgcGVvcGxlIGFyb3VuZCB0byBwcmVhY2ggSnVzdGljZSB0bywgYW5kIHlvdSB3aWxsIGRpc2FwcGVhci5gLCBgWW91IGNhbid0IHRha2UgdGhhdCBjaGFuY2UsIHNvIHlvdSB3YXRjaCB0aGUgdHJpbyBmb3IgYW5vdGhlciBob3VyIG9yIHNvLmAsIGBZb3UgbGVhcm4gdGhhdCB0aGUgb25lIHlvdSBhc3N1bWVkIHRvIGJlIGluIGNoYXJnZSBpcyBDYXB0YWluIFBlY3VsaWFyLiBBIHNlcmlvdXMgd29tYW4gd2l0aCBvbGl2ZSBza2luIGFuZCBkYXJrIGhhaXIgd2hvJ3MgYWx3YXlzIHBheWluZyBhdHRlbnRpb24gdG8gaGVyIHR3byBjb21wYW5pb25zLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBzcGlyaXRXYXRjaDIpXG4vLyBjaG9pY2U6IHdhdGNoIHRoZW0gZm9yIGEgd2hpbGUgdG8gbWFrZSBhIGJldHRlciBzZWxlY3Rpb24gYnV0IGJlY29tZSB3ZWFrZXIsIG9yIGNob29zZSBub3dcbmxldCBjYW1wVmliZXM2ID0gbmV3IHN0b3J5RWxlbWVudCgnY2hvaWNlJyxcbiAgICBbYFlvdSBmZWVsIHlvdXIgdmlzaW9uIGdldHRpbmcgZXZlbiBibHVycmllci4gRmxvYXRpbmcgaXMgaGFyZGVyIGFuZCBoYXJkZXIgd2l0aCBlYWNoIHBhc3NpbmcgbWludXRlLmAsIGBZb3UgbmVlZCB0byBtYWtlIGNvbnRhY3QsIHRvIHByb21vdGUgdGhlIGlkZWEgb2YgSnVzdGljZSB0byB0aGVtLCBvciB0byBvbmUgb2YgdGhlbSwgb3IgeW91J2xsIGRpc2FwcGVhci5gLCBgWW91J3JlIG5vdCBzdXJlIHdoYXQgaGFwcGVucyB0byBTcGlyaXRzIGlmIHRoZXkgZGlzYXBwZWFyIHdpdGhvdXQgcGVyZm9ybWluZyB0aGVpciBmdW5jdGlvbi5gLCBgWW91IGhhdmUgdG8gbWFrZSBhIGRlY2lzaW9uLiBEbyB5b3UgdHJ5IHRvIHVzZSB5b3VyIGFiaWxpdGllcyB0byBtYWtlIGNvbnRhY3Qgd2l0aCBvbmUgb2YgdGhlbT8gT3IgZG8geW91IHdhaXQsIGFuZCBrZWVwIHdhdGNoaW5nP2BdLFxuICAgIFt7Y2hvaWNlVGV4dDogYEkgd2lsbCB3YWl0LCBhbmQga2VlcCB3YXRjaGluZy4gSSBuZWVkIHRvIGdhdGhlciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSB0aHJlZSBiZWZvcmUgSSBjYW4gZWZmZWN0aXZlbHkgY29tbXVuaWNhdGUuYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6IG51bGwsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBzcGlyaXRXYXRjaDF9LFxuICAgIHtjaG9pY2VUZXh0OiBgSSBuZWVkIHRvIG1ha2UgY29udGFjdC4gSSBjYW4gZmVlbCB0aGF0IEkgYW0gZGlzYXBwZWFyaW5nIGFuZCBJJ2xsIG9ubHkgZ2V0IHdlYWtlciB3aXRoIGVhY2ggd2FzdGVkIG1pbnV0ZS5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogbnVsbCxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IHNwaXJpdEFwcGVhcjF9XSxcbiAgICB1bmRlZmluZWQpIFxuLy8gVklCRVMgT0YgVEhFIENBTVBcbmxldCBjYW1wVmliZXM1ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgXCJSZWFkaW5nIHRoZSBlZGljdCBhZ2Fpbiwgc2lzdGVyP1wiIGEgdm9pY2Ugc2F5cyBhcyB0aGUgc2Vjb25kIG1hbiwgdGhlIG9uZSB3aXRoIHRoZSBsb25nIGhhaXIgYW5kIHRoZSBlYXN5IHNtaWxlLCBzY29vdHMgb3ZlciBjbG9zZXIgdG8gdGhlIGNvbW1hbmRlci5gLCBgXCJEbyB5b3UgbmVlZCBhbnl0aGluZywgU25hcD9cIiB0aGUgd29tYW4gcmVzcG9uZHMsIGlnbm9yaW5nIGhpcyBjb21tZW50LiBUaGVyZSdzIGEgaGludCBvZiBjb25jZXJuIGluIGhlciB2b2ljZS5gLCBgXCJOYWgsIEknbSBmaW5lLiBBcyBmaW5lIGFzIEkgY2FuIGJlLFwiIFNuYXAgY2h1Y2tsZXMgYW5kIHRoZSBzaG9ydCBleGNoYW5nZSBpcyBvdmVyLlwiYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGNhbXBWaWJlczYpXG5sZXQgY2FtcFZpYmVzNCA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFRoZSBjb21tYW5kZXIgcHV0cyBiYWNrIHRoZSBkb2N1bWVudCwgYnV0IHlvdSBkaWQgbWFuYWdlIHRvIHJlYWQgYSBsaXR0bGUuYCwgYFRoZSBkb2N1bWVudCBkZXNjcmliZWQgc29tZXRoaW5nIGNhbGxlZCB0aGUgTmV3IERhd24gRWRpY3QuYCwgYEFuIG9wZW4gY2FsbCwgYSBtaXNzaW9uLCBmcm9tIHRoZSBIaWdoZmF0ZSBmb3IgYW55IGFkdmVudHVyZXIgdG8gYW5zd2VyLmAsIGBCZWZvcmUgdGhlIGNvbW1hbmRlciBwdXQgYXdheSB0aGUgZG9jdW1lbnQsIHlvdSBtYW5hZ2VkIHRvIHNlZSB0aGF0IHRoZSBtaXNzaW9uIG9mIHRoZSBOZXcgRGF3biBFZGljdCBpbnZvbHZlcyB0cmF2ZWxpbmcgdG8gdGhlIERlYWQgTGFuZHMgLSBsYW5kIG9mIHVuZGVhZCBhbmQgbm9tYWRpYyBuZWNyb21hbmNlcnMgYmV5b25kIHRoZSBlYXN0ZXJuIGJvcmRlciBvZiB0aGUgRmF0ZWQgUmVhbG0uYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGNhbXBWaWJlczUpXG5sZXQgY2FtcFZpYmVzMyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYEx1Y2tpbHkgZm9yIHlvdSwgdGhlIGNvbW1hbmRlciBkZWNpZGVzIHRvIHJldHJpZXZlIHRoZSBwaWVjZSBvZiBwYXBlciwgYW5kIHN0YXJ0cyB0byByZWFkIGl0LmAsIGBZb3UgcXVpY2tseSBmbG9hdCBvdmVyIGJlaGluZCBoZXIgc2hvdWxkZXIsIHJlYWRpbmcgdGhlIHBhcGVyIHRvIHRyeSB0byBmaW5kIG91dCBtb3JlIGFib3V0IHRoZSB0aHJlZS5gLCBgRmxvYXRpbmcgY2xvc2VyIHRvIHRoZSBjb21tYW5kZXIsIHlvdSBnZXQgYSBiZXR0ZXIgbG9vayBhdCBoZXIgZmFjZS5gLCBgU2hlJ3MgaW4gaGVyIGVhcmx5IDQwJ3MuIE9saXZlIHNraW4sIGRhcmsgaGFpciwgc29sZW1uLCBleGhhdXN0ZWQsIGluLWNoYXJnZSBleHByZXNzaW9uLiBDaWdhcmV0dGUgYnV0dHMgaW4gYSBzbWFsbCBnYXJiYWdlIHNhY2sgbmVhciBoZXIuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGNhbXBWaWJlczQpXG5sZXQgY2FtcFZpYmVzMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFRoZSB0cmlvIGtlZXAgc2l0dGluZyBuZWFyIHRoZSBmaXJlLmAsIGBZb3Ugbm90aWNlIHRoYXQgdGhlIGZpcnN0IHdvbWFuLCB0aGUgY29tbWFuZGVyLCBoYXMgYSBwaWVjZSBvZiBwYXBlciBzdGlja2luZyBvdXQgb2YgaGVyIHJ1Y2tzYWNrLmAsIGBUaGUgcGllY2Ugb2YgcGFwZXIgYmVhcnMgdGhlIHNlYWwgb2YgdGhlIEhpZ2hmYXRlLCB0aGUgbGVhZGVyIGFuZCBwcm90ZWN0b3Igb2YgdGhlIEZhdGVkIFJlYWxtcy5gLCBgV2hvZXZlciwgdGhlc2UgdGhyZWUgYXJlLCB0aGV5J3JlIG5vdCBvbmx5IGFybWVkLCBidXQgb24gb2ZmaWNpYWwgYnVzaW5lc3MsIGl0IHNlZW1zLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBjYW1wVmliZXMzKVxubGV0IGNhbXBWaWJlczEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgbGluZ2VyIG5lYXIgdGhlaXIgY2FtcCwgd2F0Y2hpbmcgdGhlIHRyaW8gZnJvbSBkaWZmZXJlbnQgYW5nbGVzLmAsIGBUaGUgcmVhbGl0eSBvZiB5b3VyIG5ldyBjb25kaXRpb24gaXMgc2xvd2x5IHNldHRpbmcgaW4uIExpa2UgYmVmb3JlLCB0aGUgdHJpbyBkb24ndCBoZWFyIHlvdSwgZG9uJ3Qgc2VlIHlvdSwgYW5kIGNhbid0IHRvdWNoIHlvdS5gLCBgWW91IHB1c2ggdGhlc2UgdGhvdWdodHMgYXdheS4gWW91J3JlIGFsaXZlLiBJbiBhIG5ldyBmb3JtLiBXaXRoIGEgbmV3IG1pc3Npb24gb2YgSnVzdGljZS5gLCBgQnV0IGFsaXZlLiBBbmQgdG8gc3RheSBhbGl2ZSwgeW91IG5lZWQgdGhlc2UgcGVvcGxlLiBZb3UgbmVlZCB0aGVtIHRvIGVtYnJhY2UgSnVzdGljZS5gLCBgVGhlIG1vb2QgaW4gdGhlIGNhbXAgaXMgc29sZW1uLCBidXQgZGV0ZXJtaW5lZC4gUGVyaGFwcyB0aGlzIGlzIHRvIGJlIGV4cGVjdGVkLCBjb25zaWRlcmluZyB0aGUgc3Vycm91bmRpbmdzIGFuZCB0aGUgd2VhdGhlci5gLCBgVGhlIEZvcmVzdCBvZiBNaXJyb3JzIGlzIGFuIHVuZm9yZ2l2aW5nIHBsYWNlIGluZGVlZC5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgY2FtcFZpYmVzMilcbi8vIERFU0NSSVBUSU9OUyBPRiBUSEUgVEhSRUVcbmxldCBseXNhbmRlckRlc2NyaXB0aW9uID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgVGhlIGxhc3QgcGVyc29uIGFyb3VuZCB0aGUgY2FtcGZpcmUgaXMgYSBmaWd1cmUgd2l0aCBzaG91bGRlci1sZW5ndGggcmVkIGhhaXIuYCwgYFRoZXkgbG9vayBsaWtlIHRoZSB5b3VuZ2VzdCBvZiB0aGUgdHJpbywgcGVyaGFwcyBpbiB0aGVpciBsYXRlIDIwJ3MuYCwgYERlc3BpdGUgdGhhdCwgdGhleSBjYXJyeSB0aGVtc2VsdmVzIHdpdGggdGhlIHBvaXNlIG9mIGEgc2Vhc29uZWQgd2Fycmlvci4gVGhleSBhcHBlYXIgaW5jcmVkaWJseSB2aWdpbGFudCwgYXMgaWYgYXdhaXRpbmcgYSBjb21tYW5kLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBjYW1wVmliZXMxKVxubGV0IHNuYXBEZXNjcmlwdGlvbiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFRvIGhlciByaWdodCBpcyBhIG1hbiB3aXRoIGxvbmcgaGFpciBmcmFtaW5nIGhpcyBmYWNlLiBIZSBzZWVtcyB0byBiZSBpbiBoaXMgZWFybHkgMzAncy5gLCBgSGlzIGRlbWVhbm9yIGlzIGNoYXJtaW5nLCBoaXMgc21pbGUgZWFzeSwgaW52aXRpbmcgd2l0aCBhIGhpbnQgb2YgbWlzY2hpZWYuYCwgYFRoZXJlJ3MgYSBzZW5zZSBvZiByZXN0bGVzc25lc3MgYWJvdXQgaGltLCBhcyBpZiBoZSdzIGNvbnN0YW50bHkgc2Vla2luZyBzb21ldGhpbmcganVzdCBvdXQgb2YgcmVhY2guYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGx5c2FuZGVyRGVzY3JpcHRpb24pXG5sZXQgcGVjdWxpYXJEZXNjcmlwdGlvbiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYERlc3BpdGUgdGhlIGJpdGluZyBjb2xkIG9mIHRoZSBibGl6emFyZCwgc2hlIHNpdHMgd2l0aCBhIHNlbnNlIG9mIGNvbnRyb2wsIGhlciBwb3N0dXJlIHJpZ2lkLmAsIGBTaGUgc2VlbXMgdG8gYmUgaW4gaGVyIGVhcmx5IDQwJ3MuIEhlciBmYWNlIGJlYXJzIHRoZSBtYXJrcyBvZiBoYXJkc2hpcCwgd2l0aCBsaW5lcyBldGNoZWQgZGVlcGx5IGFyb3VuZCBoZXIgZXllcyBhbmQgbW91dGguYCwgYFR3byBzY2ltaXRhcnMgYW5kIGEgbXVza2V0IGFyZSByZXN0aW5nIG5leHQgdG8gaGVyLiBKdWRnaW5nIGJ5IGhlciBvdXRmaXQsIHNoZSBzZWVtcyB0byBiZSB0aGUgb25lIGluIGNoYXJnZS5gLCBgRGVzcGl0ZSBoZXIgb3V0d2FyZCBhcHBlYXJhbmNlIG9mIHN0b2ljaXNtLCB5b3Ugc2Vuc2UgYSBkZWVwLXNlYXRlZCBmYXRpZ3VlLCBhcyBpZiBzaGUncyB0aXJlZCBvZiBhbHdheXMgYmVpbmcgdGhlIG9uZSBpbiBjaGFyZ2UuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHNuYXBEZXNjcmlwdGlvbilcbmxldCBhcHByb2FjaENhbXBLbm93NCA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFRoZSB0aHJlZSBwZW9wbGUgYXJlIGFybWVkIC0geW91IHNlZSBtdXNrZXRzIGFuZCBzd29yZHMgbmV4dCB0byB0aGVtLiBUaGV5IGxvb2sgbGlrZSBzb2xkaWVycywgbWVyY2VuYXJpZXMsIG9yIGd1YXJkcyBvZiBzb21lIHNvcnQuYCwgYEl0J3Mga2luZCBvZiBjYWxtaW5nIC0gdG8gZmluYWxseSBzZWUgc29tZSBodW1hbnMuYCwgYERlc3BpdGUgdGhlIGZhY3QgdGhhdCBpdCdzIHRvbyBsYXRlIGZvciB5b3UuYCwgYE5vLCBzdG9wIGl0LiBJdCdzIG5vdCB0b28gbGF0ZS4gWW91J3ZlIGRpZWQsIGJ1dCB5b3UncmUgbm90IGRlYWQuIFlvdSdyZSBhIFNwaXJpdC4gQW5kIHlvdSBjYW4gc3Vydml2ZS5gLCBgVGhlIGZpcnN0IHdvbWFuIGh1ZGRsZXMgYnkgdGhlIGNhbXBmaXJlLCB0aGUgb2xpdmUgc2tpbiBvZiBoZXIgZmFjZSBnbG93aW5nIHNvZnRseSBpbiB0aGUgZmlyZWxpZ2h0LmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBwZWN1bGlhckRlc2NyaXB0aW9uKVxuLy8gRklORCBUSEUgQ0FNUCAoRE9OJ1QgS05PVylcbmxldCBkb250S25vd1JlYWxpemU3ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgVGhlbiB5b3UgcmVtZW1iZXIgdGhhdCBTcGlyaXRzIGFyZSB0aGUgb25seSBiZWluZ3MgaW4gdGhlIHdvcmxkIHdobyBoYXZlIG1hZ2ljYWwgYWJpbGl0aWVzLiBObyBodW1hbiBvciBhbmltYWwgcG9zc2Vzc2VzIHRoZW0uYCwgYFRvIHByb21vdGUgdGhlaXIgY29uY2VwdHMsIFNwaXJpdHMgaGF2ZSB0aGUgYWJpbGl0aWVzIHRvIGFmZmVjdCB0aGUgbWF0ZXJpYWwgd29ybGQgaW4gZ2hvc3RseSB3YXlzLiBUaGUgbW9yZSBwb3dlcmZ1bCB0aGUgU3Bpcml0LCB0aGUgbW9yZSBzdWJzdGFudGlhbCB0aGUgZWZmZWN0cy5gLCBgWW91IGNhbid0IHRvdWNoIG9yIHRhbGsgdG8gdGhlc2UgcGVvcGxlLCBidXQgeW91IGhhdmUgdG8gc3RhcnQgc29tZXdoZXJlLiBTdGFydCBwcm9tb3RpbmcgSnVzdGljZSwgb3IgeW91J2xsIGRpc2FwcGVhci5gLCBgRmlyc3Qgb2YgYWxsLCB3aG8gYXJlIHRoZXNlIHBlb3BsZT9gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgYXBwcm9hY2hDYW1wS25vdzQpXG5sZXQgZG9udEtub3dSZWFsaXplNiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFdlbGwsIHRoZXJlIGFyZSBwZW9wbGUgcmlnaHQgaGVyZS5gLCBgVG8ga2VlcCBnb2luZywgeW91IHRlbGwgeW91cnNlbGYgLSBcIkknbSBub3QgZGVhZFwiLmAsIGBcIkkgZGllZCwgYnV0IEknbSBub3QgZGVhZC5cImAsIGBXaG9ldmVyIHlvdSB3ZXJlIGluIGxpZmUsIHlvdSBkaWQgZW5vdWdoIGZvciB0aGUgUGhvZW5peCBvZiBKdXN0aWNlIHRvIG1ha2UgeW91IGEgU3Bpcml0IG9mIEp1c3RpY2UuYCwgYFlvdSdyZSBub3QgZGVhZC4gWW91J3JlIGFibGUgdG8gdGhpbmsgYW5kIHRvIHNlZS5gLCBgWW91IGV4aXN0LiBJbiBhIGRpZmZlcmVudCBmb3JtIG5vdy4gQW5kIHlvdSBjYW4gc3RpbGwgc2F2ZSB5b3Vyc2VsZiwgc2F2ZSB5b3VyIG5ldyBmb3JtLmAsIGBZb3UganVzdCBoYXZlIHRvIGRvIHlvdXIgam9iIGFuZCBwcm9tb3RlIEp1c3RpY2UuYCwgYFlvdSdyZSBub3Qgc3VyZSBob3cgeW91J3JlIHN1cHBvc2VkIHRvIGRvIGl0LCBjb25zaWRlcmluZyB0aGF0IHRoZXNlIHBlb3BsZSBjYW4ndCBoZWFyIHlvdS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZG9udEtub3dSZWFsaXplNylcbmxldCBkb250S25vd1JlYWxpemU1ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgUmlnaHQuIFNvIHlvdSBtdXN0IGJlIGEgU3Bpcml0IG9mIGEgUGhvZW5peCBvZiBKdXN0aWNlLiBPZiBhIFN1bi4gT2YgdGhlIEdvZCBvZiBKdXN0aWNlLmAsIGBJdCdzIHByZXR0eSBtdWNoIGNvbW1vbiBrbm93bGVkZ2UgdGhhdCBTcGlyaXRzIGV4aXN0IHRvIGZ1cnRoZXIgcHJvbW90ZSB0aGUgY29uY2VwdCwgb3IgcG9ydGZvbGlvLCBvZiB0aGVpciBQaG9lbml4LmAsIGBJZiB0aGV5IGZhaWwgdG8gcHJvbW90ZSB0aGVpciBjb25jZXB0LCB0aGUgU3Bpcml0IGRpc2FwcGVhcnMuIERpZXMsIGZvcmV2ZXJgLCBgT2gsIEdvZHMsIGlzIHRoYXQgd2h5IHlvdSd2ZSBiZWVuIGZlZWxpbmcgd2Vha2VyIGFuZCB3ZWFrZXIhP2AsIGBZb3UgcmlzZSB0byB5b3VyICdmZWV0JywgaW4gcGFuaWMgYWdhaW4uIFdpdGhvdXQgcHJvbW90aW5nIHRoZSBpZGVhIG9mIEp1c3RpY2UgdG8gc29tZWJvZHksIHlvdSdsbCBkaXNhcHBlYXIuIEFuZCBzb29uLCB5b3VyIGJvZHkgZmVlbHMgaXQuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGRvbnRLbm93UmVhbGl6ZTYpXG5sZXQgZG9udEtub3dSZWFsaXplNCA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Nob2ljZScsXG4gICAgW2BcIk15IFBob2VuaXhcIi4gVGhhdCdzIHJpZ2h0LmAsYFlvdSdyZSBhIFNwaXJpdCwgYW4gRW52b3kgb2YgYSBQaG9lbml4LmAsIGBJdCBtZWFucyB0aGF0IGluIGxpZmUsIHlvdSBtdXN0IGhhdmUgd29yc2hpcHBlZCBvbmUgb2YgdGhlIDIwIFN1bnMsIG9yIFBob2VuaXhlcywgaG93IHRoZXkncmUgYWxzbyBjYWxsZWQuIERvbmUgZW5vdWdoLCBpbiBmYWN0LCB0byBoYXZlIGJlZW4gbWFkZSBhIFNwaXJpdCBvZiB0aGF0IFN1bi5gLCBgV2h5IGlzIGl0IHNvIGhhcmQgdG8gcmVjYWxsIHRoZSBkZXRhaWxzIG9mIHlvdXIgbGlmZT9gLCBgWW91IGNvbmNlbnRyYXRlIGFnYWluLCBzaXR0aW5nIHRoZXJlIGluIHRoZSBzbm93LmAsIGBTbm93Zmxha2VzIGZhbGwgcmlnaHQgdGhyb3VnaCB5b3UuIEhvdyBkaWQgeW91IG5vdCBub3RpY2UgdGhhdD8gUGVyaGFwcyBmcm9tIHRoZSBwYW5pYywgYW5kIGZyb20geW91ciByYWJpZCBzZWFyY2ggZm9yIGhlbHAuYCwgYCdXaGljaCBTdW4gZGlkIEkgd29yc2hpcCBpbiBsaWZlPycgWW91IHRoaW5rLmBdLFxuICAgIFt7Y2hvaWNlVGV4dDogYFRoZSBQaG9lbml4IG9mIENvbXBhc3Npb24uYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdjb21wYXNzaW9uU3Bpcml0JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGRvbnRLbm93UmVhbGl6ZTV9LFxuICAgIHtjaG9pY2VUZXh0OiBgVGhlIFBob2VuaXggb2YgSnVzdGljZS5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ2p1c3RpY2VTcGlyaXQnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZG9udEtub3dSZWFsaXplNX0sXG4gICAge2Nob2ljZVRleHQ6IGBUaGUgUGhvZW5peCBvZiBGcmVlZG9tLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnZnJlZWRvbVNwaXJpdCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBkb250S25vd1JlYWxpemU1fSxcbiAgICB7Y2hvaWNlVGV4dDogYFRoZSBQaG9lbml4IG9mIE1hc3RlcnkuYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdtYXN0ZXJ5U3Bpcml0JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGRvbnRLbm93UmVhbGl6ZTV9LFxuICAgIHtjaG9pY2VUZXh0OiBgVGhlIFBob2VuaXggb2YgV2lzZG9tLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnd2lzZG9tU3Bpcml0JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGRvbnRLbm93UmVhbGl6ZTV9XSxcbiAgICB1bmRlZmluZWQpIFxubGV0IGRvbnRLbm93UmVhbGl6ZTMgPSBuZXcgc3RvcnlFbGVtZW50KCdjaG9pY2UnLFxuICAgIFtgWW91IGRvbid0IGtub3cgZW5vdWdoIGFib3V0IHRoZW0uIFlvdSB3b25kZXIgd2hhdCBraW5kIG9mIFNwaXJpdCB5b3UgYXJlLmAsIGBZb3UgY2xvc2UgeW91ciBub24tZXhpc3RlbnQgZXllcy4gVGhlIGFuc3dlciBpcyB3aXRoaW4geW91LCB5b3UganVzdCBoYXZlIHRvIGZlZWwgaXQuYF0sXG4gICAgW3tjaG9pY2VUZXh0OiAnSSBhbSBhIFdyYWl0aCwgYSBzcGlyaXQgdGhhdCBicmluZ3MgcHVuaXNobWVudCB0byB0aG9zZSB3aG8gd3JvbmcgbXkgUGhvZW5peC4nLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ2NsYXNzV3JhaXRoJyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGRvbnRLbm93UmVhbGl6ZTR9LFxuICAgIHtjaG9pY2VUZXh0OiAnSSBhbSBhIFBvbHRlcmdlaXN0LiBXYXRjaGVyLCBzZWVyLCBzdWJ0bGUgbWFzdGVybWluZCBpbiB0aGUgc2VydmljZSBvZiBteSBQaG9lbml4LicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnY2xhc3NQb2x0ZXJnZWlzdCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBkb250S25vd1JlYWxpemU0fSxcbiAgICB7Y2hvaWNlVGV4dDogJ0kgYW0gYSBHdWFyZGlhbiBTcGlyaXQsIEkgZXhpc3QgdG8gZ3VpZGUgYW5kIHByb3RlY3QgdGhvc2Ugd2hvIGZvbGxvdyBteSBQaG9lbml4LicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnY2xhc3NHdWFyZGlhblNwaXJpdCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBkb250S25vd1JlYWxpemU0fV0sXG4gICAgdW5kZWZpbmVkKVxubGV0IGRvbnRLbm93UmVhbGl6ZTIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgbXVzdCBiZSBhIFNwaXJpdC5gLCBgUGVvcGxlIHdobyBkaWQgYSBsb3QgaW4gdGhlIHNlcnZpY2Ugb2YgYSBQaG9lbml4IHJlaW5jYXJuYXRlIGludG8gU3Bpcml0cyB3aGVuIHRoZXkgZGllLmAsIGBUaGVyZSBhcmUgZGlmZmVyZW50IGtpbmRzIG9mIFNwaXJpdHMsIHlvdSdyZSBwcmV0dHkgc3VyZS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZG9udEtub3dSZWFsaXplMylcbmxldCBkb250S25vd1JlYWxpemUxID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IHNpdCB0aGVyZSBmb3IgYSBtb21lbnQuIFlvdSBzdGFyZSBhdCB0aGUgdGhyZWUsIHRoZW4geW91IHN0YXJlIGF0IHRoZWlyIGZpcmUsIG1pbmQgY29tcGxldGVseSBibGFuay5gLCBgWW91J3JlIGRlYWQuYCwgYFlvdSdyZSBjb25zY2lvdXMsIGhvd2V2ZXIuIFlvdSBoYXZlIHRvIGJlIGEgU3Bpcml0LCByaWdodD9gLCBgWW91IGNvbmNlbnRyYXRlIC0gd2hhdCBkbyB5b3Uga25vdyBvZiBTcGlyaXRzP2AsIGBXaGVuIHBlb3BsZSBkaWUsIHRoZXkgcmVpbmNhcm5hdGUgaW50byBhbmltYWxzLiBXaGVuIGFuaW1hbHMgZGllLCB0aGV5IHJlaW5jYXJuYXRlIGludG8gcGVvcGxlLmAsIGBIb3dldmVyLCBpZiB0aGUgZHlpbmcgcGVyc29uIGhhZCBkb25lIGVub3VnaCBpbiB0aGUgd29yc2hpcCBvZiBvbmUgb2YgdGhlIDIwIFN1bnMsIHRoZXkgcmVpbmNhcm5hdGUgaW50byBhIFNwaXJpdC5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZG9udEtub3dSZWFsaXplMilcbmxldCBkb250S25vd1dhdGNoNSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYEEgbGl0dGxlIHdoaWxlIGxhdGVyLCB5b3UgYXJlIHNpdHRpbmcgbm90IGZhciBmcm9tIHRoZSB0aHJlZSBwZW9wbGUncyBjYW1wLCBqdXN0IGJlaGluZCB0aGVpciBiYWNrcy5gLCBgQ2xvc2UgZW5vdWdoIHRvIHNlZSB0aGUgZmlyZSwgeWV0IHlvdSBzdGlsbCBkb24ndCBmZWVsIGl0J3Mgd2FybXRoLmAsIGBUaGUgZW1icmFjZSBvZiBkZWF0aCBpcyB0b28gY29sZC5gLCBgWW91IHRyaWVkIGNhbGxpbmcgb3V0IHRvIHRoZW0sIG9yIHRvdWNoaW5nIHRoZW0uIFRoZXkgY2FuJ3Qgc2VlIG9yIGhlYXIgeW91LmAsIGBCeSBub3csIHlvdXIgcmVhbGl0eSBpcyBpcnJlZnV0YWJsZS5gLCBgWW91IGRpZG4ndCB3YWtlIHVwIGluIHRoZSBGb3Jlc3Qgb2YgTWlycm9ycy5gLCBgWW91IGRpZWQgaGVyZS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZG9udEtub3dSZWFsaXplMSlcbmxldCBkb250S25vd1dhdGNoNCA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdXIgbWluZCByYWNlcywgcGFuaWNraW5nLiBUaGVyZSBhcmUgcGVvcGxlIHJpZ2h0IGhlcmUhIFBlb3BsZSB3aG8gbWlnaHQgaGVscCEgWW91IG1hZGUgaXQsIHlvdSBzYXZlZCB5b3Vyc2VsZiEgU28gd2hhdCB0aGUgaGVsbCBpcyB3cm9uZz9gLCBgWW91ciBtaW5kIHNsb3dseSBhY2NlcHRzIHdoYXQgaXQgaGFzIGJlZW4gdHJ5aW5nIHRvIGlnbm9yZSBmb3IgYWxsIHRoaXMgdGltZS5gLCBgWW91IHBhc3MgdGhyb3VnaCBzb2xpZCBvYmplY3RzLmAsIGBZb3UgZG9uJ3QgZmVlbCB0aGUgY29sZC5gLCBgWW91IGRvbid0IHJlbWVtYmVyIGFueXRoaW5nIGFib3V0IHlvdXIgbGlmZS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZG9udEtub3dXYXRjaDUpXG5sZXQgZG9udEtub3dXYXRjaDMgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgbGVhbiBvbiB0aGUgdHJlZSBhbmQgc3F1aW50LCB0cnlpbmcgdG8gbWFrZSBhbnl0aGluZyBvdXQsIHdoZW4gc29tZXRoaW5nIHVuZXhwZWN0ZWQgaGFwcGVucy5gLCBgQXMgeW91IGdvIHRvIGxlYW4gb24gdGhlIHRyZWUsIHlvdXIgaGFuZCBwYXNzZXMgcmlnaHQgdGhyb3VnaCBpdCwgZGlzYXBwZWFyaW5nIGludG8gdGhlIGJhcmsuYCwgYFlvdSBpbnN0aW5jdGl2ZWx5IGxlYXAgYmFjay4gWW91IGFwcHJvYWNoIHRoZSB0cmVlIGFnYWluLCB0cnlpbmcgdG8gdG91Y2ggaXQgb25jZSBtb3JlLmAsIGBUaGUgcmVzdWx0IGlzIHRoZSBzYW1lLiBZb3VyIGhhbmQgcGFzc2VzIHJpZ2h0IHRocm91Z2ggdGhlIHRyZWUuYCwgYFdoYXQgdGhlIGhlbGwgaXMgZ29pbmcgb24/YF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGRvbnRLbm93V2F0Y2g0KVxubGV0IGRvbnRLbm93V2F0Y2gyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGNhbiBzZWUgbXVza2V0cyBhbmQgc2NpbWl0YXJzIGx5aW5nIG5leHQgdG8gdGhlIHRocmVlIGh1ZGRsZWQgZmlndXJlcy5gLCBgVGhleSBhcmUgYXJtZWQuIE1lcmNlbmFyaWVzPyBTb2xkaWVycz8gUm9iYmVycyBpbmRlZWQ/YCwgYFlvdXIgdmlzaW9uIGlzIHJlYWxseSBibHVycnkgbm93LiBZb3UncmUgbm90IHN1cmUgd2h5LmAsIGBUaGUgYmxpenphcmQgZG9lc24ndCBoZWxwIGVpdGhlci4gQW5kIGFsdGhvdWdoIHlvdSdyZSBoaWRpbmcgYmVoaW5kIGEgdHJlZSBvbmx5IGEgZmV3IGRvemVuIG1ldGVycyBhd2F5IGZyb20gdGhlIHRocmVlIGZpZ3VyZXMsIHlvdSBzdGlsbCBjYW4ndCBtYWtlIG91dCBtdWNoIG1vcmUgdGhhbiB0aGF0LmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBkb250S25vd1dhdGNoMylcbmxldCBkb250S25vd1dhdGNoMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBzbG93IGRvd24uIFRoZXkgY291bGQgYmUgcm9iYmVycyBvbiB0aGUgcnVuIGZyb20gb25lIG9mIHRoZSBGYXRlZCBSZWFsbSdzIGNpdGllcywgb3IgY3VsdGlzdHMgb2Ygb25lIG9mIGV2aWwgU3Vucy5gLCBgWW91IHN0b3AgYXBwcm9hY2hpbmcgdGhlbSBhbmQgZGFzaCBiZWhpbmQgYSBuZWFyYnkgdHJlZS5gLCBgWW91IGZlZWwgd2Vha2VyIHdpdGggZXZlcnkgcGFzc2luZyBtaW51dGUuIE5ldmVydGhlbGVzcywgeW91IGRlY2lkZSB0byB3YXRjaCB0aGVtIGZvciBhIGxpdHRsZSB3aGlsZS5gLCBgVG8gbWFrZSBzdXJlIHRoZXkgd29uJ3QgaGFybSB5b3UgaW4geW91ciBkZXNwZXJhdGUgc3RhdGUuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGRvbnRLbm93V2F0Y2gyKVxubGV0IGRvbnRLbm93UnVuNiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYEEgbGl0dGxlIHdoaWxlIGxhdGVyLCB5b3UgYXJlIHNpdHRpbmcgbm90IGZhciBmcm9tIHRoZSB0aHJlZSBwZW9wbGUncyBjYW1wLCBqdXN0IGJlaGluZCB0aGVpciBiYWNrcy5gLCBgQ2xvc2UgZW5vdWdoIHRvIHNlZSB0aGUgZmlyZSwgeWV0IHlvdSBzdGlsbCBkb24ndCBmZWVsIGl0J3Mgd2FybXRoLmAsIGBUaGUgZW1icmFjZSBvZiBkZWF0aCBpcyB0b28gY29sZC5gLCBgWW91IHRyaWVkIHRvdWNoaW5nIHRoZSB0cmVlcywgb3IgZXZlbiB0aGUgZmlyZS4gTm90aGluZy4gWW91IHBhc3MgcmlnaHQgdGhyb3VnaC5gLCBgQnkgbm93LCB5b3VyIHJlYWxpdHkgaXMgaXJyZWZ1dGFibGUuYCwgYFlvdSBkaWRuJ3Qgd2FrZSB1cCBpbiB0aGUgRm9yZXN0IG9mIE1pcnJvcnMuYCwgYFlvdSBkaWVkIGhlcmUuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGRvbnRLbm93UmVhbGl6ZTEpXG5sZXQgZG9udEtub3dSdW41ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IHNsb3dseSB3YWxrIHVwIHRvIG9uZSBvZiB0aGUgcGVvcGxlLCBhbmQgdHJ5IHRvIHRhcCBvbiB0aGVpciBzaG91bGRlci5gLCBgWW91IHJlYWNoIG91dCB0b3dhcmRzIHRoZWlyIGNvYXQgd2l0aCB5b3VyIGhhbmQuYCwgYFdoZW4geW91IHRyeSB0byB0YXAgdGhlaXIgc2hvdWxkZXIsIHlvdXIgaGFuZCBwYXNzZXMgcmlnaHQgdGhyb3VnaCB0aGVpciBib2R5LmAsIGBZb3UgcmV0cmFjdCB5b3VyIGhhbmQgYW5kIHN0ZXAgYmFjaywgaG9ycmlmaWVkLmAsIGBZb3UgdHJ5IGFnYWluLCBhbmQgdGhlIHJlc3VsdCBpcyB0aGUgc2FtZS4gWW91ciBoYW5kIHBhc3NlcyByaWdodCB0aHJvdWdoIHRoZW0uYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGRvbnRLbm93UnVuNilcbmxldCBkb250S25vd1J1bjQgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3VyIG1pbmQgcmFjZXMsIHBhbmlja2luZy4gVGhlcmUgYXJlIHBlb3BsZSByaWdodCBoZXJlISBQZW9wbGUgd2hvIGNhbiBoZWxwISBZb3UgbWFkZSBpdCwgeW91IHNhdmVkIHlvdXJzZWxmISBTbyB3aGF0IHRoZSBoZWxsIGlzIHdyb25nP2AsIGBZb3VyIG1pbmQgc2xvd2x5IGFjY2VwdHMgd2hhdCBpdCBoYXMgYmVlbiB0cnlpbmcgdG8gaWdub3JlIGZvciBhbGwgdGhpcyB0aW1lLmAsIGBObyB2aWJyYXRpb24gd2hlbiB5b3UgdGFsay5gLCBgWW91IGRvbid0IGZlZWwgdGhlIGNvbGQuYCwgYFlvdSBkb24ndCByZW1lbWJlciBhbnl0aGluZyBhYm91dCB5b3VyIGxpZmUuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGRvbnRLbm93UnVuNSlcbmxldCBkb250S25vd1J1bjMgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgY2FuJ3QgZXZlbiBoZWFyIHlvdXJzZWxmIHdoZW4geW91IHllbGwgZm9yIHRoZW0uIFNvIHBlcmhhcHMgdGhlIGJsaXp6YXJkIGlzIGRyb3duaW5nIG91dCB5b3VyIHZvaWNlP2AsIGBPciBtYXliZSB0aGV5J3JlIGFsc28gaW5qdXJlZCBhbmQgaW4gbmVlZCBvZiBoZWxwP2AsIGBcIkhlbGxvP1wiIHlvdSBzY3JlYW0gYWdhaW4uIFRoaXMgdGltZSwgeW91IG5vdGljZSBpdC5gLCBgWW91IGRvbid0IGV2ZW4gaGVhciBhbiBpbnRlcm5hbCB2aWJyYXRpb24gd2hlbiB5b3Ugc2NyZWFtLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBkb250S25vd1J1bjQpXG5sZXQgZG9udEtub3dSdW4yID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IHJ1biByaWdodCB1cCB0byB0aGUgdGhyZWUgZmlndXJlcyBodWRkbGVkIGFyb3VuZCB0aGUgY2FtcGZpcmUuYCwgYFlvdSBzdG9wIHdpdGhpbiAyMCBtZXRlcnMgb2YgdGhlbS5gLCBgXCJJIG5lZWQgaGVscCFcIiwgeW91IHllbGwgb3V0LmAsIGBUaGV5IGRvbid0IHJlYWN0LmAsIGBZb3Ugd2FsayBjbG9zZXIgdG8gdGhlbS4gXCJHb29kIHBlb3BsZSEgUGxlYXNlIGhlbHAgbWUhIEknbSBsb3N0IGFuZCBJJ20gZnJlZXppbmchXCIgeW91IGNvbnRpbnVlLmAsIGBObyByZWFjdGlvbi5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZG9udEtub3dSdW4zKVxubGV0IGRvbnRLbm93UnVuMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBuZWVkIHRoZSBoZWxwLiBZb3UncmUgZGVzcGVyYXRlIGFuZCB5b3UncmUgd2lsbGluZyB0byB0YWtlIGEgY2hhbmNlIG9uIHRoZW0uYCwgYEFsc28sIHdvdWxkIGl0IG1ha2Ugc2Vuc2UgZm9yIGJhbmRpdHMgdG8gYmUgY2FtcGluZyBpbiB0aGUgbWlkZGxlIG9mIHRoZSBpbXBhc3NhYmxlIEZvcmVzdCBvZiBNaXJyb3JzP2AsIGBZb3UnZCBleHBlY3QgaGlnaHdheSByb2JiZXJzIHRvIGJlIGNhbXBlZCBhcm91bmQgdGhlIG1haW4gcm9hZHMgb2YgdGhlIEZhdGVkIFJlYWxtLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBkb250S25vd1J1bjIpXG5sZXQgYXBwcm9hY2hDYW1wRG9udEtub3czID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGRvbid0IGV2ZW4gZmVlbCBmYXRpZ3VlIGFzIHlvdSBydW4uIFByb2JhYmx5IHRoZSBhZHJlbmFsaW5lLiBTdXJ2aXZhbCBpbnN0aW5jdC5gLCBgQXMgeW91IGdldCBjbG9zZXIgdG8gdGhlaXIgY2FtcCwgeW91IHNlZSB0aHJlZSBmaWd1cmVzLCBodWRkbGVkIGFyb3VuZCB0aGUgZmlyZS5gLCBgWW91IHN0b3Agd2hlbiB5b3UgZ2V0IHdpdGhpbiBlYXJzaG90IG9mIHRoZW0uYCwgYEhvdyBkbyB5b3Ugd2FudCB0byBhcHByb2FjaCB0aGlzP2BdLFxuICAgIHtjaG9pY2VUZXh0OiBgV2F0Y2ggdGhlbSBmcm9tIGEgZGlzdGFuY2UuIFlvdSBtaWdodCBiZSBmcmVlemluZyB0byBkZWF0aCBhbmQgZGVzcGVyYXRlIGZvciBoZWxwLCBidXQgdGhleSBtaWdodCBiZSBiYW5kaXRzLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiBudWxsLFxuICAgIGNob2ljZU5leHRTdG9yeTogZG9udEtub3dXYXRjaDF9LFxuICAgIHtjaG9pY2VUZXh0OiBgUnVuIHRvd2FyZHMgdGhlbSwgc2NyZWFtaW5nIGZvciBoZWxwLiBZb3UncmUgZHlpbmcgYW5kIHlvdSBuZWVkIHdhcm10aCwgZm9vZCwgYW55dGhpbmcgdGhleSBjYW4gc3BhcmUuYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6IG51bGwsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBkb250S25vd1J1bjF9LFxuICAgIHVuZGVmaW5lZClcbmxldCBhcHByb2FjaENhbXBEb250S25vdzIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BObyBsb25nZXIgYmVpbmcgb24gdG9wIG9mIGEgaGlsbCwgYW5kIHdpdGggdGhlIGJsaXp6YXJkIHJvYXJpbmcsIHlvdSBsb3NlIHNpZ2h0IG9mIHRoZSBzbW9rZS5gLCBgWW91IGRvbid0IHN0b3AgcnVubmluZywgeW91IGNhbiBvbmx5IGhvcGUgdGhhdCB5b3UndmUga2VwdCB0aGUgcmlnaHQgZGlyZWN0aW9uLmAsIGBFdmVudHVhbGx5LCBiZXR3ZWVuIHRoZSB0cmVlcywgeW91IHNlZSBhIGZsaWNrZXJpbmcgcmVkIGxpZ2h0LmAsIGBTb21lb25lJ3MgY2FtcGZpcmUgaXMgYSBmZXcgaHVuZHJlZCBtZXRlcnMgYXdheSBmcm9tIHlvdS5gLCBgWW91J3JlIHNhdmVkIWBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBhcHByb2FjaENhbXBEb250S25vdzMpXG5sZXQgYXBwcm9hY2hDYW1wRG9udEtub3cxID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IHJ1biBkb3duIHRoZSBoaWxsLmAsIGBZb3UgcnVuIHRocm91Z2ggdGhlIEZvcmVzdCBvZiBNaXJyb3JzIGluIHRoZSBkaXJlY3Rpb24gb2Ygd2hlcmUgeW91J3ZlIHNlZW4gdGhlIHNtb2tlLmAsIGBZb3UgcnVuIGZvciB3aGF0IGZlZWxzIGxpa2UgYW4gaG91ci5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgYXBwcm9hY2hDYW1wRG9udEtub3cyKVxuLy8gRklORCBUSEUgQ0FNUCAoS05PVyBUSEFUIFlPVSdSRSBBIFNQSVJJVClcbmxldCBhcHByb2FjaENhbXBLbm93MyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYEtub3dpbmcgdGhhdCB0aGV5IGNhbm5vdCBzZWUgeW91LCB5b3UgZmxvYXQgY2xvc2VyIHRvIHRoZW0gYW5kIHRha2UgYSBjbG9zZXIgbG9vay5gLCBgVGhlIGZpcnN0IHBlcnNvbiBpcyBhIHdvbWFuIGRyZXNzZWQgaW4gYSBsb25nLCB0aGljaywgZGFyayByZWQgY29hdC4gWW91IG5vIGxvbmdlciBjYXJlIGFib3V0IHRoZSBjb2xkLCBidXQgaXQncyBhbiB1bmRlcnN0YW5kYWJsZSBjaG9pY2UgZm9yIGhlci4gQ291bGQgdGhlIHdlYXRoZXIgaGF2ZSBraWxsZWQgeW91PyBZb3Ugc2hha2UgYXdheSB0aGVzZSB0aG91Z2h0cy4gSXQncyBwb2ludGxlc3MgdG8gc3BlY3VsYXRlIGZvciBub3cuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGFwcHJvYWNoQ2FtcEtub3c0KVxubGV0IGFwcHJvYWNoQ2FtcEtub3cyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGZsb2F0IGNsb3Nlci4gSXQncyBjb21tb24ga25vd2xlZGdlIGluIHRoZSBGYXRlZCBSZWFsbSB0aGF0IGh1bWFucyBjYW5ub3Qgc2VlIFNwaXJpdHMgcGh5c2ljYWxseS5gLCBgVG8gcHJvbW90ZSB0aGVpciBjb25jZXB0cywgU3Bpcml0cyBoYXZlIHRoZSBhYmlsaXRpZXMgdG8gYWZmZWN0IHRoZSBtYXRlcmlhbCB3b3JsZCBpbiBnaG9zdGx5IHdheXMuIFRoZSBtb3JlIHBvd2VyZnVsIHRoZSBTcGlyaXQsIHRoZSBtb3JlIHN1YnN0YW50aWFsIHRoZSBlZmZlY3RzLmAsIGBGb3Igbm93LCB5b3UgZmxvYXQgY2xvc2VyIHRvIHRoZSBjYW1wZmlyZSwgc2VlaW5nIHRocmVlIHBlb3BsZSBodWRkbGVkIGFyb3VuZCB0aGUgYnJpZ2h0IGZsYW1lLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBhcHByb2FjaENhbXBLbm93MylcbmxldCBhcHByb2FjaENhbXBLbm93MSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBmbG9hdCBmb3Igd2hhdCBmZWVscyBsaWtlIGhvdXJzLmAsIGBZZXMuIEZsb2F0LiBOb3cgdGhhdCB5b3UgdW5kZXJzdGFuZCB5b3VyIHNpdHVhdGlvbiwgeW91IHJlYWxpemUgdGhhdCB5b3UgZG9uJ3QgaGF2ZSB0byBtb3ZlIHlvdXIgZmVldCB0byBtb3ZlLiBQZXJrcyBvZiBiZWluZyBhIFNwaXJpdC5gLCBgT2NjYXNpb25hbGx5IHlvdSBvcGVuIHlvdXIgZXllcywgb2NjYXNpb25hbGx5IHlvdSBjbG9zZSB0aGVtLmAsIGBJdCBkb2Vzbid0IGxvb2sgbGlrZSB5b3UgY2FuIHNlZSB0aHJvdWdoIHNvbGlkIG1hdHRlciwgc28gYWxsIHlvdSBzZWUgaXMgdGhlIHNub3d5IEZvcmVzdCBvZiBNaXJyb3JzLmAsIGBFdmVudHVhbGx5LCB5b3Ugc2VlIGEgbGlnaHQuIFRoaXMgb25lJ3MgZGVmaW5pdGVseSBhIGNhbXBmaXJlLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBhcHByb2FjaENhbXBLbm93Milcbi8vIFRIRSBGT1JFU1QgT0YgTUlSUk9SU1xubGV0IGVuZEZvcmVzdENvbmNlbnRyYXRlNGIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BUbyBrZWVwIGdvaW5nLCB5b3UgdGVsbCB5b3Vyc2VsZiAtIFwiSSdtIG5vdCBkZWFkXCIuYCwgYFwiSSBkaWVkLCBidXQgSSdtIG5vdCBkZWFkLlwiYCwgYFdob2V2ZXIgeW91IHdlcmUgaW4gbGlmZSwgeW91IGRpZCBlbm91Z2ggZm9yIHRoZSBQaG9lbml4IG9mIEp1c3RpY2UgdG8gbWFrZSB5b3UgYSBTcGlyaXQgb2YgSnVzdGljZS5gLCBgWW91J3JlIG5vdCBkZWFkLiBZb3UncmUgYWJsZSB0byB0aGluayBhbmQgdG8gc2VlLmAsIGBZb3UgZXhpc3QuIEluIGEgZGlmZmVyZW50IGZvcm0gbm93LiBBbmQgeW91IGNhbiBzdGlsbCBzYXZlIHlvdXJzZWxmLCBzYXZlIHlvdXIgbmV3IGZvcm0uYCwgYFlvdSBqdXN0IGhhdmUgdG8gZG8geW91ciBqb2IgYW5kIHByb21vdGUgSnVzdGljZS5gLCBgWW91IHJlbWVtYmVyIHN0b3JpZXMgdGhhdCBTcGlyaXRzIGNhbiBzZW5zZSBsaWZlLiBZb3UgY2xvc2UgeW91ciBleWVzIGFuZCB0cnkgdG8gbGV0IHlvdXIgZmVlbGluZ3MgZ3VpZGUgeW91IHRvIHRoZSBuZWFyZXN0IHBlb3BsZS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgYXBwcm9hY2hDYW1wS25vdzEpXG5sZXQgZW5kRm9yZXN0Q29uY2VudHJhdGU0ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgUmlnaHQuIFNvIHlvdSBtdXN0IGJlIGEgU3Bpcml0IG9mIGEgUGhvZW5peCBvZiBKdXN0aWNlLiBPZiBhIFN1bi4gT2YgdGhlIEdvZCBvZiBKdXN0aWNlLmAsIGBJdCdzIHByZXR0eSBtdWNoIGNvbW1vbiBrbm93bGVkZ2UgdGhhdCBTcGlyaXRzIGV4aXN0IHRvIGZ1cnRoZXIgcHJvbW90ZSB0aGUgY29uY2VwdCwgb3IgcG9ydGZvbGlvLCBvZiB0aGVpciBQaG9lbml4LmAsIGBJZiB0aGV5IGZhaWwgdG8gcHJvbW90ZSB0aGVpciBjb25jZXB0LCB0aGUgU3Bpcml0IGRpc2FwcGVhcnMuIERpZXMsIGZvcmV2ZXJgLCBgT2gsIEdvZHMsIGlzIHRoYXQgd2h5IHlvdSd2ZSBiZWVuIGZlZWxpbmcgd2Vha2VyIGFuZCB3ZWFrZXIhP2AsIGBZb3UgcmlzZSB0byB5b3VyICdmZWV0JywgaW4gcGFuaWMgYWdhaW4uIFlvdSBoYXZlIHRvIGZpbmQgc29tZW9uZSB0byBwcm9tb3RlIHlvdXIgY29uY2VwdCwgdGhlIGlkZWEgb2YgSnVzdGljZSwgdG8uIFdpdGhvdXQgcGVvcGxlIHRvIHByb21vdGUgSnVzdGljZSB0bywgeW91J2xsIGRpc2FwcGVhci4gQW5kIHNvb24sIHlvdXIgYm9keSBmZWVscyBpdC5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZW5kRm9yZXN0Q29uY2VudHJhdGU0YilcbmxldCBlbmRGb3Jlc3RDb25jZW50cmF0ZTNjID0gbmV3IHN0b3J5RWxlbWVudCgnY2hvaWNlJyxcbiAgICBbYFwiTXkgUGhvZW5peFwiLiBUaGF0J3MgcmlnaHQuYCxgWW91J3JlIGEgU3Bpcml0LCBhbiBFbnZveSBvZiBhIFBob2VuaXguYCwgYEl0IG1lYW5zIHRoYXQgaW4gbGlmZSwgeW91IG11c3QgaGF2ZSB3b3JzaGlwcGVkIG9uZSBvZiB0aGUgMjAgU3Vucywgb3IgUGhvZW5peGVzLCBob3cgdGhleSdyZSBhbHNvIGNhbGxlZC4gRG9uZSBlbm91Z2gsIGluIGZhY3QsIHRvIGhhdmUgYmVlbiBtYWRlIGEgU3Bpcml0IG9mIHRoYXQgU3VuLmAsIGBXaHkgaXMgaXQgc28gaGFyZCB0byByZWNhbGwgdGhlIGRldGFpbHMgb2YgeW91ciBsaWZlP2AsIGBZb3UgY29uY2VudHJhdGUgYWdhaW4sIHNpdHRpbmcgdGhlcmUgaW4gdGhlIHNub3cuYCwgYFNub3dmbGFrZXMgZmFsbCByaWdodCB0aHJvdWdoIHlvdS4gSG93IGRpZCB5b3Ugbm90IG5vdGljZSB0aGF0PyBQZXJoYXBzIGZyb20gdGhlIHBhbmljLCBhbmQgZnJvbSB5b3VyIHJhYmlkIHNlYXJjaCBmb3IgaGVscC5gLCBgJ1doaWNoIFN1biBkaWQgSSB3b3JzaGlwIGluIGxpZmU/IFlvdSB0aGluay4nYF0sXG4gICAgW3tjaG9pY2VUZXh0OiBgVGhlIFBob2VuaXggb2YgQ29tcGFzc2lvbi5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ2NvbXBhc3Npb25TcGlyaXQnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZW5kRm9yZXN0Q29uY2VudHJhdGU0fSxcbiAgICB7Y2hvaWNlVGV4dDogYFRoZSBQaG9lbml4IG9mIEp1c3RpY2UuYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdqdXN0aWNlU3Bpcml0JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGVuZEZvcmVzdENvbmNlbnRyYXRlNH0sXG4gICAge2Nob2ljZVRleHQ6IGBUaGUgUGhvZW5peCBvZiBGcmVlZG9tLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnZnJlZWRvbVNwaXJpdCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBlbmRGb3Jlc3RDb25jZW50cmF0ZTR9LFxuICAgIHtjaG9pY2VUZXh0OiBgVGhlIFBob2VuaXggb2YgTWFzdGVyeS5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ21hc3RlcnlTcGlyaXQnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZW5kRm9yZXN0Q29uY2VudHJhdGU0fSxcbiAgICB7Y2hvaWNlVGV4dDogYFRoZSBQaG9lbml4IG9mIFdpc2RvbS5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ3dpc2RvbVNwaXJpdCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBlbmRGb3Jlc3RDb25jZW50cmF0ZTR9XSxcbiAgICB1bmRlZmluZWQpIFxubGV0IGVuZEZvcmVzdENvbmNlbnRyYXRlM2IgPSBuZXcgc3RvcnlFbGVtZW50KCdjaG9pY2UnLFxuICAgIFtgWW91IGRvbid0IGtub3cgZW5vdWdoIGFib3V0IHRoZW0uIFlvdSB3b25kZXIgd2hhdCBraW5kIG9mIFNwaXJpdCB5b3UgYXJlLmAsIGBZb3UgY2xvc2UgeW91ciBub24tZXhpc3RlbnQgZXllcy4gVGhlIGFuc3dlciBpcyB3aXRoaW4geW91LCB5b3UganVzdCBoYXZlIHRvIGZlZWwgaXQuYF0sXG4gICAgW3tjaG9pY2VUZXh0OiAnSSBhbSBhIFdyYWl0aCwgYSBzcGlyaXQgdGhhdCBicmluZ3MgcHVuaXNobWVudCB0byB0aG9zZSB3aG8gd3JvbmcgbXkgUGhvZW5peC4nLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ2NsYXNzV3JhaXRoJyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGVuZEZvcmVzdENvbmNlbnRyYXRlM2N9LFxuICAgIHtjaG9pY2VUZXh0OiAnSSBhbSBhIFBvbHRlcmdlaXN0LiBXYXRjaGVyLCBzZWVyLCBzdWJ0bGUgbWFzdGVybWluZCBpbiB0aGUgc2VydmljZSBvZiBteSBQaG9lbml4LicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnY2xhc3NQb2x0ZXJnZWlzdCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBlbmRGb3Jlc3RDb25jZW50cmF0ZTNjfSxcbiAgICB7Y2hvaWNlVGV4dDogJ0kgYW0gYSBHdWFyZGlhbiBTcGlyaXQsIEkgZXhpc3QgdG8gZ3VpZGUgYW5kIHByb3RlY3QgdGhvc2Ugd2hvIGZvbGxvdyBteSBQaG9lbml4LicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnY2xhc3NHdWFyZGlhblNwaXJpdCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBlbmRGb3Jlc3RDb25jZW50cmF0ZTNjfV0sXG4gICAgdW5kZWZpbmVkKVxubGV0IGVuZEZvcmVzdENvbmNlbnRyYXRlM2EgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgbXVzdCBiZSBhIFNwaXJpdC5gLCBgUGVvcGxlIHdobyBkaWQgYSBsb3QgaW4gdGhlIHNlcnZpY2Ugb2YgYSBQaG9lbml4IHJlaW5jYXJuYXRlIGludG8gU3Bpcml0cyB3aGVuIHRoZXkgZGllLmAsIGBUaGVyZSBhcmUgZGlmZmVyZW50IGtpbmRzIG9mIFNwaXJpdHMsIHlvdSdyZSBwcmV0dHkgc3VyZS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZW5kRm9yZXN0Q29uY2VudHJhdGUzYilcbmxldCBlbmRGb3Jlc3RDb25jZW50cmF0ZTIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3Ugc2l0IHRoZXJlIGZvciBhIG1vbWVudCwgbWluZCBjb21wbGV0ZWx5IGJsYW5rLmAsIGBZb3UncmUgZGVhZC5gLCBgWW91J3JlIGNvbnNjaW91cywgaG93ZXZlci4gWW91IGhhdmUgdG8gYmUgYSBTcGlyaXQsIHJpZ2h0P2AsIGBZb3UgY29uY2VudHJhdGUgLSB3aGF0IGRvIHlvdSBrbm93IG9mIFNwaXJpdHM/YCwgYFdoZW4gcGVvcGxlIGRpZSwgdGhleSByZWluY2FybmF0ZSBpbnRvIGFuaW1hbHMuIFdoZW4gYW5pbWFscyBkaWUsIHRoZXkgcmVpbmNhcm5hdGUgaW50byBwZW9wbGUuYCwgYEhvd2V2ZXIsIGlmIHRoZSBkeWluZyBwZXJzb24gaGFkIGRvbmUgZW5vdWdoIGluIHRoZSB3b3JzaGlwIG9mIG9uZSBvZiB0aGUgMjAgU3VucywgdGhleSByZWluY2FybmF0ZSBpbnRvIGEgU3Bpcml0LmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBlbmRGb3Jlc3RDb25jZW50cmF0ZTNhKVxubGV0IGVuZEZvcmVzdENvbmNlbnRyYXRlMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBmYWxsIHRvIHRoZSBzbm93eSBncm91bmQgb2YgdGhlIGZvcmVzdCwgc2l0dGluZyB3aXRoIHlvdXIgbGVncyBvdXRzdHJldGNoZWQgaW4gZnJvbnQgb2YgeW91LmAsIGBZb3VyIG1pbmQgcmFjZXMuIFlvdXIgYm9keSBzdGlsbCBjYW4ndCBmZWVsIHRoZSBjb2xkLmAsIGBZb3UncmUgcmVhbGx5IGRlYWQuYF0sXG4gICAgJ0ZvTXNwaXJpdEtub3cnLFxuICAgIGVuZEZvcmVzdENvbmNlbnRyYXRlMilcbmxldCBlbmRGb3Jlc3RDb25jZW50cmF0ZTFwcmVCID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGJlbmQgb3ZlciBhbmQgc2xvd2x5IHJlYWNoIHdpdGggeW91ciBoYW5kIHRvd2FyZHMgdGhlIHNub3cuYCwgYFlvdXIgaGFuZCBwYXNzZXMgcmlnaHQgdGhyb3VnaCB0aGUgc25vdy5gLCBgWW91IGd1bHAsIHBhbmljIGFuZCByZWFsaXphdGlvbiBzdGFydGluZyB0byBzZXR0bGUgaW4uYCwgYFlvdXIgaGFuZCBwYXNzZXMgcmlnaHQgdGhyb3VnaCB0aGUgc25vdy4gWW91IGNhbm5vdCBtb3ZlIGl0LmAsIGBZb3UgZGlkbid0IHdha2UgdXAgaGVyZSBpbiB0aGUgRm9yZXN0IG9mIE1pcnJvcnMuYCwgYFlvdSBkaWVkIGhlcmUuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGVuZEZvcmVzdENvbmNlbnRyYXRlMSlcbmxldCBlbmRGb3Jlc3RDb25jZW50cmF0ZTFwcmUgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgdHJ5IHRvIHJlbWVtYmVyIHlvdXIgbGlmZSwgYnV0IG5vdGhpbmcgY29tZXMgdG8geW91LmAsIGBZb3UgZm9jdXMgb24geW91ciBjb25kaXRpb24uIFlvdSBjYW4ndCBmZWVsIHRoZSBjb2xkLmAsIGBZb3UgbG9vayBhcm91bmQgdGhyb3VnaCB0aGUgYmxpenphcmQuIFlvdSBub3RpY2Ugc29tZXRoaW5nIHVudXN1YWwuYCwgYFlvdSBkb24ndCBzZWVtIHRvIGxlYXZlIGZvb3RwcmludHMgaW4gdGhlIHNub3cuYCwgYFRoZSBibGl6emFyZCBjYW4ndCBmaWxsIGluIHRoZSBpbmRlbnRhdGlvbnMgaW4gdGhlIHNub3cgdGhpcyBmYXN0LCBjYW4gaXQ/YF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGVuZEZvcmVzdENvbmNlbnRyYXRlMXByZUIpXG5sZXQgZW5kRm9yZXN0RXhwbG9yZVNjcmVhbTMgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgdHJ5IHRvIHNjcmVhbSwgYWdhaW4gYW5kIGFnYWluLiBObyBzb3VuZCBjb21lcyBvdXQuYCwgYFlvdSBzdG9tcCBpbiB0aGUgc25vdywgYnV0IGl0IGRvZXNuJ3QgbW92ZS5gLCBgRmluYWxseSwgeW91IGFwcHJvYWNoIGEgdHJlZSBhbmQgcmVhY2ggb3V0IHRvIHRvdWNoIGl0cyBiYXJrLmAsIGBZb3UgZ3VscCwgcGFuaWMgYW5kIHJlYWxpemF0aW9uIHN0YXJ0aW5nIHRvIHNldHRsZSBpbiwgYXMgeW91IHNsb3dseSByZWFjaCB3aXRoIHlvdXIgaGFuZCB0byB0aGUgdHJlZS5gLCBgWW91ciBoYW5kIHBhc3NlcyByaWdodCB0aHJvdWdoIHRoZSB0cmVlLCBkaXNhcHBlYXJpbmcgaW50byB0aGUgYmFyay5gLCBgWW91IGRpZG4ndCB3YWtlIHVwIGhlcmUgaW4gdGhlIEZvcmVzdCBvZiBNaXJyb3JzLiBZb3UgZGllZCBoZXJlLCBhbmQgbm93IHlvdSdyZSBhIFNwaXJpdC5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZW5kRm9yZXN0Q29uY2VudHJhdGUxKVxubGV0IGVuZEZvcmVzdEV4cGxvcmVTY3JlYW0yID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IHN0b3AuIFdoYXQgdGhlIGhlbGwgaXMgZ29pbmcgb24/YCwgYFlvdSd2ZSBiZWVuIGZlZWxpbmcgb2ZmIGV2ZXIgc2luY2UgeW91IHdva2UgdXAuYCwgYE5vdywgeW91J3JlIHN0YXJ0aW5nIHRvIHN1c3BlY3QgdGhhdCBpdCdzIG5vdCBqdXN0IHRoZSBjb2xkIGFuZCBmcm9zdGJpdGUuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGVuZEZvcmVzdEV4cGxvcmVTY3JlYW0zKVxubGV0IGVuZEZvcmVzdEV4cGxvcmVTY3JlYW0xID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgJ0EtYS1hbnlib2R5ISdgLCBgWW91IHllbGwsIGJ1dCB0aGUgb25seSBzb3VuZCB0aGF0IHlvdSBoZWFyIGlzIHRoZSBibGl6emFyZC5gLCBgJ1NvbWVib2R5IGhlbHAgbWUhJ2AsIGBZb3Ugc2NyZWFtIGFnYWluLiBUaGlzIHRpbWUgeW91IG5vdGljZSB0aGF0IHlvdSBkb24ndCBldmVuIGZlZWwgdGhlIHZpYnJhdGlvbiBpbiB5b3VyIHRocm9hdC5gXSxcbiAgICAnRm9Nc3Bpcml0S25vdycsXG4gICAgZW5kRm9yZXN0RXhwbG9yZVNjcmVhbTIpXG5sZXQgZW5kRm9yZXN0RXhwbG9yZU5vU2NyZWFtMyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBsb29rIGFyb3VuZCBmcm9tIHRoZSB0b3Agb2YgdGhlIGhpbGwuYCwgYEluIHRoZSBkaXN0YW5jZSwgeW91IHNwb3QgYSBmYWludCBnbGltcHNlIG9mIHNtb2tlLmAsIGBOb3cgdGhpcyBpcyBkZWZpbml0ZWx5IGZpcmUgb2Ygc29tZSBraW5kLmAsIGBBbmQgaG9wZSBmb3IgeW91LmAsIGBZb3UgcnVzaCBkb3duIHRoZSBoaWxsIHRvd2FyZHMgdGhlIGZpcmUuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGFwcHJvYWNoQ2FtcERvbnRLbm93MSlcbmxldCBlbmRGb3Jlc3RFeHBsb3JlTm9TY3JlYW0yID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGtlZXAgcnVubmluZyB0aHJvdWdoIHRoZSBmb3Jlc3QsIGFuZCBtYW5hZ2UgdG8gcmVhY2ggdGhlIHRvcCBvZiB0aGUgaGlsbC5gLCBgWW91J3JlIG5vdCBkZWFkIHlldCwgZGVzcGl0ZSBiZWluZyBpbiB0aGUgZnJvemVuIEZvcmVzdCBvZiBNaXJyb3JzIGZvciBhdCBsZWFzdCBhbiBob3VyIG9yIHR3byBieSBub3cuYCwgYFlvdSdyZSBub3QgZXZlbiBvdXQgb2YgYnJlYXRoIGZyb20gc3ByaW5naW5nIHVwIHRoZSBoaWxsLmAsIGBObyB0aW1lIHRvIHRoaW5rIGFib3V0IGl0IG5vdy5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZW5kRm9yZXN0RXhwbG9yZU5vU2NyZWFtMylcbmxldCBlbmRGb3Jlc3RFeHBsb3JlTm9TY3JlYW0xID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgTm8gc2NyZWFtaW5nLmAsIGBZb3Uga2VlcCBydW5uaW5nIGZvcndhcmQuYCwgYFlvdSBzcHJpbnQgdGhyb3VnaCB0aGUgdHJlZXMgZm9yIHdoYXQgZmVlbHMgbGlrZSBhbiBob3VyLmAsIGBGaW5hbGx5LCB5b3UgbWFuYWdlIHRvIHNwb3QgYSBiaWcgaGlsbCBpbiB0aGUgZm9yZXN0LiBJdCdsbCBnaXZlIHlvdSBhIHZhbnRhZ2UgcG9pbnQsIHNvIHlvdSBzcHJpbmcgaW4gaXRzIGRpcmVjdGlvbi5gXSxcbiAgICAnRm9Nbm9TcGlyaXRLbm93JyxcbiAgICBlbmRGb3Jlc3RFeHBsb3JlTm9TY3JlYW0yKVxubGV0IGVuZEZvcmVzdEV4cGxvcmUxID0gbmV3IHN0b3J5RWxlbWVudCgnY2hvaWNlJyxcbiAgICBbYFlvdSBicmVhdGhlLCB0cnlpbmcgdG8ga2VlcCB5b3VyIHdhcm10aC5gLCBgQmx1cnJ5IHZpc2lvbiwgY2FuJ3QgZmVlbCB5b3VyIGxlZ3MgLSB5b3UgbWlnaHQgYmUgY2xvc2UgdG8gZGVhdGguIFlvdSBuZWVkIGhlbHAuYCwgYFRoZSBGb3Jlc3Qgb2YgTWlycm9ycyBpcyBlbm9ybW91cywgaXQgdGFrZXMgdXAgYSBiaWcgcGFydCBvZiB0aGUgZWFzdGVybiBzaWRlIG9mIHRoZSBGYXRlZCBSZWFsbS5gLCBgVGhlcmUgbXVzdCBiZSBzb21lYm9keSB0cmF2ZXJzaW5nIHRoZSBGb3Jlc3QgdGhhdCBjb3VsZCBoZWxwIHlvdS5gLCBgU2hvdWxkIHlvdSBzY3JlYW0gb3V0IGZvciBoZWxwP2BdLFxuICAgIFt7Y2hvaWNlVGV4dDogYFllcy4gSXQnbGwgYmUgaGFyZCBmb3IgYW55b25lIHRvIGhlYXIgeW91IHRocm91Z2ggdGhlIGJsaXp6YXJkLCBidXQgeW91J3JlIGRlc3BlcmF0ZS5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ0ZvTXNjcmVhbScsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBlbmRGb3Jlc3RFeHBsb3JlU2NyZWFtMX0sXG4gICAge2Nob2ljZVRleHQ6IGBObyBzY3JlYW1pbmcuIFRoZSBvbmx5IGF0dGVudGlvbiBpdCdsbCBhdHRyYWN0IGFyZSB0dXNrd29sdmVzLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnRm9Nbm9TY3JlYW0nLFxuICAgIGNob2ljZU5leHRTdG9yeTogZW5kRm9yZXN0RXhwbG9yZU5vU2NyZWFtMX1dLFxuICAgIHVuZGVmaW5lZClcbmxldCBlbmRGb3Jlc3Q1ID0gbmV3IHN0b3J5RWxlbWVudCgnY2hvaWNlJyxcbiAgICBbYCBZb3VyIHZpc2lvbiBpcyBnZXR0aW5nIGJsdXJyaWVyLmAsIGBZb3UgbmVlZCB0byBrZWVwIG1vdmluZy4gV2hhdCB0byBkbyBub3c/YF0sXG4gICAgW3tjaG9pY2VUZXh0OiAnS2VlcCBtb3ZpbmcsIGtlZXAgZXhwbG9yaW5nIHRoZSBmb3Jlc3QuJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdGb01lbmRFeHBsb3JlJyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGVuZEZvcmVzdEV4cGxvcmUxfSxcbiAgICB7Y2hvaWNlVGV4dDogJ1N0b3AgYW5kIHRyeSB0byBjb25jZW50cmF0ZSBvbiB5b3VyIGNvbmRpdGlvbi4nLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ0ZvTWVuZENvbmNlbnRyYXRlJyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGVuZEZvcmVzdENvbmNlbnRyYXRlMXByZX1dLFxuICAgIHVuZGVmaW5lZClcbmxldCBlbmRGb3Jlc3Q0ID0gbmV3IHN0b3J5RWxlbWVudCgnY29uc2VxdWVuY2UnLFxuICAgIFt7ZGVwZW5kZW5jeTogJ0ZvTXNhd1dpc3AnLCBjb25zZXF1ZW5jZVRleHQ6IFtgWW91IHJlbWVtYmVyOiBcIlNwaXJpdHMgY2Fubm90IHRvdWNoIHBoeXNpY2FsIG9iamVjdHMuXCJgLCBgVGhhdCBjcmVhdHVyZSBpbiB0aGUgd29vZHMgLSBpdCBtdXN0IGhhdmUgYmVlbiBhIFNwaXJpdC5gLCBgSXQgY291bGQgdG91Y2ggeW91LmAsIGBDb3VsZCB5b3UgYmUuLi4gZGVhZD9gLCBgWW91ciB0aG91Z2h0cyBhcmUgaW50ZXJydXB0ZWQgYXMgeW91ciBib2R5IGlzIGZlZWxpbmcgd2Vha2VyLmBdfSxcbiAgICB7ZGVwZW5kZW5jeTogJ0ZvTW5vdFNlZW5XaXNwJywgY29uc2VxdWVuY2VUZXh0OiBbYE1heWJlIHlvdSBzaG91bGQgaGF2ZSBhc2tlZCB0aGUgY2FtcGZpcmUgcGVvcGxlIGZvciBoZWxwLiBGb3IgZm9vZC4gV2FybXRoLiBBbnl0aGluZy5gLCBgWW91IGZlZWwgeW91cnNlbGYgZ2V0dGluZyB3ZWFrZXIuYF19LF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGVuZEZvcmVzdDUpXG5sZXQgZW5kRm9yZXN0MyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2NvbnNlcXVlbmNlJyxcbiAgICBbe2RlcGVuZGVuY3k6ICdGb01zZWFyY2hlZEJvZHknLCBjb25zZXF1ZW5jZVRleHQ6IFtgWW91IGNvbmNlbnRyYXRlLCB3aW5jaW5nLiBUcnlpbmcgdG8gdGhpbmsgYmFjayB0byB5b3VyIGVkdWNhdGlvbi4gV2hhdCBkbyB5b3Uga25vdyBvZiBTcGlyaXRzP2AsIGBMZXQncyBzZWUuLi4gU3Bpcml0cyBhcmUgdGhlIG9ubHkgY3JlYXR1cmVzIHdpdGggbWFnaWNhbCBhYmlsaXRpZXMuYCwgYFNwaXJpdHMgYWxzby4uLiBjYW5ub3QgdG91Y2ggcGh5c2ljYWwgb2JqZWN0cy5gXX0sXG4gICAge2RlcGVuZGVuY3k6ICdGb01sZWZ0Qm9keScsIGNvbnNlcXVlbmNlVGV4dDogW2BZb3Ugc2hvdWxkIGJlIGRlYWQgYnkgbm93LCBidXQgeW91IGRvbid0IHNlZW0gdG8gZmVlbCB0aGUgY29sZC5gLCBgWW91IGNhbiBmZWVsIHBhbmljIGFuZCBmcnVzdHJhdGlvbiBncm93aW5nLmBdfSxdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBlbmRGb3Jlc3Q0KVxubGV0IGVuZEZvcmVzdDIgPSBuZXcgc3RvcnlFbGVtZW50KCdjb25zZXF1ZW5jZScsXG4gICAgW3tkZXBlbmRlbmN5OiAnRm9Nc2VhcmNoZWRCb2R5JywgY29uc2VxdWVuY2VUZXh0OiBbYFN0b3AuIFJlY2l0ZSB0aGUgZmFjdHMuYCwgYFlvdSB3b2tlIHVwIGluIHRoZSBGb3Jlc3Qgb2YgTWlycm9ycy5gLCBgWW91IGRvbid0IHNlZW0gdG8gZmVlbCB0aGUgY29sZC5gLCBgWW91ciBoYW5kIHdlbnQgcmlnaHQgdGhyb3VnaCB0aGF0IGNvcnBzZS5gLCBgU29tZXRoaW5nIGlzIG9mZiBoZXJlLmAsIGBZb3UgaGF2ZSBhIHRoZW9yeS5gXX0sXG4gICAge2RlcGVuZGVuY3k6ICdGb01sZWZ0Qm9keScsIGNvbnNlcXVlbmNlVGV4dDogW2BTdG9wLiBSZWNpdGUgdGhlIGZhY3RzLmAsIGBZb3Ugd29rZSB1cCBpbiB0aGUgRm9yZXN0IG9mIE1pcnJvcnMuYF19XSxcbiAgICB1bmRlZmluZWQsXG4gICAgZW5kRm9yZXN0MylcbmxldCBlbmRGb3Jlc3QxID0gbmV3IHN0b3J5RWxlbWVudCgnZW5kRXhwbG9yYXRpb24nLFxuICAgIFtgWW91IGNvbnRpbnVlIHRydWRnaW5nIHRocm91Z2ggdGhlIHNub3d5IHdvb2RzLCBsb29raW5nIGZvciBhbnkgc29ydCBvZiBoZWxwLmAsIGBZb3UgY2FuJ3QgZmVlbCB3ZWFrZXIgd2l0aCBlYWNoIHN0ZXAsIGJ1dCB5b3Ugc3RpbGwgZG9uJ3QgZmVlbCB0aGUgY29sZC5gLCBgWW91IHN0b3AgYW5kIHRoaW5rLmBdLFxuICAgIHt1bmxvY2tlZDogZmFsc2V9LFxuICAgIGVuZEZvcmVzdDIpXG5sZXQgd2lzcExlYXZlID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IHR1cm4gYXJvdW5kIHN0ZXAgYXdheSBmcm9tIHRoZSBsaWdodC5gLCBgSWYgaXQncyBhIGNhbXBmaXJlLCB5b3UgY2FuJ3QgYmUgc3VyZSB0aGF0IHRoZXNlIHBlb3BsZSB3b24ndCBiZSBob3N0aWxlLmAsIGBBbmQsIHdpdGggdGhlIGJsaXp6YXJkIGFuZCB5b3VyIGJsdXJyZWQgdmlzaW9uIC0gZnJvbSB5b3VyIGluanVyaWVzPyAtIHlvdSBjYW4ndCBldmVuIGJlIHN1cmUgdGhhdCBpdCdzIGEgY2FtcGZpcmUuYF0sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnLFxuICAgIHVuZGVmaW5lZClcbmxldCB3aXNwQXBwcm9hY2g1ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgVGhhdCBtdXN0IGhhdmUgYmVlbi4uLiBhIFNwaXJpdCwgcmlnaHQ/IFlvdSBkbyBrbm93IG9mIFNwaXJpdHMuYCwgYFdoZW4gb3JkaW5hcnkgcGVvcGxlIGRpZSwgdGhleSByZWluY2FybmF0ZSBpbnRvIGFuaW1hbHMuYCwgYElmIGEgcGVyc29uIGhhcyBkb25lIGVub3VnaCBpbiB0aGUgd29yc2hpcCBvZiBvbmUgb2YgdGhlIDIwIFN1bnMsIHRoZXkgcmVpbmNhcm5hdGUgaW50byBhIFNwaXJpdC5gLCBgU25vd2ZhbGwgaXMgZ2V0dGluZyB3b3JzZS4gVGltZSB0byBtb3ZlLmBdLFxuICAgICdleHBsb3JhdGlvbkV2ZW50JyxcbiAgICB1bmRlZmluZWQpXG5sZXQgd2lzcEFwcHJvYWNoNCA9IG5ldyBzdG9yeUVsZW1lbnQoJ2l0ZW0nLFxuICAgIFtgVGhlIHdpc3AgYmFsbCBmbGllcyB0b3dhcmRzIHlvdSBhZ2Fpbi4gVGhpcyB0aW1lIHlvdSdyZSByZWFkeSBhbmQgeW91IGxhbmQgYSBzdHJpa2UgaW4gdGhlIG1pZGRsZSBvZiBpdHMgZ2xvd2luZyBib2R5LmAsIGBXaXRoIGEgZml6emluZyBzb3VuZCwgdGhlIHdpc3AgZXhwbG9kZXMgaW50byB0aW55IHNwZWNrcyBvZiBsaWdodC5gLCBgWW91IHNlZSBvbmUgb2YgdGhlIGJpZ2dlciBzcGVja3MsIGEgZmlzdC1zaXplZCBiYWxsIG9mIGxpZ2h0LCBoYXMgbGFuZGVkIHVuZGVyIHlvdXIgZmVldC5gLCBgWW91IHJlYWNoIGludG8gdGhlIHNub3cgYW5kIHBpY2sgaXQgdXAuIEl0IGVtaXRzIGEgd2FybWluZyBhdXJhLmAsIGBbQ2xpY2sgdGhlIEludmVudG9yeSBidXR0b24gdG8gZXF1aXAgaXRlbXNdYF0sXG4gICAgYWxsSXRlbXMud2lzcEJhbGwsXG4gICAgd2lzcEFwcHJvYWNoNSlcbmxldCB3aXNwQXBwcm9hY2gzID0gbmV3IHN0b3J5RWxlbWVudCgnYmF0dGxlJyxcbiAgICBbYFlvdSB0dXJuIGFyb3VuZCwgdHJ5aW5nIHRvIGtlZXAgaXQgaW4gc2lnaHQuYCwgYEl0IHNlZW1zIHRvIGJlIGEgZ2xvd2luZyB3aXNwIG9mIGxpZ2h0LmAsIGBJdCBzZWVtcyB0byBiZSBnZXR0aW5nIHJlYWR5IHRvIHN3b29wIGluIHRvd2FyZHMgeW91IGFnYWluLmAsIGBJdCdzIGNlcnRhaW5seSBubyBjYW1wZmlyZSwgYW5kIGl0IGRvZXNuJ3Qgc2VlbSB0byBiZSBmcmllbmRseS4gWW91IG5lZWQgYW5zd2VycywgYnV0IHN1cnZpdmFsIGNvbWVzIGZpcnN0LiBZb3UncmUgbm90IHN1cmUgeW91IGNhbiB0YWtlIG1hbnkgbW9yZSBvZiB0aGlzIFwid2lzcCdzXCIgZmx5LWJ5cy4gWW91IGhhdmUgbm90aGluZyBidXQgeW91ciBmaXN0cyB0byBkZWZlbmQgeW91cnNlbGYgd2l0aC5gXSxcbiAgICBbbW9uc3RlcnMud2lzcDFdLFxuICAgIHdpc3BBcHByb2FjaDQpXG5sZXQgd2lzcEFwcHJvYWNoMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFRoZSBibGl6emFyZCwgdGhlIHRyZWVzIGFuZCB0aGUgc25vdyBkb24ndCBoZWxwLmAsIGBBcyB5b3Ugc3RlcCBjbG9zZXIsIHRoZSBsaWdodCBzdWRkZW5seSBtb3Zlcy4gSXQgZmxpZXMgYSBsaXR0bGUgdXB3YXJkcywgYW5kIHRoZW4gbW92ZXMgY2xvc2VyIHRvd2FyZHMgeW91LmAsIGBUaGUgbGlnaHQgc3BlZWRzIHVwLCBmbHlpbmcgdG93YXJkcyB5b3UsIHVudGlsIGl0IGZsaWVzIHJpZ2h0IHRocm91Z2ggeW91LCBwYWluZnVsbHkgYnVybmluZyB5b3VyIGZsZXNoLmBdLFxuICAgICdleHBsb3JhdGlvbkV2ZW50JyxcbiAgICB3aXNwQXBwcm9hY2gzKVxubGV0IHdpc3BBcHByb2FjaDEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgY2FuJ3QgaGVscCBidXQgZmVlbCB3ZWFrZXIuIFRoZSBjb2xkIG11c3QgYmUgZ2V0dGluZyB0byB5b3UuYCwgYFlvdSBuZWVkIGhlbHAuIFlvdSBkZWNpZGUgdG8gd2FsayBjbG9zZXIgdG8gdGhlIGxpZ2h0LmAsIGBZb3Ugc3RlcCBzbG93bHksIHRyeWluZyB0byBzZWUgd2hhdCB0aGUgbGlnaHQgaXMuYF0sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnLFxuICAgIHdpc3BBcHByb2FjaDIpXG5sZXQgd2lzcDIgPSBuZXcgc3RvcnlFbGVtZW50KCdjaG9pY2UnLFxuICAgIFtgWW91ciB2aXNpb24gaXMgc28gYmx1cnJ5IHRoYXQgeW91IGNhbid0IHF1aXRlIG1ha2Ugb3V0IHdoYXQgdGhlIGxpZ2h0IGlzLmAsIGBQZXJoYXBzLCBjYW1wZmlyZT8gUGVyaGFwcyBzb21lb25lIGlzIGluIHRoaXMgZm9yZXN0IGFmdGVyIGFsbC5gLCBgSXQgY291bGQgYWxzbyBiZSBiYW5kaXRzLiBQb2FjaGVycy4gV29yc2hpaHBwZXJzIG9mIGV2aWwgU3VucywgcmVhZHkgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgYSBkeWluZyB0cmF2ZWxlci5gLCBgQXBwcm9hY2ggdGhlIGxpZ2h0IHNvdXJjZT9gXSxcbiAgICBbe2Nob2ljZVRleHQ6ICdTbG93bHkgYXBwcm9hY2ggdGhlIGxpZ2h0LicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnRm9Nc2F3V2lzcCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiB3aXNwQXBwcm9hY2gxfSxcbiAgICB7Y2hvaWNlVGV4dDogJ1R1cm4gYXJvdW5kIGFuZCB3YWxrIGF3YXkgZm9ybSB0aGUgbGlnaHQuJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdGb01ub3RTZWVuV2lzcCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiB3aXNwTGVhdmV9XSxcbiAgICB1bmRlZmluZWQpXG5sZXQgd2lzcDEgPSBuZXcgc3RvcnlFbGVtZW50KCdyYW5kb21FbmNvdW50ZXInLFxuICAgIFtgWW91IGNvbnRpbnVlIHRydWRnaW5nIHRocm91Z2ggdGhlIHNub3cuYCwgYFlvdSBkb24ndCBzZWVtIHRvIGZlZWwgeW91ciBmZWV0LiBZb3UgaG9wZSBpdCdzIG5vdCBkdWUgdG8gZnJvc3RiaXRlLmAsIGBBcyB5b3UgbGlmdCB5b3VyIGhlYWQgdG8gbG9vayBmb3J3YXJkLCBwbGFjaW5nIHlvdXIgaGFuZCBhZ2FpbnN0IHlvdXIgZm9yZWhlYWQgdG8gYmxvY2sgb2ZmIHRoZSB3aW5kLCB5b3Ugc2VlIGEgbGlnaHQgYmV0d2VlbiB0aGUgdHJlZXMuYF0sXG4gICAge2hhc1BsYXllclNlZW5NZTogZmFsc2V9LFxuICAgIHdpc3AyKVxubGV0IGNvcnBzZUxlYXZlID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IHR1cm4gYXJvdW5kLCBub3Qgd2lzaGluZyB0byBkaXN0dXJiIHRoZSBjb3Jwc2UuYCwgYFlvdSdsbCBtYWtlIGl0IG91dCBvZiBoZXJlLmAsIGBOb3QgdGhpcyB3YXksIGJ1dCB5b3Ugd2lsbC5gLCBgQXMgeW91IHdhbGsgYXdheSBmcm9tIHRoZSBib2R5LCB5b3UgY2FuJ3QgaGVscCBidXQgZmVlbCB3ZWFrZXIuIFByb2JhYmx5IGZyb3N0Yml0ZS4gUmlnaHQ/YF0sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnLFxuICAgIFsnc3RhdHMnLCAnYmVuZXZvbGVuY2UnLCAxMF0pXG5sZXQgY29ycHNlU2VhcmNoMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdXIgaGFuZCBtb3ZlcyByaWdodCB0aHJvdWdoIHRoZSBzbm93LmAsIGBZb3UgdHJ5IGFnYWluLiBZb3UgY2FuJ3QgbW92ZSB0aGUgc25vdy4gWW91ciBoYW5kIG1vdmVzIHJpZ2h0IHRocm91Z2ggdGhlIGNvcnBzZSB0b28uYCwgYFlvdSB0dXJuIGFyb3VuZC5gLCBgQXQgZmlyc3QsIHlvdSB0aG91Z2h0IHRoYXQgdGhlIGJsaXp6YXJkIGZpbGxlZCBpbiBhbnkgdHJhY2tzIGluIHRoZSBzbm93LiBOb3cgdGhhdCB5b3UncmUgbG9va2luZyAtIGl0J3Mgbm90IHRoYXQuYCwgYFlvdSdyZSBub3QgbGVhdmluZyBhbnkgZm9vdHByaW50cyBpbiB0aGUgc25vdyBhdCBhbGwuYCwgYFdoYXQgdGhlIGhlbGwgaXMgZ29pbmcgb24/YF0sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnLFxuICAgIFsnc3RhdHMnLCAnZXZpbCcsIDEwXSlcbmxldCBjb3Jwc2VTZWFyY2gxID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgQWxvbmUsIHdpdGggbm8gYmVsb25naW5ncywgaW4gdGhlIG1pZGRsZSBvZiB3aW50ZXIgaW4gdGhlIEZvcmVzdCBvZiBNaXJyb3JzP2AsIGBZZWFoLCB5b3UnbGwgdGFrZSBhbnl0aGluZywgb3IgaXQnbGwgYmUgdmVyeSBlYXN5IHRvIGVuZCB1cCBsaWtlIHRoaXMgcGVyc29uLmAsIGBZb3UgbG93ZXIgeW91cnNlbGYgdG93YXJkcyB0aGUgYm9keSwgdHJ5aW5nIHRvIHJlbW92ZSBzb21lIHNub3cgZnJvbSB0aGUgYm9keS5gXSxcbiAgICAnZXhwbG9yYXRpb25FdmVudCcsXG4gICAgY29ycHNlU2VhcmNoMilcbmxldCBjb3Jwc2UyID0gbmV3IHN0b3J5RWxlbWVudCgnY2hvaWNlJyxcbiAgICBbYExvb3Rpbmcgd291bGQgYmUgYSBuZXcgbG93LmAsIGBBbHRob3VnaC4uLmAsIGBZb3UncmUgaW4gbm8gY29uZGl0aW9uIHRvIGJlIHBpY2t5LmAsIGBTZWFyY2ggdGhlIGJvZHk/YF0sXG4gICAgW3tjaG9pY2VUZXh0OiAnU2VhcmNoIHRoZSBib2R5LicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnRm9Nc2VhcmNoZWRCb2R5JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGNvcnBzZVNlYXJjaDF9LFxuICAgIHtjaG9pY2VUZXh0OiAnTGVhdmUgdGhlIGJvZHkgYWxvbmUuJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdGb01sZWZ0Qm9keScsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBjb3Jwc2VMZWF2ZX1dLFxuICAgICdleHBsb3JhdGlvbkV2ZW50JylcbmxldCBjb3Jwc2UxID0gbmV3IHN0b3J5RWxlbWVudCgncmFuZG9tRW5jb3VudGVyJyxcbiAgICBbJ1lvdSBjb250aW51ZSBtb3ZpbmcgdGhyb3VnaCB0aGUgRm9yZXN0IG9mIE1pcnJvcnMsIHdoZW4geW91IHNlZSBhIG1vdW5kIGluIHRoZSBzbm93LicsICdUaGUgc25vdyBzZWVtcyB0byBiZSBjb3ZlcmluZyBzb21ldGhpbmcuJywgJ1lvdXIgc3VzcGljaW9ucyBhcmUgdHJ1ZS4gSXQgaXMgYSBsb25lbHkgYm9keSwgaW4gdGhlIGZyb3N0ZWQgZm9yZXN0LCBjb3ZlcmVkIGluIHNub3cuJ10sXG4gICAge2hhc1BsYXllclNlZW5NZTogZmFsc2V9LFxuICAgIGNvcnBzZTIpXG5sZXQgdHVza3dvbGYzID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgSHVoPyBJcyBpdCBibGluZD8gQ3Vyc2VkPyBQZXJoYXBzIGl0J3MgYSBTcGlyaXQncyBpbGx1c2lvbj8gT3IgbWF5YmUgeW91J3JlIGhhbGx1Y2luYXRpbmcuYCwgYFdoYXRldmVyIGl0IGlzLCB0aGUgdHVza3dvbGYgYXQgbGVhc3Qgc2VlbXMgdmVyeSByZWFsLiBZb3UncmUgbm90IGluIGFueSBjb25kaXRpb24gdG8gaW52ZXN0aWdhdGUuYCwgYFlvdSB3b24ndCBnZXQgYW5vdGhlciBjaGFuY2UuIFlvdSBxdWlja2x5IGJhY2sgYXdheSBmcm9tIHRoZSB0dXNrd29sZiB3aGlsZSBpdCdzIGNvbmZ1c2VkIG9yIGRpc3RyYWN0ZWQuYF0sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnLFxuICAgIHVuZGVmaW5lZClcbmxldCB0dXNrd29sZjIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BUaGUgZ3Jvd2xpbmcgc2VlbXMgdG8gYmUgY2xvc2UuIE1heWJlIDE1IG1ldGVycyBiZWhpbmQgeW91LmAsIGBUaGUgdHVza3dvbGYgZG9lc24ndCBzZWVtIHRvIGJlIHN0cmlraW5nIHRob3VnaC4gT2RkLmAsIGBZb3Ugc2xvd2x5IHR1cm4gYXJvdW5kLmAsIGBBIGJpZyB3b2xmIG9mIHNpbHZlciBmdXIgc3RhbmRzIG5vdCBmYXIgZnJvbSB3aGVyZSB5b3UgYXJlLCB0d28gMzAgY21zIGxvbmcgdHVza3MgYXQgdGhlIHJlYWR5LmAsICdJdCBzcGlucyBhcm91bmQgaW4gcGxhY2UsIHNuaWZmaW5nIGFuZCBzZWFyY2hpbmcgZm9yIHNvbWV0aGluZy4gSXQgaWdub3JlcyB5b3UgY29tcGxldGVseS4nXSxcbiAgICAnZXhwbG9yYXRpb25FdmVudCcsXG4gICAgdHVza3dvbGYzKVxubGV0IHR1c2t3b2xmMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ3JhbmRvbUVuY291bnRlcicsXG4gICAgWydBcyB5b3UgcnVuIHRocm91Z2ggdGhlIGZvcmVzdCwgeW91ciB0aG91Z2h0cyBzdGFydCBnYXRoZXIuJywgJ1lvdSBrbm93IHRoZSBGYXRlZCBSZWFsbSBxdWl0ZSB3ZWxsLicsICdKdWRnaW5nIGJ5IHRoZSBmcm9zdGVkIHBlYWtzIGluIHRoZSBkaXN0YW5jZSwgdGhpcyBtdXN0IGJlIHRoZSBGb3Jlc3Qgb2YgTWlycm9ycy4gTmFtZWQgYWZ0ZXIgdGhlIGNsZWFyIHdoaXRlIHNub3cgdGhhdCBsaWVzIGhlcmUgZm9yIDE2IG91dCBvZiB0aGUgMjAgbW9udGhzLicsICdZb3VyIHRob3VnaHRzIHBhdXNlIGFzIHlvdSBoZWFyIGdyb3dsaW5nIGJlaGluZCB5b3UuIEEgdHVza3dvbGYuIEZ1Y2suJ10sXG4gICAge2hhc1BsYXllclNlZW5NZTogZmFsc2V9LFxuICAgIHR1c2t3b2xmMilcbi8vIFdBS0UgVVAgU0VRVUVOQ0VcbmxldCB3YWtlVXBNb3ZlID0gbmV3IHN0b3J5RWxlbWVudCgnZXhwbG9yYXRpb24nLFxuICAgIFtgWW91ciBib2R5IG1vdmVzIHF1aWNrbHksIGJ1dCB0aGUgZmVlbGluZyBvZiBudW1ibmVzcyBhbGwgb3ZlciBpcyBvdmVyd2hlbG1pbmcuYCwgYE11c3QgYmUgdGhlIGZyb3N0Yml0ZS4gSWYgeW91J3JlIGx1Y2t5LCB5b3Ugd29uJ3QgbG9zZSBhbnkgZmluZ2VycyBvciB0b2VzLmAsIGBJbiBhbnkgY2FzZSwgaXQncyB0aW1lIHRvIG1vdmUsIG9yIHlvdSdsbCBsb3NlIHlvdXIgbGlmZSBhcyB3ZWxsLmAsIGBbVVNFIFdBU0Qgb3IgY2xpY2sgdGhlIG1hcCB0byBtb3ZlLl1gXSxcbiAgICBbe2VuY291bnRlclN0b3J5RWxlbWVudDogd2lzcDEsIHRpbGVOdW1iZXI6ICcjdGlsZTMwJywgaWNvbjogaWNvbnMuaWNvblRyZWV9LFxuICAgIHtlbmNvdW50ZXJTdG9yeUVsZW1lbnQ6IGNvcnBzZTEsIHRpbGVOdW1iZXI6ICcjdGlsZTUwJywgaWNvbjogaWNvbnMuaWNvblRyZWUyfSxcbiAgICB7ZW5jb3VudGVyU3RvcnlFbGVtZW50OiB0dXNrd29sZjEsIHRpbGVOdW1iZXI6ICcjdGlsZTcwJywgaWNvbjogaWNvbnMuaWNvblRyZWUzfSxcbiAgICB7ZW5jb3VudGVyU3RvcnlFbGVtZW50OiBlbmRGb3Jlc3QxLCB0aWxlTnVtYmVyOiAnI3RpbGUzJywgaWNvbjogaWNvbnMuaWNvblBlcnNvbn1dLFxuICAgIHVuZGVmaW5lZClcbmxldCB3YWtlVXBMaWUyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91ciBleWVzIG9wZW4gYWdhaW4uIFlvdSBmZWVsIG5vdGljZWFibHkgd2Vha2VyLiBZb3VyIHZpc2lvbiBzZWVtcyBibHVycnkuYCwgYFRoZSBjbGVhciBldmVuaW5nIHNreSBoYXMgY2hhbmdlZCBpbnRvIGEgbmF2eSBibHVlIGR1c2suYCwgJ1lvdSBhbG1vc3QgbGV0IHlvdXIgZXllcyBjbG9zZSBhZ2Fpbiwgd2hlbiB5b3UgaGVhciB0aGUgaG93bCBvZiBhIHR1c2t3b2xmLiBEcml2ZW4gYnkgcHVyZSBpbnN0aW5jdCwgeW91IGdldCB0byB5b3VyIGtuZWVzLCB0aGVuIHRvIHlvdXIgZmVldCwgYW5kIHN0YXJ0IG1vdmluZy4nLCBgRXZlcnlvbmUgaGFzIHRvIGdvIG9uZSBkYXksIGJ1dCB0dXNrd29sZiBmb29kIGlzbid0IHlvdXIgd2F5LmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICB3YWtlVXBNb3ZlKVxubGV0IHdha2VVcExpZTEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgbGllIG9uIHlvdXIgYmVsbHkgaW4gdGhlIHNub3csIGZlZWxpbmcgcG93ZXJsZXNzIHRvIG1vdmUuYCwgYFlvdSBhbG1vc3QgZG9uJ3QgZmVlbCB0aGUgY29sZC4gWW91IHdvbmRlciBpZiBpdCBtZWFucyB0aGF0IHlvdSdyZSBhbG1vc3QgZGVhZCBhbHJlYWR5LiBIb3cgZGlkIHlvdSBnZXQgaGVyZT8gV2VyZSB5b3Ugcm9iYmVkP2AsICdZb3UgY2xvc2UgeW91ciBleWVzIGFnYWluLiBNYXliZSB0aGlzIHByb2JsZW0gd2lsbCBkaXNhcHBlYXIgbGlrZSBhIGJhZCBkcmVhbS4nXSxcbiAgICB1bmRlZmluZWQsXG4gICAgd2FrZVVwTGllMilcbmxldCB3YWtlVXBSaXNlMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbJ1lvdSBnZXQgdG8geW91ciBmZWV0LiBBZ2Fpbiwgd2l0aCBzdXJwcmlzaW5nIGVhc2UuJywgJ1lvdSBtdXN0IG5vdCBoYXZlIGJlZW4gb3V0IGZvciBsb25nLiBZb3UgZmVlbCBsdWNreS4gRnJvc3QgdGFrZXMgbGl2ZXMgcXVpY2tseS4nLCAnWW91IGxvb2sgYmFjayBkb3duLiBUaGUgd2luZCBoYXMgYWxyZWFkeSBkb25lIGl0cyBqb2IgLSB0aGVyZSBpcyBhbG1vc3Qgbm8gaW5kZW50YXRpb24gaW4gdGhlIHNub3cgZnJvbSB5b3VyIGJvZHkgYWxyZWFkeS4nLCBgWW91IGRvbid0IGZlZWwgcGFydGljdWxhcmx5IGNvbGQgeWV0LCBidXQgeW91IHJ1YiB5b3VyIGhhbmRzIGZvciB3YXJtdGggbmV2ZXJ0aGVsZXNzLmBdLFxuICAgIFsnZ29sZCcsIDIwMF0sXG4gICAgd2FrZVVwTW92ZSlcbmxldCB3YWtlVXBSaXNlMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbJ1lvdSBzZWVtIHRvIGJlIGx5aW5nIG9uIHlvdXIgYmVsbHkuJywgJ1lvdSBwbGFudCB5b3VyIGhhbmRzIGluIHRoZSBzbm93LCB0cnlpbmcgdG8gcmlzZSB0byB5b3VyIGtuZWVzLicsICdZb3UgcmlzZSB0byB5b3VyIGtuZWVzIHdpdGggc3VycHJpc2luZyBlYXNlLicsIGBZb3UgbG9vayBhcm91bmQuIFlvdXIgc2F0Y2hlbCBkb2Vzbid0IHNlZW0gdG8gYmUgd2l0aCB5b3UuIEhvdyBkaWQgeW91IGdldCBoZXJlPyBXZXJlIHlvdSByb2JiZWQ/YF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHdha2VVcFJpc2UyKVxubGV0IHdha2VVcDEgPSBuZXcgc3RvcnlFbGVtZW50KCdjaG9pY2UnLFxuICAgIFsnWW91IG9wZW4geW91ciBleWVzIHRvIHNlZSBwdXJlIHdoaXRlIGFyb3VuZCB5b3UuJywgJ1lvdSBsaWZ0IHlvdXIgaGVhZC4gVHJlZXRvcHMgY292ZXJlZCBpbiBzcGFya2xpbmcgd2hpdGUgc25vdy4gQ2xlYXIgZXZlbmluZyBza3kuIFNvdW5kcyBvZiB0aGUgd2luZC4nXSxcbiAgICBbe2Nob2ljZVRleHQ6ICdUcnkgdG8gZ2V0IHVwLicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnd2FrZVVwRGF5JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IHdha2VVcFJpc2UxfSxcbiAgICB7Y2hvaWNlVGV4dDogJ0NvbnRpbnVlIGx5aW5nIGluIHRoZSBzbm93LicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnd2FrZVVwTmlnaHQnLFxuICAgIGNob2ljZU5leHRTdG9yeTogd2FrZVVwTGllMX1dLFxuICAgIHVuZGVmaW5lZClcbi8vIGV4cG9ydFxubGV0IHNjcmlwdE9iamVjdHMgPSB7IHNwaXJpdEFwcGVhcjIgfTtcbmV4cG9ydCB7IHN0b3J5RWxlbWVudCwgc2NyaXB0T2JqZWN0cyB9OyIsIi8vIGltcG9ydDogc3RvcnlFbGVtZW50LCBzdG9yeUVsZW1lbnRzLCBodWQsIGdyYWJJdGVtLCBjaGFyMSwgY2xhc3NlcywgbGlzdEVuZW1pZXMsIG1vdmVPbiwgZW5lbWllcyBhcnJheSwgZW5lbXkgb2JqZWN0c1xuaW1wb3J0IHtcbiAgICBwbGF5ZXJIYW5kLCBvcHBvbmVudEhhbmQsIGN1cnJlbnRCaWQsIGFjY3VzYXRpb24sIGV4YW1wbGVMaW5lcywgZGllMSwgZGllMiwgZGllMywgZGllNCwgZGllNSwgZGllNiwgc3RhcnREaWNlR2FtZSwgZmFsc2VDdWJlcywgcm9sbDZkNFBsYXllciwgcm9sbDZkNE9wcG9uZW50LCByb2xsMWQ0LCByb2xsUGhhc2UsIGJpZFBoYXNlLCBmaWZ0eUZpZnR5LCBvbmVUaGlyZCwgb3Bwb25lbnRSZXNwb25zZSwgb3Bwb25lbnRCaWQsIGNhbGxPdXQsIGdhbWVFbmRcbn0gZnJvbSAnLi9jb21wX2RpY2VfZ2FtZSc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCB7IFxuICAgIHRvcF9iYXIsXG4gICAgbG9nX3dpbmRvdyxcbiAgICBtYWluX3dpbmRvdyxcbiAgICBpbWFnZV93aW5kb3csXG4gICAgbWVudV93aW5kb3csXG4gICAgYnV0dG9uX3dpbmRvdyxcbiAgICBhdHRhY2tfYnV0dG9uLFxuICAgIHNwZWNpYWxfYnV0dG9uLFxuICAgIGludmVudG9yeV9idXR0b24sXG4gICAgc3RhdHNfYnV0dG9uLFxuICAgIGRpYWxvZ0FuaW1hdGlvbkVuZFxufSBmcm9tICcuL2NvbXBfaHVkJztcbmltcG9ydCB7IGVuZW1pZXMsIGxpc3RFbmVtaWVzLCBzd2l0Y2hBdHRhY2sgfSBmcm9tIFwiLi9jb21wX2JhdHRsZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGdyYWJJdGVtLCBwbGF5ZXJHb2xkLCBhZGRHb2xkIH0gZnJvbSAnLi9jb21wX2ludmVudG9yeV9zeXN0ZW0nO1xuaW1wb3J0IHtcbiAgICBDaGFyYWN0ZXIsXG4gICAgTW9uc3RlcixcbiAgICBKYW5pdG9yLFxuICAgIEFjY291bnRhbnQsXG4gICAgRGFuY2VyLFxuICAgIGNoYXIxLFxuICAgIG1lbnVVcGRhdGVyLFxuICAgIE5QQ01ha2VyLFxuICAgIE5QQ1JvbGVcbn0gZnJvbSAnLi9jb21wX29iamVjdHNfYW5kX21ldGhvZHMnO1xuLy8gaW1wb3J0IHsgIHN0b3J5RWxlbWVudHMgfSBmcm9tICcuL2NvbXBfc3Rvcnlfb2JqZWN0cyc7XG5pbXBvcnQgeyBzdG9yeUVsZW1lbnQsIHNjcmlwdE9iamVjdHMgfSBmcm9tICcuL2NvbXBfc2NyaXB0JztcbmltcG9ydCB7IFJhY2UsIHJhY2VzIH0gZnJvbSAnLi9jb21wX3JhY2VzJztcbmNvbnN0IGV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJy4vY29tcF9ldmVudF9lbWl0dGVyJyk7XG4vLyBnYW1lLWxvbmcgdmFyc1xubGV0IG5ld1BsYXllckNvbnNlcXVlbmNlcyA9IFtdO1xubGV0IGlzUGxheWVyRXhwbG9yaW5nID0gZmFsc2U7XG5sZXQgQ2hvc2VuID0ge307XG4vLyB1cGRhdGUgY2hvc2VuXG5mdW5jdGlvbiB1cGRhdGVDaG9zZW4oKSB7XG4gICAgbGV0IGFsbFN0b3J5RWxlbWVudHMgPSBzdG9yeUVsZW1lbnQuZ2V0QWxsSW5zdGFuY2VzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxTdG9yeUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN3aXRjaCAoYWxsU3RvcnlFbGVtZW50c1tpXS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdkZXNjcmlwdGlvbic6XG4gICAgICAgICAgICBjYXNlICdpdGVtJzpcbiAgICAgICAgICAgIGNhc2UgJ2JhdHRsZSc6XG4gICAgICAgICAgICBjYXNlICdleHBsb3JhdGlvbic6XG4gICAgICAgICAgICBjYXNlICdyYW5kb21FbmNvdW50ZXInOlxuICAgICAgICAgICAgY2FzZSAnZm9ybSc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlcGxhY2VBbGwoJ0Nob3Nlbk5hbWUnLCBDaG9zZW4ubmFtZSk7IFxuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVwbGFjZUFsbCgnQ2hvc2VuU3VybmFtZScsIENob3Nlbi5zdXJuYW1lKTsgXG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXBsYWNlQWxsKCd4ZScsIENob3Nlbi5oZSk7IFxuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVwbGFjZUFsbCgneGlzJywgQ2hvc2VuLmhpcyk7IFxuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVwbGFjZUFsbCgneGltJywgQ2hvc2VuLmhpbSk7IFxuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVwbGFjZUFsbCgneGltc2VsZicsIENob3Nlbi5oaW1zZWxmKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2hvaWNlJzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVwbGFjZUFsbCgnQ2hvc2VuTmFtZScsIENob3Nlbi5uYW1lKTsgXG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXBsYWNlQWxsKCdDaG9zZW5TdXJuYW1lJywgQ2hvc2VuLnN1cm5hbWUpOyBcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlcGxhY2VBbGwoJ3hlJywgQ2hvc2VuLmhlKTsgXG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXBsYWNlQWxsKCd4aXMnLCBDaG9zZW4uaGlzKTsgXG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXBsYWNlQWxsKCd4aW0nLCBDaG9zZW4uaGltKTsgXG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXBsYWNlQWxsKCd4aW1zZWxmJywgQ2hvc2VuLmhpbXNlbGYpOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBhbGxTdG9yeUVsZW1lbnRzW2ldLm1vZGlmaWVycy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLm1vZGlmaWVyc1trXS5jaG9pY2VUZXh0ID0gYWxsU3RvcnlFbGVtZW50c1tpXS5tb2RpZmllcnNba10uY2hvaWNlVGV4dC5yZXBsYWNlQWxsKCdDaG9zZW5OYW1lJywgQ2hvc2VuLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLm1vZGlmaWVyc1trXS5jaG9pY2VUZXh0ID0gYWxsU3RvcnlFbGVtZW50c1tpXS5tb2RpZmllcnNba10uY2hvaWNlVGV4dC5yZXBsYWNlQWxsKCdDaG9zZW5TdXJuYW1lJywgQ2hvc2VuLnN1cm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLm1vZGlmaWVyc1trXS5jaG9pY2VUZXh0ID0gYWxsU3RvcnlFbGVtZW50c1tpXS5tb2RpZmllcnNba10uY2hvaWNlVGV4dC5yZXBsYWNlQWxsKCd4ZScsIENob3Nlbi5oZSk7XG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0ubW9kaWZpZXJzW2tdLmNob2ljZVRleHQgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLm1vZGlmaWVyc1trXS5jaG9pY2VUZXh0LnJlcGxhY2VBbGwoJ3hpcycsIENob3Nlbi5oaXMpO1xuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLm1vZGlmaWVyc1trXS5jaG9pY2VUZXh0ID0gYWxsU3RvcnlFbGVtZW50c1tpXS5tb2RpZmllcnNba10uY2hvaWNlVGV4dC5yZXBsYWNlQWxsKCd4aW0nLCBDaG9zZW4uaGltKTtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS5tb2RpZmllcnNba10uY2hvaWNlVGV4dCA9IGFsbFN0b3J5RWxlbWVudHNbaV0ubW9kaWZpZXJzW2tdLmNob2ljZVRleHQucmVwbGFjZUFsbCgneGltc2VsZicsIENob3Nlbi5oaW1zZWxmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkaWFsb2d1ZSc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLm5wY0xpbmUgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ubnBjTGluZS5yZXBsYWNlQWxsKCdDaG9zZW5OYW1lJywgQ2hvc2VuLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ubnBjTGluZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5ucGNMaW5lLnJlcGxhY2VBbGwoJ0Nob3NlblN1cm5hbWUnLCBDaG9zZW4uc3VybmFtZSk7IFxuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ubnBjTGluZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5ucGNMaW5lLnJlcGxhY2VBbGwoJ3hlJywgQ2hvc2VuLmhlKTsgXG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5ucGNMaW5lID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLm5wY0xpbmUucmVwbGFjZUFsbCgneGlzJywgQ2hvc2VuLmhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5ucGNMaW5lID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLm5wY0xpbmUucmVwbGFjZUFsbCgneGltJywgQ2hvc2VuLmhpbSk7XG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5ucGNMaW5lID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLm5wY0xpbmUucmVwbGFjZUFsbCgneGltc2VsZicsIENob3Nlbi5oaW1zZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzW2tdLmRpYWxvZ3VlQ2hvaWNlID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlc1trXS5kaWFsb2d1ZUNob2ljZS5yZXBsYWNlQWxsKCdDaG9zZW5OYW1lJywgQ2hvc2VuLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlc1trXS5kaWFsb2d1ZUNob2ljZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXNba10uZGlhbG9ndWVDaG9pY2UucmVwbGFjZUFsbCgnQ2hvc2VuU3VybmFtZScsIENob3Nlbi5zdXJuYW1lKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzW2tdLmRpYWxvZ3VlQ2hvaWNlID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlc1trXS5kaWFsb2d1ZUNob2ljZS5yZXBsYWNlQWxsKCd4ZScsIENob3Nlbi5oZSk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlc1trXS5kaWFsb2d1ZUNob2ljZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXNba10uZGlhbG9ndWVDaG9pY2UucmVwbGFjZUFsbCgneGlzJywgQ2hvc2VuLmhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzW2tdLmRpYWxvZ3VlQ2hvaWNlID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlc1trXS5kaWFsb2d1ZUNob2ljZS5yZXBsYWNlQWxsKCd4aW0nLCBDaG9zZW4uaGltKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXNba10uZGlhbG9ndWVDaG9pY2UgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzW2tdLmRpYWxvZ3VlQ2hvaWNlLnJlcGxhY2VBbGwoJ3hpbXNlbGYnLCBDaG9zZW4uaGltc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb25zZXF1ZW5jZSc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0uY29uc2VxdWVuY2VUZXh0Lmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0uY29uc2VxdWVuY2VUZXh0W2tdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dFtrXS5yZXBsYWNlQWxsKCdDaG9zZW5OYW1lJywgQ2hvc2VuLm5hbWUpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHRba10gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0uY29uc2VxdWVuY2VUZXh0W2tdLnJlcGxhY2VBbGwoJ0Nob3NlblN1cm5hbWUnLCBDaG9zZW4uc3VybmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0uY29uc2VxdWVuY2VUZXh0W2tdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dFtrXS5yZXBsYWNlQWxsKCd4ZScsIENob3Nlbi5oZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0uY29uc2VxdWVuY2VUZXh0W2tdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dFtrXS5yZXBsYWNlQWxsKCd4aXMnLCBDaG9zZW4uaGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHRba10gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0uY29uc2VxdWVuY2VUZXh0W2tdLnJlcGxhY2VBbGwoJ3hpbScsIENob3Nlbi5oaW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dFtrXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHRba10ucmVwbGFjZUFsbCgneGltc2VsZicsIENob3Nlbi5oaW1zZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIHVwZGF0ZSBjb25jZXB0XG5mdW5jdGlvbiB1cGRhdGVDb25jZXB0KCkge1xuICAgIGxldCBhbGxTdG9yeUVsZW1lbnRzID0gc3RvcnlFbGVtZW50LmdldEFsbEluc3RhbmNlcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsU3RvcnlFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzd2l0Y2ggKGFsbFN0b3J5RWxlbWVudHNbaV0udHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZGVzY3JpcHRpb24nOlxuICAgICAgICAgICAgY2FzZSAnaXRlbSc6XG4gICAgICAgICAgICBjYXNlICdiYXR0bGUnOlxuICAgICAgICAgICAgY2FzZSAnY2hvaWNlJzpcbiAgICAgICAgICAgIGNhc2UgJ2V4cGxvcmF0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ3JhbmRvbUVuY291bnRlcic6XG4gICAgICAgICAgICBjYXNlICdmb3JtJzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVwbGFjZUFsbCgnSnVzdGljZScsIGNoYXIxLnNwaXJpdENvbmNlcHQuY29uY2VwdCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RpYWxvZ3VlJzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ubnBjTGluZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5ucGNMaW5lLnJlcGxhY2VBbGwoJ0p1c3RpY2UnLCBjaGFyMS5zcGlyaXRDb25jZXB0LmNvbmNlcHQpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXNba10uZGlhbG9ndWVDaG9pY2UgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzW2tdLmRpYWxvZ3VlQ2hvaWNlLnJlcGxhY2VBbGwoJ0p1c3RpY2UnLCBjaGFyMS5zcGlyaXRDb25jZXB0LmNvbmNlcHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29uc2VxdWVuY2UnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dFtrXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHRba10ucmVwbGFjZUFsbCgnSnVzdGljZScsIGNoYXIxLnNwaXJpdENvbmNlcHQuY29uY2VwdCk7IFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8gdXBkYXRlIHN0b3J5RWxlbWVudHNcbmZ1bmN0aW9uIG5ld1VwZGF0ZU5hbWVzKGFuc3dlcikge1xuICAgIGxldCBhbGxTdG9yeUVsZW1lbnRzID0gc3RvcnlFbGVtZW50LmdldEFsbEluc3RhbmNlcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsU3RvcnlFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzd2l0Y2ggKGFsbFN0b3J5RWxlbWVudHNbaV0udHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZGVzY3JpcHRpb24nOlxuICAgICAgICAgICAgY2FzZSAnaXRlbSc6XG4gICAgICAgICAgICBjYXNlICdiYXR0bGUnOlxuICAgICAgICAgICAgY2FzZSAnY2hvaWNlJzpcbiAgICAgICAgICAgIGNhc2UgJ2V4cGxvcmF0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ3JhbmRvbUVuY291bnRlcic6XG4gICAgICAgICAgICBjYXNlICdmb3JtJzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVwbGFjZUFsbCgnU29tZWJvZHknLCBhbnN3ZXIpOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkaWFsb2d1ZSc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLm5wY0xpbmUgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ubnBjTGluZS5yZXBsYWNlQWxsKCdTb21lYm9keScsIGFuc3dlcik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlc1trXS5kaWFsb2d1ZUNob2ljZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXNba10uZGlhbG9ndWVDaG9pY2UucmVwbGFjZUFsbCgnU29tZWJvZHknLCBhbnN3ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29uc2VxdWVuY2UnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dFtrXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHRba10ucmVwbGFjZUFsbCgnU29tZWJvZHknLCBhbnN3ZXIpOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBtZW51X3dpbmRvdy50ZXh0Q29udGVudCA9IG1lbnVfd2luZG93LnRleHRDb250ZW50LnJlcGxhY2UoJ1NvbWVib2R5JywgYW5zd2VyKTtcbn1cbi8vIHRoZSBmdW5jdGlvbiBpcyBBTFdBWVMgc3RhdGljXG4vLyBmdW5jdGlvbiBzdG9yeSh0eXBlLCB0ZXh0LCBtb2RpZmllcnMpXG5mdW5jdGlvbiBzdG9yeVRlbGxlcihzdG9yeUVsZW1lbnQpIHtcbiAgICB3aGlsZSAobWFpbl93aW5kb3cuZmlyc3RDaGlsZCkge21haW5fd2luZG93LnJlbW92ZUNoaWxkKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpfTtcbiAgICBpZiAoc3RvcnlFbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHN0b3J5RWxlbWVudFswXSA9PSAnc3RhdHMnIHx8IHN0b3J5RWxlbWVudFswXSA9PSAnZ29sZCcpIHtcbiAgICAgICAgICAgIGlmIChzdG9yeUVsZW1lbnRbMF0gPT0gJ3N0YXRzJykge1xuICAgICAgICAgICAgICAgIGdpdmVTdGF0cyhzdG9yeUVsZW1lbnRbMV0sIHN0b3J5RWxlbWVudFsyXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZEdvbGQoc3RvcnlFbGVtZW50WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzdG9yeUVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChzdG9yeUVsZW1lbnQudHlwZSAhPT0gJ2RpYWxvZ3VlJyAmJiBzdG9yeUVsZW1lbnQudHlwZSAhPT0gJ2NvbnNlcXVlbmNlJykge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0RmxpcHBlcihzdG9yeUVsZW1lbnQsIDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RvcnlFbGVtZW50LnR5cGUgPT0gJ2RpYWxvZ3VlJykge1xuICAgICAgICAgICAgICAgICAgICBuZXdEaWFsb2d1ZU1ha2VyKHN0b3J5RWxlbWVudCwgMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc2VxdWVuY2VTaG93ZXIoc3RvcnlFbGVtZW50LCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aWxlVHJpZ2dlcnMod2hpY2hUaWxlSXNQbGF5ZXJPbiwgY3VycmVudEV4cGxvcmF0aW9uU3RvcnlFbGVtZW50KTtcbiAgICB9XG59XG4vLy0tLSBzdXBwbGVtZW50YXJ5IGZ1bmN0aW9ucyAtLS1cbi8vIG5ldyBjb250aW51ZSBidXR0b24gb3BlcmF0b3JcbmxldCBhbm5vdW5jZW1lbnQ7XG5mdW5jdGlvbiB0ZXh0RmxpcHBlcihzdG9yeUVsZW1lbnQsIGxvb3AsIHN0eWxlKSB7XG4gICAgaWYgKHN0b3J5RWxlbWVudC50eXBlID09ICdyYW5kb21FbmNvdW50ZXInIHx8IHN0b3J5RWxlbWVudC5tb2RpZmllcnMgPT0gJ2V4cGxvcmF0aW9uRXZlbnQnIHx8IHN0b3J5RWxlbWVudC5uZXh0U3RvcnlFbGVtZW50ID09ICdleHBsb3JhdGlvbkV2ZW50JykgeyBtb3ZlT24gPSBmYWxzZTsgfVxuICAgIGxldCBzdG9yeVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdG9yeVBhcmFncmFwaC50ZXh0Q29udGVudCA9IHN0b3J5RWxlbWVudC50ZXh0W2xvb3BdO1xuICAgIGlmIChzdHlsZSA9PSAneWVsbG93JykgeyBzdG9yeVBhcmFncmFwaC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6eWVsbG93OycpOyB9XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoc3RvcnlQYXJhZ3JhcGgpO1xuICAgIGlmIChsb29wIDwgc3RvcnlFbGVtZW50LnRleHQubGVuZ3RoKSB7XG4gICAgICAgIGxldCBjb250aW51ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb250aW51ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbGljayBoZXJlIHRvIGNvbnRpbnVlLic7XG4gICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGNvbnRpbnVlQnV0dG9uKTtcbiAgICAgICAgY29udGludWVCdXR0b24uZm9jdXMoKTtcbiAgICAgICAgY29udGludWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsb29wKys7XG4gICAgICAgICAgICB0ZXh0RmxpcHBlcihzdG9yeUVsZW1lbnQsIGxvb3ApO1xuICAgICAgICAgICAgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQoY29udGludWVCdXR0b24pO1xuICAgICAgICAgICAgaWYgKGxvb3AgPT0gc3RvcnlFbGVtZW50LnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzdG9yeUVsZW1lbnQudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZXNjcmlwdGlvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcnlFbGVtZW50Lm1vZGlmaWVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGxheWVyQ29uc2VxdWVuY2VzLnB1c2goc3RvcnlFbGVtZW50Lm1vZGlmaWVycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yeVRlbGxlcihzdG9yeUVsZW1lbnQubmV4dFN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYmF0dGxlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0JhdHRsZVN0YXJ0ZXIoc3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpdGVtJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWJJdGVtKHN0b3J5RWxlbWVudC5tb2RpZmllcnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3VuY2VtZW50ID0geyB0ZXh0OiBbYEFjcXVpcmVkICR7c3RvcnlFbGVtZW50Lm1vZGlmaWVycy5uYW1lfSFgXSwgdHlwZTogJ2l0ZW1BY3F1aXJlZCcsIG5leHRTdG9yeUVsZW1lbnQ6IHN0b3J5RWxlbWVudC5uZXh0U3RvcnlFbGVtZW50IH07XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmxpcHBlcihhbm5vdW5jZW1lbnQsIDAsICd5ZWxsb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpdGVtQWNxdWlyZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcnlUZWxsZXIoYW5ub3VuY2VtZW50Lm5leHRTdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nob2ljZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDaG9pY2Uoc3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdleHBsb3JhdGlvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFeHBsb3JhdGlvbihzdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNQbGF5ZXJFeHBsb3JpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JhbmRvbUVuY291bnRlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobWFpbl93aW5kb3cuZmlyc3RDaGlsZCkgeyBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZChtYWluX3dpbmRvdy5maXJzdENoaWxkKSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcnlFbGVtZW50Lm1vZGlmaWVycy5oYXNQbGF5ZXJTZWVuTWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZUV2ZW50c1NlZW4rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVPbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpcmNsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUaWxlID0gd2hpY2hUaWxlSXNQbGF5ZXJPbihjaXJjbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjY7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb29wZWRUaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RpbGUke2l9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvb3BlZFRpbGUuaWQgPT0gY3VycmVudFRpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvb3BlZFRpbGUuaGFzQ2hpbGROb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vcGVkVGlsZS5yZW1vdmVDaGlsZChsb29wZWRUaWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50Lm5leHRTdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuZEV4cGxvcmF0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleHBsb3JhdGlvbkJvYXJkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZV93aW5kb3cucmVtb3ZlQ2hpbGQoYm9hcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGltYWdlX3dpbmRvdy5maXJzdENoaWxkKSB7IGltYWdlX3dpbmRvdy5yZW1vdmVDaGlsZChpbWFnZV93aW5kb3cuZmlyc3RDaGlsZCkgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3J5VGVsbGVyKHN0b3J5RWxlbWVudC5uZXh0U3RvcnlFbGVtZW50KTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdmb3JtJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Zvcm1NYWtlcihzdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdG9yeUVsZW1lbnQubW9kaWZpZXJzID09ICdleHBsb3JhdGlvbkV2ZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBtb3ZlT24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RvcnlFbGVtZW50Lm1vZGlmaWVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdG9yeUVsZW1lbnQubW9kaWZpZXJzWzBdID09ICdzdGF0cycgfHwgc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1swXSA9PSAnZ29sZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdG9yeUVsZW1lbnQubW9kaWZpZXJzWzBdID09ICdzdGF0cycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaXZlU3RhdHMoc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1sxXSwgc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1syXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZEdvbGQoc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1sxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuLy8gY29uc2VxdWVuY2UgZnVuY3Rpb25cbmZ1bmN0aW9uIGNvbnNlcXVlbmNlU2hvd2VyKHN0b3J5RWxlbWVudCwgbGluZSkge1xuICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgY29ycmVjdENvbnNlcXVlbmNlID0gbnVsbDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3J5RWxlbWVudC50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChuZXdQbGF5ZXJDb25zZXF1ZW5jZXMuaW5jbHVkZXMoc3RvcnlFbGVtZW50LnRleHRbaV0uZGVwZW5kZW5jeSkpIHtcbiAgICAgICAgICAgIGNvcnJlY3RDb25zZXF1ZW5jZSA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvcnJlY3RDb25zZXF1ZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IHN0b3J5RWxlbWVudC50ZXh0W2NvcnJlY3RDb25zZXF1ZW5jZV0uY29uc2VxdWVuY2VUZXh0W2xpbmVdO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgICAgIGlmIChsaW5lIDwgc3RvcnlFbGVtZW50LnRleHRbY29ycmVjdENvbnNlcXVlbmNlXS5jb25zZXF1ZW5jZVRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgY29udGludWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbnRpbnVlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NsaWNrIGhlcmUgdG8gY29udGludWUuJztcbiAgICAgICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGNvbnRpbnVlQnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnRpbnVlQnV0dG9uLmZvY3VzKCk7XG4gICAgICAgICAgICBjb250aW51ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsaW5lKys7XG4gICAgICAgICAgICAgICAgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQoY29udGludWVCdXR0b24pO1xuICAgICAgICAgICAgICAgIGNvbnNlcXVlbmNlU2hvd2VyKHN0b3J5RWxlbWVudCwgbGluZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5lID09IHN0b3J5RWxlbWVudC50ZXh0W2NvcnJlY3RDb25zZXF1ZW5jZV0uY29uc2VxdWVuY2VUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50Lm5leHRTdG9yeUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50Lm5leHRTdG9yeUVsZW1lbnQpO1xuICAgIH1cbn1cbi8vIG5ldyBkaWFsb2d1ZSBmdW5jdGlvblxuLy8gZWFjaCBjb252ZXJzYXRpb24gaXMgbm90IGxpa2UgYSBkaWFsb2d1ZSB0cmVlIGluIGEgdmlkZW9nYW1lLCBidXQgYSBzbGlkaW5nIHdhdGVyZmFsbC5cbmxldCByZWxhdGlvbnNoaXBNZXRlciA9IDA7XG5mdW5jdGlvbiBuZXdEaWFsb2d1ZU1ha2VyKHN0b3J5RWxlbWVudCwgbGluZSkge1xuICAgIGxldCBucGNEaWFsb2d1ZUxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbnBjRGlhbG9ndWVMaW5lLnRleHRDb250ZW50ID0gc3RvcnlFbGVtZW50LnRleHRbbGluZV0ubnBjTGluZTtcbiAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChucGNEaWFsb2d1ZUxpbmUpO1xuICAgIGlmIChsaW5lICE9PSBzdG9yeUVsZW1lbnQudGV4dC5sZW5ndGggLSAxKSB7XG4gICAgICAgIHN0b3J5RWxlbWVudC50ZXh0W2xpbmVdLnJlc3BvbnNlcy5mb3JFYWNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICByZXNwb25zZUJ1dHRvbi50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmRpYWxvZ3VlQ2hvaWNlO1xuICAgICAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQocmVzcG9uc2VCdXR0b24pO1xuICAgICAgICAgICAgcmVzcG9uc2VCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaG9pY2VCdXR0b24nKTtcbiAgICAgICAgICAgIHJlc3BvbnNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkaWFsb2d1ZUJ1dHRvbnMgPSBtYWluX3dpbmRvdy5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBkaWFsb2d1ZUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbGV0IHlvdXJMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHlvdXJMaW5lLnRleHRDb250ZW50ID0gYFwiJHtyZXNwb25zZS5kaWFsb2d1ZUNob2ljZX1cImA7XG4gICAgICAgICAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoeW91ckxpbmUpO1xuICAgICAgICAgICAgICAgIHJlbGF0aW9uc2hpcE1ldGVyID0gcmVsYXRpb25zaGlwTWV0ZXIgKyByZXNwb25zZS5wb2ludHM7XG4gICAgICAgICAgICAgICAgbmV3RGlhbG9ndWVNYWtlcihzdG9yeUVsZW1lbnQsIHJlc3BvbnNlLmRpYWxvZ3VlTmV4dExpbmUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmVsYXRpb25zaGlwTWV0ZXIgPD0gLTIpIHtcbiAgICAgICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKHN0b3J5RWxlbWVudC5tb2RpZmllcnNbMl0pO1xuICAgICAgICB9IGVsc2UgaWYgKHJlbGF0aW9uc2hpcE1ldGVyIDwgMikge1xuICAgICAgICAgICAgbmV3UGxheWVyQ29uc2VxdWVuY2VzLnB1c2goc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1sxXSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVsYXRpb25zaGlwTWV0ZXIgPj0gMikge1xuICAgICAgICAgICAgbmV3UGxheWVyQ29uc2VxdWVuY2VzLnB1c2goc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVsYXRpb25zaGlwTWV0ZXIgPSAwO1xuICAgICAgICBsZXQgY29udGludWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29udGludWVCdXR0b24udGV4dENvbnRlbnQgPSAnQ2xpY2sgaGVyZSB0byBjb250aW51ZS4nO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChjb250aW51ZUJ1dHRvbik7XG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLmZvY3VzKCk7XG4gICAgICAgIGNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50Lm5leHRTdG9yeUVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyBuZXcgY2hvaWNlIGZ1bmN0aW9uXG5mdW5jdGlvbiBuZXdDaG9pY2Uoc3RvcnlFbGVtZW50KSB7XG4gICAgc3RvcnlFbGVtZW50Lm1vZGlmaWVycy5mb3JFYWNoKCh0aGlzQ2hvaWNlKSA9PiB7XG4gICAgICAgIGxldCBjaG9pY2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2hvaWNlQnV0dG9uLnRleHRDb250ZW50ID0gdGhpc0Nob2ljZS5jaG9pY2VUZXh0O1xuICAgICAgICBjaG9pY2VCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsJ2Nob2ljZUJ1dHRvbicpO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChjaG9pY2VCdXR0b24pO1xuICAgICAgICBjaG9pY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaCh0aGlzQ2hvaWNlLmNob2ljZU1vZGlmaWVycyk7XG4gICAgICAgICAgICBpZiAodGhpc0Nob2ljZS5jaG9pY2VNb2RpZmllcnMgPT0gJ2NsYXNzV3JhaXRoJykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihjaGFyMSwgSmFuaXRvci5wcm90b3R5cGUpO1xuICAgICAgICAgICAgICAgIEphbml0b3IuY2FsbChjaGFyMSwgY2hhcjEubmFtZSwgMCwgMTAsIDIwLCAxMDAsICdOb3JtYWwgQXR0YWNrJywgJycsICcnLCAnJywgW10pO1xuICAgICAgICAgICAgICAgIG1lbnVfd2luZG93LnRleHRDb250ZW50ID0gbWVudV93aW5kb3cudGV4dENvbnRlbnQucmVwbGFjZSgnWW91ciBjbGFzcyBpcyB1bmtub3duLicsICdZb3UgYXJlIGEgV3JhaXRoLicpO1xuICAgICAgICAgICAgICAgIHNwZWNpYWxfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBzd2l0Y2hBdHRhY2soY2hhcjEpIH0pO1xuICAgICAgICAgICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KCdXcmFpdGgnKTsgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzID09ICdjbGFzc1BvbHRlcmdlaXN0Jykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihjaGFyMSwgQWNjb3VudGFudC5wcm90b3R5cGUpO1xuICAgICAgICAgICAgICAgIEFjY291bnRhbnQuY2FsbChjaGFyMSwgY2hhcjEubmFtZSwgMCwgMTAsIDIwLCAxMDAsICdOb3JtYWwgQXR0YWNrJywgJycsICcnLCAnJywgW10pO1xuICAgICAgICAgICAgICAgIG1lbnVfd2luZG93LnRleHRDb250ZW50ID0gbWVudV93aW5kb3cudGV4dENvbnRlbnQucmVwbGFjZSgnWW91ciBjbGFzcyBpcyB1bmtub3duLicsICdZb3UgYXJlIGEgUG9sdGVnZWlzdC4nKTtcbiAgICAgICAgICAgICAgICBzcGVjaWFsX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc3dpdGNoQXR0YWNrKGNoYXIxKSB9KTsgICAgXG4gICAgICAgICAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoJ1BvbHRlcmdlaXN0Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzID09ICdjbGFzc0d1YXJkaWFuU3Bpcml0Jykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihjaGFyMSwgRGFuY2VyLnByb3RvdHlwZSk7XG4gICAgICAgICAgICAgICAgRGFuY2VyLmNhbGwoY2hhcjEsIGNoYXIxLm5hbWUsIDAsIDEwLCAyMCwgMTAwLCAnTm9ybWFsIEF0dGFjaycsICcnLCAnJywgJycsIFtdKTtcbiAgICAgICAgICAgICAgICBtZW51X3dpbmRvdy50ZXh0Q29udGVudCA9IG1lbnVfd2luZG93LnRleHRDb250ZW50LnJlcGxhY2UoJ1lvdXIgY2xhc3MgaXMgdW5rbm93bi4nLCAnWW91IGFyZSBhIEd1YXJkaWFuIFNwaXJpdC4nKTtcbiAgICAgICAgICAgICAgICBzcGVjaWFsX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgc3dpdGNoQXR0YWNrKGNoYXIxKSB9KTsgICBcbiAgICAgICAgICAgICAgICBldmVudEVtaXR0ZXIuZW1pdCgnR3VhcmRpYW5TcGlyaXQnKTsgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzID09ICdyYWNlUmVhbG1lcicpIHtcbiAgICAgICAgICAgICAgICBjaGFyMS5yYWNlID0gcmFjZXMuUmVhbG1lcjtcbiAgICAgICAgICAgICAgICBtZW51X3dpbmRvdy50ZXh0Q29udGVudCA9IG1lbnVfd2luZG93LnRleHRDb250ZW50LnJlcGxhY2UoJyBZb3VyIGFybW9yIGNsYXNzJywgJyBJbiBsaWZlLCB5b3Ugd2VyZSBhIFJlYWxtZXIuIFlvdXIgYXJtb3IgY2xhc3MnKTtcbiAgICAgICAgICAgICAgICBjaGFyMS5jdXJyZW50SFAgKz0gY2hhcjEucmFjZS5yYWNlSFBCb251cztcbiAgICAgICAgICAgICAgICBjaGFyMS5tYXhIUCArPSBjaGFyMS5yYWNlLnJhY2VIUEJvbnVzO1xuICAgICAgICAgICAgICAgIGNoYXIxLmFybW9yQ2xhc3MgKz0gY2hhcjEucmFjZS5yYWNlQXJtb3JCb251cztcbiAgICAgICAgICAgICAgICBtZW51VXBkYXRlcigpO1xuICAgICAgICAgICAgICAgIGxldCBzdGF0c19yYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXRzX3JhY2UnKTtcbiAgICAgICAgICAgICAgICBzdGF0c19yYWNlLnRleHRDb250ZW50ID0gJ0luIGxpZmUsIHlvdSB3ZXJlIGEgUmVhbG1lci4nXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzID09ICdyYWNlTW9ydGFyJykge1xuICAgICAgICAgICAgICAgIGNoYXIxLnJhY2UgPSByYWNlcy5Nb3J0YXI7XG4gICAgICAgICAgICAgICAgbWVudV93aW5kb3cudGV4dENvbnRlbnQgPSBtZW51X3dpbmRvdy50ZXh0Q29udGVudC5yZXBsYWNlKCcgWW91ciBhcm1vciBjbGFzcycsICcgSW4gbGlmZSwgeW91IHdlcmUgYSBNb3J0YXIuIFlvdXIgYXJtb3IgY2xhc3MnKTtcbiAgICAgICAgICAgICAgICBjaGFyMS5jdXJyZW50SFAgKz0gY2hhcjEucmFjZS5yYWNlSFBCb251cztcbiAgICAgICAgICAgICAgICBjaGFyMS5tYXhIUCArPSBjaGFyMS5yYWNlLnJhY2VIUEJvbnVzO1xuICAgICAgICAgICAgICAgIGNoYXIxLmFybW9yQ2xhc3MgKz0gY2hhcjEucmFjZS5yYWNlQXJtb3JCb251cztcbiAgICAgICAgICAgICAgICBtZW51VXBkYXRlcigpO1xuICAgICAgICAgICAgICAgIHN0YXRzX3JhY2UudGV4dENvbnRlbnQgPSAnSW4gbGlmZSwgeW91IHdlcmUgYSBNb3J0YXIuJ1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzQ2hvaWNlLmNob2ljZU1vZGlmaWVycyA9PSAncmFjZURlYWRsYW5kZXInKSB7XG4gICAgICAgICAgICAgICAgY2hhcjEucmFjZSA9IHJhY2VzLkRlYWRsYW5kZXI7XG4gICAgICAgICAgICAgICAgbWVudV93aW5kb3cudGV4dENvbnRlbnQgPSBtZW51X3dpbmRvdy50ZXh0Q29udGVudC5yZXBsYWNlKCcgWW91ciBhcm1vciBjbGFzcycsICcgSW4gbGlmZSwgeW91IHdlcmUgYSBEZWFkbGFuZGVyLiBZb3VyIGFybW9yIGNsYXNzJyk7XG4gICAgICAgICAgICAgICAgY2hhcjEuY3VycmVudEhQICs9IGNoYXIxLnJhY2UucmFjZUhQQm9udXM7XG4gICAgICAgICAgICAgICAgY2hhcjEubWF4SFAgKz0gY2hhcjEucmFjZS5yYWNlSFBCb251cztcbiAgICAgICAgICAgICAgICBjaGFyMS5hcm1vckNsYXNzICs9IGNoYXIxLnJhY2UucmFjZUFybW9yQm9udXM7XG4gICAgICAgICAgICAgICAgbWVudVVwZGF0ZXIoKTtcbiAgICAgICAgICAgICAgICBzdGF0c19yYWNlLnRleHRDb250ZW50ID0gJ0luIGxpZmUsIHlvdSB3ZXJlIGEgRGVhZGxhbmRlci4nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpc0Nob2ljZS5jaG9pY2VNb2RpZmllcnMgPT0gJ2NvbXBhc3Npb25TcGlyaXQnKSB7XG4gICAgICAgICAgICAgICAgY2hhcjEuc3Bpcml0Q29uY2VwdC5jb25jZXB0ID0gJ0NvbXBhc3Npb24nO1xuICAgICAgICAgICAgICAgIGNoYXIxLnNwaXJpdENvbmNlcHQuZGVzY3JpcHRpb24gPSAnIG9mIENvbXBhc3Npb24nO1xuICAgICAgICAgICAgICAgIG1lbnVVcGRhdGVyKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ29uY2VwdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzID09ICdqdXN0aWNlU3Bpcml0Jykge1xuICAgICAgICAgICAgICAgIGNoYXIxLnNwaXJpdENvbmNlcHQuY29uY2VwdCA9ICdKdXN0aWNlJztcbiAgICAgICAgICAgICAgICBjaGFyMS5zcGlyaXRDb25jZXB0LmRlc2NyaXB0aW9uID0gJyBvZiBKdXN0aWNlJztcbiAgICAgICAgICAgICAgICBtZW51VXBkYXRlcigpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNvbmNlcHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzQ2hvaWNlLmNob2ljZU1vZGlmaWVycyA9PSAnZnJlZWRvbVNwaXJpdCcpIHtcbiAgICAgICAgICAgICAgICBjaGFyMS5zcGlyaXRDb25jZXB0LmNvbmNlcHQgPSAnRnJlZWRvbSc7XG4gICAgICAgICAgICAgICAgY2hhcjEuc3Bpcml0Q29uY2VwdC5kZXNjcmlwdGlvbiA9ICcgb2YgRnJlZWRvbSc7XG4gICAgICAgICAgICAgICAgbWVudVVwZGF0ZXIoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVDb25jZXB0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpc0Nob2ljZS5jaG9pY2VNb2RpZmllcnMgPT0gJ21hc3RlcnlTcGlyaXQnKSB7XG4gICAgICAgICAgICAgICAgY2hhcjEuc3Bpcml0Q29uY2VwdC5jb25jZXB0ID0gJ01hc3RlcnknO1xuICAgICAgICAgICAgICAgIGNoYXIxLnNwaXJpdENvbmNlcHQuZGVzY3JpcHRpb24gPSAnIG9mIE1hc3RlcnknO1xuICAgICAgICAgICAgICAgIG1lbnVVcGRhdGVyKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ29uY2VwdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzID09ICd3aXNkb21TcGlyaXQnKSB7XG4gICAgICAgICAgICAgICAgY2hhcjEuc3Bpcml0Q29uY2VwdC5jb25jZXB0ID0gJ1dpc2RvbSc7XG4gICAgICAgICAgICAgICAgY2hhcjEuc3Bpcml0Q29uY2VwdC5kZXNjcmlwdGlvbiA9ICcgb2YgV2lzZG9tJztcbiAgICAgICAgICAgICAgICBtZW51VXBkYXRlcigpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNvbmNlcHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzQ2hvaWNlLmNob2ljZU1vZGlmaWVycyA9PSAnY2hvc2VuUGVjdWxpYXInKSB7XG4gICAgICAgICAgICAgICAgQ2hvc2VuID0gTlBDTWFrZXIoJ1BlY3VsaWFyJywgJ1F1aXJrZScsICdzaGUnLCAnaGVyJywgJ2hlcicsICdoZXJzZWxmJyk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2hvc2VuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpc0Nob2ljZS5jaG9pY2VNb2RpZmllcnMgPT0gJ2Nob3NlblNuYXBkcmFnb24nKSB7XG4gICAgICAgICAgICAgICAgQ2hvc2VuID0gTlBDTWFrZXIoJ1NuYXBkcmFnb24nLCAnUXVpcmtlJywgJ2hlJywgJ2hpcycsICdoaW0nLCAnaGltc2VsZicpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNob3NlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzID09ICdjaG9zZW5MeXNhbmRlcicpIHtcbiAgICAgICAgICAgICAgICBDaG9zZW4gPSBOUENNYWtlcignTHlzYW5kZXInLCAnTWFjQXBwbGVieScsICd0aGV5JywgJ3RoZWlyJywgJ3RoZW0nLCAndGhlbXNlbHZlcycpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNob3NlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RvcnlUZWxsZXIodGhpc0Nob2ljZS5jaG9pY2VOZXh0U3RvcnkpO1xuICAgICAgICB9KTtcbiAgICB9KVxufVxuLy8gbmV3IGJhdHRsZSBmdW5jdGlvbnNcbmxldCBzdG9yeUFmdGVyQmF0dGxlID0gbnVsbDtcbmZ1bmN0aW9uIG5ld0JhdHRsZVN0YXJ0ZXIoc3RvcnlFbGVtZW50KSB7XG4gICAgc3RvcnlFbGVtZW50Lm1vZGlmaWVycy5mb3JFYWNoKChjdXJyZW50RW5lbXkpID0+IHsgY3VycmVudEVuZW15LmN1cnJlbnRIUCA9IGN1cnJlbnRFbmVteS5tYXhIUCB9KTtcbiAgICBlbmVtaWVzLnNwbGljZSgwLCBlbmVtaWVzLmxlbmd0aCwgLi4uc3RvcnlFbGVtZW50Lm1vZGlmaWVycyk7XG4gICAgc3RvcnlBZnRlckJhdHRsZSA9IHN0b3J5RWxlbWVudDtcbiAgICBsZXQgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwbG9yYXRpb25Cb2FyZCcpO1xuICAgIGlmIChib2FyZCAhPT0gbnVsbCkgeyBib2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG4gICAgbGlzdEVuZW1pZXMoKTtcbn1cbmV2ZW50RW1pdHRlci5vbignYmF0dGxlOndpbicsICgpID0+IHtcbi8vIGZ1bmN0aW9uIGlzQmF0dGxlT3ZlcihiYXR0bGVSZXN1bHQpIHtcbiAgICAvLyBpZiAoYmF0dGxlUmVzdWx0ID09ICd3aW4nKSB7XG4gICAgICAgIGlmIChpc1BsYXllckV4cGxvcmluZyA9PSB0cnVlKSB7XG4gICAgICAgICAgICBsZXQgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwbG9yYXRpb25Cb2FyZCcpO1xuICAgICAgICAgICAgYm9hcmQuc3R5bGUuZGlzcGxheSA9ICdncmlkJzsgICAgICAgIFxuICAgICAgICB9ICAgIFxuICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gJ1lvdSB3aW4gdGhlIGJhdHRsZSEnO1xuICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgd2hpbGUgKGxvZ193aW5kb3cuY2hpbGRyZW4ubGVuZ3RoID4gMikgeyBsb2dfd2luZG93LnJlbW92ZUNoaWxkKGxvZ193aW5kb3cuZmlyc3RDaGlsZCkgfTtcbiAgICAgICAgQXJyYXkuZnJvbShsb2dfd2luZG93LmNoaWxkcmVuKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdjb2xvcjp3aGl0ZTsnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRvcF9iYXIucmVtb3ZlQ2hpbGQodG9wX2Jhci5maXJzdENoaWxkKTtcbiAgICAgICAgd2hpbGUgKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIHsgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQobWFpbl93aW5kb3cuZmlyc3RDaGlsZCkgfTtcbiAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlBZnRlckJhdHRsZS5uZXh0U3RvcnlFbGVtZW50KTtcbiAgICAgICAgc3RvcnlBZnRlckJhdHRsZSA9IG51bGw7ICAgXG59KTsgXG4gICAgLy8gfSBlbHNlIHtcbmV2ZW50RW1pdHRlci5vbignYmF0dGxlOmxvc2UnLCAoKSA9PiB7XG4gICAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSAnWW91IGRpZWQhJztcbiAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdjb2xvcjpyZWQ7Jyk7XG4gICAgICAgIGxvZ193aW5kb3cuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgICAgICBidXR0b25fd2luZG93LnJlbW92ZUNoaWxkKGF0dGFja19idXR0b24pO1xuICAgICAgICBidXR0b25fd2luZG93LnJlbW92ZUNoaWxkKHNwZWNpYWxfYnV0dG9uKTtcbiAgICAgICAgYnV0dG9uX3dpbmRvdy5yZW1vdmVDaGlsZChpbnZlbnRvcnlfYnV0dG9uKTtcbiAgICAgICAgYnV0dG9uX3dpbmRvdy5yZW1vdmVDaGlsZChzdGF0c19idXR0b24pO1xuICAgIC8vIH1cbn0pO1xuLy8gbmV3IGNoYXJhY3RlciBjcmVhdGlvbiBmdW5jdGlvblxuZnVuY3Rpb24gbmV3Rm9ybU1ha2VyKHN0b3J5RWxlbWVudCkge1xuICAgIGxldCBmb3JtX2NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgZm9ybV9jYXJkLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGZvcm1fY2FyZCk7XG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBhbnN3ZXIgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgY2hhcjEubmFtZSA9IGFuc3dlcjtcbiAgICAgICAgbmV3VXBkYXRlTmFtZXMoYW5zd2VyKTtcbiAgICAgICAgd2hpbGUgKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIHsgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQobWFpbl93aW5kb3cuZmlyc3RDaGlsZCk7IH1cbiAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50Lm5leHRTdG9yeUVsZW1lbnQpO1xuICAgIH0pXG59XG4vLyAtLS0gZXhwbG9yYXRpb24gc3lzdGVtIC0tLVxuLy8gdHJhY2tpbmcgdmFyc1xubGV0IG1vdmVPbiA9IHRydWU7XG5sZXQgc2lkZUV2ZW50c1NlZW4gPSAwO1xubGV0IGN1cnJlbnRFeHBsb3JhdGlvblN0b3J5RWxlbWVudCA9ICcnO1xuLy8gbmV3IGV4cGxvcmF0aW9uIGZ1bmN0aW9uc1xuZnVuY3Rpb24gbmV3RXhwbG9yYXRpb24oc3RvcnlFbGVtZW50KSB7XG4gICAgLy8gY2xlYXIgbWFpbiB3aW5kb3dcbiAgICBjdXJyZW50RXhwbG9yYXRpb25TdG9yeUVsZW1lbnQgPSBzdG9yeUVsZW1lbnQ7XG4gICAgd2hpbGUgKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIHttYWluX3dpbmRvdy5yZW1vdmVDaGlsZChtYWluX3dpbmRvdy5maXJzdENoaWxkKX07XG4gICAgLy8gbWFrZSBib2FyZCBhbmQgYm9hcmRVbmRlclxuICAgIGxldCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXhwbG9yYXRpb25Cb2FyZCcpO1xuICAgIGxldCBib2FyZFVuZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmRVbmRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTsgbWFyZ2luOjNweDsgZGlzcGxheTppbmxpbmUtZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMjVweCk7JylcbiAgICBib2FyZFVuZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYm9hcmRVbmRlcicpO1xuICAgIGltYWdlX3dpbmRvdy5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRVbmRlcik7XG4gICAgLy8gZHJhdyB0aWxlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI2OyBpKyspIHtcbiAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGlsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywncGFkZGluZzo1cHg7Ym9yZGVyOjFweCBzb2xpZCB3aGl0ZTtoZWlnaHQ6MTVweDt3aWR0aDoxNXB4OycpO1xuICAgICAgICB0aWxlLnNldEF0dHJpYnV0ZSgnaWQnLCBgdGlsZSR7aX1gKTtcbiAgICAgICAgYm9hcmRVbmRlci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICB9XG4gICAgLy8gY2FsbCBkcmF3SWNvbnMgZnVuY3Rpb25cbiAgICBkcmF3SWNvbnMoc3RvcnlFbGVtZW50KTtcbiAgICAvLyBkcmF3IHRoZSBjaXJjbGUgaW5zaWRlIHRoZSBzcXVhcmVzXG4gICAgbGV0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ2lkJywnY2lyY2xlJyk7XG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO2JvcmRlcjoxcHggc29saWQgd2hpdGU7Ym9yZGVyLXJhZGl1czo1MCU7IHotaW5kZXg6MTA7IGhlaWdodDogMTdweDsgd2lkdGg6IDE3cHg7Jyk7XG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgIGxldCBzdGFydFRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGlsZTEyMCcpO1xuICAgIHN0YXJ0VGlsZS5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgIC8vIGNvb3JkaW5hdGVzIG9mIGJvdW5kaW5nIHJlY3RhbmdsZSAoKipJVCBET0VTTidUIE1PVkUgV0hFTiBDSVJDTEUgTU9WRVMhKiopXG4gICAgbGV0IGluaXRpYWxDaXJjbGVYID0gY2lyY2xlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLng7XG4gICAgbGV0IGluaXRpYWxDaXJjbGVZID0gY2lyY2xlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnk7XG5cbiAgICBsZXQgY3VycmVudENpcmNsZVggPSBpbml0aWFsQ2lyY2xlWDtcbiAgICBsZXQgY3VycmVudENpcmNsZVkgPSBpbml0aWFsQ2lyY2xlWTtcbiAgICAvLyBXQVNEIHRvIG1vdmUgdGhlIGNpcmNsZVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IHN0ZXAgPSA1O1xuICAgICAgICBsZXQgYm9hcmRVbmRlckNvbGxpc2lvbiA9IGJvYXJkVW5kZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICAgICAgICAvL1RyYW5zZm9ybSAodHJhbnNsYXRlKTogQ0FMQ1VMQVRFUyBGUk9NIFRIRSBJTklUSUFMIFBPU0lUSU9OISBTTywgaW5pdGlhbENpcmNsZSBXSUxMIEJFIDAsIDAgZm9yIHRyYW5zZm9ybSB0cmFuc2xhdGVcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudENpcmNsZVkgLSBzdGVwID4gYm9hcmRVbmRlckNvbGxpc2lvbi50b3AgJiYgbW92ZU9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENpcmNsZVkgLT0gc3RlcDtcbiAgICAgICAgICAgICAgICAgICAgdGlsZVRyaWdnZXJzKHdoaWNoVGlsZUlzUGxheWVyT24oY2lyY2xlKSwgc3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudENpcmNsZVggLSBzdGVwID4gYm9hcmRVbmRlckNvbGxpc2lvbi5sZWZ0ICYmIG1vdmVPbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDaXJjbGVYIC09IHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgIHRpbGVUcmlnZ2Vycyh3aGljaFRpbGVJc1BsYXllck9uKGNpcmNsZSksIHN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDaXJjbGVZICsgc3RlcCArIDIwIDwgYm9hcmRVbmRlckNvbGxpc2lvbi5ib3R0b20gJiYgbW92ZU9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENpcmNsZVkgKz0gc3RlcDtcbiAgICAgICAgICAgICAgICAgICAgdGlsZVRyaWdnZXJzKHdoaWNoVGlsZUlzUGxheWVyT24oY2lyY2xlKSwgc3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudENpcmNsZVggKyBzdGVwICsgMTggPCBib2FyZFVuZGVyQ29sbGlzaW9uLnJpZ2h0ICYmIG1vdmVPbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDaXJjbGVYICs9IHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgIHRpbGVUcmlnZ2Vycyh3aGljaFRpbGVJc1BsYXllck9uKGNpcmNsZSksIHN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGxldCBrZXlib2FyZE1vdmVZID0gY3VycmVudENpcmNsZVkgLSBpbml0aWFsQ2lyY2xlWTtcbiAgICAgICAgbGV0IGtleWJvYXJkTW92ZVggPSBjdXJyZW50Q2lyY2xlWCAtIGluaXRpYWxDaXJjbGVYO1xuICAgICAgICBjaXJjbGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2tleWJvYXJkTW92ZVh9cHgsICR7a2V5Ym9hcmRNb3ZlWX1weClgO1xuICAgIH0pO1xuICAgIC8vIGNsaWNraW5nIHRvIG1vdmVcbiAgICAvLyBUaGlzIHdvcmtzIGJlY2F1c2UgaXQgZG9lc24ndCBORUVEIGEgY3VycmVudCBwb3NpdGlvbi4gaXQgQUxXQVlTIGNhbGN1bGF0ZXMgZnJvbSB0aGUgc3RhcnRpbmcgb25lXG4gICAgYm9hcmRVbmRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAobW92ZU9uID09IHRydWUpIHtcbiAgICAgICAgICAgIGxldCBjbGlja2VkVGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3doaWNoVGlsZURpZFlvdUNsaWNrKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpfWApO1xuICAgICAgICAgICAgbGV0IGNsaWNrZWRUaWxlQm91bmRhcmllcyA9IGNsaWNrZWRUaWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IG1vdmVYID0gY2xpY2tlZFRpbGVCb3VuZGFyaWVzLmxlZnQgKyA0IC0gaW5pdGlhbENpcmNsZVg7XG4gICAgICAgICAgICBsZXQgbW92ZVkgPSBjbGlja2VkVGlsZUJvdW5kYXJpZXMudG9wICsgNCAtIGluaXRpYWxDaXJjbGVZICsgd2luZG93LnNjcm9sbFk7XG4gICAgICAgICAgICBjaXJjbGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke21vdmVYfXB4LCAke21vdmVZfXB4KWA7XG4gICAgICAgICAgICB0aWxlVHJpZ2dlcnMod2hpY2hUaWxlSXNQbGF5ZXJPbihjaXJjbGUpLCBzdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgY3VycmVudENpcmNsZVggPSBjbGlja2VkVGlsZUJvdW5kYXJpZXMubGVmdCArIDQ7XG4gICAgICAgICAgICBjdXJyZW50Q2lyY2xlWSA9IGNsaWNrZWRUaWxlQm91bmRhcmllcy50b3AgKyA0ICsgd2luZG93LnNjcm9sbFk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIHdoaWNoIHRpbGUgZGlkIHlvdSBjbGljaz9cbmZ1bmN0aW9uIHdoaWNoVGlsZURpZFlvdUNsaWNrKGNsaWNrWCwgY2xpY2tZKSB7XG4gICAgbGV0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cInRpbGVcIl0nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0aWxlQ29sbGlzaW9uID0gdGlsZXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGNsaWNrWCA8IHRpbGVDb2xsaXNpb24ucmlnaHQgJiZcbiAgICAgICAgICAgIGNsaWNrWCA+IHRpbGVDb2xsaXNpb24ubGVmdCAmJlxuICAgICAgICAgICAgY2xpY2tZIDwgdGlsZUNvbGxpc2lvbi5ib3R0b20gJiZcbiAgICAgICAgICAgIGNsaWNrWSA+IHRpbGVDb2xsaXNpb24udG9wIFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aWxlc1tpXS5pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbi8vIHdoZW4gYSBwbGF5ZXIgbW92ZXMsIGl0IGlzIHRyaWdnZXJlZC4gcmV0dXJucyBcIiN0aWxlMzBcIiB0eXBlIG51bWJlclxuZnVuY3Rpb24gd2hpY2hUaWxlSXNQbGF5ZXJPbihjaXJjbGUpIHtcbiAgICBsZXQgY2lyY2xlQ29sbGlzaW9uID0gY2lyY2xlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJ0aWxlXCJdJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGlsZUNvbGxpc2lvbiA9IHRpbGVzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjaXJjbGVDb2xsaXNpb24ubGVmdCA8IHRpbGVDb2xsaXNpb24ucmlnaHQgJiZcbiAgICAgICAgICAgIGNpcmNsZUNvbGxpc2lvbi5yaWdodCA+IHRpbGVDb2xsaXNpb24ubGVmdCAmJlxuICAgICAgICAgICAgY2lyY2xlQ29sbGlzaW9uLnRvcCA8IHRpbGVDb2xsaXNpb24uYm90dG9tICYmXG4gICAgICAgICAgICBjaXJjbGVDb2xsaXNpb24uYm90dG9tID4gdGlsZUNvbGxpc2lvbi50b3AgXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRpbGVzW2ldLmlkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuLy8gY29tcGFyZXMgdGhlIHRpbGUgaWQgZnJvbSBhYm92ZSBhbmQgYWN0aXZhdGVzIGEgc3RvcnlFbGVtZW50XG5mdW5jdGlvbiB0aWxlVHJpZ2dlcnMocGxheWVyc1RpbGUsIHN0b3J5RWxlbWVudCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3J5RWxlbWVudC5tb2RpZmllcnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJzVGlsZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdG9yeUVsZW1lbnQubW9kaWZpZXJzW2ldLnRpbGVOdW1iZXIpO1xuICAgICAgICAgICAgaWYgKGAjJHtwbGF5ZXJzVGlsZX1gID09IHN0b3J5RWxlbWVudC5tb2RpZmllcnNbaV0udGlsZU51bWJlciAmJiAhc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tpXS5lbmNvdW50ZXJTdG9yeUVsZW1lbnQubW9kaWZpZXJzLmhhc1BsYXllclNlZW5NZSkge1xuICAgICAgICAgICAgICAgIHN0b3J5VGVsbGVyKHN0b3J5RWxlbWVudC5tb2RpZmllcnNbaV0uZW5jb3VudGVyU3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2lkZUV2ZW50c1NlZW4gPT0gc3RvcnlFbGVtZW50Lm1vZGlmaWVycy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBzdG9yeUVsZW1lbnQubW9kaWZpZXJzW3N0b3J5RWxlbWVudC5tb2RpZmllcnMubGVuZ3RoLTFdLnVubG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRyYXdMYXN0SWNvbihzdG9yeUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChgIyR7cGxheWVyc1RpbGV9YCA9PSBzdG9yeUVsZW1lbnQubW9kaWZpZXJzW3N0b3J5RWxlbWVudC5tb2RpZmllcnMubGVuZ3RoLTFdLnRpbGVOdW1iZXIgJiYgc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aC0xXS51bmxvY2tlZCkge1xuICAgICAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aC0xXS5lbmNvdW50ZXJTdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgc2lkZUV2ZW50c1NlZW4gPSAwO1xuICAgICAgICB9XG4gICAgfSAgICBcbi8vIGRyYXcgaWNvbnMgb24gdGlsZXNcbmZ1bmN0aW9uIGRyYXdJY29ucyhzdG9yeUVsZW1lbnQpIHtcbiAgICBsZXQgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRePVwidGlsZVwiXScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aCAtIDE7IGorKykge1xuICAgICAgICAgICAgaWYgKGAjJHt0aWxlc1tpXS5pZH1gID09IHN0b3J5RWxlbWVudC5tb2RpZmllcnNbal0udGlsZU51bWJlcikge1xuICAgICAgICAgICAgICAgIHRpbGVzW2ldLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgICAgICBzdG9yeUVsZW1lbnQubW9kaWZpZXJzW2pdLmljb24uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIHRpbGVzW2ldLmFwcGVuZENoaWxkKHN0b3J5RWxlbWVudC5tb2RpZmllcnNbal0uaWNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBkcmF3IGxhc3QgaWNvblxuZnVuY3Rpb24gZHJhd0xhc3RJY29uKHN0b3J5RWxlbWVudCkge1xuICAgIGxldCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJ0aWxlXCJdJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYCMke3RpbGVzW2ldLmlkfWAgPT0gc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aC0xXS50aWxlTnVtYmVyKSB7XG4gICAgICAgICAgICB0aWxlc1tpXS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICBzdG9yeUVsZW1lbnQubW9kaWZpZXJzW3N0b3J5RWxlbWVudC5tb2RpZmllcnMubGVuZ3RoLTFdLmljb24uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgdGlsZXNbaV0uYXBwZW5kQ2hpbGQoc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aC0xXS5pY29uKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIC0tLSBzdGF0cyBzeXN0ZW0gLS0tXG4vLyB0cmFjayBzdGF0c1xubGV0IHBsYXllckJlbmV2b2xlbnRCYWxhbmNlID0gMDtcbmxldCBwbGF5ZXJTaWxseUJhbGFuY2UgPSAwO1xuLy8gc3RhdHMgc2NyZWVuXG5sZXQgc3RhdHNEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbnN0YXRzRGlhbG9nLmlubmVySFRNTCA9IGBcbiAgICA8YnV0dG9uIGlkPSdjbG9zZUJ1dHRvbjInPkNsb3NlPC9idXR0b24+XG4gICAgPGRpdiBpZD0nc3RhdHNCb3gnPlxuICAgIDxoMj5TdGF0czwvaDI+XG4gICAgPHVsIGlkID0nc3RhdHNMaXN0Jz5cbiAgICAgICAgPGxpIGlkPSdzdGF0c19nZW5kZXInPllvdSBkbyBub3QgcmVtZW1iZXIgeW91ciBnZW5kZXIuPC9saT5cbiAgICAgICAgPGxpIGlkPSdzdGF0c19yYWNlJz5Zb3UgZG8gbm90IHJlbWVtYmVyIHlvdXIgcmFjZS48L2xpPlxuICAgICAgICA8bGkgaWQ9J3N0YXRzX3JvbWFudGljX3BhcnRuZXInPllvdSBkbyBub3QgcmVtZW1iZXIgd2hvIHlvdXIgcm9tYW50aWMgcGFydG5lciB3YXMuPC9saT5cbiAgICAgICAgPGxpIGlkPSdzdGF0c19jYXVzZV9vZl9kZWF0aCc+WW91IGRvIG5vdCByZW1lbWJlciB5b3VyIGNhdXNlIG9mIGRlYXRoLjwvbGk+XG4gICAgICAgIDxsaSBpZD0nc3RhdHNfZXZpbF9iZW5ldm9sZW50Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YXRzX21ldGVyJyBpZD0nc3RhdHNfbWV0ZXJfZXZpbCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhdHNfbGluZScgaWQ9J3N0YXRzX2xpbmVfZXZpbCc+RXZpbDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YXRzX2xpbmUnIGlkPSdzdGF0c19saW5lX2JlbmV2b2xlbnQnPkJlbmV2b2xlbnQ8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgaWQ9J3N0YXRzX3NvbWJlcl9zaWxseSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGF0c19tZXRlcicgaWQ9J3N0YXRzX21ldGVyX3NvbWJlcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhdHNfbGluZScgaWQ9J3N0YXRzX2xpbmVfc29tYmVyJz5Tb21iZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGF0c19saW5lJyBpZD0nc3RhdHNfbGluZV9zaWxseSc+U2lsbHk8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPC9kaXY+XG5gO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0c0RpYWxvZyk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHN0YXRzX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKG5ld1BsYXllckNvbnNlcXVlbmNlcy5pbmNsdWRlcygnY2xhc3NXcmFpdGgnKSB8fCBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMuaW5jbHVkZXMoJ2NsYXNzUG9sdGVyZ2Vpc3QnKSB8fCBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMuaW5jbHVkZXMoJ2NsYXNzR3VhcmRpYW5TcGlyaXQnKSkge1xuICAgICAgICAgICAgc3RhdHNEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgICAgICBsZXQgY2xvc2VCdXR0b24yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlQnV0dG9uMicpO1xuICAgICAgICAgICAgY2xvc2VCdXR0b24yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRzRGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBzdGF0c0RpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBkaWFsb2dBbmltYXRpb25FbmQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuLy8gdHJhY2tpbmcgYW5kIHVwZGF0aW5nIHN0YXRzXG5mdW5jdGlvbiBzdGF0c0xpbmVzVXBkYXRlcigpIHtcbiAgICBsZXQgZXZpbExpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHNfbWV0ZXJfZXZpbCcpO1xuICAgIGxldCBzb21iZXJMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXRzX21ldGVyX3NvbWJlcicpO1xuICAgIGV2aWxMaW5lLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgJHs1MC1wbGF5ZXJCZW5ldm9sZW50QmFsYW5jZX1mciAkezUwK3BsYXllckJlbmV2b2xlbnRCYWxhbmNlfWZyYDtcbiAgICBzb21iZXJMaW5lLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgJHs1MC1wbGF5ZXJTaWxseUJhbGFuY2V9ZnIgJHs1MCtwbGF5ZXJTaWxseUJhbGFuY2V9ZnJgO1xufVxuZnVuY3Rpb24gZ2l2ZVN0YXRzKHN0YXQsIGFtb3VudCkge1xuICAgIHN3aXRjaCAoc3RhdCkge1xuICAgICAgICBjYXNlICdldmlsJzpcbiAgICAgICAgICAgIHBsYXllckJlbmV2b2xlbnRCYWxhbmNlIC09IGFtb3VudDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdiZW5ldm9sZW50JzpcbiAgICAgICAgICAgIHBsYXllckJlbmV2b2xlbnRCYWxhbmNlICs9IGFtb3VudDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzb21iZXInOlxuICAgICAgICAgICAgcGxheWVyU2lsbHlCYWxhbmNlIC09IGFtb3VudDsgICAgICAgICAgICBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzaWxseSc6XG4gICAgICAgICAgICBwbGF5ZXJTaWxseUJhbGFuY2UgKz0gYW1vdW50O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN0YXRzTGluZXNVcGRhdGVyKCk7XG4gICAgc3RhdHNGbGFnc1VwZGF0ZXIoKTtcbn1cbmZ1bmN0aW9uIHN0YXRzRmxhZ3NVcGRhdGVyKCkge1xuICAgIGlmIChwbGF5ZXJCZW5ldm9sZW50QmFsYW5jZSA+IDE0KSB7XG4gICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKCdwbGF5ZXJCZW5ldm9sZW50MTUnKTtcbiAgICAgICAgaWYgKHBsYXllckJlbmV2b2xlbnRCYWxhbmNlID4gMjkpIHtcbiAgICAgICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKCdwbGF5ZXJCZW5ldm9sZW50MzAnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKHBsYXllckJlbmV2b2xlbnRCYWxhbmNlIDwgLTE0KSB7XG4gICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKCdwbGF5ZXJFdmlsMTUnKTtcbiAgICAgICAgaWYgKHBsYXllckJlbmV2b2xlbnRCYWxhbmNlIDwgLTI5KSB7XG4gICAgICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaCgncGxheWVyRXZpbDMwJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChwbGF5ZXJTaWxseUJhbGFuY2UgPiAxNCkge1xuICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaCgncGxheWVyU2lsbHkxNScpO1xuICAgICAgICBpZiAocGxheWVyU2lsbHlCYWxhbmNlID4gMjkpIHtcbiAgICAgICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKCdwbGF5ZXJTaWxseTMwJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChwbGF5ZXJTaWxseUJhbGFuY2UgPCAtMTQpIHtcbiAgICAgICAgbmV3UGxheWVyQ29uc2VxdWVuY2VzLnB1c2goJ3BsYXllclNvbWJlcjE1Jyk7XG4gICAgICAgIGlmIChwbGF5ZXJTaWxseUJhbGFuY2UgPCAtMjkpIHtcbiAgICAgICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKCdwbGF5ZXJTb21iZXIxNScpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIFRFU1RFUi4gc3RhcnQgZ2FtZVxuLy8gc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50cy50ZXN0TmFtaW5nKTtcbi8vIGFkZEdvbGQoNTAwMCk7XG5zdG9yeVRlbGxlcihzY3JpcHRPYmplY3RzLnNwaXJpdEFwcGVhcjIpO1xuLy8gc3RhcnREaWNlR2FtZSgnRGF2ZScsIGV4YW1wbGVMaW5lcyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9