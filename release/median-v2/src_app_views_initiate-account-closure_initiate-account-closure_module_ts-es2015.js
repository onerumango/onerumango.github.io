"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_initiate-account-closure_initiate-account-closure_module_ts"],{

/***/ 58179:
/*!*********************************************************************!*\
  !*** ./src/app/shared/models/FetchUserForSingleAccClosureReqDTO.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchUserForSingleAccClosureReqDTO": function() { return /* binding */ FetchUserForSingleAccClosureReqDTO; }
/* harmony export */ });
class FetchUserForSingleAccClosureReqDTO {
    map(arg0) {
        throw new Error("Method not implemented.");
    }
}


/***/ }),

/***/ 47833:
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/initiate-account-closure/account-closure-details/account-closure-details.component.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountClosureDetailsComponent": function() { return /* binding */ AccountClosureDetailsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/FetchUserForSingleAccClosureReqDTO */ 58179);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/account-closure-service.service */ 60965);
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-izitoast */ 27218);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);










function AccountClosureDetailsComponent_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please Select Account Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountClosureDetailsComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AccountClosureDetailsComponent_div_33_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.accountClosureForm.controls["accountType"].errors.required);
} }
function AccountClosureDetailsComponent_div_34_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please Enter Account Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountClosureDetailsComponent_div_34_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AccountClosureDetailsComponent_div_34_div_6_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.accountClosureForm.controls["accountNumber"].errors.required);
} }
function AccountClosureDetailsComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AccountClosureDetailsComponent_div_34_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.fetchUserSingle.accountNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AccountClosureDetailsComponent_div_34_div_6_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r1.editFlag)("ngModel", ctx_r1.fetchUserSingle.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.accountClosureForm.controls["accountNumber"].invalid && (ctx_r1.accountClosureForm.controls["accountNumber"].dirty || ctx_r1.accountClosureForm.controls["accountNumber"].touched));
} }
function AccountClosureDetailsComponent_div_35_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please Enter Branch Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountClosureDetailsComponent_div_35_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AccountClosureDetailsComponent_div_35_div_6_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.accountClosureForm.controls["branchCode"].errors.required);
} }
function AccountClosureDetailsComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Branch Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AccountClosureDetailsComponent_div_35_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.fetchUserSingle.branchCode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AccountClosureDetailsComponent_div_35_div_6_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r2.editFlag)("ngModel", ctx_r2.fetchUserSingle.branchCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.accountClosureForm.controls["branchCode"].invalid && (ctx_r2.accountClosureForm.controls["branchCode"].dirty || ctx_r2.accountClosureForm.controls["branchCode"].touched));
} }
function AccountClosureDetailsComponent_div_36_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please Enter Reason For Closure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountClosureDetailsComponent_div_36_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AccountClosureDetailsComponent_div_36_div_6_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r17.accountClosureForm.controls["reasonForClosure"].errors.required);
} }
function AccountClosureDetailsComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Reason For Closure");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AccountClosureDetailsComponent_div_36_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.fetchUserSingle.reasonForClosure = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AccountClosureDetailsComponent_div_36_div_6_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r3.editFlag)("ngModel", ctx_r3.fetchUserSingle.reasonForClosure);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.accountClosureForm.controls["reasonForClosure"].invalid && (ctx_r3.accountClosureForm.controls["reasonForClosure"].dirty || ctx_r3.accountClosureForm.controls["reasonForClosure"].touched));
} }
function AccountClosureDetailsComponent_div_37_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r21.fileName);
} }
function AccountClosureDetailsComponent_div_37_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r22.fetchUserSingle.fileName);
} }
function AccountClosureDetailsComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AccountClosureDetailsComponent_div_37_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r23.selectFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AccountClosureDetailsComponent_div_37_p_5_Template, 2, 1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AccountClosureDetailsComponent_div_37_p_6_Template, 2, 1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r4.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.fetchUserSingle.closureType == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.fetchUserSingle.closureType != undefined);
} }
function AccountClosureDetailsComponent_div_38_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_38_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r27.onSubmitFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Submit File");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r25.submitFile && ctx_r25.accountClosureForm.controls["accountType"].invalid);
} }
function AccountClosureDetailsComponent_div_38_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_38_div_3_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r29.onSubmitSingle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r26.accountClosureForm.invalid);
} }
function AccountClosureDetailsComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AccountClosureDetailsComponent_div_38_div_2_Template, 3, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AccountClosureDetailsComponent_div_38_div_3_Template, 3, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_38_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r31.generateExcel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "View Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r5.singleCall);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.singleCall);
} }
function AccountClosureDetailsComponent_div_39_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_39_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r42.editValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountClosureDetailsComponent_div_39_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_39_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r44.onSubmitFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Submit File");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r34.submitFile && ctx_r34.accountClosureForm.controls["accountType"].invalid);
} }
function AccountClosureDetailsComponent_div_39_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_39_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r46.onSubmitOfSingleClosure(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r35.accountClosureForm.invalid);
} }
function AccountClosureDetailsComponent_div_39_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_39_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r48.onclickOfAuth(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Auth");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountClosureDetailsComponent_div_39_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_39_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r50.onclickOfReopen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Reopen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountClosureDetailsComponent_div_39_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_39_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r52.onclickOfClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountClosureDetailsComponent_div_39_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountClosureDetailsComponent_div_39_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_39_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r54.onClickOfViewToData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "View Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountClosureDetailsComponent_div_39_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_39_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r56.onClickOfViewToDatabulk(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "View Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AccountClosureDetailsComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AccountClosureDetailsComponent_div_39_div_2_Template, 3, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AccountClosureDetailsComponent_div_39_div_3_Template, 3, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AccountClosureDetailsComponent_div_39_div_4_Template, 3, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AccountClosureDetailsComponent_div_39_div_5_Template, 3, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AccountClosureDetailsComponent_div_39_div_6_Template, 3, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AccountClosureDetailsComponent_div_39_div_7_Template, 3, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AccountClosureDetailsComponent_div_39_div_8_Template, 3, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AccountClosureDetailsComponent_div_39_div_9_Template, 3, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AccountClosureDetailsComponent_div_39_div_10_Template, 3, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r6.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r6.singleCall && ctx_r6.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.singleCall && ctx_r6.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.fetchUserSingle.verifiedStatus == "UNAUTHORIZED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.fetchUserSingle.recordStatus == "CLOSE" && ctx_r6.fetchUserSingle.verifiedOnce == "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.fetchUserSingle.recordStatus == "OPEN" && ctx_r6.fetchUserSingle.verifiedOnce == "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.fetchUserSingle.verifiedOnce == "NO" && ctx_r6.fetchUserSingle.verifiedStatus == "UNAUTHORIZED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.fetchUserSingle.closureType == "SINGLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.fetchUserSingle.closureType == "BULK");
} }
function AccountClosureDetailsComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Maker");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Maker Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Record Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Checker");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Checker Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "First Time Auth");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Auth Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](91, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "Modification Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](96, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.fetchUserSingle.makerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](26, 6, ctx_r7.fetchUserSingle.makerInputTime, "MM/dd/yyyy, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.fetchUserSingle.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.fetchUserSingle.verifiedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.fetchUserSingle.verifiedOnce);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.fetchUserSingle.verifiedStatus);
} }
class AccountClosureDetailsComponent {
    constructor(formBuilder, cdr, router, accClosure, iziToast, route, roleService) {
        this.formBuilder = formBuilder;
        this.cdr = cdr;
        this.router = router;
        this.accClosure = accClosure;
        this.iziToast = iziToast;
        this.route = route;
        this.roleService = roleService;
        this.fetchUserSingle = new src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__.FetchUserForSingleAccClosureReqDTO();
        this.fetch = new src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__.FetchUserForSingleAccClosureReqDTO();
        this.editFlag = false;
        this.selected = 'dormant';
        this.accountClosure = new src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__.FetchUserForSingleAccClosureReqDTO();
        this.submitFile = true;
        this.modifyScreen = false;
    }
    ngOnInit() {
        this.currentUser = localStorage.getItem('currentUser').replace(/['"]+/g, '');
        this.navSubscription = this.roleService.getNavParam.subscribe(data => this.initiateAccClosure = data);
        this.accountClosureForm = this.formBuilder.group({
            closureType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            accountType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9 \-\']+')]],
            branchCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9 \-\']+')]],
            reasonForClosure: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
        this.accountClosureForm.get('closureType').setValue('BULK');
        localStorage.setItem('CLOSURETYPE', this.accountClosureForm.value.closureType);
        console.log(this.initiateAccClosure.queryParams);
        // if(this.route.snapshot.queryParams.closureType){
        //   console.log("Query params");
        //   this.modifyScreen=true;
        //   this.editFlag = true;
        // }
        this.fetchUserSingle.id = this.initiateAccClosure.queryParams.id;
        this.fetchUserSingle.modNo = this.initiateAccClosure.queryParams.modNo;
        this.fetchUserSingle.closureType = this.initiateAccClosure.queryParams.closureType;
        this.fetchUserSingle.accountNumber = this.initiateAccClosure.queryParams.accountNumber;
        this.fetchUserSingle.accountType = this.initiateAccClosure.queryParams.accountType;
        this.fetchUserSingle.recordStatus = this.initiateAccClosure.queryParams.record;
        this.fetchUserSingle.verifiedStatus = this.initiateAccClosure.queryParams.verifiedStatus;
        this.fetchUserSingle.inputBy = this.initiateAccClosure.queryParams.inputBy;
        this.fetchUserSingle.inputTime = this.initiateAccClosure.queryParams.inputTime;
        // this.fetchUserSingle.modNo = params.modNo
        this.fetchUserSingle.verifiedOnce = this.initiateAccClosure.queryParams.verifiedfirst;
        this.fetchUserSingle.verifiedBy = this.initiateAccClosure.queryParams.verifiedBy;
        this.fetchUserSingle.fileName = this.initiateAccClosure.queryParams.fileName;
        this.fetchUserSingle.branchCode = this.initiateAccClosure.queryParams.branch;
        this.fetchUserSingle.reasonForClosure = this.initiateAccClosure.queryParams.reason;
        this.fetchUserSingle.processStatus = this.initiateAccClosure.queryParams.processStatus;
        this.fetchUserSingle.accountLinkageDesc = this.initiateAccClosure.queryParams.Desc;
        //--------------------------------------------
        this.fetchUserSingle.closeStatusInputBy = this.initiateAccClosure.queryParams.closeStatusInputBy;
        this.fetchUserSingle.closeStatusInputTime = this.initiateAccClosure.queryParams.closeStatusInputTime;
        this.fetchUserSingle.closeStatus = this.initiateAccClosure.queryParams.closeStatus;
        this.fetchUserSingle.icliqAvlBal = this.initiateAccClosure.queryParams.icliqAvlBal;
        this.fetchUserSingle.icliqBalance = this.initiateAccClosure.queryParams.icliqBalance;
        this.fetchUserSingle.icliqStatus = this.initiateAccClosure.queryParams.icliqStatus;
        this.fetchUserSingle.makerId = this.initiateAccClosure.queryParams.makerId;
        this.fetchUserSingle.makerInputTime = this.initiateAccClosure.queryParams.makerInputTime;
        this.fetchUserSingle.accls = this.initiateAccClosure.queryParams.accls;
        this.fetchUserSingle.lastTransactionDetail = this.initiateAccClosure.queryParams.lastTransactionDetail;
        this.fetchUserSingle.blockedAmount = this.initiateAccClosure.queryParams.blockedAmount;
        this.fetchUserSingle.deStatus = this.initiateAccClosure.queryParams.deStatus;
        this.fetchUserSingle.linkedAccounts = this.initiateAccClosure.queryParams.linkedAccounts;
        this.fetchUserSingle.checkerId = this.initiateAccClosure.queryParams.checkerId;
        this.fetchUserSingle.checkerInputTime = this.initiateAccClosure.queryParams.checkerInputTime;
        //--------------------------------------------
        // this.id=params['id']
        // console.log("idddd",this.id);
        // });
        console.log(this.fetchUserSingle);
        console.log(this.fetchUserSingle.verifiedStatus);
        if (this.fetchUserSingle.closureType == 'SINGLE') {
            this.data = 'SINGLE';
            console.log('inside bulk', this.fetchUserSingle.closureType);
        }
        else {
            this.data = 'BULK';
            this.data = this.singleCall;
        }
        this.cdr.markForCheck();
        console.log(this.fetchUserSingle.accountType);
        this.selected = this.fetchUserSingle.accountType;
        console.log(this.selected);
        this.radioSelectred = this.fetchUserSingle.closureType;
        // this.accClosure.gettingEditData(this.currentUser).subscribe(dataOfdit => {
        //   console.log(dataOfdit);
        // })
        if (this.fetchUserSingle.recordStatus == 'C') {
            this.fetchUserSingle.recordStatus = 'CLOSE';
        }
        if (this.fetchUserSingle.recordStatus == 'O') {
            this.fetchUserSingle.recordStatus = 'OPEN';
        }
        if (this.fetchUserSingle.verifiedStatus == 'U') {
            this.fetchUserSingle.verifiedStatus = 'UNAUTHORIZED';
        }
        if (this.fetchUserSingle.verifiedOnce == 'A') {
            this.fetchUserSingle.verifiedOnce = 'AUTHORIZED';
        }
        if (this.fetchUserSingle.verifiedOnce == 'Y') {
            this.fetchUserSingle.verifiedOnce = 'YES';
        }
        if (this.fetchUserSingle.verifiedOnce == 'N') {
            this.fetchUserSingle.verifiedOnce = 'NO';
        }
        this.cdr.markForCheck();
    }
    onClickOfBulk() {
        console.log("this is bulk call");
        this.singleCall = false;
        this.accountClosureForm.get('closureType').setValue('BULK');
        localStorage.setItem('CLOSURETYPE', this.accountClosureForm.value.closureType);
    }
    onclickOfSingle() {
        console.log("this is single call");
        this.singleCall = true;
        this.accountClosureForm.get('closureType').setValue('SINGLE');
        localStorage.setItem('CLOSURETYPE', this.accountClosureForm.value.closureType);
    }
    selectFile(event) {
        if (!this.accountClosureForm.get('accountType').value) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: "Please enter Account Type",
                icon: 'error'
            });
        }
        else {
            this.selectedFiles = event.target.files;
            this.sizeOfFile = this.selectedFiles.item(0).size;
            console.log(this.sizeOfFile);
            console.log(this.selectedFiles);
            console.log(this.selectedFiles[0].name);
            this.fileName = this.selectedFiles[0].name;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: "File Uploaded Successfully",
                icon: 'success'
            });
            // this.showProgressBar=true;
            setTimeout(() => {
                // this.showProgressBar=false;
            }, 8000);
            this.submitFile = false;
        }
    }
    onSubmitSingle(data) {
        console.log("on submit Single", data);
        console.log(this.accountClosureForm.value);
        // this.accountClosure.accountNumber = this.accountClosureForm.get('accountNumber').value;
        // this.accountClosure.accountType = this.accountClosureForm.get('accountType').value;
        // this.accountClosure.branchCode = this.accountClosureForm.get('branchCode').value;
        // this.accountClosure.reasonForClosure = this.accountClosureForm.get('reasonForClosure').value;
        console.log(this.accountClosureForm);
        console.log(this.accountClosureForm.value);
        this.fetchUserSingle.inputBy = this.currentUser;
        // this.showProgressBarSingle=true;
        this.accClosure.onSingleClosure(this.accountClosureForm.value, this.fetchUserSingle.inputBy).subscribe(singleClosureData => {
            console.log(singleClosureData);
            console.log(singleClosureData.errorDesc);
            let responseMsg = singleClosureData.errorDesc;
            if (responseMsg == 'S' || responseMsg === "S") {
                this.fetchUserSingle = singleClosureData;
                console.log(this.fetchUserSingle);
                console.log(this.fetchUserSingle);
                if (this.fetchUserSingle.recordStatus == 'O') {
                    this.fetchUserSingle.recordStatus = 'OPEN';
                }
                if (this.fetchUserSingle.verifiedStatus == 'U') {
                    this.fetchUserSingle.verifiedStatus = 'UNAUTHORIZED';
                }
                if (this.fetchUserSingle.verifiedOnce == 'N') {
                    this.fetchUserSingle.verifiedOnce = 'NO';
                }
                // this.iziToast.show({
                //   message: `Record Successfully Uploaded`,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-success',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "green",
                //   pauseOnHover: true,
                // });
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: "Record Successfully Uploaded",
                    // type: "success"
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: responseMsg,
                    icon: "warning"
                });
                // this.iziToast.show({
                //   message: responseMsg,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-error',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "green",
                //   pauseOnHover: true,
                // });
            }
            // this.showProgressBarSingle=false; 
        });
        // this.accountClosureForm.reset();
        // this.submitted = true;
    }
    editValues() {
        this.editFlag = true;
    }
    onClickOfViewToDatabulk() {
        console.log("bulk");
        // else{
        if (this.fetchUserSingle.closureType == 'BULK') {
            console.log("insdie bulk", this.fetchUserSingle);
            console.log("accont Type", this.fetchUserSingle.accountType);
            console.log("closure Tpye", this.fetchUserSingle.closureType);
            console.log("finle Name", this.fetchUserSingle.fileName);
            const navigationExtras = {
                queryParams: {
                    'closureTypeViewBulk': this.fetchUserSingle.closureType,
                    'fileName': this.fetchUserSingle.fileName,
                    'accountTypeBulk': this.fetchUserSingle.accountType,
                    'record': this.fetchUserSingle.recordStatus,
                    'authorizer': this.fetchUserSingle.verifiedBy,
                    'authFirsTime': this.fetchUserSingle.verifiedOnce,
                    'authStatus': this.fetchUserSingle.verifiedStatus,
                    'authDate': this.fetchUserSingle.verifiedTime,
                    'creator': this.fetchUserSingle.inputBy,
                    'creatorDate': this.fetchUserSingle.inputTime,
                    'modficationNo': this.fetchUserSingle.modNo,
                    'processStatus': this.fetchUserSingle.processStatus,
                    'Desc': this.fetchUserSingle.accountLinkageDesc,
                    'closeStatusInputBy': this.fetchUserSingle.closeStatusInputBy,
                    'closeStatusInputTime': this.fetchUserSingle.closeStatusInputTime,
                    'closeStatus': this.fetchUserSingle.closeStatus,
                    'icliqAvlBal': this.fetchUserSingle.icliqAvlBal,
                    'icliqBalance': this.fetchUserSingle.icliqBalance,
                    'icliqStatus': this.fetchUserSingle.icliqStatus,
                    'makerId': this.fetchUserSingle.makerId,
                    'makerInputTime': this.fetchUserSingle.makerInputTime,
                    'accls': this.fetchUserSingle.accls,
                    'lastTransactionDetail': this.fetchUserSingle.lastTransactionDetail,
                    'blockedAmount': this.fetchUserSingle.blockedAmount,
                    'deStatus': this.fetchUserSingle.deStatus,
                    'linkedAccounts': this.fetchUserSingle.linkedAccounts,
                    'checkerId': this.fetchUserSingle.checkerId,
                    'checkerInputTime': this.fetchUserSingle.checkerInputTime,
                    //----------------------------------
                }
            };
            console.log(navigationExtras);
            this.accClosure.sendNavParam(navigationExtras);
            console.log(navigationExtras);
            this.router.navigate(['initiate-account-closure/viewReport']);
            console.log(navigationExtras);
            // this.router.navigate(['account-closure/viewReportOfAccountClosure'],navigationExtras);
        }
    }
    onClickOfViewToData() {
        console.log("this is view", this.fetchUserSingle.closureType);
        localStorage.setItem("accountTypeForProcess", this.fetchUserSingle.accountType);
        localStorage.setItem("closureTypeForBulk", this.fetchUserSingle.closureType);
        console.log("bulk", this.fetchUserSingle.closureType);
        if (this.fetchUserSingle.closureType == "SINGLE") {
            console.log("inisde if of single edit screnn");
            this.accClosure.onViewOfSingleClsureType(this.fetchUserSingle.accountType, this.fetchUserSingle.closureType, this.fetchUserSingle.accountNumber).subscribe(viewReportOfSingleResp => {
                this.fetch = viewReportOfSingleResp;
                const navigationExtras = {
                    queryParams: {
                        'closureTypeView': this.fetch.closureType,
                        'accountNumberView': this.fetch.accountNumber,
                        'accountTypeview': this.fetch.accountType,
                        'creator': this.fetch.inputBy,
                        'record': this.fetch.recordStatus,
                        'authStatus': this.fetch.verifiedStatus,
                        'modficationNo': this.fetch.modNo,
                        'creatorDate': this.fetch.inputTime,
                        'authDate': this.fetch.verifiedTime,
                        'authFirsTime': this.fetch.verifiedOnce,
                        'authorizer': this.fetch.verifiedBy,
                        'acyCurrBalance': this.fetch.acyCurrBalance,
                        'frozenView': this.fetch.frozen,
                        'branchCode': this.fetch.branchCode,
                        'dorm': this.fetch.dorm,
                        'lcyCurrBalance': this.fetch.lcyCurrBalance,
                        'acSatNoCr': this.fetch.acSatNoCr,
                        'acyAvlBal': this.fetch.acyAvlBal,
                        'fileName': this.fetch.fileName,
                        'accStatus': this.fetch.accountStatus,
                        'flexRecord': this.fetch.recordStatusFromFlexCube,
                        'custId': this.fetch.customerId,
                        'valueDate': this.fetch.valueDate,
                        'debit': this.fetch.acStatNoDr,
                        'file': this.fetch.fileName,
                        'processStatus': this.fetch.processStatus,
                        'Desc': this.fetch.accountLinkageDesc,
                        'closeStatusInputBy': this.fetch.closeStatusInputBy,
                        'closeStatusInputTime': this.fetch.closeStatusInputTime,
                        'closeStatus': this.fetch.closeStatus,
                        'icliqAvlBal': this.fetch.icliqAvlBal,
                        'icliqBalance': this.fetch.icliqBalance,
                        'icliqStatus': this.fetch.icliqStatus,
                        'makerId': this.fetch.makerId,
                        'makerInputTime': this.fetch.makerInputTime,
                        'accls': this.fetch.accls,
                        'lastTransactionDetail': this.fetch.lastTransactionDetail,
                        'blockedAmount': this.fetch.blockedAmount,
                        'deStatus': this.fetch.deStatus,
                        'linkedAccounts': this.fetch.linkedAccounts,
                        'checkerId': this.fetch.checkerId,
                        'checkerInputTime': this.fetch.checkerInputTime,
                        //------------------------------
                    }
                };
                // console.log("edit data",this.fetch);
                // localStorage.setItem('singledta',JSON.stringify(this.fetch));
                // this.router.navigate(['account-closure/viewReportOfAccountClosure']);
                this.router.navigate(['initiate-account-closure/viewReport']);
            });
        }
        ;
    }
    onSubmitFile() {
        console.log("on submit");
        this.accountClosureForm.get('closureType').setValue('BULK');
        console.log(this.accountClosureForm.value);
        console.log(this.accountClosureForm.controls.accountType.value);
        this.sendAccountType = this.accountClosureForm.controls.accountType.value;
        console.log(this.accountClosureForm.controls.closureType.value);
        this.sendClosureType = this.accountClosureForm.controls.closureType.value;
        this.currentFileUpload = this.selectedFiles.item(0);
        this.showSubmitProgressBar = true;
        if (!this.sendAccountType) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: "AccountType is Mandatory",
                icon: 'warning'
            });
            // this.iziToast.show({
            //   message: `AccountType is Mandatory`,
            //   image: "assets/images/user.png",
            //   icon: 'ico ico-success',
            //   theme:"dark",
            //   layout: 2,
            //   // imageWidth:50,
            //   balloon: false,
            //   position: "topRight",
            //   progressBarColor: "red",
            //   pauseOnHover: true,
            // });
            this.showSubmitProgressBar = false;
        }
        else {
            this.accClosure.onFileUpload(this.currentFileUpload, this.sendAccountType, this.sendClosureType, this.currentUser).subscribe(fileResp => {
                // ------------For upload Percentage------------
                // if (fileResp.type === HttpEventType.UploadProgress) {
                //   this.percentDone = Math.round(100 * fileResp.loaded / fileResp.total);
                // } else if (event instanceof HttpResponse) {
                //   this.uploadSuccess = true;
                // }
                console.log(fileResp);
                this.fetchUserSingle = fileResp;
                if (this.fetchUserSingle.errorDesc == 'S') {
                    this.enableView = true;
                    this.submitFile = true;
                    // this.iziToast.show({
                    //   message: `File uploaded sucessfully`,
                    //   image: "assets/images/user.png",
                    //   icon: 'ico ico-success',
                    //   theme:"dark",
                    //   layout: 2,
                    //   // imageWidth:50,
                    //   balloon: false,
                    //   position: "topRight",
                    //   progressBarColor: "green",
                    //   pauseOnHover: true,
                    // });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        text: "File uploaded sucessfully",
                        icon: 'success'
                    });
                    this.showSubmitProgressBar = false;
                    this.showAuditlog = true;
                }
                else {
                    this.accountClosureForm.get('accountType').setValue(this.sendAccountType);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        text: this.fetchUserSingle.errorDesc,
                        icon: 'error'
                    });
                    // this.iziToast.show({
                    //   message: this.fetchUserSingle.errorDesc,
                    //   image: "assets/images/user.png",
                    //   icon: 'ico ico-error',
                    //   theme:"dark",
                    //   layout: 2,
                    //   // imageWidth:50,
                    //   balloon: false,
                    //   position: "topRight",
                    //   progressBarColor: "red",
                    //   pauseOnHover: true,
                    // });
                    this.showSubmitProgressBar = false;
                }
            });
        }
    }
    generateExcel() {
        this.router.navigate(['initiate-account-closure/viewReport']);
        // this.accClosure.generateExcel(this.excel);
        // else{
        if (this.fetchUserSingle.closureType == 'BULK') {
            console.log("insdie bulk", this.fetchUserSingle);
            console.log("accont Type", this.fetchUserSingle.accountType);
            console.log("closure Tpye", this.fetchUserSingle.closureType);
            console.log("finle Name", this.fetchUserSingle.fileName);
            const navigationExtras = {
                queryParams: {
                    closureTypeViewBulk: this.fetchUserSingle.closureType,
                    fileNmaeBulk: this.fetchUserSingle.fileName,
                    accountTypeBulk: this.fetchUserSingle.accountType,
                    record: this.fetchUserSingle.recordStatus,
                    authorizer: this.fetchUserSingle.verifiedBy,
                    authFirsTime: this.fetchUserSingle.verifiedOnce,
                    authStatus: this.fetchUserSingle.verifiedStatus,
                    authDate: this.fetchUserSingle.verifiedTime,
                    creator: this.fetchUserSingle.inputBy,
                    creatorDate: this.fetchUserSingle.inputTime,
                    modficationNo: this.fetchUserSingle.modNo,
                    processStatus: this.fetchUserSingle.processStatus
                }
            };
            this.router.navigate(['initiate-account-closure/viewReport'], navigationExtras);
        }
    }
    onSubmitOfSingleClosure() {
        // this.editFalg=false;
        console.log("this is submitting single Record Data");
        console.log(this.fetchUserSingle);
        this.accClosure.submiitingSingleClosureRecordAfterEdit(this.fetchUserSingle, this.currentUser, this.fetchUserSingle.id).subscribe(backendResp => {
            console.log(backendResp.errorDesc);
            this.fetchUserSingle = backendResp;
            /****if bckend Resp.closeCustAcErrorDesc == 's' print success else direct print the backend response*/
            if (this.fetchUserSingle.errorDesc == 'S') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: 'Record successfuly modified and uploaded',
                    // type:'success'
                });
            }
            else {
                /** */
                let responseMsg = backendResp.errorDesc;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: responseMsg,
                    icon: 'warning'
                });
            }
            this.cdr.markForCheck();
        });
    }
    onclickOfAuth() {
        console.log("this is auth");
        this.accClosure.onAuthorizingTheRecord(this.fetchUserSingle.accountNumber, this.currentUser).subscribe(authResp => {
            console.log(authResp);
            if (!authResp) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: 'Maker Cannot Authorize The Record',
                    icon: 'warning',
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: 'Record is Authorized',
                    // type: 'success',
                });
            }
        });
    }
    onclickOfClose() {
        console.log("this is close");
        this.accClosure.onClosingTheRecord(this.fetchUserSingle.accountNumber, this.currentUser).subscribe(recordStatusResp => {
            console.log(recordStatusResp);
            this.fetchUserSingle = recordStatusResp;
            if (this.fetchUserSingle.recordStatus == 'C') {
                this.fetchUserSingle.recordStatus = 'CLOSE';
            }
            if (this.fetchUserSingle.recordStatus == 'O') {
                this.fetchUserSingle.recordStatus = 'OPEN';
            }
            if (this.fetchUserSingle.verifiedStatus == 'A') {
                this.fetchUserSingle.verifiedStatus = 'AUTHORIZED';
            }
            if (this.fetchUserSingle.verifiedStatus == 'U') {
                this.fetchUserSingle.verifiedStatus = 'UNAUTHORIZED';
            }
            if (this.fetchUserSingle.verifiedOnce == 'Y') {
                this.fetchUserSingle.verifiedOnce = 'YES';
            }
            if (this.fetchUserSingle.verifiedOnce == 'N') {
                this.fetchUserSingle.verifiedOnce = 'NO';
            }
        });
    }
    onclickOfReopen() {
        console.log("this is reopen");
        this.accClosure.onReopningTheRecord(this.fetchUserSingle.accountNumber, this.currentUser).subscribe(openResp => {
            console.log(openResp);
            this.fetchUserSingle = openResp;
            if (this.fetchUserSingle.recordStatus == 'C') {
                this.fetchUserSingle.recordStatus = 'CLOSE';
            }
            if (this.fetchUserSingle.recordStatus == 'O') {
                this.fetchUserSingle.recordStatus = 'OPEN';
            }
        });
    }
}
AccountClosureDetailsComponent.ɵfac = function AccountClosureDetailsComponent_Factory(t) { return new (t || AccountClosureDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_2__.AccountClosureServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__.Ng2IzitoastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__.RoleService)); };
AccountClosureDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AccountClosureDetailsComponent, selectors: [["npr-account-closure-details"]], decls: 42, vars: 12, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle", "cardWidth"], [1, "row", "gy-4", "justify-content-center"], [1, "col-12"], [1, "row", "g-2", "justify-content-center"], [1, "col-sm-4", "col-5"], [1, "radio", "radioStyle"], ["id", "radio-1", "name", "radio", "type", "radio", "checked", "", 3, "readonly", "click"], ["for", "radio-1", 1, "radio-label"], ["id", "radio-2", "name", "radio", "type", "radio", 3, "readonly", "click"], ["for", "radio-2", 1, "radio-label"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["formControlName", "accountType", "aria-label", "Default select example", 1, "form-select", 3, "ngModel", "ngModelChange"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["value", "dormant"], ["value", "overDrawn"], ["value", "unclaimed"], ["class", "errorColor", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "errorColor"], [4, "ngIf"], ["id", "accountNumber", "placeholder", "Account Number", "required", "", "formControlName", "accountNumber", "value", "", 1, "form-control", 3, "readonly", "ngModel", "ngModelChange"], ["id", "branchCode", "placeholder", "Branch Code", "required", "", "formControlName", "branchCode", "value", "", 1, "form-control", 3, "readonly", "ngModel", "ngModelChange"], ["id", "", "placeholder", "Reason For Closure", "required", "", "formControlName", "reasonForClosure", "value", "", 1, "form-control", 3, "readonly", "ngModel", "ngModelChange"], [1, "fileUpload"], [1, "formS"], ["data-text", "File Upload", 1, "file-upload-wrapper"], ["name", "file-upload-field", "type", "file", "value", "", 1, "file-upload-field", 3, "readonly", "change"], ["style", "font-size: 11px;color:#a30202", 4, "ngIf"], [2, "font-size", "11px", "color", "#a30202"], [1, "row", "g-3", "pb-3", "justify-content-center", "pt-3"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["routerLink", "/initiate-account-closure", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "dbCardStyle"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]], template: function AccountClosureDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Account Closure");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_Template_input_click_11_listener() { return ctx.onClickOfBulk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Bulk");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_Template_input_click_16_listener() { return ctx.onclickOfSingle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Single");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Account Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AccountClosureDetailsComponent_Template_select_ngModelChange_24_listener($event) { return ctx.fetchUserSingle.accountType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "--Please select--");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Dormant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "OverDrawn Accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Unclaimed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, AccountClosureDetailsComponent_div_33_Template, 2, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, AccountClosureDetailsComponent_div_34_Template, 7, 3, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, AccountClosureDetailsComponent_div_35_Template, 7, 3, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, AccountClosureDetailsComponent_div_36_Template, 7, 3, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, AccountClosureDetailsComponent_div_37_Template, 7, 3, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, AccountClosureDetailsComponent_div_38_Template, 10, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, AccountClosureDetailsComponent_div_39_Template, 14, 9, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, AccountClosureDetailsComponent_div_41_Template, 97, 9, "div", 23);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.accountClosureForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.fetchUserSingle.accountType);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.accountClosureForm.controls["accountType"].invalid && (ctx.accountClosureForm.controls["accountType"].dirty || ctx.accountClosureForm.controls["accountType"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.singleCall);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.singleCall);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.singleCall);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.singleCall);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fetchUserSingle.closureType == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fetchUserSingle.closureType != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.initiateAccClosure.queryParams.accountType != null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: [".errorColor[_ngcontent-%COMP%] {\n  color: #e6224a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtY2xvc3VyZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6ImFjY291bnQtY2xvc3VyZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yQ29sb3J7XHJcbiAgICBjb2xvcjogI2U2MjI0YTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 32291:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/initiate-account-closure/initiate-account-closure-routing.module.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitiateAccountClosureRoutingModule": function() { return /* binding */ InitiateAccountClosureRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _account_closure_details_account_closure_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-closure-details/account-closure-details.component */ 47833);
/* harmony import */ var _initiate_account_closure_initiate_account_closure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initiate-account-closure/initiate-account-closure.component */ 65355);
/* harmony import */ var _view_report_acc_closure_view_report_acc_closure_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-report-acc-closure/view-report-acc-closure.component */ 17272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: "",
        component: _initiate_account_closure_initiate_account_closure_component__WEBPACK_IMPORTED_MODULE_1__.InitiateAccountClosureComponent
    },
    {
        path: "create",
        component: _account_closure_details_account_closure_details_component__WEBPACK_IMPORTED_MODULE_0__.AccountClosureDetailsComponent
    },
    {
        path: "viewReport",
        component: _view_report_acc_closure_view_report_acc_closure_component__WEBPACK_IMPORTED_MODULE_2__.ViewReportAccClosureComponent
    }
];
class InitiateAccountClosureRoutingModule {
}
InitiateAccountClosureRoutingModule.ɵfac = function InitiateAccountClosureRoutingModule_Factory(t) { return new (t || InitiateAccountClosureRoutingModule)(); };
InitiateAccountClosureRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: InitiateAccountClosureRoutingModule });
InitiateAccountClosureRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](InitiateAccountClosureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 69628:
/*!***********************************************************************************!*\
  !*** ./src/app/views/initiate-account-closure/initiate-account-closure.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitiateAccountClosureModule": function() { return /* binding */ InitiateAccountClosureModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _initiate_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initiate-account-closure-routing.module */ 32291);
/* harmony import */ var _initiate_account_closure_initiate_account_closure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initiate-account-closure/initiate-account-closure.component */ 65355);
/* harmony import */ var _account_closure_details_account_closure_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-closure-details/account-closure-details.component */ 47833);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 50481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _view_report_acc_closure_view_report_acc_closure_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-report-acc-closure/view-report-acc-closure.component */ 17272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








class InitiateAccountClosureModule {
}
InitiateAccountClosureModule.ɵfac = function InitiateAccountClosureModule_Factory(t) { return new (t || InitiateAccountClosureModule)(); };
InitiateAccountClosureModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: InitiateAccountClosureModule });
InitiateAccountClosureModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _initiate_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_0__.InitiateAccountClosureRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](InitiateAccountClosureModule, { declarations: [_initiate_account_closure_initiate_account_closure_component__WEBPACK_IMPORTED_MODULE_1__.InitiateAccountClosureComponent,
        _account_closure_details_account_closure_details_component__WEBPACK_IMPORTED_MODULE_2__.AccountClosureDetailsComponent,
        _view_report_acc_closure_view_report_acc_closure_component__WEBPACK_IMPORTED_MODULE_4__.ViewReportAccClosureComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _initiate_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_0__.InitiateAccountClosureRoutingModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 65355:
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/initiate-account-closure/initiate-account-closure/initiate-account-closure.component.ts ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitiateAccountClosureComponent": function() { return /* binding */ InitiateAccountClosureComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/account-closure-service.service */ 60965);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 50481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);







function InitiateAccountClosureComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InitiateAccountClosureComponent_tr_28_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const users_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.getDataFromSummary(users_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const users_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/initiate-account-closure/create/", users_r1.closureType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](users_r1.closureType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](users_r1.accountType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](users_r1.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](users_r1.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](users_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](users_r1.makerId);
} }
const _c0 = function () { return ["/dashboard"]; };
class InitiateAccountClosureComponent {
    constructor(accClosureServiceSum, roleService, router) {
        this.accClosureServiceSum = accClosureServiceSum;
        this.roleService = roleService;
        this.router = router;
        this.dtOptions = {};
        // this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        setTimeout(() => {
            this.newRolePermissions();
        }, 2000);
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            columnDefs: [{ type: 'date', 'targets': [5] }],
            order: [[5, 'desc']],
            processing: true,
            lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
        };
        this.currentUser = localStorage.getItem('currentUser').replace(/['"]+/g, '');
        this.gettingAccClosureSummary(this.currentUser);
    }
    createAccClosure() {
        this.router.navigate(['/initiate-account-closure/create']);
        const navigationExtras = {
            queryParams: {}
        };
        this.roleService.sendNavParam(navigationExtras);
    }
    getDataFromSummary(row) {
        console.log("this is row", row);
        this.fileName = row.fileName;
        console.log("file", this.fileName);
        localStorage.setItem("fileName", this.fileName);
        this.viewAccountType = row.accountType;
        localStorage.setItem("typeOfAccount", this.viewAccountType);
        console.log("typeOfAccount", this.viewAccountType);
        if (row.closureType == "SINGLE") {
        }
        const navigationExtras = {
            queryParams: {
                modifyNo: row.modNo,
                closureType: row.closureType,
                accountNumber: row.accountNumber,
                accountType: row.accountType,
                record: row.recordStatus,
                verifiedStatus: row.verifiedStatus,
                inputBy: row.inputBy,
                inputTime: row.inputTime,
                modNo: row.modNo,
                authorizedTime: row.authorizedTime,
                verifiedfirst: row.verifiedOnce,
                verifiedBy: row.verifiedBy,
                fileName: row.fileName,
                branch: row.branchCode,
                reason: row.reasonForClosure,
                id: row.id,
                processStatus: row.processStatus,
                Desc: row.accountLinkageDesc,
                //-----------------------------------------
                closeStatusInputBy: row.closeStatusInputBy,
                closeStatusInputTime: row.closeStatusInputTime,
                closeStatus: row.closeStatus,
                icliqAvlBal: row.icliqAvlBal,
                icliqBalance: row.icliqBalance,
                icliqStatus: row.icliqStatus,
                makerId: row.makerId,
                makerInputTime: row.makerInputTime,
                accls: row.accls,
                lastTransactionDetail: row.lastTransactionDetail,
                blockedAmount: row.blockedAmount,
                deStatus: row.deStatus,
                linkedAccounts: row.linkedAccounts,
                checkerId: row.checkerId,
                checkerInputTime: row.checkerInputTime,
                //-------------------------------------
            }
        };
        console.log('row', row.accountLinkageDesc);
        console.log('row', navigationExtras);
        // this.router.navigate(['initiate-account-closure/create'], navigationExtras);
        this.roleService.sendNavParam(navigationExtras);
        this.router.navigate(['/initiate-account-closure/create']);
    }
    newRolePermissions() {
        this.roleService.fetchScreenPermissions('Initiate Account Closure');
    }
    gettingAccClosureSummary(currentUser) {
        console.log("this account closure Summary");
        this.accClosureServiceSum.gettingAccountClosureSummary(currentUser).subscribe(backendResp => {
            console.log(backendResp);
            this.summaryDetails = backendResp;
            this.dtTrigger.next();
            // this.dataSource = new MatTableDataSource<FetchUserForSingleAccClosureReqDTO>(this.summaryDetails);
            // this.dataSource.paginator = this.paginator.toArray()[0];;
            // console.log(this.summaryDetails);
        });
    }
}
InitiateAccountClosureComponent.ɵfac = function InitiateAccountClosureComponent_Factory(t) { return new (t || InitiateAccountClosureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_0__.AccountClosureServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_1__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
InitiateAccountClosureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: InitiateAccountClosureComponent, selectors: [["npr-initiate-account-closure"]], decls: 29, vars: 5, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "primaryColor", 3, "routerLink", "click"]], template: function InitiateAccountClosureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Account Closure Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InitiateAccountClosureComponent_Template_a_click_7_listener() { return ctx.createAccClosure(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "closure type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "account type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "account number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "file name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "maker id");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, InitiateAccountClosureComponent_tr_28_Template, 14, 7, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.summaryDetails);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbml0aWF0ZS1hY2NvdW50LWNsb3N1cmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 17272:
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/initiate-account-closure/view-report-acc-closure/view-report-acc-closure.component.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewReportAccClosureComponent": function() { return /* binding */ ViewReportAccClosureComponent; }
/* harmony export */ });
/* harmony import */ var src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/FetchUserForSingleAccClosureReqDTO */ 58179);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ 75585);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf-autotable */ 56587);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/account-closure-service.service */ 60965);
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-izitoast */ 27218);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ 50481);













function ViewReportAccClosureComponent_div_5_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_5_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r4.onProcessingTheBulkAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ViewReportAccClosureComponent_div_5_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_5_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r6.onProcessingTheSingleAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ViewReportAccClosureComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Export As");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function ViewReportAccClosureComponent_div_5_Template_select_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r8.modo($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ViewReportAccClosureComponent_div_5_div_11_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, ViewReportAccClosureComponent_div_5_div_12_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_5_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r10.onCancelingTheRecord(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.closureTypes == "BULK");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.closureTypes == "SINGLE");
} }
function ViewReportAccClosureComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Account Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Closure Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Branch Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Current Balance [ACY]");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Current Balance [LCY]");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Available Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, " No Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "No Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Frozen");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "Dormant");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Account Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Record Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Customer Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Value Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Account Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_6_Template_button_click_77_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r11.onProcessingTheSingleAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_6_Template_button_click_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r13.onCancelingTheSingleRecord(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](81, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87, "Export As");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_6_Template_option_click_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r14.downloadReportForSingle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90, "Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_6_Template_option_click_91_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r15.convertReportForSingle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](92, "PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dtOptions", ctx_r1.dtOptions)("dtTrigger", ctx_r1.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.accountType);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.closureType);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.branchCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dtOptions", ctx_r1.dtOptions)("dtTrigger", ctx_r1.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.acyCurrBalance);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.fetchUserSingle.lcyCurrBalance, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.acyAvlBal);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.acStatNoDr);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.acSatNoCr);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.frozen);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.dorm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.accountStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.recordStatusFromFlexCube);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.customerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.valueDate);
} }
class ViewReportAccClosureComponent {
    constructor(excelService, ref, iziToast, roleService, router) {
        this.excelService = excelService;
        this.ref = ref;
        this.iziToast = iziToast;
        this.roleService = roleService;
        this.router = router;
        this.fetchUserSingle = new src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__.FetchUserForSingleAccClosureReqDTO();
        this.accountTypeForBulk = "";
        this.excel = [];
        this.sendFileName = "";
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.dtOptions = {};
        this.singleExcel = Array();
    }
    ngOnInit() {
        console.log("Inside View Report");
        this.closureTypes = localStorage.getItem("CLOSURETYPE");
        console.log(this.closureTypes);
        this.navSubscription = this.excelService.getNavParam.subscribe(data => this.ViewAccClosure = data);
        console.log(this.ViewAccClosure);
        this.fetchUserSingle.modNo = this.ViewAccClosure.queryParams.modNo;
        this.fetchUserSingle.closureType = this.ViewAccClosure.queryParams.closureType;
        this.fetchUserSingle.accountNumber = this.ViewAccClosure.queryParams.accountNumber;
        this.fetchUserSingle.accountType = this.ViewAccClosure.queryParams.accountType;
        this.fetchUserSingle.recordStatus = this.ViewAccClosure.queryParams.record;
        this.fetchUserSingle.verifiedStatus = this.ViewAccClosure.queryParams.verifiedStatus;
        this.fetchUserSingle.inputBy = this.ViewAccClosure.queryParams.inputBy;
        this.fetchUserSingle.inputTime = this.ViewAccClosure.queryParams.inputTime;
        // this.fetchUserSingle.modNo = params.modNo
        this.fetchUserSingle.verifiedOnce = this.ViewAccClosure.queryParams.verifiedfirst;
        this.fetchUserSingle.verifiedBy = this.ViewAccClosure.queryParams.verifiedBy;
        this.fetchUserSingle.fileName = this.ViewAccClosure.queryParams.fileName;
        this.fetchUserSingle.branchCode = this.ViewAccClosure.queryParams.branch;
        this.fetchUserSingle.reasonForClosure = this.ViewAccClosure.queryParams.reason;
        this.fetchUserSingle.processStatus = this.ViewAccClosure.queryParams.processStatus;
        this.fetchUserSingle.accountLinkageDesc = this.ViewAccClosure.queryParams.Desc;
        //--------------------------------------------
        this.fetchUserSingle.closeStatusInputBy = this.ViewAccClosure.queryParams.closeStatusInputBy;
        this.fetchUserSingle.closeStatusInputTime = this.ViewAccClosure.queryParams.closeStatusInputTime;
        this.fetchUserSingle.closeStatus = this.ViewAccClosure.queryParams.closeStatus;
        this.fetchUserSingle.icliqAvlBal = this.ViewAccClosure.queryParams.icliqAvlBal;
        this.fetchUserSingle.icliqBalance = this.ViewAccClosure.queryParams.icliqBalance;
        this.fetchUserSingle.icliqStatus = this.ViewAccClosure.queryParams.icliqStatus;
        this.fetchUserSingle.makerId = this.ViewAccClosure.queryParams.makerId;
        this.fetchUserSingle.makerInputTime = this.ViewAccClosure.queryParams.makerInputTime;
        this.fetchUserSingle.accls = this.ViewAccClosure.queryParams.accls;
        this.fetchUserSingle.lastTransactionDetail = this.ViewAccClosure.queryParams.lastTransactionDetail;
        this.fetchUserSingle.blockedAmount = this.ViewAccClosure.queryParams.blockedAmount;
        this.fetchUserSingle.deStatus = this.ViewAccClosure.queryParams.deStatus;
        this.fetchUserSingle.linkedAccounts = this.ViewAccClosure.queryParams.linkedAccounts;
        this.fetchUserSingle.checkerId = this.ViewAccClosure.queryParams.checkerId;
        this.fetchUserSingle.checkerInputTime = this.ViewAccClosure.queryParams.checkerInputTime;
        console.log(this.fetchUserSingle);
    }
    exportAsXLSX() {
        console.log("this is on click of download");
        // this.showProgressBar = true;
        setTimeout(() => {
            // this.showProgressBar = false;
        }, 2000);
        // console.log(this.excel);
        // this.bulkDataInExcel=this.excel;
        // console.log("bulkDataInExcel",this.bulkDataInExcel);
        //let fin=this.sendFileName.split('.').slice(0, -1).join('.');
        console.log(this.fetchUserSingle.fileName);
        let fin = this.fetchUserSingle.fileName.split('.').slice(0, -1).join('.');
        this.excelService.getExcel(fin, this.fetchUserSingle.accountType).subscribe(data => {
            console.log("this is backend data for excel", data);
            this.excel = data;
            data.forEach(element => {
                //this.excel.push(element);
            });
            //console.log("vidya",this.excel);
            this.excelService.exportAsExcelFile(this.excel, 'BULK_ACCOUNT_CLOSURE');
        });
        console.log(this.excel);
        // --passing two arguments --1)is getting data from backend --i.e is excel data
        // 2)what name i should give for file
    }
    //downloding records in pdf
    convert() {
        var doc = new (jspdf__WEBPACK_IMPORTED_MODULE_1___default())();
        var col = [["AccountNo", "branchCode", "closureReason", "customerId", "fileName", "frozen"]];
        var rows = [];
        console.log(this.fetchUserSingle);
        /* The following array of object as response from the API req  */
        let fin = this.fetchUserSingle.fileName.split('.').slice(0, -1).join('.');
        //let fin=this.fetchUserSingle.fileName.split('.').slice(0, -1).join('.');
        this.excelService.getExcel(fin, this.fetchUserSingle.accountType).subscribe(data => {
            console.log("this is backend data for excel");
            this.excel = data;
            var itemNew = this.excel;
            itemNew.forEach(element => {
                var date = new Date(element.timeForExport).toLocaleDateString("en-us");
                console.log(date);
                var temp = [element.accountNo, element.branchCode, element.closureReason, element.customerId, element.fileName, element.frozen];
                rows.push(temp);
            });
            var doc = new (jspdf__WEBPACK_IMPORTED_MODULE_1___default())();
            //doc.autoTable(col, rows);
            doc.autoTable({
                head: col,
                body: rows
            });
            doc.save('BULK_Account_Closure.pdf');
        });
    }
    modo(event) {
        console.log(event);
        if (event == 'PDF') {
            this.convert();
        }
        if (event == 'Excel') {
            this.exportAsXLSX();
        }
    }
    // ---------------------Process The Bulk-----------------------------
    onProcessingTheBulkAccount() {
        console.log("this is bulk process", this.fetchUserSingle.fileName);
        this.excelService.processTheBulkRecord(this.fetchUserSingle.fileName, this.fetchUserSingle.accountType, this.fetchUserSingle.inputBy).subscribe(processResp => {
            console.log(processResp);
            let msg = processResp.errorDesc;
            if (processResp.var1 == true) {
                this.process = true;
                this.ref.markForCheck();
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    text: 'Record Processed SuccessFully',
                    icon: "success"
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    text: msg,
                    icon: "warning"
                });
                // this.process=true;
            }
        });
    }
    onCancelingTheRecord() {
        console.log("this is deleteing the record", this.fetchUserSingle.fileName);
        this.excelService.onDeletingTheReocrd(this.fetchUserSingle.fileName, this.fetchUserSingle.accountType, this.fetchUserSingle.inputBy).subscribe(deleteResp => {
            console.log(deleteResp);
            if (deleteResp == true) {
                this.delete = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    text: 'Record is Deleted',
                    icon: "success"
                });
                this.router.navigate(['/initiate-account-closure']);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    text: 'Failed To Delete The Record',
                    icon: "warning"
                });
            }
        });
    }
    onProcessingTheSingleAccount() {
        console.log("this is single process", this.fetchUserSingle.accountNumber);
        this.excelService.processTheSingleRecord(this.fetchUserSingle.accountNumber, this.fetchUserSingle.inputBy).subscribe(processResp => {
            console.log(processResp);
            let msg = processResp.errorDesc;
            if (processResp.var1 == true) {
                this.process = true;
                this.ref.markForCheck();
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    text: 'Record Processed SuccessFully',
                    icon: "success"
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    text: msg,
                    icon: "warning"
                });
                // this.process=true;
            }
        });
    }
    onCancelingTheSingleRecord() {
        console.log("deleting Single", this.fetchUserSingle.accountNumber);
        console.log("deleting Single", this.fetchUserSingle.accountType);
        console.log("deleting Single", this.fetchUserSingle.closureType);
        console.log("deleting Single", this.fetchUserSingle.inputBy);
        this.excelService.onDeletingSingle(this.fetchUserSingle.accountNumber, this.fetchUserSingle.accountType, this.fetchUserSingle.closureType, this.fetchUserSingle.inputBy).subscribe(singledeleteResp => {
            console.log(singledeleteResp);
            this.deleteSingle = true;
            if (singledeleteResp == true) {
                // this.iziToast.show({
                //   message: `Record Deleted successFully`,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-success',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "green",
                //   pauseOnHover: true,
                // });
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    text: 'Record is Deleted',
                    icon: "success"
                });
                this.router.navigate(['/initiate-account-closure']);
            }
            else {
                // this.iziToast.show({
                //   message: `Failed To Delete The Record`,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-warning',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "green",
                //   pauseOnHover: true,
                // });
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    text: 'Failed To Delete The Record',
                    icon: "warning"
                });
            }
        });
    }
    // ================geneerate Excel For Single==================
    downloadReportForSingle() {
        console.log("download for single");
        this.singleExcel.push(this.fetchUserSingle);
        console.log(this.fetchUserSingle);
        console.log(this.singleExcel);
        this.excelService.exportAsExcelForSingleAccount(this.singleExcel, 'SINGLE_ACCOUNT_CLOSURE');
        console.log("this is single", this.singleExcel);
    }
    // ================geneerate PDF For Single==================
    convertReportForSingle() {
        console.log(this.fetchUserSingle);
        var doc = new (jspdf__WEBPACK_IMPORTED_MODULE_1___default())();
        var col = [["Conolidated Report"]];
        var rows = [];
        var itemNew = this.fetchUserSingle;
        Object.keys(itemNew);
        Object.values(itemNew);
        Object.entries(itemNew);
        console.log(Object.entries(itemNew));
        // console.log("obj",obj);
        const objectArray = Object.entries(itemNew);
        const mapped = Object.keys(this.fetchUserSingle).map(key => ({ type: key, value: this.fetchUserSingle[key] }));
        console.log(mapped);
        doc.autoTable({
            // head: col,
            body: mapped
        });
        doc.save('Single_Account_Closure.pdf');
    }
}
ViewReportAccClosureComponent.ɵfac = function ViewReportAccClosureComponent_Factory(t) { return new (t || ViewReportAccClosureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_4__.AccountClosureServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__.Ng2IzitoastService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_6__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router)); };
ViewReportAccClosureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ViewReportAccClosureComponent, selectors: [["npr-view-report-acc-closure"]], decls: 7, vars: 2, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle"], ["class", "dbCardStyle cardWidth", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "dbCardStyle", "cardWidth"], [1, "col-12"], ["for", "roleName", 1, "formLbl"], ["aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", "Excel"], ["value", "PDF"], [1, "row", "g-3", "pb-3", "justify-content-center", "pt-3"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["routerLink", "/initiate-account-closure", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 3, "dtOptions", "dtTrigger"], ["aria-label", "Default select example", 1, "form-select"], ["value", "1", 3, "click"], ["value", "2", 3, "click"]], template: function ViewReportAccClosureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "View Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ViewReportAccClosureComponent_div_5_Template, 19, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ViewReportAccClosureComponent_div_6_Template, 93, 19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.fetchUserSingle.closureType != "SINGLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.fetchUserSingle.closureType == "SINGLE");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, angular_datatables__WEBPACK_IMPORTED_MODULE_7__.DataTableDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXJlcG9ydC1hY2MtY2xvc3VyZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_views_initiate-account-closure_initiate-account-closure_module_ts-es2015.js.map