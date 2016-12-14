webpackHotUpdate(0,{

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function($) {'use strict';\n\n__webpack_require__(79);\n\nvar _menu = __webpack_require__(83);\n\nvar _menu2 = _interopRequireDefault(_menu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log('jQuery ' + $.fn.jquery + ' is loaded');\nwindow.$ = $;\n\nvar menu = new _menu2.default();\n\n(function adaptiveMenu() {\n\n\tvar mobileView = window.matchMedia(\"(max-width: 768px)\").matches,\n\t    timing = 0;\n\n\tif (mobileView) {\n\n\t\tmenu.initBurger();\n\t\tmenu.initMobile();\n\t} else {\n\n\t\tmenu.destructMobile();\n\t}\n\n\t$(window).resize(function () {\n\n\t\tif (!timing) {\n\t\t\ttiming = setTimeout(adaptiveMenu, 200);\n\t\t}\n\t});\n})();\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./frontend/main.js\n// module id = 77\n// module chunks = 0\n//# sourceURL=webpack:///./frontend/main.js?");

/***/ }

})
