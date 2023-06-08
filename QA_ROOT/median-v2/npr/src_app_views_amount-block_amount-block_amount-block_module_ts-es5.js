(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_amount-block_amount-block_amount-block_module_ts"], {
    /***/
    24543:
    /*!**************************************************************!*\
      !*** ./src/app/views/amount-block/amount-block.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AmountBlockComponent": function AmountBlockComponent() {
          return (
            /* binding */
            _AmountBlockComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _customer_search_customer_search_customer_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../customer-search/customer-search/customer-search.component */
      76641);

      var _AmountBlockComponent = /*#__PURE__*/function () {
        function _AmountBlockComponent() {
          _classCallCheck(this, _AmountBlockComponent);

          this.screenName = "amountBlock";
        }

        _createClass(_AmountBlockComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AmountBlockComponent;
      }();

      _AmountBlockComponent.ɵfac = function AmountBlockComponent_Factory(t) {
        return new (t || _AmountBlockComponent)();
      };

      _AmountBlockComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AmountBlockComponent,
        selectors: [["npr-amount-block"]],
        decls: 1,
        vars: 1,
        consts: [[3, "screen"]],
        template: function AmountBlockComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "npr-customer-search", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("screen", ctx.screenName);
          }
        },
        directives: [_customer_search_customer_search_customer_search_component__WEBPACK_IMPORTED_MODULE_0__.CustomerSearchComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    50611:
    /*!********************************************************************************!*\
      !*** ./src/app/views/amount-block/amount-block/amount-block-routing.module.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AmountBlockRoutingModule": function AmountBlockRoutingModule() {
          return (
            /* binding */
            _AmountBlockRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/guards/can-deactivate.guard */
      50215);
      /* harmony import */


      var _amount_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../amount-block.component */
      24543);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _amount_block_component__WEBPACK_IMPORTED_MODULE_1__.AmountBlockComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }];

      var _AmountBlockRoutingModule = /*#__PURE__*/_createClass(function _AmountBlockRoutingModule() {
        _classCallCheck(this, _AmountBlockRoutingModule);
      });

      _AmountBlockRoutingModule.ɵfac = function AmountBlockRoutingModule_Factory(t) {
        return new (t || _AmountBlockRoutingModule)();
      };

      _AmountBlockRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AmountBlockRoutingModule
      });
      _AmountBlockRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AmountBlockRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    35612:
    /*!************************************************************************!*\
      !*** ./src/app/views/amount-block/amount-block/amount-block.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AmountBlockModule": function AmountBlockModule() {
          return (
            /* binding */
            _AmountBlockModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _amount_block_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./amount-block-routing.module */
      50611);
      /* harmony import */


      var _customer_search_customer_search_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../customer-search/customer-search.module */
      9208);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _amount_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../amount-block.component */
      24543);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AmountBlockModule = /*#__PURE__*/_createClass(function _AmountBlockModule() {
        _classCallCheck(this, _AmountBlockModule);
      });

      _AmountBlockModule.ɵfac = function AmountBlockModule_Factory(t) {
        return new (t || _AmountBlockModule)();
      };

      _AmountBlockModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _AmountBlockModule
      });
      _AmountBlockModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _amount_block_routing_module__WEBPACK_IMPORTED_MODULE_0__.AmountBlockRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _customer_search_customer_search_module__WEBPACK_IMPORTED_MODULE_1__.CustomerSearchModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_AmountBlockModule, {
          declarations: [_amount_block_component__WEBPACK_IMPORTED_MODULE_2__.AmountBlockComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _amount_block_routing_module__WEBPACK_IMPORTED_MODULE_0__.AmountBlockRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _customer_search_customer_search_module__WEBPACK_IMPORTED_MODULE_1__.CustomerSearchModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_views_amount-block_amount-block_amount-block_module_ts-es5.js.map