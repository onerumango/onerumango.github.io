"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_rule-translation_rule-translation_module_ts"],{

/***/ 62393:
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/rule-translation/rule-translation-details/rule-translation-details.component.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleTranslationDetailsComponent": function() { return /* binding */ RuleTranslationDetailsComponent; },
/* harmony export */   "msgTranslation": function() { return /* binding */ msgTranslation; },
/* harmony export */   "translationDeatils": function() { return /* binding */ translationDeatils; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/fmosNewRolePermissions */ 35383);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/rule.service */ 50511);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/add-system.service */ 91973);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/guards/can-deactivate.guard */ 50215);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);















const _c0 = ["fileWrapper"];
function RuleTranslationDetailsComponent_form_4_ng_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "ng-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const extsys_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", extsys_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", extsys_r19, " ");
} }
function RuleTranslationDetailsComponent_form_4_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const opt_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", opt_r20.headerValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", opt_r20.headerValue, " ");
} }
function RuleTranslationDetailsComponent_form_4_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const serv_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", serv_r21.headerValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", serv_r21.headerValue, " ");
} }
function RuleTranslationDetailsComponent_form_4_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function RuleTranslationDetailsComponent_form_4_div_37_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r23.chooseFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "div", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("change", function RuleTranslationDetailsComponent_form_4_div_37_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r25.selectFileFORHTTPXMLIncoming($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disabled", !ctx_r5.editValue);
} }
function RuleTranslationDetailsComponent_form_4_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function RuleTranslationDetailsComponent_form_4_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r26.onFetch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "Fetch");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disabled", !ctx_r6.editValue);
} }
function RuleTranslationDetailsComponent_form_4_ng_container_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "Field No");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
} }
function RuleTranslationDetailsComponent_form_4_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "Tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
} }
function RuleTranslationDetailsComponent_form_4_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "Column Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
} }
function RuleTranslationDetailsComponent_form_4_ng_container_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "Data type");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
} }
function RuleTranslationDetailsComponent_form_4_ng_container_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "Data type");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
} }
function RuleTranslationDetailsComponent_form_4_tr_63_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](1, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("readonly", !ctx_r30.editValue);
} }
function RuleTranslationDetailsComponent_form_4_tr_63_ng_container_4_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const mkey_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", mkey_r39.messageKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate2"](" ", mkey_r39.messageKey, "<", mkey_r39.messageBasis, " ");
} }
function RuleTranslationDetailsComponent_form_4_tr_63_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "--Please Select---");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](4, RuleTranslationDetailsComponent_form_4_tr_63_ng_container_4_option_4_Template, 2, 3, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
} if (rf & 2) {
    const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]().index;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????propertyInterpolate1"]("id", "fieldNo_", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("selected", ctx_r31.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx_r31.messageBasisData);
} }
function RuleTranslationDetailsComponent_form_4_tr_63_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](1, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("readonly", !ctx_r32.editValue);
} }
function RuleTranslationDetailsComponent_form_4_tr_63_ng_container_6_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const data_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", data_r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", data_r42, " ");
} }
function RuleTranslationDetailsComponent_form_4_tr_63_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](2, RuleTranslationDetailsComponent_form_4_tr_63_ng_container_6_option_2_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
} if (rf & 2) {
    const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]().index;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????propertyInterpolate1"]("id", "fieldNo_", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disabled", !ctx_r33.editValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx_r33.xmlRespData);
} }
function RuleTranslationDetailsComponent_form_4_tr_63_ng_container_7_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const data_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", data_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", data_r45, " ");
} }
function RuleTranslationDetailsComponent_form_4_tr_63_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](2, RuleTranslationDetailsComponent_form_4_tr_63_ng_container_7_option_2_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
} if (rf & 2) {
    const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]().index;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????propertyInterpolate1"]("id", "db_", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disabled", !ctx_r34.editValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx_r34.columnNameDD);
} }
function RuleTranslationDetailsComponent_form_4_tr_63_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](5, " Numeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](7, " Alpha Numeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](9, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", "numeric");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", "alphaNumeric");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", "date");
} }
function RuleTranslationDetailsComponent_form_4_tr_63_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](1, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("readonly", !ctx_r36.editValue);
} }
function RuleTranslationDetailsComponent_form_4_tr_63_a_26_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function RuleTranslationDetailsComponent_form_4_tr_63_a_26_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r49); const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]().index; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r47.removeTranslation(i_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](1, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", !ctx_r37.editValue ? "readonlyTrue" : "deleteIcon2;readonlyFalse");
} }
function RuleTranslationDetailsComponent_form_4_tr_63_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](1, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](3, RuleTranslationDetailsComponent_form_4_tr_63_ng_container_3_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](4, RuleTranslationDetailsComponent_form_4_tr_63_ng_container_4_Template, 5, 3, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](5, RuleTranslationDetailsComponent_form_4_tr_63_ng_container_5_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](6, RuleTranslationDetailsComponent_form_4_tr_63_ng_container_6_Template, 3, 3, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](7, RuleTranslationDetailsComponent_form_4_tr_63_ng_container_7_Template, 3, 3, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](9, RuleTranslationDetailsComponent_form_4_tr_63_ng_container_9_Template, 10, 3, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](10, RuleTranslationDetailsComponent_form_4_tr_63_ng_container_10_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](12, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("change", function RuleTranslationDetailsComponent_form_4_tr_63_Template_select_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r50.onSelectionOFMessageType($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](15, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](16, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](18, "No Encryption");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](19, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](20, " BASE 64 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](21, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](22, " SHA 256 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](23, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](24, " SHA 512 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](25, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](26, RuleTranslationDetailsComponent_form_4_tr_63_a_26_Template, 2, 1, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const i_r29 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formGroup", item_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r12.showFetch == "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r12.showFetch == "Https/Http" && ctx_r12.showFormat === "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r12.showFetch == "Https/Http" && ctx_r12.showFormat !== "JSON" && !ctx_r12.afterupload);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r12.showFetch == "Https/Http" && ctx_r12.showFormat !== "JSON" && ctx_r12.afterupload);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r12.showFetch == "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r12.showFetch == "Https/Http");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r12.showFetch == "TCP/IP" || ctx_r12.showFetch == "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????propertyInterpolate1"]("id", "responseIndicator_", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("readonly", !ctx_r12.editValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????propertyInterpolate1"]("id", "encryption_", i_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", "No Encryption");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", "BASE64");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", "SHA256");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", "SHA512");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r12.submit);
} }
function RuleTranslationDetailsComponent_form_4_button_66_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function RuleTranslationDetailsComponent_form_4_button_66_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r52.addTransaltionGroup(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](2, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} }
function RuleTranslationDetailsComponent_form_4_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function RuleTranslationDetailsComponent_form_4_div_68_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r54.editValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("hidden", ctx_r14.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r14.roleCodes.edit.labelDescription);
} }
function RuleTranslationDetailsComponent_form_4_div_72_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function RuleTranslationDetailsComponent_form_4_div_72_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r56.authorizeRuleTranslation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("hidden", ctx_r15.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r15.roleCodes.auth.labelDescription);
} }
function RuleTranslationDetailsComponent_form_4_div_73_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function RuleTranslationDetailsComponent_form_4_div_73_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r58.closeRuleTranslation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("hidden", ctx_r16.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r16.roleCodes.close.labelDescription);
} }
function RuleTranslationDetailsComponent_form_4_div_74_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function RuleTranslationDetailsComponent_form_4_div_74_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r60.openRuleTranslation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("hidden", ctx_r17.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r17.roleCodes.reopen.labelDescription);
} }
function RuleTranslationDetailsComponent_form_4_div_75_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function RuleTranslationDetailsComponent_form_4_div_75_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r62.deleteRuleTranslation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("hidden", ctx_r18.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r18.roleCodes.delete.labelDescription);
} }
const _c1 = function () { return ["/rule-translation/summary"]; };
function RuleTranslationDetailsComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "fieldset", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](6, "Source System");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](8, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](9, "ng-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("change", function RuleTranslationDetailsComponent_form_4_Template_ng_select_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](); return ctx_r64.onSlectionExternalSystem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](11, "Please select System");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](12, RuleTranslationDetailsComponent_form_4_ng_option_12_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](15, "Message Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("change", function RuleTranslationDetailsComponent_form_4_Template_select_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r65); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](); return ctx_r66.onSelectionOFMessageType(ctx_r66.ruleTransForm.get("messageType").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](18, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](19, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](20, "Incoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](21, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](22, "OutGoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](24, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](25, "Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](26, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](27, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](28, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](29, RuleTranslationDetailsComponent_form_4_option_29_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](30, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](31, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](32, "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](33, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](34, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](35, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](36, RuleTranslationDetailsComponent_form_4_option_36_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](37, RuleTranslationDetailsComponent_form_4_div_37_Template, 6, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](39, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](40, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](41, RuleTranslationDetailsComponent_form_4_button_41_Template, 2, 1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](42, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](43, "fieldset", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](44, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](45, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](46, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](47, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](48, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](49, RuleTranslationDetailsComponent_form_4_ng_container_49_Template, 2, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](50, RuleTranslationDetailsComponent_form_4_ng_container_50_Template, 2, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](51, RuleTranslationDetailsComponent_form_4_ng_container_51_Template, 2, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](52, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](53, RuleTranslationDetailsComponent_form_4_ng_container_53_Template, 2, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](54, RuleTranslationDetailsComponent_form_4_ng_container_54_Template, 2, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](55, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](56, "Default value");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](57, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](58, "Encryption");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](59, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](60, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](61, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](62, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](63, RuleTranslationDetailsComponent_form_4_tr_63_Template, 27, 16, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](64, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](66, RuleTranslationDetailsComponent_form_4_button_66_Template, 3, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](67, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](68, RuleTranslationDetailsComponent_form_4_div_68_Template, 3, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](69, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](70, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function RuleTranslationDetailsComponent_form_4_Template_button_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r65); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](); return ctx_r67.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](71, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](72, RuleTranslationDetailsComponent_form_4_div_72_Template, 3, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](73, RuleTranslationDetailsComponent_form_4_div_73_Template, 3, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](74, RuleTranslationDetailsComponent_form_4_div_74_Template, 3, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](75, RuleTranslationDetailsComponent_form_4_div_75_Template, 3, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](76, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](77, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](78, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formGroup", ctx_r0.ruleTransForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disabled", !ctx_r0.editValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("readonly", !ctx_r0.editValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx_r0.externalSystem);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx_r0.translationDataOperation);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx_r0.translationDataService);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r0.showFetch == "Https/Http" && ctx_r0.showFormat !== "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r0.showFetch == "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disabled", !ctx_r0.editValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r0.showFetch == "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r0.showFetch == "Https/Http" && !ctx_r0.afterupload || ctx_r0.showFetch == "Https/Http" && ctx_r0.afterupload);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r0.showFetch == "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r0.showFetch == "Https/Http" || ctx_r0.showFetch == "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r0.showFetch == "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx_r0.msgTransDetails.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r0.submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !(ctx_r0.ruleTRespData.recordStatus == "C" || ctx_r0.ruleTRespData.recordStatus == "CLOSED") && ctx_r0.roleCodes.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("hidden", !ctx_r0.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disabled", !ctx_r0.ruleTransForm.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (ctx_r0.ruleTRespData.approvedStatus == "U" || ctx_r0.ruleTRespData.approvedStatus == "N" || ctx_r0.ruleTRespData.approvedStatus == "UNAUTHORIZED") && ctx_r0.roleCodes.auth);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (ctx_r0.ruleTRespData.recordStatus == "O" || ctx_r0.ruleTRespData.recordStatus == "OPEN") && (ctx_r0.ruleTRespData.approvedEver != "NO" && ctx_r0.ruleTRespData.approvedEver != "N") && ctx_r0.roleCodes.close);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (ctx_r0.ruleTRespData.recordStatus == "C" || ctx_r0.ruleTRespData.recordStatus == "CLOSED") && ctx_r0.roleCodes.reopen);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (ctx_r0.ruleTRespData.approvedEver == "NO" || ctx_r0.ruleTRespData.approvedEver == "N") && !ctx_r0.showdelete && ctx_r0.roleCodes.delete);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](24, _c1));
} }
function RuleTranslationDetailsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](7, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](11, "Maker");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](15, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](18, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](19, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](20, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](21, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](22, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](23, "Maker Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](27, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](28, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](29, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](30, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](31, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](32, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](33, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](34, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](35, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](36, "Record Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](39, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](40, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](41, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](42, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](43, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](44, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](45, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](46, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](47, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](48, "Checker");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](51, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](52, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](53, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](54, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](55, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](56, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](57, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](58, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](59, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](60, "Checker Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](63, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](64, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](65, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](66, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](67, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](68, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](69, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](70, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](71, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](72, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](73, "First Time Auth");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](76, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](77, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](78, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](79, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](80, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](81, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](82, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](83, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](84, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](85, "Auth Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](86, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](88, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](89, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](90, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](91, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](92, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](93, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](94, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](95, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](96, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](97, "Modification Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](98, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r1.ruleTRespData.creatorId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind2"](26, 8, ctx_r1.ruleTRespData.createdTime, "MM/dd/yyyy, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r1.ruleTRespData.recordStatus == "O" ? "OPEN" : ctx_r1.ruleTRespData.recordStatus == "C" ? "CLOSED" : ctx_r1.ruleTRespData.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r1.ruleTRespData.approverId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind2"](63, 11, ctx_r1.ruleTRespData.approvedTime, "MM/dd/yyyy, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r1.ruleTRespData.approvedEver == "N" ? "NO" : ctx_r1.ruleTRespData.approvedEver == "Y" ? "YES" : ctx_r1.ruleTRespData.approvedEver);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r1.ruleTRespData.approvedStatus == "N" || ctx_r1.ruleTRespData.approvedStatus == "U" ? "UNAUTHORIZED" : ctx_r1.ruleTRespData.approvedStatus == "Y" || ctx_r1.ruleTRespData.approvedStatus == "A" ? "AUTHORIZED" : ctx_r1.ruleTRespData.approvedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r1.ruleTRespData.versionNo);
} }
class RuleTranslationDetailsComponent {
    constructor(rules, roleService, addSystem, router, cdr, _route, formBuilder, elementRef, canDeactivateGuard, toastService) {
        this.rules = rules;
        this.roleService = roleService;
        this.addSystem = addSystem;
        this.router = router;
        this.cdr = cdr;
        this._route = _route;
        this.formBuilder = formBuilder;
        this.elementRef = elementRef;
        this.canDeactivateGuard = canDeactivateGuard;
        this.toastService = toastService;
        this.submit = true;
        this.msgTranslation = new msgTranslation();
        this.translationDeatils = [];
        this.translationDTO = new translationDTO();
        this.showAuditLog = true;
        this.displaySubmit = false;
        this.authorizeDone = false;
        this.hideSubmit = false;
        this.formTouched = true;
        this.showDialog = false;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.isSelected = true;
        this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
        this.disableFields = false;
        this.columnNameDD = [];
    }
    ngOnInit() {
        this.currentUser = localStorage.getItem('userFromLogin');
        this.ruleTransForm = this.formBuilder.group({
            transId: this.transId,
            systemCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            msgTransDetails: this.formBuilder.array([])
        });
        this.gettingExternalsystem();
        this.fetchingHeadertag();
        this.getById(this._route.snapshot.params['id']);
        this.roleService.fetchScreenPermissions('Rule translation');
        this.roleService.screenLabelList.subscribe(message => this.roleCodes = message);
        setTimeout(() => {
            console.log(this.roleCodes);
        }, 100);
        this.ruleTransForm.disable();
        this.msgTransDetails.disable();
        console.log(this.msgTransDetails);
    }
    getById(transId) {
        this.rules.ruleTranslationBasedonId(transId)
            .subscribe(resp => {
            console.log(resp);
            this.translationDeatils = resp;
            this.editRuleTransResp = resp;
            console.log("editRuleTransResp??", this.editRuleTransResp);
            this.ruleTRespData = this.editRuleTransResp;
            console.log(this.ruleTRespData);
            this.transId = this.ruleTRespData.transId;
            console.log(this.transId);
            // commenting beacuse below array data is not coming
            this.msgTranslation.systemCode = this.editRuleTransResp["systemCode"];
            this.msgTranslation.messageType = this.editRuleTransResp["messageType"];
            this.msgTranslation.operationName = this.editRuleTransResp["operationName"];
            this.msgTranslation.serviceName = this.editRuleTransResp["serviceName"];
            this.ruleTransForm.patchValue(this.editRuleTransResp);
            for (let index = 0; index < this.editRuleTransResp.msgTransDetails.length; index++) {
                console.log(this.editRuleTransResp.msgTransDetails);
                this.addTransaltionGroup({});
                const item = this.editRuleTransResp.msgTransDetails[index];
                this.msgTransDetails.at(index).patchValue(Object.assign(Object.assign({}, item), { formattedMessageBasis: `${item.messageKey} ${item.messagebasis}` }));
            }
            this.cdr.markForCheck();
            this.onSelectionOFMessageType(this.msgTranslation.messageType);
            this.onSlectionExternalSystem(this.msgTranslation.systemCode);
            this.gettingoperationAndService(this.msgTranslation.systemCode, this.msgTranslation.messageType, this.currentUser);
            this.translationDeatils = this.editRuleTransResp['msgTransDetails'];
            console.log(this.translationDeatils);
            if (this.ruleTRespData.recordStatus == "C") {
                console.log(this.ruleTRespData.recordStatus);
                this.reopenBtn = false;
                this.authBtnHide = true;
            }
            if (this.ruleTRespData.approvedStatus == "U") {
                console.log(this.ruleTRespData.approvedStatus);
                this.authBtnHide = false;
                this.authBtn = false;
            }
        });
    }
    gettingExternalsystem() {
        this.rules.gettingExternalsystem().subscribe(extSysResp => {
            console.log(extSysResp);
            if (extSysResp) {
                this.externalSystem = extSysResp;
            }
        }, (err) => {
            console.log("err", err);
        });
    }
    onSlectionExternalSystem(event) {
        console.log(event);
        this.sourcesystem = this.msgTranslation.messageType;
    }
    canExit() {
        let isExit = false;
        if (this.ruleTransForm.touched && this.formTouched == true) {
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
    onSelectionOFMessageType(event) {
        console.log("Event", event);
        this.msgType = event;
        if (this.sourcesystem && this.msgType) {
            this.gettingoperationAndService(this.msgTranslation.systemCode, this.msgType, this.currentUser);
        }
        else {
            console.log("enter both msg and ext");
        }
    }
    gettingoperationAndService(source, msgType, logginuser) {
        this.rules.gettingoperationAndService(source, msgType, logginuser).subscribe(translationResp => {
            console.log(translationResp);
            this.messageBasisData = translationResp.MdmtSystemService;
            this.mdmtSystemChannel = translationResp.MdmtSystemChannel;
            console.log("messageBasisData", this.messageBasisData);
            let keys = Object.keys(translationResp);
            console.log(keys);
            let x = keys[2];
            let y = keys[3];
            if (x == 'I' && Object.keys(translationResp).length == 3) {
                console.log("yes", x);
                if (translationResp.I.SERVICE.length !== 0) {
                    this.msgTranslation.serviceName = translationResp.I.SERVICE[0].headerValue;
                    this.ruleTransForm.get('serviceName').patchValue(translationResp.I.SERVICE[0].headerValue);
                }
                if (translationResp.I.OPERATION.length !== 0) {
                    this.msgTranslation.operationName = translationResp.I.OPERATION[0].headerValue;
                    this.ruleTransForm.get('operationName').patchValue(translationResp.I.OPERATION[0].headerValue);
                    this.translationDataOperation = translationResp.I.OPERATION;
                }
                this.translationDataService = translationResp.I.SERVICE;
            }
            else if (x == 'O' && Object.keys(translationResp).length == 3) {
                console.log("else if", x);
                if (translationResp.O.SERVICE.length !== 0) {
                    this.msgTranslation.serviceName = translationResp.O.SERVICE[0].headerValue;
                    this.ruleTransForm.get('serviceName').patchValue(translationResp.O.SERVICE[0].headerValue);
                }
                if (translationResp.O.OPERATION.length !== 0) {
                    this.msgTranslation.operationName = translationResp.O.OPERATION[0].headerValue;
                    this.ruleTransForm.get('operationName').patchValue(translationResp.O.OPERATION[0].headerValue);
                    this.translationDataOperation = translationResp.O.OPERATION;
                }
                this.translationDataService = translationResp.O.SERVICE;
            }
            else if (x == 'I' && this.msgTranslation.messageType == 'I' && Object.keys(translationResp).length == 4) {
                if (translationResp.I.SERVICE.length !== 0) {
                    this.msgTranslation.serviceName = translationResp.I.SERVICE[0].headerValue;
                    this.ruleTransForm.get('serviceName').patchValue(translationResp.I.SERVICE[0].headerValue);
                }
                if (translationResp.I.OPERATION.length !== 0) {
                    this.msgTranslation.operationName = translationResp.I.OPERATION[0].headerValue;
                    this.ruleTransForm.get('operationName').patchValue(translationResp.I.OPERATION[0].headerValue);
                    this.translationDataOperation = translationResp.I.OPERATION;
                }
                this.translationDataService = translationResp.I.SERVICE;
            }
            else if (y == 'O' && this.msgTranslation.messageType == 'O' && Object.keys(translationResp).length == 4) {
                if (translationResp.O.SERVICE.length !== 0) {
                    this.msgTranslation.serviceName = translationResp.O.SERVICE[0].headerValue;
                    this.ruleTransForm.get('serviceName').patchValue(translationResp.O.SERVICE[0].headerValue);
                }
                if (translationResp.O.OPERATION.length !== 0) {
                    this.msgTranslation.operationName = translationResp.O.OPERATION[0].headerValue;
                    this.ruleTransForm.get('operationName').patchValue(translationResp.O.OPERATION[0].headerValue);
                    this.translationDataOperation = translationResp.O.OPERATION;
                }
                this.translationDataService = translationResp.O.SERVICE;
            }
            this.showFetch = translationResp.MdmtSystemChannel[0].messageChannel;
            this.showFormat = translationResp.MdmtSystemChannel[0].messageFormat;
            if (this.showFetch == 'Https/Http') {
                // this.fetchingXMl();
            }
            else if (this.showFetch == 'TCP/IP') {
                this.fetchingIso();
            }
            else if (this.showFetch == 'DB Connection') {
                this.addSystem.coulmnNameBasedonTableName(translationResp.MdmtSystemChannel[0].dbConnectString, translationResp.MdmtSystemChannel[0].dbServiceName, translationResp.MdmtSystemChannel[0].dbUsername, translationResp.MdmtSystemChannel[0].dbPassword, translationResp.MdmtSystemChannel[0].sysService[0].messageKey.split(",", 1)).subscribe((resp) => {
                    resp.forEach(element => {
                        this.columnNameDD.push(element[1]);
                    });
                });
            }
        }, (err => {
            console.log(err);
        }));
    }
    //  temproary
    onSubmit() {
        console.log("Update?", this.ruleTransForm.value);
        const updatedFormData = Object.assign(Object.assign({}, this.ruleTransForm.value), { msgTransDetails: this.ruleTransForm.value.msgTransDetails.map((data) => {
                const { formattedMessageBasis } = data, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__rest)(data, ["formattedMessageBasis"]);
                return rest;
            }) });
        this.translationDTO.msgTranslation = this.msgTranslation;
        console.log("updatedFormData ", updatedFormData);
        this.translationDTO.msgTranslationDet = this.ruleRecord;
        console.log(this.translationDTO);
        this.rules.editruleTranslation("update", this.currentUser, updatedFormData).subscribe(ruleTranslationResp => {
            console.log(ruleTranslationResp);
            this.ruleTRespData = ruleTranslationResp;
            if (ruleTranslationResp) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: 'Record is Updated',
                    icon: 'success' });
                this.submit = false;
                this.showAuditLog = true;
                this.editValue = false;
                this.hideSubmit = false;
                this.formTouched = !this.ruleTransForm.touched;
            }
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Server Error.",
                icon: 'error' });
        });
    }
    onFetch() {
        this.showRecords = true;
    }
    onReset() {
        this.msgTranslation = new msgTranslation();
        this.ruleRecord = [];
    }
    getTranslationItem(item) {
        return this.formBuilder.group({
            messagebasis: [item.messagebasis ? item.messagebasis : ""],
            formattedMessageBasis: [item.formattedMessageBasis ? item.formattedMessageBasis : ""],
            headerTag: [item.headerTag ? item.headerTag : ""],
            defaultValue: [item.defaultValue ? item.defaultValue : ""],
            systemChannelId: [item.systemChannelId ? item.systemChannelId : ""],
            encryption: [item.encryption ? item.encryption : "No Encryption"],
            id: [item.id ? item.id : ''],
            dataType: [item.dataType ? item.dataType : ''],
            messageKey: [item.messageKey ? item.messageKey : ''],
        });
    }
    get msgTransDetails() {
        return this.ruleTransForm.get('msgTransDetails');
    }
    addTransaltionGroup(item) {
        this.msgTransDetails.push(this.getTranslationItem(item));
    }
    removeTranslation(index) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'are you sure, want to remove the record?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                this.msgTransDetails.removeAt(index);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Removed!', '', 'success');
            }
        });
    }
    selectFileFORHTTPXMLIncoming(event) {
        console.log("here http and xML", event);
        this.selectedFiles = event.target.files;
        console.log("File selected", this.selectedFiles);
        console.log(this.selectedFiles[0].name);
        this.fileName = this.selectedFiles[0].name;
        this.fileUploadWrapper.nativeElement.setAttribute('data-text', this.fileName);
        this.currentFileUpload = this.selectedFiles.item(0);
        console.log(event.target.files);
        this.addSystem.gettingBodyOfXml(this.currentFileUpload).subscribe(xmlHttpResp => {
            console.log(xmlHttpResp);
            if (xmlHttpResp) {
                this.xmlRespData = xmlHttpResp;
                this.afterupload = true;
                // Swal.fire({ text: "File Uploaded Successfully" });
            }
        }, (err) => {
            // Swal.fire({ text: "Invalid Xml file provided" }); 
        });
    }
    fetchingHeadertag() {
        this.addSystem.fetchingHeaderTag().subscribe(resp => {
            console.log("res", resp);
            this.headerTagData = resp;
        });
    }
    fetchingIso() {
        this.addSystem.fetchingIsoForTcp().subscribe(isoResp => {
            console.log(isoResp);
            this.matlabel1 = "Filed No";
            // this.translationDeatils=isoResp;
            this.messageBasisIso = isoResp.map((data) => {
                return data.fieldName;
            });
            // for dropdown 2
            this.messageKeyIso = isoResp.map((data) => {
                return data.fieldNo.toString();
            });
        });
    }
    fetchingXMl() {
        this.addSystem.gettinXMLmsgIncoming().subscribe(xmlResp => {
            console.log(xmlResp);
            this.xmlRespData = xmlResp.map((data) => {
                return data.messageBasis;
            });
        });
    }
    // fetchingColumnName() {
    //   this.addSystem.coulmnNameBasedonTableName(
    //     this.mdmtSystemChannel[0].dbConnectString,
    //     this.mdmtSystemChannel[0].dbServiceName,
    //     this.mdmtSystemChannel[0].dbUsername,
    //     this.mdmtSystemChannel[0].dbPassword,
    //     this.mdmtSystemChannel[0].sysService[0].messageKey.split(",", 1)
    //     ).subscribe((resp) => {
    //       resp.forEach(element => {
    //         this.columnNameDD.push(element[1]);
    //       });
    //       console.log(this.columnNameDD);
    //       this.tableData = this.columnNameDD.map((data) => {
    //         console.log(data);
    //         // return data.messageBasis;
    //       });
    //     });
    // }
    edit() {
        this.editValue = true;
        this.displaySubmit = true;
        this.onlysubmit = true;
        this.showAuditLog = false;
        console.log(this.ruleTRespData);
        if (this.ruleTRespData.approvedStatus == "U") {
            this.editValue = false;
            // Swal.fire("UnAuthorized record can't be edited.");
        }
        if (this.ruleTRespData.recordStatus == "C") {
            this.editValue = false;
            // Swal.fire("Closed record can't be edited.");
        }
    }
    chooseFile() {
        console.log("heyy file");
        document.getElementById('chFile').click();
    }
    authorizeRuleTranslation() {
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
                if (this.currentUser == this.ruleTRespData.creatorId) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Maker cannot authorize!');
                }
                else {
                    let RuleTranslationData = this.ruleTRespData;
                    this.addSystem.editruleTranslation("auth", this.currentUser, RuleTranslationData).subscribe((response) => {
                        console.log(response);
                        if (response.approverId) {
                            this.authorizeDone = true;
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Record is Authorized ');
                            this.ruleTRespData = response;
                        }
                    });
                }
            }
        }));
    }
    editValues() {
        this.hideSubmit = true;
        this.editValue = true;
        this.displaySubmit = true;
        this.onlysubmit = true;
        this.showAuditLog = false;
        console.log(this.ruleTRespData);
        this.ruleTransForm.enable();
        this.msgTransDetails.enable();
    }
    openRuleTranslation() {
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
            if (result.isConfirmed === true) {
                console.log(this.ruleTRespData);
                console.log(this.currentUser);
                let RuleTranslationData = this.ruleTRespData;
                this.addSystem.editruleTranslation("open", this.currentUser, RuleTranslationData).subscribe((response) => {
                    console.log(response);
                    if (response) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Record is Reopened');
                        this.ruleTRespData = response;
                        this.authBtnHide = false;
                        this.editBtn = false;
                        this.authBtn = false;
                    }
                });
            }
        }));
    }
    closeRuleTranslation() {
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
            if (result.isConfirmed === true) {
                let RuleTranslationData = this.ruleTRespData;
                this.addSystem.editruleTranslation("close", this.currentUser, RuleTranslationData).subscribe((response) => {
                    console.log(response);
                    if (response) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            text: "Record is Closed",
                            icon: 'success'
                        });
                        this.ruleTRespData = response;
                        this.editBtn = true;
                        this.authBtn = true;
                        this.deleted = false;
                        this.reopenBtn = false;
                    }
                });
            }
        }));
    }
    deleteRuleTranslation() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
                let RuleTranslationData = this.ruleTRespData;
                console.log(this.ruleTRespData);
                this.addSystem.deleteRuleTranslation(this.currentUser, RuleTranslationData.transId).subscribe((response) => {
                    // console.log(response.Text);
                    // if(response){
                    // }
                }, (err) => {
                    if (err.status == 200) {
                        this.showdelete = true;
                        this.editBtn = true;
                        this.authBtn = true;
                        this.closeBtn = true;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            title: 'Record is Deleted!',
                            confirmButtonText: 'Ok'
                        }).then((result) => {
                            if (result) {
                                this.router.navigateByUrl('/rule-translation/summary');
                            }
                        });
                    }
                    else {
                        // Swal.fire("Failed to delete the reocrd");
                    }
                });
            }
        }));
    }
}
RuleTranslationDetailsComponent.??fac = function RuleTranslationDetailsComponent_Factory(t) { return new (t || RuleTranslationDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__.CanDeactivateGuard), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService)); };
RuleTranslationDetailsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineComponent"]({ type: RuleTranslationDetailsComponent, selectors: [["npr-rule-translation-details"]], viewQuery: function RuleTranslationDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????viewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????loadQuery"]()) && (ctx.fileUploadWrapper = _t.first);
    } }, decls: 7, vars: 2, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["class", "formStyle", 3, "formGroup", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "formStyle", 3, "formGroup"], [3, "disabled"], [1, "dbCardStyle"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-2"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["id", "outlineNgSelect", "id", "sysCode", "formControlName", "systemCode", "aria-label", "Default select example", "required", "", 1, "form-select", 3, "readonly", "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "msgType", "formControlName", "messageType", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", "I"], ["value", "O"], ["id", "operationName", "formControlName", "operationName", "aria-label", "Default select example", 1, "form-select"], ["id", "serviceName", "formControlName", "serviceName", "aria-label", "Default select example", 1, "form-select"], ["class", "col-lg-4", 3, "click", 4, "ngIf"], [1, "col-lg-3"], ["class", "btn minWdSmBtn btnPrimary", 3, "disabled", "click", 4, "ngIf"], [1, "table-responsive"], ["id", "dbTable1", 1, "table", "tableStyle", "responsive", "nowrap", "vAlignMdl"], [4, "ngIf"], ["formArrayName", "msgTransDetails"], [4, "ngFor", "ngForOf"], ["class", "addIcon primarybg", 3, "click", 4, "ngIf"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto", 3, "hidden"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [3, "value"], [1, "col-lg-4", 3, "click"], [1, "fileUpload"], [1, "formS"], ["data-text", "File Upload", 1, "file-upload-wrapper"], ["fileWrapper", ""], ["id", "chFile", "name", "file-upload-field", "type", "file", 1, "file-upload-field", 3, "disabled", "change"], [1, "btn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [3, "formGroup"], ["formControlName", "defaultValue", "type", "text", 1, "form-control", 3, "id", "readonly"], ["formControlName", "encryption", "aria-label", "Default select example", 1, "form-select", 3, "id", "change"], [1, "tblIcon"], [3, "ngClass", "click", 4, "ngIf"], ["name", "formattedMessageBasis", "formControlName", "formattedMessageBasis", 1, "form-control", 3, "readonly"], ["formControlName", "messageKey", "aria-label", "Default select example", "required", "", 1, "form-select", 3, "id"], ["value", "", 3, "selected"], ["name", "messagebasis", "formControlName", "messagebasis", 1, "form-control", 3, "readonly"], ["formControlName", "messagebasis", "aria-label", "Default select example", "required", "", 1, "form-select", 3, "id", "disabled"], ["formControlName", "dataType", "aria-label", "Default select example", 1, "form-select"], ["type", "text", "formControlName", "dataType", 1, "form-control", 3, "readonly"], [3, "ngClass", "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "addIcon", "primarybg", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "hidden", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "hidden", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "hidden", "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], [1, "fa", "fa-edit", "faClass"], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], [1, "fa", "fa-check-square-o", "faClassChecker"], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/authorize.svg", "alt", "...", 1, "modImage"], ["src", "assets/images/modification.svg", "alt", "...", 1, "modImage"]], template: function RuleTranslationDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "Rule Translation");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](4, RuleTranslationDetailsComponent_form_4_Template, 79, 25, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](6, RuleTranslationDetailsComponent_div_6_Template, 100, 14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.ruleTransForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.showAuditLog);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["??NgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], styles: [".readonlyTrue[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n}\n\n.readonlyFalse[_ngcontent-%COMP%] {\n  pointer-events: visible !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUtdHJhbnNsYXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQ0FBQTtBQUNKIiwiZmlsZSI6InJ1bGUtdHJhbnNsYXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWFkb25seVRydWV7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVhZG9ubHlGYWxzZXtcclxuICAgIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
class msgTranslation {
}
// after fetch assign to this object
class translationDeatils {
}
class translationDTO {
}


/***/ }),

/***/ 49833:
/*!***************************************************************************!*\
  !*** ./src/app/views/rule-translation/rule-translation-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleTranslationRoutingModule": function() { return /* binding */ RuleTranslationRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/guards/can-deactivate.guard */ 50215);
/* harmony import */ var _rule_translation_details_rule_translation_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rule-translation-details/rule-translation-details.component */ 62393);
/* harmony import */ var _rule_translation_summary_rule_translation_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rule-translation-summary/rule-translation-summary.component */ 7281);
/* harmony import */ var _rule_translation_rule_translation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rule-translation/rule-translation.component */ 1575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    {
        path: 'create',
        component: _rule_translation_rule_translation_component__WEBPACK_IMPORTED_MODULE_3__.RuleTranslationComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
    }, {
        path: 'edit/:id',
        component: _rule_translation_details_rule_translation_details_component__WEBPACK_IMPORTED_MODULE_1__.RuleTranslationDetailsComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
    }, {
        path: 'summary',
        component: _rule_translation_summary_rule_translation_summary_component__WEBPACK_IMPORTED_MODULE_2__.RuleTranslationSummaryComponent
    }
];
class RuleTranslationRoutingModule {
}
RuleTranslationRoutingModule.??fac = function RuleTranslationRoutingModule_Factory(t) { return new (t || RuleTranslationRoutingModule)(); };
RuleTranslationRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: RuleTranslationRoutingModule });
RuleTranslationRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](RuleTranslationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 7281:
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/rule-translation/rule-translation-summary/rule-translation-summary.component.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleTranslationSummaryComponent": function() { return /* binding */ RuleTranslationSummaryComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/fmosNewRolePermissions */ 35383);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/rule.service */ 50511);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/add-system.service */ 91973);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ 50481);










const _c0 = function () { return ["/rule-translation/create"]; };
const _c1 = function () { return ["active"]; };
function RuleTranslationSummaryComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](3, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](ctx_r0.roleCodes.new.labelDescription);
} }
function RuleTranslationSummaryComponent_tr_29_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function RuleTranslationSummaryComponent_tr_29_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r9); const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r7.close(data_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function RuleTranslationSummaryComponent_tr_29_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function RuleTranslationSummaryComponent_tr_29_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r12); const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r10.open(data_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function RuleTranslationSummaryComponent_tr_29_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function RuleTranslationSummaryComponent_tr_29_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r15); const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r13.delete(data_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function RuleTranslationSummaryComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function RuleTranslationSummaryComponent_tr_29_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r17); const data_r3 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r16.onGetId(data_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](16, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function RuleTranslationSummaryComponent_tr_29_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r17); const data_r3 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r18.auth(data_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](17, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](18, RuleTranslationSummaryComponent_tr_29_button_18_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](19, RuleTranslationSummaryComponent_tr_29_button_19_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](20, RuleTranslationSummaryComponent_tr_29_button_20_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](data_r3.systemCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](data_r3.operationName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](data_r3.serviceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](data_r3.approvedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](data_r3.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind2"](14, 10, data_r3.createdTime, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("disabled", !(data_r3.approvedStatus == "U" || data_r3.approvedStatus == "UNAUTHORIZED" || data_r3.approvedStatus == "Unauthorized"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", (data_r3.recordStatus == "O" || data_r3.recordStatus == "Open" || data_r3.recordStatus == "OPEN") && (data_r3.approvedEver == "Y" || data_r3.approvedEver == "YES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", (data_r3.recordStatus == "CLOSED" || data_r3.recordStatus == "Close" || data_r3.recordStatus == "c" || data_r3.recordStatus == "C") && (data_r3.approvedEver == "YES" || data_r3.approvedEver == "Y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", data_r3.approvedEver == "N" || data_r3.approvedEver == "NO");
} }
function RuleTranslationSummaryComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "Please wait... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
} }
const _c2 = function () { return ["/dashboard"]; };
class RuleTranslationSummaryComponent {
    constructor(ruleService, router, roleService, cdr, addSystem) {
        this.ruleService = ruleService;
        this.router = router;
        this.roleService = roleService;
        this.cdr = cdr;
        this.addSystem = addSystem;
        this.translationList = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.dtOptions = {};
        this.isLoading = false;
        this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
        this.statusArr = ['Authorized', 'Unauthorized', 'Open', 'Close'];
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            columnDefs: [{ type: 'date', 'targets': [5] }],
            order: [[5, 'desc']],
            processing: true,
            lengthMenu: [
                [5, 10, 20, 30, -1],
                [5, 10, 20, 30, "ALL"],
            ],
            // columnDefs: [ { type: 'date', 'targets': [5] } ],
            // order: [[5, 'desc']],
        };
        this.currentUser = localStorage.getItem('userFromLogin');
        this.fetchRuleTranslationSummary();
        this.roleService.fetchScreenPermissions('Rule translation');
        this.roleService.screenLabelList.subscribe(message => this.roleCodes = message);
    }
    fetchRuleTranslationSummary() {
        this.isLoading = true;
        this.ruleService.fetchingruleTranslation()
            .subscribe(resp => {
            console.log(resp);
            for (let data of resp.result) {
                data.approvedStatus = this.statusArr.find((i) => i.startsWith(data.approvedStatus));
                data.recordStatus = this.statusArr.find((i) => i.startsWith(data.recordStatus));
            }
            this.translationList = resp.result;
            this.isLoading = false;
            this.cdr.markForCheck();
            this.dtTrigger.next();
        });
    }
    onGetId(row) {
        console.log(row);
        this.router.navigate(['/rule-translation/edit', row.transId]);
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
    close(data) {
        this.ruleTRespData = data;
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
            if (result.isConfirmed === true) {
                let RuleTranslationData = this.ruleTRespData;
                this.addSystem.editruleTranslation("close", this.currentUser, RuleTranslationData).subscribe((response) => {
                    console.log(response);
                    if (response) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            text: "Record is Closed",
                            icon: 'success'
                        }).then(() => window.location.reload());
                        this.ruleTRespData = response;
                        this.editBtn = true;
                        this.authBtn = true;
                        this.deleted = false;
                        this.reopenBtn = false;
                    }
                });
            }
        }));
    }
    open(data) {
        this.ruleTRespData = data;
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
            if (result.isConfirmed === true) {
                let RuleTranslationData = this.ruleTRespData;
                this.addSystem.editruleTranslation("open", this.currentUser, RuleTranslationData).subscribe((response) => {
                    console.log(response);
                    if (response) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Record is Reopened').then(() => window.location.reload());
                        this.ruleTRespData = response;
                        this.authBtnHide = false;
                        this.editBtn = false;
                        this.authBtn = false;
                    }
                });
            }
        }));
    }
    delete(data) {
        this.ruleTRespData = data;
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
                let RuleTranslationData = this.ruleTRespData;
                console.log(this.ruleTRespData);
                this.addSystem.deleteRuleTranslation(this.currentUser, RuleTranslationData.transId).subscribe((response) => {
                    // console.log(response.Text);
                    // if(response){
                    // }
                }, (err) => {
                    if (err.status == 200) {
                        this.showdelete = true;
                        this.editBtn = true;
                        this.authBtn = true;
                        this.closeBtn = true;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            title: 'Record is Deleted!',
                            confirmButtonText: 'Ok'
                        }).then(() => window.location.reload());
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Failed to delete the reocrd");
                    }
                });
            }
        }));
    }
    auth(data) {
        this.ruleTRespData = data;
        console.log(this.currentUser);
        console.log(this.ruleTRespData.creatorId);
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
                if (this.currentUser == this.ruleTRespData.creatorId) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Maker cannot authorize!');
                }
                else {
                    let RuleTranslationData = this.ruleTRespData;
                    this.addSystem.editruleTranslation("auth", this.currentUser, RuleTranslationData).subscribe((response) => {
                        console.log(response);
                        if (response.approverId) {
                            this.authorizeDone = true;
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Record is Authorized ').then(() => window.location.reload());
                            this.ruleTRespData = response;
                        }
                    });
                }
            }
        }));
    }
}
RuleTranslationSummaryComponent.??fac = function RuleTranslationSummaryComponent_Factory(t) { return new (t || RuleTranslationSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__.AddSystemService)); };
RuleTranslationSummaryComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({ type: RuleTranslationSummaryComponent, selectors: [["npr-rule-translation-summary"]], decls: 31, vars: 7, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "table-responsive"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyleSelect", "tableStyle", "nowrap", "vAlignMdl", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink", "routerLinkActive"], [1, "primaryColor", 2, "cursor", "pointer", 3, "click"], ["title", "Authorize", 1, "btn", 2, "color", "red", 3, "disabled", "click"], ["src", "assets/images/authorize.svg", "alt", "Authorize"], ["class", "btn", "style", "color: red", "title", "Close", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Reopen", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Delete", 3, "click", 4, "ngIf"], ["title", "Close", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/CROSS1.svg", "alt", "..."], ["title", "Reopen", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/open.svg", "alt", "..."], ["title", "Delete", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/delete.svg", "alt", "..."], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]], template: function RuleTranslationSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "Rule Translation");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](6, RuleTranslationSummaryComponent_div_6_Template, 3, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](9, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](15, "System Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](17, "Operation Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](19, "Service Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](21, "Auth Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](23, "Record Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](25, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](27, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](29, RuleTranslationSummaryComponent_tr_29_Template, 21, 13, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](30, RuleTranslationSummaryComponent_ng_container_30_Template, 5, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.roleCodes.new);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx.translationList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: ["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 11px 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUtdHJhbnNsYXRpb24tc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7QUFDSiIsImZpbGUiOiJydWxlLXRyYW5zbGF0aW9uLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCxcclxudGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHBhZGRpbmc6IDExcHggMjBweCAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ 80646:
/*!*******************************************************************!*\
  !*** ./src/app/views/rule-translation/rule-translation.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleTranslationModule": function() { return /* binding */ RuleTranslationModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _rule_translation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rule-translation-routing.module */ 49833);
/* harmony import */ var _rule_translation_rule_translation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rule-translation/rule-translation.component */ 1575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 50481);
/* harmony import */ var _rule_translation_summary_rule_translation_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rule-translation-summary/rule-translation-summary.component */ 7281);
/* harmony import */ var _rule_translation_details_rule_translation_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rule-translation-details/rule-translation-details.component */ 62393);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);









class RuleTranslationModule {
}
RuleTranslationModule.??fac = function RuleTranslationModule_Factory(t) { return new (t || RuleTranslationModule)(); };
RuleTranslationModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: RuleTranslationModule });
RuleTranslationModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _rule_translation_routing_module__WEBPACK_IMPORTED_MODULE_0__.RuleTranslationRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](RuleTranslationModule, { declarations: [_rule_translation_rule_translation_component__WEBPACK_IMPORTED_MODULE_1__.RuleTranslationComponent,
        _rule_translation_summary_rule_translation_summary_component__WEBPACK_IMPORTED_MODULE_3__.RuleTranslationSummaryComponent,
        _rule_translation_details_rule_translation_details_component__WEBPACK_IMPORTED_MODULE_4__.RuleTranslationDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _rule_translation_routing_module__WEBPACK_IMPORTED_MODULE_0__.RuleTranslationRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule] }); })();


/***/ }),

/***/ 1575:
/*!***************************************************************************************!*\
  !*** ./src/app/views/rule-translation/rule-translation/rule-translation.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleTranslationComponent": function() { return /* binding */ RuleTranslationComponent; },
/* harmony export */   "msgTranslation": function() { return /* binding */ msgTranslation; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/fmosNewRolePermissions */ 35383);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/rule.service */ 50511);
/* harmony import */ var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/add-system.service */ 91973);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/guards/can-deactivate.guard */ 50215);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);













const _c0 = ["fileWrapper"];
function RuleTranslationComponent_form_4_ng_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "ng-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const extsys_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", extsys_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", extsys_r11, " ");
} }
function RuleTranslationComponent_form_4_div_26_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const opt_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", opt_r13.headerValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", opt_r13.headerValue, " ");
} }
function RuleTranslationComponent_form_4_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, RuleTranslationComponent_form_4_div_26_option_4_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx_r3.translationDataOperation);
} }
function RuleTranslationComponent_form_4_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function RuleTranslationComponent_form_4_div_31_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const serv_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", serv_r15.headerValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", serv_r15.headerValue, " ");
} }
function RuleTranslationComponent_form_4_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, RuleTranslationComponent_form_4_div_31_option_4_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx_r5.translationDataService);
} }
function RuleTranslationComponent_form_4_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function RuleTranslationComponent_form_4_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function RuleTranslationComponent_form_4_div_33_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2); return ctx_r17.chooseFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "div", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("change", function RuleTranslationComponent_form_4_div_33_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2); return ctx_r19.selectFileFORHTTPXMLIncoming($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function RuleTranslationComponent_form_4_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function RuleTranslationComponent_form_4_div_36_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2); return ctx_r20.onFetch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, "Fetch");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
const _c1 = function () { return ["/rule-translation/summary"]; };
function RuleTranslationComponent_form_4_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](1, _c1));
} }
function RuleTranslationComponent_form_4_div_38_tr_5_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " Field No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function RuleTranslationComponent_form_4_div_38_tr_5_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " Tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function RuleTranslationComponent_form_4_div_38_tr_5_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " Column Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function RuleTranslationComponent_form_4_div_38_tr_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " Data type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
} }
function RuleTranslationComponent_form_4_div_38_tr_5_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](0, " Data type ");
} }
function RuleTranslationComponent_form_4_div_38_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](1, RuleTranslationComponent_form_4_div_38_tr_5_th_1_Template, 2, 0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](2, RuleTranslationComponent_form_4_div_38_tr_5_th_2_Template, 2, 0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](3, RuleTranslationComponent_form_4_div_38_tr_5_th_3_Template, 2, 0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](5, RuleTranslationComponent_form_4_div_38_tr_5_ng_container_5_Template, 2, 0, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](6, RuleTranslationComponent_form_4_div_38_tr_5_ng_template_6_Template, 1, 0, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_6__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](9, "Default value");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](11, "Encryption");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](13, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????reference"](7);
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r22.showFetch == "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r22.showFetch == "Https/Http");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r22.showFetch == "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r22.showFetch == "TCP/IP")("ngIfElse", _r35);
} }
function RuleTranslationComponent_form_4_div_38_tr_8_ng_container_3_ng_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "ng-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const iso2_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", iso2_r47.messageKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate2"](" ", iso2_r47.messageKey, " ", iso2_r47.messagebasis, " ");
} }
function RuleTranslationComponent_form_4_div_38_tr_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "ng-select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("change", function RuleTranslationComponent_form_4_div_38_tr_8_ng_container_3_Template_ng_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r50); const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().index; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r48.onselectOfFieldNo($event, i_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "Please select Field No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, RuleTranslationComponent_form_4_div_38_tr_8_ng_container_3_ng_option_4_Template, 2, 3, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
} if (rf & 2) {
    const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().index;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????propertyInterpolate1"]("id", "fieldNo_", i_r38, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx_r39.fieldNoList);
} }
function RuleTranslationComponent_form_4_div_38_tr_8_ng_container_4_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const data_r53 = ctx.$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("hidden", ctx_r52.shouldDisableTagOption(data_r53))("value", data_r53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", data_r53, "");
} }
function RuleTranslationComponent_form_4_div_38_tr_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("change", function RuleTranslationComponent_form_4_div_38_tr_8_ng_container_4_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r56); const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r54.onselectingTag($event, i_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, RuleTranslationComponent_form_4_div_38_tr_8_ng_container_4_option_4_Template, 2, 3, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
} if (rf & 2) {
    const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().index;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????propertyInterpolate1"]("id", "tag_", i_r38, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx_r40.messageBasisIso);
} }
function RuleTranslationComponent_form_4_div_38_tr_8_ng_container_5_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const mkey_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", mkey_r59.messageKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate2"](" ", mkey_r59.messageKey, "", mkey_r59.messageBasis, " ");
} }
function RuleTranslationComponent_form_4_div_38_tr_8_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "--Please Select---");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, RuleTranslationComponent_form_4_div_38_tr_8_ng_container_5_option_4_Template, 2, 3, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
} if (rf & 2) {
    const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().index;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????propertyInterpolate1"]("id", "fieldNo_", i_r38, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("selected", ctx_r41.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx_r41.messageBasisData);
} }
function RuleTranslationComponent_form_4_div_38_tr_8_ng_container_6_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const data_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", data_r62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", data_r62, "");
} }
function RuleTranslationComponent_form_4_div_38_tr_8_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("change", function RuleTranslationComponent_form_4_div_38_tr_8_ng_container_6_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r65); const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().index; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r63.onselectingColumnName($event, i_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, RuleTranslationComponent_form_4_div_38_tr_8_ng_container_6_option_4_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
} if (rf & 2) {
    const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().index;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????propertyInterpolate1"]("id", "db_", i_r38, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx_r42.columnNameDD);
} }
function RuleTranslationComponent_form_4_div_38_tr_8_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](1, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
} if (rf & 2) {
    const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????propertyInterpolate1"]("id", "dataType_", i_r38, "");
} }
function RuleTranslationComponent_form_4_div_38_tr_8_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](5, " Numeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](7, " Alpha Numeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](8, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](9, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
} if (rf & 2) {
    const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????propertyInterpolate1"]("id", "dataType_", i_r38, "");
} }
function RuleTranslationComponent_form_4_div_38_tr_8_a_25_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function RuleTranslationComponent_form_4_div_38_tr_8_a_25_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r71); const i_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().index; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r69.removeTranslation(i_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function RuleTranslationComponent_form_4_div_38_tr_8_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](1, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](3, RuleTranslationComponent_form_4_div_38_tr_8_ng_container_3_Template, 5, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, RuleTranslationComponent_form_4_div_38_tr_8_ng_container_4_Template, 5, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](5, RuleTranslationComponent_form_4_div_38_tr_8_ng_container_5_Template, 5, 3, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](6, RuleTranslationComponent_form_4_div_38_tr_8_ng_container_6_Template, 5, 2, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](8, RuleTranslationComponent_form_4_div_38_tr_8_ng_container_8_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](9, RuleTranslationComponent_form_4_div_38_tr_8_ng_container_9_Template, 10, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](11, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](13, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("change", function RuleTranslationComponent_form_4_div_38_tr_8_Template_select_change_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r72.onSelectionOFMessageType($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](14, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](15, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](16, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](17, "No Encryption");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](18, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](19, " BASE 64 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](20, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](21, " SHA 256 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](22, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](23, " SHA 512 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](24, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](25, RuleTranslationComponent_form_4_div_38_tr_8_a_25_Template, 2, 0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const i_r38 = ctx.index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("formGroup", item_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r23.showFetch == "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r23.showFetch == "Https/Http" && ctx_r23.showFormat !== "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r23.showFetch == "Https/Http" && ctx_r23.showFormat === "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r23.showFetch == "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r23.showFetch == "TCP/IP" || ctx_r23.showFetch === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r23.showFetch == "Https/Http");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????propertyInterpolate1"]("id", "responseIndicator_", i_r38, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????propertyInterpolate1"]("id", "encryption_", i_r38, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r23.submitFlag);
} }
function RuleTranslationComponent_form_4_div_38_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function RuleTranslationComponent_form_4_div_38_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r74.addTransaltionGroup(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](2, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function RuleTranslationComponent_form_4_div_38_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function RuleTranslationComponent_form_4_div_38_div_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r76.editValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("hidden", ctx_r25.hideEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](ctx_r25.roleCodes.edit.labelDescription);
} }
function RuleTranslationComponent_form_4_div_38_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function RuleTranslationComponent_form_4_div_38_div_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r78.auditChangeRuleTranslation("auth"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("hidden", !ctx_r26.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](ctx_r26.roleCodes.auth.labelDescription);
} }
function RuleTranslationComponent_form_4_div_38_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function RuleTranslationComponent_form_4_div_38_div_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r80.auditChangeRuleTranslation("close"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("hidden", !ctx_r27.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](ctx_r27.roleCodes.close.labelDescription);
} }
function RuleTranslationComponent_form_4_div_38_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function RuleTranslationComponent_form_4_div_38_div_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r82.auditChangeRuleTranslation("open"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("hidden", !ctx_r28.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](ctx_r28.roleCodes.reopen.labelDescription);
} }
function RuleTranslationComponent_form_4_div_38_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function RuleTranslationComponent_form_4_div_38_div_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r84.deleteRuleTranslation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("hidden", !ctx_r29.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](ctx_r29.roleCodes.delete.labelDescription);
} }
function RuleTranslationComponent_form_4_div_38_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](1, _c1));
} }
function RuleTranslationComponent_form_4_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "fieldset", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](5, RuleTranslationComponent_form_4_div_38_tr_5_Template, 14, 5, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](7, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](8, RuleTranslationComponent_form_4_div_38_tr_8_Template, 26, 10, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](11, RuleTranslationComponent_form_4_div_38_button_11_Template, 3, 0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](12, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](13, RuleTranslationComponent_form_4_div_38_div_13_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](15, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function RuleTranslationComponent_form_4_div_38_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2); return ctx_r86.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](16, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](17, RuleTranslationComponent_form_4_div_38_div_17_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](18, RuleTranslationComponent_form_4_div_38_div_18_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](19, RuleTranslationComponent_form_4_div_38_div_19_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](20, RuleTranslationComponent_form_4_div_38_div_20_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](21, RuleTranslationComponent_form_4_div_38_div_21_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("disabled", !ctx_r10.submitFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r10.msgTransDetails.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx_r10.msgTransDetails.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r10.submitFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", !((ctx_r10.translationResp == null ? null : ctx_r10.translationResp.recordStatus) == "C" || (ctx_r10.translationResp == null ? null : ctx_r10.translationResp.recordStatus) == "CLOSED") && ctx_r10.roleCodes.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("hidden", ctx_r10.hideSubmit)("disabled", !ctx_r10.submitFlag || ctx_r10.ruleTransForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ((ctx_r10.translationResp == null ? null : ctx_r10.translationResp.approvedStatus) == "U" || (ctx_r10.translationResp == null ? null : ctx_r10.translationResp.approvedStatus) == "N" || (ctx_r10.translationResp == null ? null : ctx_r10.translationResp.approvedStatus) == "UNAUTHORIZED") && ctx_r10.roleCodes.auth);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ((ctx_r10.translationResp == null ? null : ctx_r10.translationResp.recordStatus) == "O" || (ctx_r10.translationResp == null ? null : ctx_r10.translationResp.recordStatus) == "OPEN") && ((ctx_r10.translationResp == null ? null : ctx_r10.translationResp.approvedEver) != "NO" && (ctx_r10.translationResp == null ? null : ctx_r10.translationResp.approvedEver) != "N") && ctx_r10.roleCodes.close);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ((ctx_r10.translationResp == null ? null : ctx_r10.translationResp.recordStatus) == "C" || (ctx_r10.translationResp == null ? null : ctx_r10.translationResp.recordStatus) == "CLOSED") && ctx_r10.roleCodes.reopen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ((ctx_r10.translationResp == null ? null : ctx_r10.translationResp.approvedEver) == "NO" || (ctx_r10.translationResp == null ? null : ctx_r10.translationResp.approvedEver) == "N") && !ctx_r10.showdelete && ctx_r10.roleCodes.delete);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r10.showRecords);
} }
function RuleTranslationComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "fieldset", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](6, "Source System ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](8, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](9, "ng-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("change", function RuleTranslationComponent_form_4_Template_ng_select_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r88.onSlectionExternalSystem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](10, "ng-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](11, "Please select System");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](12, RuleTranslationComponent_form_4_ng_option_12_Template, 2, 2, "ng-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](14, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](15, "Message Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](16, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("change", function RuleTranslationComponent_form_4_Template_select_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r89); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r90.onSelectionOFMessageType($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](17, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](18, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](19, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](20, "Incoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](21, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](22, "Outgoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](24, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](25, "Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](26, RuleTranslationComponent_form_4_div_26_Template, 5, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](27, RuleTranslationComponent_form_4_div_27_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](28, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](29, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](30, "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](31, RuleTranslationComponent_form_4_div_31_Template, 5, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](32, RuleTranslationComponent_form_4_div_32_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](33, RuleTranslationComponent_form_4_div_33_Template, 6, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](35, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](36, RuleTranslationComponent_form_4_div_36_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](37, RuleTranslationComponent_form_4_div_37_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](38, RuleTranslationComponent_form_4_div_38_Template, 22, 12, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("formGroup", ctx_r0.ruleTransForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("disabled", !ctx_r0.submitFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx_r0.externalSystem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r0.multipleOperation);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", !ctx_r0.multipleOperation);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r0.multipleService);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", !ctx_r0.multipleService);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r0.showFetch == "Https/Http" && ctx_r0.showFormat !== "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r0.showFetch === "TCP/IP" || ctx_r0.showFormat === "JSON" || ctx_r0.showFetch === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", !ctx_r0.showRecords);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r0.showRecords);
} }
function RuleTranslationComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](7, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](8, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](9, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](11, "Maker");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](14, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](15, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](16, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](17, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](18, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](19, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](20, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](21, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](22, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](23, "Maker Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](27, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](28, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](29, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](30, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](31, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](32, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](33, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](34, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](35, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](36, "Record Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](39, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](40, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](41, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](42, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](43, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](44, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](45, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](46, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](47, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](48, "Checker");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](51, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](52, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](53, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](54, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](55, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](56, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](57, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](58, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](59, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](60, "Checker Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](63, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](64, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](65, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](66, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](67, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](68, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](69, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](70, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](71, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](72, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](73, "First Time Auth");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](76, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](77, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](78, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](79, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](80, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](81, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](82, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](83, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](84, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](85, "Auth Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](86, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](88, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](89, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](90, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](91, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](92, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](93, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](94, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](95, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](96, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](97, "Modification Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](98, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](ctx_r1.translationResp == null ? null : ctx_r1.translationResp.creatorId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind2"](26, 8, ctx_r1.translationResp == null ? null : ctx_r1.translationResp.createdTime, "MM/dd/yyyy, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](ctx_r1.translationResp == null ? null : ctx_r1.translationResp.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](ctx_r1.translationResp == null ? null : ctx_r1.translationResp.approverId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind2"](63, 11, ctx_r1.translationResp == null ? null : ctx_r1.translationResp.approvedTime, "MM/dd/yyyy, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](ctx_r1.translationResp == null ? null : ctx_r1.translationResp.approvedEver);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](ctx_r1.translationResp == null ? null : ctx_r1.translationResp.approvedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](ctx_r1.translationResp == null ? null : ctx_r1.translationResp.versionNo);
} }
class RuleTranslationComponent {
    constructor(rules, addSystem, formBuilder, cdr, roleService, router, canDeactivateGuard) {
        this.rules = rules;
        this.addSystem = addSystem;
        this.formBuilder = formBuilder;
        this.cdr = cdr;
        this.roleService = roleService;
        this.router = router;
        this.canDeactivateGuard = canDeactivateGuard;
        this.submitFlag = true;
        this.isSelected = true;
        this.hideSubmit = false;
        this.hideEdit = true;
        this.formTouched = true;
        this.msgTranslation = new msgTranslation();
        this.recordSaved = false;
        this.disableSubmit = false;
        this.disableReset = false;
        this.desSystem = [];
        this.isoRespData = [];
        this.tempArrayList = [];
        this.fieldNoList = [];
        this.dbConnectionList = [];
        this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
        this.showDialog = false;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.columnNameDD = [];
        this.messageBasisData = [];
        this.mdmtSystemChannel = [];
        this.multipleOperation = true;
        this.multipleService = true;
    }
    ngOnInit() {
        this.currentUser = localStorage.getItem('userFromLogin');
        this.ruleTransForm = this.formBuilder.group({
            transId: this.transId,
            systemCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            msgTransDetails: this.formBuilder.array([])
        });
        this.roleService.fetchScreenPermissions('Rule translation');
        this.roleService.screenLabelList.subscribe(message => this.roleCodes = message);
        setTimeout(() => {
            console.log(this.roleCodes);
        }, 100);
        // this.msgTranslation.messageType = "null";
        // this.addTransaltionGroup();
        this.gettingExternalsystem();
        this.fetchingHeadertag();
        // this.fetchingIso();
    }
    getTranslationItem(item) {
        return this.formBuilder.group({
            messagebasis: [item.messagebasis ? item.messagebasis : ""],
            headerTag: [item.headerTag ? item.headerTag : ""],
            defaultValue: [item.defaultValue ? item.defaultValue : ""],
            systemChannelId: [item.systemChannelId ? item.systemChannelId : ""],
            encryption: [item.encryption ? item.encryption : "No Encryption"],
            id: [item.id ? item.id : ''],
            dataType: [item.dataType ? item.dataType : ''],
            messageKey: [item.messageKey ? item.messageKey : '']
        });
    }
    get msgTransDetails() {
        return this.ruleTransForm.get('msgTransDetails');
    }
    addTransaltionGroup(item) {
        this.msgTransDetails.push(this.getTranslationItem(item));
    }
    removeTranslation(index) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'are you sure, want to remove the record?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                if (this.tempArrayList[index]) {
                    this.tempArrayList.splice(index, 1);
                }
                this.msgTransDetails.removeAt(index);
                console.log(this.tempArrayList);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Removed!', '', 'success');
            }
        });
    }
    canExit() {
        let isExit = false;
        if (this.ruleTransForm.touched && this.formTouched == true) {
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
    auditLog() {
        if (this.translationResp.verifiedStatus === 'U') {
            this.translationResp.verifiedStatus = 'UNAUTHORIZED';
        }
        if (this.translationResp.verifiedStatus === 'A') {
            this.translationResp.verifiedStatus = 'AUTHORIZED';
        }
        if (this.translationResp.recordStatus === 'O') {
            this.translationResp.recordStatus = 'OPEN';
        }
        if (this.translationResp.recordStatus === 'C') {
            this.translationResp.recordStatus = 'CLOSED';
        }
        if (this.translationResp.approvedEver === 'N') {
            this.translationResp.approvedEver = 'NO';
        }
        if (this.translationResp.approvedEver === 'Y') {
            this.translationResp.approvedEver = 'YES';
        }
    }
    gettingExternalsystem() {
        this.rules.gettingExternalsystem().subscribe(extSysResp => {
            console.log(extSysResp);
            if (extSysResp) {
                this.externalSystem = extSysResp.sort();
                this.sourcesysData = this.externalSystem;
            }
        }, (err) => {
            console.log("err", err);
        });
    }
    onSlectionExternalSystem(event) {
        console.log(event);
        this.tempArrayList = [];
        this.sourcesystem = event;
        this.rules.getAddSystem(this.sourcesystem).subscribe((resp) => {
            console.log("PAtch REsp", resp);
            if (resp) {
                this.ruleTransForm.patchValue(resp);
                this.msgTranslation.messageType = resp.messsageType;
                this.msgTranslation.operationName = resp.operationName;
                this.msgTranslation.serviceName = resp.serviceName;
                if (resp.messsageType == 'A') {
                    this.msgTranslation.messageType = 'I';
                    this.ruleTransForm.get('messageType').patchValue(this.msgTranslation.messageType);
                }
                this.ruleTransForm.get('messageType').patchValue(this.msgTranslation.messageType);
                this.cdr.markForCheck();
                console.log(this.msgTranslation);
                this.gettingoperationAndService(this.sourcesystem, this.msgTranslation.messageType);
            }
        });
    }
    onSelectionOFMessageType(event) {
        this.msgType = event.target.value;
        console.log(this.msgType, this.sourcesystem);
        if (this.sourcesystem && this.msgType) {
            this.gettingoperationAndService(this.sourcesystem, this.msgType);
        }
        else {
            console.log("enter both msg and ext");
        }
    }
    gettingoperationAndService(sourcesystem, msgType) {
        this.rules.gettingoperationAndService(sourcesystem, msgType, this.currentUser)
            .subscribe((translationResp) => {
            console.log("translationResp - ", translationResp);
            // console.log("msgType - ",msgType);
            this.messageBasisData = translationResp.MdmtSystemService;
            this.mdmtSystemChannel = translationResp.MdmtSystemChannel;
            let keys = Object.keys(translationResp);
            // console.log(keys)
            let x = keys[2];
            let y = keys[3];
            if (x == 'I' && Object.keys(translationResp).length == 3) {
                // console.log("yes", x);
                if (translationResp.I.SERVICE.length !== 0) {
                    // this.msgTranslation.serviceName = translationResp.I.SERVICE[0].headerValue
                    this.ruleTransForm.get('serviceName').patchValue(translationResp.I.SERVICE[0].headerValue);
                    if (translationResp.I.SERVICE.length < 1) {
                        console.log(this.translationDataOperation, "1st if");
                        this.multipleService = true;
                    }
                    if (translationResp.I.SERVICE.length >= 1) {
                        console.log(this.translationDataOperation, "2nd If");
                        this.multipleService = false;
                    }
                }
                if (translationResp.I.OPERATION.length !== 0) {
                    // this.msgTranslation.operationName = translationResp.I.OPERATION[0].headerValue
                    this.ruleTransForm.get('operationName').patchValue(translationResp.I.OPERATION[0].headerValue);
                    this.translationDataOperation = translationResp.I.OPERATION;
                    if (this.translationDataOperation.length < 1) {
                        console.log(this.translationDataOperation, "1st if");
                        this.multipleOperation = true;
                    }
                    if (this.translationDataOperation.length >= 1) {
                        console.log(this.translationDataOperation, "2nd If");
                        this.multipleOperation = false;
                    }
                }
                this.translationDataService = translationResp.I.SERVICE;
            }
            else if (x == 'O' && Object.keys(translationResp).length == 3) {
                // console.log("else if", x);
                if (translationResp.O.SERVICE.length !== 0) {
                    // this.msgTranslation.serviceName = translationResp.O.SERVICE[0].headerValue
                    this.ruleTransForm.get('serviceName').patchValue(translationResp.O.SERVICE[0].headerValue);
                }
                if (translationResp.O.OPERATION.length !== 0) {
                    // this.msgTranslation.operationName = translationResp.O.OPERATION[0].headerValue
                    this.ruleTransForm.get('operationName').patchValue(translationResp.O.OPERATION[0].headerValue);
                    this.translationDataOperation = translationResp.O.OPERATION;
                }
                this.translationDataService = translationResp.O.SERVICE;
            }
            else if (x == 'I' && this.msgTranslation.messageType == 'I' && Object.keys(translationResp).length == 4) {
                if (translationResp.I.SERVICE.length !== 0) {
                    // this.msgTranslation.serviceName = translationResp.I.SERVICE[0].headerValue
                    this.ruleTransForm.get('serviceName').patchValue(translationResp.I.SERVICE[0].headerValue);
                }
                if (translationResp.I.OPERATION.length !== 0) {
                    // this.msgTranslation.operationName = translationResp.I.OPERATION[0].headerValue
                    this.ruleTransForm.get('operationName').patchValue(translationResp.I.OPERATION[0].headerValue);
                    this.translationDataOperation = translationResp.I.OPERATION;
                }
                this.translationDataService = translationResp.I.SERVICE;
            }
            else if (y == 'O' && this.msgTranslation.messageType == 'O' && Object.keys(translationResp).length == 4) {
                if (translationResp.O.SERVICE.length !== 0) {
                    // this.msgTranslation.serviceName = translationResp.O.SERVICE[0].headerValue;
                    this.ruleTransForm.get('serviceName').patchValue(translationResp.O.SERVICE[0].headerValue);
                }
                if (translationResp.O.OPERATION.length !== 0) {
                    // this.msgTranslation.operationName = translationResp.O.OPERATION[0].headerValue;
                    this.ruleTransForm.get('operationName').patchValue(translationResp.O.OPERATION[0].headerValue);
                    this.translationDataOperation = translationResp.O.OPERATION;
                }
                this.translationDataService = translationResp.O.SERVICE;
            }
            for (let index = 0; index < translationResp.MdmtSystemChannel.length; index++) {
                if (translationResp.MdmtSystemChannel[index].messageType === msgType) {
                    this.showFetch = translationResp.MdmtSystemChannel[index].messageChannel;
                    this.showFormat = translationResp.MdmtSystemChannel[index].messageFormat;
                }
            }
            // console.log(this.showFetch);
            if (this.showFetch == 'Https/Http') {
                // this.fetchingXMl();
                for (let index = 0; index < translationResp.MdmtSystemChannel.length; index++) {
                    if (translationResp.MdmtSystemChannel[index].messageType === 'I') {
                        for (let subIndex = 0; subIndex < translationResp.MdmtSystemChannel[index].sysService.length; subIndex++) {
                            let systemCode = translationResp.MdmtSystemChannel[index].sysService[subIndex].messageKey.split(",", 4);
                            let item = {
                                messageKey: null,
                                messagebasis: systemCode[1],
                                dataType: translationResp.MdmtSystemChannel[index].sysService[subIndex].dataType,
                                defaultValue: systemCode[3],
                            };
                            this.addTransaltionGroup(item);
                        }
                        // console.log(this.ruleTransForm.value);
                    }
                }
            }
            else if (this.showFetch == 'TCP/IP') {
                this.fetchingIso();
            }
            else if (this.showFetch == 'DB Connection') {
                this.addSystem.coulmnNameBasedonTableName(translationResp.MdmtSystemChannel[0].dbConnectString, translationResp.MdmtSystemChannel[0].dbServiceName, translationResp.MdmtSystemChannel[0].dbUsername, translationResp.MdmtSystemChannel[0].dbPassword, translationResp.MdmtSystemChannel[0].sysService[0].messageKey.split(",", 1)).subscribe((resp) => {
                    resp.forEach(element => {
                        this.columnNameDD.push(element[1]);
                    });
                });
                if (msgType === 'I') {
                    console.log(translationResp.MdmtSystemChannel[0].messageType);
                    for (let index = 0; index < translationResp.MdmtSystemChannel.length; index++) {
                        if (translationResp.MdmtSystemChannel[index].messageType === 'I') {
                            for (let subIndex = 0; subIndex < translationResp.MdmtSystemChannel[index].sysService.length; subIndex++) {
                                let systemCode = translationResp.MdmtSystemChannel[index].sysService[subIndex].messageKey.split(",", 4);
                                let item = {
                                    messageKey: null,
                                    messagebasis: systemCode[1],
                                    dataType: translationResp.MdmtSystemChannel[index].sysService[subIndex].dataType,
                                    defaultValue: systemCode[3],
                                };
                                this.addTransaltionGroup(item);
                            }
                            console.log(this.ruleTransForm.value);
                        }
                    }
                }
                else if (msgType === 'O') {
                    for (let index = 0; index < translationResp.MdmtSystemChannel.length; index++) {
                        console.log(translationResp.MdmtSystemChannel[index].messageType);
                        if (translationResp.MdmtSystemChannel[index].messageType === 'O') {
                            for (let subIndex = 0; subIndex < translationResp.MdmtSystemChannel[index].sysService.length; subIndex++) {
                                let systemCode = translationResp.MdmtSystemChannel[index].sysService[subIndex].messageKey.split(",", 2);
                                let item = {
                                    messageKey: null,
                                    messagebasis: systemCode[1],
                                    dataType: translationResp.MdmtSystemChannel[index].sysService[subIndex].dataType,
                                    defaultValue: systemCode[3],
                                };
                                this.addTransaltionGroup(item);
                            }
                            console.log(this.ruleTransForm.value);
                        }
                    }
                }
            }
        }, (err => {
            // console.log(err);
            // Swal.fire({text:'External system Service data not present'})
        }));
    }
    onSubmit() {
        // console.log(this.ruleTransForm.value);
        // console.log(this.ruleTransForm.get('transId').value);
        if (this.ruleTransForm.get('transId').value) {
            this.rules.editruleTranslation("update", this.currentUser, this.ruleTransForm.value).subscribe((ruleTranslationResp) => {
                console.log(ruleTranslationResp);
                this.translationResp = ruleTranslationResp;
                this.ruleTransForm.patchValue(ruleTranslationResp);
                this.auditLog();
                if (ruleTranslationResp) {
                    this.recordSaved = true;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        text: "Record is updated!",
                        icon: 'success'
                    });
                    this.ruleTransForm.disable();
                    this.msgTransDetails.disable();
                    this.formTouched = !this.ruleTransForm.touched;
                    this.hideSubmit = true;
                    this.hideEdit = false;
                    this.showAuditLog = true;
                    this.submitFlag = false;
                    this.disableSubmit = true;
                    this.disableReset = true;
                }
            });
        }
        else {
            this.rules.submittingruleTranslation(this.currentUser, this.ruleTransForm.value).subscribe(ruleTranslationResp => {
                console.log(ruleTranslationResp);
                this.translationResp = ruleTranslationResp;
                this.ruleTransForm.patchValue(ruleTranslationResp);
                this.auditLog();
                if (ruleTranslationResp) {
                    this.recordSaved = true;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        text: "Record is Created",
                        icon: 'success'
                    });
                    this.ruleTransForm.disable();
                    this.msgTransDetails.disable();
                    this.formTouched = !this.ruleTransForm.touched;
                    this.hideSubmit = true;
                    this.hideEdit = false;
                    this.showAuditLog = true;
                    this.submitFlag = false;
                    this.disableSubmit = true;
                    this.disableReset = true;
                }
            }, (err => {
                this.disableSubmit = true;
                console.log("error: : ", err.error);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: 'Rule Translation already exist kindly recheck the data.', icon: 'error' });
            }));
        }
    }
    onFetch() {
        this.showRecords = true;
        if (this.showFetch == 'DB Connection') {
            this.dbConnectionList;
            for (let index = 0; index < this.dbConnectionList.length; index++) {
                this.tempArrayList[index] = this.dbConnectionList[index];
            }
            console.log("this.tempArrayList ", this.tempArrayList);
        }
        if (this.sourcesystem == 'E-ISO') {
            for (let index = 0; index < this.msgTransDetails.controls.length; index++) {
                this.tempArrayList[index] = this.msgTransDetails.at(index).get('messageKey').value;
            }
            console.log(this.tempArrayList);
        }
        console.log("translationDeatils", this.msgTransDetails.value);
    }
    onReset() {
        this.ruleTransForm.reset();
        this.msgTransDetails.clear();
        this.showRecords = false;
        this.disableSubmit = false;
    }
    selectFileFORHTTPXMLIncoming(event) {
        // console.log("here http and xML", event);
        this.selectedFiles = event.target.files;
        // this.sizeOfFile = this.selectedFiles.item(0).size;
        // console.log(this.sizeOfFile);
        // console.log(this.selectedFiles);
        // console.log(this.selectedFiles[0].name);
        this.fileName = this.selectedFiles[0].name;
        this.fileUploadWrapper.nativeElement.setAttribute('data-text', this.fileName);
        this.currentFileUpload = this.selectedFiles.item(0);
        console.log(event.target.files);
        this.addSystem.gettingBodyOfXml(this.currentFileUpload).subscribe(xmlHttpResp => {
            console.log("XML", xmlHttpResp);
            this.msgTransDetails.controls.length = 0;
            this.uploadXmlResp = xmlHttpResp;
            if (xmlHttpResp) {
                this.messageBasisIso = xmlHttpResp.nodeTagList;
                this.showRecords = true;
                this.addTransaltionGroup({});
            }
        });
    }
    fetchingHeadertag() {
        this.addSystem.fetchingHeaderTag().subscribe(resp => {
            console.log("res", resp);
            this.headerTagData = resp;
        });
    }
    onselectOfFieldNo(event, i) {
        console.log(event);
        console.log(this.tempArrayList[i]);
        if (this.tempArrayList[i]) {
            this.tempArrayList[i] = event;
        }
        else {
            this.tempArrayList.push(event);
        }
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
                if (this.currentUser == this.translationResp.creatorId) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire(`Maker cannot ${operationType}!`);
                }
                else {
                    let RuleTranslationData = this.translationResp;
                    this.addSystem.editruleTranslation(operation, this.currentUser, RuleTranslationData).subscribe((response) => {
                        console.log(response);
                        if (response) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire(`Record is ${message}`);
                            this.translationResp = response;
                        }
                    });
                }
            }
        }));
    }
    editValues() {
        this.hideSubmit = false;
        this.hideEdit = true;
        this.submitFlag = true;
        this.showAuditLog = false;
        this.ruleTransForm.enable();
        this.msgTransDetails.enable();
    }
    deleteRuleTranslation() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            text: 'You are trying to Delete record. ' + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#3e54b8',
            cancelButtonColor: '#d33',
            cancelButtonText: 'NO',
            confirmButtonText: 'YES', 'icon': 'info', iconColor: "#d33"
        }).then((result => {
            console.log("this is reopen ", result);
            if (result.isConfirmed === true) {
                let RuleTranslationData = this.translationResp;
                console.log(this.translationResp);
                this.addSystem.deleteRuleTranslation(this.currentUser, RuleTranslationData.transId).subscribe((response) => {
                }, (err) => {
                    if (err.status == 200) {
                        this.showdelete = true;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            title: 'Record is Deleted!',
                            confirmButtonText: 'Ok'
                        }).then((result) => {
                            if (result) {
                                this.router.navigateByUrl('/rule-translation/summary');
                            }
                        });
                    }
                });
            }
        }));
    }
    onselectingTag(event, i) {
        // if(this.tempArrayList[i]){
        //   this.tempArrayList[i] = event.target.value;
        // }
        // else{
        //   this.tempArrayList.push(event.target.value);
        // }
        console.log(this.uploadXmlResp);
        var result = Object.keys(this.uploadXmlResp.nodeValueMap).map((key) => [(key), this.uploadXmlResp.nodeValueMap[key]]);
        console.log("result", result);
        var x = result.find(item => item[0] == event.target.value);
        console.log(x);
        this.msgTransDetails.at(i).get('defaultValue').patchValue(x[1]);
        this.desSystem.push(event.target.value);
        //   this.mdmtSystemService[i].dataType=x.dataType;
    }
    onselectingColumnName(event, i) {
        console.log(this.columnNameDD);
        var result = Object.keys(this.columnNameDD.nodeValueMap).map((key) => [(key), this.columnNameDD.nodeValueMap[key]]);
        console.log("result", result);
        var x = result.find(item => item[0] == event.target.value);
        console.log(x);
        this.msgTransDetails.at(i).get('defaultValue').patchValue(x[1]);
        this.desSystem.push(event.target.value);
    }
    fetchingIso() {
        this.addSystem.fetchingIsoForTcp().subscribe((isoResp) => {
            console.log("isoResp", isoResp);
            this.isoRespData = isoResp;
            for (let index = 0; index < isoResp.length; index++) {
                this.addTransaltionGroup({});
                let item = {
                    messageKey: isoResp[index].fieldNo,
                    messagebasis: isoResp[index].fieldName,
                    dataType: isoResp[index].dataType,
                    defaultValue: null,
                };
                this.msgTransDetails.at(index).patchValue(item);
                this.fieldNoList[index] = item;
            }
            console.log("arrayObj 3", this.msgTransDetails.value);
            // this.translationDeatils = arrayObj;
            // console.log("tra", this.translationDeatils);
            // for dropdown 2
            this.messageKeyIso = isoResp.map((data) => {
                return data.messageKey;
            });
            this.messageBasisIso = isoResp.map((data) => {
                return data.messageBasis;
            });
        });
    }
    onsearchingTablName(event) {
        console.log(event.target.value);
        console.log("this is arr", this.sourcesysData);
        if (this.sourcesysData) {
            let data = this.sourcesysData.filter(function (e) {
                let extValue = e.toLowerCase();
                let value = event.target.value.toLowerCase();
                console.log(extValue, value);
                // return !extValue.indexOf(value);//changed this for 1192
                return extValue.search(value) > -1;
            });
            console.log(data);
            this.externalSystem = data;
        }
    }
    chooseFile() {
        console.log("heyy file");
        document.getElementById('chFile').click();
    }
    //gettingxml records
    fetchingXMl() {
        this.addSystem.gettinXMLmsgIncoming().subscribe(xmlResp => {
            console.log(xmlResp);
            this.xmlRespData = xmlResp;
            //  this.messageBasisIso=xmlResp.map((data)=>{
            //       return data.messageBasis;
            //     });
        });
    }
    try(value) {
        if (this.tempArrayList.find(item => item == value)) {
            return true;
        }
        else {
            return false;
        }
    }
    check(event, value) {
        console.log("ev", event.value);
        this.desSystem.push(event.value);
        // this.destination=event.value;
        // this.addSystem.gettingHederofXMl(this.currentFileUpload).subscribe(xmlResp=>{
        //   console.log(xmlResp);
        //   if(xmlResp)
        //   {
        //   this.messageBasisIso=xmlResp;
        //   Swal.fire({text:'File Uploaded Successfully'});
        //   }
        // },(err)=>{
        //   console.log(err);
        //   Swal.fire({text:'Invalid Xml file provided'});
        // })
    }
    shouldDisableTagOption(option) {
        // console.log(this.messageBasisIso);
        return this.desSystem.includes(option);
    }
}
RuleTranslationComponent.??fac = function RuleTranslationComponent_Factory(t) { return new (t || RuleTranslationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_3__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__.CanDeactivateGuard)); };
RuleTranslationComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({ type: RuleTranslationComponent, selectors: [["npr-rule-translation"]], viewQuery: function RuleTranslationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????viewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????loadQuery"]()) && (ctx.fileUploadWrapper = _t.first);
    } }, decls: 7, vars: 2, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["class", "formStyle", 3, "formGroup", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "formStyle", 3, "formGroup"], [3, "disabled"], [1, "dbCardStyle"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-2"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["id", "outlineNgSelect", "id", "sysCode", "formControlName", "systemCode", "aria-label", "Default select example", "required", "", 1, "form-select", 3, "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "msgType", "formControlName", "messageType", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", "I"], ["value", "O"], [4, "ngIf"], ["class", "col-lg-4", 3, "click", 4, "ngIf"], ["class", "col-auto", 4, "ngIf"], [3, "value"], ["id", "operationName", "formControlName", "operationName", "aria-label", "Default select example", 1, "form-select"], ["id", "operationName", "type", "text", "formControlName", "operationName", "value", "", 1, "form-control"], ["id", "serviceName", "formControlName", "serviceName", "aria-label", "Default select example", 1, "form-select"], ["id", "serviceName", "type", "text", "formControlName", "serviceName", "value", "", 1, "form-control"], [1, "col-lg-4", 3, "click"], [1, "fileUpload"], [1, "formS"], ["data-text", "File Upload", 1, "file-upload-wrapper"], ["fileWrapper", ""], ["id", "chFile", "name", "file-upload-field", "type", "file", 1, "file-upload-field", 3, "change"], [1, "col-auto"], [1, "btn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "table-responsive"], ["id", "dbTable1", 1, "table", "tableStyle", "responsive", "nowrap", "vAlignMdl"], ["formArrayName", "msgTransDetails"], [4, "ngFor", "ngForOf"], ["class", "addIcon primarybg", 3, "click", 4, "ngIf"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "hidden", "disabled", "click"], [4, "ngIf", "ngIfElse"], ["showType", ""], [3, "formGroup"], ["formControlName", "defaultValue", "type", "text", "value", "", 1, "form-control", 3, "id"], ["formControlName", "encryption", "aria-label", "Default select example", 1, "form-select", 3, "id", "change"], ["value", "No Encryption"], ["value", "BASE64"], ["value", "SHA256"], ["value", "SHA512"], [1, "tblIcon"], ["class", "deleteIcon2", 3, "click", 4, "ngIf"], ["id", "outlineNgSelect", "formControlName", "messageKey", "aria-label", "Default select example", "required", "", 1, "form-select", 3, "id", "change"], ["formControlName", "messagebasis", "aria-label", "Default select example", 1, "form-select", 3, "id", "change"], [3, "hidden", "value", 4, "ngFor", "ngForOf"], [3, "hidden", "value"], ["formControlName", "messageKey", "aria-label", "Default select example", "required", "", 1, "form-select", 3, "id"], ["value", "", 3, "selected"], ["type", "text", "formControlName", "dataType", "value", "", 1, "form-control", 3, "id"], ["formControlName", "dataType", "aria-label", "Default select example", 1, "form-select", 3, "id"], ["value", "numeric"], ["value", "alphaNumeric"], ["value", "date"], [1, "deleteIcon2", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "addIcon", "primarybg", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "hidden", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "hidden", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "hidden", "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], [1, "fa", "fa-edit", "faClass"], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], [1, "fa", "fa-check-square-o", "faClassChecker"], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/authorize.svg", "alt", "...", 1, "modImage"], ["src", "assets/images/modification.svg", "alt", "...", 1, "modImage"]], template: function RuleTranslationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "Rule Translation");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, RuleTranslationComponent_form_4_Template, 39, 11, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](6, RuleTranslationComponent_div_6_Template, 100, 14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.ruleTransForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.showAuditLog);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["??NgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJydWxlLXRyYW5zbGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
class msgTranslation {
}


/***/ })

}]);
//# sourceMappingURL=src_app_views_rule-translation_rule-translation_module_ts-es2015.js.map