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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ink_parallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ink-parallax */ \"./src/ink-parallax.js\");\n/* harmony import */ var _ink_parallax_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ink-parallax.scss */ \"./src/ink-parallax.scss\");\n\n\n__webpack_require__.g.inkParallax = _ink_parallax__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//# sourceURL=webpack://ink-parallax/./src/index.js?");

/***/ }),

/***/ "./src/ink-parallax.js":
/*!*****************************!*\
  !*** ./src/ink-parallax.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ inkParallax)\n/* harmony export */ });\n/**\n* @version 1.3.3\n* @license MIT\n* @description Easy parallax plugin using pure javascript. Cross browser support, including mobile platforms. Based on goodparallax\n*/\n\nvar windowHeight = window.innerHeight,\n  windowHeightExtra = 0;\nvar safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),\n  mobile = /Mobi/.test(navigator.userAgent);\n\n// check if safari - extend height\nif (safari && !mobile) {\n  windowHeightExtra = window.outerHeight - window.innerHeight;\n}\nif (mobile) {\n  windowHeight = window.screen.availHeight; // stops from jumping\n  windowHeightExtra = (window.screen.availHeight - window.innerHeight) / 2; // prevents white spaces\n}\n\n// position parallax\nvar positionParallax = function positionParallax(container, speed, parallax, elem) {\n  var bgScroll = container.top / speed - windowHeightExtra;\n  parallax[elem].style.top = bgScroll + 'px';\n};\n\n// animate parallax\nvar animateParallax = function animateParallax(parallax, speed) {\n  for (var i = 0; parallax.length > i; i++) {\n    var container = parallax[i].parentElement.parentElement.getBoundingClientRect();\n\n    // only animate if on screen\n    if (container.top + container.height >= 0 && container.top <= windowHeight) {\n      positionParallax(container, speed, parallax, i);\n    }\n  }\n};\n\n// determine height\nvar calculateHeight = function calculateHeight(parallax, speed) {\n  for (var i = 0; parallax.length > i; i++) {\n    var container = parallax[i].parentElement.parentElement.getBoundingClientRect();\n    var containerTop = parallax[i].parentElement.parentElement.offsetTop;\n    var elemOffsetTop = (windowHeight - container.height) / 2;\n\n    // set bgHeight & check if it needs to stretch beyond container bottom\n    var bgHeight = windowHeight > container.height + containerTop ? container.height + containerTop - containerTop / speed : container.height + (elemOffsetTop - elemOffsetTop / speed) * 2;\n    parallax[i].style.height = bgHeight + windowHeightExtra * 2 + 'px';\n    positionParallax(container, speed, parallax, i);\n  }\n};\nclass inkParallax {\n  constructor() {\n    var up = function up(parallax, speed) {\n      // check that speed is not a negative number\n      if (speed < 1) {\n        speed = 1;\n      }\n\n      // set height on elements\n      calculateHeight(parallax, speed);\n\n      // recalculate height on resize\n      if (!mobile) {\n        window.addEventListener('resize', function () {\n          windowHeight = window.innerHeight;\n          calculateHeight(parallax, speed);\n        });\n      }\n\n      // Add scroll event listener\n      window.addEventListener('scroll', function () {\n        animateParallax(parallax, speed);\n      });\n    };\n\n    // Ready all elements\n    this.init = function (param) {\n      if (typeof param === 'undefined') {\n        param = {};\n      }\n      param = {\n        speed: typeof param.speed !== 'undefined' ? param.speed : 1.5,\n        className: typeof param.className !== 'undefined' ? param.className : 'ink-parallax'\n      };\n      var parallax = document.getElementsByClassName(param.className);\n      for (var i = 0; parallax.length > i; i++) {\n        // make container div\n        var wrapper = document.createElement('div');\n        parallax[i].parentNode.insertBefore(wrapper, parallax[i]);\n        wrapper.appendChild(parallax[i]);\n        var parallaxContainer = parallax[i].parentElement;\n        parallaxContainer.className += 'ink-parallax__container';\n\n        // parent elem need position: relative for effect to work - if not already defined, add it\n        if (window.getComputedStyle(parallaxContainer.parentElement, null).getPropertyValue('position') !== 'relative') {\n          parallaxContainer.parentElement.style.position = 'relative';\n        }\n        var imgData = parallax[i].dataset.parallaxImage;\n        // add image to div if none is specified\n        if (typeof imgData !== 'undefined') {\n          parallax[i].style.backgroundImage = 'url(' + imgData + ')';\n          // if no other class than .parallax is specified, add CSS\n          if (parallax[i].classList.length === 1 && parallax[i].classList[0] === 'ink-parallax') {\n            parallax[i].style.backgroundRepeat = 'no-repeat';\n            parallax[i].style.backgroundPosition = 'center';\n            parallax[i].style.backgroundSize = 'cover';\n          }\n        }\n      }\n      ;\n\n      // when page is loaded && init completed -> run function\n      document.addEventListener('readystatechange', function (event) {\n        if (event.target.readyState === 'complete') {\n          up(parallax, param.speed);\n        }\n      });\n    };\n  }\n}\n\n//# sourceURL=webpack://ink-parallax/./src/ink-parallax.js?");

/***/ }),

/***/ "./src/ink-parallax.scss":
/*!*******************************!*\
  !*** ./src/ink-parallax.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ink-parallax/./src/ink-parallax.scss?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;