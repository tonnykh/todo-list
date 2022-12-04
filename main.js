/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --background-light: #FFFFFF;\n    --background-light-grey: #EEEFF2;\n    --background-dark-grey: #E4E5E9;\n\n    --nav-background-hover: #F7F6F7\n}\n\nli {\n    list-style-type: none;\n}\n\nbody {\n    display: flex;\n    font-family: 'Inter', sans-serif;\n    padding: 40px;\n    padding-right: 0;\n    color: black;\n    background-color: var(--background-light-grey);\n}\n\nh1 {\n    font-size: 2.2rem;\n    padding-bottom: 21px;\n}\n\nh2 {\n    font-weight: 400;\n    padding: 15px 15px 10px 2px;\n}\n\n\n/* HEADER */\nheader  {\n    padding: 37px;\n    height: 90vh;\n    border-radius: 13px;\n    background-color: var(--background-light);\n    width: 25vw;\n}\n\n.default-project {\n    padding: 18px;\n}\n\n.default-project a {\n    text-decoration: none;\n    font-size: 1rem;\n    color: black;\n    font-weight: 500;\n}\n\n\n/* MAIN */\nmain {\n    margin: 20px auto auto;\n    width: 40%;\n    display: flex;\n    flex-direction: column;\n    gap: 13px;\n}\n\n.add-task {\n    display: flex;\n    flex-direction: row-reverse;\n    /* line-height: 1.7; */\n}\n\n.hide {\n    /* background-color: red;\n    color: red; */\n    /* content: ''; */\n    position: absolute;   \n    visibility: hidden;\n    margin-right: 7px;\n\n}\n\n\n\n.add-task:focus-within {\n\n    /* color: red; */\n    display: flex;\n    align-items: center;\n\n    padding: 15px;\n    /* margin-bottom: 9px; */\n    background-color: var(--background-light);\n    border-radius: 13px;\n    font-weight: 400;\n    font-size: 0.9rem;\n}\n\n.add-task label {\n    /* margin-right: 7px; */\n}\n\n#input-add-task {\n    padding: 15px;\n    border-radius: 13px;\n    border-style: none;\n    font-family: 'Inter', sans-serif;\n    width: 100%;\n    background-color: var(--background-dark-grey);\n    font-weight: 300;\n    font-size: 0.9rem;\n    line-height: 1.7;\n}\n\n\n/* after focus */\n#input-add-task:focus {    \n    border-radius: initial;\n    padding: initial;\n    background-color: initial;\n\n    font-family: 'Inter', sans-serif;\n    font-weight: 400;\n    font-size: 0.9rem;\n\n    border-style: none;\n    outline: none;\n}\n\n\n#input-add-task:focus + label .hide {\n    visibility: visible;\n    /* color: red; */\n    position: relative;\n    /* background-color: red; */\n\n}\n\n\n\n\n\n\n\n.task {\n    padding: 15px;\n    margin-bottom: 9px;\n    background-color: var(--background-light);\n    border-radius: 13px;\n    font-weight: 400;\n    font-size: 0.9rem;\n}\n\n.delete-icon {\n    float: right;\n    position: relative;\n    top: 5px;\n    right: 4px;\n    /* display: none; */\n}\n\n[type=\"checkbox\"] {\n    opacity: 0;\n    position: absolute;\n}\n\n.custom-checkbox {\n    --size: 17px;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    border: solid 2px currentColor;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--background-light-grey);\n\n    cursor: pointer;\n\n}\n\n.custom-checkbox:after {\n    content: \"\\f00c\";\n    font-family: \"Font Awesome 5 Free\";\n    font-weight: 600;\n    font-size: 12px;\n    color: white;\n    margin: 5px;\n    display: none;\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n    background-color: black;\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox::after {\n    display: block;\n}\n\n.task label::after {\n    content: '';\n    position: absolute;\n    right: 0;\n    left: 24px;\n    height: 2px;\n    background-color: currentColor;\n    transform: scaleX(0);\n    transform-origin: left;\n    transition: transform 160ms ease-in-out;\n} \n\n[type=\"checkbox\"]:checked + label::after {\n    transform: scaleX(1);\n    transform-origin: left;\n}\n\n.task label {\n    display: flex;\n    align-items: center;\n    column-gap: 7px;\n    position: relative;\n    display: inline-flex;\n    line-height: 1.7;\n    cursor: pointer;\n}\n\n/* FOOTER */\nfooter {\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    bottom: 30px;\n    left: 100px;\n    width: 100%;\n}\n\na {\n    color: inherit;\n\n}\n\n.fa-github {\n    margin-left: 4px;\n}\n\n.fa-github:hover {\n    transform: rotate(360deg) scale(1.4);\n    transition: transform 0.3s ease-in-out;\n}\n\n\n/* Hover */\n.default-project:hover {\n    background-color: var(--nav-background-hover);\n    border-radius: 13px;\n}\n\n.task:hover .delete-icon {\n    display: block;\n    cursor: pointer;\n}\n\n/* .custom-checkbox:hover {\n    transform: scale(1.15);\n    transition: transform 200ms ease-in-out;\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --background-light: #FFFFFF;\n    --background-light-grey: #EEEFF2;\n    --background-dark-grey: #E4E5E9;\n\n    --nav-background-hover: #F7F6F7\n}\n\nli {\n    list-style-type: none;\n}\n\nbody {\n    display: flex;\n    font-family: 'Inter', sans-serif;\n    padding: 40px;\n    padding-right: 0;\n    color: black;\n    background-color: var(--background-light-grey);\n}\n\nh1 {\n    font-size: 2.2rem;\n    padding-bottom: 21px;\n}\n\nh2 {\n    font-weight: 400;\n    padding: 15px 15px 10px 2px;\n}\n\n\n/* HEADER */\nheader  {\n    padding: 37px;\n    height: 90vh;\n    border-radius: 13px;\n    background-color: var(--background-light);\n    width: 25vw;\n}\n\n.default-project {\n    padding: 18px;\n}\n\n.default-project a {\n    text-decoration: none;\n    font-size: 1rem;\n    color: black;\n    font-weight: 500;\n}\n\n\n/* MAIN */\nmain {\n    margin: 20px auto auto;\n    width: 40%;\n    display: flex;\n    flex-direction: column;\n    gap: 13px;\n}\n\n.add-task {\n    display: flex;\n    flex-direction: row-reverse;\n    /* line-height: 1.7; */\n}\n\n.hide {\n    /* background-color: red;\n    color: red; */\n    /* content: ''; */\n    position: absolute;   \n    visibility: hidden;\n    margin-right: 7px;\n\n}\n\n\n\n.add-task:focus-within {\n\n    /* color: red; */\n    display: flex;\n    align-items: center;\n\n    padding: 15px;\n    /* margin-bottom: 9px; */\n    background-color: var(--background-light);\n    border-radius: 13px;\n    font-weight: 400;\n    font-size: 0.9rem;\n}\n\n.add-task label {\n    /* margin-right: 7px; */\n}\n\n#input-add-task {\n    padding: 15px;\n    border-radius: 13px;\n    border-style: none;\n    font-family: 'Inter', sans-serif;\n    width: 100%;\n    background-color: var(--background-dark-grey);\n    font-weight: 300;\n    font-size: 0.9rem;\n    line-height: 1.7;\n}\n\n\n/* after focus */\n#input-add-task:focus {    \n    border-radius: initial;\n    padding: initial;\n    background-color: initial;\n\n    font-family: 'Inter', sans-serif;\n    font-weight: 400;\n    font-size: 0.9rem;\n\n    border-style: none;\n    outline: none;\n}\n\n\n#input-add-task:focus + label .hide {\n    visibility: visible;\n    /* color: red; */\n    position: relative;\n    /* background-color: red; */\n\n}\n\n\n\n\n\n\n\n.task {\n    padding: 15px;\n    margin-bottom: 9px;\n    background-color: var(--background-light);\n    border-radius: 13px;\n    font-weight: 400;\n    font-size: 0.9rem;\n}\n\n.delete-icon {\n    float: right;\n    position: relative;\n    top: 5px;\n    right: 4px;\n    /* display: none; */\n}\n\n[type=\"checkbox\"] {\n    opacity: 0;\n    position: absolute;\n}\n\n.custom-checkbox {\n    --size: 17px;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    border: solid 2px currentColor;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--background-light-grey);\n\n    cursor: pointer;\n\n}\n\n.custom-checkbox:after {\n    content: \"\\f00c\";\n    font-family: \"Font Awesome 5 Free\";\n    font-weight: 600;\n    font-size: 12px;\n    color: white;\n    margin: 5px;\n    display: none;\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox {\n    background-color: black;\n}\n\n[type=\"checkbox\"]:checked + label .custom-checkbox::after {\n    display: block;\n}\n\n.task label::after {\n    content: '';\n    position: absolute;\n    right: 0;\n    left: 24px;\n    height: 2px;\n    background-color: currentColor;\n    transform: scaleX(0);\n    transform-origin: left;\n    transition: transform 160ms ease-in-out;\n} \n\n[type=\"checkbox\"]:checked + label::after {\n    transform: scaleX(1);\n    transform-origin: left;\n}\n\n.task label {\n    display: flex;\n    align-items: center;\n    column-gap: 7px;\n    position: relative;\n    display: inline-flex;\n    line-height: 1.7;\n    cursor: pointer;\n}\n\n/* FOOTER */\nfooter {\n    display: flex;\n    justify-content: center;\n    position: absolute;\n    bottom: 30px;\n    left: 100px;\n    width: 100%;\n}\n\na {\n    color: inherit;\n\n}\n\n.fa-github {\n    margin-left: 4px;\n}\n\n.fa-github:hover {\n    transform: rotate(360deg) scale(1.4);\n    transition: transform 0.3s ease-in-out;\n}\n\n\n/* Hover */\n.default-project:hover {\n    background-color: var(--nav-background-hover);\n    border-radius: 13px;\n}\n\n.task:hover .delete-icon {\n    display: block;\n    cursor: pointer;\n}\n\n/* .custom-checkbox:hover {\n    transform: scale(1.15);\n    transition: transform 200ms ease-in-out;\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToLocalStorage": () => (/* binding */ addToLocalStorage),
/* harmony export */   "deleteTaskFromStorage": () => (/* binding */ deleteTaskFromStorage),
/* harmony export */   "getLocalStorageDataInArray": () => (/* binding */ getLocalStorageDataInArray)
/* harmony export */ });
// when user add task, add it to a localStorage 

function addToLocalStorage(taskText) {
    let tasks = localStorage.getItem("tasks");
    let taskObj = [];

    if (tasks == null){
        taskObj = [];
    } else {
        taskObj = JSON.parse(tasks);
    }
    taskObj.push(taskText); 
    localStorage.setItem("tasks", JSON.stringify(taskObj));
}


function getLocalStorageDataInArray() {
    let tasks = localStorage.getItem("tasks");
    let taskObj = [];

    if (tasks == null){
        taskObj = [];
    } else {
        taskObj = JSON.parse(tasks);
    }
    return taskObj;
}


function deleteTaskFromStorage(index) {
    let tasks = localStorage.getItem("tasks");
    let taskObj = [];

    if (tasks == null){
        taskObj = [];
    } else {
        taskObj = JSON.parse(tasks);
    }

    taskObj.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(taskObj));
}




/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "displayNewTask": () => (/* binding */ displayNewTask),
/* harmony export */   "makeTaskIdInOrder": () => (/* binding */ makeTaskIdInOrder),
/* harmony export */   "showAllTaskFromLocalStorage": () => (/* binding */ showAllTaskFromLocalStorage)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");



function displayNewTask() {
    const addTask = document.querySelector("#input-add-task");

    addTask.addEventListener("keypress", function(event) {
        if (event.key === "Enter" && addTask.value != "") {
            (0,_storage__WEBPACK_IMPORTED_MODULE_0__.addToLocalStorage)(addTask.value);

            let newTask = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageDataInArray)().pop();

            let html = `
                    <input type="checkbox" id="task-1">
                    <label for="task-1">
                        <span class="custom-checkbox"></span>
                        ${newTask}
                    </label>
                    <i class="fa-solid fa-xmark delete-icon"></i>
                `;

            let ul = document.querySelector(".task-lists");

            let li = document.createElement("li");
            li.classList.add("task");
            li.innerHTML = html;
    
            ul.prepend(li);

            makeTaskIdInOrder();

            addTask.value = "";

            deleteTask();
        };
    });
}


function showAllTaskFromLocalStorage() {
    let tasksArray = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageDataInArray)();

    tasksArray.forEach(function(element, index) {
    let html = `
            <input type="checkbox" id="task-1">
            <label for="task-1">
                <span class="custom-checkbox"></span>
                ${element}
            </label>
            <i class="fa-solid fa-xmark delete-icon" ></i>
        `;

    let ul = document.querySelector(".task-lists");

    let li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = html;
 
    ul.prepend(li);

    makeTaskIdInOrder();
    })
}


function makeTaskIdInOrder() {
    let inputs = document.querySelectorAll(".task-lists li input");
    let labels = document.querySelectorAll(".task-lists li label");

    Array.from(inputs).forEach(function(element, index) {
        element.id = `task-${index}`;
    });

    Array.from(labels).forEach(function(element, index) {
        element.removeAttribute("for");
        element.setAttribute("for", `task-${index}`);
    })
}


function deleteTask() {
    let deleteTaskIcons = document.querySelectorAll(".delete-icon");

    deleteTaskIcons.forEach((item) => {
        item.addEventListener("click", () => {
            item.parentElement.remove();
            let removeTaskIndex = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageDataInArray)().indexOf(item.previousElementSibling.textContent.trim());

            (0,_storage__WEBPACK_IMPORTED_MODULE_0__.deleteTaskFromStorage)(removeTaskIndex);            
        });
    })
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");




(0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.displayNewTask)();
(0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.showAllTaskFromLocalStorage)();
(0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.deleteTask)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2tFOzs7QUFHdkYsMkRBQWM7QUFDZCx3RUFBMkI7QUFDM0IsdURBQVUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjRkZGRkZGO1xcbiAgICAtLWJhY2tncm91bmQtbGlnaHQtZ3JleTogI0VFRUZGMjtcXG4gICAgLS1iYWNrZ3JvdW5kLWRhcmstZ3JleTogI0U0RTVFOTtcXG5cXG4gICAgLS1uYXYtYmFja2dyb3VuZC1ob3ZlcjogI0Y3RjZGN1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQtZ3JleSk7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMXB4O1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxMHB4IDJweDtcXG59XFxuXFxuXFxuLyogSEVBREVSICovXFxuaGVhZGVyICB7XFxuICAgIHBhZGRpbmc6IDM3cHg7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbn1cXG5cXG4uZGVmYXVsdC1wcm9qZWN0IHtcXG4gICAgcGFkZGluZzogMThweDtcXG59XFxuXFxuLmRlZmF1bHQtcHJvamVjdCBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuXFxuLyogTUFJTiAqL1xcbm1haW4ge1xcbiAgICBtYXJnaW46IDIwcHggYXV0byBhdXRvO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEzcHg7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgLyogbGluZS1oZWlnaHQ6IDEuNzsgKi9cXG59XFxuXFxuLmhpZGUge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiByZWQ7ICovXFxuICAgIC8qIGNvbnRlbnQ6ICcnOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxuXFxufVxcblxcblxcblxcbi5hZGQtdGFzazpmb2N1cy13aXRoaW4ge1xcblxcbiAgICAvKiBjb2xvcjogcmVkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAvKiBtYXJnaW4tYm90dG9tOiA5cHg7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmFkZC10YXNrIGxhYmVsIHtcXG4gICAgLyogbWFyZ2luLXJpZ2h0OiA3cHg7ICovXFxufVxcblxcbiNpbnB1dC1hZGQtdGFzayB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmstZ3JleSk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS43O1xcbn1cXG5cXG5cXG4vKiBhZnRlciBmb2N1cyAqL1xcbiNpbnB1dC1hZGQtdGFzazpmb2N1cyB7ICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiBpbml0aWFsO1xcbiAgICBwYWRkaW5nOiBpbml0aWFsO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcblxcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuI2lucHV0LWFkZC10YXNrOmZvY3VzICsgbGFiZWwgLmhpZGUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAvKiBjb2xvcjogcmVkOyAqL1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cXG5cXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLnRhc2sge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmRlbGV0ZS1pY29uIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNXB4O1xcbiAgICByaWdodDogNHB4O1xcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveCB7XFxuICAgIC0tc2l6ZTogMTdweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IGN1cnJlbnRDb2xvcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodC1ncmV5KTtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDBjXFxcIjtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwgLmN1c3RvbS1jaGVja2JveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwgLmN1c3RvbS1jaGVja2JveDo6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2sgbGFiZWw6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDI0cHg7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTYwbXMgZWFzZS1pbi1vdXQ7XFxufSBcXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVxcblxcbi50YXNrIGxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogN3B4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBsaW5lLWhlaWdodDogMS43O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEZPT1RFUiAqL1xcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMzBweDtcXG4gICAgbGVmdDogMTAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuXFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjQpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuXFxuLyogSG92ZXIgKi9cXG4uZGVmYXVsdC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJhY2tncm91bmQtaG92ZXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xcbn1cXG5cXG4udGFzazpob3ZlciAuZGVsZXRlLWljb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiAuY3VzdG9tLWNoZWNrYm94OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn0gKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0NBQWdDO0lBQ2hDLCtCQUErQjs7SUFFL0I7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7QUFDL0I7OztBQUdBLFdBQVc7QUFDWDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOzs7QUFHQSxTQUFTO0FBQ1Q7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSTtpQkFDYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjs7QUFFckI7Ozs7QUFJQTs7SUFFSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qix5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLDZDQUE2QztJQUM3QyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7O0FBR0EsZ0JBQWdCO0FBQ2hCO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQix5QkFBeUI7O0lBRXpCLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsaUJBQWlCOztJQUVqQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwyQkFBMkI7O0FBRS9COzs7Ozs7OztBQVFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDhDQUE4Qzs7SUFFOUMsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjOztBQUVsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxzQ0FBc0M7QUFDMUM7OztBQUdBLFVBQVU7QUFDVjtJQUNJLDZDQUE2QztJQUM3QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTs7O0dBR0dcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtbGlnaHQ6ICNGRkZGRkY7XFxuICAgIC0tYmFja2dyb3VuZC1saWdodC1ncmV5OiAjRUVFRkYyO1xcbiAgICAtLWJhY2tncm91bmQtZGFyay1ncmV5OiAjRTRFNUU5O1xcblxcbiAgICAtLW5hdi1iYWNrZ3JvdW5kLWhvdmVyOiAjRjdGNkY3XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodC1ncmV5KTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDIxcHg7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDEwcHggMnB4O1xcbn1cXG5cXG5cXG4vKiBIRUFERVIgKi9cXG5oZWFkZXIgIHtcXG4gICAgcGFkZGluZzogMzdweDtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gICAgd2lkdGg6IDI1dnc7XFxufVxcblxcbi5kZWZhdWx0LXByb2plY3Qge1xcbiAgICBwYWRkaW5nOiAxOHB4O1xcbn1cXG5cXG4uZGVmYXVsdC1wcm9qZWN0IGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5cXG4vKiBNQUlOICovXFxubWFpbiB7XFxuICAgIG1hcmdpbjogMjBweCBhdXRvIGF1dG87XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTNweDtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICAvKiBsaW5lLWhlaWdodDogMS43OyAqL1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHJlZDsgKi9cXG4gICAgLyogY29udGVudDogJyc7ICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICBcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcXG5cXG59XFxuXFxuXFxuXFxuLmFkZC10YXNrOmZvY3VzLXdpdGhpbiB7XFxuXFxuICAgIC8qIGNvbG9yOiByZWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIC8qIG1hcmdpbi1ib3R0b206IDlweDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2sgbGFiZWwge1xcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDdweDsgKi9cXG59XFxuXFxuI2lucHV0LWFkZC10YXNrIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyay1ncmV5KTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XFxufVxcblxcblxcbi8qIGFmdGVyIGZvY3VzICovXFxuI2lucHV0LWFkZC10YXNrOmZvY3VzIHsgICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IGluaXRpYWw7XFxuICAgIHBhZGRpbmc6IGluaXRpYWw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG5cXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cXG4jaW5wdXQtYWRkLXRhc2s6Zm9jdXMgKyBsYWJlbCAuaGlkZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIC8qIGNvbG9yOiByZWQ7ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcblxcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4udGFzayB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDlweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uZGVsZXRlLWljb24ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHJpZ2h0OiA0cHg7XFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgLS1zaXplOiAxN3B4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiB2YXIoLS1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggY3VycmVudENvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0LWdyZXkpO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufVxcblxcbi5jdXN0b20tY2hlY2tib3g6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwMGNcXFwiO1xcbiAgICBmb250LWZhbWlseTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCAuY3VzdG9tLWNoZWNrYm94OjphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzayBsYWJlbDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMjRweDtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNjBtcyBlYXNlLWluLW91dDtcXG59IFxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG59XFxuXFxuLnRhc2sgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiA3cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgICBsZWZ0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG5cXG59XFxuXFxuLmZhLWdpdGh1YiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxufVxcblxcbi5mYS1naXRodWI6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuNCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5cXG4vKiBIb3ZlciAqL1xcbi5kZWZhdWx0LXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZC1ob3Zlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XFxufVxcblxcbi50YXNrOmhvdmVyIC5kZWxldGUtaWNvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIC5jdXN0b20tY2hlY2tib3g6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIHdoZW4gdXNlciBhZGQgdGFzaywgYWRkIGl0IHRvIGEgbG9jYWxTdG9yYWdlIFxuXG5mdW5jdGlvbiBhZGRUb0xvY2FsU3RvcmFnZSh0YXNrVGV4dCkge1xuICAgIGxldCB0YXNrcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIik7XG4gICAgbGV0IHRhc2tPYmogPSBbXTtcblxuICAgIGlmICh0YXNrcyA9PSBudWxsKXtcbiAgICAgICAgdGFza09iaiA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tPYmogPSBKU09OLnBhcnNlKHRhc2tzKTtcbiAgICB9XG4gICAgdGFza09iai5wdXNoKHRhc2tUZXh0KTsgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrT2JqKSk7XG59XG5cblxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlRGF0YUluQXJyYXkoKSB7XG4gICAgbGV0IHRhc2tzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKTtcbiAgICBsZXQgdGFza09iaiA9IFtdO1xuXG4gICAgaWYgKHRhc2tzID09IG51bGwpe1xuICAgICAgICB0YXNrT2JqID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza09iaiA9IEpTT04ucGFyc2UodGFza3MpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza09iajtcbn1cblxuXG5mdW5jdGlvbiBkZWxldGVUYXNrRnJvbVN0b3JhZ2UoaW5kZXgpIHtcbiAgICBsZXQgdGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpO1xuICAgIGxldCB0YXNrT2JqID0gW107XG5cbiAgICBpZiAodGFza3MgPT0gbnVsbCl7XG4gICAgICAgIHRhc2tPYmogPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrT2JqID0gSlNPTi5wYXJzZSh0YXNrcyk7XG4gICAgfVxuXG4gICAgdGFza09iai5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza09iaikpO1xufVxuXG5cbmV4cG9ydCB7IGFkZFRvTG9jYWxTdG9yYWdlLCBnZXRMb2NhbFN0b3JhZ2VEYXRhSW5BcnJheSwgZGVsZXRlVGFza0Zyb21TdG9yYWdlIH07IiwiaW1wb3J0IHsgYWRkVG9Mb2NhbFN0b3JhZ2UsIGdldExvY2FsU3RvcmFnZURhdGFJbkFycmF5LCBkZWxldGVUYXNrRnJvbVN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdUYXNrKCkge1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0LWFkZC10YXNrXCIpO1xuXG4gICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmIGFkZFRhc2sudmFsdWUgIT0gXCJcIikge1xuICAgICAgICAgICAgYWRkVG9Mb2NhbFN0b3JhZ2UoYWRkVGFzay52YWx1ZSk7XG5cbiAgICAgICAgICAgIGxldCBuZXdUYXNrID0gZ2V0TG9jYWxTdG9yYWdlRGF0YUluQXJyYXkoKS5wb3AoKTtcblxuICAgICAgICAgICAgbGV0IGh0bWwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInRhc2stMVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImN1c3RvbS1jaGVja2JveFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7bmV3VGFza31cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFyayBkZWxldGUtaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICBgO1xuXG4gICAgICAgICAgICBsZXQgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdHNcIik7XG5cbiAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gaHRtbDtcbiAgICBcbiAgICAgICAgICAgIHVsLnByZXBlbmQobGkpO1xuXG4gICAgICAgICAgICBtYWtlVGFza0lkSW5PcmRlcigpO1xuXG4gICAgICAgICAgICBhZGRUYXNrLnZhbHVlID0gXCJcIjtcblxuICAgICAgICAgICAgZGVsZXRlVGFzaygpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5cbmZ1bmN0aW9uIHNob3dBbGxUYXNrRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICBsZXQgdGFza3NBcnJheSA9IGdldExvY2FsU3RvcmFnZURhdGFJbkFycmF5KCk7XG5cbiAgICB0YXNrc0FycmF5LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBsZXQgaHRtbCA9IGBcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInRhc2stMVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stMVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3VzdG9tLWNoZWNrYm94XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICR7ZWxlbWVudH1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrIGRlbGV0ZS1pY29uXCIgPjwvaT5cbiAgICAgICAgYDtcblxuICAgIGxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0c1wiKTtcblxuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICBsaS5pbm5lckhUTUwgPSBodG1sO1xuIFxuICAgIHVsLnByZXBlbmQobGkpO1xuXG4gICAgbWFrZVRhc2tJZEluT3JkZXIoKTtcbiAgICB9KVxufVxuXG5cbmZ1bmN0aW9uIG1ha2VUYXNrSWRJbk9yZGVyKCkge1xuICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stbGlzdHMgbGkgaW5wdXRcIik7XG4gICAgbGV0IGxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1saXN0cyBsaSBsYWJlbFwiKTtcblxuICAgIEFycmF5LmZyb20oaW5wdXRzKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgIGVsZW1lbnQuaWQgPSBgdGFzay0ke2luZGV4fWA7XG4gICAgfSk7XG5cbiAgICBBcnJheS5mcm9tKGxhYmVscykuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImZvclwiKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYHRhc2stJHtpbmRleH1gKTtcbiAgICB9KVxufVxuXG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soKSB7XG4gICAgbGV0IGRlbGV0ZVRhc2tJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLWljb25cIik7XG5cbiAgICBkZWxldGVUYXNrSWNvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICBsZXQgcmVtb3ZlVGFza0luZGV4ID0gZ2V0TG9jYWxTdG9yYWdlRGF0YUluQXJyYXkoKS5pbmRleE9mKGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudC50cmltKCkpO1xuXG4gICAgICAgICAgICBkZWxldGVUYXNrRnJvbVN0b3JhZ2UocmVtb3ZlVGFza0luZGV4KTsgICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfSlcbn1cblxuXG5leHBvcnQgeyBkZWxldGVUYXNrLCBkaXNwbGF5TmV3VGFzaywgIG1ha2VUYXNrSWRJbk9yZGVyLCBzaG93QWxsVGFza0Zyb21Mb2NhbFN0b3JhZ2UgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGRlbGV0ZVRhc2ssIGRpc3BsYXlOZXdUYXNrLCBzaG93QWxsVGFza0Zyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL21vZHVsZXMvdWknO1xuXG5cbmRpc3BsYXlOZXdUYXNrKCk7XG5zaG93QWxsVGFza0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbmRlbGV0ZVRhc2soKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=