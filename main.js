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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles/style */ \"./styles/style.sass\");\n/* harmony import */ var _js_modules_playfield_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/modules/playfield.js */ \"./js/modules/playfield.js\");\n/* harmony import */ var _js_modules_popups_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/modules/popups.js */ \"./js/modules/popups.js\");\n/* harmony import */ var _js_modules_timer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/modules/timer.js */ \"./js/modules/timer.js\");\n\n\n\n\nconst playfield = document.querySelector('.mem-game__playfield');\nconst topbar = document.querySelector('.mem-game__topbar');\n\nconst showPlayfield = delay => {\n  setTimeout(() => {\n    playfield.classList.add('active');\n    topbar.classList.add('active');\n  }, delay);\n};\n\nconst hidePlayfield = () => {\n  (0,_js_modules_popups_js__WEBPACK_IMPORTED_MODULE_2__.hidePopup)();\n  (0,_js_modules_timer_js__WEBPACK_IMPORTED_MODULE_3__.stopTimer)();\n  playfield.classList.remove('active');\n  topbar.classList.remove('active');\n};\n\nconst mainMenu = document.querySelector('.mem-game__menu');\nconst background = document.querySelector('.mem-game__bg');\n\nconst showMainMenu = delay => {\n  const popupName = _js_modules_popups_js__WEBPACK_IMPORTED_MODULE_2__.currentPopup.name;\n  const isPause = popupName === 'pause';\n  const isVictory = popupName === 'victory';\n  const isDefeat = popupName === 'defeat';\n\n  if (isPause || isVictory || isDefeat) {\n    hidePlayfield();\n  }\n\n  setTimeout(() => {\n    mainMenu.classList.add('active');\n    background.classList.add('active');\n  }, delay);\n};\n\nconst hideMainMenu = () => {\n  mainMenu.classList.remove('active');\n  background.classList.remove('active');\n};\n\nconst delayShowMainMenuAfterPageDowload = 2000;\nshowMainMenu(delayShowMainMenuAfterPageDowload);\nconst playBtn = document.querySelector('.mem-game__play-btn');\nplayBtn.addEventListener('click', () => {\n  hideMainMenu();\n  const delayShowPlayfieldAfterHideMainMenu = 1000;\n  showPlayfield(delayShowPlayfieldAfterHideMainMenu);\n  (0,_js_modules_playfield_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\nconst retry = () => {\n  (0,_js_modules_popups_js__WEBPACK_IMPORTED_MODULE_2__.hidePopup)();\n  (0,_js_modules_timer_js__WEBPACK_IMPORTED_MODULE_3__.stopTimer)();\n  (0,_js_modules_playfield_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\nconst retryBtn = document.querySelectorAll('.mem-game__retry-btn');\nretryBtn.forEach(el => {\n  el.addEventListener('click', () => {\n    retry();\n  });\n});\nconst mainMenuBtn = document.querySelectorAll('.mem-game__menu-btn');\nconst delayShowMainMenuAfterClickBtn = 1000;\nmainMenuBtn.forEach(el => {\n  el.addEventListener('click', () => {\n    showMainMenu(delayShowMainMenuAfterClickBtn);\n  });\n});\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/modules/common.js":
/*!******************************!*\
  !*** ./js/modules/common.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst convertTime = time => {\n  const date = new Date(time);\n  const min = `${date.getMinutes()}`.padStart(2, '0');\n  const sec = `${date.getSeconds()}`.padStart(2, '0');\n  const convertedTime = `${min}:${sec}`;\n  return convertedTime;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (convertTime);\n\n//# sourceURL=webpack:///./js/modules/common.js?");

/***/ }),

/***/ "./js/modules/playfield.js":
/*!*********************************!*\
  !*** ./js/modules/playfield.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_images_playfield_cubes_front_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/images/playfield/cubes/front.png */ \"./assets/images/playfield/cubes/front.png\");\n/* harmony import */ var _js_modules_popups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/modules/popups */ \"./js/modules/popups.js\");\n/* harmony import */ var _js_modules_timer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/modules/timer.js */ \"./js/modules/timer.js\");\n\n\n\nconst playfield = document.querySelector('.mem-game__playfield');\nlet cubesDOM = document.querySelectorAll('.mem-game__playfield-cube');\nconst uniqueCubesArr = [];\ncubesDOM.forEach(el => {\n  uniqueCubesArr.push(el);\n});\n\nconst randomizeArr = arr => {\n  arr.sort(() => Math.random() - 0.5);\n};\n\nconst getCubes = () => {\n  let cubesArr = [...uniqueCubesArr];\n  randomizeArr(cubesArr);\n  const settings = JSON.parse(localStorage.getItem('settings'));\n  const {\n    uniqueCubesCount\n  } = settings.level;\n  cubesArr.splice(uniqueCubesCount);\n  cubesArr = [...cubesArr, ...cubesArr];\n  randomizeArr(cubesArr);\n\n  for (let i = 0; i < cubesArr.length; i += 1) {\n    const cubeObj = {\n      src: cubesArr[i].getAttribute('src'),\n      alt: cubesArr[i].getAttribute('alt')\n    };\n    cubesArr[i] = cubeObj;\n  }\n\n  const hasEmptyCellOnPlayfield = settings.level.hasEmptyCell;\n\n  if (hasEmptyCellOnPlayfield) {\n    const cubesArrCenter = (cubesArr.length + 1) / 2;\n    cubesArr.splice(cubesArrCenter, 0, {\n      src: '',\n      alt: ''\n    });\n  }\n\n  playfield.innerHTML = '';\n  playfield.style.display = 'grid';\n  playfield.style.gridTemplateColumns = `repeat(${settings.level.rowsCount}, 1fr)`;\n  cubesArr.forEach(el => {\n    const newCube = document.createElement('div');\n    const isCube = el.alt;\n\n    if (isCube) {\n      newCube.classList.add('mem-game__playfield-cube');\n      const newCubeFront = `<img src=\"${_assets_images_playfield_cubes_front_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"front\">`;\n      const newCubeBack = `<img src=\"${el.src}\" alt=\"${el.alt}\">`;\n      newCube.innerHTML = `<div class=\"content\">${newCubeFront}${newCubeBack}</div>`;\n      newCube.setAttribute('name', el.alt);\n    }\n\n    playfield.append(newCube);\n  });\n};\n\nfunction startPlay() {\n  getCubes();\n  let prevCubeDOM = null;\n  let prevCubeName = null;\n  let currentCubeName = null;\n  const settings = JSON.parse(localStorage.getItem('settings'));\n  const maxTimeToCompleteLevel = Number(settings.level.maxTime);\n  const animationTime = 1000;\n  (0,_js_modules_timer_js__WEBPACK_IMPORTED_MODULE_2__.startTimer)(maxTimeToCompleteLevel + animationTime);\n  let stepsCount = 0;\n  let completedCount = 0;\n  cubesDOM = document.querySelectorAll('.mem-game__playfield-cube');\n  cubesDOM.forEach(currentCubeDOM => {\n    currentCubeDOM.addEventListener('click', () => {\n      const hasLocked = currentCubeDOM.classList.contains('locked');\n\n      if (!hasLocked) {\n        currentCubeDOM.classList.add('fliped', 'locked');\n        stepsCount += 1;\n        prevCubeName = currentCubeName;\n        currentCubeName = currentCubeDOM.getAttribute('name');\n        const isEven = stepsCount % 2 === 0;\n\n        if (isEven) {\n          const hasEqualCubes = currentCubeName === prevCubeName;\n\n          if (hasEqualCubes) {\n            prevCubeDOM.classList.add('locked');\n            completedCount += 1;\n          } else {\n            const cubeObj = {\n              prevCubeDOM,\n              currentCubeDOM\n            };\n            const delayBeforeUnflipedCube = 1000;\n            setTimeout(() => {\n              cubeObj.prevCubeDOM.classList.remove('fliped', 'locked');\n              cubeObj.currentCubeDOM.classList.remove('fliped', 'locked');\n            }, delayBeforeUnflipedCube);\n          }\n        } else {\n          prevCubeDOM = currentCubeDOM;\n        } // результат\n\n\n        const {\n          uniqueCubesCount\n        } = settings.level;\n        const isCompleted = completedCount === uniqueCubesCount;\n\n        if (isCompleted) {\n          (0,_js_modules_timer_js__WEBPACK_IMPORTED_MODULE_2__.stopTimer)();\n          const endTimeToLevel = _js_modules_timer_js__WEBPACK_IMPORTED_MODULE_2__.timerObj.countDown;\n          (0,_js_modules_popups__WEBPACK_IMPORTED_MODULE_1__.showResult)(endTimeToLevel);\n        }\n      }\n    });\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (startPlay);\n\n//# sourceURL=webpack:///./js/modules/playfield.js?");

/***/ }),

/***/ "./js/modules/popups.js":
/*!******************************!*\
  !*** ./js/modules/popups.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currentPopup\": function() { return /* binding */ currentPopup; },\n/* harmony export */   \"hidePopup\": function() { return /* binding */ hidePopup; },\n/* harmony export */   \"showPopup\": function() { return /* binding */ showPopup; },\n/* harmony export */   \"showResult\": function() { return /* binding */ showResult; }\n/* harmony export */ });\n/* harmony import */ var _js_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/modules/timer.js */ \"./js/modules/timer.js\");\n/* harmony import */ var _js_modules_rating_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/modules/rating.js */ \"./js/modules/rating.js\");\n\n\nconst currentPopup = {\n  name: null,\n  DOM: null\n};\nconst popupsField = document.querySelector('.mem-game__popup');\n\nconst showPopup = popupName => {\n  currentPopup.name = popupName;\n  currentPopup.DOM = document.querySelector(`.mem-game__popup-${popupName}`);\n  currentPopup.DOM.classList.add('active');\n  popupsField.classList.add('active');\n\n  if (popupName === 'pause') {\n    (0,_js_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__.stopTimer)();\n  } else if (popupName === 'victory') {\n    const settings = JSON.parse(localStorage.getItem('settings'));\n    const maxTimeToCompleteLevel = settings.level.maxTime;\n    const endTimeToLevel = _js_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__.timerObj.countDown;\n    const currentScore = maxTimeToCompleteLevel - endTimeToLevel;\n    (0,_js_modules_rating_js__WEBPACK_IMPORTED_MODULE_1__.addCurrentScoreToRatingArray)(currentScore);\n    (0,_js_modules_rating_js__WEBPACK_IMPORTED_MODULE_1__.FillVictoryPopup)(currentScore);\n  } else if (popupName === 'rating') {\n    (0,_js_modules_rating_js__WEBPACK_IMPORTED_MODULE_1__.FillRatingPopup)();\n  }\n};\n\nconst getStarsCount = (endTimeToLevel, maxTimeToCompleteLevel) => {\n  if (endTimeToLevel > maxTimeToCompleteLevel * 0.4) {\n    return 3;\n  }\n\n  if (endTimeToLevel > maxTimeToCompleteLevel * 0.25) {\n    return 2;\n  }\n\n  if (endTimeToLevel > maxTimeToCompleteLevel * 0.1) {\n    return 1;\n  }\n\n  return 0;\n};\n\nconst showResult = endTimeToLevel => {\n  const settings = JSON.parse(localStorage.getItem('settings'));\n  const maxTimeToCompleteLevel = settings.level.maxTime;\n  const starsCount = getStarsCount(endTimeToLevel, maxTimeToCompleteLevel);\n  const hasStars = endTimeToLevel > 0;\n\n  if (hasStars) {\n    showPopup('victory');\n  } else {\n    showPopup('defeat');\n  }\n\n  const starsImages = document.querySelectorAll('.mem-game__popup-stars img');\n  starsImages.forEach(el => {\n    el.classList.remove('active');\n  });\n  const starsImage = document.querySelector(`.mem-game__popup-stars-${starsCount}`);\n  starsImage.classList.add('active');\n};\n\nconst popupBtns = document.querySelectorAll('[popup]');\npopupBtns.forEach(popupBtn => {\n  popupBtn.addEventListener('click', () => {\n    const popupName = popupBtn.getAttribute('popup');\n    showPopup(popupName);\n  });\n});\n\nconst hidePopup = () => {\n  currentPopup.DOM.classList.remove('active');\n  popupsField.classList.remove('active');\n  const isPause = currentPopup.name === 'pause';\n\n  if (isPause) {\n    (0,_js_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__.startTimer)(_js_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__.timerObj.countDown);\n  }\n\n  currentPopup.name = null;\n  currentPopup.DOM = null;\n};\n\nconst popupHideBtns = document.querySelectorAll('.mem-game__popup-hide');\npopupHideBtns.forEach(popupHideBtn => {\n  popupHideBtn.addEventListener('click', () => {\n    hidePopup();\n  });\n});\n\n\n//# sourceURL=webpack:///./js/modules/popups.js?");

/***/ }),

/***/ "./js/modules/rating.js":
/*!******************************!*\
  !*** ./js/modules/rating.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FillRatingPopup\": function() { return /* binding */ FillRatingPopup; },\n/* harmony export */   \"FillVictoryPopup\": function() { return /* binding */ FillVictoryPopup; },\n/* harmony export */   \"addCurrentScoreToRatingArray\": function() { return /* binding */ addCurrentScoreToRatingArray; }\n/* harmony export */ });\n/* harmony import */ var _js_modules_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/modules/common.js */ \"./js/modules/common.js\");\n\nlet rating = {\n  easy: [],\n  medium: [],\n  hard: [],\n  hardest: []\n};\n\nconst translateLevelNameToRussian = levelName => {\n  if (levelName === 'easy') {\n    return 'легкая';\n  }\n\n  if (levelName === 'medium') {\n    return 'средняя';\n  }\n\n  if (levelName === 'hard') {\n    return 'сложная';\n  }\n\n  return 'очень сложная';\n};\n\nconst FillVictoryPopup = currentScore => {\n  const settings = JSON.parse(localStorage.getItem('settings'));\n  const levelName = settings.level.name;\n  const RatingOnCurrentLevel = rating[levelName];\n  const victoryPopupScoreCurrent = document.querySelector('.mem-game__popup-score-current');\n  const victoryPopupScoreBest = document.querySelector('.mem-game__popup-score-best');\n  victoryPopupScoreCurrent.textContent = (0,_js_modules_common_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentScore);\n  victoryPopupScoreBest.textContent = (0,_js_modules_common_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(RatingOnCurrentLevel[0]);\n};\n\nconst FillRatingPopup = () => {\n  const settings = JSON.parse(localStorage.getItem('settings'));\n  const levelName = settings.level.name;\n  const RatingOnCurrentLevel = rating[levelName];\n  const ratingUl = document.querySelector('.mem-game__popup-rating-list');\n  ratingUl.innerHTML = '';\n  const levelNameRu = translateLevelNameToRussian(levelName);\n  const ratingUlHeader = document.createElement('li');\n  ratingUlHeader.innerHTML = levelNameRu;\n  ratingUl.append(ratingUlHeader);\n\n  for (let i = 0; i < RatingOnCurrentLevel.length; i += 1) {\n    const ratingScore = `<span>${(0,_js_modules_common_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(RatingOnCurrentLevel[i])}</span>`;\n    const ratingPlace = `<span>${i + 1}</span>`;\n    const newRatingLi = document.createElement('li');\n    newRatingLi.innerHTML = ratingScore + ratingPlace;\n    ratingUl.append(newRatingLi);\n  }\n};\n\nconst addCurrentScoreToRatingArray = currentScore => {\n  const settings = JSON.parse(localStorage.getItem('settings'));\n  const levelName = settings.level.name;\n  const RatingOnCurrentLevel = rating[levelName];\n  const hasCurrentScoreToRatingArray = RatingOnCurrentLevel.includes(currentScore);\n\n  if (!hasCurrentScoreToRatingArray) {\n    RatingOnCurrentLevel.push(currentScore);\n    const SortedRatingOnCurrentLevel = RatingOnCurrentLevel.sort((a, b) => a - b).splice(0, 20);\n    rating[levelName] = SortedRatingOnCurrentLevel;\n    localStorage.setItem('rating', JSON.stringify(rating));\n  }\n};\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const hasRatingFromLocalStorage = localStorage.getItem('rating') !== null;\n\n  if (hasRatingFromLocalStorage) {\n    rating = JSON.parse(localStorage.getItem('rating'));\n  } else {\n    localStorage.setItem('rating', JSON.stringify(rating));\n  }\n});\n\n\n//# sourceURL=webpack:///./js/modules/rating.js?");

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startTimer\": function() { return /* binding */ startTimer; },\n/* harmony export */   \"stopTimer\": function() { return /* binding */ stopTimer; },\n/* harmony export */   \"timerObj\": function() { return /* binding */ timerObj; }\n/* harmony export */ });\n/* harmony import */ var _js_modules_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/modules/common.js */ \"./js/modules/common.js\");\n\nconst timerObj = {\n  countDown: null,\n  setInterval: null,\n  setTimeout: null\n};\n\nconst stopTimer = () => {\n  clearInterval(timerObj.setInterval);\n  clearTimeout(timerObj.setTimeout);\n};\n\nconst timerDOM = document.querySelector('.mem-game__topbar-timer span');\nconst timerInterval = 1000;\n\nconst startTimer = time => {\n  let countDown = time;\n  timerObj.setInterval = setInterval(() => {\n    countDown -= timerInterval;\n    timerDOM.textContent = (0,_js_modules_common_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(countDown);\n    timerObj.countDown = countDown;\n  }, timerInterval);\n  timerObj.setTimeout = setTimeout(() => {\n    timerObj.countDown = 0;\n    stopTimer();\n    timerDOM.textContent = '00:00';\n  }, countDown);\n};\n\n\n\n//# sourceURL=webpack:///./js/modules/timer.js?");

/***/ }),

/***/ "./styles/style.sass":
/*!***************************!*\
  !*** ./styles/style.sass ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/style.sass?");

/***/ }),

/***/ "./assets/images/playfield/cubes/front.png":
/*!*************************************************!*\
  !*** ./assets/images/playfield/cubes/front.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/playfield/cubes/front.png\";\n\n//# sourceURL=webpack:///./assets/images/playfield/cubes/front.png?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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