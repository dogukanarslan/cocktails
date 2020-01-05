webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SearchBar */ "./components/SearchBar.js");







var _jsxFileName = "C:\\Users\\Do\u011Fukan\\Desktop\\KolayBi\\cocktails-menu-app-ssr\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).call(this, props));
    _this.state = {
      datas: _this.props.datas.drinks,
      _datas: _this.props.datas.drinks,
      options: _this.props.test
    };
    _this.searchDrink = _this.searchDrink.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.sortItems = _this.sortItems.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "selectedChange",
    value: function selectedChange(_selectedChange) {
      console.log(_selectedChange);
    }
  }, {
    key: "searchDrink",
    value: function searchDrink(_searchDrink) {
      this.setState({
        datas: this.state._datas.filter(function (item) {
          return item.strDrink.toLowerCase().indexOf(_searchDrink.toLowerCase()) > -1;
        })
      });
    }
  }, {
    key: "sortItems",
    value: function sortItems(sort) {
      if (sort === "idDrink") {
        this.setState({
          datas: this.state._datas.sort(function (a, b) {
            return a[sort] - b[sort];
          })
        });
      } else if (sort === "strDrink") {
        this.setState({
          datas: this.state._datas.sort(function (a, b) {
            var x = a[sort].toLowerCase();
            var y = b[sort].toLowerCase();

            if (x < y) {
              return -1;
            }

            if (x > y) {
              return 1;
            }

            return 0;
          })
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        sortItems: this.sortItems,
        searchDrink: this.searchDrink,
        selectedChange: this.selectedChange,
        options: this.state.options,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), __jsx("div", {
        className: "Drinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("p", {
        className: "lead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, this.state.datas.length, " Drink results")), this.state.datas.slice(0, 12).map(function (item) {
        return __jsx("div", {
          className: "col-6 col-md-4",
          key: item.idDrink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "[id]",
          as: "".concat(item.idDrink),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, __jsx("div", {
          style: {
            cursor: "pointer"
          },
          className: "jsx-2134158654" + " " + "card mb-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, __jsx("img", {
          src: item.strDrinkThumb,
          alt: "...",
          className: "jsx-2134158654" + " " + "card-img-top",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }), __jsx("div", {
          className: "jsx-2134158654" + " " + "card-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-2134158654" + " " + "card-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, item.strDrink), __jsx("button", {
          className: "jsx-2134158654" + " " + "btn btn-dark btn-sm",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "More Info"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
          id: "2134158654",
          __self: this
        }, "body.jsx-2134158654{background-color:red !important;}.card.jsx-2134158654 a.jsx-2134158654{-webkit-text-decoration:none;text-decoration:none;}.card.jsx-2134158654 a.jsx-2134158654:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRG/En3VrYW5cXERlc2t0b3BcXEtvbGF5QmlcXGNvY2t0YWlscy1tZW51LWFwcC1zc3JcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RGtDLEFBRzJELEFBR1gsQUFHVCxZQUNkLG9CQU5BLGtCQUdBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRG/En3VrYW5cXERlc2t0b3BcXEtvbGF5QmlcXGNvY2t0YWlscy1tZW51LWFwcC1zc3JcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hCYXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgIGRhdGFzOiB0aGlzLnByb3BzLmRhdGFzLmRyaW5rcyxcclxuICAgICAgX2RhdGFzOiB0aGlzLnByb3BzLmRhdGFzLmRyaW5rcyxcclxuICAgICAgb3B0aW9uczogdGhpcy5wcm9wcy50ZXN0LFxyXG4gICAgfVxyXG4gICAgdGhpcy5zZWFyY2hEcmluayA9IHRoaXMuc2VhcmNoRHJpbmsuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc29ydEl0ZW1zID0gdGhpcy5zb3J0SXRlbXMuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdGVkQ2hhbmdlKHNlbGVjdGVkQ2hhbmdlKXtcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkQ2hhbmdlKVxyXG4gIH1cclxuXHJcbiAgc2VhcmNoRHJpbmsoc2VhcmNoRHJpbmspe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YXM6IHRoaXMuc3RhdGUuX2RhdGFzLmZpbHRlcihpdGVtID0+IGl0ZW0uc3RyRHJpbmsudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaERyaW5rLnRvTG93ZXJDYXNlKCkpID4gLTEpfSlcclxuICB9XHJcblxyXG4gIHNvcnRJdGVtcyhzb3J0KXtcclxuICAgIGlmIChzb3J0ID09PSBcImlkRHJpbmtcIil7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGFzOiB0aGlzLnN0YXRlLl9kYXRhcy5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGFbc29ydF0gLSBiW3NvcnRdfSl9KVxyXG4gICAgfSBlbHNlIGlmIChzb3J0ID09PSBcInN0ckRyaW5rXCIpe1xyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YXM6IHRoaXMuc3RhdGUuX2RhdGFzLnNvcnQoZnVuY3Rpb24oYSxiKXtcclxuICAgICAgICB2YXIgeCA9IGFbc29ydF0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB2YXIgeSA9IGJbc29ydF0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoeCA8IHkpIHtyZXR1cm4gLTE7fVxyXG4gICAgICAgIGlmICh4ID4geSkge3JldHVybiAxO31cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSl9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPFNlYXJjaEJhciBzb3J0SXRlbXMgPSB7dGhpcy5zb3J0SXRlbXN9IHNlYXJjaERyaW5rID0ge3RoaXMuc2VhcmNoRHJpbmt9IHNlbGVjdGVkQ2hhbmdlPXt0aGlzLnNlbGVjdGVkQ2hhbmdlfSBvcHRpb25zPXt0aGlzLnN0YXRlLm9wdGlvbnN9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEcmlua3NcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj57dGhpcy5zdGF0ZS5kYXRhcy5sZW5ndGh9IERyaW5rIHJlc3VsdHM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhcy5zbGljZSgwLDEyKS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1tZC00XCIga2V5PXtpdGVtLmlkRHJpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIltpZF1cIiBhcz17YCR7aXRlbS5pZERyaW5rfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTVcIiBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17aXRlbS5zdHJEcmlua1RodW1ifSBhbHQ9XCIuLi5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e2l0ZW0uc3RyRHJpbmt9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1zbVwiPk1vcmUgSW5mbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG5cclxuICBjb25zdCBvcHRpb25zID0gYXdhaXQgZmV0Y2hcclxuICAoXCJodHRwczovL3RoZS1jb2NrdGFpbC1kYi5wLnJhcGlkYXBpLmNvbS9saXN0LnBocD9jPWxpc3RcIiwge1xyXG4gIFx0XCJtZXRob2RcIjogXCJHRVRcIixcclxuICBcdFwiaGVhZGVyc1wiOiB7XHJcbiAgXHRcdFwieC1yYXBpZGFwaS1ob3N0XCI6IFwidGhlLWNvY2t0YWlsLWRiLnAucmFwaWRhcGkuY29tXCIsXHJcbiAgXHRcdFwieC1yYXBpZGFwaS1rZXlcIjogXCI5NjI1ZjYwMDY5bXNoN2RmMGQ1YTNhZTVhNGRkcDFkNzU5ZWpzbjBjY2U0MDQyZjQ5NVwiXHJcbiAgXHR9XHJcbiAgfSlcclxuICBjb25zdCBvcHRpb25zUmVzID0gYXdhaXQgb3B0aW9ucy5qc29uKCk7XHJcblxyXG4gIGNvbnN0IGRhdGFzID0gYXdhaXQgZmV0Y2hcclxuICAoYGh0dHBzOi8vdGhlLWNvY2t0YWlsLWRiLnAucmFwaWRhcGkuY29tL2ZpbHRlci5waHA/Yz1PcmRpbmFyeSBEcmlua2AsIHtcclxuXHRcIm1ldGhvZFwiOiBcIkdFVFwiLFxyXG5cdFwiaGVhZGVyc1wiOiB7XHJcblx0XHRcIngtcmFwaWRhcGktaG9zdFwiOiBcInRoZS1jb2NrdGFpbC1kYi5wLnJhcGlkYXBpLmNvbVwiLFxyXG5cdFx0XCJ4LXJhcGlkYXBpLWtleVwiOiBcIjk2MjVmNjAwNjltc2g3ZGYwZDVhM2FlNWE0ZGRwMWQ3NTllanNuMGNjZTQwNDJmNDk1XCJcclxuXHR9XHJcbiAgfSlcclxuICBjb25zdCBkYXRhc1JlcyA9IGF3YWl0IGRhdGFzLmpzb24oKTtcclxuXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0ZXN0OiBvcHRpb25zUmVzLFxyXG4gICAgZGF0YXM6IGRhdGFzUmVzXHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Do\u011Fukan\\\\Desktop\\\\KolayBi\\\\cocktails-menu-app-ssr\\\\pages\\\\index.js */")));
      })))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



Index.getInitialProps = function _callee(context) {
  var options, optionsRes, datas, datasRes;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://the-cocktail-db.p.rapidapi.com/list.php?c=list", {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
              "x-rapidapi-key": "9625f60069msh7df0d5a3ae5a4ddp1d759ejsn0cce4042f495"
            }
          }));

        case 2:
          options = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(options.json());

        case 5:
          optionsRes = _context.sent;
          _context.next = 8;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?c=Ordinary Drink", {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
              "x-rapidapi-key": "9625f60069msh7df0d5a3ae5a4ddp1d759ejsn0cce4042f495"
            }
          }));

        case 8:
          datas = _context.sent;
          _context.next = 11;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(datas.json());

        case 11:
          datasRes = _context.sent;
          return _context.abrupt("return", {
            test: optionsRes,
            datas: datasRes
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
};

/***/ })

})
//# sourceMappingURL=index.js.06946dadb893b7fe156a.hot-update.js.map