(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SiteNavBarComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SiteNavBarComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
var menuJSON = [{
  item: 'Home',
  subitems: []
}, {
  item: 'Shop',
  subitems: ['Stöbern', 'Meine Artikel']
}, {
  item: 'Kategorien',
  subitems: []
}, {
  item: 'Unternehmen',
  subitems: ['Philosophie', 'Karriere']
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['colors', 'signed-in'],
  data: function data() {
    return {
      choice: 0,
      hide: [false, true, false, true],
      items: menuJSON
    };
  },
  methods: {
    chooseMenu: function chooseMenu(num) {
      var tmp = _toConsumableArray(this.hide);

      switch (num) {
        case 0:
          this.choice = num;
          this.$emit('router', num);
          break;

        case 1:
          tmp[num] = !tmp[num];
          this.hide = tmp;
          break;

        case 10:
          this.choice = num;
          this.$emit('router', num);
          break;

        case 11:
          if (this.signedIn) {
            this.choice = num;
            this.$emit('router', num);
          } else {
            alert('Anmelden');
          }

          break;

        case 2:
          this.choice = num;
          this.$emit('router', num);
          break;

        case 3:
          tmp[num] = !tmp[num];
          this.hide = tmp;
          break;

        case 30:
          this.choice = num;
          this.$emit('router', num); // goto philosophie

          break;

        case 31:
          this.choice = num;
          this.$emit('router', num); // open karriere

          break;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SiteNavBarComponent.vue?vue&type=template&id=bdf1b8ea&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SiteNavBarComponent.vue?vue&type=template&id=bdf1b8ea& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card column jc-between", attrs: { id: "sidenav" } },
    [
      _c(
        "div",
        { staticClass: "column al-s-center", attrs: { id: "menu" } },
        [
          _vm._l(_vm.items, function(item, itemIndex) {
            return [
              _c(
                "span",
                {
                  staticClass: "item link",
                  class: { active: itemIndex === _vm.choice },
                  attrs: { id: "item" + itemIndex },
                  on: {
                    click: function($event) {
                      return _vm.chooseMenu(itemIndex)
                    }
                  }
                },
                [_vm._v(_vm._s(item.item))]
              ),
              _vm._v(" "),
              _vm._l(item.subitems, function(subitem, subitemIndex) {
                var _obj
                return _c(
                  "span",
                  {
                    staticClass: "subitem link",
                    class:
                      ((_obj = {}),
                      (_obj[_vm.colors[itemIndex % 4]] = true),
                      (_obj.hidden = _vm.hide[itemIndex]),
                      (_obj.active =
                        itemIndex * 10 + subitemIndex === _vm.choice),
                      _obj),
                    attrs: { id: "subitem" + itemIndex + subitemIndex },
                    on: {
                      click: function($event) {
                        return _vm.chooseMenu(itemIndex * 10 + subitemIndex)
                      }
                    }
                  },
                  [_vm._v(_vm._s(subitem))]
                )
              })
            ]
          })
        ],
        2
      ),
      _vm._v(" "),
      _vm._m(0)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column je", attrs: { id: "impressum" } }, [
      _c("span", [_vm._v("Kaan Berk Cakir")]),
      _vm._v(" "),
      _c("div", { staticClass: "row jc-between" }, [
        _c("span", [_vm._v("Jonas Schell")]),
        _vm._v(" "),
        _c("span", [
          _c("span", { attrs: { onclick: "removeConsent()" } }, [_vm._v("©")]),
          _vm._v(" Copyright")
        ])
      ])
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

/***/ "./resources/js/components/SiteNavBarComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/SiteNavBarComponent.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SiteNavBarComponent_vue_vue_type_template_id_bdf1b8ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SiteNavBarComponent.vue?vue&type=template&id=bdf1b8ea& */ "./resources/js/components/SiteNavBarComponent.vue?vue&type=template&id=bdf1b8ea&");
/* harmony import */ var _SiteNavBarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SiteNavBarComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/SiteNavBarComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SiteNavBarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SiteNavBarComponent_vue_vue_type_template_id_bdf1b8ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SiteNavBarComponent_vue_vue_type_template_id_bdf1b8ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SiteNavBarComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SiteNavBarComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/SiteNavBarComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteNavBarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SiteNavBarComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SiteNavBarComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteNavBarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SiteNavBarComponent.vue?vue&type=template&id=bdf1b8ea&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/SiteNavBarComponent.vue?vue&type=template&id=bdf1b8ea& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteNavBarComponent_vue_vue_type_template_id_bdf1b8ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SiteNavBarComponent.vue?vue&type=template&id=bdf1b8ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SiteNavBarComponent.vue?vue&type=template&id=bdf1b8ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteNavBarComponent_vue_vue_type_template_id_bdf1b8ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SiteNavBarComponent_vue_vue_type_template_id_bdf1b8ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);