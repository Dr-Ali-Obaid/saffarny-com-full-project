/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatesaffarny_com"]("/js/sign-up",{

/***/ "./src/js/sign-up.js":
/*!***************************!*\
  !*** ./src/js/sign-up.js ***!
  \***************************/
/***/ (() => {

eval("\r\ndocument.getElementById(\"form\").addEventListener('submit', function(event){\r\n  let firstPassword = document.getElementById(\"first-password\").value;\r\n  let secondPassword = document.getElementById(\"second-password\").value;\r\n  let errorMessage = document.getElementById(\"error\")\r\n  if (firstPassword !== secondPassword) {\r\n    event.preventDefault()\r\n    errorMessage\r\n  }\r\n  \r\n})\r\n\n\n//# sourceURL=webpack://saffarny-com/./src/js/sign-up.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("206e3a77cb50b9ab9312")
/******/ })();
/******/ 
/******/ }
);