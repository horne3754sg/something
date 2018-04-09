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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/menu.json":
/*!****************************!*\
  !*** ./src/data/menu.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

eval("module.exports = [{\"key\":\"myLearning\",\"title\":\"My Learning\",\"size\":\"50\",\"color\":\"c1\",\"icon\":{\"default\":\"menu-icon2.svg\",\"fallback\":\"icon1.png\"},\"link\":\"http://localhost:8080/\"},{\"key\":\"my360\",\"title\":\"My 360\",\"size\":\"50\",\"color\":\"c2\",\"icon\":{\"default\":\"menu-icon2.svg\",\"fallback\":\"icon2.png\"},\"link\":\"http://localhost:8080/\"},{\"key\":\"profile\",\"title\":\"Profile\",\"size\":\"33\",\"color\":\"c3\",\"icon\":{\"default\":\"menu-icon2.svg\",\"fallback\":\"icon3.png\"},\"link\":\"http://localhost:8080/\"},{\"key\":\"people\",\"title\":\"People\",\"size\":\"33\",\"color\":\"c4\",\"icon\":{\"default\":\"menu-icon2.svg\",\"fallback\":\"icon4.png\"},\"link\":\"http://localhost:8080/\"},{\"key\":\"pathway\",\"title\":\"Pathway\",\"size\":\"33\",\"color\":\"c5\",\"icon\":{\"default\":\"menu-icon2.svg\",\"fallback\":\"icon5.png\"},\"link\":\"http://localhost:8080/\"}];\n\n//# sourceURL=webpack:///./src/data/menu.json?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/menu.json */ \"./src/data/menu.json\");\nvar _data_menu_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/Object.assign({}, _data_menu_json__WEBPACK_IMPORTED_MODULE_0__, {\"default\": _data_menu_json__WEBPACK_IMPORTED_MODULE_0__});\n\n\nvar MCLMS = (function (document) {\n\n\tvar $cache = {};\n\n\tvar init = function () {\n\t\t$cache.iwrap = document.getElementById('iwrap');\n\t\t$cache.kahuna = document.getElementById('kahuna');\n\t\t$cache.mainMenu = document.getElementById('mainMenu');\n\t\t$cache.menuItems = document.querySelector('#menuItems');\n\t\t$cache.modalBg = document.getElementById('modalBg');\n\n\t\tparseMenu(_data_menu_json__WEBPACK_IMPORTED_MODULE_0__, $cache.menuItems);\n\t\tevents();\n\t};\n\n\t// List events\n\tvar events = function (a, b, c) {\n\t\t$cache.kahuna.addEventListener('click', function (e) {\n\t\t\te.preventDefault();\n\t\t\t_editClass($cache.mainMenu, 'opened', 'toggle');\n\t\t\t_editClass($cache.modalBg, 'opened', 'toggle');\n\t\t});\n\t};  \n\n    /**\n     * \n     * @param {*} data json array of menu objects \n     * @param {*} targetEl element the menu objects attach to\n     */\n\tvar parseMenu = function (data, targetEl) {\n\t\tlet menuObj = data;\n\t\tlet menuItems = [];\n\n\t\tmenuObj.map(element => {\n\t\t\tlet menuItem = \n\t\t\t\t`<div class=\"menuItem size-${element.size} ${element.color}\" data-location=\"${element.link}\">\n\t\t\t\t<object data=\"/dist/images/${element.icon.default}\" type=\"image/svg+xml\">\t\n\t\t\t\t\t<img src=\"/dist/images/${element.icon.fallback}\">\n\t\t\t\t</object>\n\t\t\t\t\t<div class=\"title\">${element.title}</div>\n\t\t\t\t</div>`;\n\t\t\t\t\n\t\t\ttargetEl.insertAdjacentHTML('beforeend', menuItem);\n\t\t});\n\n\t\tinitMenu();\n\t};``\n\n\tvar initMenu = function() {\n\t\tlet menuItems = document.querySelectorAll('.menuItem');\n\n\t\tfor (let i = 0; i < menuItems.length; i++) {\n\n\t\t\tmenuItems[i].addEventListener('click', function(el) {\n\t\t\t\twindow.location.href = menuItems[i].dataset.location;\n\t\t\t});\n\t\n\t\t}\n\t}\n \n    /**\n     * Class manipulation\n     * \n     * @param {*} t target element\n     * @param {*} c class to add/remove\n     * @param {*} a action to perform\n     */\n\tvar _editClass = function (t, c, a) {\n\t\tif (a === 'add')\n\t\t\tt.classList.add(c);\n\n\t\tif (a === 'remove')\n\t\t\tt.classList.remove(c);\n\n\t\tif (a === 'toggle')\n\t\t\tt.classList.toggle(c);\n\t};\n\n\t// return functions that are accessible publicly\n\treturn {\n\t\tinit: init\n\t};\n\n})(document || {});\n\nMCLMS.init();\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/main.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/app.js */\"./src/js/app.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/main.scss */\"./src/scss/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js_./src/scss/main.scss?");

/***/ })

/******/ });