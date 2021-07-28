(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/palette */ "./styles/palette.ts");

var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\nextjs\\next-todo\\components\\Header.tsx";



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Header__Container",
  componentId: "sc-o5j79y-0"
})(["display:flex;align-items:center;width:100%;height:52px;padding:0 12px;border-bottom:1px solid ", ";h1{font-size:21px;}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray);

const Header = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Hugo's TodoList"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/GlobalStyle */ "./styles/GlobalStyle.ts");


var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\nextjs\\next-todo\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const app = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./styles/GlobalStyle.ts":
/*!*******************************!*\
  !*** ./styles/GlobalStyle.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-reset */ "styled-reset");
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_reset__WEBPACK_IMPORTED_MODULE_1__);


const globalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", ";*{box-sizing:border-box;}body{font-family:Noto sans,Noto Sans KR;}"], (styled_reset__WEBPACK_IMPORTED_MODULE_1___default()));
const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["", ""], globalStyle);
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./styles/palette.ts":
/*!***************************!*\
  !*** ./styles/palette.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  red: "#FFAFB0",
  orange: "#FFC282",
  yellow: "#FCFFB0",
  green: "#E2FFAF",
  blue: "#AEE4FF",
  navy: "#B5C7ED",
  gray: "#E5E5E5",
  deep_red: "#F35456",
  deep_green: "#47E774"
});

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "styled-reset":
/*!*******************************!*\
  !*** external "styled-reset" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-reset");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9jb21wb25lbnRzL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vbmV4dC10b2RvLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vbmV4dC10b2RvLy4vc3R5bGVzL0dsb2JhbFN0eWxlLnRzIiwid2VicGFjazovL25leHQtdG9kby8uL3N0eWxlcy9wYWxldHRlLnRzIiwid2VicGFjazovL25leHQtdG9kby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC10b2RvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbmV4dC10b2RvL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9uZXh0LXRvZG8vZXh0ZXJuYWwgXCJzdHlsZWQtcmVzZXRcIiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJwYWxldHRlIiwiSGVhZGVyIiwiYXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2xvYmFsU3R5bGUiLCJjc3MiLCJyZXNldCIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJyZWQiLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJncmVlbiIsImJsdWUiLCJuYXZ5IiwiZ3JheSIsImRlZXBfcmVkIiwiZGVlcF9ncmVlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLCtIQU1nQkMseURBTmhCLENBQWY7O0FBWUEsTUFBTUMsTUFBZ0IsR0FBRyxNQUFNO0FBQzNCLHNCQUNJLDhEQUFDLFNBQUQ7QUFBQSwyQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtILENBTkQ7O0FBUUEsK0RBQWVBLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTs7QUFFQSxNQUFNQyxHQUFHLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUF3QztBQUNoRCxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0ksOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUEsa0JBREo7QUFPSCxDQVJEOztBQVVBLCtEQUFlRixHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBRUEsTUFBTUcsV0FBVyxHQUFHQyxzREFBSCw4RUFDWEMscURBRFcsQ0FBakI7QUFXQSxNQUFNQyxXQUFXLEdBQUdDLG9FQUFILFdBQ1hKLFdBRFcsQ0FBakI7QUFJQSwrREFBZUcsV0FBZixFOzs7Ozs7Ozs7Ozs7QUNsQkEsK0RBQWU7QUFDWEUsS0FBRyxFQUFFLFNBRE07QUFFWEMsUUFBTSxFQUFFLFNBRkc7QUFHWEMsUUFBTSxFQUFFLFNBSEc7QUFJWEMsT0FBSyxFQUFFLFNBSkk7QUFLWEMsTUFBSSxFQUFFLFNBTEs7QUFNWEMsTUFBSSxFQUFDLFNBTk07QUFPWEMsTUFBSSxFQUFDLFNBUE07QUFRWEMsVUFBUSxFQUFFLFNBUkM7QUFTWEMsWUFBVSxFQUFFO0FBVEQsQ0FBZixFOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGgxPkh1Z28ncyBUb2RvTGlzdDwvaDE+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgQXBwLCB7IEFwcENvbnRleHQsIEFwcFByb3BzLCBBcHBJbml0aWFsUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXMvR2xvYmFsU3R5bGVcIjtcclxuXHJcbmNvbnN0IGFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwOyIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlLCBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHJlc2V0IGZyb20gXCJzdHlsZWQtcmVzZXRcIjtcclxuXHJcbmNvbnN0IGdsb2JhbFN0eWxlID0gY3NzYFxyXG4gICAgJHtyZXNldH07XHJcblxyXG4gICAgKiB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICAgIGJvZHkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBOb3RvIHNhbnMsIE5vdG8gU2FucyBLUjtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgICAke2dsb2JhbFN0eWxlfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGU7IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcmVkOiBcIiNGRkFGQjBcIixcclxuICAgIG9yYW5nZTogXCIjRkZDMjgyXCIsXHJcbiAgICB5ZWxsb3c6IFwiI0ZDRkZCMFwiLFxyXG4gICAgZ3JlZW46IFwiI0UyRkZBRlwiLFxyXG4gICAgYmx1ZTogXCIjQUVFNEZGXCIsXHJcbiAgICBuYXZ5OlwiI0I1QzdFRFwiLFxyXG4gICAgZ3JheTpcIiNFNUU1RTVcIixcclxuICAgIGRlZXBfcmVkOiBcIiNGMzU0NTZcIixcclxuICAgIGRlZXBfZ3JlZW46IFwiIzQ3RTc3NFwiLFxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtcmVzZXRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=