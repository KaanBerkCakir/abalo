(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AllArticlesComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AllArticlesComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['signedIn', 'articlesOnCart', 'buyableArticles', 'max'],
  data: function data() {
    return {
      limit: 5,
      category: 'all',
      categories: [],
      site: 1,
      backwardsAllowed: false,
      forwardsAllowed: true
    };
  },
  created: function created() {
    var _this = this;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8000/api/categories');

    xhr.onload = function () {
      _this.categories = JSON.parse(xhr.response).categories;
    };

    xhr.onerror = function () {};

    xhr.send();
  },
  methods: {
    addItem: function addItem(id) {
      this.$emit('add', id);
    },
    removeItem: function removeItem(id) {
      this.$emit('remove', id);
    },
    total: function total() {
      var sum = 0;
      this.articlesOnCart.forEach(function (elem) {
        sum += elem.ab_price;
      });
      return sum;
    },
    selectLim: function selectLim() {
      this.site = 1;
      this.backwardsAllowed = false;
      this.forwardsAllowed = this.max > this.site * this.limit;
      this.$emit('limit', this.limit);
    },
    backward: function backward() {
      this.site--;
      this.$emit('set-site', this.site);
      this.forwardsAllowed = true;
      this.backwardsAllowed = this.site > 1;
    },
    forward: function forward() {
      this.site++;
      this.$emit('set-site', this.site);
      this.backwardsAllowed = true;
      this.forwardsAllowed = this.max > this.site * this.limit;
    },
    selectCat: function selectCat() {
      this.$emit('categroy', this.category);
    }
  },
  watch: {
    max: function max() {
      this.site = 1;
      this.backwardsAllowed = false;
      this.forwardsAllowed = this.max > this.limit;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AllArticlesComponent.vue?vue&type=template&id=074d450a&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AllArticlesComponent.vue?vue&type=template&id=074d450a& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card grow-1 column al-center", attrs: { id: "content" } },
    [
      _c(
        "div",
        {
          staticClass: "al-s-stretch row al-center jc-between",
          attrs: { id: "pagination" }
        },
        [
          _c("div", { staticStyle: { width: "15%" } }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.limit,
                    expression: "limit"
                  }
                ],
                on: {
                  change: [
                    function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.limit = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    _vm.selectLim
                  ]
                }
              },
              [
                _c("option", { attrs: { value: "5" } }, [_vm._v("5")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "10" } }, [_vm._v("10")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "20" } }, [_vm._v("20")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "50" } }, [_vm._v("50")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "0" } }, [_vm._v("Alle")])
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "icon-button white-icon",
              class: { disabled: !_vm.backwardsAllowed },
              attrs: { disabled: !_vm.backwardsAllowed },
              on: { click: _vm.backward }
            },
            [_c("i", { staticClass: "fas fa-angle-left" })]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "white-icon" }, [
            _vm._v("Seite: " + _vm._s(_vm.site))
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "icon-button white-icon",
              class: { disabled: !_vm.forwardsAllowed },
              attrs: { disabled: !_vm.forwardsAllowed },
              on: { click: _vm.forward }
            },
            [_c("i", { staticClass: "fas fa-angle-right" })]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row jc-end", staticStyle: { width: "15%" } },
            [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.category,
                      expression: "category"
                    }
                  ],
                  on: {
                    change: [
                      function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.category = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      _vm.selectCat
                    ]
                  }
                },
                [
                  _c("option", { attrs: { value: "all" } }, [
                    _vm._v("Alle Kategorien")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.categories, function(parent) {
                    return _c(
                      "optgroup",
                      { attrs: { label: parent.parent } },
                      _vm._l(parent.children, function(child) {
                        return _c("option", { domProps: { value: child.id } }, [
                          _vm._v(_vm._s(child.ab_name))
                        ])
                      }),
                      0
                    )
                  })
                ],
                2
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.signedIn && _vm.articlesOnCart.length === 0
        ? _c("span", { attrs: { id: "shopping-card-null" } }, [
            _vm._v("\n        Der Warenkorb ist leer.\n    ")
          ])
        : _vm.signedIn && _vm.articlesOnCart.length > 0
        ? _c(
            "div",
            {
              staticClass: "al-s-stretch column al-s-stretch",
              attrs: { id: "shopping-card-list" }
            },
            [
              _c("span", { staticClass: "al-s-center" }, [_vm._v("Warenkorb")]),
              _vm._v(" "),
              _c(
                "ul",
                { attrs: { id: "all-articles-ul" } },
                [
                  _vm._l(_vm.articlesOnCart, function(elem) {
                    return [
                      _c("li", [
                        _c("div", { staticClass: "row" }, [
                          _c("span", [_vm._v(_vm._s(elem.ab_name))]),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass: "al-s-stretch grow-1",
                              staticStyle: { "text-align": "end" }
                            },
                            [_vm._v(_vm._s(elem.ab_price) + "€")]
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "button",
                              {
                                staticClass: "btn",
                                on: {
                                  click: function($event) {
                                    return _vm.removeItem(elem.id)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fas fa-minus-circle",
                                  staticStyle: { color: "#bc2d2d" }
                                })
                              ]
                            )
                          ])
                        ])
                      ])
                    ]
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "al-s-end",
                  attrs: { id: "shopping-card-total-costs" }
                },
                [_vm._v(_vm._s(_vm.total()) + "€")]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.buyableArticles.length === 0
        ? _c("span", { attrs: { id: "all-articles-null" } }, [
            _vm._v("Keine Artikel vorhanden.")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.buyableArticles.length > 0
        ? _c(
            "table",
            { attrs: { id: "all-articles-list" } },
            [
              _vm._m(0),
              _vm._v(" "),
              _vm._l(_vm.buyableArticles, function(elem, index) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(elem.id))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(elem.ab_name))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(elem.ab_description))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(elem.ab_createdate))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(elem.ab_price))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        on: {
                          click: function($event) {
                            return _vm.addItem(elem.id)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fas fa-plus" })]
                    )
                  ])
                ])
              })
            ],
            2
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { attrs: { id: "all-articles-head" } }, [
      _c("th", [_vm._v("Artikel-Id")]),
      _vm._v(" "),
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Beschreibung")]),
      _vm._v(" "),
      _c("th", [_vm._v("Erstellt am")]),
      _vm._v(" "),
      _c("th", [_vm._v("Preis")]),
      _vm._v(" "),
      _c("th", [_vm._v("Wk")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/AllArticlesComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/AllArticlesComponent.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AllArticlesComponent_vue_vue_type_template_id_074d450a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllArticlesComponent.vue?vue&type=template&id=074d450a& */ "./resources/js/components/AllArticlesComponent.vue?vue&type=template&id=074d450a&");
/* harmony import */ var _AllArticlesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllArticlesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/AllArticlesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AllArticlesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllArticlesComponent_vue_vue_type_template_id_074d450a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AllArticlesComponent_vue_vue_type_template_id_074d450a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AllArticlesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AllArticlesComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/AllArticlesComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllArticlesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AllArticlesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AllArticlesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllArticlesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AllArticlesComponent.vue?vue&type=template&id=074d450a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/AllArticlesComponent.vue?vue&type=template&id=074d450a& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllArticlesComponent_vue_vue_type_template_id_074d450a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AllArticlesComponent.vue?vue&type=template&id=074d450a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AllArticlesComponent.vue?vue&type=template&id=074d450a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllArticlesComponent_vue_vue_type_template_id_074d450a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllArticlesComponent_vue_vue_type_template_id_074d450a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);