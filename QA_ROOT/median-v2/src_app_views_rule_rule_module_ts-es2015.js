"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_rule_rule_module_ts"],{

/***/ 36591:
/*!*********************************************************************!*\
  !*** ./src/app/views/rule/rule-details2/rule-details2.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetails2Component": function() { return /* binding */ RuleDetails2Component; },
/* harmony export */   "RuleConfig": function() { return /* binding */ RuleConfig; },
/* harmony export */   "RuleValidation": function() { return /* binding */ RuleValidation; },
/* harmony export */   "RuleDto": function() { return /* binding */ RuleDto; },
/* harmony export */   "MultipleValidation": function() { return /* binding */ MultipleValidation; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 31600);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/fmosNewRolePermissions */ 35383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/guards/can-deactivate.guard */ 50215);
/* harmony import */ var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/add-system.service */ 91973);
/* harmony import */ var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/rule.service */ 50511);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);















function RuleDetails2Component_form_4_div_2_ng_container_81_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RuleDetails2Component_form_4_div_2_ng_container_81_label_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Message Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RuleDetails2Component_form_4_div_2_ng_container_81_label_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RuleDetails2Component_form_4_div_2_ng_container_81_label_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RuleDetails2Component_form_4_div_2_ng_container_81_a_24_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RuleDetails2Component_form_4_div_2_ng_container_81_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r13.deleteVFGroup(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "margin-top": a0 }; };
function RuleDetails2Component_form_4_div_2_ng_container_81_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](1, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, RuleDetails2Component_form_4_div_2_ng_container_81_label_4_Template, 2, 0, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ng-select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function RuleDetails2Component_form_4_div_2_ng_container_81_Template_ng_select_change_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const i_r7 = restoredCtx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r16.onValidtion($event, i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, RuleDetails2Component_form_4_div_2_ng_container_81_label_7_Template, 2, 0, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Incoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "OutGoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, RuleDetails2Component_form_4_div_2_ng_container_81_label_18_Template, 2, 0, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, RuleDetails2Component_form_4_div_2_ng_container_81_label_21_Template, 2, 0, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, RuleDetails2Component_form_4_div_2_ng_container_81_a_24_Template, 3, 0, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroupName", i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r7 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx_r4.filteredExternalSystems)("readonly", !ctx_r4.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r7 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r7 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r7 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](11, _c0, i_r7 === 0 ? "50px" : "20px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.hideSubmit);
} }
function RuleDetails2Component_form_4_div_2_div_82_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RuleDetails2Component_form_4_div_2_div_82_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r18.hideSubmit ? ctx_r18.addValidationGroup() : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RuleDetails2Component_form_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Rule ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Rule Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Source System");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "ng-select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function RuleDetails2Component_form_4_div_2_Template_ng_select_change_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r20.onSlectionExternalSystem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Message Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Incoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "OutGoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Destination System");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "ng-select", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function RuleDetails2Component_form_4_div_2_Template_ng_select_change_55_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r22.destinaltionSelection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, "Message Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "Incoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "OutGoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, "Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](71, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74, "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](75, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, "Validation System");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](81, RuleDetails2Component_form_4_div_2_ng_container_81_Template, 25, 13, "ng-container", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](82, RuleDetails2Component_form_4_div_2_div_82_Template, 4, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx_r2.externalCreateSystemFiltered);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx_r2.externalCreateSystemFiltered);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.validationSystems.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.hideSubmit);
} }
function RuleDetails2Component_form_4_ng_container_3_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r34 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Validation System ", i_r34 + 1, " ");
} }
function RuleDetails2Component_form_4_ng_container_3_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](validation_r35.validationSystem);
} }
function RuleDetails2Component_form_4_ng_container_3_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Field No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
function RuleDetails2Component_form_4_ng_container_3_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Key ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
function RuleDetails2Component_form_4_ng_container_3_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
function RuleDetails2Component_form_4_ng_container_3_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Column Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
function RuleDetails2Component_form_4_ng_container_3_th_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Field No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
function RuleDetails2Component_form_4_ng_container_3_th_22_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Key ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
function RuleDetails2Component_form_4_ng_container_3_th_22_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
function RuleDetails2Component_form_4_ng_container_3_th_22_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Column Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
function RuleDetails2Component_form_4_ng_container_3_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RuleDetails2Component_form_4_ng_container_3_th_22_ng_container_1_Template, 2, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, RuleDetails2Component_form_4_ng_container_3_th_22_ng_container_2_Template, 2, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, RuleDetails2Component_form_4_ng_container_3_th_22_ng_container_3_Template, 2, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, RuleDetails2Component_form_4_ng_container_3_th_22_ng_container_4_Template, 2, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r29.valDeatils == "TCP/IP" || ctx_r29.sourceDetails == "MT" || ctx_r29.sourceDetails == "MX");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r29.sourceDetails == "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r29.sourceDetails == "XML");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r29.valDeatils == "DB Connection");
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_3_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r53 = ctx.$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", data_r53.messagebasis)("hidden", ctx_r52.shouldHideTcpMessageKeyOption(data_r53.messageKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", data_r53.messageKey, " ", data_r53.messagebasis, " ");
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_3_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r56); const i_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r54.handleTcpMessageKeyChange($event, i_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Please select Field No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_3_option_4_Template, 2, 4, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r45.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r45.ruleMappDetails);
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_4_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r58 = ctx.$implicit;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", data_r58.messagebasis)("hidden", ctx_r57.shouldHideHttpMessageKeyOption(data_r58.messageKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", data_r58.messageKey, " ", data_r58.messagebasis, " ");
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_4_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r61); const i_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r59.handleHttpMessageKeyChange($event, i_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Please select Tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_4_option_4_Template, 2, 4, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r46.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r46.ruleMappDetails);
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_5_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r63 = ctx.$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", data_r63.messagebasis)("hidden", ctx_r62.shouldHideHttpMessageKeyOption(data_r63.messageKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", data_r63.messageKey, " ", data_r63.messagebasis, " ");
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_5_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r66); const i_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r64.handleHttpMessageKeyChange($event, i_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Please select Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_5_option_4_Template, 2, 4, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r47.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r47.ruleMappDetails);
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_6_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r68 = ctx.$implicit;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", data_r68.messagebasis)("hidden", ctx_r67.shouldHideDBMessageKeyOption(data_r68.messageKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", data_r68.messageKey, " ", data_r68.messagebasis, " ");
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_6_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r71); const i_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r69.handleDBMessageKeyChange($event, i_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Please select Column Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_6_option_4_Template, 2, 4, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r48.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r48.ruleMappDetails);
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_7_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r73 = ctx.$implicit;
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", data_r73.messagebasis)("hidden", ctx_r72.shouldHideDBMessageKeyOption(data_r73.messageKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", data_r73.messageKey, " ", data_r73.messagebasis, " ");
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_7_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r76); const i_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r74.handleDBMessageKeyChange($event, i_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Please select Field No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_7_option_4_Template, 2, 4, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r49.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r49.ruleMappDetails);
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_1_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", data_r85.messagebasis);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", data_r85.messageKey, " ", data_r85.messagebasis, " ");
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "select", 94, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_1_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r88); const validation_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; return validation_r77.messageKey = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Please select Field No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_1_option_5_Template, 2, 3, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const idx_r78 = ctx_r89.index;
    const validation_r77 = ctx_r89.$implicit;
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("name", "messageKey_", idx_r78, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r79.hideSubmit)("ngModel", validation_r77.messageKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r79.xmlRespData);
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_2_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", data_r92.messagebasis);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", data_r92.messageKey, " ", data_r92.messagebasis, " ");
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "select", 94, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_2_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r95); const validation_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; return validation_r77.messageKey = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Please select Tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_2_option_5_Template, 2, 3, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const idx_r78 = ctx_r96.index;
    const validation_r77 = ctx_r96.$implicit;
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("name", "messageKey_", idx_r78, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r80.hideSubmit)("ngModel", validation_r77.messageKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r80.xmlRespData);
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_3_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", data_r99.messagebasis);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", data_r99.messageKey, " ", data_r99.messagebasis, " ");
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "select", 94, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_3_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r102); const validation_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; return validation_r77.messageKey = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Please select Column Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_3_option_5_Template, 2, 3, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const idx_r78 = ctx_r103.index;
    const validation_r77 = ctx_r103.$implicit;
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("name", "messageKey_", idx_r78, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r81.hideSubmit)("ngModel", validation_r77.messageKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r81.xmlRespData);
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_4_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r106 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", data_r106.messagebasis);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", data_r106.messageKey, " ", data_r106.messagebasis, " ");
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "select", 94, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_4_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r109); const validation_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; return validation_r77.messageKey = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Please select Field No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_4_option_5_Template, 2, 3, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const idx_r78 = ctx_r110.index;
    const validation_r77 = ctx_r110.$implicit;
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("name", "messageKey_", idx_r78, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r82.hideSubmit)("ngModel", validation_r77.messageKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r82.xmlRespData);
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_1_Template, 6, 4, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_2_Template, 6, 4, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_3_Template, 6, 4, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_ng_container_4_Template, 6, 4, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r50.valDeatils == "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r50.valDeatils == "Https/Http");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r50.valDeatils == "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r50.valDeatils == "MT" || ctx_r50.valDeatils == "MX");
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_td_13_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RuleDetails2Component_form_4_ng_container_3_tr_29_td_13_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r114); const i_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).index; const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r112.removeSysRules(i_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RuleDetails2Component_form_4_ng_container_3_tr_29_td_13_a_1_Template, 2, 0, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r51.submit);
} }
function RuleDetails2Component_form_4_ng_container_3_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](1, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_3_Template, 5, 2, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_4_Template, 5, 2, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_5_Template, 5, 2, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_6_Template, 5, 2, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, RuleDetails2Component_form_4_ng_container_3_tr_29_ng_container_7_Template, 5, 2, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, RuleDetails2Component_form_4_ng_container_3_tr_29_td_8_Template, 5, 4, "td", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, RuleDetails2Component_form_4_ng_container_3_tr_29_td_13_Template, 2, 1, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_r43 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", rule_r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r30.sourceDetails == "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r30.sourceDetails == "XML");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r30.sourceDetails == "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r30.sourceDetails == "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r30.sourceDetails == "MT" || ctx_r30.sourceDetails == "MX");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r30.validationSystems.value)("ngForTrackBy", ctx_r30.indexTracker);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r30.hideSubmit);
} }
function RuleDetails2Component_form_4_ng_container_3_div_30_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RuleDetails2Component_form_4_ng_container_3_div_30_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r116.addSysRuleDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RuleDetails2Component_form_4_ng_container_3_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RuleDetails2Component_form_4_ng_container_3_div_30_a_1_Template, 3, 0, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r31.submit || ctx_r31.hideSubmit);
} }
const _c1 = function () { return ["/createrule/list"]; };
function RuleDetails2Component_form_4_ng_container_3_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RuleDetails2Component_form_4_ng_container_3_div_31_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r118.Previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RuleDetails2Component_form_4_ng_container_3_div_31_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r119); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r120.submittingCreateRule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r32.submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r32.ruleForm.get("sysRuleDetails").invalid || ctx_r32.ruleForm.get("validationSystems").invalid || !ctx_r32.ruleForm.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c1));
} }
function RuleDetails2Component_form_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "fieldset", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "table", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "tr", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Source System");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, RuleDetails2Component_form_4_ng_container_3_th_8_Template, 2, 1, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Validation Rule");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, RuleDetails2Component_form_4_ng_container_3_td_15_Template, 3, 1, "td", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, RuleDetails2Component_form_4_ng_container_3_ng_container_18_Template, 2, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, RuleDetails2Component_form_4_ng_container_3_ng_container_19_Template, 2, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, RuleDetails2Component_form_4_ng_container_3_ng_container_20_Template, 2, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, RuleDetails2Component_form_4_ng_container_3_ng_container_21_Template, 2, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, RuleDetails2Component_form_4_ng_container_3_th_22_Template, 5, 4, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "validation method");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "validation details");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](28, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, RuleDetails2Component_form_4_ng_container_3_tr_29_Template, 14, 9, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, RuleDetails2Component_form_4_ng_container_3_div_30_Template, 2, 1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, RuleDetails2Component_form_4_ng_container_3_div_31_Template, 10, 4, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r3.submit || !ctx_r3.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.validationSystems.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("colspan", ctx_r3.validationSystems.value.length + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.sourceSystems.sourceSystem);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.validationSystems.value)("ngForTrackBy", ctx_r3.indexTracker);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.sourceDetails == "TCP/IP" || ctx_r3.sourceDetails == "MT" || ctx_r3.sourceDetails == "MX");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.sourceDetails == "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.sourceDetails == "XML");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.sourceDetails == "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.validationSystems.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.sysRuleDetails.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.hideSubmit);
} }
function RuleDetails2Component_form_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "fieldset", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, RuleDetails2Component_form_4_div_2_Template, 83, 8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, RuleDetails2Component_form_4_ng_container_3_Template, 32, 14, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r0.ruleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r0.submit || !ctx_r0.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.showRuleValidation);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.showRuleValidation || !ctx_r0.hideSubmit);
} }
function RuleDetails2Component_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RuleDetails2Component_div_6_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r127); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r126.editValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx_r121.hideSubmit);
} }
function RuleDetails2Component_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RuleDetails2Component_div_6_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r129); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r128.onAuthOfRule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Auth");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx_r122.hideSubmit);
} }
function RuleDetails2Component_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RuleDetails2Component_div_6_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r131); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r130.onCloseOfRule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx_r123.hideSubmit);
} }
function RuleDetails2Component_div_6_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RuleDetails2Component_div_6_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r133); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r132.onOpenRule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Reopen");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx_r124.hideSubmit);
} }
function RuleDetails2Component_div_6_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RuleDetails2Component_div_6_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r135); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r134.deleteRule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx_r125.hideSubmit);
} }
function RuleDetails2Component_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RuleDetails2Component_div_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r137); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r136.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, RuleDetails2Component_div_6_div_5_Template, 3, 1, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RuleDetails2Component_div_6_div_6_Template, 3, 1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, RuleDetails2Component_div_6_div_7_Template, 3, 1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, RuleDetails2Component_div_6_div_8_Template, 3, 1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, RuleDetails2Component_div_6_div_9_Template, 3, 1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx_r1.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.ruleForm.get("sysRuleDetails").invalid || ctx_r1.ruleForm.get("validationSystems").invalid || !ctx_r1.ruleForm.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !(ctx_r1.ruleConfig.recordStatus == "C" || ctx_r1.ruleConfig.recordStatus == "CLOSED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.ruleConfig.approvedStatus == "U" || ctx_r1.ruleConfig.approvedStatus == "UNAUTHORIZED" || ctx_r1.ruleConfig.approvedStatus == "N" || ctx_r1.ruleConfig.approvedEver == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r1.ruleConfig.recordStatus == "O" || ctx_r1.ruleConfig.recordStatus == "OPEN") && (ctx_r1.ruleConfig.approvedEver != "NO" && ctx_r1.ruleConfig.approvedEver != "N"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r1.ruleConfig.recordStatus == "C" || ctx_r1.ruleConfig.recordStatus == "CLOSED") && (ctx_r1.ruleConfig.approvedEver != "NO" && ctx_r1.ruleConfig.approvedEver != "N"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.ruleConfig.approvedEver == "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](8, _c1));
} }
class RuleDetails2Component {
    constructor(cdr, _route, roleService, canDeactivateGuard, addsystem, rules, toastService, router, formBuilder) {
        this.cdr = cdr;
        this._route = _route;
        this.roleService = roleService;
        this.canDeactivateGuard = canDeactivateGuard;
        this.addsystem = addsystem;
        this.rules = rules;
        this.toastService = toastService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submit = true;
        this.isSelected = true;
        this.externalsystem = [];
        this.selectedExternalSystems = [];
        this.filteredExternalSystems = [];
        this.showRuleValidation = false;
        this.formTouched = true;
        this.showpBar = false;
        this.isEdit = false;
        this.ruleConfig = new RuleConfig();
        this.authorizeDone = false;
        this.deleted = false;
        this.ruleValidation = new RuleValidation();
        this.arrRuleValidation = [];
        this.ruleDto = new RuleDto();
        this.messageBasisIso = [];
        this.xmlRespData = [];
        this.multipleValidation = [];
        this.multipleValidationData = [];
        this.valCount = 0;
        // sourceSysData = new RuleConfig();
        this.destinationSysData = new RuleConfig();
        this.editRule = {};
        this.ModifyCreateRule = false;
        this.hideSubmit = false;
        this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_2__.permissionsLabels();
        this.externalCreateSystemFiltered = [];
        this.selectedHttpMessageKeyValues = [];
        this.selectedTcpMessageKeyValues = [];
        this.selectedDBMessageKeyValues = [];
        this.showDialog = false;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    }
    ngOnInit() {
        this.currentUser = localStorage.getItem('userFromLogin');
        this.ruleForm = this.formBuilder.group({
            ruleId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            ruleName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            sourceSystems: this.getSourceItem(),
            destinationSystems: this.getDestinationItem(),
            validationSystems: this.formBuilder.array([]),
            sysRuleDetails: this.formBuilder.array([]),
        });
        console.log(this._route.snapshot.params['id']);
        this.getRuleData(this._route.snapshot.params['id']);
        this.roleService.fetchScreenPermissions('Create Rule');
        this.roleService.screenLabelList.subscribe(message => this.roleCodes = message);
        setTimeout(() => {
            console.log(this.roleCodes);
        }, 100);
        this.ruleForm.disable();
    }
    editValues() {
        this.hideSubmit = true;
        this.ruleForm.enable();
    }
    canExit() {
        let isExit = false;
        if (this.ruleForm.touched && this.formTouched == true) {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: 'There are unsaved changes in the screen. Would you like to navigate to other screen?',
                showCancelButton: true,
                confirmButtonColor: '#E6224A',
                cancelButtonColor: '#011945',
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                icon: 'info',
            }).then((result) => {
                if (result.isConfirmed === true) {
                    isExit = true;
                    this.cdr.markForCheck();
                    return isExit;
                }
                else {
                    isExit = false;
                    this.cdr.markForCheck();
                    return isExit;
                }
            });
        }
        else {
            isExit = true;
            return new Promise((resolve, reject) => {
                if (isExit === true) {
                    isExit = true;
                    this.cdr.markForCheck();
                    resolve(true);
                }
            });
        }
    }
    getRuleData(ruleId) {
        this.rules.gettingCreateRuleById(ruleId)
            .subscribe((resp) => {
            this.editRule = resp;
            console.log("this.editRule ", this.editRule);
            console.log("in edit", this.editRule);
            this.ruleConfig.ruleId = this.editRule["ruleId"];
            this.ruleConfig.ruleName = this.editRule["ruleName"];
            this.ruleConfig.approvedEver = this.editRule["approvedEver"];
            this.ruleConfig.recordStatus = this.editRule["recordStatus"];
            this.ruleConfig.approvedStatus = this.editRule["approvedStatus"];
            this.ruleConfig.approverId = this.editRule["approverId"];
            this.ruleConfig.createdTime = this.editRule["createdTime"];
            this.ruleConfig.creatorId = this.editRule["creatorId"];
            this.ruleConfig.sysRuleId = this.editRule["sysRuleId"];
            this.ruleConfig.versionNo = this.editRule["versionNo"];
            this.multipleValidationData = this.editRule["mdmtValidationSystemData"];
            this.multipleValidation = this.editRule["mdmtValidationSystemData"];
            console.log("multipleValidation", this.editRule["multipleValidation"]);
            console.log("sysRuleDetails", this.editRule["sysRuleDetails"]);
            this.arrRuleValidation = this.editRule["sysRuleDetails"];
            for (let index = 0; index < this.arrRuleValidation.length; index++) {
                this.addSysRuleDetails();
                const sysRule = this.arrRuleValidation[index];
                console.log("sysRule", sysRule);
                this.selectedHttpMessageKeyValues[index] = sysRule.messageKey;
                this.selectedTcpMessageKeyValues[index] = sysRule.messageKey;
                this.selectedDBMessageKeyValues[index] = sysRule.messageKey;
                this.sysRuleDetails.at(index).patchValue(sysRule);
            }
            for (let index = 0; index < this.multipleValidationData.length; index++) {
                this.addValidationGroup();
                const validation = this.multipleValidationData[index];
                console.log("validation", validation);
                this.validationSystems.at(index).patchValue(validation);
                console.log("validationSystems?", this.validationSystems.value);
            }
            this.ruleForm.get('ruleId').patchValue(this.ruleConfig.ruleId);
            this.ruleForm.get('ruleName').patchValue(this.ruleConfig.ruleName);
            // this.validationSystems.patchValue(this.multipleValidationData);
            // this.sysRuleDetails.patchValue(this.arrRuleValidation);
            console.log(this.arrRuleValidation);
            console.log(this.ruleConfig);
            if (this.ruleConfig.recordStatus == "C") {
                console.log(this.ruleConfig.recordStatus);
                this.authBtnHide = true;
                this.reopenBtn = false;
            }
            this.auditLog();
            this.gettingExternalSsytem();
            this.rules.gettingSysCode(this.editRule["sourceTranslationId"]).subscribe(sourceresp => {
                console.log(sourceresp);
                if (sourceresp) {
                    this.ruleConfig.sourceTranslationId = "";
                    this.ruleConfig.sourceTranslationId = sourceresp.systemCode;
                    this.sourcedata = this.ruleConfig.sourceTranslationId;
                    this.ruleForm.get('sourceSystems').get('sourceSystem').patchValue(this.sourcedata);
                    this.cdr.markForCheck();
                    this.onSlectionExternalSystem(this.ruleConfig.sourceTranslationId);
                }
            });
            this.rules.gettingSysCode(this.editRule["targetTranslationId"]).subscribe(targetResp => {
                console.log(targetResp);
                this.ruleConfig.targetTranslationId = targetResp.systemCode;
                this.destinationId = this.ruleConfig.targetTranslationId;
                this.ruleForm.get('destinationSystems').get('destinationSystem').patchValue(this.destinationId);
                this.destinaltionSelection(this.ruleConfig.targetTranslationId);
            });
            this.multipleValidation.forEach((el, i) => {
                console.log(el);
                // this.rules.gettingSysCode(el.id).subscribe(valReps => {
                //   console.log("valReps", valReps);
                // });
                this.onGetValidtion(el.validationSystem, i);
            });
            this.multipleValidationData.forEach((el, i) => {
                console.log("Testing", el, i);
                // this.rules.gettingSysCode(el.id).subscribe(valReps => {
                //   console.log("valReps vvvvvv", valReps);
                // });
                this.onGetValidtion(el.validationSystem, i);
            });
        });
    }
    getSourceItem() {
        return this.formBuilder.group({
            sourceSystem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            messageKey: [''],
            messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
        });
    }
    getDestinationItem() {
        return this.formBuilder.group({
            destinationSystem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
        });
    }
    auditLog() {
        if (this.ruleConfig.approvedStatus === 'U') {
            this.ruleConfig.approvedStatus = 'UNAUTHORIZED';
        }
        if (this.ruleConfig.approvedStatus === 'A') {
            this.ruleConfig.approvedStatus = 'AUTHORIZED';
        }
        if (this.ruleConfig.recordStatus === 'O') {
            this.ruleConfig.recordStatus = 'OPEN';
        }
        if (this.ruleConfig.recordStatus === 'C') {
            this.ruleConfig.recordStatus = 'CLOSE';
        }
        if (this.ruleConfig.approvedEver === 'N') {
            this.ruleConfig.approvedEver = 'NO';
        }
        if (this.ruleConfig.approvedEver === 'Y') {
            this.ruleConfig.approvedEver = 'YES';
        }
    }
    getValidationItem() {
        return this.formBuilder.group({
            validationSystem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            messageKey: [""],
            messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            service: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            operation: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            id: [''],
            ruleId: ['']
        });
    }
    getSysRuleDetails() {
        return this.formBuilder.group({
            id: [""],
            ruleId: [""],
            messageKey: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            validationMethod: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            validationDetail: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]
        });
    }
    changeFieldNO(event, val) {
        console.log(event);
        console.log(val);
    }
    indexTracker(index, value) {
        return index;
    }
    get sourceSystems() {
        return this.ruleForm.get('sourceSystems').value;
    }
    get validationSystems() {
        return this.ruleForm.get('validationSystems');
    }
    get sysRuleDetails() {
        return this.ruleForm.get('sysRuleDetails');
    }
    addValidationGroup() {
        this.validationSystems.push(this.getValidationItem());
    }
    addSysRuleDetails() {
        this.sysRuleDetails.push(this.getSysRuleDetails());
        console.log(this.sysRuleDetails.value);
    }
    deleteVFGroup(index) {
        this.validationSystems.removeAt(index);
        const selectedSystems = new Set(this.validationSystems.value.map(val => val.validationSystem));
        this.filteredExternalSystems = this.externalsystem.filter(val => !selectedSystems.has(val));
    }
    removeSysRules(index) {
        this.sysRuleDetails.removeAt(index);
        this.selectedTcpMessageKeyValues = this.sysRuleDetails.value.map(val => val.messageKey);
        this.selectedHttpMessageKeyValues = this.sysRuleDetails.value.map(val => val.messageKey);
        this.selectedDBMessageKeyValues = this.sysRuleDetails.value.map(val => val.messageKey);
    }
    trackByFn(index, item) {
        return index;
    }
    onEdit() {
        this.isEdit = true;
        if (this.ruleConfig.approvedStatus == "U") {
            this.isEdit = false;
            // Swal.fire("UnAuthorized record can't be edited.");
        }
        if (this.ruleConfig.recordStatus == "C") {
            this.isEdit = false;
            // Swal.fire("Closed record can't be edited.");
        }
    }
    gettingExternalSsytem() {
        this.rules.gettingExternalsystem().subscribe(extsysRes => {
            console.log(extsysRes);
            this.externalsystem = extsysRes;
            this.filteredExternalSystems = this.externalsystem;
        });
    }
    onSlectionExternalSystem(event) {
        console.log("eve", event);
        // this.systemName = event.value;
        this.sourcesystem = event;
        this.externalCreateSystemFiltered = this.externalsystem.filter((system) => system !== this.sourcesystem && system !== this.desSystem);
        this.rules.gettingTranslationData(this.sourcesystem).subscribe(resp => {
            console.log(resp);
            if (resp) {
                this.sourceSysData = resp;
                this.ruleMappDetails = this.sourceSysData.msgTransDetails;
                this.ruleConfig.sourceTranslationId = resp.transId;
                this.ruleForm.get('sourceSystems').patchValue(this.sourceSysData);
                this.gettingoperationAndServiceFroSourceSystem(this.sourcesystem, resp.messageType);
            }
        });
    }
    onSelectionOFMessageType(event) {
        this.msgType = event.value;
        // this.gettingoperationAndServiceFroSourceSystem(this.sourcesystem, this.msgType);
    }
    // for source 
    gettingoperationAndServiceFroSourceSystem(ssysName, msgType) {
        console.log("ssysName", ssysName);
        this.rules.gettingoperationAndService(ssysName, msgType, this.currentUser).subscribe(sourceResp => {
            this.sourceOperation = sourceResp.OPERATION;
            this.sourceService = sourceResp.SERVICE;
            this.sourceDetails = sourceResp.MdmtSystemChannel[0].messageChannel;
            if (this.sourceDetails === 'Https/Http') {
                this.sourceDetails = sourceResp.MdmtSystemChannel[0].messageFormat;
            }
            this.messageBasisIso = sourceResp.MdmtSystemService;
            // this.selectedHttpMessageKeyValues = this.messageBasisIso.map(val => val.messageKey);
            // this.selectedTcpMessageKeyValues = this.messageBasisIso.map(val => val.messageKey);
            console.log("sourceResp.MdmtSystemService", this.ruleMappDetails);
            console.log("this.arrRuleValidation", this.messageBasisIso);
            // for(let g = 0 ; g< this.messageBasisIso.length;g++){
            //   console.log("messageBasisIso", this.messageBasisIso[g].dataType);
            //   this.ruleMappDetails.push({
            //     dataType: this.messageBasisIso[g].dataType,
            //     defaultValue: null,
            //     encryption: this.messageBasisIso[g].encryption,
            //     id: this.messageBasisIso[g].channelId,
            //     messageKey: this.messageBasisIso[g].messageKey,
            //     messagebasis: this.messageBasisIso[g].messageBasis,
            //     transId: this.messageBasisIso[g].serviceId,
            //     translationId: 0,
            //     versionNo: 1});
            //  }
            //  console.log(this.ruleMappDetails);
            for (let k = 0; k <= this.messageBasisIso.length; k++) {
                // console.log("this.arrRuleValidation", this.arrRuleValidation[0].validationDetail);
                // console.log("this.arrRuleValidation", this.arrRuleValidation[0].validationMethod);
                // console.log(this.messageBasisIso[k].validationDetail);
                if (this.messageBasisIso[k]) {
                    this.messageBasisIso[k].validationDetail = this.arrRuleValidation[0].validationDetail;
                    this.messageBasisIso[k].validationMethod = this.arrRuleValidation[0].validationMethod;
                }
            }
        }, (err => {
            console.log(err);
        }));
    }
    // For Destination
    destinaltionSelection(event) {
        console.log("ev", event);
        this.destination = event;
        this.externalCreateSystemFiltered = this.externalsystem.filter((system) => system !== this.srcSystem && system !== this.destination);
        this.rules.gettingTranslationData(this.destination).subscribe(resp => {
            console.log(resp);
            if (resp) {
                this.destinationSysData = resp;
                this.ruleForm.get('destinationSystems').patchValue(this.destinationSysData);
                this.ruleConfig.targetTranslationId = resp.transId;
            }
        });
    }
    ondestinationMsgType(event) {
        console.log("ev", event.value);
        this.destiMsgType = event.value;
        this.operationAndservDstination(this.destination, this.destiMsgType);
    }
    operationAndservDstination(destination, msgType) {
        this.rules.gettingoperationAndService(destination, msgType, this.currentUser).subscribe(destination => {
            console.log(destination);
            this.destinationRespOperation = destination.OPERATION;
            this.destinatioRespService = destination.SERVICE;
            // console.log(this.destinationRespOperation);
        }, (err => {
            console.log(err);
        }));
    }
    //validation sys
    onvalidateMsgType(event) {
        this.gettingoperationSndservForValidation(this.validationData, event.value);
    }
    gettingoperationSndservForValidation(valData, msg) {
        this.rules.gettingoperationAndService(valData, msg, this.currentUser).subscribe(valResp => {
            console.log("valResp", valResp);
            if (valResp) {
                this.valOperation = valResp.OPERATION;
                this.valService = valResp.SERVICE;
                this.valDeatils = valResp.MdmtSystemChannel[0].messageChannel;
                console.log("valDe", this.valDeatils);
                // this.xmlRespData = valResp.MdmtSystemService;
                console.log(this.xmlRespData.length);
            }
            // this.destinationRespOperation=destination[0];
            // console.log(this.destinationRespOperation);
        }, (err => {
            console.log(err);
        }));
    }
    // save
    submittingCreateRule() {
        this.multipleValidation = this.validationSystems.value;
        this.ruleConfig.mdmtValidationSystemData = this.multipleValidation;
        this.ruleConfig.mdmtValidationSystemData.forEach(el => {
            el.ruleId = this.ruleForm.get('ruleId').value;
        });
        // console.log(this.ruleConfig);
        this.sysRuleDetails.value.forEach(el => { el.ruleId = this.ruleForm.get('ruleId').value; });
        console.log(this.arrRuleValidation);
        this.ruleConfig.sysRuleDetails = this.sysRuleDetails.value;
        console.log(this.ruleConfig);
        if (this.ruleConfig.approvedStatus === 'UNAUTHORIZED') {
            this.ruleConfig.approvedStatus = 'U';
        }
        if (this.ruleConfig.approvedStatus === 'AUTHORIZED') {
            this.ruleConfig.approvedStatus = 'A';
        }
        if (this.ruleConfig.recordStatus === 'OPEN') {
            this.ruleConfig.recordStatus = 'O';
        }
        if (this.ruleConfig.recordStatus === 'CLOSE') {
            this.ruleConfig.recordStatus = 'C';
        }
        if (this.ruleConfig.approvedEver === 'NO') {
            this.ruleConfig.approvedEver = 'N';
        }
        if (this.ruleConfig.approvedEver === 'YES') {
            this.ruleConfig.approvedEver = 'Y';
        }
        this.rules.editRuleConfig("update", this.ruleConfig, this.currentUser).subscribe((data) => {
            this.ruleConfig = data;
            console.log(this.ruleConfig);
            if (data) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: 'Record is Updated',
                    icon: 'success' });
                this.formTouched = !this.ruleForm.touched;
                // this.toastService.successMessage('Record Saved Successfully!.', '');
                this.ModifyCreateRule = true;
                this.submit = false;
                this.showRuleValidation = false;
                this.hideSubmit = false;
            }
        }, err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: 'Failed To Save the Record', icon: 'error' });
            // this.toastService.errorMessage('Failed To Save the Record', '');
        });
    }
    onNext() {
        // this.showpBar = true;
        this.showRuleValidation = true;
    }
    Previous() {
        this.showRuleValidation = false;
    }
    // fetching ISo
    fetchingIso() {
        this.addsystem.fetchingIsoForTcp().subscribe(isoResp => {
            this.isoRespData = isoResp;
            console.log(this.isoRespData);
            this.messageBasisIso = isoResp.map((data) => {
                return data.messageKey;
            });
        });
    }
    //fetching Xml
    fetchingXMl() {
        this.addsystem.gettinXMLmsgIncoming().subscribe(xmlResp => {
            console.log(xmlResp);
            // this.xmlRespData=xmlResp.map((data)=>{
            //   return data.messageBasis;
            // });
        });
    }
    onPrevoius() {
        this.showRuleValidation = false;
    }
    onValidtion(event, i) {
        this.validationData = event;
        this.selectedExternalSystems[i] = event;
        const selectedMessageKeySet = new Set(this.selectedExternalSystems);
        this.filteredExternalSystems = this.externalsystem.filter(system => !selectedMessageKeySet.has(system));
        this.rules.gettingTranslationData(this.validationData).subscribe((resp) => {
            console.log(resp);
            this.validationTransData = resp;
            this.xmlRespData = this.validationTransData.msgTransDetails;
            if (resp) {
                this.ruleForm.get('validationSystems').at(i).get('service').patchValue(this.validationTransData.serviceName);
                this.ruleForm.get('validationSystems').at(i).get('operation').patchValue(this.validationTransData.operationName);
                this.ruleForm.get('validationSystems').at(i).get('messageType').patchValue(this.validationTransData.messageType);
                this.gettingoperationSndservForValidation(this.validationData, resp.messageType);
            }
        });
    }
    onGetValidtion(data, i) {
        let validationData = data;
        this.rules.gettingTranslationData(validationData).subscribe((resp) => {
            console.log(resp);
            if (resp) {
                this.validationTransData = resp;
                this.ruleForm.get('validationSystems').at(i).get('service').patchValue(this.validationTransData.serviceName);
                this.ruleForm.get('validationSystems').at(i).get('operation').patchValue(this.validationTransData.operationName);
                this.ruleForm.get('validationSystems').at(i).get('messageType').patchValue(this.validationTransData.messageType);
                this.gettingoperationSndservForValidation(validationData, resp.messageType);
            }
        });
    }
    onSubmitofValidtaion() {
        if (this.validationData) {
            // Swal.fire({ text: 'Record Saved SuccessFully' });
        }
    }
    onAuthOfRule() {
        console.log(this.currentUser);
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: 'You are trying to Authorize record. ' + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: 'NO',
            confirmButtonText: 'YES', 'icon': 'info'
        }).then((result => {
            console.log("this is reopen ", result);
            if (result.isConfirmed === true) {
                if (this.ruleConfig.creatorId == this.currentUser) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Maker cannot authorize the record!" });
                }
                else {
                    this.ruleConfig.mdmtValidationSystemData = this.multipleValidation;
                    this.ruleConfig.mdmtValidationSystemData.forEach(el => {
                        el.ruleId = this.ruleConfig.ruleId;
                    });
                    // console.log(this.ruleConfig);
                    this.arrRuleValidation.forEach(el => { el.ruleId = this.ruleConfig.ruleId; });
                    console.log(this.ruleConfig);
                    this.ruleConfig.sysRuleDetails = this.arrRuleValidation;
                    this.ruleConfig.approverId = this.currentUser;
                    // this.ruleConfig.approvedEver == 'NO'? this.ruleConfig.approvedEver = 'N' : (this.ruleConfig.approvedEver == 'YES'? this.ruleConfig.approvedEver = 'Y' : this.ruleConfig.approvedEver);
                    // this.ruleConfig.approvedStatus == 'UNAUTHORIZED'? this.ruleConfig.approvedStatus = 'U' : (this.ruleConfig.approvedStatus == 'AUTHORIZED'? this.ruleConfig.approvedStatus = 'A' : this.ruleConfig.approvedStatus);
                    // this.ruleConfig.recordStatus == "OPEN" ? this.ruleConfig.recordStatus = 'O' : (this.ruleConfig.recordStatus == 'CLOSE'? this.ruleConfig.recordStatus = 'C' : this.ruleConfig.recordStatus);
                    if (this.ruleConfig.approvedStatus === 'UNAUTHORIZED') {
                        this.ruleConfig.approvedStatus = 'U';
                    }
                    if (this.ruleConfig.approvedStatus === 'AUTHORIZED') {
                        this.ruleConfig.approvedStatus = 'A';
                    }
                    if (this.ruleConfig.recordStatus === 'OPEN') {
                        this.ruleConfig.recordStatus = 'O';
                    }
                    if (this.ruleConfig.recordStatus === 'CLOSE') {
                        this.ruleConfig.recordStatus = 'C';
                    }
                    if (this.ruleConfig.approvedEver === 'NO') {
                        this.ruleConfig.approvedEver = 'N';
                    }
                    if (this.ruleConfig.approvedEver === 'YES') {
                        this.ruleConfig.approvedEver = 'Y';
                    }
                    console.log(this.ruleConfig);
                    this.rules.editRuleConfig("auth", this.ruleConfig, this.currentUser).subscribe(authResp => {
                        console.log(authResp);
                        if (authResp) {
                            this.ruleConfig = authResp;
                            this.authorizeDone = true;
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Record is Authorized" });
                        }
                    }, (err) => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Failed To Authorize" });
                    });
                }
            }
        }));
    }
    onCloseOfRule() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: 'You are trying to close record. ' + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#3e54b8',
            cancelButtonColor: '#d33',
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: 'NO',
            confirmButtonText: 'YES', 'icon': 'info', iconColor: "#d33"
        }).then((result => {
            console.log("this is reopen ", result);
            console.log(this.multipleValidation);
            console.log(this.arrRuleValidation);
            // console.log(this.ruleConfig);
            console.log(this.currentUser);
            if (result.isConfirmed === true) {
                this.ruleConfig.mdmtValidationSystemData = this.multipleValidation;
                this.ruleConfig.mdmtValidationSystemData.forEach(el => {
                    el.ruleId = this.ruleConfig.ruleId;
                });
                console.log(this.ruleConfig);
                this.arrRuleValidation.forEach(el => { el.ruleId = this.ruleConfig.ruleId; });
                console.log(this.arrRuleValidation);
                this.ruleConfig.sysRuleDetails = this.arrRuleValidation;
                console.log(this.ruleConfig);
                this.ruleConfig.approvedEver == 'NO' ? this.ruleConfig.approvedEver = 'N' : (this.ruleConfig.approvedEver == 'YES' ? this.ruleConfig.approvedEver = 'Y' : this.ruleConfig.approvedEver);
                this.ruleConfig.approvedStatus == 'UNAUTHORIZED' ? this.ruleConfig.approvedStatus = 'U' : (this.ruleConfig.approvedStatus == 'AUTHORIZED' ? this.ruleConfig.approvedStatus = 'A' : this.ruleConfig.approvedStatus);
                this.ruleConfig.recordStatus == 'OPEN' ? this.ruleConfig.recordStatus = 'O' : (this.ruleConfig.recordStatus == 'CLOSED' ? this.ruleConfig.recordStatus = 'C' : this.ruleConfig.recordStatus);
                console.log(this.ruleConfig);
                console.log(this.reopenBtn);
                this.rules.editRuleConfig("close", this.ruleConfig, this.currentUser).subscribe(closeResp => {
                    console.log(closeResp);
                    if (closeResp) {
                        this.ruleConfig = closeResp;
                        this.editBtn = true;
                        this.authBtn = true;
                        this.deleted = false;
                        this.reopenBtn = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Record is Closed" });
                    }
                }, err => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Failed to close the Record" });
                });
            }
        }));
    }
    next() {
        this.showRuleValidation = true;
        console.log(this.ruleForm.value);
    }
    onOpenRule() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: 'You are trying to re-open record. ' + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#3e54b8',
            cancelButtonColor: '#d33',
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: 'NO',
            confirmButtonText: 'YES', 'icon': 'info', iconColor: "#d33"
        }).then((result => {
            console.log("this is reopen ", result);
            console.log(this.multipleValidation);
            console.log(this.arrRuleValidation);
            console.log(this.ruleConfig);
            console.log(this.currentUser);
            if (result.isConfirmed === true) {
                this.ruleConfig.mdmtValidationSystemData = this.multipleValidation;
                this.ruleConfig.mdmtValidationSystemData.forEach(el => {
                    el.ruleId = this.ruleConfig.ruleId;
                });
                // console.log(this.ruleConfig);
                this.arrRuleValidation.forEach(el => { el.ruleId = this.ruleConfig.ruleId; });
                console.log(this.arrRuleValidation);
                this.ruleConfig.sysRuleDetails = this.arrRuleValidation;
                console.log(this.ruleConfig);
                this.ruleConfig.approvedEver == 'NO' ? this.ruleConfig.approvedEver = 'N' : (this.ruleConfig.approvedEver == 'YES' ? this.ruleConfig.approvedEver = 'Y' : this.ruleConfig.approvedEver);
                this.ruleConfig.approvedStatus == 'UNAUTHORIZED' ? this.ruleConfig.approvedStatus = 'U' : (this.ruleConfig.approvedStatus == 'AUTHORIZED' ? this.ruleConfig.approvedStatus = 'A' : this.ruleConfig.approvedStatus);
                this.ruleConfig.recordStatus == 'OPEN' ? this.ruleConfig.recordStatus = 'O' : (this.ruleConfig.recordStatus == 'CLOSED' ? this.ruleConfig.recordStatus = 'C' : this.ruleConfig.recordStatus);
                console.log(this.ruleConfig);
                this.rules.editRuleConfig("open", this.ruleConfig, this.currentUser).subscribe(openResp => {
                    console.log(openResp);
                    if (openResp) {
                        this.ruleConfig = openResp;
                        this.authBtnHide = false;
                        this.editBtn = false;
                        this.authBtn = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Record is Reopened" });
                    }
                }, err => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Failed to open the Record" });
                });
            }
        }));
    }
    deleteRule() {
        console.log(this.ruleConfig);
        console.log(this.arrRuleValidation);
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: 'You are trying to delete record. ' + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#3e54b8',
            cancelButtonColor: '#d33',
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: 'NO',
            confirmButtonText: 'YES', 'icon': 'info', iconColor: "#d33"
        }).then((result => {
            console.log("this is reopen ", result);
            if (result.isConfirmed === true) {
                this.ruleConfig.mdmtValidationSystemData = this.multipleValidation;
                this.ruleConfig.mdmtValidationSystemData.forEach(el => {
                    el.ruleId = this.ruleConfig.ruleId;
                    console.log(this.ruleConfig.mdmtValidationSystemData);
                });
                console.log(this.arrRuleValidation);
                this.arrRuleValidation.forEach(el => { el.ruleId = this.ruleConfig.ruleId; });
                console.log(this.arrRuleValidation);
                this.ruleConfig.sysRuleDetails = this.arrRuleValidation;
                console.log(this.ruleConfig);
                this.rules.onDeleteRuleCongif(this.ruleConfig.sysRuleId, this.currentUser).subscribe((response) => {
                    if (response) {
                        this.deleted = true;
                        this.editBtn = true;
                        this.authBtn = true;
                        this.closeBtn = true;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            text: 'Record is Deleted',
                            icon: 'success'
                        }).then((result) => {
                            if (result) {
                                this.router.navigateByUrl('/createrule/list');
                            }
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Failed to delete the reocrd");
                    }
                });
            }
        }));
    }
    openPopUp() {
        jquery__WEBPACK_IMPORTED_MODULE_0__('.ddTrigger').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__('.ddParent').removeClass('actDD');
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).parents('li').siblings().find('.ddParent').removeClass('actDD');
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).parents('.ddParent').toggleClass('actDD');
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).removeClass('actUnread');
        });
    }
    closeAll() {
        jquery__WEBPACK_IMPORTED_MODULE_0__(document).on("click", function (event) {
            var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent");
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
            }
        });
    }
    close() {
        jquery__WEBPACK_IMPORTED_MODULE_0__('.ddCloseTrigger').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
        });
    }
    handleHttpMessageKeyChange(event, i) {
        this.selectedHttpMessageKeyValues[i] = event.target.value;
    }
    handleTcpMessageKeyChange(event, i) {
        this.selectedTcpMessageKeyValues[i] = event.target.value;
    }
    handleDBMessageKeyChange(event, i) {
        this.selectedDBMessageKeyValues[i] = event.target.value;
    }
    shouldHideHttpMessageKeyOption(messageKey) {
        return this.selectedHttpMessageKeyValues.includes(messageKey);
    }
    shouldHideTcpMessageKeyOption(messageKey) {
        return this.selectedTcpMessageKeyValues.includes(messageKey);
    }
    shouldHideDBMessageKeyOption(messageKey) {
        return this.selectedDBMessageKeyValues.includes(messageKey);
    }
}
RuleDetails2Component.ɵfac = function RuleDetails2Component_Factory(t) { return new (t || RuleDetails2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__.CanDeactivateGuard), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_5__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_6__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder)); };
RuleDetails2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: RuleDetails2Component, selectors: [["npr-rule-details2"]], decls: 107, vars: 16, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["class", "formStyle", "novalidate", "", 3, "formGroup", 4, "ngIf"], ["class", "col-lg-12", 4, "ngIf"], [1, "dbCardStyle"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "col-auto"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], [1, "fa", "fa-edit", "faClass"], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], [1, "fa", "fa-check-square-o", "faClassChecker"], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/authorize.svg", "alt", "...", 1, "modImage"], ["src", "assets/images/modification.svg", "alt", "...", 1, "modImage"], ["novalidate", "", 1, "formStyle", 3, "formGroup"], [3, "disabled"], ["class", "dbCardStyle", 4, "ngIf"], [4, "ngIf"], [1, "row", "gy-4"], [1, "col-lg-4"], [1, "formLbl"], [1, "colorRed"], ["type", "text", "id", "ruleId", "name", "ruleId", "formControlName", "ruleId", "placeholder", "Rule ID", "readonly", "", 1, "form-control"], ["type", "text", "id", "ruleName", "name", "ruleName", "placeholder", "Rule Name", "formControlName", "ruleName", "readonly", "", 1, "form-control"], ["formGroupName", "sourceSystems", 1, "col-lg-12"], [1, "formContent"], [1, "titleStyle", "mb-3"], [1, "col-lg-3"], ["for", "sourceSystem", 1, "formLbl"], ["formControlName", "sourceSystem", 1, "form-select", 3, "items", "change"], ["for", "messageType", 1, "formLbl"], ["id", "messageType", "aria-label", "Default select example", "formControlName", "messageType", "disabled", "", 1, "form-select"], ["value", "A"], ["value", "I"], ["value", "O"], ["for", "operationName", 1, "formLbl"], ["id", "operationName", "type", "text", "formControlName", "operationName", "placeholder", "Operation Name", 1, "form-control", 3, "readonly"], ["for", "serviceName", 1, "formLbl"], ["type", "text", "id", "serviceName", "formControlName", "serviceName", "placeholder", "Service Name", 1, "form-control", 3, "readonly"], ["formGroupName", "destinationSystems", 1, "col-lg-12"], ["for", "destinationSystem", 1, "formLbl"], ["formControlName", "destinationSystem", 1, "form-select", 3, "items", "change"], ["id", "destinationSystem", "aria-label", "Default select example", "formControlName", "messageType", 1, "form-select"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["id", "serviceName", "type", "text", "formControlName", "serviceName", "placeholder", "Service Name", 1, "form-control", 3, "readonly"], [1, "col-lg-12"], ["formArrayName", "validationSystems", 1, "formContent", "border-bottom-0", "pb-0"], [4, "ngFor", "ngForOf"], [3, "formGroupName"], [1, "row", "gy-4", "align-items-center", "mt-1"], [1, "col-lg"], ["class", "formLbl", 4, "ngIf"], ["id", "outlineNgSelect", "id", "systemOne", "formControlName", "validationSystem", 1, "form-select", 3, "items", "readonly", "change"], ["id", "messageType", "formControlName", "messageType", "aria-label", "Default select example", "disabled", "", 1, "form-select"], ["id", "operationName", "type", "text", "formControlName", "operation", "placeholder", "Operation Name", 1, "form-control", 3, "readonly"], ["id", "serviceName", "type", "text", "formControlName", "service", "placeholder", "Service Name", 1, "form-control", 3, "readonly"], [1, "col-auto", 3, "ngStyle"], ["style", "cursor: pointer;", 3, "click", 4, "ngIf"], [2, "cursor", "pointer", 3, "click"], [1, "ddIcon"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "addIcon", "primarybg", 2, "cursor", "pointer", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], ["id", "dbTable1", 1, "table", "tableStyle", "vAlignMdl", "responsive", "nowrap", 2, "border-spacing", "10px", "border-collapse", "separate"], [1, "tbleheadStyle"], [2, "text-align", "center"], [1, "src-sys-style"], [1, "td-highlight"], ["class", "src-sys-style", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["formArrayName", "sysRuleDetails"], ["class", "row g-3 pb-3 justify-content-start pt-3", 4, "ngIf"], ["class", "row g-3 pb-3 justify-content-end pt-3", 4, "ngIf"], [3, "formGroup"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["formControlName", "validationMethod", "id", "validationMethod", "type", "text", "placeholder", "Validation Method", 1, "form-control", 2, "background-color", "#F8F9FA"], ["formControlName", "validationDetail", "id", "validationDetails", "type", "text", "placeholder", "Validation Details", 1, "form-control", 2, "background-color", "#F8F9FA"], ["class", "tblIcon", 4, "ngIf"], ["id", "outlineNgSelect", "id", "susRuleMsg", "formControlName", "messageKey", "aria-label", "Default select example", 1, "form-select", 3, "disabled", "change"], ["required", "", 3, "value", "hidden", 4, "ngFor", "ngForOf"], ["required", "", 3, "value", "hidden"], ["id", "outlineNgSelect", "required", "", 1, "form-select", 3, "name", "disabled", "ngModel", "ngModelChange"], ["messageKey", "ngModel"], ["required", "", 3, "value", 4, "ngFor", "ngForOf"], ["required", "", 3, "value"], [1, "tblIcon"], ["class", "deleteIcon2", 3, "click", 4, "ngIf"], [1, "deleteIcon2", 3, "click"], [1, "row", "g-3", "pb-3", "justify-content-start", "pt-3"], ["class", "addIcon primarybg", "style", "cursor: pointer;margin-left: 20px;", 3, "click", 4, "ngIf"], [1, "addIcon", "primarybg", 2, "cursor", "pointer", "margin-left", "20px", 3, "click"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "btn", "smBtn", "minWdSmBtn", "btnDarkGrey", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "col-auto", 3, "hidden"], ["class", "col-auto", 4, "ngIf"], ["class", "col-auto", 3, "hidden", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "hidden", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"]], template: function RuleDetails2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Edit Rule");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, RuleDetails2Component_form_4_Template, 4, 4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RuleDetails2Component_div_6_Template, 13, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Maker");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Maker Time Stamp");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Record Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "Checker");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](63, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "Checker Time Stamp");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](70, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](76, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, "First Time Authorization");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](88, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](92, "Authorization Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](100, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](104, "Modification Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.ruleForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.showRuleValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.ruleConfig.creatorId);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](33, 10, ctx.ruleConfig.createdTime, "MM/dd/yyyy, h:mm a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.ruleConfig.recordStatus == "O" ? "OPEN" : ctx.ruleConfig.recordStatus == "C" ? "CLOSED" : ctx.ruleConfig.recordStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.ruleConfig.approverId);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](70, 13, ctx.ruleConfig.approvedTime, "MM/dd/yyyy, h:mm a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.ruleConfig.approvedEver == "N" ? "NO" : ctx.ruleConfig.approvedEver == "Y" ? "YES" : ctx.ruleConfig.approvedEver);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.ruleConfig.approvedStatus == "N" || ctx.ruleConfig.approvedStatus == "U" ? "UNAUTHORIZED" : ctx.ruleConfig.approvedStatus == "Y" || ctx.ruleConfig.approvedStatus == "A" ? "AUTHORIZED" : ctx.ruleConfig.approvedStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.ruleConfig.versionNo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], styles: [".td-highlight[_ngcontent-%COMP%] {\n  color: #000 !important;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  padding: 15px 3px 0px 12px;\n}\n\ntable.tableStyle[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px !important;\n  white-space: nowrap;\n}\n\ntable.tableStyle[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-left: 2px !important;\n}\n\n.readonlyTrue[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n}\n\n.readonlyFalse[_ngcontent-%COMP%] {\n  pointer-events: visible !important;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUtZGV0YWlsczIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFESjs7QUFLQTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFJRTtFQUNFLDRCQUFBO0FBREo7O0FBSUE7RUFDRSwrQkFBQTtBQURGOztBQUlBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0FBREYiLCJmaWxlIjoicnVsZS1kZXRhaWxzMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZC1oaWdobGlnaHR7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAwLjFyZW0gIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHBhZGRpbmc6IDE1cHggM3B4IDBweCAxMnB4O1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUY1RjU7XHJcbn1cclxuXHJcbnRhYmxlLnRhYmxlU3R5bGUgdGhlYWQgdHIgdGgge1xyXG4gICAgcGFkZGluZzogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbiAgdGFibGUudGFibGVTdHlsZSB0Ym9keSB0ZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVhZG9ubHlUcnVle1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZWFkb25seUZhbHNle1xyXG4gIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });
class RuleConfig {
}
class RuleValidation {
}
class RuleDto {
}
class MultipleValidation {
}


/***/ }),

/***/ 43492:
/*!*******************************************************************!*\
  !*** ./src/app/views/rule/rule-details/rule-details.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsComponent": function() { return /* binding */ RuleDetailsComponent; },
/* harmony export */   "RuleConfig": function() { return /* binding */ RuleConfig; },
/* harmony export */   "RuleValidation": function() { return /* binding */ RuleValidation; },
/* harmony export */   "RuleDto": function() { return /* binding */ RuleDto; },
/* harmony export */   "MultipleValidation": function() { return /* binding */ MultipleValidation; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 31600);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/guards/can-deactivate.guard */ 50215);
/* harmony import */ var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/rule.service */ 50511);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);












function RuleDetailsComponent_div_6_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Invalid RuleId");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RuleDetailsComponent_div_6_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Incoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "OutGoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RuleDetailsComponent_div_6_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RuleDetailsComponent_div_6_div_35_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", opt_r19.headerValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", opt_r19.headerValue, " ");
} }
function RuleDetailsComponent_div_6_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RuleDetailsComponent_div_6_div_35_option_4_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.translationDataOperation);
} }
function RuleDetailsComponent_div_6_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RuleDetailsComponent_div_6_div_40_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const serv_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", serv_r21.headerValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", serv_r21.headerValue, " ");
} }
function RuleDetailsComponent_div_6_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RuleDetailsComponent_div_6_div_40_option_4_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r8.translationDataService);
} }
function RuleDetailsComponent_div_6_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RuleDetailsComponent_div_6_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Incoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "OutGoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RuleDetailsComponent_div_6_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RuleDetailsComponent_div_6_div_62_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", opt_r23.headerValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", opt_r23.headerValue, " ");
} }
function RuleDetailsComponent_div_6_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RuleDetailsComponent_div_6_div_62_option_4_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r12.translationDestDataOperation);
} }
function RuleDetailsComponent_div_6_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RuleDetailsComponent_div_6_div_67_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const serv_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", serv_r25.headerValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", serv_r25.headerValue, " ");
} }
function RuleDetailsComponent_div_6_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RuleDetailsComponent_div_6_div_67_option_4_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r14.translationDestDataService);
} }
function RuleDetailsComponent_div_6_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RuleDetailsComponent_div_6_ng_container_74_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "select", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Incoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "OutGoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RuleDetailsComponent_div_6_ng_container_74_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RuleDetailsComponent_div_6_ng_container_74_div_15_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", opt_r36.headerValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", opt_r36.headerValue, " ");
} }
function RuleDetailsComponent_div_6_ng_container_74_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RuleDetailsComponent_div_6_ng_container_74_div_15_option_4_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r30.translationValDataOperation);
} }
function RuleDetailsComponent_div_6_ng_container_74_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RuleDetailsComponent_div_6_ng_container_74_div_20_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const serv_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", serv_r38.headerValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", serv_r38.headerValue, " ");
} }
function RuleDetailsComponent_div_6_ng_container_74_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RuleDetailsComponent_div_6_ng_container_74_div_20_option_4_Template, 2, 2, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r32.translationValDataService);
} }
function RuleDetailsComponent_div_6_ng_container_74_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RuleDetailsComponent_div_6_ng_container_74_a_23_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RuleDetailsComponent_div_6_ng_container_74_a_23_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41); const i_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r39.deleteVFGroup(i_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RuleDetailsComponent_div_6_ng_container_74_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](1, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ng-select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RuleDetailsComponent_div_6_ng_container_74_Template_ng_select_change_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43); const i_r27 = restoredCtx.index; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r42.onValidtion($event, i_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Message Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, RuleDetailsComponent_div_6_ng_container_74_div_10_Template, 10, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, RuleDetailsComponent_div_6_ng_container_74_div_11_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, RuleDetailsComponent_div_6_ng_container_74_div_15_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, RuleDetailsComponent_div_6_ng_container_74_div_16_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, RuleDetailsComponent_div_6_ng_container_74_div_20_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, RuleDetailsComponent_div_6_ng_container_74_div_21_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, RuleDetailsComponent_div_6_ng_container_74_a_23_Template, 2, 0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r27 = ctx.index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r16.externalCreateSystemFiltered);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r16.validationMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r16.validationMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r16.multipleOperation);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r16.multipleOperation);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r16.multipleService);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r16.multipleService);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r16.submit);
} }
function RuleDetailsComponent_div_6_a_76_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RuleDetailsComponent_div_6_a_76_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r44.addValidationGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/createrule/list"]; };
function RuleDetailsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Rule ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function RuleDetailsComponent_div_6_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r46.ruleIdInvalidOrNot(ctx_r46.ruleForm.get("ruleId").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, RuleDetailsComponent_div_6_span_8_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Rule Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Source System");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "ng-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RuleDetailsComponent_div_6_Template_ng_select_change_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r48.onSlectionExternalSystem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Message Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, RuleDetailsComponent_div_6_div_30_Template, 10, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, RuleDetailsComponent_div_6_div_31_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, RuleDetailsComponent_div_6_div_35_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, RuleDetailsComponent_div_6_div_36_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, RuleDetailsComponent_div_6_div_40_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, RuleDetailsComponent_div_6_div_41_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Destination System");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "ng-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RuleDetailsComponent_div_6_Template_ng_select_change_53_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r49.destinaltionSelection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Message Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, RuleDetailsComponent_div_6_div_57_Template, 10, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, RuleDetailsComponent_div_6_div_58_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, RuleDetailsComponent_div_6_div_62_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, RuleDetailsComponent_div_6_div_63_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, RuleDetailsComponent_div_6_div_67_Template, 5, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, RuleDetailsComponent_div_6_div_68_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Validation System");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, RuleDetailsComponent_div_6_ng_container_74_Template, 24, 9, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, RuleDetailsComponent_div_6_a_76_Template, 3, 0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RuleDetailsComponent_div_6_Template_button_click_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r50.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, " Exit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r0.submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.ruleIdInvalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r0.submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r0.externalCreateSystemFiltered)("clearable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.sourceMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.sourceMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.multipleOperationSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.multipleOperationSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.multipleServiceSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.multipleServiceSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r0.externalCreateSystemFiltered)("clearable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.destinationMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.destinationMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.multipleOperation);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.multipleOperation);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.multipleService);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.multipleService);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.validationSystems.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.ruleForm.get("ruleName").invalid || ctx_r0.ruleForm.get("ruleId").invalid || ctx_r0.ruleForm.get("sourceSystems").invalid || ctx_r0.ruleForm.get("destinationSystems").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](23, _c0));
} }
function RuleDetailsComponent_ng_container_7_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r66 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Validation System ", i_r66 + 1, " ");
} }
function RuleDetailsComponent_ng_container_7_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](validation_r67.validationSystem);
} }
function RuleDetailsComponent_ng_container_7_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Field No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function RuleDetailsComponent_ng_container_7_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Key ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function RuleDetailsComponent_ng_container_7_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function RuleDetailsComponent_ng_container_7_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Column Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function RuleDetailsComponent_ng_container_7_th_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Field No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function RuleDetailsComponent_ng_container_7_th_22_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Key ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function RuleDetailsComponent_ng_container_7_th_22_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function RuleDetailsComponent_ng_container_7_th_22_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Column Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function RuleDetailsComponent_ng_container_7_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RuleDetailsComponent_ng_container_7_th_22_ng_container_1_Template, 2, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, RuleDetailsComponent_ng_container_7_th_22_ng_container_2_Template, 2, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, RuleDetailsComponent_ng_container_7_th_22_ng_container_3_Template, 2, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RuleDetailsComponent_ng_container_7_th_22_ng_container_4_Template, 2, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r57.sourceDetails == "TCP/IP" || ctx_r57.sourceDetails == "MT" || ctx_r57.sourceDetails == "MX");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r57.sourceDetails == "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r57.sourceDetails == "XML");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r57.valDeatils == "DB Connection");
} }
function RuleDetailsComponent_ng_container_7_tr_29_ng_container_3_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r85 = ctx.$implicit;
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r85.messagebasis)("disabled", !ctx_r84.submit)("hidden", ctx_r84.try(data_r85.messagebasis));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", data_r85.messageKey, " ", data_r85.messagebasis, " ");
} }
function RuleDetailsComponent_ng_container_7_tr_29_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "select", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RuleDetailsComponent_ng_container_7_tr_29_ng_container_3_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r88); const i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r86.onselectOfFieldNo($event, i_r76); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Please select Field No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RuleDetailsComponent_ng_container_7_tr_29_ng_container_3_option_4_Template, 2, 5, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r77.ruleMappDetails);
} }
function RuleDetailsComponent_ng_container_7_tr_29_ng_container_4_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r90 = ctx.$implicit;
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r90.messagebasis)("disabled", !ctx_r89.submit)("hidden", ctx_r89.try(data_r90.messagebasis));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", data_r90.messageKey, " ", data_r90.messagebasis, " ");
} }
function RuleDetailsComponent_ng_container_7_tr_29_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "select", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RuleDetailsComponent_ng_container_7_tr_29_ng_container_4_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r93); const i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r91.onselectOfFieldNo($event, i_r76); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Please select Tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RuleDetailsComponent_ng_container_7_tr_29_ng_container_4_option_4_Template, 2, 5, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r78.ruleMappDetails);
} }
function RuleDetailsComponent_ng_container_7_tr_29_ng_container_5_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r95 = ctx.$implicit;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r95.messagebasis)("disabled", !ctx_r94.submit)("hidden", ctx_r94.try(data_r95.messagebasis));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", data_r95.messageKey, " ", data_r95.messagebasis, " ");
} }
function RuleDetailsComponent_ng_container_7_tr_29_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "select", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RuleDetailsComponent_ng_container_7_tr_29_ng_container_5_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r98); const i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r96.onselectOfFieldNo($event, i_r76); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Please select Key ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RuleDetailsComponent_ng_container_7_tr_29_ng_container_5_option_4_Template, 2, 5, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r79.ruleMappDetails);
} }
function RuleDetailsComponent_ng_container_7_tr_29_ng_container_6_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r100 = ctx.$implicit;
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r100.messagebasis)("disabled", !ctx_r99.submit)("hidden", ctx_r99.try(data_r100.messagebasis));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", data_r100.messageKey, " ", data_r100.messagebasis, " ");
} }
function RuleDetailsComponent_ng_container_7_tr_29_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "select", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RuleDetailsComponent_ng_container_7_tr_29_ng_container_6_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r103); const i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r101.onselectOfFieldNo($event, i_r76); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Please select Column Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RuleDetailsComponent_ng_container_7_tr_29_ng_container_6_option_4_Template, 2, 5, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r80.ruleMappDetails);
} }
function RuleDetailsComponent_ng_container_7_tr_29_ng_container_7_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r105 = ctx.$implicit;
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r105.messagebasis)("disabled", !ctx_r104.submit)("hidden", ctx_r104.try(data_r105.messagebasis));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", data_r105.messageKey, " ", data_r105.messagebasis, " ");
} }
function RuleDetailsComponent_ng_container_7_tr_29_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "select", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RuleDetailsComponent_ng_container_7_tr_29_ng_container_7_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r108); const i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r106.onselectOfFieldNo($event, i_r76); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Please select Field No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RuleDetailsComponent_ng_container_7_tr_29_ng_container_7_option_4_Template, 2, 5, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r81.ruleMappDetails);
} }
function RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_1_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r116 = ctx.$implicit;
    const idx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index;
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r116.messagebasis)("hidden", ctx_r115.try2(data_r116.messagebasis, idx_r110))("disabled", !ctx_r115.submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", data_r116.messageKey, " ", data_r116.messagebasis, " ");
} }
function RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "select", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_1_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r120); const idx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r118.onselectOfFieldNo2($event, i_r76, idx_r110); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Please select Field No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_1_option_4_Template, 2, 5, "option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r111.xmlRespData);
} }
function RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_2_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r124 = ctx.$implicit;
    const idx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index;
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r123.submit)("value", data_r124.messagebasis)("hidden", ctx_r123.try2(data_r124.messagebasis, idx_r110));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", data_r124.messageKey, " ", data_r124.messagebasis, " ");
} }
function RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "select", 91, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_2_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r128); const idx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r126.onselectOfFieldNo2($event, i_r76, idx_r110); })("ngModelChange", function RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_2_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r128); const validation_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; return validation_r109.messageKey = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Please select Tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_2_option_5_Template, 2, 5, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const idx_r110 = ctx_r132.index;
    const validation_r109 = ctx_r132.$implicit;
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "messageKey_", idx_r110, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", validation_r109.messageKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r112.xmlRespData);
} }
function RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_3_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r134 = ctx.$implicit;
    const idx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index;
    const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r134.messagebasis)("hidden", ctx_r133.try2(data_r134.messagebasis, idx_r110))("disabled", !ctx_r133.submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", data_r134.messageKey, " ", data_r134.messagebasis, " ");
} }
function RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "select", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_3_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r138); const idx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r136.onselectOfFieldNo2($event, i_r76, idx_r110); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Please select Column Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_3_option_4_Template, 2, 5, "option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r113.xmlRespData);
} }
function RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_4_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r141 = ctx.$implicit;
    const idx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index;
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r141.messagebasis)("hidden", ctx_r140.try2(data_r141.messagebasis, idx_r110))("disabled", !ctx_r140.submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", data_r141.messageKey, " ", data_r141.messagebasis, " ");
} }
function RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "select", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_4_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r145); const idx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r143.onselectOfFieldNo2($event, i_r76, idx_r110); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Please select Field No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_4_option_4_Template, 2, 5, "option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r114.xmlRespData);
} }
function RuleDetailsComponent_ng_container_7_tr_29_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_1_Template, 5, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_2_Template, 6, 3, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_3_Template, 5, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RuleDetailsComponent_ng_container_7_tr_29_td_8_ng_container_4_Template, 5, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r82.valDeatils == "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r82.valDeatils == "Https/Http");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r82.valDeatils == "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r82.valDeatils == "MT" || ctx_r82.valDeatils == "MX");
} }
function RuleDetailsComponent_ng_container_7_tr_29_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RuleDetailsComponent_ng_container_7_tr_29_a_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r149); const i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r147.removeSysRules(i_r76); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RuleDetailsComponent_ng_container_7_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](1, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, RuleDetailsComponent_ng_container_7_tr_29_ng_container_3_Template, 5, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RuleDetailsComponent_ng_container_7_tr_29_ng_container_4_Template, 5, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, RuleDetailsComponent_ng_container_7_tr_29_ng_container_5_Template, 5, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, RuleDetailsComponent_ng_container_7_tr_29_ng_container_6_Template, 5, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, RuleDetailsComponent_ng_container_7_tr_29_ng_container_7_Template, 5, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, RuleDetailsComponent_ng_container_7_tr_29_td_8_Template, 5, 4, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, RuleDetailsComponent_ng_container_7_tr_29_a_14_Template, 2, 0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_r75 = ctx.$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", rule_r75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r58.sourceDetails == "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r58.sourceDetails == "XML");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r58.sourceDetails == "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r58.sourceDetails == "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r58.sourceDetails == "MT" || ctx_r58.sourceDetails == "MX");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r58.validationSystems.value)("ngForTrackBy", ctx_r58.indexTracker);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r58.submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r58.submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r58.submit);
} }
function RuleDetailsComponent_ng_container_7_a_32_Template(rf, ctx) { if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RuleDetailsComponent_ng_container_7_a_32_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r151); const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r150.addSysRuleDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RuleDetailsComponent_ng_container_7_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RuleDetailsComponent_ng_container_7_div_37_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r153); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r152.editValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r60.hideSubmit || ctx_r60.submit);
} }
function RuleDetailsComponent_ng_container_7_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RuleDetailsComponent_ng_container_7_div_41_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r155); const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r154.auditChangeRuleTranslation("auth"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Auth ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r61.hideSubmit);
} }
function RuleDetailsComponent_ng_container_7_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RuleDetailsComponent_ng_container_7_div_42_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r157); const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r156.auditChangeRuleTranslation("close"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r62.hideSubmit);
} }
function RuleDetailsComponent_ng_container_7_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r159 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RuleDetailsComponent_ng_container_7_div_43_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r159); const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r158.auditChangeRuleTranslation("open"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Reopen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r63.hideSubmit);
} }
function RuleDetailsComponent_ng_container_7_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RuleDetailsComponent_ng_container_7_div_44_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r161); const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r160.deleteRule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r64.hideSubmit);
} }
function RuleDetailsComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "fieldset", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "table", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "tr", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Source System");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, RuleDetailsComponent_ng_container_7_th_8_Template, 2, 1, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Validation Rule ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, RuleDetailsComponent_ng_container_7_td_15_Template, 3, 1, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, RuleDetailsComponent_ng_container_7_ng_container_18_Template, 2, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, RuleDetailsComponent_ng_container_7_ng_container_19_Template, 2, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, RuleDetailsComponent_ng_container_7_ng_container_20_Template, 2, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, RuleDetailsComponent_ng_container_7_ng_container_21_Template, 2, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, RuleDetailsComponent_ng_container_7_th_22_Template, 5, 4, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "validation method");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "validation details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](28, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, RuleDetailsComponent_ng_container_7_tr_29_Template, 15, 11, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, RuleDetailsComponent_ng_container_7_a_32_Template, 3, 0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RuleDetailsComponent_ng_container_7_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r163); const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r162.Previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, RuleDetailsComponent_ng_container_7_div_37_Template, 3, 1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RuleDetailsComponent_ng_container_7_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r163); const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r164.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, RuleDetailsComponent_ng_container_7_div_41_Template, 3, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, RuleDetailsComponent_ng_container_7_div_42_Template, 3, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, RuleDetailsComponent_ng_container_7_div_43_Template, 3, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, RuleDetailsComponent_ng_container_7_div_44_Template, 3, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " Exit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r1.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.validationSystems.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", ctx_r1.validationSystems.value.length + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.sourceSystems.sourceSystem);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.validationSystems.value)("ngForTrackBy", ctx_r1.indexTracker);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.sourceDetails == "TCP/IP" || ctx_r1.sourceDetails == "MT" || ctx_r1.sourceDetails == "MX");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.sourceDetails == "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.sourceDetails == "XML");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.sourceDetails == "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.validationSystems.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.sysRuleDetails.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx_r1.submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !((ctx_r1.ruleConfig == null ? null : ctx_r1.ruleConfig.recordStatus) == "C" || (ctx_r1.ruleConfig == null ? null : ctx_r1.ruleConfig.recordStatus) == "CLOSED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx_r1.submit)("disabled", ctx_r1.ruleForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.ruleConfig == null ? null : ctx_r1.ruleConfig.approvedStatus) == "U" || (ctx_r1.ruleConfig == null ? null : ctx_r1.ruleConfig.approvedStatus) == "UNAUTHORIZED" || (ctx_r1.ruleConfig == null ? null : ctx_r1.ruleConfig.approvedStatus) == "N" || (ctx_r1.ruleConfig == null ? null : ctx_r1.ruleConfig.approvedEver) == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((ctx_r1.ruleConfig == null ? null : ctx_r1.ruleConfig.recordStatus) == "O" || (ctx_r1.ruleConfig == null ? null : ctx_r1.ruleConfig.recordStatus) == "OPEN") && (ctx_r1.ruleConfig == null ? null : ctx_r1.ruleConfig.approvedEver) != "NO" && (ctx_r1.ruleConfig == null ? null : ctx_r1.ruleConfig.approvedEver) != "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((ctx_r1.ruleConfig == null ? null : ctx_r1.ruleConfig.recordStatus) == "C" || (ctx_r1.ruleConfig == null ? null : ctx_r1.ruleConfig.recordStatus) == "CLOSED") && (ctx_r1.ruleConfig == null ? null : ctx_r1.ruleConfig.approvedEver) != "NO" && (ctx_r1.ruleConfig == null ? null : ctx_r1.ruleConfig.approvedEver) != "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.ruleConfig == null ? null : ctx_r1.ruleConfig.approvedEver) == "NO" || (ctx_r1.ruleConfig == null ? null : ctx_r1.ruleConfig.approvedEver) == "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](22, _c0));
} }
function RuleDetailsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 106);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 106);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 106);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 106);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Checker Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](63, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](69, "img", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "First Time Authorization");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "img", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Authorization Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](93, "img", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "Modification Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.ruleConfig.creatorId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](26, 8, ctx_r2.ruleConfig.createdTime, "MM/dd/yyyy, h:mm a"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.ruleConfig.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.ruleConfig.approverId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](63, 11, ctx_r2.ruleConfig.approvedTime, "MM/dd/yyyy, h:mm a"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.ruleConfig.approvedEver);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.ruleConfig.approvedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.ruleConfig.versionNo);
} }
class RuleDetailsComponent {
    constructor(formBuilder, router, canDeactivateGuard, ruleService, toastService, cdr) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.canDeactivateGuard = canDeactivateGuard;
        this.ruleService = ruleService;
        this.toastService = toastService;
        this.cdr = cdr;
        // saveDisabled = true;
        this.submit = true;
        this.showRuleValidation = false;
        this.externalsystem = [];
        this.selectedExternalSystems = [];
        this.filteredExternalSystems = [];
        this.sourcesysdata = [];
        this.tempArrayData = [];
        this.headerTagData1 = [];
        this.externalCreateSystemFiltered = [];
        this.isSelected = true;
        this.hideSubmit = false;
        this.deleted = false;
        this.tempArrayList = [];
        this.tempArrayList2 = [];
        this.ruleConfig = new RuleConfig();
        this.selectedDocumentTypes2 = [];
        this.messageBasisIso = [];
        this.xmlRespData = [];
        this.editFlag = true;
        this.ruleIdInvalid = false;
        this.formTouched = true;
        this.showDialog = false;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.destinationMsg = true;
        this.sourceMsg = true;
        this.validationMsg = true;
        this.issourceSysDisabled = (value) => {
            return this.headerTagData1.includes(value);
        };
    }
    ngOnInit() {
        this.initForm();
        this.currentUser = localStorage.getItem('userFromLogin');
        this.gettingExternalSsytem();
    }
    initForm() {
        this.ruleForm = this.formBuilder.group({
            ruleId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            ruleName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            sourceSystems: this.getSourceItem(),
            destinationSystems: this.getDestinationItem(),
            validationSystems: this.formBuilder.array([]),
            sysRuleDetails: this.formBuilder.array([]),
        });
        // this.addValidationGroup();
    }
    getSourceItem() {
        return this.formBuilder.group({
            sourceSystem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            messageKey: [''],
            messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        });
    }
    canExit() {
        let isExit = false;
        if (this.ruleForm.touched && this.formTouched == true) {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: 'There are unsaved changes in the screen. Would you like to navigate to other screen?',
                showCancelButton: true,
                confirmButtonColor: '#E6224A',
                cancelButtonColor: '#011945',
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                icon: 'info',
            }).then((result) => {
                if (result.isConfirmed === true) {
                    isExit = true;
                    this.cdr.markForCheck();
                    return isExit;
                }
                else {
                    isExit = false;
                    this.cdr.markForCheck();
                    return isExit;
                }
            });
        }
        else {
            isExit = true;
            return new Promise((resolve, reject) => {
                if (isExit === true) {
                    isExit = true;
                    this.cdr.markForCheck();
                    resolve(true);
                }
            });
        }
    }
    getDestinationItem() {
        return this.formBuilder.group({
            destinationSystem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        });
    }
    getValidationItem() {
        return this.formBuilder.group({
            validationSystem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            messageKey: [""],
            messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            service: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            operation: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            id: [''],
            ruleId: ['']
        });
    }
    getSysRuleDetails() {
        return this.formBuilder.group({
            id: [""],
            ruleId: [""],
            messageKey: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            validationMethod: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            validationDetail: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
        });
    }
    indexTracker(index, value) {
        return index;
    }
    get sourceSystems() {
        return this.ruleForm.get('sourceSystems').value;
    }
    get validationSystems() {
        return this.ruleForm.get('validationSystems');
    }
    get sysRuleDetails() {
        return this.ruleForm.get('sysRuleDetails');
    }
    addValidationGroup() {
        this.validationSystems.push(this.getValidationItem());
    }
    addSysRuleDetails() {
        this.sysRuleDetails.push(this.getSysRuleDetails());
        console.log(this.sysRuleDetails.value);
    }
    deleteVFGroup(index) {
        console.log("Inside delete");
        this.validationSystems.removeAt(index);
        const selectedSystems = new Set(this.validationSystems.value.map(val => val.validationSystem));
        this.filteredExternalSystems = this.externalsystem.filter(val => !selectedSystems.has(val));
    }
    removeSysRules(index) {
        console.log(this.removeSysRules);
        if (this.tempArrayList[index]) {
            this.tempArrayList.splice(index, 1);
        }
        if (this.tempArrayList2[index]) {
            this.tempArrayList2.splice(index, 1);
        }
        this.sysRuleDetails.removeAt(index);
        console.log(this.ruleForm.valid);
        this.ruleForm.controls['sysRuleDetails'].setErrors({ 'customeError': true });
        console.log(this.ruleForm.valid);
        console.log(this.ruleForm.invalid);
        console.log(this.ruleForm.dirty);
        console.log(this.ruleForm);
        // if (this.ruleForm.invalid){
        //   console.log(this.ruleForm);
        //   this.disableButton();
        // }
    }
    // disableButton() {
    //   this.ruleForm.get('submitButton').disable();
    // }
    // enableButton() {
    //   this.ruleForm.get('submitButton').enable();
    // }
    trackByFn(index, item) {
        return index;
    }
    onSlectionExternalSystem(event) {
        this.srcSystem = event;
        this.externalCreateSystemFiltered = this.externalsystem.filter((system) => system !== this.srcSystem && system !== this.desSystem);
        // this.systemName = event.value;
        this.sourcesystem = event;
        // console.log(this.sourcesystem);
        this.ruleService.gettingTranslationData(this.sourcesystem).subscribe(resp => {
            // console.log(resp);
            if (resp) {
                this.sourceSysData = resp;
                this.ruleMappDetails = this.sourceSysData.msgTransDetails;
                // console.log(this.ruleMappDetails,"RuleMapping before");
                if (this.sourceSysData.messageType) {
                    if (this.sourceSysData.messageType == 'I') {
                        this.sourceSysData.messageType = 'Incoming';
                    }
                    if (this.sourceSysData.messageType == 'O') {
                        this.sourceSysData.messageType = 'OutGoing';
                    }
                    this.sourceMsg = false;
                }
                // console.log(this.sourceSysData);
                this.ruleForm.get('sourceSystems').patchValue(this.sourceSysData);
                if (resp.messageType) {
                    if (resp.messageType == 'Incoming') {
                        resp.messageType = 'I';
                    }
                    if (resp.messageType == 'OutGoing') {
                        resp.messageType = 'O';
                    }
                    this.sourceMsg = false;
                }
                this.ruleConfig.sourceTranslationId = resp.transId;
                this.gettingoperationAndServiceFroSourceSystem(this.sourcesystem, resp.messageType);
            }
        });
        this.externalsystem = this.tempArrayData;
    }
    gettingoperationAndServiceFroSourceSystem(ssysName, msgType) {
        // console.log("ssysName", ssysName)
        this.ruleService.gettingoperationAndService(ssysName, msgType, this.currentUser)
            .subscribe((sourceResp) => {
            console.log(sourceResp);
            if (sourceResp) {
                if (sourceResp.I) {
                    sourceResp.I.OPERATION[0] = 'Conversion',
                        sourceResp.I.SERVICE[0] = 'Conversion';
                    this.sourceOperation = sourceResp.I.OPERATION;
                    this.sourceService = sourceResp.I.SERVICE;
                    this.sourceDetails = sourceResp.MdmtSystemChannel[0].messageChannel;
                    if (this.sourceDetails === 'Https/Http') {
                        this.sourceDetails = sourceResp.MdmtSystemChannel[0].messageFormat;
                    }
                    this.messageBasisIso = sourceResp.MdmtSystemService;
                }
                if (sourceResp.O) {
                    sourceResp.O.OPERATION[0] = 'Conversion',
                        sourceResp.O.SERVICE[0] = 'Conversion';
                    this.sourceOperation = sourceResp.O.OPERATION;
                    this.sourceService = sourceResp.O.SERVICE;
                    this.sourceDetails = sourceResp.MdmtSystemChannel[0].messageChannel;
                    if (this.sourceDetails === 'Https/Http') {
                        this.sourceDetails = sourceResp.MdmtSystemChannel[0].messageFormat;
                    }
                    this.messageBasisIso = sourceResp.MdmtSystemService;
                }
            }
            console.log(this.sourceSysData);
            console.log(this.sourceService);
            let keys = Object.keys(sourceResp);
            let x = keys[2];
            let y = keys[3];
            if (x == 'I' && Object.keys(sourceResp).length == 3) {
                // console.log("yes", x);
                // console.log(this.ruleForm);
                if (sourceResp.I.SERVICE.length !== 0) {
                    // this.msgTranslation.serviceName = sourceResp.I.SERVICE[0].headerValue
                    // console.log(sourceResp.I.SERVICE);
                    // this.ruleForm.get('sourceSystems').patchValue(this.sourceSysData);
                    // this.ruleForm.get('sysRuleDetails').setValue(sourceResp.I.SERVICE[0].headerValue);
                    // this.ruleForm.get('serviceName').patchValue(sourceResp.I.SERVICE[0].headerValue);
                    // (this.ruleForm.get('sysRuleDetails') as FormArray).at(0).get('serviceName').patchValue(sourceResp.I.SERVICE[0].headerValue);
                    this.translationDataService = sourceResp.I.SERVICE;
                    if (sourceResp.I.SERVICE.length <= 1) {
                        console.log(this.translationDataService, "1st if");
                        this.multipleServiceSource = true;
                    }
                    if (sourceResp.I.SERVICE.length > 1) {
                        console.log(this.translationDataService, "2nd If");
                        this.multipleServiceSource = false;
                    }
                }
                if (sourceResp.I.OPERATION.length !== 0) {
                    // this.msgTranslation.operationName = sourceResp.I.OPERATION[0].headerValue
                    // this.ruleForm.get('operationName').patchValue(sourceResp.I.OPERATION[0].headerValue);
                    this.translationDataOperation = sourceResp.I.OPERATION;
                    console.log(this.translationDataOperation);
                    if (this.translationDataOperation.length <= 1) {
                        console.log(this.translationDataOperation, "1st if");
                        this.multipleOperationSource = true;
                    }
                    if (this.translationDataOperation.length > 1) {
                        console.log(this.translationDataOperation, "2nd If");
                        this.multipleOperationSource = false;
                    }
                }
                this.translationDataService = sourceResp.I.SERVICE;
            }
            if (x == 'O' && Object.keys(sourceResp).length == 3) {
                if (sourceResp.O.SERVICE.length !== 0) {
                    this.translationDataService = sourceResp.O.SERVICE;
                    if (sourceResp.O.SERVICE.length <= 1) {
                        // console.log(this.translationDestDataService ,"1st if");
                        this.multipleServiceSource = true;
                    }
                    if (sourceResp.O.SERVICE.length > 1) {
                        // console.log(this.translationDestDataService,"2nd If");
                        this.multipleServiceSource = false;
                    }
                }
                if (sourceResp.O.OPERATION.length !== 0) {
                    // this.msgTranslation.operationName = sourceResp.O.OPERATION[0].headerValue
                    // this.ruleForm.get('operationName').patchValue(sourceResp.O.OPERATION[0].headerValue);
                    this.translationDataOperation = sourceResp.O.OPERATION;
                    //  console.log(this.translationDestDataOperation);
                    if (this.translationDataOperation.length <= 1) {
                        // console.log(this.translationDestDataOperation ,"1st if");
                        this.multipleOperationSource = true;
                    }
                    if (this.translationDestDataOperation.length > 1) {
                        // console.log(this.translationDestDataOperation,"2nd If");
                        this.multipleOperationSource = false;
                    }
                }
                this.translationDataService = sourceResp.O.SERVICE;
            }
            // console.log("messageBasisIso", this.messageBasisIso);
            // console.log(this.ruleMappDetails,"Rule mapping before");
            //  for(let g = 0 ; g< this.messageBasisIso.length;g++){
            //   // console.log("messageBasisIso", this.messageBasisIso[g].dataType);
            //   this.ruleMappDetails.push({
            //     dataType: this.messageBasisIso[g].dataType,
            //     defaultValue: null,
            //     encryption: this.messageBasisIso[g].encryption,
            //     id: this.messageBasisIso[g].channelId,
            //     messageKey: this.messageBasisIso[g].messageKey,
            //     messagebasis: this.messageBasisIso[g].messageBasis,
            //     transId: this.messageBasisIso[g].serviceId,
            //     translationId: 0,
            //     versionNo: 1});
            //  }
            // console.log(this.ruleMappDetails,"Rule mapping after");
            // this.ruleMappDetails.patchValue({channelId: 16963,
            //   dataType: "numeric",
            //   encryption: "No Encryption",
            //   headerTag: "SERVICE",
            //   headerValue: "009",
            //   messageBasis: null,
            //   messageKey: "FCUBS_HEADER>BRANCH",
            //   serviceId: 17974});
        }, (err => {
            console.log(err);
        }));
    }
    gettingoperationAndServiceFroDestinationSystem(ssysName, msgType) {
        // console.log("ssysName", ssysName)
        this.ruleService.gettingoperationAndService(ssysName, msgType, this.currentUser)
            .subscribe((sourceResp) => {
            console.log(sourceResp);
            if (sourceResp) {
                if (sourceResp.I) {
                    sourceResp.I.OPERATION[0] = 'Conversion',
                        sourceResp.I.SERVICE[0] = 'Conversion';
                    this.sourceOperation = sourceResp.I.OPERATION;
                    this.sourceService = sourceResp.I.SERVICE;
                    // this.sourceDetails = sourceResp.MdmtSystemChannel[0].messageChannel;
                    // if(this.sourceDetails ===  'Https/Http' ){
                    //   this.sourceDetails =sourceResp.MdmtSystemChannel[0].messageFormat;
                    // }
                    this.messageBasisIso = sourceResp.MdmtSystemService;
                }
                if (sourceResp.O) {
                    sourceResp.O.OPERATION[0] = 'Conversion',
                        sourceResp.O.SERVICE[0] = 'Conversion';
                    this.sourceOperation = sourceResp.O.OPERATION;
                    this.sourceService = sourceResp.O.SERVICE;
                    // this.sourceDetails = sourceResp.MdmtSystemChannel[0].messageChannel;
                    // if(this.sourceDetails ===  'Https/Http' ){
                    //   this.sourceDetails =sourceResp.MdmtSystemChannel[0].messageFormat;
                    // }
                    this.messageBasisIso = sourceResp.MdmtSystemService;
                }
            }
            // console.log(this.sourceSysData);
            // console.log(this.sourceService);
            let keys = Object.keys(sourceResp);
            let x = keys[2];
            let y = keys[3];
            if (x == 'I' && Object.keys(sourceResp).length == 3) {
                if (sourceResp.I.SERVICE.length !== 0) {
                    this.translationDestDataService = sourceResp.I.SERVICE;
                    if (sourceResp.I.SERVICE.length <= 1) {
                        // console.log(this.translationDestDataService ,"1st if");
                        this.multipleService = true;
                    }
                    if (sourceResp.I.SERVICE.length > 1) {
                        // console.log(this.translationDestDataService,"2nd If");
                        this.multipleService = false;
                    }
                }
                if (sourceResp.I.OPERATION.length !== 0) {
                    // this.msgTranslation.operationName = sourceResp.I.OPERATION[0].headerValue
                    // this.ruleForm.get('operationName').patchValue(sourceResp.I.OPERATION[0].headerValue);
                    this.translationDestDataOperation = sourceResp.I.OPERATION;
                    //  console.log(this.translationDestDataOperation);
                    if (this.translationDestDataOperation.length <= 1) {
                        // console.log(this.translationDestDataOperation ,"1st if");
                        this.multipleOperation = true;
                    }
                    if (this.translationDestDataOperation.length > 1) {
                        // console.log(this.translationDestDataOperation,"2nd If");
                        this.multipleOperation = false;
                    }
                }
                this.translationDestDataService = sourceResp.I.SERVICE;
            }
            if (x == 'O' && Object.keys(sourceResp).length == 3) {
                if (sourceResp.O.SERVICE.length !== 0) {
                    this.translationDestDataService = sourceResp.O.SERVICE;
                    if (sourceResp.O.SERVICE.length <= 1) {
                        // console.log(this.translationDestDataService ,"1st if");
                        this.multipleService = true;
                    }
                    if (sourceResp.O.SERVICE.length > 1) {
                        // console.log(this.translationDestDataService,"2nd If");
                        this.multipleService = false;
                    }
                }
                if (sourceResp.O.OPERATION.length !== 0) {
                    // this.msgTranslation.operationName = sourceResp.O.OPERATION[0].headerValue
                    // this.ruleForm.get('operationName').patchValue(sourceResp.O.OPERATION[0].headerValue);
                    this.translationDestDataOperation = sourceResp.O.OPERATION;
                    //  console.log(this.translationDestDataOperation);
                    if (this.translationDestDataOperation.length <= 1) {
                        // console.log(this.translationDestDataOperation ,"1st if");
                        this.multipleOperation = true;
                    }
                    if (this.translationDestDataOperation.length > 1) {
                        // console.log(this.translationDestDataOperation,"2nd If");
                        this.multipleOperation = false;
                    }
                }
                this.translationDestDataService = sourceResp.O.SERVICE;
            }
            // console.log("messageBasisIso", this.messageBasisIso);
            // console.log(this.ruleMappDetails,"Rule mapping before");
            //  for(let g = 0 ; g< this.messageBasisIso.length;g++){
            //   // console.log("messageBasisIso", this.messageBasisIso[g].dataType);
            //   this.ruleMappDetails.push({
            //     dataType: this.messageBasisIso[g].dataType,
            //     defaultValue: null,
            //     encryption: this.messageBasisIso[g].encryption,
            //     id: this.messageBasisIso[g].channelId,
            //     messageKey: this.messageBasisIso[g].messageKey,
            //     messagebasis: this.messageBasisIso[g].messageBasis,
            //     transId: this.messageBasisIso[g].serviceId,
            //     translationId: 0,
            //     versionNo: 1});
            //  }
            // console.log(this.ruleMappDetails,"Rule mapping after");
            // this.ruleMappDetails.patchValue({channelId: 16963,
            //   dataType: "numeric",
            //   encryption: "No Encryption",
            //   headerTag: "SERVICE",
            //   headerValue: "009",
            //   messageBasis: null,
            //   messageKey: "FCUBS_HEADER>BRANCH",
            //   serviceId: 17974});
        }, (err => {
            console.log(err);
        }));
    }
    destinaltionSelection(event) {
        this.translationDestDataOperation = [];
        this.translationDestDataService = [];
        console.log(this.externalsystem);
        this.desSystem = event;
        this.destination = event;
        this.externalCreateSystemFiltered = this.externalsystem.filter((system) => system !== this.srcSystem && system !== this.desSystem);
        console.log(this.externalCreateSystemFiltered);
        this.ruleService.gettingTranslationData(this.destination).subscribe((resp) => {
            console.log(resp);
            if (resp) {
                this.destinationSysData = resp;
                if (this.destinationSysData.messageType) {
                    if (this.destinationSysData.messageType == 'I') {
                        this.destinationSysData.messageType = 'Incoming';
                    }
                    if (this.destinationSysData.messageType == 'O') {
                        this.destinationSysData.messageType = 'OutGoing';
                    }
                    this.destinationMsg = false;
                }
                this.ruleConfig.targetTranslationId = resp.transId;
                this.ruleForm.get('destinationSystems').patchValue(this.destinationSysData);
            }
            // console.log(this.destination,resp.messageType);
            if (this.destinationSysData.messageType) {
                if (this.destinationSysData.messageType == 'Incoming') {
                    this.destinationSysData.messageType = 'I';
                }
                if (this.destinationSysData.messageType == 'OutGoing') {
                    this.destinationSysData.messageType = 'O';
                }
                this.destinationMsg = false;
            }
            this.gettingoperationAndServiceFroDestinationSystem(this.destination, resp.messageType);
        });
        this.externalsystem = this.tempArrayData;
    }
    onValidtion(event, i) {
        this.selectedExternalSystems[i] = event;
        const selectedMessageKeySet = new Set(this.selectedExternalSystems);
        this.externalCreateSystemFiltered = this.externalsystem.filter((system) => system !== this.srcSystem && system !== this.desSystem);
        // this.filteredExternalSystems = this.externalsystem.filter(system => !selectedMessageKeySet.has(system));
        this.validationData = event;
        if (this.selectedDocumentTypes2[i]) {
            this.headerTagData1 = this.externalsystem.filter(val => val !== this.selectedDocumentTypes2[i]);
        }
        this.selectedDocumentTypes2[i] = this.validationData;
        this.headerTagData1.push(this.validationData);
        console.log(this.validationData);
        this.ruleService.gettingTranslationData(this.validationData).subscribe((resp) => {
            console.log(resp);
            if (resp) {
                this.validationTransData = resp;
                this.xmlRespData = this.validationTransData.msgTransDetails;
                if (this.validationTransData.messageType) {
                    if (this.validationTransData.messageType == 'I') {
                        this.validationTransData.messageType = 'Incoming';
                    }
                    if (this.validationTransData.messageType == 'O') {
                        this.validationTransData.messageType = 'OutGoing';
                    }
                    this.validationMsg = false;
                }
                this.ruleForm.get('validationSystems').at(i).get('service').patchValue(this.validationTransData.serviceName);
                this.ruleForm.get('validationSystems').at(i).get('operation').patchValue(this.validationTransData.operationName);
                this.ruleForm.get('validationSystems').at(i).get('messageType').patchValue(this.validationTransData.messageType);
                if (resp.messageType) {
                    if (resp.messageType == 'Incoming') {
                        resp.messageType = 'I';
                    }
                    if (resp.messageType == 'OutGoing') {
                        resp.messageType = 'O';
                    }
                    this.sourceMsg = false;
                }
                this.gettingoperationSndservForValidation(this.validationData, resp.messageType);
            }
        });
        this.externalsystem = this.tempArrayData;
    }
    gettingExternalSsytem() {
        this.ruleService.gettingExternalsystem().subscribe((res) => {
            console.log("Response ::", res);
            this.externalsystem = res.sort();
            this.filteredExternalSystems = this.externalsystem;
            this.sourcesysdata = this.externalsystem;
            this.tempArrayData = this.externalsystem;
            this.externalCreateSystemFiltered = this.externalsystem;
        });
    }
    gettingoperationSndservForValidation(valData, msg) {
        this.ruleService.gettingoperationAndService(valData, msg, this.currentUser)
            .subscribe(valResp => {
            console.log(valResp);
            if (valResp) {
                this.valOperation = valResp.OPERATION;
                this.valService = valResp.SERVICE;
                this.valDeatils = valResp.MdmtSystemChannel[0].messageChannel;
                // console.log("valDe", this.valDeatils);
                // this.xmlRespData = valResp.MdmtSystemService;
                let keys = Object.keys(valResp);
                let x = keys[2];
                let y = keys[3];
                if (x == 'I' && Object.keys(valResp).length == 3) {
                    if (valResp.I.SERVICE.length !== 0) {
                        this.translationValDataService = valResp.I.SERVICE;
                        if (valResp.I.SERVICE.length < 1) {
                            // console.log(this.translationValDataService ,"1st if");
                            this.multipleService = true;
                        }
                        if (valResp.I.SERVICE.length >= 1) {
                            // console.log(this.translationValDataService,"2nd If");
                            this.multipleService = false;
                        }
                    }
                    if (valResp.I.OPERATION.length !== 0) {
                        this.translationValDataOperation = valResp.I.OPERATION;
                        //  console.log(this.translationValDataOperation);
                        if (this.translationValDataOperation.length < 1) {
                            // console.log(this.translationValDataOperation ,"1st if");
                            this.multipleOperation = true;
                        }
                        if (this.translationValDataOperation.length >= 1) {
                            // console.log(this.translationValDataOperation,"2nd If");
                            this.multipleOperation = false;
                        }
                    }
                    this.translationValDataService = valResp.I.SERVICE;
                }
                // console.log(this.xmlRespData.length);
            }
        }, (err => {
            console.log(err);
        }));
    }
    auditChangeRuleTranslation(operation) {
        let message = '';
        let operationType = '';
        switch (operation) {
            case 'open':
                message = 'opened';
                operationType = 'open';
                break;
            case 'close':
                message = 'closed';
                operationType = 'close';
                break;
            case 'auth':
                message = 'authorized';
                operationType = 'authorize';
                break;
            default:
                break;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            text: `You are trying to ${operationType} record. ` + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'NO',
            confirmButtonText: 'YES', 'icon': 'info'
        }).then((result => {
            if (result.isConfirmed === true) {
                if (this.ruleConfig.creatorId == this.currentUser) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: `Maker cannot ${operationType} the record!` });
                }
                else {
                    this.ruleConfig.mdmtValidationSystemData = this.validationSystems.value;
                    this.ruleConfig.mdmtValidationSystemData.forEach(el => {
                        el.ruleId = this.ruleConfig.ruleId;
                    });
                    this.sysRuleDetails.value.forEach(el => { el.ruleId = this.ruleForm.get('ruleId').value; });
                    this.ruleConfig.sysRuleDetails = this.sysRuleDetails.value;
                    this.ruleConfig.approvedEver == 'NO' ? this.ruleConfig.approvedEver = 'N' : (this.ruleConfig.approvedEver == 'YES' ? this.ruleConfig.approvedEver = 'Y' : this.ruleConfig.approvedEver);
                    this.ruleConfig.approvedStatus == 'UNAUTHORIZED' ? this.ruleConfig.approvedStatus = 'U' : (this.ruleConfig.approvedStatus == 'AUTHORIZED' ? this.ruleConfig.approvedStatus = 'A' : this.ruleConfig.approvedStatus);
                    this.ruleConfig.recordStatus == 'OPEN' ? this.ruleConfig.recordStatus = 'O' : (this.ruleConfig.recordStatus == 'CLOSED' ? this.ruleConfig.recordStatus = 'C' : this.ruleConfig.recordStatus);
                    console.log(this.ruleConfig);
                    this.ruleService.editRuleConfig(operation, this.ruleConfig, this.currentUser).subscribe(authResp => {
                        console.log(authResp);
                        if (authResp) {
                            this.ruleConfig = authResp;
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire(`Record is ${message}`);
                        }
                    }, (err) => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: `Failed To ${message}` });
                    });
                }
            }
        }));
    }
    editValues() {
        this.hideSubmit = true;
        this.submit = true;
        this.editFlag = true;
        this.ruleForm.enable();
    }
    deleteRule() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            text: 'You are trying to delete record. ' + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#3e54b8',
            cancelButtonColor: '#d33',
            cancelButtonText: 'NO',
            confirmButtonText: 'YES', 'icon': 'info', iconColor: "#d33"
        }).then((result => {
            console.log("this is reopen ", result);
            if (result.isConfirmed === true) {
                this.ruleConfig.mdmtValidationSystemData = this.validationSystems.value;
                this.ruleConfig.mdmtValidationSystemData.forEach(el => {
                    el.ruleId = this.ruleConfig.ruleId;
                });
                this.sysRuleDetails.value.forEach(el => { el.ruleId = this.ruleForm.get('ruleId').value; });
                this.ruleConfig.sysRuleDetails = this.sysRuleDetails.value;
                console.log(this.ruleConfig);
                this.ruleService.onDeleteRuleCongif(this.ruleConfig.sysRuleId, this.currentUser).subscribe((response) => {
                    if (response) {
                        this.deleted = true;
                        this.editBtn = true;
                        this.authBtn = true;
                        this.closeBtn = true;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            text: 'Record is Deleted',
                            icon: 'success'
                        }).then((result) => {
                            if (result) {
                                this.router.navigateByUrl('/createrule/list');
                            }
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Failed to delete the reocrd");
                    }
                });
            }
        }));
    }
    ruleIdInvalidOrNot(e) {
        console.log(e);
        var regexp = /^[a-zA-Z0-9-_]+$/;
        console.log(this.ruleIdInvalid);
        if (e) {
            if (e.search(regexp) === -1) {
                this.ruleIdInvalid = true;
                console.log("1" + " " + this.ruleIdInvalid);
            }
            else {
                this.ruleIdInvalid = false;
                console.log("2" + " " + this.ruleIdInvalid);
            }
        }
    }
    next() {
        this.showRuleValidation = !this.showRuleValidation;
        if (this.sysRuleDetails.length == 0) {
            this.addSysRuleDetails();
        }
        if (this.ruleForm.value.validationSystems.length > 0) {
            for (let i = 0; i < this.ruleForm.value.validationSystems.length; i++) {
                if (this.ruleForm.value.validationSystems[i].validationSystem == "" || this.ruleForm.value.validationSystems[i].validationSystem == '') {
                    //  this.ruleForm.value.validationSystems.removeAt(i);
                    this.validationSystems.removeAt(i);
                }
            }
        }
        console.log("RuleForm value", this.ruleForm.value);
    }
    onSubmit() {
        this.ruleConfig.mdmtValidationSystemData = this.validationSystems.value;
        this.ruleConfig.mdmtValidationSystemData.forEach(el => {
            el.ruleId = this.ruleForm.get('ruleId').value;
        });
        this.sysRuleDetails.value.forEach(el => { el.ruleId = this.ruleForm.get('ruleId').value; });
        this.ruleConfig.sysRuleDetails = this.sysRuleDetails.value;
        this.ruleConfig.ruleId = this.ruleForm.get('ruleId').value;
        this.ruleConfig.ruleName = this.ruleForm.get('ruleName').value;
        if (this.ruleIdAfterSave) {
            this.ruleConfig.approvedEver == 'NO' ? this.ruleConfig.approvedEver = 'N' : this.ruleConfig.approvedEver;
            this.ruleConfig.recordStatus == 'OPEN' ? this.ruleConfig.recordStatus = 'O' : this.ruleConfig.recordStatus;
            this.ruleConfig.approvedStatus == 'UNAUTHORIZED' ? this.ruleConfig.approvedStatus = 'U' : this.ruleConfig.approvedStatus;
            this.ruleService.editRuleConfig("update", this.ruleConfig, this.currentUser).subscribe((data) => {
                if (data) {
                    console.log(data);
                    this.ruleConfig = data;
                    this.ruleIdAfterSave = data.ruleId;
                    this.ruleForm.get('sysRuleDetails').setValue(data === null || data === void 0 ? void 0 : data.sysRuleDetails);
                    this.ruleForm.get('validationSystems').setValue(data === null || data === void 0 ? void 0 : data.mdmtValidationSystemData);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: 'Record is Updated.', icon: 'success' });
                    this.submit = false;
                    this.formTouched = !this.ruleForm.touched;
                    this.ruleForm.disable();
                    this.auditShowStatus = true;
                    this.editFlag = false;
                    this.auditLog();
                }
            }, err => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: 'Failed To update the Record', icon: 'error' });
            });
        }
        else {
            this.ruleService.saveRuleconfig(this.ruleConfig, this.currentUser).subscribe((data) => {
                if (data) {
                    this.ruleConfig = data;
                    this.ruleIdAfterSave = data.ruleId;
                    this.ruleForm.get('sysRuleDetails').setValue(data.sysRuleDetails);
                    this.ruleForm.get('validationSystems').setValue(data.mdmtValidationSystemData);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: 'Record is Created.', icon: 'success' });
                    this.formTouched = !this.ruleForm.touched;
                    this.submit = false;
                    this.ruleForm.disable();
                    this.auditShowStatus = true;
                    this.editFlag = false;
                    this.auditLog();
                }
            }, err => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: 'Failed To Save the Record', icon: 'error' });
            });
        }
    }
    auditLog() {
        if (this.ruleConfig.approvedStatus === 'U') {
            this.ruleConfig.approvedStatus = 'UNAUTHORIZED';
        }
        if (this.ruleConfig.approvedStatus === 'A') {
            this.ruleConfig.approvedStatus = 'AUTHORIZED';
        }
        if (this.ruleConfig.recordStatus === 'O') {
            this.ruleConfig.recordStatus = 'OPEN';
        }
        if (this.ruleConfig.recordStatus === 'C') {
            this.ruleConfig.recordStatus = 'CLOSE';
        }
        if (this.ruleConfig.approvedEver === 'N') {
            this.ruleConfig.approvedEver = 'NO';
        }
        if (this.ruleConfig.approvedEver === 'Y') {
            this.ruleConfig.approvedEver = 'YES';
        }
    }
    Previous() {
        this.showRuleValidation = !this.showRuleValidation;
        console.log("Rule form value", this.ruleForm.value);
    }
    openPopUp() {
        jquery__WEBPACK_IMPORTED_MODULE_0__('.ddTrigger').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__('.ddParent').removeClass('actDD');
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).parents('li').siblings().find('.ddParent').removeClass('actDD');
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).parents('.ddParent').toggleClass('actDD');
            jquery__WEBPACK_IMPORTED_MODULE_0__(this).removeClass('actUnread');
        });
    }
    closeAll() {
        jquery__WEBPACK_IMPORTED_MODULE_0__(document).on("click", function (event) {
            var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent");
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
            }
        });
    }
    close() {
        jquery__WEBPACK_IMPORTED_MODULE_0__('.ddCloseTrigger').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".ddParent").removeClass("actDD");
        });
    }
    // try(value) {
    //   console.log(value);
    //   if (this.tempArrayList.find(item=>item==value)) {
    //     return true;
    //   }
    //   else {
    //     return false;
    //   }
    // }
    try2(value, col) {
        for (let row = 0; row < this.tempArrayList2.length; row++) {
            if (this.tempArrayList2[row][col] === value)
                return true;
        }
        return false;
    }
    // try(option) {
    //   console.log(option);
    //   this.desSystems.includes(option);
    //   // this.desSystems.push(event.target.value);
    //   console.log(this.desSystems);
    //   // return this.desSystems
    // }
    try(value) {
        if (this.tempArrayList.find(item => item == value)) {
            return true;
        }
        else {
            return false;
        }
    }
    onselectOfFieldNo(event, i) {
        console.log(event.target.value);
        // this.sourseSys = event.target.value;
        console.log(this.tempArrayList[i]);
        if (this.tempArrayList[i]) {
            this.tempArrayList[i] = event.target.value;
        }
        else {
            this.tempArrayList.push(event.target.value);
        }
        console.log(this.tempArrayList);
    }
    onselectOfFieldNo2(event, row, col) {
        if (!this.tempArrayList2[row])
            this.tempArrayList2[row] = [];
        this.tempArrayList2[row][col] = event.target.value;
    }
}
RuleDetailsComponent.ɵfac = function RuleDetailsComponent_Factory(t) { return new (t || RuleDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__.CanDeactivateGuard), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_3__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef)); };
RuleDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RuleDetailsComponent, selectors: [["npr-rule-details"]], decls: 9, vars: 5, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["novalidate", "", 1, "formStyle", 3, "formGroup"], [3, "disabled"], ["class", "dbCardStyle", 4, "ngIf"], [4, "ngIf"], [1, "dbCardStyle"], [1, "row", "gy-4"], [1, "col-lg-4"], [1, "formLbl"], [1, "colorRed"], ["type", "text", "id", "ruleId", "name", "ruleId", "formControlName", "ruleId", "placeholder", "Rule ID", 1, "form-control", 3, "readonly", "keyup"], ["class", "danger", 4, "ngIf"], ["type", "text", "id", "ruleName", "name", "ruleName", "placeholder", "Rule Name", "formControlName", "ruleName", 1, "form-control", 3, "readonly"], ["formGroupName", "sourceSystems", 1, "col-lg-12"], [1, "formContent"], [1, "titleStyle", "mb-3"], [1, "col-lg-3"], ["for", "sourceSystem", 1, "formLbl"], ["formControlName", "sourceSystem", 3, "items", "clearable", "change"], ["for", "messageType", 1, "formLbl"], ["for", "roleName", 1, "formLbl"], ["formGroupName", "destinationSystems", 1, "col-lg-12"], ["for", "destinationSystem", 1, "formLbl"], ["formControlName", "destinationSystem", 3, "items", "clearable", "change"], [1, "col-lg-12"], ["formArrayName", "validationSystems", 1, "formContent", "border-bottom-0", "pb-0"], [4, "ngFor", "ngForOf"], ["class", "addIcon primarybg", "style", "cursor: pointer", 3, "click", 4, "ngIf"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "danger"], ["id", "messageType", "aria-label", "Default select example", "formControlName", "messageType", 1, "form-select"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["value", "A"], ["value", "I"], ["value", "O"], ["id", "messageType", "type", "text", "formControlName", "messageType", "placeholder", "Message Type", 1, "form-control"], ["id", "operationName", "formControlName", "operationName", "aria-label", "Default select example", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["id", "operationName", "type", "text", "formControlName", "operationName", "value", "", 1, "form-control"], ["id", "serviceName", "formControlName", "serviceName", "aria-label", "Default select example", 1, "form-select"], ["id", "serviceName", "type", "text", "formControlName", "serviceName", "value", "", 1, "form-control"], ["id", "destinationSystem", "aria-label", "Default select example", "formControlName", "messageType", 1, "form-select"], ["id", "destinationSystem", "type", "text", "formControlName", "messageType", "placeholder", "Message Type", 1, "form-control"], [3, "formGroupName"], [1, "row", "gy-4", "align-items-center", "mt-1"], [1, "col-lg"], ["formControlName", "validationSystem", 1, "form-select", 3, "items", "change"], [1, "col-auto", 2, "margin-top", "50px"], ["class", "tblIcon", 3, "click", 4, "ngIf"], ["id", "msgType", "formControlName", "messageType", "aria-label", "Default select example", 1, "form-select"], ["id", "msgType", "type", "text", "formControlName", "messageType", "placeholder", "Message Type", 1, "form-control"], ["id", "operationName", "formControlName", "operation", "aria-label", "Default select example", 1, "form-select"], ["id", "operationName", "type", "text", "formControlName", "operation", "value", "", 1, "form-control"], ["id", "serviceName", "formControlName", "service", "aria-label", "Default select example", 1, "form-select"], ["id", "serviceName", "type", "text", "formControlName", "service", "value", "", 1, "form-control"], [1, "tblIcon", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "addIcon", "primarybg", 2, "cursor", "pointer", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], ["id", "dbTable1", 1, "table", "tableStyle", "responsive", "nowrap", "vAlignMdl", 2, "border-spacing", "10px", "border-collapse", "separate"], [1, "tbleheadStyle"], [2, "text-align", "center"], [2, "padding", "0 !important", "border-bottom-style", "dashed"], [1, "td-highlight"], ["style", "padding: 0 !important; border-bottom-style: dashed", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["formArrayName", "sysRuleDetails"], [1, "row", "g-3"], [1, "btn", "smBtn", "minWdSmBtn", "btnDarkGrey", 3, "hidden", "click"], ["class", "col-auto", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "hidden", "disabled", "click"], ["class", "col-auto", 3, "hidden", 4, "ngIf"], [3, "formGroup"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["formControlName", "validationMethod", "id", "validationMethod", "type", "text", "placeholder", "Validation Method", "value", "", 1, "form-control", 3, "readonly"], ["formControlName", "validationDetail", "id", "validationDetails", "type", "text", "placeholder", "Validation Details", "value", "", 1, "form-control", 3, "readonly"], [1, "tblIcon"], ["id", "outlineNgSelect", "id", "susRuleMsg", "formControlName", "messageKey", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["hidden", "", "required", "", 3, "value", "disabled", "hidden", 4, "ngFor", "ngForOf"], ["hidden", "", "required", "", 3, "value", "disabled", "hidden"], ["id", "outlineNgSelect", "formControlName", "messageKey", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["required", "", 3, "value", "disabled", "hidden", 4, "ngFor", "ngForOf"], ["required", "", 3, "value", "disabled", "hidden"], ["id", "outlineNgSelect", "aria-label", "Default select example", "required", "", 1, "form-select", 3, "change"], ["required", "", 3, "value", "hidden", "disabled", 4, "ngFor", "ngForOf"], ["required", "", 3, "value", "hidden", "disabled"], ["id", "outlineNgSelect", "required", "", "aria-label", "Default select example", 1, "form-select", 3, "name", "ngModel", "change", "ngModelChange"], ["messageKey", "ngModel"], ["required", "", 3, "disabled", "value", "hidden", 4, "ngFor", "ngForOf"], ["required", "", 3, "disabled", "value", "hidden"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "hidden", "click"], [1, "col-auto", 3, "hidden"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], [1, "fa", "fa-edit", "faClass"], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], [1, "fa", "fa-check-square-o", "faClassChecker"], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/authorize.svg", "alt", "...", 1, "modImage"], ["src", "assets/images/modification.svg", "alt", "...", 1, "modImage"]], template: function RuleDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Create Rule");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "fieldset", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, RuleDetailsComponent_div_6_Template, 85, 24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, RuleDetailsComponent_ng_container_7_Template, 48, 23, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, RuleDetailsComponent_div_8_Template, 100, 14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.ruleForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showRuleValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showRuleValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.auditShowStatus);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".danger[_ngcontent-%COMP%] {\n  color: #E6224A;\n}\n\n.td-highlight[_ngcontent-%COMP%] {\n  color: #000 !important;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  padding: 15px 3px 0px 12px;\n}\n\ntable.tableStyle[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px !important;\n  white-space: nowrap;\n}\n\ntable.tableStyle[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-left: 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUdFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQUFGOztBQUlBO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUdBO0VBQ0UsNEJBQUE7QUFBRiIsImZpbGUiOiJydWxlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFuZ2VyIHtcclxuICBjb2xvcjogI0U2MjI0QTtcclxufVxyXG4udGQtaGlnaGxpZ2h0e1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiA2cHggIWltcG9ydGFudDtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAwLjFyZW0gIWltcG9ydGFudDtcclxuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgcGFkZGluZzogMTVweCAzcHggMHB4IDEycHg7XHJcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUY1RjU7XHJcbn1cclxuXHJcbnRhYmxlLnRhYmxlU3R5bGUgdGhlYWQgdHIgdGgge1xyXG4gIHBhZGRpbmc6IDEycHggIWltcG9ydGFudDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbnRhYmxlLnRhYmxlU3R5bGUgdGJvZHkgdGQge1xyXG4gIHBhZGRpbmctbGVmdDogMnB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
class RuleConfig {
}
class RuleValidation {
}
class RuleDto {
}
class MultipleValidation {
}


/***/ }),

/***/ 60084:
/*!*************************************************************!*\
  !*** ./src/app/views/rule/rule-list/rule-list.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleListComponent": function() { return /* binding */ RuleListComponent; },
/* harmony export */   "RuleConfig": function() { return /* binding */ RuleConfig; },
/* harmony export */   "RuleValidation": function() { return /* binding */ RuleValidation; },
/* harmony export */   "RuleDto": function() { return /* binding */ RuleDto; },
/* harmony export */   "MultipleValidation": function() { return /* binding */ MultipleValidation; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/config/app.constant */ 3118);
/* harmony import */ var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/fmosNewRolePermissions */ 35383);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/rule.service */ 50511);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/add-system.service */ 91973);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ 50481);













const _c0 = function () { return ["/createrule/create"]; };
const _c1 = function () { return ["active"]; };
function RuleListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.roleCodes.new.labelDescription);
} }
function RuleListComponent_tbody_26_tr_1_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RuleListComponent_tbody_26_tr_1_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11); const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r9.close(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RuleListComponent_tbody_26_tr_1_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RuleListComponent_tbody_26_tr_1_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r12.open(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RuleListComponent_tbody_26_tr_1_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RuleListComponent_tbody_26_tr_1_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r15.delete(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RuleListComponent_tbody_26_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RuleListComponent_tbody_26_tr_1_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19); const data_r5 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r18.editRule(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RuleListComponent_tbody_26_tr_1_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19); const data_r5 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r20.auth(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, RuleListComponent_tbody_26_tr_1_button_16_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, RuleListComponent_tbody_26_tr_1_button_17_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, RuleListComponent_tbody_26_tr_1_button_18_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r5.ruleId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r5.ruleName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r5.approvedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r5.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](12, 9, data_r5.createdTime, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !(data_r5.approvedStatus == "U" || data_r5.approvedStatus == "UNAUTHORIZED" || data_r5.approvedStatus == "Unauthorized"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (data_r5.recordStatus == "O" || data_r5.recordStatus == "Open" || data_r5.recordStatus == "OPEN") && (data_r5.approvedEver == "Y" || data_r5.approvedEver == "YES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (data_r5.recordStatus == "CLOSED" || data_r5.recordStatus == "Close" || data_r5.recordStatus == "c" || data_r5.recordStatus == "C") && (data_r5.approvedEver == "YES" || data_r5.approvedEver == "Y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", data_r5.approvedEver == "N" || data_r5.approvedEver == "NO");
} }
function RuleListComponent_tbody_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RuleListComponent_tbody_26_tr_1_Template, 19, 12, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.rulesData);
} }
function RuleListComponent_tbody_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function RuleListComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Please wait... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} }
const _c2 = function () { return ["/dashboard"]; };
class RuleListComponent {
    constructor(ruleService, roleService, toastService, router, addSystem, cdr, http) {
        this.ruleService = ruleService;
        this.roleService = roleService;
        this.toastService = toastService;
        this.router = router;
        this.addSystem = addSystem;
        this.cdr = cdr;
        this.http = http;
        this.rulesData = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.dtOptions = {};
        this.isLoading = false;
        this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();
        this.ruleDto = new RuleDto();
        this.ruleConfig = new RuleConfig();
        this.statusArr = ['Authorized', 'Unauthorized', 'Open', 'Close'];
        this.API_URL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            serverSide: true,
            columnDefs: [{ type: 'date', 'targets': [4] }],
            order: [[4, 'desc']],
            // processing: true,
            lengthMenu: [
                [5, 10, 20, 30, -1],
                [5, 10, 20, 30, "ALL"],
            ],
            // columnDefs: [ { type: 'date', 'targets': [5] } ],
            // order: [[5, 'desc']],
            ajax: (dataTablesParameters, callback) => {
                dataTablesParameters.minNumber = dataTablesParameters.start + 1;
                dataTablesParameters.maxNumber =
                    dataTablesParameters.start + dataTablesParameters.length;
                console.log(dataTablesParameters.minNumber, dataTablesParameters.maxNumber);
                const pageNo = Math.floor(dataTablesParameters.minNumber / dataTablesParameters.length);
                const pageSize = dataTablesParameters.length;
                const search = dataTablesParameters.search.value;
                this.http.get(`${this.API_URL}` + `/ruleConfig/getRuleConfigSummary?pageNo=${pageNo}&pageSize=${pageSize}&search=${search}`)
                    .subscribe(resp => {
                    ;
                    console.log(resp);
                    for (let item of resp.result) {
                        item.recordStatus = this.statusArr.find((i) => i.startsWith(item.recordStatus));
                        item.approvedStatus = this.statusArr.find((i) => i.startsWith(item.approvedStatus));
                    }
                    this.totalPages = resp.totalNoOfPages;
                    this.totalRecords = resp.totalRecords;
                    this.rulesData = resp.result;
                    this.isLoading = false;
                    this.cdr.markForCheck();
                    callback({
                        recordsTotal: resp.totalRecords,
                        recordsFiltered: resp.totalRecords,
                        data: [],
                    });
                });
            },
        };
        this.currentUser = localStorage.getItem('userFromLogin');
        // this.fetchRules();
        this.roleService.fetchScreenPermissions('Create Rule');
        this.roleService.screenLabelList.subscribe(message => this.roleCodes = message);
        console.log(this.roleCodes);
    }
    fetchRules() {
        this.isLoading = true;
        this.ruleService.fetchingRules()
            .subscribe((resp) => {
            console.log(resp);
            // this.toastService.successMessage('Data Fetched Successfully!.', '');
            for (let data of resp.result) {
                data.approvedStatus = this.statusArr.find((i) => i.startsWith(data.approvedStatus));
                data.recordStatus = this.statusArr.find((i) => i.startsWith(data.recordStatus));
            }
            this.rulesData = resp.result;
            this.isLoading = false;
            this.cdr.markForCheck();
            this.dtTrigger.next();
        }, (err) => {
            console.error("Error!");
            // this.toastService.errorMessage('Failed to Fetch Data!.', '');
        });
    }
    editRule(row) {
        console.log(row);
        this.router.navigate(["/createrule/edit", row.ruleId]);
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
    close(data) {
        console.log(data);
        this.ruleConfig = data;
        this.arrRuleValidation = [data];
        this.multipleValidation = [];
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: 'You are trying to close record. ' + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#3e54b8',
            cancelButtonColor: '#d33',
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: 'NO',
            confirmButtonText: 'YES', 'icon': 'info', iconColor: "#d33"
        }).then((result => {
            console.log("this is reopen ", result);
            console.log(this.multipleValidation);
            console.log(this.arrRuleValidation);
            console.log(this.ruleConfig);
            console.log(this.currentUser);
            if (result.isConfirmed === true) {
                this.ruleService.editRuleConfig("close", data, this.currentUser).subscribe(closeResp => {
                    console.log(closeResp);
                    if (closeResp) {
                        this.ruleConfig = closeResp;
                        this.editBtn = true;
                        this.authBtn = true;
                        this.deleted = false;
                        this.reopenBtn = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({ text: "Record is Closed" }).then(() => window.location.reload());
                    }
                }, err => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({ text: "Failed to close the Record" });
                });
            }
        }));
    }
    open(data) {
        this.ruleConfig = data;
        this.arrRuleValidation = [data];
        this.multipleValidation = [];
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: 'You are trying to re-open record. ' + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#3e54b8',
            cancelButtonColor: '#d33',
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: 'NO',
            confirmButtonText: 'YES', 'icon': 'info', iconColor: "#d33"
        }).then((result => {
            console.log("this is reopen ", result);
            console.log(this.multipleValidation);
            console.log(this.arrRuleValidation);
            console.log(this.ruleConfig);
            console.log(this.currentUser);
            if (result.isConfirmed === true) {
                this.ruleService.editRuleConfig("open", data, this.currentUser).subscribe(openResp => {
                    console.log(openResp);
                    if (openResp) {
                        this.ruleConfig = openResp;
                        this.authBtnHide = false;
                        this.editBtn = false;
                        this.authBtn = false;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({ text: "Record is Reopened" }).then(() => window.location.reload());
                    }
                }, err => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({ text: "Failed to open the Record" });
                });
            }
        }));
    }
    delete(data) {
        console.log(data);
        this.ruleConfig = data;
        this.arrRuleValidation = [data];
        this.multipleValidation = [];
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: 'You are trying to delete record. ' + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#3e54b8',
            cancelButtonColor: '#d33',
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: 'NO',
            confirmButtonText: 'YES', 'icon': 'info', iconColor: "#d33"
        }).then((result => {
            console.log("this is reopen ", result);
            if (result.isConfirmed === true) {
                this.ruleConfig.mdmtValidationSystemData = this.multipleValidation;
                this.ruleConfig.mdmtValidationSystemData.forEach(el => {
                    el.ruleId = this.ruleConfig.ruleId;
                });
                this.arrRuleValidation.forEach(el => { el.ruleId = this.ruleConfig.ruleId; });
                console.log(this.arrRuleValidation);
                this.ruleConfig.sysRuleDetails = this.arrRuleValidation;
                console.log(this.ruleConfig);
                this.ruleService.onDeleteRuleCongif(this.ruleConfig.sysRuleId, this.currentUser).subscribe((response) => {
                    if (response) {
                        this.deleted = true;
                        this.editBtn = true;
                        this.authBtn = true;
                        this.closeBtn = true;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                            text: 'Record is Deleted',
                            icon: 'success'
                        }).then(() => window.location.reload());
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire("Failed to delete the reocrd");
                    }
                });
            }
        }));
    }
    auth(data) {
        this.ruleConfig = data;
        console.log(data);
        console.log(this.ruleConfig.creatorId);
        this.arrRuleValidation = [data];
        this.multipleValidation = [];
        console.log(this.currentUser);
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: 'You are trying to Authorize record. ' + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: 'NO',
            confirmButtonText: 'YES', 'icon': 'info'
        }).then((result => {
            console.log("this is reopen ", result);
            if (result.isConfirmed === true) {
                if (this.ruleConfig.creatorId == this.currentUser) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({ text: "Maker cannot authorize the record!" });
                }
                else {
                    // this.ruleConfig.mdmtValidationSystemData = this.multipleValidation;
                    // this.ruleConfig.mdmtValidationSystemData.forEach(el => {
                    //   el.ruleId = this.ruleConfig.ruleId;
                    // })
                    // // console.log(this.ruleConfig);
                    // this.arrRuleValidation.forEach(el => { el.ruleId = this.ruleConfig.ruleId });
                    // console.log(this.ruleConfig);
                    // this.ruleConfig.sysRuleDetails = this.arrRuleValidation;
                    // this.ruleConfig.approverId= this.currentUser;
                    // this.ruleConfig.approvedEver == 'NO'? this.ruleConfig.approvedEver = 'N' : (this.ruleConfig.approvedEver == 'YES'? this.ruleConfig.approvedEver = 'Y' : this.ruleConfig.approvedEver);
                    // this.ruleConfig.approvedStatus == 'UNAUTHORIZED'? this.ruleConfig.approvedStatus = 'U' : (this.ruleConfig.approvedStatus == 'AUTHORIZED'? this.ruleConfig.approvedStatus = 'A' : this.ruleConfig.approvedStatus);
                    // this.ruleConfig.recordStatus == "OPEN" ? this.ruleConfig.recordStatus = 'O' : (this.ruleConfig.recordStatus == 'CLOSE'? this.ruleConfig.recordStatus = 'C' : this.ruleConfig.recordStatus);
                    if (this.ruleConfig.approvedStatus === "Unauthorized") {
                        this.ruleConfig.approvedStatus = 'U';
                    }
                    if (this.ruleConfig.approvedStatus === 'Authorized') {
                        this.ruleConfig.approvedStatus = 'A';
                    }
                    if (this.ruleConfig.recordStatus === 'Open') {
                        this.ruleConfig.recordStatus = 'O';
                    }
                    if (this.ruleConfig.recordStatus === 'Close') {
                        this.ruleConfig.recordStatus = 'C';
                    }
                    if (this.ruleConfig.approvedEver === 'NO') {
                        this.ruleConfig.approvedEver = 'N';
                    }
                    if (this.ruleConfig.approvedEver === 'YES') {
                        this.ruleConfig.approvedEver = 'Y';
                    }
                    console.log(this.ruleConfig);
                    this.ruleService.editRuleConfig("auth", data, this.currentUser).subscribe(authResp => {
                        console.log(authResp);
                        if (authResp) {
                            this.ruleConfig = authResp;
                            this.authorizeDone = true;
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({ text: "Record is Authorized" }).then(() => window.location.reload());
                        }
                    }, (err) => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({ text: "Failed To Authorize" });
                    });
                }
            }
        }));
    }
}
RuleListComponent.ɵfac = function RuleListComponent_Factory(t) { return new (t || RuleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_3__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_6__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient)); };
RuleListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: RuleListComponent, selectors: [["npr-rule-list"]], decls: 29, vars: 7, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "table-responsive"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyle", "nowrap", "vAlignMdl", 2, "width", "100%", 3, "dtOptions"], [4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink", "routerLinkActive"], [4, "ngFor", "ngForOf"], [1, "primaryColor", 2, "cursor", "pointer", 3, "click"], ["title", "Authorize", 1, "btn", 2, "color", "red", 3, "disabled", "click"], ["src", "assets/images/authorize.svg", "alt", "Authorize", 1, "summaryIcon"], ["class", "btn", "style", "color: red", "title", "Close", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Reopen", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Delete", 3, "click", 4, "ngIf"], ["title", "Close", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/CROSS1.svg", "alt", "...", 1, "summaryIcon"], ["title", "Reopen", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/open.svg", "alt", "...", 1, "summaryIcon"], ["title", "Delete", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/delete.svg", "alt", "...", 1, "summaryIcon"], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]], template: function RuleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Create Rule");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, RuleListComponent_div_6_Template, 3, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Rule Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Rule Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Auth Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Record Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, RuleListComponent_tbody_26_Template, 2, 1, "tbody", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, RuleListComponent_tbody_27_Template, 2, 0, "tbody", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, RuleListComponent_ng_container_28_Template, 5, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.roleCodes.new);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dtOptions", ctx.dtOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.rulesData == null ? null : ctx.rulesData.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.rulesData == null ? null : ctx.rulesData.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_7__.DataTableDirective, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJydWxlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
class RuleConfig {
}
class RuleValidation {
}
class RuleDto {
}
class MultipleValidation {
}


/***/ }),

/***/ 5419:
/*!***************************************************!*\
  !*** ./src/app/views/rule/rule-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleRoutingModule": function() { return /* binding */ RuleRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/guards/can-deactivate.guard */ 50215);
/* harmony import */ var _rule_details_rule_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rule-details/rule-details.component */ 43492);
/* harmony import */ var _rule_details2_rule_details2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rule-details2/rule-details2.component */ 36591);
/* harmony import */ var _rule_list_rule_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rule-list/rule-list.component */ 60084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    {
        path: 'list',
        component: _rule_list_rule_list_component__WEBPACK_IMPORTED_MODULE_3__.RuleListComponent
    }, {
        path: 'create',
        component: _rule_details_rule_details_component__WEBPACK_IMPORTED_MODULE_1__.RuleDetailsComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
    }, {
        path: 'edit/:id',
        component: _rule_details2_rule_details2_component__WEBPACK_IMPORTED_MODULE_2__.RuleDetails2Component,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
    }
];
class RuleRoutingModule {
}
RuleRoutingModule.ɵfac = function RuleRoutingModule_Factory(t) { return new (t || RuleRoutingModule)(); };
RuleRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RuleRoutingModule });
RuleRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RuleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 11784:
/*!*******************************************!*\
  !*** ./src/app/views/rule/rule.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleModule": function() { return /* binding */ RuleModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _rule_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rule-routing.module */ 5419);
/* harmony import */ var _rule_details_rule_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rule-details/rule-details.component */ 43492);
/* harmony import */ var _rule_list_rule_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rule-list/rule-list.component */ 60084);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 50481);
/* harmony import */ var _rule_details2_rule_details2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rule-details2/rule-details2.component */ 36591);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);









class RuleModule {
}
RuleModule.ɵfac = function RuleModule_Factory(t) { return new (t || RuleModule)(); };
RuleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RuleModule });
RuleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _rule_routing_module__WEBPACK_IMPORTED_MODULE_0__.RuleRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RuleModule, { declarations: [_rule_details_rule_details_component__WEBPACK_IMPORTED_MODULE_1__.RuleDetailsComponent,
        _rule_list_rule_list_component__WEBPACK_IMPORTED_MODULE_2__.RuleListComponent,
        _rule_details2_rule_details2_component__WEBPACK_IMPORTED_MODULE_4__.RuleDetails2Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _rule_routing_module__WEBPACK_IMPORTED_MODULE_0__.RuleRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_rule_rule_module_ts-es2015.js.map