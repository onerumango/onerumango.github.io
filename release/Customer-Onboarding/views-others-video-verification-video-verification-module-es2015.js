(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-others-video-verification-video-verification-module"],{

/***/ "68+F":
/*!********************************************************************************!*\
  !*** ./src/app/views/others/video-verification/calljoin/calljoin.component.ts ***!
  \********************************************************************************/
/*! exports provided: CalljoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalljoinComponent", function() { return CalljoinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");







class CalljoinComponent {
    constructor() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
    }
    ngOnInit() {
    }
}
CalljoinComponent.ɵfac = function CalljoinComponent_Factory(t) { return new (t || CalljoinComponent)(); };
CalljoinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalljoinComponent, selectors: [["app-calljoin"]], decls: 34, vars: 0, consts: [[1, "background"], ["fxLayout", "row wrap"], ["fxFlex", "30"], ["fxFlex", "40"], ["fxLayoutAlign", "center stretch", 1, "heading"], ["fxFlex", "100"], ["fxFlex", "20"], [1, "card"], ["fxLayoutAlign", "center stretch"], ["src", "assets/images/call.png"], ["fxFlex", "100", "fxLayoutAlign", "center stretch"], ["mat-stroked-button", "", 1, "Next"], ["fxFlex", "10"]], template: function CalljoinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choose your audio and video settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Proceed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "videocam_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-slide-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "mic_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-slide-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"]], styles: [".heading[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.background[_ngcontent-%COMP%] {\n  background-color: #343434;\n  height: 100%;\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #242424;\n  width: 50%;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 139px;\n  height: 139px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\nmat-slide-toggle[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNhbGxqb2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBWTtBQUFoQjs7QUFHQTtFQUVJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVTtBQURkOztBQUdBO0VBQ0kseUJBQXlCO0VBQ3pCLFVBQVU7QUFBZDs7QUFHQTtFQUVBLFlBQVk7RUFDWixhQUFhO0FBRGI7O0FBSUE7RUFJSSxZQUFXO0VBQ1gseUJBQWlDO0VBQ2pDLFlBQVc7RUFDWCxtQkFBbUI7QUFKdkI7O0FBUUU7RUFFSSxZQUFZO0FBTmxCOztBQVFFO0VBRUksa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQU56QiIsImZpbGUiOiJjYWxsam9pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nXHJcbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuLmJhY2tncm91bmRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgXHJcbn1cclxuaW1ne1xyXG4gXHJcbndpZHRoOiAxMzlweDtcclxuaGVpZ2h0OiAxMzlweDtcclxufVxyXG5cclxuLk5leHR7XHJcbiAgICAvLyBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDozJTtcclxuICAgIFxyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsMTA2LDI0NSk7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbiAgIFxyXG4gIH1cclxuIFxyXG4gIG1hdC1pY29uXHJcbiAge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIG1hdC1zbGlkZS10b2dnbGVcclxuICB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcbiBcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalljoinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calljoin',
                templateUrl: './calljoin.component.html',
                styleUrls: ['./calljoin.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "83s1":
/*!*********************************************************************************!*\
  !*** ./src/app/views/others/video-verification/video-verification.component.ts ***!
  \*********************************************************************************/
/*! exports provided: VideoVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoVerificationComponent", function() { return VideoVerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video.service */ "ztLX");
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appointment/appointment.component */ "D+DX");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var _kyc_basic_information_kyc_basic_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../kyc-basic-information/kyc-basic-information.component */ "dyf6");
/* harmony import */ var _fingerprint_authentication_fingerprint_authentication_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fingerprint-authentication/fingerprint-authentication.component */ "+DZj");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/services/dialogs/dialog.service */ "laYw");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _only_number_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./only-number.directive */ "Zpjb");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/extended */ "ura0");

































function VideoVerificationComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r15);
} }
function VideoVerificationComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Prefix is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_mat_error_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_mat_error_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email must be a valid email address! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_button_55_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_button_55_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.getOtp(ctx_r16.basicInfoForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r7.basicInfoForm.get("primaryEmail").invalid);
} }
function VideoVerificationComponent_button_56_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_button_56_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.getOtp(ctx_r18.basicInfoForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r8.basicInfoForm.get("primaryEmail").invalid);
} }
function VideoVerificationComponent_mat_error_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile number is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile number must be 10 digits. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_button_64_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_button_64_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.getOtpMobile(ctx_r20.basicInfoForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r11.basicInfoForm.get("phoneNo").invalid);
} }
function VideoVerificationComponent_button_65_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_button_65_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.getOtpMobile(ctx_r22.basicInfoForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r12.basicInfoForm.get("phoneNo").invalid);
} }
function VideoVerificationComponent_mat_spinner_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 49);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 80);
} }
const _c0 = function (a0, a1, a2) { return { "bookedSlot": a0, "availableSlot": a1, "selectedClass": a2 }; };
function VideoVerificationComponent_div_91_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_div_91_div_2_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const time_r25 = ctx.$implicit; const i_r26 = ctx.index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.onSelectTime1(time_r25.time, i_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", time_r25)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c0, time_r25.booked, time_r25.available, ctx_r24.dateCollection.indexOf(time_r25.time) != -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.format24HrsTo12Hrs(time_r25.time));
} }
function VideoVerificationComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VideoVerificationComponent_div_91_div_2_Template, 4, 7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.TimeSolts);
} }
class VideoVerificationComponent {
    constructor(snack, router, videoService, api, dialogService, dialog, cdr, fb) {
        this.snack = snack;
        this.router = router;
        this.videoService = videoService;
        this.api = api;
        this.dialogService = dialogService;
        this.dialog = dialog;
        this.cdr = cdr;
        this.fb = fb;
        // selectTime1=['10:00 am','10:30 am','11:00 am'];
        // selectTime2=['11:30 am','12:00 pm','12:30 pm'];
        // selectTime3=['01:00 pm','01:30 pm','02:00 pm'];
        // selectTime4=['02:30 pm','03:00 pm','03:30 pm'];
        // selectTime5=['04:00 pm','04:30 pm','05:00 pm'];
        this.masterInfo = {};
        this.tellerId = 1;
        this.loggedInUser = 1;
        this.title = [
            'Mr',
            'Ms',
            'Mrs',
        ];
        this.TimeSolts = [];
        this.maxDate = new Date();
        this.minDate = new Date();
        this.dateCollection = [];
        this.count = 0;
        this.availableSlots = [];
        this.kycTimeOption = false;
        this.selectedIndex = 0;
        this.otpmodel = new _kyc_basic_information_kyc_basic_information_component__WEBPACK_IMPORTED_MODULE_7__["OtpModel"]();
        this.mobVerify = "Verify";
        this.emaillVerify = "Verify";
        this.maxDate.setDate(this.maxDate.getDate() + 7);
    }
    ngOnInit() {
        this.callingTimeslots();
        this.api.getIndex().subscribe(resp => {
            console.log(resp.index);
            this.tabIndex = resp.index;
            if (resp.index === 1) {
                this.assignValuesForTab2(this.tabIndex);
            }
            // TODO WITH MATTAB DISABLE CUSTOM LATER
            // this.tabGroup._tabs[resp.index].disabled = true;
        });
        this.basicInfoForm = this.fb.group({
            cifNumber: ['',],
            prefix: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            // primaryEmail: ['', [ Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            primaryEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
            phoneNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            scheduledDate: [''],
            scheduledTime: ['null']
        });
        this.link = "vide_link";
    }
    assignValuesForTab2(tabIndex) {
        this.tab2 = true;
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
    callingTimeslots() {
        this.TimeSolts = [
            {
                "time": "9:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "9:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "10:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "11:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "12:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "13:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "14:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "15:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:00",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "16:30",
                "available": true,
                "selected": false,
                "booked": false
            },
            {
                "time": "17:00",
                "available": true,
                "selected": false,
                "booked": false
            }
        ];
    }
    backToKyc() {
        this.dialogService.openKycVerificationMethod();
        this.router.navigateByUrl('others/Service');
    }
    onNextOfVideoVerification(form) {
        console.log(form.value);
        this.basicInfoForm = form.value;
        //  this.videoService.sendUserDetailsOFVideo(this.basicInfoForm);
        this.router.navigateByUrl('/video/schedule-appointment');
    }
    onSelectTime1(time, i) {
        console.log(i);
        this.count++;
        if (this.count > 1) {
            this.dateCollection = [];
            console.log(!this.TimeSolts[i].selected);
        }
        console.log("Time", time, i);
        this.TimeSolts[i].selected = !this.TimeSolts[i].selected;
        this.TimeSolts[i].available = !this.TimeSolts[i].available;
        console.log(this.TimeSolts[i].selected);
        const index = this.dateCollection.indexOf(time);
        if (index > -1 && !this.TimeSolts[i].selected) {
            this.dateCollection.splice(index, 1);
        }
        else if (index == -1 && this.TimeSolts[i].selected) {
            this.dateCollection.push(time);
            console.log(this.dateCollection);
        }
        this.showNext = true;
    }
    onNextOfSheduleAppointment() {
        console.log(this.basicInfoForm.value);
        this.icustCustVideoVerifyDto = this.basicInfoForm.value;
        this.icustCustVideoVerifyDto.scheduledDate = this.selectedDate;
        this.icustCustVideoVerifyDto.scheduledTime = this.dateCollection;
        this.icustCustVideoVerifyDto.tellerId = this.tellerId;
        this.icustCustVideoVerifyDto.loggedInUser = this.loggedInUser;
        console.log("icust", this.icustCustVideoVerifyDto);
        this.videoService.saveCustBasicInfoData(this.icustCustVideoVerifyDto).subscribe(data => {
            console.log("data link", data);
            this.link = data;
            const dialogRef = this.dialog.open(_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_4__["AppointmentComponent"], {
                data: { time: this.dateCollection, date: this.selectedDate, link: this.link }
            });
            dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed');
                // this.animal = result;
            });
            // this.previousStep(1);
            this.basicInfoForm.reset();
            this.selectedDate = null;
            this.TimeSolts = [];
            //  console.log("in video",this.link);
            this.cdr.markForCheck();
        }, err => {
            console.log(err.message);
        });
        this.cdr.markForCheck();
    }
    onSelect(event) {
        this.callingTimeslots();
        this.showSpinn = true;
        this.dateCollection = [];
        console.log(event);
        this.selectedDate = this.videoService.convertDate(event);
        console.log("selectedDate", this.selectedDate);
        this.api.gettingAvailableSlotsTeller(this.selectedDate, this.tellerId).subscribe((availableSlotsResp) => {
            console.log("Available Slots", availableSlotsResp);
            // availableSlotsResp[0].availableSlots
            if (availableSlotsResp) {
                this.showSpinn = false;
                this.kycTimeOption = true;
                availableSlotsResp.bookedSlots.forEach(element => {
                    const index = this.TimeSolts.map(x => x.time).indexOf(element);
                    if (index > -1) {
                        this.TimeSolts[index].available = false;
                        this.TimeSolts[index].booked = true;
                    }
                });
            }
        });
    }
    format24HrsTo12Hrs(time) {
        var formatted = moment__WEBPACK_IMPORTED_MODULE_11__(time, "HH:mm").format("LT");
        console.log("time", time, formatted);
        return formatted;
    }
    nextStep(tabIndex) {
        console.log(tabIndex);
        if (this.selectedIndex < 2) {
            this.selectedIndex = tabIndex + 1;
        }
    }
    previousStep(tabIndex) {
        console.log(tabIndex);
        if (this.selectedIndex > 0) {
            this.selectedIndex = tabIndex - 2;
        }
    }
    autofillDetails() {
        // this.basicInfoForm.reset();
        this.cifNumber = this.basicInfoForm.controls.cifNumber.value;
        if (this.cifNumber) {
            this.getallCustomerDetails();
        }
    }
    getOtp(email) {
        this.otpmodel.source = "customer";
        this.otpmodel.source_key = "email";
        this.otpmodel.source_value = email.primaryEmail;
        this.api.getOtp(this.otpmodel).subscribe((resp) => { });
        this.openDialogEmail(email.primaryEmail);
    }
    openDialogEmail(email) {
        const dialogRef = this.dialog.open(_fingerprint_authentication_fingerprint_authentication_component__WEBPACK_IMPORTED_MODULE_8__["FingerprintAuthenticationComponent"], {
            data: { number: email, type: "email id" },
            disableClose: true,
        });
        dialogRef.afterClosed().subscribe((submit) => { });
        this.emailsverify();
    }
    getallCustomerDetails() {
        console.log("CIF video verification ---- :: ", event);
        this.api.gettingCustomerDetails(this.cifNumber).subscribe((allCustomerResp) => {
            console.log("All Customer Details", allCustomerResp);
            if (allCustomerResp === null) {
                this.snack.open("Invalid CIF number!", "OK", {
                    duration: 4000,
                    verticalPosition: "top",
                    horizontalPosition: "right",
                });
                this.basicInfoForm.controls.prefix.setValue('');
                this.basicInfoForm.controls.firstName.setValue('');
                this.basicInfoForm.controls.lastName.setValue('');
                this.basicInfoForm.controls.primaryEmail.setValue('');
                this.basicInfoForm.controls.phoneNo.setValue('');
            }
            this.masterInfo = allCustomerResp.customerInfoList;
            if (this.masterInfo) {
                this.setCustValues();
            }
            this.mobileverify();
            this.emailsverify();
        });
    }
    setCustValues() {
        this.basicInfoForm.controls.prefix.setValue(this.masterInfo[0].prefix);
        this.basicInfoForm.controls.firstName.setValue(this.masterInfo[0].firstName);
        this.basicInfoForm.controls.lastName.setValue(this.masterInfo[0].lastName);
        this.basicInfoForm.controls.primaryEmail.setValue(this.masterInfo[0].primaryEmailAdress);
        this.basicInfoForm.controls.phoneNo.setValue(this.masterInfo[0].phoneNumber);
    }
    getOtpMobile(email) {
        this.otpmodel.source = "customer";
        this.otpmodel.source_key = "mobile";
        this.otpmodel.source_value = email.phoneNo;
        this.api.getOtp(this.otpmodel).subscribe((resp) => { });
        this.openDialog1(email.phoneNo);
    }
    openDialog1(phoneNUmber) {
        const dialogRef = this.dialog.open(_fingerprint_authentication_fingerprint_authentication_component__WEBPACK_IMPORTED_MODULE_8__["FingerprintAuthenticationComponent"], {
            data: { number: phoneNUmber, type: "Mobile Number" },
            disableClose: true,
        });
        dialogRef.afterClosed().subscribe((submit) => { });
        this.mobileverify();
    }
    mobileverify() {
        this.api.getverify().subscribe(resp => {
            console.log(resp);
            if (resp) {
                this.mobVerify = resp.verify;
            }
        }, (err) => {
            this.mobVerify = "Verify";
        });
    }
    emailsverify() {
        this.api.getverify1().subscribe(resp => {
            console.log(resp);
            if (resp) {
                this.emaillVerify = resp.verify;
            }
        }, (err) => {
            this.emaillVerify = "Verify";
        });
    }
}
VideoVerificationComponent.ɵfac = function VideoVerificationComponent_Factory(t) { return new (t || VideoVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
VideoVerificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoVerificationComponent, selectors: [["app-video-verification"]], decls: 97, vars: 23, consts: [[1, "head", "mt-32"], [1, "main-head"], [1, "basic-container"], ["mat-align-tabs", "start", 3, "selectedIndex"], ["tabgroup", ""], ["label", "Basic Information", 3, "disabled"], [1, "matCard"], [1, "basicInformation"], [1, "line"], [3, "formGroup"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxLayoutGap", "20px"], ["fxFlex", "50", "fxLayout", "row", "fxLayoutAlign", "start center"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "name", "cifNumber", "formControlName", "cifNumber", "onlyNumber", "", "placeholder", "CIF Number"], [1, "fetchButton", 3, "click"], ["fxFlex", "50"], ["name", "prefix", "formControlName", "prefix", "required", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["fxFlex", "100", "fxLayoutGap", "60px"], ["fxFlex", "45.5", "fxLayout", "row", "fxLayoutAlign", "start center"], ["appearance", "outline", 1, "full-width", 2, "width", "515px"], ["matInput", "", "name", "fname", "formControlName", "firstName", "required", "", "placeholder", "First Name", 3, "keypress"], ["matInput", "", "name", "lname", "formControlName", "lastName", "required", "", "placeholder", "Last Name", 3, "keypress"], ["matInput", "", "name", "primaryEmail", "type", "email", "formControlName", "primaryEmail", "required", "", "placeholder", "Primary Email"], ["mat-button", "", "class", "verifyButton", 3, "hidden", "click", 4, "ngIf"], ["matInput", "", "name", "phoneNo", "maxlength", "10", "formControlName", "phoneNo", "required", "", "placeholder", "Phone Number", 3, "keypress"], ["mat-button", "", "class", "verifyButton1", 3, "hidden", "click", 4, "ngIf"], [1, "button"], ["mat-button", "", 1, "Back", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "disabled", "click"], ["label", "Schedule Appointment", 3, "disabled"], ["fxLayout", "column wrap"], ["fxFlex", "100"], ["fxFlex", "35"], [1, "textFont"], [1, "demo-inline-calendar-card"], [3, "selected", "maxDate", "minDate", "selectedChange"], ["fxFlex", "60"], [1, "paraFont"], ["class", "spinner", 3, "diameter", 4, "ngIf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "button1"], ["mat-stroked-button", "", "id", "n", 1, "Next", 3, "disabled", "click"], [3, "value"], ["mat-button", "", 1, "verifyButton", 3, "hidden", "click"], ["mat-button", "", 1, "verifyButton1", 3, "hidden", "click"], [1, "spinner", 3, "diameter"], ["class", "timeboxes", 4, "ngFor", "ngForOf"], [1, "timeboxes"], [3, "name", "ngClass", "click"], ["fxLayoutAlign", "center stretch", 1, "matContent"]], template: function VideoVerificationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "KYC Screening | Video Verification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab-group", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Basic Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CIF Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_Template_p_click_21_listener() { return ctx.autofillDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Fetch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Prefix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, VideoVerificationComponent_mat_option_30_Template, 2, 2, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, VideoVerificationComponent_mat_error_31_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VideoVerificationComponent_Template_input_keypress_38_listener($event) { return ctx.letterOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, VideoVerificationComponent_mat_error_39_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VideoVerificationComponent_Template_input_keypress_44_listener($event) { return ctx.letterOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, VideoVerificationComponent_mat_error_45_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Primary Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, VideoVerificationComponent_mat_error_53_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, VideoVerificationComponent_mat_error_54_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, VideoVerificationComponent_button_55_Template, 2, 1, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, VideoVerificationComponent_button_56_Template, 2, 1, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VideoVerificationComponent_Template_input_keypress_61_listener($event) { return ctx._keyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, VideoVerificationComponent_mat_error_62_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, VideoVerificationComponent_mat_error_63_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, VideoVerificationComponent_button_64_Template, 2, 1, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, VideoVerificationComponent_button_65_Template, 2, 1, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_Template_button_click_67_listener() { return ctx.backToKyc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_Template_button_click_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.nextStep(_r0.selectedIndex); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-tab", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Schedule Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Select Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-card", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-calendar", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function VideoVerificationComponent_Template_mat_calendar_selectedChange_84_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Select Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Pick the date and then choose the available time slots.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, VideoVerificationComponent_mat_spinner_90_Template, 1, 1, "mat-spinner", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, VideoVerificationComponent_div_91_Template, 3, 1, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_Template_button_click_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.previousStep(_r0.selectedIndex); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_Template_button_click_95_listener() { return ctx.onNextOfSheduleAppointment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tab1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.basicInfoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicInfoForm.get("prefix").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicInfoForm.get("firstName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicInfoForm.get("lastName").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicInfoForm.get("primaryEmail").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicInfoForm.get("primaryEmail").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emaillVerify == "Verify" || ctx.emaillVerify == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emaillVerify == "verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicInfoForm.get("phoneNo").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicInfoForm.get("phoneNo").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobVerify == "Verify" || ctx.mobVerify == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobVerify == "verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.basicInfoForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tab2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.selectedDate)("maxDate", ctx.maxDate)("minDate", ctx.minDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.kycTimeOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.showNext);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _only_number_directive__WEBPACK_IMPORTED_MODULE_17__["OnlyNumberDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatCalendar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatError"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__["DefaultClassDirective"]], styles: ["F.breadcrumb[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 40px;\n  width: 100%;\n  background-color: white;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 180px;\n}\n\napp-kyc-verification[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.verify[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\n.fetchButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  text-decoration: underline;\n  margin-left: 10px;\n}\n\n.verifyButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  height: 10px;\n}\n\n.verifyButton1[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  height: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 6%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\nmat-tab-group[_ngcontent-%COMP%] {\n  padding-left: 3%;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 60vh;\n  border: 1px solid black;\n  padding: 10px 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2), .flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  margin-top: 5px;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  flex: 1;\n}\n\n.formField1[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.formField[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n}\n\n.cardwidth[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.inputMatcard[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  max-width: 500px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 10px;\n  margin-top: 10px;\n}\n\n.inputMatcard1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 12px;\n  width: 100%;\n}\n\n.inputMatcard2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  width: 20px;\n}\n\nmat-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.form1[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 13%;\n  padding-right: 14%;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  max-width: 950px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin: 10px auto 0 auto;\n  margin-bottom: 3%;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.alignment[_ngcontent-%COMP%] {\n  border-style: none !important;\n  outline: none;\n}\n\n#index[_ngcontent-%COMP%] {\n  max-width: 120px;\n}\n\n.line[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n  margin-left: 10px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 80%;\n  font-weight: 600;\n}\n\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus {\n  background: red;\n}\n\n.mat-tab-label-active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n  .mat-tab-label-active {\n  color: #6988f6 !important;\n}\n\n.verification[_ngcontent-%COMP%] {\n  float: right;\n  color: #2a59e7;\n}\n\n  .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: #6988f6 !important;\n  height: 4px;\n  width: 21pc !important;\n  margin-left: 2%;\n}\n\n  .egret-blue .mat-tab-label, .egret-blue[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  width: 21pc;\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.87);\n}\n\nmat-tab-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.mat-select-arrow-wrapper[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  width: 40px !important;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  background-color: gray;\n  color: white;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.green[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n.red[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n.selectTime[_ngcontent-%COMP%] {\n  height: 42px;\n  width: 168px;\n  text-align: center;\n  border: none;\n  cursor: pointer;\n  background-color: white;\n  border-radius: 10px;\n  border: #d8d3d3 solid 1px;\n  margin-bottom: 20px;\n}\n\n.matContent[_ngcontent-%COMP%] {\n  font-size: 12px;\n  justify-content: center;\n  color: gray;\n}\n\n.button1[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 13%;\n  padding-right: 14%;\n}\n\n.line[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  color: darkgrey;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.Next[_ngcontent-%COMP%]:focus {\n  background-color: #426af5;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  max-width: 1250px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin: 10px auto 0 auto;\n  margin-bottom: 3%;\n}\n\n.demo-inline-calendar-card[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n .egret-navy .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: white;\n}\n\n.paraFont[_ngcontent-%COMP%] {\n  color: #949494;\n  font-family: 'Manrope';\n  font-size: 11px;\n}\n\n.textFont[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: 'Manrope';\n  font-size: 14px;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%]   mat-calendar-period-button[_ngcontent-%COMP%]   mat-button[_ngcontent-%COMP%]   mat-button-base.mat-button-wrapper[_ngcontent-%COMP%] {\n  margin-left: 90px !important;\n}\n\n .mat-calendar-header {\n  padding-top: 0px !important;\n  padding-right: 8px !important;\n  padding-bottom: 0px !important;\n  padding-left: 0px !important;\n  background-color: #456EFE;\n  color: white;\n  border-radius: 10px;\n}\n\n .egret-blue .mat-calendar-body-selected {\n  background-color: #FE6700;\n  color: white;\n  border-radius: 10px;\n}\n\n .egret-blue .mat-calendar-arrow {\n  border-top-color: white !important;\n}\n\n.selectTime[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  background-color: red;\n  padding: 10px;\n}\n\n .mat-button-toggle-group {\n  border: 0px;\n}\n\n#mat-button-toggle-2[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  margin-left: 30px;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  background-color: #FE6700;\n}\n\nmat-card.selectTime[_ngcontent-%COMP%]:active {\n  background-color: yellow;\n}\n\n.Back[_ngcontent-%COMP%] {\n  background-color: gray;\n  color: white;\n}\n\n.timeboxes[_ngcontent-%COMP%] {\n  width: 33%;\n  display: inline-block;\n  text-align: center;\n}\n\n.bookedSlot[_ngcontent-%COMP%] {\n  background-color: #d4d4d4 !important;\n  pointer-events: none;\n}\n\n.availableSlot[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  cursor: pointer;\n  color: #7c7c7c !important;\n}\n\n.selectedClass[_ngcontent-%COMP%] {\n  color: #f7f7f7 !important;\n  background-image: linear-gradient(to right, #FE6700, #FE8430, #FEA96E) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlkZW8tdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0FBQTNCOztBQVFFO0VBQ0UsWUFBVztBQUxmOztBQU9FO0VBQ0UsY0FBYztBQUpsQjs7QUFNRTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBSGY7O0FBS0U7RUFDRSxZQUFZO0FBRmhCOztBQUlFO0VBQ0UsY0FBYztFQUNkLHlCQUF3QjtFQUN4QixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQURyQjs7QUFJRTtFQUNFLGNBQWM7RUFDZCx5QkFBd0I7RUFDeEIsZUFBZTtFQU1mLFlBQVk7QUFOaEI7O0FBU0U7RUFDRSxjQUFjO0VBQ2QseUJBQXdCO0VBQ3hCLGVBQWU7RUFHZixZQUFZO0FBUmhCOztBQVdFO0VBQ0UsYUFBYTtBQVJqQjs7QUFZRTtFQUNFLFlBQVk7QUFUaEI7O0FBV0U7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQVJ2Qjs7QUFVRTtFQUNFLGdCQUFnQjtBQVBwQjs7QUFVRTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQVAxQjs7QUFTRTtFQUVFLGFBQWE7RUFDYixzQkFBc0I7QUFQMUI7O0FBU0U7O0VBRUUsZUFBZTtBQU5uQjs7QUFRRTtFQUNFLE9BQU87QUFMWDs7QUFVRTtFQUNFLFdBQVc7QUFQZjs7QUFTRTtFQUVFLFlBQVk7RUFDWixXQUFXO0FBUGY7O0FBWUU7RUFDQyxZQUFZO0FBVGY7O0FBV0U7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFGQUdDO0VBQ0QsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdCQUFnQjtBQWRwQjs7QUFnQkU7RUFDRSxZQUFZO0VBRVoscUZBR0M7RUFDRCwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVztBQXBCZjs7QUF1QkU7RUFDRSxZQUFZO0VBRVoscUZBR0M7RUFDRCwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUloQixXQUFXO0FBOUJmOztBQWdDRTtFQUNFLGVBQWU7QUE3Qm5COztBQWlDRTtFQUNFLGFBQWE7RUFFYixTQUFTO0VBQ1QsZUFBZTtFQUNmLDhCQUE4QjtBQS9CbEM7O0FBaUNFO0VBQ0UsYUFBYTtFQUViLFNBQVM7RUFDVCxlQUFlO0FBL0JuQjs7QUFtQ0U7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFoQ3RCOztBQW1DRTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQWhDckI7O0FBbUNFO0VBQ0UsWUFBWTtBQWhDaEI7O0FBbUNFO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7QUFoQ2pCOztBQW1DRTtFQUNFLGdCQUFlO0FBaENuQjs7QUFxQ0U7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBbUI7RUFDbkIsdUJBQUE7RUFDQSx5QkFBeUI7RUFDekIsV0FBVztFQUVYLGNBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFnQjtBQW5DcEI7O0FBcUNFO0VBQ0UsVUFBVTtFQUVWLGdCQUFnQjtBQW5DcEI7O0FBeUNFOzs7O0VBSUUsZUFBZTtBQXRDbkI7O0FBd0NFO0VBQ0UsWUFBWTtBQXJDaEI7O0FBdUNFO0VBQ0UseUJBQW9DO0FBcEN4Qzs7QUFzQ0U7RUFDRSxZQUFZO0VBQ1osY0FBdUI7QUFuQzNCOztBQTZDRTtFQUNFLG9DQUErQztFQUMvQyxXQUFXO0VBQ1gsc0JBQXNCO0VBR3RCLGVBQWU7QUE1Q25COztBQThDRTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsMEJBQTBCO0FBM0M5Qjs7QUE2Q0U7RUFDRSxjQUFjO0FBMUNsQjs7QUErQ0U7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQTVDMUI7O0FBOENFO0VBRUUseUJBQXdCO0VBQ3hCLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVc7RUFDWCxtQkFBbUI7QUE1Q3ZCOztBQThDRTtFQUNFLHlCQUF3QjtFQUN4QixrQkFBaUI7RUFDakIsWUFBVztFQUNYLHlCQUFpQztFQUNqQyxZQUFXO0VBQ1gsbUJBQW1CO0FBM0N2Qjs7QUE4Q0U7RUFBTyxTQUFRO0VBQUMsVUFBUztFQUMzQixpQkFBaUI7QUF6Q2pCOztBQTBDQTtFQUFhLHdCQUFzQjtBQXRDbkM7O0FBMkNBO0VBQ0UsdUJBQXVCO0FBeEN6Qjs7QUEyQ0E7RUFDRSxxQkFBcUI7QUF4Q3ZCOztBQTBDQTtFQUVFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBb0M7RUFDcEMsbUJBQW1CO0FBeENyQjs7QUE0Q0E7RUFFQyxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVU7QUExQ1g7O0FBK0NBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBNUNwQjs7QUErQ0E7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBbUI7RUFDbkIsdUJBQUE7RUFDQSx5QkFBeUI7RUFDekIsV0FBVztFQUVYLGNBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQTdDakI7O0FBK0NBO0VBRUUseUJBQXdCO0VBQ3hCLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsZUFBYztFQUNkLG1CQUFtQjtBQTdDckI7O0FBK0NBO0VBQ0UseUJBQXdCO0VBQ3hCLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gseUJBQWlDO0VBQ2pDLFlBQVc7RUFDWCxtQkFBbUI7QUE1Q3JCOztBQThDQTtFQUNFLHlCQUFpQztBQTNDbkM7O0FBNkNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBMUNuQjs7QUE0Q0E7RUFDRSxZQUFZO0FBekNkOztBQTJDQTtFQUVBLG1CQUFtQjtBQXpDbkI7O0FBNENBO0VBQ0UsY0FBYztFQUNkLHNCQUFxQjtFQUNyQixlQUFlO0FBekNqQjs7QUEyQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXFCO0VBQ3JCLGVBQWU7QUF4Q2pCOztBQTZDQTtFQUVBLDRCQUE0QjtBQTNDNUI7O0FBZ0RBO0VBQ0UsMkJBQTJCO0VBQ3pCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBRzlCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0FBL0NyQjs7QUFzREE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtBQW5EckI7O0FBc0RBO0VBRUUsa0NBQWtDO0FBcERwQzs7QUE2REE7RUFFRSxxQkFBb0I7RUFDcEIsYUFBWTtBQTNEZDs7QUErREE7RUFFRSxXQUFXO0FBN0RiOztBQStEQTtFQUVFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUE3RG5COztBQWdFQTtFQUNFLHlCQUF5QjtBQTdEM0I7O0FBK0RBO0VBRUUsd0JBQXdCO0FBN0QxQjs7QUErREE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQTVEZDs7QUErREE7RUFDRSxVQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQTVEcEI7O0FBOERBO0VBRUEsb0NBQThDO0VBQzlDLG9CQUFvQjtBQTVEcEI7O0FBK0RBO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWM7RUFDZCx5QkFBeUI7QUE1RDNCOztBQThEQTtFQUNFLHlCQUF5QjtFQUN6QixpRkFBK0U7QUEzRGpGIiwiZmlsZSI6InZpZGVvLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkYuYnJlYWRjcnVtYiB7XHJcblxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgfVxyXG4gIC8vIC5oZWFkIHtcclxuICAvLyAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIFxyXG4gIC8vICAgLy8gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgLy8gfVxyXG4gIC5mdWxsLXdpZHRoe1xyXG4gICAgd2lkdGg6MTgwcHg7XHJcbiAgfVxyXG4gIGFwcC1reWMtdmVyaWZpY2F0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG4gIC5hcHAtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudmVyaWZ5e1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAuZmV0Y2hCdXR0b257XHJcbiAgICBjb2xvcjogIzQ1NkVGRTtcclxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0JztcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnZlcmlmeUJ1dHRvbntcclxuICAgIGNvbG9yOiAjNDU2RUZFO1xyXG4gICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnO1xyXG4gICAgZm9udC1zaXplOiAxMnB4OyBcclxuICAgLy8gbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgIC8vZmxvYXQ6IHJpZ2h0O1xyXG4gICAvL3BhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICBcclxuICAgIC8vIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnZlcmlmeUJ1dHRvbjF7XHJcbiAgICBjb2xvcjogIzQ1NkVGRTtcclxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0JztcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgXHJcbiAgIC8vIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gICAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc3Bpbm5lcntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAuYmFzaWMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgLm1haW4taGVhZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYlO1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuICBtYXQtdGFiLWdyb3VwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAuZmxleC1jb250YWluZXIgKiB7XHJcbiAgICAvLyB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAuZmxleC1jb250YWluZXIgOm50aC1jaGlsZCgyKSxcclxuICAuZmxleC1jb250YWluZXIgOm50aC1jaGlsZCgzKSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIC5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDMpIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG4gIC8vICAgLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoNCkge1xyXG4gIC8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgLy8gICB9XHJcbiAgLmZvcm1GaWVsZDEge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG4gIC5mb3JtRmllbGQge1xyXG4gICAgLy8gd2lkdGg6MjAwcHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgIC8vICAgZ2FwOiAyMHB4O1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICAuY2FyZHdpZHRoe1xyXG4gICB3aWR0aDogNTAwcHg7XHJcbiAgfVxyXG4gIC5pbnB1dE1hdGNhcmQge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSlcclxuICAgICk7XHJcbiAgICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIFxyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAuaW5wdXRNYXRjYXJkMSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAvLyBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KVxyXG4gICAgKTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgLy8gcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5pbnB1dE1hdGNhcmQyIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIC8vIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpXHJcbiAgICApO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIC8vIHBhZGRpbmc6IDEycHg7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC8vIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gIH1cclxuICBtYXQtaGludHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcblxyXG5cclxuICAuZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLmZvcm0xIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZ2FwOiA1MHB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG4gIC5idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEzJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE0JTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAubWF0Q2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDk1MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgfVxyXG5cclxuICAuZmxleC1ncm93LTEge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICAuYWxpZ25tZW50IHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgI2luZGV4e1xyXG4gICAgbWF4LXdpZHRoOjEyMHB4O1xyXG4gIH1cclxuICAvLyAuYmFzaWNJbmZvcm1hdGlvbntcclxuICAvLyAgIG9wYWNpdHk6IDkwJTtcclxuICAvLyB9XHJcbiAgLmxpbmUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJvcmRlcjogdGhpY2s7XHJcbiAgICAvKiBoZWlnaHQ6IDNweDsgKi9cclxuICAgIC8qIGxpbmUtaGVpZ2h0OiAzcHg7ICovXHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLyogYm9yZGVyLXdpZHRoOiAzcHg7ICovXHJcbiAgICBib3JkZXItYmxvY2std2lkdGg6IHVuc2V0O1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICAvLyB3aWR0aDogMjBweDtcclxuICAgIGNvbG9yOiByZ2IoMTA1LCAxMzYsIDI0Nik7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogaW5pdGlhbDtcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgfVxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICAvLyBjb2xvcjogIzM3NDY2NDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAvLyAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIC8vICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpXHJcbiAgICAvLyApO1xyXG4gIH1cclxuICAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbDpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3VzLFxyXG4gIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyxcclxuICAubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMsXHJcbiAgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gIH1cclxuICAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICAgIGNvbG9yOiByZ2IoMTA1LCAxMzYsIDI0NikgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnZlcmlmaWNhdGlvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogcmdiKDQyLCA4OSwgMjMxKTtcclxuICB9XHJcbiAgLy8gLm1hdC1pbmstYmFye1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgICAgYm90dG9tOiAwO1xyXG4gIC8vICAgICBoZWlnaHQ6IDJweDtcclxuICAvLyAgICAgdHJhbnNpdGlvbjogNTAwbXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpO1xyXG4gIC8vICAgICBoZWlnaHQ6IDRweDtcclxuICAvLyAgICAgY29sb3I6XHJcbiAgLy8gfVxyXG4gIDo6bmctZGVlcCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTM2LCAyNDYpICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHdpZHRoOiAyMXBjICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICBcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5lZ3JldC1ibHVlIC5tYXQtdGFiLWxhYmVsLCAuZWdyZXQtYmx1ZSAubWF0LXRhYi1saW5rIHtcclxuICAgIHdpZHRoOiAyMXBjO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbn1cclxuICBtYXQtdGFiLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gIH1cclxuICAvLyBtYXQtb3B0aW9ue1xyXG4gIC8vICAgd2lkdGg6IDIwcHg7XHJcbiAgLy8gfVxyXG4gIC5tYXQtc2VsZWN0LWFycm93LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuQmFja3tcclxuICBcclxuICAgIG1hcmdpbjoxMnB4IDBweCAxMnB4IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0Oi0xNSU7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbiAgfVxyXG4gIC5OZXh0e1xyXG4gICAgbWFyZ2luOjEycHggMHB4IDEycHggMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0Oi0xMyU7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwxMDYsMjQ1KTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTVweDtcclxuICB9XHJcblxyXG4gIGlucHV0IHtib3JkZXI6MDtvdXRsaW5lOjA7XHJcbmZvbnQtd2VpZ2h0OiBib2xkfVxyXG5pbnB1dDpmb2N1cyB7b3V0bGluZTpub25lIWltcG9ydGFudDt9XHJcbi8vIC5jYXJkLG1hdC1sYWJlbHtcclxuLy8gbWFyZ2luIDoxMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi5ncmVlbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG4uc2VsZWN0VGltZVxyXG57XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIHdpZHRoOiAxNjhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogcmdiKDIxNiwgMjExLCAyMTEpIHNvbGlkIDFweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICBcclxufVxyXG4ubWF0Q29udGVudFxyXG57XHJcbiBmb250LXNpemU6IDEycHg7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuIGNvbG9yOmdyYXk7XHJcbiBcclxuIFxyXG59XHJcblxyXG4uYnV0dG9uMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGdhcDogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctbGVmdDogMTMlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE0JTtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubGluZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXI6IHRoaWNrO1xyXG4gIC8qIGhlaWdodDogM3B4OyAqL1xyXG4gIC8qIGxpbmUtaGVpZ2h0OiAzcHg7ICovXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAvKiBib3JkZXItd2lkdGg6IDNweDsgKi9cclxuICBib3JkZXItYmxvY2std2lkdGg6IHVuc2V0O1xyXG4gIGNvbG9yOiBibHVlO1xyXG4gIC8vIHdpZHRoOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAxMzYsIDI0Nik7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogaW5pdGlhbDtcclxufVxyXG4uQmFja3tcclxuICBcclxuICBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6LTE1JTtcclxuICB3aWR0aDoxNTBweDtcclxuICBjb2xvcjpkYXJrZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG59XHJcbi5OZXh0e1xyXG4gIG1hcmdpbjoxMnB4IDBweCAxMnB4IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6LTEzJTtcclxuICB3aWR0aDoxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsMTA2LDI0NSk7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTVweDtcclxufVxyXG4uTmV4dDpmb2N1c3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsMTA2LDI0NSk7XHJcbn1cclxuLm1hdENhcmQge1xyXG4gIG1heC13aWR0aDogMTI1MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn1cclxuLmRlbW8taW5saW5lLWNhbGVuZGFyLWNhcmQge1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG46Om5nLWRlZXAuZWdyZXQtbmF2eSAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbClcclxue1xyXG5ib3JkZXItY29sb3I6IHdoaXRlO1xyXG4vLyBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuLnBhcmFGb250e1xyXG4gIGNvbG9yOiAjOTQ5NDk0O1xyXG4gIGZvbnQtZmFtaWx5OidNYW5yb3BlJztcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuLnRleHRGb250e1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtZmFtaWx5OidNYW5yb3BlJztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuIFxyXG5cclxuXHJcbi5tYXQtZm9jdXMtaW5kaWNhdG9yIG1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9uIG1hdC1idXR0b24gbWF0LWJ1dHRvbi1iYXNlLm1hdC1idXR0b24td3JhcHBlclxyXG57XHJcbm1hcmdpbi1sZWZ0OiA5MHB4ICFpbXBvcnRhbnQ7XHJcblxyXG5cclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1jYWxlbmRhci1oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTZFRkU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLy8gaGVpZ2h0OiA0MnB4O1xyXG4gIC8vIHdpZHRoOiAzNTRweDtcclxuXHJcblxyXG59XHJcblxyXG46Om5nLWRlZXAuZWdyZXQtYmx1ZSAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRTY3MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5lZ3JldC1ibHVlIC5tYXQtY2FsZW5kYXItYXJyb3dcclxue1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gOjpuZy1kZWVwLm1hdC1mb2N1cy1pbmRpY2F0b3IgbWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0LWJ1dHRvbi1iYXNlXHJcbi8vIHtcclxuLy8gcGFkZGluZy1sZWZ0OiA5MHB4O1xyXG4vLyBmbG9hdDogbGVmdDtcclxuLy8gfVxyXG5cclxuXHJcbi5zZWxlY3RUaW1lIDpmb2N1c1xyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG59XHJcbi8vIDo6bmctZGVlcC5lZ3JldC1ibHVlIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsIC5lZ3JldC1ibHVlIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkXHJcbi8vIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZFxyXG46Om5nLWRlZXAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXBcclxue1xyXG4gIGJvcmRlcjowcHggO1xyXG59XHJcbiNtYXQtYnV0dG9uLXRvZ2dsZS0yXHJcbntcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcblxyXG59XHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFNjcwMDtcclxufVxyXG5tYXQtY2FyZC5zZWxlY3RUaW1lOmFjdGl2ZVxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59XHJcbi5CYWNre1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGltZWJveGVze1xyXG4gIHdpZHRoOjMzJTsgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJvb2tlZFNsb3R7XHJcbi8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzljOWM5YyAsI2M0YzRjNCwjZjVmNWY1KSFpbXBvcnRhbnQ7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIxMiwgMjEyKSFpbXBvcnRhbnQ7XHJcbnBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4vLyBvcGFjaXR5OiAuNSAhaW1wb3J0YW50O1xyXG59XHJcbi5hdmFpbGFibGVTbG90e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxuICBjb2xvcjogIzdjN2M3YyAhaW1wb3J0YW50O1xyXG59XHJcbi5zZWxlY3RlZENsYXNze1xyXG4gIGNvbG9yOiAjZjdmN2Y3ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkU2NzAwICwjRkU4NDMwLCNGRUE5NkUpIWltcG9ydGFudDsgXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoVerificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video-verification',
                templateUrl: './video-verification.component.html',
                styleUrls: ['./video-verification.component.scss']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }, { type: app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "D+DX":
/*!**************************************************************************************!*\
  !*** ./src/app/views/others/video-verification/appointment/appointment.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentComponent", function() { return AppointmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video.service */ "ztLX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/dialogs/dialog.service */ "laYw");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
















function AppointmentComponent_mat_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Time Slots: ", time_r1, "");
} }
class AppointmentComponent {
    constructor(dialogRef, videoservice, router, dialog, dialogService, data) {
        this.dialogRef = dialogRef;
        this.videoservice = videoservice;
        this.router = router;
        this.dialog = dialog;
        this.dialogService = dialogService;
        this.data = data;
        this.date = new Date();
    }
    ngOnInit() {
        console.log(this.data);
        this.url = this.data.link.generatedLink;
        if (this.url === undefined) {
            this.url = this.data.link;
        }
        console.log(this.url);
        this.timeSlots = Object.entries(this.data);
        console.log(this.timeSlots);
        this.dateSelected = this.timeSlots[1][1];
        // for(let date of this.timeSlots[1])
        // {
        //  this.dateSelected=date;
        // }
        // for(let time of this.timeSlots[0])
        // {
        //   // this.timeSlotsSeected=time[0];
        // }
    }
    callJoin() {
        this.videoservice.getAppointmentLinkDetails(this.data.link.firstName, this.data.link.lastName, this.data.link.phoneNumber).subscribe(appointmentLinkDetails => {
            console.log(appointmentLinkDetails);
        });
        // const dialogRef = this.dialog.open(CalljoinComponent, {
        //   width: '100%',height:'80%'
        //   // data: {time:this.dateCollection}
        //   // data: {time: this.dateCollection, date: this.selectedDate}
        // });
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log('The dialog was closed');
        //   // this.animal = result;
        // });
    }
    closeClick() {
        console.log("close click");
        // [routerLink]="['/others/kyc']" 
        this.dialogRef.close();
        // this.router.navigateByUrl('/others/kyc'); 
    }
    done() {
        this.dialogRef.close();
        this.router.navigateByUrl('/others/kyc-method');
        this.dialogService.openKycVerificationMethod();
    }
}
AppointmentComponent.ɵfac = function AppointmentComponent_Factory(t) { return new (t || AppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
AppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppointmentComponent, selectors: [["app-appointment"]], decls: 27, vars: 7, consts: [["fxLayout", "column wrap", 1, "main"], ["fxFlex", "100", "fxLayoutAlign", "end stretch"], ["id", "close", 1, "mat-18", 3, "click"], ["fxFlex", "100", "fxLayoutAlign", "center stretch", "fxLayoutGap", "space-around", "id", "scanDiv"], ["id", "scan"], ["fxFlex", "50", "fxLayoutAlign", "center stretch", "id", "proceedDiv"], ["id", "hold"], ["id", "hold", 4, "ngFor", "ngForOf"], ["fxFlex", "50", "fxLayoutAlign", "center stretch"], ["fxFlex", "25", "fxLayoutAlign", "center stretch"], ["src", "assets/images/completed.PNG", 1, "coImg"], ["fxLayoutAlign", "center stretch"], [1, "link"], ["target", "_blank", 3, "href"], ["fxFlex", "50", "fxLayoutAlign", "center stretch", 1, "divButton"], ["mat-raised-button", "", 1, "btn", 3, "click"]], template: function AppointmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentComponent_Template_mat_icon_click_2_listener() { return ctx.closeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Your Appointment Link is active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppointmentComponent_mat_label_12_Template, 2, 1, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentComponent_Template_button_click_25_listener() { return ctx.done(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date Selected: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 4, ctx.dateSelected, "MM/dd/yy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeSlots[0][1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.url);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".btn[_ngcontent-%COMP%] {\n  width: 27%;\n  border-radius: 20px;\n  background-color: #3298f6;\n  color: white;\n}\n\n.divButton[_ngcontent-%COMP%] {\n  margin-bottom: 2%;\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 600px;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n\nprogress[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20px;\n}\n\n#fClr[_ngcontent-%COMP%] {\n  margin-left: 17%;\n  margin-top: 15px;\n  border-radius: 5px;\n  height: 100px;\n}\n\n.contentClass[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #a1a1a1;\n  font-family: sans-serif;\n}\n\n.titleClass[_ngcontent-%COMP%] {\n  font-size: x-large;\n  font-family: sans-serif;\n  color: #426af5;\n}\n\n.closeIconClass[_ngcontent-%COMP%] {\n  font-size: medium;\n  color: #999999;\n}\n\n.coImg[_ngcontent-%COMP%] {\n  max-width: 200px;\n  margin-bottom: 10px;\n}\n\n.greyButton[_ngcontent-%COMP%] {\n  border-radius: 90px;\n  width: 16%;\n  background-color: #A0A0A0;\n  color: white;\n  border-style: none;\n  font-size: 7px;\n  padding: 10px 0;\n  box-shadow: 0 3pt 6pt #00000029;\n}\n\n.btnScanClass[_ngcontent-%COMP%] {\n  line-height: 30px !important;\n  border-color: #456EFE;\n  background-color: #456EFE !important;\n  color: white;\n  border-radius: 20px;\n  width: 160px;\n  height: 35px;\n  font-size: small;\n  font-family: monospace;\n}\n\n.contentDiv[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  padding: 20px !important;\n}\n\n.divTitleClass[_ngcontent-%COMP%] {\n  height: 60px;\n}\n\n.fingeralgn[_ngcontent-%COMP%] {\n  font-size: 80px;\n  color: #6EBDF9;\n}\n\n.imagesDiv[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-bottom: 20px;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n\n#clr[_ngcontent-%COMP%] {\n  height: 160px;\n  width: 180px;\n  margin-bottom: 30px;\n  background-color: #F4F8F7;\n}\n\n#fclr[_ngcontent-%COMP%] {\n  color: lightgray;\n  font-size: 60px;\n  margin-top: 18px;\n  margin-left: 30px;\n}\n\n.scanDiv[_ngcontent-%COMP%] {\n  margin-top: 7%;\n}\n\n#scan[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-top: 7%;\n  margin-bottom: 3%;\n}\n\n#proceedDiv[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  margin-bottom: 3%;\n}\n\n#progressBarDiv[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n#file[_ngcontent-%COMP%] {\n  height: 10px;\n  color: white;\n  border-radius: 10px;\n  border: 1px solid grey;\n}\n\n#thumb[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  flex-flow: nowrap;\n  margin-bottom: 20px;\n}\n\n#fingerprintSpan[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n  font-size: 12px;\n  margin-bottom: 4px;\n}\n\n#close[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  height: 4px;\n  width: 4px;\n  display: flex;\n  justify-content: flex-end;\n  top: 0px;\n  left: 0px;\n  margin-right: -6%;\n  margin-top: -3%;\n}\n\n.line[_ngcontent-%COMP%] {\n  border: thick;\n  width: 70px;\n  \n  border-block-width: revert;\n  \n  background-color: #FE6700;\n  border: 1px solid #FE6700;\n  border-radius: 5px;\n  \n  margin-bottom: 10px;\n}\n\n.hold[_ngcontent-%COMP%] {\n  margin-top: 3%;\n  color: #426af5;\n  font-weight: 10px;\n  font-weight: bold;\n}\n\n@media only screen and (max-width: 791px) and (min-width: 545px) {\n  .main[_ngcontent-%COMP%] {\n    width: 400px;\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n\n@media only screen and (max-width: 544px) and (min-width: 200px) {\n  .main[_ngcontent-%COMP%] {\n    width: 200px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFwcG9pbnRtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksVUFBUztFQUVULG1CQUFtQjtFQUNwQix5QkFBbUM7RUFDbkMsWUFBWTtBQURmOztBQU1BO0VBQ0EsaUJBQWlCO0FBSGpCOztBQUtBO0VBQ0ssWUFBVztFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFGdkI7O0FBSUE7RUFFSSxXQUFXO0VBQ1gsWUFBWTtBQUZoQjs7QUFPQTtFQUVJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFMakI7O0FBT0E7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUdkLHVCQUF1QjtBQU4zQjs7QUFRQztFQUNHLGtCQUFrQjtFQUVqQix1QkFBdUI7RUFDdkIsY0FBcUI7QUFOMUI7O0FBU0M7RUFDSSxpQkFBaUI7RUFDakIsY0FBYztBQU5uQjs7QUFRQztFQUNJLGdCQUFlO0VBQ2YsbUJBQW1CO0FBTHhCOztBQU9DO0VBQ0ksbUJBQW1CO0VBQ25CLFVBQVM7RUFDVCx5QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLCtCQUErQjtBQUpwQzs7QUFNQztFQUNJLDRCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBSDNCOztBQUtDO0VBQ0ksb0JBQW9CO0VBQ3BCLHdCQUF3QjtBQUY3Qjs7QUFJQztFQUNJLFlBQVk7QUFEakI7O0FBSUE7RUFDSSxlQUFlO0VBQ2YsY0FBZTtBQURuQjs7QUFJQTtFQUNJLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFEeEI7O0FBSUE7RUFDSSx1QkFBdUI7QUFEM0I7O0FBR0E7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFBN0I7O0FBRUE7RUFDSSxnQkFBZTtFQUNmLGVBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ3JCOztBQUNBO0VBQ0ksY0FBYTtBQUVqQjs7QUFBQTtFQUNJLGVBQWM7RUFDZCxjQUFhO0VBQ2IsaUJBQWdCO0FBR3BCOztBQUFBO0VBQ0csY0FBYztFQUNkLGlCQUFpQjtBQUdwQjs7QUFEQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFJdkI7O0FBRkE7RUFDSSxZQUFXO0VBQUMsWUFBWTtFQUN4QixtQkFBbUI7RUFDbkIsc0JBQXFCO0FBTXpCOztBQUhBO0VBQ0ksOEJBQThCO0VBQzlCLGlCQUFpQjtFQUFDLG1CQUFtQjtBQU96Qzs7QUFMQTtFQUNJLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBYztFQUFDLGtCQUFrQjtBQVNyQzs7QUFQQTtFQUNJLDRCQUE0QjtFQUc1QixXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsUUFBUTtFQUNSLFNBQVM7RUFHVCxpQkFBaUI7RUFDakIsZUFBZTtBQU1uQjs7QUFKQTtFQUNJLGFBQWE7RUFDYixXQUFXO0VBQ1gseUJBQUE7RUFDQSwwQkFBMEI7RUFHMUIsaUJBQUE7RUFDQSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBQTtFQUNBLG1CQUFtQjtBQUt2Qjs7QUFDQTtFQUNJLGNBQWE7RUFDYixjQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBRXJCOztBQUVBO0VBQ0k7SUFDSSxZQUFXO0lBRVosa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUF4QjtBQUNGOztBQUVBO0VBQ0k7SUFDSSxZQUFXO0lBRVosaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUF2QjtBQUNGIiwiZmlsZSI6ImFwcG9pbnRtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0blxyXG57XHJcbiAgICB3aWR0aDoyNyU7XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgMTUyLCAyNDYpO1xyXG4gICBjb2xvcjogd2hpdGU7XHJcblxyXG5cclxuXHJcbn1cclxuLmRpdkJ1dHRvbntcclxubWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuLm1haW57XHJcbiAgICAgd2lkdGg6NjAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG59XHJcbnByb2dyZXNzXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkyZGVnLCAjREQ5MzkzIDAlLCAjNDU2RUZDIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxufVxyXG5cclxuXHJcbiNmQ2xye1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiAxNyU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG4uY29udGVudENsYXNze1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgY29sb3I6ICNhMWExYTE7XHJcbiAgICAgLy8gY29sb3I6ICNCN0I3Qjc7XHJcbiAgICAgLy8gZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiB9XHJcbiAudGl0bGVDbGFzc3tcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIC8vICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgY29sb3I6cmdiKDY2LDEwNiwyNDUpO1xyXG4gICAgIC8vIGNvbG9yOiAjODg4ODg4O1xyXG4gfVxyXG4gLmNsb3NlSWNvbkNsYXNze1xyXG4gICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gfVxyXG4gLmNvSW1ne1xyXG4gICAgIG1heC13aWR0aDoyMDBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gfVxyXG4gLmdyZXlCdXR0b257XHJcbiAgICAgYm9yZGVyLXJhZGl1czogOTBweDtcclxuICAgICB3aWR0aDoxNiU7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjojQTBBMEEwO1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICAgZm9udC1zaXplOiA3cHg7XHJcbiAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiB9XHJcbiAuYnRuU2NhbkNsYXNze1xyXG4gICAgIGxpbmUtaGVpZ2h0OjMwcHggIWltcG9ydGFudDtcclxuICAgICBib3JkZXItY29sb3I6ICM0NTZFRkU7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NkVGRSAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgIHdpZHRoOiAxNjBweDtcclxuICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gfVxyXG4gLmNvbnRlbnREaXZ7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLmRpdlRpdGxlQ2xhc3N7XHJcbiAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gfVxyXG5cclxuLmZpbmdlcmFsZ257XHJcbiAgICBmb250LXNpemU6IDgwcHg7IFxyXG4gICAgY29sb3I6ICM2RUJERjkgO1xyXG59XHJcblxyXG4uaW1hZ2VzRGl2e1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmgtMTAwe1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuI2NscntcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjhGNztcclxufVxyXG4jZmNscntcclxuICAgIGNvbG9yOmxpZ2h0Z3JheTtcclxuICAgIGZvbnQtc2l6ZTo2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5zY2FuRGl2e1xyXG4gICAgbWFyZ2luLXRvcDo3JTtcclxufVxyXG4jc2NhbntcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgbWFyZ2luLXRvcDo3JTtcclxuICAgIG1hcmdpbi1ib3R0b206MyU7XHJcblxyXG59XHJcbiNwcm9jZWVkRGl2e1xyXG4gICBtYXJnaW4tdG9wOiA1JTtcclxuICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn1cclxuI3Byb2dyZXNzQmFyRGl2e1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuI2ZpbGV7XHJcbiAgICBoZWlnaHQ6MTBweDtjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBncmV5O1xyXG59XHJcblxyXG4jdGh1bWJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LWZsb3c6IG5vd3JhcDttYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiNmaW5nZXJwcmludFNwYW57XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOjEycHg7bWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbiNjbG9zZXtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHdpZHRoOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAtNCUgIWltcG9ydGFudDtcclxuICAgIC8vIG1hcmdpbi10b3A6IC0zJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNiU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMyU7XHJcbn1cclxuLmxpbmUge1xyXG4gICAgYm9yZGVyOiB0aGljazsgXHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIC8qIGJvcmRlci1zdHlsZTogc29saWQ7ICovXHJcbiAgICBib3JkZXItYmxvY2std2lkdGg6IHJldmVydDtcclxuICAgIC8vIGNvbG9yOiBibHVlO1xyXG4gICAgLy8gY29sb3I6ICM2OTg4ZjY7XHJcbiAgICAvKiB3aWR0aDogNDBweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRTY3MDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkU2NzAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLyogbWFyZ2luOiBpbml0aWFsOyAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbi8vICA6Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuXHJcblxyXG4uaG9sZHtcclxuICAgIG1hcmdpbi10b3A6MyU7XHJcbiAgICBjb2xvcjpyZ2IoNjYsMTA2LDI0NSk7XHJcbiAgICBmb250LXdlaWdodDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLy8gb3BhY2l0eTo2MCU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkxcHgpIGFuZCAobWluLXdpZHRoOiA1NDVweCl7XHJcbiAgICAubWFpbntcclxuICAgICAgICB3aWR0aDo0MDBweDtcclxuICAgICAgICBcclxuICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0NHB4KSBhbmQgKG1pbi13aWR0aDogMjAwcHgpe1xyXG4gICAgLm1haW57XHJcbiAgICAgICAgd2lkdGg6MjAwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgfVxyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-appointment',
                templateUrl: './appointment.component.html',
                styleUrls: ['./appointment.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "ZQ1n":
/*!******************************************************************************!*\
  !*** ./src/app/views/others/video-verification/video-verification.module.ts ***!
  \******************************************************************************/
/*! exports provided: VideoVerificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoVerificationModule", function() { return VideoVerificationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-highcharts */ "mE01");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./schedule-appointment/schedule-appointment.component */ "lR1S");
/* harmony import */ var _video_verification_routing__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./video-verification.routing */ "traM");
/* harmony import */ var _video_verification_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./video-verification.component */ "83s1");
/* harmony import */ var _video_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./video.directive */ "goEz");
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./appointment/appointment.component */ "D+DX");
/* harmony import */ var _calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./calljoin/calljoin.component */ "68+F");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _only_number_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./only-number.directive */ "Zpjb");




































class VideoVerificationModule {
}
VideoVerificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VideoVerificationModule });
VideoVerificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function VideoVerificationModule_Factory(t) { return new (t || VideoVerificationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_25__["PerfectScrollbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            angular_highcharts__WEBPACK_IMPORTED_MODULE_24__["ChartModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"].forChild(_video_verification_routing__WEBPACK_IMPORTED_MODULE_27__["VideoRoutes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VideoVerificationModule, { declarations: [_schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_26__["ScheduleAppointmentComponent"],
        _video_verification_component__WEBPACK_IMPORTED_MODULE_28__["VideoVerificationComponent"],
        _video_directive__WEBPACK_IMPORTED_MODULE_29__["VideoDirective"],
        _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_30__["AppointmentComponent"],
        _calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_31__["CalljoinComponent"],
        _only_number_directive__WEBPACK_IMPORTED_MODULE_33__["OnlyNumberDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_25__["PerfectScrollbarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        angular_highcharts__WEBPACK_IMPORTED_MODULE_24__["ChartModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VideoVerificationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_25__["PerfectScrollbarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    angular_highcharts__WEBPACK_IMPORTED_MODULE_24__["ChartModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"].forChild(_video_verification_routing__WEBPACK_IMPORTED_MODULE_27__["VideoRoutes"])
                ],
                declarations: [
                    _schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_26__["ScheduleAppointmentComponent"],
                    _video_verification_component__WEBPACK_IMPORTED_MODULE_28__["VideoVerificationComponent"],
                    _video_directive__WEBPACK_IMPORTED_MODULE_29__["VideoDirective"],
                    _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_30__["AppointmentComponent"],
                    _calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_31__["CalljoinComponent"],
                    _only_number_directive__WEBPACK_IMPORTED_MODULE_33__["OnlyNumberDirective"],
                ],
                entryComponents: []
            }]
    }], null, null); })();


/***/ }),

/***/ "Zpjb":
/*!**************************************************************************!*\
  !*** ./src/app/views/others/video-verification/only-number.directive.ts ***!
  \**************************************************************************/
/*! exports provided: CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR, OnlyNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyNumberDirective", function() { return OnlyNumberDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");



const CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => OnlyNumberDirective),
    multi: true
};
class OnlyNumberDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    onInputChange(value) {
        const filteredValue = filterValue(value);
        this.updateTextInput(filteredValue, this.value !== filteredValue);
    }
    onBlur() {
        this.onTouched();
    }
    updateTextInput(value, propagateChange) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
        if (propagateChange) {
            this.onChange(value);
        }
        this.value = value;
    }
    // ControlValueAccessor Interface
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    }
    writeValue(value) {
        value = value ? String(value) : '';
        this.updateTextInput(value, false);
    }
}
OnlyNumberDirective.ɵfac = function OnlyNumberDirective_Factory(t) { return new (t || OnlyNumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
OnlyNumberDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: OnlyNumberDirective, selectors: [["", "onlyNumber", ""]], hostBindings: function OnlyNumberDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OnlyNumberDirective_input_HostBindingHandler($event) { return ctx.onInputChange($event.target.value); })("blur", function OnlyNumberDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlyNumberDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[onlyNumber]',
                providers: [CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event.target.value']]
        }], onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['blur']
        }] }); })();
function filterValue(value) {
    return value.replace(/[^0-9]*/g, '');
}


/***/ }),

/***/ "goEz":
/*!********************************************************************!*\
  !*** ./src/app/views/others/video-verification/video.directive.ts ***!
  \********************************************************************/
/*! exports provided: VideoDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDirective", function() { return VideoDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");



class VideoDirective {
    constructor(render, el) {
        this.render = render;
        this.el = el;
        this.backgroundColor = "transparent";
        this.clr = "white";
    }
    ngOnInit() {
        console.log(this.name);
    }
    ClickType() {
        console.log("clcick");
        this.backgroundColor = "#FE6700";
        this.clr = "white";
    }
}
VideoDirective.ɵfac = function VideoDirective_Factory(t) { return new (t || VideoDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
VideoDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: VideoDirective, selectors: [["", "appVideo", ""]], hostVars: 4, hostBindings: function VideoDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoDirective_click_HostBindingHandler() { return ctx.ClickType(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.backgroundColor)("color", ctx.clr);
    } }, inputs: { name: "name" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appVideo]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.backgroundColor']
        }], clr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.color']
        }], ClickType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "lR1S":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/others/video-verification/schedule-appointment/schedule-appointment.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ScheduleAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleAppointmentComponent", function() { return ScheduleAppointmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../appointment/appointment.component */ "D+DX");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _video_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../video.directive */ "goEz");
















function ScheduleAppointmentComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_26_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const time_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSelectTime1(time_r6, ctx_r7.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", time_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](time_r6);
} }
function ScheduleAppointmentComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_29_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const time2_r9 = ctx.$implicit; const i_r10 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onSelectTime1(time2_r9, i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time2_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](time2_r9);
} }
function ScheduleAppointmentComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_32_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const time3_r13 = ctx.$implicit; const i_r14 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onSelectTime1(time3_r13, i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time3_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](time3_r13);
} }
function ScheduleAppointmentComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_35_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const time4_r17 = ctx.$implicit; const i_r18 = ctx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onSelectTime1(time4_r17, i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time4_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](time4_r17);
} }
function ScheduleAppointmentComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_38_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const time5_r21 = ctx.$implicit; const i_r22 = ctx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.onSelectTime1(time5_r21, i_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time5_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](time5_r21);
} }
class ScheduleAppointmentComponent {
    constructor(router, cdr, dialog, el) {
        this.router = router;
        this.cdr = cdr;
        this.dialog = dialog;
        this.el = el;
        this.dateCollection = [];
        this.toggle = true;
        this.status = 'Enable';
        this.showNext = false;
        this.count = 0;
        this.selectTime1 = ['10:00 am', '10:30 am', '11:00 am'];
        this.selectTime2 = ['11:30 am', '12:00 pm', '12:30 pm'];
        this.selectTime3 = ['01:00 pm', '01:30 pm', '02:00 pm'];
        this.selectTime4 = ['02:30 pm', '03:00 pm', '03:30 pm'];
        this.selectTime5 = ['04:00 pm', '04:30 pm', '05:00 pm'];
        this.completeTimeSolte = ['10:00 am', '10:30 am', '11:00 am', '11:30 am', '12:00 pm', '12:30 pm',
            '01:00 pm', '01:30 pm', '02:00 pm', '02:30 pm', '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm', '05:00 pm'];
    }
    ngOnInit() {
        date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: null, disabled: true });
        // this.subscription = this.videoService.getUserDetailsOfVideo().subscribe(message => {
        //   console.log("video msg",message);
        //   this.dataFromBasicInfo=Object.assign(message);
        //   console.log("this info",this.dataFromBasicInfo);
        //  console.log("firstName", this.dataFromBasicInfo.text.firstName);
        //   this.cdr.markForCheck();
        //   // if (message) {
        //   //   this.messages.push(message);
        //   // } else {
        //   //   // clear messages when empty message received
        //   //   this.messages = [];
        //   // }
        // });
        console.log(this.el);
    }
    onSelectTime1(time, i) {
        console.log(time, i);
        // this.IcustCutomerVideoVerification.scheduledTime=time;
        this.dateCollection.push(time);
        console.log(this.dateCollection);
        this.showNext = true;
        this.count++;
        // if(this.count>1)
        // {
        //   console.log("inside if",this.count);
        // document.getElementById('example').style.backgroundColor="white";
        // }
    }
    onNextOfSheduleAppointment() {
        console.log(this.dataFromBasicInfo);
        this.cdr.markForCheck();
        // this.videoService.saveCustBasicInfoData(this.IcustCutomerVideoVerification).subscribe(data=>
        //   {
        //     console.log(data);
        //   })
        document.getElementById('n').style.backgroundColor = 'rgb(66,106,245)';
        const dialogRef = this.dialog.open(_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_3__["AppointmentComponent"], {
            // width: '250px',
            // data: {time:this.dateCollection}
            data: { time: this.dateCollection, date: this.selectedDate }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            // this.animal = result;
        });
        // this.IcustCutomerVideoVerification.firstName=this.dataFromBasicInfo.text.firstName;
        // this.IcustCutomerVideoVerification.lastName=this.dataFromBasicInfo.text.elastName;
        // this.IcustCutomerVideoVerification.prefix=this.dataFromBasicInfo.text.prefix;
        // this.IcustCutomerVideoVerification.primaryEmail=this.dataFromBasicInfo.text.primaryEmail;
        // this.IcustCutomerVideoVerification.phoneNo=this.dataFromBasicInfo.text.phoneNo;
    }
    onChangeTab(event) {
        const tab = event.tab.textLabel;
        console.log(tab);
        if (tab === "Schedule Appointment") {
            this.router.navigateByUrl('/video/schedule-appointment');
        }
        if (tab === "Basic Information") {
            this.router.navigateByUrl('/video/verification');
        }
    }
    onSelect(event) {
        console.log(event);
        this.selectedDate = event._d;
        console.log(this.selectedDate);
        // this.IcustCutomerVideoVerification.scheduledDate=this.selectedDate;
    }
    ngDoCheck() {
        // this.completeTimeSolte.forEach(data=>
        //   {
        //     console.log(data);
        //     this.dateCollection.includes(data)
        //   })
    }
}
ScheduleAppointmentComponent.ɵfac = function ScheduleAppointmentComponent_Factory(t) { return new (t || ScheduleAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ScheduleAppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScheduleAppointmentComponent, selectors: [["app-schedule-appointment"]], decls: 44, vars: 7, consts: [[1, "head"], [1, "main-head"], [1, "basic-container"], ["mat-align-tabs", "start", 3, "selectedIndex", "selectedTabChange"], ["label", "Basic Information"], ["label", "Schedule Appointment"], [1, "matCard"], [1, "basicInformation"], [1, "line"], ["fxLayout", "column wrap"], ["fxFlex", "100"], ["fxFlex", "40"], [1, "demo-inline-calendar-card"], [3, "selected", "selectedChange"], ["fxFlex", "60"], ["btn", ""], ["fxLayout", "row wrap"], ["fxFlex", "30", 4, "ngFor", "ngForOf"], [1, "button1"], ["mat-button", "", 1, "Back"], ["mat-stroked-button", "", "id", "n", 1, "Next", 3, "click"], ["fxFlex", "30"], ["appVideo", "", "id", "example", 3, "name", "click"], ["fxLayoutAlign", "center stretch", 1, "matContent"], ["appVideo", "", "id", "example", 3, "click"]], template: function ScheduleAppointmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "KYC Screening | Video Verification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function ScheduleAppointmentComponent_Template_mat_tab_group_selectedTabChange_4_listener($event) { return ctx.onChangeTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Basic Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Select Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-calendar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function ScheduleAppointmentComponent_Template_mat_calendar_selectedChange_18_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Select Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ScheduleAppointmentComponent_div_26_Template, 4, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ScheduleAppointmentComponent_div_29_Template, 4, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ScheduleAppointmentComponent_div_32_Template, 4, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ScheduleAppointmentComponent_div_35_Template, 4, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ScheduleAppointmentComponent_div_38_Template, 4, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_Template_button_click_42_listener() { return ctx.onNextOfSheduleAppointment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.selectedDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectTime1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectTime2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectTime3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectTime4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectTime5);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatCalendar"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _video_directive__WEBPACK_IMPORTED_MODULE_11__["VideoDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"]], styles: [".selectTime[_ngcontent-%COMP%] {\n  height: 42px;\n  width: 168px;\n  text-align: center;\n  border: none;\n  cursor: pointer;\n  background-color: white;\n  border-radius: 10px;\n  border: #d8d3d3 solid 1px;\n  margin-bottom: 20px;\n}\n\n.matContent[_ngcontent-%COMP%] {\n  font-size: 12px;\n  justify-content: center;\n  color: gray;\n}\n\n.button1[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n  background-color: white;\n}\n\n.line[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  color: darkgrey;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.Next[_ngcontent-%COMP%]:focus {\n  background-color: #426af5;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  max-width: 1250px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin: 10px auto 0 auto;\n  margin-bottom: 3%;\n}\n\n.demo-inline-calendar-card[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n .egret-navy .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: white;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%]   mat-calendar-period-button[_ngcontent-%COMP%]   mat-button[_ngcontent-%COMP%]   mat-button-base.mat-button-wrapper[_ngcontent-%COMP%] {\n  margin-left: 90px !important;\n}\n\n .mat-calendar-header {\n  padding-top: 0px !important;\n  padding-right: 8px !important;\n  padding-bottom: 0px !important;\n  padding-left: 0px !important;\n  background-color: #456EFE;\n  color: white;\n  border-radius: 10px;\n}\n\n .egret-blue .mat-calendar-body-selected {\n  background-color: #FE6700;\n  color: white;\n  border-radius: 10px;\n}\n\n .egret-blue .mat-calendar-arrow {\n  border-top-color: white !important;\n}\n\n.selectTime[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  background-color: red;\n  padding: 10px;\n}\n\n .mat-button-toggle-group {\n  border: 0px;\n}\n\n#mat-button-toggle-2[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  margin-left: 30px;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  background-color: #FE6700;\n}\n\nmat-card.selectTime[_ngcontent-%COMP%]:active {\n  background-color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjaGVkdWxlLWFwcG9pbnRtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUFvQztFQUNwQyxtQkFBbUI7QUFBckI7O0FBSUE7RUFFQyxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVU7QUFGWDs7QUFPQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFKekI7O0FBTUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBbUI7RUFDbkIsdUJBQUE7RUFDQSx5QkFBeUI7RUFDekIsV0FBVztFQUVYLGNBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUpqQjs7QUFNQTtFQUVFLHlCQUF3QjtFQUN4QixpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLGVBQWM7RUFDZCxtQkFBbUI7QUFKckI7O0FBTUE7RUFDRSx5QkFBd0I7RUFDeEIsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCx5QkFBaUM7RUFDakMsWUFBVztFQUNYLG1CQUFtQjtBQUhyQjs7QUFLQTtFQUNFLHlCQUFpQztBQUZuQzs7QUFJQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQURuQjs7QUFHQTtFQUNFLFlBQVk7QUFBZDs7QUFFQTtFQUVBLG1CQUFtQjtBQUFuQjs7QUFNQTtFQUVBLDRCQUE0QjtBQUo1Qjs7QUFTQTtFQUNFLDJCQUEyQjtFQUN6Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUc5Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtBQVJyQjs7QUFlQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0FBWnJCOztBQWVBO0VBRUUsa0NBQWtDO0FBYnBDOztBQXNCQTtFQUVFLHFCQUFvQjtFQUNwQixhQUFZO0FBcEJkOztBQXdCQTtFQUVFLFdBQVc7QUF0QmI7O0FBd0JBO0VBRUUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQXRCbkI7O0FBeUJBO0VBQ0UseUJBQXlCO0FBdEIzQjs7QUF3QkE7RUFFRSx3QkFBd0I7QUF0QjFCIiwiZmlsZSI6InNjaGVkdWxlLWFwcG9pbnRtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdFRpbWVcclxue1xyXG4gIGhlaWdodDogNDJweDtcclxuICB3aWR0aDogMTY4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IHJnYigyMTYsIDIxMSwgMjExKSBzb2xpZCAxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgXHJcbn1cclxuLm1hdENvbnRlbnRcclxue1xyXG4gZm9udC1zaXplOiAxMnB4O1xyXG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiBjb2xvcjpncmF5O1xyXG4gXHJcbiBcclxufVxyXG5cclxuLmJ1dHRvbjEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDExJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmxpbmUge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyOiB0aGljaztcclxuICAvKiBoZWlnaHQ6IDNweDsgKi9cclxuICAvKiBsaW5lLWhlaWdodDogM3B4OyAqL1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLyogYm9yZGVyLXdpZHRoOiAzcHg7ICovXHJcbiAgYm9yZGVyLWJsb2NrLXdpZHRoOiB1bnNldDtcclxuICBjb2xvcjogYmx1ZTtcclxuICAvLyB3aWR0aDogMjBweDtcclxuICBjb2xvcjogcmdiKDEwNSwgMTM2LCAyNDYpO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IGluaXRpYWw7XHJcbn1cclxuLkJhY2t7XHJcbiAgXHJcbiAgbWFyZ2luOjEycHggMHB4IDEycHggMHB4O1xyXG4gIG1hcmdpbi1sZWZ0Oi0xNSU7XHJcbiAgd2lkdGg6MTUwcHg7XHJcbiAgY29sb3I6ZGFya2dyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcclxufVxyXG4uTmV4dHtcclxuICBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0Oi0xMyU7XHJcbiAgd2lkdGg6MTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LDEwNiwyNDUpO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbn1cclxuLk5leHQ6Zm9jdXN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LDEwNiwyNDUpO1xyXG59XHJcbi5tYXRDYXJkIHtcclxuICBtYXgtd2lkdGg6IDEyNTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbi5kZW1vLWlubGluZS1jYWxlbmRhci1jYXJkIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuOjpuZy1kZWVwLmVncmV0LW5hdnkgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpXHJcbntcclxuYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuLy8gYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcbiBcclxuXHJcblxyXG4ubWF0LWZvY3VzLWluZGljYXRvciBtYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiBtYXQtYnV0dG9uIG1hdC1idXR0b24tYmFzZS5tYXQtYnV0dG9uLXdyYXBwZXJcclxue1xyXG5tYXJnaW4tbGVmdDogOTBweCAhaW1wb3J0YW50O1xyXG5cclxuXHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtY2FsZW5kYXItaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2RUZFO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC8vIGhlaWdodDogNDJweDtcclxuICAvLyB3aWR0aDogMzU0cHg7XHJcblxyXG5cclxufVxyXG5cclxuOjpuZy1kZWVwLmVncmV0LWJsdWUgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkU2NzAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAuZWdyZXQtYmx1ZSAubWF0LWNhbGVuZGFyLWFycm93XHJcbntcclxuICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi8vIDo6bmctZGVlcC5tYXQtZm9jdXMtaW5kaWNhdG9yIG1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b24gbWF0LWljb24tYnV0dG9uIG1hdC1idXR0b24tYmFzZVxyXG4vLyB7XHJcbi8vIHBhZGRpbmctbGVmdDogOTBweDtcclxuLy8gZmxvYXQ6IGxlZnQ7XHJcbi8vIH1cclxuXHJcblxyXG4uc2VsZWN0VGltZSA6Zm9jdXNcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gIHBhZGRpbmc6MTBweDtcclxufVxyXG4vLyA6Om5nLWRlZXAuZWdyZXQtYmx1ZSAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLCAuZWdyZXQtYmx1ZSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZFxyXG4vLyAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmRcclxuOjpuZy1kZWVwLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwXHJcbntcclxuICBib3JkZXI6MHB4IDtcclxufVxyXG4jbWF0LWJ1dHRvbi10b2dnbGUtMlxyXG57XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG5cclxufVxyXG5idXR0b246Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRTY3MDA7XHJcbn1cclxubWF0LWNhcmQuc2VsZWN0VGltZTphY3RpdmVcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScheduleAppointmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-schedule-appointment',
                templateUrl: './schedule-appointment.component.html',
                styleUrls: ['./schedule-appointment.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "traM":
/*!*******************************************************************************!*\
  !*** ./src/app/views/others/video-verification/video-verification.routing.ts ***!
  \*******************************************************************************/
/*! exports provided: VideoRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoRoutes", function() { return VideoRoutes; });
/* harmony import */ var _schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule-appointment/schedule-appointment.component */ "lR1S");
/* harmony import */ var _video_verification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-verification.component */ "83s1");
/* harmony import */ var _calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calljoin/calljoin.component */ "68+F");



const VideoRoutes = [
    {
        path: 'verification',
        component: _video_verification_component__WEBPACK_IMPORTED_MODULE_1__["VideoVerificationComponent"],
    },
    {
        path: 'schedule-appointment',
        component: _schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_0__["ScheduleAppointmentComponent"]
    },
    {
        path: 'calljoin',
        component: _calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_2__["CalljoinComponent"]
    }
];


/***/ }),

/***/ "ztLX":
/*!******************************************************************!*\
  !*** ./src/app/views/others/video-verification/video.service.ts ***!
  \******************************************************************/
/*! exports provided: API_URL, VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var app_config_app_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/app.constant */ "ngOV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);







const API_URL = app_config_app_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].baseURL;
class VideoService {
    constructor(http) {
        this.http = http;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    sendUserDetailsOFVideo(message) {
        this.subject.next(message);
    }
    getUserDetailsOfVideo() {
        return this.subject.asObservable();
    }
    saveCustBasicInfoData(icustCustVideoVerifyDto) {
        return this.http.post(`${API_URL}/icust-video-verify/save`, icustCustVideoVerifyDto);
    }
    getAppointmentLinkDetails(firstName, lastName, phoneNumber) {
        return this.http.get(`${API_URL}/icust-video-verify/appointment/${firstName}/${lastName}/${phoneNumber}`);
    }
    convertDate(value) {
        let date = moment__WEBPACK_IMPORTED_MODULE_4__(value).format('YYYY-MM-DD');
        console.log("date", date);
        if (date)
            return date;
    }
}
VideoService.ɵfac = function VideoService_Factory(t) { return new (t || VideoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
VideoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VideoService, factory: VideoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=views-others-video-verification-video-verification-module-es2015.js.map