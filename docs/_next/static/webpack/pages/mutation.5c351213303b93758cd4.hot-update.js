webpackHotUpdate_N_E("pages/mutation",{

/***/ "./examples/Mutation.jsx":
/*!*******************************!*\
  !*** ./examples/Mutation.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RequiredExample; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var kissmyform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kissmyform */ \"./node_modules/kissmyform/kissMyForm.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/pykiss/proyectos/kissMyForm/examples/examples/Mutation.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nfunction phoneFormating(number) {\n  number = number.replace(/[^0-9]/g, '');\n  var part = number.match(/(.{0,3})(.{0,3})(.{0,4})/);\n\n  if (part[3]) {\n    return \"(\".concat(part[1], \")-\").concat(part[2], \"-\").concat(part[3]);\n  }\n\n  if (part[2]) {\n    return \"(\".concat(part[1], \")-\").concat(part[2]);\n  }\n\n  if (part[1]) {\n    return \"(\".concat(part[1]);\n  }\n\n  return '';\n}\n\nfunction beforeChange(_ref) {\n  var name = _ref.name,\n      value = _ref.value,\n      values = _ref.values;\n\n  switch (name) {\n    case 'email':\n      values.email = value.toLowerCase().replace(/[^a-z0-9.@]/g, '');\n      break;\n\n    case 'phone':\n      values.phone = phoneFormating(value);\n      break;\n  }\n}\n\nfunction RequiredExample(_ref2) {\n  _s();\n\n  var onSubmit = _ref2.onSubmit;\n\n  var _useKMF = Object(kissmyform__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n    beforeChange: beforeChange\n  }),\n      inputControl = _useKMF.inputControl,\n      handleSubmit = _useKMF.handleSubmit;\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.field,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, \"Email:\"), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 30\n    }\n  }), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    placeholder: \"Email\"\n  }, inputControl('email'), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }))), __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.field,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, \"Phone:\"), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 30\n    }\n  }), __jsx(\"input\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    placeholder: \"Phone\"\n  }, inputControl('phone'), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }))), __jsx(\"button\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, \" submit \"));\n}\n\n_s(RequiredExample, \"+BOjw2WNfnUcpu+pXhAafkXXT18=\", false, function () {\n  return [kissmyform__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = RequiredExample;\n\nvar _c;\n\n$RefreshReg$(_c, \"RequiredExample\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXhhbXBsZXMvTXV0YXRpb24uanN4PzRmMWIiXSwibmFtZXMiOlsicGhvbmVGb3JtYXRpbmciLCJudW1iZXIiLCJyZXBsYWNlIiwicGFydCIsIm1hdGNoIiwiYmVmb3JlQ2hhbmdlIiwibmFtZSIsInZhbHVlIiwidmFsdWVzIiwiZW1haWwiLCJ0b0xvd2VyQ2FzZSIsInBob25lIiwiUmVxdWlyZWRFeGFtcGxlIiwib25TdWJtaXQiLCJ1c2VLTUYiLCJpbnB1dENvbnRyb2wiLCJoYW5kbGVTdWJtaXQiLCJzdHlsZXMiLCJmaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxNQUF4QixFQUFnQztBQUM5QkEsUUFBTSxHQUFHQSxNQUFNLENBQUNDLE9BQVAsQ0FBZSxTQUFmLEVBQTBCLEVBQTFCLENBQVQ7QUFFQSxNQUFNQyxJQUFJLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhLDBCQUFiLENBQWI7O0FBRUEsTUFBSUQsSUFBSSxDQUFDLENBQUQsQ0FBUixFQUFhO0FBQ1gsc0JBQVdBLElBQUksQ0FBQyxDQUFELENBQWYsZUFBdUJBLElBQUksQ0FBQyxDQUFELENBQTNCLGNBQWtDQSxJQUFJLENBQUMsQ0FBRCxDQUF0QztBQUNEOztBQUVELE1BQUlBLElBQUksQ0FBQyxDQUFELENBQVIsRUFBYTtBQUNYLHNCQUFXQSxJQUFJLENBQUMsQ0FBRCxDQUFmLGVBQXVCQSxJQUFJLENBQUMsQ0FBRCxDQUEzQjtBQUNEOztBQUVELE1BQUlBLElBQUksQ0FBQyxDQUFELENBQVIsRUFBYTtBQUNYLHNCQUFXQSxJQUFJLENBQUMsQ0FBRCxDQUFmO0FBQ0Q7O0FBRUQsU0FBTyxFQUFQO0FBQ0Q7O0FBRUQsU0FBU0UsWUFBVCxPQUVHO0FBQUEsTUFEREMsSUFDQyxRQUREQSxJQUNDO0FBQUEsTUFES0MsS0FDTCxRQURLQSxLQUNMO0FBQUEsTUFEWUMsTUFDWixRQURZQSxNQUNaOztBQUNELFVBQVFGLElBQVI7QUFDRSxTQUFLLE9BQUw7QUFDRUUsWUFBTSxDQUFDQyxLQUFQLEdBQWVGLEtBQUssQ0FBQ0csV0FBTixHQUFvQlIsT0FBcEIsQ0FBNEIsY0FBNUIsRUFBNEMsRUFBNUMsQ0FBZjtBQUNBOztBQUNGLFNBQUssT0FBTDtBQUNFTSxZQUFNLENBQUNHLEtBQVAsR0FBZVgsY0FBYyxDQUFDTyxLQUFELENBQTdCO0FBQ0E7QUFOSjtBQVFEOztBQUVjLFNBQVNLLGVBQVQsUUFBdUM7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFNBQVpBLFFBQVk7O0FBQUEsZ0JBQ2JDLDBEQUFNLENBQUM7QUFBRVQsZ0JBQVksRUFBWkE7QUFBRixHQUFELENBRE87QUFBQSxNQUM1Q1UsWUFENEMsV0FDNUNBLFlBRDRDO0FBQUEsTUFDOUJDLFlBRDhCLFdBQzlCQSxZQUQ4Qjs7QUFFcEQsU0FDRTtBQUFNLFlBQVEsRUFBRUEsWUFBWSxDQUFDSCxRQUFELENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUksOERBQU0sQ0FBQ0MsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUN1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRHZCLEVBRUU7QUFBTyxlQUFXLEVBQUM7QUFBbkIsS0FBK0JILFlBQVksQ0FBQyxPQUFELENBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRixDQURGLEVBS0U7QUFBSyxhQUFTLEVBQUVFLDhEQUFNLENBQUNDLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFDdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUR2QixFQUVFO0FBQU8sZUFBVyxFQUFDO0FBQW5CLEtBQStCSCxZQUFZLENBQUMsT0FBRCxDQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkYsQ0FMRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEYsQ0FERjtBQWFEOztHQWZ1QkgsZTtVQUNpQkUsa0Q7OztLQURqQkYsZSIsImZpbGUiOiIuL2V4YW1wbGVzL011dGF0aW9uLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VLTUYgZnJvbSAna2lzc215Zm9ybSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBwaG9uZUZvcm1hdGluZyhudW1iZXIpIHtcbiAgbnVtYmVyID0gbnVtYmVyLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG5cbiAgY29uc3QgcGFydCA9IG51bWJlci5tYXRjaCgvKC57MCwzfSkoLnswLDN9KSguezAsNH0pLyk7XG5cbiAgaWYgKHBhcnRbM10pIHtcbiAgICByZXR1cm4gYCgke3BhcnRbMV19KS0ke3BhcnRbMl19LSR7cGFydFszXX1gO1xuICB9XG5cbiAgaWYgKHBhcnRbMl0pIHtcbiAgICByZXR1cm4gYCgke3BhcnRbMV19KS0ke3BhcnRbMl19YDtcbiAgfVxuXG4gIGlmIChwYXJ0WzFdKSB7XG4gICAgcmV0dXJuIGAoJHtwYXJ0WzFdfWA7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGJlZm9yZUNoYW5nZSh7XG4gIG5hbWUsIHZhbHVlLCB2YWx1ZXMsXG59KSB7XG4gIHN3aXRjaCAobmFtZSkge1xuICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgIHZhbHVlcy5lbWFpbCA9IHZhbHVlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXowLTkuQF0vZywgJycpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGhvbmUnOlxuICAgICAgdmFsdWVzLnBob25lID0gcGhvbmVGb3JtYXRpbmcodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVxdWlyZWRFeGFtcGxlKHsgb25TdWJtaXQgfSkge1xuICBjb25zdCB7IGlucHV0Q29udHJvbCwgaGFuZGxlU3VibWl0IH0gPSB1c2VLTUYoeyBiZWZvcmVDaGFuZ2UgfSk7XG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWVsZH0+XG4gICAgICAgIDxsYWJlbD5FbWFpbDo8L2xhYmVsPjxiciAvPlxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHsuLi5pbnB1dENvbnRyb2woJ2VtYWlsJyl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGR9PlxuICAgICAgICA8bGFiZWw+UGhvbmU6PC9sYWJlbD48YnIgLz5cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiUGhvbmVcIiB7Li4uaW5wdXRDb250cm9sKCdwaG9uZScpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uPiBzdWJtaXQgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./examples/Mutation.jsx\n");

/***/ })

})