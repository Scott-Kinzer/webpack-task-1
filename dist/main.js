/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n  return uuid;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n    return buf;\n  }\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   noteCategory: () => (/* binding */ noteCategory),\n/* harmony export */   notesData: () => (/* binding */ notesData)\n/* harmony export */ });\nvar notesData = [{\n  id: 1,\n  name: \"Shopping list\",\n  created: new Date(\"2022-03-25\"),\n  category: \"task\",\n  content: \"Tomatoes, bread\",\n  isArchive: false\n}, {\n  id: 2,\n  name: \"Theory of evolution\",\n  created: new Date(\"2021-04-21\"),\n  category: \"thought\",\n  content: \"The evolution\",\n  isArchive: false\n}, {\n  id: 3,\n  name: \"New Feature\",\n  created: new Date(\"2022-03-25\"),\n  category: \"idea\",\n  content: \"I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021” the dates column is “3/5/2021, 5/5/2021\",\n  isArchive: false\n}, {\n  id: 4,\n  name: \"William Gaddis\",\n  created: new Date(\"2022-03-25\"),\n  category: \"quote\",\n  content: \"Power doesn't make\",\n  isArchive: false\n}, {\n  id: 5,\n  name: \"Books\",\n  created: new Date(\"2022-05-21\"),\n  category: \"task\",\n  content: \"The lean startup\",\n  isArchive: false\n}];\nvar noteCategory = {\n  idea: {\n    name: \"Idea\",\n    imagePath: \"./src/images/task-icons/bulb.svg\"\n  },\n  task: {\n    name: \"Task\",\n    imagePath: \"./src/images/task-icons/cart.svg\"\n  },\n  thought: {\n    name: \"Random Thought\",\n    imagePath: \"./src/images/task-icons/thought.svg\"\n  },\n  quote: {\n    name: \"Quote\",\n    imagePath: \"./src/images/task-icons/quote.svg\"\n  }\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/data.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNoteBtn: () => (/* binding */ createNoteBtn)\n/* harmony export */ });\n/* harmony import */ var _helpers_getFormElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/getFormElements.js */ \"./src/helpers/getFormElements.js\");\n\nvar createNoteBtn = function createNoteBtn(e, clearActiveEditNoteId) {\n  var noteForm = document.querySelector('.note-form');\n  noteForm.classList.toggle(\"hide\") ? e.target.textContent = 'Create note' : e.target.textContent = 'Hide form';\n  var _getFormElements = (0,_helpers_getFormElements_js__WEBPACK_IMPORTED_MODULE_0__.getFormElements)(),\n    noteName = _getFormElements.noteName,\n    noteContent = _getFormElements.noteContent,\n    noteCategory = _getFormElements.noteCategory;\n  noteName.value = \"\";\n  noteContent.value = \"\";\n  noteCategory.value = \"task\";\n  clearActiveEditNoteId();\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/handlers.js?");

/***/ }),

/***/ "./src/helpers/extractDate.js":
/*!************************************!*\
  !*** ./src/helpers/extractDate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   extractDates: () => (/* binding */ extractDates)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction extractDates(text) {\n  var datePattern = /\\d{1,2}\\/\\d{1,2}\\/\\d{4}/g;\n  var dates = text.match(datePattern);\n  if (!dates) return \"\";\n  return _toConsumableArray(new Set(dates)).join(', ');\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/helpers/extractDate.js?");

/***/ }),

/***/ "./src/helpers/filterNotes.js":
/*!************************************!*\
  !*** ./src/helpers/filterNotes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filterNotes: () => (/* binding */ filterNotes)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar filterNotes = function filterNotes(notesCopy) {\n  return notesCopy.reduce(function (acc, item) {\n    if (item.isArchive) {\n      var _acc$item$category, _acc$item$category2;\n      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, item.category, _objectSpread(_objectSpread({}, acc[item.category]), {}, {\n        archive: (_acc$item$category = acc[item.category]) !== null && _acc$item$category !== void 0 && _acc$item$category.archive ? ((_acc$item$category2 = acc[item.category]) === null || _acc$item$category2 === void 0 ? void 0 : _acc$item$category2.archive) + 1 : 1\n      })));\n    } else {\n      var _acc$item$category3, _acc$item$category4;\n      // Active\n      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, item.category, _objectSpread(_objectSpread({}, acc[item.category]), {}, {\n        active: (_acc$item$category3 = acc[item.category]) !== null && _acc$item$category3 !== void 0 && _acc$item$category3.active ? ((_acc$item$category4 = acc[item.category]) === null || _acc$item$category4 === void 0 ? void 0 : _acc$item$category4.active) + 1 : 1\n      })));\n    }\n  }, {});\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/helpers/filterNotes.js?");

/***/ }),

/***/ "./src/helpers/formatDate.js":
/*!***********************************!*\
  !*** ./src/helpers/formatDate.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatDate: () => (/* binding */ formatDate)\n/* harmony export */ });\nvar formatDate = function formatDate(date) {\n  try {\n    var month = date.toLocaleString('default', {\n      month: 'long'\n    });\n    var day = date.getDate();\n    var year = date.getFullYear();\n    var formattedDate = \"\".concat(month, \" \").concat(day, \", \").concat(year);\n    return formattedDate;\n  } catch (_unused) {\n    return \"Wrong date\";\n  }\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/helpers/formatDate.js?");

/***/ }),

/***/ "./src/helpers/getFormElements.js":
/*!****************************************!*\
  !*** ./src/helpers/getFormElements.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFormElements: () => (/* binding */ getFormElements)\n/* harmony export */ });\nvar getFormElements = function getFormElements() {\n  var noteName = document.getElementById('note-form-name');\n  var noteContent = document.getElementById('note-form-content');\n  var noteCategory = document.getElementById('note-form-category');\n  return {\n    noteName: noteName,\n    noteContent: noteContent,\n    noteCategory: noteCategory\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/helpers/getFormElements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n/* harmony import */ var _helpers_formatDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/formatDate.js */ \"./src/helpers/formatDate.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _helpers_extractDate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/extractDate.js */ \"./src/helpers/extractDate.js\");\n/* harmony import */ var _showSummaryNotes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showSummaryNotes.js */ \"./src/showSummaryNotes.js\");\n/* harmony import */ var _helpers_getFormElements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/getFormElements.js */ \"./src/helpers/getFormElements.js\");\n/* harmony import */ var _handlers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers.js */ \"./src/handlers.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _images_icons_trash_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/icons/trash.svg */ \"./src/images/icons/trash.svg\");\n/* harmony import */ var _images_icons_edit_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/icons/edit.svg */ \"./src/images/icons/edit.svg\");\n/* harmony import */ var _images_icons_archive_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/icons/archive.svg */ \"./src/images/icons/archive.svg\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\n\n\n\n\n\n\n\nvar buttonNoteCreateEl = document.querySelector('.button-note-create');\nvar headerArchiveIcon = document.querySelector('.archive-icon');\nvar notesCopy = _data_js__WEBPACK_IMPORTED_MODULE_0__.notesData;\nvar isArchiveView = false;\nvar activeEditNoteId = \"\";\nvar clearActiveEditNoteId = function clearActiveEditNoteId() {\n  activeEditNoteId = \"\";\n};\nheaderArchiveIcon.addEventListener('click', function () {\n  isArchiveView = !isArchiveView;\n  headerArchiveIcon.classList.toggle('isActive');\n  showNotes();\n});\nbuttonNoteCreateEl.addEventListener('click', function (e) {\n  return (0,_handlers_js__WEBPACK_IMPORTED_MODULE_5__.createNoteBtn)(e, clearActiveEditNoteId);\n});\nvar formEl = document.querySelector('.note-form');\nformEl.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var _getFormElements = (0,_helpers_getFormElements_js__WEBPACK_IMPORTED_MODULE_4__.getFormElements)(),\n    noteName = _getFormElements.noteName,\n    noteContent = _getFormElements.noteContent,\n    noteCategory = _getFormElements.noteCategory;\n  if (!noteName.value || !noteCategory.value || !noteCategory.value) return;\n  var newNote = {\n    name: noteName.value,\n    content: noteContent.value,\n    category: noteCategory.value,\n    created: new Date(),\n    isArchive: false,\n    id: (0,uuid__WEBPACK_IMPORTED_MODULE_10__[\"default\"])()\n  };\n  if (activeEditNoteId) {\n    notesCopy = notesCopy.map(function (noteItemObject) {\n      if (activeEditNoteId === noteItemObject.id) {\n        return _objectSpread(_objectSpread({}, noteItemObject), newNote);\n      }\n      return noteItemObject;\n    });\n  } else {\n    notesCopy.push(newNote);\n  }\n  showNotes();\n  noteName.value = \"\";\n  noteContent.value = \"\";\n  noteCategory.value = \"task\";\n  activeEditNoteId = \"\";\n  var noteForm = document.querySelector('.note-form');\n  noteForm.classList.toggle(\"hide\") ? buttonNoteCreateEl.textContent = 'Create note' : buttonNoteCreateEl.textContent = 'Hide form';\n});\nvar showNotes = function showNotes() {\n  var notesClass = document.querySelector('.notes');\n  notesClass.innerHTML = \"\";\n  (0,_showSummaryNotes_js__WEBPACK_IMPORTED_MODULE_3__.showSummaryNotes)(notesCopy);\n  var innerNotesCopy = notesCopy.filter(function (item) {\n    if (isArchiveView) {\n      return item.isArchive;\n    } else {\n      return !item.isArchive;\n    }\n  });\n  innerNotesCopy.forEach(function (noteItem) {\n    var name = noteItem.name,\n      created = noteItem.created,\n      content = noteItem.content,\n      category = noteItem.category,\n      id = noteItem.id;\n    var noteItemEl = document.createElement('div');\n    noteItemEl.className = \"note-item\";\n\n    // Note Name\n    var noteName = document.createElement('div');\n    noteName.className = \"note-name\";\n    var noteImg = document.createElement('img');\n    noteImg.src = _data_js__WEBPACK_IMPORTED_MODULE_0__.noteCategory[category].imagePath;\n    var noteNameText = document.createElement('p');\n    noteNameText.textContent = name;\n    noteName.appendChild(noteImg);\n    noteName.appendChild(noteNameText);\n    noteItemEl.appendChild(noteName);\n\n    // Note Created\n    var noteCreatedEl = document.createElement('div');\n    noteCreatedEl.className = \"note-created\";\n    var noteCreatedText = document.createElement('p');\n    noteCreatedText.textContent = (0,_helpers_formatDate_js__WEBPACK_IMPORTED_MODULE_1__.formatDate)(created);\n    noteCreatedEl.appendChild(noteCreatedText);\n    noteItemEl.appendChild(noteCreatedEl);\n\n    // Note Category\n    var noteCategoryEl = document.createElement('div');\n    noteCategoryEl.className = \"note-category\";\n    var noteCategoryText = document.createElement('p');\n    noteCategoryText.textContent = _data_js__WEBPACK_IMPORTED_MODULE_0__.noteCategory[category].name;\n    noteCategoryEl.appendChild(noteCategoryText);\n    noteItemEl.appendChild(noteCategoryEl);\n\n    // Note Content\n    var noteContentEl = document.createElement('div');\n    noteContentEl.className = \"note-content\";\n    var noteContentText = document.createElement('p');\n    noteContentText.textContent = content;\n    noteContentEl.appendChild(noteContentText);\n    noteItemEl.appendChild(noteContentEl);\n\n    // Note Content\n    var noteDateEl = document.createElement('div');\n    noteDateEl.className = \"note-date\";\n    var noteDateText = document.createElement('p');\n    noteDateText.textContent = (0,_helpers_extractDate_js__WEBPACK_IMPORTED_MODULE_2__.extractDates)(content);\n    noteDateEl.appendChild(noteDateText);\n    noteItemEl.appendChild(noteDateEl);\n\n    // Note Icons\n    var noteIconsEl = document.createElement('div');\n    noteIconsEl.className = \"note-icons\";\n    var noteImgEdit = document.createElement('img');\n    noteImgEdit.src = _images_icons_edit_svg__WEBPACK_IMPORTED_MODULE_8__;\n    var noteImgArchive = document.createElement('img');\n    noteImgArchive.src = _images_icons_archive_svg__WEBPACK_IMPORTED_MODULE_9__;\n    var noteImgTrash = document.createElement('img');\n    noteImgTrash.src = _images_icons_trash_svg__WEBPACK_IMPORTED_MODULE_7__;\n    noteImgEdit.addEventListener('click', function () {\n      var noteForm = document.querySelector('.note-form');\n      if (noteForm.classList.contains(\"hide\")) {\n        noteForm.classList.toggle(\"hide\");\n        buttonNoteCreateEl.textContent = 'Hide form';\n      }\n      var _getFormElements2 = (0,_helpers_getFormElements_js__WEBPACK_IMPORTED_MODULE_4__.getFormElements)(),\n        noteName = _getFormElements2.noteName,\n        noteContent = _getFormElements2.noteContent,\n        noteCategory = _getFormElements2.noteCategory;\n      activeEditNoteId = id;\n      noteName.value = name;\n      noteContent.value = content;\n      noteCategory.value = category;\n    });\n    noteImgTrash.addEventListener('click', function () {\n      var noteForm = document.querySelector('.note-form');\n      notesCopy = notesCopy.filter(function (noteItemInner) {\n        return noteItemInner.id !== id;\n      });\n      if (!noteForm.classList.contains(\"hide\")) {\n        noteForm.classList.toggle(\"hide\");\n        buttonNoteCreateEl.textContent = 'Create note';\n      }\n      showNotes();\n    });\n    noteImgArchive.addEventListener('click', function () {\n      notesCopy = notesCopy.map(function (noteItemInner) {\n        if (noteItemInner.id === id) {\n          return _objectSpread(_objectSpread({}, noteItemInner), {}, {\n            isArchive: !noteItemInner.isArchive\n          });\n        }\n        return noteItemInner;\n      });\n      showNotes();\n    });\n    if (!isArchiveView) {\n      noteIconsEl.appendChild(noteImgEdit);\n    }\n    noteIconsEl.appendChild(noteImgArchive);\n    if (!isArchiveView) {\n      noteIconsEl.appendChild(noteImgTrash);\n    }\n    noteItemEl.appendChild(noteIconsEl);\n    notesClass.appendChild(noteItemEl);\n  });\n};\nshowNotes();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/showSummaryNotes.js":
/*!*********************************!*\
  !*** ./src/showSummaryNotes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showSummaryNotes: () => (/* binding */ showSummaryNotes)\n/* harmony export */ });\n/* harmony import */ var _helpers_filterNotes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/filterNotes.js */ \"./src/helpers/filterNotes.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\n\nvar showSummaryNotes = function showSummaryNotes(notes) {\n  var categoryNotes = (0,_helpers_filterNotes_js__WEBPACK_IMPORTED_MODULE_0__.filterNotes)(notes);\n  var summaryInner = document.querySelector('.summary-inner');\n  summaryInner.innerHTML = \"\";\n  for (var note in categoryNotes) {\n    var summaryItemEl = document.createElement('div');\n    summaryItemEl.className = \"summary-note-item\";\n    var caregoryItemEl = document.createElement('div');\n    caregoryItemEl.className = \"summary-note-item-category\";\n    var summaryImg = document.createElement('img');\n    summaryImg.src = _data_js__WEBPACK_IMPORTED_MODULE_1__.noteCategory[note].imagePath;\n    var summaryImgText = document.createElement('p');\n    summaryImgText.textContent = _data_js__WEBPACK_IMPORTED_MODULE_1__.noteCategory[note].name;\n    caregoryItemEl.appendChild(summaryImg);\n    caregoryItemEl.appendChild(summaryImgText);\n    summaryItemEl.appendChild(caregoryItemEl);\n\n    // Active\n    var summaryNoteActiveEl = document.createElement('div');\n    summaryNoteActiveEl.className = \"note-active\";\n    var summaryNoteActiveElText = document.createElement('p');\n    summaryNoteActiveElText.textContent = categoryNotes[note].active ? categoryNotes[note].active : 0;\n    summaryNoteActiveEl.appendChild(summaryNoteActiveElText);\n    summaryItemEl.appendChild(summaryNoteActiveEl);\n\n    // Archive \n    var summaryNoteArchiveEl = document.createElement('div');\n    summaryNoteArchiveEl.className = \"note-archive\";\n    var summaryNoteArchiveElText = document.createElement('p');\n    summaryNoteArchiveElText.textContent = categoryNotes[note].archive ? categoryNotes[note].archive : 0;\n    summaryNoteArchiveEl.appendChild(summaryNoteArchiveElText);\n    summaryItemEl.appendChild(summaryNoteArchiveEl);\n    summaryInner.appendChild(summaryItemEl);\n  }\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/showSummaryNotes.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  background-color: rgb(171, 133, 133);\n  padding: 20px;\n}\n\n.header-notes {\n  height: 50px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1.1fr 0.9fr;\n  background-color: rgb(197, 181, 181);\n  border-radius: 5px;\n  padding: 10px 10px 10px 10px;\n  gap: 20px;\n}\n.header-notes div {\n  display: flex;\n  align-items: center;\n}\n.header-notes .icons-header {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-left: auto;\n}\n.header-notes .icons-header .archive-icon {\n  cursor: pointer;\n  margin-right: unset;\n}\n.header-notes .icons-header .archive-icon img {\n  width: 20px;\n}\n.header-notes .icons-header .trash-icon {\n  margin-right: unset;\n}\n.header-notes .icons-header .trash-icon img {\n  width: 20px;\n}\n\n.notes {\n  margin-top: 30px;\n}\n.notes .note-item {\n  margin-top: 20px;\n  border-radius: 10px;\n  height: 80px;\n  background-color: rgb(95, 177, 149);\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n  padding: 10px 10px 10px 10px;\n  gap: 20px;\n}\n.notes .note-item .note-name, .notes .note-item .note-created, .notes .note-item .note-category, .notes .note-item .note-content, .notes .note-item .note-date, .notes .note-item .note-icons {\n  display: flex;\n  align-items: center;\n}\n.notes .note-item .note-content {\n  overflow: hidden;\n}\n.notes .note-item .note-content p {\n  width: 100%;\n  overflow: hidden;\n  display: inline-block;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.notes .note-item .note-name {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.notes .note-item .note-name img {\n  width: 20px;\n}\n.notes .note-item .note-icons {\n  margin-left: auto;\n  gap: 20px;\n  display: flex;\n}\n.notes .note-item .note-icons img {\n  width: 20px;\n  cursor: pointer;\n}\n\n.summary {\n  margin-top: 20px;\n}\n.summary .header-summary {\n  height: 50px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  background-color: rgb(197, 181, 181);\n  border-radius: 5px;\n  padding: 10px 10px 10px 10px;\n}\n.summary .header-summary div {\n  display: flex;\n  align-items: center;\n}\n.summary .summary-note-item {\n  border-radius: 10px;\n  height: 80px;\n  background-color: rgb(95, 177, 149);\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  padding: 10px 10px 10px 10px;\n  margin-top: 20px;\n}\n.summary .summary-note-item .note-active, .summary .summary-note-item .note-archive {\n  display: flex;\n  align-items: center;\n}\n.summary .summary-note-item .summary-note-item-category {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.summary .summary-note-item .summary-note-item-category img {\n  width: 20px;\n}\n\n.note-form {\n  padding: 20px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 20px;\n}\n.note-form input {\n  height: 40px;\n  border-radius: 10px;\n  padding: 5px;\n}\n.note-form button {\n  height: 40px;\n  background-color: antiquewhite;\n  grid-column-start: 2;\n}\n\n.button-note-create {\n  height: 40px;\n  background-color: rgb(130, 115, 95);\n  width: 100px;\n  color: white;\n  margin-top: 20px;\n  margin-left: auto;\n  display: block;\n}\n\n.hide {\n  display: none;\n}\n\n.isActive {\n  border-radius: 5px;\n  background-color: green;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/icons/archive.svg":
/*!**************************************!*\
  !*** ./src/images/icons/archive.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/archive-22af1f62feb0f6d86c72.svg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/images/icons/archive.svg?");

/***/ }),

/***/ "./src/images/icons/edit.svg":
/*!***********************************!*\
  !*** ./src/images/icons/edit.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/edit-f1bdb90caca5f66c0a20.svg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/images/icons/edit.svg?");

/***/ }),

/***/ "./src/images/icons/trash.svg":
/*!************************************!*\
  !*** ./src/images/icons/trash.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/trash-18d967047ce8e906d570.svg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/images/icons/trash.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;