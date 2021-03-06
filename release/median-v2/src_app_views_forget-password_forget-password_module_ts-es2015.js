"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_forget-password_forget-password_module_ts"],{

/***/ 68264:
/*!**************************************************!*\
  !*** ./src/app/shared/services/login.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": function() { return /* binding */ LoginService; }
/* harmony export */ });
/* harmony import */ var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/config/app.constant */ 3118);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);

// import { any } from 'src/app/shared/models/user';
// import  } from 'src/app/shared/models/login';
// import { any } from '../security-policy/security-policy/security-dto';



class LoginService {
    constructor(http) {
        this.http = http;
        this.uri = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
        this.dashboardapi = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/dashboard';
        this.userapi = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/users';
        this.departmentname = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        this.logouttime = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
    }
    getOtp(login) {
        return this.http.post(`${this.uri}/login/otp`, login);
    }
    loginService(login) {
        return this.http.post(`${this.uri}/login/credentials`, login);
    }
    forgetPassword(login) {
        return this.http.post(`${this.uri}/login/forgetPsw`, login);
    }
    fristTimePassword(login) {
        return this.http.post(`${this.uri}/user/passwordReset`, login);
    }
    getOtpForReset(login) {
        return this.http.post(`${this.uri}/users/otpForReset`, login);
    }
    userPasswordExpireNotif(user_id) {
        return this.http.get(`${this.uri}/login/pwdNotif/${user_id}`);
    }
    fetchSecurityPolicyService() {
        return this.http.get(`${this.uri}/securityPolicy/fetch`);
    }
    fetchMedUser(userId) {
        return this.http.get(`${this.uri}/login/getUserByUserId/${userId}`);
    }
    settingdepartmentlogged(department, lastloggedin) {
        this.departmentname.next(department);
        this.logouttime.next(lastloggedin);
    }
    gettingloginTimeandDepartment(userName) {
        return this.http.get(`${this.userapi}/loganddept/${userName}`);
    }
}
LoginService.??fac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
LoginService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: LoginService, factory: LoginService.??fac, providedIn: 'root' });


/***/ }),

/***/ 31443:
/*!**************************************************!*\
  !*** ./src/app/shared/services/toast.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": function() { return /* binding */ ToastService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-izitoast */ 27218);


class ToastService {
    constructor(iziToast) {
        this.iziToast = iziToast;
    }
    successMessage(title, msg) {
        this.iziToast.success({
            title: title,
            message: msg,
            layout: 2,
            balloon: false,
            position: "topRight",
            progressBarColor: "red",
            pauseOnHover: true,
        });
    }
    errorMessage(title, msg) {
        this.iziToast.error({
            title: title,
            message: msg,
            layout: 2,
            balloon: false,
            position: "topRight",
            progressBarColor: "red",
            pauseOnHover: true,
        });
    }
    infoMessage(title, msg) {
        this.iziToast.info({
            title: title,
            message: msg,
            layout: 2,
            balloon: false,
            position: "topRight",
            progressBarColor: "red",
            pauseOnHover: true,
        });
    }
}
ToastService.??fac = function ToastService_Factory(t) { return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__.Ng2IzitoastService)); };
ToastService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: ToastService, factory: ToastService.??fac, providedIn: 'root' });


/***/ }),

/***/ 14020:
/*!*************************************************************************!*\
  !*** ./src/app/views/forget-password/forget-password-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPasswordRoutingModule": function() { return /* binding */ ForgetPasswordRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _forget_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-password.component */ 28241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _forget_password_component__WEBPACK_IMPORTED_MODULE_0__.ForgetPasswordComponent
    }
];
class ForgetPasswordRoutingModule {
}
ForgetPasswordRoutingModule.??fac = function ForgetPasswordRoutingModule_Factory(t) { return new (t || ForgetPasswordRoutingModule)(); };
ForgetPasswordRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: ForgetPasswordRoutingModule });
ForgetPasswordRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](ForgetPasswordRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 28241:
/*!********************************************************************!*\
  !*** ./src/app/views/forget-password/forget-password.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPasswordComponent": function() { return /* binding */ ForgetPasswordComponent; },
/* harmony export */   "Login": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 95373);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/login.service */ 68264);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var src_app_shared_services_security_policy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/security-policy.service */ 10402);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-otp-input */ 50287);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);











const _c0 = ["ngOtpInput"];
function ForgetPasswordComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r10.errorMsg);
} }
function ForgetPasswordComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, ForgetPasswordComponent_div_28_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r3.reactiveForm.get("password").errors.pattern);
} }
function ForgetPasswordComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" New Password Password must contain Minimum ", ctx_r4.minPass, " digits. ");
} }
function ForgetPasswordComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" New Password must contain Maximum ", ctx_r5.maxPass, " digits. ");
} }
function ForgetPasswordComponent_div_38_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r11.errorMsg);
} }
function ForgetPasswordComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, ForgetPasswordComponent_div_38_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r7.reactiveForm.get("confirmPassword").errors.pattern);
} }
function ForgetPasswordComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" Confirm Password must contain Minimum ", ctx_r8.minPass, " digits. ");
} }
function ForgetPasswordComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" Confirm Password must contain Maximum ", ctx_r9.maxPass, " digits. ");
} }
class ForgetPasswordComponent {
    constructor(router, route, apiService, fb, toastService, securityService) {
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.fb = fb;
        this.toastService = toastService;
        this.securityService = securityService;
        this.config = {
            allowNumbersOnly: true,
            length: 6,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: "*",
            inputStyles: { width: "40px", height: "40px" },
        };
        this.loginProcessing = false;
        this.login = new Login();
        this.editable = false;
        this.errorMsg = "";
        this.hide = true;
        this.hideConfirm = true;
        this.modifyUserObject = new Login();
        this.login1 = new Login();
        this.otpBtn = false;
        this.submitBtn = false;
        this.getOtpButtonEnable = true;
        this.route.queryParams.subscribe((params) => {
            this.modifyUserObject.username = params.userId;
        });
    }
    ngOnInit() {
        this.isReadOnly = false;
        this.button2 = true;
        this.reactiveForm = this.fb.group({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(""),
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.passwordRegex),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(this.maxPass),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(this.minPass),
                ]),
            ]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.passwordRegex),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(this.maxPass),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(this.minPass),
                ]),
            ]),
        });
        this.userId = localStorage.getItem("userIdForChangePassword");
        let a, b;
        this.securityService.fetchSecurityPolicyService().subscribe((resp) => {
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
        this.securityService.fetchSecurityPolicyService().subscribe((resp) => {
            this.security1 = resp;
            this.ucase = this.security1.pswdComplexUcase;
            this.lcase = this.security1.pswdComplexLcase;
            this.num = this.security1.pswdComplexNum;
            this.splc = this.security1.pswdComplexSplc;
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
            this.passwordRegex =
                this.passwordRegex + ".{" + this.minPass + "," + this.maxPass + "}";
            this.errorMsg =
                "Password must contain atleast one " + this.errorMsg + ".";
            console.log(this.passwordRegex);
            this.reactiveForm = this.fb.group({
                userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(""),
                otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.passwordRegex),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(this.maxPass),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(this.minPass),
                    ]),
                ]),
                confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.passwordRegex),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(this.maxPass),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(this.minPass),
                    ]),
                ]),
            });
        });
        console.log(this.minPass, this.maxPass);
        console.log("form", this.reactiveForm);
    }
    resetButton() {
        this.reactiveForm.reset();
    }
    reset(login) {
        if (!login.username) {
            this.toastService.infoMessage("Enter User Id.", "");
            return;
        }
        var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(login.password, "@12#90!^*NPR*g&*()$34#$");
        var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(login.username, "@12#90!^*NPR*g&*()$34#$");
        var data = encryptedAES.toString();
        var uname = USERNAME.toString();
        this.login1.password = data;
        this.login1.username = uname;
        this.login1.otp = this.otp;
        console.log(this.login1);
        this.spinnerbutton = true;
        this.apiService.forgetPassword(this.login1).subscribe((res) => {
            this.var1 = res;
            console.log(this.var1);
            if (this.var1) {
                this.spinnerbutton = false;
                if (this.var1[0] === "Login success.") {
                    this.otpBtn = true;
                    this.submitBtn = true;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "password Changed Successfully." });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: this.var1[0] });
                }
            }
            else {
                this.spinnerbutton = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: "Choose Other Password or otp is invalid."
                });
            }
        });
    }
    getOtp(username) {
        this.loginProcessing = true;
        if (!username) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Enter User Id." });
            return;
        }
        this.apiService.fetchMedUser(username).subscribe((response) => {
            console.log(response);
            this.user = response;
            this.email = this.user.email;
            localStorage.setItem("userFromLogin", this.user.userId);
            sessionStorage.setItem("user_id", this.user.userId);
            var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(username, "@12#90!^*NPR*g&*()$34#$");
            var uname = USERNAME.toString();
            console.log(uname);
            this.spinnerbutton = true;
            this.passwordReset1 = uname;
            console.log("uname", uname);
            this.apiService.getOtpForReset(this.passwordReset1).subscribe((res) => {
                this.loginProcessing = false;
                this.var = res;
                if (this.var) {
                    this.button1 = true;
                    this.button2 = false;
                    this.isReadOnly = true;
                    this.spinnerbutton = false;
                    this.toastService.successMessage("OTP sent successfully to " + this.email, "");
                    this.getOtpButtonEnable = false;
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Unable to find User details.Verify your userid." });
                    this.button1 = false;
                    this.button2 = true;
                    this.isReadOnly = true;
                    this.spinnerbutton = false;
                }
            });
        }, (err) => {
            // Swal.fire(
            // {text:  "Server Error,Unable to connect server."}
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire(err.error.message);
        });
    }
    goHome() {
        this.router.navigate(["/login"]);
    }
    onOtpChange(otp) {
        this.otp = otp;
        if (this.otp.length === 6) {
            this.reactiveForm.get('otp').setValue(this.otp);
        }
    }
    changePassword(newPassword, confirmPassword, userId, otp) {
        console.log(newPassword, confirmPassword, userId, otp);
        if (newPassword != confirmPassword) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Password Not Matched." });
        }
        else {
            this.loginProcessing = true;
            let encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(newPassword, "@12#90!^*NPR*g&*()$34#$");
            let USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(userId, "@12#90!^*NPR*g&*()$34#$");
            var data = encryptedAES.toString();
            let uname = USERNAME.toString();
            this.login.password = data;
            this.login.username = uname;
            this.login.otp = otp;
            console.log(this.login);
            this.apiService.forgetPassword(this.login).subscribe((res) => {
                this.loginProcessing = false;
                this.res = res;
                console.log(this.res);
                if (this.res) {
                    // this.spinnerbutton = false;
                    if (this.res[0] === "Login success.") {
                        this.otpBtn = true;
                        this.submitBtn = true;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Password Changed Successfully." });
                    }
                    if (res[0] ==
                        "You cannot use your previous password. Please choose another password") {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("You can not use your last " + this.security.pswdReuseAft +
                            " passwords. Please choose another password.", "");
                    }
                    if (res[0] == "OTP is invalid") {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Otp is invalid." });
                    }
                    if (res[0] == "successfull") {
                        this.otpBtn = true;
                        this.submitBtn = true;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Password Changed Successfully." });
                    }
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Choose Other Password or otp is invalid." });
                }
            });
        }
    }
    exit() {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(['/session/login']);
    }
}
ForgetPasswordComponent.??fac = function ForgetPasswordComponent_Factory(t) { return new (t || ForgetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_security_policy_service__WEBPACK_IMPORTED_MODULE_4__.SecurityPolicyService)); };
ForgetPasswordComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: ForgetPasswordComponent, selectors: [["npr-forget-password"]], viewQuery: function ForgetPasswordComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????viewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.ngOtpInput = _t.first);
    } }, decls: 52, vars: 10, consts: [[1, "mt-4"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle", "fieldwidth"], [1, "pageTitle", "text-center", "mb-md-4", "mb-3"], [1, "row", "gy-4"], [1, "col-12"], [1, "formLbl"], [1, "colorRed"], ["id", "User Id", "placeholder", "User Id", "required", "", "value", "", "name", "userId", "formControlName", "userId", "oninput", "this.value = this.value.toUpperCase()", 1, "form-control"], ["user", ""], [1, "mb-10", "px-md-10"], [1, "d-flex", "flex-wrap", "flex-stack"], ["inputControls", "9", 2, "font-size", "20px", 3, "config", "onInputChange"], ["ngOtpInput", ""], ["id", "password", "placeholder", "New Password", "required", "", "value", "", "name", "password", "formControlName", "password", 1, "form-control"], ["newPassword", ""], ["class", "invalid-feedback", 4, "ngIf"], ["id", "confirm password", "placeholder", "Confirm Password", "required", "", "value", "", "name", "confirmPassword", "formControlName", "confirmPassword", 1, "form-control"], ["confirmPassword", ""], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "pt-3", "justify"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"]], template: function ForgetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](8, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](10, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](15, "OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](17, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "ng-otp-input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("onInputChange", function ForgetPasswordComponent_Template_ng_otp_input_onInputChange_19_listener($event) { return ctx.onOtpChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](23, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](26, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](28, ForgetPasswordComponent_div_28_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](29, ForgetPasswordComponent_div_29_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](30, ForgetPasswordComponent_div_30_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](32, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](33, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](34, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](35, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](36, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](38, ForgetPasswordComponent_div_38_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](39, ForgetPasswordComponent_div_39_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](40, ForgetPasswordComponent_div_40_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](44, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ForgetPasswordComponent_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](12); return ctx.getOtp(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](45, "Get OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](47, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ForgetPasswordComponent_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r12); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](27); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](37); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](12); return ctx.changePassword(_r2.value, _r6.value, _r0.value, ctx.otp); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](48, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](50, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ForgetPasswordComponent_Template_a_click_50_listener() { return ctx.exit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](51, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx.reactiveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.reactiveForm.get("password").touched && !ctx.reactiveForm.get("password").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.reactiveForm.get("password").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.reactiveForm.get("password").hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.reactiveForm.get("confirmPassword").touched && !ctx.reactiveForm.get("confirmPassword").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.reactiveForm.get("confirmPassword").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.reactiveForm.get("confirmPassword").hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", ctx.otpBtn || !ctx.getOtpButtonEnable);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx.reactiveForm.valid || ctx.submitBtn);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, ng_otp_input__WEBPACK_IMPORTED_MODULE_8__.NgOtpInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
class Login {
}


/***/ }),

/***/ 82352:
/*!*****************************************************************!*\
  !*** ./src/app/views/forget-password/forget-password.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPasswordModule": function() { return /* binding */ ForgetPasswordModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-password-routing.module */ 14020);
/* harmony import */ var _forget_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget-password.component */ 28241);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-otp-input */ 50287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class ForgetPasswordModule {
}
ForgetPasswordModule.??fac = function ForgetPasswordModule_Factory(t) { return new (t || ForgetPasswordModule)(); };
ForgetPasswordModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: ForgetPasswordModule });
ForgetPasswordModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgetPasswordRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_5__.NgOtpInputModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](ForgetPasswordModule, { declarations: [_forget_password_component__WEBPACK_IMPORTED_MODULE_1__.ForgetPasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgetPasswordRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_5__.NgOtpInputModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_forget-password_forget-password_module_ts-es2015.js.map