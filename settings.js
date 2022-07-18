/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/settings.js":
/*!********************************!*\
  !*** ./js/modules/settings.js ***!
  \********************************/
/***/ (function() {

eval("let settings = {\n  music: false,\n  level: {\n    name: 'easy',\n    rowsCount: 3,\n    uniqueCubesCount: 4,\n    hasEmptyCell: true,\n    maxTime: 60000\n  }\n};\nconst musicPlayer = document.querySelector('.mem-game__player');\nconst soundtrack = document.querySelector('.mem-game__soundtrack');\n\nconst toggleMusicToSelectedFromSettings = () => {\n  const hasMusicEnabledFromSettings = settings.music;\n\n  if (hasMusicEnabledFromSettings) {\n    soundtrack.play();\n  } else {\n    soundtrack.pause();\n  }\n\n  musicPlayer.checked = hasMusicEnabledFromSettings;\n};\n\nconst toggleMusic = () => {\n  settings.music = !settings.music;\n  toggleMusicToSelectedFromSettings();\n  localStorage.setItem('settings', JSON.stringify(settings));\n};\n\nmusicPlayer.addEventListener('click', () => {\n  toggleMusic();\n});\n\nconst switchLevelToSelectedFromSettings = () => {\n  const levelName = settings.level.name;\n  const levelSelectedDOM = document.querySelector(`.mem-game__popup-settings-level-radio input[value=\"${levelName}\"]`);\n  levelSelectedDOM.checked = true;\n};\n\nconst switchLevelToSelectedWithBtn = levelSelectedDOM => {\n  const levelName = levelSelectedDOM.getAttribute('value');\n  const levelRowsCount = levelSelectedDOM.getAttribute('rows');\n  const uniqueCubesCount = Math.floor(levelRowsCount ** 2 / 2);\n  const hasEmptyCell = levelRowsCount % 2 !== 0;\n  const levelMaxTime = levelSelectedDOM.getAttribute('time');\n  settings.level.name = levelName;\n  settings.level.rowsCount = levelRowsCount;\n  settings.level.uniqueCubesCount = uniqueCubesCount;\n  settings.level.hasEmptyCell = hasEmptyCell;\n  settings.level.maxTime = levelMaxTime;\n  localStorage.setItem('settings', JSON.stringify(settings));\n};\n\nconst selectLevelBtns = document.querySelectorAll('.mem-game__popup-settings-level-radio label');\nselectLevelBtns.forEach(selectLevelBtn => {\n  selectLevelBtn.addEventListener('click', () => {\n    const levelSelectedId = selectLevelBtn.getAttribute('for');\n    const levelSelectedDOM = document.getElementById(levelSelectedId);\n    switchLevelToSelectedWithBtn(levelSelectedDOM);\n  });\n});\ndocument.addEventListener('DOMContentLoaded', () => {\n  const hasSettingsFromLocalStorage = localStorage.getItem('settings') !== null;\n\n  if (hasSettingsFromLocalStorage) {\n    settings = JSON.parse(localStorage.getItem('settings'));\n  } else {\n    localStorage.setItem('settings', JSON.stringify(settings));\n  }\n\n  switchLevelToSelectedFromSettings();\n  toggleMusicToSelectedFromSettings();\n});\n\n//# sourceURL=webpack:///./js/modules/settings.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/modules/settings.js"]();
/******/ 	
/******/ })()
;