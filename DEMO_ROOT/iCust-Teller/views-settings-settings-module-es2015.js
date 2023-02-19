(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-settings-settings-module"],{

/***/ "0KpF":
/*!**********************************************************************************!*\
  !*** ./src/app/views/settings/report/report-details/report-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ReportDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDetailsComponent", function() { return ReportDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _shared_directives_egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/directives/egret-side-nav-toggle.directive */ "/1WF");
/* harmony import */ var _shared_directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/directives/dropdown.directive */ "Bp9c");
/* harmony import */ var _shared_directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/directives/dropdown-link.directive */ "UGQK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


























const _c0 = function (a0) { return { "helight": a0, "nothelight": true }; };
function ReportDetailsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportDetailsComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.gotoReport(item_r4.reportName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportDetailsComponent_div_8_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r4 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.gotoReport(item_r4.reportName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "event_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r4.reportName == ctx_r0.reportName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.reportName);
} }
function ReportDetailsComponent_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0\u00A0\u00A0From Date is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ReportDetailsComponent {
    constructor(formBuilder, ls, apiService) {
        this.formBuilder = formBuilder;
        this.ls = ls;
        this.apiService = apiService;
        this.reprts = [
            { reportName: "Reports",
                reportId: "ACRFXNB", date: "2019-11-29"
            },
        ];
    }
    ngOnInit() {
        this.reportName = this.reprts[0].reportName;
        this.tellerId = localStorage.getItem('tellerid');
        this.buildReportForm();
        this.resetForm();
    }
    buildReportForm(data) {
        this.reportForm = this.formBuilder.group({
            branch: [data ? data.branch : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            customerId: [data ? data.customerId : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            accountNo: [data ? data.accountNo : null],
            report: [data ? data.report : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fromDate: [data ? data.fromDate : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            endDate: [data ? data.endDate : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    resetForm() {
        this.reportForm.reset();
    }
    gotoReport(reportName1) {
        console.log(reportName1);
        this.reportName = reportName1;
        this.resetForm();
    }
    letterOnly(event) {
        var charCode = event.keyCode;
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)
            return true;
        else
            return false;
    }
    _keyPress(event) {
        // console.log("key",event);
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        inputChar = inputChar.toString();
        inputChar = inputChar;
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    apply() {
        let payload = [{
                branch: this.reportForm.value.branch,
                customerId: this.reportForm.value.customerId,
                accountNo: this.reportForm.value.accountNo,
                report: this.reportForm.value.report,
                fromDate: moment__WEBPACK_IMPORTED_MODULE_4__(this.reportForm.value.fromDate).format('YYYY-MM-DD'),
                endDate: moment__WEBPACK_IMPORTED_MODULE_4__(this.reportForm.value.endDate).format('YYYY-MM-DD'),
                reportName: this.reportName
            }];
        this.reportupdate = this.reprts.filter((val) => val.reportName === this.reportName);
        console.log(this.reportupdate);
        /* this.apiService.getReport().subscribe(data => {
           console.log(data)
           window.open(data);
         }) */
        this.apiService.getReport(this.reportForm.value.report, this.reportForm.value.customerId, moment__WEBPACK_IMPORTED_MODULE_4__(this.reportForm.value.fromDate).format('YYYY-MM-DD'), moment__WEBPACK_IMPORTED_MODULE_4__(this.reportForm.value.endDate).format('YYYY-MM-DD'), this.reportForm.value.branch);
    }
}
ReportDetailsComponent.ɵfac = function ReportDetailsComponent_Factory(t) { return new (t || ReportDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
ReportDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportDetailsComponent, selectors: [["app-report-details"]], decls: 71, vars: 9, consts: [["fxLayout", "row"], ["EgretSideNavToggle", "", 1, "app-sidebar", 2, "width", "300px"], [1, "sidenav-hold"], ["appDropdown", "", 1, "sidenav", "mt-32"], ["appDropdownLink", "", "routerLinkActive", "open"], ["class", "lvl1", 3, "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 1, "app-wrap"], [1, "full-width", "mt-32"], ["fxFlex", "100"], [1, "p-0"], [1, "title"], [1, "card-title-text"], [3, "formGroup"], ["fxLayout", "column", "fxLayoutGap", "25px"], ["fxFlex", "70%", "fxLayoutGap", "10px"], ["fxFlex", "50%", 1, "flex-grow-1"], [1, "hint"], [1, "inputMatName"], ["formControlName", "report", "placeholder", "Select Report"], ["disabled", "", "value", ""], ["value", "Uc_307"], ["value", "Uc_170"], ["value", "Uc_206"], ["value", "new_report_2"], ["matInput", "", "type", "text", "autocomplete", "off", "formControlName", "customerId", "placeholder", "Enter Customer Id", 1, "alignment", 3, "keypress"], ["matInput", "", "type", "text", "autocomplete", "off", "formControlName", "branch", "placeholder", "Enter Branch", 1, "alignment"], ["fxLayout", "row", 1, "inputMatNameDate"], ["matInput", "", "name", "courseCommencementDate", "placeholder", "Select From date", "formControlName", "fromDate", "readonly", "", 3, "matDatepicker"], ["matSuffix", "", 2, "float", "right", 3, "for"], ["picker", ""], [4, "ngIf"], ["matInput", "", "name", "courseCommencementDate", "formControlName", "endDate", "placeholder", "Select End date", "readonly", "", 3, "matDatepicker"], ["picker1", ""], ["fxLayout", "row", "fxLayoutGap", "25px", 2, "padding-bottom", "40px", "padding-right", "40px", "float", "right"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "lvl1", 3, "click"], [3, "ngClass", "click"], [1, "item-name", "lvl1"], ["fxFlex", ""]], template: function ReportDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReportDetailsComponent_div_8_Template, 8, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Report *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "UC_307");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "UC_170");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "UC_206");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "New_report_2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Customer Id *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ReportDetailsComponent_Template_input_keypress_41_listener($event) { return ctx._keyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Branch *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "From Date *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-card", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "mat-datepicker-toggle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "mat-datepicker", null, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ReportDetailsComponent_mat_error_56_Template, 2, 0, "mat-error", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "End Date *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-card", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "mat-datepicker-toggle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "mat-datepicker", null, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportDetailsComponent_Template_button_click_66_listener() { return ctx.apply(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Apply ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportDetailsComponent_Template_button_click_69_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reprts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reportName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reportForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.reportForm.get("fromDate").valid && ctx.reportForm.get("fromDate").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.reportForm.valid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _shared_directives_egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSideNavToggleDirective"], _shared_directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_8__["AppDropdownDirective"], _shared_directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_9__["DropdownLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["DefaultClassDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatError"]], styles: [".inputMatName[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.alignment[_ngcontent-%COMP%] {\n  border-style: none !important;\n  outline: none;\n}\n\n.hint[_ngcontent-%COMP%] {\n  padding-left: 0.8rem;\n  color: gray;\n  font-size: 13px;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -15%;\n  width: 150px;\n  color: white;\n  background-color: #A0A0A0;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding-left: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 90px;\n}\n\n.text[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.inputMatLastName[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -14%;\n  width: 150px;\n  color: white;\n  background-color: #A0A0A0;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.title[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n  background-color: white;\n}\n\n#toggle[_ngcontent-%COMP%] {\n  margin-top: -2%;\n  margin-left: 6.3cm;\n}\n\n  .mat-card-avatar {\n  max-width: 15% !important;\n}\n\n.example-header-image-dropdown[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 8px;\n  background-size: cover;\n  background-color: #AED6F1;\n  max-width: 15% !important;\n  width: 25px;\n  height: 35px;\n  border-radius: 50%;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style-type: none !important;\n}\n\na[_ngcontent-%COMP%]   .mat-icon.sidenav-mat-icon[_ngcontent-%COMP%] {\n  border-left: none !important;\n  border-color: transparent;\n}\n\n.sidenav-hold[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before {\n  background: none !important;\n  top: 0;\n}\n\nli.open[_ngcontent-%COMP%] {\n  background: none !important;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #03a9f4 !important;\n}\n\n.notActive[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: default;\n  color: #cacaca !important;\n}\n\n.egret-blue[_ngcontent-%COMP%]   .mat-drawer-container[_ngcontent-%COMP%] {\n  padding-top: none;\n}\n\n.m-333[_ngcontent-%COMP%] {\n  margin-top: none !important;\n}\n\n.image[_ngcontent-%COMP%] {\n  height: 50%;\n}\n\n.helight[_ngcontent-%COMP%] {\n  color: #03a9f4;\n  font-weight: bold;\n}\n\n.nothelight[_ngcontent-%COMP%] {\n  color: none;\n}\n\n.helight[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: sepia(90%) hue-rotate(900deg) saturate(700%);\n}\n\n.inputMatNameDate[_ngcontent-%COMP%] {\n  padding: 6px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHJlcG9ydC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUVaLGVBQWU7RUFHZiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBTGpCOztBQVNFO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7QUFOakI7O0FBUUU7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUVYLGVBQWU7QUFObkI7O0FBUUU7RUFFRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQU52Qjs7QUFTRTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUFtQztFQUNuQyxZQUFZO0VBQ1osbUJBQW1CO0FBTnZCOztBQVFFO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFMdEI7O0FBUUU7RUFDRSxPQUFPO0VBQ1AsaUJBQWlCO0FBTHJCOztBQVFFO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUx2Qjs7QUFPRTtFQUNFLFlBQVk7RUFFWixlQUFlO0VBR2YsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQVZqQjs7QUFpQkE7RUFFRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQWZyQjs7QUFrQkE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBbUM7RUFDbkMsWUFBWTtFQUNaLG1CQUFtQjtBQWZyQjs7QUFpQkE7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBZHRCOztBQWdCQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFiekI7O0FBZUE7RUFFRSxlQUFjO0VBQ2Qsa0JBQWtCO0FBYnBCOztBQW9CQTtFQUNFLHlCQUF5QjtBQWpCM0I7O0FBb0JBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQWpCcEI7O0FBcUJBO0VBRUksZ0NBQWdDO0FBbkJwQzs7QUFzQkE7RUFDSSw0QkFBNEI7RUFDNUIseUJBQXlCO0FBbkI3Qjs7QUFzQkE7RUFDSSwyQkFBMkI7RUFDM0IsTUFBTTtBQW5CVjs7QUFzQkE7RUFDSSwyQkFBMkI7QUFuQi9COztBQXNCQTtFQUNJLHlCQUF5QjtBQW5CN0I7O0FBdUJBO0VBQ0ksb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZix5QkFBeUI7QUFwQjdCOztBQXNCQTtFQUNJLGlCQUFpQjtBQW5CckI7O0FBcUJBO0VBQ0ksMkJBQTJCO0FBbEIvQjs7QUFvQkE7RUFFSSxXQUFXO0FBbEJmOztBQW9CQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7QUFqQnJCOztBQW1CQztFQUNHLFdBQVc7QUFoQmY7O0FBa0JBO0VBRUUsb0RBQW9EO0FBaEJ0RDs7QUFrQkE7RUFDRSx1QkFBc0I7QUFmeEIiLCJmaWxlIjoicmVwb3J0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXRNYXROYW1lIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIC8vIG1heC13aWR0aDo1MDBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZzogMTNweDtcclxuICBcclxuICAgIC8vIHdpZHRoOiA0NTBweDtcclxuICB9XHJcbiAgLmFsaWdubWVudCB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIC5oaW50IHtcclxuICAgIHBhZGRpbmctbGVmdDogMC44cmVtO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICAvLyBvcGFjaXR5OiA3MCU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5CYWNrIHtcclxuXHJcbiAgICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNSU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTBBMEEwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICB9XHJcbiAgXHJcbiAgLk5leHQge1xyXG4gICAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTEzJTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgMTA2LCAyNDUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTVweDtcclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAubGluZSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5pbnB1dE1hdExhc3ROYW1lIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIC8vIG1heC13aWR0aDo1MDBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZzogMTNweDtcclxuICBcclxuICAgIC8vIHdpZHRoOiAyMDBweDtcclxuICBcclxuICB9XHJcbiBcclxuXHJcbi5CYWNrIHtcclxuXHJcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDtcclxuICBtYXJnaW4tbGVmdDogLTE0JTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBMEEwQTA7XHJcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcclxufVxyXG5cclxuLk5leHQge1xyXG4gIG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTMlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDEwNiwgMjQ1KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTVweDtcclxufVxyXG4udGl0bGV7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDExJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuI3RvZ2dsZXtcclxuXHJcbiAgbWFyZ2luLXRvcDotMiU7XHJcbiAgbWFyZ2luLWxlZnQ6IDYuM2NtO1xyXG59XHJcblxyXG4vLyA6Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmUge1xyXG4vLyAgIHdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jYXJkLWF2YXRhciB7XHJcbiAgbWF4LXdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlLWRyb3Bkb3duIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FFRDZGMTtcclxuICBtYXgtd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcblxyXG5saSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuYSAubWF0LWljb24uc2lkZW5hdi1tYXQtaWNvbiB7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnNpZGVuYXYtaG9sZCBsaSB1bDo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxubGkub3BlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwM2E5ZjQgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5ub3RBY3RpdmUge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBjb2xvcjogI2NhY2FjYSAhaW1wb3J0YW50O1xyXG59XHJcbi5lZ3JldC1ibHVlIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogbm9uZTtcclxufVxyXG4ubS0zMzMge1xyXG4gICAgbWFyZ2luLXRvcDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5pbWFnZXtcclxuXHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufVxyXG4uaGVsaWdodHtcclxuICAgIGNvbG9yOiAjMDNhOWY0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG4gICAgXHJcbn0ubm90aGVsaWdodHtcclxuICAgIGNvbG9yOiBub25lO1xyXG59XHJcbi5oZWxpZ2h0IGltZ1xyXG57XHJcbiAgZmlsdGVyOiBzZXBpYSg5MCUpIGh1ZS1yb3RhdGUoOTAwZGVnKSBzYXR1cmF0ZSg3MDAlKTtcclxufVxyXG4uaW5wdXRNYXROYW1lRGF0ZXtcclxuICBwYWRkaW5nOjZweCAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-details',
                templateUrl: './report-details.component.html',
                styleUrls: ['./report-details.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "8K1L":
/*!****************************************************!*\
  !*** ./src/app/views/settings/settings.routing.ts ***!
  \****************************************************/
/*! exports provided: settingsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsRoutes", function() { return settingsRoutes; });
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password/change-password.component */ "qnBb");
/* harmony import */ var _report_report_details_report_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report/report-details/report-details.component */ "0KpF");
/* harmony import */ var _settings_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/change-email/change-email.component */ "Tzwr");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "sToX");
/* harmony import */ var _theme_change_theme_change_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-change/theme-change.component */ "EtkY");





const settingsRoutes = [
    {
        path: "",
        children: [
            {
                path: "profile",
                component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"],
            },
            {
                path: "report/reportDetails",
                component: _report_report_details_report_details_component__WEBPACK_IMPORTED_MODULE_1__["ReportDetailsComponent"],
            },
            {
                path: "change-password",
                component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_0__["ChangePasswordComponent"]
            },
            {
                path: "change-email",
                component: _settings_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_2__["ChangeEmailComponent"]
            },
            {
                path: "theme-change",
                component: _theme_change_theme_change_component__WEBPACK_IMPORTED_MODULE_4__["ThemeChangeComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "EtkY":
/*!***********************************************************************!*\
  !*** ./src/app/views/settings/theme-change/theme-change.component.ts ***!
  \***********************************************************************/
/*! exports provided: ThemeChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeChangeComponent", function() { return ThemeChangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/navigation.service */ "LFK6");
/* harmony import */ var _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/theme.service */ "ETNk");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared//services/layout.service */ "rmxa");
/* harmony import */ var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/auth/jwt-auth.service */ "nZzT");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");


























class ThemeChangeComponent {
    constructor(layout, router, navService, themeService, translate, renderer, jwtAuth, ls, dialog) {
        this.layout = layout;
        this.router = router;
        this.navService = navService;
        this.themeService = themeService;
        this.translate = translate;
        this.renderer = renderer;
        this.jwtAuth = jwtAuth;
        this.ls = ls;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.layoutConf = this.layout.layoutConf;
        this.rumangoThemes = this.themeService.rumangoThemes;
    }
    changeTheme(theme) {
        this.layout.applyMatTheme(theme);
    }
    changeTheme1(theme) {
        this.layout.applyMatTheme(theme);
    }
    onChangeTheme(value) {
        this.themeValue = value;
    }
    apply(onChangeTheme) {
        if (this.themeValue.value == 'light') {
            this.themeService.changeTheme1('egret-navy');
        }
        if (this.themeValue.value == 'dark') {
            this.themeService.changeTheme1('egret-dark-purple');
        }
        if (this.themeValue.value == 'yellow') {
            this.themeService.changeTheme1('yellow');
        }
        if (this.themeValue.value == 'blue') {
            this.themeService.changeTheme1('blue');
        }
        if (this.themeValue.value == 'red') {
            this.themeService.changeTheme1('red');
        }
        this.onChangeTheme(e);
        this.changeTheme1(highcharts__WEBPACK_IMPORTED_MODULE_9__["theme"]);
    }
}
ThemeChangeComponent.ɵfac = function ThemeChangeComponent_Factory(t) { return new (t || ThemeChangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
ThemeChangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThemeChangeComponent, selectors: [["app-theme-change"]], decls: 20, vars: 1, consts: [[1, "text-center", "mat-bg-white", "pt-16", "pb-16"], [1, "m-0", "text-blue"], ["role", "list", 1, "notification-list"], [3, "formGroup"], [1, "centeralign"], ["fxFlex", "100", "fxFlex.gt-xs", "50"], [2, "padding-top", "5px"], ["appearance", "outline", 1, "half-width"], ["name", "themeChange", 3, "selectionChange"], ["value", "light"], ["value", "dark"], [1, "alignright"], ["mat-raised-button", "", "color", "primary", 2, "color", "white", "padding", "0.2rem 4rem", "border-radius", "15px", 3, "click"]], template: function ThemeChangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Theme Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-nav-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Default Theme Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ThemeChangeComponent_Template_mat_select_selectionChange_12_listener($event) { return ctx.onChangeTheme($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Light ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Dark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemeChangeComponent_Template_button_click_18_listener() { return ctx.apply(ctx.onChangeTheme); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.themeChangeForm);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"]], styles: [".inputCard[_ngcontent-%COMP%] {\n  padding-top: 7%;\n  padding-left: 5%;\n  font-family: 'Montserrat' !important;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-family: 'Montserrat' !important;\n  text-transform: capitalize;\n}\n\n.mat-label[_ngcontent-%COMP%] {\n  color: #102245;\n  font-size: 14px;\n  font-family: 'Montserrat' !important;\n  margin-bottom: 13pt;\n  justify-content: center;\n}\n\n.centeralign[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-left: 300px;\n  padding-top: 80px;\n}\n\n.alignright[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-left: 25px;\n  width: 100%;\n}\n\n.half-width[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.red[_ngcontent-%COMP%] {\n  background: red;\n}\n\n.selectTheme[_ngcontent-%COMP%] {\n  background: black;\n}\n\n.themeButton[_ngcontent-%COMP%] {\n  color: white;\n  padding: 0.2rem 4rem;\n  border-radius: 15px;\n}\n\n.paddingSelect[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGhlbWUtY2hhbmdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUVoQixvQ0FBb0M7QUFBeEM7O0FBRUE7RUFDUSxlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUNsQzs7QUFDQTtFQUVJLGNBQWE7RUFDYixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDM0I7O0FBQ0E7RUFDSSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUVyQjs7QUFBQTtFQUNJLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVTtBQUdkOztBQURBO0VBQ0ksZ0JBQWdCO0FBSXBCOztBQUZBO0VBQ0ksZUFBZTtBQUtuQjs7QUFIQTtFQUNJLGlCQUFpQjtBQU1yQjs7QUFKQTtFQUNJLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBT3ZCOztBQUxBO0VBQ0ksZ0JBQ0o7QUFPQSIsImZpbGUiOiJ0aGVtZS1jaGFuZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXRDYXJke1xyXG4gICAgcGFkZGluZy10b3A6IDclO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuXHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbi5tYXRDYXJke1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9ICAgXHJcbi5tYXQtbGFiZWx7XHJcblxyXG4gICAgY29sb3I6IzEwMjI0NTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEzcHQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY2VudGVyYWxpZ257XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxufVxyXG4uYWxpZ25yaWdodHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG4uaGFsZi13aWR0aHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnJlZHtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxufVxyXG4uc2VsZWN0VGhlbWV7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG4udGhlbWVCdXR0b257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW0gNHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLnBhZGRpbmdTZWxlY3R7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeChangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-theme-change',
                templateUrl: './theme-change.component.html',
                styleUrls: ['./theme-change.component.scss']
            }]
    }], function () { return [{ type: _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"] }, { type: _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__["JwtAuthService"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, null); })();
function e(e) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ "Ty4v":
/*!***************************************************!*\
  !*** ./src/app/views/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings.component */ "sToX");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/shared-material.module */ "zMWy");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _settings_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings.routing */ "8K1L");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./change-password/change-password.component */ "qnBb");
/* harmony import */ var _settings_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/change-email/change-email.component */ "Tzwr");
/* harmony import */ var _theme_change_theme_change_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme-change/theme-change.component */ "EtkY");
/* harmony import */ var _report_report_details_report_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./report/report-details/report-details.component */ "0KpF");















class SettingsModule {
}
SettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SettingsModule_Factory(t) { return new (t || SettingsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_settings_routing__WEBPACK_IMPORTED_MODULE_8__["settingsRoutes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingsModule, { declarations: [_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"], _settings_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_10__["ChangeEmailComponent"], _theme_change_theme_change_component__WEBPACK_IMPORTED_MODULE_11__["ThemeChangeComponent"], _report_report_details_report_details_component__WEBPACK_IMPORTED_MODULE_12__["ReportDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"], _settings_change_email_change_email_component__WEBPACK_IMPORTED_MODULE_10__["ChangeEmailComponent"], _theme_change_theme_change_component__WEBPACK_IMPORTED_MODULE_11__["ThemeChangeComponent"], _report_report_details_report_details_component__WEBPACK_IMPORTED_MODULE_12__["ReportDetailsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                    app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_settings_routing__WEBPACK_IMPORTED_MODULE_8__["settingsRoutes"])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Tzwr":
/*!********************************************************************************!*\
  !*** ./src/app/views/settings/settings/change-email/change-email.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChangeEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeEmailComponent", function() { return ChangeEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/data.service */ "iiaH");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




















class ChangeEmailComponent {
    constructor(apiService, fb, ls, router, dataService) {
        this.apiService = apiService;
        this.fb = fb;
        this.ls = ls;
        this.router = router;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.currentUser = this.ls.getItem("ICUST_USER");
        this.userName = this.currentUser.userName;
        this.changeEmailForm = this.fb.group({
            language: [''],
            email: ['']
        });
    }
    getProfile() {
        this.apiService.fetchTellerProfileInfo(this.currentUser.userId).subscribe((result) => {
            this.profileInfo = result;
        });
    }
    save(formdata) {
        let payload = {
            "userName": this.userName,
            "email": this.changeEmailForm.value.email,
            "language": this.changeEmailForm.value.language
        };
        this.apiService.updateTellerInfo(payload).subscribe(changePwsresp => {
            console.log(changePwsresp);
            if (changePwsresp) {
                let obj = {
                    branchName: changePwsresp.branchName,
                    currency: changePwsresp.currency,
                    email: changePwsresp.email,
                    language: changePwsresp.language,
                    tellerName: changePwsresp.firstName + " " + changePwsresp.lastName,
                    userId: changePwsresp.userId,
                    userName: changePwsresp.userName
                };
                this.ls.setItem("ICUST_USER", obj);
                this.dataService.onChangeOfIcustUser(obj);
                this.router.navigateByUrl("settings/profile");
            }
        });
    }
}
ChangeEmailComponent.ɵfac = function ChangeEmailComponent_Factory(t) { return new (t || ChangeEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
ChangeEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangeEmailComponent, selectors: [["app-change-email"]], decls: 28, vars: 2, consts: [[1, "text-center", "prof_header", "mat-bg-white", "pt-16", "pb-16", "my-8"], [1, "m-0", "text-blue"], ["role", "list", 1, "notification-list"], ["fxLayout", "column", 1, "pl-35", "pr-35"], ["fxFlex", "100%"], ["fxLayout", "column", 3, "formGroup"], ["fxLayout", "column", "fxLayoutGap", "25px"], ["fxFlex", "50", "fxLayout", "column", 1, "pr-1"], ["fxFlex", "50", 1, "pb-1"], [2, "padding-top", "5px", 3, "click"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "email", 1, "box", 3, "placeholder"], ["matSuffix", ""], [3, "click"], ["appearance", "outline", "formControlName", "language", 1, "box"], ["value", "English"], [1, "alignright"], ["mat-raised-button", "", "color", "primary", 1, "save_btn", 3, "click"]], template: function ChangeEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-nav-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeEmailComponent_Template_h3_click_10_listener() { return ctx.getProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Change Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeEmailComponent_Template_h3_click_19_listener() { return ctx.getProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Select Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangeEmailComponent_Template_button_click_26_listener() { return ctx.save(ctx.changeEmailForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Save Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.changeEmailForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.currentUser.email);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"]], styles: [".inputCard[_ngcontent-%COMP%] {\n  padding-top: 7%;\n  padding-left: 5%;\n  font-family: 'Montserrat' !important;\n  display: flex;\n  flex-direction: column;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-family: 'Montserrat' !important;\n  text-transform: capitalize;\n}\n\n.mat-label[_ngcontent-%COMP%] {\n  color: #102245;\n  font-size: 14px;\n  font-family: 'Montserrat' !important;\n  margin-bottom: 13pt;\n}\n\n.message[_ngcontent-%COMP%] {\n  margin-left: 33px;\n}\n\n.centeralign[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.prof_header[_ngcontent-%COMP%] {\n  display: flex !important;\n  justify-content: center;\n}\n\n.profile_box[_ngcontent-%COMP%] {\n  display: flex !important;\n  justify-content: center;\n  flex: none !important;\n  flex-direction: column;\n}\n\n.profile_btn[_ngcontent-%COMP%] {\n  margin: 0px 1% 0 6%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNoYW5nZS1lbWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFFaEIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixzQkFBc0I7QUFBMUI7O0FBRUE7RUFDUSxlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLDBCQUEwQjtBQUNsQzs7QUFDQTtFQUVJLGNBQWE7RUFDYixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLG1CQUFtQjtBQUN2Qjs7QUFDQTtFQUNJLGlCQUFpQjtBQUVyQjs7QUFBQTtFQUNJLHVCQUF1QjtBQUczQjs7QUFBQTtFQUNJLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFHM0I7O0FBREE7RUFDSSx3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFJMUI7O0FBRkE7RUFDSSxtQkFBb0I7QUFLeEIiLCJmaWxlIjoiY2hhbmdlLWVtYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0Q2FyZHtcclxuICAgIHBhZGRpbmctdG9wOiA3JTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4ubWF0Q2FyZHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfSAgIFxyXG4ubWF0LWxhYmVse1xyXG5cclxuICAgIGNvbG9yOiMxMDIyNDU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B0O1xyXG59XHJcbi5tZXNzYWdle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMzcHg7XHJcbn1cclxuLmNlbnRlcmFsaWdue1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvL3BhZGRpbmctbGVmdDogMjUwcHg7XHJcbn1cclxuLnByb2ZfaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnByb2ZpbGVfYm94e1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5wcm9maWxlX2J0bntcclxuICAgIG1hcmdpbjogMHB4IDElIDAgNiUgO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangeEmailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-email',
                templateUrl: './change-email.component.html',
                styleUrls: ['./change-email.component.scss']
            }]
    }], function () { return [{ type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }]; }, null); })();


/***/ }),

/***/ "qnBb":
/*!*****************************************************************************!*\
  !*** ./src/app/views/settings/change-password/change-password.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");


















function ChangePasswordComponent_mat_error_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.errorMsg);
} }
function ChangePasswordComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_mat_error_22_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changePasswordForm.get("newPassword").errors.pattern);
} }
function ChangePasswordComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" New Password Password must contain Minimum ", ctx_r1.minPass, " digits. ");
} }
function ChangePasswordComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" New Password must contain Maximum ", ctx_r2.maxPass, " digits. ");
} }
function ChangePasswordComponent_mat_error_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.errorMsg);
} }
function ChangePasswordComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_mat_error_32_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.changePasswordForm.get("confirmnewPassword").errors.pattern);
} }
function ChangePasswordComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" New Password Password must contain Minimum ", ctx_r4.minPass, " digits. ");
} }
function ChangePasswordComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" New Password must contain Maximum ", ctx_r5.maxPass, " digits. ");
} }
class ChangePasswordComponent {
    constructor(apiService, fb, ls, snack, router, api) {
        this.apiService = apiService;
        this.fb = fb;
        this.ls = ls;
        this.snack = snack;
        this.router = router;
        this.api = api;
        this.errorMsg = "";
        this.hideCurrentPW = true;
        this.hideNewPW = true;
        this.hideConfirmPW = true;
    }
    ngOnInit() {
        this.currentUser = this.ls.getItem("ICUST_USER");
        this.userName = this.currentUser.userName;
        this.changePasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            currentPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.passwordRegex),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxPass),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.minPass)])]),
            confirmnewPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.api.getSecurityPolicyDetails().subscribe((resp) => {
            this.security1 = resp;
            console.log(this.security1);
            this.ucase = this.security1[0].pswdComplexUcase;
            this.lcase = this.security1[0].pswdComplexLcase;
            console.log(this.lcase);
            this.num = this.security1[0].pswdComplexNum;
            console.log(this.num);
            this.splc = this.security1[0].pswdComplexSplc;
            this.minPass = this.security1[0].minPswdLength;
            this.maxPass = this.security1[0].maxPswdLength;
            console.log(this.maxPass);
            if (this.security1[0].pswdComplexUcase == "true") {
                this.passwordRegex = '(?=[^A-Z]*[A-Z])';
                this.errorMsg = ' UpperCase';
            }
            if (this.security1[0].pswdComplexLcase == "true") {
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
            if (this.security1[0].pswdComplexNum == "true") {
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
            this.changePasswordForm = this.fb.group({
                currentPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.passwordRegex),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxPass),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.minPass),
                    ]),
                ]),
                confirmnewPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.passwordRegex),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxPass),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.minPass),
                    ]),
                ]),
            });
        });
    }
    save() {
        if (this.changePasswordForm.value.newPassword === this.changePasswordForm.value.confirmnewPassword) {
            let payload = {
                "username": this.userName,
                "oldPassword": this.changePasswordForm.value.currentPassword,
                "password": this.changePasswordForm.value.newPassword
            };
            console.log("payload", payload);
            this.apiService.changeTellerPassword(payload).subscribe(changePwsResp => {
                if (changePwsResp) {
                    this.router.navigateByUrl("sessions/signin");
                    setTimeout(() => {
                        this.snack.open("Password Changed Successfully!", "OK", {
                            duration: 4000,
                            verticalPosition: "top",
                            horizontalPosition: "right",
                        });
                    }, 1000);
                }
            });
        }
        else {
            setTimeout(() => {
                this.snack.open("New Password and Confirm Password values are not same!", "OK", {
                    duration: 4000,
                    verticalPosition: "top",
                    horizontalPosition: "right",
                });
            }, 1000);
        }
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 38, vars: 16, consts: [[1, "text-center", "mat-bg-white", "pt-16", "pb-16"], [1, "m-0", "text-blue"], ["fxLayout", "column", 1, "pl-35", "pr-35"], ["fxFlex", "100%"], ["fxLayout", "column", 3, "formGroup"], ["fxLayout", "column", "fxLayoutGap", "25px"], ["fxFlex", "50", "fxLayout", "column", 1, "pr-1"], ["fxFlex", "50", 1, "pb-1"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "currentPassword", "placeholder", "Enter Current Password", 1, "box", 3, "type"], [2, "margin-top", "-4%", "margin-left", "95%", "cursor", "pointer", 3, "click"], ["matInput", "", "formControlName", "newPassword", "placeholder", "Enter confirm Password", 1, "box", 3, "type", "minlength", "maxlength"], [4, "ngIf"], ["matInput", "", "formControlName", "confirmnewPassword", "placeholder", "Enter confirm Password", 1, "box", 3, "type"], [1, "alignright"], ["mat-raised-button", "", "color", "primary", 1, "save_btn", 3, "disabled", "click"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Current Password*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_mat_icon_click_13_listener() { return ctx.hideCurrentPW = !ctx.hideCurrentPW; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " New Password*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_mat_icon_click_20_listener() { return ctx.hideNewPW = !ctx.hideNewPW; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ChangePasswordComponent_mat_error_22_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ChangePasswordComponent_mat_error_23_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ChangePasswordComponent_mat_error_24_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Confirm New Password*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_mat_icon_click_30_listener() { return ctx.hideConfirmPW = !ctx.hideConfirmPW; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ChangePasswordComponent_mat_error_32_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ChangePasswordComponent_mat_error_33_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ChangePasswordComponent_mat_error_34_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_36_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.changePasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hideCurrentPW ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hideCurrentPW ? "visibility_off" : "visibility", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("minlength", ctx.minPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("maxlength", ctx.maxPass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hideNewPW ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hideNewPW ? "visibility_off" : "visibility", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("newPassword").touched && !ctx.changePasswordForm.get("newPassword").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("newPassword").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("newPassword").hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hideConfirmPW ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hideConfirmPW ? "visibility_off" : "visibility", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("confirmnewPassword").touched && !ctx.changePasswordForm.get("confirmnewPassword").valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("confirmnewPassword").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("confirmnewPassword").hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.changePasswordForm.invalid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: [".inputCard[_ngcontent-%COMP%] {\n  padding-top: 10%;\n  padding-left: 5%;\n  display: flex;\n  font-family: 'Montserrat' !important;\n  flex-direction: column;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-family: 'Montserrat' !important;\n  text-transform: capitalize;\n}\n\n.mat-label[_ngcontent-%COMP%] {\n  color: #102245;\n  font-size: 14px;\n  font-family: 'Montserrat' !important;\n  margin-bottom: 13pt;\n}\n\n.centeralign[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.profile_box[_ngcontent-%COMP%] {\n  display: flex !important;\n  justify-content: center;\n  flex: none !important;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLHNCQUFzQjtBQUMxQjs7QUFDQTtFQUNRLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBRWxDOztBQUFBO0VBRUksY0FBYTtFQUNiLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBRXZCOztBQUFBO0VBQ0ksdUJBQXVCO0FBRzNCOztBQUFBO0VBQ0ksd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsc0JBQXNCO0FBRzFCIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dENhcmR7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4ubWF0Q2FyZHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfSAgIFxyXG4ubWF0LWxhYmVse1xyXG5cclxuICAgIGNvbG9yOiMxMDIyNDU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B0O1xyXG59XHJcbi5jZW50ZXJhbGlnbntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAvLyBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xyXG59XHJcbi5wcm9maWxlX2JveHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-password',
                templateUrl: './change-password.component.html',
                styleUrls: ['./change-password.component.scss']
            }]
    }], function () { return [{ type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "sToX":
/*!***************************************************************!*\
  !*** ./src/app/views/settings/settings/settings.component.ts ***!
  \***************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/theme.service */ "ETNk");
/* harmony import */ var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/data.service */ "iiaH");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");





//import { resourceLimits } from 'worker_threads';















class SettingsComponent {
    constructor(ls, snack, dataService, apiService, router, themeService) {
        this.ls = ls;
        this.snack = snack;
        this.dataService = dataService;
        this.apiService = apiService;
        this.router = router;
        this.themeService = themeService;
    }
    ngOnInit() {
        this.currentUser = this.ls.getItem("ICUST_USER");
        this.getProfile();
        this.dataService.getIcustUser().subscribe((data) => {
            if (data) {
                this.currentUser = this.ls.getItem("ICUST_USER");
                setTimeout(() => {
                    this.snack.open("Email Changed Successfully!", "OK", {
                        duration: 4000,
                        verticalPosition: "top",
                        horizontalPosition: "right",
                    });
                }, 1000);
            }
        });
    }
    getProfile() {
        this.apiService.fetchTellerProfileInfo(this.currentUser.userId).subscribe((result) => {
            this.profileInfo = result;
        });
    }
    language() {
        this.apiService.fetchTellerProfileInfo(1).subscribe((result) => {
            this.router.navigateByUrl('/settings/change-password');
        });
    }
    languagemail() {
        this.router.navigateByUrl('/settings/change-email');
    }
    onChangeTheme(e) {
        if (e.value == 'light') {
            this.ls.setItem('theme', 'light');
            this.themeService.changeTheme('egret-dark-purple', 'egret-navy');
        }
        else {
            this.ls.setItem('theme', 'dark');
            this.themeService.changeTheme('egret-navy', 'egret-dark-purple');
        }
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_3__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 57, vars: 4, consts: [[1, "profilecontainer", "mt-8"], [1, "text-center", "mat-bg-primary", "pt-16", "pb-16"], [1, "m-0", "text-white"], ["role", "list", 1, "notification-list"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item"], ["color", "primary", 1, "notific-icon", "mr-16"], [1, "mat-list-text"], [1, "message"], [1, "message", 3, "click"], [1, "mx-60"], [1, "mt-4"], ["name", "theme", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "light"], ["value", "dark"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-nav-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "language icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_h4_click_24_listener() { return ctx.language(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "adjust icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_h4_click_38_listener() { return ctx.getProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Theme change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Select Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_mat_select_ngModelChange_45_listener($event) { return ctx.selectedTheme = $event; })("selectionChange", function SettingsComponent_Template_mat_select_selectionChange_45_listener($event) { return ctx.onChangeTheme($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Light ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Dark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_h4_click_55_listener() { return ctx.languagemail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.tellerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedTheme);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], styles: [".profilecontainer[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.profilevalid[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.profilemargin[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.profiletop[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.mx-60[_ngcontent-%COMP%] {\n  margin-right: 60px !important;\n  margin-left: 60px !important;\n}\n\n.Language[_ngcontent-%COMP%] {\n  margin-top: 6px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7RUFDSSxrQkFBa0I7QUFFdEI7O0FBQUE7RUFDSSxvQkFBb0I7QUFHeEI7O0FBREE7RUFDSSxpQkFBaUI7QUFJckI7O0FBREE7RUFDSSw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBSWhDOztBQURBO0VBQ0ksMEJBQTBCO0FBSTlCIiwiZmlsZSI6InNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVjb250YWluZXJ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcbi5wcm9maWxldmFsaWR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnByb2ZpbGVtYXJnaW57XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4ucHJvZmlsZXRvcHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubXgtNjAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uTGFuZ3VhZ2V7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss']
            }]
    }], function () { return [{ type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_3__["LocalStoreService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"] }]; }, null); })();
function language() {
    throw new Error('Function not implemented.');
}


/***/ })

}]);
//# sourceMappingURL=views-settings-settings-module-es2015.js.map