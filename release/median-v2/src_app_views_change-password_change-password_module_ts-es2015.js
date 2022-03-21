"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_change-password_change-password_module_ts"],{

/***/ 5551:
/*!**************************************************************!*\
  !*** ./src/app/views/change-password/change-password-dto.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordDTO": function() { return /* binding */ ChangePasswordDTO; },
/* harmony export */   "ChangePasswordRespDTO": function() { return /* binding */ ChangePasswordRespDTO; }
/* harmony export */ });
class ChangePasswordDTO {
}
class ChangePasswordRespDTO {
}


/***/ }),

/***/ 78250:
/*!*************************************************************************!*\
  !*** ./src/app/views/change-password/change-password-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordRoutingModule": function() { return /* binding */ ChangePasswordRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _change_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.component */ 87654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _change_password_component__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordComponent
    }
];
class ChangePasswordRoutingModule {
}
ChangePasswordRoutingModule.ɵfac = function ChangePasswordRoutingModule_Factory(t) { return new (t || ChangePasswordRoutingModule)(); };
ChangePasswordRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ChangePasswordRoutingModule });
ChangePasswordRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChangePasswordRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 87654:
/*!********************************************************************!*\
  !*** ./src/app/views/change-password/change-password.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": function() { return /* binding */ ChangePasswordComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _change_password_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password-dto */ 5551);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ 95373);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ 94761);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_security_policy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/security-policy.service */ 10402);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);










function ChangePasswordComponent_img_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 22);
} }
function ChangePasswordComponent_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 23);
} }
function ChangePasswordComponent_img_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 22);
} }
function ChangePasswordComponent_img_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 23);
} }
function ChangePasswordComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r15.errorMsg);
} }
function ChangePasswordComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ChangePasswordComponent_div_20_div_1_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.userForm.get("newPassword").errors.pattern);
} }
function ChangePasswordComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Confirm Password must contain Minimum ", ctx_r7.minPass, " digits. ");
} }
function ChangePasswordComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Confirm Password must contain Maximum ", ctx_r8.maxPass, " digits. ");
} }
function ChangePasswordComponent_img_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 22);
} }
function ChangePasswordComponent_img_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 23);
} }
function ChangePasswordComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r16.errorMsg);
} }
function ChangePasswordComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ChangePasswordComponent_div_29_div_1_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.userForm.get("confirmPassword").errors.pattern);
} }
function ChangePasswordComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Confirm Password must contain Minimum ", ctx_r13.minPass, " digits. ");
} }
function ChangePasswordComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Confirm Password must contain Maximum ", ctx_r14.maxPass, " digits. ");
} }
const _c0 = function () { return ["/dashboard"]; };
class ChangePasswordComponent {
    constructor(api, fb, router, apiService) {
        this.api = api;
        this.fb = fb;
        this.router = router;
        this.apiService = apiService;
        this.changePassword = new _change_password_dto__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordDTO();
        this.enableLoader = false;
        this.userObj = new _change_password_dto__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordDTO();
        // added by vidya for issue id 776
        this.hide1 = true;
        this.hide = true;
        this.hide2 = true;
        // userId: string;
        // oldPassword: string;
        // newPassword: string;
        // confirmPassword: string;
        // otp: string;
        this.submit = true;
    }
    ngOnInit() {
        this.loggedInUser = localStorage.getItem('userFromLogin');
        this.otpEnableFlag = false;
        let a, b;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.passwordRegex),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(this.maxPass),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(this.minPass)])]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        });
        this.apiService.fetchSecurityPolicyService().subscribe(resp => {
            this.security = resp;
            console.log(this.security);
            this.minPass = this.security.minPswdLength;
            this.maxPass = this.security.maxPswdLength;
            this.buildForm(this.minPass, this.maxPass);
            console.log(this.minPass, this.maxPass);
            console.log(this.security);
        });
        this.buildForm(this.minPass ? this.minPass : a, this.maxPass ? this.maxPass : b);
    }
    buildForm(a, b) {
        // ---------- Password Policy Implementation (BEGIN) ----------
        this.apiService.fetchSecurityPolicyService()
            .subscribe(resp => {
            this.security1 = resp;
            this.ucase = this.security1.pswdComplexUcase;
            this.lcase = this.security1.pswdComplexLcase;
            this.num = this.security1.pswdComplexNum;
            this.splc = this.security1.pswdComplexSplc;
            this.errorMsg = '';
            this.passwordRegex = '';
            console.log("Upper case", this.ucase);
            console.log("Lower case", this.lcase);
            console.log("num case", this.num);
            console.log("splc case", this.splc);
            if (this.security1.pswdComplexUcase == "true") {
                this.passwordRegex = '(?=[^A-Z]*[A-Z])';
                this.errorMsg = ' UpperCase';
            }
            if (this.security1.pswdComplexLcase == "true") {
                this.passwordRegex = this.passwordRegex + '(?=[^a-z]*[a-z])';
                if (this.errorMsg != '') {
                    this.errorMsg = this.errorMsg + ', LowerCase';
                }
                else {
                    this.errorMsg = this.errorMsg + ' LowerCase';
                }
            }
            // if (this.security1.pswdComplexSplc=="true") {
            //   this.passwordRegex = this.passwordRegex + '(?=[^!-@]*[!-@])';
            //   if (this.errorMsg != '') {
            //     this.errorMsg = this.errorMsg + ', Special Character';
            //   }
            //   else {
            //     this.errorMsg = this.errorMsg + ' Special Character';
            //   }
            // }
            if (this.splc == "true") {
                this.passwordRegex = this.passwordRegex + '(?=.*[!@#$%^&*])';
                if (this.errorMsg != '')
                    this.errorMsg = this.errorMsg + ", Special Character";
                else
                    this.errorMsg = this.errorMsg + " Special Character";
            }
            if (this.security1.pswdComplexNum == "true") {
                this.passwordRegex = this.passwordRegex + '(?=[^0-9]*[0-9])';
                if (this.errorMsg != '') {
                    this.errorMsg = this.errorMsg + ', Number';
                }
                else {
                    this.errorMsg = this.errorMsg + ' Number';
                }
            }
            this.passwordRegex = this.passwordRegex + '.{' + this.minPass + ',' + this.maxPass + '}';
            // this.passwordRegex = "(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^!-@]*[!-@]).{10,15}";
            this.errorMsg = 'Password must contain atleast one ' + this.errorMsg + '.';
            console.log(this.passwordRegex);
            // ---------- Password Policy Implementation (END) ----------
            this.userForm = this.fb.group({
                // password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]),
                // newPassword: new FormControl('', [Validators.required,
                // Validators.compose([Validators.pattern(this.passwordRegex),
                // Validators.maxLength(this.maxPass),
                // Validators.minLength(this.minPass)])]),
                newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(this.maxPass),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(this.minPass)])]),
                oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
                confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
            });
        });
        console.log(this.minPass, this.maxPass);
        console.log('form', this.userForm);
    }
    onSubmit() {
        this.changePassword.userId = this.loggedInUser;
        this.changePassword.newPassword = this.userForm.get('newPassword').value;
        this.changePassword.oldPassword = this.userForm.get('oldPassword').value;
        this.changePassword.confirmPassword = this.userForm.get('confirmPassword').value;
        // this.changePassword.otp=this.userForm.get('otp').value;
        if (this.changePassword.newPassword != this.changePassword.confirmPassword) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: 'New Password and Confirm Password values are not same ',
            });
        }
        else if (!this.changePassword.newPassword || !this.changePassword.confirmPassword || !this.changePassword.oldPassword) {
            console.log("inside else if");
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: 'Please enter all the fields ',
            });
        }
        else {
            // if (this.changePassword.newPassword === null || this.changePassword.confirmPassword === null || this.changePassword.oldPassword === null) {
            //   Swal.fire({
            //     title: 'Oops...',
            //     text: 'Please enter all the fields !!!',
            //   });
            // }
            this.changePassword.userId = this.loggedInUser;
            var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_2__.AES.encrypt(this.changePassword.newPassword, "@12#90!^*NPR*g&*()$34#$");
            var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_2__.AES.encrypt(this.changePassword.userId, "@12#90!^*NPR*g&*()$34#$");
            var old = crypto_js__WEBPACK_IMPORTED_MODULE_2__.AES.encrypt(this.changePassword.oldPassword, "@12#90!^*NPR*g&*()$34#$");
            var data = encryptedAES.toString();
            var uname = USERNAME.toString();
            var oldPassword = encryptedAES.toString();
            // console.log(data);
            this.changePassword.newPassword = data;
            this.changePassword.userId = uname;
            // this.changePassword.oldPassword=oldPassword;
            console.log(this.changePassword);
            this.enableLoader = true;
            this.api.changePasswordService(this.changePassword).subscribe(resp => {
                this.var1 = resp;
                // this.changePasswordRespDTO = resp;
                console.log(resp[0]);
                // //console.log('changePasswordRespDTO :' );
                // //console.log( this.changePasswordRespDTO);
                // this.enableLoader = false;
                if (resp == "You cannot use your previous password. Please choose another password") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        title: "You can not use your last " + this.security.pswdReuseAft + " passwords. Please choose another password."
                    });
                }
                if (resp == "Incorrect old Password") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        title: "Incorrect old password."
                    });
                }
                if (resp == "successfull") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        title: "Password Changed Successfully."
                    });
                    this.submit = false;
                }
                //         // if(resp === true){
                //         //   this.otpEnableFlag = true;
                //         // }
                //         if(resp === true){
                //           Swal.fire(
                //             'You Changed The Password ',
                //           );
                //           this.router.navigate(["/dashboard"]);
                //         }
            });
        }
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_security_policy_service__WEBPACK_IMPORTED_MODULE_4__.SecurityPolicyService)); };
ChangePasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["npr-change-password"]], decls: 40, vars: 20, consts: [[1, "mt-4"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [3, "disabled"], [1, "dbCardStyle", "fieldwidth", 2, "width", "400px"], [1, "row", "gy-4"], [1, "col-12", "d-flex"], ["id", "oldPassword", "placeholder", "Old Password", "required", "", "value", "", "name", "oldPassword", "formControlName", "oldPassword", 1, "form-control", 3, "type"], ["newPassword", ""], ["toggle", "#pwdFld", 1, "visibility", 3, "click"], ["class", "showPwd", "src", "assets/images/show-icon.svg", "alt", "...", 4, "ngIf"], ["class", "hidePwd", "src", "assets/images/hide-icon.svg", "alt", "...", 4, "ngIf"], ["id", "password", "placeholder", "New Password", "required", "", "value", "", "name", "password", "formControlName", "newPassword", 1, "form-control", 3, "type"], ["class", "invalid-feedback", 4, "ngIf"], ["id", "confirm password", "placeholder", "Confirm Password", "required", "", "value", "", "name", "confirmPassword", "formControlName", "confirmPassword", 1, "form-control", 3, "type"], ["confirmPassword", ""], [1, "col-lg-12", 2, "margin-left", "40%"], [1, "row", "g-3", "pb-3", "pt-3"], [1, "col-auto"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["src", "assets/images/show-icon.svg", "alt", "...", 1, "showPwd"], ["src", "assets/images/hide-icon.svg", "alt", "...", 1, "hidePwd"], [1, "invalid-feedback"], [4, "ngIf"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Password Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "fieldset", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_span_click_11_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ChangePasswordComponent_img_12_Template, 1, 0, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ChangePasswordComponent_img_13_Template, 1, 0, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_span_click_17_listener() { return ctx.hide1 = !ctx.hide1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ChangePasswordComponent_img_18_Template, 1, 0, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ChangePasswordComponent_img_19_Template, 1, 0, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ChangePasswordComponent_div_20_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ChangePasswordComponent_div_21_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ChangePasswordComponent_div_22_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_span_click_26_listener() { return ctx.hide2 = !ctx.hide2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ChangePasswordComponent_img_27_Template, 1, 0, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ChangePasswordComponent_img_28_Template, 1, 0, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, ChangePasswordComponent_div_29_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, ChangePasswordComponent_div_30_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ChangePasswordComponent_div_31_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_35_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.submit);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.hide1 ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.hide1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hide1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userForm.get("newPassword").touched && !ctx.userForm.get("newPassword").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userForm.get("newPassword").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userForm.get("newPassword").hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.hide2 ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.hide2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hide2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userForm.get("confirmPassword").touched && !ctx.userForm.get("confirmPassword").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userForm.get("confirmPassword").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userForm.get("confirmPassword").hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.userForm.valid || !ctx.submit);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](19, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref], styles: [".visibility[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-top: 5px;\n}\n\n.dbCardStylePassword[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 30px 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFSiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlzaWJpbGl0eXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5kYkNhcmRTdHlsZVBhc3N3b3Jke1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMzBweCA2NXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 87015:
/*!*****************************************************************!*\
  !*** ./src/app/views/change-password/change-password.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordModule": function() { return /* binding */ ChangePasswordModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password-routing.module */ 78250);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.component */ 87654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





class ChangePasswordModule {
}
ChangePasswordModule.ɵfac = function ChangePasswordModule_Factory(t) { return new (t || ChangePasswordModule)(); };
ChangePasswordModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ChangePasswordModule });
ChangePasswordModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChangePasswordModule, { declarations: [_change_password_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_change-password_change-password_module_ts-es2015.js.map