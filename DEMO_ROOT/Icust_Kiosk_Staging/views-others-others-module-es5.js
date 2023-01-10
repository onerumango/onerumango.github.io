(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-others-others-module"], {
    /***/
    "/kYN":
    /*!*******************************************************************************!*\
      !*** ./src/app/views/others/cheque-withdrawal/cheque-withdrawal.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ChequeWithdrawalComponent */

    /***/
    function kYN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChequeWithdrawalComponent", function () {
        return ChequeWithdrawalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_components_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/components/toastr/toastr.component */
      "YJH2");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/Dialog/dialog.service */
      "LP5l");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/shared/models/otp.model */
      "V4gq");
      /* harmony import */


      var _otp_verify_otp_verify_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../otp-verify/otp-verify.component */
      "zAir");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var _c0 = ["cdForm"];

      function ChequeWithdrawalComponent_mat_icon_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeWithdrawalComponent_mat_icon_15_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.goToServiceScreens();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "keyboard_backspace");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChequeWithdrawalComponent_div_26_input_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 44);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function ChequeWithdrawalComponent_div_26_mat_select_5_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r28.accountType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r28.accountType);
        }
      }

      function ChequeWithdrawalComponent_div_26_mat_select_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ChequeWithdrawalComponent_div_26_mat_select_5_Template_mat_select_selectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r29.getAccountType($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChequeWithdrawalComponent_div_26_mat_select_5_mat_option_1_Template, 2, 2, "mat-option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r26.accounttypeArray);
        }
      }

      function ChequeWithdrawalComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChequeWithdrawalComponent_div_26_input_4_Template, 1, 1, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChequeWithdrawalComponent_div_26_mat_select_5_Template, 2, 1, "mat-select", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.phoneNumber && !ctx_r1.accountDropdown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.phoneNumber && ctx_r1.accountDropdown);
        }
      }

      function ChequeWithdrawalComponent_div_27_mat_hint_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Account Balance : ", ctx_r31.curr, "", ctx_r31.formatAmount(ctx_r31.accountBal), " ");
        }
      }

      function ChequeWithdrawalComponent_div_27_mat_hint_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Holder Name : ", ctx_r32.userName, "");
        }
      }

      function ChequeWithdrawalComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account Number*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChequeWithdrawalComponent_div_27_Template_input_change_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.fetchByAccountNum(ctx_r33.chequewithdrawForm.get("accountNumber").value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChequeWithdrawalComponent_div_27_mat_hint_5_Template, 2, 2, "mat-hint", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChequeWithdrawalComponent_div_27_mat_hint_7_Template, 2, 2, "mat-hint", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.showAccountNum);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.showAccountNum);
        }
      }

      function ChequeWithdrawalComponent_div_28_input_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 55);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function ChequeWithdrawalComponent_div_28_mat_select_5_mat_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var id_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", id_r40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](id_r40);
        }
      }

      function ChequeWithdrawalComponent_div_28_mat_select_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ChequeWithdrawalComponent_div_28_mat_select_5_Template_mat_select_selectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r41.fetchByAccountNum($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChequeWithdrawalComponent_div_28_mat_select_5_mat_option_3_Template, 2, 2, "mat-option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r36.accountNoList);
        }
      }

      function ChequeWithdrawalComponent_div_28_mat_hint_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Account Balance :", ctx_r37.curr, " ", ctx_r37.formatAmount(ctx_r37.accountBal), "");
        }
      }

      function ChequeWithdrawalComponent_div_28_mat_hint_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Holder Name :", ctx_r38.userName, "");
        }
      }

      function ChequeWithdrawalComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account Number*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChequeWithdrawalComponent_div_28_input_4_Template, 1, 1, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChequeWithdrawalComponent_div_28_mat_select_5_Template, 4, 1, "mat-select", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChequeWithdrawalComponent_div_28_mat_hint_6_Template, 2, 2, "mat-hint", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChequeWithdrawalComponent_div_28_mat_hint_8_Template, 2, 2, "mat-hint", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.flag1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.flag1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.hideDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.hideDetails);
        }
      }

      function ChequeWithdrawalComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function ChequeWithdrawalComponent_input_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 58);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function ChequeWithdrawalComponent_input_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 58);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function ChequeWithdrawalComponent_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Account Branch is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChequeWithdrawalComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag ", ctx_r8.isedit ? ctx_r8.accountCurrencyImage(ctx_r8.chequewithdrawForm.controls["accountCurrency"].value) : ctx_r8.currencyImage, "");
        }
      }

      function ChequeWithdrawalComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag ", !ctx_r9.isedit ? ctx_r9.accountCurrencyImage(ctx_r9.chequewithdrawForm.controls["accountCurrency"].value) : ctx_r9.currencyImage, "");
        }
      }

      function ChequeWithdrawalComponent_input_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 59);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function ChequeWithdrawalComponent_input_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 59);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function ChequeWithdrawalComponent_div_51_input_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 64);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function ChequeWithdrawalComponent_div_51_mat_select_9_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeWithdrawalComponent_div_51_mat_select_9_mat_option_1_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var country_r46 = ctx.$implicit;

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r48.onCountryChange(country_r46);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r46 = ctx.$implicit;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r46.currencyCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r46.currencyCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag currency-flag-", ctx_r45.addCurrencyImage(country_r46.currencyCode), " alignImage");
        }
      }

      function ChequeWithdrawalComponent_div_51_mat_select_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChequeWithdrawalComponent_div_51_mat_select_9_mat_option_1_Template, 6, 5, "mat-option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r44.isedit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r44.countryValues);
        }
      }

      function ChequeWithdrawalComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transaction Currency* ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChequeWithdrawalComponent_div_51_input_8_Template, 1, 1, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChequeWithdrawalComponent_div_51_mat_select_9_Template, 2, 2, "mat-select", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag ", ctx_r12.currencyImage, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r12.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.phoneNumber);
        }
      }

      function ChequeWithdrawalComponent_div_52_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeWithdrawalComponent_div_52_mat_option_9_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var country_r51 = ctx.$implicit;

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r53.onCountryChange(country_r51);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r51 = ctx.$implicit;

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r51.currencyCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r51.currencyCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag currency-flag-", ctx_r50.addCurrencyImage(country_r51.currencyCode), " alignImage");
        }
      }

      function ChequeWithdrawalComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transaction Currency* ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChequeWithdrawalComponent_div_52_mat_option_9_Template, 6, 5, "mat-option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag ", ctx_r13.currencyImage, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.countryValues);
        }
      }

      function ChequeWithdrawalComponent_div_53_input_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 73);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function ChequeWithdrawalComponent_div_53_input_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 74, 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChequeWithdrawalComponent_div_53_input_5_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r59.transAmount = $event;
          })("keyup", function ChequeWithdrawalComponent_div_53_input_5_Template_input_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r61.OnInput($event);
          })("focus", function ChequeWithdrawalComponent_div_53_input_5_Template_input_focus_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r62.clicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r56.transAmount)("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r56.transAmt, "1."))("readonly", ctx_r56.isedit);
        }
      }

      function ChequeWithdrawalComponent_div_53_mat_error_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount must be greater than zero ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChequeWithdrawalComponent_div_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transaction Amount*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChequeWithdrawalComponent_div_53_input_4_Template, 1, 1, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChequeWithdrawalComponent_div_53_input_5_Template, 3, 6, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChequeWithdrawalComponent_div_53_mat_error_6_Template, 2, 0, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.chequewithdrawForm.get("transactionAmount").errors == null ? null : ctx_r14.chequewithdrawForm.get("transactionAmount").errors.min);
        }
      }

      function ChequeWithdrawalComponent_div_54_mat_error_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount must be greater than zero ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChequeWithdrawalComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transaction Amount*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 76, 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChequeWithdrawalComponent_div_54_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r65.transAmount = $event;
          })("keyup", function ChequeWithdrawalComponent_div_54_Template_input_keyup_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r67.OnInput($event);
          })("focus", function ChequeWithdrawalComponent_div_54_Template_input_focus_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r68.clicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChequeWithdrawalComponent_div_54_mat_error_7_Template, 2, 0, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r15.transAmount)("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, ctx_r15.transAmt, "1."));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.chequewithdrawForm.get("transactionAmount").errors == null ? null : ctx_r15.chequewithdrawForm.get("transactionAmount").errors.min);
        }
      }

      function ChequeWithdrawalComponent_input_59_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ChequeWithdrawalComponent_input_59_Template_input_keypress_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r69.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChequeWithdrawalComponent_input_60_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ChequeWithdrawalComponent_input_60_Template_input_keypress_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r71.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChequeWithdrawalComponent_mat_error_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cheque Number is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChequeWithdrawalComponent_div_82_div_8_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r84.denominationLimit[2000], " ");
        }
      }

      function ChequeWithdrawalComponent_div_82_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "2000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 94, 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChequeWithdrawalComponent_div_82_div_8_Template_input_keyup_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r85.totalAmountValue(_r73);
          })("keypress", function ChequeWithdrawalComponent_div_82_div_8_Template_input_keypress_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r87.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChequeWithdrawalComponent_div_82_div_8_mat_error_13_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r74.denominationlimit && _r83.value > ctx_r74.denominationLimit[2000]);
        }
      }

      function ChequeWithdrawalComponent_div_82_div_9_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r89.denominationLimit[500], " ");
        }
      }

      function ChequeWithdrawalComponent_div_82_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 98, 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChequeWithdrawalComponent_div_82_div_9_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r90.totalAmountValue(_r73);
          })("keypress", function ChequeWithdrawalComponent_div_82_div_9_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

            var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r92.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChequeWithdrawalComponent_div_82_div_9_mat_error_12_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r75.denominationlimit && _r88.value > ctx_r75.denominationLimit[500]);
        }
      }

      function ChequeWithdrawalComponent_div_82_div_10_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r94.denominationLimit[200], " ");
        }
      }

      function ChequeWithdrawalComponent_div_82_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 100, 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChequeWithdrawalComponent_div_82_div_10_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r95.totalAmountValue(_r73);
          })("keypress", function ChequeWithdrawalComponent_div_82_div_10_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

            var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r97.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChequeWithdrawalComponent_div_82_div_10_mat_error_12_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r76.denominationlimit && _r93.value > ctx_r76.denominationLimit[200]);
        }
      }

      function ChequeWithdrawalComponent_div_82_div_11_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r99.denominationLimit[100], " ");
        }
      }

      function ChequeWithdrawalComponent_div_82_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 102, 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChequeWithdrawalComponent_div_82_div_11_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r100.totalAmountValue(_r73);
          })("keypress", function ChequeWithdrawalComponent_div_82_div_11_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

            var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r102.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChequeWithdrawalComponent_div_82_div_11_mat_error_12_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r77.denominationlimit && _r98.value > ctx_r77.denominationLimit[100]);
        }
      }

      function ChequeWithdrawalComponent_div_82_div_12_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r104.denominationLimit[50], " ");
        }
      }

      function ChequeWithdrawalComponent_div_82_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 104, 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChequeWithdrawalComponent_div_82_div_12_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r105.totalAmountValue(_r73);
          })("keypress", function ChequeWithdrawalComponent_div_82_div_12_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106);

            var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r107.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChequeWithdrawalComponent_div_82_div_12_mat_error_12_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r78.denominationlimit && _r103.value > ctx_r78.denominationLimit[50]);
        }
      }

      function ChequeWithdrawalComponent_div_82_div_13_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r109.denominationLimit[20], " ");
        }
      }

      function ChequeWithdrawalComponent_div_82_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 106, 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChequeWithdrawalComponent_div_82_div_13_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r110.totalAmountValue(_r73);
          })("keypress", function ChequeWithdrawalComponent_div_82_div_13_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111);

            var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r112.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChequeWithdrawalComponent_div_82_div_13_mat_error_12_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r79.denominationlimit && _r108.value > ctx_r79.denominationLimit[20]);
        }
      }

      function ChequeWithdrawalComponent_div_82_div_14_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r114.denominationLimit[10], " ");
        }
      }

      function ChequeWithdrawalComponent_div_82_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 108, 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChequeWithdrawalComponent_div_82_div_14_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r115.totalAmountValue(_r73);
          })("keypress", function ChequeWithdrawalComponent_div_82_div_14_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116);

            var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r117.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChequeWithdrawalComponent_div_82_div_14_mat_error_12_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r80.denominationlimit && _r113.value > ctx_r80.denominationLimit[10]);
        }
      }

      function ChequeWithdrawalComponent_div_82_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 110, 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChequeWithdrawalComponent_div_82_div_15_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r119.totalAmountValue(_r73);
          })("keypress", function ChequeWithdrawalComponent_div_82_div_15_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120);

            var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r121.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChequeWithdrawalComponent_div_82_mat_error_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total amount should be equal to ", ctx_r82.chequewithdrawForm.value.transactionAmount, " ");
        }
      }

      function ChequeWithdrawalComponent_div_82_Template(rf, ctx) {
        if (rf & 1) {
          var _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", null, 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Denomination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChequeWithdrawalComponent_div_82_div_8_Template, 14, 1, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChequeWithdrawalComponent_div_82_div_9_Template, 13, 1, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChequeWithdrawalComponent_div_82_div_10_Template, 13, 1, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ChequeWithdrawalComponent_div_82_div_11_Template, 13, 1, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChequeWithdrawalComponent_div_82_div_12_Template, 13, 1, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChequeWithdrawalComponent_div_82_div_13_Template, 13, 1, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChequeWithdrawalComponent_div_82_div_14_Template, 13, 1, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChequeWithdrawalComponent_div_82_div_15_Template, 11, 0, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChequeWithdrawalComponent_div_82_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123);

            var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r122.totalAmount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ChequeWithdrawalComponent_div_82_mat_error_23_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.chequewithdrawForm.value.transactionCurrency == "INR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.chequewithdrawForm.value.transactionCurrency == "INR" || ctx_r19.chequewithdrawForm.value.transactionCurrency == "USD" || ctx_r19.chequewithdrawForm.value.transactionCurrency == "AED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.chequewithdrawForm.value.transactionCurrency == "INR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.chequewithdrawForm.value.transactionCurrency == "INR" || ctx_r19.chequewithdrawForm.value.transactionCurrency == "USD" || ctx_r19.chequewithdrawForm.value.transactionCurrency == "AED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.chequewithdrawForm.value.transactionCurrency == "INR" || ctx_r19.chequewithdrawForm.value.transactionCurrency == "USD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.chequewithdrawForm.value.transactionCurrency == "INR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.chequewithdrawForm.value.transactionCurrency == "INR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.chequewithdrawForm.value.transactionCurrency == "INR" || ctx_r19.chequewithdrawForm.value.transactionCurrency == "USD" || ctx_r19.chequewithdrawForm.value.transactionCurrency == "AED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r19.totalAmount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.enableBtn1);
        }
      }

      function ChequeWithdrawalComponent_button_87_Template(rf, ctx) {
        if (rf & 1) {
          var _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeWithdrawalComponent_button_87_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r125);

            var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r124.goToServiceScreens();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CANCEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChequeWithdrawalComponent_div_88_Template(rf, ctx) {
        if (rf & 1) {
          var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeWithdrawalComponent_div_88_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127);

            var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r126.onSaveofChequeWithdraw(ctx_r126.chequewithdrawForm.value, ctx_r126.ifQRvariable, ctx_r126.cdForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "GENERATE TOKEN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r21.enableContinue || !ctx_r21.chequewithdrawForm.get("transactionCurrency").valid || !ctx_r21.chequewithdrawForm.get("accountNumber").valid || !ctx_r21.chequewithdrawForm.get("accountType").valid || !ctx_r21.chequewithdrawForm.get("accountCurrency").valid || !ctx_r21.chequewithdrawForm.get("transactionAmount").valid || !ctx_r21.chequewithdrawForm.get("chequeNumber").valid || !ctx_r21.chequewithdrawForm.get("totalChargeAmount").valid || !ctx_r21.chequewithdrawForm.get("totalTransactionAmount").valid);
        }
      }

      function ChequeWithdrawalComponent_div_89_Template(rf, ctx) {
        if (rf & 1) {
          var _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeWithdrawalComponent_div_89_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r129);

            var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r128.getOTP(ctx_r128.chequewithdrawForm.value, ctx_r128.ifQRvariable, ctx_r128.cdForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CONTINUE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r22.enableContinue || !ctx_r22.chequewithdrawForm.get("transactionAmount").valid || !ctx_r22.chequewithdrawForm.get("transactionCurrency").valid || !ctx_r22.chequewithdrawForm.get("accountNumber").valid || !ctx_r22.chequewithdrawForm.get("accountType").valid || !ctx_r22.chequewithdrawForm.get("accountCurrency").valid || !ctx_r22.chequewithdrawForm.get("transactionAmount").valid || !ctx_r22.chequewithdrawForm.get("chequeNumber").valid || !ctx_r22.chequewithdrawForm.get("totalChargeAmount").valid || !ctx_r22.chequewithdrawForm.get("totalTransactionAmount").valid);
        }
      }

      var ChequeWithdrawalComponent = /*#__PURE__*/function () {
        function ChequeWithdrawalComponent(router, toast, formBuilder, dialogService, apiService, dialog, cdr, ls, snack, changeDef) {
          _classCallCheck(this, ChequeWithdrawalComponent);

          this.router = router;
          this.toast = toast;
          this.formBuilder = formBuilder;
          this.dialogService = dialogService;
          this.apiService = apiService;
          this.dialog = dialog;
          this.cdr = cdr;
          this.ls = ls;
          this.snack = snack;
          this.changeDef = changeDef;
          this.ifQRvariable = false;
          this.countryFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.productCode = "CQW";
          this.tokenOrigin = "Kiosk";
          this.accountType = ['Savings', 'Current', 'Deposit'];
          this.holderName = ['Jane smith', 'Micheal smith'];
          this.defaultValue = {
            name: 'Deutschland',
            alpha2Code: 'DE',
            alpha3Code: 'DEU',
            numericCode: '276',
            callingCode: '+49'
          };
          this.accounttypeArray = [];
          this.idList = [];
          this.tokenObjects = new app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__["TokenObjects"]();
          this.isedit = true;
          this.enableContinue = true;
          this.currencyImage = "";
          this.showAccountNum = true;
          this.showAccoutType = true;
          this.oTpModel = new app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_9__["otpModel"]();
          this.denomCodeArray = [{
            key: 'count2000',
            value: 2000
          }, {
            key: 'count500',
            value: 500
          }, {
            key: 'count200',
            value: 200
          }, {
            key: 'count100',
            value: 100
          }, {
            key: 'count50',
            value: 50
          }, {
            key: 'count20',
            value: 20
          }, {
            key: 'count10',
            value: 10
          }, {
            key: 'count1',
            value: 1
          }];
          this.hideDetails = false; // accountNoList: any[];

          this.accountNoList = [];
          this.enableBtn = true;
          this.enableBtn1 = false;
          this.accountDropdown = false;
          this.flag1 = false;
        }

        _createClass(ChequeWithdrawalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.phoneNumber = localStorage.getItem("phonenumFromLogin");
            this.appointmentId = this.ls.getItem("TransactionType");
            this.transBranch = localStorage.getItem("TRANSACTIONBRANCH");
            this.qrData = JSON.parse(JSON.parse(localStorage.getItem('scannerData')));
            console.log("QRData", this.qrData);
            this.custValidation = localStorage.getItem("customerValidation");
            this.custNameFromLogin = localStorage.getItem("FromLogin");

            if (this.custValidation == "New Customer") {
              this.showAccountNum = false;
              this.showAccoutType = false;
            }

            if (this.custNameFromLogin != null) {
              this.showAccountNum = false;
            }

            this.chequewithdrawForm = this.formBuilder.group({
              transactionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              chequeNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              customerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              accountType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              holderName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              accountCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              totalAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(.1)]],
              accountBalance: [''],
              productCode: ['CQW', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              tokenOrigin: ['Kiosk', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              totalChargeAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              totalTransactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              // audit
              createdBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              createdTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              modifiedBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              modifiedTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              recordStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              authStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              version: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              accountBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
            console.log(this.chequewithdrawForm.value);

            if (this.phoneNumber && this.custNameFromLogin == null && this.appointmentId == null) {
              this.ifQRvariable = false;
              this.gettingallTansactionDetails(this.phoneNumber);
            } // else {


            if (this.qrData != null) {
              this.ifQRvariable = true;
              console.log("Account", this.qrData.accountId);
              this.chequewithdrawForm.controls.holderName.setValue(this.qrData.holderName);
              this.chequewithdrawForm.controls.accountType.setValue(this.qrData.accountType);
              this.chequewithdrawForm.controls.accountNumber.setValue(this.qrData.accountId);
              this.getChargeDetails(this.qrData.accountId, '');
              this.chequewithdrawForm.controls.transactionAmount.setValue(this.qrData.transactionAmount);
              this.chequewithdrawForm.controls.accountCurrency.setValue(this.qrData.accountCurrency);
              this.chequewithdrawForm.controls.transactionCurrency.setValue(this.qrData.transactionCurrency);
              this.accountBal = this.qrData.accountBalance;
              this.customerID = this.qrData.customerId;
              this.currencyImage = 'currency-flag-' + this.qrData.accountCurrency.toLowerCase();
              this.currencyImage = 'currency-flag-' + this.qrData.transactionCurrency.toLowerCase();
              this.chequewithdrawForm.controls.transactionBranch.setValue(this.qrData.transactionBranch);

              if (this.qrData.transactionBranch != null && this.qrData.transactionBranch != '') {
                this.chequewithdrawForm.controls.transactionBranch.setValue(this.qrData.transactionBranch);
              } else {
                this.chequewithdrawForm.controls.transactionBranch.setValue('Kasturi Nagar');
              }

              this.getAccountBranch();
            }

            this.getCountrynameValues();
            this.getAccountBranch();
            this.gettransactionBranch("account_branch");
            this.getBankInformation("KN");

            if (this.appointmentId.data.appointmentId) {
              this.cashWithdrawlData();
            }
          }
        }, {
          key: "fetchByAccountNum",
          value: function fetchByAccountNum(accNum) {
            var _this = this;

            this.chequewithdrawForm.controls.transactionAmount.reset();
            this.chequewithdrawForm.controls.totalTransactionAmount.setValue(this.chequewithdrawForm.controls.totalChargeAmount.value);
            this.chequewithdrawForm.controls.chequeNumber.reset();
            console.log("Account Numebr", accNum);
            this.apiService.fetchByaccNum(accNum).subscribe(function (res) {
              console.log('Account Number Rsp', res);

              _this.getChargeDetails(accNum, '');

              _this.userName = res.accHolderName;
              _this.accountBal = res.accBalance;
              _this.custmerID = res.customerId;
              _this.accountNumber = res.accountId;
              _this.accountCurrency = res.accountCurrency;
              _this.curr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["getCurrencySymbol"])(res.currency, "narrow");

              _this.chequewithdrawForm.controls.accountType.setValue(res.accountType);

              _this.chequewithdrawForm.controls.accountCurrency.setValue(res.currency);

              _this.chequewithdrawForm.controls.accountBranch.setValue(res.accountBranch);

              _this.chequewithdrawForm.controls.holderName.setValue(_this.userName);

              _this.currencyImage = 'currency-flag-' + res.currency.toLowerCase();
              _this.currencyImage = 'currency-flag-' + res.currency.toLowerCase();

              _this.getCountrynameValues();

              _this.chequewithdrawForm.controls.transactionCurrency.setValue(res.currency);

              _this.custAmountBal(accNum);

              _this.chequewithdrawForm.controls.transactionBranch.setValue('Kasturi Nagar');

              _this.apiService.fetchByaccDeatilsoncustId(res.customerId).subscribe(function (resp) {
                _this.phonenum = resp[0].phoneNumber;
                localStorage.setItem('otpPhoneNum', _this.phonenum);
              });
            });
          }
        }, {
          key: "getOTP",
          value: function getOTP(formData, type, cdForm) {
            var _this2 = this;

            this.chequewithdrawValues = formData;
            this.chequewithdrawtype = type;
            this.chequewithdrawform = cdForm;
            this.oTpModel.source = 'customer';
            this.oTpModel.source_key = 'mobile';
            this.oTpModel.source_value = this.phonenum;
            var amount = 50000;
            var transamountwithoutcomma = this.chequewithdrawValues.transactionAmount.replace(/,/g, "");
            console.log(transamountwithoutcomma);

            if (transamountwithoutcomma > amount) {
              this.apiService.getOtp(this.oTpModel).subscribe(function (otpResp) {
                if (otpResp) {
                  _this2.openDialogOTP(_this2.phonenum);

                  _this2.snack.open("An OTP has been sent to the Registered Mobile Number.", "", {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                  });
                }
              });
            } else {
              this.getOTPforSave(this.chequewithdrawValues, this.chequewithdrawtype, this.chequewithdrawform);
            }
          }
        }, {
          key: "openDialogOTP",
          value: function openDialogOTP(numbr) {
            var _this3 = this;

            var dialogRef = this.dialog.open(_otp_verify_otp_verify_component__WEBPACK_IMPORTED_MODULE_10__["OtpVerifyComponent"], {
              data: {
                number: numbr,
                type: "numbr"
              },
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (submit) {
              if (submit) {
                _this3.getOTPforSave(_this3.chequewithdrawValues, _this3.chequewithdrawtype, _this3.chequewithdrawform);
              }
            });
          }
        }, {
          key: "getOTPforSave",
          value: function getOTPforSave(formData, type, cdForm) {
            var _this4 = this;

            formData.transactionBranch = this.transBranch;
            var denominationData = {};
            var denominationDataArray = [];

            if (this.denomRequired == 'yes') {
              for (var i = 0; i < this.denomCodeArray.length; i++) {
                if (cdForm.value[this.denomCodeArray[i].key]) {
                  // denominationData.transactionId = this.cashdepositFor;
                  denominationData.denominationKey = this.denomCodeArray[i].value;
                  denominationData.denominationValue = +cdForm.value[this.denomCodeArray[i].key];
                  denominationData.currency = this.chequewithdrawForm.value.transactionCurrency; // denominationData.amountAvailiable = 15200 - (cdForm.value[this.denomCodeArray[i].key] * this.denomCodeArray[i].value);

                  denominationDataArray.push(denominationData);
                  console.log(denominationDataArray);
                  denominationData = {};
                }
              }
            }

            if (this.custValidation == "New Customer") {
              console.log("customer", this.custmerID);
              this.accountNum = formData.accountNumber;
              formData.customerId = this.custmerID ? this.custmerID : 0;
              formData.accountType = formData.accountType;
              formData.accountNumber = this.accountNumber;
              formData.holderName = formData.holderName;
              formData.accountCurrency = formData.accountCurrency;
              formData.transactionCurrency = formData.transactionCurrency;
              formData.transactionAmount = formData.transactionAmount.replace(/,/g, '');
              formData.productCode = this.productCode;
              formData.tokenOrigin = this.tokenOrigin;
              formData.accountBalance = this.accountBal;

              if (this.denomRequired == 'yes') {
                formData.denomination = denominationDataArray;
              }
            }

            formData.tokenBranch = "KN";

            if (this.appointmentId && this.appointmentId.data) {
              formData.transactionId = this.appointmentId.data.transactionId;
              formData.transactionStatus = this.appointmentId.data.transactionStatus;
            }

            formData.customerId = this.custmerID ? this.custmerID : 0;
            formData.accountType = formData.accountType;
            formData.accountNumber = this.accountNumber;
            formData.holderName = formData.holderName;
            formData.accountCurrency = formData.accountCurrency;
            formData.transactionCurrency = formData.transactionCurrency;
            formData.transactionAmount = formData.transactionAmount.replace(/,/g, '');
            formData.productCode = this.productCode;
            formData.tokenOrigin = this.tokenOrigin;
            formData.accountBalance = this.accountBal;
            this.apiService.saveofCashDeposit(formData).subscribe(function (resp) {
              console.log('Response Success', resp);
              _this4.chequeWithrwResponse = resp;
              _this4.tokenNum = _this4.chequeWithrwResponse.tokenNumber;
              _this4.estimatedTime = _this4.chequeWithrwResponse.estimatedWaitTime;
              localStorage.setItem("tokenNumer", _this4.tokenNum);
              localStorage.setItem("estimatedTiming", _this4.estimatedTime);
              _this4.enableContinue = false;

              if (_this4.chequeWithrwResponse) {
                _this4.dialogService.tokenGenerationDialog();
              }
            });
          }
        }, {
          key: "_keyPress",
          value: function _keyPress(event) {
            var pattern = /[0-9 a-z A-Z]/;
            var inputChar = String.fromCharCode(event.charCode);

            if (!pattern.test(inputChar)) {
              event.preventDefault();
            }
          }
        }, {
          key: "gettransactionBranch",
          value: function gettransactionBranch(key) {
            var _this5 = this;

            this.apiService.getTransactionBranch(key).subscribe(function (branches) {
              console.log('branches :: ', branches);
              _this5.trasactionBranches = branches;
            });
          }
        }, {
          key: "getAccountBranch",
          value: function getAccountBranch() {
            var _this6 = this;

            this.apiService.getBranchforKiosk().subscribe(function (data) {
              _this6.branchData = data;
              console.log(_this6.branchData);
              data.forEach(function (element, index) {
                _this6.branch = data[index].branchName;
                console.log(_this6.branch); // this.chequewithdrawForm.controls.accountBranch.setValue(this.branch);
              });
            });
          }
        }, {
          key: "getCountrynameValues",
          value: function getCountrynameValues() {
            var _this7 = this;

            this.apiService.getCountryValues().subscribe(function (allCountryValues) {
              _this7.countryValues = allCountryValues;
            });
          }
        }, {
          key: "onCountrySelected",
          value: function onCountrySelected($event) {
            console.log($event);
          }
        }, {
          key: "goToServiceScreens",
          value: function goToServiceScreens() {
            if (this.appointmentId) {
              if (this.appointmentId.data.appointmentId) {
                this.router.navigateByUrl('/sessions/login');
                localStorage.removeItem("FromLogin");
                localStorage.removeItem("TransactionType");
                localStorage.removeItem("customerId");
                localStorage.removeItem("phonenumFromLogin");
                localStorage.removeItem("customerValidation");
                localStorage.removeItem("otpPhoneNum");
                localStorage.removeItem("AccountBal");
                localStorage.removeItem("AccountNumber");
                localStorage.removeItem("ProductCode");
                localStorage.removeItem("tokenNumer");
                localStorage.removeItem("estimatedTiming");
                localStorage.removeItem("userId");
                localStorage.removeItem("scannerData");
                localStorage.removeItem("custholderName");
              }
            } else {
              this.router.navigateByUrl('/others/services');
            }
          }
        }, {
          key: "goToAuthenticate",
          value: function goToAuthenticate() {
            this.dialogService.authenticationDialog();
          }
        }, {
          key: "gettingallTansactionDetails",
          value: function gettingallTansactionDetails(phoneNumber) {
            var _this8 = this;

            this.phoneNumber = localStorage.getItem("phonenumFromLogin");
            this.apiService.gettingTransactionDetails(this.phoneNumber).subscribe(function (allTransactionResp) {
              console.log("All Transaction Details", allTransactionResp);
              _this8.userName = (allTransactionResp.firstName ? allTransactionResp.firstName + ' ' : ' ') + (allTransactionResp.middleName ? allTransactionResp.middleName + ' ' : ' ') + (allTransactionResp.lastName ? allTransactionResp.lastName : ' ');

              _this8.chequewithdrawForm.controls.holderName.setValue(_this8.userName);

              _this8.custID = allTransactionResp.customerId; // this.setBalance(allTransactionResp.custAccount);

              _this8.custAccountData = allTransactionResp.custAccount;
              _this8.accounttypeArray = _toConsumableArray(_this8.custAccountData).filter(function (_ref, index) {
                var accountType = _ref.accountType;
                return !_toConsumableArray(_this8.custAccountData).map(function (obj) {
                  return obj.accountType;
                }).includes(accountType, index + 1);
              });

              for (var j = 0; j < _this8.custAccountData.length; j++) {
                if (_this8.custAccountData[j].status == 'APPROVED') {
                  _this8.accountNoList.push(_this8.custAccountData[j]);
                }
              }

              if (_this8.custAccountData && _this8.accountNoList.length <= 1) {
                _this8.accountDropdown = false;
                _this8.hideDetails = true;
                var accTyp = allTransactionResp.custAccount[0].accountType;

                _this8.chequewithdrawForm.controls.accountType.setValue(accTyp);

                _this8.custAccountNumber(_this8.accountNoList[0]);
              } else {
                _this8.accountDropdown = true;
                _this8.hideDetails = true;
                var _accTyp = allTransactionResp.custAccount[0].accountType;

                _this8.chequewithdrawForm.controls.accountType.setValue(_accTyp);

                _this8.custAccountNumber(allTransactionResp.custAccount[0]);
              }
            });
          }
        }, {
          key: "getAccountType",
          value: function getAccountType(event) {
            this.chequewithdrawForm.controls.transactionAmount.reset();
            this.chequewithdrawForm.controls.totalTransactionAmount.setValue(this.chequewithdrawForm.controls.totalChargeAmount.value);
            this.chequewithdrawForm.controls.chequeNumber.reset();
            this.accountNoList = [];
            console.log(event);
            this.isedit = false;
            this.accountNum1 = _toConsumableArray(this.custAccountData).filter(function (accounNum, index) {
              return accounNum.accountType == event;
            });
            console.log(this.accountNum1); // this.accountNoList=this.accountNum1
            // this.accountNoList=this.accountNum1.map((acccount)=>
            // {
            //   return acccount.accountId
            // })

            for (var i = 0; i < this.custAccountData.length; i++) {
              if (this.custAccountData[i].status == 'APPROVED' && this.custAccountData[i].accountType == event) {
                this.accountNoList.push(this.custAccountData[i].accountId);
              }
            }

            console.log(this.accountNoList);

            if (this.accountNoList.length <= 1) {
              this.flag1 = false;
              this.chequewithdrawForm.controls.accountNumber.setValue(this.accountNoList[0]);
              this.getData(this.accountNoList[0]);
            } else {
              this.getData(this.accountNoList[0]);
              this.flag1 = true;
            }

            this.getChargeDetails(this.accountNoList[0], '');
          }
        }, {
          key: "getData",
          value: function getData(custNum) {
            this.hideDetails = true;
            console.log(custNum);
            var val = this.accountNum1.filter(function (value) {
              return value.accountId == custNum;
            });
            console.log(val);
            this.idList = _toConsumableArray(this.custAccountData).filter(function (item) {
              return item.accountType === val[0].accountType;
            });
            this.chequewithdrawForm.controls.accountCurrency.setValue(val[0].accountCurrency);
            this.chequewithdrawForm.controls.accountBranch.setValue(this.branch);
            this.curr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["getCurrencySymbol"])(val[0].accountCurrency, "narrow");
            this.chequewithdrawForm.controls.transactionCurrency.setValue(val[0].accountCurrency);
            this.currencyImage = 'currency-flag-' + val[0].accountCurrency.toLowerCase();
            console.log('data :: ', this.idList[0]);
            this.accountBal = this.idList[0].amount;
            console.log(this.accountBal);
            localStorage.setItem("AccountBal", this.accountBal); // this.chequewithdrawForm.controls.accountNumber.setValue(this.idList[0].accountId);

            this.custAmountBal(this.idList[0].accountId);
            this.chequewithdrawForm.controls.accountNumber.setValue(val[0].accountId);
            this.chequewithdrawForm.controls.accountBranch.setValue(val[0].accountBranch);
            this.getChargeDetails(val[0].accountId, '');
          }
        }, {
          key: "custAccountNumber",
          value: function custAccountNumber(custype) {
            this.isedit = false;
            this.idList = _toConsumableArray(this.custAccountData).filter(function (item) {
              return item.accountType === custype.accountType;
            }); // const defaultId = this.idList ? this.idList[0] : null;

            this.accountNoList = [];

            for (var i = 0; i < this.idList.length; i++) {
              if (this.idList[i].status == 'APPROVED') {
                this.accountNoList.push(this.idList[i].accountId);
              }
            }

            console.log(this.accountNoList);

            if (this.accountNoList.length <= 1) {
              // this.cashwithdrawForm.controls.accountNumber.patchValue(this.accountNoList[0]);
              this.flag1 = false; // this.getData(this.accountNoList[0]);

              this.chequewithdrawForm.controls.accountNumber.setValue(this.accountNoList[0]);
            } else {
              this.chequewithdrawForm.controls.accountNumber.setValue(this.accountNoList[0]);
              this.flag1 = true;
            } // this.chequewithdrawForm.controls.accountNumber.setValue(defaultId);


            this.chequewithdrawForm.controls.accountCurrency.setValue(custype.accountCurrency);
            this.chequewithdrawForm.controls.accountBranch.setValue(this.branch); //this.chequewithdrawForm.controls.transactionAmount.setValue(custype.amount);

            this.curr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["getCurrencySymbol"])(custype.accountCurrency, "narrow");
            this.chequewithdrawForm.controls.transactionCurrency.setValue(custype.accountCurrency); // this.chequewithdrawForm.controls.accountType.setValue(defaultId);

            this.currencyImage = 'currency-flag-' + custype.accountCurrency.toLowerCase(); // this.accountBal = this.idList[0].amount;

            console.log(this.accountBal);
            localStorage.setItem("AccountBal", this.accountBal); // this.chequewithdrawForm.controls.accountNumber.setValue(this.idList[0].accountId);

            this.custAmountBal(this.accountNoList[0]);
            this.chequewithdrawForm.controls.accountBranch.setValue(custype.accountBranch);
            this.getChargeDetails(this.accountNoList[0], custype.amount);
          }
        }, {
          key: "custAmountBal",
          value: function custAmountBal(custNum) {
            console.log(custNum);
            var account = this.idList.filter(function (record) {
              if (record.accountId == custNum) {
                return record;
              }
            });
            this.accNum = account[0].accountId;
            this.accountBal = account[0].amount;
            this.selectedAccountInfo = account[0];
          }
        }, {
          key: "setBalance",
          value: function setBalance(accountBalance) {
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            this.accountBal = accountBalance[index].currentBalance ? accountBalance[index].currentBalance : null;
          }
        }, {
          key: "onSaveofChequeWithdraw",
          value: function onSaveofChequeWithdraw(form, type, cdForm) {
            var _this9 = this;

            form.transactionBranch = this.transBranch;
            var denominationData = {};
            var denominationDataArray = [];

            if (this.qrData) {
              if (this.qrData.transactionBranch) {
                this.apiService.fetchBranchInfoByBranchName(this.qrData.transactionBranch).subscribe(function (response) {
                  _this9.qrBranchCode = response;
                });
              }
            }

            if (this.denomRequired == 'yes') {
              for (var i = 0; i < this.denomCodeArray.length; i++) {
                if (cdForm.value[this.denomCodeArray[i].key]) {
                  // denominationData.transactionId = this.cashdepositFor;
                  denominationData.denominationKey = this.denomCodeArray[i].value;
                  denominationData.denominationValue = +cdForm.value[this.denomCodeArray[i].key];
                  denominationData.currency = this.chequewithdrawForm.value.transactionCurrency; // denominationData.amountAvailiable = 15200 - (cdForm.value[this.denomCodeArray[i].key] * this.denomCodeArray[i].value);

                  denominationDataArray.push(denominationData);
                  console.log(denominationDataArray);
                  denominationData = {};
                }
              }
            }

            form.tokenBranch = "KN";
            console.log("onSaveofChequeWithdraw", form);

            if (!this.ifQRvariable) {
              this.accountNum = JSON.stringify(this.selectedAccountInfo.accountId);
              localStorage.setItem("AccountNumber", this.accountNum);
              localStorage.setItem("ProductCode", this.productCode);
              form.customerId = this.custID;
              form.transactionCurrency = form.transactionCurrency;
              form.transactionAmount = form.transactionAmount.replace(/,/g, '');
              form.accountNumber = this.selectedAccountInfo.accountId;
              form.accountType = form.accountType;
              form.productCode = this.productCode;
              form.tokenOrigin = this.tokenOrigin;
              form.accountBalance = this.accountBal;

              if (this.denomRequired == 'yes') {
                form.denomination = denominationDataArray;
              }
            } else {
              form.customerId = this.custID;
              form.accountType = form.accountType;
              form.accountNumber = form.accountNumber;
              form.holderName = form.holderName;
              form.accountCurrency = form.accountCurrency;
              form.transactionCurrency = form.transactionCurrency;
              form.transactionAmount = form.transactionAmount;
              form.productCode = this.productCode;
              form.tokenOrigin = this.tokenOrigin;
              form.accountBalance = this.accountBal;

              if (this.denomRequired == 'yes') {
                form.denomination = denominationDataArray;
              }
            }

            if (this.qrData) {
              if (this.qrData.transactionBranch) {
                form.tokenBranch = this.qrBranchCode.transactionBranch;
              }
            }

            console.log("this.appointmentId::", this.appointmentId);

            if (this.appointmentId && this.appointmentId.data) {
              form.transactionId = this.appointmentId.data.transactionId;
              form.transactionStatus = this.appointmentId.data.transactionStatus;
            }

            console.log(form.transactionId, form.transactionStatus);
            form.totalAmount = form.totalAmount.replace(/,/g, '');
            this.apiService.saveofCashDeposit(form).subscribe(function (resp) {
              console.log('Response Success', resp);
              _this9.chequeWithrwResponse = resp;
              _this9.tokenNum = _this9.chequeWithrwResponse.tokenNumber;
              _this9.estimatedTime = _this9.chequeWithrwResponse.estimatedWaitTime;
              localStorage.setItem("tokenNumer", _this9.tokenNum);
              localStorage.setItem("estimatedTiming", _this9.estimatedTime);
              _this9.enableContinue = false;

              if (_this9.chequeWithrwResponse) {
                _this9.dialogService.tokenGenerationDialog();
              }
            });
          }
        }, {
          key: "omit_number",
          value: function omit_number(event) {
            var key;
            key = event.charCode;
            return key > 47 && key < 58;
          }
        }, {
          key: "totalAmountValue",
          value: function totalAmountValue(cdForm) {
            this.a = this.chequewithdrawForm.value.transactionAmount;
            this.a = this.a.replace(/\,/g, ''); // 1125, but a string, so convert it to number

            this.a = parseInt(this.a, 10);
            this.chequewithdrawForm.value.totalAmount = (cdForm.value.count2000 ? cdForm.value.count2000 * 2000 : 0) + (cdForm.value.count500 ? cdForm.value.count500 * 500 : 0) + (cdForm.value.count200 ? cdForm.value.count200 * 200 : 0) + (cdForm.value.count100 ? cdForm.value.count100 * 100 : 0) + (cdForm.value.count50 ? cdForm.value.count50 * 50 : 0) + (cdForm.value.count20 ? cdForm.value.count20 * 20 : 0) + (cdForm.value.count10 ? cdForm.value.count10 * 10 : 0) + (cdForm.value.count1 ? cdForm.value.count1 * 1 : 0);
            this.chequewithdrawForm.value.totalAmount = this.chequewithdrawForm.value.totalAmount;
            console.log(this.chequewithdrawForm.value.totalAmount);
            console.log(this.chequewithdrawForm.value.transactionAmount);
            this.transamount = this.chequewithdrawForm.value.transactionAmount;
            this.totalAmount = this.chequewithdrawForm.value.totalAmount.toLocaleString("en-US");

            if (this.transamount != this.totalAmount) {
              this.enableBtn = false;
            } else {
              this.enableBtn = true;
            }

            if (this.transamount > this.totalAmount || this.transamount < this.totalAmount) {
              this.enableBtn1 = true;
            } else {
              this.enableBtn1 = false;
            }

            this.chequewithdrawForm.controls.totalAmount.setValue(this.chequewithdrawForm.value.totalAmount);
          }
        }, {
          key: "OnInput",
          value: function OnInput(event) {
            this.transAmt = event.target.value;
            console.log(event.target.value);
            this.totalAmount = 0; // comma separator using changeDetector

            var savedInput = this.transAmount; // this.transAmount = '';
            // this.changeDef.detectChanges();

            var lastCharIsPoint = false;

            if (savedInput.charAt(savedInput.length - 1) === '.') {
              lastCharIsPoint = true;
            }

            var num = savedInput.replace(/[^0-9.]/g, '');
            this.transAmt = Number(num) || '';
            this.transAmount = this.transAmt.toLocaleString('en-IN');

            if (lastCharIsPoint) {
              this.transAmount = this.transAmount.concat('.');
            }

            this.changeDef.detectChanges();
            this.balance = localStorage.getItem("AccountBal");

            if (parseFloat(this.balance) < parseFloat(this.transAmt)) {
              console.log("Bigger");
              this.snack.open("Transaction Amount should not exceed than Account Balance", 'OK', {
                duration: 2000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
              this.enableContinue = false;
            } else {
              this.enableContinue = true;
            }

            this.totalTransAmount = Number(this.transAmt) + Number(this.chargeDetails ? this.chargeDetails[0].amount : '');
            this.chequewithdrawForm.controls.totalTransactionAmount.setValue(this.totalTransAmount);
            this.cdr.markForCheck();
            this.cdr.detectChanges();
          }
        }, {
          key: "addCurrencyImage",
          value: function addCurrencyImage(currency) {
            return currency.toLowerCase();
          }
        }, {
          key: "onCountryChange",
          value: function onCountryChange(country) {
            var currency = country.currencyCode;
            this.currencyImage = 'currency-flag-' + currency.toLowerCase();
          }
        }, {
          key: "accountCurrencyImage",
          value: function accountCurrencyImage(accountCurrency) {
            return accountCurrency ? 'currency-flag-' + accountCurrency.toLowerCase() : '';
          }
        }, {
          key: "clicked",
          value: function clicked(event) {
            console.log(event);
          }
        }, {
          key: "getBankInformation",
          value: function getBankInformation(branchCode) {
            var _this10 = this;

            this.apiService.fetchBankInfoByBranchCode(branchCode).subscribe(function (resp) {
              console.log(resp);
              _this10.denomRequired = resp.denomRequired;

              if (resp.denomRequired == 'yes') {
                _this10.enableBtn = false;
                _this10.enableBtn1 = false;
              }
            });
          }
        }, {
          key: "formatAmount",
          value: function formatAmount(amount) {
            if (amount) {
              return amount && amount.toString().split('.')[0].length > 3 ? amount.toString().substring(0, amount.toString().split('.')[0].length - 3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + amount.toString().substring(amount.toString().split('.')[0].length - 3) : amount.toString();
            }
          }
        }, {
          key: "cashWithdrawlData",
          value: function cashWithdrawlData() {
            var _this11 = this;

            this.apiService.getAppointmentId(this.appointmentId.data.appointmentId).subscribe(function (resp) {
              console.log(resp);
              _this11.cashData = resp.data;
              _this11.custID = resp.data.customerId;
              _this11.ifQRvariable = true;

              _this11.chequewithdrawForm.controls.accountType.setValue(resp.data.accountType);

              _this11.chequewithdrawForm.controls.accountBranch.setValue(resp.data.accountBranch);

              _this11.chequewithdrawForm.controls.accountNumber.setValue(resp.data.accountNumber);

              _this11.chequewithdrawForm.controls.chequeNumber.setValue(resp.data.chequeNumber);

              _this11.getChargeDetails(resp.data.accountNumber, resp.data.transactionAmount);

              _this11.chequewithdrawForm.controls.accountCurrency.setValue(resp.data.accountCurrency);

              _this11.chequewithdrawForm.controls.transactionCurrency.setValue(resp.data.transactionCurrency);

              _this11.chequewithdrawForm.controls.transactionAmount.setValue(resp.data.transactionAmount);

              _this11.currencyImage = 'currency-flag-' + resp.data.transactionCurrency.toLowerCase();
              _this11.currencyImage = 'currency-flag-' + resp.data.accountCurrency.toLowerCase();
            });
          }
        }, {
          key: "getChargeDetails",
          value: function getChargeDetails(accountId, amount) {
            var _this12 = this;

            this.apiService.fetchChargeDetails(accountId).subscribe(function (resp) {
              console.log(resp);
              _this12.chargeDetails = resp;

              _this12.chequewithdrawForm.controls.totalChargeAmount.setValue(_this12.chargeDetails ? _this12.chargeDetails[0].amount : '');
            });

            if (this.cashData) {
              setTimeout(function () {
                _this12.totalTransAmount = Number(_this12.cashData.transactionAmount) + Number(_this12.chargeDetails ? _this12.chargeDetails[0].amount : '');

                _this12.chequewithdrawForm.controls.totalTransactionAmount.setValue(_this12.totalTransAmount);
              }, 1000);
              this.cdr.markForCheck();
              this.cdr.detectChanges();
            } else {
              console.log(this.chargeDetails);
              amount = 0;
              console.log(amount);
              setTimeout(function () {
                _this12.totalTransAmount = Number(amount) + Number(_this12.chargeDetails ? _this12.chargeDetails[0].amount : '');
                console.log(_this12.totalTransAmount);

                _this12.chequewithdrawForm.controls.totalTransactionAmount.setValue(_this12.totalTransAmount);
              }, 1000);
              this.cdr.markForCheck();
              this.cdr.detectChanges();
            } // console.log(this.totalTransAmount);

          }
        }]);

        return ChequeWithdrawalComponent;
      }();

      ChequeWithdrawalComponent.ɵfac = function ChequeWithdrawalComponent_Factory(t) {
        return new (t || ChequeWithdrawalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_components_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastrComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      ChequeWithdrawalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChequeWithdrawalComponent,
        selectors: [["app-cheque-withdrawal"]],
        viewQuery: function ChequeWithdrawalComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdForm = _t.first);
          }
        },
        inputs: {
          title: "title"
        },
        decls: 90,
        vars: 28,
        consts: [[1, "fullcard"], ["fxLayout", "row"], ["fxFlex", "chequewithdrawForm.get('transactionAmount').value > 0? 70% : 100%"], [1, "h1"], [2, "color", "grey", "padding-right", "4px"], [2, "padding-left", "4px"], [1, "chequecard", "topView"], [2, "padding", "2%"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["class", "backIcon", 3, "click", 4, "ngIf"], [1, "card-title"], [1, "full-width", 2, "padding", "0% 0% 3% 2%"], [3, "formGroup"], ["fxLayout", "column", "fxLayoutGap", "3%", "fxLayoutAlign", "space-between none"], ["fxLayout", "row wrap", 1, "flex-container", "stretch"], ["fxFlex", "25%", "fxFlex.xs", "100%", 4, "ngIf"], ["fxFlex", "25%", "fxFlex.xs", "100%"], [1, "accountBranch"], [1, "inputCard"], ["matInput", "", "type", "text", "class", "full-width", "formControlName", "accountBranch", 3, "readonly", 4, "ngIf"], [4, "ngIf"], [1, "totalAmount"], ["fxLayout", "row wrap", 1, "full-width"], ["fxFlex", "25%"], [3, "class", 4, "ngIf"], ["fxFlex", "75%"], ["matInput", "", "type", "text", "class", "full-width", "style", "font-size:110%", "formControlName", "accountCurrency", 3, "readonly", 4, "ngIf"], ["matInput", "", "type", "text", "maxlength", "6", "class", "full-width", "formControlName", "chequeNumber", 3, "keypress", 4, "ngIf"], ["matInput", "", "readonly", "", "formControlName", "totalChargeAmount", 1, "full-width"], ["matInput", "", "type", "text", "readonly", "", "onlyNumber", "", "formControlName", "totalTransactionAmount"], [1, "tooltip"], ["width", "80%", 3, "src"], [1, "tooltiptext"], [1, "totalAmount", "textcolor", 2, "margin-top", "10px", "margin-bottom", "6px"], [1, "totalAmount", "textcolor"], [1, "totalAmount", "textcolor", 2, "margin-right", "10px"], ["fxFlex", "30%", 4, "ngIf"], ["fxLayout", "row wrap", "id", "buttonDiv", 1, "flex-container", "stretch"], ["fxFlex", "30%", "fxFlex.xs", "100%", 1, "paddingCls"], ["mat-flat-button", "", "class", "buttonCancel full-width", 3, "click", 4, "ngIf"], ["fxFlex", "70%", "fxFlex.xs", "100%", "class", "paddingCls", 4, "ngIf"], [1, "backIcon", 3, "click"], ["matInput", "", "type", "text", "class", "full-width", "formControlName", "accountType", 3, "readonly", 4, "ngIf"], ["formControlName", "accountType", "style", "background-color: #f9fafb;", "placeholder", "Select Account Type", 3, "selectionChange", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "accountType", 1, "full-width", 3, "readonly"], ["formControlName", "accountType", "placeholder", "Select Account Type", 2, "background-color", "#f9fafb", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "type", "text", "formControlName", "accountNumber", 1, "full-width", 3, "change"], ["class", "totalAmount", 4, "ngIf"], ["class", "totalAmount", 3, "readonly", 4, "ngIf"], [1, "totalAmount", 3, "readonly"], ["matInput", "", "type", "text", "class", "full-width", "formControlName", "accountNumber", 3, "readonly", 4, "ngIf"], ["formControlName", "accountNumber", "style", "background-color: #f9fafb;", 3, "selectionChange", 4, "ngIf"], ["class", "totalAmount", "formControlName", "holderName", 3, "readonly", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "accountNumber", 1, "full-width", 3, "readonly"], ["formControlName", "accountNumber", 2, "background-color", "#f9fafb", 3, "selectionChange"], ["formControlName", "holderName", 1, "totalAmount", 3, "readonly"], ["matInput", "", "type", "text", "formControlName", "accountBranch", 1, "full-width", 3, "readonly"], ["matInput", "", "type", "text", "formControlName", "accountCurrency", 1, "full-width", 2, "font-size", "110%", 3, "readonly"], ["fxFlex", "30%"], ["fxFlex", "70%"], ["matInput", "", "type", "text", "class", "full-width", "formControlName", "transactionCurrency", 3, "readonly", 4, "ngIf"], ["formControlName", "transactionCurrency", "placeholder", "Select Transaction Currency", "id", "testSelect", "style", "background-color: #f9fafb;", 3, "disabled", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "transactionCurrency", 1, "full-width", 3, "readonly"], ["formControlName", "transactionCurrency", "placeholder", "Select Transaction Currency", "id", "testSelect", 2, "background-color", "#f9fafb", 3, "disabled"], ["style", "font-size:110%", 3, "value", "click", 4, "ngFor", "ngForOf"], [2, "font-size", "110%", 3, "value", "click"], ["fxFlex", "15%"], ["fxFlex", "85%"], ["formControlName", "transactionCurrency", "placeholder", "Select Transaction Currency", "id", "testSelect", 2, "background-color", "#f9fafb"], ["matInput", "", "type", "text", "class", "full-width", "formControlName", "transactionAmount", 3, "readonly", 4, "ngIf"], ["matInput", "", "class", "full-width", "formControlName", "transactionAmount", 3, "ngModel", "value", "readonly", "ngModelChange", "keyup", "focus", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "transactionAmount", 1, "full-width", 3, "readonly"], ["matInput", "", "formControlName", "transactionAmount", 1, "full-width", 3, "ngModel", "value", "readonly", "ngModelChange", "keyup", "focus"], ["myRef", ""], ["matInput", "", "formControlName", "transactionAmount", 1, "full-width", 3, "ngModel", "value", "ngModelChange", "keyup", "focus"], ["matInput", "", "type", "text", "maxlength", "6", "formControlName", "chequeNumber", 1, "full-width", 3, "keypress"], ["cdForm", "ngForm"], [1, "border-align"], ["fxLayout", "row", 1, "pH10", "full-width"], [1, "title-Font"], ["id", "denominationDiv", 1, "pH10", "full-width"], ["class", "paddingclass", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "paddingclass", "fxLayoutAlign", "start center", 4, "ngIf"], ["fxLayout", "row wrap", 1, "pH10", "full-width"], ["fxFlex", "53%", "fxFlex.xs", "100%"], ["matInput", "", "name", "totalAmount", "readonly", "", 1, "full-width", "inputClass", 3, "ngModel", "ngModelChange"], [1, "pl10", 2, "width", "150%"], ["fxLayoutAlign", "center center", 1, "paddingclass"], ["fxFlex", "20%"], [1, "quantityClass", "text-small"], ["fxFlex", "10%"], [1, "operationTypeClass", "text-small"], ["type", "text", "matInput", "", "name", "count2000", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count2000", ""], [1, "pl10"], ["fxLayoutAlign", "start center", 1, "paddingclass"], ["type", "text", "matInput", "", "name", "count500", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count500", ""], ["type", "text", "matInput", "", "name", "count200", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count200", ""], ["type", "text", "matInput", "", "name", "count100", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count100", ""], ["type", "text", "matInput", "", "name", "count50", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count50", ""], ["type", "text", "matInput", "", "name", "count20", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count20", ""], ["type", "text", "matInput", "", "name", "count10", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count10", ""], ["type", "text", "matInput", "", "name", "count1", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["mat-flat-button", "", 1, "buttonCancel", "full-width", 3, "click"], ["fxFlex", "70%", "fxFlex.xs", "100%", 1, "paddingCls"], ["mat-flat-button", "", 1, "buttonNext", "full-width", 3, "disabled", "click"]],
        template: function ChequeWithdrawalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cheque Withdrawal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-title", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChequeWithdrawalComponent_mat_icon_15_Template, 2, 0, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cheque Withdrawal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ChequeWithdrawalComponent_div_26_Template, 6, 2, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ChequeWithdrawalComponent_div_27_Template, 8, 2, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ChequeWithdrawalComponent_div_28_Template, 9, 4, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ChequeWithdrawalComponent_div_29_Template, 5, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-hint", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Account Branch*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ChequeWithdrawalComponent_input_34_Template, 1, 1, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ChequeWithdrawalComponent_input_35_Template, 1, 1, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ChequeWithdrawalComponent_mat_error_36_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-hint", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Account Currency*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ChequeWithdrawalComponent_div_43_Template, 1, 3, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ChequeWithdrawalComponent_div_44_Template, 1, 3, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ChequeWithdrawalComponent_input_46_Template, 1, 1, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ChequeWithdrawalComponent_input_47_Template, 1, 1, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ChequeWithdrawalComponent_div_51_Template, 10, 5, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ChequeWithdrawalComponent_div_52_Template, 10, 4, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ChequeWithdrawalComponent_div_53_Template, 7, 3, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ChequeWithdrawalComponent_div_54_Template, 8, 6, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-hint", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Cheque Number*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ChequeWithdrawalComponent_input_59_Template, 1, 0, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ChequeWithdrawalComponent_input_60_Template, 1, 0, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ChequeWithdrawalComponent_mat_error_61_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-hint", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Total Charge Amount*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-hint", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Total Transaction Amount*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, ChequeWithdrawalComponent_div_82_Template, 24, 10, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, ChequeWithdrawalComponent_button_87_Template, 2, 0, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, ChequeWithdrawalComponent_div_88_Template, 3, 1, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, ChequeWithdrawalComponent_div_89_Template, 3, 1, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.chequewithdrawForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chequewithdrawForm.get("accountBranch").touched && !ctx.chequewithdrawForm.get("accountBranch").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ifQRvariable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ifQRvariable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chequewithdrawForm.get("chequeNumber").touched && !ctx.chequewithdrawForm.get("chequeNumber").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/info.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Transaction Amount:", ctx.chequewithdrawForm.get("transactionAmount").value, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Charge Amount:", ctx.chequewithdrawForm.get("totalChargeAmount").value, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Transaction Amount:", ctx.chequewithdrawForm.get("totalTransactionAmount").value, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.denomRequired == "yes" && (ctx.chequewithdrawForm.get("transactionAmount").value > 0 || ctx.transAmt > 0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatHint"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]],
        styles: [".fullcard[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  height: 110%;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-top: 8px;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  height: 80%;\n  border-radius: 10px;\n}\n\n.paddingCls[_ngcontent-%COMP%] {\n  padding: 0% 2%;\n}\n\n.topView[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding-top: 0px;\n  padding-bottom: 106px;\n  margin-bottom: 2px;\n}\n\n.border-align[_ngcontent-%COMP%] {\n  margin-top: 45px;\n  height: 520px;\n  border-radius: 10px;\n}\n\n.h1[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding-top: 24px;\n  padding-left: 1%;\n}\n\n#buttonDiv[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-top: -2%;\n}\n\n#denominationDiv[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 24px;\n}\n\n.accountBranch[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #7e84a3;\n  padding-left: 10px;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin-top: 50px;\n  margin-left: 26px;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  min-width: 200px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  background-color: #fe6700;\n  color: #fff;\n  text-align: start;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  top: -49px;\n  left: 130%;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  right: 100%;\n  margin-top: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent #fe6700 transparent transparent;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.totalAmount.textcolor[_ngcontent-%COMP%] {\n  color: white;\n  font-size: smaller;\n  color: #304156;\n  padding-left: 10px;\n}\n\n.alignImage[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  float: right;\n}\n\n.outer-Div[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.content-Div[_ngcontent-%COMP%] {\n  padding: 6%;\n}\n\n.paddingright[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.closeDrawerIcon[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n\n.title-Class[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n.spaceDiv[_ngcontent-%COMP%] {\n  padding-right: 3%;\n}\n\n.spaceUserImage[_ngcontent-%COMP%] {\n  padding-left: 2%;\n  width: 12%;\n}\n\n.user-name-Div[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: bolder;\n  font-family: sans-serif;\n  margin-top: 10px;\n  margin-bottom: -10px;\n}\n\n.title-Font[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  color: #000000;\n  width: 90%;\n  font-weight: bold;\n}\n\n.token-Div[_ngcontent-%COMP%] {\n  font-size: x-small;\n  color: #7e84a3;\n  font-family: sans-serif;\n}\n\n.token-id-class[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  background-color: #fafafa;\n  border-radius: 4px;\n}\n\n.width100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.details-Div[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.mat-expansion-panel-spacing[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.icon[_ngcontent-%COMP%] {\n  float: right;\n  color: #000000;\n  font-weight: 700;\n}\n\n.btnConfirmClass[_ngcontent-%COMP%] {\n  background-color: #456efe;\n  color: white;\n  border-radius: 20px;\n  width: 120px;\n  font-family: sans-serif;\n  font-size: smaller;\n}\n\n.btnDiv[_ngcontent-%COMP%] {\n  padding-top: 15%;\n}\n\n.btnCancelClass[_ngcontent-%COMP%] {\n  background-color: #f8f8f8 !important;\n  color: #5d5d5d !important;\n  border-radius: 20px !important;\n  width: 120px !important;\n  font-family: sans-serif !important;\n  font-size: smaller !important;\n}\n\n.width50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 940px;\n  align-self: center;\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-top-color: #f5f5f5;\n  margin-left: 2%;\n}\n\n.buttonNext[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-color: #1BCD9D;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.buttonCancel[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border-color: white;\n  background-color: #E3E3E3;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.inputCard[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  box-sizing: border-box;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n  background-color: #F9FAFB;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.pb1[_ngcontent-%COMP%] {\n  padding-bottom: 1%;\n}\n\n.operationTypeClass[_ngcontent-%COMP%] {\n  color: #A1A1A1;\n  margin: auto;\n}\n\n.quantityClass[_ngcontent-%COMP%] {\n  color: #000000;\n  margin: auto;\n  font-weight: 500;\n}\n\n.paddingclass[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n\n.totalAmount[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #7e84a3;\n  padding-left: 10px;\n}\n\n.inputCard[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 2px 1px -1px #f8f8f8, 0 1px 0 #f8f8f8, 0 5px 8px 0 #e9e9e9;\n}\n\n.chargeDetailsTbl[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  border-collapse: collapse;\n  border-radius: 10px;\n}\n\n.chargeDetailsDiv[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.thchargeDetailsTbl[_ngcontent-%COMP%] {\n  background-color: #f2f0f0;\n  color: #968e8e;\n  font-family: sans-serif;\n  text-align: center;\n  border-bottom-style: none;\n}\n\n.tbchargeDetailsTbl[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  font-size: x-small;\n  font-family: sans-serif;\n  text-align: center;\n  color: #726868;\n}\n\n.titleHead[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n[_nghost-%COMP%]     mat-select-country > mat-form-field {\n  width: 100% !important;\n}\n\n[_nghost-%COMP%]     mat-select-country > mat-form-field > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-suffix > mat-icon > svg {\n  margin-bottom: -8px;\n}\n\n[_nghost-%COMP%]     mat-select-country > mat-form-field > div.mat-form-field-wrapper {\n  padding-bottom: 0.8rem;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2hlcXVlLXdpdGhkcmF3YWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQVFKOztBQU5BO0VBQ0ksYUFBQTtFQUNBLGdDQUFBO0FBU0o7O0FBUEE7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUFVSjs7QUFSQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBV0o7O0FBVEU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVlKOztBQVRBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFZSjs7QUFURTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseURBQUE7QUFZSjs7QUFWRTtFQUNFLG1CQUFBO0FBYUo7O0FBWEU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFjSjs7QUFYQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQWNKOztBQVhFO0VBQ0kseUJBQUE7QUFjTjs7QUFaRTtFQUNJLFdBQUE7QUFlTjs7QUFaRTtFQUNJLG1CQUFBO0FBZU47O0FBWkU7RUFDSSxtQkFBQTtBQWVOOztBQVpFO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFlTjs7QUFaRTtFQUNJLGlCQUFBO0FBZU47O0FBYkU7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUFnQk47O0FBYkU7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBZ0JOOztBQWJFO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBZ0JOOztBQVpFO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFlTjs7QUFiRTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWdCTjs7QUFkRTtFQUNJLFdBQUE7QUFpQk47O0FBZkU7RUFDSSx5QkFBQTtBQWtCTjs7QUFoQkU7RUFDSSxzQkFBQTtBQW1CTjs7QUFoQkU7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBbUJOOztBQWpCRTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFvQk47O0FBbEJFO0VBQ0ksZ0JBQUE7QUFxQk47O0FBbkJFO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0FBc0JOOztBQW5CRTtFQUNJLFVBQUE7QUFzQk47O0FBcEJFO0VBQ0ksWUFBQTtFQUNELGtCQUFBO0VBQ0MscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQXVCTjs7QUFyQkU7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBd0JOOztBQXJCRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQXdCSjs7QUF0QkU7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0FBeUJOOztBQXRCRTtFQUFPLFNBQUE7RUFBUyxVQUFBO0VBQ2QseUJBQUE7RUFDQSxpQkFBQTtBQTJCSjs7QUExQkk7RUFBYSx3QkFBQTtBQThCakI7O0FBNUJFO0VBQ0ksa0JBQUE7QUErQk47O0FBNUJFO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUErQk47O0FBNUJFO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQStCTjs7QUE1QkU7RUFDSSxXQUFBO0FBK0JOOztBQTVCRTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBK0JOOztBQTVCRTtFQUNJLHdFQUFBO0FBK0JOOztBQTFCRTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQTZCTjs7QUExQkU7RUFDSSxvQkFBQTtBQTZCTjs7QUExQkU7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUE2Qk47O0FBMUJFO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBNkJOOztBQTFCRTtFQUNJLG9CQUFBO0FBNkJOOztBQXpCQTtFQUNJLHNCQUFBO0FBNEJKOztBQXpCQTtFQUNJLG1CQUFBO0FBNEJKOztBQXpCQTtFQUNJLHNCQUFBO0FBNEJKOztBQTFCQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUE2QkY7O0FBM0JBO0VBQ0UsMEJBQUE7QUE4QkYiLCJmaWxlIjoiY2hlcXVlLXdpdGhkcmF3YWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbGNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTEwJTtcclxufVxyXG4uYmFja0ljb257XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuLmNoZXF1ZWNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ucGFkZGluZ0Nsc3tcclxuICAgIHBhZGRpbmc6IDAlIDIlO1xyXG59XHJcbi50b3BWaWV3e1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICB9XHJcbiAgLmJvcmRlci1hbGlnbntcclxuICAgIG1hcmdpbi10b3A6IDQ1cHg7IFxyXG4gICAgaGVpZ2h0OjUyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbi5oMXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcclxufVxyXG4jYnV0dG9uRGl2e1xyXG4gICAgd2lkdGg6ODAlO1xyXG4gICAgbWFyZ2luLXRvcDotMiVcclxufVxyXG4jZGVub21pbmF0aW9uRGl2e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uYWNjb3VudEJyYW5jaHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIGNvbG9yOiAjN2U4NGEzO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAudG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI2cHg7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xyXG4gIH1cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU2NzAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogLTQ5cHg7XHJcbiAgICBsZWZ0OiAxMzAlO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcCAudG9vbHRpcHRleHQ6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZlNjcwMCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIC50b3RhbEFtb3VudC50ZXh0Y29sb3J7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBjb2xvcjogIzMwNDE1NjtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4uYWxpZ25JbWFnZXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiAgLm91dGVyLURpdntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICB9XHJcbiAgLmNvbnRlbnQtRGl2e1xyXG4gICAgICBwYWRkaW5nOiA2JTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRpbmdyaWdodHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlRHJhd2VySWNvbntcclxuICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlLUNsYXNze1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuc3BhY2VEaXZ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG4gIH1cclxuICAuc3BhY2VVc2VySW1hZ2V7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICAgIHdpZHRoOiAxMiU7XHJcbiAgfVxyXG4gIFxyXG4gIC51c2VyLW5hbWUtRGl2e1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1Gb250e1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICBcclxuICAudG9rZW4tRGl2e1xyXG4gICAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICAgIGNvbG9yOiAjN2U4NGEzO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLnRva2VuLWlkLWNsYXNze1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIC53aWR0aDEwMHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5kZXRhaWxzLURpdntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICB9XHJcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtc3BhY2luZ3tcclxuICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmljb257XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5idG5Db25maXJtQ2xhc3N7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTZlZmU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gIH1cclxuICAuYnRuRGl2e1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTUlO1xyXG4gIH1cclxuICAuYnRuQ2FuY2VsQ2xhc3N7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZjggIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICM1ZDVkNWQgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiBzbWFsbGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC53aWR0aDUwe1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICAubGluZXtcclxuICAgICAgd2lkdGg6IDk0MHB4O1xyXG4gICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gICAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIH1cclxuICAuYnV0dG9uTmV4dHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFCQ0Q5RDtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbkNhbmNlbHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0UzRTM7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuaW5wdXRDYXJke1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBpbnB1dCB7Ym9yZGVyOjA7b3V0bGluZTowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RkFGQjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkfVxyXG4gICAgaW5wdXQ6Zm9jdXMge291dGxpbmU6bm9uZSFpbXBvcnRhbnQ7fVxyXG4gIFxyXG4gIC5wYjF7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxJTtcclxuICB9XHJcbiAgXHJcbiAgLm9wZXJhdGlvblR5cGVDbGFzc3tcclxuICAgICAgY29sb3I6ICNBMUExQTE7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnF1YW50aXR5Q2xhc3N7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWRkaW5nY2xhc3N7XHJcbiAgICAgIHBhZGRpbmc6IDIlO1xyXG4gIH1cclxuICBcclxuICAudG90YWxBbW91bnR7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgICAgY29sb3I6ICM3ZTg0YTM7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0Q2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4ICNmOGY4ZjgsXHJcbiAgICAgICAgICAgICAgICAgIDAgMXB4IDAgI2Y4ZjhmOCxcclxuICAgICAgICAgICAgICAgICAgMCA1cHggOHB4IDAgI2U5ZTllOTtcclxuICB9XHJcbiAgXHJcbiAgLmNoYXJnZURldGFpbHNUYmx7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGFyZ2VEZXRhaWxzRGl2e1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRoY2hhcmdlRGV0YWlsc1RibHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjBmMCA7XHJcbiAgICAgIGNvbG9yOiAjOTY4ZThlO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAudGJjaGFyZ2VEZXRhaWxzVGJse1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjNzI2ODY4O1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlSGVhZHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuXHJcbjpob3N0IDo6bmctZGVlcCBtYXQtc2VsZWN0LWNvdW50cnkgPiBtYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBtYXQtc2VsZWN0LWNvdW50cnkgPiBtYXQtZm9ybS1maWVsZCA+IGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyID4gZGl2Lm1hdC1mb3JtLWZpZWxkLWZsZXggPiBkaXYubWF0LWZvcm0tZmllbGQtc3VmZml4ID4gbWF0LWljb24gPiBzdmd7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbWF0LXNlbGVjdC1jb3VudHJ5ID4gbWF0LWZvcm0tZmllbGQgPiBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjhyZW07XHJcbn1cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbmlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn0iXX0= */"]
      });
      ChequeWithdrawalComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ChequeWithdrawalComponent,
        factory: ChequeWithdrawalComponent.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChequeWithdrawalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cheque-withdrawal',
            templateUrl: './cheque-withdrawal.component.html',
            styleUrls: ['./cheque-withdrawal.component.scss']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: app_shared_components_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_3__["ToastrComponent"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cdForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cdForm']
          }]
        });
      })();
      /***/

    },

    /***/
    "2ama":
    /*!*********************************************************************!*\
      !*** ./src/app/views/others/loan-payment/loan-payment.component.ts ***!
      \*********************************************************************/

    /*! exports provided: LoanPaymentComponent */

    /***/
    function ama(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoanPaymentComponent", function () {
        return LoanPaymentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/Dialog/dialog.service */
      "LP5l");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function LoanPaymentComponent_mat_option_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var test_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", test_r3.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", test_r3.viewValue, " ");
        }
      }

      function LoanPaymentComponent_mat_option_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var test_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", test_r4.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", test_r4.viewValue, " ");
        }
      }

      function LoanPaymentComponent_mat_option_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var test_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", test_r5.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", test_r5.viewValue, " ");
        }
      }

      var LoanPaymentComponent = /*#__PURE__*/function () {
        function LoanPaymentComponent(router, formBuilder, dialogService) {
          _classCallCheck(this, LoanPaymentComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.dialogService = dialogService;
          this.loanPayment = 'Loan Payment';
          this.testing = [{
            value: 'Demo',
            viewValue: 'Demo 1'
          }, {
            value: 'Demo',
            viewValue: 'Demo 2'
          }, {
            value: 'Demo',
            viewValue: 'Demo 3'
          }];
        }

        _createClass(LoanPaymentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loanpaymentForm = this.formBuilder.group({
              loanAccount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              currentArrears: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              currentDue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              principalOutstanding: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              payFromAccount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              holderName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              repaymentAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "goToServiceScreens",
          value: function goToServiceScreens() {
            this.router.navigateByUrl('/others/services');
          }
        }, {
          key: "goToAuthenticate",
          value: function goToAuthenticate() {
            this.dialogService.authenticationDialog();
          }
        }]);

        return LoanPaymentComponent;
      }();

      LoanPaymentComponent.ɵfac = function LoanPaymentComponent_Factory(t) {
        return new (t || LoanPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]));
      };

      LoanPaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoanPaymentComponent,
        selectors: [["app-loan-payment"]],
        decls: 74,
        vars: 5,
        consts: [[1, "fullcard"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "80%"], [1, "chequecard"], [2, "padding", "2%"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "backIcon", 3, "click"], [1, "card-title"], [1, "full-width", 2, "padding", "0% 3% 3% 2%"], [3, "formGroup"], ["fxLayout", "column", "fxLayoutGap", "5%", "fxLayoutAlign", "space-between none"], ["fxLayout", "row wrap", 1, "flex-container", "stretch"], ["fxFlex", "31%", "fxFlex.xs", "100%"], [1, "totalAmount"], [1, "firstCard"], ["formControlName", "loanAccount", 1, "full-width", 2, "background-color", "#f9fafb"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "23%", "fxFlex.xs", "100%"], [1, "loanCard"], ["matInput", "", "formControlName", "currentArrears", "type", "text", "name", "currentArrears", 1, "full-width", "inputClass"], ["matInput", "", "formControlName", "currentDue", "type", "text", "name", "currentDue", 1, "full-width", "inputClass"], ["matInput", "", "formControlName", "principalOutstanding", "type", "text", "name", "principalOutstanding", 1, "full-width", "inputClass"], ["layout", "row"], ["flex", "", 1, "line"], ["fxFlex", "33%", "fxFlex.xs", "100%"], [1, "inputCard"], ["formControlName", "payFromAccount", 1, "full-width", 2, "background-color", "#f9fafb"], ["formControlName", "holderName", 1, "full-width", 2, "background-color", "#f9fafb"], ["fxFlex", "34%", "fxFlex.xs", "100%"], ["matInput", "", "formControlName", "repaymentAmount", "type", "text", "name", "repaymentAmount", 1, "full-width", "inputClass"], ["fxFlex", "30%", "fxFlex.xs", "100%", 2, "padding", "0% 1%"], ["mat-flat-button", "", 1, "buttonCancel", "full-width", 3, "click"], ["fxFlex", "70%", "fxFlex.xs", "100%", 2, "padding", "0% 2%"], ["mat-flat-button", "", 1, "buttonNext", "full-width", 3, "disabled", "click"], [3, "value"]],
        template: function LoanPaymentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoanPaymentComponent_Template_mat_icon_click_7_listener() {
              return ctx.goToServiceScreens();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "keyboard_backspace");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Loan Payment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Loan Account*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LoanPaymentComponent_mat_option_24_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Current Arrears*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Current Due*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Principal Outstanding* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Pay from Account*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, LoanPaymentComponent_mat_option_51_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Account Balance : $12,09,98");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Holder Name* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-select", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, LoanPaymentComponent_mat_option_59_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Repayment Amount* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-card", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoanPaymentComponent_Template_button_click_69_listener() {
              return ctx.goToServiceScreens();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "CANCEL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoanPaymentComponent_Template_button_click_72_listener() {
              return ctx.goToAuthenticate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "CONTINUE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loanpaymentForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testing);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testing);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testing);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loanpaymentForm.get("loanAccount").valid || !ctx.loanpaymentForm.get("currentArrears").valid || !ctx.loanpaymentForm.get("currentDue").valid || !ctx.loanpaymentForm.get("principalOutstanding").valid || !ctx.loanpaymentForm.get("payFromAccount").valid || !ctx.loanpaymentForm.get("holderName").valid || !ctx.loanpaymentForm.get("repaymentAmount").valid);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]],
        styles: [".fullcard[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  height: 110%;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  cursor: pointer;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  height: auto;\n  border-radius: 10px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 24px;\n}\n\n.outer-Div[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.content-Div[_ngcontent-%COMP%] {\n  padding: 6%;\n}\n\n.paddingright[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.closeDrawerIcon[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n\n.title-Class[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n.spaceDiv[_ngcontent-%COMP%] {\n  padding-right: 3%;\n}\n\n.spaceUserImage[_ngcontent-%COMP%] {\n  padding-left: 2%;\n  width: 12%;\n}\n\n.user-name-Div[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: bolder;\n  font-family: sans-serif;\n  margin-top: 10px;\n  margin-bottom: -10px;\n}\n\n.title-Font[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  color: #000000;\n  width: 90%;\n  font-weight: bold;\n}\n\n.token-Div[_ngcontent-%COMP%] {\n  font-size: x-small;\n  color: #7e84a3;\n  font-family: sans-serif;\n}\n\n.token-id-class[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  background-color: #fafafa;\n  border-radius: 4px;\n}\n\n.width100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.details-Div[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.mat-expansion-panel-spacing[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.icon[_ngcontent-%COMP%] {\n  float: right;\n  color: #000000;\n  font-weight: 700;\n}\n\n.btnConfirmClass[_ngcontent-%COMP%] {\n  background-color: #456efe;\n  color: white;\n  border-radius: 20px;\n  width: 120px;\n  font-family: sans-serif;\n  font-size: smaller;\n}\n\n.btnDiv[_ngcontent-%COMP%] {\n  padding-top: 15%;\n}\n\n.btnCancelClass[_ngcontent-%COMP%] {\n  background-color: #f8f8f8 !important;\n  color: #5d5d5d !important;\n  border-radius: 20px !important;\n  width: 120px !important;\n  font-family: sans-serif !important;\n  font-size: smaller !important;\n}\n\n.width50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 97%;\n  align-self: center;\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-top-color: #f5f5f5;\n  margin-left: 2%;\n}\n\n.buttonNext[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-color: #1BCD9D;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.buttonCancel[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border-color: white;\n  background-color: #E3E3E3;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.inputCard[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  box-sizing: border-box;\n}\n\n.firstCard[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  box-sizing: border-box;\n}\n\n.loanCard[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  box-sizing: border-box;\n}\n\n.inputClass[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.pb1[_ngcontent-%COMP%] {\n  padding-bottom: 1%;\n}\n\n.operationTypeClass[_ngcontent-%COMP%] {\n  color: #A1A1A1;\n  margin: auto;\n}\n\n.quantityClass[_ngcontent-%COMP%] {\n  color: #000000;\n  margin: auto;\n  font-weight: 500;\n}\n\n.paddingclass[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n\n.totalAmount[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #7e84a3;\n  padding-left: 10px;\n}\n\n.inputCard[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 2px 1px -1px #f8f8f8, 0 1px 0 #f8f8f8, 0 5px 8px 0 #e9e9e9;\n}\n\n.chargeDetailsTbl[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  border-collapse: collapse;\n  border-radius: 10px;\n}\n\n.chargeDetailsDiv[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.thchargeDetailsTbl[_ngcontent-%COMP%] {\n  background-color: #f2f0f0;\n  color: #968e8e;\n  font-family: sans-serif;\n  text-align: center;\n  border-bottom-style: none;\n}\n\n.tbchargeDetailsTbl[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  font-size: x-small;\n  font-family: sans-serif;\n  text-align: center;\n  color: #726868;\n}\n\n.titleHead[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9hbi1wYXltZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFERTtFQUNJLHlCQUFBO0FBSU47O0FBRkU7RUFDSSxXQUFBO0FBS047O0FBRkU7RUFDSSxtQkFBQTtBQUtOOztBQUZFO0VBQ0ksbUJBQUE7QUFLTjs7QUFGRTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBS047O0FBRkU7RUFDSSxpQkFBQTtBQUtOOztBQUhFO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0FBTU47O0FBSEU7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBTU47O0FBSEU7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFNTjs7QUFGRTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBS047O0FBSEU7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFNTjs7QUFKRTtFQUNJLFdBQUE7QUFPTjs7QUFMRTtFQUNJLHlCQUFBO0FBUU47O0FBTkU7RUFDSSxzQkFBQTtBQVNOOztBQU5FO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVNOOztBQVBFO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQVVOOztBQVJFO0VBQ0ksZ0JBQUE7QUFXTjs7QUFURTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtBQVlOOztBQVRFO0VBQ0ksVUFBQTtBQVlOOztBQVZFO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQWFOOztBQVhFO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQWNOOztBQVhFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBY0o7O0FBWkU7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0FBZU47O0FBYkU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FBZ0JKOztBQWRFO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQWlCSjs7QUFkRTtFQUNJLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFpQk47O0FBZEU7RUFDSSxhQUFBO0FBaUJOOztBQWRFO0VBQ0ksa0JBQUE7QUFpQk47O0FBZEU7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQWlCTjs7QUFkRTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFpQk47O0FBZEU7RUFDSSxXQUFBO0FBaUJOOztBQWRFO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFpQk47O0FBZEU7RUFDSSx3RUFBQTtBQWlCTjs7QUFaRTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQWVOOztBQVpFO0VBQ0ksb0JBQUE7QUFlTjs7QUFaRTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQWVOOztBQVpFO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBZU47O0FBWkU7RUFDSSxvQkFBQTtBQWVOIiwiZmlsZSI6ImxvYW4tcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMTAlO1xyXG59XHJcbi5iYWNrSWNvbntcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNoZXF1ZWNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4gIC5vdXRlci1EaXZ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgfVxyXG4gIC5jb250ZW50LURpdntcclxuICAgICAgcGFkZGluZzogNiU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWRkaW5ncmlnaHR7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZURyYXdlckljb257XHJcbiAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1DbGFzc3tcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLnNwYWNlRGl2e1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcclxuICB9XHJcbiAgLnNwYWNlVXNlckltYWdle1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgICB3aWR0aDogMTIlO1xyXG4gIH1cclxuICBcclxuICAudXNlci1uYW1lLURpdntcclxuICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtRm9udHtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnRva2VuLURpdntcclxuICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgICBjb2xvcjogIzdlODRhMztcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC50b2tlbi1pZC1jbGFzc3tcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICAud2lkdGgxMDB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZGV0YWlscy1EaXZ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgfVxyXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLXNwYWNpbmd7XHJcbiAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29ue1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAuYnRuQ29uZmlybUNsYXNze1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2ZWZlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICB9XHJcbiAgLmJ0bkRpdntcclxuICAgICAgcGFkZGluZy10b3A6IDE1JTtcclxuICB9XHJcbiAgLmJ0bkNhbmNlbENsYXNze1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjNWQ1ZDVkICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGxlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAud2lkdGg1MHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgLmxpbmV7XHJcbiAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gICAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIH1cclxuICAuYnV0dG9uTmV4dHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFCQ0Q5RDtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbkNhbmNlbHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0UzRTM7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuaW5wdXRDYXJke1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAuZmlyc3RDYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5sb2FuQ2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICAuaW5wdXRDbGFzc3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpmb2N1c3tcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnBiMXtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gIH1cclxuICBcclxuICAub3BlcmF0aW9uVHlwZUNsYXNze1xyXG4gICAgICBjb2xvcjogI0ExQTFBMTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAucXVhbnRpdHlDbGFzc3tcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRpbmdjbGFzc3tcclxuICAgICAgcGFkZGluZzogMiU7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3RhbEFtb3VudHtcclxuICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgICBjb2xvcjogIzdlODRhMztcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuaW5wdXRDYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggI2Y4ZjhmOCxcclxuICAgICAgICAgICAgICAgICAgMCAxcHggMCAjZjhmOGY4LFxyXG4gICAgICAgICAgICAgICAgICAwIDVweCA4cHggMCAjZTllOWU5O1xyXG4gIH1cclxuICBcclxuICAuY2hhcmdlRGV0YWlsc1RibHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNoYXJnZURldGFpbHNEaXZ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAudGhjaGFyZ2VEZXRhaWxzVGJse1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMGYwIDtcclxuICAgICAgY29sb3I6ICM5NjhlOGU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC50YmNoYXJnZURldGFpbHNUYmx7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICM3MjY4Njg7XHJcbiAgfVxyXG5cclxuICAudGl0bGVIZWFke1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoanPaymentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-loan-payment',
            templateUrl: './loan-payment.component.html',
            styleUrls: ['./loan-payment.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "DLa6":
    /*!*******************************************************************************!*\
      !*** ./src/app/views/others/forex-transaction/forex-transaction.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ForexTransactionComponent */

    /***/
    function DLa6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForexTransactionComponent", function () {
        return ForexTransactionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/Dialog/dialog.service */
      "LP5l");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular-material-extensions/select-country */
      "6xI8");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function ForexTransactionComponent_mat_option_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var test_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", test_r2.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", test_r2.viewValue, " ");
        }
      }

      function ForexTransactionComponent_mat_option_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var test_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", test_r3.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", test_r3.viewValue, " ");
        }
      }

      var ForexTransactionComponent = /*#__PURE__*/function () {
        function ForexTransactionComponent(router, formBuilder, dialogService) {
          _classCallCheck(this, ForexTransactionComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.dialogService = dialogService;
          this.countryFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.defaultValue = {
            name: 'Deutschland',
            alpha2Code: 'DE',
            alpha3Code: 'DEU',
            numericCode: '276',
            callingCode: '+49'
          };
          this.forexTransaction = 'Forex Transaction';
          this.testing = [{
            value: 'Demo',
            viewValue: 'Demo 1'
          }, {
            value: 'Demo',
            viewValue: 'Demo 2'
          }, {
            value: 'Demo',
            viewValue: 'Demo 3'
          }];
        }

        _createClass(ForexTransactionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.forexForm = this.formBuilder.group({
              accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              holderName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              fxCurrency: [''],
              fxAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              negotiatedRate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              country: [{
                value: {
                  name: 'Deutschland',
                  alpha2Code: 'DE',
                  alpha3Code: 'DEU',
                  numericCode: '276',
                  callingCode: '+49'
                },
                disabled: false
              }]
            });
            this.forexForm.get('country').valueChanges.subscribe(function (country) {
              return console.log('this.countryFormGroup.get(\'country\').valueChanges', country);
            });
            this.countryFormControl.valueChanges.subscribe(function (country) {
              return console.log('this.countryFormControl.valueChanges', country);
            });
          }
        }, {
          key: "onCountrySelected",
          value: function onCountrySelected($event) {
            console.log($event);
          }
        }, {
          key: "goToServiceScreens",
          value: function goToServiceScreens() {
            this.router.navigateByUrl('/others/services');
          }
        }, {
          key: "goToToken",
          value: function goToToken() {
            this.dialogService.tokenGenerationDialog();
          }
        }]);

        return ForexTransactionComponent;
      }();

      ForexTransactionComponent.ɵfac = function ForexTransactionComponent_Factory(t) {
        return new (t || ForexTransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]));
      };

      ForexTransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForexTransactionComponent,
        selectors: [["app-forex-transaction"]],
        decls: 75,
        vars: 5,
        consts: [[1, "fullcard"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "80%"], [1, "chequecard"], [2, "padding", "2%"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "backIcon", 3, "click"], [1, "card-title"], [1, "full-width", 2, "padding", "0% 0% 3% 2%"], [3, "formGroup"], ["fxLayout", "column", "fxLayoutGap", "5%", "fxLayoutAlign", "space-between none"], ["fxLayout", "row wrap", 1, "flex-container", "stretch"], ["fxFlex", "33%", "fxFlex.xs", "100%"], [1, "totalAmount"], [1, "inputCard"], ["formControlName", "accountNumber", 1, "full-width", 2, "background-color", "#f9fafb"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "holderName", 1, "full-width", 2, "background-color", "#f9fafb"], [1, "radioDiv"], ["name", "transactionType"], ["value", "buy", "checked", "true"], ["value", "sell"], ["layout", "row"], ["flex", "", 1, "line"], [1, "inputCard", 2, "padding", "0% 6%"], ["formControlName", "fxCurrency", "label", "", "appearance", "none", 1, "full-width", "fxCurrencyClass", 3, "value", "onCountrySelected"], ["matInput", "", "formControlName", "fxAmount", "type", "text", "name", "fxAmount", 1, "full-width", "inputClass"], ["matInput", "", "formControlName", "negotiatedRate", "type", "text", "name", "accountNumber", 1, "full-width", "inputClass"], ["fxFlex", "30%", "fxFlex.xs", "100%", 2, "padding", "0% 1%"], ["mat-flat-button", "", 1, "buttonCancel", "full-width", 3, "click"], ["fxFlex", "70%", "fxFlex.xs", "100%", 2, "padding", "0% 2%"], ["mat-flat-button", "", 1, "buttonNext", "full-width", 3, "disabled", "click"], [3, "value"]],
        template: function ForexTransactionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForexTransactionComponent_Template_mat_icon_click_7_listener() {
              return ctx.goToServiceScreens();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "keyboard_backspace");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Forex Transaction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Account Number*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ForexTransactionComponent_mat_option_24_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Account Balance : $12,09470");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Holder Name*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ForexTransactionComponent_mat_option_32_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Transaction Type*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-radio-group", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-radio-button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Buy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \xA0 \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-radio-button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Sell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "hr", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "FX Currency*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-select-country", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCountrySelected", function ForexTransactionComponent_Template_mat_select_country_onCountrySelected_53_listener($event) {
              return ctx.onCountrySelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " FX Amount* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Negotiated Rate*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Exchange Rate : 0.89");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForexTransactionComponent_Template_button_click_70_listener() {
              return ctx.goToServiceScreens();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "CANCEL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForexTransactionComponent_Template_button_click_73_listener() {
              return ctx.goToToken();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "CONTINUE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forexForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testing);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testing);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.defaultValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.forexForm.get("accountNumber").valid || !ctx.forexForm.get("holderName").valid || !ctx.forexForm.get("fxCurrency").valid || !ctx.forexForm.get("fxAmount").valid || !ctx.forexForm.get("negotiatedRate").valid);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioButton"], _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_11__["MatSelectCountryComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]],
        styles: [".fullcard[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  height: 110%;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  cursor: pointer;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  height: auto;\n  border-radius: 10px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 24px;\n}\n\n.outer-Div[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.content-Div[_ngcontent-%COMP%] {\n  padding: 6%;\n}\n\n.paddingright[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.closeDrawerIcon[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n\n.title-Class[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n.spaceDiv[_ngcontent-%COMP%] {\n  padding-right: 3%;\n}\n\n.spaceUserImage[_ngcontent-%COMP%] {\n  padding-left: 2%;\n  width: 12%;\n}\n\n.user-name-Div[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: bolder;\n  font-family: sans-serif;\n  margin-top: 10px;\n  margin-bottom: -10px;\n}\n\n.title-Font[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  color: #000000;\n  width: 90%;\n  font-weight: bold;\n}\n\n.token-Div[_ngcontent-%COMP%] {\n  font-size: x-small;\n  color: #7e84a3;\n  font-family: sans-serif;\n}\n\n.token-id-class[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  background-color: #fafafa;\n  border-radius: 4px;\n}\n\n.width100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.details-Div[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.mat-expansion-panel-spacing[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.icon[_ngcontent-%COMP%] {\n  float: right;\n  color: #000000;\n  font-weight: 700;\n}\n\n.btnConfirmClass[_ngcontent-%COMP%] {\n  background-color: #456efe;\n  color: white;\n  border-radius: 20px;\n  width: 120px;\n  font-family: sans-serif;\n  font-size: smaller;\n}\n\n.btnDiv[_ngcontent-%COMP%] {\n  padding-top: 15%;\n}\n\n.btnCancelClass[_ngcontent-%COMP%] {\n  background-color: #f8f8f8 !important;\n  color: #5d5d5d !important;\n  border-radius: 20px !important;\n  width: 120px !important;\n  font-family: sans-serif !important;\n  font-size: smaller !important;\n}\n\n.width50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 940px;\n  align-self: center;\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-top-color: #f5f5f5;\n  margin-left: 2%;\n}\n\n.buttonNext[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-color: #1BCD9D;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.buttonCancel[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border-color: white;\n  background-color: #E3E3E3;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.inputCard[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  box-sizing: border-box;\n}\n\n.heightAdjust[_ngcontent-%COMP%] {\n  padding: 0;\n  padding-left: 10px;\n}\n\n.inputClass[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.pb1[_ngcontent-%COMP%] {\n  padding-bottom: 1%;\n}\n\n.operationTypeClass[_ngcontent-%COMP%] {\n  color: #A1A1A1;\n  margin: auto;\n}\n\n.quantityClass[_ngcontent-%COMP%] {\n  color: #000000;\n  margin: auto;\n  font-weight: 500;\n}\n\n.paddingclass[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n\n.totalAmount[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #7e84a3;\n  padding-left: 10px;\n}\n\n.inputCard[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 2px 1px -1px #f8f8f8, 0 1px 0 #f8f8f8, 0 5px 8px 0 #e9e9e9;\n}\n\n.chargeDetailsTbl[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  border-collapse: collapse;\n  border-radius: 10px;\n}\n\n.chargeDetailsDiv[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.thchargeDetailsTbl[_ngcontent-%COMP%] {\n  background-color: #f2f0f0;\n  color: #968e8e;\n  font-family: sans-serif;\n  text-align: center;\n  border-bottom-style: none;\n}\n\n.tbchargeDetailsTbl[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  font-size: x-small;\n  font-family: sans-serif;\n  text-align: center;\n  color: #726868;\n}\n\n.titleHead[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.radioDiv[_ngcontent-%COMP%] {\n  padding-top: 24px;\n  padding-left: 1rem;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  \n  background-color: blue !important;\n}\n\n  .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: blue !important;\n  \n}\n\n .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: blue !important;\n  \n}\n\n[_nghost-%COMP%]     mat-radio-button > label > span > span.mat-radio-outer-circle {\n  border: 1px solid white;\n  box-shadow: 1px 3px 6px #e1e1e2;\n}\n\n[_nghost-%COMP%]     mat-select-country > mat-form-field {\n  width: 100% !important;\n}\n\n[_nghost-%COMP%]     mat-select-country > mat-form-field > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-suffix > mat-icon > svg {\n  margin-bottom: -8px;\n}\n\n[_nghost-%COMP%]     mat-select-country > mat-form-field > div.mat-form-field-wrapper {\n  padding-bottom: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9yZXgtdHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQURFO0VBQ0kseUJBQUE7QUFJTjs7QUFGRTtFQUNJLFdBQUE7QUFLTjs7QUFGRTtFQUNJLG1CQUFBO0FBS047O0FBRkU7RUFDSSxtQkFBQTtBQUtOOztBQUZFO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFLTjs7QUFGRTtFQUNJLGlCQUFBO0FBS047O0FBSEU7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUFNTjs7QUFIRTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFNTjs7QUFIRTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQU1OOztBQUZFO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFLTjs7QUFIRTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQU1OOztBQUpFO0VBQ0ksV0FBQTtBQU9OOztBQUxFO0VBQ0kseUJBQUE7QUFRTjs7QUFORTtFQUNJLHNCQUFBO0FBU047O0FBTkU7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBU047O0FBUEU7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBVU47O0FBUkU7RUFDSSxnQkFBQTtBQVdOOztBQVRFO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0FBWU47O0FBVEU7RUFDSSxVQUFBO0FBWU47O0FBVkU7RUFDSSxZQUFBO0VBQ0Qsa0JBQUE7RUFDQyxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBYU47O0FBWEU7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBY047O0FBWEU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFjSjs7QUFaRTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUFlTjs7QUFiRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQWdCSjs7QUFiRTtFQUNJLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFnQk47O0FBYkU7RUFDSSxhQUFBO0FBZ0JOOztBQWJFO0VBQ0ksa0JBQUE7QUFnQk47O0FBYkU7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQWdCTjs7QUFiRTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFnQk47O0FBYkU7RUFDSSxXQUFBO0FBZ0JOOztBQWJFO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFnQk47O0FBYkU7RUFDSSx3RUFBQTtBQWdCTjs7QUFYRTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQWNOOztBQVhFO0VBQ0ksb0JBQUE7QUFjTjs7QUFYRTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQWNOOztBQVhFO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBY047O0FBWEU7RUFDSSxvQkFBQTtBQWNOOztBQVpFO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWVGOztBQWJFO0VBQ08sNEJBQUE7RUFDTCxpQ0FBQTtBQWdCSjs7QUFiQTtFQUNJLGlDQUFBO0VBQW9DLDRCQUFBO0FBaUJ4Qzs7QUFkQTtFQUNHLDZCQUFBO0VBQTZCLDBCQUFBO0FBa0JoQzs7QUFmQTtFQUNDLHVCQUFBO0VBQ0EsK0JBQUE7QUFrQkQ7O0FBZkE7RUFDSSxzQkFBQTtBQWtCSjs7QUFmQTtFQUNJLG1CQUFBO0FBa0JKOztBQWZBO0VBQ0ksc0JBQUE7QUFrQkoiLCJmaWxlIjoiZm9yZXgtdHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbGNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTEwJTtcclxufVxyXG4uYmFja0ljb257XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jaGVxdWVjYXJke1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuICAub3V0ZXItRGl2e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gIH1cclxuICAuY29udGVudC1EaXZ7XHJcbiAgICAgIHBhZGRpbmc6IDYlO1xyXG4gIH1cclxuICBcclxuICAucGFkZGluZ3JpZ2h0e1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2xvc2VEcmF3ZXJJY29ue1xyXG4gICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtQ2xhc3N7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zcGFjZURpdntcclxuICAgICAgcGFkZGluZy1yaWdodDogMyU7XHJcbiAgfVxyXG4gIC5zcGFjZVVzZXJJbWFnZXtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgd2lkdGg6IDEyJTtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXItbmFtZS1EaXZ7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlLUZvbnR7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC50b2tlbi1EaXZ7XHJcbiAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgICAgY29sb3I6ICM3ZTg0YTM7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAudG9rZW4taWQtY2xhc3N7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgLndpZHRoMTAwe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmRldGFpbHMtRGl2e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gIH1cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1zcGFjaW5ne1xyXG4gICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuaWNvbntcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgLmJ0bkNvbmZpcm1DbGFzc3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NmVmZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgfVxyXG4gIC5idG5EaXZ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNSU7XHJcbiAgfVxyXG4gIC5idG5DYW5jZWxDbGFzc3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogIzVkNWQ1ZCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsZXIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLndpZHRoNTB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5saW5le1xyXG4gICAgICB3aWR0aDogOTQwcHg7XHJcbiAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XHJcbiAgICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgfVxyXG4gIC5idXR0b25OZXh0e1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUJDRDlEO1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uQ2FuY2Vse1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRTNFMztcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5pbnB1dENhcmR7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5oZWlnaHRBZGp1c3R7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuaW5wdXRDbGFzc3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpmb2N1c3tcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnBiMXtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gIH1cclxuICBcclxuICAub3BlcmF0aW9uVHlwZUNsYXNze1xyXG4gICAgICBjb2xvcjogI0ExQTFBMTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAucXVhbnRpdHlDbGFzc3tcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRpbmdjbGFzc3tcclxuICAgICAgcGFkZGluZzogMiU7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3RhbEFtb3VudHtcclxuICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgICBjb2xvcjogIzdlODRhMztcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuaW5wdXRDYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggI2Y4ZjhmOCxcclxuICAgICAgICAgICAgICAgICAgMCAxcHggMCAjZjhmOGY4LFxyXG4gICAgICAgICAgICAgICAgICAwIDVweCA4cHggMCAjZTllOWU5O1xyXG4gIH1cclxuICBcclxuICAuY2hhcmdlRGV0YWlsc1RibHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNoYXJnZURldGFpbHNEaXZ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAudGhjaGFyZ2VEZXRhaWxzVGJse1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMGYwIDtcclxuICAgICAgY29sb3I6ICM5NjhlOGU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC50YmNoYXJnZURldGFpbHNUYmx7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICM3MjY4Njg7XHJcbiAgfVxyXG5cclxuICAudGl0bGVIZWFke1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLnJhZGlvRGl2e1xyXG4gIHBhZGRpbmctdG9wOiAyNHB4IDtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xyXG4gICAgICAgICAvKmNsaWNrIGVmZmVjdCBjb2xvciBjaGFuZ2UqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlIWltcG9ydGFudDsgICAvKmlubmVyIGNpcmNsZSBjb2xvciBjaGFuZ2UqL1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcclxuICAgYm9yZGVyLWNvbG9yOmJsdWUhaW1wb3J0YW50OyAvKm91dGVyIHJpbmcgY29sb3IgY2hhbmdlKi9cclxufVxyXG4gIFxyXG46aG9zdCA6Om5nLWRlZXAgbWF0LXJhZGlvLWJ1dHRvbiA+IGxhYmVsID4gc3BhbiA+IHNwYW4ubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtcclxuIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gYm94LXNoYWRvdzogMXB4IDNweCA2cHggI2UxZTFlMjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG1hdC1zZWxlY3QtY291bnRyeSA+IG1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG1hdC1zZWxlY3QtY291bnRyeSA+IG1hdC1mb3JtLWZpZWxkID4gZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgPiBkaXYubWF0LWZvcm0tZmllbGQtZmxleCA+IGRpdi5tYXQtZm9ybS1maWVsZC1zdWZmaXggPiBtYXQtaWNvbiA+IHN2Z3tcclxuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBtYXQtc2VsZWN0LWNvdW50cnkgPiBtYXQtZm9ybS1maWVsZCA+IGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuOHJlbTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForexTransactionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forex-transaction',
            templateUrl: './forex-transaction.component.html',
            styleUrls: ['./forex-transaction.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "KVVp":
    /*!***********************************************!*\
      !*** ./src/app/views/others/others.module.ts ***!
      \***********************************************/

    /*! exports provided: OthersModule */

    /***/
    function KVVp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OthersModule", function () {
        return OthersModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _app_blank_app_blank_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./app-blank/app-blank.component */
      "uS30");
      /* harmony import */


      var _others_routing__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./others.routing */
      "m8nz");
      /* harmony import */


      var _cheque_withdrawal_cheque_withdrawal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./cheque-withdrawal/cheque-withdrawal.component */
      "/kYN");
      /* harmony import */


      var _cheque_withdrawal1_cheque_withdrawal1_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./cheque-withdrawal1/cheque-withdrawal1.component */
      "d44F");
      /* harmony import */


      var _cash_withdrawal_cash_withdrawal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./cash-withdrawal/cash-withdrawal.component */
      "zf0q");
      /* harmony import */


      var _cash_deposit_cash_deposit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./cash-deposit/cash-deposit.component */
      "YmeZ");
      /* harmony import */


      var _cheque_deposit_cheque_deposit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./cheque-deposit/cheque-deposit.component */
      "jsQJ");
      /* harmony import */


      var _forex_transaction_forex_transaction_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./forex-transaction/forex-transaction.component */
      "DLa6");
      /* harmony import */


      var _loan_payment_loan_payment_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./loan-payment/loan-payment.component */
      "2ama");
      /* harmony import */


      var _deposit_topup_deposit_topup_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./deposit-topup/deposit-topup.component */
      "n9vs");
      /* harmony import */


      var _utility_billpayment_utility_billpayment_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./utility-billpayment/utility-billpayment.component */
      "azsi");
      /* harmony import */


      var _select_service_select_service_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./select-service/select-service.component */
      "Vafw");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./authenticate/authenticate.component */
      "ucp7");
      /* harmony import */


      var _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular-material-extensions/select-country */
      "6xI8");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _token_generation_token_generation_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./token-generation/token-generation.component */
      "YfT7");
      /* harmony import */


      var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @zxing/ngx-scanner */
      "IyRd");
      /* harmony import */


      var app_shared_directives_onlynumber_directive__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! app/shared/directives/onlynumber.directive */
      "c0ho");
      /* harmony import */


      var _search_search_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./search/search.component */
      "Adj1");
      /* harmony import */


      var _otp_verify_otp_verify_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./otp-verify/otp-verify.component */
      "zAir");
      /* harmony import */


      var _appointment_id_appointment_id_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./appointment-id/appointment-id.component */
      "Rfrn");

      var OthersModule = function OthersModule() {
        _classCallCheck(this, OthersModule);
      };

      OthersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OthersModule
      });
      OthersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OthersModule_Factory(t) {
          return new (t || OthersModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__["MatDialogModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_19__["ChartsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__["MatDatepickerModule"], _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_36__["MatSelectCountryModule"].forRoot('de'), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_others_routing__WEBPACK_IMPORTED_MODULE_22__["OthersRoutes"]), _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_39__["ZXingScannerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OthersModule, {
          declarations: [_app_blank_app_blank_component__WEBPACK_IMPORTED_MODULE_21__["AppBlankComponent"], _cheque_withdrawal_cheque_withdrawal_component__WEBPACK_IMPORTED_MODULE_23__["ChequeWithdrawalComponent"], _cheque_withdrawal1_cheque_withdrawal1_component__WEBPACK_IMPORTED_MODULE_24__["ChequeWithdrawal1Component"], _cash_withdrawal_cash_withdrawal_component__WEBPACK_IMPORTED_MODULE_25__["CashWithdrawalComponent"], _cash_deposit_cash_deposit_component__WEBPACK_IMPORTED_MODULE_26__["CashDepositComponent"], _cheque_deposit_cheque_deposit_component__WEBPACK_IMPORTED_MODULE_27__["ChequeDepositComponent"], _forex_transaction_forex_transaction_component__WEBPACK_IMPORTED_MODULE_28__["ForexTransactionComponent"], _loan_payment_loan_payment_component__WEBPACK_IMPORTED_MODULE_29__["LoanPaymentComponent"], _deposit_topup_deposit_topup_component__WEBPACK_IMPORTED_MODULE_30__["DepositTopupComponent"], _utility_billpayment_utility_billpayment_component__WEBPACK_IMPORTED_MODULE_31__["UtilityBillpaymentComponent"], _select_service_select_service_component__WEBPACK_IMPORTED_MODULE_32__["SelectServiceComponent"], _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_35__["AuthenticateComponent"], _token_generation_token_generation_component__WEBPACK_IMPORTED_MODULE_38__["TokenGenerationComponent"], app_shared_directives_onlynumber_directive__WEBPACK_IMPORTED_MODULE_40__["OnlynumberDirective"], _search_search_component__WEBPACK_IMPORTED_MODULE_41__["SearchComponent"], _otp_verify_otp_verify_component__WEBPACK_IMPORTED_MODULE_42__["OtpVerifyComponent"], _appointment_id_appointment_id_component__WEBPACK_IMPORTED_MODULE_43__["AppointmentIdComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__["MatDialogModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_19__["ChartsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__["MatDatepickerModule"], _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_36__["MatSelectCountryModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_39__["ZXingScannerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OthersModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__["MatDialogModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_19__["ChartsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__["MatDatepickerModule"], _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_36__["MatSelectCountryModule"].forRoot('de'), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_others_routing__WEBPACK_IMPORTED_MODULE_22__["OthersRoutes"]), _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_39__["ZXingScannerModule"]],
            declarations: [_app_blank_app_blank_component__WEBPACK_IMPORTED_MODULE_21__["AppBlankComponent"], _cheque_withdrawal_cheque_withdrawal_component__WEBPACK_IMPORTED_MODULE_23__["ChequeWithdrawalComponent"], _cheque_withdrawal1_cheque_withdrawal1_component__WEBPACK_IMPORTED_MODULE_24__["ChequeWithdrawal1Component"], _cash_withdrawal_cash_withdrawal_component__WEBPACK_IMPORTED_MODULE_25__["CashWithdrawalComponent"], _cash_deposit_cash_deposit_component__WEBPACK_IMPORTED_MODULE_26__["CashDepositComponent"], _cheque_deposit_cheque_deposit_component__WEBPACK_IMPORTED_MODULE_27__["ChequeDepositComponent"], _forex_transaction_forex_transaction_component__WEBPACK_IMPORTED_MODULE_28__["ForexTransactionComponent"], _loan_payment_loan_payment_component__WEBPACK_IMPORTED_MODULE_29__["LoanPaymentComponent"], _deposit_topup_deposit_topup_component__WEBPACK_IMPORTED_MODULE_30__["DepositTopupComponent"], _utility_billpayment_utility_billpayment_component__WEBPACK_IMPORTED_MODULE_31__["UtilityBillpaymentComponent"], _select_service_select_service_component__WEBPACK_IMPORTED_MODULE_32__["SelectServiceComponent"], _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_35__["AuthenticateComponent"], _token_generation_token_generation_component__WEBPACK_IMPORTED_MODULE_38__["TokenGenerationComponent"], app_shared_directives_onlynumber_directive__WEBPACK_IMPORTED_MODULE_40__["OnlynumberDirective"], _search_search_component__WEBPACK_IMPORTED_MODULE_41__["SearchComponent"], _otp_verify_otp_verify_component__WEBPACK_IMPORTED_MODULE_42__["OtpVerifyComponent"], _appointment_id_appointment_id_component__WEBPACK_IMPORTED_MODULE_43__["AppointmentIdComponent"]],
            entryComponents: [_authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_35__["AuthenticateComponent"], _token_generation_token_generation_component__WEBPACK_IMPORTED_MODULE_38__["TokenGenerationComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Vafw":
    /*!*************************************************************************!*\
      !*** ./src/app/views/others/select-service/select-service.component.ts ***!
      \*************************************************************************/

    /*! exports provided: SelectServiceComponent */

    /***/
    function Vafw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectServiceComponent", function () {
        return SelectServiceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");

      var _c0 = ["contentDiv"];
      var _c1 = ["widgetsContent"];

      function SelectServiceComponent_div_28_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SelectServiceComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectServiceComponent_div_28_Template_mat_card_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var i_r4 = ctx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.goToService(i_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectServiceComponent_div_28_div_4_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-hint", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var folder_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", folder_r3.flag ? "borderCard" : "inputCard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", folder_r3.flag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", folder_r3.flag ? "mt9" : "mt25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", folder_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r3.title);
        }
      }

      var SelectServiceComponent = /*#__PURE__*/function () {
        function SelectServiceComponent(router) {
          _classCallCheck(this, SelectServiceComponent);

          this.router = router;
          this.flag = true;
          this["continue"] = "CONTINUE";
          this.active = {};
          this.folders = [{
            title: "Cash Withdrawal",
            id: 1,
            flag: false,
            link: 'others/cash-withdrawal',
            image: "assets/images/cash_withdrawal.png"
          }, {
            title: "Cash Deposit",
            id: 2,
            flag: false,
            link: 'others/cash-deposit',
            image: "assets/images/cash_deposit.png"
          }, {
            title: "Cheque Deposit",
            id: 3,
            flag: false,
            link: 'others/cheque-deposit',
            image: "assets/images/cheque_deposit.png"
          }, {
            title: "Cheque Withdrawal",
            id: 4,
            flag: false,
            link: 'others/cheque-withdrawal',
            image: "assets/images/check_withdrawal.png"
          }, {
            title: "Forex Transaction",
            id: 5,
            flag: false,
            link: 'others/forex-transaction',
            image: "assets/images/forex_transaction.png"
          }, {
            title: "Loan Payment",
            id: 6,
            flag: false,
            link: 'others/loan-payment',
            image: "assets/images/loan_payment.png"
          }, {
            title: "Deposit Top Up",
            id: 7,
            flag: false,
            link: 'others/deposit-topup',
            image: "assets/images/deposit_top_up.png"
          }, {
            title: "Utility Bill Payment",
            id: 8,
            flag: false,
            link: 'others/utility-billpayment',
            image: "assets/images/utility_billpayment.png"
          }];
        }

        _createClass(SelectServiceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToService",
          value: function goToService(index) {
            if (this.active !== index) {
              this.active = index;
              this.folders.forEach(function (item) {
                item.flag = false;
              });
            }

            this.folders[index].flag = !this.folders[index].flag;
          }
        }, {
          key: "contiueButton",
          value: function contiueButton() {
            // console.log(this.active);
            this.enableList = this.folders.filter(function (x) {
              return x.flag === true;
            });
            console.log(this.enableList);
            if (this.enableList.length > 0) return true;else return false;
          }
        }, {
          key: "goToOperations",
          value: function goToOperations() {
            this.router.navigate([this.enableList[0].link]);
          }
        }, {
          key: "scrollLeft",
          value: function scrollLeft() {
            this.contentDiv.nativeElement.scrollLeft -= 640;
          }
        }, {
          key: "scrollRight",
          value: function scrollRight() {
            this.contentDiv.nativeElement.scrollLeft += 640;
          }
        }]);

        return SelectServiceComponent;
      }();

      SelectServiceComponent.ɵfac = function SelectServiceComponent_Factory(t) {
        return new (t || SelectServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      SelectServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SelectServiceComponent,
        selectors: [["app-select-service"]],
        viewQuery: function SelectServiceComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentDiv = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.widgetsContent = _t.first);
          }
        },
        decls: 33,
        vars: 3,
        consts: [[1, "fullcard"], ["fxLayout", "row-wrap", "fxLayoutAlign", "center center"], ["fxFlex", "72%"], [1, "chequecard"], [1, "matcard-title"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "card-title"], ["fxLayout", "row wrap"], [1, "totalAmount"], [1, "slideCard"], ["mat-icon-button", "", 3, "click"], [1, "scrollIcon"], [1, "custom-slider-main"], ["contentDiv", "", "widgetsContent", ""], ["fxLayout", "row wrap", "fxLayoutGap", "40px ", "class", "gapBtw", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 2, "padding", "0% 2%"], [1, "full-width", 2, "padding", "2% 0% 3.5% 0%"], ["mat-flat-button", "", 3, "ngClass", "click"], ["fxLayout", "row wrap", "fxLayoutGap", "40px ", 1, "gapBtw"], [3, "ngClass", "click"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "space-between center"], [3, "ngClass"], [1, "insideCard"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [1, "matCardTransparent", 2, "background-color", "transparent"], ["alt", "", 3, "src"], [2, "text-align", "center", "padding-top", "20%"], [1, "insideTitle"], ["src", "assets/images/checked.png", "alt", "", 2, "width", "23px"]],
        template: function SelectServiceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-hint", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select one and continue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectServiceComponent_Template_button_click_17_listener() {
              return ctx.scrollLeft();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "chevron_left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectServiceComponent_Template_button_click_21_listener() {
              return ctx.scrollRight();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "chevron_right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SelectServiceComponent_div_28_Template, 15, 5, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectServiceComponent_Template_button_click_31_listener() {
              return ctx.goToOperations();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.folders);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.contiueButton() ? "buttonActive" : "buttonPassive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx["continue"]);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultClassDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
        styles: [".fullcard[_ngcontent-%COMP%] {\n  background-color: #ECF3F2;\n  width: 100%;\n  height: 100%;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  height: auto;\n  border-radius: 10px;\n}\n\n.gapBtw[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: system-ui;\n  font-size: 24px;\n  padding-left: 10px;\n}\n\n.totalAmount[_ngcontent-%COMP%] {\n  font-family: system-ui;\n  font-size: 14px;\n  padding-top: 8px;\n  padding-left: 10px;\n}\n\n.insideTitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-family: system-ui;\n  color: black;\n  font-weight: 500;\n}\n\n\n\n.noScrollDiv[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n\n\n.noScrollDiv[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  \n  scrollbar-width: none;\n  \n  overflow-x: scroll;\n  \n}\n\n#contentDiv[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: hidden;\n  scroll-behavior: smooth;\n}\n\n.matCardTransparent.mat-card[_ngcontent-%COMP%] {\n  box-shadow: 0 0px 0px, 0 0px 0px !important;\n}\n\n.mt25[_ngcontent-%COMP%] {\n  margin-top: 25%;\n}\n\n.mt9[_ngcontent-%COMP%] {\n  margin-top: 9%;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n  padding: 15px;\n  overflow: auto;\n}\n\n.insideCard[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 130px;\n  background-color: #FE6700;\n  border-radius: 30px;\n}\n\n.inputCard[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  box-sizing: border-box;\n  width: 210px;\n  height: 300px;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n.borderCard[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 210px;\n  height: 300px;\n  border-style: solid;\n  border-width: thin;\n  border-color: #456EFE;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n.inputCard[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 2px 1px -1px #f8f8f8, 0 1px 0 #f8f8f8, 0 5px 8px 0 #e9e9e9;\n}\n\n.buttonActive[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  width: 100%;\n  background-color: #1BCD9D;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.buttonPassive[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  width: 100%;\n  background-color: #E3E3E3;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 10px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #E3E3E3;\n  border-radius: 10px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #E3E3E3;\n}\n\n.serviceIcons[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 36px;\n  padding: 26px;\n}\n\n.custom-slider-main[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: hidden;\n  scroll-behavior: smooth;\n}\n\n.slideCard[_ngcontent-%COMP%] {\n  border: 1px solid #ecf3f2;\n  padding: 0px !important;\n  border-radius: 30px;\n  width: 80px;\n}\n\n.custom-slider-main[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: hidden;\n  scroll-behavior: smooth;\n}\n\n.matcard-title[_ngcontent-%COMP%] {\n  padding: 2%;\n  margin-bottom: -2%;\n}\n\n.scrollIcon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #456EFE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VsZWN0LXNlcnZpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBREE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBR0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBREEsZ0RBQUE7O0FBQ0E7RUFDSSxhQUFBO0FBSUo7O0FBREEsNENBQUE7O0FBQ0E7RUFDRSx3QkFBQTtFQUEyQixnQkFBQTtFQUMzQixxQkFBQTtFQUF3QixZQUFBO0VBQ3hCLGtCQUFBO0VBQW9CLDhCQUFBO0FBT3RCOztBQUhBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFNSjs7QUFGQTtFQUNJLDJDQUFBO0FBS0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBREE7RUFDSSxjQUFBO0FBSUo7O0FBQUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUdKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFQTtFQUNJLHdFQUFBO0FBQ0o7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQSxVQUFBOztBQUNBO0VBQ0ksV0FBQTtBQUNKOztBQUdFLFVBQUE7O0FBQ0E7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0UsV0FBQTs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRSxvQkFBQTs7QUFDQTtFQUNFLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBRUE7RUFDSSx5QkFBQTtFQUNDLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0w7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUdKIiwiZmlsZSI6InNlbGVjdC1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxjYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRjNGMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5jaGVxdWVjYXJke1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgXHJcbn1cclxuLmdhcEJ0d3tcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG4uY2FyZC10aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OnN5c3RlbS11aTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4udG90YWxBbW91bnR7XHJcbiAgICBmb250LWZhbWlseTpzeXN0ZW0tdWk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAvLyBjb2xvcjogIzAwMDAwMDtcclxuICAgLy8gb3BhY2l0eTogMzclO1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4uaW5zaWRlVGl0bGV7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LWZhbWlseTpzeXN0ZW0tdWk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXHJcbi5ub1Njcm9sbERpdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXHJcbi5ub1Njcm9sbERpdiB7XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsOyAvKiBBZGQgdGhlIGFiaWxpdHkgdG8gc2Nyb2xsICovXHJcblxyXG59XHJcblxyXG4jY29udGVudERpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAgICBcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG5cclxuLm1hdENhcmRUcmFuc3BhcmVudC5tYXQtY2FyZHtcclxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDBweCAsIFxyXG4gICAgICAgICAgICAgICAgMCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdDI1e1xyXG4gICAgbWFyZ2luLXRvcDogMjUlO1xyXG59XHJcblxyXG4ubXQ5e1xyXG4gICAgbWFyZ2luLXRvcDogOSU7XHJcbn1cclxuXHJcblxyXG4uZnVsbC13aWR0aHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi8vIC5pbnNpZGVEaXZ7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbi8vIH1cclxuXHJcbi5pbnNpZGVDYXJke1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRTY3MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59XHJcblxyXG4uaW5wdXRDYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMjEwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIFxyXG59XHJcbi5ib3JkZXJDYXJke1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAyMTBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDU2RUZFO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uaW5wdXRDYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4ICNmOGY4ZjgsXHJcbiAgICAgICAgICAgICAgICAwIDFweCAwICNmOGY4ZjgsXHJcbiAgICAgICAgICAgICAgICAwIDVweCA4cHggMCAjZTllOWU5O1xyXG59XHJcbi5idXR0b25BY3RpdmV7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUJDRDlEO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG4uYnV0dG9uUGFzc2l2ZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0UzRTM7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgLyogVHJhY2sgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAgXHJcbiAgLyogSGFuZGxlICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTNFM0UzOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI0UzRTNFMzsgXHJcbiAgfVxyXG5cclxuLnNlcnZpY2VJY29uc3tcclxuICAgIGNvbG9yOiNGRkZGRkYgO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgcGFkZGluZzogMjZweDtcclxuXHJcbn1cclxuLmN1c3RvbS1zbGlkZXItbWFpbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAgICBcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcbi5zbGlkZUNhcmR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWNmM2YyO1xyXG4gICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50OyBcclxuICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgIHdpZHRoOiA4MHB4O1xyXG59XHJcbi5jdXN0b20tc2xpZGVyLW1haW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgICAgXHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG4ubWF0Y2FyZC10aXRsZXtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTIlO1xyXG59XHJcblxyXG4uc2Nyb2xsSWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiAjNDU2RUZFO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectServiceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-select-service',
            templateUrl: './select-service.component.html',
            styleUrls: ['./select-service.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          contentDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['contentDiv', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
            }]
          }],
          widgetsContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['widgetsContent']
          }]
        });
      })();
      /***/

    },

    /***/
    "YmeZ":
    /*!*********************************************************************!*\
      !*** ./src/app/views/others/cash-deposit/cash-deposit.component.ts ***!
      \*********************************************************************/

    /*! exports provided: CashDepositComponent */

    /***/
    function YmeZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CashDepositComponent", function () {
        return CashDepositComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/Dialog/dialog.service */
      "LP5l");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/shared/models/otp.model */
      "V4gq");
      /* harmony import */


      var _otp_verify_otp_verify_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../otp-verify/otp-verify.component */
      "zAir");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var _c0 = ["cdForm"];

      function CashDepositComponent_mat_icon_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CashDepositComponent_mat_icon_15_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.goToServiceScreens();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " keyboard_backspace");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CashDepositComponent_div_26_input_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 44);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function CashDepositComponent_div_26_mat_select_5_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r25.accountType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r25.accountType);
        }
      }

      function CashDepositComponent_div_26_mat_select_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function CashDepositComponent_div_26_mat_select_5_Template_mat_select_selectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.getAccountType($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CashDepositComponent_div_26_mat_select_5_mat_option_1_Template, 2, 2, "mat-option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.accounttypeArray);
        }
      }

      function CashDepositComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CashDepositComponent_div_26_input_4_Template, 1, 1, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CashDepositComponent_div_26_mat_select_5_Template, 2, 1, "mat-select", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.phoneNumber && !ctx_r1.accountDropdown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.phoneNumber && ctx_r1.accountDropdown);
        }
      }

      function CashDepositComponent_div_27_mat_hint_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Account Balance :", ctx_r28.curr, " ", ctx_r28.formatAmount(ctx_r28.accountBal), "");
        }
      }

      function CashDepositComponent_div_27_mat_hint_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Holder Name :", ctx_r29.userName, "");
        }
      }

      function CashDepositComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account Number*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CashDepositComponent_div_27_Template_input_change_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.fetchByAccountNum(ctx_r30.cashdepositForm.get("accountNumber").value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CashDepositComponent_div_27_mat_hint_5_Template, 2, 2, "mat-hint", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CashDepositComponent_div_27_mat_hint_7_Template, 2, 2, "mat-hint", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.showAccountNum);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.showAccountNum);
        }
      }

      function CashDepositComponent_div_28_input_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 54);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function CashDepositComponent_div_28_mat_select_5_mat_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var id_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", id_r37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](id_r37);
        }
      }

      function CashDepositComponent_div_28_mat_select_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function CashDepositComponent_div_28_mat_select_5_Template_mat_select_selectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.fetchByAccountNum($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CashDepositComponent_div_28_mat_select_5_mat_option_3_Template, 2, 2, "mat-option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.accountNoList);
        }
      }

      function CashDepositComponent_div_28_mat_hint_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Account Balance : ", ctx_r34.curr, "", ctx_r34.formatAmount(ctx_r34.accountBal), "");
        }
      }

      function CashDepositComponent_div_28_mat_hint_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Holder Name : ", ctx_r35.userName, "");
        }
      }

      function CashDepositComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account Number*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CashDepositComponent_div_28_input_4_Template, 1, 1, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CashDepositComponent_div_28_mat_select_5_Template, 4, 1, "mat-select", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CashDepositComponent_div_28_mat_hint_6_Template, 2, 2, "mat-hint", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CashDepositComponent_div_28_mat_hint_8_Template, 2, 2, "mat-hint", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.flag1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.flag1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.hideDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.hideDetails);
        }
      }

      function CashDepositComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function CashDepositComponent_input_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 56);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function CashDepositComponent_input_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 56);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function CashDepositComponent_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Account Branch is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CashDepositComponent_div_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag ", ctx_r8.isedit ? ctx_r8.accountCurrencyImage(ctx_r8.cashdepositForm.controls["accountCurrency"].value) : ctx_r8.currencyImage, "");
        }
      }

      function CashDepositComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag ", !ctx_r9.isedit ? ctx_r9.accountCurrencyImage(ctx_r9.cashdepositForm.controls["accountCurrency"].value) : ctx_r9.currencyImage, "");
        }
      }

      function CashDepositComponent_input_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 57);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function CashDepositComponent_input_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 57);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function CashDepositComponent_div_51_input_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 60);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function CashDepositComponent_div_51_mat_select_9_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CashDepositComponent_div_51_mat_select_9_mat_option_1_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var country_r43 = ctx.$implicit;

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r45.onCountryChange(country_r43);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r43 = ctx.$implicit;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r43.currencyCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r43.currencyCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag currency-flag-", ctx_r42.addCurrencyImage(country_r43.currencyCode), " alignImage");
        }
      }

      function CashDepositComponent_div_51_mat_select_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CashDepositComponent_div_51_mat_select_9_mat_option_1_Template, 6, 5, "mat-option", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r41.isedit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r41.countryValues);
        }
      }

      function CashDepositComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transaction Currency* ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CashDepositComponent_div_51_input_8_Template, 1, 1, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CashDepositComponent_div_51_mat_select_9_Template, 2, 2, "mat-select", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag ", ctx_r12.currencyImage, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r12.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.phoneNumber);
        }
      }

      function CashDepositComponent_div_52_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CashDepositComponent_div_52_mat_option_9_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var country_r48 = ctx.$implicit;

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r50.onCountryChange(country_r48);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r48 = ctx.$implicit;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r48.currencyCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r48.currencyCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag currency-flag-", ctx_r47.addCurrencyImage(country_r48.currencyCode), " alignImage");
        }
      }

      function CashDepositComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transaction Currency* ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CashDepositComponent_div_52_mat_option_9_Template, 6, 5, "mat-option", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag ", ctx_r13.currencyImage, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.countryValues);
        }
      }

      function CashDepositComponent_div_53_input_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 70);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function CashDepositComponent_div_53_input_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 71, 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CashDepositComponent_div_53_input_5_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r56.transAmount = $event;
          })("keyup", function CashDepositComponent_div_53_input_5_Template_input_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r58.OnInput($event);
          })("focus", function CashDepositComponent_div_53_input_5_Template_input_focus_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r59.clicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r53.transAmount)("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r53.transAmt, "1."))("readonly", ctx_r53.isedit);
        }
      }

      function CashDepositComponent_div_53_mat_error_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount must be greater than zero ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CashDepositComponent_div_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transaction Amount*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CashDepositComponent_div_53_input_4_Template, 1, 1, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CashDepositComponent_div_53_input_5_Template, 3, 6, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CashDepositComponent_div_53_mat_error_6_Template, 2, 0, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.cashdepositForm.get("transactionAmount").errors == null ? null : ctx_r14.cashdepositForm.get("transactionAmount").errors.min);
        }
      }

      function CashDepositComponent_div_54_mat_error_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount must be greater than zero ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CashDepositComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transaction Amount*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 73, 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CashDepositComponent_div_54_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r62.transAmount = $event;
          })("keyup", function CashDepositComponent_div_54_Template_input_keyup_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r64.OnInput($event);
          })("focus", function CashDepositComponent_div_54_Template_input_focus_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r65.clicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CashDepositComponent_div_54_mat_error_7_Template, 2, 0, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r15.transAmount)("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, ctx_r15.transAmt, "2."));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.cashdepositForm.get("transactionAmount").errors == null ? null : ctx_r15.cashdepositForm.get("transactionAmount").errors.min);
        }
      }

      function CashDepositComponent_div_75_div_8_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r77.denominationLimit[2000], " ");
        }
      }

      function CashDepositComponent_div_75_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "2000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 92, 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CashDepositComponent_div_75_div_8_Template_input_keyup_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r78.totalAmountValue(_r66);
          })("keypress", function CashDepositComponent_div_75_div_8_Template_input_keypress_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r80.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CashDepositComponent_div_75_div_8_mat_error_13_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r67.denominationlimit && _r76.value > ctx_r67.denominationLimit[2000]);
        }
      }

      function CashDepositComponent_div_75_div_9_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r82.denominationLimit[500], " ");
        }
      }

      function CashDepositComponent_div_75_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 96, 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CashDepositComponent_div_75_div_9_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r83.totalAmountValue(_r66);
          })("keypress", function CashDepositComponent_div_75_div_9_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84);

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r85.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CashDepositComponent_div_75_div_9_mat_error_12_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r68.denominationlimit && _r81.value > ctx_r68.denominationLimit[500]);
        }
      }

      function CashDepositComponent_div_75_div_10_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r87.denominationLimit[200], " ");
        }
      }

      function CashDepositComponent_div_75_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 98, 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CashDepositComponent_div_75_div_10_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r88.totalAmountValue(_r66);
          })("keypress", function CashDepositComponent_div_75_div_10_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r90.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CashDepositComponent_div_75_div_10_mat_error_12_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r69.denominationlimit && _r86.value > ctx_r69.denominationLimit[200]);
        }
      }

      function CashDepositComponent_div_75_div_11_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r92.denominationLimit[100], " ");
        }
      }

      function CashDepositComponent_div_75_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "100 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 100, 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CashDepositComponent_div_75_div_11_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r93.totalAmountValue(_r66);
          })("keypress", function CashDepositComponent_div_75_div_11_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);

            var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r95.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CashDepositComponent_div_75_div_11_mat_error_12_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r70.denominationlimit && _r91.value > ctx_r70.denominationLimit[100]);
        }
      }

      function CashDepositComponent_div_75_div_12_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r97.denominationLimit[50], " ");
        }
      }

      function CashDepositComponent_div_75_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 102, 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CashDepositComponent_div_75_div_12_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r98.totalAmountValue(_r66);
          })("keypress", function CashDepositComponent_div_75_div_12_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r100.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CashDepositComponent_div_75_div_12_mat_error_12_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r71.denominationlimit && _r96.value > ctx_r71.denominationLimit[50]);
        }
      }

      function CashDepositComponent_div_75_div_13_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r102.denominationLimit[20], " ");
        }
      }

      function CashDepositComponent_div_75_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 20 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " x ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 104, 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CashDepositComponent_div_75_div_13_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r103.totalAmountValue(_r66);
          })("keypress", function CashDepositComponent_div_75_div_13_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

            var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r105.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CashDepositComponent_div_75_div_13_mat_error_12_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r72.denominationlimit && _r101.value > ctx_r72.denominationLimit[20]);
        }
      }

      function CashDepositComponent_div_75_div_14_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r107.denominationLimit[10], " ");
        }
      }

      function CashDepositComponent_div_75_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 10 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " x ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 106, 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CashDepositComponent_div_75_div_14_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r108.totalAmountValue(_r66);
          })("keypress", function CashDepositComponent_div_75_div_14_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109);

            var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r110.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CashDepositComponent_div_75_div_14_mat_error_12_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r73.denominationlimit && _r106.value > ctx_r73.denominationLimit[10]);
        }
      }

      function CashDepositComponent_div_75_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " x ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 108, 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CashDepositComponent_div_75_div_15_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r112.totalAmountValue(_r66);
          })("keypress", function CashDepositComponent_div_75_div_15_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113);

            var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r114.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CashDepositComponent_div_75_mat_error_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total amount should be equal to ", ctx_r75.cashdepositForm.value.transactionAmount, " ");
        }
      }

      function CashDepositComponent_div_75_Template(rf, ctx) {
        if (rf & 1) {
          var _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", null, 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Denomination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CashDepositComponent_div_75_div_8_Template, 14, 1, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CashDepositComponent_div_75_div_9_Template, 13, 1, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CashDepositComponent_div_75_div_10_Template, 13, 1, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CashDepositComponent_div_75_div_11_Template, 13, 1, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CashDepositComponent_div_75_div_12_Template, 13, 1, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CashDepositComponent_div_75_div_13_Template, 13, 1, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CashDepositComponent_div_75_div_14_Template, 13, 1, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CashDepositComponent_div_75_div_15_Template, 11, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Total Amount ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CashDepositComponent_div_75_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116);

            var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r115.totalAmount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CashDepositComponent_div_75_mat_error_23_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.cashdepositForm.value.transactionCurrency == "INR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.cashdepositForm.value.transactionCurrency == "INR" || ctx_r16.cashdepositForm.value.transactionCurrency == "USD" || ctx_r16.cashdepositForm.value.transactionCurrency == "AED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.cashdepositForm.value.transactionCurrency == "INR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.cashdepositForm.value.transactionCurrency == "INR" || ctx_r16.cashdepositForm.value.transactionCurrency == "USD" || ctx_r16.cashdepositForm.value.transactionCurrency == "AED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.cashdepositForm.value.transactionCurrency == "INR" || ctx_r16.cashdepositForm.value.transactionCurrency == "USD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.cashdepositForm.value.transactionCurrency == "INR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.cashdepositForm.value.transactionCurrency == "INR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.cashdepositForm.value.transactionCurrency == "INR" || ctx_r16.cashdepositForm.value.transactionCurrency == "USD" || ctx_r16.cashdepositForm.value.transactionCurrency == "AED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.totalAmount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.enableBtn1);
        }
      }

      function CashDepositComponent_button_80_Template(rf, ctx) {
        if (rf & 1) {
          var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CashDepositComponent_button_80_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118);

            var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r117.goToServiceScreens();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CANCEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CashDepositComponent_div_81_Template(rf, ctx) {
        if (rf & 1) {
          var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CashDepositComponent_div_81_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120);

            var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r119.onSaveofcashDeposit(ctx_r119.cashdepositForm.value, ctx_r119.ifQRvariable, ctx_r119.cdForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "GENERATE TOKEN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r18.enableContinue || !ctx_r18.cashdepositForm.get("transactionAmount").valid || !ctx_r18.cashdepositForm.get("transactionCurrency").valid || !ctx_r18.cashdepositForm.get("accountType").valid || !ctx_r18.cashdepositForm.get("accountNumber").valid || !ctx_r18.cashdepositForm.get("accountCurrency").valid || !ctx_r18.cashdepositForm.get("totalChargeAmount").valid || !ctx_r18.cashdepositForm.get("totalTransactionAmount").valid);
        }
      }

      function CashDepositComponent_div_82_Template(rf, ctx) {
        if (rf & 1) {
          var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CashDepositComponent_div_82_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);

            var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r121.getOTP(ctx_r121.cashdepositForm.value, ctx_r121.ifQRvariable, ctx_r121.cdForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CONTINUE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r19.enableContinue || !ctx_r19.cashdepositForm.get("transactionAmount").valid || !ctx_r19.cashdepositForm.get("transactionCurrency").valid || !ctx_r19.cashdepositForm.get("accountType").valid || !ctx_r19.cashdepositForm.get("accountNumber").valid || !ctx_r19.cashdepositForm.get("accountCurrency").valid || !ctx_r19.cashdepositForm.get("totalChargeAmount").valid || !ctx_r19.cashdepositForm.get("totalTransactionAmount").valid);
        }
      }

      var CashDepositComponent = /*#__PURE__*/function () {
        function CashDepositComponent(router, formBuilder, dialogService, apiService, dialog, cdr, ls, snack, changeDef) {
          _classCallCheck(this, CashDepositComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.dialogService = dialogService;
          this.apiService = apiService;
          this.dialog = dialog;
          this.cdr = cdr;
          this.ls = ls;
          this.snack = snack;
          this.changeDef = changeDef;
          this.titleName = 'Cash Deposit';
          this.accType = ['Savings', 'Deposit'];
          this.customerName = ['Jane Smith', 'John Smith'];
          this.productCode = "CHD";
          this.tokenOrigin = "Kiosk"; // countryFormControl = new FormControl();

          this.defaultValue = {
            name: 'Deutschland',
            alpha2Code: 'DE',
            alpha3Code: 'DEU',
            numericCode: '276',
            callingCode: '+49'
          };
          this.ifQRvariable = false;
          this.accounttypeArray = [];
          this.idList = [];
          this.tokenObjects = new app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["TokenObjects"]();
          this.isedit = true;
          this.oTpModel = new app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_8__["otpModel"]();
          this.enableContinue = true;
          this.showAccountNum = true;
          this.showAccoutType = true;
          this.currencyImage = "";
          this.denomCodeArray = [{
            key: 'count2000',
            value: 2000
          }, {
            key: 'count500',
            value: 500
          }, {
            key: 'count200',
            value: 200
          }, {
            key: 'count100',
            value: 100
          }, {
            key: 'count50',
            value: 50
          }, {
            key: 'count20',
            value: 20
          }, {
            key: 'count10',
            value: 10
          }, {
            key: 'count1',
            value: 1
          }];
          this.hideDetails = false; // accountNoList: any[];

          this.accountNoList = [];
          this.isLoading = false;
          this.enableBtn = true;
          this.enableBtn1 = false;
          this.accountDropdown = false;
          this.flag1 = false;
        }

        _createClass(CashDepositComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.phoneNumber = localStorage.getItem("phonenumFromLogin");
            this.appointmentId = this.ls.getItem("TransactionType");
            this.transBranch = localStorage.getItem("TRANSACTIONBRANCH");
            this.custValidation = localStorage.getItem("customerValidation");
            this.custNameFromLogin = localStorage.getItem("FromLogin");

            if (this.custValidation == "New Customer") {
              this.showAccountNum = false;
              this.showAccoutType = false;
            }

            if (this.custNameFromLogin != null) {
              this.showAccountNum = false;
            }

            this.qrData = JSON.parse(JSON.parse(localStorage.getItem('scannerData')));
            console.log("QRData", this.qrData);
            this.cashdepositForm = this.formBuilder.group({
              totalAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              transactionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              customerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              accountType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              holderName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              accountCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              totalChargeAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              totalTransactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(.1)]],
              productCode: ['CHD', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              tokenOrigin: ['Kiosk', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              // audit
              createdBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              createdTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              modifiedBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              modifiedTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              recordStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              authStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              version: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              accountBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            }); // this.cashdepositForm.get('transactionBranch').setValue(this.branchName);

            if (this.phoneNumber && this.custNameFromLogin == null && this.appointmentId == null) {
              this.ifQRvariable = false;
              this.gettingallTansactionDetails(this.phoneNumber);
            } // else {


            if (this.qrData != null) {
              this.ifQRvariable = true;
              console.log("Account", this.qrData.accountId);
              this.cashdepositForm.controls.holderName.setValue(this.qrData.holderName);
              this.cashdepositForm.controls.accountType.setValue(this.qrData.accountType);
              this.cashdepositForm.controls.accountNumber.setValue(this.qrData.accountId);
              this.getChargeDetails(this.qrData.accountId, '');
              this.cashdepositForm.controls.transactionAmount.setValue(this.qrData.transactionAmount);
              this.cashdepositForm.controls.accountCurrency.setValue(this.qrData.accountCurrency);
              this.cashdepositForm.controls.transactionCurrency.setValue(this.qrData.transactionCurrency);
              this.accountBal = this.qrData.accountBalance;
              this.customerID = this.qrData.customerId;
              this.currencyImage = 'currency-flag-' + this.qrData.accountCurrency.toLowerCase();
              this.currencyImage = 'currency-flag-' + this.qrData.transactionCurrency.toLowerCase();

              if (this.qrData.transactionBranch != null && this.qrData.transactionBranch != '') {
                this.cashdepositForm.controls.transactionBranch.setValue(this.qrData.transactionBranch);
              } else {
                this.cashdepositForm.controls.transactionBranch.setValue('Kasturi Nagar');
              }

              this.getAccountBranch();
            }

            this.getCountrynameValues();
            this.getAccountBranch();
            this.gettransactionBranch("account_branch");
            this.getBankInformation("KN");

            if (this.appointmentId.data.appointmentId) {
              this.cashWithdrawlData();
            }
          }
        }, {
          key: "fetchByAccountNum",
          value: function fetchByAccountNum(accNum) {
            var _this13 = this;

            this.cashdepositForm.controls.transactionAmount.reset();
            this.cashdepositForm.controls.totalTransactionAmount.setValue(this.cashdepositForm.controls.totalChargeAmount.value);
            console.log("Account Numebr", accNum); // this.isLoading = true;

            this.apiService.fetchByaccNum(accNum).subscribe(function (res) {
              console.log('Account Number Rsp', res);

              _this13.getChargeDetails(accNum, ''); // this.isLoading = false;


              _this13.userName = res.accHolderName;
              _this13.accountBal = res.accBalance;
              _this13.custmerID = res.customerId;
              _this13.accountNumber = res.accountId;
              _this13.accountCurrency = res.accountCurrency;
              _this13.curr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["getCurrencySymbol"])(res.currency, "narrow");

              _this13.cashdepositForm.controls.accountType.setValue(res.accountType);

              _this13.cashdepositForm.controls.accountCurrency.setValue(res.currency);

              _this13.cashdepositForm.controls.accountBranch.setValue(res.accountBranch);

              _this13.cashdepositForm.controls.holderName.setValue(_this13.userName);

              _this13.getCountrynameValues();

              _this13.currencyImage = 'currency-flag-' + res.currency.toLowerCase();
              _this13.currencyImage = 'currency-flag-' + res.currency.toLowerCase();

              _this13.cashdepositForm.controls.transactionCurrency.setValue(res.currency);

              _this13.custAmountBal(accNum);

              _this13.cashdepositForm.controls.transactionBranch.setValue('Kasturi Nagar');

              _this13.apiService.fetchByaccDeatilsoncustId(res.customerId).subscribe(function (resp) {
                _this13.phonenum = resp[0].phoneNumber;
                localStorage.setItem('otpPhoneNum', _this13.phonenum);
              });
            });
          }
        }, {
          key: "getCountrynameValues",
          value: function getCountrynameValues() {
            var _this14 = this;

            this.apiService.getCountryValues().subscribe(function (allCountryValues) {
              _this14.countryValues = allCountryValues;
            });
          }
        }, {
          key: "gettransactionBranch",
          value: function gettransactionBranch(key) {
            var _this15 = this;

            this.apiService.getTransactionBranch(key).subscribe(function (branches) {
              console.log('branches :: ', branches);
              _this15.trasactionBranches = branches;
            });
          }
        }, {
          key: "getAccountBranch",
          value: function getAccountBranch() {
            var _this16 = this;

            this.apiService.getBranchforKiosk().subscribe(function (data) {
              _this16.branchData = data;
              console.log(_this16.branchData);
              data.forEach(function (element, index) {
                _this16.branch = data[index].branchName;
                console.log(_this16.branch); // this.cashdepositForm.controls.accountBranch.setValue(this.branch);
              });
            });
          }
        }, {
          key: "onCountrySelected",
          value: function onCountrySelected($event) {
            console.log($event);
          }
        }, {
          key: "goToServiceScreens",
          value: function goToServiceScreens() {
            if (this.appointmentId) {
              if (this.appointmentId.data.appointmentId) {
                this.router.navigateByUrl('/sessions/login');
                localStorage.removeItem("FromLogin");
                localStorage.removeItem("TransactionType");
                localStorage.removeItem("customerId");
                localStorage.removeItem("phonenumFromLogin");
                localStorage.removeItem("customerValidation");
                localStorage.removeItem("otpPhoneNum");
                localStorage.removeItem("AccountBal");
                localStorage.removeItem("AccountNumber");
                localStorage.removeItem("ProductCode");
                localStorage.removeItem("tokenNumer");
                localStorage.removeItem("estimatedTiming");
                localStorage.removeItem("userId");
                localStorage.removeItem("scannerData");
                localStorage.removeItem("custholderName");
              }
            } else {
              this.router.navigateByUrl('/others/services');
            } // this.dialogService.tokenGenerationDialog();

          }
        }, {
          key: "gettingallTansactionDetails",
          value: function gettingallTansactionDetails(phoneNumber) {
            var _this17 = this;

            this.phoneNumber = localStorage.getItem("phonenumFromLogin");
            this.apiService.gettingTransactionDetails(this.phoneNumber).subscribe(function (allTransactionResp) {
              console.log("All Transaction Details", allTransactionResp);
              _this17.userName = (allTransactionResp.firstName ? allTransactionResp.firstName + ' ' : ' ') + (allTransactionResp.middleName ? allTransactionResp.middleName + ' ' : ' ') + (allTransactionResp.lastName ? allTransactionResp.lastName : ' ');

              _this17.cashdepositForm.controls.holderName.setValue(_this17.userName);

              _this17.custID = allTransactionResp.customerId; // this.setBalance(allTransactionResp.custAccount);

              _this17.custAccountData = allTransactionResp.custAccount;
              _this17.accounttypeArray = _toConsumableArray(_this17.custAccountData).filter(function (_ref2, index) {
                var accountType = _ref2.accountType;
                return !_toConsumableArray(_this17.custAccountData).map(function (obj) {
                  return obj.accountType;
                }).includes(accountType, index + 1);
              });

              for (var j = 0; j < _this17.custAccountData.length; j++) {
                if (_this17.custAccountData[j].status == 'APPROVED') {
                  _this17.accountNoList.push(_this17.custAccountData[j]);
                }
              }

              if (_this17.custAccountData && _this17.accountNoList.length <= 1) {
                _this17.accountDropdown = false;
                _this17.hideDetails = true;
                var accTyp = allTransactionResp.custAccount[0].accountType;

                _this17.cashdepositForm.controls.accountType.setValue(accTyp);

                _this17.custAccountNumber(_this17.accountNoList[0]);
              } else {
                _this17.accountDropdown = true;
                _this17.hideDetails = true;
                var _accTyp2 = allTransactionResp.custAccount[0].accountType;

                _this17.cashdepositForm.controls.accountType.setValue(_accTyp2);

                _this17.custAccountNumber(allTransactionResp.custAccount[0]);
              }
            });
          }
        }, {
          key: "getAccountType",
          value: function getAccountType(event) {
            this.cashdepositForm.controls.transactionAmount.reset();
            this.cashdepositForm.controls.totalTransactionAmount.setValue(this.cashdepositForm.controls.totalChargeAmount.value);
            this.accountNoList = [];
            console.log(event);
            this.isedit = false;
            this.accountNum1 = _toConsumableArray(this.custAccountData).filter(function (accounNum, index) {
              return accounNum.accountType == event;
            });
            console.log(this.accountNum1); // this.accountNoList=this.accountNum1
            // this.accountNoList=this.accountNum1.map((acccount)=>
            // {
            //   return acccount.accountId
            // })

            for (var i = 0; i < this.custAccountData.length; i++) {
              if (this.custAccountData[i].status == 'APPROVED' && this.custAccountData[i].accountType == event) {
                this.accountNoList.push(this.custAccountData[i].accountId);
              }
            }

            console.log(this.accountNoList);

            if (this.accountNoList.length <= 1) {
              this.flag1 = false; // this.cashdepositForm.controls.accountNumber.setValue(this.accountNoList[0]);

              this.getData(this.accountNoList[0]);
            } else {
              this.getData(this.accountNoList[0]);
              this.flag1 = true;
            }

            this.getChargeDetails(this.accountNoList[0], '');
          }
        }, {
          key: "getData",
          value: function getData(custNum) {
            this.hideDetails = true;
            console.log(custNum);
            var val = this.accountNum1.filter(function (value) {
              return value.accountId == custNum;
            });
            console.log(val);
            this.idList = _toConsumableArray(this.custAccountData).filter(function (item) {
              return item.accountType === val[0].accountType;
            });
            this.cashdepositForm.controls.accountCurrency.setValue(val[0].accountCurrency);
            this.cashdepositForm.controls.accountBranch.setValue(this.branch);
            this.selected = val[0].accountCurrency;
            this.curr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["getCurrencySymbol"])(val[0].accountCurrency, "narrow");
            this.cashdepositForm.controls.transactionCurrency.setValue(val[0].accountCurrency);
            this.currencyImage = 'currency-flag-' + val[0].accountCurrency.toLowerCase();
            console.log('data :: ', this.idList[0]);
            this.accountBal = this.idList[0].amount;
            console.log(this.accountBal);
            localStorage.setItem("AccountBal", this.accountBal); // this.cashdepositForm.controls.accountNumber.setValue(this.idList[0].accountId);

            this.custAmountBal(this.idList[0].accountId);
            this.cashdepositForm.controls.accountNumber.setValue(val[0].accountId);
            this.getChargeDetails(val[0].accountId, '');
            this.cashdepositForm.controls.accountBranch.setValue(val[0].accountBranch);
          }
        }, {
          key: "custAccountNumber",
          value: function custAccountNumber(custype) {
            console.log(custype);
            this.isedit = false;
            this.idList = _toConsumableArray(this.custAccountData).filter(function (item) {
              return item.accountType === custype.accountType;
            });
            var defaultId = this.idList ? this.idList[0] : null; // this.cashdepositForm.controls.accountNumber.setValue(defaultId);

            this.accountNoList = [];

            for (var i = 0; i < this.idList.length; i++) {
              if (this.idList[i].status == 'APPROVED') {
                this.accountNoList.push(this.idList[i].accountId);
              }
            }

            console.log(this.accountNoList);

            if (this.accountNoList.length <= 1) {
              // this.cashwithdrawForm.controls.accountNumber.patchValue(this.accountNoList[0]);
              this.flag1 = false; // this.getData(this.accountNoList[0]);

              this.cashdepositForm.controls.accountNumber.setValue(this.accountNoList[0]);
            } else {
              this.cashdepositForm.controls.accountNumber.setValue(this.accountNoList[0]);
              this.flag1 = true;
            }

            this.cashdepositForm.controls.accountCurrency.setValue(custype.accountCurrency);
            this.cashdepositForm.controls.accountBranch.setValue(this.branch); //this.cashdepositForm.controls.transactionAmount.setValue(custype.amount);
            // this.cashdepositForm.controls.accountType.setValue(defaultId);

            this.selected = custype.accountCurrency;
            this.curr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["getCurrencySymbol"])(custype.accountCurrency, "narrow"); // this.accountBal = this.idList[0].amount;

            this.cashdepositForm.controls.transactionCurrency.setValue(custype.accountCurrency);
            console.log(this.cashdepositForm.value.accountCurrency);
            this.currencyImage = 'currency-flag-' + custype.accountCurrency.toLowerCase();
            console.log(this.accountBal);
            localStorage.setItem("AccountBal", this.accountBal); // this.cashdepositForm.controls.accountNumber.setValue(this.idList[0].accountId);

            this.custAmountBal(this.accountNoList[0]);
            this.cashdepositForm.controls.accountBranch.setValue(custype.accountBranch);
            this.getChargeDetails(this.accountNoList[0], custype.amount);
          }
        }, {
          key: "custAmountBal",
          value: function custAmountBal(custNum) {
            console.log(custNum);
            var account = this.idList.filter(function (record) {
              if (record.accountId == custNum) {
                return record;
              }
            });
            console.log(account);
            this.accNum = account[0].accountId;
            this.accountBal = account[0].amount;
            this.selectedAccountInfo = account[0];
            console.log(this.selectedAccountInfo);
          }
        }, {
          key: "setBalance",
          value: function setBalance(accountBalance) {
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            this.accountBal = accountBalance[index].currentBalance ? accountBalance[index].currentBalance : null;
          }
        }, {
          key: "onSaveofcashDeposit",
          value: function onSaveofcashDeposit(formData, type, cdForm) {
            var _this18 = this;

            formData.transactionBranch = this.transBranch;
            console.log("Data", formData, type, cdForm);

            if (this.qrData) {
              if (this.qrData.transactionBranch) {
                this.apiService.fetchBranchInfoByBranchName(this.qrData.transactionBranch).subscribe(function (response) {
                  _this18.qrBranchCode = response;
                });
              }
            }

            var denominationData = {};
            var denominationDataArray = [];

            if (this.denomRequired == 'yes') {
              for (var i = 0; i < this.denomCodeArray.length; i++) {
                if (cdForm.value[this.denomCodeArray[i].key]) {
                  // denominationData.transactionId = this.cashdepositFor;
                  denominationData.denominationKey = this.denomCodeArray[i].value;
                  denominationData.denominationValue = +cdForm.value[this.denomCodeArray[i].key];
                  denominationData.currency = this.cashdepositForm.value.transactionCurrency; // denominationData.amountAvailiable = 15200 - (cdForm.value[this.denomCodeArray[i].key] * this.denomCodeArray[i].value);

                  denominationDataArray.push(denominationData);
                  console.log(denominationDataArray);
                  denominationData = {};
                }
              }
            }

            formData.tokenBranch = "KN";

            if (this.qrData) {
              if (this.qrData.transactionBranch) {
                formData.tokenBranch = this.qrBranchCode.transactionBranch;
              }
            }

            if (!this.ifQRvariable) {
              this.accountNum = JSON.stringify(this.selectedAccountInfo.accountId);
              formData.transactionCurrency = formData.transactionCurrency;
              formData.accountNumber = this.selectedAccountInfo.accountId;
              ;
              formData.customerId = this.custID;
              formData.productCode = this.productCode;
              formData.tokenOrigin = this.tokenOrigin;
              formData.accountBalance = this.accountBal; // console.log(formData.transactionCurrency);

              formData.transactionAmount = formData.transactionAmount.replace(/,/g, '');
              formData.accountType = formData.accountType;

              if (this.denomRequired == 'yes') {
                formData.denomination = denominationDataArray;
              }

              localStorage.setItem("AccountNumber", this.accountNum);
              localStorage.setItem("ProductCode", this.productCode);
            } else {
              // debugger;
              formData.customerId = this.custID;
              formData.accountType = formData.accountType;
              formData.accountNumber = formData.accountNumber;
              formData.holderName = formData.holderName;
              formData.accountCurrency = formData.accountCurrency;
              formData.transactionCurrency = formData.transactionCurrency; // formData.transactionAmount = formData.transactionAmount.replace(/,/g, '');

              formData.transactionAmount = formData.transactionAmount;
              formData.productCode = this.productCode;
              formData.tokenOrigin = this.tokenOrigin;
              formData.accountBalance = this.accountBal;

              if (this.denomRequired == 'yes') {
                formData.denomination = denominationDataArray;
              }
            }

            console.log("data::", this.appointmentId);

            if (this.appointmentId && this.appointmentId.data) {
              formData.transactionId = this.appointmentId.data.transactionId;
              formData.transactionStatus = this.appointmentId.data.transactionStatus;
            }

            formData.totalAmount = formData.totalAmount.replace(/,/g, '');
            this.apiService.saveofCashDeposit(formData).subscribe(function (cashDepositResp) {
              console.log("Response Success", cashDepositResp);
              _this18.cashDepositResponse = cashDepositResp;
              _this18.tokenNum = _this18.cashDepositResponse.tokenNumber;
              _this18.estimatedTime = _this18.cashDepositResponse.estimatedWaitTime;
              localStorage.setItem("tokenNumer", _this18.tokenNum);
              localStorage.setItem("estimatedTiming", _this18.estimatedTime);
              _this18.enableContinue = false;

              if (_this18.cashDepositResponse) {
                _this18.dialogService.tokenGenerationDialog();
              }
            });
          } // OTP And Save

        }, {
          key: "getOTP",
          value: function getOTP(formData, type, cdForm) {
            var _this19 = this;

            this.cashdepositValues = formData;
            this.cashdeposiform = type;
            this.cashdepositType = cdForm;
            this.oTpModel.source = 'customer';
            this.oTpModel.source_key = 'mobile';
            this.oTpModel.source_value = this.phonenum;
            var amount = 50000;
            var transamountwithoutcomma = this.cashdepositValues.transactionAmount.replace(/,/g, "");
            console.log(transamountwithoutcomma);

            if (transamountwithoutcomma > amount) {
              this.apiService.getOtp(this.oTpModel).subscribe(function (otpResp) {
                if (otpResp) {
                  _this19.openDialogOTP(_this19.phonenum);

                  _this19.snack.open("An OTP has been sent to the Registered Mobile Number.", "", {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                  });
                }
              });
            } else {
              this.getOTPforSave(this.cashdepositValues, this.cashdeposiform, this.cashdepositType);
            }
          }
        }, {
          key: "getOTPforSave",
          value: function getOTPforSave(formData, type, cdForm) {
            var _this20 = this;

            formData.transactionBranch = this.transBranch;
            var denominationData = {};
            var denominationDataArray = [];

            if (this.denomRequired == 'yes') {
              for (var i = 0; i < this.denomCodeArray.length; i++) {
                if (cdForm.value[this.denomCodeArray[i].key]) {
                  denominationData.denominationKey = this.denomCodeArray[i].value;
                  denominationData.denominationValue = +cdForm.value[this.denomCodeArray[i].key];
                  denominationData.currency = this.cashdepositForm.value.transactionCurrency; // denominationData.amountAvailiable = 15200 - (cdForm.value[this.denomCodeArray[i].key] * this.denomCodeArray[i].value);

                  denominationDataArray.push(denominationData);
                  console.log(denominationDataArray);
                  denominationData = {};
                }
              }
            }

            if (this.custValidation == "New Customer") {
              console.log("customer", this.custmerID);
              this.transactionId = localStorage.getItem('transactionId');
              this.transactionStatus = localStorage.getItem('transactionStatus');
              this.accountNum = formData.accountNumber;
              formData.customerId = this.custmerID ? this.custmerID : 0;
              formData.accountType = formData.accountType;
              formData.accountNumber = this.accountNumber;
              formData.holderName = formData.holderName;
              formData.accountCurrency = formData.accountCurrency;
              formData.transactionCurrency = formData.transactionCurrency;
              formData.transactionAmount = formData.transactionAmount.replace(/,/g, '');
              formData.productCode = this.productCode;
              formData.tokenOrigin = this.tokenOrigin;
              formData.accountBalance = this.accountBal;

              if (this.denomRequired == 'yes') {
                formData.denomination = denominationDataArray;
              }
            }

            formData.tokenBranch = "KN";

            if (this.appointmentId && this.appointmentId.data) {
              formData.transactionId = this.appointmentId.data.transactionId;
              formData.transactionStatus = this.appointmentId.data.transactionStatus;
            }

            formData.customerId = this.custmerID ? this.custmerID : 0;
            formData.accountType = formData.accountType;
            formData.accountNumber = this.accountNumber;
            formData.holderName = formData.holderName;
            formData.accountCurrency = formData.accountCurrency;
            formData.transactionCurrency = formData.transactionCurrency;
            formData.transactionAmount = formData.transactionAmount.replace(/,/g, '');
            formData.productCode = this.productCode;
            formData.tokenOrigin = this.tokenOrigin;
            formData.accountBalance = this.accountBal;
            console.log(formData.transactionId, formData.transactionStatus);
            this.apiService.saveofCashDeposit(formData).subscribe(function (cashDepositResp) {
              console.log("Response Success", cashDepositResp);
              _this20.cashDepositResponse = cashDepositResp;
              _this20.tokenNum = _this20.cashDepositResponse.tokenNumber;
              _this20.estimatedTime = _this20.cashDepositResponse.estimatedWaitTime;
              localStorage.setItem("tokenNumer", _this20.tokenNum);
              localStorage.setItem("estimatedTiming", _this20.estimatedTime);
              _this20.enableContinue = false;

              if (_this20.cashDepositResponse) {
                _this20.dialogService.tokenGenerationDialog();
              }
            });
          }
        }, {
          key: "openDialogOTP",
          value: function openDialogOTP(numbr) {
            var _this21 = this;

            var dialogRef = this.dialog.open(_otp_verify_otp_verify_component__WEBPACK_IMPORTED_MODULE_9__["OtpVerifyComponent"], {
              data: {
                number: numbr,
                type: "numbr"
              },
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (submit) {
              if (submit) {
                _this21.getOTPforSave(_this21.cashdepositValues, _this21.cashdeposiform, _this21.cashdepositType);
              }
            });
          }
        }, {
          key: "OnInput",
          value: function OnInput(event) {
            this.transAmt = event.target.value;
            console.log(event.target.value);
            this.totalAmount = 0; // comma separator using changeDetector

            var savedInput = this.transAmount; // this.transAmount = '';
            // this.changeDef.detectChanges();

            var lastCharIsPoint = false;

            if (savedInput.charAt(savedInput.length - 1) === '.') {
              lastCharIsPoint = true;
            }

            var num = savedInput.replace(/[^0-9.]/g, '');
            this.transAmt = Number(num) || '';
            this.transAmount = this.transAmt.toLocaleString('en-IN');

            if (lastCharIsPoint) {
              this.transAmount = this.transAmount.concat('.');
            }

            this.changeDef.detectChanges();
            this.balance = localStorage.getItem("AccountBal");

            if (parseFloat(this.balance) < parseFloat(this.transAmt)) {
              console.log("Bigger");
              this.snack.open("Transaction Amount should not exceed than Account Balance", 'OK', {
                duration: 2000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
              this.enableContinue = false;
            } else {
              this.enableContinue = true;
            }

            this.totalTransAmount = Number(this.transAmt) + Number(this.chargeDetails ? this.chargeDetails[0].amount : '');
            this.cashdepositForm.controls.totalTransactionAmount.setValue(this.totalTransAmount);
            this.cdr.markForCheck();
            this.cdr.detectChanges();
          }
        }, {
          key: "clicked",
          value: function clicked(event) {
            console.log(event);
          }
        }, {
          key: "addCurrencyImage",
          value: function addCurrencyImage(currency) {
            return currency.toLowerCase();
          }
        }, {
          key: "onCountryChange",
          value: function onCountryChange(country) {
            var currency = country.currencyCode;
            this.currencyImage = 'currency-flag-' + currency.toLowerCase();
          }
        }, {
          key: "accountCurrencyImage",
          value: function accountCurrencyImage(accountCurrency) {
            return accountCurrency ? 'currency-flag-' + accountCurrency.toLowerCase() : '';
          }
        }, {
          key: "omit_number",
          value: function omit_number(event) {
            var key;
            key = event.charCode;
            return key > 47 && key < 58;
          }
        }, {
          key: "totalAmountValue",
          value: function totalAmountValue(cdForm) {
            this.a = this.cashdepositForm.value.transactionAmount;
            this.a = this.a.replace(/\,/g, ''); // 1125, but a string, so convert it to number

            this.a = parseInt(this.a, 10);
            this.cashdepositForm.value.totalAmount = (cdForm.value.count2000 ? cdForm.value.count2000 * 2000 : 0) + (cdForm.value.count500 ? cdForm.value.count500 * 500 : 0) + (cdForm.value.count200 ? cdForm.value.count200 * 200 : 0) + (cdForm.value.count100 ? cdForm.value.count100 * 100 : 0) + (cdForm.value.count50 ? cdForm.value.count50 * 50 : 0) + (cdForm.value.count20 ? cdForm.value.count20 * 20 : 0) + (cdForm.value.count10 ? cdForm.value.count10 * 10 : 0) + (cdForm.value.count1 ? cdForm.value.count1 * 1 : 0);
            this.cashdepositForm.value.totalAmount = this.cashdepositForm.value.totalAmount;
            console.log(this.cashdepositForm.value.totalAmount);
            console.log(this.cashdepositForm.value.transactionAmount);
            this.transamount = this.cashdepositForm.value.transactionAmount;
            this.totalAmount = this.cashdepositForm.value.totalAmount.toLocaleString("en-US");

            if (this.transamount != this.totalAmount) {
              this.enableBtn = false;
            } else {
              this.enableBtn = true;
            }

            if (this.transamount > this.totalAmount || this.transamount < this.totalAmount) {
              this.enableBtn1 = true;
            } else {
              this.enableBtn1 = false;
            }

            this.cashdepositForm.controls.totalAmount.setValue(this.cashdepositForm.value.totalAmount);
          }
        }, {
          key: "cashWithdrawlData",
          value: function cashWithdrawlData() {
            var _this22 = this;

            this.apiService.getAppointmentId(this.appointmentId.data.appointmentId).subscribe(function (resp) {
              console.log("resp ::", resp);
              _this22.cashData = resp.data;
              _this22.custID = resp.data.customerId;
              _this22.ifQRvariable = true;

              _this22.cashdepositForm.controls.accountType.setValue(resp.data.accountType);

              _this22.cashdepositForm.controls.accountBranch.setValue(resp.data.accountBranch);

              _this22.cashdepositForm.controls.accountNumber.setValue(resp.data.accountNumber);

              _this22.getChargeDetails(resp.data.accountNumber, resp.data.transactionAmount);

              _this22.cashdepositForm.controls.accountCurrency.setValue(resp.data.accountCurrency);

              _this22.cashdepositForm.controls.transactionCurrency.setValue(resp.data.transactionCurrency);

              _this22.cashdepositForm.controls.transactionAmount.setValue(resp.data.transactionAmount);

              _this22.currencyImage = 'currency-flag-' + resp.data.accountCurrency.toLowerCase();
              _this22.currencyImage = 'currency-flag-' + resp.data.transactionCurrency.toLowerCase();
              console.log("amount::", _this22.cashdepositForm.controls.transactionAmount.value);
            });
          }
        }, {
          key: "getChargeDetails",
          value: function getChargeDetails(accountId, amount) {
            var _this23 = this;

            this.apiService.fetchChargeDetails(accountId).subscribe(function (resp) {
              console.log(resp);
              _this23.chargeDetails = resp;

              _this23.cashdepositForm.controls.totalChargeAmount.setValue(_this23.chargeDetails ? _this23.chargeDetails[0].amount : '');
            });

            if (this.cashData) {
              setTimeout(function () {
                _this23.totalTransAmount = Number(_this23.cashData.transactionAmount) + Number(_this23.chargeDetails[0].amount);

                _this23.cashdepositForm.controls.totalTransactionAmount.setValue(_this23.totalTransAmount);
              }, 1000);
              this.cdr.markForCheck();
              this.cdr.detectChanges();
            } else {
              console.log(this.chargeDetails);
              amount = 0;
              console.log(amount);
              setTimeout(function () {
                _this23.totalTransAmount = Number(amount) + Number(_this23.chargeDetails ? _this23.chargeDetails[0].amount : '');
                console.log(_this23.totalTransAmount);

                _this23.cashdepositForm.controls.totalTransactionAmount.setValue(_this23.totalTransAmount);
              }, 1000);
              this.cdr.markForCheck();
              this.cdr.detectChanges();
            } // console.log(this.totalTransAmount);

          }
        }, {
          key: "onclickofConfirm",
          value: function onclickofConfirm(cdForm) {
            var denominationData = {};
            var denominationDataArray = [];

            for (var i = 0; i < this.denomCodeArray.length; i++) {
              if (cdForm.value[this.denomCodeArray[i].key]) {
                // denominationData.transactionId = this.cashdepositFor;
                denominationData.denominationKey = this.denomCodeArray[i].value;
                denominationData.denominationValue = +cdForm.value[this.denomCodeArray[i].key];
                denominationData.currency = this.cashDepositResponse.value.transactionCurrency; // denominationData.amountAvailiable = 15200 - (cdForm.value[this.denomCodeArray[i].key] * this.denomCodeArray[i].value);

                denominationDataArray.push(denominationData);
                console.log(denominationDataArray);
                denominationData = {};
              }
            }
          }
        }, {
          key: "getBankInformation",
          value: function getBankInformation(branchCode) {
            var _this24 = this;

            this.apiService.fetchBankInfoByBranchCode(branchCode).subscribe(function (resp) {
              console.log(resp);
              _this24.denomRequired = resp.denomRequired;

              if (resp.denomRequired == 'yes') {
                _this24.enableBtn = false;
                _this24.enableBtn1 = false;
              }
            });
          }
        }, {
          key: "formatAmount",
          value: function formatAmount(amount) {
            if (amount) {
              return amount && amount.toString().split('.')[0].length > 3 ? amount.toString().substring(0, amount.toString().split('.')[0].length - 3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + amount.toString().substring(amount.toString().split('.')[0].length - 3) : amount.toString();
            }
          }
        }]);

        return CashDepositComponent;
      }();

      CashDepositComponent.ɵfac = function CashDepositComponent_Factory(t) {
        return new (t || CashDepositComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      CashDepositComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CashDepositComponent,
        selectors: [["app-cash-deposit"]],
        viewQuery: function CashDepositComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdForm = _t.first);
          }
        },
        inputs: {
          tokenResp: "tokenResp"
        },
        decls: 83,
        vars: 26,
        consts: [[1, "fullcard"], ["fxLayout", "row"], ["fxFlex", "cashdepositForm.get('transactionAmount').value > 0? 70% : 100%"], [1, "h1"], [2, "color", "grey", "padding-right", "4px"], [2, "padding-left", "4px"], [1, "chequecard", "topView"], [2, "padding", "2%"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["class", "backIcon", 3, "click", 4, "ngIf"], [1, "card-title"], [1, "full-width", 2, "padding", "0% 0% 3% 2%"], [3, "formGroup"], ["fxLayout", "column", "fxLayoutGap", "3%", "fxLayoutAlign", "space-between none"], ["fxLayout", "row wrap", 1, "flex-container", "stretch"], ["fxFlex", "25%", "fxFlex.xs", "100%", 4, "ngIf"], ["fxFlex", "25%", "fxFlex.xs", "100%"], [1, "accountBranch"], [1, "inputCard"], ["matInput", "", "type", "text", "class", "full-width", "formControlName", "accountBranch", 3, "readonly", 4, "ngIf"], [4, "ngIf"], [1, "totalAmount"], ["fxLayout", "row wrap", 1, "full-width"], ["fxFlex", "25%"], [3, "class", 4, "ngIf"], ["fxFlex", "75%"], ["matInput", "", "type", "text", "class", "full-width", "style", "font-size:110%", "formControlName", "accountCurrency", 3, "readonly", 4, "ngIf"], ["fxFlex", "25.5%", "fxFlex.xs", "100%", 4, "ngIf"], ["matInput", "", "readonly", "", "formControlName", "totalChargeAmount", 1, "full-width"], ["matInput", "", "readonly", "", "formControlName", "totalTransactionAmount", 1, "full-width"], [1, "tooltip"], ["width", "80%", 3, "src"], [1, "tooltiptext"], [1, "totalAmount", "textcolor", 2, "margin-top", "10px", "margin-bottom", "6px"], [1, "totalAmount", "textcolor"], [1, "totalAmount", "textcolor", 2, "margin-right", "10px"], ["fxFlex", "30%", 4, "ngIf"], ["fxLayout", "row wrap", "id", "buttonDiv", 1, "flex-container", "stretch"], ["fxFlex", "30%", "fxFlex.xs", "100%", 1, "paddingCls"], ["mat-flat-button", "", "class", "buttonCancel full-width", 3, "click", 4, "ngIf"], ["fxFlex", "70%", "fxFlex.xs", "100%", "class", "paddingCls", 4, "ngIf"], [1, "backIcon", 3, "click"], ["matInput", "", "type", "text", "class", "full-width", "formControlName", "accountType", 3, "readonly", 4, "ngIf"], ["formControlName", "accountType", "style", "background-color: #f9fafb;", "placeholder", "Select Account Type", 3, "selectionChange", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "accountType", 1, "full-width", 3, "readonly"], ["formControlName", "accountType", "placeholder", "Select Account Type", 2, "background-color", "#f9fafb", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "type", "text", "formControlName", "accountNumber", 1, "full-width", 3, "change"], ["class", "totalAmount", 4, "ngIf"], ["class", "totalAmount", 3, "readonly", 4, "ngIf"], [1, "totalAmount", 3, "readonly"], ["matInput", "", "type", "text", "class", "full-width", "formControlName", "accountNumber", 3, "readonly", 4, "ngIf"], ["formControlName", "accountNumber", "style", "background-color: #f9fafb;", 3, "selectionChange", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "accountNumber", 1, "full-width", 3, "readonly"], ["formControlName", "accountNumber", 2, "background-color", "#f9fafb", 3, "selectionChange"], ["matInput", "", "type", "text", "formControlName", "accountBranch", 1, "full-width", 3, "readonly"], ["matInput", "", "type", "text", "formControlName", "accountCurrency", 1, "full-width", 2, "font-size", "110%", 3, "readonly"], ["matInput", "", "type", "text", "class", "full-width", "formControlName", "transactionCurrency", 3, "readonly", 4, "ngIf"], ["formControlName", "transactionCurrency", "placeholder", "Select Transaction Currency", "id", "testSelect", "style", "background-color: #f9fafb;", 3, "disabled", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "transactionCurrency", 1, "full-width", 3, "readonly"], ["formControlName", "transactionCurrency", "placeholder", "Select Transaction Currency", "id", "testSelect", 2, "background-color", "#f9fafb", 3, "disabled"], ["style", "font-size:110%", 3, "value", "click", 4, "ngFor", "ngForOf"], [2, "font-size", "110%", 3, "value", "click"], ["fxFlex", "15%"], ["fxFlex", "85%"], ["formControlName", "transactionCurrency", "placeholder", "Select Transaction Currency", "id", "testSelect", 2, "background-color", "#f9fafb"], ["fxFlex", "25.5%", "fxFlex.xs", "100%"], ["matInput", "", "type", "text", "class", "full-width", "formControlName", "transactionAmount", 3, "readonly", 4, "ngIf"], ["matInput", "", "class", "full-width", "formControlName", "transactionAmount", 3, "ngModel", "value", "readonly", "ngModelChange", "keyup", "focus", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "transactionAmount", 1, "full-width", 3, "readonly"], ["matInput", "", "formControlName", "transactionAmount", 1, "full-width", 3, "ngModel", "value", "readonly", "ngModelChange", "keyup", "focus"], ["myRef", ""], ["matInput", "", "formControlName", "transactionAmount", 1, "full-width", 3, "ngModel", "value", "ngModelChange", "keyup", "focus"], ["fxFlex", "30%"], ["cdForm", "ngForm"], [1, "border-align"], ["fxLayout", "row", 1, "pH10", "full-width"], [1, "title-Font"], ["id", "denominationDiv", 1, "pH10", "full-width"], ["class", "paddingclass", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "paddingclass", "fxLayoutAlign", "start center", 4, "ngIf"], ["fxLayout", "row wrap", 1, "pH10", "full-width"], ["fxFlex", "53%", "fxFlex.xs", "100%"], ["matInput", "", "name", "totalAmount", "readonly", "", 1, "full-width", "inputClass", 3, "ngModel", "ngModelChange"], [1, "pl10", 2, "width", "150%"], ["fxLayoutAlign", "center center", 1, "paddingclass"], ["fxFlex", "20%"], [1, "quantityClass", "text-small"], ["fxFlex", "10%"], [1, "operationTypeClass", "text-small"], ["fxFlex", "70%"], ["type", "text", "matInput", "", "name", "count2000", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count2000", ""], [1, "pl10"], ["fxLayoutAlign", "start center", 1, "paddingclass"], ["type", "text", "matInput", "", "name", "count500", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count500", ""], ["type", "text", "matInput", "", "name", "count200", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count200", ""], ["type", "text", "matInput", "", "name", "count100", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count100", ""], ["type", "text", "matInput", "", "name", "count50", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count50", ""], ["type", "text", "matInput", "", "name", "count20", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count20", ""], ["type", "text", "matInput", "", "name", "count10", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count10", ""], ["type", "text", "matInput", "", "name", "count1", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["mat-flat-button", "", 1, "buttonCancel", "full-width", 3, "click"], ["fxFlex", "70%", "fxFlex.xs", "100%", 1, "paddingCls"], ["mat-flat-button", "", 1, "buttonNext", "full-width", 3, "disabled", "click"]],
        template: function CashDepositComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cash Deposit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-title", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CashDepositComponent_mat_icon_15_Template, 2, 0, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CashDepositComponent_div_26_Template, 6, 2, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CashDepositComponent_div_27_Template, 8, 2, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CashDepositComponent_div_28_Template, 9, 4, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CashDepositComponent_div_29_Template, 5, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-hint", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Account Branch*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CashDepositComponent_input_34_Template, 1, 1, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CashDepositComponent_input_35_Template, 1, 1, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CashDepositComponent_mat_error_36_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-hint", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Account Currency*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CashDepositComponent_div_46_Template, 1, 3, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CashDepositComponent_div_47_Template, 1, 3, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CashDepositComponent_input_49_Template, 1, 1, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CashDepositComponent_input_50_Template, 1, 1, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CashDepositComponent_div_51_Template, 10, 5, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, CashDepositComponent_div_52_Template, 10, 4, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, CashDepositComponent_div_53_Template, 7, 3, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, CashDepositComponent_div_54_Template, 8, 6, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-hint", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Total Charge Amount*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-hint", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Total Transaction Amount*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, CashDepositComponent_div_75_Template, 24, 10, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, CashDepositComponent_button_80_Template, 2, 0, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, CashDepositComponent_div_81_Template, 3, 1, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, CashDepositComponent_div_82_Template, 3, 1, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.cashdepositForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cashdepositForm.get("accountBranch").touched && !ctx.cashdepositForm.get("accountBranch").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ifQRvariable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ifQRvariable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/info.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Transaction Amount:", ctx.cashdepositForm.get("transactionAmount").value, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Charge Amount:", ctx.cashdepositForm.get("totalChargeAmount").value, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Transaction Amount:", ctx.cashdepositForm.get("totalTransactionAmount").value, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.denomRequired == "yes" && (ctx.cashdepositForm.get("transactionAmount").value > 0 || ctx.transAmt > 0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]],
        styles: [".fullcard[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  height: 110%;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-top: 8px;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  height: auto;\n  border-radius: 10px;\n}\n\n.h1[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding-top: 24px;\n  padding-left: 1%;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 24px;\n}\n\n.accountBranch[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #7e84a3;\n  padding-left: 10px;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin-top: 50px;\n  margin-left: 26px;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  min-width: 200px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  background-color: #fe6700;\n  color: #fff;\n  text-align: start;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  top: -49px;\n  left: 130%;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  right: 100%;\n  margin-top: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent #fe6700 transparent transparent;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.totalAmount.textcolor[_ngcontent-%COMP%] {\n  color: white;\n  font-size: smaller;\n  color: #304156;\n  padding-left: 10px;\n}\n\n.alignImage[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  float: right;\n}\n\n.outer-Div[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.content-Div[_ngcontent-%COMP%] {\n  padding: 6%;\n}\n\n.paddingright[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.closeDrawerIcon[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n\n.title-Class[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n.topView[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding-top: 0px;\n  padding-bottom: 8px;\n  margin-bottom: 2px;\n}\n\n.border-align[_ngcontent-%COMP%] {\n  margin-top: 45px;\n  height: 505px;\n  border-radius: 10px;\n}\n\n.spaceDiv[_ngcontent-%COMP%] {\n  padding-right: 3%;\n}\n\n.spaceUserImage[_ngcontent-%COMP%] {\n  padding-left: 2%;\n  width: 12%;\n}\n\n.user-name-Div[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: bolder;\n  font-family: sans-serif;\n  margin-top: 10px;\n  margin-bottom: -10px;\n}\n\n.title-Font[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  color: #000000;\n  width: 90%;\n  font-weight: bold;\n}\n\n.token-Div[_ngcontent-%COMP%] {\n  font-size: x-small;\n  color: #7e84a3;\n  font-family: sans-serif;\n}\n\n.token-id-class[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  background-color: #fafafa;\n  border-radius: 4px;\n}\n\n.width100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.details-Div[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.mat-expansion-panel-spacing[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.icon[_ngcontent-%COMP%] {\n  float: right;\n  color: #000000;\n  font-weight: 700;\n}\n\n.btnConfirmClass[_ngcontent-%COMP%] {\n  background-color: #456efe;\n  color: white;\n  border-radius: 20px;\n  width: 120px;\n  font-family: sans-serif;\n  font-size: smaller;\n}\n\n.btnDiv[_ngcontent-%COMP%] {\n  padding-top: 15%;\n}\n\n.btnCancelClass[_ngcontent-%COMP%] {\n  background-color: #f8f8f8 !important;\n  color: #5d5d5d !important;\n  border-radius: 20px !important;\n  width: 120px !important;\n  font-family: sans-serif !important;\n  font-size: smaller !important;\n}\n\n.width50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 940px;\n  align-self: center;\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-top-color: #f5f5f5;\n  margin-left: 2%;\n}\n\n.buttonNext[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-color: #1BCD9D;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.buttonCancel[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border-color: white;\n  background-color: #E3E3E3;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.inputCard[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  box-sizing: border-box;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n  background-color: #F9FAFB;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.pb1[_ngcontent-%COMP%] {\n  padding-bottom: 1%;\n}\n\n.operationTypeClass[_ngcontent-%COMP%] {\n  color: #A1A1A1;\n  margin: auto;\n}\n\n.quantityClass[_ngcontent-%COMP%] {\n  color: #000000;\n  margin: auto;\n  font-weight: 500;\n}\n\n.paddingclass[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n\n.totalAmount[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #7e84a3;\n  padding-left: 10px;\n}\n\n.inputCard[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 2px 1px -1px #f8f8f8, 0 1px 0 #f8f8f8, 0 5px 8px 0 #e9e9e9;\n}\n\n.chargeDetailsTbl[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  border-collapse: collapse;\n  border-radius: 10px;\n}\n\n.chargeDetailsDiv[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.thchargeDetailsTbl[_ngcontent-%COMP%] {\n  background-color: #f2f0f0;\n  color: #968e8e;\n  font-family: sans-serif;\n  text-align: center;\n  border-bottom-style: none;\n}\n\n.tbchargeDetailsTbl[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  font-size: x-small;\n  font-family: sans-serif;\n  text-align: center;\n  color: #726868;\n}\n\n.titleHead[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n[_nghost-%COMP%]     mat-select-country > mat-form-field {\n  width: 100% !important;\n}\n\n[_nghost-%COMP%]     mat-select-country > mat-form-field > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-suffix > mat-icon > svg {\n  margin-bottom: -8px;\n}\n\n[_nghost-%COMP%]     mat-select-country > mat-form-field > div.mat-form-field-wrapper {\n  padding-bottom: 0.8rem;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.paddingCls[_ngcontent-%COMP%] {\n  padding: 0% 2%;\n}\n\n#buttonDiv[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-top: 2%;\n}\n\n#denominationDiv[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FzaC1kZXBvc2l0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQU9KOztBQUpBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFPSjs7QUFKRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseURBQUE7QUFPSjs7QUFMRTtFQUNFLG1CQUFBO0FBUUo7O0FBTEE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFRSjs7QUFMQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQVFKOztBQUxFO0VBQ0kseUJBQUE7QUFRTjs7QUFORTtFQUNJLFdBQUE7QUFTTjs7QUFORTtFQUNJLG1CQUFBO0FBU047O0FBTkU7RUFDSSxtQkFBQTtBQVNOOztBQU5FO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFTTjs7QUFQRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFVSjs7QUFSRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBV0o7O0FBUkU7RUFDSSxpQkFBQTtBQVdOOztBQVRFO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0FBWU47O0FBVEU7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBWU47O0FBVEU7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFZTjs7QUFSRTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBV047O0FBVEU7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFZTjs7QUFWRTtFQUNJLFdBQUE7QUFhTjs7QUFYRTtFQUNJLHlCQUFBO0FBY047O0FBWkU7RUFDSSxzQkFBQTtBQWVOOztBQVpFO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWVOOztBQWJFO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQWdCTjs7QUFkRTtFQUNJLGdCQUFBO0FBaUJOOztBQWZFO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0FBa0JOOztBQWZFO0VBQ0ksVUFBQTtBQWtCTjs7QUFoQkU7RUFDSSxZQUFBO0VBQ0Qsa0JBQUE7RUFDQyxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBbUJOOztBQWpCRTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFvQk47O0FBakJFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBb0JKOztBQWxCRTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUFxQk47O0FBbEJFO0VBQU8sU0FBQTtFQUFTLFVBQUE7RUFDZCx5QkFBQTtFQUNBLGlCQUFBO0FBdUJKOztBQXRCSTtFQUFhLHdCQUFBO0FBMEJqQjs7QUF4QkU7RUFDSSxrQkFBQTtBQTJCTjs7QUF4QkU7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQTJCTjs7QUF4QkU7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBMkJOOztBQXhCRTtFQUNJLFdBQUE7QUEyQk47O0FBeEJFO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUEyQk47O0FBeEJFO0VBQ0ksd0VBQUE7QUEyQk47O0FBdEJFO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBeUJOOztBQXRCRTtFQUNJLG9CQUFBO0FBeUJOOztBQXRCRTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQXlCTjs7QUF0QkU7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUF5Qk47O0FBdEJFO0VBQ0ksb0JBQUE7QUF5Qk47O0FBckJBO0VBQ0ksc0JBQUE7QUF3Qko7O0FBckJBO0VBQ0ksbUJBQUE7QUF3Qko7O0FBckJBO0VBQ0ksc0JBQUE7QUF3Qko7O0FBdEJBOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQXlCRjs7QUF2QkE7RUFDRSwwQkFBQTtBQTBCRjs7QUF4QkE7RUFDSSxjQUFBO0FBMkJKOztBQXpCQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0FBNEJKOztBQTFCQTtFQUNJLGFBQUE7RUFDQSxnQ0FBQTtBQTZCSiIsImZpbGUiOiJjYXNoLWRlcG9zaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbGNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTEwJTtcclxufVxyXG4uYmFja0ljb257XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuLmNoZXF1ZWNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmgxe1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uYWNjb3VudEJyYW5jaHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIGNvbG9yOiAjN2U4NGEzO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAudG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI2cHg7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xyXG4gIH1cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU2NzAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogLTQ5cHg7XHJcbiAgICBsZWZ0OiAxMzAlO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcCAudG9vbHRpcHRleHQ6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZlNjcwMCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuLnRvdGFsQW1vdW50LnRleHRjb2xvcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIGNvbG9yOiAjMzA0MTU2O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbi5hbGlnbkltYWdle1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuICAub3V0ZXItRGl2e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gIH1cclxuICAuY29udGVudC1EaXZ7XHJcbiAgICAgIHBhZGRpbmc6IDYlO1xyXG4gIH1cclxuICBcclxuICAucGFkZGluZ3JpZ2h0e1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2xvc2VEcmF3ZXJJY29ue1xyXG4gICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtQ2xhc3N7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC50b3BWaWV3e1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgfVxyXG4gIC5ib3JkZXItYWxpZ257XHJcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gICAgaGVpZ2h0OjUwNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNwYWNlRGl2e1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcclxuICB9XHJcbiAgLnNwYWNlVXNlckltYWdle1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgICB3aWR0aDogMTIlO1xyXG4gIH1cclxuICBcclxuICAudXNlci1uYW1lLURpdntcclxuICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtRm9udHtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnRva2VuLURpdntcclxuICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgICBjb2xvcjogIzdlODRhMztcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC50b2tlbi1pZC1jbGFzc3tcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICAud2lkdGgxMDB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZGV0YWlscy1EaXZ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgfVxyXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLXNwYWNpbmd7XHJcbiAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29ue1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAuYnRuQ29uZmlybUNsYXNze1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2ZWZlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICB9XHJcbiAgLmJ0bkRpdntcclxuICAgICAgcGFkZGluZy10b3A6IDE1JTtcclxuICB9XHJcbiAgLmJ0bkNhbmNlbENsYXNze1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjNWQ1ZDVkICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGxlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAud2lkdGg1MHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgLmxpbmV7XHJcbiAgICAgIHdpZHRoOiA5NDBweDtcclxuICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcclxuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci10b3AtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICB9XHJcbiAgLmJ1dHRvbk5leHR7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQkNEOUQ7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5idXR0b25DYW5jZWx7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNFM0UzO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmlucHV0Q2FyZHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQge2JvcmRlcjowO291dGxpbmU6MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUZBRkI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZH1cclxuICAgIGlucHV0OmZvY3VzIHtvdXRsaW5lOm5vbmUhaW1wb3J0YW50O31cclxuICBcclxuICAucGIxe1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcGVyYXRpb25UeXBlQ2xhc3N7XHJcbiAgICAgIGNvbG9yOiAjQTFBMUExO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5xdWFudGl0eUNsYXNze1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAucGFkZGluZ2NsYXNze1xyXG4gICAgICBwYWRkaW5nOiAyJTtcclxuICB9XHJcbiAgXHJcbiAgLnRvdGFsQW1vdW50e1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICAgIGNvbG9yOiAjN2U4NGEzO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dENhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCAjZjhmOGY4LFxyXG4gICAgICAgICAgICAgICAgICAwIDFweCAwICNmOGY4ZjgsXHJcbiAgICAgICAgICAgICAgICAgIDAgNXB4IDhweCAwICNlOWU5ZTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGFyZ2VEZXRhaWxzVGJse1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2hhcmdlRGV0YWlsc0RpdntcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aGNoYXJnZURldGFpbHNUYmx7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYwZjAgO1xyXG4gICAgICBjb2xvcjogIzk2OGU4ZTtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRiY2hhcmdlRGV0YWlsc1RibHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzcyNjg2ODtcclxuICB9XHJcblxyXG4gIC50aXRsZUhlYWR7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbWF0LXNlbGVjdC1jb3VudHJ5ID4gbWF0LWZvcm0tZmllbGR7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbWF0LXNlbGVjdC1jb3VudHJ5ID4gbWF0LWZvcm0tZmllbGQgPiBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciA+IGRpdi5tYXQtZm9ybS1maWVsZC1mbGV4ID4gZGl2Lm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCA+IG1hdC1pY29uID4gc3Zne1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG1hdC1zZWxlY3QtY291bnRyeSA+IG1hdC1mb3JtLWZpZWxkID4gZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44cmVtO1xyXG59XHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcbi5wYWRkaW5nQ2xze1xyXG4gICAgcGFkZGluZzogMCUgMiU7XHJcbn1cclxuI2J1dHRvbkRpdntcclxuICAgIHdpZHRoOjgwJTtcclxuICAgIG1hcmdpbi10b3A6MiVcclxufVxyXG4jZGVub21pbmF0aW9uRGl2e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CashDepositComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cash-deposit',
            templateUrl: './cash-deposit.component.html',
            styleUrls: ['./cash-deposit.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          tokenResp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cdForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cdForm']
          }]
        });
      })();
      /***/

    },

    /***/
    "azsi":
    /*!***********************************************************************************!*\
      !*** ./src/app/views/others/utility-billpayment/utility-billpayment.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: UtilityBillpaymentComponent */

    /***/
    function azsi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilityBillpaymentComponent", function () {
        return UtilityBillpaymentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/Dialog/dialog.service */
      "LP5l");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function UtilityBillpaymentComponent_mat_option_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var test_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", test_r2.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", test_r2.viewValue, " ");
        }
      }

      var UtilityBillpaymentComponent = /*#__PURE__*/function () {
        function UtilityBillpaymentComponent(router, formBuilder, dialogService) {
          _classCallCheck(this, UtilityBillpaymentComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.dialogService = dialogService;
          this.utilityBillpayment = 'Utility Bill Payment';
          this.testing = [{
            value: 'Demo',
            viewValue: 'Demo 1'
          }, {
            value: 'Demo',
            viewValue: 'Demo 2'
          }, {
            value: 'Demo',
            viewValue: 'Demo 3'
          }];
        }

        _createClass(UtilityBillpaymentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.utilityBillPaymentForm = this.formBuilder.group({
              billerName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              payFromAcc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              billDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              billNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "goToServiceScreens",
          value: function goToServiceScreens() {
            this.router.navigateByUrl('/others/services');
          }
        }, {
          key: "goToAuthenticate",
          value: function goToAuthenticate() {
            this.dialogService.authenticationDialog();
          }
        }]);

        return UtilityBillpaymentComponent;
      }();

      UtilityBillpaymentComponent.ɵfac = function UtilityBillpaymentComponent_Factory(t) {
        return new (t || UtilityBillpaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]));
      };

      UtilityBillpaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UtilityBillpaymentComponent,
        selectors: [["app-utility-billpayment"]],
        decls: 69,
        vars: 5,
        consts: [[1, "fullcard"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "80%"], [1, "chequecard"], [2, "padding", "2%"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "backIcon", 3, "click"], [1, "card-title"], [1, "full-width", 2, "padding", "0% 3% 3% 2%"], [3, "formGroup"], ["fxLayout", "column", "fxLayoutGap", "5%", "fxLayoutAlign", "space-between none"], ["fxLayout", "row wrap", 1, "flex-container", "stretch"], ["fxFlex", "33%", "fxFlex.xs", "100%"], [1, "totalAmount"], [1, "inputCard"], ["matInput", "", "formControlName", "billerName", "type", "text", "name", "billerName", 1, "full-width", "inputClass"], ["matInput", "", "formControlName", "amount", "type", "text", "name", "amount", 1, "full-width", "inputClass"], ["fxFlex", "34%", "fxFlex.xs", "100%"], ["matInput", "", "formControlName", "payFromAcc", "type", "text", "name", "payFromAcc", 1, "full-width", "inputClass"], ["layout", "row"], ["flex", "", 1, "line"], [1, "inputCard", "heightAdjust"], ["matInput", "", "formControlName", "billDate", 1, "inputWidth", "inputClass", 3, "matDatepicker"], ["matSuffix", "", 2, "margin-left", "15%", 3, "for"], ["picker", ""], ["formControlName", "billNumber", 1, "full-width", 2, "background-color", "#f9fafb"], [3, "value", 4, "ngFor", "ngForOf"], ["rows", "5", "cols", "6", 1, "full-width", "inputClass"], ["fxFlex", "30%", "fxFlex.xs", "100%", 2, "padding", "0% 1%"], ["mat-flat-button", "", 1, "buttonCancel", "full-width", 3, "click"], ["fxFlex", "100%", "fxFlex.xs", "100%", 2, "padding", "0% 2%"], ["mat-flat-button", "", 1, "buttonNext", "full-width", 3, "disabled", "click"], [3, "value"]],
        template: function UtilityBillpaymentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UtilityBillpaymentComponent_Template_mat_icon_click_7_listener() {
              return ctx.goToServiceScreens();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "keyboard_backspace");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Utility Bill Payment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Biller Name*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Amount*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Pay from Account* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Bill Date*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "mat-datepicker-toggle", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "mat-datepicker", null, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Bill Number* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, UtilityBillpaymentComponent_mat_option_53_Template, 2, 2, "mat-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Remark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "textarea", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "                                                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UtilityBillpaymentComponent_Template_button_click_64_listener() {
              return ctx.goToServiceScreens();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "CANCEL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UtilityBillpaymentComponent_Template_button_click_67_listener() {
              return ctx.goToAuthenticate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "CONTINUE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.utilityBillPaymentForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testing);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.utilityBillPaymentForm.get("billerName").valid || !ctx.utilityBillPaymentForm.get("amount").valid || !ctx.utilityBillPaymentForm.get("payFromAcc").valid || !ctx.utilityBillPaymentForm.get("billDate").valid || !ctx.utilityBillPaymentForm.get("billNumber").valid);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]],
        styles: [".fullcard[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  height: 110%;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  cursor: pointer;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  height: auto;\n  border-radius: 10px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 20px;\n}\n\n.outer-Div[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.content-Div[_ngcontent-%COMP%] {\n  padding: 6%;\n}\n\n.paddingright[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.closeDrawerIcon[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n\n.title-Class[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n.spaceDiv[_ngcontent-%COMP%] {\n  padding-right: 3%;\n}\n\n.spaceUserImage[_ngcontent-%COMP%] {\n  padding-left: 2%;\n  width: 12%;\n}\n\n.user-name-Div[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: bolder;\n  font-family: sans-serif;\n  margin-top: 10px;\n  margin-bottom: -10px;\n}\n\n.title-Font[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  color: #000000;\n  width: 90%;\n  font-weight: bold;\n}\n\n.token-Div[_ngcontent-%COMP%] {\n  font-size: x-small;\n  color: #7e84a3;\n  font-family: sans-serif;\n}\n\n.token-id-class[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  background-color: #fafafa;\n  border-radius: 4px;\n}\n\n.width100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.details-Div[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.mat-expansion-panel-spacing[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.icon[_ngcontent-%COMP%] {\n  float: right;\n  color: #000000;\n  font-weight: 700;\n}\n\n.btnConfirmClass[_ngcontent-%COMP%] {\n  background-color: #456efe;\n  color: white;\n  border-radius: 20px;\n  width: 120px;\n  font-family: sans-serif;\n  font-size: smaller;\n}\n\n.btnDiv[_ngcontent-%COMP%] {\n  padding-top: 15%;\n}\n\n.btnCancelClass[_ngcontent-%COMP%] {\n  background-color: #f8f8f8 !important;\n  color: #5d5d5d !important;\n  border-radius: 20px !important;\n  width: 120px !important;\n  font-family: sans-serif !important;\n  font-size: smaller !important;\n}\n\n.width50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 97%;\n  align-self: center;\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-top-color: #f5f5f5;\n  margin-left: 2%;\n}\n\n.buttonNext[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  font-family: sans-serif;\n  background-color: #1BCD9D;\n  color: #FFFFFF;\n}\n\n.buttonCancel[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border-color: white;\n  background-color: #E3E3E3;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.inputCard[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  box-sizing: border-box;\n}\n\n.heightAdjust[_ngcontent-%COMP%] {\n  padding: 6px;\n}\n\n.inputClass[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.pb1[_ngcontent-%COMP%] {\n  padding-bottom: 1%;\n}\n\n.operationTypeClass[_ngcontent-%COMP%] {\n  color: #A1A1A1;\n  margin: auto;\n}\n\n.quantityClass[_ngcontent-%COMP%] {\n  color: #000000;\n  margin: auto;\n  font-weight: 500;\n}\n\n.paddingclass[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n\n.totalAmount[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #7e84a3;\n  padding-left: 10px;\n}\n\n.inputCard[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 2px 1px -1px #f8f8f8, 0 1px 0 #f8f8f8, 0 5px 8px 0 #e9e9e9;\n}\n\n.chargeDetailsTbl[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  border-collapse: collapse;\n  border-radius: 10px;\n}\n\n.chargeDetailsDiv[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.thchargeDetailsTbl[_ngcontent-%COMP%] {\n  background-color: #f2f0f0;\n  color: #968e8e;\n  font-family: sans-serif;\n  text-align: center;\n  border-bottom-style: none;\n}\n\n.tbchargeDetailsTbl[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  font-size: x-small;\n  font-family: sans-serif;\n  text-align: center;\n  color: #726868;\n}\n\n.titleHead[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.inputWidth[_ngcontent-%COMP%] {\n  width: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXRpbGl0eS1iaWxscGF5bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0FBSUo7O0FBREU7RUFDSSx5QkFBQTtBQUlOOztBQUZFO0VBQ0ksV0FBQTtBQUtOOztBQUZFO0VBQ0ksbUJBQUE7QUFLTjs7QUFGRTtFQUNJLG1CQUFBO0FBS047O0FBRkU7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUtOOztBQUZFO0VBQ0ksaUJBQUE7QUFLTjs7QUFIRTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQU1OOztBQUhFO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQU1OOztBQUhFO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBTU47O0FBRkU7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQUtOOztBQUhFO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBTU47O0FBSkU7RUFDSSxXQUFBO0FBT047O0FBTEU7RUFDSSx5QkFBQTtBQVFOOztBQU5FO0VBQ0ksc0JBQUE7QUFTTjs7QUFORTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFTTjs7QUFQRTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFVTjs7QUFSRTtFQUNJLGdCQUFBO0FBV047O0FBVEU7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7QUFZTjs7QUFURTtFQUNJLFVBQUE7QUFZTjs7QUFWRTtFQUNJLFVBQUE7RUFDRCxrQkFBQTtFQUNDLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFhTjs7QUFYRTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFjTjs7QUFYRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQWNKOztBQVpFO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQWVOOztBQWJFO0VBQ0UsWUFBQTtBQWdCSjs7QUFaRTtFQUNJLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFlTjs7QUFaRTtFQUNJLGFBQUE7QUFlTjs7QUFaRTtFQUNJLGtCQUFBO0FBZU47O0FBWkU7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQWVOOztBQVpFO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQWVOOztBQVpFO0VBQ0ksV0FBQTtBQWVOOztBQVpFO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFlTjs7QUFaRTtFQUNJLHdFQUFBO0FBZU47O0FBVkU7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFhTjs7QUFWRTtFQUNJLG9CQUFBO0FBYU47O0FBVkU7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFhTjs7QUFWRTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWFOOztBQVZFO0VBQ0ksb0JBQUE7QUFhTjs7QUFYRTtFQUNJLFlBQUE7QUFjTiIsImZpbGUiOiJ1dGlsaXR5LWJpbGxwYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxjYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDExMCU7XHJcbn1cclxuLmJhY2tJY29ue1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2hlcXVlY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uY2FyZC10aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbiAgLm91dGVyLURpdntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICB9XHJcbiAgLmNvbnRlbnQtRGl2e1xyXG4gICAgICBwYWRkaW5nOiA2JTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRpbmdyaWdodHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlRHJhd2VySWNvbntcclxuICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlLUNsYXNze1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuc3BhY2VEaXZ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG4gIH1cclxuICAuc3BhY2VVc2VySW1hZ2V7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICAgIHdpZHRoOiAxMiU7XHJcbiAgfVxyXG4gIFxyXG4gIC51c2VyLW5hbWUtRGl2e1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1Gb250e1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICBcclxuICAudG9rZW4tRGl2e1xyXG4gICAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICAgIGNvbG9yOiAjN2U4NGEzO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLnRva2VuLWlkLWNsYXNze1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIC53aWR0aDEwMHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5kZXRhaWxzLURpdntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICB9XHJcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtc3BhY2luZ3tcclxuICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmljb257XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5idG5Db25maXJtQ2xhc3N7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTZlZmU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gIH1cclxuICAuYnRuRGl2e1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTUlO1xyXG4gIH1cclxuICAuYnRuQ2FuY2VsQ2xhc3N7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZjggIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICM1ZDVkNWQgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiBzbWFsbGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC53aWR0aDUwe1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICAubGluZXtcclxuICAgICAgd2lkdGg6IDk3JTtcclxuICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcclxuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci10b3AtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICB9XHJcbiAgLmJ1dHRvbk5leHR7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUJDRDlEO1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICB9XHJcblxyXG4gIC5idXR0b25DYW5jZWx7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNFM0UzO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmlucHV0Q2FyZHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLmhlaWdodEFkanVzdHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuaW5wdXRDbGFzc3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpmb2N1c3tcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnBiMXtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gIH1cclxuICBcclxuICAub3BlcmF0aW9uVHlwZUNsYXNze1xyXG4gICAgICBjb2xvcjogI0ExQTFBMTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAucXVhbnRpdHlDbGFzc3tcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRpbmdjbGFzc3tcclxuICAgICAgcGFkZGluZzogMiU7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3RhbEFtb3VudHtcclxuICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgICBjb2xvcjogIzdlODRhMztcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuaW5wdXRDYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggI2Y4ZjhmOCxcclxuICAgICAgICAgICAgICAgICAgMCAxcHggMCAjZjhmOGY4LFxyXG4gICAgICAgICAgICAgICAgICAwIDVweCA4cHggMCAjZTllOWU5O1xyXG4gIH1cclxuICBcclxuICAuY2hhcmdlRGV0YWlsc1RibHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNoYXJnZURldGFpbHNEaXZ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAudGhjaGFyZ2VEZXRhaWxzVGJse1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMGYwIDtcclxuICAgICAgY29sb3I6ICM5NjhlOGU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC50YmNoYXJnZURldGFpbHNUYmx7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICM3MjY4Njg7XHJcbiAgfVxyXG5cclxuICAudGl0bGVIZWFke1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLmlucHV0V2lkdGh7XHJcbiAgICAgIHdpZHRoOiAxODBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilityBillpaymentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-utility-billpayment',
            templateUrl: './utility-billpayment.component.html',
            styleUrls: ['./utility-billpayment.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "c0ho":
    /*!***********************************************************!*\
      !*** ./src/app/shared/directives/onlynumber.directive.ts ***!
      \***********************************************************/

    /*! exports provided: OnlynumberDirective */

    /***/
    function c0ho(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnlynumberDirective", function () {
        return OnlynumberDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OnlynumberDirective = /*#__PURE__*/function () {
        function OnlynumberDirective(el) {
          _classCallCheck(this, OnlynumberDirective);

          this.el = el;
          this.navigationKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'Home', 'End', 'ArrowLeft', 'ArrowRight', 'Clear', 'Copy', 'Paste'];
          this.inputElement = el.nativeElement;
        }

        _createClass(OnlynumberDirective, [{
          key: "onKeyDown",
          value: function onKeyDown(e) {
            if (this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
            e.key === 'a' && e.ctrlKey === true || // Allow: Ctrl+A
            e.key === 'c' && e.ctrlKey === true || // Allow: Ctrl+C
            e.key === 'v' && e.ctrlKey === true || // Allow: Ctrl+V
            e.key === 'x' && e.ctrlKey === true || // Allow: Ctrl+X
            e.key === 'a' && e.metaKey === true || // Allow: Cmd+A (Mac)
            e.key === 'c' && e.metaKey === true || // Allow: Cmd+C (Mac)
            e.key === 'v' && e.metaKey === true || // Allow: Cmd+V (Mac)
            e.key === 'x' && e.metaKey === true // Allow: Cmd+X (Mac)
            ) {
                // let it happen, don't do anything
                return;
              } // Ensure that it is a number and stop the keypress


            if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
              e.preventDefault();
            }
          }
        }, {
          key: "onPaste",
          value: function onPaste(event) {
            event.preventDefault();
            var pastedInput = event.clipboardData.getData('text/plain').replace(/\D/g, ''); // get a digit-only string

            document.execCommand('insertText', false, pastedInput);
          }
        }, {
          key: "onDrop",
          value: function onDrop(event) {
            event.preventDefault();
            var textData = event.dataTransfer.getData('text').replace(/\D/g, '');
            this.inputElement.focus();
            document.execCommand('insertText', false, textData);
          }
        }]);

        return OnlynumberDirective;
      }();

      OnlynumberDirective.ɵfac = function OnlynumberDirective_Factory(t) {
        return new (t || OnlynumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      OnlynumberDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: OnlynumberDirective,
        selectors: [["", "appOnlynumber", ""]],
        hostBindings: function OnlynumberDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function OnlynumberDirective_keydown_HostBindingHandler($event) {
              return ctx.onKeyDown($event);
            })("paste", function OnlynumberDirective_paste_HostBindingHandler($event) {
              return ctx.onPaste($event);
            })("drop", function OnlynumberDirective_drop_HostBindingHandler($event) {
              return ctx.onDrop($event);
            });
          }
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlynumberDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appOnlynumber]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
          }],
          onPaste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['paste', ['$event']]
          }],
          onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "d44F":
    /*!*********************************************************************************!*\
      !*** ./src/app/views/others/cheque-withdrawal1/cheque-withdrawal1.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ChequeWithdrawal1Component */

    /***/
    function d44F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChequeWithdrawal1Component", function () {
        return ChequeWithdrawal1Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function ChequeWithdrawal1Component_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeWithdrawal1Component_div_14_Template_mat_card_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.goToService(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "payments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-hint", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var folder_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", folder_r1.flag ? "borderCard" : "inputCard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r1.title);
        }
      }

      var ChequeWithdrawal1Component = /*#__PURE__*/function () {
        function ChequeWithdrawal1Component(router) {
          _classCallCheck(this, ChequeWithdrawal1Component);

          this.router = router;
          this.flag = true;
          this["continue"] = "CONTINUE";
          this.active = {};
          this.folders = [{
            title: "Cash Withdrawal",
            id: 1,
            flag: false
          }, {
            title: "Cash Deposit",
            id: 2,
            flag: false
          }, {
            title: "Cheque Deposit",
            id: 3,
            flag: false
          }, {
            title: "Cheque Withdrawal",
            id: 4,
            flag: false
          }, {
            title: "Forex Transaction",
            id: 5,
            flag: false
          }, {
            title: "Loan Payment",
            id: 6,
            flag: false
          }, {
            title: "Deposit Top Up",
            id: 7,
            flag: false
          }, {
            title: "Utility Bill Payment",
            id: 8,
            flag: false
          }];
        }

        _createClass(ChequeWithdrawal1Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "trackByFn",
          value: function trackByFn(index, item) {
            return index; //or item.id
          }
        }, {
          key: "goToService",
          value: function goToService(index) {
            if (this.active !== index) {
              this.active = index; // console.log(this.active);

              this.folders.forEach(function (item) {
                item.flag = false;
              });
            }

            this.folders[index].flag = !this.folders[index].flag;
          }
        }, {
          key: "contiueButton",
          value: function contiueButton() {
            console.log(this.active);
            var enableList = this.folders.filter(function (x) {
              return x.flag === true;
            });
            console.log(enableList);
            if (enableList.length > 0) return true;else return false;
          }
        }, {
          key: "goToOperation",
          value: function goToOperation() {
            this.router.navigateByUrl('/others/master');
          }
        }]);

        return ChequeWithdrawal1Component;
      }();

      ChequeWithdrawal1Component.ɵfac = function ChequeWithdrawal1Component_Factory(t) {
        return new (t || ChequeWithdrawal1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      ChequeWithdrawal1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChequeWithdrawal1Component,
        selectors: [["app-cheque-withdrawal1"]],
        decls: 21,
        vars: 3,
        consts: [[1, "fullcard"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "72%"], [1, "chequecard"], [1, "card-title"], ["fxLayout", "row wrap"], [1, "totalAmount"], [1, "arrows"], [1, "full-width"], ["fxLayout", "row wrap", "fxLayoutGap", "40px ", "class", "gapBtw", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", "fxLayoutGap", "30px", "fxLayoutAlign", "center center"], ["mat-flat-button", "", 3, "ngClass", "click"], ["fxLayout", "row wrap", "fxLayoutGap", "40px ", 1, "gapBtw"], [3, "ngClass", "click"], [2, "margin-top", "15%"], [1, "insideCard"], [1, "serviceIcons"], [1, "insideTitle"]],
        template: function ChequeWithdrawal1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-hint", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Select one and continue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-card", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChequeWithdrawal1Component_div_14_Template, 10, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeWithdrawal1Component_Template_button_click_18_listener() {
              return ctx.goToOperation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.folders);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.contiueButton() ? "buttonActive" : "buttonPassive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx["continue"]);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatHint"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
        styles: [".fullcard[_ngcontent-%COMP%] {\n  background-color: #ECF3F2;\n  width: 100%;\n  height: 110%;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  height: auto;\n  border-radius: 20px;\n}\n\n.gapBtw[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 20px;\n  padding-left: 10px;\n}\n\n.totalAmount[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #7e84a3;\n  padding-top: 8px;\n  padding-left: 10px;\n}\n\n.insideTitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #7e84a3;\n  padding-left: 40px;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n  padding: 15px;\n  overflow: auto;\n}\n\n.insideCard[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 130px;\n  background-color: #FE6700;\n  border-radius: 20px;\n  margin-left: 15%;\n}\n\n.inputCard[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  box-sizing: border-box;\n  width: 210px;\n  height: 280px;\n  cursor: pointer;\n}\n\n.borderCard[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  box-sizing: border-box;\n  width: 210px;\n  height: 280px;\n  border-style: solid;\n  border-width: thin;\n  border-color: #456EFE;\n  cursor: pointer;\n}\n\n.inputCard[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 2px 1px -1px #f8f8f8, 0 1px 0 #f8f8f8, 0 5px 8px 0 #e9e9e9;\n}\n\n.buttonActive[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  width: 750px;\n  background-color: #1BCD9D;\n  color: #FFFFFF;\n}\n\n.buttonPassive[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  width: 750px;\n  background-color: #E3E3E3;\n  color: #FFFFFF;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 10px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #E3E3E3;\n  border-radius: 10px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #E3E3E3;\n}\n\n.arrows[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 8%;\n  border-radius: 20px;\n  margin-left: 90%;\n  margin-top: -4%;\n}\n\n.serviceIcons[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 36px;\n  padding: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2hlcXVlLXdpdGhkcmF3YWwxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUtKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFJSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSx3RUFBQTtBQUVKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQSxVQUFBOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUVFLFVBQUE7O0FBQ0E7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUUsV0FBQTs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRSxvQkFBQTs7QUFDQTtFQUNFLG1CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFESiIsImZpbGUiOiJjaGVxdWUtd2l0aGRyYXdhbDEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbGNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGM0YyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDExMCU7XHJcbn1cclxuLmNoZXF1ZWNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBcclxufVxyXG4uZ2FwQnR3e1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4udG90YWxBbW91bnR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzdlODRhMztcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmluc2lkZVRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM3ZTg0YTM7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbn1cclxuXHJcblxyXG4uZnVsbC13aWR0aHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi8vIC5pbnNpZGVEaXZ7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbi8vIH1cclxuXHJcbi5pbnNpZGVDYXJke1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRTY3MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxufVxyXG5cclxuLmlucHV0Q2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIFxyXG59XHJcbi5ib3JkZXJDYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMjEwcHg7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgIGJvcmRlci1jb2xvcjogIzQ1NkVGRTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW5wdXRDYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4ICNmOGY4ZjgsXHJcbiAgICAgICAgICAgICAgICAwIDFweCAwICNmOGY4ZjgsXHJcbiAgICAgICAgICAgICAgICAwIDVweCA4cHggMCAjZTllOWU5O1xyXG59XHJcbi5idXR0b25BY3RpdmV7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFCQ0Q5RDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5idXR0b25QYXNzaXZle1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiA3NTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0UzRTM7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLyogd2lkdGggKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRyYWNrICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IGdyZXk7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgIFxyXG4gIC8qIEhhbmRsZSAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI0UzRTNFMzsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNFM0UzRTM7IFxyXG4gIH1cclxuICAuYXJyb3dze1xyXG4gICAgaGVpZ2h0OjE1cHg7XHJcbiAgICB3aWR0aDogOCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IC00JTtcclxuICB9XHJcbi8vICAgLmFycm93SWNvbnN7XHJcbiAgIFxyXG4vLyAgICAgY29sb3I6IGJsdWU7XHJcbi8vICAgfVxyXG4uc2VydmljZUljb25ze1xyXG4gICAgY29sb3I6I0ZGRkZGRiA7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBwYWRkaW5nOiAyNnB4O1xyXG5cclxufVxyXG5cclxuXHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChequeWithdrawal1Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cheque-withdrawal1',
            templateUrl: './cheque-withdrawal1.component.html',
            styleUrls: ['./cheque-withdrawal1.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jsQJ":
    /*!*************************************************************************!*\
      !*** ./src/app/views/others/cheque-deposit/cheque-deposit.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ChequeDepositComponent */

    /***/
    function jsQJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChequeDepositComponent", function () {
        return ChequeDepositComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/Dialog/dialog.service */
      "LP5l");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _otp_verify_otp_verify_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../otp-verify/otp-verify.component */
      "zAir");
      /* harmony import */


      var app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/shared/models/otp.model */
      "V4gq");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function ChequeDepositComponent_mat_icon_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeDepositComponent_mat_icon_15_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.goToServiceScreens();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "keyboard_backspace");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChequeDepositComponent_div_26_input_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 42);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function ChequeDepositComponent_div_26_mat_select_5_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeDepositComponent_div_26_mat_select_5_mat_option_1_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var type_r27 = ctx.$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r28.custAccountNumber(type_r27);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r27.accountType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r27.accountType);
        }
      }

      function ChequeDepositComponent_div_26_mat_select_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ChequeDepositComponent_div_26_mat_select_5_Template_mat_select_selectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r30.getAccountType($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChequeDepositComponent_div_26_mat_select_5_mat_option_1_Template, 2, 2, "mat-option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.accounttypeArray);
        }
      }

      function ChequeDepositComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChequeDepositComponent_div_26_input_4_Template, 1, 1, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChequeDepositComponent_div_26_mat_select_5_Template, 2, 1, "mat-select", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.phoneNumber && !ctx_r1.accountDropdown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.phoneNumber && ctx_r1.accountDropdown);
        }
      }

      function ChequeDepositComponent_div_27_mat_hint_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Account Balance : ", ctx_r32.curr, "", ctx_r32.formatAmount(ctx_r32.accountBal), "");
        }
      }

      function ChequeDepositComponent_div_27_mat_hint_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Holder Name : ", ctx_r33.userName, "");
        }
      }

      function ChequeDepositComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account Number*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChequeDepositComponent_div_27_Template_input_change_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.fetchByAccountNum(ctx_r34.chequedepositForm.get("accountNumber").value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChequeDepositComponent_div_27_mat_hint_5_Template, 2, 2, "mat-hint", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChequeDepositComponent_div_27_mat_hint_7_Template, 2, 2, "mat-hint", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.showAccountNum);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.showAccountNum);
        }
      }

      function ChequeDepositComponent_div_28_input_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 53);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function ChequeDepositComponent_div_28_mat_select_5_mat_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var id_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", id_r41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](id_r41);
        }
      }

      function ChequeDepositComponent_div_28_mat_select_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ChequeDepositComponent_div_28_mat_select_5_Template_mat_select_selectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r42.fetchByAccountNum($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChequeDepositComponent_div_28_mat_select_5_mat_option_3_Template, 2, 2, "mat-option", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r37.accountNoList);
        }
      }

      function ChequeDepositComponent_div_28_mat_hint_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Account Balance :", ctx_r38.curr, " ", ctx_r38.formatAmount(ctx_r38.accountBal), "");
        }
      }

      function ChequeDepositComponent_div_28_mat_hint_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Holder Name :", ctx_r39.userName, "");
        }
      }

      function ChequeDepositComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account Number*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChequeDepositComponent_div_28_input_4_Template, 1, 1, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChequeDepositComponent_div_28_mat_select_5_Template, 4, 1, "mat-select", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChequeDepositComponent_div_28_mat_hint_6_Template, 2, 2, "mat-hint", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChequeDepositComponent_div_28_mat_hint_8_Template, 2, 2, "mat-hint", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.flag1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.flag1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.hideDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.hideDetails);
        }
      }

      function ChequeDepositComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Account Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function ChequeDepositComponent_input_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 58);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function ChequeDepositComponent_input_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 58);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function ChequeDepositComponent_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Account Branch is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChequeDepositComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag ", ctx_r8.isedit ? ctx_r8.accountCurrencyImage(ctx_r8.chequedepositForm.controls["accountCurrency"].value) : ctx_r8.currencyImage, "");
        }
      }

      function ChequeDepositComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag ", !ctx_r9.isedit ? ctx_r9.accountCurrencyImage(ctx_r9.chequedepositForm.controls["accountCurrency"].value) : ctx_r9.currencyImage, "");
        }
      }

      function ChequeDepositComponent_input_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 59);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function ChequeDepositComponent_input_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 59);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function ChequeDepositComponent_div_51_input_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 62);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function ChequeDepositComponent_div_51_mat_select_9_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeDepositComponent_div_51_mat_select_9_mat_option_1_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

            var country_r47 = ctx.$implicit;

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r49.onCountryChange(country_r47);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r47 = ctx.$implicit;

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r47.currencyCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r47.currencyCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag currency-flag-", ctx_r46.addCurrencyImage(country_r47.currencyCode), " alignImage");
        }
      }

      function ChequeDepositComponent_div_51_mat_select_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChequeDepositComponent_div_51_mat_select_9_mat_option_1_Template, 6, 5, "mat-option", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r45.isedit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r45.countryValues);
        }
      }

      function ChequeDepositComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transaction Currency* ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChequeDepositComponent_div_51_input_8_Template, 1, 1, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChequeDepositComponent_div_51_mat_select_9_Template, 2, 2, "mat-select", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag ", ctx_r12.currencyImage, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r12.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.phoneNumber);
        }
      }

      function ChequeDepositComponent_div_52_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeDepositComponent_div_52_mat_option_9_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var country_r52 = ctx.$implicit;

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r54.onCountryChange(country_r52);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r52 = ctx.$implicit;

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r52.currencyCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r52.currencyCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag currency-flag-", ctx_r51.addCurrencyImage(country_r52.currencyCode), " alignImage");
        }
      }

      function ChequeDepositComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transaction Currency* ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChequeDepositComponent_div_52_mat_option_9_Template, 6, 5, "mat-option", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("currency-flag ", ctx_r13.currencyImage, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.countryValues);
        }
      }

      function ChequeDepositComponent_div_53_input_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 71);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true);
        }
      }

      function ChequeDepositComponent_div_53_input_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 72, 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChequeDepositComponent_div_53_input_5_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r60.transAmount = $event;
          })("keyup", function ChequeDepositComponent_div_53_input_5_Template_input_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r62.OnInput($event);
          })("focus", function ChequeDepositComponent_div_53_input_5_Template_input_focus_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r63.clicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r57.transAmount)("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, ctx_r57.transAmt, "1."))("readonly", ctx_r57.isedit);
        }
      }

      function ChequeDepositComponent_div_53_mat_error_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount must be greater than zero ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChequeDepositComponent_div_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transaction Amount*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChequeDepositComponent_div_53_input_4_Template, 1, 1, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChequeDepositComponent_div_53_input_5_Template, 3, 6, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChequeDepositComponent_div_53_mat_error_6_Template, 2, 0, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.chequedepositForm.get("transactionAmount").errors == null ? null : ctx_r14.chequedepositForm.get("transactionAmount").errors.min);
        }
      }

      function ChequeDepositComponent_div_54_mat_error_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount must be greater than zero ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChequeDepositComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transaction Amount*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 74, 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChequeDepositComponent_div_54_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r66.transAmount = $event;
          })("keyup", function ChequeDepositComponent_div_54_Template_input_keyup_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r68.OnInput($event);
          })("focus", function ChequeDepositComponent_div_54_Template_input_focus_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r69.clicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChequeDepositComponent_div_54_mat_error_7_Template, 2, 0, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r15.transAmount)("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, ctx_r15.transAmt, "1."));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.chequedepositForm.get("transactionAmount").errors == null ? null : ctx_r15.chequedepositForm.get("transactionAmount").errors.min);
        }
      }

      function ChequeDepositComponent_input_59_Template(rf, ctx) {
        if (rf & 1) {
          var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ChequeDepositComponent_input_59_Template_input_keypress_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r70.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChequeDepositComponent_input_60_Template(rf, ctx) {
        if (rf & 1) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ChequeDepositComponent_input_60_Template_input_keypress_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r72.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChequeDepositComponent_mat_error_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cheque Number is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChequeDepositComponent_button_86_Template(rf, ctx) {
        if (rf & 1) {
          var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeDepositComponent_button_86_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r74.goToServiceScreens();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CANCEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ChequeDepositComponent_div_87_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeDepositComponent_div_87_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r76.onSaveofchequeDeposit(ctx_r76.chequedepositForm.value, ctx_r76.ifQRvariable);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "GENERATE TOKEN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r20.enableContinue || !ctx_r20.chequedepositForm.get("transactionCurrency").valid || !ctx_r20.chequedepositForm.get("transactionAmount").valid || !ctx_r20.chequedepositForm.get("accountCurrency").valid || !ctx_r20.chequedepositForm.get("accountNumber").valid || !ctx_r20.chequedepositForm.get("accountType").valid || !ctx_r20.chequedepositForm.get("chequeNumber").valid || !ctx_r20.chequedepositForm.get("totalChargeAmount").valid || !ctx_r20.chequedepositForm.get("totalTransactionAmount").valid);
        }
      }

      function ChequeDepositComponent_div_88_Template(rf, ctx) {
        if (rf & 1) {
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeDepositComponent_div_88_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r78.getOTP(ctx_r78.chequedepositForm.value, ctx_r78.ifQRvariable);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CONTINUE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r21.enableContinue || !ctx_r21.chequedepositForm.get("transactionCurrency").valid || !ctx_r21.chequedepositForm.get("transactionAmount").valid || !ctx_r21.chequedepositForm.get("accountCurrency").valid || !ctx_r21.chequedepositForm.get("accountNumber").valid || !ctx_r21.chequedepositForm.get("accountType").valid || !ctx_r21.chequedepositForm.get("chequeNumber").valid || !ctx_r21.chequedepositForm.get("totalChargeAmount").valid || !ctx_r21.chequedepositForm.get("totalTransactionAmount").valid);
        }
      }

      var ChequeDepositComponent = /*#__PURE__*/function () {
        function ChequeDepositComponent(router, formBuilder, dialogService, apiService, dialog, cdr, ls, snack, changeDef) {
          _classCallCheck(this, ChequeDepositComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.dialogService = dialogService;
          this.apiService = apiService;
          this.dialog = dialog;
          this.cdr = cdr;
          this.ls = ls;
          this.snack = snack;
          this.changeDef = changeDef;
          this.titleName = 'Cheque Deposit';
          this.accType = ['Savings', 'Deposit'];
          this.customerName = ['Jane Smith', 'John Smith'];
          this.productCode = "CQD";
          this.tokenOrigin = "Kiosk";
          this.denomCodeArray = [{
            key: 'count2000',
            value: 2000
          }, {
            key: 'count500',
            value: 500
          }, {
            key: 'count200',
            value: 200
          }, {
            key: 'count100',
            value: 100
          }, {
            key: 'count50',
            value: 50
          }, {
            key: 'count20',
            value: 20
          }, {
            key: 'count10',
            value: 10
          }, {
            key: 'count1',
            value: 1
          }]; // @Input() title : any;
          // countryFormControl = new FormControl();

          this.defaultValue = {
            name: 'Deutschland',
            alpha2Code: 'DE',
            alpha3Code: 'DEU',
            numericCode: '276',
            callingCode: '+49'
          };
          this.accounttypeArray = [];
          this.idList = [];
          this.tokenObjects = new app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["TokenObjects"]();
          this.isedit = true;
          this.enableContinue = true;
          this.currencyImage = "";
          this.ifQRvariable = false; // accountNoList: any[];

          this.accountNoList = [];
          this.showAccountNum = true;
          this.showAccoutType = true;
          this.oTpModel = new app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_10__["otpModel"]();
          this.accountDropdown = false;
          this.flag1 = false;
          this.hideDetails = false;
        }

        _createClass(ChequeDepositComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.phoneNumber = localStorage.getItem("phonenumFromLogin");
            this.appointmentId = this.ls.getItem("TransactionType");
            this.transBranch = localStorage.getItem("TRANSACTIONBRANCH");
            this.custValidation = localStorage.getItem("customerValidation");
            this.custNameFromLogin = localStorage.getItem("FromLogin");

            if (this.custValidation == "New Customer") {
              this.showAccountNum = false;
              this.showAccoutType = false;
            }

            if (this.custNameFromLogin != null) {
              this.showAccountNum = false;
            }

            this.qrData = JSON.parse(JSON.parse(localStorage.getItem('scannerData')));
            console.log("QRData", this.qrData);
            this.chequedepositForm = this.formBuilder.group({
              transactionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              chequeNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              customerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              accountType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              totalAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              holderName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              accountCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              totalChargeAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              totalTransactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(.1)]],
              accountBalance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              productCode: ['CQD', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              tokenOrigin: ['Kiosk', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              // audit
              createdBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              createdTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              modifiedBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              modifiedTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              recordStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              authStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              version: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              accountBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
            console.log(this.chequedepositForm.value);

            if (this.phoneNumber && this.custNameFromLogin == null && this.appointmentId == null) {
              this.ifQRvariable = false;
              this.gettingallTansactionDetails(this.phoneNumber);
            } // else{


            if (this.qrData != null) {
              this.ifQRvariable = true;
              console.log("Account", this.qrData.accountId);
              this.chequedepositForm.controls.holderName.setValue(this.qrData.holderName);
              this.chequedepositForm.controls.accountType.setValue(this.qrData.accountType);
              this.chequedepositForm.controls.accountNumber.setValue(this.qrData.accountId);
              this.getChargeDetails(this.qrData.accountId, '');
              this.chequedepositForm.controls.transactionAmount.setValue(this.qrData.transactionAmount);
              this.chequedepositForm.controls.accountCurrency.setValue(this.qrData.accountCurrency);
              this.chequedepositForm.controls.transactionCurrency.setValue(this.qrData.transactionCurrency);
              this.accountBal = this.qrData.accountBalance;
              this.customerID = this.qrData.customerId;
              this.currencyImage = 'currency-flag-' + this.qrData.accountCurrency.toLowerCase();
              this.currencyImage = 'currency-flag-' + this.qrData.transactionCurrency.toLowerCase();

              if (this.qrData.transactionBranch != null && this.qrData.transactionBranch != '') {
                this.chequedepositForm.controls.transactionBranch.setValue(this.qrData.transactionBranch);
              } else {
                this.chequedepositForm.controls.transactionBranch.setValue('Kasturi Nagar');
              }

              this.getAccountBranch();
            }

            this.getCountrynameValues();
            this.getAccountBranch();
            this.gettransactionBranch("account_branch");

            if (this.appointmentId.data.appointmentId) {
              this.cashWithdrawlData();
            }
          }
        }, {
          key: "fetchByAccountNum",
          value: function fetchByAccountNum(accNum) {
            var _this25 = this;

            this.chequedepositForm.controls.transactionAmount.reset();
            this.chequedepositForm.controls.totalTransactionAmount.setValue(this.chequedepositForm.controls.totalChargeAmount.value);
            this.chequedepositForm.controls.chequeNumber.reset();
            console.log("Account Numebr", accNum);
            this.apiService.fetchByaccNum(accNum).subscribe(function (res) {
              console.log('Account Number Rsp', res);

              _this25.getChargeDetails(accNum, '');

              _this25.userName = res.accHolderName;
              _this25.accountBal = res.accBalance;
              _this25.custmerID = res.customerId;
              _this25.accountNumber = res.accountId;
              _this25.accountCurrency = res.accountCurrency;
              _this25.curr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["getCurrencySymbol"])(res.currency, "narrow");

              _this25.chequedepositForm.controls.accountType.setValue(res.accountType);

              _this25.chequedepositForm.controls.accountCurrency.setValue(res.currency);

              _this25.chequedepositForm.controls.accountBranch.setValue(res.accountBranch);

              _this25.chequedepositForm.controls.holderName.setValue(_this25.userName);

              _this25.currencyImage = 'currency-flag-' + res.currency.toLowerCase();
              _this25.currencyImage = 'currency-flag-' + res.currency.toLowerCase();

              _this25.getCountrynameValues();

              _this25.chequedepositForm.controls.transactionCurrency.setValue(res.currency);

              _this25.custAmountBal(accNum);

              _this25.chequedepositForm.controls.transactionBranch.setValue('Kasturi Nagar');

              _this25.apiService.fetchByaccDeatilsoncustId(res.customerId).subscribe(function (resp) {
                _this25.phonenum = resp[0].phoneNumber;
                localStorage.setItem('otpPhoneNum', _this25.phonenum);
              });
            });
          }
        }, {
          key: "getOTP",
          value: function getOTP(formData, type, cdForm) {
            var _this26 = this;

            this.chequedepositValues = formData;
            this.chequedepositype = type;
            this.chequedepositform = cdForm;
            this.oTpModel.source = 'customer';
            this.oTpModel.source_key = 'mobile';
            this.oTpModel.source_value = this.phonenum;
            var amount = 50000;
            var transamountwithoutcomma = this.chequedepositValues.transactionAmount.replace(/,/g, "");
            console.log(transamountwithoutcomma);

            if (transamountwithoutcomma > amount) {
              this.apiService.getOtp(this.oTpModel).subscribe(function (otpResp) {
                if (otpResp) {
                  _this26.openDialogOTP(_this26.phonenum);

                  _this26.snack.open("An OTP has been sent to the Registered Mobile Number.", "", {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                  });
                }
              });
            } else {
              this.getOTPforSave(this.chequedepositValues, this.chequedepositype, this.chequedepositform);
            }
          }
        }, {
          key: "openDialogOTP",
          value: function openDialogOTP(numbr) {
            var _this27 = this;

            var dialogRef = this.dialog.open(_otp_verify_otp_verify_component__WEBPACK_IMPORTED_MODULE_9__["OtpVerifyComponent"], {
              data: {
                number: numbr,
                type: "numbr"
              },
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (submit) {
              if (submit) {
                _this27.getOTPforSave(_this27.chequedepositValues, _this27.chequedepositype, _this27.chequedepositform);
              }
            });
          }
        }, {
          key: "getOTPforSave",
          value: function getOTPforSave(formData, type, cdForm) {
            var _this28 = this;

            formData.transactionBranch = this.transBranch;

            if (this.custValidation == "New Customer") {
              console.log("customer", this.custmerID);
              this.accountNum = formData.accountNumber;
              formData.customerId = this.custmerID ? this.custmerID : 0;
              formData.accountType = formData.accountType;
              formData.accountNumber = this.accountNumber;
              formData.holderName = formData.holderName;
              formData.accountCurrency = formData.accountCurrency;
              formData.transactionCurrency = formData.transactionCurrency;
              formData.transactionAmount = formData.transactionAmount.replace(/,/g, '');
              formData.productCode = this.productCode;
              formData.tokenOrigin = this.tokenOrigin;
              formData.accountBalance = this.accountBal;
            }

            formData.tokenBranch = "KN";

            if (this.appointmentId && this.appointmentId.data) {
              formData.transactionId = this.appointmentId.data.transactionId;
              formData.transactionStatus = this.appointmentId.data.transactionStatus;
            }

            formData.customerId = this.custmerID ? this.custmerID : 0;
            formData.accountType = formData.accountType;
            formData.accountNumber = this.accountNumber;
            formData.holderName = formData.holderName;
            formData.accountCurrency = formData.accountCurrency;
            formData.transactionCurrency = formData.transactionCurrency;
            formData.transactionAmount = formData.transactionAmount.replace(/,/g, '');
            formData.productCode = this.productCode;
            formData.tokenOrigin = this.tokenOrigin;
            formData.accountBalance = this.accountBal;
            this.apiService.saveofCashDeposit(formData).subscribe(function (cashDepositResp) {
              console.log("Response Success", cashDepositResp);
              _this28.cashDepositResponse = cashDepositResp;
              _this28.tokenNum = _this28.cashDepositResponse.tokenNumber;
              _this28.estimatedTime = _this28.cashDepositResponse.estimatedWaitTime;
              localStorage.setItem("tokenNumer", _this28.tokenNum);
              localStorage.setItem("estimatedTiming", _this28.estimatedTime);
              _this28.enableContinue = false;

              if (_this28.cashDepositResponse) {
                _this28.dialogService.tokenGenerationDialog();
              }
            });
          }
        }, {
          key: "_keyPress",
          value: function _keyPress(event) {
            var pattern = /[0-9 a-z A-Z]/;
            var inputChar = String.fromCharCode(event.charCode);

            if (!pattern.test(inputChar)) {
              event.preventDefault();
            }
          }
        }, {
          key: "gettransactionBranch",
          value: function gettransactionBranch(key) {
            var _this29 = this;

            this.apiService.getTransactionBranch(key).subscribe(function (branches) {
              console.log('branches :: ', branches);
              _this29.trasactionBranches = branches;
            });
          }
        }, {
          key: "getAccountBranch",
          value: function getAccountBranch() {
            var _this30 = this;

            this.apiService.getBranchforKiosk().subscribe(function (data) {
              _this30.branchData = data;
              console.log(_this30.branchData);
              data.forEach(function (element, index) {
                _this30.branch = data[index].branchName;
                console.log(_this30.branch); // this.chequedepositForm.controls.accountBranch.setValue(this.branch);
              });
            });
          }
        }, {
          key: "getCountrynameValues",
          value: function getCountrynameValues() {
            var _this31 = this;

            this.apiService.getCountryValues().subscribe(function (allCountryValues) {
              _this31.countryValues = allCountryValues;
              console.log(_this31.countryValues);
            });
          }
        }, {
          key: "onCountrySelected",
          value: function onCountrySelected($event) {
            console.log($event);
          }
        }, {
          key: "goToServiceScreens",
          value: function goToServiceScreens() {
            if (this.appointmentId) {
              if (this.appointmentId.data.appointmentId) {
                this.router.navigateByUrl('/sessions/login');
                localStorage.removeItem("FromLogin");
                localStorage.removeItem("TransactionType");
                localStorage.removeItem("customerId");
                localStorage.removeItem("phonenumFromLogin");
                localStorage.removeItem("customerValidation");
                localStorage.removeItem("otpPhoneNum");
                localStorage.removeItem("AccountBal");
                localStorage.removeItem("AccountNumber");
                localStorage.removeItem("ProductCode");
                localStorage.removeItem("tokenNumer");
                localStorage.removeItem("estimatedTiming");
                localStorage.removeItem("userId");
                localStorage.removeItem("scannerData");
                localStorage.removeItem("custholderName");
              }
            } else {
              this.router.navigateByUrl('/others/services');
            }
          }
        }, {
          key: "goToAuthenticate",
          value: function goToAuthenticate() {
            this.dialogService.authenticationDialog();
          }
        }, {
          key: "gettingallTansactionDetails",
          value: function gettingallTansactionDetails(phoneNumber) {
            var _this32 = this;

            this.phoneNumber = localStorage.getItem("phonenumFromLogin");
            this.apiService.gettingTransactionDetails(this.phoneNumber).subscribe(function (allTransactionResp) {
              console.log("All Transaction Details", allTransactionResp);
              _this32.userName = (allTransactionResp.firstName ? allTransactionResp.firstName + ' ' : ' ') + (allTransactionResp.middleName ? allTransactionResp.middleName + ' ' : ' ') + (allTransactionResp.lastName ? allTransactionResp.lastName : ' ');

              _this32.chequedepositForm.controls.holderName.setValue(_this32.userName);

              _this32.custID = allTransactionResp.customerId; // this.setBalance(allTransactionResp.custAccount);

              _this32.custAccountData = allTransactionResp.custAccount;
              _this32.accounttypeArray = _toConsumableArray(_this32.custAccountData).filter(function (_ref3, index) {
                var accountType = _ref3.accountType;
                return !_toConsumableArray(_this32.custAccountData).map(function (obj) {
                  return obj.accountType;
                }).includes(accountType, index + 1);
              });

              for (var j = 0; j < _this32.custAccountData.length; j++) {
                if (_this32.custAccountData[j].status == 'APPROVED') {
                  _this32.accountNoList.push(_this32.custAccountData[j]);
                }
              }

              if (_this32.custAccountData && _this32.accountNoList.length <= 1) {
                _this32.accountDropdown = false;
                _this32.hideDetails = true;
                var accTyp = allTransactionResp.custAccount[0].accountType;

                _this32.chequedepositForm.controls.accountType.setValue(accTyp);

                _this32.custAccountNumber(_this32.accountNoList[0]);
              } else {
                _this32.accountDropdown = true;
                _this32.hideDetails = true;
                var _accTyp3 = allTransactionResp.custAccount[0].accountType;

                _this32.chequedepositForm.controls.accountType.setValue(_accTyp3);

                _this32.custAccountNumber(allTransactionResp.custAccount[0]);
              }
            });
          }
        }, {
          key: "getAccountType",
          value: function getAccountType(event) {
            this.chequedepositForm.controls.transactionAmount.reset();
            this.chequedepositForm.controls.totalTransactionAmount.setValue(this.chequedepositForm.controls.totalChargeAmount.value);
            this.chequedepositForm.controls.chequeNumber.reset();
            this.accountNoList = [];
            this.isedit = false;
            this.accountNum1 = _toConsumableArray(this.custAccountData).filter(function (accounNum, index) {
              return accounNum.accountType == event;
            });
            console.log(this.accountNum1); // this.accountNoList=this.accountNum1
            // this.accountNoList=this.accountNum1.map((acccount)=>
            // {
            //   return acccount.accountId
            // })

            for (var i = 0; i < this.custAccountData.length; i++) {
              if (this.custAccountData[i].status == 'APPROVED' && this.custAccountData[i].accountType == event) {
                this.accountNoList.push(this.custAccountData[i].accountId);
              }
            }

            console.log(this.accountNoList);

            if (this.accountNoList.length <= 1) {
              this.flag1 = false;
              this.chequedepositForm.controls.accountNumber.setValue(this.accountNoList[0]);
              this.getData(this.accountNoList[0]);
            } else {
              this.flag1 = true;
              this.getData(this.accountNoList[0]);
            }

            this.getChargeDetails(this.accountNoList[0], '');
          }
        }, {
          key: "custAccountNumber",
          value: function custAccountNumber(custype) {
            this.isedit = false;
            this.idList = _toConsumableArray(this.custAccountData).filter(function (item) {
              return item.accountType === custype.accountType;
            });
            var defaultId = this.idList ? this.idList[0] : null;
            this.accountNoList = [];

            for (var i = 0; i < this.idList.length; i++) {
              if (this.idList[i].status == 'APPROVED') {
                this.accountNoList.push(this.idList[i].accountId);
              }
            }

            console.log(this.accountNoList);

            if (this.accountNoList.length <= 1) {
              // this.cashwithdrawForm.controls.accountNumber.patchValue(this.accountNoList[0]);
              this.flag1 = false; // this.getData(this.accountNoList[0]);

              this.chequedepositForm.controls.accountNumber.setValue(this.accountNoList[0]);
            } else {
              this.chequedepositForm.controls.accountNumber.setValue(this.accountNoList[0]);
              this.flag1 = true;
            } //  this.chequedepositForm.controls.accountNumber.setValue(defaultId);


            this.chequedepositForm.controls.accountCurrency.setValue(custype.accountCurrency);
            this.chequedepositForm.controls.accountBranch.setValue(this.branch); //this.chequedepositForm.controls.transactionAmount.setValue(custype.amount);
            //  this.chequedepositForm.controls.accountType.setValue(defaultId);

            this.curr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["getCurrencySymbol"])(custype.accountCurrency, "narrow");
            this.chequedepositForm.controls.transactionCurrency.setValue(custype.accountCurrency);
            this.currencyImage = 'currency-flag-' + custype.accountCurrency.toLowerCase(); //  this.accountBal = this.idList[0].amount;

            console.log(this.accountBal);
            localStorage.setItem("AccountBal", this.accountBal); //  this.chequedepositForm.controls.accountNumber.setValue(this.idList[0].accountId);

            this.custAmountBal(this.accountNoList[0]);
            this.chequedepositForm.controls.accountBranch.setValue(custype.accountBranch);
            this.getChargeDetails(this.accountNoList[0], custype.amount);
          }
        }, {
          key: "getData",
          value: function getData(custNum) {
            this.hideDetails = true;
            console.log(custNum);
            var val = this.accountNum1.filter(function (value) {
              return value.accountId == custNum;
            });
            console.log(val);
            this.idList = _toConsumableArray(this.custAccountData).filter(function (item) {
              return item.accountType === val[0].accountType;
            });
            this.chequedepositForm.controls.accountCurrency.setValue(val[0].accountCurrency);
            this.chequedepositForm.controls.accountBranch.setValue(this.branch);
            this.curr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["getCurrencySymbol"])(val[0].accountCurrency, "narrow");
            this.curr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["getCurrencySymbol"])(val[0].accountCurrency, "narrow");
            this.chequedepositForm.controls.transactionCurrency.setValue(val[0].accountCurrency);
            this.currencyImage = 'currency-flag-' + val[0].accountCurrency.toLowerCase();
            console.log('data :: ', this.idList[0]);
            this.accountBal = this.idList[0].amount;
            localStorage.setItem("AccountBal", this.accountBal);
            this.chequedepositForm.controls.accountNumber.setValue(this.idList[0].accountId);
            this.custAmountBal(this.idList[0].accountId);
            this.chequedepositForm.controls.accountNumber.setValue(val[0].accountId);
            this.chequedepositForm.controls.accountBranch.setValue(val[0].accountBranch);
            this.getChargeDetails(val[0].accountId, '');
          }
        }, {
          key: "custAmountBal",
          value: function custAmountBal(custNum) {
            console.log(custNum);
            var account = this.idList.filter(function (record) {
              if (record.accountId == custNum) {
                return record;
              }
            });
            console.log(account);
            this.accNum = account[0].accountId;
            this.accountBal = account[0].amount;
            this.selectedAccountInfo = account[0];
          }
        }, {
          key: "setBalance",
          value: function setBalance(accountBalance) {
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            this.accountBal = accountBalance[index].currentBalance ? accountBalance[index].currentBalance : null;
          }
        }, {
          key: "onSaveofchequeDeposit",
          value: function onSaveofchequeDeposit(formData, type) {
            var _this33 = this;

            formData.transactionBranch = this.transBranch;
            formData.tokenBranch = "KN";

            if (this.qrData) {
              if (this.qrData.transactionBranch) {
                this.apiService.fetchBranchInfoByBranchName(this.qrData.transactionBranch).subscribe(function (response) {
                  _this33.qrBranchCode = response;
                });
              }
            }

            if (!this.ifQRvariable) {
              console.log("chequedepositData", formData);
              this.accountNum = JSON.stringify(this.selectedAccountInfo.accountId);
              console.log("this.accountNum ", this.accountNum);
              localStorage.setItem("AccountNumber", this.accountNum);
              localStorage.setItem("ProductCode", this.productCode);
              formData.tokenBranch = "KN";
              formData.customerId = this.custID;
              formData.transactionCurrency = formData.transactionCurrency;
              formData.transactionAmount = formData.transactionAmount.replace(/,/g, '');
              formData.accountNumber = this.selectedAccountInfo.accountId;
              formData.accountType = formData.accountType;
              formData.productCode = this.productCode;
              formData.tokenOrigin = this.tokenOrigin;
              formData.accountBalance = this.accountBal;
            } else {
              console.log(formData);
              formData.customerId = this.custID;
              formData.accountType = formData.accountType;
              formData.accountNumber = formData.accountNumber;
              formData.holderName = formData.holderName;
              formData.accountCurrency = formData.accountCurrency;
              formData.transactionCurrency = formData.transactionCurrency;
              formData.transactionAmount = formData.transactionAmount;
              formData.totalAmount = formData.totalAmount;
              formData.productCode = this.productCode;
              formData.tokenOrigin = this.tokenOrigin;
              formData.accountBalance = this.accountBal;
              formData.transactionId = formData.transactionId;
              formData.appointmentId = formData.appointmentId;
            }

            if (this.qrData) {
              if (this.qrData.transactionBranch) {
                formData.tokenBranch = this.qrBranchCode.transactionBranch;
              }
            }

            if (this.appointmentId && this.appointmentId.data) {
              formData.transactionId = this.appointmentId.data.transactionId;
              formData.transactionStatus = this.appointmentId.data.transactionStatus;
            }

            console.log(formData.transactionId, formData.transactionStatus);
            formData.totalAmount = formData.totalAmount.replace(/,/g, '');
            this.apiService.saveofCashDeposit(formData).subscribe(function (chequeDepositResp) {
              console.log(" Response Success", chequeDepositResp);
              _this33.chequeDepositResponse = chequeDepositResp;
              _this33.tokenNum = _this33.chequeDepositResponse.tokenNumber;
              _this33.estimatedTime = _this33.chequeDepositResponse.estimatedWaitTime;
              localStorage.setItem("tokenNumer", _this33.tokenNum);
              localStorage.setItem("estimatedTiming", _this33.estimatedTime);
              _this33.enableContinue = false;

              if (_this33.chequeDepositResponse) {
                _this33.dialogService.tokenGenerationDialog();
              }
            }); //   this.tokenObjects.productCode = this.productCode;
            //   this.tokenObjects.accountNumber = formData.accountNumber;
            //   if(this.tokenObjects.productCode !== null || this.tokenObjects.accountNumber !==null){
            //   this.apiService.generateToken(this.tokenObjects).subscribe(tokenResp=>{
            //     console.log( "Token Generated", tokenResp);
            //     this.tokResponse = tokenResp;
            //     if(this.tokResponse){
            //       this.tokenNum = this.tokResponse.tokenNumber;
            //       this.estimatedTime = this.tokResponse.estimatedWaitTime;
            //       localStorage.setItem("tokenNumer",this.tokenNum);
            //       localStorage.setItem("estimatedTiming",this.estimatedTime);
            //       formData.tokenNo = this.tokenNum;
            //       formData.customerId = this.ls.getItem("customerId");
            //       this.apiService.saveofCashDeposit(formData).subscribe(chequeDepositResp=>{
            //         console.log(" Response Success",chequeDepositResp);
            //         this.chequeDepositResponse = chequeDepositResp;
            //         this.enableContinue=false;
            //         this.dialogService.tokenGenerationDialog();
            //       });
            //     }
            //   });
            // }
          }
        }, {
          key: "omit_number",
          value: function omit_number(event) {
            var key;
            key = event.charCode;
            return key > 47 && key < 58;
          }
        }, {
          key: "totalAmountValue",
          value: function totalAmountValue(cdForm) {
            this.a = this.chequedepositForm.value.transactionAmount;
            this.a = this.a.replace(/\,/g, ''); // 1125, but a string, so convert it to number

            this.a = parseInt(this.a, 10);
            this.chequedepositForm.value.totalAmount = (cdForm.value.count2000 ? cdForm.value.count2000 * 2000 : 0) + (cdForm.value.count500 ? cdForm.value.count500 * 500 : 0) + (cdForm.value.count200 ? cdForm.value.count200 * 200 : 0) + (cdForm.value.count100 ? cdForm.value.count100 * 100 : 0) + (cdForm.value.count50 ? cdForm.value.count50 * 50 : 0) + (cdForm.value.count20 ? cdForm.value.count20 * 20 : 0) + (cdForm.value.count10 ? cdForm.value.count10 * 10 : 0) + (cdForm.value.count1 ? cdForm.value.count1 * 1 : 0);
            console.log(this.chequedepositForm.value.totalAmount);
            console.log(this.chequedepositForm.value.transactionAmount);
            this.transamount = this.chequedepositForm.value.transactionAmount;
            this.totalAmount = this.chequedepositForm.value.totalAmount;
            this.chequedepositForm.controls.totalAmount.setValue(this.chequedepositForm.value.totalAmount);
          }
        }, {
          key: "OnInput",
          value: function OnInput(event) {
            this.transAmt = event.target.value; // comma separator using changeDetector

            var savedInput = this.transAmount;
            var lastCharIsPoint = false;

            if (savedInput.charAt(savedInput.length - 1) === '.') {
              lastCharIsPoint = true;
            }

            var num = savedInput.replace(/[^0-9.]/g, '');
            this.transAmt = Number(num) || '';
            this.transAmount = this.transAmt.toLocaleString('en-IN');

            if (lastCharIsPoint) {
              this.transAmount = this.transAmount.concat('.');
            }

            this.changeDef.detectChanges();
            this.balance = localStorage.getItem("AccountBal");

            if (parseFloat(this.balance) < parseFloat(this.transAmt)) {
              console.log("Bigger");
              this.snack.open("Transaction Amount should not exceed than Account Balance", 'OK', {
                duration: 2000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
              this.enableContinue = false;
            } else {
              this.enableContinue = true;
            }

            this.totalTransAmount = Number(this.transAmt) + Number(this.chargeDetails ? this.chargeDetails[0].amount : '');
            this.chequedepositForm.controls.totalTransactionAmount.setValue(this.totalTransAmount);
            this.cdr.markForCheck();
            this.cdr.detectChanges();
          }
        }, {
          key: "getChargeDetails",
          value: function getChargeDetails(accountId, amount) {
            var _this34 = this;

            this.apiService.fetchChargeDetails(accountId).subscribe(function (resp) {
              console.log(resp);
              _this34.chargeDetails = resp;

              _this34.chequedepositForm.controls.totalChargeAmount.setValue(_this34.chargeDetails ? _this34.chargeDetails[0].amount : '');
            });

            if (this.cashData) {
              setTimeout(function () {
                _this34.totalTransAmount = Number(_this34.cashData.transactionAmount) + Number(_this34.chargeDetails ? _this34.chargeDetails[0].amount : '');

                _this34.chequedepositForm.controls.totalTransactionAmount.setValue(_this34.totalTransAmount);
              }, 1000);
              this.cdr.markForCheck();
              this.cdr.detectChanges();
            } else {
              console.log(this.chargeDetails);
              amount = 0;
              console.log(amount);
              setTimeout(function () {
                _this34.totalTransAmount = Number(amount) + Number(_this34.chargeDetails ? _this34.chargeDetails[0].amount : '');
                console.log(_this34.totalTransAmount);

                _this34.chequedepositForm.controls.totalTransactionAmount.setValue(_this34.totalTransAmount);
              }, 1000);
              this.cdr.markForCheck();
              this.cdr.detectChanges();
            } // console.log(this.totalTransAmount);

          }
        }, {
          key: "addCurrencyImage",
          value: function addCurrencyImage(currency) {
            return currency.toLowerCase();
          }
        }, {
          key: "clicked",
          value: function clicked(event) {
            console.log(event);
          }
        }, {
          key: "onCountryChange",
          value: function onCountryChange(country) {
            var currency = country.currencyCode;
            this.currencyImage = 'currency-flag-' + currency.toLowerCase();
          }
        }, {
          key: "accountCurrencyImage",
          value: function accountCurrencyImage(accountCurrency) {
            return accountCurrency ? 'currency-flag-' + accountCurrency.toLowerCase() : '';
          }
        }, {
          key: "formatAmount",
          value: function formatAmount(amount) {
            if (amount) {
              return amount && amount.toString().split('.')[0].length > 3 ? amount.toString().substring(0, amount.toString().split('.')[0].length - 3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + amount.toString().substring(amount.toString().split('.')[0].length - 3) : amount.toString();
            }
          }
        }, {
          key: "cashWithdrawlData",
          value: function cashWithdrawlData() {
            var _this35 = this;

            this.apiService.getAppointmentId(this.appointmentId.data.appointmentId).subscribe(function (resp) {
              console.log(resp);
              _this35.cashData = resp.data;
              _this35.custID = resp.data.customerId;
              _this35.ifQRvariable = true;

              _this35.chequedepositForm.controls.accountType.setValue(resp.data.accountType);

              _this35.chequedepositForm.controls.accountBranch.setValue(resp.data.accountBranch);

              _this35.chequedepositForm.controls.accountNumber.setValue(resp.data.accountNumber);

              _this35.chequedepositForm.controls.chequeNumber.setValue(resp.data.chequeNumber);

              _this35.getChargeDetails(resp.data.accountNumber, resp.data.transactionAmount);

              _this35.chequedepositForm.controls.accountCurrency.setValue(resp.data.accountCurrency);

              _this35.chequedepositForm.controls.transactionCurrency.setValue(resp.data.transactionCurrency);

              _this35.chequedepositForm.controls.transactionAmount.setValue(resp.data.transactionAmount);

              _this35.currencyImage = 'currency-flag-' + resp.data.accountCurrency.toLowerCase();
              _this35.currencyImage = 'currency-flag-' + resp.data.transactionCurrency.toLowerCase();
            });
          }
        }]);

        return ChequeDepositComponent;
      }();

      ChequeDepositComponent.ɵfac = function ChequeDepositComponent_Factory(t) {
        return new (t || ChequeDepositComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      ChequeDepositComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChequeDepositComponent,
        selectors: [["app-cheque-deposit"]],
        decls: 89,
        vars: 28,
        consts: [[1, "fullcard"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "100%"], [1, "h1"], [2, "color", "grey", "padding-right", "4px"], [2, "padding-left", "4px"], [1, "chequecard"], [2, "padding", "2%"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["class", "backIcon", 3, "click", 4, "ngIf"], [1, "card-title"], [1, "full-width", 2, "padding", "0% 0% 3% 2%"], [3, "formGroup"], ["fxLayout", "column", "fxLayoutGap", "3%", "fxLayoutAlign", "space-between none"], ["fxLayout", "row wrap", 1, "flex-container", "stretch"], ["fxFlex", "25%", "fxFlex.xs", "100%", 4, "ngIf"], ["fxFlex", "25%", "fxFlex.xs", "100%"], [1, "accountBranch"], [1, "inputCard"], ["matInput", "", "type", "text", "class", "full-width", "formControlName", "accountBranch", 3, "readonly", 4, "ngIf"], [4, "ngIf"], [1, "totalAmount"], ["fxLayout", "row wrap", 1, "full-width"], ["fxFlex", "25%"], [3, "class", 4, "ngIf"], ["fxFlex", "75%"], ["matInput", "", "type", "text", "class", "full-width", "style", "font-size:110%", "formControlName", "accountCurrency", 3, "readonly", 4, "ngIf"], ["matInput", "", "type", "text", "maxlength", "6", "class", "full-width", "formControlName", "chequeNumber", 3, "keypress", 4, "ngIf"], ["matInput", "", "readonly", "", "formControlName", "totalChargeAmount", 1, "full-width"], ["matInput", "", "type", "text", "readonly", "", "onlyNumber", "", "formControlName", "totalTransactionAmount"], [1, "tooltip"], ["width", "80%", 3, "src"], [1, "tooltiptext"], [1, "totalAmount", "textcolor", 2, "margin-top", "10px", "margin-bottom", "6px"], [1, "totalAmount", "textcolor"], [1, "totalAmount", "textcolor", 2, "margin-right", "10px"], ["fxFlex", "30%", "fxFlex.xs", "100%", 1, "paddingCls"], ["mat-flat-button", "", "class", "buttonCancel full-width", 3, "click", 4, "ngIf"], ["fxFlex", "70%", "fxFlex.xs", "100%", "class", "paddingCls", 4, "ngIf"], [1, "backIcon", 3, "click"], ["matInput", "", "type", "text", "class", "full-width", "formControlName", "accountType", 3, "readonly", 4, "ngIf"], ["formControlName", "accountType", "style", "background-color: #f9fafb;", "placeholder", "Select Account Type", 3, "selectionChange", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "accountType", 1, "full-width", 3, "readonly"], ["formControlName", "accountType", "placeholder", "Select Account Type", 2, "background-color", "#f9fafb", 3, "selectionChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["matInput", "", "type", "text", "formControlName", "accountNumber", 1, "full-width", 3, "change"], ["class", "totalAmount", 4, "ngIf"], ["class", "totalAmount", 3, "readonly", 4, "ngIf"], [1, "totalAmount", 3, "readonly"], ["matInput", "", "type", "text", "class", "full-width", "formControlName", "accountNumber", 3, "readonly", 4, "ngIf"], ["formControlName", "accountNumber", "style", "background-color: #f9fafb;", 3, "selectionChange", 4, "ngIf"], ["class", "totalAmount", "formControlName", "holderName", 3, "readonly", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "accountNumber", 1, "full-width", 3, "readonly"], ["formControlName", "accountNumber", 2, "background-color", "#f9fafb", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "holderName", 1, "totalAmount", 3, "readonly"], ["matInput", "", "type", "text", "formControlName", "accountBranch", 1, "full-width", 3, "readonly"], ["matInput", "", "type", "text", "formControlName", "accountCurrency", 1, "full-width", 2, "font-size", "110%", 3, "readonly"], ["matInput", "", "type", "text", "class", "full-width", "formControlName", "transactionCurrency", 3, "readonly", 4, "ngIf"], ["formControlName", "transactionCurrency", "placeholder", "Select Transaction Currency", "id", "testSelect", "style", "background-color: #f9fafb;", 3, "disabled", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "transactionCurrency", 1, "full-width", 3, "readonly"], ["formControlName", "transactionCurrency", "placeholder", "Select Transaction Currency", "id", "testSelect", 2, "background-color", "#f9fafb", 3, "disabled"], ["style", "font-size:110%", 3, "value", "click", 4, "ngFor", "ngForOf"], [2, "font-size", "110%", 3, "value", "click"], ["fxFlex", "15%"], ["fxFlex", "85%"], ["formControlName", "transactionCurrency", "placeholder", "Select Transaction Currency", "id", "testSelect", 2, "background-color", "#f9fafb"], ["matInput", "", "type", "text", "class", "full-width", "formControlName", "transactionAmount", 3, "readonly", 4, "ngIf"], ["matInput", "", "class", "full-width", "formControlName", "transactionAmount", 3, "ngModel", "value", "readonly", "ngModelChange", "keyup", "focus", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "transactionAmount", 1, "full-width", 3, "readonly"], ["matInput", "", "formControlName", "transactionAmount", 1, "full-width", 3, "ngModel", "value", "readonly", "ngModelChange", "keyup", "focus"], ["myRef", ""], ["matInput", "", "formControlName", "transactionAmount", 1, "full-width", 3, "ngModel", "value", "ngModelChange", "keyup", "focus"], ["matInput", "", "type", "text", "maxlength", "6", "formControlName", "chequeNumber", 1, "full-width", 3, "keypress"], ["mat-flat-button", "", 1, "buttonCancel", "full-width", 3, "click"], ["fxFlex", "70%", "fxFlex.xs", "100%", 1, "paddingCls"], ["mat-flat-button", "", 1, "buttonNext", "full-width", 3, "disabled", "click"]],
        template: function ChequeDepositComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cheque Deposit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-title", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChequeDepositComponent_mat_icon_15_Template, 2, 0, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ChequeDepositComponent_div_26_Template, 6, 2, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ChequeDepositComponent_div_27_Template, 8, 2, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ChequeDepositComponent_div_28_Template, 9, 4, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ChequeDepositComponent_div_29_Template, 5, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-hint", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Account Branch*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ChequeDepositComponent_input_34_Template, 1, 1, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ChequeDepositComponent_input_35_Template, 1, 1, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ChequeDepositComponent_mat_error_36_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-hint", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Account Currency*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ChequeDepositComponent_div_43_Template, 1, 3, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ChequeDepositComponent_div_44_Template, 1, 3, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ChequeDepositComponent_input_46_Template, 1, 1, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ChequeDepositComponent_input_47_Template, 1, 1, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ChequeDepositComponent_div_51_Template, 10, 5, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ChequeDepositComponent_div_52_Template, 10, 4, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ChequeDepositComponent_div_53_Template, 7, 3, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ChequeDepositComponent_div_54_Template, 8, 6, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-hint", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Cheque Number*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ChequeDepositComponent_input_59_Template, 1, 0, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ChequeDepositComponent_input_60_Template, 1, 0, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ChequeDepositComponent_mat_error_61_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-hint", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Total Charge Amount*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-hint", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Total Transaction Amount*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, ChequeDepositComponent_button_86_Template, 2, 0, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, ChequeDepositComponent_div_87_Template, 3, 1, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, ChequeDepositComponent_div_88_Template, 3, 1, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.chequedepositForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chequedepositForm.get("accountBranch").touched && !ctx.chequedepositForm.get("accountBranch").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ifQRvariable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ifQRvariable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chequedepositForm.get("chequeNumber").touched && !ctx.chequedepositForm.get("chequeNumber").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/info.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Transaction Amount:", ctx.chequedepositForm.get("transactionAmount").value, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Charge Amount:", ctx.chequedepositForm.get("totalChargeAmount").value, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Transaction Amount:", ctx.chequedepositForm.get("totalTransactionAmount").value, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]],
        styles: [".fullcard[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  height: 110%;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-top: 8px;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  height: auto;\n  border-radius: 10px;\n}\n\n.paddingCls[_ngcontent-%COMP%] {\n  padding: 0% 2%;\n}\n\n.h1[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding-top: 24px;\n  padding-left: 1%;\n}\n\n#buttonDiv[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-top: 2%;\n}\n\n#denominationDiv[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 24px;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin-top: 50px;\n  margin-left: 26px;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  min-width: 200px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  background-color: #fe6700;\n  color: #fff;\n  text-align: start;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  top: -49px;\n  left: 130%;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  right: 100%;\n  margin-top: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent #fe6700 transparent transparent;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.totalAmount.textcolor[_ngcontent-%COMP%] {\n  color: white;\n  font-size: smaller;\n  color: #304156;\n  padding-left: 10px;\n}\n\n.alignImage[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  float: right;\n}\n\n.outer-Div[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.content-Div[_ngcontent-%COMP%] {\n  padding: 6%;\n}\n\n.paddingright[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.closeDrawerIcon[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n\n.title-Class[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n.spaceDiv[_ngcontent-%COMP%] {\n  padding-right: 3%;\n}\n\n.spaceUserImage[_ngcontent-%COMP%] {\n  padding-left: 2%;\n  width: 12%;\n}\n\n.user-name-Div[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: bolder;\n  font-family: sans-serif;\n  margin-top: 10px;\n  margin-bottom: -10px;\n}\n\n.title-Font[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  color: #000000;\n  width: 90%;\n  font-weight: bold;\n}\n\n.token-Div[_ngcontent-%COMP%] {\n  font-size: x-small;\n  color: #7e84a3;\n  font-family: sans-serif;\n}\n\n.accountBranch[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #7e84a3;\n  padding-left: 10px;\n}\n\n.token-id-class[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  background-color: #fafafa;\n  border-radius: 4px;\n}\n\n.width100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.details-Div[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.mat-expansion-panel-spacing[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.icon[_ngcontent-%COMP%] {\n  float: right;\n  color: #000000;\n  font-weight: 700;\n}\n\n.btnConfirmClass[_ngcontent-%COMP%] {\n  background-color: #456efe;\n  color: white;\n  border-radius: 20px;\n  width: 120px;\n  font-family: sans-serif;\n  font-size: smaller;\n}\n\n.btnDiv[_ngcontent-%COMP%] {\n  padding-top: 15%;\n}\n\n.btnCancelClass[_ngcontent-%COMP%] {\n  background-color: #f8f8f8 !important;\n  color: #5d5d5d !important;\n  border-radius: 20px !important;\n  width: 120px !important;\n  font-family: sans-serif !important;\n  font-size: smaller !important;\n}\n\n.width50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 940px;\n  align-self: center;\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-top-color: #f5f5f5;\n  margin-left: 2%;\n}\n\n.buttonNext[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-color: #1BCD9D;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.buttonCancel[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border-color: white;\n  background-color: #E3E3E3;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.inputCard[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  box-sizing: border-box;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n  background-color: #F9FAFB;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.pb1[_ngcontent-%COMP%] {\n  padding-bottom: 1%;\n}\n\n.operationTypeClass[_ngcontent-%COMP%] {\n  color: #A1A1A1;\n  margin: auto;\n}\n\n.quantityClass[_ngcontent-%COMP%] {\n  color: #000000;\n  margin: auto;\n  font-weight: 500;\n}\n\n.paddingclass[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n\n.totalAmount[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #7e84a3;\n  padding-left: 10px;\n}\n\n.inputCard[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 2px 1px -1px #f8f8f8, 0 1px 0 #f8f8f8, 0 5px 8px 0 #e9e9e9;\n}\n\n.chargeDetailsTbl[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  border-collapse: collapse;\n  border-radius: 10px;\n}\n\n.chargeDetailsDiv[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.thchargeDetailsTbl[_ngcontent-%COMP%] {\n  background-color: #f2f0f0;\n  color: #968e8e;\n  font-family: sans-serif;\n  text-align: center;\n  border-bottom-style: none;\n}\n\n.tbchargeDetailsTbl[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  font-size: x-small;\n  font-family: sans-serif;\n  text-align: center;\n  color: #726868;\n}\n\n.titleHead[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n[_nghost-%COMP%]     mat-select-country > mat-form-field {\n  width: 100% !important;\n}\n\n[_nghost-%COMP%]     mat-select-country > mat-form-field > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-suffix > mat-icon > svg {\n  margin-bottom: -8px;\n}\n\n[_nghost-%COMP%]     mat-select-country > mat-form-field > div.mat-form-field-wrapper {\n  padding-bottom: 0.8rem;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2hlcXVlLWRlcG9zaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSkE7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7QUFPSjs7QUFMQTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFTSjs7QUFOQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBU0o7O0FBTkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlEQUFBO0FBU0o7O0FBUEU7RUFDRSxtQkFBQTtBQVVKOztBQVJFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBV0o7O0FBUkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFXSjs7QUFSRTtFQUNJLHlCQUFBO0FBV047O0FBVEU7RUFDSSxXQUFBO0FBWU47O0FBVEU7RUFDSSxtQkFBQTtBQVlOOztBQVRFO0VBQ0ksbUJBQUE7QUFZTjs7QUFURTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBWU47O0FBVEU7RUFDSSxpQkFBQTtBQVlOOztBQVZFO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0FBYU47O0FBVkU7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBYU47O0FBVkU7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFhTjs7QUFURTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBWU47O0FBVEU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVlKOztBQVRFO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBWU47O0FBVkU7RUFDSSxXQUFBO0FBYU47O0FBWEU7RUFDSSx5QkFBQTtBQWNOOztBQVpFO0VBQ0ksc0JBQUE7QUFlTjs7QUFaRTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFlTjs7QUFiRTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFnQk47O0FBZEU7RUFDSSxnQkFBQTtBQWlCTjs7QUFmRTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtBQWtCTjs7QUFmRTtFQUNJLFVBQUE7QUFrQk47O0FBaEJFO0VBQ0ksWUFBQTtFQUNELGtCQUFBO0VBQ0MscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQW1CTjs7QUFqQkU7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBb0JOOztBQWpCRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQW9CSjs7QUFsQkU7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0FBcUJOOztBQW5CRTtFQUFPLFNBQUE7RUFBUyxVQUFBO0VBQ2QseUJBQUE7RUFDQSxpQkFBQTtBQXdCSjs7QUF2Qkk7RUFBYSx3QkFBQTtBQTJCakI7O0FBekJFO0VBQ0ksa0JBQUE7QUE0Qk47O0FBekJFO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUE0Qk47O0FBekJFO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQTRCTjs7QUF6QkU7RUFDSSxXQUFBO0FBNEJOOztBQXpCRTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBNEJOOztBQXpCRTtFQUNJLHdFQUFBO0FBNEJOOztBQXZCRTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQTBCTjs7QUF2QkU7RUFDSSxvQkFBQTtBQTBCTjs7QUF2QkU7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUEwQk47O0FBdkJFO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBMEJOOztBQXZCRTtFQUNJLG9CQUFBO0FBMEJOOztBQXRCQTtFQUNJLHNCQUFBO0FBeUJKOztBQXRCQTtFQUNJLG1CQUFBO0FBeUJKOztBQXRCQTtFQUNJLHNCQUFBO0FBeUJKOztBQXZCQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUEwQkY7O0FBeEJBO0VBQ0UsMEJBQUE7QUEyQkYiLCJmaWxlIjoiY2hlcXVlLWRlcG9zaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbGNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTEwJTtcclxufVxyXG4uYmFja0ljb257XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuLmNoZXF1ZWNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnBhZGRpbmdDbHN7XHJcbiAgICBwYWRkaW5nOiAwJSAyJTtcclxufVxyXG4uaDF7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMSU7XHJcbn1cclxuI2J1dHRvbkRpdntcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIG1hcmdpbi10b3A6MiVcclxufVxyXG4jZGVub21pbmF0aW9uRGl2e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4udG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI2cHg7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xyXG4gIH1cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU2NzAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogLTQ5cHg7XHJcbiAgICBsZWZ0OiAxMzAlO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcCAudG9vbHRpcHRleHQ6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZlNjcwMCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIC50b3RhbEFtb3VudC50ZXh0Y29sb3J7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBjb2xvcjogIzMwNDE1NjtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4uYWxpZ25JbWFnZXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiAgLm91dGVyLURpdntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICB9XHJcbiAgLmNvbnRlbnQtRGl2e1xyXG4gICAgICBwYWRkaW5nOiA2JTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRpbmdyaWdodHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlRHJhd2VySWNvbntcclxuICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlLUNsYXNze1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuc3BhY2VEaXZ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG4gIH1cclxuICAuc3BhY2VVc2VySW1hZ2V7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICAgIHdpZHRoOiAxMiU7XHJcbiAgfVxyXG4gIFxyXG4gIC51c2VyLW5hbWUtRGl2e1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZS1Gb250e1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICBcclxuICAudG9rZW4tRGl2e1xyXG4gICAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICAgIGNvbG9yOiAjN2U4NGEzO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5hY2NvdW50QnJhbmNoe1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgY29sb3I6ICM3ZTg0YTM7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b2tlbi1pZC1jbGFzc3tcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICAud2lkdGgxMDB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZGV0YWlscy1EaXZ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgfVxyXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLXNwYWNpbmd7XHJcbiAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29ue1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAuYnRuQ29uZmlybUNsYXNze1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2ZWZlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICB9XHJcbiAgLmJ0bkRpdntcclxuICAgICAgcGFkZGluZy10b3A6IDE1JTtcclxuICB9XHJcbiAgLmJ0bkNhbmNlbENsYXNze1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjNWQ1ZDVkICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGxlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAud2lkdGg1MHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgLmxpbmV7XHJcbiAgICAgIHdpZHRoOiA5NDBweDtcclxuICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcclxuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci10b3AtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICB9XHJcbiAgLmJ1dHRvbk5leHR7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQkNEOUQ7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5idXR0b25DYW5jZWx7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNFM0UzO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmlucHV0Q2FyZHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgaW5wdXQge2JvcmRlcjowO291dGxpbmU6MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUZBRkI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZH1cclxuICAgIGlucHV0OmZvY3VzIHtvdXRsaW5lOm5vbmUhaW1wb3J0YW50O31cclxuICBcclxuICAucGIxe1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcGVyYXRpb25UeXBlQ2xhc3N7XHJcbiAgICAgIGNvbG9yOiAjQTFBMUExO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5xdWFudGl0eUNsYXNze1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAucGFkZGluZ2NsYXNze1xyXG4gICAgICBwYWRkaW5nOiAyJTtcclxuICB9XHJcbiAgXHJcbiAgLnRvdGFsQW1vdW50e1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICAgIGNvbG9yOiAjN2U4NGEzO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dENhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCAjZjhmOGY4LFxyXG4gICAgICAgICAgICAgICAgICAwIDFweCAwICNmOGY4ZjgsXHJcbiAgICAgICAgICAgICAgICAgIDAgNXB4IDhweCAwICNlOWU5ZTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGFyZ2VEZXRhaWxzVGJse1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2hhcmdlRGV0YWlsc0RpdntcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aGNoYXJnZURldGFpbHNUYmx7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYwZjAgO1xyXG4gICAgICBjb2xvcjogIzk2OGU4ZTtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRiY2hhcmdlRGV0YWlsc1RibHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzcyNjg2ODtcclxuICB9XHJcblxyXG4gIC50aXRsZUhlYWR7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbWF0LXNlbGVjdC1jb3VudHJ5ID4gbWF0LWZvcm0tZmllbGR7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbWF0LXNlbGVjdC1jb3VudHJ5ID4gbWF0LWZvcm0tZmllbGQgPiBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciA+IGRpdi5tYXQtZm9ybS1maWVsZC1mbGV4ID4gZGl2Lm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCA+IG1hdC1pY29uID4gc3Zne1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG1hdC1zZWxlY3QtY291bnRyeSA+IG1hdC1mb3JtLWZpZWxkID4gZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44cmVtO1xyXG59XHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChequeDepositComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cheque-deposit',
            templateUrl: './cheque-deposit.component.html',
            styleUrls: ['./cheque-deposit.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "m8nz":
    /*!************************************************!*\
      !*** ./src/app/views/others/others.routing.ts ***!
      \************************************************/

    /*! exports provided: OthersRoutes */

    /***/
    function m8nz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OthersRoutes", function () {
        return OthersRoutes;
      });
      /* harmony import */


      var _app_blank_app_blank_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-blank/app-blank.component */
      "uS30");
      /* harmony import */


      var _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./authenticate/authenticate.component */
      "ucp7");
      /* harmony import */


      var _cash_deposit_cash_deposit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cash-deposit/cash-deposit.component */
      "YmeZ");
      /* harmony import */


      var _cash_withdrawal_cash_withdrawal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cash-withdrawal/cash-withdrawal.component */
      "zf0q");
      /* harmony import */


      var _cheque_deposit_cheque_deposit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cheque-deposit/cheque-deposit.component */
      "jsQJ");
      /* harmony import */


      var _cheque_withdrawal_cheque_withdrawal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cheque-withdrawal/cheque-withdrawal.component */
      "/kYN");
      /* harmony import */


      var _cheque_withdrawal1_cheque_withdrawal1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cheque-withdrawal1/cheque-withdrawal1.component */
      "d44F");
      /* harmony import */


      var _deposit_topup_deposit_topup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./deposit-topup/deposit-topup.component */
      "n9vs");
      /* harmony import */


      var _forex_transaction_forex_transaction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./forex-transaction/forex-transaction.component */
      "DLa6");
      /* harmony import */


      var _loan_payment_loan_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./loan-payment/loan-payment.component */
      "2ama");
      /* harmony import */


      var _select_service_select_service_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./select-service/select-service.component */
      "Vafw");
      /* harmony import */


      var _utility_billpayment_utility_billpayment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./utility-billpayment/utility-billpayment.component */
      "azsi");

      var OthersRoutes = [{
        path: "",
        // component: DashboardComponent,
        children: [{
          path: "blank",
          component: _app_blank_app_blank_component__WEBPACK_IMPORTED_MODULE_0__["AppBlankComponent"]
        }, {
          path: "cheque-withdrawal",
          component: _cheque_withdrawal_cheque_withdrawal_component__WEBPACK_IMPORTED_MODULE_5__["ChequeWithdrawalComponent"]
        }, {
          path: "services",
          component: _select_service_select_service_component__WEBPACK_IMPORTED_MODULE_10__["SelectServiceComponent"]
        }, {
          path: "authenticate",
          component: _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_1__["AuthenticateComponent"]
        }, {
          path: "cash-withdrawal",
          component: _cash_withdrawal_cash_withdrawal_component__WEBPACK_IMPORTED_MODULE_3__["CashWithdrawalComponent"]
        }, {
          path: "cash-deposit",
          component: _cash_deposit_cash_deposit_component__WEBPACK_IMPORTED_MODULE_2__["CashDepositComponent"]
        }, {
          path: "cheque-deposit",
          component: _cheque_deposit_cheque_deposit_component__WEBPACK_IMPORTED_MODULE_4__["ChequeDepositComponent"]
        }, {
          path: "cheque-withdrawal",
          component: _cheque_withdrawal1_cheque_withdrawal1_component__WEBPACK_IMPORTED_MODULE_6__["ChequeWithdrawal1Component"]
        }, {
          path: "forex-transaction",
          component: _forex_transaction_forex_transaction_component__WEBPACK_IMPORTED_MODULE_8__["ForexTransactionComponent"]
        }, {
          path: "loan-payment",
          component: _loan_payment_loan_payment_component__WEBPACK_IMPORTED_MODULE_9__["LoanPaymentComponent"]
        }, {
          path: "deposit-topup",
          component: _deposit_topup_deposit_topup_component__WEBPACK_IMPORTED_MODULE_7__["DepositTopupComponent"]
        }, {
          path: "utility-billpayment",
          component: _utility_billpayment_utility_billpayment_component__WEBPACK_IMPORTED_MODULE_11__["UtilityBillpaymentComponent"]
        }]
      }];
      /***/
    },

    /***/
    "n9vs":
    /*!***********************************************************************!*\
      !*** ./src/app/views/others/deposit-topup/deposit-topup.component.ts ***!
      \***********************************************************************/

    /*! exports provided: DepositTopupComponent */

    /***/
    function n9vs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DepositTopupComponent", function () {
        return DepositTopupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/Dialog/dialog.service */
      "LP5l");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function DepositTopupComponent_mat_option_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var test_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", test_r3.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", test_r3.viewValue, " ");
        }
      }

      function DepositTopupComponent_mat_option_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var test_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", test_r4.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", test_r4.viewValue, " ");
        }
      }

      function DepositTopupComponent_mat_option_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var test_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", test_r5.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", test_r5.viewValue, " ");
        }
      }

      var DepositTopupComponent = /*#__PURE__*/function () {
        function DepositTopupComponent(router, formBuilder, dialogService) {
          _classCallCheck(this, DepositTopupComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.dialogService = dialogService;
          this.depositTopUp = 'Deposit Top Up';
          this.testing = [{
            value: 'Demo',
            viewValue: 'Demo 1'
          }, {
            value: 'Demo',
            viewValue: 'Demo 2'
          }, {
            value: 'Demo',
            viewValue: 'Demo 3'
          }];
        }

        _createClass(DepositTopupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.depositForm = this.formBuilder.group({
              depositAccount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              revisedAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              maturityAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              payFromAccount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              holderName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              topupAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "goToServiceScreens",
          value: function goToServiceScreens() {
            this.router.navigateByUrl('/others/services');
          }
        }, {
          key: "goToAuthenticate",
          value: function goToAuthenticate() {
            this.dialogService.authenticationDialog();
          }
        }]);

        return DepositTopupComponent;
      }();

      DepositTopupComponent.ɵfac = function DepositTopupComponent_Factory(t) {
        return new (t || DepositTopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]));
      };

      DepositTopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DepositTopupComponent,
        selectors: [["app-deposit-topup"]],
        decls: 69,
        vars: 5,
        consts: [[1, "fullcard"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "80%"], [1, "chequecard"], [2, "padding", "2%"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "backIcon", 3, "click"], [1, "card-title"], [1, "full-width", 2, "padding", "0% 3% 3% 2%"], [3, "formGroup"], ["fxLayout", "column", "fxLayoutGap", "5%", "fxLayoutAlign", "space-between none"], ["fxLayout", "row wrap", 1, "flex-container", "stretch"], ["fxFlex", "33%", "fxFlex.xs", "100%"], [1, "totalAmount"], [1, "inputCard"], ["formControlName", "depositAccount", 1, "full-width", 2, "background-color", "#f9fafb"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "revisedAmount", "type", "text", "name", "revisedAmount", 1, "full-width", "inputClass"], ["fxFlex", "34%", "fxFlex.xs", "100%"], ["matInput", "", "formControlName", "maturityAmount", "type", "text", "name", "maturityAmount", 1, "full-width", "inputClass"], ["layout", "row"], ["flex", "", 1, "line"], ["formControlName", "payFromAccount", 1, "full-width", 2, "background-color", "#f9fafb"], ["formControlName", "holderName", 1, "full-width", 2, "background-color", "#f9fafb"], ["matInput", "", "formControlName", "topupAmount", "type", "text", "name", "topupAmount", 1, "full-width", "inputClass"], ["fxFlex", "30%", "fxFlex.xs", "100%", 2, "padding", "0% 1%"], ["mat-flat-button", "", 1, "buttonCancel", "full-width", 3, "click"], ["fxFlex", "70%", "fxFlex.xs", "100%", 2, "padding", "0% 2%"], ["mat-flat-button", "", 1, "buttonNext", "full-width", 3, "disabled", "click"], [3, "value"]],
        template: function DepositTopupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepositTopupComponent_Template_mat_icon_click_7_listener() {
              return ctx.goToServiceScreens();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "keyboard_backspace");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Deposit Top Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Deposit Account* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DepositTopupComponent_mat_option_24_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Account Balance : $12,09470");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Revised Principal Amount*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Revised Maturity Amount* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Pay from Account*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DepositTopupComponent_mat_option_48_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Holder Name* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, DepositTopupComponent_mat_option_54_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Top Up Amount*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepositTopupComponent_Template_button_click_64_listener() {
              return ctx.goToServiceScreens();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "CANCEL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepositTopupComponent_Template_button_click_67_listener() {
              return ctx.goToAuthenticate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "CONTINUE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.depositForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testing);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testing);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testing);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.depositForm.get("depositAccount").valid || !ctx.depositForm.get("revisedAmount").valid || !ctx.depositForm.get("maturityAmount").valid || !ctx.depositForm.get("payFromAccount").valid || !ctx.depositForm.get("holderName").valid || !ctx.depositForm.get("topupAmount").valid);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]],
        styles: [".fullcard[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  height: 110%;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  cursor: pointer;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  height: auto;\n  border-radius: 10px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 24px;\n}\n\n.outer-Div[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.content-Div[_ngcontent-%COMP%] {\n  padding: 6%;\n}\n\n.paddingright[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.closeDrawerIcon[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n\n.title-Class[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n.spaceDiv[_ngcontent-%COMP%] {\n  padding-right: 3%;\n}\n\n.spaceUserImage[_ngcontent-%COMP%] {\n  padding-left: 2%;\n  width: 12%;\n}\n\n.user-name-Div[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: bolder;\n  font-family: sans-serif;\n  margin-top: 10px;\n  margin-bottom: -10px;\n}\n\n.title-Font[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  color: #000000;\n  width: 90%;\n  font-weight: bold;\n}\n\n.token-Div[_ngcontent-%COMP%] {\n  font-size: x-small;\n  color: #7e84a3;\n  font-family: sans-serif;\n}\n\n.token-id-class[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  background-color: #fafafa;\n  border-radius: 4px;\n}\n\n.width100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.details-Div[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.mat-expansion-panel-spacing[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.icon[_ngcontent-%COMP%] {\n  float: right;\n  color: #000000;\n  font-weight: 700;\n}\n\n.btnConfirmClass[_ngcontent-%COMP%] {\n  background-color: #456efe;\n  color: white;\n  border-radius: 20px;\n  width: 120px;\n  font-family: sans-serif;\n  font-size: smaller;\n}\n\n.btnDiv[_ngcontent-%COMP%] {\n  padding-top: 15%;\n}\n\n.btnCancelClass[_ngcontent-%COMP%] {\n  background-color: #f8f8f8 !important;\n  color: #5d5d5d !important;\n  border-radius: 20px !important;\n  width: 120px !important;\n  font-family: sans-serif !important;\n  font-size: smaller !important;\n}\n\n.width50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 97%;\n  align-self: center;\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-top-color: #f5f5f5;\n  margin-left: 2%;\n}\n\n.buttonNext[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-color: #1BCD9D;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.buttonCancel[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border-color: white;\n  background-color: #E3E3E3;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.inputCard[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  box-sizing: border-box;\n}\n\n.inputClass[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.pb1[_ngcontent-%COMP%] {\n  padding-bottom: 1%;\n}\n\n.operationTypeClass[_ngcontent-%COMP%] {\n  color: #A1A1A1;\n  margin: auto;\n}\n\n.quantityClass[_ngcontent-%COMP%] {\n  color: #000000;\n  margin: auto;\n  font-weight: 500;\n}\n\n.paddingclass[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n\n.totalAmount[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #7e84a3;\n  padding-left: 10px;\n}\n\n.inputCard[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 2px 1px -1px #f8f8f8, 0 1px 0 #f8f8f8, 0 5px 8px 0 #e9e9e9;\n}\n\n.chargeDetailsTbl[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  border-collapse: collapse;\n  border-radius: 10px;\n}\n\n.chargeDetailsDiv[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.thchargeDetailsTbl[_ngcontent-%COMP%] {\n  background-color: #f2f0f0;\n  color: #968e8e;\n  font-family: sans-serif;\n  text-align: center;\n  border-bottom-style: none;\n}\n\n.tbchargeDetailsTbl[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  font-size: x-small;\n  font-family: sans-serif;\n  text-align: center;\n  color: #726868;\n}\n\n.titleHead[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGVwb3NpdC10b3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0FBSUo7O0FBREU7RUFDSSx5QkFBQTtBQUlOOztBQUZFO0VBQ0ksV0FBQTtBQUtOOztBQUZFO0VBQ0ksbUJBQUE7QUFLTjs7QUFGRTtFQUNJLG1CQUFBO0FBS047O0FBRkU7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUtOOztBQUZFO0VBQ0ksaUJBQUE7QUFLTjs7QUFIRTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQU1OOztBQUhFO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQU1OOztBQUhFO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBTU47O0FBRkU7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQUtOOztBQUhFO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBTU47O0FBSkU7RUFDSSxXQUFBO0FBT047O0FBTEU7RUFDSSx5QkFBQTtBQVFOOztBQU5FO0VBQ0ksc0JBQUE7QUFTTjs7QUFORTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFTTjs7QUFQRTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFVTjs7QUFSRTtFQUNJLGdCQUFBO0FBV047O0FBVEU7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7QUFZTjs7QUFURTtFQUNJLFVBQUE7QUFZTjs7QUFWRTtFQUNJLFVBQUE7RUFDRCxrQkFBQTtFQUNDLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFhTjs7QUFYRTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFjTjs7QUFYRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQWNKOztBQVpFO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtBQWVOOztBQVpFO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQWVOOztBQVpFO0VBQ0ksYUFBQTtBQWVOOztBQVpFO0VBQ0ksa0JBQUE7QUFlTjs7QUFaRTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBZU47O0FBWkU7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBZU47O0FBWkU7RUFDSSxXQUFBO0FBZU47O0FBWkU7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWVOOztBQVpFO0VBQ0ksd0VBQUE7QUFlTjs7QUFWRTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQWFOOztBQVZFO0VBQ0ksb0JBQUE7QUFhTjs7QUFWRTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQWFOOztBQVZFO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBYU47O0FBVkU7RUFDSSxvQkFBQTtBQWFOIiwiZmlsZSI6ImRlcG9zaXQtdG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbGNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTEwJTtcclxufVxyXG4uYmFja0ljb257XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jaGVxdWVjYXJke1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuICAub3V0ZXItRGl2e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gIH1cclxuICAuY29udGVudC1EaXZ7XHJcbiAgICAgIHBhZGRpbmc6IDYlO1xyXG4gIH1cclxuICBcclxuICAucGFkZGluZ3JpZ2h0e1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2xvc2VEcmF3ZXJJY29ue1xyXG4gICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtQ2xhc3N7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zcGFjZURpdntcclxuICAgICAgcGFkZGluZy1yaWdodDogMyU7XHJcbiAgfVxyXG4gIC5zcGFjZVVzZXJJbWFnZXtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgd2lkdGg6IDEyJTtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXItbmFtZS1EaXZ7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlLUZvbnR7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC50b2tlbi1EaXZ7XHJcbiAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgICAgY29sb3I6ICM3ZTg0YTM7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAudG9rZW4taWQtY2xhc3N7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgLndpZHRoMTAwe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmRldGFpbHMtRGl2e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gIH1cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1zcGFjaW5ne1xyXG4gICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuaWNvbntcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgLmJ0bkNvbmZpcm1DbGFzc3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NmVmZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgfVxyXG4gIC5idG5EaXZ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNSU7XHJcbiAgfVxyXG4gIC5idG5DYW5jZWxDbGFzc3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogIzVkNWQ1ZCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsZXIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLndpZHRoNTB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5saW5le1xyXG4gICAgICB3aWR0aDogOTclO1xyXG4gICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gICAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIH1cclxuICAuYnV0dG9uTmV4dHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFCQ0Q5RDtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbkNhbmNlbHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0UzRTM7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuaW5wdXRDYXJke1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICAuaW5wdXRDbGFzc3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpmb2N1c3tcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnBiMXtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gIH1cclxuICBcclxuICAub3BlcmF0aW9uVHlwZUNsYXNze1xyXG4gICAgICBjb2xvcjogI0ExQTFBMTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAucXVhbnRpdHlDbGFzc3tcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRpbmdjbGFzc3tcclxuICAgICAgcGFkZGluZzogMiU7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3RhbEFtb3VudHtcclxuICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgICBjb2xvcjogIzdlODRhMztcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuaW5wdXRDYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggI2Y4ZjhmOCxcclxuICAgICAgICAgICAgICAgICAgMCAxcHggMCAjZjhmOGY4LFxyXG4gICAgICAgICAgICAgICAgICAwIDVweCA4cHggMCAjZTllOWU5O1xyXG4gIH1cclxuICBcclxuICAuY2hhcmdlRGV0YWlsc1RibHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNoYXJnZURldGFpbHNEaXZ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAudGhjaGFyZ2VEZXRhaWxzVGJse1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMGYwIDtcclxuICAgICAgY29sb3I6ICM5NjhlOGU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC50YmNoYXJnZURldGFpbHNUYmx7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICM3MjY4Njg7XHJcbiAgfVxyXG5cclxuICAudGl0bGVIZWFke1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLy90ZXN0Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepositTopupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-deposit-topup',
            templateUrl: './deposit-topup.component.html',
            styleUrls: ['./deposit-topup.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "uS30":
    /*!***************************************************************!*\
      !*** ./src/app/views/others/app-blank/app-blank.component.ts ***!
      \***************************************************************/

    /*! exports provided: AppBlankComponent */

    /***/
    function uS30(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppBlankComponent", function () {
        return AppBlankComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var AppBlankComponent = /*#__PURE__*/function () {
        function AppBlankComponent(route) {
          _classCallCheck(this, AppBlankComponent);

          this.route = route;
        }

        _createClass(AppBlankComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClickOfButton",
          value: function onClickOfButton() {
            this.route.navigateByUrl('/others/cheque-withdrawal');
          }
        }, {
          key: "onClickOfButton1",
          value: function onClickOfButton1() {
            this.route.navigateByUrl('/others/cheque-withdrawal1');
          }
        }, {
          key: "onClickOfButton3",
          value: function onClickOfButton3() {
            this.route.navigateByUrl('/others/authenticate');
          }
        }]);

        return AppBlankComponent;
      }();

      AppBlankComponent.ɵfac = function AppBlankComponent_Factory(t) {
        return new (t || AppBlankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AppBlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppBlankComponent,
        selectors: [["app-blank"]],
        decls: 7,
        vars: 0,
        consts: [[1, "m-333"], ["mat-button", "", "color", "primary", 3, "click"]],
        template: function AppBlankComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppBlankComponent_Template_button_click_1_listener() {
              return ctx.onClickOfButton1();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cheque-Withdrawal 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppBlankComponent_Template_button_click_3_listener() {
              return ctx.onClickOfButton();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cheque-Withdrawal 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppBlankComponent_Template_button_click_5_listener() {
              return ctx.onClickOfButton3();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Authentication");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAtYmxhbmsuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppBlankComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-blank',
            templateUrl: './app-blank.component.html',
            styleUrls: ['./app-blank.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zAir":
    /*!*****************************************************************!*\
      !*** ./src/app/views/others/otp-verify/otp-verify.component.ts ***!
      \*****************************************************************/

    /*! exports provided: OtpVerifyComponent */

    /***/
    function zAir(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpVerifyComponent", function () {
        return OtpVerifyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/models/otp.model */
      "V4gq");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      var OtpVerifyComponent = /*#__PURE__*/function () {
        function OtpVerifyComponent(dialogRef, apiService, snack, fb, router, data) {
          _classCallCheck(this, OtpVerifyComponent);

          this.dialogRef = dialogRef;
          this.apiService = apiService;
          this.snack = snack;
          this.fb = fb;
          this.router = router;
          this.data = data;
          this.verifyOtpModel = new app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_5__["verifyotpModel"]();
          this.afterSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(OtpVerifyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.title = "An OTP has been sent to the Registered Mobile Number!";
            this.basicInformationForm = this.fb.group({
              otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "closeClick",
          value: function closeClick() {
            this.dialogRef.close();
          }
        }, {
          key: "validateOtp",
          value: function validateOtp(otpValue) {
            var _this36 = this;

            console.log("OTP validaion", otpValue);

            if (otpValue.otpNumber == "") {
              this.snack.open("Please enter OTP to continue", 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            } else {
              this.customerPhoneNum = localStorage.getItem("otpPhoneNum");
              console.log("Phonenumber from Local", this.customerPhoneNum, otpValue);
              this.verifyOtpModel.sourceKey = 'mobile';
              this.verifyOtpModel.sourceValue = this.customerPhoneNum;
              this.verifyOtpModel.otp = otpValue.otp;
              this.verifyOtpModel.type = '';
              console.log("model", this.verifyOtpModel);
              this.apiService.verifyOtp(this.verifyOtpModel).subscribe(function (otpResp) {
                console.log('otpResp :: ', otpResp);

                if (otpResp != null) {
                  if (otpResp.userId != '' && otpResp.userId != null && otpResp.status == 'SUCCESS') {
                    _this36.afterSubmit.emit(true);

                    localStorage.setItem('userId', otpResp.userId);

                    _this36.snack.open("Validation successful", 'OK', {
                      duration: 4000,
                      verticalPosition: 'top',
                      horizontalPosition: 'right'
                    });

                    _this36.dialogRef.close(true);
                  } else {
                    _this36.dialogRef.close(false);

                    _this36.snack.open("".concat(otpResp.responseMessage), 'OK', {
                      duration: 4000,
                      verticalPosition: 'top',
                      horizontalPosition: 'right'
                    });
                  }
                }
              }, function (error) {
                console.log(error.status); // this.errorStatus = error.status;

                _this36.snack.open("Incorrect OTP. Please try again.", 'OK', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                }); // if (this.errorStatus == 200) {
                //   // this.router.navigateByUrl('/others/services');
                //   /* TO-DO: need to uncomment this for fingerprint verification */
                //   // this.openDialog();
                // }

              });
            }
          }
        }]);

        return OtpVerifyComponent;
      }();

      OtpVerifyComponent.ɵfac = function OtpVerifyComponent_Factory(t) {
        return new (t || OtpVerifyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      OtpVerifyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OtpVerifyComponent,
        selectors: [["app-otp-verify"]],
        outputs: {
          afterSubmit: "afterSubmit"
        },
        decls: 21,
        vars: 4,
        consts: [["mat-button", "", "id", "close", "mat-dialog-close", "", 3, "click"], [1, "closeicon"], [3, "formGroup"], ["fxLayout", "row"], ["id", "box", 1, "pd-2"], [1, "verification"], [1, "phoneNumber"], [1, "verify"], [1, "flex-grow-1"], ["type", "input", 1, "inputMatcard"], ["matInput", "", "id", "otp", "type", "number", "maxlength", "6", "oninput", "this.value = this.value.slice(0, this.maxLength);", "formControlName", "otp", 1, "alignment"], [1, "verify1"], ["id", "resend"], ["mat-stroked-button", "", 1, "button", 3, "disabled", "click"]],
        template: function OtpVerifyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtpVerifyComponent_Template_button_click_0_listener() {
              return ctx.closeClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Please enter the OTP to verify");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Not Recieved?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \xA0 Resend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtpVerifyComponent_Template_button_click_19_listener() {
              return ctx.validateOtp(ctx.basicInformationForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Proceed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.basicInformationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.number);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.basicInformationForm.valid);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: [".phoneNumber[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-bottom: 20px;\n  color: black;\n  font-size: smaller;\n  font-weight: bolder;\n}\n\n.verification[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-top: 8%;\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-bottom: 3%;\n  font-size: 20px;\n}\n\n.verify[_ngcontent-%COMP%] {\n  display: block;\n  color: grey;\n  font-size: 14px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.verify1[_ngcontent-%COMP%] {\n  display: block;\n  color: grey;\n  font-size: 10px;\n  text-align: center;\n  margin-top: 5px;\n  cursor: pointer;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.inputClass[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  box-shadow: 0 3pt 6pt #00000029;\n  font-weight: bolder;\n}\n\nmatCard[_ngcontent-%COMP%] {\n  max-width: 500px;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n}\n\ninput[_ngcontent-%COMP%] {\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  font-weight: bolder;\n}\n\n.inputMatcard[_ngcontent-%COMP%] {\n  padding: 12px;\n  max-width: 40%;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  margin: auto;\n  margin-top: 20px;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 170px;\n  display: block;\n  border-radius: 45px;\n  margin: auto;\n  margin-top: 25px;\n  margin-bottom: 4%;\n  color: white;\n  background-color: #456EFE;\n}\n\n.cdk-overlay-pane.my-dialog[_ngcontent-%COMP%] {\n  position: relative !important;\n}\n\n.close.mat-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 5px;\n  line-height: 14px;\n  min-width: auto;\n}\n\n.closeicon[_ngcontent-%COMP%] {\n  line-height: 0px;\n  width: 18px;\n  \n  \n  \n  \n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n#close[_ngcontent-%COMP%] {\n  float: right;\n}\n\n#box[_ngcontent-%COMP%] {\n  width: 600px;\n}\n\n#resend[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  color: black;\n}\n\n#proceed[_ngcontent-%COMP%] {\n  width: 170px;\n  background-color: #456EFE;\n  color: white;\n  margin-top: 25px;\n  margin-bottom: 4%;\n}\n\n#otp[_ngcontent-%COMP%] {\n  outline: none;\n  text-align: center;\n  letter-spacing: 10px;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcb3RwLXZlcmlmeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUVDLG1CQUFBO0VBQ0QsWUFBQTtFQUNBLGtCQUFBO0VBQ0QsbUJBQUE7QUFESDs7QUFHQztFQUNHLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUlBO0VBQ0ksWUFBQTtBQURKOztBQUlBO0VBQ0kscUZBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxxRkFBQTtBQURKOztBQUlBO0VBRUksd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFFQSxtQkFBQTtBQUhKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNELFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUVELHlCQUFBO0FBRkY7O0FBSUE7RUFDSSw2QkFBQTtBQURKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUNFO0VBQ0UsWUFBQTtBQUVKOztBQUFFO0VBQ0YsWUFBQTtBQUdBOztBQURFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUhFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFNSjs7QUFIRTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUFNSiIsImZpbGUiOiJvdHAtdmVyaWZ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5waG9uZU51bWJlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuIC52ZXJpZmljYXRpb257XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDglO1xyXG4gICAgbWFyZ2luLWxlZnQ6NSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxufVxyXG5cclxuXHJcbi52ZXJpZnl7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOmdyZXk7XHJcbiAgICAvLyBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgIFxyXG59XHJcbi52ZXJpZnkxe1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjpncmV5O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZsZXgtZ3Jvdy0xe1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uaW5wdXRDbGFzc3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkscmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIFxyXG59XHJcbm1hdENhcmR7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcblxyXG59XHJcbmlucHV0e1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxyZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG4gICAgLy8gYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmlucHV0TWF0Y2FyZHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5idXR0b257XHJcbiAgICB3aWR0aDoxNzBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgbWFyZ2luOiBhdXRvO1xyXG4gICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzQ1NkVGRTtcclxufVxyXG4uY2RrLW92ZXJsYXktcGFuZS5teS1kaWFsb2cge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNsb3NlLm1hdC1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICB9XHJcbiAgLmNsb3NlaWNvbntcclxuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIC8qIGZvbnQtc2l6ZTogOHB0OyAqL1xyXG4gICAgLyogZm9udC1mYW1pbHk6IHRhaG9tYTsgKi9cclxuICAgIC8qIG1hcmdpbi10b3A6IDFweDsgKi9cclxuICAgIC8qIG1hcmdpbi1yaWdodDogMnB4OyAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gICNjbG9zZXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgI2JveHtcclxud2lkdGg6IDYwMHB4XHJcbiAgfVxyXG4gICNyZXNlbmR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6YmxhY2tcclxuICB9XHJcbiAgI3Byb2NlZWR7XHJcbiAgICB3aWR0aDoxNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzQ1NkVGRTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICB9XHJcbiAgI290cHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbiAgaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTpub25lO1xyXG4gICAgbWFyZ2luOjA7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtpVerifyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-otp-verify',
            templateUrl: './otp-verify.component.html',
            styleUrls: ['./otp-verify.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, {
          afterSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zf0q":
    /*!***************************************************************************!*\
      !*** ./src/app/views/others/cash-withdrawal/cash-withdrawal.component.ts ***!
      \***************************************************************************/

    /*! exports provided: CashWithdrawalComponent */

    /***/
    function zf0q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CashWithdrawalComponent", function () {
        return CashWithdrawalComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/Dialog/dialog.service */
      "LP5l");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/shared/models/otp.model */
      "V4gq");
      /* harmony import */


      var _otp_verify_otp_verify_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../otp-verify/otp-verify.component */
      "zAir");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV"); // import { cashWithdrawDto } from 'app/shared/models/cashWithdrawDTO';


      var _c0 = ["cdForm"];

      function CashWithdrawalComponent_mat_icon_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CashWithdrawalComponent_mat_icon_15_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r20.goToServiceScreens();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " arrow_back");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CashWithdrawalComponent_div_26_input_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 46);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        }
      }

      function CashWithdrawalComponent_div_26_mat_select_5_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r25.accountType);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r25.accountType);
        }
      }

      function CashWithdrawalComponent_div_26_mat_select_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-select", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function CashWithdrawalComponent_div_26_mat_select_5_Template_mat_select_selectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r26.getAccountType($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CashWithdrawalComponent_div_26_mat_select_5_mat_option_1_Template, 2, 2, "mat-option", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r23.accounttypeArray);
        }
      }

      function CashWithdrawalComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-hint", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Account Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CashWithdrawalComponent_div_26_input_4_Template, 1, 1, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CashWithdrawalComponent_div_26_mat_select_5_Template, 2, 1, "mat-select", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.phoneNumber && !ctx_r1.accountDropdown);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.phoneNumber && ctx_r1.accountDropdown);
        }
      }

      function CashWithdrawalComponent_div_27_mat_hint_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Account Balance: ", ctx_r28.curr, "", ctx_r28.formatAmount(ctx_r28.accountBal), "");
        }
      }

      function CashWithdrawalComponent_div_27_mat_hint_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Holder Name : ", ctx_r29.userName, "");
        }
      }

      function CashWithdrawalComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-hint", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Account Number*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CashWithdrawalComponent_div_27_Template_input_change_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r30.fetchByAccountNum(ctx_r30.cashwithdrawForm.get("accountNumber").value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CashWithdrawalComponent_div_27_mat_hint_5_Template, 2, 2, "mat-hint", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CashWithdrawalComponent_div_27_mat_hint_7_Template, 2, 2, "mat-hint", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.showAccountNum);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.showAccountNum);
        }
      }

      function CashWithdrawalComponent_div_28_input_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 58);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        }
      }

      function CashWithdrawalComponent_div_28_mat_select_5_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var id_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", id_r37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", id_r37, " ");
        }
      }

      function CashWithdrawalComponent_div_28_mat_select_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-select", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function CashWithdrawalComponent_div_28_mat_select_5_Template_mat_select_selectionChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r38.fetchByAccountNum($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CashWithdrawalComponent_div_28_mat_select_5_mat_option_1_Template, 2, 2, "mat-option", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r33.accountNoList);
        }
      }

      function CashWithdrawalComponent_div_28_mat_hint_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Account Balance : ", ctx_r34.curr, "", ctx_r34.formatAmount(ctx_r34.accountBal), "");
        }
      }

      function CashWithdrawalComponent_div_28_mat_hint_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Holder Name : ", ctx_r35.userName, "");
        }
      }

      function CashWithdrawalComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-hint", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Account Number*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CashWithdrawalComponent_div_28_input_4_Template, 1, 1, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CashWithdrawalComponent_div_28_mat_select_5_Template, 2, 1, "mat-select", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CashWithdrawalComponent_div_28_mat_hint_6_Template, 2, 2, "mat-hint", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CashWithdrawalComponent_div_28_mat_hint_8_Template, 2, 2, "mat-hint", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.flag1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.flag1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.hideDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.hideDetails);
        }
      }

      function CashWithdrawalComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-hint", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Account Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        }
      }

      function CashWithdrawalComponent_input_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 62);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        }
      }

      function CashWithdrawalComponent_input_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 62);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        }
      }

      function CashWithdrawalComponent_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Account Branch is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CashWithdrawalComponent_div_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("currency-flag ", ctx_r8.isedit ? ctx_r8.accountCurrencyImage(ctx_r8.cashwithdrawForm.controls["accountCurrency"].value) : ctx_r8.currencyImage, "");
        }
      }

      function CashWithdrawalComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("currency-flag ", !ctx_r9.isedit ? ctx_r9.accountCurrencyImage(ctx_r9.cashwithdrawForm.controls["accountCurrency"].value) : ctx_r9.currencyImage, "");
        }
      }

      function CashWithdrawalComponent_input_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 63);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        }
      }

      function CashWithdrawalComponent_input_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 63);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        }
      }

      function CashWithdrawalComponent_div_51_input_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 66);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        }
      }

      function CashWithdrawalComponent_div_51_mat_select_9_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CashWithdrawalComponent_div_51_mat_select_9_mat_option_1_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46);

            var country_r43 = ctx.$implicit;

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r45.onCountryChange(country_r43);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r43 = ctx.$implicit;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r43.currencyCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](country_r43.currencyCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("currency-flag currency-flag-", ctx_r42.addCurrencyImage(country_r43.currencyCode), " alignImage");
        }
      }

      function CashWithdrawalComponent_div_51_mat_select_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-select", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CashWithdrawalComponent_div_51_mat_select_9_mat_option_1_Template, 6, 5, "mat-option", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r41.isedit);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r41.countryValues);
        }
      }

      function CashWithdrawalComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-hint", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Transaction Currency* ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CashWithdrawalComponent_div_51_input_8_Template, 1, 1, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CashWithdrawalComponent_div_51_mat_select_9_Template, 2, 2, "mat-select", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("currency-flag ", ctx_r12.currencyImage, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r12.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.phoneNumber);
        }
      }

      function CashWithdrawalComponent_div_52_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CashWithdrawalComponent_div_52_mat_option_9_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51);

            var country_r48 = ctx.$implicit;

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r50.onCountryChange(country_r48);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r48 = ctx.$implicit;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r48.currencyCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](country_r48.currencyCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("currency-flag currency-flag-", ctx_r47.addCurrencyImage(country_r48.currencyCode), " alignImage");
        }
      }

      function CashWithdrawalComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-hint", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Transaction Currency* ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CashWithdrawalComponent_div_52_mat_option_9_Template, 6, 5, "mat-option", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("currency-flag ", ctx_r13.currencyImage, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.countryValues);
        }
      }

      function CashWithdrawalComponent_div_53_mat_error_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Amount must be greater than zero ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CashWithdrawalComponent_div_53_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-hint", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Transaction Amount*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 74, 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CashWithdrawalComponent_div_53_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r54.transAmount = $event;
          })("keyup", function CashWithdrawalComponent_div_53_Template_input_keyup_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r56.OnInput($event);
          })("focus", function CashWithdrawalComponent_div_53_Template_input_focus_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r57.clicked($event);
          })("keyup", function CashWithdrawalComponent_div_53_Template_input_keyup_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r58.demonreset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CashWithdrawalComponent_div_53_mat_error_7_Template, 2, 0, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.transAmount)("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 3, ctx_r14.transAmt, "2."));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.cashwithdrawForm.get("transactionAmount").errors == null ? null : ctx_r14.cashwithdrawForm.get("transactionAmount").errors.min);
        }
      }

      function CashWithdrawalComponent_div_54_input_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 78);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", true);
        }
      }

      function CashWithdrawalComponent_div_54_input_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 79, 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CashWithdrawalComponent_div_54_input_5_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r63.transAmount = $event;
          })("keyup", function CashWithdrawalComponent_div_54_input_5_Template_input_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r65.OnInput($event);
          })("focus", function CashWithdrawalComponent_div_54_input_5_Template_input_focus_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r66.clicked($event);
          })("keyup", function CashWithdrawalComponent_div_54_input_5_Template_input_keyup_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r67.demonreset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r60.transAmount)("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 3, ctx_r60.transAmt, "1."))("readonly", ctx_r60.isedit);
        }
      }

      function CashWithdrawalComponent_div_54_mat_error_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Amount must be greater than zero ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CashWithdrawalComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-hint", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Transaction Amount*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CashWithdrawalComponent_div_54_input_4_Template, 1, 1, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CashWithdrawalComponent_div_54_input_5_Template, 3, 6, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CashWithdrawalComponent_div_54_mat_error_6_Template, 2, 0, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r15.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.cashwithdrawForm.get("transactionAmount").errors == null ? null : ctx_r15.cashwithdrawForm.get("transactionAmount").errors.min);
        }
      }

      function CashWithdrawalComponent_div_78_div_8_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r79.denominationLimit[2000], " ");
        }
      }

      function CashWithdrawalComponent_div_78_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "2000");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 98, 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CashWithdrawalComponent_div_78_div_8_Template_input_keyup_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r80.totalAmountValue(_r68);
          })("keypress", function CashWithdrawalComponent_div_78_div_8_Template_input_keypress_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r81);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r82.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CashWithdrawalComponent_div_78_div_8_mat_error_13_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r69.denominationlimit && _r78.value > ctx_r69.denominationLimit[2000]);
        }
      }

      function CashWithdrawalComponent_div_78_div_9_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r84.denominationLimit[500], " ");
        }
      }

      function CashWithdrawalComponent_div_78_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "500");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 102, 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CashWithdrawalComponent_div_78_div_9_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r85.totalAmountValue(_r68);
          })("keypress", function CashWithdrawalComponent_div_78_div_9_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86);

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r87.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CashWithdrawalComponent_div_78_div_9_mat_error_12_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r70.denominationlimit && _r83.value > ctx_r70.denominationLimit[500]);
        }
      }

      function CashWithdrawalComponent_div_78_div_10_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r89.denominationLimit[200], " ");
        }
      }

      function CashWithdrawalComponent_div_78_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "200");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 104, 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CashWithdrawalComponent_div_78_div_10_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r91);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r90.totalAmountValue(_r68);
          })("keypress", function CashWithdrawalComponent_div_78_div_10_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r91);

            var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r92.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CashWithdrawalComponent_div_78_div_10_mat_error_12_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r71.denominationlimit && _r88.value > ctx_r71.denominationLimit[200]);
        }
      }

      function CashWithdrawalComponent_div_78_div_11_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r94.denominationLimit[100], " ");
        }
      }

      function CashWithdrawalComponent_div_78_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 106, 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CashWithdrawalComponent_div_78_div_11_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r95.totalAmountValue(_r68);
          })("keypress", function CashWithdrawalComponent_div_78_div_11_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

            var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r97.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CashWithdrawalComponent_div_78_div_11_mat_error_12_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r72.denominationlimit && _r93.value > ctx_r72.denominationLimit[100]);
        }
      }

      function CashWithdrawalComponent_div_78_div_12_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r99.denominationLimit[50], " ");
        }
      }

      function CashWithdrawalComponent_div_78_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 108, 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CashWithdrawalComponent_div_78_div_12_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r100.totalAmountValue(_r68);
          })("keypress", function CashWithdrawalComponent_div_78_div_12_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101);

            var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r102.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CashWithdrawalComponent_div_78_div_12_mat_error_12_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r73.denominationlimit && _r98.value > ctx_r73.denominationLimit[50]);
        }
      }

      function CashWithdrawalComponent_div_78_div_13_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r104.denominationLimit[20], " ");
        }
      }

      function CashWithdrawalComponent_div_78_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 110, 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CashWithdrawalComponent_div_78_div_13_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r106);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r105.totalAmountValue(_r68);
          })("keypress", function CashWithdrawalComponent_div_78_div_13_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r106);

            var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r107.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CashWithdrawalComponent_div_78_div_13_mat_error_12_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r74.denominationlimit && _r103.value > ctx_r74.denominationLimit[20]);
        }
      }

      function CashWithdrawalComponent_div_78_div_14_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Please enter <= ", ctx_r109.denominationLimit[10], " ");
        }
      }

      function CashWithdrawalComponent_div_78_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 112, 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CashWithdrawalComponent_div_78_div_14_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r111);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r110.totalAmountValue(_r68);
          })("keypress", function CashWithdrawalComponent_div_78_div_14_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r111);

            var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r112.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CashWithdrawalComponent_div_78_div_14_mat_error_12_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r75.denominationlimit && _r108.value > ctx_r75.denominationLimit[10]);
        }
      }

      function CashWithdrawalComponent_div_78_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 114, 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CashWithdrawalComponent_div_78_div_15_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r115);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r114.totalAmountValue(_r68);
          })("keypress", function CashWithdrawalComponent_div_78_div_15_Template_input_keypress_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r115);

            var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r116.omit_number($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CashWithdrawalComponent_div_78_mat_error_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Total amount should be equal to ", ctx_r77.cashwithdrawForm.value.transactionAmount, " ");
        }
      }

      function CashWithdrawalComponent_div_78_Template(rf, ctx) {
        if (rf & 1) {
          var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", null, 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Denomination");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CashWithdrawalComponent_div_78_div_8_Template, 14, 1, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CashWithdrawalComponent_div_78_div_9_Template, 13, 1, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CashWithdrawalComponent_div_78_div_10_Template, 13, 1, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CashWithdrawalComponent_div_78_div_11_Template, 13, 1, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CashWithdrawalComponent_div_78_div_12_Template, 13, 1, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CashWithdrawalComponent_div_78_div_13_Template, 13, 1, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CashWithdrawalComponent_div_78_div_14_Template, 13, 1, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CashWithdrawalComponent_div_78_div_15_Template, 11, 0, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Total Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CashWithdrawalComponent_div_78_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r118);

            var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r117.totalAmount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CashWithdrawalComponent_div_78_mat_error_23_Template, 2, 1, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.cashwithdrawForm.value.transactionCurrency == "INR");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.cashwithdrawForm.value.transactionCurrency == "INR" || ctx_r16.cashwithdrawForm.value.transactionCurrency == "USD" || ctx_r16.cashwithdrawForm.value.transactionCurrency == "AED");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.cashwithdrawForm.value.transactionCurrency == "INR");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.cashwithdrawForm.value.transactionCurrency == "INR" || ctx_r16.cashwithdrawForm.value.transactionCurrency == "USD" || ctx_r16.cashwithdrawForm.value.transactionCurrency == "AED");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.cashwithdrawForm.value.transactionCurrency == "INR" || ctx_r16.cashwithdrawForm.value.accountCurrency == "USD");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.cashwithdrawForm.value.transactionCurrency == "INR");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.cashwithdrawForm.value.transactionCurrency == "INR");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.cashwithdrawForm.value.transactionCurrency == "INR" || ctx_r16.cashwithdrawForm.value.transactionCurrency == "USD" || ctx_r16.cashwithdrawForm.value.transactionCurrency == "AED");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r16.totalAmount);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.enableBtn1);
        }
      }

      function CashWithdrawalComponent_button_83_Template(rf, ctx) {
        if (rf & 1) {
          var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CashWithdrawalComponent_button_83_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120);

            var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r119.goToServiceScreens();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "CANCEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CashWithdrawalComponent_div_84_Template(rf, ctx) {
        if (rf & 1) {
          var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CashWithdrawalComponent_div_84_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r122);

            var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r121.onSaveofCashWithdraw(ctx_r121.cashwithdrawForm.value, ctx_r121.ifQRvariable, ctx_r121.cdForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "GENERATE TOKEN");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r18.enableContinue || !ctx_r18.cashwithdrawForm.get("transactionCurrency").valid || !ctx_r18.cashwithdrawForm.get("accountType").valid || !ctx_r18.cashwithdrawForm.get("accountNumber").valid || !ctx_r18.cashwithdrawForm.get("accountCurrency").valid || !ctx_r18.cashwithdrawForm.get("transactionAmount").valid || !ctx_r18.cashwithdrawForm.get("totalChargeAmount").valid || !ctx_r18.cashwithdrawForm.get("totalTransactionAmount").valid || ctx_r18.enableBtn1);
        }
      }

      function CashWithdrawalComponent_div_85_Template(rf, ctx) {
        if (rf & 1) {
          var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CashWithdrawalComponent_div_85_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r124);

            var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r123.getOTP(ctx_r123.cashwithdrawForm.value, ctx_r123.ifQRvariable, ctx_r123.cdForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "CONTINUE");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r19.enableContinue || !ctx_r19.cashwithdrawForm.get("transactionAmount").valid || !ctx_r19.cashwithdrawForm.get("transactionCurrency").valid || !ctx_r19.cashwithdrawForm.get("accountType").valid || !ctx_r19.cashwithdrawForm.get("accountNumber").valid || !ctx_r19.cashwithdrawForm.get("accountCurrency").valid || !ctx_r19.cashwithdrawForm.get("transactionAmount").valid || !ctx_r19.cashwithdrawForm.get("totalChargeAmount").valid || !ctx_r19.cashwithdrawForm.get("totalTransactionAmount").valid);
        }
      }

      var CashWithdrawalComponent = /*#__PURE__*/function () {
        function CashWithdrawalComponent(router, formBuilder, dialogService, apiService, fb, ls, snack, changeDef, elRef, renderer, dialog, cdr) {
          _classCallCheck(this, CashWithdrawalComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.dialogService = dialogService;
          this.apiService = apiService;
          this.fb = fb;
          this.ls = ls;
          this.snack = snack;
          this.changeDef = changeDef;
          this.elRef = elRef;
          this.renderer = renderer;
          this.dialog = dialog;
          this.cdr = cdr; // cashWithdrawDto = new cashWithdrawDto();

          this.cashWithdrawal = 'Cash Withdrawal';
          this.countryFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
          this.defaultValue = {
            name: 'Deutschland',
            alpha2Code: 'DE',
            alpha3Code: 'DEU',
            numericCode: '276',
            callingCode: '+49'
          };
          this.ifQRvariable = false;
          this.productCode = "CHW";
          this.tokenOrigin = "Kiosk";
          this.custPref = "N";
          this.entityCode = "ENTCD";
          this.bankCode = "BNKC";
          this.tokenBranch = "1234";
          this.accounttypeArray = [];
          this.idList = [];
          this.denomCodeArray = [{
            key: 'count2000',
            value: 2000
          }, {
            key: 'count500',
            value: 500
          }, {
            key: 'count200',
            value: 200
          }, {
            key: 'count100',
            value: 100
          }, {
            key: 'count50',
            value: 50
          }, {
            key: 'count20',
            value: 20
          }, {
            key: 'count10',
            value: 10
          }, {
            key: 'count1',
            value: 1
          }];
          this.tokenObjects = new app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["TokenObjects"]();
          this.enableContinue = true;
          this.isedit = true;
          this.currencyImage = ""; // accountNoList[]: any[];

          this.accountNoList = [];
          this.showAccountNum = true;
          this.showAccoutType = true;
          this.oTpModel = new app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_8__["otpModel"]();
          this.enableBtn = true;
          this.enableBtn1 = false;
          this.accountDropdown = false;
          this.flag1 = false;
          this.denomRequired = '';
          this.hideDetails = false;
        }

        _createClass(CashWithdrawalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.phoneNumber = localStorage.getItem("phonenumFromLogin");
            this.appointmentId = this.ls.getItem("TransactionType");
            this.transBranch = localStorage.getItem("TRANSACTIONBRANCH");
            this.qrData = JSON.parse(JSON.parse(localStorage.getItem('scannerData')));
            console.log("QRData", this.qrData);
            this.cashwithdrawForm = this.fb.group({
              transactionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              customerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              accountType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              holderName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              accountCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(.1)]],
              accountBalance: [''],
              productCode: ['CHW', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              tokenOrigin: ['Kiosk', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              exchangeRate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              accountAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              totalChargeAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              totalTransactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              narrative: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              denomination: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              totalAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              entityCode: [this.entityCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              bankCode: [this.bankCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              tokenBranch: [this.tokenBranch, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              customerCategory: [this.custPref, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              tokenNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              estimatedWaitTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              accountBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]] //transAmt: ['', [Validators.required, Validators.pattern(/\B(?=(\d{3})+(?!\d))/g.',')]],

            });
            this.custValidation = localStorage.getItem("customerValidation");
            this.custNameFromLogin = localStorage.getItem("FromLogin");

            if (this.custValidation == "New Customer") {
              this.showAccountNum = false;
              this.showAccoutType = false;
            }

            if (this.custNameFromLogin != null) {
              this.showAccountNum = false;
            }

            console.log("CWH :: " + this.cashwithdrawForm.value);

            if (this.phoneNumber && this.custNameFromLogin == null && this.appointmentId == null) {
              this.ifQRvariable = false;
              this.gettingallTansactionDetails(this.phoneNumber);
            } // else{


            if (this.qrData != null) {
              // ;
              this.ifQRvariable = true;
              console.log("Account", this.qrData);
              this.cashwithdrawForm.controls.holderName.setValue(this.qrData.holderName);
              this.cashwithdrawForm.controls.accountType.setValue(this.qrData.accountType);
              this.cashwithdrawForm.controls.accountNumber.setValue(this.qrData.accountId);
              this.getChargeDetails(this.qrData.accountId, '');
              this.cashwithdrawForm.controls.transactionAmount.setValue(this.qrData.transactionAmount);
              this.cashwithdrawForm.controls.accountCurrency.setValue(this.qrData.accountCurrency);
              this.cashwithdrawForm.controls.transactionCurrency.setValue(this.qrData.transactionCurrency);
              this.accountBal = this.qrData.accountBalance;
              this.customerID = this.qrData.customerId;
              this.currencyImage = 'currency-flag-' + this.qrData.accountCurrency.toLowerCase();
              this.currencyImage = 'currency-flag-' + this.qrData.transactionCurrency.toLowerCase();

              if (this.qrData.transactionBranch != null && this.qrData.transactionBranch != '') {
                this.cashwithdrawForm.controls.transactionBranch.setValue(this.qrData.transactionBranch);
              } else {
                this.cashwithdrawForm.controls.transactionBranch.setValue('Kasturi Nagar');
              }

              this.getAccountBranch();
            }

            this.getCountrynameValues();
            this.getAccountBranch();
            this.gettransactionBranch("account_branch");
            this.getBankInformation("KN");

            if (this.appointmentId.data.appointmentId) {
              this.cashWithdrawlData();
            }
          }
        }, {
          key: "fetchByAccountNum",
          value: function fetchByAccountNum(accNum) {
            var _this37 = this;

            this.cashwithdrawForm.controls.transactionAmount.reset();
            this.cashwithdrawForm.controls.totalTransactionAmount.setValue(this.cashwithdrawForm.controls.totalChargeAmount.value);
            console.log("Account Numebr", accNum);
            this.ifQRvariable = true;
            this.apiService.fetchByaccNum(accNum).subscribe(function (res) {
              console.log('Account Number Rsp', res);

              _this37.getChargeDetails(accNum, '');

              _this37.userName = res.accHolderName;
              _this37.accountBal = res.accBalance;
              _this37.custmerID = res.customerId;
              _this37.accountNumber = res.accountId;
              _this37.accountCurrency = res.accountCurrency;
              _this37.curr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["getCurrencySymbol"])(res.currency, "narrow");

              _this37.cashwithdrawForm.controls.accountType.setValue(res.accountType);

              _this37.cashwithdrawForm.controls.accountBranch.setValue(res.accountBranch);

              _this37.cashwithdrawForm.controls.holderName.setValue(_this37.userName);

              _this37.getCountrynameValues(); // this.currencyImage = 'currency-flag-'+res.currency.toLowerCase();


              _this37.currencyImage = 'currency-flag-' + res.currency.toLowerCase();

              _this37.cashwithdrawForm.controls.transactionCurrency.setValue(res.currency);

              _this37.cashwithdrawForm.controls.accountCurrency.setValue(res.currency);

              console.log(_this37.ifQRvariable);

              _this37.custAmountBal(accNum);

              _this37.cashwithdrawForm.controls.transactionBranch.setValue('Kasturi Nagar');

              _this37.apiService.fetchByaccDeatilsoncustId(res.customerId).subscribe(function (resp) {
                _this37.phonenum = resp[0].phoneNumber;
                localStorage.setItem('otpPhoneNum', _this37.phonenum);
              });
            });
          } //  numberWithCommas = (transAmt) => {
          //   return transAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          //   console.log(transAmt);
          //   }

        }, {
          key: "gettransactionBranch",
          value: function gettransactionBranch(key) {
            var _this38 = this;

            this.apiService.getTransactionBranch(key).subscribe(function (branches) {
              console.log('branches :: ', branches);
              _this38.trasactionBranches = branches;
            });
          }
        }, {
          key: "getAccountBranch",
          value: function getAccountBranch() {
            var _this39 = this;

            this.apiService.getBranchforKiosk().subscribe(function (data) {
              _this39.branchData = data;
              console.log(_this39.branchData);
              data.forEach(function (element, index) {
                _this39.branch = data[index].branchName;
                console.log(_this39.branch); // this.cashwithdrawForm.controls.accountBranch.setValue(this.branch);
              });
            });
          }
        }, {
          key: "getCountrynameValues",
          value: function getCountrynameValues() {
            var _this40 = this;

            this.apiService.getCountryValues().subscribe(function (allCountryValues) {
              _this40.countryValues = allCountryValues;
              console.log(_this40.countryValues);
            });
          }
        }, {
          key: "onCountrySelected",
          value: function onCountrySelected($event) {// console.log($event.alpha3Code);
          }
        }, {
          key: "gettingallTansactionDetails",
          value: function gettingallTansactionDetails(phoneNumber) {
            var _this41 = this;

            this.phoneNumber = localStorage.getItem("phonenumFromLogin");
            this.apiService.gettingTransactionDetails(this.phoneNumber).subscribe(function (allTransactionResp) {
              console.log("All Transaction Details", allTransactionResp);
              _this41.userName = (allTransactionResp.firstName ? allTransactionResp.firstName + ' ' : ' ') + (allTransactionResp.middleName ? allTransactionResp.middleName + ' ' : ' ') + (allTransactionResp.lastName ? allTransactionResp.lastName : ' ');

              _this41.cashwithdrawForm.controls.holderName.setValue(_this41.userName); // this.setBalance(allTransactionResp.custAccount);


              _this41.custID = allTransactionResp.customerId;
              console.log("Cust", _this41.custID);
              _this41.custAccountData = allTransactionResp.custAccount;
              _this41.accounttypeArray = _toConsumableArray(_this41.custAccountData).filter(function (_ref4, index) {
                var accountType = _ref4.accountType;
                return !_toConsumableArray(_this41.custAccountData).map(function (obj) {
                  return obj.accountType;
                }).includes(accountType, index + 1);
              });
              console.log(_this41.accounttypeArray);

              for (var i = 0; i < _this41.custAccountData.length; i++) {
                if (_this41.custAccountData[i].status == 'APPROVED') {
                  _this41.accountNoList.push(_this41.custAccountData[i]);
                }
              }

              console.log(_this41.accountNoList);

              if (_this41.custAccountData && _this41.accountNoList.length <= 1) {
                _this41.accountDropdown = false;
                _this41.hideDetails = true;
                var accTyp = allTransactionResp.custAccount[0].accountType;

                _this41.cashwithdrawForm.controls.accountType.setValue(accTyp);

                _this41.custAccountNumber(_this41.accountNoList[0]);
              } else {
                _this41.accountDropdown = true;
                _this41.hideDetails = true;
                var _accTyp4 = allTransactionResp.custAccount[0].accountType;

                _this41.cashwithdrawForm.controls.accountType.setValue(_accTyp4);

                _this41.custAccountNumber(allTransactionResp.custAccount[0]);
              }
            });
          }
        }, {
          key: "getAccountType",
          value: function getAccountType(event) {
            this.cashwithdrawForm.controls.transactionAmount.reset();
            this.cashwithdrawForm.controls.totalTransactionAmount.setValue(this.cashwithdrawForm.controls.totalChargeAmount.value);
            this.accountNoList = [];
            this.isedit = false;
            this.accountNum1 = _toConsumableArray(this.custAccountData).filter(function (accounNum, index) {
              return accounNum.accountType == event;
            }); // this.accountNoList=this.accountNum1
            // this.accountNoList=this.accountNum1.map((acccount)=>
            // {
            //   return acccount.accountId
            // });

            for (var i = 0; i < this.custAccountData.length; i++) {
              if (this.custAccountData[i].status == 'APPROVED' && this.custAccountData[i].accountType == event) {
                this.accountNoList.push(this.custAccountData[i].accountId);
              }
            } // this.accountNoList.push(12233)


            console.log(this.accountNoList);

            if (this.accountNoList.length <= 1) {
              // this.cashwithdrawForm.controls.accountNumber.patchValue(this.accountNoList[0]);
              this.flag1 = false;
              this.getData(this.accountNoList[0]);
              this.cashwithdrawForm.controls.accountNumber.setValue(this.accountNoList[0]);
            } else {
              this.getData(this.accountNoList[0]);
              this.flag1 = true;
            }

            this.getChargeDetails(this.accountNoList[0], '');
          }
        }, {
          key: "custAccountNumber",
          value: function custAccountNumber(custype) {
            console.log('custype :: ', custype);
            this.isedit = false;
            this.idList = _toConsumableArray(this.custAccountData).filter(function (item) {
              return item.accountType === custype.accountType;
            }); //  const defaultId = this.idList ? this.idList[0] : null;

            console.log("idList :: ", this.idList);
            this.accountNoList = [];

            for (var i = 0; i < this.idList.length; i++) {
              if (this.idList[i].status == 'APPROVED') {
                this.accountNoList.push(this.idList[i].accountId);
              }
            }

            console.log('accountNoList :: ', this.accountNoList);

            if (this.accountNoList.length <= 1) {
              // this.cashwithdrawForm.controls.accountNumber.patchValue(this.accountNoList[0]);
              this.flag1 = false; // this.getData(this.accountNoList[0]);

              this.cashwithdrawForm.controls.accountNumber.setValue(this.accountNoList[0]);
            } else {
              this.cashwithdrawForm.controls.accountNumber.setValue(this.accountNoList[0]);
              this.flag1 = true;
            } //  this.cashwithdrawForm.controls.accountNumber.setValue(defaultId);
            // this.cashwithdrawForm.controls.accountType.setValue(defaultId);


            this.cashwithdrawForm.controls.accountCurrency.setValue(custype.accountCurrency);
            this.cashwithdrawForm.controls.accountBranch.setValue(this.branch); //this.cashwithdrawForm.controls.transactionAmount.setValue(custype.amount);
            //  this.cashwithdrawForm.controls.accountType.setValue(custype.accountType);

            console.log("AccountCurrency", custype.accountCurrency);
            this.selected = custype.accountCurrency;
            this.curr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["getCurrencySymbol"])(custype.accountCurrency, "narrow");
            this.cashwithdrawForm.controls.transactionCurrency.setValue(custype.accountCurrency);
            this.currencyImage = 'currency-flag-' + custype.accountCurrency.toLowerCase();
            console.log('data :: ', this.idList[0]); //  this.accountBal = this.idList[0].amount;

            console.log(this.accountBal);
            localStorage.setItem("AccountBal", this.accountBal); //  this.cashwithdrawForm.controls.accountNumber.setValue(this.idList[0].accountId);

            this.custAmountBal(this.accountNoList[0]);
            this.cashwithdrawForm.controls.accountBranch.setValue(custype.accountBranch);
            this.getChargeDetails(this.accountNoList[0], custype.amount);
          }
        }, {
          key: "getData",
          value: function getData(custNum) {
            this.hideDetails = true;
            var val = this.accountNum1.filter(function (value) {
              return value.accountId == custNum;
            });
            this.idList = _toConsumableArray(this.custAccountData).filter(function (item) {
              return item.accountType === val[0].accountType;
            });
            this.cashwithdrawForm.controls.accountCurrency.setValue(val[0].accountCurrency);
            this.cashwithdrawForm.controls.accountBranch.setValue(this.branch);
            this.selected = val[0].accountCurrency;
            this.curr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["getCurrencySymbol"])(val[0].accountCurrency, "narrow");
            this.cashwithdrawForm.controls.transactionCurrency.setValue(val[0].accountCurrency);
            this.currencyImage = 'currency-flag-' + val[0].accountCurrency.toLowerCase();
            this.accountBal = val[0].amount;
            localStorage.setItem("AccountBal", this.accountBal);
            this.cashwithdrawForm.controls.accountNumber.setValue(val[0].accountId);
            this.custAmountBal(val[0].accountId);
            this.cashwithdrawForm.controls.accountBranch.setValue(val[0].accountBranch);
            this.getChargeDetails(val[0].accountId, '');
          }
        }, {
          key: "custAmountBal",
          value: function custAmountBal(custNum) {
            var account = this.idList.filter(function (record) {
              if (record.accountId == custNum) {
                return record;
              }
            });
            this.accNum = account[0].accountId;
            this.accountBal = account[0].amount;
            this.selectedAccountInfo = account[0];
            console.log(this.accountBal);
            localStorage.setItem("AccountBal", this.accountBal);
          }
        }, {
          key: "getOTP",
          value: function getOTP(formData, type, cdForm) {
            var _this42 = this;

            this.cashwithDrwValues = formData;
            this.cashwithDrwType = type;
            this.cashwithDrwform = cdForm;
            this.oTpModel.source = 'customer';
            this.oTpModel.source_key = 'mobile';
            this.oTpModel.source_value = this.phonenum;
            var amount = 50000;
            var transamountwithoutcomma = this.cashwithDrwValues.transactionAmount.replace(/,/g, "");
            console.log(transamountwithoutcomma);

            if (transamountwithoutcomma > amount) {
              this.apiService.getOtp(this.oTpModel).subscribe(function (otpResp) {
                if (otpResp) {
                  _this42.openDialogOTP(_this42.phonenum);

                  _this42.snack.open("An OTP has been sent to the Registered Mobile Number.", "", {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                  });
                }
              });
            } else {
              this.getOTPforSave(this.cashwithDrwValues, this.cashwithDrwType, this.cashwithDrwform);
            }
          }
        }, {
          key: "openDialogOTP",
          value: function openDialogOTP(numbr) {
            var _this43 = this;

            var dialogRef = this.dialog.open(_otp_verify_otp_verify_component__WEBPACK_IMPORTED_MODULE_9__["OtpVerifyComponent"], {
              data: {
                number: numbr,
                type: "numbr"
              },
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (submit) {
              console.log("submit", submit);

              if (submit) {
                _this43.getOTPforSave(_this43.cashwithDrwValues, _this43.cashwithDrwType, _this43.cashwithDrwform);
              }
            });
          }
        }, {
          key: "getOTPforSave",
          value: function getOTPforSave(formData, type, cdForm) {
            var _this44 = this;

            var denominationData = {};
            var denominationDataArray = [];

            if (this.denomRequired == 'yes') {
              for (var i = 0; i < this.denomCodeArray.length; i++) {
                if (cdForm.value[this.denomCodeArray[i].key]) {
                  // denominationData.transactionId = this.cashdepositFor;
                  denominationData.denominationKey = this.denomCodeArray[i].value;
                  denominationData.denominationValue = +cdForm.value[this.denomCodeArray[i].key];
                  denominationData.currency = this.cashwithdrawForm.value.transactionCurrency; // denominationData.amountAvailiable = 15200 - (cdForm.value[this.denomCodeArray[i].key] * this.denomCodeArray[i].value);

                  denominationDataArray.push(denominationData);
                  console.log(denominationDataArray);
                  denominationData = {};
                }
              }
            }

            if (this.custValidation == "New Customer") {
              this.accountNum = formData.accountNumber;
              formData.customerId = this.custmerID ? this.custmerID : 0;
              formData.accountCurrency = formData.accountCurrency;
              formData.transactionCurrency = formData.transactionCurrency;
              formData.transactionAmount = formData.transactionAmount.replace(/,/g, '');
              formData.productCode = this.productCode;
              formData.tokenOrigin = this.tokenOrigin;
              formData.accountBalance = this.accountBal;

              if (this.denomRequired == 'yes') {
                formData.denomination = denominationDataArray;
              }
            }

            if (this.appointmentId && this.appointmentId.data) {
              formData.transactionId = this.appointmentId.data.transactionId;
              formData.transactionStatus = this.appointmentId.data.transactionStatus;
            }

            formData.customerId = this.custmerID ? this.custmerID : 0;
            formData.transactionBranch = this.transBranch;
            formData.transactionAmount = formData.transactionAmount.replace(/,/g, '');
            formData.accountType = formData.accountType;
            formData.accountNumber = this.accountNumber;
            formData.holderName = formData.holderName;
            formData.productCode = this.productCode;
            formData.tokenOrigin = this.tokenOrigin;
            formData.accountBalance = this.accountBal;
            console.log(formData.transactionId, formData.transactionStatus);
            console.log("before api call :: ", formData);
            this.apiService.saveofCashwithdraw(formData).subscribe(function (cashWithdrawResp) {
              console.log("Response Success, Data Saved", cashWithdrawResp);
              _this44.cashWithdrawResponse = cashWithdrawResp;
              _this44.tokenNum = _this44.cashWithdrawResponse.tokenNumber;
              _this44.estimatedTime = _this44.cashWithdrawResponse.estimatedWaitTime;
              localStorage.setItem("tokenNumer", _this44.tokenNum);
              localStorage.setItem("estimatedTiming", _this44.estimatedTime);
              _this44.enableContinue = false;

              if (_this44.cashWithdrawResponse) {
                _this44.dialogService.tokenGenerationDialog();
              }
            });
          }
        }, {
          key: "goToServiceScreens",
          value: function goToServiceScreens() {
            if (this.appointmentId) {
              if (this.appointmentId.data.appointmentId) {
                this.router.navigateByUrl('/sessions/login');
                localStorage.removeItem("FromLogin");
                localStorage.removeItem("TransactionType");
                localStorage.removeItem("customerId");
                localStorage.removeItem("phonenumFromLogin");
                localStorage.removeItem("customerValidation");
                localStorage.removeItem("otpPhoneNum");
                localStorage.removeItem("AccountBal");
                localStorage.removeItem("AccountNumber");
                localStorage.removeItem("ProductCode");
                localStorage.removeItem("tokenNumer");
                localStorage.removeItem("estimatedTiming");
                localStorage.removeItem("userId");
                localStorage.removeItem("scannerData");
                localStorage.removeItem("custholderName");
              }
            } else {
              this.router.navigateByUrl('/others/services');
            }
          }
        }, {
          key: "goToAuthenticate",
          value: function goToAuthenticate() {
            this.dialogService.authenticationDialog();
          }
        }, {
          key: "onSaveofCashWithdraw",
          value: function onSaveofCashWithdraw(form, type, cdForm) {
            var _this45 = this;

            form.transactionBranch = this.transBranch;

            if (this.qrData) {
              if (this.qrData.transactionBranch) {
                this.apiService.fetchBranchInfoByBranchName(this.qrData.transactionBranch).subscribe(function (response) {
                  _this45.qrBranchCode = response;
                });
              }
            }

            var denominationData = {};
            var denominationDataArray = [];

            if (this.denomRequired == 'yes') {
              for (var i = 0; i < this.denomCodeArray.length; i++) {
                if (cdForm.value[this.denomCodeArray[i].key]) {
                  // denominationData.transactionId = this.cashdepositFor;
                  denominationData.denominationKey = this.denomCodeArray[i].value;
                  denominationData.denominationValue = +cdForm.value[this.denomCodeArray[i].key];
                  denominationData.currency = this.cashwithdrawForm.value.transactionCurrency; // denominationData.amountAvailiable = 15200 - (cdForm.value[this.denomCodeArray[i].key] * this.denomCodeArray[i].value);

                  denominationDataArray.push(denominationData);
                  console.log(denominationDataArray);
                  denominationData = {};
                }
              }
            }

            form.tokenBranch = "KN";

            if (!this.ifQRvariable) {
              this.accountNum = JSON.stringify(this.selectedAccountInfo.accountId);
              form.transactionAmount = form.transactionAmount.replace(/,/g, '');
              localStorage.setItem("AccountNumber", this.accountNum);
              localStorage.setItem("ProductCode", this.productCode);
              form.customerId = this.custID;
              form.transactionCurrency = form.transactionCurrency;
              form.accountNumber = this.selectedAccountInfo.accountId;
              form.productCode = this.productCode;
              form.tokenOrigin = this.tokenOrigin;
              form.accountBalance = this.accountBal;
              form.accountType = form.accountType;

              if (this.denomRequired == 'yes') {
                form.denomination = denominationDataArray;
              }
            } else {
              form.customerId = this.custID;
              form.accountType = form.accountType; // form.accountNumber = this.selectedAccountInfo.accountId

              form.accountNumber = form.accountNumber;
              form.holderName = form.holderName;
              form.accountCurrency = form.accountCurrency;
              form.transactionCurrency = form.transactionCurrency;
              form.transactionAmount = form.transactionAmount;
              form.productCode = this.productCode;
              form.tokenOrigin = this.tokenOrigin;

              if (this.denomRequired == 'yes') {
                form.denomination = denominationDataArray;
              }

              if (this.qrData) {
                if (this.qrData.transactionBranch) {
                  form.tokenBranch = this.qrBranchCode.transactionBranch;
                }
              }

              form.accountBalance = this.accountBal;
            }

            if (this.appointmentId && this.appointmentId.data) {
              form.transactionId = this.appointmentId.data.transactionId;
              form.transactionStatus = this.appointmentId.data.transactionStatus;
            }

            console.log(form.transactionId, form.transactionStatus); // form.totalAmount = form.totalAmount.replace(/,/g, '');

            console.log("before api call :: ", form);
            this.apiService.saveofCashDeposit(form).subscribe(function (cashWithdrawResp) {
              console.log("Response Success, Data Saved", cashWithdrawResp);
              _this45.cashWithdrawResponse = cashWithdrawResp;
              _this45.tokenNum = _this45.cashWithdrawResponse.tokenNumber;
              _this45.estimatedTime = _this45.cashWithdrawResponse.estimatedWaitTime;
              localStorage.setItem("tokenNumer", _this45.tokenNum);
              localStorage.setItem("estimatedTiming", _this45.estimatedTime);
              _this45.enableContinue = false;

              if (_this45.cashWithdrawResponse) {
                _this45.dialogService.tokenGenerationDialog();
              }
            }); //   this.tokenObjects.productCode = this.productCode;
            //   this.tokenObjects.accountNumber = form.accountNumber;
            //   console.log(this.tokenObjects.accountNumber);
            //   if(this.tokenObjects.productCode !== null || this.tokenObjects.accountNumber !==null){
            //   this.apiService.generateToken(this.tokenObjects).subscribe(tokenResp=>{
            //     console.log( "Token Generated", tokenResp);
            //     this.tokResponse = tokenResp;
            //     if(this.tokResponse){
            //       this.tokenNum = this.tokResponse.tokenNumber;
            //       this.estimatedTime = this.tokResponse.estimatedWaitTime;
            //       localStorage.setItem("tokenNumer",this.tokenNum);
            //       localStorage.setItem("estimatedTiming",this.estimatedTime);
            //       form.tokenNo = this.tokenNum;
            //       form.customerId = this.ls.getItem("customerId");
            //       this.apiService.saveofCashDeposit(form).subscribe(cashWithdrawResp=>{
            //         console.log( "Response Success, Data Saved", cashWithdrawResp);
            //         this.cashWithdrawResponse = cashWithdrawResp;
            //         console.log(this.cashWithdrawResponse);
            //         // this.cashwithdrawForm.reset();
            //         this.enableContinue=false;
            //         // this.ngOnInit();
            //         this.dialogService.tokenGenerationDialog();
            //       });
            //     }
            //   });
            // }
          }
        }, {
          key: "checkValue",
          value: function checkValue(event) {
            if (event.target.value < 0) {
              event.target.value = 0;
            }
          }
        }, {
          key: "OnInput",
          value: function OnInput(event) {
            this.transAmt = event.target.value;
            console.log(event.target.value);
            this.totalAmount = 0; // this.denomRequired='yes';
            // comma separator using changeDetector

            var savedInput = this.transAmount; // this.transAmount = '';
            // this.changeDef.detectChanges();

            var lastCharIsPoint = false;

            if (savedInput.charAt(savedInput.length - 1) === '.') {
              lastCharIsPoint = true;
            }

            var num = savedInput.replace(/[^0-9.]/g, '');
            this.transAmt = Number(num) || '';
            this.transAmount = this.transAmt.toLocaleString('en-IN');

            if (lastCharIsPoint) {
              this.transAmount = this.transAmount.concat('.');
            }

            this.changeDef.detectChanges();
            this.balance = localStorage.getItem("AccountBal");

            if (parseFloat(this.balance) < parseFloat(this.transAmt)) {
              console.log("Bigger");
              this.snack.open("Transaction Amount should not exceed than Account Balance", 'OK', {
                duration: 2000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
              this.enableContinue = false;
            } else {
              this.enableContinue = true;
            }

            this.totalTransAmount = Number(this.transAmt) + Number(this.chargeDetails ? this.chargeDetails[0].amount : '');
            this.cashwithdrawForm.controls.totalTransactionAmount.setValue(this.totalTransAmount);
            this.cdr.markForCheck();
            this.cdr.detectChanges();
          }
        }, {
          key: "clicked",
          value: function clicked(event) {// console.log(event);
          }
        }, {
          key: "addCurrencyImage",
          value: function addCurrencyImage(currency) {
            return currency.toLowerCase();
          }
        }, {
          key: "onCountryChange",
          value: function onCountryChange(country) {
            var currency = country.currencyCode;
            this.currencyImage = 'currency-flag-' + currency.toLowerCase();
          }
        }, {
          key: "accountCurrencyImage",
          value: function accountCurrencyImage(accountCurrency) {
            return accountCurrency ? 'currency-flag-' + accountCurrency.toLowerCase() : '';
          }
        }, {
          key: "omit_number",
          value: function omit_number(event) {
            var key;
            key = event.charCode;
            return key > 47 && key < 58;
          }
        }, {
          key: "totalAmountValue",
          value: function totalAmountValue(cdForm) {
            this.a = this.cashwithdrawForm.value.transactionAmount;
            this.a = this.a.replace(/\,/g, ''); // 1125, but a string, so convert it to number

            this.a = parseInt(this.a, 10);
            this.cashwithdrawForm.value.totalAmount = (cdForm.value.count2000 ? cdForm.value.count2000 * 2000 : 0) + (cdForm.value.count500 ? cdForm.value.count500 * 500 : 0) + (cdForm.value.count200 ? cdForm.value.count200 * 200 : 0) + (cdForm.value.count100 ? cdForm.value.count100 * 100 : 0) + (cdForm.value.count50 ? cdForm.value.count50 * 50 : 0) + (cdForm.value.count20 ? cdForm.value.count20 * 20 : 0) + (cdForm.value.count10 ? cdForm.value.count10 * 10 : 0) + (cdForm.value.count1 ? cdForm.value.count1 * 1 : 0);
            this.cashwithdrawForm.value.totalAmount = this.cashwithdrawForm.value.totalAmount;
            console.log(this.cashwithdrawForm.value.totalAmount);
            this.transamount = this.cashwithdrawForm.value.transactionAmount;
            this.totalAmount = this.cashwithdrawForm.value.totalAmount.toLocaleString('en-IN');
            console.log("tran", this.transAmount);
            console.log("tot", this.totalAmount);

            if (this.transamount != this.totalAmount) {
              this.enableBtn = false;
            } else {
              this.enableBtn = true;
            }

            if (this.transamount > this.totalAmount || this.transamount < this.totalAmount) {
              this.enableBtn1 = true;
            } else {
              this.enableBtn1 = false;
            }

            this.cashwithdrawForm.controls.totalAmount.setValue(this.cashwithdrawForm.value.totalAmount);
          }
        }, {
          key: "cashWithdrawlData",
          value: function cashWithdrawlData() {
            var _this46 = this;

            this.apiService.getAppointmentId(this.appointmentId.data.appointmentId).subscribe(function (resp) {
              console.log("resptest", resp);
              _this46.cashData = resp.data;
              _this46.custID = resp.data.customerId;
              _this46.ifQRvariable = true;
              _this46.accountCurrency = resp.accountCurrency;
              _this46.accountBal = resp.data.accountBalance;
              _this46.userName = resp.data.holderName;

              _this46.cashwithdrawForm.controls.accountBalance.setValue(_this46.accountBal);

              _this46.cashwithdrawForm.controls.holderName.setValue(_this46.userName);

              _this46.cashwithdrawForm.controls.accountType.setValue(resp.data.accountType);

              _this46.cashwithdrawForm.controls.accountBranch.setValue(resp.data.accountBranch);

              _this46.cashwithdrawForm.controls.accountNumber.setValue(resp.data.accountNumber);

              _this46.getChargeDetails(resp.data.accountNumber, resp.data.transactionAmount);

              _this46.cashwithdrawForm.controls.accountCurrency.setValue(resp.data.accountCurrency);

              _this46.cashwithdrawForm.controls.transactionCurrency.setValue(resp.data.transactionCurrency);

              _this46.cashwithdrawForm.controls.transactionAmount.setValue(resp.data.transactionAmount);

              _this46.currencyImage = 'currency-flag-' + resp.data.accountCurrency.toLowerCase();
              _this46.currencyImage = 'currency-flag-' + resp.data.transactionCurrency.toLowerCase();
            }); // this.denomRequired='yes';
          }
        }, {
          key: "getChargeDetails",
          value: function getChargeDetails(accountId, amount) {
            var _this47 = this;

            this.apiService.fetchChargeDetails(accountId).subscribe(function (resp) {
              console.log(resp);
              _this47.chargeDetails = resp;

              _this47.cashwithdrawForm.controls.totalChargeAmount.setValue(_this47.chargeDetails ? _this47.chargeDetails[0].amount : '');
            });

            if (this.cashData) {
              setTimeout(function () {
                _this47.totalTransAmount = Number(_this47.cashData.transactionAmount) + Number(_this47.chargeDetails[0].amount);

                _this47.cashwithdrawForm.controls.totalTransactionAmount.setValue(_this47.totalTransAmount);
              }, 1000);
              this.cdr.markForCheck();
              this.cdr.detectChanges();
            } else {
              console.log(this.chargeDetails);
              amount = 0;
              console.log(amount);
              setTimeout(function () {
                _this47.totalTransAmount = Number(amount) + Number(_this47.chargeDetails ? _this47.chargeDetails[0].amount : '');
                console.log(_this47.totalTransAmount);

                _this47.cashwithdrawForm.controls.totalTransactionAmount.setValue(_this47.totalTransAmount);
              }, 1000);
              this.cdr.markForCheck();
              this.cdr.detectChanges();
            } // console.log(this.totalTransAmount);

          }
        }, {
          key: "getBankInformation",
          value: function getBankInformation(branchCode) {
            var _this48 = this;

            this.apiService.fetchBankInfoByBranchCode(branchCode).subscribe(function (resp) {
              console.log(resp);
              _this48.denomRequired = resp.denomRequired;

              if (resp.denomRequired == 'yes') {
                _this48.enableBtn = false;
                _this48.enableBtn1 = false;
              }
            });
          }
        }, {
          key: "formatAmount",
          value: function formatAmount(amount) {
            // amount=amount.toString();
            // var lastThree = amount.substring(amount.length - 3);
            // var otherNumbers = amount.substring(0,amount.length-3);
            // if(otherNumbers != '')
            //     lastThree = ',' + lastThree;
            // return String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ lastThree;
            // return String(amount).replace(en-IN,',');
            if (amount) {
              return amount && amount.toString().split('.')[0].length > 3 ? amount.toString().substring(0, amount.toString().split('.')[0].length - 3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + amount.toString().substring(amount.toString().split('.')[0].length - 3) : amount.toString();
            }
          }
        }, {
          key: "demonreset",
          value: function demonreset() {
            if (this.a) {
              this.cdForm.resetForm();
              this.enableBtn1 = false;
            }
          }
        }]);

        return CashWithdrawalComponent;
      }();

      CashWithdrawalComponent.ɵfac = function CashWithdrawalComponent_Factory(t) {
        return new (t || CashWithdrawalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
      };

      CashWithdrawalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CashWithdrawalComponent,
        selectors: [["app-cash-withdrawal"]],
        viewQuery: function CashWithdrawalComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cdForm = _t.first);
          }
        },
        inputs: {
          tokenResp: "tokenResp"
        },
        decls: 86,
        vars: 25,
        consts: [[1, "fullcard"], ["fxLayout", "row"], ["fxFlex", "cashwithdrawForm.get('transactionAmount').value > 0? 70% : 100%"], [1, "h1"], [2, "color", "grey", "padding-right", "4px"], [2, "padding-left", "4px"], [1, "chequecard", "topView"], [2, "padding", "2%"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["class", "backIcon", 3, "click", 4, "ngIf"], [1, "card-title"], [1, "full-width", 2, "padding", "0% 0% 3% 2%"], [3, "formGroup"], ["fxLayout", "column", "fxLayoutGap", "3%", "fxLayoutAlign", "space-between none"], ["fxLayout", "row wrap", 1, "flex-container", "stretch"], ["fxFlex", "25%", "fxFlex.xs", "100%", 4, "ngIf"], ["fxFlex", "23%", "fxFlex.xs", "100%"], [1, "accountBranch"], [1, "inputCard"], ["matInput", "", "type", "text", "class", "full-width", "formControlName", "accountBranch", 3, "readonly", 4, "ngIf"], [4, "ngIf"], ["fxFlex", "25%", "fxFlex.xs", "100%"], [1, "totalAmount"], ["fxLayout", "row wrap", 1, "full-width"], ["fxFlex", "25%"], [3, "class", 4, "ngIf"], ["fxFlex", "75%"], ["matInput", "", "type", "text", "class", "full-width", "style", "font-size:110%", "formControlName", "accountCurrency", 3, "readonly", 4, "ngIf"], ["matInput", "", "type", "text", "style", "font-size:110%", "class", "full-width", "formControlName", "accountCurrency", 3, "readonly", 4, "ngIf"], ["fxFlex", "25.5%", "fxFlex.xs", "100%", 4, "ngIf"], ["matInput", "", "readonly", "", "formControlName", "totalChargeAmount", 1, "full-width"], ["matInput", "", "type", "text", "readonly", "", "onlyNumber", "", "formControlName", "totalTransactionAmount"], [1, "tooltip"], ["width", "80%", 3, "src"], [1, "tooltiptext"], [1, "totalAmount", "textcolor", 2, "margin-top", "10px", "margin-bottom", "6px"], [1, "totalAmount", "textcolor"], [1, "totalAmount", "textcolor", 2, "margin-right", "10px"], ["fxFlex", "30%", 4, "ngIf"], ["fxLayout", "row wrap", "id", "buttonDiv", 1, "flex-container", "stretch"], ["fxFlex", "30%", "fxFlex.xs", "100%", 1, "paddingCls"], ["mat-flat-button", "", "class", "buttonCancel full-width", 3, "click", 4, "ngIf"], ["fxFlex", "70%", "fxFlex.xs", "100%", "class", "paddingCls", 4, "ngIf"], [1, "backIcon", 3, "click"], ["matInput", "", "type", "text", "class", "full-width", "formControlName", "accountType", 3, "readonly", 4, "ngIf"], ["formControlName", "accountType", "style", "background-color: #f9fafb;", "placeholder", "Select Account Type", 3, "selectionChange", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "accountType", 1, "full-width", 3, "readonly"], ["formControlName", "accountType", "placeholder", "Select Account Type", 2, "background-color", "#f9fafb", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "type", "text", "formControlName", "accountNumber", 1, "full-width", 3, "change"], ["class", "totalAmount", 4, "ngIf"], ["class", "totalAmount", 3, "readonly", 4, "ngIf"], [1, "totalAmount", 3, "readonly"], ["matInput", "", "type", "text", "class", "full-width", "formControlName", "accountNumber", 3, "readonly", 4, "ngIf"], ["formControlName", "accountNumber", "style", "background-color: #f9fafb; ", "placeholder", "Select Account Number", 3, "selectionChange", 4, "ngIf"], ["class", "totalAmount", "style", "margin-left:-15px", 4, "ngIf"], ["class", "totalAmount", "formControlName", "holderName", 3, "readonly", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "accountNumber", 1, "full-width", 3, "readonly"], ["formControlName", "accountNumber", "placeholder", "Select Account Number", 2, "background-color", "#f9fafb", 3, "selectionChange"], [1, "totalAmount", 2, "margin-left", "-15px"], ["formControlName", "holderName", 1, "totalAmount", 3, "readonly"], ["matInput", "", "type", "text", "formControlName", "accountBranch", 1, "full-width", 3, "readonly"], ["matInput", "", "type", "text", "formControlName", "accountCurrency", 1, "full-width", 2, "font-size", "110%", 3, "readonly"], ["matInput", "", "type", "text", "formControlName", "transactionCurrency", 3, "readonly", 4, "ngIf"], ["formControlName", "transactionCurrency", "placeholder", "Select Transaction Currency", "id", "testSelect", "style", "background-color: #f9fafb;font-weight: bold;", 3, "disabled", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "transactionCurrency", 3, "readonly"], ["formControlName", "transactionCurrency", "placeholder", "Select Transaction Currency", "id", "testSelect", 2, "background-color", "#f9fafb", "font-weight", "bold", 3, "disabled"], ["style", "font-size:110%", 3, "value", "click", 4, "ngFor", "ngForOf"], [2, "font-size", "110%", 3, "value", "click"], ["fxFlex", "15%"], ["fxFlex", "85%"], ["formControlName", "transactionCurrency", "placeholder", "Select Transaction Currency", "id", "testSelect", 2, "background-color", "#f9fafb", "font-weight", "bold"], ["fxFlex", "25.5%", "fxFlex.xs", "100%"], ["matInput", "", "formControlName", "transactionAmount", 1, "full-width", 3, "ngModel", "value", "ngModelChange", "keyup", "focus"], ["myRef", ""], ["matInput", "", "type", "text", "formControlName", "transactionAmount", 3, "readonly", 4, "ngIf"], ["matInput", "", "class", "full-width", "formControlName", "transactionAmount", 3, "ngModel", "value", "readonly", "ngModelChange", "keyup", "focus", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "transactionAmount", 3, "readonly"], ["matInput", "", "formControlName", "transactionAmount", 1, "full-width", 3, "ngModel", "value", "readonly", "ngModelChange", "keyup", "focus"], ["fxFlex", "30%"], ["cdForm", "ngForm"], [1, "border-align"], ["fxLayout", "row", 1, "pH10", "full-width"], [1, "title-Font"], ["id", "denominationDiv", 1, "pH10", "full-width"], ["class", "paddingclass", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "paddingclass", "fxLayoutAlign", "start center", 4, "ngIf"], ["fxLayout", "row wrap", 1, "pH10", "full-width"], ["fxFlex", "53%", "fxFlex.xs", "100%"], ["matInput", "", "name", "totalAmount", "readonly", "", 1, "full-width", "inputClass", 3, "ngModel", "ngModelChange"], [1, "pl10", 2, "width", "150%"], ["fxLayoutAlign", "center center", 1, "paddingclass"], ["fxFlex", "20%"], [1, "quantityClass", "text-small"], ["fxFlex", "10%"], [1, "operationTypeClass", "text-small"], ["fxFlex", "70%"], ["type", "text", "matInput", "", "name", "count2000", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count2000", ""], [1, "pl10"], ["fxLayoutAlign", "start center", 1, "paddingclass"], ["type", "text", "matInput", "", "name", "count500", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count500", ""], ["type", "text", "matInput", "", "name", "count200", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count200", ""], ["type", "text", "matInput", "", "name", "count100", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count100", ""], ["type", "text", "matInput", "", "name", "count50", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count50", ""], ["type", "text", "matInput", "", "name", "count20", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count20", ""], ["type", "text", "matInput", "", "name", "count10", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["count10", ""], ["type", "text", "matInput", "", "name", "count1", "ngModel", "", 1, "full-width", "inputClass", 3, "keyup", "keypress"], ["mat-flat-button", "", 1, "buttonCancel", "full-width", 3, "click"], ["fxFlex", "70%", "fxFlex.xs", "100%", 1, "paddingCls"], ["mat-flat-button", "", 1, "buttonNext", "full-width", 3, "disabled", "click"]],
        template: function CashWithdrawalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h6", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, ">");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cash Withdrawal");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card-title", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CashWithdrawalComponent_mat_icon_15_Template, 2, 0, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Cash Withdrawal");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "form", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, CashWithdrawalComponent_div_26_Template, 6, 2, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, CashWithdrawalComponent_div_27_Template, 8, 2, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CashWithdrawalComponent_div_28_Template, 9, 4, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CashWithdrawalComponent_div_29_Template, 5, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-hint", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Account Branch*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, CashWithdrawalComponent_input_34_Template, 1, 1, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, CashWithdrawalComponent_input_35_Template, 1, 1, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, CashWithdrawalComponent_mat_error_36_Template, 2, 0, "mat-error", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-hint", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Account Currency*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, CashWithdrawalComponent_div_46_Template, 1, 3, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, CashWithdrawalComponent_div_47_Template, 1, 3, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, CashWithdrawalComponent_input_49_Template, 1, 1, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, CashWithdrawalComponent_input_50_Template, 1, 1, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, CashWithdrawalComponent_div_51_Template, 10, 5, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, CashWithdrawalComponent_div_52_Template, 10, 4, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, CashWithdrawalComponent_div_53_Template, 8, 6, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, CashWithdrawalComponent_div_54_Template, 7, 3, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-hint", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Total Charge Amount*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-hint", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Total Transaction Amount*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, CashWithdrawalComponent_div_78_Template, 24, 10, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, CashWithdrawalComponent_button_83_Template, 2, 0, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, CashWithdrawalComponent_div_84_Template, 3, 1, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, CashWithdrawalComponent_div_85_Template, 3, 1, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.cashwithdrawForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cashwithdrawForm.get("accountBranch").touched && !ctx.cashwithdrawForm.get("accountBranch").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ifQRvariable);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.ifQRvariable);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/info.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Transaction Amount:", ctx.cashwithdrawForm.get("transactionAmount").value, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Charge Amount:", ctx.cashwithdrawForm.get("totalChargeAmount").value, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Transaction Amount:", ctx.cashwithdrawForm.get("totalTransactionAmount").value, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.denomRequired == "yes" && (ctx.cashwithdrawForm.get("transactionAmount").value > 0 || ctx.transAmt > 0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showAccountNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showAccountNum);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]],
        styles: [".fullcard[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  height: 110%;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-top: 8px;\n}\n\n.h1[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding-top: 24px;\n  padding-left: 1%;\n}\n\n.h2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding-top: 24px;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin-top: 50px;\n  margin-left: 26px;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  min-width: 200px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  background-color: #fe6700;\n  color: #fff;\n  text-align: start;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  top: -49px;\n  left: 130%;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  right: 100%;\n  margin-top: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent #fe6700 transparent transparent;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.totalAmount[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #304156;\n  padding-left: 10px;\n}\n\n.textcolor[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  height: auto;\n  border-radius: 10px;\n}\n\n.chequecard1[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  height: 90%;\n  width: 100%;\n  border-radius: 10px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 24px;\n}\n\n.outer-Div[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.content-Div[_ngcontent-%COMP%] {\n  padding: 6%;\n}\n\n.paddingright[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.closeDrawerIcon[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n\n.title-Class[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n.paddingCls[_ngcontent-%COMP%] {\n  padding: 0% 2%;\n}\n\n#buttonDiv[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-top: 2%;\n}\n\n#denominationDiv[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto;\n}\n\n.spaceDiv[_ngcontent-%COMP%] {\n  padding-right: 3%;\n}\n\n.spaceUserImage[_ngcontent-%COMP%] {\n  padding-left: 2%;\n  width: 12%;\n}\n\n.user-name-Div[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: bolder;\n  font-family: sans-serif;\n  margin-top: 10px;\n  margin-bottom: -10px;\n}\n\n.title-Font[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  color: #000000;\n  width: 90%;\n  font-weight: bold;\n}\n\n.alignImage[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  float: right;\n}\n\n.token-Div[_ngcontent-%COMP%] {\n  font-size: x-small;\n  color: #7e84a3;\n  font-family: sans-serif;\n}\n\n.token-id-class[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  background-color: #fafafa;\n  border-radius: 4px;\n}\n\n.width100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.details-Div[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.mat-expansion-panel-spacing[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.icon[_ngcontent-%COMP%] {\n  float: right;\n  color: #000000;\n  font-weight: 700;\n}\n\n.btnConfirmClass[_ngcontent-%COMP%] {\n  background-color: #456efe;\n  color: white;\n  border-radius: 20px;\n  width: 120px;\n  font-family: sans-serif;\n  font-size: smaller;\n}\n\n.btnDiv[_ngcontent-%COMP%] {\n  padding-top: 15%;\n}\n\n.btnCancelClass[_ngcontent-%COMP%] {\n  background-color: #f8f8f8 !important;\n  color: #5d5d5d !important;\n  border-radius: 20px !important;\n  width: 120px !important;\n  font-family: sans-serif !important;\n  font-size: smaller !important;\n}\n\n.width50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 940px;\n  align-self: center;\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-top-color: #f5f5f5;\n  margin-left: 2%;\n}\n\n.buttonNext[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-color: #1BCD9D;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.buttonCancel[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border-color: white;\n  background-color: #E3E3E3;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.inputCard[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  box-sizing: border-box;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n  background-color: #F9FAFB;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.pb1[_ngcontent-%COMP%] {\n  padding-bottom: 1%;\n}\n\n.operationTypeClass[_ngcontent-%COMP%] {\n  color: #A1A1A1;\n  margin: auto;\n}\n\n.quantityClass[_ngcontent-%COMP%] {\n  color: #000000;\n  margin: auto;\n  font-weight: 500;\n}\n\n.paddingclass[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n\n.totalAmount[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #102245;\n  padding-left: 10px;\n}\n\n.accountBranch[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #7e84a3;\n  padding-left: 10px;\n}\n\n.inputCard[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 2px 1px -1px #f8f8f8, 0 1px 0 #f8f8f8, 0 5px 8px 0 #e9e9e9;\n}\n\n.topView[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding-top: 0px;\n  padding-bottom: 8px;\n  margin-bottom: 2px;\n}\n\n.border-align[_ngcontent-%COMP%] {\n  margin-top: 45px;\n  height: 530px;\n  border-radius: 10px;\n}\n\n.chargeDetailsTbl[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  border-collapse: collapse;\n  border-radius: 10px;\n}\n\n.chargeDetailsDiv[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.thchargeDetailsTbl[_ngcontent-%COMP%] {\n  background-color: #f2f0f0;\n  color: #968e8e;\n  font-family: sans-serif;\n  text-align: center;\n  border-bottom-style: none;\n}\n\n.tbchargeDetailsTbl[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  font-size: x-small;\n  font-family: sans-serif;\n  text-align: center;\n  color: #726868;\n}\n\n.titleHead[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n[_nghost-%COMP%]     mat-select-country > mat-form-field {\n  width: 100% !important;\n}\n\n[_nghost-%COMP%]     mat-select-country > mat-form-field > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-suffix > mat-icon > svg {\n  margin-bottom: -8px;\n}\n\n[_nghost-%COMP%]     mat-select-country > mat-form-field > div.mat-form-field-wrapper {\n  padding-bottom: 0.8rem;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.readonly-wrapper[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n\n.readonly-wrapper[_ngcontent-%COMP%]   .readonly-block[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2FzaC13aXRoZHJhd2FsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFESjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBT0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFKSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSko7O0FBT0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUpKOztBQU9FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5REFBQTtBQUpKOztBQU1FO0VBQ0UsbUJBQUE7QUFISjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0FBRko7O0FBY0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBWEo7O0FBYUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFYSjs7QUFhQTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtBQVZKOztBQWFFO0VBQ0kseUJBQUE7QUFWTjs7QUFZRTtFQUNJLFdBQUE7QUFUTjs7QUFZRTtFQUNJLG1CQUFBO0FBVE47O0FBWUU7RUFDSSxtQkFBQTtBQVROOztBQVlFO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFUTjs7QUFXRTtFQUNFLGNBQUE7QUFSSjs7QUFtQkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQWhCSjs7QUFrQkE7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7QUFmSjs7QUFpQkU7RUFDSSxpQkFBQTtBQWROOztBQWdCRTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQWJOOztBQWdCRTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFiTjs7QUFnQkU7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFiTjs7QUFnQkU7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFiTjs7QUFpQkU7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQWROOztBQWdCRTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWJOOztBQWVFO0VBQ0ksV0FBQTtBQVpOOztBQWNFO0VBQ0kseUJBQUE7QUFYTjs7QUFhRTtFQUNJLHNCQUFBO0FBVk47O0FBYUU7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBVk47O0FBWUU7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBVE47O0FBV0U7RUFDSSxnQkFBQTtBQVJOOztBQVVFO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0FBUE47O0FBVUU7RUFDSSxVQUFBO0FBUE47O0FBU0U7RUFDSSxZQUFBO0VBQ0Qsa0JBQUE7RUFDQyxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBTk47O0FBUUU7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBTE47O0FBUUU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFMSjs7QUFPRTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7QUFKTjs7QUFPRTtFQUFPLFNBQUE7RUFBUyxVQUFBO0VBQ2QseUJBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUdJO0VBQWEsd0JBQUE7QUFDakI7O0FBQ0U7RUFDSSxrQkFBQTtBQUVOOztBQUNFO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFFTjs7QUFDRTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFTjs7QUFDRTtFQUNJLFdBQUE7QUFFTjs7QUFDRTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRU47O0FBRUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0ksd0VBQUE7QUFDTjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBSUU7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFETjs7QUFJRTtFQUNJLG9CQUFBO0FBRE47O0FBSUU7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFETjs7QUFJRTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUROOztBQUlFO0VBQ0ksb0JBQUE7QUFETjs7QUFLQTtFQUNJLHNCQUFBO0FBRko7O0FBS0E7RUFDSSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksc0JBQUE7QUFGSjs7QUFJQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUFERjs7QUFHQTtFQUNFLDBCQUFBO0FBQUY7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVFO0VBQ0Usb0JBQUE7QUFDSiIsImZpbGUiOiJjYXNoLXdpdGhkcmF3YWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuZnVsbGNhcmR7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAtNSU7XHJcbi8vIH1cclxuLmZ1bGxjYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDExMCU7XHJcbn1cclxuLmJhY2tJY29ue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5oMXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcclxufVxyXG4vLyAuaDF7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogMjRweDtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4vLyB9XHJcbi5oMntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAyJTtcclxufVxyXG4udG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI2cHg7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xyXG4gIH1cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU2NzAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogLTQ5cHg7XHJcbiAgICBsZWZ0OiAxMzAlO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcCAudG9vbHRpcHRleHQ6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZlNjcwMCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIC50b3RhbEFtb3VudHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIGNvbG9yOiAjMzA0MTU2O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cclxufVxyXG4udGV4dGNvbG9ye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuLy8gLmNoZXF1ZWNhcmR7XHJcbi8vICAgICAvLyBtYXJnaW4tdG9wOiAyJTtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuLy8gICAgIG1hcmdpbi1yaWdodDphdXRvOyAgXHJcbi8vICAgICAvLyB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbi8vICAgICBoZWlnaHQ6IDgwJTtcclxuLy8gICAgIC8vIHdpZHRoOiA5MCU7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyB9XHJcbi5jaGVxdWVjYXJke1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5jaGVxdWVjYXJkMXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgIG1hcmdpbi1yaWdodDphdXRvOyAgXHJcbiAgICAvLyB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uY2FyZC10aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbiAgLm91dGVyLURpdntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICB9XHJcbiAgLmNvbnRlbnQtRGl2e1xyXG4gICAgICBwYWRkaW5nOiA2JTtcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRpbmdyaWdodHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlRHJhd2VySWNvbntcclxuICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlLUNsYXNze1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAucGFkZGluZ0Nsc3tcclxuICAgIHBhZGRpbmc6IDAlIDIlO1xyXG59XHJcbi8vICNidXR0b25EaXZ7XHJcbi8vICAgICB3aWR0aDo4MCU7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAtNCU7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuLy8gICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuLy8gICAgIC8vIG1hcmdpbi10b3A6IGF1dG87XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgXHJcbi8vIH1cclxuI2J1dHRvbkRpdntcclxuICAgIHdpZHRoOjgwJTtcclxuICAgIG1hcmdpbi10b3A6MiVcclxufVxyXG4jZGVub21pbmF0aW9uRGl2e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG59XHJcbiAgLnNwYWNlRGl2e1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcclxuICB9XHJcbiAgLnNwYWNlVXNlckltYWdle1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgICB3aWR0aDogMTIlO1xyXG4gIH1cclxuICBcclxuICAudXNlci1uYW1lLURpdntcclxuICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtRm9udHtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5hbGlnbkltYWdle1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC50b2tlbi1EaXZ7XHJcbiAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgICAgY29sb3I6ICM3ZTg0YTM7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAudG9rZW4taWQtY2xhc3N7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgLndpZHRoMTAwe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmRldGFpbHMtRGl2e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gIH1cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1zcGFjaW5ne1xyXG4gICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuaWNvbntcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgLmJ0bkNvbmZpcm1DbGFzc3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NmVmZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgfVxyXG4gIC5idG5EaXZ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNSU7XHJcbiAgfVxyXG4gIC5idG5DYW5jZWxDbGFzc3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogIzVkNWQ1ZCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsZXIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLndpZHRoNTB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5saW5le1xyXG4gICAgICB3aWR0aDogOTQwcHg7XHJcbiAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XHJcbiAgICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgfVxyXG4gIC5idXR0b25OZXh0e1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUJDRDlEO1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uQ2FuY2Vse1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRTNFMztcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5pbnB1dENhcmR7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0IHtib3JkZXI6MDtvdXRsaW5lOjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGQUZCO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGR9XHJcbiAgICBpbnB1dDpmb2N1cyB7b3V0bGluZTpub25lIWltcG9ydGFudDt9XHJcbiAgXHJcbiAgLnBiMXtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gIH1cclxuICBcclxuICAub3BlcmF0aW9uVHlwZUNsYXNze1xyXG4gICAgICBjb2xvcjogI0ExQTFBMTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAucXVhbnRpdHlDbGFzc3tcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZGRpbmdjbGFzc3tcclxuICAgICAgcGFkZGluZzogMiU7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3RhbEFtb3VudHtcclxuICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgICBjb2xvcjogIzEwMjI0NTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgLy8gICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xyXG4gICAgLy8gICBmb250OiBub3JtYWwgbm9ybWFsIG1lZGl1bSAxMnB4LzE0cHggTWFucm9wZTtcclxuICB9XHJcbiAgLmFjY291bnRCcmFuY2h7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBjb2xvcjogIzdlODRhMztcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0Q2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4ICNmOGY4ZjgsXHJcbiAgICAgICAgICAgICAgICAgIDAgMXB4IDAgI2Y4ZjhmOCxcclxuICAgICAgICAgICAgICAgICAgMCA1cHggOHB4IDAgI2U5ZTllOTtcclxuICB9XHJcblxyXG4gIC50b3BWaWV3e1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgfVxyXG4gIC5ib3JkZXItYWxpZ257XHJcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gICAgaGVpZ2h0OjUzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuY2hhcmdlRGV0YWlsc1RibHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNoYXJnZURldGFpbHNEaXZ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAudGhjaGFyZ2VEZXRhaWxzVGJse1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMGYwIDtcclxuICAgICAgY29sb3I6ICM5NjhlOGU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC50YmNoYXJnZURldGFpbHNUYmx7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICM3MjY4Njg7XHJcbiAgfVxyXG5cclxuICAudGl0bGVIZWFke1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG1hdC1zZWxlY3QtY291bnRyeSA+IG1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG1hdC1zZWxlY3QtY291bnRyeSA+IG1hdC1mb3JtLWZpZWxkID4gZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgPiBkaXYubWF0LWZvcm0tZmllbGQtZmxleCA+IGRpdi5tYXQtZm9ybS1maWVsZC1zdWZmaXggPiBtYXQtaWNvbiA+IHN2Z3tcclxuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBtYXQtc2VsZWN0LWNvdW50cnkgPiBtYXQtZm9ybS1maWVsZCA+IGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuOHJlbTtcclxufVxyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxufVxyXG4ucmVhZG9ubHktd3JhcHBlciB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxuICBcclxuICAucmVhZG9ubHktd3JhcHBlciAucmVhZG9ubHktYmxvY2sge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CashWithdrawalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-cash-withdrawal',
            templateUrl: './cash-withdrawal.component.html',
            styleUrls: ['./cash-withdrawal.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }];
        }, {
          tokenResp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          cdForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['cdForm']
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=views-others-others-module-es5.js.map