(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
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


var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\nextjs\\next-todo\\components\\TodoList.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var TrashCanIcon = function TrashCanIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M19.5 15a4.501 4.501 0 0 0 0 9c2.482 0 4.5-2.015 4.5-4.5S21.982 15 19.5 15zm2.5 5h-5v-1h5v1zM20 4H0V2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2H20v2zm-7 15.5c0-1.267.37-2.447 1-3.448V10a1 1 0 1 1 2 0v4.032a6.442 6.442 0 0 1 3-1.006V6H1v18h13.82A6.474 6.474 0 0 1 13 19.5zM6 20a1 1 0 1 1-2 0V10a1 1 0 1 1 2 0v10zm5 0a1 1 0 1 1-2 0V10a1 1 0 1 1 2 0v10z"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

TrashCanIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24"
};

var CheckMarkIcon = function CheckMarkIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M24 1v16.981H11l-7 5.02v-5.02H0V1h24zm-2 15V3.001H2V16h4v3.105L10.357 16H22zm-4-9.715L11.378 14 7 10.148l1.319-1.489 2.879 2.519L16.525 5 18 6.285z"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

CheckMarkIcon.defaultProps = {
  width: "24",
  height: "24",
  xmlns: "http://www.w3.org/2000/svg",
  fillRule: "evenodd",
  clipRule: "evenodd"
};
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "TodoList__Container",
  componentId: "sc-1t8agvw-0"
})(["width:100%;.todo-num{margin-left:12px;}.todo-list-header{padding:12px;position:relative;border-bottom:1px solid ", ";.todo-list-last-todo{font-size:14px;margin:0 0 8px;span{margin-left:8px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;}p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}.bg-blue{background-color:", "}.bg-green{background-color:", "}.bg-navy{background-color:", "}.bg-orange{background-color:", "}.bg-red{background-color:", "}.bg-yellow{background-color:", "}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid ", ";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:", ";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;margin-right:12px;svg{&:first-child{margin-right:16px;}}.todo-trash-can{width:25px;path{fill:", "}}.todo-check-mark{fill:", "}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid ", ";background-color:transparent;outline:none;}}}}"], _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.blue, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.green, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.navy, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.orange, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.red, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_3__.default.gray);

const TodoList = ({
  todos
}) => {
  //색깔 객체 구하기 1
  const getTodoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let green = 0;
    let blue = 0;
    let navy = 0;
    todos.forEach(todo => {
      switch (todo.color) {
        case "red":
          red += 1;
          break;

        case "orange":
          orange += 1;
          break;

        case "yellow":
          yellow += 1;
          break;

        case "green":
          green += 1;
          break;

        case "blue":
          blue += 1;
          break;

        case "navy":
          navy += 1;
          break;

        default:
          break;
      }
    });
    return {
      red,
      orange,
      yellow,
      green,
      blue,
      navy
    };
  }, [todos]); // console.log(getTodoColorNums());

  const todoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(getTodoColorNums, [todos]);
  //색깔 객체 2
  const todoColorNums2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const colors = {};
    todos.forEach(todo => {
      const value = colors[todo.color];

      if (!value) {
        //없는 키값
        colors[`${todo.color}`] = 1;
      } else {
        //존재하는 키
        colors[`${todo.color}`] = value + 1;
      }
    });
    return colors;
  }, [todos]);
  console.log(todoColorNums2);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "todo-list-header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "todo-list-last-todo",
        children: ["\uB0A8\uC740 TODO", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [todos.length, "\uAC1C"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 28
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "todo-list-header-colors",
        children: Object.keys(todoColorNums).map((color, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "todo-list-header-color-num",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: `todo-list-header-round-color bg-${color}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: [todoColorNums[color], "\uAC1C"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 29
          }, undefined)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "todo-list",
      children: todos.map(todo => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "todo-item",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "todo-left-side",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: `todo-color-block bg-${todo.color}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: `todo-text ${todo.checked ? "checked-todo-text" : ""}`,
            children: todo.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "todo-right-side",
          children: [todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TrashCanIcon, {
              className: "todo-trash-can",
              onClick: () => {}
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 37
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckMarkIcon, {
              className: "todo-check-mark",
              onClick: () => {}
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 37
            }, undefined)]
          }, void 0, true), !todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "button",
            className: "todo-button",
            onClick: () => {}
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 48
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 25
        }, undefined)]
      }, todo.id, true, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 193,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TodoList */ "./components/TodoList.tsx");

var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\nextjs\\next-todo\\pages\\index.tsx";

const todos = [{
  id: 1,
  text: "마트 가서 장보기",
  color: "red",
  checked: false
}, {
  id: 2,
  text: "수학 숙제하기",
  color: "orange",
  checked: false
}, {
  id: 3,
  text: "코딩하기",
  color: "yellow",
  checked: true
}, {
  id: 4,
  text: "넥스트 공부하기",
  color: "green",
  checked: true
}, {
  id: 5,
  text: "요리 연습하기",
  color: "blue",
  checked: false
}, {
  id: 6,
  text: "분리수거 하기",
  color: "navy",
  checked: false
}, {
  id: 6,
  text: "분리수거 하기",
  color: "red",
  checked: false
}];

const index = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoList__WEBPACK_IMPORTED_MODULE_1__.default, {
    todos: todos
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (index);

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeCIsIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbmV4dC10b2RvLy4vc3R5bGVzL3BhbGV0dGUudHMiLCJ3ZWJwYWNrOi8vbmV4dC10b2RvL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0LXRvZG8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0LXRvZG8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlRyYXNoQ2FuSWNvbiIsIkNoZWNrTWFya0ljb24iLCJDb250YWluZXIiLCJzdHlsZWQiLCJwYWxldHRlIiwiVG9kb0xpc3QiLCJ0b2RvcyIsImdldFRvZG9Db2xvck51bXMiLCJ1c2VDYWxsYmFjayIsInJlZCIsIm9yYW5nZSIsInllbGxvdyIsImdyZWVuIiwiYmx1ZSIsIm5hdnkiLCJmb3JFYWNoIiwidG9kbyIsImNvbG9yIiwidG9kb0NvbG9yTnVtcyIsInVzZU1lbW8iLCJ0b2RvQ29sb3JOdW1zMiIsImNvbG9ycyIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpbmRleCIsImNoZWNrZWQiLCJ0ZXh0IiwiaWQiLCJncmF5IiwiZGVlcF9yZWQiLCJkZWVwX2dyZWVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVPQSxZLFlBQUFBLFk7Ozs7Ozs7O0FBQUFBLFk7Ozs7OztJQUNBQyxhLFlBQUFBLGE7Ozs7Ozs7O0FBQUFBLGE7Ozs7Ozs7QUFFUCxNQUFNQyxTQUFTLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHF1Q0FVb0JDLHlEQVZwQixFQXVDbUJBLHlEQXZDbkIsRUF3Q29CQSwwREF4Q3BCLEVBeUNtQkEs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LENBQUw7QUFBUUQsTUFBSSxFQUFFLFNBQWQ7QUFBeUJkLE9BQUssRUFBRSxLQUFoQztBQUF1Q2EsU0FBTyxFQUFFO0FBQWhELENBUHdCLENBQTFCOztBQVVBLE1BQU1ELEtBQWMsR0FBRyxNQUFNO0FBQzNCLHNCQUFPLDhEQUFDLHlEQUFEO0FBQVUsU0FBSyxFQUFFdkI7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGRDs7QUFJQSwrREFBZXVCLEtBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkJBLCtEQUFlO0FBQ1hwQixLQUFHLEVBQUUsU0FETTtBQUVYQyxRQUFNLEVBQUUsU0FGRztBQUdYQyxRQUFNLEVBQUUsU0FIRztBQUlYQyxPQUFLLEVBQUUsU0FKSTtBQUtYQyxNQUFJLEVBQUUsU0FMSztBQU1YQyxNQUFJLEVBQUMsU0FOTTtBQU9YbUIsTUFBSSxFQUFDLFNBUE07QUFRWEMsVUFBUSxFQUFFLFNBUkM7QUFTWEMsWUFBVSxFQUFFO0FBVEQsQ0FBZixFOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi9zdHlsZXMvcGFsZXR0ZVwiO1xyXG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gXCIuLi90eXBlcy90b2RvXCI7XHJcbmltcG9ydCBUcmFzaENhbkljb24gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWMvc3ZnL2ljb25tb25zdHItdHJhc2gtY2FuLTUuc3ZnXCI7XHJcbmltcG9ydCBDaGVja01hcmtJY29uIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL3N2Zy9pY29ubW9uc3RyLXNwZWVjaC1idWJibGUtMzUuc3ZnXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLnRvZG8tbnVtIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAudG9kby1saXN0LWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuXHJcbiAgICAgICAgLnRvZG8tbGlzdC1sYXN0LXRvZG8ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDhweDtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG9kby1saXN0LWhlYWRlci1jb2xvcnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIC50b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudG9kby1saXN0LWhlYWRlci1yb3VuZC1jb2xvciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5iZy1ibHVlIHsgYmFja2dyb3VuZC1jb2xvcjoke3BhbGV0dGUuYmx1ZSB9IH1cclxuICAgIC5iZy1ncmVlbiB7IGJhY2tncm91bmQtY29sb3I6JHtwYWxldHRlLmdyZWVufSB9XHJcbiAgICAuYmctbmF2eSB7IGJhY2tncm91bmQtY29sb3I6JHtwYWxldHRlLm5hdnl9IH1cclxuICAgIC5iZy1vcmFuZ2UgeyBiYWNrZ3JvdW5kLWNvbG9yOiR7cGFsZXR0ZS5vcmFuZ2V9IH1cclxuICAgIC5iZy1yZWQgeyBiYWNrZ3JvdW5kLWNvbG9yOiR7cGFsZXR0ZS5yZWR9IH1cclxuICAgIC5iZy15ZWxsb3cgeyBiYWNrZ3JvdW5kLWNvbG9yOiR7cGFsZXR0ZS55ZWxsb3d9IH1cclxuXHJcbiAgICAudG9kby1saXN0IHtcclxuICAgICAgICAudG9kby1pdGVtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXl9O1xyXG5cclxuICAgICAgICAgICAgLnRvZG8tbGVmdC1zaWRlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAudG9kby1jb2xvci1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNoZWNrZWQtdG9kby10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmdyYXl9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRvZG8tdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudG9kby1yaWdodC1zaWRlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50b2RvLXRyYXNoLWNhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICR7cGFsZXR0ZS5kZWVwX3JlZH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudG9kby1jaGVjay1tYXJrIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAke3BhbGV0dGUuZGVlcF9ncmVlbn1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudG9kby1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgdG9kb3M6IFRvZG9UeXBlW107XHJcbn1cclxuXHJcblxyXG5jb25zdCBUb2RvTGlzdDogUmVhY3QuRkM8SVByb3BzPiA9ICh7dG9kb3N9KSA9PiB7XHJcblxyXG4gICAgLy/sg4nquZQg6rCd7LK0IOq1rO2VmOq4sCAxXHJcbiAgICBjb25zdCBnZXRUb2RvQ29sb3JOdW1zID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGxldCByZWQgPSAwO1xyXG4gICAgICAgIGxldCBvcmFuZ2UgPSAwO1xyXG4gICAgICAgIGxldCB5ZWxsb3cgPSAwO1xyXG4gICAgICAgIGxldCBncmVlbiA9IDA7XHJcbiAgICAgICAgbGV0IGJsdWUgPSAwO1xyXG4gICAgICAgIGxldCBuYXZ5ID0gMDtcclxuICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKT0+IHtcclxuICAgICAgICAgICAgc3dpdGNoICh0b2RvLmNvbG9yKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICByZWQgKz0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvcmFuZ2VcIjpcclxuICAgICAgICAgICAgICAgICAgICBvcmFuZ2UgKz0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ5ZWxsb3dcIjpcclxuICAgICAgICAgICAgICAgICAgICB5ZWxsb3cgKz0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJncmVlblwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGdyZWVuICs9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGJsdWUgKz0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJuYXZ5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2eSArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVkLFxyXG4gICAgICAgICAgICBvcmFuZ2UsXHJcbiAgICAgICAgICAgIHllbGxvdyxcclxuICAgICAgICAgICAgZ3JlZW4sXHJcbiAgICAgICAgICAgIGJsdWUsXHJcbiAgICAgICAgICAgIG5hdnlcclxuICAgICAgICB9O1xyXG4gICAgfSxbdG9kb3NdKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGdldFRvZG9Db2xvck51bXMoKSk7XHJcbiAgICBjb25zdCB0b2RvQ29sb3JOdW1zID0gdXNlTWVtbyhnZXRUb2RvQ29sb3JOdW1zLFt0b2Rvc10pO1xyXG5cclxuICAgIHR5cGUgT2JqZWN0SW5kZXhUeXBlID0ge1xyXG4gICAgICAgIFtrZXk6c3RyaW5nXTpudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICB9O1xyXG4gICAgLy/sg4nquZQg6rCd7LK0IDJcclxuICAgIGNvbnN0IHRvZG9Db2xvck51bXMyID0gdXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGNvbnN0IGNvbG9yczogT2JqZWN0SW5kZXhUeXBlID0ge307XHJcbiAgICAgICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbG9yc1t0b2RvLmNvbG9yXTtcclxuICAgICAgICAgICAgaWYoIXZhbHVlKXtcclxuICAgICAgICAgICAgICAgIC8v7JeG64qUIO2CpOqwklxyXG4gICAgICAgICAgICAgICAgY29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/sobTsnqztlZjripQg7YKkXHJcbiAgICAgICAgICAgICAgICBjb2xvcnNbYCR7dG9kby5jb2xvcn1gXSA9IHZhbHVlICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjb2xvcnM7XHJcbiAgICB9LFt0b2Rvc10pO1xyXG4gICAgY29uc29sZS5sb2codG9kb0NvbG9yTnVtczIpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvZG8tbGlzdC1sYXN0LXRvZG9cIj5cclxuICAgICAgICAgICAgICAgICAgICDrgqjsnYAgVE9ETzxzcGFuPnt0b2Rvcy5sZW5ndGh96rCcPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtaGVhZGVyLWNvbG9yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAg7JO465WMICgpID0+ICgpIO2VtOyVvCDrkJzri6QuLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRvZG9Db2xvck51bXMpLm1hcCgoY29sb3IsIGluZGV4KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXItY29sb3ItbnVtXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvZG8tbGlzdC1oZWFkZXItcm91bmQtY29sb3IgYmctJHtjb2xvcn1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RvZG9Db2xvck51bXMuW2NvbG9yXX3qsJw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9kby1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7dG9kb3MubWFwKCh0b2RvKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0b2RvLWl0ZW1cIiBrZXk9e3RvZG8uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGVmdC1zaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvZG8tY29sb3ItYmxvY2sgYmctJHt0b2RvLmNvbG9yfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRvZG8tdGV4dCAke3RvZG8uY2hlY2tlZD8gXCJjaGVja2VkLXRvZG8tdGV4dFwiOlwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9kby50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLXJpZ2h0LXNpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2RvLmNoZWNrZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaENhbkljb24gY2xhc3NOYW1lPVwidG9kby10cmFzaC1jYW5cIiBvbkNsaWNrPXsoKT0+e319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja01hcmtJY29uIGNsYXNzTmFtZT1cInRvZG8tY2hlY2stbWFya1wiIG9uQ2xpY2s9eygpPT57fX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRvZG8uY2hlY2tlZCAmJiAoPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidG9kby1idXR0b25cIiBvbkNsaWNrPXsoKT0+e319Lz4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDsiLCJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub2RvTGlzdFwiO1xyXG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gXCIuLi90eXBlcy90b2RvXCI7XHJcblxyXG5jb25zdCB0b2RvczogVG9kb1R5cGVbXSA9IFtcclxuICB7aWQ6IDEsIHRleHQ6IFwi66eI7Yq4IOqwgOyEnCDsnqXrs7TquLBcIiwgY29sb3I6XCJyZWRcIiAsIGNoZWNrZWQ6IGZhbHNlfSxcclxuICB7aWQ6IDIsIHRleHQ6IFwi7IiY7ZWZIOyImeygnO2VmOq4sFwiLCBjb2xvcjogXCJvcmFuZ2VcIiwgY2hlY2tlZDogZmFsc2V9LFxyXG4gIHtpZDogMywgdGV4dDogXCLsvZTrlKntlZjquLBcIiwgY29sb3I6IFwieWVsbG93XCIsIGNoZWNrZWQ6IHRydWV9LFxyXG4gIHtpZDogNCwgdGV4dDogXCLrhKXsiqTtirgg6rO167aA7ZWY6riwXCIsIGNvbG9yOiBcImdyZWVuXCIsIGNoZWNrZWQ6IHRydWV9LFxyXG4gIHtpZDogNSwgdGV4dDogXCLsmpTrpqwg7Jew7Iq17ZWY6riwXCIsIGNvbG9yOiBcImJsdWVcIiwgY2hlY2tlZDogZmFsc2V9LFxyXG4gIHtpZDogNiwgdGV4dDogXCLrtoTrpqzsiJjqsbAg7ZWY6riwXCIsIGNvbG9yOiBcIm5hdnlcIiwgY2hlY2tlZDogZmFsc2V9LFxyXG4gIHtpZDogNiwgdGV4dDogXCLrtoTrpqzsiJjqsbAg7ZWY6riwXCIsIGNvbG9yOiBcInJlZFwiLCBjaGVja2VkOiBmYWxzZX0sXHJcbl07XHJcblxyXG5jb25zdCBpbmRleDpOZXh0UGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gPFRvZG9MaXN0IHRvZG9zPXt0b2Rvc30vPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICByZWQ6IFwiI0ZGQUZCMFwiLFxyXG4gICAgb3JhbmdlOiBcIiNGRkMyODJcIixcclxuICAgIHllbGxvdzogXCIjRkNGRkIwXCIsXHJcbiAgICBncmVlbjogXCIjRTJGRkFGXCIsXHJcbiAgICBibHVlOiBcIiNBRUU0RkZcIixcclxuICAgIG5hdnk6XCIjQjVDN0VEXCIsXHJcbiAgICBncmF5OlwiI0U1RTVFNVwiLFxyXG4gICAgZGVlcF9yZWQ6IFwiI0YzNTQ1NlwiLFxyXG4gICAgZGVlcF9ncmVlbjogXCIjNDdFNzc0XCIsXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=