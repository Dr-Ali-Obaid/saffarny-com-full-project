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

eval("let x = document.getElementById(\"form\")\r\nx.addEventListener('submit', function(){\r\n  let firstPassword = document.getElementById(\"first-password\").value;\r\n  let secondPassword = document.getElementById(\"second-password\").value;\r\n  \r\n  if (firstPassword !== secondPassword) {\r\n    alert(\"Passwords do not match!\");\r\n   return x = false\r\n  }\r\n  \r\n  return true; // Allow form submission if passwords match\r\n})\r\n\n\n//# sourceURL=webpack://saffarny-com/./src/js/sign-up.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b694e3779b910569e505")
/******/ })();
/******/ 
/******/ }
);