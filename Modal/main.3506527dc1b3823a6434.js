!function(){var t={93:function(){document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelectorAll('input[type="tel"]'),e=function(t){return t.value.replace(/\D/g,"")},n=function(t){var n=t.target,r=e(n),a=t.clipboardData||window.clipboardData;if(a){var o=a.getData("Text");/\D/g.test(o)&&(n.value=r)}},r=function(t){var n=t.target,r=e(n),a=n.selectionStart,o="";if(!r)return n.value="";if(n.value.length===a){if(["7","8","9"].indexOf(r[0])>-1){"9"===r[0]&&(r="7".concat(r));var u="8"===r[0]?"8":"+7";o=n.value="".concat(u," "),r.length>1&&(o+="(".concat(r.substring(1,4))),r.length>=5&&(o+=") ".concat(r.substring(4,7))),r.length>=8&&(o+="-".concat(r.substring(7,9))),r.length>=10&&(o+="-".concat(r.substring(9,11)))}n.value=o}else t.data&&/\D/g.test(t.data)&&(n.value=r)},a=function(t){var e=t.target.value.replace(/\D/g,"");8===t.keyCode&&1===e.length&&(t.target.value="")};t.forEach((function(t){t.addEventListener("keydown",a),t.addEventListener("input",r,!1),t.addEventListener("paste",n,!1)}))}))}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";n(93)}()}();