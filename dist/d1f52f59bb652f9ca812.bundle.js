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
function startDiceGame(opponentName, lines, callbackEnd, prize) {
    // clear main window
    while (main_window.firstChild) { main_window.removeChild(main_window.firstChild) };
    // instructions
    let instruction = document.createElement('p');
    instruction.setAttribute('style','color:yellow');
    instruction.textContent = '[You are about to play Falsecubes. Here are the instructions: You and opponent have 6 dice each. You roll them in secret. Then you take it in turns to make increasingly high bets about how many dice of a certain roll are in your hand until one of them calls the other out on a bluff and confirms which dice are really on the table.]';
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
/* harmony import */ var _blacklake_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blacklake.mp3 */ "./src/blacklake.mp3");
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

// song playing
let audio = document.createElement('audio');
audio.setAttribute('id', 'audio');
audio.setAttribute('control', 'control');
audio.setAttribute('loop', 'loop');
let source = document.createElement('source');
source.setAttribute('src', `${_blacklake_mp3__WEBPACK_IMPORTED_MODULE_3__}`);
source.setAttribute('type', `audio/mpeg`);
audio.appendChild(source);
document.body.appendChild(audio);

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
        audio.play();
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
let goldenDagger = newItem('Dagger of the Highfate', 'weapon', 2, 0, 'n12');
// exporting object
let allItems = { goldenDagger, wispBall, magicArmor, magicRing, magicSword, ultraArmor, ultraRing, ultraSword, rustyArmor, rustySword, goldRing, healthPotion };
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
    [`The Highfate bows as the game ends.`, `She won, but she shows respect and doesn't smile too much.`, `Before you politely excuse yourself to leave the table, she smiles at you. "Good game, Serah Somebody."`, `...`, `...`],
    undefined,
    wakeUp1)
let prologue3 = new storyElement('item',
    [`The Highfate bows as the game ends.`, `You won, but you try to show respect and don't smile too much.`, `Before you politely excuse yourself to leave the table, she hands you a long, beautiful dagger.`, `"For your win," she smiles, and moves on.`, `...`, `...`],
    _comp_inventory_system__WEBPACK_IMPORTED_MODULE_1__.allItems.goldenDagger,
    wakeUp1)
let prologue2x = new storyElement('falsecubes',
    [`The Highfate picks up the stone dice on her side of the marble table.`, `She rolls them, and covers the results with her hand, smiling.`],
    {opponentName: 'The Highfate',
    opponentLines: {
        openLine: `Oh, my. The dice are favoring me tonight.`,
        bidLine: `My strategy tonight is quite bold.`,
        bluffLine: `You may not believe me, but the dice speak for themselves.`,
        accuseLine: `I conclude that this is a bluff, Serah.`,
        winLine: `And this one's mine. Thank you for the game.`,
        loseLine: `And this one's yours. You are indeed skilled.`},
    consequences: {
        win: 'prologueFalsecubesWin',
        lose: 'prologueFalsecubesLose'},
    },
    {win: prologue3, lose: prologue4})
let prologue2c = new storyElement(
    'dialogue',
    [{ lineNumber: 0, npcLine: '"Serah Somebody," the Highfate says, her speech slow and deliberate. "Care to join me for a game of Falsecubes? We can catch up after we play."', responses: 
        [{ dialogueChoice: `Certainly, your grace. It's my honor to be your first opponent tonight.`, dialogueNextLine: 1, points: 1 },
        { dialogueChoice: `I suppose I will. I've always wanted to win at Falsecubes against the Highfate.`, dialogueNextLine: 2, points: -1 }]},
    { lineNumber: 1, npcLine: '"Please, Serah Somebody," the Highfate gestures for you to relax. "You are off duty today. Enjoy the evening and do not fret about formalities."', responses: 
        [{ dialogueChoice: 'Yes, you are quite right. May the dice favor you in the game, Serah.', dialogueNextLine: 3, points: 1 },
        { dialogueChoice: 'This is how I speak with everybody, Serah Highfate. See? I am relaxing already.', dialogueNextLine: 4, points: -1 }]},
    { lineNumber: 2, npcLine: '"Is that so?" the Highfate smirks. "Well, then I should be on my best game then."', responses: 
        [{ dialogueChoice: 'You are always a formidable Falsecubes opponent, your grace. Let us play.', dialogueNextLine: 3, points: 1 },
        { dialogueChoice: 'I can give you a few pointers after the game, Serah Highfate.', dialogueNextLine: 4, points: 0 }]},
    { lineNumber: 3, npcLine: '"Thank you kindly," she says and smiles politely. "May the dice favor you, Serah Somebody."', responses: 
        [{ dialogueChoice: 'May the better bluffer win.', dialogueNextLine: 5, points: 1 },
        { dialogueChoice: `With all due respect, I've a feeling that luck is on my side tonight.`, dialogueNextLine: 5, points: -1 }]},
    { lineNumber: 4, npcLine: `"I am glad you are in a joyful mood, Serah Somebody," she says, voice suddenly warm. "It's important for me that you're comfortable."`, responses: 
        [{ dialogueChoice: `Likewise, your grace. Let me know if there's any way I can assist you throughout the reception.`, dialogueNextLine: 5, points: 1 },
        { dialogueChoice: `Growing fond of me, your grace? You haven't seen my Falsecubes skill yet.`, dialogueNextLine: 5, points: -1 }]},
    { lineNumber: 5, npcLine: `"Let us play, then. Shall we?" she says, gesturing to the table and the dice.`, responses: []}],
    ['HighfatePolite', 'HighfateNeutral', 'HighfateBanter'],
    prologue2x
)
let prologue2b = new storyElement(
    'form',
    ['The Highfate subtly nods in return, and smiles in recognition.', '[Please enter your name.]'],
    undefined,
    prologue2c
)
let prologue2 = new storyElement('description',
    [`You take a deep breath, and approach the tall woman in the leather cuirass over a long, intricate, silver robe.`, `You do your best bow in greetings, and approach the Falsecubes table.`, `Six marble, four-sides stones painted black, sit at either side of the table.`],
    undefined,
    prologue2b)
let prologue2y = new storyElement('description',
    [`You turn away, to go and mingle with the other guests, when the Highfate's eyes meet yours.`, `Well, no getting out of it now.`],
    undefined,
    prologue2)
let prologue1e = new storyElement('choice',
    [`The Highfate beckons a guest to approach her for a game of Falsecubes.`, `Do you dare approach her - and be the first guest of today's reception to play the Highfate herself?`],
    [{choiceText: `I approach the Highfate to play Falsecubes.`,
    choiceModifiers: null,
    choiceNextStory: prologue2},
    {choiceText: `I stay in the reception hall and mingle with the guests.`,
    choiceModifiers: null,
    choiceNextStory: prologue2y}],
    undefined) 
let prologue1d = new storyElement('description',
    [`The Highfate is a world-famous philosopher, and the leader of the Fated Realm.`, `The guests, however, couldn't be less concerned with philosophy.`, `Neither the monocles of rich traders, nor the decorative muskets of the adventurers, hint at any other agenda beyond impressing the Highfate.`],
    undefined,
    prologue1e)
let prologue1c = new storyElement('description',
    [`The host, the Highfate herself, presents the dice, each a work of art.`, `As the Highfate moves, the long silver robe that she wears over a leather cuirass flutters in the wind of the massive reception hall.`],
    undefined,
    prologue1d)
let prologue1b = new storyElement('description',
    [`Guests wear noble finery and adventurous attire, mingling by gas lamps.`, `They carry golden muskets, their mustaches twirled.`, `The room is alive with glass clinks and murmurs as they prepare to play Falsecubes, a dice game popular among the Fated Realm's adventuring rich.`],
    undefined,
    prologue1c)
let prologue1 = new storyElement('description',
    [`[Summer Estate of the Highfate, leader of the Fated Realm.]`, `Perched on a hill, the manor overlooks the city. Its stone facade is adorned with carvings.`, `Inside, the parlor is rich and textured, with velvet curtains framing tall windows.`],
    undefined,
    prologue1b)
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
// import: storyElement, storyElements, hud, grabItem, char1, classes, listEnemies, moveOn, enemies array, enemy objects







// import {  storyElements } from './comp_story_objects';


const eventEmitter = __webpack_require__(/*! ./comp_event_emitter */ "./src/comp_event_emitter.js");
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
            textFlipper(storyElement, loop);
            if (loop == storyElement.text.length) {
                switch (storyElement.type) {
                    case 'falsecubes':
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
                    console.log('w')
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
    (0,_comp_dice_game__WEBPACK_IMPORTED_MODULE_1__.startDiceGame)(storyElement.modifiers.opponentName, storyElement.modifiers.opponentLines, storyFalsecubesEnd, storyElement);
}
function storyFalsecubesEnd(result, prize) {
    if (result == 'win') {
        newPlayerConsequences.push(prize.modifiers.consequences.win);
        storyTeller(prize.nextStoryElement.win);
    } else {
        newPlayerConsequences.push(prize.modifiers.consequences.lose);
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

/***/ "./src/blacklake.mp3":
/*!***************************!*\
  !*** ./src/blacklake.mp3 ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a1985140f1679450d63c.mp3";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZDFmNTJmNTliYjY1MmY5Y2E4MTIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySEFBMEM7QUFDdEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxX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QUNBLE1BQU0sMEZBQTBGO0FBQ2hHO0FBQ0EsbUNBQW1DO0FBQ25DLEtBQUs7QUFDTDtBQUNBLHFDQUFxQztBQUNyQyxLQUFLO0FBQ0w7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxrQ0FBa0M7QUFDbEMsS0FBSztBQUNMO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLHNDQUFzQztBQUN0QyxLQUFLO0FBQ0w7QUFDQSxzQ0FBc0M7QUFDdEMsS0FBSztBQUNMO0FBQ0Esc0NBQXNDO0FBQ3RDLEtBQUs7QUFDTDtBQUNBLHNDQUFzQztBQUN0QyxLQUFLO0FBQ0w7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esc0NBQXNDO0FBQ3RDLEtBQUs7QUFDTDtBQUNBLHNDQUFzQztBQUN0QyxLQUFLO0FBQ0w7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxvQ0FBb0M7QUFDcEMsS0FBSztBQUNMO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLDJDQUEyQztBQUMzQyxLQUFLO0FBQ0w7QUFDQSwyQ0FBMkM7QUFDM0MsS0FBSztBQUNMO0FBQ0EsMkNBQTJDO0FBQzNDLEtBQUs7QUFDTDtBQUNBLDJDQUEyQztBQUMzQyxLQUFLO0FBQ0w7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsNENBQTRDO0FBQzVDLEtBQUs7QUFDTDtBQUNBLDRDQUE0QztBQUM1QyxLQUFLO0FBQ0w7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLDZDQUE2QztBQUM3QyxLQUFLO0FBQ0w7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsdUNBQXVDO0FBQ3ZDLEtBQUs7QUFDTDtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0EsTUFBTSxtUkFBbVI7QUFDelIsS0FBSyw4S0FBOEs7QUFDbkw7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0UUFBNFE7QUFDbFIsS0FBSywrSkFBK0o7QUFDcEs7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzUEFBc1A7QUFDNVAsS0FBSyxpSEFBaUg7QUFDdEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBLEtBQUssK0RBQVE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsbUNBQW1DO0FBQ25DLEtBQUs7QUFDTDtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVCQUF1QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxtQ0FBbUM7QUFDbkMsS0FBSztBQUNMO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUJBQXVCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVCQUF1QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkRBQTJELCtDQUFLLFVBQVU7QUFDaEYsS0FBSyw2REFBNkQsK0NBQUssV0FBVztBQUNsRixLQUFLLCtEQUErRCwrQ0FBSyxXQUFXO0FBQ3BGLEtBQUssK0RBQStELCtDQUFLLFlBQVk7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxpQ0FBaUM7QUFDakMsS0FBSztBQUNMO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLEtBQUs7QUFDTCxLQUFLLGdDQUFnQztBQUNyQztBQUNBO0FBQ0EsT0FBTztBQUNQLFdBQVcsMkhBQTJIO0FBQ3RJLFVBQVUsb0lBQW9JLEVBQUU7QUFDaEosTUFBTTtBQUNOLFdBQVcsd0hBQXdIO0FBQ25JLFVBQVUsb0lBQW9JLEVBQUU7QUFDaEosTUFBTTtBQUNOLFdBQVcsNkhBQTZIO0FBQ3hJLFVBQVUsaUhBQWlILEVBQUU7QUFDN0gsTUFBTTtBQUNOLFdBQVcsK0VBQStFO0FBQzFGLFVBQVUsMEhBQTBILEVBQUU7QUFDdEksTUFBTTtBQUNOLFdBQVcsbUpBQW1KO0FBQzlKLFVBQVUsOEhBQThILEVBQUU7QUFDMUksTUFBTSx1SEFBdUg7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSwrQkFBK0I7QUFDL0IsS0FBSztBQUNMO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7OztBQzFuQlA7QUFDZjtBQUNBLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDeUM7QUFHZjtBQUNMO0FBYUQ7QUFDeUQ7QUFDTDtBQVdwQztBQUNwQyxhQUFhLGdCQUFnQjtBQUMrQjtBQUNqQjtBQUMzQyxxQkFBcUIsbUJBQU8sQ0FBQyx5REFBc0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNEQUFZO0FBQ3ZDLG9CQUFvQiw2QkFBNkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUNBQXFDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxQ0FBcUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMENBQTBDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxQ0FBcUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGtEQUFrRDtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxQ0FBcUM7QUFDckUsb0NBQW9DLHdEQUF3RDtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNEQUFZO0FBQ3ZDLG9CQUFvQiw2QkFBNkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxQ0FBcUM7QUFDckUsb0dBQW9HLDREQUFLO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxQ0FBcUM7QUFDckUsb0hBQW9ILDREQUFLO0FBQ3pILG9DQUFvQyxrREFBa0Q7QUFDdEYsZ0tBQWdLLDREQUFLO0FBQ3JLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFDQUFxQztBQUNyRSxvQ0FBb0Msd0RBQXdEO0FBQzVGLDhJQUE4SSw0REFBSztBQUNuSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNEQUFZO0FBQ3ZDLG9CQUFvQiw2QkFBNkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxQ0FBcUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUNBQXFDO0FBQ3JFO0FBQ0Esb0NBQW9DLGtEQUFrRDtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFDQUFxQztBQUNyRSxvQ0FBb0Msd0RBQXdEO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVcsZUFBZSxrREFBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0RBQVcsY0FBYyxrREFBVyxhQUFhLGtEQUFXO0FBQ3ZFO0FBQ0E7QUFDQSxZQUFZLDJEQUFTO0FBQ3JCLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsb0JBQW9CLCtEQUFPO0FBQzNCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUpBQXlKO0FBQ3pKO0FBQ0E7QUFDQSw2QkFBNkIsa0RBQWtEO0FBQy9FLElBQUksa0RBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0VBQVE7QUFDaEMseUNBQXlDLG1CQUFtQiw0QkFBNEI7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0RBQVcsZUFBZSxrREFBVyxhQUFhLGtEQUFXO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRCw0RUFBNEUsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtREFBWTtBQUNwQywrQkFBK0IsbURBQVksZUFBZSxtREFBWSxhQUFhLG1EQUFZO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLDRCQUE0QiwrREFBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOEJBQThCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQVc7QUFDM0I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBVztBQUN2QjtBQUNBO0FBQ0Esc0NBQXNDLGtEQUFXO0FBQ2pEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSwyQ0FBMkMsd0JBQXdCO0FBQ25FLGdCQUFnQixrREFBVztBQUMzQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDREQUFLLEVBQUUsOERBQU87QUFDcEQsZ0JBQWdCLDhEQUFPLE1BQU0sNERBQUssRUFBRSw0REFBSztBQUN6QyxnQkFBZ0Isa0RBQVcsZUFBZSxrREFBVztBQUNyRCxnQkFBZ0IscURBQWMsbUNBQW1DLG9FQUFZLENBQUMsNERBQUssR0FBRztBQUN0RjtBQUNBLGNBQWM7QUFDZCxzQ0FBc0MsNERBQUssRUFBRSxpRUFBVTtBQUN2RCxnQkFBZ0IsaUVBQVUsTUFBTSw0REFBSyxFQUFFLDREQUFLO0FBQzVDLGdCQUFnQixrREFBVyxlQUFlLGtEQUFXO0FBQ3JELGdCQUFnQixxREFBYyxtQ0FBbUMsb0VBQVksQ0FBQyw0REFBSyxHQUFHO0FBQ3RGO0FBQ0EsY0FBYztBQUNkLHNDQUFzQyw0REFBSyxFQUFFLDZEQUFNO0FBQ25ELGdCQUFnQiw2REFBTSxNQUFNLDREQUFLLEVBQUUsNERBQUs7QUFDeEMsZ0JBQWdCLGtEQUFXLGVBQWUsa0RBQVc7QUFDckQsZ0JBQWdCLHFEQUFjLG1DQUFtQyxvRUFBWSxDQUFDLDREQUFLLEdBQUc7QUFDdEY7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFLLFFBQVEsOENBQUs7QUFDbEMsZ0JBQWdCLGtEQUFXLGVBQWUsa0RBQVc7QUFDckQsZ0JBQWdCLDREQUFLLGNBQWMsNERBQUs7QUFDeEMsZ0JBQWdCLDREQUFLLFVBQVUsNERBQUs7QUFDcEMsZ0JBQWdCLDREQUFLLGVBQWUsNERBQUs7QUFDekMsZ0JBQWdCLHNFQUFXO0FBQzNCO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsZ0JBQWdCLDREQUFLLFFBQVEsOENBQUs7QUFDbEMsZ0JBQWdCLGtEQUFXLGVBQWUsa0RBQVc7QUFDckQsZ0JBQWdCLDREQUFLLGNBQWMsNERBQUs7QUFDeEMsZ0JBQWdCLDREQUFLLFVBQVUsNERBQUs7QUFDcEMsZ0JBQWdCLDREQUFLLGVBQWUsNERBQUs7QUFDekMsZ0JBQWdCLHNFQUFXO0FBQzNCO0FBQ0EsY0FBYztBQUNkLGdCQUFnQiw0REFBSyxRQUFRLDhDQUFLO0FBQ2xDLGdCQUFnQixrREFBVyxlQUFlLGtEQUFXO0FBQ3JELGdCQUFnQiw0REFBSyxjQUFjLDREQUFLO0FBQ3hDLGdCQUFnQiw0REFBSyxVQUFVLDREQUFLO0FBQ3BDLGdCQUFnQiw0REFBSyxlQUFlLDREQUFLO0FBQ3pDLGdCQUFnQixzRUFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQUs7QUFDckIsZ0JBQWdCLDREQUFLO0FBQ3JCLGdCQUFnQixzRUFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQUs7QUFDckIsZ0JBQWdCLDREQUFLO0FBQ3JCLGdCQUFnQixzRUFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQUs7QUFDckIsZ0JBQWdCLDREQUFLO0FBQ3JCLGdCQUFnQixzRUFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQUs7QUFDckIsZ0JBQWdCLDREQUFLO0FBQ3JCLGdCQUFnQixzRUFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQUs7QUFDckIsZ0JBQWdCLDREQUFLO0FBQ3JCLGdCQUFnQixzRUFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUVBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1FQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtRUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELDZDQUE2QztBQUNwRyxJQUFJLDJEQUFPLFdBQVcsMkRBQU87QUFDN0I7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixJQUFJLG1FQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFVO0FBQ2xCLGVBQWUsaURBQVUsd0JBQXdCLGlEQUFVLGFBQWEsaURBQVU7QUFDbEYsbUJBQW1CLGlEQUFVO0FBQzdCLHFEQUFxRDtBQUNyRCxTQUFTO0FBQ1QsUUFBUSw4Q0FBTyxhQUFhLDhDQUFPO0FBQ25DLGVBQWUsa0RBQVcsZUFBZSxrREFBVyxhQUFhLGtEQUFXO0FBQzVFO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQyxRQUFRLGlEQUFVO0FBQ2xCLFFBQVEsb0RBQWEsYUFBYSxvREFBYTtBQUMvQyxRQUFRLG9EQUFhLGFBQWEscURBQWM7QUFDaEQsUUFBUSxvREFBYSxhQUFhLHVEQUFnQjtBQUNsRCxRQUFRLG9EQUFhLGFBQWEsbURBQVk7QUFDOUM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFLO0FBQ2I7QUFDQSxlQUFlLGtEQUFXLGVBQWUsa0RBQVcsYUFBYSxrREFBVztBQUM1RTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0RBQVcsY0FBYyxrREFBVyxhQUFhLGtEQUFXO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLFlBQVkscUJBQXFCLHVDQUF1QztBQUN4STtBQUNBLElBQUksbURBQVk7QUFDaEI7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0EsK0NBQStDLHVCQUF1QixZQUFZLFdBQVc7QUFDN0YsdUNBQXVDLEVBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsdUJBQXVCLG1CQUFtQixZQUFZLGNBQWMsWUFBWTtBQUN4STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWMsTUFBTSxjQUFjO0FBQ2hGLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxtREFBbUQ7QUFDNUc7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELE1BQU0sTUFBTSxNQUFNO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1Q0FBdUM7QUFDL0Q7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDLHdCQUF3Qix1Q0FBdUM7QUFDL0Qsb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDLGdCQUFnQixZQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQseURBQWtCO0FBQy9FLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsMkJBQTJCLEtBQUssMkJBQTJCO0FBQ3ZHLDhDQUE4QyxzQkFBc0IsS0FBSyxzQkFBc0I7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvY29tcF9hc3NldHMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL3NyYy9jb21wX2JhdHRsZV9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL3NyYy9jb21wX2RpY2VfZ2FtZS5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vc3JjL2NvbXBfZXZlbnRfZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vc3JjL2NvbXBfaHVkLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvY29tcF9pbnZlbnRvcnlfc3lzdGVtLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvY29tcF9vYmplY3RzX2FuZF9tZXRob2RzLmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvY29tcF9yYWNlcy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLXRleHQtcnBnLXdwLy4vc3JjL2NvbXBfc2NyaXB0LmpzIiwid2VicGFjazovL2Jyb3dzZXItdGV4dC1ycGctd3AvLi9zcmMvY29tcF9zZXBhcmF0b3IuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci10ZXh0LXJwZy13cC8uL3NyYy9jb21wX3N0b3J5X2Z1bmN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9LR05vUmVncmV0c1NrZXRjaC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXB1cnBsZTE6ICMwRjMzMjU7IFxuICAgIC0tcHVycGxlMjogIzFFMkIyMTtcbiAgICAtLXB1cnBsZTM6ICMyRTYzNEY7IFxuICAgIC0tZ3JleTogIzI4MjgyODtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5odG1sLCBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1ZUJztcbiAgICBmb250LXNpemU6IDExMCU7XG59XG5cbi5tYWluTWVudUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tYWluTWVudSBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTQwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAyZnIgMmZyIDNmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggNDUwcHggMWZyIDcwcHg7XG59XG5cbi50b3BfYmFyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gNztcbn1cblxuLmltYWdlX3dpbmRvdyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUxKTtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xufVxuXG4uaW1hZ2Vfd2luZG93IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMDAlO1xufVxuXG4uaW1hZ2Vfd2luZG93IGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMyk7XG59XG5cbi5pbWFnZV93aW5kb3cgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubWFpbl93aW5kb3cge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMSk7XG4gICAgZ3JpZC1jb2x1bW46IDMgLyA1O1xuICAgIGdyaWQtcm93OiAyIC8gNDtcbiAgICBmb250LXNpemU6IDEwMCU7XG59XG5cbi5tYWluX3dpbmRvdyBwLCAubWFpbl93aW5kb3cgYnV0dG9uLCAubWFpbl93aW5kb3cgaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5cbi5tYWluX3dpbmRvdyBzZWxlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LWZhbWlseTogJ1ZUJztcbiAgICBtYXJnaW4tcmlnaHQ6MTAwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dC5jaGVja21hcmtbdHlwZT1jaGVja2JveF0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG91dGxpbmU6IHZhcigtLWdyZXkpIHNvbGlkIDJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG5pbnB1dC5jaGVja21hcmtbdHlwZT1jaGVja2JveF06Y2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XG59XG5cbm9wdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XG59XG5cbmRpYWxvZyB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcyBlYXNlLW91dCBmb3J3YXJkcztcbn1cblxuLmhpZGUge1xuICAgIGFuaW1hdGlvbjogZmFkZU91dCAxcyBlYXNlLW91dCBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXR7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5cbi5tYWluX3dpbmRvdyBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tYWluX3dpbmRvdyAuY2hvaWNlQnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1haW5fd2luZG93IGJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUzKTtcbn1cblxuLm1haW5fd2luZG93IGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wdXJwbGUxKTtcbn1cblxuLm1haW5fd2luZG93IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnVlQnO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHVycGxlMSk7XG59XG5cbi5tYWluX3dpbmRvdyBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xufVxuXG4uYnV0dG9uX3dpbmRvdyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUzKTtcbiAgICBncmlkLWNvbHVtbjogMSAvIDc7XG4gICAgZ3JpZC1yb3c6IDQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xufVxuXG4uYnV0dG9uX3dpbmRvdyBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbn1cblxuLmxvZyB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUyKTtcbiAgICBncmlkLWNvbHVtbjogNSAvIDY7XG59XG5cbi5tZW51IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTIpO1xuICAgIGdyaWQtY29sdW1uOiA1IC8gNjtcbn1cblxuZGlhbG9nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUyKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA4NSU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuI2Nsb3NlQnV0dG9uLCAjY2xvc2VCdXR0b24yIHtcbiAgICBtYXJnaW4tbGVmdDo0NTBweDtcbiAgICBmb250LXNpemU6ODAlO1xufVxuXG4uc3RhdHNfbWV0ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MGZyIDUwZnI7XG59XG5cbiNzdGF0c19tZXRlcl9ldmlsIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4jc3RhdHNfbGluZV9ldmlsLCAjc3RhdHNfbGluZV9zb21iZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuI3N0YXRzX2xpbmVfYmVuZXZvbGVudCwgI3N0YXRzX2xpbmVfc2lsbHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggNTgwcHggMjUwcHggNjVweDtcbiAgICB9XG4gICAgcDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuICAgIC50b3BfYmFyIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgICAgICBncmlkLXJvdzogMSAvIDU7XG4gICAgfVxuICAgIC5pbWFnZV93aW5kb3cge1xuICAgICAgICBncmlkLWNvbHVtbjogMTtcbiAgICAgICAgZ3JpZC1yb3c6IDI7XG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIH1cbiAgICAjZXhwbG9yYXRpb25Cb2FyZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5tYWluX3dpbmRvdyB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyO1xuICAgICAgICBncmlkLXJvdzogMjtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB9XG4gICAgLmJ1dHRvbl93aW5kb3cge1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgICAgIGdyaWQtcm93OiA0O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgfVxuICAgIC5idXR0b25fd2luZG93IGJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIH1cbiAgICAubG9nIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgICAgIGdyaWQtcm93OiAzO1xuICAgICAgICBmb250LXNpemU6IDgwJTtcbiAgICB9XG4gICAgLm1lbnUge1xuICAgICAgICBncmlkLWNvbHVtbjogMjtcbiAgICAgICAgZ3JpZC1yb3c6IDM7XG4gICAgfVxuICAgIGRpYWxvZyB7XG4gICAgICAgIG1heC13aWR0aDogMjcwcHg7XG4gICAgfVxuICAgICNjbG9zZUJ1dHRvbiwgI2Nsb3NlQnV0dG9uMiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjI1MHB4O1xuICAgICAgICBmb250LXNpemU6ODAlO1xuICAgIH1cbiAgICAubWFpbl93aW5kb3cgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgICAgIHdpZHRoOjEyMHB4O1xuICAgIH1cbn1cblxuLmRlYXRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLCtEQUFzRDtJQUN0RCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lB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SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1wdXJwbGUxOiAjMEYzMzI1OyBcXG4gICAgLS1wdXJwbGUyOiAjMUUyQjIxO1xcbiAgICAtLXB1cnBsZTM6ICMyRTYzNEY7IFxcbiAgICAtLWdyZXk6ICMyODI4Mjg7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1ZUJztcXG4gICAgc3JjOiB1cmwoJy4vS0dOb1JlZ3JldHNTa2V0Y2gudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1ZUJztcXG4gICAgZm9udC1zaXplOiAxMTAlO1xcbn1cXG5cXG4ubWFpbk1lbnVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1haW5NZW51IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTQwJTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAyZnIgMmZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDQ1MHB4IDFmciA3MHB4O1xcbn1cXG5cXG4udG9wX2JhciB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDc7XFxufVxcblxcbi5pbWFnZV93aW5kb3cge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUxKTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxufVxcblxcbi5pbWFnZV93aW5kb3cgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG4uaW1hZ2Vfd2luZG93IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xcbn1cXG5cXG4uaW1hZ2Vfd2luZG93IHAge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5tYWluX3dpbmRvdyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTEpO1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDU7XFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG4ubWFpbl93aW5kb3cgcCwgLm1haW5fd2luZG93IGJ1dHRvbiwgLm1haW5fd2luZG93IGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5tYWluX3dpbmRvdyBzZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LWZhbWlseTogJ1ZUJztcXG4gICAgbWFyZ2luLXJpZ2h0OjEwMDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5pbnB1dC5jaGVja21hcmtbdHlwZT1jaGVja2JveF0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3V0bGluZTogdmFyKC0tZ3JleSkgc29saWQgMnB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuaW5wdXQuY2hlY2ttYXJrW3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxub3B0aW9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XFxufVxcblxcbmRpYWxvZyB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGFuaW1hdGlvbjogZmFkZU91dCAxcyBlYXNlLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXR7XFxuICAgIGZyb20ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxufVxcblxcbi5tYWluX3dpbmRvdyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDkwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm1haW5fd2luZG93IC5jaG9pY2VCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1haW5fd2luZG93IGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMyk7XFxufVxcblxcbi5tYWluX3dpbmRvdyBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnVlQnO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXB1cnBsZTEpO1xcbn1cXG5cXG4ubWFpbl93aW5kb3cgaW5wdXRbdHlwZT1zdWJtaXRdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdWVCc7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wdXJwbGUxKTtcXG59XFxuXFxuLm1haW5fd2luZG93IGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xcbn1cXG5cXG4uYnV0dG9uX3dpbmRvdyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTMpO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDc7XFxuICAgIGdyaWQtcm93OiA0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1ZUJztcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUzKTtcXG59XFxuXFxuLmJ1dHRvbl93aW5kb3cgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxNTAlO1xcbn1cXG5cXG4ubG9nIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZTIpO1xcbiAgICBncmlkLWNvbHVtbjogNSAvIDY7XFxufVxcblxcbi5tZW51IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMik7XFxuICAgIGdyaWQtY29sdW1uOiA1IC8gNjtcXG59XFxuXFxuZGlhbG9nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlMik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiA4NSU7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxufVxcblxcbiNjbG9zZUJ1dHRvbiwgI2Nsb3NlQnV0dG9uMiB7XFxuICAgIG1hcmdpbi1sZWZ0OjQ1MHB4O1xcbiAgICBmb250LXNpemU6ODAlO1xcbn1cXG5cXG4uc3RhdHNfbWV0ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MGZyIDUwZnI7XFxufVxcblxcbiNzdGF0c19tZXRlcl9ldmlsIHtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuI3N0YXRzX2xpbmVfZXZpbCwgI3N0YXRzX2xpbmVfc29tYmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuI3N0YXRzX2xpbmVfYmVuZXZvbGVudCwgI3N0YXRzX2xpbmVfc2lsbHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDU4MHB4IDI1MHB4IDY1cHg7XFxuICAgIH1cXG4gICAgcDpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICB9XFxuICAgIC50b3BfYmFyIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gNTtcXG4gICAgfVxcbiAgICAuaW1hZ2Vfd2luZG93IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICAgICAgZ3JpZC1yb3c6IDI7XFxuICAgICAgICBmb250LXNpemU6IDgwJTtcXG4gICAgfVxcbiAgICAjZXhwbG9yYXRpb25Cb2FyZCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgICAubWFpbl93aW5kb3cge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgICAgICBncmlkLXJvdzogMjtcXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIH1cXG4gICAgLmJ1dHRvbl93aW5kb3cge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICAgICAgZ3JpZC1yb3c6IDQ7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG4gICAgLmJ1dHRvbl93aW5kb3cgYnV0dG9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogOTAlO1xcbiAgICB9XFxuICAgIC5sb2cge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgICAgICBncmlkLXJvdzogMztcXG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xcbiAgICB9XFxuICAgIC5tZW51IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDM7XFxuICAgIH1cXG4gICAgZGlhbG9nIHtcXG4gICAgICAgIG1heC13aWR0aDogMjcwcHg7XFxuICAgIH1cXG4gICAgI2Nsb3NlQnV0dG9uLCAjY2xvc2VCdXR0b24yIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OjI1MHB4O1xcbiAgICAgICAgZm9udC1zaXplOjgwJTtcXG4gICAgfVxcbiAgICAubWFpbl93aW5kb3cgaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgICAgICB3aWR0aDoxMjBweDtcXG4gICAgfVxcbn1cXG5cXG4uZGVhdGgge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzLm9uY2UgPSBvbmNlO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gb25jZShlbWl0dGVyLCBuYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZnVuY3Rpb24gZXJyb3JMaXN0ZW5lcihlcnIpIHtcbiAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIobmFtZSwgcmVzb2x2ZXIpO1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZXIoKSB7XG4gICAgICBpZiAodHlwZW9mIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBlcnJvckxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9O1xuXG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIHJlc29sdmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgaWYgKG5hbWUgIT09ICdlcnJvcicpIHtcbiAgICAgIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGVycm9yTGlzdGVuZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBoYW5kbGVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgJ2Vycm9yJywgaGFuZGxlciwgZmxhZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCBsaXN0ZW5lciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgIGVtaXR0ZXIub25jZShuYW1lLCBsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtaXR0ZXIub24obmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gRXZlbnRUYXJnZXQgZG9lcyBub3QgaGF2ZSBgZXJyb3JgIGV2ZW50IHNlbWFudGljcyBsaWtlIE5vZGVcbiAgICAvLyBFdmVudEVtaXR0ZXJzLCB3ZSBkbyBub3QgbGlzdGVuIGZvciBgZXJyb3JgIGV2ZW50cyBoZXJlLlxuICAgIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW5jdGlvbiB3cmFwTGlzdGVuZXIoYXJnKSB7XG4gICAgICAvLyBJRSBkb2VzIG5vdCBoYXZlIGJ1aWx0aW4gYHsgb25jZTogdHJ1ZSB9YCBzdXBwb3J0IHNvIHdlXG4gICAgICAvLyBoYXZlIHRvIGRvIGl0IG1hbnVhbGx5LlxuICAgICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIHdyYXBMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBsaXN0ZW5lcihhcmcpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImVtaXR0ZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRXZlbnRFbWl0dGVyLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgZW1pdHRlcik7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaW1wb3J0aW5nXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCB0cmVlSW1nIGZyb20gJy4vdHJlZS5wbmcnXG5pbXBvcnQgcGVyc29uSW1nIGZyb20gJy4vcGVyc29uLnBuZyc7XG4vLyBpbml0aWFsaXplIGltYWdlc1xubGV0IGljb25UcmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IGljb25UcmVlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6MTVweDt3aWR0aDoxNXB4OycpOyBpY29uVHJlZS5zcmMgPSBgJHt0cmVlSW1nfWA7XG5sZXQgaWNvblRyZWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IGljb25UcmVlMi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0OjE1cHg7d2lkdGg6MTVweDsnKTsgaWNvblRyZWUyLnNyYyA9IGAke3RyZWVJbWd9YDtcbmxldCBpY29uVHJlZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgaWNvblRyZWUzLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6MTVweDt3aWR0aDoxNXB4OycpOyBpY29uVHJlZTMuc3JjID0gYCR7dHJlZUltZ31gO1xubGV0IGljb25QZXJzb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgaWNvblBlcnNvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2hlaWdodDoxNXB4O3dpZHRoOjE1cHg7Jyk7IGljb25QZXJzb24uc3JjID0gYCR7cGVyc29uSW1nfWA7XG4vLyBhcnJheSBvZiBpbWFnZXNcbmxldCBpY29ucyA9IHsgaWNvblRyZWUsIGljb25UcmVlMiwgaWNvblRyZWUzLCBpY29uUGVyc29uIH1cbi8vIGV4cG9ydCBpbWFnZXNcbmV4cG9ydCB7aWNvbnN9IiwiLy8gaW1wb3J0OiBJc0JhdHRsZU92ZXIsIGh1ZCwgbW9uc3RlciBvYmplY3RzLCBjaGFyMSwgY2xhc3Nlc1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBcbiAgICB0b3BfYmFyLFxuICAgIGxvZ193aW5kb3csXG4gICAgaW1hZ2Vfd2luZG93LFxuICAgIG1haW5fd2luZG93LFxufSBmcm9tICcuL2NvbXBfaHVkJztcbmltcG9ydCB7IFxuICAgIEphbml0b3IsXG4gICAgQWNjb3VudGFudCxcbiAgICBEYW5jZXIsXG4gICAgY2hhcjEsXG59IGZyb20gJy4vY29tcF9vYmplY3RzX2FuZF9tZXRob2RzJztcbmNvbnN0IGV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJy4vY29tcF9ldmVudF9lbWl0dGVyLmpzJyk7XG4vLyBpbXBvcnRhbnQgdmFyc1xubGV0IGVuZW1pZXMgPSBbXTtcbmxldCBlbmVteVRvQXR0YWNrO1xuLy9idXR0b24gZWZmZWN0c1xubGV0IGF0dGFja19idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXR0YWNrQnV0dG9uJyk7XG5hdHRhY2tfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2hhcjEuYXR0YWNrKGVuZW15VG9BdHRhY2spKTtcbi8vIGNoYW5nZSBlbmVtaWVzIGZ1bmN0aW9uXG5mdW5jdGlvbiBpc0hlRGVhZChkYW1hZ2VkRW5lbXkpIHtcbiAgICBpZiAoZGFtYWdlZEVuZW15LmN1cnJlbnRIUCA8PSAwKSB7XG4gICAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSBgJHtkYW1hZ2VkRW5lbXkubmFtZX0gZGllcyFgO1xuICAgICAgICBlbnRyeS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6eWVsbG93Jyk7XG4gICAgICAgIGxvZ193aW5kb3cuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgICAgICBsZXQgZGVhZE1vbnN0ZXJJRCA9IGVuZW1pZXMuZmluZEluZGV4KGkgPT4gaS5uYW1lID09IGRhbWFnZWRFbmVteS5uYW1lKTtcbiAgICAgICAgZW5lbWllcy5zcGxpY2UoZGVhZE1vbnN0ZXJJRCwgMSk7XG4gICAgICAgIGlmIChlbmVtaWVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBldmVudEVtaXR0ZXIuZW1pdCgnYmF0dGxlOndpbicpO1xuICAgICAgICAgICAgLy8gaXNCYXR0bGVPdmVyKCd3aW4nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaXNQbGF5ZXJEZWFkKCk7XG59XG5mdW5jdGlvbiBpc1BsYXllckRlYWQoKSB7XG4gICAgaWYgKGNoYXIxLmN1cnJlbnRIUCA8PSAwKSB7XG4gICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KCdiYXR0bGU6bG9zZScpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1haW5fd2luZG93LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobWFpbl93aW5kb3cuY2hpbGRyZW5baV0udGFnTmFtZS50b0xvd2VyQ2FzZSgpID09ICdidXR0b24nKSB7XG4gICAgICAgICAgICAgICAgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQobWFpbl93aW5kb3cuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaW1hZ2Vfd2luZG93LmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoaW1hZ2Vfd2luZG93LmNoaWxkcmVuW2pdLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIGltYWdlX3dpbmRvdy5yZW1vdmVDaGlsZChpbWFnZV93aW5kb3cuY2hpbGRyZW5bal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdoaWxlKHRvcF9iYXIuZmlyc3RDaGlsZCkge3RvcF9iYXIucmVtb3ZlQ2hpbGQodG9wX2Jhci5maXJzdENoaWxkKX07XG4gICAgICAgIGxldCBkZWF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZWF0aC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYHBvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7ei1pbmRleDo1MDA7b3ZlcmZsb3c6aGlkZGVuO2ApO1xuICAgICAgICBkZWF0aC5jbGFzc0xpc3QuYWRkKCdkZWF0aCcpO1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVhdGgpO1xuICAgIH1cbn1cbi8vIHVwZGF0ZSBlbmVtaWVzIGxpc3RcbmZ1bmN0aW9uIGxpc3RFbmVtaWVzKCkge1xuICAgIGxldCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleHBsb3JhdGlvbkJvYXJkJyk7XG4gICAgQXJyYXkuZnJvbShpbWFnZV93aW5kb3cuY2hpbGRyZW4pLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBpZiAoZW50cnkgIT09IGJvYXJkKSB7XG4gICAgICAgICAgICBpbWFnZV93aW5kb3cucmVtb3ZlQ2hpbGQoZW50cnkpO1xuICAgICAgICB9IFxuICAgIH0pXG4gICAgZW5lbWllcy5mb3JFYWNoKCh0aGlzRW5lbXkpID0+IHtcbiAgICAgICAgbGV0IGVuZW15X2VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgZW5lbXlfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVuZW15X2VudHJ5LnRleHRDb250ZW50ID0gYCR7dGhpc0VuZW15Lm5hbWV9IGlzIHRoZXJlLiBJdCBoYXMgQUMgb2YgJHt0aGlzRW5lbXkuYXJtb3JDbGFzc30sIGF0dGFjayBib251cyBvZiAke3RoaXNFbmVteS5tb25zdGVyQXR0YWNrQm9udXN9IGFuZCBIUCBvZiAke3RoaXNFbmVteS5jdXJyZW50SFB9LyR7dGhpc0VuZW15Lm1heEhQfS5gXG4gICAgICAgIGVuZW15X2J1dHRvbi50ZXh0Q29udGVudCA9IGBTZWxlY3RgO1xuICAgICAgICBlbmVteV9idXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIHRoaXNFbmVteS5uYW1lKTtcbiAgICAgICAgZW5lbXlfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2VsZWN0RW5lbXkodGhpc0VuZW15KSk7XG4gICAgICAgIGltYWdlX3dpbmRvdy5hcHBlbmRDaGlsZChlbmVteV9lbnRyeSk7XG4gICAgICAgIGltYWdlX3dpbmRvdy5hcHBlbmRDaGlsZChlbmVteV9idXR0b24pO1xuICAgIH0pO1xufVxuLy8gYXR0YWNraW5nXG5mdW5jdGlvbiBzZWxlY3RFbmVteShlbmVteSkge1xuICAgIGVuZW15VG9BdHRhY2sgPSBlbmVteTtcbiAgICB0b3BfYmFyLnRleHRDb250ZW50ID0gYFNlbGVjdGVkIGVuZW15OiAke2VuZW15Lm5hbWV9LmA7XG59XG4vLyBzcGVjaWFsIGJ1dHRvbiB0aGF0IHN3aXRjaGVzIGF0dGFjayBtb2Rlc1xubGV0IEphbml0b3JTcGVjaWFscyA9IFsnU3Bpcml0IFNsYW0nLCAnU3BlY3RyYWwgQmxhZGUnLCAnV3JhdGhmdWwgVmlzYWdlJ107XG5sZXQgQWNjb3VudGFudFNwZWNpYWxzID0gWydTcGlyaXQgU2xhbScsICdXaXRoZXJpbmcgQm9sdCcsICdFc3NlbmNlIERyYWluJ107XG5sZXQgRGFuY2VyU3BlY2lhbHMgPSBbJ1NwaXJpdCBTbGFtJywgJ1NwaXJpdCBCbGVzc2luZycsICdCaW5kIG9mIHRoZSBHdWFyZGlhbiddO1xubGV0IGF0dGFja0luZGV4ID0gMDtcbmxldCBwbGF5ZXJDbGFzcyA9ICcnO1xuZXZlbnRFbWl0dGVyLm9uKCdXcmFpdGgnLCAoKSA9PiB7XG4gICAgcGxheWVyQ2xhc3MgPSAnV3JhaXRoJztcbn0pO1xuZXZlbnRFbWl0dGVyLm9uKCdQb2x0ZXJnZWlzdCcsICgpID0+IHtcbiAgICBwbGF5ZXJDbGFzcyA9ICdQb2x0ZXJnZWlzdCc7XG59KTtcbmV2ZW50RW1pdHRlci5vbignR3VhcmRpYW5TcGlyaXQnLCAoKSA9PiB7XG4gICAgcGxheWVyQ2xhc3MgPSAnR3VhcmRpYW5TcGlyaXQnO1xufSk7XG5mdW5jdGlvbiBzd2l0Y2hBdHRhY2soY2hhcikge1xuICAgIGlmIChwbGF5ZXJDbGFzcyAhPT0gJycpIHtcbiAgICAgICAgaWYgKGNoYXIgaW5zdGFuY2VvZiBKYW5pdG9yKSB7XG4gICAgICAgICAgICBhdHRhY2tJbmRleCA9IChhdHRhY2tJbmRleCArIDEpICUgSmFuaXRvclNwZWNpYWxzLmxlbmd0aDtcbiAgICAgICAgICAgIGNoYXIuc3BlY2lhbEF0dGFjayA9IEphbml0b3JTcGVjaWFsc1thdHRhY2tJbmRleF07XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhciBpbnN0YW5jZW9mIEFjY291bnRhbnQpIHtcbiAgICAgICAgICAgIGF0dGFja0luZGV4ID0gKGF0dGFja0luZGV4ICsgMSkgJSBBY2NvdW50YW50U3BlY2lhbHMubGVuZ3RoO1xuICAgICAgICAgICAgY2hhci5zcGVjaWFsQXR0YWNrID0gQWNjb3VudGFudFNwZWNpYWxzW2F0dGFja0luZGV4XTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyIGluc3RhbmNlb2YgRGFuY2VyKSB7XG4gICAgICAgICAgICBhdHRhY2tJbmRleCA9IChhdHRhY2tJbmRleCArIDEpICUgRGFuY2VyU3BlY2lhbHMubGVuZ3RoO1xuICAgICAgICAgICAgY2hhci5zcGVjaWFsQXR0YWNrID0gRGFuY2VyU3BlY2lhbHNbYXR0YWNrSW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSBgWW91IGdldCByZWFkeSB0byB1c2UgJHtjaGFyLnNwZWNpYWxBdHRhY2t9LmA7XG4gICAgICAgIGxvZ193aW5kb3cuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgIH07XG59O1xuLy9zdGFydCBiYXR0bGVcbmZ1bmN0aW9uIHN0YXJ0QmF0dGxlKC4uLmVuY291bnRlckVuZW1pZXMpIHtcbiAgICBlbmNvdW50ZXJFbmVtaWVzLmZvckVhY2goKHRoaXNFbmVteSkgPT4ge1xuICAgICAgICB0aGlzRW5lbXkuY3VycmVudEhQID0gdGhpc0VuZW15Lm1heEhQO1xuICAgIH0pO1xuICAgIGVuZW1pZXMgPSBlbmNvdW50ZXJFbmVtaWVzO1xuICAgIGxpc3RFbmVtaWVzKCk7XG59XG4vLyBleHBvcnRcbmV4cG9ydCB7XG4gICAgaXNIZURlYWQsXG4gICAgaXNQbGF5ZXJEZWFkLFxuICAgIGxpc3RFbmVtaWVzLFxuICAgIHN3aXRjaEF0dGFjayxcbiAgICBzdGFydEJhdHRsZSxcbiAgICBlbmVtaWVzLFxuICAgIGVuZW15VG9BdHRhY2tcbn0iLCIvLyBpbml0aWFsaXplIGh1ZFxubGV0IG1haW5fd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fd2luZG93Jyk7XG4vLyBpbml0aWFsaXplIHZhcnNcbmxldCBkaWUxID0ge3Jlc3VsdDogMCwgcmVSb2xsRmxhZzogZmFsc2V9O1xubGV0IGRpZTIgPSB7cmVzdWx0OiAwLCByZVJvbGxGbGFnOiBmYWxzZX07XG5sZXQgZGllMyA9IHtyZXN1bHQ6IDAsIHJlUm9sbEZsYWc6IGZhbHNlfTtcbmxldCBkaWU0ID0ge3Jlc3VsdDogMCwgcmVSb2xsRmxhZzogZmFsc2V9O1xubGV0IGRpZTUgPSB7cmVzdWx0OiAwLCByZVJvbGxGbGFnOiBmYWxzZX07XG5sZXQgZGllNiA9IHtyZXN1bHQ6IDAsIHJlUm9sbEZsYWc6IGZhbHNlfTtcbmxldCBwbGF5ZXJIYW5kID0gW2RpZTEsIGRpZTIsIGRpZTMsIGRpZTQsIGRpZTUsIGRpZTZdO1xubGV0IG9wcG9uZW50SGFuZCA9IFtdO1xubGV0IGN1cnJlbnRCaWQgPSB7IHBsYXllcjogJycsIG51bWJlck9mRGljZTogMCwgZG90czogMCB9O1xubGV0IGFjY3VzYXRpb24gPSB7IGFjY3VzZXI6ICcnLCBudW1iZXJPZkRpY2U6IDAsIGRvdHM6IDAgfTtcbmxldCBleGFtcGxlTGluZXMgPSB7XG4gICAgb3BlbkxpbmU6IGBDb21lIG9uLCBsZXQncyBwbGF5YCxcbiAgICBiaWRMaW5lOiBgTHVjayBpcyBvbiBteSBzaWRlIHRvZGF5YCxcbiAgICBibHVmZkxpbmU6IGBJIGhhdmUgZ29vZCBkaWNlIHRvZGF5LCBraWRgLFxuICAgIGFjY3VzZUxpbmU6IGBZZWFoLCBJIGRvbid0IHRoaW5rIHNvYCxcbiAgICB3aW5MaW5lOiBgR290Y2hhLCBraWRgLFxuICAgIGxvc2VMaW5lOiBgRGFybi4gWW91IGdvdCBsdWNreSwgcGFsYFxufVxuZnVuY3Rpb24gc3RhcnREaWNlR2FtZShvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpIHtcbiAgICAvLyBjbGVhciBtYWluIHdpbmRvd1xuICAgIHdoaWxlIChtYWluX3dpbmRvdy5maXJzdENoaWxkKSB7IG1haW5fd2luZG93LnJlbW92ZUNoaWxkKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIH07XG4gICAgLy8gaW5zdHJ1Y3Rpb25zXG4gICAgbGV0IGluc3RydWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluc3RydWN0aW9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjp5ZWxsb3cnKTtcbiAgICBpbnN0cnVjdGlvbi50ZXh0Q29udGVudCA9ICdbWW91IGFyZSBhYm91dCB0byBwbGF5IEZhbHNlY3ViZXMuIEhlcmUgYXJlIHRoZSBpbnN0cnVjdGlvbnM6IFlvdSBhbmQgb3Bwb25lbnQgaGF2ZSA2IGRpY2UgZWFjaC4gWW91IHJvbGwgdGhlbSBpbiBzZWNyZXQuIFRoZW4geW91IHRha2UgaXQgaW4gdHVybnMgdG8gbWFrZSBpbmNyZWFzaW5nbHkgaGlnaCBiZXRzIGFib3V0IGhvdyBtYW55IGRpY2Ugb2YgYSBjZXJ0YWluIHJvbGwgYXJlIGluIHlvdXIgaGFuZCB1bnRpbCBvbmUgb2YgdGhlbSBjYWxscyB0aGUgb3RoZXIgb3V0IG9uIGEgYmx1ZmYgYW5kIGNvbmZpcm1zIHdoaWNoIGRpY2UgYXJlIHJlYWxseSBvbiB0aGUgdGFibGUuXSc7XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb24pO1xuICAgIC8vIHN0YXJ0IGdhbWUgYnV0dG9uXG4gICAgbGV0IHN0YXJ0RGljZUdhbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydERpY2VHYW1lQnV0dG9uLnRleHRDb250ZW50ID0gYExldCdzIHBsYXkgRmFsc2VjdWJlcyFgXG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoc3RhcnREaWNlR2FtZUJ1dHRvbik7XG4gICAgc3RhcnREaWNlR2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZmFsc2VDdWJlcyhvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpO1xuICAgICAgICBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZChzdGFydERpY2VHYW1lQnV0dG9uKTtcbiAgICB9KTtcbn1cbi8vIGZ1bmN0aW9uIHRoYXQgc3RhcnRzIHRoZSBnYW1lXG5mdW5jdGlvbiBmYWxzZUN1YmVzKG9wcG9uZW50TmFtZSwgbGluZXMsIGNhbGxiYWNrRW5kLCBwcml6ZSkge1xuICAgIC8vIG9wZW5MaW5lIGZyb20gdGhlIG9wcG9uZW50XG4gICAgbGV0IG9wZW5MaW5lRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgb3BlbkxpbmVFbnRyeS50ZXh0Q29udGVudCA9IGAke29wcG9uZW50TmFtZX06ICR7bGluZXMub3BlbkxpbmV9YDtcbiAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChvcGVuTGluZUVudHJ5KTtcbiAgICAvLyByb2xsIGRpY2UgYnV0dG9uXG4gICAgbGV0IHJvbGxEaWNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcm9sbERpY2VCdXR0b24udGV4dENvbnRlbnQgPSBgUm9sbCB0aGUgZGljZS5gXG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQocm9sbERpY2VCdXR0b24pO1xuICAgIHJvbGxEaWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZChyb2xsRGljZUJ1dHRvbik7XG4gICAgICAgIHJvbGxQaGFzZShvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpXG4gICAgfSk7XG59XG4vLyByb2xsaW5nIDZkNFxuZnVuY3Rpb24gcm9sbDZkNFBsYXllcigpIHtcbiAgICBkaWUxLnJlc3VsdCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpO1xuICAgIGRpZTIucmVzdWx0ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMSk7XG4gICAgZGllMy5yZXN1bHQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTtcbiAgICBkaWU0LnJlc3VsdCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpO1xuICAgIGRpZTUucmVzdWx0ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMSk7XG4gICAgZGllNi5yZXN1bHQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTsgICAgXG4gICAgcmV0dXJuIFtkaWUxLCBkaWUyLCBkaWUzLCBkaWU0LCBkaWU1LCBkaWU2XVxufVxuZnVuY3Rpb24gcm9sbDZkNE9wcG9uZW50KCkge1xuICAgIGxldCBvcHBvbmVudERpZTEgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTtcbiAgICBsZXQgb3Bwb25lbnREaWUyID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMSk7XG4gICAgbGV0IG9wcG9uZW50RGllMyA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpO1xuICAgIGxldCBvcHBvbmVudERpZTQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTtcbiAgICBsZXQgb3Bwb25lbnREaWU1ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMSk7XG4gICAgbGV0IG9wcG9uZW50RGllNiA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpOyAgICBcbiAgICByZXR1cm4gW29wcG9uZW50RGllMSwgb3Bwb25lbnREaWUyLCBvcHBvbmVudERpZTMsIG9wcG9uZW50RGllNCwgb3Bwb25lbnREaWU1LCBvcHBvbmVudERpZTZdXG59XG5mdW5jdGlvbiByb2xsMWQ0KCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTtcbn1cbi8vIHJvbGxpbmcgcGhhc2VcbmZ1bmN0aW9uIHJvbGxQaGFzZShvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpIHtcbiAgICAvLyBwbGF5ZXJIYW5kIGFuZCBvcHBvbmVudEhhbmQgYXJyYXlzIGdldCBhc3NpZ25lZCBzaXggaW50ZWdlcnNcbiAgICByb2xsNmQ0UGxheWVyKCk7XG4gICAgb3Bwb25lbnRIYW5kID0gcm9sbDZkNE9wcG9uZW50KCk7XG4gICAgLy8gYSBtZXNzYWdlIHBvcHMgb3V0OiAnWW91IHJvbGxlZDogeCwgeSwgYSwgYiwgYywgZCdcbiAgICBsZXQgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gYFlvdSByb2xsZWQ6ICR7ZGllMS5yZXN1bHR9LCAke2RpZTIucmVzdWx0fSwgJHtkaWUzLnJlc3VsdH0sICR7ZGllNC5yZXN1bHR9LCAke2RpZTUucmVzdWx0fSwgJHtkaWU2LnJlc3VsdH0uYDtcbiAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgICAvLyBiZWxvdyBlYWNoIG51bWJlciBhIGNoZWNrbWFyayBmb3JtXG4gICAgbGV0IHBsYXllclJlcm9sbEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQocGxheWVyUmVyb2xsRm9ybSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgbGV0IGNoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrbWFyay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgY2hlY2ttYXJrLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHtpKzF9YCk7XG4gICAgICAgIGNoZWNrbWFyay5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHtpKzF9YCk7XG4gICAgICAgIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKCdjaGVja21hcmsnKTtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgJHtpKzF9YCk7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gYERpY2UgJHtpKzF9YDtcbiAgICAgICAgcGxheWVyUmVyb2xsRm9ybS5hcHBlbmRDaGlsZChjaGVja21hcmspO1xuICAgICAgICBwbGF5ZXJSZXJvbGxGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgbGV0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgICAgcGxheWVyUmVyb2xsRm9ybS5hcHBlbmRDaGlsZChicik7XG4gICAgfVxuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWFyZ2luLXRvcDogMTBweDsnKTtcbiAgICBwbGF5ZXJSZXJvbGxGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgLy8gb3Bwb25lbnQgcmUtcm9sbHMgbG9naWNcbiAgICBsZXQgYWxsT3Bwb25lbnQxcyA9IG9wcG9uZW50SGFuZC5maWx0ZXIoaSA9PiBpID09IDEpO1xuICAgIGxldCBhbGxPcHBvbmVudDJzID0gb3Bwb25lbnRIYW5kLmZpbHRlcihpID0+IGkgPT0gMik7XG4gICAgbGV0IGFsbE9wcG9uZW50M3MgPSBvcHBvbmVudEhhbmQuZmlsdGVyKGkgPT4gaSA9PSAzKTtcbiAgICBsZXQgYWxsT3Bwb25lbnQ0cyA9IG9wcG9uZW50SGFuZC5maWx0ZXIoaSA9PiBpID09IDQpO1xuICAgIGxldCBvcHBvbmVudDFzT2JqZWN0ID0geyBudW1iZXI6IGFsbE9wcG9uZW50MXMubGVuZ3RoLCBkb3RzOiAxIH07XG4gICAgbGV0IG9wcG9uZW50MnNPYmplY3QgPSB7IG51bWJlcjogYWxsT3Bwb25lbnQycy5sZW5ndGgsIGRvdHM6IDIgfTtcbiAgICBsZXQgb3Bwb25lbnQzc09iamVjdCA9IHsgbnVtYmVyOiBhbGxPcHBvbmVudDNzLmxlbmd0aCwgZG90czogMyB9O1xuICAgIGxldCBvcHBvbmVudDRzT2JqZWN0ID0geyBudW1iZXI6IGFsbE9wcG9uZW50NHMubGVuZ3RoLCBkb3RzOiA0IH07XG4gICAgbGV0IG9wcG9uZW50T2JqZWN0cyA9IFtvcHBvbmVudDFzT2JqZWN0LCBvcHBvbmVudDJzT2JqZWN0LCBvcHBvbmVudDNzT2JqZWN0LCBvcHBvbmVudDRzT2JqZWN0XTtcbiAgICBjb25zb2xlLmxvZyhgT3JpZyBvcHBvbmVudEhhbmQ6ICR7b3Bwb25lbnRIYW5kfWApO1xuICAgIGxldCBvcHBvbmVudE9iamVjdHNTb3J0ZWQgPSBvcHBvbmVudE9iamVjdHMuc29ydCgoYSwgYikgPT4gKGEubnVtYmVyID4gYi5udW1iZXIpID8gLTEgOiAxKTtcbiAgICBsZXQgb3Bwb25lbnRMYXN0RG90cztcbiAgICBsZXQgb3Bwb25lbnRTZWNvbmRUb0xhc3REb3RzO1xuICAgIGlmIChvcHBvbmVudE9iamVjdHNTb3J0ZWRbM10ubnVtYmVyICE9PSAwKSB7XG4gICAgICAgIG9wcG9uZW50TGFzdERvdHMgPSBvcHBvbmVudE9iamVjdHNTb3J0ZWRbM10uZG90cztcbiAgICAgICAgY29uc29sZS5sb2coYEJhZCBkb3RzOiAke29wcG9uZW50TGFzdERvdHN9YCk7XG4gICAgICAgIG9wcG9uZW50U2Vjb25kVG9MYXN0RG90cyA9IG9wcG9uZW50T2JqZWN0c1NvcnRlZFsyXS5kb3RzO1xuICAgICAgICBjb25zb2xlLmxvZyhgU2Vjb25kIGJhZCBkb3RzOiAke29wcG9uZW50U2Vjb25kVG9MYXN0RG90c31gKTsgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3Bwb25lbnRMYXN0RG90cyA9IG9wcG9uZW50T2JqZWN0c1NvcnRlZFsyXS5kb3RzO1xuICAgICAgICBjb25zb2xlLmxvZyhgQmFkIGRvdHM6ICR7b3Bwb25lbnRMYXN0RG90c31gKTtcbiAgICAgICAgb3Bwb25lbnRTZWNvbmRUb0xhc3REb3RzID0gb3Bwb25lbnRPYmplY3RzU29ydGVkWzFdLmRvdHM7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTZWNvbmQgYmFkIGRvdHM6ICR7b3Bwb25lbnRTZWNvbmRUb0xhc3REb3RzfWApO1xuICAgIH1cbiAgICBsZXQgb3Bwb25lbnRIYW5kVG9LZWVwID0gb3Bwb25lbnRIYW5kLmZpbHRlcihpID0+IChpICE9PSBvcHBvbmVudExhc3REb3RzICYmIGkgIT09IG9wcG9uZW50U2Vjb25kVG9MYXN0RG90cykpO1xuICAgIC8vIGlmIHdlIHJlbW92ZSAzIGRpY2VcbiAgICAvLyBob3dNYW55RGljZVRvUmVSb2xsID0gNiAtIDMgPSAzXG4gICAgLy8gaSA9IDAsIGkgPSAxLCBpID0gMiwgcnVucyB0aHJlZSB0aW1lc1xuICAgIHdoaWxlIChvcHBvbmVudEhhbmRUb0tlZXAubGVuZ3RoIDwgNikge1xuICAgICAgICBsZXQgbmV3T3Bwb25lbnRSb2xsID0gcm9sbDFkNCgpO1xuICAgICAgICBvcHBvbmVudEhhbmRUb0tlZXAucHVzaChuZXdPcHBvbmVudFJvbGwpO1xuICAgIH1cbiAgICBvcHBvbmVudEhhbmQgPSBvcHBvbmVudEhhbmRUb0tlZXA7XG4gICAgY29uc29sZS5sb2coYE5ldyBPcHBvbmVudCBIYW5kOiAke29wcG9uZW50SGFuZH1gKTtcbiAgICAvLyBiZWxvdyB0aGF0LCBhIHN1Ym1pdC9yZXJvbGxcbiAgICAvLyBwbGF5ZXJIYW5kIGlzIGVtcHRpZWRcbiAgICAvLyBub24tc2VsZWN0ZWQgZGljZSBnZXQgYWRkZWQgYmFjayB0byBwbGF5ZXJIYW5kXG4gICAgLy8gZm9yIHRoZSBpbmRleGVzIG9mIHRoZSBzZWxlY3RlZCBkaWUsIHdoYXQgaXMgYWRkZWQgdG8gcGxheWVySGFuZCBpcyB0aGUgcmV0dXJuIG9mIHJlUm9sbERpZVxuICAgIHBsYXllclJlcm9sbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCIke2krMX1cImApO1xuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAvLyAxLCAyLCBbM10sIFs0XSwgMSwgMlxuICAgICAgICAgICAgICAgIHBsYXllckhhbmRbaV0ucmVSb2xsRmxhZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGogPSAwO1xuICAgICAgICB3aGlsZSAoaiA8IDYpICB7XG4gICAgICAgICAgICAvLyAxLCAyLCBbM10sIFs0XSwgMSwgMlxuICAgICAgICAgICAgaWYgKHBsYXllckhhbmRbal0ucmVSb2xsRmxhZyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcGxheWVySGFuZC5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0RpZSA9IHtyZXN1bHQ6IHJvbGwxZDQoKSwgcmVSb2xsRmxhZzogZmFsc2V9O1xuICAgICAgICAgICAgICAgIHBsYXllckhhbmQucHVzaChuZXdEaWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYmlkUGhhc2Uob3Bwb25lbnROYW1lLCBsaW5lcywgY2FsbGJhY2tFbmQsIHByaXplKTtcbiAgICB9KTtcbn1cbi8vIGJpZGRpbmcgcGhhc2VcbmZ1bmN0aW9uIGJpZFBoYXNlKG9wcG9uZW50TmFtZSwgbGluZXMsIGNhbGxiYWNrRW5kLCBwcml6ZSkge1xuLy8gd3JpdGVzIGEgbWVzc2FnZS4geW91IHJlcm9sbGVkIGRpY2UuIGFmdGVyIHJlLXJvbGxzLCB5b3VyIG5ldyBoYW5kIGlzOlxuICAgIGxldCByZVJvbGxNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGlmIChjdXJyZW50QmlkLm51bWJlck9mRGljZSA9PSAwKSB7XG4gICAgICAgIHdoaWxlIChtYWluX3dpbmRvdy5maXJzdENoaWxkKSB7IG1haW5fd2luZG93LnJlbW92ZUNoaWxkKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIH07XG4gICAgICAgIHJlUm9sbE1lc3NhZ2UudGV4dENvbnRlbnQgPSBgWW91IHJlLXJvbGwgc29tZSBkaWNlLmBcbiAgICAgICAgbGV0IHJlUm9sbE1lc3NhZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICByZVJvbGxNZXNzYWdlMi50ZXh0Q29udGVudCA9IGBZb3VyIG5ldyBoYW5kIGlzOiAke3BsYXllckhhbmRbMF0ucmVzdWx0fSwgJHtwbGF5ZXJIYW5kWzFdLnJlc3VsdH0sICR7cGxheWVySGFuZFsyXS5yZXN1bHR9LCAke3BsYXllckhhbmRbM10ucmVzdWx0fSwgJHtwbGF5ZXJIYW5kWzRdLnJlc3VsdH0sICR7cGxheWVySGFuZFs1XS5yZXN1bHR9LiBUaW1lIGZvciB0aGUgZmlyc3QgYmx1ZmZpbmcgcGhhc2UuYDtcbiAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQocmVSb2xsTWVzc2FnZSk7XG4gICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKHJlUm9sbE1lc3NhZ2UyKTtcbiAgICAgICAgcGxheWVyQmx1ZmZzKG9wcG9uZW50TmFtZSwgbGluZXMsIGNhbGxiYWNrRW5kLCBwcml6ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVSb2xsTWVzc2FnZS50ZXh0Q29udGVudCA9IGBZb3VyIGhhbmQgaXM6ICR7cGxheWVySGFuZFswXS5yZXN1bHR9LCAke3BsYXllckhhbmRbMV0ucmVzdWx0fSwgJHtwbGF5ZXJIYW5kWzJdLnJlc3VsdH0sICR7cGxheWVySGFuZFszXS5yZXN1bHR9LCAke3BsYXllckhhbmRbNF0ucmVzdWx0fSwgJHtwbGF5ZXJIYW5kWzVdLnJlc3VsdH0uIERvIHlvdSB3YW50IHRvIGJsdWZmLCBvciBhY2N1c2UgdGhlIG9wcG9uZW50P2A7XG4gICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKHJlUm9sbE1lc3NhZ2UpO1xuICAgICAgICAvLyBkZWNpZGUgd2hhdCB0byBkbyBoZXJlIVxuICAgICAgICBsZXQgd2hhdFRvRG9CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKHdoYXRUb0RvQnV0dG9ucyk7XG4gICAgICAgIGxldCBibHVmZkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBibHVmZkJ1dHRvbi50ZXh0Q29udGVudCA9ICdCbHVmZic7XG4gICAgICAgIGJsdWZmQnV0dG9uLnN0eWxlLm1hcmdpblJpZ2h0ID0gJzVweCc7XG4gICAgICAgIHdoYXRUb0RvQnV0dG9ucy5hcHBlbmRDaGlsZChibHVmZkJ1dHRvbik7XG4gICAgICAgIGxldCBhY2N1c2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWNjdXNlQnV0dG9uLnRleHRDb250ZW50ID0gJ0FjY3VzZSc7XG4gICAgICAgIHdoYXRUb0RvQnV0dG9ucy5hcHBlbmRDaGlsZChhY2N1c2VCdXR0b24pO1xuICAgICAgICBibHVmZkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1haW5fd2luZG93LnJlbW92ZUNoaWxkKHdoYXRUb0RvQnV0dG9ucyk7XG4gICAgICAgICAgICBwbGF5ZXJCbHVmZnMob3Bwb25lbnROYW1lLCBsaW5lcywgY2FsbGJhY2tFbmQsIHByaXplKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFjY3VzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1haW5fd2luZG93LnJlbW92ZUNoaWxkKHdoYXRUb0RvQnV0dG9ucyk7XG4gICAgICAgICAgICBhY2N1c2F0aW9uLmFjY3VzZXIgPSAnUGxheWVyJztcbiAgICAgICAgICAgIGFjY3VzYXRpb24ubnVtYmVyT2ZEaWNlID0gY3VycmVudEJpZC5udW1iZXJPZkRpY2U7XG4gICAgICAgICAgICBhY2N1c2F0aW9uLmRvdHMgPSBjdXJyZW50QmlkLmRvdHM7XG4gICAgICAgICAgICBsZXQgZ2FtZVJlc3VsdCA9IGNhbGxPdXQoKTtcbiAgICAgICAgICAgIGdhbWVFbmQoZ2FtZVJlc3VsdCwgb3Bwb25lbnROYW1lLCBsaW5lcywgY2FsbGJhY2tFbmQsIHByaXplKTsgICAgXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBsYXllckJsdWZmcyhvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpIHtcbiAgICAvLyBjcmVhdGVzIGEgZHJvcGRvd24gZm9ybSB0byBibHVmZjogXCJJIGhhdmUgWzEvMi8zLzRdIG9mIFsxLzIvMy80XVwiXG4gICAgbGV0IGJsdWZmRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChibHVmZkZvcm0pO1xuICAgIC8vIC0tLSBudW1iZXIgb2YgZGljZSAtLS1cbiAgICBsZXQgbnVtYmVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG51bWJlckxhYmVsLnRleHRDb250ZW50ID0gYEkgaGF2ZSB0aGlzIG1hbnkuLi5gO1xuICAgIG51bWJlckxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ251bWJlck9mRGljZScpO1xuICAgIGJsdWZmRm9ybS5hcHBlbmRDaGlsZChudW1iZXJMYWJlbCk7XG4gICAgbGV0IG51bWJlclNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIG51bWJlclNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbnVtYmVyT2ZEaWNlJyk7XG4gICAgbnVtYmVyU2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbnVtYmVyT2ZEaWNlJyk7XG4gICAgYmx1ZmZGb3JtLmFwcGVuZENoaWxkKG51bWJlclNlbGVjdCk7XG4gICAgLy8gb3B0aW9ucyBmb3IgbnVtYmVyIG9mIGRpY2VcbiAgICAvLyBkeW5hbWljYWxseSBjYWxjdWxhdGUgaG93IG1hbnkgb3B0aW9ucyBhcmUgYXZhaWxhYmxlXG4gICAgLy8gY3VycmVudEJpZC5udW1iZXJPZkRpY2UgPSAyXG4gICAgLy8gY3VycmVudEJpZC5kb3RzID0gMlxuICAgIC8vIG9wdGlvbnMgc2hvdWxkIGJlOiAyLCAzLCA0LCA1LCA2XG4gICAgLy8gbnVtYmVyT2ZPcHRpb25zID0gNyAtIGN1cnJlbnRCaWQubnVtYmVyXG4gICAgLy8gc3RhcnRlcihpKSA9IGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlXG4gICAgaWYgKGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlICE9PSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBjdXJyZW50QmlkLm51bWJlck9mRGljZTsgaSA8PSA2OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGk7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGkpO1xuICAgICAgICAgICAgbnVtYmVyU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA2OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGk7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGkpO1xuICAgICAgICAgICAgbnVtYmVyU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gLS0tIHdoaWNoIGRvdHMgLS0tXG4gICAgbGV0IGRvdHNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZG90c0xhYmVsLnRleHRDb250ZW50ID0gYG9mIHRoaXMgZGljZS4uLmA7XG4gICAgZG90c0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RvdHMnKTtcbiAgICBibHVmZkZvcm0uYXBwZW5kQ2hpbGQoZG90c0xhYmVsKTtcbiAgICBsZXQgZG90c1NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGRvdHNTZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgJ2RvdHMnKTtcbiAgICBkb3RzU2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZG90cycpO1xuICAgIGJsdWZmRm9ybS5hcHBlbmRDaGlsZChkb3RzU2VsZWN0KTtcbiAgICAvLyBvcHRpb25zIGZvciBkb3RzXG4gICAgLy8gZHluYW1pY2FsbHkgY2FsY3VsYXRlIG51bWJlciBvZiBkb3RzXG4gICAgLy8gdGhpcyBpcyBvbmx5IGEgcHJvYmxlbSBpZiB5b3UncmUgYmV0dGluZyB0aGUgc2FtZSBudW1iZXIgb2YgZGljZSBhcyB0aGUgY3VycmVudCBiaWRcbiAgICAvLyBzbyB0aGUgY2hlY2sgc2hvdWxkIG5vdCBnbyBoZXJlLCBidXQgYXQgc3VibWl0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBgJHtpKzF9YDtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpKzEpO1xuICAgICAgICBkb3RzU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuICAgIC8vIGZpbmFsIHN1Ym1pdFxuICAgIGxldCBibHVmZlN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgYmx1ZmZTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGJsdWZmU3VibWl0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQmx1ZmYhJyk7XG4gICAgYmx1ZmZGb3JtLmFwcGVuZENoaWxkKGJsdWZmU3VibWl0KTtcbi8vIG9uIHN1Ym1pdCwgY2FsbHMgdGhlIG9wcG9uZW50UmVzcG9uc2VcbiAgICBibHVmZkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgLy8gY2hlY2sgZm9yIGRvdHMgZ29lcyBoZXJlXG4gICAgICAgIGlmIChudW1iZXJTZWxlY3QudmFsdWUgPT0gY3VycmVudEJpZC5udW1iZXJPZkRpY2UpIHtcbiAgICAgICAgICAgIGlmIChkb3RzU2VsZWN0LnZhbHVlIDw9IGN1cnJlbnRCaWQuZG90cykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdzdHlsZScsICdjb2xvcjp5ZWxsb3cnKTtcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBgW1lvdSBjYW4gb25seSBiaWQgaGlnaGVyIHRoYW4geW91ciBvcHBvbmVudCFdYDtcbiAgICAgICAgICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCaWQgPSB7IHBsYXllcjogJ3BsYXllcicsIG51bWJlck9mRGljZTogbnVtYmVyU2VsZWN0LnZhbHVlLCBkb3RzOiBkb3RzU2VsZWN0LnZhbHVlIH07XG4gICAgICAgICAgICAgICAgd2hpbGUobWFpbl93aW5kb3cuZmlyc3RDaGlsZCkge21haW5fd2luZG93LnJlbW92ZUNoaWxkKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpfTtcbiAgICAgICAgICAgICAgICBsZXQgYmlkTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBiaWRNZXNzYWdlLnRleHRDb250ZW50ID0gYFlvdSBiaWQ6IFwiSSBoYXZlICR7Y3VycmVudEJpZC5udW1iZXJPZkRpY2V9IG9mICR7Y3VycmVudEJpZC5kb3RzfSBkb3RzXCIuYDtcbiAgICAgICAgICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChiaWRNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBvcHBvbmVudFJlc3BvbnNlKG9wcG9uZW50TmFtZSwgbGluZXMsIGNhbGxiYWNrRW5kLCBwcml6ZSk7ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGN1cnJlbnRCaWQgPSB7IHBsYXllcjogJ3BsYXllcicsIG51bWJlck9mRGljZTogbnVtYmVyU2VsZWN0LnZhbHVlLCBkb3RzOiBkb3RzU2VsZWN0LnZhbHVlIH07XG4gICAgICAgICAgICB3aGlsZShtYWluX3dpbmRvdy5maXJzdENoaWxkKSB7bWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQobWFpbl93aW5kb3cuZmlyc3RDaGlsZCl9O1xuICAgICAgICAgICAgbGV0IGJpZE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBiaWRNZXNzYWdlLnRleHRDb250ZW50ID0gYFlvdSBiaWQ6IFwiSSBoYXZlICR7Y3VycmVudEJpZC5udW1iZXJPZkRpY2V9IG9mICR7Y3VycmVudEJpZC5kb3RzfSBkb3RzXCIuYDtcbiAgICAgICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGJpZE1lc3NhZ2UpO1xuICAgICAgICAgICAgb3Bwb25lbnRSZXNwb25zZShvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyA1MC01MCBmdW5jdGlvblxuZnVuY3Rpb24gZmlmdHlGaWZ0eSgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDIpICsgMSk7XG59XG5mdW5jdGlvbiBvbmVUaGlyZCgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDMpICsgMSk7XG59XG4vLyBvcHBvbmVudCByZXNwb25zZVxuZnVuY3Rpb24gb3Bwb25lbnRSZXNwb25zZShvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpIHtcbiAgICAvLyBzZXQgY3VycmVudEJpZFxuICAgIC8vIGlmIGN1cnJlbnRCaWQubnVtYmVyT2ZkaWNlID4gMiwgb3Bwb25lbnQgY2FsbHMgYmx1ZmZcbiAgICAvLyBmaWxsIHRoZSBhY2N1c2F0aW9uIG9iamVjdCB3aXRoICdvcHBvbmVudCcsIGFuZCAnY3VycmVudEJpZCdcbiAgICBpZiAoY3VycmVudEJpZC5udW1iZXJPZkRpY2UgPiAyKSB7XG4gICAgICAgIGFjY3VzYXRpb24gPSB7IGFjY3VzZXI6ICdvcHBvbmVudCcsIG51bWJlck9mRGljZTogY3VycmVudEJpZC5udW1iZXJPZkRpY2UsIGRvdHM6IGN1cnJlbnRCaWQuZG90cyB9O1xuICAgICAgICBsZXQgYWNjdXNlTGluZUVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBhY2N1c2VMaW5lRW50cnkudGV4dENvbnRlbnQgPSBgJHtvcHBvbmVudE5hbWV9OiBcIiR7bGluZXMuYWNjdXNlTGluZX1cIi5gO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChhY2N1c2VMaW5lRW50cnkpO1xuICAgICAgICBsZXQgYWNjdXNlQ29udGludWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWNjdXNlQ29udGludWVCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGludWUnO1xuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChhY2N1c2VDb250aW51ZUJ1dHRvbik7XG4gICAgICAgIGFjY3VzZUNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWFpbl93aW5kb3cucmVtb3ZlQ2hpbGQoYWNjdXNlQ29udGludWVCdXR0b24pO1xuICAgICAgICAgICAgbGV0IGdhbWVSZXN1bHQgPSBjYWxsT3V0KCk7XG4gICAgICAgICAgICBnYW1lRW5kKGdhbWVSZXN1bHQsIG9wcG9uZW50TmFtZSwgbGluZXMsIGNhbGxiYWNrRW5kLCBwcml6ZSk7ICAgIFxuICAgICAgICB9KTtcbiAgICAvLyBpZiBjdXJyZW50QmlkLm51bWJlck9mZGljZSA9MlxuICAgIH0gZWxzZSBpZiAoY3VycmVudEJpZC5udW1iZXJPZkRpY2UgPT0gMikge1xuICAgIC8vIHRoZW4gNTAlIHRvIGNhbGwgb3V0IGEgYmx1ZmYgYW55d2F5XG4gICAgICAgIGlmIChmaWZ0eUZpZnR5KCkgPT0gMikge1xuICAgICAgICAgICAgYWNjdXNhdGlvbiA9IHsgYWNjdXNlcjogJ29wcG9uZW50JywgbnVtYmVyT2ZEaWNlOiBjdXJyZW50QmlkLm51bWJlck9mRGljZSwgZG90czogY3VycmVudEJpZC5kb3RzIH07XG4gICAgICAgICAgICBsZXQgYWNjdXNlTGluZUVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgYWNjdXNlTGluZUVudHJ5LnRleHRDb250ZW50ID0gYCR7b3Bwb25lbnROYW1lfTogXCIke2xpbmVzLmFjY3VzZUxpbmV9XCIuYDtcbiAgICAgICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGFjY3VzZUxpbmVFbnRyeSk7XG4gICAgICAgICAgICBsZXQgYWNjdXNlQ29udGludWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGFjY3VzZUNvbnRpbnVlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRpbnVlJztcbiAgICAgICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGFjY3VzZUNvbnRpbnVlQnV0dG9uKTtcbiAgICAgICAgICAgIGFjY3VzZUNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1haW5fd2luZG93LnJlbW92ZUNoaWxkKGFjY3VzZUNvbnRpbnVlQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBsZXQgZ2FtZVJlc3VsdCA9IGNhbGxPdXQoKTtcbiAgICAgICAgICAgICAgICBnYW1lRW5kKGdhbWVSZXN1bHQsIG9wcG9uZW50TmFtZSwgbGluZXMsIGNhbGxiYWNrRW5kLCBwcml6ZSk7ICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIC8vIGlmIHRoYXQgZG9lc24ndCB0cmlnZ2VyLCB0aGUgb3Bwb25lbnQgYmlkcyAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wcG9uZW50QmlkKG9wcG9uZW50TmFtZSwgbGluZXMsIGNhbGxiYWNrRW5kLCBwcml6ZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBvcHBvbmVudEJpZChvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG9wcG9uZW50QmlkKG9wcG9uZW50TmFtZSwgbGluZXMsIGNhbGxiYWNrRW5kLCBwcml6ZSkge1xuICAgIC8vIG9wcG9uZW50IGxvb2tzIGF0IG9wcG9uZW50SGFuZCwgaWRlbnRpZnlpbmcgaWYgdGhlcmUgYXJlIGFueSByZXBlYXRzXG4gICAgbGV0IGFsbE9wcG9uZW50MXMgPSBvcHBvbmVudEhhbmQuZmlsdGVyKGkgPT4gaSA9PSAxKTtcbiAgICBsZXQgYWxsT3Bwb25lbnQycyA9IG9wcG9uZW50SGFuZC5maWx0ZXIoaSA9PiBpID09IDIpO1xuICAgIGxldCBhbGxPcHBvbmVudDNzID0gb3Bwb25lbnRIYW5kLmZpbHRlcihpID0+IGkgPT0gMyk7XG4gICAgbGV0IGFsbE9wcG9uZW50NHMgPSBvcHBvbmVudEhhbmQuZmlsdGVyKGkgPT4gaSA9PSA0KTtcbiAgICBsZXQgb3Bwb25lbnQxc09iamVjdCA9IHsgbnVtYmVyOiBhbGxPcHBvbmVudDFzLmxlbmd0aCwgZG90czogMSB9O1xuICAgIGxldCBvcHBvbmVudDJzT2JqZWN0ID0geyBudW1iZXI6IGFsbE9wcG9uZW50MnMubGVuZ3RoLCBkb3RzOiAyIH07XG4gICAgbGV0IG9wcG9uZW50M3NPYmplY3QgPSB7IG51bWJlcjogYWxsT3Bwb25lbnQzcy5sZW5ndGgsIGRvdHM6IDMgfTtcbiAgICBsZXQgb3Bwb25lbnQ0c09iamVjdCA9IHsgbnVtYmVyOiBhbGxPcHBvbmVudDRzLmxlbmd0aCwgZG90czogNCB9O1xuICAgIGxldCBvcHBvbmVudE9iamVjdHMgPSBbb3Bwb25lbnQxc09iamVjdCwgb3Bwb25lbnQyc09iamVjdCwgb3Bwb25lbnQzc09iamVjdCwgb3Bwb25lbnQ0c09iamVjdF07XG4gICAgbGV0IG9wcG9uZW50T2JqZWN0c1NvcnRlZCA9IG9wcG9uZW50T2JqZWN0cy5zb3J0KChhLCBiKSA9PiAoYS5udW1iZXIgPiBiLm51bWJlcikgPyAtMSA6IDEpO1xuICAgIGNvbnNvbGUubG9nKG9wcG9uZW50T2JqZWN0c1NvcnRlZCk7XG4gICAgLy8gbmVlZHMgdG8gY2hlY2sgY3VycmVudEJpZCwgb3Bwb25lbnQncyBiaWQgY2Fubm90IGJlIGxvd2VyIG51bWJlciBvZiBkaWNlLiBjYW4gYmUgZXF1YWwsIGJ1dCB0aGVuIHRoZSBkb3RzIHNob3VsZCBiZSBoaWdoZXJcbiAgICAvLyBpbml0aWFsaXplIHRlbXBvcmFyeSBvcHBvbmVudEJpZCB2YXIgZm9yIGNhbGN1bGF0aW9uIHB1cnBvc2VzXG4gICAgbGV0IHRlbXBvcmFyeU9wcG9uZW50QmlkID0ge3BsYXllcjogJ29wcG9uZW50JywgbnVtYmVyT2ZEaWNlOiAwLCBkb3RzOiAwfTtcbiAgICAvLyBmaXJzdCwgd2UgY2FsY3VsYXRlIHdoYXQgdGhlIG9wcG9uZW50IHdvdWxkIGhhdmUgYmV0IGluIGEgdmFjdXVtIFxuICAgIC8vIGl0J3MgYWx3YXlzIHRoZSBzYW1lIGRvdHNcbiAgICB0ZW1wb3JhcnlPcHBvbmVudEJpZC5kb3RzID0gb3Bwb25lbnRPYmplY3RzU29ydGVkWzBdLmRvdHM7XG4gICAgLy8gNTAlIGl0J3MgbnVtYmVyT2ZEaWNlIHRoZXkgaGF2ZSBhbmQgNTAlIG51bWJlcm9mRGljZSsxIFtjaGFuZ2VkIHRvIDMzJSB0byBnbyAtMSwgKzEgb3IgZXF1YWxdXG4gICAgbGV0IGNoYW5jZSA9IG9uZVRoaXJkKCk7XG4gICAgaWYgKGNoYW5jZSA9PSAxKSB7XG4gICAgICAgIHRlbXBvcmFyeU9wcG9uZW50QmlkLm51bWJlck9mRGljZSA9IG9wcG9uZW50T2JqZWN0c1NvcnRlZFswXS5udW1iZXI7XG4gICAgfSBlbHNlIGlmIChjaGFuY2UgPT0gMikge1xuICAgICAgICB0ZW1wb3JhcnlPcHBvbmVudEJpZC5udW1iZXJPZkRpY2UgPSBvcHBvbmVudE9iamVjdHNTb3J0ZWRbMF0ubnVtYmVyICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0ZW1wb3JhcnlPcHBvbmVudEJpZC5udW1iZXJPZkRpY2UgPSBvcHBvbmVudE9iamVjdHNTb3J0ZWRbMF0ubnVtYmVyIC0xO1xuICAgIH1cbiAgICAvLyBub3cgd2UgY2hlY2sgdGhlIG9wcG9uZW50J3Mgd2FudGVkIGJpZCB2ZXJzdXMgaWxsZWdhbCBzY2VuYXJpb3NcbiAgICBpZiAoY3VycmVudEJpZC5udW1iZXJPZkRpY2UgPiB0ZW1wb3JhcnlPcHBvbmVudEJpZC5udW1iZXJPZkRpY2UpIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgZG90cyBhcmUgaGlnaGVyXG4gICAgICAgIGlmICh0ZW1wb3JhcnlPcHBvbmVudEJpZC5kb3RzID4gY3VycmVudEJpZC5kb3RzKSB7XG4gICAgICAgICAgICAvLyBpZiBpIGJpZCAzIGRpY2Ugb2YgMSBkb3RzIGFuZCBvcHBvbmVudCB3YW50cyB0byBiaWQgMiBkaWNlIG9mIDIgZG90c1xuICAgICAgICAgICAgLy8gdGhpcyB0cmlnZ2VycywgbnVtYmVyIG9mIGRpY2UgSVMgaGlnaGVyXG4gICAgICAgICAgICAvLyBvcHBvbmVudCBzaG91bGQgYmlkIDMgZGljZSBvZiAyIGRvdHNcbiAgICAgICAgICAgIHRlbXBvcmFyeU9wcG9uZW50QmlkLm51bWJlck9mRGljZSA9IGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgaSBiaWQgMyBkaWNlIG9mIDQgZG90cyBhbmQgb3Bwb25lbnQgd2FudHMgdG8gYmlkIDIgZGljZSBvZiAyIGRvdHNcbiAgICAgICAgICAgIC8vIGlmIG9wcG9uZW50J3MgbmV4dCBoaWdoZXN0IGRvdHMgPiBjdXJyZW50QmlkLmRvdHNcbiAgICAgICAgICAgIGlmIChvcHBvbmVudE9iamVjdHNTb3J0ZWRbMV0uZG90cyA+IGN1cnJlbnRCaWQuZG90cykge1xuICAgICAgICAgICAgICAgIC8vIHRoZW4gNTAtNTA6IHNhbWUgbnVtYmVyT2ZEaWNlIGJ1dCB3aXRoIHNlY29uZCBoaWdoZXN0IGRvdHNcbiAgICAgICAgICAgICAgICAvLyBhbmQgNCBkaWNlIG9mIDIgZG90c1xuICAgICAgICAgICAgICAgIGlmIChmaWZ0eUZpZnR5KCkgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wb3JhcnlPcHBvbmVudEJpZC5kb3RzID0gb3Bwb25lbnRPYmplY3RzU29ydGVkWzFdLmRvdHM7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBvcmFyeU9wcG9uZW50QmlkLm51bWJlck9mRGljZSA9IGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBvcmFyeU9wcG9uZW50QmlkLm51bWJlck9mRGljZSA9IGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIG5vdCwgdGhlbiBqdXN0IDQgZGljZSBvZiAyIGRvdHNcbiAgICAgICAgICAgICAgICB0ZW1wb3JhcnlPcHBvbmVudEJpZC5udW1iZXJPZkRpY2UgPSBjdXJyZW50QmlkLm51bWJlck9mRGljZSArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlID09IHRlbXBvcmFyeU9wcG9uZW50QmlkLm51bWJlck9mRGljZSkge1xuICAgICAgICAvLyBzbyBpZiBteSBiZXQgaXMgMiBkaWNlIDIgZG90cyBhbmQgb3Bwb25lbnQgd2FudHMgdG8gYmV0IDIgZGljZSAzIGRvdHNcbiAgICAgICAgLy8gdGhlbiBpdHMgZmluZVxuICAgICAgICBpZiAodGVtcG9yYXJ5T3Bwb25lbnRCaWQuZG90cyA8PSBjdXJyZW50QmlkLmRvdHMpIHtcbiAgICAgICAgICAgIC8vIGJ1dCBpZiBvcHBvbmVudCB3YW50cyB0byBiaWQgMiBkaWNlIDIgZG90cyBvciAyIGRpY2UgMSBkb3RcbiAgICAgICAgICAgIHRlbXBvcmFyeU9wcG9uZW50QmlkLm51bWJlck9mRGljZSA9IGN1cnJlbnRCaWQubnVtYmVyT2ZEaWNlICsgMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBub3cgbWFrZSB0aGUgb3Bwb25lbnRCaWQgdGhlIGN1cnJlbnRCaWRcbiAgICBjdXJyZW50QmlkID0gdGVtcG9yYXJ5T3Bwb25lbnRCaWQ7XG4gICAgLy8gdGhlbiB0aGV5IHNheSBvbmUgb2YgdGhlaXIgJ2JldHRpbmdsaW5lcycgKGFkZCB0aGF0KSBcbiAgICBsZXQgYmx1ZmZMaW5lMUVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJsdWZmTGluZTFFbnRyeS50ZXh0Q29udGVudCA9IGAke29wcG9uZW50TmFtZX06IFwiJHtsaW5lcy5ibHVmZkxpbmV9XCIuYDtcbiAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChibHVmZkxpbmUxRW50cnkpO1xuICAgIGxldCBibHVmZkxpbmUyRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYmx1ZmZMaW5lMkVudHJ5LnRleHRDb250ZW50ID0gYFwiSSByb2xsZWQgJHtjdXJyZW50QmlkLm51bWJlck9mRGljZX0gZGljZSB3aXRoICR7Y3VycmVudEJpZC5kb3RzfSBkb3RzLlwiYDsgICAgXG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoYmx1ZmZMaW5lMkVudHJ5KTtcbiAgICAvLyByZS1iaWQsIGJ1dCBjYW4gb25seSBkbyBoaWdoZXIgbm93IVxuICAgIGJpZFBoYXNlKG9wcG9uZW50TmFtZSwgbGluZXMsIGNhbGxiYWNrRW5kLCBwcml6ZSk7XG4gICAgLy8gdGhvdWdodHMgb24gcmUtYmlkZGluZzogcmV1c2UgdGhlIHNhbWUgZnVuY3Rpb24gZmxvd1xuICAgIC8vIGludHJvZHVjZSBhIGxpbWl0IG9uIHdoYXQgdGhlIHBsYXllciBjYW4gYmlkXG4gICAgLy8gYnV0IHRoZSBsaW1pdHMgZG9uJ3Qgd29yayBpZiBjdXJyZW50QmlkIGlzIGVtcHR5XG59XG4vLyBjYWxsaW5nIG91dCBhIGJsdWZmXG5mdW5jdGlvbiBjYWxsT3V0KCkge1xuICAgIC8vIGlmIGFjY3VzYXRpb24uYWNjdXNlciA9IHBsYXllciwgY2hlY2tzIG9wcG9uZW50SGFuZCwgaWYgYWNjdXNhdGlvbi5hY2N1c2VyID0gb3Bwb25lbnQsIGNoZWNrcyBwbGF5ZXJIYW5kXG4gICAgLy8gdGhlc2UgYXJlIHNldCB1cCBkaWZmZXJlbnRseSwgc28gZGlmZmVyZW50IGNhbGN1bGF0aW9uc1xuICAgIGlmIChhY2N1c2F0aW9uLmFjY3VzZXIgPT0gJ29wcG9uZW50Jykge1xuICAgICAgICAvLyBwbGF5ZXJIYW5kID0gW2RpZTEsIC4uLl1cbiAgICAgICAgLy8gZGllMSA9IHtyZXN1bHQ6IDAsIC4uLn1cbiAgICAgICAgbGV0IGFsbENvcnJlY3REb3RzID0gcGxheWVySGFuZC5maWx0ZXIoaSA9PiAoaS5yZXN1bHQgPT0gYWNjdXNhdGlvbi5kb3RzKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBTEwgQ09SUkVDVCBET1RTOiAke2FsbENvcnJlY3REb3RzfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgQUNDVVNBVElPTiBET1RTOiAke2FjY3VzYXRpb24uZG90c31gKTtcbiAgICAgICAgY29uc29sZS5sb2coYEFDQ1VTQVRJT04gTlVNQkVSIE9GIERJQ0U6ICR7YWNjdXNhdGlvbi5udW1iZXJPZkRpY2V9YCk7XG4gICAgICAgIGlmIChhbGxDb3JyZWN0RG90cy5sZW5ndGggPj0gYWNjdXNhdGlvbi5udW1iZXJPZkRpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiAncGxheWVyV2lucyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ29wcG9uZW50V2lucyc7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBvcHBvbmVudEhhbmQgPSBbMSwgMywgNCwgMSwgMywgMl1cbiAgICAgICAgbGV0IGFsbENvcnJlY3REb3RzID0gb3Bwb25lbnRIYW5kLmZpbHRlcihpID0+IChpID09IGFjY3VzYXRpb24uZG90cykpO1xuICAgICAgICBjb25zb2xlLmxvZyhgQUxMIENPUlJFQ1QgRE9UUzogJHthbGxDb3JyZWN0RG90c31gKTtcbiAgICAgICAgY29uc29sZS5sb2coYEFDQ1VTQVRJT04gRE9UUzogJHthY2N1c2F0aW9uLmRvdHN9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBQ0NVU0FUSU9OIE5VTUJFUiBPRiBESUNFOiAke2FjY3VzYXRpb24ubnVtYmVyT2ZEaWNlfWApO1xuICAgICAgICBpZiAoYWxsQ29ycmVjdERvdHMubGVuZ3RoID49IGFjY3VzYXRpb24ubnVtYmVyT2ZEaWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ29wcG9uZW50V2lucyc7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdwbGF5ZXJXaW5zJztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjaGVja3MgdGhhdCBwbGF5ZXIvb3Bwb25lbnRIYW5kLmluY2x1ZGVzIHRoZSBpbnRlZ2VyIGVxdWFsaW5nIHRvIHRoZSAnZG90cydcbiAgICAvLyBsb29wcyB0aHJvdWdoIHRoZSBjaGVjayBhIG51bWJlciBvZiB0aW1lcyA9IG51bWJlck9mRGljZVxuICAgIC8vIGlmIGFsbCB0cnVlLCBhY2N1c2F0aW9uLmFjY3VzZXIgaXMgdGhlIGxvc2VyXG4gICAgLy8gcmV0dXJucyBhIHdpbm5lclxufVxuLy8gZW5kaW5nIHRoZSBnYW1lXG5mdW5jdGlvbiBnYW1lRW5kKHJlc3VsdCwgb3Bwb25lbnROYW1lLCBsaW5lcywgY2FsbGJhY2tFbmQsIHByaXplKSB7XG4gICAgLy8gYSBtZXNzYWdlLCB3aG8gaXMgYmVpbmcgYWNjdXNlZCBhbmQgd2hhdCBhcmUgdGhleSBiZWluZyBhY2N1c2VkIG9mXG4gICAgbGV0IGdhbWVFbmRFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpZiAoYWNjdXNhdGlvbi5hY2N1c2VyID09ICdQbGF5ZXInKSB7XG4gICAgICAgIGdhbWVFbmRFbnRyeS50ZXh0Q29udGVudCA9IGBBY2N1c2F0aW9uISBZb3UgYW5kICR7b3Bwb25lbnROYW1lfSBjaGVjayB0aGUgYmx1ZmYuIFlvdXIgb3Bwb25lbnQgaXMgdGhlIGJsdWZmZXIuIFRoZXkgc2FpZCB0aGV5IGhhdmUgJHthY2N1c2F0aW9uLm51bWJlck9mRGljZX0gb2YgJHthY2N1c2F0aW9uLmRvdHN9IGRvdHMuIFRpbWUgdG8gc2VlIGlmIHRoZXkncmUgYmx1ZmZpbmcuYFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGdhbWVFbmRFbnRyeS50ZXh0Q29udGVudCA9IGBBY2N1c2F0aW9uISBZb3UgYW5kICR7b3Bwb25lbnROYW1lfSBjaGVjayB0aGUgYmx1ZmYuIFlvdSBhcmUgdGhlIGJsdWZmZXIuIFlvdSBzYWlkIHRoYXQgeW91J3ZlIGdvdCAke2FjY3VzYXRpb24ubnVtYmVyT2ZEaWNlfSBvZiAke2FjY3VzYXRpb24uZG90c30gZG90cy4gJHtvcHBvbmVudE5hbWV9IGNoZWNrcyBpZiB5b3UncmUgYmx1ZmZpbmcuYFxuICAgIH1cbiAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChnYW1lRW5kRW50cnkpO1xuICAgIGxldCBjb250aW51ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRpbnVlQnV0dG9uLnRleHRDb250ZW50ID0gJ0xldCB1cyBmaW5kIG91dCdcbiAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChjb250aW51ZUJ1dHRvbik7XG4gICAgY29udGludWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1haW5fd2luZG93LnJlbW92ZUNoaWxkKGNvbnRpbnVlQnV0dG9uKTtcbiAgICAgICAgZ2FtZUVuZDIocmVzdWx0LCBvcHBvbmVudE5hbWUsIGxpbmVzLCBjYWxsYmFja0VuZCwgcHJpemUpO1xuICAgIH0pXG59XG5mdW5jdGlvbiBnYW1lRW5kMihyZXN1bHQsIG9wcG9uZW50TmFtZSwgbGluZXMsIGNhbGxiYWNrRW5kLCBwcml6ZSkge1xuICAgIGxldCBvcHBvbmVudEVuZExpbmVFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpZiAocmVzdWx0ID09ICdwbGF5ZXJXaW5zJykge1xuICAgICAgICBsZXQgZ2FtZVJlc3VsdEVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBnYW1lUmVzdWx0RW50cnkudGV4dENvbnRlbnQgPSAnQW5kLi4uLiBZb3Ugd2luISc7XG4gICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGdhbWVSZXN1bHRFbnRyeSk7XG4gICAgICAgIG9wcG9uZW50RW5kTGluZUVudHJ5LnRleHRDb250ZW50ID0gYCR7b3Bwb25lbnROYW1lfTogXCIke2xpbmVzLmxvc2VMaW5lfS5cImBcbiAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQob3Bwb25lbnRFbmRMaW5lRW50cnkpO1xuICAgICAgICBjYWxsYmFja0VuZCgnd2luJywgcHJpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBnYW1lUmVzdWx0RW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGdhbWVSZXN1bHRFbnRyeS50ZXh0Q29udGVudCA9IGBBbmQuLi4uICR7b3Bwb25lbnROYW1lfSB3aW5zIWA7XG4gICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGdhbWVSZXN1bHRFbnRyeSk7XG4gICAgICAgIG9wcG9uZW50RW5kTGluZUVudHJ5LnRleHRDb250ZW50ID0gYCR7b3Bwb25lbnROYW1lfTogXCIke2xpbmVzLndpbkxpbmV9LlwiYFxuICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChvcHBvbmVudEVuZExpbmVFbnRyeSk7XG4gICAgICAgIGNhbGxiYWNrRW5kKCdsb3NlJywgcHJpemUpO1xuICAgIH1cbiAgICAvLyBzYXlpbmcgdGhlICd3aW5MaW5lJyBvciAnbG9zZUxpbmUnICBcbiAgICAvLyBrZWVwIHRyYWNrIG9mIGdvbGQhXG4gICAgLy8gc2hvdyBnb2xkIGluIHRoZSBpbnZlbnRvcnlcbiAgICAvLyB3aW4gb3IgbG9zZSBhIHNldCBbRk9SIE5PV10gbnVtYmVyIG9mIGdvbGRcbiAgICAvLyBnb2xkIGNvdWxkIGJlIHNwZW50IG9uIGJ1eWluZyBlcXVpcG1lbnRcbn1cbmV4cG9ydCB7XG4gICAgcGxheWVySGFuZCwgb3Bwb25lbnRIYW5kLCBjdXJyZW50QmlkLCBhY2N1c2F0aW9uLCBleGFtcGxlTGluZXMsIGRpZTEsIGRpZTIsIGRpZTMsIGRpZTQsIGRpZTUsIGRpZTYsIHN0YXJ0RGljZUdhbWUsIGZhbHNlQ3ViZXMsIHJvbGw2ZDRQbGF5ZXIsIHJvbGw2ZDRPcHBvbmVudCwgcm9sbDFkNCwgcm9sbFBoYXNlLCBiaWRQaGFzZSwgZmlmdHlGaWZ0eSwgb25lVGhpcmQsIG9wcG9uZW50UmVzcG9uc2UsIG9wcG9uZW50QmlkLCBjYWxsT3V0LCBnYW1lRW5kXG59IiwiY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5cbmNvbnN0IGV2ZW50RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBldmVudEVtaXR0ZXI7IiwiLy8gaW1wb3J0OiBjaGFyMSwgY2xhc3Nlc1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgYmdJbWcgZnJvbSAnLi9iZy5qcGcnO1xuaW1wb3J0IHsgY2hhcjEgfSBmcm9tICcuL2NvbXBfb2JqZWN0c19hbmRfbWV0aG9kcyc7XG5pbXBvcnQgc29uZyBmcm9tICcuL2JsYWNrbGFrZS5tcDMnO1xuLy8gaW5pdGlhbGl6ZSBzcGFjZXMgYW5kIGJ1dHRvbnNcbmxldCB0b3BfYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcF9iYXInKTtcbmxldCBsb2dfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZycpO1xubGV0IG1haW5fd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fd2luZG93Jyk7XG5sZXQgaW1hZ2Vfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlX3dpbmRvdycpO1xubGV0IG1lbnVfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbmxldCBidXR0b25fd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl93aW5kb3cnKTtcbmxldCBhdHRhY2tfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F0dGFja0J1dHRvbicpO1xubGV0IHNwZWNpYWxfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwZWNpYWxCdXR0b24nKTtcbmxldCBpbnZlbnRvcnlfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ludmVudG9yeUJ1dHRvbicpO1xubGV0IHN0YXRzX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0c0J1dHRvbicpO1xuLy9kcmF3IHBsYXllciBzdGF0c1xubWVudV93aW5kb3cudGV4dENvbnRlbnQgPSBgWW91IGFyZSAke2NoYXIxLm5hbWV9LiBZb3VyIGNsYXNzIGlzIHVua25vd24uIFlvdXIgYXJtb3IgY2xhc3MgaXMgJHtjaGFyMS5hcm1vckNsYXNzfS4gWW91ciBIUCBpcyAke2NoYXIxLmN1cnJlbnRIUH0vJHtjaGFyMS5tYXhIUH0uYDtcbi8vIGRpYWxvZyByZW1vdmVyXG5mdW5jdGlvbiBkaWFsb2dBbmltYXRpb25FbmQoZXZlbnQpIHtcbiAgICBsZXQgZGlhbG9nID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0IDogZXZlbnQ7XG4gICAgaWYgKGRpYWxvZy50YWdOYW1lID09ICdESUFMT0cnKSB7XG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpYWxvZy5yZW1vdmUoKTtcbiAgICB9XG4gICAgZGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBkaWFsb2cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZGlhbG9nQW5pbWF0aW9uRW5kKTtcbn1cbi8vLS0tbWFpbiBtZW51LS0tXG5sZXQgbWFpbk1lbnVEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbm1haW5NZW51RGlhbG9nLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6NzUlO3dpZHRoOjEwMCU7ei1pbmRleDoxMDAwO292ZXJmbG93OmhpZGRlbjsnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbk1lbnVEaWFsb2cpO1xubWFpbk1lbnVEaWFsb2cuaW5uZXJIVE1MID0gXG5gXG48ZGl2IGNsYXNzPSdtYWluTWVudUNvbnRhaW5lcic+XG4gICAgPGRpdiBzdHlsZT0nZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyLWJvdHRvbTo1cHggc29saWQgc2lsdmVyJz5cbiAgICAgICAgPGgxIHN0eWxlPSdtYXJnaW4tYm90dG9tOiA1cHg7Jz5XaGF0IE1ha2VzIFlvdSBMaXZlPzwvaDE+XG4gICAgPC9kaXY+XG4gICAgPGgxIHN0eWxlPSd0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tYm90dG9tOi0yMHB4Oyc+TWFpbiBNZW51PC9oMj4gICBcbiAgICA8ZGl2IGNsYXNzPSdtYWluTWVudScgc3R5bGU9J2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luLXRvcDo1MHB4Oyc+XG4gICAgICAgIDxidXR0b24gaWQ9J3N0YXJ0R2FtZUJ1dHRvbicgc3R5bGU9J2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgYXV0bzsgYm9yZGVyOiAzcHggc29saWQgc2lsdmVyOyBib3JkZXItcmFkaXVzOiA1cHg7IG1hcmdpbi1ib3R0b206MjBweDt3aWR0aDoyNTBweDsnPlN0YXJ0IGdhbWU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD0nc2V0dGluZ3NCdXR0b24nIHN0eWxlPSdkaXNwbGF5OmJsb2NrO21hcmdpbjowIGF1dG87IGJvcmRlcjogM3B4IHNvbGlkIHNpbHZlcjsgYm9yZGVyLXJhZGl1czogNXB4OyBtYXJnaW4tYm90dG9tOjIwcHg7d2lkdGg6MjUwcHg7Jz5TZXR0aW5nczwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPSdhYm91dEJ1dHRvbicgc3R5bGU9J2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgYXV0bzsgYm9yZGVyOiAzcHggc29saWQgc2lsdmVyOyBib3JkZXItcmFkaXVzOiA1cHg7IG1hcmdpbi1ib3R0b206MjBweDt3aWR0aDoyNTBweDsnPkFib3V0IHRoZSBjcmVhdG9yPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9J2NvbnRhY3RCdXR0b24nIHN0eWxlPSdkaXNwbGF5OmJsb2NrO21hcmdpbjowIGF1dG87IGJvcmRlcjogM3B4IHNvbGlkIHNpbHZlcjsgYm9yZGVyLXJhZGl1czogNXB4OyBtYXJnaW4tYm90dG9tOjA7d2lkdGg6MjUwcHg7Jz5Db250YWN0IG1lPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGJyPlxuICAgIDxwIHN0eWxlPSdjb2xvcjp3aGl0ZTtmb250LXNpemU6ODAlOyc+PGk+Tm90ZTogSWYgeW91IHBsYXkgb24gbW9iaWxlLCBzY3JvbGwgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIHRvIHNlZSB0aGUgYWN0aW9uIGJ1dHRvbnMuPC9pPjwvcD5cbjwvZGl2PlxuICAgIGBcbm1haW5NZW51RGlhbG9nLnNob3dNb2RhbCgpO1xuXG4vLyBzb25nIHBsYXlpbmdcbmxldCBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XG5hdWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2F1ZGlvJyk7XG5hdWRpby5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2wnLCAnY29udHJvbCcpO1xuYXVkaW8uc2V0QXR0cmlidXRlKCdsb29wJywgJ2xvb3AnKTtcbmxldCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcbnNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke3Nvbmd9YCk7XG5zb3VyY2Uuc2V0QXR0cmlidXRlKCd0eXBlJywgYGF1ZGlvL21wZWdgKTtcbmF1ZGlvLmFwcGVuZENoaWxkKHNvdXJjZSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGF1ZGlvKTtcblxubGV0IGJsYWNrTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYmxhY2tNZW51LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgYmFja2dyb3VuZC1jb2xvcjpibGFjaztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO3otaW5kZXg6NTAwO292ZXJmbG93OmhpZGRlbjtgKTtcbmxldCBiZ01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJnTWVudS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGhlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3BhY2l0eTowLjU7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIke2JnSW1nfVwiKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7b3ZlcmZsb3c6aGlkZGVuO2ApO1xuYmxhY2tNZW51LmFwcGVuZENoaWxkKGJnTWVudSk7XG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGJsYWNrTWVudSk7XG5kb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbmxldCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydEdhbWVCdXR0b24nKTtcbmxldCBtYWluTWVudUNsb3NlZCA9IGZhbHNlOztcbnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1haW5NZW51RGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBtYWluTWVudURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgIGRpYWxvZ0FuaW1hdGlvbkVuZChtYWluTWVudURpYWxvZyk7XG4gICAgICAgIG1haW5NZW51Q2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICBjaGVja0FuaW1hdGlvbkNvbXBsZXRlKCk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGNoZWNrQW5pbWF0aW9uQ29tcGxldGUoKSB7XG4gICAgaWYgKG1haW5NZW51Q2xvc2VkKSB7XG4gICAgICAgIGJsYWNrTWVudS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGJsYWNrTWVudS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBkaWFsb2dBbmltYXRpb25FbmQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnOyAgICBcbiAgICB9XG59XG5cbi8vIGV4cG9ydCBzcGFjZXMgYW5kIGJ1dHRvbnNcbmV4cG9ydCB7XG4gICAgdG9wX2JhcixcbiAgICBsb2dfd2luZG93LFxuICAgIG1haW5fd2luZG93LFxuICAgIGltYWdlX3dpbmRvdyxcbiAgICBtZW51X3dpbmRvdyxcbiAgICBidXR0b25fd2luZG93LFxuICAgIGF0dGFja19idXR0b24sXG4gICAgc3BlY2lhbF9idXR0b24sXG4gICAgaW52ZW50b3J5X2J1dHRvbixcbiAgICBzdGF0c19idXR0b24sXG4gICAgZGlhbG9nQW5pbWF0aW9uRW5kXG59IiwiLy8gaW1wb3J0OiBodWQsIGNoYXIxLCBtZW51VXBkYXRlcixcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHsgXG4gICAgbWVudV93aW5kb3csXG4gICAgaW52ZW50b3J5X2J1dHRvbixcbiAgICBkaWFsb2dBbmltYXRpb25FbmRcbn0gZnJvbSAnLi9jb21wX2h1ZCc7XG5pbXBvcnQgeyBcbiAgICBtZW51VXBkYXRlciwgXG4gICAgY2hhcjEgXG59IGZyb20gJy4vY29tcF9vYmplY3RzX2FuZF9tZXRob2RzJztcblxuLy8gLS0taW52ZW50b3J5IHN5c3RlbS0tLVxuLy8gY3JlYXRlIGEgZGlhbG9nIHdpbmRvdyB3aGVuIHdlIGNsaWNrIG9uIGludmVudG9yeVxubGV0IGludmVudG9yeURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuaW52ZW50b3J5RGlhbG9nLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdtYXgtd2lkdGg6NTAwcHg7JylcbmludmVudG9yeURpYWxvZy5pbm5lckhUTUwgPSBgXG4gICAgPGJ1dHRvbiBpZD0nY2xvc2VCdXR0b24nPkNsb3NlPC9idXR0b24+XG4gICAgPGRpdiBpZD0naW52ZW50b3J5Qm94Jz5cbiAgICAgICAgPGgyPkludmVudG9yeTwvaDI+XG4gICAgICAgIDxkaXYgaWQ9J2VxdWlwcGVkQm94Jz5cbiAgICAgICAgICAgIEVxdWlwcGVkIHdlYXBvbjogPHNwYW4gaWQ9J2VxdWlwcGVkV2VhcG9uQm94Jz48L3NwYW4+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICBFcXVpcHBlZCBhcm1vcjogPHNwYW4gaWQ9J2VxdWlwcGVkQXJtb3JCb3gnPjwvc3Bhbj5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIEVxdWlwcGVkIG1pc2M6IDxzcGFuIGlkPSdlcXVpcHBlZE1pc2NCb3gnPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGJyPlxuICAgICAgICBHb2xkOiA8c3BhbiBpZD0nZ29sZEJveCc+PC9zcGFuPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxkaXYgaWQ9J2FsbEJveCc+XG4gICAgICAgICAgICBCYWc6XG4gICAgICAgICAgICA8dWwgaWQ9J2FsbExpc3QnPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnZlbnRvcnlEaWFsb2cpO1xuaW52ZW50b3J5X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpbnZlbnRvcnlEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgbGV0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlQnV0dG9uJyk7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGludmVudG9yeURpYWxvZy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGludmVudG9yeURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBkaWFsb2dBbmltYXRpb25FbmQpO1xuICAgIH0pXG59KVxuLy8gZ29sZCBzeXN0ZW1cbmxldCBwbGF5ZXJHb2xkID0gMDtcbmxldCBnb2xkQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvbGRCb3gnKTtcbmdvbGRCb3gudGV4dENvbnRlbnQgPSBwbGF5ZXJHb2xkO1xuZnVuY3Rpb24gYWRkR29sZChhbW91bnQpIHtcbiAgICBwbGF5ZXJHb2xkICs9IGFtb3VudDtcbiAgICBnb2xkQm94LnRleHRDb250ZW50ID0gcGxheWVyR29sZDtcbn1cbi8vIGdyYWIgZWxlbWVudHMgZnJvbSBkaWFsb2dcbmxldCBlcXVpcHBlZFdlYXBvbkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcXVpcHBlZFdlYXBvbkJveCcpO1xubGV0IGVxdWlwcGVkQXJtb3JCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXF1aXBwZWRBcm1vckJveCcpO1xubGV0IGVxdWlwcGVkTWlzY0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcXVpcHBlZE1pc2NCb3gnKTtcbmxldCBhbGxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbExpc3QnKVxuLy8gd2hlbiBhbiBvYmplY3QgaXMgZ3JhYmJlZFxuZnVuY3Rpb24gZ3JhYkl0ZW0oaXRlbSkge1xuICAgIGNoYXIxLmludmVudG9yeS5wdXNoKGl0ZW0pO1xuICAgIGxldCBpdGVtQnVsbGV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGl0ZW1CdWxsZXQudGV4dENvbnRlbnQgPSBgJHtpdGVtLm5hbWV9LCAke2l0ZW0udHlwZX0uIEF0dGFjayBib251czogJHtpdGVtLml0ZW1BdHRhY2t9LiBBcm1vciBib251czogJHtpdGVtLml0ZW1Bcm1vcn0uYFxuICAgIGFsbExpc3QuYXBwZW5kQ2hpbGQoaXRlbUJ1bGxldCk7XG4gICAgaWYgKGl0ZW0udHlwZSAhPT0gJ3F1ZXN0IGl0ZW0nKSB7XG4gICAgICAgIGxldCBlcXVpcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBlcXVpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVxdWlwSXRlbShpdGVtKSk7XG4gICAgICAgIGVxdWlwQnV0dG9uLnRleHRDb250ZW50ID0gJ0VxdWlwJztcbiAgICAgICAgZXF1aXBCdXR0b24uc2V0QXR0cmlidXRlKCdzdHlsZScsICdmb250LXNpemU6IDcwJTsnKTtcbiAgICAgICAgZXF1aXBCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGAke2l0ZW0uaWR9YCk7XG4gICAgICAgIGFsbExpc3QuYXBwZW5kQ2hpbGQoZXF1aXBCdXR0b24pO1xuICAgIH1cbn1cbi8vIHdoZW4gYW4gb2JqZWN0IGlzIGVxdWlwcGVkXG5mdW5jdGlvbiBlcXVpcEl0ZW0oaXRlbSkge1xuICAgIGlmIChjaGFyMS5pbnZlbnRvcnkuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3dlYXBvbic6XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIxLmVxdWlwcGVkV2VhcG9uID09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXIxLmVxdWlwcGVkV2VhcG9uID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgY2hhcjEuYXJtb3JDbGFzcyA9IGNoYXIxLmFybW9yQ2xhc3MgKyBjaGFyMS5lcXVpcHBlZFdlYXBvbi5pdGVtQXJtb3I7XG4gICAgICAgICAgICAgICAgICAgIGVxdWlwcGVkV2VhcG9uQm94LnRleHRDb250ZW50ID0gYCR7aXRlbS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlcXVpcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2l0ZW0uaWR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGVxdWlwQnV0dG9uLnRleHRDb250ZW50ID0gJ1VuZXF1aXAnO1xuICAgICAgICAgICAgICAgICAgICBlcXVpcEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVxdWlwSXRlbShpdGVtKSk7XG4gICAgICAgICAgICAgICAgICAgIGVxdWlwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdW5lcXVpcEl0ZW0oaXRlbSkpOyAgIFxuICAgICAgICAgICAgICAgICAgICBtZW51VXBkYXRlcigpOyAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdFUlJPUjogcGxlYXNlIHVuZXF1aXAgeW91ciBjdXJyZW50IGl0ZW0gZmlyc3QnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FybW9yJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhcjEuZXF1aXBwZWRBcm1vciA9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBjaGFyMS5lcXVpcHBlZEFybW9yID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgY2hhcjEuYXJtb3JDbGFzcyA9IGNoYXIxLmFybW9yQ2xhc3MgKyBjaGFyMS5lcXVpcHBlZEFybW9yLml0ZW1Bcm1vcjtcbiAgICAgICAgICAgICAgICAgICAgZXF1aXBwZWRBcm1vckJveC50ZXh0Q29udGVudCA9IGAke2l0ZW0ubmFtZX1gO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXF1aXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpdGVtLmlkfWApO1xuICAgICAgICAgICAgICAgICAgICBlcXVpcEJ1dHRvbi50ZXh0Q29udGVudCA9ICdVbmVxdWlwJztcbiAgICAgICAgICAgICAgICAgICAgZXF1aXBCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlcXVpcEl0ZW0oaXRlbSkpO1xuICAgICAgICAgICAgICAgICAgICBlcXVpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVuZXF1aXBJdGVtKGl0ZW0pKTsgICBcbiAgICAgICAgICAgICAgICAgICAgbWVudVVwZGF0ZXIoKTsgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnRVJST1I6IHBsZWFzZSB1bmVxdWlwIHlvdXIgY3VycmVudCBpdGVtIGZpcnN0JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtaXNjJzpcbiAgICAgICAgICAgICAgICBpZiAoY2hhcjEuZXF1aXBwZWRNaXNjID09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXIxLmVxdWlwcGVkTWlzYyA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgIGNoYXIxLmFybW9yQ2xhc3MgPSBjaGFyMS5hcm1vckNsYXNzICsgY2hhcjEuZXF1aXBwZWRNaXNjLml0ZW1Bcm1vcjtcbiAgICAgICAgICAgICAgICAgICAgZXF1aXBwZWRNaXNjQm94LnRleHRDb250ZW50ID0gYCR7aXRlbS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlcXVpcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2l0ZW0uaWR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGVxdWlwQnV0dG9uLnRleHRDb250ZW50ID0gJ1VuZXF1aXAnO1xuICAgICAgICAgICAgICAgICAgICBlcXVpcEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVxdWlwSXRlbShpdGVtKSk7XG4gICAgICAgICAgICAgICAgICAgIGVxdWlwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdW5lcXVpcEl0ZW0oaXRlbSkpOyAgIFxuICAgICAgICAgICAgICAgICAgICBtZW51VXBkYXRlcigpOyAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdFUlJPUjogcGxlYXNlIHVuZXF1aXAgeW91ciBjdXJyZW50IGl0ZW0gZmlyc3QnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdFUlJPUjogeW91IGRvIG5vdCBoYXZlIHRoaXMgaXRlbSBpbiB5b3VyIGludmVudG9yeScpXG4gICAgfVxufVxuLy8gd2hlbiBhbiBpdGVtIGlzIHVuZXF1aXBwZWRcbmZ1bmN0aW9uIHVuZXF1aXBJdGVtKGl0ZW0pIHtcbiAgICBpZiAoY2hhcjEuZXF1aXBwZWRXZWFwb24gPT0gaXRlbSB8fCBjaGFyMS5lcXVpcHBlZEFybW9yID09IGl0ZW0gfHwgY2hhcjEuZXF1aXBwZWRNaXNjID09IGl0ZW0pIHtcbiAgICAgICAgaWYgKGNoYXIxLmVxdWlwcGVkV2VhcG9uID09IGl0ZW0pIHtcbiAgICAgICAgICAgIGNoYXIxLmFybW9yQ2xhc3MgPSBjaGFyMS5hcm1vckNsYXNzIC0gY2hhcjEuZXF1aXBwZWRXZWFwb24uaXRlbUFybW9yO1xuICAgICAgICAgICAgY2hhcjEuZXF1aXBwZWRXZWFwb24gPSAnJztcbiAgICAgICAgICAgIGVxdWlwcGVkV2VhcG9uQm94LnRleHRDb250ZW50ID0gYGA7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcjEuZXF1aXBwZWRBcm1vciA9PSBpdGVtKSB7XG4gICAgICAgICAgICBjaGFyMS5hcm1vckNsYXNzID0gY2hhcjEuYXJtb3JDbGFzcyAtIGNoYXIxLmVxdWlwcGVkQXJtb3IuaXRlbUFybW9yO1xuICAgICAgICAgICAgY2hhcjEuZXF1aXBwZWRBcm1vciA9ICcnO1xuICAgICAgICAgICAgZXF1aXBwZWRBcm1vckJveC50ZXh0Q29udGVudCA9IGBgO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXIxLmVxdWlwcGVkTWlzYyA9PSBpdGVtKSB7XG4gICAgICAgICAgICBjaGFyMS5hcm1vckNsYXNzID0gY2hhcjEuYXJtb3JDbGFzcyAtIGNoYXIxLmVxdWlwcGVkTWlzYy5pdGVtQXJtb3I7XG4gICAgICAgICAgICBjaGFyMS5lcXVpcHBlZE1pc2MgPSAnJztcbiAgICAgICAgICAgIGVxdWlwcGVkTWlzY0JveC50ZXh0Q29udGVudCA9IGBgO1xuICAgICAgICB9XG4gICAgICAgIG1lbnVVcGRhdGVyKCk7XG4gICAgICAgIGxldCBlcXVpcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2l0ZW0uaWR9YCk7XG4gICAgICAgIGVxdWlwQnV0dG9uLnRleHRDb250ZW50ID0gJ0VxdWlwJztcbiAgICAgICAgZXF1aXBCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB1bmVxdWlwSXRlbShpdGVtKSk7XG4gICAgICAgIGVxdWlwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZXF1aXBJdGVtKGl0ZW0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnRVJST1I6IHRoaXMgaXRlbSBpcyBub3QgZXF1aXBwZWQ7JylcbiAgICB9XG59XG4vLyB0byBjaGFyYWN0ZXIsIGFkZCB0aGUgZm9sbG93aW5nIGtleXM6IGVxdWlwcGVkV2VhcG9uLCBlcXVpcHBlZEFybW9yLCBlcXVpcHBlZE1pc2MsIGludmVudG9yeSA9IFtdXG4vLyB0aGUgaXRlbSBvYmplY3Qgd2lsbCBoYXZlIGtleXM6IHR5cGUgKHdlYXBvbiwgYXJtb3Igb3IgbWlzYyk7IGl0ZW1BdHRhY2s7IGl0ZW1Bcm1vclxuZnVuY3Rpb24gbmV3SXRlbShuYW1lLCB0eXBlLCBpdGVtQXR0YWNrLCBpdGVtQXJtb3IsIGlkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgaXRlbUF0dGFjazogaXRlbUF0dGFjayxcbiAgICAgICAgaXRlbUFybW9yOiBpdGVtQXJtb3IsXG4gICAgICAgIGlkOiBpZFxuICAgIH1cbn1cbmxldCBtYWdpY1N3b3JkID0gbmV3SXRlbSgnTWFnaWMgU3dvcmQnLCAnd2VhcG9uJywgMjAsIDAsICduMScpO1xubGV0IG1hZ2ljQXJtb3IgPSBuZXdJdGVtKCdNYWdpYyBBcm1vcicsICdhcm1vcicsIDAsIDIsICduMicpO1xubGV0IG1hZ2ljUmluZyA9IG5ld0l0ZW0oJ01hZ2ljIFJpbmcnLCAnbWlzYycsIDEsIDEsICduMycpO1xubGV0IHVsdHJhU3dvcmQgPSBuZXdJdGVtKCdVbHRyYSBTd29yZCcsICd3ZWFwb24nLCA0MCwgMCwgJ240Jyk7XG5sZXQgdWx0cmFBcm1vciA9IG5ld0l0ZW0oJ1VsdHJhIEFybW9yJywgJ2FybW9yJywgMCwgNCwgJ241Jyk7XG5sZXQgdWx0cmFSaW5nID0gbmV3SXRlbSgnVWx0cmEgUmluZycsICdtaXNjJywgMiwgMiwgJ242Jyk7XG5sZXQgcnVzdHlTd29yZCA9IG5ld0l0ZW0oJ1J1c3R5IFN3b3JkJywgJ3dlYXBvbicsIDEsIDAsICduNycpO1xubGV0IHJ1c3R5QXJtb3IgPSBuZXdJdGVtKCdSdXN0eSBBcm1vcicsICdhcm1vcicsIDAsIDEsICduOCcpO1xubGV0IGdvbGRSaW5nID0gbmV3SXRlbSgnR29sZCBSaW5nJywgJ21pc2MnLCAwLCAxLCAnbjknKTtcbmxldCBoZWFsdGhQb3Rpb24gPSBuZXdJdGVtKCdIZWFsdGggUG90aW9uJywgJ3F1ZXN0IGl0ZW0nLCAwLCAwLCAnbjEwJyk7XG5sZXQgd2lzcEJhbGwgPSBuZXdJdGVtKCdEaW1seSBHbG93aW5nIEJhbGwnLCAnbWlzYycsIDAsIDEsICduMTEnKTtcbmxldCBnb2xkZW5EYWdnZXIgPSBuZXdJdGVtKCdEYWdnZXIgb2YgdGhlIEhpZ2hmYXRlJywgJ3dlYXBvbicsIDIsIDAsICduMTInKTtcbi8vIGV4cG9ydGluZyBvYmplY3RcbmxldCBhbGxJdGVtcyA9IHsgZ29sZGVuRGFnZ2VyLCB3aXNwQmFsbCwgbWFnaWNBcm1vciwgbWFnaWNSaW5nLCBtYWdpY1N3b3JkLCB1bHRyYUFybW9yLCB1bHRyYVJpbmcsIHVsdHJhU3dvcmQsIHJ1c3R5QXJtb3IsIHJ1c3R5U3dvcmQsIGdvbGRSaW5nLCBoZWFsdGhQb3Rpb24gfTtcbi8vIGV4cG9ydFxuZXhwb3J0IHtcbiAgICBpbnZlbnRvcnlEaWFsb2csXG4gICAgZ3JhYkl0ZW0sXG4gICAgZXF1aXBJdGVtLFxuICAgIHVuZXF1aXBJdGVtLFxuICAgIG5ld0l0ZW0sXG4gICAgYWxsSXRlbXMsXG4gICAgcGxheWVyR29sZCxcbiAgICBhZGRHb2xkXG59IiwiLy8gaW1wb3J0OiBlbmVtaWVzIGFycmF5LCBpc0hlRGVhZCwgbGlzdEVuZW1pZXNcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHsgZW5lbWllcywgaXNIZURlYWQsIGlzUGxheWVyRGVhZCwgbGlzdEVuZW1pZXMgfSBmcm9tIFwiLi9jb21wX2JhdHRsZV9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IFJhY2UsIHJhY2VzIH0gZnJvbSAnLi9jb21wX3JhY2VzJztcbi8vIGxvZ193aW5kb3dcbmxldCBsb2dfd2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZycpO1xuLy8gb2JqZWN0IGNvbnN0cnVjdG9yIGZ1bmN0aW9uc1xuZnVuY3Rpb24gQ2hhcmFjdGVyKG5hbWUsIGF0dGFja0JvbnVzLCBhcm1vckNsYXNzLCBjdXJyZW50SFAsIG1heEhQLCBzcGVjaWFsQXR0YWNrLCBlcXVpcHBlZFdlYXBvbiwgZXF1aXBwZWRBcm1vciwgZXF1aXBwZWRNaXNjLCBpbnZlbnRvcnksIHJhY2UsIHNwaXJpdENvbmNlcHQsIGNvbmNlcHQsIGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmF0dGFja0JvbnVzID0gYXR0YWNrQm9udXM7XG4gICAgdGhpcy5hcm1vckNsYXNzID0gYXJtb3JDbGFzcztcbiAgICB0aGlzLmN1cnJlbnRIUCA9IGN1cnJlbnRIUDtcbiAgICB0aGlzLm1heEhQID0gbWF4SFA7XG4gICAgdGhpcy5zcGVjaWFsQXR0YWNrID0gc3BlY2lhbEF0dGFjaztcbiAgICB0aGlzLmVxdWlwcGVkV2VhcG9uID0gJyc7XG4gICAgdGhpcy5lcXVpcHBlZEFybW9yID0gJyc7XG4gICAgdGhpcy5lcXVpcHBlZE1pc2MgPSAnJztcbiAgICB0aGlzLmludmVudG9yeSA9IFtdO1xuICAgIHRoaXMucmFjZSA9IHJhY2U7XG4gICAgdGhpcy5zcGlyaXRDb25jZXB0ID0geyBjb25jZXB0OiBjb25jZXB0LCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfVxufVxuXG5mdW5jdGlvbiBNb25zdGVyKG5hbWUsIG1vbnN0ZXJBdHRhY2tCb251cywgYXJtb3JDbGFzcywgY3VycmVudEhQLCBtYXhIUCwgc3RhdHVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm1vbnN0ZXJBdHRhY2tCb251cyA9IG1vbnN0ZXJBdHRhY2tCb251cztcbiAgICB0aGlzLmFybW9yQ2xhc3MgPSBhcm1vckNsYXNzO1xuICAgIHRoaXMuY3VycmVudEhQID0gY3VycmVudEhQO1xuICAgIHRoaXMubWF4SFAgPSBtYXhIUDtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbn1cbi8vIGhlcm8ucHJvdG90eXBlIGF0dGFjayBtZXRob2RcbkNoYXJhY3Rlci5wcm90b3R5cGUuYXR0YWNrID0gZnVuY3Rpb24oc2VsZWN0ZWRFbmVteSkge1xuICAgIGlmIChlbmVtaWVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRFbmVteSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbmVtaWVzLmZvckVhY2goZW5lbXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbmVteS5zdGF0dXMgPT0gJ2J1cm5pbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15LmN1cnJlbnRIUCA9IGVuZW15LmN1cnJlbnRIUCAtIDU7XG4gICAgICAgICAgICAgICAgICAgIGlzSGVEZWFkKGVuZW15KTsgXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSBgJHtlbmVteS5uYW1lfSBpcyBidXJuaW5nIGZvciA1IGRhbWFnZSFgO1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6eWVsbG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxvZ193aW5kb3cuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IHtcbiAgICAgICAgICAgICAgICBlbmVteS5zdGF0dXMgPSAnJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgQXJyYXkuZnJvbShsb2dfd2luZG93LmNoaWxkcmVuKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGVudHJ5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY29sb3I6d2hpdGU7Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEVuZW15LmN1cnJlbnRIUCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNrUm9sbCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAyMCkgKyAxICsgdGhpcy5hdHRhY2tCb251cyk7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIxLmVxdWlwcGVkV2VhcG9uICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2tSb2xsID0gYXR0YWNrUm9sbCArIHRoaXMuZXF1aXBwZWRXZWFwb24uaXRlbUF0dGFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIxLmVxdWlwcGVkQXJtb3IgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFja1JvbGwgPSsgYXR0YWNrUm9sbCArIHRoaXMuZXF1aXBwZWRBcm1vci5pdGVtQXR0YWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hhcjEuZXF1aXBwZWRNaXNjICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2tSb2xsID0rIGF0dGFja1JvbGwgKyB0aGlzLmVxdWlwcGVkTWlzYy5pdGVtQXR0YWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgZXh0cmFDb21tZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgbGV0IGV4dHJhQXR0YWNrID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgZXh0cmFEYW1hZ2UgPSAwO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5zcGVjaWFsQXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ05vcm1hbCBBdHRhY2snOlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1NwZWN0cmFsIEJsYWRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQ29tbWVudCA9ICcgd2l0aCB0aGUgU3BlY3RyYWwgQmxhZGUgKC0yIGFjY3VyYWN5LCArMiBkYW1hZ2UgaWYgaGl0cyknO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFBdHRhY2sgPSAtMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhRGFtYWdlID0gKzQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU3Bpcml0IEJsZXNzaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQXR0YWNrID0gLTEwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnV2l0aGVyaW5nIEJvbHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFDb21tZW50ID0gJyB3aXRoIHRoZSBXaXRoZXJpbmcgQm9sdCAoLTQgYWNjdXJhY3ksIGJ1dCArNiBkYW1hZ2UgaWYgaGl0cyknO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFBdHRhY2sgPSAtNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhRGFtYWdlID0gKzY7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnV3JhdGhmdWwgVmlzYWdlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQ29tbWVudCA9ICcgd2l0aCB0aGUgV3JhdGhmdWwgVmlzYWdlICgtNCBhY2N1cmFjeSwgYnV0IHN0dW5zIHRoZSB0YXJnZXQpJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQXR0YWNrID0gLTQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0YWNrUm9sbCArIGV4dHJhQXR0YWNrID4gc2VsZWN0ZWRFbmVteS5hcm1vckNsYXNzKSB7IHNlbGVjdGVkRW5lbXkuc3RhdHVzID0gJ3N0dW5uZWQnOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQmluZCBvZiB0aGUgR3VhcmRpYW4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFDb21tZW50ID0gJyB3aXRoIHRoZSBCaW5kIG9mIHRoZSBHdWFyZGlhbiAoLTQgYWNjdXJhY3ksIGJ1dCBzdHVucyB0aGUgdGFyZ2V0KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUF0dGFjayA9IC00O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGFja1JvbGwgKyBleHRyYUF0dGFjayA+IHNlbGVjdGVkRW5lbXkuYXJtb3JDbGFzcykgeyBzZWxlY3RlZEVuZW15LnN0YXR1cyA9ICdzdHVubmVkJzsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Vzc2VuY2UgRHJhaW4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFDb21tZW50ID0gJyB3aXRoIHRoZSBFc3NlbmNlIERyYWluICgtNCBhY2N1cmFjeSwgYnV0IHNldHMgdGFyZ2V0IG9uIGZpcmUgZm9yIG9uZSB0dXJuKSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUF0dGFjayA9IC00O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGFja1JvbGwgKyBleHRyYUF0dGFjayA+IHNlbGVjdGVkRW5lbXkuYXJtb3JDbGFzcykgeyBzZWxlY3RlZEVuZW15LnN0YXR1cyA9ICdidXJuaW5nJzsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJhY2UgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhQXR0YWNrICs9IHRoaXMucmFjZS5yYWNlQXR0YWNrQm9udXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhdHRhY2tSb2xsICsgZXh0cmFBdHRhY2sgPiBzZWxlY3RlZEVuZW15LmFybW9yQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRFbmVteS5jdXJyZW50SFAgLT0gYXR0YWNrUm9sbCArIGV4dHJhQXR0YWNrICsgZXh0cmFEYW1hZ2UgLSBzZWxlY3RlZEVuZW15LmFybW9yQ2xhc3M7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9IGF0dGFja3MgJHtzZWxlY3RlZEVuZW15Lm5hbWV9JHtleHRyYUNvbW1lbnR9ISBUaGUgYXR0YWNrIGhpdHMgYW5kIGRlYWxzICR7YXR0YWNrUm9sbCArIGV4dHJhQXR0YWNrICsgZXh0cmFEYW1hZ2UgLSBzZWxlY3RlZEVuZW15LmFybW9yQ2xhc3N9IGRhbWFnZSFgO1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6eWVsbG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxvZ193aW5kb3cuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgICAgICAgICAgICAgICAgICBpc0hlRGVhZChzZWxlY3RlZEVuZW15KTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEVuZW1pZXMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3BlY2lhbEF0dGFjayA9PSAnU3Bpcml0IEJsZXNzaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGVhbGVkO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVySFBtaXNzaW5nID0gdGhpcy5tYXhIUCAtIHRoaXMuY3VycmVudEhQO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVySFBtaXNzaW5nID4gNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SFAgPSB0aGlzLmN1cnJlbnRIUCArIDU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFsZWQgPSA1O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllckhQbWlzc2luZyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWxlZCA9IHBsYXllckhQbWlzc2luZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEhQID0gdGhpcy5tYXhIUDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWxlZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IGAke3RoaXMubmFtZX0gY2FzdHMgU3Bpcml0IEJsZXNzaW5nLCBoZWFsaW5nIHRoZW1zZWxmIGZvciAke2hlYWxlZH0gSFAhYDtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOnllbGxvdycpO1xuICAgICAgICAgICAgICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgbWVudVVwZGF0ZXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gYCR7dGhpcy5uYW1lfSBhdHRhY2tzICR7c2VsZWN0ZWRFbmVteS5uYW1lfSEgVGhlIGF0dGFjayBtaXNzZXMhYDtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOnllbGxvdycpO1xuICAgICAgICAgICAgICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVuZW1pZXMubGVuZ3RoICE9PSAwKSB7IFxuICAgICAgICAgICAgICAgICAgICBlbmVtaWVzLmZvckVhY2goZW5lbXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVuZW15LnN0YXR1cyAhPT0gJ3N0dW5uZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkuY291bnRlcmF0dGFjaygpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZW5lbXkuc3RhdHVzID09ICdzdHVubmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IGAke2VuZW15Lm5hbWV9IGlzIHN0dW5uZWQhYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6eWVsbG93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9IGBXaGljaCBtb25zdGVyIGRvIEkgYXR0YWNrP2A7XG4gICAgICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTsgICAgXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gYE5vIG1vbnN0ZXJzIGFyb3VuZC5gO1xuICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICB9XG59XG4vLyBjaGFyYWN0ZXIgY2xhc3Nlc1xuZnVuY3Rpb24gSmFuaXRvcihuYW1lLCBhdHRhY2tCb251cywgYXJtb3JDbGFzcywgY3VycmVudEhQLCBtYXhIUCwgc3BlY2lhbEF0dGFjaywgZXF1aXBwZWRXZWFwb24sIGVxdWlwcGVkQXJtb3IsIGVxdWlwcGVkTWlzYywgaW52ZW50b3J5LCByYWNlLCBzcGlyaXRDb25jZXB0LCBjb25jZXB0LCBkZXNjcmlwdGlvbikge1xuICAgIENoYXJhY3Rlci5jYWxsKHRoaXMsIG5hbWUsIGF0dGFja0JvbnVzLCBhcm1vckNsYXNzLCBjdXJyZW50SFAsIG1heEhQLCBzcGVjaWFsQXR0YWNrLCBlcXVpcHBlZFdlYXBvbiwgZXF1aXBwZWRBcm1vciwgZXF1aXBwZWRNaXNjLCBpbnZlbnRvcnksIHJhY2UsIHNwaXJpdENvbmNlcHQsIGNvbmNlcHQsIGRlc2NyaXB0aW9uKTtcbn1cbmZ1bmN0aW9uIEFjY291bnRhbnQobmFtZSwgYXR0YWNrQm9udXMsIGFybW9yQ2xhc3MsIGN1cnJlbnRIUCwgbWF4SFAsIHNwZWNpYWxBdHRhY2ssIGVxdWlwcGVkV2VhcG9uLCBlcXVpcHBlZEFybW9yLCBlcXVpcHBlZE1pc2MsIGludmVudG9yeSwgcmFjZSwgc3Bpcml0Q29uY2VwdCwgY29uY2VwdCwgZGVzY3JpcHRpb24pIHtcbiAgICBDaGFyYWN0ZXIuY2FsbCh0aGlzLCBuYW1lLCBhdHRhY2tCb251cywgYXJtb3JDbGFzcywgY3VycmVudEhQLCBtYXhIUCwgc3BlY2lhbEF0dGFjaywgZXF1aXBwZWRXZWFwb24sIGVxdWlwcGVkQXJtb3IsIGVxdWlwcGVkTWlzYywgaW52ZW50b3J5LCByYWNlLCBzcGlyaXRDb25jZXB0LCBjb25jZXB0LCBkZXNjcmlwdGlvbik7XG59XG5mdW5jdGlvbiBEYW5jZXIobmFtZSwgYXR0YWNrQm9udXMsIGFybW9yQ2xhc3MsIGN1cnJlbnRIUCwgbWF4SFAsIHNwZWNpYWxBdHRhY2ssIGVxdWlwcGVkV2VhcG9uLCBlcXVpcHBlZEFybW9yLCBlcXVpcHBlZE1pc2MsIGludmVudG9yeSwgcmFjZSwgc3Bpcml0Q29uY2VwdCwgY29uY2VwdCwgZGVzY3JpcHRpb24pIHtcbiAgICBDaGFyYWN0ZXIuY2FsbCh0aGlzLCBuYW1lLCBhdHRhY2tCb251cywgYXJtb3JDbGFzcywgY3VycmVudEhQLCBtYXhIUCwgc3BlY2lhbEF0dGFjaywgZXF1aXBwZWRXZWFwb24sIGVxdWlwcGVkQXJtb3IsIGVxdWlwcGVkTWlzYywgaW52ZW50b3J5LCByYWNlLCBzcGlyaXRDb25jZXB0LCBjb25jZXB0LCBkZXNjcmlwdGlvbik7XG59XG4vLyBzZXR0aW5nIHByb3RvdHlwZXNcbk9iamVjdC5zZXRQcm90b3R5cGVPZihKYW5pdG9yLnByb3RvdHlwZSwgQ2hhcmFjdGVyLnByb3RvdHlwZSk7XG5PYmplY3Quc2V0UHJvdG90eXBlT2YoQWNjb3VudGFudC5wcm90b3R5cGUsIENoYXJhY3Rlci5wcm90b3R5cGUpOyBcbk9iamVjdC5zZXRQcm90b3R5cGVPZihEYW5jZXIucHJvdG90eXBlLCBDaGFyYWN0ZXIucHJvdG90eXBlKTsgXG4vLyBjaGFyYWN0ZXIgb2JqZWN0XG5sZXQgY2hhcjEgPSBuZXcgQ2hhcmFjdGVyKCdTb21lYm9keScsIDAsIDEwLCAyMCwgMTAwLCAnTm9ybWFsIEF0dGFjaycsICcnLCAnJywgJycsIFtdLCByYWNlcy5IdW1hbiwge2NvbmNlcHQ6JycsIGRlc2NyaXB0aW9uOiAnJ30pO1xuLy8gZW5lbWllcyBvYmplY3RzXG5sZXQgZ29ibGluX2dydW50ID0gbmV3IE1vbnN0ZXIoJ0dvYmxpbicsIDAsIDEwLCA0MCwgNDAsICcnKTtcbmxldCBnb2JsaW5fZmlnaHRlciA9IG5ldyBNb25zdGVyKCdHb2JsaW4gRmlnaHRlcicsIDIsIDEzLCAyNSwgMjUsICcnKTtcbmxldCBnb2JsaW5fc2hhbWFuID0gbmV3IE1vbnN0ZXIoJ0dvYmxpbiBTaGFtYW4nLCAzLCAxNiwgMzAsIDMwLCAnJyk7XG5sZXQgZ29ibGluX2NoaWVmdGFpbiA9IG5ldyBNb25zdGVyKCdHb2JsaW4gQ2hpZWZ0YWluJywgNSwgMTcsIDQwLCA0MCwgJycpO1xubGV0IHdpemFyZCA9IG5ldyBNb25zdGVyKCdIYWxmIERlYWQgT2xkIEd1eScsIC0xLCAxMCwgNSwgNSwgJycpO1xubGV0IGltcDEgPSBuZXcgTW9uc3RlcignUmVkIEltcCcsIDAsIDUsIDUsIDUsICcnKTtcbmxldCBpbXAyID0gbmV3IE1vbnN0ZXIoJ0JsdWUgSW1wJywgMCwgNSwgNSwgNSwgJycpO1xubGV0IHdpc3AxID0gbmV3IE1vbnN0ZXIoJ1dpc3AnLCAwLCAwLCAxMCwgMTApO1xuLy8gbW9uc3RlcnMgb2JqZWN0XG5sZXQgbW9uc3RlcnMgPSB7IGdvYmxpbl9ncnVudCwgZ29ibGluX2ZpZ2h0ZXIsIGdvYmxpbl9zaGFtYW4sIGdvYmxpbl9jaGllZnRhaW4sIHdpemFyZCwgaW1wMSwgaW1wMiwgd2lzcDEgfVxuLy8gbW9uc3RlciBjb3VudGVyYXR0YWNrXG4vL2VuZW15IHR1cm4gbG9naWNcbk1vbnN0ZXIucHJvdG90eXBlLmNvdW50ZXJhdHRhY2sgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgYXR0YWNrUm9sbCA9ICBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMjApICsgMSkgKyB0aGlzLm1vbnN0ZXJBdHRhY2tCb251cztcbiAgICBpZiAoYXR0YWNrUm9sbCA+IGNoYXIxLmFybW9yQ2xhc3MpIHtcbiAgICAgICAgY2hhcjEuY3VycmVudEhQIC09IGF0dGFja1JvbGwgLSBjaGFyMS5hcm1vckNsYXNzO1xuICAgICAgICBpZiAoY2hhcjEuY3VycmVudEhQIDwgMCkge1xuICAgICAgICAgICAgY2hhcjEuY3VycmVudEhQID0gMDtcbiAgICAgICAgfVxuICAgICAgICBtZW51VXBkYXRlcigpO1xuICAgICAgICBsZXQgZW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gYCR7dGhpcy5uYW1lfSBhdHRhY2tzICR7Y2hhcjEubmFtZX0hIFRoZSBhdHRhY2sgaGl0cyBhbmQgZGVhbHMgJHthdHRhY2tSb2xsIC0gY2hhcjEuYXJtb3JDbGFzc30gZGFtYWdlIWA7XG4gICAgICAgIGVudHJ5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjp5ZWxsb3cnKTtcbiAgICAgICAgbG9nX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgICAgIGlzUGxheWVyRGVhZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9IGF0dGFja3MgJHtjaGFyMS5uYW1lfSEgVGhlIGF0dGFjayBtaXNzZXMhYDtcbiAgICAgICAgZW50cnkuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOnllbGxvdycpO1xuICAgICAgICBsb2dfd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICB9XG59XG4vLyAtLS1tZW51IHRleHQgdXBkYXRlciBmdW5jdGlvbi0tLVxuZnVuY3Rpb24gbWVudVVwZGF0ZXIoKSB7XG4gICAgY2hhcjEucmFjZSA9IHJhY2VzLkh1bWFuO1xuICAgIGxldCBtZW51X3dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG4gICAgaWYgKGNoYXIxIGluc3RhbmNlb2YgSmFuaXRvcikgeyAvLyBXcmFpdGhcbiAgICAgICAgbWVudV93aW5kb3cudGV4dENvbnRlbnQgPSBgWW91IGFyZSAke2NoYXIxLm5hbWV9LiBZb3VyIGFyZSBhIFdyYWl0aCR7Y2hhcjEuc3Bpcml0Q29uY2VwdC5kZXNjcmlwdGlvbn0uIEluIGxpZmUsIHlvdSB3ZXJlIGEgJHtjaGFyMS5yYWNlLm5hbWV9LiBZb3VyIGFybW9yIGNsYXNzIGlzICR7Y2hhcjEuYXJtb3JDbGFzc30uIFlvdXIgSFAgaXMgJHtjaGFyMS5jdXJyZW50SFB9LyR7Y2hhcjEubWF4SFB9LmA7XG4gICAgfSBlbHNlIGlmIChjaGFyMSBpbnN0YW5jZW9mIEFjY291bnRhbnQpIHsgLy8gUG9sdGVyZ2Vpc3RcbiAgICAgICAgbWVudV93aW5kb3cudGV4dENvbnRlbnQgPSBgWW91IGFyZSAke2NoYXIxLm5hbWV9LiBZb3VyIGFyZSBhIFBvbHRlcmdlaXN0JHtjaGFyMS5zcGlyaXRDb25jZXB0LmRlc2NyaXB0aW9ufS4gSW4gbGlmZSwgeW91IHdlcmUgYSAke2NoYXIxLnJhY2UubmFtZX0uIFlvdXIgYXJtb3IgY2xhc3MgaXMgJHtjaGFyMS5hcm1vckNsYXNzfS4gWW91ciBIUCBpcyAke2NoYXIxLmN1cnJlbnRIUH0vJHtjaGFyMS5tYXhIUH0uYDtcbiAgICB9IGVsc2UgaWYgKGNoYXIxIGluc3RhbmNlb2YgRGFuY2VyKSB7IC8vIEd1YXJkaWFuIFNwaXJpdFxuICAgICAgICBtZW51X3dpbmRvdy50ZXh0Q29udGVudCA9IGBZb3UgYXJlICR7Y2hhcjEubmFtZX0uIFlvdXIgYXJlIGEgR3VhcmRpYW4gU3Bpcml0JHtjaGFyMS5zcGlyaXRDb25jZXB0LmRlc2NyaXB0aW9ufS4gSW4gbGlmZSwgeW91IHdlcmUgYSAke2NoYXIxLnJhY2UubmFtZX0uIFlvdXIgYXJtb3IgY2xhc3MgaXMgJHtjaGFyMS5hcm1vckNsYXNzfS4gWW91ciBIUCBpcyAke2NoYXIxLmN1cnJlbnRIUH0vJHtjaGFyMS5tYXhIUH0uYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtZW51X3dpbmRvdy50ZXh0Q29udGVudCA9IGBZb3UgYXJlICR7Y2hhcjEubmFtZX0uIFlvdXIgY2xhc3MgaXMgdW5rbm93bi4gWW91ciBhcm1vciBjbGFzcyBpcyAke2NoYXIxLmFybW9yQ2xhc3N9LiBZb3VyIEhQIGlzICR7Y2hhcjEuY3VycmVudEhQfS8ke2NoYXIxLm1heEhQfS5gO1xuICAgIH1cbn1cbi8vIG9iamVjdCBmb3IgaW1wb3J0YW50IHJvbGVzIGluIHRoZSBwbG90XG5jbGFzcyBOUENSb2xlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBzdXJuYW1lLCBoZSwgaGlzLCBoaW0sIGhpbXNlbGYpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdXJuYW1lID0gc3VybmFtZTtcbiAgICAgICAgdGhpcy5oZSA9IGhlO1xuICAgICAgICB0aGlzLmhpcyA9IGhpcztcbiAgICAgICAgdGhpcy5oaW0gPSBoaW07XG4gICAgICAgIHRoaXMuaGltc2VsZiA9IGhpbXNlbGY7XG4gICAgfVxufVxuZnVuY3Rpb24gTlBDTWFrZXIobmFtZSwgc3VybmFtZSwgaGUsIGhpcywgaGltLCBoaW1zZWxmKSB7XG4gICAgcmV0dXJuIG5ldyBOUENSb2xlKG5hbWUsIHN1cm5hbWUsIGhlLCBoaXMsIGhpbSwgaGltc2VsZilcbn1cbi8vIGV4cG9ydFxuZXhwb3J0IHtcbiAgICBDaGFyYWN0ZXIsXG4gICAgTW9uc3RlcixcbiAgICBKYW5pdG9yLFxuICAgIEFjY291bnRhbnQsXG4gICAgRGFuY2VyLFxuICAgIGNoYXIxLFxuICAgIGdvYmxpbl9ncnVudCxcbiAgICBnb2JsaW5fZmlnaHRlcixcbiAgICBnb2JsaW5fc2hhbWFuLFxuICAgIGdvYmxpbl9jaGllZnRhaW4sXG4gICAgd2l6YXJkLFxuICAgIGltcDEsXG4gICAgaW1wMixcbiAgICBtZW51VXBkYXRlcixcbiAgICBtb25zdGVycyxcbiAgICBOUENSb2xlLFxuICAgIE5QQ01ha2VyXG59IiwiLy8gZmFjdG9yeSBmdW5jdGlvbiAvIGNvbnN0cnVjdG9yIC8gY2xhc3NcbmNsYXNzIFJhY2Uge1xuICAgIHN0YXRpYyBpbnN0YW5jZXMgPSBbXTtcbiAgICBzdGF0aWMgZ2V0QWxsSW5zdGFuY2VzKCkge1xuICAgICAgICByZXR1cm4gUmFjZS5pbnN0YW5jZXM7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCByYWNlQXR0YWNrQm9udXMsIHJhY2VIUEJvbnVzLCByYWNlQXJtb3JCb251cykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucmFjZUF0dGFja0JvbnVzID0gcmFjZUF0dGFja0JvbnVzO1xuICAgICAgICB0aGlzLnJhY2VIUEJvbnVzID0gcmFjZUhQQm9udXM7XG4gICAgICAgIHRoaXMucmFjZUFybW9yQm9udXMgPSByYWNlQXJtb3JCb251cztcbiAgICB9XG59XG4vLyBjcmVhdGlvbiBvZiByYWNlIG9iamVjdHNcbmxldCBIdW1hbiA9IG5ldyBSYWNlKCdwZXJzb24gZnJvbSBhbiB1bmtub3duIGxhbmQnLCAnW2luaXRpYWwgcmFjZV0nLCAwLCAwLCAwKTtcbmxldCBSZWFsbWVyID0gbmV3IFJhY2UoJ1JlYWxtZXInLCAnW3N0b2NreSBhbmQgc3RvdXQsIGJsYWggYmxhaF0nLCAxLCAwLCAwKTtcbmxldCBNb3J0YXIgPSBuZXcgUmFjZSgnTW9ydGFyJywgJ1tzdG9ja3kgYW5kIHN0b3V0LCBibGFoIGJsYWhdJywgMCwgMCwgMSk7IC8vIGFscmVhZHkgY29ucXVlcmVkIGJ5IHRoZSBSZWFsbSBuYXRpb24/IFNlY29uZC1jbGFzcyBjaXRpemVucyBpbiB0aGUgUmVhbG1cbmxldCBEZWFkbGFuZGVyID0gbmV3IFJhY2UoJ0RlYWRsYW5kZXInLCAnW3N0b2NreSBhbmQgc3RvdXQsIGJsYWggYmxhaF0nLCAwLCAxNSwgMCk7XG4vLyBvYmplY3Qgb2Ygb2JqZWN0cyBmb3IgZXhwb3J0aW5nXG5sZXQgcmFjZXMgPSB7IEh1bWFuLCBSZWFsbWVyLCBNb3J0YXIsIERlYWRsYW5kZXIgfVxuLy8gZXhwb3J0aW5nIHRoZSBjbGFzcyBhbmQgdGhlIG9iamVjdCBvZiBvYmplY3RzXG5leHBvcnQgeyBSYWNlLCByYWNlcyB9IiwiaW1wb3J0IHsgbW9uc3RlcnMgfSBmcm9tICcuL2NvbXBfb2JqZWN0c19hbmRfbWV0aG9kcyc7XG5pbXBvcnQgeyBhbGxJdGVtcywgcGxheWVyR29sZCwgYWRkR29sZCB9IGZyb20gJy4vY29tcF9pbnZlbnRvcnlfc3lzdGVtJztcbmltcG9ydCB7IGljb25zIH0gZnJvbSAnLi9jb21wX2Fzc2V0cyc7XG4vLyBpbXBvcnQgeyBzdG9yeUVsZW1lbnQgfSBmcm9tICcuL2NvbXBfc3Rvcnlfb2JqZWN0cyc7XG5jbGFzcyBzdG9yeUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHRleHQsIG1vZGlmaWVycywgbmV4dFN0b3J5RWxlbWVudCkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcbiAgICAgICAgdGhpcy5uZXh0U3RvcnlFbGVtZW50ID0gbmV4dFN0b3J5RWxlbWVudDtcbiAgICAgICAgc3RvcnlFbGVtZW50Lmluc3RhbmNlcy5wdXNoKHRoaXMpO1xuICAgIH1cbiAgICBzdGF0aWMgaW5zdGFuY2VzID0gW107XG4gICAgc3RhdGljIGdldEFsbEluc3RhbmNlcygpIHtcbiAgICAgICAgcmV0dXJuIHN0b3J5RWxlbWVudC5pbnN0YW5jZXM7XG4gICAgfVxufVxuLy8gLS0tIHNjcmlwdCAtLS1cbi8vIGZyb20gdGhlbSBsZWFybiBhYm91dCB0aGUgTmV3IERhd24gRWRpY3RcblxuLy8gLS0tIEZJUlNUIEFQUEVBUkFOQ0UgT0YgVEhFIERJVklORSBNRVNTRU5HRVIgLS0tXG5sZXQgZmlyc3RBcHBlYXJhbmNlX2Jvb2sxID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgW1RoaXMgaXMgdGhlIGVuZCBvZiB0aGUgcHJvdG90eXBlIV1gLCBgW1RoYW5rIHlvdSBmb3IgcGxheWluZyBhbmQgbGV0IG1lIGtub3cgd2hhdCB5b3UgdGhpbmshXWBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQpXG5sZXQgZmlyc3RBcHBlYXJhbmNlX2RyZWFtczEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BbVGhpcyBpcyB0aGUgZW5kIG9mIHRoZSBwcm90b3R5cGUhXWAsIGBbVGhhbmsgeW91IGZvciBwbGF5aW5nIGFuZCBsZXQgbWUga25vdyB3aGF0IHlvdSB0aGluayFdYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZClcbmxldCBmaXJzdEFwcGVhcmFuY2VfdHJlZTEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BbVGhpcyBpcyB0aGUgZW5kIG9mIHRoZSBwcm90b3R5cGUhXWAsIGBbVGhhbmsgeW91IGZvciBwbGF5aW5nIGFuZCBsZXQgbWUga25vdyB3aGF0IHlvdSB0aGluayFdYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHVuZGVmaW5lZClcbmxldCBmaXJzdEFwcGVhcmFuY2Vfc2hhZG93MSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFtUaGlzIGlzIHRoZSBlbmQgb2YgdGhlIHByb3RvdHlwZSFdYCwgYFtUaGFuayB5b3UgZm9yIHBsYXlpbmcgYW5kIGxldCBtZSBrbm93IHdoYXQgeW91IHRoaW5rIV1gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgdW5kZWZpbmVkKVxubGV0IGZpcnN0QXBwZWFyYW5jZV9hbmltYWwxID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgW1RoaXMgaXMgdGhlIGVuZCBvZiB0aGUgcHJvdG90eXBlIV1gLCBgW1RoYW5rIHlvdSBmb3IgcGxheWluZyBhbmQgbGV0IG1lIGtub3cgd2hhdCB5b3UgdGhpbmshXWBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQpXG5sZXQgZmlyc3RBcHBlYXJhbmNlX3JlZmxlY3Rpb24xID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgW1RoaXMgaXMgdGhlIGVuZCBvZiB0aGUgcHJvdG90eXBlIV1gLCBgW1RoYW5rIHlvdSBmb3IgcGxheWluZyBhbmQgbGV0IG1lIGtub3cgd2hhdCB5b3UgdGhpbmshXWBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWQpXG4vLyBDSE9PU0UgWU9VUiBDSE9TRU4hIENIT09TRSBBIEdIT1NUTFkgV0FZIFRPIENPTU1VTklDQVRFIVxuLy8gaWYgd2F0Y2ggdGhlbSBmb3IgYSB3aGlsZSwgdGhlIHNlbGVjdGlvbiBvZiBtZXRob2RzIG9mIGFwcGVhcmFuY2UgaXMgc21hbGxlclxuLy8gbWV0aG9kczogd3JpdGUgbWVzc2FnZXMgaW4gdGhlaXIgYm9vaywgYXBwZWFyIGluIHRoZWlyIGRyZWFtc1xubGV0IG1ldGhvZE9mQ29udGFjdDIgPSBuZXcgc3RvcnlFbGVtZW50KCdjaG9pY2UnLCBcbiAgICBbYFlvdSBoYXZlIGEgZmV3IGlkZWFzIG9uIGhvdyB0byBtYWtlIGNvbnRhY3Qgd2l0aCBDaG9zZW5OYW1lLi4uYF0sXG4gICAgW3tjaG9pY2VUZXh0OiBgWW91IHdhaXQgZm9yIENob3Nlbk5hbWUgdG8gc3RhcnQgcmVhZGluZywgYW5kIGNoYW5nZSB0aGUgd29yZHMgaW4geGlzIGJvb2suYCwgLy8gd2FpdCB1bnRpbCB0aGUgYWR2ZW50dXJlcidzIHJlYWRpbmcgYW5kIGNoYW5nZSB0aGUgd29yZHMgaW4gdGhlIGJvb2tcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdmaXJzdEFwcGVhcmFuY2VfYm9vaycsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBmaXJzdEFwcGVhcmFuY2VfYm9vazF9LFxuICAgIHtjaG9pY2VUZXh0OiBgWW91IHdhaXQgZm9yIENob3Nlbk5hbWUgdG8gZmFsbCBhc2xlZXAsIGFuZCBhbHRlciB4aXMgZHJlYW1zLmAsIC8vIGFwcGVhciBvciBhbHRlciB0aGUgYWR2ZW50dXJlcidzIGRyZWFtXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnZmlyc3RBcHBlYXJhbmNlX2RyZWFtcycsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBmaXJzdEFwcGVhcmFuY2VfZHJlYW1zMX0sXG4gICAge2Nob2ljZVRleHQ6IGBZb3Ugd2FpdCB0aWxsIENob3Nlbk5hbWUncyBhbG9uZSBvbiB3YXRjaCwgYW5kIGRyYXcgdGhlIHN5bWJvbCBvZiBKdXN0aWNlIG9uIGEgbmVhcmJ5IHRyZWUuYCwgLy8gU3ltYm9scyBvciBSdW5lczogVXNpbmcgbmF0dXJhbCBtYXRlcmlhbHMgYXJvdW5kIHRoZSBjYW1wLCB0aGUgc3Bpcml0IGNvdWxkIGFycmFuZ2Ugc3ltYm9scyBvciBydW5lcyB0aGF0IGNvbnZleSBhIG1lc3NhZ2VcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdmaXJzdEFwcGVhcmFuY2VfdHJlZScsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBmaXJzdEFwcGVhcmFuY2VfdHJlZTF9LFxuICAgIHtjaG9pY2VUZXh0OiBgWW91IHdhaXQgdGlsbCB0aGUgb3RoZXJzIGFyZSBhc2xlZXAsIGFuZCBjaGFuZ2UgdGhlIHNoYXBlIG9mIENob3Nlbk5hbWUncyBzaGFkb3cgY2F1c2VkIGJ5IHRoZSBjYW1wZmlyZS5gLCAvLyBBbmltYXRlZCBTaGFkb3dzOiBUaGUgc3Bpcml0IGNvdWxkIGFuaW1hdGUgc2hhZG93cyBjYXN0IGJ5IG9iamVjdHMgaW4gdGhlIGVudmlyb25tZW50LCBjYXVzaW5nIHRoZW0gdG8gbW92ZSBpbiB3YXlzIHRoYXQgY29udmV5IG1lc3NhZ2VzIG9yIGltYWdlcyByZWxldmFudCB0byB0aGUgYWR2ZW50dXJlcnMnIGpvdXJuZXkuIEZvciBleGFtcGxlLCBhIHNoYWRvdyBtaWdodCBtaW1pYyB0aGUgc2hhcGUgb2YgYSBrZXkgdG8gaW5kaWNhdGUgdGhhdCB0aGV5IGFyZSB1bmxvY2tpbmcgYSBncmVhdCBteXN0ZXJ5IG9yIHBvd2VyXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnZmlyc3RBcHBlYXJhbmNlX3NoYWRvdycsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBmaXJzdEFwcGVhcmFuY2Vfc2hhZG93MX0sXG4gICAge2Nob2ljZVRleHQ6IGBZb3Ugc2VhcmNoIGZvciBhbiBhbmltYWwsIGFuZCBnaXZlIGl0IGEgY29tbWFuZCB0byBhcHByb2FjaCB0aGUgY2FtcCB3aGVuIHRoZSBvdGhlcnMgYXJlIGFzbGVlcC5gLCAvLyBHdWlkaW5nIEFuaW1hbHM6IFRoZSBzcGlyaXQgY291bGQgaW5mbHVlbmNlIHRoZSBiZWhhdmlvciBvZiBhbmltYWxzIGluIHRoZSBhcmVhLCBjYXVzaW5nIHRoZW0gdG8gYWN0IGluIHdheXMgdGhhdCBsZWFkIHRoZSBhZHZlbnR1cmVycyBpbiB0aGUgcmlnaHQgZGlyZWN0aW9uIG9yIHdhcm4gdGhlbSBvZiBpbXBlbmRpbmcgZGFuZ2VyXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnZmlyc3RBcHBlYXJhbmNlX2FuaW1hbCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBmaXJzdEFwcGVhcmFuY2VfYW5pbWFsMX0sXG4gICAge2Nob2ljZVRleHQ6IGBZb3Ugd2FpdCBmb3IgQ2hvc2VuTmFtZSB0byBnZXQgYSBkcmluayBvciBwb2xpc2ggeGlzIGFybW9yLCB0aGVuIGFsdGVyIHRoZSByZWZsZWN0aW9uLmAsIC8vIFZpc2lvbnMgaW4gUmVmbGVjdGl2ZSBTdXJmYWNlczogVGhlIHNwaXJpdCBjb3VsZCBjb21tdW5pY2F0ZSB0aHJvdWdoIHZpc2lvbnMgdGhhdCBhcHBlYXIgaW4gcmVmbGVjdGl2ZSBzdXJmYWNlcyBzdWNoIGFzIHN0aWxsIHdhdGVyLCBtaXJyb3JzLCBvciBwb2xpc2hlZCBtZXRhbC4gVGhlc2UgdmlzaW9ucyBjb3VsZCBvZmZlciBnbGltcHNlcyBvZiB0aGUgYWR2ZW50dXJlcnMnIGZ1dHVyZSBvciBwcm92aWRlIGNyeXB0aWMgY2x1ZXMgYWJvdXQgdGhlaXIgZGVzdGlueSBhcyB0aGUgQ2hvc2VuIG9uZVxuICAgIGNob2ljZU1vZGlmaWVyczogJ2ZpcnN0QXBwZWFyYW5jZV9yZWZsZWN0aW9uJyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGZpcnN0QXBwZWFyYW5jZV9yZWZsZWN0aW9uMX1dLFxuICAgIHVuZGVmaW5lZClcbmxldCBtZXRob2RPZkNvbnRhY3QxYiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYEFmdGVyIGEgbGl0dGxlIGJpdCBvZiB0aGlua2luZyBhbmQgdGVzdGluZywgZmFyIGZyb20gdGhlIGNhbXAsIHlvdSBkZXRlcm1pbmUgdGhhdCBhbGwgeW91IGNhbiBkbyBmb3Igbm93IGFzIGEgU3Bpcml0LCBpcyB0byBtYW5pcHVsYXRlIGluYW5pbWF0ZSBvYmplY3RzLmAsIGBUaGVvcmV0aWNhbGx5LCB5b3UgYWxzbyBmZWVsIHRoYXQgeW91IG1pZ2h0IGJlIGFibGUgdG8gZ2l2ZSBsaXR0bGUgY29tbWFuZHMgdG8gbm9uLWh1bWFuIGFuaW1hbHMsIGFuZCwgaWYgeW91IGNvbmNlbnRyYXRlIGhhcmQsIGZpbGwgZHJlYW1zIG9mIHNsdW1iZXJpbmcgZm9sa3Mgd2l0aCBpbWFnZXMuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIG1ldGhvZE9mQ29udGFjdDIpXG5sZXQgbWV0aG9kT2ZDb250YWN0MSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYE5vdywgaG93IHRvIG1ha2UgY29udGFjdD9gLCBgSHVtYW5zIGNhbid0IHNlZSwgaGVhciBvciB0b3VjaCBTcGlyaXRzIGRpcmVjdGx5LmAsIGBTcGlyaXRzIGFyZSB0b2xkIHRvIGhhdmUgbWFnaWNhbCBhYmlsaXRpZXMuYCwgYFRoZSBvbmx5IGJlaW5ncyBpbiB0aGUgd29ybGQgdG8gaGF2ZSB0aGVtLCBhY3R1YWxseS5gLCBgVGhvc2Ugd291bGQgYmUgaGFuZHkgcmlnaHQgYWJvdXQgbm93LmAsIGBZb3UgdHJ5IHRvIGZlZWwgd2hhdCB5b3UgY2FuIGRvLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBtZXRob2RPZkNvbnRhY3QxYilcbmxldCBjaG9zZVBlY3VsaWFyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgQ2FwdGFpbiBQZWN1bGlhciBpcyB0aGUgb2J2aW91cyBjaG9pY2UuYCwgYEluIHJlYWxpdHksIHlvdSBrbm93IG5vdGhpbmcgYWJvdXQgdGhlc2UgcGVvcGxlJ3MgcGFzdHMsIHlldCB5b3UncmUgc3VwcG9zZWQgdG8gcGljayB3aGljaCBvbmUncyBtb3N0IHN1aXRhYmxlIHRvIGJlIHRoZSBDaG9zZW4gb2YgSnVzdGljZS5gLCBgV2hvJ3MgbW9yZSBsaWtlbHkgdG8gQkVMSUVWRSB0aGV5J3JlIENob3NlbiwgcmF0aGVyLmAsIGBQZWN1bGlhcidzIGluIGNoYXJnZSwgd2hpY2ggbWVhbnMgc2hlJ3MgcHJvYmFibHkgYWNjb21wbGlzaGVkIHRoZSBtb3N0LiBSaWdodD9gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgbWV0aG9kT2ZDb250YWN0MSlcbmxldCBjaG9zZVNuYXBkcmFnb24gPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BDYXB0YWluIFBlY3VsaWFyIGFuZCBMeXNhbmRlciBhcmUgaG9ub3JhYmxlLCBtaWxpdGFyeSB0eXBlcy5gLCBgSXQgd2lsbCBiZSBtdWNoIGhhcmRlciB0byB0cmljayB0aGVtIGludG8gYmVsaWV2aW5nIHRoYXQgdGhleSBhcmUgdGhlIGNob3NlbiBvbmVzLmAsIGBTbmFwZHJhZ29uLCB3aG8gbG9va3MgZWdvdGlzdGljYWwsIGhhbmRzb21lIGFuZCBwb3B1bGFyLCBpcyB0aGUgb2J2aW91cyBjaG9pY2UuYCwgYEhlJ2xsIGJlIGVhc2llciB0byBjb252aW5jZSB0aGF0IGhlJ3MgdGhlIENob3NlbiBPbmUuYCwgYFJpZ2h0P2BdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBtZXRob2RPZkNvbnRhY3QxKVxubGV0IGNob3NlTHlzYW5kZXIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3Ugc3RvcCB5b3Vyc2VsZiBmb3IgYSBtb21lbnQuYCwgYE5vdCBqdXN0IHlvdXIgc3Vydml2YWwgYXMgYSBTcGlyaXQgaXMgYXQgc3Rha2UuYCwgYFRoaXMgY2hvaWNlIHdpbGwgaGF2ZSBjb25zZXF1ZW5jZSBvbiB0aGUgZW50aXJlIEZhdGVkIFJlYWxtLmAsIGBUaGUgcGVyc29uIHlvdSBhcHBlYXIgdG8gYW5kIHRyeSB0byBjb252aW5jZSB0aGF0IHRoZXkgYXJlIHRoZSBDaG9zZW4gb2YgdGhlIFBob2VuaXggb2YgSnVzdGljZSB3aWxsIGJlY29tZSBhIGJpZyBkZWFsIGV2ZW50dWFsbHkuYCwgYEx5c2FuZGVyLCBhIHRydWUgd2FycmlvciwgYSBkZXBlbmRhYmxlLCBuby1ub25zZW5zZSBzb2xkaWVyLCB3aWxsIGNhcnJ5IHRoaXMgc3RhdHVzIHRoZSBiZXN0LmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBtZXRob2RPZkNvbnRhY3QxKVxuLy8gd2hhdCBhcmUgdGhlIHN0b3JpZXMgb2YgcGVvcGxlIHRhbGtpbmcgdG8gU3Bpcml0cz8gbW9zdGx5IHNwaXJpdHMgYWN0aW5nIGxpa2UgbWVzc2VuZ2VycyBvZiB0aGUgU3VucywgY2hvb3NpbmcgaHVtYW5zIGFzIHRoZWlyIGNoYW1waW9uc1xuLy8gSSBuZWVkIHRvIHByb21vdGUgSnVzdGljZSwgaGVuY2UgdGhleSBuZWVkIHRvIHNlZSBtZSBhcyBhbiBhdXRob3JpdHlcbi8vIEknbGwgdGVsbCB0aGVtIHRoYXQgdGhleSBhcmUgdGhlIGNob3NlbiBvbmUsIGZvciB0aGVtIHRvIHNlZSBtZSBhcyBhbiBhdXRob3JpdHlcbmxldCBzcGlyaXRBcHBlYXIzID0gbmV3IHN0b3J5RWxlbWVudCgnY2hvaWNlJyxcbiAgICBbYFF1ZXN0aW9uIGlzOiB3aG8gdG8gYXBwZWFyIHRvP2AsIGBXaG8gcG9ydHJheXMgdGhlIGlkZWEgb2YgSnVzdGljZSB0aGUgbW9zdD8gT3IsIHdobyB3b3VsZCBCRUxJRVZFIHRoYXQgdGhleSBhcmUgdGhlIENob3NlbiBvZiBKdXN0aWNlP2AsIGBXaG8gZG8geW91IG1ha2UgdGhlIENob3NlbiBvbmU/YF0sXG4gICAgW3tjaG9pY2VUZXh0OiBgQ2FwdGFpbiBQZWN1bGlhciwgdGhlIHNlcmlvdXMgY29tbWFuZGVyIHdobyBzZWVtcyB0byBiZSBpbiB0dW5lIHdpdGggb3RoZXJzOyBuZWVkcy5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ2Nob3NlblBlY3VsaWFyJyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGNob3NlUGVjdWxpYXJ9LFxuICAgIHtjaG9pY2VUZXh0OiBgU25hcGRyYWdvbiwgaGlzIGVhc3kgYW5kIG1pc2NoaWV2b3VzIHNtaWxlIHRlbGxzIHlvdSB0aGF0IGhlJ3MgdG9vIGVnb3Rpc3RpY2FsIHRvIG5vdCBiZWxpZXZlIHRoYXQgaGUncyB0aGUgQ2hvc2VuIG9uZS5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ2Nob3NlblNuYXBkcmFnb24nLFxuICAgIGNob2ljZU5leHRTdG9yeTogY2hvc2VTbmFwZHJhZ29ufSxcbiAgICB7Y2hvaWNlVGV4dDogYEx5c2FuZGVyLiBBIHRydWUsIHJlc3RsZXNzIHdhcnJpb3Igd2l0aCBpbXBlY2NhYmxlIGNhcmUgZm9yIHRoZWlyIGdlYXIgYW5kIHZpZ2lsYW5jZSBpbiB0aGVpciBleWVzLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnY2hvc2VuTHlzYW5kZXInLFxuICAgIGNob2ljZU5leHRTdG9yeTogY2hvc2VMeXNhbmRlcn1dLFxuICAgIHVuZGVmaW5lZCkgXG5sZXQgc3Bpcml0QXBwZWFyMmIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3Ugbm93IGtub3cgd2hhdCB5b3UgaGF2ZSB0byBkby5gLCBgWW91IGhhdmUgdG8gbWFrZSB5b3VyIGZpcnN0IGNvbnRhY3Qgc2VlbSBhcyBsZWdpdGltYXRlIGFzIHBvc3NpYmxlLmAsIGBNYWtlIGNvbnRhY3Qgd2l0aCBvbmUgb2YgdGhlbSwgYW5kIG1ha2UgdGhlbSBiZWxpZXZlIHRoZXkgYXJlIHRoZSBDaG9zZW4gb25lLiBDaG9zZW4gb2YgdGhlIFBob2VuaXggb2YgSnVzdGljZS5gLCBgRXZlbiB0aG91Z2ggeW91IHJlYWxseSBoYXZlIG5vIGlkZWEgd2hhdCB5b3UncmUgZG9pbmcuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHNwaXJpdEFwcGVhcjMpXG5sZXQgc3Bpcml0QXBwZWFyMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYEEgJ0Nob3NlbiB3YXJyaW9yJy5gLCBgVGhhdCdzIHdoYXQgeW91IG5lZWQgdG8gZG8gaWYgeW91IHdhbnQgdG8gc2VlbSBsZWdpdGltYXRlIHRvIHRoZW0uYCwgYFRoYXQncyByaWdodCFgLCBgVGhlIHRyaW8gd291bGQgaGF2ZSBoZWFyZCB0YWxlcyBvZiBTcGlyaXRzIHRvby5gLCBgU28gaWYgeW91IHBpY2sgb25lIG9mIHRoZW0sIHdob2V2ZXIgc2VlbXMgdG8gbW9zdCBmaXQgdGhlIGlkZWEgb2YgSnVzdGljZSwgYW5kIHNsb3dseSBiZWNvbWUgdGhlaXIgZ3VpZGUsIHRoZWlyIGRpdmluZSBtZXNzZW5nZXIuLi5gLCBgLi4uVGhpcyBwZXJzb24gd2lsbCBiZWxpZXZlIHRoYXQgdGhleSdyZSB0aGUgQ2hvc2VuIG9mIEp1c3RpY2UuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHNwaXJpdEFwcGVhcjJiKVxubGV0IHNwaXJpdEFwcGVhcjEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BUaGlzIGlzIGEgcXVlc3Rpb24sIGFjdHVhbGx5LmAsIGBTaG91bGQgeW91IG1ha2UgY29udGFjdCB3aXRoIG9uZSBvZiB0aGVtLCBvciB3aXRoIGFsbCBvZiB0aGVtIGF0IG9uY2U/YCwgYExpdGVyYWxseSBldmVyeSB0YWxlIGFib3V0IFNwaXJpdHMgcG9ydHJheWVkIHRoZW0gYXMgZ3VpZGVzLCBkaXZpbmUgbWVzc2VuZ2VycyBvZiB0aGUgUGhvZW5peGVzLiBUaGUgR29kcy5gLCBgVGhlIFNwaXJpdHMgb2YgbXl0aHMgYXBwZWFyIHRvIENob3NlbiB3YXJyaW9ycywgdGhvc2Ugd2hvIHNob3dlZCBkZWRpY2F0aW9uIHRvIHRoZSBTcGlyaXQncyBjb25jZXB0LmAsIGBUaGUgU3Bpcml0IHdpbGwgZmlyc3Qgc2hvdyBzaWducyB0byB0aGUgQ2hvc2VuIHdhcnJpb3IsIHNpZ25zIHRoYXQgdGhlIHdhcnJpb3IgaXMgb24gdGhlIHJpZ2h0IHBhdGguYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHNwaXJpdEFwcGVhcjIpXG4vLyB3YXRjaGluZyB0aGVtXG5sZXQgc3Bpcml0V2F0Y2g4ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgQWxsIHRoaXMgaW5mb3JtYXRpb24gd2lsbCBzdXJlbHkgYmUgdXNlZnVsIGlmIHlvdSB3YW50IHlvdXIgZmlyc3QgZ2hvc3RseSBjb250YWN0IHdpdGggdGhlIHRocmVlIHRvIGJlIHN1Y2Nlc3NmdWwuYCwgYFlvdSdyZSBsaWtlbHkgdG8gaGF2ZSBvbmUgc2hvdCBhdCB0aGlzLmAsIGBZb3UgbmVlZCB0byBtYWtlIGNvbnRhY3Qgd2l0aCB0aGVtLCBvciBvbmUgb2YgdGhlbS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgc3Bpcml0QXBwZWFyMSlcbmxldCBzcGlyaXRXYXRjaDcgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgZmVlbCB5b3Vyc2VsZiBncm93aW5nIHdlYWtlci4gWW91J3JlIGFib3V0IHRvIGRpc2VhcHBlYXIgZnJvbSBub3Qgc2VydmluZyB0aGUgUGhvZW5peCBvZiBKdXN0aWNlLmAsIGBZb3UgZGlkIGxlYXJuIGEgYnVuY2ggYWJvdXQgdGhlIHRocmVlLCBob3dldmVyLmAsIGBUaGVpciBuYW1lczogQ2FwdGFpbiBQZWN1bGlhciwgU25hcGRyYWdvbiBhbmQgTHlzYW5kZXIuYCwgYFRoZWlyIGFsbGVnaWFuY2U6IHRoZSBBZHZlbnR1cmVyJ3MgR3VpbGQsIGFuZCB3aGF0IHRoZXkncmUgZG9pbmcgaGVyZTogYW5zd2VyaW5nIHRoZSBOZXcgRGF3biBFZGljdC5gLCBgVGhlIGxvY2F0aW9uIGZpdHMgLSB0aGUgRm9yZXN0IG9mIE1pcnJvcnMsIHdoZXJlIHlvdSBjdXJyZW50bHkgYXJlLCBpcyB0byB0aGUgZWFzdCBvZiB0aGUgRmF0ZWQgUmVhbG0ncyBtYWluIGNpdGllcy4gQmV0d2VlbiB0aGUgRmF0ZWQgUmVhbG0gYW5kIHRoZSBEZWFkIExhbmRzLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBzcGlyaXRXYXRjaDgpXG5sZXQgc3Bpcml0V2F0Y2g2ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFsgYEFkdmVudHVyZXIncyBHdWlsZCBtZW1iZXJzIHVzdWFsbHkgdHJhdmVsIGFsb25lLiBUaGV5J3JlIHRhdWdodCB0byBiZSBzZWxmLXN1ZmZpY2llbnQsIGFuZCB0byBwaWNrIGNvbnRyYWN0cyBzdWl0YWJsZSBmb3IgdGhlaXIgc2tpbGwgbGV2ZWxzLmAsIGBZZXQgdGhlcmUgYXJlIHRocmVlIG9mIHRoZW0gaGVyZSwgYW5kIHRoYXQgZml0cyBvZiB0aGlzICdOZXcgRGF3biBFZGljdCcgZnJvbSBDYXB0YWluIFBlY3VsaWFyJ3MgZG9jdW1lbnQuYCwgJ1RoZSBOZXcgRGF3biBFZGljdC4nLCBgQWNjb3JkaW5nIHRvIHRoZSBkb2N1bWVudCB5b3Ugc2F3IGluIFBlY3VsaWFyJ3Mgc2F0Y2hlbCwgYW4gb3BlbiBtaXNzaW9uIGZyb20gdGhlIEhpZ2hmYXRlIGhlcnNlbGYsIGZvciBBZHZlbnR1cmVycyB0byB2ZW50dXJlIGludG8gdGhlIERlYWQgTGFuZHMuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHNwaXJpdFdhdGNoNylcbmxldCBzcGlyaXRXYXRjaDUgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3Uga25vdyBvZiB0aGUgQWR2ZW50dXJlcidzIEd1aWxkLmAsIGBZb3UgZG9uJ3QgcmVtZW1iZXIgeW91ciBwcmV2aW91cyBsaWZlLCB3aGVuIHlvdSd2ZSBiZWVuLCB5b3UgYXNzdW1lLCBhIGh1bWFuLmAsIGBIb3dldmVyLCB5b3Ugbm90aWNlIHRoYXQgeW91IGRvIHJldGFpbiBtZW1vcmllcyBvZiB0aGUgRmF0ZWQgUmVhbG0sIGl0cyBjdWx0dXJlLCBsaWtlIG5pY2tuYW1lcyBhbmQgb3JnYW5pemF0aW9ucy5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgc3Bpcml0V2F0Y2g2KVxubGV0IHNwaXJpdFdhdGNoNCA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFllcywgaXQgbG9va3MgbGlrZSB0aGUgdGhyZWUgYmVsb25nIHRvIHRoZSBBZHZlbnR1cmVyJ3MgR3VpbGQuYCwgYFRoZSBGYXRlZCBSZWFsbSdzIEFkdmVudHVyZXIncyBHdWlsZCBpcyBhIGxvb3NlIHVuaW9uIG9mIHNraWxsZWQgZmlnaHRlcnMuYCwgYFRoZXkgdHJhdmVsIHRoZSBGYXRlZCBSZWFsbSwgdXN1YWxseSBhbG9uZSwgdGFraW5nIG9uIGNvbnRyYWN0cyBmcm9tIHBlb3BsZSB0byBhc3Npc3Qgd2l0aCB3aWxkIGNyZWF0dXJlcywgYmFuZGl0cywgb3Igc3RyYXkgdW5kZWFkIHRoYXQgbWlnaHQgaGF2ZSB3YW5kZXJlZCBpbnRvIHRoZSBSZWFsbSdzIGVhc3Rlcm4gcmVnaW9ucyBmcm9tIHRoZSBEZWFkIExhbmRzLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBzcGlyaXRXYXRjaDUpXG5sZXQgc3Bpcml0V2F0Y2gzID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgVGhlIGxhc3QgcGVyc29uLCBhbmRyb2d5bm91cy1sb29raW5nLCB3aXRoIHNob3VsZGVyIGxlbmd0aCByZWQgaGFpciwgaXMgTHlzYW5kZXIuYCwgYFRoZXkgd2VhciB0aGUgaGVhdmllc3QgYXJtb3IgYW5kIHNlZW0gdG8gYmUgdGhlIHdlYXBvbnMgc3BlY2lhbGlzdCBvZiB0aGUgdGhyZWUuYCwgYEx5c2FuZGVyJ3MgYXJtb3IgaXMgcGVyZmVjdGx5IG1haW50YWluZWQsIGV2ZW4gaW4gdGhpcyB3ZWF0aGVyLiBTbyB3ZWxsLCBpbiBmYWN0LCB0aGF0IHRoZXkgYXJlIGV2ZW4gd2VhcmluZyB0aGVpciBvZmZpY2lhbCBBZHZlbnR1cmVyJ3MgTGVhZ3VlIGJhZGdlIC0gZ2l2aW5nIHlvdSBhIGNoYW5jZSB0byByZWFkIHRoZWlyIGZ1bGwgbmFtZSAtIEx5c2FuZGVyIE1hY0FwcGxlYnksIG9mIHRoZSBBZHZlbnR1cmVyJ3MgR3VpbGQuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHNwaXJpdFdhdGNoNClcbmxldCBzcGlyaXRXYXRjaDIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BcIlBlY3VsaWFyXCIgaXMgcHJvYmFibHkgYSBuaWNrbmFtZS4gTmlja25hbWVzIGFyZSBjb21tb24gaW4gdGhlIEZhdGVkIFJlYWxtLmAsIGBUaGUgbG9uZy1oYWlyZWQgbWFuIGlzIFBlY3VsaWFyJ3MgeW91bmdlciBicm90aGVyLCBTbmFwZHJhZ29uLCBvciBTbmFwLmAsIGBIZSBzZWVtcyB0byBiZSB0aGUgbW9zdCB1bmNvbWZvcnRhYmxlIGhlcmUgaW4gdGhlIGZyb3plbiB3aWxkZXJuZXNzLmAsIGBQZXJoYXBzIHRoYXQncyBqdWRnbWVudGFsLCBidXQgeW91IGFzc3VtZSB0aGF0IGhlJ3MgaGFwcGllciBhbmQgbW9yZSByZXNvdXJjZWZ1bCBpbiBhIGJ1c3RsaW5nIGNpdHkuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHNwaXJpdFdhdGNoMylcbmxldCBzcGlyaXRXYXRjaDEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgZGVjaWRlIHRvIGJlIG1ldGhvZGljYWwgaW4gaG93IHlvdSBhcHByb2FjaCB0aGVtLmAsIGBBZnRlciBhbGwsIGlmIHlvdSBib3RjaCB5b3VyIG9uZSBjaGFuY2UgdG8gbWFrZSBjb250YWN0LCB0aGVyZSBtaWdodCBub3QgYmUgYW55IG90aGVyIHBlb3BsZSBhcm91bmQgdG8gcHJlYWNoIEp1c3RpY2UgdG8sIGFuZCB5b3Ugd2lsbCBkaXNhcHBlYXIuYCwgYFlvdSBjYW4ndCB0YWtlIHRoYXQgY2hhbmNlLCBzbyB5b3Ugd2F0Y2ggdGhlIHRyaW8gZm9yIGFub3RoZXIgaG91ciBvciBzby5gLCBgWW91IGxlYXJuIHRoYXQgdGhlIG9uZSB5b3UgYXNzdW1lZCB0byBiZSBpbiBjaGFyZ2UgaXMgQ2FwdGFpbiBQZWN1bGlhci4gQSBzZXJpb3VzIHdvbWFuIHdpdGggb2xpdmUgc2tpbiBhbmQgZGFyayBoYWlyIHdobydzIGFsd2F5cyBwYXlpbmcgYXR0ZW50aW9uIHRvIGhlciB0d28gY29tcGFuaW9ucy5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgc3Bpcml0V2F0Y2gyKVxuLy8gY2hvaWNlOiB3YXRjaCB0aGVtIGZvciBhIHdoaWxlIHRvIG1ha2UgYSBiZXR0ZXIgc2VsZWN0aW9uIGJ1dCBiZWNvbWUgd2Vha2VyLCBvciBjaG9vc2Ugbm93XG5sZXQgY2FtcFZpYmVzNiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Nob2ljZScsXG4gICAgW2BZb3UgZmVlbCB5b3VyIHZpc2lvbiBnZXR0aW5nIGV2ZW4gYmx1cnJpZXIuIEZsb2F0aW5nIGlzIGhhcmRlciBhbmQgaGFyZGVyIHdpdGggZWFjaCBwYXNzaW5nIG1pbnV0ZS5gLCBgWW91IG5lZWQgdG8gbWFrZSBjb250YWN0LCB0byBwcm9tb3RlIHRoZSBpZGVhIG9mIEp1c3RpY2UgdG8gdGhlbSwgb3IgdG8gb25lIG9mIHRoZW0sIG9yIHlvdSdsbCBkaXNhcHBlYXIuYCwgYFlvdSdyZSBub3Qgc3VyZSB3aGF0IGhhcHBlbnMgdG8gU3Bpcml0cyBpZiB0aGV5IGRpc2FwcGVhciB3aXRob3V0IHBlcmZvcm1pbmcgdGhlaXIgZnVuY3Rpb24uYCwgYFlvdSBoYXZlIHRvIG1ha2UgYSBkZWNpc2lvbi4gRG8geW91IHRyeSB0byB1c2UgeW91ciBhYmlsaXRpZXMgdG8gbWFrZSBjb250YWN0IHdpdGggb25lIG9mIHRoZW0/IE9yIGRvIHlvdSB3YWl0LCBhbmQga2VlcCB3YXRjaGluZz9gXSxcbiAgICBbe2Nob2ljZVRleHQ6IGBJIHdpbGwgd2FpdCwgYW5kIGtlZXAgd2F0Y2hpbmcuIEkgbmVlZCB0byBnYXRoZXIgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdGhyZWUgYmVmb3JlIEkgY2FuIGVmZmVjdGl2ZWx5IGNvbW11bmljYXRlLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiBudWxsLFxuICAgIGNob2ljZU5leHRTdG9yeTogc3Bpcml0V2F0Y2gxfSxcbiAgICB7Y2hvaWNlVGV4dDogYEkgbmVlZCB0byBtYWtlIGNvbnRhY3QuIEkgY2FuIGZlZWwgdGhhdCBJIGFtIGRpc2FwcGVhcmluZyBhbmQgSSdsbCBvbmx5IGdldCB3ZWFrZXIgd2l0aCBlYWNoIHdhc3RlZCBtaW51dGUuYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6IG51bGwsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBzcGlyaXRBcHBlYXIxfV0sXG4gICAgdW5kZWZpbmVkKSBcbi8vIFZJQkVTIE9GIFRIRSBDQU1QXG5sZXQgY2FtcFZpYmVzNSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFwiUmVhZGluZyB0aGUgZWRpY3QgYWdhaW4sIHNpc3Rlcj9cIiBhIHZvaWNlIHNheXMgYXMgdGhlIHNlY29uZCBtYW4sIHRoZSBvbmUgd2l0aCB0aGUgbG9uZyBoYWlyIGFuZCB0aGUgZWFzeSBzbWlsZSwgc2Nvb3RzIG92ZXIgY2xvc2VyIHRvIHRoZSBjb21tYW5kZXIuYCwgYFwiRG8geW91IG5lZWQgYW55dGhpbmcsIFNuYXA/XCIgdGhlIHdvbWFuIHJlc3BvbmRzLCBpZ25vcmluZyBoaXMgY29tbWVudC4gVGhlcmUncyBhIGhpbnQgb2YgY29uY2VybiBpbiBoZXIgdm9pY2UuYCwgYFwiTmFoLCBJJ20gZmluZS4gQXMgZmluZSBhcyBJIGNhbiBiZSxcIiBTbmFwIGNodWNrbGVzIGFuZCB0aGUgc2hvcnQgZXhjaGFuZ2UgaXMgb3Zlci5cImBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBjYW1wVmliZXM2KVxubGV0IGNhbXBWaWJlczQgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BUaGUgY29tbWFuZGVyIHB1dHMgYmFjayB0aGUgZG9jdW1lbnQsIGJ1dCB5b3UgZGlkIG1hbmFnZSB0byByZWFkIGEgbGl0dGxlLmAsIGBUaGUgZG9jdW1lbnQgZGVzY3JpYmVkIHNvbWV0aGluZyBjYWxsZWQgdGhlIE5ldyBEYXduIEVkaWN0LmAsIGBBbiBvcGVuIGNhbGwsIGEgbWlzc2lvbiwgZnJvbSB0aGUgSGlnaGZhdGUgZm9yIGFueSBhZHZlbnR1cmVyIHRvIGFuc3dlci5gLCBgQmVmb3JlIHRoZSBjb21tYW5kZXIgcHV0IGF3YXkgdGhlIGRvY3VtZW50LCB5b3UgbWFuYWdlZCB0byBzZWUgdGhhdCB0aGUgbWlzc2lvbiBvZiB0aGUgTmV3IERhd24gRWRpY3QgaW52b2x2ZXMgdHJhdmVsaW5nIHRvIHRoZSBEZWFkIExhbmRzIC0gbGFuZCBvZiB1bmRlYWQgYW5kIG5vbWFkaWMgbmVjcm9tYW5jZXJzIGJleW9uZCB0aGUgZWFzdGVybiBib3JkZXIgb2YgdGhlIEZhdGVkIFJlYWxtLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBjYW1wVmliZXM1KVxubGV0IGNhbXBWaWJlczMgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BMdWNraWx5IGZvciB5b3UsIHRoZSBjb21tYW5kZXIgZGVjaWRlcyB0byByZXRyaWV2ZSB0aGUgcGllY2Ugb2YgcGFwZXIsIGFuZCBzdGFydHMgdG8gcmVhZCBpdC5gLCBgWW91IHF1aWNrbHkgZmxvYXQgb3ZlciBiZWhpbmQgaGVyIHNob3VsZGVyLCByZWFkaW5nIHRoZSBwYXBlciB0byB0cnkgdG8gZmluZCBvdXQgbW9yZSBhYm91dCB0aGUgdGhyZWUuYCwgYEZsb2F0aW5nIGNsb3NlciB0byB0aGUgY29tbWFuZGVyLCB5b3UgZ2V0IGEgYmV0dGVyIGxvb2sgYXQgaGVyIGZhY2UuYCwgYFNoZSdzIGluIGhlciBlYXJseSA0MCdzLiBPbGl2ZSBza2luLCBkYXJrIGhhaXIsIHNvbGVtbiwgZXhoYXVzdGVkLCBpbi1jaGFyZ2UgZXhwcmVzc2lvbi4gQ2lnYXJldHRlIGJ1dHRzIGluIGEgc21hbGwgZ2FyYmFnZSBzYWNrIG5lYXIgaGVyLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBjYW1wVmliZXM0KVxubGV0IGNhbXBWaWJlczIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BUaGUgdHJpbyBrZWVwIHNpdHRpbmcgbmVhciB0aGUgZmlyZS5gLCBgWW91IG5vdGljZSB0aGF0IHRoZSBmaXJzdCB3b21hbiwgdGhlIGNvbW1hbmRlciwgaGFzIGEgcGllY2Ugb2YgcGFwZXIgc3RpY2tpbmcgb3V0IG9mIGhlciBydWNrc2Fjay5gLCBgVGhlIHBpZWNlIG9mIHBhcGVyIGJlYXJzIHRoZSBzZWFsIG9mIHRoZSBIaWdoZmF0ZSwgdGhlIGxlYWRlciBhbmQgcHJvdGVjdG9yIG9mIHRoZSBGYXRlZCBSZWFsbXMuYCwgYFdob2V2ZXIsIHRoZXNlIHRocmVlIGFyZSwgdGhleSdyZSBub3Qgb25seSBhcm1lZCwgYnV0IG9uIG9mZmljaWFsIGJ1c2luZXNzLCBpdCBzZWVtcy5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgY2FtcFZpYmVzMylcbmxldCBjYW1wVmliZXMxID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGxpbmdlciBuZWFyIHRoZWlyIGNhbXAsIHdhdGNoaW5nIHRoZSB0cmlvIGZyb20gZGlmZmVyZW50IGFuZ2xlcy5gLCBgVGhlIHJlYWxpdHkgb2YgeW91ciBuZXcgY29uZGl0aW9uIGlzIHNsb3dseSBzZXR0aW5nIGluLiBMaWtlIGJlZm9yZSwgdGhlIHRyaW8gZG9uJ3QgaGVhciB5b3UsIGRvbid0IHNlZSB5b3UsIGFuZCBjYW4ndCB0b3VjaCB5b3UuYCwgYFlvdSBwdXNoIHRoZXNlIHRob3VnaHRzIGF3YXkuIFlvdSdyZSBhbGl2ZS4gSW4gYSBuZXcgZm9ybS4gV2l0aCBhIG5ldyBtaXNzaW9uIG9mIEp1c3RpY2UuYCwgYEJ1dCBhbGl2ZS4gQW5kIHRvIHN0YXkgYWxpdmUsIHlvdSBuZWVkIHRoZXNlIHBlb3BsZS4gWW91IG5lZWQgdGhlbSB0byBlbWJyYWNlIEp1c3RpY2UuYCwgYFRoZSBtb29kIGluIHRoZSBjYW1wIGlzIHNvbGVtbiwgYnV0IGRldGVybWluZWQuIFBlcmhhcHMgdGhpcyBpcyB0byBiZSBleHBlY3RlZCwgY29uc2lkZXJpbmcgdGhlIHN1cnJvdW5kaW5ncyBhbmQgdGhlIHdlYXRoZXIuYCwgYFRoZSBGb3Jlc3Qgb2YgTWlycm9ycyBpcyBhbiB1bmZvcmdpdmluZyBwbGFjZSBpbmRlZWQuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGNhbXBWaWJlczIpXG4vLyBERVNDUklQVElPTlMgT0YgVEhFIFRIUkVFXG5sZXQgbHlzYW5kZXJEZXNjcmlwdGlvbiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFRoZSBsYXN0IHBlcnNvbiBhcm91bmQgdGhlIGNhbXBmaXJlIGlzIGEgZmlndXJlIHdpdGggc2hvdWxkZXItbGVuZ3RoIHJlZCBoYWlyLmAsIGBUaGV5IGxvb2sgbGlrZSB0aGUgeW91bmdlc3Qgb2YgdGhlIHRyaW8sIHBlcmhhcHMgaW4gdGhlaXIgbGF0ZSAyMCdzLmAsIGBEZXNwaXRlIHRoYXQsIHRoZXkgY2FycnkgdGhlbXNlbHZlcyB3aXRoIHRoZSBwb2lzZSBvZiBhIHNlYXNvbmVkIHdhcnJpb3IuIFRoZXkgYXBwZWFyIGluY3JlZGlibHkgdmlnaWxhbnQsIGFzIGlmIGF3YWl0aW5nIGEgY29tbWFuZC5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgY2FtcFZpYmVzMSlcbmxldCBzbmFwRGVzY3JpcHRpb24gPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BUbyBoZXIgcmlnaHQgaXMgYSBtYW4gd2l0aCBsb25nIGhhaXIgZnJhbWluZyBoaXMgZmFjZS4gSGUgc2VlbXMgdG8gYmUgaW4gaGlzIGVhcmx5IDMwJ3MuYCwgYEhpcyBkZW1lYW5vciBpcyBjaGFybWluZywgaGlzIHNtaWxlIGVhc3ksIGludml0aW5nIHdpdGggYSBoaW50IG9mIG1pc2NoaWVmLmAsIGBUaGVyZSdzIGEgc2Vuc2Ugb2YgcmVzdGxlc3NuZXNzIGFib3V0IGhpbSwgYXMgaWYgaGUncyBjb25zdGFudGx5IHNlZWtpbmcgc29tZXRoaW5nIGp1c3Qgb3V0IG9mIHJlYWNoLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBseXNhbmRlckRlc2NyaXB0aW9uKVxubGV0IHBlY3VsaWFyRGVzY3JpcHRpb24gPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BEZXNwaXRlIHRoZSBiaXRpbmcgY29sZCBvZiB0aGUgYmxpenphcmQsIHNoZSBzaXRzIHdpdGggYSBzZW5zZSBvZiBjb250cm9sLCBoZXIgcG9zdHVyZSByaWdpZC5gLCBgU2hlIHNlZW1zIHRvIGJlIGluIGhlciBlYXJseSA0MCdzLiBIZXIgZmFjZSBiZWFycyB0aGUgbWFya3Mgb2YgaGFyZHNoaXAsIHdpdGggbGluZXMgZXRjaGVkIGRlZXBseSBhcm91bmQgaGVyIGV5ZXMgYW5kIG1vdXRoLmAsIGBUd28gc2NpbWl0YXJzIGFuZCBhIG11c2tldCBhcmUgcmVzdGluZyBuZXh0IHRvIGhlci4gSnVkZ2luZyBieSBoZXIgb3V0Zml0LCBzaGUgc2VlbXMgdG8gYmUgdGhlIG9uZSBpbiBjaGFyZ2UuYCwgYERlc3BpdGUgaGVyIG91dHdhcmQgYXBwZWFyYW5jZSBvZiBzdG9pY2lzbSwgeW91IHNlbnNlIGEgZGVlcC1zZWF0ZWQgZmF0aWd1ZSwgYXMgaWYgc2hlJ3MgdGlyZWQgb2YgYWx3YXlzIGJlaW5nIHRoZSBvbmUgaW4gY2hhcmdlLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBzbmFwRGVzY3JpcHRpb24pXG5sZXQgYXBwcm9hY2hDYW1wS25vdzQgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BUaGUgdGhyZWUgcGVvcGxlIGFyZSBhcm1lZCAtIHlvdSBzZWUgbXVza2V0cyBhbmQgc3dvcmRzIG5leHQgdG8gdGhlbS4gVGhleSBsb29rIGxpa2Ugc29sZGllcnMsIG1lcmNlbmFyaWVzLCBvciBndWFyZHMgb2Ygc29tZSBzb3J0LmAsIGBJdCdzIGtpbmQgb2YgY2FsbWluZyAtIHRvIGZpbmFsbHkgc2VlIHNvbWUgaHVtYW5zLmAsIGBEZXNwaXRlIHRoZSBmYWN0IHRoYXQgaXQncyB0b28gbGF0ZSBmb3IgeW91LmAsIGBObywgc3RvcCBpdC4gSXQncyBub3QgdG9vIGxhdGUuIFlvdSd2ZSBkaWVkLCBidXQgeW91J3JlIG5vdCBkZWFkLiBZb3UncmUgYSBTcGlyaXQuIEFuZCB5b3UgY2FuIHN1cnZpdmUuYCwgYFRoZSBmaXJzdCB3b21hbiBodWRkbGVzIGJ5IHRoZSBjYW1wZmlyZSwgdGhlIG9saXZlIHNraW4gb2YgaGVyIGZhY2UgZ2xvd2luZyBzb2Z0bHkgaW4gdGhlIGZpcmVsaWdodC5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgcGVjdWxpYXJEZXNjcmlwdGlvbilcbi8vIEZJTkQgVEhFIENBTVAgKERPTidUIEtOT1cpXG5sZXQgZG9udEtub3dSZWFsaXplNyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFRoZW4geW91IHJlbWVtYmVyIHRoYXQgU3Bpcml0cyBhcmUgdGhlIG9ubHkgYmVpbmdzIGluIHRoZSB3b3JsZCB3aG8gaGF2ZSBtYWdpY2FsIGFiaWxpdGllcy4gTm8gaHVtYW4gb3IgYW5pbWFsIHBvc3Nlc3NlcyB0aGVtLmAsIGBUbyBwcm9tb3RlIHRoZWlyIGNvbmNlcHRzLCBTcGlyaXRzIGhhdmUgdGhlIGFiaWxpdGllcyB0byBhZmZlY3QgdGhlIG1hdGVyaWFsIHdvcmxkIGluIGdob3N0bHkgd2F5cy4gVGhlIG1vcmUgcG93ZXJmdWwgdGhlIFNwaXJpdCwgdGhlIG1vcmUgc3Vic3RhbnRpYWwgdGhlIGVmZmVjdHMuYCwgYFlvdSBjYW4ndCB0b3VjaCBvciB0YWxrIHRvIHRoZXNlIHBlb3BsZSwgYnV0IHlvdSBoYXZlIHRvIHN0YXJ0IHNvbWV3aGVyZS4gU3RhcnQgcHJvbW90aW5nIEp1c3RpY2UsIG9yIHlvdSdsbCBkaXNhcHBlYXIuYCwgYEZpcnN0IG9mIGFsbCwgd2hvIGFyZSB0aGVzZSBwZW9wbGU/YF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGFwcHJvYWNoQ2FtcEtub3c0KVxubGV0IGRvbnRLbm93UmVhbGl6ZTYgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BXZWxsLCB0aGVyZSBhcmUgcGVvcGxlIHJpZ2h0IGhlcmUuYCwgYFRvIGtlZXAgZ29pbmcsIHlvdSB0ZWxsIHlvdXJzZWxmIC0gXCJJJ20gbm90IGRlYWRcIi5gLCBgXCJJIGRpZWQsIGJ1dCBJJ20gbm90IGRlYWQuXCJgLCBgV2hvZXZlciB5b3Ugd2VyZSBpbiBsaWZlLCB5b3UgZGlkIGVub3VnaCBmb3IgdGhlIFBob2VuaXggb2YgSnVzdGljZSB0byBtYWtlIHlvdSBhIFNwaXJpdCBvZiBKdXN0aWNlLmAsIGBZb3UncmUgbm90IGRlYWQuIFlvdSdyZSBhYmxlIHRvIHRoaW5rIGFuZCB0byBzZWUuYCwgYFlvdSBleGlzdC4gSW4gYSBkaWZmZXJlbnQgZm9ybSBub3cuIEFuZCB5b3UgY2FuIHN0aWxsIHNhdmUgeW91cnNlbGYsIHNhdmUgeW91ciBuZXcgZm9ybS5gLCBgWW91IGp1c3QgaGF2ZSB0byBkbyB5b3VyIGpvYiBhbmQgcHJvbW90ZSBKdXN0aWNlLmAsIGBZb3UncmUgbm90IHN1cmUgaG93IHlvdSdyZSBzdXBwb3NlZCB0byBkbyBpdCwgY29uc2lkZXJpbmcgdGhhdCB0aGVzZSBwZW9wbGUgY2FuJ3QgaGVhciB5b3UuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGRvbnRLbm93UmVhbGl6ZTcpXG5sZXQgZG9udEtub3dSZWFsaXplNSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFJpZ2h0LiBTbyB5b3UgbXVzdCBiZSBhIFNwaXJpdCBvZiBhIFBob2VuaXggb2YgSnVzdGljZS4gT2YgYSBTdW4uIE9mIHRoZSBHb2Qgb2YgSnVzdGljZS5gLCBgSXQncyBwcmV0dHkgbXVjaCBjb21tb24ga25vd2xlZGdlIHRoYXQgU3Bpcml0cyBleGlzdCB0byBmdXJ0aGVyIHByb21vdGUgdGhlIGNvbmNlcHQsIG9yIHBvcnRmb2xpbywgb2YgdGhlaXIgUGhvZW5peC5gLCBgSWYgdGhleSBmYWlsIHRvIHByb21vdGUgdGhlaXIgY29uY2VwdCwgdGhlIFNwaXJpdCBkaXNhcHBlYXJzLiBEaWVzLCBmb3JldmVyYCwgYE9oLCBHb2RzLCBpcyB0aGF0IHdoeSB5b3UndmUgYmVlbiBmZWVsaW5nIHdlYWtlciBhbmQgd2Vha2VyIT9gLCBgWW91IHJpc2UgdG8geW91ciAnZmVldCcsIGluIHBhbmljIGFnYWluLiBXaXRob3V0IHByb21vdGluZyB0aGUgaWRlYSBvZiBKdXN0aWNlIHRvIHNvbWVib2R5LCB5b3UnbGwgZGlzYXBwZWFyLiBBbmQgc29vbiwgeW91ciBib2R5IGZlZWxzIGl0LmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBkb250S25vd1JlYWxpemU2KVxubGV0IGRvbnRLbm93UmVhbGl6ZTQgPSBuZXcgc3RvcnlFbGVtZW50KCdjaG9pY2UnLFxuICAgIFtgXCJNeSBQaG9lbml4XCIuIFRoYXQncyByaWdodC5gLGBZb3UncmUgYSBTcGlyaXQsIGFuIEVudm95IG9mIGEgUGhvZW5peC5gLCBgSXQgbWVhbnMgdGhhdCBpbiBsaWZlLCB5b3UgbXVzdCBoYXZlIHdvcnNoaXBwZWQgb25lIG9mIHRoZSAyMCBTdW5zLCBvciBQaG9lbml4ZXMsIGhvdyB0aGV5J3JlIGFsc28gY2FsbGVkLiBEb25lIGVub3VnaCwgaW4gZmFjdCwgdG8gaGF2ZSBiZWVuIG1hZGUgYSBTcGlyaXQgb2YgdGhhdCBTdW4uYCwgYFdoeSBpcyBpdCBzbyBoYXJkIHRvIHJlY2FsbCB0aGUgZGV0YWlscyBvZiB5b3VyIGxpZmU/YCwgYFlvdSBjb25jZW50cmF0ZSBhZ2Fpbiwgc2l0dGluZyB0aGVyZSBpbiB0aGUgc25vdy5gLCBgU25vd2ZsYWtlcyBmYWxsIHJpZ2h0IHRocm91Z2ggeW91LiBIb3cgZGlkIHlvdSBub3Qgbm90aWNlIHRoYXQ/IFBlcmhhcHMgZnJvbSB0aGUgcGFuaWMsIGFuZCBmcm9tIHlvdXIgcmFiaWQgc2VhcmNoIGZvciBoZWxwLmAsIGAnV2hpY2ggU3VuIGRpZCBJIHdvcnNoaXAgaW4gbGlmZT8nIFlvdSB0aGluay5gXSxcbiAgICBbe2Nob2ljZVRleHQ6IGBUaGUgUGhvZW5peCBvZiBDb21wYXNzaW9uLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnY29tcGFzc2lvblNwaXJpdCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBkb250S25vd1JlYWxpemU1fSxcbiAgICB7Y2hvaWNlVGV4dDogYFRoZSBQaG9lbml4IG9mIEp1c3RpY2UuYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdqdXN0aWNlU3Bpcml0JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGRvbnRLbm93UmVhbGl6ZTV9LFxuICAgIHtjaG9pY2VUZXh0OiBgVGhlIFBob2VuaXggb2YgRnJlZWRvbS5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ2ZyZWVkb21TcGlyaXQnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZG9udEtub3dSZWFsaXplNX0sXG4gICAge2Nob2ljZVRleHQ6IGBUaGUgUGhvZW5peCBvZiBNYXN0ZXJ5LmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnbWFzdGVyeVNwaXJpdCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBkb250S25vd1JlYWxpemU1fSxcbiAgICB7Y2hvaWNlVGV4dDogYFRoZSBQaG9lbml4IG9mIFdpc2RvbS5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ3dpc2RvbVNwaXJpdCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBkb250S25vd1JlYWxpemU1fV0sXG4gICAgdW5kZWZpbmVkKSBcbmxldCBkb250S25vd1JlYWxpemUzID0gbmV3IHN0b3J5RWxlbWVudCgnY2hvaWNlJyxcbiAgICBbYFlvdSBkb24ndCBrbm93IGVub3VnaCBhYm91dCB0aGVtLiBZb3Ugd29uZGVyIHdoYXQga2luZCBvZiBTcGlyaXQgeW91IGFyZS5gLCBgWW91IGNsb3NlIHlvdXIgbm9uLWV4aXN0ZW50IGV5ZXMuIFRoZSBhbnN3ZXIgaXMgd2l0aGluIHlvdSwgeW91IGp1c3QgaGF2ZSB0byBmZWVsIGl0LmBdLFxuICAgIFt7Y2hvaWNlVGV4dDogJ0kgYW0gYSBXcmFpdGgsIGEgc3Bpcml0IHRoYXQgYnJpbmdzIHB1bmlzaG1lbnQgdG8gdGhvc2Ugd2hvIHdyb25nIG15IFBob2VuaXguJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdjbGFzc1dyYWl0aCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBkb250S25vd1JlYWxpemU0fSxcbiAgICB7Y2hvaWNlVGV4dDogJ0kgYW0gYSBQb2x0ZXJnZWlzdC4gV2F0Y2hlciwgc2Vlciwgc3VidGxlIG1hc3Rlcm1pbmQgaW4gdGhlIHNlcnZpY2Ugb2YgbXkgUGhvZW5peC4nLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ2NsYXNzUG9sdGVyZ2Vpc3QnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZG9udEtub3dSZWFsaXplNH0sXG4gICAge2Nob2ljZVRleHQ6ICdJIGFtIGEgR3VhcmRpYW4gU3Bpcml0LCBJIGV4aXN0IHRvIGd1aWRlIGFuZCBwcm90ZWN0IHRob3NlIHdobyBmb2xsb3cgbXkgUGhvZW5peC4nLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ2NsYXNzR3VhcmRpYW5TcGlyaXQnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZG9udEtub3dSZWFsaXplNH1dLFxuICAgIHVuZGVmaW5lZClcbmxldCBkb250S25vd1JlYWxpemUyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IG11c3QgYmUgYSBTcGlyaXQuYCwgYFBlb3BsZSB3aG8gZGlkIGEgbG90IGluIHRoZSBzZXJ2aWNlIG9mIGEgUGhvZW5peCByZWluY2FybmF0ZSBpbnRvIFNwaXJpdHMgd2hlbiB0aGV5IGRpZS5gLCBgVGhlcmUgYXJlIGRpZmZlcmVudCBraW5kcyBvZiBTcGlyaXRzLCB5b3UncmUgcHJldHR5IHN1cmUuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGRvbnRLbm93UmVhbGl6ZTMpXG5sZXQgZG9udEtub3dSZWFsaXplMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBzaXQgdGhlcmUgZm9yIGEgbW9tZW50LiBZb3Ugc3RhcmUgYXQgdGhlIHRocmVlLCB0aGVuIHlvdSBzdGFyZSBhdCB0aGVpciBmaXJlLCBtaW5kIGNvbXBsZXRlbHkgYmxhbmsuYCwgYFlvdSdyZSBkZWFkLmAsIGBZb3UncmUgY29uc2Npb3VzLCBob3dldmVyLiBZb3UgaGF2ZSB0byBiZSBhIFNwaXJpdCwgcmlnaHQ/YCwgYFlvdSBjb25jZW50cmF0ZSAtIHdoYXQgZG8geW91IGtub3cgb2YgU3Bpcml0cz9gLCBgV2hlbiBwZW9wbGUgZGllLCB0aGV5IHJlaW5jYXJuYXRlIGludG8gYW5pbWFscy4gV2hlbiBhbmltYWxzIGRpZSwgdGhleSByZWluY2FybmF0ZSBpbnRvIHBlb3BsZS5gLCBgSG93ZXZlciwgaWYgdGhlIGR5aW5nIHBlcnNvbiBoYWQgZG9uZSBlbm91Z2ggaW4gdGhlIHdvcnNoaXAgb2Ygb25lIG9mIHRoZSAyMCBTdW5zLCB0aGV5IHJlaW5jYXJuYXRlIGludG8gYSBTcGlyaXQuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGRvbnRLbm93UmVhbGl6ZTIpXG5sZXQgZG9udEtub3dXYXRjaDUgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BBIGxpdHRsZSB3aGlsZSBsYXRlciwgeW91IGFyZSBzaXR0aW5nIG5vdCBmYXIgZnJvbSB0aGUgdGhyZWUgcGVvcGxlJ3MgY2FtcCwganVzdCBiZWhpbmQgdGhlaXIgYmFja3MuYCwgYENsb3NlIGVub3VnaCB0byBzZWUgdGhlIGZpcmUsIHlldCB5b3Ugc3RpbGwgZG9uJ3QgZmVlbCBpdCdzIHdhcm10aC5gLCBgVGhlIGVtYnJhY2Ugb2YgZGVhdGggaXMgdG9vIGNvbGQuYCwgYFlvdSB0cmllZCBjYWxsaW5nIG91dCB0byB0aGVtLCBvciB0b3VjaGluZyB0aGVtLiBUaGV5IGNhbid0IHNlZSBvciBoZWFyIHlvdS5gLCBgQnkgbm93LCB5b3VyIHJlYWxpdHkgaXMgaXJyZWZ1dGFibGUuYCwgYFlvdSBkaWRuJ3Qgd2FrZSB1cCBpbiB0aGUgRm9yZXN0IG9mIE1pcnJvcnMuYCwgYFlvdSBkaWVkIGhlcmUuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGRvbnRLbm93UmVhbGl6ZTEpXG5sZXQgZG9udEtub3dXYXRjaDQgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3VyIG1pbmQgcmFjZXMsIHBhbmlja2luZy4gVGhlcmUgYXJlIHBlb3BsZSByaWdodCBoZXJlISBQZW9wbGUgd2hvIG1pZ2h0IGhlbHAhIFlvdSBtYWRlIGl0LCB5b3Ugc2F2ZWQgeW91cnNlbGYhIFNvIHdoYXQgdGhlIGhlbGwgaXMgd3Jvbmc/YCwgYFlvdXIgbWluZCBzbG93bHkgYWNjZXB0cyB3aGF0IGl0IGhhcyBiZWVuIHRyeWluZyB0byBpZ25vcmUgZm9yIGFsbCB0aGlzIHRpbWUuYCwgYFlvdSBwYXNzIHRocm91Z2ggc29saWQgb2JqZWN0cy5gLCBgWW91IGRvbid0IGZlZWwgdGhlIGNvbGQuYCwgYFlvdSBkb24ndCByZW1lbWJlciBhbnl0aGluZyBhYm91dCB5b3VyIGxpZmUuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGRvbnRLbm93V2F0Y2g1KVxubGV0IGRvbnRLbm93V2F0Y2gzID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGxlYW4gb24gdGhlIHRyZWUgYW5kIHNxdWludCwgdHJ5aW5nIHRvIG1ha2UgYW55dGhpbmcgb3V0LCB3aGVuIHNvbWV0aGluZyB1bmV4cGVjdGVkIGhhcHBlbnMuYCwgYEFzIHlvdSBnbyB0byBsZWFuIG9uIHRoZSB0cmVlLCB5b3VyIGhhbmQgcGFzc2VzIHJpZ2h0IHRocm91Z2ggaXQsIGRpc2FwcGVhcmluZyBpbnRvIHRoZSBiYXJrLmAsIGBZb3UgaW5zdGluY3RpdmVseSBsZWFwIGJhY2suIFlvdSBhcHByb2FjaCB0aGUgdHJlZSBhZ2FpbiwgdHJ5aW5nIHRvIHRvdWNoIGl0IG9uY2UgbW9yZS5gLCBgVGhlIHJlc3VsdCBpcyB0aGUgc2FtZS4gWW91ciBoYW5kIHBhc3NlcyByaWdodCB0aHJvdWdoIHRoZSB0cmVlLmAsIGBXaGF0IHRoZSBoZWxsIGlzIGdvaW5nIG9uP2BdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBkb250S25vd1dhdGNoNClcbmxldCBkb250S25vd1dhdGNoMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBjYW4gc2VlIG11c2tldHMgYW5kIHNjaW1pdGFycyBseWluZyBuZXh0IHRvIHRoZSB0aHJlZSBodWRkbGVkIGZpZ3VyZXMuYCwgYFRoZXkgYXJlIGFybWVkLiBNZXJjZW5hcmllcz8gU29sZGllcnM/IFJvYmJlcnMgaW5kZWVkP2AsIGBZb3VyIHZpc2lvbiBpcyByZWFsbHkgYmx1cnJ5IG5vdy4gWW91J3JlIG5vdCBzdXJlIHdoeS5gLCBgVGhlIGJsaXp6YXJkIGRvZXNuJ3QgaGVscCBlaXRoZXIuIEFuZCBhbHRob3VnaCB5b3UncmUgaGlkaW5nIGJlaGluZCBhIHRyZWUgb25seSBhIGZldyBkb3plbiBtZXRlcnMgYXdheSBmcm9tIHRoZSB0aHJlZSBmaWd1cmVzLCB5b3Ugc3RpbGwgY2FuJ3QgbWFrZSBvdXQgbXVjaCBtb3JlIHRoYW4gdGhhdC5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZG9udEtub3dXYXRjaDMpXG5sZXQgZG9udEtub3dXYXRjaDEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3Ugc2xvdyBkb3duLiBUaGV5IGNvdWxkIGJlIHJvYmJlcnMgb24gdGhlIHJ1biBmcm9tIG9uZSBvZiB0aGUgRmF0ZWQgUmVhbG0ncyBjaXRpZXMsIG9yIGN1bHRpc3RzIG9mIG9uZSBvZiBldmlsIFN1bnMuYCwgYFlvdSBzdG9wIGFwcHJvYWNoaW5nIHRoZW0gYW5kIGRhc2ggYmVoaW5kIGEgbmVhcmJ5IHRyZWUuYCwgYFlvdSBmZWVsIHdlYWtlciB3aXRoIGV2ZXJ5IHBhc3NpbmcgbWludXRlLiBOZXZlcnRoZWxlc3MsIHlvdSBkZWNpZGUgdG8gd2F0Y2ggdGhlbSBmb3IgYSBsaXR0bGUgd2hpbGUuYCwgYFRvIG1ha2Ugc3VyZSB0aGV5IHdvbid0IGhhcm0geW91IGluIHlvdXIgZGVzcGVyYXRlIHN0YXRlLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBkb250S25vd1dhdGNoMilcbmxldCBkb250S25vd1J1bjYgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BBIGxpdHRsZSB3aGlsZSBsYXRlciwgeW91IGFyZSBzaXR0aW5nIG5vdCBmYXIgZnJvbSB0aGUgdGhyZWUgcGVvcGxlJ3MgY2FtcCwganVzdCBiZWhpbmQgdGhlaXIgYmFja3MuYCwgYENsb3NlIGVub3VnaCB0byBzZWUgdGhlIGZpcmUsIHlldCB5b3Ugc3RpbGwgZG9uJ3QgZmVlbCBpdCdzIHdhcm10aC5gLCBgVGhlIGVtYnJhY2Ugb2YgZGVhdGggaXMgdG9vIGNvbGQuYCwgYFlvdSB0cmllZCB0b3VjaGluZyB0aGUgdHJlZXMsIG9yIGV2ZW4gdGhlIGZpcmUuIE5vdGhpbmcuIFlvdSBwYXNzIHJpZ2h0IHRocm91Z2guYCwgYEJ5IG5vdywgeW91ciByZWFsaXR5IGlzIGlycmVmdXRhYmxlLmAsIGBZb3UgZGlkbid0IHdha2UgdXAgaW4gdGhlIEZvcmVzdCBvZiBNaXJyb3JzLmAsIGBZb3UgZGllZCBoZXJlLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBkb250S25vd1JlYWxpemUxKVxubGV0IGRvbnRLbm93UnVuNSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBzbG93bHkgd2FsayB1cCB0byBvbmUgb2YgdGhlIHBlb3BsZSwgYW5kIHRyeSB0byB0YXAgb24gdGhlaXIgc2hvdWxkZXIuYCwgYFlvdSByZWFjaCBvdXQgdG93YXJkcyB0aGVpciBjb2F0IHdpdGggeW91ciBoYW5kLmAsIGBXaGVuIHlvdSB0cnkgdG8gdGFwIHRoZWlyIHNob3VsZGVyLCB5b3VyIGhhbmQgcGFzc2VzIHJpZ2h0IHRocm91Z2ggdGhlaXIgYm9keS5gLCBgWW91IHJldHJhY3QgeW91ciBoYW5kIGFuZCBzdGVwIGJhY2ssIGhvcnJpZmllZC5gLCBgWW91IHRyeSBhZ2FpbiwgYW5kIHRoZSByZXN1bHQgaXMgdGhlIHNhbWUuIFlvdXIgaGFuZCBwYXNzZXMgcmlnaHQgdGhyb3VnaCB0aGVtLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBkb250S25vd1J1bjYpXG5sZXQgZG9udEtub3dSdW40ID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91ciBtaW5kIHJhY2VzLCBwYW5pY2tpbmcuIFRoZXJlIGFyZSBwZW9wbGUgcmlnaHQgaGVyZSEgUGVvcGxlIHdobyBjYW4gaGVscCEgWW91IG1hZGUgaXQsIHlvdSBzYXZlZCB5b3Vyc2VsZiEgU28gd2hhdCB0aGUgaGVsbCBpcyB3cm9uZz9gLCBgWW91ciBtaW5kIHNsb3dseSBhY2NlcHRzIHdoYXQgaXQgaGFzIGJlZW4gdHJ5aW5nIHRvIGlnbm9yZSBmb3IgYWxsIHRoaXMgdGltZS5gLCBgTm8gdmlicmF0aW9uIHdoZW4geW91IHRhbGsuYCwgYFlvdSBkb24ndCBmZWVsIHRoZSBjb2xkLmAsIGBZb3UgZG9uJ3QgcmVtZW1iZXIgYW55dGhpbmcgYWJvdXQgeW91ciBsaWZlLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBkb250S25vd1J1bjUpXG5sZXQgZG9udEtub3dSdW4zID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGNhbid0IGV2ZW4gaGVhciB5b3Vyc2VsZiB3aGVuIHlvdSB5ZWxsIGZvciB0aGVtLiBTbyBwZXJoYXBzIHRoZSBibGl6emFyZCBpcyBkcm93bmluZyBvdXQgeW91ciB2b2ljZT9gLCBgT3IgbWF5YmUgdGhleSdyZSBhbHNvIGluanVyZWQgYW5kIGluIG5lZWQgb2YgaGVscD9gLCBgXCJIZWxsbz9cIiB5b3Ugc2NyZWFtIGFnYWluLiBUaGlzIHRpbWUsIHlvdSBub3RpY2UgaXQuYCwgYFlvdSBkb24ndCBldmVuIGhlYXIgYW4gaW50ZXJuYWwgdmlicmF0aW9uIHdoZW4geW91IHNjcmVhbS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZG9udEtub3dSdW40KVxubGV0IGRvbnRLbm93UnVuMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBydW4gcmlnaHQgdXAgdG8gdGhlIHRocmVlIGZpZ3VyZXMgaHVkZGxlZCBhcm91bmQgdGhlIGNhbXBmaXJlLmAsIGBZb3Ugc3RvcCB3aXRoaW4gMjAgbWV0ZXJzIG9mIHRoZW0uYCwgYFwiSSBuZWVkIGhlbHAhXCIsIHlvdSB5ZWxsIG91dC5gLCBgVGhleSBkb24ndCByZWFjdC5gLCBgWW91IHdhbGsgY2xvc2VyIHRvIHRoZW0uIFwiR29vZCBwZW9wbGUhIFBsZWFzZSBoZWxwIG1lISBJJ20gbG9zdCBhbmQgSSdtIGZyZWV6aW5nIVwiIHlvdSBjb250aW51ZS5gLCBgTm8gcmVhY3Rpb24uYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGRvbnRLbm93UnVuMylcbmxldCBkb250S25vd1J1bjEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgbmVlZCB0aGUgaGVscC4gWW91J3JlIGRlc3BlcmF0ZSBhbmQgeW91J3JlIHdpbGxpbmcgdG8gdGFrZSBhIGNoYW5jZSBvbiB0aGVtLmAsIGBBbHNvLCB3b3VsZCBpdCBtYWtlIHNlbnNlIGZvciBiYW5kaXRzIHRvIGJlIGNhbXBpbmcgaW4gdGhlIG1pZGRsZSBvZiB0aGUgaW1wYXNzYWJsZSBGb3Jlc3Qgb2YgTWlycm9ycz9gLCBgWW91J2QgZXhwZWN0IGhpZ2h3YXkgcm9iYmVycyB0byBiZSBjYW1wZWQgYXJvdW5kIHRoZSBtYWluIHJvYWRzIG9mIHRoZSBGYXRlZCBSZWFsbS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZG9udEtub3dSdW4yKVxubGV0IGFwcHJvYWNoQ2FtcERvbnRLbm93MyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBkb24ndCBldmVuIGZlZWwgZmF0aWd1ZSBhcyB5b3UgcnVuLiBQcm9iYWJseSB0aGUgYWRyZW5hbGluZS4gU3Vydml2YWwgaW5zdGluY3QuYCwgYEFzIHlvdSBnZXQgY2xvc2VyIHRvIHRoZWlyIGNhbXAsIHlvdSBzZWUgdGhyZWUgZmlndXJlcywgaHVkZGxlZCBhcm91bmQgdGhlIGZpcmUuYCwgYFlvdSBzdG9wIHdoZW4geW91IGdldCB3aXRoaW4gZWFyc2hvdCBvZiB0aGVtLmAsIGBIb3cgZG8geW91IHdhbnQgdG8gYXBwcm9hY2ggdGhpcz9gXSxcbiAgICB7Y2hvaWNlVGV4dDogYFdhdGNoIHRoZW0gZnJvbSBhIGRpc3RhbmNlLiBZb3UgbWlnaHQgYmUgZnJlZXppbmcgdG8gZGVhdGggYW5kIGRlc3BlcmF0ZSBmb3IgaGVscCwgYnV0IHRoZXkgbWlnaHQgYmUgYmFuZGl0cy5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogbnVsbCxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGRvbnRLbm93V2F0Y2gxfSxcbiAgICB7Y2hvaWNlVGV4dDogYFJ1biB0b3dhcmRzIHRoZW0sIHNjcmVhbWluZyBmb3IgaGVscC4gWW91J3JlIGR5aW5nIGFuZCB5b3UgbmVlZCB3YXJtdGgsIGZvb2QsIGFueXRoaW5nIHRoZXkgY2FuIHNwYXJlLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiBudWxsLFxuICAgIGNob2ljZU5leHRTdG9yeTogZG9udEtub3dSdW4xfSxcbiAgICB1bmRlZmluZWQpXG5sZXQgYXBwcm9hY2hDYW1wRG9udEtub3cyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgTm8gbG9uZ2VyIGJlaW5nIG9uIHRvcCBvZiBhIGhpbGwsIGFuZCB3aXRoIHRoZSBibGl6emFyZCByb2FyaW5nLCB5b3UgbG9zZSBzaWdodCBvZiB0aGUgc21va2UuYCwgYFlvdSBkb24ndCBzdG9wIHJ1bm5pbmcsIHlvdSBjYW4gb25seSBob3BlIHRoYXQgeW91J3ZlIGtlcHQgdGhlIHJpZ2h0IGRpcmVjdGlvbi5gLCBgRXZlbnR1YWxseSwgYmV0d2VlbiB0aGUgdHJlZXMsIHlvdSBzZWUgYSBmbGlja2VyaW5nIHJlZCBsaWdodC5gLCBgU29tZW9uZSdzIGNhbXBmaXJlIGlzIGEgZmV3IGh1bmRyZWQgbWV0ZXJzIGF3YXkgZnJvbSB5b3UuYCwgYFlvdSdyZSBzYXZlZCFgXSxcbiAgICB1bmRlZmluZWQsXG4gICAgYXBwcm9hY2hDYW1wRG9udEtub3czKVxubGV0IGFwcHJvYWNoQ2FtcERvbnRLbm93MSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBydW4gZG93biB0aGUgaGlsbC5gLCBgWW91IHJ1biB0aHJvdWdoIHRoZSBGb3Jlc3Qgb2YgTWlycm9ycyBpbiB0aGUgZGlyZWN0aW9uIG9mIHdoZXJlIHlvdSd2ZSBzZWVuIHRoZSBzbW9rZS5gLCBgWW91IHJ1biBmb3Igd2hhdCBmZWVscyBsaWtlIGFuIGhvdXIuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGFwcHJvYWNoQ2FtcERvbnRLbm93Milcbi8vIEZJTkQgVEhFIENBTVAgKEtOT1cgVEhBVCBZT1UnUkUgQSBTUElSSVQpXG5sZXQgYXBwcm9hY2hDYW1wS25vdzMgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BLbm93aW5nIHRoYXQgdGhleSBjYW5ub3Qgc2VlIHlvdSwgeW91IGZsb2F0IGNsb3NlciB0byB0aGVtIGFuZCB0YWtlIGEgY2xvc2VyIGxvb2suYCwgYFRoZSBmaXJzdCBwZXJzb24gaXMgYSB3b21hbiBkcmVzc2VkIGluIGEgbG9uZywgdGhpY2ssIGRhcmsgcmVkIGNvYXQuIFlvdSBubyBsb25nZXIgY2FyZSBhYm91dCB0aGUgY29sZCwgYnV0IGl0J3MgYW4gdW5kZXJzdGFuZGFibGUgY2hvaWNlIGZvciBoZXIuIENvdWxkIHRoZSB3ZWF0aGVyIGhhdmUga2lsbGVkIHlvdT8gWW91IHNoYWtlIGF3YXkgdGhlc2UgdGhvdWdodHMuIEl0J3MgcG9pbnRsZXNzIHRvIHNwZWN1bGF0ZSBmb3Igbm93LmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBhcHByb2FjaENhbXBLbm93NClcbmxldCBhcHByb2FjaENhbXBLbm93MiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBmbG9hdCBjbG9zZXIuIEl0J3MgY29tbW9uIGtub3dsZWRnZSBpbiB0aGUgRmF0ZWQgUmVhbG0gdGhhdCBodW1hbnMgY2Fubm90IHNlZSBTcGlyaXRzIHBoeXNpY2FsbHkuYCwgYFRvIHByb21vdGUgdGhlaXIgY29uY2VwdHMsIFNwaXJpdHMgaGF2ZSB0aGUgYWJpbGl0aWVzIHRvIGFmZmVjdCB0aGUgbWF0ZXJpYWwgd29ybGQgaW4gZ2hvc3RseSB3YXlzLiBUaGUgbW9yZSBwb3dlcmZ1bCB0aGUgU3Bpcml0LCB0aGUgbW9yZSBzdWJzdGFudGlhbCB0aGUgZWZmZWN0cy5gLCBgRm9yIG5vdywgeW91IGZsb2F0IGNsb3NlciB0byB0aGUgY2FtcGZpcmUsIHNlZWluZyB0aHJlZSBwZW9wbGUgaHVkZGxlZCBhcm91bmQgdGhlIGJyaWdodCBmbGFtZS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgYXBwcm9hY2hDYW1wS25vdzMpXG5sZXQgYXBwcm9hY2hDYW1wS25vdzEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgZmxvYXQgZm9yIHdoYXQgZmVlbHMgbGlrZSBob3Vycy5gLCBgWWVzLiBGbG9hdC4gTm93IHRoYXQgeW91IHVuZGVyc3RhbmQgeW91ciBzaXR1YXRpb24sIHlvdSByZWFsaXplIHRoYXQgeW91IGRvbid0IGhhdmUgdG8gbW92ZSB5b3VyIGZlZXQgdG8gbW92ZS4gUGVya3Mgb2YgYmVpbmcgYSBTcGlyaXQuYCwgYE9jY2FzaW9uYWxseSB5b3Ugb3BlbiB5b3VyIGV5ZXMsIG9jY2FzaW9uYWxseSB5b3UgY2xvc2UgdGhlbS5gLCBgSXQgZG9lc24ndCBsb29rIGxpa2UgeW91IGNhbiBzZWUgdGhyb3VnaCBzb2xpZCBtYXR0ZXIsIHNvIGFsbCB5b3Ugc2VlIGlzIHRoZSBzbm93eSBGb3Jlc3Qgb2YgTWlycm9ycy5gLCBgRXZlbnR1YWxseSwgeW91IHNlZSBhIGxpZ2h0LiBUaGlzIG9uZSdzIGRlZmluaXRlbHkgYSBjYW1wZmlyZS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgYXBwcm9hY2hDYW1wS25vdzIpXG4vLyBUSEUgRk9SRVNUIE9GIE1JUlJPUlNcbmxldCBlbmRGb3Jlc3RDb25jZW50cmF0ZTRiID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgVG8ga2VlcCBnb2luZywgeW91IHRlbGwgeW91cnNlbGYgLSBcIkknbSBub3QgZGVhZFwiLmAsIGBcIkkgZGllZCwgYnV0IEknbSBub3QgZGVhZC5cImAsIGBXaG9ldmVyIHlvdSB3ZXJlIGluIGxpZmUsIHlvdSBkaWQgZW5vdWdoIGZvciB0aGUgUGhvZW5peCBvZiBKdXN0aWNlIHRvIG1ha2UgeW91IGEgU3Bpcml0IG9mIEp1c3RpY2UuYCwgYFlvdSdyZSBub3QgZGVhZC4gWW91J3JlIGFibGUgdG8gdGhpbmsgYW5kIHRvIHNlZS5gLCBgWW91IGV4aXN0LiBJbiBhIGRpZmZlcmVudCBmb3JtIG5vdy4gQW5kIHlvdSBjYW4gc3RpbGwgc2F2ZSB5b3Vyc2VsZiwgc2F2ZSB5b3VyIG5ldyBmb3JtLmAsIGBZb3UganVzdCBoYXZlIHRvIGRvIHlvdXIgam9iIGFuZCBwcm9tb3RlIEp1c3RpY2UuYCwgYFlvdSByZW1lbWJlciBzdG9yaWVzIHRoYXQgU3Bpcml0cyBjYW4gc2Vuc2UgbGlmZS4gWW91IGNsb3NlIHlvdXIgZXllcyBhbmQgdHJ5IHRvIGxldCB5b3VyIGZlZWxpbmdzIGd1aWRlIHlvdSB0byB0aGUgbmVhcmVzdCBwZW9wbGUuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGFwcHJvYWNoQ2FtcEtub3cxKVxubGV0IGVuZEZvcmVzdENvbmNlbnRyYXRlNCA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFJpZ2h0LiBTbyB5b3UgbXVzdCBiZSBhIFNwaXJpdCBvZiBhIFBob2VuaXggb2YgSnVzdGljZS4gT2YgYSBTdW4uIE9mIHRoZSBHb2Qgb2YgSnVzdGljZS5gLCBgSXQncyBwcmV0dHkgbXVjaCBjb21tb24ga25vd2xlZGdlIHRoYXQgU3Bpcml0cyBleGlzdCB0byBmdXJ0aGVyIHByb21vdGUgdGhlIGNvbmNlcHQsIG9yIHBvcnRmb2xpbywgb2YgdGhlaXIgUGhvZW5peC5gLCBgSWYgdGhleSBmYWlsIHRvIHByb21vdGUgdGhlaXIgY29uY2VwdCwgdGhlIFNwaXJpdCBkaXNhcHBlYXJzLiBEaWVzLCBmb3JldmVyYCwgYE9oLCBHb2RzLCBpcyB0aGF0IHdoeSB5b3UndmUgYmVlbiBmZWVsaW5nIHdlYWtlciBhbmQgd2Vha2VyIT9gLCBgWW91IHJpc2UgdG8geW91ciAnZmVldCcsIGluIHBhbmljIGFnYWluLiBZb3UgaGF2ZSB0byBmaW5kIHNvbWVvbmUgdG8gcHJvbW90ZSB5b3VyIGNvbmNlcHQsIHRoZSBpZGVhIG9mIEp1c3RpY2UsIHRvLiBXaXRob3V0IHBlb3BsZSB0byBwcm9tb3RlIEp1c3RpY2UgdG8sIHlvdSdsbCBkaXNhcHBlYXIuIEFuZCBzb29uLCB5b3VyIGJvZHkgZmVlbHMgaXQuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGVuZEZvcmVzdENvbmNlbnRyYXRlNGIpXG5sZXQgZW5kRm9yZXN0Q29uY2VudHJhdGUzYyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Nob2ljZScsXG4gICAgW2BcIk15IFBob2VuaXhcIi4gVGhhdCdzIHJpZ2h0LmAsYFlvdSdyZSBhIFNwaXJpdCwgYW4gRW52b3kgb2YgYSBQaG9lbml4LmAsIGBJdCBtZWFucyB0aGF0IGluIGxpZmUsIHlvdSBtdXN0IGhhdmUgd29yc2hpcHBlZCBvbmUgb2YgdGhlIDIwIFN1bnMsIG9yIFBob2VuaXhlcywgaG93IHRoZXkncmUgYWxzbyBjYWxsZWQuIERvbmUgZW5vdWdoLCBpbiBmYWN0LCB0byBoYXZlIGJlZW4gbWFkZSBhIFNwaXJpdCBvZiB0aGF0IFN1bi5gLCBgV2h5IGlzIGl0IHNvIGhhcmQgdG8gcmVjYWxsIHRoZSBkZXRhaWxzIG9mIHlvdXIgbGlmZT9gLCBgWW91IGNvbmNlbnRyYXRlIGFnYWluLCBzaXR0aW5nIHRoZXJlIGluIHRoZSBzbm93LmAsIGBTbm93Zmxha2VzIGZhbGwgcmlnaHQgdGhyb3VnaCB5b3UuIEhvdyBkaWQgeW91IG5vdCBub3RpY2UgdGhhdD8gUGVyaGFwcyBmcm9tIHRoZSBwYW5pYywgYW5kIGZyb20geW91ciByYWJpZCBzZWFyY2ggZm9yIGhlbHAuYCwgYCdXaGljaCBTdW4gZGlkIEkgd29yc2hpcCBpbiBsaWZlPyBZb3UgdGhpbmsuJ2BdLFxuICAgIFt7Y2hvaWNlVGV4dDogYFRoZSBQaG9lbml4IG9mIENvbXBhc3Npb24uYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdjb21wYXNzaW9uU3Bpcml0JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGVuZEZvcmVzdENvbmNlbnRyYXRlNH0sXG4gICAge2Nob2ljZVRleHQ6IGBUaGUgUGhvZW5peCBvZiBKdXN0aWNlLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnanVzdGljZVNwaXJpdCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBlbmRGb3Jlc3RDb25jZW50cmF0ZTR9LFxuICAgIHtjaG9pY2VUZXh0OiBgVGhlIFBob2VuaXggb2YgRnJlZWRvbS5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ2ZyZWVkb21TcGlyaXQnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZW5kRm9yZXN0Q29uY2VudHJhdGU0fSxcbiAgICB7Y2hvaWNlVGV4dDogYFRoZSBQaG9lbml4IG9mIE1hc3RlcnkuYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdtYXN0ZXJ5U3Bpcml0JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGVuZEZvcmVzdENvbmNlbnRyYXRlNH0sXG4gICAge2Nob2ljZVRleHQ6IGBUaGUgUGhvZW5peCBvZiBXaXNkb20uYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICd3aXNkb21TcGlyaXQnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZW5kRm9yZXN0Q29uY2VudHJhdGU0fV0sXG4gICAgdW5kZWZpbmVkKSBcbmxldCBlbmRGb3Jlc3RDb25jZW50cmF0ZTNiID0gbmV3IHN0b3J5RWxlbWVudCgnY2hvaWNlJyxcbiAgICBbYFlvdSBkb24ndCBrbm93IGVub3VnaCBhYm91dCB0aGVtLiBZb3Ugd29uZGVyIHdoYXQga2luZCBvZiBTcGlyaXQgeW91IGFyZS5gLCBgWW91IGNsb3NlIHlvdXIgbm9uLWV4aXN0ZW50IGV5ZXMuIFRoZSBhbnN3ZXIgaXMgd2l0aGluIHlvdSwgeW91IGp1c3QgaGF2ZSB0byBmZWVsIGl0LmBdLFxuICAgIFt7Y2hvaWNlVGV4dDogJ0kgYW0gYSBXcmFpdGgsIGEgc3Bpcml0IHRoYXQgYnJpbmdzIHB1bmlzaG1lbnQgdG8gdGhvc2Ugd2hvIHdyb25nIG15IFBob2VuaXguJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdjbGFzc1dyYWl0aCcsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBlbmRGb3Jlc3RDb25jZW50cmF0ZTNjfSxcbiAgICB7Y2hvaWNlVGV4dDogJ0kgYW0gYSBQb2x0ZXJnZWlzdC4gV2F0Y2hlciwgc2Vlciwgc3VidGxlIG1hc3Rlcm1pbmQgaW4gdGhlIHNlcnZpY2Ugb2YgbXkgUGhvZW5peC4nLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ2NsYXNzUG9sdGVyZ2Vpc3QnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZW5kRm9yZXN0Q29uY2VudHJhdGUzY30sXG4gICAge2Nob2ljZVRleHQ6ICdJIGFtIGEgR3VhcmRpYW4gU3Bpcml0LCBJIGV4aXN0IHRvIGd1aWRlIGFuZCBwcm90ZWN0IHRob3NlIHdobyBmb2xsb3cgbXkgUGhvZW5peC4nLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ2NsYXNzR3VhcmRpYW5TcGlyaXQnLFxuICAgIGNob2ljZU5leHRTdG9yeTogZW5kRm9yZXN0Q29uY2VudHJhdGUzY31dLFxuICAgIHVuZGVmaW5lZClcbmxldCBlbmRGb3Jlc3RDb25jZW50cmF0ZTNhID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IG11c3QgYmUgYSBTcGlyaXQuYCwgYFBlb3BsZSB3aG8gZGlkIGEgbG90IGluIHRoZSBzZXJ2aWNlIG9mIGEgUGhvZW5peCByZWluY2FybmF0ZSBpbnRvIFNwaXJpdHMgd2hlbiB0aGV5IGRpZS5gLCBgVGhlcmUgYXJlIGRpZmZlcmVudCBraW5kcyBvZiBTcGlyaXRzLCB5b3UncmUgcHJldHR5IHN1cmUuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGVuZEZvcmVzdENvbmNlbnRyYXRlM2IpXG5sZXQgZW5kRm9yZXN0Q29uY2VudHJhdGUyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IHNpdCB0aGVyZSBmb3IgYSBtb21lbnQsIG1pbmQgY29tcGxldGVseSBibGFuay5gLCBgWW91J3JlIGRlYWQuYCwgYFlvdSdyZSBjb25zY2lvdXMsIGhvd2V2ZXIuIFlvdSBoYXZlIHRvIGJlIGEgU3Bpcml0LCByaWdodD9gLCBgWW91IGNvbmNlbnRyYXRlIC0gd2hhdCBkbyB5b3Uga25vdyBvZiBTcGlyaXRzP2AsIGBXaGVuIHBlb3BsZSBkaWUsIHRoZXkgcmVpbmNhcm5hdGUgaW50byBhbmltYWxzLiBXaGVuIGFuaW1hbHMgZGllLCB0aGV5IHJlaW5jYXJuYXRlIGludG8gcGVvcGxlLmAsIGBIb3dldmVyLCBpZiB0aGUgZHlpbmcgcGVyc29uIGhhZCBkb25lIGVub3VnaCBpbiB0aGUgd29yc2hpcCBvZiBvbmUgb2YgdGhlIDIwIFN1bnMsIHRoZXkgcmVpbmNhcm5hdGUgaW50byBhIFNwaXJpdC5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZW5kRm9yZXN0Q29uY2VudHJhdGUzYSlcbmxldCBlbmRGb3Jlc3RDb25jZW50cmF0ZTEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgZmFsbCB0byB0aGUgc25vd3kgZ3JvdW5kIG9mIHRoZSBmb3Jlc3QsIHNpdHRpbmcgd2l0aCB5b3VyIGxlZ3Mgb3V0c3RyZXRjaGVkIGluIGZyb250IG9mIHlvdS5gLCBgWW91ciBtaW5kIHJhY2VzLiBZb3VyIGJvZHkgc3RpbGwgY2FuJ3QgZmVlbCB0aGUgY29sZC5gLCBgWW91J3JlIHJlYWxseSBkZWFkLmBdLFxuICAgICdGb01zcGlyaXRLbm93JyxcbiAgICBlbmRGb3Jlc3RDb25jZW50cmF0ZTIpXG5sZXQgZW5kRm9yZXN0Q29uY2VudHJhdGUxcHJlQiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBiZW5kIG92ZXIgYW5kIHNsb3dseSByZWFjaCB3aXRoIHlvdXIgaGFuZCB0b3dhcmRzIHRoZSBzbm93LmAsIGBZb3VyIGhhbmQgcGFzc2VzIHJpZ2h0IHRocm91Z2ggdGhlIHNub3cuYCwgYFlvdSBndWxwLCBwYW5pYyBhbmQgcmVhbGl6YXRpb24gc3RhcnRpbmcgdG8gc2V0dGxlIGluLmAsIGBZb3VyIGhhbmQgcGFzc2VzIHJpZ2h0IHRocm91Z2ggdGhlIHNub3cuIFlvdSBjYW5ub3QgbW92ZSBpdC5gLCBgWW91IGRpZG4ndCB3YWtlIHVwIGhlcmUgaW4gdGhlIEZvcmVzdCBvZiBNaXJyb3JzLmAsIGBZb3UgZGllZCBoZXJlLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBlbmRGb3Jlc3RDb25jZW50cmF0ZTEpXG5sZXQgZW5kRm9yZXN0Q29uY2VudHJhdGUxcHJlID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IHRyeSB0byByZW1lbWJlciB5b3VyIGxpZmUsIGJ1dCBub3RoaW5nIGNvbWVzIHRvIHlvdS5gLCBgWW91IGZvY3VzIG9uIHlvdXIgY29uZGl0aW9uLiBZb3UgY2FuJ3QgZmVlbCB0aGUgY29sZC5gLCBgWW91IGxvb2sgYXJvdW5kIHRocm91Z2ggdGhlIGJsaXp6YXJkLiBZb3Ugbm90aWNlIHNvbWV0aGluZyB1bnVzdWFsLmAsIGBZb3UgZG9uJ3Qgc2VlbSB0byBsZWF2ZSBmb290cHJpbnRzIGluIHRoZSBzbm93LmAsIGBUaGUgYmxpenphcmQgY2FuJ3QgZmlsbCBpbiB0aGUgaW5kZW50YXRpb25zIGluIHRoZSBzbm93IHRoaXMgZmFzdCwgY2FuIGl0P2BdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBlbmRGb3Jlc3RDb25jZW50cmF0ZTFwcmVCKVxubGV0IGVuZEZvcmVzdEV4cGxvcmVTY3JlYW0zID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IHRyeSB0byBzY3JlYW0sIGFnYWluIGFuZCBhZ2Fpbi4gTm8gc291bmQgY29tZXMgb3V0LmAsIGBZb3Ugc3RvbXAgaW4gdGhlIHNub3csIGJ1dCBpdCBkb2Vzbid0IG1vdmUuYCwgYEZpbmFsbHksIHlvdSBhcHByb2FjaCBhIHRyZWUgYW5kIHJlYWNoIG91dCB0byB0b3VjaCBpdHMgYmFyay5gLCBgWW91IGd1bHAsIHBhbmljIGFuZCByZWFsaXphdGlvbiBzdGFydGluZyB0byBzZXR0bGUgaW4sIGFzIHlvdSBzbG93bHkgcmVhY2ggd2l0aCB5b3VyIGhhbmQgdG8gdGhlIHRyZWUuYCwgYFlvdXIgaGFuZCBwYXNzZXMgcmlnaHQgdGhyb3VnaCB0aGUgdHJlZSwgZGlzYXBwZWFyaW5nIGludG8gdGhlIGJhcmsuYCwgYFlvdSBkaWRuJ3Qgd2FrZSB1cCBoZXJlIGluIHRoZSBGb3Jlc3Qgb2YgTWlycm9ycy4gWW91IGRpZWQgaGVyZSwgYW5kIG5vdyB5b3UncmUgYSBTcGlyaXQuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGVuZEZvcmVzdENvbmNlbnRyYXRlMSlcbmxldCBlbmRGb3Jlc3RFeHBsb3JlU2NyZWFtMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBzdG9wLiBXaGF0IHRoZSBoZWxsIGlzIGdvaW5nIG9uP2AsIGBZb3UndmUgYmVlbiBmZWVsaW5nIG9mZiBldmVyIHNpbmNlIHlvdSB3b2tlIHVwLmAsIGBOb3csIHlvdSdyZSBzdGFydGluZyB0byBzdXNwZWN0IHRoYXQgaXQncyBub3QganVzdCB0aGUgY29sZCBhbmQgZnJvc3RiaXRlLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBlbmRGb3Jlc3RFeHBsb3JlU2NyZWFtMylcbmxldCBlbmRGb3Jlc3RFeHBsb3JlU2NyZWFtMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYCdBLWEtYW55Ym9keSEnYCwgYFlvdSB5ZWxsLCBidXQgdGhlIG9ubHkgc291bmQgdGhhdCB5b3UgaGVhciBpcyB0aGUgYmxpenphcmQuYCwgYCdTb21lYm9keSBoZWxwIG1lISdgLCBgWW91IHNjcmVhbSBhZ2Fpbi4gVGhpcyB0aW1lIHlvdSBub3RpY2UgdGhhdCB5b3UgZG9uJ3QgZXZlbiBmZWVsIHRoZSB2aWJyYXRpb24gaW4geW91ciB0aHJvYXQuYF0sXG4gICAgJ0ZvTXNwaXJpdEtub3cnLFxuICAgIGVuZEZvcmVzdEV4cGxvcmVTY3JlYW0yKVxubGV0IGVuZEZvcmVzdEV4cGxvcmVOb1NjcmVhbTMgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgbG9vayBhcm91bmQgZnJvbSB0aGUgdG9wIG9mIHRoZSBoaWxsLmAsIGBJbiB0aGUgZGlzdGFuY2UsIHlvdSBzcG90IGEgZmFpbnQgZ2xpbXBzZSBvZiBzbW9rZS5gLCBgTm93IHRoaXMgaXMgZGVmaW5pdGVseSBmaXJlIG9mIHNvbWUga2luZC5gLCBgQW5kIGhvcGUgZm9yIHlvdS5gLCBgWW91IHJ1c2ggZG93biB0aGUgaGlsbCB0b3dhcmRzIHRoZSBmaXJlLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBhcHByb2FjaENhbXBEb250S25vdzEpXG5sZXQgZW5kRm9yZXN0RXhwbG9yZU5vU2NyZWFtMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSBrZWVwIHJ1bm5pbmcgdGhyb3VnaCB0aGUgZm9yZXN0LCBhbmQgbWFuYWdlIHRvIHJlYWNoIHRoZSB0b3Agb2YgdGhlIGhpbGwuYCwgYFlvdSdyZSBub3QgZGVhZCB5ZXQsIGRlc3BpdGUgYmVpbmcgaW4gdGhlIGZyb3plbiBGb3Jlc3Qgb2YgTWlycm9ycyBmb3IgYXQgbGVhc3QgYW4gaG91ciBvciB0d28gYnkgbm93LmAsIGBZb3UncmUgbm90IGV2ZW4gb3V0IG9mIGJyZWF0aCBmcm9tIHNwcmluZ2luZyB1cCB0aGUgaGlsbC5gLCBgTm8gdGltZSB0byB0aGluayBhYm91dCBpdCBub3cuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGVuZEZvcmVzdEV4cGxvcmVOb1NjcmVhbTMpXG5sZXQgZW5kRm9yZXN0RXhwbG9yZU5vU2NyZWFtMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYE5vIHNjcmVhbWluZy5gLCBgWW91IGtlZXAgcnVubmluZyBmb3J3YXJkLmAsIGBZb3Ugc3ByaW50IHRocm91Z2ggdGhlIHRyZWVzIGZvciB3aGF0IGZlZWxzIGxpa2UgYW4gaG91ci5gLCBgRmluYWxseSwgeW91IG1hbmFnZSB0byBzcG90IGEgYmlnIGhpbGwgaW4gdGhlIGZvcmVzdC4gSXQnbGwgZ2l2ZSB5b3UgYSB2YW50YWdlIHBvaW50LCBzbyB5b3Ugc3ByaW5nIGluIGl0cyBkaXJlY3Rpb24uYF0sXG4gICAgJ0ZvTW5vU3Bpcml0S25vdycsXG4gICAgZW5kRm9yZXN0RXhwbG9yZU5vU2NyZWFtMilcbmxldCBlbmRGb3Jlc3RFeHBsb3JlMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Nob2ljZScsXG4gICAgW2BZb3UgYnJlYXRoZSwgdHJ5aW5nIHRvIGtlZXAgeW91ciB3YXJtdGguYCwgYEJsdXJyeSB2aXNpb24sIGNhbid0IGZlZWwgeW91ciBsZWdzIC0geW91IG1pZ2h0IGJlIGNsb3NlIHRvIGRlYXRoLiBZb3UgbmVlZCBoZWxwLmAsIGBUaGUgRm9yZXN0IG9mIE1pcnJvcnMgaXMgZW5vcm1vdXMsIGl0IHRha2VzIHVwIGEgYmlnIHBhcnQgb2YgdGhlIGVhc3Rlcm4gc2lkZSBvZiB0aGUgRmF0ZWQgUmVhbG0uYCwgYFRoZXJlIG11c3QgYmUgc29tZWJvZHkgdHJhdmVyc2luZyB0aGUgRm9yZXN0IHRoYXQgY291bGQgaGVscCB5b3UuYCwgYFNob3VsZCB5b3Ugc2NyZWFtIG91dCBmb3IgaGVscD9gXSxcbiAgICBbe2Nob2ljZVRleHQ6IGBZZXMuIEl0J2xsIGJlIGhhcmQgZm9yIGFueW9uZSB0byBoZWFyIHlvdSB0aHJvdWdoIHRoZSBibGl6emFyZCwgYnV0IHlvdSdyZSBkZXNwZXJhdGUuYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdGb01zY3JlYW0nLFxuICAgIGNob2ljZU5leHRTdG9yeTogZW5kRm9yZXN0RXhwbG9yZVNjcmVhbTF9LFxuICAgIHtjaG9pY2VUZXh0OiBgTm8gc2NyZWFtaW5nLiBUaGUgb25seSBhdHRlbnRpb24gaXQnbGwgYXR0cmFjdCBhcmUgdHVza3dvbHZlcy5gLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ0ZvTW5vU2NyZWFtJyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IGVuZEZvcmVzdEV4cGxvcmVOb1NjcmVhbTF9XSxcbiAgICB1bmRlZmluZWQpXG5sZXQgZW5kRm9yZXN0NSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Nob2ljZScsXG4gICAgW2AgWW91ciB2aXNpb24gaXMgZ2V0dGluZyBibHVycmllci5gLCBgWW91IG5lZWQgdG8ga2VlcCBtb3ZpbmcuIFdoYXQgdG8gZG8gbm93P2BdLFxuICAgIFt7Y2hvaWNlVGV4dDogJ0tlZXAgbW92aW5nLCBrZWVwIGV4cGxvcmluZyB0aGUgZm9yZXN0LicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnRm9NZW5kRXhwbG9yZScsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBlbmRGb3Jlc3RFeHBsb3JlMX0sXG4gICAge2Nob2ljZVRleHQ6ICdTdG9wIGFuZCB0cnkgdG8gY29uY2VudHJhdGUgb24geW91ciBjb25kaXRpb24uJyxcbiAgICBjaG9pY2VNb2RpZmllcnM6ICdGb01lbmRDb25jZW50cmF0ZScsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBlbmRGb3Jlc3RDb25jZW50cmF0ZTFwcmV9XSxcbiAgICB1bmRlZmluZWQpXG5sZXQgZW5kRm9yZXN0NCA9IG5ldyBzdG9yeUVsZW1lbnQoJ2NvbnNlcXVlbmNlJyxcbiAgICBbe2RlcGVuZGVuY3k6ICdGb01zYXdXaXNwJywgY29uc2VxdWVuY2VUZXh0OiBbYFlvdSByZW1lbWJlcjogXCJTcGlyaXRzIGNhbm5vdCB0b3VjaCBwaHlzaWNhbCBvYmplY3RzLlwiYCwgYFRoYXQgY3JlYXR1cmUgaW4gdGhlIHdvb2RzIC0gaXQgbXVzdCBoYXZlIGJlZW4gYSBTcGlyaXQuYCwgYEl0IGNvdWxkIHRvdWNoIHlvdS5gLCBgQ291bGQgeW91IGJlLi4uIGRlYWQ/YCwgYFlvdXIgdGhvdWdodHMgYXJlIGludGVycnVwdGVkIGFzIHlvdXIgYm9keSBpcyBmZWVsaW5nIHdlYWtlci5gXX0sXG4gICAge2RlcGVuZGVuY3k6ICdGb01ub3RTZWVuV2lzcCcsIGNvbnNlcXVlbmNlVGV4dDogW2BNYXliZSB5b3Ugc2hvdWxkIGhhdmUgYXNrZWQgdGhlIGNhbXBmaXJlIHBlb3BsZSBmb3IgaGVscC4gRm9yIGZvb2QuIFdhcm10aC4gQW55dGhpbmcuYCwgYFlvdSBmZWVsIHlvdXJzZWxmIGdldHRpbmcgd2Vha2VyLmBdfSxdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBlbmRGb3Jlc3Q1KVxubGV0IGVuZEZvcmVzdDMgPSBuZXcgc3RvcnlFbGVtZW50KCdjb25zZXF1ZW5jZScsXG4gICAgW3tkZXBlbmRlbmN5OiAnRm9Nc2VhcmNoZWRCb2R5JywgY29uc2VxdWVuY2VUZXh0OiBbYFlvdSBjb25jZW50cmF0ZSwgd2luY2luZy4gVHJ5aW5nIHRvIHRoaW5rIGJhY2sgdG8geW91ciBlZHVjYXRpb24uIFdoYXQgZG8geW91IGtub3cgb2YgU3Bpcml0cz9gLCBgTGV0J3Mgc2VlLi4uIFNwaXJpdHMgYXJlIHRoZSBvbmx5IGNyZWF0dXJlcyB3aXRoIG1hZ2ljYWwgYWJpbGl0aWVzLmAsIGBTcGlyaXRzIGFsc28uLi4gY2Fubm90IHRvdWNoIHBoeXNpY2FsIG9iamVjdHMuYF19LFxuICAgIHtkZXBlbmRlbmN5OiAnRm9NbGVmdEJvZHknLCBjb25zZXF1ZW5jZVRleHQ6IFtgWW91IHNob3VsZCBiZSBkZWFkIGJ5IG5vdywgYnV0IHlvdSBkb24ndCBzZWVtIHRvIGZlZWwgdGhlIGNvbGQuYCwgYFlvdSBjYW4gZmVlbCBwYW5pYyBhbmQgZnJ1c3RyYXRpb24gZ3Jvd2luZy5gXX0sXSxcbiAgICB1bmRlZmluZWQsXG4gICAgZW5kRm9yZXN0NClcbmxldCBlbmRGb3Jlc3QyID0gbmV3IHN0b3J5RWxlbWVudCgnY29uc2VxdWVuY2UnLFxuICAgIFt7ZGVwZW5kZW5jeTogJ0ZvTXNlYXJjaGVkQm9keScsIGNvbnNlcXVlbmNlVGV4dDogW2BTdG9wLiBSZWNpdGUgdGhlIGZhY3RzLmAsIGBZb3Ugd29rZSB1cCBpbiB0aGUgRm9yZXN0IG9mIE1pcnJvcnMuYCwgYFlvdSBkb24ndCBzZWVtIHRvIGZlZWwgdGhlIGNvbGQuYCwgYFlvdXIgaGFuZCB3ZW50IHJpZ2h0IHRocm91Z2ggdGhhdCBjb3Jwc2UuYCwgYFNvbWV0aGluZyBpcyBvZmYgaGVyZS5gLCBgWW91IGhhdmUgYSB0aGVvcnkuYF19LFxuICAgIHtkZXBlbmRlbmN5OiAnRm9NbGVmdEJvZHknLCBjb25zZXF1ZW5jZVRleHQ6IFtgU3RvcC4gUmVjaXRlIHRoZSBmYWN0cy5gLCBgWW91IHdva2UgdXAgaW4gdGhlIEZvcmVzdCBvZiBNaXJyb3JzLmBdfV0sXG4gICAgdW5kZWZpbmVkLFxuICAgIGVuZEZvcmVzdDMpXG5sZXQgZW5kRm9yZXN0MSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2VuZEV4cGxvcmF0aW9uJyxcbiAgICBbYFlvdSBjb250aW51ZSB0cnVkZ2luZyB0aHJvdWdoIHRoZSBzbm93eSB3b29kcywgbG9va2luZyBmb3IgYW55IHNvcnQgb2YgaGVscC5gLCBgWW91IGNhbid0IGZlZWwgd2Vha2VyIHdpdGggZWFjaCBzdGVwLCBidXQgeW91IHN0aWxsIGRvbid0IGZlZWwgdGhlIGNvbGQuYCwgYFlvdSBzdG9wIGFuZCB0aGluay5gXSxcbiAgICB7dW5sb2NrZWQ6IGZhbHNlfSxcbiAgICBlbmRGb3Jlc3QyKVxubGV0IHdpc3BMZWF2ZSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSB0dXJuIGFyb3VuZCBzdGVwIGF3YXkgZnJvbSB0aGUgbGlnaHQuYCwgYElmIGl0J3MgYSBjYW1wZmlyZSwgeW91IGNhbid0IGJlIHN1cmUgdGhhdCB0aGVzZSBwZW9wbGUgd29uJ3QgYmUgaG9zdGlsZS5gLCBgQW5kLCB3aXRoIHRoZSBibGl6emFyZCBhbmQgeW91ciBibHVycmVkIHZpc2lvbiAtIGZyb20geW91ciBpbmp1cmllcz8gLSB5b3UgY2FuJ3QgZXZlbiBiZSBzdXJlIHRoYXQgaXQncyBhIGNhbXBmaXJlLmBdLFxuICAgICdleHBsb3JhdGlvbkV2ZW50JyxcbiAgICB1bmRlZmluZWQpXG5sZXQgd2lzcEFwcHJvYWNoNSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFRoYXQgbXVzdCBoYXZlIGJlZW4uLi4gYSBTcGlyaXQsIHJpZ2h0PyBZb3UgZG8ga25vdyBvZiBTcGlyaXRzLmAsIGBXaGVuIG9yZGluYXJ5IHBlb3BsZSBkaWUsIHRoZXkgcmVpbmNhcm5hdGUgaW50byBhbmltYWxzLmAsIGBJZiBhIHBlcnNvbiBoYXMgZG9uZSBlbm91Z2ggaW4gdGhlIHdvcnNoaXAgb2Ygb25lIG9mIHRoZSAyMCBTdW5zLCB0aGV5IHJlaW5jYXJuYXRlIGludG8gYSBTcGlyaXQuYCwgYFNub3dmYWxsIGlzIGdldHRpbmcgd29yc2UuIFRpbWUgdG8gbW92ZS5gXSxcbiAgICAnZXhwbG9yYXRpb25FdmVudCcsXG4gICAgdW5kZWZpbmVkKVxubGV0IHdpc3BBcHByb2FjaDQgPSBuZXcgc3RvcnlFbGVtZW50KCdpdGVtJyxcbiAgICBbYFRoZSB3aXNwIGJhbGwgZmxpZXMgdG93YXJkcyB5b3UgYWdhaW4uIFRoaXMgdGltZSB5b3UncmUgcmVhZHkgYW5kIHlvdSBsYW5kIGEgc3RyaWtlIGluIHRoZSBtaWRkbGUgb2YgaXRzIGdsb3dpbmcgYm9keS5gLCBgV2l0aCBhIGZpenppbmcgc291bmQsIHRoZSB3aXNwIGV4cGxvZGVzIGludG8gdGlueSBzcGVja3Mgb2YgbGlnaHQuYCwgYFlvdSBzZWUgb25lIG9mIHRoZSBiaWdnZXIgc3BlY2tzLCBhIGZpc3Qtc2l6ZWQgYmFsbCBvZiBsaWdodCwgaGFzIGxhbmRlZCB1bmRlciB5b3VyIGZlZXQuYCwgYFlvdSByZWFjaCBpbnRvIHRoZSBzbm93IGFuZCBwaWNrIGl0IHVwLiBJdCBlbWl0cyBhIHdhcm1pbmcgYXVyYS5gLCBgW0NsaWNrIHRoZSBJbnZlbnRvcnkgYnV0dG9uIHRvIGVxdWlwIGl0ZW1zXWBdLFxuICAgIGFsbEl0ZW1zLndpc3BCYWxsLFxuICAgIHdpc3BBcHByb2FjaDUpXG5sZXQgd2lzcEFwcHJvYWNoMyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2JhdHRsZScsXG4gICAgW2BZb3UgdHVybiBhcm91bmQsIHRyeWluZyB0byBrZWVwIGl0IGluIHNpZ2h0LmAsIGBJdCBzZWVtcyB0byBiZSBhIGdsb3dpbmcgd2lzcCBvZiBsaWdodC5gLCBgSXQgc2VlbXMgdG8gYmUgZ2V0dGluZyByZWFkeSB0byBzd29vcCBpbiB0b3dhcmRzIHlvdSBhZ2Fpbi5gLCBgSXQncyBjZXJ0YWlubHkgbm8gY2FtcGZpcmUsIGFuZCBpdCBkb2Vzbid0IHNlZW0gdG8gYmUgZnJpZW5kbHkuIFlvdSBuZWVkIGFuc3dlcnMsIGJ1dCBzdXJ2aXZhbCBjb21lcyBmaXJzdC4gWW91J3JlIG5vdCBzdXJlIHlvdSBjYW4gdGFrZSBtYW55IG1vcmUgb2YgdGhpcyBcIndpc3Anc1wiIGZseS1ieXMuIFlvdSBoYXZlIG5vdGhpbmcgYnV0IHlvdXIgZmlzdHMgdG8gZGVmZW5kIHlvdXJzZWxmIHdpdGguYF0sXG4gICAgW21vbnN0ZXJzLndpc3AxXSxcbiAgICB3aXNwQXBwcm9hY2g0KVxubGV0IHdpc3BBcHByb2FjaDIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BUaGUgYmxpenphcmQsIHRoZSB0cmVlcyBhbmQgdGhlIHNub3cgZG9uJ3QgaGVscC5gLCBgQXMgeW91IHN0ZXAgY2xvc2VyLCB0aGUgbGlnaHQgc3VkZGVubHkgbW92ZXMuIEl0IGZsaWVzIGEgbGl0dGxlIHVwd2FyZHMsIGFuZCB0aGVuIG1vdmVzIGNsb3NlciB0b3dhcmRzIHlvdS5gLCBgVGhlIGxpZ2h0IHNwZWVkcyB1cCwgZmx5aW5nIHRvd2FyZHMgeW91LCB1bnRpbCBpdCBmbGllcyByaWdodCB0aHJvdWdoIHlvdSwgcGFpbmZ1bGx5IGJ1cm5pbmcgeW91ciBmbGVzaC5gXSxcbiAgICAnZXhwbG9yYXRpb25FdmVudCcsXG4gICAgd2lzcEFwcHJvYWNoMylcbmxldCB3aXNwQXBwcm9hY2gxID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGNhbid0IGhlbHAgYnV0IGZlZWwgd2Vha2VyLiBUaGUgY29sZCBtdXN0IGJlIGdldHRpbmcgdG8geW91LmAsIGBZb3UgbmVlZCBoZWxwLiBZb3UgZGVjaWRlIHRvIHdhbGsgY2xvc2VyIHRvIHRoZSBsaWdodC5gLCBgWW91IHN0ZXAgc2xvd2x5LCB0cnlpbmcgdG8gc2VlIHdoYXQgdGhlIGxpZ2h0IGlzLmBdLFxuICAgICdleHBsb3JhdGlvbkV2ZW50JyxcbiAgICB3aXNwQXBwcm9hY2gyKVxubGV0IHdpc3AyID0gbmV3IHN0b3J5RWxlbWVudCgnY2hvaWNlJyxcbiAgICBbYFlvdXIgdmlzaW9uIGlzIHNvIGJsdXJyeSB0aGF0IHlvdSBjYW4ndCBxdWl0ZSBtYWtlIG91dCB3aGF0IHRoZSBsaWdodCBpcy5gLCBgUGVyaGFwcywgY2FtcGZpcmU/IFBlcmhhcHMgc29tZW9uZSBpcyBpbiB0aGlzIGZvcmVzdCBhZnRlciBhbGwuYCwgYEl0IGNvdWxkIGFsc28gYmUgYmFuZGl0cy4gUG9hY2hlcnMuIFdvcnNoaWhwcGVycyBvZiBldmlsIFN1bnMsIHJlYWR5IHRvIHRha2UgYWR2YW50YWdlIG9mIGEgZHlpbmcgdHJhdmVsZXIuYCwgYEFwcHJvYWNoIHRoZSBsaWdodCBzb3VyY2U/YF0sXG4gICAgW3tjaG9pY2VUZXh0OiAnU2xvd2x5IGFwcHJvYWNoIHRoZSBsaWdodC4nLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ0ZvTXNhd1dpc3AnLFxuICAgIGNob2ljZU5leHRTdG9yeTogd2lzcEFwcHJvYWNoMX0sXG4gICAge2Nob2ljZVRleHQ6ICdUdXJuIGFyb3VuZCBhbmQgd2FsayBhd2F5IGZvcm0gdGhlIGxpZ2h0LicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnRm9Nbm90U2Vlbldpc3AnLFxuICAgIGNob2ljZU5leHRTdG9yeTogd2lzcExlYXZlfV0sXG4gICAgdW5kZWZpbmVkKVxubGV0IHdpc3AxID0gbmV3IHN0b3J5RWxlbWVudCgncmFuZG9tRW5jb3VudGVyJyxcbiAgICBbYFlvdSBjb250aW51ZSB0cnVkZ2luZyB0aHJvdWdoIHRoZSBzbm93LmAsIGBZb3UgZG9uJ3Qgc2VlbSB0byBmZWVsIHlvdXIgZmVldC4gWW91IGhvcGUgaXQncyBub3QgZHVlIHRvIGZyb3N0Yml0ZS5gLCBgQXMgeW91IGxpZnQgeW91ciBoZWFkIHRvIGxvb2sgZm9yd2FyZCwgcGxhY2luZyB5b3VyIGhhbmQgYWdhaW5zdCB5b3VyIGZvcmVoZWFkIHRvIGJsb2NrIG9mZiB0aGUgd2luZCwgeW91IHNlZSBhIGxpZ2h0IGJldHdlZW4gdGhlIHRyZWVzLmBdLFxuICAgIHtoYXNQbGF5ZXJTZWVuTWU6IGZhbHNlfSxcbiAgICB3aXNwMilcbmxldCBjb3Jwc2VMZWF2ZSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdSB0dXJuIGFyb3VuZCwgbm90IHdpc2hpbmcgdG8gZGlzdHVyYiB0aGUgY29ycHNlLmAsIGBZb3UnbGwgbWFrZSBpdCBvdXQgb2YgaGVyZS5gLCBgTm90IHRoaXMgd2F5LCBidXQgeW91IHdpbGwuYCwgYEFzIHlvdSB3YWxrIGF3YXkgZnJvbSB0aGUgYm9keSwgeW91IGNhbid0IGhlbHAgYnV0IGZlZWwgd2Vha2VyLiBQcm9iYWJseSBmcm9zdGJpdGUuIFJpZ2h0P2BdLFxuICAgICdleHBsb3JhdGlvbkV2ZW50JyxcbiAgICBbJ3N0YXRzJywgJ2JlbmV2b2xlbmNlJywgMTBdKVxubGV0IGNvcnBzZVNlYXJjaDIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3VyIGhhbmQgbW92ZXMgcmlnaHQgdGhyb3VnaCB0aGUgc25vdy5gLCBgWW91IHRyeSBhZ2Fpbi4gWW91IGNhbid0IG1vdmUgdGhlIHNub3cuIFlvdXIgaGFuZCBtb3ZlcyByaWdodCB0aHJvdWdoIHRoZSBjb3Jwc2UgdG9vLmAsIGBZb3UgdHVybiBhcm91bmQuYCwgYEF0IGZpcnN0LCB5b3UgdGhvdWdodCB0aGF0IHRoZSBibGl6emFyZCBmaWxsZWQgaW4gYW55IHRyYWNrcyBpbiB0aGUgc25vdy4gTm93IHRoYXQgeW91J3JlIGxvb2tpbmcgLSBpdCdzIG5vdCB0aGF0LmAsIGBZb3UncmUgbm90IGxlYXZpbmcgYW55IGZvb3RwcmludHMgaW4gdGhlIHNub3cgYXQgYWxsLmAsIGBXaGF0IHRoZSBoZWxsIGlzIGdvaW5nIG9uP2BdLFxuICAgICdleHBsb3JhdGlvbkV2ZW50JyxcbiAgICBbJ3N0YXRzJywgJ2V2aWwnLCAxMF0pXG5sZXQgY29ycHNlU2VhcmNoMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYEFsb25lLCB3aXRoIG5vIGJlbG9uZ2luZ3MsIGluIHRoZSBtaWRkbGUgb2Ygd2ludGVyIGluIHRoZSBGb3Jlc3Qgb2YgTWlycm9ycz9gLCBgWWVhaCwgeW91J2xsIHRha2UgYW55dGhpbmcsIG9yIGl0J2xsIGJlIHZlcnkgZWFzeSB0byBlbmQgdXAgbGlrZSB0aGlzIHBlcnNvbi5gLCBgWW91IGxvd2VyIHlvdXJzZWxmIHRvd2FyZHMgdGhlIGJvZHksIHRyeWluZyB0byByZW1vdmUgc29tZSBzbm93IGZyb20gdGhlIGJvZHkuYF0sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnLFxuICAgIGNvcnBzZVNlYXJjaDIpXG5sZXQgY29ycHNlMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Nob2ljZScsXG4gICAgW2BMb290aW5nIHdvdWxkIGJlIGEgbmV3IGxvdy5gLCBgQWx0aG91Z2guLi5gLCBgWW91J3JlIGluIG5vIGNvbmRpdGlvbiB0byBiZSBwaWNreS5gLCBgU2VhcmNoIHRoZSBib2R5P2BdLFxuICAgIFt7Y2hvaWNlVGV4dDogJ1NlYXJjaCB0aGUgYm9keS4nLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ0ZvTXNlYXJjaGVkQm9keScsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBjb3Jwc2VTZWFyY2gxfSxcbiAgICB7Y2hvaWNlVGV4dDogJ0xlYXZlIHRoZSBib2R5IGFsb25lLicsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiAnRm9NbGVmdEJvZHknLFxuICAgIGNob2ljZU5leHRTdG9yeTogY29ycHNlTGVhdmV9XSxcbiAgICAnZXhwbG9yYXRpb25FdmVudCcpXG5sZXQgY29ycHNlMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ3JhbmRvbUVuY291bnRlcicsXG4gICAgWydZb3UgY29udGludWUgbW92aW5nIHRocm91Z2ggdGhlIEZvcmVzdCBvZiBNaXJyb3JzLCB3aGVuIHlvdSBzZWUgYSBtb3VuZCBpbiB0aGUgc25vdy4nLCAnVGhlIHNub3cgc2VlbXMgdG8gYmUgY292ZXJpbmcgc29tZXRoaW5nLicsICdZb3VyIHN1c3BpY2lvbnMgYXJlIHRydWUuIEl0IGlzIGEgbG9uZWx5IGJvZHksIGluIHRoZSBmcm9zdGVkIGZvcmVzdCwgY292ZXJlZCBpbiBzbm93LiddLFxuICAgIHtoYXNQbGF5ZXJTZWVuTWU6IGZhbHNlfSxcbiAgICBjb3Jwc2UyKVxubGV0IHR1c2t3b2xmMyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYEh1aD8gSXMgaXQgYmxpbmQ/IEN1cnNlZD8gUGVyaGFwcyBpdCdzIGEgU3Bpcml0J3MgaWxsdXNpb24/IE9yIG1heWJlIHlvdSdyZSBoYWxsdWNpbmF0aW5nLmAsIGBXaGF0ZXZlciBpdCBpcywgdGhlIHR1c2t3b2xmIGF0IGxlYXN0IHNlZW1zIHZlcnkgcmVhbC4gWW91J3JlIG5vdCBpbiBhbnkgY29uZGl0aW9uIHRvIGludmVzdGlnYXRlLmAsIGBZb3Ugd29uJ3QgZ2V0IGFub3RoZXIgY2hhbmNlLiBZb3UgcXVpY2tseSBiYWNrIGF3YXkgZnJvbSB0aGUgdHVza3dvbGYgd2hpbGUgaXQncyBjb25mdXNlZCBvciBkaXN0cmFjdGVkLmBdLFxuICAgICdleHBsb3JhdGlvbkV2ZW50JyxcbiAgICB1bmRlZmluZWQpXG5sZXQgdHVza3dvbGYyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgVGhlIGdyb3dsaW5nIHNlZW1zIHRvIGJlIGNsb3NlLiBNYXliZSAxNSBtZXRlcnMgYmVoaW5kIHlvdS5gLCBgVGhlIHR1c2t3b2xmIGRvZXNuJ3Qgc2VlbSB0byBiZSBzdHJpa2luZyB0aG91Z2guIE9kZC5gLCBgWW91IHNsb3dseSB0dXJuIGFyb3VuZC5gLCBgQSBiaWcgd29sZiBvZiBzaWx2ZXIgZnVyIHN0YW5kcyBub3QgZmFyIGZyb20gd2hlcmUgeW91IGFyZSwgdHdvIDMwIGNtcyBsb25nIHR1c2tzIGF0IHRoZSByZWFkeS5gLCAnSXQgc3BpbnMgYXJvdW5kIGluIHBsYWNlLCBzbmlmZmluZyBhbmQgc2VhcmNoaW5nIGZvciBzb21ldGhpbmcuIEl0IGlnbm9yZXMgeW91IGNvbXBsZXRlbHkuJ10sXG4gICAgJ2V4cGxvcmF0aW9uRXZlbnQnLFxuICAgIHR1c2t3b2xmMylcbmxldCB0dXNrd29sZjEgPSBuZXcgc3RvcnlFbGVtZW50KCdyYW5kb21FbmNvdW50ZXInLFxuICAgIFsnQXMgeW91IHJ1biB0aHJvdWdoIHRoZSBmb3Jlc3QsIHlvdXIgdGhvdWdodHMgc3RhcnQgZ2F0aGVyLicsICdZb3Uga25vdyB0aGUgRmF0ZWQgUmVhbG0gcXVpdGUgd2VsbC4nLCAnSnVkZ2luZyBieSB0aGUgZnJvc3RlZCBwZWFrcyBpbiB0aGUgZGlzdGFuY2UsIHRoaXMgbXVzdCBiZSB0aGUgRm9yZXN0IG9mIE1pcnJvcnMuIE5hbWVkIGFmdGVyIHRoZSBjbGVhciB3aGl0ZSBzbm93IHRoYXQgbGllcyBoZXJlIGZvciAxNiBvdXQgb2YgdGhlIDIwIG1vbnRocy4nLCAnWW91ciB0aG91Z2h0cyBwYXVzZSBhcyB5b3UgaGVhciBncm93bGluZyBiZWhpbmQgeW91LiBBIHR1c2t3b2xmLiBGdWNrLiddLFxuICAgIHtoYXNQbGF5ZXJTZWVuTWU6IGZhbHNlfSxcbiAgICB0dXNrd29sZjIpXG4vLyBXQUtFIFVQIFNFUVVFTkNFXG5sZXQgd2FrZVVwTW92ZSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2V4cGxvcmF0aW9uJyxcbiAgICBbYFlvdXIgYm9keSBtb3ZlcyBxdWlja2x5LCBidXQgdGhlIGZlZWxpbmcgb2YgbnVtYm5lc3MgYWxsIG92ZXIgaXMgb3ZlcndoZWxtaW5nLmAsIGBNdXN0IGJlIHRoZSBmcm9zdGJpdGUuIElmIHlvdSdyZSBsdWNreSwgeW91IHdvbid0IGxvc2UgYW55IGZpbmdlcnMgb3IgdG9lcy5gLCBgSW4gYW55IGNhc2UsIGl0J3MgdGltZSB0byBtb3ZlLCBvciB5b3UnbGwgbG9zZSB5b3VyIGxpZmUgYXMgd2VsbC5gLCBgW1VTRSBXQVNEIG9yIGNsaWNrIHRoZSBtYXAgdG8gbW92ZS5dYF0sXG4gICAgW3tlbmNvdW50ZXJTdG9yeUVsZW1lbnQ6IHdpc3AxLCB0aWxlTnVtYmVyOiAnI3RpbGUzMCcsIGljb246IGljb25zLmljb25UcmVlfSxcbiAgICB7ZW5jb3VudGVyU3RvcnlFbGVtZW50OiBjb3Jwc2UxLCB0aWxlTnVtYmVyOiAnI3RpbGU1MCcsIGljb246IGljb25zLmljb25UcmVlMn0sXG4gICAge2VuY291bnRlclN0b3J5RWxlbWVudDogdHVza3dvbGYxLCB0aWxlTnVtYmVyOiAnI3RpbGU3MCcsIGljb246IGljb25zLmljb25UcmVlM30sXG4gICAge2VuY291bnRlclN0b3J5RWxlbWVudDogZW5kRm9yZXN0MSwgdGlsZU51bWJlcjogJyN0aWxlMycsIGljb246IGljb25zLmljb25QZXJzb259XSxcbiAgICB1bmRlZmluZWQpXG5sZXQgd2FrZVVwTGllMiA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFlvdXIgZXllcyBvcGVuIGFnYWluLiBZb3UgZmVlbCBub3RpY2VhYmx5IHdlYWtlci4gWW91ciB2aXNpb24gc2VlbXMgYmx1cnJ5LmAsIGBUaGUgY2xlYXIgZXZlbmluZyBza3kgaGFzIGNoYW5nZWQgaW50byBhIG5hdnkgYmx1ZSBkdXNrLmAsICdZb3UgYWxtb3N0IGxldCB5b3VyIGV5ZXMgY2xvc2UgYWdhaW4sIHdoZW4geW91IGhlYXIgdGhlIGhvd2wgb2YgYSB0dXNrd29sZi4gRHJpdmVuIGJ5IHB1cmUgaW5zdGluY3QsIHlvdSBnZXQgdG8geW91ciBrbmVlcywgdGhlbiB0byB5b3VyIGZlZXQsIGFuZCBzdGFydCBtb3ZpbmcuJywgYEV2ZXJ5b25lIGhhcyB0byBnbyBvbmUgZGF5LCBidXQgdHVza3dvbGYgZm9vZCBpc24ndCB5b3VyIHdheS5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgd2FrZVVwTW92ZSlcbmxldCB3YWtlVXBMaWUxID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IGxpZSBvbiB5b3VyIGJlbGx5IGluIHRoZSBzbm93LCBmZWVsaW5nIHBvd2VybGVzcyB0byBtb3ZlLmAsIGBZb3UgYWxtb3N0IGRvbid0IGZlZWwgdGhlIGNvbGQuIFlvdSB3b25kZXIgaWYgaXQgbWVhbnMgdGhhdCB5b3UncmUgYWxtb3N0IGRlYWQgYWxyZWFkeS4gSG93IGRpZCB5b3UgZ2V0IGhlcmU/IFdlcmUgeW91IHJvYmJlZD9gLCAnWW91IGNsb3NlIHlvdXIgZXllcyBhZ2Fpbi4gTWF5YmUgdGhpcyBwcm9ibGVtIHdpbGwgZGlzYXBwZWFyIGxpa2UgYSBiYWQgZHJlYW0uJ10sXG4gICAgdW5kZWZpbmVkLFxuICAgIHdha2VVcExpZTIpXG5sZXQgd2FrZVVwUmlzZTIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgWydZb3UgZ2V0IHRvIHlvdXIgZmVldC4gQWdhaW4sIHdpdGggc3VycHJpc2luZyBlYXNlLicsICdZb3UgbXVzdCBub3QgaGF2ZSBiZWVuIG91dCBmb3IgbG9uZy4gWW91IGZlZWwgbHVja3kuIEZyb3N0IHRha2VzIGxpdmVzIHF1aWNrbHkuJywgJ1lvdSBsb29rIGJhY2sgZG93bi4gVGhlIHdpbmQgaGFzIGFscmVhZHkgZG9uZSBpdHMgam9iIC0gdGhlcmUgaXMgYWxtb3N0IG5vIGluZGVudGF0aW9uIGluIHRoZSBzbm93IGZyb20geW91ciBib2R5IGFscmVhZHkuJywgYFlvdSBkb24ndCBmZWVsIHBhcnRpY3VsYXJseSBjb2xkIHlldCwgYnV0IHlvdSBydWIgeW91ciBoYW5kcyBmb3Igd2FybXRoIG5ldmVydGhlbGVzcy5gXSxcbiAgICBbJ2dvbGQnLCAyMDBdLFxuICAgIHdha2VVcE1vdmUpXG5sZXQgd2FrZVVwUmlzZTEgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgWydZb3Ugc2VlbSB0byBiZSBseWluZyBvbiB5b3VyIGJlbGx5LicsICdZb3UgcGxhbnQgeW91ciBoYW5kcyBpbiB0aGUgc25vdywgdHJ5aW5nIHRvIHJpc2UgdG8geW91ciBrbmVlcy4nLCAnWW91IHJpc2UgdG8geW91ciBrbmVlcyB3aXRoIHN1cnByaXNpbmcgZWFzZS4nLCBgWW91IGxvb2sgYXJvdW5kLiBZb3VyIHNhdGNoZWwgZG9lc24ndCBzZWVtIHRvIGJlIHdpdGggeW91LiBIb3cgZGlkIHlvdSBnZXQgaGVyZT8gV2VyZSB5b3Ugcm9iYmVkP2BdLFxuICAgIHVuZGVmaW5lZCxcbiAgICB3YWtlVXBSaXNlMilcbmxldCB3YWtlVXAxID0gbmV3IHN0b3J5RWxlbWVudCgnY2hvaWNlJyxcbiAgICBbJ1lvdSBvcGVuIHlvdXIgZXllcyB0byBzZWUgcHVyZSB3aGl0ZSBhcm91bmQgeW91LicsICdZb3UgbGlmdCB5b3VyIGhlYWQuIFRyZWV0b3BzIGNvdmVyZWQgaW4gc3BhcmtsaW5nIHdoaXRlIHNub3cuIENsZWFyIGV2ZW5pbmcgc2t5LiBTb3VuZHMgb2YgdGhlIHdpbmQuJ10sXG4gICAgW3tjaG9pY2VUZXh0OiAnVHJ5IHRvIGdldCB1cC4nLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ3dha2VVcERheScsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiB3YWtlVXBSaXNlMX0sXG4gICAge2Nob2ljZVRleHQ6ICdDb250aW51ZSBseWluZyBpbiB0aGUgc25vdy4nLFxuICAgIGNob2ljZU1vZGlmaWVyczogJ3dha2VVcE5pZ2h0JyxcbiAgICBjaG9pY2VOZXh0U3Rvcnk6IHdha2VVcExpZTF9XSxcbiAgICB1bmRlZmluZWQpXG4vLyBwcm9sb2d1ZVxubGV0IHByb2xvZ3VlNCA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFRoZSBIaWdoZmF0ZSBib3dzIGFzIHRoZSBnYW1lIGVuZHMuYCwgYFNoZSB3b24sIGJ1dCBzaGUgc2hvd3MgcmVzcGVjdCBhbmQgZG9lc24ndCBzbWlsZSB0b28gbXVjaC5gLCBgQmVmb3JlIHlvdSBwb2xpdGVseSBleGN1c2UgeW91cnNlbGYgdG8gbGVhdmUgdGhlIHRhYmxlLCBzaGUgc21pbGVzIGF0IHlvdS4gXCJHb29kIGdhbWUsIFNlcmFoIFNvbWVib2R5LlwiYCwgYC4uLmAsIGAuLi5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgd2FrZVVwMSlcbmxldCBwcm9sb2d1ZTMgPSBuZXcgc3RvcnlFbGVtZW50KCdpdGVtJyxcbiAgICBbYFRoZSBIaWdoZmF0ZSBib3dzIGFzIHRoZSBnYW1lIGVuZHMuYCwgYFlvdSB3b24sIGJ1dCB5b3UgdHJ5IHRvIHNob3cgcmVzcGVjdCBhbmQgZG9uJ3Qgc21pbGUgdG9vIG11Y2guYCwgYEJlZm9yZSB5b3UgcG9saXRlbHkgZXhjdXNlIHlvdXJzZWxmIHRvIGxlYXZlIHRoZSB0YWJsZSwgc2hlIGhhbmRzIHlvdSBhIGxvbmcsIGJlYXV0aWZ1bCBkYWdnZXIuYCwgYFwiRm9yIHlvdXIgd2luLFwiIHNoZSBzbWlsZXMsIGFuZCBtb3ZlcyBvbi5gLCBgLi4uYCwgYC4uLmBdLFxuICAgIGFsbEl0ZW1zLmdvbGRlbkRhZ2dlcixcbiAgICB3YWtlVXAxKVxubGV0IHByb2xvZ3VlMnggPSBuZXcgc3RvcnlFbGVtZW50KCdmYWxzZWN1YmVzJyxcbiAgICBbYFRoZSBIaWdoZmF0ZSBwaWNrcyB1cCB0aGUgc3RvbmUgZGljZSBvbiBoZXIgc2lkZSBvZiB0aGUgbWFyYmxlIHRhYmxlLmAsIGBTaGUgcm9sbHMgdGhlbSwgYW5kIGNvdmVycyB0aGUgcmVzdWx0cyB3aXRoIGhlciBoYW5kLCBzbWlsaW5nLmBdLFxuICAgIHtvcHBvbmVudE5hbWU6ICdUaGUgSGlnaGZhdGUnLFxuICAgIG9wcG9uZW50TGluZXM6IHtcbiAgICAgICAgb3BlbkxpbmU6IGBPaCwgbXkuIFRoZSBkaWNlIGFyZSBmYXZvcmluZyBtZSB0b25pZ2h0LmAsXG4gICAgICAgIGJpZExpbmU6IGBNeSBzdHJhdGVneSB0b25pZ2h0IGlzIHF1aXRlIGJvbGQuYCxcbiAgICAgICAgYmx1ZmZMaW5lOiBgWW91IG1heSBub3QgYmVsaWV2ZSBtZSwgYnV0IHRoZSBkaWNlIHNwZWFrIGZvciB0aGVtc2VsdmVzLmAsXG4gICAgICAgIGFjY3VzZUxpbmU6IGBJIGNvbmNsdWRlIHRoYXQgdGhpcyBpcyBhIGJsdWZmLCBTZXJhaC5gLFxuICAgICAgICB3aW5MaW5lOiBgQW5kIHRoaXMgb25lJ3MgbWluZS4gVGhhbmsgeW91IGZvciB0aGUgZ2FtZS5gLFxuICAgICAgICBsb3NlTGluZTogYEFuZCB0aGlzIG9uZSdzIHlvdXJzLiBZb3UgYXJlIGluZGVlZCBza2lsbGVkLmB9LFxuICAgIGNvbnNlcXVlbmNlczoge1xuICAgICAgICB3aW46ICdwcm9sb2d1ZUZhbHNlY3ViZXNXaW4nLFxuICAgICAgICBsb3NlOiAncHJvbG9ndWVGYWxzZWN1YmVzTG9zZSd9LFxuICAgIH0sXG4gICAge3dpbjogcHJvbG9ndWUzLCBsb3NlOiBwcm9sb2d1ZTR9KVxubGV0IHByb2xvZ3VlMmMgPSBuZXcgc3RvcnlFbGVtZW50KFxuICAgICdkaWFsb2d1ZScsXG4gICAgW3sgbGluZU51bWJlcjogMCwgbnBjTGluZTogJ1wiU2VyYWggU29tZWJvZHksXCIgdGhlIEhpZ2hmYXRlIHNheXMsIGhlciBzcGVlY2ggc2xvdyBhbmQgZGVsaWJlcmF0ZS4gXCJDYXJlIHRvIGpvaW4gbWUgZm9yIGEgZ2FtZSBvZiBGYWxzZWN1YmVzPyBXZSBjYW4gY2F0Y2ggdXAgYWZ0ZXIgd2UgcGxheS5cIicsIHJlc3BvbnNlczogXG4gICAgICAgIFt7IGRpYWxvZ3VlQ2hvaWNlOiBgQ2VydGFpbmx5LCB5b3VyIGdyYWNlLiBJdCdzIG15IGhvbm9yIHRvIGJlIHlvdXIgZmlyc3Qgb3Bwb25lbnQgdG9uaWdodC5gLCBkaWFsb2d1ZU5leHRMaW5lOiAxLCBwb2ludHM6IDEgfSxcbiAgICAgICAgeyBkaWFsb2d1ZUNob2ljZTogYEkgc3VwcG9zZSBJIHdpbGwuIEkndmUgYWx3YXlzIHdhbnRlZCB0byB3aW4gYXQgRmFsc2VjdWJlcyBhZ2FpbnN0IHRoZSBIaWdoZmF0ZS5gLCBkaWFsb2d1ZU5leHRMaW5lOiAyLCBwb2ludHM6IC0xIH1dfSxcbiAgICB7IGxpbmVOdW1iZXI6IDEsIG5wY0xpbmU6ICdcIlBsZWFzZSwgU2VyYWggU29tZWJvZHksXCIgdGhlIEhpZ2hmYXRlIGdlc3R1cmVzIGZvciB5b3UgdG8gcmVsYXguIFwiWW91IGFyZSBvZmYgZHV0eSB0b2RheS4gRW5qb3kgdGhlIGV2ZW5pbmcgYW5kIGRvIG5vdCBmcmV0IGFib3V0IGZvcm1hbGl0aWVzLlwiJywgcmVzcG9uc2VzOiBcbiAgICAgICAgW3sgZGlhbG9ndWVDaG9pY2U6ICdZZXMsIHlvdSBhcmUgcXVpdGUgcmlnaHQuIE1heSB0aGUgZGljZSBmYXZvciB5b3UgaW4gdGhlIGdhbWUsIFNlcmFoLicsIGRpYWxvZ3VlTmV4dExpbmU6IDMsIHBvaW50czogMSB9LFxuICAgICAgICB7IGRpYWxvZ3VlQ2hvaWNlOiAnVGhpcyBpcyBob3cgSSBzcGVhayB3aXRoIGV2ZXJ5Ym9keSwgU2VyYWggSGlnaGZhdGUuIFNlZT8gSSBhbSByZWxheGluZyBhbHJlYWR5LicsIGRpYWxvZ3VlTmV4dExpbmU6IDQsIHBvaW50czogLTEgfV19LFxuICAgIHsgbGluZU51bWJlcjogMiwgbnBjTGluZTogJ1wiSXMgdGhhdCBzbz9cIiB0aGUgSGlnaGZhdGUgc21pcmtzLiBcIldlbGwsIHRoZW4gSSBzaG91bGQgYmUgb24gbXkgYmVzdCBnYW1lIHRoZW4uXCInLCByZXNwb25zZXM6IFxuICAgICAgICBbeyBkaWFsb2d1ZUNob2ljZTogJ1lvdSBhcmUgYWx3YXlzIGEgZm9ybWlkYWJsZSBGYWxzZWN1YmVzIG9wcG9uZW50LCB5b3VyIGdyYWNlLiBMZXQgdXMgcGxheS4nLCBkaWFsb2d1ZU5leHRMaW5lOiAzLCBwb2ludHM6IDEgfSxcbiAgICAgICAgeyBkaWFsb2d1ZUNob2ljZTogJ0kgY2FuIGdpdmUgeW91IGEgZmV3IHBvaW50ZXJzIGFmdGVyIHRoZSBnYW1lLCBTZXJhaCBIaWdoZmF0ZS4nLCBkaWFsb2d1ZU5leHRMaW5lOiA0LCBwb2ludHM6IDAgfV19LFxuICAgIHsgbGluZU51bWJlcjogMywgbnBjTGluZTogJ1wiVGhhbmsgeW91IGtpbmRseSxcIiBzaGUgc2F5cyBhbmQgc21pbGVzIHBvbGl0ZWx5LiBcIk1heSB0aGUgZGljZSBmYXZvciB5b3UsIFNlcmFoIFNvbWVib2R5LlwiJywgcmVzcG9uc2VzOiBcbiAgICAgICAgW3sgZGlhbG9ndWVDaG9pY2U6ICdNYXkgdGhlIGJldHRlciBibHVmZmVyIHdpbi4nLCBkaWFsb2d1ZU5leHRMaW5lOiA1LCBwb2ludHM6IDEgfSxcbiAgICAgICAgeyBkaWFsb2d1ZUNob2ljZTogYFdpdGggYWxsIGR1ZSByZXNwZWN0LCBJJ3ZlIGEgZmVlbGluZyB0aGF0IGx1Y2sgaXMgb24gbXkgc2lkZSB0b25pZ2h0LmAsIGRpYWxvZ3VlTmV4dExpbmU6IDUsIHBvaW50czogLTEgfV19LFxuICAgIHsgbGluZU51bWJlcjogNCwgbnBjTGluZTogYFwiSSBhbSBnbGFkIHlvdSBhcmUgaW4gYSBqb3lmdWwgbW9vZCwgU2VyYWggU29tZWJvZHksXCIgc2hlIHNheXMsIHZvaWNlIHN1ZGRlbmx5IHdhcm0uIFwiSXQncyBpbXBvcnRhbnQgZm9yIG1lIHRoYXQgeW91J3JlIGNvbWZvcnRhYmxlLlwiYCwgcmVzcG9uc2VzOiBcbiAgICAgICAgW3sgZGlhbG9ndWVDaG9pY2U6IGBMaWtld2lzZSwgeW91ciBncmFjZS4gTGV0IG1lIGtub3cgaWYgdGhlcmUncyBhbnkgd2F5IEkgY2FuIGFzc2lzdCB5b3UgdGhyb3VnaG91dCB0aGUgcmVjZXB0aW9uLmAsIGRpYWxvZ3VlTmV4dExpbmU6IDUsIHBvaW50czogMSB9LFxuICAgICAgICB7IGRpYWxvZ3VlQ2hvaWNlOiBgR3Jvd2luZyBmb25kIG9mIG1lLCB5b3VyIGdyYWNlPyBZb3UgaGF2ZW4ndCBzZWVuIG15IEZhbHNlY3ViZXMgc2tpbGwgeWV0LmAsIGRpYWxvZ3VlTmV4dExpbmU6IDUsIHBvaW50czogLTEgfV19LFxuICAgIHsgbGluZU51bWJlcjogNSwgbnBjTGluZTogYFwiTGV0IHVzIHBsYXksIHRoZW4uIFNoYWxsIHdlP1wiIHNoZSBzYXlzLCBnZXN0dXJpbmcgdG8gdGhlIHRhYmxlIGFuZCB0aGUgZGljZS5gLCByZXNwb25zZXM6IFtdfV0sXG4gICAgWydIaWdoZmF0ZVBvbGl0ZScsICdIaWdoZmF0ZU5ldXRyYWwnLCAnSGlnaGZhdGVCYW50ZXInXSxcbiAgICBwcm9sb2d1ZTJ4XG4pXG5sZXQgcHJvbG9ndWUyYiA9IG5ldyBzdG9yeUVsZW1lbnQoXG4gICAgJ2Zvcm0nLFxuICAgIFsnVGhlIEhpZ2hmYXRlIHN1YnRseSBub2RzIGluIHJldHVybiwgYW5kIHNtaWxlcyBpbiByZWNvZ25pdGlvbi4nLCAnW1BsZWFzZSBlbnRlciB5b3VyIG5hbWUuXSddLFxuICAgIHVuZGVmaW5lZCxcbiAgICBwcm9sb2d1ZTJjXG4pXG5sZXQgcHJvbG9ndWUyID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgWW91IHRha2UgYSBkZWVwIGJyZWF0aCwgYW5kIGFwcHJvYWNoIHRoZSB0YWxsIHdvbWFuIGluIHRoZSBsZWF0aGVyIGN1aXJhc3Mgb3ZlciBhIGxvbmcsIGludHJpY2F0ZSwgc2lsdmVyIHJvYmUuYCwgYFlvdSBkbyB5b3VyIGJlc3QgYm93IGluIGdyZWV0aW5ncywgYW5kIGFwcHJvYWNoIHRoZSBGYWxzZWN1YmVzIHRhYmxlLmAsIGBTaXggbWFyYmxlLCBmb3VyLXNpZGVzIHN0b25lcyBwYWludGVkIGJsYWNrLCBzaXQgYXQgZWl0aGVyIHNpZGUgb2YgdGhlIHRhYmxlLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBwcm9sb2d1ZTJiKVxubGV0IHByb2xvZ3VlMnkgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BZb3UgdHVybiBhd2F5LCB0byBnbyBhbmQgbWluZ2xlIHdpdGggdGhlIG90aGVyIGd1ZXN0cywgd2hlbiB0aGUgSGlnaGZhdGUncyBleWVzIG1lZXQgeW91cnMuYCwgYFdlbGwsIG5vIGdldHRpbmcgb3V0IG9mIGl0IG5vdy5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgcHJvbG9ndWUyKVxubGV0IHByb2xvZ3VlMWUgPSBuZXcgc3RvcnlFbGVtZW50KCdjaG9pY2UnLFxuICAgIFtgVGhlIEhpZ2hmYXRlIGJlY2tvbnMgYSBndWVzdCB0byBhcHByb2FjaCBoZXIgZm9yIGEgZ2FtZSBvZiBGYWxzZWN1YmVzLmAsIGBEbyB5b3UgZGFyZSBhcHByb2FjaCBoZXIgLSBhbmQgYmUgdGhlIGZpcnN0IGd1ZXN0IG9mIHRvZGF5J3MgcmVjZXB0aW9uIHRvIHBsYXkgdGhlIEhpZ2hmYXRlIGhlcnNlbGY/YF0sXG4gICAgW3tjaG9pY2VUZXh0OiBgSSBhcHByb2FjaCB0aGUgSGlnaGZhdGUgdG8gcGxheSBGYWxzZWN1YmVzLmAsXG4gICAgY2hvaWNlTW9kaWZpZXJzOiBudWxsLFxuICAgIGNob2ljZU5leHRTdG9yeTogcHJvbG9ndWUyfSxcbiAgICB7Y2hvaWNlVGV4dDogYEkgc3RheSBpbiB0aGUgcmVjZXB0aW9uIGhhbGwgYW5kIG1pbmdsZSB3aXRoIHRoZSBndWVzdHMuYCxcbiAgICBjaG9pY2VNb2RpZmllcnM6IG51bGwsXG4gICAgY2hvaWNlTmV4dFN0b3J5OiBwcm9sb2d1ZTJ5fV0sXG4gICAgdW5kZWZpbmVkKSBcbmxldCBwcm9sb2d1ZTFkID0gbmV3IHN0b3J5RWxlbWVudCgnZGVzY3JpcHRpb24nLFxuICAgIFtgVGhlIEhpZ2hmYXRlIGlzIGEgd29ybGQtZmFtb3VzIHBoaWxvc29waGVyLCBhbmQgdGhlIGxlYWRlciBvZiB0aGUgRmF0ZWQgUmVhbG0uYCwgYFRoZSBndWVzdHMsIGhvd2V2ZXIsIGNvdWxkbid0IGJlIGxlc3MgY29uY2VybmVkIHdpdGggcGhpbG9zb3BoeS5gLCBgTmVpdGhlciB0aGUgbW9ub2NsZXMgb2YgcmljaCB0cmFkZXJzLCBub3IgdGhlIGRlY29yYXRpdmUgbXVza2V0cyBvZiB0aGUgYWR2ZW50dXJlcnMsIGhpbnQgYXQgYW55IG90aGVyIGFnZW5kYSBiZXlvbmQgaW1wcmVzc2luZyB0aGUgSGlnaGZhdGUuYF0sXG4gICAgdW5kZWZpbmVkLFxuICAgIHByb2xvZ3VlMWUpXG5sZXQgcHJvbG9ndWUxYyA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFRoZSBob3N0LCB0aGUgSGlnaGZhdGUgaGVyc2VsZiwgcHJlc2VudHMgdGhlIGRpY2UsIGVhY2ggYSB3b3JrIG9mIGFydC5gLCBgQXMgdGhlIEhpZ2hmYXRlIG1vdmVzLCB0aGUgbG9uZyBzaWx2ZXIgcm9iZSB0aGF0IHNoZSB3ZWFycyBvdmVyIGEgbGVhdGhlciBjdWlyYXNzIGZsdXR0ZXJzIGluIHRoZSB3aW5kIG9mIHRoZSBtYXNzaXZlIHJlY2VwdGlvbiBoYWxsLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBwcm9sb2d1ZTFkKVxubGV0IHByb2xvZ3VlMWIgPSBuZXcgc3RvcnlFbGVtZW50KCdkZXNjcmlwdGlvbicsXG4gICAgW2BHdWVzdHMgd2VhciBub2JsZSBmaW5lcnkgYW5kIGFkdmVudHVyb3VzIGF0dGlyZSwgbWluZ2xpbmcgYnkgZ2FzIGxhbXBzLmAsIGBUaGV5IGNhcnJ5IGdvbGRlbiBtdXNrZXRzLCB0aGVpciBtdXN0YWNoZXMgdHdpcmxlZC5gLCBgVGhlIHJvb20gaXMgYWxpdmUgd2l0aCBnbGFzcyBjbGlua3MgYW5kIG11cm11cnMgYXMgdGhleSBwcmVwYXJlIHRvIHBsYXkgRmFsc2VjdWJlcywgYSBkaWNlIGdhbWUgcG9wdWxhciBhbW9uZyB0aGUgRmF0ZWQgUmVhbG0ncyBhZHZlbnR1cmluZyByaWNoLmBdLFxuICAgIHVuZGVmaW5lZCxcbiAgICBwcm9sb2d1ZTFjKVxubGV0IHByb2xvZ3VlMSA9IG5ldyBzdG9yeUVsZW1lbnQoJ2Rlc2NyaXB0aW9uJyxcbiAgICBbYFtTdW1tZXIgRXN0YXRlIG9mIHRoZSBIaWdoZmF0ZSwgbGVhZGVyIG9mIHRoZSBGYXRlZCBSZWFsbS5dYCwgYFBlcmNoZWQgb24gYSBoaWxsLCB0aGUgbWFub3Igb3Zlcmxvb2tzIHRoZSBjaXR5LiBJdHMgc3RvbmUgZmFjYWRlIGlzIGFkb3JuZWQgd2l0aCBjYXJ2aW5ncy5gLCBgSW5zaWRlLCB0aGUgcGFybG9yIGlzIHJpY2ggYW5kIHRleHR1cmVkLCB3aXRoIHZlbHZldCBjdXJ0YWlucyBmcmFtaW5nIHRhbGwgd2luZG93cy5gXSxcbiAgICB1bmRlZmluZWQsXG4gICAgcHJvbG9ndWUxYilcbi8vIGV4cG9ydFxubGV0IHNjcmlwdE9iamVjdHMgPSB7IHByb2xvZ3VlMSB9O1xuZXhwb3J0IHsgc3RvcnlFbGVtZW50LCBzY3JpcHRPYmplY3RzIH07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VwYXJhdG9yKHN0b3J5RWxlbWVudCwgcGxheWVyQ29uc2VxdWVuY2VzQXJyYXksIHN0b3J5VGVsbGVyRnVuY3Rpb24pIHtcbiAgICBsZXQgY29ycmVjdE5leHRTdG9yeUVsZW1lbnQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yeUVsZW1lbnQudGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocGxheWVyQ29uc2VxdWVuY2VzQXJyYXkuaW5jbHVkZXMoc3RvcnlFbGVtZW50LnRleHRbaV0uZGVwZW5kZW5jeSkpIHtcbiAgICAgICAgICAgIGNvcnJlY3ROZXh0U3RvcnlFbGVtZW50ID0gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29ycmVjdE5leHRTdG9yeUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgc3RvcnlUZWxsZXJGdW5jdGlvbihzdG9yeUVsZW1lbnQudGV4dFtjb3JyZWN0TmV4dFN0b3J5RWxlbWVudF0ubmV4dFN0b3J5RWxlbWVudCk7XG4gICAgfVxufSIsIi8vIGltcG9ydDogc3RvcnlFbGVtZW50LCBzdG9yeUVsZW1lbnRzLCBodWQsIGdyYWJJdGVtLCBjaGFyMSwgY2xhc3NlcywgbGlzdEVuZW1pZXMsIG1vdmVPbiwgZW5lbWllcyBhcnJheSwgZW5lbXkgb2JqZWN0c1xuaW1wb3J0IHNlcGFyYXRvciBmcm9tICcuL2NvbXBfc2VwYXJhdG9yJztcbmltcG9ydCB7XG4gICAgcGxheWVySGFuZCwgb3Bwb25lbnRIYW5kLCBjdXJyZW50QmlkLCBhY2N1c2F0aW9uLCBleGFtcGxlTGluZXMsIGRpZTEsIGRpZTIsIGRpZTMsIGRpZTQsIGRpZTUsIGRpZTYsIHN0YXJ0RGljZUdhbWUsIGZhbHNlQ3ViZXMsIHJvbGw2ZDRQbGF5ZXIsIHJvbGw2ZDRPcHBvbmVudCwgcm9sbDFkNCwgcm9sbFBoYXNlLCBiaWRQaGFzZSwgZmlmdHlGaWZ0eSwgb25lVGhpcmQsIG9wcG9uZW50UmVzcG9uc2UsIG9wcG9uZW50QmlkLCBjYWxsT3V0LCBnYW1lRW5kXG59IGZyb20gJy4vY29tcF9kaWNlX2dhbWUnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBcbiAgICB0b3BfYmFyLFxuICAgIGxvZ193aW5kb3csXG4gICAgbWFpbl93aW5kb3csXG4gICAgaW1hZ2Vfd2luZG93LFxuICAgIG1lbnVfd2luZG93LFxuICAgIGJ1dHRvbl93aW5kb3csXG4gICAgYXR0YWNrX2J1dHRvbixcbiAgICBzcGVjaWFsX2J1dHRvbixcbiAgICBpbnZlbnRvcnlfYnV0dG9uLFxuICAgIHN0YXRzX2J1dHRvbixcbiAgICBkaWFsb2dBbmltYXRpb25FbmRcbn0gZnJvbSAnLi9jb21wX2h1ZCc7XG5pbXBvcnQgeyBlbmVtaWVzLCBsaXN0RW5lbWllcywgc3dpdGNoQXR0YWNrIH0gZnJvbSBcIi4vY29tcF9iYXR0bGVfZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBncmFiSXRlbSwgcGxheWVyR29sZCwgYWRkR29sZCB9IGZyb20gJy4vY29tcF9pbnZlbnRvcnlfc3lzdGVtJztcbmltcG9ydCB7XG4gICAgQ2hhcmFjdGVyLFxuICAgIE1vbnN0ZXIsXG4gICAgSmFuaXRvcixcbiAgICBBY2NvdW50YW50LFxuICAgIERhbmNlcixcbiAgICBjaGFyMSxcbiAgICBtZW51VXBkYXRlcixcbiAgICBOUENNYWtlcixcbiAgICBOUENSb2xlXG59IGZyb20gJy4vY29tcF9vYmplY3RzX2FuZF9tZXRob2RzJztcbi8vIGltcG9ydCB7ICBzdG9yeUVsZW1lbnRzIH0gZnJvbSAnLi9jb21wX3N0b3J5X29iamVjdHMnO1xuaW1wb3J0IHsgc3RvcnlFbGVtZW50LCBzY3JpcHRPYmplY3RzIH0gZnJvbSAnLi9jb21wX3NjcmlwdCc7XG5pbXBvcnQgeyBSYWNlLCByYWNlcyB9IGZyb20gJy4vY29tcF9yYWNlcyc7XG5jb25zdCBldmVudEVtaXR0ZXIgPSByZXF1aXJlKCcuL2NvbXBfZXZlbnRfZW1pdHRlcicpO1xuLy8gZ2FtZS1sb25nIHZhcnNcbmxldCBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMgPSBbXTtcbmxldCBpc1BsYXllckV4cGxvcmluZyA9IGZhbHNlO1xubGV0IENob3NlbiA9IHt9O1xuLy8gdXBkYXRlIGNob3NlblxuZnVuY3Rpb24gdXBkYXRlQ2hvc2VuKCkge1xuICAgIGxldCBhbGxTdG9yeUVsZW1lbnRzID0gc3RvcnlFbGVtZW50LmdldEFsbEluc3RhbmNlcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsU3RvcnlFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzd2l0Y2ggKGFsbFN0b3J5RWxlbWVudHNbaV0udHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZGVzY3JpcHRpb24nOlxuICAgICAgICAgICAgY2FzZSAnaXRlbSc6XG4gICAgICAgICAgICBjYXNlICdiYXR0bGUnOlxuICAgICAgICAgICAgY2FzZSAnZXhwbG9yYXRpb24nOlxuICAgICAgICAgICAgY2FzZSAncmFuZG9tRW5jb3VudGVyJzpcbiAgICAgICAgICAgIGNhc2UgJ2Zvcm0nOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXBsYWNlQWxsKCdDaG9zZW5OYW1lJywgQ2hvc2VuLm5hbWUpOyBcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlcGxhY2VBbGwoJ0Nob3NlblN1cm5hbWUnLCBDaG9zZW4uc3VybmFtZSk7IFxuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVwbGFjZUFsbCgneGUnLCBDaG9zZW4uaGUpOyBcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlcGxhY2VBbGwoJ3hpcycsIENob3Nlbi5oaXMpOyBcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlcGxhY2VBbGwoJ3hpbScsIENob3Nlbi5oaW0pOyBcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlcGxhY2VBbGwoJ3hpbXNlbGYnLCBDaG9zZW4uaGltc2VsZik7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Nob2ljZSc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlcGxhY2VBbGwoJ0Nob3Nlbk5hbWUnLCBDaG9zZW4ubmFtZSk7IFxuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVwbGFjZUFsbCgnQ2hvc2VuU3VybmFtZScsIENob3Nlbi5zdXJuYW1lKTsgXG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXBsYWNlQWxsKCd4ZScsIENob3Nlbi5oZSk7IFxuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVwbGFjZUFsbCgneGlzJywgQ2hvc2VuLmhpcyk7IFxuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVwbGFjZUFsbCgneGltJywgQ2hvc2VuLmhpbSk7IFxuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVwbGFjZUFsbCgneGltc2VsZicsIENob3Nlbi5oaW1zZWxmKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYWxsU3RvcnlFbGVtZW50c1tpXS5tb2RpZmllcnMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS5tb2RpZmllcnNba10uY2hvaWNlVGV4dCA9IGFsbFN0b3J5RWxlbWVudHNbaV0ubW9kaWZpZXJzW2tdLmNob2ljZVRleHQucmVwbGFjZUFsbCgnQ2hvc2VuTmFtZScsIENob3Nlbi5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS5tb2RpZmllcnNba10uY2hvaWNlVGV4dCA9IGFsbFN0b3J5RWxlbWVudHNbaV0ubW9kaWZpZXJzW2tdLmNob2ljZVRleHQucmVwbGFjZUFsbCgnQ2hvc2VuU3VybmFtZScsIENob3Nlbi5zdXJuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS5tb2RpZmllcnNba10uY2hvaWNlVGV4dCA9IGFsbFN0b3J5RWxlbWVudHNbaV0ubW9kaWZpZXJzW2tdLmNob2ljZVRleHQucmVwbGFjZUFsbCgneGUnLCBDaG9zZW4uaGUpO1xuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLm1vZGlmaWVyc1trXS5jaG9pY2VUZXh0ID0gYWxsU3RvcnlFbGVtZW50c1tpXS5tb2RpZmllcnNba10uY2hvaWNlVGV4dC5yZXBsYWNlQWxsKCd4aXMnLCBDaG9zZW4uaGlzKTtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS5tb2RpZmllcnNba10uY2hvaWNlVGV4dCA9IGFsbFN0b3J5RWxlbWVudHNbaV0ubW9kaWZpZXJzW2tdLmNob2ljZVRleHQucmVwbGFjZUFsbCgneGltJywgQ2hvc2VuLmhpbSk7XG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0ubW9kaWZpZXJzW2tdLmNob2ljZVRleHQgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLm1vZGlmaWVyc1trXS5jaG9pY2VUZXh0LnJlcGxhY2VBbGwoJ3hpbXNlbGYnLCBDaG9zZW4uaGltc2VsZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGlhbG9ndWUnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5ucGNMaW5lID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLm5wY0xpbmUucmVwbGFjZUFsbCgnQ2hvc2VuTmFtZScsIENob3Nlbi5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLm5wY0xpbmUgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ubnBjTGluZS5yZXBsYWNlQWxsKCdDaG9zZW5TdXJuYW1lJywgQ2hvc2VuLnN1cm5hbWUpOyBcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLm5wY0xpbmUgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ubnBjTGluZS5yZXBsYWNlQWxsKCd4ZScsIENob3Nlbi5oZSk7IFxuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ubnBjTGluZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5ucGNMaW5lLnJlcGxhY2VBbGwoJ3hpcycsIENob3Nlbi5oaXMpO1xuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ubnBjTGluZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5ucGNMaW5lLnJlcGxhY2VBbGwoJ3hpbScsIENob3Nlbi5oaW0pO1xuICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ubnBjTGluZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5ucGNMaW5lLnJlcGxhY2VBbGwoJ3hpbXNlbGYnLCBDaG9zZW4uaGltc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlc1trXS5kaWFsb2d1ZUNob2ljZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXNba10uZGlhbG9ndWVDaG9pY2UucmVwbGFjZUFsbCgnQ2hvc2VuTmFtZScsIENob3Nlbi5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXNba10uZGlhbG9ndWVDaG9pY2UgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzW2tdLmRpYWxvZ3VlQ2hvaWNlLnJlcGxhY2VBbGwoJ0Nob3NlblN1cm5hbWUnLCBDaG9zZW4uc3VybmFtZSk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlc1trXS5kaWFsb2d1ZUNob2ljZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXNba10uZGlhbG9ndWVDaG9pY2UucmVwbGFjZUFsbCgneGUnLCBDaG9zZW4uaGUpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXNba10uZGlhbG9ndWVDaG9pY2UgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzW2tdLmRpYWxvZ3VlQ2hvaWNlLnJlcGxhY2VBbGwoJ3hpcycsIENob3Nlbi5oaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlc1trXS5kaWFsb2d1ZUNob2ljZSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXNba10uZGlhbG9ndWVDaG9pY2UucmVwbGFjZUFsbCgneGltJywgQ2hvc2VuLmhpbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzW2tdLmRpYWxvZ3VlQ2hvaWNlID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlc1trXS5kaWFsb2d1ZUNob2ljZS5yZXBsYWNlQWxsKCd4aW1zZWxmJywgQ2hvc2VuLmhpbXNlbGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29uc2VxdWVuY2UnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dFtrXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHRba10ucmVwbGFjZUFsbCgnQ2hvc2VuTmFtZScsIENob3Nlbi5uYW1lKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0uY29uc2VxdWVuY2VUZXh0W2tdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dFtrXS5yZXBsYWNlQWxsKCdDaG9zZW5TdXJuYW1lJywgQ2hvc2VuLnN1cm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dFtrXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHRba10ucmVwbGFjZUFsbCgneGUnLCBDaG9zZW4uaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dFtrXSA9IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHRba10ucmVwbGFjZUFsbCgneGlzJywgQ2hvc2VuLmhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0uY29uc2VxdWVuY2VUZXh0W2tdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLmNvbnNlcXVlbmNlVGV4dFtrXS5yZXBsYWNlQWxsKCd4aW0nLCBDaG9zZW4uaGltKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHRba10gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0uY29uc2VxdWVuY2VUZXh0W2tdLnJlcGxhY2VBbGwoJ3hpbXNlbGYnLCBDaG9zZW4uaGltc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyB1cGRhdGUgY29uY2VwdFxuZnVuY3Rpb24gdXBkYXRlQ29uY2VwdCgpIHtcbiAgICBsZXQgYWxsU3RvcnlFbGVtZW50cyA9IHN0b3J5RWxlbWVudC5nZXRBbGxJbnN0YW5jZXMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFN0b3J5RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3dpdGNoIChhbGxTdG9yeUVsZW1lbnRzW2ldLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ2l0ZW0nOlxuICAgICAgICAgICAgY2FzZSAnYmF0dGxlJzpcbiAgICAgICAgICAgIGNhc2UgJ2Nob2ljZSc6XG4gICAgICAgICAgICBjYXNlICdleHBsb3JhdGlvbic6XG4gICAgICAgICAgICBjYXNlICdyYW5kb21FbmNvdW50ZXInOlxuICAgICAgICAgICAgY2FzZSAnZm9ybSc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlcGxhY2VBbGwoJ0p1c3RpY2UnLCBjaGFyMS5zcGlyaXRDb25jZXB0LmNvbmNlcHQpOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkaWFsb2d1ZSc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLm5wY0xpbmUgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ubnBjTGluZS5yZXBsYWNlQWxsKCdKdXN0aWNlJywgY2hhcjEuc3Bpcml0Q29uY2VwdC5jb25jZXB0KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzW2tdLmRpYWxvZ3VlQ2hvaWNlID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlc3BvbnNlc1trXS5kaWFsb2d1ZUNob2ljZS5yZXBsYWNlQWxsKCdKdXN0aWNlJywgY2hhcjEuc3Bpcml0Q29uY2VwdC5jb25jZXB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbnNlcXVlbmNlJzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHQubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHRba10gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0uY29uc2VxdWVuY2VUZXh0W2tdLnJlcGxhY2VBbGwoJ0p1c3RpY2UnLCBjaGFyMS5zcGlyaXRDb25jZXB0LmNvbmNlcHQpOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIHVwZGF0ZSBzdG9yeUVsZW1lbnRzXG5mdW5jdGlvbiBuZXdVcGRhdGVOYW1lcyhhbnN3ZXIpIHtcbiAgICBsZXQgYWxsU3RvcnlFbGVtZW50cyA9IHN0b3J5RWxlbWVudC5nZXRBbGxJbnN0YW5jZXMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFN0b3J5RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3dpdGNoIChhbGxTdG9yeUVsZW1lbnRzW2ldLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ2l0ZW0nOlxuICAgICAgICAgICAgY2FzZSAnYmF0dGxlJzpcbiAgICAgICAgICAgIGNhc2UgJ2Nob2ljZSc6XG4gICAgICAgICAgICBjYXNlICdleHBsb3JhdGlvbic6XG4gICAgICAgICAgICBjYXNlICdyYW5kb21FbmNvdW50ZXInOlxuICAgICAgICAgICAgY2FzZSAnZm9ybSc6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLnJlcGxhY2VBbGwoJ1NvbWVib2R5JywgYW5zd2VyKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGlhbG9ndWUnOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5ucGNMaW5lID0gYWxsU3RvcnlFbGVtZW50c1tpXS50ZXh0W2pdLm5wY0xpbmUucmVwbGFjZUFsbCgnU29tZWJvZHknLCBhbnN3ZXIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5yZXNwb25zZXNba10uZGlhbG9ndWVDaG9pY2UgPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0ucmVzcG9uc2VzW2tdLmRpYWxvZ3VlQ2hvaWNlLnJlcGxhY2VBbGwoJ1NvbWVib2R5JywgYW5zd2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbnNlcXVlbmNlJzpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHQubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFN0b3J5RWxlbWVudHNbaV0udGV4dFtqXS5jb25zZXF1ZW5jZVRleHRba10gPSBhbGxTdG9yeUVsZW1lbnRzW2ldLnRleHRbal0uY29uc2VxdWVuY2VUZXh0W2tdLnJlcGxhY2VBbGwoJ1NvbWVib2R5JywgYW5zd2VyKTsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWVudV93aW5kb3cudGV4dENvbnRlbnQgPSBtZW51X3dpbmRvdy50ZXh0Q29udGVudC5yZXBsYWNlKCdTb21lYm9keScsIGFuc3dlcik7XG59XG4vLyB0aGUgZnVuY3Rpb24gaXMgQUxXQVlTIHN0YXRpY1xuLy8gZnVuY3Rpb24gc3RvcnkodHlwZSwgdGV4dCwgbW9kaWZpZXJzKVxuZnVuY3Rpb24gc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50KSB7XG4gICAgd2hpbGUgKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIHttYWluX3dpbmRvdy5yZW1vdmVDaGlsZChtYWluX3dpbmRvdy5maXJzdENoaWxkKX07XG4gICAgaWYgKHN0b3J5RWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzdG9yeUVsZW1lbnQudHlwZSA9PSAnc2VwYXJhdG9yJykge1xuICAgICAgICAgICAgc2VwYXJhdG9yKHN0b3J5RWxlbWVudCwgbmV3UGxheWVyQ29uc2VxdWVuY2VzLCBzdG9yeVRlbGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc3RvcnlFbGVtZW50WzBdID09ICdzdGF0cycgfHwgc3RvcnlFbGVtZW50WzBdID09ICdnb2xkJykge1xuICAgICAgICAgICAgICAgIGlmIChzdG9yeUVsZW1lbnRbMF0gPT0gJ3N0YXRzJykge1xuICAgICAgICAgICAgICAgICAgICBnaXZlU3RhdHMoc3RvcnlFbGVtZW50WzFdLCBzdG9yeUVsZW1lbnRbMl0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZEdvbGQoc3RvcnlFbGVtZW50WzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzdG9yeUVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcnlFbGVtZW50LnR5cGUgIT09ICdkaWFsb2d1ZScgJiYgc3RvcnlFbGVtZW50LnR5cGUgIT09ICdjb25zZXF1ZW5jZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGbGlwcGVyKHN0b3J5RWxlbWVudCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RvcnlFbGVtZW50LnR5cGUgPT0gJ2RpYWxvZ3VlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGlhbG9ndWVNYWtlcihzdG9yeUVsZW1lbnQsIDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc2VxdWVuY2VTaG93ZXIoc3RvcnlFbGVtZW50LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aWxlVHJpZ2dlcnMod2hpY2hUaWxlSXNQbGF5ZXJPbiwgY3VycmVudEV4cGxvcmF0aW9uU3RvcnlFbGVtZW50KTtcbiAgICB9XG59XG4vLy0tLSBzdXBwbGVtZW50YXJ5IGZ1bmN0aW9ucyAtLS1cbi8vIG5ldyBjb250aW51ZSBidXR0b24gb3BlcmF0b3JcbmxldCBhbm5vdW5jZW1lbnQ7XG5mdW5jdGlvbiB0ZXh0RmxpcHBlcihzdG9yeUVsZW1lbnQsIGxvb3AsIHN0eWxlKSB7XG4gICAgaWYgKHN0b3J5RWxlbWVudC50eXBlID09ICdyYW5kb21FbmNvdW50ZXInIHx8IHN0b3J5RWxlbWVudC5tb2RpZmllcnMgPT0gJ2V4cGxvcmF0aW9uRXZlbnQnIHx8IHN0b3J5RWxlbWVudC5uZXh0U3RvcnlFbGVtZW50ID09ICdleHBsb3JhdGlvbkV2ZW50JykgeyBtb3ZlT24gPSBmYWxzZTsgfVxuICAgIGxldCBzdG9yeVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdG9yeVBhcmFncmFwaC50ZXh0Q29udGVudCA9IHN0b3J5RWxlbWVudC50ZXh0W2xvb3BdO1xuICAgIGlmIChzdHlsZSA9PSAneWVsbG93JykgeyBzdG9yeVBhcmFncmFwaC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6eWVsbG93OycpOyB9XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoc3RvcnlQYXJhZ3JhcGgpO1xuICAgIGlmIChsb29wIDwgc3RvcnlFbGVtZW50LnRleHQubGVuZ3RoKSB7XG4gICAgICAgIGxldCBjb250aW51ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb250aW51ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbGljayBoZXJlIHRvIGNvbnRpbnVlLic7XG4gICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGNvbnRpbnVlQnV0dG9uKTtcbiAgICAgICAgY29udGludWVCdXR0b24uZm9jdXMoKTtcbiAgICAgICAgY29udGludWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsb29wKys7XG4gICAgICAgICAgICBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZChjb250aW51ZUJ1dHRvbik7XG4gICAgICAgICAgICB0ZXh0RmxpcHBlcihzdG9yeUVsZW1lbnQsIGxvb3ApO1xuICAgICAgICAgICAgaWYgKGxvb3AgPT0gc3RvcnlFbGVtZW50LnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzdG9yeUVsZW1lbnQudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdmYWxzZWN1YmVzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3J5RmFsc2VjdWJlcyhzdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdG9yeUVsZW1lbnQubW9kaWZpZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaChzdG9yeUVsZW1lbnQubW9kaWZpZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3J5VGVsbGVyKHN0b3J5RWxlbWVudC5uZXh0U3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdiYXR0bGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmF0dGxlU3RhcnRlcihzdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhYkl0ZW0oc3RvcnlFbGVtZW50Lm1vZGlmaWVycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbm5vdW5jZW1lbnQgPSB7IHRleHQ6IFtgQWNxdWlyZWQgJHtzdG9yeUVsZW1lbnQubW9kaWZpZXJzLm5hbWV9IWBdLCB0eXBlOiAnaXRlbUFjcXVpcmVkJywgbmV4dFN0b3J5RWxlbWVudDogc3RvcnlFbGVtZW50Lm5leHRTdG9yeUVsZW1lbnQgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGbGlwcGVyKGFubm91bmNlbWVudCwgMCwgJ3llbGxvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2l0ZW1BY3F1aXJlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yeVRlbGxlcihhbm5vdW5jZW1lbnQubmV4dFN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hvaWNlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Nob2ljZShzdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2V4cGxvcmF0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V4cGxvcmF0aW9uKHN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1BsYXllckV4cGxvcmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmFuZG9tRW5jb3VudGVyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChtYWluX3dpbmRvdy5maXJzdENoaWxkKSB7IG1haW5fd2luZG93LnJlbW92ZUNoaWxkKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmhhc1BsYXllclNlZW5NZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlRXZlbnRzU2VlbisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZU9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2lyY2xlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRpbGUgPSB3aGljaFRpbGVJc1BsYXllck9uKGNpcmNsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyNjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvb3BlZFRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGlsZSR7aX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9vcGVkVGlsZS5pZCA9PSBjdXJyZW50VGlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9vcGVkVGlsZS5oYXNDaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29wZWRUaWxlLnJlbW92ZUNoaWxkKGxvb3BlZFRpbGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yeVRlbGxlcihzdG9yeUVsZW1lbnQubmV4dFN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5kRXhwbG9yYXRpb24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGxvcmF0aW9uQm9hcmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlX3dpbmRvdy5yZW1vdmVDaGlsZChib2FyZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaW1hZ2Vfd2luZG93LmZpcnN0Q2hpbGQpIHsgaW1hZ2Vfd2luZG93LnJlbW92ZUNoaWxkKGltYWdlX3dpbmRvdy5maXJzdENoaWxkKSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcnlUZWxsZXIoc3RvcnlFbGVtZW50Lm5leHRTdG9yeUVsZW1lbnQpOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Zvcm0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Rm9ybU1ha2VyKHN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0b3J5RWxlbWVudC5tb2RpZmllcnMgPT0gJ2V4cGxvcmF0aW9uRXZlbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVPbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdG9yeUVsZW1lbnQubW9kaWZpZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3J5RWxlbWVudC5tb2RpZmllcnNbMF0gPT0gJ3N0YXRzJyB8fCBzdG9yeUVsZW1lbnQubW9kaWZpZXJzWzBdID09ICdnb2xkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3J5RWxlbWVudC5tb2RpZmllcnNbMF0gPT0gJ3N0YXRzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpdmVTdGF0cyhzdG9yeUVsZW1lbnQubW9kaWZpZXJzWzFdLCBzdG9yeUVsZW1lbnQubW9kaWZpZXJzWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkR29sZChzdG9yeUVsZW1lbnQubW9kaWZpZXJzWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4vLyBjb25zZXF1ZW5jZSBmdW5jdGlvblxuZnVuY3Rpb24gY29uc2VxdWVuY2VTaG93ZXIoc3RvcnlFbGVtZW50LCBsaW5lKSB7XG4gICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBjb3JyZWN0Q29uc2VxdWVuY2UgPSBudWxsO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcnlFbGVtZW50LnRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG5ld1BsYXllckNvbnNlcXVlbmNlcy5pbmNsdWRlcyhzdG9yeUVsZW1lbnQudGV4dFtpXS5kZXBlbmRlbmN5KSkge1xuICAgICAgICAgICAgY29ycmVjdENvbnNlcXVlbmNlID0gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29ycmVjdENvbnNlcXVlbmNlICE9PSBudWxsKSB7XG4gICAgICAgIGVudHJ5LnRleHRDb250ZW50ID0gc3RvcnlFbGVtZW50LnRleHRbY29ycmVjdENvbnNlcXVlbmNlXS5jb25zZXF1ZW5jZVRleHRbbGluZV07XG4gICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGVudHJ5KTtcbiAgICAgICAgaWYgKGxpbmUgPCBzdG9yeUVsZW1lbnQudGV4dFtjb3JyZWN0Q29uc2VxdWVuY2VdLmNvbnNlcXVlbmNlVGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBjb250aW51ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY29udGludWVCdXR0b24udGV4dENvbnRlbnQgPSAnQ2xpY2sgaGVyZSB0byBjb250aW51ZS4nO1xuICAgICAgICAgICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoY29udGludWVCdXR0b24pO1xuICAgICAgICAgICAgY29udGludWVCdXR0b24uZm9jdXMoKTtcbiAgICAgICAgICAgIGNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxpbmUrKztcbiAgICAgICAgICAgICAgICBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZChjb250aW51ZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgY29uc2VxdWVuY2VTaG93ZXIoc3RvcnlFbGVtZW50LCBsaW5lKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmUgPT0gc3RvcnlFbGVtZW50LnRleHRbY29ycmVjdENvbnNlcXVlbmNlXS5jb25zZXF1ZW5jZVRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdG9yeVRlbGxlcihzdG9yeUVsZW1lbnQubmV4dFN0b3J5RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBzdG9yeVRlbGxlcihzdG9yeUVsZW1lbnQubmV4dFN0b3J5RWxlbWVudCk7XG4gICAgfVxufVxuLy8gbmV3IGRpYWxvZ3VlIGZ1bmN0aW9uXG4vLyBlYWNoIGNvbnZlcnNhdGlvbiBpcyBub3QgbGlrZSBhIGRpYWxvZ3VlIHRyZWUgaW4gYSB2aWRlb2dhbWUsIGJ1dCBhIHNsaWRpbmcgd2F0ZXJmYWxsLlxubGV0IHJlbGF0aW9uc2hpcE1ldGVyID0gMDtcbmZ1bmN0aW9uIG5ld0RpYWxvZ3VlTWFrZXIoc3RvcnlFbGVtZW50LCBsaW5lKSB7XG4gICAgbGV0IG5wY0RpYWxvZ3VlTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBucGNEaWFsb2d1ZUxpbmUudGV4dENvbnRlbnQgPSBzdG9yeUVsZW1lbnQudGV4dFtsaW5lXS5ucGNMaW5lO1xuICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKG5wY0RpYWxvZ3VlTGluZSk7XG4gICAgaWYgKGxpbmUgIT09IHN0b3J5RWxlbWVudC50ZXh0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgc3RvcnlFbGVtZW50LnRleHRbbGluZV0ucmVzcG9uc2VzLmZvckVhY2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHJlc3BvbnNlQnV0dG9uLnRleHRDb250ZW50ID0gcmVzcG9uc2UuZGlhbG9ndWVDaG9pY2U7XG4gICAgICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZChyZXNwb25zZUJ1dHRvbik7XG4gICAgICAgICAgICByZXNwb25zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nob2ljZUJ1dHRvbicpO1xuICAgICAgICAgICAgcmVzcG9uc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRpYWxvZ3VlQnV0dG9ucyA9IG1haW5fd2luZG93LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRpYWxvZ3VlQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsZXQgeW91ckxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgeW91ckxpbmUudGV4dENvbnRlbnQgPSBgXCIke3Jlc3BvbnNlLmRpYWxvZ3VlQ2hvaWNlfVwiYDtcbiAgICAgICAgICAgICAgICBtYWluX3dpbmRvdy5hcHBlbmRDaGlsZCh5b3VyTGluZSk7XG4gICAgICAgICAgICAgICAgcmVsYXRpb25zaGlwTWV0ZXIgPSByZWxhdGlvbnNoaXBNZXRlciArIHJlc3BvbnNlLnBvaW50cztcbiAgICAgICAgICAgICAgICBuZXdEaWFsb2d1ZU1ha2VyKHN0b3J5RWxlbWVudCwgcmVzcG9uc2UuZGlhbG9ndWVOZXh0TGluZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyZWxhdGlvbnNoaXBNZXRlciA8PSAtMikge1xuICAgICAgICAgICAgbmV3UGxheWVyQ29uc2VxdWVuY2VzLnB1c2goc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1syXSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVsYXRpb25zaGlwTWV0ZXIgPCAyKSB7XG4gICAgICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaChzdG9yeUVsZW1lbnQubW9kaWZpZXJzWzFdKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZWxhdGlvbnNoaXBNZXRlciA+PSAyKSB7XG4gICAgICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaChzdG9yeUVsZW1lbnQubW9kaWZpZXJzWzBdKTtcbiAgICAgICAgfVxuICAgICAgICByZWxhdGlvbnNoaXBNZXRlciA9IDA7XG4gICAgICAgIGxldCBjb250aW51ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb250aW51ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbGljayBoZXJlIHRvIGNvbnRpbnVlLic7XG4gICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGNvbnRpbnVlQnV0dG9uKTtcbiAgICAgICAgY29udGludWVCdXR0b24uZm9jdXMoKTtcbiAgICAgICAgY29udGludWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzdG9yeVRlbGxlcihzdG9yeUVsZW1lbnQubmV4dFN0b3J5RWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIG5ldyBjaG9pY2UgZnVuY3Rpb25cbmZ1bmN0aW9uIG5ld0Nob2ljZShzdG9yeUVsZW1lbnQpIHtcbiAgICBzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmZvckVhY2goKHRoaXNDaG9pY2UpID0+IHtcbiAgICAgICAgbGV0IGNob2ljZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjaG9pY2VCdXR0b24udGV4dENvbnRlbnQgPSB0aGlzQ2hvaWNlLmNob2ljZVRleHQ7XG4gICAgICAgIGNob2ljZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY2hvaWNlQnV0dG9uJyk7XG4gICAgICAgIG1haW5fd2luZG93LmFwcGVuZENoaWxkKGNob2ljZUJ1dHRvbik7XG4gICAgICAgIGNob2ljZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzKTtcbiAgICAgICAgICAgIGlmICh0aGlzQ2hvaWNlLmNob2ljZU1vZGlmaWVycyA9PSAnY2xhc3NXcmFpdGgnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGNoYXIxLCBKYW5pdG9yLnByb3RvdHlwZSk7XG4gICAgICAgICAgICAgICAgSmFuaXRvci5jYWxsKGNoYXIxLCBjaGFyMS5uYW1lLCAwLCAxMCwgMjAsIDEwMCwgJ05vcm1hbCBBdHRhY2snLCAnJywgJycsICcnLCBbXSk7XG4gICAgICAgICAgICAgICAgbWVudV93aW5kb3cudGV4dENvbnRlbnQgPSBtZW51X3dpbmRvdy50ZXh0Q29udGVudC5yZXBsYWNlKCdZb3VyIGNsYXNzIGlzIHVua25vd24uJywgJ1lvdSBhcmUgYSBXcmFpdGguJyk7XG4gICAgICAgICAgICAgICAgc3BlY2lhbF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHN3aXRjaEF0dGFjayhjaGFyMSkgfSk7XG4gICAgICAgICAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoJ1dyYWl0aCcpOyAgICBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpc0Nob2ljZS5jaG9pY2VNb2RpZmllcnMgPT0gJ2NsYXNzUG9sdGVyZ2Vpc3QnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGNoYXIxLCBBY2NvdW50YW50LnByb3RvdHlwZSk7XG4gICAgICAgICAgICAgICAgQWNjb3VudGFudC5jYWxsKGNoYXIxLCBjaGFyMS5uYW1lLCAwLCAxMCwgMjAsIDEwMCwgJ05vcm1hbCBBdHRhY2snLCAnJywgJycsICcnLCBbXSk7XG4gICAgICAgICAgICAgICAgbWVudV93aW5kb3cudGV4dENvbnRlbnQgPSBtZW51X3dpbmRvdy50ZXh0Q29udGVudC5yZXBsYWNlKCdZb3VyIGNsYXNzIGlzIHVua25vd24uJywgJ1lvdSBhcmUgYSBQb2x0ZWdlaXN0LicpO1xuICAgICAgICAgICAgICAgIHNwZWNpYWxfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBzd2l0Y2hBdHRhY2soY2hhcjEpIH0pOyAgICBcbiAgICAgICAgICAgICAgICBldmVudEVtaXR0ZXIuZW1pdCgnUG9sdGVyZ2Vpc3QnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpc0Nob2ljZS5jaG9pY2VNb2RpZmllcnMgPT0gJ2NsYXNzR3VhcmRpYW5TcGlyaXQnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGNoYXIxLCBEYW5jZXIucHJvdG90eXBlKTtcbiAgICAgICAgICAgICAgICBEYW5jZXIuY2FsbChjaGFyMSwgY2hhcjEubmFtZSwgMCwgMTAsIDIwLCAxMDAsICdOb3JtYWwgQXR0YWNrJywgJycsICcnLCAnJywgW10pO1xuICAgICAgICAgICAgICAgIG1lbnVfd2luZG93LnRleHRDb250ZW50ID0gbWVudV93aW5kb3cudGV4dENvbnRlbnQucmVwbGFjZSgnWW91ciBjbGFzcyBpcyB1bmtub3duLicsICdZb3UgYXJlIGEgR3VhcmRpYW4gU3Bpcml0LicpO1xuICAgICAgICAgICAgICAgIHNwZWNpYWxfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBzd2l0Y2hBdHRhY2soY2hhcjEpIH0pOyAgIFxuICAgICAgICAgICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KCdHdWFyZGlhblNwaXJpdCcpOyAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpc0Nob2ljZS5jaG9pY2VNb2RpZmllcnMgPT0gJ3JhY2VSZWFsbWVyJykge1xuICAgICAgICAgICAgICAgIGNoYXIxLnJhY2UgPSByYWNlcy5SZWFsbWVyO1xuICAgICAgICAgICAgICAgIG1lbnVfd2luZG93LnRleHRDb250ZW50ID0gbWVudV93aW5kb3cudGV4dENvbnRlbnQucmVwbGFjZSgnIFlvdXIgYXJtb3IgY2xhc3MnLCAnIEluIGxpZmUsIHlvdSB3ZXJlIGEgUmVhbG1lci4gWW91ciBhcm1vciBjbGFzcycpO1xuICAgICAgICAgICAgICAgIGNoYXIxLmN1cnJlbnRIUCArPSBjaGFyMS5yYWNlLnJhY2VIUEJvbnVzO1xuICAgICAgICAgICAgICAgIGNoYXIxLm1heEhQICs9IGNoYXIxLnJhY2UucmFjZUhQQm9udXM7XG4gICAgICAgICAgICAgICAgY2hhcjEuYXJtb3JDbGFzcyArPSBjaGFyMS5yYWNlLnJhY2VBcm1vckJvbnVzO1xuICAgICAgICAgICAgICAgIG1lbnVVcGRhdGVyKCk7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXRzX3JhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHNfcmFjZScpO1xuICAgICAgICAgICAgICAgIHN0YXRzX3JhY2UudGV4dENvbnRlbnQgPSAnSW4gbGlmZSwgeW91IHdlcmUgYSBSZWFsbWVyLidcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpc0Nob2ljZS5jaG9pY2VNb2RpZmllcnMgPT0gJ3JhY2VNb3J0YXInKSB7XG4gICAgICAgICAgICAgICAgY2hhcjEucmFjZSA9IHJhY2VzLk1vcnRhcjtcbiAgICAgICAgICAgICAgICBtZW51X3dpbmRvdy50ZXh0Q29udGVudCA9IG1lbnVfd2luZG93LnRleHRDb250ZW50LnJlcGxhY2UoJyBZb3VyIGFybW9yIGNsYXNzJywgJyBJbiBsaWZlLCB5b3Ugd2VyZSBhIE1vcnRhci4gWW91ciBhcm1vciBjbGFzcycpO1xuICAgICAgICAgICAgICAgIGNoYXIxLmN1cnJlbnRIUCArPSBjaGFyMS5yYWNlLnJhY2VIUEJvbnVzO1xuICAgICAgICAgICAgICAgIGNoYXIxLm1heEhQICs9IGNoYXIxLnJhY2UucmFjZUhQQm9udXM7XG4gICAgICAgICAgICAgICAgY2hhcjEuYXJtb3JDbGFzcyArPSBjaGFyMS5yYWNlLnJhY2VBcm1vckJvbnVzO1xuICAgICAgICAgICAgICAgIG1lbnVVcGRhdGVyKCk7XG4gICAgICAgICAgICAgICAgc3RhdHNfcmFjZS50ZXh0Q29udGVudCA9ICdJbiBsaWZlLCB5b3Ugd2VyZSBhIE1vcnRhci4nXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzID09ICdyYWNlRGVhZGxhbmRlcicpIHtcbiAgICAgICAgICAgICAgICBjaGFyMS5yYWNlID0gcmFjZXMuRGVhZGxhbmRlcjtcbiAgICAgICAgICAgICAgICBtZW51X3dpbmRvdy50ZXh0Q29udGVudCA9IG1lbnVfd2luZG93LnRleHRDb250ZW50LnJlcGxhY2UoJyBZb3VyIGFybW9yIGNsYXNzJywgJyBJbiBsaWZlLCB5b3Ugd2VyZSBhIERlYWRsYW5kZXIuIFlvdXIgYXJtb3IgY2xhc3MnKTtcbiAgICAgICAgICAgICAgICBjaGFyMS5jdXJyZW50SFAgKz0gY2hhcjEucmFjZS5yYWNlSFBCb251cztcbiAgICAgICAgICAgICAgICBjaGFyMS5tYXhIUCArPSBjaGFyMS5yYWNlLnJhY2VIUEJvbnVzO1xuICAgICAgICAgICAgICAgIGNoYXIxLmFybW9yQ2xhc3MgKz0gY2hhcjEucmFjZS5yYWNlQXJtb3JCb251cztcbiAgICAgICAgICAgICAgICBtZW51VXBkYXRlcigpO1xuICAgICAgICAgICAgICAgIHN0YXRzX3JhY2UudGV4dENvbnRlbnQgPSAnSW4gbGlmZSwgeW91IHdlcmUgYSBEZWFkbGFuZGVyLidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzQ2hvaWNlLmNob2ljZU1vZGlmaWVycyA9PSAnY29tcGFzc2lvblNwaXJpdCcpIHtcbiAgICAgICAgICAgICAgICBjaGFyMS5zcGlyaXRDb25jZXB0LmNvbmNlcHQgPSAnQ29tcGFzc2lvbic7XG4gICAgICAgICAgICAgICAgY2hhcjEuc3Bpcml0Q29uY2VwdC5kZXNjcmlwdGlvbiA9ICcgb2YgQ29tcGFzc2lvbic7XG4gICAgICAgICAgICAgICAgbWVudVVwZGF0ZXIoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVDb25jZXB0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpc0Nob2ljZS5jaG9pY2VNb2RpZmllcnMgPT0gJ2p1c3RpY2VTcGlyaXQnKSB7XG4gICAgICAgICAgICAgICAgY2hhcjEuc3Bpcml0Q29uY2VwdC5jb25jZXB0ID0gJ0p1c3RpY2UnO1xuICAgICAgICAgICAgICAgIGNoYXIxLnNwaXJpdENvbmNlcHQuZGVzY3JpcHRpb24gPSAnIG9mIEp1c3RpY2UnO1xuICAgICAgICAgICAgICAgIG1lbnVVcGRhdGVyKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ29uY2VwdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzID09ICdmcmVlZG9tU3Bpcml0Jykge1xuICAgICAgICAgICAgICAgIGNoYXIxLnNwaXJpdENvbmNlcHQuY29uY2VwdCA9ICdGcmVlZG9tJztcbiAgICAgICAgICAgICAgICBjaGFyMS5zcGlyaXRDb25jZXB0LmRlc2NyaXB0aW9uID0gJyBvZiBGcmVlZG9tJztcbiAgICAgICAgICAgICAgICBtZW51VXBkYXRlcigpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNvbmNlcHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzQ2hvaWNlLmNob2ljZU1vZGlmaWVycyA9PSAnbWFzdGVyeVNwaXJpdCcpIHtcbiAgICAgICAgICAgICAgICBjaGFyMS5zcGlyaXRDb25jZXB0LmNvbmNlcHQgPSAnTWFzdGVyeSc7XG4gICAgICAgICAgICAgICAgY2hhcjEuc3Bpcml0Q29uY2VwdC5kZXNjcmlwdGlvbiA9ICcgb2YgTWFzdGVyeSc7XG4gICAgICAgICAgICAgICAgbWVudVVwZGF0ZXIoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVDb25jZXB0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpc0Nob2ljZS5jaG9pY2VNb2RpZmllcnMgPT0gJ3dpc2RvbVNwaXJpdCcpIHtcbiAgICAgICAgICAgICAgICBjaGFyMS5zcGlyaXRDb25jZXB0LmNvbmNlcHQgPSAnV2lzZG9tJztcbiAgICAgICAgICAgICAgICBjaGFyMS5zcGlyaXRDb25jZXB0LmRlc2NyaXB0aW9uID0gJyBvZiBXaXNkb20nO1xuICAgICAgICAgICAgICAgIG1lbnVVcGRhdGVyKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ29uY2VwdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXNDaG9pY2UuY2hvaWNlTW9kaWZpZXJzID09ICdjaG9zZW5QZWN1bGlhcicpIHtcbiAgICAgICAgICAgICAgICBDaG9zZW4gPSBOUENNYWtlcignUGVjdWxpYXInLCAnUXVpcmtlJywgJ3NoZScsICdoZXInLCAnaGVyJywgJ2hlcnNlbGYnKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVDaG9zZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzQ2hvaWNlLmNob2ljZU1vZGlmaWVycyA9PSAnY2hvc2VuU25hcGRyYWdvbicpIHtcbiAgICAgICAgICAgICAgICBDaG9zZW4gPSBOUENNYWtlcignU25hcGRyYWdvbicsICdRdWlya2UnLCAnaGUnLCAnaGlzJywgJ2hpbScsICdoaW1zZWxmJyk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2hvc2VuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpc0Nob2ljZS5jaG9pY2VNb2RpZmllcnMgPT0gJ2Nob3Nlbkx5c2FuZGVyJykge1xuICAgICAgICAgICAgICAgIENob3NlbiA9IE5QQ01ha2VyKCdMeXNhbmRlcicsICdNYWNBcHBsZWJ5JywgJ3RoZXknLCAndGhlaXInLCAndGhlbScsICd0aGVtc2VsdmVzJyk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2hvc2VuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdG9yeVRlbGxlcih0aGlzQ2hvaWNlLmNob2ljZU5leHRTdG9yeSk7XG4gICAgICAgIH0pO1xuICAgIH0pXG59XG4vLyBuZXcgYmF0dGxlIGZ1bmN0aW9uc1xubGV0IHN0b3J5QWZ0ZXJCYXR0bGUgPSBudWxsO1xuZnVuY3Rpb24gbmV3QmF0dGxlU3RhcnRlcihzdG9yeUVsZW1lbnQpIHtcbiAgICBzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmZvckVhY2goKGN1cnJlbnRFbmVteSkgPT4geyBjdXJyZW50RW5lbXkuY3VycmVudEhQID0gY3VycmVudEVuZW15Lm1heEhQIH0pO1xuICAgIGVuZW1pZXMuc3BsaWNlKDAsIGVuZW1pZXMubGVuZ3RoLCAuLi5zdG9yeUVsZW1lbnQubW9kaWZpZXJzKTtcbiAgICBzdG9yeUFmdGVyQmF0dGxlID0gc3RvcnlFbGVtZW50O1xuICAgIGxldCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleHBsb3JhdGlvbkJvYXJkJyk7XG4gICAgaWYgKGJvYXJkICE9PSBudWxsKSB7IGJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH1cbiAgICBsaXN0RW5lbWllcygpO1xufVxuZXZlbnRFbWl0dGVyLm9uKCdiYXR0bGU6d2luJywgKCkgPT4ge1xuLy8gZnVuY3Rpb24gaXNCYXR0bGVPdmVyKGJhdHRsZVJlc3VsdCkge1xuICAgIC8vIGlmIChiYXR0bGVSZXN1bHQgPT0gJ3dpbicpIHtcbiAgICAgICAgaWYgKGlzUGxheWVyRXhwbG9yaW5nID09IHRydWUpIHtcbiAgICAgICAgICAgIGxldCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleHBsb3JhdGlvbkJvYXJkJyk7XG4gICAgICAgICAgICBib2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnOyAgICAgICAgXG4gICAgICAgIH0gICAgXG4gICAgICAgIGxldCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZW50cnkudGV4dENvbnRlbnQgPSAnWW91IHdpbiB0aGUgYmF0dGxlISc7XG4gICAgICAgIGxvZ193aW5kb3cuYXBwZW5kQ2hpbGQoZW50cnkpO1xuICAgICAgICB3aGlsZSAobG9nX3dpbmRvdy5jaGlsZHJlbi5sZW5ndGggPiAyKSB7IGxvZ193aW5kb3cucmVtb3ZlQ2hpbGQobG9nX3dpbmRvdy5maXJzdENoaWxkKSB9O1xuICAgICAgICBBcnJheS5mcm9tKGxvZ193aW5kb3cuY2hpbGRyZW4pLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBlbnRyeS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2NvbG9yOndoaXRlOycpO1xuICAgICAgICB9KTtcbiAgICAgICAgdG9wX2Jhci5yZW1vdmVDaGlsZCh0b3BfYmFyLmZpcnN0Q2hpbGQpO1xuICAgICAgICB3aGlsZSAobWFpbl93aW5kb3cuZmlyc3RDaGlsZCkgeyBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZChtYWluX3dpbmRvdy5maXJzdENoaWxkKSB9O1xuICAgICAgICBzdG9yeVRlbGxlcihzdG9yeUFmdGVyQmF0dGxlLm5leHRTdG9yeUVsZW1lbnQpO1xuICAgICAgICBzdG9yeUFmdGVyQmF0dGxlID0gbnVsbDsgICBcbn0pOyBcbiAgICAvLyB9IGVsc2Uge1xuZXZlbnRFbWl0dGVyLm9uKCdiYXR0bGU6bG9zZScsICgpID0+IHtcbiAgICAgICAgbGV0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlbnRyeS50ZXh0Q29udGVudCA9ICdZb3UgZGllZCEnO1xuICAgICAgICBlbnRyeS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2NvbG9yOnJlZDsnKTtcbiAgICAgICAgbG9nX3dpbmRvdy5hcHBlbmRDaGlsZChlbnRyeSk7XG4gICAgICAgIGJ1dHRvbl93aW5kb3cucmVtb3ZlQ2hpbGQoYXR0YWNrX2J1dHRvbik7XG4gICAgICAgIGJ1dHRvbl93aW5kb3cucmVtb3ZlQ2hpbGQoc3BlY2lhbF9idXR0b24pO1xuICAgICAgICBidXR0b25fd2luZG93LnJlbW92ZUNoaWxkKGludmVudG9yeV9idXR0b24pO1xuICAgICAgICBidXR0b25fd2luZG93LnJlbW92ZUNoaWxkKHN0YXRzX2J1dHRvbik7XG4gICAgLy8gfVxufSk7XG4vLyBuZXcgY2hhcmFjdGVyIGNyZWF0aW9uIGZ1bmN0aW9uXG5mdW5jdGlvbiBuZXdGb3JtTWFrZXIoc3RvcnlFbGVtZW50KSB7XG4gICAgbGV0IGZvcm1fY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICBmb3JtX2NhcmQuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgbWFpbl93aW5kb3cuYXBwZW5kQ2hpbGQoZm9ybV9jYXJkKTtcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGFuc3dlciA9IGlucHV0LnZhbHVlO1xuICAgICAgICBjaGFyMS5uYW1lID0gYW5zd2VyO1xuICAgICAgICBuZXdVcGRhdGVOYW1lcyhhbnN3ZXIpO1xuICAgICAgICB3aGlsZSAobWFpbl93aW5kb3cuZmlyc3RDaGlsZCkgeyBtYWluX3dpbmRvdy5yZW1vdmVDaGlsZChtYWluX3dpbmRvdy5maXJzdENoaWxkKTsgfVxuICAgICAgICBzdG9yeVRlbGxlcihzdG9yeUVsZW1lbnQubmV4dFN0b3J5RWxlbWVudCk7XG4gICAgfSlcbn1cbi8vIC0tLSBleHBsb3JhdGlvbiBzeXN0ZW0gLS0tXG4vLyB0cmFja2luZyB2YXJzXG5sZXQgbW92ZU9uID0gdHJ1ZTtcbmxldCBzaWRlRXZlbnRzU2VlbiA9IDA7XG5sZXQgY3VycmVudEV4cGxvcmF0aW9uU3RvcnlFbGVtZW50ID0gJyc7XG4vLyBuZXcgZXhwbG9yYXRpb24gZnVuY3Rpb25zXG5mdW5jdGlvbiBuZXdFeHBsb3JhdGlvbihzdG9yeUVsZW1lbnQpIHtcbiAgICAvLyBjbGVhciBtYWluIHdpbmRvd1xuICAgIGN1cnJlbnRFeHBsb3JhdGlvblN0b3J5RWxlbWVudCA9IHN0b3J5RWxlbWVudDtcbiAgICB3aGlsZSAobWFpbl93aW5kb3cuZmlyc3RDaGlsZCkge21haW5fd2luZG93LnJlbW92ZUNoaWxkKG1haW5fd2luZG93LmZpcnN0Q2hpbGQpfTtcbiAgICAvLyBtYWtlIGJvYXJkIGFuZCBib2FyZFVuZGVyXG4gICAgbGV0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsICdleHBsb3JhdGlvbkJvYXJkJyk7XG4gICAgbGV0IGJvYXJkVW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZFVuZGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlOyBtYXJnaW46M3B4OyBkaXNwbGF5OmlubGluZS1ncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAyNXB4KTsnKVxuICAgIGJvYXJkVW5kZXIuc2V0QXR0cmlidXRlKCdpZCcsICdib2FyZFVuZGVyJyk7XG4gICAgaW1hZ2Vfd2luZG93LmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChib2FyZFVuZGVyKTtcbiAgICAvLyBkcmF3IHRpbGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjY7IGkrKykge1xuICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aWxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdwYWRkaW5nOjVweDtib3JkZXI6MXB4IHNvbGlkIHdoaXRlO2hlaWdodDoxNXB4O3dpZHRoOjE1cHg7Jyk7XG4gICAgICAgIHRpbGUuc2V0QXR0cmlidXRlKCdpZCcsIGB0aWxlJHtpfWApO1xuICAgICAgICBib2FyZFVuZGVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgIH1cbiAgICAvLyBjYWxsIGRyYXdJY29ucyBmdW5jdGlvblxuICAgIGRyYXdJY29ucyhzdG9yeUVsZW1lbnQpO1xuICAgIC8vIGRyYXcgdGhlIGNpcmNsZSBpbnNpZGUgdGhlIHNxdWFyZXNcbiAgICBsZXQgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnaWQnLCdjaXJjbGUnKTtcbiAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2JhY2tncm91bmQtY29sb3I6d2hpdGU7Ym9yZGVyOjFweCBzb2xpZCB3aGl0ZTtib3JkZXItcmFkaXVzOjUwJTsgei1pbmRleDoxMDsgaGVpZ2h0OiAxN3B4OyB3aWR0aDogMTdweDsnKTtcbiAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgbGV0IHN0YXJ0VGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aWxlMTIwJyk7XG4gICAgc3RhcnRUaWxlLmFwcGVuZENoaWxkKGNpcmNsZSk7XG4gICAgLy8gY29vcmRpbmF0ZXMgb2YgYm91bmRpbmcgcmVjdGFuZ2xlICgqKklUIERPRVNOJ1QgTU9WRSBXSEVOIENJUkNMRSBNT1ZFUyEqKilcbiAgICBsZXQgaW5pdGlhbENpcmNsZVggPSBjaXJjbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueDtcbiAgICBsZXQgaW5pdGlhbENpcmNsZVkgPSBjaXJjbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueTtcblxuICAgIGxldCBjdXJyZW50Q2lyY2xlWCA9IGluaXRpYWxDaXJjbGVYO1xuICAgIGxldCBjdXJyZW50Q2lyY2xlWSA9IGluaXRpYWxDaXJjbGVZO1xuICAgIC8vIFdBU0QgdG8gbW92ZSB0aGUgY2lyY2xlXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBsZXQgc3RlcCA9IDU7XG4gICAgICAgIGxldCBib2FyZFVuZGVyQ29sbGlzaW9uID0gYm9hcmRVbmRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgICAgIC8vVHJhbnNmb3JtICh0cmFuc2xhdGUpOiBDQUxDVUxBVEVTIEZST00gVEhFIElOSVRJQUwgUE9TSVRJT04hIFNPLCBpbml0aWFsQ2lyY2xlIFdJTEwgQkUgMCwgMCBmb3IgdHJhbnNmb3JtIHRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q2lyY2xlWSAtIHN0ZXAgPiBib2FyZFVuZGVyQ29sbGlzaW9uLnRvcCAmJiBtb3ZlT24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndycpXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDaXJjbGVZIC09IHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgIHRpbGVUcmlnZ2Vycyh3aGljaFRpbGVJc1BsYXllck9uKGNpcmNsZSksIHN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDaXJjbGVYIC0gc3RlcCA+IGJvYXJkVW5kZXJDb2xsaXNpb24ubGVmdCAmJiBtb3ZlT24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2lyY2xlWCAtPSBzdGVwO1xuICAgICAgICAgICAgICAgICAgICB0aWxlVHJpZ2dlcnMod2hpY2hUaWxlSXNQbGF5ZXJPbihjaXJjbGUpLCBzdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q2lyY2xlWSArIHN0ZXAgKyAyMCA8IGJvYXJkVW5kZXJDb2xsaXNpb24uYm90dG9tICYmIG1vdmVPbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDaXJjbGVZICs9IHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgIHRpbGVUcmlnZ2Vycyh3aGljaFRpbGVJc1BsYXllck9uKGNpcmNsZSksIHN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDaXJjbGVYICsgc3RlcCArIDE4IDwgYm9hcmRVbmRlckNvbGxpc2lvbi5yaWdodCAmJiBtb3ZlT24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2lyY2xlWCArPSBzdGVwO1xuICAgICAgICAgICAgICAgICAgICB0aWxlVHJpZ2dlcnMod2hpY2hUaWxlSXNQbGF5ZXJPbihjaXJjbGUpLCBzdG9yeUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBsZXQga2V5Ym9hcmRNb3ZlWSA9IGN1cnJlbnRDaXJjbGVZIC0gaW5pdGlhbENpcmNsZVk7XG4gICAgICAgIGxldCBrZXlib2FyZE1vdmVYID0gY3VycmVudENpcmNsZVggLSBpbml0aWFsQ2lyY2xlWDtcbiAgICAgICAgY2lyY2xlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtrZXlib2FyZE1vdmVYfXB4LCAke2tleWJvYXJkTW92ZVl9cHgpYDtcbiAgICB9KTtcbiAgICAvLyBjbGlja2luZyB0byBtb3ZlXG4gICAgLy8gVGhpcyB3b3JrcyBiZWNhdXNlIGl0IGRvZXNuJ3QgTkVFRCBhIGN1cnJlbnQgcG9zaXRpb24uIGl0IEFMV0FZUyBjYWxjdWxhdGVzIGZyb20gdGhlIHN0YXJ0aW5nIG9uZVxuICAgIGJvYXJkVW5kZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG1vdmVPbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICBsZXQgY2xpY2tlZFRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt3aGljaFRpbGVEaWRZb3VDbGljayhldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKX1gKTtcbiAgICAgICAgICAgIGxldCBjbGlja2VkVGlsZUJvdW5kYXJpZXMgPSBjbGlja2VkVGlsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBtb3ZlWCA9IGNsaWNrZWRUaWxlQm91bmRhcmllcy5sZWZ0ICsgNCAtIGluaXRpYWxDaXJjbGVYO1xuICAgICAgICAgICAgbGV0IG1vdmVZID0gY2xpY2tlZFRpbGVCb3VuZGFyaWVzLnRvcCArIDQgLSBpbml0aWFsQ2lyY2xlWSArIHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICAgICAgY2lyY2xlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHttb3ZlWH1weCwgJHttb3ZlWX1weClgO1xuICAgICAgICAgICAgdGlsZVRyaWdnZXJzKHdoaWNoVGlsZUlzUGxheWVyT24oY2lyY2xlKSwgc3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgIGN1cnJlbnRDaXJjbGVYID0gY2xpY2tlZFRpbGVCb3VuZGFyaWVzLmxlZnQgKyA0O1xuICAgICAgICAgICAgY3VycmVudENpcmNsZVkgPSBjbGlja2VkVGlsZUJvdW5kYXJpZXMudG9wICsgNCArIHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyB3aGljaCB0aWxlIGRpZCB5b3UgY2xpY2s/XG5mdW5jdGlvbiB3aGljaFRpbGVEaWRZb3VDbGljayhjbGlja1gsIGNsaWNrWSkge1xuICAgIGxldCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJ0aWxlXCJdJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGlsZUNvbGxpc2lvbiA9IHRpbGVzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjbGlja1ggPCB0aWxlQ29sbGlzaW9uLnJpZ2h0ICYmXG4gICAgICAgICAgICBjbGlja1ggPiB0aWxlQ29sbGlzaW9uLmxlZnQgJiZcbiAgICAgICAgICAgIGNsaWNrWSA8IHRpbGVDb2xsaXNpb24uYm90dG9tICYmXG4gICAgICAgICAgICBjbGlja1kgPiB0aWxlQ29sbGlzaW9uLnRvcCBcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGlsZXNbaV0uaWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG4vLyB3aGVuIGEgcGxheWVyIG1vdmVzLCBpdCBpcyB0cmlnZ2VyZWQuIHJldHVybnMgXCIjdGlsZTMwXCIgdHlwZSBudW1iZXJcbmZ1bmN0aW9uIHdoaWNoVGlsZUlzUGxheWVyT24oY2lyY2xlKSB7XG4gICAgbGV0IGNpcmNsZUNvbGxpc2lvbiA9IGNpcmNsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRePVwidGlsZVwiXScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRpbGVDb2xsaXNpb24gPSB0aWxlc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2lyY2xlQ29sbGlzaW9uLmxlZnQgPCB0aWxlQ29sbGlzaW9uLnJpZ2h0ICYmXG4gICAgICAgICAgICBjaXJjbGVDb2xsaXNpb24ucmlnaHQgPiB0aWxlQ29sbGlzaW9uLmxlZnQgJiZcbiAgICAgICAgICAgIGNpcmNsZUNvbGxpc2lvbi50b3AgPCB0aWxlQ29sbGlzaW9uLmJvdHRvbSAmJlxuICAgICAgICAgICAgY2lyY2xlQ29sbGlzaW9uLmJvdHRvbSA+IHRpbGVDb2xsaXNpb24udG9wIFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aWxlc1tpXS5pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbi8vIGNvbXBhcmVzIHRoZSB0aWxlIGlkIGZyb20gYWJvdmUgYW5kIGFjdGl2YXRlcyBhIHN0b3J5RWxlbWVudFxuZnVuY3Rpb24gdGlsZVRyaWdnZXJzKHBsYXllcnNUaWxlLCBzdG9yeUVsZW1lbnQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGxheWVyc1RpbGUpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tpXS50aWxlTnVtYmVyKTtcbiAgICAgICAgICAgIGlmIChgIyR7cGxheWVyc1RpbGV9YCA9PSBzdG9yeUVsZW1lbnQubW9kaWZpZXJzW2ldLnRpbGVOdW1iZXIgJiYgIXN0b3J5RWxlbWVudC5tb2RpZmllcnNbaV0uZW5jb3VudGVyU3RvcnlFbGVtZW50Lm1vZGlmaWVycy5oYXNQbGF5ZXJTZWVuTWUpIHtcbiAgICAgICAgICAgICAgICBzdG9yeVRlbGxlcihzdG9yeUVsZW1lbnQubW9kaWZpZXJzW2ldLmVuY291bnRlclN0b3J5RWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpZGVFdmVudHNTZWVuID09IHN0b3J5RWxlbWVudC5tb2RpZmllcnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aC0xXS51bmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBkcmF3TGFzdEljb24oc3RvcnlFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYCMke3BsYXllcnNUaWxlfWAgPT0gc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aC0xXS50aWxlTnVtYmVyICYmIHN0b3J5RWxlbWVudC5tb2RpZmllcnNbc3RvcnlFbGVtZW50Lm1vZGlmaWVycy5sZW5ndGgtMV0udW5sb2NrZWQpIHtcbiAgICAgICAgICAgIHN0b3J5VGVsbGVyKHN0b3J5RWxlbWVudC5tb2RpZmllcnNbc3RvcnlFbGVtZW50Lm1vZGlmaWVycy5sZW5ndGgtMV0uZW5jb3VudGVyU3RvcnlFbGVtZW50KTtcbiAgICAgICAgICAgIHNpZGVFdmVudHNTZWVuID0gMDtcbiAgICAgICAgfVxuICAgIH0gICAgXG4vLyBkcmF3IGljb25zIG9uIHRpbGVzXG5mdW5jdGlvbiBkcmF3SWNvbnMoc3RvcnlFbGVtZW50KSB7XG4gICAgbGV0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cInRpbGVcIl0nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3RvcnlFbGVtZW50Lm1vZGlmaWVycy5sZW5ndGggLSAxOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChgIyR7dGlsZXNbaV0uaWR9YCA9PSBzdG9yeUVsZW1lbnQubW9kaWZpZXJzW2pdLnRpbGVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICB0aWxlc1tpXS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tqXS5pY29uLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICB0aWxlc1tpXS5hcHBlbmRDaGlsZChzdG9yeUVsZW1lbnQubW9kaWZpZXJzW2pdLmljb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8gZHJhdyBsYXN0IGljb25cbmZ1bmN0aW9uIGRyYXdMYXN0SWNvbihzdG9yeUVsZW1lbnQpIHtcbiAgICBsZXQgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRePVwidGlsZVwiXScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGAjJHt0aWxlc1tpXS5pZH1gID09IHN0b3J5RWxlbWVudC5tb2RpZmllcnNbc3RvcnlFbGVtZW50Lm1vZGlmaWVycy5sZW5ndGgtMV0udGlsZU51bWJlcikge1xuICAgICAgICAgICAgdGlsZXNbaV0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgc3RvcnlFbGVtZW50Lm1vZGlmaWVyc1tzdG9yeUVsZW1lbnQubW9kaWZpZXJzLmxlbmd0aC0xXS5pY29uLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHRpbGVzW2ldLmFwcGVuZENoaWxkKHN0b3J5RWxlbWVudC5tb2RpZmllcnNbc3RvcnlFbGVtZW50Lm1vZGlmaWVycy5sZW5ndGgtMV0uaWNvbik7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyAtLS0gc3RhdHMgc3lzdGVtIC0tLVxuLy8gdHJhY2sgc3RhdHNcbmxldCBwbGF5ZXJCZW5ldm9sZW50QmFsYW5jZSA9IDA7XG5sZXQgcGxheWVyU2lsbHlCYWxhbmNlID0gMDtcbi8vIHN0YXRzIHNjcmVlblxubGV0IHN0YXRzRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG5zdGF0c0RpYWxvZy5pbm5lckhUTUwgPSBgXG4gICAgPGJ1dHRvbiBpZD0nY2xvc2VCdXR0b24yJz5DbG9zZTwvYnV0dG9uPlxuICAgIDxkaXYgaWQ9J3N0YXRzQm94Jz5cbiAgICA8aDI+U3RhdHM8L2gyPlxuICAgIDx1bCBpZCA9J3N0YXRzTGlzdCc+XG4gICAgICAgIDxsaSBpZD0nc3RhdHNfZ2VuZGVyJz5Zb3UgZG8gbm90IHJlbWVtYmVyIHlvdXIgZ2VuZGVyLjwvbGk+XG4gICAgICAgIDxsaSBpZD0nc3RhdHNfcmFjZSc+WW91IGRvIG5vdCByZW1lbWJlciB5b3VyIHJhY2UuPC9saT5cbiAgICAgICAgPGxpIGlkPSdzdGF0c19yb21hbnRpY19wYXJ0bmVyJz5Zb3UgZG8gbm90IHJlbWVtYmVyIHdobyB5b3VyIHJvbWFudGljIHBhcnRuZXIgd2FzLjwvbGk+XG4gICAgICAgIDxsaSBpZD0nc3RhdHNfY2F1c2Vfb2ZfZGVhdGgnPllvdSBkbyBub3QgcmVtZW1iZXIgeW91ciBjYXVzZSBvZiBkZWF0aC48L2xpPlxuICAgICAgICA8bGkgaWQ9J3N0YXRzX2V2aWxfYmVuZXZvbGVudCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGF0c19tZXRlcicgaWQ9J3N0YXRzX21ldGVyX2V2aWwnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YXRzX2xpbmUnIGlkPSdzdGF0c19saW5lX2V2aWwnPkV2aWw8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGF0c19saW5lJyBpZD0nc3RhdHNfbGluZV9iZW5ldm9sZW50Jz5CZW5ldm9sZW50PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGlkPSdzdGF0c19zb21iZXJfc2lsbHknPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhdHNfbWV0ZXInIGlkPSdzdGF0c19tZXRlcl9zb21iZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YXRzX2xpbmUnIGlkPSdzdGF0c19saW5lX3NvbWJlcic+U29tYmVyPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhdHNfbGluZScgaWQ9J3N0YXRzX2xpbmVfc2lsbHknPlNpbGx5PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDwvZGl2PlxuYDtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhdHNEaWFsb2cpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBzdGF0c19idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChuZXdQbGF5ZXJDb25zZXF1ZW5jZXMuaW5jbHVkZXMoJ2NsYXNzV3JhaXRoJykgfHwgbmV3UGxheWVyQ29uc2VxdWVuY2VzLmluY2x1ZGVzKCdjbGFzc1BvbHRlcmdlaXN0JykgfHwgbmV3UGxheWVyQ29uc2VxdWVuY2VzLmluY2x1ZGVzKCdjbGFzc0d1YXJkaWFuU3Bpcml0JykpIHtcbiAgICAgICAgICAgIHN0YXRzRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgbGV0IGNsb3NlQnV0dG9uMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZUJ1dHRvbjInKTtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0c0RpYWxvZy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgc3RhdHNEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZGlhbG9nQW5pbWF0aW9uRW5kKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbi8vIHRyYWNraW5nIGFuZCB1cGRhdGluZyBzdGF0c1xuZnVuY3Rpb24gc3RhdHNMaW5lc1VwZGF0ZXIoKSB7XG4gICAgbGV0IGV2aWxMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXRzX21ldGVyX2V2aWwnKTtcbiAgICBsZXQgc29tYmVyTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0c19tZXRlcl9zb21iZXInKTtcbiAgICBldmlsTGluZS5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYCR7NTAtcGxheWVyQmVuZXZvbGVudEJhbGFuY2V9ZnIgJHs1MCtwbGF5ZXJCZW5ldm9sZW50QmFsYW5jZX1mcmA7XG4gICAgc29tYmVyTGluZS5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYCR7NTAtcGxheWVyU2lsbHlCYWxhbmNlfWZyICR7NTArcGxheWVyU2lsbHlCYWxhbmNlfWZyYDtcbn1cbmZ1bmN0aW9uIGdpdmVTdGF0cyhzdGF0LCBhbW91bnQpIHtcbiAgICBzd2l0Y2ggKHN0YXQpIHtcbiAgICAgICAgY2FzZSAnZXZpbCc6XG4gICAgICAgICAgICBwbGF5ZXJCZW5ldm9sZW50QmFsYW5jZSAtPSBhbW91bnQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYmVuZXZvbGVudCc6XG4gICAgICAgICAgICBwbGF5ZXJCZW5ldm9sZW50QmFsYW5jZSArPSBhbW91bnQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc29tYmVyJzpcbiAgICAgICAgICAgIHBsYXllclNpbGx5QmFsYW5jZSAtPSBhbW91bnQ7ICAgICAgICAgICAgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2lsbHknOlxuICAgICAgICAgICAgcGxheWVyU2lsbHlCYWxhbmNlICs9IGFtb3VudDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzdGF0c0xpbmVzVXBkYXRlcigpO1xuICAgIHN0YXRzRmxhZ3NVcGRhdGVyKCk7XG59XG5mdW5jdGlvbiBzdGF0c0ZsYWdzVXBkYXRlcigpIHtcbiAgICBpZiAocGxheWVyQmVuZXZvbGVudEJhbGFuY2UgPiAxNCkge1xuICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaCgncGxheWVyQmVuZXZvbGVudDE1Jyk7XG4gICAgICAgIGlmIChwbGF5ZXJCZW5ldm9sZW50QmFsYW5jZSA+IDI5KSB7XG4gICAgICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaCgncGxheWVyQmVuZXZvbGVudDMwJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChwbGF5ZXJCZW5ldm9sZW50QmFsYW5jZSA8IC0xNCkge1xuICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaCgncGxheWVyRXZpbDE1Jyk7XG4gICAgICAgIGlmIChwbGF5ZXJCZW5ldm9sZW50QmFsYW5jZSA8IC0yOSkge1xuICAgICAgICAgICAgbmV3UGxheWVyQ29uc2VxdWVuY2VzLnB1c2goJ3BsYXllckV2aWwzMCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAocGxheWVyU2lsbHlCYWxhbmNlID4gMTQpIHtcbiAgICAgICAgbmV3UGxheWVyQ29uc2VxdWVuY2VzLnB1c2goJ3BsYXllclNpbGx5MTUnKTtcbiAgICAgICAgaWYgKHBsYXllclNpbGx5QmFsYW5jZSA+IDI5KSB7XG4gICAgICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaCgncGxheWVyU2lsbHkzMCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAocGxheWVyU2lsbHlCYWxhbmNlIDwgLTE0KSB7XG4gICAgICAgIG5ld1BsYXllckNvbnNlcXVlbmNlcy5wdXNoKCdwbGF5ZXJTb21iZXIxNScpO1xuICAgICAgICBpZiAocGxheWVyU2lsbHlCYWxhbmNlIDwgLTI5KSB7XG4gICAgICAgICAgICBuZXdQbGF5ZXJDb25zZXF1ZW5jZXMucHVzaCgncGxheWVyU29tYmVyMTUnKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4vLyBGYWxzZWN1YmVzXG5mdW5jdGlvbiBzdG9yeUZhbHNlY3ViZXMoc3RvcnlFbGVtZW50KSB7XG4gICAgc3RhcnREaWNlR2FtZShzdG9yeUVsZW1lbnQubW9kaWZpZXJzLm9wcG9uZW50TmFtZSwgc3RvcnlFbGVtZW50Lm1vZGlmaWVycy5vcHBvbmVudExpbmVzLCBzdG9yeUZhbHNlY3ViZXNFbmQsIHN0b3J5RWxlbWVudCk7XG59XG5mdW5jdGlvbiBzdG9yeUZhbHNlY3ViZXNFbmQocmVzdWx0LCBwcml6ZSkge1xuICAgIGlmIChyZXN1bHQgPT0gJ3dpbicpIHtcbiAgICAgICAgbmV3UGxheWVyQ29uc2VxdWVuY2VzLnB1c2gocHJpemUubW9kaWZpZXJzLmNvbnNlcXVlbmNlcy53aW4pO1xuICAgICAgICBzdG9yeVRlbGxlcihwcml6ZS5uZXh0U3RvcnlFbGVtZW50Lndpbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3UGxheWVyQ29uc2VxdWVuY2VzLnB1c2gocHJpemUubW9kaWZpZXJzLmNvbnNlcXVlbmNlcy5sb3NlKTtcbiAgICAgICAgc3RvcnlUZWxsZXIocHJpemUubmV4dFN0b3J5RWxlbWVudC5sb3NlKTtcbiAgICB9XG59XG4vLyBTdGFydCBnYW1lXG5zdG9yeVRlbGxlcihzY3JpcHRPYmplY3RzLnByb2xvZ3VlMSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=