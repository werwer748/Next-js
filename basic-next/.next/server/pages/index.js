(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\nextjs\\basic-next\\pages\\index.jsx";
// '/' 경로를 가지는 페이지
// import Link from 'next/link';



const App = () => {
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "button",
      onClick: () => router.push("/tomato"),
      children: "tomato\uB85C \uAC00\uAE30"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "\uC774\uB984"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      value: name,
      onChange: e => setName(e.target.value),
      style: {
        marginRight: "12px"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "button",
      onClick: () => router.push(`/vegetable/${name}`),
      children: [name, "\uC73C\uB85C \uAC00\uAE30"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (App); //?는 필수 값이 아님을 뜻한다.
//href: string 값으로 이동할 경로 또는 URL
//as?: string 값으로 브라우저의 URL에 표시될 값
//replace?: boolean값으로 브라우저의 history 스택에 url을 추가하지않고 현재 상태를 변경함
//scroll?: boolean값으로 스크롤을 맨 위로 이동할지 설정하는 값 기본값은 true
//shallow?: boolean 값으로 서버에서 데이터를 불러오는 작업을 스킵 할 때 사용한다. 기본값 false
//passHref?: boolean값으로 자식에게 href를 전달하게 된다. 리액트 컴포넌트에 href를 전달할 수 있게 됨
//prefetch?: boolean 값으로 백그라운드에서 페이지를 미리 가져오게 된다. 브라우저 화면의 Link컴포넌트 페이지들을 미리 가져오게 되며 기본값은 true

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNpYy1uZXh0Ly4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL2Jhc2ljLW5leHQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Jhc2ljLW5leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Jhc2ljLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBcHAiLCJuYW1lIiwic2V0TmFtZSIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwicHVzaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpblJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLE1BQU07QUFDZCxRQUFNO0FBQUEsT0FBRUMsSUFBRjtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxzQkFDSTtBQUFBLDRCQUNJO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBTyxFQUFFLE1BQU1ELE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLFNBQVosQ0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJO0FBQ0ksV0FBSyxFQUFFTCxJQURYO0FBRUksY0FBUSxFQUFHTSxDQUFELElBQU1MLE9BQU8sQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FGM0I7QUFHSSxXQUFLLEVBQUU7QUFBQ0MsbUJBQVcsRUFBRTtBQUFkO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixlQVVJO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBTyxFQUFFLE1BQUtOLE1BQU0sQ0FBQ0UsSUFBUCxDQUFhLGNBQWFMLElBQUssRUFBL0IsQ0FBcEM7QUFBQSxpQkFDS0EsSUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFnQkgsQ0FuQkQ7O0FBcUJBLCtEQUFlRCxHQUFmLEUsQ0FFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhGOzs7Ozs7Ozs7OztBQ3JDQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICcvJyDqsr3roZzrpbwg6rCA7KeA64qUIO2OmOydtOyngFxyXG5cclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbIG5hbWUsIHNldE5hbWUgXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3RvbWF0b1wiKX0+XHJcbiAgICAgICAgICAgICAgICB0b21hdG/roZwg6rCA6riwXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8cD7snbTrpoQ8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjEycHhcIn19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpPT4gcm91dGVyLnB1c2goYC92ZWdldGFibGUvJHtuYW1lfWApfT5cclxuICAgICAgICAgICAgICAgIHtuYW1lfeycvOuhnCDqsIDquLBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuXHJcbi8vP+uKlCDtlYTsiJgg6rCS7J20IOyVhOuLmOydhCDrnLvtlZzri6QuXHJcblxyXG4vL2hyZWY6IHN0cmluZyDqsJLsnLzroZwg7J2064+Z7ZWgIOqyveuhnCDrmJDripQgVVJMXHJcbi8vYXM/OiBzdHJpbmcg6rCS7Jy866GcIOu4jOudvOyasOyggOydmCBVUkzsl5Ag7ZGc7Iuc65CgIOqwklxyXG4vL3JlcGxhY2U/OiBib29sZWFu6rCS7Jy866GcIOu4jOudvOyasOyggOydmCBoaXN0b3J5IOyKpO2DneyXkCB1cmzsnYQg7LaU6rCA7ZWY7KeA7JWK6rOgIO2YhOyerCDsg4Htg5zrpbwg67OA6rK97ZWoXHJcbi8vc2Nyb2xsPzogYm9vbGVhbuqwkuycvOuhnCDsiqTtgazroaTsnYQg66eoIOychOuhnCDsnbTrj5ntlaDsp4Ag7ISk7KCV7ZWY64qUIOqwkiDquLDrs7jqsJLsnYAgdHJ1ZVxyXG4vL3NoYWxsb3c/OiBib29sZWFuIOqwkuycvOuhnCDshJzrsoTsl5DshJwg642w7J207YSw66W8IOu2iOufrOyYpOuKlCDsnpHsl4XsnYQg7Iqk7YK1IO2VoCDrlYwg7IKs7Jqp7ZWc64ukLiDquLDrs7jqsJIgZmFsc2VcclxuLy9wYXNzSHJlZj86IGJvb2xlYW7qsJLsnLzroZwg7J6Q7Iud7JeQ6rKMIGhyZWbrpbwg7KCE64us7ZWY6rKMIOuQnOuLpC4g66as7JWh7Yq4IOy7tO2PrOuEjO2KuOyXkCBocmVm66W8IOyghOuLrO2VoCDsiJgg7J6I6rKMIOuQqFxyXG4vL3ByZWZldGNoPzogYm9vbGVhbiDqsJLsnLzroZwg67Cx6re465287Jq065Oc7JeQ7IScIO2OmOydtOyngOulvCDrr7jrpqwg6rCA7KC47Jik6rKMIOuQnOuLpC4g67iM65287Jqw7KCAIO2ZlOuptOydmCBMaW5r7Lu07Y+s64SM7Yq4IO2OmOydtOyngOuTpOydhCDrr7jrpqwg6rCA7KC47Jik6rKMIOuQmOupsCDquLDrs7jqsJLsnYAgdHJ1ZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9