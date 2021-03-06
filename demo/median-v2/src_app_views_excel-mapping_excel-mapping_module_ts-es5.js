(function () {
  "use strict";

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

      _ToastService.??fac = function ToastService_Factory(t) {
        return new (t || _ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__.Ng2IzitoastService));
      };

      _ToastService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: _ToastService,
        factory: _ToastService.??fac,
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ExcelMappingEditComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](5, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", !ctx_r0.editFlag);
        }
      }

      function ExcelMappingEditComponent_div_20_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var data_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", data_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](data_r9);
        }
      }

      function ExcelMappingEditComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function ExcelMappingEditComponent_div_20_Template_select_change_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

            return ctx_r10.getCurrencyData($event, "currency");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](7, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](8, ExcelMappingEditComponent_div_20_option_8_Template, 2, 2, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r1.ccyData);
        }
      }

      function ExcelMappingEditComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Sheet Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](5, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", !ctx_r2.editFlag);
        }
      }

      function ExcelMappingEditComponent_div_22_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var data_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", data_r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](data_r13);
        }
      }

      function ExcelMappingEditComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Sheet Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "select", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function ExcelMappingEditComponent_div_22_Template_select_change_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

            return ctx_r14.getsheetNumData($event, "sheetNumber");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](7, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](8, ExcelMappingEditComponent_div_22_option_8_Template, 2, 2, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r3.sheetData);
        }
      }

      var _c0 = function _c0() {
        return ["/excel-mapping"];
      };

      function ExcelMappingEditComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ExcelMappingEditComponent_div_23_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

            return ctx_r16.getAllMappingData(ctx_r16.updateMappingForm.get("extCode").value, ctx_r16.updateMappingForm.get("proCode").value, ctx_r16.updateMappingForm.get("currency").value, ctx_r16.updateMappingForm.get("sheetNumber").value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Fetch ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", ctx_r4.updateMappingForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](2, _c0));
        }
      }

      function ExcelMappingEditComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Data Starting Row");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", !ctx_r5.editFlag);
        }
      }

      function ExcelMappingEditComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](2, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4, "Is Header Present");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", !ctx_r6.editFlag);
        }
      }

      function ExcelMappingEditComponent_div_26_tr_28_option_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", item_r26.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](item_r26.type);
        }
      }

      function ExcelMappingEditComponent_div_26_tr_28_a_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](2, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }
      }

      function ExcelMappingEditComponent_div_26_tr_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "tr", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](2, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "select", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function ExcelMappingEditComponent_div_26_tr_28_Template_select_change_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r28);

            var i_r23 = restoredCtx.index;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);

            return ctx_r27.checkTypeStatus(i_r23);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](7, ExcelMappingEditComponent_div_26_tr_28_option_7_Template, 2, 2, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](11, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](12, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](14, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](16, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](18, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](20, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](22, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](24, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](26, ExcelMappingEditComponent_div_26_tr_28_a_26_Template, 3, 0, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r23 = ctx.index;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroupName", i_r23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", !ctx_r18.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????attribute"]("disabled", !ctx_r18.editFlag ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r18.dataTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate1"]("id", "mandatoryCheck_", i_r23, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate1"]("for", "mandatoryCheck_", i_r23, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate1"]("id", "headerName_", i_r23, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate1"]("id", "dateFormat_", i_r23, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate1"]("id", "mappingColumn_", i_r23, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate1"]("id", "delimeter_", i_r23, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate1"]("id", "defaultValue_", i_r23, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate1"]("id", "repeatedTillNextValue_", i_r23, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r18.editFlag);
        }
      }

      function ExcelMappingEditComponent_div_26_a_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "span", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ExcelMappingEditComponent_div_26_a_31_Template_span_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);

            return ctx_r29.addSubArray();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](2, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }
      }

      function ExcelMappingEditComponent_div_26_div_32_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ExcelMappingEditComponent_div_26_div_32_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r38);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);

            return ctx_r37.updateMappingData(ctx_r37.addForm.value, ctx_r37.updateMappingForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", ctx_r31.dataSaved);
        }
      }

      function ExcelMappingEditComponent_div_26_div_32_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ExcelMappingEditComponent_div_26_div_32_div_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r40);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);

            return ctx_r39.enableEditFlag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r32.roleCodes.edit.labelDescription);
        }
      }

      function ExcelMappingEditComponent_div_26_div_32_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ExcelMappingEditComponent_div_26_div_32_div_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r42);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);

            return ctx_r41.onClickOfAuth(ctx_r41.addForm.value, ctx_r41.updateMappingForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r33.roleCodes.auth.labelDescription);
        }
      }

      function ExcelMappingEditComponent_div_26_div_32_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ExcelMappingEditComponent_div_26_div_32_div_6_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r44);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);

            return ctx_r43.onClickOfClose(ctx_r43.addForm.value, ctx_r43.updateMappingForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r34.roleCodes.close.labelDescription);
        }
      }

      function ExcelMappingEditComponent_div_26_div_32_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ExcelMappingEditComponent_div_26_div_32_div_7_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r46);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);

            return ctx_r45.onClickOfReopen(ctx_r45.addForm.value, ctx_r45.updateMappingForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r35.roleCodes.reopen.labelDescription);
        }
      }

      function ExcelMappingEditComponent_div_26_div_32_div_8_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ExcelMappingEditComponent_div_26_div_32_div_8_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4);

            return ctx_r48.finalSubmit(ctx_r48.updateMappingForm.value, ctx_r48.addForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }
      }

      function ExcelMappingEditComponent_div_26_div_32_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, ExcelMappingEditComponent_div_26_div_32_div_8_button_1_Template, 2, 0, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx_r36.editFlag && !ctx_r36.copyData);
        }
      }

      function ExcelMappingEditComponent_div_26_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](3, ExcelMappingEditComponent_div_26_div_32_button_3_Template, 2, 1, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](4, ExcelMappingEditComponent_div_26_div_32_div_4_Template, 3, 1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](5, ExcelMappingEditComponent_div_26_div_32_div_5_Template, 3, 1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](6, ExcelMappingEditComponent_div_26_div_32_div_6_Template, 3, 1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](7, ExcelMappingEditComponent_div_26_div_32_div_7_Template, 3, 1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](8, ExcelMappingEditComponent_div_26_div_32_div_8_Template, 2, 1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r20.editFlag && ctx_r20.copyData);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r20.mappingResponse && !ctx_r20.editFlag && ctx_r20.recordStatus == "OPEN" && ctx_r20.roleCodes.edit && ctx_r20.copyData);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r20.mappingResponse && !ctx_r20.editFlag && ctx_r20.authStatus == "UNAUTHORIZED" && ctx_r20.roleCodes.auth && ctx_r20.copyData);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r20.recordStatus == "OPEN" && !ctx_r20.editFlag && ctx_r20.copyData);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r20.recordStatus == "CLOSED" && !ctx_r20.editFlag && ctx_r20.copyData);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r20.mappingResponse && ctx_r20.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](7, _c0));
        }
      }

      function ExcelMappingEditComponent_div_26_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](7, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](19, "img", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](27, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](30, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](31, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](32, "img", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](33, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](34, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](39, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](40, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](41, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](42, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](43, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](44, "img", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](45, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](46, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](51, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](52, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](53, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](54, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](55, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](56, "img", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](57, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](58, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](64, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](65, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](66, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](67, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](68, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](69, "img", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](70, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](71, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](73, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](76, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](77, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](78, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](79, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](80, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](81, "img", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](82, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](83, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](85, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](88, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](89, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](90, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](91, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](92, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](93, "img", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](94, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](95, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](97, "Modification Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r21.modifiedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind1"](26, 8, ctx_r21.modifiedTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r21.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r21.authorizedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind1"](63, 10, ctx_r21.authorizedTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r21.authStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r21.authStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r21.version);
        }
      }

      function ExcelMappingEditComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "form", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "fieldset", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "table", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](8, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](10, "data type");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](12, "mandatory");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](14, "header name");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](16, "date format");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](18, "mapping column");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](20, "delimeter");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](22, "default value");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](24, "repeated till next value");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](26, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](27, "tbody", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](28, ExcelMappingEditComponent_div_26_tr_28_Template, 27, 13, "tr", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](31, ExcelMappingEditComponent_div_26_a_31_Template, 3, 0, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](32, ExcelMappingEditComponent_div_26_div_32_Template, 12, 8, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](33, ExcelMappingEditComponent_div_26_div_33_Template, 100, 12, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx_r7.addForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx_r7.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r7.addForm.get("subArray")["controls"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r7.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r7.mappingResponse);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r7.mappingResponse);
        }
      }

      var _ExcelMappingEditComponent = /*#__PURE__*/function () {
        function _ExcelMappingEditComponent(apiService, cdr, fb, toastService, router, roleService) {
          _classCallCheck(this, _ExcelMappingEditComponent);

          this.apiService = apiService;
          this.cdr = cdr;
          this.fb = fb;
          this.toastService = toastService;
          this.router = router;
          this.roleService = roleService;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
          this.editFlag = false;
          this.showFieldCurrency = false;
          this.showFieldsheetNum = false;
          this.showFetch = true;
          this.extSysCode = null;
          this.excelprocess = null;
          this.submitted = false;
          this.tempStore = [];
          this.disablefetchbtn = false;
          this.dataSaved = false;
          this.copyData = true;
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
        }

        _createClass(_ExcelMappingEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              _this.newRolePermissions();
            }, 2000);
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this.roleCodes = message;
            });
            setTimeout(function () {// console.log(this.roleCodes);
            }, 3000); //  console.log("role codes",this.roleCodes)

            this.updateMappingForm = this.fb.group({
              extCode: [""],
              proCode: [""],
              startingRow: [""],
              currency: [""],
              sheetNumber: [""],
              headerRepeated: [""]
            });
            this.addForm = this.fb.group({
              subArray: this.fb.array([this.getSubArray()])
            });
            this.getExtCodeforDropdown();
            this.gettingSummaryData();
            this.currentUser = localStorage.getItem("userFromLogin");
          }
        }, {
          key: "newRolePermissions",
          value: function newRolePermissions() {
            this.roleService.fetchScreenPermissions('Excel Mapping');
          }
        }, {
          key: "getSubArray",
          value: function getSubArray() {
            return this.fb.group({
              columnnName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              dataType: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              excelMappingColumn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z \-#,@,%\']+')]],
              // mandatory: false,
              id: [''],
              mandatory: [""],
              headerName: [''],
              dateFormat: [{
                value: '',
                disabled: true
              }],
              authStatus: [''],
              modifiedBy: [''],
              authorizedBy: [''],
              version: [''],
              modifiedTime: [''],
              authorizedTime: [''],
              recordStatus: [''],
              delimeter: [''],
              defaultValue: [''],
              repeatedTillNextValue: ['']
            });
          }
        }, {
          key: "gettingSummaryData",
          value: function gettingSummaryData() {
            var _this2 = this;

            this.apiService.getexcelSummaryData().subscribe(function (resp) {
              _this2.summryResponse = resp;
            });

            if (this.summryResponse) {
              this.extCode = this.summryResponse.extCode;
              this.processNAme = this.summryResponse.processName;
              this.extSys = this.summryResponse.extSysName;
              this.updateMappingForm.controls.extCode.setValue(this.extCode);
              this.updateMappingForm.controls.proCode.setValue(this.processNAme);
              this.apiService.getExcelMappingDataforEdit(this.extCode, this.processNAme, this.extSys).subscribe(function (editResp) {
                console.log("This. is new Resp", editResp);
                _this2.newDataResponse = editResp;
                _this2.ccyData = _this2.newDataResponse.currency;
                _this2.sheetData = _this2.newDataResponse.sheetNo;

                if (_this2.newDataResponse.currency.length === 1) {
                  _this2.currency = _this2.newDataResponse.currency[0];
                  _this2.sheetNumb = _this2.newDataResponse.currencySheetMap[_this2.ccyData];
                  _this2.showFieldCurrency = true;
                  _this2.showFieldsheetNum = true;
                  _this2.showFetch = false;

                  _this2.updateMappingForm.controls.currency.setValue(_this2.currency);

                  _this2.updateMappingForm.controls.sheetNumber.setValue(_this2.sheetNumb);

                  _this2.getAllMappingData(_this2.extCode, _this2.processNAme, _this2.currency, _this2.sheetNumb);
                } else {
                  _this2.showFetch = true;
                }
              }); // this.getProcess(this.extCode);
            }
          }
        }, {
          key: "getAllMappingData",
          value: function getAllMappingData(extCode, proCode, currenyVal, sheetNumber) {
            var _this3 = this;

            console.log("Checking ?", extCode, proCode, currenyVal, sheetNumber);
            this.apiService.fetchAllName(extCode, proCode, currenyVal).subscribe(function (filenames) {
              _this3.fileNames = filenames;
            });
            this.apiService.getAllMappingByExtSysAndProcessCode(extCode, proCode, currenyVal, sheetNumber).subscribe(function (mappingResponse) {
              _this3.mappingResponse = mappingResponse;
              console.log("this.mappingResponse", _this3.mappingResponse);

              if (_this3.mappingResponse == null) {
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
                var startingRow = _this3.mappingResponse[0].startingRow;
                var headerRepeated = _this3.mappingResponse[0].headerRepeated;

                _this3.updateMappingForm.controls.startingRow.setValue(startingRow);

                _this3.updateMappingForm.controls.headerRepeated.setValue(headerRepeated);

                _this3.auditLog();

                _this3.patchData(_this3.mappingResponse);

                _this3.cdr.markForCheck();

                _this3.cdr.markForCheck();
              }
            });
          }
        }, {
          key: "getCurrencyData",
          value: function getCurrencyData(event, type) {
            var selectedCurrency = event.target.value;
            var sheetNum = this.newDataResponse.currencySheetMap[selectedCurrency];
            this.updateMappingForm.controls.sheetNumber.setValue(sheetNum);
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
            var _this4 = this;

            this.apiService.getAllExtsysNameAndProcessCodeOnAuthStatus().subscribe(function (response) {
              _this4.extSysData = response;
            });
          }
        }, {
          key: "getProcess",
          value: function getProcess(extCode) {
            var _this5 = this;

            this.apiService.getProcessNameByExtSysCode(extCode).subscribe(function (response) {
              _this5.processResp = response;
              _this5.processName = _this5.processResp;

              _this5.getExtSysNameByExtSysCode(extCode);
            });
          }
        }, {
          key: "getExtSysNameByExtSysCode",
          value: function getExtSysNameByExtSysCode(extSysCode) {
            var _this6 = this;

            this.apiService.getExtSysNameByExtSysCode(extSysCode).subscribe(function (data) {
              _this6.extNameValue = data;
            });
          }
        }, {
          key: "getProcessName",
          value: function getProcessName(processCode, extCodefromSummry) {
            var _this7 = this;

            this.extSysCode = extCodefromSummry;
            this.excelprocess = processCode;
            this.apiService.getCurrencyOnExtNameAndProcssCode(this.extSysCode, this.excelprocess, this.extCode).subscribe(function (data) {
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
            var control = this.addForm.controls.subArray;
            control.controls = [];

            for (var i = 0; i < formdata.length; i++) {
              control.push(this.getSubArray());
            }

            this.addForm.patchValue({
              subArray: formdata
            });
          }
        }, {
          key: "addSubArray",
          value: function addSubArray() {
            var control = this.addForm.controls['subArray'];
            control.push(this.getSubArray());
          }
        }, {
          key: "getSubArrayFormGroup",
          value: function getSubArrayFormGroup(index) {
            var control = this.addForm.controls.subArray;
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
            return this.f.subArray;
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            var _a, _b, _c, _d, _e, _f, _g;

            this.authStatus = (_a = this.mappingResponse[0]) === null || _a === void 0 ? void 0 : _a.authStatus;
            this.recordStatus = (_b = this.mappingResponse[0]) === null || _b === void 0 ? void 0 : _b.recordStatus;
            this.modifiedBy = (_c = this.mappingResponse[0]) === null || _c === void 0 ? void 0 : _c.modifiedBy;
            this.modifiedTime = (_d = this.mappingResponse[0]) === null || _d === void 0 ? void 0 : _d.modifiedTime;
            this.authorizedBy = (_e = this.mappingResponse[0]) === null || _e === void 0 ? void 0 : _e.authorizedBy;
            this.authorizedTime = (_f = this.mappingResponse[0]) === null || _f === void 0 ? void 0 : _f.authorizedTime;
            this.version = (_g = this.mappingResponse[0]) === null || _g === void 0 ? void 0 : _g.version;

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
          }
        }, {
          key: "checkTypeStatus",
          value: function checkTypeStatus(i) {
            var control = this.addForm.controls['subArray'];
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
            var control = this.addForm.get('subArray');
            control.at(i).get('mandatory').setValue(value);
            console.log("value", value, i);
          }
        }, {
          key: "enableEditFlag",
          value: function enableEditFlag() {
            this.editFlag = true;
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
            excelCopyData.subArray.forEach(function (element) {
              element.id = null;
            });
            console.log(excelCopyData.subArray);
          }
        }, {
          key: "updateMappingData",
          value: function updateMappingData(subArrayForm, excelForm) {
            var _this8 = this;

            this.submitted = true;
            this.progress = true;
            this.extCodeValue = excelForm.extCode;
            this.proCodeValue = excelForm.proCode;
            this.isCheckedValue = excelForm.headerRepeated;
            this.startingValue = excelForm.startingRow;
            this.currencyValue = excelForm.currency;
            this.sheetNumberValue = excelForm.sheetNumber;
            var modifiedBy = subArrayForm.subArray[0].modifiedBy;
            modifiedBy = this.currentUser;

            if (this.addForm.invalid) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: 'Numeric values not allowed in mapping column!',
                icon: 'warning'
              });
              return;
            }

            this.apiService.updateMappingData(subArrayForm, this.extCodeValue, this.proCodeValue, this.extCodeValue, this.startingValue, this.isCheckedValue, this.currentUser, this.currencyValue, this.sheetNumberValue).subscribe(function (updateData) {
              _this8.mappingResponse = updateData;
              console.log(_this8.mappingResponse);

              if (_this8.mappingResponse) {
                _this8.dataSaved = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: 'Record is Updated!',
                  icon: 'success'
                });

                _this8.auditLog();

                _this8.cdr.markForCheck();
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
            console.log("this.currentUser", this.currentUser, addForm, updateForm);
            this.extCodeValue = updateForm.extCode;
            this.extNameValue = updateForm.extCode;
            this.proCodeValue = updateForm.proCode;
            this.currencyValue = updateForm.currency;

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
                  _this9.apiService.onAuthorizingTheRecordOfExcelMApping(addForm, _this9.extNameValue, _this9.proCodeValue, _this9.extCodeValue, _this9.currentUser, _this9.currencyValue).subscribe(function (authResp) {
                    var _a, _b, _c, _d, _e, _f, _g;

                    _this9.mappingResponse = authResp;

                    if (_this9.mappingResponse) {
                      _this9.authStatus = (_a = _this9.mappingResponse) === null || _a === void 0 ? void 0 : _a.authStatus;
                      _this9.recordStatus = (_b = _this9.mappingResponse) === null || _b === void 0 ? void 0 : _b.recordStatus;
                      _this9.modifiedBy = (_c = _this9.mappingResponse) === null || _c === void 0 ? void 0 : _c.modifiedBy;
                      _this9.modifiedTime = (_d = _this9.mappingResponse) === null || _d === void 0 ? void 0 : _d.modifiedTime;
                      _this9.authorizedBy = (_e = _this9.mappingResponse) === null || _e === void 0 ? void 0 : _e.authorizedBy;
                      _this9.authorizedTime = (_f = _this9.mappingResponse) === null || _f === void 0 ? void 0 : _f.authorizedTime;
                      _this9.version = (_g = _this9.mappingResponse) === null || _g === void 0 ? void 0 : _g.version;

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
          key: "onClickOfClose",
          value: function onClickOfClose(addForm, updateForm) {
            var _this10 = this;

            this.extCodeValue = updateForm.extCode;
            this.extNameValue = updateForm.extCode;
            this.proCodeValue = updateForm.proCode;
            this.currencyValue = updateForm.currency;
            this.currentUser = this.mappingResponse.modifiedBy;
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
                _this10.apiService.onClcikOFCloseOfUpdateExcelMApping(addForm, _this10.extCodeValue, _this10.proCodeValue, _this10.extNameValue, _this10.currencyValue).subscribe(function (closeResp) {
                  var _a, _b, _c, _d, _e, _f, _g;

                  console.log(closeResp);
                  _this10.mappingResponse = closeResp;

                  if (_this10.mappingResponse) {
                    _this10.authStatus = (_a = _this10.mappingResponse) === null || _a === void 0 ? void 0 : _a.authStatus;
                    _this10.recordStatus = (_b = _this10.mappingResponse) === null || _b === void 0 ? void 0 : _b.recordStatus;
                    _this10.modifiedBy = (_c = _this10.mappingResponse) === null || _c === void 0 ? void 0 : _c.modifiedBy;
                    _this10.modifiedTime = (_d = _this10.mappingResponse) === null || _d === void 0 ? void 0 : _d.modifiedTime;
                    _this10.authorizedBy = (_e = _this10.mappingResponse) === null || _e === void 0 ? void 0 : _e.authorizedBy;
                    _this10.authorizedTime = (_f = _this10.mappingResponse) === null || _f === void 0 ? void 0 : _f.authorizedTime;
                    _this10.version = (_g = _this10.mappingResponse) === null || _g === void 0 ? void 0 : _g.version;

                    if (_this10.authStatus === 'U') {
                      _this10.authStatus = 'UNAUTHORIZED';
                    }

                    if (_this10.authStatus === 'A') {
                      _this10.authStatus = 'AUTHORIZED';
                    }

                    if (_this10.recordStatus === 'C') {
                      _this10.recordStatus = 'CLOSED';
                    }

                    if (_this10.recordStatus === 'O') {
                      _this10.recordStatus = 'OPEN';
                    }

                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record is Closed',
                      icon: 'success'
                    });

                    _this10.auditLog();
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Failed to Close the Recored!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse) {
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
            var _this11 = this;

            this.extCodeValue = updateForm.extCode;
            this.extNameValue = updateForm.extCode;
            this.proCodeValue = updateForm.proCode;
            this.currencyValue = updateForm.currency;
            this.currentUser = this.mappingResponse.modifiedBy;
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
                _this11.apiService.onClcikOfReopenOfUpdateExcelMapping(addForm, _this11.extCodeValue, _this11.proCodeValue, _this11.extNameValue, _this11.currencyValue).subscribe(function (openResp) {
                  var _a, _b, _c, _d, _e, _f, _g;

                  console.log(openResp);
                  _this11.mappingResponse = openResp;

                  if (_this11.mappingResponse) {
                    _this11.authStatus = (_a = _this11.mappingResponse) === null || _a === void 0 ? void 0 : _a.authStatus;
                    _this11.recordStatus = (_b = _this11.mappingResponse) === null || _b === void 0 ? void 0 : _b.recordStatus;
                    _this11.modifiedBy = (_c = _this11.mappingResponse) === null || _c === void 0 ? void 0 : _c.modifiedBy;
                    _this11.modifiedTime = (_d = _this11.mappingResponse) === null || _d === void 0 ? void 0 : _d.modifiedTime;
                    _this11.authorizedBy = (_e = _this11.mappingResponse) === null || _e === void 0 ? void 0 : _e.authorizedBy;
                    _this11.authorizedTime = (_f = _this11.mappingResponse) === null || _f === void 0 ? void 0 : _f.authorizedTime;
                    _this11.version = (_g = _this11.mappingResponse) === null || _g === void 0 ? void 0 : _g.version;

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
                      title: 'Record is Reopened',
                      icon: 'success'
                    });

                    _this11.auditLog();
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Failed to Reopen the Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse) {
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
            // this.confirmService
            //   .confirm({ title: 'Confirm', message: 'Are you sure to delete?', ok: 'Yes', cancel: 'No' })
            //   .subscribe(res => {
            //     if (res) {
            this.getRowIdx(i); //   } else { return; }
            // });
          }
        }, {
          key: "getRowIdx",
          value: function getRowIdx(i) {
            var _this12 = this;

            var control = this.addForm.controls.subArray;
            var fg = control.get([i]);
            var idx = fg.get('id').value;
            this.apiService.deleteMappingRow(idx).subscribe(function (e) {
              if (e) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'Record is Deleted',
                  icon: 'success'
                });

                _this12.router.navigate(['/excel-mapping']);
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'Failed to Delete the Record!',
                  icon: 'error'
                });
              }

              control.removeAt(i);

              _this12.cdr.markForCheck();
            });
          }
        }, {
          key: "finalSubmit",
          value: function finalSubmit(excelForm, subArrayForm) {
            var _this13 = this;

            console.log("Form", excelForm, subArrayForm);
            this.submitted = true;
            this.extCodeValue = excelForm.extCode;
            this.proCodeValue = excelForm.proCode;
            this.isCheckedValue = excelForm.headerRepeated;
            this.startingValue = excelForm.startingRow;
            this.currencyValue = excelForm.currency;
            this.sheetNumberValue = excelForm.sheetNumber;

            if (this.addForm.controls.subArray.invalid) {}

            this.apiService.columnData(subArrayForm, this.extCodeValue, this.proCodeValue, this.isCheckedValue, this.startingValue, this.extCodeValue, this.currencyValue, this.currentUser, this.sheetNumberValue).subscribe(function (response) {
              _this13.mappingResponse = response;
              console.log("this.mappingResponse", _this13.mappingResponse);

              if (_this13.mappingResponse) {
                _this13.is_edit = true;

                _this13.auditLog();

                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'Mapped Successfully!',
                  icon: 'success'
                });

                _this13.updateMappingForm.reset();

                _this13.addForm.reset();

                return;
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'Failed ExternalSystem And ProcessCode Already Mapped.',
                  icon: 'error'
                });

                _this13.updateMappingForm.reset();

                _this13.addForm.reset();
              }
            });
          }
        }]);

        return _ExcelMappingEditComponent;
      }();

      _ExcelMappingEditComponent.??fac = function ExcelMappingEditComponent_Factory(t) {
        return new (t || _ExcelMappingEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__.RoleService));
      };

      _ExcelMappingEditComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({
        type: _ExcelMappingEditComponent,
        selectors: [["npr-excel-mapping-edit"]],
        decls: 27,
        vars: 11,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-2"], ["for", "extCode", 1, "formLbl"], [1, "colorRed"], ["id", "extCode", "type", "text", "required", "", "formControlName", "extCode", "placeholder", "External System", "value", "", 1, "form-control", 3, "readonly"], ["for", "proCode", 1, "formLbl"], ["id", "proCode", "type", "text", "required", "", "formControlName", "proCode", "placeholder", "Process Code", "value", "", 1, "form-control", 3, "readonly"], ["class", "col-lg-2", 4, "ngIf"], ["class", "row gy-4  col-lg-4 ", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], ["for", "currency", 1, "formLbl"], ["id", "currency", "type", "text", "required", "", "formControlName", "currency", "placeholder", "Currency ", "value", "", 1, "form-control", 3, "readonly"], ["formControlName", "currency", "required", "", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["class", "form-class", 3, "value", 4, "ngFor", "ngForOf"], [1, "form-class", 3, "value"], ["for", "sheetNumber", 1, "formLbl"], ["id", "sheetNumber", "type", "text", "required", "", "formControlName", "sheetNumber", "placeholder", "Sheet Number", "value", "", 1, "form-control", 3, "readonly"], ["formControlName", "sheetNumber", "required", "", "aria-label", "Default select example", 1, "form-select", 3, "change"], [1, "row", "gy-4", "col-lg-4"], [1, "col-lg-4"], ["href", "excel-mapping-new.html", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["for", "startingRow", 1, "formLbl"], ["id", "startingRow", "type", "text", "required", "", "formControlName", "startingRow", "placeholder", "Sheet Number", "value", "", 1, "form-control", 3, "readonly"], [1, "checkStyle"], ["type", "checkbox", "id", "headerRepeated", "formControlName", "headerRepeated", 3, "readonly"], ["for", "headerRepeated"], ["action", "", "novalidate", "", 1, "formStyle", 3, "formGroup"], [1, "table-responsive"], [3, "disabled"], ["id", "dbTable1", 1, "table", "tableStyle1", "responsive", "nowrap", "vAlignMdl"], ["formArrayName", "subArray"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", "class", "addIcon primarybg", 4, "ngIf"], ["class", "col-lg-12", 4, "ngIf"], [3, "formGroupName"], ["id", "sourceCode", "type", "text", "formControlName", "columnnName", "placeholder", "Name", "value", "", 1, "form-control1", 3, "readonly"], ["formControlName", "dataType", "placeholder", "Choose DataType", "aria-label", "Default select example", 1, "form-select1", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "checkboxdiv"], ["type", "checkbox", "formControlName", "mandatory", 3, "id"], [3, "for"], ["type", "text", "formControlName", "headerName", "placeholder", "Header Name", "value", "", 1, "form-control1", 3, "id"], ["type", "text", "formControlName", "dateFormat", "placeholder", "Date Format", "value", "", 1, "form-control1", 3, "id"], ["type", "text", "formControlName", "excelMappingColumn", "placeholder", "Mapping Column", "value", "", 1, "form-control1", 3, "id"], ["type", "text", "formControlName", "delimeter", "placeholder", "Delimeter", "value", "", 1, "form-control1", 3, "id"], ["type", "text", "formControlName", "defaultValue", "placeholder", "Default Value", "value", "", 1, "form-control1", 3, "id"], ["type", "text", "formControlName", "repeatedTillNextValue", "placeholder", "Repeated Till Next Value", "value", "", 1, "form-control1", 3, "id"], ["href", "javascript:void(0)", "class", "deleteIcon2", 4, "ngIf"], [3, "value"], ["href", "javascript:void(0)", 1, "deleteIcon2"], ["src", "assets/images/delete-icon.svg", "alt", "..."], ["href", "javascript:void(0)", 1, "addIcon", "primarybg"], [3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], ["class", "btn smBtn minWdSmBtn btnUpdate", 3, "disabled", "click", 4, "ngIf"], ["class", "col-auto", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "disabled", "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["color", "warn", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["class", "btn smBtn minWdSmBtn btnUpdate", "color", "primary", 3, "click", 4, "ngIf"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]],
        template: function ExcelMappingEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Update/Copy Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9, "External System");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](12, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](15, "Process Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](17, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](18, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](19, ExcelMappingEditComponent_div_19_Template, 6, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](20, ExcelMappingEditComponent_div_20_Template, 9, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](21, ExcelMappingEditComponent_div_21_Template, 6, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](22, ExcelMappingEditComponent_div_22_Template, 9, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](23, ExcelMappingEditComponent_div_23_Template, 7, 3, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](24, ExcelMappingEditComponent_div_24_Template, 4, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](25, ExcelMappingEditComponent_div_25_Template, 5, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](26, ExcelMappingEditComponent_div_26_Template, 34, 6, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx.updateMappingForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.showFieldCurrency);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx.showFieldCurrency);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.showFieldsheetNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx.showFieldsheetNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.showFetch);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.mappingResponse);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.mappingResponse);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.mappingResponse);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
        styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\ntable.tableStyle1[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #A6AAB5;\n  font-size: 10px;\n  text-transform: uppercase;\n  border-bottom: 1px solid #F5F5F5;\n}\n\n.form-control1[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 10px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.form-control1[_ngcontent-%COMP%]:disabled, .form-control1[readonly][_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n\n.form-select1[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 2.25rem 0.375rem 0.75rem;\n  -moz-padding-start: calc(0.75rem - 3px);\n  font-size: 10px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.checkboxdiv[_ngcontent-%COMP%] {\n  padding-left: 25px;\n  padding-bottom: 15px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2VsLW1hcHBpbmctZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBRUEsd0VBQUE7QUFBSjs7QUFFQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFHRyxnQ0FBQTtBQURKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0VBQUE7QUFBSjs7QUFFQTs7RUFFSSx5QkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsaVBBQUE7RUFDQSw0QkFBQTtFQUNBLHlDQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0VBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBR0oiLCJmaWxlIjoiZXhjZWwtbWFwcGluZy1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2xhc3Mge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzc5Nzk3OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dFxyXG59XHJcbnRhYmxlLnRhYmxlU3R5bGUxIHRoZWFkIHRyIHRoIHtcclxuXHRjb2xvcjogI0E2QUFCNTtcclxuXHRmb250LXNpemU6IDEwcHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHQvLyBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgLy8gcGFkZGluZzogMThweCAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUY1RjUgO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wxIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dFxyXG59XHJcbi5mb3JtLWNvbnRyb2wxOmRpc2FibGVkLFxyXG4uZm9ybS1jb250cm9sMVtyZWFkb25seV0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICAgIG9wYWNpdHk6IDFcclxufVxyXG4uZm9ybS1zZWxlY3QxIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIDIuMjVyZW0gLjM3NXJlbSAuNzVyZW07XHJcbiAgICAtbW96LXBhZGRpbmctc3RhcnQ6IGNhbGMoMC43NXJlbSAtIDNweCk7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnJTNlJTNjcGF0aCBmaWxsPSdub25lJyBzdHJva2U9JyUyMzM0M2E0MCcgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzInIGQ9J00yIDVsNiA2IDYtNicvJTNlJTNjL3N2ZyUzZVwiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAuNzVyZW0gY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmVcclxufVxyXG4uY2hlY2tib3hkaXZ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4iXX0= */"]
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


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ExcelMappingNewComponent_ng_option_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "ng-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var data_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", data_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](data_r3);
        }
      }

      function ExcelMappingNewComponent_option_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var data_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", data_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](data_r4);
        }
      }

      function ExcelMappingNewComponent_tr_85_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", item_r8.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](item_r8.type);
        }
      }

      function ExcelMappingNewComponent_tr_85_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](1, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "select", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function ExcelMappingNewComponent_tr_85_Template_select_change_5_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r10);

            var i_r6 = restoredCtx.index;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

            return ctx_r9.checkTypeStatus(i_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](8, ExcelMappingNewComponent_tr_85_option_8_Template, 2, 2, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](12, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](13, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](15, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](17, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](19, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](21, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](23, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](25, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ExcelMappingNewComponent_tr_85_Template_span_click_28_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r10);

            var i_r6 = restoredCtx.index;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

            return ctx_r11.removeSubArray(i_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](29, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r6 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroupName", i_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("readonly", ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("disabled", ctx_r2.editFlag ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx_r2.dataTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate1"]("id", "mandatoryCheck_", i_r6, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("disabled", ctx_r2.editFlag ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate1"]("for", "mandatoryCheck_", i_r6, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate1"]("id", "headerName_", i_r6, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("readonly", ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate1"]("id", "dateFormat_", i_r6, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("readonly", ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate1"]("id", "mappingColumn_", i_r6, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("readonly", ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate1"]("id", "delimeter_", i_r6, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("readonly", ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate1"]("id", "defaultValue_", i_r6, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("readonly", ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate1"]("id", "repeatedTillNextValue_", i_r6, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("readonly", ctx_r2.editFlag);
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
        function _ExcelMappingNewComponent(apiService, fb, toastService) {
          _classCallCheck(this, _ExcelMappingNewComponent);

          this.apiService = apiService;
          this.fb = fb;
          this.toastService = toastService;
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
        }

        _createClass(_ExcelMappingNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.excelMappingForm = this.fb.group({
              extCode: [""],
              proCode: [""],
              startingRow: [""],
              currency: [""],
              sheetNumber: [""],
              headerRepeated: [""]
            });
            this.addForm = this.fb.group({
              subArray: this.fb.array([this.getSubArray()])
            });
            this.getAllExtsysNameAndProcessCodeOnAuthStatus(); // localStorage.setItem("userIdForChangePassword", localStorage.getItem("currentUser"));

            this.currentUser = localStorage.getItem("userFromLogin");
          }
        }, {
          key: "getSubArray",
          value: function getSubArray() {
            return this.fb.group({
              columnnName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              dataType: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              mappingColumn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z \-#,@,%\']+')]],
              mandatory: [false],
              // mandatory: [""],
              headerName: [''],
              dateFormat: [{
                value: '',
                disabled: true
              }],
              authStatus: [''],
              // modifiedBy: [this.currentUser.userId],
              modifiedBy: ['JILU'],
              authorizedBy: [''],
              version: [''],
              modifiedTime: [''],
              authorizedTime: [''],
              recordStatus: [''],
              delimeter: [''],
              defaultValue: [''],
              repeatedTillNextValue: ['']
            });
          }
        }, {
          key: "mandatoryRequired",
          value: function mandatoryRequired(values) {
            var value = values.currentTarget.checked;
            console.log("value", value);
          }
        }, {
          key: "getAllExternalSystem",
          value: function getAllExternalSystem() {
            var _this14 = this;

            this.apiService.getAllExtCode().subscribe(function (response) {
              _this14.extSysData = response;
            });
          }
        }, {
          key: "getAllExtsysNameAndProcessCodeOnAuthStatus",
          value: function getAllExtsysNameAndProcessCodeOnAuthStatus() {
            var _this15 = this;

            this.apiService.getAllExtsysNameAndProcessCodeOnAuthStatus().subscribe(function (response) {
              _this15.extSysData = response.sort();
            });
          }
        }, {
          key: "getExtSysNameByExtSysCode",
          value: function getExtSysNameByExtSysCode(extSysCode) {
            var _this16 = this;

            this.apiService.getExtSysNameByExtSysCode(extSysCode).subscribe(function (data) {
              _this16.extNameValue = data;
            });
          }
        }, {
          key: "getProcess",
          value: function getProcess(extSysCode) {
            var _this17 = this;

            this.apiService.getProcessNameByExtSysCode(extSysCode).subscribe(function (response) {
              _this17.processResp = response;
              _this17.processName = _this17.processResp;

              _this17.getExtSysNameByExtSysCode(extSysCode);
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
            var control = this.addForm.get('subArray');
            control.at(i).get('mandatory').setValue(value);
            console.log("value", value, i);
          }
        }, {
          key: "addSubArray",
          value: function addSubArray() {
            var control = this.addForm.controls['subArray'];
            console.log("const control", control);
            control.push(this.getSubArray());
          }
        }, {
          key: "patchData",
          value: function patchData(formdata) {
            console.log("formdata");
            var control = this.addForm.controls['subArray'];

            for (var i = 0; i < formdata.length; i++) {
              control.push(this.getSubArray());
            }

            this.addForm.patchValue({
              subArray: formdata
            });
          }
        }, {
          key: "removeSubArray",
          value: function removeSubArray(i) {
            var control = this.addForm.controls['subArray'];
            control.removeAt(i);
          }
        }, {
          key: "clearAllSubArray",
          value: function clearAllSubArray() {
            var control = this.addForm.controls['subArray'];

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
            return this.f.subArray;
          }
        }, {
          key: "checkTypeStatus",
          value: function checkTypeStatus(i) {
            //console.log(i);
            var control = this.addForm.controls['subArray'];
            var fg = control.get([i]);

            if (fg.value.dataType == 'Date') {
              this.is_edit = false;
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
            var _this18 = this;

            this.submitted = true;
            this.extCodeValue = excelForm.extCode;
            this.proCodeValue = excelForm.proCode;
            this.isCheckedValue = excelForm.headerRepeated;
            this.startingValue = excelForm.startingRow;
            this.currencyValue = excelForm.currency;
            this.sheetNumberValue = excelForm.sheetNumber;
            subArrayForm.subArray[0].modifiedBy = this.currentUser;

            if (this.addForm.controls.subArray.invalid) {}

            this.apiService.columnData(subArrayForm, this.extCodeValue, this.proCodeValue, this.isCheckedValue, this.startingValue, this.extCodeValue, this.currencyValue, this.currentUser, this.sheetNumberValue).subscribe(function (response) {
              _this18.dataFromresponse = response;
              console.log("this.dataFromresponse", _this18.dataFromresponse);

              if (_this18.dataFromresponse) {
                _this18.is_edit = true;
                console.log("sucess");
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Mapped Successfully!',
                  icon: 'success'
                });
                _this18.editFlag = true; // this.excelMappingForm.reset();
                // this.addForm.reset();

                return;
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Mapping Failed!',
                  icon: 'error'
                });
              } // Failed ExternalSystem And ProcessCode Already Mapped!

            });
          }
        }]);

        return _ExcelMappingNewComponent;
      }();

      _ExcelMappingNewComponent.??fac = function ExcelMappingNewComponent_Factory(t) {
        return new (t || _ExcelMappingNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
      };

      _ExcelMappingNewComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: _ExcelMappingNewComponent,
        selectors: [["npr-excel-mapping-new"]],
        decls: 98,
        vars: 19,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], ["href", "excel-mapping-new.html", "routerLinkActive", "router-link-active", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink"], ["href", "javascript:void(0)", "routerLinkActive", "router-link-active", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "titleStyle", "mt-2", "mb-4"], [1, "pageTitle", "darkgreyClr"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-4"], ["for", "extSystem", 1, "formLbl"], [1, "colorRed"], ["id", "outlineNgSelect", "formControlName", "extCode", "required", "", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["class", "form-class", 3, "value", 4, "ngFor", "ngForOf"], ["for", "proCode", 1, "formLbl"], ["formControlName", "proCode", "required", "", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["for", "startingRow", 1, "formLbl"], ["id", "startingRow", "type", "number", "formControlName", "startingRow", "required", "", "placeholder", "Data Starting Row", "value", "", 1, "form-control", 3, "readonly"], ["for", "currency", 1, "formLbl"], ["id", "currency", "type", "text", "formControlName", "currency", "name", "currency", "required", "", "placeholder", "Currency", "value", "", 1, "form-control", 3, "readonly"], ["for", "sheetNumber", 1, "formLbl"], ["id", "sheetNumber", "type", "text", "formControlName", "sheetNumber", "placeholder", "Sheet Number", "value", "", 1, "form-control", 3, "readonly"], [1, "checkStyle"], ["type", "checkbox", "id", "fcyRate", "formControlName", "headerRepeated"], ["for", "fcyRate"], ["action", "", "novalidate", "", 1, "formStyle", 3, "formGroup"], [1, "table-responsive"], ["id", "dbTable1", 1, "table", "tableStyle1", "responsive", "nowrap", "vAlignMdl"], ["formArrayName", "subArray"], [4, "ngFor", "ngForOf"], [1, "addIcon", "primarybg", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["routerLinkActive", "router-link-active", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "form-class", 3, "value"], [3, "formGroupName"], ["id", "sourceCode", "type", "text", "formControlName", "columnnName", "placeholder", "Name", "value", "", 1, "form-control1", 3, "readonly"], ["formControlName", "dataType", "placeholder", "Choose DataType", "aria-label", "Default select example", 1, "form-select1", 3, "change"], [1, "checkboxdiv"], ["type", "checkbox", "formControlName", "mandatory", 3, "id"], [3, "for"], ["type", "text", "formControlName", "headerName", "placeholder", "Header Name", "value", "", 1, "form-control1", 3, "id", "readonly"], ["type", "text", "formControlName", "dateFormat", "placeholder", "Date Format", "value", "", 1, "form-control1", 3, "id", "readonly"], ["type", "text", "formControlName", "mappingColumn", "placeholder", "Mapping Column", "value", "", 1, "form-control1", 3, "id", "readonly"], ["type", "text", "formControlName", "delimeter", "placeholder", "Delimeter", "value", "", 1, "form-control1", 3, "id", "readonly"], ["type", "text", "formControlName", "defaultValue", "placeholder", "Default Value", "value", "", 1, "form-control1", 3, "id", "readonly"], ["type", "text", "formControlName", "repeatedTillNextValue", "placeholder", "Repeated Till Next Value", "value", "", 1, "form-control1", 3, "id", "readonly"], [1, "deleteIcon2"], [3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."]],
        template: function ExcelMappingNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "Template Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "Update Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "h2", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, "Select Minimum two mandatory row");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "External System");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](21, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "ng-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function ExcelMappingNewComponent_Template_ng_select_change_22_listener() {
              return ctx.getProcess(ctx.excelMappingForm.get("extCode").value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "ng-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, "Please select External System");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](25, ExcelMappingNewComponent_ng_option_25_Template, 2, 2, "ng-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](28, "Process Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](30, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "select", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function ExcelMappingNewComponent_Template_select_change_31_listener() {
              return ctx.getProcessName(ctx.excelMappingForm.get("proCode").value, ctx.excelMappingForm.get("extCode").value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](33, "--Please select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](34, ExcelMappingNewComponent_option_34_Template, 2, 2, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](37, "Data Starting Row");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](39, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](40, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](43, "Currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](45, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](46, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](48, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](49, "Sheet Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](50, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](51, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](52, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](53, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](54, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](55, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](56, "label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](57, "Is Header Present");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](58, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](59, "form", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](60, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](61, "table", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](62, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](63, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](65, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](66, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](67, "data type");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](68, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](69, "mandatory");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](70, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](71, "header name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](72, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](73, "date format");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](74, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](75, "mapping column");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](76, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](77, "delimeter");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](78, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](79, "default value");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](80, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](81, "repeated till next value");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](82, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](83, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](84, "tbody", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](85, ExcelMappingNewComponent_tr_85_Template, 30, 19, "tr", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](86, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](87, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](88, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ExcelMappingNewComponent_Template_a_click_88_listener() {
              return ctx.addSubArray();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](89, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](90, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](91, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](92, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](93, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ExcelMappingNewComponent_Template_button_click_93_listener() {
              return ctx.finalSubmit(ctx.excelMappingForm.value, ctx.addForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](94, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](95, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](96, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](97, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](16, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](17, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.excelMappingForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("disabled", ctx.editFlag ? "" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.extSysData);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("disabled", ctx.editFlag ? "" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.processName);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("disabled", ctx.editFlag ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.addForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.addForm.get("subArray")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", ctx.addForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("disabled", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](18, _c2));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName],
        styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\ntable.tableStyle1[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #A6AAB5;\n  font-size: 10px;\n  text-transform: uppercase;\n  border-bottom: 1px solid #F5F5F5;\n}\n\n.form-control1[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 10px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.form-control1[_ngcontent-%COMP%]:disabled, .form-control1[readonly][_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n\n.form-select1[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 2.25rem 0.375rem 0.75rem;\n  -moz-padding-start: calc(0.75rem - 3px);\n  font-size: 10px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.checkboxdiv[_ngcontent-%COMP%] {\n  padding-left: 25px;\n  padding-bottom: 15px;\n  cursor: pointer;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  pointer-events: all !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2VsLW1hcHBpbmctbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3RUFBQTtBQUFKOztBQUVBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUdHLGdDQUFBO0FBREo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3RUFBQTtBQUFKOztBQUVBOztFQUVJLHlCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxpUEFBQTtFQUNBLDRCQUFBO0VBQ0EseUNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3RUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsOEJBQUE7QUFFSiIsImZpbGUiOiJleGNlbC1tYXBwaW5nLW5ldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNsYXNzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM3OTc5Nzk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXRcclxufVxyXG50YWJsZS50YWJsZVN0eWxlMSB0aGVhZCB0ciB0aCB7XHJcblx0Y29sb3I6ICNBNkFBQjU7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Ly8gbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIC8vIHBhZGRpbmc6IDE4cHggMTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjVGNUY1IDtcclxufVxyXG4uZm9ybS1jb250cm9sMSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXRcclxufVxyXG4uZm9ybS1jb250cm9sMTpkaXNhYmxlZCxcclxuLmZvcm0tY29udHJvbDFbcmVhZG9ubHldIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICBvcGFjaXR5OiAxXHJcbn1cclxuLmZvcm0tc2VsZWN0MSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAyLjI1cmVtIC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgLW1vei1wYWRkaW5nLXN0YXJ0OiBjYWxjKDAuNzVyZW0gLSAzcHgpO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyUzZSUzY3BhdGggZmlsbD0nbm9uZScgc3Ryb2tlPSclMjMzNDNhNDAnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNMiA1bDYgNiA2LTYnLyUzZSUzYy9zdmclM2VcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgLjc1cmVtIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lXHJcbn1cclxuLmNoZWNrYm94ZGl2e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiJdfQ== */"]
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _excel_mapping_edit_excel_mapping_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./excel-mapping-edit/excel-mapping-edit.component */
      43728);
      /* harmony import */


      var _excel_mapping_new_excel_mapping_new_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./excel-mapping-new/excel-mapping-new.component */
      46527);
      /* harmony import */


      var _excel_mapping_excel_mapping_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./excel-mapping/excel-mapping.component */
      41987);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "",
        component: _excel_mapping_excel_mapping_component__WEBPACK_IMPORTED_MODULE_2__.ExcelMappingComponent
      }, {
        path: "excel-mapping-new",
        component: _excel_mapping_new_excel_mapping_new_component__WEBPACK_IMPORTED_MODULE_1__.ExcelMappingNewComponent
      }, {
        path: "excel-mapping-edit",
        component: _excel_mapping_edit_excel_mapping_edit_component__WEBPACK_IMPORTED_MODULE_0__.ExcelMappingEditComponent
      }];

      var _ExcelMappingRoutingModule = /*#__PURE__*/_createClass(function _ExcelMappingRoutingModule() {
        _classCallCheck(this, _ExcelMappingRoutingModule);
      });

      _ExcelMappingRoutingModule.??fac = function ExcelMappingRoutingModule_Factory(t) {
        return new (t || _ExcelMappingRoutingModule)();
      };

      _ExcelMappingRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: _ExcelMappingRoutingModule
      });
      _ExcelMappingRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](_ExcelMappingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
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

      _ExcelMappingModule.??fac = function ExcelMappingModule_Factory(t) {
        return new (t || _ExcelMappingModule)();
      };

      _ExcelMappingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
        type: _ExcelMappingModule
      });
      _ExcelMappingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _excel_mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExcelMappingRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](_ExcelMappingModule, {
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


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ExcelMappingComponent_tr_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ExcelMappingComponent_tr_26_Template_span_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r4);

            var exdata_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

            return ctx_r3.setDataFromSummaryToUpdateExcelMapping(exdata_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var exdata_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](exdata_r2.extSysCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](exdata_r2.extSys);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](exdata_r2.inputBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](exdata_r2.authStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](12, 5, exdata_r2.inputDtStamp, "medium"));
        }
      }

      function ExcelMappingComponent_ng_container_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/excel-mapping/excel-mapping-new"];
      };

      var _ExcelMappingComponent = /*#__PURE__*/function () {
        function _ExcelMappingComponent(apiService, toastService, router) {
          _classCallCheck(this, _ExcelMappingComponent);

          this.apiService = apiService;
          this.toastService = toastService;
          this.router = router;
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
          this.isLoading = false;
        }

        _createClass(_ExcelMappingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                'targets': [4]
              }],
              order: [[4, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
            };
            this.getexcelMappingSummary();
          }
        }, {
          key: "getexcelMappingSummary",
          value: function getexcelMappingSummary() {
            var _this19 = this;

            this.isLoading = true;
            this.apiService.getMappingSummary().subscribe(function (data) {
              _this19.excelData = data;
              _this19.isLoading = false;

              _this19.dtTrigger.next();
            });
          }
        }, {
          key: "setDataFromSummaryToUpdateExcelMapping",
          value: function setDataFromSummaryToUpdateExcelMapping(element) {
            console.log("element.extCode", element.extSysCode);
            this.apiService.setexcelSummaryData({
              extCode: element.extSysCode,
              extSysName: element.extSys,
              processName: element.processName,
              authStatus: element.authStatus
            });
            this.router.navigate(['/excel-mapping/excel-mapping-edit']);
          }
        }]);

        return _ExcelMappingComponent;
      }();

      _ExcelMappingComponent.??fac = function ExcelMappingComponent_Factory(t) {
        return new (t || _ExcelMappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _ExcelMappingComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: _ExcelMappingComponent,
        selectors: [["npr-excel-mapping"]],
        decls: 28,
        vars: 6,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], ["id", "dbTable1", "datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "primaryColor", 2, "cursor", "pointer", 3, "click"], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]],
        template: function ExcelMappingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "Template Mapping Summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "External System Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](18, "External system name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](20, "input by");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](22, "auth status");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](26, ExcelMappingComponent_tr_26_Template, 13, 8, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](27, ExcelMappingComponent_ng_container_27_Template, 5, 0, "ng-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.excelData);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGNlbC1tYXBwaW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_excel-mapping_excel-mapping_module_ts-es5.js.map