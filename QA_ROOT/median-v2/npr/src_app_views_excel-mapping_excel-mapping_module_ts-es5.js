(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_excel-mapping_excel-mapping_module_ts"], {
    /***/
    31443:
    /*!**************************************************!*\
      !*** ./src/app/shared/services/toast.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ToastService": function ToastService() {
          return (
            /* binding */
            _ToastService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng2-izitoast */
      27218);

      var _ToastService = /*#__PURE__*/function () {
        function _ToastService(iziToast) {
          _classCallCheck(this, _ToastService);

          this.iziToast = iziToast;
        }

        _createClass(_ToastService, [{
          key: "successMessage",
          value: function successMessage(title, msg) {
            this.iziToast.success({
              title: title,
              message: msg,
              layout: 2,
              balloon: false,
              position: "topRight",
              progressBarColor: "red",
              pauseOnHover: true
            });
          }
        }, {
          key: "errorMessage",
          value: function errorMessage(title, msg) {
            this.iziToast.error({
              title: title,
              message: msg,
              layout: 2,
              balloon: false,
              position: "topRight",
              progressBarColor: "red",
              pauseOnHover: true
            });
          }
        }, {
          key: "infoMessage",
          value: function infoMessage(title, msg) {
            this.iziToast.info({
              title: title,
              message: msg,
              layout: 2,
              balloon: false,
              position: "topRight",
              progressBarColor: "red",
              pauseOnHover: true
            });
          }
        }]);

        return _ToastService;
      }();

      _ToastService.ɵfac = function ToastService_Factory(t) {
        return new (t || _ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__.Ng2IzitoastService));
      };

      _ToastService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ToastService,
        factory: _ToastService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    43728:
    /*!****************************************************************************************!*\
      !*** ./src/app/views/excel-mapping/excel-mapping-edit/excel-mapping-edit.component.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExcelMappingEditComponent": function ExcelMappingEditComponent() {
          return (
            /* binding */
            _ExcelMappingEditComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/guards/can-deactivate.guard */
      50215);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ExcelMappingEditComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", !ctx_r0.editFlag1);
        }
      }

      function ExcelMappingEditComponent_div_20_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", data_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r9);
        }
      }

      function ExcelMappingEditComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ExcelMappingEditComponent_div_20_Template_select_change_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r10.getCurrencyData($event, "currency");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExcelMappingEditComponent_div_20_option_8_Template, 2, 2, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", !ctx_r1.showCurrencyDropdown ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.ccyData);
        }
      }

      function ExcelMappingEditComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Sheet Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", !ctx_r2.editFlag1);
        }
      }

      function ExcelMappingEditComponent_div_22_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", data_r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r13);
        }
      }

      function ExcelMappingEditComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Sheet Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "select", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ExcelMappingEditComponent_div_22_Template_select_change_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r14.getsheetNumData($event, "sheetNumber");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExcelMappingEditComponent_div_22_option_8_Template, 2, 2, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.sheetData);
        }
      }

      var _c0 = function _c0() {
        return ["/excel-mapping"];
      };

      function ExcelMappingEditComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0));
        }
      }

      function ExcelMappingEditComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Data Starting Row");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", !ctx_r5.editFlag);
        }
      }

      function ExcelMappingEditComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Is Header Present");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", !ctx_r6.editFlag);
        }
      }

      function ExcelMappingEditComponent_div_26_tr_28_option_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", item_r24.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r24.type);
        }
      }

      function ExcelMappingEditComponent_div_26_tr_28_a_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExcelMappingEditComponent_div_26_tr_28_a_28_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            var i_r21 = ctx_r26.index;
            var item_r20 = ctx_r26.$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r25.removeSubArray(i_r21, item_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ExcelMappingEditComponent_div_26_tr_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "select", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ExcelMappingEditComponent_div_26_tr_28_Template_select_change_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);

            var i_r21 = restoredCtx.index;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r28.checkTypeStatus(i_r21);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExcelMappingEditComponent_div_26_tr_28_option_7_Template, 2, 2, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Is Mandatory?");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ExcelMappingEditComponent_div_26_tr_28_a_28_Template, 3, 0, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r21 = ctx.index;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroupName", i_r21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", !ctx_r16.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", !ctx_r16.editFlag ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r16.dataTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "mandatoryCheck_", i_r21, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("for", "mandatoryCheck_", i_r21, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "headerName_", i_r21, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "dateFormat_", i_r21, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "mappingColumn_", i_r21, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "delimeter_", i_r21, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "defaultValue_", i_r21, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "repeatedTillNextValue_", i_r21, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r16.editFlag);
        }
      }

      function ExcelMappingEditComponent_div_26_a_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExcelMappingEditComponent_div_26_a_31_Template_span_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r30.addSubArray();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ExcelMappingEditComponent_div_26_div_32_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExcelMappingEditComponent_div_26_div_32_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r39.updateMappingData(ctx_r39.addForm.value, ctx_r39.updateMappingForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r32.dataSaved)("disabled", !ctx_r32.addForm.dirty || !ctx_r32.addForm.valid);
        }
      }

      function ExcelMappingEditComponent_div_26_div_32_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExcelMappingEditComponent_div_26_div_32_div_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r42);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r41.enableEditFlag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r33.roleCodes.edit.labelDescription);
        }
      }

      function ExcelMappingEditComponent_div_26_div_32_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExcelMappingEditComponent_div_26_div_32_div_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r43.onClickOfAuth(ctx_r43.addForm.value, ctx_r43.updateMappingForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r34.roleCodes.auth.labelDescription);
        }
      }

      function ExcelMappingEditComponent_div_26_div_32_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExcelMappingEditComponent_div_26_div_32_div_6_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r45.onClickOfClose(ctx_r45.addForm.value, ctx_r45.updateMappingForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r35.roleCodes.close.labelDescription);
        }
      }

      function ExcelMappingEditComponent_div_26_div_32_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExcelMappingEditComponent_div_26_div_32_div_7_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r47.onClickDelete(ctx_r47.addForm.value, ctx_r47.updateMappingForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r36.roleCodes["delete"].labelDescription);
        }
      }

      function ExcelMappingEditComponent_div_26_div_32_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExcelMappingEditComponent_div_26_div_32_div_8_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r49.onClickOfReopen(ctx_r49.addForm.value, ctx_r49.updateMappingForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r37.roleCodes.reopen.labelDescription);
        }
      }

      function ExcelMappingEditComponent_div_26_div_32_div_9_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExcelMappingEditComponent_div_26_div_32_div_9_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);

            return ctx_r52.finalSubmit(ctx_r52.updateMappingForm.value, ctx_r52.addForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ExcelMappingEditComponent_div_26_div_32_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExcelMappingEditComponent_div_26_div_32_div_9_button_1_Template, 2, 0, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r38.editFlag && !ctx_r38.copyData);
        }
      }

      function ExcelMappingEditComponent_div_26_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExcelMappingEditComponent_div_26_div_32_button_3_Template, 2, 2, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExcelMappingEditComponent_div_26_div_32_div_4_Template, 3, 1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExcelMappingEditComponent_div_26_div_32_div_5_Template, 3, 1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ExcelMappingEditComponent_div_26_div_32_div_6_Template, 3, 1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExcelMappingEditComponent_div_26_div_32_div_7_Template, 3, 1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExcelMappingEditComponent_div_26_div_32_div_8_Template, 3, 1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ExcelMappingEditComponent_div_26_div_32_div_9_Template, 2, 1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r18.editFlag && ctx_r18.copyData);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r18.newDataResponse && !ctx_r18.editFlag && ctx_r18.recordStatus == "OPEN" && ctx_r18.roleCodes.edit && ctx_r18.copyData);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r18.newDataResponse && !ctx_r18.editFlag && ctx_r18.authStatus == "UNAUTHORIZED" && ctx_r18.roleCodes.auth && ctx_r18.copyData);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r18.recordStatus == "OPEN" && !ctx_r18.editFlag && ctx_r18.copyData && ctx_r18.firstTimeAuth == "YES");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r18.firstTimeAuth == "NO" && (ctx_r18.recordStatus == "OPEN" || ctx_r18.recordStatus == "O") && !ctx_r18.editFlag && ctx_r18.copyData);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r18.recordStatus == "CLOSED" && !ctx_r18.editFlag && ctx_r18.copyData);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r18.newDataResponse && ctx_r18.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c0));
        }
      }

      function ExcelMappingEditComponent_div_26_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "img", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "i", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "i", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "img", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](69, "i", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "First Time Authorization");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](81, "img", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Authorization Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](93, "img", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "Modification Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r19.modifiedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](26, 8, ctx_r19.modifiedTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r19.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r19.authorizedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](63, 11, ctx_r19.authorizedTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r19.firstTimeAuth);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r19.authStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r19.version);
        }
      }

      function ExcelMappingEditComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "form", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "fieldset", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "table", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "data type");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "mandatory");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "header name");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "date format");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "mapping column");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "delimeter");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "default value");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "repeated till next value");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "tbody", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ExcelMappingEditComponent_div_26_tr_28_Template, 29, 13, "tr", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, ExcelMappingEditComponent_div_26_a_31_Template, 3, 0, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, ExcelMappingEditComponent_div_26_div_32_Template, 13, 9, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, ExcelMappingEditComponent_div_26_div_33_Template, 100, 14, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r7.addForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r7.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.addForm.get("excelMappingDetails")["controls"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.newDataResponse);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.newDataResponse);
        }
      }

      var _ExcelMappingEditComponent = /*#__PURE__*/function () {
        function _ExcelMappingEditComponent(apiService, cdr, fb, toastService, router, roleService, canDeactivateGuard) {
          _classCallCheck(this, _ExcelMappingEditComponent);

          this.apiService = apiService;
          this.cdr = cdr;
          this.fb = fb;
          this.toastService = toastService;
          this.router = router;
          this.roleService = roleService;
          this.canDeactivateGuard = canDeactivateGuard;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
          this.editFlag = false;
          this.editFlag1 = false;
          this.showCurrencyDropdown = true;
          this.showFieldCurrency = false;
          this.showFieldsheetNum = false;
          this.showFetch = true;
          this.extSysCode = null;
          this.excelprocess = null;
          this.submitted = false;
          this.tempStore = [];
          this.disablefetchbtn = false;
          this.formTouched = true;
          this.addformTouched = true;
          this.dataSaved = false;
          this.copyData = true;
          this.dataTypes = [{
            id: 3,
            type: 'Clob',
            value: 'clob_901',
            isActive: false
          }, {
            id: 1,
            type: 'Date',
            value: 'date_751',
            isActive: true
          }, {
            id: 2,
            type: 'Number',
            value: 'number_600',
            isActive: false
          }, {
            id: 4,
            type: 'Varchar',
            value: 'varchar_0',
            isActive: false
          }];
          this.showDialog = false;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        }

        _createClass(_ExcelMappingEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.currentUser = localStorage.getItem("userFromLogin");
            this.getExtCodeforDropdown();
            setTimeout(function () {
              _this.newRolePermissions();
            }, 2000);
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this.roleCodes = message;
            });
            setTimeout(function () {
              console.log(_this.roleCodes);
            }, 3000);
            console.log("role codes", this.roleCodes); // this.updateMappingForm = this.fb.group({
            //   extCode: [""],
            //   proCode: [""],
            //   startingRow: [""],
            //   currency: [""],
            //   sheetNumber: [""],
            //   headerRepeated: [""],
            // });

            this.updateMappingForm = this.fb.group({
              processName: [""],
              extSysCode: [""],
              extSys: [""],
              userId: [this.currentUser],
              sheetNumber: [""],
              headerRepeated: [false],
              startingRow: [""],
              currency: [""]
            });
            this.addForm = this.fb.group({
              excelMappingDetails: this.fb.array([this.getSubArray()])
            });
            this.gettingSummaryData();
          }
        }, {
          key: "newRolePermissions",
          value: function newRolePermissions() {
            this.roleService.fetchScreenPermissions('Template Mapping');
          }
        }, {
          key: "canExit",
          value: function canExit() {
            var _this2 = this;

            var isExit = false;

            if ((this.updateMappingForm.touched || this.addForm.touched) && this.formTouched == true) {
              return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: 'There are unsaved changes in the screen. Would you like to navigate to other screen?',
                showCancelButton: true,
                confirmButtonColor: '#E6224A',
                cancelButtonColor: '#011945',
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                icon: 'info'
              }).then(function (result) {
                if (result.isConfirmed === true) {
                  isExit = true;

                  _this2.cdr.markForCheck();

                  return isExit;
                } else {
                  isExit = false;

                  _this2.cdr.markForCheck();

                  return isExit;
                }
              });
            } else {
              isExit = true;
              return new Promise(function (resolve, reject) {
                if (isExit === true) {
                  isExit = true;

                  _this2.cdr.markForCheck();

                  resolve(true);
                }
              });
            }
          }
        }, {
          key: "getSubArray",
          value: function getSubArray() {
            return this.fb.group({
              columnnName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
              dataType: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
              mandatory: [false],
              // mandatory: [""],
              headerName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
              dateFormat: [{
                value: '',
                disabled: true
              }],
              // dateFormat: [''],
              // authStatus: [''],
              // modifiedBy: [''],
              // modifiedBy: ['JILU'],
              // authorizedBy: [''],
              // version: [''],
              // modifiedTime: [''],
              // authorizedTime: [''],
              // recordStatus: [''],
              delimeter: [''],
              defaultValue: [''],
              repeatedTillNextValue: [''],
              // excelMappingColumn:[''],
              tableMappingColumn: [''],
              mappingMasterId: [''],
              mappingDetailId: [''],
              excelMappingColumn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[a-zA-Z \-#,@,%\']+')]] // columnnName: ['', [Validators.required]],
              // dataType: [null, [Validators.required]],
              // excelMappingColumn: ['', [Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^[a-zA-Z \-#,@,%\']+')]],
              // mandatory: false,
              // id:[''],
              // mandatory: [""],
              // headerName: [''],
              // dateFormat: [{ value: '', disabled: true }],
              // authStatus: [''],
              // modifiedBy: [''],
              // authorizedBy: [''],
              // version: [''],
              // modifiedTime: [''],
              // authorizedTime: [''],
              // recordStatus: [''],
              // delimeter: [''],
              // defaultValue: [''],
              // repeatedTillNextValue: [''],
              // firstTimeAuth:['']

            });
          }
        }, {
          key: "gettingSummaryData",
          value: function gettingSummaryData() {
            var _this3 = this;

            this.apiService.getexcelSummaryData().subscribe(function (resp) {
              _this3.summryResponse = resp;
              console.log("this.summryResponse", _this3.summryResponse);
              var retrievedObject = localStorage.getItem('summryResponse');
              _this3.summryResponse = JSON.parse(retrievedObject);
            });

            if (this.summryResponse) {
              this.getExtSysNameByExtSysCode(this.summryResponse.extSysCode);
              this.extSysCode = this.summryResponse.extSysCode;
              this.processNAme = this.summryResponse.processName;
              this.extSys = this.summryResponse.extSys;
              this.currency = this.summryResponse.currency;
              this.sheetNumber = this.summryResponse.sheetNumber;
              this.updateMappingForm.controls.extSysCode.setValue(this.extSysCode);
              this.updateMappingForm.controls.processName.setValue(this.processNAme); //  this.apiService.getExcelMappingDataforEdit(this.extSysCode,this.processNAme,this.extSys).subscribe((editResp) =>{

              this.apiService.getTemplateMappingDataforEdit(this.extSys, this.processNAme, this.currency, this.sheetNumber).subscribe(function (editResp) {
                console.log("This. is new Resp", editResp);
                _this3.newDataResponse = editResp;
                localStorage.setItem('newDataResponse', JSON.stringify(_this3.newDataResponse)); // var retrievedObject = localStorage.getItem('newDataResponse');
                // this.newDataResponse = JSON.parse(retrievedObject);

                console.log(_this3.newDataResponse, "After");
                _this3.showFieldCurrency = true;
                _this3.showFieldsheetNum = true;

                _this3.updateMappingForm.controls.currency.setValue(_this3.newDataResponse.currency);

                _this3.updateMappingForm.controls.sheetNumber.setValue(_this3.newDataResponse.sheetNumber);

                var startingRow = _this3.newDataResponse.startingRow;
                var headerRepeated = _this3.newDataResponse.headerRepeated;

                _this3.updateMappingForm.controls.startingRow.setValue(startingRow);

                _this3.updateMappingForm.controls.headerRepeated.setValue(headerRepeated);

                _this3.showCurrencyDropdown = false;

                _this3.auditLog();

                _this3.patchData(_this3.newDataResponse.excelMappingDetails.sort(function (a, b) {
                  return a.excelMappingColumn > b.excelMappingColumn ? 1 : -1;
                })); // this.cdr.markForCheck();
                // this.cdr.markForCheck();
                // this.getAllMappingData(this.extSysCode,this.processNAme,this.newDataResponse.currency,this.newDataResponse.sheetNumber);
                // console.log(this.sheetData,this.ccyData);
                // if(this.newDataResponse.currency.length === 1){
                //   this.currency = this.newDataResponse.currency[0];
                //   this.sheetNumb = this.newDataResponse.currencySheetMap[this.ccyData];
                //   this.showFieldCurrency = true;
                //   this.showFieldsheetNum = true;
                //   this.showFetch = false;
                //   this.updateMappingForm.controls.currency.setValue(this.currency);
                //   this.updateMappingForm.controls.sheetNumber.setValue(this.sheetNumb);
                //   this.getAllMappingData(this.extSysCode,this.processNAme,this.currency,this.sheetNumb);
                // }
                // else{
                //   this.showFetch = true;
                // }

              });
              setTimeout(function () {
                _this3.getProcess(_this3.extSysCode);
              }, 100);
            }
          }
        }, {
          key: "getAllMappingData",
          value: function getAllMappingData(extSysCode, processName, currenyVal, sheetNumber) {
            var _this4 = this;

            console.log("Checking ?", extSysCode, processName, currenyVal, sheetNumber);
            this.apiService.fetchAllName(extSysCode, processName, currenyVal).subscribe(function (filenames) {
              _this4.fileNames = filenames;
            });
            this.apiService.getAllMappingByExtSysAndProcessCode(extSysCode, processName, currenyVal, sheetNumber).subscribe(function (mappingResponse) {
              _this4.mappingResponse = mappingResponse;
              localStorage.setItem('mappingResponse', JSON.stringify(_this4.mappingResponse));
              var retrievedObject = localStorage.getItem('mappingResponse');
              _this4.mappingResponse = JSON.parse(retrievedObject);
              console.log("this.mappingResponse", _this4.mappingResponse);

              if (_this4.mappingResponse == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'Excel mapping is not available with this sheet number!',
                  text: 'Please enter the correct sheet number',
                  icon: 'warning'
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'Data Fetched Successfully!',
                  icon: 'success'
                });
                var startingRow = _this4.mappingResponse[0].startingRow;
                var headerRepeated = _this4.mappingResponse[0].headerRepeated;

                _this4.updateMappingForm.controls.startingRow.setValue(startingRow);

                _this4.updateMappingForm.controls.headerRepeated.setValue(headerRepeated);

                _this4.showCurrencyDropdown = false;

                _this4.auditLog();

                _this4.patchData(_this4.mappingResponse);

                _this4.cdr.markForCheck();

                _this4.cdr.markForCheck();
              }
            });
          }
        }, {
          key: "getCurrencyData",
          value: function getCurrencyData(event, type) {
            console.log(event.target.value, type);
            var selectedCurrency = event.target.value; // const sheetNum = this.newDataResponse.currencySheetMap[selectedCurrency];   

            this.updateMappingForm.controls.sheetNumber.setValue(this.sheetNumber);
            this.showFieldsheetNum = true; // if(data.sheetNumber != this.sheetNumber  && data.processCode != this.poojaprocess2 && data.currency != this.currency)
            // {
            //   this.disablefetchbtn = false;
            // }
            // if(data.sheetNumber != null  && data.processCode != null && data.currency != null)
            // {
            //   this.disablefetchbtn = false;
            // }
          }
        }, {
          key: "getsheetNumData",
          value: function getsheetNumData(event, type) {
            console.log("event", event.target.value, type);
          }
        }, {
          key: "getExtCodeforDropdown",
          value: function getExtCodeforDropdown() {
            var _this5 = this;

            // this.apiService.getAllExtsysNameAndProcessCodeOnAuthStatus()
            //   .subscribe(response => {
            //     this.externalSysData=response;
            //     this.extSysData = response.extSysList.sort();
            //     console.log(this.externalSysData);
            //   });
            this.apiService.getAllExtsysNameOnAuthStatus().subscribe(function (response) {
              _this5.externalSysData = response;
              _this5.extSysData = response.sort();
            });
          }
        }, {
          key: "getProcess",
          value: function getProcess(extSysCode) {
            console.log(this.externalSysData.map[extSysCode].extSysName);
            this.externalSystsemCodes = this.externalSysData.map[extSysCode].extSysName;
            this.updateMappingForm.value.extSys = this.externalSysData.map[extSysCode].extSysName;
            this.updateMappingForm.get('processName').setValue(this.externalSysData.map[extSysCode].processCode);
            this.processName = this.externalSysData.map[extSysCode].processCode; // this.apiService.getProcessNameByExtSysCode(extSysCode).subscribe(response => {
            //   this.processResp = response;
            //   this.processName = this.processResp;

            this.getExtSysNameByExtSysCode(extSysCode); // });
          }
        }, {
          key: "getExtSysNameByExtSysCode",
          value: function getExtSysNameByExtSysCode(extSysCode) {
            var _this6 = this;

            this.apiService.getExtSysNameByExtSysCode(extSysCode).subscribe(function (data) {
              _this6.extNameValue = data;
            });
            console.log(this.extNameValue);
          } // getProcessName(processCode, extCodefromSummry) {
          //   this.extSysCode = extCodefromSummry;
          //   this.excelprocess = processCode;
          //   this.apiService.getCurrencyOnExtNameAndProcssCode(this.extSysCode, this.excelprocess, this.extCode).subscribe(data => {
          //     this.ccyData = data;
          //     console.log("Currency", this.ccyData);
          //     if (this.ccyData.length == 0) {
          //       Swal.fire({
          //         title: 'No Currency Found For the Process code!',
          //         icon: 'warning'
          //       });
          //       return;
          //     }
          //   });
          // } 

        }, {
          key: "getProcessName",
          value: function getProcessName(extSysCode, processCode, extNameValue) {
            var _this7 = this;

            // this.extSysCode = extCodefromSummry;
            // this.excelprocess = processCode;
            this.apiService.getCurrencyOnExtNameAndProcssCode(extSysCode, processCode, extNameValue).subscribe(function (data) {
              _this7.ccyData = data;
              console.log("Currency", _this7.ccyData);

              if (_this7.ccyData.length == 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'No Currency Found For the Process code!',
                  icon: 'warning'
                });
                return;
              }
            });
          }
        }, {
          key: "patchData",
          value: function patchData(formdata) {
            console.log(formdata);
            var control = this.addForm.controls.excelMappingDetails;
            control.controls = [];

            for (var i = 0; i < formdata.length; i++) {
              control.push(this.getSubArray());
              console.log("Inside for loop");
            }

            console.log(control);
            console.log(this.addForm); // console.log("Outside for loop",this.addForm.controls.excelMappingDetails);

            this.addForm.patchValue({
              excelMappingDetails: formdata
            });
            console.log(this.addForm);
          }
        }, {
          key: "addSubArray",
          value: function addSubArray() {
            var control = this.addForm.controls['excelMappingDetails'];
            control.push(this.getSubArray());
          }
        }, {
          key: "getSubArrayFormGroup",
          value: function getSubArrayFormGroup(index) {
            var control = this.addForm.controls.excelMappingDetails;
            var fg = control.get([index]);
            return fg.value;
          }
        }, {
          key: "f",
          get: function get() {
            return this.addForm.controls;
          }
        }, {
          key: "t",
          get: function get() {
            return this.f.excelMappingDetails;
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            var _a, _b, _c, _d, _e, _f, _g, _h;

            console.log(this.newDataResponse);
            this.authStatus = (_a = this.newDataResponse) === null || _a === void 0 ? void 0 : _a.authStatus;
            this.recordStatus = (_b = this.newDataResponse) === null || _b === void 0 ? void 0 : _b.recordStatus;
            this.modifiedBy = (_c = this.newDataResponse) === null || _c === void 0 ? void 0 : _c.inputBy;
            this.modifiedTime = (_d = this.newDataResponse) === null || _d === void 0 ? void 0 : _d.inputDtStamp;
            this.authorizedBy = (_e = this.newDataResponse) === null || _e === void 0 ? void 0 : _e.authorizedBy;
            this.authorizedTime = (_f = this.newDataResponse) === null || _f === void 0 ? void 0 : _f.authorizedDtStamp;
            this.version = (_g = this.newDataResponse) === null || _g === void 0 ? void 0 : _g.version;
            this.firstTimeAuth = (_h = this.newDataResponse) === null || _h === void 0 ? void 0 : _h.firstTimeAuth;
            console.log("AuditLog", this.authStatus, this.recordStatus, this.modifiedBy, this.authorizedBy);

            if (this.authStatus === 'U') {
              this.authStatus = 'UNAUTHORIZED';
            }

            if (this.authStatus === 'A') {
              this.authStatus = 'AUTHORIZED';
            }

            if (this.recordStatus === 'C') {
              this.recordStatus = 'CLOSED';
            }

            if (this.recordStatus === 'O') {
              this.recordStatus = 'OPEN';
            }

            if (this.firstTimeAuth === 'Y') {
              this.firstTimeAuth = 'YES';
            }

            if (this.firstTimeAuth === 'N') {
              this.firstTimeAuth = 'NO';
            }
          }
        }, {
          key: "checkTypeStatus",
          value: function checkTypeStatus(i) {
            var control = this.addForm.controls['excelMappingDetails'];
            var fg = control.get([i]);

            if (fg.value.dataType == 'Date') {
              this.is_edit = false;
              fg.get('dateFormat').enable();
            } else {
              fg.get('dateFormat').disable();
            }
          }
        }, {
          key: "mandatoryCheck",
          value: function mandatoryCheck(values, i) {
            var value = values.currentTarget.checked;
            var control = this.addForm.get('excelMappingDetails');
            control.at(i).get('mandatory').setValue(value);
            console.log("value", value, i);
          }
        }, {
          key: "enableEditFlag",
          value: function enableEditFlag() {
            this.editFlag = true;
            this.editFlag1 = false;
            this.showCurrencyDropdown = true;
            var control = this.addForm.controls['excelMappingDetails']; // console.log(control);

            for (var i = 0; i < this.addForm.get('excelMappingDetails')['controls'].length; i++) {
              var fg = control.get([i]);

              if (fg.value.dataType == "date_751") {
                console.log("Inside If");
                this.is_edit = false;
                fg.get('dateFormat').enable();
              } else {
                console.log("Inside else");
                fg.get('dateFormat').disable();
              }
            }
          }
        }, {
          key: "clickFunction",
          value: function clickFunction(i) {
            console.log("i", i);
          }
        }, {
          key: "copyMaping",
          value: function copyMaping(excelCopyData) {
            this.mappingResponse = '';
            this.editFlag = true;
            this.copyData = false;
            this.processResp = [];
            this.excelprocess = '';
            excelCopyData.excelMappingDetails.forEach(function (element) {
              element.id = null;
            });
            console.log(excelCopyData.excelMappingDetails);
          }
        }, {
          key: "updateMappingData",
          value: function updateMappingData(subArrayForm, excelForm) {
            var _this8 = this;

            console.log(this.extNameValue); // excelForm.extSys=this.externalSystsemCodes;

            this.submitted = true;
            this.progress = true; // this.extCodeValue =  excelForm.extSysCode;
            // this.proCodeValue =  excelForm.processName;
            // this.isCheckedValue =  excelForm.headerRepeated;
            // this.startingValue = excelForm.startingRow;
            // this.currencyValue = excelForm.currency;
            // this.sheetNumberValue = excelForm.sheetNumber;

            var modifiedBy = subArrayForm.excelMappingDetails[0].inputBy;
            modifiedBy = this.currentUser;

            if (this.addForm.invalid) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: 'Numeric values not allowed in mapping column!',
                icon: 'warning'
              });
              return;
            }

            excelForm.extSys = this.extNameValue;
            var obj = Object.assign(Object.assign({}, excelForm), subArrayForm);
            console.log(obj); // this.apiService.updateMappingData(subArrayForm,this.extCodeValue,this.proCodeValue,this.extCodeValue,
            //   this.startingValue,this.isCheckedValue,this.currentUser,this.currencyValue,this.sheetNumberValue)

            this.apiService.excelMappingAuditLog(obj, 'update').subscribe(function (updateData) {
              _this8.newDataResponse = updateData;
              console.log(_this8.newDataResponse);

              if (_this8.newDataResponse) {
                _this8.editFlag = false;
                _this8.showCurrencyDropdown = false;
                _this8.dataSaved = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: 'Record is Updated!',
                  icon: 'success'
                });

                _this8.auditLog();

                console.log("Record u[dated");
                _this8.formTouched = !_this8.updateMappingForm.touched;

                _this8.updateMappingForm.markAsUntouched();

                _this8.updateMappingForm.markAsPristine(); // this.addformTouched=!this.addForm.touched;


                _this8.addForm.markAsUntouched();

                _this8.addForm.markAsPristine(); // this.cdr.markForCheck();

              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: 'Failed to update ',
                  icon: 'error'
                });
              }
            });
          }
        }, {
          key: "onClickOfAuth",
          value: function onClickOfAuth(addForm, updateForm) {
            var _this9 = this;

            this.currentUser = localStorage.getItem("userFromLogin");
            console.log("this.currentUser", this.currentUser, addForm, updateForm); // this.extCodeValue =  updateForm.extSysCode;
            // this.extNameValue =  updateForm.extSysCode;
            // this.proCodeValue =  updateForm.processName;
            // this.currencyValue = updateForm.currency;

            console.log(this.newDataResponse);

            if (this.modifiedBy === this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: 'Maker Cannot Authorized the Record!',
                icon: 'error'
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: 'You are trying to Authorize the record. ' + ' Do you want to proceed?',
                showCancelButton: true,
                confirmButtonColor: '#E6224A',
                cancelButtonColor: '#011945',
                // confirmButtonText: 'PROCEED.'
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                icon: 'info'
              }).then(function (result) {
                if (result.isConfirmed === true) {
                  _this9.newDataResponse.userId = _this9.currentUser; // this.apiService.onAuthorizingTheRecordOfExcelMApping(addForm,this.extNameValue,this.proCodeValue,this.extCodeValue, this.currentUser,this.currencyValue)

                  _this9.apiService.excelMappingAuditLog(_this9.newDataResponse, 'authorize').subscribe(function (authResp) {
                    var _a, _b, _c, _d, _e, _f, _g, _h;

                    _this9.newDataResponse = authResp;

                    if (_this9.newDataResponse) {
                      _this9.authStatus = (_a = _this9.newDataResponse) === null || _a === void 0 ? void 0 : _a.authStatus;
                      _this9.recordStatus = (_b = _this9.newDataResponse) === null || _b === void 0 ? void 0 : _b.recordStatus; // this.modifiedBy = this.mappingResponse?.modifiedBy;

                      _this9.modifiedTime = (_c = _this9.newDataResponse) === null || _c === void 0 ? void 0 : _c.inputDtStamp;
                      _this9.authorizedBy = (_d = _this9.newDataResponse) === null || _d === void 0 ? void 0 : _d.authorizedBy;
                      _this9.authorizedTime = (_e = _this9.newDataResponse) === null || _e === void 0 ? void 0 : _e.authorizedDtStamp;
                      _this9.version = (_f = _this9.newDataResponse) === null || _f === void 0 ? void 0 : _f.version;
                      _this9.firstTimeAuth = (_g = _this9.newDataResponse) === null || _g === void 0 ? void 0 : _g.firstTimeAuth;
                      _this9.modifiedBy = (_h = _this9.newDataResponse) === null || _h === void 0 ? void 0 : _h.inputBy;

                      if (_this9.authStatus === 'U') {
                        _this9.authStatus = 'UNAUTHORIZED';
                      }

                      if (_this9.authStatus === 'A') {
                        _this9.authStatus = 'AUTHORIZED';
                      }

                      if (_this9.recordStatus === 'C') {
                        _this9.recordStatus = 'CLOSED';
                      }

                      if (_this9.recordStatus === 'O') {
                        _this9.recordStatus = 'OPEN';
                      }

                      if (_this9.firstTimeAuth === 'Y') {
                        _this9.firstTimeAuth = 'YES';
                      }

                      if (_this9.firstTimeAuth === 'N') {
                        _this9.firstTimeAuth = 'NO';
                      }

                      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        title: 'Record is Authorized',
                        icon: 'success'
                      });
                    }
                  });
                }
              });
            }
          }
        }, {
          key: "onClickDelete",
          value: function onClickDelete(addForm, updateForm) {
            var _this10 = this;

            console.log(this.newDataResponse);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              text: 'You are trying to delete record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#E6224A',
              cancelButtonColor: '#011945',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              icon: 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this10.apiService.deleteTemplateMapping(_this10.extSys, _this10.processNAme, _this10.currency, _this10.sheetNumber).subscribe(function (deleteRsp) {
                  // console.log(deleteRsp);
                  if (deleteRsp == true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record is deleted',
                      icon: 'success'
                    }).then(function (result) {
                      _this10.router.navigate(['/excel-mapping']);
                    }); // this.router.navigateByUrl('/excel-mapping');
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Failed to Delete the Recored!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "onClickOfClose",
          value: function onClickOfClose(addForm, updateForm) {
            var _this11 = this;

            // console.log(addForm);
            // console.log(updateForm);
            // this.extCodeValue =  updateForm.extSysCode;
            // this.extNameValue =  updateForm.extSysCode;
            // this.proCodeValue =  updateForm.processName;
            // this.currencyValue = updateForm.currency;
            //  this.currentUser = this.newDataResponse.inputBy;
            //  console.log(this.extCodeValue);
            //  console.log(this.extNameValue);
            //  console.log(this.proCodeValue);
            //  console.log(this.currencyValue);
            //  console.log(this.currentUser);
            console.log(this.newDataResponse);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              text: 'You are trying to Close the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#E6224A',
              cancelButtonColor: '#011945',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              icon: 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                // this.apiService.onClcikOFCloseOfUpdateExcelMApping(addForm,this.extCodeValue,this.proCodeValue,this.extNameValue,this.currencyValue)
                _this11.apiService.excelMappingAuditLog(_this11.newDataResponse, 'close').subscribe(function (closeResp) {
                  var _a, _b, _c, _d, _e, _f, _g;

                  console.log(closeResp);
                  _this11.newDataResponse = closeResp;

                  if (_this11.newDataResponse) {
                    _this11.authStatus = (_a = _this11.newDataResponse) === null || _a === void 0 ? void 0 : _a.authStatus;
                    _this11.recordStatus = (_b = _this11.newDataResponse) === null || _b === void 0 ? void 0 : _b.recordStatus;
                    _this11.modifiedBy = (_c = _this11.newDataResponse) === null || _c === void 0 ? void 0 : _c.inputBy;
                    _this11.modifiedTime = (_d = _this11.newDataResponse) === null || _d === void 0 ? void 0 : _d.inputDtStamp;
                    _this11.authorizedBy = (_e = _this11.newDataResponse) === null || _e === void 0 ? void 0 : _e.authorizedBy;
                    _this11.authorizedTime = (_f = _this11.newDataResponse) === null || _f === void 0 ? void 0 : _f.authorizedTime;
                    _this11.version = (_g = _this11.newDataResponse) === null || _g === void 0 ? void 0 : _g.version;

                    if (_this11.authStatus === 'U') {
                      _this11.authStatus = 'UNAUTHORIZED';
                    }

                    if (_this11.authStatus === 'A') {
                      _this11.authStatus = 'AUTHORIZED';
                    }

                    if (_this11.recordStatus === 'C') {
                      _this11.recordStatus = 'CLOSED';
                    }

                    if (_this11.recordStatus === 'O') {
                      _this11.recordStatus = 'OPEN';
                    }

                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record is Closed',
                      icon: 'success'
                    });

                    _this11.auditLog();
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Failed to Close the Recored!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "onClickOfReopen",
          value: function onClickOfReopen(addForm, updateForm) {
            var _this12 = this;

            this.extCodeValue = updateForm.extSysCode;
            this.extNameValue = updateForm.extSysCode;
            this.proCodeValue = updateForm.processName;
            this.currencyValue = updateForm.currency;
            this.currentUser = this.newDataResponse.inputBy;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to re-open record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                // this.apiService.onClcikOfReopenOfUpdateExcelMapping(addForm,this.extCodeValue,this.proCodeValue,this.extNameValue,this.currencyValue)
                _this12.apiService.excelMappingAuditLog(_this12.newDataResponse, 'reopen').subscribe(function (openResp) {
                  var _a, _b, _c, _d, _e, _f, _g;

                  console.log(openResp);
                  _this12.newDataResponse = openResp;

                  if (_this12.newDataResponse) {
                    _this12.authStatus = (_a = _this12.newDataResponse) === null || _a === void 0 ? void 0 : _a.authStatus;
                    _this12.recordStatus = (_b = _this12.newDataResponse) === null || _b === void 0 ? void 0 : _b.recordStatus;
                    _this12.modifiedBy = (_c = _this12.newDataResponse) === null || _c === void 0 ? void 0 : _c.inputBy;
                    _this12.modifiedTime = (_d = _this12.newDataResponse) === null || _d === void 0 ? void 0 : _d.inputDtStamp;
                    _this12.authorizedBy = (_e = _this12.newDataResponse) === null || _e === void 0 ? void 0 : _e.authorizedBy;
                    _this12.authorizedTime = (_f = _this12.newDataResponse) === null || _f === void 0 ? void 0 : _f.authorizedTime;
                    _this12.version = (_g = _this12.newDataResponse) === null || _g === void 0 ? void 0 : _g.version;

                    if (_this12.authStatus === 'U') {
                      _this12.authStatus = 'UNAUTHORIZED';
                    }

                    if (_this12.authStatus === 'A') {
                      _this12.authStatus = 'AUTHORIZED';
                    }

                    if (_this12.recordStatus === 'C') {
                      _this12.recordStatus = 'CLOSED';
                    }

                    if (_this12.recordStatus === 'O') {
                      _this12.recordStatus = 'OPEN';
                    }

                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record is Reopened',
                      icon: 'success'
                    });

                    _this12.auditLog();
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Failed to Reopen the Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "removeSubArray",
          value: function removeSubArray(i, data) {
            console.log(i, "Deleted"); // this.confirmService
            //   .confirm({ title: 'Confirm', message: 'Are you sure to delete?', ok: 'Yes', cancel: 'No' })
            //   .subscribe(res => {
            //     if (res) {

            this.getRowIdx(i); //   } else { return; }
            // });
          }
        }, {
          key: "getRowIdx",
          value: function getRowIdx(i) {
            var _this13 = this;

            var control = this.addForm.controls.excelMappingDetails;
            var fg = control.get([i]); // const idx = fg.get('id').value;

            this.apiService.deleteMappingRow(fg.value.mappingDetailId).subscribe(function (e) {
              // if (e) {
              //   Swal.fire({
              //     title: 'Record is Deleted',
              //     icon: 'success'
              //   });
              //   // this.router.navigate(['/excel-mapping']);
              // } else {
              //   Swal.fire({
              //     title: 'Failed to Delete the Record!',
              //     icon: 'error'
              //   });
              // }
              if (!e) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'Failed to Delete the Record!',
                  icon: 'error'
                });
              }

              _this13.cdr.markForCheck();
            });
            control.removeAt(i);
          }
        }, {
          key: "finalSubmit",
          value: function finalSubmit(excelForm, subArrayForm) {
            var _this14 = this;

            console.log(this.externalSystsemCodes);
            excelForm.extSys = this.externalSystsemCodes;
            console.log("Form", excelForm, subArrayForm);
            this.submitted = true;
            this.extCodeValue = excelForm.extSysCode;
            this.proCodeValue = excelForm.processName;
            this.isCheckedValue = excelForm.headerRepeated;
            this.startingValue = excelForm.startingRow;
            this.currencyValue = excelForm.currency;
            this.sheetNumberValue = excelForm.sheetNumber;

            if (this.addForm.controls.excelMappingDetails.invalid) {}

            this.apiService.columnData(subArrayForm, this.extCodeValue, this.proCodeValue, this.isCheckedValue, this.startingValue, this.extCodeValue, this.currencyValue, this.currentUser, this.sheetNumberValue).subscribe(function (response) {
              _this14.newDataResponse = response;
              console.log("this.mappingResponse", _this14.newDataResponse);

              if (_this14.newDataResponse) {
                _this14.is_edit = true;

                _this14.auditLog();

                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'Mapped Successfully!',
                  icon: 'success'
                });

                _this14.updateMappingForm.reset();

                _this14.addForm.reset();

                return;
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'Failed ExternalSystem And ProcessCode Already Mapped.',
                  icon: 'error'
                });

                _this14.updateMappingForm.reset();

                _this14.addForm.reset();
              }
            });
          }
        }]);

        return _ExcelMappingEditComponent;
      }();

      _ExcelMappingEditComponent.ɵfac = function ExcelMappingEditComponent_Factory(t) {
        return new (t || _ExcelMappingEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__.CanDeactivateGuard));
      };

      _ExcelMappingEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _ExcelMappingEditComponent,
        selectors: [["npr-excel-mapping-edit"]],
        decls: 27,
        vars: 11,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-2"], ["for", "extSysCode", 1, "formLbl"], [1, "colorRed"], ["id", "extSysCode", "type", "text", "required", "", "formControlName", "extSysCode", "placeholder", "External System", "value", "", 1, "form-control", 3, "readonly"], ["for", "processName", 1, "formLbl"], ["id", "processName", "type", "text", "required", "", "formControlName", "processName", "placeholder", "Process Code", "value", "", 1, "form-control", 3, "readonly"], ["class", "col-lg-2", 4, "ngIf"], ["class", "row gy-4  col-lg-4 ", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], ["for", "currency", 1, "formLbl"], ["id", "currency", "type", "text", "required", "", "formControlName", "currency", "placeholder", "Currency ", "value", "", 1, "form-control", 3, "readonly"], ["formControlName", "currency", "required", "", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["class", "form-class", 3, "value", 4, "ngFor", "ngForOf"], [1, "form-class", 3, "value"], ["for", "sheetNumber", 1, "formLbl"], ["id", "sheetNumber", "type", "text", "required", "", "formControlName", "sheetNumber", "placeholder", "Sheet Number", "value", "", 1, "form-control", 3, "readonly"], ["formControlName", "sheetNumber", "required", "", "aria-label", "Default select example", 1, "form-select", 3, "change"], [1, "row", "gy-4", "col-lg-4"], [1, "col-lg-4"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["for", "startingRow", 1, "formLbl"], ["id", "startingRow", "type", "text", "formControlName", "startingRow", "placeholder", "Data Starting Row", "value", "", 1, "form-control", 3, "readonly"], [1, "checkStyle"], ["type", "checkbox", "id", "headerRepeated", "formControlName", "headerRepeated", 3, "readonly"], ["for", "headerRepeated"], ["action", "", "novalidate", "", 1, "formStyle", 3, "formGroup"], [1, "table-responsive"], [3, "disabled"], ["id", "dbTable1", 1, "table", "tableStyle1", "responsive", "nowrap", "vAlignMdl"], ["formArrayName", "excelMappingDetails"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", "class", "addIcon primarybg", 4, "ngIf"], ["class", "col-lg-12", 4, "ngIf"], [3, "formGroupName"], ["id", "sourceCode", "type", "text", "formControlName", "columnnName", "placeholder", "Name", "value", "", 1, "form-control1", 3, "readonly"], ["formControlName", "dataType", "placeholder", "Choose DataType", "aria-label", "Default select example", 1, "form-select1", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "checkboxdiv"], ["type", "checkbox", "formControlName", "mandatory", 3, "id"], [3, "for"], [2, "display", "none"], ["type", "text", "formControlName", "headerName", "placeholder", "Header Name", "value", "", 1, "form-control1", 3, "id"], ["type", "text", "formControlName", "dateFormat", "placeholder", "Date Format", "value", "", 1, "form-control1", 3, "id"], ["type", "text", "formControlName", "excelMappingColumn", "placeholder", "Mapping Column", "value", "", 1, "form-control1", 3, "id"], ["type", "text", "formControlName", "delimeter", "placeholder", "Delimeter", "value", "", 1, "form-control1", 3, "id"], ["type", "text", "formControlName", "defaultValue", "placeholder", "Default Value", "value", "", 1, "form-control1", 3, "id"], ["type", "text", "formControlName", "repeatedTillNextValue", "placeholder", "Repeated Till Next Value", "value", "", 1, "form-control1", 3, "id"], ["href", "javascript:void(0)", "class", "deleteIcon2", 3, "click", 4, "ngIf"], [3, "value"], ["href", "javascript:void(0)", 1, "deleteIcon2", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], ["href", "javascript:void(0)", 1, "addIcon", "primarybg"], [3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], ["class", "btn smBtn minWdSmBtn btnPrimary", 3, "disabled", "click", 4, "ngIf"], ["class", "col-auto", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["color", "warn", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["class", "btn smBtn minWdSmBtn btnUpdate", "color", "primary", 3, "click", 4, "ngIf"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], [1, "fa", "fa-edit", "faClass"], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["aria-hidden", "true", 1, "fa", "fa-files-o", "faRecordStatus"], [1, "csCardStyleIcon", "csCardStyleIconBg4"], [1, "fa", "fa-check-square-o", "faClassChecker"], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], [1, "fa", "fa-shield", "faClassFirstTimeAuth"], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/authorize.svg", "alt", "...", 1, "modImage"], ["src", "assets/images/modification.svg", "alt", "...", 1, "modImage"]],
        template: function ExcelMappingEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Update/Copy Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "External System");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Process Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ExcelMappingEditComponent_div_19_Template, 6, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ExcelMappingEditComponent_div_20_Template, 9, 2, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ExcelMappingEditComponent_div_21_Template, 6, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ExcelMappingEditComponent_div_22_Template, 9, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, ExcelMappingEditComponent_div_23_Template, 4, 2, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, ExcelMappingEditComponent_div_24_Template, 4, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ExcelMappingEditComponent_div_25_Template, 5, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, ExcelMappingEditComponent_div_26_Template, 34, 6, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.updateMappingForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", !ctx.editFlag1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", !ctx.editFlag1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showFieldCurrency);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.showFieldCurrency);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showFieldsheetNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.showFieldsheetNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showFetch);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.newDataResponse);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.newDataResponse);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.newDataResponse);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
        styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\ntable.tableStyle1[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #A6AAB5;\n  font-size: 10px;\n  text-transform: uppercase;\n  border-bottom: 1px solid #F5F5F5;\n}\n\n.form-control1[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  height: 45px;\n  background-color: #f8f9fa;\n  background-clip: padding-box;\n  border: 1px solid #efefef;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.form-control1[_ngcontent-%COMP%]:disabled, .form-control1[readonly][_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.form-select1[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 2.25rem 0.375rem 0.75rem;\n  -moz-padding-start: calc(0.75rem - 3px);\n  font-size: 13px;\n  height: 45px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  background-color: #f8f9fa;\n  border: 1px solid #efefef;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.checkboxdiv[_ngcontent-%COMP%] {\n  padding-left: 25px;\n  padding-bottom: 15px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2VsLW1hcHBpbmctZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBRUEsd0VBQUE7QUFBSjs7QUFFQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFHRyxnQ0FBQTtBQURKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdFQUFBO0FBQUo7O0FBRUE7O0VBR0ksVUFBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUVBLGlQQUFBO0VBQ0EsNEJBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0VBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiZXhjZWwtbWFwcGluZy1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2xhc3Mge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzc5Nzk3OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dFxyXG59XHJcbnRhYmxlLnRhYmxlU3R5bGUxIHRoZWFkIHRyIHRoIHtcclxuXHRjb2xvcjogI0E2QUFCNTtcclxuXHRmb250LXNpemU6IDEwcHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHQvLyBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgLy8gcGFkZGluZzogMThweCAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUY1RjUgO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wxIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dFxyXG59XHJcbi5mb3JtLWNvbnRyb2wxOmRpc2FibGVkLFxyXG4uZm9ybS1jb250cm9sMVtyZWFkb25seV0ge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcclxuICAgIG9wYWNpdHk6IDFcclxufVxyXG4uZm9ybS1zZWxlY3QxIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIDIuMjVyZW0gLjM3NXJlbSAuNzVyZW07XHJcbiAgICAtbW96LXBhZGRpbmctc3RhcnQ6IGNhbGMoMC43NXJlbSAtIDNweCk7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNlJTNjcGF0aCBmaWxsPSdub25lJyBzdHJva2U9JyUyMzM0M2E0MCcgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzInIGQ9J00yIDVsNiA2IDYtNicvJTNlJTNjL3N2ZyUzZVwiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAuNzVyZW0gY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lXHJcbn1cclxuLmNoZWNrYm94ZGl2e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuIl19 */"]
      });
      /***/
    },

    /***/
    46527:
    /*!**************************************************************************************!*\
      !*** ./src/app/views/excel-mapping/excel-mapping-new/excel-mapping-new.component.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExcelMappingNewComponent": function ExcelMappingNewComponent() {
          return (
            /* binding */
            _ExcelMappingNewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/guards/can-deactivate.guard */
      50215);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ExcelMappingNewComponent_ng_option_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ng-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", data_r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r13);
        }
      }

      function ExcelMappingNewComponent_select_28_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", data_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r15);
        }
      }

      function ExcelMappingNewComponent_select_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "select", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ExcelMappingNewComponent_select_28_Template_select_change_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r16.getProcessName(ctx_r16.excelMappingForm.get("processName").value, ctx_r16.excelMappingForm.get("extSysCode").value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExcelMappingNewComponent_select_28_option_3_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", ctx_r1.editFlag ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.processName);
        }
      }

      function ExcelMappingNewComponent_input_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "input", 42);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx_r2.editFlag);
        }
      }

      function ExcelMappingNewComponent_tr_83_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r22.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r22.type);
        }
      }

      function ExcelMappingNewComponent_tr_83_a_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExcelMappingNewComponent_tr_83_a_27_Template_span_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);

            var i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r23.removeSubArray(i_r19);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ExcelMappingNewComponent_tr_83_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](1, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "select", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ExcelMappingNewComponent_tr_83_Template_select_change_5_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);

            var i_r19 = restoredCtx.index;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r26.checkTypeStatus(i_r19, ctx_r26.addForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ExcelMappingNewComponent_tr_83_option_8_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ExcelMappingNewComponent_tr_83_a_27_Template, 3, 0, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r19 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx_r3.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", ctx_r3.editFlag ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.dataTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "mandatoryCheck_", i_r19, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("for", "mandatoryCheck_", i_r19, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "headerName_", i_r19, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx_r3.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "dateFormat_", i_r19, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx_r3.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "excelMappingColumn", i_r19, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx_r3.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "delimeter_", i_r19, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx_r3.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "defaultValue_", i_r19, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx_r3.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "repeatedTillNextValue_", i_r19, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx_r3.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.editFlag);
        }
      }

      function ExcelMappingNewComponent_a_86_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExcelMappingNewComponent_a_86_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r28.addSubArray();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ExcelMappingNewComponent_div_88_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExcelMappingNewComponent_div_88_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r30.updateMappingData(ctx_r30.addForm.value, ctx_r30.excelMappingForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r5.dataSaved);
        }
      }

      function ExcelMappingNewComponent_div_89_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExcelMappingNewComponent_div_89_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r32.enableEditFlag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ExcelMappingNewComponent_div_90_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExcelMappingNewComponent_div_90_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r34.onClickOfAuth(ctx_r34.addForm.value, ctx_r34.excelMappingForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ExcelMappingNewComponent_div_91_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExcelMappingNewComponent_div_91_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r36.onClickOfDelete(ctx_r36.addForm.value, ctx_r36.excelMappingForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ExcelMappingNewComponent_div_92_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExcelMappingNewComponent_div_92_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r38.onClickOfClose(ctx_r38.addForm.value, ctx_r38.excelMappingForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ExcelMappingNewComponent_div_93_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExcelMappingNewComponent_div_93_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r40.onClickOfReopen(ctx_r40.addForm.value, ctx_r40.excelMappingForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ExcelMappingNewComponent_div_94_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExcelMappingNewComponent_div_94_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r42.finalSubmit(ctx_r42.excelMappingForm.value, ctx_r42.addForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r11.excelMappingForm.invalid || ctx_r11.addForm.controls.excelMappingDetails.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", ctx_r11.editFlag);
        }
      }

      function ExcelMappingNewComponent_div_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "i", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "img", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "i", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "First Time Authorization");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "img", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Authorization Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "img", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Modification Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r12.dataFromresponse.inputBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](26, 8, ctx_r12.dataFromresponse.inputDtStamp, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r12.dataFromresponse.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r12.dataFromresponse.authorizedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](63, 11, ctx_r12.dataFromresponse.authorizedDtStamp, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r12.dataFromresponse.firstTimeAuth);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r12.dataFromresponse.authStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r12.dataFromresponse.version);
        }
      }

      var _c0 = function _c0() {
        return ["/excel-mapping/excel-mapping-edit"];
      };

      var _c1 = function _c1() {
        return ["/dashbaord"];
      };

      var _c2 = function _c2() {
        return ["/excel-mapping"];
      };

      var _ExcelMappingNewComponent = /*#__PURE__*/function () {
        function _ExcelMappingNewComponent(apiService, fb, toastService, router, cdr, canDeactivateGuard) {
          _classCallCheck(this, _ExcelMappingNewComponent);

          this.apiService = apiService;
          this.fb = fb;
          this.toastService = toastService;
          this.router = router;
          this.cdr = cdr;
          this.canDeactivateGuard = canDeactivateGuard;
          this.extSysCode = null;
          this.excelprocess = null;
          this.submitted = false;
          this.editFlag = false;
          this.dataTypes = [{
            id: 3,
            type: 'Clob',
            isActive: false
          }, {
            id: 1,
            type: 'Date',
            isActive: true
          }, {
            id: 2,
            type: 'Number',
            isActive: false
          }, {
            id: 4,
            type: 'VarChar',
            isActive: false
          }];
          this.dataSaved = false;
          this.showUpdate = false;
          this.formTouched = true;
          this.showDialog = false;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          this.checkMandatory = false;
          this.isDateValid = false;
          this.processNameField = 'text';
        }

        _createClass(_ExcelMappingNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.excelMappingForm = this.fb.group({
            //   extCode: [""],
            //   proCode: [""],
            //   startingRow: [""],
            //   currency: [""],
            //   sheetNumber: [""],
            //   headerRepeated: [false],
            // });
            this.currentUser = localStorage.getItem("userFromLogin");
            this.excelMappingForm = this.fb.group({
              processName: [""],
              extSysCode: [""],
              extSys: [""],
              userId: [this.currentUser],
              sheetNumber: [""],
              headerRepeated: [false],
              startingRow: [""],
              currency: [""]
            });
            this.addForm = this.fb.group({
              excelMappingDetails: this.fb.array([this.getSubArray()])
            });
            this.getAllExtsysNameAndProcessCodeOnAuthStatus(); // localStorage.setItem("userIdForChangePassword", localStorage.getItem("currentUser"));

            console.log(this.currentUser);
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            // this.authStatus = this.dataFromresponse[0]?.authStatus;
            // this.recordStatus = this.dataFromresponse[0]?.recordStatus;
            // this.modifiedBy = this.dataFromresponse[0]?.modifiedBy;
            // this.modifiedTime = this.dataFromresponse[0]?.modifiedTime;
            // this.authorizedBy = this.dataFromresponse[0]?.authorizedBy;
            // this.authorizedTime = this.dataFromresponse[0]?.authorizedTime;
            // this.version = this.dataFromresponse[0]?.version;
            // console.log("AuditLog",this.authStatus,this.recordStatus,this.modifiedBy,this.authorizedBy);
            if (this.dataFromresponse.authStatus === 'U') {
              this.dataFromresponse.authStatus = 'UNAUTHORIZED';
            }

            if (this.dataFromresponse.authStatus === 'A') {
              this.dataFromresponse.authStatus = 'AUTHORIZED';
            }

            if (this.dataFromresponse.recordStatus === 'C') {
              this.dataFromresponse.recordStatus = 'CLOSED';
            }

            if (this.dataFromresponse.recordStatus === 'O') {
              this.dataFromresponse.recordStatus = 'OPEN';
            }

            if (this.dataFromresponse.firstTimeAuth === 'N') {
              this.dataFromresponse.firstTimeAuth = 'NO';
            }

            if (this.dataFromresponse.firstTimeAuth === 'Y') {
              this.dataFromresponse.firstTimeAuth = 'YES';
            }
          }
        }, {
          key: "getSubArray",
          value: function getSubArray() {
            return this.fb.group({
              // id:[''],
              columnnName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              dataType: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              mandatory: [false],
              // mandatory: [""],
              headerName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              dateFormat: [{
                value: '',
                disabled: true
              }],
              // dateFormat: [''],
              // authStatus: [''],
              // modifiedBy: [''],
              // modifiedBy: ['JILU'],
              // authorizedBy: [''],
              // version: [''],
              // modifiedTime: [''],
              // authorizedTime: [''],
              // recordStatus: [''],
              delimeter: [''],
              defaultValue: [''],
              repeatedTillNextValue: [''],
              // excelMappingColumn:[''],
              tableMappingColumn: [''],
              mappingMasterId: [''],
              excelMappingColumn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z \-#,@,%\']+')]]
            });
          }
        }, {
          key: "mandatoryRequired",
          value: function mandatoryRequired(values, index) {
            console.log(values);
            console.log(index);

            if (values == true) {
              console.log("Inside True");
              this.checkMandatory = false;
            }

            if (values == false) {
              console.log("Inside False");
            } // const value = values.currentTarget.checked;

          }
        }, {
          key: "getAllExternalSystem",
          value: function getAllExternalSystem() {
            var _this15 = this;

            this.apiService.getAllExtCode().subscribe(function (response) {
              _this15.extSysData = response;
            });
          }
        }, {
          key: "getAllExtsysNameAndProcessCodeOnAuthStatus",
          value: function getAllExtsysNameAndProcessCodeOnAuthStatus() {
            var _this16 = this;

            // this.apiService.getAllExtsysNameAndProcessCodeOnAuthStatus()
            //   .subscribe(response => {
            //     this.externalSysData=response;
            //     this.extSysData = response.extSysList.sort();
            //     console.log(this.externalSysData);
            //   });
            this.apiService.getAllExtsysNameOnAuthStatus().subscribe(function (response) {
              _this16.externalSysData = response;
              _this16.extSysData = response.sort();
            }); // const val=this.externalSysData.map.filter(item=> item.map === data);
            // console.log(val);
            // console.log(this.externalSysData.map.length);
            // for(let i = 0 ;i<=this.externalSysData.map.length;i++){
            // }
          }
        }, {
          key: "getExtSysNameByExtSysCode",
          value: function getExtSysNameByExtSysCode(extSysCode) {
            var _this17 = this;

            this.apiService.getExtSysNameByExtSysCode(extSysCode).subscribe(function (data) {
              _this17.extNameValue = data;
            });
            console.log(this.extNameValue);
          }
        }, {
          key: "getProcess",
          value: function getProcess(extSysCode) {
            var _this18 = this;

            // this.externalSystsemCodes = this.externalSysData.map[extSysCode].extSysName;
            // this.excelMappingForm.value.extSys=this.externalSysData.map[extSysCode].extSysName;
            // console.log(this.excelMappingForm.value.extSys)
            // this.excelMappingForm.get('processName').setValue(this.externalSysData.map[extSysCode].processCode);
            // this.processName=this.externalSysData.map[extSysCode].processCode;
            this.excelMappingForm.get('processName').setValue('');
            this.processNameField = 'text';
            this.processName = [];
            this.apiService.getProcessNameByExtSysCode(extSysCode).subscribe(function (response) {
              _this18.processResp = response;
              _this18.processName = _this18.processResp;

              if (_this18.processName.length === 1 && _this18.processName != undefined) {
                _this18.processNameField = 'text';

                _this18.excelMappingForm.get('processName').setValue(_this18.processName[0]);

                _this18.excelMappingForm.value.extSys = '';
              }

              if (_this18.processName.length > 1) {
                _this18.processNameField = 'select';
              }

              _this18.getExtSysNameByExtSysCode(extSysCode);
            });
          }
        }, {
          key: "getProcessName",
          value: function getProcessName(processCode, extSysCode) {
            this.extSysCode = extSysCode;
            this.excelprocess = processCode;
          }
        }, {
          key: "mandatoryCheck",
          value: function mandatoryCheck(values, i) {
            var value = values.currentTarget.checked;
            var control = this.addForm.get('excelMappingDetails');
            control.at(i).get('mandatory').setValue(value);
            console.log("value", value, i);
          }
        }, {
          key: "addSubArray",
          value: function addSubArray() {
            var control = this.addForm.controls['excelMappingDetails'];
            console.log("const control", control);
            control.push(this.getSubArray());
          }
        }, {
          key: "patchData",
          value: function patchData(formdata) {
            console.log("formdata");
            var control = this.addForm.controls['excelMappingDetails'];

            for (var i = 0; i < formdata.length; i++) {
              control.push(this.getSubArray());
            }

            this.addForm.patchValue({
              excelMappingDetails: formdata
            });
          }
        }, {
          key: "removeSubArray",
          value: function removeSubArray(i) {
            var control = this.addForm.controls['excelMappingDetails'];
            control.removeAt(i);
          }
        }, {
          key: "clearAllSubArray",
          value: function clearAllSubArray() {
            var control = this.addForm.controls['excelMappingDetails'];

            while (control.length) {
              control.removeAt(control.length - 1);
            }

            control.clearValidators();
          }
        }, {
          key: "f",
          get: function get() {
            return this.addForm.controls;
          }
        }, {
          key: "t",
          get: function get() {
            return this.f.excelMappingDetails;
          }
        }, {
          key: "checkTypeStatus",
          value: function checkTypeStatus(i, subArrayForm) {
            //console.log(i);
            var control = this.addForm.controls['excelMappingDetails'];
            var fg = control.get([i]);
            console.log(fg.value.dataType);

            if (fg.value.dataType == 'Date') {
              console.log("Dates");
              this.is_edit = false;
              fg.get('dateFormat').clearValidators();
              fg.get('dateFormat').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
              fg.get('dateFormat').updateValueAndValidity(); // this.addForm.controls['excelMappingDetails'].get('dateFormat').clearValidators();
              // this.addForm.controls['excelMappingDetails'].get('dateFormat').updateValueAndValidity();

              fg.get('dateFormat').enable();
            } else {
              fg.get('dateFormat').disable();
            }
          }
        }, {
          key: "clickFunction",
          value: function clickFunction(i) {
            console.log("i", i);
          }
        }, {
          key: "finalSubmit",
          value: function finalSubmit(excelForm, subArrayForm) {
            var _this19 = this;

            console.log(subArrayForm);
            var mandCnt = 0;

            for (var n = 0; n < subArrayForm.excelMappingDetails.length; n++) {
              console.log(subArrayForm.excelMappingDetails[n].mandatory);

              if (subArrayForm.excelMappingDetails[n].mandatory == true) {
                console.log("Inside If");
                mandCnt += 1;
              }

              console.log(mandCnt);
            }

            if (mandCnt < 2) {
              console.log("More than 2 rows");
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                text: 'Add atleast two mininum rows with mandatory condition',
                icon: 'info'
              }); // this.toast.error(`Add atleast two min rows with mandatory condition`, '', {
              //   timeOut: 3000,
              //   progressBar: true,
              //   tapToDismiss: true,
              //   closeButton: true,
              //   easeTime: 300,
              //   extendedTimeOut: 1000
              // });
              // return;
            } else {
              excelForm.extSys = this.extNameValue;
              this.submitted = true;
              subArrayForm.excelMappingDetails[0].modifiedBy = this.currentUser;
              var obj = Object.assign(Object.assign({}, excelForm), subArrayForm); // console.log(obj);
              // this.apiService.columnData(subArrayForm, this.extCodeValue, this.proCodeValue, this.isCheckedValue, this.startingValue, this.extCodeValue, this.currencyValue, this.currentUser, this.sheetNumberValue)

              this.apiService.createTemplateMap(obj).subscribe(function (response) {
                _this19.dataFromresponse = response;
                console.log("this.dataFromresponse", _this19.dataFromresponse);

                if (_this19.dataFromresponse) {
                  _this19.is_edit = true;
                  console.log("sucess");

                  _this19.auditLog();

                  _this19.formTouched = !_this19.excelMappingForm.touched;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Mapped Successfully!',
                    icon: 'success'
                  });
                  _this19.editFlag = true; // this.excelMappingForm.reset();
                  // this.addForm.reset();

                  return;
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Mapping Failed!',
                    icon: 'error'
                  });
                } // Failed ExternalSystem And ProcessCode Already Mapped!

              }, function (error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: error.error.message,
                  icon: 'error'
                });
              });
            }
          }
        }, {
          key: "enableEditFlag",
          value: function enableEditFlag() {
            this.editFlag = false;
            this.showUpdate = true; // this.showCurrencyDropdown = true;
          }
        }, {
          key: "canExit",
          value: function canExit() {
            var _this20 = this;

            var isExit = false;

            if (this.excelMappingForm.touched && this.formTouched == true) {
              return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                text: 'There are unsaved changes in the screen. Would you like to navigate to other screen?',
                showCancelButton: true,
                confirmButtonColor: '#E6224A',
                cancelButtonColor: '#011945',
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                icon: 'info'
              }).then(function (result) {
                if (result.isConfirmed === true) {
                  isExit = true;

                  _this20.cdr.markForCheck();

                  return isExit;
                } else {
                  isExit = false;

                  _this20.cdr.markForCheck();

                  return isExit;
                }
              });
            } else {
              isExit = true;
              return new Promise(function (resolve, reject) {
                if (isExit === true) {
                  isExit = true;

                  _this20.cdr.markForCheck();

                  resolve(true);
                }
              });
            }
          }
        }, {
          key: "onClickOfReopen",
          value: function onClickOfReopen(addForm, updateForm) {
            var _this21 = this;

            this.extCodeValue = updateForm.extSysCode;
            this.extNameValue = updateForm.extSysCode;
            this.proCodeValue = updateForm.processName;
            this.currencyValue = updateForm.currency;
            this.currentUser = this.dataFromresponse.inputBy;
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to re-open record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                // this.apiService.onClcikOfReopenOfUpdateExcelMapping(addForm,this.extCodeValue,this.proCodeValue,this.extNameValue,this.currencyValue)
                _this21.apiService.excelMappingAuditLog(_this21.dataFromresponse, 'reopen').subscribe(function (openResp) {
                  var _a, _b, _c, _d, _e, _f, _g;

                  console.log(openResp);
                  _this21.dataFromresponse = openResp;

                  if (_this21.dataFromresponse) {
                    _this21.authStatus = (_a = _this21.dataFromresponse) === null || _a === void 0 ? void 0 : _a.authStatus;
                    _this21.recordStatus = (_b = _this21.dataFromresponse) === null || _b === void 0 ? void 0 : _b.recordStatus;
                    _this21.modifiedBy = (_c = _this21.dataFromresponse) === null || _c === void 0 ? void 0 : _c.inputBy;
                    _this21.modifiedTime = (_d = _this21.dataFromresponse) === null || _d === void 0 ? void 0 : _d.inputDtStamp;
                    _this21.authorizedBy = (_e = _this21.dataFromresponse) === null || _e === void 0 ? void 0 : _e.authorizedBy;
                    _this21.authorizedTime = (_f = _this21.dataFromresponse) === null || _f === void 0 ? void 0 : _f.authorizedTime;
                    _this21.version = (_g = _this21.dataFromresponse) === null || _g === void 0 ? void 0 : _g.version;

                    if (_this21.authStatus === 'U') {
                      _this21.authStatus = 'UNAUTHORIZED';
                    }

                    if (_this21.authStatus === 'A') {
                      _this21.authStatus = 'AUTHORIZED';
                    }

                    if (_this21.recordStatus === 'C') {
                      _this21.recordStatus = 'CLOSED';
                    }

                    if (_this21.recordStatus === 'O') {
                      _this21.recordStatus = 'OPEN';
                    }

                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Reopened',
                      icon: 'success'
                    });

                    _this21.auditLog();
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Reopen the Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "onClickOfDelete",
          value: function onClickOfDelete(addForm, updateform) {
            var _this22 = this;

            console.log(this.dataFromresponse);
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to delete record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this22.apiService.deleteTemplateMapping(_this22.dataFromresponse.extSys, _this22.dataFromresponse.processName, _this22.dataFromresponse.currency, _this22.dataFromresponse.sheetNumber).subscribe(function (deleteRsp) {
                  // console.log(deleteRsp);
                  if (deleteRsp == true) {
                    // Swal.fire({
                    //   title: 'Record is Closed',
                    //   icon: 'success'
                    // });
                    // this.router.navigate(['/excel-mapping']);
                    console.log(_this22.excelMappingForm.touched);
                    console.log(_this22.formTouched == true);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: "Role is Deleted",
                      icon: 'success'
                    }).then(function (result) {
                      _this22.router.navigate(['/excel-mapping']);
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Delete the Recored!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "onClickOfClose",
          value: function onClickOfClose(addForm, updateForm) {
            var _this23 = this;

            // console.log(addForm);
            // console.log(updateForm);
            // this.extCodeValue =  updateForm.extSysCode;
            // this.extNameValue =  updateForm.extSysCode;
            // this.proCodeValue =  updateForm.processName;
            // this.currencyValue = updateForm.currency;
            //  this.currentUser = this.newDataResponse.inputBy;
            //  console.log(this.extCodeValue);
            //  console.log(this.extNameValue);
            //  console.log(this.proCodeValue);
            //  console.log(this.currencyValue);
            //  console.log(this.currentUser);
            console.log(this.dataFromresponse);
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              text: 'You are trying to Close the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#E6224A',
              cancelButtonColor: '#011945',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              icon: 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                // this.apiService.onClcikOFCloseOfUpdateExcelMApping(addForm,this.extCodeValue,this.proCodeValue,this.extNameValue,this.currencyValue)
                _this23.apiService.excelMappingAuditLog(_this23.dataFromresponse, 'close').subscribe(function (closeResp) {
                  var _a, _b, _c, _d, _e, _f, _g;

                  console.log(closeResp);
                  _this23.dataFromresponse = closeResp;

                  if (_this23.dataFromresponse) {
                    _this23.authStatus = (_a = _this23.dataFromresponse) === null || _a === void 0 ? void 0 : _a.authStatus;
                    _this23.recordStatus = (_b = _this23.dataFromresponse) === null || _b === void 0 ? void 0 : _b.recordStatus;
                    _this23.modifiedBy = (_c = _this23.dataFromresponse) === null || _c === void 0 ? void 0 : _c.inputBy;
                    _this23.modifiedTime = (_d = _this23.dataFromresponse) === null || _d === void 0 ? void 0 : _d.inputDtStamp;
                    _this23.authorizedBy = (_e = _this23.dataFromresponse) === null || _e === void 0 ? void 0 : _e.authorizedBy;
                    _this23.authorizedTime = (_f = _this23.dataFromresponse) === null || _f === void 0 ? void 0 : _f.authorizedTime;
                    _this23.version = (_g = _this23.dataFromresponse) === null || _g === void 0 ? void 0 : _g.version;

                    if (_this23.authStatus === 'U') {
                      _this23.authStatus = 'UNAUTHORIZED';
                    }

                    if (_this23.authStatus === 'A') {
                      _this23.authStatus = 'AUTHORIZED';
                    }

                    if (_this23.recordStatus === 'C') {
                      _this23.recordStatus = 'CLOSED';
                    }

                    if (_this23.recordStatus === 'O') {
                      _this23.recordStatus = 'OPEN';
                    }

                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Closed',
                      icon: 'success'
                    });

                    _this23.auditLog();
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Close the Recored!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "updateMappingData",
          value: function updateMappingData(subArrayForm, excelForm) {
            var _this24 = this;

            this.submitted = true;
            this.progress = true; // this.extCodeValue =  excelForm.extSysCode;
            // this.proCodeValue =  excelForm.processName;
            // this.isCheckedValue =  excelForm.headerRepeated;
            // this.startingValue = excelForm.startingRow;
            // this.currencyValue = excelForm.currency;
            // this.sheetNumberValue = excelForm.sheetNumber;

            var modifiedBy = subArrayForm.excelMappingDetails[0].modifiedBy;
            modifiedBy = this.currentUser;
            subArrayForm.excelMappingDetails[0].excelMappingColumn = subArrayForm.excelMappingDetails[0].mappingColumn;
            var obj = Object.assign(Object.assign({}, excelForm), subArrayForm);

            if (this.addForm.invalid) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                text: 'Numeric values not allowed in mapping column!',
                icon: 'warning'
              });
              return;
            } // this.apiService.updateMappingData(subArrayForm,this.extCodeValue,this.proCodeValue,this.extCodeValue,
            //   this.startingValue,this.isCheckedValue,this.currentUser,this.currencyValue,this.sheetNumberValue)


            this.apiService.createTemplateMap(obj).subscribe(function (updateData) {
              _this24.dataFromresponse = updateData;
              console.log(_this24.dataFromresponse);

              if (_this24.dataFromresponse) {
                _this24.editFlag = false; // this.showCurrencyDropdown = false;

                _this24.dataSaved = true; // this.auditLog();

                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Record is Updated!',
                  icon: 'success'
                });
                _this24.formTouched = !_this24.excelMappingForm.touched;

                _this24.cdr.markForCheck();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Failed to update ',
                  icon: 'error'
                });
              }
            });
          }
        }, {
          key: "onClickOfAuth",
          value: function onClickOfAuth(addForm, updateForm) {
            var _a;

            this.currentUser = localStorage.getItem("userFromLogin");
            console.log("this.currentUser", this.currentUser, addForm, updateForm);
            this.extCodeValue = updateForm.extSysCode;
            this.extNameValue = updateForm.extSysCode;
            this.proCodeValue = updateForm.processName;
            this.currencyValue = updateForm.currency;
            this.modifiedBy = (_a = this.dataFromresponse[0]) === null || _a === void 0 ? void 0 : _a.modifiedBy;

            if (this.modifiedBy === this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Maker Cannot Authorized the Record!',
                icon: 'error'
              });
            } // else {
            //   Swal.fire(
            //     {
            //       text: 'You are trying to Authorize the record. ' + ' Do you want to proceed?',
            //       showCancelButton: true,
            //       confirmButtonColor: '#E6224A',
            //       cancelButtonColor: '#011945',
            //       cancelButtonText: 'NO',
            //       confirmButtonText: 'YES',
            //       icon:'info'
            //     }
            //   ).then((result => {
            //     if(result.isConfirmed=== true){
            //   this.apiService.onAuthorizingTheRecordOfExcelMApping(addForm,this.extNameValue,this.proCodeValue,this.extCodeValue, this.currentUser,this.currencyValue)
            //   .subscribe(authResp => {
            //     this.dataFromresponse = authResp;
            //     if(this.dataFromresponse){
            //       this.authStatus = this.dataFromresponse?.authStatus;
            //       this.recordStatus = this.dataFromresponse?.recordStatus;
            //       this.modifiedBy = this.dataFromresponse?.modifiedBy;
            //       this.modifiedTime = this.dataFromresponse?.modifiedTime;
            //       this.authorizedBy = this.dataFromresponse?.authorizedBy;
            //       this.authorizedTime = this.dataFromresponse?.authorizedTime;
            //       this.version = this.dataFromresponse?.version;
            //       this.modifiedBy = this.dataFromresponse?.inputBy;
            //       if (this.authStatus === 'U') {
            //         this.authStatus = 'UNAUTHORIZED';
            //       }
            //       if (this.authStatus === 'A') {
            //         this.authStatus = 'AUTHORIZED';
            //       }
            //       if (this.recordStatus === 'C') {
            //         this.recordStatus = 'CLOSED';
            //       }
            //       if (this.recordStatus === 'O') {
            //         this.recordStatus = 'OPEN';
            //       }
            //       Swal.fire({
            //         title: 'Record is Authorized',
            //         icon: 'success'
            //       });
            //     }
            //   })
            // }}));
            // }

          }
        }, {
          key: "letterOnly",
          value: function letterOnly(event) {
            var charCode = event.keyCode;
            if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123 || charCode == 8) return true;else return false;
          }
        }]);

        return _ExcelMappingNewComponent;
      }();

      _ExcelMappingNewComponent.ɵfac = function ExcelMappingNewComponent_Factory(t) {
        return new (t || _ExcelMappingNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__.CanDeactivateGuard));
      };

      _ExcelMappingNewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _ExcelMappingNewComponent,
        selectors: [["npr-excel-mapping-new"]],
        decls: 99,
        vars: 27,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], ["href", "excel-mapping-new.html", "routerLinkActive", "router-link-active", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink"], ["href", "javascript:void(0)", "routerLinkActive", "router-link-active", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-4"], ["for", "extSystem", 1, "formLbl"], [1, "colorRed"], ["id", "outlineNgSelect", "formControlName", "extSysCode", "required", "", "aria-label", "Default select example", 2, "width", "100% !important", 3, "clearable", "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["class", "form-class", 3, "value", 4, "ngFor", "ngForOf"], ["for", "processName", 1, "formLbl"], ["class", "form-select", "formControlName", "processName", "required", "", "aria-label", "Default select example", 3, "change", 4, "ngIf"], ["type", "text", "formControlName", "processName", "required", "", "class", "form-control", "placeholder", "Process Code", "value", "", 3, "readonly", 4, "ngIf"], ["for", "startingRow", 1, "formLbl"], ["id", "startingRow", "type", "number", "formControlName", "startingRow", "required", "", "placeholder", "Data Starting Row", "value", "", 1, "form-control", 3, "readonly"], ["for", "currency", 1, "formLbl"], ["id", "currency", "type", "text", "formControlName", "currency", "name", "currency", "required", "", "placeholder", "Currency", "value", "", "minlength", "1", "maxlength", "3", "onkeydown", "/[A-Z]/i.test(event.key)", "oninput", "this.value = this.value.toUpperCase()", 1, "form-control", 3, "readonly", "keypress"], ["for", "sheetNumber", 1, "formLbl"], ["id", "sheetNumber", "type", "number", "formControlName", "sheetNumber", "placeholder", "Sheet Number", "value", "", 1, "form-control", 3, "readonly"], [1, "checkStyle"], ["type", "checkbox", "id", "fcyRate", "formControlName", "headerRepeated"], ["for", "fcyRate"], ["action", "", "novalidate", "", 1, "formStyle", 3, "formGroup"], [1, "titleStyle", "mt-2", "mb-4"], [1, "pageTitle", "darkgreyClr"], [1, "table-responsive"], ["id", "dbTable1", 1, "table", "tableStyle1", "responsive", "nowrap", "vAlignMdl"], ["formArrayName", "excelMappingDetails"], [4, "ngFor", "ngForOf"], ["class", "addIcon primarybg", 3, "click", 4, "ngIf"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], ["class", "col-auto", 4, "ngIf"], ["routerLinkActive", "router-link-active", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle", 4, "ngIf"], [1, "form-class", 3, "value"], ["formControlName", "processName", "required", "", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["type", "text", "formControlName", "processName", "required", "", "placeholder", "Process Code", "value", "", 1, "form-control", 3, "readonly"], [3, "formGroupName"], ["id", "sourceCode", "type", "text", "formControlName", "columnnName", "placeholder", "Name", "value", "", 1, "form-control", 3, "readonly"], ["formControlName", "dataType", "placeholder", "Choose DataType", "aria-label", "Default select example", 1, "form-select", 3, "change"], [1, "checkboxdiv"], ["type", "checkbox", "formControlName", "mandatory", 3, "id"], [3, "for"], ["type", "text", "formControlName", "headerName", "placeholder", "Header Name", "value", "", 1, "form-control", 3, "id", "readonly"], ["type", "text", "formControlName", "dateFormat", "placeholder", "Date Format", "value", "", 1, "form-control", 3, "id", "readonly"], ["type", "text", "formControlName", "excelMappingColumn", "placeholder", "Mapping Column", "value", "", 1, "form-control", 3, "id", "readonly"], ["type", "text", "formControlName", "delimeter", "placeholder", "Delimeter", "value", "", 1, "form-control", 3, "id", "readonly"], ["type", "text", "formControlName", "defaultValue", "placeholder", "Default Value", "value", "", 1, "form-control", 3, "id", "readonly"], ["type", "text", "formControlName", "repeatedTillNextValue", "placeholder", "Repeated Till Next Value", "value", "", 1, "form-control", 3, "id", "readonly"], ["class", "deleteIcon2", 4, "ngIf"], [1, "deleteIcon2"], [3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "addIcon", "primarybg", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["cclass", "btn smBtn minWdSmBtn btnPrimary", "color", "primary", 3, "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], [1, "fa", "fa-edit", "faClass"], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["aria-hidden", "true", 1, "fa", "fa-files-o", "faRecordStatus"], [1, "csCardStyleIcon", "csCardStyleIconBg4"], [1, "fa", "fa-check-square-o", "faClassChecker"], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], [1, "fa", "fa-shield", "faClassFirstTimeAuth"], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/authorize.svg", "alt", "...", 1, "modImage"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."]],
        template: function ExcelMappingNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Template Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Update Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "External System Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ng-select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ExcelMappingNewComponent_Template_ng_select_change_19_listener() {
              return ctx.getProcess(ctx.excelMappingForm.get("extSysCode").value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ng-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Please select External System");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ExcelMappingNewComponent_ng_option_22_Template, 2, 2, "ng-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Process Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ExcelMappingNewComponent_select_28_Template, 4, 2, "select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ExcelMappingNewComponent_input_29_Template, 1, 1, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Data Starting Row");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function ExcelMappingNewComponent_Template_input_keypress_41_listener($event) {
              return ctx.letterOnly($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Sheet Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Is Header Present");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "form", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "h2", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Select Minimum two mandatory row");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "table", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "data type");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "mandatory");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "header name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "date format");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "mapping column");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "delimeter");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "default value");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "repeated till next value");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "tbody", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](83, ExcelMappingNewComponent_tr_83_Template, 28, 19, "tr", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](86, ExcelMappingNewComponent_a_86_Template, 3, 0, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](88, ExcelMappingNewComponent_div_88_Template, 3, 1, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](89, ExcelMappingNewComponent_div_89_Template, 3, 0, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](90, ExcelMappingNewComponent_div_90_Template, 3, 0, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](91, ExcelMappingNewComponent_div_91_Template, 3, 0, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](92, ExcelMappingNewComponent_div_92_Template, 3, 0, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](93, ExcelMappingNewComponent_div_93_Template, 3, 0, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](94, ExcelMappingNewComponent_div_94_Template, 3, 2, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](98, ExcelMappingNewComponent_div_98_Template, 100, 14, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](24, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](25, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.excelMappingForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("clearable", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", ctx.editFlag ? "" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.extSysData);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.processNameField === "select");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.processNameField === "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", ctx.editFlag ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.addForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.addForm.get("excelMappingDetails")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showUpdate);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dataFromresponse && !ctx.showUpdate);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dataFromresponse && (ctx.dataFromresponse.authStatus == "U" || ctx.dataFromresponse.authStatus == "UNAUTHORIZED") && !ctx.showUpdate);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dataFromresponse && (ctx.dataFromresponse.firstTimeAuth == "N" || ctx.dataFromresponse.firstTimeAuth == "NO") && (ctx.dataFromresponse.recordStatus == "O" || ctx.dataFromresponse.recordStatus == "OPEN") && !ctx.showUpdate);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dataFromresponse && (ctx.dataFromresponse.recordStatus == "O" || ctx.dataFromresponse.recordStatus == "OPEN") && (ctx.dataFromresponse.firstTimeAuth == "Y" || ctx.dataFromresponse.firstTimeAuth == "YES") && !ctx.showUpdate);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dataFromresponse && (ctx.dataFromresponse.recordStatus == "C" || ctx.dataFromresponse.recordStatus == "CLOSED") && (ctx.dataFromresponse.firstTimeAuth == "Y" || ctx.dataFromresponse.firstTimeAuth == "YES") && !ctx.showUpdate);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.dataFromresponse);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](26, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dataFromresponse);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
        styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\ntable.tableStyle1[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #A6AAB5;\n  font-size: 10px;\n  text-transform: uppercase;\n  border-bottom: 1px solid #F5F5F5;\n}\n\n.form-control1[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 10px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.form-control1[_ngcontent-%COMP%]:disabled, .form-control1[readonly][_ngcontent-%COMP%] {\n  background-color: #fff;\n  opacity: 1;\n}\n\n.checkboxdiv[_ngcontent-%COMP%] {\n  padding-left: 25px;\n  padding-bottom: 15px;\n  cursor: pointer;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  pointer-events: all !important;\n}\n\n.madatoryLabel[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2VsLW1hcHBpbmctbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3RUFBQTtBQUFKOztBQUVBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUdHLGdDQUFBO0FBREo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3RUFBQTtBQUFKOztBQUVBOztFQUVJLHNCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQXNCQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBbkJKOztBQXVCQTtFQUNJLG1CQUFBO0VBQ0EsOEJBQUE7QUFwQko7O0FBdUJBO0VBRUksYUFBQTtBQXJCSiIsImZpbGUiOiJleGNlbC1tYXBwaW5nLW5ldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNsYXNzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM3OTc5Nzk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXRcclxufVxyXG50YWJsZS50YWJsZVN0eWxlMSB0aGVhZCB0ciB0aCB7XHJcblx0Y29sb3I6ICNBNkFBQjU7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Ly8gbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIC8vIHBhZGRpbmc6IDE4cHggMTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjVGNUY1IDtcclxufVxyXG4uZm9ybS1jb250cm9sMSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXRcclxufVxyXG4uZm9ybS1jb250cm9sMTpkaXNhYmxlZCxcclxuLmZvcm0tY29udHJvbDFbcmVhZG9ubHldIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBvcGFjaXR5OiAxXHJcbn1cclxuLy8gLmZvcm0tc2VsZWN0MSB7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgcGFkZGluZzogLjM3NXJlbSAyLjI1cmVtIC4zNzVyZW0gLjc1cmVtO1xyXG4vLyAgICAgLW1vei1wYWRkaW5nLXN0YXJ0OiBjYWxjKDAuNzVyZW0gLSAzcHgpO1xyXG4vLyAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbi8vICAgICBjb2xvcjogIzIxMjUyOTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyUzZSUzY3BhdGggZmlsbD0nbm9uZScgc3Ryb2tlPSclMjMzNDNhNDAnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNMiA1bDYgNiA2LTYnLyUzZSUzYy9zdmclM2VcIik7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4vLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgLjc1cmVtIGNlbnRlcjtcclxuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxMnB4O1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuLy8gICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcbi8vICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbi8vICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbi8vICAgICBhcHBlYXJhbmNlOiBub25lXHJcbi8vIH1cclxuLmNoZWNrYm94ZGl2e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuLm1hZGF0b3J5TGFiZWxcclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    87904:
    /*!*********************************************************************!*\
      !*** ./src/app/views/excel-mapping/excel-mapping-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExcelMappingRoutingModule": function ExcelMappingRoutingModule() {
          return (
            /* binding */
            _ExcelMappingRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/guards/can-deactivate.guard */
      50215);
      /* harmony import */


      var _excel_mapping_edit_excel_mapping_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./excel-mapping-edit/excel-mapping-edit.component */
      43728);
      /* harmony import */


      var _excel_mapping_new_excel_mapping_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./excel-mapping-new/excel-mapping-new.component */
      46527);
      /* harmony import */


      var _excel_mapping_excel_mapping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./excel-mapping/excel-mapping.component */
      41987);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "",
        component: _excel_mapping_excel_mapping_component__WEBPACK_IMPORTED_MODULE_3__.ExcelMappingComponent
      }, {
        path: "excel-mapping-new",
        component: _excel_mapping_new_excel_mapping_new_component__WEBPACK_IMPORTED_MODULE_2__.ExcelMappingNewComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }, {
        path: "excel-mapping-edit",
        component: _excel_mapping_edit_excel_mapping_edit_component__WEBPACK_IMPORTED_MODULE_1__.ExcelMappingEditComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }];

      var _ExcelMappingRoutingModule = /*#__PURE__*/_createClass(function _ExcelMappingRoutingModule() {
        _classCallCheck(this, _ExcelMappingRoutingModule);
      });

      _ExcelMappingRoutingModule.ɵfac = function ExcelMappingRoutingModule_Factory(t) {
        return new (t || _ExcelMappingRoutingModule)();
      };

      _ExcelMappingRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _ExcelMappingRoutingModule
      });
      _ExcelMappingRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_ExcelMappingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    18745:
    /*!*************************************************************!*\
      !*** ./src/app/views/excel-mapping/excel-mapping.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExcelMappingModule": function ExcelMappingModule() {
          return (
            /* binding */
            _ExcelMappingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _excel_mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./excel-mapping-routing.module */
      87904);
      /* harmony import */


      var _excel_mapping_excel_mapping_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./excel-mapping/excel-mapping.component */
      41987);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _excel_mapping_new_excel_mapping_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./excel-mapping-new/excel-mapping-new.component */
      46527);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _excel_mapping_edit_excel_mapping_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./excel-mapping-edit/excel-mapping-edit.component */
      43728);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ExcelMappingModule = /*#__PURE__*/_createClass(function _ExcelMappingModule() {
        _classCallCheck(this, _ExcelMappingModule);
      });

      _ExcelMappingModule.ɵfac = function ExcelMappingModule_Factory(t) {
        return new (t || _ExcelMappingModule)();
      };

      _ExcelMappingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _ExcelMappingModule
      });
      _ExcelMappingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _excel_mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExcelMappingRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_ExcelMappingModule, {
          declarations: [_excel_mapping_excel_mapping_component__WEBPACK_IMPORTED_MODULE_1__.ExcelMappingComponent, _excel_mapping_new_excel_mapping_new_component__WEBPACK_IMPORTED_MODULE_3__.ExcelMappingNewComponent, _excel_mapping_edit_excel_mapping_edit_component__WEBPACK_IMPORTED_MODULE_4__.ExcelMappingEditComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _excel_mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExcelMappingRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule]
        });
      })();
      /***/

    },

    /***/
    41987:
    /*!******************************************************************************!*\
      !*** ./src/app/views/excel-mapping/excel-mapping/excel-mapping.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExcelMappingComponent": function ExcelMappingComponent() {
          return (
            /* binding */
            _ExcelMappingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-datatables */
      50481);

      var _c0 = function _c0() {
        return ["/excel-mapping/excel-mapping-new"];
      };

      function ExcelMappingComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.roleCodes["new"].labelDescription);
        }
      }

      function ExcelMappingComponent_tr_33_button_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExcelMappingComponent_tr_33_button_22_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);

            var exdata_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r7.close(exdata_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ExcelMappingComponent_tr_33_button_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExcelMappingComponent_tr_33_button_23_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);

            var exdata_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r10.open(exdata_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ExcelMappingComponent_tr_33_button_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExcelMappingComponent_tr_33_button_24_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);

            var exdata_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r13["delete"](exdata_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ExcelMappingComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExcelMappingComponent_tr_33_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);

            var exdata_r3 = restoredCtx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r16.setDataFromSummaryToUpdateExcelMapping(exdata_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExcelMappingComponent_tr_33_Template_button_click_20_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);

            var exdata_r3 = restoredCtx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r18.auth(exdata_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ExcelMappingComponent_tr_33_button_22_Template, 2, 0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, ExcelMappingComponent_tr_33_button_23_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, ExcelMappingComponent_tr_33_button_24_Template, 2, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var exdata_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](exdata_r3.processName);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](exdata_r3.extSysCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](exdata_r3.extSys);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](exdata_r3.currency);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](exdata_r3.sheetNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](exdata_r3.authStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](exdata_r3.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](18, 12, exdata_r3.inputDtStamp, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !(exdata_r3.authStatus == "U" || exdata_r3.authStatus == "UNAUTHORIZED" || exdata_r3.authStatus == "Unauthorized"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", exdata_r3.recordStatus == "O" || exdata_r3.recordStatus == "Open" || exdata_r3.recordStatus == "OPEN");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", exdata_r3.recordStatus == "C" || exdata_r3.recordStatus == "CLOSED" || exdata_r3.recordStatus == "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", exdata_r3.firstTimeAuth == "N" || exdata_r3.firstTimeAuth == "NO");
        }
      }

      function ExcelMappingComponent_ng_container_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }
      }

      var _c1 = function _c1() {
        return ["/dashboard"];
      };

      var _ExcelMappingComponent = /*#__PURE__*/function () {
        function _ExcelMappingComponent(apiService, roleService, toastService, router) {
          _classCallCheck(this, _ExcelMappingComponent);

          this.apiService = apiService;
          this.roleService = roleService;
          this.toastService = toastService;
          this.router = router;
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
          this.isLoading = false;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
          this.statusArr = ['Authorized', 'Unauthorized', 'Open', 'Close'];
        }

        _createClass(_ExcelMappingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                targets: [7]
              }],
              order: [[7, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, 30, -1], [5, 10, 20, 30, "ALL"]]
            };
            this.currentUser = localStorage.getItem("userFromLogin");
            this.getexcelMappingSummary();
            this.roleService.fetchScreenPermissions('Template Mapping');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this25.roleCodes = message;
            });
            console.log(this.roleCodes);
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.excelMappingSummary.authStatus == 'U' || this.excelMappingSummary.authStatus == 'Unauthorized') {
              this.excelMappingSummary.authStatus = 'UNAUTHORIZED';
            }

            if (this.excelMappingSummary.authStatus == 'A' || this.excelMappingSummary.authStatus == 'Authorized') {
              this.excelMappingSummary.authStatus = 'AUTHORIZED';
            }

            if (this.excelMappingSummary.recordStatus == 'O') {
              this.excelMappingSummary.recordStatus = 'OPEN';
            }

            if (this.excelMappingSummary.recordStatus == 'C') {
              this.excelMappingSummary.recordStatus = 'CLOSED';
            }

            if (this.excelMappingSummary.verifiedOnce == 'N') {
              console.log("NO");
              this.excelMappingSummary.verifiedOnce = 'NO';
            }

            if (this.excelMappingSummary.verifiedOnce == 'Y') {
              this.excelMappingSummary.verifiedOnce = 'YES';
            }
          }
        }, {
          key: "getexcelMappingSummary",
          value: function getexcelMappingSummary() {
            var _this26 = this;

            this.isLoading = true;
            this.apiService.getMappingSummary().subscribe(function (data) {
              console.log(data);
              _this26.mappingResponse = data;

              var _iterator = _createForOfIteratorHelper(data.result),
                  _step;

              try {
                var _loop = function _loop() {
                  var exdata = _step.value;
                  exdata.authStatus = _this26.statusArr.find(function (i) {
                    return i.startsWith(exdata.authStatus);
                  });
                  exdata.recordStatus = _this26.statusArr.find(function (i) {
                    return i.startsWith(exdata.recordStatus);
                  });
                };

                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              _this26.excelData = data.result;
              console.log(_this26.excelData);
              _this26.isLoading = false;

              _this26.dtTrigger.next();
            });
          }
        }, {
          key: "close",
          value: function close(exdata) {
            var _this27 = this;

            console.log(exdata);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Close the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                // this.apiService.onClcikOFCloseOfUpdateExcelMApping(addForm,this.extCodeValue,this.proCodeValue,this.extNameValue,this.currencyValue)
                _this27.apiService.excelMappingAuditLog(exdata, 'close').subscribe(function (closeResp) {
                  var _a, _b, _c, _d, _e, _f, _g;

                  console.log(closeResp);
                  _this27.newDataResponse = closeResp;

                  if (_this27.newDataResponse) {
                    _this27.authStatus = (_a = _this27.newDataResponse) === null || _a === void 0 ? void 0 : _a.authStatus;
                    _this27.recordStatus = (_b = _this27.newDataResponse) === null || _b === void 0 ? void 0 : _b.recordStatus;
                    _this27.modifiedBy = (_c = _this27.newDataResponse) === null || _c === void 0 ? void 0 : _c.inputBy;
                    _this27.modifiedTime = (_d = _this27.newDataResponse) === null || _d === void 0 ? void 0 : _d.inputDtStamp;
                    _this27.authorizedBy = (_e = _this27.newDataResponse) === null || _e === void 0 ? void 0 : _e.authorizedBy;
                    _this27.authorizedTime = (_f = _this27.newDataResponse) === null || _f === void 0 ? void 0 : _f.authorizedTime;
                    _this27.version = (_g = _this27.newDataResponse) === null || _g === void 0 ? void 0 : _g.version;

                    if (_this27.authStatus === 'U') {
                      _this27.authStatus = 'UNAUTHORIZED';
                    }

                    if (_this27.authStatus === 'A') {
                      _this27.authStatus = 'AUTHORIZED';
                    }

                    if (_this27.recordStatus === 'C') {
                      _this27.recordStatus = 'CLOSED';
                    }

                    if (_this27.recordStatus === 'O') {
                      _this27.recordStatus = 'OPEN';
                    }

                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record is  Closed',
                      icon: 'success'
                    }).then(function () {
                      return window.location.reload();
                    }); // this.getexcelMappingSummary();

                    _this27.auditLog();
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Failed to Close the Recored!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "open",
          value: function open(exdata) {
            var _this28 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to re-open record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                // this.apiService.onClcikOfReopenOfUpdateExcelMapping(addForm,this.extCodeValue,this.proCodeValue,this.extNameValue,this.currencyValue)
                _this28.apiService.excelMappingAuditLog(exdata, 'reopen').subscribe(function (openResp) {
                  var _a, _b, _c, _d, _e, _f, _g;

                  console.log(openResp);
                  _this28.newDataResponse = openResp;

                  if (_this28.newDataResponse) {
                    _this28.authStatus = (_a = _this28.newDataResponse) === null || _a === void 0 ? void 0 : _a.authStatus;
                    _this28.recordStatus = (_b = _this28.newDataResponse) === null || _b === void 0 ? void 0 : _b.recordStatus;
                    _this28.modifiedBy = (_c = _this28.newDataResponse) === null || _c === void 0 ? void 0 : _c.inputBy;
                    _this28.modifiedTime = (_d = _this28.newDataResponse) === null || _d === void 0 ? void 0 : _d.inputDtStamp;
                    _this28.authorizedBy = (_e = _this28.newDataResponse) === null || _e === void 0 ? void 0 : _e.authorizedBy;
                    _this28.authorizedTime = (_f = _this28.newDataResponse) === null || _f === void 0 ? void 0 : _f.authorizedTime;
                    _this28.version = (_g = _this28.newDataResponse) === null || _g === void 0 ? void 0 : _g.version;

                    if (_this28.authStatus === 'U') {
                      _this28.authStatus = 'UNAUTHORIZED';
                    }

                    if (_this28.authStatus === 'A') {
                      _this28.authStatus = 'AUTHORIZED';
                    }

                    if (_this28.recordStatus === 'C') {
                      _this28.recordStatus = 'CLOSED';
                    }

                    if (_this28.recordStatus === 'O') {
                      _this28.recordStatus = 'OPEN';
                    }

                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record is Reopened',
                      icon: 'success'
                    }).then(function () {
                      return window.location.reload();
                    });

                    _this28.auditLog();
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Failed to Reopen the Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete(exdata) {
            console.log(exdata);
          }
        }, {
          key: "auth",
          value: function auth(exdata) {
            var _this29 = this;

            console.log(exdata);
            this.currentUser = localStorage.getItem("userFromLogin");

            if (this.modifiedBy === this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: 'Maker Cannot Authorized the Record!',
                icon: 'error'
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: 'You are trying to Authorize the record. ' + ' Do you want to proceed?',
                showCancelButton: true,
                confirmButtonColor: '#E6224A',
                cancelButtonColor: '#011945',
                // confirmButtonText: 'PROCEED.'
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                icon: 'info'
              }).then(function (result) {
                if (result.isConfirmed === true) {
                  // this.apiService.onAuthorizingTheRecordOfExcelMApping(addForm,this.extNameValue,this.proCodeValue,this.extCodeValue, this.currentUser,this.currencyValue)
                  _this29.apiService.excelMappingAuditLog(exdata, 'authorize').subscribe(function (authResp) {
                    var _a, _b, _c, _d, _e, _f, _g, _h;

                    _this29.newDataResponse = authResp;

                    if (_this29.newDataResponse) {
                      _this29.authStatus = (_a = _this29.newDataResponse) === null || _a === void 0 ? void 0 : _a.authStatus;
                      _this29.recordStatus = (_b = _this29.newDataResponse) === null || _b === void 0 ? void 0 : _b.recordStatus; // this.modifiedBy = this.mappingResponse?.modifiedBy;

                      _this29.modifiedTime = (_c = _this29.newDataResponse) === null || _c === void 0 ? void 0 : _c.inputDtStamp;
                      _this29.authorizedBy = (_d = _this29.newDataResponse) === null || _d === void 0 ? void 0 : _d.authorizedBy;
                      _this29.authorizedTime = (_e = _this29.newDataResponse) === null || _e === void 0 ? void 0 : _e.authorizedDtStamp;
                      _this29.version = (_f = _this29.newDataResponse) === null || _f === void 0 ? void 0 : _f.version;
                      _this29.firstTimeAuth = (_g = _this29.newDataResponse) === null || _g === void 0 ? void 0 : _g.firstTimeAuth;
                      _this29.modifiedBy = (_h = _this29.newDataResponse) === null || _h === void 0 ? void 0 : _h.inputBy;

                      if (_this29.authStatus === 'U') {
                        _this29.authStatus = 'UNAUTHORIZED';
                      }

                      if (_this29.authStatus === 'A') {
                        _this29.authStatus = 'AUTHORIZED';
                      }

                      if (_this29.recordStatus === 'C') {
                        _this29.recordStatus = 'CLOSED';
                      }

                      if (_this29.recordStatus === 'O') {
                        _this29.recordStatus = 'OPEN';
                      }

                      if (_this29.firstTimeAuth === 'Y') {
                        _this29.firstTimeAuth = 'YES';
                      }

                      if (_this29.firstTimeAuth === 'N') {
                        _this29.firstTimeAuth = 'NO';
                      }

                      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        title: 'Record is Authorized',
                        icon: 'success'
                      }).then(function () {
                        return window.location.reload();
                      });
                    }
                  });
                }
              });
            }
          }
        }, {
          key: "setDataFromSummaryToUpdateExcelMapping",
          value: function setDataFromSummaryToUpdateExcelMapping(element) {
            localStorage.setItem('summryResponse', JSON.stringify(element));
            this.apiService.setexcelSummaryData({
              extSysCode: element.extSysCode,
              extSys: element.extSys,
              processName: element.processName,
              authStatus: element.authStatus,
              currency: element.currency,
              sheetNumber: element.sheetNumber
            });
            this.router.navigate(['/excel-mapping/excel-mapping-edit']);
          }
        }]);

        return _ExcelMappingComponent;
      }();

      _ExcelMappingComponent.ɵfac = function ExcelMappingComponent_Factory(t) {
        return new (t || _ExcelMappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
      };

      _ExcelMappingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _ExcelMappingComponent,
        selectors: [["npr-excel-mapping"]],
        decls: 35,
        vars: 7,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "table-responsive"], ["id", "dbTable1", "datatable", "", 1, "dataTable", "table", "tableStyle", "nowrap", "vAlignMdl", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink"], [1, "primaryColor", 2, "cursor", "pointer", 3, "click"], ["title", "Authorize", 1, "btn", 2, "color", "red", 3, "disabled", "click"], ["src", "assets/images/authorize.svg", "alt", "Authorize", 1, "summaryIcon"], ["class", "btn", "style", "color: red", "title", "Close", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Reopen", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Delete", 3, "click", 4, "ngIf"], ["title", "Close", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/CROSS1.svg", "alt", "...", 1, "summaryIcon"], ["title", "Reopen", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/open.svg", "alt", "...", 1, "summaryIcon"], ["title", "Delete", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/delete.svg", "alt", "...", 1, "summaryIcon"], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]],
        template: function ExcelMappingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Template Mapping Summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ExcelMappingComponent_div_6_Template, 3, 3, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Process Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "External System Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "External system name");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Sheet Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Auth status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Record status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, ExcelMappingComponent_tr_33_Template, 25, 15, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, ExcelMappingComponent_ng_container_34_Template, 5, 0, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.roleCodes["new"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.excelData);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
        styles: [".overflow[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\ntable.tableStyle[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #A6AAB5;\n  font-size: 9px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  padding: 16px 13px;\n  border-bottom: 1px solid #F5F5F5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2VsLW1hcHBpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBRUoiLCJmaWxlIjoiZXhjZWwtbWFwcGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVyZmxvd3tcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbnRhYmxlLnRhYmxlU3R5bGUgdGhlYWQgdHIgdGgge1xyXG4gICAgY29sb3I6ICNBNkFBQjU7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgcGFkZGluZzogMTZweCAxM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUY1RjUgO1xyXG4gIH0iXX0= */"]
      });

      function addForm(addForm, extCodeValue, proCodeValue, extNameValue, currencyValue) {
        throw new Error('Function not implemented.');
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_views_excel-mapping_excel-mapping_module_ts-es5.js.map