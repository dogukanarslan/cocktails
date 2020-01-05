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
          key: item.idDrink,
          className: "jsx-3364761965" + " " + "col-6 col-md-4",
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
          className: "jsx-3364761965" + " " + "card mb-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, __jsx("img", {
          src: item.strDrinkThumb,
          alt: "...",
          className: "jsx-3364761965" + " " + "card-img-top",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }), __jsx("div", {
          className: "jsx-3364761965" + " " + "card-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-3364761965" + " " + "card-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, item.strDrink), __jsx("button", {
          className: "jsx-3364761965" + " " + "btn btn-dark btn-sm",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "More Info")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
          id: "3364761965",
          __self: this
        }, ".card.jsx-3364761965:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRG/En3VrYW5cXERlc2t0b3BcXEtvbGF5QmlcXGNvY2t0YWlscy1tZW51LWFwcC1zc3JcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGdDLEFBR3FDLFlBQ2QiLCJmaWxlIjoiQzpcXFVzZXJzXFxEb8SfdWthblxcRGVza3RvcFxcS29sYXlCaVxcY29ja3RhaWxzLW1lbnUtYXBwLXNzclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaEJhclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgZGF0YXM6IHRoaXMucHJvcHMuZGF0YXMuZHJpbmtzLFxyXG4gICAgICBfZGF0YXM6IHRoaXMucHJvcHMuZGF0YXMuZHJpbmtzLFxyXG4gICAgICBvcHRpb25zOiB0aGlzLnByb3BzLnRlc3QsXHJcbiAgICB9XHJcbiAgICB0aGlzLnNlYXJjaERyaW5rID0gdGhpcy5zZWFyY2hEcmluay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zb3J0SXRlbXMgPSB0aGlzLnNvcnRJdGVtcy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0ZWRDaGFuZ2Uoc2VsZWN0ZWRDaGFuZ2Upe1xyXG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRDaGFuZ2UpXHJcbiAgfVxyXG5cclxuICBzZWFyY2hEcmluayhzZWFyY2hEcmluayl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtkYXRhczogdGhpcy5zdGF0ZS5fZGF0YXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zdHJEcmluay50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoRHJpbmsudG9Mb3dlckNhc2UoKSkgPiAtMSl9KVxyXG4gIH1cclxuXHJcbiAgc29ydEl0ZW1zKHNvcnQpe1xyXG4gICAgaWYgKHNvcnQgPT09IFwiaWREcmlua1wiKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YXM6IHRoaXMuc3RhdGUuX2RhdGFzLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYVtzb3J0XSAtIGJbc29ydF19KX0pXHJcbiAgICB9IGVsc2UgaWYgKHNvcnQgPT09IFwic3RyRHJpbmtcIil7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtkYXRhczogdGhpcy5zdGF0ZS5fZGF0YXMuc29ydChmdW5jdGlvbihhLGIpe1xyXG4gICAgICAgIHZhciB4ID0gYVtzb3J0XS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHZhciB5ID0gYltzb3J0XS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmICh4IDwgeSkge3JldHVybiAtMTt9XHJcbiAgICAgICAgaWYgKHggPiB5KSB7cmV0dXJuIDE7fVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9KX0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8U2VhcmNoQmFyIHNvcnRJdGVtcyA9IHt0aGlzLnNvcnRJdGVtc30gc2VhcmNoRHJpbmsgPSB7dGhpcy5zZWFyY2hEcmlua30gc2VsZWN0ZWRDaGFuZ2U9e3RoaXMuc2VsZWN0ZWRDaGFuZ2V9IG9wdGlvbnM9e3RoaXMuc3RhdGUub3B0aW9uc30vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRyaW5rc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPnt0aGlzLnN0YXRlLmRhdGFzLmxlbmd0aH0gRHJpbmsgcmVzdWx0czwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFzLnNsaWNlKDAsMTIpLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLW1kLTRcIiBrZXk9e2l0ZW0uaWREcmlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiW2lkXVwiIGFzPXtgJHtpdGVtLmlkRHJpbmt9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItNVwiIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXtpdGVtLnN0ckRyaW5rVGh1bWJ9IGFsdD1cIi4uLlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57aXRlbS5zdHJEcmlua308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLXNtXCI+TW9yZSBJbmZvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAgIC5jYXJkOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG5cclxuICBjb25zdCBvcHRpb25zID0gYXdhaXQgZmV0Y2hcclxuICAoXCJodHRwczovL3RoZS1jb2NrdGFpbC1kYi5wLnJhcGlkYXBpLmNvbS9saXN0LnBocD9jPWxpc3RcIiwge1xyXG4gIFx0XCJtZXRob2RcIjogXCJHRVRcIixcclxuICBcdFwiaGVhZGVyc1wiOiB7XHJcbiAgXHRcdFwieC1yYXBpZGFwaS1ob3N0XCI6IFwidGhlLWNvY2t0YWlsLWRiLnAucmFwaWRhcGkuY29tXCIsXHJcbiAgXHRcdFwieC1yYXBpZGFwaS1rZXlcIjogXCI5NjI1ZjYwMDY5bXNoN2RmMGQ1YTNhZTVhNGRkcDFkNzU5ZWpzbjBjY2U0MDQyZjQ5NVwiXHJcbiAgXHR9XHJcbiAgfSlcclxuICBjb25zdCBvcHRpb25zUmVzID0gYXdhaXQgb3B0aW9ucy5qc29uKCk7XHJcblxyXG4gIGNvbnN0IGRhdGFzID0gYXdhaXQgZmV0Y2hcclxuICAoYGh0dHBzOi8vdGhlLWNvY2t0YWlsLWRiLnAucmFwaWRhcGkuY29tL2ZpbHRlci5waHA/Yz1PcmRpbmFyeSBEcmlua2AsIHtcclxuXHRcIm1ldGhvZFwiOiBcIkdFVFwiLFxyXG5cdFwiaGVhZGVyc1wiOiB7XHJcblx0XHRcIngtcmFwaWRhcGktaG9zdFwiOiBcInRoZS1jb2NrdGFpbC1kYi5wLnJhcGlkYXBpLmNvbVwiLFxyXG5cdFx0XCJ4LXJhcGlkYXBpLWtleVwiOiBcIjk2MjVmNjAwNjltc2g3ZGYwZDVhM2FlNWE0ZGRwMWQ3NTllanNuMGNjZTQwNDJmNDk1XCJcclxuXHR9XHJcbiAgfSlcclxuICBjb25zdCBkYXRhc1JlcyA9IGF3YWl0IGRhdGFzLmpzb24oKTtcclxuXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0ZXN0OiBvcHRpb25zUmVzLFxyXG4gICAgZGF0YXM6IGRhdGFzUmVzXHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Do\u011Fukan\\\\Desktop\\\\KolayBi\\\\cocktails-menu-app-ssr\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=index.js.24e9f8ba792b1fb4eecc.hot-update.js.map