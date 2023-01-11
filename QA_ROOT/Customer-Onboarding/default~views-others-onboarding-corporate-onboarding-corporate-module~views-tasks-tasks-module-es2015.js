(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-others-onboarding-corporate-onboarding-corporate-module~views-tasks-tasks-module"],{

/***/ "1aja":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/others/onboarding-corporate/contact-information/contact-information.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ContactInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInformationComponent", function() { return ContactInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../corporate-onboarding.service */ "JVXa");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/extended */ "ura0");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
























function ContactInformationComponent_div_11_legend_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "legend", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Company Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactInformationComponent_div_11_legend_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "legend", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mailing Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactInformationComponent_div_11_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter Valid Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactInformationComponent_div_11_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter Valid Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactInformationComponent_div_11_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r20, " ");
} }
function ContactInformationComponent_div_11_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Country is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactInformationComponent_div_11_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r21.stateName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r21.stateName, " ");
} }
function ContactInformationComponent_div_11_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "State is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactInformationComponent_div_11_mat_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const City_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", City_r22.value1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", City_r22.value1, " ");
} }
function ContactInformationComponent_div_11_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "City is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactInformationComponent_div_11_mat_error_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter valid Zip code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactInformationComponent_div_11_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter valid ZipCode!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactInformationComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ContactInformationComponent_div_11_Template_mat_select_selectionChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const i_r7 = ctx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.getStateName($event.value, i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ContactInformationComponent_div_11_mat_option_25_Template, 2, 2, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ContactInformationComponent_div_11_mat_error_26_Template, 3, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ContactInformationComponent_div_11_Template_mat_select_selectionChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const i_r7 = ctx.index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.getCityName($event.value, i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ContactInformationComponent_div_11_mat_option_32_Template, 2, 2, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ContactInformationComponent_div_11_mat_error_33_Template, 3, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ContactInformationComponent_div_11_mat_option_39_Template, 2, 2, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ContactInformationComponent_div_11_mat_error_40_Template, 3, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Zip Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ContactInformationComponent_div_11_Template_input_keypress_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26._keyPress($event); })("keyup", function ContactInformationComponent_div_11_Template_input_keyup_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const i_r7 = ctx.index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.isAllSameDigit($event, i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ContactInformationComponent_div_11_mat_error_46_Template, 3, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ContactInformationComponent_div_11_mat_error_47_Template, 3, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.arrayState[i_r7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.get("state").touched && !item_r6.get("state").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.arrayCity[i_r7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.get("city").touched && !item_r6.get("city").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.get("zipCode").touched && !item_r6.get("zipCode").valid && !item_r6.controls["zipCode"].hasError("minLength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAllSameDigitVal && i_r7 == ctx_r0.zipIndex);
} }
function ContactInformationComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter correct Email id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactInformationComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter correct Email id!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactInformationComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "mobile Number is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactInformationComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 \u00A0 Please Enter Correct Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactInformationComponent_mat_error_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 \u00A0 Please Enter Correct Landline Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactInformationComponent {
    constructor(router, ls, formBuilder, corporateService, apiService, cdr, snack) {
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
        });
        // this.corporateService.stepReady(this.contactFormGroup, 'three')
        this.getCountryName("country");
    }
    ngOnInit() {
        console.log("testttt");
        this.corporateService.corporateAccountIdVal
            .subscribe(corporateId => {
            console.log('corporateId :: ', this.corporateId = corporateId);
            this.contactFormGroup.get('corporateId').setValue(corporateId);
        });
        if (this.corporateId) {
            this.getCoropratedetails(this.corporateId);
        }
        let mailAddress = this.contactFormGroup.get('isMailingAddressSame');
        if (mailAddress === 'YES') {
            this.contactFormGroup.get('corporateAddress').get('addressType').setValue('Company');
        }
        this.addAddress();
    }
    ngAfterViewInit() {
        if (this.ls.getItem('corporateId')) {
            this.getCoropratedetails(this.ls.getItem('corporateId'));
        }
    }
    get getAddressData() {
        return this.contactFormGroup.get('corporateAddress');
    }
    addAddress() {
        this.getAddressData.push(this.formBuilder.group({
            addressType: [''],
            address1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(".*[a-zA-Z].*")]],
            address2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(".*[a-zA-Z].*")]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        }));
    }
    _keyPress(event) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    radioSelection(event) {
        console.log('event :: ', event);
        if (event === 'NO') {
            console.log('inside if');
            this.addAddress();
            this.cdr.detectChanges();
            this.cdr.markForCheck();
        }
        else {
            if (this.getAddressData.length > 1) {
                this.getAddressData.controls.pop();
                this.cdr.detectChanges();
                this.cdr.markForCheck();
            }
        }
    }
    getCountryName(key) {
        this.apiService.getAllCountries().subscribe((data) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].authStatus === 'A') {
                    this.arrayCountry.push(data[i].countryName);
                }
            }
        });
    }
    getStateName(country, index) {
        this.arrayState[index] = [];
        this.arrayCity[index] = [];
        this.apiService.getAllCountries().subscribe((data) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].countryName == country) {
                    this.apiService.getStateByCountryId(data[i].id).subscribe((resp) => {
                        this.arrayState[index] = resp;
                    });
                    break;
                }
            }
        });
    }
    getCityName(state, index) {
        console.log(state);
        this.apiService.getDropDownValues1("city", state).subscribe((data) => {
            this.arrayCity[index] = data;
            console.log("-->", this.arrayCity);
        });
    }
    getCoropratedetails(id) {
        this.apiService.getCoropratedetails(id).subscribe((details => {
            console.log(details.customerInfo[0].userAddress[0]);
            this.getStateName(details.customerInfo[0].userAddress[0].country, 0);
            this.getCityName(details.customerInfo[0].userAddress[0].state, 0);
            if (details) {
                this.contactFormGroup.patchValue(details);
                this.contactFormGroup.get('corporateAddress').patchValue(details.customerInfo[0].corporateAddress);
                console.log(details.customerInfo[0]);
                console.log(details.customerInfo[0].corporateAddress);
            }
        }));
    }
    letterOnly(event) {
        var charCode = event.keyCode;
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)
            return true;
        else
            return false;
    }
    onSubmit(contactFormGroup) {
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
        this.corporateService.saveOrUpdateCorporateAccountInfo(contactFormGroup)
            .subscribe(data => {
            console.log('data :: ', data);
            if (data != null) {
                this.corporateService.sendCorporateAccountId(data.corporateId);
                this.snack.open('Contact Information Saved' + ' !', 'OK', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                });
            }
            this.next();
        });
    }
    previous() {
        this.corporateService.sendDisableMatTab({
            index: 1,
        });
    }
    next() {
        this.corporateService.sendDisableMatTab({
            index: 3,
        });
        this.corporateService.setFinishFlag({
            finishFlag: false,
        });
    }
    isAllSameDigit(event, index) {
        this.zipIndex = index;
        let count = 0, number = event.target.value;
        if (number != '') {
            for (var i = 0; i < number.length; i++) {
                if (0 == number[i]) {
                    count++;
                }
            }
            if (count == number.length) {
                this.isAllSameDigitVal = true;
            }
            else {
                this.isAllSameDigitVal = false;
            }
        }
        else {
            this.isAllSameDigitVal = false;
        }
    }
}
ContactInformationComponent.ɵfac = function ContactInformationComponent_Factory(t) { return new (t || ContactInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
ContactInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactInformationComponent, selectors: [["app-contact-information"]], decls: 52, vars: 9, consts: [["ngNativeValidate", "", 3, "formGroup"], [1, "full-width"], [2, "padding", "1rem 0", "background-color", "#F1F1F4"], [2, "padding", "0 4.3rem"], [2, "border-radius", "0px"], ["fxLayout", "column", "fxLayoutAlign", "space-around start", 1, "full-width"], [1, "full-width", 2, "padding", "1rem 1rem"], [2, "font-size", "18px", "margin-left", "10px"], [2, "width", "70px", "border-bottom", "7px solid #456EFE", "left", "40px", "border-radius", "30px"], ["formArrayName", "corporateAddress"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [2, "border-top", "1px solid lightgray", "margin-left", "20px", "margin-right", "20px"], ["visible", "true"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxLayoutGap", "20px"], ["fxFlex", "50", 1, "form-group"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "id", "forPrimaryEmail", "formControlName", "primaryEmail", "type", "email", "pattern", "^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$", "required", ""], [4, "ngIf"], ["matInput", "", "id", "forSecondaryEmail", "formControlName", "secondaryEmail", "type", "email", "pattern", "^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$"], ["matInput", "", "id", "forMobileNumber", "formControlName", "mobileNumber", "maxLength", "10", "minlength", "10", "onlyNumber", "", "required", "", 3, "keypress"], ["matInput", "", "id", "forLandLine", "formControlName", "landLine", "maxLength", "10", "minLength", "10", "onlyNumber", "", 3, "keypress"], [1, "button"], ["mat-button", "", 1, "Back", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "disabled", "ngClass", "click"], [3, "formGroupName"], ["visible", "true", 4, "ngIf"], ["matInput", "", "formControlName", "address1", "id", "forAddress1", "required", ""], ["matInput", "", "formControlName", "address2", "id", "forAddress2", "required", ""], ["fxFlex", "100", "fxLayoutGap", "10px"], ["fxFlex", "25", 1, "form-group"], ["id", "forcountry", "formControlName", "country", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "forstate", "formControlName", "state", 3, "selectionChange"], ["id", "forCity", "formControlName", "city"], ["minlength", "6", "maxlength", "10", "matInput", "", "id", "forZipCode", "onlyNumber", "", "formControlName", "zipCode", "required", "", 3, "keypress", "keyup"], [3, "value"]], template: function ContactInformationComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ContactInformationComponent_Template_input_keypress_38_listener($event) { return ctx._keyPress($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ContactInformationComponent_Template_input_keypress_45_listener($event) { return ctx._keyPress($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactInformationComponent_Template_button_click_48_listener() { return ctx.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactInformationComponent_Template_button_click_50_listener() { return ctx.onSubmit(ctx.contactFormGroup.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: [".button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -7%;\n  width: 150px;\n  color: #5D5D5D;\n  background-color: white;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -11%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.disableNext[_ngcontent-%COMP%] {\n  color: #3d18e4 !important;\n}\n\n.enableNext[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: grey;\n}\n\nlegend[_ngcontent-%COMP%] {\n  width: auto;\n  color: gray;\n  font-size: 20px;\n  padding-right: 20px;\n  font-family: 'Montserrat', Courier, monospace;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgray;\n  border-bottom: 0px solid lightgray;\n  border-right: 0px solid lightgray;\n  border-left: 0px solid lightgray;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n}\n\n.hint[_ngcontent-%COMP%] {\n  color: #0F0F0F;\n  opacity: 70%;\n  font: normal normal medium 16px/22px Manrope;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbnRhY3QtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NFO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBdkN0Qjs7QUF5Q0U7RUFFRSx5QkFBd0I7RUFDeEIsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7QUF2Q3ZCOztBQXlDRTtFQUNFLHlCQUF3QjtFQUN4QixrQkFBaUI7RUFDakIsWUFBVztFQUNYLHlCQUFpQztFQUNqQyxZQUFXO0VBQ1gsbUJBQW1CO0FBdEN2Qjs7QUF3Q0U7RUFDRSx5QkFBa0M7QUFyQ3RDOztBQXVDQTtFQUNJLHVCQUF1QjtBQXBDM0I7O0FBd0NFO0VBSUUsa0JBQWtCO0FBeEN0Qjs7QUE0Q0U7RUFDRSxhQUFhO0FBekNqQjs7QUE0Q0U7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBekMxQjs7QUE0Q0U7RUFFQyxXQUFVO0FBMUNiOztBQTZDRTtFQUNFLFdBQVc7RUFFWCxXQUFXO0VBRVgsZUFBZTtFQUVmLG1CQUFtQjtFQUNuQiw2Q0FBNkM7QUE3Q2pEOztBQWdERTtFQUNFLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMsaUNBQWlDO0VBQ2pDLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQTdDcEI7O0FBZ0RFO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWiw0Q0FBMkM7QUE3Qy9DIiwiZmlsZSI6ImNvbnRhY3QtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuaGVhZCB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBcclxuLy8gICAgIC8vICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4vLyAgIH1cclxuLy8gICAuYmFzaWMtY29udGFpbmVyIHtcclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICB9XHJcbi8vICAgLm1haW4taGVhZCB7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDYlO1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4vLyAgIH1cclxuLy8gICAuYm9yZGVye1xyXG4vLyAgICAgbWFyZ2luLXRvcDotMTBweDtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OjE1MHB4O1xyXG4gIFxyXG4gICBcclxuLy8gICAgIGhlaWdodDogMXB4O1xyXG4vLyB9XHJcbi8vIC50b3BcclxuLy8ge1xyXG4vLyAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbi8vIH1cclxuLy8gbWF0LWxhYmVsXHJcbi8vIHtcclxuLy8gICBtYXJnaW4tbGVmdDoxM3B4O1xyXG5cclxuLy8gfVxyXG4vLyBie1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4vLyB9XHJcbi8vIGlucHV0IHtib3JkZXI6MDtvdXRsaW5lOjA7XHJcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGR9XHJcbi8vICAgaW5wdXQ6Zm9jdXMge291dGxpbmU6bm9uZSFpbXBvcnRhbnQ7fVxyXG5cclxuLy8gICBtYXQtcmFkaW8tYnV0dG9uXHJcbi8vICAge1xyXG4vLyAgICAgcGFkZGluZzogMC4xcmVtXHJcbi8vICAgfVxyXG4gIC5idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDExJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE0JTtcclxuICB9XHJcbiAgLkJhY2t7XHJcblxyXG4gICAgbWFyZ2luOjEycHggMHB4IDEycHggMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6LTclO1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBjb2xvcjogIzVENUQ1RDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICB9XHJcbiAgLk5leHR7XHJcbiAgICBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6LTExJTtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LDEwNiwyNDUpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG4gIH1cclxuICAuZGlzYWJsZU5leHR7XHJcbiAgICBjb2xvcjogcmdiKDYxLCAyNCwgMjI4KSAhaW1wb3J0YW50O1xyXG4gIH0gXHJcbi5lbmFibGVOZXh0e1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgLy8gcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAgIC8vIGJveC1zaGFkb3c6IDAgMnB4IDJweCBnYWluc2Jvcm8gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIC8vIGxpbmUtaGVpZ2h0OiAyLjEyNTtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAubWF0LWZvY3VzZWQgLnBsYWNlaG9sZGVyIHtcclxuICAgLy8gY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICBjb2xvcjpncmV5O1xyXG4gIH1cclxuICBcclxuICBsZWdlbmQge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgLy8gb3BhY2l0eTogNzAlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gIH1cclxuICBcclxuICBmaWVsZHNldCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1yaWdodDogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1sZWZ0OiAwcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhpbnQge1xyXG4gICAgY29sb3I6ICMwRjBGMEY7XHJcbiAgICBvcGFjaXR5OiA3MCU7ICAgIFxyXG4gICAgZm9udDpub3JtYWwgbm9ybWFsIG1lZGl1bSAxNnB4LzIycHggTWFucm9wZTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactInformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-information',
                templateUrl: './contact-information.component.html',
                styleUrls: ['./contact-information.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "Gx8H":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/others/onboarding-corporate/proof-of-identity/proof-of-identity.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: MY_FORMATS, ProofOfIdentityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProofOfIdentityComponent", function() { return ProofOfIdentityComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../corporate-onboarding.service */ "JVXa");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material-moment-adapter */ "DejY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");






























function ProofOfIdentityComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Incorporation Number is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProofOfIdentityComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please Enter Valid Incorporation Number!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProofOfIdentityComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please Select Date of Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProofOfIdentityComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please Select Date of Expiry");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProofOfIdentityComponent_mat_radio_group_46_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-group", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-radio-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProofOfIdentityComponent_mat_radio_group_46_Template_mat_radio_button_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.radioSelection($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r8 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", x_r8)("checked", x_r8 == ctx_r6.proofOfIdentityFormGroup.value.isAnotherIdProofRequired);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", x_r8, " ");
} }
function ProofOfIdentityComponent_div_47_div_1_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idType_r19 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r15.isDocumentOptionDisabled(idType_r19))("value", idType_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", idType_r19, " ");
} }
function ProofOfIdentityComponent_div_47_div_1_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please Select Id Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProofOfIdentityComponent_div_47_div_1_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please Enter Id Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProofOfIdentityComponent_div_47_div_1_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Id Number should be a combination of minimum of 6 alphanumeric characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProofOfIdentityComponent_div_47_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function ProofOfIdentityComponent_div_47_div_1_Template_mat_select_valueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const i_r14 = ctx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r20.changeValue2($event, i_r14); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProofOfIdentityComponent_div_47_div_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const item_r13 = ctx.$implicit; const i_r14 = ctx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.deleteDocument(item_r13, i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.idTypeList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r13.get("idType").touched && !item_r13.get("idType").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(item_r13.get("idType").value == "Pan card") && item_r13.get("idNumber").touched && !item_r13.get("idNumber").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r13.get("idType").value == "Pan card" && item_r13.get("idNumber").touched && !item_r13.get("idNumber").valid);
} }
function ProofOfIdentityComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProofOfIdentityComponent_div_47_div_1_Template, 21, 5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProofOfIdentityComponent_div_47_Template_button_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.addDocument($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " ADD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.proofOfIdentityFormGroup.get("idProofList")["controls"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r7.selectedOptions.length == 3);
} }
const _c0 = function () { return ["YES", "NO"]; };
const MY_FORMATS = {
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
class ProofOfIdentityComponent {
    constructor(router, formBuilder, ls, corporateService, cdr, snack, apiService) {
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
        this.isDocumentOptionDisabled = (value) => {
            return this.selectedOptions.includes(value);
        };
        this.validDate.setDate(this.validDate.getDate());
        this.proofOfIdentityFormGroup = this.formBuilder.group({
            corporateId: [''],
            incorporationNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[a-zA-Z0-9]{0,35}$")]],
            dateOfIssue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            dateOfExpiry: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            isAnotherIdProofRequired: ['NO'],
            idProofList: this.formBuilder.array([])
        });
        // this.corporateService.stepReady(this.proofOfIdentityFormGroup, 'four')
    }
    ngOnInit() {
        this.corporateService.corporateAccountIdVal
            .subscribe(corporateId => {
            console.log('corporateId :: ', this.corporateId = corporateId);
            this.proofOfIdentityFormGroup.get('corporateId').setValue(corporateId);
            if (this.corporateId) {
                this.getCoropratedetails(this.corporateId);
            }
        });
        this.getIdType();
        // this.addDocument();
    }
    addIdProof() {
        return this.formBuilder.group({
            idType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            idNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    ngAfterViewInit() {
        if (this.ls.getItem('corporateId')) {
            this.getCoropratedetails(this.ls.getItem('corporateId'));
        }
    }
    radioSelection(event) {
        console.log('event :: ', event);
        const controls = this.proofOfIdentityFormGroup.get('idProofList');
        if (event === 'NO') {
            controls.clear();
            this.cdr.detectChanges();
            this.cdr.markForCheck();
        }
        else {
            controls.push(this.addIdProof());
            controls.controls[0].get('idType').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
            controls.controls[0].get('idNumber').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
            controls.updateValueAndValidity();
            this.cdr.detectChanges();
            this.cdr.markForCheck();
        }
    }
    getIdType() {
        this.apiService.getDropDownValues("document_name").subscribe((re) => {
            this.idTypeList = re;
        });
    }
    changeValue2(value, index) {
        const controls = this.proofOfIdentityFormGroup.get('idProofList');
        if (value == "Pan card") {
            controls.controls[index].get('idNumber').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){6,6}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
            controls.updateValueAndValidity();
        }
        else {
            controls.controls[index].get('idNumber').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
            controls.updateValueAndValidity();
        }
        if (this.selectedDocumentTypes[index]) {
            this.selectedOptions = this.selectedOptions.filter(val => val !== this.selectedDocumentTypes[index]);
        }
        this.selectedDocumentTypes[index] = value;
        this.selectedOptions.push(value);
    }
    onSubmit(directorFormGroup) {
        console.log("directorFormGroup BEFORE:: ", directorFormGroup);
        let obj = {};
        Object.keys(directorFormGroup).map(function (key, index) {
            if (key === 'dateOfIssue' || key === 'dateOfExpiry') {
                directorFormGroup[key] = moment__WEBPACK_IMPORTED_MODULE_5__(directorFormGroup[key]).format('YYYY-MM-DD');
                obj[key] = directorFormGroup[key];
            }
            else {
                if (key != 'isAnotherIdProofRequired' && key != 'idProofList') {
                    obj[key] = directorFormGroup[key];
                }
            }
        });
        console.log("directorFormGroup after:: ", obj);
        this.corporateService.saveOrUpdateCorporateAccountInfo(obj)
            .subscribe(data => {
            console.log('data :: ', data);
            if (data != null) {
                this.snack.open(`Proof of identity saved` + ' !', 'OK', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                });
                this.next();
                this.cdr.markForCheck();
            }
            else {
                this.snack.open('Not able to connect to server!', 'INTERNAL SERVER ERROR', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                });
            }
        }, error => {
            console.log('error resp :: ', error);
            this.snack.open(`${error.error.message} `, 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
            });
        });
    }
    getCoropratedetails(e) {
        this.apiService.getCoropratedetails(e).subscribe((details => {
            console.log(details);
            if (details) {
                this.proofOfIdentityFormGroup.patchValue(details);
            }
        }));
    }
    previous() {
        this.corporateService.sendDisableMatTab({
            index: 2,
        });
    }
    next() {
        this.corporateService.sendDisableMatTab({
            index: 4,
        });
        this.corporateService.setFinishFlag({
            finishFlag: false,
        });
    }
    deleteDocument(item, i) {
        console.log('delete record :: ', item, ' index :: ', i);
        this.getDocumentList.removeAt(i);
    }
    get getDocumentList() {
        return this.proofOfIdentityFormGroup.get('idProofList');
    }
    addDocument() {
        this.getDocumentList.push(this.formBuilder.group({
            idType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            idNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        }));
    }
}
ProofOfIdentityComponent.ɵfac = function ProofOfIdentityComponent_Factory(t) { return new (t || ProofOfIdentityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
ProofOfIdentityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProofOfIdentityComponent, selectors: [["app-proof-of-identity"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_LOCALE"]] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_FORMATS"], useValue: MY_FORMATS }
        ])], decls: 53, vars: 15, consts: [["ngNativeValidate", "", 3, "formGroup"], [1, "full-width"], [2, "padding", "1rem 0", "background-color", "#F1F1F4"], [2, "padding", "0 4.3rem"], [2, "border-radius", "0px"], ["fxLayout", "column", "fxLayoutAlign", "space-around start", 1, "full-width"], [1, "full-width", 2, "padding", "1rem 1rem"], [2, "font-size", "18px", "margin-left", "10px"], [2, "width", "70px", "border-bottom", "7px solid #456EFE", "left", "40px", "border-radius", "30px"], [2, "border-top", "1px solid lightgray", "margin-left", "20px", "margin-right", "20px"], ["visible", "true"], ["fxLayout", "row wrap", 1, "top"], ["fxFlex", "100", "fxLayoutGap", "30px"], ["fxFlex", "30", 1, "form-group", 2, "padding-left", "22px"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "incorporationNumber", "id", "forincorporationNumber", "maxLength", "35", "minLength", "0", "onlyNumber", "", "required", ""], [4, "ngIf"], ["fxFlex", "30", 1, "form-group"], ["matInput", "", "id", "forIddateOfIssue", "readonly", "", "formControlName", "dateOfIssue", "required", "", 3, "matDatepicker", "max"], ["matSuffix", "", 3, "for"], ["dateOfIssue", ""], ["matInput", "", "id", "forIddateOfExpiry", "readonly", "", "formControlName", "dateOfExpiry", "required", "", 3, "matDatepicker", "min"], ["dateOfExpiry", ""], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxLayoutGap", "20px"], ["fxFlex", "28"], [2, "padding-left", "10px"], ["fxFlex", "50"], ["formControlName", "isAnotherIdProofRequired", 4, "ngFor", "ngForOf"], ["formArrayName", "idProofList", 4, "ngIf"], [1, "button"], ["mat-button", "", 1, "Back", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "disabled", "click"], ["formControlName", "isAnotherIdProofRequired"], [3, "value", "checked", "change"], ["formArrayName", "idProofList"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "disabled", "click"], [3, "formGroupName"], ["formControlName", "idType", "id", "forIdType", 3, "valueChange"], [3, "disabled", "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "idNumber", "id", "forIdNumber", "maxLength", "12", "minLength", "6"], ["mat-button", "", 3, "click"], [2, "color", "tomato"], [3, "disabled", "value"]], template: function ProofOfIdentityComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProofOfIdentityComponent_Template_button_click_49_listener() { return ctx.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProofOfIdentityComponent_Template_button_click_51_listener() { return ctx.onSubmit(ctx.proofOfIdentityFormGroup.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], styles: [".head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 6%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\n.border[_ngcontent-%COMP%] {\n  margin-top: -10px;\n  margin-left: 150px;\n  height: 1px;\n}\n\n.top[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  margin-left: 13px;\n}\n\nb[_ngcontent-%COMP%] {\n  margin-left: 14px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\nmat-radio-button[_ngcontent-%COMP%] {\n  padding: 0.1rem;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -7%;\n  width: 150px;\n  color: #5D5D5D;\n  background-color: white;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -11%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.hint[_ngcontent-%COMP%] {\n  color: gray;\n  font: normal normal medium 16px/22px Manrope;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nlegend[_ngcontent-%COMP%] {\n  width: auto;\n  color: gray;\n  font-size: 20px;\n  padding-right: 20px;\n  font-family: 'Montserrat', Courier, monospace;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgray;\n  border-bottom: 0px solid lightgray;\n  border-right: 0px solid lightgray;\n  border-left: 0px solid lightgray;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n}\n\n  .mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon {\n  width: 1.7em !important;\n  margin-left: -10px !important;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb29mLW9mLWlkZW50aXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUlBO0VBQ0UsWUFBWTtBQURkOztBQUlBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFEckI7O0FBSUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBR2xCLFdBQVc7QUFIYjs7QUFNQTtFQUNFLGlCQUFpQjtBQUhuQjs7QUFNQTtFQUNFLGlCQUFpQjtBQUhuQjs7QUFPQTtFQUNFLGlCQUFpQjtBQUpuQjs7QUFPQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQ0Y7QUFMQTs7QUFPQTtFQUNFLHdCQUF3QjtBQUoxQjs7QUFPQTtFQUNFLGVBQ0Y7QUFMQTs7QUFPQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUpwQjs7QUFPQTtFQUVFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBTHJCOztBQVFBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQW1DO0VBQ25DLFlBQVk7RUFDWixtQkFBbUI7QUFMckI7O0FBUUE7RUFFRSxXQUFXO0VBQ1gsNENBQTJDO0FBTjdDOztBQVNBO0VBSUUsa0JBQWtCO0FBVHBCOztBQWFBO0VBQ0UsYUFBYTtBQVZmOztBQWFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQVZ4Qjs7QUFhQTtFQUNFLFdBQVc7RUFFWCxXQUFXO0VBRVgsZUFBZTtFQUVmLG1CQUFtQjtFQUNuQiw2Q0FBNkM7QUFiL0M7O0FBZ0JBO0VBQ0UsK0JBQStCO0VBQy9CLGtDQUFrQztFQUNsQyxpQ0FBaUM7RUFDakMsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBYmxCOztBQWdCQTtFQUNFLHVCQUF1QjtFQUN2Qiw2QkFBNkI7QUFiL0I7O0FBZ0JBO0VBQ0Usa0JBQWtCO0FBYnBCIiwiZmlsZSI6InByb29mLW9mLWlkZW50aXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAvLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmJhc2ljLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ubWFpbi1oZWFkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDYlO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuXHJcblxyXG4gIGhlaWdodDogMXB4O1xyXG59XHJcblxyXG4udG9wIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxubWF0LWxhYmVsIHtcclxuICBtYXJnaW4tbGVmdDogMTNweDtcclxuXHJcbn1cclxuXHJcbmIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMC4xcmVtXHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDExJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNCU7XHJcbn1cclxuXHJcbi5CYWNrIHtcclxuXHJcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDtcclxuICBtYXJnaW4tbGVmdDogLTclO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBjb2xvcjogIzVENUQ1RDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG59XHJcblxyXG4uTmV4dCB7XHJcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xMSU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgMTA2LCAyNDUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG59XHJcblxyXG4uaGludCB7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAxLjNyZW07XHJcbiAgY29sb3I6IGdyYXk7ICAgXHJcbiAgZm9udDpub3JtYWwgbm9ybWFsIG1lZGl1bSAxNnB4LzIycHggTWFucm9wZTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgLy8gYm94LXNoYWRvdzogMCAycHggMnB4IGdhaW5zYm9ybyAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAvLyBsaW5lLWhlaWdodDogMi4xMjU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5sZWdlbmQge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIC8vIG9wYWNpdHk6IDcwJSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1sZWZ0OiAwcHggc29saWQgbGlnaHRncmF5O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1kZWZhdWx0LWljb24ge1xyXG4gIHdpZHRoOiAxLjdlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWZvY3VzZWQgLnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProofOfIdentityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-proof-of-identity',
                templateUrl: './proof-of-identity.component.html',
                styleUrls: ['./proof-of-identity.component.scss'],
                providers: [
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_LOCALE"]] },
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_FORMATS"], useValue: MY_FORMATS }
                ],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"] }, { type: _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "HAfx":
/*!********************************************************************************************************************!*\
  !*** ./src/app/views/others/onboarding-corporate/onboarding-corporate-main/onboarding-corporate-main.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: OnboardingCorporateMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingCorporateMainComponent", function() { return OnboardingCorporateMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../corporate-onboarding.service */ "JVXa");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _onborading_primary_onborading_primary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../onborading-primary/onborading-primary.component */ "h31h");
/* harmony import */ var _director_details_director_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../director-details/director-details.component */ "tCF6");
/* harmony import */ var _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contact-information/contact-information.component */ "1aja");
/* harmony import */ var _proof_of_identity_proof_of_identity_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../proof-of-identity/proof-of-identity.component */ "Gx8H");
/* harmony import */ var _other_info_corporate_other_info_corporate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../other-info-corporate/other-info-corporate.component */ "qazE");













function OnboardingCorporateMainComponent_app_onborading_primary_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-onborading-primary");
} }
function OnboardingCorporateMainComponent_app_director_details_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-director-details");
} }
function OnboardingCorporateMainComponent_app_contact_information_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-contact-information");
} }
function OnboardingCorporateMainComponent_app_proof_of_identity_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-proof-of-identity");
} }
function OnboardingCorporateMainComponent_app_other_info_corporate_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-other-info-corporate");
} }
class OnboardingCorporateMainComponent {
    constructor(formService, ls) {
        this.formService = formService;
        this.ls = ls;
        this.tabIndex = 0;
        this.finishFlag = true;
    }
    ngOnInit() {
        this.formService.disableMatTabVal
            .subscribe(data => {
            console.log("disabled :: ", data);
        });
        this.formService.getDisableMatTab().subscribe(resp => {
            console.log("index", resp.index);
            this.tabIndex = resp.index;
            if (this.ls.getItem('corporateTabIndex')) {
                this.tabIndex = this.ls.getItem('corporateTabIndex');
            }
            else {
                this.tabIndex = 0;
            }
            this.formService.getFinishFlag().subscribe(resp => {
                console.log("finish flag", resp.finishFlag);
                this.assignValueFinish(resp.finishFlag);
            });
            if (resp.index === 0) {
                this.assignValuesForTab2(this.tabIndex);
            }
            if (resp.index === 1) {
                this.assignValuesForTab2(this.tabIndex);
            }
            if (resp.index === 2) {
                this.assignValuesForTab3(this.tabIndex);
            }
            if (resp.index === 3) {
                this.assignValuesForTab4(this.tabIndex);
            }
            if (resp.index === 4) {
                this.assignValuesForTab5(this.tabIndex);
            }
            // TODO WITH MATTAB DISABLE CUSTOM LATER
            // this.tabGroup._tabs[resp.index].disabled = true;
        });
    }
    assignValueFinish(finishFlag) {
        this.finishFlag = finishFlag;
    }
    assignValuesForTab1(tabIndex) {
        this.tab1 = false;
    }
    assignValuesForTab2(tabIndex) {
        this.tab2 = false;
    }
    assignValuesForTab3(tabIndex) {
        this.tab3 = false;
    }
    assignValuesForTab4(tabIndex) {
        this.tab4 = false;
    }
    assignValuesForTab5(tabIndex) {
        this.tab5 = false;
    }
}
OnboardingCorporateMainComponent.ɵfac = function OnboardingCorporateMainComponent_Factory(t) { return new (t || OnboardingCorporateMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_2__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"])); };
OnboardingCorporateMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnboardingCorporateMainComponent, selectors: [["app-onboarding-corporate-main"]], decls: 18, vars: 11, consts: [[1, "head"], [1, "main-head", 2, "color", "#BFBFC1"], [1, "main-head", 2, "padding-top", "0px"], [1, "basic-container"], ["mat-align-tabs", "start", 2, "padding-left", "1px", 3, "selectedIndex", "selectedIndexChange"], ["tabGroup", ""], ["label", "Primary Information", 3, "disabled"], [4, "ngIf"], ["label", "Director Details", 3, "disabled"], ["label", "Contact Information", 3, "disabled"], ["label", "Proof Of Identity", 3, "disabled"], ["label", "Other Information", 3, "disabled"]], template: function OnboardingCorporateMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home>New Customer Onboarding | Corporate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "New Customer Onboarding | Corporate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab-group", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function OnboardingCorporateMainComponent_Template_mat_tab_group_selectedIndexChange_6_listener($event) { return ctx.tabIndex = $event; });
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
    } if (rf & 2) {
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
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _onborading_primary_onborading_primary_component__WEBPACK_IMPORTED_MODULE_5__["OnboradingPrimaryComponent"], _director_details_director_details_component__WEBPACK_IMPORTED_MODULE_6__["DirectorDetailsComponent"], _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_7__["ContactInformationComponent"], _proof_of_identity_proof_of_identity_component__WEBPACK_IMPORTED_MODULE_8__["ProofOfIdentityComponent"], _other_info_corporate_other_info_corporate_component__WEBPACK_IMPORTED_MODULE_9__["OtherInfoCorporateComponent"]], styles: [".main-head[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  margin-bottom: 0px;\n  padding-left: 6%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\n.nav-head[_ngcontent-%COMP%] {\n  padding-left: 6%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n  .mat-tab-header {\n  padding-left: 5%;\n  padding-bottom: 0px;\n}\n\n  .egret-blue .mat-stroked-button.mat-button-disabled.mat-button-disabled {\n  color: rgba(0, 0, 0, 0.26) !important;\n}\n\n  .mat-tab-label-content {\n  padding: 0px !important;\n  font-size: 14px !important;\n}\n\n  .mat-tab-label-active {\n  color: #6988f6 !important;\n}\n\n  .mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination {\n  display: none !important;\n}\n\n  .egret-blue .mat-tab-label.mat-tab-disabled, .egret-blue[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG9uYm9hcmRpbmctY29ycG9yYXRlLW1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBZ0I7RUFFaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQXBCOztBQUVBO0VBRUMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFBcEI7O0FBRUE7RUFDQyxZQUFZO0FBQ2I7O0FBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3BCOztBQVVBO0VBRUMscUNBQWtDO0FBUm5DOztBQVdBO0VBRUMsdUJBQXVCO0VBQ3BCLDBCQUEwQjtBQVQ5Qjs7QUFZQTtFQUNJLHlCQUF5QjtBQVQ3Qjs7QUFZQTtFQUNDLHdCQUF3QjtBQVR6Qjs7QUFZQTtFQUNDLHVCQUF1QjtBQVR4QiIsImZpbGUiOiJvbmJvYXJkaW5nLWNvcnBvcmF0ZS1tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4taGVhZCB7XHJcblx0bWFyZ2luLXRvcDogMzVweDtcclxuXHQvLyBtYXJnaW4tbGVmdDogMjBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiA2JTtcclxuXHRwYWRkaW5nLXRvcDogMTZweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcbi5uYXYtaGVhZHtcclxuXHQvLyBtYXJnaW4tbGVmdDogMjBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDYlO1xyXG5cdHBhZGRpbmctdG9wOiAxNnB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuLmJhc2ljLWNvbnRhaW5lciB7XHJcblx0cGFkZGluZzogNXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDUlO1xyXG5cdHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTM2LCAyNDYpICFpbXBvcnRhbnQ7XHJcbi8vICAgICBoZWlnaHQ6IDRweDtcclxuLy8gICAgIHdpZHRoOiA4cGMgIWltcG9ydGFudDtcclxuLy8gXHR3aWR0aDogMTM1cHg7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMC41JTtcclxuLy8gICB9XHJcblxyXG46Om5nLWRlZXAgIC5lZ3JldC1ibHVlIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVke1xyXG5cdC8vIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiByZ2JhKDAsMCwwLDAuMjYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1jb250ZW50e1xyXG5cdC8vIHBhZGRpbmc6IDAgNXJlbSAhaW1wb3J0YW50O1xyXG5cdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gICAgY29sb3I6ICM2OTg4ZjYgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNvbnRyb2xzLWVuYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb257XHJcblx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmVncmV0LWJsdWUgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLmVncmV0LWJsdWUgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke1xyXG5cdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyA6Om5nIC1kZWVwIG1hdC10YWItbGFiZWwgLm1hdC10YWItbGFiZWwtY29udGVudHtcclxuLy8gXHRtYXJnaW46IC01MHB4O1xyXG4vLyB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnboardingCorporateMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-onboarding-corporate-main',
                templateUrl: './onboarding-corporate-main.component.html',
                styleUrls: ['./onboarding-corporate-main.component.scss']
            }]
    }], function () { return [{ type: _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_2__["CorporateOnboardingService"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"] }]; }, null); })();


/***/ }),

/***/ "JVXa":
/*!***********************************************************************************!*\
  !*** ./src/app/views/others/onboarding-corporate/corporate-onboarding.service.ts ***!
  \***********************************************************************************/
/*! exports provided: CorporateOnboardingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporateOnboardingService", function() { return CorporateOnboardingService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/finger-print-capture.service */ "rp8y");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/showMessage/show-message.service */ "x/2q");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");












class CorporateOnboardingService {
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
    constructor(_formBuilder, http, showMessageService, ls) {
        this._formBuilder = _formBuilder;
        this.http = http;
        this.showMessageService = showMessageService;
        this.ls = ls;
        //   this.stepOne.subscribe(form =>
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
    sendCorporateAccountId(message) {
        this.corporateAccountIdRef.next(message);
    }
    getCorporateAccountId() {
        return this.corporateAccountIdRef.asObservable();
    }
    sendDisableMatTab(index) {
        this.ls.setItem('corporateTabIndex', index.index);
        this.disableMatTab.next(index);
    }
    getDisableMatTab() {
        return this.disableMatTab.asObservable();
    }
    getFinishFlag() {
        return this.finishFlag.asObservable();
    }
    setFinishFlag(finishFlag) {
        this.finishFlag.next(finishFlag);
    }
    getfinishSave() {
        return this.finishSave.asObservable();
    }
    setfinishSave(finishSave) {
        this.finishSave.next(finishSave);
    }
    getnoOfDirectors() {
        return this.noOfDirectors.asObservable();
    }
    setnoOfDirectors(noOfDirectors) {
        this.noOfDirectors.next(noOfDirectors);
    }
    saveOrUpdateCorporateAccountInfo(data) {
        return this.http.post(`${app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"]}/corporateCustomer/upsertDetails`, data);
    }
}
CorporateOnboardingService.ɵfac = function CorporateOnboardingService_Factory(t) { return new (t || CorporateOnboardingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_5__["ShowMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreService"])); };
CorporateOnboardingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CorporateOnboardingService, factory: CorporateOnboardingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CorporateOnboardingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_5__["ShowMessageService"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreService"] }]; }, null); })();


/***/ }),

/***/ "KaOm":
/*!************************************************************************************************!*\
  !*** ./src/app/views/others/onboarding-corporate/create-director/create-director.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CreateDirectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDirectorComponent", function() { return CreateDirectorComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../shared/services/api.service */ "nm5K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../corporate-onboarding.service */ "JVXa");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/application-entry-stage.service */ "qMRc");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");


































const _c0 = ["input"];
function CreateDirectorComponent_mat_panel_title_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Create Director ", ctx_r1.item, " ");
} }
function CreateDirectorComponent_mat_panel_title_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0 Director \u00A0 ", ctx_r2.item, ". ");
} }
function CreateDirectorComponent_mat_form_field_27_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "CIF Number*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_mat_form_field_27_Template_input_keypress_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r35._keyPress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_form_field_28_mat_option_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](4, 3, option_r40 == null ? null : option_r40.firstName, 0, 1)), " ");
} }
function CreateDirectorComponent_mat_form_field_28_mat_option_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", option_r40 == null ? null : option_r40.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function CreateDirectorComponent_mat_form_field_28_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateDirectorComponent_mat_form_field_28_mat_option_7_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r46); const option_r40 = ctx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r45.selectCif(option_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CreateDirectorComponent_mat_form_field_28_mat_option_7_div_3_Template, 5, 7, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CreateDirectorComponent_mat_form_field_28_mat_option_7_div_4_Template, 2, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h5", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r40 == null ? null : option_r40.cifNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (option_r40 == null ? null : option_r40.profileImage) == "not_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (option_r40 == null ? null : option_r40.profileImage) != "not_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 7, option_r40 == null ? null : option_r40.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 9, option_r40 == null ? null : option_r40.middleName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 11, option_r40 == null ? null : option_r40.lastName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", option_r40 == null ? null : option_r40.cifNumber, "");
} }
function CreateDirectorComponent_mat_form_field_28_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "CIF Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function CreateDirectorComponent_mat_form_field_28_Template_input_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r47.ngAfterViewInit($event.target.value); })("ngModelChange", function CreateDirectorComponent_mat_form_field_28_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r49.updatedVal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-autocomplete", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CreateDirectorComponent_mat_form_field_28_mat_option_7_Template, 13, 13, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matAutocomplete", _r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.customerInfoList);
} }
function CreateDirectorComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "CIF Number is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prfix_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", prfix_r50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", prfix_r50, " ");
} }
function CreateDirectorComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Prefix!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "First Name is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_error_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Middle Name is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_error_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Last Name is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_option_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gender_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", gender_r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", gender_r51, " ");
} }
function CreateDirectorComponent_mat_error_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Gender!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_error_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u00A0 Prefix and Gender does not match! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_error_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Date Of Birth is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_error_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Place Of Birth is Required!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_option_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recidence_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", recidence_r52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", recidence_r52, " ");
} }
function CreateDirectorComponent_mat_error_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Residence Type!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_option_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const citizenship_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", citizenship_r53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", citizenship_r53, " ");
} }
function CreateDirectorComponent_mat_error_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Citizenship By!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_option_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const countryOfResidence_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", countryOfResidence_r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", countryOfResidence_r54, " ");
} }
function CreateDirectorComponent_mat_error_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Country Of Residence");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_error_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Unique Id Number is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_option_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idType_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", idType_r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", idType_r55, " ");
} }
function CreateDirectorComponent_mat_error_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select ID Type!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_div_151_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Valid Till!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_div_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-datepicker-toggle", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-datepicker", null, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-placeholder", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Valid Till ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CreateDirectorComponent_div_151_mat_error_8_Template, 3, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("min", ctx_r26.minDate)("matDatepicker", _r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r26.createDirectorFormGroup.get("expiryDate").touched && !ctx_r26.createDirectorFormGroup.get("expiryDate").valid);
} }
function CreateDirectorComponent_div_154_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Enter Valid Address Line 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_div_154_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Enter Valid Address Line 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_div_154_mat_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", country_r70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", country_r70, " ");
} }
function CreateDirectorComponent_div_154_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please select country");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_div_154_mat_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", state_r71.stateName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", state_r71.stateName, " ");
} }
function CreateDirectorComponent_div_154_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please select state");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_div_154_mat_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const City_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", City_r72.value1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", City_r72.value1, " ");
} }
function CreateDirectorComponent_div_154_mat_error_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please select city");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_div_154_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please enter Zip Code!(5-10 digits)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_div_154_mat_error_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please enter valid Zip Code!(5-10 digits)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_div_154_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "fieldset", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "legend", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Communication Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Address Line 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CreateDirectorComponent_div_154_mat_error_11_Template, 3, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Address Line 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CreateDirectorComponent_div_154_mat_error_18_Template, 3, 0, "mat-error", 3);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function CreateDirectorComponent_div_154_Template_mat_select_selectionChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r73.getStateName($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, CreateDirectorComponent_div_154_mat_option_27_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CreateDirectorComponent_div_154_mat_error_28_Template, 3, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function CreateDirectorComponent_div_154_Template_mat_select_selectionChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r74); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r75.getCityName($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "select---");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, CreateDirectorComponent_div_154_mat_option_37_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, CreateDirectorComponent_div_154_mat_error_38_Template, 3, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "select---");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, CreateDirectorComponent_div_154_mat_option_49_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, CreateDirectorComponent_div_154_mat_error_50_Template, 3, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Zip Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_div_154_Template_input_keypress_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r74); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r76._keyPress($event); })("keyup", function CreateDirectorComponent_div_154_Template_input_keyup_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r74); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r77.isAllSameDigit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, CreateDirectorComponent_div_154_mat_error_57_Template, 3, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, CreateDirectorComponent_div_154_mat_error_58_Template, 3, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r58 = ctx.$implicit;
    const i_r59 = ctx.index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r58.get("address1").touched && !item_r58.get("address1").valid || item_r58.get("address1").touched && item_r58.get("address1").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r58.get("address2").touched && !item_r58.get("address2").valid || item_r58.get("address2").touched && item_r58.get("address2").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r27.arrayCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r58.get("country").touched && !item_r58.get("country").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r27.arrayState);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r58.get("state").touched && !item_r58.get("state").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r27.arrayCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r58.get("city").touched && !item_r58.get("city").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r58.get("zipCode").touched && item_r58.get("zipCode").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r27.isAllSameDigitVal || item_r58.get("zipCode").hasError("pattern"));
} }
function CreateDirectorComponent_mat_error_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Enter Mobile Number(Maximum 10 digits)!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_error_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u00A0 \u00A0 Please Enter Correct Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_error_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Enter Landline Number!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_error_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u00A0 \u00A0 Please Enter Correct Landline Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_error_185_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Email Address is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_div_190_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Tax Id is Required with only numbers!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_div_190_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const countryOfIssue_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", countryOfIssue_r83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", countryOfIssue_r83, " ");
} }
function CreateDirectorComponent_div_190_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Please Select Country Of Issue!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_div_190_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "fieldset", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "legend", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Additional Tax ID Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Tax Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_div_190_Template_input_keypress_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r84.omit_special_char($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-placeholder", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Tax Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CreateDirectorComponent_div_190_mat_error_13_Template, 3, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Country of Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-select", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, CreateDirectorComponent_div_190_mat_option_20_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CreateDirectorComponent_div_190_mat_error_21_Template, 3, 0, "mat-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateDirectorComponent_div_190_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r85); const item_r78 = ctx.$implicit; const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r86.addDirector(ctx_r86.createDirectorFormGroup.value, item_r78); return ctx_r86.openClose("CLOSE"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " ADD DIRECTOR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r78 = ctx.$implicit;
    const i_r79 = ctx.index;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r78.get("taxId").touched && !item_r78.get("taxId").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r33.arrayCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r78.get("countryOfIssue").touched && !item_r78.get("countryOfIssue").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r33.createDirectorFormGroup.invalid || !ctx_r33.prefixFlag || ctx_r33.isAllNumberZeroFlag);
} }
function CreateDirectorComponent_mat_card_191_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateDirectorComponent_mat_card_191_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 4, ctx_r89.createDirectorFormGroup.value.firstName, 0, 1)), "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](5, 10, ctx_r89.createDirectorFormGroup.value.lastName, 0, 1)), " ");
} }
function CreateDirectorComponent_mat_card_191_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CreateDirectorComponent_mat_card_191_div_3_Template, 3, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CreateDirectorComponent_mat_card_191_ng_template_5_Template, 6, 14, "ng-template", null, 81, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-card-title", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-card-actions", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateDirectorComponent_mat_card_191_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r90.editDirector(ctx_r90.item); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateDirectorComponent_mat_card_191_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r91); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r92.deleteDirector(ctx_r92.item); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r34.profileImage == "not_available")("ngIfElse", _r88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 6, ctx_r34.createDirectorFormGroup.value.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 8, ctx_r34.createDirectorFormGroup.value.middleName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 10, ctx_r34.createDirectorFormGroup.value.lastName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", ctx_r34.cifNumber, "");
} }
class CreateDirectorComponent {
    constructor(router, formBuilder, appApiService, corporateService, cdr, snack, apiService, ls, datepipe) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.appApiService = appApiService;
        this.corporateService = corporateService;
        this.cdr = cdr;
        this.snack = snack;
        this.apiService = apiService;
        this.ls = ls;
        this.datepipe = datepipe;
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
            primaryCustomer: [false],
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
    ngOnInit() {
        console.log("testtt");
        this.toggleChanges(false, null);
        this.totalDir = this.ls.getItem('totalCust');
        console.log("totalDir", this.totalDir);
        this.corporateService.corporateAccountIdVal
            .subscribe(corporateId => {
            this.corporateId = corporateId;
            console.log('corporateId :: ', this.corporateId);
            this.createDirectorFormGroup.get('corporateId').setValue(corporateId);
            if (this.corporateId) {
                this.getCoropratedetails(this.corporateId);
            }
            else {
                if (this.ls.getItem('corporateId')) {
                    this.getCoropratedetails(this.ls.getItem('corporateId'));
                }
            }
        });
        this.corporateService.getnoOfDirectors().subscribe(noOfDir => {
            this.noOfDir = noOfDir;
            console.log('noOfDir:: ', noOfDir);
            if (this.noOfDir && this.item > 1) {
                this.disabled = false;
                this.isChecked = false;
                this.disabledToggle = false;
            }
        });
        this.prefixFlag = true;
        this.getDoc();
        this.addAddress();
        // this.addIdProof();
        this.addCustTaxInfo();
        this.getCountryName("country");
        this.getStateName("state");
        this.getCityName("city");
        this.getResidenceDetails('residence');
        this.createDirectorFormGroup.valueChanges
            .subscribe(data => {
            if (data.firstName != '') {
                this.profileImage = "available";
                this.createInititals(data.firstName);
            }
            if (data.lastName != '') {
                // console.log('data if lastName:: ', data);
                this.profileImage = "available";
                this.createInititals(data.lastName);
            }
        });
    }
    get getAddressData() {
        return this.createDirectorFormGroup.get('userAddress');
    }
    addAddress() {
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
    get getIdProofData() {
        return this.createDirectorFormGroup.get('custIdProofs');
    }
    addIdProof() {
        this.getIdProofData.push(this.formBuilder.group({
            idNumber: [''],
            idType: [''],
            expiryDate: ['']
        }));
    }
    get getCustTaxInfo() {
        return this.createDirectorFormGroup.get('custTaxInfo');
    }
    addCustTaxInfo() {
        this.getCustTaxInfo.push(this.formBuilder.group({
            taxId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[0-9]*$")]],
            countryOfIssue: ['']
        }));
    }
    // getCountryName(key: string) {
    //   console.log('country in contact info :: ', key);
    //   this.apiService.getDropDownValues(key).subscribe((data) => {
    //     this.arrayCountry = data;
    //     console.log("country in contact info -->", this.arrayCountry)
    //   });
    // }
    getCountryName(key) {
        console.log("ghg");
        this.apiService.getAllCountries().subscribe((data) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].authStatus === 'A') {
                    this.arrayCountry.push(data[i].countryName);
                }
            }
        });
    }
    onSelectionResidance(data) {
        console.log(data);
        this.apiService.countryFlaglists(data).subscribe((value) => {
            console.log(value.currencyCode);
            this.Currency = value.currencyCode.toLowerCase();
            console.log(this.Currency);
        });
    }
    onSelectionCitizionship(data) {
        console.log(data);
        this.apiService.countryFlaglists(data).subscribe((value) => {
            console.log(value.currencyCode);
            this.currencyCode = value.currencyCode.toLowerCase();
            console.log(this.currencyCode);
        });
    }
    getStateName(country) {
        this.apiService.getAllCountries().subscribe((data) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].countryName == country) {
                    this.apiService.getStateByCountryId(data[i].id).subscribe((resp) => {
                        this.arrayState = resp;
                    });
                    break;
                }
            }
        });
    }
    getCityName(state) {
        // console.log(state)
        this.apiService.getDropDownValues1("city", state).subscribe((data) => {
            this.arrayCity = data;
            // console.log("-->", this.arrayCity)
        });
    }
    getResidenceDetails(key) {
        this.apiService.getDropDownValues(key).subscribe((data) => {
            this.arrayResidence = data;
            // console.log('arrayResidence :: ', this.arrayResidence);
        });
    }
    _keyPress(event) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    letterOnly(event) {
        var charCode = event.keyCode;
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)
            return true;
        else
            return false;
    }
    openClose(status) {
        // console.log('status :: ', status);
        if (status === 'OPEN') {
            this.panelOpenState = true;
        }
        else {
            this.panelOpenState = false;
        }
    }
    getCoropratedetails(id) {
        console.log(id);
        console.log(this.noOfDir);
        console.log(this.item);
        // if(this.noOfDir)
        this.apiService.getCoropratedetails(id).subscribe((details => {
            console.log(details);
            this.createDirectorFormGroup.reset();
            if (this.noOfDir <= this.totalDir) {
                for (let i = 0; i < details.customerInfo.length; i++) {
                    this.fetchByCif(details.customerInfo[i].cifNumber);
                    if (details) {
                        console.log("jnkhk");
                        this.getStateName(details.customerInfo[i].userAddress[0].country);
                        this.getCityName(details.customerInfo[i].userAddress[0].state);
                        details.customerInfo[i].idNumber = details.customerInfo[i].custIdProofs[0].idNumber;
                        details.customerInfo[i].idType = details.customerInfo[i].custIdProofs[0].idType;
                        details.customerInfo[i].expiryDate = details.customerInfo[i].custIdProofs[0].expiryDate;
                        console.log(details.customerInfo[i], this.createDirectorFormGroup);
                        this.createDirectorFormGroup.patchValue(details.customerInfo[i]);
                    }
                }
            }
        }));
    }
    displayDrop(cif) {
        if (!cif) {
            this.autocomplete.closePanel();
        }
    }
    toggleChanges(event, formDirective) {
        this.corporateExistingCustomer = event;
        console.log(event);
        if (event === true) {
            this.createDirectorFormGroup.get('cifNumber').enable();
        }
        else if (event === false) {
            this.createDirectorFormGroup.get('cifNumber').disable();
            this.customerId = null;
        }
        // if (this.createDirectorFormGroup.get('existingCustomer').value == true) {
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
    editDirector(index) {
        console.log('edit index :: ', index);
        this.panelOpenState = !this.panelOpenState;
    }
    deleteDirector(index) {
        console.log('delete index :: ', index);
    }
    updatedVal(e) {
        if (e && e.length >= 3) {
            this.showAutocomplete = true;
        }
        else {
            this.showAutocomplete = false;
        }
    }
    ngAfterViewInit(resp) {
        console.log("inside ngAfterViewInit::");
        if (this.inputElement) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.inputElement.nativeElement, 'keyup')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pluck"])('target', 'value'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])((value) => value.length > 1))
                .subscribe((value) => {
                // this.fetchByCif(value);
            });
        }
        this.fetchByCif(resp);
    }
    selectCif(data) {
        this.getStateName(data.userAddress[0].country);
        this.getCityName(data.userAddress[0].state);
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
    fetchByCif(cifNumber) {
        console.log(cifNumber === null || cifNumber === void 0 ? void 0 : cifNumber.length);
        if ((cifNumber === null || cifNumber === void 0 ? void 0 : cifNumber.length) == 0) {
            this.autocomplete.closePanel();
        }
        this.createDirectorFormGroup.reset({
            cifNumber: this.createDirectorFormGroup.get('cifNumber').value,
            existingCustomer: this.createDirectorFormGroup.get('existingCustomer').value
        });
        this.showAutocomplete = false;
        // this.autocomplete.closePanel(); 
        if (cifNumber) {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.appApiService.fetchByCif(cifNumber).subscribe((res) => {
                    console.log("settimeout");
                    console.log("res::", res);
                    var kycValues = {
                        kycReference: res.customerInfoList[0].kycReference,
                        kycStatus: res.customerInfoList[0].custStatus
                    };
                    this.ls.setItem('KycValues', kycValues);
                    // this.autocomplete.openPanel();
                    if (res) {
                        this.showAutocomplete = true;
                        this.customerInfoList = res.customerInfoList;
                        // this.customerInfoList[0].userAddress[0].zipcode = res.customerInfoList[0].userAddress[0].zipCode;
                    }
                    if ((res === null || res === void 0 ? void 0 : res.customerInfoList.length) == 1) {
                        // this.customerInfoList[0].userAddress[0].zipcode = res.customerInfoList[0].userAddress[0].zipCode;
                    }
                    if (this.customerInfoList[0].citizenship != null) {
                        this.onSelectionCitizionship(this.customerInfoList[0].citizenship);
                    }
                    if (this.customerInfoList[0].countryOfResidence != null) {
                        this.onSelectionResidance(this.customerInfoList[0].countryOfResidence);
                    }
                    else if ((res === null || res === void 0 ? void 0 : res.customerInfoList.length) > 1) {
                        this.customerInfoList = res.customerInfoList;
                        // this.customerInfoList[0].userAddress[0].zipcode = res.customerInfoList[0].userAddress[0].zipCode;
                    }
                    else if ((res === null || res === void 0 ? void 0 : res.customerInfoList.length) == 0 || !res) {
                        this.snack.open('Kindly Enter Valid CifNumber to proceed', 'OK', {
                            duration: 4000,
                            verticalPosition: 'top',
                            horizontalPosition: 'right'
                        });
                        // this.customerInfoList = [];
                        // this.createDirectorFormGroup.get('cifNumber').patchValue('');
                    }
                }, (err) => {
                    console.error(err);
                });
            }, 1000);
        }
    }
    addDirector(createDirectorFormGroup, item) {
        this.ls.setItem('CorporateExistingCustomer', this.corporateExistingCustomer);
        createDirectorFormGroup.cifNumber = this.cifNumberForPayload;
        createDirectorFormGroup.customerId = this.customerIdForPayload;
        createDirectorFormGroup.corporateId = this.corporateId;
        //this.createDirectorFormGroup.get('primaryCustomer').setValue(true);
        //createDirectorFormGroup.primaryCustomer=this.primaryCustomer;
        console.log('item :: ', item);
        let coporateObjModel = {
            "corporateId": this.corporateId,
            // "companyName": null,
            // "category": null,
            // "country": null,
            // "state": null,
            // "city": null,
            "customerInfo": [
                createDirectorFormGroup
            ]
        };
        if (this.noOfDir > 0) {
            this.saveStatus = [];
            for (let i = 0; i < this.noOfDir; i++) {
                this.saveStatus.push(true);
            }
            // console.log('saveStatus :: ', this.saveStatus);
            this.corporateService.setfinishSave(this.saveStatus);
        }
        this.corporateService.saveOrUpdateCorporateAccountInfo(coporateObjModel)
            .subscribe(data => {
            console.log('data :: ', data);
            if (data != null) {
                console.log("chhecking");
                if (data.customerInfo != null && data.customerInfo[0].cifNumber != null) {
                    this.cifNumber = data.customerInfo[0].cifNumber;
                }
                this.snack.open(`Director ${this.item} profile created` + ' !', 'OK', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                });
                this.cdr.markForCheck();
                // if (this.noOfDir >= 1) {
                if (this.noOfDir <= 1) {
                    this.next();
                }
            }
            else {
                this.snack.open('Not able to connect to server!', 'INTERNAL SERVER ERROR', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                });
            }
        }, error => {
            console.log('error resp :: ', error);
            this.snack.open(`${error.error.message} `, 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
            });
        });
        this.isDirectorSaved = true;
    }
    getDoc() {
        this.apiService.getDropDownValues("gender").subscribe((responseDatas) => {
            this.genderList = responseDatas;
        });
        this.apiService.getDropDownValues("prefix").subscribe((re) => {
            this.prefixList = re;
        });
        this.apiService.getDropDownValues("document_name").subscribe((re) => {
            this.idTypeList = re;
        });
        this.apiService.getDropDownValues("address_type").subscribe((re) => {
            this.addressTypeList = re;
        });
    }
    next() {
        this.corporateService.sendDisableMatTab({
            index: 2,
        });
        this.corporateService.setFinishFlag({
            finishFlag: false,
        });
    }
    onChangeGender(event) {
        let prefix = this.createDirectorFormGroup.value.prefix;
        if ((prefix == "Mr" && event.value == "Male") || ((prefix == "Ms" || prefix == "Mrs") && event.value == "Female")) {
            this.prefixFlag = true;
        }
        else {
            this.prefixFlag = false;
            this.snack.open("Prefix and Gender does not match!", "OK", {
                duration: 4000,
                verticalPosition: "top",
                horizontalPosition: "right",
            });
        }
    }
    omit_special_char(event) {
        var k;
        k = event.charCode; //         k = event.keyCode;  (Both can be used)
        return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    }
    createInititals(name) {
        if (name == null || name == undefined) {
            return;
        }
        let names = name.split(' '), initials = names[0].substring(0, 1).toUpperCase();
        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        this.initials = initials;
        // console.log("name", name);
        // console.log("this.initials", this.initials);
    }
    isAllSameDigit(event) {
        let count = 0, number = event.target.value;
        if (number != '') {
            for (var i = 0; i < number.length; i++) {
                if (0 == number[i]) {
                    count++;
                }
            }
            if (count == number.length) {
                this.isAllSameDigitVal = true;
            }
            else {
                this.isAllSameDigitVal = false;
            }
        }
        else {
            this.isAllSameDigitVal = false;
        }
    }
    isAllNumberZero(event) {
        this.cdr.detectChanges();
        let count = 0, number = event.target.value;
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
            }
            else {
                this.isAllNumberZeroFlag = false;
            }
        }
        else {
            this.isAllNumberZeroFlag = false;
        }
    }
}
CreateDirectorComponent.ɵfac = function CreateDirectorComponent_Factory(t) { return new (t || CreateDirectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationEntryStageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_10__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"])); };
CreateDirectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateDirectorComponent, selectors: [["app-create-director"]], viewQuery: function CreateDirectorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.autocomplete = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
    } }, inputs: { item: "item" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]])], decls: 192, vars: 39, consts: [[3, "formGroup"], ["formDirective", "ngForm"], [1, "mat-elevation-z0", 3, "expanded", "opened", "closed"], [4, "ngIf"], [2, "border", "1px solid #456EFE"], ["fxLayout", "row wrap", 2, "margin-top", "20px", "margin-left", "20px"], ["fxFlex", "100"], ["fxFlex", "30"], ["fxFlex", "10"], ["formControlName", "existingCustomer", 3, "change"], ["formControlName", "primaryCustomer", 3, "disabled"], ["fxLayout", "row wrap"], ["fxFlex", "100", 2, "margin-left", "13px"], ["fxFlex", "80", 1, "form-group"], ["appearance", "outline", "class", "full-width", 4, "ngIf"], ["appearance", "outline", 1, "full-width"], ["formControlName", "prefix", "id", "forPrefix", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "placeholder"], ["matInput", "", "formControlName", "firstName", "id", "forFirstName", "required", "", 3, "keypress"], ["matInput", "", "formControlName", "middleName", "id", "forMiddleName", 3, "keypress"], ["matInput", "", "formControlName", "lastName", "id", "forLastName", "required", "", 3, "keypress"], ["formControlName", "gender", "id", "forGender", "required", "", 3, "selectionChange"], ["matInput", "", "formControlName", "dateOfBirth", "required", "", "readonly", "", 3, "matDatepicker", "max"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "placeOfBirth", "id", "forplaceOfBirth", "required", "", 3, "keypress.space"], ["formControlName", "residenceStatus", "id", "forResidenceStatus", "required", ""], ["formControlName", "citizenship", "id", "forcitizenship", "required", "", 3, "selectionChange"], ["formControlName", "countryOfResidence", "id", "forcountryOfResidence", "required", "", 3, "selectionChange"], ["disabled", ""], ["matInput", "", "formControlName", "idNumber", "id", "foridNumber", "maxlength", "15", "minLength", "11", "required", "", 3, "keypress"], ["fxFlex", "40", 1, "form-group"], ["formControlName", "idType", "id", "forIdType", "required", ""], ["fxFlex", "40", "class", "form-group", 4, "ngIf"], ["formArrayName", "userAddress"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [2, "border-top", "1px solid lightgray", "margin-left", "20px", "margin-right", "20px"], ["visible", "true"], ["matInput", "", "formControlName", "phoneNumber", "id", "forPhoneNumber", "maxLength", "10", "minLength", "10", "onlyNumber", "", "required", "", 3, "keypress", "keyup"], ["matInput", "", "formControlName", "landlineNumber", "maxLength", "10", "minLength", "10", "onlyNumber", "", "id", "forlandlineNumber", 3, "keypress"], ["matInput", "", "formControlName", "primaryEmailAdress", "type", "email", "pattern", "^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$", "id", "forprimaryEmailAdress", "required", ""], ["fxFlex", "80"], ["formArrayName", "custTaxInfo"], ["class", "showDirectorCard", 4, "ngIf"], [2, "color", "#24CCA7"], ["matInput", "", "formControlName", "cifNumber", "id", "forCifNumber", 3, "keypress"], ["matInput", "", "formControlName", "cifNumber", "id", "forCifNumber", "required", "", 3, "matAutocomplete", "keyup", "ngModelChange"], ["input", ""], [2, "background-color", "black"], ["auto", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["fxLayout", "row wrap", 2, "margin-top", "20px"], ["fxFlex", " 100"], ["mat-card-avatar", "", "class", "example-header-image-dropdown", "fxFlex", "10", 4, "ngIf"], ["mat-card-avatar", "", "fxFlex", "10", 4, "ngIf"], [2, "margin-bottom", "0px"], [2, "margin-top", "0px"], ["mat-card-avatar", "", "fxFlex", "10", 1, "example-header-image-dropdown"], ["align", "center", 2, "margin-top", "5px", "font-size", "large"], ["mat-card-avatar", "", "fxFlex", "10"], ["matListAvatar", "", "align", "center", "alt", "...", 2, "border-radius", "50%", "height", "85%", "margin-right", "20px", "width", "90%", "margin-bottom", "50px", 3, "src"], [3, "value"], ["matInput", "", "id", "forIdexpiryDate", "formControlName", "expiryDate", "readonly", "", "required", "", 3, "min", "matDatepicker"], ["expiryDate", ""], [3, "formGroupName"], ["matInput", "", "id", "foraddress1", "formControlName", "address1", "required", ""], ["matInput", "", "id", "foraddress2", "formControlName", "address2", "required", ""], ["id", "forcountry", "formControlName", "country", "required", "", 3, "selectionChange"], ["id", "forstate", "formControlName", "state", "required", "", 3, "selectionChange"], ["id", "forCity", "formControlName", "city", "required", ""], ["matInput", "", "formControlName", "zipCode", "id", "forZipCode", "onlyNumber", "", "maxlength", "10", "minLength", "5", "required", "", 3, "keypress", "keyup"], ["matInput", "", "onlyNumber", "", "formControlName", "taxId", "id", "forTaxId", "maxlength", "10", "required", "", 3, "keypress"], ["formControlName", "countryOfIssue", "id", "forCountryOfIssue", "required", ""], ["fxFlex", "20", 1, "form-group"], ["mat-raised-button", "", "color", "primary", 2, "background-color", "rgb(77, 114, 248)", 3, "disabled", "click"], ["fxFlex", "60"], [1, "showDirectorCard"], ["mat-card-avatar", "", 1, "example-header-image"], [4, "ngIf", "ngIfElse"], ["showAvatar", ""], [2, "margin-top", "10px"], [1, "editAndDelete"], ["mat-button", "", 3, "click"], ["align", "center", 2, "margin-top", "20px", "font-size", "50px"], ["align", "center", 2, "margin-top", "30px", "font-size", "30px", "color", "white"]], template: function CreateDirectorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("opened", function CreateDirectorComponent_Template_mat_expansion_panel_opened_3_listener() { return ctx.openClose("OPEN"); })("closed", function CreateDirectorComponent_Template_mat_expansion_panel_closed_3_listener() { return ctx.openClose("CLOSE"); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CreateDirectorComponent_Template_mat_slide_toggle_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r93); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return ctx.toggleChanges($event.checked, _r0); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_Template_input_keypress_47_listener($event) { return ctx.letterOnly($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_Template_input_keypress_54_listener($event) { return ctx.letterOnly($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_Template_input_keypress_63_listener($event) { return ctx.letterOnly($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function CreateDirectorComponent_Template_mat_select_selectionChange_70_listener($event) { return ctx.onChangeGender($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress.space", function CreateDirectorComponent_Template_input_keypress_space_95_listener($event) { return ctx.letterOnly($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "mat-select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function CreateDirectorComponent_Template_mat_select_selectionChange_114_listener($event) { return ctx.onSelectionCitizionship($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](115, CreateDirectorComponent_mat_option_115_Template, 2, 2, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](116, CreateDirectorComponent_mat_error_116_Template, 3, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](117, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Country Of Residence");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "mat-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function CreateDirectorComponent_Template_mat_select_selectionChange_126_listener($event) { return ctx.onSelectionResidance($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "--Select--");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](129, CreateDirectorComponent_mat_option_129_Template, 2, 2, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](130, CreateDirectorComponent_mat_error_130_Template, 3, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](131, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "Unique Id Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_Template_input_keypress_136_listener($event) { return ctx._keyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](137, CreateDirectorComponent_mat_error_137_Template, 3, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "ID Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "mat-select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "select---");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](148, CreateDirectorComponent_mat_option_148_Template, 2, 2, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](149, CreateDirectorComponent_mat_error_149_Template, 3, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](151, CreateDirectorComponent_div_151_Template, 9, 4, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](152, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](154, CreateDirectorComponent_div_154_Template, 60, 11, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "fieldset", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "legend", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "Contact Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_Template_input_keypress_164_listener($event) { return ctx._keyPress($event); })("keyup", function CreateDirectorComponent_Template_input_keyup_164_listener($event) { return ctx.isAllNumberZero($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "mat-placeholder", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "Mobile Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](167, CreateDirectorComponent_mat_error_167_Template, 3, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](168, CreateDirectorComponent_mat_error_168_Template, 3, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](169, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Landline Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function CreateDirectorComponent_Template_input_keypress_174_listener($event) { return ctx._keyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](175, CreateDirectorComponent_mat_error_175_Template, 3, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](176, CreateDirectorComponent_mat_error_176_Template, 3, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](184, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](185, CreateDirectorComponent_mat_error_185_Template, 3, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](187, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](188, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](190, CreateDirectorComponent_div_190_Template, 33, 5, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](191, CreateDirectorComponent_mat_card_191_Template, 21, 12, "mat-card", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](86);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.arrayCountry);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.createDirectorFormGroup.get("citizenship").touched && !ctx.createDirectorFormGroup.get("citizenship").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionPanelHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatPlaceholder"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepicker"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["PatternValidator"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionPanelTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardAvatar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListAvatarCssMatStyler"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardActions"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["SlicePipe"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0.76em;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.searchIcon[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  margin-top: 5px;\n}\n\n.search-results[_ngcontent-%COMP%] {\n  height: 10rem;\n  overflow: auto;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.hint[_ngcontent-%COMP%] {\n  padding-left: 0.8rem;\n  color: gray;\n  font-size: 10px;\n}\n\nlegend[_ngcontent-%COMP%] {\n  width: auto;\n  color: gray;\n  font-size: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-family: 'Montserrat', Courier, monospace;\n}\n\n.showDirectorCard[_ngcontent-%COMP%] {\n  width: 95%;\n  height: 130px;\n  margin: 0px 0px 0px 30px;\n  padding: 0%;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  margin: 10px 10px 10px 20px;\n  background-size: cover;\n  background-color: #24CCA7;\n  width: 100px;\n  height: 100px;\n}\n\n.editAndDelete[_ngcontent-%COMP%] {\n  margin-left: 54%;\n  margin-top: 8%;\n}\n\n.example-header-image-dropdown[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 8px;\n  background-size: cover;\n  background-color: #4A56E2;\n  width: 25px;\n  height: 32px;\n  color: white;\n}\n\n  .mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon {\n  width: 1.4em !important;\n}\n\n.hide-autocomplete[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.alignImage[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  float: right;\n}\n\n.currency-flag[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 24px;\n  height: 16px;\n  background-size: cover;\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle_fallback.png\");\n}\n\n.egret-blue[_ngcontent-%COMP%]   .mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: #24CCA7;\n}\n\n.mat-slide-toggle[_ngcontent-%COMP%]   .mat-accent[_ngcontent-%COMP%]   .ng-valid[_ngcontent-%COMP%]   .ng-dirty[_ngcontent-%COMP%]   .mat-checked[_ngcontent-%COMP%]   .ng-touched[_ngcontent-%COMP%] {\n  background-color: #24CCA7;\n}\n\n .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: whitesmoke;\n}\n\n  .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: #24CCA7;\n}\n\n.currency-flag-sm[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 10px;\n}\n\n.currency-flag-lg[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 24px;\n}\n\n.currency-flag-xl[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 32px;\n}\n\n.currency-flag.currency-flag-aed[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/aed.png\");\n}\n\n.currency-flag.currency-flag-afn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/afn.png\");\n}\n\n.currency-flag.currency-flag-all[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/all.png\");\n}\n\n.currency-flag.currency-flag-amd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/amd.png\");\n}\n\n.currency-flag.currency-flag-ang[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ang.png\");\n}\n\n.currency-flag.currency-flag-aoa[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/aoa.png\");\n}\n\n.currency-flag.currency-flag-ars[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ars.png\");\n}\n\n.currency-flag.currency-flag-aud[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/aud.png\");\n}\n\n.currency-flag.currency-flag-awg[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/awg.png\");\n}\n\n.currency-flag.currency-flag-azn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/azn.png\");\n}\n\n.currency-flag.currency-flag-bam[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bam.png\");\n}\n\n.currency-flag.currency-flag-bbd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bbd.png\");\n}\n\n.currency-flag.currency-flag-bdt[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bdt.png\");\n}\n\n.currency-flag.currency-flag-bgn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bgn.png\");\n}\n\n.currency-flag.currency-flag-bhd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bhd.png\");\n}\n\n.currency-flag.currency-flag-bif[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bif.png\");\n}\n\n.currency-flag.currency-flag-bmd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bmd.png\");\n}\n\n.currency-flag.currency-flag-bnd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bnd.png\");\n}\n\n.currency-flag.currency-flag-bob[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bob.png\");\n}\n\n.currency-flag.currency-flag-brl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/brl.png\");\n}\n\n.currency-flag.currency-flag-bsd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bsd.png\");\n}\n\n.currency-flag.currency-flag-btn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/btn.png\");\n}\n\n.currency-flag.currency-flag-bwp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bwp.png\");\n}\n\n.currency-flag.currency-flag-byn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/byn.png\");\n}\n\n.currency-flag.currency-flag-bzd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/bzd.png\");\n}\n\n.currency-flag.currency-flag-cad[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cad.png\");\n}\n\n.currency-flag.currency-flag-cdf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cdf.png\");\n}\n\n.currency-flag.currency-flag-chf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/chf.png\");\n}\n\n.currency-flag.currency-flag-clp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/clp.png\");\n}\n\n.currency-flag.currency-flag-cny[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cny.png\");\n}\n\n.currency-flag.currency-flag-cop[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cop.png\");\n}\n\n.currency-flag.currency-flag-crc[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/crc.png\");\n}\n\n.currency-flag.currency-flag-cup[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cup.png\");\n}\n\n.currency-flag.currency-flag-cve[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/cve.png\");\n}\n\n.currency-flag.currency-flag-czk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/czk.png\");\n}\n\n.currency-flag.currency-flag-djf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/djf.png\");\n}\n\n.currency-flag.currency-flag-dkk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/dkk.png\");\n}\n\n.currency-flag.currency-flag-dop[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/dop.png\");\n}\n\n.currency-flag.currency-flag-dzd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/dzd.png\");\n}\n\n.currency-flag.currency-flag-egp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/egp.png\");\n}\n\n.currency-flag.currency-flag-ern[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ern.png\");\n}\n\n.currency-flag.currency-flag-etb[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/etb.png\");\n}\n\n.currency-flag.currency-flag-eur[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/eur.png\");\n}\n\n.currency-flag.currency-flag-fjd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/fjd.png\");\n}\n\n.currency-flag.currency-flag-fkp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/fkp.png\");\n}\n\n.currency-flag.currency-flag-gbp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gbp.png\");\n}\n\n.currency-flag.currency-flag-gel[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gel.png\");\n}\n\n.currency-flag.currency-flag-ghs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ghs.png\");\n}\n\n.currency-flag.currency-flag-gip[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gip.png\");\n}\n\n.currency-flag.currency-flag-gmd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gmd.png\");\n}\n\n.currency-flag.currency-flag-gnf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gnf.png\");\n}\n\n.currency-flag.currency-flag-gtq[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gtq.png\");\n}\n\n.currency-flag.currency-flag-gyd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/gyd.png\");\n}\n\n.currency-flag.currency-flag-hkd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/hkd.png\");\n}\n\n.currency-flag.currency-flag-hnl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/hnl.png\");\n}\n\n.currency-flag.currency-flag-hrk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/hrk.png\");\n}\n\n.currency-flag.currency-flag-htg[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/htg.png\");\n}\n\n.currency-flag.currency-flag-huf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/huf.png\");\n}\n\n.currency-flag.currency-flag-idr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/idr.png\");\n}\n\n.currency-flag.currency-flag-ils[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ils.png\");\n}\n\n.currency-flag.currency-flag-inr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/inr.png\");\n}\n\n.currency-flag.currency-flag-iqd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/iqd.png\");\n}\n\n.currency-flag.currency-flag-irr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/irr.png\");\n}\n\n.currency-flag.currency-flag-isk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/isk.png\");\n}\n\n.currency-flag.currency-flag-jmd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/jmd.png\");\n}\n\n.currency-flag.currency-flag-jod[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/jod.png\");\n}\n\n.currency-flag.currency-flag-jpy[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/jpy.png\");\n}\n\n.currency-flag.currency-flag-kes[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kes.png\");\n}\n\n.currency-flag.currency-flag-kgs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kgs.png\");\n}\n\n.currency-flag.currency-flag-khr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/khr.png\");\n}\n\n.currency-flag.currency-flag-kmf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kmf.png\");\n}\n\n.currency-flag.currency-flag-kpw[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kpw.png\");\n}\n\n.currency-flag.currency-flag-krw[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/krw.png\");\n}\n\n.currency-flag.currency-flag-kwd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kwd.png\");\n}\n\n.currency-flag.currency-flag-kyd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kyd.png\");\n}\n\n.currency-flag.currency-flag-kzt[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/kzt.png\");\n}\n\n.currency-flag.currency-flag-lak[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lak.png\");\n}\n\n.currency-flag.currency-flag-lbp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lbp.png\");\n}\n\n.currency-flag.currency-flag-lkr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lkr.png\");\n}\n\n.currency-flag.currency-flag-lrd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lrd.png\");\n}\n\n.currency-flag.currency-flag-ltl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ltl.png\");\n}\n\n.currency-flag.currency-flag-lyd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/lyd.png\");\n}\n\n.currency-flag.currency-flag-mad[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mad.png\");\n}\n\n.currency-flag.currency-flag-mdl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mdl.png\");\n}\n\n.currency-flag.currency-flag-mga[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mga.png\");\n}\n\n.currency-flag.currency-flag-mkd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mkd.png\");\n}\n\n.currency-flag.currency-flag-mmk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mmk.png\");\n}\n\n.currency-flag.currency-flag-mnt[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mnt.png\");\n}\n\n.currency-flag.currency-flag-mop[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mop.png\");\n}\n\n.currency-flag.currency-flag-mro[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mro.png\");\n}\n\n.currency-flag.currency-flag-mur[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mur.png\");\n}\n\n.currency-flag.currency-flag-mvr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mvr.png\");\n}\n\n.currency-flag.currency-flag-mwk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mwk.png\");\n}\n\n.currency-flag.currency-flag-mxn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mxn.png\");\n}\n\n.currency-flag.currency-flag-myr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/myr.png\");\n}\n\n.currency-flag.currency-flag-mzn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/mzn.png\");\n}\n\n.currency-flag.currency-flag-nad[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/nad.png\");\n}\n\n.currency-flag.currency-flag-ngn[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ngn.png\");\n}\n\n.currency-flag.currency-flag-nio[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/nio.png\");\n}\n\n.currency-flag.currency-flag-nok[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/nok.png\");\n}\n\n.currency-flag.currency-flag-npr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/npr.png\");\n}\n\n.currency-flag.currency-flag-nzd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/nzd.png\");\n}\n\n.currency-flag.currency-flag-omr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/omr.png\");\n}\n\n.currency-flag.currency-flag-pen[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pen.png\");\n}\n\n.currency-flag.currency-flag-pgk[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pgk.png\");\n}\n\n.currency-flag.currency-flag-php[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/php.png\");\n}\n\n.currency-flag.currency-flag-pkr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pkr.png\");\n}\n\n.currency-flag.currency-flag-pln[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pln.png\");\n}\n\n.currency-flag.currency-flag-pyg[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/pyg.png\");\n}\n\n.currency-flag.currency-flag-qar[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/qar.png\");\n}\n\n.currency-flag.currency-flag-ron[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ron.png\");\n}\n\n.currency-flag.currency-flag-rsd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/rsd.png\");\n}\n\n.currency-flag.currency-flag-rub[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/rub.png\");\n}\n\n.currency-flag.currency-flag-rwf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/rwf.png\");\n}\n\n.currency-flag.currency-flag-sar[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sar.png\");\n}\n\n.currency-flag.currency-flag-sbd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sbd.png\");\n}\n\n.currency-flag.currency-flag-scr[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/scr.png\");\n}\n\n.currency-flag.currency-flag-sek[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sek.png\");\n}\n\n.currency-flag.currency-flag-sgd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sgd.png\");\n}\n\n.currency-flag.currency-flag-shp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/shp.png\");\n}\n\n.currency-flag.currency-flag-sll[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sll.png\");\n}\n\n.currency-flag.currency-flag-sos[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/sos.png\");\n}\n\n.currency-flag.currency-flag-srd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/srd.png\");\n}\n\n.currency-flag.currency-flag-std[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/std.png\");\n}\n\n.currency-flag.currency-flag-svc[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/svc.png\");\n}\n\n.currency-flag.currency-flag-syp[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/syp.png\");\n}\n\n.currency-flag.currency-flag-szl[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/szl.png\");\n}\n\n.currency-flag.currency-flag-thb[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/thb.png\");\n}\n\n.currency-flag.currency-flag-tjs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/tjs.png\");\n}\n\n.currency-flag.currency-flag-tnd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/tnd.png\");\n}\n\n.currency-flag.currency-flag-top[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/top.png\");\n}\n\n.currency-flag.currency-flag-try[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/try.png\");\n}\n\n.currency-flag.currency-flag-ttd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ttd.png\");\n}\n\n.currency-flag.currency-flag-twd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/twd.png\");\n}\n\n.currency-flag.currency-flag-tzs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/tzs.png\");\n}\n\n.currency-flag.currency-flag-uah[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/uah.png\");\n}\n\n.currency-flag.currency-flag-ugx[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/ugx.png\");\n}\n\n.currency-flag.currency-flag-usd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/usd.png\");\n}\n\n.currency-flag.currency-flag-uyu[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/uyu.png\");\n}\n\n.currency-flag.currency-flag-uzs[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/uzs.png\");\n}\n\n.currency-flag.currency-flag-vef[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/vef.png\");\n}\n\n.currency-flag.currency-flag-vnd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/vnd.png\");\n}\n\n.currency-flag.currency-flag-vuv[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/vuv.png\");\n}\n\n.currency-flag.currency-flag-wst[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/wst.png\");\n}\n\n.currency-flag.currency-flag-xaf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/xaf.png\");\n}\n\n.currency-flag.currency-flag-xcd[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/xcd.png\");\n}\n\n.currency-flag.currency-flag-xof[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/xof.png\");\n}\n\n.currency-flag.currency-flag-xpf[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/xpf.png\");\n}\n\n.currency-flag.currency-flag-yer[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/yer.png\");\n}\n\n.currency-flag.currency-flag-zar[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/zar.png\");\n}\n\n.currency-flag.currency-flag-zmw[_ngcontent-%COMP%] {\n  background-image: url(\"https://wise.com/public-resources/assets/flags/rectangle/zmw.png\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNyZWF0ZS1kaXJlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlDLGtCQUFrQjtBQUZuQjs7QUFLQTtFQUNJLHNCQUFzQjtBQUYxQjs7QUFJQTtFQUNDLGFBQWE7QUFEZDs7QUFHQTtFQUNDLGtCQUFrQjtFQUNsQixlQUFlO0FBQWhCOztBQUVBO0VBQ0ksYUFBYTtFQUNiLGNBQWM7QUFDbEI7O0FBRUE7RUFDQyxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBO0VBQ0MsV0FBVztBQUNaOztBQUVBO0VBQ0Msb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxlQUFlO0FBQ2hCOztBQUVBO0VBQ0MsV0FBVztFQUVYLFdBQVc7RUFFWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw2Q0FBNkM7QUFEOUM7O0FBSUE7RUFDQyxVQUFVO0VBQ1YsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixXQUFXO0FBRFo7O0FBSUE7RUFDQywyQkFBMkI7RUFFM0Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtBQUZkOztBQUtBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFGaEI7O0FBS0E7RUFDQyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBRWpCLHNCQUFzQjtFQUVyQix5QkFBeUI7RUFDMUIsV0FBVztFQUNYLFlBQVk7RUFDWCxZQUFZO0FBSmQ7O0FBTUE7RUFDRSx1QkFBdUI7QUFIekI7O0FBTUE7RUFBcUIsYUFBYTtBQUZsQzs7QUFJQTtFQUNDLGdCQUFnQjtFQUNoQixZQUFZO0FBRGI7O0FBSUU7RUFDRCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsOEZBQTZGO0FBRDlGOztBQUlFO0VBQ0UseUJBQTBCO0FBRDlCOztBQUdFO0VBQ0UseUJBQTBCO0FBQTlCOztBQUlFO0VBQ0UsNEJBQTRCO0FBRGhDOztBQUdBO0VBQ0kseUJBQXlCO0FBQTdCOztBQUdFO0VBQ0QsV0FBVztFQUNYLFlBQVk7QUFBYjs7QUFHRTtFQUNELFdBQVc7RUFDWCxZQUFZO0FBQWI7O0FBR0U7RUFDRCxXQUFXO0VBQ1gsWUFBWTtBQUFiOztBQUtFO0VBQWlDLHlGQUF3RjtBQUQzSDs7QUFFRTtFQUFpQyx5RkFBd0Y7QUFFM0g7O0FBREU7RUFBaUMseUZBQXdGO0FBSzNIOztBQUpFO0VBQWlDLHlGQUF3RjtBQVEzSDs7QUFQRTtFQUFpQyx5RkFBd0Y7QUFXM0g7O0FBVkU7RUFBaUMseUZBQXdGO0FBYzNIOztBQWJFO0VBQWlDLHlGQUF3RjtBQWlCM0g7O0FBaEJFO0VBQWlDLHlGQUF3RjtBQW9CM0g7O0FBbkJFO0VBQWlDLHlGQUF3RjtBQXVCM0g7O0FBdEJFO0VBQWlDLHlGQUF3RjtBQTBCM0g7O0FBekJFO0VBQWlDLHlGQUF3RjtBQTZCM0g7O0FBNUJFO0VBQWlDLHlGQUF3RjtBQWdDM0g7O0FBL0JFO0VBQWlDLHlGQUF3RjtBQW1DM0g7O0FBbENFO0VBQWlDLHlGQUF3RjtBQXNDM0g7O0FBckNFO0VBQWlDLHlGQUF3RjtBQXlDM0g7O0FBeENFO0VBQWlDLHlGQUF3RjtBQTRDM0g7O0FBM0NFO0VBQWlDLHlGQUF3RjtBQStDM0g7O0FBOUNFO0VBQWlDLHlGQUF3RjtBQWtEM0g7O0FBakRFO0VBQWlDLHlGQUF3RjtBQXFEM0g7O0FBcERFO0VBQWlDLHlGQUF3RjtBQXdEM0g7O0FBdkRFO0VBQWlDLHlGQUF3RjtBQTJEM0g7O0FBMURFO0VBQWlDLHlGQUF3RjtBQThEM0g7O0FBN0RFO0VBQWlDLHlGQUF3RjtBQWlFM0g7O0FBaEVFO0VBQWlDLHlGQUF3RjtBQW9FM0g7O0FBbkVFO0VBQWlDLHlGQUF3RjtBQXVFM0g7O0FBdEVFO0VBQWlDLHlGQUF3RjtBQTBFM0g7O0FBekVFO0VBQWlDLHlGQUF3RjtBQTZFM0g7O0FBNUVFO0VBQWlDLHlGQUF3RjtBQWdGM0g7O0FBL0VFO0VBQWlDLHlGQUF3RjtBQW1GM0g7O0FBbEZFO0VBQWlDLHlGQUF3RjtBQXNGM0g7O0FBckZFO0VBQWlDLHlGQUF3RjtBQXlGM0g7O0FBeEZFO0VBQWlDLHlGQUF3RjtBQTRGM0g7O0FBM0ZFO0VBQWlDLHlGQUF3RjtBQStGM0g7O0FBOUZFO0VBQWlDLHlGQUF3RjtBQWtHM0g7O0FBakdFO0VBQWlDLHlGQUF3RjtBQXFHM0g7O0FBcEdFO0VBQWlDLHlGQUF3RjtBQXdHM0g7O0FBdkdFO0VBQWlDLHlGQUF3RjtBQTJHM0g7O0FBMUdFO0VBQWlDLHlGQUF3RjtBQThHM0g7O0FBN0dFO0VBQWlDLHlGQUF3RjtBQWlIM0g7O0FBaEhFO0VBQWlDLHlGQUF3RjtBQW9IM0g7O0FBbkhFO0VBQWlDLHlGQUF3RjtBQXVIM0g7O0FBdEhFO0VBQWlDLHlGQUF3RjtBQTBIM0g7O0FBekhFO0VBQWlDLHlGQUF3RjtBQTZIM0g7O0FBNUhFO0VBQWlDLHlGQUF3RjtBQWdJM0g7O0FBL0hFO0VBQWlDLHlGQUF3RjtBQW1JM0g7O0FBbElFO0VBQWlDLHlGQUF3RjtBQXNJM0g7O0FBcklFO0VBQWlDLHlGQUF3RjtBQXlJM0g7O0FBeElFO0VBQWlDLHlGQUF3RjtBQTRJM0g7O0FBM0lFO0VBQWlDLHlGQUF3RjtBQStJM0g7O0FBOUlFO0VBQWlDLHlGQUF3RjtBQWtKM0g7O0FBakpFO0VBQWlDLHlGQUF3RjtBQXFKM0g7O0FBcEpFO0VBQWlDLHlGQUF3RjtBQXdKM0g7O0FBdkpFO0VBQWlDLHlGQUF3RjtBQTJKM0g7O0FBMUpFO0VBQWlDLHlGQUF3RjtBQThKM0g7O0FBN0pFO0VBQWlDLHlGQUF3RjtBQWlLM0g7O0FBaEtFO0VBQWlDLHlGQUF3RjtBQW9LM0g7O0FBbktFO0VBQWlDLHlGQUF3RjtBQXVLM0g7O0FBdEtFO0VBQWlDLHlGQUF3RjtBQTBLM0g7O0FBektFO0VBQWlDLHlGQUF3RjtBQTZLM0g7O0FBNUtFO0VBQWlDLHlGQUF3RjtBQWdMM0g7O0FBL0tFO0VBQWlDLHlGQUF3RjtBQW1MM0g7O0FBbExFO0VBQWlDLHlGQUF3RjtBQXNMM0g7O0FBckxFO0VBQWlDLHlGQUF3RjtBQXlMM0g7O0FBeExFO0VBQWlDLHlGQUF3RjtBQTRMM0g7O0FBM0xFO0VBQWlDLHlGQUF3RjtBQStMM0g7O0FBOUxFO0VBQWlDLHlGQUF3RjtBQWtNM0g7O0FBak1FO0VBQWlDLHlGQUF3RjtBQXFNM0g7O0FBcE1FO0VBQWlDLHlGQUF3RjtBQXdNM0g7O0FBdk1FO0VBQWlDLHlGQUF3RjtBQTJNM0g7O0FBMU1FO0VBQWlDLHlGQUF3RjtBQThNM0g7O0FBN01FO0VBQWlDLHlGQUF3RjtBQWlOM0g7O0FBaE5FO0VBQWlDLHlGQUF3RjtBQW9OM0g7O0FBbk5FO0VBQWlDLHlGQUF3RjtBQXVOM0g7O0FBdE5FO0VBQWlDLHlGQUF3RjtBQTBOM0g7O0FBek5FO0VBQWlDLHlGQUF3RjtBQTZOM0g7O0FBNU5FO0VBQWlDLHlGQUF3RjtBQWdPM0g7O0FBL05FO0VBQWlDLHlGQUF3RjtBQW1PM0g7O0FBbE9FO0VBQWlDLHlGQUF3RjtBQXNPM0g7O0FBck9FO0VBQWlDLHlGQUF3RjtBQXlPM0g7O0FBeE9FO0VBQWlDLHlGQUF3RjtBQTRPM0g7O0FBM09FO0VBQWlDLHlGQUF3RjtBQStPM0g7O0FBOU9FO0VBQWlDLHlGQUF3RjtBQWtQM0g7O0FBalBFO0VBQWlDLHlGQUF3RjtBQXFQM0g7O0FBcFBFO0VBQWlDLHlGQUF3RjtBQXdQM0g7O0FBdlBFO0VBQWlDLHlGQUF3RjtBQTJQM0g7O0FBMVBFO0VBQWlDLHlGQUF3RjtBQThQM0g7O0FBN1BFO0VBQWlDLHlGQUF3RjtBQWlRM0g7O0FBaFFFO0VBQWlDLHlGQUF3RjtBQW9RM0g7O0FBblFFO0VBQWlDLHlGQUF3RjtBQXVRM0g7O0FBdFFFO0VBQWlDLHlGQUF3RjtBQTBRM0g7O0FBelFFO0VBQWlDLHlGQUF3RjtBQTZRM0g7O0FBNVFFO0VBQWlDLHlGQUF3RjtBQWdSM0g7O0FBL1FFO0VBQWlDLHlGQUF3RjtBQW1SM0g7O0FBbFJFO0VBQWlDLHlGQUF3RjtBQXNSM0g7O0FBclJFO0VBQWlDLHlGQUF3RjtBQXlSM0g7O0FBeFJFO0VBQWlDLHlGQUF3RjtBQTRSM0g7O0FBM1JFO0VBQWlDLHlGQUF3RjtBQStSM0g7O0FBOVJFO0VBQWlDLHlGQUF3RjtBQWtTM0g7O0FBalNFO0VBQWlDLHlGQUF3RjtBQXFTM0g7O0FBcFNFO0VBQWlDLHlGQUF3RjtBQXdTM0g7O0FBdlNFO0VBQWlDLHlGQUF3RjtBQTJTM0g7O0FBMVNFO0VBQWlDLHlGQUF3RjtBQThTM0g7O0FBN1NFO0VBQWlDLHlGQUF3RjtBQWlUM0g7O0FBaFRFO0VBQWlDLHlGQUF3RjtBQW9UM0g7O0FBblRFO0VBQWlDLHlGQUF3RjtBQXVUM0g7O0FBdFRFO0VBQWlDLHlGQUF3RjtBQTBUM0g7O0FBelRFO0VBQWlDLHlGQUF3RjtBQTZUM0g7O0FBNVRFO0VBQWlDLHlGQUF3RjtBQWdVM0g7O0FBL1RFO0VBQWlDLHlGQUF3RjtBQW1VM0g7O0FBbFVFO0VBQWlDLHlGQUF3RjtBQXNVM0g7O0FBclVFO0VBQWlDLHlGQUF3RjtBQXlVM0g7O0FBeFVFO0VBQWlDLHlGQUF3RjtBQTRVM0g7O0FBM1VFO0VBQWlDLHlGQUF3RjtBQStVM0g7O0FBOVVFO0VBQWlDLHlGQUF3RjtBQWtWM0g7O0FBalZFO0VBQWlDLHlGQUF3RjtBQXFWM0g7O0FBcFZFO0VBQWlDLHlGQUF3RjtBQXdWM0g7O0FBdlZFO0VBQWlDLHlGQUF3RjtBQTJWM0g7O0FBMVZFO0VBQWlDLHlGQUF3RjtBQThWM0g7O0FBN1ZFO0VBQWlDLHlGQUF3RjtBQWlXM0g7O0FBaFdFO0VBQWlDLHlGQUF3RjtBQW9XM0g7O0FBbldFO0VBQWlDLHlGQUF3RjtBQXVXM0g7O0FBdFdFO0VBQWlDLHlGQUF3RjtBQTBXM0g7O0FBeldFO0VBQWlDLHlGQUF3RjtBQTZXM0g7O0FBNVdFO0VBQWlDLHlGQUF3RjtBQWdYM0g7O0FBL1dFO0VBQWlDLHlGQUF3RjtBQW1YM0g7O0FBbFhFO0VBQWlDLHlGQUF3RjtBQXNYM0g7O0FBclhFO0VBQWlDLHlGQUF3RjtBQXlYM0g7O0FBeFhFO0VBQWlDLHlGQUF3RjtBQTRYM0g7O0FBM1hFO0VBQWlDLHlGQUF3RjtBQStYM0g7O0FBOVhFO0VBQWlDLHlGQUF3RjtBQWtZM0g7O0FBallFO0VBQWlDLHlGQUF3RjtBQXFZM0g7O0FBcFlFO0VBQWlDLHlGQUF3RjtBQXdZM0g7O0FBdllFO0VBQWlDLHlGQUF3RjtBQTJZM0g7O0FBMVlFO0VBQWlDLHlGQUF3RjtBQThZM0g7O0FBN1lFO0VBQWlDLHlGQUF3RjtBQWlaM0g7O0FBaFpFO0VBQWlDLHlGQUF3RjtBQW9aM0g7O0FBblpFO0VBQWlDLHlGQUF3RjtBQXVaM0g7O0FBdFpFO0VBQWlDLHlGQUF3RjtBQTBaM0g7O0FBelpFO0VBQWlDLHlGQUF3RjtBQTZaM0g7O0FBNVpFO0VBQWlDLHlGQUF3RjtBQWdhM0g7O0FBL1pFO0VBQWlDLHlGQUF3RjtBQW1hM0g7O0FBbGFFO0VBQWlDLHlGQUF3RjtBQXNhM0g7O0FBcmFFO0VBQWlDLHlGQUF3RjtBQXlhM0g7O0FBeGFFO0VBQWlDLHlGQUF3RjtBQTRhM0g7O0FBM2FFO0VBQWlDLHlGQUF3RjtBQSthM0g7O0FBOWFFO0VBQWlDLHlGQUF3RjtBQWtiM0g7O0FBamJFO0VBQWlDLHlGQUF3RjtBQXFiM0g7O0FBcGJFO0VBQWlDLHlGQUF3RjtBQXdiM0g7O0FBdmJFO0VBQWlDLHlGQUF3RjtBQTJiM0g7O0FBMWJFO0VBQWlDLHlGQUF3RjtBQThiM0g7O0FBN2JFO0VBQWlDLHlGQUF3RjtBQWljM0giLCJmaWxlIjoiY3JlYXRlLWRpcmVjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcclxuXHQvLyBib3gtc2hhZG93OiAwIDJweCAycHggZ2FpbnNib3JvICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuXHQvLyBcdFx0XHRcdFx0XHRcdHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gLy8gbGluZS1oZWlnaHQ6IDIuMTI1O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC43NmVtO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zZWFyY2hJY29ue1xyXG5cdG1hcmdpbi1yaWdodDogMjBweDtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnNlYXJjaC1yZXN1bHRzIHtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1hdC1mb2N1c2VkIC5wbGFjZWhvbGRlciB7XHJcblx0Y29sb3I6IGdyYXk7XHJcbiAgfVxyXG4gIFxyXG4uaGludCB7XHJcblx0cGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcblx0Y29sb3I6IGdyYXk7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5sZWdlbmQge1xyXG5cdHdpZHRoOiBhdXRvO1xyXG5cdC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdGNvbG9yOiBncmF5O1xyXG4gIC8vIG9wYWNpdHk6IDcwJSAhaW1wb3J0YW50O1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblx0cGFkZGluZy1yaWdodDogMjBweDtcclxuXHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi5zaG93RGlyZWN0b3JDYXJkIHtcclxuXHR3aWR0aDogOTUlO1xyXG5cdGhlaWdodDogMTMwcHg7XHJcblx0bWFyZ2luOiAwcHggMHB4IDBweCAzMHB4O1xyXG5cdHBhZGRpbmc6IDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG5cdG1hcmdpbjogMTBweCAxMHB4IDEwcHggMjBweDtcclxuXHQvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyNENDQTc7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG5cdGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5lZGl0QW5kRGVsZXRle1xyXG4gIG1hcmdpbi1sZWZ0OiA1NCU7XHJcbiAgbWFyZ2luLXRvcDogOCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZS1kcm9wZG93biB7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHQvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdC8vIGJhY2tncm91bmQtY29sb3I6ICNBRUQ2RjE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRBNTZFMjtcclxuXHR3aWR0aDogMjVweDtcclxuXHRoZWlnaHQ6IDMycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWRlZmF1bHQtaWNvbiB7XHJcbiAgd2lkdGg6IDEuNGVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oaWRlLWF1dG9jb21wbGV0ZSB7IGRpc3BsYXk6IG5vbmU7IH1cclxuXHJcbi5hbGlnbkltYWdle1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLmN1cnJlbmN5LWZsYWcge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMjRweDtcclxuXHRoZWlnaHQ6IDE2cHg7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGVfZmFsbGJhY2sucG5nJyk7XHJcbiAgfVxyXG5cclxuICAuZWdyZXQtYmx1ZSAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjRDQ0E3IDtcclxuICB9XHJcbiAgLm1hdC1zbGlkZS10b2dnbGUgLm1hdC1hY2NlbnQgLm5nLXZhbGlkIC5uZy1kaXJ0eSAubWF0LWNoZWNrZWQgLm5nLXRvdWNoZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjRDQ0E3IDtcclxuXHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNENDQTc7XHJcbn1cclxuXHJcbiAgLmN1cnJlbmN5LWZsYWctc20ge1xyXG5cdHdpZHRoOiAxNnB4O1xyXG5cdGhlaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5jdXJyZW5jeS1mbGFnLWxnIHtcclxuXHR3aWR0aDogMzZweDtcclxuXHRoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuY3VycmVuY3ktZmxhZy14bCB7XHJcblx0d2lkdGg6IDQ4cHg7XHJcblx0aGVpZ2h0OiAzMnB4O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWFlZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYWVkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWFmbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYWZuLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWFsbHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYWxsLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWFtZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYW1kLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWFuZ3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYW5nLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWFvYXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYW9hLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWFyc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYXJzLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWF1ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYXVkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWF3Z3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYXdnLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWF6bntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYXpuLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJhbXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYmFtLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJiZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYmJkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJkdHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYmR0LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJnbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYmduLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJoZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYmhkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJpZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYmlmLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJtZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYm1kLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJuZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYm5kLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJvYntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYm9iLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJybHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYnJsLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJzZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYnNkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJ0bntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYnRuLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJ3cHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYndwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJ5bntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYnluLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWJ6ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvYnpkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWNhZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY2FkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWNkZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY2RmLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWNoZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY2hmLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWNscHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY2xwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWNueXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY255LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWNvcHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY29wLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWNyY3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY3JjLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWN1cHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY3VwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWN2ZXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY3ZlLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWN6a3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvY3prLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWRqZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZGpmLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWRra3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZGtrLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWRvcHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZG9wLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWR6ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZHpkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWVncHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZWdwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWVybntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZXJuLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWV0YntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZXRiLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWV1cntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZXVyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWZqZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZmpkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWZrcHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZmtwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWdicHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZ2JwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWdlbHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZ2VsLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWdoc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZ2hzLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWdpcHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZ2lwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWdtZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZ21kLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWduZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZ25mLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWd0cXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZ3RxLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWd5ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvZ3lkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWhrZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaGtkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWhubHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaG5sLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWhya3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaHJrLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWh0Z3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaHRnLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWh1ZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaHVmLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWlkcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaWRyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWlsc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaWxzLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWlucntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaW5yLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWlxZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaXFkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWlycntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaXJyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWlza3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvaXNrLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWptZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvam1kLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWpvZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvam9kLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWpweXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvanB5LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWtlc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUva2VzLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWtnc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUva2dzLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWtocntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUva2hyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWttZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUva21mLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWtwd3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUva3B3LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWtyd3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUva3J3LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWt3ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUva3dkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWt5ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUva3lkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWt6dHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUva3p0LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWxha3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbGFrLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWxicHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbGJwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWxrcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbGtyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWxyZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbHJkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWx0bHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbHRsLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLWx5ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbHlkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW1hZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbWFkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW1kbHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbWRsLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW1nYXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbWdhLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW1rZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbWtkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW1ta3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbW1rLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW1udHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbW50LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW1vcHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbW9wLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW1yb3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbXJvLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW11cntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbXVyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW12cntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbXZyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW13a3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbXdrLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW14bntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbXhuLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW15cntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbXlyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW16bntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbXpuLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW5hZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbmFkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW5nbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbmduLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW5pb3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbmlvLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW5va3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbm9rLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW5wcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbnByLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW56ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvbnpkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLW9tcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvb21yLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXBlbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcGVuLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXBna3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcGdrLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXBocHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcGhwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXBrcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcGtyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXBsbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcGxuLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXB5Z3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcHlnLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXFhcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcWFyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXJvbntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcm9uLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXJzZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcnNkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXJ1YntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcnViLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXJ3ZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvcndmLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXNhcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc2FyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXNiZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc2JkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXNjcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc2NyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXNla3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc2VrLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXNnZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc2dkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXNocHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc2hwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXNsbHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc2xsLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXNvc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc29zLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXNyZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc3JkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXN0ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc3RkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXN2Y3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc3ZjLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXN5cHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc3lwLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXN6bHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvc3psLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXRoYntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdGhiLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXRqc3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdGpzLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXRuZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdG5kLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXRvcHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdG9wLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXRyeXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdHJ5LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXR0ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdHRkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXR3ZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdHdkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXR6c3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdHpzLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXVhaHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdWFoLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXVneHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdWd4LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXVzZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdXNkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXV5dXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdXl1LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXV6c3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdXpzLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXZlZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdmVmLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXZuZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdm5kLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXZ1dntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvdnV2LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXdzdHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvd3N0LnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXhhZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUveGFmLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXhjZHtiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUveGNkLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXhvZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUveG9mLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXhwZntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUveHBmLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXllcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUveWVyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXphcntiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvemFyLnBuZycpO31cclxuICAuY3VycmVuY3ktZmxhZy5jdXJyZW5jeS1mbGFnLXptd3tiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly93aXNlLmNvbS9wdWJsaWMtcmVzb3VyY2VzL2Fzc2V0cy9mbGFncy9yZWN0YW5nbGUvem13LnBuZycpO30iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CreateDirectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-create-director',
                templateUrl: './create-director.component.html',
                styleUrls: ['./create-director.component.scss'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationEntryStageService"] }, { type: _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_10__["LocalStoreService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"] }]; }, { autocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"]]
        }], inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['input']
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();


/***/ }),

/***/ "Tual":
/*!******************************************************************************************!*\
  !*** ./src/app/views/others/onboarding-corporate/onboarding-corporate-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: onboardingCorporateroutes, OnboardingCorporateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onboardingCorporateroutes", function() { return onboardingCorporateroutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingCorporateRoutingModule", function() { return OnboardingCorporateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _onborading_primary_onborading_primary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onborading-primary/onborading-primary.component */ "h31h");
/* harmony import */ var _director_details_director_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./director-details/director-details.component */ "tCF6");
/* harmony import */ var _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-information/contact-information.component */ "1aja");
/* harmony import */ var _proof_of_identity_proof_of_identity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proof-of-identity/proof-of-identity.component */ "Gx8H");
/* harmony import */ var _onboarding_corporate_main_onboarding_corporate_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboarding-corporate-main/onboarding-corporate-main.component */ "HAfx");
/* harmony import */ var _other_info_corporate_other_info_corporate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./other-info-corporate/other-info-corporate.component */ "qazE");
/* harmony import */ var _create_director_create_director_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-director/create-director.component */ "KaOm");











const onboardingCorporateroutes = [
    {
        path: 'createDirector',
        component: _create_director_create_director_component__WEBPACK_IMPORTED_MODULE_8__["CreateDirectorComponent"]
    },
    {
        path: 'onborading-primary',
        component: _onborading_primary_onborading_primary_component__WEBPACK_IMPORTED_MODULE_2__["OnboradingPrimaryComponent"]
    },
    {
        path: 'Director-Details',
        component: _director_details_director_details_component__WEBPACK_IMPORTED_MODULE_3__["DirectorDetailsComponent"]
    },
    {
        path: 'conatctInfo',
        component: _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_4__["ContactInformationComponent"]
    },
    {
        path: 'proofOfIdentity',
        component: _proof_of_identity_proof_of_identity_component__WEBPACK_IMPORTED_MODULE_5__["ProofOfIdentityComponent"]
    },
    {
        path: 'other-info',
        component: _other_info_corporate_other_info_corporate_component__WEBPACK_IMPORTED_MODULE_7__["OtherInfoCorporateComponent"]
    },
    {
        path: 'corporate',
        component: _onboarding_corporate_main_onboarding_corporate_main_component__WEBPACK_IMPORTED_MODULE_6__["OnboardingCorporateMainComponent"]
    }
];
class OnboardingCorporateRoutingModule {
}
OnboardingCorporateRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OnboardingCorporateRoutingModule });
OnboardingCorporateRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OnboardingCorporateRoutingModule_Factory(t) { return new (t || OnboardingCorporateRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(onboardingCorporateroutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OnboardingCorporateRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnboardingCorporateRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(onboardingCorporateroutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "WRcG":
/*!**********************************************************************************!*\
  !*** ./src/app/views/others/onboarding-corporate/onboarding-corporate.module.ts ***!
  \**********************************************************************************/
/*! exports provided: OnboardingCorporateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingCorporateModule", function() { return OnboardingCorporateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _onboarding_corporate_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onboarding-corporate-routing.module */ "Tual");
/* harmony import */ var _onborading_primary_onborading_primary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onborading-primary/onborading-primary.component */ "h31h");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-highcharts */ "mE01");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _director_details_director_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./director-details/director-details.component */ "tCF6");
/* harmony import */ var _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./contact-information/contact-information.component */ "1aja");
/* harmony import */ var _proof_of_identity_proof_of_identity_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./proof-of-identity/proof-of-identity.component */ "Gx8H");
/* harmony import */ var _other_info_corporate_other_info_corporate_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./other-info-corporate/other-info-corporate.component */ "qazE");
/* harmony import */ var _onboarding_corporate_main_onboarding_corporate_main_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./onboarding-corporate-main/onboarding-corporate-main.component */ "HAfx");
/* harmony import */ var _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./corporate-onboarding.service */ "JVXa");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/stepper */ "hzfI");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _create_director_create_director_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./create-director/create-director.component */ "KaOm");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");







































class OnboardingCorporateModule {
}
OnboardingCorporateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OnboardingCorporateModule });
OnboardingCorporateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OnboardingCorporateModule_Factory(t) { return new (t || OnboardingCorporateModule)(); }, providers: [_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_32__["CorporateOnboardingService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _onboarding_corporate_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnboardingCorporateRoutingModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__["MatStepperModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__["MatAutocompleteModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__["MatExpansionModule"],
            angular_highcharts__WEBPACK_IMPORTED_MODULE_24__["ChartModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_onboarding_corporate_routing_module__WEBPACK_IMPORTED_MODULE_2__["onboardingCorporateroutes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OnboardingCorporateModule, { declarations: [_onborading_primary_onborading_primary_component__WEBPACK_IMPORTED_MODULE_3__["OnboradingPrimaryComponent"], _director_details_director_details_component__WEBPACK_IMPORTED_MODULE_27__["DirectorDetailsComponent"], _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_28__["ContactInformationComponent"], _proof_of_identity_proof_of_identity_component__WEBPACK_IMPORTED_MODULE_29__["ProofOfIdentityComponent"], _other_info_corporate_other_info_corporate_component__WEBPACK_IMPORTED_MODULE_30__["OtherInfoCorporateComponent"],
        _onboarding_corporate_main_onboarding_corporate_main_component__WEBPACK_IMPORTED_MODULE_31__["OnboardingCorporateMainComponent"], _create_director_create_director_component__WEBPACK_IMPORTED_MODULE_35__["CreateDirectorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _onboarding_corporate_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnboardingCorporateRoutingModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__["MatStepperModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__["MatAutocompleteModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__["MatExpansionModule"],
        angular_highcharts__WEBPACK_IMPORTED_MODULE_24__["ChartModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnboardingCorporateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_onborading_primary_onborading_primary_component__WEBPACK_IMPORTED_MODULE_3__["OnboradingPrimaryComponent"], _director_details_director_details_component__WEBPACK_IMPORTED_MODULE_27__["DirectorDetailsComponent"], _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_28__["ContactInformationComponent"], _proof_of_identity_proof_of_identity_component__WEBPACK_IMPORTED_MODULE_29__["ProofOfIdentityComponent"], _other_info_corporate_other_info_corporate_component__WEBPACK_IMPORTED_MODULE_30__["OtherInfoCorporateComponent"],
                    _onboarding_corporate_main_onboarding_corporate_main_component__WEBPACK_IMPORTED_MODULE_31__["OnboardingCorporateMainComponent"], _create_director_create_director_component__WEBPACK_IMPORTED_MODULE_35__["CreateDirectorComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _onboarding_corporate_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnboardingCorporateRoutingModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__["MatStepperModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__["MatAutocompleteModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__["MatExpansionModule"],
                    angular_highcharts__WEBPACK_IMPORTED_MODULE_24__["ChartModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_onboarding_corporate_routing_module__WEBPACK_IMPORTED_MODULE_2__["onboardingCorporateroutes"])
                ],
                providers: [_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_32__["CorporateOnboardingService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "h31h":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/others/onboarding-corporate/onborading-primary/onborading-primary.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: OnboradingPrimaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboradingPrimaryComponent", function() { return OnboradingPrimaryComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../corporate-onboarding.service */ "JVXa");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/dialogs/dialog.service */ "laYw");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/extended */ "ura0");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "UhP/");




























function OnboradingPrimaryComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/type2.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function OnboradingPrimaryComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 41);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function OnboradingPrimaryComponent_mat_error_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Company Name is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OnboradingPrimaryComponent_mat_option_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r9, " ");
} }
function OnboradingPrimaryComponent_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please select Category!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OnboradingPrimaryComponent_mat_option_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", country_r10, " ");
} }
function OnboradingPrimaryComponent_mat_error_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please select Country!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "error": a0 }; };
class OnboradingPrimaryComponent {
    constructor(router, formBuilder, dialogService, corporateService, cdr, route, snack, ls, apiService) {
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
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
        // this.corporateService.stepReady(this.onboardingPrimary, 'one')
    }
    ngOnInit() {
        this.editCorporateScreen = localStorage.getItem('EDIT-CORPORATEID');
        console.log(this.editCorporateScreen, 'Edit kyc details');
        this.imageURL = 'not_available';
        console.log('imageurl', this.imgUrl);
        this.route.queryParamMap.subscribe((params) => {
            this.imageURL = 'not_available';
            console.log(params.get('index'));
            if (params.get('index')) {
                this.corporateService.sendDisableMatTab({
                    index: params.get('index'),
                });
                this.corporateService.setFinishFlag({
                    finishFlag: false,
                });
                this.resetCorprateOnboarding();
                this.onboardingPrimary.reset({
                    companyName: '',
                    corporateId: '',
                    category: '',
                    country: '',
                });
            }
        });
        if (this.ls.getItem('corporateId')) {
            this.getCoropratedetails(this.ls.getItem('corporateId'));
        }
        if (this.ls.getItem('EDIT-CORPORATEID')) {
            console.log('KYC Id reference inside');
            // let kycReference = this.ls.getItem('kycReference');
            // this.kycReferenceId = kycReference.replace('KYC_', '');
            this.getCoropratedetails(this.ls.getItem('EDIT-CORPORATEID'));
        }
        this.getCountryName('country');
    }
    ngAfterViewInit() {
        if (this.ls.getItem('corporateId')) {
            this.getCoropratedetails(this.ls.getItem('corporateId'));
        }
    }
    resetCorprateOnboarding() {
        this.onboardingPrimary.reset();
        this.ls.removeItem('corporateId');
        this.ls.removeItem('corporateTabIndex');
        this.imageURL = 'not_available';
    }
    previous() {
        // this.dialogService.openCustomerType();
        this.router.navigateByUrl('/others/customerTypeDialog');
    }
    corporateChange(event) {
        this.selectedFiles = event.target.files[0];
        // Below part is used to display the selected image
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event2) => {
            this.imgUrl = reader.result;
        };
    }
    profileChange(event) {
        this.profilePicture = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event2) => {
            // this.imgUrl = reader.result;
            //  this.fun(event.target.files[0], this.profilePicture);
            this.imageURL = reader.result;
            this.disableDeletebtn = true;
            // this.profileImageExist = true;
        };
        event.target.value = '';
    }
    // check(onboardingPrimary){
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
    getCoropratedetails(e) {
        this.corporateId = e;
        this.apiService.getCoropratedetails(e).subscribe((details) => {
            console.log(details);
            if (details) {
                this.ls.setItem('totalCust', details.customerInfo.length);
            }
            if (details.corporateStatus === 'APPROVED') {
                this.onboardingPrimary.patchValue(details);
                this.imageURL = details.profileImage;
                this.imageURL != "not_available" ? this.disableDeletebtn = true : false;
                this.corporateDetails = details;
                this.ls.removeItem('EDIT-CORPORATEID');
            }
            // if (details) {
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
                this.snack.open('Please Enter Approved Corporate Id Number', 'Ok', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right',
                });
            }
        });
    }
    onSubmit(onboardingPrimary) {
        console.log('onboardingPrimary :: ', onboardingPrimary);
        this.corporateService
            .saveOrUpdateCorporateAccountInfo(onboardingPrimary)
            .subscribe((data) => {
            var _a, _b;
            console.log('data :: ', data);
            this.corporateId = data.corporateId;
            if (data != null) {
                this.ls.setItem('corporateId', data.corporateId);
                this.corporateService.sendCorporateAccountId(data.corporateId);
                this.snack.open('Basic Information Saved' + ' !', 'OK', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right',
                });
                this.cdr.markForCheck();
                this.updateCorporateStatus(data.corporateId);
                if (this.profilePicture) {
                    let profileUpload = {};
                    profileUpload.documentName = 'Profile';
                    profileUpload.documentType = 1;
                    profileUpload.fileType = (_a = this.profilePicture) === null || _a === void 0 ? void 0 : _a.type;
                    profileUpload.fileName = (_b = this.profilePicture) === null || _b === void 0 ? void 0 : _b.name;
                    profileUpload.corporateId = data.corporateId;
                    console.log(profileUpload);
                    const uploadData = new FormData();
                    uploadData.append('data', JSON.stringify(profileUpload));
                    uploadData.append('file', this.profilePicture);
                    this.apiService.uploadCorporateDocument(uploadData).subscribe((response) => { }, (err) => {
                        console.log('error', err);
                    });
                }
                this.next();
            }
            else {
                this.snack.open('Not able to connect to server!', 'INTERNAL SERVER ERROR', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right',
                });
            }
            (error) => {
                console.log('error resp :: ', error);
                this.snack.open(`${error.error.message} `, 'OK', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right',
                });
            };
        });
    }
    updateCorporateStatus(corporateId) {
        console.log('corporateId :: ', corporateId);
        this.apiService
            .updateCorporateSatatus(corporateId, 'UNDER_PROCESS')
            .subscribe((data) => {
            console.log('update response :: ', data);
        });
    }
    getProfileImage(customerId, document_type) {
        this.apiService
            .getCustomerDocuments(customerId, document_type)
            .subscribe((data) => {
            console.log('data ::', data);
            if (data.length > 0) {
                this.profileId = data[0].id;
                this.imageURL = data[0].fileUrl;
            }
        });
    }
    deleteProfileImg() {
        this.imageURL = 'not_available';
        var docObj = this.corporateDetails.corporateDocs.find(x => x.documentName == "Profile");
        this.apiService
            .delCorporateCustDoc(this.corporateId, 'Profile', docObj.id)
            .subscribe((data) => {
            this.snack.open('Profile Image Deleted Successfully', 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right',
            });
        });
        this.disableDeletebtn = false;
    }
    next() {
        this.corporateService.sendDisableMatTab({
            index: 1,
        });
        this.corporateService.setFinishFlag({
            finishFlag: false,
        });
    }
    getCountryName(key) {
        this.apiService.getAllCountries().subscribe((data) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].authStatus === 'A') {
                    this.countryArr.push(data[i].countryName);
                }
            }
        });
    }
}
OnboradingPrimaryComponent.ɵfac = function OnboradingPrimaryComponent_Factory(t) { return new (t || OnboradingPrimaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_5__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
OnboradingPrimaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OnboradingPrimaryComponent, selectors: [["app-onborading-primary"]], decls: 73, vars: 13, consts: [["ngNativeValidate", "", 3, "formGroup"], [1, "full-width"], [2, "padding", "1rem 0", "background-color", "#F1F1F4"], [2, "padding", "0 4.3rem"], [2, "border-radius", "0px"], [1, "full-width", 2, "padding", "1rem 1rem"], [2, "font-size", "18px"], [2, "width", "70px", "border-bottom", "7px solid #456EFE", "left", "30px", "border-radius", "30px"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "10px"], ["fxFlex", "20%", "fxFlex.xs", "100%", 1, "full-width"], ["fxLayout", "column", "fxLayoutAlign", "space-around center", 1, "full-width"], ["mat-icon-button", "", 2, "float", "right", "padding-top", "8px", "padding-left", "30px", "cursor", "pointer"], ["type", "file", "input", "", "type", "file", "accept", "image/png, image/gif, image/jpg, image/jpeg", 1, "inputStyle", 3, "change"], ["profileFile", ""], ["color", "primary"], [4, "ngIf", "ngIfElse"], ["showAvatar", ""], [1, "ml-87"], ["mat-icon-button", "", "color", "warn", 3, "disabled", "click"], ["fxFlex", "5%"], ["fxFlex", "70%", "fxLayoutGap", "10px"], ["fxLayout", "row", "fxLayoutGap", "100px"], ["fxFlex", "40%", "id", "fech", 1, "form-group", 2, "padding-left", "13px"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "name", "corporateId", "placeholder", "Corporate Id", "formControlName", "corporateId"], [2, "margin-top", "25px"], [1, "fechButtonDiv", "float-end"], [1, "fetchButton", 3, "click"], ["fxFlex", "40%", 1, "form-group"], ["for", "forCompanyName", 1, "hint"], ["matInput", "", "name", "companyName", "formControlName", "companyName", "placeholder", "Company Name"], [4, "ngIf"], ["for", "forCategory", 1, "hint"], ["formControlName", "category", "id", "forCategory", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", "floatLabel", "never", 1, "full-width", 3, "ngClass"], ["for", "forCountry", 1, "hint"], ["formControlName", "country", "id", "forCountry", "required", ""], [1, "button"], ["mat-button", "", 1, "Back", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "disabled", "click"], ["alt", "", 1, "formImg", 3, "src"], [3, "value"]], template: function OnboradingPrimaryComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function OnboradingPrimaryComponent_Template_input_change_15_listener($event) { return ctx.profileChange($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnboradingPrimaryComponent_Template_button_click_23_listener() { return ctx.deleteProfileImg(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Corporate Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnboradingPrimaryComponent_Template_p_click_41_listener() { return ctx.getCoropratedetails(ctx.onboardingPrimary.get("corporateId").value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Fetch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnboradingPrimaryComponent_Template_p_click_45_listener() { return ctx.resetCorprateOnboarding(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Company Name* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, OnboradingPrimaryComponent_mat_error_52_Template, 3, 0, "mat-error", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, OnboradingPrimaryComponent_mat_option_59_Template, 2, 2, "mat-option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, OnboradingPrimaryComponent_mat_error_60_Template, 3, 0, "mat-error", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-form-field", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, OnboradingPrimaryComponent_mat_option_66_Template, 2, 2, "mat-option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, OnboradingPrimaryComponent_mat_error_67_Template, 3, 0, "mat-error", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnboradingPrimaryComponent_Template_button_click_69_listener() { return ctx.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnboradingPrimaryComponent_Template_button_click_71_listener() { return ctx.onSubmit(ctx.onboardingPrimary.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.onboardingPrimary);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageURL == "not_available")("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.disableDeletebtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onboardingPrimary.get("companyName").touched && !ctx.onboardingPrimary.get("companyName").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categoryArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onboardingPrimary.get("category").touched && !ctx.onboardingPrimary.get("category").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.onboardingPrimary.get("country").touched && !ctx.onboardingPrimary.get("country").valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.countryArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onboardingPrimary.get("country").touched && !ctx.onboardingPrimary.get("country").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.onboardingPrimary.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__["DefaultClassDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"]], styles: [".head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 6%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\n.fechButtonDiv[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.fetchButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  text-decoration: underline;\n  padding-left: 10px;\n  padding-top: 15px;\n  cursor: pointer;\n  margin-right: 40px;\n}\n\n.Upload[_ngcontent-%COMP%] {\n  vertical-align: c;\n  align-self: center;\n  margin-top: 20px;\n  font-size: 15px;\n  text-decoration: underline;\n  color: #2680EB;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -7%;\n  width: 150px;\n  color: #5D5D5D;\n  background-color: white;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -11%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 70px;\n  border-bottom: 5px solid #456EFE;\n  left: 30px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.hint[_ngcontent-%COMP%] {\n  padding-left: 0.8rem;\n  color: gray;\n  font: normal normal medium 16px/22px Manrope;\n}\n\n.selectandCard[_ngcontent-%COMP%] {\n  background-color: #FDFDFF;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.gap[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background-color: #F1F1F4;\n}\n\n.gapbw[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n\n.spacearround[_ngcontent-%COMP%] {\n  padding: 0 4.3rem;\n}\n\n.changeInput[_ngcontent-%COMP%] {\n  opacity: 0.0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.formImg[_ngcontent-%COMP%] {\n  height: 200px !important;\n  width: 200px !important;\n  background-color: whitesmoke;\n  border-radius: 50%;\n}\n\n.changeDiv[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: transparent;\n}\n\n.inputStyle[_ngcontent-%COMP%] {\n  opacity: 0.0;\n  top: 0;\n  left: 18px;\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.ml-87[_ngcontent-%COMP%] {\n  margin-left: 87%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG9uYm9yYWRpbmctcHJpbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFJQTtFQUNFLFlBQVk7QUFEZDs7QUFJQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBRHJCOztBQUlBO0VBQ0Usa0JBQWtCO0FBRHBCOztBQUtBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtBQUZwQjs7QUFNQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsY0FBYztBQUhoQjs7QUFNQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUhwQjs7QUFNQTtFQUVFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBSnJCOztBQU9BO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQW1DO0VBQ25DLFlBQVk7RUFDWixtQkFBbUI7QUFKckI7O0FBT0E7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLFVBQVU7QUFKWjs7QUFPQTtFQUNFLGVBQWU7QUFKakI7O0FBT0E7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUdYLDRDQUEyQztBQU43Qzs7QUFTQTtFQUNFLHlCQUF5QjtBQU4zQjs7QUFTQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQ0Y7QUFQQTs7QUFTQTtFQUNFLHdCQUF3QjtBQU4xQjs7QUFTQTtFQUNFLGVBQWU7QUFOakI7O0FBU0E7RUFDRSx5QkFBeUI7QUFOM0I7O0FBU0E7RUFDRSxlQUNGO0FBUEE7O0FBU0E7RUFDRSxpQkFBaUI7QUFObkI7O0FBU0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQU5wQjs7QUFTQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDeEIsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQU5uQjs7QUFTQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0FBTm5COztBQVNBO0VBSUUsa0JBQWtCO0FBVHBCOztBQVlBO0VBQ0UsYUFBYTtBQVRmOztBQVlBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQVR4Qjs7QUFZQTtFQUNFLGtCQUFrQjtBQVRwQjs7QUFXQTtFQUNFLFlBQVk7RUFDWixNQUFNO0VBQ04sVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0FBUnBCOztBQVVBO0VBQ0UsVUFBVTtBQVBaOztBQVNBO0VBQ0UsZ0JBQWdCO0FBTmxCIiwiZmlsZSI6Im9uYm9yYWRpbmctcHJpbWFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgLy8gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5iYXNpYy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLm1haW4taGVhZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA2JTtcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uZmVjaEJ1dHRvbkRpdntcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uZmV0Y2hCdXR0b24ge1xyXG4gIGNvbG9yOiAjNDU2RUZFO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5cclxuLlVwbG9hZCB7XHJcbiAgdmVydGljYWwtYWxpZ246IGM7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiAjMjY4MEVCO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1sZWZ0OiAxMSU7XHJcbiAgcGFkZGluZy1yaWdodDogMTQlO1xyXG59XHJcblxyXG4uQmFjayB7XHJcblxyXG4gIG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC03JTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcclxufVxyXG5cclxuLk5leHQge1xyXG4gIG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTElO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDEwNiwgMjQ1KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTVweDtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjNDU2RUZFO1xyXG4gIGxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5oaW50IHtcclxuICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcclxuICBjb2xvcjogZ3JheTtcclxuICAvLyBvcGFjaXR5OiA3MCU7XHJcbiAgLy8gZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQ6bm9ybWFsIG5vcm1hbCBtZWRpdW0gMTZweC8yMnB4IE1hbnJvcGU7XHJcbn1cclxuXHJcbi5zZWxlY3RhbmRDYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRGREZGO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdhcCB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4uYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjQ7XHJcbn1cclxuXHJcbi5nYXBidyB7XHJcbiAgcGFkZGluZzogMXJlbSAwXHJcbn1cclxuXHJcbi5zcGFjZWFycm91bmQge1xyXG4gIHBhZGRpbmc6IDAgNC4zcmVtO1xyXG59XHJcblxyXG4uY2hhbmdlSW5wdXQge1xyXG4gIG9wYWNpdHk6IDAuMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtSW1nIHtcclxuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7IFxyXG4gYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNoYW5nZURpdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxke1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuIC8vYm94LXNoYWRvdzogMCAycHggMnB4IGdhaW5zYm9ybyAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1hdC1mb2N1c2VkIC5wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5pbnB1dFN0eWxle1xyXG4gIG9wYWNpdHk6IDAuMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMThweDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZXJyb3J7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4ubWwtODd7XHJcbiAgbWFyZ2luLWxlZnQ6IDg3JTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OnboradingPrimaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-onborading-primary',
                templateUrl: './onborading-primary.component.html',
                styleUrls: ['./onborading-primary.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] }, { type: _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_5__["CorporateOnboardingService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreService"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "qazE":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/others/onboarding-corporate/other-info-corporate/other-info-corporate.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: OtherInfoCorporateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherInfoCorporateComponent", function() { return OtherInfoCorporateComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../corporate-onboarding.service */ "JVXa");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/dialogs/dialog.service */ "laYw");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ "ura0");




























function OtherInfoCorporateComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orgType_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", orgType_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", orgType_r7, " ");
} }
function OtherInfoCorporateComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "OrganizationType is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OtherInfoCorporateComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const typeOfOwnership_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", typeOfOwnership_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", typeOfOwnership_r8, " ");
} }
function OtherInfoCorporateComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Type Of Ownership is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OtherInfoCorporateComponent_input_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 34);
} }
function OtherInfoCorporateComponent_mat_select_43_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kycStat_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", kycStat_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", kycStat_r10, " ");
} }
function OtherInfoCorporateComponent_mat_select_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OtherInfoCorporateComponent_mat_select_43_mat_option_1_Template, 2, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.kycStatusList);
} }
function OtherInfoCorporateComponent_div_50_legend_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "legend", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Document Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OtherInfoCorporateComponent_div_50_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const docType_r17 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r14.isDocumentOptionDisabled(docType_r17))("value", docType_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", docType_r17, " ");
} }
function OtherInfoCorporateComponent_div_50_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Document Type is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OtherInfoCorporateComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function OtherInfoCorporateComponent_div_50_Template_mat_select_valueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const i_r12 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.changeValue($event, i_r12); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function OtherInfoCorporateComponent_div_50_Template_input_change_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const i_r12 = ctx.index; const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.onOtherDocSelect($event.target.files, i_r12, _r16.files[0].name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherInfoCorporateComponent_div_50_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18); return _r16.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Browse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherInfoCorporateComponent_div_50_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const item_r11 = ctx.$implicit; const i_r12 = ctx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.deleteDocument(item_r11, i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
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
} }
class OtherInfoCorporateComponent {
    constructor(router, formBuilder, dialogService, corporateService, cdr, snack, ls, apiService) {
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
        this.isDocumentOptionDisabled = (value) => {
            return this.selectedOptions.includes(value);
        };
        this.otherInfoFormGroup = this.formBuilder.group({
            corporateId: [''],
            organizationType: [''],
            typeOfOwnership: [''],
            kycReference: [''],
            KycStatus: [''],
            corporateRegisterAddress: formBuilder.array([]),
            corporateDocs: formBuilder.array([])
        });
        // this.corporateService.stepReady(this.otherInfoFormGroup, 'five')
        this.addAddress();
        this.getCountryName("country");
    }
    ngOnInit() {
        this.isExistingCustomer = this.ls.getItem('CorporateExistingCustomer');
        this.corporateService.corporateAccountIdVal
            .subscribe(corporateId => {
            this.corporateId = corporateId;
            console.log('corporateId :: ', this.corporateId);
            this.otherInfoFormGroup.get('corporateId').setValue(corporateId);
            if (this.corporateId) {
                this.getCoropratedetails(this.corporateId);
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
    get getDocumentList() {
        return this.otherInfoFormGroup.get('corporateDocs');
    }
    addDocument() {
        this.getDocumentList.push(this.formBuilder.group({
            documentType: [''],
            documentName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            fileData: ['']
        }));
    }
    get getAddressData() {
        return this.otherInfoFormGroup.get('corporateRegisterAddress');
    }
    addAddress() {
        this.getAddressData.push(this.formBuilder.group({
            addressType: [''],
            address1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            address2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            city: [''],
            state: [''],
            country: [''],
            zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10)]],
        }));
    }
    _keyPress(event) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    deleteDocument(item, i) {
        console.log('delete record :: ', item, ' index :: ', i);
        this.getDocumentList.removeAt(i);
    }
    getCountryName(key) {
        this.apiService.getAllCountries().subscribe((data) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].authStatus === 'A') {
                    this.arrayCountry.push(data[i].countryName);
                }
            }
        });
    }
    getStateName(country) {
        this.apiService.getAllCountries().subscribe((data) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].countryName == country) {
                    this.apiService.getStateByCountryId(data[i].id).subscribe((resp) => {
                        this.arrayState = resp;
                    });
                    break;
                }
            }
        });
    }
    getCityName(state) {
        console.log(state);
        this.apiService.getDropDownValues1("city", state).subscribe((data) => {
            this.arrayCity = data;
            console.log("-->", this.arrayCity);
        });
    }
    onOtherDocSelect(files, idx, fileName) {
        console.log("Filelisttt", files);
        console.log("cheeck::", this.otherInfoFormGroup);
        this.otherDocumentArray.push(files.item(0));
        this.otherInfoFormGroup.get('corporateDocs')['controls'][idx].controls.documentName.setValue(fileName);
        let reader = new FileReader();
        reader.readAsDataURL(files.item(0));
        reader.onload = (event2) => {
            console.log("doc upload check");
            console.log("jaskd", this.otherInfoFormGroup.get('corporateDocs')['controls'][idx].controls.fileData);
            this.otherInfoFormGroup.get('corporateDocs')['controls'][idx].controls.fileData.setValue(reader.result);
        };
    }
    // public profileChange(event) {
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
    getCoropratedetails(e) {
        this.apiService.getCoropratedetails(e).subscribe((details => {
            console.log(details.corporateDocs.length);
            this.nameOfDocument = details.corporateDocs;
            for (let i = 0; i < details.corporateDocs.length; i++) {
                if (details.corporateDocs.length > 1 && details.corporateDocs[i].documentName !== "profile") {
                    this.otherInfoFormGroup.patchValue(details);
                    this.otherInfoFormGroup.controls.corporateDocs['controls'][i].controls.documentType.setValue(this.documentTypeList[i + 1]);
                    this.otherInfoFormGroup.controls.corporateDocs['controls'][i].controls.fileData.setValue(details.corporateDocs[i + 1].fileUrl);
                }
            }
            this.getStateName(details.corporateAddress[0].country);
            this.getCityName(details.corporateAddress[0].state);
        }));
    }
    onSubmit(otherInfoFormGroup) {
        console.log("otherInfoFormGroup BEFORE:: ", otherInfoFormGroup);
        let obj = {};
        Object.keys(otherInfoFormGroup).map(function (key, index) {
            if (key != 'corporateDocs') {
                obj[key] = otherInfoFormGroup[key];
            }
        });
        console.log('doc legth :: ', this.otherDocumentArray);
        console.log("otherInfoFormGroup after:: ", obj);
        this.corporateService.saveOrUpdateCorporateAccountInfo(obj)
            .subscribe(data => {
            console.log('data :: ', data);
            if (data != null) {
                for (let i = 0; i < this.otherInfoFormGroup.get('corporateDocs').value.length; i++) {
                    if (this.otherDocumentArray.length > 0) {
                        let documentToBeUploaded = {};
                        documentToBeUploaded.documentName = this.otherInfoFormGroup.get('corporateDocs').value[i].documentType;
                        documentToBeUploaded.documentType = 2;
                        documentToBeUploaded.fileType = this.otherDocumentArray[i].type;
                        documentToBeUploaded.fileName = this.otherDocumentArray[i].name;
                        documentToBeUploaded.corporateId = data.corporateId;
                        documentToBeUploaded.id = this.otherDocumentArray[i].id;
                        const uploadData = new FormData();
                        uploadData.append('data', JSON.stringify(documentToBeUploaded));
                        uploadData.append('file', this.otherDocumentArray[i]);
                        this.apiService.uploadCorporateDocument(uploadData).subscribe((resp) => {
                            console.log(resp);
                        });
                    }
                }
                this.updateCorporateStatus(data.corporateId);
                this.dialogService.customerOnboardingSuccessDialogue('CORPORATE', this.corporateId);
                this.otherInfoFormGroup.reset();
                this.ls.removeItem('corporateId');
                this.ls.removeItem('corporateTabIndex');
                this.corporateService.setnoOfDirectors(null);
                // this.snack.open(`Other information saved`+ ' !', 'OK', {
                //   duration: 4000,
                //   verticalPosition: 'top',
                //   horizontalPosition: 'right'
                // });
                this.cdr.markForCheck();
            }
            else {
                this.snack.open('Not able to connect to server!', 'INTERNAL SERVER ERROR', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                });
            }
        }, error => {
            console.log('error resp :: ', error);
            this.snack.open(`${error.error.message} `, 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
            });
        });
    }
    previous() {
        this.corporateService.sendDisableMatTab({
            index: 3,
        });
    }
    next() {
        // this.corporateService.sendDisableMatTab({
        //   index: 4,
        // });
        this.corporateService.setFinishFlag({
            finishFlag: true,
        });
    }
    updateCorporateStatus(corporateId) {
        console.log('corporateId :: ', corporateId);
        this.apiService.updateCorporateSatatus(corporateId, 'INITIATED')
            .subscribe(data => {
            console.log('update response :: ', data);
        });
    }
    getDoc() {
        this.apiService.getDropDownValues("document_type").subscribe((data) => {
            this.documentTypeList = data;
        });
        this.apiService.getDropDownValues("document_name").subscribe((resp) => {
            this.idTypeList = resp;
        });
        this.apiService.getDropDownValues("country").subscribe((responseData) => {
            this.countryList = responseData;
        });
        this.apiService.getDropDownValues("gender").subscribe((responseDatas) => {
            this.genderList = responseDatas;
        });
        this.apiService.getDropDownValues("residence").subscribe((responses) => {
            this.residenceList = responses;
        });
        this.apiService.getDropDownValues("nationality").subscribe((datas) => {
            this.nationalityList = datas;
        });
    }
    changeValue(value, index) {
        console.log(index);
        if (this.selectedDocumentTypes[index]) {
            this.selectedOptions = this.selectedOptions.filter(val => val !== this.selectedDocumentTypes[index]);
        }
        this.selectedDocumentTypes[index] = value;
        console.log(value);
        this.selectedOptions.push(value);
        // this.arrayDocumentType = this.arrayDocumentType.filter(document => document !== value);
    }
    isAllSameDigit(event) {
        let count = 0, number = event.target.value;
        if (number != '') {
            for (var i = 0; i < number.length; i++) {
                if (0 == number[i]) {
                    count++;
                }
            }
            if (count == number.length) {
                this.isAllSameDigitVal = true;
            }
            else {
                this.isAllSameDigitVal = false;
            }
        }
        else {
            this.isAllSameDigitVal = false;
        }
    }
}
OtherInfoCorporateComponent.ɵfac = function OtherInfoCorporateComponent_Factory(t) { return new (t || OtherInfoCorporateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
OtherInfoCorporateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OtherInfoCorporateComponent, selectors: [["app-other-info-corporate"]], decls: 64, vars: 10, consts: [["ngNativeValidate", "", 3, "formGroup"], [1, "full-width"], [2, "padding", "1rem 0", "background-color", "#F1F1F4"], [2, "padding", "0 4.3rem"], [2, "border-radius", "0px"], ["fxLayout", "column", "fxLayoutAlign", "space-around start", 1, "full-width"], [1, "full-width", 2, "padding", "1rem 1rem"], [2, "font-size", "18px"], [2, "width", "70px", "border-bottom", "7px solid #456EFE", "left", "30px", "border-radius", "30px"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxLayoutGap", "20px"], ["fxFlex", "50"], [2, "border-top", "1px solid lightgray", "margin-left", "20px", "margin-right", "20px"], ["visible", "true"], ["fxFlex", "100", "fxLayoutGap", "20px", 1, "padding"], ["fxFlex", "50", 1, "form-group"], ["appearance", "outline", 1, "full-width"], ["id", "forOrganizationType", "formControlName", "organizationType", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "forTypeOfOwnership", "formControlName", "typeOfOwnership", "required", ""], ["matInput", "", "id", "forkycStatus", "readonly", "", "formControlName", "KycStatus", 4, "ngIf"], ["id", "forkycStatus", "formControlName", "KycStatus", 4, "ngIf"], ["matInput", "", "id", "forkycReference", "formControlName", "kycReference", 3, "readonly"], ["formArrayName", "corporateDocs"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxLayoutGap", "1px"], ["fxFlex", "1"], ["fxFlex", "20"], ["mat-button", "", "color", "primary", 3, "click"], [1, "button"], ["mat-button", "", 1, "Back", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "disabled", "click"], [3, "value"], ["matInput", "", "id", "forkycStatus", "readonly", "", "formControlName", "KycStatus"], ["id", "forkycStatus", "formControlName", "KycStatus"], [3, "formGroupName"], [3, "ngClass"], ["visible", "true", 4, "ngIf"], ["fxFlex", "30", 1, "form-group"], ["id", "forDocumentType", "formControlName", "documentType", "required", "", 3, "valueChange"], ["disabled", ""], [3, "disabled", "value", 4, "ngFor", "ngForOf"], ["fxFlex", "10%", "fxFlex.xs", "100%", 1, "pt20"], ["height", "80px", "width", "85px", 3, "src"], ["fxFlex", "30", "fxLayoutGap", "5px", 2, "display", "flex", "margin-top", "20px", "align-content", "center"], ["type", "file", "name", "fileData", "formControlName", "fileData", 1, "default-background", 2, "display", "none", "margin-top", "20px", 3, "change"], ["fileData", ""], ["mat-button", "", 2, "text-decoration", "underline", "color", "#456EFE", 3, "routerLink", "click"], ["mat-button", "", 3, "click"], [2, "color", "tomato"], [3, "disabled", "value"]], template: function OtherInfoCorporateComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherInfoCorporateComponent_Template_button_click_55_listener() { return ctx.addDocument(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherInfoCorporateComponent_Template_button_click_60_listener() { return ctx.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtherInfoCorporateComponent_Template_button_click_62_listener() { return ctx.onSubmit(ctx.otherInfoFormGroup.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["DefaultClassDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -7%;\n  width: 150px;\n  color: #5D5D5D;\n  background-color: white;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -11%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.fieldSetZeroIndex[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgray;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.fieldSetNextIndex[_ngcontent-%COMP%] {\n  border-top: 0px solid lightgray;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.padding[_ngcontent-%COMP%] {\n  padding-top: 3%;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: gray;\n}\n\nlegend[_ngcontent-%COMP%] {\n  width: auto;\n  color: gray;\n  font-size: 20px;\n  padding-right: 20px;\n  font-family: 'Montserrat', Courier, monospace;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgray;\n  border-bottom: 0px solid lightgray;\n  border-right: 0px solid lightgray;\n  border-left: 0px solid lightgray;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n}\n\n.hint[_ngcontent-%COMP%] {\n  padding-left: 0.8rem;\n  color: #0F0F0F;\n  opacity: 70%;\n  font: normal normal medium 16px/22px Manrope;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG90aGVyLWluZm8tY29ycG9yYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBRUUseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFBckI7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBbUM7RUFDbkMsWUFBWTtFQUNaLG1CQUFtQjtBQUFyQjs7QUFFQTtFQUNFLCtCQUErQjtFQUFDLGlCQUFpQjtFQUFFLGtCQUFrQjtBQUd2RTs7QUFBQTtFQUNFLCtCQUErQjtFQUFDLGlCQUFpQjtFQUFFLGtCQUFrQjtBQUt2RTs7QUFGRTtFQUlFLGtCQUFrQjtBQUV0Qjs7QUFFRTtFQUNFLGFBQWE7QUFDakI7O0FBRUU7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQzFCOztBQUVFO0VBQ0UsZUFBZTtBQUNuQjs7QUFFRTtFQUNFLFdBQVc7QUFDZjs7QUFFRTtFQUNFLFdBQVc7RUFFWCxXQUFXO0VBRVgsZUFBZTtFQUVmLG1CQUFtQjtFQUNuQiw2Q0FBNkM7QUFGakQ7O0FBS0U7RUFDRSwrQkFBK0I7RUFDL0Isa0NBQWtDO0VBQ2xDLGlDQUFpQztFQUNqQyxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFGcEI7O0FBS0U7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLFlBQVk7RUFDWiw0Q0FBMkM7QUFGL0MiLCJmaWxlIjoib3RoZXItaW5mby1jb3Jwb3JhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1sZWZ0OiAxMSU7XHJcbiAgcGFkZGluZy1yaWdodDogMTQlO1xyXG59XHJcblxyXG4uQmFjayB7XHJcblxyXG4gIG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC03JTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgY29sb3I6ICM1RDVENUQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcclxufVxyXG5cclxuLk5leHQge1xyXG4gIG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTElO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDEwNiwgMjQ1KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTVweDtcclxufVxyXG4uZmllbGRTZXRaZXJvSW5kZXh7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTttYXJnaW4tbGVmdDogMjBweDsgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZmllbGRTZXROZXh0SW5kZXh7XHJcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIGxpZ2h0Z3JheTttYXJnaW4tbGVmdDogMjBweDsgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgLy8gcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAgIC8vIGJveC1zaGFkb3c6IDAgMnB4IDJweCBnYWluc2Jvcm8gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIC8vIGxpbmUtaGVpZ2h0OiAyLjEyNTtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAucGFkZGluZ3tcclxuICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9jdXNlZCAucGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgfVxyXG4gIFxyXG4gIGxlZ2VuZCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICAvLyBvcGFjaXR5OiA3MCUgIWltcG9ydGFudDsgICAgXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gIH1cclxuICBcclxuICBmaWVsZHNldCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1yaWdodDogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1sZWZ0OiAwcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhpbnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcbiAgICBjb2xvcjogIzBGMEYwRjtcclxuICAgIG9wYWNpdHk6IDcwJTsgICAgXHJcbiAgICBmb250Om5vcm1hbCBub3JtYWwgbWVkaXVtIDE2cHgvMjJweCBNYW5yb3BlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OtherInfoCorporateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-other-info-corporate',
                templateUrl: './other-info-corporate.component.html',
                styleUrls: ['./other-info-corporate.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] }, { type: _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_4__["CorporateOnboardingService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "tCF6":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/others/onboarding-corporate/director-details/director-details.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DirectorDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectorDetailsComponent", function() { return DirectorDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../corporate-onboarding.service */ "JVXa");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _create_director_create_director_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../create-director/create-director.component */ "KaOm");






















function DirectorDetailsComponent_app_create_director_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-create-director", 21);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1);
} }
class DirectorDetailsComponent {
    constructor(router, formBuilder, corporateService, cdr, ls, apiService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.corporateService = corporateService;
        this.cdr = cdr;
        this.ls = ls;
        this.apiService = apiService;
        this.items = [1];
        this.directorCount = 1;
        this.disabledBtn = true;
        this.directorFormGroup = this.formBuilder.group({
            "noOfDirector": [1]
        });
        // this.corporateService.stepReady(this.directorFormGroup, 'two')
    }
    ngOnInit() {
        console.log("testtt");
        console.log('items :: ', this.items.length);
        this.totalCust = this.ls.getItem('totalCust');
        console.log(this.totalCust);
        console.log(this.items);
        if (this.totalCust != null && this.totalCust < 1) {
            this.items.push(this.totalCust);
        }
        console.log(this.items);
        this.corporateService.setnoOfDirectors(this.directorFormGroup.get('noOfDirector').value);
        this.directorFormGroup.valueChanges.subscribe(data => {
            console.log('data : ', data);
            this.corporateService.setnoOfDirectors(data.noOfDirector);
        });
        this.corporateService.getfinishSave().subscribe(disSave => {
            // console.log('disSave :: ',disSave);
            if (this.totalCust != null) {
                this.directorFormGroup.get('noOfDirector').setValue(this.totalCust);
            }
            let count = 0;
            if (disSave.length > 0) {
                disSave.forEach((element, key) => {
                    // console.log('ele :: ',element, ' key :: ',key);
                    if (element == true) {
                        count++;
                    }
                });
                if (count == disSave.length) {
                    this.disabledBtn = false;
                }
                else {
                    this.disabledBtn = true;
                }
            }
        });
    }
    onBack(form) {
        console.log('form :: ', form);
    }
    onSubmit(directorFormGroup) {
        console.log("directorFormGroup :: ", directorFormGroup);
        this.next();
    }
    previous() {
        // this.documentForm.reset();
        this.corporateService.sendDisableMatTab({
            index: 0,
        });
    }
    next() {
        this.corporateService.sendDisableMatTab({
            index: 2,
        });
        this.corporateService.setFinishFlag({
            finishFlag: false,
        });
    }
    _keyPress(event) {
        // console.log("key",event);
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    noOFDirector(event) {
        if (event.target.value.length === 0 && event.key == "0") {
            event.preventDefault();
        }
    }
    //   noOfDirector(event) {
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
    noOfDirector(event) {
        let value = event.target.value;
        if (value != '' && value != null && value != undefined && value != ' ' && value != " ") {
            console.log(parseInt(value));
            this.number = parseInt(value);
            let itemLength = this.items.length;
            if (this.number != NaN && this.number == 1) {
                if (this.items.length > this.number) {
                    for (let index = this.number; index < itemLength; index++) {
                        this.items.pop();
                    }
                }
            }
            if (this.number != NaN && this.number > 1) {
                if (this.number > this.items.length) {
                    for (let i = this.items.length + 1; i <= this.number; i++) {
                        this.items.push(i);
                    }
                }
                if (this.number < this.items.length) {
                    for (let index = this.number; index < itemLength; index++) {
                        this.items.pop();
                    }
                }
                this.cdr.detectChanges();
                this.cdr.markForCheck();
            }
        }
    }
    removeSign(i) {
        throw new Error('Method not implemented.');
    }
    ngAfterViewChecked() {
    }
}
DirectorDetailsComponent.ɵfac = function DirectorDetailsComponent_Factory(t) { return new (t || DirectorDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_5__["CorporateOnboardingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
DirectorDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DirectorDetailsComponent, selectors: [["app-director-details"]], viewQuery: function DirectorDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
    } }, decls: 28, vars: 3, consts: [["ngNativeValidate", "", 3, "formGroup"], [1, "full-width"], [2, "padding", "1rem 0", "background-color", "#F1F1F4"], [2, "padding", "0 4.3rem"], [2, "border-radius", "0px"], ["fxLayout", "column", "fxLayoutAlign", "space-around start", 1, "full-width"], [1, "full-width", 2, "padding", "1rem 1rem"], [2, "font-size", "18px"], [2, "width", "70px", "border-bottom", "7px solid #456EFE", "left", "30px", "border-radius", "30px"], ["fxLayout", "row wrap", 1, "top"], ["fxFlex", "100"], ["fxFlex", "40"], ["appearance", "outline"], ["formControlName", "noOfDirector", "matInput", "", "id", "forNoOfDirectors", "placeholder", "Enter no of directors", 3, "keypress", "keydown", "keyup"], ["visible", "true"], [1, "top"], [1, "custom-accordion"], [3, "item", 4, "ngFor", "ngForOf"], [1, "button"], ["mat-button", "", 1, "Back", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "disabled", "click"], [3, "item"]], template: function DirectorDetailsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DirectorDetailsComponent_Template_input_keypress_16_listener($event) { return ctx._keyPress($event); })("keydown", function DirectorDetailsComponent_Template_input_keydown_16_listener($event) { return ctx.noOFDirector($event); })("keyup", function DirectorDetailsComponent_Template_input_keyup_16_listener($event) { return ctx.noOfDirector($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DirectorDetailsComponent_app_create_director_22_Template, 1, 1, "app-create-director", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectorDetailsComponent_Template_button_click_24_listener() { return ctx.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectorDetailsComponent_Template_button_click_26_listener() { return ctx.onSubmit(ctx.directorFormGroup.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.directorFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabledBtn);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _create_director_create_director_component__WEBPACK_IMPORTED_MODULE_14__["CreateDirectorComponent"]], styles: [".head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 6%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\n.border[_ngcontent-%COMP%] {\n  margin-top: -10px;\n  margin-left: 150px;\n  height: 1px;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  margin-left: 13px;\n  font-size: 17px;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #456EFE;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  color: #456EFE;\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  color: gray;\n}\n\n.mat-button-wrapper.svg[_ngcontent-%COMP%] {\n  margin-left: 100px;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n\n.top[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.matborder[_ngcontent-%COMP%] {\n  border: solid 1px #E0E0E0;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: transparent;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nlegend[_ngcontent-%COMP%] {\n  width: auto;\n  color: gray;\n  font-size: 20px;\n  padding-right: 20px;\n  font-family: 'Montserrat', Courier, monospace;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgray;\n  border-bottom: 0px solid lightgray;\n  border-right: 0px solid lightgray;\n  border-left: 0px solid lightgray;\n  margin-left: 8px;\n  margin-right: 20px;\n  margin-top: 20px;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -7%;\n  width: 150px;\n  color: #5D5D5D;\n  background-color: white;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -11%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.noOfDirectors[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  padding-left: 0.8rem;\n  color: gray;\n  font-size: 13px;\n}\n\n.hint[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGRpcmVjdG9yLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBSUE7RUFDRSxZQUFZO0FBRGQ7O0FBSUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQURyQjs7QUFJQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFHbEIsV0FBVztBQUhiOztBQU1BO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFIakI7O0FBTUE7RUFFRSx5QkFBeUI7QUFKM0I7O0FBT0E7RUFDRSxjQUNGO0FBTEE7O0FBT0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUpiOztBQU9BO0VBQ0Usa0JBQWtCO0FBSnBCOztBQU9BO0VBQ0UsaUJBQWlCO0FBSm5COztBQU9BO0VBQ0UsaUJBQWlCO0FBSm5COztBQU9BO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixpQkFDRjtBQUxBOztBQU9BO0VBQ0Usd0JBQXdCO0FBSjFCOztBQU9BO0VBQ0UseUJBQ0Y7QUFMQTs7QUFRQTtFQUlFLGtCQUFrQjtBQVJwQjs7QUFXQTtFQUNFLGFBQWE7QUFSZjs7QUFVQTtFQUNFLGtCQUFrQjtBQVBwQjs7QUFTQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFOeEI7O0FBU0E7RUFDRSxXQUFXO0VBSVgsV0FBVztFQUNYLGVBQWU7RUFFZixtQkFBbUI7RUFDbkIsNkNBQTZDO0FBVi9DOztBQWFBO0VBQ0UsK0JBQStCO0VBQy9CLGtDQUFrQztFQUNsQyxpQ0FBaUM7RUFDakMsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBVmxCOztBQWFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBVnBCOztBQWNBO0VBRUUseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFackI7O0FBZUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBbUM7RUFDbkMsWUFBWTtFQUNaLG1CQUFtQjtBQVpyQjs7QUFnQkE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxlQUFlO0FBYmpCOztBQWdCQTtFQUVFLFdBQVc7RUFDWCxlQUFlO0FBZGpCIiwiZmlsZSI6ImRpcmVjdG9yLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gIC8vICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uYmFzaWMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5tYWluLWhlYWQge1xyXG4gIHBhZGRpbmctbGVmdDogNiU7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG5cclxuXHJcbiAgaGVpZ2h0OiAxcHg7XHJcbn1cclxuXHJcbm1hdC1sYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcblxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NTZFRkU7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBjb2xvcjogIzQ1NkVGRVxyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLm1hdC1idXR0b24td3JhcHBlci5zdmcge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdGJvcmRlciB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0UwRTBFMFxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tbmV3IGNoYW5nZXNcclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG5cdC8vIFx0XHRcdFx0XHRcdFx0cmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAvLyBib3gtc2hhZG93OiAwIDJweCAycHggZ2FpbnNib3JvICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubWF0LWZvY3VzZWQgLnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxubGVnZW5kIHtcclxuICB3aWR0aDogYXV0bztcclxuICAvLyBtYXJnaW4tbGVmdDogMjBweDtcclxuICAvLyBjb2xvcjogIzBGMEYwRjtcclxuICAvLyBvcGFjaXR5OiA3MCUgIWltcG9ydGFudDtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1yaWdodDogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBib3JkZXItbGVmdDogMHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1sZWZ0OiAxMSU7XHJcbiAgcGFkZGluZy1yaWdodDogMTQlO1xyXG59XHJcblxyXG5cclxuLkJhY2sge1xyXG5cclxuICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNyU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGNvbG9yOiAjNUQ1RDVEO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbn1cclxuXHJcbi5OZXh0IHtcclxuICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTExJTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxMDYsIDI0NSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi5ub09mRGlyZWN0b3JzIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5oaW50IHtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectorDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-director-details',
                templateUrl: './director-details.component.html',
                styleUrls: ['./director-details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _corporate_onboarding_service__WEBPACK_IMPORTED_MODULE_5__["CorporateOnboardingService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }]; }, { accordion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~views-others-onboarding-corporate-onboarding-corporate-module~views-tasks-tasks-module-es2015.js.map