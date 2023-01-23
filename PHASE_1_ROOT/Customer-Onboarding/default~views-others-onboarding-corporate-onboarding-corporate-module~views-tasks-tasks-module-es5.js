(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-others-onboarding-corporate-onboarding-corporate-module~views-tasks-tasks-module"], {
    /***/
    "1aja":
    /*!********************************************************************************************************!*\
      !*** ./src/app/views/others/onboarding-corporate/contact-information/contact-information.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: ContactInformationComponent */

    /***/
    function aja(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactInformationComponent", function () {
        return ContactInformationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../corporate-onboarding.service */
      "JVXa");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");

      function ContactInformationComponent_div_11_legend_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "legend", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Company Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_11_legend_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "legend", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mailing Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_11_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter Valid Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_11_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter Valid Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_11_mat_option_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r20, " ");
        }
      }

      function ContactInformationComponent_div_11_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Country is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_11_mat_error_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter valid Zip code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_11_mat_error_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter valid ZipCode!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_11_mat_option_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r21.stateName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r21.stateName, " ");
        }
      }

      function ContactInformationComponent_div_11_mat_error_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "State is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_11_mat_option_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var City_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", City_r22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", City_r22, " ");
        }
      }

      function ContactInformationComponent_div_11_mat_error_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "City is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactInformationComponent_div_11_legend_2_Template, 2, 0, "legend", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactInformationComponent_div_11_legend_3_Template, 2, 0, "legend", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Address Line 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ContactInformationComponent_div_11_mat_error_11_Template, 3, 0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Address Line 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContactInformationComponent_div_11_mat_error_17_Template, 3, 0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ContactInformationComponent_div_11_Template_mat_select_selectionChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var i_r7 = ctx.index;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.getStateName($event.value, true, i_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ContactInformationComponent_div_11_mat_option_25_Template, 2, 2, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ContactInformationComponent_div_11_mat_error_26_Template, 3, 0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Zip Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ContactInformationComponent_div_11_Template_input_keypress_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25._keyPress($event);
          })("keyup", function ContactInformationComponent_div_11_Template_input_keyup_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var i_r7 = ctx.index;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.isAllSameDigit($event, i_r7);
          })("change", function ContactInformationComponent_div_11_Template_input_change_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var item_r6 = ctx.$implicit;
            var i_r7 = ctx.index;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.getCityandStateByZipcode(item_r6.controls["country"].value, $event.target.value, i_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ContactInformationComponent_div_11_mat_error_32_Template, 3, 0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ContactInformationComponent_div_11_mat_error_33_Template, 3, 0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-select", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ContactInformationComponent_div_11_Template_mat_select_selectionChange_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var i_r7 = ctx.index;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.onStateChange(i_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ContactInformationComponent_div_11_mat_option_39_Template, 2, 2, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ContactInformationComponent_div_11_mat_error_40_Template, 3, 0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-select", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ContactInformationComponent_div_11_Template_mat_select_selectionChange_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var i_r7 = ctx.index;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.onCityChange(i_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ContactInformationComponent_div_11_mat_option_46_Template, 2, 2, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ContactInformationComponent_div_11_mat_error_47_Template, 3, 0, "mat-error", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;
          var i_r7 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r7 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r7 == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.get("address1").touched && !item_r6.get("address1").valid || item_r6.get("address1").touched && item_r6.get("address1").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.get("address2").touched && !item_r6.get("address2").valid || item_r6.get("address2").touched && item_r6.get("address2").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.arrayCountry);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.get("country").touched && !item_r6.get("country").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.get("zipCode").touched && !item_r6.get("zipCode").valid && !item_r6.controls["zipCode"].hasError("minLength"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAllSameDigitVal && i_r7 == ctx_r0.zipIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.arrayState[i_r7]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.get("state").touched && !item_r6.get("state").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.arrayCity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.get("city").touched && !item_r6.get("city").valid);
        }
      }

      function ContactInformationComponent_mat_error_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter correct Email id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter correct Email id!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_mat_error_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "mobile Number is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_mat_error_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \xA0 \xA0 Please Enter Correct Mobile Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_mat_error_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \xA0 \xA0 Please Enter Correct Landline Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ContactInformationComponent = /*#__PURE__*/function () {
        function ContactInformationComponent(router, ls, formBuilder, corporateService, apiService, cdr, snack) {
          _classCallCheck(this, ContactInformationComponent);

          this.router = router;
          this.ls = ls;
          this.formBuilder = formBuilder;
          this.corporateService = corporateService;
          this.apiService = apiService;
          this.cdr = cdr;
          this.snack = snack;
          this.arrayState = [];
          this.arrayCountry = [];
          this.arrayCity = [];
          this.addressTypeList = ['Company', 'Mailing'];
          this.isAllSameDigitVal = false;
          this.contactFormGroup = formBuilder.group({
            corporateId: [''],
            primaryEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            secondaryEmail: [''],
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            landLine: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength]],
            isMailingAddressSame: ['YES'],
            corporateAddress: formBuilder.array([])
          }); // this.corporateService.stepReady(this.contactFormGroup, 'three')

          this.getCountryName("country");
          this.getAllAuthCities();
        }

        _createClass(ContactInformationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            console.log("testttt");
            this.corporateService.corporateAccountIdVal.subscribe(function (corporateId) {
              console.log('corporateId :: ', _this.corporateId = corporateId);

              _this.contactFormGroup.get('corporateId').setValue(corporateId);
            });

            if (this.corporateId) {
              this.getCoropratedetails(this.corporateId);
            }

            var mailAddress = this.contactFormGroup.get('isMailingAddressSame');

            if (mailAddress === 'YES') {
              this.contactFormGroup.get('corporateAddress').get('addressType').setValue('Company');
            }

            this.addAddress();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.ls.getItem('corporateId')) {
              this.getCoropratedetails(this.ls.getItem('corporateId'));
            }
          }
        }, {
          key: "getAddressData",
          get: function get() {
            return this.contactFormGroup.get('corporateAddress');
          }
        }, {
          key: "addAddress",
          value: function addAddress() {
            this.getAddressData.push(this.formBuilder.group({
              addressType: [''],
              address1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(".*[a-zA-Z].*")]],
              address2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(".*[a-zA-Z].*")]],
              state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
              country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            }));
          }
        }, {
          key: "_keyPress",
          value: function _keyPress(event) {
            var pattern = /[0-9]/;
            var inputChar = String.fromCharCode(event.charCode);

            if (!pattern.test(inputChar)) {
              event.preventDefault();
            }
          }
        }, {
          key: "radioSelection",
          value: function radioSelection(event) {
            console.log('event :: ', event);

            if (event === 'NO') {
              console.log('inside if');
              this.addAddress();
              this.cdr.detectChanges();
              this.cdr.markForCheck();
            } else {
              if (this.getAddressData.length > 1) {
                this.getAddressData.controls.pop();
                this.cdr.detectChanges();
                this.cdr.markForCheck();
              }
            }
          }
        }, {
          key: "getCountryName",
          value: function getCountryName(key) {
            var _this2 = this;

            this.apiService.getAllCountries().subscribe(function (data) {
              for (var i = 0; i < data.length; i++) {
                if (data[i].authStatus === 'A') {
                  _this2.arrayCountry.push(data[i].countryName);
                }
              }
            });
          }
        }, {
          key: "getStateName",
          value: function getStateName(country, isAdd, index) {
            var _this3 = this;

            if (isAdd) {
              this.contactFormGroup.get('corporateAddress').controls[index].get('state').setValue('');
              this.contactFormGroup.get('corporateAddress').controls[index].get('city').setValue('');
              this.contactFormGroup.get('corporateAddress').controls[index].get('zipCode').setValue('');
            }

            this.arrayState[index] = [];
            this.arrayCity[index] = [];
            this.apiService.getAllCountries().subscribe(function (data) {
              for (var i = 0; i < data.length; i++) {
                if (data[i].countryName == country) {
                  _this3.apiService.getStateByCountryId(data[i].id).subscribe(function (resp) {
                    _this3.arrayState[index] = resp;
                  });

                  break;
                }
              }
            });
          } // getCityName(state: any, index) {
          //   console.log(state)
          //   this.apiService.getDropDownValues1("city",state).subscribe((data) => {
          //     this.arrayCity[index] = data;
          //     console.log("-->", this.arrayCity)
          //   });
          // }

        }, {
          key: "getAllAuthCities",
          value: function getAllAuthCities() {
            var _this4 = this;

            this.apiService.getAuthorizedCityInfo().subscribe(function (res) {
              return res.map(function (r) {
                return _this4.arrayCity.push(r.cityName);
              });
            });
          }
        }, {
          key: "onStateChange",
          value: function onStateChange(index) {
            this.contactFormGroup.get('corporateAddress').controls[index].get('zipCode').setValue('');
            this.contactFormGroup.get('corporateAddress').controls[index].get('city').setValue('');
          }
        }, {
          key: "onCityChange",
          value: function onCityChange(index) {
            this.contactFormGroup.get('corporateAddress').controls[index].get('zipCode').setValue('');
          }
        }, {
          key: "getCoropratedetails",
          value: function getCoropratedetails(id) {
            var _this5 = this;

            this.apiService.getCoropratedetails(id).subscribe(function (details) {
              console.log(details.customerInfo[0].userAddress[0]);

              _this5.getStateName(details.customerInfo[0].userAddress[0].country, 0); // this.getCityName(details.customerInfo[0].userAddress[0].state,0)


              if (details) {
                _this5.contactFormGroup.patchValue(details);

                _this5.contactFormGroup.get('corporateAddress').patchValue(details.customerInfo[0].corporateAddress);

                console.log(details.customerInfo[0]);
                console.log(details.customerInfo[0].corporateAddress);
              }
            });
          }
        }, {
          key: "letterOnly",
          value: function letterOnly(event) {
            var charCode = event.keyCode;
            if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123 || charCode == 8) return true;else return false;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(contactFormGroup) {
            var _this6 = this;

            console.log('form :: ', contactFormGroup);
            console.log('form :: ', contactFormGroup.isMailingAddressSame);

            if (contactFormGroup.isMailingAddressSame == 'NO') {
              contactFormGroup.corporateAddress[0].addressType = 'Company';
              contactFormGroup.corporateAddress[1].addressType = 'Mailing';
            }

            if (contactFormGroup.isMailingAddressSame == 'YES') {
              contactFormGroup.corporateAddress[0].addressType = 'Company';
            }

            console.log(contactFormGroup.corporateAddress[0].addressType);
            this.corporateService.saveOrUpdateCorporateAccountInfo(contactFormGroup).subscribe(function (data) {
              console.log('data :: ', data);

              if (data != null) {
                _this6.corporateService.sendCorporateAccountId(data.corporateId);

                _this6.snack.open('Contact Information Saved' + ' !', 'OK', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });
              }

              _this6.next();
            });
          }
        }, {
          key: "previous",
          value: function previous() {
            this.corporateService.sendDisableMatTab({
              index: 1
            });
          }
        }, {
          key: "next",
          value: function next() {
            this.corporateService.sendDisableMatTab({
              index: 3
            });
            this.corporateService.setFinishFlag({
              finishFlag: false
            });
          }
        }, {
          key: "isAllSameDigit",
          value: function isAllSameDigit(event, index) {
            this.zipIndex = index;
            var count = 0,
                number = event.target.value;

            if (number != '') {
              for (var i = 0; i < number.length; i++) {
                if (0 == number[i]) {
                  count++;
                }
              }

              if (count == number.length) {
                this.isAllSameDigitVal = true;
              } else {
                this.isAllSameDigitVal = false;
              }
            } else {
              this.isAllSameDigitVal = false;
            }
          }
        }, {
          key: "getCityandStateByZipcode",
          value: function getCityandStateByZipcode(countryName, zipcode, index) {
            var _this7 = this;

            if (countryName && zipcode.length >= 6) {
              this.apiService.fetchStateCityByZipcode(countryName, zipcode).subscribe(function (res) {
                if (res) {
                  _this7.contactFormGroup.get('corporateAddress').controls[index].get('state').setValue(res.stateName);

                  _this7.contactFormGroup.get('corporateAddress').controls[index].get('city').setValue(res.cityName);
                } else {
                  _this7.snack.open("Entered Zipcode is not exists", "OK", {
                    duration: 4000,
                    verticalPosition: "top",
                    horizontalPosition: "right"
                  });
                }
              });
            }
          }
        }]);

        return ContactInformationComponent;
      }();

      ContactInformationComponent.ɵfac = function ContactInformationComponent_Factory(t) {
        return new (t || ContactInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
      };

      ContactInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactInformationComponent,
        selectors: [["app-contact-information"]],
        decls: 52,
        vars: 9,
        consts: [["ngNativeValidate", "", 3, "formGroup"], [1, "full-width"], [2, "padding", "1rem 0", "background-color", "#F1F1F4"], [2, "padding", "0 4.3rem"], [2, "border-radius", "0px"], ["fxLayout", "column", "fxLayoutAlign", "space-around start", 1, "full-width"], [1, "full-width", 2, "padding", "1rem 1rem"], [2, "font-size", "18px", "margin-left", "10px"], [2, "width", "70px", "border-bottom", "7px solid #456EFE", "left", "40px", "border-radius", "30px"], ["formArrayName", "corporateAddress"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [2, "border-top", "1px solid lightgray", "margin-left", "20px", "margin-right", "20px"], ["visible", "true"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxLayoutGap", "20px"], ["fxFlex", "50", 1, "form-group"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "id", "forPrimaryEmail", "formControlName", "primaryEmail", "type", "email", "pattern", "^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$", "required", ""], [4, "ngIf"], ["matInput", "", "id", "forSecondaryEmail", "formControlName", "secondaryEmail", "type", "email", "pattern", "^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$"], ["matInput", "", "id", "forMobileNumber", "formControlName", "mobileNumber", "maxLength", "10", "minlength", "10", "onlyNumber", "", "required", "", 3, "keypress"], ["matInput", "", "id", "forLandLine", "formControlName", "landLine", "maxLength", "10", "minLength", "10", "onlyNumber", "", 3, "keypress"], [1, "button"], ["mat-button", "", 1, "Back", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "disabled", "ngClass", "click"], [3, "formGroupName"], ["visible", "true", 4, "ngIf"], ["matInput", "", "formControlName", "address1", "id", "forAddress1", "required", ""], ["matInput", "", "formControlName", "address2", "id", "forAddress2", "required", ""], ["fxFlex", "100", "fxLayoutGap", "10px"], ["fxFlex", "25", 1, "form-group"], ["id", "forcountry", "formControlName", "country", "required", "", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["minlength", "6", "maxlength", "10", "matInput", "", "id", "forZipCode", "onlyNumber", "", "formControlName", "zipCode", "required", "", 3, "keypress", "keyup", "change"], ["id", "forstate", "formControlName", "state", "required", "", 3, "selectionChange"], ["id", "forCity", "formControlName", "city", "required", "", 3, "selectionChange"], [3, "value"]],
        template: function ContactInformationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ContactInformationComponent_div_11_Template, 48, 13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "fieldset", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "legend", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Primary Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ContactInformationComponent_mat_error_22_Template, 3, 0, "mat-error", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Secondary Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ContactInformationComponent_mat_error_28_Template, 3, 0, "mat-error", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "fieldset", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "legend", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contact Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Mobile Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ContactInformationComponent_Template_input_keypress_38_listener($event) {
              return ctx._keyPress($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ContactInformationComponent_mat_error_39_Template, 3, 0, "mat-error", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ContactInformationComponent_mat_error_40_Template, 3, 0, "mat-error", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Landline Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ContactInformationComponent_Template_input_keypress_45_listener($event) {
              return ctx._keyPress($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ContactInformationComponent_mat_error_46_Template, 3, 0, "mat-error", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactInformationComponent_Template_button_click_48_listener() {
              return ctx.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactInformationComponent_Template_button_click_50_listener() {
              return ctx.onSubmit(ctx.contactFormGroup.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactFormGroup.get("corporateAddress")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactFormGroup.get("primaryEmail").touched && !ctx.contactFormGroup.get("primaryEmail").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactFormGroup.get("secondaryEmail").touched && !ctx.contactFormGroup.get("secondaryEmail").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactFormGroup.get("mobileNumber").touched && !ctx.contactFormGroup.get("mobileNumber").valid && !ctx.contactFormGroup.controls["mobileNumber"].hasError("minLength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactFormGroup.controls["mobileNumber"].value == "0000000000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactFormGroup.controls["landLine"].value == "0000000000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.contactFormGroup.get("isMailingAddressSame").valid || !ctx.contactFormGroup.valid)("ngClass", !ctx.contactFormGroup.valid ? "disableNext" : "enableNext");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]],
        styles: [".button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -7%;\n  width: 150px;\n  color: #5D5D5D;\n  background-color: white;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -11%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.disableNext[_ngcontent-%COMP%] {\n  color: #3d18e4 !important;\n}\n\n.enableNext[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: grey;\n}\n\nlegend[_ngcontent-%COMP%] {\n  width: auto;\n  color: gray;\n  font-size: 20px;\n  padding-right: 20px;\n  font-family: 'Montserrat', Courier, monospace;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgray;\n  border-bottom: 0px solid lightgray;\n  border-right: 0px solid lightgray;\n  border-left: 0px solid lightgray;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n}\n\n.hint[_ngcontent-%COMP%] {\n  color: #0F0F0F;\n  opacity: 70%;\n  font: normal normal medium 16px/22px Manrope;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbnRhY3QtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NFO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBdkN0Qjs7QUF5Q0U7RUFFRSx5QkFBd0I7RUFDeEIsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7QUF2Q3ZCOztBQXlDRTtFQUNFLHlCQUF3QjtFQUN4QixrQkFBaUI7RUFDakIsWUFBVztFQUNYLHlCQUFpQztFQUNqQyxZQUFXO0VBQ1gsbUJBQW1CO0FBdEN2Qjs7QUF3Q0U7RUFDRSx5QkFBa0M7QUFyQ3RDOztBQXVDQTtFQUNJLHVCQUF1QjtBQXBDM0I7O0FBd0NFO0VBSUUsa0JBQWtCO0FBeEN0Qjs7QUE0Q0U7RUFDRSxhQUFhO0FBekNqQjs7QUE0Q0U7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBekMxQjs7QUE0Q0U7RUFFQyxXQUFVO0FBMUNiOztBQTZDRTtFQUNFLFdBQVc7RUFFWCxXQUFXO0VBRVgsZUFBZTtFQUVmLG1CQUFtQjtFQUNuQiw2Q0FBNkM7QUE3Q2pEOztBQWdERTtFQUNFLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMsaUNBQWlDO0VBQ2pDLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQTdDcEI7O0FBZ0RFO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWiw0Q0FBMkM7QUE3Qy9DIiwiZmlsZSI6ImNvbnRhY3QtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuaGVhZCB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBcclxuLy8gICAgIC8vICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4vLyAgIH1cclxuLy8gICAuYmFzaWMtY29udGFpbmVyIHtcclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICB9XHJcbi8vICAgLm1haW4taGVhZCB7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDYlO1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4vLyAgIH1cclxuLy8gICAuYm9yZGVye1xyXG4vLyAgICAgbWFyZ2luLXRvcDotMTBweDtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OjE1MHB4O1xyXG4gIFxyXG4gICBcclxuLy8gICAgIGhlaWdodDogMXB4O1xyXG4vLyB9XHJcbi8vIC50b3BcclxuLy8ge1xyXG4vLyAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbi8vIH1cclxuLy8gbWF0LWxhYmVsXHJcbi8vIHtcclxuLy8gICBtYXJnaW4tbGVmdDoxM3B4O1xyXG5cclxuLy8gfVxyXG4vLyBie1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4vLyB9XHJcbi8vIGlucHV0IHtib3JkZXI6MDtvdXRsaW5lOjA7XHJcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGR9XHJcbi8vICAgaW5wdXQ6Zm9jdXMge291dGxpbmU6bm9uZSFpbXBvcnRhbnQ7fVxyXG5cclxuLy8gICBtYXQtcmFkaW8tYnV0dG9uXHJcbi8vICAge1xyXG4vLyAgICAgcGFkZGluZzogMC4xcmVtXHJcbi8vICAgfVxyXG4gIC5idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDExJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE0JTtcclxuICB9XHJcbiAgLkJhY2t7XHJcblxyXG4gICAgbWFyZ2luOjEycHggMHB4IDEycHggMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6LTclO1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBjb2xvcjogIzVENUQ1RDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICB9XHJcbiAgLk5leHR7XHJcbiAgICBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6LTExJTtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LDEwNiwyNDUpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG4gIH1cclxuICAuZGlzYWJsZU5leHR7XHJcbiAgICBjb2xvcjogcmdiKDYxLCAyNCwgMjI4KSAhaW1wb3J0YW50O1xyXG4gIH0gXHJcbi5lbmFibGVOZXh0e1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgLy8gcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAgIC8vIGJveC1zaGFkb3c6IDAgMnB4IDJweCBnYWluc2Jvcm8gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIC8vIGxpbmUtaGVpZ2h0OiAyLjEyNTtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAubWF0LWZvY3VzZWQgLnBsYWNlaG9sZGVyIHtcclxuICAgLy8gY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICBjb2xvcjpncmV5O1xyXG4gIH1cclxuICBcclxuICBsZWdlbmQge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgLy8gb3BhY2l0eTogNzAlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gIH1cclxuICBcclxuICBmaWVsZHNldCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1yaWdodDogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1sZWZ0OiAwcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhpbnQge1xyXG4gICAgY29sb3I6ICMwRjBGMEY7XHJcbiAgICBvcGFjaXR5OiA3MCU7ICAgIFxyXG4gICAgZm9udDpub3JtYWwgbm9ybWFsIG1lZGl1bSAxNnB4LzIycHggTWFucm9wZTtcclxuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactInformationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact-information',
            templateUrl: './contact-information.component.html',
            styleUrls: ['./contact-information.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Gx8H":
    /*!****************************************************************************************************!*\
      !*** ./src/app/views/others/onboarding-corporate/proof-of-identity/proof-of-identity.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: MY_FORMATS, ProofOfIdentityComponent */

    /***/
    function Gx8H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function () {
        return MY_FORMATS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProofOfIdentityComponent", function () {
        return ProofOfIdentityComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../corporate-onboarding.service */
      "JVXa");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      "DejY");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");

      function ProofOfIdentityComponent_mat_error_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Incorporation Number is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ProofOfIdentityComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please Enter Valid Incorporation Number!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ProofOfIdentityComponent_mat_error_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please Select Date of Issue");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ProofOfIdentityComponent_mat_error_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please Select Date of Expiry");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ProofOfIdentityComponent_mat_radio_group_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-group", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-radio-button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProofOfIdentityComponent_mat_radio_group_46_Template_mat_radio_button_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.radioSelection($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r8 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", x_r8)("checked", x_r8 == ctx_r6.proofOfIdentityFormGroup.value.isAnotherIdProofRequired);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", x_r8, " ");
        }
      }

      function ProofOfIdentityComponent_div_47_div_1_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var idType_r19 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r15.isDocumentOptionDisabled(idType_r19))("value", idType_r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", idType_r19, " ");
        }
      }

      function ProofOfIdentityComponent_div_47_div_1_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please Select Id Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ProofOfIdentityComponent_div_47_div_1_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please Enter Id Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ProofOfIdentityComponent_div_47_div_1_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Id Number should be a combination of minimum of 6 alphanumeric characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ProofOfIdentityComponent_div_47_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "fieldset", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Id Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function ProofOfIdentityComponent_div_47_div_1_Template_mat_select_valueChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var i_r14 = ctx.index;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r20.changeValue2($event, i_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProofOfIdentityComponent_div_47_div_1_mat_option_9_Template, 2, 3, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProofOfIdentityComponent_div_47_div_1_mat_error_10_Template, 3, 0, "mat-error", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Id Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProofOfIdentityComponent_div_47_div_1_mat_error_16_Template, 3, 0, "mat-error", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProofOfIdentityComponent_div_47_div_1_mat_error_17_Template, 3, 0, "mat-error", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProofOfIdentityComponent_div_47_div_1_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var item_r13 = ctx.$implicit;
            var i_r14 = ctx.index;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r22.deleteDocument(item_r13, i_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "delete_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r13 = ctx.$implicit;
          var i_r14 = ctx.index;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.idTypeList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r13.get("idType").touched && !item_r13.get("idType").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(item_r13.get("idType").value == "Pan card") && item_r13.get("idNumber").touched && !item_r13.get("idNumber").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r13.get("idType").value == "Pan card" && item_r13.get("idNumber").touched && !item_r13.get("idNumber").valid);
        }
      }

      function ProofOfIdentityComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProofOfIdentityComponent_div_47_div_1_Template, 21, 5, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProofOfIdentityComponent_div_47_Template_button_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.addDocument($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " ADD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.proofOfIdentityFormGroup.get("idProofList")["controls"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r7.selectedOptions.length == 3);
        }
      }

      var _c0 = function _c0() {
        return ["YES", "NO"];
      };

      var MY_FORMATS = {
        parse: {
          dateInput: 'LL'
        },
        display: {
          dateInput: 'DD/MM/YYYY',
          monthYearLabel: 'YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'YYYY'
        }
      };

      var ProofOfIdentityComponent = /*#__PURE__*/function () {
        function ProofOfIdentityComponent(router, formBuilder, ls, corporateService, cdr, snack, apiService) {
          var _this8 = this;

          _classCallCheck(this, ProofOfIdentityComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.ls = ls;
          this.corporateService = corporateService;
          this.cdr = cdr;
          this.snack = snack;
          this.apiService = apiService;
          this.minDate = new Date();
          this.validDate = new Date();
          this.maxDate = new Date();
          this.selectedOptions = [];
          this.selectedDocumentTypes = [];

          this.isDocumentOptionDisabled = function (value) {
            return _this8.selectedOptions.includes(value);
          };

          this.validDate.setDate(this.validDate.getDate());
          this.proofOfIdentityFormGroup = this.formBuilder.group({
            corporateId: [''],
            incorporationNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[a-zA-Z0-9]{0,35}$")]],
            dateOfIssue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            dateOfExpiry: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            isAnotherIdProofRequired: ['NO'],
            idProofList: this.formBuilder.array([])
          }); // this.corporateService.stepReady(this.proofOfIdentityFormGroup, 'four')
        }

        _createClass(ProofOfIdentityComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.corporateService.corporateAccountIdVal.subscribe(function (corporateId) {
              console.log('corporateId :: ', _this9.corporateId = corporateId);

              _this9.proofOfIdentityFormGroup.get('corporateId').setValue(corporateId);

              if (_this9.corporateId) {
                _this9.getCoropratedetails(_this9.corporateId);
              }
            });
            this.getIdType(); // this.addDocument();
          }
        }, {
          key: "addIdProof",
          value: function addIdProof() {
            return this.formBuilder.group({
              idType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              idNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.ls.getItem('corporateId')) {
              this.getCoropratedetails(this.ls.getItem('corporateId'));
            }
          }
        }, {
          key: "radioSelection",
          value: function radioSelection(event) {
            console.log('event :: ', event);
            var controls = this.proofOfIdentityFormGroup.get('idProofList');

            if (event === 'NO') {
              controls.clear();
              this.cdr.detectChanges();
              this.cdr.markForCheck();
            } else {
              controls.push(this.addIdProof());
              controls.controls[0].get('idType').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
              controls.controls[0].get('idNumber').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
              controls.updateValueAndValidity();
              this.cdr.detectChanges();
              this.cdr.markForCheck();
            }
          }
        }, {
          key: "getIdType",
          value: function getIdType() {
            var _this10 = this;

            this.apiService.getDropDownValues("document_name").subscribe(function (re) {
              _this10.idTypeList = re;
            });
          }
        }, {
          key: "changeValue2",
          value: function changeValue2(value, index) {
            var _this11 = this;

            var controls = this.proofOfIdentityFormGroup.get('idProofList');

            if (value == "Pan card") {
              controls.controls[index].get('idNumber').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){6,6}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
              controls.updateValueAndValidity();
            } else {
              controls.controls[index].get('idNumber').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
              controls.updateValueAndValidity();
            }

            if (this.selectedDocumentTypes[index]) {
              this.selectedOptions = this.selectedOptions.filter(function (val) {
                return val !== _this11.selectedDocumentTypes[index];
              });
            }

            this.selectedDocumentTypes[index] = value;
            this.selectedOptions.push(value);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(directorFormGroup) {
            var _this12 = this;

            console.log("directorFormGroup BEFORE:: ", directorFormGroup);
            var obj = {};
            Object.keys(directorFormGroup).map(function (key, index) {
              if (key === 'dateOfIssue' || key === 'dateOfExpiry') {
                directorFormGroup[key] = moment__WEBPACK_IMPORTED_MODULE_5__(directorFormGroup[key]).format('YYYY-MM-DD');
                obj[key] = directorFormGroup[key];
              } else {
                if (key != 'isAnotherIdProofRequired' && key != 'idProofList') {
                  obj[key] = directorFormGroup[key];
                }
              }
            });
            console.log("directorFormGroup after:: ", obj);
            this.corporateService.saveOrUpdateCorporateAccountInfo(obj).subscribe(function (data) {
              console.log('data :: ', data);

              if (data != null) {
                _this12.snack.open("Proof of identity saved" + ' !', 'OK', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });

                _this12.next();

                _this12.cdr.markForCheck();
              } else {
                _this12.snack.open('Not able to connect to server!', 'INTERNAL SERVER ERROR', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });
              }
            }, function (error) {
              console.log('error resp :: ', error);

              _this12.snack.open("".concat(error.error.message, " "), 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            });
          }
        }, {
          key: "getCoropratedetails",
          value: function getCoropratedetails(e) {
            var _this13 = this;

            this.apiService.getCoropratedetails(e).subscribe(function (details) {
              console.log(details);

              if (details) {
                _this13.proofOfIdentityFormGroup.patchValue(details);
              }
            });
          }
        }, {
          key: "previous",
          value: function previous() {
            this.corporateService.sendDisableMatTab({
              index: 2
            });
          }
        }, {
          key: "next",
          value: function next() {
            this.corporateService.sendDisableMatTab({
              index: 4
            });
            this.corporateService.setFinishFlag({
              finishFlag: false
            });
          }
        }, {
          key: "deleteDocument",
          value: function deleteDocument(item, i) {
            console.log('delete record :: ', item, ' index :: ', i);
            this.getDocumentList.removeAt(i);
          }
        }, {
          key: "getDocumentList",
          get: function get() {
            return this.proofOfIdentityFormGroup.get('idProofList');
          }
        }, {
          key: "addDocument",
          value: function addDocument() {
            this.getDocumentList.push(this.formBuilder.group({
              idType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              idNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
            }));
          }
        }]);

        return ProofOfIdentityComponent;
      }();

      ProofOfIdentityComponent.ɵfac = function ProofOfIdentityComponent_Factory(t) {
        return new (t || ProofOfIdentityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      ProofOfIdentityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProofOfIdentityComponent,
        selectors: [["app-proof-of-identity"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"],
          useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MomentDateAdapter"],
          deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_LOCALE"]]
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_FORMATS"],
          useValue: MY_FORMATS
        }])],
        decls: 53,
        vars: 15,
        consts: [["ngNativeValidate", "", 3, "formGroup"], [1, "full-width"], [2, "padding", "1rem 0", "background-color", "#F1F1F4"], [2, "padding", "0 4.3rem"], [2, "border-radius", "0px"], ["fxLayout", "column", "fxLayoutAlign", "space-around start", 1, "full-width"], [1, "full-width", 2, "padding", "1rem 1rem"], [2, "font-size", "18px", "margin-left", "10px"], [2, "width", "70px", "border-bottom", "7px solid #456EFE", "left", "40px", "border-radius", "30px"], [2, "border-top", "1px solid lightgray", "margin-left", "20px", "margin-right", "20px"], ["visible", "true"], ["fxLayout", "row wrap", 1, "top"], ["fxFlex", "100", "fxLayoutGap", "30px"], ["fxFlex", "30", 1, "form-group", 2, "padding-left", "22px"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "incorporationNumber", "id", "forincorporationNumber", "maxLength", "35", "minLength", "0", "onlyNumber", "", "required", ""], [4, "ngIf"], ["fxFlex", "30", 1, "form-group"], ["matInput", "", "id", "forIddateOfIssue", "readonly", "", "formControlName", "dateOfIssue", "required", "", 3, "matDatepicker", "max"], ["matSuffix", "", 3, "for"], ["dateOfIssue", ""], ["matInput", "", "id", "forIddateOfExpiry", "readonly", "", "formControlName", "dateOfExpiry", "required", "", 3, "matDatepicker", "min"], ["dateOfExpiry", ""], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxLayoutGap", "20px"], ["fxFlex", "28"], [2, "padding-left", "10px"], ["fxFlex", "50"], ["formControlName", "isAnotherIdProofRequired", 4, "ngFor", "ngForOf"], ["formArrayName", "idProofList", 4, "ngIf"], [1, "button"], ["mat-button", "", 1, "Back", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "disabled", "click"], ["formControlName", "isAnotherIdProofRequired"], [3, "value", "checked", "change"], ["formArrayName", "idProofList"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "disabled", "click"], [3, "formGroupName"], ["formControlName", "idType", "id", "forIdType", 3, "valueChange"], [3, "disabled", "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "idNumber", "id", "forIdNumber", "maxLength", "12", "minLength", "6"], ["mat-button", "", 3, "click"], [2, "color", "tomato"], [3, "disabled", "value"]],
        template: function ProofOfIdentityComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Proof Of Identity");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "fieldset", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "legend", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Certificate of Incorporation Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Incorporation Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProofOfIdentityComponent_mat_error_20_Template, 3, 0, "mat-error", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ProofOfIdentityComponent_mat_error_21_Template, 3, 0, "mat-error", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Date of Issue");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "mat-datepicker-toggle", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "mat-datepicker", null, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ProofOfIdentityComponent_mat_error_30_Template, 3, 0, "mat-error", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Date of Expiry");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "mat-datepicker-toggle", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "mat-datepicker", null, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ProofOfIdentityComponent_mat_error_39_Template, 3, 0, "mat-error", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Do you want add another proof of ID? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ProofOfIdentityComponent_mat_radio_group_46_Template, 4, 3, "mat-radio-group", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, ProofOfIdentityComponent_div_47_Template, 6, 2, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProofOfIdentityComponent_Template_button_click_49_listener() {
              return ctx.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProofOfIdentityComponent_Template_button_click_51_listener() {
              return ctx.onSubmit(ctx.proofOfIdentityFormGroup.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.proofOfIdentityFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.proofOfIdentityFormGroup.get("incorporationNumber").touched && ctx.proofOfIdentityFormGroup.get("incorporationNumber").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.proofOfIdentityFormGroup.get("incorporationNumber").hasError("pattern"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r2)("max", ctx.maxDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.proofOfIdentityFormGroup.get("dateOfIssue").touched && !ctx.proofOfIdentityFormGroup.get("dateOfIssue").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r4)("min", ctx.validDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.proofOfIdentityFormGroup.get("dateOfExpiry").touched && !ctx.proofOfIdentityFormGroup.get("dateOfExpiry").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.proofOfIdentityFormGroup.get("isAnotherIdProofRequired").value == "YES");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.proofOfIdentityFormGroup.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]],
        styles: [".head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 6%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\n.border[_ngcontent-%COMP%] {\n  margin-top: -10px;\n  margin-left: 150px;\n  height: 1px;\n}\n\n.top[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  margin-left: 13px;\n}\n\nb[_ngcontent-%COMP%] {\n  margin-left: 14px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\nmat-radio-button[_ngcontent-%COMP%] {\n  padding: 0.1rem;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -7%;\n  width: 150px;\n  color: #5D5D5D;\n  background-color: white;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -11%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.hint[_ngcontent-%COMP%] {\n  color: gray;\n  font: normal normal medium 16px/22px Manrope;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nlegend[_ngcontent-%COMP%] {\n  width: auto;\n  color: gray;\n  font-size: 20px;\n  padding-right: 20px;\n  font-family: 'Montserrat', Courier, monospace;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgray;\n  border-bottom: 0px solid lightgray;\n  border-right: 0px solid lightgray;\n  border-left: 0px solid lightgray;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n}\n\n  .mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon {\n  width: 1.7em !important;\n  margin-left: -10px !important;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb29mLW9mLWlkZW50aXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUlBO0VBQ0UsWUFBWTtBQURkOztBQUlBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFEckI7O0FBSUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBR2xCLFdBQVc7QUFIYjs7QUFNQTtFQUNFLGlCQUFpQjtBQUhuQjs7QUFNQTtFQUNFLGlCQUFpQjtBQUhuQjs7QUFPQTtFQUNFLGlCQUFpQjtBQUpuQjs7QUFPQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQ0Y7QUFMQTs7QUFPQTtFQUNFLHdCQUF3QjtBQUoxQjs7QUFPQTtFQUNFLGVBQ0Y7QUFMQTs7QUFPQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUpwQjs7QUFPQTtFQUVFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBTHJCOztBQVFBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQW1DO0VBQ25DLFlBQVk7RUFDWixtQkFBbUI7QUFMckI7O0FBUUE7RUFFRSxXQUFXO0VBQ1gsNENBQTJDO0FBTjdDOztBQVNBO0VBSUUsa0JBQWtCO0FBVHBCOztBQWFBO0VBQ0UsYUFBYTtBQVZmOztBQWFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQVZ4Qjs7QUFhQTtFQUNFLFdBQVc7RUFFWCxXQUFXO0VBRVgsZUFBZTtFQUVmLG1CQUFtQjtFQUNuQiw2Q0FBNkM7QUFiL0M7O0FBZ0JBO0VBQ0UsK0JBQStCO0VBQy9CLGtDQUFrQztFQUNsQyxpQ0FBaUM7RUFDakMsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBYmxCOztBQWdCQTtFQUNFLHVCQUF1QjtFQUN2Qiw2QkFBNkI7QUFiL0I7O0FBZ0JBO0VBQ0Usa0JBQWtCO0FBYnBCIiwiZmlsZSI6InByb29mLW9mLWlkZW50aXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAvLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmJhc2ljLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ubWFpbi1oZWFkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDYlO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuXHJcblxyXG4gIGhlaWdodDogMXB4O1xyXG59XHJcblxyXG4udG9wIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxubWF0LWxhYmVsIHtcclxuICBtYXJnaW4tbGVmdDogMTNweDtcclxuXHJcbn1cclxuXHJcbmIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMC4xcmVtXHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDExJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNCU7XHJcbn1cclxuXHJcbi5CYWNrIHtcclxuXHJcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDtcclxuICBtYXJnaW4tbGVmdDogLTclO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBjb2xvcjogIzVENUQ1RDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG59XHJcblxyXG4uTmV4dCB7XHJcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xMSU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgMTA2LCAyNDUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG59XHJcblxyXG4uaGludCB7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAxLjNyZW07XHJcbiAgY29sb3I6IGdyYXk7ICAgXHJcbiAgZm9udDpub3JtYWwgbm9ybWFsIG1lZGl1bSAxNnB4LzIycHggTWFucm9wZTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgLy8gYm94LXNoYWRvdzogMCAycHggMnB4IGdhaW5zYm9ybyAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAvLyBsaW5lLWhlaWdodDogMi4xMjU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5sZWdlbmQge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIC8vIG9wYWNpdHk6IDcwJSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1sZWZ0OiAwcHggc29saWQgbGlnaHRncmF5O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1kZWZhdWx0LWljb24ge1xyXG4gIHdpZHRoOiAxLjdlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWZvY3VzZWQgLnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProofOfIdentityComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-proof-of-identity',
            templateUrl: './proof-of-identity.component.html',
            styleUrls: ['./proof-of-identity.component.scss'],
            providers: [{
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"],
              useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MomentDateAdapter"],
              deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_LOCALE"]]
            }, {
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_FORMATS"],
              useValue: MY_FORMATS
            }]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"]
          }, {
            type: _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "HAfx":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/views/others/onboarding-corporate/onboarding-corporate-main/onboarding-corporate-main.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: OnboardingCorporateMainComponent */

    /***/
    function HAfx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingCorporateMainComponent", function () {
        return OnboardingCorporateMainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../corporate-onboarding.service */
      "JVXa");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _onborading_primary_onborading_primary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../onborading-primary/onborading-primary.component */
      "h31h");
      /* harmony import */


      var _director_details_director_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../director-details/director-details.component */
      "tCF6");
      /* harmony import */


      var _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../contact-information/contact-information.component */
      "1aja");
      /* harmony import */


      var _proof_of_identity_proof_of_identity_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../proof-of-identity/proof-of-identity.component */
      "Gx8H");
      /* harmony import */


      var _other_info_corporate_other_info_corporate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../other-info-corporate/other-info-corporate.component */
      "qazE");

      function OnboardingCorporateMainComponent_app_onborading_primary_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-onborading-primary");
        }
      }

      function OnboardingCorporateMainComponent_app_director_details_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-director-details");
        }
      }

      function OnboardingCorporateMainComponent_app_contact_information_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-contact-information");
        }
      }

      function OnboardingCorporateMainComponent_app_proof_of_identity_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-proof-of-identity");
        }
      }

      function OnboardingCorporateMainComponent_app_other_info_corporate_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-other-info-corporate");
        }
      }

      var OnboardingCorporateMainComponent = /*#__PURE__*/function () {
        function OnboardingCorporateMainComponent(formService, ls) {
          _classCallCheck(this, OnboardingCorporateMainComponent);

          this.formService = formService;
          this.ls = ls;
          this.tabIndex = 0;
          this.finishFlag = true;
        }

        _createClass(OnboardingCorporateMainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.formService.disableMatTabVal.subscribe(function (data) {
              console.log("disabled :: ", data);
            });
            this.formService.getDisableMatTab().subscribe(function (resp) {
              console.log("index", resp.index);
              _this14.tabIndex = resp.index;

              if (sessionStorage.getItem('ClosingCheck') == null) {
                _this14.tabIndex = 0;

                _this14.ls.removeItem('corporateId');

                _this14.assignValuesForTab2(_this14.tabIndex);
              } else {
                if (_this14.ls.getItem('corporateTabIndex')) {
                  _this14.tabIndex = _this14.ls.getItem('corporateTabIndex');
                } else {
                  _this14.tabIndex = 0;
                }

                _this14.formService.getFinishFlag().subscribe(function (resp) {
                  console.log("finish flag", resp.finishFlag);

                  _this14.assignValueFinish(resp.finishFlag);
                });

                if (resp.index === 0) {
                  _this14.assignValuesForTab2(_this14.tabIndex);
                }

                if (resp.index === 1) {
                  _this14.assignValuesForTab2(_this14.tabIndex);
                }

                if (resp.index === 2) {
                  _this14.assignValuesForTab3(_this14.tabIndex);
                }

                if (resp.index === 3) {
                  _this14.assignValuesForTab4(_this14.tabIndex);
                }

                if (resp.index === 4) {
                  _this14.assignValuesForTab5(_this14.tabIndex);
                } // TODO WITH MATTAB DISABLE CUSTOM LATER
                // this.tabGroup._tabs[resp.index].disabled = true;

              }
            });
          }
        }, {
          key: "assignValueFinish",
          value: function assignValueFinish(finishFlag) {
            this.finishFlag = finishFlag;
          }
        }, {
          key: "assignValuesForTab1",
          value: function assignValuesForTab1(tabIndex) {
            this.tab1 = false;
          }
        }, {
          key: "assignValuesForTab2",
          value: function assignValuesForTab2(tabIndex) {
            this.tab2 = false;
          }
        }, {
          key: "assignValuesForTab3",
          value: function assignValuesForTab3(tabIndex) {
            this.tab3 = false;
          }
        }, {
          key: "assignValuesForTab4",
          value: function assignValuesForTab4(tabIndex) {
            this.tab4 = false;
          }
        }, {
          key: "assignValuesForTab5",
          value: function assignValuesForTab5(tabIndex) {
            this.tab5 = false;
          }
        }]);

        return OnboardingCorporateMainComponent;
      }();

      OnboardingCorporateMainComponent.ɵfac = function OnboardingCorporateMainComponent_Factory(t) {
        return new (t || OnboardingCorporateMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_2__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"]));
      };

      OnboardingCorporateMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OnboardingCorporateMainComponent,
        selectors: [["app-onboarding-corporate-main"]],
        decls: 18,
        vars: 11,
        consts: [[1, "head"], [1, "main-head", 2, "color", "#BFBFC1"], [1, "main-head", 2, "padding-top", "0px"], [1, "basic-container"], ["mat-align-tabs", "start", 2, "padding-left", "1px", 3, "selectedIndex", "selectedIndexChange"], ["tabGroup", ""], ["label", "Primary Information", 3, "disabled"], [4, "ngIf"], ["label", "Director Details", 3, "disabled"], ["label", "Contact Information", 3, "disabled"], ["label", "Proof Of Identity", 3, "disabled"], ["label", "Other Information", 3, "disabled"]],
        template: function OnboardingCorporateMainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home>New Customer Onboarding | Corporate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "New Customer Onboarding | Corporate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab-group", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function OnboardingCorporateMainComponent_Template_mat_tab_group_selectedIndexChange_6_listener($event) {
              return ctx.tabIndex = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OnboardingCorporateMainComponent_app_onborading_primary_9_Template, 1, 0, "app-onborading-primary", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OnboardingCorporateMainComponent_app_director_details_11_Template, 1, 0, "app-director-details", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-tab", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OnboardingCorporateMainComponent_app_contact_information_13_Template, 1, 0, "app-contact-information", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-tab", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OnboardingCorporateMainComponent_app_proof_of_identity_15_Template, 1, 0, "app-proof-of-identity", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-tab", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OnboardingCorporateMainComponent_app_other_info_corporate_17_Template, 1, 0, "app-other-info-corporate", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tab1 || ctx.finishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabIndex == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tab2 || ctx.finishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabIndex == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tab3 || ctx.finishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabIndex == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tab4 || ctx.finishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabIndex == 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tab5 || ctx.finishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabIndex == 4);
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _onborading_primary_onborading_primary_component__WEBPACK_IMPORTED_MODULE_5__["OnboradingPrimaryComponent"], _director_details_director_details_component__WEBPACK_IMPORTED_MODULE_6__["DirectorDetailsComponent"], _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_7__["ContactInformationComponent"], _proof_of_identity_proof_of_identity_component__WEBPACK_IMPORTED_MODULE_8__["ProofOfIdentityComponent"], _other_info_corporate_other_info_corporate_component__WEBPACK_IMPORTED_MODULE_9__["OtherInfoCorporateComponent"]],
        styles: [".main-head[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  margin-bottom: 0px;\n  padding-left: 6%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\n.nav-head[_ngcontent-%COMP%] {\n  padding-left: 6%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n  .mat-tab-header {\n  padding-left: 5%;\n  padding-bottom: 0px;\n}\n\n  .egret-blue .mat-stroked-button.mat-button-disabled.mat-button-disabled {\n  color: rgba(0, 0, 0, 0.26) !important;\n}\n\n  .mat-tab-label-content {\n  padding: 0px !important;\n  font-size: 14px !important;\n}\n\n  .mat-tab-label-active {\n  color: #6988f6 !important;\n}\n\n  .mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination {\n  display: none !important;\n}\n\n  .egret-blue .mat-tab-label.mat-tab-disabled, .egret-blue[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG9uYm9hcmRpbmctY29ycG9yYXRlLW1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBZ0I7RUFFaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQXBCOztBQUVBO0VBRUMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFBcEI7O0FBRUE7RUFDQyxZQUFZO0FBQ2I7O0FBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3BCOztBQVVBO0VBRUMscUNBQWtDO0FBUm5DOztBQVdBO0VBRUMsdUJBQXVCO0VBQ3BCLDBCQUEwQjtBQVQ5Qjs7QUFZQTtFQUNJLHlCQUF5QjtBQVQ3Qjs7QUFZQTtFQUNDLHdCQUF3QjtBQVR6Qjs7QUFZQTtFQUNDLHVCQUF1QjtBQVR4QiIsImZpbGUiOiJvbmJvYXJkaW5nLWNvcnBvcmF0ZS1tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4taGVhZCB7XHJcblx0bWFyZ2luLXRvcDogMzVweDtcclxuXHQvLyBtYXJnaW4tbGVmdDogMjBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiA2JTtcclxuXHRwYWRkaW5nLXRvcDogMTZweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcbi5uYXYtaGVhZHtcclxuXHQvLyBtYXJnaW4tbGVmdDogMjBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDYlO1xyXG5cdHBhZGRpbmctdG9wOiAxNnB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuLmJhc2ljLWNvbnRhaW5lciB7XHJcblx0cGFkZGluZzogNXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDUlO1xyXG5cdHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTM2LCAyNDYpICFpbXBvcnRhbnQ7XHJcbi8vICAgICBoZWlnaHQ6IDRweDtcclxuLy8gICAgIHdpZHRoOiA4cGMgIWltcG9ydGFudDtcclxuLy8gXHR3aWR0aDogMTM1cHg7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMC41JTtcclxuLy8gICB9XHJcblxyXG46Om5nLWRlZXAgIC5lZ3JldC1ibHVlIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVke1xyXG5cdC8vIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiByZ2JhKDAsMCwwLDAuMjYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1jb250ZW50e1xyXG5cdC8vIHBhZGRpbmc6IDAgNXJlbSAhaW1wb3J0YW50O1xyXG5cdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gICAgY29sb3I6ICM2OTg4ZjYgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNvbnRyb2xzLWVuYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb257XHJcblx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmVncmV0LWJsdWUgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLmVncmV0LWJsdWUgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke1xyXG5cdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyA6Om5nIC1kZWVwIG1hdC10YWItbGFiZWwgLm1hdC10YWItbGFiZWwtY29udGVudHtcclxuLy8gXHRtYXJnaW46IC01MHB4O1xyXG4vLyB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnboardingCorporateMainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-onboarding-corporate-main',
            templateUrl: './onboarding-corporate-main.component.html',
            styleUrls: ['./onboarding-corporate-main.component.scss']
          }]
        }], function () {
          return [{
            type: _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_2__["CorporateOnboardingService"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "JVXa":
    /*!***********************************************************************************!*\
      !*** ./src/app/views/others/onboarding-corporate/corporate-onboarding.service.ts ***!
      \***********************************************************************************/

    /*! exports provided: CorporateOnboardingService */

    /***/
    function JVXa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorporateOnboardingService", function () {
        return CorporateOnboardingService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/finger-print-capture.service */
      "rp8y");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/showMessage/show-message.service */
      "x/2q");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var CorporateOnboardingService = /*#__PURE__*/function () {
        // private stepOneSource: Subject<FormGroup> = new Subject();
        // stepOne: Observable<FormGroup> = this.stepOneSource.asObservable();
        // private stepTwoSource: Subject<FormGroup> = new Subject();
        // stepTwo: Observable<FormGroup> = this.stepTwoSource.asObservable();
        // private stepThreeSource: Subject<FormGroup> = new Subject();
        // stepThree: Observable<FormGroup> = this.stepThreeSource.asObservable();
        // private stepFourSource: Subject<FormGroup> = new Subject();
        // stepFour: Observable<FormGroup> = this.stepFourSource.asObservable();
        // private stepFiveSource: Subject<FormGroup> = new Subject();
        // stepFive: Observable<FormGroup> = this.stepFiveSource.asObservable();
        // mainForm: FormGroup = this._formBuilder.group({
        //   "companyName": [''],
        //   "category": [''],
        //   "country": [''],
        //   "noOfDirector": [''],
        //   "addressLine1":['']
        // })
        function CorporateOnboardingService(_formBuilder, http, showMessageService, ls) {
          _classCallCheck(this, CorporateOnboardingService);

          this._formBuilder = _formBuilder;
          this.http = http;
          this.showMessageService = showMessageService;
          this.ls = ls; //   this.stepOne.subscribe(form =>
          //     form.valueChanges.subscribe(val => {
          //       this.mainForm.value.companyName = val.companyName
          //       this.mainForm.value.category = val.category
          //       this.mainForm.value.country = val.country
          //     })
          //   )
          //   this.stepTwo.subscribe(form =>
          //     form.valueChanges.subscribe(val => {
          //       // console.log(val)
          //       this.mainForm.value.noOfDirector = val.noOfDirector
          //     })
          //   )
          //   this.stepThree.subscribe(form =>
          //     form.valueChanges.subscribe(val => {
          //       console.log(val)
          //       this.mainForm.value.addressLine1 = val.addressLine1
          //     })
          //   )
          // }
          // stepReady(form: FormGroup, part) {
          //   switch (part) {
          //     case 'one': { this.stepOneSource.next(form) }
          //     case 'two': { this.stepTwoSource.next(form) }
          //     case 'three': { this.stepThreeSource.next(form) }
          //     case 'four': { this.stepFourSource.next(form) }
          //     case 'five': { this.stepFiveSource.next(form) }
          //   }
          // }
          // private errorHandler = (errorResp: HttpErrorResponse) => {
          //   console.error('Error : ' + errorResp.message);
          //   console.error('status : ' + errorResp.status);
          //   this.showMessageService.errorMessage(errorResp.status, errorResp);
          //   return throwError(errorResp);
          // }

          this.corporateAccountIdRef = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
          this.corporateAccountIdVal = this.corporateAccountIdRef.asObservable();
          this.disableMatTab = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({
            index: this.ls.getItem('corporateTabIndex') ? this.ls.getItem('corporateTabIndex') : ''
          });
          this.disableMatTabVal = this.disableMatTab.asObservable();
          this.finishFlag = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({
            finishFlag: true
          });
          this.finishSave = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
          this.noOfDirectors = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        }

        _createClass(CorporateOnboardingService, [{
          key: "sendCorporateAccountId",
          value: function sendCorporateAccountId(message) {
            this.corporateAccountIdRef.next(message);
          }
        }, {
          key: "getCorporateAccountId",
          value: function getCorporateAccountId() {
            return this.corporateAccountIdRef.asObservable();
          }
        }, {
          key: "sendDisableMatTab",
          value: function sendDisableMatTab(index) {
            this.ls.setItem('corporateTabIndex', index.index);
            this.disableMatTab.next(index);
          }
        }, {
          key: "getDisableMatTab",
          value: function getDisableMatTab() {
            return this.disableMatTab.asObservable();
          }
        }, {
          key: "getFinishFlag",
          value: function getFinishFlag() {
            return this.finishFlag.asObservable();
          }
        }, {
          key: "setFinishFlag",
          value: function setFinishFlag(finishFlag) {
            this.finishFlag.next(finishFlag);
          }
        }, {
          key: "getfinishSave",
          value: function getfinishSave() {
            return this.finishSave.asObservable();
          }
        }, {
          key: "setfinishSave",
          value: function setfinishSave(finishSave) {
            this.finishSave.next(finishSave);
          }
        }, {
          key: "getnoOfDirectors",
          value: function getnoOfDirectors() {
            return this.noOfDirectors.asObservable();
          }
        }, {
          key: "setnoOfDirectors",
          value: function setnoOfDirectors(noOfDirectors) {
            this.noOfDirectors.next(noOfDirectors);
          }
        }, {
          key: "saveOrUpdateCorporateAccountInfo",
          value: function saveOrUpdateCorporateAccountInfo(data) {
            return this.http.post("".concat(app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/corporateCustomer/upsertDetails"), data);
          }
        }]);

        return CorporateOnboardingService;
      }();

      CorporateOnboardingService.ɵfac = function CorporateOnboardingService_Factory(t) {
        return new (t || CorporateOnboardingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_5__["ShowMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreService"]));
      };

      CorporateOnboardingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CorporateOnboardingService,
        factory: CorporateOnboardingService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CorporateOnboardingService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }, {
            type: app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_5__["ShowMessageService"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "KaOm":
    /*!************************************************************************************************!*\
      !*** ./src/app/views/others/onboarding-corporate/create-director/create-director.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: CreateDirectorComponent */

    /***/
    function KaOm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateDirectorComponent", function () {
        return CreateDirectorComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../corporate-onboarding.service */
      "JVXa");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/application-entry-stage.service */
      "qMRc");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _director_details_director_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../director-details/director-details.component */
      "tCF6");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var _c0 = ["input"];

      function CreateDirectorComponent_mat_panel_title_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Create Director ", ctx_r1.index + 1, " ");
        }
      }

      function CreateDirectorComponent_mat_panel_title_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \xA0 Director \xA0 ", ctx_r2.index + 1, ". ");
        }
      }

      function CreateDirectorComponent_mat_form_field_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "CIF Number*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_mat_form_field_27_Template_input_keypress_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r37._keyPress($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_form_field_28_mat_option_7_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](4, 3, option_r42 == null ? null : option_r42.firstName, 0, 1)), " ");
        }
      }

      function CreateDirectorComponent_mat_form_field_28_mat_option_7_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", option_r42 == null ? null : option_r42.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      function CreateDirectorComponent_mat_form_field_28_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateDirectorComponent_mat_form_field_28_mat_option_7_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);

            var option_r42 = ctx.$implicit;

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r47.selectCif(option_r42);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CreateDirectorComponent_mat_form_field_28_mat_option_7_div_3_Template, 5, 7, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CreateDirectorComponent_mat_form_field_28_mat_option_7_div_4_Template, 2, 1, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h5", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h6", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r42 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r42 == null ? null : option_r42.cifNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (option_r42 == null ? null : option_r42.profileImage) == "not_available");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (option_r42 == null ? null : option_r42.profileImage) != "not_available");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 7, option_r42 == null ? null : option_r42.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 9, option_r42 == null ? null : option_r42.middleName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 11, option_r42 == null ? null : option_r42.lastName), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", option_r42 == null ? null : option_r42.cifNumber, "");
        }
      }

      function CreateDirectorComponent_mat_form_field_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "CIF Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 50, 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function CreateDirectorComponent_mat_form_field_28_Template_input_keyup_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r49.ngAfterViewInit($event.target.value);
          })("ngModelChange", function CreateDirectorComponent_mat_form_field_28_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r51.updatedVal($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-autocomplete", 52, 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CreateDirectorComponent_mat_form_field_28_mat_option_7_Template, 13, 13, "mat-option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matAutocomplete", _r40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.customerInfoList);
        }
      }

      function CreateDirectorComponent_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "CIF Number is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_option_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var prfix_r52 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", prfix_r52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", prfix_r52, " ");
        }
      }

      function CreateDirectorComponent_mat_error_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Prefix!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_error_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "First Name is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_error_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Middle Name is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_error_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Last Name is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_option_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var gender_r53 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", gender_r53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", gender_r53, " ");
        }
      }

      function CreateDirectorComponent_mat_error_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Gender!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_error_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \xA0 Prefix and Gender does not match! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_error_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Date Of Birth is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_error_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Place Of Birth is Required!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_option_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var recidence_r54 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", recidence_r54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", recidence_r54, " ");
        }
      }

      function CreateDirectorComponent_mat_error_106_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Residence Type!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_116_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("currency-flag currency-flag-", ctx_r19.currencyCode1, "");
        }
      }

      function CreateDirectorComponent_mat_option_118_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var citizenship_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", citizenship_r55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", citizenship_r55, " ");
        }
      }

      function CreateDirectorComponent_mat_error_119_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Citizenship By!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_131_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("currency-flag currency-flag-", ctx_r22.currencyCode2, "");
        }
      }

      function CreateDirectorComponent_mat_option_135_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var countryOfResidence_r56 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", countryOfResidence_r56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", countryOfResidence_r56, " ");
        }
      }

      function CreateDirectorComponent_mat_error_136_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Country Of Residence");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_error_143_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Unique Id Number is Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_option_154_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var idType_r57 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", idType_r57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", idType_r57, " ");
        }
      }

      function CreateDirectorComponent_mat_error_155_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select ID Type!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_157_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Valid Till!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_157_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-datepicker-toggle", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-datepicker", null, 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-placeholder", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Valid Till ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CreateDirectorComponent_div_157_mat_error_8_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("min", ctx_r28.minDate)("matDatepicker", _r58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r28.createDirectorFormGroup.get("expiryDate").touched && !ctx_r28.createDirectorFormGroup.get("expiryDate").valid);
        }
      }

      function CreateDirectorComponent_div_160_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Enter Valid Address Line 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_160_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Enter Valid Address Line 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_160_mat_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r72 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", country_r72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", country_r72, " ");
        }
      }

      function CreateDirectorComponent_div_160_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please select country");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_160_mat_error_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please enter Zip Code!(5-10 digits)");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_160_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please enter valid Zip Code!(5-10 digits)");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_160_mat_option_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r73 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", state_r73.stateName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", state_r73.stateName, " ");
        }
      }

      function CreateDirectorComponent_div_160_mat_error_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please select state");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_160_mat_option_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var City_r74 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", City_r74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", City_r74, " ");
        }
      }

      function CreateDirectorComponent_div_160_mat_error_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please select city");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_160_Template(rf, ctx) {
        if (rf & 1) {
          var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "fieldset", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "legend", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Communication Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Address Line 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CreateDirectorComponent_div_160_mat_error_11_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Address Line 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CreateDirectorComponent_div_160_mat_error_18_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-select", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function CreateDirectorComponent_div_160_Template_mat_select_selectionChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r76);

            var i_r61 = ctx.index;

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r75.getStateName($event.value, true, i_r61);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CreateDirectorComponent_div_160_mat_option_27_Template, 2, 2, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CreateDirectorComponent_div_160_mat_error_28_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Zip Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_div_160_Template_input_keypress_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r76);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r77._keyPress($event);
          })("keyup", function CreateDirectorComponent_div_160_Template_input_keyup_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r76);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r78.isAllSameDigit($event);
          })("change", function CreateDirectorComponent_div_160_Template_input_change_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r76);

            var item_r60 = ctx.$implicit;
            var i_r61 = ctx.index;

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r79.getCityandStateByZipcode(item_r60.get("country").value, $event.target.value, i_r61);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, CreateDirectorComponent_div_160_mat_error_35_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, CreateDirectorComponent_div_160_mat_error_36_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-select", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function CreateDirectorComponent_div_160_Template_mat_select_selectionChange_44_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r76);

            var i_r61 = ctx.index;

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r80.onStateChange(i_r61);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, CreateDirectorComponent_div_160_mat_option_47_Template, 2, 2, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, CreateDirectorComponent_div_160_mat_error_48_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "mat-select", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function CreateDirectorComponent_div_160_Template_mat_select_selectionChange_54_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r76);

            var i_r61 = ctx.index;

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r81.onCityChange(i_r61);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, CreateDirectorComponent_div_160_mat_option_57_Template, 2, 2, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, CreateDirectorComponent_div_160_mat_error_58_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r60 = ctx.$implicit;
          var i_r61 = ctx.index;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r60.get("address1").touched && !item_r60.get("address1").valid || item_r60.get("address1").touched && item_r60.get("address1").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r60.get("address2").touched && !item_r60.get("address2").valid || item_r60.get("address2").touched && item_r60.get("address2").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r29.arrayCountry);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r60.get("country").touched && !item_r60.get("country").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r60.get("zipCode").touched && item_r60.get("zipCode").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r29.isAllSameDigitVal || item_r60.get("zipCode").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r29.arrayState);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r60.get("state").touched && !item_r60.get("state").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r29.arrayCity);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r60.get("city").touched && !item_r60.get("city").valid);
        }
      }

      function CreateDirectorComponent_mat_error_173_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Enter Mobile Number(Maximum 10 digits)!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_error_174_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \xA0 \xA0 Please Enter Correct Mobile Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_error_181_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Enter Landline Number!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_error_182_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \xA0 \xA0 Please Enter Correct Landline Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_error_191_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Email Address is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_196_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Tax Id is Required with only numbers!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_196_mat_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var countryOfIssue_r87 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", countryOfIssue_r87);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", countryOfIssue_r87, " ");
        }
      }

      function CreateDirectorComponent_div_196_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Country Of Issue!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_196_Template(rf, ctx) {
        if (rf & 1) {
          var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "fieldset", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "legend", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Additional Tax ID Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Tax Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_div_196_Template_input_keypress_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r89);

            var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r88.omit_special_char($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-placeholder", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Tax Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CreateDirectorComponent_div_196_mat_error_13_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Country of Issue");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-select", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, CreateDirectorComponent_div_196_mat_option_20_Template, 2, 2, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CreateDirectorComponent_div_196_mat_error_21_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateDirectorComponent_div_196_Template_button_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r89);

            var item_r82 = ctx.$implicit;

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            ctx_r90.addDirector(ctx_r90.createDirectorFormGroup.value, item_r82);
            return ctx_r90.openClose("CLOSE");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " ADD DIRECTOR ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r82 = ctx.$implicit;
          var i_r83 = ctx.index;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r83);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r82.get("taxId").touched && !item_r82.get("taxId").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r35.arrayCountry);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r82.get("countryOfIssue").touched && !item_r82.get("countryOfIssue").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r35.createDirectorFormGroup.invalid || !ctx_r35.prefixFlag || ctx_r35.isAllNumberZeroFlag);
        }
      }

      function CreateDirectorComponent_mat_card_197_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_card_197_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 4, ctx_r93.createDirectorFormGroup.value.firstName, 0, 1)), "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](5, 10, ctx_r93.createDirectorFormGroup.value.lastName, 0, 1)), " ");
        }
      }

      function CreateDirectorComponent_mat_card_197_Template(rf, ctx) {
        if (rf & 1) {
          var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CreateDirectorComponent_mat_card_197_div_3_Template, 3, 0, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CreateDirectorComponent_mat_card_197_ng_template_5_Template, 6, 14, "ng-template", null, 84, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-card-title", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-card-actions", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateDirectorComponent_mat_card_197_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r95);

            var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r94.editDirector(ctx_r94.item);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateDirectorComponent_mat_card_197_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r95);

            var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r96.deleteDirector(ctx_r96.corporateId, ctx_r96.item.customerId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "delete_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r36.profileImage == "not_available")("ngIfElse", _r92);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 6, ctx_r36.createDirectorFormGroup.value.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 8, ctx_r36.createDirectorFormGroup.value.middleName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 10, ctx_r36.createDirectorFormGroup.value.lastName), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", ctx_r36.item.customerId, "");
        }
      }

      var CreateDirectorComponent = /*#__PURE__*/function () {
        function CreateDirectorComponent(router, formBuilder, appApiService, corporateService, cdr, snack, apiService, ls, datepipe, directorComponent) {
          _classCallCheck(this, CreateDirectorComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.appApiService = appApiService;
          this.corporateService = corporateService;
          this.cdr = cdr;
          this.snack = snack;
          this.apiService = apiService;
          this.ls = ls;
          this.datepipe = datepipe;
          this.directorComponent = directorComponent;
          this.fieldArray = [];
          this.newAttribute = {};
          this.arrData = [];
          this.directorCount = 1;
          this.maxDate = new Date();
          this.minDate = new Date();
          this.panelOpenState = false;
          this.arrayState = [];
          this.arrayCountry = [];
          this.arrayCity = [];
          this.profileImage = "not_available";
          this.saveStatus = [];
          this.customerInfoList = [];
          this.isEdit = false;
          this.isDirectorSaved = false;
          this.isChecked = true;
          this.disabled = true;
          this.disabledToggle = true;
          this.isAllSameDigitVal = false;
          this.prefixFlag = false;
          this.corporateExistingCustomer = false;
          this.isAllNumberZeroFlag = false;
          this.createDirectorFormGroup = this.formBuilder.group({
            "customerId": this.customerId,
            citizenship: [''],
            cifNumber: [''],
            corporateId: [''],
            countryOfResidence: [''],
            dateOfBirth: [''],
            existingCustomer: [''],
            firstName: [''],
            gender: [''],
            landlineNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10)]],
            lastName: [''],
            middleName: [''],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10)]],
            placeOfBirth: [''],
            prefix: [''],
            primaryCustomer: [this.index == 0 ? true : false],
            primaryEmailAdress: [''],
            residenceStatus: [''],
            "verificationType": "onboarding",
            idNumber: [''],
            idType: [''],
            expiryDate: [''],
            userAddress: formBuilder.array([]),
            // custIdProofs: formBuilder.array([]),
            custTaxInfo: formBuilder.array([])
          });
        }

        _createClass(CreateDirectorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            console.log(this.inputElement, this.item);
            console.log("testtt");
            this.toggleChanges(false, null);
            this.totalDir = this.ls.getItem('totalCust');
            console.log("totalDir", this.totalDir); // this.corporateService.corporateAccountIdVal
            //   .subscribe(corporateId => {
            //     this.corporateId = corporateId;
            //     console.log('corporateId :: ', this.corporateId);
            //     this.createDirectorFormGroup.get('corporateId').setValue(corporateId)
            //     if(this.corporateId){
            //       this.getCoropratedetails(this.corporateId);
            //       console.log('if');
            //     }
            //     else{
            //       if(this.ls.getItem('corporateId')){
            //         console.log('else');
            //         this.getCoropratedetails(this.ls.getItem('corporateId'));
            //       }
            //     }
            //   });

            this.corporateId = this.ls.getItem('corporateId');
            this.createDirectorFormGroup.get('corporateId').setValue(this.corporateId);
            console.log(this.createDirectorFormGroup);
            this.getCoropratedetails(this.corporateId);
            this.corporateService.getnoOfDirectors().subscribe(function (noOfDir) {
              _this15.noOfDir = noOfDir;
              console.log('noOfDir:: ', noOfDir);

              if (_this15.noOfDir && _this15.item > 1) {
                _this15.disabled = false;
                _this15.isChecked = false;
                _this15.disabledToggle = false;
              }
            });
            this.prefixFlag = true;
            this.getDoc();
            this.addAddress(); // this.addIdProof();

            this.addCustTaxInfo();
            this.getCountryName("country");
            this.getAllAuthCities();
            this.getStateName("state"); // this.getCityName("city");

            this.getResidenceDetails('residence');
            this.createDirectorFormGroup.valueChanges.subscribe(function (data) {
              if (data.firstName != '') {
                _this15.profileImage = "available";

                _this15.createInititals(data.firstName);
              }

              if (data.lastName != '') {
                // console.log('data if lastName:: ', data);
                _this15.profileImage = "available";

                _this15.createInititals(data.lastName);
              }
            });
          }
        }, {
          key: "getAddressData",
          get: function get() {
            return this.createDirectorFormGroup.get('userAddress');
          }
        }, {
          key: "addAddress",
          value: function addAddress() {
            this.getAddressData.push(this.formBuilder.group({
              addressType: [''],
              address1: [[''], [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(".*[a-zA-Z].*")]],
              address2: [[''], [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(".*[a-zA-Z].*")]],
              city: [''],
              state: [''],
              country: [''],
              zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{5,10}$")]]
            }));
          }
        }, {
          key: "getIdProofData",
          get: function get() {
            return this.createDirectorFormGroup.get('custIdProofs');
          }
        }, {
          key: "addIdProof",
          value: function addIdProof() {
            this.getIdProofData.push(this.formBuilder.group({
              idNumber: [''],
              idType: [''],
              expiryDate: ['']
            }));
          }
        }, {
          key: "getCustTaxInfo",
          get: function get() {
            return this.createDirectorFormGroup.get('custTaxInfo');
          }
        }, {
          key: "addCustTaxInfo",
          value: function addCustTaxInfo() {
            this.getCustTaxInfo.push(this.formBuilder.group({
              taxId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[0-9]*$")]],
              countryOfIssue: ['']
            }));
          } // getCountryName(key: string) {
          //   console.log('country in contact info :: ', key);
          //   this.apiService.getDropDownValues(key).subscribe((data) => {
          //     this.arrayCountry = data;
          //     console.log("country in contact info -->", this.arrayCountry)
          //   });
          // }

        }, {
          key: "getCountryName",
          value: function getCountryName(key) {
            var _this16 = this;

            console.log("ghg");
            this.apiService.getAllCountries().subscribe(function (data) {
              for (var i = 0; i < data.length; i++) {
                if (data[i].authStatus === 'A') {
                  _this16.arrayCountry.push(data[i].countryName);
                }
              }
            });
          }
        }, {
          key: "onSelectionResidance",
          value: function onSelectionResidance(data) {
            var _this17 = this;

            if (data) {
              this.apiService.fetchCurrencyInfo(data).subscribe(function (value) {
                if (value) {
                  _this17.currencyCode2 = value.currencyCode.toLowerCase();
                } else {
                  _this17.currencyCode2 = null;
                }
              });
            }
          }
        }, {
          key: "onSelectionCitizionship",
          value: function onSelectionCitizionship(data) {
            var _this18 = this;

            if (data) {
              this.apiService.fetchCurrencyInfo(data).subscribe(function (value) {
                if (value) {
                  _this18.currencyCode1 = value.currencyCode.toLowerCase();
                } else {
                  _this18.currencyCode1 = null;
                }
              });
            }
          }
        }, {
          key: "getStateName",
          value: function getStateName(country, isAdd, index) {
            var _this19 = this;

            if (isAdd) {
              this.createDirectorFormGroup.get('userAddress').controls[index].get('zipCode').setValue('');
              this.createDirectorFormGroup.get('userAddress').controls[index].get('state').setValue('');
              this.createDirectorFormGroup.get('userAddress').controls[index].get('city').setValue('');
            }

            this.apiService.getAllCountries().subscribe(function (data) {
              for (var i = 0; i < data.length; i++) {
                if (data[i].countryName == country) {
                  _this19.apiService.getStateByCountryId(data[i].id).subscribe(function (resp) {
                    _this19.arrayState = resp;
                  });

                  break;
                }
              }
            });
          } // getCityName(state: any) {
          //   // console.log(state)
          //   this.apiService.getDropDownValues1("city", state).subscribe((data) => {
          //     this.arrayCity = data;
          //     // console.log("-->", this.arrayCity)
          //   });
          // }

        }, {
          key: "getAllAuthCities",
          value: function getAllAuthCities() {
            var _this20 = this;

            this.apiService.getAuthorizedCityInfo().subscribe(function (res) {
              return res.map(function (r) {
                return _this20.arrayCity.push(r.cityName);
              });
            });
          }
        }, {
          key: "onStateChange",
          value: function onStateChange(index) {
            this.createDirectorFormGroup.get('userAddress').controls[index].get('zipCode').setValue('');
            this.createDirectorFormGroup.get('userAddress').controls[index].get('city').setValue('');
          }
        }, {
          key: "onCityChange",
          value: function onCityChange(index) {
            this.createDirectorFormGroup.get('userAddress').controls[index].get('zipCode').setValue('');
          }
        }, {
          key: "getResidenceDetails",
          value: function getResidenceDetails(key) {
            var _this21 = this;

            this.apiService.getDropDownValues(key).subscribe(function (data) {
              _this21.arrayResidence = data; // console.log('arrayResidence :: ', this.arrayResidence);
            });
          }
        }, {
          key: "_keyPress",
          value: function _keyPress(event) {
            var pattern = /[0-9]/;
            var inputChar = String.fromCharCode(event.charCode);

            if (!pattern.test(inputChar)) {
              event.preventDefault();
            }
          }
        }, {
          key: "letterOnly",
          value: function letterOnly(event) {
            var charCode = event.keyCode;
            if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123 || charCode == 8) return true;else return false;
          }
        }, {
          key: "openClose",
          value: function openClose(status) {
            // console.log('status :: ', status);
            if (status === 'OPEN') {
              this.panelOpenState = true;
            } else {
              this.panelOpenState = false;
            }
          }
        }, {
          key: "getCoropratedetails",
          value: function getCoropratedetails(id) {
            var _this22 = this;

            console.log(id);
            console.log(this.noOfDir);
            console.log(this.item);
            console.log(this.index);
            this.apiService.getCoropratedetails(id).subscribe(function (details) {
              var _a, _b, _c, _d, _e, _f;

              _this22.createDirectorFormGroup.reset();

              if (details.customerInfo[_this22.index]) {
                console.log('yes');
                _this22.isDirectorSaved = true;

                _this22.getStateName(details.customerInfo[_this22.index].userAddress[0].country);

                details.customerInfo[_this22.index].idNumber = (_b = (_a = details.customerInfo[_this22.index]) === null || _a === void 0 ? void 0 : _a.custIdProofs[0]) === null || _b === void 0 ? void 0 : _b.idNumber;
                details.customerInfo[_this22.index].idType = (_d = (_c = details.customerInfo[_this22.index]) === null || _c === void 0 ? void 0 : _c.custIdProofs[0]) === null || _d === void 0 ? void 0 : _d.idType;
                details.customerInfo[_this22.index].expiryDate = (_f = (_e = details.customerInfo[_this22.index]) === null || _e === void 0 ? void 0 : _e.custIdProofs[0]) === null || _f === void 0 ? void 0 : _f.expiryDate;

                _this22.createDirectorFormGroup.patchValue(details.customerInfo[_this22.index]);
              }
            });
          }
        }, {
          key: "displayDrop",
          value: function displayDrop(cif) {
            if (!cif) {
              this.autocomplete.closePanel();
            }
          }
        }, {
          key: "toggleChanges",
          value: function toggleChanges(event, formDirective) {
            this.corporateExistingCustomer = event;
            console.log(event);

            if (event === true) {
              this.createDirectorFormGroup.get('cifNumber').enable();
            } else if (event === false) {
              this.createDirectorFormGroup.get('cifNumber').disable();
              this.customerId = null;
            } // if (this.createDirectorFormGroup.get('existingCustomer').value == true) {
            //   this.existingCustomer=true;
            //   this.createDirectorFormGroup.get('cifNumber').enable();
            //   this.createDirectorFormGroup.get('cifNumber').setValidators([Validators.required]);
            //   this.createDirectorFormGroup.get('cifNumber').updateValueAndValidity();
            // }
            // else {
            //   this.createDirectorFormGroup.get('cifNumber').enable();
            //   formDirective.resetForm(
            //     setTimeout(() => formDirective.resetForm(), 0)
            //   );
            // }

          }
        }, {
          key: "editDirector",
          value: function editDirector(index) {
            console.log('edit index :: ', index);
            this.panelOpenState = !this.panelOpenState;
          }
        }, {
          key: "deleteDirector",
          value: function deleteDirector(index) {
            var _this23 = this;

            this.apiService.deleteCorporateDirector(this.corporateId, this.item.customerId).subscribe(function (res) {
              delete _this23.directorComponent.items[index];

              _this23.snack.open("Successfully Deleted Director ".concat(_this23.index + 1), 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            });
          }
        }, {
          key: "updatedVal",
          value: function updatedVal(e) {
            if (e && e.length >= 3) {
              this.showAutocomplete = true;
            } else {
              this.showAutocomplete = false;
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit(resp) {
            console.log("inside ngAfterViewInit::");

            if (this.inputElement) {
              Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.inputElement.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pluck"])('target', 'value'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (value) {
                return value.length > 1;
              })).subscribe(function (value) {// this.fetchByCif(value);
              });
            }

            this.fetchByCif(resp);
          }
        }, {
          key: "selectCif",
          value: function selectCif(data) {
            this.getStateName(data.userAddress[0].country); // this.getCityName(data.userAddress[0].state);

            if (data.citizenship != null) {
              this.onSelectionCitizionship(data.citizenship);
            }

            if (data.countryOfResidence != null) {
              this.onSelectionResidance(data.countryOfResidence);
            }

            this.customerInfoList = data.customerInfoList;
            this.cifNumberForPayload = data.cifNumber;
            this.customerIdForPayload = data.customerId;
            delete data.cifNumber;
            this.autocomplete.closePanel();
            this.createDirectorFormGroup.patchValue(data);
            this.createDirectorFormGroup.get('existingCustomer').setValue(true);

            if (data.custIdProofs[0].expiryDate < this.datepipe.transform(new Date(), 'yyyy-MM-dd')) {
              this.snack.open('Kindly Enter future Valid till Date', 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            }
          }
        }, {
          key: "fetchByCif",
          value: function fetchByCif(cifNumber) {
            var _this24 = this;

            console.log(cifNumber === null || cifNumber === void 0 ? void 0 : cifNumber.length);

            if ((cifNumber === null || cifNumber === void 0 ? void 0 : cifNumber.length) == 0) {
              this.autocomplete.closePanel();
            }

            this.createDirectorFormGroup.reset({
              cifNumber: this.createDirectorFormGroup.get('cifNumber').value,
              existingCustomer: this.createDirectorFormGroup.get('existingCustomer').value
            });
            this.showAutocomplete = false; // this.autocomplete.closePanel(); 

            if (cifNumber) {
              clearTimeout(this.timer);
              this.timer = setTimeout(function () {
                _this24.appApiService.fetchByCif(cifNumber).subscribe(function (res) {
                  console.log("settimeout");
                  console.log("res::", res);
                  var kycValues = {
                    kycReference: res.customerInfoList[0].kycReference,
                    kycStatus: res.customerInfoList[0].custStatus
                  };

                  _this24.ls.setItem('KycValues', kycValues); // this.autocomplete.openPanel();


                  if (res) {
                    _this24.showAutocomplete = true;
                    _this24.customerInfoList = res.customerInfoList; // this.customerInfoList[0].userAddress[0].zipcode = res.customerInfoList[0].userAddress[0].zipCode;
                  }

                  if ((res === null || res === void 0 ? void 0 : res.customerInfoList.length) == 1) {// this.customerInfoList[0].userAddress[0].zipcode = res.customerInfoList[0].userAddress[0].zipCode;
                  }

                  if (_this24.customerInfoList[0].citizenship != null) {
                    _this24.onSelectionCitizionship(_this24.customerInfoList[0].citizenship);
                  }

                  if (_this24.customerInfoList[0].countryOfResidence != null) {
                    _this24.onSelectionResidance(_this24.customerInfoList[0].countryOfResidence);
                  } else if ((res === null || res === void 0 ? void 0 : res.customerInfoList.length) > 1) {
                    _this24.customerInfoList = res.customerInfoList; // this.customerInfoList[0].userAddress[0].zipcode = res.customerInfoList[0].userAddress[0].zipCode;
                  } else if ((res === null || res === void 0 ? void 0 : res.customerInfoList.length) == 0 || !res) {
                    _this24.snack.open('Kindly Enter Valid CifNumber to proceed', 'OK', {
                      duration: 4000,
                      verticalPosition: 'top',
                      horizontalPosition: 'right'
                    }); // this.customerInfoList = [];
                    // this.createDirectorFormGroup.get('cifNumber').patchValue('');

                  }
                }, function (err) {
                  console.error(err);
                });
              }, 1000);
            }
          }
        }, {
          key: "addDirector",
          value: function addDirector(createDirectorFormGroup, item) {
            var _this25 = this;

            this.ls.setItem('CorporateExistingCustomer', this.corporateExistingCustomer);
            createDirectorFormGroup.cifNumber = this.cifNumberForPayload;
            createDirectorFormGroup.customerId = this.customerIdForPayload;
            createDirectorFormGroup.corporateId = this.corporateId;

            if (this.index == 0) {
              createDirectorFormGroup.primaryCustomer = true;
            } else {
              createDirectorFormGroup.primaryCustomer = false;
            } //this.createDirectorFormGroup.get('primaryCustomer').setValue(true);
            //createDirectorFormGroup.primaryCustomer=this.primaryCustomer;


            console.log('item :: ', item);
            var coporateObjModel = {
              "corporateId": this.ls.getItem('corporateId'),
              // "companyName": null,
              // "category": null,
              // "country": null,
              // "state": null,
              // "city": null,
              "customerInfo": [createDirectorFormGroup]
            };

            if (this.noOfDir > 0) {
              this.saveStatus = [];

              for (var i = 0; i < this.noOfDir; i++) {
                this.saveStatus.push(true);
              } // console.log('saveStatus :: ', this.saveStatus);


              this.corporateService.setfinishSave(this.saveStatus);
            }

            this.corporateService.saveOrUpdateCorporateAccountInfo(coporateObjModel).subscribe(function (data) {
              console.log('data :: ', data);

              if (data != null) {
                console.log("chhecking");

                if (data.customerInfo != null && data.customerInfo[0].cifNumber != null) {
                  _this25.cifNumber = data.customerInfo[0].cifNumber;
                }

                _this25.item = data.customerInfo[_this25.index];

                _this25.snack.open("Director ".concat(_this25.index + 1, " profile created") + ' !', 'OK', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });

                _this25.isDirectorSaved = true;

                _this25.cdr.markForCheck(); // if (this.noOfDir >= 1) {


                if (_this25.noOfDir <= 1) {
                  _this25.next();
                }
              } else {
                _this25.snack.open('Not able to connect to server!', 'INTERNAL SERVER ERROR', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });
              }
            }, function (error) {
              console.log('error resp :: ', error);

              _this25.snack.open("".concat(error.error.message, " "), 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            });
          }
        }, {
          key: "getDoc",
          value: function getDoc() {
            var _this26 = this;

            this.apiService.getDropDownValues("gender").subscribe(function (responseDatas) {
              _this26.genderList = responseDatas;
            });
            this.apiService.getDropDownValues("prefix").subscribe(function (re) {
              _this26.prefixList = re;
            });
            this.apiService.getDropDownValues("document_name").subscribe(function (re) {
              _this26.idTypeList = re;
            });
            this.apiService.getDropDownValues("address_type").subscribe(function (re) {
              _this26.addressTypeList = re;
            });
          }
        }, {
          key: "next",
          value: function next() {
            this.corporateService.sendDisableMatTab({
              index: 2
            });
            this.corporateService.setFinishFlag({
              finishFlag: false
            });
          }
        }, {
          key: "onChangeGender",
          value: function onChangeGender(event) {
            var prefix = this.createDirectorFormGroup.value.prefix;

            if (prefix == "Mr" && event.value == "Male" || (prefix == "Ms" || prefix == "Mrs") && event.value == "Female") {
              this.prefixFlag = true;
            } else {
              this.prefixFlag = false;
              this.snack.open("Prefix and Gender does not match!", "OK", {
                duration: 4000,
                verticalPosition: "top",
                horizontalPosition: "right"
              });
            }
          }
        }, {
          key: "omit_special_char",
          value: function omit_special_char(event) {
            var k;
            k = event.charCode; //         k = event.keyCode;  (Both can be used)

            return k > 64 && k < 91 || k > 96 && k < 123 || k == 8 || k == 32 || k >= 48 && k <= 57;
          }
        }, {
          key: "createInititals",
          value: function createInititals(name) {
            if (name == null || name == undefined) {
              return;
            }

            var names = name.split(' '),
                initials = names[0].substring(0, 1).toUpperCase();

            if (names.length > 1) {
              initials += names[names.length - 1].substring(0, 1).toUpperCase();
            }

            this.initials = initials; // console.log("name", name);
            // console.log("this.initials", this.initials);
          }
        }, {
          key: "isAllSameDigit",
          value: function isAllSameDigit(event) {
            var count = 0,
                number = event.target.value;

            if (number != '') {
              for (var i = 0; i < number.length; i++) {
                if (0 == number[i]) {
                  count++;
                }
              }

              if (count == number.length) {
                this.isAllSameDigitVal = true;
              } else {
                this.isAllSameDigitVal = false;
              }
            } else {
              this.isAllSameDigitVal = false;
            }
          }
        }, {
          key: "isAllNumberZero",
          value: function isAllNumberZero(event) {
            this.cdr.detectChanges();
            var count = 0,
                number = event.target.value;

            if (number != '') {
              for (var i = 0; i < number.length; i++) {
                if (0 == number[i]) {
                  count++;
                }
              }

              console.log('number :: ', number);
              console.log('isAllSameDigitVal :: ', count, number.length);

              if (count == number.length) {
                console.log('if loop');
                this.isAllNumberZeroFlag = true;
              } else {
                this.isAllNumberZeroFlag = false;
              }
            } else {
              this.isAllNumberZeroFlag = false;
            }
          }
        }, {
          key: "getCityandStateByZipcode",
          value: function getCityandStateByZipcode(countryName, zipcode, index) {
            var _this27 = this;

            if (countryName && zipcode.length >= 6) {
              this.apiService.fetchStateCityByZipcode(countryName, zipcode).subscribe(function (res) {
                if (res) {
                  _this27.createDirectorFormGroup.get('userAddress').controls[index].get('state').setValue(res.stateName);

                  _this27.createDirectorFormGroup.get('userAddress').controls[index].get('city').setValue(res.cityName);
                } else {
                  _this27.snack.open("Entered Zipcode is not exists", "OK", {
                    duration: 4000,
                    verticalPosition: "top",
                    horizontalPosition: "right"
                  });
                }
              });
            }
          }
        }]);

        return CreateDirectorComponent;
      }();

      CreateDirectorComponent.ɵfac = function CreateDirectorComponent_Factory(t) {
        return new (t || CreateDirectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationEntryStageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_10__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_director_details_director_details_component__WEBPACK_IMPORTED_MODULE_12__["DirectorDetailsComponent"]));
      };

      CreateDirectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CreateDirectorComponent,
        selectors: [["app-create-director"]],
        viewQuery: function CreateDirectorComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.autocomplete = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
          }
        },
        inputs: {
          item: "item",
          index: "index"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]])],
        decls: 198,
        vars: 41,
        consts: [[3, "formGroup"], ["formDirective", "ngForm"], [1, "mat-elevation-z0", 3, "expanded", "opened", "closed"], [4, "ngIf"], [2, "border", "1px solid #456EFE"], ["fxLayout", "row wrap", 2, "margin-top", "20px", "margin-left", "20px"], ["fxFlex", "100"], ["fxFlex", "30"], ["fxFlex", "10"], ["formControlName", "existingCustomer", 3, "change"], ["formControlName", "primaryCustomer", 3, "disabled"], ["fxLayout", "row wrap"], ["fxFlex", "100", 2, "margin-left", "13px"], ["fxFlex", "80", 1, "form-group"], ["appearance", "outline", "class", "full-width", 4, "ngIf"], ["appearance", "outline", 1, "full-width"], ["formControlName", "prefix", "id", "forPrefix", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "placeholder"], ["matInput", "", "formControlName", "firstName", "id", "forFirstName", "required", "", 3, "keypress"], ["matInput", "", "formControlName", "middleName", "id", "forMiddleName", 3, "keypress"], ["matInput", "", "formControlName", "lastName", "id", "forLastName", "required", "", 3, "keypress"], ["formControlName", "gender", "id", "forGender", "required", "", 3, "selectionChange"], ["matInput", "", "formControlName", "dateOfBirth", "required", "", "readonly", "", 3, "matDatepicker", "max"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "placeOfBirth", "id", "forplaceOfBirth", "required", "", 3, "keypress.space"], ["formControlName", "residenceStatus", "id", "forResidenceStatus", "required", ""], ["fxFlex", "15"], ["matPrefix", ""], [3, "class", 4, "ngIf"], ["formControlName", "citizenship", "id", "forcitizenship", "required", "", 3, "selectionChange"], ["formControlName", "countryOfResidence", "id", "forcountryOfResidence", "required", "", 3, "selectionChange"], ["disabled", ""], ["matInput", "", "formControlName", "idNumber", "id", "foridNumber", "maxlength", "15", "minLength", "11", "required", "", 3, "keypress"], ["fxFlex", "40", 1, "form-group"], ["formControlName", "idType", "id", "forIdType", "required", ""], ["fxFlex", "40", "class", "form-group", 4, "ngIf"], ["formArrayName", "userAddress"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [2, "border-top", "1px solid lightgray", "margin-left", "20px", "margin-right", "20px"], ["visible", "true"], ["matInput", "", "formControlName", "phoneNumber", "id", "forPhoneNumber", "maxLength", "10", "minLength", "10", "onlyNumber", "", "required", "", 3, "keypress", "keyup"], ["matInput", "", "formControlName", "landlineNumber", "maxLength", "10", "minLength", "10", "onlyNumber", "", "id", "forlandlineNumber", 3, "keypress"], ["matInput", "", "formControlName", "primaryEmailAdress", "type", "email", "pattern", "^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$", "id", "forprimaryEmailAdress", "required", ""], ["fxFlex", "80"], ["formArrayName", "custTaxInfo"], ["class", "showDirectorCard", 4, "ngIf"], [2, "color", "#24CCA7"], ["matInput", "", "formControlName", "cifNumber", "id", "forCifNumber", 3, "keypress"], ["matInput", "", "formControlName", "cifNumber", "id", "forCifNumber", "required", "", 3, "matAutocomplete", "keyup", "ngModelChange"], ["input", ""], [2, "background-color", "black"], ["auto", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["fxLayout", "row wrap", 2, "margin-top", "20px"], ["fxFlex", " 100"], ["mat-card-avatar", "", "class", "example-header-image-dropdown", "fxFlex", "10", 4, "ngIf"], ["mat-card-avatar", "", "fxFlex", "10", 4, "ngIf"], [2, "margin-bottom", "0px"], [2, "margin-top", "0px"], ["mat-card-avatar", "", "fxFlex", "10", 1, "example-header-image-dropdown"], ["align", "center", 2, "margin-top", "5px", "font-size", "large"], ["mat-card-avatar", "", "fxFlex", "10"], ["matListAvatar", "", "align", "center", "alt", "...", 2, "border-radius", "50%", "height", "85%", "margin-right", "20px", "width", "90%", "margin-bottom", "50px", 3, "src"], [3, "value"], ["matInput", "", "id", "forIdexpiryDate", "formControlName", "expiryDate", "readonly", "", "required", "", 3, "min", "matDatepicker"], ["expiryDate", ""], [3, "formGroupName"], ["matInput", "", "id", "foraddress1", "formControlName", "address1", "required", ""], ["matInput", "", "id", "foraddress2", "formControlName", "address2", "required", ""], ["id", "forcountry", "formControlName", "country", "required", "", 3, "selectionChange"], ["matInput", "", "formControlName", "zipCode", "id", "forZipCode", "onlyNumber", "", "maxlength", "10", "minLength", "5", "required", "", 3, "keypress", "keyup", "change"], ["id", "forstate", "formControlName", "state", "required", "", 3, "selectionChange"], ["id", "forCity", "formControlName", "city", "required", "", 3, "selectionChange"], ["matInput", "", "onlyNumber", "", "formControlName", "taxId", "id", "forTaxId", "maxlength", "10", "required", "", 3, "keypress"], ["formControlName", "countryOfIssue", "id", "forCountryOfIssue", "required", ""], ["fxFlex", "20", 1, "form-group"], ["mat-raised-button", "", "color", "primary", 2, "background-color", "rgb(77, 114, 248)", 3, "disabled", "click"], ["fxFlex", "60"], [1, "showDirectorCard"], ["mat-card-avatar", "", 1, "example-header-image"], [4, "ngIf", "ngIfElse"], ["showAvatar", ""], [2, "margin-top", "10px"], [1, "editAndDelete"], ["mat-button", "", 3, "click"], ["align", "center", 2, "margin-top", "20px", "font-size", "50px"], ["align", "center", 2, "margin-top", "30px", "font-size", "30px", "color", "white"]],
        template: function CreateDirectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-expansion-panel", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("opened", function CreateDirectorComponent_Template_mat_expansion_panel_opened_3_listener() {
              return ctx.openClose("OPEN");
            })("closed", function CreateDirectorComponent_Template_mat_expansion_panel_closed_3_listener() {
              return ctx.openClose("CLOSE");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CreateDirectorComponent_mat_panel_title_5_Template, 2, 1, "mat-panel-title", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CreateDirectorComponent_mat_panel_title_6_Template, 4, 1, "mat-panel-title", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "fieldset", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Is the applicant an existing customer?");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-slide-toggle", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CreateDirectorComponent_Template_mat_slide_toggle_change_16_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r97);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

              return ctx.toggleChanges($event.checked, _r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Is the applicant an primary customer?");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "mat-slide-toggle", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CreateDirectorComponent_mat_form_field_27_Template, 4, 0, "mat-form-field", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CreateDirectorComponent_mat_form_field_28_Template, 8, 2, "mat-form-field", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, CreateDirectorComponent_mat_error_29_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Prefix");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-select", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, CreateDirectorComponent_mat_option_36_Template, 2, 2, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-placeholder", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Prefix ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, CreateDirectorComponent_mat_error_39_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_Template_input_keypress_47_listener($event) {
              return ctx.letterOnly($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, CreateDirectorComponent_mat_error_48_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Middle Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_Template_input_keypress_54_listener($event) {
              return ctx.letterOnly($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, CreateDirectorComponent_mat_error_55_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_Template_input_keypress_63_listener($event) {
              return ctx.letterOnly($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, CreateDirectorComponent_mat_error_64_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Gender");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "mat-select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function CreateDirectorComponent_Template_mat_select_selectionChange_70_listener($event) {
              return ctx.onChangeGender($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, CreateDirectorComponent_mat_option_71_Template, 2, 2, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "mat-placeholder", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Gender ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](74, CreateDirectorComponent_mat_error_74_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, CreateDirectorComponent_mat_error_75_Template, 2, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Date Of Birth");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "mat-datepicker-toggle", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "mat-datepicker", null, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "mat-placeholder", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Date Of Birth ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](89, CreateDirectorComponent_mat_error_89_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Birth Place");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress.space", function CreateDirectorComponent_Template_input_keypress_space_95_listener($event) {
              return ctx.letterOnly($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](96, CreateDirectorComponent_mat_error_96_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Residence Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "mat-select", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](105, CreateDirectorComponent_mat_option_105_Template, 2, 2, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](106, CreateDirectorComponent_mat_error_106_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "Citizenship By");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](116, CreateDirectorComponent_div_116_Template, 1, 3, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "mat-select", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function CreateDirectorComponent_Template_mat_select_selectionChange_117_listener($event) {
              return ctx.onSelectionCitizionship($event.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](118, CreateDirectorComponent_mat_option_118_Template, 2, 2, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](119, CreateDirectorComponent_mat_error_119_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Country Of Residence");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](131, CreateDirectorComponent_div_131_Template, 1, 3, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "mat-select", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function CreateDirectorComponent_Template_mat_select_selectionChange_132_listener($event) {
              return ctx.onSelectionResidance($event.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "mat-option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](135, CreateDirectorComponent_mat_option_135_Template, 2, 2, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](136, CreateDirectorComponent_mat_error_136_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](137, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Unique Id Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_Template_input_keypress_142_listener($event) {
              return ctx._keyPress($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](143, CreateDirectorComponent_mat_error_143_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](144, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "ID Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "mat-select", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "mat-option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "select---");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](154, CreateDirectorComponent_mat_option_154_Template, 2, 2, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](155, CreateDirectorComponent_mat_error_155_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](157, CreateDirectorComponent_div_157_Template, 9, 4, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](158, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](160, CreateDirectorComponent_div_160_Template, 60, 11, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "fieldset", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "legend", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "Contact Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "Mobile Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_Template_input_keypress_170_listener($event) {
              return ctx._keyPress($event);
            })("keyup", function CreateDirectorComponent_Template_input_keyup_170_listener($event) {
              return ctx.isAllNumberZero($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "mat-placeholder", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "Mobile Number ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](173, CreateDirectorComponent_mat_error_173_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](174, CreateDirectorComponent_mat_error_174_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](175, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "Landline Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "input", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_Template_input_keypress_180_listener($event) {
              return ctx._keyPress($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](181, CreateDirectorComponent_mat_error_181_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](182, CreateDirectorComponent_mat_error_182_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](183, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](190, "input", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](191, CreateDirectorComponent_mat_error_191_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](192, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](194, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](196, CreateDirectorComponent_div_196_Template, 33, 5, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](197, CreateDirectorComponent_mat_card_197_Template, 21, 12, "mat-card", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](86);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.createDirectorFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("expanded", ctx.panelOpenState || ctx.noOfDir == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.panelOpenState == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.panelOpenState == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.disabledToggle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("existingCustomer").value != true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("existingCustomer").value == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("cifNumber").touched && !ctx.createDirectorFormGroup.get("cifNumber").valid && ctx.createDirectorFormGroup.get("existingCustomer").value == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.prefixList);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("prefix").touched && !ctx.createDirectorFormGroup.get("prefix").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("firstName").touched && !ctx.createDirectorFormGroup.get("firstName").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("middleName").touched && !ctx.createDirectorFormGroup.get("middleName").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("lastName").touched && !ctx.createDirectorFormGroup.get("lastName").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.genderList);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("gender").touched && !ctx.createDirectorFormGroup.get("gender").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.prefixFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r14)("max", ctx.maxDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("dateOfBirth").touched && !ctx.createDirectorFormGroup.get("dateOfBirth").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("placeOfBirth").touched && !ctx.createDirectorFormGroup.get("placeOfBirth").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.arrayResidence);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("residenceStatus").touched && !ctx.createDirectorFormGroup.get("residenceStatus").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currencyCode1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.arrayCountry);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("citizenship").touched && !ctx.createDirectorFormGroup.get("citizenship").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currencyCode2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.arrayCountry);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("countryOfResidence").touched && !ctx.createDirectorFormGroup.get("countryOfResidence").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("idNumber").touched && !ctx.createDirectorFormGroup.get("idNumber").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.idTypeList);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("idType").touched && !ctx.createDirectorFormGroup.get("idType").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("idType").value == "Passport");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.createDirectorFormGroup.get("userAddress")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("phoneNumber").touched && !ctx.createDirectorFormGroup.get("phoneNumber").valid && !ctx.createDirectorFormGroup.controls["phoneNumber"].hasError("minLength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAllNumberZeroFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("landlineNumber").touched && !ctx.createDirectorFormGroup.get("landlineNumber").valid && !ctx.createDirectorFormGroup.controls["landlineNumber"].hasError("minLength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.controls["landlineNumber"].value == "0000000000");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("primaryEmailAdress").touched && !ctx.createDirectorFormGroup.get("primaryEmailAdress").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.createDirectorFormGroup.get("custTaxInfo")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.noOfDir != 1 && ctx.isDirectorSaved && ctx.panelOpenState == false);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionPanelHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatPlaceholder"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepicker"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatPrefix"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["PatternValidator"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionPanelTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardAvatar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListAvatarCssMatStyler"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardActions"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["SlicePipe"]],
        styles: [".mat-form-field[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0.76em;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.searchIcon[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  margin-top: 5px;\n}\n\n.search-results[_ngcontent-%COMP%] {\n  height: 10rem;\n  overflow: auto;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.hint[_ngcontent-%COMP%] {\n  padding-left: 0.8rem;\n  color: gray;\n  font-size: 10px;\n}\n\nlegend[_ngcontent-%COMP%] {\n  width: auto;\n  color: gray;\n  font-size: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-family: 'Montserrat', Courier, monospace;\n}\n\n.showDirectorCard[_ngcontent-%COMP%] {\n  width: 95%;\n  height: 130px;\n  margin: 0px 0px 0px 30px;\n  padding: 0%;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  margin: 10px 10px 10px 20px;\n  background-size: cover;\n  background-color: #24CCA7;\n  width: 100px;\n  height: 100px;\n}\n\n.editAndDelete[_ngcontent-%COMP%] {\n  margin-left: 54%;\n  margin-top: 8%;\n}\n\n.example-header-image-dropdown[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 8px;\n  background-size: cover;\n  background-color: #4A56E2;\n  width: 25px;\n  height: 32px;\n  color: white;\n}\n\n  .mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon {\n  width: 1.4em !important;\n}\n\n.hide-autocomplete[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.alignImage[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  float: right;\n}\n\n.currency-flag[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 24px;\n  height: 16px;\n  background-size: cover;\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle_fallback.png\");\n}\n\n.egret-blue[_ngcontent-%COMP%]   .mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: #24CCA7;\n}\n\n.mat-slide-toggle[_ngcontent-%COMP%]   .mat-accent[_ngcontent-%COMP%]   .ng-valid[_ngcontent-%COMP%]   .ng-dirty[_ngcontent-%COMP%]   .mat-checked[_ngcontent-%COMP%]   .ng-touched[_ngcontent-%COMP%] {\n  background-color: #24CCA7;\n}\n\n .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: whitesmoke;\n}\n\n  .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: #24CCA7;\n}\n\n.currency-flag-sm[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 10px;\n}\n\n.currency-flag-lg[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 24px;\n}\n\n.currency-flag-xl[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 32px;\n}\n\n.currency-flag.currency-flag-aed[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/aed.png\");\n}\n\n.currency-flag.currency-flag-afn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/afn.png\");\n}\n\n.currency-flag.currency-flag-all[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/all.png\");\n}\n\n.currency-flag.currency-flag-amd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/amd.png\");\n}\n\n.currency-flag.currency-flag-ang[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ang.png\");\n}\n\n.currency-flag.currency-flag-aoa[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/aoa.png\");\n}\n\n.currency-flag.currency-flag-ars[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ars.png\");\n}\n\n.currency-flag.currency-flag-aud[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/aud.png\");\n}\n\n.currency-flag.currency-flag-awg[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/awg.png\");\n}\n\n.currency-flag.currency-flag-azn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/azn.png\");\n}\n\n.currency-flag.currency-flag-bam[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bam.png\");\n}\n\n.currency-flag.currency-flag-bbd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bbd.png\");\n}\n\n.currency-flag.currency-flag-bdt[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bdt.png\");\n}\n\n.currency-flag.currency-flag-bgn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bgn.png\");\n}\n\n.currency-flag.currency-flag-bhd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bhd.png\");\n}\n\n.currency-flag.currency-flag-bif[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bif.png\");\n}\n\n.currency-flag.currency-flag-bmd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bmd.png\");\n}\n\n.currency-flag.currency-flag-bnd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bnd.png\");\n}\n\n.currency-flag.currency-flag-bob[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bob.png\");\n}\n\n.currency-flag.currency-flag-brl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/brl.png\");\n}\n\n.currency-flag.currency-flag-bsd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bsd.png\");\n}\n\n.currency-flag.currency-flag-btn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/btn.png\");\n}\n\n.currency-flag.currency-flag-bwp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bwp.png\");\n}\n\n.currency-flag.currency-flag-byn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/byn.png\");\n}\n\n.currency-flag.currency-flag-bzd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bzd.png\");\n}\n\n.currency-flag.currency-flag-cad[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cad.png\");\n}\n\n.currency-flag.currency-flag-cdf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cdf.png\");\n}\n\n.currency-flag.currency-flag-chf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/chf.png\");\n}\n\n.currency-flag.currency-flag-clp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/clp.png\");\n}\n\n.currency-flag.currency-flag-cny[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cny.png\");\n}\n\n.currency-flag.currency-flag-cop[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cop.png\");\n}\n\n.currency-flag.currency-flag-crc[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/crc.png\");\n}\n\n.currency-flag.currency-flag-cup[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cup.png\");\n}\n\n.currency-flag.currency-flag-cve[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cve.png\");\n}\n\n.currency-flag.currency-flag-czk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/czk.png\");\n}\n\n.currency-flag.currency-flag-djf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/djf.png\");\n}\n\n.currency-flag.currency-flag-dkk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/dkk.png\");\n}\n\n.currency-flag.currency-flag-dop[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/dop.png\");\n}\n\n.currency-flag.currency-flag-dzd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/dzd.png\");\n}\n\n.currency-flag.currency-flag-egp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/egp.png\");\n}\n\n.currency-flag.currency-flag-ern[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ern.png\");\n}\n\n.currency-flag.currency-flag-etb[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/etb.png\");\n}\n\n.currency-flag.currency-flag-eur[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/eur.png\");\n}\n\n.currency-flag.currency-flag-fjd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/fjd.png\");\n}\n\n.currency-flag.currency-flag-fkp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/fkp.png\");\n}\n\n.currency-flag.currency-flag-gbp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gbp.png\");\n}\n\n.currency-flag.currency-flag-gel[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gel.png\");\n}\n\n.currency-flag.currency-flag-ghs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ghs.png\");\n}\n\n.currency-flag.currency-flag-gip[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gip.png\");\n}\n\n.currency-flag.currency-flag-gmd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gmd.png\");\n}\n\n.currency-flag.currency-flag-gnf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gnf.png\");\n}\n\n.currency-flag.currency-flag-gtq[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gtq.png\");\n}\n\n.currency-flag.currency-flag-gyd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gyd.png\");\n}\n\n.currency-flag.currency-flag-hkd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/hkd.png\");\n}\n\n.currency-flag.currency-flag-hnl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/hnl.png\");\n}\n\n.currency-flag.currency-flag-hrk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/hrk.png\");\n}\n\n.currency-flag.currency-flag-htg[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/htg.png\");\n}\n\n.currency-flag.currency-flag-huf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/huf.png\");\n}\n\n.currency-flag.currency-flag-idr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/idr.png\");\n}\n\n.currency-flag.currency-flag-ils[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ils.png\");\n}\n\n.currency-flag.currency-flag-inr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/inr.png\");\n}\n\n.currency-flag.currency-flag-iqd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/iqd.png\");\n}\n\n.currency-flag.currency-flag-irr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/irr.png\");\n}\n\n.currency-flag.currency-flag-isk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/isk.png\");\n}\n\n.currency-flag.currency-flag-jmd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/jmd.png\");\n}\n\n.currency-flag.currency-flag-jod[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/jod.png\");\n}\n\n.currency-flag.currency-flag-jpy[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/jpy.png\");\n}\n\n.currency-flag.currency-flag-kes[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kes.png\");\n}\n\n.currency-flag.currency-flag-kgs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kgs.png\");\n}\n\n.currency-flag.currency-flag-khr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/khr.png\");\n}\n\n.currency-flag.currency-flag-kmf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kmf.png\");\n}\n\n.currency-flag.currency-flag-kpw[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kpw.png\");\n}\n\n.currency-flag.currency-flag-krw[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/krw.png\");\n}\n\n.currency-flag.currency-flag-kwd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kwd.png\");\n}\n\n.currency-flag.currency-flag-kyd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kyd.png\");\n}\n\n.currency-flag.currency-flag-kzt[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kzt.png\");\n}\n\n.currency-flag.currency-flag-lak[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lak.png\");\n}\n\n.currency-flag.currency-flag-lbp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lbp.png\");\n}\n\n.currency-flag.currency-flag-lkr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lkr.png\");\n}\n\n.currency-flag.currency-flag-lrd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lrd.png\");\n}\n\n.currency-flag.currency-flag-ltl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ltl.png\");\n}\n\n.currency-flag.currency-flag-lyd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lyd.png\");\n}\n\n.currency-flag.currency-flag-mad[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mad.png\");\n}\n\n.currency-flag.currency-flag-mdl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mdl.png\");\n}\n\n.currency-flag.currency-flag-mga[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mga.png\");\n}\n\n.currency-flag.currency-flag-mkd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mkd.png\");\n}\n\n.currency-flag.currency-flag-mmk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mmk.png\");\n}\n\n.currency-flag.currency-flag-mnt[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mnt.png\");\n}\n\n.currency-flag.currency-flag-mop[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mop.png\");\n}\n\n.currency-flag.currency-flag-mro[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mro.png\");\n}\n\n.currency-flag.currency-flag-mur[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mur.png\");\n}\n\n.currency-flag.currency-flag-mvr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mvr.png\");\n}\n\n.currency-flag.currency-flag-mwk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mwk.png\");\n}\n\n.currency-flag.currency-flag-mxn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mxn.png\");\n}\n\n.currency-flag.currency-flag-myr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/myr.png\");\n}\n\n.currency-flag.currency-flag-mzn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mzn.png\");\n}\n\n.currency-flag.currency-flag-nad[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/nad.png\");\n}\n\n.currency-flag.currency-flag-ngn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ngn.png\");\n}\n\n.currency-flag.currency-flag-nio[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/nio.png\");\n}\n\n.currency-flag.currency-flag-nok[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/nok.png\");\n}\n\n.currency-flag.currency-flag-npr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/npr.png\");\n}\n\n.currency-flag.currency-flag-nzd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/nzd.png\");\n}\n\n.currency-flag.currency-flag-omr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/omr.png\");\n}\n\n.currency-flag.currency-flag-pen[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pen.png\");\n}\n\n.currency-flag.currency-flag-pgk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pgk.png\");\n}\n\n.currency-flag.currency-flag-php[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/php.png\");\n}\n\n.currency-flag.currency-flag-pkr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pkr.png\");\n}\n\n.currency-flag.currency-flag-pln[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pln.png\");\n}\n\n.currency-flag.currency-flag-pyg[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pyg.png\");\n}\n\n.currency-flag.currency-flag-qar[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/qar.png\");\n}\n\n.currency-flag.currency-flag-ron[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ron.png\");\n}\n\n.currency-flag.currency-flag-rsd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/rsd.png\");\n}\n\n.currency-flag.currency-flag-rub[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/rub.png\");\n}\n\n.currency-flag.currency-flag-rwf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/rwf.png\");\n}\n\n.currency-flag.currency-flag-sar[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sar.png\");\n}\n\n.currency-flag.currency-flag-sbd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sbd.png\");\n}\n\n.currency-flag.currency-flag-scr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/scr.png\");\n}\n\n.currency-flag.currency-flag-sek[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sek.png\");\n}\n\n.currency-flag.currency-flag-sgd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sgd.png\");\n}\n\n.currency-flag.currency-flag-shp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/shp.png\");\n}\n\n.currency-flag.currency-flag-sll[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sll.png\");\n}\n\n.currency-flag.currency-flag-sos[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sos.png\");\n}\n\n.currency-flag.currency-flag-srd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/srd.png\");\n}\n\n.currency-flag.currency-flag-std[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/std.png\");\n}\n\n.currency-flag.currency-flag-svc[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/svc.png\");\n}\n\n.currency-flag.currency-flag-syp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/syp.png\");\n}\n\n.currency-flag.currency-flag-szl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/szl.png\");\n}\n\n.currency-flag.currency-flag-thb[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/thb.png\");\n}\n\n.currency-flag.currency-flag-tjs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/tjs.png\");\n}\n\n.currency-flag.currency-flag-tnd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/tnd.png\");\n}\n\n.currency-flag.currency-flag-top[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/top.png\");\n}\n\n.currency-flag.currency-flag-try[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/try.png\");\n}\n\n.currency-flag.currency-flag-ttd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ttd.png\");\n}\n\n.currency-flag.currency-flag-twd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/twd.png\");\n}\n\n.currency-flag.currency-flag-tzs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/tzs.png\");\n}\n\n.currency-flag.currency-flag-uah[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/uah.png\");\n}\n\n.currency-flag.currency-flag-ugx[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ugx.png\");\n}\n\n.currency-flag.currency-flag-usd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/usd.png\");\n}\n\n.currency-flag.currency-flag-uyu[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/uyu.png\");\n}\n\n.currency-flag.currency-flag-uzs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/uzs.png\");\n}\n\n.currency-flag.currency-flag-vef[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/vef.png\");\n}\n\n.currency-flag.currency-flag-vnd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/vnd.png\");\n}\n\n.currency-flag.currency-flag-vuv[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/vuv.png\");\n}\n\n.currency-flag.currency-flag-wst[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/wst.png\");\n}\n\n.currency-flag.currency-flag-xaf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/xaf.png\");\n}\n\n.currency-flag.currency-flag-xcd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/xcd.png\");\n}\n\n.currency-flag.currency-flag-xof[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/xof.png\");\n}\n\n.currency-flag.currency-flag-xpf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/xpf.png\");\n}\n\n.currency-flag.currency-flag-yer[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/yer.png\");\n}\n\n.currency-flag.currency-flag-zar[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/zar.png\");\n}\n\n.currency-flag.currency-flag-zmw[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/zmw.png\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNyZWF0ZS1kaXJlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlDLGtCQUFrQjtBQUZuQjs7QUFLQTtFQUNJLHNCQUFzQjtBQUYxQjs7QUFJQTtFQUNDLGFBQWE7QUFEZDs7QUFHQTtFQUNDLGtCQUFrQjtFQUNsQixlQUFlO0FBQWhCOztBQUVBO0VBQ0ksYUFBYTtFQUNiLGNBQWM7QUFDbEI7O0FBRUE7RUFDQyxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBO0VBQ0MsV0FBVztBQUNaOztBQUVBO0VBQ0Msb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxlQUFlO0FBQ2hCOztBQUVBO0VBQ0MsV0FBVztFQUVYLFdBQVc7RUFFWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw2Q0FBNkM7QUFEOUM7O0FBSUE7RUFDQyxVQUFVO0VBQ1YsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixXQUFXO0FBRFo7O0FBSUE7RUFDQywyQkFBMkI7RUFFM0Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtBQUZkOztBQUtBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFGaEI7O0FBS0E7RUFDQyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBRWpCLHNCQUFzQjtFQUVyQix5QkFBeUI7RUFDMUIsV0FBVztFQUNYLFlBQVk7RUFDWCxZQUFZO0FBSmQ7O0FBTUE7RUFDRSx1QkFBdUI7QUFIekI7O0FBTUE7RUFBcUIsYUFBYTtBQUZsQzs7QUFJQTtFQUNDLGdCQUFnQjtFQUNoQixZQUFZO0FBRGI7O0FBSUU7RUFDRCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsOEZBQTZGO0FBRDlGOztBQUlFO0VBQ0UseUJBQTBCO0FBRDlCOztBQUdFO0VBQ0UseUJBQTBCO0FBQTlCOztBQUlFO0VBQ0UsNEJBQTRCO0FBRGhDOztBQUdBO0VBQ0kseUJBQXlCO0FBQTdCOztBQUdFO0VBQ0QsV0FBVztFQUNYLFlBQVk7QUFBYjs7QUFHRTtFQUNELFdBQVc7RUFDWCxZQUFZO0FBQWI7O0FBR0U7RUFDRCxXQUFXO0VBQ1gsWUFBWTtBQUFiOztBQUtFO0VBQWlDLHlGQUF3RjtBQUQzSDs7QUFFRTtFQUFpQyx5RkFBd0Y7QUFFM0g7O0FBREU7RUFBaUMseUZBQXdGO0FBSzNIOztBQUpFO0VBQWlDLHlGQUF3RjtBQVEzSDs7QUFQRTtFQUFpQyx5RkFBd0Y7QUFXM0g7O0FBVkU7RUFBaUMseUZBQXdGO0FBYzNIOztBQWJFO0VBQWlDLHlGQUF3RjtBQWlCM0g7O0FBaEJFO0VBQWlDLHlGQUF3RjtBQW9CM0g7O0FBbkJFO0VBQWlDLHlGQUF3RjtBQXVCM0g7O0FBdEJFO0VBQWlDLHlGQUF3RjtBQTBCM0g7O0FBekJFO0VBQWlDLHlGQUF3RjtBQTZCM0g7O0FBNUJFO0VBQWlDLHlGQUF3RjtBQWdDM0g7O0FBL0JFO0VBQWlDLHlGQUF3RjtBQW1DM0g7O0FBbENFO0VBQWlDLHlGQUF3RjtBQXNDM0g7O0FBckNFO0VBQWlDLHlGQUF3RjtBQXlDM0g7O0FBeENFO0VBQWlDLHlGQUF3RjtBQTRDM0g7O0FBM0NFO0VBQWlDLHlGQUF3RjtBQStDM0g7O0FBOUNFO0VBQWlDLHlGQUF3RjtBQWtEM0g7O0FBakRFO0VBQWlDLHlGQUF3RjtBQXFEM0g7O0FBcERFO0VBQWlDLHlGQUF3RjtBQXdEM0g7O0FBdkRFO0VBQWlDLHlGQUF3RjtBQTJEM0g7O0FBMURFO0VBQWlDLHlGQUF3RjtBQThEM0g7O0FBN0RFO0VBQWlDLHlGQUF3RjtBQWlFM0g7O0FBaEVFO0VBQWlDLHlGQUF3RjtBQW9FM0g7O0FBbkVFO0VBQWlDLHlGQUF3RjtBQXVFM0g7O0FBdEVFO0VBQWlDLHlGQUF3RjtBQTBFM0g7O0FBekVFO0VBQWlDLHlGQUF3RjtBQTZFM0g7O0FBNUVFO0VBQWlDLHlGQUF3RjtBQWdGM0g7O0FBL0VFO0VBQWlDLHlGQUF3RjtBQW1GM0g7O0FBbEZFO0VBQWlDLHlGQUF3RjtBQXNGM0g7O0FBckZFO0VBQWlDLHlGQUF3RjtBQXlGM0g7O0FBeEZFO0VBQWlDLHlGQUF3RjtBQTRGM0g7O0FBM0ZFO0VBQWlDLHlGQUF3RjtBQStGM0g7O0FBOUZFO0VBQWlDLHlGQUF3RjtBQWtHM0g7O0FBakdFO0VBQWlDLHlGQUF3RjtBQXFHM0g7O0FBcEdFO0VBQWlDLHlGQUF3RjtBQXdHM0g7O0FBdkdFO0VBQWlDLHlGQUF3RjtBQTJHM0g7O0FBMUdFO0VBQWlDLHlGQUF3RjtBQThHM0g7O0FBN0dFO0VBQWlDLHlGQUF3RjtBQWlIM0g7O0FBaEhFO0VBQWlDLHlGQUF3RjtBQW9IM0g7O0FBbkhFO0VBQWlDLHlGQUF3RjtBQXVIM0g7O0FBdEhFO0VBQWlDLHlGQUF3RjtBQTBIM0g7O0FBekhFO0VBQWlDLHlGQUF3RjtBQTZIM0g7O0FBNUhFO0VBQWlDLHlGQUF3RjtBQWdJM0g7O0FBL0hFO0VBQWlDLHlGQUF3RjtBQW1JM0g7O0FBbElFO0VBQWlDLHlGQUF3RjtBQXNJM0g7O0FBcklFO0VBQWlDLHlGQUF3RjtBQXlJM0g7O0FBeElFO0VBQWlDLHlGQUF3RjtBQTRJM0g7O0FBM0lFO0VBQWlDLHlGQUF3RjtBQStJM0g7O0FBOUlFO0VBQWlDLHlGQUF3RjtBQWtKM0g7O0FBakpFO0VBQWlDLHlGQUF3RjtBQXFKM0g7O0FBcEpFO0VBQWlDLHlGQUF3RjtBQXdKM0g7O0FBdkpFO0VBQWlDLHlGQUF3RjtBQTJKM0g7O0FBMUpFO0VBQWlDLHlGQUF3RjtBQThKM0g7O0FBN0pFO0VBQWlDLHlGQUF3RjtBQWlLM0g7O0FBaEtFO0VBQWlDLHlGQUF3RjtBQW9LM0g7O0FBbktFO0VBQWlDLHlGQUF3RjtBQXVLM0g7O0FBdEtFO0VBQWlDLHlGQUF3RjtBQTBLM0g7O0FBektFO0VBQWlDLHlGQUF3RjtBQTZLM0g7O0FBNUtFO0VBQWlDLHlGQUF3RjtBQWdMM0g7O0FBL0tFO0VBQWlDLHlGQUF3RjtBQW1MM0g7O0FBbExFO0VBQWlDLHlGQUF3RjtBQXNMM0g7O0FBckxFO0VBQWlDLHlGQUF3RjtBQXlMM0g7O0FBeExFO0VBQWlDLHlGQUF3RjtBQTRMM0g7O0FBM0xFO0VBQWlDLHlGQUF3RjtBQStMM0g7O0FBOUxFO0VBQWlDLHlGQUF3RjtBQWtNM0g7O0FBak1FO0VBQWlDLHlGQUF3RjtBQXFNM0g7O0FBcE1FO0VBQWlDLHlGQUF3RjtBQXdNM0g7O0FBdk1FO0VBQWlDLHlGQUF3RjtBQTJNM0g7O0FBMU1FO0VBQWlDLHlGQUF3RjtBQThNM0g7O0FBN01FO0VBQWlDLHlGQUF3RjtBQWlOM0g7O0FBaE5FO0VBQWlDLHlGQUF3RjtBQW9OM0g7O0FBbk5FO0VBQWlDLHlGQUF3RjtBQXVOM0g7O0FBdE5FO0VBQWlDLHlGQUF3RjtBQTBOM0g7O0FBek5FO0VBQWlDLHlGQUF3RjtBQTZOM0g7O0FBNU5FO0VBQWlDLHlGQUF3RjtBQWdPM0g7O0FBL05FO0VBQWlDLHlGQUF3RjtBQW1PM0g7O0FBbE9FO0VBQWlDLHlGQUF3RjtBQXNPM0g7O0FBck9FO0VBQWlDLHlGQUF3RjtBQXlPM0g7O0FBeE9FO0VBQWlDLHlGQUF3RjtBQTRPM0g7O0FBM09FO0VBQWlDLHlGQUF3RjtBQStPM0g7O0FBOU9FO0VBQWlDLHlGQUF3RjtBQWtQM0g7O0FBalBFO0VBQWlDLHlGQUF3RjtBQXFQM0g7O0FBcFBFO0VBQWlDLHlGQUF3RjtBQXdQM0g7O0FBdlBFO0VBQWlDLHlGQUF3RjtBQTJQM0g7O0FBMVBFO0VBQWlDLHlGQUF3RjtBQThQM0g7O0FBN1BFO0VBQWlDLHlGQUF3RjtBQWlRM0g7O0FBaFFFO0VBQWlDLHlGQUF3RjtBQW9RM0g7O0FBblFFO0VBQWlDLHlGQUF3RjtBQXVRM0g7O0FBdFFFO0VBQWlDLHlGQUF3RjtBQTBRM0g7O0FBelFFO0VBQWlDLHlGQUF3RjtBQTZRM0g7O0FBNVFFO0VBQWlDLHlGQUF3RjtBQWdSM0g7O0FBL1FFO0VBQWlDLHlGQUF3RjtBQW1SM0g7O0FBbFJFO0VBQWlDLHlGQUF3RjtBQXNSM0g7O0FBclJFO0VBQWlDLHlGQUF3RjtBQXlSM0g7O0FBeFJFO0VBQWlDLHlGQUF3RjtBQTRSM0g7O0FBM1JFO0VBQWlDLHlGQUF3RjtBQStSM0g7O0FBOVJFO0VBQWlDLHlGQUF3RjtBQWtTM0g7O0FBalNFO0VBQWlDLHlGQUF3RjtBQXFTM0g7O0FBcFNFO0VBQWlDLHlGQUF3RjtBQXdTM0g7O0FBdlNFO0VBQWlDLHlGQUF3RjtBQTJTM0g7O0FBMVNFO0VBQWlDLHlGQUF3RjtBQThTM0g7O0FBN1NFO0VBQWlDLHlGQUF3RjtBQWlUM0g7O0FBaFRFO0VBQWlDLHlGQUF3RjtBQW9UM0g7O0FBblRFO0VBQWlDLHlGQUF3RjtBQXVUM0g7O0FBdFRFO0VBQWlDLHlGQUF3RjtBQTBUM0g7O0FBelRFO0VBQWlDLHlGQUF3RjtBQTZUM0g7O0FBNVRFO0VBQWlDLHlGQUF3RjtBQWdVM0g7O0FBL1RFO0VBQWlDLHlGQUF3RjtBQW1VM0g7O0FBbFVFO0VBQWlDLHlGQUF3RjtBQXNVM0g7O0FBclVFO0VBQWlDLHlGQUF3RjtBQXlVM0g7O0FBeFVFO0VBQWlDLHlGQUF3RjtBQTRVM0g7O0FBM1VFO0VBQWlDLHlGQUF3RjtBQStVM0g7O0FBOVVFO0VBQWlDLHlGQUF3RjtBQWtWM0g7O0FBalZFO0VBQWlDLHlGQUF3RjtBQXFWM0g7O0FBcFZFO0VBQWlDLHlGQUF3RjtBQXdWM0g7O0FBdlZFO0VBQWlDLHlGQUF3RjtBQTJWM0g7O0FBMVZFO0VBQWlDLHlGQUF3RjtBQThWM0g7O0FBN1ZFO0VBQWlDLHlGQUF3RjtBQWlXM0g7O0FBaFdFO0VBQWlDLHlGQUF3RjtBQW9XM0g7O0FBbldFO0VBQWlDLHlGQUF3RjtBQXVXM0g7O0FBdFdFO0VBQWlDLHlGQUF3RjtBQTBXM0g7O0FBeldFO0VBQWlDLHlGQUF3RjtBQTZXM0g7O0FBNVdFO0VBQWlDLHlGQUF3RjtBQWdYM0g7O0FBL1dFO0VBQWlDLHlGQUF3RjtBQW1YM0g7O0FBbFhFO0VBQWlDLHlGQUF3RjtBQXNYM0g7O0FBclhFO0VBQWlDLHlGQUF3RjtBQXlYM0g7O0FBeFhFO0VBQWlDLHlGQUF3RjtBQTRYM0g7O0FBM1hFO0VBQWlDLHlGQUF3RjtBQStYM0g7O0FBOVhFO0VBQWlDLHlGQUF3RjtBQWtZM0g7O0FBallFO0VBQWlDLHlGQUF3RjtBQXFZM0g7O0FBcFlFO0VBQWlDLHlGQUF3RjtBQXdZM0g7O0FBdllFO0VBQWlDLHlGQUF3RjtBQTJZM0g7O0FBMVlFO0VBQWlDLHlGQUF3RjtBQThZM0g7O0FBN1lFO0VBQWlDLHlGQUF3RjtBQWlaM0g7O0FBaFpFO0VBQWlDLHlGQUF3RjtBQW9aM0g7O0FBblpFO0VBQWlDLHlGQUF3RjtBQXVaM0g7O0FBdFpFO0VBQWlDLHlGQUF3RjtBQTBaM0g7O0FBelpFO0VBQWlDLHlGQUF3RjtBQTZaM0g7O0FBNVpFO0VBQWlDLHlGQUF3RjtBQWdhM0g7O0FBL1pFO0VBQWlDLHlGQUF3RjtBQW1hM0g7O0FBbGFFO0VBQWlDLHlGQUF3RjtBQXNhM0g7O0FBcmFFO0VBQWlDLHlGQUF3RjtBQXlhM0g7O0FBeGFFO0VBQWlDLHlGQUF3RjtBQTRhM0g7O0FBM2FFO0VBQWlDLHlGQUF3RjtBQSthM0g7O0FBOWFFO0VBQWlDLHlGQUF3RjtBQWtiM0g7O0FBamJFO0VBQWlDLHlGQUF3RjtBQXFiM0g7O0FBcGJFO0VBQWlDLHlGQUF3RjtBQXdiM0g7O0FBdmJFO0VBQWlDLHlGQUF3RjtBQTJiM0g7O0FBMWJFO0VBQWlDLHlGQUF3RjtBQThiM0g7O0FBN2JFO0VBQWlDLHlGQUF3RjtBQWljM0giLCJmaWxlIjoiY3JlYXRlLWRpcmVjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcclxuXHQvLyBib3gtc2hhZG93OiAwIDJweCAycHggZ2FpbnNib3JvICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuXHQvLyBcdFx0XHRcdFx0XHRcdHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gLy8gbGluZS1oZWlnaHQ6IDIuMTI1O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC43NmVtO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zZWFyY2hJY29ue1xyXG5cdG1hcmdpbi1yaWdodDogMjBweDtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnNlYXJjaC1yZXN1bHRzIHtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1hdC1mb2N1c2VkIC5wbGFjZWhvbGRlciB7XHJcblx0Y29sb3I6IGdyYXk7XHJcbiAgfVxyXG4gIFxyXG4uaGludCB7XHJcblx0cGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcblx0Y29sb3I6IGdyYXk7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5sZWdlbmQge1xyXG5cdHdpZHRoOiBhdXRvO1xyXG5cdC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdGNvbG9yOiBncmF5O1xyXG4gIC8vIG9wYWNpdHk6IDcwJSAhaW1wb3J0YW50O1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblx0cGFkZGluZy1yaWdodDogMjBweDtcclxuXHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi5zaG93RGlyZWN0b3JDYXJkIHtcclxuXHR3aWR0aDogOTUlO1xyXG5cdGhlaWdodDogMTMwcHg7XHJcblx0bWFyZ2luOiAwcHggMHB4IDBweCAzMHB4O1xyXG5cdHBhZGRpbmc6IDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG5cdG1hcmdpbjogMTBweCAxMHB4IDEwcHggMjBweDtcclxuXHQvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyNENDQTc7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG5cdGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5lZGl0QW5kRGVsZXRle1xyXG4gIG1hcmdpbi1sZWZ0OiA1NCU7XHJcbiAgbWFyZ2luLXRvcDogOCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZS1kcm9wZG93biB7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHQvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdC8vIGJhY2tncm91bmQtY29sb3I6ICNBRUQ2RjE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRBNTZFMjtcclxuXHR3aWR0aDogMjVweDtcclxuXHRoZWlnaHQ6IDMycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWRlZmF1bHQtaWNvbiB7XHJcbiAgd2lkdGg6IDEuNGVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oaWRlLWF1dG9jb21wbGV0ZSB7IGRpc3BsYXk6IG5vbmU7IH1cclxuXHJcbi5hbGlnbkltYWdle1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLmN1cnJlbmN5LWZsYWcge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMjRweDtcclxuXHRoZWlnaHQ6IDE2cHg7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGVfZmFsbGJhY2sucG5nJyk7XHJcbiAgfVxyXG5cclxuICAuZWdyZXQtYmx1ZSAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjRDQ0E3IDtcclxuICB9XHJcbiAgLm1hdC1zbGlkZS10b2dnbGUgLm1hdC1hY2NlbnQgLm5nLXZhbGlkIC5uZy1kaXJ0eSAubWF0LWNoZWNrZWQgLm5nLXRvdWNoZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjRDQ0E3IDtcclxuXHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNENDQTc7XHJcbn1cclxuXHJcbiAgLmN1cnJlbmN5LWZsYWctc20ge1xyXG5cdHdpZHRoOiAxNnB4O1xyXG5cdGhlaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5jdXJyZW5jeS1mbGFnLWxnIHtcclxuXHR3aWR0aDogMzZweDtcclxuXHRoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuY3VycmVuY3ktZmxhZy14bCB7XHJcblx0d2lkdGg6IDQ4cHg7XHJcblx0aGVpZ2h0OiAzMnB4O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWFlZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYWVkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWFmbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYWZuLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWFsbHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYWxsLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWFtZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYW1kLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWFuZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYW5nLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWFvYXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYW9hLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWFyc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYXJzLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWF1ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYXVkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWF3Z3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYXdnLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWF6bntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYXpuLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJhbXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYmFtLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJiZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYmJkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJkdHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYmR0LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJnbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYmduLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJoZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYmhkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJpZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYmlmLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJtZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYm1kLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJuZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYm5kLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJvYntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYm9iLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJybHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYnJsLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJzZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYnNkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJ0bntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYnRuLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJ3cHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYndwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJ5bntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYnluLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJ6ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYnpkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWNhZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY2FkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWNkZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY2RmLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWNoZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY2hmLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWNscHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY2xwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWNueXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY255LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWNvcHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY29wLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWNyY3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY3JjLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWN1cHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY3VwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWN2ZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY3ZlLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWN6a3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY3prLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWRqZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZGpmLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWRra3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZGtrLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWRvcHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZG9wLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWR6ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZHpkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWVncHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZWdwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWVybntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZXJuLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWV0YntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZXRiLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWV1cntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZXVyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWZqZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZmpkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWZrcHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZmtwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWdicHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZ2JwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWdlbHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZ2VsLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWdoc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZ2hzLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWdpcHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZ2lwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWdtZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZ21kLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWduZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZ25mLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWd0cXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZ3RxLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWd5ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZ3lkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWhrZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaGtkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWhubHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaG5sLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWhya3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaHJrLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWh0Z3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaHRnLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWh1ZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaHVmLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWlkcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaWRyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWlsc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaWxzLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWlucntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaW5yLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWlxZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaXFkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWlycntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaXJyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWlza3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaXNrLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWptZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvam1kLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWpvZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvam9kLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWpweXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvanB5LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWtlc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUva2VzLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWtnc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUva2dzLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWtocntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUva2hyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWttZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUva21mLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWtwd3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUva3B3LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWtyd3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUva3J3LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWt3ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUva3dkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWt5ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUva3lkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWt6dHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUva3p0LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWxha3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbGFrLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWxicHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbGJwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWxrcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbGtyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWxyZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbHJkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWx0bHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbHRsLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWx5ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbHlkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW1hZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbWFkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW1kbHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbWRsLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW1nYXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbWdhLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW1rZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbWtkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW1ta3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbW1rLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW1udHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbW50LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW1vcHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbW9wLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW1yb3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbXJvLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW11cntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbXVyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW12cntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbXZyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW13a3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbXdrLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW14bntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbXhuLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW15cntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbXlyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW16bntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbXpuLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW5hZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbmFkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW5nbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbmduLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW5pb3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbmlvLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW5va3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbm9rLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW5wcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbnByLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW56ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbnpkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW9tcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvb21yLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXBlbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcGVuLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXBna3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcGdrLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXBocHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcGhwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXBrcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcGtyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXBsbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcGxuLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXB5Z3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcHlnLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXFhcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcWFyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXJvbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcm9uLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXJzZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcnNkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXJ1YntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcnViLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXJ3ZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcndmLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXNhcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc2FyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXNiZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc2JkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXNjcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc2NyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXNla3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc2VrLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXNnZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc2dkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXNocHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc2hwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXNsbHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc2xsLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXNvc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc29zLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXNyZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc3JkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXN0ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc3RkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXN2Y3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc3ZjLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXN5cHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc3lwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXN6bHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc3psLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXRoYntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdGhiLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXRqc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdGpzLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXRuZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdG5kLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXRvcHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdG9wLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXRyeXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdHJ5LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXR0ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdHRkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXR3ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdHdkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXR6c3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdHpzLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXVhaHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdWFoLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXVneHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdWd4LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXVzZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdXNkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXV5dXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdXl1LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXV6c3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdXpzLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXZlZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdmVmLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXZuZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdm5kLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXZ1dntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdnV2LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXdzdHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvd3N0LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXhhZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUveGFmLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXhjZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUveGNkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXhvZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUveG9mLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXhwZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUveHBmLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXllcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUveWVyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXphcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvemFyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXptd3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvem13LnBuZycpO30iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CreateDirectorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'app-create-director',
            templateUrl: './create-director.component.html',
            styleUrls: ['./create-director.component.scss'],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]
          }, {
            type: app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationEntryStageService"]
          }, {
            type: _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }, {
            type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_10__["LocalStoreService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]
          }, {
            type: _director_details_director_details_component__WEBPACK_IMPORTED_MODULE_12__["DirectorDetailsComponent"]
          }];
        }, {
          autocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"]]
          }],
          inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['input']
          }],
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Tual":
    /*!******************************************************************************************!*\
      !*** ./src/app/views/others/onboarding-corporate/onboarding-corporate-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: onboardingCorporateroutes, OnboardingCorporateRoutingModule */

    /***/
    function Tual(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "onboardingCorporateroutes", function () {
        return onboardingCorporateroutes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingCorporateRoutingModule", function () {
        return OnboardingCorporateRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _onborading_primary_onborading_primary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./onborading-primary/onborading-primary.component */
      "h31h");
      /* harmony import */


      var _director_details_director_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./director-details/director-details.component */
      "tCF6");
      /* harmony import */


      var _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./contact-information/contact-information.component */
      "1aja");
      /* harmony import */


      var _proof_of_identity_proof_of_identity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./proof-of-identity/proof-of-identity.component */
      "Gx8H");
      /* harmony import */


      var _onboarding_corporate_main_onboarding_corporate_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./onboarding-corporate-main/onboarding-corporate-main.component */
      "HAfx");
      /* harmony import */


      var _other_info_corporate_other_info_corporate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./other-info-corporate/other-info-corporate.component */
      "qazE");
      /* harmony import */


      var _create_director_create_director_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./create-director/create-director.component */
      "KaOm");

      var onboardingCorporateroutes = [{
        path: 'createDirector',
        component: _create_director_create_director_component__WEBPACK_IMPORTED_MODULE_8__["CreateDirectorComponent"]
      }, {
        path: 'onborading-primary',
        component: _onborading_primary_onborading_primary_component__WEBPACK_IMPORTED_MODULE_2__["OnboradingPrimaryComponent"]
      }, {
        path: 'Director-Details',
        component: _director_details_director_details_component__WEBPACK_IMPORTED_MODULE_3__["DirectorDetailsComponent"]
      }, {
        path: 'conatctInfo',
        component: _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_4__["ContactInformationComponent"]
      }, {
        path: 'proofOfIdentity',
        component: _proof_of_identity_proof_of_identity_component__WEBPACK_IMPORTED_MODULE_5__["ProofOfIdentityComponent"]
      }, {
        path: 'other-info',
        component: _other_info_corporate_other_info_corporate_component__WEBPACK_IMPORTED_MODULE_7__["OtherInfoCorporateComponent"]
      }, {
        path: 'corporate',
        component: _onboarding_corporate_main_onboarding_corporate_main_component__WEBPACK_IMPORTED_MODULE_6__["OnboardingCorporateMainComponent"]
      }];

      var OnboardingCorporateRoutingModule = function OnboardingCorporateRoutingModule() {
        _classCallCheck(this, OnboardingCorporateRoutingModule);
      };

      OnboardingCorporateRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OnboardingCorporateRoutingModule
      });
      OnboardingCorporateRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OnboardingCorporateRoutingModule_Factory(t) {
          return new (t || OnboardingCorporateRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(onboardingCorporateroutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OnboardingCorporateRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnboardingCorporateRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(onboardingCorporateroutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "WRcG":
    /*!**********************************************************************************!*\
      !*** ./src/app/views/others/onboarding-corporate/onboarding-corporate.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: OnboardingCorporateModule */

    /***/
    function WRcG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingCorporateModule", function () {
        return OnboardingCorporateModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _onboarding_corporate_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./onboarding-corporate-routing.module */
      "Tual");
      /* harmony import */


      var _onborading_primary_onborading_primary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./onborading-primary/onborading-primary.component */
      "h31h");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      "u9T3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/slider */
      "mPVK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "40+f");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/chips */
      "f44v");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var angular_highcharts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! angular-highcharts */
      "mE01");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _director_details_director_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./director-details/director-details.component */
      "tCF6");
      /* harmony import */


      var _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./contact-information/contact-information.component */
      "1aja");
      /* harmony import */


      var _proof_of_identity_proof_of_identity_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./proof-of-identity/proof-of-identity.component */
      "Gx8H");
      /* harmony import */


      var _other_info_corporate_other_info_corporate_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./other-info-corporate/other-info-corporate.component */
      "qazE");
      /* harmony import */


      var _onboarding_corporate_main_onboarding_corporate_main_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./onboarding-corporate-main/onboarding-corporate-main.component */
      "HAfx");
      /* harmony import */


      var _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./corporate-onboarding.service */
      "JVXa");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/stepper */
      "hzfI");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _create_director_create_director_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./create-director/create-director.component */
      "KaOm");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");

      var OnboardingCorporateModule = function OnboardingCorporateModule() {
        _classCallCheck(this, OnboardingCorporateModule);
      };

      OnboardingCorporateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OnboardingCorporateModule
      });
      OnboardingCorporateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OnboardingCorporateModule_Factory(t) {
          return new (t || OnboardingCorporateModule)();
        },
        providers: [_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_32__["CorporateOnboardingService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _onboarding_corporate_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnboardingCorporateRoutingModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__["MatStepperModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__["MatAutocompleteModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__["MatExpansionModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_24__["ChartModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_onboarding_corporate_routing_module__WEBPACK_IMPORTED_MODULE_2__["onboardingCorporateroutes"])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OnboardingCorporateModule, {
          declarations: [_onborading_primary_onborading_primary_component__WEBPACK_IMPORTED_MODULE_3__["OnboradingPrimaryComponent"], _director_details_director_details_component__WEBPACK_IMPORTED_MODULE_27__["DirectorDetailsComponent"], _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_28__["ContactInformationComponent"], _proof_of_identity_proof_of_identity_component__WEBPACK_IMPORTED_MODULE_29__["ProofOfIdentityComponent"], _other_info_corporate_other_info_corporate_component__WEBPACK_IMPORTED_MODULE_30__["OtherInfoCorporateComponent"], _onboarding_corporate_main_onboarding_corporate_main_component__WEBPACK_IMPORTED_MODULE_31__["OnboardingCorporateMainComponent"], _create_director_create_director_component__WEBPACK_IMPORTED_MODULE_35__["CreateDirectorComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _onboarding_corporate_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnboardingCorporateRoutingModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__["MatStepperModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__["MatAutocompleteModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__["MatExpansionModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_24__["ChartModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnboardingCorporateModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_onborading_primary_onborading_primary_component__WEBPACK_IMPORTED_MODULE_3__["OnboradingPrimaryComponent"], _director_details_director_details_component__WEBPACK_IMPORTED_MODULE_27__["DirectorDetailsComponent"], _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_28__["ContactInformationComponent"], _proof_of_identity_proof_of_identity_component__WEBPACK_IMPORTED_MODULE_29__["ProofOfIdentityComponent"], _other_info_corporate_other_info_corporate_component__WEBPACK_IMPORTED_MODULE_30__["OtherInfoCorporateComponent"], _onboarding_corporate_main_onboarding_corporate_main_component__WEBPACK_IMPORTED_MODULE_31__["OnboardingCorporateMainComponent"], _create_director_create_director_component__WEBPACK_IMPORTED_MODULE_35__["CreateDirectorComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _onboarding_corporate_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnboardingCorporateRoutingModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__["MatStepperModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__["MatAutocompleteModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__["MatExpansionModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_24__["ChartModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_onboarding_corporate_routing_module__WEBPACK_IMPORTED_MODULE_2__["onboardingCorporateroutes"])],
            providers: [_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_32__["CorporateOnboardingService"]]
          }]
        }], null, null);
      })();

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_director_details_director_details_component__WEBPACK_IMPORTED_MODULE_27__["DirectorDetailsComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_21__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_37__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_37__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_38__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_37__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormControlName"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _create_director_create_director_component__WEBPACK_IMPORTED_MODULE_35__["CreateDirectorComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], []);
      /***/

    },

    /***/
    "h31h":
    /*!******************************************************************************************************!*\
      !*** ./src/app/views/others/onboarding-corporate/onborading-primary/onborading-primary.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: OnboradingPrimaryComponent */

    /***/
    function h31h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboradingPrimaryComponent", function () {
        return OnboradingPrimaryComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../corporate-onboarding.service */
      "JVXa");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/dialogs/dialog.service */
      "laYw");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");

      function OnboradingPrimaryComponent_ng_container_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/type2.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function OnboradingPrimaryComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 44);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function OnboradingPrimaryComponent_mat_error_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Company Name is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OnboradingPrimaryComponent_mat_option_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r9, " ");
        }
      }

      function OnboradingPrimaryComponent_mat_error_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please select Category!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OnboradingPrimaryComponent_mat_option_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", country_r10, " ");
        }
      }

      function OnboradingPrimaryComponent_mat_error_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please select Country!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var OnboradingPrimaryComponent = /*#__PURE__*/function () {
        function OnboradingPrimaryComponent(router, formBuilder, dialogService, corporateService, cdr, route, snack, ls, apiService) {
          _classCallCheck(this, OnboradingPrimaryComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.dialogService = dialogService;
          this.corporateService = corporateService;
          this.cdr = cdr;
          this.route = route;
          this.snack = snack;
          this.ls = ls;
          this.apiService = apiService;
          this.companyNameArr = ['ABC Bank', 'Yes Bank', 'No Bank'];
          this.categoryArr = ['Privileged', 'Un Privileged'];
          this.countryArr = [];
          this.profileImageExist = false;
          this.disableDeletebtn = false;
          this.onboardingPrimary = this.formBuilder.group({
            companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            corporateId: [''],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
          }); // this.corporateService.stepReady(this.onboardingPrimary, 'one')
        }

        _createClass(OnboradingPrimaryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this28 = this;

            this.editCorporateScreen = localStorage.getItem('EDIT-CORPORATEID');
            console.log(this.editCorporateScreen, 'Edit kyc details');
            this.imageURL = 'not_available';
            console.log('imageurl', this.imgUrl);
            this.route.queryParamMap.subscribe(function (params) {
              _this28.imageURL = 'not_available';
              console.log(params.get('index'));

              if (params.get('index')) {
                _this28.corporateService.sendDisableMatTab({
                  index: params.get('index')
                });

                _this28.corporateService.setFinishFlag({
                  finishFlag: false
                }); // this.resetCorprateOnboarding();


                _this28.onboardingPrimary.reset({
                  companyName: '',
                  corporateId: '',
                  category: '',
                  country: ''
                });
              }
            });

            if (this.ls.getItem('corporateId')) {
              this.getCoropratedetails(this.ls.getItem('corporateId'));
            }

            if (this.ls.getItem('EDIT-CORPORATEID')) {
              console.log('KYC Id reference inside'); // let kycReference = this.ls.getItem('kycReference');
              // this.kycReferenceId = kycReference.replace('KYC_', '');

              this.getCoropratedetails(this.ls.getItem('EDIT-CORPORATEID'));
            }

            this.getCountryName('country');
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.ls.getItem('corporateId')) {
              this.getCoropratedetails(this.ls.getItem('corporateId'));
            }
          }
        }, {
          key: "resetCorprateOnboarding",
          value: function resetCorprateOnboarding() {
            this.onboardingPrimary.reset();
            this.ls.removeItem('corporateId');
            this.ls.removeItem('corporateTabIndex');
            this.imageURL = 'not_available';
          }
        }, {
          key: "previous",
          value: function previous() {
            // this.dialogService.openCustomerType();
            this.router.navigateByUrl('/others/customerTypeDialog');
          }
        }, {
          key: "corporateChange",
          value: function corporateChange(event) {
            var _this29 = this;

            this.selectedFiles = event.target.files[0]; // Below part is used to display the selected image

            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = function (event2) {
              _this29.imgUrl = reader.result;
            };
          }
        }, {
          key: "profileChange",
          value: function profileChange(event) {
            var _this30 = this;

            this.profilePicture = event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = function (event2) {
              // this.imgUrl = reader.result;
              //  this.fun(event.target.files[0], this.profilePicture);
              _this30.imageURL = reader.result;
              _this30.disableDeletebtn = true; // this.profileImageExist = true;
            };

            event.target.value = '';
          } // check(onboardingPrimary){
          //   console.log("Before check!");
          //  console.log(this.onboardingPrimary.controls.countryArr);
          //   if (this.countryArr == []  || this.categoryArr == [] || this.companyNameArr == []){
          //     console.log("Aftercheck1")
          //     // var  cssColor =  document.querySelectorAll("#cssColor");
          //     // console.log(cssColor)
          //     // for (let element of cssColor) {
          //       // element.style.color = "red"
          //     // }
          //     document.getElementById("cssColor").style.color = "red";
          //   }
          // }

        }, {
          key: "getCoropratedetails",
          value: function getCoropratedetails(e) {
            var _this31 = this;

            this.corporateId = e;
            this.apiService.getCoropratedetails(e).subscribe(function (details) {
              console.log(details);

              if (details) {
                _this31.ls.setItem('totalCust', details.customerInfo.length); // }
                // if (details.corporateStatus === 'APPROVED') {


                _this31.onboardingPrimary.patchValue(details);

                _this31.getCountrySelection(details.country);

                _this31.imageURL = details.profileImage;
                _this31.imageURL != "not_available" ? _this31.disableDeletebtn = true : false;
                _this31.corporateDetails = details;

                _this31.ls.removeItem('EDIT-CORPORATEID');
              } // if (details) {
              // }
              // else if (
              //   details.corporateStatus === null ||
              //   details.corporateStatus === ''
              // ) {
              //   this.snack.open('Please Enter Approved Corporate Id Number', 'Ok', {
              //     duration: 4000,
              //     verticalPosition: 'top',
              //     horizontalPosition: 'right',
              //   });
              // }
              else {
                  _this31.snack.open('Please Enter Valid Corporate Id Number', 'Ok', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                  });
                }
            });
          }
        }, {
          key: "getCountrySelection",
          value: function getCountrySelection(data) {
            var _this32 = this;

            if (data != null) {
              this.apiService.fetchCurrencyInfo(data).subscribe(function (value) {
                _this32.countryCode = value.currencyCode.toLowerCase();
              });
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(onboardingPrimary) {
            var _this33 = this;

            console.log('onboardingPrimary :: ', onboardingPrimary);
            this.corporateService.saveOrUpdateCorporateAccountInfo(onboardingPrimary).subscribe(function (data) {
              var _a, _b;

              console.log('data :: ', data);
              _this33.corporateId = data.corporateId;

              if (data != null) {
                sessionStorage.setItem("ClosingCheck", 'entered');

                _this33.ls.setItem('corporateId', data.corporateId);

                _this33.corporateService.sendCorporateAccountId(data.corporateId);

                _this33.snack.open('Basic Information Saved' + ' !', 'OK', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });

                _this33.cdr.markForCheck();

                _this33.updateCorporateStatus(data.corporateId);

                if (_this33.profilePicture) {
                  var profileUpload = {};
                  profileUpload.documentName = 'Profile';
                  profileUpload.documentType = 1;
                  profileUpload.fileType = (_a = _this33.profilePicture) === null || _a === void 0 ? void 0 : _a.type;
                  profileUpload.fileName = (_b = _this33.profilePicture) === null || _b === void 0 ? void 0 : _b.name;
                  profileUpload.corporateId = data.corporateId;
                  console.log(profileUpload);
                  var uploadData = new FormData();
                  uploadData.append('data', JSON.stringify(profileUpload));
                  uploadData.append('file', _this33.profilePicture);

                  _this33.apiService.uploadCorporateDocument(uploadData).subscribe(function (response) {}, function (err) {
                    console.log('error', err);
                  });
                }

                _this33.next();
              } else {
                _this33.snack.open('Not able to connect to server!', 'INTERNAL SERVER ERROR', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });
              }

              (function (error) {
                console.log('error resp :: ', error);

                _this33.snack.open("".concat(error.error.message, " "), 'OK', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });
              });
            });
          }
        }, {
          key: "updateCorporateStatus",
          value: function updateCorporateStatus(corporateId) {
            console.log('corporateId :: ', corporateId);
            this.apiService.updateCorporateSatatus(corporateId, 'UNDER_PROCESS').subscribe(function (data) {
              console.log('update response :: ', data);
            });
          }
        }, {
          key: "getProfileImage",
          value: function getProfileImage(customerId, document_type) {
            var _this34 = this;

            this.apiService.getCustomerDocuments(customerId, document_type).subscribe(function (data) {
              console.log('data ::', data);

              if (data.length > 0) {
                _this34.profileId = data[0].id;
                _this34.imageURL = data[0].fileUrl;
              }
            });
          }
        }, {
          key: "deleteProfileImg",
          value: function deleteProfileImg() {
            var _this35 = this;

            this.imageURL = 'not_available';
            var docObj = this.corporateDetails.corporateDocs.find(function (x) {
              return x.documentName == "Profile";
            });
            this.apiService.delCorporateCustDoc(this.corporateId, 'Profile', docObj.id).subscribe(function (data) {
              _this35.snack.open('Profile Image Deleted Successfully', 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            });
            this.disableDeletebtn = false;
          }
        }, {
          key: "next",
          value: function next() {
            this.corporateService.sendDisableMatTab({
              index: 1
            });
            this.corporateService.setFinishFlag({
              finishFlag: false
            });
          }
        }, {
          key: "getCountryName",
          value: function getCountryName(key) {
            var _this36 = this;

            this.apiService.getAllCountries().subscribe(function (data) {
              for (var i = 0; i < data.length; i++) {
                if (data[i].authStatus === 'A') {
                  _this36.countryArr.push(data[i].countryName);
                }
              }
            });
          }
        }]);

        return OnboradingPrimaryComponent;
      }();

      OnboradingPrimaryComponent.ɵfac = function OnboradingPrimaryComponent_Factory(t) {
        return new (t || OnboradingPrimaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_5__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      OnboradingPrimaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: OnboradingPrimaryComponent,
        selectors: [["app-onborading-primary"]],
        decls: 81,
        vars: 13,
        consts: [["ngNativeValidate", "", 3, "formGroup"], [1, "full-width"], [2, "padding", "1rem 0", "background-color", "#F1F1F4"], [2, "padding", "0 4.3rem"], [2, "border-radius", "0px"], [1, "full-width", 2, "padding", "1rem 1rem"], [2, "font-size", "18px"], [2, "width", "70px", "border-bottom", "7px solid #456EFE", "left", "30px", "border-radius", "30px"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "10px"], ["fxFlex", "20%", "fxFlex.xs", "100%", 1, "full-width"], ["fxLayout", "column", "fxLayoutAlign", "space-around center", 1, "full-width"], ["mat-icon-button", "", 2, "float", "right", "padding-top", "8px", "padding-left", "30px", "cursor", "pointer"], ["type", "file", "input", "", "type", "file", "accept", "image/png, image/gif, image/jpg, image/jpeg", 1, "inputStyle", 3, "change"], ["profileFile", ""], ["color", "primary"], [4, "ngIf", "ngIfElse"], ["showAvatar", ""], [1, "ml-87"], ["mat-icon-button", "", "color", "warn", 3, "disabled", "click"], ["fxFlex", "5%"], ["fxFlex", "70%", "fxLayoutGap", "10px"], ["fxLayout", "row", "fxLayoutGap", "100px"], ["fxFlex", "40%", "id", "fech", 1, "form-group"], [1, "hint"], ["matInput", "", "name", "corporateId", "placeholder", "Corporate Id", "formControlName", "corporateId"], ["fxFlex", "row", "fxLayoutAlign", "end end", 1, "fetchDiv"], [1, "fechButtonDiv", "float-end"], [1, "fetchButton", 3, "click"], ["fxFlex", "40%", 1, "form-group"], ["for", "forCompanyName", 1, "hint"], ["matInput", "", "name", "companyName", "formControlName", "companyName", "placeholder", "Company Name"], ["class", "errorClass", 4, "ngIf"], ["for", "forCategory", 1, "hint"], [1, "catagory"], ["formControlName", "category", "id", "forCategory", "required", "", "placeholder", "Category"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "forCountry", 1, "hint"], ["fxFlex", "15"], ["matPrefix", ""], ["fxFlex", "85"], ["formControlName", "country", "id", "forCountry", "required", "", "placeholder", "Country", 3, "selectionChange"], [1, "button"], ["mat-button", "", 1, "Back", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "disabled", "click"], ["alt", "", 1, "formImg", 3, "src"], [1, "errorClass"], [3, "value"]],
        template: function OnboradingPrimaryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Primary Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-divider", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-content", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function OnboradingPrimaryComponent_Template_input_change_15_listener($event) {
              return ctx.profileChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, OnboradingPrimaryComponent_ng_container_19_Template, 2, 1, "ng-container", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, OnboradingPrimaryComponent_ng_template_20_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnboradingPrimaryComponent_Template_button_click_23_listener() {
              return ctx.deleteProfileImg();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-hint", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Corporate Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnboradingPrimaryComponent_Template_p_click_42_listener() {
              return ctx.getCoropratedetails(ctx.onboardingPrimary.get("corporateId").value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Fetch");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnboradingPrimaryComponent_Template_p_click_46_listener() {
              return ctx.resetCorprateOnboarding();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-hint", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Company Name* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, OnboradingPrimaryComponent_mat_error_54_Template, 3, 0, "mat-error", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-hint", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-card", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-select", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, OnboradingPrimaryComponent_mat_option_62_Template, 2, 2, "mat-option", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, OnboradingPrimaryComponent_mat_error_63_Template, 3, 0, "mat-error", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "mat-hint", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-select", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function OnboradingPrimaryComponent_Template_mat_select_selectionChange_73_listener($event) {
              return ctx.getCountrySelection($event.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, OnboradingPrimaryComponent_mat_option_74_Template, 2, 2, "mat-option", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, OnboradingPrimaryComponent_mat_error_75_Template, 3, 0, "mat-error", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnboradingPrimaryComponent_Template_button_click_77_listener() {
              return ctx.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnboradingPrimaryComponent_Template_button_click_79_listener() {
              return ctx.onSubmit(ctx.onboardingPrimary.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.onboardingPrimary);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageURL == "not_available")("ngIfElse", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.disableDeletebtn);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onboardingPrimary.get("companyName").touched && !ctx.onboardingPrimary.get("companyName").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categoryArr);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onboardingPrimary.get("category").touched && !ctx.onboardingPrimary.get("category").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("currency-flag currency-flag-", ctx.countryCode, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.countryArr);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onboardingPrimary.get("country").touched && !ctx.onboardingPrimary.get("country").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.onboardingPrimary.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatHint"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]],
        styles: [".head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 6%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\n.fetchDiv[_ngcontent-%COMP%] {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n\n.fechButtonDiv[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.fetchButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  text-decoration: underline;\n  cursor: pointer;\n  margin-right: 20px;\n}\n\n.Upload[_ngcontent-%COMP%] {\n  vertical-align: c;\n  align-self: center;\n  margin-top: 20px;\n  font-size: 15px;\n  text-decoration: underline;\n  color: #2680EB;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -7%;\n  width: 150px;\n  color: #5D5D5D;\n  background-color: white;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -11%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 70px;\n  border-bottom: 5px solid #456EFE;\n  left: 30px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.hint[_ngcontent-%COMP%] {\n  padding-left: 0.8rem;\n  color: gray;\n  font: normal normal medium 16px/22px Manrope;\n}\n\n.errorClass[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.selectandCard[_ngcontent-%COMP%] {\n  background-color: #FDFDFF;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.gap[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background-color: #F1F1F4;\n}\n\n.gapbw[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n\n.spacearround[_ngcontent-%COMP%] {\n  padding: 0 4.3rem;\n}\n\n.changeInput[_ngcontent-%COMP%] {\n  opacity: 0.0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.formImg[_ngcontent-%COMP%] {\n  height: 200px !important;\n  width: 200px !important;\n  background-color: whitesmoke;\n  border-radius: 50%;\n}\n\n.changeDiv[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: transparent;\n}\n\n.inputStyle[_ngcontent-%COMP%] {\n  opacity: 0.0;\n  top: 0;\n  left: 18px;\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.ml-87[_ngcontent-%COMP%] {\n  margin-left: 87%;\n}\n\n.currency-flag[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 24px;\n  height: 16px;\n  background-size: cover;\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle_fallback.png\");\n}\n\n.currency-flag-sm[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 10px;\n}\n\n.currency-flag-lg[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 24px;\n}\n\n.currency-flag-xl[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 32px;\n}\n\n.currency-flag.currency-flag-aed[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/aed.png\");\n}\n\n.currency-flag.currency-flag-afn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/afn.png\");\n}\n\n.currency-flag.currency-flag-all[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/all.png\");\n}\n\n.currency-flag.currency-flag-amd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/amd.png\");\n}\n\n.currency-flag.currency-flag-ang[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ang.png\");\n}\n\n.currency-flag.currency-flag-aoa[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/aoa.png\");\n}\n\n.currency-flag.currency-flag-ars[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ars.png\");\n}\n\n.currency-flag.currency-flag-aud[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/aud.png\");\n}\n\n.currency-flag.currency-flag-awg[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/awg.png\");\n}\n\n.currency-flag.currency-flag-azn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/azn.png\");\n}\n\n.currency-flag.currency-flag-bam[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bam.png\");\n}\n\n.currency-flag.currency-flag-bbd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bbd.png\");\n}\n\n.currency-flag.currency-flag-bdt[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bdt.png\");\n}\n\n.currency-flag.currency-flag-bgn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bgn.png\");\n}\n\n.currency-flag.currency-flag-bhd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bhd.png\");\n}\n\n.currency-flag.currency-flag-bif[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bif.png\");\n}\n\n.currency-flag.currency-flag-bmd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bmd.png\");\n}\n\n.currency-flag.currency-flag-bnd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bnd.png\");\n}\n\n.currency-flag.currency-flag-bob[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bob.png\");\n}\n\n.currency-flag.currency-flag-brl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/brl.png\");\n}\n\n.currency-flag.currency-flag-bsd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bsd.png\");\n}\n\n.currency-flag.currency-flag-btn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/btn.png\");\n}\n\n.currency-flag.currency-flag-bwp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bwp.png\");\n}\n\n.currency-flag.currency-flag-byn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/byn.png\");\n}\n\n.currency-flag.currency-flag-bzd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bzd.png\");\n}\n\n.currency-flag.currency-flag-cad[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cad.png\");\n}\n\n.currency-flag.currency-flag-cdf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cdf.png\");\n}\n\n.currency-flag.currency-flag-chf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/chf.png\");\n}\n\n.currency-flag.currency-flag-clp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/clp.png\");\n}\n\n.currency-flag.currency-flag-cny[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cny.png\");\n}\n\n.currency-flag.currency-flag-cop[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cop.png\");\n}\n\n.currency-flag.currency-flag-crc[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/crc.png\");\n}\n\n.currency-flag.currency-flag-cup[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cup.png\");\n}\n\n.currency-flag.currency-flag-cve[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cve.png\");\n}\n\n.currency-flag.currency-flag-czk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/czk.png\");\n}\n\n.currency-flag.currency-flag-djf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/djf.png\");\n}\n\n.currency-flag.currency-flag-dkk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/dkk.png\");\n}\n\n.currency-flag.currency-flag-dop[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/dop.png\");\n}\n\n.currency-flag.currency-flag-dzd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/dzd.png\");\n}\n\n.currency-flag.currency-flag-egp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/egp.png\");\n}\n\n.currency-flag.currency-flag-ern[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ern.png\");\n}\n\n.currency-flag.currency-flag-etb[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/etb.png\");\n}\n\n.currency-flag.currency-flag-eur[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/eur.png\");\n}\n\n.currency-flag.currency-flag-fjd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/fjd.png\");\n}\n\n.currency-flag.currency-flag-fkp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/fkp.png\");\n}\n\n.currency-flag.currency-flag-gbp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gbp.png\");\n}\n\n.currency-flag.currency-flag-gel[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gel.png\");\n}\n\n.currency-flag.currency-flag-ghs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ghs.png\");\n}\n\n.currency-flag.currency-flag-gip[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gip.png\");\n}\n\n.currency-flag.currency-flag-gmd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gmd.png\");\n}\n\n.currency-flag.currency-flag-gnf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gnf.png\");\n}\n\n.currency-flag.currency-flag-gtq[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gtq.png\");\n}\n\n.currency-flag.currency-flag-gyd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gyd.png\");\n}\n\n.currency-flag.currency-flag-hkd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/hkd.png\");\n}\n\n.currency-flag.currency-flag-hnl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/hnl.png\");\n}\n\n.currency-flag.currency-flag-hrk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/hrk.png\");\n}\n\n.currency-flag.currency-flag-htg[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/htg.png\");\n}\n\n.currency-flag.currency-flag-huf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/huf.png\");\n}\n\n.currency-flag.currency-flag-idr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/idr.png\");\n}\n\n.currency-flag.currency-flag-ils[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ils.png\");\n}\n\n.currency-flag.currency-flag-inr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/inr.png\");\n}\n\n.currency-flag.currency-flag-iqd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/iqd.png\");\n}\n\n.currency-flag.currency-flag-irr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/irr.png\");\n}\n\n.currency-flag.currency-flag-isk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/isk.png\");\n}\n\n.currency-flag.currency-flag-jmd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/jmd.png\");\n}\n\n.currency-flag.currency-flag-jod[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/jod.png\");\n}\n\n.currency-flag.currency-flag-jpy[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/jpy.png\");\n}\n\n.currency-flag.currency-flag-kes[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kes.png\");\n}\n\n.currency-flag.currency-flag-kgs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kgs.png\");\n}\n\n.currency-flag.currency-flag-khr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/khr.png\");\n}\n\n.currency-flag.currency-flag-kmf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kmf.png\");\n}\n\n.currency-flag.currency-flag-kpw[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kpw.png\");\n}\n\n.currency-flag.currency-flag-krw[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/krw.png\");\n}\n\n.currency-flag.currency-flag-kwd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kwd.png\");\n}\n\n.currency-flag.currency-flag-kyd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kyd.png\");\n}\n\n.currency-flag.currency-flag-kzt[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kzt.png\");\n}\n\n.currency-flag.currency-flag-lak[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lak.png\");\n}\n\n.currency-flag.currency-flag-lbp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lbp.png\");\n}\n\n.currency-flag.currency-flag-lkr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lkr.png\");\n}\n\n.currency-flag.currency-flag-lrd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lrd.png\");\n}\n\n.currency-flag.currency-flag-ltl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ltl.png\");\n}\n\n.currency-flag.currency-flag-lyd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lyd.png\");\n}\n\n.currency-flag.currency-flag-mad[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mad.png\");\n}\n\n.currency-flag.currency-flag-mdl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mdl.png\");\n}\n\n.currency-flag.currency-flag-mga[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mga.png\");\n}\n\n.currency-flag.currency-flag-mkd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mkd.png\");\n}\n\n.currency-flag.currency-flag-mmk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mmk.png\");\n}\n\n.currency-flag.currency-flag-mnt[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mnt.png\");\n}\n\n.currency-flag.currency-flag-mop[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mop.png\");\n}\n\n.currency-flag.currency-flag-mro[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mro.png\");\n}\n\n.currency-flag.currency-flag-mur[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mur.png\");\n}\n\n.currency-flag.currency-flag-mvr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mvr.png\");\n}\n\n.currency-flag.currency-flag-mwk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mwk.png\");\n}\n\n.currency-flag.currency-flag-mxn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mxn.png\");\n}\n\n.currency-flag.currency-flag-myr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/myr.png\");\n}\n\n.currency-flag.currency-flag-mzn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mzn.png\");\n}\n\n.currency-flag.currency-flag-nad[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/nad.png\");\n}\n\n.currency-flag.currency-flag-ngn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ngn.png\");\n}\n\n.currency-flag.currency-flag-nio[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/nio.png\");\n}\n\n.currency-flag.currency-flag-nok[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/nok.png\");\n}\n\n.currency-flag.currency-flag-npr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/npr.png\");\n}\n\n.currency-flag.currency-flag-nzd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/nzd.png\");\n}\n\n.currency-flag.currency-flag-omr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/omr.png\");\n}\n\n.currency-flag.currency-flag-pen[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pen.png\");\n}\n\n.currency-flag.currency-flag-pgk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pgk.png\");\n}\n\n.currency-flag.currency-flag-php[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/php.png\");\n}\n\n.currency-flag.currency-flag-pkr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pkr.png\");\n}\n\n.currency-flag.currency-flag-pln[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pln.png\");\n}\n\n.currency-flag.currency-flag-pyg[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pyg.png\");\n}\n\n.currency-flag.currency-flag-qar[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/qar.png\");\n}\n\n.currency-flag.currency-flag-ron[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ron.png\");\n}\n\n.currency-flag.currency-flag-rsd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/rsd.png\");\n}\n\n.currency-flag.currency-flag-rub[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/rub.png\");\n}\n\n.currency-flag.currency-flag-rwf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/rwf.png\");\n}\n\n.currency-flag.currency-flag-sar[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sar.png\");\n}\n\n.currency-flag.currency-flag-sbd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sbd.png\");\n}\n\n.currency-flag.currency-flag-scr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/scr.png\");\n}\n\n.currency-flag.currency-flag-sek[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sek.png\");\n}\n\n.currency-flag.currency-flag-sgd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sgd.png\");\n}\n\n.currency-flag.currency-flag-shp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/shp.png\");\n}\n\n.currency-flag.currency-flag-sll[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sll.png\");\n}\n\n.currency-flag.currency-flag-sos[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sos.png\");\n}\n\n.currency-flag.currency-flag-srd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/srd.png\");\n}\n\n.currency-flag.currency-flag-std[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/std.png\");\n}\n\n.currency-flag.currency-flag-svc[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/svc.png\");\n}\n\n.currency-flag.currency-flag-syp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/syp.png\");\n}\n\n.currency-flag.currency-flag-szl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/szl.png\");\n}\n\n.currency-flag.currency-flag-thb[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/thb.png\");\n}\n\n.currency-flag.currency-flag-tjs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/tjs.png\");\n}\n\n.currency-flag.currency-flag-tnd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/tnd.png\");\n}\n\n.currency-flag.currency-flag-top[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/top.png\");\n}\n\n.currency-flag.currency-flag-try[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/try.png\");\n}\n\n.currency-flag.currency-flag-ttd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ttd.png\");\n}\n\n.currency-flag.currency-flag-twd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/twd.png\");\n}\n\n.currency-flag.currency-flag-tzs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/tzs.png\");\n}\n\n.currency-flag.currency-flag-uah[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/uah.png\");\n}\n\n.currency-flag.currency-flag-ugx[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ugx.png\");\n}\n\n.currency-flag.currency-flag-usd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/usd.png\");\n}\n\n.currency-flag.currency-flag-uyu[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/uyu.png\");\n}\n\n.currency-flag.currency-flag-uzs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/uzs.png\");\n}\n\n.currency-flag.currency-flag-vef[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/vef.png\");\n}\n\n.currency-flag.currency-flag-vnd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/vnd.png\");\n}\n\n.currency-flag.currency-flag-vuv[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/vuv.png\");\n}\n\n.currency-flag.currency-flag-wst[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/wst.png\");\n}\n\n.currency-flag.currency-flag-xaf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/xaf.png\");\n}\n\n.currency-flag.currency-flag-xcd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/xcd.png\");\n}\n\n.currency-flag.currency-flag-xof[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/xof.png\");\n}\n\n.currency-flag.currency-flag-xpf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/xpf.png\");\n}\n\n.currency-flag.currency-flag-yer[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/yer.png\");\n}\n\n.currency-flag.currency-flag-zar[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/zar.png\");\n}\n\n.currency-flag.currency-flag-zmw[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/zmw.png\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG9uYm9yYWRpbmctcHJpbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFJQTtFQUNFLFlBQVk7QUFEZDs7QUFJQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBRHJCOztBQUlBO0VBQ0EsOEJBQXNCO0VBQXRCLDJCQUFzQjtFQUF0QixzQkFBc0I7QUFEdEI7O0FBSUE7RUFDRSxrQkFBa0I7QUFEcEI7O0FBS0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGtCQUFrQjtBQUZwQjs7QUFNQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsY0FBYztBQUhoQjs7QUFNQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUhwQjs7QUFNQTtFQUVFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBSnJCOztBQU9BO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQW1DO0VBQ25DLFlBQVk7RUFDWixtQkFBbUI7QUFKckI7O0FBT0E7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLFVBQVU7QUFKWjs7QUFPQTtFQUNFLGVBQWU7QUFKakI7O0FBT0E7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUdYLDRDQUEyQztBQU43Qzs7QUFTQTtFQUNFLGlCQUFpQjtBQU5uQjs7QUFTQTtFQUNFLHlCQUF5QjtBQU4zQjs7QUFTQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQ0Y7QUFQQTs7QUFTQTtFQUNFLHdCQUF3QjtBQU4xQjs7QUFTQTtFQUNFLGVBQWU7QUFOakI7O0FBU0E7RUFDRSx5QkFBeUI7QUFOM0I7O0FBU0E7RUFDRSxlQUNGO0FBUEE7O0FBU0E7RUFDRSxpQkFBaUI7QUFObkI7O0FBU0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQU5wQjs7QUFTQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDeEIsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQU5uQjs7QUFTQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0FBTm5COztBQVNBO0VBSUUsa0JBQWtCO0FBVHBCOztBQVlBO0VBQ0UsYUFBYTtBQVRmOztBQVlBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQVR4Qjs7QUFZQTtFQUNFLGtCQUFrQjtBQVRwQjs7QUFXQTtFQUNFLFlBQVk7RUFDWixNQUFNO0VBQ04sVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0FBUnBCOztBQVVBO0VBQ0UsVUFBVTtBQVBaOztBQVNBO0VBQ0UsZ0JBQWdCO0FBTmxCOztBQVFBO0VBQ0MscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDhGQUE2RjtBQUw5Rjs7QUFRRTtFQUNELFdBQVc7RUFDWCxZQUFZO0FBTGI7O0FBUUU7RUFDRCxXQUFXO0VBQ1gsWUFBWTtBQUxiOztBQVFFO0VBQ0QsV0FBVztFQUNYLFlBQVk7QUFMYjs7QUFPRTtFQUFpQyx5RkFBd0Y7QUFIM0g7O0FBSUU7RUFBaUMseUZBQXdGO0FBQTNIOztBQUNFO0VBQWlDLHlGQUF3RjtBQUczSDs7QUFGRTtFQUFpQyx5RkFBd0Y7QUFNM0g7O0FBTEU7RUFBaUMseUZBQXdGO0FBUzNIOztBQVJFO0VBQWlDLHlGQUF3RjtBQVkzSDs7QUFYRTtFQUFpQyx5RkFBd0Y7QUFlM0g7O0FBZEU7RUFBaUMseUZBQXdGO0FBa0IzSDs7QUFqQkU7RUFBaUMseUZBQXdGO0FBcUIzSDs7QUFwQkU7RUFBaUMseUZBQXdGO0FBd0IzSDs7QUF2QkU7RUFBaUMseUZBQXdGO0FBMkIzSDs7QUExQkU7RUFBaUMseUZBQXdGO0FBOEIzSDs7QUE3QkU7RUFBaUMseUZBQXdGO0FBaUMzSDs7QUFoQ0U7RUFBaUMseUZBQXdGO0FBb0MzSDs7QUFuQ0U7RUFBaUMseUZBQXdGO0FBdUMzSDs7QUF0Q0U7RUFBaUMseUZBQXdGO0FBMEMzSDs7QUF6Q0U7RUFBaUMseUZBQXdGO0FBNkMzSDs7QUE1Q0U7RUFBaUMseUZBQXdGO0FBZ0QzSDs7QUEvQ0U7RUFBaUMseUZBQXdGO0FBbUQzSDs7QUFsREU7RUFBaUMseUZBQXdGO0FBc0QzSDs7QUFyREU7RUFBaUMseUZBQXdGO0FBeUQzSDs7QUF4REU7RUFBaUMseUZBQXdGO0FBNEQzSDs7QUEzREU7RUFBaUMseUZBQXdGO0FBK0QzSDs7QUE5REU7RUFBaUMseUZBQXdGO0FBa0UzSDs7QUFqRUU7RUFBaUMseUZBQXdGO0FBcUUzSDs7QUFwRUU7RUFBaUMseUZBQXdGO0FBd0UzSDs7QUF2RUU7RUFBaUMseUZBQXdGO0FBMkUzSDs7QUExRUU7RUFBaUMseUZBQXdGO0FBOEUzSDs7QUE3RUU7RUFBaUMseUZBQXdGO0FBaUYzSDs7QUFoRkU7RUFBaUMseUZBQXdGO0FBb0YzSDs7QUFuRkU7RUFBaUMseUZBQXdGO0FBdUYzSDs7QUF0RkU7RUFBaUMseUZBQXdGO0FBMEYzSDs7QUF6RkU7RUFBaUMseUZBQXdGO0FBNkYzSDs7QUE1RkU7RUFBaUMseUZBQXdGO0FBZ0czSDs7QUEvRkU7RUFBaUMseUZBQXdGO0FBbUczSDs7QUFsR0U7RUFBaUMseUZBQXdGO0FBc0czSDs7QUFyR0U7RUFBaUMseUZBQXdGO0FBeUczSDs7QUF4R0U7RUFBaUMseUZBQXdGO0FBNEczSDs7QUEzR0U7RUFBaUMseUZBQXdGO0FBK0czSDs7QUE5R0U7RUFBaUMseUZBQXdGO0FBa0gzSDs7QUFqSEU7RUFBaUMseUZBQXdGO0FBcUgzSDs7QUFwSEU7RUFBaUMseUZBQXdGO0FBd0gzSDs7QUF2SEU7RUFBaUMseUZBQXdGO0FBMkgzSDs7QUExSEU7RUFBaUMseUZBQXdGO0FBOEgzSDs7QUE3SEU7RUFBaUMseUZBQXdGO0FBaUkzSDs7QUFoSUU7RUFBaUMseUZBQXdGO0FBb0kzSDs7QUFuSUU7RUFBaUMseUZBQXdGO0FBdUkzSDs7QUF0SUU7RUFBaUMseUZBQXdGO0FBMEkzSDs7QUF6SUU7RUFBaUMseUZBQXdGO0FBNkkzSDs7QUE1SUU7RUFBaUMseUZBQXdGO0FBZ0ozSDs7QUEvSUU7RUFBaUMseUZBQXdGO0FBbUozSDs7QUFsSkU7RUFBaUMseUZBQXdGO0FBc0ozSDs7QUFySkU7RUFBaUMseUZBQXdGO0FBeUozSDs7QUF4SkU7RUFBaUMseUZBQXdGO0FBNEozSDs7QUEzSkU7RUFBaUMseUZBQXdGO0FBK0ozSDs7QUE5SkU7RUFBaUMseUZBQXdGO0FBa0szSDs7QUFqS0U7RUFBaUMseUZBQXdGO0FBcUszSDs7QUFwS0U7RUFBaUMseUZBQXdGO0FBd0szSDs7QUF2S0U7RUFBaUMseUZBQXdGO0FBMkszSDs7QUExS0U7RUFBaUMseUZBQXdGO0FBOEszSDs7QUE3S0U7RUFBaUMseUZBQXdGO0FBaUwzSDs7QUFoTEU7RUFBaUMseUZBQXdGO0FBb0wzSDs7QUFuTEU7RUFBaUMseUZBQXdGO0FBdUwzSDs7QUF0TEU7RUFBaUMseUZBQXdGO0FBMEwzSDs7QUF6TEU7RUFBaUMseUZBQXdGO0FBNkwzSDs7QUE1TEU7RUFBaUMseUZBQXdGO0FBZ00zSDs7QUEvTEU7RUFBaUMseUZBQXdGO0FBbU0zSDs7QUFsTUU7RUFBaUMseUZBQXdGO0FBc00zSDs7QUFyTUU7RUFBaUMseUZBQXdGO0FBeU0zSDs7QUF4TUU7RUFBaUMseUZBQXdGO0FBNE0zSDs7QUEzTUU7RUFBaUMseUZBQXdGO0FBK00zSDs7QUE5TUU7RUFBaUMseUZBQXdGO0FBa04zSDs7QUFqTkU7RUFBaUMseUZBQXdGO0FBcU4zSDs7QUFwTkU7RUFBaUMseUZBQXdGO0FBd04zSDs7QUF2TkU7RUFBaUMseUZBQXdGO0FBMk4zSDs7QUExTkU7RUFBaUMseUZBQXdGO0FBOE4zSDs7QUE3TkU7RUFBaUMseUZBQXdGO0FBaU8zSDs7QUFoT0U7RUFBaUMseUZBQXdGO0FBb08zSDs7QUFuT0U7RUFBaUMseUZBQXdGO0FBdU8zSDs7QUF0T0U7RUFBaUMseUZBQXdGO0FBME8zSDs7QUF6T0U7RUFBaUMseUZBQXdGO0FBNk8zSDs7QUE1T0U7RUFBaUMseUZBQXdGO0FBZ1AzSDs7QUEvT0U7RUFBaUMseUZBQXdGO0FBbVAzSDs7QUFsUEU7RUFBaUMseUZBQXdGO0FBc1AzSDs7QUFyUEU7RUFBaUMseUZBQXdGO0FBeVAzSDs7QUF4UEU7RUFBaUMseUZBQXdGO0FBNFAzSDs7QUEzUEU7RUFBaUMseUZBQXdGO0FBK1AzSDs7QUE5UEU7RUFBaUMseUZBQXdGO0FBa1EzSDs7QUFqUUU7RUFBaUMseUZBQXdGO0FBcVEzSDs7QUFwUUU7RUFBaUMseUZBQXdGO0FBd1EzSDs7QUF2UUU7RUFBaUMseUZBQXdGO0FBMlEzSDs7QUExUUU7RUFBaUMseUZBQXdGO0FBOFEzSDs7QUE3UUU7RUFBaUMseUZBQXdGO0FBaVIzSDs7QUFoUkU7RUFBaUMseUZBQXdGO0FBb1IzSDs7QUFuUkU7RUFBaUMseUZBQXdGO0FBdVIzSDs7QUF0UkU7RUFBaUMseUZBQXdGO0FBMFIzSDs7QUF6UkU7RUFBaUMseUZBQXdGO0FBNlIzSDs7QUE1UkU7RUFBaUMseUZBQXdGO0FBZ1MzSDs7QUEvUkU7RUFBaUMseUZBQXdGO0FBbVMzSDs7QUFsU0U7RUFBaUMseUZBQXdGO0FBc1MzSDs7QUFyU0U7RUFBaUMseUZBQXdGO0FBeVMzSDs7QUF4U0U7RUFBaUMseUZBQXdGO0FBNFMzSDs7QUEzU0U7RUFBaUMseUZBQXdGO0FBK1MzSDs7QUE5U0U7RUFBaUMseUZBQXdGO0FBa1QzSDs7QUFqVEU7RUFBaUMseUZBQXdGO0FBcVQzSDs7QUFwVEU7RUFBaUMseUZBQXdGO0FBd1QzSDs7QUF2VEU7RUFBaUMseUZBQXdGO0FBMlQzSDs7QUExVEU7RUFBaUMseUZBQXdGO0FBOFQzSDs7QUE3VEU7RUFBaUMseUZBQXdGO0FBaVUzSDs7QUFoVUU7RUFBaUMseUZBQXdGO0FBb1UzSDs7QUFuVUU7RUFBaUMseUZBQXdGO0FBdVUzSDs7QUF0VUU7RUFBaUMseUZBQXdGO0FBMFUzSDs7QUF6VUU7RUFBaUMseUZBQXdGO0FBNlUzSDs7QUE1VUU7RUFBaUMseUZBQXdGO0FBZ1YzSDs7QUEvVUU7RUFBaUMseUZBQXdGO0FBbVYzSDs7QUFsVkU7RUFBaUMseUZBQXdGO0FBc1YzSDs7QUFyVkU7RUFBaUMseUZBQXdGO0FBeVYzSDs7QUF4VkU7RUFBaUMseUZBQXdGO0FBNFYzSDs7QUEzVkU7RUFBaUMseUZBQXdGO0FBK1YzSDs7QUE5VkU7RUFBaUMseUZBQXdGO0FBa1czSDs7QUFqV0U7RUFBaUMseUZBQXdGO0FBcVczSDs7QUFwV0U7RUFBaUMseUZBQXdGO0FBd1czSDs7QUF2V0U7RUFBaUMseUZBQXdGO0FBMlczSDs7QUExV0U7RUFBaUMseUZBQXdGO0FBOFczSDs7QUE3V0U7RUFBaUMseUZBQXdGO0FBaVgzSDs7QUFoWEU7RUFBaUMseUZBQXdGO0FBb1gzSDs7QUFuWEU7RUFBaUMseUZBQXdGO0FBdVgzSDs7QUF0WEU7RUFBaUMseUZBQXdGO0FBMFgzSDs7QUF6WEU7RUFBaUMseUZBQXdGO0FBNlgzSDs7QUE1WEU7RUFBaUMseUZBQXdGO0FBZ1kzSDs7QUEvWEU7RUFBaUMseUZBQXdGO0FBbVkzSDs7QUFsWUU7RUFBaUMseUZBQXdGO0FBc1kzSDs7QUFyWUU7RUFBaUMseUZBQXdGO0FBeVkzSDs7QUF4WUU7RUFBaUMseUZBQXdGO0FBNFkzSDs7QUEzWUU7RUFBaUMseUZBQXdGO0FBK1kzSDs7QUE5WUU7RUFBaUMseUZBQXdGO0FBa1ozSDs7QUFqWkU7RUFBaUMseUZBQXdGO0FBcVozSDs7QUFwWkU7RUFBaUMseUZBQXdGO0FBd1ozSDs7QUF2WkU7RUFBaUMseUZBQXdGO0FBMlozSDs7QUExWkU7RUFBaUMseUZBQXdGO0FBOFozSDs7QUE3WkU7RUFBaUMseUZBQXdGO0FBaWEzSDs7QUFoYUU7RUFBaUMseUZBQXdGO0FBb2EzSDs7QUFuYUU7RUFBaUMseUZBQXdGO0FBdWEzSDs7QUF0YUU7RUFBaUMseUZBQXdGO0FBMGEzSDs7QUF6YUU7RUFBaUMseUZBQXdGO0FBNmEzSDs7QUE1YUU7RUFBaUMseUZBQXdGO0FBZ2IzSDs7QUEvYUU7RUFBaUMseUZBQXdGO0FBbWIzSDs7QUFsYkU7RUFBaUMseUZBQXdGO0FBc2IzSDs7QUFyYkU7RUFBaUMseUZBQXdGO0FBeWIzSDs7QUF4YkU7RUFBaUMseUZBQXdGO0FBNGIzSDs7QUEzYkU7RUFBaUMseUZBQXdGO0FBK2IzSCIsImZpbGUiOiJvbmJvcmFkaW5nLXByaW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gIC8vICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uYmFzaWMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5tYWluLWhlYWQge1xyXG4gIHBhZGRpbmctbGVmdDogNiU7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmZldGNoRGl2e1xyXG5tYXgtd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uZmVjaEJ1dHRvbkRpdntcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uZmV0Y2hCdXR0b24ge1xyXG4gIGNvbG9yOiAjNDU2RUZFO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4uVXBsb2FkIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYztcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6ICMyNjgwRUI7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDExJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNCU7XHJcbn1cclxuXHJcbi5CYWNrIHtcclxuXHJcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDtcclxuICBtYXJnaW4tbGVmdDogLTclO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBjb2xvcjogIzVENUQ1RDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG59XHJcblxyXG4uTmV4dCB7XHJcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xMSU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgMTA2LCAyNDUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICM0NTZFRkU7XHJcbiAgbGVmdDogMzBweDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmhpbnQge1xyXG4gIHBhZGRpbmctbGVmdDogMC44cmVtO1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIC8vIG9wYWNpdHk6IDcwJTtcclxuICAvLyBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udDpub3JtYWwgbm9ybWFsIG1lZGl1bSAxNnB4LzIycHggTWFucm9wZTtcclxufVxyXG5cclxuLmVycm9yQ2xhc3N7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zZWxlY3RhbmRDYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRGREZGO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdhcCB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4uYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjQ7XHJcbn1cclxuXHJcbi5nYXBidyB7XHJcbiAgcGFkZGluZzogMXJlbSAwXHJcbn1cclxuXHJcbi5zcGFjZWFycm91bmQge1xyXG4gIHBhZGRpbmc6IDAgNC4zcmVtO1xyXG59XHJcblxyXG4uY2hhbmdlSW5wdXQge1xyXG4gIG9wYWNpdHk6IDAuMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtSW1nIHtcclxuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7IFxyXG4gYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNoYW5nZURpdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxke1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuIC8vYm94LXNoYWRvdzogMCAycHggMnB4IGdhaW5zYm9ybyAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1hdC1mb2N1c2VkIC5wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5pbnB1dFN0eWxle1xyXG4gIG9wYWNpdHk6IDAuMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMThweDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZXJyb3J7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4ubWwtODd7XHJcbiAgbWFyZ2luLWxlZnQ6IDg3JTtcclxufVxyXG4uY3VycmVuY3ktZmxhZyB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAyNHB4O1xyXG5cdGhlaWdodDogMTZweDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL3dpc2UuY29tL3B1YmxpYy1yZXNvdXJjZXMvYXNzZXRzL2ZsYWdzL3JlY3RhbmdsZV9mYWxsYmFjay5wbmcnKTtcclxuICB9XHJcblxyXG4gIC5jdXJyZW5jeS1mbGFnLXNtIHtcclxuXHR3aWR0aDogMTZweDtcclxuXHRoZWlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY3VycmVuY3ktZmxhZy1sZyB7XHJcblx0d2lkdGg6IDM2cHg7XHJcblx0aGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLmN1cnJlbmN5LWZsYWcteGwge1xyXG5cdHdpZHRoOiA0OHB4O1xyXG5cdGhlaWdodDogMzJweDtcclxuICB9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hZWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2FlZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hZm57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2Fmbi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hbGx7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2FsbC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hbWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2FtZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hbmd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2FuZy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hb2F7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2FvYS5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hcnN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2Fycy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hdWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2F1ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hd2d7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2F3Zy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hem57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2F6bi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1iYW17YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JhbS5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1iYmR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JiZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1iZHR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JkdC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1iZ257YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2Jnbi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1iaGR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JoZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1iaWZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JpZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ibWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JtZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ibmR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JuZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ib2J7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JvYi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1icmx7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JybC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ic2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JzZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1idG57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2J0bi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1id3B7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2J3cC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ieW57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2J5bi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1iemR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2J6ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jYWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2NhZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jZGZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2NkZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jaGZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2NoZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jbHB7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2NscC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jbnl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2NueS5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jb3B7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2NvcC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jcmN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2NyYy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jdXB7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2N1cC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jdmV7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2N2ZS5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jemt7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2N6ay5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1kamZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2RqZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ka2t7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2Rray5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1kb3B7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2RvcC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1kemR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2R6ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1lZ3B7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2VncC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1lcm57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2Vybi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ldGJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2V0Yi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ldXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2V1ci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1mamR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2ZqZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ma3B7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2ZrcC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1nYnB7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2dicC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1nZWx7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2dlbC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1naHN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2docy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1naXB7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2dpcC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1nbWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2dtZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1nbmZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2duZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ndHF7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2d0cS5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1neWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2d5ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1oa2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2hrZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1obmx7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2hubC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ocmt7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2hyay5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1odGd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2h0Zy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1odWZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2h1Zi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1pZHJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2lkci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1pbHN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2lscy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1pbnJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2luci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1pcWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2lxZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1pcnJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2lyci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1pc2t7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2lzay5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1qbWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2ptZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1qb2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2pvZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1qcHl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2pweS5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1rZXN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2tlcy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1rZ3N7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2tncy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1raHJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2toci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1rbWZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2ttZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1rcHd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2twdy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1rcnd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2tydy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1rd2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2t3ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1reWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2t5ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1renR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2t6dC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1sYWt7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2xhay5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1sYnB7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2xicC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1sa3J7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2xrci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1scmR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2xyZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1sdGx7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2x0bC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1seWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2x5ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tYWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL21hZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tZGx7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL21kbC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tZ2F7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL21nYS5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ta2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL21rZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tbWt7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL21tay5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tbnR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL21udC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tb3B7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL21vcC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tcm97YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL21yby5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tdXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL211ci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tdnJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL212ci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1td2t7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL213ay5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1teG57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL214bi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1teXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL215ci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tem57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL216bi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1uYWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL25hZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1uZ257YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL25nbi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1uaW97YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL25pby5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ub2t7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL25vay5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ucHJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL25wci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1uemR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL256ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1vbXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL29tci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1wZW57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Blbi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1wZ2t7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Bnay5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1waHB7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3BocC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1wa3J7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Brci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1wbG57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Bsbi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1weWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3B5Zy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1xYXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Fhci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1yb257YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Jvbi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1yc2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3JzZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ydWJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3J1Yi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1yd2Z7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3J3Zi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zYXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Nhci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zYmR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3NiZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zY3J7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Njci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zZWt7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Nlay5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zZ2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3NnZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zaHB7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3NocC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zbGx7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3NsbC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zb3N7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Nvcy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zcmR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3NyZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zdGR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3N0ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zdmN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3N2Yy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zeXB7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3N5cC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zemx7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3N6bC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy10aGJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3RoYi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy10anN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Rqcy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy10bmR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3RuZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy10b3B7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3RvcC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy10cnl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3RyeS5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy10dGR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3R0ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy10d2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3R3ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy10enN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3R6cy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy11YWh7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3VhaC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy11Z3h7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3VneC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy11c2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3VzZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy11eXV7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3V5dS5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy11enN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3V6cy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy12ZWZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3ZlZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy12bmR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3ZuZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy12dXZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Z1di5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy13c3R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3dzdC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy14YWZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3hhZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy14Y2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3hjZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy14b2Z7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3hvZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy14cGZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3hwZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy15ZXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3llci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy16YXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3phci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy16bXd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3ptdy5wbmcnKTt9XHJcbiBcclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OnboradingPrimaryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-onborading-primary',
            templateUrl: './onborading-primary.component.html',
            styleUrls: ['./onborading-primary.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]
          }, {
            type: app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]
          }, {
            type: _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_5__["CorporateOnboardingService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreService"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qazE":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/views/others/onboarding-corporate/other-info-corporate/other-info-corporate.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: OtherInfoCorporateComponent */

    /***/
    function qazE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtherInfoCorporateComponent", function () {
        return OtherInfoCorporateComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../corporate-onboarding.service */
      "JVXa");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/dialogs/dialog.service */
      "laYw");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");

      function OtherInfoCorporateComponent_mat_option_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var orgType_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", orgType_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", orgType_r7, " ");
        }
      }

      function OtherInfoCorporateComponent_mat_error_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "OrganizationType is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OtherInfoCorporateComponent_mat_option_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var typeOfOwnership_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", typeOfOwnership_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", typeOfOwnership_r8, " ");
        }
      }

      function OtherInfoCorporateComponent_mat_error_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Type Of Ownership is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OtherInfoCorporateComponent_input_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 34);
        }
      }

      function OtherInfoCorporateComponent_mat_select_43_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var kycStat_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", kycStat_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", kycStat_r10, " ");
        }
      }

      function OtherInfoCorporateComponent_mat_select_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-select", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OtherInfoCorporateComponent_mat_select_43_mat_option_1_Template, 2, 2, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.kycStatusList);
        }
      }

      function OtherInfoCorporateComponent_div_50_legend_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "legend", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Document Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OtherInfoCorporateComponent_div_50_mat_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var docType_r17 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r14.isDocumentOptionDisabled(docType_r17))("value", docType_r17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", docType_r17, " ");
        }
      }

      function OtherInfoCorporateComponent_div_50_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Document Type is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OtherInfoCorporateComponent_div_50_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "fieldset", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OtherInfoCorporateComponent_div_50_legend_2_Template, 2, 0, "legend", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Document Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-select", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function OtherInfoCorporateComponent_div_50_Template_mat_select_valueChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var i_r12 = ctx.index;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r18.changeValue($event, i_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, OtherInfoCorporateComponent_div_50_mat_option_12_Template, 2, 3, "mat-option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, OtherInfoCorporateComponent_div_50_mat_error_13_Template, 3, 0, "mat-error", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 46, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function OtherInfoCorporateComponent_div_50_Template_input_change_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var i_r12 = ctx.index;

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r20.onOtherDocSelect($event.target.files, i_r12, _r16.files[0].name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherInfoCorporateComponent_div_50_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);

            return _r16.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Browse");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherInfoCorporateComponent_div_50_Template_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var item_r11 = ctx.$implicit;
            var i_r12 = ctx.index;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r22.deleteDocument(item_r11, i_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "delete_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r11 = ctx.$implicit;
          var i_r12 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", i_r12 == 0 ? "fieldSetZeroIndex" : "fieldSetNextIndex");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r12 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.documentTypeList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r11.get("documentType").touched && !item_r11.get("documentType").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r11.controls["fileData"].value, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      var OtherInfoCorporateComponent = /*#__PURE__*/function () {
        function OtherInfoCorporateComponent(router, formBuilder, dialogService, corporateService, cdr, snack, ls, apiService) {
          var _this37 = this;

          _classCallCheck(this, OtherInfoCorporateComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.dialogService = dialogService;
          this.corporateService = corporateService;
          this.cdr = cdr;
          this.snack = snack;
          this.ls = ls;
          this.apiService = apiService;
          this.organizationTypeList = ['Public', 'Private'];
          this.typeOfOwnershipList = ['Independent', 'Dependent'];
          this.addressTypeList = ['Registration'];
          this.localityList = ['Bangalore', 'Mangalore'];
          this.kycStatusList = ['APPROVED', 'BACKLOG', 'INITIATED', 'REJECTED'];
          this.otherDocumentArray = [];
          this.selectedDocumentTypes = [];
          this.selectedOptions = [];
          this.isAllSameDigitVal = false;
          this.nameOfDocument = [];
          this.isExistingCustomer = false;

          this.isDocumentOptionDisabled = function (value) {
            return _this37.selectedOptions.includes(value);
          };

          this.otherInfoFormGroup = this.formBuilder.group({
            corporateId: [''],
            organizationType: [''],
            typeOfOwnership: [''],
            kycReference: [''],
            KycStatus: [''],
            corporateRegisterAddress: formBuilder.array([]),
            corporateDocs: formBuilder.array([])
          }); // this.corporateService.stepReady(this.otherInfoFormGroup, 'five')

          this.addAddress();
          this.getCountryName("country");
        }

        _createClass(OtherInfoCorporateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this38 = this;

            this.isExistingCustomer = this.ls.getItem('CorporateExistingCustomer');
            this.corporateService.corporateAccountIdVal.subscribe(function (corporateId) {
              _this38.corporateId = corporateId;
              console.log('corporateId :: ', _this38.corporateId);

              _this38.otherInfoFormGroup.get('corporateId').setValue(corporateId);

              if (_this38.corporateId) {
                _this38.getCoropratedetails(_this38.corporateId);
              }
            });
            this.getDoc();
            this.addDocument();

            if (this.isExistingCustomer === true) {
              var kycValues = this.ls.getItem('KycValues');
              this.otherInfoFormGroup.get('KycStatus').setValue(kycValues.kycStatus);
              this.otherInfoFormGroup.get('kycReference').setValue(kycValues.kycReference);
            }
          }
        }, {
          key: "getDocumentList",
          get: function get() {
            return this.otherInfoFormGroup.get('corporateDocs');
          }
        }, {
          key: "addDocument",
          value: function addDocument() {
            this.getDocumentList.push(this.formBuilder.group({
              documentType: [''],
              documentName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              fileData: ['']
            }));
          }
        }, {
          key: "getAddressData",
          get: function get() {
            return this.otherInfoFormGroup.get('corporateRegisterAddress');
          }
        }, {
          key: "addAddress",
          value: function addAddress() {
            this.getAddressData.push(this.formBuilder.group({
              addressType: [''],
              address1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              address2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              city: [''],
              state: [''],
              country: [''],
              zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10)]]
            }));
          }
        }, {
          key: "_keyPress",
          value: function _keyPress(event) {
            var pattern = /[0-9]/;
            var inputChar = String.fromCharCode(event.charCode);

            if (!pattern.test(inputChar)) {
              event.preventDefault();
            }
          }
        }, {
          key: "deleteDocument",
          value: function deleteDocument(item, i) {
            console.log('delete record :: ', item, ' index :: ', i);
            this.getDocumentList.removeAt(i);
          }
        }, {
          key: "getCountryName",
          value: function getCountryName(key) {
            var _this39 = this;

            this.apiService.getAllCountries().subscribe(function (data) {
              for (var i = 0; i < data.length; i++) {
                if (data[i].authStatus === 'A') {
                  _this39.arrayCountry.push(data[i].countryName);
                }
              }
            });
          }
        }, {
          key: "getStateName",
          value: function getStateName(country) {
            var _this40 = this;

            this.apiService.getAllCountries().subscribe(function (data) {
              for (var i = 0; i < data.length; i++) {
                if (data[i].countryName == country) {
                  _this40.apiService.getStateByCountryId(data[i].id).subscribe(function (resp) {
                    _this40.arrayState = resp;
                  });

                  break;
                }
              }
            });
          }
        }, {
          key: "getCityName",
          value: function getCityName(state) {
            var _this41 = this;

            console.log(state);
            this.apiService.getDropDownValues1("city", state).subscribe(function (data) {
              _this41.arrayCity = data;
              console.log("-->", _this41.arrayCity);
            });
          }
        }, {
          key: "onOtherDocSelect",
          value: function onOtherDocSelect(files, idx, fileName) {
            var _this42 = this;

            console.log("Filelisttt", files);
            console.log("cheeck::", this.otherInfoFormGroup);
            this.otherDocumentArray.push(files.item(0));
            this.otherInfoFormGroup.get('corporateDocs')['controls'][idx].controls.documentName.setValue(fileName);
            var reader = new FileReader();
            reader.readAsDataURL(files.item(0));

            reader.onload = function (event2) {
              console.log("doc upload check");
              console.log("jaskd", _this42.otherInfoFormGroup.get('corporateDocs')['controls'][idx].controls.fileData);

              _this42.otherInfoFormGroup.get('corporateDocs')['controls'][idx].controls.fileData.setValue(reader.result);
            };
          } // public profileChange(event) {
          //   console.log("profile", event);
          //   this.profilePicture = event.target.files[0];
          //   let reader = new FileReader();
          //   reader.readAsDataURL(event.target.files[0]);
          //   reader.onload = (event2) => {
          //     // this.imgUrl = reader.result;
          //     //this.fun(event.target.files[0], this.profilePicture);
          //     // this.imageURL = reader.result;
          //     // console.log("Profile Test:: ",this.imageURL)
          //     this.profileURL = reader.result;
          //     console.log("Profile Image Test:: ", reader.result)
          //   };
          // }

        }, {
          key: "getCoropratedetails",
          value: function getCoropratedetails(e) {
            var _this43 = this;

            this.apiService.getCoropratedetails(e).subscribe(function (details) {
              console.log(details.corporateDocs.length);
              _this43.nameOfDocument = details.corporateDocs;

              for (var i = 0; i < details.corporateDocs.length; i++) {
                if (details.corporateDocs.length > 1 && details.corporateDocs[i].documentName !== "profile") {
                  _this43.otherInfoFormGroup.patchValue(details);

                  _this43.otherInfoFormGroup.controls.corporateDocs['controls'][i].controls.documentType.setValue(_this43.documentTypeList[i + 1]);

                  _this43.otherInfoFormGroup.controls.corporateDocs['controls'][i].controls.fileData.setValue(details.corporateDocs[i + 1].fileUrl);
                }
              }

              _this43.getStateName(details.corporateAddress[0].country);

              _this43.getCityName(details.corporateAddress[0].state);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(otherInfoFormGroup) {
            var _this44 = this;

            console.log("otherInfoFormGroup BEFORE:: ", otherInfoFormGroup);
            var obj = {};
            Object.keys(otherInfoFormGroup).map(function (key, index) {
              if (key != 'corporateDocs') {
                obj[key] = otherInfoFormGroup[key];
              }
            });
            console.log('doc legth :: ', this.otherDocumentArray);
            console.log("otherInfoFormGroup after:: ", obj);
            this.corporateService.saveOrUpdateCorporateAccountInfo(obj).subscribe(function (data) {
              console.log('data :: ', data);

              if (data != null) {
                for (var i = 0; i < _this44.otherInfoFormGroup.get('corporateDocs').value.length; i++) {
                  if (_this44.otherDocumentArray.length > 0) {
                    var documentToBeUploaded = {};
                    documentToBeUploaded.documentName = _this44.otherInfoFormGroup.get('corporateDocs').value[i].documentType;
                    documentToBeUploaded.documentType = 2;
                    documentToBeUploaded.fileType = _this44.otherDocumentArray[i].type;
                    documentToBeUploaded.fileName = _this44.otherDocumentArray[i].name;
                    documentToBeUploaded.corporateId = data.corporateId;
                    documentToBeUploaded.id = _this44.otherDocumentArray[i].id;
                    var uploadData = new FormData();
                    uploadData.append('data', JSON.stringify(documentToBeUploaded));
                    uploadData.append('file', _this44.otherDocumentArray[i]);

                    _this44.apiService.uploadCorporateDocument(uploadData).subscribe(function (resp) {
                      console.log(resp);
                    });
                  }
                }

                _this44.updateCorporateStatus(data.corporateId);

                _this44.dialogService.customerOnboardingSuccessDialogue('CORPORATE', _this44.corporateId);

                _this44.otherInfoFormGroup.reset();

                _this44.ls.removeItem('corporateId');

                _this44.ls.removeItem('corporateTabIndex');

                _this44.corporateService.sendDisableMatTab({
                  index: 0
                });

                _this44.corporateService.setnoOfDirectors(null); // this.snack.open(`Other information saved`+ ' !', 'OK', {
                //   duration: 4000,
                //   verticalPosition: 'top',
                //   horizontalPosition: 'right'
                // });


                _this44.cdr.markForCheck();
              } else {
                _this44.snack.open('Not able to connect to server!', 'INTERNAL SERVER ERROR', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });
              }
            }, function (error) {
              console.log('error resp :: ', error);

              _this44.snack.open("".concat(error.error.message, " "), 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            });
          }
        }, {
          key: "previous",
          value: function previous() {
            this.corporateService.sendDisableMatTab({
              index: 3
            });
          }
        }, {
          key: "next",
          value: function next() {
            // this.corporateService.sendDisableMatTab({
            //   index: 4,
            // });
            this.corporateService.setFinishFlag({
              finishFlag: true
            });
          }
        }, {
          key: "updateCorporateStatus",
          value: function updateCorporateStatus(corporateId) {
            console.log('corporateId :: ', corporateId);
            this.apiService.updateCorporateSatatus(corporateId, 'INITIATED').subscribe(function (data) {
              console.log('update response :: ', data);
            });
          }
        }, {
          key: "getDoc",
          value: function getDoc() {
            var _this45 = this;

            this.apiService.getDropDownValues("document_type").subscribe(function (data) {
              _this45.documentTypeList = data;
            });
            this.apiService.getDropDownValues("document_name").subscribe(function (resp) {
              _this45.idTypeList = resp;
            });
            this.apiService.getDropDownValues("country").subscribe(function (responseData) {
              _this45.countryList = responseData;
            });
            this.apiService.getDropDownValues("gender").subscribe(function (responseDatas) {
              _this45.genderList = responseDatas;
            });
            this.apiService.getDropDownValues("residence").subscribe(function (responses) {
              _this45.residenceList = responses;
            });
            this.apiService.getDropDownValues("nationality").subscribe(function (datas) {
              _this45.nationalityList = datas;
            });
          }
        }, {
          key: "changeValue",
          value: function changeValue(value, index) {
            var _this46 = this;

            console.log(index);

            if (this.selectedDocumentTypes[index]) {
              this.selectedOptions = this.selectedOptions.filter(function (val) {
                return val !== _this46.selectedDocumentTypes[index];
              });
            }

            this.selectedDocumentTypes[index] = value;
            console.log(value);
            this.selectedOptions.push(value); // this.arrayDocumentType = this.arrayDocumentType.filter(document => document !== value);
          }
        }, {
          key: "isAllSameDigit",
          value: function isAllSameDigit(event) {
            var count = 0,
                number = event.target.value;

            if (number != '') {
              for (var i = 0; i < number.length; i++) {
                if (0 == number[i]) {
                  count++;
                }
              }

              if (count == number.length) {
                this.isAllSameDigitVal = true;
              } else {
                this.isAllSameDigitVal = false;
              }
            } else {
              this.isAllSameDigitVal = false;
            }
          }
        }]);

        return OtherInfoCorporateComponent;
      }();

      OtherInfoCorporateComponent.ɵfac = function OtherInfoCorporateComponent_Factory(t) {
        return new (t || OtherInfoCorporateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      OtherInfoCorporateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: OtherInfoCorporateComponent,
        selectors: [["app-other-info-corporate"]],
        decls: 64,
        vars: 10,
        consts: [["ngNativeValidate", "", 3, "formGroup"], [1, "full-width"], [2, "padding", "1rem 0", "background-color", "#F1F1F4"], [2, "padding", "0 4.3rem"], [2, "border-radius", "0px"], ["fxLayout", "column", "fxLayoutAlign", "space-around start", 1, "full-width"], [1, "full-width", 2, "padding", "1rem 1rem"], [2, "font-size", "18px"], [2, "width", "70px", "border-bottom", "7px solid #456EFE", "left", "30px", "border-radius", "30px"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxLayoutGap", "20px"], ["fxFlex", "50"], [2, "border-top", "1px solid lightgray", "margin-left", "20px", "margin-right", "20px"], ["visible", "true"], ["fxFlex", "100", "fxLayoutGap", "20px", 1, "padding"], ["fxFlex", "50", 1, "form-group"], ["appearance", "outline", 1, "full-width"], ["id", "forOrganizationType", "formControlName", "organizationType", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "forTypeOfOwnership", "formControlName", "typeOfOwnership", "required", ""], ["matInput", "", "id", "forkycStatus", "readonly", "", "formControlName", "KycStatus", 4, "ngIf"], ["id", "forkycStatus", "formControlName", "KycStatus", 4, "ngIf"], ["matInput", "", "id", "forkycReference", "formControlName", "kycReference", 3, "readonly"], ["formArrayName", "corporateDocs"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxLayoutGap", "1px"], ["fxFlex", "1"], ["fxFlex", "20"], ["mat-button", "", "color", "primary", 3, "click"], [1, "button"], ["mat-button", "", 1, "Back", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "disabled", "click"], [3, "value"], ["matInput", "", "id", "forkycStatus", "readonly", "", "formControlName", "KycStatus"], ["id", "forkycStatus", "formControlName", "KycStatus"], [3, "formGroupName"], [3, "ngClass"], ["visible", "true", 4, "ngIf"], ["fxFlex", "30", 1, "form-group"], ["id", "forDocumentType", "formControlName", "documentType", "required", "", 3, "valueChange"], ["disabled", ""], [3, "disabled", "value", 4, "ngFor", "ngForOf"], ["fxFlex", "10%", "fxFlex.xs", "100%", 1, "pt20"], ["height", "80px", "width", "85px", 3, "src"], ["fxFlex", "30", "fxLayoutGap", "5px", 2, "display", "flex", "margin-top", "20px", "align-content", "center"], ["type", "file", "name", "fileData", "formControlName", "fileData", 1, "default-background", 2, "display", "none", "margin-top", "20px", 3, "change"], ["fileData", ""], ["mat-button", "", 2, "text-decoration", "underline", "color", "#456EFE", 3, "routerLink", "click"], ["mat-button", "", 3, "click"], [2, "color", "tomato"], [3, "disabled", "value"]],
        template: function OtherInfoCorporateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Other Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "fieldset", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "legend", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Organization Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Organization Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, OtherInfoCorporateComponent_mat_option_23_Template, 2, 2, "mat-option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, OtherInfoCorporateComponent_mat_error_24_Template, 3, 0, "mat-error", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Type Of Ownership");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-select", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, OtherInfoCorporateComponent_mat_option_30_Template, 2, 2, "mat-option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, OtherInfoCorporateComponent_mat_error_31_Template, 3, 0, "mat-error", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "fieldset", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "legend", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "KYC Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "KYC Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, OtherInfoCorporateComponent_input_42_Template, 1, 0, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, OtherInfoCorporateComponent_mat_select_43_Template, 2, 1, "mat-select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-form-field", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "KYC Reference");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, OtherInfoCorporateComponent_div_50_Template, 24, 6, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherInfoCorporateComponent_Template_button_click_55_listener() {
              return ctx.addDocument();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " ADD DOCUMENT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherInfoCorporateComponent_Template_button_click_60_listener() {
              return ctx.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherInfoCorporateComponent_Template_button_click_62_listener() {
              return ctx.onSubmit(ctx.otherInfoFormGroup.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Finish");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.otherInfoFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.organizationTypeList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.otherInfoFormGroup.get("organizationType").touched && !ctx.otherInfoFormGroup.get("organizationType").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.typeOfOwnershipList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.otherInfoFormGroup.get("typeOfOwnership").touched && !ctx.otherInfoFormGroup.get("typeOfOwnership").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isExistingCustomer);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isExistingCustomer);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", ctx.isExistingCustomer);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.otherInfoFormGroup.get("corporateDocs")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.otherInfoFormGroup.get("organizationType").invalid || ctx.otherInfoFormGroup.get("typeOfOwnership").invalid || ctx.otherInfoFormGroup.get("corporateDocs").invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["DefaultClassDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: [".button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -7%;\n  width: 150px;\n  color: #5D5D5D;\n  background-color: white;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -11%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.fieldSetZeroIndex[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgray;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.fieldSetNextIndex[_ngcontent-%COMP%] {\n  border-top: 0px solid lightgray;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.padding[_ngcontent-%COMP%] {\n  padding-top: 3%;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: gray;\n}\n\nlegend[_ngcontent-%COMP%] {\n  width: auto;\n  color: gray;\n  font-size: 20px;\n  padding-right: 20px;\n  font-family: 'Montserrat', Courier, monospace;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgray;\n  border-bottom: 0px solid lightgray;\n  border-right: 0px solid lightgray;\n  border-left: 0px solid lightgray;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n}\n\n.hint[_ngcontent-%COMP%] {\n  padding-left: 0.8rem;\n  color: #0F0F0F;\n  opacity: 70%;\n  font: normal normal medium 16px/22px Manrope;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG90aGVyLWluZm8tY29ycG9yYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBRUUseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFBckI7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBbUM7RUFDbkMsWUFBWTtFQUNaLG1CQUFtQjtBQUFyQjs7QUFFQTtFQUNFLCtCQUErQjtFQUFDLGlCQUFpQjtFQUFFLGtCQUFrQjtBQUd2RTs7QUFBQTtFQUNFLCtCQUErQjtFQUFDLGlCQUFpQjtFQUFFLGtCQUFrQjtBQUt2RTs7QUFGRTtFQUlFLGtCQUFrQjtBQUV0Qjs7QUFFRTtFQUNFLGFBQWE7QUFDakI7O0FBRUU7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQzFCOztBQUVFO0VBQ0UsZUFBZTtBQUNuQjs7QUFFRTtFQUNFLFdBQVc7QUFDZjs7QUFFRTtFQUNFLFdBQVc7RUFFWCxXQUFXO0VBRVgsZUFBZTtFQUVmLG1CQUFtQjtFQUNuQiw2Q0FBNkM7QUFGakQ7O0FBS0U7RUFDRSwrQkFBK0I7RUFDL0Isa0NBQWtDO0VBQ2xDLGlDQUFpQztFQUNqQyxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFGcEI7O0FBS0U7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLFlBQVk7RUFDWiw0Q0FBMkM7QUFGL0MiLCJmaWxlIjoib3RoZXItaW5mby1jb3Jwb3JhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1sZWZ0OiAxMSU7XHJcbiAgcGFkZGluZy1yaWdodDogMTQlO1xyXG59XHJcblxyXG4uQmFjayB7XHJcblxyXG4gIG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC03JTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcclxufVxyXG5cclxuLk5leHQge1xyXG4gIG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTElO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDEwNiwgMjQ1KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTVweDtcclxufVxyXG4uZmllbGRTZXRaZXJvSW5kZXh7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTttYXJnaW4tbGVmdDogMjBweDsgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZmllbGRTZXROZXh0SW5kZXh7XHJcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIGxpZ2h0Z3JheTttYXJnaW4tbGVmdDogMjBweDsgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgLy8gcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAgIC8vIGJveC1zaGFkb3c6IDAgMnB4IDJweCBnYWluc2Jvcm8gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIC8vIGxpbmUtaGVpZ2h0OiAyLjEyNTtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAucGFkZGluZ3tcclxuICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9jdXNlZCAucGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgfVxyXG4gIFxyXG4gIGxlZ2VuZCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICAvLyBvcGFjaXR5OiA3MCUgIWltcG9ydGFudDsgICAgXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gIH1cclxuICBcclxuICBmaWVsZHNldCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1yaWdodDogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1sZWZ0OiAwcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhpbnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcbiAgICBjb2xvcjogIzBGMEYwRjtcclxuICAgIG9wYWNpdHk6IDcwJTsgICAgXHJcbiAgICBmb250Om5vcm1hbCBub3JtYWwgbWVkaXVtIDE2cHgvMjJweCBNYW5yb3BlO1xyXG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OtherInfoCorporateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-other-info-corporate',
            templateUrl: './other-info-corporate.component.html',
            styleUrls: ['./other-info-corporate.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]
          }, {
            type: app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
          }, {
            type: _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tCF6":
    /*!**************************************************************************************************!*\
      !*** ./src/app/views/others/onboarding-corporate/director-details/director-details.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: DirectorDetailsComponent */

    /***/
    function tCF6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DirectorDetailsComponent", function () {
        return DirectorDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../corporate-onboarding.service */
      "JVXa");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");

      function DirectorDetailsComponent_app_create_director_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-create-director", 21);
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1)("index", i_r2);
        }
      }

      var DirectorDetailsComponent = /*#__PURE__*/function () {
        function DirectorDetailsComponent(router, formBuilder, corporateService, cdr, ls, apiService) {
          _classCallCheck(this, DirectorDetailsComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.corporateService = corporateService;
          this.cdr = cdr;
          this.ls = ls;
          this.apiService = apiService;
          this.items = [];
          this.directorCount = 1;
          this.disabledBtn = true;
          this.directorFormGroup = this.formBuilder.group({
            "noOfDirector": [1]
          }); // this.corporateService.stepReady(this.directorFormGroup, 'two')
        }

        _createClass(DirectorDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this47 = this;

            console.log("testtt");
            console.log('items :: ', this.items.length);
            this.totalCust = this.ls.getItem('totalCust');
            console.log(this.totalCust);
            console.log(this.items); // if(this.totalCust!=null && this.totalCust<1){
            //   this.items.push(this.totalCust)
            // }

            this.getCoropratedetails(this.ls.getItem('corporateId'));
            console.log(this.items);
            this.corporateService.setnoOfDirectors(this.directorFormGroup.get('noOfDirector').value);
            this.directorFormGroup.valueChanges.subscribe(function (data) {
              console.log('data : ', data);

              _this47.corporateService.setnoOfDirectors(data.noOfDirector);
            });
            this.corporateService.getfinishSave().subscribe(function (disSave) {
              // console.log('disSave :: ',disSave);
              if (_this47.totalCust != null) {
                _this47.directorFormGroup.get('noOfDirector').setValue(_this47.totalCust);
              }

              var count = 0;

              if (disSave.length > 0) {
                disSave.forEach(function (element, key) {
                  // console.log('ele :: ',element, ' key :: ',key);
                  if (element == true) {
                    count++;
                  }
                });

                if (count == disSave.length) {
                  _this47.disabledBtn = false;
                } else {
                  _this47.disabledBtn = true;
                }
              }
            });
          }
        }, {
          key: "getCoropratedetails",
          value: function getCoropratedetails(id) {
            var _this48 = this;

            this.apiService.getCoropratedetails(id).subscribe(function (details) {
              if (details) {
                if (details.customerInfo.length > 0) {
                  _this48.directorFormGroup.get('noOfDirector').setValue(details.customerInfo.length);

                  for (var i = 0; i < details.customerInfo.length; i++) {
                    _this48.items.push(details.customerInfo[i]);
                  }
                } else {
                  _this48.items.push(1);
                }
              }
            });
          }
        }, {
          key: "onBack",
          value: function onBack(form) {
            console.log('form :: ', form);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(directorFormGroup) {
            console.log("directorFormGroup :: ", directorFormGroup);
            this.next();
          }
        }, {
          key: "previous",
          value: function previous() {
            // this.documentForm.reset();
            this.corporateService.sendDisableMatTab({
              index: 0
            });
          }
        }, {
          key: "next",
          value: function next() {
            this.corporateService.sendDisableMatTab({
              index: 2
            });
            this.corporateService.setFinishFlag({
              finishFlag: false
            });
          }
        }, {
          key: "_keyPress",
          value: function _keyPress(event) {
            // console.log("key",event);
            var pattern = /[0-9]/;
            var inputChar = String.fromCharCode(event.charCode);

            if (!pattern.test(inputChar)) {
              event.preventDefault();
            }
          }
        }, {
          key: "noOFDirector",
          value: function noOFDirector(event) {
            if (event.target.value.length === 0 && event.key == "0") {
              event.preventDefault();
            }
          } //   noOfDirector(event) {
          //     let value = event.target.value;
          //     if (value != '' && value != null && value != undefined && value != ' ' && value != " ") {
          //       console.log(parseInt(value));
          //       this.number = parseInt(value);
          // console.log("number",this.number);
          //       if (this.number != NaN && this.number == 1) {
          //         console.log("1st");
          //         if (this.items.length > this.number) {
          //           // this.items.pop();
          //           for (let index = this.number; index <=this.items.length; index++) {
          //             this.items.pop();
          //             }
          //         }
          //       }
          //       if (this.number != NaN && this.number > 1) {
          //         console.log("2nd");
          //         if (this.number > this.items.length) {
          //           for (let i = this.items.length + 1; i <= this.number; i++) {
          //             this.items.push(i);
          //           }
          //         }
          //         // else {
          //         //   for (let i = this.items.length - 1; i >= this.number; i--) {
          //         //     this.removeSign(i);
          //         //   }
          //         // }
          //         if (this.number < this.items.length) {
          //           console.log("3rd");
          //           for (let index = this.number; index <=this.items.length; index++) {
          //             this.items.pop();
          //           }
          //         }
          //         this.cdr.detectChanges();
          //         this.cdr.markForCheck();
          //       }
          //     }
          //   }

        }, {
          key: "noOfDirector",
          value: function noOfDirector(event) {
            var value = event.target.value;

            if (value != '' && value != null && value != undefined && value != ' ' && value != " ") {
              console.log(parseInt(value));
              this.number = parseInt(value);
              var itemLength = this.items.length;

              if (!isNaN(this.number) && this.number == 1) {
                if (this.items.length > this.number) {
                  for (var index = this.number; index < itemLength; index++) {
                    this.items.pop();
                  }
                }
              }

              if (!isNaN(this.number) && this.number > 1) {
                if (this.number > this.items.length) {
                  for (var i = this.items.length + 1; i <= this.number; i++) {
                    this.items.push(i);
                  }
                }

                if (this.number < this.items.length) {
                  for (var _index = this.number; _index < itemLength; _index++) {
                    this.items.pop();
                  }
                }

                this.cdr.detectChanges();
                this.cdr.markForCheck();
              }
            }
          }
        }, {
          key: "removeSign",
          value: function removeSign(i) {
            throw new Error('Method not implemented.');
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {}
        }]);

        return DirectorDetailsComponent;
      }();

      DirectorDetailsComponent.ɵfac = function DirectorDetailsComponent_Factory(t) {
        return new (t || DirectorDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_5__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));
      };

      DirectorDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DirectorDetailsComponent,
        selectors: [["app-director-details"]],
        viewQuery: function DirectorDetailsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
          }
        },
        decls: 28,
        vars: 3,
        consts: [["ngNativeValidate", "", 3, "formGroup"], [1, "full-width"], [2, "padding", "1rem 0", "background-color", "#F1F1F4"], [2, "padding", "0 4.3rem"], [2, "border-radius", "0px"], ["fxLayout", "column", "fxLayoutAlign", "space-around start", 1, "full-width"], [1, "full-width", 2, "padding", "1rem 1rem"], [2, "font-size", "18px"], [2, "width", "70px", "border-bottom", "7px solid #456EFE", "left", "30px", "border-radius", "30px"], ["fxLayout", "row wrap", 1, "top"], ["fxFlex", "100"], ["fxFlex", "40"], ["appearance", "outline"], ["formControlName", "noOfDirector", "matInput", "", "id", "forNoOfDirectors", "placeholder", "Enter no of directors", 3, "keypress", "keydown", "keyup"], ["visible", "true"], [1, "top"], [1, "custom-accordion"], [3, "item", "index", 4, "ngFor", "ngForOf"], [1, "button"], ["mat-button", "", 1, "Back", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "disabled", "click"], [3, "item", "index"]],
        template: function DirectorDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "Form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Director Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Number of Directors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DirectorDetailsComponent_Template_input_keypress_16_listener($event) {
              return ctx._keyPress($event);
            })("keydown", function DirectorDetailsComponent_Template_input_keydown_16_listener($event) {
              return ctx.noOFDirector($event);
            })("keyup", function DirectorDetailsComponent_Template_input_keyup_16_listener($event) {
              return ctx.noOfDirector($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "fieldset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "legend", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Details Of the Director");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-accordion", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DirectorDetailsComponent_app_create_director_22_Template, 1, 2, "app-create-director", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectorDetailsComponent_Template_button_click_24_listener() {
              return ctx.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectorDetailsComponent_Template_button_click_26_listener() {
              return ctx.onSubmit(ctx.directorFormGroup.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.directorFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabledBtn);
          }
        },
        styles: [".head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 6%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\n.border[_ngcontent-%COMP%] {\n  margin-top: -10px;\n  margin-left: 150px;\n  height: 1px;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  margin-left: 13px;\n  font-size: 17px;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #456EFE;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  color: #456EFE;\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  color: gray;\n}\n\n.mat-button-wrapper.svg[_ngcontent-%COMP%] {\n  margin-left: 100px;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n\n.top[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.matborder[_ngcontent-%COMP%] {\n  border: solid 1px #E0E0E0;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: transparent;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nlegend[_ngcontent-%COMP%] {\n  width: auto;\n  color: gray;\n  font-size: 20px;\n  padding-right: 20px;\n  font-family: 'Montserrat', Courier, monospace;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgray;\n  border-bottom: 0px solid lightgray;\n  border-right: 0px solid lightgray;\n  border-left: 0px solid lightgray;\n  margin-left: 8px;\n  margin-right: 20px;\n  margin-top: 20px;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -7%;\n  width: 150px;\n  color: #5D5D5D;\n  background-color: white;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -11%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.noOfDirectors[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  padding-left: 0.8rem;\n  color: gray;\n  font-size: 13px;\n}\n\n.hint[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGRpcmVjdG9yLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBSUE7RUFDRSxZQUFZO0FBRGQ7O0FBSUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQURyQjs7QUFJQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFHbEIsV0FBVztBQUhiOztBQU1BO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFIakI7O0FBTUE7RUFFRSx5QkFBeUI7QUFKM0I7O0FBT0E7RUFDRSxjQUNGO0FBTEE7O0FBT0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUpiOztBQU9BO0VBQ0Usa0JBQWtCO0FBSnBCOztBQU9BO0VBQ0UsaUJBQWlCO0FBSm5COztBQU9BO0VBQ0UsaUJBQWlCO0FBSm5COztBQU9BO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixpQkFDRjtBQUxBOztBQU9BO0VBQ0Usd0JBQXdCO0FBSjFCOztBQU9BO0VBQ0UseUJBQ0Y7QUFMQTs7QUFRQTtFQUlFLGtCQUFrQjtBQVJwQjs7QUFXQTtFQUNFLGFBQWE7QUFSZjs7QUFVQTtFQUNFLGtCQUFrQjtBQVBwQjs7QUFTQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFOeEI7O0FBU0E7RUFDRSxXQUFXO0VBSVgsV0FBVztFQUNYLGVBQWU7RUFFZixtQkFBbUI7RUFDbkIsNkNBQTZDO0FBVi9DOztBQWFBO0VBQ0UsK0JBQStCO0VBQy9CLGtDQUFrQztFQUNsQyxpQ0FBaUM7RUFDakMsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBVmxCOztBQWFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBVnBCOztBQWNBO0VBRUUseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFackI7O0FBZUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBbUM7RUFDbkMsWUFBWTtFQUNaLG1CQUFtQjtBQVpyQjs7QUFnQkE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxlQUFlO0FBYmpCOztBQWdCQTtFQUVFLFdBQVc7RUFDWCxlQUFlO0FBZGpCIiwiZmlsZSI6ImRpcmVjdG9yLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gIC8vICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uYmFzaWMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5tYWluLWhlYWQge1xyXG4gIHBhZGRpbmctbGVmdDogNiU7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG5cclxuXHJcbiAgaGVpZ2h0OiAxcHg7XHJcbn1cclxuXHJcbm1hdC1sYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcblxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NTZFRkU7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBjb2xvcjogIzQ1NkVGRVxyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLm1hdC1idXR0b24td3JhcHBlci5zdmcge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdGJvcmRlciB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0UwRTBFMFxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tbmV3IGNoYW5nZXNcclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG5cdC8vIFx0XHRcdFx0XHRcdFx0cmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAvLyBib3gtc2hhZG93OiAwIDJweCAycHggZ2FpbnNib3JvICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubWF0LWZvY3VzZWQgLnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxubGVnZW5kIHtcclxuICB3aWR0aDogYXV0bztcclxuICAvLyBtYXJnaW4tbGVmdDogMjBweDtcclxuICAvLyBjb2xvcjogIzBGMEYwRjtcclxuICAvLyBvcGFjaXR5OiA3MCUgIWltcG9ydGFudDtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1yaWdodDogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBib3JkZXItbGVmdDogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1sZWZ0OiAxMSU7XHJcbiAgcGFkZGluZy1yaWdodDogMTQlO1xyXG59XHJcblxyXG5cclxuLkJhY2sge1xyXG5cclxuICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNyU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGNvbG9yOiAjNUQ1RDVEO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbn1cclxuXHJcbi5OZXh0IHtcclxuICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTExJTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxMDYsIDI0NSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5ub09mRGlyZWN0b3JzIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5oaW50IHtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectorDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-director-details',
            templateUrl: './director-details.component.html',
            styleUrls: ['./director-details.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_5__["CorporateOnboardingService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }];
        }, {
          accordion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"]]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~views-others-onboarding-corporate-onboarding-corporate-module~views-tasks-tasks-module-es5.js.map