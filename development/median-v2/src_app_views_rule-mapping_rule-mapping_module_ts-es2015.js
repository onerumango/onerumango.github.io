"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_rule-mapping_rule-mapping_module_ts"],{

/***/ 74982:
/*!***********************************************************************!*\
  !*** ./src/app/views/rule-mapping/conversion/conversion.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversionComponent": function() { return /* binding */ ConversionComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/add-system.service */ 91973);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/rule.service */ 50511);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);









const _c0 = function () { return ["/excel-mapping"]; };
class ConversionComponent {
    constructor(rulelist, router, addSystem, fb) {
        this.rulelist = rulelist;
        this.router = router;
        this.addSystem = addSystem;
        this.fb = fb;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.dtOptions = {};
        this.ruleMappingListResp = [];
    }
    ngOnInit() {
        this.conversionForm = this.fb.group({
            FCUBS_HEADER: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            Content_Type: [""],
        });
    }
    process() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", `${src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/message/readMessage`);
        var xmlDoc;
        var self = this;
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log(xmlhttp);
                self.dataResp = this.response;
            }
            else if (xmlhttp.readyState == 4 && xmlhttp.status == 400) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Provided Input is incorrect",
                    icon: 'error' });
            }
        };
        if (this.conversionForm.value.Content_Type === "json") {
            xmlhttp.setRequestHeader("Content-Type", "application/json");
        }
        else if (this.conversionForm.value.Content_Type === "xml") {
            xmlhttp.setRequestHeader("Content-Type", "application/xml");
        }
        xmlhttp.send(this.conversionForm.value.FCUBS_HEADER);
    }
    onSelect(event) {
        this.conversionForm.get('FCUBS_HEADER').setValue('');
        this.dataResp = null;
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
}
ConversionComponent.ɵfac = function ConversionComponent_Factory(t) { return new (t || ConversionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_0__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); };
ConversionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ConversionComponent, selectors: [["npr-conversion"]], decls: 37, vars: 5, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["novalidate", "", 3, "formGroup"], [1, "col-lg-3"], [2, "font-weight", "bold"], ["formControlName", "Content_Type", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", "xml"], ["value", "json"], [2, "width", "100%"], [2, "margin-top", "2%"], ["id", "exampleFormControlTextarea1", "rows", "15", "formControlName", "FCUBS_HEADER", 1, "form-control", "rounded-0", 2, "width", "80%"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["id", "exampleFormControlTextarea1", "rows", "15", 1, "form-control", "rounded-0", 2, "width", "80%"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], ["routerLinkActive", "router-link-active", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"]], template: function ConversionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Conversion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Content Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ConversionComponent_Template_select_change_10_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Xml");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Json");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Response Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConversionComponent_Template_button_click_28_listener() { return ctx.process(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " Process ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.conversionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.conversionForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.dataResp);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb252ZXJzaW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7622:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/rule-mapping/rule-mapping-create/rule-mapping-create.component.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleMappingCreateComponent": function() { return /* binding */ RuleMappingCreateComponent; },
/* harmony export */   "MdmtMessageMapping": function() { return /* binding */ MdmtMessageMapping; },
/* harmony export */   "MdmtMessageMappingDet": function() { return /* binding */ MdmtMessageMappingDet; },
/* harmony export */   "ruleMapDto": function() { return /* binding */ ruleMapDto; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/fmosNewRolePermissions */ 35383);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/rule.service */ 50511);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/add-system.service */ 91973);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/guards/can-deactivate.guard */ 50215);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);














function RuleMappingCreateComponent_ng_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const extsys_r9 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", extsys_r9)("hidden", extsys_r9 === ctx_r0.sourseSys);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", extsys_r9, " ");
} }
function RuleMappingCreateComponent_ng_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const extsys_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", extsys_r10)("hidden", extsys_r10 === ctx_r1.sourseSys);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", extsys_r10, " ");
} }
function RuleMappingCreateComponent_div_81_ng_container_2_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Source System");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_9_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Field No");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_9_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r27 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r26.try(tag_r27.messageKey))("value", tag_r27.messageKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", tag_r27.messageKey, " ", tag_r27.messageBasis, "");
} }
function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_81_ng_container_2_ng_container_9_label_1_Template, 2, 0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_9_Template_select_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30); const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r28.onselectOfFieldNo($event, i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_81_ng_container_2_ng_container_9_option_3_Template, 2, 4, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r14 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r16.sourceData);
} }
function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_10_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_10_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r34 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r33.try(tag_r34.messageKey))("value", tag_r34.messageKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](tag_r34.messageKey);
} }
function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_81_ng_container_2_ng_container_10_label_1_Template, 2, 0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_10_Template_select_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r37); const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r35.onselectOfFieldNo($event, i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_81_ng_container_2_ng_container_10_option_3_Template, 2, 3, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r14 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r17.sourceData);
} }
function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_11_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Table Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_11_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r41 = ctx.$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r40.try(tag_r41.messageKey))("value", tag_r41.messageKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](tag_r41.messageKey[1]);
} }
function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_81_ng_container_2_ng_container_11_label_1_Template, 2, 0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_11_Template_select_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r44); const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r42.onselectOfFieldNo($event, i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_81_ng_container_2_ng_container_11_option_3_Template, 2, 3, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r14 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r18.sourceData);
} }
function RuleMappingCreateComponent_div_81_ng_container_2_label_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Destination system");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_16_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Field No");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_16_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fname_r48 = ctx.$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r47.try2(fname_r48.messageKey))("value", fname_r48.messageKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", fname_r48.messageKey, " ", fname_r48.messageBasis, "");
} }
function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_81_ng_container_2_ng_container_16_label_1_Template, 2, 0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_16_Template_select_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r52); const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r50.onselectOfFieldNo2($event, i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_81_ng_container_2_ng_container_16_option_3_Template, 2, 4, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r14 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r20.destinationData);
} }
function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_17_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_17_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fname_r56 = ctx.$implicit;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r55.try2(fname_r56.messageKey))("value", fname_r56.messageKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", fname_r56.messageKey, "");
} }
function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_81_ng_container_2_ng_container_17_label_1_Template, 2, 0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_81_ng_container_2_ng_container_17_Template_select_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r60); const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r58.onselectOfFieldNo2($event, i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_81_ng_container_2_ng_container_17_option_3_Template, 2, 3, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r14 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r21.destinationData);
} }
function RuleMappingCreateComponent_div_81_ng_container_2_label_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Default value");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RuleMappingCreateComponent_div_81_ng_container_2_label_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "label", 50);
} }
function RuleMappingCreateComponent_div_81_ng_container_2_a_26_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_81_ng_container_2_a_26_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r64); const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r62.deleteRuleMapGroup(i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RuleMappingCreateComponent_div_81_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, RuleMappingCreateComponent_div_81_ng_container_2_label_6_Template, 2, 0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, RuleMappingCreateComponent_div_81_ng_container_2_ng_container_9_Template, 4, 2, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, RuleMappingCreateComponent_div_81_ng_container_2_ng_container_10_Template, 4, 2, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, RuleMappingCreateComponent_div_81_ng_container_2_ng_container_11_Template, 4, 2, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, RuleMappingCreateComponent_div_81_ng_container_2_label_13_Template, 2, 0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, RuleMappingCreateComponent_div_81_ng_container_2_ng_container_16_Template, 4, 2, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, RuleMappingCreateComponent_div_81_ng_container_2_ng_container_17_Template, 4, 2, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, RuleMappingCreateComponent_div_81_ng_container_2_label_19_Template, 2, 0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, RuleMappingCreateComponent_div_81_ng_container_2_label_22_Template, 1, 0, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, RuleMappingCreateComponent_div_81_ng_container_2_a_26_Template, 2, 0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r14 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r14 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.sourceLabel == "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.sourceLabel == "Https/Http");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.sourceLabel == "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r14 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.labelsDestination == "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.labelsDestination == "Https/Http");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r14 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r14 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.submit);
} }
function RuleMappingCreateComponent_div_81_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_81_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r65.addRuleDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function RuleMappingCreateComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RuleMappingCreateComponent_div_81_ng_container_2_Template, 28, 11, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, RuleMappingCreateComponent_div_81_a_5_Template, 3, 0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.rulemappingDetail.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.submit);
} }
function RuleMappingCreateComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_83_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r67.editValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r3.submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.roleCodes.edit.labelDescription, " ");
} }
function RuleMappingCreateComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_87_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r69.auditChangeRuleTranslation("auth"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r4.hideFetch);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.roleCodes.auth.labelDescription);
} }
function RuleMappingCreateComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_88_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r71.auditChangeRuleTranslation("close"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r5.hideFetch);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.roleCodes.close.labelDescription);
} }
function RuleMappingCreateComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_89_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r73.auditChangeRuleTranslation("open"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r6.hideFetch);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r6.roleCodes.reopen.labelDescription);
} }
function RuleMappingCreateComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_90_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r75.deleteRuleMapping(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r7.hideFetch);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r7.roleCodes.delete.labelDescription);
} }
function RuleMappingCreateComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Maker");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Maker Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Record Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Checker");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Checker Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](63, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](69, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "First Time Auth");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](81, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "Auth Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](93, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "Modification Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r8.addSysRespData == null ? null : ctx_r8.addSysRespData.creatorId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](26, 8, ctx_r8.addSysRespData == null ? null : ctx_r8.addSysRespData.createdTime, "MM/dd/yyyy, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r8.addSysRespData == null ? null : ctx_r8.addSysRespData.recordStatus) == "O" ? "OPEN" : (ctx_r8.addSysRespData == null ? null : ctx_r8.addSysRespData.recordStatus) == "C" ? "CLOSED" : ctx_r8.addSysRespData == null ? null : ctx_r8.addSysRespData.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r8.addSysRespData == null ? null : ctx_r8.addSysRespData.approverId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](63, 11, ctx_r8.addSysRespData == null ? null : ctx_r8.addSysRespData.approvedTime, "MM/dd/yyyy, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r8.addSysRespData == null ? null : ctx_r8.addSysRespData.approvedEver) == "N" ? "NO" : (ctx_r8.addSysRespData == null ? null : ctx_r8.addSysRespData.approvedEver) == "Y" ? "YES" : ctx_r8.addSysRespData == null ? null : ctx_r8.addSysRespData.approvedEver);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r8.addSysRespData == null ? null : ctx_r8.addSysRespData.approvedStatus) == "N" || (ctx_r8.addSysRespData == null ? null : ctx_r8.addSysRespData.approvedStatus) == "U" ? "UNAUTHORIZED" : (ctx_r8.addSysRespData == null ? null : ctx_r8.addSysRespData.approvedStatus) == "Y" || (ctx_r8.addSysRespData == null ? null : ctx_r8.addSysRespData.approvedStatus) == "A" ? "AUTHORIZED" : ctx_r8.addSysRespData == null ? null : ctx_r8.addSysRespData.approvedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r8.addSysRespData == null ? null : ctx_r8.addSysRespData.versionNo);
} }
const _c0 = function () { return ["/rule-mapping/summary"]; };
class RuleMappingCreateComponent {
    constructor(rulemap, router, roleService, fb, addSystem, formBuilder, cdr, toastService, canDeactivateGuard) {
        this.rulemap = rulemap;
        this.router = router;
        this.roleService = roleService;
        this.fb = fb;
        this.addSystem = addSystem;
        this.formBuilder = formBuilder;
        this.cdr = cdr;
        this.toastService = toastService;
        this.canDeactivateGuard = canDeactivateGuard;
        this.fieldNoData = [];
        this.disableFetchBtn = false;
        this.disableSubmitBtn = false;
        this.disableResetBtn = false;
        this.showAuditLog = false;
        this.isSelected = true;
        this.hideFetch = false;
        this.hideSubmit = false;
        this.fieldValueData = [];
        this.showFieldNoValue = 1;
        this.xmlLength = [];
        this.temparray = [];
        this.tempArrayList = [];
        this.tempArrayList2 = [];
        this.rulemapping = new MdmtMessageMapping();
        this.rulemappingDest = new MdmtMessageMapping();
        this.mappingObj = new MdmtMessageMapping();
        this.messageBasisIso = [];
        this.destinationData = [];
        this.sourceData = [];
        this.ruleDto = new ruleMapDto();
        this.afterSubmit = false;
        this.submit = true;
        this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
        this.formTouched = true;
        this.showDialog = false;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    }
    ngOnInit() {
        this.currentUser = localStorage.getItem('userFromLogin');
        this.ruleMappingForm = this.formBuilder.group({
            systemCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            destinationSystems: this.getDestinationItem(),
            rulemappingDetail: this.formBuilder.array([]),
        });
        this.addRuleDetail();
        this.gettingExternalsystem();
        this.fetchingIso();
        this.roleService.fetchScreenPermissions('Rule Mapping');
        this.roleService.screenLabelList.subscribe(message => this.roleCodes = message);
        setTimeout(() => {
            console.log(this.roleCodes);
        }, 100);
    }
    getDestinationItem() {
        return this.formBuilder.group({
            systemCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        });
    }
    canExit() {
        let isExit = false;
        if (this.ruleMappingForm.touched && this.formTouched == true) {
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
                if (this.currentUser == this.addSysRespData.creatorId) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire(`Maker cannot ${operationType} the record!`);
                }
                else {
                    let payloadObj = {};
                    payloadObj = this.ruleMappingDataForPayload;
                    payloadObj.msgMappingDetails = this.rulemappingDetail;
                    this.rulemap.editRuleMapping(operation, this.currentUser, payloadObj).subscribe((resp) => {
                        this.addSysRespData = resp;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: `Record is ${message}` });
                    });
                }
            }
        }));
    }
    deleteRuleMapping() {
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
                this.rulemap.ondeleteMapping(this.addSysRespData.mappingId, this.currentUser).subscribe((resp) => {
                    if (resp) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            title: 'Record is Deleted',
                            confirmButtonText: 'Ok'
                        }).then((result) => {
                            if (result) {
                                this.router.navigateByUrl('/rule-mapping/summary');
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
    editValues() {
        this.hideFetch = true;
        this.hideSubmit = true;
        this.submit = true;
        this.ruleMappingForm.enable();
    }
    auditLog() {
        if (this.addSysRespData.authStatus == 'U' || this.addSysRespData.authStatus == 'Unauthorized') {
            this.addSysRespData.authStatus = 'UNAUTHORIZED';
        }
        if (this.addSysRespData.authStatus == 'A' || this.addSysRespData.authStatus == 'Authorized') {
            this.addSysRespData.authStatus = 'AUTHORIZED';
        }
        if (this.addSysRespData.recordStatus == 'O' || this.addSysRespData.recordStatus == 'Open') {
            this.addSysRespData.recordStatus = 'OPEN';
        }
        if (this.addSysRespData.recordStatus == 'C' || this.addSysRespData.recordStatus == 'Close') {
            this.addSysRespData.recordStatus = 'CLOSED';
        }
        if (this.addSysRespData.approvedEver == 'N' || this.addSysRespData.approvedEver == 'No') {
            this.addSysRespData.approvedEver = 'NO';
        }
        if (this.addSysRespData.approvedEver == 'Y') {
            this.addSysRespData.approvedEver = 'YES';
        }
    }
    getRuleMappingDetail() {
        return this.formBuilder.group({
            id: [''],
            defaultValue: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            messageMappingId: [''],
            sourceTransDetId: [''],
            targetTransDetId: [''],
            sourceKey: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            destinationKey: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
        });
    }
    indexTracker(index, value) {
        return index;
    }
    get rulemappingDetail() {
        return this.ruleMappingForm.get('rulemappingDetail');
    }
    addRuleDetail() {
        this.rulemappingDetail.push(this.getRuleMappingDetail());
        console.log(this.rulemappingDetail.value);
    }
    deleteRuleMapGroup(index) {
        if (this.tempArrayList[index]) {
            this.tempArrayList.splice(index, 1);
        }
        if (this.tempArrayList2[index]) {
            this.tempArrayList2.splice(index, 1);
        }
        this.rulemappingDetail.removeAt(index);
    }
    gettingExternalsystem() {
        this.rulemap.gettingExternalsystem().subscribe(extSysResp => {
            console.log(extSysResp);
            this.externalSystem = extSysResp.sort();
            this.sourcesysdata = this.externalSystem;
            this.temparray = this.externalSystem;
        }, (err) => {
            console.log("err", err);
        });
    }
    fetchDestination() {
        console.log(this.rulemapping);
        console.log("Mapping", this.ruleMappingForm.value);
        this.disableFetchBtn = true;
        this.showfetchAll = true;
        this.showDestination = true;
        this.showSource = true;
    }
    onFieldNameChange(event) {
        console.log(event.value);
        let value = event.value;
        if (event.value) {
            var item = this.sourceIsoResp.find(element => element.fieldValue == value);
            console.log(item);
            this.showFieldNoValue = item.fieldNo;
            console.log("ssss", this.showFieldNoValue);
        }
    }
    fetchingIso() {
        this.addSystem.fetchingIsoForTcp().subscribe(isoResp => {
            console.log("iss", isoResp);
            this.isoRespData = isoResp;
            // this.fieldNoData=isoResp;
            this.messageBasisIso = isoResp.map((data) => {
                return data.messageBasis;
            });
            this.fieldNoData = isoResp.map((data) => {
                return data.messageBasis;
            });
            this.fieldValueData = isoResp.map((data) => {
                return data.messageKey;
            });
        });
    }
    onSourseSelection(event) {
        console.log(event);
        this.sourseSys = event;
        this.showSource = false;
        this.showDestination = false;
        this.rulemap.gettingTranslationData(this.sourseSys).subscribe(resp => {
            console.log(resp);
            if (resp != null) {
                this.showfetchAll = false;
                this.rulemapping = resp;
                this.sourcesysdata = resp;
                console.log("RuleMapping Res::", this.rulemapping);
                this.ruleMappingForm.patchValue(this.rulemapping);
                this.gettingoperationAandserv(resp.systemCode, resp.messageType);
                this.rulemapping.sourceTranslationId = resp.transId;
                // this.rulemappingDetail=resp.msgTransDetails;
                resp.msgTransDetails.map(el => {
                    this.sourceTransDetId = el.translationId;
                });
            }
            else {
                this.showfetchAll = true;
            }
        }, (err) => {
            this.showfetchAll = true;
        });
        this.externalSystem = this.temparray;
    }
    onsearchingTablName(event) {
        console.log(event.target.value);
        console.log("this is arr", this.sourcesysdata);
        if (this.sourcesysdata) {
            let data = this.sourcesysdata.filter(function (e) {
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
    onSelectionOFMessageType(event) {
        console.log("e", event);
        this.showSource = false;
        this.showDestination = false;
        this.gettingoperationAandserv(this.sourseSys, event.value);
    }
    gettingoperationAandserv(system, msgtype) {
        console.log(system);
        this.rulemap.gettingoperationAndService(system, msgtype, this.currentUser).subscribe(sourceResp => {
            console.log(sourceResp);
            this.showfetchAll = false;
            this.sourceoperation = sourceResp.OPERATION;
            this.sourceService = sourceResp.SERVICE;
            this.sourceData = sourceResp.MdmtSystemService;
            this.sourceLabel = sourceResp.MdmtSystemChannel[0].messageChannel;
            if (this.sourceLabel == 'DB Connection') {
                for (let index = 0; index < this.sourceData.length; index++) {
                    this.sourceData[index].messageKey = this.sourceData[index].messageKey.split(",");
                }
            }
            if (this.sourceLabel == 'Https/Http') {
                this.matlabelSource1 = "Tag";
                this.matlabelSource2 = null;
            }
            if (this.sourceLabel == 'TCP/IP') {
                this.matlabelSource1 = "Filed No";
                this.matlabelSource2 = "Filed Name";
            }
            // this.translationData=translationResp;
        }, (err => {
            console.log(err);
            // Swal.fire({ text: 'External system data not present.' });
            this.showfetchAll = true;
        }));
    }
    ondestinationSource(event) {
        console.log(event.value);
        this.showSource = false;
        this.showDestination = false;
        this.destinationSource = event;
        this.rulemap.gettingTranslationData(this.destinationSource).subscribe(resp => {
            console.log(resp);
            if (resp != null) {
                this.showfetchAll = false;
                this.rulemappingDest = resp;
                this.rulemapping.targetTranslationId = resp.transId;
                this.ruleMappingForm.get('destinationSystems').patchValue(this.rulemappingDest);
                resp.msgTransDetails.map(el => {
                    this.targetTransDetId = el.translationId;
                });
                this.gettingmsgTypeAndDestination(resp.systemCode, resp.messageType);
            }
            else {
                this.showfetchAll = true;
            }
        }, (err) => {
            this.showfetchAll = true;
        });
        this.externalSystem = this.temparray;
    }
    msgTypeOfDestination(event) {
        console.log(event.value);
        this.showDestination = false;
        this.showSource = false;
        this.gettingmsgTypeAndDestination(this.destinationSource, event.value);
    }
    gettingmsgTypeAndDestination(destinationSource, msgtype) {
        this.rulemap.gettingoperationAndService(destinationSource, msgtype, this.currentUser).subscribe(destinationResp => {
            console.log(destinationResp);
            this.showfetchAll = false;
            this.destinationOperation = destinationResp.OPERATION;
            this.destinationService = destinationResp.SERVICE;
            this.destinationData = destinationResp.MdmtSystemService;
            this.labelsDestination = destinationResp.MdmtSystemChannel[0].messageChannel;
            if (this.labelsDestination == 'Https/Http') {
                this.matLabel = "Tag";
                this.matLabel2 = null;
            }
            else if (this.labelsDestination == 'TCP/IP') {
                this.matLabel = "Filed No";
                this.matLabel2 = "Filed Name";
            }
            // this.rulemappingData=[...this.sourceData,...this.destinationData]
            console.log(this.rulemappingData);
            // this.translationData=translationResp;
        }, (err => {
            console.log(err);
            // Swal.fire({ text: 'External system data not present.' });
            this.showfetchAll = true;
        }));
    }
    onReset() {
        this.disableSubmitBtn = false;
        this.ruleMappingForm.reset();
    }
    try(value) {
        if (this.tempArrayList.find(item => item == value)) {
            return true;
        }
        else {
            return false;
        }
    }
    try2(value) {
        if (this.tempArrayList2.find(item => item == value)) {
            return true;
        }
        else {
            return false;
        }
    }
    onselectOfFieldNo(event, i) {
        console.log(event.target.value);
        console.log(this.tempArrayList[i]);
        if (this.tempArrayList[i]) {
            this.tempArrayList[i] = event.target.value;
        }
        else {
            this.tempArrayList.push(event.target.value);
        }
    }
    onselectOfFieldNo2(event, i) {
        console.log(event.target.value);
        console.log(this.tempArrayList2[i]);
        if (this.tempArrayList2[i]) {
            this.tempArrayList2[i] = event.target.value;
        }
        else {
            this.tempArrayList2.push(event.target.value);
        }
    }
    onsaveRuleMapping() {
        this.mappingObj.msgMappingDetails = this.ruleMappingForm.value.rulemappingDetail;
        this.mappingObj.sourceTranslationId = this.rulemapping.sourceTranslationId;
        this.mappingObj.targetTranslationId = this.rulemapping.targetTranslationId;
        this.mappingObj.creatorId = this.currentUser.replace(/['"]+/g, '');
        if (this.mappingId) {
            this.mappingObj.mappingId = this.mappingId;
            this.mappingObj.createdTime = this.addSysRespData.createdTime;
            this.mappingObj.approverId = this.addSysRespData.approverId;
            this.mappingObj.approvedTime = this.addSysRespData.approvedTime;
            this.mappingObj.versionNo = this.addSysRespData.versionNo;
            this.mappingObj.approvedStatus = this.addSysRespData.approvedStatus;
            this.mappingObj.approvedEver = this.addSysRespData.approvedEver;
            this.mappingObj.recordStatus = this.addSysRespData.recordStatus;
            this.rulemap.updatingRuleMapping(this.mappingObj, this.currentUser).subscribe((resp) => {
                console.log(resp);
                if (resp) {
                    this.mappingId = resp.mappingId;
                    this.rulemappingDetail.patchValue(resp.msgMappingDetails);
                    this.addSysRespData = resp;
                    this.auditLog();
                    this.showAuditLog = true;
                    this.afterSubmit = true;
                    this.ruleMappingForm.disable();
                    this.disableSubmitBtn = true;
                    this.disableResetBtn = true;
                    this.submit = false;
                    this.formTouched = !this.ruleMappingForm.touched;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Record is Updated",
                        icon: 'success' });
                }
            }, (err) => {
                console.log(err.error.text);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: 'Unable to update the record, server error!',
                    icon: 'error' });
            });
        }
        else {
            this.rulemap.submittingruleMapping(this.mappingObj, this.currentUser).subscribe((resp) => {
                console.log(resp);
                if (resp) {
                    this.mappingId = resp.mappingId;
                    this.rulemappingDetail.patchValue(resp.msgMappingDetails);
                    this.addSysRespData = resp;
                    this.auditLog();
                    this.showAuditLog = true;
                    this.afterSubmit = true;
                    this.ruleMappingForm.disable();
                    this.disableSubmitBtn = true;
                    this.disableResetBtn = true;
                    this.submit = false;
                    this.formTouched = !this.ruleMappingForm.touched;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Record is Created",
                        icon: 'success' });
                }
            }, (err) => {
                console.log(err.error.text);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: 'Rule mapping data already present for source and destination systems.', icon: 'error' });
            });
        }
    }
}
RuleMappingCreateComponent.ɵfac = function RuleMappingCreateComponent_Factory(t) { return new (t || RuleMappingCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_6__.CanDeactivateGuard)); };
RuleMappingCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: RuleMappingCreateComponent, selectors: [["npr-rule-mapping-create"]], decls: 95, vars: 15, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["novalidate", "", 1, "formStyle", 3, "formGroup"], [3, "disabled"], [1, "dbCardStyle"], [1, "addformCol"], [1, "row", "g-4", "align-items-center"], [1, "col"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-3"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["formControlName", "systemCode", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], [3, "value", "hidden", 4, "ngFor", "ngForOf"], ["formControlName", "messageType", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", "I"], ["value", "O"], ["type", "text", "id", "ruleName", "name", "serviceNameS", "placeholder", "Service Name", "formControlName", "serviceName", "readonly", "", 1, "form-control"], ["type", "text", "id", "ruleName", "formControlName", "operationName", "name", "operationNameS", "placeholder", "Operation Name", "readonly", "", 1, "form-control"], ["formGroupName", "destinationSystems"], ["type", "text", "id", "ruleName", "name", "serviceNameD", "placeholder", "Service Name", "formControlName", "serviceName", "readonly", "", 1, "form-control"], ["type", "text", "id", "ruleName", "name", "operationNameD", "placeholder", "Service Name", "formControlName", "operationName", "readonly", "", 1, "form-control"], [1, "btn", "minWdSmBtn", "btnPrimary", 3, "click"], ["class", "dbCardStyle", 4, "ngIf"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], ["class", "col-auto", 3, "hidden", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "hidden", "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle mt-20", 4, "ngIf"], [3, "value", "hidden"], ["formArrayName", "rulemappingDetail", 1, "addformCol"], [4, "ngFor", "ngForOf"], [1, "row", "g-3", "pt-4"], ["class", "addIcon primarybg", 3, "click", 4, "ngIf"], [3, "formGroupName"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "roleName", "class", "formLbl", 4, "ngIf"], [1, "col-lg-12"], [4, "ngIf"], ["for", "defaultValue", "class", "formLbl", 4, "ngIf"], ["type", "text", "id", "defaultVal", "formControlName", "defaultValue", "placeholder", "Default value", 1, "form-control", "path"], ["class", "deleteIcon2", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["formControlName", "sourceKey", "aria-label", "Default select example", 1, "form-select", 3, "change"], [3, "hidden", "value", 4, "ngFor", "ngForOf"], [3, "hidden", "value"], ["formControlName", "destinationKey", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["for", "defaultValue", 1, "formLbl"], [1, "deleteIcon2", 2, "cursor", "pointer", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "...", 1, "image"], [1, "addIcon", "primarybg", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "col-auto", 3, "hidden"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "dbCardStyle", "mt-20"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]], template: function RuleMappingCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Rule Mapping ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "fieldset", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Source System");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ng-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_Template_ng_select_change_16_listener($event) { return ctx.onSourseSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "--Please select--");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, RuleMappingCreateComponent_ng_option_19_Template, 2, 3, "ng-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Message Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_Template_select_change_25_listener($event) { return ctx.onSelectionOFMessageType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "--Please select--");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " Incoming ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, " Outgoing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Service Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Operation Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](44, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Destination System");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "ng-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_Template_ng_select_change_50_listener($event) { return ctx.ondestinationSource($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "ng-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "--Please select--");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, RuleMappingCreateComponent_ng_option_53_Template, 2, 3, "ng-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Message Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_Template_select_change_59_listener($event) { return ctx.msgTypeOfDestination($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "--Please select--");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, " Incoming ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, " Outgoing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "Service Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "Operation Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](77, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_Template_button_click_79_listener() { return ctx.fetchDestination(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, " Fetch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, RuleMappingCreateComponent_div_81_Template, 6, 2, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](83, RuleMappingCreateComponent_div_83_Template, 3, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_Template_button_click_85_listener() { return ctx.onsaveRuleMapping(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](87, RuleMappingCreateComponent_div_87_Template, 3, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](88, RuleMappingCreateComponent_div_88_Template, 3, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](89, RuleMappingCreateComponent_div_89_Template, 3, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](90, RuleMappingCreateComponent_div_90_Template, 3, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](94, RuleMappingCreateComponent_div_94_Template, 100, 14, "div", 31);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.ruleMappingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.submit);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.externalSystem);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.externalSystem);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showSource || ctx.showDestination);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !((ctx.addSysRespData == null ? null : ctx.addSysRespData.recordStatus) == "O" || (ctx.addSysRespData == null ? null : ctx.addSysRespData.recordStatus) == "OPEN") && ctx.roleCodes.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !ctx.submit)("disabled", ctx.ruleMappingForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedStatus) == "U" || (ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedStatus) == "UNAUTHORIZED") && ctx.roleCodes.auth);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((ctx.addSysRespData == null ? null : ctx.addSysRespData.recordStatus) == "O" || (ctx.addSysRespData == null ? null : ctx.addSysRespData.recordStatus) == "OPEN") && ((ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedEver) != "NO" && (ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedEver) != "N") && ctx.roleCodes.close);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((ctx.addSysRespData == null ? null : ctx.addSysRespData.recordStatus) == "C" || (ctx.addSysRespData == null ? null : ctx.addSysRespData.recordStatus) == "CLOSED") && ((ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedEver) != "NO" && (ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedEver) != "N") && ctx.roleCodes.reopen);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedEver) == "NO" || (ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedEver) == "N") && ctx.roleCodes.delete);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.submit);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], styles: [".m-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.path[_ngcontent-%COMP%] {\n  vertical-align: top;\n  margin-top: 10px;\n  margin-bottom: 100px;\n  min-width: 120px;\n  border-spacing: 1.5;\n}\n\n.image[_ngcontent-%COMP%] {\n  vertical-align: top;\n  margin-top: -16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUtbWFwcGluZy1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBRUEsZ0JBQUE7RUFFQSxtQkFBQTtBQUFKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InJ1bGUtbWFwcGluZy1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubS0xMHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHhcclxufVxyXG4ucGF0aHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgIC8vIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgIC8vd2lkdGg6IDUwcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMS41O1xyXG59XHJcbi5pbWFnZXtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTZweDtcclxuICAgIFxyXG59Il19 */"] });
class MdmtMessageMapping {
}
class MdmtMessageMappingDet {
}
class ruleMapDto {
}


/***/ }),

/***/ 50531:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/rule-mapping/rule-mapping-details/rule-mapping-details.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleMappingDetailsComponent": function() { return /* binding */ RuleMappingDetailsComponent; },
/* harmony export */   "MdmtMessageMapping": function() { return /* binding */ MdmtMessageMapping; },
/* harmony export */   "MdmtMessageMappingDet": function() { return /* binding */ MdmtMessageMappingDet; },
/* harmony export */   "ruleMapDto": function() { return /* binding */ ruleMapDto; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/fmosNewRolePermissions */ 35383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/rule.service */ 50511);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/add-system.service */ 91973);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);












function RuleMappingDetailsComponent_div_80_ng_container_3_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Source System");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Field No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", tag_r21.messageBasis);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", tag_r21.messageKey, " ", tag_r21.messageBasis, " ");
} }
function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_label_1_Template, 2, 0, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_option_3_Template, 2, 3, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r11.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r11.sourceData);
} }
function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", tag_r25.messageBasis);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tag_r25.messageKey, " ");
} }
function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_label_1_Template, 2, 0, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_option_3_Template, 2, 2, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r12.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r12.sourceData);
} }
function RuleMappingDetailsComponent_div_80_ng_container_3_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Destination system");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_15_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Field No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_15_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fname_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", fname_r29.messageBasis);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", fname_r29.messageKey, " ", fname_r29.messageBasis, "");
} }
function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_15_label_1_Template, 2, 0, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_15_option_3_Template, 2, 3, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r14.destinationData);
} }
function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_16_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_16_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fname_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", fname_r34.messageBasis);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", fname_r34.messageKey, " ");
} }
function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_16_label_1_Template, 2, 0, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_16_option_3_Template, 2, 2, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r15.destinationData);
} }
function RuleMappingDetailsComponent_div_80_ng_container_3_label_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Default value");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RuleMappingDetailsComponent_div_80_ng_container_3_label_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "label", 71);
} }
function RuleMappingDetailsComponent_div_80_ng_container_3_a_25_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_ng_container_3_a_25_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39); const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r37.deleteRuleMapGroup(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "margin-top": a0 }; };
function RuleMappingDetailsComponent_div_80_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](1, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RuleMappingDetailsComponent_div_80_ng_container_3_label_6_Template, 2, 0, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_Template, 4, 3, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_Template, 4, 3, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, RuleMappingDetailsComponent_div_80_ng_container_3_label_12_Template, 2, 0, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_15_Template, 4, 2, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_16_Template, 4, 2, "ng-container", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, RuleMappingDetailsComponent_div_80_ng_container_3_label_18_Template, 2, 0, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, RuleMappingDetailsComponent_div_80_ng_container_3_label_21_Template, 1, 0, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, RuleMappingDetailsComponent_div_80_ng_container_3_a_25_Template, 2, 0, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroupName", i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.sourceLabel == "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.sourceLabel == "Https/Http");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.labelsDestination == "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.labelsDestination == "Https/Http");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r1.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r1.hideFetch)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](13, _c0, i_r9 === 0 ? "50px" : "10px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.submit);
} }
function RuleMappingDetailsComponent_div_80_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r40.addRuleDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r2.hideFetch);
} }
function RuleMappingDetailsComponent_div_80_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r42.editValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r3.hideFetch);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.roleCodes.edit.labelDescription, " ");
} }
function RuleMappingDetailsComponent_div_80_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_div_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r44.onAuthOfRuleMapping(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r4.hideFetch);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.roleCodes.auth.labelDescription);
} }
function RuleMappingDetailsComponent_div_80_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_div_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r46.onCloseOfRuleMapping(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r5.hideFetch);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.roleCodes.close.labelDescription);
} }
function RuleMappingDetailsComponent_div_80_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_div_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r48.onOpenRuleMapping(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r6.hideFetch);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.roleCodes.reopen.labelDescription);
} }
function RuleMappingDetailsComponent_div_80_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_div_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r50.deleteRuleMapping(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r7.hideFetch);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.roleCodes.delete.labelDescription);
} }
function RuleMappingDetailsComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "fieldset", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_Template, 27, 15, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RuleMappingDetailsComponent_div_80_a_6_Template, 3, 1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r52.onsaveRuleMapping(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, RuleMappingDetailsComponent_div_80_div_11_Template, 3, 2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, RuleMappingDetailsComponent_div_80_div_12_Template, 3, 2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, RuleMappingDetailsComponent_div_80_div_13_Template, 3, 2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, RuleMappingDetailsComponent_div_80_div_14_Template, 3, 2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, RuleMappingDetailsComponent_div_80_div_15_Template, 3, 2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.rulemappingDetails.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r0.hideSubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.addSysRespData.recordStatus == "O" || ctx_r0.addSysRespData.recordStatus == "OPEN") && ctx_r0.roleCodes.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.addSysRespData.approvedStatus == "U" || ctx_r0.addSysRespData.approvedStatus == "UNAUTHORIZED") && ctx_r0.roleCodes.auth);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.addSysRespData.recordStatus == "O" || ctx_r0.addSysRespData.recordStatus == "OPEN") && (ctx_r0.addSysRespData.approvedEver != "NO" && ctx_r0.addSysRespData.approvedEver != "N") && ctx_r0.roleCodes.close);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.addSysRespData.recordStatus == "C" || ctx_r0.addSysRespData.recordStatus == "CLOSED") && (ctx_r0.addSysRespData.approvedEver != "NO" && ctx_r0.addSysRespData.approvedEver != "N") && ctx_r0.roleCodes.reopen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.addSysRespData.approvedEver == "NO" || (ctx_r0.addSysRespData == null ? null : ctx_r0.addSysRespData.approvedEver) == "N") && ctx_r0.roleCodes.delete);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", "/rule-mapping/summary");
} }
class RuleMappingDetailsComponent {
    constructor(rulemap, roleService, router, _location, _route, addSystem, toastService, cdr, formBuilder) {
        this.rulemap = rulemap;
        this.roleService = roleService;
        this.router = router;
        this._location = _location;
        this._route = _route;
        this.addSystem = addSystem;
        this.toastService = toastService;
        this.cdr = cdr;
        this.formBuilder = formBuilder;
        this.fieldNoData = [];
        this.disableFetchBtn = false;
        this.disableSubmitBtn = false;
        this.deleted = false;
        this.disableFields = false;
        this.authorizeDone = false;
        this.fieldValueData = [];
        this.showFieldNoValue = 1;
        this.xmlLength = [];
        this.rulemapping = new MdmtMessageMapping();
        this.rulemappingdest = new MdmtMessageMapping();
        this.isSelected = true;
        this.rulemappingDetail = [];
        this.destinationData = [];
        this.sourceData = [];
        this.ruleDto = new ruleMapDto();
        this.submit = true;
        this.hideFetch = false;
        this.hideSubmit = false;
        this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();
        this.formTouched = true;
        this.showDialog = false;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    }
    ngOnInit() {
        this.currentUser = localStorage.getItem('userFromLogin');
        this.ruleMappingForm = this.formBuilder.group({
            systemCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            destinationSystems: this.getDestinationItem(),
            rulemappingDetails: this.formBuilder.array([]),
        });
        this.navSubscription = this.addSystem.getNavParam.subscribe((data) => this.editruleMappingResp = data);
        console.log("Response ??", this.editruleMappingResp);
        this.ruleMappingDataForPayload = this.editruleMappingResp["responseData"];
        if (this.editruleMappingResp && Object.keys(this.editruleMappingResp).length === 0 && Object.getPrototypeOf(this.editruleMappingResp) === Object.prototype) {
            this._location.back();
        }
        else {
            this.addSysRespData = this.ruleMappingDataForPayload;
            this.auditLog();
            this.rulemapping.sourceTranslationId = this.editruleMappingResp["sourceTransDetId"];
            if (this.rulemapping.sourceTranslationId) {
                this.gettingTranslationData(this.rulemapping.sourceTranslationId);
            }
            this.rulemapping.targetTranslationId = this.editruleMappingResp["targetTransDetId"];
            if (this.rulemapping.targetTranslationId) {
                this.gettingTranslationDataForDest(this.rulemapping.targetTranslationId);
            }
            if (this.addSysRespData.recordStatus == "C") {
                console.log(this.addSysRespData.recordStatus);
                this.reopenBtn = false;
                this.authBtnHide = true;
            }
            this.rulemappingDetail = this.ruleMappingDataForPayload.msgMappingDetails;
            for (let index = 0; index < this.rulemappingDetail.length; index++) {
                this.addRuleDetail();
                const item = this.rulemappingDetail[index];
                this.rulemappingDetails.at(index).patchValue(item);
            }
            console.log("from sum", this.ruleMappingDataForPayload);
            this.gettingExternalsystem();
            this.fetchingIso();
        }
        this.roleService.fetchScreenPermissions('Rule Mapping');
        this.roleService.screenLabelList.subscribe(message => this.roleCodes = message);
        setTimeout(() => {
            console.log(this.roleCodes);
        }, 100);
        this.ruleMappingForm.disable();
    }
    getDestinationItem() {
        return this.formBuilder.group({
            systemCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        });
    }
    auditLog() {
        if (this.addSysRespData.authStatus == 'U' || this.addSysRespData.authStatus == 'Unauthorized') {
            this.addSysRespData.authStatus = 'UNAUTHORIZED';
        }
        if (this.addSysRespData.authStatus == 'A' || this.addSysRespData.authStatus == 'Authorized') {
            this.addSysRespData.authStatus = 'AUTHORIZED';
        }
        if (this.addSysRespData.recordStatus == 'O' || this.addSysRespData.recordStatus == 'Open') {
            this.addSysRespData.recordStatus = 'OPEN';
        }
        if (this.addSysRespData.recordStatus == 'C' || this.addSysRespData.recordStatus == 'Close') {
            this.addSysRespData.recordStatus = 'CLOSED';
        }
        if (this.addSysRespData.approvedEver == 'N' || this.addSysRespData.approvedEver == 'No') {
            this.addSysRespData.approvedEver = 'NO';
        }
        if (this.addSysRespData.approvedEver == 'Y') {
            this.addSysRespData.approvedEver = 'YES';
        }
    }
    canExit() {
        let isExit = false;
        if (this.ruleMappingForm.touched && this.formTouched == true) {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
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
    getRuleMappingDetails() {
        return this.formBuilder.group({
            id: [''],
            defaultValue: [''],
            messageMappingId: [''],
            sourceTransDetId: [''],
            targetTransDetId: [''],
            sourceKey: [''],
            destinationKey: ['']
        });
    }
    indexTracker(index, value) {
        return index;
    }
    get rulemappingDetails() {
        return this.ruleMappingForm.get('rulemappingDetails');
    }
    addRuleDetail() {
        this.rulemappingDetails.push(this.getRuleMappingDetails());
        console.log(this.rulemappingDetails.value);
    }
    deleteRuleMapGroup(index) {
        this.rulemappingDetails.removeAt(index);
    }
    gettingExternalsystem() {
        this.rulemap.gettingExternalsystem().subscribe(extSysResp => {
            console.log("extSysResp", extSysResp);
            this.externalSystem = extSysResp;
        }, (err) => {
            console.log("err", err);
        });
    }
    EditFetch() {
        this.editFetch = true;
        console.log("edit");
        if (this.addSysRespData.recordStatus == "C") {
            this.editFetch = false;
            // Swal.fire("Closed record can't be edited.");
            this.toastService.successMessage('Closed record can\'t be edited.', '');
        }
    }
    Edit() {
        console.log("edit");
        if (this.addSysRespData.approvedStatus == "U") {
            this.edit = false;
            // Swal.fire("UnAuthorized record can't be  edited.");
            this.toastService.successMessage('UnAuthorized record can\'t be  edited', '');
        }
        if (this.addSysRespData.recordStatus == "C") {
            this.edit = false;
            // Swal.fire("Closed record can't be edited.");
            this.toastService.successMessage('Closed record can\'t be edited.', '');
        }
        this.edit = true;
    }
    gettingTranslationData(sourseSys) {
        this.sourseSys = sourseSys;
        this.rulemap.gettingTranslationData(this.sourseSys).subscribe(resp => {
            console.log("trans ?", resp);
            this.rulemapping = resp;
            this.ruleMappingForm.patchValue(resp);
            this.gettingoperationAandserv(resp.systemCode, resp.messageType);
            this.rulemapping.sourceTranslationId = resp.systemCode;
        });
        this.fetchDestination();
    }
    gettingTranslationDataForDest(destSys) {
        this.rulemap.gettingTranslationData(destSys).subscribe(resp => {
            console.log("Dset", resp);
            this.rulemappingdest = resp;
            this.ruleMappingForm.get('destinationSystems').patchValue(resp);
            this.gettingmsgTypeAndDestination(resp.systemCode, resp.messageType);
            this.rulemappingdest.targetTranslationId = resp.systemCode;
        });
    }
    onAuthOfRuleMapping() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
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
                if (this.currentUser == this.addSysRespData.creatorId) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Maker cannot authorize the record!');
                    // this.toastService.successMessage('Maker cannot authorize!', '');
                }
                else {
                    let payloadObj = {};
                    console.log(this.ruleMappingDataForPayload);
                    payloadObj = this.ruleMappingDataForPayload;
                    payloadObj.msgMappingDetails = this.rulemappingDetail;
                    console.log(payloadObj);
                    if (payloadObj.recordStatus == 'OPEN') {
                        payloadObj.recordStatus = 'O';
                    }
                    if (payloadObj.recordStatus == 'CLOSE') {
                        payloadObj.recordStatus = 'C';
                    }
                    console.log(payloadObj);
                    this.rulemap.editRuleMapping("auth", this.currentUser, payloadObj).subscribe((resp) => {
                        this.authorizeDone = true;
                        this.addSysRespData = resp;
                        this.auditLog();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: 'Record is Authorized' });
                        // this.toastService.successMessage('Record Authorized!', '');
                    });
                }
            }
        }));
    }
    onCloseOfRuleMapping() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
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
                let payloadObj = {};
                payloadObj = this.ruleMappingDataForPayload;
                payloadObj.msgMappingDetails = this.rulemappingDetail;
                this.rulemap.editRuleMapping("close", this.currentUser, payloadObj).subscribe((resp) => {
                    this.addSysRespData = resp;
                    this.auditLog();
                    this.editBtn = true;
                    this.authBtn = true;
                    this.deleted = false;
                    this.reopenBtn = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: 'Record is  Closed', icon: 'success' });
                    // this.toastService.successMessage('Record is Closed', '');
                });
            }
        }));
    }
    onOpenRuleMapping() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
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
                let payloadObj = {};
                payloadObj = this.ruleMappingDataForPayload;
                payloadObj.msgMappingDetails = this.rulemappingDetail;
                this.rulemap.editRuleMapping("open", this.currentUser, payloadObj).subscribe((resp) => {
                    this.addSysRespData = resp;
                    this.auditLog();
                    this.authBtnHide = false;
                    this.editBtn = false;
                    this.authBtn = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: 'Record is Opened', icon: 'success' });
                    // this.toastService.successMessage('Record Opened!', '');
                });
            }
        }));
    }
    deleteRuleMapping() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
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
            if (result) {
                this.router.navigateByUrl('/rule-mapping/summary');
            }
            if (result.isConfirmed === true) {
                this.rulemap.ondeleteMapping(this.addSysRespData.mappingId, this.currentUser).subscribe((resp) => {
                    if (resp) {
                        this.deleted = true;
                        this.editBtn = true;
                        this.authBtn = true;
                        this.closeBtn = true;
                        // this.toastService.successMessage('Deleted Successfully!', '');
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                            title: 'Record is Deleted',
                            confirmButtonText: 'Ok'
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("Failed to delete the reocrd");
                    }
                });
            }
        }));
    }
    fetchDestination() {
        console.log(this.rulemapping);
        console.log("Rule ,apping", this.ruleMappingForm);
        this.disableFetchBtn = true;
        this.showDestination = true;
        this.showSource = true;
    }
    onFieldNameChange(event) {
        console.log(event.value);
        let value = event.value;
        if (event.value) {
            var item = this.sourceIsoResp.find(element => element.fieldValue == value);
            console.log(item);
            this.showFieldNoValue = item.fieldNo;
            console.log("ssss", this.showFieldNoValue);
        }
    }
    editValues() {
        this.hideFetch = true;
        this.hideSubmit = true;
        this.ruleMappingForm.enable();
        // this.editFlag=false;
        // this.authBtn=false;
        // this.openBtn=false;
        // this.closeBtn=false;
    }
    onSubmittingRuleMapping() {
        console.log("submit");
    }
    fetchingIso() {
        this.addSystem.fetchingIsoForTcp().subscribe(isoResp => {
            console.log("iss", isoResp);
            this.isoRespData = isoResp;
            // this.fieldNoData=isoResp;
            this.messageBasisIso = isoResp.map((data) => {
                return data.messageBasis;
            });
            this.fieldNoData = isoResp.map((data) => {
                return data.messageBasis;
            });
            this.fieldValueData = isoResp.map((data) => {
                return data.messageKey;
            });
        });
    }
    onSourseSelection(event) {
        console.log(event);
        this.sourseSys = event.value;
    }
    onSelectionOFMessageType(source, event) {
        console.log("e", event);
        this.sourseSys = source;
        this.gettingoperationAandserv(this.sourseSys, event.value);
    }
    gettingoperationAandserv(system, msgtype) {
        console.log(system);
        this.rulemap.gettingoperationAndService(system, msgtype, this.currentUser).subscribe(sourceResp => {
            console.log("sourceResp", sourceResp);
            this.sourceoperation = sourceResp.OPERATION;
            this.sourceService = sourceResp.SERVICE;
            this.sourceData = sourceResp.MdmtSystemService;
            this.sourceLabel = sourceResp.MdmtSystemChannel[0].messageChannel;
            console.log(this.sourceLabel);
            if (this.sourceLabel == 'Https/Http') {
                this.matlabelSource1 = "Node";
                this.matlabelSource2 = "TagName";
            }
            if (this.sourceLabel == 'TCP/IP') {
                this.matlabelSource1 = "Filed No";
                this.matlabelSource2 = "Filed Name";
            }
            // this.translationData=translationResp;
        }, (err => {
            console.log(err);
        }));
    }
    ondestinationSource(event) {
        console.log(event.value);
        this.destinationSource = event.value;
    }
    msgTypeOfDestination(event) {
        console.log(event.value);
        this.gettingmsgTypeAndDestination(this.destinationSource, event.value);
    }
    gettingmsgTypeAndDestination(destinationSource, msgtype) {
        this.rulemap.gettingoperationAndService(destinationSource, msgtype, this.currentUser).subscribe(destinationResp => {
            console.log("destinationResp", destinationResp);
            this.destinationOperation = destinationResp.OPERATION;
            this.destinationService = destinationResp.SERVICE;
            this.destinationData = destinationResp.MdmtSystemService;
            this.labelsDestination = destinationResp.MdmtSystemChannel[0].messageChannel;
            console.log(this.labelsDestination);
            if (this.labelsDestination == 'Https/Http') {
                this.matLabel = "Node";
                this.matLabel2 = "Tag Name";
            }
            else if (this.labelsDestination == 'TCP/IP') {
                this.matLabel = "Filed No";
                this.matLabel2 = "Filed Name";
            }
            // this.rulemappingData=[...this.sourceData,...this.destinationData]
            console.log(this.rulemappingData);
            // this.translationData=translationResp;
        }, (err => {
            console.log(err);
        }));
    }
    onSelectingMessageBasis(event) {
        console.log("option for fieldno", event.value);
        console.log(event.value);
        var x = this.isoRespData.find(item => item.messageBasis == event.value);
        this.isoRespData.forEach((data) => {
            data.messageKey = x.messageKey;
            this.tagName = data.messageKey;
            data.dataType = x.dataType;
        });
    }
    onsaveRuleMapping() {
        let payloadObj = {};
        payloadObj = this.ruleMappingDataForPayload;
        payloadObj.creatorId = this.currentUser;
        payloadObj.msgMappingDetails = this.rulemappingDetails.value;
        this.rulemap.updatingRuleMapping(payloadObj, this.currentUser).subscribe(resp => {
            console.log(resp);
            if (resp) {
                this.addSysRespData = resp;
                this.auditLog();
                this.disableSubmitBtn = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: 'Record is Updated',
                    icon: 'success' });
                this.submit = false;
                this.hideFetch = false;
                this.formTouched = !this.ruleMappingForm.touched;
            }
        }, (err) => {
            console.log(err.error.text);
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: 'Unable to update the record, server error!',
                icon: 'error' });
        });
    }
}
RuleMappingDetailsComponent.ɵfac = function RuleMappingDetailsComponent_Factory(t) { return new (t || RuleMappingDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder)); };
RuleMappingDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: RuleMappingDetailsComponent, selectors: [["npr-rule-mapping-details"]], decls: 181, vars: 23, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "formStyle", 3, "formGroup"], [3, "disabled"], [1, "dbCardStyle"], [1, "addformCol"], [1, "row", "g-4", "align-items-center"], [1, "col"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-3"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["type", "text", "id", "ruleName", "name", "serviceNameS", "placeholder", "Service Name", "formControlName", "systemCode", "readonly", "", 1, "form-control"], ["formControlName", "messageType", "aria-label", "Default select example", 1, "form-select", 3, "disabled", "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["value", "I"], ["value", "O"], ["value", "A"], ["type", "text", "name", "serviceName", "placeholder", "Service Name", "formControlName", "serviceName", 1, "form-control", 3, "disabled"], ["type", "text", "name", "operationName", "placeholder", "Operation Name", "formControlName", "operationName", "readonly", "", 1, "form-control"], ["formGroupName", "destinationSystems"], ["readonly", "", "formControlName", "messageType", "aria-label", "Default select example", 1, "form-select", 3, "disabled", "change"], ["readonly", "", "type", "text", "name", "serviceName", "placeholder", "Service Name", "formControlName", "serviceName", 1, "form-control", 3, "disabled"], ["readonly", "", "type", "text", "name", "operationName", "placeholder", "Operation Name", "formControlName", "operationName", "readonly", "", 1, "form-control"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto", 3, "hidden"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["class", "dbCardStyle", 4, "ngIf"], [1, "dbCardStyle", "mt-20"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "col-auto"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."], ["formArrayName", "rulemappingDetails", 1, "addformCol"], [4, "ngFor", "ngForOf"], [1, "row", "g-3", "pt-4"], ["class", "addIcon primarybg", 3, "hidden", "click", 4, "ngIf"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], ["class", "col-auto", 3, "hidden", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [3, "formGroupName"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "roleName", "class", "formLbl", 4, "ngIf"], [1, "col-lg-12"], [4, "ngIf"], ["for", "defaultValue", "class", "formLbl", 4, "ngIf"], ["type", "text", "id", "defaultVal", "formControlName", "defaultValue", "placeholder", "Default value", 1, "form-control", "path", 3, "disabled"], [3, "hidden", "ngStyle"], ["class", "deleteIcon2", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["formControlName", "sourceKey", "aria-label", "Default select example", 1, "form-select", 3, "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "destinationKey", "aria-label", "Default select example", 1, "form-select"], ["for", "defaultValue", 1, "formLbl"], [1, "deleteIcon2", 2, "cursor", "pointer", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "addIcon", "primarybg", 3, "hidden", "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"]], template: function RuleMappingDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Rule Mapping");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "fieldset", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Source System");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Message Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleMappingDetailsComponent_Template_select_change_22_listener($event) { return ctx.onSelectionOFMessageType(ctx.rulemapping.sourceTranslationId, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "--Please select--");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " Incoming ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Outgoing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Operation");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](43, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Destination System");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Message Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleMappingDetailsComponent_Template_select_change_55_listener($event) { return ctx.msgTypeOfDestination($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "--Please select--");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, " Incoming ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, " Outgoing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](69, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "Operation");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](75, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_Template_button_click_78_listener() { return ctx.fetchDestination(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, " Fetch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, RuleMappingDetailsComponent_div_80_Template, 19, 11, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "Maker");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](100, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "Maker Time Stamp");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](107, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](113, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117, "Record Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](125, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "Checker");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](134, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](137, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](139, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](141, "Checker Time Stamp");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](144, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](146, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](149, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](150, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](152, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](154, "First Time Auth");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](156);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](159, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](162, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](165, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](166, "Auth Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](168);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](169, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](173, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](174, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](175, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](176, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](178, "Modification Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](179, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](180);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.ruleMappingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.disableFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.editFetch);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.editFetch);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.editFetch);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.editFetch);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx.hideFetch);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.disableFetchBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showSource || ctx.showDestination);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.addSysRespData.creatorId);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](107, 17, ctx.addSysRespData.createdTime, "MM/dd/yyyy, h:mm a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.addSysRespData.recordStatus == "O" ? "OPEN" : ctx.addSysRespData.recordStatus == "C" ? "CLOSED" : ctx.addSysRespData.recordStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.addSysRespData.approverId);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](144, 20, ctx.addSysRespData.approvedTime, "MM/dd/yyyy, h:mm a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.addSysRespData.approvedEver == "N" ? "NO" : ctx.addSysRespData.approvedEver == "Y" ? "YES" : ctx.addSysRespData.approvedEver);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.addSysRespData.approvedStatus == "N" || ctx.addSysRespData.approvedStatus == "U" ? "UNAUTHORIZED" : ctx.addSysRespData.approvedStatus == "Y" || ctx.addSysRespData.approvedStatus == "A" ? "AUTHORIZED" : ctx.addSysRespData.approvedStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.addSysRespData.versionNo);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: [".m-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.path[_ngcontent-%COMP%] {\n  vertical-align: top;\n  margin-top: 10px;\n  margin-bottom: 100px;\n  min-width: 120px;\n  border-spacing: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUtbWFwcGluZy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUVBLGdCQUFBO0VBRUEsbUJBQUE7QUFESiIsImZpbGUiOiJydWxlLW1hcHBpbmctZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tLTEwe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweFxyXG59XHJcblxyXG4ucGF0aHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgIC8vIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgIC8vd2lkdGg6IDUwcHg7XHJcbiAgICBib3JkZXItc3BhY2luZzogMS41O1xyXG59Il19 */"] });
class MdmtMessageMapping {
}
class MdmtMessageMappingDet {
}
class ruleMapDto {
}


/***/ }),

/***/ 9216:
/*!*******************************************************************!*\
  !*** ./src/app/views/rule-mapping/rule-mapping-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleMappingRoutingModule": function() { return /* binding */ RuleMappingRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/guards/can-deactivate.guard */ 50215);
/* harmony import */ var _conversion_conversion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversion/conversion.component */ 74982);
/* harmony import */ var _rule_mapping_create_rule_mapping_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rule-mapping-create/rule-mapping-create.component */ 7622);
/* harmony import */ var _rule_mapping_details_rule_mapping_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rule-mapping-details/rule-mapping-details.component */ 50531);
/* harmony import */ var _rule_mapping_rule_mapping_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rule-mapping/rule-mapping.component */ 49);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    {
        path: 'create',
        component: _rule_mapping_create_rule_mapping_create_component__WEBPACK_IMPORTED_MODULE_2__.RuleMappingCreateComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
    }, {
        path: 'edit/:mapId',
        component: _rule_mapping_details_rule_mapping_details_component__WEBPACK_IMPORTED_MODULE_3__.RuleMappingDetailsComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
    }, {
        path: 'summary',
        component: _rule_mapping_rule_mapping_component__WEBPACK_IMPORTED_MODULE_4__.RuleMappingComponent
    },
    {
        path: 'conversion',
        component: _conversion_conversion_component__WEBPACK_IMPORTED_MODULE_1__.ConversionComponent
    }
];
class RuleMappingRoutingModule {
}
RuleMappingRoutingModule.ɵfac = function RuleMappingRoutingModule_Factory(t) { return new (t || RuleMappingRoutingModule)(); };
RuleMappingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RuleMappingRoutingModule });
RuleMappingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RuleMappingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 8690:
/*!***********************************************************!*\
  !*** ./src/app/views/rule-mapping/rule-mapping.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleMappingModule": function() { return /* binding */ RuleMappingModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _rule_mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rule-mapping-routing.module */ 9216);
/* harmony import */ var _rule_mapping_rule_mapping_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rule-mapping/rule-mapping.component */ 49);
/* harmony import */ var _rule_mapping_details_rule_mapping_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rule-mapping-details/rule-mapping-details.component */ 50531);
/* harmony import */ var _rule_mapping_create_rule_mapping_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rule-mapping-create/rule-mapping-create.component */ 7622);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ 50481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _conversion_conversion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conversion/conversion.component */ 74982);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);










class RuleMappingModule {
}
RuleMappingModule.ɵfac = function RuleMappingModule_Factory(t) { return new (t || RuleMappingModule)(); };
RuleMappingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: RuleMappingModule });
RuleMappingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _rule_mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__.RuleMappingRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](RuleMappingModule, { declarations: [_rule_mapping_rule_mapping_component__WEBPACK_IMPORTED_MODULE_1__.RuleMappingComponent,
        _rule_mapping_details_rule_mapping_details_component__WEBPACK_IMPORTED_MODULE_2__.RuleMappingDetailsComponent,
        _rule_mapping_create_rule_mapping_create_component__WEBPACK_IMPORTED_MODULE_3__.RuleMappingCreateComponent,
        _conversion_conversion_component__WEBPACK_IMPORTED_MODULE_5__.ConversionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _rule_mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__.RuleMappingRoutingModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule] }); })();


/***/ }),

/***/ 49:
/*!***************************************************************************!*\
  !*** ./src/app/views/rule-mapping/rule-mapping/rule-mapping.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleMappingComponent": function() { return /* binding */ RuleMappingComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/fmosNewRolePermissions */ 35383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/rule.service */ 50511);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/add-system.service */ 91973);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ 50481);









const _c0 = function () { return ["/rule-mapping/create"]; };
const _c1 = function () { return ["active"]; };
function RuleMappingComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.roleCodes.new.labelDescription);
} }
const _c2 = function () { return ["/rule-mapping/conversion"]; };
function RuleMappingComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RuleMappingComponent_tr_28_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const data_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.getById(data_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Conversion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r3.sourceTranslationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r3.targetTranslationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r3.approvedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r3.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 6, data_r3.createdTime, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c2));
} }
function RuleMappingComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Please wait... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
const _c3 = function () { return ["/dashboard"]; };
class RuleMappingComponent {
    constructor(rulelist, roleService, router, addSystem, cdr) {
        this.rulelist = rulelist;
        this.roleService = roleService;
        this.router = router;
        this.addSystem = addSystem;
        this.cdr = cdr;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.dtOptions = {};
        this.ruleMappingListResp = [];
        this.isLoading = false;
        this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
        this.statusArr = ['Authorized', 'Unauthorized', 'Open', 'Close'];
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            columnDefs: [{ type: 'date', targets: [4] }],
            order: [[4, 'desc']],
            processing: true,
            lengthMenu: [
                [5, 10, 20, -1],
                [5, 10, 20, 30],
            ],
            // columnDefs: [ { type: 'date', 'targets': [5] } ],
            // order: [[5, 'desc']],
        };
        this.fetchinglistRuleMapping();
        this.roleService.fetchScreenPermissions('Rule Mapping');
        this.roleService.screenLabelList.subscribe((message) => (this.roleCodes = message));
        console.log(this.roleCodes);
    }
    fetchinglistRuleMapping() {
        this.isLoading = true;
        this.rulelist.fetchingruleMapping().subscribe((resp) => {
            for (let item of resp.result) {
                item.recordStatus = this.statusArr.find((i) => i.startsWith(item.recordStatus));
            }
            console.log(resp);
            this.ruleMappingListResp = resp.result;
            this.isLoading = false;
            this.cdr.markForCheck();
            this.dtTrigger.next();
        });
    }
    getById(data) {
        console.log('OnClick', data);
        let id = 0;
        if (data.msgMappingDetails.length > 0) {
            id = data.msgMappingDetails[0].messageMappingId;
        }
        this.rulelist.getruleMappingById(id, data.mappingId).subscribe((resp) => {
            console.log(resp);
            let queryParams = {
                sourceTransDetId: resp.sourceTransDetId,
                targetTransDetId: resp.targetTransDetId,
                mdmtMessageMappingDet: resp.mdmtMessageMappingDet,
                responseData: data,
            };
            console.log(queryParams);
            this.addSystem.sendNavParam(queryParams);
            this.router.navigate(['/rule-mapping/edit', data.mappingId]);
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
}
RuleMappingComponent.ɵfac = function RuleMappingComponent_Factory(t) { return new (t || RuleMappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_1__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_2__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_3__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef)); };
RuleMappingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RuleMappingComponent, selectors: [["npr-rule-mapping"]], decls: 30, vars: 7, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink", "routerLinkActive"], [1, "primaryColor", 2, "cursor", "pointer", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary"], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]], template: function RuleMappingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Rule Mapping");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, RuleMappingComponent_div_6_Template, 3, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Source System");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Destination System");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Auth Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Record Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Conversion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, RuleMappingComponent_tr_28_Template, 19, 10, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, RuleMappingComponent_ng_container_29_Template, 5, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.roleCodes.new);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.ruleMappingListResp);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJydWxlLW1hcHBpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_views_rule-mapping_rule-mapping_module_ts-es2015.js.map