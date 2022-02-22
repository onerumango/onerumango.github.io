(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_addSystem_add-System_add-System_module_ts"], {
    /***/
    21067:
    /*!*****************************************************************!*\
      !*** ./src/app/views/addSystem/add-System/add-System.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddSystemModule": function AddSystemModule() {
          return (
            /* binding */
            _AddSystemModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _add_system_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-system-routing.module */
      23340);
      /* harmony import */


      var _add_system_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-system.component */
      16496);
      /* harmony import */


      var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/components/components.module */
      15626);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../add-system-summary/add-system-summary.component */
      86312);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-spinner */
      55314);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AddSystemModule = /*#__PURE__*/_createClass(function _AddSystemModule() {
        _classCallCheck(this, _AddSystemModule);
      });

      _AddSystemModule.ɵfac = function AddSystemModule_Factory(t) {
        return new (t || _AddSystemModule)();
      };

      _AddSystemModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _AddSystemModule
      });
      _AddSystemModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTablesModule, _add_system_routing_module__WEBPACK_IMPORTED_MODULE_1__.AddSystemRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_AddSystemModule, {
          declarations: [_add_system_component__WEBPACK_IMPORTED_MODULE_2__.AddSystemComponent, _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_4__.AddSystemSummaryComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTablesModule, _add_system_routing_module__WEBPACK_IMPORTED_MODULE_1__.AddSystemRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule]
        });
      })();
      /***/

    },

    /***/
    23340:
    /*!*************************************************************************!*\
      !*** ./src/app/views/addSystem/add-System/add-system-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddSystemRoutingModule": function AddSystemRoutingModule() {
          return (
            /* binding */
            _AddSystemRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../add-system-summary/add-system-summary.component */
      86312);
      /* harmony import */


      var _add_system_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-system.component */
      16496);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _add_system_component__WEBPACK_IMPORTED_MODULE_1__.AddSystemComponent
      }, {
        path: 'summary',
        component: _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_0__.AddSystemSummaryComponent
      }];

      var _AddSystemRoutingModule = /*#__PURE__*/_createClass(function _AddSystemRoutingModule() {
        _classCallCheck(this, _AddSystemRoutingModule);
      });

      _AddSystemRoutingModule.ɵfac = function AddSystemRoutingModule_Factory(t) {
        return new (t || _AddSystemRoutingModule)();
      };

      _AddSystemRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AddSystemRoutingModule
      });
      _AddSystemRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AddSystemRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    16496:
    /*!********************************************************************!*\
      !*** ./src/app/views/addSystem/add-System/add-system.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddSystemComponent": function AddSystemComponent() {
          return (
            /* binding */
            _AddSystemComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/add-system.service */
      91973);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-spinner */
      55314);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);

      function AddSystemComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_39_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " IP Address is not valid");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_4_div_39_div_1_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.basicInfoForm.get("sourceIp").errors.pattern);
        }
      }

      function AddSystemComponent_div_1_form_4_div_44_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " External Port must be at least 2 numbers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_4_div_44_div_1_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.basicInfoForm.get("sourcePort").hasError("minlength"));
        }
      }

      function AddSystemComponent_div_1_form_4_div_49_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " IP Address is not valid");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_4_div_49_div_1_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.basicInfoForm.get("medianIp").errors.pattern);
        }
      }

      function AddSystemComponent_div_1_form_4_div_54_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Median Port must be at least 2 numbers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_4_div_54_div_1_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.basicInfoForm.get("medianPort").hasError("minlength"));
        }
      }

      function AddSystemComponent_div_1_form_4_div_56_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_4_div_56_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r23.next("basicConfiguration");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r12.basicInfoForm.valid);
        }
      }

      function AddSystemComponent_div_1_form_4_div_57_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_4_div_57_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r25.onSubmitEditAddSystem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_58_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_4_div_58_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r27.onClickOfAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_59_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_4_div_59_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r29.onClickOfClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_60_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_4_div_60_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r31.onClickOfReopen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_61_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_4_div_61_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r33.OndeleteofUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "img", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Modification Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.respData.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 8, ctx_r18.respData.createdTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.respData.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.respData.approverId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 10, ctx_r18.respData.approvedTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.respData.approvedEver);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.respData.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.respData.versionNo);
        }
      }

      var _c0 = function _c0() {
        return ["/addSystem/summary"];
      };

      function AddSystemComponent_div_1_form_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "System Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "fieldset", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Code*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Name*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "select", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "server");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "client");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Messages Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "select", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Incoming ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Outgoing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "All");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "External Ip*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, AddSystemComponent_div_1_form_4_div_39_Template, 2, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "External Port*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, AddSystemComponent_div_1_form_4_div_44_Template, 2, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Median Ip*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, AddSystemComponent_div_1_form_4_div_49_Template, 2, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Median Port*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, AddSystemComponent_div_1_form_4_div_54_Template, 2, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, AddSystemComponent_div_1_form_4_div_56_Template, 3, 1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, AddSystemComponent_div_1_form_4_div_57_Template, 3, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, AddSystemComponent_div_1_form_4_div_58_Template, 3, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, AddSystemComponent_div_1_form_4_div_59_Template, 3, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, AddSystemComponent_div_1_form_4_div_60_Template, 3, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, AddSystemComponent_div_1_form_4_div_61_Template, 3, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, AddSystemComponent_div_1_form_4_div_65_Template, 100, 12, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.basicInfoForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.basicInfoForm.get("sourceIp").touched && !ctx_r2.basicInfoForm.get("sourceIp").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.basicInfoForm.get("sourcePort").touched && !ctx_r2.basicInfoForm.get("sourcePort").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.basicInfoForm.get("medianIp").touched && !ctx_r2.basicInfoForm.get("medianIp").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.basicInfoForm.get("medianPort").touched && !ctx_r2.basicInfoForm.get("medianPort").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.respData && !ctx_r2.editFlag && ctx_r2.respData.recordStatus == "OPEN");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.respData && !ctx_r2.editFlag && ctx_r2.respData.approvedStatus == "UNAUTHORIZED");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.respData && !ctx_r2.editFlag && ctx_r2.respData.recordStatus == "OPEN" && ctx_r2.respData.approvedEver == "YES");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.respData && !ctx_r2.editFlag && ctx_r2.respData.recordStatus == "CLOSED" && ctx_r2.respData.approvedEver == "YES");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.respData && ctx_r2.respData.approvedEver == "NO");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.respData);
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r48);
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_28_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r50 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r50);
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Type of Queue");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_5_div_1_div_28_option_4_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r39.queArray);
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Queue Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Queue Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connection Factory");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connection Channel");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Database");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connecting String");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "select", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_5_div_1_Template_select_change_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r51.onProtocalSlection($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "HTTPS/HTTP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "MDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "option", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "EJB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "option", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "DB Connection ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Data Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "select", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "option", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AddSystemComponent_div_1_form_5_div_1_option_27_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AddSystemComponent_div_1_form_5_div_1_div_28_Template, 5, 1, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, AddSystemComponent_div_1_form_5_div_1_div_29_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AddSystemComponent_div_1_form_5_div_1_div_30_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, AddSystemComponent_div_1_form_5_div_1_div_31_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, AddSystemComponent_div_1_form_5_div_1_div_32_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AddSystemComponent_div_1_form_5_div_1_div_33_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AddSystemComponent_div_1_form_5_div_1_div_34_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, AddSystemComponent_div_1_form_5_div_1_div_35_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, AddSystemComponent_div_1_form_5_div_1_div_36_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_5_div_1_Template_button_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r53.next("messageConfiguration");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "a", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_5_div_1_Template_a_click_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r54.previous("messageConfiguration");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "a", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r37 = ctx.index;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r35.messageType, " Message Configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r35.messageType, " MessageProtocol");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r35.dataType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r35.messageConfigurationForm.value.sysChannel[0].queueType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r35.messageConfigurationForm.value.sysChannel[0].queueType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r35.messageConfigurationForm.value.sysChannel[0].queueType === "IBM");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r35.messageConfigurationForm.value.sysChannel[0].queueType === "JMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r35.messageConfigurationForm.valid);
        }
      }

      function AddSystemComponent_div_1_form_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_5_div_1_Template, 47, 14, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r3.messageConfigurationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.messageConfigurationForm.get("sysChannel")["controls"]);
        }
      }

      function AddSystemComponent_div_1_form_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Folder Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_6_Template_a_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r56);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r55.previous("incomingMessageConfiguration");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Header and Service Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_div_7_Template_input_change_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r58);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r57.uploadFileXml($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_div_7_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r58);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r59.chooseFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.fileName);
        }
      }

      function AddSystemComponent_div_1_form_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Header and Service Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_8_div_3_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var header_r73 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", header_r73.headerTag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", header_r73.headerTag, " ");
        }
      }

      function AddSystemComponent_div_1_form_8_div_3_select_10_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mkey_r75 = ctx.$implicit;

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r74["try"](mkey_r75.fieldNo))("value", mkey_r75.fieldNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", mkey_r75.fieldNo, "<", mkey_r75.fieldName, " ");
        }
      }

      function AddSystemComponent_div_1_form_8_div_3_select_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_8_div_3_select_10_Template_select_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r78);

            var i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r76.onSelectingMessageBasis($event, i_r64);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_8_div_3_select_10_option_1_Template, 2, 4, "option", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r66.isoRespData);
        }
      }

      function AddSystemComponent_div_1_form_8_div_3_select_11_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mkey_r80 = ctx.$implicit;

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r79["try"](mkey_r80))("value", mkey_r80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", mkey_r80, " ");
        }
      }

      function AddSystemComponent_div_1_form_8_div_3_select_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_8_div_3_select_11_Template_select_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r83);

            var i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r81.onselectingTag($event, i_r64);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_8_div_3_select_11_option_1_Template, 2, 3, "option", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r67.xmlRespData);
        }
      }

      function AddSystemComponent_div_1_form_8_div_3_input_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 126);
        }
      }

      function AddSystemComponent_div_1_form_8_div_3_select_16_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r85 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", type_r85);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", type_r85, " ");
        }
      }

      function AddSystemComponent_div_1_form_8_div_3_select_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_8_div_3_select_16_option_1_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "dataType_", i_r64, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r69.typeDataIso);
        }
      }

      function AddSystemComponent_div_1_form_8_div_3_select_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "option", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "option", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Alpha Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "dataType_", i_r64, "");
        }
      }

      function AddSystemComponent_div_1_form_8_div_3_option_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r88 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", type_r88);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", type_r88, " ");
        }
      }

      function AddSystemComponent_div_1_form_8_div_3_a_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_8_div_3_a_31_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r91);

            var i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

            var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r89["delete"](i_r64);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_8_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Header");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "select", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_8_div_3_option_6_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AddSystemComponent_div_1_form_8_div_3_select_10_Template, 2, 1, "select", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AddSystemComponent_div_1_form_8_div_3_select_11_Template, 2, 1, "select", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AddSystemComponent_div_1_form_8_div_3_input_12_Template, 1, 0, "input", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Data Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AddSystemComponent_div_1_form_8_div_3_select_16_Template, 3, 2, "select", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AddSystemComponent_div_1_form_8_div_3_select_17_Template, 8, 1, "select", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Default Value");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Encryption Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "select", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, AddSystemComponent_div_1_form_8_div_3_option_26_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, AddSystemComponent_div_1_form_8_div_3_a_31_Template, 2, 0, "a", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r64 = ctx.index;

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r61.headerTagData);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r61.label2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP" || ctx_r61.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && !ctx_r61.fileUploadClick);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && ctx_r61.fileUploadClick);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" || ctx_r61.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r61.encryptionArray);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.submitFlag);
        }
      }

      function AddSystemComponent_div_1_form_8_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "fieldset", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddSystemComponent_div_1_form_8_div_2_Template, 3, 0, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_8_div_3_Template, 32, 10, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_8_Template_div_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r93);

            var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r92.addBioDocs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_8_a_6_Template, 3, 0, "a", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_8_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r93);

            var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r94.next("incomingMessageConfiguration");
          })("click", function AddSystemComponent_div_1_form_8_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r93);

            var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r95.submit2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Finish");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_8_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r93);

            var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r96.previous("incomingMessageConfiguration");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r6.tcpForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r6.submitFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.messageConfigurationForm.value.sysChannel[0].messageFormat !== "XML");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.tcpForm.get("sysService")["controls"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.submitFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r6.submitFlag || !ctx_r6.tcpForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r6.submitFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r6.submitFlag);
        }
      }

      function AddSystemComponent_div_1_form_9_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_li_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r104);

            var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r103.value("1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Incoming");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_li_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_li_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r106);

            var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r105.value("1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Incoming");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_li_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_li_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r108);

            var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r107.value("2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Outgoing");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_li_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_li_6_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r110);

            var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r109.value("2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Outgoing");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_9_div_1_Template_input_change_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r115);

            var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r114.uploadFileXml($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_div_1_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r115);

            var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r116.chooseFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " File Upload ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r111.fileName);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r130 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r130);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r130);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_28_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r132 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r132);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r132);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Type of Queue");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_28_option_4_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r121.queArray);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Queue Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Queue Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connection Factory");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connection Channel");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Database");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connecting String");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Incoming Message Configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Incoming Message Protocol");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "select", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_Template_select_change_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r134);

            var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r133.onProtocalSlection($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "HTTPS/HTTP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "MDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "option", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "EJB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "option", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "DB Connection ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Data Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "select", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "option", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_option_27_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_28_Template, 5, 1, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_29_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_30_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_31_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_32_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_33_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_34_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_35_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_36_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_Template_button_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r134);

            var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r135.next1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "a", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_Template_a_click_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r134);

            var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r136.previousAll("1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "a", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r119 = ctx.index;

          var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r119);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r117.dataType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r117.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r117.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r117.messageConfigurationForm.value.sysChannel[0].queueType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r117.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r117.messageConfigurationForm.value.sysChannel[0].queueType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r117.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r117.messageConfigurationForm.value.sysChannel[0].queueType === "IBM");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r117.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r117.messageConfigurationForm.value.sysChannel[0].queueType === "JMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r117.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r117.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r117.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r117.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r117.messageConfigurationForm.valid);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_Template, 47, 12, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r112.messageConfigurationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r112.messageConfigurationForm.get("sysChannel")["controls"]);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_1_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var header_r147 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", header_r147.headerTag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", header_r147.headerTag, " ");
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_1_select_10_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mkey_r149 = ctx.$implicit;

          var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r148["try"](mkey_r149.fieldNo))("value", mkey_r149.fieldNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", mkey_r149.fieldNo, "<", mkey_r149.fieldName, " ");
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_1_select_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_9_form_3_div_1_select_10_Template_select_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r152);

            var i_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

            var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r150.onSelectingMessageBasis($event, i_r139);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_9_form_3_div_1_select_10_option_1_Template, 2, 4, "option", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r141.isoRespData);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_1_select_11_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mkey_r154 = ctx.$implicit;

          var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r153["try"](mkey_r154))("value", mkey_r154);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", mkey_r154, " ");
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_1_select_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_9_form_3_div_1_select_11_Template_select_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r157);

            var i_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

            var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r155.onselectingTag($event, i_r139);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_9_form_3_div_1_select_11_option_1_Template, 2, 3, "option", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r142.xmlRespData);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_1_input_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 126);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_1_select_16_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r159 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", type_r159);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", type_r159, " ");
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_1_select_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_9_form_3_div_1_select_16_option_1_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

          var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "dataType_", i_r139, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r144.typeDataIso);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_1_select_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "option", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "option", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Alpha Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "dataType_", i_r139, "");
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_1_option_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r162 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", type_r162);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", type_r162, " ");
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Header");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "select", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_9_div_9_form_3_div_1_option_6_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AddSystemComponent_div_1_form_9_div_9_form_3_div_1_select_10_Template, 2, 1, "select", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AddSystemComponent_div_1_form_9_div_9_form_3_div_1_select_11_Template, 2, 1, "select", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AddSystemComponent_div_1_form_9_div_9_form_3_div_1_input_12_Template, 1, 0, "input", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Data Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AddSystemComponent_div_1_form_9_div_9_form_3_div_1_select_16_Template, 3, 2, "select", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AddSystemComponent_div_1_form_9_div_9_form_3_div_1_select_17_Template, 8, 1, "select", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Default Value");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Encryption Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "select", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, AddSystemComponent_div_1_form_9_div_9_form_3_div_1_option_26_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "a", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_form_3_div_1_Template_a_click_31_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r164);

            var i_r139 = restoredCtx.index;

            var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r163["delete"](i_r139);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r139 = ctx.index;

          var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r139);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r137.headerTagData);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r137.label2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r137.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP" || ctx_r137.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r137.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && !ctx_r137.fileUploadClick);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r137.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && ctx_r137.fileUploadClick);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r137.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r137.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" || ctx_r137.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r137.encryptionArray);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_9_form_3_div_1_Template, 33, 9, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_form_3_Template_div_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r166);

            var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r165.addBioDocs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_form_3_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r166);

            var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r167.allMethod();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_form_3_Template_a_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r166);

            var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r168.previousAll("2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r113.tcpForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r113.tcpForm.get("sysService")["controls"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r113.tcpForm.valid);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_9_div_1_Template, 9, 1, "div", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddSystemComponent_div_1_form_9_div_9_form_2_Template, 2, 2, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_div_9_form_3_Template, 17, 3, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r101.messageConfigurationForm.value.sysChannel[0].messageFormat == "XML" && ctx_r101.tab12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r101.basicInfoForm.value.messsageType === "A" && ctx_r101.tab11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r101.tab12);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_10_div_1_Template_input_change_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r173);

            var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r172.uploadFileXml1($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_div_1_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r173);

            var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r174.chooseFile1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " File Upload ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r169.fileName1);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r188 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r188);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r188);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_28_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r190 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r190);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r190);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Type of Queue");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_28_option_4_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r179.queArray);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Queue Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Queue Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connection Factory");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connection Channel");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Database");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connecting String");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Outgoing Message Configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Outgoing Message Protocol");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "select", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_Template_select_change_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r192);

            var ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r191.onProtocalSlection1($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "HTTPS/HTTP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "MDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "option", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "EJB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "option", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "DB Connection ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Data Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "select", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "option", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_option_27_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_28_Template, 5, 1, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_29_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_30_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_31_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_32_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_33_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_34_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_35_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_36_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_Template_button_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r192);

            var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r193.next2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "a", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_Template_a_click_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r192);

            var ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r194.previousAll("3");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "a", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r177 = ctx.index;

          var ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r177);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r175.dataType1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r175.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r175.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r175.messageConfigurationForm1.value.sysChannel[0].queueType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r175.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r175.messageConfigurationForm1.value.sysChannel[0].queueType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r175.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r175.messageConfigurationForm1.value.sysChannel[0].queueType === "IBM");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r175.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r175.messageConfigurationForm1.value.sysChannel[0].queueType === "JMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r175.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r175.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r175.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r175.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r175.messageConfigurationForm1.valid);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_Template, 47, 12, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r170.messageConfigurationForm1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r170.messageConfigurationForm1.get("sysChannel")["controls"]);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_2_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var header_r207 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", header_r207.headerTag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", header_r207.headerTag, " ");
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_2_select_10_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mkey_r209 = ctx.$implicit;

          var ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r208["try"](mkey_r209.fieldNo))("value", mkey_r209.fieldNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", mkey_r209.fieldNo, "<", mkey_r209.fieldName, " ");
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_2_select_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r212 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_10_form_3_div_2_select_10_Template_select_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r212);

            var i_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

            var ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r210.onSelectingMessageBasis1($event, i_r198);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_10_form_3_div_2_select_10_option_1_Template, 2, 4, "option", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r200.isoRespData1);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_2_select_11_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mkey_r214 = ctx.$implicit;

          var ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r213["try"](mkey_r214))("value", mkey_r214);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", mkey_r214, " ");
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_2_select_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r217 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_10_form_3_div_2_select_11_Template_select_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r217);

            var i_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

            var ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r215.onselectingTag1($event, i_r198);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_10_form_3_div_2_select_11_option_1_Template, 2, 3, "option", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r201.xmlRespData1);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_2_input_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 126);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_2_select_16_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r219 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", type_r219);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", type_r219, " ");
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_2_select_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_10_form_3_div_2_select_16_option_1_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

          var ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "dataType_", i_r198, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r203.typeDataIso1);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_2_select_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "option", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "option", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Alpha Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "dataType_", i_r198, "");
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_2_option_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r222 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", type_r222);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", type_r222, " ");
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_2_a_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_form_3_div_2_a_31_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r225);

            var i_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

            var ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r223.delete1(i_r198);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Header");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "select", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_9_div_10_form_3_div_2_option_6_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AddSystemComponent_div_1_form_9_div_10_form_3_div_2_select_10_Template, 2, 1, "select", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AddSystemComponent_div_1_form_9_div_10_form_3_div_2_select_11_Template, 2, 1, "select", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AddSystemComponent_div_1_form_9_div_10_form_3_div_2_input_12_Template, 1, 0, "input", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Data Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AddSystemComponent_div_1_form_9_div_10_form_3_div_2_select_16_Template, 3, 2, "select", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AddSystemComponent_div_1_form_9_div_10_form_3_div_2_select_17_Template, 8, 1, "select", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Default Value");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Encryption Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "select", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, AddSystemComponent_div_1_form_9_div_10_form_3_div_2_option_26_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, AddSystemComponent_div_1_form_9_div_10_form_3_div_2_a_31_Template, 2, 0, "a", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r198 = ctx.index;

          var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r198);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r195.headerTagData);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r195.label3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r195.messageConfigurationForm1.value.sysChannel[0].messageChannel === "TCP/IP" || ctx_r195.messageConfigurationForm1.value.sysChannel[0].messageFormat === "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r195.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML" && !ctx_r195.fileUploadClickAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r195.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML" && ctx_r195.fileUploadClickAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r195.messageConfigurationForm1.value.sysChannel[0].messageChannel === "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r195.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML" || ctx_r195.messageConfigurationForm1.value.sysChannel[0].messageFormat === "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r195.encryptionArray);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r195.submitFlagAll);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r227 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "fieldset", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddSystemComponent_div_1_form_9_div_10_form_3_div_2_Template, 32, 10, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_form_3_Template_div_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r227);

            var ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r226.addBioDocs1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AddSystemComponent_div_1_form_9_div_10_form_3_a_5_Template, 3, 0, "a", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_form_3_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r227);

            var ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r228.submitAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Finish");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_form_3_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r227);

            var ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r229.previousAll("4");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r171.tcpForm1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r171.submitFlagAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r171.tcpForm1.get("sysService")["controls"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r171.submitFlagAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r171.submitFlagAll || !ctx_r171.tcpForm1.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r171.submitFlagAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r171.submitFlagAll);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_10_div_1_Template, 9, 1, "div", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddSystemComponent_div_1_form_9_div_10_form_2_Template, 2, 2, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_div_10_form_3_Template, 16, 7, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r102.messageConfigurationForm1.value.sysChannel[0].messageFormat == "XML" && ctx_r102.tab22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r102.basicInfoForm.value.messsageType === "A" && ctx_r102.tab21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r102.tab22);
        }
      }

      function AddSystemComponent_div_1_form_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ul", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_li_3_Template, 3, 0, "li", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_9_li_4_Template, 3, 0, "li", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AddSystemComponent_div_1_form_9_li_5_Template, 3, 0, "li", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_9_li_6_Template, 3, 0, "li", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AddSystemComponent_div_1_form_9_div_9_Template, 4, 3, "div", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AddSystemComponent_div_1_form_9_div_10_Template, 4, 3, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.tab1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r7.tab1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r7.tab2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.tab2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.tab1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.tab2);
        }
      }

      function AddSystemComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Add System");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_4_Template, 66, 21, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AddSystemComponent_div_1_form_5_Template, 2, 2, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_6_Template, 15, 0, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AddSystemComponent_div_1_div_7_Template, 14, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AddSystemComponent_div_1_form_8_Template, 17, 8, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AddSystemComponent_div_1_form_9_Template, 11, 6, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.basicConfiguration);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.messageConfiguration && ctx_r1.basicInfoForm.value.messsageType !== "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.mdb && ctx_r1.basicInfoForm.value.messsageType !== "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.messageConfigurationForm.value.sysChannel[0].messageFormat == "XML" && ctx_r1.incomingMessageConfiguration === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.incomingMessageConfiguration);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.basicInfoForm.value.messsageType == "A" && ctx_r1.all === true);
        }
      }

      var _AddSystemComponent = /*#__PURE__*/function () {
        function _AddSystemComponent(fb, addSystem, toastService, spinner) {
          _classCallCheck(this, _AddSystemComponent);

          this.fb = fb;
          this.addSystem = addSystem;
          this.toastService = toastService;
          this.spinner = spinner;
          this.basicConfiguration = true;
          this.isoRespData = [];
          this.messageBasisIso = [];
          this.headerTagData = [];
          this.encryptionArray = [];
          this.xmlRespData = [];
          this.result = [];
          this.tab1 = true;
          this.array = [];
          this.arrayMessageConfig = [];
          this.submitFlag = true;
          this.submitFlagAll = true;
          this.loading = true;
          this.tempArrayList = [];
          this.editFlag = true;
          this.fileUploadClick = false;
          this.fileUploadClickAll = false;
          this.tab11 = true;
        }

        _createClass(_AddSystemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.currentUser = localStorage.getItem("userFromLogin");
            this.tempArrayList = [];
            this.fetchingHeadertag();
            this.messsageTypeArray = ["I", "O", "A"];
            this.queArray = ["IBM", "JMS"];
            this.encryptionArray = ["No Encryption", "BASE 64", "SHA264", "SHA512"];
            this.serviceTypeArray = ["server", "client"];
            this.protocolArray = ["TCP/IP", "HTTPS/HTTP", "MDB", "EJB", "DB Connection"];
            this.buildForm(null);
            this.tcpForm = this.fb.group({
              sysService: this.fb.array([this.createSysService()])
            });
            this.tcpForm1 = this.fb.group({
              sysService: this.fb.array([this.createSysService1()])
            });
            this.messageConfigurationForm1 = this.fb.group({
              sysChannel: this.fb.array([this.createSysChannel1()])
            });
            this.messageConfigurationForm = this.fb.group({
              sysChannel: this.fb.array([this.createSysChannel()])
            });
            this.addSystem.getIndex().subscribe(function (resp) {
              if (resp.index) {
                _this.index = resp.index;

                _this.addSystem.fecthingAddSystem().subscribe(function (dataresp) {
                  if (dataresp) {
                    _this.getRespBasedOnId(dataresp, resp.index);
                  }
                });
              } else {
                _this.loading = false;
              }
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm(item) {
            this.basicInfoForm = this.fb.group({
              systemId: [item ? item.systemId : ""],
              systemCode: [item ? item.systemCode : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              systemName: [item ? item.systemName : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              serviceType: [item ? item.serviceType : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              messsageType: [item ? item.messsageType : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              medianIp: [item ? item.medianIp : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              medianPort: [item ? item.medianPort : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
              sourceIp: [item ? item.sourceIp : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$")]],
              sourcePort: [item ? item.sourcePort : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]]
            });
          }
        }, {
          key: "getRespBasedOnId",
          value: function getRespBasedOnId(resp, arg0) {
            var _this2 = this;

            this.fileUploadClick = true;
            this.respData = resp.find(function (item) {
              return item.systemId == arg0;
            });
            this.loading = false; //messageConfiguration

            this.editFlag = false;
            this.arrayMessageConfig = this.respData.sysChannel;
            this.arrayMessageConfig = this.respData.sysChannel;

            if (this.respData.messsageType == 'A') {
              this.arrayMessageConfig = this.arrayMessageConfig.filter(function (item) {
                return item.messageType == "I" || item.messageType == "O";
              });
            }

            if (this.respData.messsageType === 'A') {
              this.fileUploadClickAll = true;
              this.arrayMessageConfig = this.arrayMessageConfig.filter(function (item) {
                return item.messageType == "I";
              });
            }

            this.onProtocalSlection(this.arrayMessageConfig[0].messageChannel);

            if (this.arrayMessageConfig[0].messageChannel === "TCP/IP" || this.arrayMessageConfig[0].messageFormat === "JSON") {
              this.fetchingIso();
              this.label2 = 'Field No';
            }

            if (this.arrayMessageConfig[0].messageChannel.messageFormat === "XML") {
              this.fetchingXMl();
              this.label2 = 'Tag';
            }

            while (this.formArrMessageConfig.length > 0) {
              this.formArrMessageConfig.removeAt(this.formArrMessageConfig.length - 1);
            }

            this.arrayMessageConfig.forEach(function (x) {
              _this2.formArrMessageConfig.push(_this2.fb.group(x));
            }); //tcForm

            this.array = this.arrayMessageConfig[0].sysService;
            this.onProtocalSlection(this.arrayMessageConfig[0].messageChannel);

            while (this.formArr.length > 0) {
              this.formArr.removeAt(this.formArr.length - 1);
            }

            this.array.forEach(function (x) {
              _this2.formArr.push(_this2.fb.group(x));
            });

            if (this.respData.sysChannel.length > 1) {
              this.arrayMessageConfig1 = this.respData.sysChannel;
              this.arrayMessageConfig1 = this.arrayMessageConfig1.filter(function (item) {
                return item.messageType == "O";
              });
              this.onProtocalSlection1(this.arrayMessageConfig1[0].messageChannel);

              while (this.formArrMessageConfig1.length > 0) {
                this.formArrMessageConfig1.removeAt(this.formArrMessageConfig1.length - 1);
              }

              this.arrayMessageConfig1.forEach(function (x) {
                _this2.formArrMessageConfig1.push(_this2.fb.group(x));
              }); //tcForm1

              this.array1 = this.arrayMessageConfig1[0].sysService;
              this.onProtocalSlection1(this.arrayMessageConfig1[0].messageChannel);

              while (this.formArr1.length > 0) {
                this.formArr1.removeAt(this.formArr1.length - 1);
              }

              this.array1.forEach(function (x) {
                _this2.formArr1.push(_this2.fb.group(x));
              });
            }

            this.buildForm(this.respData);
            this.auditLog();
            this.spinner.hide();
          }
        }, {
          key: "formArr",
          get: function get() {
            return this.tcpForm.get('sysService');
          }
        }, {
          key: "formArr1",
          get: function get() {
            return this.tcpForm1.get('sysService');
          }
        }, {
          key: "formArrMessageConfig",
          get: function get() {
            return this.messageConfigurationForm.get('sysChannel');
          }
        }, {
          key: "formArrMessageConfig1",
          get: function get() {
            return this.messageConfigurationForm1.get('sysChannel');
          }
        }, {
          key: "createSysChannel",
          value: function createSysChannel() {
            return this.fb.group({
              channelId: [""],
              dbConnectString: [""],
              dbPassword: [""],
              dbServiceName: [""],
              dbUsername: [""],
              queueChannel: [""],
              queueConnFactory: [""],
              queueManager: [""],
              queueName: [""],
              queueType: [""],
              messageChannel: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              messageFormat: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              messageType: [""]
            });
          }
        }, {
          key: "createSysChannel1",
          value: function createSysChannel1() {
            return this.fb.group({
              channelId: [""],
              dbConnectString: [""],
              dbPassword: [""],
              dbServiceName: [""],
              dbUsername: [""],
              queueChannel: [""],
              queueConnFactory: [""],
              queueManager: [""],
              queueName: [""],
              queueType: [""],
              messageChannel: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              messageFormat: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              messageType: [""]
            });
          }
        }, {
          key: "createSysService",
          value: function createSysService() {
            return this.fb.group({
              channelId: [""],
              dataType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              encryption: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              headerTag: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              headerValue: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              messageBasis: [""],
              messageKey: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              serviceId: [""],
              systemChannelId: [""]
            });
          }
        }, {
          key: "createSysService1",
          value: function createSysService1() {
            return this.fb.group({
              channelId: [""],
              dataType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              encryption: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              headerTag: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              headerValue: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              messageBasis: [""],
              messageKey: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              serviceId: [""],
              systemChannelId: [""]
            });
          }
        }, {
          key: "allMethod",
          value: function allMethod() {
            this.tab1 = false;
            this.tab2 = true;
            this.tab21 = true;
            this.tab22 = false;
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.respData.approvedStatus === 'U') {
              this.respData.approvedStatus = 'UNAUTHORIZED';
            }

            if (this.respData.approvedStatus === 'A') {
              this.respData.approvedStatus = 'AUTHORIZED';
            }

            if (this.respData.recordStatus === 'O') {
              this.respData.recordStatus = 'OPEN';
            }

            if (this.respData.recordStatus === 'C') {
              this.respData.recordStatus = 'CLOSED';
            }

            if (this.respData.approvedEver === 'N') {
              this.respData.approvedEver = 'NO';
            }

            if (this.respData.approvedEver === 'Y') {
              this.respData.approvedEver = 'YES';
            }
          }
        }, {
          key: "next",
          value: function next(value) {
            var _this3 = this;

            if (value === "basicConfiguration") {
              console.log(this.index);
              this.addSystem.validateCode(this.basicInfoForm.value.systemCode).subscribe(function (result) {
                console.log(result);
                _this3.isSysCodeAlreadyExist = result.exists;
                _this3.sysCodeError = result.response;

                if (_this3.isSysCodeAlreadyExist === true && _this3.index === undefined) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: _this3.sysCodeError + ' !',
                    icon: 'error'
                  });
                  return;
                } else {
                  if (_this3.basicInfoForm.value.messsageType == 'I') {
                    _this3.messageType = "Incoming";
                  }

                  if (_this3.basicInfoForm.value.messsageType == 'O') {
                    _this3.messageType = "Outgoing";
                  }

                  _this3.basicConfiguration = false;
                  _this3.messageConfiguration = true;
                  _this3.incomingMessageConfiguration = false;
                  _this3.xml = false;
                  _this3.mdbXml = false;
                  _this3.incomingMdbXml = false;
                  _this3.dbConnection = false;
                }
              });
            }

            if (value === "messageConfiguration" && this.basicInfoForm.value.messsageType !== 'A') {
              if ((this.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML") && this.basicInfoForm.value.messsageType != 'A') {
                this.messageConfigurationForm.value.sysChannel[0].messageType = this.basicInfoForm.value.messsageType;
                this.basicConfiguration = false;
                this.messageConfiguration = false;
                this.incomingMessageConfiguration = true;
                this.xml = false;
                this.mdb = false;
                this.mdbXml = false;
                this.incomingMdbXml = false;
                this.dbConnection = false;

                if (this.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON") {
                  this.fetchingIso();
                  this.label2 = 'Field No';
                }

                if (this.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML") {
                  this.fetchingXMl();
                  this.label2 = 'Tag';
                }
              }

              if ((this.messageConfigurationForm.value.sysChannel[0].messageFormat === "FLATFILE" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "CSV/EXCEL") && this.basicInfoForm.value.messsageType != 'A') {
                this.messageConfigurationForm.value.sysChannel[0].messageType = this.basicInfoForm.value.messsageType;
                this.basicConfiguration = false;
                this.messageConfiguration = false;
                this.incomingMessageConfiguration = false;
                this.xml = false;
                this.mdb = true;
                this.mdbXml = false;
                this.incomingMdbXml = false;
                this.dbConnection = false;
              }
            }

            if (value === "basicConfiguration" && this.basicInfoForm.value.messsageType === 'A') {
              this.all = true;
              this.tab1 = true;
              this.tab11 = true;
              this.tab12 = false;
              this.tab2 = false;
            }
          }
        }, {
          key: "next1",
          value: function next1() {
            if (this.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON") {
              this.fetchingIso();
              this.label2 = 'Field No';
            }

            if (this.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML") {
              this.fetchingXMl();
              this.label2 = 'Tag';
            }

            this.tab1 = true;
            this.tab11 = false;
            this.tab12 = true;
            this.tab2 = false;
          }
        }, {
          key: "next2",
          value: function next2() {
            if (this.messageConfigurationForm1.value.sysChannel[0].messageChannel === "TCP/IP" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON") {
              this.fetchingIso1();
              this.label3 = 'Field No';
            }

            if (this.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML") {
              this.fetchingXMl1();
              this.label3 = 'Tag';
            }

            this.tab1 = false;
            this.tab2 = true;
            this.tab21 = false;
            this.tab22 = true;
          }
        }, {
          key: "onClickOfAuth",
          value: function onClickOfAuth() {
            var _this4 = this;

            if (this.currentUser === this.respData.creatorId) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                text: 'Maker Cannot Authorize Record!',
                icon: 'error'
              });
              return;
            }

            var obj_test = {};

            if (this.basicInfoForm.value.messsageType === "I" || this.basicInfoForm.value.messsageType === "O") {
              obj_test = this.basicInfoForm.value;
              obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;

              for (var index = 0; index < obj_test.sysChannel.length; index++) {
                obj_test.sysChannel[index].sysService = this.tcpForm.value.sysService;
              }
            } //submitAll


            if (this.basicInfoForm.value.messsageType === "A") {
              obj_test = this.basicInfoForm.value;
              obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
              this.messageConfigurationForm.value.sysChannel[0].messageType = "I";
              this.messageConfigurationForm1.value.sysChannel[0].messageType = "O";
              obj_test.sysChannel.push(this.messageConfigurationForm1.value.sysChannel[0]);
              obj_test.sysChannel[0].sysService = this.tcpForm.value.sysService;
              obj_test.sysChannel[1].sysService = this.tcpForm1.value.sysService;
            }

            this.addSystem.editaddsystem("auth", this.currentUser, obj_test).subscribe(function (response) {
              if (response) {
                _this4.respData = response;

                _this4.auditLog();

                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Data Authorized Successfully!'
                });
              }
            });
          }
        }, {
          key: "onClickOfClose",
          value: function onClickOfClose() {
            var _this5 = this;

            var obj_test = {};

            if (this.basicInfoForm.value.messsageType === "I" || this.basicInfoForm.value.messsageType === "O") {
              obj_test = this.basicInfoForm.value;
              obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;

              for (var index = 0; index < obj_test.sysChannel.length; index++) {
                obj_test.sysChannel[index].sysService = this.tcpForm.value.sysService;
              }
            } //submitAll


            if (this.basicInfoForm.value.messsageType === "A") {
              obj_test = this.basicInfoForm.value;
              obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
              this.messageConfigurationForm.value.sysChannel[0].messageType = "I";
              this.messageConfigurationForm1.value.sysChannel[0].messageType = "O";
              obj_test.sysChannel.push(this.messageConfigurationForm1.value.sysChannel[0]);
              obj_test.sysChannel[0].sysService = this.tcpForm.value.sysService;
              obj_test.sysChannel[1].sysService = this.tcpForm1.value.sysService;
            }

            this.addSystem.editaddsystem("close", this.currentUser, obj_test).subscribe(function (response) {
              if (response) {
                _this5.respData = response;

                _this5.auditLog();

                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Data closed Successfully!'
                });
              }
            });
          }
        }, {
          key: "onClickOfReopen",
          value: function onClickOfReopen() {
            var _this6 = this;

            //submit2
            var obj_test = {};

            if (this.basicInfoForm.value.messsageType === "I" || this.basicInfoForm.value.messsageType === "O") {
              obj_test = this.basicInfoForm.value;
              obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;

              for (var index = 0; index < obj_test.sysChannel.length; index++) {
                obj_test.sysChannel[index].sysService = this.tcpForm.value.sysService;
              }
            } //submitAll


            if (this.basicInfoForm.value.messsageType === "A") {
              obj_test = this.basicInfoForm.value;
              obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
              this.messageConfigurationForm.value.sysChannel[0].messageType = "I";
              this.messageConfigurationForm1.value.sysChannel[0].messageType = "O";
              obj_test.sysChannel.push(this.messageConfigurationForm1.value.sysChannel[0]);
              obj_test.sysChannel[0].sysService = this.tcpForm.value.sysService;
              obj_test.sysChannel[1].sysService = this.tcpForm1.value.sysService;
            }

            this.addSystem.editaddsystem("open", this.currentUser, obj_test).subscribe(function (response) {
              if (response) {
                _this6.respData = response;

                _this6.auditLog();

                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Data opened Successfully!'
                });
              }
            });
          }
        }, {
          key: "OndeleteofUser",
          value: function OndeleteofUser() {
            this.addSystem.deleteAddSystem(this.currentUser, this.respData.systemId).subscribe(function (response) {
              if (response) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Data deleted Successfully!'
                });
              }
            });
          }
        }, {
          key: "previousAll",
          value: function previousAll(value) {
            if (value === '1') {
              this.basicConfiguration = true;
              this.messageConfiguration = false;
              this.incomingMessageConfiguration = false;
              this.xml = false;
              this.mdbXml = false;
              this.incomingMdbXml = false;
              this.dbConnection = false;
              this.tab1 = false;
              this.tab2 = false;
              this.all = false;
            }

            if (value === '2') {
              this.basicConfiguration = false;
              this.messageConfiguration = false;
              this.incomingMessageConfiguration = false;
              this.xml = false;
              this.mdbXml = false;
              this.incomingMdbXml = false;
              this.dbConnection = false;
              this.tab1 = true;
              this.tab11 = true;
              this.tab12 = false;
              this.tab2 = false;
            }

            if (value === '3') {
              this.basicConfiguration = false;
              this.messageConfiguration = false;
              this.incomingMessageConfiguration = false;
              this.xml = false;
              this.mdbXml = false;
              this.incomingMdbXml = false;
              this.dbConnection = false;
              this.tab1 = true;
              this.tab11 = false;
              this.tab12 = true;
              this.tab2 = false;
            }

            if (value === '4') {
              this.basicConfiguration = false;
              this.messageConfiguration = false;
              this.incomingMessageConfiguration = false;
              this.xml = false;
              this.mdbXml = false;
              this.incomingMdbXml = false;
              this.dbConnection = false;
              this.tab1 = false;
              this.tab2 = true;
              this.tab21 = true;
              this.tab22 = false;
            }
          }
        }, {
          key: "previous",
          value: function previous(value) {
            if (value === "messageConfiguration") {
              this.basicConfiguration = true;
              this.messageConfiguration = false;
              this.incomingMessageConfiguration = false;
              this.xml = false;
              this.mdbXml = false;
              this.incomingMdbXml = false;
              this.dbConnection = false;
              this.all = false;
              this.mdb = false;
            }

            if (value === "incomingMessageConfiguration") {
              this.incomingMessageConfiguration = false;
              this.xml = false;
              this.basicConfiguration = false;
              this.messageConfiguration = true;
              this.mdbXml = false;
              this.incomingMdbXml = false;
              this.dbConnection = false;
              this.mdb = false;
            }
          }
        }, {
          key: "onProtocalSlection",
          value: function onProtocalSlection(event) {
            this.tempArrayList = []; // this.messageConfigurationForm.get('messageFormat').setValue("");
            //  this.messageConfigurationForm.get('sysChannel')['controls'][0].get('messageFormat').setValue("");

            if (event === "TCP/IP") {
              this.dataType = [];
              this.dataType = ["ISO 8583 1987", "ISO 8583 1993", "ISO 8583 2003"];
            } else if (event === "Https/Http") {
              this.dataType = [];
              this.dataType = ["XML", "JSON"];
            } else if (event === "EJB" || event === "DB Connection" || event === "MDB") {
              this.dataType = [];
              this.dataType = ["XML", "JSON", "CSV/EXCEL", "FLATFILE"];
            }
          }
        }, {
          key: "onProtocalSlection1",
          value: function onProtocalSlection1(event) {
            //this.messageConfigurationForm1.get('sysChannel')['controls'][0].get('messageFormat').setValue("");
            if (event === "TCP/IP") {
              this.dataType1 = [];
              this.dataType1 = ["ISO 8583 1987", "ISO 8583 1993", "ISO 8583 2003"];
            } else if (event === "Https/Http") {
              this.dataType1 = [];
              this.dataType1 = ["XML", "JSON"];
            } else if (event === "EJB" || event === "DB Connection" || event === "MDB") {
              this.dataType1 = [];
              this.dataType1 = ["XML", "JSON", "CSV/EXCEL", "FLATFILE"];
            }
          }
        }, {
          key: "addBioDocs",
          value: function addBioDocs() {
            this.sysService = this.tcpForm.get('sysService');
            this.sysService.push(this.createSysService());
          }
        }, {
          key: "addBioDocs1",
          value: function addBioDocs1() {
            this.sysService = this.tcpForm1.get('sysService');
            this.sysService.push(this.createSysService());
          }
        }, {
          key: "submit2",
          value: function submit2() {
            var _this7 = this;

            if (this.tcpForm.value.sysService.some(function (sysService) {
              return sysService['headerTag'] === 'OPERATION';
            }) && this.tcpForm.value.sysService.some(function (mdmtSystemService) {
              return mdmtSystemService['headerTag'] === 'SERVICE';
            })) {
              var obj_test = {};
              obj_test = this.basicInfoForm.value;
              obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;

              for (var index = 0; index < obj_test.sysChannel.length; index++) {
                obj_test.sysChannel[index].sysService = this.tcpForm.value.sysService;
              }

              if (this.index) {
                this.addSystem.editaddsystem("update", this.currentUser, obj_test).subscribe(function (addSysResp) {
                  if (addSysResp) {
                    _this7.submitFlag = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Data Updated Successfully!'
                    });
                  }
                });
              } else {
                this.addSystem.submittingAddSystem(obj_test, this.currentUser).subscribe(function (addSysResp) {
                  if (addSysResp) {
                    _this7.submitFlag = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Record saved successfully'
                    });
                  }
                });
              }
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                text: 'Header value OPERATION and SERVICE are mandatory !'
              });
            }
          }
        }, {
          key: "fetchingIso",
          value: function fetchingIso() {
            var _this8 = this;

            this.addSystem.fetchingIsoForTcp().subscribe(function (isoResp) {
              _this8.isoRespData = isoResp;

              if (isoResp) {
                _this8.messageBasisIso = isoResp.map(function (data) {
                  return data.fieldName;
                }); // for dropdown 1

                _this8.messageKeyIso = isoResp.map(function (data) {
                  return data.fieldNo;
                });
                _this8.typeDataIso = isoResp.map(function (data) {
                  return data.dataType;
                });
                _this8.headerValueIso = isoResp.map(function (data) {
                  return data.headerValue;
                });
              }
            });
          }
        }, {
          key: "fetchingIso1",
          value: function fetchingIso1() {
            var _this9 = this;

            this.addSystem.fetchingIsoForTcp().subscribe(function (isoResp) {
              _this9.isoRespData1 = isoResp;

              if (isoResp) {
                _this9.messageBasisIso1 = isoResp.map(function (data) {
                  return data.fieldName;
                }); // for dropdown 1

                _this9.messageKeyIso1 = isoResp.map(function (data) {
                  return data.fieldNo;
                });
                _this9.typeDataIso1 = isoResp.map(function (data) {
                  return data.dataType;
                });
                _this9.headerValueIso1 = isoResp.map(function (data) {
                  return data.headerValue;
                });
              }
            });
          }
        }, {
          key: "fetchingXMl",
          value: function fetchingXMl() {
            var _this10 = this;

            this.addSystem.gettinXMLmsgIncoming().subscribe(function (xmlResp) {
              _this10.xmlRespData = xmlResp;

              if (xmlResp) {
                _this10.messageBasisIso = xmlResp.map(function (data) {
                  return data.messageBasis;
                });
                _this10.messageKeyIso = xmlResp.map(function (data) {
                  return data.messageKey;
                });
                _this10.typeDataIso = xmlResp.map(function (data) {
                  return data.dataType;
                });
                _this10.headerValueIso = xmlResp.map(function (data) {
                  return data.headerValue;
                });
              }
            });
          }
        }, {
          key: "onSubmitEditAddSystem",
          value: function onSubmitEditAddSystem() {
            console.log("This is Edit Charge Maintenance");
            this.editFlag = true;
            console.log(this.editFlag);
          }
        }, {
          key: "fetchingXMl1",
          value: function fetchingXMl1() {
            var _this11 = this;

            this.addSystem.gettinXMLmsgIncoming().subscribe(function (xmlResp) {
              _this11.xmlRespData1 = xmlResp;

              if (xmlResp) {
                _this11.messageBasisIso = xmlResp.map(function (data) {
                  return data.messageBasis;
                });
                _this11.messageKeyIso = xmlResp.map(function (data) {
                  return data.messageKey;
                });
                _this11.typeDataIso = xmlResp.map(function (data) {
                  return data.dataType;
                });
                _this11.headerValueIso = xmlResp.map(function (data) {
                  return data.headerValue;
                });
              }
            });
          }
        }, {
          key: "onSelectingMessageBasis",
          value: function onSelectingMessageBasis(event, i) {
            if (this.tempArrayList[i]) {
              this.tempArrayList[i] = event.target.value;
            } else {
              this.tempArrayList.push(event.target.value);
            }

            var x = this.isoRespData.find(function (item) {
              return item.fieldNo == event.target.value;
            });
            this.tcpForm.get('sysService')['controls'][i].get('messageBasis').setValue(x.fieldName);
            this.tcpForm.get('sysService')['controls'][i].get('dataType').setValue(x.dataType);
          }
        }, {
          key: "onSelectingMessageBasis1",
          value: function onSelectingMessageBasis1(event, i) {
            if (this.tempArrayList[i]) {
              this.tempArrayList[i] = event.target.value;
            } else {
              this.tempArrayList.push(event.target.value);
            }

            var x = this.isoRespData1.find(function (item) {
              return item.fieldNo == event.target.value;
            });
            this.tcpForm1.get('sysService')['controls'][i].get('messageBasis').setValue(x.fieldName);
            this.tcpForm1.get('sysService')['controls'][i].get('dataType').setValue(x.dataType);
          }
        }, {
          key: "try",
          value: function _try(value) {
            if (this.tempArrayList.find(function (item) {
              return item == value;
            })) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "fetchingHeadertag",
          value: function fetchingHeadertag() {
            var _this12 = this;

            this.addSystem.fetchingHeaderTag().subscribe(function (resp) {
              _this12.headerTagData = resp;
            });
          }
        }, {
          key: "chooseFile",
          value: function chooseFile() {
            document.getElementById('chFile').click();
          }
        }, {
          key: "chooseFile1",
          value: function chooseFile1() {
            document.getElementById('chFile1').click();
          }
        }, {
          key: "uploadFileXml",
          value: function uploadFileXml(event) {
            var _this13 = this;

            this.selectedFiles = event.target.files;
            this.sizeOfFile = this.selectedFiles.item(0).size;
            this.currentFileUpload = this.selectedFiles.item(0);
            this.fileName = this.currentFileUpload.name;
            this.addSystem.gettingHederofXMl(this.currentFileUpload).subscribe(function (xmlResp) {
              if (xmlResp) {
                _this13.uploadXmlResp = xmlResp;
                _this13.messageBasisIso = xmlResp.nodeTagList;
                _this13.xmlRespData = xmlResp.nodeTagList;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'File Uploaded Successfully'
                });
                _this13.fileUploadClick = false;
              }
            });
          }
        }, {
          key: "uploadFileXml1",
          value: function uploadFileXml1(event) {
            var _this14 = this;

            this.selectedFiles1 = event.target.files;
            this.sizeOfFile1 = this.selectedFiles1.item(0).size;
            this.currentFileUpload1 = this.selectedFiles1.item(0);
            this.fileName1 = this.currentFileUpload1.name;
            this.addSystem.gettingHederofXMl(this.currentFileUpload1).subscribe(function (xmlResp) {
              if (xmlResp) {
                _this14.uploadXmlResp1 = xmlResp;
                _this14.messageBasisIso1 = xmlResp.nodeTagList;
                _this14.xmlRespData1 = xmlResp.nodeTagList;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'File Uploaded Successfully'
                });
                _this14.fileUploadClickAll = false;
              }
            });
          }
        }, {
          key: "onselectingTag",
          value: function onselectingTag(event, i) {
            var _this15 = this;

            if (this.tempArrayList[i]) {
              this.tempArrayList[i] = event.target.value;
            } else {
              this.tempArrayList.push(event.target.value);
            }

            var result = Object.keys(this.uploadXmlResp.nodeValueMap).map(function (key) {
              return [key, _this15.uploadXmlResp.nodeValueMap[key]];
            });
            var x = result.find(function (item) {
              return item[0] == event.target.value;
            });
            this.tcpForm.get('sysService')['controls'][i].get('headerValue').setValue(x[1]);
          }
        }, {
          key: "onselectingTag1",
          value: function onselectingTag1(event, i) {
            var _this16 = this;

            if (this.tempArrayList[i]) {
              this.tempArrayList[i] = event.target.value;
            } else {
              this.tempArrayList.push(event.target.value);
            }

            var result = Object.keys(this.uploadXmlResp1.nodeValueMap).map(function (key) {
              return [key, _this16.uploadXmlResp1.nodeValueMap[key]];
            });
            var x = result.find(function (item) {
              return item[0] == event.target.value;
            });
            this.tcpForm1.get('sysService')['controls'][i].get('headerValue').setValue(x[1]);
          }
        }, {
          key: "uploadFileXmlOut",
          value: function uploadFileXmlOut(event) {
            var _this17 = this;

            this.selectedFiles = event.target.files;
            this.sizeOfFile = this.selectedFiles.item(0).size;
            this.currentFileUpload = this.selectedFiles.item(0);
            this.fileNameOut = this.currentFileUpload.name;
            this.addSystem.gettingHederofXMl(this.currentFileUpload).subscribe(function (xmlResp) {
              if (xmlResp) {
                _this17.uploadXmlResp = xmlResp;
                _this17.messageBasisIso = xmlResp.nodeTagList;
              }
            }, function (err) {});
          }
        }, {
          key: "submitAll",
          value: function submitAll() {
            var _this18 = this;

            if (this.tcpForm.value.sysService.some(function (sysService) {
              return sysService['headerTag'] === 'OPERATION';
            }) && this.tcpForm.value.sysService.some(function (mdmtSystemService) {
              return mdmtSystemService['headerTag'] === 'SERVICE';
            }) && this.tcpForm1.value.sysService.some(function (sysService) {
              return sysService['headerTag'] === 'OPERATION';
            }) && this.tcpForm1.value.sysService.some(function (mdmtSystemService) {
              return mdmtSystemService['headerTag'] === 'SERVICE';
            })) {
              var obj_test = {};
              obj_test = this.basicInfoForm.value;
              obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
              this.messageConfigurationForm.value.sysChannel[0].messageType = "I";
              this.messageConfigurationForm1.value.sysChannel[0].messageType = "O";
              obj_test.sysChannel.push(this.messageConfigurationForm1.value.sysChannel[0]);
              obj_test.sysChannel[0].sysService = this.tcpForm.value.sysService;
              obj_test.sysChannel[1].sysService = this.tcpForm1.value.sysService;
              console.log("obj_test ", obj_test);
              this.addSystem.submittingAddSystem(obj_test, this.currentUser).subscribe(function (addSysResp) {
                if (addSysResp) {
                  _this18.submitFlagAll = false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Data Saved Successfully!.'
                  });
                }
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                text: 'Header value OPERATION and SERVICE are mandatory !'
              });
            }
          }
        }, {
          key: "delete",
          value: function _delete(index) {
            var deleteRecord = this.tcpForm.get('sysService');
            deleteRecord.removeAt(index);
          }
        }, {
          key: "delete1",
          value: function delete1(index) {
            var deleteRecord1 = this.tcpForm1.get('sysService');
            deleteRecord1.removeAt(index);
          }
        }, {
          key: "value",
          value: function value(val) {
            console.log(val);

            if (val === '1') {
              this.tab1 = true;
              this.tab2 = false;
              this.tab11 = true;
              this.tab12 = false;
            }

            if (val === '2') {
              this.tab1 = false;
              this.tab2 = true;
              this.tab21 = true;
              this.tab22 = false;
            }
          }
        }]);

        return _AddSystemComponent;
      }();

      _AddSystemComponent.ɵfac = function AddSystemComponent_Factory(t) {
        return new (t || _AddSystemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_1__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService));
      };

      _AddSystemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AddSystemComponent,
        selectors: [["npr-add-system"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], ["class", "pageContentMain", 4, "ngIf"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], [1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", "class", "formStyle", 3, "formGroup", 4, "ngIf"], ["action", "", "class", "formStyle", 4, "ngIf"], ["fxLayout", "row wrap", "class", "file", 4, "ngIf"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "titleStyle", "mt-2", "mb-4"], [3, "disabled"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "codeLbl", 1, "formLbl"], ["id", "codeLbl", "type", "text", "formControlName", "systemCode", "value", "", 1, "form-control", 3, "readonly"], ["for", "name", 1, "formLbl"], ["id", "name", "type", "text", "formControlName", "systemName", "value", "", 1, "form-control", 3, "readonly"], ["formControlName", "serviceType", "aria-label", "Default select example", 1, "form-select"], ["value", "server"], ["value", "client"], ["formControlName", "messsageType", "aria-label", "Default select example", 1, "form-select"], ["value", "null"], ["value", "I"], ["value", "O"], ["value", "A"], ["for", "externalIp", 1, "formLbl"], ["id", "externalIp", "pattern", "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$", "formControlName", "sourceIp", "type", "text", "value", "", 1, "form-control", 3, "readonly"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "externalPort", 1, "formLbl"], ["id", "externalPort", "type", "number", "maxlength", "4", "minlength", "2", "formControlName", "sourcePort", "type", "text", "value", "", 1, "form-control", 3, "readonly"], ["for", "medianIp", 1, "formLbl"], ["id", "medianIp", "formControlName", "medianIp", "type", "text", "value", "", "pattern", "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$", 1, "form-control", 3, "readonly"], ["for", "medianPort", 1, "formLbl"], ["id", "medianPort", "type", "number", "maxlength", "4", "minlength", "2", "formControlName", "medianPort", "type", "text", "value", "", 1, "form-control", 3, "readonly"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], ["href", "javascript:void(0);", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle", 4, "ngIf"], [1, "invalid-feedback"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."], ["class", "dbCardStyle", "formArrayName", "sysChannel", 4, "ngFor", "ngForOf"], ["formArrayName", "sysChannel", 1, "dbCardStyle"], [1, "pageTitle1"], [1, "row", "gy-4", 3, "formGroupName"], ["formControlName", "messageChannel", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", " "], ["value", "TCP/IP"], ["value", "Https/Http"], ["value", "MDB"], ["value", "EJB"], ["value", "DB Connection"], ["formControlName", "messageFormat", "aria-label", "Default select example", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-lg-4", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnDarkGrey", 3, "click"], ["href", "role-new.html", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], [3, "value"], ["formControlName", "queueType", "aria-label", "Default select example", 1, "form-select"], ["id", "queueManager", "type", "text", "formControlName", "queueManager", "placeholder", "Queue manager", "value", "", 1, "form-control"], ["id", "queueName", "type", "text", "formControlName", "queueName", "placeholder", "Queue Name", "value", "", 1, "form-control"], ["id", "connectFactory", "type", "text", "formControlName", "queueConnFactory", "placeholder", "Connectiong Factory", "value", "", 1, "form-control"], ["id", "queChannel", "type", "text", "formControlName", "queueChannel", "placeholder", "Queue Channel", "value", "", 1, "form-control"], ["id", "userName", "type", "text", "placeholder", "User Name", "value", "", 1, "form-control"], ["id", "password", "type", "password", "placeholder", "Password", "value", "", 1, "form-control"], ["id", "databaseName", "type", "text", "placeholder", "Database Name", "value", "", 1, "form-control"], ["id", "connectString", "type", "text", "placeholder", "Connecting String", "value", "", 1, "form-control"], ["action", "", 1, "formStyle"], ["type", "text", "value", "", 1, "form-control"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary"], ["fxLayout", "row wrap", 1, "file"], ["fxFlex", "100", 1, "width"], ["fxFlex", "60"], [1, "fileUpload"], [1, "formS"], ["data-text", "File Upload", 1, "file-upload-wrapper"], ["name", "file-upload-field", "type", "file", "value", "", 1, "file-upload-field", 3, "change"], ["mat-raised-button", "", "type", "button", 1, "btnFile", 3, "click"], [1, "fa", "fa-upload"], [1, "flex"], ["class", "pageTitleCol", 4, "ngIf"], ["class", "dbCardStyle", "formArrayName", "sysService", 4, "ngFor", "ngForOf"], [1, "row", "g-3", "pt-4"], [1, "col-auto", 3, "click"], ["href", "javascript:void(0)", "class", "addIcon primarybg", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnDarkGrey", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "disabled"], ["formArrayName", "sysService", 1, "dbCardStyle"], ["formControlName", "headerTag", "aria-label", "Default select example", 1, "form-select"], ["class", "form-select", "formControlName", "messageKey", "aria-label", "Default select example", 3, "change", 4, "ngIf"], ["id", "externalIp", "formControlName", "messageKey", "type", "text", "class", "form-control", "value", "", "readonly", "", 4, "ngIf"], ["class", "form-select", "formControlName", "dataType", "aria-label", "Default select example", 3, "name", 4, "ngIf"], ["id", "externalIp", "formControlName", "headerValue", "type", "text", "value", "", 1, "form-control"], ["formControlName", "encryption", "aria-label", "Default select example", 1, "form-select"], [1, "col-lg-4", "marginTop"], ["href", "javascript:void(0);", "class", "deleteIcon2", 3, "click", 4, "ngIf"], ["formControlName", "messageKey", "aria-label", "Default select example", 1, "form-select", 3, "change"], [3, "hidden", "value", 4, "ngFor", "ngForOf"], [3, "hidden", "value"], ["id", "externalIp", "formControlName", "messageKey", "type", "text", "value", "", "readonly", "", 1, "form-control"], ["formControlName", "dataType", "aria-label", "Default select example", 1, "form-select", 3, "name"], ["value", "numeric"], ["value", "alphaNumeric"], ["value", "date"], ["href", "javascript:void(0);", 1, "deleteIcon2", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], ["href", "javascript:void(0)", 1, "addIcon", "primarybg"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "tabStyleCol"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["class", "nav-item", "role", "presentation", 4, "ngIf"], ["id", "myTabContent", 1, "tab-content"], ["class", "tab-pane fade show active", "id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 4, "ngIf"], ["class", "tab-pane fade show active", "id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 4, "ngIf"], ["role", "presentation", 1, "nav-item"], ["id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active", 3, "click"], ["id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", 3, "click"], ["id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link", 3, "click"], ["id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link", "active", 3, "click"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], ["fxLayout", "row wrap", 4, "ngIf"], ["fxLayout", "row wrap"], ["fxFlex", "100"], ["type", "file", "id", "chFile", 3, "change"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade", "show", "active"], ["type", "file", "id", "chFile1", 3, "change"]],
        template: function AddSystemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AddSystemComponent_ng_container_0_Template, 4, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_Template, 10, 6, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc3lzdGVtLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    86312:
    /*!************************************************************************************!*\
      !*** ./src/app/views/addSystem/add-system-summary/add-system-summary.component.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddSystemSummaryComponent": function AddSystemSummaryComponent() {
          return (
            /* binding */
            _AddSystemSummaryComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/services/add-system.service */
      91973);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function AddSystemSummaryComponent_tr_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddSystemSummaryComponent_tr_30_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var data_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r2.getResp(data_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.systemId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.systemCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.systemName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.serviceType);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.sourceIp);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.sourcePort);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](16, 7, data_r1.createdTime, "medium"));
        }
      }

      var _c0 = function _c0() {
        return ["/dashboard"];
      };

      var _AddSystemSummaryComponent = /*#__PURE__*/function () {
        function _AddSystemSummaryComponent(apiService, router) {
          _classCallCheck(this, _AddSystemSummaryComponent);

          this.apiService = apiService;
          this.router = router;
          this.respArray = [];
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        }

        _createClass(_AddSystemSummaryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                'targets': [5]
              }],
              order: [[5, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]] // columnDefs: [ { type: 'date', 'targets': [5] } ],
              // order: [[5, 'desc']],

            };
            this.getDataForMonitor();
          }
        }, {
          key: "getDataForMonitor",
          value: function getDataForMonitor() {
            var _this19 = this;

            this.apiService.fecthingAddSystem().subscribe(function (dataresp) {
              _this19.respArray = dataresp;

              _this19.dtTrigger.next();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "getResp",
          value: function getResp(data) {
            console.log(data);
            this.apiService.setIndex({
              index: data.systemId
            });
            this.router.navigateByUrl("/addSystem");
          }
        }, {
          key: "new",
          value: function _new() {
            this.apiService.setIndex({
              index: ""
            });
            this.router.navigateByUrl("/addSystem");
          }
        }]);

        return _AddSystemSummaryComponent;
      }();

      _AddSystemSummaryComponent.ɵfac = function AddSystemSummaryComponent_Factory(t) {
        return new (t || _AddSystemSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_0__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _AddSystemSummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AddSystemSummaryComponent,
        selectors: [["npr-add-system-summary"]],
        decls: 31,
        vars: 5,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "primaryColor", 3, "click"]],
        template: function AddSystemSummaryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Add System");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddSystemSummaryComponent_Template_a_click_7_listener() {
              return ctx["new"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " System Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "System Code\tName");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "External Ip");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "External Port");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, AddSystemSummaryComponent_tr_30_Template, 17, 10, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.respArray);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc3lzdGVtLXN1bW1hcnkuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_addSystem_add-System_add-System_module_ts-es5.js.map