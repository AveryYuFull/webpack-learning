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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: .eslintrc.js:\n\tConfiguration for rule \"parser\" is invalid:\n\tSeverity should be one of the following: 0 = off, 1 = warn, 2 = error (you passed '\"babel-eslint\"').\n\n    at validateRuleOptions (/Users/yuangong/project/tuhu/webpack学习/chapter3/3-16/node_modules/eslint/lib/shared/config-validator.js:138:19)\n    at Object.keys.forEach.id (/Users/yuangong/project/tuhu/webpack学习/chapter3/3-16/node_modules/eslint/lib/shared/config-validator.js:193:9)\n    at Array.forEach (<anonymous>)\n    at validateRules (/Users/yuangong/project/tuhu/webpack学习/chapter3/3-16/node_modules/eslint/lib/shared/config-validator.js:190:30)\n    at validateConfigArray (/Users/yuangong/project/tuhu/webpack学习/chapter3/3-16/node_modules/eslint/lib/shared/config-validator.js:337:9)\n    at CascadingConfigArrayFactory._finalizeConfigArray (/Users/yuangong/project/tuhu/webpack学习/chapter3/3-16/node_modules/eslint/lib/cli-engine/cascading-config-array-factory.js:392:13)\n    at CascadingConfigArrayFactory.getConfigArrayForFile (/Users/yuangong/project/tuhu/webpack学习/chapter3/3-16/node_modules/eslint/lib/cli-engine/cascading-config-array-factory.js:248:21)\n    at CLIEngine.executeOnText (/Users/yuangong/project/tuhu/webpack学习/chapter3/3-16/node_modules/eslint/lib/cli-engine/cli-engine.js:860:47)\n    at lint (/Users/yuangong/project/tuhu/webpack学习/chapter3/3-16/node_modules/eslint-loader/index.js:278:17)\n    at Object.module.exports (/Users/yuangong/project/tuhu/webpack学习/chapter3/3-16/node_modules/eslint-loader/index.js:273:21)");

/***/ })
/******/ ]);