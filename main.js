/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles/style */ \"./styles/style.scss\");\n\nconst html = document.querySelector('.html');\nconst page = document.querySelector('.page');\nconst header = document.querySelector('.header');\nconst logo = document.querySelector('.header__logo');\nconst hamburger = document.querySelector('.hamburger');\nconst menu = document.querySelector('.header__menu');\n\nconst toggleMenu = () => {\n  page.classList.toggle('scroll-lock');\n  hamburger.classList.toggle('active');\n  menu.classList.toggle('is-open');\n};\n\nconst hideMenu = () => {\n  page.classList.remove('scroll-lock');\n  hamburger.classList.remove('active');\n  menu.classList.remove('is-open');\n};\n\nhamburger.addEventListener('click', () => {\n  toggleMenu();\n});\ndocument.addEventListener('scroll', () => {\n  hideMenu();\n});\nlogo.addEventListener('click', () => {\n  hideMenu();\n});\nmenu.addEventListener('click', () => {\n  hideMenu();\n});\n\nconst writeVariable = (name, value) => {\n  html.style.setProperty(name, value);\n};\n\nconst calculateHeaderHeight = () => {\n  const headerHeight = `${header.offsetHeight}px`;\n  writeVariable('--header-height', headerHeight);\n};\n\nconst calculateIconsGap = () => {\n  const iconFirst = document.querySelector('.order__features-item:nth-child(1) .order__features-circle');\n  const iconSecond = document.querySelector('.order__features-item:nth-child(2) .order__features-circle');\n  const iconsGap = `${iconSecond.offsetLeft - (iconFirst.offsetLeft + iconFirst.offsetWidth)}px`;\n  writeVariable('--order-circle-gap', iconsGap);\n};\n\nconst calculateVariables = () => {\n  calculateHeaderHeight();\n  calculateIconsGap();\n};\n\nconst rangeValue = document.querySelector('.form__range-value');\nconst rangeInput = document.querySelector('.form__range-input');\n\nconst updateInputRange = () => {\n  rangeValue.textContent = `${rangeInput.value} %`;\n};\n\nrangeInput.addEventListener('input', () => {\n  updateInputRange();\n});\ndocument.addEventListener('DOMContentLoaded', () => {\n  updateInputRange();\n  calculateVariables();\n});\n\nconst resizeWindowHandler = () => {\n  hideMenu();\n  calculateVariables();\n};\n\nwindow.addEventListener('resize', resizeWindowHandler);\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/style.scss?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;