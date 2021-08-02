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

  const todoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(getTodoColorNums, [todos]); //문자열 인덱스 사용을 위한 타입

  //색깔 객체 구하기2
  const todoColorNums2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const colors = {};
    todos.forEach(todo => {
      const value = colors[todo.color];

      if (!value) {
        //* 존재하지않던 key라면
        colors[`${todo.color}`] = 1;
      } else {
        //* 존재하는 키라면
        colors[`${todo.color}`] = value + 1;
      }
    });
    return colors;
  }, [todos]);
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

/***/ "./lib/api/index.ts":
/*!**************************!*\
  !*** ./lib/api/index.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "http://localhost:3000"
});
/* harmony default export */ __webpack_exports__["default"] = (axios);

/***/ }),

/***/ "./lib/api/todo.ts":
/*!*************************!*\
  !*** ./lib/api/todo.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTodosAPI": function() { return /* binding */ getTodosAPI; }
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./lib/api/index.ts");

//투두리스트 불러오기
const getTodosAPI = () => ___WEBPACK_IMPORTED_MODULE_0__.default.get("api/todos");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TodoList */ "./components/TodoList.tsx");
/* harmony import */ var _lib_api_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api/todo */ "./lib/api/todo.ts");

var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\nextjs\\next-todo\\pages\\index.tsx";

 // const todos: TodoType[] = [
//   {id: 1, text: "마트 가서 장보기", color:"red" , checked: false},
//   {id: 2, text: "수학 숙제하기", color: "orange", checked: false},
//   {id: 3, text: "코딩하기", color: "yellow", checked: true},
//   {id: 4, text: "넥스트 공부하기", color: "green", checked: true},
//   {id: 5, text: "요리 연습하기", color: "blue", checked: false},
//   {id: 6, text: "분리수거 하기", color: "navy", checked: false},
//   {id: 7, text: "분리수거 하기2", color: "red", checked: false},
// ];

const index = ({
  todos
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoList__WEBPACK_IMPORTED_MODULE_1__.default, {
    todos: todos
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 10
  }, undefined);
};

const getServerSideProps = async () => {
  try {
    const {
      data
    } = await (0,_lib_api_todo__WEBPACK_IMPORTED_MODULE_2__.getTodosAPI)();
    return {
      props: {
        todos: data
      }
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        todos: []
      }
    };
  }
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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeCIsIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9saWIvYXBpL2luZGV4LnRzIiwid2VicGFjazovL25leHQtdG9kby8uL2xpYi9hcGkvdG9kby50cyIsIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbmV4dC10b2RvLy4vc3R5bGVzL3BhbGV0dGUudHMiLCJ3ZWJwYWNrOi8vbmV4dC10b2RvL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9uZXh0LXRvZG8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHQtdG9kby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL25leHQtdG9kby9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiVHJhc2hDYW5JY29uIiwiQ2hlY2tNYXJrSWNvbiIsIkNvbnRhaW5lciIsInN0eWxlZCIsInBhbGV0dGUiLCJUb2RvTGlzdCIsInRvZG9zIiwiZ2V0VG9kb0NvbG9yTnVtcyIsInVzZUNhbGxiYWNrIiwicmVkIiwib3JhbmdlIiwieWVsbG93IiwiZ3JlZW4iLCJibHVlIiwibmF2eSIsImZvckVhY2giLCJ0b2RvIiwiY29sb3IiLCJ0b2RvQ29sb3JOdW1zIiwidXNlTWVtbyIsInRvZG9Db2xvck51bXMyIiwiY29sb3JzIiwidmFsdWUiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaW5kZXgiLCJjaGVja2VkIiwidGV4dCIsImlkIiwiYXhpb3MiLCJBeGlvcyIsImJhc2VVUkwiLCJwcm9jZXNzIiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImdldFRvZG9zQVBJIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiZGF0YSIsInByb3BzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJncmF5IiwiZGVlcF9yZWQiLCJkZWVwX2dyZWVu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QUYsUUFBVSxNQUFNRiwwREFBVyxFQUFqQztBQUNBLFdBQU87QUFBRUcsV0FBSyxFQUFFO0FBQUVqQyxhQUFLLEVBQUVnQztBQUFUO0FBQVQsS0FBUDtBQUNELEdBSEQsQ0FJQSxPQUFNRSxDQUFOLEVBQVE7QUFDTkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQSxXQUFPO0FBQUVELFdBQUssRUFBRTtBQUFFakMsYUFBSyxFQUFFO0FBQVQ7QUFBVCxLQUFQO0FBQ0Q7QUFDRixDQVRNO0FBV1AsK0RBQWVxQixLQUFmLEU7Ozs7Ozs7Ozs7OztBQ25DQSwrREFBZTtBQUNYbEIsS0FBRyxFQUFFLFNBRE07QUFFWEMsUUFBTSxFQUFFLFNBRkc7QUFHWEMsUUFBTSxFQUFFLFNBSEc7QUFJWEMsT0FBSyxFQUFFLFNBSkk7QUFLWEMsTUFBSSxFQUFFLFNBTEs7QUFNWEMsTUFBSSxFQUFDLFNBTk07QUFPWDZCLE1BQUksRUFBQyxTQVBNO0FBUVhDLFVBQVEsRUFBRSxTQVJDO0FBU1hDLFlBQVUsRUFBRTtBQVRELENBQWYsRTs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vdHlwZXMvdG9kb1wiO1xyXG5pbXBvcnQgVHJhc2hDYW5JY29uIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL3N2Zy9pY29ubW9uc3RyLXRyYXNoLWNhbi01LnN2Z1wiO1xyXG5pbXBvcnQgQ2hlY2tNYXJrSWNvbiBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9zdmcvaWNvbm1vbnN0ci1zcGVlY2gtYnViYmxlLTM1LnN2Z1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC50b2RvLW51bSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvZG8tbGlzdC1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XHJcblxyXG4gICAgICAgIC50b2RvLWxpc3QtbGFzdC10b2RvIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCA4cHg7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvZG8tbGlzdC1oZWFkZXItY29sb3JzIHtcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAudG9kby1saXN0LWhlYWRlci1jb2xvci1udW0ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRvZG8tbGlzdC1oZWFkZXItcm91bmQtY29sb3Ige1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmctYmx1ZSB7IGJhY2tncm91bmQtY29sb3I6JHtwYWxldHRlLmJsdWUgfSB9XHJcbiAgICAuYmctZ3JlZW4geyBiYWNrZ3JvdW5kLWNvbG9yOiR7cGFsZXR0ZS5ncmVlbn0gfVxyXG4gICAgLmJnLW5hdnkgeyBiYWNrZ3JvdW5kLWNvbG9yOiR7cGFsZXR0ZS5uYXZ5fSB9XHJcbiAgICAuYmctb3JhbmdlIHsgYmFja2dyb3VuZC1jb2xvcjoke3BhbGV0dGUub3JhbmdlfSB9XHJcbiAgICAuYmctcmVkIHsgYmFja2dyb3VuZC1jb2xvcjoke3BhbGV0dGUucmVkfSB9XHJcbiAgICAuYmcteWVsbG93IHsgYmFja2dyb3VuZC1jb2xvcjoke3BhbGV0dGUueWVsbG93fSB9XHJcblxyXG4gICAgLnRvZG8tbGlzdCB7XHJcbiAgICAgICAgLnRvZG8taXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuXHJcbiAgICAgICAgICAgIC50b2RvLWxlZnQtc2lkZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLnRvZG8tY29sb3ItYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jaGVja2VkLXRvZG8tdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5fTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50b2RvLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRvZG8tcmlnaHQtc2lkZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudG9kby10cmFzaC1jYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAke3BhbGV0dGUuZGVlcF9yZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRvZG8tY2hlY2stbWFyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogJHtwYWxldHRlLmRlZXBfZ3JlZW59XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRvZG8tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXl9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIHRvZG9zOiBUb2RvVHlwZVtdO1xyXG59XHJcblxyXG5cclxuY29uc3QgVG9kb0xpc3Q6IFJlYWN0LkZDPElQcm9wcz4gPSAoe3RvZG9zfSkgPT4ge1xyXG5cclxuICAgIC8v7IOJ6rmUIOqwneyytCDqtaztlZjquLAgMVxyXG4gICAgY29uc3QgZ2V0VG9kb0NvbG9yTnVtcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBsZXQgcmVkID0gMDtcclxuICAgICAgICBsZXQgb3JhbmdlID0gMDtcclxuICAgICAgICBsZXQgeWVsbG93ID0gMDtcclxuICAgICAgICBsZXQgZ3JlZW4gPSAwO1xyXG4gICAgICAgIGxldCBibHVlID0gMDtcclxuICAgICAgICBsZXQgbmF2eSA9IDA7XHJcbiAgICAgICAgdG9kb3MuZm9yRWFjaCgodG9kbyk9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodG9kby5jb2xvcil7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicmVkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVkICs9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwib3JhbmdlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgb3JhbmdlICs9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwieWVsbG93XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgeWVsbG93ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ3JlZW5cIjpcclxuICAgICAgICAgICAgICAgICAgICBncmVlbiArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJsdWVcIjpcclxuICAgICAgICAgICAgICAgICAgICBibHVlICs9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibmF2eVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIG5hdnkgKz0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlZCxcclxuICAgICAgICAgICAgb3JhbmdlLFxyXG4gICAgICAgICAgICB5ZWxsb3csXHJcbiAgICAgICAgICAgIGdyZWVuLFxyXG4gICAgICAgICAgICBibHVlLFxyXG4gICAgICAgICAgICBuYXZ5XHJcbiAgICAgICAgfTtcclxuICAgIH0sW3RvZG9zXSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhnZXRUb2RvQ29sb3JOdW1zKCkpO1xyXG4gICAgY29uc3QgdG9kb0NvbG9yTnVtcyA9IHVzZU1lbW8oZ2V0VG9kb0NvbG9yTnVtcyxbdG9kb3NdKTtcclxuXHJcbiAgICAvL+usuOyekOyXtCDsnbjrjbHsiqQg7IKs7Jqp7J2EIOychO2VnCDtg4DsnoVcclxuICAgIHR5cGUgT2JqZWN0SW5kZXhUeXBlID0ge1xyXG4gICAgICAgIFtrZXk6c3RyaW5nXTpudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy/sg4nquZQg6rCd7LK0IOq1rO2VmOq4sDJcclxuICBjb25zdCB0b2RvQ29sb3JOdW1zMiA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgY29sb3JzOiBPYmplY3RJbmRleFR5cGUgPSB7fTtcclxuICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBjb2xvcnNbdG9kby5jb2xvcl07XHJcbiAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAvLyog7KG07J6s7ZWY7KeA7JWK642YIGtleeudvOuptFxyXG4gICAgICAgIGNvbG9yc1tgJHt0b2RvLmNvbG9yfWBdID0gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyog7KG07J6s7ZWY64qUIO2CpOudvOuptFxyXG4gICAgICAgIGNvbG9yc1tgJHt0b2RvLmNvbG9yfWBdID0gdmFsdWUgKyAxO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjb2xvcnM7XHJcbiAgfSwgW3RvZG9zXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvZG8tbGlzdC1sYXN0LXRvZG9cIj5cclxuICAgICAgICAgICAgICAgICAgICDrgqjsnYAgVE9ETzxzcGFuPnt0b2Rvcy5sZW5ndGh96rCcPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtaGVhZGVyLWNvbG9yc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAg7JO465WMICgpID0+ICgpIO2VtOyVvCDrkJzri6QuLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRvZG9Db2xvck51bXMpLm1hcCgoY29sb3IsIGluZGV4KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXItY29sb3ItbnVtXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvZG8tbGlzdC1oZWFkZXItcm91bmQtY29sb3IgYmctJHtjb2xvcn1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RvZG9Db2xvck51bXNbY29sb3JdfeqwnDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b2RvLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRvZG8taXRlbVwiIGtleT17dG9kby5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1sZWZ0LXNpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9kby1jb2xvci1ibG9jayBiZy0ke3RvZG8uY29sb3J9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdG9kby10ZXh0ICR7dG9kby5jaGVja2VkPyBcImNoZWNrZWQtdG9kby10ZXh0XCI6XCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2RvLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tcmlnaHQtc2lkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvZG8uY2hlY2tlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoQ2FuSWNvbiBjbGFzc05hbWU9XCJ0b2RvLXRyYXNoLWNhblwiIG9uQ2xpY2s9eygpPT57fX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrTWFya0ljb24gY2xhc3NOYW1lPVwidG9kby1jaGVjay1tYXJrXCIgb25DbGljaz17KCk9Pnt9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshdG9kby5jaGVja2VkICYmICg8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ0b2RvLWJ1dHRvblwiIG9uQ2xpY2s9eygpPT57fX0vPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0OyIsImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGF4aW9zID0gQXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBheGlvczsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdG9kb1wiO1xyXG5cclxuLy/tiKzrkZDrpqzsiqTtirgg67aI65+s7Jik6riwXHJcbmV4cG9ydCBjb25zdCBnZXRUb2Rvc0FQSSA9ICgpICA9PiBheGlvcy5nZXQ8VG9kb1R5cGVbXT4oXCJhcGkvdG9kb3NcIik7IiwiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub2RvTGlzdFwiO1xyXG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gXCIuLi90eXBlcy90b2RvXCI7XHJcbmltcG9ydCB7IGdldFRvZG9zQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGkvdG9kb1wiO1xyXG5cclxuLy8gY29uc3QgdG9kb3M6IFRvZG9UeXBlW10gPSBbXHJcbi8vICAge2lkOiAxLCB0ZXh0OiBcIuuniO2KuCDqsIDshJwg7J6l67O06riwXCIsIGNvbG9yOlwicmVkXCIgLCBjaGVja2VkOiBmYWxzZX0sXHJcbi8vICAge2lkOiAyLCB0ZXh0OiBcIuyImO2VmSDsiJnsoJztlZjquLBcIiwgY29sb3I6IFwib3JhbmdlXCIsIGNoZWNrZWQ6IGZhbHNlfSxcclxuLy8gICB7aWQ6IDMsIHRleHQ6IFwi7L2U65Sp7ZWY6riwXCIsIGNvbG9yOiBcInllbGxvd1wiLCBjaGVja2VkOiB0cnVlfSxcclxuLy8gICB7aWQ6IDQsIHRleHQ6IFwi64Sl7Iqk7Yq4IOqzteu2gO2VmOq4sFwiLCBjb2xvcjogXCJncmVlblwiLCBjaGVja2VkOiB0cnVlfSxcclxuLy8gICB7aWQ6IDUsIHRleHQ6IFwi7JqU66asIOyXsOyKte2VmOq4sFwiLCBjb2xvcjogXCJibHVlXCIsIGNoZWNrZWQ6IGZhbHNlfSxcclxuLy8gICB7aWQ6IDYsIHRleHQ6IFwi67aE66as7IiY6rGwIO2VmOq4sFwiLCBjb2xvcjogXCJuYXZ5XCIsIGNoZWNrZWQ6IGZhbHNlfSxcclxuLy8gICB7aWQ6IDcsIHRleHQ6IFwi67aE66as7IiY6rGwIO2VmOq4sDJcIiwgY29sb3I6IFwicmVkXCIsIGNoZWNrZWQ6IGZhbHNlfSxcclxuLy8gXTtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gIHRvZG9zOiBUb2RvVHlwZVtdO1xyXG59XHJcblxyXG5jb25zdCBpbmRleDpOZXh0UGFnZTxJUHJvcHM+ID0gKHt0b2Rvc30pID0+IHtcclxuICByZXR1cm4gPFRvZG9MaXN0IHRvZG9zPXt0b2Rvc30vPjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jKCkgPT4ge1xyXG4gIHRyeXtcclxuICAgIGNvbnN0IHsgZGF0YSB9PSBhd2FpdCBnZXRUb2Rvc0FQSSgpO1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdG9kb3M6IGRhdGF9IH07XHJcbiAgfVxyXG4gIGNhdGNoKGUpe1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICByZXR1cm4geyBwcm9wczogeyB0b2RvczogW10gfSB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4OyIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHJlZDogXCIjRkZBRkIwXCIsXHJcbiAgICBvcmFuZ2U6IFwiI0ZGQzI4MlwiLFxyXG4gICAgeWVsbG93OiBcIiNGQ0ZGQjBcIixcclxuICAgIGdyZWVuOiBcIiNFMkZGQUZcIixcclxuICAgIGJsdWU6IFwiI0FFRTRGRlwiLFxyXG4gICAgbmF2eTpcIiNCNUM3RURcIixcclxuICAgIGdyYXk6XCIjRTVFNUU1XCIsXHJcbiAgICBkZWVwX3JlZDogXCIjRjM1NDU2XCIsXHJcbiAgICBkZWVwX2dyZWVuOiBcIiM0N0U3NzRcIixcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=