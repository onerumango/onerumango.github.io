"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_addSystem_add-System_add-System_module_ts"],{

/***/ 21067:
/*!*****************************************************************!*\
  !*** ./src/app/views/addSystem/add-System/add-System.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSystemModule": function() { return /* binding */ AddSystemModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-datatables */ 50481);
/* harmony import */ var _add_system_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-system-routing.module */ 23340);
/* harmony import */ var _add_system_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-system.component */ 16496);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-system-summary/add-system-summary.component */ 86312);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 55314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);









class AddSystemModule {
}
AddSystemModule.ɵfac = function AddSystemModule_Factory(t) { return new (t || AddSystemModule)(); };
AddSystemModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AddSystemModule });
AddSystemModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTablesModule,
            _add_system_routing_module__WEBPACK_IMPORTED_MODULE_1__.AddSystemRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AddSystemModule, { declarations: [_add_system_component__WEBPACK_IMPORTED_MODULE_2__.AddSystemComponent, _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_4__.AddSystemSummaryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTablesModule,
        _add_system_routing_module__WEBPACK_IMPORTED_MODULE_1__.AddSystemRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule] }); })();


/***/ }),

/***/ 23340:
/*!*************************************************************************!*\
  !*** ./src/app/views/addSystem/add-System/add-system-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSystemRoutingModule": function() { return /* binding */ AddSystemRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-system-summary/add-system-summary.component */ 86312);
/* harmony import */ var _add_system_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-system.component */ 16496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    {
        path: '',
        component: _add_system_component__WEBPACK_IMPORTED_MODULE_1__.AddSystemComponent
    },
    {
        path: 'summary',
        component: _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_0__.AddSystemSummaryComponent
    }
];
class AddSystemRoutingModule {
}
AddSystemRoutingModule.ɵfac = function AddSystemRoutingModule_Factory(t) { return new (t || AddSystemRoutingModule)(); };
AddSystemRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AddSystemRoutingModule });
AddSystemRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AddSystemRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 16496:
/*!********************************************************************!*\
  !*** ./src/app/views/addSystem/add-System/add-system.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSystemComponent": function() { return /* binding */ AddSystemComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/add-system.service */ 91973);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 55314);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);









const _c0 = ["fileWrapper"];
const _c1 = ["fileWrapper1"];
function AddSystemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Please wait... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function AddSystemComponent_div_1_form_4_div_51_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " IP Address is not valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_4_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_4_div_51_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.basicInfoForm.get("sourceIp").errors.pattern);
} }
function AddSystemComponent_div_1_form_4_div_58_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " External Port must be at least 2 numbers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_4_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_4_div_58_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.basicInfoForm.get("sourcePort").hasError("minlength"));
} }
function AddSystemComponent_div_1_form_4_div_65_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " IP Address is not valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_4_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_4_div_65_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.basicInfoForm.get("medianIp").errors.pattern);
} }
function AddSystemComponent_div_1_form_4_div_72_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Median Port must be at least 2 numbers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_4_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_4_div_72_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.basicInfoForm.get("medianPort").hasError("minlength"));
} }
function AddSystemComponent_div_1_form_4_div_74_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_4_div_74_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r23.next("basicConfiguration"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r12.basicInfoForm.valid);
} }
function AddSystemComponent_div_1_form_4_div_75_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_4_div_75_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r25.onSubmitEditAddSystem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_4_div_76_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_4_div_76_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r27.onClickOfAuth(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Auth");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_4_div_77_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_4_div_77_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r29.onClickOfClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_4_div_78_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_4_div_78_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r31.onClickOfReopen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Reopen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_4_div_79_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_4_div_79_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r33.OndeleteofUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_4_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Maker");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Maker Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Record Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Checker");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Checker Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "First Time Auth");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Auth Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Modification Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.respData.creatorId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 8, ctx_r18.respData.createdTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.respData.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.respData.approverId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 10, ctx_r18.respData.approvedTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.respData.approvedEver);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.respData.approvedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.respData.versionNo);
} }
const _c2 = function () { return ["/addSystem/summary"]; };
function AddSystemComponent_div_1_form_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "System Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "fieldset", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "server");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "client");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Messages Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Incoming ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Outgoing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "External Ip");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, AddSystemComponent_div_1_form_4_div_51_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "External Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, AddSystemComponent_div_1_form_4_div_58_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Median Ip");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, AddSystemComponent_div_1_form_4_div_65_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Median Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](72, AddSystemComponent_div_1_form_4_div_72_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, AddSystemComponent_div_1_form_4_div_74_Template, 3, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, AddSystemComponent_div_1_form_4_div_75_Template, 3, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, AddSystemComponent_div_1_form_4_div_76_Template, 3, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](77, AddSystemComponent_div_1_form_4_div_77_Template, 3, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](78, AddSystemComponent_div_1_form_4_div_78_Template, 3, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](79, AddSystemComponent_div_1_form_4_div_79_Template, 3, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](83, AddSystemComponent_div_1_form_4_div_83_Template, 100, 12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.basicInfoForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.basicInfoForm.get("sourceIp").touched && !ctx_r2.basicInfoForm.get("sourceIp").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.basicInfoForm.get("sourcePort").touched && !ctx_r2.basicInfoForm.get("sourcePort").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.basicInfoForm.get("medianIp").touched && !ctx_r2.basicInfoForm.get("medianIp").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.basicInfoForm.get("medianPort").touched && !ctx_r2.basicInfoForm.get("medianPort").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.respData && !ctx_r2.editFlag && ctx_r2.respData.recordStatus == "OPEN");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.respData && !ctx_r2.editFlag && ctx_r2.respData.approvedStatus == "UNAUTHORIZED");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.respData && !ctx_r2.editFlag && ctx_r2.respData.recordStatus == "OPEN" && ctx_r2.respData.approvedEver == "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.respData && !ctx_r2.editFlag && ctx_r2.respData.recordStatus == "CLOSED" && ctx_r2.respData.approvedEver == "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.editFlag && ctx_r2.respData && ctx_r2.respData.approvedEver == "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.respData);
} }
function AddSystemComponent_div_1_form_5_div_1_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r48);
} }
function AddSystemComponent_div_1_form_5_div_1_div_28_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r50);
} }
function AddSystemComponent_div_1_form_5_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Type of Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_5_div_1_div_28_option_4_Template, 2, 2, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r39.queArray);
} }
function AddSystemComponent_div_1_form_5_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Queue Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Queue Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connection Factory");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connection Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connecting String");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_5_div_1_Template_select_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r51.onProtocalSlection($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "HTTPS/HTTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "MDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "EJB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "DB Connection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "select", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AddSystemComponent_div_1_form_5_div_1_option_27_Template, 2, 2, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AddSystemComponent_div_1_form_5_div_1_div_28_Template, 5, 1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, AddSystemComponent_div_1_form_5_div_1_div_29_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AddSystemComponent_div_1_form_5_div_1_div_30_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, AddSystemComponent_div_1_form_5_div_1_div_31_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, AddSystemComponent_div_1_form_5_div_1_div_32_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AddSystemComponent_div_1_form_5_div_1_div_33_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AddSystemComponent_div_1_form_5_div_1_div_34_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, AddSystemComponent_div_1_form_5_div_1_div_35_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, AddSystemComponent_div_1_form_5_div_1_div_36_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_5_div_1_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r53.next("messageConfiguration"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_5_div_1_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r54.previous("messageConfiguration"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r37 = ctx.index;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r35.messageType, " Message Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r35.messageType, " MessageProtocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r35.dataType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r35.messageConfigurationForm.value.sysChannel[0].queueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r35.messageConfigurationForm.value.sysChannel[0].queueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r35.messageConfigurationForm.value.sysChannel[0].queueType === "IBM");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r35.messageConfigurationForm.value.sysChannel[0].queueType === "JMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r35.messageConfigurationForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c2));
} }
function AddSystemComponent_div_1_form_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_5_div_1_Template, 47, 16, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r3.messageConfigurationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.messageConfigurationForm.get("sysChannel")["controls"]);
} }
function AddSystemComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Folder Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_div_6_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r55.previous("incomingMessageConfiguration"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Header and Service Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 101, 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_div_7_Template_input_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r58.uploadFileXml($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Header and Service Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_8_div_19_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", header_r72.headerTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", header_r72.headerTag, " ");
} }
function AddSystemComponent_div_1_form_8_div_19_select_6_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mkey_r74 = ctx.$implicit;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r73.try(mkey_r74.fieldNo))("value", mkey_r74.fieldNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", mkey_r74.fieldNo, " ", mkey_r74.fieldName, " ");
} }
function AddSystemComponent_div_1_form_8_div_19_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_8_div_19_select_6_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r77); const i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r75.onSelectingMessageBasis($event, i_r64); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_8_div_19_select_6_option_1_Template, 2, 4, "option", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r66.isoRespData);
} }
function AddSystemComponent_div_1_form_8_div_19_select_7_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mkey_r79 = ctx.$implicit;
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r78.try(mkey_r79))("value", mkey_r79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", mkey_r79, " ");
} }
function AddSystemComponent_div_1_form_8_div_19_select_7_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_8_div_19_select_7_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r82); const i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r80.onselectingTag($event, i_r64); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_8_div_19_select_7_option_1_Template, 2, 3, "option", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r67.xmlRespData);
} }
function AddSystemComponent_div_1_form_8_div_19_input_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 128);
} }
function AddSystemComponent_div_1_form_8_div_19_select_10_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", type_r84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", type_r84, " ");
} }
function AddSystemComponent_div_1_form_8_div_19_select_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_8_div_19_select_10_option_1_Template, 2, 2, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "dataType_", i_r64, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r69.typeDataIso);
} }
function AddSystemComponent_div_1_form_8_div_19_select_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "option", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Numeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "option", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Alpha Numeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "dataType_", i_r64, "");
} }
function AddSystemComponent_div_1_form_8_div_19_a_27_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_8_div_19_a_27_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r89); const i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r87.delete(i_r64); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_8_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_8_div_19_option_4_Template, 2, 2, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_8_div_19_select_6_Template, 2, 1, "select", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AddSystemComponent_div_1_form_8_div_19_select_7_Template, 2, 1, "select", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AddSystemComponent_div_1_form_8_div_19_input_8_Template, 1, 0, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AddSystemComponent_div_1_form_8_div_19_select_10_Template, 3, 2, "select", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AddSystemComponent_div_1_form_8_div_19_select_11_Template, 8, 1, "select", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "select", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "No Encryption");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " BASE 64 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " SHA 256 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " SHA 512 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AddSystemComponent_div_1_form_8_div_19_a_27_Template, 2, 0, "a", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r64 = ctx.index;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r61.headerTagData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP" || ctx_r61.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && !ctx_r61.fileUploadClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && ctx_r61.fileUploadClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" || ctx_r61.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.submitFlag);
} }
function AddSystemComponent_div_1_form_8_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_8_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "fieldset", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddSystemComponent_div_1_form_8_div_2_Template, 3, 0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Default Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Encryption Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AddSystemComponent_div_1_form_8_div_19_Template, 28, 8, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_8_Template_div_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r90.addBioDocs(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, AddSystemComponent_div_1_form_8_a_22_Template, 3, 0, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_8_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r91); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r92.next("incomingMessageConfiguration"); })("click", function AddSystemComponent_div_1_form_8_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r91); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r93.submit2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_8_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r91); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r94.previous("incomingMessageConfiguration"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r6.tcpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r6.submitFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.messageConfigurationForm.value.sysChannel[0].messageFormat !== "XML");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.label2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.tcpForm.get("sysService")["controls"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.submitFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r6.submitFlag || !ctx_r6.tcpForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r6.submitFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c2));
} }
function AddSystemComponent_div_1_form_9_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_li_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r101.value("1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Incoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_li_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r103.value("1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Incoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_li_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r106); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r105.value("2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Outgoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_li_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r108); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r107.value("2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Outgoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 101, 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_9_div_1_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r114); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r113.uploadFileXml($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r114); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r115.chooseFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r129 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r129);
} }
function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_28_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r131 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r131);
} }
function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Type of Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_28_option_4_Template, 2, 2, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r120.queArray);
} }
function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Queue Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Queue Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connection Factory");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connection Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connecting String");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Incoming Message Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Incoming Message Protocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_Template_select_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r133); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5); return ctx_r132.onProtocalSlection($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "HTTPS/HTTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "MDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "EJB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "DB Connection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "select", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_option_27_Template, 2, 2, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_28_Template, 5, 1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_29_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_30_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_31_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_32_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_33_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_34_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_35_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_36_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r133); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5); return ctx_r134.next1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r133); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5); return ctx_r135.previousAll("1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r118 = ctx.index;
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r116.dataType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r116.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r116.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r116.messageConfigurationForm.value.sysChannel[0].queueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r116.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r116.messageConfigurationForm.value.sysChannel[0].queueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r116.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r116.messageConfigurationForm.value.sysChannel[0].queueType === "IBM");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r116.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r116.messageConfigurationForm.value.sysChannel[0].queueType === "JMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r116.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r116.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r116.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r116.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r116.messageConfigurationForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c2));
} }
function AddSystemComponent_div_1_form_9_div_9_form_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_Template, 47, 14, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r110.messageConfigurationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r110.messageConfigurationForm.get("sysChannel")["controls"]);
} }
function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r145 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", header_r145.headerTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", header_r145.headerTag, " ");
} }
function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_select_6_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mkey_r147 = ctx.$implicit;
    const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r146.try(mkey_r147.fieldNo))("value", mkey_r147.fieldNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", mkey_r147.fieldNo, " ", mkey_r147.fieldName, " ");
} }
function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_select_6_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r150); const i_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5); return ctx_r148.onSelectingMessageBasis($event, i_r138); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_select_6_option_1_Template, 2, 4, "option", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r140.isoRespData);
} }
function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_select_7_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mkey_r152 = ctx.$implicit;
    const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r151.try(mkey_r152))("value", mkey_r152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", mkey_r152, " ");
} }
function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_select_7_Template(rf, ctx) { if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_select_7_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r155); const i_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5); return ctx_r153.onselectingTag($event, i_r138); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_select_7_option_1_Template, 2, 3, "option", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r141.xmlRespData);
} }
function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_input_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 128);
} }
function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_select_10_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r157 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", type_r157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", type_r157, " ");
} }
function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_select_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_select_10_option_1_Template, 2, 2, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "dataType_", i_r138, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r143.typeDataIso);
} }
function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_select_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "option", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Numeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "option", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Alpha Numeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "dataType_", i_r138, "");
} }
function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_option_4_Template, 2, 2, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_select_6_Template, 2, 1, "select", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_select_7_Template, 2, 1, "select", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_input_8_Template, 1, 0, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_select_10_Template, 3, 2, "select", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_select_11_Template, 8, 1, "select", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "select", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "No Encryption");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " BASE 64 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " SHA 256 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " SHA 512 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "a", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_Template_a_click_27_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r161); const i_r138 = restoredCtx.index; const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5); return ctx_r160.delete(i_r138); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "img", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r138 = ctx.index;
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r138);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r136.headerTagData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r136.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP" || ctx_r136.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r136.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && !ctx_r136.fileUploadClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r136.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && ctx_r136.fileUploadClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r136.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r136.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" || ctx_r136.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");
} }
function AddSystemComponent_div_1_form_9_div_9_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Default Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Encryption Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_Template, 29, 7, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_form_3_Template_div_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r163); const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r162.addBioDocs(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_form_3_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r163); const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r164.allMethod(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_form_3_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r163); const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r165.previousAll("2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r111.tcpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r111.label2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r111.tcpForm.get("sysService")["controls"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r111.tcpForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c2));
} }
function AddSystemComponent_div_1_form_9_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_9_div_1_Template, 8, 0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddSystemComponent_div_1_form_9_div_9_form_2_Template, 2, 2, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_div_9_form_3_Template, 33, 6, "form", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r99.messageConfigurationForm.value.sysChannel[0].messageFormat == "XML" && ctx_r99.tab12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r99.basicInfoForm.value.messsageType === "A" && ctx_r99.tab11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r99.tab12);
} }
function AddSystemComponent_div_1_form_9_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 101, 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_10_div_1_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r171); const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r170.uploadFileXml1($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r171); const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r172.chooseFile1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r186 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r186);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r186);
} }
function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_28_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r188 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r188);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r188);
} }
function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Type of Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_28_option_4_Template, 2, 2, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r177.queArray);
} }
function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Queue Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Queue Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connection Factory");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connection Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connecting String");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Outgoing Message Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Outgoing Message Protocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_Template_select_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r190); const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5); return ctx_r189.onProtocalSlection1($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "HTTPS/HTTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "MDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "EJB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "DB Connection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "select", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_option_27_Template, 2, 2, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_28_Template, 5, 1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_29_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_30_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_31_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_32_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_33_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_34_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_35_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_36_Template, 4, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r190); const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5); return ctx_r191.next2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r190); const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5); return ctx_r192.previousAll("3"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r175 = ctx.index;
    const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r175);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r173.dataType1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r173.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r173.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r173.messageConfigurationForm1.value.sysChannel[0].queueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r173.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r173.messageConfigurationForm1.value.sysChannel[0].queueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r173.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r173.messageConfigurationForm1.value.sysChannel[0].queueType === "IBM");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r173.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r173.messageConfigurationForm1.value.sysChannel[0].queueType === "JMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r173.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r173.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r173.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r173.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r173.messageConfigurationForm1.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c2));
} }
function AddSystemComponent_div_1_form_9_div_10_form_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_Template, 47, 14, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r167.messageConfigurationForm1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r167.messageConfigurationForm1.get("sysChannel")["controls"]);
} }
function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r204 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", header_r204.headerTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", header_r204.headerTag, " ");
} }
function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_select_6_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mkey_r206 = ctx.$implicit;
    const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r205.try(mkey_r206.fieldNo))("value", mkey_r206.fieldNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", mkey_r206.fieldNo, " ", mkey_r206.fieldName, " ");
} }
function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_select_6_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r209); const i_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5); return ctx_r207.onSelectingMessageBasis1($event, i_r196); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_select_6_option_1_Template, 2, 4, "option", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r198.isoRespData1);
} }
function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_select_7_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mkey_r211 = ctx.$implicit;
    const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r210.try(mkey_r211))("value", mkey_r211);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", mkey_r211, " ");
} }
function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_select_7_Template(rf, ctx) { if (rf & 1) {
    const _r214 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_select_7_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r214); const i_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5); return ctx_r212.onselectingTag1($event, i_r196); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_select_7_option_1_Template, 2, 3, "option", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r199.xmlRespData1);
} }
function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_input_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 128);
} }
function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_select_10_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r216 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", type_r216);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", type_r216, " ");
} }
function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_select_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_select_10_option_1_Template, 2, 2, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "dataType_", i_r196, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r201.typeDataIso1);
} }
function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_select_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "option", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Numeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "option", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Alpha Numeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "dataType_", i_r196, "");
} }
function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_a_27_Template(rf, ctx) { if (rf & 1) {
    const _r221 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_a_27_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r221); const i_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5); return ctx_r219.delete1(i_r196); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_option_4_Template, 2, 2, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_select_6_Template, 2, 1, "select", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_select_7_Template, 2, 1, "select", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_input_8_Template, 1, 0, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_select_10_Template, 3, 2, "select", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_select_11_Template, 8, 1, "select", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "select", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "No Encryption");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " BASE 64 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " SHA 256 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " SHA 512 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_a_27_Template, 2, 0, "a", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r196 = ctx.index;
    const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r196);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r193.headerTagData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r193.messageConfigurationForm1.value.sysChannel[0].messageChannel === "TCP/IP" || ctx_r193.messageConfigurationForm1.value.sysChannel[0].messageFormat === "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r193.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML" && !ctx_r193.fileUploadClickAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r193.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML" && ctx_r193.fileUploadClickAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r193.messageConfigurationForm1.value.sysChannel[0].messageChannel === "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r193.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML" || ctx_r193.messageConfigurationForm1.value.sysChannel[0].messageFormat === "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r193.submitFlagAll);
} }
function AddSystemComponent_div_1_form_9_div_10_form_3_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_10_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r223 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "fieldset", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Default Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Encryption Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_Template, 28, 8, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_form_3_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r223); const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r222.addBioDocs1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, AddSystemComponent_div_1_form_9_div_10_form_3_a_21_Template, 3, 0, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_form_3_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r223); const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r224.submitAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_form_3_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r223); const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r225.previousAll("4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r168.tcpForm1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r168.submitFlagAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r168.label2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r168.tcpForm1.get("sysService")["controls"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r168.submitFlagAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r168.submitFlagAll || !ctx_r168.tcpForm1.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r168.submitFlagAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c2));
} }
function AddSystemComponent_div_1_form_9_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_10_div_1_Template, 8, 0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddSystemComponent_div_1_form_9_div_10_form_2_Template, 2, 2, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_div_10_form_3_Template, 32, 9, "form", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r100.messageConfigurationForm1.value.sysChannel[0].messageFormat == "XML" && ctx_r100.tab22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r100.basicInfoForm.value.messsageType === "A" && ctx_r100.tab21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r100.tab22);
} }
function AddSystemComponent_div_1_form_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ul", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_li_3_Template, 3, 0, "li", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_9_li_4_Template, 3, 0, "li", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AddSystemComponent_div_1_form_9_li_5_Template, 3, 0, "li", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_9_li_6_Template, 3, 0, "li", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AddSystemComponent_div_1_form_9_div_9_Template, 4, 3, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AddSystemComponent_div_1_form_9_div_10_Template, 4, 3, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.tab1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r7.tab1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r7.tab2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.tab2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.tab1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.tab2);
} }
function AddSystemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Add System");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_4_Template, 84, 21, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AddSystemComponent_div_1_form_5_Template, 2, 2, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddSystemComponent_div_1_div_6_Template, 12, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AddSystemComponent_div_1_div_7_Template, 11, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AddSystemComponent_div_1_form_8_Template, 33, 10, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AddSystemComponent_div_1_form_9_Template, 11, 6, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.basicConfiguration);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.messageConfiguration && ctx_r1.basicInfoForm.value.messsageType !== "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.mdb && ctx_r1.basicInfoForm.value.messsageType !== "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.messageConfigurationForm.value.sysChannel[0].messageFormat == "XML" && ctx_r1.incomingMessageConfiguration === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.incomingMessageConfiguration);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.basicInfoForm.value.messsageType == "A" && ctx_r1.all === true);
} }
class AddSystemComponent {
    constructor(fb, addSystem, router, toastService, spinner) {
        this.fb = fb;
        this.addSystem = addSystem;
        this.router = router;
        this.toastService = toastService;
        this.spinner = spinner;
        this.basicConfiguration = true;
        this.isoRespData = [];
        this.messageBasisIso = [];
        this.headerTagData = [];
        this.encryptionArray = [];
        this.xmlRespData = [];
        this.result = [];
        this.tab1 = true;
        this.array = [];
        this.arrayMessageConfig = [];
        this.submitFlag = true;
        this.submitFlagAll = true;
        this.loading = true;
        this.tempArrayList = [];
        this.editFlag = true;
        this.fileUploadClick = false;
        this.fileUploadClickAll = false;
        this.tab11 = true;
    }
    ngOnInit() {
        this.currentUser = localStorage.getItem("userFromLogin");
        this.tempArrayList = [];
        this.fetchingHeadertag();
        this.messsageTypeArray = ["I", "O", "A"];
        this.queArray = ["IBM", "JMS"];
        this.encryptionArray = ["No Encryption", "BASE 64", "SHA 264", "SHA 512"];
        this.selections = "No Encryption";
        this.serviceTypeArray = ["server", "client"];
        this.protocolArray = ["TCP/IP", "HTTPS/HTTP", "MDB", "EJB", "DB Connection"];
        this.buildForm(null);
        this.tcpForm = this.fb.group({
            sysService: this.fb.array([this.createSysService()]),
        });
        this.tcpForm1 = this.fb.group({
            sysService: this.fb.array([this.createSysService1()]),
        });
        this.messageConfigurationForm1 = this.fb.group({
            sysChannel: this.fb.array([this.createSysChannel1()]),
        });
        this.messageConfigurationForm = this.fb.group({
            sysChannel: this.fb.array([this.createSysChannel()]),
        });
        this.addSystem.getIndex().subscribe(resp => {
            if (resp.index) {
                this.index = resp.index;
                this.addSystem.fecthingAddSystem().subscribe((dataresp) => {
                    if (dataresp) {
                        this.getRespBasedOnId(dataresp, resp.index);
                    }
                });
            }
            else {
                this.loading = false;
            }
        });
    }
    buildForm(item) {
        this.basicInfoForm = this.fb.group({
            systemId: [item ? item.systemId : ""],
            systemCode: [item ? item.systemCode : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            systemName: [item ? item.systemName : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            serviceType: [item ? item.serviceType : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            messsageType: [item ? item.messsageType : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            medianIp: [item ? item.medianIp : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            medianPort: [item ? item.medianPort : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
            sourceIp: [item ? item.sourceIp : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$")]],
            sourcePort: [item ? item.sourcePort : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
        });
    }
    getRespBasedOnId(resp, arg0) {
        this.fileUploadClick = true;
        this.respData = resp.find(item => item.systemId == arg0);
        this.loading = false;
        this.auditLog();
        //messageConfiguration
        this.editFlag = false;
        this.arrayMessageConfig = this.respData.sysChannel;
        this.arrayMessageConfig = this.respData.sysChannel;
        if (this.respData.messsageType == 'A') {
            this.arrayMessageConfig = this.arrayMessageConfig.filter(item => item.messageType == "I" || item.messageType == "O");
        }
        if (this.respData.messsageType === 'A') {
            this.fileUploadClickAll = true;
            this.arrayMessageConfig = this.arrayMessageConfig.filter(item => item.messageType == "I");
        }
        this.onProtocalSlection(this.arrayMessageConfig[0].messageChannel);
        if (this.arrayMessageConfig[0].messageChannel === "TCP/IP" || this.arrayMessageConfig[0].messageFormat === "JSON") {
            this.fetchingIso();
            this.label2 = 'Field No';
        }
        if (this.arrayMessageConfig[0].messageChannel.messageFormat === "XML") {
            this.fetchingXMl();
            this.label2 = 'Tag';
        }
        while (this.formArrMessageConfig.length > 0) {
            this.formArrMessageConfig.removeAt(this.formArrMessageConfig.length - 1);
        }
        this.arrayMessageConfig.forEach((x) => {
            this.formArrMessageConfig.push(this.fb.group(x));
        });
        //tcForm
        this.array = this.arrayMessageConfig[0].sysService;
        this.onProtocalSlection(this.arrayMessageConfig[0].messageChannel);
        while (this.formArr.length > 0) {
            this.formArr.removeAt(this.formArr.length - 1);
        }
        this.array.forEach((x) => {
            this.formArr.push(this.fb.group(x));
        });
        if (this.respData.sysChannel.length > 1) {
            this.arrayMessageConfig1 = this.respData.sysChannel;
            this.arrayMessageConfig1 = this.arrayMessageConfig1.filter(item => item.messageType == "O");
            this.onProtocalSlection1(this.arrayMessageConfig1[0].messageChannel);
            while (this.formArrMessageConfig1.length > 0) {
                this.formArrMessageConfig1.removeAt(this.formArrMessageConfig1.length - 1);
            }
            this.arrayMessageConfig1.forEach((x) => {
                this.formArrMessageConfig1.push(this.fb.group(x));
            });
            //tcForm1
            this.array1 = this.arrayMessageConfig1[0].sysService;
            this.onProtocalSlection1(this.arrayMessageConfig1[0].messageChannel);
            while (this.formArr1.length > 0) {
                this.formArr1.removeAt(this.formArr1.length - 1);
            }
            this.array1.forEach((x) => {
                this.formArr1.push(this.fb.group(x));
            });
        }
        this.buildForm(this.respData);
        this.auditLog();
        this.spinner.hide();
    }
    get formArr() {
        return this.tcpForm.get('sysService');
    }
    get formArr1() {
        return this.tcpForm1.get('sysService');
    }
    get formArrMessageConfig() {
        return this.messageConfigurationForm.get('sysChannel');
    }
    get formArrMessageConfig1() {
        return this.messageConfigurationForm1.get('sysChannel');
    }
    createSysChannel() {
        return this.fb.group({
            channelId: [""],
            dbConnectString: [""],
            dbPassword: [""],
            dbServiceName: [""],
            dbUsername: [""],
            queueChannel: [""],
            queueConnFactory: [""],
            queueManager: [""],
            queueName: [""],
            queueType: [""],
            messageChannel: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            messageFormat: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            messageType: [""],
        });
    }
    createSysChannel1() {
        return this.fb.group({
            channelId: [""],
            dbConnectString: [""],
            dbPassword: [""],
            dbServiceName: [""],
            dbUsername: [""],
            queueChannel: [""],
            queueConnFactory: [""],
            queueManager: [""],
            queueName: [""],
            queueType: [""],
            messageChannel: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            messageFormat: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            messageType: [""],
        });
    }
    createSysService() {
        return this.fb.group({
            channelId: [""],
            dataType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            encryption: ["No Encryption", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            headerTag: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            headerValue: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            messageBasis: [""],
            messageKey: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            serviceId: [""],
            systemChannelId: [""],
        });
    }
    createSysService1() {
        return this.fb.group({
            channelId: [""],
            dataType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            encryption: ["No Encryption", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            headerTag: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            headerValue: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            messageBasis: [""],
            messageKey: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            serviceId: [""],
            systemChannelId: [""],
        });
    }
    allMethod() {
        this.tab1 = false;
        this.tab2 = true;
        this.tab21 = true;
        this.tab22 = false;
    }
    auditLog() {
        if (this.respData.approvedStatus === 'N') {
            this.respData.approvedStatus = 'UNAUTHORIZED';
        }
        if (this.respData.approvedStatus === 'Y') {
            this.respData.approvedStatus = 'AUTHORIZED';
        }
        if (this.respData.approvedStatus === 'A') {
            this.respData.approvedStatus = 'AUTHORIZED';
        }
        if (this.respData.approvedStatus === 'U') {
            this.respData.approvedStatus = 'UNAUTHORIZED';
        }
        if (this.respData.recordStatus === 'O') {
            this.respData.recordStatus = 'OPEN';
        }
        if (this.respData.recordStatus === 'C') {
            this.respData.recordStatus = 'CLOSED';
        }
        if (this.respData.approvedEver === 'N') {
            this.respData.approvedEver = 'NO';
        }
        if (this.respData.approvedEver === 'Y') {
            this.respData.approvedEver = 'YES';
        }
    }
    next(value) {
        if (value === "basicConfiguration") {
            console.log(this.index);
            this.addSystem.validateCode(this.basicInfoForm.value.systemCode).subscribe((result) => {
                console.log(result);
                this.isSysCodeAlreadyExist = result.exists;
                this.sysCodeError = result.response;
                if (this.isSysCodeAlreadyExist === true && this.index === undefined) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ title: this.sysCodeError + ' !',
                        icon: 'error'
                    });
                    this.all = false;
                    return;
                }
                else {
                    if (this.index === undefined) {
                        this.ipAddressValidating();
                    }
                    else {
                        if (this.basicInfoForm.value.messsageType == 'I') {
                            this.messageType = "Incoming";
                        }
                        if (this.basicInfoForm.value.messsageType == 'O') {
                            this.messageType = "Outgoing";
                        }
                        this.basicConfiguration = false;
                        this.messageConfiguration = true;
                        this.incomingMessageConfiguration = false;
                        this.xml = false;
                        this.mdbXml = false;
                        this.incomingMdbXml = false;
                        this.dbConnection = false;
                    }
                }
            });
        }
        if (value === "messageConfiguration" && this.basicInfoForm.value.messsageType !== 'A') {
            if ((this.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML") && this.basicInfoForm.value.messsageType != 'A') {
                this.messageConfigurationForm.value.sysChannel[0].messageType =
                    this.basicInfoForm.value.messsageType;
                this.basicConfiguration = false;
                this.messageConfiguration = false;
                this.incomingMessageConfiguration = true;
                this.xml = false;
                this.mdb = false;
                this.mdbXml = false;
                this.incomingMdbXml = false;
                this.dbConnection = false;
                if (this.index === undefined && this.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON") {
                    this.fetchingIso();
                    this.label2 = 'Field No';
                }
                if (this.index !== undefined && this.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON") {
                    this.label2 = 'Field No';
                }
                if (this.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML") {
                    this.fetchingXMl();
                    this.label2 = 'Tag';
                }
            }
            if ((this.messageConfigurationForm.value.sysChannel[0].messageFormat === "FLATFILE" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "CSV/EXCEL") && this.basicInfoForm.value.messsageType != 'A') {
                this.messageConfigurationForm.value.sysChannel[0].messageType =
                    this.basicInfoForm.value.messsageType;
                this.basicConfiguration = false;
                this.messageConfiguration = false;
                this.incomingMessageConfiguration = false;
                this.xml = false;
                this.mdb = true;
                this.mdbXml = false;
                this.incomingMdbXml = false;
                this.dbConnection = false;
            }
        }
        if (value === "basicConfiguration" && this.basicInfoForm.value.messsageType === 'A') {
            this.all = true;
            this.tab1 = true;
            this.tab11 = true;
            this.tab12 = false;
            this.tab2 = false;
        }
    }
    ipAddressValidating() {
        let payload = {};
        payload.sourceIp = this.basicInfoForm.value.sourceIp,
            payload.sourcePort = this.basicInfoForm.value.sourcePort,
            payload.medianIp = this.basicInfoForm.value.medianIp,
            payload.medianPort = this.basicInfoForm.value.medianPort;
        this.addSystem.validatePort(payload).subscribe(resp => {
            if (resp == true) {
                if (this.basicInfoForm.value.messsageType == 'I') {
                    this.messageType = "Incoming";
                }
                if (this.basicInfoForm.value.messsageType == 'O') {
                    this.messageType = "Outgoing";
                }
                this.basicConfiguration = false;
                this.messageConfiguration = true;
                this.incomingMessageConfiguration = false;
                this.xml = false;
                this.mdbXml = false;
                this.incomingMdbXml = false;
                this.dbConnection = false;
            }
        }, error => {
            console.log(error);
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ title: error.error.message + ' !',
                icon: 'error'
            });
            this.all = false;
            return;
        });
    }
    next1() {
        if (this.index === undefined && this.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON") {
            this.fetchingIso();
            this.label2 = 'Field No';
        }
        if (this.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML") {
            this.fetchingXMl();
            this.label2 = 'Tag';
        }
        this.tab1 = true;
        this.tab11 = false;
        this.tab12 = true;
        this.tab2 = false;
    }
    next2() {
        if (this.messageConfigurationForm1.value.sysChannel[0].messageChannel === "TCP/IP" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON") {
            this.fetchingIso1();
            this.label3 = 'Field No';
        }
        if (this.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML") {
            this.fetchingXMl1();
            this.label3 = 'Tag';
        }
        this.tab1 = false;
        this.tab2 = true;
        this.tab21 = false;
        this.tab22 = true;
    }
    onClickOfAuth() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: 'You are trying to Authorize record. ' + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#3e54b8',
            cancelButtonColor: '#d33',
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: 'NO',
            confirmButtonText: 'YES', 'icon': 'info', iconColor: "#d33"
        }).then((result => {
            console.log("this is reopen ", result);
            if (result.isConfirmed === true) {
                if (this.currentUser === this.respData.creatorId) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: 'Maker Cannot Authorize Record!',
                        icon: 'error' });
                    return;
                }
                let obj_test = {};
                if (this.basicInfoForm.value.messsageType === "I" || this.basicInfoForm.value.messsageType === "O") {
                    obj_test = this.basicInfoForm.value;
                    obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
                    for (let index = 0; index < obj_test.sysChannel.length; index++) {
                        obj_test.sysChannel[index].sysService = this.tcpForm.value.sysService;
                    }
                }
                //submitAll
                if (this.basicInfoForm.value.messsageType === "A") {
                    obj_test = this.basicInfoForm.value;
                    obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
                    this.messageConfigurationForm.value.sysChannel[0].messageType = "I";
                    this.messageConfigurationForm1.value.sysChannel[0].messageType = "O";
                    obj_test.sysChannel.push(this.messageConfigurationForm1.value.sysChannel[0]);
                    obj_test.sysChannel[0].sysService = this.tcpForm.value.sysService;
                    obj_test.sysChannel[1].sysService = this.tcpForm1.value.sysService;
                }
                this.addSystem.editaddsystem("auth", this.currentUser, obj_test).subscribe((response) => {
                    if (response) {
                        this.respData = response;
                        this.auditLog();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: 'Record is Authorized',
                            icon: 'success' });
                    }
                });
            }
        }));
    }
    onClickOfClose() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: 'You are trying to Close record. ' + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#3e54b8',
            cancelButtonColor: '#d33',
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: 'NO',
            confirmButtonText: 'YES', 'icon': 'info', iconColor: "#d33"
        }).then((result => {
            console.log("this is reopen ", result);
            if (result.isConfirmed === true) {
                let obj_test = {};
                if (this.basicInfoForm.value.messsageType === "I" || this.basicInfoForm.value.messsageType === "O") {
                    obj_test = this.basicInfoForm.value;
                    obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
                    for (let index = 0; index < obj_test.sysChannel.length; index++) {
                        obj_test.sysChannel[index].sysService = this.tcpForm.value.sysService;
                    }
                }
                //submitAll
                if (this.basicInfoForm.value.messsageType === "A") {
                    obj_test = this.basicInfoForm.value;
                    obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
                    this.messageConfigurationForm.value.sysChannel[0].messageType = "I";
                    this.messageConfigurationForm1.value.sysChannel[0].messageType = "O";
                    obj_test.sysChannel.push(this.messageConfigurationForm1.value.sysChannel[0]);
                    obj_test.sysChannel[0].sysService = this.tcpForm.value.sysService;
                    obj_test.sysChannel[1].sysService = this.tcpForm1.value.sysService;
                }
                this.addSystem.editaddsystem("close", this.currentUser, obj_test).subscribe((response) => {
                    if (response) {
                        this.respData = response;
                        this.auditLog();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: 'Record is Closed',
                            icon: 'success' });
                    }
                });
            }
        }));
    }
    onClickOfReopen() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: 'You are trying to Reopen record. ' + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#3e54b8',
            cancelButtonColor: '#d33',
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: 'NO',
            confirmButtonText: 'YES', 'icon': 'info', iconColor: "#d33"
        }).then((result => {
            console.log("this is reopen ", result);
            if (result.isConfirmed === true) {
                let obj_test = {};
                if (this.basicInfoForm.value.messsageType === "I" || this.basicInfoForm.value.messsageType === "O") {
                    obj_test = this.basicInfoForm.value;
                    obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
                    for (let index = 0; index < obj_test.sysChannel.length; index++) {
                        obj_test.sysChannel[index].sysService = this.tcpForm.value.sysService;
                    }
                }
                //submitAll
                if (this.basicInfoForm.value.messsageType === "A") {
                    obj_test = this.basicInfoForm.value;
                    obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
                    this.messageConfigurationForm.value.sysChannel[0].messageType = "I";
                    this.messageConfigurationForm1.value.sysChannel[0].messageType = "O";
                    obj_test.sysChannel.push(this.messageConfigurationForm1.value.sysChannel[0]);
                    obj_test.sysChannel[0].sysService = this.tcpForm.value.sysService;
                    obj_test.sysChannel[1].sysService = this.tcpForm1.value.sysService;
                }
                this.addSystem.editaddsystem("open", this.currentUser, obj_test).subscribe((response) => {
                    if (response) {
                        this.respData = response;
                        this.auditLog();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: 'Record is Reopened',
                            icon: 'success' });
                    }
                });
            }
        }));
        //submit2
    }
    OndeleteofUser() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: 'You are trying to Delete record. ' + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#3e54b8',
            cancelButtonColor: '#d33',
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: 'NO',
            confirmButtonText: 'YES', 'icon': 'info', iconColor: "#d33"
        }).then((result => {
            console.log("this is reopen ", result);
            if (result.isConfirmed === true) {
                this.addSystem.deleteAddSystem(this.currentUser, this.respData.systemId).subscribe((response) => {
                    if (response) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: 'Record is Deleted',
                            icon: 'success' });
                        this.router.navigate(['/addSystem/summary']);
                    }
                });
            }
        }));
    }
    previousAll(value) {
        if (value === '1') {
            this.basicConfiguration = true;
            this.messageConfiguration = false;
            this.incomingMessageConfiguration = false;
            this.xml = false;
            this.mdbXml = false;
            this.incomingMdbXml = false;
            this.dbConnection = false;
            this.tab1 = false;
            this.tab2 = false;
            this.all = false;
        }
        if (value === '2') {
            this.basicConfiguration = false;
            this.messageConfiguration = false;
            this.incomingMessageConfiguration = false;
            this.xml = false;
            this.mdbXml = false;
            this.incomingMdbXml = false;
            this.dbConnection = false;
            this.tab1 = true;
            this.tab11 = true;
            this.tab12 = false;
            this.tab2 = false;
        }
        if (value === '3') {
            this.basicConfiguration = false;
            this.messageConfiguration = false;
            this.incomingMessageConfiguration = false;
            this.xml = false;
            this.mdbXml = false;
            this.incomingMdbXml = false;
            this.dbConnection = false;
            this.tab1 = true;
            this.tab11 = false;
            this.tab12 = true;
            this.tab2 = false;
        }
        if (value === '4') {
            this.basicConfiguration = false;
            this.messageConfiguration = false;
            this.incomingMessageConfiguration = false;
            this.xml = false;
            this.mdbXml = false;
            this.incomingMdbXml = false;
            this.dbConnection = false;
            this.tab1 = false;
            this.tab2 = true;
            this.tab21 = true;
            this.tab22 = false;
        }
    }
    previous(value) {
        if (value === "messageConfiguration") {
            this.basicConfiguration = true;
            this.messageConfiguration = false;
            this.incomingMessageConfiguration = false;
            this.xml = false;
            this.mdbXml = false;
            this.incomingMdbXml = false;
            this.dbConnection = false;
            this.all = false;
            this.mdb = false;
        }
        if (value === "incomingMessageConfiguration") {
            this.incomingMessageConfiguration = false;
            this.xml = false;
            this.basicConfiguration = false;
            this.messageConfiguration = true;
            this.mdbXml = false;
            this.incomingMdbXml = false;
            this.dbConnection = false;
            this.mdb = false;
        }
    }
    onProtocalSlection(event) {
        this.tempArrayList = [];
        // this.messageConfigurationForm.get('messageFormat').setValue("");
        //  this.messageConfigurationForm.get('sysChannel')['controls'][0].get('messageFormat').setValue("");
        if (event === "TCP/IP") {
            this.dataType = [];
            this.dataType = ["ISO 8583 1987", "ISO 8583 1993", "ISO 8583 2003"];
        }
        else if (event === "Https/Http") {
            this.dataType = [];
            this.dataType = ["XML", "JSON"];
        }
        else if (event === "EJB" ||
            event === "DB Connection" ||
            event === "MDB") {
            this.dataType = [];
            this.dataType = ["XML", "JSON", "CSV/EXCEL", "FLATFILE"];
        }
    }
    onProtocalSlection1(event) {
        //this.messageConfigurationForm1.get('sysChannel')['controls'][0].get('messageFormat').setValue("");
        if (event === "TCP/IP") {
            this.dataType1 = [];
            this.dataType1 = ["ISO 8583 1987", "ISO 8583 1993", "ISO 8583 2003"];
        }
        else if (event === "Https/Http") {
            this.dataType1 = [];
            this.dataType1 = ["XML", "JSON"];
        }
        else if (event === "EJB" ||
            event === "DB Connection" ||
            event === "MDB") {
            this.dataType1 = [];
            this.dataType1 = ["XML", "JSON", "CSV/EXCEL", "FLATFILE"];
        }
    }
    addBioDocs() {
        this.sysService = this.tcpForm.get('sysService');
        this.sysService.push(this.createSysService());
    }
    addBioDocs1() {
        this.sysService = this.tcpForm1.get('sysService');
        this.sysService.push(this.createSysService());
    }
    submit2() {
        if (this.tcpForm.value.sysService.some(sysService => sysService['headerTag'] === 'OPERATION') &&
            this.tcpForm.value.sysService.some(mdmtSystemService => mdmtSystemService['headerTag'] === 'SERVICE')) {
            let obj_test = {};
            obj_test = this.basicInfoForm.value;
            obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
            for (let index = 0; index < obj_test.sysChannel.length; index++) {
                obj_test.sysChannel[index].sysService = this.tcpForm.value.sysService;
            }
            if (this.index) {
                this.addSystem.editaddsystem("update", this.currentUser, obj_test).subscribe(addSysResp => {
                    if (addSysResp) {
                        this.submitFlag = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: 'Record is Updated',
                            icon: 'success' });
                    }
                }, error => {
                    console.log('error resp :: ', error);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: error.error,
                        icon: 'error' });
                });
            }
            else {
                this.addSystem.submittingAddSystem(obj_test, this.currentUser).subscribe(addSysResp => {
                    if (addSysResp) {
                        this.submitFlag = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: 'Record is Created',
                            icon: 'success' });
                    }
                }, error => {
                    console.log('error resp :: ', error);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: error.error,
                        icon: 'error' });
                });
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: 'Header value OPERATION and SERVICE are mandatory !',
                icon: 'info' });
        }
    }
    fetchingIso() {
        this.addSystem.fetchingIsoForTcp().subscribe(isoResp => {
            this.isoRespData = isoResp;
            if (isoResp) {
                this.messageBasisIso = isoResp.map((data) => {
                    return data.fieldName;
                });
                // for dropdown 1
                this.messageKeyIso = isoResp.map((data) => {
                    return data.fieldNo;
                });
                this.typeDataIso = isoResp.map((data) => {
                    return data.dataType;
                });
                this.headerValueIso = isoResp.map((data) => {
                    return data.headerValue;
                });
            }
        });
    }
    fetchingIso1() {
        this.addSystem.fetchingIsoForTcp().subscribe(isoResp => {
            this.isoRespData1 = isoResp;
            if (isoResp) {
                this.messageBasisIso1 = isoResp.map((data) => {
                    return data.fieldName;
                });
                // for dropdown 1
                this.messageKeyIso1 = isoResp.map((data) => {
                    return data.fieldNo;
                });
                this.typeDataIso1 = isoResp.map((data) => {
                    return data.dataType;
                });
                this.headerValueIso1 = isoResp.map((data) => {
                    return data.headerValue;
                });
            }
        });
    }
    fetchingXMl() {
        this.addSystem.gettinXMLmsgIncoming().subscribe(xmlResp => {
            this.xmlRespData = xmlResp;
            if (xmlResp) {
                this.messageBasisIso = xmlResp.map((data) => {
                    return data.messageBasis;
                });
                this.messageKeyIso = xmlResp.map((data) => {
                    return data.messageKey;
                });
                this.typeDataIso = xmlResp.map((data) => {
                    return data.dataType;
                });
                this.headerValueIso = xmlResp.map((data) => {
                    return data.headerValue;
                });
            }
        });
    }
    onSubmitEditAddSystem() {
        console.log("This is Edit Charge Maintenance");
        this.editFlag = true;
        console.log(this.editFlag);
    }
    fetchingXMl1() {
        this.addSystem.gettinXMLmsgIncoming().subscribe(xmlResp => {
            this.xmlRespData1 = xmlResp;
            if (xmlResp) {
                this.messageBasisIso = xmlResp.map((data) => {
                    return data.messageBasis;
                });
                this.messageKeyIso = xmlResp.map((data) => {
                    return data.messageKey;
                });
                this.typeDataIso = xmlResp.map((data) => {
                    return data.dataType;
                });
                this.headerValueIso = xmlResp.map((data) => {
                    return data.headerValue;
                });
            }
        });
    }
    onSelectingMessageBasis(event, i) {
        if (this.tempArrayList[i]) {
            this.tempArrayList[i] = event.target.value;
        }
        else {
            this.tempArrayList.push(event.target.value);
        }
        var x = this.isoRespData.find(item => item.fieldNo == event.target.value);
        this.tcpForm.get('sysService')['controls'][i].get('messageBasis').setValue(x.fieldName);
        this.tcpForm.get('sysService')['controls'][i].get('dataType').setValue(x.dataType);
    }
    onSelectingMessageBasis1(event, i) {
        if (this.tempArrayList[i]) {
            this.tempArrayList[i] = event.target.value;
        }
        else {
            this.tempArrayList.push(event.target.value);
        }
        var x = this.isoRespData1.find(item => item.fieldNo == event.target.value);
        this.tcpForm1.get('sysService')['controls'][i].get('messageBasis').setValue(x.fieldName);
        this.tcpForm1.get('sysService')['controls'][i].get('dataType').setValue(x.dataType);
    }
    try(value) {
        if (this.tempArrayList.find(item => item == value)) {
            return true;
        }
        else {
            return false;
        }
    }
    fetchingHeadertag() {
        this.addSystem.fetchingHeaderTag().subscribe(resp => {
            this.headerTagData = resp;
        });
    }
    chooseFile() {
        document.getElementById('chFile').click();
    }
    chooseFile1() {
        document.getElementById('chFile1').click();
    }
    uploadFileXml(event) {
        this.selectedFiles = event.target.files;
        this.sizeOfFile = this.selectedFiles.item(0).size;
        this.currentFileUpload = this.selectedFiles.item(0);
        this.fileName = this.currentFileUpload.name;
        this.fileUploadWrapper.nativeElement.setAttribute('data-text', this.fileName);
        this.addSystem.gettingHederofXMl(this.currentFileUpload).subscribe(xmlResp => {
            if (xmlResp) {
                this.uploadXmlResp = xmlResp;
                this.messageBasisIso = xmlResp.nodeTagList;
                this.xmlRespData = xmlResp.nodeTagList;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: 'File Uploaded Successfully',
                    icon: 'success' });
                this.fileUploadClick = false;
            }
        });
    }
    uploadFileXml1(event) {
        this.selectedFiles1 = event.target.files;
        this.sizeOfFile1 = this.selectedFiles1.item(0).size;
        this.currentFileUpload1 = this.selectedFiles1.item(0);
        this.fileName1 = this.currentFileUpload1.name;
        this.fileUploadWrapper1.nativeElement.setAttribute('data-text', this.fileName1);
        this.addSystem.gettingHederofXMl(this.currentFileUpload1).subscribe(xmlResp => {
            if (xmlResp) {
                this.uploadXmlResp1 = xmlResp;
                this.messageBasisIso1 = xmlResp.nodeTagList;
                this.xmlRespData1 = xmlResp.nodeTagList;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: 'File Uploaded Successfully',
                    icon: 'success' });
                this.fileUploadClickAll = false;
            }
        });
    }
    onselectingTag(event, i) {
        if (this.tempArrayList[i]) {
            this.tempArrayList[i] = event.target.value;
        }
        else {
            this.tempArrayList.push(event.target.value);
        }
        var result = Object.keys(this.uploadXmlResp.nodeValueMap).map((key) => [(key), this.uploadXmlResp.nodeValueMap[key]]);
        var x = result.find(item => item[0] == event.target.value);
        this.tcpForm.get('sysService')['controls'][i].get('headerValue').setValue(x[1]);
    }
    onselectingTag1(event, i) {
        if (this.tempArrayList[i]) {
            this.tempArrayList[i] = event.target.value;
        }
        else {
            this.tempArrayList.push(event.target.value);
        }
        var result = Object.keys(this.uploadXmlResp1.nodeValueMap).map((key) => [(key), this.uploadXmlResp1.nodeValueMap[key]]);
        var x = result.find(item => item[0] == event.target.value);
        this.tcpForm1.get('sysService')['controls'][i].get('headerValue').setValue(x[1]);
    }
    uploadFileXmlOut(event) {
        this.selectedFiles = event.target.files;
        this.sizeOfFile = this.selectedFiles.item(0).size;
        this.currentFileUpload = this.selectedFiles.item(0);
        this.fileNameOut = this.currentFileUpload.name;
        this.addSystem.gettingHederofXMl(this.currentFileUpload).subscribe(xmlResp => {
            if (xmlResp) {
                this.uploadXmlResp = xmlResp;
                this.messageBasisIso = xmlResp.nodeTagList;
            }
        }, (err) => {
        });
    }
    submitAll() {
        if (this.tcpForm.value.sysService.some(sysService => sysService['headerTag'] === 'OPERATION') &&
            this.tcpForm.value.sysService.some(mdmtSystemService => mdmtSystemService['headerTag'] === 'SERVICE') &&
            this.tcpForm1.value.sysService.some(sysService => sysService['headerTag'] === 'OPERATION') &&
            this.tcpForm1.value.sysService.some(mdmtSystemService => mdmtSystemService['headerTag'] === 'SERVICE')) {
            let obj_test = {};
            obj_test = this.basicInfoForm.value;
            obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
            this.messageConfigurationForm.value.sysChannel[0].messageType = "I";
            this.messageConfigurationForm1.value.sysChannel[0].messageType = "O";
            obj_test.sysChannel.push(this.messageConfigurationForm1.value.sysChannel[0]);
            obj_test.sysChannel[0].sysService = this.tcpForm.value.sysService;
            obj_test.sysChannel[1].sysService = this.tcpForm1.value.sysService;
            console.log("obj_test ", obj_test);
            this.addSystem.submittingAddSystem(obj_test, this.currentUser).subscribe(addSysResp => {
                if (addSysResp) {
                    this.submitFlagAll = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: 'Record is Created',
                        icon: 'success' });
                }
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: 'Header value OPERATION and SERVICE are mandatory !',
                icon: 'info' });
        }
    }
    delete(index) {
        const deleteRecord = this.tcpForm.get('sysService');
        deleteRecord.removeAt(index);
    }
    delete1(index) {
        const deleteRecord1 = this.tcpForm1.get('sysService');
        deleteRecord1.removeAt(index);
    }
    value(val) {
        console.log(val);
        if (val === '1') {
            this.tab1 = true;
            this.tab2 = false;
            this.tab11 = true;
            this.tab12 = false;
        }
        if (val === '2') {
            this.tab1 = false;
            this.tab2 = true;
            this.tab21 = true;
            this.tab22 = false;
        }
    }
}
AddSystemComponent.ɵfac = function AddSystemComponent_Factory(t) { return new (t || AddSystemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_1__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService)); };
AddSystemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddSystemComponent, selectors: [["npr-add-system"]], viewQuery: function AddSystemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.fileUploadWrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.fileUploadWrapper1 = _t.first);
    } }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "pageContentMain", 4, "ngIf"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], [1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", "class", "formStyle", 3, "formGroup", 4, "ngIf"], ["action", "", "class", "formStyle", 4, "ngIf"], ["fxLayout", "row wrap", "class", "file", 4, "ngIf"], ["class", "formStyle", 3, "formGroup", 4, "ngIf"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "titleStyle", "mt-2", "mb-4"], [3, "disabled"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "codeLbl", 1, "formLbl"], [1, "colorRed"], ["id", "codeLbl", "type", "text", "formControlName", "systemCode", "value", "", 1, "form-control", 3, "readonly"], ["for", "name", 1, "formLbl"], ["id", "name", "type", "text", "formControlName", "systemName", "value", "", 1, "form-control", 3, "readonly"], ["formControlName", "serviceType", "aria-label", "Default select example", 1, "form-select"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["value", "server"], ["value", "client"], ["formControlName", "messsageType", "aria-label", "Default select example", "placeholder", "Please Select", 1, "form-select"], ["value", "I"], ["value", "O"], ["value", "A"], ["for", "externalIp", 1, "formLbl"], ["id", "externalIp", "pattern", "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$", "formControlName", "sourceIp", "type", "text", "value", "", 1, "form-control", 3, "readonly"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "externalPort", 1, "formLbl"], ["id", "externalPort", "type", "number", "maxlength", "4", "minlength", "2", "formControlName", "sourcePort", "type", "text", "value", "", 1, "form-control", 3, "readonly"], ["for", "medianIp", 1, "formLbl"], ["id", "medianIp", "formControlName", "medianIp", "type", "text", "value", "", "pattern", "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$", 1, "form-control", 3, "readonly"], ["for", "medianPort", 1, "formLbl"], ["id", "medianPort", "type", "number", "maxlength", "4", "minlength", "2", "formControlName", "medianPort", "type", "text", "value", "", 1, "form-control", 3, "readonly"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], ["type", "button", "href", "javascript:void(0);", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle", 4, "ngIf"], [1, "invalid-feedback"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["type", "button", "color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."], ["class", "dbCardStyle", "formArrayName", "sysChannel", 4, "ngFor", "ngForOf"], ["formArrayName", "sysChannel", 1, "dbCardStyle"], [1, "pageTitle1"], [1, "row", "gy-4", 3, "formGroupName"], ["formControlName", "messageChannel", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", "TCP/IP"], ["value", "Https/Http"], ["value", "MDB"], ["value", "EJB"], ["value", "DB Connection"], ["formControlName", "messageFormat", "aria-label", "Default select example", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-lg-4", 4, "ngIf"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnDarkGrey", 3, "click"], [3, "value"], ["formControlName", "queueType", "aria-label", "Default select example", 1, "form-select"], ["id", "queueManager", "type", "text", "formControlName", "queueManager", "placeholder", "Queue manager", "value", "", 1, "form-control"], ["id", "queueName", "type", "text", "formControlName", "queueName", "placeholder", "Queue Name", "value", "", 1, "form-control"], ["id", "connectFactory", "type", "text", "formControlName", "queueConnFactory", "placeholder", "Connectiong Factory", "value", "", 1, "form-control"], ["id", "queChannel", "type", "text", "formControlName", "queueChannel", "placeholder", "Queue Channel", "value", "", 1, "form-control"], ["id", "userName", "type", "text", "placeholder", "User Name", "value", "", 1, "form-control"], ["id", "password", "type", "password", "placeholder", "Password", "value", "", 1, "form-control"], ["id", "databaseName", "type", "text", "placeholder", "Database Name", "value", "", 1, "form-control"], ["id", "connectString", "type", "text", "placeholder", "Connecting String", "value", "", 1, "form-control"], ["action", "", 1, "formStyle"], ["type", "text", "value", "", 1, "form-control"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary"], ["fxLayout", "row wrap", 1, "file"], ["fxFlex", "100", 1, "width"], ["fxFlex", "45"], [1, "fileUpload"], [1, "formS"], ["data-text", "File Upload", 1, "file-upload-wrapper"], ["fileWrapper", ""], ["name", "file-upload-field", "type", "file", 1, "file-upload-field", 3, "change"], [1, "formStyle", 3, "formGroup"], ["class", "pageTitleCol", 4, "ngIf"], [1, "col-lg-2"], ["formArrayName", "sysService", 4, "ngFor", "ngForOf"], [1, "row", "g-3", "pt-4"], [1, "col-auto", 3, "click"], ["class", "addIcon primarybg", 4, "ngIf"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnDarkGrey", 3, "disabled", "click"], ["formArrayName", "sysService"], [1, "row", "gy-4", 2, "margin-bottom", "20px", 3, "formGroupName"], ["formControlName", "headerTag", "aria-label", "Default select example", 1, "form-select"], ["class", "form-select", "formControlName", "messageKey", "aria-label", "Default select example", 3, "change", 4, "ngIf"], ["id", "externalIp", "formControlName", "messageKey", "type", "text", "class", "form-control", "value", "", "readonly", "", 4, "ngIf"], ["class", "form-select", "formControlName", "dataType", "aria-label", "Default select example", 3, "name", 4, "ngIf"], ["id", "externalIp", "formControlName", "headerValue", "type", "text", "value", "", 1, "form-control"], ["formControlName", "encryption", "aria-label", "Default select example", 1, "form-select"], ["value", "No Encryption"], ["value", "BASE64"], ["value", "SHA256"], ["value", "SHA512"], ["type", "button", "href", "javascript:void(0);", "class", "deleteIcon2", 3, "click", 4, "ngIf"], ["formControlName", "messageKey", "aria-label", "Default select example", 1, "form-select", 3, "change"], [3, "hidden", "value", 4, "ngFor", "ngForOf"], [3, "hidden", "value"], ["id", "externalIp", "formControlName", "messageKey", "type", "text", "value", "", "readonly", "", 1, "form-control"], ["formControlName", "dataType", "aria-label", "Default select example", 1, "form-select", 3, "name"], ["value", "numeric"], ["value", "alphaNumeric"], ["value", "date"], ["type", "button", "href", "javascript:void(0);", 1, "deleteIcon2", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "addIcon", "primarybg"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "tabStyleCol"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["class", "nav-item", "role", "presentation", 4, "ngIf"], ["id", "myTabContent", 1, "tab-content"], ["class", "tab-pane fade show active", "id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 4, "ngIf"], ["class", "tab-pane fade show active", "id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 4, "ngIf"], ["role", "presentation", 1, "nav-item"], ["type", "button", "id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active", 3, "click"], ["type", "button", "id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", 3, "click"], ["type", "button", "id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link", 3, "click"], ["type", "button", "id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link", "active", 3, "click"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], ["style", "width: 60%;", 4, "ngIf"], ["action", "", "class", "row gy-4", "style", "margin-bottom: 20px;", 3, "formGroup", 4, "ngIf"], [2, "width", "60%"], ["fxFlex", "60"], ["type", "button", "type", "button", 1, "btnFile", 3, "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["action", "", 1, "row", "gy-4", 2, "margin-bottom", "20px", 3, "formGroup"], ["type", "button", 1, "deleteIcon2", 3, "click"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade", "show", "active"], ["fileWrapper1", ""], ["name", "file-upload-field", "type", "file", "value", "", 1, "file-upload-field", 3, "change"], ["type", "button", "mat-raised-button", "", "type", "button", 1, "btnFile", 3, "click"], ["type", "button", "class", "deleteIcon2", 3, "click", 4, "ngIf"]], template: function AddSystemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AddSystemComponent_ng_container_0_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_Template, 10, 6, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc3lzdGVtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 86312:
/*!************************************************************************************!*\
  !*** ./src/app/views/addSystem/add-system-summary/add-system-summary.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSystemSummaryComponent": function() { return /* binding */ AddSystemSummaryComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/add-system.service */ 91973);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ 50481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);






function AddSystemSummaryComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddSystemSummaryComponent_tr_30_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const data_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.getResp(data_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.systemId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.systemCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.systemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.serviceType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.sourceIp);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.sourcePort);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](16, 7, data_r2.createdTime, "medium"));
} }
function AddSystemSummaryComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Please wait... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return ["/dashboard"]; };
class AddSystemSummaryComponent {
    constructor(apiService, router, cdr) {
        this.apiService = apiService;
        this.router = router;
        this.cdr = cdr;
        this.respArray = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.isLoading = false;
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            columnDefs: [{ type: 'date', 'targets': [6] }],
            order: [[6, 'desc']],
            processing: true,
            lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]],
            // columnDefs: [ { type: 'date', 'targets': [5] } ],
            // order: [[5, 'desc']],
        };
        this.getDataForMonitor();
    }
    getDataForMonitor() {
        this.isLoading = true;
        this.apiService.fecthingAddSystem().subscribe(dataresp => {
            this.respArray = dataresp;
            this.isLoading = false;
            this.cdr.markForCheck();
            this.dtTrigger.next();
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    getResp(data) {
        console.log(data);
        this.apiService.setIndex({
            index: data.systemId,
        });
        this.router.navigateByUrl("/addSystem");
    }
    new() {
        this.apiService.setIndex({
            index: "",
        });
        this.router.navigateByUrl("/addSystem");
    }
}
AddSystemSummaryComponent.ɵfac = function AddSystemSummaryComponent_Factory(t) { return new (t || AddSystemSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_0__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
AddSystemSummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddSystemSummaryComponent, selectors: [["npr-add-system-summary"]], decls: 32, vars: 6, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "primaryColor", 3, "click"], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]], template: function AddSystemSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Add System");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddSystemSummaryComponent_Template_a_click_7_listener() { return ctx.new(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " System Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "System Code\tName");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "External Ip");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "External Port");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, AddSystemSummaryComponent_tr_30_Template, 17, 10, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, AddSystemSummaryComponent_ng_container_31_Template, 5, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.respArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc3lzdGVtLXN1bW1hcnkuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_views_addSystem_add-System_add-System_module_ts-es2015.js.map