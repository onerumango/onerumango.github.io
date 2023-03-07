(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-card-account-card-account-module~views-others-others-module~views-others-video-verific~e3216432"],{

/***/ "+DZj":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/others/fingerprint-authentication/fingerprint-authentication.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: FingerprintAuthenticationComponent, OtpModel, OtpModel1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FingerprintAuthenticationComponent", function() { return FingerprintAuthenticationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpModel", function() { return OtpModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpModel1", function() { return OtpModel1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _kyc_basic_information_kyc_basic_information_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../kyc-basic-information/kyc-basic-information.component */ "dyf6");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ "ura0");

// import { FormBuilder, FormGroup } from '@angular/forms';

// import { ApiService } from 'app/api.service';

















const _c0 = function (a0) { return { "color": a0 }; };
function FingerprintAuthenticationComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FingerprintAuthenticationComponent_form_3_Template_span_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.getOtp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Resend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FingerprintAuthenticationComponent_form_3_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.verify(ctx_r4.basicInformationForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Proceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.basicInformationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errormsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Code has been sent to ", ctx_r0.number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r0.numberOfClick == 3 && "gray"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.basicInformationForm.valid == true ? "buttonName" : "buttonData")("disabled", !ctx_r0.basicInformationForm.valid);
} }
function FingerprintAuthenticationComponent_mat_card_6_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Address: ", ctx_r5.address, "");
} }
function FingerprintAuthenticationComponent_mat_card_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FingerprintAuthenticationComponent_mat_card_6_tr_11_Template, 3, 1, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name:", ctx_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Id Number:", ctx_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dob: ", ctx_r1.dob, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.address);
} }
class FingerprintAuthenticationComponent {
    constructor(dialogRef, snack, api, fb, data) {
        this.dialogRef = dialogRef;
        this.snack = snack;
        this.api = api;
        this.fb = fb;
        this.data = data;
        this.update = new _kyc_basic_information_kyc_basic_information_component__WEBPACK_IMPORTED_MODULE_3__["OtpModelUpdate"]();
        this.otpmodel = new OtpModel1();
        this.numberOfClick = 0;
        this.isGreater = false;
        this.number = data.number;
        this.type = data.type;
        this.dob = data.dob,
            this.id = data.id,
            this.name = data.name,
            this.address = data.address;
    }
    ngOnInit() {
        if (this.type !== "OCR function") {
            this.errormsg = "An OTP has been sent to your " + this.type + " !";
            this.basicInformationForm = this.fb.group({
                otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9]{6}$")]],
            });
        }
    }
    buttonClick() {
    }
    closeClick() {
        console.log("reached here");
        // [routerLink]="['/others/kyc']"
        this.dialogRef.close();
        // this.router.navigateByUrl('/others/kyc');
    }
    verify(form) {
        console.log(form);
        this.otpValidate = localStorage.getItem('otpValidate');
        if (this.type == "email id") {
            this.update.sourceKey = "email";
        }
        if (this.type == "Mobile Number") {
            this.update.sourceKey = "mobile";
        }
        this.update.sourceValue = this.number,
            console.log(this.update.sourceValue);
        this.update.otp = form.otp,
            console.log(this.update.otp);
        this.update.type = "";
        this.api.getOtpValidating(this.update).subscribe(resp => {
            console.log("response from backend", resp);
            if (resp.data != null) {
                if (resp && this.type == "Mobile Number") {
                    this.closeClick();
                    this.api.setVerify({
                        verify: 'verified',
                        type: this.update.sourceKey
                    });
                }
                else if (resp && this.type == "email id") {
                    this.closeClick();
                    this.api.setVerify1({
                        verify: 'verified',
                        type: this.update.sourceKey
                    });
                }
            }
            else {
                this.snack.open('Entered Invalid OTP', 'OK', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                });
            }
        }, error => {
            console.log('error : ', error.responseMessage, error);
            if (error.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    icon: 'error',
                    text: "Error message : " + error.error,
                    width: 500,
                    confirmButtonText: "OK",
                    confirmButtonColor: '#456EFE'
                });
                // return false;
            }
            if (error && this.type == "Mobile Number") {
                this.closeClick();
                this.api.setVerify({
                    verify: 'verify',
                    type: this.update.sourceKey
                });
            }
            else {
                console.log("in else eerrrr email");
                this.api.setVerify1({
                    verify: 'verify',
                    type: this.update.sourceKey
                });
                this.errormsg = "Error in OTP";
            }
            this.closeClick();
        });
    }
    getOtp() {
        if (this.numberOfClick == 3) {
            this.snack.open('Maximum Attempt Reached', 'Ok', {
                horizontalPosition: 'right',
                verticalPosition: 'top',
                duration: 3000
            });
            return;
        }
        this.numberOfClick = this.numberOfClick + 1;
        if (this.type == "email id") {
            this.otpmodel.source_key = "email";
            this.otpmodel.source = 'customer';
            this.otpmodel.source_value = this.number;
        }
        if (this.type == "Mobile Number") {
            this.otpmodel.source_key = "mobile";
            this.otpmodel.source = 'customer';
            this.otpmodel.source_value = this.number;
        }
        this.api.getOtp(this.otpmodel).subscribe(resp => {
            console.log(resp);
            if (resp !== null) {
                this.snack.open('OTP has been sent again', 'OK', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                });
            }
        });
    }
}
FingerprintAuthenticationComponent.ɵfac = function FingerprintAuthenticationComponent_Factory(t) { return new (t || FingerprintAuthenticationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
FingerprintAuthenticationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FingerprintAuthenticationComponent, selectors: [["app-fingerprint-authentication"]], decls: 7, vars: 2, consts: [["mat-button", "", "id", "close", "mat-dialog-close", "", 3, "click"], [1, "closeicon"], [3, "formGroup", 4, "ngIf"], ["fxLayout", "row", 1, "ocrDiv"], ["id", "box", 1, "pd-2"], ["class", "pd-2", 4, "ngIf"], [3, "formGroup"], ["fxLayout", "row"], [1, "verification"], [1, "phoneNumber"], [1, "propic", "text-center"], ["src", "assets/images/svg/otp_image.svg", "alt", "", 1, "w-70"], [1, "flex-grow-1"], ["type", "input", 1, "inputMatcard"], ["matInput", "", "id", "otp", "placeholder", "ENTER OTP", "type", "number", "maxlength", "6", "oninput", "this.value = this.value.slice(0, this.maxLength);", "formControlName", "otp", 1, "alignment"], [1, "verify1"], ["id", "resend", 3, "ngStyle", "click"], ["mat-raised-button", "", 3, "ngClass", "disabled", "click"], [1, "pd-2"], [4, "ngIf"]], template: function FingerprintAuthenticationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FingerprintAuthenticationComponent_Template_button_click_0_listener() { return ctx.closeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FingerprintAuthenticationComponent_form_3_Template, 18, 8, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FingerprintAuthenticationComponent_mat_card_6_Template, 12, 4, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type != "OCR function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "OCR function");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultClassDirective"]], styles: [".phoneNumber[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: smaller;\n  font-weight: bolder;\n}\n\n.verification[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-top: 8%;\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-bottom: 3%;\n  font-size: 22px;\n}\n\n.verify[_ngcontent-%COMP%] {\n  display: block;\n  color: grey;\n  font-size: 14px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.verify1[_ngcontent-%COMP%] {\n  display: block;\n  color: grey;\n  font-size: 10px;\n  text-align: center;\n  margin-top: 5px;\n  cursor: pointer;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.ocrDiv[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.ocrDetailsSpan[_ngcontent-%COMP%] {\n  margin-left: 40%;\n  font-size: 20px;\n}\n\n.inputClass[_ngcontent-%COMP%] {\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  box-shadow: 0 3pt 6pt #00000029;\n  font-weight: bolder;\n}\n\nmatCard[_ngcontent-%COMP%] {\n  max-width: 500px;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  font-weight: bolder;\n}\n\n.inputMatcard[_ngcontent-%COMP%] {\n  padding: 12px;\n  max-width: 55%;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  margin: auto;\n  margin-top: 20px;\n}\n\n.buttonName[_ngcontent-%COMP%] {\n  width: 170px;\n  display: block;\n  border-radius: 45px;\n  margin: auto;\n  margin-top: 25px;\n  margin-bottom: 4%;\n  background: transparent linear-gradient(91deg, #051A2D 0%, #004C97 100%) 0% 0% no-repeat padding-box;\n  border-radius: 23px;\n  opacity: 1;\n  color: white;\n}\n\n.buttonData[_ngcontent-%COMP%] {\n  width: 170px;\n  display: block;\n  border-radius: 45px;\n  margin: auto;\n  margin-top: 25px;\n  margin-bottom: 4%;\n  border-radius: 23px;\n  opacity: 1;\n}\n\n.cdk-overlay-pane.my-dialog[_ngcontent-%COMP%] {\n  position: relative !important;\n}\n\n.close.mat-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 5px;\n  line-height: 14px;\n  min-width: auto;\n}\n\n.closeicon[_ngcontent-%COMP%] {\n  line-height: 0px;\n  width: 18px;\n  \n  \n  \n  \n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n#close[_ngcontent-%COMP%] {\n  float: right;\n}\n\n#box[_ngcontent-%COMP%] {\n  width: 600px;\n}\n\n#resend[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-size: small;\n  color: black;\n}\n\n#proceed[_ngcontent-%COMP%] {\n  width: 170px;\n  background-color: #456EFE;\n  color: white;\n  margin-top: 25px;\n  margin-bottom: 4%;\n}\n\n#otp[_ngcontent-%COMP%] {\n  outline: none;\n  text-align: center;\n  letter-spacing: 10px;\n}\n\ninput[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZmluZ2VycHJpbnQtYXV0aGVudGljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBRWpCLG1CQUFtQjtFQUNwQixrQkFBa0I7RUFDbkIsbUJBQW1CO0FBQXRCOztBQUVDO0VBQ0csY0FBYztFQUNkLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBYztBQUNsQjs7QUFHQTtFQUNJLGNBQWM7RUFDZCxXQUFVO0VBRVYsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0FBRG5COztBQUlBO0VBQ0ksY0FBYztFQUNkLFdBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWM7RUFDZCxlQUFlO0FBRG5COztBQUdBO0VBQ0ksWUFBWTtBQUFoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBRWpCOztBQUFBO0VBRUksd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLCtCQUErQjtFQUMvQixtQkFBbUI7QUFFdkI7O0FBQ0E7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFXO0FBRWY7O0FBRUE7RUFFSSx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFFM0IsbUJBQW1CO0FBRHZCOztBQUdBO0VBQ0ksYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0FBQXBCOztBQUVBO0VBQ0UsWUFBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDbEIsb0dBQW9HO0VBQ3BHLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtBQUNiOztBQUVBO0VBQ0UsWUFBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFFbEIsbUJBQW1CO0VBQ25CLFVBQVU7QUFBWDs7QUFJQTtFQUNJLDZCQUE0QjtBQURoQzs7QUFHRTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUFuQjs7QUFFRTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7QUFDWjs7QUFDRTtFQUNFLFlBQVk7QUFFaEI7O0FBQUU7RUFDRixZQUNFO0FBRUY7O0FBREU7RUFDRSxtQkFBbUI7RUFFbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFHaEI7O0FBREU7RUFDRSxZQUFXO0VBQ1gseUJBQXdCO0VBQ3hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBSXJCOztBQUZFO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFLeEI7O0FBRkU7O0VBRUUsd0JBQXVCO0VBQ3ZCLFNBQVE7QUFLWiIsImZpbGUiOiJmaW5nZXJwcmludC1hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waG9uZU51bWJlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuIC52ZXJpZmljYXRpb257XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDglO1xyXG4gICAgbWFyZ2luLWxlZnQ6NSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICBmb250LXNpemU6MjJweDtcclxufVxyXG5cclxuXHJcbi52ZXJpZnl7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOmdyZXk7XHJcbiAgICAvLyBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgIFxyXG59XHJcbi52ZXJpZnkxe1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjpncmV5O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZsZXgtZ3Jvdy0xe1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcbi5vY3JEaXZ7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcbi5vY3JEZXRhaWxzU3BhbntcclxuICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uaW5wdXRDbGFzc3tcclxuIC8vICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxyZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgXHJcbn1cclxubWF0Q2FyZHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAvLyAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxyZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG5cclxufVxyXG5pbnB1dHtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkscmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGhpZGRlbjtcclxuICAgIC8vIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5pbnB1dE1hdGNhcmR7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgbWF4LXdpZHRoOiA1NSU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uYnV0dG9uTmFtZXtcclxuICB3aWR0aDoxNzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MWRlZywgIzA1MUEyRCAwJSwgIzAwNEM5NyAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogMjNweDtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRcclxufVxyXG4uYnV0dG9uRGF0YXtcclxuICB3aWR0aDoxNzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG4vL1x0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkxZGVnLCAjMDUxQTJEIDAlLCAjMDA0Qzk3IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuXHRib3JkZXItcmFkaXVzOiAyM3B4O1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0Ly9jb2xvcjogd2hpdGU7XHJcblx0XHJcbn1cclxuLmNkay1vdmVybGF5LXBhbmUubXktZGlhbG9nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jbG9zZS5tYXQtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIC5jbG9zZWljb257XHJcbiAgICBsaW5lLWhlaWdodDogMHB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICAvKiBmb250LXNpemU6IDhwdDsgKi9cclxuICAgIC8qIGZvbnQtZmFtaWx5OiB0YWhvbWE7ICovXHJcbiAgICAvKiBtYXJnaW4tdG9wOiAxcHg7ICovXHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDJweDsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICAjY2xvc2V7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gICNib3h7XHJcbndpZHRoOiA2MDBweFxyXG4gIH1cclxuICAjcmVzZW5ke1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIC8vIGNvbG9yOnJnYigwIDAgMCAvIDIwJSk7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAjcHJvY2VlZHtcclxuICAgIHdpZHRoOjE3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDU2RUZFO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gIH1cclxuICAjb3Rwe1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9ue1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7XHJcbiAgICBtYXJnaW46MDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FingerprintAuthenticationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fingerprint-authentication',
                templateUrl: './fingerprint-authentication.component.html',
                styleUrls: ['./fingerprint-authentication.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();
class OtpModel {
}
class OtpModel1 {
}


/***/ }),

/***/ "3ms1":
/*!*****************************************************************************!*\
  !*** ./src/app/views/others/kyc-verification/kyc-verification.component.ts ***!
  \*****************************************************************************/
/*! exports provided: KycVerificationComponent, DocData, Upload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycVerificationComponent", function() { return KycVerificationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocData", function() { return DocData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Upload", function() { return Upload; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tesseract.js */ "yb/K");
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var _fingerprint_authentication_fingerprint_authentication_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fingerprint-authentication/fingerprint-authentication.component */ "+DZj");
/* harmony import */ var _kyc_basic_information_kyc_basic_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../kyc-basic-information/kyc-basic-information.component */ "dyf6");
/* harmony import */ var _verification_completed_verification_completed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../verification-completed/verification-completed.component */ "vjsB");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/services/finger-print-capture.service */ "rp8y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/shared/services/data.service */ "iiaH");
/* harmony import */ var app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/shared/services/app-loader/app-loader.service */ "3sEA");
/* harmony import */ var app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/shared/services/dialogs/dialog.service */ "laYw");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/shared/services/application-entry-stage.service */ "qMRc");
/* harmony import */ var _kyc_screening_kyc_screening_newcustomer_kyc_screening_newcustomer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../kyc-screening/kyc-screening-newcustomer/kyc-screening-newcustomer.component */ "Ne+B");
/* harmony import */ var _kyc_screening_video_verification_popup_video_verification_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../kyc-screening/video-verification-popup/video-verification-popup.component */ "dXiJ");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/flex-layout/extended */ "ura0");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _shared_directives_only_number_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../shared/directives/only-number.directive */ "2Goh");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




















































const _c0 = ["profileFile"];
function KycVerificationComponent_form_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/no-image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function KycVerificationComponent_form_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 78);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function KycVerificationComponent_form_2_mat_option_32_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](4, 4, option_r46 == null ? null : option_r46.firstName, 0, 1)), "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](6, 10, option_r46 == null ? null : option_r46.lastName, 0, 1)), " ");
} }
function KycVerificationComponent_form_2_mat_option_32_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", option_r46 == null ? null : option_r46.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function KycVerificationComponent_form_2_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, KycVerificationComponent_form_2_mat_option_32_div_3_Template, 7, 14, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, KycVerificationComponent_form_2_mat_option_32_div_4_Template, 2, 1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h6", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r46.customerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (option_r46 == null ? null : option_r46.profileImage) == "not_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (option_r46 == null ? null : option_r46.profileImage) != "not_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 7, option_r46 == null ? null : option_r46.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 9, option_r46 == null ? null : option_r46.middleName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 11, option_r46 == null ? null : option_r46.lastName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", option_r46 == null ? null : option_r46.cifNumber, "");
} }
const _c1 = function (a0) { return { "background-color": a0 }; };
function KycVerificationComponent_form_2_div_33_mat_button_toggle_2_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-button-toggle", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_form_2_div_33_mat_button_toggle_2_Template_mat_button_toggle_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r54.radioEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r52 = ctx.$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", option_r52.checked)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, ctx_r51.radioFlag === option_r52.name ? "#004C97" : ""))("value", option_r52.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", option_r52.name, " ");
} }
function KycVerificationComponent_form_2_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-button-toggle-group", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, KycVerificationComponent_form_2_div_33_mat_button_toggle_2_Template, 2, 6, "mat-button-toggle", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.array1);
} }
function KycVerificationComponent_form_2_mat_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r56);
} }
function KycVerificationComponent_form_2_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Prefix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u00A0 Prefix and Gender does not match! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_mat_error_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Date Of Birth ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_mat_option_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", status_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", status_r57, " ");
} }
function KycVerificationComponent_form_2_mat_error_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Marital Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_mat_option_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gender_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", gender_r58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](gender_r58);
} }
function KycVerificationComponent_form_2_mat_error_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_mat_error_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u00A0 Prefix and Gender does not match! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_mat_option_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nation_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", nation_r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](nation_r59);
} }
function KycVerificationComponent_form_2_mat_error_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Nationality ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_button_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r22.emailVerify);
} }
function KycVerificationComponent_form_2_button_99_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_form_2_button_99_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r60.getOtp(ctx_r60.kycVerificationForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r23.emailVerify);
} }
function KycVerificationComponent_form_2_mat_error_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Primary Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_mat_error_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter valid email address! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_button_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r26.verify);
} }
function KycVerificationComponent_form_2_button_106_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_form_2_button_106_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r62.getOtpMobile(ctx_r62.kycVerificationForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r27.verify);
} }
function KycVerificationComponent_form_2_mat_error_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_mat_error_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Mobile number must be 10 digits. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_mat_error_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u00A0 \u00A0 Please Enter Correct Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_mat_radio_button_116_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function KycVerificationComponent_form_2_mat_radio_button_116_Template_mat_radio_button_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r66.onChange1(ctx_r66.kycVerificationForm.controls.permanentAddress, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", option_r64.checked)("value", option_r64.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", option_r64.name, " ");
} }
function KycVerificationComponent_form_2_mat_error_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Valid Address Line 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_mat_error_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Valid Address Line 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_mat_option_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Resi_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", Resi_r68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](Resi_r68);
} }
function KycVerificationComponent_form_2_mat_error_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Residence Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_mat_option_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](country_r69);
} }
function KycVerificationComponent_form_2_mat_error_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_mat_error_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter vaild Zip Code!(5-10 digits) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_h5_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter valid Zip Code! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_mat_option_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](state_r70);
} }
function KycVerificationComponent_form_2_mat_error_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select State ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_mat_option_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", city_r71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](city_r71);
} }
function KycVerificationComponent_form_2_mat_error_178_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select City ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_div_179_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Valid Address Line 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_div_179_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Valid Address Line 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_div_179_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Resi_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", Resi_r84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](Resi_r84);
} }
function KycVerificationComponent_form_2_div_179_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Residence Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_div_179_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](country_r85);
} }
function KycVerificationComponent_form_2_div_179_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_div_179_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter vaild Zip Code! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_div_179_h5_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter valid Zip Code! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_div_179_mat_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](state_r86);
} }
function KycVerificationComponent_form_2_div_179_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select State ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycVerificationComponent_form_2_div_179_mat_option_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", city_r87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](city_r87);
} }
function KycVerificationComponent_form_2_div_179_mat_error_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select City ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "errbd": a0 }; };
function KycVerificationComponent_form_2_div_179_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Permanent Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "textarea", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_2_div_179_Template_textarea_keypress_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r88.keyPressAlphanumeric($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, KycVerificationComponent_form_2_div_179_mat_error_10_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-card", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "textarea", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_2_div_179_Template_textarea_keypress_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r90.keyPressAlphanumeric($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, KycVerificationComponent_form_2_div_179_mat_error_15_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Residance Type*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, KycVerificationComponent_form_2_div_179_mat_option_23_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, KycVerificationComponent_form_2_div_179_mat_error_24_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Country*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function KycVerificationComponent_form_2_div_179_Template_mat_select_selectionChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r91.getPerStateName($event.value, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, KycVerificationComponent_form_2_div_179_mat_option_31_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, KycVerificationComponent_form_2_div_179_mat_error_32_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-form-field", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "ZipCode*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function KycVerificationComponent_form_2_div_179_Template_input_keyup_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r92.isAllSameDigit($event, 1); })("change", function KycVerificationComponent_form_2_div_179_Template_input_change_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r93.getCityandStateByZipcode(ctx_r93.kycVerificationForm.get("permanentAddress.country").value, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, KycVerificationComponent_form_2_div_179_mat_error_42_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, KycVerificationComponent_form_2_div_179_h5_43_Template, 2, 0, "h5", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-form-field", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "State*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-select", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function KycVerificationComponent_form_2_div_179_Template_mat_select_selectionChange_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r94.onStateChange("permanent"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, KycVerificationComponent_form_2_div_179_mat_option_50_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, KycVerificationComponent_form_2_div_179_mat_error_51_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-form-field", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "City*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function KycVerificationComponent_form_2_div_179_Template_mat_select_selectionChange_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r95.onCityChange("permanent"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, KycVerificationComponent_form_2_div_179_mat_option_58_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, KycVerificationComponent_form_2_div_179_mat_error_59_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c2, !ctx_r44.kycVerificationForm.get("permanentAddress.address1").valid && ctx_r44.kycVerificationForm.get("permanentAddress.address1").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r44.kycVerificationForm.get("permanentAddress.address1").valid && ctx_r44.kycVerificationForm.get("permanentAddress.address1").touched || ctx_r44.kycVerificationForm.get("permanentAddress.address1").touched && ctx_r44.kycVerificationForm.get("permanentAddress.address1").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c2, !ctx_r44.kycVerificationForm.get("permanentAddress.address2").valid && ctx_r44.kycVerificationForm.get("permanentAddress.address2").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r44.kycVerificationForm.get("permanentAddress.address2").valid && ctx_r44.kycVerificationForm.get("permanentAddress.address2").touched || ctx_r44.kycVerificationForm.get("permanentAddress.address2").touched && ctx_r44.kycVerificationForm.get("permanentAddress.address2").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r44.Residences);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r44.kycVerificationForm.get("permanentAddress.residenceType").valid && ctx_r44.kycVerificationForm.get("permanentAddress.residenceType").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r44.countrys);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r44.kycVerificationForm.get("permanentAddress.country").valid && ctx_r44.kycVerificationForm.get("permanentAddress.country").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r44.kycVerificationForm.get("permanentAddress.zipCode").valid && ctx_r44.kycVerificationForm.get("permanentAddress.zipCode").touched || ctx_r44.kycVerificationForm.get("permanentAddress.zipCode").required && ctx_r44.kycVerificationForm.get("permanentAddress.zipCode").minLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r44.isAllSameDigitVal && 1 == ctx_r44.zipIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r44.arrayState1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r44.kycVerificationForm.get("permanentAddress.state").valid && ctx_r44.kycVerificationForm.get("permanentAddress.state").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r44.arrayCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r44.kycVerificationForm.get("permanentAddress.city").valid && ctx_r44.kycVerificationForm.get("permanentAddress.city").touched);
} }
const _c3 = function (a0, a1) { return { "next12": a0, "next": a1 }; };
function KycVerificationComponent_form_2_div_180_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 109, 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_form_2_div_180_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r97.resetForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_form_2_div_180_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r99.onNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c3, !(ctx_r45.kycVerificationForm.invalid || !ctx_r45.prefixFlag), ctx_r45.kycVerificationForm.invalid || !ctx_r45.prefixFlag))("disabled", ctx_r45.kycVerificationForm.invalid || !ctx_r45.prefixFlag);
} }
function KycVerificationComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, KycVerificationComponent_form_2_span_4_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, KycVerificationComponent_form_2_ng_template_5_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function KycVerificationComponent_form_2_Template_input_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r100.onFileChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_form_2_Template_mat_icon_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r102.deleteProfileImg(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "CIF Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function KycVerificationComponent_form_2_Template_input_keyup_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r103.onKeyPress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-autocomplete", null, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, KycVerificationComponent_form_2_mat_option_32_Template, 13, 13, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, KycVerificationComponent_form_2_div_33_Template, 3, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-form-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Prefix*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function KycVerificationComponent_form_2_Template_mat_select_selectionChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r104.onChangePrefix($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, KycVerificationComponent_form_2_mat_option_41_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, KycVerificationComponent_form_2_mat_error_42_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, KycVerificationComponent_form_2_mat_error_43_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-form-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "First Name*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_2_Template_input_keypress_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r105.letterOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, KycVerificationComponent_form_2_mat_error_49_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-form-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Middle Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_2_Template_input_keypress_54_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r106.letterOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-form-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Last Name*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_2_Template_input_keypress_59_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r107.letterOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, KycVerificationComponent_form_2_mat_error_60_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-form-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Date of Birth*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "mat-datepicker-toggle", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "mat-datepicker", null, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, KycVerificationComponent_form_2_mat_error_71_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-form-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Marital Status*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "mat-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, KycVerificationComponent_form_2_mat_option_77_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, KycVerificationComponent_form_2_mat_error_78_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "mat-form-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Gender*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "mat-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function KycVerificationComponent_form_2_Template_mat_select_selectionChange_83_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r108.onChangeGender($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, KycVerificationComponent_form_2_mat_option_84_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, KycVerificationComponent_form_2_mat_error_85_Template, 2, 0, "mat-error", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, KycVerificationComponent_form_2_mat_error_86_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "mat-form-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Nationality*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, KycVerificationComponent_form_2_mat_option_92_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, KycVerificationComponent_form_2_mat_error_93_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "mat-card", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_2_Template_input_keypress_97_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r109._keyPress1($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, KycVerificationComponent_form_2_button_98_Template, 2, 1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, KycVerificationComponent_form_2_button_99_Template, 2, 1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, KycVerificationComponent_form_2_mat_error_100_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, KycVerificationComponent_form_2_mat_error_101_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "mat-card", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_2_Template_input_keypress_104_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r110._keyPress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](105, KycVerificationComponent_form_2_button_105_Template, 2, 1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](106, KycVerificationComponent_form_2_button_106_Template, 2, 1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, KycVerificationComponent_form_2_mat_error_107_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, KycVerificationComponent_form_2_mat_error_108_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](109, KycVerificationComponent_form_2_mat_error_109_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, " Is your Permanent Address same as Communication Address? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "mat-radio-group", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](116, KycVerificationComponent_form_2_mat_radio_button_116_Template, 2, 3, "mat-radio-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "mat-card", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Communication Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "mat-card", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "textarea", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_2_Template_textarea_keypress_128_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r111.keyPressAlphanumeric($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, KycVerificationComponent_form_2_mat_error_129_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "mat-card", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "textarea", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_2_Template_textarea_keypress_133_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r112.keyPressAlphanumeric($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](134, KycVerificationComponent_form_2_mat_error_134_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "mat-form-field", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Residence Type*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "mat-select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](142, KycVerificationComponent_form_2_mat_option_142_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](143, KycVerificationComponent_form_2_mat_error_143_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "mat-form-field", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "mat-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function KycVerificationComponent_form_2_Template_mat_select_selectionChange_147_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r113.getStateName($event.value, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Country*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](150, KycVerificationComponent_form_2_mat_option_150_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](151, KycVerificationComponent_form_2_mat_error_151_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "mat-form-field", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Zip Code*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function KycVerificationComponent_form_2_Template_input_keyup_158_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r114.isAllSameDigit($event, 0); })("change", function KycVerificationComponent_form_2_Template_input_change_158_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r115.getCityandStateByZipcode(ctx_r115.kycVerificationForm.get("communicationAddress.country").value, $event.target.value, "communication"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "mat-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](161, KycVerificationComponent_form_2_mat_error_161_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](162, KycVerificationComponent_form_2_h5_162_Template, 2, 0, "h5", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "mat-form-field", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "State*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "mat-select", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function KycVerificationComponent_form_2_Template_mat_select_selectionChange_168_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r116.onStateChange("communication"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](169, KycVerificationComponent_form_2_mat_option_169_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](170, KycVerificationComponent_form_2_mat_error_170_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "mat-form-field", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "City*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "mat-select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function KycVerificationComponent_form_2_Template_mat_select_selectionChange_176_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r101); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r117.onCityChange("communication"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](177, KycVerificationComponent_form_2_mat_option_177_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](178, KycVerificationComponent_form_2_mat_error_178_Template, 2, 0, "mat-error", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](179, KycVerificationComponent_form_2_div_179_Template, 60, 18, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](180, KycVerificationComponent_form_2_div_180_Template, 8, 5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](70);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.kycVerificationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.imageURL == "not_available")("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.cifNumberForm)("matAutocomplete", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.listOfCustByCif);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isSkip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.kycVerificationForm.get("prefix").valid && ctx_r0.kycVerificationForm.get("prefix").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.prefixFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.kycVerificationForm.get("firstName").valid && ctx_r0.kycVerificationForm.get("firstName").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.kycVerificationForm.get("lastName").valid && ctx_r0.kycVerificationForm.get("lastName").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r13)("max", ctx_r0.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.kycVerificationForm.get("dateOfBirth").valid && ctx_r0.kycVerificationForm.get("dateOfBirth").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.MaritalStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.kycVerificationForm.get("maritalStatus").valid && ctx_r0.kycVerificationForm.get("maritalStatus").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.genders);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.kycVerificationForm.get("gender").valid && ctx_r0.kycVerificationForm.get("gender").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.prefixFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.kycVerificationForm.get("nationality").valid && ctx_r0.kycVerificationForm.get("nationality").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.kycVerificationForm.get("primaryEmailAdress").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.kycVerificationForm.get("primaryEmailAdress").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.kycVerificationForm.get("primaryEmailAdress").hasError("required") && ctx_r0.kycVerificationForm.get("primaryEmailAdress").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.kycVerificationForm.get("primaryEmailAdress").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.kycVerificationForm.get("phoneNumber").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.kycVerificationForm.get("phoneNumber").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.kycVerificationForm.get("phoneNumber").hasError("required") && ctx_r0.kycVerificationForm.get("phoneNumber").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.kycVerificationForm.get("phoneNumber").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.kycVerificationForm.controls["phoneNumber"].value == "0000000000");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.array);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](49, _c2, !ctx_r0.kycVerificationForm.get("communicationAddress.address1").valid && ctx_r0.kycVerificationForm.get("communicationAddress.address1").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.kycVerificationForm.get("communicationAddress.address1").valid && ctx_r0.kycVerificationForm.get("communicationAddress.address1").touched || ctx_r0.kycVerificationForm.get("communicationAddress.address1").touched && ctx_r0.kycVerificationForm.get("communicationAddress.address1").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](51, _c2, !ctx_r0.kycVerificationForm.get("communicationAddress.address2").valid && ctx_r0.kycVerificationForm.get("communicationAddress.address2").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.kycVerificationForm.get("communicationAddress.address2").valid && ctx_r0.kycVerificationForm.get("communicationAddress.address2").touched || ctx_r0.kycVerificationForm.get("communicationAddress.address2").touched && ctx_r0.kycVerificationForm.get("communicationAddress.address2").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.Residences);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.kycVerificationForm.get("communicationAddress.residenceType").valid && ctx_r0.kycVerificationForm.get("communicationAddress.residenceType").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.countrys);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.kycVerificationForm.get("communicationAddress.country").valid && ctx_r0.kycVerificationForm.get("communicationAddress.country").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.kycVerificationForm.get("communicationAddress.zipCode").valid && ctx_r0.kycVerificationForm.get("communicationAddress.zipCode").touched || ctx_r0.kycVerificationForm.get("communicationAddress.zipCode").required && ctx_r0.kycVerificationForm.get("permanentAddress.zipCode").minLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isAllSameDigitVal && 0 == ctx_r0.zipIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.arrayState);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.kycVerificationForm.get("communicationAddress.state").valid && ctx_r0.kycVerificationForm.get("communicationAddress.state").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.arrayCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.kycVerificationForm.get("communicationAddress.city").valid && ctx_r0.kycVerificationForm.get("communicationAddress.city").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.sameAddress == "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.screenTitle != "video verification");
} }
class KycVerificationComponent {
    constructor(loader, ls, http, api, snack, dialog, router, fb, fingerPrintService, sanitizer, cdr, shareDataService, dialogService, locationStrategy, appApiService) {
        this.loader = loader;
        this.ls = ls;
        this.http = http;
        this.api = api;
        this.snack = snack;
        this.dialog = dialog;
        this.router = router;
        this.fb = fb;
        this.fingerPrintService = fingerPrintService;
        this.sanitizer = sanitizer;
        this.cdr = cdr;
        this.shareDataService = shareDataService;
        this.dialogService = dialogService;
        this.locationStrategy = locationStrategy;
        this.appApiService = appApiService;
        this.subscriptions = [];
        this.cifNumberForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.maxDate = new Date();
        this.settingallCustInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // imageUrl: any = "https://i.ibb.co/fDWsn3G/buck.jpg";
        this.editFile = true;
        this.removeUpload = false;
        this.docData = [];
        this.otpmodel = new _kyc_basic_information_kyc_basic_information_component__WEBPACK_IMPORTED_MODULE_8__["OtpModel"]();
        this.billing = true;
        this.basicInfoSavedAlready = false;
        this.verify = "verify";
        this.emailVerify = "verify";
        this.isSkip = true;
        this.isCifValid = false;
        this.radioFlag = "Auto";
        this.arrayState = [];
        this.arrayCity = [];
        this.isAllSameDigitVal = false;
        this.prefixFlag = false;
        this.uploadDone = true;
        this.listOfCustByCif = [];
        this.flexValue = '100';
        this.countrys = [];
        this.uplaod = new Upload();
        this.cifFetch = false;
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
        this.array1 = [
            {
                id: 1,
                checked: true,
                name: "Auto",
            },
            {
                id: 2,
                checked: false,
                name: "Manual",
            },
        ];
        this.permanentAddress = this.fb.group({
            addressType: ["Permanent", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            address1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('.*[a-zA-Z].*')]],
            address2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('.*[a-zA-Z].*')]],
            city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            zipCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]],
            country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            residenceType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.onChange = () => { };
        this.onTouched = () => { };
        this.aadharParser = (str) => {
            try {
                let adharNumber, dob, name, nameLineIndex = 2;
                const asciiStr = str.replace(/[^\x00-\x7F]/g, "").trim();
                const lines = asciiStr.split("\n");
                for (let i = lines.length - 1; i >= 0; i--) {
                    let count = 0, startIndex = -1;
                    for (let j = 0; j < lines[i].length; j++) {
                        if (lines[i][j] >= "0" && lines[i][j] <= "9") {
                            count++;
                            if (startIndex === -1)
                                startIndex = j;
                        }
                    }
                    if (count >= 12) {
                        adharNumber = lines[i].substr(startIndex, startIndex + 14);
                    }
                }
                for (let i = 0; i < lines.length; i++) {
                    ["DOB", "Year of Birth"].some((docString) => {
                        const dobIndex = lines[i].indexOf(docString);
                        if (dobIndex !== -1) {
                            dob = lines[i]
                                .trim()
                                .slice(dobIndex, lines[i].length)
                                .split(" ")
                                .pop();
                            nameLineIndex = i - 1;
                            // console.log(dob);
                            let dobArray = dob.split("/");
                            if (dobArray.length == 3) {
                                this.kycVerificationForm.controls.dateOfBirth.setValue(new Date(dob));
                            }
                            else {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
                                    text: " Date of birth format of Uploaded document and application are different. Please select Date of birth manually!",
                                    width: 500,
                                    confirmButtonText: "OK",
                                    confirmButtonColor: '#456EFE'
                                });
                            }
                        }
                    });
                }
                const names = lines[nameLineIndex]
                    .split(" ")
                    .filter((x) => x.length > 1)
                    .join(" ");
                // console.log(names);
                return {
                    dob,
                    adharNumber,
                    fullName: names,
                };
            }
            catch (error) {
                // console.log(error);
                console.error("Unable to parse aadhar");
            }
        };
    }
    get value() {
        return this.kycVerificationForm.value;
    }
    set value(value) {
        this.kycVerificationForm.setValue(value);
        this.onChange(value);
        this.onTouched();
    }
    ngOnInit() {
        this.api.getScreenTitle().subscribe(resp => {
            this.screenTitle = resp.screenTitle;
        });
        this.editKycScreen = localStorage.getItem('EDIT-CIFNUMBER');
        console.log(this.editKycScreen, "Edit kyc details");
        this.kycVerificationForm1 = this.fb.group({
            documentsList: this.fb.array([this.createItem()]),
        });
        this.preventBackButton();
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
        this.kycVerificationForm = this.fb.group({
            cifNumber: [""],
            prefix: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            documentName: [""],
            // firstName: ['',[Validators.required]],
            primaryEmailAdress: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            middleName: [""],
            customer_id: [""],
            isAddressSame: [""],
            gender: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            dateOfBirth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            maritalStatus: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            nationality: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            profileImage: [""],
            communicationAddress: this.fb.group({
                addressType: ["Communication", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                address1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('.*[a-zA-Z].*')]],
                address2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('.*[a-zA-Z].*')]],
                city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                zipCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]],
                country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                residenceType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            }),
        });
        this.imageURL = "not_available";
        // this.initGroup();
        console.log('clear');
        // this.kycVerificationForm.reset();
        this.getDoc();
        // console.log("after getDoc");
        this.kycVerificationForm
            .get("isAddressSame")
            .patchValue(this.array[0].name);
        // console.log("after patchValue")
        // localStorage.getItem('customer_id')? this.getAllCustomerDetails(localStorage.getItem('customer_id')) : '';
        console.log(this.ls.getItem('EDIT-CIFNUMBER'));
        if (this.ls.getItem('EDIT-CIFNUMBER')) {
            console.log("KYC Id reference inside");
            this.autofillDetails(this.editKycScreen);
            this.cifFetch = false;
        }
        if (!localStorage.getItem('customer_id')) {
            if (this.screenTitle != 'video verification') {
                this.openVerificationPopup(false, true);
            }
            else {
                this.openVideoVerificationPopup();
            }
        }
        else {
            if (localStorage.getItem('kyc_reference')) {
                this.patchDataOnReload(localStorage.getItem('kyc_reference'));
            }
        }
        this.subscriptions.push(this.kycVerificationForm.valueChanges.subscribe((value) => {
            this.onChange(value);
            this.onTouched();
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
    writeValue(value) { if (value) {
        this.value = value;
    } if (value === null) {
        this.kycVerificationForm.reset();
    } }
    validate(_) {
        return this.kycVerificationForm.valid ? null : { profile: { valid: false } };
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    openVerificationPopup(rekyc, auto) {
        console.log(this.kycVerificationForm);
        setTimeout(() => {
            const dialogRef = this.dialog.open(_kyc_screening_kyc_screening_newcustomer_kyc_screening_newcustomer_component__WEBPACK_IMPORTED_MODULE_21__["KycScreeningNewcustomerComponent"], {
                data: { rekyc: rekyc, auto: auto },
                width: '720px',
                disableClose: true,
                panelClass: "popup-dialog-class",
                backdropClass: 'bdrop'
            });
            dialogRef.afterClosed().subscribe(res => {
                console.log(res);
                if (res == 'skip') {
                    this.isSkip = true;
                    return;
                }
                this.isSkip = false;
                if (res.dataForForm) {
                    this.urlF = res.dataForForm[2];
                    this.urlB = res.dataForForm[5];
                    this.dataFront = res.dataForForm[1];
                    this.dataBack = res.dataForForm[4];
                    this.patchValueInForm(res.dataForForm);
                }
                if (res != 'skip' && !(res === null || res === void 0 ? void 0 : res.isEdit)) {
                    const verficationDialog = this.dialog.open(_verification_completed_verification_completed_component__WEBPACK_IMPORTED_MODULE_9__["VerificationCompletedComponent"], {
                        data: { rekyc: res.rekyc, popupClose: true },
                        disableClose: true,
                        width: '40%'
                    });
                    verficationDialog.afterClosed().subscribe(done => {
                    });
                }
                if (res.customerId && res.isEdit) {
                    this.autofillDetails(res.customerId);
                }
            });
        }, 500);
    }
    openVideoVerificationPopup() {
        setTimeout(() => {
            const dialogRef = this.dialog.open(_kyc_screening_video_verification_popup_video_verification_popup_component__WEBPACK_IMPORTED_MODULE_22__["VideoVerificationPopupComponent"], {
                data: {},
                width: '720px',
                disableClose: true,
                panelClass: "popup-dialog-class",
                backdropClass: 'bdrop'
            });
            dialogRef.afterClosed().subscribe(res => {
                if (res == 'skip') {
                    this.isSkip = true;
                    return;
                }
                this.isSkip = false;
                if (res.dataForForm) {
                    this.patchValueInForm(res.dataForForm);
                }
                if (res != 'skip') {
                    const verficationDialog = this.dialog.open(_verification_completed_verification_completed_component__WEBPACK_IMPORTED_MODULE_9__["VerificationCompletedComponent"], {
                        data: { rekyc: false, popupClose: true },
                        disableClose: true,
                        width: '40%'
                    });
                }
            });
        }, 500);
    }
    patchValueInForm(data) {
        console.log(data);
        console.log(data[0].fullName.split(" ")[0]);
        console.log(data[0].fullName.split(" ")[1]);
        this.kycVerificationForm.get("firstName").patchValue(data[0].fullName.split(" ")[0]);
        this.kycVerificationForm.get("lastName").patchValue(data[0].fullName.split(" ")[1]);
        if (data[0].gender == "Female") {
            this.kycVerificationForm.get("gender").patchValue("Female");
            this.kycVerificationForm.get("prefix").patchValue("Ms");
        }
        else if (data[0].gender == "Male") {
            this.kycVerificationForm.get("gender").patchValue("Male");
            this.kycVerificationForm.get("prefix").patchValue("Mr");
        }
        this.kycVerificationForm.get("nationality").patchValue("Indian");
        console.log(data[2].split(",").length);
        console.log(data[2].split(",")[1]);
        console.log(data[2].split(",")[2]);
        this.kycVerificationForm
            .get("communicationAddress.address1")
            .patchValue(data[2].split(",")[0] + data[2].split(",")[1]);
        this.kycVerificationForm
            .get("communicationAddress.address2")
            .patchValue(data[2].split(",")[3]);
        this.kycVerificationForm
            .get("communicationAddress.state")
            .patchValue(data[2].split(",")[data[2].split(",").length]);
    }
    patchDataOnReload(kycreference) {
        this.api.getPrimaryInfo(kycreference.slice(4)).subscribe(res => {
            this.setCustVerificationValues(res);
        });
    }
    preventBackButton() {
        history.pushState(null, null, location.href);
        this.locationStrategy.onPopState(() => {
            history.pushState(null, null, location.href);
        });
    }
    manualUpload() {
        let docNum;
        docNum = this.kycVerificationForm1.value.documentsList[0].docNum;
        if (docNum.toString().length !== 12) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
                text: " Aadhar Number Should be 12 digits!",
                width: 500,
                confirmButtonText: "OK",
                confirmButtonColor: '#456EFE',
                icon: 'info'
            });
        }
        else {
            this.kycVerificationForm.get("communicationAddress.zipCode").patchValue("670645");
            this.kycVerificationForm.get("communicationAddress.residenceType").patchValue('Citizen');
            this.kycVerificationForm.get("communicationAddress.country").patchValue('India');
            this.getStateName('India', '');
            this.getPerStateName('India');
            // this.getCityName('Kerala','');
            this.kycVerificationForm.get("communicationAddress.address1").patchValue('Pollayaote');
            this.kycVerificationForm.get("communicationAddress.address2").patchValue('Payote Kalam');
            this.kycVerificationForm.get("communicationAddress.state").patchValue('Kerala');
            this.kycVerificationForm.get("prefix").patchValue('Ms');
            this.kycVerificationForm.get("phoneNumber").patchValue('9656849771');
            this.kycVerificationForm.get("firstName").patchValue('Jayalakshmi');
            this.kycVerificationForm.get("lastName").patchValue('PM');
            this.kycVerificationForm.get("middleName").patchValue('');
            this.kycVerificationForm.get("gender").patchValue('Female');
            this.kycVerificationForm.get("dateOfBirth").patchValue('2022-04-08');
            this.kycVerificationForm.get("nationality").patchValue('Indian');
            this.kycVerificationForm.get("communicationAddress.city").patchValue('Wayanad');
        }
    }
    resetForm() {
        this.kycVerificationForm.reset();
        this.kycVerificationForm1.reset();
        this.imageURL = "";
        this.fileNameFront = '';
        this.fileNameBack = '';
        this.radioFlag = 'Auto';
    }
    letterOnly(event) {
        var charCode = event.keyCode;
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)
            return true;
        else
            return false;
    }
    changeValue2(event) {
        if (event === "Aadhar card") {
            this.disableButton = true;
        }
    }
    previousStep() {
        this.dialogService.openKycVerificationMethod();
    }
    getStateName(country, address, isAdd) {
        if (isAdd) {
            this.kycVerificationForm.get('communicationAddress.zipCode').setValue('');
            this.kycVerificationForm.get('communicationAddress.state').setValue('');
            this.kycVerificationForm.get('communicationAddress.city').setValue('');
        }
        this.arrayState = [];
        this.entityName = "state";
        // console.log("State -- ", country)
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
            // console.log("-->", this.arrayState)
            if (address.length > 0) {
                for (const key in address) {
                    if (Object.prototype.hasOwnProperty.call(address, key)) {
                        const element = address[key];
                        for (const state in this.arrayState) {
                            if (Object.prototype.hasOwnProperty.call(this.arrayState, state)) {
                                const elementState = this.arrayState[state];
                                if (elementState.trim() === element.trim()) {
                                    // console.log('elementState', elementState)
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
            this.kycVerificationForm.get('permanentAddress.zipCode').setValue('');
            this.kycVerificationForm.get('permanentAddress.state').setValue('');
            this.kycVerificationForm.get('permanentAddress.city').setValue('');
        }
        this.entityName = "state";
        // console.log("State -- ", country)
        this.api.getDropDownForStateCity(this.entityName, country).subscribe((data) => {
            this.arrayState1 = data;
            // console.log("-->", this.arrayState)
        });
    }
    // getCityName(state: any,address) {
    //   this.entityName = "city";
    //   // console.log(state)
    //   this.api.getDropDownForStateCity(this.entityName, state).subscribe((data) => {
    //     this.arrayCity = data;
    //     // console.log("-->", this.arrayCity)
    //     if (address.length > 0) {
    //       for (const key in address) {
    //         if (Object.prototype.hasOwnProperty.call(address, key)) {
    //           const element = address[key];
    //           for (const City in this.arrayCity) {
    //             if (Object.prototype.hasOwnProperty.call(this.arrayCity, City)) {
    //               const elementCity = this.arrayCity[City];
    //               if (elementCity.trim() === element.trim()) {
    //                 // console.log('elementCity', elementCity)
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
    //   // console.log(state)
    //   this.api.getDropDownForStateCity(this.entityName, state).subscribe((data) => {
    //     this.arrayCity1 = data;
    //     // console.log("-->", this.arrayCity)
    //   });
    // }
    getAllAuthCities() {
        this.api.getAuthorizedCityInfo().subscribe(res => res.map(r => this.arrayCity.push(r.cityName)));
        console.log(this.arrayCity);
    }
    onStateChange(addType) {
        if (addType && addType == 'communication') {
            this.kycVerificationForm.get('communicationAddress.zipCode').setValue('');
            this.kycVerificationForm.get('communicationAddress.city').setValue('');
        }
        if (addType == 'permanent') {
            this.kycVerificationForm.get('permanentAddress.zipCode').setValue('');
            this.kycVerificationForm.get('permanentAddress.city').setValue('');
        }
    }
    onCityChange(addType) {
        if (addType && addType == 'communication') {
            this.kycVerificationForm.get('communicationAddress.zipCode').setValue('');
        }
        else if (addType && addType == 'permanent') {
            this.kycVerificationForm.get('permanentAddress.zipCode').setValue('');
        }
    }
    getProfileImage(customerId, document_type) {
        this.api.getCustomerDocuments(customerId, document_type).subscribe((data) => {
            // console.log("data ::", data);
            if (data.length > 0) {
                this.profileId = data[0].id;
                this.imageURL = data[0].fileUrl;
            }
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
    onUpload1(event, KycForm, index, side) {
        var kyc = KycForm.documentsList[index].documentName;
        this.selectedFiles = event.target.files[0];
        if (side === 'backSide') {
            this.fileNameCheckBack = this.selectedFiles.name;
            var fileExtBack = this.fileNameCheckBack.split('.').pop();
            if (fileExtBack.toLowerCase() === "jpeg" || fileExtBack.toLowerCase() === "jpg" || fileExtBack.toLowerCase() === "png") {
                this.fun2(event, this.selectedFiles, kyc, KycForm.documentType, side);
            }
            else {
                this.snack.open("Please Upload Valid Aadhar Card!", "OK", {
                    duration: 4000,
                    verticalPosition: "top",
                    horizontalPosition: "right",
                });
                return;
            }
        }
        if (side === 'frontSide') {
            this.fileNameCheck = this.selectedFiles.name;
            var fileExt = this.fileNameCheck.split('.').pop();
            if (fileExt.toLowerCase() === "jpeg" || fileExt.toLowerCase() === "jpg" || fileExt.toLowerCase() === "png") {
                this.fun1(event, this.selectedFiles, kyc, KycForm.documentType, side);
            }
            else {
                this.snack.open("Please Upload Valid Aadhar Card!", "OK", {
                    duration: 4000,
                    verticalPosition: "top",
                    horizontalPosition: "right",
                });
                return;
            }
        }
        // this.fun2(event, this.selectedFiles, kyc, KycForm.documentType, side);
        this.fileName = this.selectedFiles.name;
        KycForm.documentsList[index].documentType = this.fileName;
        this.kycVerificationForm1.controls.documentsList["controls"][index].controls.documentType.setValue(this.fileName);
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.readAsText(this.selectedFiles);
        reader.onload = (event2) => {
            this.fileUrl = reader.result;
        };
    }
    doOCR(img, side, docName, event) {
        return __awaiter(this, void 0, void 0, function* () {
            const worker = Object(tesseract_js__WEBPACK_IMPORTED_MODULE_2__["createWorker"])({
            //logger: m => console.log(m)
            });
            (() => __awaiter(this, void 0, void 0, function* () {
                // console.log("before open");
                this.loader.open();
                // console.log("after open");
                yield worker.load();
                yield worker.loadLanguage('eng');
                yield worker.initialize('eng');
                const { data: { text } } = yield worker.recognize(img);
                // console.log(text);
                yield worker.terminate();
                this.loader.close();
                const aadharDetails = this.aadharParser(text);
                // console.log("this.passportDetails", aadharDetails, aadharDetails.fullName.toLowerCase());
                if (side === 'frontSide') {
                    this.namePancard = aadharDetails.fullName.toLowerCase();
                    this.dob = aadharDetails.dob;
                    this.panNumber = aadharDetails.adharNumber;
                    this.pancard = true;
                    this.imageOCR = this.url;
                    this.fileNameFront = this.selectedFiles.name;
                    var split = this.fileNameFront.split('.');
                    var filenameFrontSide = split[0];
                    var extension = split[1];
                    // if (filenameFrontSide.length > 11) {
                    //   this.snack.open("File name exceeds 11 characters.Trimming to 11 characters", "OK", {
                    //     duration: 4000,
                    //     verticalPosition: "top",
                    //     horizontalPosition: "right",
                    //   });
                    //   filenameFrontSide = filenameFrontSide.substring(0, 11);
                    // }
                    this.filenameFrontSide = filenameFrontSide;
                    this.resultFrontSide = filenameFrontSide + '.' + extension;
                    // console.log("resultFrontSide", this.resultFrontSide)
                    this.dataFront = {
                        customerId: this.refreshCustomerId,
                        documentName: docName,
                        documentType: "6",
                        fileType: event.type,
                        fileName: this.filenameFrontSide,
                        verificationType: "KYC verification",
                        documentSide: '1',
                        idNumber: this.panNumber,
                    };
                    // console.log(this.dataFront);
                }
                if (side === 'backSide') {
                    let address = text.split(",");
                    this.address = address[2] + "," + address[5] + "," + address[6] + "," + address[7];
                    this.fileNameBack = this.selectedFiles.name;
                    var split = this.fileNameBack.split('.');
                    var filenameBackSide = split[0];
                    var extension = split[1];
                    // if (filenameBackSide.length > 11) {
                    //   this.snack.open("File name exceeds 11 characters.Trimming to 11 characters", "OK", {
                    //     duration: 4000,
                    //     verticalPosition: "top",
                    //     horizontalPosition: "right",
                    //   });
                    //   filenameBackSide = filenameBackSide.substring(0, 11);
                    // }
                    this.resultBackSide = filenameBackSide + '.' + extension;
                    this.filenameBackSide = filenameBackSide;
                    // console.log("resultFrontSide", this.resultFrontSide)
                    this.imageOCRBack = this.urlback;
                    this.dataBack = {
                        customerId: this.refreshCustomerId,
                        documentName: docName,
                        documentType: "6",
                        fileType: event.type,
                        fileName: this.filenameBackSide,
                        verificationType: "KYC verification",
                        documentSide: '2',
                        idNumber: this.panNumber,
                    };
                }
                // console.log("this.namePancard ,this.dob ,this.panNumber ,this.url ", this.namePancard, this.dob, this.panNumber)
                if (aadharDetails.adharNumber != null || aadharDetails.adharNumber != undefined) {
                    this.splitFunction(text, side);
                }
                else {
                    // console.log("wrong addhar to");
                    this.snack.open("Please Upload Valid Aadhar Card!", "OK", {
                        duration: 4000,
                        verticalPosition: "top",
                        horizontalPosition: "right",
                    });
                    this.resultBackSide = null;
                    this.resultFrontSide = null;
                }
            }))();
        });
    }
    onChangeGender(event) {
        let prefix = this.kycVerificationForm.value.prefix;
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
        let prefix = this.kycVerificationForm.value.gender;
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
    fun2(event, url, docName, docType, side) {
        // this.image = event.target.result;
        const cId = this.customerId;
        const uploadData = new FormData();
        this.urlB = url;
        if (event.target.files) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                this.urlback = event.target.result;
                this.doOCR(this.urlback, side, docName, event);
            };
        }
    }
    fun1(event, url, docName, docType, side) {
        // console.log(event);
        // this.image = event.target.result;
        const cId = this.customerId;
        const uploadData = new FormData();
        this.urlF = url;
        if (event.target.files) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                this.url = event.target.result;
                this.doOCR(this.url, side, docName, event);
            };
        }
    }
    radioEvent(event) {
        // console.log("radio button event");
        this.radioFlag = event.target.value;
        this.openVerificationPopup(false, this.radioFlag == 'Auto' ? true : false);
    }
    splitFunction(text, side) {
        let text1 = text.replace(/[^\x00-\x7F]/g, "");
        text.split(":");
        // console.log(text.split(":")[2]);
        let address = text.split(",");
        // console.log(address);
        // console.log(address.length);
        this.countryAadhar = "India";
        this.getStateName(this.countryAadhar, address);
        this.residency = "Citizen";
        if (side == "backSide") {
            this.pinCode = address[address.length - 1].trim().split(" ")[0];
            this.kycVerificationForm
                .get("communicationAddress.zipCode")
                .patchValue(this.pinCode);
            this.kycVerificationForm
                .get("communicationAddress.residenceType")
                .patchValue(this.residency);
            this.kycVerificationForm
                .get("communicationAddress.country")
                .patchValue(this.countryAadhar);
            this.kycVerificationForm
                .get("communicationAddress.address1")
                .patchValue(address[2] + address[5]);
            this.kycVerificationForm
                .get("communicationAddress.address2")
                .patchValue(address[6]);
            this.kycVerificationForm
                .get("communicationAddress.state")
                .patchValue(address[7].trim());
        }
        if (side == "frontSide") {
            const asciiStr = text.replace(/[^\x00-\x7F]/g, "").trim();
            const lines = asciiStr.split("\n");
            let nameLineIndex = 2;
            const names = lines[nameLineIndex]
                .split(" ")
                .filter((x) => x.length > 1)
                .join(" ");
            // console.log(names);
            if (text.includes("Female") ||
                text.includes("female")) {
                this.kycVerificationForm.get("gender").patchValue("Female");
                this.kycVerificationForm.get("prefix").patchValue("Ms");
            }
            else if (text.includes("Male") ||
                text.includes("male")) {
                this.kycVerificationForm.get("gender").patchValue("Male");
                this.kycVerificationForm.get("prefix").patchValue("Mr");
            }
            this.kycVerificationForm.get("nationality").patchValue("Indian");
            // console.log(names)
            let x = names.split(" ");
            // console.log(x[0], x[1]);
            this.kycVerificationForm.get("firstName").patchValue(x[0]);
            this.kycVerificationForm.get("lastName").patchValue(x[1]);
        }
    }
    createItem() {
        return this.fb.group({
            id: [""],
            documentName: [""],
            documentType: [""],
            fileData1: [""],
            docNum: [""],
            fileData2: [""],
        });
        // this.changeValue2(this.kycVerificationForm.controls.documentsList['controls'][0].controls.documentName.,0)
    }
    getDoc() {
        this.indexs = "prefix";
        this.dropVariableDoc = "document_type";
        this.docName = "document_name";
        this.bioName = "biometrics_Name";
        this.bioType = "biometrics_Type";
        this.gender = "gender";
        this.resi = "residence";
        this.marr = "maritial_Status";
        this.coun = "country";
        this.nation = "nationality";
        this.api.getDropDownValues(this.dropVariableDoc).subscribe((data) => {
            this.Documents = data;
        });
        // this.api.getDropDownValues(this.docName).subscribe((resp) => {
        //   this.DocumentsName = resp;
        // });
        this.DocumentsName = ["Aadhar card"];
        this.api.getDropDownValues(this.bioName).subscribe((response) => {
            this.biometrics_Name = response;
        });
        this.api.getDropDownValues(this.bioType).subscribe((responseData) => {
            this.biometrics_Type = responseData;
        });
        // this.api.getDropDownValues(this.coun).subscribe((responseData) => {
        //   this.countrys = responseData;
        //   // console.log("this.countrys::", this.countrys)
        // });
        this.api.getAllCountries().subscribe((data) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].authStatus === 'A') {
                    console.log(data[i]);
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
            this.MaritalStatus = respo;
        });
        this.api.getDropDownValues(this.indexs).subscribe((re) => {
            this.index = re;
        });
        this.api.getDropDownValues(this.nation).subscribe((datas) => {
            this.nationality = datas;
        });
    }
    get kyc() {
        return this.kycVerificationForm.controls;
    }
    get comAddress() {
        return this.kyc.communicationAddress;
    }
    get permAddress() {
        return this.kyc.permanentAddress;
    }
    get sameAddress() {
        return this.kycVerificationForm.get("isAddressSame").value;
    }
    onChangeAddress(control, e) {
        if (e.value == "No" &&
            !this.kycVerificationForm.contains("permanentAddress")) {
            this.kycVerificationForm.addControl("permanentAddress", this.permanentAddress);
            this.flexValue = '50';
        }
        else {
            this.kycVerificationForm.removeControl("permanentAddress");
            this.flexValue = '100';
        }
    }
    onChangeCif(event) {
        if (event == '') {
            this.resetData();
        }
        else {
            this.autofillDetails();
        }
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
    autofillDetails(editCif) {
        console.log(editCif);
        this.cifNumber = this.kycVerificationForm.controls.cifNumber.value;
        console.log(this.cifNumber);
        if (editCif) {
            console.log("1st if");
            this.getAllCustomerDetails(editCif);
        }
        if (this.cifNumber) {
            this.cifFetch = true;
            console.log("2nd if");
            this.getAllCustomerDetails();
        }
    }
    setCustVerificationValues(data) {
        this.kycVerificationForm.patchValue(data.customerInfoList[0]);
        if (data.customerInfoList[0].userAddress.length == 2) {
            this.kycVerificationForm.addControl("permanentAddress", this.permanentAddress);
            this.kycVerificationForm.get("isAddressSame").patchValue(this.array[1].name);
            for (let i = 0; i < data.customerInfoList[0].userAddress.length; i++) {
                if (data.customerInfoList[0].userAddress[i].addressType == "Communication") {
                    this.getStateName(data.customerInfoList[0].userAddress[i].country, '');
                    this.getPerStateName(data.customerInfoList[0].userAddress[i].country);
                    // this.getCityName(data.customerInfoList[0].userAddress[i].state,'');
                    this.kycVerificationForm.get("communicationAddress").patchValue(data.customerInfoList[0].userAddress[i]);
                }
                if (data.customerInfoList[0].userAddress[i].addressType == "Permanent") {
                    this.getPerStateName(data.customerInfoList[0].userAddress[i].country);
                    // this.getPerCityName(data.customerInfoList[0].userAddress[i].state);
                    this.kycVerificationForm.get("permanentAddress").patchValue(data.customerInfoList[0].userAddress[i]);
                }
            }
        }
        else {
            this.getStateName(data.customerInfoList[0].userAddress[0].country, '');
            // this.getCityName(data.customerInfoList[0].userAddress[0].state,'');
            console.log("inside communication::", data.customerInfoList[0].userAddress[0].state);
            this.kycVerificationForm.get("isAddressSame").patchValue(this.array[0].name);
            this.kycVerificationForm.get("communicationAddress").patchValue(data.customerInfoList[0].userAddress[0]);
        }
    }
    getOtpMobile(email) {
        this.otpmodel.source = "customer";
        this.otpmodel.source_key = "mobile";
        this.otpmodel.source_value = email.phoneNumber;
        if (this.verify == 'verify') {
            this.api.getOtp(this.otpmodel).subscribe((resp) => {
                // this.otpValidate = resp.data.otpVal.sourceValue;
                // console.log(this.otpValidate);
                // localStorage.setItem(this.otpValidate,'otpValidate')
            });
            this.openDialog1(email.phoneNumber);
            this.mobileVerified = email.phoneNumber;
        }
    }
    openDialog1(phoneNUmber) {
        const dialogRef = this.dialog.open(_fingerprint_authentication_fingerprint_authentication_component__WEBPACK_IMPORTED_MODULE_7__["FingerprintAuthenticationComponent"], {
            data: { number: phoneNUmber, type: "Mobile Number" },
            disableClose: true,
        });
        dialogRef.afterClosed().subscribe((submit) => {
            console.log(submit);
        });
    }
    // public onFileChanged(event) {
    //   this.selectedFiles = event.target.files[0];
    //   let reader = new FileReader();
    //   reader.readAsDataURL(event.target.files[0]);
    //   reader.onload = (event2) => {
    //     this.imgUrl = reader.result;
    //     this.fun(event.target.files[0], this.selectedFiles);
    //   };
    // }
    onFileChanged(event) {
        this.profilePicture = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event2) => {
            // this.imgUrl = reader.result;
            //this.fun(event.target.files[0], this.profilePicture);
            //  this.image = reader.result;
            this.imageURL = reader.result;
            // console.log("file ", reader);
        };
        // console.log(this.profilePicture);
    }
    fun(event, url) {
        const uploadData = new FormData();
        const data = {
            customerId: this.customerId,
            documentName: "Profile Image",
            documentType: "1",
            fileType: event.type,
            fileName: event.name,
            verificationType: "KYC verification",
        };
        uploadData.append("data", JSON.stringify(data));
        uploadData.append("file", url);
        this.api.upload(uploadData).subscribe((res) => {
            // console.log(res);
        });
    }
    tabClick(event) {
        const tab = event.tab.textLabel;
        if (tab === "Documents Upload") {
            this.router.navigateByUrl("/others/documents");
        }
        if (tab === "verification") {
            this.router.navigateByUrl("/others/verification");
        }
        if (tab === "Basic Information") {
            this.router.navigateByUrl("/others/kyc");
        }
    }
    onNext() {
        let phoneNumber = this.kycVerificationForm.value.phoneNumber;
        var payload = {
            phoneNumber: this.kycVerificationForm.value.phoneNumber,
            primaryEmailAdress: this.kycVerificationForm.value.primaryEmailAdress,
        };
        if (!this.cifFetch) {
            this.api.fetchCustomerDetails(payload).subscribe((res) => {
                if (res.status == 200) {
                    console.log("inside if", res);
                    this.dialogService.phoneNumberDetailsDialogue(res.data).subscribe((response) => {
                        console.log("inside resapi", response);
                        if ((response === null || response === void 0 ? void 0 : response.isDialogClose) == true) {
                            this.kycVerificationForm.value.customer_id = response.customerId;
                            this.nextEnableFunction();
                        }
                    });
                }
                else {
                    this.nextEnableFunction();
                }
            });
        }
        else {
            this.nextEnableFunction();
        }
    }
    nextEnableFunction() {
        // console.log(this.dataBack)
        // console.log(this.urlB)
        this.api.setOCR({
            namePancard: this.namePancard,
            dob: this.dob,
            panNumber: this.panNumber,
            imageOCR: this.url,
            imageOCRBack: this.urlback,
            address: this.address
        });
        // console.log("Next button");
        const dateSendingToServer = new _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]('en-US').transform(this.kycVerificationForm.value.dateOfBirth, 'yyyy-MMM-dd');
        if (this.kycVerificationForm.invalid) {
            return;
        }
        let userAddress = [];
        userAddress.push(this.kycVerificationForm.value.communicationAddress);
        if (this.kycVerificationForm.value.permanentAddress) {
            userAddress.push(this.kycVerificationForm.value.permanentAddress);
        }
        let payload = {
            cifNumber: this.kycVerificationForm.value.cifNumber,
            prefix: this.kycVerificationForm.value.prefix,
            primaryEmailAdress: this.kycVerificationForm.value.primaryEmailAdress,
            phoneNumber: this.kycVerificationForm.value.phoneNumber,
            firstName: this.kycVerificationForm.value.firstName,
            lastName: this.kycVerificationForm.value.lastName,
            middleName: this.kycVerificationForm.value.middleName,
            customerId: this.kycVerificationForm.value.customer_id,
            gender: this.kycVerificationForm.value.gender,
            dateOfBirth: dateSendingToServer,
            maritalStatus: this.kycVerificationForm.value.maritalStatus,
            nationality: this.kycVerificationForm.value.nationality,
            userAddress: userAddress,
            verificationType: 'KYC',
            kycSubmit: false
        };
        console.log(payload, " :: Payload");
        console.log(this.profilePicture);
        this.api.kycScreenBasicinfo(payload).subscribe((resp) => {
            console.log(resp, "Next response");
            console.log("resp after saving ", resp);
            this.id = resp.customerId;
            if (this.uploadDone) {
                if (this.dataFront != undefined) {
                    this.uploadFrontSide(this.id);
                    this.uploadDone = false;
                }
                if (this.dataBack != undefined) {
                    this.uploadBackSide(this.id);
                    this.uploadDone = false;
                }
            }
            this.ls.setItem("cardCustomer", resp.firstName + ' ' + resp.lastName);
            console.log(resp.firstName, '', resp.lastName);
            this.name = resp.firstName + ' ' + resp.lastName;
            console.log(this.name);
            this.api.setName({
                name: this.name,
                customerId: resp.customerId,
                cifNumber: resp.cifNumber
            });
            this.snack.open("Basic Information Details Saved!", "OK", {
                duration: 4000,
                verticalPosition: "top",
                horizontalPosition: "right",
            });
            this.basicInfoSavedAlready = true;
            // this.kycVerificationForm.reset();
            // 
            sessionStorage.setItem('customer_id', resp.customerId);
            localStorage.setItem('customer_id', resp.customerId);
            sessionStorage.setItem('kyc_reference', resp.kycReference);
            localStorage.setItem('kyc_reference', resp.kycReference);
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
    uploadBackSide(id) {
        if (this.dataBack.documentName != undefined) {
            this.dataBack.customerId = id;
            console.log(this.dataBack);
            console.log(this.urlB);
            const uploadData = new FormData();
            uploadData.append("data", JSON.stringify(this.dataBack));
            uploadData.append("file", this.urlB);
            this.api.upload(uploadData).subscribe((res) => {
                console.log("resp after uploading file", res);
                // this.kycVerificationForm1.get("upload").patchValue(true);
                if (res.body) {
                    this.snack.open("Document Uploaded!", "OK", {
                        duration: 4000,
                        verticalPosition: "top",
                        horizontalPosition: "right",
                    });
                }
            }, (error) => {
                if (error.status == 201) {
                    console.log("in err");
                    this.backSideUploaded = true;
                }
                this.kycVerificationForm1.get("upload").patchValue(true);
                this.snack.open("Document Uploaded!", "OK", {
                    duration: 4000,
                    verticalPosition: "top",
                    horizontalPosition: "right",
                });
            });
        }
        else {
            return null;
        }
    }
    uploadFrontSide(id) {
        console.log(this.dataFront);
        if (this.dataFront.documentName != undefined) {
            this.dataFront.customerId = id;
            console.log(this.dataFront);
            console.log(this.urlF);
            const uploadData = new FormData();
            uploadData.append("data", JSON.stringify(this.dataFront));
            uploadData.append("file", this.urlF);
            this.api.upload(uploadData).subscribe((res) => {
                console.log("resp after uploading file", res);
                // this.kycVerificationForm1.get("upload").patchValue(true);
                if (res.body) {
                    this.snack.open("Document Uploaded!", "OK", {
                        duration: 4000,
                        verticalPosition: "top",
                        horizontalPosition: "right",
                    });
                }
            }, (error) => {
                if (error.status == 201) {
                    console.log("in err");
                    this.frontSideUploaded = true;
                }
                this.kycVerificationForm1.get("upload").patchValue(true);
                this.snack.open("Document Uploaded!", "OK", {
                    duration: 4000,
                    verticalPosition: "top",
                    horizontalPosition: "right",
                });
            });
        }
        else {
            return null;
        }
    }
    kycRef(kycReference) {
        this.api.setKycRef({
            kycReference: kycReference,
        });
    }
    keyPressAlphanumeric(event) {
        var inp = String.fromCharCode(event.keyCode);
        if (/^[a-zA-Z0-9_ ]*$/.test(inp)) {
            return true;
        }
        else {
            event.preventDefault();
            return false;
        }
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
    resetData() {
        localStorage.removeItem('customer_id');
        localStorage.removeItem('currentKycTabIndex');
        this.kycVerificationForm.reset();
        this.imageURL = "not_available";
    }
    getAllCustomerDetails(cifNumber) {
        cifNumber ? this.cifNumber = cifNumber : '';
        this.loading = true;
        this.image = "",
            this.imgUrl = "";
        console.log("CIF---------", event);
        // let cifNumber = this.kycVerificationForm.value.cifNumber;
        // console.log("CIF",cifNumber);
        this.api.gettingCustomerDetails(this.cifNumber).subscribe((resp) => {
            this.loading = false;
            console.log("All Customer Details", resp);
            this.api.sendKycDataFetchedInfo('DATA FETCH');
            if (resp != null || resp != undefined) {
                this.customerInformation = resp.customerInfoList[0];
                if (resp.customerInfoList[0].middleName === undefined || resp.customerInfoList[0].middleName === null) {
                    resp.customerInfoList[0].middleName = null;
                }
                resp.customerInfoList[0].dateOfBirth = new Date(resp.customerInfoList[0].dateOfBirth);
                console.log(resp.customerInfoList[0].customerId);
                localStorage.setItem("customerId", resp.customerInfoList[0].customerId);
                sessionStorage.setItem('cust_status', resp.customerInfoList[0].customerAdditionalInfo.kycStatus);
                // localStorage.setItem("customerStatus", resp.customerInfoList[0].customerAdditionalInfo.kycStatus);
                // this.api.getImage(resp.customerInfoList[0].customerId).subscribe((data: any) => {
                //   console.log("data:", data);
                //   let profileImage = data.profileImage;
                //   this.cdr.markForCheck();
                //   if (profileImage) {
                //     this.profileImageExist = true;
                //   }
                //   let objectURL = 'data:image/jpeg;base64,' + profileImage.fileData;
                //   this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL)
                //   this.cdr.markForCheck();
                // })
                this.getProfileImage(resp.customerInfoList[0].customerId, 1);
            }
            else {
                this.snack.open('Invalid CIF Number', 'OK', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                });
                this.resetData();
                // this.accountForm.get('cifNumber').patchValue("");
                return;
            }
            this.verificationInfo = resp;
            if (resp.customerInfoList[0].custStatus == "REJECTED") {
                this.snack.open("Data is rejected for this CIF Number :" + this.cifNumber, "", {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                });
                this.kycVerificationForm.reset();
                this.ngOnInit();
                console.log("err:", resp);
                return;
            }
            if (resp == null) {
                this.snack.open("Data is not found for CIF Number :" + this.cifNumber, "", {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                });
                this.kycVerificationForm.reset();
                this.ngOnInit();
                console.log("err:", resp);
                return;
            }
            if (resp && resp[0]) {
                console.log("All Customer Details", resp.customerInfoList[0].customerId);
                sessionStorage.setItem('customer_id', resp[0].customerId);
            }
            if (resp) {
                console.log("Remove");
                this.ls.removeItem('EDIT-CIFNUMBER');
            }
            this.setCustVerificationValues(resp);
        }, err => {
        });
        // this.ls.removeItem('EDIT-CIFNUMBER');
    }
    convertDate(value) {
        let date = moment__WEBPACK_IMPORTED_MODULE_10__(value).format("YYYY-MM-DD"); // ISO 8601 format
        // let date = moment(value).format('YYYY-MMM-DD');
        if (date)
            return date;
    }
    getOtp(email) {
        this.otpmodel.source = "customer";
        this.otpmodel.source_key = "email";
        this.otpmodel.source_value = email.primaryEmailAdress;
        console.log(this.otpmodel.source_value);
        if (this.emailVerify == 'verify') {
            this.api.getOtp(this.otpmodel).subscribe((resp) => { });
            this.openDialogEmail(email.primaryEmailAdress);
            this.emailVerified = email.primaryEmailAdress;
        }
    }
    _keyPress(event) {
        console.log("key", event);
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        console.log(inputChar);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
        if (this.verify == 'verified') {
            if (event != this.mobileVerified) {
                this.verify = 'verify';
            }
            else {
                this.verify = 'verified';
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
    openDialogEmail(email) {
        const dialogRef = this.dialog.open(_fingerprint_authentication_fingerprint_authentication_component__WEBPACK_IMPORTED_MODULE_7__["FingerprintAuthenticationComponent"], {
            data: { number: email, type: "email id" },
            disableClose: true,
        });
        dialogRef.afterClosed().subscribe((submit) => {
            console.log(submit);
        });
    }
    toMakeButton() {
        document.getElementById("fileId").click();
    }
    assignVerify(resp) {
        if (resp.type == 'mobile') {
            this.verify = 'verified';
        }
        if (resp.type == 'email') {
            this.emailVerify = 'verified';
        }
    }
    isAllSameDigit(event, zipIndex) {
        this.zipIndex = zipIndex;
        let count = 0, number = event.target.value;
        if (number != '') {
            for (var i = 0; i < number.length; i++) {
                if (0 == number[i]) {
                    count++;
                }
            }
            if (count == number.length) {
                console.log('if loop');
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
    getCityandStateByZipcode(countryName, zipcode, addType) {
        if (!countryName) {
            this.snack.open('Please Select Country', 'Ok', {
                duration: 1000,
                horizontalPosition: "right",
                verticalPosition: 'top'
            });
            if (addType == 'communication') {
                this.kycVerificationForm.get('communicationAddress.zipCode').setValue('');
            }
            else {
                this.kycVerificationForm.get('permanentAddress.zipCode').setValue('');
            }
            return;
        }
        if (zipcode.length >= 6) {
            this.api.fetchStateCityByZipcode(countryName, zipcode).subscribe((res) => {
                if (res) {
                    if (addType == 'communication') {
                        this.kycVerificationForm.get('communicationAddress.state').setValue(res.stateName);
                        this.kycVerificationForm.get('communicationAddress.city').setValue(res.cityName);
                    }
                    else {
                        this.kycVerificationForm.get('permanentAddress.state').setValue(res.stateName);
                        this.kycVerificationForm.get('permanentAddress.city').setValue(res.cityName);
                    }
                }
                else {
                    this.snack.open("Entered Zipcode does not exists", "OK", {
                        duration: 4000,
                        verticalPosition: "top",
                        horizontalPosition: "right",
                    });
                }
            });
        }
    }
}
KycVerificationComponent.ɵfac = function KycVerificationComponent_Factory(t) { return new (t || KycVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_16__["AppLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_19__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_12__["FingerPrintCaptureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_15__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_17__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_20__["ApplicationEntryStageService"])); };
KycVerificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: KycVerificationComponent, selectors: [["app-kyc-verification"]], viewQuery: function KycVerificationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.profileFile = _t.first);
    } }, outputs: { settingallCustInfo: "settingallCustInfo" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => KycVerificationComponent),
                multi: true,
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => KycVerificationComponent),
                multi: true,
            },
        ])], decls: 3, vars: 1, consts: [[1, "m-333", 2, "padding-left", "3.9%", "padding-right", "3.2%"], [1, "marginTopKyc"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "formSectionContainer"], [1, "formLeft", "imageContainer"], [4, "ngIf", "ngIfElse"], ["showAvatar", ""], ["mat-icon-button", "", 2, "float", "right", "padding-top", "8px", "padding-right", "15px", "cursor", "pointer"], ["type", "file", "input", "", "type", "file", "accept", "image/png, image/gif, image/jpg, image/jpeg", 1, "changeInput", 3, "change"], ["profileFile", ""], [2, "color", "#004C97"], [2, "color", "#B20000", "cursor", "pointer", "padding-top", "15px", 3, "click"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayoutAlign", "start center"], ["appearance", "outline", "fxFlex", "110", 1, "fieldinput"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["fxFlex", "85", "matInput", "", "placeholder", "CIF Number", "formControlName", "cifNumber", "type", "number", "min", "0", "oninput", "validity.valid||(value='');", "name", "cifNumber", "value", "cifNumber", 1, "alignment", 3, "formControl", "matAutocomplete", "keyup"], ["fxFlex", "15"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "pb-1 ml-48", 4, "ngIf"], ["id", "formfetch", 1, "form"], ["id", "fech", 1, "flex-grow-1"], [1, "flex-grow-2", 2, "margin-left", "-1px"], ["appearance", "outline", 1, "fieldinput"], ["formControlName", "prefix", 3, "selectionChange"], [4, "ngIf"], [1, "flex-grow-1"], ["matInput", "", "placeholder", "First Name*", "formControlName", "firstName", "autocomplete", "off", "type", "text", "name", "lastName", "value", "updateUserInfo.firstName", 1, "alignment", 3, "keypress"], ["matInput", "", "placeholder", "Middle Name", "formControlName", "middleName", "type", "text", "name", "middleName", 1, "alignment", 3, "keypress"], ["matInput", "", "placeholder", "Last Name*", "formControlName", "lastName", "autocomplete", "off", "type", "text", "name", "lastName", "value", "updateUserInfo.lastName", 1, "alignment", 3, "keypress"], ["id", "formfetch1", 1, "form"], ["matInput", "", "placeholder", "Date of Birth*", "formControlName", "dateOfBirth", "id", "dob", "name", "dateOfBirth", "readonly", "", "value", "dateOfBirth", 1, "alignment", 3, "matDatepicker", "max"], ["fxFlex", "8%", "id", "toggle"], ["matSuffix", "", 3, "for"], ["picker", ""], ["formControlName", "maritalStatus"], ["formControlName", "gender", 3, "selectionChange"], ["class", "help-block", 4, "ngIf"], ["formControlName", "nationality"], ["id", "formfetch2", 1, "form"], [1, "flex-grow-1", 2, "margin-top", "20px"], ["fxLayout", "row", 1, "inputMatcardMail"], ["matInput", "", "placeholder", "Primary Email*", "formControlName", "primaryEmailAdress", "autocomplete", "off", "type", "text", "name", "primaryEmailAdress", 1, "alignment", 3, "keypress"], ["class", "verificationDisable", 4, "ngIf"], ["class", "verification", 3, "click", 4, "ngIf"], ["fxLayout", "row", 1, "inputMatcard"], ["matInput", "", "placeholder", "Mobile Number*", "name", "phoneNumber", "autocomplete", "off", "maxLength", "10", "formControlName", "phoneNumber", 1, "alignment", 3, "keypress"], ["fxLayout", "row"], ["fxFlex", "100"], ["id", "bill"], [1, "billName"], ["formControlName", "isAddressSame"], ["class", "ml-8", 3, "checked", "value", "change", 4, "ngFor", "ngForOf"], [1, "matCard"], ["fxLayoutGap", "10px", "fxLayout", "row wrap", 1, "mt-32", "communicationForm"], ["fxFlex", "", 1, "addressGrid"], [1, "spanDiv"], [1, "span"], ["formGroupName", "communicationAddress"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayoutAlign", "space-between center"], ["fxFlex", "50%"], [1, "pb-1"], [1, "address-card", "inputMatcard3", 3, "ngClass"], ["matInput", "", "placeholder", "Address Line 1*", "formControlName", "address1", "autocomplete", "off", "maxlength", "50", "name", "address1", "rows", "1", 1, "full-width", 3, "keypress"], ["matInput", "", "placeholder", "Address Line 2*", "formControlName", "address2", "autocomplete", "off", "maxlength", "50", "name", "address2", "rows", "1", 1, "full-width", 3, "keypress"], ["appearance", "outline", 1, "full-width", "fieldinput"], ["formControlName", "residenceType"], ["formControlName", "country", 3, "selectionChange"], ["value", ""], ["appearance", "outline", "fxFlex", "100", 1, "fieldinput"], ["matInput", "", "formControlName", "zipCode", "autocomplete", "off", "onlyNumber", "", "type", "text", "matInput", "", "minLength", "5", "placeholder", "Zip Code*", "maxLength", "10", "name", "zipCode", 3, "keyup", "change"], ["matPrefix", "", 1, "my-icon"], ["style", "color: #E74C3C;", 4, "ngIf"], ["name", "state", "formControlName", "state", 3, "selectionChange"], ["name", "city", "formControlName", "city", 3, "selectionChange"], ["fxFlex", "", "class", "addressGrid", "id", "communicationBlockForm", 4, "ngIf"], ["fxlayout", "row", "fxLayoutAlign", "space-between center", "class", "button1", 4, "ngIf"], ["alt", "", 1, "formImg", 3, "src"], [3, "value"], ["fxLayout", "row wrap", 2, "margin-top", "20px"], ["fxFlex", " 100"], ["mat-card-avatar", "", "class", "example-header-image-dropdown", "fxFlex", "10", 4, "ngIf"], ["mat-card-avatar", "", "fxFlex", "10", 4, "ngIf"], ["fxFlex", "80"], [2, "margin-bottom", "0px"], [2, "margin-top", "0px"], ["mat-card-avatar", "", "fxFlex", "10", 1, "example-header-image-dropdown"], ["align", "center", 2, "margin-top", "5px", "font-size", "large"], ["mat-card-avatar", "", "fxFlex", "10"], ["matListAvatar", "", "align", "center", "alt", "...", 2, "border-radius", "50%", "height", "85%", "margin-right", "20px", "width", "90%", "margin-bottom", "50px", 3, "src"], [1, "pb-1", "ml-48"], [1, "toggleGroup1"], ["color", "primary", "class", "toggleGroup", 3, "checked", "ngStyle", "value", "click", 4, "ngFor", "ngForOf"], ["color", "primary", 1, "toggleGroup", 3, "checked", "ngStyle", "value", "click"], [1, "help-block"], [1, "verificationDisable"], [1, "verification", 3, "click"], [1, "ml-8", 3, "checked", "value", "change"], [2, "color", "#E74C3C"], ["fxFlex", "", "id", "communicationBlockForm", 1, "addressGrid"], ["formGroupName", "permanentAddress"], ["matInput", "", "placeholder", "Address Line 1*", "formControlName", "address1", "maxlength", "50", "name", "address1", 1, "full-width", 3, "keypress"], ["fxFlex", "50"], ["matInput", "", "placeholder", "Address Line 2*", "formControlName", "address2", "maxlength", "50", "name", "address2", 1, "full-width", 3, "keypress"], ["fxLayout", "row", "appearance", "outline", 1, "full-width", "fieldinput"], ["matInput", "", "placeholder", "Zip Code*", "formControlName", "zipCode", "onlyNumber", "", "type", "text", "matInput", "", "minLength", "6", "maxLength", "10", "name", "zipCode", 1, "alignment1", 3, "keyup", "change"], ["fxlayout", "row", "fxLayoutAlign", "space-between center", 1, "button1"], [1, "BackButton"], ["id", "kychide", 1, "hide", 3, "click"], ["kychide", ""], ["mat-stroked-button", "", "id", "n", 3, "ngClass", "disabled", "click"]], template: function KycVerificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, KycVerificationComponent_form_2_Template, 181, 53, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.kycVerificationForm);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelect"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__["MatDatepicker"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_33__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatOption"], _shared_directives_only_number_directive__WEBPACK_IMPORTED_MODULE_35__["OnlyNumberDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatPrefix"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardAvatar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_36__["MatListAvatarCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_33__["DefaultStyleDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatError"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["SlicePipe"]], styles: [".breadcrumb[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 40px;\n  width: 100%;\n  background-color: white;\n}\n\n.head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.ml-48[_ngcontent-%COMP%] {\n  margin-left: 43% !important;\n}\n\n.fetchButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  text-decoration: underline;\n  padding-left: 10px;\n  padding-top: 15px;\n  cursor: pointer;\n  margin-right: 40px;\n}\n\nmat-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-left: -10%;\n}\n\n#fech[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.fechButtonDiv[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n#formfetch[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 25% 25% 25% 25%;\n}\n\n#formfetch1[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 25% 25% 25% 25%;\n}\n\n#formfetch2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 25% 25%;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.grid[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(50%, 1fr));\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\nmat-tab-group[_ngcontent-%COMP%] {\n  padding-left: 2%;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 60vh;\n  border: 1px solid black;\n  padding: 10px 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2), .flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  margin-top: 5px;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  flex: 1;\n}\n\n.formField1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 50px;\n}\n\n.formField[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 120px;\n}\n\n  .mat-tooltip {\n  font-size: 15px;\n  white-space: pre-wrap;\n  color: gray !important;\n  background-color: rgba(255, 255, 255, 0.9);\n  border: 1px solid gray;\n  max-width: unset !important;\n}\n\n.formField2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n}\n\n.inputMatcard[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputGender[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatName[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatNew[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatLastName[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardDoc[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMail[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMailAdd[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMarritial[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardPrefix[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard3[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardAdd[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard4[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  max-width: 208px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 12px;\n}\n\n.inputMatcard2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  width: 20px;\n}\n\n.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n\n.inputClass[_ngcontent-%COMP%] {\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  box-shadow: 0 3pt 6pt #00000029;\n  font-weight: bolder;\n}\n\n#check[_ngcontent-%COMP%] {\n  -webkit-appearance: outline;\n     -moz-appearance: outline;\n          appearance: outline;\n  width: 150px;\n}\n\n.aadharDocNum[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.aadharFetchDiv[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-left: 0;\n}\n\n.mainAadhar[_ngcontent-%COMP%] {\n  margin-top: 1%;\n}\n\n.aadharInput[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.marginTopKyc[_ngcontent-%COMP%] {\n  margin-top: -1.2%;\n  padding-bottom: 0px;\n}\n\n.option[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.aadharInput1[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 3%;\n  text-align: center;\n}\n\n.toggleGroup1[_ngcontent-%COMP%] {\n  font-size: 10px;\n  top: 250px;\n  left: 1040px;\n  width: 256px;\n  height: 50px;\n  margin-top: 4%;\n  cursor: pointer;\n}\n\n.aadharForm[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  background-color: white;\n  margin-right: 61px;\n  margin-left: 70px;\n  padding-left: 44px;\n}\n\n.toggleGroup[_ngcontent-%COMP%] {\n  padding: 10px 30px 10px 25px;\n  margin-top: 1%;\n  color: #cbbfbf;\n  background: #FFFEFE 0% 0% no-repeat padding-box;\n  border: 1px solid #004C97;\n  border-radius: 12px;\n  opacity: 1;\n}\n\n.toggleGroup1[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n\n#dateOf[_ngcontent-%COMP%] {\n  height: 48px;\n}\n\n.aadharCheck[_ngcontent-%COMP%] {\n  color: green;\n  margin-left: -8%;\n  margin-top: 5%;\n}\n\n.aadharUpload[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  gap: 20px;\n}\n\n.aadharDoc[_ngcontent-%COMP%] {\n  margin-right: 30px !important;\n  padding-top: 10px !important;\n}\n\n.border[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-top: -0.5%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.form13[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.form1[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background-color: white;\n  align-items: center;\n}\n\n.BackButton[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -7.7%;\n  width: 170px;\n  height: 49px;\n  letter-spacing: 0px;\n  color: gray;\n  cursor: pointer;\n  font-size: 14px !important;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 3px 3px 15px #0000000f;\n  border-radius: 35px;\n  padding-left: 65px;\n  padding-top: 13px;\n  opacity: 1;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-top: 10px;\n  margin: 10px auto 0 auto;\n  margin-bottom: 3%;\n}\n\n.changeInput[_ngcontent-%COMP%] {\n  opacity: 0.0;\n  position: absolute;\n  top: 0;\n  left: 15px;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.changeDiv[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  gap: 10px;\n}\n\n.flex-grow-2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  gap: 10px;\n  margin-left: -10%;\n}\n\n.alignment[_ngcontent-%COMP%] {\n  border-style: none !important;\n  outline: none;\n}\n\n#dob[_ngcontent-%COMP%] {\n  width: 92% !important;\n  float: right;\n}\n\n#toggle[_ngcontent-%COMP%] {\n  margin-top: -14%;\n  padding-right: 25px;\n}\n\n#max-width[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\n#drop-max-width[_ngcontent-%COMP%] {\n  width: 190px;\n}\n\n#radio[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\nradioGroup[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#nationality[_ngcontent-%COMP%] {\n  width: 210px;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  margin-right: 6%;\n}\n\n.change[_ngcontent-%COMP%] {\n  color: #2680EB;\n  text-align: center;\n  text-decoration: underline;\n}\n\n.next12[_ngcontent-%COMP%] {\n  margin-right: -12.5%;\n  background: transparent linear-gradient(91deg, #051A2D 0%, #004C97 100%) 0% 0% no-repeat padding-box;\n  color: white;\n  border-radius: 55px;\n  width: 172px;\n  height: 49px;\n}\n\n.next[_ngcontent-%COMP%] {\n  margin-right: -12.5%;\n  width: 172px;\n  height: 49px;\n  \n  background: #6C6C6C 0% 0% no-repeat padding-box;\n  border-radius: 24px;\n  opacity: 0.38 !important;\n  color: white;\n}\n\n.button1[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n  align-items: center;\n}\n\n.Next1[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 80%;\n  color: #374664;\n  font-weight: 600;\n}\n\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus {\n  background: red;\n}\n\n.mat-tab-label-active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n  .mat-tab-label-active {\n  color: #6988f6 !important;\n}\n\n.verification[_ngcontent-%COMP%] {\n  top: 454px;\n  left: 943px;\n  width: 99px;\n  height: 30px;\n  opacity: 1;\n  float: right;\n  color: #FFFFFF;\n  border-radius: 8px;\n  background: transparent linear-gradient(91deg, #051A2D 0%, #004C97 100%) 0% 0% no-repeat padding-box;\n}\n\n.verificationDisable[_ngcontent-%COMP%] {\n  top: 454px;\n  left: 943px;\n  width: 99px;\n  height: 30px;\n  opacity: 1;\n  float: right;\n  color: #000000;\n  border-radius: 8px;\n  background: #E3E3E3 0% 0% no-repeat padding-box;\n}\n\n  .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: #6988f6 !important;\n  height: 4px;\n}\n\nmat-tab-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.line[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.text[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: block;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  font-size: 25px;\n  text-align: center;\n  margin-right: 10px;\n  background: #fff;\n  line-height: 1.7em;\n}\n\nfigure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30px;\n  height: auto;\n}\n\n.formSectionContainer[_ngcontent-%COMP%] {\n  gap: 40px;\n  display: grid;\n  grid-template-columns: 200px auto;\n}\n\n.imageContainer[_ngcontent-%COMP%] {\n  gap: 0px;\n  display: grid;\n  grid-template-columns: 200px auto;\n}\n\n@media (max-width: 7px) {\n  .imageContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n\n@media (max-width: 768px) {\n  .formSectionContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n\n.formImg[_ngcontent-%COMP%] {\n  height: 200px !important;\n  width: 200px !important;\n  background-color: whitesmoke;\n  border-radius: 10%;\n}\n\n.dropDown[_ngcontent-%COMP%] {\n  display: block;\n}\n\n  .egret-blue .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #004c97;\n}\n\n  .egret-blue .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #004c97;\n}\n\n.mat-radio-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  -webkit-tap-highlight-color: transparent;\n  outline: 0;\n  padding-right: 10px;\n  font-size: 15px;\n}\n\n.Upload[_ngcontent-%COMP%] {\n  vertical-align: c;\n  align-self: center;\n  margin-top: 20px;\n  font-size: 12px;\n  text-decoration: underline;\n  color: #2680EB;\n}\n\n#row[_ngcontent-%COMP%] {\n  font-size: 9px;\n  opacity: 100%;\n  color: #2680EB;\n}\n\n.span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  padding-left: 2px;\n}\n\n.span8[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 60% !important;\n}\n\n.span12[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 10% !important;\n}\n\n.spanDiv[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1%;\n  margin-top: -2%;\n}\n\n#bill[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  margin-bottom: -25px;\n}\n\n.billName[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 20px;\n  margin-left: 20px;\n  font-size: 14px;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  position: unset !important;\n  left: 200px !important;\n  align-self: center !important;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.flex-basis-50[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n}\n\n.gap-20[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n\n.addressContainer[_ngcontent-%COMP%] {\n  padding: 0 20px 0 0 !important;\n}\n\n.address-card[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.inline-block[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.outline[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: medium;\n}\n\n@media (min-width: 576px) {\n  .addressGrid[_ngcontent-%COMP%] {\n    gap: 20px;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n.search_field[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 259px !important;\n  left: 60px;\n  background: white;\n}\n\n.addressGridInner[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.gap-20[_ngcontent-%COMP%] {\n  gap: 20px;\n}\n\n.flex-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.height-auto[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.align-self-flex-end[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n\n.align-self-flex-start[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n\n.width-fit-content[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n#addressBlock[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n\n#communicationDivider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\n#DocumentForm[_ngcontent-%COMP%] {\n  width: 650px;\n  border: 1px solid lightgrey;\n  padding: 10px;\n}\n\n#DocumentForm1[_ngcontent-%COMP%] {\n  width: 650px;\n  border: 1px solid lightgrey;\n  padding: 10px;\n  padding-bottom: 50px;\n}\n\n#docMainDivider[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n\n#dividerInside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\n.errbd[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\n.hide[_ngcontent-%COMP%] {\n  color: white;\n  display: none;\n}\n\ninput[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n#check[_ngcontent-%COMP%] {\n  -webkit-appearance: outline;\n     -moz-appearance: outline;\n          appearance: outline;\n}\n\n.aadharDocNum[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.width[_ngcontent-%COMP%] {\n  width: 150px !important;\n}\n\n.aadharFetch[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  color: #456EFE;\n  font-size: small;\n  align-self: flex-end;\n  padding-top: 54px;\n  padding-left: 0;\n}\n\n  .cdk-overlay-pane {\n  min-width: 270px !important;\n  padding: 7px 0;\n}\n\n  .mat-card-avatar {\n  max-width: 15% !important;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  margin-top: 4%;\n}\n\n.example-header-image-dropdown[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 8px;\n  background-size: cover;\n  background-color: #AED6F1;\n  max-width: 15% !important;\n  width: 25px;\n  height: 35px;\n  border-radius: 50%;\n}\n\n.padding[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  font-size: 15px !important;\n}\n\n.paddingButton[_ngcontent-%COMP%] {\n  padding-bottom: 10px !important;\n}\n\n.parentMatCardContent[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n  .popup-dialog-class mat-dialog-container {\n  padding-bottom: 0px;\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.fieldinput[_ngcontent-%COMP%] {\n  height: 50px;\n  background: #FFFEFE 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 10px #00000017;\n  border-radius: 8px;\n  opacity: 1;\n  margin-top: 20px;\n  color: #102245;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: white !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 1em 0 1em 0;\n  margin-top: -4px !important;\n}\n\n.Backbtn[_ngcontent-%COMP%] {\n  background-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxca3ljLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFLDJCQUEyQjtBQUE3Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFLQTtFQUNFLGlCQUFpQjtBQUZuQjs7QUFJQTtFQUNBLGFBQWE7QUFEYjs7QUFHQTtFQUNFLGtCQUFrQjtBQUFwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQXhCOztBQUdBOztFQUVFLGVBQWU7QUFBakI7O0FBR0E7RUFDRSxPQUFPO0FBQVQ7O0FBTUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUhiOztBQU1B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MkJBQTJCO0FBdk8vQjs7QUF5T0U7RUFDRSxrQ0FBa0M7QUF0T3RDIiwiZmlsZSI6Imt5Yy12ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAvLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG4ubWwtNDh7XHJcbiAgbWFyZ2luLWxlZnQ6IDQzJSAhaW1wb3J0YW50O1xyXG59XHJcbi5mZXRjaEJ1dHRvbiB7XHJcbiAgY29sb3I6ICM0NTZFRkU7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbm1hdC1oaW50IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5hcHAtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIC52ZXJpZmljYXRpb25IZWFke1xyXG4vLyAgIG9wYWNpdHk6IDkwJTtcclxuLy8gfVxyXG4ubWFyZ2luIHtcclxuICBtYXJnaW4tbGVmdDogLTEwJTtcclxufVxyXG4jZmVjaHtcclxuZGlzcGxheTogZmxleDtcclxufVxyXG4uZmVjaEJ1dHRvbkRpdntcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuI2Zvcm1mZXRjaHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSUgMjUlO1xyXG59XHJcblxyXG4jZm9ybWZldGNoMXtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSUgMjUlO1xyXG59XHJcblxyXG4jZm9ybWZldGNoMntcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDI1JSAyNSU7XHJcbn1cclxuXHJcbi5iYXNpYy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCg1MCUsIDFmcikpO1xyXG59XHJcblxyXG4ubWFpbi1oZWFkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbm1hdC10YWItZ3JvdXAge1xyXG4gIHBhZGRpbmctbGVmdDogMiU7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBoZWlnaHQ6IDYwdmg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyICoge1xyXG4gIC8vIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gIG1hcmdpbjogMCA1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoMiksXHJcbi5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDMpIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDMpIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4vLyAgIC5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDQpIHtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICB9XHJcbi5mb3JtRmllbGQxIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5mb3JtRmllbGQge1xyXG4gIC8vIHdpZHRoOjIwMHB4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB3aWR0aDogMTIwcHg7XHJcblxyXG4gIC8vICAgZ2FwOiAyMHB4O1xyXG4gIC8vIH1cclxuXHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRvb2x0aXAge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC45KTtcclxuICBib3JkZXI6MXB4IHNvbGlkIGdyYXk7XHJcbiAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuLmZvcm1GaWVsZDIge1xyXG4gIC8vIHdpZHRoOjIwMHB4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLy8gICBnYXA6IDIwcHg7XHJcbiAgLy8gfVxyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuXHJcbiAgLy8gd2lkdGg6IDIyMHB4O1xyXG59XHJcblxyXG4uaW5wdXRHZW5kZXIge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuICAvLyB3aWR0aDogMjIwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdE5hbWUge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuICAvLyB3aWR0aDogNDUwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdE5ldyB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcblxyXG4gIC8vIHdpZHRoOiA0NTVweDtcclxufVxyXG5cclxuLmlucHV0TWF0TGFzdE5hbWUge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuICAvLyB3aWR0aDogMjAwcHg7XHJcblxyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkRG9jIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyB3aWR0aDoyNzBweDtcclxuICAvLyB3aWR0aDogMTk1cHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmRNYWlsIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyB3aWR0aDoxMDAlO1xyXG4gIC8vIHdpZHRoOiA0MTBweDtcclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZE1haWxBZGQge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIC8vIHdpZHRoOjEwMCU7XHJcbiAgLy8gd2lkdGg6IDc1MHB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkTWFycml0aWFsIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyB3aWR0aDoxMDAlO1xyXG4gIC8vIHdpZHRoOiA0NTBweDtcclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZFByZWZpeCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgLy8gd2lkdGg6MTAwJTtcclxuICAvLyB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmQzIHtcclxuICBmbGV4LWdyb3c6IDI7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vbWF4LXdpZHRoOjIwOHB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuXHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmRBZGQge1xyXG4gIGZsZXgtZ3JvdzogMjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy9tYXgtd2lkdGg6MjA4cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgLy8gd2lkdGg6MjAwcHg7XHJcblxyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkNCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXgtd2lkdGg6IDIwOHB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIC8vIG1hcmdpbi1yaWdodDotMSU7XHJcblxyXG59XHJcblxyXG4vLyAjZm9ybTF7XHJcbi8vICAgbWFyZ2luLXJpZ2h0Oi0xJTtcclxuLy8gfVxyXG4uaW5wdXRNYXRjYXJkMSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDogNTAwcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuXHJcbiAgLy8gaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkMiB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDogNTAwcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgLy8gcGFkZGluZzogMTJweDtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuICAvLyBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uaW5wdXRDbGFzcyB7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4vLyA6aG9zdCA6Om5nLWRlZXAgZGl2Lm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQge1xyXG4vLyAgIGJvcmRlci1jb2xvcjogMCAhaW1wb3J0YW50O1xyXG4vLyAgIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIDpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAge1xyXG4vLyAgIGJvcmRlci1jb2xvcjogMCAhaW1wb3J0YW50O1xyXG4vLyAgIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIDpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmQge1xyXG4vLyAgIGJvcmRlci1jb2xvcjogMCAhaW1wb3J0YW50O1xyXG4vLyAgIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuI2NoZWNre1xyXG4gIGFwcGVhcmFuY2U6IG91dGxpbmU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5hYWRoYXJEb2NOdW17XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi5hYWRoYXJGZXRjaERpdntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbi5tYWluQWFkaGFye1xyXG4gIG1hcmdpbi10b3A6MSU7XHJcbn1cclxuXHJcbi5hYWRoYXJJbnB1dHtcclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxufVxyXG4vLyAubWFyZ2luVG9we1xyXG4vLyAgIC8vIG1hcmdpbi10b3A6IC00JTtcclxuLy8gfVxyXG4ubWFyZ2luVG9wS3lje1xyXG4gICBtYXJnaW4tdG9wOiAtMS4yJTtcclxuICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG4ub3B0aW9ue1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcbi5hYWRoYXJJbnB1dDF7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IC00JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udG9nZ2xlR3JvdXAxe1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICB0b3A6IDI1MHB4O1xyXG5sZWZ0OiAxMDQwcHg7XHJcbndpZHRoOiAyNTZweDtcclxuaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYWFkaGFyRm9ybXtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLy9tYXJnaW4tbGVmdDo4NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1yaWdodDogNjFweDtcclxuICBtYXJnaW4tbGVmdDogNzBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XHJcbn1cclxuLnRvZ2dsZUdyb3Vwe1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDI1cHg7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwNGM5NztcclxuIG1hcmdpbi10b3A6IDElO1xyXG4gY29sb3I6I2NiYmZiZjtcclxuXHJcbmJhY2tncm91bmQ6ICNGRkZFRkUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjMDA0Qzk3O1xyXG5ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5vcGFjaXR5OiAxO1xyXG59XHJcblxyXG4udG9nZ2xlR3JvdXAxe1xyXG4vLyAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDI1cHg7XHJcbi8vICAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JleTtcclxuLy8gIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjhmNztcclxuLy8gICAvLyBmb250LXNpemU6IDEwcHg7XHJcbi8vICAgLy8gaGVpZ2h0OiA0MHB4O1xyXG4gbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuI2RhdGVPZntcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuLmFhZGhhckNoZWNre1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBtYXJnaW4tbGVmdDogLTglO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5hYWRoYXJVcGxvYWR7XHJcbiAgaGVpZ2h0OjQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmFhZGhhckRvY3tcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5ib3JkZXJ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogLTAuNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIC8vIGdhcDogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZm9ybTEzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgLy8gZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbn1cclxuXHJcbi5mb3JtMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGdhcDogNTBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLy8gd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDExJTtcclxuICAvLyBwYWRkaW5nLXJpZ2h0OiAxNCU7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uQmFja0J1dHRvbntcclxuICAgIG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTcuNyU7XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICBoZWlnaHQ6IDQ5cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxNXB4ICMwMDAwMDAwZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDY1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuLm1hdENhcmQge1xyXG4gIG1heC13aWR0aDogMTYwMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG5cclxuLmNoYW5nZUlucHV0IHtcclxuICBvcGFjaXR5OiAwLjA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2hhbmdlRGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4vLyAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbi8vICAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4vLyAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbi8vICAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbi8vICAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuLy8gfVxyXG5cclxuLmZsZXgtZ3Jvdy0xIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIC8vIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG5cclxuLmZsZXgtZ3Jvdy0yIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAlO1xyXG59XHJcblxyXG4uYWxpZ25tZW50IHtcclxuICBib3JkZXItc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jZG9iIHtcclxuICB3aWR0aDo5MiUgIWltcG9ydGFudDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiN0b2dnbGV7XHJcbiAgbWFyZ2luLXRvcDotMTQlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuI21heC13aWR0aCB7XHJcbiAgbWF4LXdpZHRoOiAxNTBweFxyXG59XHJcblxyXG4jZHJvcC1tYXgtd2lkdGgge1xyXG4gIHdpZHRoOiAxOTBweDtcclxufVxyXG5cclxuI3JhZGlvIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbnJhZGlvR3JvdXAge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuI25hdGlvbmFsaXR5IHtcclxuICB3aWR0aDogMjEwcHg7XHJcbn1cclxuXHJcbm1hdC1sYWJlbCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2JTtcclxufVxyXG5cclxuLmNoYW5nZSB7XHJcbiAgY29sb3I6ICMyNjgwRUI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5cclxuLm5leHQxMiB7XHJcbiAgLy8gbWFyZ2luOjEycHggMHB4IDEycHggMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0Oi0xMi41JTtcclxuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkxZGVnLCAjMDUxQTJEIDAlLCAjMDA0Qzk3IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTVweDtcclxuICAgIHdpZHRoOiAxNzJweDtcclxuICAgIGhlaWdodDogNDlweDtcclxufVxyXG4ubmV4dCB7XHJcblx0Ly8gbWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6LTEyLjUlO1xyXG4vL2xlZnQ6IDEwNjNweDtcclxuICB3aWR0aDogMTcycHg7XHJcbiAgaGVpZ2h0OiA0OXB4O1xyXG4vKiBVSSBQcm9wZXJ0aWVzICovXHJcbmJhY2tncm91bmQ6ICM2QzZDNkMgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG5ib3JkZXItcmFkaXVzOiAyNHB4O1xyXG5vcGFjaXR5OiAwLjM4ICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbi5idXR0b24xIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDExJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNCU7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuIFxyXG59XHJcbi5OZXh0MSB7XHJcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IC0xMyU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgMTA2LCAyNDUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG4gIC8vbWFyZ2luLWxlZnQ6MTAwJTtcclxufVxyXG5cclxuaHIge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICBib3JkZXI6IHRoaWNrO1xyXG4gIC8qIGhlaWdodDogM3B4OyAqL1xyXG4gIC8qIGxpbmUtaGVpZ2h0OiAzcHg7ICovXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAvKiBib3JkZXItd2lkdGg6IDNweDsgKi9cclxuICBib3JkZXItYmxvY2std2lkdGg6IHVuc2V0O1xyXG4gIGNvbG9yOiBibHVlO1xyXG4gIC8vIHdpZHRoOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAxMzYsIDI0Nik7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogaW5pdGlhbDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgY29sb3I6ICMzNzQ2NjQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG59XHJcblxyXG4ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbDpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3VzLFxyXG4ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMsXHJcbi5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWw6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyxcclxuLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxufVxyXG5cclxuLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gIGNvbG9yOiByZ2IoMTA1LCAxMzYsIDI0NikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZlcmlmaWNhdGlvbiB7XHJcbiAgdG9wOiA0NTRweDtcclxuICBsZWZ0OiA5NDNweDtcclxuICB3aWR0aDogOTlweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkxZGVnLCAjMDUxQTJEIDAlLCAjMDA0Qzk3IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxufVxyXG5cclxuLnZlcmlmaWNhdGlvbkRpc2FibGUge1xyXG4gIHRvcDogNDU0cHg7XHJcbiAgbGVmdDogOTQzcHg7XHJcbiAgd2lkdGg6IDk5cHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kOiAjRTNFM0UzIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxufVxyXG4vLyAubWF0LWluay1iYXJ7XHJcbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIGJvdHRvbTogMDtcclxuLy8gICAgIGhlaWdodDogMnB4O1xyXG4vLyAgICAgdHJhbnNpdGlvbjogNTAwbXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpO1xyXG4vLyAgICAgaGVpZ2h0OiA0cHg7XHJcbi8vICAgICBjb2xvcjpcclxuLy8gfVxyXG46Om5nLWRlZXAgLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxMzYsIDI0NikgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDRweDtcclxuICAvLyB3aWR0aDogMTE2cHggIWltcG9ydGFudDtcclxuXHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcblxyXG5tYXQtdGFiLWxhYmVsIHtcclxuICBmb250LXNpemU6IDhweDtcclxufVxyXG5cclxuLy8gbWF0LW9wdGlvbntcclxuLy8gICB3aWR0aDogMjBweDtcclxuLy8gfVxyXG4vLyAubWF0LXNlbGVjdC1hcnJvdy13cmFwcGVyIHtcclxuLy8gICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4vLyAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbi8vICAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuZmlndXJlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjdlbTtcclxufVxyXG5cclxuZmlndXJlIGltZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmZvcm1TZWN0aW9uQ29udGFpbmVyIHtcclxuICBnYXA6IDQwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDtcclxuICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCggYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSApO1xyXG4gIC8vZ3JpZC1nYXA6IDIwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCBhdXRvO1xyXG59XHJcblxyXG4uaW1hZ2VDb250YWluZXJ7XHJcbiAgZ2FwOiAwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDdweCkge1xyXG4gIC5pbWFnZUNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5mb3JtU2VjdGlvbkNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybUltZyB7XHJcbiAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbi5kcm9wRG93biB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8vIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xyXG4vLyAgIGJvcmRlci1jb2xvcjogcmdiKDY2LCAxMzQsIDI0NCkgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XHJcbi8vICAgY29sb3I6IHJnYig2NiwgMTM0LCAyNDQpO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgMTM0LCAyNDQpO1xyXG4vLyB9XHJcbjo6bmctZGVlcCAuZWdyZXQtYmx1ZSAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRjOTc7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZWdyZXQtYmx1ZSAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcclxuICBib3JkZXItY29sb3I6ICMwMDRjOTc7XHJcbn1cclxuXHJcbi5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uVXBsb2FkIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYztcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6ICMyNjgwRUI7XHJcbn1cclxuXHJcbiNyb3cge1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbiAgY29sb3I6ICMyNjgwRUI7XHJcbn1cclxuXHJcbi5zcGFuIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAvLyB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbi5zcGFuOCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3BhbjEyIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcGFuRGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG4gIG1hcmdpbi10b3A6IC0yJTtcclxuXHJcblxyXG59XHJcblxyXG4jYmlsbCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC0yNXB4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IC00JTtcclxufVxyXG5cclxuLmJpbGxOYW1lIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm1hcmdpbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcclxuICBsZWZ0OiAyMDBweCAhaW1wb3J0YW50O1xyXG5cclxuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmxleC1iYXNpcy01MCB7XHJcbiAgZmxleC1iYXNpczogNTAlO1xyXG59XHJcblxyXG4uZ2FwLTIwIHtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5hZGRyZXNzQ29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwIDIwcHggMCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hZGRyZXNzLWNhcmQge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmlubGluZS1ibG9jayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc3BhY2UtYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5vdXRsaW5le1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XHJcbn1cclxuQG1lZGlhKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAuYWRkcmVzc0dyaWQge1xyXG4gICAgLy8gZGlzcGxheTogZ3JpZDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcclxuICB9XHJcbn1cclxuLnNlYXJjaF9maWVsZHtcclxuICBoZWlnaHQ6IDEwMCU7ICAgXHJcbiAgd2lkdGg6IDI1OXB4ICFpbXBvcnRhbnQ7ICBcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBsZWZ0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5hZGRyZXNzR3JpZElubmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMjBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XHJcbn1cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LWNhcmQgLm1hdC1kaXZpZGVyLWhvcml6b250YWwge1xyXG4vLyAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuLy8gICBsZWZ0OiAwO1xyXG4vLyB9XHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmxleC1ncm93LTEge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmp1c3RpZnktYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZ2FwLTIwIHtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5mbGV4LWNvbHVtbiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmhlaWdodC1hdXRvIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5hbGlnbi1zZWxmLWZsZXgtZW5kIHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmFsaWduLXNlbGYtZmxleC1zdGFydCB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG5cclxuLndpZHRoLWZpdC1jb250ZW50IHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5tLTgge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uYmxvY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jYWRkcmVzc0Jsb2NrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuI2NvbW11bmljYXRpb25EaXZpZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmNvbW11bmljYXRpb25Gb3JtIHtcclxuICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGdhcDogMjBweDtcclxuICAvLyBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbiNjb21tdW5pY2F0aW9uQmxvY2tGb3JtIHtcclxuXHJcbiAgLy8gZmxleC1ncm93OiAxO1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jRG9jdW1lbnRGb3JtIHtcclxuICB3aWR0aDogNjUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiNEb2N1bWVudEZvcm0xIHtcclxuICB3aWR0aDogNjUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbiNkb2NNYWluRGl2aWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbiNkaXZpZGVySW5zaWRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmVycmJkXHJcbntcclxuICBib3JkZXI6MXB4IHNvbGlkIHJlZDtcclxufVxyXG4uaGlkZVxyXG57XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTpub25lO1xyXG4gICAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuXHJcbiNjaGVja3tcclxuICBhcHBlYXJhbmNlOiBvdXRsaW5lO1xyXG59XHJcbi5hYWRoYXJEb2NOdW17XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi53aWR0aHtcclxuICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFhZGhhckZldGNoe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBcclxuICBjb2xvcjojNDU2RUZFO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgcGFkZGluZy10b3A6IDU0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbi8vIC5tYXQtZm9ybS1maWVsZHtcclxuLy8gICBtYXJnaW4tdG9wOiA4JTtcclxuLy8gfVxyXG5cclxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5lIHtcclxuICBtaW4td2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogN3B4IDA7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtY2FyZC1hdmF0YXIge1xyXG4gIG1heC13aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdENhcmR7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlLWRyb3Bkb3duIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FFRDZGMTtcclxuICBtYXgtd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5wYWRkaW5ne1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgXHJcbn1cclxuLnBhZGRpbmdCdXR0b257XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ucGFyZW50TWF0Q2FyZENvbnRlbnR7XHJcbnBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi8vIDo6bmctZGVlcCAuY2RrLW92ZXJsYXktY29udGFpbmVye1xyXG4vLyAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4vLyB9XHJcbjo6bmctZGVlcCAucG9wdXAtZGlhbG9nLWNsYXNzIHtcclxuICBtYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4gIC5maWVsZGlucHV0IHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRUZFIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggIzAwMDAwMDE3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgY29sb3I6ICMxMDIyNDU7XHJcbiAgfVxyXG4gIDpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgcGFkZGluZzogMWVtIDAgMWVtIDA7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5CYWNrYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KycVerificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-kyc-verification",
                templateUrl: "./kyc-verification.component.html",
                styleUrls: ["./kyc-verification.component.scss"],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => KycVerificationComponent),
                        multi: true,
                    },
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => KycVerificationComponent),
                        multi: true,
                    },
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_16__["AppLoaderService"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_19__["LocalStoreService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_12__["FingerPrintCaptureService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["DomSanitizer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_15__["DataService"] }, { type: app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_17__["DialogService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"] }, { type: app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_20__["ApplicationEntryStageService"] }]; }, { settingallCustInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], profileFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["profileFile"]
        }] }); })();
class DocData {
}
class Upload {
}


/***/ }),

/***/ "dyf6":
/*!***************************************************************************************!*\
  !*** ./src/app/views/others/kyc-basic-information/kyc-basic-information.component.ts ***!
  \***************************************************************************************/
/*! exports provided: KycBasicInformationComponent, OtpModel, OtpModelUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycBasicInformationComponent", function() { return KycBasicInformationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpModel", function() { return OtpModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpModelUpdate", function() { return OtpModelUpdate; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var _cutomer_finger_print_cutomer_finger_print_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cutomer-finger-print/cutomer-finger-print.component */ "DyWe");
/* harmony import */ var _kyc_esign_kyc_esign_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../kyc-esign/kyc-esign.component */ "qFMo");
/* harmony import */ var _kyc_iris_scan_kyc_iris_scan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../kyc-iris-scan/kyc-iris-scan.component */ "POE1");
/* harmony import */ var _kyc_face_scan_kyc_face_scan_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../kyc-face-scan/kyc-face-scan.component */ "hwCN");
/* harmony import */ var _kyc_verification_method_kyc_verification_method_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../kyc-verification-method/kyc-verification-method.component */ "Mxxu");
/* harmony import */ var _verification_completed_verification_completed_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../verification-completed/verification-completed.component */ "vjsB");
/* harmony import */ var _kyc_verification_kyc_verification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../kyc-verification/kyc-verification.component */ "3ms1");
/* harmony import */ var app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/shared/services/finger-print-capture.service */ "rp8y");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/shared/services/data.service */ "iiaH");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/extended */ "ura0");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");


































const _c0 = ["fileInput"];
function KycBasicInformationComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "check_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function KycBasicInformationComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/svg/fingerPrint.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function KycBasicInformationComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 30);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.imageURLBioScan, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function KycBasicInformationComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_span_23_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.openDialogForType1($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Scan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycBasicInformationComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_ng_template_24_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.openDialogForType1($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Re-Scan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycBasicInformationComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "check_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function KycBasicInformationComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/svg/irish.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function KycBasicInformationComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 33);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r10.imageURLIrish, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function KycBasicInformationComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_span_43_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.openDialogForType2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Scan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycBasicInformationComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_ng_template_44_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.openDialogForType2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Re-Scan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycBasicInformationComponent_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "check_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function KycBasicInformationComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/svg/face.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function KycBasicInformationComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 33);
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r17.imageURLFace, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function KycBasicInformationComponent_span_63_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_span_63_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.openDialogForType3(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Scan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function KycBasicInformationComponent_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_ng_template_64_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.openDialogForType3(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Re-Scan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class KycBasicInformationComponent {
    constructor(http, api, dialog, router, snack, fb, fingerPrintService, shareDataService, ls, apiService) {
        this.http = http;
        this.api = api;
        this.dialog = dialog;
        this.router = router;
        this.snack = snack;
        this.fb = fb;
        this.fingerPrintService = fingerPrintService;
        this.shareDataService = shareDataService;
        this.ls = ls;
        this.apiService = apiService;
        this.settingallCustInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.imageUrl = "https://i.ibb.co/fDWsn3G/buck.jpg";
        this.editFile = true;
        this.removeUpload = false;
        this.docData = [];
        this.firstName = "jaya";
        this.otpmodel = new OtpModel();
        this.billing = true;
        this.document_type = ["4", "5", "11", "12"];
        this.additionalDocs = [];
        this.enableButton = false;
        this.selectedOptions2 = [];
        this.disableAddAndDelete = false;
        this.disableFinish = false;
        this.diaplayBioCard = false;
        this.irisScan = false;
        this.eScan = false;
        this.biometricScan = false;
        this.imageURLIrish = 'not_available';
        this.imageURLBioScan = 'not_available';
        this.imageURLFace = 'not_available';
        this.dataFetched = false;
        this.uplaod = new _kyc_verification_kyc_verification_component__WEBPACK_IMPORTED_MODULE_12__["Upload"]();
        this.customerId = null;
        this.disableNext = true;
        this.isDocumentOptionDisabled2 = (value) => {
            // console.log('selectedOptions2:: ', this.selectedOptions2);
            return this.selectedOptions2.includes(value);
        };
    }
    ngOnInit() {
        // this.kycRef = sessionStorage.getItem("kyc_reference");
        this.api.getKycRef().subscribe(resp => {
            this.assignKyc(resp.kycReference);
        });
        this.api.getNewUserInfo().subscribe((info) => {
            this.updateUserInfo = info;
        });
        this.api.getKycDataFetchedInfo()
            .subscribe(data => {
            console.log('data fetch resp :: ', data);
            this.kycVerificationForm = this.fb.group({
                // documentsList: this.fb.array([this.createItem()]),
                // biometricList: (data=== 'DATA FETCH')?this.fb.array([]):this.fb.array([this.createBioItem()]),
                biometricList: this.fb.array([]),
                id: [""],
            });
            this.kycVerificationForm.valueChanges.subscribe(data => {
                if (data === 'DATA FETCH') {
                    this.kycVerificationForm.get('biometricList').setValue(this.fb.array([]));
                }
                else {
                    if (data.biometricList.length < 1) {
                        this.kycVerificationForm.get('biometricList').setValue(this.fb.array([this.createBioItem()]));
                    }
                }
            });
            if (data === 'DATA FETCH') {
                this.dataFetched = true;
                this.dataFetchedValue = data;
            }
            else {
                this.dataFetched = false;
                // this.loadBioDefault(1);
            }
        });
        console.log(this.kycVerificationForm);
        this.arrayForm = this.fb.group({
            rows: this.fb.array([]),
        });
        this.initGroup();
        this.getDoc();
        this.disableNext = true;
        this.disableFinish = true;
        this.shareDataService.getCustomerId.subscribe(cId => {
            if (cId != null) {
                this.refreshCustomerId = cId;
                this.getAdditionalDocuments(cId);
            }
        });
        this.customerId = this.ls.getItem('customer_id');
        this.kycVerificationForm.valueChanges.subscribe(data => {
            console.log('value change data:: ', data);
            if (data.biometricList.length > 0) {
                this.disableFinish = true;
                this.selectedOptions2 = [];
                data.biometricList.forEach((element, index) => {
                    console.log('index :: ', index);
                    // if(element.id === '' || element.id === ""){
                    //   data.biometricList.splice(0,1);
                    // }
                    this.selectedOptions2.push(element.bioDocumentType);
                    if (index == 2) {
                        this.disableAddAndDelete = true;
                    }
                    else {
                        this.disableAddAndDelete = false;
                    }
                });
            }
        });
        // this.loadBioDefault(1);
        console.log('this.kycVerificationForm :: ', this.kycVerificationForm);
        localStorage.getItem('customer_id') ? this.getAdditionalDocuments(localStorage.getItem('customer_id')) : '';
    }
    assignKyc(kycReference) {
        this.kycRef = kycReference;
    }
    createItem() {
        return this.fb.group({
            id: [""],
            documentName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            documentType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        // this.changeValue2(this.kycVerificationForm.controls.documentsList['controls'][0].controls.documentName.,0)
    }
    createBioItem() {
        return this.fb.group({
            id: [""],
            bioDocumentType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fileUrl: [""]
        });
    }
    createBioItemData(data, type, fileUrl) {
        console.log('on load create bio data :: ', data, type);
        return this.fb.group({
            id: data,
            bioDocumentType: type,
            fileUrl: fileUrl
        });
    }
    ngOnChanges(changes) { }
    autofillDetails() {
        this.settingallCustInfo.emit({
            cifNumber: this.kycVerificationForm.controls.cifNumber.value,
        });
    }
    getAdditionalDocuments(customerId) {
        customerId ? this.customerId = customerId : '';
        for (const key in this.document_type) {
            var bioName;
            if (Object.prototype.hasOwnProperty.call(this.document_type, key)) {
                const element = this.document_type[key];
                console.log('bio doc :: ', element, key, customerId);
                this.api.getCustomerDocuments(customerId, element).subscribe((data) => {
                    if (data != null) {
                        this.disableFinish = false;
                        console.log("data:: ", data);
                        if (data[0].documentType == 4) {
                            bioName = 'Fingerprint Scan';
                            this.imageURLBioScan = data[0].fileUrl;
                            this.biometricScan = true;
                            this.fingerPrintId = data[0].id;
                        }
                        if (data[0].documentType == 11) {
                            bioName = 'Irish Scan';
                            this.imageURLIrish = data[0].fileUrl;
                            this.irisScan = true;
                            this.irisId = data[0].id;
                        }
                        if (data[0].documentType == 12) {
                            bioName = 'Face Scan';
                            this.imageURLFace = data[0].fileUrl;
                            this.faceScan = true;
                            this.faceId = data[0].id;
                        }
                        if (bioName != null && bioName != undefined) {
                            this.bioFetchDataBuild(data[0], bioName);
                            console.log('kyc :: ', this.kycVerificationForm);
                        }
                    }
                });
            }
        }
    }
    bioFetchDataBuild(data, bioName) {
        console.log('in build data');
        this.addBioDocsData(data.id, bioName, data.fileUrl);
        console.log('kyc :: ', this.kycVerificationForm);
    }
    deleteAdditionalDoc(report, index) {
        this.additionalDocs = this.kycVerificationForm.get('documentsList');
        console.log(this.additionalDocs);
        this.additionalDocs.removeAt(index);
        this.selectedOptions2.forEach((element, index) => {
            if (element == report.documentType) {
                this.selectedOptions2.splice(index, 1);
            }
        });
        if (report.id != null && report.id != '') {
            console.log("report.id::" + report.id);
            this.api.deleteCustomerDoc(this.customerId, report.id).subscribe((data) => {
            });
        }
        this.snack.open('Document Deleted Successfully', 'OK', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
        });
        console.log(this.kycVerificationForm.get('documentsList'));
        console.log(this.kycVerificationForm.controls);
        if (this.documentsList.controls.length) {
            this.enableButton = true;
        }
        else {
            this.enableButton = false;
        }
    }
    // deleteBioMetric(report, index) {
    //   const deleteRecord = this.kycVerificationForm.get('biometricList') as FormArray;
    //   console.log(report, deleteRecord, index);
    //   deleteRecord.removeAt(index);
    //   // this.imageURLIrish = '';
    //   // this.imageURLFace = '';
    //   // this.imageURLBioScan = '';
    //   this.api.deleteCustomerDoc(this.refreshCustomerId, report.id).subscribe((data) => {
    //     console.log("data after delete", this.refreshCustomerId);
    //     console.log("data", data);
    //   });
    // }
    deleteBioMetric(verificationType) {
        if (verificationType == 'fingerprint' && this.imageURLBioScan != 'not_available') {
            this.api.deleteCustomerDoc(this.customerId, this.fingerPrintId).subscribe((res) => {
                this.imageURLBioScan = 'not_available',
                    this.fingerPrintId = '';
                this.snack.open('Fingerprint Deleted Successfully!', 'Ok', {
                    duration: 3000,
                    verticalPosition: 'top',
                    horizontalPosition: "right"
                });
            }, err => {
                console.log(err);
                this.snack.open('Unable to delete Fingerprint!', 'Ok', {
                    duration: 3000,
                    horizontalPosition: "right",
                    verticalPosition: "top"
                });
            });
        }
        else if (verificationType == 'iris' && this.imageURLBioScan != 'not_available') {
            this.api.deleteCustomerDoc(this.customerId, this.irisId).subscribe((res) => {
                this.imageURLIrish = 'not_available';
                this.irisId = '';
                this.snack.open('Iris Deleted Successfully!', 'Ok', {
                    duration: 3000,
                    verticalPosition: 'top',
                    horizontalPosition: "right"
                });
            }, err => {
                this.snack.open('Unable to delete Iris!', 'Ok', {
                    duration: 3000,
                    horizontalPosition: "right",
                    verticalPosition: "top"
                });
            });
        }
        else {
            if (this.imageURLFace == 'not_available') {
                return;
            }
            this.api.deleteCustomerDoc(this.customerId, this.faceId).subscribe((res) => {
                this.imageURLFace = 'not_available';
                this.faceId = '';
                this.snack.open('Face Deleted Successfully!', 'Ok', {
                    duration: 3000,
                    verticalPosition: 'top',
                    horizontalPosition: "right"
                });
            }, err => {
                this.snack.open('Unable to delete Face!', 'Ok', {
                    duration: 3000,
                    horizontalPosition: "right",
                    verticalPosition: "top"
                });
            });
        }
    }
    ngAfterViewInit() {
        console.log('view');
    }
    bioTypeChanged(value) {
        console.log('form', value);
        console.log('form', this.kycVerificationForm.get('biometricList')['controls']);
        let data = this.kycVerificationForm.get('biometricList')['controls'];
        let validindex = data.findIndex(i => i.valid == false);
        if (validindex == -1) {
            this.disableFinish = false;
        }
        console.log('ind', validindex);
    }
    // openDialogForType(data) {
    //   // this.irisScan = false;
    //   // this.faceScan = false;
    //   // this.biometricScan=false;
    //   if (data.bioDocumentType == "Fingerprint Scan") {
    //     const dialogRef = this.dialog.open(CutomerFingerPrintComponent, {
    //       data: { bioData: this.biometricData,
    //       customerId:this.refreshCustomerId },
    //       disableClose: true,
    //     });
    //     dialogRef.afterClosed().subscribe((submit) => {
    //       console.log('submit :: ', submit);
    //       this.biometricData = submit.data;
    //       if (this.biometricData.length > 0) {
    //         this.diaplayBioCard = true;
    //         this.biometricScan = false;
    //       } else {
    //         if (submit.isScanned) {
    //           this.biometricScan = true;
    //           this.imageURLBioScan = this.ls.getItem('imageURLBio');
    //           this.diaplayBioCard = false;
    //         }
    //       }
    //       this.disableFinish = false;
    //     });
    //   }
    //   if (data.bioDocumentType == "Irish Scan") {
    //     // IrisScan2Component
    //     const dialogRef = this.dialog.open(KycIrisScanComponent, {
    //       data: { number: "9656849771", type: "Mobile Number",customerId:this.refreshCustomerId  },
    //       disableClose: true,
    //     });
    //     dialogRef.afterClosed().subscribe((submit) => {
    //       console.log('submit :: ', submit);
    //       if (submit.isScanned) {
    //         this.irisScan = true;
    //         this.imageURLIrish = `${API_URL}/rest/upload/downloadDocs/?fileName=iris_biometric.jpg`;
    //       } else {
    //         this.irisScan = false;
    //         this.imageURLIrish = '';
    //       }
    //       this.disableFinish = false;
    //     });
    //   }
    //   if (data.bioDocumentType == "Face Scan") {
    //     const dialogRef = this.dialog.open(KycFaceScanComponent, {
    //       data: { number: "9656849771", type: "Mobile Number" ,customerId:this.refreshCustomerId  },
    //       disableClose: true,
    //     });
    //     dialogRef.afterClosed().subscribe((submit) => {
    //       console.log('submit :: ', submit);
    //       if (submit.isScanned) {
    //         this.faceScan = true;
    //         this.imageURLFace = `${API_URL}/rest/upload/downloadDocs/?fileName=face_biometric.jpg`;
    //       } else {
    //         this.imageURLFace = '';
    //         this.faceScan = false;
    //       }
    //       this.disableFinish = false;
    //     });
    //   }
    //   if (data.bioDocumentType == "E-Sign") {
    //     const dialogRef = this.dialog.open(KycEsignComponent, {
    //       data: { number: "9656849771", type: "Mobile Number" },
    //       disableClose: true,
    //     });
    //     dialogRef.afterClosed().subscribe((submit) => {
    //       console.log('submit :: ', submit);
    //       if (submit.action == 'closed') {
    //         this.eScan = true;
    //       } else {
    //         this.eScan = false;
    //       }
    //     });
    //   }
    // }
    openDialogForType1(e) {
        // if (data.bioDocumentType == "Fingerprint Scan") {
        const dialogRef = this.dialog.open(_cutomer_finger_print_cutomer_finger_print_component__WEBPACK_IMPORTED_MODULE_6__["CutomerFingerPrintComponent"], {
            data: { bioData: this.biometricData,
                customerId: this.refreshCustomerId, verificationType: 'kyc' },
            disableClose: true,
            width: '40%'
        });
        dialogRef.afterClosed().subscribe((submit) => {
            console.log('submit :: ', submit);
            this.biometricData = submit.data;
            // if (this.biometricData.length > 0) {
            //   this.diaplayBioCard = true;
            //   this.biometricScan = false;
            // } else {
            if (submit.isScanned) {
                this.biometricScan = true;
                this.imageURLBioScan = 'data:image/bmp;base64,' + this.biometricData.BMPBase64;
                this.diaplayBioCard = false;
                const uploadData = new FormData();
                const file = this.DataURIToBlob(this.imageURLBioScan);
                uploadData.append('file', file, 'image.jpg');
                uploadData.append("figName", "FINGERPRINT");
                uploadData.append("customerId", this.customerId);
                uploadData.append("verify", "kyc-verification");
                this.apiService.saveOrUpdateBio(uploadData).subscribe((res) => {
                    this.fingerPrintId = res.id;
                    this.snack.open('Fingerprint Saved Successfully!', 'OK', { duration: 4000, verticalPosition: 'top', horizontalPosition: 'right' });
                });
            }
            // }
            this.disableFinish = false;
        });
        // }  
    }
    openDialogForType2() {
        // if (data.bioDocumentType == "Irish Scan") {
        // IrisScan2Component
        const dialogRef = this.dialog.open(_kyc_iris_scan_kyc_iris_scan_component__WEBPACK_IMPORTED_MODULE_8__["KycIrisScanComponent"], {
            data: { number: "9656849771", type: "Mobile Number", customerId: this.customerId },
            disableClose: true,
            width: '40%'
        });
        dialogRef.afterClosed().subscribe((submit) => {
            console.log('submit :: ', submit);
            if (submit.isScanned) {
                this.irisScan = true;
                this.irisData = submit.data;
                this.imageURLIrish = this.irisData.fileUrl;
                const uploadData = new FormData();
                const file = this.DataURIToBlob(this.imageURLIrish);
                uploadData.append('file', file, 'image.jpg');
                uploadData.append("figName", "IRIS");
                uploadData.append("customerId", this.customerId);
                uploadData.append("verify", "kyc-verification");
                this.apiService.saveOrUpdateBio(uploadData).subscribe((res) => {
                    if (res && res.fileUrl) {
                        this.irisId = res.id;
                        this.snack.open('IRIS Saved Successfully!', 'OK', { duration: 4000, verticalPosition: 'top', horizontalPosition: 'right' });
                    }
                });
                // this.imageURLIrish = this.ls.getItem('imageURLIrish')
            }
            else {
                this.irisScan = false;
                this.imageURLIrish = 'not_available';
            }
            this.disableFinish = false;
        });
        // }
    }
    openDialogForType3(e) {
        // if (data.bioDocumentType == "Face Scan") {
        const dialogRef = this.dialog.open(_kyc_face_scan_kyc_face_scan_component__WEBPACK_IMPORTED_MODULE_9__["KycFaceScanComponent"], {
            data: { number: "9656849771", type: "Mobile Number", customerId: this.customerId },
            disableClose: true,
            width: '40%'
        });
        dialogRef.afterClosed().subscribe((submit) => {
            if (submit == 'close') {
                return;
            }
            console.log('submit :: ', submit);
            if (submit.isScanned) {
                this.faceScan = true;
                this.imageURLFace = submit.image;
                const uploadData = new FormData();
                const file = this.DataURIToBlob(this.imageURLFace);
                uploadData.append('file', file, 'image.jpg');
                uploadData.append("figName", "FACE");
                uploadData.append("customerId", this.customerId);
                uploadData.append("verify", "kyc-verification");
                this.apiService.saveOrUpdateBio(uploadData).subscribe((res) => {
                    if (res && res.fileUrl) {
                        this.faceId = res.id;
                        this.snack.open('Face Saved Successfully!', 'OK', { duration: 4000, verticalPosition: 'top', horizontalPosition: 'right' });
                    }
                });
            }
            else {
                this.imageURLFace = 'not_available';
                this.faceScan = false;
            }
            this.disableFinish = false;
        });
        // }
    }
    tabClick(event) {
        const tab = event.tab.textLabel;
        if (tab === "Documents Upload") {
            this.router.navigateByUrl("/others/documents");
        }
        if (tab === "verification") {
            this.router.navigateByUrl("/others/verification");
        }
        if (tab === "Basic Information") {
            this.router.navigateByUrl("/others/kyc");
        }
    }
    DataURIToBlob(dataURI) {
        const splitDataURI = dataURI.split(',');
        const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
        const mimeString = splitDataURI[0].split(':')[1].split(';')[0];
        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++)
            ia[i] = byteString.charCodeAt(i);
        return new Blob([ia], { type: mimeString });
    }
    onNext(kycVerificationForm, arrayForm) {
        // location.reload();
        if (this.imageURLIrish == 'not_available' && this.imageURLBioScan == 'not_available' && this.imageURLFace == 'not_available') {
            return;
        }
        this.kycVerificationForm.reset();
        this.api.setIndex({
            index: 0,
        });
        this.api.setFinishFlag({
            finishFlag: true,
        });
        this.kycVerificationForm.reset();
        //this.disableFinish = false;
        console.log(this.kycVerificationForm);
        const dialogRef = this.dialog.open(_verification_completed_verification_completed_component__WEBPACK_IMPORTED_MODULE_11__["VerificationCompletedComponent"], {
            data: { kycRef: this.kycRef, rekyc: false },
            disableClose: true,
            width: '45%'
        });
        dialogRef.afterClosed().subscribe((submit) => { });
    }
    previous() {
        this.api.setIndex({
            index: 1,
        });
        let customerId = localStorage.getItem('customer_id');
        console.log("custId::", localStorage.getItem('customer_id'));
        this.shareDataService.shareCustomerId(customerId);
    }
    changeValue2(value, index) {
        console.log('value :: ', value, ' index:: ', index);
        if (this.DocumentsName[index]) {
            this.selectedOptions2 = this.selectedOptions2.filter(val => val !== this.DocumentsName[index]);
        }
        // this.DocumentsName[index] = value;
        this.selectedOptions2.push(value);
        // this.kycVerificationForm.controls.documentType.setValue('');
        // this.arrayDocumentType = this.arrayDocumentType.filter(document => document !== value);
    }
    onFileChanged(event) {
        this.selectedFiles = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event2) => {
            this.imgUrl = reader.result;
            this.fun(event.target.files[0], this.selectedFiles);
        };
    }
    fun(event, url) {
        const cId = this.customerId;
        const uploadData = new FormData();
        const data = {
            customerId: this.customerId,
            documentName: "Profile Image",
            documentType: "1",
            fileType: event.type,
            fileName: event.name,
            verificationType: "KYC verification",
        };
        uploadData.append("data", JSON.stringify(data));
        uploadData.append("file", url);
        this.api.upload(uploadData).subscribe((res) => { });
    }
    fun1(event, url, docName, docType) {
        const cId = this.customerId;
        const uploadData = new FormData();
        console.log("this.customerId::", this.customerId);
        const data = {
            customerId: this.refreshCustomerId,
            documentName: this.kycVerificationForm.value.documentName,
            documentType: "2",
            fileType: event.type,
            fileName: event.name,
            verificationType: "KYC verification",
        };
        uploadData.append("data", JSON.stringify(data));
        uploadData.append("file", url);
        this.api.upload(uploadData).subscribe((res) => { }, (error) => {
            if (error.status == 201) {
                this.kycVerificationForm.get("upload").patchValue(true);
                this.snack.open("Document Uploaded!", "OK", {
                    duration: 4000,
                    verticalPosition: "top",
                    horizontalPosition: "right",
                });
            }
        });
    }
    fun2(event, url, docName, docType) {
        const cId = this.customerId;
        const uploadData = new FormData();
        console.log("this.customerId::", this.customerId);
        const data = {
            customerId: this.refreshCustomerId,
            documentName: docName,
            documentType: "2",
            fileType: event.type,
            fileName: event.name,
            verificationType: "KYC verification",
        };
        uploadData.append("data", JSON.stringify(data));
        uploadData.append("file", url);
        this.api.upload(uploadData).subscribe((res) => {
            console.log("res", res);
        }, (error) => {
            if (error.status == 201) {
                this.kycVerificationForm.get("upload").patchValue(true);
                this.snack.open("Document Uploaded!", "OK", {
                    duration: 4000,
                    verticalPosition: "top",
                    horizontalPosition: "right",
                });
            }
        });
    }
    onUpload(event, KycForm) {
        this.selectedFiles = event.target.files[0];
        console.log(this.selectedFiles);
        this.fileName = this.selectedFiles.name;
        console.log(this.fileName);
        this.kycVerificationForm.controls.documentType.patchValue(this.fileName);
        console.log("doo", this.kycVerificationForm.controls.documentType.patchValue(this.fileName));
        console.log(this.fileName);
        this.fun1(event.target.files[0], this.selectedFiles, KycForm.documentName, KycForm.documentType);
        // Below part is used to display the selected image
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.readAsText(this.selectedFiles);
        reader.onload = (event2) => {
            this.fileUrl = reader.result;
        };
    }
    onUpload1(event, KycForm, index) {
        var kyc = KycForm.documentsList[index].documentName;
        this.selectedFiles = event.target.files[0];
        this.fun2(event.target.files[0], this.selectedFiles, kyc, KycForm.documentType);
        this.fileName = this.selectedFiles.name;
        KycForm.documentsList[index].documentType = this.fileName;
        console.log(this.fileName);
        this.kycVerificationForm.controls.documentsList['controls'][index].controls.documentType.setValue(this.fileName);
        // for(let i=0;i<KycForm.documentsList.length;i++)
        // {console.log("in loop",i);
        //   console.log(this.kycVerificationForm.controls.documentsList['controls'][i].controls.documentType.setValue(this.fileName));
        // }
        // this.kycVerificationForm.get('documentsList').patchValue([{
        //   documentType:this.fileName
        // }]);
        console.log("this", this.kycVerificationForm.get('documentsList').value);
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.readAsText(this.selectedFiles);
        reader.onload = (event2) => {
            this.fileUrl = reader.result;
        };
    }
    toMakeButton() {
        document.getElementById("fileId").click();
    }
    openDialog() {
        this.a = this.kycVerificationForm.get("bioDocumentName").value;
        if (this.a == "Finger Print") {
            const dialogRef = this.dialog.open(_kyc_verification_method_kyc_verification_method_component__WEBPACK_IMPORTED_MODULE_10__["KycVerificationMethodComponent"], {
                data: { number: "9656849771", type: "Mobile Number" },
                disableClose: true,
            });
            dialogRef.afterClosed().subscribe((submit) => { });
        }
        if (this.a == "Iris Scan") {
            const dialogRef = this.dialog.open(_kyc_iris_scan_kyc_iris_scan_component__WEBPACK_IMPORTED_MODULE_8__["KycIrisScanComponent"], {
                data: { number: "9656849771", type: "Mobile Number" },
                disableClose: true,
            });
            dialogRef.afterClosed().subscribe((submit) => { });
        }
        if (this.a == "E-Sign") {
            const dialogRef = this.dialog.open(_kyc_esign_kyc_esign_component__WEBPACK_IMPORTED_MODULE_7__["KycEsignComponent"], {
                data: { number: "9656849771", type: "Mobile Number" },
                disableClose: true,
            });
            dialogRef.afterClosed().subscribe((submit) => { });
        }
    }
    handleFileInput(file) {
        this.fileToUpload = file.item(0);
        //Show image preview
        let reader = new FileReader();
        reader.onload = (event) => {
            this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    }
    uploadFile(event) {
        let reader = new FileReader(); // HTML5 FileReader API
        reader.onload = () => {
            this.fileUrl = reader.result;
            this.kycVerificationForm.patchValue({
                file: reader.result,
            });
            this.editFile = false;
            // this.removeUpload = true;
        };
        // ChangeDetectorRef since file is loading outside the zone
    }
    // Function to remove uploaded file
    removeUploadedFile() { }
    addAccClass() {
        let doc = new _kyc_verification_kyc_verification_component__WEBPACK_IMPORTED_MODULE_12__["DocData"]();
        this.docData.push(doc);
    }
    removeRow(index) {
        console.log(index);
        this.kycVerificationForm.get("documentsList").removeAt(index);
    }
    initGroup() {
        let rows = this.arrayForm.get("rows");
        rows.push(this.fb.group({
            id: [""],
            documentName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            documentType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        }));
    }
    getDoc() {
        this.dropVariableDoc = "document_type";
        this.docName = "document_name";
        this.bioName = "biometrics_Name";
        this.bioType = "biometrics_Type";
        this.api.getDropDownValues(this.dropVariableDoc).subscribe((data) => {
            this.Documents = data;
        });
        this.api.getDropDownValues(this.docName).subscribe((resp) => {
            this.DocumentsName = resp;
        });
        this.api.getDropDownValues(this.bioName).subscribe((response) => {
            this.biometrics_Name = response;
        });
        this.api.getDropDownValues(this.bioType).subscribe((responseData) => {
            this.biometrics_Type = responseData;
        });
    }
    check(docData) { }
    radioChange(event) {
        if (event.value == 1) {
            this.billing = true;
        }
        if (event.value == 2) {
            this.billing = false;
        }
    }
    onScan() {
        this.fingerPrintService
            .CallingSGIFPGetData()
            .subscribe((capFingerPrint) => { });
    }
    SuccessFunc(result) {
        if (result.ErrorCode == 0) {
            /* 	Display BMP data in image tag
                BMP data is in base 64 format
            */
            // if (result != null && result.BMPBase64.length > 0) {
            //   document.getElementById("FPImage1").src = "data:image/bmp;base64," + result.BMPBase64;
            // }
        }
    }
    addDocs() {
        this.documentsList = this.kycVerificationForm.get('documentsList');
        this.documentsList.push(this.createItem());
    }
    loadBioDefault(count) {
        this.biometricList = this.kycVerificationForm.get('biometricList');
        for (let index = 0; index < count; index++) {
            this.biometricList.push(this.createBioItem());
        }
    }
    addBioDocs() {
        this.biometricList = this.kycVerificationForm.get('biometricList');
        this.biometricList.push(this.createBioItem());
    }
    addBioDocsData(data, type, fileUrl) {
        console.log('in add bio docs :: ', data, type);
        if (data != '') {
            this.biometricList = this.kycVerificationForm.get('biometricList');
            this.biometricList.push(this.createBioItemData(data, type, fileUrl));
            console.log('this.biometricList :: ', this.biometricList);
            // this.kycVerificationForm.get('biometricList').patchValue(this.createBioItemData(data, type));
            // console.log('this.kycVerificationForm :: ', this.kycVerificationForm)
        }
    }
    ngOnDestroy() {
        this.shareDataService.shareCustomerId(null);
    }
    patchData() {
    }
    changeValue(event) {
        this.disableFinish = true;
    }
}
KycBasicInformationComponent.ɵfac = function KycBasicInformationComponent_Factory(t) { return new (t || KycBasicInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_13__["FingerPrintCaptureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_15__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_16__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"])); };
KycBasicInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: KycBasicInformationComponent, selectors: [["app-kyc-basic-information"]], viewQuery: function KycBasicInformationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, inputs: { verificationInfo: "verificationInfo" }, outputs: { settingallCustInfo: "settingallCustInfo" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 72, vars: 22, consts: [[1, "m-333", 2, "padding-left", "4.5%", "padding-right", "4.5%"], [1, "matCard"], ["fxLayout", "row", "fxLayoutGap", "20px"], ["fxLayout", "column", 1, "flex-grow-2", "mat-card-doc"], [1, "inner-mat-card"], ["fxLayout", "row", 3, "fxLayoutAlign"], [4, "ngIf"], ["fxLayoutAlign", "center center", 1, "deleteDiv"], [3, "ngClass", "click"], ["fxLayoutAlign", "center center", 1, "insertDriveImg"], ["fxFlex", "100", "fxLayoutAlign", "center center", 4, "ngIf", "ngIfElse"], ["showAvatar", ""], [1, "dived"], [2, "margin-left", "20%", "color", "gray", "font-family", "Manrope"], ["fxFlex", "100", "fxLayoutAlign", "center center", 2, "display", "flex", "height", "30px", "padding", "10px"], ["class", "scanButton", 3, "click", 4, "ngIf", "ngIfElse"], ["reScanbtn", ""], ["fxLayoutAlign", "center center", 4, "ngIf", "ngIfElse"], ["showIris", ""], [2, "margin-left", "35%", "color", "gray", "font-family", "Manrope"], ["reScanIris", ""], ["showFace", ""], ["reScanFace", ""], [1, "button"], [1, "Back", 3, "click"], ["mat-stroked-button", "", 3, "ngClass", "click"], [2, "color", "white"], [2, "color", "green", "cursor", "pointer", "padding-left", "5px"], ["fxFlex", "100", "fxLayoutAlign", "center center"], ["alt", "", 1, "finger-print-icon", 3, "src"], ["alt", "", 2, "max-width", "60%", 3, "src"], [1, "scanButton", 3, "click"], ["fxLayoutAlign", "center center"], ["alt", "", 2, "max-width", "80%", 3, "src"], ["alt", "", 3, "src"]], template: function KycBasicInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, KycBasicInformationComponent_ng_container_10_Template, 3, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_Template_mat_icon_click_12_listener() { return ctx.deleteBioMetric("fingerprint"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, KycBasicInformationComponent_div_15_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, KycBasicInformationComponent_ng_template_16_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Fingerprint Scan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, KycBasicInformationComponent_span_23_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, KycBasicInformationComponent_ng_template_24_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, KycBasicInformationComponent_ng_container_30_Template, 3, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_Template_mat_icon_click_32_listener() { return ctx.deleteBioMetric("iris"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, KycBasicInformationComponent_div_35_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, KycBasicInformationComponent_ng_template_36_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Irish Scan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, KycBasicInformationComponent_span_43_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, KycBasicInformationComponent_ng_template_44_Template, 2, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, KycBasicInformationComponent_ng_container_50_Template, 3, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_Template_mat_icon_click_52_listener() { return ctx.deleteBioMetric("face"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, KycBasicInformationComponent_div_55_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, KycBasicInformationComponent_ng_template_56_Template, 1, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Face Scan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, KycBasicInformationComponent_span_63_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, KycBasicInformationComponent_ng_template_64_Template, 2, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_Template_span_click_67_listener() { return ctx.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_Template_button_click_69_listener() { return ctx.onNext(ctx.kycVerificationForm.value, ctx.arrayForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](45);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](57);
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxLayoutAlign", ctx.imageURLBioScan != "not_available" ? "space-between center" : "end center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageURLBioScan != "not_available");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.imageURLBioScan == "not_available" ? "deleteBtnDisabled" : "deleteBtn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageURLBioScan == "not_available" || ctx.imageURLBioScan == null)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageURLBioScan == "not_available")("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxLayoutAlign", ctx.imageURLIrish != "not_available" ? "space-between center" : "end center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageURLIrish != "not_available");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.imageURLIrish == "not_available" ? "deleteBtnDisabled" : "deleteBtn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageURLIrish == "not_available")("ngIfElse", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageURLIrish == "not_available")("ngIfElse", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxLayoutAlign", ctx.imageURLFace != "not_available" ? "space-between center" : "end center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageURLFace != "not_available");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.imageURLFace == "not_available" ? "deleteBtnDisabled" : "deleteBtn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageURLFace == "not_available")("ngIfElse", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageURLFace == "not_available")("ngIfElse", _r19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.imageURLIrish == "not_available" && ctx.imageURLBioScan == "not_available" && ctx.imageURLFace == "not_available" ? "Next" : "Next1");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["DefaultClassDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatLabel"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"]], styles: [".breadcrumb[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 40px;\n  width: 100%;\n  background-color: white;\n}\n\n.head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.fetchButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  text-decoration: underline;\n  padding-left: 10px;\n  padding-top: 15px;\n  cursor: pointer;\n}\n\nmat-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\nmat-tab-group[_ngcontent-%COMP%] {\n  padding-left: 2%;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 60vh;\n  border: 1px solid black;\n  padding: 10px 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2), .flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  margin-top: 5px;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  flex: 1;\n}\n\n.formField1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 50px;\n}\n\n.formField[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 120px;\n}\n\n.formField2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n}\n\n.inputMatcard[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputGender[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatName[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatNew[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatLastName[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardDoc[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 21px;\n}\n\n.inputMatcardMail[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMailAdd[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMarritial[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardPrefix[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard3[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardAdd[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard4[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  max-width: 208px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 12px;\n}\n\n.inputMatcard2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  width: 20px;\n}\n\n.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n\n.inputClass[_ngcontent-%COMP%] {\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  box-shadow: 0 3pt 6pt #00000029;\n  font-weight: bolder;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-top: -0.5%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.form13[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.form1[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 14.7%;\n  padding-right: 17.4%;\n  background-color: white;\n  align-items: center;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  margin-left: 0%;\n  margin-right: -0.5%;\n  margin-top: 10px;\n  margin-bottom: 3%;\n}\n\n.changeInput[_ngcontent-%COMP%] {\n  opacity: 0.0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.changeDiv[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n}\n\n.mat-form-field-flex[_ngcontent-%COMP%] {\n  box-shadow: 0 3pt 6pt #00000029;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  gap: 10px;\n}\n\n.alignment[_ngcontent-%COMP%] {\n  border-style: none !important;\n  outline: none;\n}\n\n#dob[_ngcontent-%COMP%] {\n  float: right;\n}\n\n#max-width[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\n#drop-max-width[_ngcontent-%COMP%] {\n  width: 190px;\n}\n\n#radio[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\nradioGroup[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#nationality[_ngcontent-%COMP%] {\n  width: 210px;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  margin-right: 6%;\n}\n\n.change[_ngcontent-%COMP%] {\n  color: #2680EB;\n  text-align: center;\n  text-decoration: underline;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -8%;\n  width: 150px;\n  letter-spacing: 0px;\n  color: #342711;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 3px 3px 15px #0000000F;\n  border-radius: 35px;\n  opacity: 1;\n  cursor: pointer;\n  height: 49px;\n  padding-left: 55px;\n  padding-top: 15px;\n}\n\n.Next1[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background: transparent linear-gradient(91deg, #051A2D 0%, #004C97 100%) 0% 0% no-repeat padding-box;\n  border-radius: 23px;\n  opacity: 1;\n  color: white;\n  height: 49px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  \n  background: #6C6C6C 0% 0% no-repeat padding-box;\n  border-radius: 23px;\n  opacity: 0.38 !important;\n  color: white;\n  height: 49px;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 80%;\n  color: #374664;\n  font-weight: 600;\n}\n\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus {\n  background: red;\n}\n\n.mat-tab-label-active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n  .mat-tab-label-active {\n  color: #6988f6 !important;\n}\n\n.verification[_ngcontent-%COMP%] {\n  float: right;\n  color: #2a59e7;\n}\n\n  .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: #7692fa !important;\n  height: 2px;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.line[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.text[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: block;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  font-size: 25px;\n  text-align: center;\n  margin-right: 10px;\n  background: #fff;\n  line-height: 1.7em;\n}\n\nfigure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30px;\n  height: auto;\n}\n\n.formSectionContainer[_ngcontent-%COMP%] {\n  gap: 40px;\n  display: grid;\n  grid-template-columns: 200px auto;\n}\n\n@media (max-width: 768px) {\n  .formSectionContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n\n.formImg[_ngcontent-%COMP%] {\n  height: 100px !important;\n  width: 100px !important;\n  background-color: lightgrey;\n  border-radius: 50%;\n}\n\n.dropDown[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #4286f4 !important;\n}\n\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%] {\n  color: #4286f4;\n  background-color: #4286f4;\n}\n\n.Upload[_ngcontent-%COMP%] {\n  vertical-align: c;\n  margin-top: 20px;\n  font-size: 12px;\n  text-decoration: underline;\n  color: #2680EB;\n}\n\n#row[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #2680EB;\n}\n\n.span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 20% !important;\n}\n\n.span12[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 10% !important;\n}\n\n.spanDiv[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1%;\n  margin-top: 2%;\n}\n\n#bill[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  margin-bottom: -25px;\n}\n\n.billName[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 20px;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  position: unset !important;\n  left: 200px !important;\n  align-self: center !important;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.flex-basis-50[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n}\n\n.gap-20[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n\n.addressContainer[_ngcontent-%COMP%] {\n  padding: 0 20px 0 0 !important;\n}\n\n.address-card[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.inline-block[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n@media (min-width: 576px) {\n  .addressGrid[_ngcontent-%COMP%] {\n    gap: 20px;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n.addressGridInner[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.grow[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  flex-grow: 1;\n}\n\n.gap-20[_ngcontent-%COMP%] {\n  gap: 20px;\n}\n\n.flex-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.height-auto[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.align-self-flex-end[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n\n.align-self-flex-start[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n\n.width-fit-content[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  flex-grow: 1;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n#addressBlock[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n\n#communicationDivider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\n.communicationForm[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n\n#communicationBlockForm[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  border: 1px solid lightgrey;\n  padding: 20px;\n}\n\n#DocumentForm[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  padding: 10px;\n}\n\n#DocumentForm1[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  padding: 10px;\n  padding-bottom: 50px;\n}\n\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus {\n  background: red;\n}\n\n.mat-tab-label-active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.mat-card-doc[_ngcontent-%COMP%] {\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border: 3px solid #FFFFFF;\n  border-radius: 14px;\n  opacity: 1;\n  padding: 0px;\n  margin: 4px;\n}\n\n.inner-mat-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n  background: #F3F3F3 0% 0% no-repeat padding-box;\n  border-radius: 12px;\n}\n\n.insertDriveImg[_ngcontent-%COMP%] {\n  color: #456efe;\n  display: block;\n  margin: auto;\n  width: 175px;\n  height: 108px;\n  text-align: center;\n  opacity: 1;\n}\n\n.formImg[_ngcontent-%COMP%] {\n  background-color: green;\n  max-height: 100px;\n}\n\n.progressBar[_ngcontent-%COMP%] {\n  margin-right: 7%;\n  margin-left: -11%;\n}\n\n.scanButton[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #004C97;\n  opacity: 1;\n  cursor: pointer;\n}\n\n.progressDiv[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  align-self: flex-end;\n}\n\n.dived[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  font-size: 14px;\n  color: #051A2D;\n}\n\n  .mat-tab-label-active {\n  color: #004c97 !important;\n}\n\n.verification[_ngcontent-%COMP%] {\n  float: right;\n  color: #004C97;\n}\n\nmat-tab-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.mat-select-arrow-wrapper[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  width: 40px !important;\n}\n\n#dividerInside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\n.errbd[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\n#clr[_ngcontent-%COMP%] {\n  height: 180px;\n  width: 180px;\n}\n\n#fingerprintSpan[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n  font-size: 12px;\n  margin-bottom: 4px;\n}\n\n.finger-print-icon[_ngcontent-%COMP%] {\n  height: 58.34px;\n  width: 58.34px;\n}\n\n.deleteDiv[_ngcontent-%COMP%] {\n  height: 36px;\n  width: 38px;\n  background-color: white;\n  border-bottom-left-radius: 10px;\n}\n\n.deleteBtn[_ngcontent-%COMP%] {\n  color: red;\n  cursor: pointer;\n}\n\n.deleteBtnDisabled[_ngcontent-%COMP%] {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxca3ljLWJhc2ljLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUlBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQURqQjs7QUFJQTtFQUNFLGVBQWU7QUFEakI7O0FBSUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQURiOztBQU9BO0VBQ0UsWUFBWTtBQUpkOztBQU9BO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFKckI7O0FBT0E7RUFDRSxnQkFBZ0I7QUFKbEI7O0FBT0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFKeEI7O0FBT0E7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0FBTHhCOztBQVFBOztFQUVFLGVBQWU7QUFMakI7O0FBUUE7RUFDRSxPQUFPO0FBTFQ7O0FBV0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQVJiOztBQVdBO0VBRUUsWUFBWTtFQUNaLFlBQVk7QUFUZDs7QUFnQkE7RUFFRSxZQUFZO0VBQ1osV0FBVztBQWRiOztBQW9CQTtFQUNFLFlBQVk7RUFFWixlQUFlO0VBR2YsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQXZCZjs7QUE0QkE7RUFDRSxZQUFZO0VBRVosZUFBZTtFQUNmLHFGQUM2QjtFQUM3QiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBOUJmOztBQW1DQTtFQUNFLFlBQVk7RUFFWixlQUFlO0VBR2Ys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QUFjO0VBQUMsa0JBQWtCO0FBL09uQzs7QUFpUEE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQTlPaEI7O0FBaVBBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsK0JBQStCO0FBOU9qQzs7QUFnUEE7RUFDQSxVQUFVO0VBQ1YsZUFBZTtBQTdPZjs7QUErT0E7RUFDQSxXQUFXO0FBNU9YIiwiZmlsZSI6Imt5Yy1iYXNpYy1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gIC8vICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uZmV0Y2hCdXR0b24ge1xyXG4gIGNvbG9yOiAjNDU2RUZFO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbm1hdC1oaW50IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5hcHAtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIC52ZXJpZmljYXRpb25IZWFke1xyXG4vLyAgIG9wYWNpdHk6IDkwJTtcclxuLy8gfVxyXG4uYmFzaWMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5tYWluLWhlYWQge1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxubWF0LXRhYi1ncm91cCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyJTtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGhlaWdodDogNjB2aDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIgKiB7XHJcbiAgLy8gd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIgOm50aC1jaGlsZCgyKSxcclxuLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoMykge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoMykge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi8vICAgLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoNCkge1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgIH1cclxuLmZvcm1GaWVsZDEge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLmZvcm1GaWVsZCB7XHJcbiAgLy8gd2lkdGg6MjAwcHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuXHJcbiAgLy8gICBnYXA6IDIwcHg7XHJcbiAgLy8gfVxyXG5cclxufVxyXG5cclxuLmZvcm1GaWVsZDIge1xyXG4gIC8vIHdpZHRoOjIwMHB4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLy8gICBnYXA6IDIwcHg7XHJcbiAgLy8gfVxyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuXHJcbiAgLy8gd2lkdGg6IDIyMHB4O1xyXG59XHJcblxyXG4uaW5wdXRHZW5kZXIge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuICAvLyB3aWR0aDogMjIwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdE5hbWUge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuICAvLyB3aWR0aDogNDUwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdE5ldyB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcblxyXG4gIC8vIHdpZHRoOiA0NTVweDtcclxufVxyXG5cclxuLmlucHV0TWF0TGFzdE5hbWUge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuICAvLyB3aWR0aDogMjAwcHg7XHJcblxyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkRG9jIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMjFweDtcclxuICAvLyB3aWR0aDoyNzBweDtcclxuICAvLyB3aWR0aDogMTk1cHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmRNYWlsIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyB3aWR0aDoxMDAlO1xyXG4gIC8vIHdpZHRoOiA0MTBweDtcclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZE1haWxBZGQge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIC8vIHdpZHRoOjEwMCU7XHJcbiAgLy8gd2lkdGg6IDc1MHB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkTWFycml0aWFsIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyB3aWR0aDoxMDAlO1xyXG4gIC8vIHdpZHRoOiA0NTBweDtcclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZFByZWZpeCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgLy8gd2lkdGg6MTAwJTtcclxuICAvLyB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmQzIHtcclxuICBmbGV4LWdyb3c6IDI7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vbWF4LXdpZHRoOjIwOHB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuXHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmRBZGQge1xyXG4gIGZsZXgtZ3JvdzogMjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy9tYXgtd2lkdGg6MjA4cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgLy8gd2lkdGg6MjAwcHg7XHJcblxyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkNCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXgtd2lkdGg6IDIwOHB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIC8vIG1hcmdpbi1yaWdodDotMSU7XHJcblxyXG59XHJcblxyXG4vLyAjZm9ybTF7XHJcbi8vICAgbWFyZ2luLXJpZ2h0Oi0xJTtcclxuLy8gfVxyXG4uaW5wdXRNYXRjYXJkMSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDogNTAwcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuXHJcbiAgLy8gaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkMiB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDogNTAwcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgLy8gcGFkZGluZzogMTJweDtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuICAvLyBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uaW5wdXRDbGFzcyB7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4vLyA6aG9zdCA6Om5nLWRlZXAgZGl2Lm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQge1xyXG4vLyAgIGJvcmRlci1jb2xvcjogMCAhaW1wb3J0YW50O1xyXG4vLyAgIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIDpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAge1xyXG4vLyAgIGJvcmRlci1jb2xvcjogMCAhaW1wb3J0YW50O1xyXG4vLyAgIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIDpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmQge1xyXG4vLyAgIGJvcmRlci1jb2xvcjogMCAhaW1wb3J0YW50O1xyXG4vLyAgIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi5mb3JtIHtcclxuICBtYXJnaW4tdG9wOiAtMC41JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgLy8gZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5mb3JtMTMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAvLyBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxufVxyXG5cclxuLmZvcm0xIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZ2FwOiA1MHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvLyB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGdhcDogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctbGVmdDogMTQuNyU7XHJcblx0cGFkZGluZy1yaWdodDogMTcuNCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1hdENhcmQge1xyXG4gIC8vbWF4LXdpZHRoOiAxNjAwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMC41JTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gLy8gbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcblxyXG4uY2hhbmdlSW5wdXQge1xyXG4gIG9wYWNpdHk6IDAuMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGFuZ2VEaXYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG59XHJcblxyXG4uZmxleC1ncm93LTEge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBnYXA6IDEwcHg7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uYWxpZ25tZW50IHtcclxuICBib3JkZXItc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jZG9iIHtcclxuXHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4jbWF4LXdpZHRoIHtcclxuICBtYXgtd2lkdGg6IDE1MHB4XHJcbn1cclxuXHJcbiNkcm9wLW1heC13aWR0aCB7XHJcbiAgd2lkdGg6IDE5MHB4O1xyXG59XHJcblxyXG4jcmFkaW8ge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxucmFkaW9Hcm91cCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jbmF0aW9uYWxpdHkge1xyXG4gIHdpZHRoOiAyMTBweDtcclxufVxyXG5cclxubWF0LWxhYmVsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDYlO1xyXG59XHJcblxyXG4uY2hhbmdlIHtcclxuICBjb2xvcjogIzI2ODBFQjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmJhY2tJY29ue1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLkJhY2t7XHJcblxyXG4gIG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IC04JTtcclxuXHR3aWR0aDogMTUwcHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDBweDtcclxuXHRjb2xvcjogIzM0MjcxMTtcclxuXHRiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuXHRib3gtc2hhZG93OiAzcHggM3B4IDE1cHggIzAwMDAwMDBGO1xyXG5cdGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcblx0b3BhY2l0eTogMTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0aGVpZ2h0OiA0OXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5OZXh0MSB7XHJcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IC0xMyU7XHJcblx0d2lkdGg6IDE1MHB4O1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MWRlZywgIzA1MUEyRCAwJSwgIzAwNEM5NyAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogMjNweDtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRoZWlnaHQ6IDQ5cHg7XHJcbiAgXHJcbn1cclxuLk5leHQge1xyXG5cdG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAtMTMlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgYmFja2dyb3VuZDogIzZDNkM2QyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICBvcGFjaXR5OiAwLjM4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogNDlweDtcclxufVxyXG5ociB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIGJvcmRlcjogdGhpY2s7XHJcbiAgLyogaGVpZ2h0OiAzcHg7ICovXHJcbiAgLyogbGluZS1oZWlnaHQ6IDNweDsgKi9cclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC8qIGJvcmRlci13aWR0aDogM3B4OyAqL1xyXG4gIGJvcmRlci1ibG9jay13aWR0aDogdW5zZXQ7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgLy8gd2lkdGg6IDIwcHg7XHJcbiAgY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KTtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiBpbml0aWFsO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBjb2xvcjogIzM3NDY2NDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMsXHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyxcclxuLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbDpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3VzLFxyXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcblxyXG4ubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmVyaWZpY2F0aW9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6IHJnYig0MiwgODksIDIzMSk7XHJcbn1cclxuXHJcbi8vIC5tYXQtaW5rLWJhcntcclxuLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgYm90dG9tOiAwO1xyXG4vLyAgICAgaGVpZ2h0OiAycHg7XHJcbi8vICAgICB0cmFuc2l0aW9uOiA1MDBtcyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSk7XHJcbi8vICAgICBoZWlnaHQ6IDRweDtcclxuLy8gICAgIGNvbG9yOlxyXG4vLyB9XHJcbjo6bmctZGVlcCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTgsIDE0NiwgMjUwKSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIC8vIHdpZHRoOiAxMTZweCAhaW1wb3J0YW50O1xyXG5cclxuICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcblxyXG4vLyBtYXQtb3B0aW9ue1xyXG4vLyAgIHdpZHRoOiAyMHB4O1xyXG4vLyB9XHJcbi8vIC5tYXQtc2VsZWN0LWFycm93LXdyYXBwZXIge1xyXG4vLyAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbi8vICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuLy8gICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5maWd1cmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG59XHJcblxyXG5maWd1cmUgaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZm9ybVNlY3Rpb25Db250YWluZXIge1xyXG4gIGdhcDogNDBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogO1xyXG4gIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpICk7XHJcbiAgLy9ncmlkLWdhcDogMjBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZvcm1TZWN0aW9uQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtSW1nIHtcclxuICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmRyb3BEb3duIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNjYsIDEzNCwgMjQ0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcclxuICBjb2xvcjogcmdiKDY2LCAxMzQsIDI0NCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxMzQsIDI0NCk7XHJcbn1cclxuXHJcbi5VcGxvYWQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjO1xyXG4gLy8gYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiAjMjY4MEVCO1xyXG59XHJcblxyXG4jcm93IHtcclxuICBmb250LXNpemU6IDlweDtcclxuICAvLyBvcGFjaXR5OiAxMDAlO1xyXG4gIGNvbG9yOiAjMjY4MEVCO1xyXG59XHJcblxyXG4uc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3BhbjEyIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcGFuRGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG5cclxuXHJcbn1cclxuXHJcbiNiaWxsIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTI1cHg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogLTQlO1xyXG59XHJcblxyXG4uYmlsbE5hbWUge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW4ge1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMjAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLndyYXAge1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmZsZXgtYmFzaXMtNTAge1xyXG4gIGZsZXgtYmFzaXM6IDUwJTtcclxufVxyXG5cclxuLmdhcC0yMCB7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uYWRkcmVzc0NvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAyMHB4IDAgMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWRkcmVzcy1jYXJkIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5pbmxpbmUtYmxvY2sge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnNwYWNlLWJldHdlZW4ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAuYWRkcmVzc0dyaWQge1xyXG4gICAgLy8gZGlzcGxheTogZ3JpZDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcclxuICB9XHJcbn1cclxuXHJcbi5hZGRyZXNzR3JpZElubmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMjBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XHJcbn1cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LWNhcmQgLm1hdC1kaXZpZGVyLWhvcml6b250YWwge1xyXG4vLyAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuLy8gICBsZWZ0OiAwO1xyXG4vLyB9XHJcbi5ncm93IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmxleC1ncm93LTEge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmp1c3RpZnktYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmdhcC0yMCB7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uZmxleC1jb2x1bW4ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5oZWlnaHQtYXV0byB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYWxpZ24tc2VsZi1mbGV4LWVuZCB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5hbGlnbi1zZWxmLWZsZXgtc3RhcnQge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi53aWR0aC1maXQtY29udGVudCB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4ubS04IHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5ibG9jayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNhZGRyZXNzQmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4jY29tbXVuaWNhdGlvbkRpdmlkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uY29tbXVuaWNhdGlvbkZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuI2NvbW11bmljYXRpb25CbG9ja0Zvcm0ge1xyXG5cclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNEb2N1bWVudEZvcm0ge1xyXG4gIC8vIHdpZHRoOjY1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jRG9jdW1lbnRGb3JtMSB7XHJcbiAgLy8gd2lkdGg6NjUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMsXHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyxcclxuLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbDpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3VzLFxyXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcblxyXG4ubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLm1hdC1jYXJkLWRvY3tcclxuXHRiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuXHRib3JkZXI6IDNweCBzb2xpZCAjRkZGRkZGO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0b3BhY2l0eTogMTtcclxuXHRwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgfVxyXG5cclxuLmlubmVyLW1hdC1jYXJkeyAgICBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IC04cHg7XHJcbiAgLy8gbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGM0YzRjMgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi5pbnNlcnREcml2ZUltZyB7XHJcblx0Y29sb3I6IHJnYig2OSwgMTEwLCAyNTQpO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHR3aWR0aDogMTc1cHg7XHJcblx0aGVpZ2h0OiAxMDhweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0b3BhY2l0eTogMTtcclxuICAgLy8gYm9yZGVyLXJhZGl1czogNTAlXHJcbiAgXHJcbn1cclxuXHJcbi5mb3JtSW1nIHsgXHJcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcblx0IG1heC1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NCYXJ7XHJcblx0bWFyZ2luLXJpZ2h0OiA3JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTElO1xyXG59XHJcblxyXG4uc2NhbkJ1dHRvbntcclxuXHQvLyB3aWR0aDogNTAlO1xyXG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdGNvbG9yOiAjMDA0Qzk3O1xyXG4gIC8vIGJhY2tncm91bmQ6I0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcblx0Ly8gYm9yZGVyLWNvbG9yOiByZ2IoMjExLCAyMTEsIDIxMSk7XHJcblx0Ly8gbWFyZ2luLWxlZnQ6IDQ1cHg7XHJcblx0Ly8gYm9yZGVyLXN0eWxlOiByaWRnZTtcclxuXHQvLyBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cdC8vIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcblx0b3BhY2l0eTogMTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcm9ncmVzc0RpdiB7XHJcblx0ZmxleC1ncm93OiAxO1xyXG5cdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZGl2ZWR7XHJcblx0cGFkZGluZy10b3A6IDE1cHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGNvbG9yOiAjMDUxQTJEO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICBjb2xvcjogIzAwNGM5NyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmVyaWZpY2F0aW9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6ICMwMDRDOTdcclxufVxyXG5cclxuLy8gLm1hdC1pbmstYmFye1xyXG4vLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBib3R0b206IDA7XHJcbi8vICAgICBoZWlnaHQ6IDJweDtcclxuLy8gICAgIHRyYW5zaXRpb246IDUwMG1zIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTtcclxuLy8gICAgIGhlaWdodDogNHB4O1xyXG4vLyAgICAgY29sb3I6XHJcbi8vIH1cclxuXHJcblxyXG5tYXQtdGFiLWxhYmVsIHtcclxuICBmb250LXNpemU6IDhweDtcclxufVxyXG5cclxuLy8gbWF0LW9wdGlvbntcclxuLy8gICB3aWR0aDogMjBweDtcclxuLy8gfVxyXG4ubWF0LXNlbGVjdC1hcnJvdy13cmFwcGVyIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2RpdmlkZXJJbnNpZGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uZXJyYmRcclxue1xyXG4gIGJvcmRlcjoxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4jY2xye1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNmaW5nZXJwcmludFNwYW57XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOjEycHg7bWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbi5maW5nZXItcHJpbnQtaWNvbntcclxuICBoZWlnaHQ6IDU4LjM0cHg7XHJcbiAgd2lkdGg6IDU4LjM0cHg7XHJcbiAgLy8gcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuLmRlbGV0ZURpdntcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgd2lkdGg6IDM4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxufVxyXG4uZGVsZXRlQnRue1xyXG5jb2xvcjogcmVkO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRlbGV0ZUJ0bkRpc2FibGVke1xyXG5jb2xvcjogZ3JheTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KycBasicInformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-kyc-basic-information",
                templateUrl: "./kyc-basic-information.component.html",
                styleUrls: ["./kyc-basic-information.component.scss"],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_13__["FingerPrintCaptureService"] }, { type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_15__["DataService"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_16__["LocalStoreService"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }]; }, { verificationInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], settingallCustInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["fileInput"]
        }] }); })();
class OtpModel {
}
class OtpModelUpdate {
}


/***/ })

}]);
//# sourceMappingURL=default~views-card-account-card-account-module~views-others-others-module~views-others-video-verific~e3216432-es2015.js.map