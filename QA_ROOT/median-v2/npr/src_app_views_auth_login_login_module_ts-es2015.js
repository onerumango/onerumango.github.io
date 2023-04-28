"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_auth_login_login_module_ts"],{

/***/ 65336:
/*!*****************************************************!*\
  !*** ./src/@npr/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeInUpAnimation": function() { return /* binding */ fadeInUpAnimation; },
/* harmony export */   "fadeInUp400ms": function() { return /* binding */ fadeInUp400ms; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 97175);

function fadeInUpAnimation(duration) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInUp', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateY(20px)',
                opacity: 0
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInUp400ms = fadeInUpAnimation(400);


/***/ }),

/***/ 8888:
/*!***********************************************!*\
  !*** ./src/app/views/auth/login/DEMO_USER.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEMO_USER": function() { return /* binding */ DEMO_USER; }
/* harmony export */ });
class DEMO_USER {
    constructor() {
        this.currentUser = "SAKTHI";
        // this.userPermissions = { "screenAndPermissionsDTO": [{ "permissions": "1111111111", "screenId": 2, "screenName": "Users" }, { "permissions": "1111111111", "screenId": 3, "screenName": "Roles" }, { "permissions": "1111111111", "screenId": 4, "screenName": "Audit Logs" }, { "permissions": "1111111111", "screenId": 5, "screenName": "Password Policy" }, { "permissions": "1111111111", "screenId": 6, "screenName": "Process Monitoring" }, { "permissions": "1111111111", "screenId": 7, "screenName": "External Systems" }, { "permissions": "1111111111", "screenId": 8, "screenName": "Process Code Mapping" }, { "permissions": "1111111111", "screenId": 9, "screenName": "Excel Mapping" }, { "permissions": "1111111111", "screenId": 10, "screenName": "Upload Excel" }, { "permissions": "1111111111", "screenId": 11, "screenName": "Authorize Excel" }, { "permissions": "1111111111", "screenId": 12, "screenName": "Rejection Queue" }, { "permissions": "1111111111", "screenId": 13, "screenName": "Authorize Modifications" }, { "permissions": "1111111111", "screenId": 14, "screenName": "Excel Processing Summary" }, { "permissions": "1111111111", "screenId": 15, "screenName": "Customer search" }, { "permissions": "1111111111", "screenId": 16, "screenName": "Email-Management" }, { "permissions": "1111111111", "screenId": 17, "screenName": "Transaction Code Maint" }, { "permissions": "1111111111", "screenId": 18, "screenName": "Initiate Account Closure" }, { "permissions": "1111111111", "screenId": 19, "screenName": "Process Account Closure" }, { "permissions": "1111111111", "screenId": 20, "screenName": "Acc Closure Maintenance" }, { "permissions": "1111111111", "screenId": 21, "screenName": "Charge Maintenance" }, { "permissions": "1111111111", "screenId": 22, "screenName": "GlobalCodeMaintenance" }, { "permissions": "1111111111", "screenId": 23, "screenName": "UserCodeMaintenance" }, { "permissions": "1111111111", "screenId": 24, "screenName": "AcumenJournal" }, { "permissions": "1111111111", "screenId": 25, "screenName": "Treasury Reference" }, { "permissions": "1111111111", "screenId": 26, "screenName": "Cash Payments" }, { "permissions": "1111111111", "screenId": 27, "screenName": "Authorize Cash Payments" }], "labels": [{ "labelId": 1, "labelName": "NEW", "labelDescription": "New", "language": "EN" }, { "labelId": 2, "labelName": "EDIT", "labelDescription": "Edit", "language": "EN" }, { "labelId": 3, "labelName": "DELETE", "labelDescription": "Delete", "language": "EN" }, { "labelId": 4, "labelName": "CLOSE", "labelDescription": "Close", "language": "EN" }, { "labelId": 5, "labelName": "REOPEN", "labelDescription": "Reopen", "language": "EN" }, { "labelId": 6, "labelName": "UNLOCK", "labelDescription": "Unlock", "language": "EN" }, { "labelId": 7, "labelName": "PRINT", "labelDescription": "Print", "language": "EN" }, { "labelId": 8, "labelName": "AUTH", "labelDescription": "Auth", "language": "EN" }, { "labelId": 9, "labelName": "VIEW", "labelDescription": "View", "language": "EN" }, { "labelId": 10, "labelName": "REJECT", "labelDescription": "Reject", "language": "EN" }] };
        this.department = null;
        this.LoggedInUser = "SAKTHI";
        this.userobj = "28/12/2021 10:51:30";
        this.usercompleteobj = { "pwdChangeDate": 1640597099000, "intime": "09:00", "outtime": "22:55", "userId": "SAKTHI", "verifiedStatus": "A", "creatorDtStamp": 1593082262162, "creatorId": "TEST1", "email": "sakthivel.m@rumango.com", "emailNotification": null, "encryptedPassword": "$2a$10$7qdgqLg6lANIjAIu/45I6.s/ydmtHjzjbhEkN25H1e779uaiWtyue", "failedAttempts": 0, "verifiedOnce": "Y", "firstTimeLogin": "true", "ldapUserId": null, "logoutTime": "Tue Dec 28 10:51:28 IST 2021", "mobile": "1234567890", "msadUserId": null, "newRoleForUser": ["ROLE_NEW_ADMIN"], "passwordAge": 54563535663, "recordStatus": "O", "smsNotification": null, "updatedAt": null, "updatedBy": null, "userName": "PRABHAT", "userRole": "ROLE1", "verifierDtStamp": null, "verifierId": null, "versionNo": 1, "modNo": 6, "disableUser": "N", "statusForUser": "Enable", "department": null };
    }
}


/***/ }),

/***/ 93140:
/*!**********************************************************!*\
  !*** ./src/app/views/auth/login/login-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": function() { return /* binding */ LoginRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 2783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const loginRoutes = [
    {
        path: "",
        children: [
            {
                path: 'login',
                component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
            }
        ]
    }
];
class LoginRoutingModule {
}
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); };
LoginRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(loginRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2783:
/*!*****************************************************!*\
  !*** ./src/app/views/auth/login/login.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": function() { return /* binding */ LoginComponent; },
/* harmony export */   "User": function() { return /* binding */ User; },
/* harmony export */   "SecurityDto": function() { return /* binding */ SecurityDto; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_npr_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@npr/animations/fade-in-up.animation */ 65336);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ 95373);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/jwt-auth.service */ 79389);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/local-store.service */ 69122);
/* harmony import */ var _DEMO_USER__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DEMO_USER */ 8888);
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-izitoast */ 27218);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ 55314);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/api.service */ 94761);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-otp-input */ 50287);

















const _c0 = ["ngOtpInput"];
function LoginComponent_div_7_img_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 36);
} }
function LoginComponent_div_7_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 37);
} }
const _c1 = function () { return ["/forget-password"]; };
function LoginComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "User ID*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_div_7_Template_span_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r4.hide = !ctx_r4.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, LoginComponent_div_7_img_19_Template, 1, 0, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, LoginComponent_div_7_img_20_Template, 1, 0, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_div_7_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r6.getOtp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Get OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](31, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r0.signinForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", ctx_r0.hide ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r0.signinForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("MEDIAN ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](31, 7, ctx_r0.copyRightDate, "YYYY"), " - Connecting Systems");
} }
function LoginComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "form", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "h1", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Two Step Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Enter the verification code we sent to");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Type your 6 digit security code");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "ng-otp-input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onInputChange", function LoginComponent_div_9_Template_ng_otp_input_onInputChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r8.onOtpChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_div_9_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r10.signin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, " Verify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_div_9_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r11.resendOtpMethod(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, " Resend OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_div_9_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r12.backToLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, " Exit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("config", ctx_r1.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r1.isValid);
} }
class LoginComponent {
    // currentDate: any;
    // changePwdDate: any;
    constructor(router, jwtAuth, toastService, fb, cd, ls, demoUser, iziToast, spinner, apiService, roleService) {
        this.router = router;
        this.jwtAuth = jwtAuth;
        this.toastService = toastService;
        this.fb = fb;
        this.cd = cd;
        this.ls = ls;
        this.demoUser = demoUser;
        this.iziToast = iziToast;
        this.spinner = spinner;
        this.apiService = apiService;
        this.roleService = roleService;
        this.hide = true;
        this.copyRightDate = new Date();
        this.showOtpComponent = false;
        this.inputType = "password";
        this.visible = false;
        this.config = {
            allowNumbersOnly: true,
            length: 6,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: "*",
            inputStyles: { width: "50px", height: "50px" },
        };
        this.arrayOfAuthStatus = [];
        this.count = 0;
    }
    ngOnInit() {
        this.signinForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.min(3)]],
        });
        this.count = 0;
    }
    toggle() {
        setTimeout(() => {
            //  this.spinner.hide();
            this.showOtpComponent = !this.showOtpComponent;
            this.showTimer(60);
        }, 2500);
    }
    getOtp() {
        this.count++;
        console.log(this.count);
        if (this.count === 1) {
            //  this.spinner.show();
            localStorage.setItem("getOtpClicked", "true");
            let login = {};
            login.username = this.signinForm.value.username;
            login.password = this.signinForm.value.password;
            var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(this.signinForm.value.password, "@12#90!^*NPR*g&*()$34#$");
            var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(this.signinForm.value.username, "@12#90!^*NPR*g&*()$34#$");
            var data = encryptedAES.toString();
            var uname = USERNAME.toString();
            // this.skipLoginUser();
            console.log("jygjh");
            this.apiService.fetchMedUser(this.signinForm.value.username).subscribe((response) => {
                console.log(response);
                this.user = response;
                if (this.user.verifiedStatus == "U") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({ text: "User Is Unauthorized", 'icon': "error" });
                    this.count = 0;
                    return;
                }
                if (this.user.statusForUser == "Disable") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({ text: "User Is Disabled", 'icon': "error" });
                    this.count = 0;
                    return;
                }
                this.ls.setItem("departmentHeader", this.user.department);
                this.ls.setItem("LoggedInUserHeader", this.user.logoutTime);
                this.email = this.user.email;
                localStorage.setItem("userFromLogin", this.user.userId);
                sessionStorage.setItem("user_id", this.user.userId);
                if (this.user.statusForUser === "Enable" &&
                    this.user.verifiedStatus === "A") {
                    //---------- Password Policy Implementation (BEGIN) ----------
                    this.apiService.fetchSecurityPolicyService().subscribe((resp) => {
                        this.security = resp;
                        console.log(resp);
                        this.notifyPswdExpry = this.security.notifyPasswordExpiryInDays;
                        this.pswdExpiry = this.security.pswdExpiry;
                        if (this.pswdExpiry === 0 && this.notifyPswdExpry === 0) {
                            console.log("Hitting dashboard");
                            // this.router
                            //   .navigate(["/dashboard"])
                            //   .then((data) => console.log("dashboard hit", data));
                        }
                        else {
                            this.currentDate = new Date();
                            this.changePwdDate = new Date(this.user.pwdChangeDate);
                            this.differnceInTime = this.currentDate - this.changePwdDate;
                            this.differnceInDays = Math.floor(this.differnceInTime / (1000 * 3600 * 24));
                            this.finalDiff = this.pswdExpiry - this.differnceInDays;
                            if (this.finalDiff === 0 || this.finalDiff <= 0) {
                                this.toastService.errorMessage("Your Password is expired. Please reset your password.", "");
                                this.count = 0;
                            }
                            else {
                                this.check = true;
                                if (this.signinForm.value.password === "" ||
                                    this.signinForm.value.username === "") {
                                    this.toastService.errorMessage("Please enter login credentials.", "");
                                    this.count = 0;
                                }
                                else {
                                    var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(login.password, "@12#90!^*NPR*g&*()$34#$");
                                    var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(login.username, "@12#90!^*NPR*g&*()$34#$");
                                    var data = encryptedAES.toString();
                                    var uname = USERNAME.toString();
                                    login.password = data;
                                    login.username = uname;
                                    this.apiService.getOtp(login).subscribe((res) => {
                                        this.variable = res;
                                        this.otpreceivedtime = new Date();
                                        if (this.variable) {
                                            if (this.variable[0] === "Username or password wrong") {
                                                // this.toastService.errorMessage(
                                                //   "Invalid UserId or Password !!!",
                                                //   ""
                                                // );
                                                this.count = 0;
                                            }
                                            if (res.failLgnCounter != 0) {
                                                this.apiService
                                                    .fetchSecurityPolicyService()
                                                    .subscribe((sp) => {
                                                    this.security = sp;
                                                    this.invLogins = this.security.maxInvLogins;
                                                    if (this.invLogins !== 0) {
                                                        this.invLogins = this.invLogins - 1;
                                                        if (this.invLogins === res.failLgnCounter) {
                                                            this.toastService.errorMessage("Contact Admin, User Account locked after " +
                                                                `${res.failLgnCounter + 1}` +
                                                                " wrong attempts.", "");
                                                            this.count = 0;
                                                        }
                                                    }
                                                });
                                            }
                                            // ---------- Password Policy Implementation (END) ----------
                                            if (this.variable[0] === "true") {
                                                this.progress = true;
                                                this.toggle();
                                                this.toastService.successMessage("OTP sent successfully to " + this.email, "");
                                                this.loginProcessing = false;
                                                this.verifyOTP = true;
                                            }
                                            else {
                                                if (this.variable[0] === "Username or password wrong" || this.variable[0] === "User not found") {
                                                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire("Username or Password is wrong");
                                                    this.count = 0;
                                                }
                                                else {
                                                    // Swal.fire(this.variable[0]);
                                                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Account blocked, maximum failed attempts reached. To login, please do Forgot Password and then try for login.');
                                                    this.loginProcessing = false;
                                                    this.count = 0;
                                                }
                                            }
                                        }
                                    }, (err) => {
                                        this.toastService.errorMessage("Server Error", "");
                                        this.loginProcessing = false;
                                        this.count = 0;
                                    }), error => {
                                    };
                                }
                            }
                        }
                    });
                }
            }, (err) => {
                console.log(err);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire(err.error.message);
                this.count = 0;
                // this.toastService.errorMessage('Unable to update the record, server error!', '');
            });
        }
    }
    roles(user) {
        let remainingRolesToFetch = user.newRoleForUser.length;
        for (let index = 0; index < (user.newRoleForUser).length; index++) {
            this.roleService.fetchdynamicrolesdata(user.newRoleForUser[index]).subscribe(data => {
                this.arrayOfAuthStatus[index] = data.roleDto.authStatus;
                remainingRolesToFetch--;
                if (remainingRolesToFetch === 0) {
                    this.isUserRoleAuthorized();
                }
            }), error => {
            };
        }
    }
    isUserRoleAuthorized() {
        if (this.arrayOfAuthStatus.includes('A') !== true) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({ text: "Role is not authorized for the user", icon: "error" }).then((result => {
                localStorage.clear();
                sessionStorage.clear();
                this.signinForm.reset();
                this.backToLogin();
            }));
        }
        else {
            this.showToast();
        }
        this.arrayOfAuthStatus = [];
    }
    skipLoginUser() {
        this.ls.setItem("currentUser", this.demoUser.currentUser);
        this.ls.setItem("userPermissions", this.demoUser.userPermissions);
        this.ls.setItem("department", this.demoUser.department);
        this.ls.setItem("LoggedInUser", this.demoUser.LoggedInUser);
        this.ls.setItem("userobj", this.demoUser.userobj);
        this.ls.setItem("usercompleteobj", this.demoUser.usercompleteobj);
        sessionStorage.setItem("user_id", this.demoUser.currentUser);
        this.router.navigate(["/dashboard"]);
        this.jwtAuth.setUserAndToken("affsff", {}, true);
        // Skip login Section end
    }
    resendOtpMethod() {
        this.isValid = false;
        this.ngOtpInput.setValue('');
        let login = {};
        login.username = this.signinForm.value.username;
        login.password = this.signinForm.value.password;
        var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(this.signinForm.value.password, "@12#90!^*NPR*g&*()$34#$");
        var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(this.signinForm.value.username, "@12#90!^*NPR*g&*()$34#$");
        var data = encryptedAES.toString();
        var uname = USERNAME.toString();
        this.apiService
            .fetchMedUser(this.signinForm.value.username)
            .subscribe((response) => {
            this.user = response;
            this.email = this.user.email;
            localStorage.setItem("userFromLogin", this.user.userId);
            sessionStorage.setItem("user_id", this.user.userId);
            if (this.user.statusForUser === "Enable" &&
                this.user.verifiedStatus === "A") {
                //---------- Password Policy Implementation (BEGIN) ----------
                this.apiService.fetchSecurityPolicyService().subscribe((resp) => {
                    this.security = resp;
                    this.notifyPswdExpry = this.security.notifyPasswordExpiryInDays;
                    this.pswdExpiry = this.security.pswdExpiry;
                    if (this.pswdExpiry === 0 && this.notifyPswdExpry === 0) {
                    }
                    else {
                        this.currentDate = new Date();
                        this.changePwdDate = new Date(this.user.pwdChangeDate);
                        this.differnceInTime = this.currentDate - this.changePwdDate;
                        this.differnceInDays = Math.floor(this.differnceInTime / (1000 * 3600 * 24));
                        this.finalDiff = this.pswdExpiry - this.differnceInDays;
                        if (this.finalDiff === 0 || this.finalDiff <= 0) {
                            this.toastService.errorMessage("Your Password is expired. Please reset your password.", "");
                        }
                        else {
                            this.check = true;
                            if (this.signinForm.value.password === "" ||
                                this.signinForm.value.username === "") {
                                this.toastService.errorMessage("Please enter login credentials.", "");
                            }
                            else {
                                var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(login.password, "@12#90!^*NPR*g&*()$34#$");
                                var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(login.username, "@12#90!^*NPR*g&*()$34#$");
                                var data = encryptedAES.toString();
                                var uname = USERNAME.toString();
                                login.password = data;
                                login.username = uname;
                                this.apiService.getOtp(login).subscribe((res) => {
                                    this.variable = res;
                                    this.otpreceivedtime = new Date();
                                    if (this.variable) {
                                        if (this.variable[0] === "Username or password wrong") {
                                            this.toastService.errorMessage("Invalid UserId or Password !!!", "");
                                        }
                                        if (res.failLgnCounter != 0) {
                                            this.apiService
                                                .fetchSecurityPolicyService()
                                                .subscribe((sp) => {
                                                this.security = sp;
                                                this.invLogins = this.security.maxInvLogins;
                                                if (this.invLogins !== 0) {
                                                    this.invLogins = this.invLogins - 1;
                                                    if (this.invLogins === res.failLgnCounter) {
                                                        this.toastService.errorMessage("Contact Admin, User Account locked after " +
                                                            `${res.failLgnCounter + 1}` +
                                                            " wrong attempts.", "");
                                                    }
                                                }
                                            });
                                        }
                                        // ---------- Password Policy Implementation (END) ----------
                                        if (this.variable[0] === "true") {
                                            this.progress = true;
                                            this.toastService.successMessage("OTP sent successfully to " + this.email, "");
                                            this.loginProcessing = false;
                                            this.verifyOTP = true;
                                        }
                                        else {
                                        }
                                    }
                                }, (err) => {
                                    this.toastService.errorMessage("Server Error", "");
                                    this.loginProcessing = false;
                                });
                            }
                        }
                    }
                });
            }
        });
    }
    signin() {
        let otp = {};
        otp.username = this.signinForm.value.username;
        otp.otp = this.otp;
        this.apiService.loginService(otp).subscribe((res) => {
            this.responseforotp = res;
            if (this.responseforotp[0] == "OTP is invalid") {
                this.toastService.errorMessage("Enter the Valid OTP.", "");
            }
            this.apiService.fetchMedUser(otp.username).subscribe((response) => {
                this.user = response;
                // if (this.responseforotp) {
                if (this.user != null) {
                    if (this.responseforotp[0] == "Time Expired") {
                        this.toastService.errorMessage("This OTP is expired. Please click on Resend OTP to get a new OTP.", "");
                        this.check = false;
                    }
                    this.loginProcessing = false;
                    this.user = this.responseforotp[1];
                    this.loginProcessing = false;
                    localStorage.setItem("userFromLogin", this.user.userId);
                    sessionStorage.setItem("user_id", this.user.userId);
                    if (this.user.statusForUser === "Enable" &&
                        this.user.verifiedStatus === "A") {
                        //---------- Password Policy Implementation (BEGIN) ----------
                        this.apiService.fetchSecurityPolicyService().subscribe((resp) => {
                            this.security = resp;
                            this.notifyPswdExpry = this.security.notifyPasswordExpiryInDays;
                            this.pswdExpiry = this.security.pswdExpiry;
                            if (this.pswdExpiry === 0 && this.notifyPswdExpry === 0) {
                                // this.router
                                //   .navigate(["/dashboard"])
                                //   .then((data) => console.log("dashboard hit", data));
                                this.count = 0;
                            }
                            else {
                                this.currentDate = new Date();
                                this.changePwdDate = new Date(this.user.pwdChangeDate);
                                this.differnceInTime = this.currentDate - this.changePwdDate;
                                this.differnceInDays = Math.floor(this.differnceInTime / (1000 * 3600 * 24));
                                this.finalDiff = this.pswdExpiry - this.differnceInDays;
                                if (this.finalDiff === 0 || this.finalDiff <= 0) {
                                    this.toastService.errorMessage("Your password expired, Please change your password", "");
                                    this.router
                                        .navigate(["/forget-password"])
                                        .then((data) => console.log("Forget password hit", data));
                                }
                                else {
                                    //---------- Password Policy Implementation (END) ----------
                                    // this.router.navigate(["/dashboard"])
                                    //---------- Password Policy Implementation (BEGIN) ----------
                                    this.currentUser = localStorage.getItem("currentUser");
                                    this.apiService
                                        .fetchMedUser(otp.username)
                                        .subscribe((response) => {
                                        this.userEntity = response;
                                        console.log("userEntity ", this.userEntity);
                                        this.apiService.fetchSecurityPolicyService().subscribe(resp => {
                                            this.security = resp;
                                            this.notifyPswdExpry = this.security.notifyPasswordExpiryInDays;
                                            this.pswdExpiry = this.security.pswdExpiry;
                                            if (this.pswdExpiry !== 0 && this.notifyPswdExpry !== 0) {
                                                this.currentDate = new Date();
                                                this.changePwdDate = new Date(this.userEntity.pwdChangeDate);
                                                this.differnceInTime = this.currentDate - this.changePwdDate;
                                                this.differnceInDays = Math.floor(this.differnceInTime / (1000 * 3600 * 24));
                                                console.log("today's date ", this.currentDate);
                                                console.log("pswd created date ", this.changePwdDate);
                                                console.log("no of days diff ", this.differnceInDays);
                                                this.finalDiff = this.pswdExpiry - this.differnceInDays;
                                                console.log("notify user on password expiry", this.notifyPswdExpry);
                                                console.log("pwd expiry ", this.security.pswdExpiry);
                                                console.log("final diff", this.finalDiff);
                                                if (this.finalDiff > 0 && this.finalDiff <= this.notifyPswdExpry) {
                                                    this.toastService.errorMessage("Your password will expire in " +
                                                        `${this.finalDiff}` +
                                                        " day(s)", "");
                                                }
                                                this.roles(this.user);
                                            }
                                        });
                                    });
                                    //  ---------- Password Policy Implementation (END) ----------
                                }
                            }
                        });
                    }
                    this.roleService.fetchNewRolePermissions(this.user.userId);
                }
            });
        }, (err) => {
            this.loginProcessing = false;
            this.toastService.errorMessage("Server Error ", "");
        });
    }
    routing() {
        console.log(this.userEntity);
        this.jwtAuth.signin().subscribe((response) => {
            setTimeout(() => {
                this.ls.setItem("currentUser", this.userEntity.userId);
                this.ls.setItem("userobj", this.userEntity);
                this.ls.setItem("usercompleteobj", this.userEntity);
                this.router.navigate(["/dashboard"]);
                this.iziToast.show({
                    title: `DTB - Median!`,
                    message: `Welcome, ${this.userEntity.userId}!`,
                    image: "assets/images/user.png",
                    icon: "ico ico-success",
                    // theme:"dark",
                    layout: 2,
                    // imageWidth:50,
                    balloon: false,
                    position: "topRight",
                    progressBarColor: "red",
                    pauseOnHover: true,
                });
            }, 2500);
        }, (err) => {
            // console.log(err);
        });
    }
    getUser() {
        this.user1 = localStorage.getItem("userobj");
        this.apiService.fetchMedUser(JSON.parse(this.user1).userId).subscribe((response) => {
            this.initTheme(response.screenThemeSelected);
        });
    }
    initTheme(bgClass) {
        var lastBg = bgClass === "theme2" ? "theme2" : "theme1";
        $('body').removeClass(lastBg).addClass(bgClass);
        this.lastBg = bgClass;
        $('.ddParent').removeClass('actDD');
        ;
        if (bgClass === "theme1") {
            console.log($('#themeChangeRadio:nth-child(1)'));
            $('[data-id="theme1"]').addClass('active');
            $('[data-id="theme2"]').removeClass('active');
        }
        else {
            $('[data-id="theme1"]').removeClass('active');
            $('[data-id="theme2"]').addClass('active');
        }
    }
    showToast() {
        this.ls.setItem("currentUser", this.userEntity.userId);
        this.ls.setItem("userobj", this.userEntity);
        this.ls.setItem("usercompleteobj", this.userEntity);
        if (this.userEntity.logoutTime === null && this.userEntity.passwordGenerationType === 'Auto') {
            this.router.navigate(["/change-password"]);
        }
        else {
            this.router.navigate(["/dashboard"]);
        }
        this.iziToast.show({
            title: `DTB - Median!`,
            message: `Welcome, ${this.userEntity.userId}!`,
            image: "assets/images/user.png",
            icon: "ico ico-success",
            // theme:"dark",
            layout: 2,
            // imageWidth:50,
            balloon: false,
            position: "topRight",
            progressBarColor: "red",
            pauseOnHover: true,
        });
    }
    backToLogin() {
        this.showOtpComponent = false;
        this.count = 0;
    }
    onOtpChange(otp) {
        this.otp = otp;
        if (this.otp.length === 6) {
            this.isValid = true;
            const signinData = this.signinForm.value;
        }
    }
    showTimer(remaining) {
        let timerOn = true;
        this.m = Math.floor(remaining / 60);
        this.s = remaining % 60;
        this.m = this.m < 10 ? "0" + this.m : this.m;
        this.s = this.s < 10 ? "0" + this.s : this.s;
        this.cd.detectChanges();
        remaining -= 1;
        if (remaining >= 0 && timerOn) {
            setTimeout(() => {
                this.showTimer(remaining);
            }, 1000);
            return;
        }
        if (!timerOn) {
            // Do validate stuff here
            return;
        }
        // Do timeout stuff here
        this.timeOutOtp = true;
        this.m = null;
        this.s = null;
        this.cd.markForCheck();
    }
    toggleVisibility() {
        if (this.visible) {
            this.inputType = "password";
            this.visible = false;
            this.cd.markForCheck();
        }
        else {
            this.inputType = "text";
            this.visible = true;
            this.cd.markForCheck();
        }
    }
    resendOtp() {
        this.timeOutOtp = false;
        this.showTimer(60);
    }
    obscureEmail(email) {
        const [name, domain] = email.split("@");
        return `${name.substring(0, 5)}${new Array(name.length).join("*")}@${domain}`;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__.JwtAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__.LocalStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_DEMO_USER__WEBPACK_IMPORTED_MODULE_6__.DEMO_USER), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_7__.Ng2IzitoastService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_8__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_9__.RoleService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["npr-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.ngOtpInput = _t.first);
    } }, decls: 14, vars: 2, consts: [[1, "bg-white"], [1, "loginLogoCol", "text-center", "text-lg-start"], ["href", "JavaScript:void(0)"], ["src", "assets/images/logo.png", "alt", "logo"], [1, "container"], [1, "row", "g-0", "loginRow", "align-items-center"], [1, "col-lg-6", 2, "margin-top", "3%"], ["class", "loginFormCol", 4, "ngIf"], [1, "loginFormCol"], ["class", "loginCol", 4, "ngIf"], [1, "col-lg-6"], [1, "loginImgCol", "d-none", "d-lg-block"], ["src", "assets/images/login-img.svg", "alt", "loginimg"], ["size", "small", "type", "square-loader"], [1, "loginCol"], [1, "lgTitle", "secondaryColor"], [1, "loginFormStyle"], [1, "row", "g-4", 3, "formGroup"], [1, "col-12"], ["for", "exampleInputEmail1", 1, "form-label", "lblStyles"], ["type", "text", "autofocus", "autofocus", "oninput", "this.value = this.value.toUpperCase()", "formControlName", "username", "id", "exampleInputEmail1", "placeholder", "Your User Id", 1, "form-control", "lineField"], [1, "row"], [1, "col"], ["for", "exampleInputPassword1", 1, "form-label", "lblStyles"], [1, "inputField"], [1, "inputField", "pwdFldCol", "d-flex"], ["type", "password", "formControlName", "password", "id", "pwdFld", "placeholder", "Your Password", 1, "form-control", "lineField", 3, "type"], ["toggle", "#pwdFld", 1, "alignSelf", 3, "click"], ["class", "showPwd", "src", "assets/images/show-icon.svg", "alt", "...", 4, "ngIf"], ["class", "hidePwd", "src", "assets/images/hide-icon.svg", "alt", "...", 4, "ngIf"], ["type", "submit", 1, "btn", "btnPrimary", "w-100", "btnLg", "roundedBorder", 3, "disabled", "click"], [1, "float"], [1, "primaryColor", "fpLink", 3, "routerLink"], [1, "rumanogoCol", "text-center", "pt-3"], ["src", "assets/images/rumango-img.png", "alt", "rumango-img"], [1, "medainStyle", "mt-3"], ["src", "assets/images/show-icon.svg", "alt", "...", 1, "showPwd"], ["src", "assets/images/hide-icon.svg", "alt", "...", 1, "hidePwd"], [1, "form", "w-100", "mb-10"], [1, "text-center", "mb-10"], ["alt", "Logo", "src", "assets/images/smartphone.svg", 1, "mh-125px"], [1, "text-dark", "mb-3"], [1, "text-muted", "fw-bold", "fs-5", "mb-5"], [1, "fw-bolder", "text-dark", "fs-3"], [1, "mb-10", "px-md-10"], [1, "fw-bolder", "text-start", "text-dark", "fs-6", "mb-1", "ms-1"], [1, "d-flex", "flex-wrap", "flex-stack"], ["inputControls", "6", 3, "config", "onInputChange"], ["ngOtpInput", ""], [1, "d-flex", 2, "gap", "10px"], ["type", "button", 1, "btn", "btn-lg", "btnPrimary", "fw-bolder", 3, "disabled", "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 32, 11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 24, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "ngx-spinner", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.showOtpComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showOtpComponent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, ng_otp_input__WEBPACK_IMPORTED_MODULE_15__.NgOtpInputComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: [".flex-stack[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.flex-center[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n}\n\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap !important;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.mh-125px[_ngcontent-%COMP%] {\n  max-height: 90px !important;\n}\n\n.border-hover[_ngcontent-%COMP%]:not(:hover):not(:focus):not(.active):not(:active) {\n  cursor: pointer;\n  border-color: transparent !important;\n}\n\n.form-control.form-control-solid[_ngcontent-%COMP%] {\n  background-color: #f5f8fa;\n  border-color: #f5f8fa;\n  color: #5e6278;\n  transition: color 0.2s ease, background-color 0.2s ease;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.fs-2qx[_ngcontent-%COMP%] {\n  font-size: calc(1.35rem + 1.2vw) !important;\n}\n\n.my-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.mx-1[_ngcontent-%COMP%] {\n  margin-right: 0.25rem !important;\n  margin-left: 0.25rem !important;\n}\n\n.h-60px[_ngcontent-%COMP%] {\n  height: 60px !important;\n}\n\n.w-60px[_ngcontent-%COMP%] {\n  width: 60px !important;\n}\n\n.text-dark[_ngcontent-%COMP%] {\n  color: #181c32 !important;\n}\n\n.text-dark[_ngcontent-%COMP%] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-dark[_ngcontent-%COMP%] {\n  color: #181c32 !important;\n}\n\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem !important;\n}\n\n.h1[_ngcontent-%COMP%], h1[_ngcontent-%COMP%] {\n  font-size: calc(1.3rem + .6vw);\n}\n\n.text-start[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n.fw-bolder[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: #a1a5b7 !important;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  --bs-text-opacity: 1;\n  color: #a1a5b7 !important;\n}\n\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 500 !important;\n}\n\n.fs-5[_ngcontent-%COMP%] {\n  font-size: 1.15rem !important;\n}\n\n.mb-5[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem !important;\n}\n\n.fs-6[_ngcontent-%COMP%] {\n  font-size: 1.075rem !important;\n}\n\n.ms-1[_ngcontent-%COMP%] {\n  margin-left: 0.25rem !important;\n}\n\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem !important;\n}\n\n.mb-10[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem !important;\n}\n\n.fs-3[_ngcontent-%COMP%] {\n  font-size: calc(1.26rem + .12vw) !important;\n}\n\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksMEJBQUE7QUFHSjs7QUFEQTtFQUNJLHdCQUFBO0FBSUo7O0FBRkE7RUFDSSwyQkFBQTtBQUtKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLG9DQUFBO0FBS0o7O0FBSEE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHVEQUFBO0FBTUo7O0FBSkE7RUFDSSwyQkFBQTtBQU9KOztBQUpBO0VBQ0ksMkNBQUE7QUFPSjs7QUFMQTtFQUNJLDZCQUFBO0VBQ0EsZ0NBQUE7QUFRSjs7QUFOQTtFQUNJLGdDQUFBO0VBQ0EsK0JBQUE7QUFTSjs7QUFQQTtFQUNJLHVCQUFBO0FBVUo7O0FBUkE7RUFDSSxzQkFBQTtBQVdKOztBQVRBO0VBQ0kseUJBQUE7QUFZSjs7QUFUQTtFQUNJLG9CQUFBO0VBQ0Esa0VBQUE7QUFZSjs7QUFWQTtFQUNJLHlCQUFBO0FBYUo7O0FBWEE7RUFDSSxpQ0FBQTtBQWNKOztBQVpBO0VBQ0ksOEJBQUE7QUFlSjs7QUFaQTtFQUNJLDJCQUFBO0FBZUo7O0FBYkE7RUFDSSwyQkFBQTtBQWdCSjs7QUFkQTtFQUNJLHlCQUFBO0FBaUJKOztBQWRBO0VBQ0ksb0JBQUE7RUFDQSx5QkFBQTtBQWlCSjs7QUFmQTtFQUNJLDJCQUFBO0FBa0JKOztBQWhCQTtFQUNJLDZCQUFBO0FBbUJKOztBQWpCQTtFQUNJLGlDQUFBO0FBb0JKOztBQWxCQTtFQUNJLDhCQUFBO0FBcUJKOztBQW5CQTtFQUNJLCtCQUFBO0FBc0JKOztBQXBCQTtFQUNJLGlDQUFBO0FBdUJKOztBQXJCQTtFQUNJLGdDQUFBO0FBd0JKOztBQXRCQTtFQUNJLDJDQUFBO0FBeUJKOztBQXRCQTtFQUNJLHNCQUFBO0FBeUJKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtc3RhY2sge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZmxleC1jZW50ZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mbGV4LXdyYXAge1xyXG4gICAgZmxleC13cmFwOiB3cmFwIWltcG9ydGFudDtcclxufVxyXG4uZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG59XHJcbi5taC0xMjVweCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1ob3Zlcjpub3QoOmhvdmVyKTpub3QoOmZvY3VzKTpub3QoLmFjdGl2ZSk6bm90KDphY3RpdmUpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wuZm9ybS1jb250cm9sLXNvbGlkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY4ZmE7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNWY4ZmE7XHJcbiAgICBjb2xvcjogIzVlNjI3ODtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2U7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZzLTJxeCB7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMS4zNXJlbSArIDEuMnZ3KSFpbXBvcnRhbnQ7XHJcbn1cclxuLm15LTIge1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLm14LTEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtIWltcG9ydGFudDtcclxufVxyXG4uaC02MHB4IHtcclxuICAgIGhlaWdodDogNjBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLnctNjBweCB7XHJcbiAgICB3aWR0aDogNjBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtZGFyayB7XHJcbiAgICBjb2xvcjogIzE4MWMzMiFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWRhcmsge1xyXG4gICAgLS1icy10ZXh0LW9wYWNpdHk6IDE7XHJcbiAgICBjb2xvcjogcmdiYSh2YXIoLS1icy1kYXJrLXJnYiksdmFyKC0tYnMtdGV4dC1vcGFjaXR5KSkhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LWRhcmsge1xyXG4gICAgY29sb3I6ICMxODFjMzIhaW1wb3J0YW50O1xyXG59XHJcbi5tYi0zIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW0haW1wb3J0YW50O1xyXG59XHJcbi5oMSwgaDEge1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDEuM3JlbSArIC42dncpO1xyXG59XHJcblxyXG4udGV4dC1zdGFydCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0IWltcG9ydGFudDtcclxufVxyXG4uZnctYm9sZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LW11dGVkIHtcclxuICAgIGNvbG9yOiAjYTFhNWI3IWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtbXV0ZWQge1xyXG4gICAgLS1icy10ZXh0LW9wYWNpdHk6IDE7XHJcbiAgICBjb2xvcjogI2ExYTViNyFpbXBvcnRhbnQ7XHJcbn1cclxuLmZ3LWJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCFpbXBvcnRhbnQ7XHJcbn1cclxuLmZzLTUge1xyXG4gICAgZm9udC1zaXplOiAxLjE1cmVtIWltcG9ydGFudDtcclxufVxyXG4ubWItNSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtIWltcG9ydGFudDtcclxufVxyXG4uZnMtNiB7XHJcbiAgICBmb250LXNpemU6IDEuMDc1cmVtIWltcG9ydGFudDtcclxufVxyXG4ubXMtMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLm1iLTEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLm1iLTEwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLmZzLTMge1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDEuMjZyZW0gKyAuMTJ2dykhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuaW1nLCBzdmcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufSJdfQ== */"], data: { animation: [src_npr_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms] }, changeDetection: 0 });
class User {
}
class SecurityDto {
}


/***/ }),

/***/ 33794:
/*!**************************************************!*\
  !*** ./src/app/views/auth/login/login.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": function() { return /* binding */ LoginModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 93140);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 2783);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _DEMO_USER__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DEMO_USER */ 8888);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ 50287);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 55314);
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-izitoast */ 27218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);









class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_DEMO_USER__WEBPACK_IMPORTED_MODULE_2__.DEMO_USER], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_7__.NgOtpInputModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule,
            ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__.Ng2IziToastModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_7__.NgOtpInputModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule,
        ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__.Ng2IziToastModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_auth_login_login_module_ts-es2015.js.map