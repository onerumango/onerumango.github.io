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
/* harmony import */ var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/services/data.service */ "iiaH");
/* harmony import */ var app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/shared/services/application-entry-stage.service */ "qMRc");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ "ura0");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _only_number_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./only-number.directive */ "Zpjb");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");










































const _c0 = ["profileFile"];
function VideoVerificationComponent_form_12_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/images/no-image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function VideoVerificationComponent_form_12_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 105);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function VideoVerificationComponent_form_12_mat_option_31_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 4, option_r47 == null ? null : option_r47.firstName, 0, 1)), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 10, option_r47 == null ? null : option_r47.lastName, 0, 1)), " ");
} }
function VideoVerificationComponent_form_12_mat_option_31_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", option_r47 == null ? null : option_r47.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function VideoVerificationComponent_form_12_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VideoVerificationComponent_form_12_mat_option_31_div_3_Template, 7, 14, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VideoVerificationComponent_form_12_mat_option_31_div_4_Template, 2, 1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r47.customerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (option_r47 == null ? null : option_r47.profileImage) == "not_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (option_r47 == null ? null : option_r47.profileImage) != "not_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, option_r47 == null ? null : option_r47.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, option_r47 == null ? null : option_r47.middleName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, option_r47 == null ? null : option_r47.lastName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" #", option_r47 == null ? null : option_r47.cifNumber, "");
} }
function VideoVerificationComponent_form_12_p_33_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_form_12_p_33_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.autofillDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fetch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_spinner_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 119);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 40);
} }
function VideoVerificationComponent_form_12_mat_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r54);
} }
function VideoVerificationComponent_form_12_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Prefix ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 Prefix and Gender does not match! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_error_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter First Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_error_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_error_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Date Of Birth ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_option_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", status_r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", status_r55, " ");
} }
function VideoVerificationComponent_form_12_mat_error_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Marital Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_option_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gender_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gender_r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gender_r56);
} }
function VideoVerificationComponent_form_12_mat_error_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_error_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 Prefix and Gender does not match! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_option_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nation_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", nation_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nation_r57);
} }
function VideoVerificationComponent_form_12_mat_error_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Nationality ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_hint_112_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_form_12_mat_hint_112_Template_mat_hint_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r58.getOtp(ctx_r58.basicInfoForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r26.emailVerify, "");
} }
function VideoVerificationComponent_form_12_mat_error_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Primary Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_error_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter valid email address! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_hint_120_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_form_12_mat_hint_120_Template_mat_hint_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r60.getOtpMobile(ctx_r60.basicInfoForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r29.mobVerify, " ");
} }
function VideoVerificationComponent_form_12_mat_error_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_error_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile number must be 10 digits. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_error_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 \u00A0 Please Enter Correct Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_radio_button_130_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VideoVerificationComponent_form_12_mat_radio_button_130_Template_mat_radio_button_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r64.onChange(ctx_r64.basicInfoForm.controls.permanentAddress, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", option_r62.checked)("value", option_r62.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", option_r62.name, " ");
} }
function VideoVerificationComponent_form_12_mat_error_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Address Line 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_error_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Address Line 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_option_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Resi_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", Resi_r66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](Resi_r66);
} }
function VideoVerificationComponent_form_12_mat_error_163_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Residence Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_option_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r67, "");
} }
function VideoVerificationComponent_form_12_mat_error_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_error_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter vaild Zip Code!(5-10 digits) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_h5_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter valid Zip Code!(5-10 digits) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_option_191_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r68, "");
} }
function VideoVerificationComponent_form_12_mat_error_192_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_mat_option_201_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r69, "");
} }
function VideoVerificationComponent_form_12_mat_error_202_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_div_203_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Address Line 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_div_203_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Enter Address Line 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_div_203_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Resi_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", Resi_r82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](Resi_r82);
} }
function VideoVerificationComponent_form_12_div_203_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Residence Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_div_203_mat_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r83, "");
} }
function VideoVerificationComponent_form_12_div_203_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_div_203_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter vaild Zip Code!(5-10 digits) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_div_203_h5_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter valid Zip Code!(5-10 digits) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_div_203_mat_option_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r84, "");
} }
function VideoVerificationComponent_form_12_div_203_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoVerificationComponent_form_12_div_203_mat_option_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r85, "");
} }
function VideoVerificationComponent_form_12_div_203_mat_error_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "errbd": a0 }; };
function VideoVerificationComponent_form_12_div_203_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Permanent Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Address Line 1*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, VideoVerificationComponent_form_12_div_203_mat_error_13_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Address Line 2*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "textarea", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, VideoVerificationComponent_form_12_div_203_mat_error_20_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Residence Type*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-select", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, VideoVerificationComponent_form_12_div_203_mat_option_30_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, VideoVerificationComponent_form_12_div_203_mat_error_31_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Country*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-select", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VideoVerificationComponent_form_12_div_203_Template_mat_select_selectionChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r86.getPerStateName($event.value, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, VideoVerificationComponent_form_12_div_203_mat_option_40_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, VideoVerificationComponent_form_12_div_203_mat_error_41_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Zip Code*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function VideoVerificationComponent_form_12_div_203_Template_input_keyup_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r88.isAllSameDigit($event, 1); })("change", function VideoVerificationComponent_form_12_div_203_Template_input_change_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r89.getCityandStateByZipcode(ctx_r89.basicInfoForm.get("permanentAddress.country").value, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, VideoVerificationComponent_form_12_div_203_mat_error_48_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, VideoVerificationComponent_form_12_div_203_h5_49_Template, 2, 0, "h5", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "State*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-select", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VideoVerificationComponent_form_12_div_203_Template_mat_select_selectionChange_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r90.onStateChange("permanent"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, VideoVerificationComponent_form_12_div_203_mat_option_59_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, VideoVerificationComponent_form_12_div_203_mat_error_60_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "City*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-select", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VideoVerificationComponent_form_12_div_203_Template_mat_select_selectionChange_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r91.onCityChange("permanent"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, VideoVerificationComponent_form_12_div_203_mat_option_69_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, VideoVerificationComponent_form_12_div_203_mat_error_70_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, !ctx_r46.basicInfoForm.get("permanentAddress.address1").valid && ctx_r46.basicInfoForm.get("permanentAddress.address1").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r46.basicInfoForm.get("permanentAddress.address1").valid && ctx_r46.basicInfoForm.get("permanentAddress.address1").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, !ctx_r46.basicInfoForm.get("permanentAddress.address2").valid && ctx_r46.basicInfoForm.get("permanentAddress.address2").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r46.basicInfoForm.get("permanentAddress.address2").valid && ctx_r46.basicInfoForm.get("permanentAddress.address2").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, !ctx_r46.basicInfoForm.get("permanentAddress.residenceType").valid && ctx_r46.basicInfoForm.get("permanentAddress.residenceType").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r46.Residences);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r46.basicInfoForm.get("permanentAddress.residenceType").valid && ctx_r46.basicInfoForm.get("permanentAddress.residenceType").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c1, !ctx_r46.basicInfoForm.get("permanentAddress.country").valid && ctx_r46.basicInfoForm.get("permanentAddress.country").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r46.countrys);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r46.basicInfoForm.get("permanentAddress.country").valid && ctx_r46.basicInfoForm.get("permanentAddress.country").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c1, !ctx_r46.basicInfoForm.get("permanentAddress.zipCode").valid && ctx_r46.basicInfoForm.get("permanentAddress.zipCode").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r46.basicInfoForm.get("permanentAddress.zipCode").valid && ctx_r46.basicInfoForm.get("permanentAddress.zipCode").touched || ctx_r46.basicInfoForm.get("permanentAddress.zipCode").required && ctx_r46.basicInfoForm.get("permanentAddress.zipCode").minLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.isAllSameDigitVal && 1 == ctx_r46.zipIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c1, !ctx_r46.basicInfoForm.get("permanentAddress.state").valid && ctx_r46.basicInfoForm.get("permanentAddress.state").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r46.arrayState1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r46.basicInfoForm.get("permanentAddress.state").valid && ctx_r46.basicInfoForm.get("permanentAddress.state").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c1, !ctx_r46.basicInfoForm.get("permanentAddress.city").valid && ctx_r46.basicInfoForm.get("permanentAddress.city").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r46.arrayCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r46.basicInfoForm.get("permanentAddress.city").valid && ctx_r46.basicInfoForm.get("permanentAddress.city").touched);
} }
function VideoVerificationComponent_form_12_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Basic Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VideoVerificationComponent_form_12_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.onFileChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VideoVerificationComponent_form_12_div_12_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, VideoVerificationComponent_form_12_ng_template_13_Template, 1, 1, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_form_12_Template_mat_icon_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.deleteProfileImg(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CIF Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function VideoVerificationComponent_form_12_Template_input_keyup_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r95.onKeyPress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-autocomplete", null, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, VideoVerificationComponent_form_12_mat_option_31_Template, 13, 13, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, VideoVerificationComponent_form_12_p_33_Template, 2, 0, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, VideoVerificationComponent_form_12_mat_spinner_34_Template, 1, 1, "mat-spinner", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_form_12_Template_p_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.resetData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Prefix*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VideoVerificationComponent_form_12_Template_mat_select_selectionChange_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r97.onChangePrefix($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, VideoVerificationComponent_form_12_mat_option_47_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, VideoVerificationComponent_form_12_mat_error_48_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, VideoVerificationComponent_form_12_mat_error_49_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "First Name*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VideoVerificationComponent_form_12_Template_input_keypress_54_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.letterOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, VideoVerificationComponent_form_12_mat_error_55_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Middle Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-card", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VideoVerificationComponent_form_12_Template_input_keypress_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r99.letterOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Last Name*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-card", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VideoVerificationComponent_form_12_Template_input_keypress_65_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.letterOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, VideoVerificationComponent_form_12_mat_error_66_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Date of Birth*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-card", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "mat-datepicker-toggle", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "mat-datepicker", null, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, VideoVerificationComponent_form_12_mat_error_77_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Marital Status*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-card", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, VideoVerificationComponent_form_12_mat_option_85_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, VideoVerificationComponent_form_12_mat_error_86_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Gender*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-card", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VideoVerificationComponent_form_12_Template_mat_select_selectionChange_91_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r101.onChangeGender($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, VideoVerificationComponent_form_12_mat_option_94_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, VideoVerificationComponent_form_12_mat_error_95_Template, 2, 0, "mat-error", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, VideoVerificationComponent_form_12_mat_error_96_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Nationality*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-card", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, VideoVerificationComponent_form_12_mat_option_105_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, VideoVerificationComponent_form_12_mat_error_106_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Primary Email*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-card", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VideoVerificationComponent_form_12_Template_input_keypress_111_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102._keyPress1($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, VideoVerificationComponent_form_12_mat_hint_112_Template, 2, 1, "mat-hint", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, VideoVerificationComponent_form_12_mat_error_113_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, VideoVerificationComponent_form_12_mat_error_114_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Mobile Number*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-card", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VideoVerificationComponent_form_12_Template_input_keypress_119_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r103._keyPress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, VideoVerificationComponent_form_12_mat_hint_120_Template, 2, 1, "mat-hint", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, VideoVerificationComponent_form_12_mat_error_121_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, VideoVerificationComponent_form_12_mat_error_122_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, VideoVerificationComponent_form_12_mat_error_123_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Is your Permanent Address same as Communication Address? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-radio-group", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, VideoVerificationComponent_form_12_mat_radio_button_130_Template, 2, 3, "mat-radio-button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Communication Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "mat-divider", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Address Line 1*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "mat-card", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VideoVerificationComponent_form_12_Template_input_keypress_144_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r104.keyPressAlphanumeric($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](145, VideoVerificationComponent_form_12_mat_error_145_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Address Line 2*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "mat-card", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function VideoVerificationComponent_form_12_Template_input_keypress_151_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.keyPressAlphanumeric($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](152, VideoVerificationComponent_form_12_mat_error_152_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Residence Type*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "mat-card", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "mat-select", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](162, VideoVerificationComponent_form_12_mat_option_162_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](163, VideoVerificationComponent_form_12_mat_error_163_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Country*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "mat-card", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "mat-select", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VideoVerificationComponent_form_12_Template_mat_select_selectionChange_169_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r106.getStateName($event.value, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](172, VideoVerificationComponent_form_12_mat_option_172_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](173, VideoVerificationComponent_form_12_mat_error_173_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Zip Code*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "mat-card", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function VideoVerificationComponent_form_12_Template_input_keyup_180_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r107.isAllSameDigit($event, 0); })("change", function VideoVerificationComponent_form_12_Template_input_change_180_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.getCityandStateByZipcode(ctx_r108.basicInfoForm.get("communicationAddress.country").value, $event.target.value, "communication"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](181, VideoVerificationComponent_form_12_mat_error_181_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](182, VideoVerificationComponent_form_12_h5_182_Template, 2, 0, "h5", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "State*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "mat-card", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "mat-select", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VideoVerificationComponent_form_12_Template_mat_select_selectionChange_188_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r109.onStateChange("communication"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](191, VideoVerificationComponent_form_12_mat_option_191_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](192, VideoVerificationComponent_form_12_mat_error_192_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "City*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "mat-card", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "mat-select", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VideoVerificationComponent_form_12_Template_mat_select_selectionChange_198_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.onCityChange("communication"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](201, VideoVerificationComponent_form_12_mat_option_201_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](202, VideoVerificationComponent_form_12_mat_error_202_Template, 2, 0, "mat-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](203, VideoVerificationComponent_form_12_div_203_Template, 71, 33, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](76);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_8_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.basicInfoForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.imageURL == "not_available")("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.cifNumberForm)("matAutocomplete", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.listOfCustByCif);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !((tmp_8_0 = ctx_r1.basicInfoForm.get("cifNumber")) == null ? null : tmp_8_0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](63, _c1, !ctx_r1.basicInfoForm.get("prefix").valid && ctx_r1.basicInfoForm.get("prefix").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.indexs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("prefix").valid && ctx_r1.basicInfoForm.get("prefix").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.prefixFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](65, _c1, !ctx_r1.basicInfoForm.get("firstName").valid && ctx_r1.basicInfoForm.get("firstName").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("firstName").valid && ctx_r1.basicInfoForm.get("firstName").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](67, _c1, !ctx_r1.basicInfoForm.get("lastName").valid && ctx_r1.basicInfoForm.get("lastName").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("lastName").valid && ctx_r1.basicInfoForm.get("lastName").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](69, _c1, !ctx_r1.basicInfoForm.get("dateOfBirth").valid && ctx_r1.basicInfoForm.get("dateOfBirth").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r17)("max", ctx_r1.tomorrow)("max", ctx_r1.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("dateOfBirth").valid && ctx_r1.basicInfoForm.get("dateOfBirth").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](71, _c1, !ctx_r1.basicInfoForm.get("maritalStatus").valid && ctx_r1.basicInfoForm.get("maritalStatus").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.MarritialStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("maritalStatus").valid && ctx_r1.basicInfoForm.get("maritalStatus").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](73, _c1, !ctx_r1.basicInfoForm.get("gender").valid && ctx_r1.basicInfoForm.get("gender").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.genders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("gender").valid && ctx_r1.basicInfoForm.get("gender").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.prefixFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](75, _c1, !ctx_r1.basicInfoForm.get("nationality").valid && ctx_r1.basicInfoForm.get("nationality").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("nationality").valid && ctx_r1.basicInfoForm.get("nationality").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](77, _c1, !ctx_r1.basicInfoForm.get("primaryEmailAdress").valid && ctx_r1.basicInfoForm.get("primaryEmailAdress").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.basicInfoForm.get("primaryEmailAdress").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.basicInfoForm.get("primaryEmailAdress").hasError("required") && ctx_r1.basicInfoForm.get("primaryEmailAdress").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.basicInfoForm.get("primaryEmailAdress").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](79, _c1, !ctx_r1.basicInfoForm.get("phoneNumber").valid && ctx_r1.basicInfoForm.get("phoneNumber").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.basicInfoForm.get("phoneNumber").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.basicInfoForm.get("phoneNumber").hasError("required") && ctx_r1.basicInfoForm.get("phoneNumber").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.basicInfoForm.get("phoneNumber").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.basicInfoForm.controls["phoneNumber"].value == "0000000000");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.array);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](81, _c1, !ctx_r1.basicInfoForm.get("communicationAddress.address1").valid && ctx_r1.basicInfoForm.get("communicationAddress.address1").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("communicationAddress.address1").valid && ctx_r1.basicInfoForm.get("communicationAddress.address1").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](83, _c1, !ctx_r1.basicInfoForm.get("communicationAddress.address2").valid && ctx_r1.basicInfoForm.get("communicationAddress.address2").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("communicationAddress.address2").valid && ctx_r1.basicInfoForm.get("communicationAddress.address2").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](85, _c1, !ctx_r1.basicInfoForm.get("communicationAddress.residenceType").valid && ctx_r1.basicInfoForm.get("communicationAddress.residenceType").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.Residences);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("communicationAddress.residenceType").valid && ctx_r1.basicInfoForm.get("communicationAddress.residenceType").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](87, _c1, !ctx_r1.basicInfoForm.get("communicationAddress.country").valid && ctx_r1.basicInfoForm.get("communicationAddress.country").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.countrys);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("communicationAddress.country").valid && ctx_r1.basicInfoForm.get("communicationAddress.country").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](89, _c1, !ctx_r1.basicInfoForm.get("communicationAddress.zipCode").valid && ctx_r1.basicInfoForm.get("communicationAddress.zipCode").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("communicationAddress.zipCode").valid && ctx_r1.basicInfoForm.get("communicationAddress.zipCode").touched || ctx_r1.basicInfoForm.get("communicationAddress.zipCode").required && ctx_r1.basicInfoForm.get("permanentAddress.zipCode").minLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isAllSameDigitVal && 0 == ctx_r1.zipIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](91, _c1, !ctx_r1.basicInfoForm.get("communicationAddress.state").valid && ctx_r1.basicInfoForm.get("communicationAddress.state").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.arrayState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("communicationAddress.state").valid && ctx_r1.basicInfoForm.get("communicationAddress.state").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](93, _c1, !ctx_r1.basicInfoForm.get("communicationAddress.city").valid && ctx_r1.basicInfoForm.get("communicationAddress.city").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.arrayCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.basicInfoForm.get("communicationAddress.city").valid && ctx_r1.basicInfoForm.get("communicationAddress.city").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.sameAddress == "No");
} }
function VideoVerificationComponent_mat_spinner_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 128);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 80);
} }
const _c2 = function (a0, a1, a2) { return { "bookedSlot": a0, "availableSlot": a1, "selectedClass": a2 }; };
function VideoVerificationComponent_div_39_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_div_39_div_2_Template_mat_card_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115); const time_r112 = ctx.$implicit; const i_r113 = ctx.index; const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r114.onSelectTime1(time_r112.time, i_r113, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r112 = ctx.$implicit;
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", time_r112)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c2, time_r112.booked, time_r112.available, ctx_r111.dateCollection.indexOf(time_r112.time) != -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r111.format24HrsTo12Hrs(time_r112.time));
} }
function VideoVerificationComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VideoVerificationComponent_div_39_div_2_Template, 4, 7, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.TimeSolts);
} }
const _c3 = function (a0, a1) { return { "Next12": a0, "Next": a1 }; };
const _c4 = function (a0, a1) { return { "finish": a0, "finish1": a1 }; };
class VideoVerificationComponent {
    constructor(snack, router, videoService, api, dialogService, shareDataService, renderer, dialog, cdr, fb, appApiService) {
        this.snack = snack;
        this.router = router;
        this.videoService = videoService;
        this.api = api;
        this.dialogService = dialogService;
        this.shareDataService = shareDataService;
        this.renderer = renderer;
        this.dialog = dialog;
        this.cdr = cdr;
        this.fb = fb;
        this.appApiService = appApiService;
        // selectTime1=['10:00 am','10:30 am','11:00 am'];
        // selectTime2=['11:30 am','12:00 pm','12:30 pm'];
        // selectTime3=['01:00 pm','01:30 pm','02:00 pm'];
        // selectTime4=['02:30 pm','03:00 pm','03:30 pm'];
        // selectTime5=['04:00 pm','04:30 pm','05:00 pm'];
        this.masterInfo = {};
        this.addressInfo = {};
        this.tellerId = 1;
        this.loggedInUser = 1;
        this.title = [
            'Mr',
            'Ms',
            'Mrs',
        ];
        this.TimeSolts = [];
        this.tomorrow = new Date();
        this.maxDate = new Date();
        this.minDate = new Date();
        this.cifNumberForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.dateCollection = [];
        this.count = 0;
        this.availableSlots = [];
        this.kycTimeOption = false;
        this.selectedIndex = 0;
        this.otpmodel = new _kyc_basic_information_kyc_basic_information_component__WEBPACK_IMPORTED_MODULE_7__["OtpModel"]();
        this.mobVerify = "verify";
        this.emailVerify = "verify";
        this.arrayPrefix = [];
        this.prefixFlag = false;
        this.countrys = [];
        this.arrayState = [];
        this.arrayCity = [];
        this.listOfCustByCif = [];
        this.disabledsatsun = [];
        this.cifFetch = false;
        this.permanentAddress = this.fb.group({
            addressType: ["Permanent", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            address1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            address2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            zipCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
            country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            residenceType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        this.array = [
            {
                id: 1,
                checked: true,
                name: "Yes",
            },
            {
                id: 2,
                checked: false,
                name: "No",
            },
        ];
        this.dateClass = (cellDate, view) => {
            if (view === 'month') {
                const highlightDate = this.disabledsatsun
                    .map((strDate) => new Date(strDate))
                    .some((d) => d.getDate() === cellDate.getDate() &&
                    d.getMonth() === cellDate.getMonth() &&
                    d.getFullYear() === cellDate.getFullYear());
                return highlightDate ? 'custom-date-class' : '';
            }
            return '';
        };
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        //this.tomorrow.setDate(this.tomorrow.getDate())
    }
    ngOnInit() {
        this.getDoc();
        this.calculateHolidays();
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
        this.api.getverify1().subscribe(resp => {
            if (resp.verify == 'verified') {
                this.assignVerify(resp);
            }
        });
        this.api.getverify().subscribe(resp => {
            if (resp.verify == 'verified') {
                this.assignVerify(resp);
            }
        });
        this.prefixFlag = true;
        this.basicInfoForm = this.fb.group({
            cifNumber: ['',],
            prefix: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            // middleName: ['',],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            // primaryEmail: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
            // phoneNo: ['', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            scheduledDate: [''],
            scheduledTime: ['null'],
            primaryEmailAdress: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            middleName: [""],
            customer_id: [""],
            isAddressSame: [""],
            gender: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dateOfBirth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            maritalStatus: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            nationality: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            profileImage: [""],
            communicationAddress: this.fb.group({
                addressType: ["Communication", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                address1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                address2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                zipCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
                country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                residenceType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            }),
        });
        this.imageURL = "not_available";
        this.link = "vide_link";
    }
    onKeyPress(event) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
        console.log(event.target.value);
        clearTimeout(this.timer);
        if (!event.target.value) {
            this.listOfCustByCif = [];
        }
        else {
            this.timer = setTimeout(() => {
                this.appApiService.fetchByCif(event.target.value).subscribe((res) => {
                    console.log(res);
                    if (res) {
                        this.listOfCustByCif = res.customerInfoList;
                    }
                });
            }, 1000);
        }
    }
    getDoc() {
        this.index = "prefix";
        this.gender = "gender";
        this.resi = "residence";
        this.marr = "maritial_Status";
        this.coun = "country";
        this.nation = "nationality";
        // this.api.getDropDownValues(this.coun).subscribe((responseData) => {
        //   this.countrys = responseData;
        //   console.log("this.countrys::", this.countrys)
        // });
        this.api.getAllCountries().subscribe((data) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].authStatus === 'A') {
                    this.countrys.push(data[i].countryName);
                }
            }
        });
        this.getAllAuthCities();
        this.api.getDropDownValues(this.gender).subscribe((responseDatas) => {
            this.genders = responseDatas;
        });
        this.api.getDropDownValues(this.resi).subscribe((responses) => {
            this.Residences = responses;
        });
        this.api.getDropDownValues(this.marr).subscribe((respo) => {
            this.MarritialStatus = respo;
        });
        this.api.getDropDownValues(this.index).subscribe((re) => {
            this.indexs = re;
        });
        this.api.getDropDownValues(this.nation).subscribe((datas) => {
            this.nationality = datas;
        });
    }
    get sameAddress() {
        return this.basicInfoForm.get("isAddressSame").value;
    }
    assignValuesForTab2(tabIndex) {
        this.tab2 = true;
    }
    assignVerify(resp) {
        if (resp.type == 'mobile') {
            this.mobVerify = 'verified';
        }
        if (resp.type == 'email') {
            this.emailVerify = 'verified';
        }
    }
    _keyPress(event) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
        if (this.mobVerify == 'verified') {
            if (event != this.mobileVerified) {
                this.mobVerify = 'verify';
            }
            else {
                this.mobVerify = 'verified';
            }
        }
    }
    _keyPress1(event) {
        if (this.emailVerify == 'verified') {
            if (event != this.emailVerified) {
                this.emailVerify = 'verify';
            }
            else {
                this.emailVerify = 'verified';
            }
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
    onSelectTime1(time, i, event) {
        this.showNext = true;
        this.datewitmAmPm = event.target.innerText;
        this.count++;
        if (this.count > 1) {
            this.dateCollection = [];
            console.log(!this.TimeSolts[i].selected);
            this.showNext = !this.TimeSolts[i].selected;
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
    }
    onNextOfSheduleAppointment() {
        this.icustCustVideoVerifyDto = this.basicInfoForm.value;
        this.icustCustVideoVerifyDto.scheduledDate = this.selectedDate;
        this.icustCustVideoVerifyDto.scheduledTime = this.dateCollection;
        this.icustCustVideoVerifyDto.tellerId = this.tellerId;
        this.icustCustVideoVerifyDto.loggedInUser = this.loggedInUser;
        this.videoService.saveCustBasicInfoData(this.icustCustVideoVerifyDto).subscribe(data => {
            console.log("data link", data);
            this.link = data;
            const dialogRef = this.dialog.open(_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_4__["AppointmentComponent"], {
                data: { time: this.datewitmAmPm, date: this.selectedDate, link: this.link, kycRef: this.kycRef }
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
    bookSlot(bookedTime) {
        var now = new Date();
        var time = bookedTime;
        var dt = (now.getMonth() + 1) + "/" + now.getDate() + "/" + now.getFullYear() + " " + time;
        //var now = new Date();
        var userval = new Date(dt);
        if (now > userval) {
            return false;
        }
        else {
            return true;
        }
    }
    onSelect(event) {
        for (let i = 0; i < this.TimeSolts.length; i++) {
            var slot = this.bookSlot(this.format24HrsTo12Hrs(this.TimeSolts[i].time));
            this.TimeSolts[i].booked = slot;
        }
        //console.log("today", moment(today).format('YYYY-MMM-DD HH:MM:SS'),moment(event).format('YYYY-MMM-DD') )
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
    kycRef(kycReference) {
        this.api.setKycRef({
            kycReference: kycReference,
        });
    }
    next() {
        // this.kycVerificationForm.reset();
        this.api.setIndex({
            index: 1,
        });
        this.api.setFinishFlag({
            finishFlag: false,
        });
        let customerId = localStorage.getItem('customer_id');
        console.log("custId::", localStorage.getItem('customer_id'));
        localStorage.setItem('page_id', '1');
        this.shareDataService.shareCustomerId(customerId);
    }
    onClickNext(tabIndex) {
        console.log('onClicknext');
        let phoneNumber = this.basicInfoForm.value.phoneNumber;
        if (!this.cifFetch) {
            this.api.fetchCustomerDetails(phoneNumber).subscribe((res) => {
                if (res != null) {
                    this.dialogService.phoneNumberDetailsDialogue(res).subscribe((response) => {
                        if (response == "Yes") {
                            this.nextStep(tabIndex);
                        }
                    });
                }
                else {
                    this.nextStep(tabIndex);
                }
            });
        }
        else {
            this.nextStep(tabIndex);
        }
    }
    nextStep(tabIndex) {
        console.log(tabIndex);
        if (this.selectedIndex < 2) {
            this.selectedIndex = tabIndex + 1;
        }
        let userAddress = [];
        userAddress.push(this.basicInfoForm.value.communicationAddress);
        if (this.basicInfoForm.value.permanentAddress) {
            userAddress.push(this.basicInfoForm.value.permanentAddress);
        }
        let payload = {
            cifNumber: this.basicInfoForm.value.cifNumber,
            prefix: this.basicInfoForm.value.prefix,
            primaryEmailAdress: this.basicInfoForm.value.primaryEmailAdress,
            phoneNumber: this.basicInfoForm.value.phoneNumber,
            firstName: this.basicInfoForm.value.firstName,
            lastName: this.basicInfoForm.value.lastName,
            middleName: this.basicInfoForm.value.middleName,
            customer_id: this.basicInfoForm.value.customer_id,
            gender: this.basicInfoForm.value.gender,
            maritalStatus: this.basicInfoForm.value.maritalStatus,
            nationality: this.basicInfoForm.value.nationality,
            // dateOfBirth:this.basicInfoForm.value.dateOfBirth,
            userAddress: userAddress,
            verificationType: 'KYC',
            kycSubmit: false
        };
        console.log(payload, " :: Payload");
        console.log(this.profilePicture);
        this.api.kycScreenBasicinfo(payload).subscribe((resp) => {
            console.log(resp, "Next response");
            console.log("resp after saving ", resp);
            this.id = resp.cifNumber;
            this.snack.open("Basic Information Data Saved! ", "OK", {
                duration: 4000,
                verticalPosition: "top",
                horizontalPosition: "right",
            });
            // this.disableDays(this.disabledsatsun);
            sessionStorage.setItem('customer_id', resp.customerId);
            localStorage.setItem('customer_id', resp.customerId);
            sessionStorage.setItem('kyc_reference', resp.kycReference);
            this.kycRef(resp.kycReference);
            console.log("resp.customerId::", resp.customerId);
            console.log("(this.profilePicture::", this.profilePicture);
            if (this.profilePicture) {
                // console.log(this.profilePicture)
                let profileUpload = {};
                profileUpload.documentName = "Profile";
                profileUpload.documentType = 1;
                profileUpload.fileType = this.profilePicture.type;
                profileUpload.fileName = this.profilePicture.name;
                profileUpload.customerId = resp.customerId;
                console.log(profileUpload);
                const uploadData = new FormData();
                uploadData.append('data', JSON.stringify(profileUpload));
                uploadData.append('file', this.profilePicture);
                this.api.uploadDocument(uploadData).subscribe((response) => {
                    console.log(response);
                    this.next();
                }, err => {
                    console.log("error", err);
                });
            }
            this.next();
        });
    }
    resetData() {
        this.basicInfoForm.reset();
        this.imageURL = "not_available";
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
            this.cifFetch = true;
            this.getallCustomerDetails();
        }
    }
    getOtp(email) {
        this.otpmodel.source = "customer";
        this.otpmodel.source_key = "email";
        this.otpmodel.source_value = email.primaryEmailAdress;
        if (this.emailVerify == 'verify') {
            this.api.getOtp(this.otpmodel).subscribe((resp) => { });
            this.openDialogEmail(email.primaryEmailAdress);
            this.emailVerified = email.primaryEmailAdress;
        }
    }
    openDialogEmail(email) {
        const dialogRef = this.dialog.open(_fingerprint_authentication_fingerprint_authentication_component__WEBPACK_IMPORTED_MODULE_8__["FingerprintAuthenticationComponent"], {
            data: { number: email, type: "email id" },
            disableClose: true,
        });
        dialogRef.afterClosed().subscribe((submit) => { });
        // this.emailsverify();
    }
    getallCustomerDetails() {
        this.loading = true;
        console.log("CIF video verification ---- :: ", event);
        this.api.gettingCustomerDetails(this.cifNumber).subscribe((allCustomerResp) => {
            this.loading = false;
            console.log("All Customer Details", allCustomerResp);
            if (allCustomerResp === null) {
                this.snack.open("Invalid CIF number!", "OK", {
                    duration: 4000,
                    verticalPosition: "top",
                    horizontalPosition: "right",
                });
                this.basicInfoForm.controls.prefix.setValue('');
                this.basicInfoForm.controls.firstName.setValue('');
                this.basicInfoForm.controls.middleName.setValue('');
                this.basicInfoForm.controls.lastName.setValue('');
                this.basicInfoForm.controls.primaryEmailAdress.setValue('');
                this.basicInfoForm.controls.phoneNo.setValue('');
            }
            this.image = allCustomerResp.customerInfoList[0];
            this.imageURL = this.image.profileImage;
            this.masterInfo = allCustomerResp.customerInfoList;
            this.addressInfo = allCustomerResp.customerInfoList[0].userAddress;
            if (this.masterInfo) {
                this.setCustValues();
            }
            if (this.addressInfo) {
                this.setCustValues2();
            }
            this.mobileverify();
            this.emailsverify();
        });
    }
    setCustValues() {
        this.basicInfoForm.controls.prefix.setValue(this.masterInfo[0].prefix);
        this.basicInfoForm.controls.firstName.setValue(this.masterInfo[0].firstName);
        this.basicInfoForm.controls.middleName.setValue(this.masterInfo[0].middleName);
        this.basicInfoForm.controls.lastName.setValue(this.masterInfo[0].lastName);
        this.basicInfoForm.controls.primaryEmailAdress.setValue(this.masterInfo[0].primaryEmailAdress);
        this.basicInfoForm.controls.phoneNumber.setValue(this.masterInfo[0].phoneNumber);
        this.basicInfoForm.controls.dateOfBirth.setValue(this.masterInfo[0].dateOfBirth);
        this.basicInfoForm.controls.maritalStatus.setValue(this.masterInfo[0].maritalStatus);
        this.basicInfoForm.controls.gender.setValue(this.masterInfo[0].gender);
        this.basicInfoForm.controls.nationality.setValue(this.masterInfo[0].nationality);
    }
    setCustValues2() {
        this.basicInfoForm.get('communicationAddress.address1').setValue(this.addressInfo[0].address1);
        this.basicInfoForm.get('communicationAddress.address2').setValue(this.addressInfo[0].address2);
        this.basicInfoForm.get('communicationAddress.residenceType').setValue(this.addressInfo[0].residenceType);
        this.basicInfoForm.get('communicationAddress.country').setValue(this.addressInfo[0].country);
        this.basicInfoForm.get('communicationAddress.state').setValue(this.addressInfo[0].state);
        this.getStateName(this.addressInfo[0].country, this.addressInfo[0].address1);
        this.basicInfoForm.get('communicationAddress.city').setValue(this.addressInfo[0].city);
        // this.getCityName(this.addressInfo[0].state, this.addressInfo[0].address1);
        this.basicInfoForm.get('communicationAddress.zipCode').setValue(this.addressInfo[0].zipCode);
    }
    getOtpMobile(email) {
        this.otpmodel.source = "customer";
        this.otpmodel.source_key = "mobile";
        this.otpmodel.source_value = email.phoneNumber;
        if (this.mobVerify == 'verify') {
            this.api.getOtp(this.otpmodel).subscribe((resp) => { });
            this.openDialog1(email.phoneNumber);
            this.mobileVerified = email.phoneNumber;
        }
    }
    openDialog1(phoneNUmber) {
        const dialogRef = this.dialog.open(_fingerprint_authentication_fingerprint_authentication_component__WEBPACK_IMPORTED_MODULE_8__["FingerprintAuthenticationComponent"], {
            data: { number: phoneNUmber, type: "Mobile Number" },
            disableClose: true,
        });
        dialogRef.afterClosed().subscribe((submit) => { });
        // this.mobileverify();
    }
    mobileverify() {
        this.api.getverify().subscribe(resp => {
            console.log(resp);
            if (resp) {
                this.mobVerify = resp.verify;
            }
        }, (err) => {
            this.mobVerify = "verify";
        });
    }
    emailsverify() {
        this.api.getverify1().subscribe(resp => {
            console.log(resp);
            if (resp) {
                this.emailVerify = resp.verify;
            }
        }, (err) => {
            this.emailVerify = "verify";
        });
    }
    deleteProfileImg() {
        this.dialogService.doConfirmDialog('').subscribe((response) => {
            if (response == "Yes") {
                this.imageURL = "not_available";
                this.profileFile.nativeElement.value = '';
                let customerId = localStorage.getItem('customerId');
                this.api.deleteCustomerDoc(customerId, this.profileId).subscribe((data) => {
                    this.snack.open('Profile Image Deleted Successfully', 'OK', {
                        duration: 4000,
                        verticalPosition: 'top',
                        horizontalPosition: 'right'
                    });
                });
            }
        });
    }
    getProfileImage(customerId, document_type) {
        this.api.getCustomerDocuments(customerId, document_type).subscribe((data) => {
            console.log("data ::", data);
            if (data.length > 0) {
                this.profileId = data[0].id;
                this.imageURL = data[0].fileUrl;
            }
        });
    }
    onFileChanged(event) {
        this.profilePicture = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event2) => {
            // this.imgUrl = reader.result;
            //this.fun(event.target.files[0], this.profilePicture);
            //  this.image = reader.result;
            this.imageURL = reader.result;
            console.log("file ", reader);
        };
        // console.log(this.profilePicture);
    }
    onChange(control, e) {
        if (e.value == "No" &&
            !this.basicInfoForm.contains("permanentAddress")) {
            this.basicInfoForm.addControl("permanentAddress", this.permanentAddress);
        }
        else {
            this.basicInfoForm.removeControl("permanentAddress");
        }
    }
    onChangeGender(event) {
        let prefix = this.basicInfoForm.value.prefix;
        if ((prefix == "Mr" && event.value == "Male") || (prefix == "Ms" && event.value == "Female") || (prefix == "Mrs") && (event.value == "Male" || event.value == "Female")) {
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
    onChangePrefix(event) {
        let prefix = this.basicInfoForm.value.gender;
        console.log("gender", prefix);
        console.log("prefix", event.value);
        if (prefix != '') {
            if ((event.value == "Mr" && prefix == "Male") || ((event.value == "Ms" || event.value == "Mrs") && prefix == "Female")) {
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
    }
    getStateName(country, address, isAdd) {
        if (isAdd) {
            this.basicInfoForm.get('communicationAddress.zipCode').setValue('');
            this.basicInfoForm.get('communicationAddress.state').setValue('');
            this.basicInfoForm.get('communicationAddress.city').setValue('');
        }
        this.entityName = "state";
        console.log("State -- ", country);
        // this.api.getDropDownForStateCity(this.entityName, country).subscribe((data) => {
        //   this.arrayState = data;
        this.api.getAllCountries().subscribe((data) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].countryName === country) {
                    this.api.getStateByCountryId(data[i].id).subscribe((resp) => {
                        for (let i = 0; i < resp.length; i++) {
                            if (resp[i].authStatus === 'A') {
                                this.arrayState.push(resp[i].stateName);
                            }
                        }
                    });
                    break;
                }
            }
            console.log("-->", this.arrayState);
            if (address.length > 0) {
                for (const key in address) {
                    if (Object.prototype.hasOwnProperty.call(address, key)) {
                        const element = address[key];
                        for (const state in this.arrayState) {
                            if (Object.prototype.hasOwnProperty.call(this.arrayState, state)) {
                                const elementState = this.arrayState[state];
                                if (elementState.trim() === element.trim()) {
                                    console.log('elementState', elementState);
                                    // this.getCityName(elementState.trim(),address);
                                }
                            }
                        }
                    }
                }
            }
        });
    }
    getPerStateName(country, isAdd) {
        if (isAdd) {
            this.basicInfoForm.get('communicationAddress.zipCode').setValue('');
            this.basicInfoForm.get('communicationAddress.state').setValue('');
            this.basicInfoForm.get('communicationAddress.city').setValue('');
        }
        this.entityName = "state";
        console.log("State -- ", country);
        this.api.getDropDownForStateCity(this.entityName, country).subscribe((data) => {
            this.arrayState1 = data;
            console.log("-->", this.arrayState);
        });
    }
    // getCityName(state: any,address) {
    //   this.entityName = "city";
    //   console.log(state)
    //   this.api.getDropDownForStateCity(this.entityName, state).subscribe((data) => {
    //     this.arrayCity = data;
    //     console.log("-->", this.arrayCity)
    //     if (address.length > 0) {
    //       for (const key in address) {
    //         if (Object.prototype.hasOwnProperty.call(address, key)) {
    //           const element = address[key];
    //           for (const City in this.arrayCity) {
    //             if (Object.prototype.hasOwnProperty.call(this.arrayCity, City)) {
    //               const elementCity = this.arrayCity[City];
    //               if (elementCity.trim() === element.trim()) {
    //                 console.log('elementCity', elementCity)
    //                 this.kycVerificationForm.get('communicationAddress.city').setValue(elementCity);
    //                 this.cdr.detectChanges();
    //                 this.cdr.markForCheck();
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   });
    // }
    // getPerCityName(state: any) {
    //   this.entityName = "city";
    //   console.log(state)
    //   this.api.getDropDownForStateCity(this.entityName, state).subscribe((data) => {
    //     this.arrayCity1 = data;
    //     console.log("-->", this.arrayCity)
    //   });
    // }
    getAllAuthCities() {
        this.api.getAuthorizedCityInfo().subscribe(res => res.map(r => this.arrayCity.push(r.cityName)));
    }
    onStateChange(addType) {
        if (addType == 'communication') {
            this.basicInfoForm.get('communicationAddress.zipCode').setValue('');
            this.basicInfoForm.get('communicationAddress.city').setValue('');
        }
        else if (addType == 'permanent') {
            this.basicInfoForm.get('permanentAddress.zipCode').setValue('');
            this.basicInfoForm.get('permanentAddress.city').setValue('');
        }
    }
    onCityChange(addType) {
        if (addType == 'communication') {
            this.basicInfoForm.get('communicationAddress.zipCode').setValue('');
        }
        else if (addType == 'permanent') {
            this.basicInfoForm.get('permanentAddress.zipCode').setValue('');
        }
    }
    keyPressAlphanumeric(event) {
        var inp = String.fromCharCode(event.keyCode);
        if (/^[a-zA-Z0-9_@]*$/.test(inp)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
    }
    calculateHolidays() {
        this.api.getBranchHolidayInfo().subscribe((data) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].authStatus == "A")
                    this.disabledsatsun.push(moment__WEBPACK_IMPORTED_MODULE_11__(data[i].calenderDate).format('MMMM D, YYYY'));
            }
        });
        var d = new Date();
        var pred = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
        var nowd;
        var sat_array = "";
        for (let i = 1; i <= pred; i++) {
            nowd = new Date(d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + i);
            var weekday = moment__WEBPACK_IMPORTED_MODULE_11__(nowd).format('dddd');
            if (weekday == 'Sunday' || weekday == 'Saturday') {
                this.disabledsatsun.push(moment__WEBPACK_IMPORTED_MODULE_11__(nowd).format('MMMM D, YYYY'));
                sat_array = sat_array + "," + i;
            }
        }
    }
    disableDays(days) {
        const dayElements = document.querySelectorAll('mat-calendar .mat-calendar-table .mat-calendar-body-cell');
        Array.from(dayElements).forEach((element) => {
            const matchingDay = days.find((d) => d === element.getAttribute('aria-label')) !== undefined;
            if (matchingDay)
                this.renderer.setAttribute(element, 'disabled', '');
            else
                this.renderer.removeAttribute(element, 'disabled');
        });
    }
    getCityandStateByZipcode(countryName, zipcode, addType) {
        if (zipcode.length >= 6) {
            this.api.fetchStateCityByZipcode(countryName, zipcode).subscribe((res) => {
                if (res) {
                    if (addType == 'communication') {
                        this.basicInfoForm.get('communicationAddress.state').setValue(res.stateName);
                        this.basicInfoForm.get('communicationAddress.city').setValue(res.cityName);
                    }
                    else {
                        this.basicInfoForm.get('permanentAddress.state').setValue(res.stateName);
                        this.basicInfoForm.get('permanentAddress.city').setValue(res.cityName);
                    }
                }
                else {
                    this.snack.open("Entered Zipcode is exists", "OK", {
                        duration: 4000,
                        verticalPosition: "top",
                        horizontalPosition: "right",
                    });
                }
            });
        }
    }
}
VideoVerificationComponent.ɵfac = function VideoVerificationComponent_Factory(t) { return new (t || VideoVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_13__["ApplicationEntryStageService"])); };
VideoVerificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoVerificationComponent, selectors: [["app-video-verification"]], viewQuery: function VideoVerificationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.profileFile = _t.first);
    } }, decls: 46, vars: 20, consts: [[1, "head", "mt-32"], [1, "headerMapping"], [1, "main-head", 2, "padding-left", "5.1%"], [1, "basic-container"], ["mat-align-tabs", "start", 2, "background-color", "#F5F5F5", 3, "selectedIndex"], ["tabgroup", ""], ["label", "Basic Information", 2, "height", "100%", 3, "disabled"], [1, "outerDiv"], [1, "marginTopKyc"], [3, "formGroup", 4, "ngIf"], [1, "button"], [1, "Back1", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "ngClass", "disabled", "click"], [2, "color", "white"], ["label", "Schedule Appointment", 3, "disabled"], [1, "matCard", 2, "margin-right", "55px", "margin-left", "27px"], [1, "basicInformation"], [1, "line"], ["fxLayout", "column wrap"], ["fxFlex", "100"], ["fxFlex", "35"], [1, "textFont"], [1, "demo-inline-calendar-card"], [3, "selected", "dateClass", "maxDate", "minDate", "selectedChange"], ["fxFlex", "60"], [1, "paraFont"], ["class", "spinner", 3, "diameter", 4, "ngIf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "back", 3, "click"], ["mat-stroked-button", "", "id", "n", 3, "ngClass", "disabled", "click"], [3, "formGroup"], [1, "verificationHead"], [1, "formSectionContainer"], [1, "formLeft"], ["mat-icon-button", "", 2, "float", "right", "padding-top", "8px", "padding-left", "30px", "cursor", "pointer"], ["type", "file", "input", "", "type", "file", "accept", "image/png, image/gif, image/jpg, image/jpeg", 1, "changeInput", 3, "change"], ["profileFile", ""], ["color", "primary"], [4, "ngIf", "ngIfElse"], ["showAvatar", ""], [2, "color", "red", "margin-left", "94%", "cursor", "pointer", 3, "click"], ["id", "formfetch", 1, "form"], ["id", "fech", 1, "flex-grow-1"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["type", "input", 1, "widthCard", "inputMatcard"], ["matInput", "", "formControlName", "cifNumber", "type", "number", "min", "0", "oninput", "validity.valid ||(value='');", "name", "cifNumber", "value", "cifNumber", 1, "alignment", 3, "formControl", "matAutocomplete", "keyup"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "fechButtonDiv"], ["class", "fetchButton", 3, "click", 4, "ngIf"], ["class", "fetchButton", 3, "diameter", 4, "ngIf"], [1, "fetchButton", 3, "hidden", "click"], [1, "flex-grow-2", 2, "margin-left", "-1px"], [1, "widthCard", "inputMatcard", 3, "ngClass"], ["formControlName", "prefix", 3, "selectionChange"], ["value", ""], [4, "ngIf"], [1, "flex-grow-1"], [1, "inputMatName", 3, "ngClass"], ["matInput", "", "formControlName", "firstName", "type", "text", "name", "lastName", "value", "updateUserInfo.firstName", 1, "alignment", 3, "keypress"], [1, "inputMatNew"], ["matInput", "", "formControlName", "middleName", "type", "text", "name", "middleName", 1, "alignment", 3, "keypress"], [1, "inputMatLastName", 3, "ngClass"], ["matInput", "", "formControlName", "lastName", "type", "text", "name", "lastName", "value", "updateUserInfo.lastName", 1, "alignment", 3, "keypress"], [1, "form"], [1, "inputMatLastName", 2, "height", "48px", 3, "ngClass"], ["matInput", "", "formControlName", "dateOfBirth", "id", "dob", "name", "dateOfBirth", "readonly", "", "value", "dateOfBirth", 1, "alignment", 3, "matDatepicker", "max"], ["fxFlex", "8%", "id", "toggle"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "inputMatcardMarritial", 3, "ngClass"], ["formControlName", "maritalStatus"], [1, "inputGender", 3, "ngClass"], ["formControlName", "gender", 3, "selectionChange"], ["class", "help-block", 4, "ngIf"], ["formControlName", "nationality"], ["fxLayout", "row", 1, "inputMatcardMail", 3, "ngClass"], ["matInput", "", "formControlName", "primaryEmailAdress", "type", "text", "name", "primaryEmailAdress", 3, "keypress"], ["class", "verification", 3, "click", 4, "ngIf"], ["fxLayout", "row", 1, "inputMatcard", 3, "ngClass"], ["matInput", "", "name", "phoneNumber", "maxLength", "10", "formControlName", "phoneNumber", "required", "", 3, "keypress"], ["fxLayout", "row"], ["id", "bill"], [1, "billName"], ["formControlName", "isAddressSame"], ["class", "ml-8 pr-10", "color", "primary", 3, "checked", "value", "change", 4, "ngFor", "ngForOf"], ["fxLayoutGap", "10px", "fxLayout", "row wrap", 1, "mt-32", "communicationForm"], ["fxFlex", "", "id", "communicationBlockForm", 1, "addressGrid"], [1, "spanDiv"], [1, "span"], [1, "divider"], ["formGroupName", "communicationAddress"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayoutAlign", "space-between center"], ["fxFlex", "50%"], [1, "pb-1"], [1, "address-card", "inputMatcard3", 3, "ngClass"], ["matInput", "", "formControlName", "address1", "maxlength", "50", "name", "address1", 1, "full-width", 3, "keypress"], ["matInput", "", "formControlName", "address2", "maxlength", "50", "name", "address2", 1, "full-width", 3, "keypress"], ["formControlName", "residenceType"], ["formControlName", "country", 3, "selectionChange"], ["matInput", "", "formControlName", "zipCode", "onlyNumber", "", "type", "text", "matInput", "", "minLength", "5", "maxLength", "10", "name", "zipCode", 3, "keyup", "change"], ["style", "color: #E74C3C;", 4, "ngIf"], ["name", "state", "formControlName", "state", 3, "selectionChange"], ["name", "city", "formControlName", "city", 3, "selectionChange"], ["fxFlex", "", "class", "addressGrid", "id", "communicationBlockForm", 4, "ngIf"], ["alt", "", 1, "formImg", 3, "src"], [3, "value"], ["fxLayout", "row wrap", 2, "margin-top", "20px"], ["fxFlex", " 100"], ["mat-card-avatar", "", "class", "example-header-image-dropdown", "fxFlex", "10", 4, "ngIf"], ["mat-card-avatar", "", "fxFlex", "10", 4, "ngIf"], ["fxFlex", "80"], [2, "margin-bottom", "0px"], [2, "margin-top", "0px"], ["mat-card-avatar", "", "fxFlex", "10", 1, "example-header-image-dropdown"], ["align", "center", 2, "margin-top", "5px", "font-size", "large"], ["mat-card-avatar", "", "fxFlex", "10"], ["matListAvatar", "", "align", "center", "alt", "...", 2, "border-radius", "50%", "height", "85%", "margin-right", "20px", "width", "100%", "margin-bottom", "50px", 3, "src"], [1, "fetchButton", 3, "click"], [1, "fetchButton", 3, "diameter"], [1, "help-block"], [1, "verification", 3, "click"], ["color", "primary", 1, "ml-8", "pr-10", 3, "checked", "value", "change"], [2, "color", "#E74C3C"], ["formGroupName", "permanentAddress"], ["matInput", "", "formControlName", "address1", "maxlength", "50", "name", "address1", 1, "full-width"], ["fxFlex", "50"], ["matInput", "", "formControlName", "address2", "maxlength", "50", "name", "address2", 1, "full-width"], [1, "spinner", 3, "diameter"], ["fxLayout", "row wrap"], ["class", "timeboxes", 4, "ngFor", "ngForOf"], [1, "timeboxes"], [3, "name", "ngClass", "click"], ["fxLayoutAlign", "center stretch", 1, "matContent"]], template: function VideoVerificationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home > KYC Screening ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "KYC Screening | Video Verification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab-group", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VideoVerificationComponent_form_12_Template, 204, 95, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_Template_span_click_14_listener() { return ctx.backToKyc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.onClickNext(_r0.selectedIndex); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Schedule Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Select Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-calendar", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function VideoVerificationComponent_Template_mat_calendar_selectedChange_32_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Select Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Pick the date and then choose the available time slots.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, VideoVerificationComponent_mat_spinner_38_Template, 1, 1, "mat-spinner", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, VideoVerificationComponent_div_39_Template, 3, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_Template_span_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.previousStep(_r0.selectedIndex); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoVerificationComponent_Template_button_click_43_listener() { return ctx.onNextOfSheduleAppointment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tab1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicInfoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c3, ctx.basicInfoForm.invalid, !ctx.basicInfoForm.invalid))("disabled", ctx.basicInfoForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tab2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.selectedDate)("dateClass", ctx.dateClass)("maxDate", ctx.maxDate)("minDate", ctx.minDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.kycTimeOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c4, !ctx.showNext, ctx.showNext))("disabled", !ctx.showNext);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["DefaultClassDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatCalendar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatHint"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatOption"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__["MatRadioGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutGapDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _only_number_directive__WEBPACK_IMPORTED_MODULE_29__["OnlyNumberDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardAvatar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListAvatarCssMatStyler"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatSpinner"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatError"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__["MatRadioButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["SlicePipe"]], styles: [".breadcrumb[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 40px;\n  width: 100%;\n  background-color: white;\n}\n\n.head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.pr-10[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.fetchButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  text-decoration: underline;\n  padding-left: 10px;\n  padding-top: 15px;\n  cursor: pointer;\n  margin-right: 40px;\n}\n\nmat-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-left: -10%;\n}\n\n#fech[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.fechButtonDiv[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n#formfetch[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 25% 25% 25% 25%;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.grid[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(50%, 1fr));\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\nmat-tab-group[_ngcontent-%COMP%] {\n  padding-left: 2%;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 60vh;\n  border: 1px solid black;\n  padding: 10px 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2), .flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  margin-top: 5px;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  flex: 1;\n}\n\n.formField1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 50px;\n}\n\n.formField[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 120px;\n}\n\n  .mat-tooltip {\n  font-size: 15px;\n  white-space: pre-wrap;\n  color: gray !important;\n  background-color: rgba(255, 255, 255, 0.9);\n  border: 1px solid gray;\n  max-width: unset !important;\n}\n\n.formField2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n}\n\n.inputMatcard[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputGender[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatName[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatNew[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatLastName[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardDoc[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMail[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMailAdd[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMarritial[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardPrefix[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard3[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardAdd[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard4[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  max-width: 208px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 12px;\n}\n\n.inputMatcard2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  width: 20px;\n}\n\n.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n\n.inputClass[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  box-shadow: 0 3pt 6pt #00000029;\n  font-weight: bolder;\n}\n\n[_nghost-%COMP%]     div.mat-form-field-outline-start {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-outline-gap {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-outline-end {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n#check[_ngcontent-%COMP%] {\n  -webkit-appearance: outline;\n     -moz-appearance: outline;\n          appearance: outline;\n  width: 150px;\n}\n\n.aadharDocNum[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.aadharFetchDiv[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-left: 10px;\n}\n\n.mainAadhar[_ngcontent-%COMP%] {\n  margin-top: 1%;\n}\n\n.aadharInput[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.marginTopKyc[_ngcontent-%COMP%] {\n  margin-top: -1.2%;\n}\n\n.aadharInput1[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 3%;\n  text-align: center;\n}\n\n.toggleGroup1[_ngcontent-%COMP%] {\n  font-size: 10px;\n  height: 40px;\n  margin-top: 4%;\n  cursor: pointer;\n}\n\n.aadharForm[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  margin-left: 85px;\n}\n\n.toggleGroup[_ngcontent-%COMP%] {\n  padding: 10px 30px 10px 25px;\n  border: 1px solid lightgrey;\n  margin-top: 1%;\n}\n\n.toggleGroup1[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n\n#dateOf[_ngcontent-%COMP%] {\n  height: 48px;\n}\n\n.aadharCheck[_ngcontent-%COMP%] {\n  color: green;\n  margin-left: -8%;\n  margin-top: 5%;\n}\n\n.aadharUpload[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  gap: 20px;\n}\n\n.aadharDoc[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-top: -0.5%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.form13[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.form1[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -9%;\n  width: 150px;\n  color: white;\n  background-color: gray;\n  border-radius: 45px;\n  margin-left: -17.2%;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-top: 10px;\n  margin: 10px auto 0 auto;\n  margin-bottom: 3%;\n}\n\n.changeInput[_ngcontent-%COMP%] {\n  opacity: 0.0;\n  position: absolute;\n  top: 0;\n  left: 15px;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.changeDiv[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n}\n\n.mat-form-field-flex[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  gap: 10px;\n}\n\n.flex-grow-2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  gap: 10px;\n  margin-left: -10%;\n}\n\n.alignment[_ngcontent-%COMP%] {\n  border-style: none !important;\n  outline: none;\n}\n\n#dob[_ngcontent-%COMP%] {\n  width: 92% !important;\n  float: right;\n}\n\n#toggle[_ngcontent-%COMP%] {\n  margin-top: -2%;\n}\n\n#max-width[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\n#drop-max-width[_ngcontent-%COMP%] {\n  width: 190px;\n}\n\n#radio[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\nradioGroup[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#nationality[_ngcontent-%COMP%] {\n  width: 210px;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  margin-right: 6%;\n}\n\n.change[_ngcontent-%COMP%] {\n  color: #2680EB;\n  text-align: center;\n  text-decoration: underline;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n  margin-right: -18.7%;\n}\n\n.button1[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n  background-color: white;\n  align-items: center;\n}\n\n.finish1[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.finish[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  \n  background: #6C6C6C 0% 0% no-repeat padding-box;\n  border-radius: 24px;\n  opacity: 0.38 !important;\n  color: white;\n}\n\n.back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  letter-spacing: 0px;\n  color: #5D5D5D;\n  cursor: pointer;\n}\n\n.Next1[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 80%;\n  color: #374664;\n  font-weight: 600;\n}\n\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus {\n  background: red;\n}\n\n.mat-tab-label-active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n  .mat-tab-label-active {\n  color: #6988f6 !important;\n}\n\n.verification[_ngcontent-%COMP%] {\n  float: right;\n  color: #2a59e7;\n}\n\n  .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: #6988f6 !important;\n  height: 4px;\n}\n\nmat-tab-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.line[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.text[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: block;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  font-size: 25px;\n  text-align: center;\n  margin-right: 10px;\n  background: #fff;\n  line-height: 1.7em;\n}\n\nfigure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30px;\n  height: auto;\n}\n\n.formSectionContainer[_ngcontent-%COMP%] {\n  gap: 40px;\n  display: grid;\n  grid-template-columns: 200px auto;\n}\n\n@media (max-width: 768px) {\n  .formSectionContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n\n.formImg[_ngcontent-%COMP%] {\n  height: 200px !important;\n  width: 200px !important;\n  background-color: whitesmoke;\n  border-radius: 10%;\n}\n\n.dropDown[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #4286f4 !important;\n}\n\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%] {\n  color: #4286f4;\n  background-color: #4286f4;\n}\n\n.Upload[_ngcontent-%COMP%] {\n  vertical-align: c;\n  align-self: center;\n  margin-top: 20px;\n  font-size: 12px;\n  text-decoration: underline;\n  color: #2680EB;\n}\n\n#row[_ngcontent-%COMP%] {\n  font-size: 9px;\n  opacity: 100%;\n  color: #2680EB;\n}\n\n.span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 30% !important;\n}\n\n.span8[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 60% !important;\n}\n\n.span12[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 10% !important;\n}\n\n.spanDiv[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1%;\n  margin-top: 2%;\n}\n\n#bill[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  margin-bottom: -25px;\n}\n\n.billName[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 20px;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  position: unset !important;\n  left: 200px !important;\n  align-self: center !important;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.flex-basis-50[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n}\n\n.gap-20[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n\n.addressContainer[_ngcontent-%COMP%] {\n  padding: 0 20px 0 0 !important;\n}\n\n.address-card[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.inline-block[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n@media (min-width: 576px) {\n  .addressGrid[_ngcontent-%COMP%] {\n    gap: 20px;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n.addressGridInner[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.gap-20[_ngcontent-%COMP%] {\n  gap: 20px;\n}\n\n.flex-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.height-auto[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.align-self-flex-end[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n\n.align-self-flex-start[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n\n.width-fit-content[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n#addressBlock[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n\n#communicationDivider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\n.communicationForm[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n\n#communicationBlockForm[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  border: 1px solid lightgrey;\n  padding: 20px;\n}\n\n#DocumentForm[_ngcontent-%COMP%] {\n  width: 650px;\n  border: 1px solid lightgrey;\n  padding: 10px;\n}\n\n#DocumentForm1[_ngcontent-%COMP%] {\n  width: 650px;\n  border: 1px solid lightgrey;\n  padding: 10px;\n  padding-bottom: 50px;\n}\n\n#docMainDivider[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n\n#dividerInside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\n.errbd[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\n.hide[_ngcontent-%COMP%] {\n  color: white;\n  display: none;\n}\n\ninput[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n#check[_ngcontent-%COMP%] {\n  -webkit-appearance: outline;\n     -moz-appearance: outline;\n          appearance: outline;\n}\n\n.aadharDocNum[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.aadharFetch[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  color: #456EFE;\n  font-size: small;\n  align-self: center;\n}\n\nF.breadcrumb[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 40px;\n  width: 100%;\n  background-color: white;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 180px;\n}\n\napp-kyc-verification[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.verify[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\n.fetchButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  text-decoration: underline;\n  margin-left: 10px;\n}\n\n.verifyButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  height: 10px;\n}\n\n.verifyButton1[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  height: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 6%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\nmat-tab-group[_ngcontent-%COMP%] {\n  padding-left: 3%;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 60vh;\n  border: 1px solid black;\n  padding: 10px 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2), .flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  margin-top: 5px;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  flex: 1;\n}\n\n.formField1[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.formField[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n}\n\n.cardwidth[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.inputMatcard[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  max-width: 500px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 10px;\n  margin-top: 10px;\n}\n\n.inputMatcard1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 12px;\n  width: 100%;\n}\n\n.inputMatcard2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  width: 20px;\n}\n\nmat-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.form1[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 13%;\n  padding-right: 14%;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  max-width: 950px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin: 10px auto 0 auto;\n  margin-bottom: 3%;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.alignment[_ngcontent-%COMP%] {\n  border-style: none !important;\n  outline: none;\n}\n\n#index[_ngcontent-%COMP%] {\n  max-width: 120px;\n}\n\n.line[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n  margin-left: 10px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 80%;\n  font-weight: 600;\n}\n\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus {\n  background: red;\n}\n\n.mat-tab-label-active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n  .mat-tab-label-active {\n  color: #6988f6 !important;\n}\n\n.verification[_ngcontent-%COMP%] {\n  float: right;\n  color: #2a59e7;\n}\n\n  .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: #6988f6 !important;\n  height: 4px;\n  width: 21pc !important;\n  margin-left: 2%;\n}\n\n  .egret-blue .mat-tab-label, .egret-blue[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  width: 21pc;\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.87);\n}\n\nmat-tab-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.mat-select-arrow-wrapper[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  width: 40px !important;\n}\n\n.Back1[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  letter-spacing: 0px;\n  color: #5D5D5D;\n  cursor: pointer;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.Next12[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  \n  background: #6C6C6C 0% 0% no-repeat padding-box;\n  border-radius: 24px;\n  opacity: 0.38 !important;\n  color: white;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n  font-weight: bold;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.green[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n.red[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n.selectTime[_ngcontent-%COMP%] {\n  height: 42px;\n  width: 168px;\n  text-align: center;\n  border: none;\n  cursor: pointer;\n  background-color: white;\n  border-radius: 10px;\n  border: #d8d3d3 solid 1px;\n  margin-bottom: 20px;\n}\n\n.matContent[_ngcontent-%COMP%] {\n  font-size: 12px;\n  justify-content: center;\n  color: gray;\n}\n\n.button1[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 13%;\n  padding-right: 14%;\n}\n\n.line[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  color: darkgrey;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.Next[_ngcontent-%COMP%]:focus {\n  background-color: #426af5;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  max-width: 1250px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin: 10px auto 0 auto;\n  margin-bottom: 3%;\n}\n\n.demo-inline-calendar-card[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n .egret-navy .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: white;\n}\n\n.paraFont[_ngcontent-%COMP%] {\n  color: #949494;\n  font-family: 'Manrope';\n  font-size: 11px;\n}\n\n.textFont[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: 'Manrope';\n  font-size: 14px;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%]   mat-calendar-period-button[_ngcontent-%COMP%]   mat-button[_ngcontent-%COMP%]   mat-button-base.mat-button-wrapper[_ngcontent-%COMP%] {\n  margin-left: 90px !important;\n}\n\n .mat-calendar-header {\n  padding-top: 0px !important;\n  padding-right: 8px !important;\n  padding-bottom: 0px !important;\n  padding-left: 0px !important;\n  background-color: #456EFE;\n  color: white;\n  border-radius: 10px;\n}\n\n .egret-blue .mat-calendar-body-selected {\n  background-color: #FE6700;\n  color: white;\n  border-radius: 10px;\n}\n\n .egret-blue .mat-calendar-arrow {\n  border-top-color: white !important;\n}\n\n.selectTime[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  background-color: red;\n  padding: 10px;\n}\n\n .mat-button-toggle-group {\n  border: 0px;\n}\n\n#mat-button-toggle-2[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  margin-left: 30px;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  background-color: #FE6700;\n}\n\nmat-card.selectTime[_ngcontent-%COMP%]:active {\n  background-color: yellow;\n}\n\n.Back[_ngcontent-%COMP%] {\n  background-color: gray;\n  color: white;\n}\n\n.timeboxes[_ngcontent-%COMP%] {\n  width: 33%;\n  display: inline-block;\n  text-align: center;\n}\n\n.bookedSlot[_ngcontent-%COMP%] {\n  background-color: #d4d4d4 !important;\n  pointer-events: none;\n}\n\n.availableSlot[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  cursor: pointer;\n  color: #7c7c7c !important;\n}\n\n.selectedClass[_ngcontent-%COMP%] {\n  color: #f7f7f7 !important;\n  background-image: linear-gradient(to right, #FE6700, #FE8430, #FEA96E) !important;\n}\n\n.formSectionContainer[_ngcontent-%COMP%] {\n  gap: 40px;\n  display: grid;\n  grid-template-columns: 200px auto;\n}\n\n@media (max-width: 768px) {\n  .formSectionContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n\n  .cdk-overlay-pane {\n  min-width: 270px !important;\n  padding: 7px 0;\n}\n\n  .mat-card-avatar {\n  max-width: 15% !important;\n}\n\n.example-header-image-dropdown[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 8px;\n  background-size: cover;\n  background-color: #AED6F1;\n  max-width: 15% !important;\n  width: 25px;\n  height: 35px;\n  border-radius: 50%;\n}\n\n.headerMapping[_ngcontent-%COMP%] {\n  top: 108px;\n  left: 120px;\n  height: 17px;\n  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 12px/17px Manrope;\n  letter-spacing: var(--unnamed-character-spacing-0);\n  text-align: left;\n  font: normal normal normal 12px/17px Manrope;\n  letter-spacing: 0px;\n  color: #BFBFC1;\n  padding-left: 70px;\n}\n\n[_nghost-%COMP%]     .mat-tab-header {\n  background-color: white;\n  margin-left: -46px;\n}\n\n.outerDiv[_ngcontent-%COMP%] {\n  padding-right: 50px;\n  padding-left: 14px;\n  padding-top: 24px;\n}\n\n  .mat-calendar-body-cell[disabled] {\n  pointer-events: none;\n}\n\n  .mat-calendar-body-cell[disabled] .mat-calendar-body-cell-content {\n  color: red !important;\n}\n\n  .custom-date-class .mat-calendar-body-cell-content {\n  color: red !important;\n  border-radius: 100% !important;\n}\n\n  td.custom-date-class {\n  pointer-events: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlkZW8tdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUlBO0VBQ0UsbUJBQW1CO0FBRHJCOztBQUdBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtBQUFwQjs7QUFHQTtFQUNFLGVBQWU7QUFBakI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUFiOztBQU1BO0VBQ0UsaUJBQWlCO0FBSG5COztBQUtBO0VBQ0EsYUFBYTtBQUZiOztBQUlBO0VBQ0Usa0JBQWtCO0FBRHBCOztBQUdBO0VBRUUsYUFBYTtFQUNiLHNDQUFzQztBQUR4Qzs7QUFJQTtFQUNFLFlBQVk7QUFEZDs7QUFJQTtFQUNFLGFBQWE7QUFEZjs7QUFJQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0RBQWtEO0FBRHBEOztBQUlBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFEckI7O0FBSUE7RUFDRSxnQkFBZ0I7QUFEbEI7O0FBSUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFEeEI7O0FBSUE7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0FBRnhCOztBQUtBOztFQUVFLGVBQWU7QUFGakI7O0FBS0E7RUFDRSxPQUFPO0FBRlQ7O0FBUUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUxiOztBQVFBO0VBRUUsWUFBWTtFQUNaLFlBQVk7QUFOZDs7QUFhQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsc0JBQXNC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K0JBQStCO0FBL09qQyIsImZpbGUiOiJ2aWRlby12ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAvLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnByLTEwe1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmZldGNoQnV0dG9uIHtcclxuICBjb2xvcjogIzQ1NkVGRTtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxufVxyXG5cclxubWF0LWhpbnQge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmFwcC1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8gLnZlcmlmaWNhdGlvbkhlYWR7XHJcbi8vICAgb3BhY2l0eTogOTAlO1xyXG4vLyB9XHJcbi5tYXJnaW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAlO1xyXG59XHJcbiNmZWNoe1xyXG5kaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5mZWNoQnV0dG9uRGl2e1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4jZm9ybWZldGNoe1xyXG4gIFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMjUlIDI1JSAyNSU7XHJcbn1cclxuXHJcbi5iYXNpYy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCg1MCUsIDFmcikpO1xyXG59XHJcblxyXG4ubWFpbi1oZWFkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbm1hdC10YWItZ3JvdXAge1xyXG4gIHBhZGRpbmctbGVmdDogMiU7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBoZWlnaHQ6IDYwdmg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyICoge1xyXG4gIC8vIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gIG1hcmdpbjogMCA1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoMiksXHJcbi5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDMpIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDMpIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4vLyAgIC5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDQpIHtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICB9XHJcbi5mb3JtRmllbGQxIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5mb3JtRmllbGQge1xyXG4gIC8vIHdpZHRoOjIwMHB4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB3aWR0aDogMTIwcHg7XHJcblxyXG4gIC8vICAgZ2FwOiAyMHB4O1xyXG4gIC8vIH1cclxuXHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRvb2x0aXAge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC45KTtcclxuICBib3JkZXI6MXB4IHNvbGlkIGdyYXk7XHJcbiAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuLmZvcm1GaWVsZDIge1xyXG4gIC8vIHdpZHRoOjIwMHB4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLy8gICBnYXA6IDIwcHg7XHJcbiAgLy8gfVxyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuXHJcbiAgLy8gd2lkdGg6IDIyMHB4O1xyXG59XHJcblxyXG4uaW5wdXRHZW5kZXIge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuICAvLyB3aWR0aDogMjIwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdE5hbWUge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuICAvLyB3aWR0aDogNDUwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdE5ldyB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcblxyXG4gIC8vIHdpZHRoOiA0NTVweDtcclxufVxyXG5cclxuLmlucHV0TWF0TGFzdE5hbWUge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuICAvLyB3aWR0aDogMjAwcHg7XHJcblxyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkRG9jIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyB3aWR0aDoyNzBweDtcclxuICAvLyB3aWR0aDogMTk1cHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmRNYWlsIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyB3aWR0aDoxMDAlO1xyXG4gIC8vIHdpZHRoOiA0MTBweDtcclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZE1haWxBZGQge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIC8vIHdpZHRoOjEwMCU7XHJcbiAgLy8gd2lkdGg6IDc1MHB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkTWFycml0aWFsIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyB3aWR0aDoxMDAlO1xyXG4gIC8vIHdpZHRoOiA0NTBweDtcclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZFByZWZpeCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgLy8gd2lkdGg6MTAwJTtcclxuICAvLyB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmQzIHtcclxuICBmbGV4LWdyb3c6IDI7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vbWF4LXdpZHRoOjIwOHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuXHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmRBZGQge1xyXG4gIGZsZXgtZ3JvdzogMjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy9tYXgtd2lkdGg6MjA4cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgLy8gd2lkdGg6MjAwcHg7XHJcblxyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkNCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXgtd2lkdGg6IDIwOHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIC8vIG1hcmdpbi1yaWdodDotMSU7XHJcblxyXG59XHJcblxyXG4vLyAjZm9ybTF7XHJcbi8vICAgbWFyZ2luLXJpZ2h0Oi0xJTtcclxuLy8gfVxyXG4uaW5wdXRNYXRjYXJkMSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuXHJcbiAgLy8gaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkMiB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgLy8gcGFkZGluZzogMTJweDtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuICAvLyBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uaW5wdXRDbGFzcyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgZGl2Lm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQge1xyXG4gIGJvcmRlci1jb2xvcjogMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAge1xyXG4gIGJvcmRlci1jb2xvcjogMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmQge1xyXG4gIGJvcmRlci1jb2xvcjogMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuI2NoZWNre1xyXG4gIGFwcGVhcmFuY2U6IG91dGxpbmU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5hYWRoYXJEb2NOdW17XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi5hYWRoYXJGZXRjaERpdntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5tYWluQWFkaGFye1xyXG4gIG1hcmdpbi10b3A6MSU7XHJcbn1cclxuXHJcbi5hYWRoYXJJbnB1dHtcclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxufVxyXG4vLyAubWFyZ2luVG9we1xyXG4vLyAgIC8vIG1hcmdpbi10b3A6IC00JTtcclxuLy8gfVxyXG4ubWFyZ2luVG9wS3lje1xyXG4gICBtYXJnaW4tdG9wOiAtMS4yJTtcclxufVxyXG4uYWFkaGFySW5wdXQxe1xyXG5mb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAtNCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRvZ2dsZUdyb3VwMXtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYWFkaGFyRm9ybXtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWxlZnQ6ODVweDtcclxufVxyXG4udG9nZ2xlR3JvdXB7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMjVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjhmNztcclxuICAvLyBmb250LXNpemU6IDEwcHg7XHJcbiAgLy8gaGVpZ2h0OiA0MHB4O1xyXG4gbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuXHJcbi50b2dnbGVHcm91cDF7XHJcbi8vICAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMjVweDtcclxuLy8gICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmV5O1xyXG4vLyAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmOGY3O1xyXG4vLyAgIC8vIGZvbnQtc2l6ZTogMTBweDtcclxuLy8gICAvLyBoZWlnaHQ6IDQwcHg7XHJcbiBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG4jZGF0ZU9me1xyXG4gIGhlaWdodDogNDhweDtcclxufVxyXG4uYWFkaGFyQ2hlY2t7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIG1hcmdpbi1sZWZ0OiAtOCU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmFhZGhhclVwbG9hZHtcclxuICBoZWlnaHQ6NDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjBweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYWFkaGFyRG9je1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IC0wLjUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAvLyBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmZvcm0xMyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIC8vIGdhcDogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG59XHJcblxyXG4uZm9ybTEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBnYXA6IDUwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8vIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGdhcDogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC8vIHBhZGRpbmctbGVmdDogMTElO1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6IDE0JTtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uQmFja3tcclxuICBcclxuICBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6LTklO1xyXG4gIHdpZHRoOjE1MHB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICBtYXJnaW4tbGVmdDogLTE3LjIlO1xyXG59XHJcbi5tYXRDYXJkIHtcclxuICBtYXgtd2lkdGg6IDE2MDBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn1cclxuXHJcbi5jaGFuZ2VJbnB1dCB7XHJcbiAgb3BhY2l0eTogMC4wO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMTVweDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNoYW5nZURpdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbn1cclxuXHJcbi5mbGV4LWdyb3ctMSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGdhcDogMTBweDtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5mbGV4LWdyb3ctMiB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGdhcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogLTEwJTtcclxufVxyXG5cclxuLmFsaWdubWVudCB7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI2RvYiB7XHJcbiAgd2lkdGg6OTIlICFpbXBvcnRhbnQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4jdG9nZ2xle1xyXG5cclxuICBtYXJnaW4tdG9wOi0yJTtcclxufVxyXG4jbWF4LXdpZHRoIHtcclxuICBtYXgtd2lkdGg6IDE1MHB4XHJcbn1cclxuXHJcbiNkcm9wLW1heC13aWR0aCB7XHJcbiAgd2lkdGg6IDE5MHB4O1xyXG59XHJcblxyXG4jcmFkaW8ge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxucmFkaW9Hcm91cCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jbmF0aW9uYWxpdHkge1xyXG4gIHdpZHRoOiAyMTBweDtcclxufVxyXG5cclxubWF0LWxhYmVsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDYlO1xyXG59XHJcblxyXG4uY2hhbmdlIHtcclxuICBjb2xvcjogIzI2ODBFQjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcblxyXG4uTmV4dCB7XHJcbiAgbWFyZ2luOjEycHggMHB4IDEycHggMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0Oi0xMyU7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwxMDYsMjQ1KTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTE4LjclO1xyXG59XHJcbi5idXR0b24xIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDExJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuIFxyXG59XHJcblxyXG4uZmluaXNoMSB7XHJcbiAgbWFyZ2luOjEycHggMHB4IDEycHggMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0Oi0xMyU7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwxMDYsMjQ1KTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTVweDtcclxufVxyXG4uZmluaXNoIHtcclxuXHRtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xyXG4gIG1hcmdpbi1yaWdodDotMTMlO1xyXG4vL2xlZnQ6IDEwNjNweDtcclxud2lkdGg6IDE1MHB4O1xyXG4vKiBVSSBQcm9wZXJ0aWVzICovXHJcbmJhY2tncm91bmQ6ICM2QzZDNkMgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG5ib3JkZXItcmFkaXVzOiAyNHB4O1xyXG5vcGFjaXR5OiAwLjM4ICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbi5iYWNre1xyXG5cclxuICAgIG1hcmdpbjoxMnB4IDBweCAxMnB4IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0Oi0xNSU7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogIzVENUQ1RDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuLk5leHQxIHtcclxuICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xyXG4gIC8vIG1hcmdpbi1yaWdodDogLTEzJTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxMDYsIDI0NSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbiAgLy9tYXJnaW4tbGVmdDoxMDAlO1xyXG59XHJcblxyXG5ociB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIGJvcmRlcjogdGhpY2s7XHJcbiAgLyogaGVpZ2h0OiAzcHg7ICovXHJcbiAgLyogbGluZS1oZWlnaHQ6IDNweDsgKi9cclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC8qIGJvcmRlci13aWR0aDogM3B4OyAqL1xyXG4gIGJvcmRlci1ibG9jay13aWR0aDogdW5zZXQ7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgLy8gd2lkdGg6IDIwcHg7XHJcbiAgY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KTtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiBpbml0aWFsO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBjb2xvcjogIzM3NDY2NDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMsXHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyxcclxuLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbDpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3VzLFxyXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcblxyXG4ubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmVyaWZpY2F0aW9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6IHJnYig0MiwgODksIDIzMSk7XHJcbn1cclxuXHJcbi8vIC5tYXQtaW5rLWJhcntcclxuLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgYm90dG9tOiAwO1xyXG4vLyAgICAgaGVpZ2h0OiAycHg7XHJcbi8vICAgICB0cmFuc2l0aW9uOiA1MDBtcyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSk7XHJcbi8vICAgICBoZWlnaHQ6IDRweDtcclxuLy8gICAgIGNvbG9yOlxyXG4vLyB9XHJcbjo6bmctZGVlcCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIC8vIHdpZHRoOiAxMTZweCAhaW1wb3J0YW50O1xyXG5cclxuICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbm1hdC10YWItbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG59XHJcblxyXG4vLyBtYXQtb3B0aW9ue1xyXG4vLyAgIHdpZHRoOiAyMHB4O1xyXG4vLyB9XHJcbi8vIC5tYXQtc2VsZWN0LWFycm93LXdyYXBwZXIge1xyXG4vLyAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbi8vICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuLy8gICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5maWd1cmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG59XHJcblxyXG5maWd1cmUgaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZm9ybVNlY3Rpb25Db250YWluZXIge1xyXG4gIGdhcDogNDBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogO1xyXG4gIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpICk7XHJcbiAgLy9ncmlkLWdhcDogMjBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZvcm1TZWN0aW9uQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtSW1nIHtcclxuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG5cclxuLmRyb3BEb3duIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNjYsIDEzNCwgMjQ0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcclxuICBjb2xvcjogcmdiKDY2LCAxMzQsIDI0NCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxMzQsIDI0NCk7XHJcbn1cclxuXHJcbi5VcGxvYWQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjb2xvcjogIzI2ODBFQjtcclxufVxyXG5cclxuI3JvdyB7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxuICBjb2xvcjogIzI2ODBFQjtcclxufVxyXG5cclxuLnNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNwYW44IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcGFuMTIge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNwYW5EaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcblxyXG5cclxufVxyXG5cclxuI2JpbGwge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAtNCU7XHJcbn1cclxuXHJcbi5iaWxsTmFtZSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLm1hcmdpbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcclxuICBsZWZ0OiAyMDBweCAhaW1wb3J0YW50O1xyXG5cclxuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmxleC1iYXNpcy01MCB7XHJcbiAgZmxleC1iYXNpczogNTAlO1xyXG59XHJcblxyXG4uZ2FwLTIwIHtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5hZGRyZXNzQ29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwIDIwcHggMCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hZGRyZXNzLWNhcmQge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmlubGluZS1ibG9jayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc3BhY2UtYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5hZGRyZXNzR3JpZCB7XHJcbiAgICAvLyBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xyXG4gIH1cclxufVxyXG5cclxuLmFkZHJlc3NHcmlkSW5uZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcclxufVxyXG5cclxuLy8gOjpuZy1kZWVwIC5tYXQtY2FyZCAubWF0LWRpdmlkZXItaG9yaXpvbnRhbCB7XHJcbi8vICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4vLyAgIGxlZnQ6IDA7XHJcbi8vIH1cclxuLmZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi53cmFwIHtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5mbGV4LWdyb3ctMSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uanVzdGlmeS1iZXR3ZWVuIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5nYXAtMjAge1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLmZsZXgtY29sdW1uIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaGVpZ2h0LWF1dG8ge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmFsaWduLXNlbGYtZmxleC1lbmQge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uYWxpZ24tc2VsZi1mbGV4LXN0YXJ0IHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ud2lkdGgtZml0LWNvbnRlbnQge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLm0tOCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5ibG9jayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNhZGRyZXNzQmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4jY29tbXVuaWNhdGlvbkRpdmlkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uY29tbXVuaWNhdGlvbkZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuI2NvbW11bmljYXRpb25CbG9ja0Zvcm0ge1xyXG5cclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNEb2N1bWVudEZvcm0ge1xyXG4gIHdpZHRoOiA2NTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI0RvY3VtZW50Rm9ybTEge1xyXG4gIHdpZHRoOiA2NTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuI2RvY01haW5EaXZpZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuI2RpdmlkZXJJbnNpZGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uZXJyYmRcclxue1xyXG4gIGJvcmRlcjoxcHggc29saWQgcmVkO1xyXG59XHJcbi5oaWRlXHJcbntcclxuICBjb2xvcjp3aGl0ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9ue1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7XHJcbiAgICBtYXJnaW46MDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxufVxyXG4jY2hlY2t7XHJcbiAgYXBwZWFyYW5jZTogb3V0bGluZTtcclxufVxyXG4uYWFkaGFyRG9jTnVte1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmFhZGhhckZldGNoe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBcclxuICBjb2xvcjojNDU2RUZFO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4vLyB2aWRlb1xyXG5cclxuRi5icmVhZGNydW1iIHtcclxuXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuLy8gLmhlYWQge1xyXG4vLyAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuLy8gICAvLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuLy8gfVxyXG4uZnVsbC13aWR0aHtcclxuICB3aWR0aDoxODBweDtcclxufVxyXG5hcHAta3ljLXZlcmlmaWNhdGlvbntcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4uYXBwLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi52ZXJpZnl7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5mZXRjaEJ1dHRvbntcclxuICBjb2xvcjogIzQ1NkVGRTtcclxuICBmb250LWZhbWlseTonTW9udHNlcnJhdCc7XHJcbiAgZm9udC1zaXplOiAxMnB4OyBcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi52ZXJpZnlCdXR0b257XHJcbiAgY29sb3I6ICM0NTZFRkU7XHJcbiAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnO1xyXG4gIGZvbnQtc2l6ZTogMTJweDsgXHJcbiAvLyBtYXJnaW4tbGVmdDogMzVweDtcclxuIC8vZmxvYXQ6IHJpZ2h0O1xyXG4gLy9wYWRkaW5nLWJvdHRvbTogMjVweDtcclxuIFxyXG4gIC8vIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGhlaWdodDogMTBweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi52ZXJpZnlCdXR0b24xe1xyXG4gIGNvbG9yOiAjNDU2RUZFO1xyXG4gIGZvbnQtZmFtaWx5OidNb250c2VycmF0JztcclxuICBmb250LXNpemU6IDEycHg7IFxyXG4gLy8gbWFyZ2luLWxlZnQ6IDQ1cHg7XHJcbiAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNwaW5uZXJ7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuXHJcbi5iYXNpYy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4ubWFpbi1oZWFkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDYlO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxubWF0LXRhYi1ncm91cCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzJTtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGhlaWdodDogNjB2aDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5mbGV4LWNvbnRhaW5lciAqIHtcclxuICAvLyB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICBtYXJnaW46IDAgNXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoMiksXHJcbi5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDMpIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoMykge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuLy8gICAuZmxleC1jb250YWluZXIgOm50aC1jaGlsZCg0KSB7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgfVxyXG4uZm9ybUZpZWxkMSB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLmZvcm1GaWVsZCB7XHJcbiAgLy8gd2lkdGg6MjAwcHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAvLyAgIGdhcDogMjBweDtcclxuICAvLyB9XHJcbn1cclxuLmNhcmR3aWR0aHtcclxuIHdpZHRoOiA1MDBweDtcclxufVxyXG4uaW5wdXRNYXRjYXJkIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSlcclxuICApO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5pbnB1dE1hdGNhcmQxIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOiA1MDBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSlcclxuICApO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vIGhlaWdodDogMzBweDtcclxufVxyXG4uaW5wdXRNYXRjYXJkMiB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpXHJcbiAgKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgLy8gcGFkZGluZzogMTJweDtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuICAvLyBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxubWF0LWhpbnR7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBnYXA6IDBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5mb3JtMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGdhcDogNTBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLy8gd2lkdGg6IDIwMHB4O1xyXG59XHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDEzJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNCU7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hdENhcmQge1xyXG4gIG1heC13aWR0aDogOTUwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG5cclxuLmZsZXgtZ3Jvdy0xIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcbi5hbGlnbm1lbnQge1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNpbmRleHtcclxuICBtYXgtd2lkdGg6MTIwcHg7XHJcbn1cclxuLy8gLmJhc2ljSW5mb3JtYXRpb257XHJcbi8vICAgb3BhY2l0eTogOTAlO1xyXG4vLyB9XHJcbi5saW5lIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlcjogdGhpY2s7XHJcbiAgLyogaGVpZ2h0OiAzcHg7ICovXHJcbiAgLyogbGluZS1oZWlnaHQ6IDNweDsgKi9cclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC8qIGJvcmRlci13aWR0aDogM3B4OyAqL1xyXG4gIGJvcmRlci1ibG9jay13aWR0aDogdW5zZXQ7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgLy8gd2lkdGg6IDIwcHg7XHJcbiAgY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KTtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiBpbml0aWFsO1xyXG4gIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbn1cclxuaW5wdXQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgLy8gY29sb3I6ICMzNzQ2NjQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgLy8gICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSlcclxuICAvLyApO1xyXG59XHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMsXHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyxcclxuLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbDpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3VzLFxyXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcbi5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAxMzYsIDI0NikgIWltcG9ydGFudDtcclxufVxyXG4udmVyaWZpY2F0aW9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6IHJnYig0MiwgODksIDIzMSk7XHJcbn1cclxuLy8gLm1hdC1pbmstYmFye1xyXG4vLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBib3R0b206IDA7XHJcbi8vICAgICBoZWlnaHQ6IDJweDtcclxuLy8gICAgIHRyYW5zaXRpb246IDUwMG1zIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTtcclxuLy8gICAgIGhlaWdodDogNHB4O1xyXG4vLyAgICAgY29sb3I6XHJcbi8vIH1cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTM2LCAyNDYpICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgd2lkdGg6IDIxcGMgIWltcG9ydGFudDtcclxuICBcclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcbjo6bmctZGVlcCAuZWdyZXQtYmx1ZSAubWF0LXRhYi1sYWJlbCwgLmVncmV0LWJsdWUgLm1hdC10YWItbGluayB7XHJcbiAgd2lkdGg6IDIxcGM7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG59XHJcbm1hdC10YWItbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG59XHJcbi8vIG1hdC1vcHRpb257XHJcbi8vICAgd2lkdGg6IDIwcHg7XHJcbi8vIH1cclxuLm1hdC1zZWxlY3QtYXJyb3ctd3JhcHBlciB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLkJhY2sxe1xyXG5cclxuICBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6LTE1JTtcclxuICB3aWR0aDoxNTBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG5cdGNvbG9yOiAjNUQ1RDVEO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uTmV4dHtcclxuICBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0Oi0xMyU7XHJcbiAgd2lkdGg6MTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LDEwNiwyNDUpO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbn1cclxuXHJcbi5OZXh0MTIge1xyXG5cdG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0Oi0xMyU7XHJcbi8vbGVmdDogMTA2M3B4O1xyXG53aWR0aDogMTUwcHg7XHJcbi8qIFVJIFByb3BlcnRpZXMgKi9cclxuYmFja2dyb3VuZDogIzZDNkM2QyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbmJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbm9wYWNpdHk6IDAuMzggIWltcG9ydGFudDtcclxuY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuaW5wdXQge2JvcmRlcjowO291dGxpbmU6MDtcclxuZm9udC13ZWlnaHQ6IGJvbGR9XHJcbmlucHV0OmZvY3VzIHtvdXRsaW5lOm5vbmUhaW1wb3J0YW50O31cclxuLy8gLmNhcmQsbWF0LWxhYmVse1xyXG4vLyBtYXJnaW4gOjEwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLmdyZWVuIHtcclxuYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5yZWQge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuLnNlbGVjdFRpbWVcclxue1xyXG5oZWlnaHQ6IDQycHg7XHJcbndpZHRoOiAxNjhweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5ib3JkZXI6IG5vbmU7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbmJvcmRlcjogcmdiKDIxNiwgMjExLCAyMTEpIHNvbGlkIDFweDtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcblxyXG59XHJcbi5tYXRDb250ZW50XHJcbntcclxuZm9udC1zaXplOiAxMnB4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuY29sb3I6Z3JheTtcclxuXHJcblxyXG59XHJcblxyXG4uYnV0dG9uMSB7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbm1hcmdpbi1ib3R0b206IDIwcHg7XHJcbmdhcDogMjBweDtcclxuZmxleC13cmFwOiB3cmFwO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbnBhZGRpbmctbGVmdDogMTMlO1xyXG5wYWRkaW5nLXJpZ2h0OiAxNCU7XHJcbi8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5saW5lIHtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxuYm9yZGVyOiB0aGljaztcclxuLyogaGVpZ2h0OiAzcHg7ICovXHJcbi8qIGxpbmUtaGVpZ2h0OiAzcHg7ICovXHJcbmJvcmRlci1zdHlsZTogc29saWQ7XHJcbi8qIGJvcmRlci13aWR0aDogM3B4OyAqL1xyXG5ib3JkZXItYmxvY2std2lkdGg6IHVuc2V0O1xyXG5jb2xvcjogYmx1ZTtcclxuLy8gd2lkdGg6IDIwcHg7XHJcbmNvbG9yOiByZ2IoMTA1LCAxMzYsIDI0Nik7XHJcbndpZHRoOiA0MHB4O1xyXG5ib3JkZXItcmFkaXVzOiA1cHg7XHJcbm1hcmdpbjogaW5pdGlhbDtcclxufVxyXG4uQmFja3tcclxuXHJcbm1hcmdpbjoxMnB4IDBweCAxMnB4IDBweDtcclxubWFyZ2luLWxlZnQ6LTE1JTtcclxud2lkdGg6MTUwcHg7XHJcbmNvbG9yOmRhcmtncmV5O1xyXG5ib3JkZXItcmFkaXVzOiA0NXB4O1xyXG59XHJcbi5OZXh0e1xyXG5tYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbm1hcmdpbi1yaWdodDotMTMlO1xyXG53aWR0aDoxNTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LDEwNiwyNDUpO1xyXG5jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czogNTVweDtcclxufVxyXG4uTmV4dDpmb2N1c3tcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LDEwNiwyNDUpO1xyXG59XHJcbi5tYXRDYXJkIHtcclxubWF4LXdpZHRoOiAxMjUwcHg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5tYXJnaW4tbGVmdDogMTUlO1xyXG5tYXJnaW4tcmlnaHQ6IDE1JTtcclxubWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xyXG5tYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG4uZGVtby1pbmxpbmUtY2FsZW5kYXItY2FyZCB7XHJcbndpZHRoOiAzMDBweDtcclxufVxyXG46Om5nLWRlZXAuZWdyZXQtbmF2eSAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbClcclxue1xyXG5ib3JkZXItY29sb3I6IHdoaXRlO1xyXG4vLyBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuLnBhcmFGb250e1xyXG5jb2xvcjogIzk0OTQ5NDtcclxuZm9udC1mYW1pbHk6J01hbnJvcGUnO1xyXG5mb250LXNpemU6IDExcHg7XHJcbn1cclxuLnRleHRGb250e1xyXG5jb2xvcjogIzAwMDAwMDtcclxuZm9udC1mYW1pbHk6J01hbnJvcGUnO1xyXG5mb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLm1hdC1mb2N1cy1pbmRpY2F0b3IgbWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b24gbWF0LWJ1dHRvbiBtYXQtYnV0dG9uLWJhc2UubWF0LWJ1dHRvbi13cmFwcGVyXHJcbntcclxubWFyZ2luLWxlZnQ6IDkwcHggIWltcG9ydGFudDtcclxuXHJcblxyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWNhbGVuZGFyLWhlYWRlciB7XHJcbnBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuXHJcbiBcclxuYmFja2dyb3VuZC1jb2xvcjogIzQ1NkVGRTtcclxuY29sb3I6IHdoaXRlO1xyXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyBoZWlnaHQ6IDQycHg7XHJcbi8vIHdpZHRoOiAzNTRweDtcclxuXHJcblxyXG59XHJcblxyXG46Om5nLWRlZXAuZWdyZXQtYmx1ZSAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjRkU2NzAwO1xyXG5jb2xvcjogd2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5lZ3JldC1ibHVlIC5tYXQtY2FsZW5kYXItYXJyb3dcclxue1xyXG5ib3JkZXItdG9wLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi8vIDo6bmctZGVlcC5tYXQtZm9jdXMtaW5kaWNhdG9yIG1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b24gbWF0LWljb24tYnV0dG9uIG1hdC1idXR0b24tYmFzZVxyXG4vLyB7XHJcbi8vIHBhZGRpbmctbGVmdDogOTBweDtcclxuLy8gZmxvYXQ6IGxlZnQ7XHJcbi8vIH1cclxuXHJcblxyXG4uc2VsZWN0VGltZSA6Zm9jdXNcclxue1xyXG5iYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxucGFkZGluZzoxMHB4O1xyXG59XHJcbi8vIDo6bmctZGVlcC5lZ3JldC1ibHVlIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsIC5lZ3JldC1ibHVlIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkXHJcbi8vIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZFxyXG46Om5nLWRlZXAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXBcclxue1xyXG5ib3JkZXI6MHB4IDtcclxufVxyXG4jbWF0LWJ1dHRvbi10b2dnbGUtMlxyXG57XHJcbm1hcmdpbi1yaWdodDogMzBweDtcclxubWFyZ2luLWxlZnQ6IDMwcHg7XHJcblxyXG59XHJcbmJ1dHRvbjpmb2N1cyB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNGRTY3MDA7XHJcbn1cclxubWF0LWNhcmQuc2VsZWN0VGltZTphY3RpdmVcclxue1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuLkJhY2t7XHJcbmJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpbWVib3hlc3tcclxud2lkdGg6MzMlOyBcclxuZGlzcGxheTogaW5saW5lLWJsb2NrOyBcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ib29rZWRTbG90e1xyXG4vLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5YzljOWMgLCNjNGM0YzQsI2Y1ZjVmNSkhaW1wb3J0YW50O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyMTIsIDIxMikhaW1wb3J0YW50O1xyXG5wb2ludGVyLWV2ZW50czogbm9uZTtcclxuLy8gb3BhY2l0eTogLjUgIWltcG9ydGFudDtcclxufVxyXG4uYXZhaWxhYmxlU2xvdHtcclxuYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG5jdXJzb3I6cG9pbnRlcjtcclxuY29sb3I6ICM3YzdjN2MgIWltcG9ydGFudDtcclxufVxyXG4uc2VsZWN0ZWRDbGFzc3tcclxuY29sb3I6ICNmN2Y3ZjcgIWltcG9ydGFudDtcclxuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkU2NzAwICwjRkU4NDMwLCNGRUE5NkUpIWltcG9ydGFudDsgXHJcbn1cclxuLmZvcm1TZWN0aW9uQ29udGFpbmVyIHtcclxuZ2FwOiA0MHB4O1xyXG5kaXNwbGF5OiBncmlkO1xyXG4vLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDtcclxuLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoIGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikgKTtcclxuLy9ncmlkLWdhcDogMjBweDtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xyXG4uZm9ybVNlY3Rpb25Db250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktcGFuZSB7XHJcbiAgbWluLXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDdweCAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jYXJkLWF2YXRhciB7XHJcbiAgbWF4LXdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlLWRyb3Bkb3duIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FFRDZGMTtcclxuICBtYXgtd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmhlYWRlck1hcHBpbmd7XHJcbiAgdG9wOiAxMDhweDtcclxuICAgIGxlZnQ6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgZm9udDogdmFyKC0tdW5uYW1lZC1mb250LXN0eWxlLW5vcm1hbCkgbm9ybWFsIHZhcigtLXVubmFtZWQtZm9udC13ZWlnaHQtbm9ybWFsKSAxMnB4LzE3cHggTWFucm9wZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS11bm5hbWVkLWNoYXJhY3Rlci1zcGFjaW5nLTApO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDEycHgvMTdweCBNYW5yb3BlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjQkZCRkMxO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWF0LXRhYi1oZWFkZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IC00NnB4O1xyXG59XHJcbi5vdXRlckRpdntcclxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsW2Rpc2FibGVkXXtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsW2Rpc2FibGVkXSAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50IHtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiBcclxufVxyXG46Om5nLWRlZXAgLmN1c3RvbS1kYXRlLWNsYXNzIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnR7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCUhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgdGQuY3VzdG9tLWRhdGUtY2xhc3Mge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoVerificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video-verification',
                templateUrl: './video-verification.component.html',
                styleUrls: ['./video-verification.component.scss']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }, { type: app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"] }, { type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_13__["ApplicationEntryStageService"] }]; }, { profileFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["profileFile"]
        }] }); })();


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
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./schedule-appointment/schedule-appointment.component */ "lR1S");
/* harmony import */ var _video_verification_routing__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./video-verification.routing */ "traM");
/* harmony import */ var _video_verification_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./video-verification.component */ "83s1");
/* harmony import */ var _video_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./video.directive */ "goEz");
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./appointment/appointment.component */ "D+DX");
/* harmony import */ var _calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./calljoin/calljoin.component */ "68+F");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _only_number_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./only-number.directive */ "Zpjb");





































class VideoVerificationModule {
}
VideoVerificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VideoVerificationModule });
VideoVerificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function VideoVerificationModule_Factory(t) { return new (t || VideoVerificationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_26__["PerfectScrollbarModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"],
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
            _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"].forChild(_video_verification_routing__WEBPACK_IMPORTED_MODULE_28__["VideoRoutes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VideoVerificationModule, { declarations: [_schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_27__["ScheduleAppointmentComponent"],
        _video_verification_component__WEBPACK_IMPORTED_MODULE_29__["VideoVerificationComponent"],
        _video_directive__WEBPACK_IMPORTED_MODULE_30__["VideoDirective"],
        _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_31__["AppointmentComponent"],
        _calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_32__["CalljoinComponent"],
        _only_number_directive__WEBPACK_IMPORTED_MODULE_34__["OnlyNumberDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_26__["PerfectScrollbarModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"],
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
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_26__["PerfectScrollbarModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"],
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
                    _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"].forChild(_video_verification_routing__WEBPACK_IMPORTED_MODULE_28__["VideoRoutes"])
                ],
                declarations: [
                    _schedule_appointment_schedule_appointment_component__WEBPACK_IMPORTED_MODULE_27__["ScheduleAppointmentComponent"],
                    _video_verification_component__WEBPACK_IMPORTED_MODULE_29__["VideoVerificationComponent"],
                    _video_directive__WEBPACK_IMPORTED_MODULE_30__["VideoDirective"],
                    _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_31__["AppointmentComponent"],
                    _calljoin_calljoin_component__WEBPACK_IMPORTED_MODULE_32__["CalljoinComponent"],
                    _only_number_directive__WEBPACK_IMPORTED_MODULE_34__["OnlyNumberDirective"],
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
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _video_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../video.directive */ "goEz");


















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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_29_Template_mat_card_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const time2_r9 = ctx.$implicit; const i_r10 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onSelectTime1(time2_r9, i_r10, $event); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_32_Template_mat_card_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const time3_r13 = ctx.$implicit; const i_r14 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onSelectTime1(time3_r13, i_r14, $event); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_35_Template_mat_card_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const time4_r17 = ctx.$implicit; const i_r18 = ctx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onSelectTime1(time4_r17, i_r18, $event); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleAppointmentComponent_div_38_Template_mat_card_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const time5_r21 = ctx.$implicit; const i_r22 = ctx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.onSelectTime1(time5_r21, i_r22, $event); });
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
    constructor(router, api, cdr, dialog, el) {
        this.router = router;
        this.api = api;
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
        this.api.getKycRef().subscribe(resp => {
            this.assignKyc(resp.kycReference);
            console.log(resp.kycReference);
        });
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
    assignKyc(kycReference) {
        this.kycRef = kycReference;
    }
    onSelectTime1(time, i, event) {
        console.log(time, i, event);
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
            data: { time: this.dateCollection, date: this.selectedDate, kycRef: this.kycRef },
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
ScheduleAppointmentComponent.ɵfac = function ScheduleAppointmentComponent_Factory(t) { return new (t || ScheduleAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
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
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatCalendar"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _video_directive__WEBPACK_IMPORTED_MODULE_12__["VideoDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"]], styles: [".selectTime[_ngcontent-%COMP%] {\n  height: 42px;\n  width: 168px;\n  text-align: center;\n  border: none;\n  cursor: pointer;\n  background-color: white;\n  border-radius: 10px;\n  border: #d8d3d3 solid 1px;\n  margin-bottom: 20px;\n}\n\n.matContent[_ngcontent-%COMP%] {\n  font-size: 12px;\n  justify-content: center;\n  color: gray;\n}\n\n.button1[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n  background-color: white;\n}\n\n.line[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  color: darkgrey;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.Next[_ngcontent-%COMP%]:focus {\n  background-color: #426af5;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  max-width: 1250px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin: 10px auto 0 auto;\n  margin-bottom: 3%;\n}\n\n.demo-inline-calendar-card[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n .egret-navy .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: white;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%]   mat-calendar-period-button[_ngcontent-%COMP%]   mat-button[_ngcontent-%COMP%]   mat-button-base.mat-button-wrapper[_ngcontent-%COMP%] {\n  margin-left: 90px !important;\n}\n\n .mat-calendar-header {\n  padding-top: 0px !important;\n  padding-right: 8px !important;\n  padding-bottom: 0px !important;\n  padding-left: 0px !important;\n  background-color: #456EFE;\n  color: white;\n  border-radius: 10px;\n}\n\n .egret-blue .mat-calendar-body-selected {\n  background-color: #FE6700;\n  color: white;\n  border-radius: 10px;\n}\n\n .egret-blue .mat-calendar-arrow {\n  border-top-color: white !important;\n}\n\n.selectTime[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  background-color: red;\n  padding: 10px;\n}\n\n .mat-button-toggle-group {\n  border: 0px;\n}\n\n#mat-button-toggle-2[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  margin-left: 30px;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  background-color: #FE6700;\n}\n\nmat-card.selectTime[_ngcontent-%COMP%]:active {\n  background-color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjaGVkdWxlLWFwcG9pbnRtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUFvQztFQUNwQyxtQkFBbUI7QUFBckI7O0FBSUE7RUFFQyxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVU7QUFGWDs7QUFPQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFKekI7O0FBTUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBbUI7RUFDbkIsdUJBQUE7RUFDQSx5QkFBeUI7RUFDekIsV0FBVztFQUVYLGNBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUpqQjs7QUFNQTtFQUVFLHlCQUF3QjtFQUN4QixpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLGVBQWM7RUFDZCxtQkFBbUI7QUFKckI7O0FBT0E7RUFDRSx5QkFBd0I7RUFDeEIsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCx5QkFBaUM7RUFDakMsWUFBVztFQUNYLG1CQUFtQjtBQUpyQjs7QUFNQTtFQUNFLHlCQUFpQztBQUhuQzs7QUFLQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUZuQjs7QUFJQTtFQUNFLFlBQVk7QUFEZDs7QUFHQTtFQUVBLG1CQUFtQjtBQURuQjs7QUFPQTtFQUVBLDRCQUE0QjtBQUw1Qjs7QUFVQTtFQUNFLDJCQUEyQjtFQUN6Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUc5Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtBQVRyQjs7QUFnQkE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtBQWJyQjs7QUFnQkE7RUFFRSxrQ0FBa0M7QUFkcEM7O0FBdUJBO0VBRUUscUJBQW9CO0VBQ3BCLGFBQVk7QUFyQmQ7O0FBeUJBO0VBRUUsV0FBVztBQXZCYjs7QUF5QkE7RUFFRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBdkJuQjs7QUEwQkE7RUFDRSx5QkFBeUI7QUF2QjNCOztBQXlCQTtFQUVFLHdCQUF3QjtBQXZCMUIiLCJmaWxlIjoic2NoZWR1bGUtYXBwb2ludG1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0VGltZVxyXG57XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIHdpZHRoOiAxNjhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogcmdiKDIxNiwgMjExLCAyMTEpIHNvbGlkIDFweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICBcclxufVxyXG4ubWF0Q29udGVudFxyXG57XHJcbiBmb250LXNpemU6IDEycHg7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuIGNvbG9yOmdyYXk7XHJcbiBcclxuIFxyXG59XHJcblxyXG4uYnV0dG9uMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGdhcDogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctbGVmdDogMTElO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE0JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubGluZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXI6IHRoaWNrO1xyXG4gIC8qIGhlaWdodDogM3B4OyAqL1xyXG4gIC8qIGxpbmUtaGVpZ2h0OiAzcHg7ICovXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAvKiBib3JkZXItd2lkdGg6IDNweDsgKi9cclxuICBib3JkZXItYmxvY2std2lkdGg6IHVuc2V0O1xyXG4gIGNvbG9yOiBibHVlO1xyXG4gIC8vIHdpZHRoOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAxMzYsIDI0Nik7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogaW5pdGlhbDtcclxufVxyXG4uQmFja3tcclxuICBcclxuICBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6LTE1JTtcclxuICB3aWR0aDoxNTBweDtcclxuICBjb2xvcjpkYXJrZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG5cclxufVxyXG4uTmV4dHtcclxuICBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0Oi0xMyU7XHJcbiAgd2lkdGg6MTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LDEwNiwyNDUpO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbn1cclxuLk5leHQ6Zm9jdXN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LDEwNiwyNDUpO1xyXG59XHJcbi5tYXRDYXJkIHtcclxuICBtYXgtd2lkdGg6IDEyNTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbi5kZW1vLWlubGluZS1jYWxlbmRhci1jYXJkIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuOjpuZy1kZWVwLmVncmV0LW5hdnkgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpXHJcbntcclxuYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuLy8gYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcbiBcclxuXHJcblxyXG4ubWF0LWZvY3VzLWluZGljYXRvciBtYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiBtYXQtYnV0dG9uIG1hdC1idXR0b24tYmFzZS5tYXQtYnV0dG9uLXdyYXBwZXJcclxue1xyXG5tYXJnaW4tbGVmdDogOTBweCAhaW1wb3J0YW50O1xyXG5cclxuXHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtY2FsZW5kYXItaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2RUZFO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC8vIGhlaWdodDogNDJweDtcclxuICAvLyB3aWR0aDogMzU0cHg7XHJcblxyXG5cclxufVxyXG5cclxuOjpuZy1kZWVwLmVncmV0LWJsdWUgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkU2NzAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAuZWdyZXQtYmx1ZSAubWF0LWNhbGVuZGFyLWFycm93XHJcbntcclxuICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi8vIDo6bmctZGVlcC5tYXQtZm9jdXMtaW5kaWNhdG9yIG1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b24gbWF0LWljb24tYnV0dG9uIG1hdC1idXR0b24tYmFzZVxyXG4vLyB7XHJcbi8vIHBhZGRpbmctbGVmdDogOTBweDtcclxuLy8gZmxvYXQ6IGxlZnQ7XHJcbi8vIH1cclxuXHJcblxyXG4uc2VsZWN0VGltZSA6Zm9jdXNcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gIHBhZGRpbmc6MTBweDtcclxufVxyXG4vLyA6Om5nLWRlZXAuZWdyZXQtYmx1ZSAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLCAuZWdyZXQtYmx1ZSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZFxyXG4vLyAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmRcclxuOjpuZy1kZWVwLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwXHJcbntcclxuICBib3JkZXI6MHB4IDtcclxufVxyXG4jbWF0LWJ1dHRvbi10b2dnbGUtMlxyXG57XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG5cclxufVxyXG5idXR0b246Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRTY3MDA7XHJcbn1cclxubWF0LWNhcmQuc2VsZWN0VGltZTphY3RpdmVcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScheduleAppointmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-schedule-appointment',
                templateUrl: './schedule-appointment.component.html',
                styleUrls: ['./schedule-appointment.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


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


/***/ })

}]);
//# sourceMappingURL=views-others-video-verification-video-verification-module-es2015.js.map