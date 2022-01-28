(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-others-onboarding-corporate-onboarding-corporate-module"], {
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


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");

      function ContactInformationComponent_mat_radio_group_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-group", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContactInformationComponent_mat_radio_group_17_Template_mat_radio_button_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.radioSelection($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r4 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", x_r4)("checked", x_r4 == ctx_r0.contactFormGroup.value.isMailingAddressSame);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", x_r4, " ");
        }
      }

      function ContactInformationComponent_div_19_legend_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "legend", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Company Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_19_legend_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "legend", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mailing Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_19_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var addrsType_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", addrsType_r24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", addrsType_r24, " ");
        }
      }

      function ContactInformationComponent_div_19_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Address Type is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_19_mat_error_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please Enter Address Line 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_19_mat_error_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please Enter Address Line 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_19_mat_option_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r25, " ");
        }
      }

      function ContactInformationComponent_div_19_mat_error_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Country is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_19_mat_option_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r26.value1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r26.value1, " ");
        }
      }

      function ContactInformationComponent_div_19_mat_error_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "State is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_19_mat_option_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var City_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", City_r27.value1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", City_r27.value1, " ");
        }
      }

      function ContactInformationComponent_div_19_mat_error_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "City is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_19_mat_error_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Zip code is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_19_mat_error_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter valid ZipCode! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactInformationComponent_div_19_legend_2_Template, 2, 0, "legend", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactInformationComponent_div_19_legend_3_Template, 2, 0, "legend", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Address Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ContactInformationComponent_div_19_mat_option_13_Template, 2, 2, "mat-option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-placeholder", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Address Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ContactInformationComponent_div_19_mat_error_16_Template, 3, 0, "mat-error", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Address Line 1* ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-placeholder", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Address Line 1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ContactInformationComponent_div_19_mat_error_24_Template, 3, 0, "mat-error", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Address Line 2*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-placeholder", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Address Line 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ContactInformationComponent_div_19_mat_error_32_Template, 3, 0, "mat-error", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Country*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-select", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ContactInformationComponent_div_19_Template_mat_select_selectionChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var i_r9 = ctx.index;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.getStateName($event.value, i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ContactInformationComponent_div_19_mat_option_42_Template, 2, 2, "mat-option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-placeholder", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Country ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ContactInformationComponent_div_19_mat_error_45_Template, 3, 0, "mat-error", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "State*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-select", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ContactInformationComponent_div_19_Template_mat_select_selectionChange_50_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var i_r9 = ctx.index;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.getCityName($event.value, i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ContactInformationComponent_div_19_mat_option_53_Template, 2, 2, "mat-option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-placeholder", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "State ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ContactInformationComponent_div_19_mat_error_56_Template, 3, 0, "mat-error", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "City*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-select", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ContactInformationComponent_div_19_mat_option_64_Template, 2, 2, "mat-option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-placeholder", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "City ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ContactInformationComponent_div_19_mat_error_67_Template, 3, 0, "mat-error", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Zip code*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-placeholder", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Zip code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ContactInformationComponent_div_19_mat_error_75_Template, 3, 0, "mat-error", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ContactInformationComponent_div_19_mat_error_76_Template, 2, 0, "mat-error", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;
          var i_r9 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r9 == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.addressTypeList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.get("addressType").touched && !item_r8.get("addressType").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.get("address1").touched && !item_r8.get("address1").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.get("address2").touched && !item_r8.get("address2").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.arrayCountry);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.get("country").touched && !item_r8.get("country").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.arrayState[i_r9]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.get("state").touched && !item_r8.get("state").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.arrayCity[i_r9]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.get("city").touched && !item_r8.get("city").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.get("zipCode").touched && !item_r8.get("zipCode").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.get("zipCode").hasError("pattern"));
        }
      }

      function ContactInformationComponent_mat_error_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Primary Email is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactInformationComponent_mat_error_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mobile Number is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["YES", "NO"];
      };

      var ContactInformationComponent = /*#__PURE__*/function () {
        function ContactInformationComponent(router, formBuilder, corporateService, apiService, cdr) {
          _classCallCheck(this, ContactInformationComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.corporateService = corporateService;
          this.apiService = apiService;
          this.cdr = cdr;
          this.arrayState = [];
          this.arrayCity = [];
          this.addressTypeList = ['Company', 'Mailing'];
          this.contactFormGroup = formBuilder.group({
            corporateId: [''],
            primaryEmail: [''],
            secondaryEmail: [''],
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength]],
            landLine: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength]],
            isMailingAddressSame: ['YES'],
            corporateAddress: formBuilder.array([])
          }); // this.corporateService.stepReady(this.contactFormGroup, 'three')

          this.getCountryName("country");
        }

        _createClass(ContactInformationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.corporateService.corporateAccountIdVal.subscribe(function (corporateId) {
              console.log('corporateId :: ', _this.corporateId = corporateId);

              _this.contactFormGroup.get('corporateId').setValue(corporateId);
            });
            var mailAddress = this.contactFormGroup.get('isMailingAddressSame');

            if (mailAddress === 'YES') {
              this.contactFormGroup.get('corporateAddress').get('addressType').setValue('Company');
            }

            this.addAddress();
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
              address1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              address2: [''],
              state: [''],
              city: [''],
              zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[123456789]{1}[0-9]{5}")]],
              country: ['']
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

            console.log('country in contact info :: ', key);
            this.apiService.getDropDownValues(key).subscribe(function (data) {
              _this2.arrayCountry = data;
              console.log("country in contact info -->", _this2.arrayCountry);
            });
          }
        }, {
          key: "getStateName",
          value: function getStateName(country, index) {
            var _this3 = this;

            console.log("State -- ", country);
            this.arrayState[index] = [];
            this.arrayCity[index] = [];
            this.apiService.getDropDownValues1("state", country).subscribe(function (data) {
              _this3.arrayState[index] = data;
              console.log("-->", _this3.arrayState);
            });
          }
        }, {
          key: "getCityName",
          value: function getCityName(state, index) {
            var _this4 = this;

            console.log(state);
            this.apiService.getDropDownValues1("city", state).subscribe(function (data) {
              _this4.arrayCity[index] = data;
              console.log("-->", _this4.arrayCity);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(contactFormGroup) {
            var _this5 = this;

            console.log('form :: ', contactFormGroup);
            this.corporateService.saveOrUpdateCorporateAccountInfo(contactFormGroup).subscribe(function (data) {
              console.log('data :: ', data);

              _this5.next();
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
        }]);

        return ContactInformationComponent;
      }();

      ContactInformationComponent.ɵfac = function ContactInformationComponent_Factory(t) {
        return new (t || ContactInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      ContactInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactInformationComponent,
        selectors: [["app-contact-information"]],
        decls: 65,
        vars: 7,
        consts: [["ngNativeValidate", "", 3, "formGroup"], [1, "full-width", 2, "background-color", "#F1F1F4"], [2, "padding", "1rem 0"], [2, "padding", "0 4.3rem"], [2, "border-radius", "0px"], ["fxLayout", "column", "fxLayoutAlign", "space-around start", 1, "full-width"], [1, "full-width", 2, "padding", "1rem 1rem"], [2, "font-size", "18px"], [2, "width", "70px", "border-bottom", "5px solid #456EFE", "left", "30px"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxLayoutGap", "20px"], ["fxFlex", "2"], ["fxFlex", "28"], ["fxFlex", "50"], ["formControlName", "isMailingAddressSame", 4, "ngFor", "ngForOf"], ["formArrayName", "corporateAddress"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [2, "border-top", "1px solid lightgray", "margin-left", "20px", "margin-right", "20px"], ["visible", "true"], ["fxFlex", "50", 1, "form-group"], ["for", "forPrimaryEmail", 1, "hint"], ["floatLabel", "never"], ["matInput", "", "id", "forPrimaryEmail", "formControlName", "primaryEmail", "type", "email", "pattern", "^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$"], [1, "placeholder"], [4, "ngIf"], ["for", "forSecondaryEmail", 1, "hint"], ["matInput", "", "id", "forSecondaryEmail", "formControlName", "secondaryEmail", "type", "email", "pattern", "^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$"], ["for", "forMobileNumber", 1, "hint"], ["matInput", "", "id", "forMobileNumber", "formControlName", "mobileNumber", "maxLength", "10", "minLength", "10", "onlyNumber", "", 3, "keypress"], ["for", "forLandLine", 1, "hint"], ["matInput", "", "id", "forLandLine", "formControlName", "landLine", "maxLength", "10", "minLength", "10", "onlyNumber", "", 3, "keypress"], [1, "button"], ["mat-button", "", 1, "Back", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "disabled", "click"], ["formControlName", "isMailingAddressSame"], [3, "value", "checked", "change"], [3, "formGroupName"], ["visible", "true", 4, "ngIf"], ["fxFlex", "20", 1, "form-group"], ["for", "foraddressType", 1, "hint"], ["id", "foraddressType", "formControlName", "addressType"], ["disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "40", 1, "form-group"], ["for", "forAddress1", 1, "hint"], ["matInput", "", "formControlName", "address1", "id", "forAddress1"], ["for", "forAddress2", 1, "hint"], ["matInput", "", "formControlName", "address2", "id", "forAddress2"], ["fxFlex", "100", "fxLayoutGap", "10px"], ["fxFlex", "25", 1, "form-group"], ["for", "forcountry", 1, "hint"], ["id", "forcountry", "formControlName", "country", 3, "selectionChange"], ["for", "forstate", 1, "hint"], ["id", "forstate", "formControlName", "state", 3, "selectionChange"], ["for", "forCity", 1, "hint"], ["id", "forCity", "formControlName", "city"], ["for", "forZipCode", 1, "hint"], ["maxlength", "10", "matInput", "", "id", "forZipCode", "onlyNumber", "", "formControlName", "zipCode"], [3, "value"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " your mailing address same as company address? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContactInformationComponent_mat_radio_group_17_Template, 4, 3, "mat-radio-group", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ContactInformationComponent_div_19_Template, 77, 15, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "fieldset", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "legend", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Primary Email*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-placeholder", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Primary Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ContactInformationComponent_mat_error_32_Template, 3, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Secondary Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-placeholder", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Secondary Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "fieldset", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "legend", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Contact Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Mobile Number*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ContactInformationComponent_Template_input_keypress_49_listener($event) {
              return ctx._keyPress($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-placeholder", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Mobile Number ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ContactInformationComponent_mat_error_52_Template, 3, 0, "mat-error", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Landline Number*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ContactInformationComponent_Template_input_keypress_57_listener($event) {
              return ctx._keyPress($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-placeholder", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Landline Number ");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactInformationComponent_Template_button_click_61_listener() {
              return ctx.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactInformationComponent_Template_button_click_63_listener() {
              return ctx.onSubmit(ctx.contactFormGroup.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactFormGroup.get("corporateAddress")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactFormGroup.get("primaryEmail").touched && !ctx.contactFormGroup.get("primaryEmail").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactFormGroup.get("mobileNumber").touched && !ctx.contactFormGroup.get("mobileNumber").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.contactFormGroup.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatPlaceholder"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
        styles: [".button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n  background-color: white;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  color: white;\n  background-color: #A0A0A0;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0 4px 4px gainsboro !important;\n  padding-left: 10px;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: grey;\n}\n\nlegend[_ngcontent-%COMP%] {\n  width: auto;\n  margin-left: 20px;\n  color: gray;\n  font-size: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-family: 'Courier New', Courier, monospace;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgray;\n  border-bottom: 0px solid lightgray;\n  border-right: 0px solid lightgray;\n  border-left: 0px solid lightgray;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbnRhY3QtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NFO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQXZDM0I7O0FBeUNFO0VBRUUseUJBQXdCO0VBQ3hCLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7QUF2Q3ZCOztBQXlDRTtFQUNFLHlCQUF3QjtFQUN4QixrQkFBaUI7RUFDakIsWUFBVztFQUNYLHlCQUFpQztFQUNqQyxZQUFXO0VBQ1gsbUJBQW1CO0FBdEN2Qjs7QUF5Q0U7RUFDRSx1QkFBdUI7RUFDdkIsMENBQTBDO0VBQzFDLGtCQUFrQjtBQXRDdEI7O0FBeUNFO0VBQ0UsYUFBYTtBQXRDakI7O0FBeUNFO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQXRDMUI7O0FBeUNFO0VBRUMsV0FBVTtBQXZDYjs7QUEwQ0U7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw4Q0FBOEM7QUF2Q2xEOztBQTBDRTtFQUNFLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMsaUNBQWlDO0VBQ2pDLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQXZDcEIiLCJmaWxlIjoiY29udGFjdC1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5oZWFkIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIFxyXG4vLyAgICAgLy8gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbi8vICAgfVxyXG4vLyAgIC5iYXNpYy1jb250YWluZXIge1xyXG4vLyAgICAgcGFkZGluZzogNXB4O1xyXG4vLyAgIH1cclxuLy8gICAubWFpbi1oZWFkIHtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogNiU7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuLy8gICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC5ib3JkZXJ7XHJcbi8vICAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6MTUwcHg7XHJcbiAgXHJcbiAgIFxyXG4vLyAgICAgaGVpZ2h0OiAxcHg7XHJcbi8vIH1cclxuLy8gLnRvcFxyXG4vLyB7XHJcbi8vICAgcGFkZGluZy10b3A6MjBweDtcclxuLy8gfVxyXG4vLyBtYXQtbGFiZWxcclxuLy8ge1xyXG4vLyAgIG1hcmdpbi1sZWZ0OjEzcHg7XHJcblxyXG4vLyB9XHJcbi8vIGJ7XHJcbi8vICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbi8vIH1cclxuLy8gaW5wdXQge2JvcmRlcjowO291dGxpbmU6MDtcclxuLy8gICBmb250LXdlaWdodDogYm9sZH1cclxuLy8gICBpbnB1dDpmb2N1cyB7b3V0bGluZTpub25lIWltcG9ydGFudDt9XHJcblxyXG4vLyAgIG1hdC1yYWRpby1idXR0b25cclxuLy8gICB7XHJcbi8vICAgICBwYWRkaW5nOiAwLjFyZW1cclxuLy8gICB9XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmctbGVmdDogMTElO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTQlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5CYWNre1xyXG5cclxuICAgIG1hcmdpbjoxMnB4IDBweCAxMnB4IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0Oi0xNSU7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBMEEwQTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gIH1cclxuICAuTmV4dHtcclxuICAgIG1hcmdpbjoxMnB4IDBweCAxMnB4IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDotMTMlO1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsMTA2LDI0NSk7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbiAgfVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA0cHggZ2FpbnNib3JvICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1mb2N1c2VkIC5wbGFjZWhvbGRlciB7XHJcbiAgIC8vIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgY29sb3I6Z3JleTtcclxuICB9XHJcbiAgXHJcbiAgbGVnZW5kIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gIH1cclxuICBcclxuICBmaWVsZHNldCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1yaWdodDogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1sZWZ0OiAwcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH0iXX0= */"]
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
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
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

    /*! exports provided: ProofOfIdentityComponent */

    /***/
    function Gx8H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");

      function ProofOfIdentityComponent_mat_error_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Incorporation Number is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ProofOfIdentityComponent_mat_error_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please Select Date of Issue");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ProofOfIdentityComponent_mat_error_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please Select Date of Expiry");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ProofOfIdentityComponent_mat_radio_group_51_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-group", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-radio-button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProofOfIdentityComponent_mat_radio_group_51_Template_mat_radio_button_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.radioSelection($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r7 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", x_r7)("checked", x_r7 == ctx_r5.proofOfIdentityFormGroup.value.isAnotherIdProofRequired);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", x_r7, " ");
        }
      }

      function ProofOfIdentityComponent_div_52_div_1_mat_option_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var idType_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", idType_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", idType_r15, " ");
        }
      }

      function ProofOfIdentityComponent_div_52_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "fieldset", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Id Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProofOfIdentityComponent_div_52_div_1_mat_option_11_Template, 2, 2, "mat-option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-placeholder", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Select Id Type* ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Id Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-placeholder", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Enter Id Number* ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProofOfIdentityComponent_div_52_div_1_Template_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var item_r12 = ctx.$implicit;
            var i_r13 = ctx.index;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r16.deleteDocument(item_r12, i_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "delete_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProofOfIdentityComponent_div_52_div_1_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r18.addDocument();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " ADD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r13 = ctx.index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.idTypeList);
        }
      }

      function ProofOfIdentityComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProofOfIdentityComponent_div_52_div_1_Template, 28, 2, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.proofOfIdentityFormGroup.get("idProofList")["controls"]);
        }
      }

      var _c0 = function _c0() {
        return ["YES", "NO"];
      };

      var ProofOfIdentityComponent = /*#__PURE__*/function () {
        function ProofOfIdentityComponent(router, formBuilder, corporateService, cdr, snack, apiService) {
          _classCallCheck(this, ProofOfIdentityComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.corporateService = corporateService;
          this.cdr = cdr;
          this.snack = snack;
          this.apiService = apiService;
          this.maxDate = new Date();
          this.proofOfIdentityFormGroup = this.formBuilder.group({
            corporateId: [''],
            incorpratioNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            dateOfIssue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            dateOfExpiry: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            isAnotherIdProofRequired: ['NO'],
            idProofList: this.formBuilder.array([])
          }); // this.corporateService.stepReady(this.proofOfIdentityFormGroup, 'four')
        }

        _createClass(ProofOfIdentityComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.corporateService.corporateAccountIdVal.subscribe(function (corporateId) {
              console.log('corporateId :: ', _this6.corporateId = corporateId);

              _this6.proofOfIdentityFormGroup.get('corporateId').setValue(corporateId);
            });
            this.getIdType(); // this.addDocument();
          }
        }, {
          key: "addIdProof",
          value: function addIdProof() {
            return this.formBuilder.group({
              idType: [''],
              idNumber: ['']
            });
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
            var _this7 = this;

            this.apiService.getDropDownValues("document_name").subscribe(function (re) {
              _this7.idTypeList = re;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(directorFormGroup) {
            var _this8 = this;

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
                _this8.snack.open("Proof of identity saved" + ' !', 'OK', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });

                _this8.next();

                _this8.cdr.markForCheck();
              } else {
                _this8.snack.open('Not able to connect to server!', 'INTERNAL SERVER ERROR', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });
              }
            }, function (error) {
              console.log('error resp :: ', error);

              _this8.snack.open("".concat(error.error.message, " "), 'OK', {
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
              idType: [''],
              idNumber: ['']
            }));
          }
        }]);

        return ProofOfIdentityComponent;
      }();

      ProofOfIdentityComponent.ɵfac = function ProofOfIdentityComponent_Factory(t) {
        return new (t || ProofOfIdentityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      ProofOfIdentityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProofOfIdentityComponent,
        selectors: [["app-proof-of-identity"]],
        decls: 58,
        vars: 13,
        consts: [["ngNativeValidate", "", 3, "formGroup"], [1, "full-width", 2, "background-color", "#F1F1F4"], [2, "padding", "1rem 0"], [2, "padding", "0 4.3rem"], [2, "border-radius", "0px"], ["fxLayout", "column", "fxLayoutAlign", "space-around start", 1, "full-width"], [1, "full-width", 2, "padding", "1rem 1rem"], [2, "font-size", "18px"], [2, "width", "70px", "border-bottom", "5px solid #456EFE", "left", "30px"], [2, "border-top", "1px solid lightgray", "margin-left", "20px", "margin-right", "20px"], ["visible", "true"], ["fxLayout", "row wrap", 1, "top"], ["fxFlex", "100", "fxLayoutGap", "30px"], ["fxFlex", "30", 1, "form-group"], ["for", "forIncorpratioNumber", 1, "hint"], ["floatLabel", "never"], ["matInput", "", "formControlName", "incorpratioNumber", "id", "forIncorpratioNumber", "maxLength", "12", "minLength", "12", "onlyNumber", ""], [1, "placeholder"], [4, "ngIf"], ["for", "forIddateOfIssue", 1, "hint"], ["matInput", "", "id", "forIddateOfIssue", "readonly", "", "formControlName", "dateOfIssue", 3, "matDatepicker", "max"], ["matSuffix", "", 3, "for"], ["dateOfIssue", ""], ["for", "forIddateOfExpiry", 1, "hint"], ["matInput", "", "id", "forIddateOfExpiry", "readonly", "", "formControlName", "dateOfExpiry", 3, "matDatepicker"], ["dateOfExpiry", ""], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxLayoutGap", "20px"], ["fxFlex", "28"], ["fxFlex", "50"], ["formControlName", "isAnotherIdProofRequired", 4, "ngFor", "ngForOf"], ["formArrayName", "idProofList", 4, "ngIf"], [1, "button"], ["mat-button", "", 1, "Back", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "disabled", "click"], ["formControlName", "isAnotherIdProofRequired"], [3, "value", "checked", "change"], ["formArrayName", "idProofList"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "formGroupName"], ["for", "forIdType", 1, "hint"], ["formControlName", "idType", "id", "forIdType"], ["disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "forIdNumber", 1, "hint"], ["matInput", "", "formControlName", "idNumber", "id", "forIdNumber", "maxLength", "12", "minLength", "6"], ["mat-button", "", 3, "click"], [2, "color", "tomato"], ["mat-button", "", "color", "primary", 3, "click"], [3, "value"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Incorporation Number* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-placeholder", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Incorporation Number ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ProofOfIdentityComponent_mat_error_22_Template, 3, 0, "mat-error", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Date of Issue* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-placeholder", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Date of Issue ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "mat-datepicker-toggle", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "mat-datepicker", null, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ProofOfIdentityComponent_mat_error_33_Template, 3, 0, "mat-error", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Date of Expiry*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-placeholder", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Date of Expiry ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "mat-datepicker-toggle", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "mat-datepicker", null, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, ProofOfIdentityComponent_mat_error_44_Template, 3, 0, "mat-error", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Do you want add another proof of ID? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ProofOfIdentityComponent_mat_radio_group_51_Template, 4, 3, "mat-radio-group", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, ProofOfIdentityComponent_div_52_Template, 2, 1, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProofOfIdentityComponent_Template_button_click_54_listener() {
              return ctx.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProofOfIdentityComponent_Template_button_click_56_listener() {
              return ctx.onSubmit(ctx.proofOfIdentityFormGroup.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.proofOfIdentityFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.proofOfIdentityFormGroup.get("incorpratioNumber").touched && !ctx.proofOfIdentityFormGroup.get("incorpratioNumber").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r1)("max", ctx.maxDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.proofOfIdentityFormGroup.get("dateOfIssue").touched && !ctx.proofOfIdentityFormGroup.get("dateOfIssue").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.proofOfIdentityFormGroup.get("dateOfExpiry").touched && !ctx.proofOfIdentityFormGroup.get("dateOfExpiry").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.proofOfIdentityFormGroup.get("isAnotherIdProofRequired").value == "YES");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.proofOfIdentityFormGroup.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatPlaceholder"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"]],
        styles: [".head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 6%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\n.border[_ngcontent-%COMP%] {\n  margin-top: -10px;\n  margin-left: 150px;\n  height: 1px;\n}\n\n.top[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  margin-left: 13px;\n}\n\nb[_ngcontent-%COMP%] {\n  margin-left: 14px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\nmat-radio-button[_ngcontent-%COMP%] {\n  padding: 0.1rem;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n  background-color: white;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  color: white;\n  background-color: #A0A0A0;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.hint[_ngcontent-%COMP%] {\n  padding-left: 0.8rem;\n  color: gray;\n  font-size: 10px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0 4px 4px gainsboro !important;\n  padding-left: 10px;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nlegend[_ngcontent-%COMP%] {\n  width: auto;\n  margin-left: 20px;\n  color: gray;\n  font-size: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-family: 'Courier New', Courier, monospace;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgray;\n  border-bottom: 0px solid lightgray;\n  border-right: 0px solid lightgray;\n  border-left: 0px solid lightgray;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb29mLW9mLWlkZW50aXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUlBO0VBQ0UsWUFBWTtBQURkOztBQUlBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFEckI7O0FBSUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBR2xCLFdBQVc7QUFIYjs7QUFNQTtFQUNFLGlCQUFpQjtBQUhuQjs7QUFNQTtFQUNFLGlCQUFpQjtBQUhuQjs7QUFPQTtFQUNFLGlCQUFpQjtBQUpuQjs7QUFPQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQ0Y7QUFMQTs7QUFPQTtFQUNFLHdCQUF3QjtBQUoxQjs7QUFPQTtFQUNFLGVBQ0Y7QUFMQTs7QUFPQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFKekI7O0FBT0E7RUFFRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUxyQjs7QUFRQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUFtQztFQUNuQyxZQUFZO0VBQ1osbUJBQW1CO0FBTHJCOztBQVFBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFFWCxlQUFlO0FBTmpCOztBQVNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBDQUEwQztFQUMxQyxrQkFBa0I7QUFOcEI7O0FBU0E7RUFDRSxhQUFhO0FBTmY7O0FBU0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBTnhCOztBQVNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsOENBQThDO0FBTmhEOztBQVNBO0VBQ0UsK0JBQStCO0VBQy9CLGtDQUFrQztFQUNsQyxpQ0FBaUM7RUFDakMsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBTmxCOztBQVNBO0VBQ0Usa0JBQWtCO0FBTnBCIiwiZmlsZSI6InByb29mLW9mLWlkZW50aXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAvLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmJhc2ljLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ubWFpbi1oZWFkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDYlO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuXHJcblxyXG4gIGhlaWdodDogMXB4O1xyXG59XHJcblxyXG4udG9wIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxubWF0LWxhYmVsIHtcclxuICBtYXJnaW4tbGVmdDogMTNweDtcclxuXHJcbn1cclxuXHJcbmIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMC4xcmVtXHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDExJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5CYWNrIHtcclxuXHJcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDtcclxuICBtYXJnaW4tbGVmdDogLTE1JTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBMEEwQTA7XHJcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcclxufVxyXG5cclxuLk5leHQge1xyXG4gIG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTMlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDEwNiwgMjQ1KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTVweDtcclxufVxyXG5cclxuLmhpbnQge1xyXG4gIHBhZGRpbmctbGVmdDogMC44cmVtO1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIC8vIG9wYWNpdHk6IDcwJTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IGdhaW5zYm9ybyAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmxlZ2VuZCB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1sZWZ0OiAwcHggc29saWQgbGlnaHRncmF5O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubWF0LWZvY3VzZWQgLnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProofOfIdentityComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-proof-of-identity',
            templateUrl: './proof-of-identity.component.html',
            styleUrls: ['./proof-of-identity.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]
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


      var _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../corporate-onboarding.service */
      "JVXa");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _onborading_primary_onborading_primary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../onborading-primary/onborading-primary.component */
      "h31h");
      /* harmony import */


      var _director_details_director_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../director-details/director-details.component */
      "tCF6");
      /* harmony import */


      var _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../contact-information/contact-information.component */
      "1aja");
      /* harmony import */


      var _proof_of_identity_proof_of_identity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../proof-of-identity/proof-of-identity.component */
      "Gx8H");
      /* harmony import */


      var _other_info_corporate_other_info_corporate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../other-info-corporate/other-info-corporate.component */
      "qazE");

      var OnboardingCorporateMainComponent = /*#__PURE__*/function () {
        function OnboardingCorporateMainComponent(formService) {
          _classCallCheck(this, OnboardingCorporateMainComponent);

          this.formService = formService;
          this.finishFlag = true;
        }

        _createClass(OnboardingCorporateMainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.formService.disableMatTabVal.subscribe(function (data) {
              console.log("disabled :: ", data);
            });
            this.formService.getDisableMatTab().subscribe(function (resp) {
              console.log(resp.index);
              _this9.tabIndex = resp.index;

              _this9.formService.getFinishFlag().subscribe(function (resp) {
                console.log("finish flag", resp.finishFlag);

                _this9.assignValueFinish(resp.finishFlag);
              });

              if (resp.index === 0) {
                _this9.assignValuesForTab2(_this9.tabIndex);
              }

              if (resp.index === 1) {
                _this9.assignValuesForTab2(_this9.tabIndex);
              }

              if (resp.index === 2) {
                _this9.assignValuesForTab3(_this9.tabIndex);
              }

              if (resp.index === 3) {
                _this9.assignValuesForTab4(_this9.tabIndex);
              }

              if (resp.index === 4) {
                _this9.assignValuesForTab5(_this9.tabIndex);
              } // TODO WITH MATTAB DISABLE CUSTOM LATER
              // this.tabGroup._tabs[resp.index].disabled = true;

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
        return new (t || OnboardingCorporateMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_1__["CorporateOnboardingService"]));
      };

      OnboardingCorporateMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OnboardingCorporateMainComponent,
        selectors: [["app-onboarding-corporate-main"]],
        decls: 16,
        vars: 6,
        consts: [[1, "head"], [1, "main-head"], [1, "basic-container"], ["mat-align-tabs", "start", 3, "selectedIndex", "selectedIndexChange"], ["tabGroup", ""], ["label", "Basic Information", 3, "disabled"], ["label", "Director Details", 3, "disabled"], ["label", "Contact Information", 3, "disabled"], ["label", "Proof Of Identity", 3, "disabled"], ["label", "Other Information", 3, "disabled"]],
        template: function OnboardingCorporateMainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Customer Onboarding | Corporate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab-group", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function OnboardingCorporateMainComponent_Template_mat_tab_group_selectedIndexChange_4_listener($event) {
              return ctx.tabIndex = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-onborading-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-director-details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-contact-information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-tab", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-proof-of-identity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-tab", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-other-info-corporate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tab1 || ctx.finishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tab2 || ctx.finishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tab3 || ctx.finishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tab4 || ctx.finishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tab5 || ctx.finishFlag);
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTab"], _onborading_primary_onborading_primary_component__WEBPACK_IMPORTED_MODULE_3__["OnboradingPrimaryComponent"], _director_details_director_details_component__WEBPACK_IMPORTED_MODULE_4__["DirectorDetailsComponent"], _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_5__["ContactInformationComponent"], _proof_of_identity_proof_of_identity_component__WEBPACK_IMPORTED_MODULE_6__["ProofOfIdentityComponent"], _other_info_corporate_other_info_corporate_component__WEBPACK_IMPORTED_MODULE_7__["OtherInfoCorporateComponent"]],
        styles: [".main-head[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  padding-left: 6%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n  .mat-tab-header {\n  padding-left: 5%;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG9uYm9hcmRpbmctY29ycG9yYXRlLW1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDcEI7O0FBRUE7RUFDQyxZQUFZO0FBQ2I7O0FBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3BCIiwiZmlsZSI6Im9uYm9hcmRpbmctY29ycG9yYXRlLW1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1oZWFkIHtcclxuXHRtYXJnaW4tdG9wOiAzNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogNiU7XHJcblx0cGFkZGluZy10b3A6IDE2cHg7XHJcblx0cGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmJhc2ljLWNvbnRhaW5lciB7XHJcblx0cGFkZGluZzogNXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDUlO1xyXG5cdHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn0iXX0= */"]
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
            type: _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_1__["CorporateOnboardingService"]
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


      var app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/showMessage/show-message.service */
      "x/2q");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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
        function CorporateOnboardingService(_formBuilder, http, showMessageService) {
          _classCallCheck(this, CorporateOnboardingService);

          this._formBuilder = _formBuilder;
          this.http = http;
          this.showMessageService = showMessageService; //   this.stepOne.subscribe(form =>
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

          this.corporateAccountIdRef = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({});
          this.corporateAccountIdVal = this.corporateAccountIdRef.asObservable();
          this.disableMatTab = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({
            index: ''
          });
          this.disableMatTabVal = this.disableMatTab.asObservable();
          this.finishFlag = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({
            finishFlag: true
          });
          this.finishSave = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
          this.noOfDirectors = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
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
        return new (t || CorporateOnboardingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_4__["ShowMessageService"]));
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
            type: app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_4__["ShowMessageService"]
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


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Create Director ", ctx_r1.item, " ");
        }
      }

      function CreateDirectorComponent_mat_panel_title_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \xA0 Director \xA0 ", ctx_r2.item, ". ");
        }
      }

      function CreateDirectorComponent_mat_form_field_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_mat_form_field_27_Template_input_keypress_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r32._keyPress($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-placeholder", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "CIF Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_form_field_28_mat_option_5_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", option_r37 == null ? null : option_r37.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      function CreateDirectorComponent_mat_form_field_28_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateDirectorComponent_mat_form_field_28_mat_option_5_Template_mat_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41);

            var option_r37 = ctx.$implicit;

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r40.selectCif(option_r37);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CreateDirectorComponent_mat_form_field_28_mat_option_5_div_10_Template, 2, 1, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h5", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h6", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r37 == null ? null : option_r37.cifNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](7, 10, option_r37 == null ? null : option_r37.firstName, 0, 1)), "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](9, 16, option_r37 == null ? null : option_r37.lastName, 0, 1)), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (option_r37 == null ? null : option_r37.profileImage) != "not_available");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 20, option_r37 == null ? null : option_r37.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 22, option_r37 == null ? null : option_r37.middleName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 24, option_r37 == null ? null : option_r37.lastName), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", option_r37 == null ? null : option_r37.cifNumber, "");
        }
      }

      function CreateDirectorComponent_mat_form_field_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 45, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function CreateDirectorComponent_mat_form_field_28_Template_input_keyup_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r42.ngAfterViewInit($event.target.value);
          })("ngModelChange", function CreateDirectorComponent_mat_form_field_28_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r44.updatedVal($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-autocomplete", null, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CreateDirectorComponent_mat_form_field_28_mat_option_5_Template, 19, 26, "mat-option", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-placeholder", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "CIF Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matAutocomplete", _r35);

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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var prfix_r45 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", prfix_r45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", prfix_r45, " ");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var gender_r46 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", gender_r46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", gender_r46, " ");
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

      function CreateDirectorComponent_mat_error_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Date Of Birth is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_option_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var placeOfBirth_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", placeOfBirth_r47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", placeOfBirth_r47, " ");
        }
      }

      function CreateDirectorComponent_mat_error_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Place Of Birth!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_option_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var recidence_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", recidence_r48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", recidence_r48, " ");
        }
      }

      function CreateDirectorComponent_mat_error_108_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Residence Type!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_115_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("currency-flag currency-flag-", ctx_r19.currencyCode, "");
        }
      }

      function CreateDirectorComponent_mat_option_120_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var citizenship_r49 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", citizenship_r49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", citizenship_r49, " ");
        }
      }

      function CreateDirectorComponent_mat_error_123_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-error");
        }
      }

      function CreateDirectorComponent_div_132_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("currency-flag currency-flag-", ctx_r22.Currency, "");
        }
      }

      function CreateDirectorComponent_mat_option_137_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var countryOfResidence_r50 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", countryOfResidence_r50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", countryOfResidence_r50, " ");
        }
      }

      function CreateDirectorComponent_mat_error_140_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Country Of Residence");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_145_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var idType_r58 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", idType_r58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", idType_r58, " ");
        }
      }

      function CreateDirectorComponent_div_145_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select ID Type!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_145_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Unique Id Number is Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_145_mat_error_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Valid Till!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_145_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-select", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CreateDirectorComponent_div_145_mat_option_9_Template, 2, 2, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-placeholder", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "ID Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CreateDirectorComponent_div_145_mat_error_12_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_div_145_Template_input_keypress_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r59._keyPress($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-placeholder", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Unique Id Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CreateDirectorComponent_div_145_mat_error_18_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "mat-datepicker-toggle", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "mat-datepicker", null, 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-placeholder", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Valid Till ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CreateDirectorComponent_div_145_mat_error_27_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r51 = ctx.$implicit;
          var i_r52 = ctx.index;

          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](24);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r25.idTypeList);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r51.get("idType").touched && !item_r51.get("idType").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r51.get("idNumber").touched && !item_r51.get("idNumber").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("min", ctx_r25.minDate)("max", ctx_r25.maxDate)("matDatepicker", _r56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r51.get("expiryDate").touched && !item_r51.get("expiryDate").valid);
        }
      }

      function CreateDirectorComponent_div_147_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Enter Address Line 1!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_147_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Enter Address Line 2!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_147_mat_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r75 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", country_r75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", country_r75, " ");
        }
      }

      function CreateDirectorComponent_div_147_mat_error_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please select country");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_147_mat_option_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r76 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", state_r76.value1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", state_r76.value1, " ");
        }
      }

      function CreateDirectorComponent_div_147_mat_error_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please select state");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_147_mat_option_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var City_r77 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", City_r77.value1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", City_r77.value1, " ");
        }
      }

      function CreateDirectorComponent_div_147_mat_error_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please select city");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_147_mat_error_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "zipcode is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_147_mat_error_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter valid ZipCode! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_147_mat_option_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var addressType_r78 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", addressType_r78);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", addressType_r78, " ");
        }
      }

      function CreateDirectorComponent_div_147_mat_error_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Address Type!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_147_Template(rf, ctx) {
        if (rf & 1) {
          var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "fieldset", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "legend", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-placeholder", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Address Line 1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CreateDirectorComponent_div_147_mat_error_11_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-placeholder", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Address Line 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CreateDirectorComponent_div_147_mat_error_18_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-select", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function CreateDirectorComponent_div_147_Template_mat_select_selectionChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r80);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r79.getStateName($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CreateDirectorComponent_div_147_mat_option_27_Template, 2, 2, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-placeholder", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Country ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, CreateDirectorComponent_div_147_mat_error_30_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-select", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function CreateDirectorComponent_div_147_Template_mat_select_selectionChange_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r80);

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r81.getCityName($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, CreateDirectorComponent_div_147_mat_option_37_Template, 2, 2, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-placeholder", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "State ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, CreateDirectorComponent_div_147_mat_error_40_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-select", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, CreateDirectorComponent_div_147_mat_option_49_Template, 2, 2, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "mat-placeholder", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "City ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, CreateDirectorComponent_div_147_mat_error_52_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_div_147_Template_input_keypress_56_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r80);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r82._keyPress($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "mat-placeholder", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Zip code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, CreateDirectorComponent_div_147_mat_error_59_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, CreateDirectorComponent_div_147_mat_error_60_Template, 2, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "mat-select", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, CreateDirectorComponent_div_147_mat_option_69_Template, 2, 2, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "mat-placeholder", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Select AddressType ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, CreateDirectorComponent_div_147_mat_error_72_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r61 = ctx.$implicit;
          var i_r62 = ctx.index;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r61.get("address1").touched && !item_r61.get("address1").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r61.get("address2").touched && !item_r61.get("address2").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r26.arrayCountry);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r61.get("country").touched && !item_r61.get("country").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r26.arrayState);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r61.get("state").touched && !item_r61.get("state").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r26.arrayCity);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r61.get("city").touched && !item_r61.get("city").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r61.get("zipcode").touched && !item_r61.get("zipcode").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r61.get("zipCode").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r26.addressTypeList);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r61.get("addressType").touched && !item_r61.get("addressType").valid);
        }
      }

      function CreateDirectorComponent_mat_error_158_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Enter Mobile Number(Maximun 10 digits)!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_error_165_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Enter Landline Number!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_error_174_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Email Address is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_179_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Tax Id is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_179_mat_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var countryOfIssue_r88 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", countryOfIssue_r88);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", countryOfIssue_r88, " ");
        }
      }

      function CreateDirectorComponent_div_179_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Country Of Issue!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_div_179_Template(rf, ctx) {
        if (rf & 1) {
          var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "fieldset", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "legend", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Additional Tax ID Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_div_179_Template_input_keypress_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r90);

            var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r89.omit_special_char($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-placeholder", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Tax Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CreateDirectorComponent_div_179_mat_error_11_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-select", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CreateDirectorComponent_div_179_mat_option_18_Template, 2, 2, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-placeholder", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Country of Issue ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CreateDirectorComponent_div_179_mat_error_21_Template, 3, 0, "mat-error", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateDirectorComponent_div_179_Template_button_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r90);

            var item_r83 = ctx.$implicit;

            var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            ctx_r91.addDirector(ctx_r91.createDirectorFormGroup.value, item_r83);
            return ctx_r91.openClose("CLOSE");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Save Director ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r83 = ctx.$implicit;
          var i_r84 = ctx.index;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r84);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r83.get("taxId").touched && !item_r83.get("taxId").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r30.arrayCountry);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r83.get("countryOfIssue").touched && !item_r83.get("countryOfIssue").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r30.createDirectorFormGroup.invalid);
        }
      }

      function CreateDirectorComponent_mat_card_180_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function CreateDirectorComponent_mat_card_180_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 4, ctx_r94.createDirectorFormGroup.value.firstName, 0, 1)), "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](5, 10, ctx_r94.createDirectorFormGroup.value.lastName, 0, 1)), " ");
        }
      }

      function CreateDirectorComponent_mat_card_180_Template(rf, ctx) {
        if (rf & 1) {
          var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CreateDirectorComponent_mat_card_180_div_3_Template, 3, 0, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CreateDirectorComponent_mat_card_180_ng_template_5_Template, 6, 14, "ng-template", null, 83, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-card-title", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-card-actions", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateDirectorComponent_mat_card_180_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r96);

            var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r95.editDirector(ctx_r95.item);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateDirectorComponent_mat_card_180_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r96);

            var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r97.deleteDirector(ctx_r97.item);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "delete_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r31.profileImage == "not_available")("ngIfElse", _r93);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 6, ctx_r31.createDirectorFormGroup.value.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 8, ctx_r31.createDirectorFormGroup.value.middleName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 10, ctx_r31.createDirectorFormGroup.value.lastName), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", ctx_r31.cifNumber, "");
        }
      }

      var CreateDirectorComponent = /*#__PURE__*/function () {
        function CreateDirectorComponent(router, formBuilder, appApiService, corporateService, cdr, snack, apiService) {
          _classCallCheck(this, CreateDirectorComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.appApiService = appApiService;
          this.corporateService = corporateService;
          this.cdr = cdr;
          this.snack = snack;
          this.apiService = apiService;
          this.fieldArray = [];
          this.newAttribute = {};
          this.arrData = [];
          this.directorCount = 1;
          this.maxDate = new Date();
          this.minDate = new Date();
          this.panelOpenState = false;
          this.profileImage = "not_available";
          this.saveStatus = [];
          this.customerInfoList = [];
          this.isEdit = false;
          this.isChecked = true;
          this.disabled = true;
          this.disabledToggle = true;
          this.createDirectorFormGroup = this.formBuilder.group({
            customerId: [''],
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
            primaryCustomer: [''],
            primaryEmailAdress: [''],
            residenceStatus: [''],
            userAddress: formBuilder.array([]),
            custIdProofs: formBuilder.array([]),
            custTaxInfo: formBuilder.array([])
          });
        }

        _createClass(CreateDirectorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.toggleChanges(false, null);
            this.corporateService.corporateAccountIdVal.subscribe(function (corporateId) {
              _this10.corporateId = corporateId;
              console.log('corporateId :: ', _this10.corporateId);

              _this10.createDirectorFormGroup.get('corporateId').setValue(corporateId);
            });
            this.corporateService.getnoOfDirectors().subscribe(function (noOfDir) {
              _this10.noOfDir = noOfDir;
              console.log('noOfDir:: ', noOfDir);

              if (_this10.noOfDir && _this10.item > 1) {
                _this10.disabled = false;
                _this10.isChecked = false;
                _this10.disabledToggle = false;
              }
            });
            this.getDoc();
            this.addAddress();
            this.addIdProof();
            this.addCustTaxInfo();
            this.getCountryName("country"); //this.getStateName("state");

            this.getCityName("city");
            this.getResidenceDetails('residence');
            this.createDirectorFormGroup.valueChanges.subscribe(function (data) {
              if (data.firstName != '') {
                // console.log('data if:: ', data);
                _this10.profileImage = "available";

                _this10.createInititals(data.firstName);
              }

              if (data.lastName != '') {
                // console.log('data if lastName:: ', data);
                _this10.profileImage = "available";

                _this10.createInititals(data.lastName);
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
              address1: [''],
              address2: [''],
              city: [''],
              state: [''],
              country: [''],
              zipcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("[123456789]{1}[0-9]{5}")]]
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
              taxId: [''],
              countryOfIssue: ['']
            }));
          }
        }, {
          key: "getCountryName",
          value: function getCountryName(key) {
            var _this11 = this;

            console.log('country in contact info :: ', key);
            this.apiService.getDropDownValues(key).subscribe(function (data) {
              _this11.arrayCountry = data;
              console.log("country in contact info -->", _this11.arrayCountry);
            });
          }
        }, {
          key: "onSelectionResidance",
          value: function onSelectionResidance(data) {
            var _this12 = this;

            console.log(data);
            this.apiService.countryFlaglists(data).subscribe(function (value) {
              console.log(value.currencyCode);
              _this12.Currency = value.currencyCode.toLowerCase();
              console.log(_this12.Currency);
            });
          }
        }, {
          key: "onSelectionCitizionship",
          value: function onSelectionCitizionship(data) {
            var _this13 = this;

            console.log(data);
            this.apiService.countryFlaglists(data).subscribe(function (value) {
              console.log(value.currencyCode);
              _this13.currencyCode = value.currencyCode.toLowerCase();
              console.log(_this13.currencyCode);
            });
          }
        }, {
          key: "getStateName",
          value: function getStateName(country) {
            var _this14 = this;

            // console.log("State -- ", country)
            this.apiService.getDropDownValues1("state", country).subscribe(function (data) {
              _this14.arrayState = data; //console.log("-->", this.arrayState)
            });
          }
        }, {
          key: "getCityName",
          value: function getCityName(state) {
            var _this15 = this;

            // console.log(state)
            this.apiService.getDropDownValues1("city", state).subscribe(function (data) {
              _this15.arrayCity = data; // console.log("-->", this.arrayCity)
            });
          }
        }, {
          key: "getResidenceDetails",
          value: function getResidenceDetails(key) {
            var _this16 = this;

            this.apiService.getDropDownValues(key).subscribe(function (data) {
              _this16.arrayResidence = data; // console.log('arrayResidence :: ', this.arrayResidence);
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
          key: "displayDrop",
          value: function displayDrop(cif) {
            if (!cif) {
              this.autocomplete.closePanel();
            }
          }
        }, {
          key: "toggleChanges",
          value: function toggleChanges(event, formDirective) {
            console.log(event);

            if (event === true) {
              this.createDirectorFormGroup.get('cifNumber').enable();
            } else if (event === false) {
              this.createDirectorFormGroup.get('cifNumber').disable();
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
            console.log('delete index :: ', index);
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
            var _this17 = this;

            console.log("inside ngAfterViewInit::");
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.inputElement.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pluck"])('target', 'value'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (value) {
              return value.length > 1;
            })).subscribe(function (value) {
              _this17.fetchByCif(value);
            });
          }
        }, {
          key: "selectCif",
          value: function selectCif(data) {
            this.getStateName(data.userAddress[0].country);
            this.getCityName(data.userAddress[0].state);
            this.customerInfoList = data.customerInfoList;
            this.cifNumberForPayload = data.cifNumber;
            delete data.cifNumber;
            this.autocomplete.closePanel();
            this.createDirectorFormGroup.patchValue(data);
            this.createDirectorFormGroup.get('existingCustomer').setValue(true);
          }
        }, {
          key: "fetchByCif",
          value: function fetchByCif(cifNumber) {
            var _this18 = this;

            console.log(cifNumber.length);

            if (cifNumber.length == 0) {
              this.autocomplete.closePanel();
            }

            this.createDirectorFormGroup.reset({
              cifNumber: this.createDirectorFormGroup.get('cifNumber').value,
              existingCustomer: this.createDirectorFormGroup.get('existingCustomer').value
            });
            this.showAutocomplete = false; // this.autocomplete.closePanel(); 

            if (cifNumber) {
              this.appApiService.fetchByCif(cifNumber).subscribe(function (res) {
                console.log("res::", res); // this.autocomplete.openPanel();

                if (res) {
                  _this18.showAutocomplete = true;
                  _this18.customerInfoList = res.customerInfoList;
                  _this18.customerInfoList[0].userAddress[0].zipcode = res.customerInfoList[0].userAddress[0].zipCode;
                } else if ((res === null || res === void 0 ? void 0 : res.customerInfoList.length) == 1) {} else if ((res === null || res === void 0 ? void 0 : res.customerInfoList.length) > 1) {
                  _this18.customerInfoList = res.customerInfoList;
                } else if ((res === null || res === void 0 ? void 0 : res.customerInfoList.length) == 0 || !res) {
                  _this18.snack.open('Kindly Enter Valid CifNumber to proceed', 'OK', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                  }); // this.customerInfoList = [];
                  // this.createDirectorFormGroup.get('cifNumber').patchValue('');

                }
              }, function (err) {
                console.error(err);
              });
            }
          }
        }, {
          key: "addDirector",
          value: function addDirector(createDirectorFormGroup, item) {
            var _this19 = this;

            console.log('createDirectorFormGroup :: ', createDirectorFormGroup);
            createDirectorFormGroup.cifNumber = this.cifNumberForPayload;
            console.log('item :: ', item);
            var coporateObjModel = {
              "corporateId": this.corporateId,
              "companyName": null,
              "category": null,
              "country": null,
              "state": null,
              "city": null,
              "customerInfo": [createDirectorFormGroup]
            };
            console.log('createDirectorFormGroup :: ', coporateObjModel);

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
                _this19.cifNumber = data.customerInfo[0].cifNumber;

                _this19.snack.open("Director ".concat(_this19.item, " profile created") + ' !', 'OK', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });

                _this19.cdr.markForCheck();

                if (_this19.noOfDir == 1) {
                  _this19.next();
                }
              } else {
                _this19.snack.open('Not able to connect to server!', 'INTERNAL SERVER ERROR', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });
              }
            }, function (error) {
              console.log('error resp :: ', error);

              _this19.snack.open("".concat(error.error.message, " "), 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            });
          }
        }, {
          key: "getDoc",
          value: function getDoc() {
            var _this20 = this;

            this.apiService.getDropDownValues("gender").subscribe(function (responseDatas) {
              _this20.genderList = responseDatas;
            });
            this.apiService.getDropDownValues("prefix").subscribe(function (re) {
              _this20.prefixList = re;
            });
            this.apiService.getDropDownValues("document_name").subscribe(function (re) {
              _this20.idTypeList = re;
            });
            this.apiService.getDropDownValues("address_type").subscribe(function (re) {
              _this20.addressTypeList = re;
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
        }]);

        return CreateDirectorComponent;
      }();

      CreateDirectorComponent.ɵfac = function CreateDirectorComponent_Factory(t) {
        return new (t || CreateDirectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationEntryStageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
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
          item: "item"
        },
        decls: 181,
        vars: 37,
        consts: [["ngNativeValidate", "", 3, "formGroup"], ["formDirective", "ngForm"], [1, "mat-elevation-z0", 3, "expanded", "opened", "closed"], [4, "ngIf"], [2, "border", "1px solid #456EFE"], ["fxLayout", "row wrap", 2, "margin-top", "20px", "margin-left", "20px"], ["fxFlex", "100"], ["fxFlex", "30"], ["fxFlex", "10"], ["formControlName", "existingCustomer", 3, "change"], ["formControlName", "primaryCustomer", 3, "ngModel", "disabled", "ngModelChange"], ["fxLayout", "row wrap"], ["fxFlex", "100", 2, "margin-left", "13px"], ["fxFlex", "80", 1, "form-group"], ["formControlName", "prefix", "id", "forPrefix", "required", ""], ["disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "placeholder"], ["matInput", "", "formControlName", "firstName", "id", "forFirstName", "required", ""], ["matInput", "", "formControlName", "middleName", "id", "forMiddleName"], ["matInput", "", "formControlName", "lastName", "id", "forLastName", "required", ""], ["formControlName", "gender", "id", "forGender", "required", ""], ["matInput", "", "formControlName", "dateOfBirth", "required", "", "readonly", "", 3, "matDatepicker", "max"], ["matSuffix", "", 3, "for"], ["picker", ""], ["formControlName", "placeOfBirth", "id", "forplaceOfBirth", "required", ""], ["formControlName", "placeOfBirth", "id", "forResidenceStatus", "required", ""], ["fxFlex", "20"], ["matPrefix", ""], [3, "class", 4, "ngIf"], ["fxFlex", "80"], ["formControlName", "citizenship", "id", "forcitizenship", "required", "", 3, "selectionChange"], ["formControlName", "countryOfResidence", "id", "forcountryOfResidence", "required", "", 3, "selectionChange"], ["formArrayName", "custIdProofs"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["formArrayName", "userAddress"], [2, "border-top", "1px solid lightgray", "margin-left", "20px", "margin-right", "20px"], ["visible", "true"], ["matInput", "", "formControlName", "phoneNumber", "id", "forPhoneNumber", "maxLength", "10", "minLength", "10", "onlyNumber", "", "required", "", 3, "keypress"], ["matInput", "", "formControlName", "landlineNumber", "maxLength", "10", "minLength", "10", "onlyNumber", "", "id", "forlandlineNumber", "required", "", 3, "keypress"], ["matInput", "", "formControlName", "primaryEmailAdress", "type", "email", "pattern", "^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$", "id", "forprimaryEmailAdress", "required", ""], ["formArrayName", "custTaxInfo"], ["class", "showDirectorCard", 4, "ngIf"], [2, "color", "#456EFE"], ["matInput", "", "formControlName", "cifNumber", "id", "forCifNumber", "required", "", 3, "keypress"], ["matInput", "", "formControlName", "cifNumber", "id", "forCifNumber", "required", "", 3, "matAutocomplete", "keyup", "ngModelChange"], ["input", ""], ["auto", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["fxLayout", "row wrap", 2, "margin-top", "20px"], ["fxFlex", " 100"], ["mat-card-avatar", "", "fxFlex", "10", 1, "example-header-image-dropdown"], ["align", "center", 2, "margin-top", "5px", "font-size", "large"], ["mat-card-avatar", "", "fxFlex", "10", 4, "ngIf"], [2, "margin-bottom", "0px"], [2, "margin-top", "0px"], ["mat-card-avatar", "", "fxFlex", "10"], ["matListAvatar", "", "align", "center", "alt", "...", 2, "border-radius", "50%", "height", "100%", "margin-right", "20px", "width", "80%", "margin-bottom", "50px", 3, "src"], [3, "value"], [3, "formGroupName"], ["fxFlex", "100", "fxLayoutGap", "15px"], ["fxFlex", "1"], ["fxFlex", "30", 1, "form-group"], ["formControlName", "idType", "id", "forIdType", "required", ""], ["matInput", "", "formControlName", "idNumber", "id", "foridNumber", "maxlength", "15", "minLength", "12", "required", "", 3, "keypress"], ["matInput", "", "formControlName", "expiryDate", "id", "forIdexpiryDate", "readonly", "", "required", "", 3, "min", "max", "matDatepicker"], ["expiryDate", ""], ["matInput", "", "id", "foraddress1", "formControlName", "address1", "required", ""], ["matInput", "", "id", "foraddress2", "formControlName", "address2", "required", ""], ["id", "forcountry", "formControlName", "country", "required", "", 3, "selectionChange"], ["id", "forstate", "formControlName", "state", "required", "", 3, "selectionChange"], ["id", "forCity", "formControlName", "city", "required", ""], ["matInput", "", "formControlName", "zipcode", "id", "forZipCode", "onlyNumber", "", "maxlength", "10", "minLength", "5", "required", "", 3, "keypress"], ["formControlName", "addressType", "id", "forAddressType", "required", ""], ["matInput", "", "formControlName", "taxId", "id", "forTaxId", "maxlength", "10", "required", "", 3, "keypress"], ["formControlName", "countryOfIssue", "id", "forCountryOfIssue", "required", ""], ["fxFlex", "20", 1, "form-group"], ["mat-raised-button", "", "color", "primary", 2, "background-color", "rgb(77, 114, 248)", 3, "disabled", "click"], ["fxFlex", "60"], [1, "showDirectorCard"], ["mat-card-avatar", "", 1, "example-header-image"], [4, "ngIf", "ngIfElse"], ["showAvatar", ""], [2, "margin-top", "10px"], ["align", "end"], ["mat-button", "", 3, "click"], ["align", "center", 2, "margin-top", "20px", "font-size", "50px"]],
        template: function CreateDirectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

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
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r98);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-slide-toggle", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateDirectorComponent_Template_mat_slide_toggle_ngModelChange_23_listener($event) {
              return ctx.disabled = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CreateDirectorComponent_mat_form_field_27_Template, 4, 0, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CreateDirectorComponent_mat_form_field_28_Template, 8, 2, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, CreateDirectorComponent_mat_error_29_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "select---");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, CreateDirectorComponent_mat_option_36_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-placeholder", 17);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-placeholder", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "First Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, CreateDirectorComponent_mat_error_48_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "mat-placeholder", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Middle Name ");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "mat-placeholder", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Last Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, CreateDirectorComponent_mat_error_64_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "mat-select", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "select---");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, CreateDirectorComponent_mat_option_71_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "mat-placeholder", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Gender ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](74, CreateDirectorComponent_mat_error_74_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "mat-datepicker-toggle", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "mat-datepicker", null, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "mat-placeholder", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Date Of Birth ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](86, CreateDirectorComponent_mat_error_86_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "mat-select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "select---");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, CreateDirectorComponent_mat_option_93_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "mat-placeholder", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Place Of Birth ");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "mat-select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "select---");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](105, CreateDirectorComponent_mat_option_105_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "mat-placeholder", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Residence Type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](108, CreateDirectorComponent_mat_error_108_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](115, CreateDirectorComponent_div_115_Template, 1, 3, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "mat-select", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function CreateDirectorComponent_Template_mat_select_selectionChange_117_listener($event) {
              return ctx.onSelectionCitizionship($event.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](120, CreateDirectorComponent_mat_option_120_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "mat-placeholder", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Citizenship By");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](123, CreateDirectorComponent_mat_error_123_Template, 1, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](132, CreateDirectorComponent_div_132_Template, 1, 3, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "mat-select", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function CreateDirectorComponent_Template_mat_select_selectionChange_134_listener($event) {
              return ctx.onSelectionResidance($event.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "--Select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](137, CreateDirectorComponent_mat_option_137_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "mat-placeholder", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Country Of Residence");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](140, CreateDirectorComponent_mat_error_140_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](141, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](143, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](145, CreateDirectorComponent_div_145_Template, 28, 9, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](147, CreateDirectorComponent_div_147_Template, 76, 13, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "fieldset", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "legend", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "Contact Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "input", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_Template_input_keypress_155_listener($event) {
              return ctx._keyPress($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "mat-placeholder", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "Mobile Number ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](158, CreateDirectorComponent_mat_error_158_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](159, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_Template_input_keypress_162_listener($event) {
              return ctx._keyPress($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "mat-placeholder", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "Landline Number ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](165, CreateDirectorComponent_mat_error_165_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](171, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "mat-placeholder", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](174, CreateDirectorComponent_mat_error_174_Template, 3, 0, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](175, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](176, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](179, CreateDirectorComponent_div_179_Template, 31, 5, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](180, CreateDirectorComponent_mat_card_180_Template, 21, 12, "mat-card", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](83);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.createDirectorFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("expanded", ctx.panelOpenState || ctx.noOfDir == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.panelOpenState == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.panelOpenState == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.disabled)("disabled", ctx.disabledToggle);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r13)("max", ctx.maxDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("dateOfBirth").touched && !ctx.createDirectorFormGroup.get("dateOfBirth").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.arrayCountry);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("placeOfBirth").touched && !ctx.createDirectorFormGroup.get("placeOfBirth").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.arrayResidence);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("residenceStatus").touched && !ctx.createDirectorFormGroup.get("residenceStatus").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currencyCode);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.arrayCountry);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("citizenship").touched && !ctx.createDirectorFormGroup.get("citizenship").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Currency);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.arrayCountry);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("countryOfResidence").touched && !ctx.createDirectorFormGroup.get("countryOfResidence").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.createDirectorFormGroup.get("custIdProofs")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.createDirectorFormGroup.get("userAddress")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("phoneNumber").touched && !ctx.createDirectorFormGroup.get("phoneNumber").valid && !ctx.createDirectorFormGroup.controls["phoneNumber"].hasError("minLength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("landlineNumber").touched && !ctx.createDirectorFormGroup.get("landlineNumber").valid && !ctx.createDirectorFormGroup.controls["landlineNumber"].hasError("minLength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("primaryEmailAdress").touched && !ctx.createDirectorFormGroup.get("primaryEmailAdress").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.createDirectorFormGroup.get("custTaxInfo")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.noOfDir != 1);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanelHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatPlaceholder"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepicker"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatPrefix"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["PatternValidator"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanelTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardAvatar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListAvatarCssMatStyler"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["SlicePipe"]],
        styles: [".mat-form-field[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0 4px 4px gainsboro !important;\n  padding-left: 10px;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.searchIcon[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  margin-top: 5px;\n}\n\n.search-results[_ngcontent-%COMP%] {\n  height: 10rem;\n  overflow: auto;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.hint[_ngcontent-%COMP%] {\n  padding-left: 0.8rem;\n  color: gray;\n  font-size: 10px;\n}\n\nlegend[_ngcontent-%COMP%] {\n  width: auto;\n  margin-left: 20px;\n  color: gray;\n  font-size: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-family: 'Courier New', Courier, monospace;\n}\n\n.showDirectorCard[_ngcontent-%COMP%] {\n  width: 95%;\n  height: 130px;\n  margin: 0px 0px 0px 30px;\n  padding: 0%;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  margin: 10px 10px 10px 20px;\n  background-size: cover;\n  background-color: #AED6F1;\n  width: 100px;\n  height: 100px;\n}\n\n.example-header-image-dropdown[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 8px;\n  background-size: cover;\n  background-color: #AED6F1;\n  width: 25px;\n  height: 35px;\n}\n\n.hide-autocomplete[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.alignImage[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  float: right;\n}\n\n.currency-flag[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 24px;\n  height: 16px;\n  background-size: cover;\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle_fallback.png\");\n}\n\n.currency-flag-sm[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 10px;\n}\n\n.currency-flag-lg[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 24px;\n}\n\n.currency-flag-xl[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 32px;\n}\n\n.currency-flag.currency-flag-aed[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/aed.png\");\n}\n\n.currency-flag.currency-flag-afn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/afn.png\");\n}\n\n.currency-flag.currency-flag-all[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/all.png\");\n}\n\n.currency-flag.currency-flag-amd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/amd.png\");\n}\n\n.currency-flag.currency-flag-ang[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ang.png\");\n}\n\n.currency-flag.currency-flag-aoa[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/aoa.png\");\n}\n\n.currency-flag.currency-flag-ars[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ars.png\");\n}\n\n.currency-flag.currency-flag-aud[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/aud.png\");\n}\n\n.currency-flag.currency-flag-awg[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/awg.png\");\n}\n\n.currency-flag.currency-flag-azn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/azn.png\");\n}\n\n.currency-flag.currency-flag-bam[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bam.png\");\n}\n\n.currency-flag.currency-flag-bbd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bbd.png\");\n}\n\n.currency-flag.currency-flag-bdt[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bdt.png\");\n}\n\n.currency-flag.currency-flag-bgn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bgn.png\");\n}\n\n.currency-flag.currency-flag-bhd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bhd.png\");\n}\n\n.currency-flag.currency-flag-bif[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bif.png\");\n}\n\n.currency-flag.currency-flag-bmd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bmd.png\");\n}\n\n.currency-flag.currency-flag-bnd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bnd.png\");\n}\n\n.currency-flag.currency-flag-bob[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bob.png\");\n}\n\n.currency-flag.currency-flag-brl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/brl.png\");\n}\n\n.currency-flag.currency-flag-bsd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bsd.png\");\n}\n\n.currency-flag.currency-flag-btn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/btn.png\");\n}\n\n.currency-flag.currency-flag-bwp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bwp.png\");\n}\n\n.currency-flag.currency-flag-byn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/byn.png\");\n}\n\n.currency-flag.currency-flag-bzd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bzd.png\");\n}\n\n.currency-flag.currency-flag-cad[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cad.png\");\n}\n\n.currency-flag.currency-flag-cdf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cdf.png\");\n}\n\n.currency-flag.currency-flag-chf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/chf.png\");\n}\n\n.currency-flag.currency-flag-clp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/clp.png\");\n}\n\n.currency-flag.currency-flag-cny[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cny.png\");\n}\n\n.currency-flag.currency-flag-cop[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cop.png\");\n}\n\n.currency-flag.currency-flag-crc[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/crc.png\");\n}\n\n.currency-flag.currency-flag-cup[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cup.png\");\n}\n\n.currency-flag.currency-flag-cve[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cve.png\");\n}\n\n.currency-flag.currency-flag-czk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/czk.png\");\n}\n\n.currency-flag.currency-flag-djf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/djf.png\");\n}\n\n.currency-flag.currency-flag-dkk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/dkk.png\");\n}\n\n.currency-flag.currency-flag-dop[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/dop.png\");\n}\n\n.currency-flag.currency-flag-dzd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/dzd.png\");\n}\n\n.currency-flag.currency-flag-egp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/egp.png\");\n}\n\n.currency-flag.currency-flag-ern[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ern.png\");\n}\n\n.currency-flag.currency-flag-etb[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/etb.png\");\n}\n\n.currency-flag.currency-flag-eur[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/eur.png\");\n}\n\n.currency-flag.currency-flag-fjd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/fjd.png\");\n}\n\n.currency-flag.currency-flag-fkp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/fkp.png\");\n}\n\n.currency-flag.currency-flag-gbp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gbp.png\");\n}\n\n.currency-flag.currency-flag-gel[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gel.png\");\n}\n\n.currency-flag.currency-flag-ghs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ghs.png\");\n}\n\n.currency-flag.currency-flag-gip[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gip.png\");\n}\n\n.currency-flag.currency-flag-gmd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gmd.png\");\n}\n\n.currency-flag.currency-flag-gnf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gnf.png\");\n}\n\n.currency-flag.currency-flag-gtq[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gtq.png\");\n}\n\n.currency-flag.currency-flag-gyd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gyd.png\");\n}\n\n.currency-flag.currency-flag-hkd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/hkd.png\");\n}\n\n.currency-flag.currency-flag-hnl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/hnl.png\");\n}\n\n.currency-flag.currency-flag-hrk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/hrk.png\");\n}\n\n.currency-flag.currency-flag-htg[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/htg.png\");\n}\n\n.currency-flag.currency-flag-huf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/huf.png\");\n}\n\n.currency-flag.currency-flag-idr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/idr.png\");\n}\n\n.currency-flag.currency-flag-ils[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ils.png\");\n}\n\n.currency-flag.currency-flag-inr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/inr.png\");\n}\n\n.currency-flag.currency-flag-iqd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/iqd.png\");\n}\n\n.currency-flag.currency-flag-irr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/irr.png\");\n}\n\n.currency-flag.currency-flag-isk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/isk.png\");\n}\n\n.currency-flag.currency-flag-jmd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/jmd.png\");\n}\n\n.currency-flag.currency-flag-jod[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/jod.png\");\n}\n\n.currency-flag.currency-flag-jpy[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/jpy.png\");\n}\n\n.currency-flag.currency-flag-kes[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kes.png\");\n}\n\n.currency-flag.currency-flag-kgs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kgs.png\");\n}\n\n.currency-flag.currency-flag-khr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/khr.png\");\n}\n\n.currency-flag.currency-flag-kmf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kmf.png\");\n}\n\n.currency-flag.currency-flag-kpw[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kpw.png\");\n}\n\n.currency-flag.currency-flag-krw[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/krw.png\");\n}\n\n.currency-flag.currency-flag-kwd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kwd.png\");\n}\n\n.currency-flag.currency-flag-kyd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kyd.png\");\n}\n\n.currency-flag.currency-flag-kzt[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kzt.png\");\n}\n\n.currency-flag.currency-flag-lak[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lak.png\");\n}\n\n.currency-flag.currency-flag-lbp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lbp.png\");\n}\n\n.currency-flag.currency-flag-lkr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lkr.png\");\n}\n\n.currency-flag.currency-flag-lrd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lrd.png\");\n}\n\n.currency-flag.currency-flag-ltl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ltl.png\");\n}\n\n.currency-flag.currency-flag-lyd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lyd.png\");\n}\n\n.currency-flag.currency-flag-mad[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mad.png\");\n}\n\n.currency-flag.currency-flag-mdl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mdl.png\");\n}\n\n.currency-flag.currency-flag-mga[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mga.png\");\n}\n\n.currency-flag.currency-flag-mkd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mkd.png\");\n}\n\n.currency-flag.currency-flag-mmk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mmk.png\");\n}\n\n.currency-flag.currency-flag-mnt[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mnt.png\");\n}\n\n.currency-flag.currency-flag-mop[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mop.png\");\n}\n\n.currency-flag.currency-flag-mro[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mro.png\");\n}\n\n.currency-flag.currency-flag-mur[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mur.png\");\n}\n\n.currency-flag.currency-flag-mvr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mvr.png\");\n}\n\n.currency-flag.currency-flag-mwk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mwk.png\");\n}\n\n.currency-flag.currency-flag-mxn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mxn.png\");\n}\n\n.currency-flag.currency-flag-myr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/myr.png\");\n}\n\n.currency-flag.currency-flag-mzn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mzn.png\");\n}\n\n.currency-flag.currency-flag-nad[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/nad.png\");\n}\n\n.currency-flag.currency-flag-ngn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ngn.png\");\n}\n\n.currency-flag.currency-flag-nio[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/nio.png\");\n}\n\n.currency-flag.currency-flag-nok[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/nok.png\");\n}\n\n.currency-flag.currency-flag-npr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/npr.png\");\n}\n\n.currency-flag.currency-flag-nzd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/nzd.png\");\n}\n\n.currency-flag.currency-flag-omr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/omr.png\");\n}\n\n.currency-flag.currency-flag-pen[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pen.png\");\n}\n\n.currency-flag.currency-flag-pgk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pgk.png\");\n}\n\n.currency-flag.currency-flag-php[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/php.png\");\n}\n\n.currency-flag.currency-flag-pkr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pkr.png\");\n}\n\n.currency-flag.currency-flag-pln[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pln.png\");\n}\n\n.currency-flag.currency-flag-pyg[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pyg.png\");\n}\n\n.currency-flag.currency-flag-qar[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/qar.png\");\n}\n\n.currency-flag.currency-flag-ron[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ron.png\");\n}\n\n.currency-flag.currency-flag-rsd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/rsd.png\");\n}\n\n.currency-flag.currency-flag-rub[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/rub.png\");\n}\n\n.currency-flag.currency-flag-rwf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/rwf.png\");\n}\n\n.currency-flag.currency-flag-sar[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sar.png\");\n}\n\n.currency-flag.currency-flag-sbd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sbd.png\");\n}\n\n.currency-flag.currency-flag-scr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/scr.png\");\n}\n\n.currency-flag.currency-flag-sek[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sek.png\");\n}\n\n.currency-flag.currency-flag-sgd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sgd.png\");\n}\n\n.currency-flag.currency-flag-shp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/shp.png\");\n}\n\n.currency-flag.currency-flag-sll[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sll.png\");\n}\n\n.currency-flag.currency-flag-sos[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sos.png\");\n}\n\n.currency-flag.currency-flag-srd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/srd.png\");\n}\n\n.currency-flag.currency-flag-std[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/std.png\");\n}\n\n.currency-flag.currency-flag-svc[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/svc.png\");\n}\n\n.currency-flag.currency-flag-syp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/syp.png\");\n}\n\n.currency-flag.currency-flag-szl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/szl.png\");\n}\n\n.currency-flag.currency-flag-thb[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/thb.png\");\n}\n\n.currency-flag.currency-flag-tjs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/tjs.png\");\n}\n\n.currency-flag.currency-flag-tnd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/tnd.png\");\n}\n\n.currency-flag.currency-flag-top[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/top.png\");\n}\n\n.currency-flag.currency-flag-try[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/try.png\");\n}\n\n.currency-flag.currency-flag-ttd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ttd.png\");\n}\n\n.currency-flag.currency-flag-twd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/twd.png\");\n}\n\n.currency-flag.currency-flag-tzs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/tzs.png\");\n}\n\n.currency-flag.currency-flag-uah[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/uah.png\");\n}\n\n.currency-flag.currency-flag-ugx[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ugx.png\");\n}\n\n.currency-flag.currency-flag-usd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/usd.png\");\n}\n\n.currency-flag.currency-flag-uyu[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/uyu.png\");\n}\n\n.currency-flag.currency-flag-uzs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/uzs.png\");\n}\n\n.currency-flag.currency-flag-vef[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/vef.png\");\n}\n\n.currency-flag.currency-flag-vnd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/vnd.png\");\n}\n\n.currency-flag.currency-flag-vuv[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/vuv.png\");\n}\n\n.currency-flag.currency-flag-wst[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/wst.png\");\n}\n\n.currency-flag.currency-flag-xaf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/xaf.png\");\n}\n\n.currency-flag.currency-flag-xcd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/xcd.png\");\n}\n\n.currency-flag.currency-flag-xof[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/xof.png\");\n}\n\n.currency-flag.currency-flag-xpf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/xpf.png\");\n}\n\n.currency-flag.currency-flag-yer[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/yer.png\");\n}\n\n.currency-flag.currency-flag-zar[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/zar.png\");\n}\n\n.currency-flag.currency-flag-zmw[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/zmw.png\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNyZWF0ZS1kaXJlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHVCQUF1QjtFQUN2QiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0FBQ25COztBQUVBO0VBQ0MsYUFBYTtBQUNkOztBQUNBO0VBQ0Msa0JBQWtCO0VBQ2xCLGVBQWU7QUFFaEI7O0FBQUE7RUFDSSxhQUFhO0VBQ2IsY0FBYztBQUdsQjs7QUFBQTtFQUNDLGFBQWE7RUFDYixzQkFBc0I7QUFHdkI7O0FBQUE7RUFDQyxXQUFXO0FBR1o7O0FBQUE7RUFDQyxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGVBQWU7QUFHaEI7O0FBQUE7RUFDQyxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw4Q0FBOEM7QUFHL0M7O0FBQUE7RUFDQyxVQUFVO0VBQ1YsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixXQUFXO0FBR1o7O0FBQUE7RUFDQywyQkFBMkI7RUFFM0Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtBQUVkOztBQUNBO0VBQ0Msc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0FBQ2I7O0FBRUE7RUFBcUIsYUFBYTtBQUVsQzs7QUFBQTtFQUNDLGdCQUFnQjtFQUNoQixZQUFZO0FBR2I7O0FBQUU7RUFDRCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsOEZBQTZGO0FBRzlGOztBQUFFO0VBQ0QsV0FBVztFQUNYLFlBQVk7QUFHYjs7QUFBRTtFQUNELFdBQVc7RUFDWCxZQUFZO0FBR2I7O0FBQUU7RUFDRCxXQUFXO0VBQ1gsWUFBWTtBQUdiOztBQUVFO0VBQWlDLHlGQUF3RjtBQUUzSDs7QUFERTtFQUFpQyx5RkFBd0Y7QUFLM0g7O0FBSkU7RUFBaUMseUZBQXdGO0FBUTNIOztBQVBFO0VBQWlDLHlGQUF3RjtBQVczSDs7QUFWRTtFQUFpQyx5RkFBd0Y7QUFjM0g7O0FBYkU7RUFBaUMseUZBQXdGO0FBaUIzSDs7QUFoQkU7RUFBaUMseUZBQXdGO0FBb0IzSDs7QUFuQkU7RUFBaUMseUZBQXdGO0FBdUIzSDs7QUF0QkU7RUFBaUMseUZBQXdGO0FBMEIzSDs7QUF6QkU7RUFBaUMseUZBQXdGO0FBNkIzSDs7QUE1QkU7RUFBaUMseUZBQXdGO0FBZ0MzSDs7QUEvQkU7RUFBaUMseUZBQXdGO0FBbUMzSDs7QUFsQ0U7RUFBaUMseUZBQXdGO0FBc0MzSDs7QUFyQ0U7RUFBaUMseUZBQXdGO0FBeUMzSDs7QUF4Q0U7RUFBaUMseUZBQXdGO0FBNEMzSDs7QUEzQ0U7RUFBaUMseUZBQXdGO0FBK0MzSDs7QUE5Q0U7RUFBaUMseUZBQXdGO0FBa0QzSDs7QUFqREU7RUFBaUMseUZBQXdGO0FBcUQzSDs7QUFwREU7RUFBaUMseUZBQXdGO0FBd0QzSDs7QUF2REU7RUFBaUMseUZBQXdGO0FBMkQzSDs7QUExREU7RUFBaUMseUZBQXdGO0FBOEQzSDs7QUE3REU7RUFBaUMseUZBQXdGO0FBaUUzSDs7QUFoRUU7RUFBaUMseUZBQXdGO0FBb0UzSDs7QUFuRUU7RUFBaUMseUZBQXdGO0FBdUUzSDs7QUF0RUU7RUFBaUMseUZBQXdGO0FBMEUzSDs7QUF6RUU7RUFBaUMseUZBQXdGO0FBNkUzSDs7QUE1RUU7RUFBaUMseUZBQXdGO0FBZ0YzSDs7QUEvRUU7RUFBaUMseUZBQXdGO0FBbUYzSDs7QUFsRkU7RUFBaUMseUZBQXdGO0FBc0YzSDs7QUFyRkU7RUFBaUMseUZBQXdGO0FBeUYzSDs7QUF4RkU7RUFBaUMseUZBQXdGO0FBNEYzSDs7QUEzRkU7RUFBaUMseUZBQXdGO0FBK0YzSDs7QUE5RkU7RUFBaUMseUZBQXdGO0FBa0czSDs7QUFqR0U7RUFBaUMseUZBQXdGO0FBcUczSDs7QUFwR0U7RUFBaUMseUZBQXdGO0FBd0czSDs7QUF2R0U7RUFBaUMseUZBQXdGO0FBMkczSDs7QUExR0U7RUFBaUMseUZBQXdGO0FBOEczSDs7QUE3R0U7RUFBaUMseUZBQXdGO0FBaUgzSDs7QUFoSEU7RUFBaUMseUZBQXdGO0FBb0gzSDs7QUFuSEU7RUFBaUMseUZBQXdGO0FBdUgzSDs7QUF0SEU7RUFBaUMseUZBQXdGO0FBMEgzSDs7QUF6SEU7RUFBaUMseUZBQXdGO0FBNkgzSDs7QUE1SEU7RUFBaUMseUZBQXdGO0FBZ0kzSDs7QUEvSEU7RUFBaUMseUZBQXdGO0FBbUkzSDs7QUFsSUU7RUFBaUMseUZBQXdGO0FBc0kzSDs7QUFySUU7RUFBaUMseUZBQXdGO0FBeUkzSDs7QUF4SUU7RUFBaUMseUZBQXdGO0FBNEkzSDs7QUEzSUU7RUFBaUMseUZBQXdGO0FBK0kzSDs7QUE5SUU7RUFBaUMseUZBQXdGO0FBa0ozSDs7QUFqSkU7RUFBaUMseUZBQXdGO0FBcUozSDs7QUFwSkU7RUFBaUMseUZBQXdGO0FBd0ozSDs7QUF2SkU7RUFBaUMseUZBQXdGO0FBMkozSDs7QUExSkU7RUFBaUMseUZBQXdGO0FBOEozSDs7QUE3SkU7RUFBaUMseUZBQXdGO0FBaUszSDs7QUFoS0U7RUFBaUMseUZBQXdGO0FBb0szSDs7QUFuS0U7RUFBaUMseUZBQXdGO0FBdUszSDs7QUF0S0U7RUFBaUMseUZBQXdGO0FBMEszSDs7QUF6S0U7RUFBaUMseUZBQXdGO0FBNkszSDs7QUE1S0U7RUFBaUMseUZBQXdGO0FBZ0wzSDs7QUEvS0U7RUFBaUMseUZBQXdGO0FBbUwzSDs7QUFsTEU7RUFBaUMseUZBQXdGO0FBc0wzSDs7QUFyTEU7RUFBaUMseUZBQXdGO0FBeUwzSDs7QUF4TEU7RUFBaUMseUZBQXdGO0FBNEwzSDs7QUEzTEU7RUFBaUMseUZBQXdGO0FBK0wzSDs7QUE5TEU7RUFBaUMseUZBQXdGO0FBa00zSDs7QUFqTUU7RUFBaUMseUZBQXdGO0FBcU0zSDs7QUFwTUU7RUFBaUMseUZBQXdGO0FBd00zSDs7QUF2TUU7RUFBaUMseUZBQXdGO0FBMk0zSDs7QUExTUU7RUFBaUMseUZBQXdGO0FBOE0zSDs7QUE3TUU7RUFBaUMseUZBQXdGO0FBaU4zSDs7QUFoTkU7RUFBaUMseUZBQXdGO0FBb04zSDs7QUFuTkU7RUFBaUMseUZBQXdGO0FBdU4zSDs7QUF0TkU7RUFBaUMseUZBQXdGO0FBME4zSDs7QUF6TkU7RUFBaUMseUZBQXdGO0FBNk4zSDs7QUE1TkU7RUFBaUMseUZBQXdGO0FBZ08zSDs7QUEvTkU7RUFBaUMseUZBQXdGO0FBbU8zSDs7QUFsT0U7RUFBaUMseUZBQXdGO0FBc08zSDs7QUFyT0U7RUFBaUMseUZBQXdGO0FBeU8zSDs7QUF4T0U7RUFBaUMseUZBQXdGO0FBNE8zSDs7QUEzT0U7RUFBaUMseUZBQXdGO0FBK08zSDs7QUE5T0U7RUFBaUMseUZBQXdGO0FBa1AzSDs7QUFqUEU7RUFBaUMseUZBQXdGO0FBcVAzSDs7QUFwUEU7RUFBaUMseUZBQXdGO0FBd1AzSDs7QUF2UEU7RUFBaUMseUZBQXdGO0FBMlAzSDs7QUExUEU7RUFBaUMseUZBQXdGO0FBOFAzSDs7QUE3UEU7RUFBaUMseUZBQXdGO0FBaVEzSDs7QUFoUUU7RUFBaUMseUZBQXdGO0FBb1EzSDs7QUFuUUU7RUFBaUMseUZBQXdGO0FBdVEzSDs7QUF0UUU7RUFBaUMseUZBQXdGO0FBMFEzSDs7QUF6UUU7RUFBaUMseUZBQXdGO0FBNlEzSDs7QUE1UUU7RUFBaUMseUZBQXdGO0FBZ1IzSDs7QUEvUUU7RUFBaUMseUZBQXdGO0FBbVIzSDs7QUFsUkU7RUFBaUMseUZBQXdGO0FBc1IzSDs7QUFyUkU7RUFBaUMseUZBQXdGO0FBeVIzSDs7QUF4UkU7RUFBaUMseUZBQXdGO0FBNFIzSDs7QUEzUkU7RUFBaUMseUZBQXdGO0FBK1IzSDs7QUE5UkU7RUFBaUMseUZBQXdGO0FBa1MzSDs7QUFqU0U7RUFBaUMseUZBQXdGO0FBcVMzSDs7QUFwU0U7RUFBaUMseUZBQXdGO0FBd1MzSDs7QUF2U0U7RUFBaUMseUZBQXdGO0FBMlMzSDs7QUExU0U7RUFBaUMseUZBQXdGO0FBOFMzSDs7QUE3U0U7RUFBaUMseUZBQXdGO0FBaVQzSDs7QUFoVEU7RUFBaUMseUZBQXdGO0FBb1QzSDs7QUFuVEU7RUFBaUMseUZBQXdGO0FBdVQzSDs7QUF0VEU7RUFBaUMseUZBQXdGO0FBMFQzSDs7QUF6VEU7RUFBaUMseUZBQXdGO0FBNlQzSDs7QUE1VEU7RUFBaUMseUZBQXdGO0FBZ1UzSDs7QUEvVEU7RUFBaUMseUZBQXdGO0FBbVUzSDs7QUFsVUU7RUFBaUMseUZBQXdGO0FBc1UzSDs7QUFyVUU7RUFBaUMseUZBQXdGO0FBeVUzSDs7QUF4VUU7RUFBaUMseUZBQXdGO0FBNFUzSDs7QUEzVUU7RUFBaUMseUZBQXdGO0FBK1UzSDs7QUE5VUU7RUFBaUMseUZBQXdGO0FBa1YzSDs7QUFqVkU7RUFBaUMseUZBQXdGO0FBcVYzSDs7QUFwVkU7RUFBaUMseUZBQXdGO0FBd1YzSDs7QUF2VkU7RUFBaUMseUZBQXdGO0FBMlYzSDs7QUExVkU7RUFBaUMseUZBQXdGO0FBOFYzSDs7QUE3VkU7RUFBaUMseUZBQXdGO0FBaVczSDs7QUFoV0U7RUFBaUMseUZBQXdGO0FBb1czSDs7QUFuV0U7RUFBaUMseUZBQXdGO0FBdVczSDs7QUF0V0U7RUFBaUMseUZBQXdGO0FBMFczSDs7QUF6V0U7RUFBaUMseUZBQXdGO0FBNlczSDs7QUE1V0U7RUFBaUMseUZBQXdGO0FBZ1gzSDs7QUEvV0U7RUFBaUMseUZBQXdGO0FBbVgzSDs7QUFsWEU7RUFBaUMseUZBQXdGO0FBc1gzSDs7QUFyWEU7RUFBaUMseUZBQXdGO0FBeVgzSDs7QUF4WEU7RUFBaUMseUZBQXdGO0FBNFgzSDs7QUEzWEU7RUFBaUMseUZBQXdGO0FBK1gzSDs7QUE5WEU7RUFBaUMseUZBQXdGO0FBa1kzSDs7QUFqWUU7RUFBaUMseUZBQXdGO0FBcVkzSDs7QUFwWUU7RUFBaUMseUZBQXdGO0FBd1kzSDs7QUF2WUU7RUFBaUMseUZBQXdGO0FBMlkzSDs7QUExWUU7RUFBaUMseUZBQXdGO0FBOFkzSDs7QUE3WUU7RUFBaUMseUZBQXdGO0FBaVozSDs7QUFoWkU7RUFBaUMseUZBQXdGO0FBb1ozSDs7QUFuWkU7RUFBaUMseUZBQXdGO0FBdVozSDs7QUF0WkU7RUFBaUMseUZBQXdGO0FBMFozSDs7QUF6WkU7RUFBaUMseUZBQXdGO0FBNlozSDs7QUE1WkU7RUFBaUMseUZBQXdGO0FBZ2EzSDs7QUEvWkU7RUFBaUMseUZBQXdGO0FBbWEzSDs7QUFsYUU7RUFBaUMseUZBQXdGO0FBc2EzSDs7QUFyYUU7RUFBaUMseUZBQXdGO0FBeWEzSDs7QUF4YUU7RUFBaUMseUZBQXdGO0FBNGEzSDs7QUEzYUU7RUFBaUMseUZBQXdGO0FBK2EzSDs7QUE5YUU7RUFBaUMseUZBQXdGO0FBa2IzSDs7QUFqYkU7RUFBaUMseUZBQXdGO0FBcWIzSDs7QUFwYkU7RUFBaUMseUZBQXdGO0FBd2IzSDs7QUF2YkU7RUFBaUMseUZBQXdGO0FBMmIzSDs7QUExYkU7RUFBaUMseUZBQXdGO0FBOGIzSDs7QUE3YkU7RUFBaUMseUZBQXdGO0FBaWMzSDs7QUFoY0U7RUFBaUMseUZBQXdGO0FBb2MzSCIsImZpbGUiOiJjcmVhdGUtZGlyZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdGJveC1zaGFkb3c6IDAgNHB4IDRweCBnYWluc2Jvcm8gIWltcG9ydGFudDtcclxuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zZWFyY2hJY29ue1xyXG5cdG1hcmdpbi1yaWdodDogMjBweDtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnNlYXJjaC1yZXN1bHRzIHtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1hdC1mb2N1c2VkIC5wbGFjZWhvbGRlciB7XHJcblx0Y29sb3I6IGdyYXk7XHJcbiAgfVxyXG4gIFxyXG4uaGludCB7XHJcblx0cGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcblx0Y29sb3I6IGdyYXk7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5sZWdlbmQge1xyXG5cdHdpZHRoOiBhdXRvO1xyXG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdGNvbG9yOiBncmF5O1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblx0cGFkZGluZy1yaWdodDogMjBweDtcclxuXHRmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG59XHJcblxyXG4uc2hvd0RpcmVjdG9yQ2FyZCB7XHJcblx0d2lkdGg6IDk1JTtcclxuXHRoZWlnaHQ6IDEzMHB4O1xyXG5cdG1hcmdpbjogMHB4IDBweCAwcHggMzBweDtcclxuXHRwYWRkaW5nOiAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuXHRtYXJnaW46IDEwcHggMTBweCAxMHB4IDIwcHg7XHJcblx0Ly8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjQUVENkYxO1xyXG5cdHdpZHRoOiAxMDBweDtcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2UtZHJvcGRvd24ge1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0bWFyZ2luLXJpZ2h0OiA4cHg7XHJcblx0Ly8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjQUVENkYxO1xyXG5cdHdpZHRoOiAyNXB4O1xyXG5cdGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmhpZGUtYXV0b2NvbXBsZXRlIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuLmFsaWduSW1hZ2V7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuY3VycmVuY3ktZmxhZyB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAyNHB4O1xyXG5cdGhlaWdodDogMTZweDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL3dpc2UuY29tL3B1YmxpYy1yZXNvdXJjZXMvYXNzZXRzL2ZsYWdzL3JlY3RhbmdsZV9mYWxsYmFjay5wbmcnKTtcclxuICB9XHJcblxyXG4gIC5jdXJyZW5jeS1mbGFnLXNtIHtcclxuXHR3aWR0aDogMTZweDtcclxuXHRoZWlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY3VycmVuY3ktZmxhZy1sZyB7XHJcblx0d2lkdGg6IDM2cHg7XHJcblx0aGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLmN1cnJlbmN5LWZsYWcteGwge1xyXG5cdHdpZHRoOiA0OHB4O1xyXG5cdGhlaWdodDogMzJweDtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hZWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2FlZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hZm57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2Fmbi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hbGx7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2FsbC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hbWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2FtZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hbmd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2FuZy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hb2F7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2FvYS5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hcnN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2Fycy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hdWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2F1ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hd2d7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2F3Zy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1hem57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2F6bi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1iYW17YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JhbS5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1iYmR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JiZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1iZHR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JkdC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1iZ257YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2Jnbi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1iaGR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JoZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1iaWZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JpZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ibWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JtZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ibmR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JuZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ib2J7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JvYi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1icmx7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JybC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ic2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2JzZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1idG57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2J0bi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1id3B7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2J3cC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ieW57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2J5bi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1iemR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2J6ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jYWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2NhZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jZGZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2NkZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jaGZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2NoZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jbHB7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2NscC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jbnl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2NueS5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jb3B7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2NvcC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jcmN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2NyYy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jdXB7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2N1cC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jdmV7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2N2ZS5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1jemt7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2N6ay5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1kamZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2RqZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ka2t7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2Rray5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1kb3B7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2RvcC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1kemR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2R6ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1lZ3B7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2VncC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1lcm57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2Vybi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ldGJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2V0Yi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ldXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2V1ci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1mamR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2ZqZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ma3B7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2ZrcC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1nYnB7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2dicC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1nZWx7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2dlbC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1naHN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2docy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1naXB7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2dpcC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1nbWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2dtZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1nbmZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2duZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ndHF7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2d0cS5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1neWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2d5ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1oa2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2hrZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1obmx7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2hubC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ocmt7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2hyay5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1odGd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2h0Zy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1odWZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2h1Zi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1pZHJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2lkci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1pbHN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2lscy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1pbnJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2luci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1pcWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2lxZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1pcnJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2lyci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1pc2t7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2lzay5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1qbWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2ptZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1qb2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2pvZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1qcHl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2pweS5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1rZXN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2tlcy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1rZ3N7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2tncy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1raHJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2toci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1rbWZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2ttZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1rcHd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2twdy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1rcnd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2tydy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1rd2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2t3ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1reWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2t5ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1renR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2t6dC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1sYWt7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2xhay5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1sYnB7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2xicC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1sa3J7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2xrci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1scmR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2xyZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1sdGx7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2x0bC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1seWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL2x5ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tYWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL21hZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tZGx7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL21kbC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tZ2F7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL21nYS5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ta2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL21rZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tbWt7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL21tay5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tbnR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL21udC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tb3B7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL21vcC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tcm97YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL21yby5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tdXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL211ci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tdnJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL212ci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1td2t7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL213ay5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1teG57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL214bi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1teXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL215ci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1tem57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL216bi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1uYWR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL25hZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1uZ257YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL25nbi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1uaW97YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL25pby5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ub2t7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL25vay5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ucHJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL25wci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1uemR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL256ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1vbXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL29tci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1wZW57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Blbi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1wZ2t7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Bnay5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1waHB7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3BocC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1wa3J7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Brci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1wbG57YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Bsbi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1weWd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3B5Zy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1xYXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Fhci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1yb257YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Jvbi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1yc2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3JzZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1ydWJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3J1Yi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1yd2Z7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3J3Zi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zYXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Nhci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zYmR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3NiZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zY3J7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Njci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zZWt7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Nlay5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zZ2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3NnZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zaHB7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3NocC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zbGx7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3NsbC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zb3N7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Nvcy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zcmR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3NyZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zdGR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3N0ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zdmN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3N2Yy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zeXB7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3N5cC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy1zemx7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3N6bC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy10aGJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3RoYi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy10anN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Rqcy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy10bmR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3RuZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy10b3B7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3RvcC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy10cnl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3RyeS5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy10dGR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3R0ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy10d2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3R3ZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy10enN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3R6cy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy11YWh7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3VhaC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy11Z3h7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3VneC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy11c2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3VzZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy11eXV7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3V5dS5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy11enN7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3V6cy5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy12ZWZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3ZlZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy12bmR7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3ZuZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy12dXZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3Z1di5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy13c3R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3dzdC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy14YWZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3hhZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy14Y2R7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3hjZC5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy14b2Z7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3hvZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy14cGZ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3hwZi5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy15ZXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3llci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy16YXJ7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3phci5wbmcnKTt9XHJcbiAgLmN1cnJlbmN5LWZsYWcuY3VycmVuY3ktZmxhZy16bXd7YmFja2dyb3VuZC1pbWFnZTp1cmwoJ2h0dHBzOi8vd2lzZS5jb20vcHVibGljLXJlc291cmNlcy9hc3NldHMvZmxhZ3MvcmVjdGFuZ2xlL3ptdy5wbmcnKTt9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CreateDirectorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'app-create-director',
            templateUrl: './create-director.component.html',
            styleUrls: ['./create-director.component.scss']
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


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");

      function OnboradingPrimaryComponent_ng_container_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/no-image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function OnboradingPrimaryComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 36);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function OnboradingPrimaryComponent_mat_option_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var compName_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", compName_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", compName_r9, " ");
        }
      }

      function OnboradingPrimaryComponent_mat_error_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please select Company Name!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OnboradingPrimaryComponent_mat_option_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r10, " ");
        }
      }

      function OnboradingPrimaryComponent_mat_error_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please select Category!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OnboradingPrimaryComponent_mat_option_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", country_r11, " ");
        }
      }

      function OnboradingPrimaryComponent_mat_error_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please select Country!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var OnboradingPrimaryComponent = /*#__PURE__*/function () {
        function OnboradingPrimaryComponent(router, formBuilder, dialogService, corporateService, cdr, snack, apiService) {
          _classCallCheck(this, OnboradingPrimaryComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.dialogService = dialogService;
          this.corporateService = corporateService;
          this.cdr = cdr;
          this.snack = snack;
          this.apiService = apiService;
          this.companyNameArr = ['ABC Bank', 'Yes Bank', 'No Bank'];
          this.categoryArr = ['Privileged', 'Un Privileged'];
          this.countryArr = [];
          this.profileImageExist = false;
          this.onboardingPrimary = this.formBuilder.group({
            companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
          }); // this.corporateService.stepReady(this.onboardingPrimary, 'one')
        }

        _createClass(OnboradingPrimaryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.imageURL = "not_available";
            console.log("imageurl", this.imgUrl);
            this.getCountryName("country");
          }
        }, {
          key: "previous",
          value: function previous() {
            this.dialogService.openCustomerType();
          }
        }, {
          key: "corporateChange",
          value: function corporateChange(event) {
            var _this21 = this;

            this.selectedFiles = event.target.files[0]; // Below part is used to display the selected image

            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = function (event2) {
              _this21.imgUrl = reader.result;
            };
          }
        }, {
          key: "profileChange",
          value: function profileChange(event) {
            var _this22 = this;

            this.profilePicture = event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = function (event2) {
              // this.imgUrl = reader.result;
              //  this.fun(event.target.files[0], this.profilePicture);
              _this22.imageURL = reader.result;
              _this22.profileImageExist = true;
            };
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(onboardingPrimary) {
            var _this23 = this;

            console.log("onboardingPrimary :: ", onboardingPrimary);
            this.corporateService.saveOrUpdateCorporateAccountInfo(onboardingPrimary).subscribe(function (data) {
              console.log('data :: ', data);

              if (data != null) {
                _this23.corporateService.sendCorporateAccountId(data.corporateId);

                _this23.snack.open('Data Saved' + ' !', 'OK', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });

                _this23.cdr.markForCheck();

                _this23.next();
              } else {
                _this23.snack.open('Not able to connect to server!', 'INTERNAL SERVER ERROR', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });
              }
            }, function (error) {
              console.log('error resp :: ', error);

              _this23.snack.open("".concat(error.error.message, " "), 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            });
          }
        }, {
          key: "getProfileImage",
          value: function getProfileImage(customerId, document_type) {
            var _this24 = this;

            this.apiService.getCustomerDocuments(customerId, document_type).subscribe(function (data) {
              console.log("data ::", data);

              if (data.length > 0) {
                _this24.profileId = data[0].id;
                _this24.imageURL = data[0].fileUrl;
              }
            });
          }
        }, {
          key: "deleteProfileImg",
          value: function deleteProfileImg() {
            var _this25 = this;

            this.imageURL = "not_available";
            this.apiService.deleteCustomerDoc(this.customerId, this.profileId).subscribe(function (data) {
              _this25.snack.open('Profile Image Deleted Successfully', 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            });
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
            var _this26 = this;

            this.apiService.getDropDownValues(key).subscribe(function (data) {
              console.log('datas :: ', data);
              _this26.countryArr = data;
              console.log('countryArr :: ', _this26.countryArr);
            });
          }
        }]);

        return OnboradingPrimaryComponent;
      }();

      OnboradingPrimaryComponent.ɵfac = function OnboradingPrimaryComponent_Factory(t) {
        return new (t || OnboradingPrimaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      OnboradingPrimaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: OnboradingPrimaryComponent,
        selectors: [["app-onborading-primary"]],
        decls: 66,
        vars: 10,
        consts: [["ngNativeValidate", "", 3, "formGroup"], [1, "full-width", 2, "background-color", "#F1F1F4"], [2, "padding", "1rem 0"], [2, "padding", "0 4.3rem"], [2, "border-radius", "0px"], [1, "full-width", 2, "padding", "1rem 1rem"], [2, "font-size", "18px"], [2, "width", "70px", "border-bottom", "5px solid #456EFE", "left", "30px"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "10px"], ["fxFlex", "20%", "fxFlex.xs", "100%", 1, "full-width"], ["fxLayout", "column", "fxLayoutAlign", "space-around center", 1, "full-width"], ["mat-icon-button", "", 2, "float", "right", "padding-top", "8px", "padding-left", "30px"], ["type", "file", "input", "", "type", "file", "accept", "image/png, image/gif, image/jpg, image/jpeg", 2, "opacity", "0.0", "top", "0", "left", "18px", "bottom", "0", "right", "0", "position", "absolute", "width", "100%", "height", "100%", "text-align", "center", 3, "change"], ["color", "primary"], [4, "ngIf", "ngIfElse"], ["showAvatar", ""], [2, "margin-left", "400%", "cursor", "pointer", "color", "red", 3, "click"], ["fxFlex", "5%"], ["fxFlex", "70%", "fxLayoutGap", "10px"], ["fxLayout", "row", "fxLayoutGap", "100px"], ["fxFlex", "40%", 1, "form-group"], ["for", "forCompanyName", 1, "hint"], ["floatLabel", "never"], ["formControlName", "companyName", "id", "forCompanyName", "required", ""], ["disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "placeholder"], [4, "ngIf"], ["for", "forCategory", 1, "hint"], ["formControlName", "category", "id", "forCategory", "required", ""], ["fxLayout", "row", "fxLayoutGap", "10px"], ["for", "forCountry", 1, "hint"], ["formControlName", "country", "id", "forCountry", "required", ""], [1, "button"], ["mat-button", "", 1, "Back", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "disabled", "click"], ["alt", "", 1, "formImg", 3, "src"], [3, "value"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function OnboradingPrimaryComponent_Template_input_change_15_listener($event) {
              return ctx.profileChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, OnboradingPrimaryComponent_ng_container_18_Template, 2, 1, "ng-container", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, OnboradingPrimaryComponent_ng_template_19_Template, 1, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnboradingPrimaryComponent_Template_mat_icon_click_22_listener() {
              return ctx.deleteProfileImg();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Company Name* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-form-field", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "select---");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, OnboradingPrimaryComponent_mat_option_34_Template, 2, 2, "mat-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-placeholder", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Select Company Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, OnboradingPrimaryComponent_mat_error_37_Template, 3, 0, "mat-error", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Category* ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-form-field", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "select---");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, OnboradingPrimaryComponent_mat_option_45_Template, 2, 2, "mat-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-placeholder", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Select Category ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, OnboradingPrimaryComponent_mat_error_48_Template, 3, 0, "mat-error", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Country*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-form-field", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-select", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "select---");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, OnboradingPrimaryComponent_mat_option_57_Template, 2, 2, "mat-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-placeholder", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Select Country ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, OnboradingPrimaryComponent_mat_error_60_Template, 3, 0, "mat-error", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnboradingPrimaryComponent_Template_button_click_62_listener() {
              return ctx.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnboradingPrimaryComponent_Template_button_click_64_listener() {
              return ctx.onSubmit(ctx.onboardingPrimary.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.onboardingPrimary);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageURL == "available")("ngIfElse", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.companyNameArr);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onboardingPrimary.get("companyName").touched && !ctx.onboardingPrimary.get("companyName").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categoryArr);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onboardingPrimary.get("category").touched && !ctx.onboardingPrimary.get("category").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.countryArr);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onboardingPrimary.get("country").touched && !ctx.onboardingPrimary.get("country").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.onboardingPrimary.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]],
        styles: [".head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 6%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\n.Upload[_ngcontent-%COMP%] {\n  vertical-align: c;\n  align-self: center;\n  margin-top: 20px;\n  font-size: 15px;\n  text-decoration: underline;\n  color: #2680EB;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n  background-color: white;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  color: white;\n  background-color: #A0A0A0;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 70px;\n  border-bottom: 5px solid #456EFE;\n  left: 30px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.hint[_ngcontent-%COMP%] {\n  padding-left: 0.8rem;\n  color: gray;\n  font-size: 10px;\n}\n\n.selectandCard[_ngcontent-%COMP%] {\n  background-color: #FDFDFF;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.gap[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background-color: #F1F1F4;\n}\n\n.gapbw[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n\n.spacearround[_ngcontent-%COMP%] {\n  padding: 0 4.3rem;\n}\n\n.changeInput[_ngcontent-%COMP%] {\n  opacity: 0.0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.formImg[_ngcontent-%COMP%] {\n  height: 200px !important;\n  width: 200px !important;\n  background-color: whitesmoke;\n  border-radius: 10%;\n}\n\n.changeDiv[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0 4px 4px gainsboro !important;\n  padding-left: 10px;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG9uYm9yYWRpbmctcHJpbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFJQTtFQUNFLFlBQVk7QUFEZDs7QUFJQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBRHJCOztBQUlBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixjQUFjO0FBRGhCOztBQUlBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUR6Qjs7QUFJQTtFQUVFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0FBRnJCOztBQUtBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQW1DO0VBQ25DLFlBQVk7RUFDWixtQkFBbUI7QUFGckI7O0FBS0E7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLFVBQVU7QUFGWjs7QUFLQTtFQUNFLGVBQWU7QUFGakI7O0FBS0E7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUVYLGVBQWU7QUFIakI7O0FBTUE7RUFDRSx5QkFBeUI7QUFIM0I7O0FBTUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUNGO0FBSkE7O0FBTUE7RUFDRSx3QkFBd0I7QUFIMUI7O0FBTUE7RUFDRSxlQUFlO0FBSGpCOztBQU1BO0VBQ0UseUJBQXlCO0FBSDNCOztBQU1BO0VBQ0UsZUFDRjtBQUpBOztBQU1BO0VBQ0UsaUJBQWlCO0FBSG5COztBQU1BO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFIcEI7O0FBTUE7RUFDRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3hCLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFIbkI7O0FBTUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQUhuQjs7QUFNQTtFQUNFLHVCQUF1QjtFQUN2QiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0FBSHBCOztBQU1BO0VBQ0UsYUFBYTtBQUhmOztBQU1BO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUh4Qjs7QUFNQTtFQUNFLGtCQUFrQjtBQUhwQiIsImZpbGUiOiJvbmJvcmFkaW5nLXByaW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gIC8vICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uYmFzaWMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5tYWluLWhlYWQge1xyXG4gIHBhZGRpbmctbGVmdDogNiU7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLlVwbG9hZCB7XHJcbiAgdmVydGljYWwtYWxpZ246IGM7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiAjMjY4MEVCO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1sZWZ0OiAxMSU7XHJcbiAgcGFkZGluZy1yaWdodDogMTQlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uQmFjayB7XHJcblxyXG4gIG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNSU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTBBMEEwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbn1cclxuXHJcbi5OZXh0IHtcclxuICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTEzJTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxMDYsIDI0NSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICB3aWR0aDogNzBweDtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzQ1NkVGRTtcclxuICBsZWZ0OiAzMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uaGludCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgLy8gb3BhY2l0eTogNzAlO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLnNlbGVjdGFuZENhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGREZERkY7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ2FwIHtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi5iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjFGNDtcclxufVxyXG5cclxuLmdhcGJ3IHtcclxuICBwYWRkaW5nOiAxcmVtIDBcclxufVxyXG5cclxuLnNwYWNlYXJyb3VuZCB7XHJcbiAgcGFkZGluZzogMCA0LjNyZW07XHJcbn1cclxuXHJcbi5jaGFuZ2VJbnB1dCB7XHJcbiAgb3BhY2l0eTogMC4wO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm1JbWcge1xyXG4gIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMjAwcHggIWltcG9ydGFudDsgXHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcblxyXG4uY2hhbmdlRGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IGdhaW5zYm9ybyAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1hdC1mb2N1c2VkIC5wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59Il19 */"]
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
            type: app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
          }, {
            type: _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
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


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");

      function OtherInfoCorporateComponent_mat_option_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 39);

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

      function OtherInfoCorporateComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "OrganizationType is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OtherInfoCorporateComponent_mat_option_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 39);

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

      function OtherInfoCorporateComponent_mat_error_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Type Of Ownership is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OtherInfoCorporateComponent_mat_option_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var kycStat_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", kycStat_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", kycStat_r9, " ");
        }
      }

      function OtherInfoCorporateComponent_div_64_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var addrsType_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", addrsType_r24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", addrsType_r24, " ");
        }
      }

      function OtherInfoCorporateComponent_div_64_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "AddressType is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OtherInfoCorporateComponent_div_64_mat_error_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Address Line 1 is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OtherInfoCorporateComponent_div_64_mat_error_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Address Line 2 is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OtherInfoCorporateComponent_div_64_mat_option_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", country_r25, " ");
        }
      }

      function OtherInfoCorporateComponent_div_64_mat_error_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Country is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OtherInfoCorporateComponent_div_64_mat_option_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r26.value1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", state_r26.value1, " ");
        }
      }

      function OtherInfoCorporateComponent_div_64_mat_error_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "State is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OtherInfoCorporateComponent_div_64_mat_option_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var city_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", city_r27.value1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", city_r27.value1, " ");
        }
      }

      function OtherInfoCorporateComponent_div_64_mat_error_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "City is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OtherInfoCorporateComponent_div_64_mat_error_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Zipcode is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OtherInfoCorporateComponent_div_64_mat_error_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter valid ZipCode! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OtherInfoCorporateComponent_div_64_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "fieldset", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "legend", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Registration Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Address Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-select", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, OtherInfoCorporateComponent_div_64_mat_option_13_Template, 2, 2, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-placeholder", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Address Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, OtherInfoCorporateComponent_div_64_mat_error_16_Template, 3, 0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Address Line 1*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-placeholder", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Address Line 1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, OtherInfoCorporateComponent_div_64_mat_error_24_Template, 3, 0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Address Line 2*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-placeholder", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Address Line 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, OtherInfoCorporateComponent_div_64_mat_error_32_Template, 3, 0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Country*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-form-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-select", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function OtherInfoCorporateComponent_div_64_Template_mat_select_selectionChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r28.getStateName($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, OtherInfoCorporateComponent_div_64_mat_option_42_Template, 2, 2, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-placeholder", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Country ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, OtherInfoCorporateComponent_div_64_mat_error_45_Template, 3, 0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "State* ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-form-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-select", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function OtherInfoCorporateComponent_div_64_Template_mat_select_selectionChange_50_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r30.getCityName($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, OtherInfoCorporateComponent_div_64_mat_option_53_Template, 2, 2, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-placeholder", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "State ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, OtherInfoCorporateComponent_div_64_mat_error_56_Template, 3, 0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "City* ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "mat-form-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-select", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, OtherInfoCorporateComponent_div_64_mat_option_64_Template, 2, 2, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-placeholder", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "City ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, OtherInfoCorporateComponent_div_64_mat_error_67_Template, 3, 0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Zipcode*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-form-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-placeholder", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Zipcode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, OtherInfoCorporateComponent_div_64_mat_error_75_Template, 3, 0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, OtherInfoCorporateComponent_div_64_mat_error_76_Template, 2, 0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = ctx.$implicit;
          var i_r11 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.addressTypeList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r10.get("addressType").touched && !item_r10.get("addressType").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r10.get("address1").touched && !item_r10.get("address1").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r10.get("address2").touched && !item_r10.get("address2").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.arrayCountry);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r10.get("country").touched && !item_r10.get("country").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.arrayState);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r10.get("state").touched && !item_r10.get("state").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.arrayCity);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r10.get("city").touched && !item_r10.get("city").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r10.get("zipcode").touched && !item_r10.get("zipcode").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r10.get("zipCode").hasError("pattern"));
        }
      }

      function OtherInfoCorporateComponent_div_66_legend_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "legend", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Document Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OtherInfoCorporateComponent_div_66_mat_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var docType_r38 = ctx.$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r34.isDocumentOptionDisabled(docType_r38))("value", docType_r38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", docType_r38, " ");
        }
      }

      function OtherInfoCorporateComponent_div_66_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Document Type is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OtherInfoCorporateComponent_div_66_mat_error_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Document Name is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OtherInfoCorporateComponent_div_66_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "fieldset", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OtherInfoCorporateComponent_div_66_legend_2_Template, 2, 0, "legend", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Document Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-select", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function OtherInfoCorporateComponent_div_66_Template_mat_select_valueChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);

            var i_r32 = ctx.index;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r39.changeValue($event, i_r32);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "select---");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, OtherInfoCorporateComponent_div_66_mat_option_12_Template, 2, 3, "mat-option", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-placeholder", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Document Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, OtherInfoCorporateComponent_div_66_mat_error_15_Template, 3, 0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Document Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-placeholder", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Document Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, OtherInfoCorporateComponent_div_66_mat_error_23_Template, 3, 0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 68, 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function OtherInfoCorporateComponent_div_66_Template_input_change_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);

            var i_r32 = ctx.index;

            var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r41.onOtherDocSelect($event.target.files, i_r32, _r37.files[0].name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherInfoCorporateComponent_div_66_Template_button_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);

            var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);

            return _r37.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Browse");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherInfoCorporateComponent_div_66_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);

            var item_r31 = ctx.$implicit;
            var i_r32 = ctx.index;

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r43.deleteDocument(item_r31, i_r32);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-icon", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "delete_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r31 = ctx.$implicit;
          var i_r32 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", i_r32 == 0 ? "fieldSetZeroIndex" : "fieldSetNextIndex");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r32 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.documentTypeList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r31.get("documentType").touched && !item_r31.get("documentType").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r31.get("documentName").touched && !item_r31.get("documentName").valid);
        }
      }

      var OtherInfoCorporateComponent = /*#__PURE__*/function () {
        function OtherInfoCorporateComponent(router, formBuilder, dialogService, corporateService, cdr, snack, apiService) {
          var _this27 = this;

          _classCallCheck(this, OtherInfoCorporateComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.dialogService = dialogService;
          this.corporateService = corporateService;
          this.cdr = cdr;
          this.snack = snack;
          this.apiService = apiService;
          this.organizationTypeList = ['Public', 'Private'];
          this.typeOfOwnershipList = ['Independent', 'Dependent'];
          this.addressTypeList = ['Registration'];
          this.localityList = ['Bangalore', 'Mangalore'];
          this.kycStatusList = ['APPROVED', 'BACKLOG', 'INITIATED', 'REJECTED'];
          this.otherDocumentArray = [];
          this.selectedDocumentTypes = [];
          this.selectedOptions = [];

          this.isDocumentOptionDisabled = function (value) {
            return _this27.selectedOptions.includes(value);
          };

          this.otherInfoFormGroup = this.formBuilder.group({
            corporateId: [''],
            organizationType: [''],
            typeOfOwnership: [''],
            kycReference: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            KycStatus: [''],
            corporateAddress: formBuilder.array([]),
            corporateDocs: formBuilder.array([])
          }); // this.corporateService.stepReady(this.otherInfoFormGroup, 'five')

          this.addAddress();
          this.getCountryName("country");
        }

        _createClass(OtherInfoCorporateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this28 = this;

            this.corporateService.corporateAccountIdVal.subscribe(function (corporateId) {
              _this28.corporateId = corporateId;
              console.log('corporateId :: ', _this28.corporateId);

              _this28.otherInfoFormGroup.get('corporateId').setValue(corporateId);
            });
            this.getDoc();
            this.addDocument();
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
            return this.otherInfoFormGroup.get('corporateAddress');
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
              zipcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("[123456789]{1}[0-9]{5}")]]
            }));
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
            var _this29 = this;

            console.log('country in contact info :: ', key);
            this.apiService.getDropDownValues(key).subscribe(function (data) {
              _this29.arrayCountry = data;
              console.log("country in contact info -->", _this29.arrayCountry);
            });
          }
        }, {
          key: "getStateName",
          value: function getStateName(country) {
            var _this30 = this;

            console.log("State -- ", country);
            this.apiService.getDropDownValues1("state", country).subscribe(function (data) {
              _this30.arrayState = data;
              console.log("-->", _this30.arrayState);
            });
          }
        }, {
          key: "getCityName",
          value: function getCityName(state) {
            var _this31 = this;

            console.log(state);
            this.apiService.getDropDownValues1("city", state).subscribe(function (data) {
              _this31.arrayCity = data;
              console.log("-->", _this31.arrayCity);
            });
          }
        }, {
          key: "onOtherDocSelect",
          value: function onOtherDocSelect(files, idx, fileName) {
            console.log("Filelisttt", files);
            this.otherDocumentArray.push(files.item(0));
            this.otherInfoFormGroup.get('corporateDocs')['controls'][idx].controls.documentName.setValue(fileName);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(otherInfoFormGroup) {
            var _this32 = this;

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
                for (var i = 0; i < _this32.otherInfoFormGroup.get('corporateDocs').value.length; i++) {
                  if (_this32.otherDocumentArray.length > 0) {
                    var documentToBeUploaded = {};
                    documentToBeUploaded.documentName = _this32.otherInfoFormGroup.get('corporateDocs').value[i].documentType;
                    documentToBeUploaded.documentType = 2;
                    documentToBeUploaded.fileType = _this32.otherDocumentArray[i].type;
                    documentToBeUploaded.fileName = _this32.otherDocumentArray[i].name;
                    documentToBeUploaded.corporateId = data.corporateId;
                    documentToBeUploaded.id = _this32.otherDocumentArray[i].id;
                    var uploadData = new FormData();
                    uploadData.append('data', JSON.stringify(documentToBeUploaded));
                    uploadData.append('file', _this32.otherDocumentArray[i]);

                    _this32.apiService.uploadDocument(uploadData).subscribe(function (resp) {
                      console.log(resp);
                    });
                  }
                }

                _this32.dialogService.customerOnboardingSuccessDialogue('CORPORATE', _this32.corporateId); // this.snack.open(`Other information saved`+ ' !', 'OK', {
                //   duration: 4000,
                //   verticalPosition: 'top',
                //   horizontalPosition: 'right'
                // });


                _this32.cdr.markForCheck();
              } else {
                _this32.snack.open('Not able to connect to server!', 'INTERNAL SERVER ERROR', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });
              }
            }, function (error) {
              console.log('error resp :: ', error);

              _this32.snack.open("".concat(error.error.message, " "), 'OK', {
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
          key: "getDoc",
          value: function getDoc() {
            var _this33 = this;

            this.apiService.getDropDownValues("document_type").subscribe(function (data) {
              _this33.documentTypeList = data;
            });
            this.apiService.getDropDownValues("document_name").subscribe(function (resp) {
              _this33.idTypeList = resp;
            });
            this.apiService.getDropDownValues("country").subscribe(function (responseData) {
              _this33.countryList = responseData;
            });
            this.apiService.getDropDownValues("gender").subscribe(function (responseDatas) {
              _this33.genderList = responseDatas;
            });
            this.apiService.getDropDownValues("residence").subscribe(function (responses) {
              _this33.residenceList = responses;
            });
            this.apiService.getDropDownValues("nationality").subscribe(function (datas) {
              _this33.nationalityList = datas;
            });
          }
        }, {
          key: "changeValue",
          value: function changeValue(value, index) {
            var _this34 = this;

            console.log(index);

            if (this.selectedDocumentTypes[index]) {
              this.selectedOptions = this.selectedOptions.filter(function (val) {
                return val !== _this34.selectedDocumentTypes[index];
              });
            }

            this.selectedDocumentTypes[index] = value;
            console.log(value);
            this.selectedOptions.push(value); // this.arrayDocumentType = this.arrayDocumentType.filter(document => document !== value);
          }
        }]);

        return OtherInfoCorporateComponent;
      }();

      OtherInfoCorporateComponent.ɵfac = function OtherInfoCorporateComponent_Factory(t) {
        return new (t || OtherInfoCorporateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      OtherInfoCorporateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: OtherInfoCorporateComponent,
        selectors: [["app-other-info-corporate"]],
        decls: 80,
        vars: 9,
        consts: [["ngNativeValidate", "", 3, "formGroup"], [1, "full-width", 2, "background-color", "#F1F1F4"], [2, "padding", "1rem 0"], [2, "padding", "0 4.3rem"], [2, "border-radius", "0px"], ["fxLayout", "column", "fxLayoutAlign", "space-around start", 1, "full-width"], [1, "full-width", 2, "padding", "1rem 1rem"], [2, "font-size", "18px"], [2, "width", "70px", "border-bottom", "5px solid #456EFE", "left", "30px"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxLayoutGap", "20px"], ["fxFlex", "50"], [2, "border-top", "1px solid lightgray", "margin-left", "20px", "margin-right", "20px"], ["visible", "true"], ["fxFlex", "100", "fxLayoutGap", "20px", 1, "padding"], ["fxFlex", "50", 1, "form-group"], ["for", "forOrganizationType", 1, "hint"], ["floatLabel", "never"], ["id", "forOrganizationType", "formControlName", "organizationType", "required", ""], ["disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "placeholder"], [4, "ngIf"], ["for", "forTypeOfOwnership", 1, "hint"], ["id", "forTypeOfOwnership", "formControlName", "typeOfOwnership", "required", ""], ["for", "forkycStatus", 1, "hint"], ["id", "forkycStatus", "formControlName", "KycStatus"], ["for", "forkycReference", 1, "hint"], ["matInput", "", "id", "forkycReference", "formControlName", "kycReference"], ["formArrayName", "corporateAddress"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["formArrayName", "corporateDocs"], ["fxFlex", "100", "fxLayoutGap", "1px"], ["fxFlex", "1"], ["fxFlex", "20"], ["mat-button", "", "color", "primary", 3, "click"], [1, "button"], ["mat-button", "", 1, "Back", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "disabled", "click"], [3, "value"], [3, "formGroupName"], ["fxFlex", "100", "fxLayoutGap", "50px", 1, "padding"], ["fxFlex", "20", 1, "form-group"], ["for", "foraddressType", 1, "hint"], ["id", "foraddressType", "formControlName", "addressType", "required", ""], ["fxFlex", "40", 1, "form-group"], ["for", "foraddress1", 1, "hint"], ["matInput", "", "id", "foraddress1", "formControlName", "address1"], ["for", "foraddress2", 1, "hint"], ["matInput", "", "id", "foraddress2", "formControlName", "address2"], ["fxFlex", "25", 1, "form-group"], ["for", "forcountry", 1, "hint"], ["id", "forcountry", "formControlName", "country", "required", "", 3, "selectionChange"], ["for", "forstate", 1, "hint"], ["id", "forstate", "formControlName", "state", "required", "", 3, "selectionChange"], ["for", "forCity", 1, "hint"], ["id", "forCity", "formControlName", "city", "required", ""], ["for", "forzipcode", 1, "hint"], ["matInput", "", "id", "forzipcode", "formControlName", "zipcode"], [3, "ngClass"], ["visible", "true", 4, "ngIf"], ["fxFlex", "30", 1, "form-group"], ["for", "forDocumentType", 1, "hint"], ["id", "forDocumentType", "formControlName", "documentType", "required", "", 3, "valueChange"], [3, "disabled", "value", 4, "ngFor", "ngForOf"], ["for", "fordocumentName", 1, "hint"], ["matInput", "", "id", "fordocumentName", "formControlName", "documentName"], ["fxFlex", "30", "fxLayoutGap", "5px", 2, "display", "flex", "margin-top", "20px", "align-content", "center"], ["type", "file", "name", "fileData", "formControlName", "fileData", 1, "default-background", 2, "display", "none", "margin-top", "20px", 3, "change"], ["fileData", ""], ["mat-button", "", 2, "text-decoration", "underline", "color", "#456EFE", 3, "routerLink", "click"], ["mat-button", "", 3, "click"], [2, "color", "tomato"], [3, "disabled", "value"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Organization Type*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "select---");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, OtherInfoCorporateComponent_mat_option_25_Template, 2, 2, "mat-option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-placeholder", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Organization Type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, OtherInfoCorporateComponent_mat_error_28_Template, 3, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Type Of Ownership*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-select", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "select---");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, OtherInfoCorporateComponent_mat_option_36_Template, 2, 2, "mat-option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-placeholder", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Type Of Ownership ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, OtherInfoCorporateComponent_mat_error_39_Template, 3, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "fieldset", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "legend", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "KYC Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "KYC Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-form-field", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "select---");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, OtherInfoCorporateComponent_mat_option_53_Template, 2, 2, "mat-option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-placeholder", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "KYC Status ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "KYC Reference");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-form-field", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-placeholder", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "KYC Reference ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, OtherInfoCorporateComponent_div_64_Template, 77, 13, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, OtherInfoCorporateComponent_div_66_Template, 32, 6, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherInfoCorporateComponent_Template_button_click_71_listener() {
              return ctx.addDocument();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " ADD DOCUMENT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherInfoCorporateComponent_Template_button_click_76_listener() {
              return ctx.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherInfoCorporateComponent_Template_button_click_78_listener() {
              return ctx.onSubmit(ctx.otherInfoFormGroup.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Finish");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.otherInfoFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.organizationTypeList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.otherInfoFormGroup.get("organizationType").touched && !ctx.otherInfoFormGroup.get("organizationType").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.typeOfOwnershipList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.otherInfoFormGroup.get("typeOfOwnership").touched && !ctx.otherInfoFormGroup.get("typeOfOwnership").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.kycStatusList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.otherInfoFormGroup.get("corporateAddress")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.otherInfoFormGroup.get("corporateDocs")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.otherInfoFormGroup.get("organizationType").invalid || ctx.otherInfoFormGroup.get("typeOfOwnership").invalid || ctx.otherInfoFormGroup.get("corporateAddress").invalid || ctx.otherInfoFormGroup.get("corporateDocs").invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatPlaceholder"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__["DefaultClassDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: [".button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n  background-color: white;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  color: white;\n  background-color: #A0A0A0;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.fieldSetZeroIndex[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgray;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.fieldSetNextIndex[_ngcontent-%COMP%] {\n  border-top: 0px solid lightgray;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0 4px 4px gainsboro !important;\n  padding-left: 10px;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.padding[_ngcontent-%COMP%] {\n  padding-top: 3%;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: gray;\n}\n\nlegend[_ngcontent-%COMP%] {\n  width: auto;\n  margin-left: 20px;\n  color: gray;\n  font-size: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-family: 'Courier New', Courier, monospace;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgray;\n  border-bottom: 0px solid lightgray;\n  border-right: 0px solid lightgray;\n  border-left: 0px solid lightgray;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n}\n\n.hint[_ngcontent-%COMP%] {\n  padding-left: 0.8rem;\n  color: gray;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG90aGVyLWluZm8tY29ycG9yYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUVFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQXJCOztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQW1DO0VBQ25DLFlBQVk7RUFDWixtQkFBbUI7QUFBckI7O0FBRUE7RUFDRSwrQkFBK0I7RUFBQyxpQkFBaUI7RUFBRSxrQkFBa0I7QUFHdkU7O0FBQUE7RUFDRSwrQkFBK0I7RUFBQyxpQkFBaUI7RUFBRSxrQkFBa0I7QUFLdkU7O0FBRkU7RUFDRSx1QkFBdUI7RUFDdkIsMENBQTBDO0VBQzFDLGtCQUFrQjtBQUt0Qjs7QUFGRTtFQUNFLGFBQWE7QUFLakI7O0FBRkU7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBSzFCOztBQUZFO0VBQ0UsZUFBZTtBQUtuQjs7QUFGRTtFQUNFLFdBQVc7QUFLZjs7QUFGRTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDhDQUE4QztBQUtsRDs7QUFGRTtFQUNFLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMsaUNBQWlDO0VBQ2pDLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUtwQjs7QUFGRTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBRVgsZUFBZTtBQUluQiIsImZpbGUiOiJvdGhlci1pbmZvLWNvcnBvcmF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDExJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5CYWNrIHtcclxuXHJcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDtcclxuICBtYXJnaW4tbGVmdDogLTE1JTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBMEEwQTA7XHJcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcclxufVxyXG5cclxuLk5leHQge1xyXG4gIG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTMlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDEwNiwgMjQ1KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTVweDtcclxufVxyXG4uZmllbGRTZXRaZXJvSW5kZXh7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTttYXJnaW4tbGVmdDogMjBweDsgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZmllbGRTZXROZXh0SW5kZXh7XHJcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIGxpZ2h0Z3JheTttYXJnaW4tbGVmdDogMjBweDsgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCBnYWluc2Jvcm8gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAucGFkZGluZ3tcclxuICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9jdXNlZCAucGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgfVxyXG4gIFxyXG4gIGxlZ2VuZCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICB9XHJcbiAgXHJcbiAgZmllbGRzZXQge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDBweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItbGVmdDogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5oaW50IHtcclxuICAgIHBhZGRpbmctbGVmdDogMC44cmVtO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICAvLyBvcGFjaXR5OiA3MCU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfSJdfQ== */"]
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


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _create_director_create_director_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../create-director/create-director.component */
      "KaOm");

      function DirectorDetailsComponent_app_create_director_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-create-director", 22);
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1);
        }
      }

      var DirectorDetailsComponent = /*#__PURE__*/function () {
        function DirectorDetailsComponent(router, formBuilder, corporateService, cdr, apiService) {
          _classCallCheck(this, DirectorDetailsComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.corporateService = corporateService;
          this.cdr = cdr;
          this.apiService = apiService;
          this.items = [1];
          this.directorCount = 1;
          this.disabledBtn = true;
          this.directorFormGroup = this.formBuilder.group({
            "noOfDirector": [1]
          }); // this.corporateService.stepReady(this.directorFormGroup, 'two')
        }

        _createClass(DirectorDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this35 = this;

            console.log('items :: ', this.items.length);
            this.corporateService.setnoOfDirectors(this.directorFormGroup.get('noOfDirector').value);
            this.directorFormGroup.valueChanges.subscribe(function (data) {
              console.log('data : ', data);

              _this35.corporateService.setnoOfDirectors(data.noOfDirector);
            });
            this.corporateService.getfinishSave().subscribe(function (disSave) {
              // console.log('disSave :: ',disSave);
              var count = 0;

              if (disSave.length > 0) {
                disSave.forEach(function (element, key) {
                  // console.log('ele :: ',element, ' key :: ',key);
                  if (element == true) {
                    count++;
                  }
                });

                if (count == disSave.length) {
                  _this35.disabledBtn = false;
                } else {
                  _this35.disabledBtn = true;
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
          }
        }, {
          key: "noOfDirector",
          value: function noOfDirector(event) {
            var value = event.target.value;

            if (value != '' && value != null && value != undefined && value != ' ' && value != " ") {
              console.log(parseInt(value));
              this.number = parseInt(value);

              if (this.number != NaN && this.number == 1) {
                if (this.items.length > this.number) {
                  this.items.pop();
                }
              }

              if (this.number != NaN && this.number > 1) {
                if (this.number > this.items.length) {
                  for (var i = this.items.length + 1; i <= this.number; i++) {
                    this.items.push(i);
                  }
                }

                if (this.number < this.items.length) {
                  for (var index = this.number; index <= this.items.length; index++) {
                    this.items.pop();
                  }
                }

                this.cdr.detectChanges();
                this.cdr.markForCheck();
              }
            }
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {}
        }]);

        return DirectorDetailsComponent;
      }();

      DirectorDetailsComponent.ɵfac = function DirectorDetailsComponent_Factory(t) {
        return new (t || DirectorDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_5__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));
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
        decls: 29,
        vars: 3,
        consts: [["ngNativeValidate", "", 3, "formGroup"], [1, "full-width", 2, "background-color", "#F1F1F4"], [2, "padding", "1rem 0"], [2, "padding", "0 4.3rem"], [2, "border-radius", "0px"], ["fxLayout", "column", "fxLayoutAlign", "space-around start", 1, "full-width"], [1, "full-width", 2, "padding", "1rem 1rem"], [2, "font-size", "18px"], [2, "width", "70px", "border-bottom", "5px solid #456EFE", "left", "30px"], ["fxLayout", "row wrap", 1, "top"], ["fxFlex", "100"], ["fxFlex", "40"], [1, "hint"], ["floatLabel", "never", 1, "noOfDirectors"], ["formControlName", "noOfDirector", "matInput", "", "id", "forNoOfDirectors", "placeholder", "Enter no of directors", 3, "keypress", "keydown", "keyup"], ["visible", "true"], [1, "top"], [1, "custom-accordion"], [3, "item", 4, "ngFor", "ngForOf"], [1, "button"], ["mat-button", "", 1, "Back", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "disabled", "click"], [3, "item"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Number of Directors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DirectorDetailsComponent_Template_input_keypress_17_listener($event) {
              return ctx._keyPress($event);
            })("keydown", function DirectorDetailsComponent_Template_input_keydown_17_listener($event) {
              return ctx.noOFDirector($event);
            })("keyup", function DirectorDetailsComponent_Template_input_keyup_17_listener($event) {
              return ctx.noOfDirector($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "fieldset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "legend", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Details Of the Director");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-accordion", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DirectorDetailsComponent_app_create_director_23_Template, 1, 1, "app-create-director", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectorDetailsComponent_Template_button_click_25_listener() {
              return ctx.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectorDetailsComponent_Template_button_click_27_listener() {
              return ctx.onSubmit(ctx.directorFormGroup.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.directorFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabledBtn);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _create_director_create_director_component__WEBPACK_IMPORTED_MODULE_13__["CreateDirectorComponent"]],
        styles: [".head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 6%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\n.border[_ngcontent-%COMP%] {\n  margin-top: -10px;\n  margin-left: 150px;\n  height: 1px;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  margin-left: 13px;\n  font-size: 17px;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #456EFE;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  color: #456EFE;\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  color: gray;\n}\n\n.mat-button-wrapper.svg[_ngcontent-%COMP%] {\n  margin-left: 100px;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n\n.top[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.matborder[_ngcontent-%COMP%] {\n  border: solid 1px #E0E0E0;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0 4px 4px gainsboro !important;\n  padding-left: 10px;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: transparent;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nlegend[_ngcontent-%COMP%] {\n  width: auto;\n  margin-left: 20px;\n  color: gray;\n  font-size: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-family: 'Courier New', Courier, monospace;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgray;\n  border-bottom: 0px solid lightgray;\n  border-right: 0px solid lightgray;\n  border-left: 0px solid lightgray;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n  background-color: white;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  color: white;\n  background-color: #A0A0A0;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.noOfDirectors[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  padding-left: 0.8rem;\n  color: gray;\n  font-size: 13px;\n}\n\n.hint[_ngcontent-%COMP%] {\n  padding-left: 0.8rem;\n  color: gray;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGRpcmVjdG9yLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBSUE7RUFDRSxZQUFZO0FBRGQ7O0FBSUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQURyQjs7QUFJQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFHbEIsV0FBVztBQUhiOztBQU1BO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFIakI7O0FBTUE7RUFFRSx5QkFBeUI7QUFKM0I7O0FBT0E7RUFDRSxjQUNGO0FBTEE7O0FBT0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUpiOztBQU9BO0VBQ0Usa0JBQWtCO0FBSnBCOztBQU9BO0VBQ0UsaUJBQWlCO0FBSm5COztBQU9BO0VBQ0UsaUJBQWlCO0FBSm5COztBQU9BO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixpQkFDRjtBQUxBOztBQU9BO0VBQ0Usd0JBQXdCO0FBSjFCOztBQU9BO0VBQ0UseUJBQ0Y7QUFMQTs7QUFRQTtFQUNFLHVCQUF1QjtFQUN2QiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0FBTHBCOztBQVFBO0VBQ0UsYUFBYTtBQUxmOztBQU9BO0VBQ0Usa0JBQWtCO0FBSnBCOztBQU1BO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUh4Qjs7QUFNQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDhDQUE4QztBQUhoRDs7QUFNQTtFQUNFLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMsaUNBQWlDO0VBQ2pDLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUhsQjs7QUFNQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFIekI7O0FBT0E7RUFFRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUxyQjs7QUFRQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUFtQztFQUNuQyxZQUFZO0VBQ1osbUJBQW1CO0FBTHJCOztBQVNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsZUFBZTtBQU5qQjs7QUFTQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsZUFBZTtBQU5qQiIsImZpbGUiOiJkaXJlY3Rvci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAvLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmJhc2ljLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ubWFpbi1oZWFkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDYlO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuXHJcblxyXG4gIGhlaWdodDogMXB4O1xyXG59XHJcblxyXG5tYXQtbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCAjNDU2RUZFO1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgY29sb3I6ICM0NTZFRkVcclxufVxyXG5cclxuLmljb24ge1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uLXdyYXBwZXIuc3ZnIHtcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG59XHJcblxyXG4udG9wIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXRib3JkZXIge1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNFMEUwRTBcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLW5ldyBjaGFuZ2VzXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IGdhaW5zYm9ybyAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm1hdC1mb2N1c2VkIC5wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmxlZ2VuZCB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1sZWZ0OiAwcHggc29saWQgbGlnaHRncmF5O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1sZWZ0OiAxMSU7XHJcbiAgcGFkZGluZy1yaWdodDogMTQlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLkJhY2sge1xyXG5cclxuICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTUlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0EwQTBBMDtcclxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG59XHJcblxyXG4uTmV4dCB7XHJcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xMyU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgMTA2LCAyNDUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4ubm9PZkRpcmVjdG9ycyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uaGludCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59Il19 */"]
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
//# sourceMappingURL=views-others-onboarding-corporate-onboarding-corporate-module-es5.js.map