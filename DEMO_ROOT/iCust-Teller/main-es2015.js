(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+803":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/route-parts.service */ "vafs");
/* harmony import */ var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/layout.service */ "rmxa");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











function BreadcrumbComponent_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const part_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", part_r3.url, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, part_r3.breadcrumb));
} }
function BreadcrumbComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_div_1_li_2_Template, 4, 4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.routeParts);
} }
function BreadcrumbComponent_div_2_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const part_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", part_r6.url, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, part_r6.breadcrumb));
} }
function BreadcrumbComponent_div_2_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_div_2_ul_4_li_1_Template, 4, 4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.routeParts);
} }
function BreadcrumbComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BreadcrumbComponent_div_2_ul_4_Template, 2, 1, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r1.routeParts[ctx_r1.routeParts.length - 1] == null ? null : ctx_r1.routeParts[ctx_r1.routeParts.length - 1].breadcrumb), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.routeParts.length > 1);
} }
class BreadcrumbComponent {
    // public isEnabled: boolean = true;
    constructor(router, routePartsService, activeRoute, layout) {
        this.router = router;
        this.routePartsService = routePartsService;
        this.activeRoute = activeRoute;
        this.layout = layout;
        this.routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);
        this.routerEventSub = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe((routeChange) => {
            this.routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);
            // generate url from parts
            this.routeParts.reverse().map((item, i) => {
                item.breadcrumb = this.parseText(item);
                item.urlSegments.forEach((urlSegment, j) => {
                    if (j === 0) {
                        return (item.url = `${urlSegment.path}`);
                    }
                    item.url += `/${urlSegment.path}`;
                });
                if (i === 0) {
                    return item;
                }
                // prepend previous part to current part
                item.url = `${this.routeParts[i - 1].url}/${item.url}`;
                return item;
            });
        });
    }
    ngOnInit() { }
    ngOnDestroy() {
        if (this.routerEventSub) {
            this.routerEventSub.unsubscribe();
        }
    }
    parseText(part) {
        if (!part.breadcrumb) {
            return '';
        }
        part.breadcrumb = part.breadcrumb.replace(/{{([^{}]*)}}/g, (a, b) => {
            const r = part.params[b];
            return typeof r === 'string' ? r : a;
        });
        return part.breadcrumb;
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_2__["RoutePartsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"])); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 3, vars: 2, consts: [[1, "container-dynamic"], ["class", "breadcrumb-bar", 4, "ngIf"], ["class", "breadcrumb-title", 4, "ngIf"], [1, "breadcrumb-bar"], [1, "breadcrumb"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "breadcrumb-title"], [1, "bc-title"], ["class", "breadcrumb", 4, "ngIf"], [1, "text-muted", 3, "routerLink"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_div_2_Template, 5, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout.layoutConf.useBreadcrumb && ctx.layout.layoutConf.breadcrumb === "simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout.layoutConf.useBreadcrumb && ctx.layout.layoutConf.breadcrumb === "title");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumb',
                templateUrl: './breadcrumb.component.html',
                styleUrls: ['./breadcrumb.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_2__["RoutePartsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"] }]; }, null); })();


/***/ }),

/***/ "+MiJ":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/date-picker/date-picker.component.ts ***!
  \************************************************************************/
/*! exports provided: DatePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return DatePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _date_picker_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-picker-service.service */ "MTQd");
/* harmony import */ var app_views_others_demo_datePickerDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/views/others/demo/datePickerDetails */ "0ue+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function DatePickerComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.datePickerDetailsObj.errorMsg, "");
} }
function DatePickerComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatePickerComponent_div_10_div_1_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
} }
class DatePickerComponent {
    constructor(dateService) {
        this.dateService = dateService;
        this.datePickerDetailsObj = new app_views_others_demo_datePickerDetails__WEBPACK_IMPORTED_MODULE_2__["DatePickerDetails"]();
    }
    ngOnInit() {
        console.log("after", this.datePickerDetailsObj.defaultValue);
    }
    onDateChange(event) {
        // this.dateChange.emit();
        console.log(event.value._d);
    }
    updateCalcs(event) {
        console.log(event.value);
    }
}
DatePickerComponent.ɵfac = function DatePickerComponent_Factory(t) { return new (t || DatePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_picker_service_service__WEBPACK_IMPORTED_MODULE_1__["DatePickerServiceService"])); };
DatePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatePickerComponent, selectors: [["app-date-picker"]], inputs: { datePickerDetailsObj: "datePickerDetailsObj" }, decls: 11, vars: 5, consts: [["date", "ngForm"], ["matInput", "", "ngModel", "", "name", "Exec_Date", "required", "", 3, "matDatepicker", "ngModel", "ngModelChange", "dateChange"], ["Exec_Date", "ngModel"], ["matSuffix", "", 3, "for"], [3, "selectionChange"], ["picker", ""], [4, "ngIf"], [2, "color", "red"]], template: function DatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatePickerComponent_Template_input_ngModelChange_5_listener($event) { return ctx.datePickerDetailsObj.defaultValue = $event; })("dateChange", function DatePickerComponent_Template_input_dateChange_5_listener($event) { return ctx.onDateChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-datepicker-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-datepicker", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DatePickerComponent_Template_mat_datepicker_selectionChange_8_listener($event) { return ctx.updateCalcs($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DatePickerComponent_div_10_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.datePickerDetailsObj.datePickerLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r2)("ngModel", ctx.datePickerDetailsObj.defaultValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".date[_ngcontent-%COMP%] {\n  z-index: 10000;\n  width: 255px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  position: absolute;\n  display: none;\n  top: calc(100% + 10px);\n  left: 0;\n}\n\n.date.isActive[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.month-container[_ngcontent-%COMP%] {\n  background: #0a95ff;\n  border-top-left-radius: 0.25em;\n  border-top-right-radius: 0.25em;\n}\n\n.week-container[_ngcontent-%COMP%] {\n  background: #EBF6FF;\n  padding: 0 5px;\n}\n\n.month[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.week[_ngcontent-%COMP%], .day[_ngcontent-%COMP%] {\n  width: 2.5em;\n  padding: 0.625em 0;\n  text-align: center;\n}\n\n.day-container[_ngcontent-%COMP%] {\n  padding: 5px;\n  background: #fff;\n}\n\n.day[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n\n.day[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n\n.day.isSelected[_ngcontent-%COMP%] {\n  background: #0a95ff;\n  color: #fff;\n}\n\n.blue--dark[_ngcontent-%COMP%] {\n  color: #00457a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLHdFQUN5QztFQUN6QyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0FBQVQ7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QiwrQkFBK0I7QUFFakM7O0FBQUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUdoQjs7QUFEQTtFQUNFLFdBQVc7QUFJYjs7QUFGQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUtwQjs7QUFIQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFNbEI7O0FBSkE7RUFDRSxtQkFBbUI7QUFPckI7O0FBTEE7RUFDRSxtQkFBbUI7QUFRckI7O0FBTkE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQVNiOztBQVBBO0VBQ0UsY0FBYztBQVVoQiIsImZpbGUiOiJkYXRlLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlIHtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuICB3aWR0aDogMjU1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksXHJcbiAgICAgICAgICAgICAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgdG9wOiBjYWxjKDEwMCUgKyAxMHB4KTtcclxuICBsZWZ0OiAwO1xyXG59XHJcbi5kYXRlLmlzQWN0aXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ubW9udGgtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMGE5NWZmO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMjVlbTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yNWVtO1xyXG59XHJcbi53ZWVrLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogI0VCRjZGRjtcclxuICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG4ubW9udGgge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi53ZWVrLFxyXG4uZGF5IHtcclxuICB3aWR0aDogMi41ZW07XHJcbiAgcGFkZGluZzogMC42MjVlbSAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZGF5LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmRheSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG4uZGF5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG59XHJcbi5kYXkuaXNTZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZDogIzBhOTVmZjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYmx1ZS0tZGFyayB7XHJcbiAgY29sb3I6ICMwMDQ1N2E7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatePickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-date-picker',
                templateUrl: './date-picker.component.html',
                styleUrls: ['./date-picker.component.scss']
            }]
    }], function () { return [{ type: _date_picker_service_service__WEBPACK_IMPORTED_MODULE_1__["DatePickerServiceService"] }]; }, { datePickerDetailsObj: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "/1WF":
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/egret-side-nav-toggle.directive.ts ***!
  \**********************************************************************/
/*! exports provided: EgretSideNavToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretSideNavToggleDirective", function() { return EgretSideNavToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");






class EgretSideNavToggleDirective {
    constructor(mediaObserver, sideNav) {
        this.mediaObserver = mediaObserver;
        this.sideNav = sideNav;
    }
    ngOnInit() {
        this.initSideNav();
    }
    ngOnDestroy() {
        if (this.screenSizeWatcher) {
            this.screenSizeWatcher.unsubscribe();
        }
    }
    updateSidenav() {
        var self = this;
        setTimeout(() => {
            self.sideNav.opened = !self.isMobile;
            self.sideNav.mode = self.isMobile ? 'over' : 'side';
        });
    }
    initSideNav() {
        this.isMobile = this.mediaObserver.isActive('xs') || this.mediaObserver.isActive('sm');
        // console.log(this.isMobile)
        this.updateSidenav();
        this.screenSizeWatcher = this.mediaObserver.media$.subscribe((change) => {
            this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
            this.updateSidenav();
        });
    }
}
EgretSideNavToggleDirective.ɵfac = function EgretSideNavToggleDirective_Factory(t) { return new (t || EgretSideNavToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], 11)); };
EgretSideNavToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: EgretSideNavToggleDirective, selectors: [["", "EgretSideNavToggle", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSideNavToggleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[EgretSideNavToggle]'
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\muthu-onboard\Icust-Frontend\icust\src\main.ts */"zUnb");


/***/ }),

/***/ "0ue+":
/*!********************************************************!*\
  !*** ./src/app/views/others/demo/datePickerDetails.ts ***!
  \********************************************************/
/*! exports provided: DatePickerDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerDetails", function() { return DatePickerDetails; });
class DatePickerDetails {
}


/***/ }),

/***/ "1wtQ":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const config = {
    apiUrl: '',
    authRoles: {
        sa: ['SA'],
        admin: ['SA', 'Admin'],
        editor: ['SA', 'Admin', 'Editor'],
        user: ['SA', 'Admin', 'Editor', 'User'],
        guest: ['SA', 'Admin', 'Editor', 'User', 'Guest'] // Everyone has access
    }
};


/***/ }),

/***/ "30N5":
/*!********************************************************!*\
  !*** ./src/app/shared/services/match-media.service.ts ***!
  \********************************************************/
/*! exports provided: MatchMediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchMediaService", function() { return MatchMediaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");





class MatchMediaService {
    constructor(mediaObserver) {
        this.mediaObserver = mediaObserver;
        this.onMediaChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.activeMediaQuery = '';
        this.init();
    }
    init() {
        this.mediaObserver.media$.subscribe((change) => {
            if (this.activeMediaQuery !== change.mqAlias) {
                this.activeMediaQuery = change.mqAlias;
                this.onMediaChange.next(change.mqAlias);
            }
        });
    }
}
MatchMediaService.ɵfac = function MatchMediaService_Factory(t) { return new (t || MatchMediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"])); };
MatchMediaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MatchMediaService, factory: MatchMediaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchMediaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }]; }, null); })();


/***/ }),

/***/ "336X":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/relative-time.pipe.ts ***!
  \****************************************************/
/*! exports provided: RelativeTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativeTimePipe", function() { return RelativeTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RelativeTimePipe {
    transform(value) {
        if (!(value instanceof Date))
            value = new Date(value);
        let seconds = Math.floor(((new Date()).getTime() - value.getTime()) / 1000);
        let interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    }
}
RelativeTimePipe.ɵfac = function RelativeTimePipe_Factory(t) { return new (t || RelativeTimePipe)(); };
RelativeTimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "relativeTime", type: RelativeTimePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelativeTimePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'relativeTime' }]
    }], null, null); })();


/***/ }),

/***/ "3BvT":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/app-confirm/app-confirm.component.ts ***!
  \**********************************************************************/
/*! exports provided: AppComfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComfirmComponent", function() { return AppComfirmComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");






class AppComfirmComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
}
AppComfirmComponent.ɵfac = function AppComfirmComponent_Factory(t) { return new (t || AppComfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
AppComfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComfirmComponent, selectors: [["app-confirm"]], decls: 11, vars: 2, consts: [["matDialogTitle", "", 1, "mb-8"], ["mat-dialog-content", "", 1, "mb-16"], ["mat-dialog-actions", ""], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], ["fxFlex", ""], ["type", "button", "color", "accent", "mat-raised-button", "", 3, "click"]], template: function AppComfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComfirmComponent_Template_button_click_5_listener() { return ctx.dialogRef.close(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComfirmComponent_Template_button_click_9_listener() { return ctx.dialogRef.close(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.message);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComfirmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-confirm',
                template: `<h1 matDialogTitle class="mb-8">{{ data.title }}</h1>
    <div mat-dialog-content class="mb-16">{{ data.message }}</div>
    <div mat-dialog-actions>
    <button 
    type="button" 
    mat-raised-button
    color="primary" 
    (click)="dialogRef.close(true)">OK</button>
    &nbsp;
    <span fxFlex></span>
    <button 
    type="button"
    color="accent"
    mat-raised-button 
    (click)="dialogRef.close(false)">Cancel</button>
    </div>`,
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "3kSh":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/app-confirm/app-confirm.service.ts ***!
  \********************************************************************/
/*! exports provided: AppConfirmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfirmService", function() { return AppConfirmService; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-confirm.component */ "3BvT");





class AppConfirmService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    confirm(data = {}) {
        data.title = data.title || 'Confirm';
        data.message = data.message || 'Are you sure?';
        let dialogRef;
        dialogRef = this.dialog.open(_app_confirm_component__WEBPACK_IMPORTED_MODULE_2__["AppComfirmComponent"], {
            width: '380px',
            disableClose: true,
            data: { title: data.title, message: data.message }
        });
        return dialogRef.afterClosed();
    }
}
AppConfirmService.ɵfac = function AppConfirmService_Factory(t) { return new (t || AppConfirmService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
AppConfirmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppConfirmService, factory: AppConfirmService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppConfirmService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "3sEA":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/app-loader/app-loader.service.ts ***!
  \******************************************************************/
/*! exports provided: AppLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoaderService", function() { return AppLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-loader.component */ "5alQ");





class AppLoaderService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    open(title = 'Please wait', config = { width: '200px' }) {
        this.dialogRef = this.dialog.open(_app_loader_component__WEBPACK_IMPORTED_MODULE_2__["AppLoaderComponent"], { disableClose: true, backdropClass: 'light-backdrop' });
        this.dialogRef.updateSize(config.width);
        this.dialogRef.componentInstance.title = title;
        return this.dialogRef.afterClosed();
    }
    close() {
        if (this.dialogRef)
            this.dialogRef.close();
    }
}
AppLoaderService.ɵfac = function AppLoaderService_Factory(t) { return new (t || AppLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
AppLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppLoaderService, factory: AppLoaderService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "5alQ":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/app-loader/app-loader.component.ts ***!
  \********************************************************************/
/*! exports provided: AppLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoaderComponent", function() { return AppLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");





class AppLoaderComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
}
AppLoaderComponent.ɵfac = function AppLoaderComponent_Factory(t) { return new (t || AppLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
AppLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppLoaderComponent, selectors: [["app-app-loader"]], decls: 5, vars: 3, consts: [[1, "text-center"], [1, "m-0", "pb-16", 2, "white-space", "pre-wrap", "line-height", "1.4"], ["mat-dialog-content", ""]], template: function AppLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin", "auto");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatSpinner"]], styles: [".mat-dialog-content[_ngcontent-%COMP%] {\r\n  min-height: 122px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1sb2FkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJhcHAtbG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBtaW4taGVpZ2h0OiAxMjJweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-loader',
                templateUrl: './app-loader.component.html',
                styleUrls: ['./app-loader.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "AG0e":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/token-service/token.service.ts ***!
  \****************************************************************/
/*! exports provided: REDIRECT_HOST, TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDIRECT_HOST", function() { return REDIRECT_HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators_catchError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators/catchError */ "dKBr");
/* harmony import */ var rxjs_operators_catchError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators_catchError__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../showMessage/show-message.service */ "x/2q");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");











// ================= only for demo purpose ===========
const REDIRECT_HOST = environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].redirectUrl;
class TokenService {
    constructor(httpClient, showMessageService) {
        this.httpClient = httpClient;
        this.showMessageService = showMessageService;
        // private baseUrl = "http://localhost:1212";
        this.newUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            prefix: '',
            firstName: '',
            lastName: '',
            primaryEmailAdress: '',
            phoneNumber: ''
        });
        this.verify = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            verify: '',
            type: ''
        });
        this.Index = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            index: '',
        });
        this.Id = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            id: '',
        });
        // private baseUrl = 'http://192.168.0.14:8081/Icust-Digital-Banking';
        this.baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].DESKTOP_URL;
    }
    getverify() {
        return this.verify.asObservable();
    }
    setVerify(verify) {
        this.verify.next(verify);
    }
    getId() {
        return this.Id.asObservable();
    }
    setId(id) {
        this.Id.next(id);
    }
    setIndex(index) {
        this.Index.next(index);
    }
    getIndex() {
        return this.Index.asObservable();
    }
    setNewUserInfo(user) {
        this.newUser.next(user);
    }
    getNewUserInfo() {
        return this.newUser.asObservable();
    }
    //Error Handler
    errorHandler(error) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
            this.showMessageService.errorMessage('An Error Occured', error.error);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, body was: `, error.error);
            this.showMessageService.errorMessage(`${error.status}`, error.error);
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
    getCounterDashBoard(id) {
        return this.httpClient.get(`${this.baseUrl}/counter-service/api/counter-dash-board/?tellerId=${id}`);
        //  .pipe(catchError(this.errorHandler));
    }
    getTellerTokens(id) {
        return this.httpClient.get(`${this.baseUrl}/dashboard/token?tellerId=${id}`);
        //  .pipe(catchError(this.errorHandler));
    }
    saveCashWithdrawalData(cw) {
        return this.httpClient.post(`${this.baseUrl}/cash-withdrawal-service`, cw);
        // .pipe(catchError(this.errorHandler));
    }
    saveChequeWithdrawalData(cw) {
        return this.httpClient.post(`${this.baseUrl}/cheque-withdrawal`, cw);
        // .pipe(catchError(this.errorHandler));
    }
    saveCashDepositData(cd) {
        return this.httpClient.post(`${this.baseUrl}/cash-deposit/api`, cd);
    }
    saveDepositTopUpData(dtu) {
        return this.httpClient.post(`${this.baseUrl}/deposit-topUp`, dtu);
        // .pipe(catchError(this.errorHandler));
    }
    saveChequeDepositData(cd) {
        return this.httpClient.post(`${this.baseUrl}/cheque-deposit/api`, cd);
        // .pipe(catchError(this.errorHandler));
    }
    profile(key, value) {
        return this.httpClient.get(`${this.baseUrl}/loginApi/fetchTellerProfileInfo/${key}=${value}`);
        // .pipe(catchError(this.errorHandler));
    }
    saveForexTransaction(ft) {
        return this.httpClient.post(`${this.baseUrl}/forex-transaction/api`, ft);
        // .pipe(catchError(this.errorHandler));
    }
    saveLoanpayment(lp) {
        return this.httpClient.post(`${this.baseUrl}/loan-payment/api`, lp);
        // .pipe(catchError(this.errorHandler));
    }
    saveUtilityBillPayment(up) {
        return this.httpClient.post(`${this.baseUrl}/utility-bill-payment/api`, up);
        // .pipe(catchError(this.errorHandler));
    }
    getOperationData(id) {
        return this.httpClient.get(`${this.baseUrl}/cash-withdrawal-service/withdraw/${id}`);
        // .pipe(catchError(this.errorHandler));
    }
    getTokenList(parentTokenNo) {
        return this.httpClient.get(`${this.baseUrl}/cash-deposit/api/get/childTokens?parentTokenNo=${parentTokenNo}`);
        // .pipe(catchError(this.errorHandler));
    }
    getAllRevertTransactionData(transactionStatus, page, size, isOnlyTransactionStatus) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .append('transactionStatus', transactionStatus)
            .append('page', page)
            .append('isOnlyTransactionStatus', isOnlyTransactionStatus);
        return this.httpClient.get(`${this.baseUrl}/cash-withdrawal-service/getAllTransactionInfo/?${params}`);
    }
    getTransactionDataByTransactionId(params) {
        return this.httpClient.get(`${this.baseUrl}/cash-withdrawal-service/getAllTransactionInfo/?${params}`);
    }
    updateRequestForRevertTransaction(data) {
        return this.httpClient.put(`${this.baseUrl}/cash-withdrawal-service/revertTransaction`, data);
    }
    approveOrRejectRequestForRevertTransaction(data) {
        return this.httpClient.put(`${this.baseUrl}/cash-withdrawal-service/approveOrRejectRevertTransaction`, data);
    }
    getCustomerByCustomerID(key, value) {
        return this.httpClient.get(`${this.baseUrl}/customerdata/fetchCustomers?${key}=${value}`);
        // .pipe(catchError(this.errorHandler));
    }
    getCustomerDetailsByCustomerId(id) {
        return this.httpClient.get(`${this.baseUrl}/customerdata/getCustomerInfo/?customerId=${id}`);
        // .pipe(catchError(this.errorHandler));
    }
    getTransactionCount() {
        return this.httpClient.get(`${this.baseUrl}/tran/transactioncount`);
    }
    saveChargeDetails(cd) {
        return this.httpClient.post(`${this.baseUrl}/accountdata/saveChargeDetails`, cd);
    }
    getBillerName() {
        return this.httpClient.get(`${this.baseUrl}/utility-bill-payment/api`);
        // .pipe(catchError(this.errorHandler));     
    }
    getOtpValidating(obj) {
        return this.httpClient.put(`${this.baseUrl}/rest/otp/validateOtp`, obj);
    }
    getUtilityBillPayment(billName) {
        return this.httpClient.get(`${this.baseUrl}/utility-bill-payment/api/${billName}`).pipe(Object(rxjs_operators_catchError__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    getRecordsBasedOnOperation(operationNum) {
        return this.httpClient.get(`${this.baseUrl}/tran/transaction/${operationNum}`);
    }
    getTillBalancebyTillId(id) {
        return this.httpClient.get(`${this.baseUrl}/dashboard/getall/tillamount/${id}`);
    }
    getAllTranaction() {
        return this.httpClient.get(`${this.baseUrl}/transactionType`);
    }
    getDashboardData(tellerId, opertaton) {
        return this.httpClient.get(`${this.baseUrl}/dashboard/getalldataJson/${tellerId}/${opertaton}`);
    }
    getDashboardDataNew(tellerId) {
        return this.httpClient.get(`${this.baseUrl}/teller-service/api/dashboard/${tellerId}`);
    }
    // getCountofDenominations(id: any, currency: any) {
    //   return this.httpClient.get<any>(`${this.baseUrl}/dashboard/getall/count/${id}/${currency}`)
    // }
    getChargeDetails(accountId) {
        return this.httpClient.get(`${this.baseUrl}/accountdata/getChargeDetails?accountId=${accountId}`);
    }
    insertNewUserOnboarding(data) {
        return this.httpClient.post(`${this.baseUrl}/customerdata/upsertCustomerDetails`, data);
    }
    uploadDocument(uploadData) {
        return this.httpClient.post(`${this.baseUrl}/rest/upload/uploadDoc`, uploadData);
    }
    getDropDownValues(entityName) {
        return this.httpClient.get(`${this.baseUrl}/rest/data/getMasterData?entityName=${entityName}`);
    }
    getOtp(otp) {
        return this.httpClient.post(`${this.baseUrl}/rest/otp/generateOtp`, otp);
    }
    kycScreenBasicinfo(data) {
        return this.httpClient.post(`${this.baseUrl}/customerdata/upsertCustomerDetails`, data);
    }
    DocumentUplaod(file, content) {
        return this.httpClient.post(`${this.baseUrl}/rest/upload/uploadDoc/${content}`, file);
    }
    upload(uploadData) {
        return this.httpClient.post(`${this.baseUrl}/rest/upload/uploadDoc`, uploadData);
    }
    // new changes
    saveofNewCashDeposit(data) {
        console.log(data);
        return this.httpClient.post(`${this.baseUrl}/cash-deposit/api/serviceTransactions`, data);
    }
    getCountryValues() {
        return this.httpClient.get(`${this.baseUrl}/currency`);
    }
    saveofChequeDeposit(data) {
        return this.httpClient.post(`${this.baseUrl}/cheque-deposit/api`, data);
    }
    getCountryFlagByCountryName(countryName) {
        return this.httpClient.post(`https://countriesnow.space/api/v0.1/countries/flag/images`, countryName);
    }
    // fetching holder name -->new cash withdrawal and other screens
    fetchingDetailsForCash(accountId) {
        return this.httpClient.get(`${this.baseUrl}/accountdata/accountDetails/${accountId}`);
    }
    getAccountBranch() {
        return this.httpClient.get(`${this.baseUrl}/branch`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(result => {
            console.log('result :: ', result);
        }));
    }
    pauseTransaction(tokenNumber, isPausedTrans) {
        return this.httpClient.put(`${this.baseUrl}/cash-deposit/api/updatePauseResumeStatus?tokenNumber=${tokenNumber}&isPausedTrans=${isPausedTrans}`, '')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(result => {
            console.log('result :: ', result);
        }));
    }
    checkPauseTransaction(tellerId) {
        return this.httpClient.get(`${this.baseUrl}/cash-deposit/api/fetchPausedTransactions?tellerId=${tellerId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(result => {
            console.log('result :: ', result);
        }));
    }
    cancelOrLock(tokenNumber, cancel, tellerId) {
        return this.httpClient.put(`${this.baseUrl}/tokendata/updateToken/tellerId?tokenNumber=${tokenNumber}&cancel=${cancel}&tellerId=${tellerId}`, '')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(result => {
            console.log('result :: ', result);
        }));
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_4__["ShowMessageService"])); };
TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_4__["ShowMessageService"] }]; }, null); })();


/***/ }),

/***/ "Adj1":
/*!*********************************************************!*\
  !*** ./src/app/views/others/search/search.component.ts ***!
  \*********************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/data.service */ "iiaH");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var app_shared_services_token_service_token_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/services/token-service/token.service */ "AG0e");
/* harmony import */ var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/services/auth/jwt-auth.service */ "nZzT");
/* harmony import */ var app_shared_services_voice_recognition_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/shared/services/voice-recognition.service */ "j/fj");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "FKr1");







//import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { map } from 'highcharts';
































const _c0 = ["input"];
function SearchComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please check your microhone and audio levels.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_mat_card_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_mat_card_9_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const card_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onTabSelection(card_r6.label, card_r6.searchKey); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.selectedTabName == card_r6.label ? "card-class-selected" : "card-class");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.selectedTabName == card_r6.label ? "material-symbols-outlined-selected" : "material-symbols-outlined");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r6.icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r6.label, " ");
} }
function SearchComponent_div_10_div_1_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_div_10_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_div_10_div_1_div_3_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.searchTerm = $event; })("keypress", function SearchComponent_div_10_div_1_div_3_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17._keyPress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.searchTerm);
} }
function SearchComponent_div_10_div_1_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Speak now! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchComponent_div_10_div_1_button_2_Template, 3, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_div_10_div_1_div_3_Template, 3, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_10_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.speechRecording(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "mic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Search by voice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchComponent_div_10_div_1_span_10_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.recordingSpeech);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.recordingSpeech);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r9.recordingSpeech ? "iconColor" : "searchIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.recordingSpeech);
} }
function SearchComponent_div_10_div_2_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const folder_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, folder_r21.firstName), 0, 1), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 12, folder_r21.lastName), 0, 1), "");
} }
function SearchComponent_div_10_div_2_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const folder_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", folder_r21.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SearchComponent_div_10_div_2_div_3_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_10_div_2_div_3_div_20_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const action_r30 = ctx.$implicit; const folder_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r31.onClickAction(folder_r21, action_r30.type, folder_r21.firstName + " " + folder_r21.lastName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " trip_origin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](action_r30.label);
} }
function SearchComponent_div_10_div_2_div_3_mat_divider_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
} }
const _c1 = function (a0) { return { "folderDiv-selected": a0 }; };
function SearchComponent_div_10_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_10_div_2_div_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const i_r22 = ctx.index; const folder_r21 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r34.onClickFolder(i_r22, folder_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchComponent_div_10_div_2_div_3_div_4_Template, 7, 14, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchComponent_div_10_div_2_div_3_div_5_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-menu", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SearchComponent_div_10_div_2_div_3_div_20_Template, 7, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SearchComponent_div_10_div_2_div_3_mat_divider_21_Template, 1, 0, "mat-divider", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const folder_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r20.selectedFolderIndex == i_r22));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !folder_r21.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", folder_r21.profileImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r21.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r21.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", folder_r21.customerId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.actions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r22 != ctx_r20.folders.length - 1);
} }
function SearchComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_div_10_div_2_div_3_Template, 22, 11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.folders);
} }
function SearchComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_div_10_div_1_Template, 11, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchComponent_div_10_div_2_Template, 4, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.showKYC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.searchTerm != "" && (ctx_r2.folders == null ? null : ctx_r2.folders.length) > 0);
} }
function SearchComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " info_outlined ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "In addition to searching in Icust,this search shows suggestion form the whole app and different section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-progress-bar", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Searching Customer ", ctx_r4.searchTerm, "....");
} }
function SearchComponent_div_14_mat_list_item_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const kyc_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", kyc_r37.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](kyc_r37.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", kyc_r37.updated, " ");
} }
function SearchComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_14_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.closeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchComponent_div_14_Template_input_keyup_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.onKYCSearching($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchComponent_div_14_mat_list_item_11_Template, 12, 3, "mat-list-item", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.KYCData);
} }
class SearchComponent {
    constructor(dialogRef, cdr, apiService, sanitizer, router, ls, dataService, jwtService, tokenService, service, snack) {
        this.dialogRef = dialogRef;
        this.cdr = cdr;
        this.apiService = apiService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.ls = ls;
        this.dataService = dataService;
        this.jwtService = jwtService;
        this.tokenService = tokenService;
        this.service = service;
        this.snack = snack;
        this.recordingSpeech = false;
        this.showText = false;
        this.folders = [];
        this.show4 = false;
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputTouched = false;
        this.loading = false;
        this.searchTerm = '';
        this.searchKey = 'customerName';
        this.service.init();
    }
    ngOnInit() {
        this.selectedTabName = 'Name';
        this.operationTab = [
            {
                label: 'Name',
                icon: 'person',
                searchKey: 'customerName'
            },
            {
                label: 'Phone Number',
                icon: 'call',
                searchKey: 'phoneNumber'
            },
            {
                label: 'Email Id',
                icon: 'email',
                searchKey: 'primaryEmailAdress'
            },
            {
                label: 'Customer Id ',
                icon: 'assignment_ind',
                searchKey: 'customerId'
            },
            {
                label: 'National Id',
                icon: 'language',
                searchKey: 'nationalId'
            },
            {
                label: 'Account Id',
                icon: 'contacts',
                searchKey: 'accountId'
                // imageUrl:'assets/images/account-id-icon.png',
                // selectedImageUrl:'assets/images/account-id-selected.png'
            }
        ];
        this.serviceList = [
            { label: 'Kyc Screening', serviceName: 'kycScreening', type: 'KYCTASKS' },
            { label: 'Customer Onboarding', serviceName: 'customerOnboarding', type: 'CUSTOMERTASKS' },
            { label: 'Card Origination', serviceName: 'cardOrigination', type: 'CARDACCTASKS' },
            { label: 'Loan Account', serviceName: 'loanAccount', type: 'LOANACCTASKS' },
            { label: 'Create Account', serviceName: 'createAccount', type: 'TASKS' },
            { label: 'Customer 360', serviceName: 'customer360', type: 'DASHBOARD360' }
        ];
        this.KYCData = [
            {
                name: 'KYC screening',
                updated: 'customer Operation',
                icon: 'content_copy',
            },
            {
                name: 'KYC documents',
                updated: '',
                icon: ''
            },
            {
                name: 'KYC Guide',
                updated: '',
                icon: ''
            },
            {
                name: 'What are KYC Documents',
                updated: '',
                icon: ''
            },
            {
                name: 'KYC updation for customers',
                updated: '',
                icon: ''
            }
        ];
        this.kyc = this.KYCData;
    }
    ngAfterViewInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.inputElement.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pluck"])('target', 'value'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((value) => value.length > 1)).subscribe((value) => { this.searchbyWord(value); });
    }
    onTabSelection(tabName, searchkey) {
        this.selectedTabName = tabName;
        this.searchTerm = '';
        this.searchKey = searchkey;
        this.folders = [];
    }
    _keyPress(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (this.selectedTabName == 'Phone Number' || this.selectedTabName == 'Customer Id' || this.selectedTabName == 'National Id' || this.selectedTabName == 'Account Id') {
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
            return true;
        }
        else if (this.selectedTabName == 'Name') {
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)
                return true;
            else
                return false;
        }
    }
    searchbyWord(value) {
        console.log(this.searchTerm);
        this.selectedFolderIndex = null;
        this.showText = false;
        console.log(this.searchKey);
        // this.handleSearch(value);
        if (this.searchKey == 'primaryEmailAdress') {
            console.log('email');
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
                this.getCustomerData(this.searchKey, value);
            }
        }
        else if (this.searchKey == 'phoneNumber') {
            console.log('phione');
            if (value.length == 10) {
                this.getCustomerData(this.searchKey, value);
            }
        }
        else {
            console.log('else');
            if (value.length > 1) {
                this.getCustomerData(this.searchKey, value);
            }
        }
    }
    // handleSearch(inputValue: any){
    //   let key :  string = "";
    //   if (!isNaN(inputValue)) {
    //     this.tokenService.getCustomerByCustomerID("accountId", inputValue).subscribe((resp) => {
    //       this.searchResult = resp;
    //       if (this.searchResult) {
    //         this.getCustomerData("accountId", inputValue);
    //       }
    //       else {
    //         this.getCustomerData("customerId", inputValue);
    //       }
    //     });
    //   }
    //   else if (inputValue.substring(0, 3) == "KYC") {
    //     this.getCustomerData("kycReference", inputValue);
    //   }
    //   else {
    //     this.getCustomerData("customerName", inputValue);
    //   }
    // }
    getCustomerData(key, value) {
        this.loading = true;
        if (this.tokenService.getCustomerByCustomerID != null) {
            this.tokenService.getCustomerByCustomerID(key, value)
                .subscribe((items) => {
                console.log(items);
                this.loading = false;
                this.folders = items;
                // this.profileData = items[0];
                this.showKYC = false;
                this.cdr.markForCheck();
                if (items == null) {
                    this.loading = false;
                    this.snack.open("Data is not found for Customer :", this.searchTerm, {
                        duration: 4000,
                        verticalPosition: 'top',
                        horizontalPosition: 'right'
                    });
                    this.progressBar.mode = 'determinate';
                }
            });
        }
    }
    handleClear() {
        this.searchTerm = '';
        this.folders = [];
        this.cdr.markForCheck();
        this.loading = false;
    }
    onlySearch(event) {
        this.showingonlySerach = false;
        if (this.folders.length > 0) {
            let result = this.folders.filter(s => s.name.toLowerCase().includes(event.target.value.toLowerCase()) || s.name.toLowerCase().includes(event.target.value.toLowerCase()));
            this.folders = result;
        }
    }
    closeDialog() {
        this.dialogRef.close();
    }
    onImgClick(item) {
        // others/mainNavigation
        localStorage.setItem('customerId', item.customerId);
        //  this.router.navigateByUrl('/others/mainNavigation');
        // this.gettingaCustomerDetails(customerId);
        let data = {
            customerId: item.customerId
        };
        this.dataService.shareSearchItem(data);
        let type = "DASHBOARD360";
        window.open(`${app_shared_services_token_service_token_service__WEBPACK_IMPORTED_MODULE_11__["REDIRECT_HOST"]}?code=${this.jwtService.getEncryptedToken()}&appType=${type}&CID_360=${item.customerId}`, "_blank");
        this.dialogRef.close();
    }
    // gettingaCustomerDetails(customerId) {
    //   this.apiService.getCasaAccDetails(customerId).subscribe((allCustomerDEtails: any) => {
    //     console.log("All Customer Details", allCustomerDEtails);
    //     console.log(allCustomerDEtails.customerName);
    //   });
    // }
    speechRecording() {
        this.showText = false;
        this.service.start();
        this.recordingSpeech = true;
        this.service.speechStop.subscribe((resp) => {
            if (resp) {
                this.recordingSpeech = false;
                this.searchTerm = this.service.text;
                if (this.searchTerm) {
                    this.getCustomerData(this.searchKey, this.searchTerm);
                }
                else {
                    this.showText = true;
                }
            }
        });
        // this.recordingSpeech = !this.recordingSpeech;
        // if(this.recordingSpeech){
        //   this.service.start();
        // }
    }
    onClickFolder(index, folder) {
        this.selectedFolderIndex = index;
        this.actions = [];
        for (let i = 0; i < this.serviceList.length; i++) {
            for (const [key, value] of Object.entries(folder.servicesInfo)) {
                if ((key == this.serviceList[i].serviceName && value == true)) {
                    this.actions.push(this.serviceList[i]);
                    break;
                }
            }
        }
    }
    onClickAction(folder, type, searchTerm) {
        if (type == 'DASHBOARD360') {
            this.onImgClick(folder);
        }
        else {
            let theme = this.ls.getItem('theme');
            window.open(`${app_shared_services_token_service_token_service__WEBPACK_IMPORTED_MODULE_11__["REDIRECT_HOST"]}?code=${this.jwtService.getEncryptedToken()}&appType=${type}&theme=${theme}&searchTerm=${searchTerm}`, '_blank');
        }
        this.dialogRef.close();
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_12__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_token_service_token_service__WEBPACK_IMPORTED_MODULE_11__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_voice_recognition_service__WEBPACK_IMPORTED_MODULE_13__["VoiceRecognitionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressBar = _t.first);
    } }, outputs: { search: "search" }, decls: 15, vars: 6, consts: [["fxLayout", "row", "fxLayoutAlign", "end stretch"], [1, "mat-18", 2, "cursor", "pointer", 3, "click"], ["class", "errorMsg", 4, "ngIf"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "space-between"], ["fxLayout", "column", "fxLayoutAlign", "center center", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "m-333", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start center", "class", "infoDiv", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], [4, "ngIf"], [1, "errorMsg"], ["fxLayout", "column", "fxLayoutAlign", "center center", 3, "ngClass", "click"], [1, "icon4", 3, "ngClass"], [1, "labelClass"], [1, "m-333"], ["fxLayoutAlign", "center center", "fxLayoutGap", "space-around", "class", "searchBox", 4, "ngIf"], ["class", "main-folder-div", 4, "ngIf"], ["fxLayoutAlign", "center center", "fxLayoutGap", "space-around", 1, "searchBox"], ["fxFlex", "7%", 1, "searchIcon-div"], ["matPrefix", "", "mat-icon-button", "", 4, "ngIf"], ["fxFlex", "90%", "class", "full-width", "class", "searchInput", 4, "ngIf"], ["fxFlex", "7%", 1, "tooltip"], ["matPrefix", "", "mat-icon-button", "", 3, "click"], [3, "ngClass"], [1, "tooltiptext"], ["matPrefix", "", "mat-icon-button", ""], [1, "searchIcon"], ["fxFlex", "90%", 1, "searchInput"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange", "keypress"], ["input", ""], [1, "main-folder-div"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "full-width"], ["class", "operation-card", "fxLayout", "column", 4, "ngFor", "ngForOf"], ["fxLayout", "column", 1, "operation-card"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "folderDiv", 3, "ngClass", "click"], ["fxLayout", "row"], ["mat-card-avatar", ""], ["fxLayout", "row", "fxLayoutAlign", "center center", "class", "defaultImage", 4, "ngIf"], ["fxLayout", "row", "class", "defaultImage", 4, "ngIf"], ["fxLayout", "column", 1, "folder-details"], ["fxLayout", "row", "fxLayoutGap", "5px", 1, "label-font"], [1, "label1"], [1, "label2"], [1, "id-font"], ["fxLayoutAlign", "center", 1, "icon"], [1, "colon-icon", 3, "matMenuTriggerFor"], ["src", "assets/images/colon-symbol.png", "alt", "", 1, "colonIcon"], ["xPosition", "before"], ["menu", "matMenu"], ["fxLayout", "column", "fxLayoutGap", "10px"], ["class", "actionList", 3, "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "defaultImage"], [1, "imageText"], ["fxLayout", "row", 1, "defaultImage"], ["alt", "", 1, "defaultImage", 3, "src"], [1, "actionList", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "10px"], [1, "actionIcon"], [1, "actionTitle"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "infoDiv"], [1, "infoIcon"], [1, "infoText"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "30"], ["fxFlex", "40", "fxFlexAlign", "center"], [1, "text-center"], ["mode", "indeterminate"], ["fxLayout", "column wrap"], ["fxFlex", "100", "fxLayoutAlign", "end stretch"], ["fxFlex", "25", "fxLayoutAlign", "start stretch", "fxLayoutGap", "space-around"], ["type", "text", "placeholder", "icust search", 3, "keyup"], ["fxFlex", "25", "fxLayoutAlign", "start stretch"], ["id", "kycList", 4, "ngFor", "ngForOf"], ["id", "kycList"], ["id", "listmat"], ["color", "primary", "id", "ic"], ["mat-line", "", 2, "margin-left", "100px"], ["mat-line", "", 2, "margin-left", "100px", "color", "rgb(223, 217, 217)"], ["fxLayoutAlign", "end ", 2, "margin-left", "500px"], ["src", "assets/images/colon-symbol.png", "alt", ""]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_mat_icon_click_1_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " You can search any specific tag.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchComponent_span_5_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchComponent_mat_card_9_Template, 5, 4, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchComponent_div_10_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchComponent_div_11_Template, 5, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SearchComponent_div_13_Template, 7, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SearchComponent_div_14_Template, 13, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.operationTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showKYC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchTerm == "" && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showKYC);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__["DefaultClassDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatPrefix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardAvatar"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenu"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexAlignDirective"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatLine"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["UpperCasePipe"]], styles: [".card1[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: transparent;\n  font-size: 0px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.icon4[_ngcontent-%COMP%] {\n  color: gray;\n  margin-bottom: 10px;\n  height: 30px;\n  width: 30px;\n  font-size: 30px;\n}\n\n.searchButton[_ngcontent-%COMP%] {\n  padding-left: 2%;\n}\n\n#listmat[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background: #b4b3b3;\n  padding: 10px;\n  color: dodgerblue;\n  width: 50px;\n  height: 55px;\n  text-align: center;\n  justify-content: space-around;\n  position: fixed;\n}\n\n.textAlign[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.searchDiv[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.searchBox[_ngcontent-%COMP%] {\n  border-width: thin;\n  border-radius: 40px;\n  border-color: #a5a5a5;\n  box-shadow: 0 1px 1px 1px #e2e2e2;\n  position: relative;\n  z-index: 1;\n}\n\n.mat-icon1[_ngcontent-%COMP%] {\n  transform: translateY(-20px);\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin-left: 34rem;\n  cursor: pointer;\n}\n\n.labal1[_ngcontent-%COMP%] {\n  padding-left: 26px;\n}\n\n.labal2[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 100px;\n  background-color: #4d4d4d;\n  color: white;\n  font-size: 8px;\n  text-align: center;\n  border-radius: 4px;\n  padding: 1px;\n  padding-top: 2px;\n  \n  z-index: 2;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.iconColor[_ngcontent-%COMP%] {\n  color: red;\n  text-align: center;\n}\n\n.errorMsg[_ngcontent-%COMP%] {\n  color: red;\n  text-align: center;\n  padding-left: 25%;\n}\n\n.mat-hint[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-left: 2%;\n  color: #c1c1c1;\n}\n\n.material-symbols-outlined-selected[_ngcontent-%COMP%] {\n  color: #1d5286;\n}\n\n.material-symbols-outlined[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n}\n\n.labelClass[_ngcontent-%COMP%] {\n  font-size: smaller;\n  font-weight: 600;\n}\n\n.colonIcon[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.colon-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n}\n\n.card-class[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  min-width: 13.5%;\n  cursor: pointer;\n}\n\n.card-class-selected[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  min-width: 13.5%;\n  cursor: pointer;\n  border-top: #1d5286 solid 8px;\n}\n\n.selected-card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border-top: solid 8px #304156;\n  min-width: 13.5%;\n}\n\n.main-folder-div[_ngcontent-%COMP%] {\n  position: relative;\n  top: -30px;\n  padding: 40px 15px 10px 15px;\n  box-shadow: 0 1px 0px 1px #e2e2e2;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.searchIcon-div[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.searchIcon[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n  font-size: 14px;\n}\n\n.searchInput[_ngcontent-%COMP%] {\n  padding: 15px 0px 15px 10px;\n  font-size: large;\n}\n\n.folderDiv[_ngcontent-%COMP%] {\n  padding: 5px 15px 5px 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n.folderDiv-selected[_ngcontent-%COMP%] {\n  background-color: #b9c4d670;\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n}\n\n.defaultImage[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: #1d5286;\n}\n\n.imageText[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 10px;\n  font-weight: lighter;\n}\n\n.folder-details[_ngcontent-%COMP%] {\n  align-items: start;\n  margin-left: 10px;\n}\n\n.label-font[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.id-font[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #b0b0b0;\n}\n\n.actionList[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.actionIcon[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #b9c4d670;\n}\n\n.actionList[_ngcontent-%COMP%]:hover   .actionIcon[_ngcontent-%COMP%] {\n  color: #1d5286;\n}\n\n.actionTitle[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: 600;\n  font-family: sans-serif;\n  color: #1d5286;\n}\n\n.infoIcon[_ngcontent-%COMP%] {\n  color: orange;\n  font-size: large;\n  height: auto;\n}\n\n.infoText[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-size: smaller;\n  color: #544c4c;\n  font-weight: 500;\n}\n\n.infoDiv[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-left: 10px;\n}\n\n  .mat-menu-panel {\n  margin-right: 25px;\n  padding: 10px;\n}\n\n  .cdk-overlay-backdrop {\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n}\n\n  .mat-button-focus-overlay {\n  background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQW1CO0FBQXZCOztBQUdBO0VBQ0ksYUFBYTtBQUFqQjs7QUFFQTtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2xCOztBQUdBO0VBQU8sU0FBUTtFQUFDLFVBQVM7QUFFekI7O0FBREE7RUFBYSx3QkFBc0I7QUFLbkM7O0FBSkE7RUFFSSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQU1uQjs7QUFKQTtFQUNJLGdCQUFnQjtBQU9wQjs7QUFMQTtFQUNJLG1CQUFtQjtFQUNuQixtQkFBOEI7RUFDOUIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUVsQiw2QkFBNkI7RUFDN0IsZUFBYztBQU9sQjs7QUFMQTtFQUNJLGlCQUFpQjtBQVFyQjs7QUFOQTtFQUNJLGdCQUFnQjtBQVNwQjs7QUFQQTtFQUdJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBRXJCLGlDQUE0QztFQUM1QyxrQkFBa0I7RUFDbEIsVUFBVTtBQU9kOztBQUpBO0VBQ0ksNEJBQTRCO0FBT2hDOztBQUpBO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWU7QUFPbkI7O0FBQ0E7RUFDSSxrQkFBa0I7QUFFdEI7O0FBQ0E7RUFDSSxpQkFBaUI7QUFFckI7O0FBQUE7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUFpQztFQUNqQyxZQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBRWhCLHlCQUFBO0VBRUEsVUFBVTtBQUNkOztBQUVFO0VBQ0UsbUJBQW1CO0FBQ3ZCOztBQUNFO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtBQUV4Qjs7QUFBRTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBR3JCOztBQURFO0VBQ0ksdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixjQUNKO0FBR0Y7O0FBREU7RUFDSSxjQUFjO0FBSXBCOztBQURFO0VBQ0ksY0FBYztBQUlwQjs7QUFERTtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFJdEI7O0FBREU7RUFDSSxVQUFVO0FBSWhCOztBQURFO0VBQ0ksbUJBQW1CO0VBQ25CLGFBQWE7QUFJbkI7O0FBREU7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFJckI7O0FBREU7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw2QkFBNkI7QUFJbkM7O0FBREU7RUFDSSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUl0Qjs7QUFERTtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLGlDQUE0QztFQUM1QywrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBSXRDOztBQUFFO0VBQ0ksa0JBQWtCO0FBR3hCOztBQUFFO0VBQ0ksY0FBYztFQUNkLGVBQWU7QUFHckI7O0FBQUU7RUFDSSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBR3RCOztBQUFFO0VBQ0ksMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQUdyQjs7QUFBRTtFQUNJLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsK0JBQStCO0FBR3JDOztBQUFFO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBRy9COztBQUFFO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFHMUI7O0FBQUU7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBR3ZCOztBQURFO0VBQ0UsZ0JBQWdCO0FBSXBCOztBQUZFO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFLbEI7O0FBSEE7RUFDSSxlQUFlO0FBTW5COztBQUpFO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQU90Qjs7QUFMRTtFQUNHLGNBQWM7QUFRbkI7O0FBTEU7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixjQUFjO0FBUXBCOztBQUxFO0VBQ0ksYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0FBUWxCOztBQU5FO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0FBU3BCOztBQU5FO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQVN2Qjs7QUFBRTtFQUNNLGtCQUFrQjtFQUN0QixhQUFhO0FBR2pCOztBQUFFO0VBQ0Usa0NBQTBCO1VBQTFCLDBCQUEwQjtBQUc5Qjs7QUFERTtFQUNFLHdDQUF3QztBQUk1QyIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZDFcclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIFxyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm1hdC1mb2N1c2VkIC5wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDBweDtcclxuXHJcbn1cclxuXHJcbmlucHV0IHtib3JkZXI6MDtvdXRsaW5lOjA7IH1cclxuaW5wdXQ6Zm9jdXMge291dGxpbmU6bm9uZSFpbXBvcnRhbnQ7fVxyXG4uaWNvbjRcclxue1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLnNlYXJjaEJ1dHRvbntcclxuICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbn1cclxuI2xpc3RtYXR7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE4MCwgMTc5LCAxNzkpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxufVxyXG4udGV4dEFsaWdue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnNlYXJjaERpdntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLnNlYXJjaEJveHtcclxuICAgIC8vIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2E1YTVhNTtcclxuICAgLy8gYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDFweCByZ2IoMjI2LCAyMjYsIDIyNik7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubWF0LWljb24xe1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxufVxyXG5cclxuLmljb257XHJcbiAgICBtYXJnaW4tbGVmdDozNHJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy8gLmxhYmFse1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDI1cHggIWltcG9ydGFudDtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4ubGFiYWwxe1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xyXG59XHJcblxyXG4ubGFiYWwye1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgNzcsIDc3KTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgXHJcbiAgICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIC5pY29uQ29sb3J7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgfVxyXG4gIC5lcnJvck1zZ3tcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgcGFkZGluZy1sZWZ0OiAyNSU7IFxyXG4gIH1cclxuICAubWF0LWhpbnQge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgY29sb3I6ICNjMWMxYzFcclxuICB9XHJcblxyXG4gIC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkLXNlbGVjdGVkIHtcclxuICAgICAgY29sb3I6ICMxZDUyODY7XHJcbiAgfVxyXG5cclxuICAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XHJcbiAgICAgIGNvbG9yOiAjYjBiMGIwO1xyXG4gIH1cclxuXHJcbiAgLmxhYmVsQ2xhc3Mge1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAuY29sb25JY29uIHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICB9XHJcblxyXG4gIC5jb2xvbi1pY29uIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNsYXNzIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgbWluLXdpZHRoOiAxMy41JTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY2xhc3Mtc2VsZWN0ZWQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDEzLjUlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJvcmRlci10b3A6ICMxZDUyODYgc29saWQgOHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGVkLWNhcmQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBib3JkZXItdG9wOiBzb2xpZCA4cHggIzMwNDE1NjtcclxuICAgICAgbWluLXdpZHRoOiAxMy41JTtcclxuICB9XHJcblxyXG4gIC5tYWluLWZvbGRlci1kaXYge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogLTMwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDQwcHggMTVweCAxMHB4IDE1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDBweCAxcHggcmdiKDIyNiwgMjI2LCAyMjYpO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuc2VhcmNoSWNvbi1kaXYge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoSWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjYjBiMGIwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoSW5wdXQge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgfVxyXG5cclxuICAuZm9sZGVyRGl2IHtcclxuICAgICAgcGFkZGluZzogNXB4IDE1cHggNXB4IDEwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5mb2xkZXJEaXYtc2VsZWN0ZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjljNGQ2NzA7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuZGVmYXVsdEltYWdlIHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ1Mjg2O1xyXG4gIH1cclxuXHJcbiAgLmltYWdlVGV4dCB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgfVxyXG5cclxuICAuZm9sZGVyLWRldGFpbHMge1xyXG4gICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAubGFiZWwtZm9udHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIC5pZC1mb250e1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgY29sb3I6ICNiMGIwYjA7XHJcbiAgfVxyXG4uYWN0aW9uTGlzdHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4gIC5hY3Rpb25JY29uIHtcclxuICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgICBjb2xvcjogI2I5YzRkNjcwO1xyXG4gIH1cclxuICAuYWN0aW9uTGlzdDpob3ZlciAuYWN0aW9uSWNvbntcclxuICAgICBjb2xvcjogIzFkNTI4NjtcclxuICB9XHJcblxyXG4gIC5hY3Rpb25UaXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBjb2xvcjogIzFkNTI4NjtcclxuICB9XHJcblxyXG4gIC5pbmZvSWNvbiB7XHJcbiAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgLmluZm9UZXh0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIGNvbG9yOiAjNTQ0YzRjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgXHJcbiAgfVxyXG5cclxuICAuaW5mb0RpdiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbi8vICAgOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5lIHtcclxuLy8gICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4vLyAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4vLyAgIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtbWVudS1wYW5lbCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHggMCAxMHB4IDEwcHg7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAuY2RrLW92ZXJsYXktYmFja2Ryb3B7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkgeyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IFxyXG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"] }, { type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_12__["JwtAuthService"] }, { type: app_shared_services_token_service_token_service__WEBPACK_IMPORTED_MODULE_11__["TokenService"] }, { type: app_shared_services_voice_recognition_service__WEBPACK_IMPORTED_MODULE_13__["VoiceRecognitionService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }]; }, { inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input']
        }], search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], progressBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"]]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ "1wtQ");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular.json`.

const environment = {
    production: false,
    apiURL: config__WEBPACK_IMPORTED_MODULE_0__["config"].apiUrl,
    // redirectUrl:'http://localhost:4200/#/sessions/callback', //local
    redirectUrl: "http://icust.rumango.com/DEMO_ROOT/Customer-Onboarding/#/sessions/callback",
    // redirectUrl: "http://localhost:49374/#/sessions/callback",
    DESKTOP_URL: 'http://192.168.0.14:8091/Icust-Digital-Banking',
    // DESKTOP_URL : "http://localhost:1212",
    chatBotRedirect: 'http://icust.rumango.com/DEMO_ROOT/Customer-Onboarding/#/others/mainNavigation'
};


/***/ }),

/***/ "Bp9c":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/dropdown.directive.ts ***!
  \*********************************************************/
/*! exports provided: AppDropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDropdownDirective", function() { return AppDropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class AppDropdownDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
    }
    closeOtherLinks(openLink) {
        this.navlinks.forEach((link) => {
            if (link !== openLink) {
                link.open = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    getUrl() {
        return this.router.url;
    }
    ngOnInit() {
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])).subscribe((event) => {
            this.navlinks.forEach((link) => {
                if (link.group) {
                    const routeUrl = this.getUrl();
                    const currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        this.closeOtherLinks(link);
                    }
                }
            });
        });
    }
}
AppDropdownDirective.ɵfac = function AppDropdownDirective_Factory(t) { return new (t || AppDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppDropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AppDropdownDirective, selectors: [["", "appDropdown", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppDropdownDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDropdown]'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "ETNk":
/*!**************************************************!*\
  !*** ./src/app/shared/services/theme.service.ts ***!
  \**************************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class ThemeService {
    constructor(document, rendererFactory) {
        this.document = document;
        this.onThemeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rumangoThemes = [
            {
                'name': 'egret-navy',
                'baseColor': '#cacaca',
                'isActive': false
            },
            {
                'name': 'egret-dark-purple',
                'baseColor': '#000000',
                'isActive': false
            }
            // {
            //   'name': 'blue',
            //   'baseColor': '#0000FF',
            //   'isActive': false
            // },
            // {
            //   'name': 'red',
            //   'baseColor': '#FF0000',
            //   'isActive': false
            // },
            // {
            //   'name': 'yellow',
            //   'baseColor': '#FFFF00',
            //   'isActive': false
        ];
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    // Invoked in AppComponent and apply 'activatedTheme' on startup
    applyMatTheme(themeName) {
        this.activatedTheme = this.rumangoThemes.find(t => t.name === themeName);
        this.flipActiveFlag(themeName);
        // this.changeTheme(themeName);
        this.renderer.addClass(this.document.body, themeName);
    }
    changeTheme(prevTheme, themeName) {
        this.renderer.removeClass(this.document.body, prevTheme);
        this.renderer.addClass(this.document.body, themeName);
        this.flipActiveFlag(themeName);
        this.onThemeChange.emit(this.activatedTheme);
    }
    changeTheme1(themeName) {
        // this.renderer.removeClass(this.document.body, prevTheme);
        this.renderer.addClass(this.document.body, themeName);
        this.flipActiveFlag(themeName);
        this.onThemeChange.emit(this.activatedTheme);
    }
    flipActiveFlag(themeName) {
        this.rumangoThemes.forEach((t) => {
            t.isActive = false;
            if (t.name === themeName) {
                t.isActive = true;
                this.activatedTheme = t;
            }
        });
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"])); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }]; }, null); })();


/***/ }),

/***/ "GyvL":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/scroll-to.directive.ts ***!
  \**********************************************************/
/*! exports provided: ScrollToDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToDirective", function() { return ScrollToDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ScrollToDirective {
    constructor(elmID, el) {
        this.elmID = elmID;
        this.el = el;
    }
    ngOnInit() { }
    currentYPosition() {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset)
            return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop)
            return document.body.scrollTop;
        return 0;
    }
    ;
    elmYPosition(eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    }
    ;
    smoothScroll() {
        if (!this.elmID)
            return;
        var startY = this.currentYPosition();
        var stopY = this.elmYPosition(this.elmID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 50);
        if (speed >= 20)
            speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY)
                    leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY)
                leapY = stopY;
            timer++;
        }
        return false;
    }
    ;
}
ScrollToDirective.ɵfac = function ScrollToDirective_Factory(t) { return new (t || ScrollToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('scrollTo'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ScrollToDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollToDirective, selectors: [["", "scrollTo", ""]], hostBindings: function ScrollToDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollToDirective_click_HostBindingHandler($event) { return ctx.smoothScroll($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollToDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[scrollTo]' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['scrollTo']
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { smoothScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "Hkp+":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/header-side/header-side.component.ts ***!
  \************************************************************************/
/*! exports provided: HeaderSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSideComponent", function() { return HeaderSideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/theme.service */ "ETNk");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/layout.service */ "rmxa");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/jwt-auth.service */ "nZzT");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/navigation.service */ "LFK6");
/* harmony import */ var app_views_others_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/views/others/search/search.component */ "Adj1");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "FKr1");































function HeaderSideComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggleProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderSideComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderSideComponent_mat_grid_tile_26_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderSideComponent_mat_grid_tile_26_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_mat_grid_tile_26_Template_mat_grid_tile_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const theme_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.changeTheme(theme_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderSideComponent_mat_grid_tile_26_mat_icon_3_Template, 2, 0, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", theme_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", theme_r7.baseColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", theme_r7.isActive);
} }
class HeaderSideComponent {
    constructor(layout, router, navService, themeService, translate, renderer, jwtAuth, ls, dialog, apiService) {
        this.layout = layout;
        this.router = router;
        this.navService = navService;
        this.themeService = themeService;
        this.translate = translate;
        this.renderer = renderer;
        this.jwtAuth = jwtAuth;
        this.ls = ls;
        this.dialog = dialog;
        this.apiService = apiService;
        this.rumangoThemes = [];
        this.currentLang = 'en';
        this.availableLangs = [
            {
                name: 'English',
                code: 'en',
            },
            {
                name: 'Spanish',
                code: 'es',
            },
        ];
        this.maintenance = 'Maintenance';
        this.compPermissions = [];
    }
    ngOnInit() {
        this.currentUser = this.ls.getItem('ICUST_USER');
        this.flag = this.ls.getItem('notification');
        this.flag1 = this.ls.getItem('profile');
        this.layoutConf = this.layout.layoutConf;
        this.rumangoThemes = this.themeService.rumangoThemes;
        this.menuItemSub = this.navService.menuItems$.subscribe((res) => {
            res = res.filter((item) => item.type !== 'icon' && item.type !== 'separator');
            let limit = 4;
            let mainItems = res.slice(0, limit);
            if (res.length <= limit) {
                return (this.menuItems = mainItems);
            }
            let subItems = res.slice(limit, res.length - 1);
            mainItems.push({
                name: 'More',
                type: 'dropDown',
                tooltip: 'More',
                icon: 'more_horiz',
                sub: subItems,
            });
            this.menuItems = mainItems;
        });
        this.user = this.ls.getItem('ICUST_USER');
        this.apiService
            .fetchTellerProfileInfo(this.user.userId)
            .subscribe((result) => {
            // this.compPermissions = result?.icustRoleInfoModel?.parentPermission
            //   .split(',')
            // .reduce(
            //   (compArr: String[], comp: String) =>
            //     compArr.includes(comp.trim())
            //       ? compArr
            //       : [...compArr, comp.trim()],
            //   []
            // );
        });
    }
    ngOnDestroy() {
        this.menuItemSub.unsubscribe();
    }
    setLang() {
        this.translate.use(this.currentLang);
    }
    changeTheme(theme) {
        this.layout.publishLayoutChange({ matTheme: theme.name });
    }
    toggleNotific() {
        this.ls.setItem('notification', true);
        this.flag = this.ls.getItem('notification');
        this.notificPanel.toggle();
    }
    toggleProfile() {
        console.log('call profile');
        this.ls.setItem('profile', true);
        this.flag1 = this.ls.getItem('profile');
        this.profilePanel.toggle();
        console.log('next one');
    }
    toggleSidenav() {
        if (this.layoutConf.sidebarStyle === 'closed') {
            return this.layout.publishLayoutChange({
                sidebarStyle: 'full',
            });
        }
        this.layout.publishLayoutChange({
            sidebarStyle: 'closed',
        });
    }
    //search implementation
    onSearch() {
        const dialogRef = this.dialog.open(app_views_others_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"], {
            width: '80%',
            disableClose: true,
            panelClass: "custom",
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    onReports() {
        console.log("enter inside settings");
        this.router.navigate(["/settings/report/reportDetails"]);
    }
    goToSettings() {
        console.log("enter inside settings");
        this.router.navigate(["/settings/profile"]);
    }
    goToPassword() {
        this.router.navigate(['/settings/change-password']);
    }
    goToMaintenance() {
        this.router.navigate(['/maintenance']);
    }
    gotoEmailchange() {
        this.router.navigate(['/settings/change-email']);
    }
    goToThemeChange() {
        this.router.navigate(['/settings/theme-change']);
    }
}
HeaderSideComponent.ɵfac = function HeaderSideComponent_Factory(t) { return new (t || HeaderSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_8__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"])); };
HeaderSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderSideComponent, selectors: [["app-header-side"]], inputs: { notificPanel: "notificPanel", profilePanel: "profilePanel" }, decls: 82, vars: 13, consts: [[1, "topbar", "toolbarBackground", 2, "background", "transparent linear-gradient(90deg, #051A2D 0%, #004C97 100%) 0% 0% no-repeat padding-box !important"], ["mat-icon-button", "", "id", "sidenavToggle", "matTooltip", "Toggle Hide/Open", 3, "click", 4, "ngIf"], [1, "topbar-branding"], ["routerLink", "/others/dashboard", 2, "padding-bottom", "20%", "font-size", "larger", "color", "white"], ["fxFlex", ""], [1, "icons-padding"], ["mat-icon-button", ""], [3, "click"], ["mat-icon-button", "", "matTooltip", "Notifications", 1, "topbar-button-right", 3, "click"], ["class", "notification-number mat-bg-warn", 4, "ngIf"], ["mat-icon-button", "", "id", "schemeToggle", "matTooltip", "Theme Change", 1, "topbar-button-right", 3, "matMenuTriggerFor"], ["themeMenu", "matMenu"], ["cols", "2", "rowHeight", "48px", 1, "theme-list"], [3, "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 1, "topbar-button-right", "mr-4", "img-button"], ["src", "assets/images/face-7.jpg", "alt", ""], [3, "matMenuTriggerFor"], ["accountMenu", "matMenu"], ["role", "list", 1, "notification-list"], ["matRipple", "", 1, "d-flex", "mb-16", "mx-8"], [1, "w-40", "h-40", "mr-16", "rounded-circle", "mat-bg-chip", "d-flex", "align-items-center", "justify-content-center"], [1, "d-flex", "flex-column", "justify-content-center", "flex-grow-1"], [1, "mb-4"], [1, "text-muted"], ["mat-icon-button", "", 3, "click"], ["color", "primary", 1, "text-muted"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item"], ["color", "primary", 1, "notific-icon", "mr-16"], ["fxLayout", "row"], [1, "message", "mx-4"], ["color", "primary", 1, "editbutton", 3, "click"], ["color", "primary", 1, "editlang", 3, "click"], ["mat-menu-item", "", 3, "click"], [2, "font-size", "medium"], ["mat-icon-button", "", "id", "sidenavToggle", "matTooltip", "Toggle Hide/Open", 3, "click"], [1, "notification-number", "mat-bg-warn"], ["mat-menu-item", "", 3, "title"], [1, "egret-swatch"], ["class", "active-icon", 4, "ngIf"], [1, "active-icon"]], template: function HeaderSideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderSideComponent_button_1_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DemoBank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_mat_icon_click_8_listener() { return ctx.onReports(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "pending_actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_mat_icon_click_11_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_button_click_13_listener() { return ctx.toggleNotific(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "notifications_none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderSideComponent_span_16_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_mat_icon_click_18_listener() { return ctx.goToSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "format_color_fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-menu", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-grid-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HeaderSideComponent_mat_grid_tile_26_Template, 4, 4, "mat-grid-tile", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-menu", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-nav-list", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_button_click_44_listener() { return ctx.gotoEmailchange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-list-item", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Password Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_mat_icon_click_55_listener() { return ctx.goToPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-list-item", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "language icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_mat_icon_click_65_listener() { return ctx.gotoEmailchange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-list-item", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "adjust icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Theme change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_mat_icon_click_75_listener() { return ctx.goToThemeChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_button_click_77_listener() { return ctx.jwtAuth.signout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.sidebarStyle !== "compact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rumangoThemes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.tellerName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.tellerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Language-", ctx.currentUser.language, "");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenu"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatNavList"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatRipple"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuItem"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridTile"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderSideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-side',
                templateUrl: './header-side.template.html',
            }]
    }], function () { return [{ type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_8__["NavigationService"] }, { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] }]; }, { notificPanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], profilePanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "IZEZ":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/excerpt.pipe.ts ***!
  \**********************************************/
/*! exports provided: ExcerptPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcerptPipe", function() { return ExcerptPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ExcerptPipe {
    transform(text, limit = 5) {
        if (text.length <= limit)
            return text;
        return text.substring(0, limit) + '...';
    }
}
ExcerptPipe.ɵfac = function ExcerptPipe_Factory(t) { return new (t || ExcerptPipe)(); };
ExcerptPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "excerpt", type: ExcerptPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExcerptPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'excerpt' }]
    }], null, null); })();


/***/ }),

/***/ "LFK6":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/navigation.service.ts ***!
  \*******************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class NavigationService {
    constructor() {
        this.iconMenu = [
            {
                type: 'separator',
                name: 'Main Items'
            },
            {
                name: 'Blank',
                type: 'link',
                // svgIcon: 'ulb_server',
                state: 'others/blank'
            },
            {
                name: "DASHBOARD",
                type: "link",
                // svgIcon: 'ulb_server',
                icon: "dashboard",
                state: 'dashboard'
            },
        ];
        this.separatorMenu = [
            {
                type: "separator",
                name: "Custom components"
            },
        ];
        this.iconTypeMenuTitle = '';
        // sets iconMenu as default;
        this.menuItems = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.iconMenu);
        // navigation component has subscribed to this Observable
        this.menuItems$ = this.menuItems.asObservable();
    }
    // different user type.
    publishNavigationChange(menuType) {
        this.menuItems.next(this.iconMenu);
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(); };
NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LjFu":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/jwt-auth.service */ "nZzT");






class AuthGuard {
    constructor(router, jwtAuth) {
        this.router = router;
        this.jwtAuth = jwtAuth;
    }
    canActivate(route, state) {
        if (this.jwtAuth.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(["/sessions/signin"], {
                queryParams: {
                    return: state.url
                }
            });
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"] }]; }, null); })();


/***/ }),

/***/ "MTQd":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/date-picker/date-picker-service.service.ts ***!
  \******************************************************************************/
/*! exports provided: DatePickerServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerServiceService", function() { return DatePickerServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class DatePickerServiceService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    sendMessage(message) {
        console.log("message", message);
        this.subject.next({ text: message });
    }
    getMessage() {
        return this.subject.asObservable();
    }
}
DatePickerServiceService.ɵfac = function DatePickerServiceService_Factory(t) { return new (t || DatePickerServiceService)(); };
DatePickerServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DatePickerServiceService, factory: DatePickerServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatePickerServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "P6Hk":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/profile/profile.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../directives/dropdown.directive */ "Bp9c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../directives/dropdown-link.directive */ "UGQK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../directives/dropdown-anchor.directive */ "r/oB");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");



















function ProfileComponent_li_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
} }
function ProfileComponent_li_16_div_2_a_1_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.icon);
} }
function ProfileComponent_li_16_div_2_a_1_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 29);
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", item_r2.svgIcon);
} }
const _c0 = function (a0) { return { background: a0 }; };
function ProfileComponent_li_16_div_2_a_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r15.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, badge_r15.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r15.value);
} }
function ProfileComponent_li_16_div_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_li_16_div_2_a_1_mat_icon_1_Template, 2, 1, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_li_16_div_2_a_1_mat_icon_2_Template, 1, 1, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_li_16_div_2_a_1_span_6_Template, 2, 7, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", item_r2.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.svgIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.badges);
} }
function ProfileComponent_li_16_div_2_a_2_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.icon);
} }
function ProfileComponent_li_16_div_2_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r20.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, badge_r20.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r20.value);
} }
function ProfileComponent_li_16_div_2_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_li_16_div_2_a_2_mat_icon_1_Template, 2, 1, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileComponent_li_16_div_2_a_2_span_5_Template, 2, 7, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r2.state, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.badges);
} }
function ProfileComponent_li_16_div_2_a_3_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.icon);
} }
function ProfileComponent_li_16_div_2_a_3_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 29);
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", item_r2.svgIcon);
} }
function ProfileComponent_li_16_div_2_a_3_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r27.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, badge_r27.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r27.value);
} }
function ProfileComponent_li_16_div_2_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_li_16_div_2_a_3_mat_icon_1_Template, 2, 1, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_li_16_div_2_a_3_mat_icon_2_Template, 1, 1, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_li_16_div_2_a_3_span_6_Template, 2, 7, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.svgIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.badges);
} }
function ProfileComponent_li_16_div_2_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemLvL2_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "", item_r2.state ? "/" + item_r2.state : "", "/", itemLvL2_r30.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemLvL2_r30.name);
} }
function ProfileComponent_li_16_div_2_ul_4_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemLvL2_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemLvL2_r30.name);
} }
function ProfileComponent_li_16_div_2_ul_4_li_1_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemLvL3_r38 = ctx.$implicit;
    const itemLvL2_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("routerLink", "", item_r2.state ? "/" + item_r2.state : "", "", itemLvL2_r30.state ? "/" + itemLvL2_r30.state : "", "/", itemLvL3_r38.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemLvL3_r38.name);
} }
function ProfileComponent_li_16_div_2_ul_4_li_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_li_16_div_2_ul_4_li_1_ul_3_li_1_Template, 4, 4, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemLvL2_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", itemLvL2_r30.sub);
} }
function ProfileComponent_li_16_div_2_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_li_16_div_2_ul_4_li_1_a_1_Template, 4, 3, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_li_16_div_2_ul_4_li_1_a_2_Template, 6, 1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_li_16_div_2_ul_4_li_1_ul_3_Template, 2, 1, "ul", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemLvL2_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemLvL2_r30.type !== "dropDown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemLvL2_r30.type === "dropDown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemLvL2_r30.type === "dropDown");
} }
function ProfileComponent_li_16_div_2_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_li_16_div_2_ul_4_li_1_Template, 4, 3, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.sub);
} }
function ProfileComponent_li_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_li_16_div_2_a_1_Template, 7, 5, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_li_16_div_2_a_2_Template, 6, 4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_li_16_div_2_a_3_Template, 9, 4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_li_16_div_2_ul_4_Template, 2, 1, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.type === "dropDown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.type === "dropDown");
} }
function ProfileComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_li_16_div_1_Template, 4, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_li_16_div_2_Template, 5, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.type === "separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r2.disabled && item_r2.type !== "separator" && item_r2.type !== "icon");
} }
function ProfileComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Matching Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileComponent {
    constructor(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.menuItems = [];
        // Dummy notifications
        this.notifications = [{
                message: 'Language',
                icon: ' language icon',
                route: '/',
                color: 'primary',
                click: 'language()'
            }, {
                message: 'User Name',
                icon: 'person',
                route: '/',
                color: 'accent'
            }, {
                message: 'Password Change',
                icon: 'password',
                route: '/',
                color: 'warn'
            }, {
                message: 'Email',
                icon: 'email',
                route: '/',
                color: 'warn'
            }, {
                message: 'Theme change',
                icon: 'adjust icon',
                route: '/',
                color: 'warn'
            }];
        this.flag = false;
    }
    ngOnInit() {
        console.log("need to check api");
        this.menuItems = this.setMenuItem();
        // ,{
        //   name: 'Role Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'material',
        // },
        // {
        //   name: 'User Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: '/maintenance/main/userMaintenance',
        // },
        // {
        //   name: 'Country and State Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: '/maintenance/main/countryState',
        // },
        // {
        //   name: 'Entity Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'maintenance/main/entity/list',
        // },
        // {
        //   name: 'Bank Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'maintenance/main/bank/list',
        // },
        // {
        //   name: 'Branch Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'maintenance/main/branch',
        // },
        // {
        //   name: 'Currency Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'maintenance/main/currencyMaint',
        // },
        // {
        //   name: 'Holiday Maintenance',
        //   type: 'dropDown',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'maintenance/main/holiday',
        //   sub: [
        //     {name: 'Branch Holidays', state: 'maintenance/main/holiday/BranchHoliday'},
        //     {name: 'Currency Holidays', state: 'maintenance/main/holiday/currencyholiday'},
        //     {name: 'Clearing Holidays', state: 'maintenance/main/holiday/clearingholiday'}
        //   ]
        // },
        // {
        //   name: 'Product Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'material',
        // },
        // {
        //   name: 'Workflow Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'material',
        // },
        // {
        //   name: 'Customer Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'material',
        // },
        // {
        //   name: 'Account Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'material',
        // },
        // {
        //   name: 'Biller Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'maintenance/main/billerInfoMaint',
        // },
        // {
        //   name: 'Till/Vault Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'maintenance/main/tillVaultltMaster',
        // },
        // {
        //   name: 'Till/Vault Branch Mapping Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'maintenance/main/tillVaultltBranch',
        // },
        // {
        //   name: 'Till/Vault Configuaration Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'maintenance/main/tillVaultConfig',
        // },
        // {
        //   name: 'Denomination Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'maintenance/main/denominationMaster',
        // },
        // {
        //   name: 'Till/Vault Currency Balance Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'maintenance/main/tillVaultCcyBal',
        // },
        // {
        //   name: 'Till/Vault Status Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'maintenance/main/tillVaultStatus',
        // },
        // {
        //   name: 'Till/Vault Denomination Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'maintenance/main/tillVaultDenom',
        // },
        // {
        //   name: 'Transaction Cash Master Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'maintenance/main/transactionCashMaster',
        // },
        // {
        //   name: 'Account Type Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'maintenance/main/accountType',
        // },
        // {
        //   name: 'Base Denomination Maintenance',
        //   type: 'link',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'maintenance/main/baseDenomination',
        // },
        // {
        //   name: 'Teller',
        //   type: 'dropDown',
        //   tooltip: 'Item',
        //   icon: 'done',
        //   state: 'material',
        //   sub: [
        //     {name: 'Branch Maintenance', state: 'cards'},
        //     {name: 'Branch Operations', state: 'buttons'},
        //     {name: 'Dynamic Menu', state: ''}
        //   ]
        // },
        // );
        this.router.events.subscribe((routeChange) => {
            if (routeChange instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.profilePanel.close();
            }
        });
        this.apiService.fetchTellerProfileInfo(1).subscribe((result) => {
            console.log("result ::", result);
            this.tellerprofileresult = result;
        });
    }
    setMenuItem() {
        return [{
                name: 'Dashboard',
                type: 'link',
                tooltip: 'Item',
                icon: 'done',
                state: 'others/dashboard',
            }, {
                name: 'Maintenance',
                type: 'dropDown',
                tooltip: 'Item',
                icon: 'done',
                state: '/maintenance/main/',
                sub: [
                    { name: 'Security Policy', type: 'link', state: 'securityPolicy' },
                    { name: 'Workflow Maintenance', type: 'link', state: 'workflow' },
                    { name: 'General Maintenance', type: 'link', state: 'material' },
                    { name: 'Menus Maintenance', type: 'link', state: 'menu-config' },
                    { name: 'Role Maintenance', type: 'link', state: 'roleMaintenance' },
                    { name: 'User Maintenance', type: 'link', state: 'userMaintenance' },
                    { name: 'Country and State Maintenance', typeof: 'link', state: 'countryState' },
                    { name: 'City Maintenance', typeof: 'link', state: 'cityMaintenance' },
                    { name: 'Entity Maintenance', type: 'link', state: 'entity/list' },
                    { name: 'Bank Maintenance', type: 'link', state: 'bank/list' },
                    { name: 'Branch Maintenance', type: 'link', state: 'branch' },
                    { name: 'Currency Maintenance', type: 'link', state: 'currencyMaint' },
                    { name: 'Customer Category', type: 'link', state: 'customerCategory' },
                    { name: 'Customer Charge Category', type: 'link', state: 'customerChargeCategory' },
                    { name: 'Currency Pair Maintenance', type: 'link', state: 'currencyPairMaintenance' },
                    { name: 'Currency Pair Rate Maintenance', type: 'link', state: 'currencyPairRateMaintenance' },
                    { name: 'Holiday Maintenance', type: 'dropDown', state: 'holiday/',
                        sub: [
                            { name: 'Branch Holidays', type: 'link', state: 'BranchHoliday' },
                            { name: 'Currency Holidays', type: 'link', state: 'currencyholiday' },
                            { name: 'Clearing Holidays', type: 'link', state: 'clearingholiday' }
                        ] },
                    { name: 'Kiosk Login', type: 'link', state: 'kioskLogin' },
                    { name: 'Product Maintenance', type: 'link', state: 'product' },
                    { name: 'Workflow Maintenance', type: 'link', state: 'material' },
                    { name: 'Customer Maintenance', type: 'link', state: 'material' },
                    { name: 'Account Maintenance', type: 'link', state: 'material' },
                    { name: 'Biller Maintenance', type: 'link', state: 'billerInfoMaint' },
                    { name: 'Till/Vault Maintenance', type: 'link', state: 'tillVaultltMaster' },
                    { name: 'Till/Vault Branch Mapping Maintenance', type: 'link',
                        state: 'tillVaultltBranch' },
                    { name: 'Till/Vault Configuaration Maintenance', type: 'link',
                        state: 'tillVaultConfig' },
                    { name: 'Denomination Maintenance', type: 'link',
                        state: 'denominationMaster' },
                    { name: 'Till/Vault Currency Balance Maintenance', type: 'link',
                        state: 'tillVaultCcyBal' },
                    { name: 'Till/Vault Status Maintenance', type: 'link',
                        state: 'tillVaultStatus' },
                    { name: 'Till/Vault Currency Denomination Balance Maintenance', type: 'link',
                        state: 'tillVaultCcyDenomBal' },
                    { name: 'Till/Vault Denomination Maintenance', type: 'link',
                        state: 'tillVaultDenom' },
                    { name: 'Transaction Cash Master Maintenance', type: 'link',
                        state: 'transactionCashMaster' },
                    { name: 'Transaction Charges Maintenance', type: 'link',
                        state: 'transactionCharges' },
                    { name: 'Account Type Maintenance', type: 'link',
                        state: 'accountType' },
                    { name: 'Base Denomination Maintenance', type: 'link',
                        state: 'baseDenomination' },
                    { name: 'Teller', type: 'dropDown', state: 'material',
                        sub: [
                            { name: 'Branch Maintenance', state: 'cards' },
                            { name: 'Branch Operations', state: 'buttons' },
                            { name: 'Dynamic Menu', state: '' }
                        ] }
                ]
            }];
    }
    letterOnly(event) {
        var charCode = event.keyCode;
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)
            return true;
        else
            return false;
    }
    onSearch(event) {
        let value = event.target.value;
        value = value.toLowerCase();
        console.log(value);
        this.flag = false;
        this.menuItems = this.setMenuItem();
        if (value.length > 0) {
            this.menuItems = this.menuItems.filter(item => item.name.slice(0, value.length).toLowerCase() == value || item.type == 'dropDown');
            this.menuItems.map(item => {
                if (item.type == 'dropDown') {
                    item.sub = item.sub.filter(sub => sub.name.slice(0, value.length).toLowerCase() == value || sub.type == 'dropDown');
                    item.sub.map(sub => {
                        if (sub.type == 'dropDown') {
                            sub.sub = sub.sub.filter(underSub => underSub.name.slice(0, value.length).toLowerCase() == value);
                            if (sub.name.slice(0, value.length).toLowerCase() == value && (sub === null || sub === void 0 ? void 0 : sub.sub.length) == 0) {
                                let subMenu = this.setMenuItem();
                                if (sub.name == 'Teller') {
                                    sub.sub = subMenu[1].sub[29].sub;
                                }
                                else if (sub.name == 'Holiday Maintenance') {
                                    sub.sub = subMenu[1].sub[11].sub;
                                }
                            }
                            item.sub = item.sub.filter(i => !i.sub || (i === null || i === void 0 ? void 0 : i.sub.length) != 0 || i.name.slice(0, value.length).toLowerCase() == value);
                        }
                    });
                    if (item.name.slice(0, value.length).toLowerCase() == value && (item === null || item === void 0 ? void 0 : item.sub.length) == 0) {
                        let maintenance = this.setMenuItem();
                        item.sub = maintenance[1].sub;
                    }
                    this.menuItems = this.menuItems.filter(item => !item.sub || (item === null || item === void 0 ? void 0 : item.sub.length) != 0 || item.name.slice(0, value.length).toLowerCase() == value);
                }
            });
            if (this.menuItems.length == 0) {
                this.flag = true;
            }
            else {
                this.flag = false;
            }
        }
        else {
            this.flag = false;
        }
    }
    clearAll(e) {
        e.preventDefault();
        this.notifications = [];
    }
    language() {
        console.log("click event");
        this.apiService.fetchTellerProfileInfo(1).subscribe((result) => {
            console.log("result ::", result);
        });
    }
    close() {
        this.flag = false;
        this.menuItems = this.setMenuItem();
        this.profilePanel.close();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], inputs: { profilePanel: "profilePanel" }, decls: 18, vars: 2, consts: [[1, "sidebar-panel"], ["id", "scroll-area", "fxLayout", "column", 1, "navigation-hold", 3, "perfectScrollbar"], [1, "sidebar-hold"], [1, "sidenav-hold"], ["fxLayout", "row", "fxLayoutGap", "5px"], ["appearance", "outline", 1, "searchbar", "ml-16"], ["matInput", "", "placeholder", "search", 3, "keypress", "keyup"], ["matSuffix", ""], ["fxFlex", ""], ["mat-icon-button", "", 3, "click"], ["appDropdown", "", 1, "sidenav"], ["appDropdownLink", "", "routerLinkActive", "open", 4, "ngFor", "ngForOf"], ["class", "errmsg", 4, "ngIf"], ["appDropdownLink", "", "routerLinkActive", "open"], ["class", "nav-item-sep", 4, "ngIf"], ["class", "lvl1", 4, "ngIf"], [1, "nav-item-sep"], [1, "text-muted"], [1, "lvl1"], ["appDropdownToggle", "", "matRipple", "", 3, "routerLink", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", "target", "_blank", 3, "href", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", 4, "ngIf"], ["class", "submenu lvl2", "appDropdown", "", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", 3, "routerLink"], ["class", "sidenav-mat-icon", 4, "ngIf"], ["class", "svgIcon", 3, "svgIcon", 4, "ngIf"], [1, "item-name", "lvl1"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf"], [1, "sidenav-mat-icon"], [1, "svgIcon", 3, "svgIcon"], [3, "ngStyle"], ["appDropdownToggle", "", "matRipple", "", "target", "_blank", 3, "href"], ["appDropdownToggle", "", "matRipple", ""], [1, "menu-caret"], ["appDropdown", "", 1, "submenu", "lvl2"], ["class", "submenu lvl3", "appDropdown", "", 4, "ngIf"], [1, "item-name", "lvl2"], ["appDropdown", "", 1, "submenu", "lvl3"], [1, "item-name", "lvl3"], [1, "errmsg"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ProfileComponent_Template_input_keypress_8_listener($event) { return ctx.letterOnly($event); })("keyup", function ProfileComponent_Template_input_keyup_8_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_12_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_li_16_Template, 3, 2, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfileComponent_div_17_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_9__["AppDropdownDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_11__["DropdownLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_13__["DropdownAnchorDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultStyleDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatHint"]], styles: [".searchbar[_ngcontent-%COMP%] {\n  width: 200px !important;\n}\n\n.errmsg[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFFcEIiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hiYXJ7XHJcbiAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxufVxyXG4uZXJybXNne1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, { profilePanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/theme.service */ "ETNk");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/navigation.service */ "LFK6");
/* harmony import */ var _services_route_parts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/route-parts.service */ "vafs");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ "LjFu");
/* harmony import */ var _guards_user_role_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/user-role.guard */ "zt0U");
/* harmony import */ var _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/app-confirm/app-confirm.service */ "3kSh");
/* harmony import */ var _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/app-loader/app-loader.service */ "3sEA");
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shared-components.module */ "jgPy");
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/shared-pipes.module */ "aYsj");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/shared-directives.module */ "mnDI");


// SERVICES











class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        _services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"],
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"],
        _services_route_parts_service__WEBPACK_IMPORTED_MODULE_4__["RoutePartsService"],
        _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
        _guards_user_role_guard__WEBPACK_IMPORTED_MODULE_6__["UserRoleGuard"],
        _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__["AppConfirmService"],
        _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_8__["AppLoaderService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"],
            _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"],
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]
        ], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"],
        _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"],
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"],
        _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"],
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]], exports: [_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"],
        _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"],
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"],
                    _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"],
                    _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]
                ],
                providers: [
                    _services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"],
                    _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"],
                    _services_route_parts_service__WEBPACK_IMPORTED_MODULE_4__["RoutePartsService"],
                    _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
                    _guards_user_role_guard__WEBPACK_IMPORTED_MODULE_6__["UserRoleGuard"],
                    _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__["AppConfirmService"],
                    _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_8__["AppLoaderService"],
                ],
                exports: [
                    _components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"],
                    _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"],
                    _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "QlUG":
/*!************************************************************!*\
  !*** ./src/app/shared/components/input/input.component.ts ***!
  \************************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "SOHV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");







class InputComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        // inputs=new Inputs();
        // inputs: Inputs = new Inputs();
        this.inputsObj = new _input__WEBPACK_IMPORTED_MODULE_2__["Inputs"]();
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.inputMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.value1 = '';
    }
    setvalue() {
        this.myControl.setValue(this.inputdefaultvalue);
        this.inputMethod.emit(this.inputdefaultvalue);
    }
    ngOnInit() {
        // this.form = this.formBuilder.group({
        //   formInput1: ['', Validators.compose([Validators.required])],
        //   formInput2: ['', Validators.required]
        // })
        // this.form2 = this.formBuilder.group({
        //   multiSelect: ['', Validators.required]
        // })
    }
    inputreset() {
        this.inputMethod.emit();
        this.myControl.reset('');
    }
    onChange(searchValue) {
        this.inputMethod.emit(searchValue);
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["app-input"]], inputs: { inputsObj: "inputsObj", inputlabel: "inputlabel", type: "type", readonly: "readonly", required: "required", placeholder: "placeholder", inputdefaultvalue: "inputdefaultvalue", item: "item" }, outputs: { inputMethod: "inputMethod" }, decls: 6, vars: 6, consts: [["input", "ngForm"], ["appearance", "outline"], ["matInput", "", 3, "type", "formControl", "required", "placeholder", "readonly", "input"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputComponent_Template_input_input_5_listener($event) { return ctx.onChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.inputlabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("formControl", ctx.myControl)("required", ctx.required)("placeholder", ctx.placeholder)("readonly", ctx.readonly);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input',
                templateUrl: './input.component.html',
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { inputsObj: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputlabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputdefaultvalue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputMethod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SOHV":
/*!**************************************************!*\
  !*** ./src/app/shared/components/input/input.ts ***!
  \**************************************************/
/*! exports provided: Inputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inputs", function() { return Inputs; });
class Inputs {
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/route-parts.service */ "vafs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









class AppComponent {
    constructor(title, router, activeRoute, routePartsService) {
        this.title = title;
        this.router = router;
        this.activeRoute = activeRoute;
        this.routePartsService = routePartsService;
        this.appTitle = 'Rumango';
        this.pageTitle = '';
    }
    ngOnInit() {
        this.changePageTitle();
    }
    ngAfterViewInit() {
    }
    changePageTitle() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe((routeChange) => {
            const routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);
            if (!routeParts.length) {
                return this.title.setTitle(this.appTitle);
            }
            // Extract title from parts;
            this.pageTitle = routeParts
                .reverse()
                .map((part) => part.title)
                .reduce((partA, partI) => { return `${partA} > ${partI}`; });
            this.pageTitle += ` | ${this.appTitle}`;
            this.title.setTitle(this.pageTitle);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_3__["RoutePartsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".mat-header-cell {\r\n    font-weight: 900 !important;\r\n    background-color: #dfe8f1 !important;\r\n    color: black !important;\r\n    font-size: 13px !important;\r\n    font-family: 'Archivo' !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGlDQUFpQztFQUNuQyIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlOGYxICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBcmNoaXZvJyAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_3__["RoutePartsService"] }]; }, null); })();


/***/ }),

/***/ "TgYD":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidenav/sidenav.component.ts ***!
  \****************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/dropdown.directive */ "Bp9c");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../directives/dropdown-link.directive */ "UGQK");
/* harmony import */ var _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/dropdown-anchor.directive */ "r/oB");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















function SidenavComponent_div_1_div_5_button_1_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.icon);
} }
function SidenavComponent_div_1_div_5_button_1_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 15);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", item_r3.svgIcon);
} }
function SidenavComponent_div_1_div_5_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_div_1_div_5_button_1_mat_icon_1_Template, 2, 1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_div_1_div_5_button_1_mat_icon_2_Template, 1, 1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", item_r3.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", item_r3.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.svgIcon);
} }
function SidenavComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_div_1_div_5_button_1_Template, 3, 4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r3.disabled && item_r3.type === "icon");
} }
const _c0 = function () { return { margin: "0 -24px" }; };
function SidenavComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidenavComponent_div_1_div_5_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.iconTypeMenuTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.menuItems);
} }
function SidenavComponent_li_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, item_r10.name));
} }
function SidenavComponent_li_3_div_2_a_1_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.icon);
} }
function SidenavComponent_li_3_div_2_a_1_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 15);
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", item_r10.svgIcon);
} }
const _c1 = function (a0) { return { background: a0 }; };
function SidenavComponent_li_3_div_2_a_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r23.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, badge_r23.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r23.value);
} }
function SidenavComponent_li_3_div_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_a_1_mat_icon_1_Template, 2, 1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_a_1_mat_icon_2_Template, 1, 1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidenavComponent_li_3_div_2_a_1_span_7_Template, 2, 7, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", item_r10.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.svgIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, item_r10.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r10.badges);
} }
function SidenavComponent_li_3_div_2_a_2_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.icon);
} }
function SidenavComponent_li_3_div_2_a_2_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r28.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, badge_r28.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r28.value);
} }
function SidenavComponent_li_3_div_2_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_a_2_mat_icon_1_Template, 2, 1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidenavComponent_li_3_div_2_a_2_span_6_Template, 2, 7, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r10.state, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, item_r10.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r10.badges);
} }
function SidenavComponent_li_3_div_2_a_3_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.icon);
} }
function SidenavComponent_li_3_div_2_a_3_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 15);
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", item_r10.svgIcon);
} }
function SidenavComponent_li_3_div_2_a_3_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r35.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, badge_r35.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r35.value);
} }
function SidenavComponent_li_3_div_2_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_a_3_mat_icon_1_Template, 2, 1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_a_3_mat_icon_2_Template, 1, 1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidenavComponent_li_3_div_2_a_3_span_7_Template, 2, 7, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.svgIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, item_r10.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r10.badges);
} }
function SidenavComponent_li_3_div_2_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemLvL2_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "", item_r10.state ? "/" + item_r10.state : "", "/", itemLvL2_r38.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, itemLvL2_r38.name));
} }
function SidenavComponent_li_3_div_2_ul_4_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemLvL2_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, itemLvL2_r38.name));
} }
function SidenavComponent_li_3_div_2_ul_4_li_1_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemLvL3_r46 = ctx.$implicit;
    const itemLvL2_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("routerLink", "", item_r10.state ? "/" + item_r10.state : "", "", itemLvL2_r38.state ? "/" + itemLvL2_r38.state : "", "/", itemLvL3_r46.state, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, itemLvL3_r46.name));
} }
function SidenavComponent_li_3_div_2_ul_4_li_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_ul_4_li_1_ul_3_li_1_Template, 5, 6, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemLvL2_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", itemLvL2_r38.sub);
} }
function SidenavComponent_li_3_div_2_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_ul_4_li_1_a_1_Template, 5, 5, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_ul_4_li_1_a_2_Template, 7, 3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidenavComponent_li_3_div_2_ul_4_li_1_ul_3_Template, 2, 1, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemLvL2_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemLvL2_r38.type !== "dropDown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemLvL2_r38.type === "dropDown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemLvL2_r38.type === "dropDown");
} }
function SidenavComponent_li_3_div_2_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_ul_4_li_1_Template, 4, 3, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r10.sub);
} }
function SidenavComponent_li_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_a_1_Template, 8, 7, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_a_2_Template, 7, 6, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidenavComponent_li_3_div_2_a_3_Template, 10, 6, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidenavComponent_li_3_div_2_ul_4_Template, 2, 1, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.type === "dropDown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.type === "dropDown");
} }
function SidenavComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_1_Template, 5, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_Template, 5, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.type === "separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r10.disabled && item_r10.type !== "separator" && item_r10.type !== "icon");
} }
class SidenavComponent {
    constructor() {
        this.menuItems = [];
    }
    ngOnInit() { }
    // Only for demo purpose
    addMenuItem() {
        this.menuItems.push({
            name: 'ITEM',
            type: 'dropDown',
            tooltip: 'Item',
            icon: 'done',
            state: 'material',
            sub: [
                { name: 'SUBITEM', state: 'cards' },
                { name: 'SUBITEM', state: 'buttons' }
            ]
        });
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], inputs: { menuItems: ["items", "menuItems"], hasIconTypeMenuItem: ["hasIconMenu", "hasIconTypeMenuItem"], iconTypeMenuTitle: ["iconMenuTitle", "iconTypeMenuTitle"] }, decls: 4, vars: 2, consts: [[1, "sidenav-hold"], ["class", "icon-menu mb-16", 4, "ngIf"], ["appDropdown", "", 1, "sidenav"], ["appDropdownLink", "", "routerLinkActive", "open", 4, "ngFor", "ngForOf"], [1, "icon-menu", "mb-16"], [1, "mb-16", "nav-item-sep"], [3, "ngStyle"], [1, "text-muted", "icon-menu-title"], ["class", "icon-menu-item", 4, "ngFor", "ngForOf"], [1, "icon-menu-item"], ["mat-raised-button", "", "routerLinkActive", "mat-bg-primary", 3, "matTooltip", "routerLink", 4, "ngIf"], ["mat-raised-button", "", "routerLinkActive", "mat-bg-primary", 3, "matTooltip", "routerLink"], ["class", "sidenav-mat-icon", 4, "ngIf"], ["class", "svgIcon", 3, "svgIcon", 4, "ngIf"], [1, "sidenav-mat-icon"], [1, "svgIcon", 3, "svgIcon"], ["appDropdownLink", "", "routerLinkActive", "open"], ["class", "nav-item-sep", 4, "ngIf"], ["class", "lvl1", 4, "ngIf"], [1, "nav-item-sep"], [1, "text-muted"], [1, "lvl1"], ["appDropdownToggle", "", "matRipple", "", 3, "routerLink", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", "target", "_blank", 3, "href", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", 4, "ngIf"], ["class", "submenu lvl2", "appDropdown", "", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", 3, "routerLink"], [1, "item-name", "lvl1"], ["fxFlex", ""], [3, "class", "ngStyle", 4, "ngFor", "ngForOf"], ["appDropdownToggle", "", "matRipple", "", "target", "_blank", 3, "href"], ["appDropdownToggle", "", "matRipple", ""], [1, "menu-caret"], ["appDropdown", "", 1, "submenu", "lvl2"], ["class", "submenu lvl3", "appDropdown", "", 4, "ngIf"], [1, "item-name", "lvl2"], ["appDropdown", "", 1, "submenu", "lvl3"], [1, "item-name", "lvl3"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_div_1_Template, 6, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidenavComponent_li_3_Template, 3, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasIconTypeMenuItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["AppDropdownDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultStyleDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_9__["DropdownLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_10__["DropdownAnchorDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRipple"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.template.html'
            }]
    }], function () { return []; }, { menuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['items']
        }], hasIconTypeMenuItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['hasIconMenu']
        }], iconTypeMenuTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['iconMenuTitle']
        }] }); })();


/***/ }),

/***/ "UGQK":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-link.directive.ts ***!
  \**************************************************************/
/*! exports provided: DropdownLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownLinkDirective", function() { return DropdownLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.directive */ "Bp9c");




class DropdownLinkDirective {
    constructor(nav) {
        this.nav = nav;
    }
    get open() {
        return this._open;
    }
    set open(value) {
        this._open = value;
        // if (value) {
        //   this.nav.closeOtherLinks(this);
        // }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.open = !this.open;
    }
}
DropdownLinkDirective.ɵfac = function DropdownLinkDirective_Factory(t) { return new (t || DropdownLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"])); };
DropdownLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownLinkDirective, selectors: [["", "appDropdownLink", ""]], hostVars: 2, hostBindings: function DropdownLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.open);
    } }, inputs: { group: "group", open: "open" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDropdownLink]',
            }]
    }], function () { return [{ type: _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"]]
            }] }]; }, { group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.open']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "UnY0":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/sidebar-side/sidebar-side.component.ts ***!
  \**************************************************************************/
/*! exports provided: SidebarSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarSideComponent", function() { return SidebarSideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/navigation.service */ "LFK6");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/theme.service */ "ETNk");
/* harmony import */ var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/layout.service */ "rmxa");
/* harmony import */ var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/jwt-auth.service */ "nZzT");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "TgYD");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
















function SidebarSideComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 13);
} }
const _c0 = function (a0) { return { active: a0 }; };
function SidebarSideComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarSideComponent_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toggleCollapse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r1.layoutConf.sidebarCompactToggle));
} }
class SidebarSideComponent {
    constructor(navService, themeService, layout, jwtAuth) {
        this.navService = navService;
        this.themeService = themeService;
        this.layout = layout;
        this.jwtAuth = jwtAuth;
    }
    ngOnInit() {
        this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
        this.menuItemsSub = this.navService.menuItems$.subscribe(menuItem => {
            this.menuItems = menuItem;
            //Checks item list has any icon type.
            this.hasIconTypeMenuItem = !!this.menuItems.filter(item => item.type === "icon").length;
        });
        this.layoutConf = this.layout.layoutConf;
    }
    ngAfterViewInit() { }
    ngOnDestroy() {
        if (this.menuItemsSub) {
            this.menuItemsSub.unsubscribe();
        }
    }
    toggleCollapse() {
        if (this.layoutConf.sidebarCompactToggle) {
            this.layout.publishLayoutChange({
                sidebarCompactToggle: false
            });
        }
        else {
            this.layout.publishLayoutChange({
                // sidebarStyle: "compact",
                sidebarCompactToggle: true
            });
        }
    }
}
SidebarSideComponent.ɵfac = function SidebarSideComponent_Factory(t) { return new (t || SidebarSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"])); };
SidebarSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarSideComponent, selectors: [["app-sidebar-side"]], decls: 16, vars: 6, consts: [[1, "sidebar-panel"], ["id", "scroll-area", "fxLayout", "column", 1, "navigation-hold", 3, "perfectScrollbar"], [1, "sidebar-hold"], [1, "branding"], [1, "app-logo-text"], ["style", "margin: auto", 4, "ngIf"], ["class", "sidebar-compact-switch", 3, "ngClass", "click", 4, "ngIf"], [1, "app-user"], [1, "app-user-photo"], ["src", "assets/images/face-7.jpg", "alt", "", 1, "mat-elevation-z1"], [1, "app-user-name", "mb-8"], [1, "icon-xs", "text-muted"], [3, "items", "hasIconMenu", "iconMenuTitle"], [2, "margin", "auto"], [1, "sidebar-compact-switch", 3, "ngClass", "click"]], template: function SidebarSideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Rumango");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarSideComponent_span_6_Template, 1, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidebarSideComponent_div_7_Template, 2, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-sidenav", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.sidebarStyle !== "compact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.sidebarStyle !== "compact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.jwtAuth == null ? null : ctx.jwtAuth.user == null ? null : ctx.jwtAuth.user.displayName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.menuItems)("hasIconMenu", ctx.hasIconTypeMenuItem)("iconMenuTitle", ctx.iconTypeMenuTitle);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultClassDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarSideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-sidebar-side",
                templateUrl: "./sidebar-side.component.html"
            }]
    }], function () { return [{ type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"] }, { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }, { type: app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"] }, { type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"] }]; }, null); })();


/***/ }),

/***/ "X2tk":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/notifications/notifications.component.ts ***!
  \****************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth/jwt-auth.service */ "nZzT");
/* harmony import */ var app_shared_services_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/token-service/token.service */ "AG0e");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function NotificationsComponent_mat_list_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const n_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", n_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r3.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r3.time);
} }
function NotificationsComponent_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_mat_list_item_5_Template_mat_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const notification_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.callTokenMethod(notification_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "watch_later");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_mat_list_item_5_Template_mat_icon_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteIndividualTokenNotification(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r4.notificationMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 2, notification_r4.createdTime));
} }
function NotificationsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_div_6_Template_a_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.clearAll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Clear all notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NotificationsComponent {
    constructor(router, jwtService, tokenService, api) {
        this.router = router;
        this.jwtService = jwtService;
        this.tokenService = tokenService;
        this.api = api;
        // Dummy notifications
        this.notifications = [
            {
                message: "New transaction found",
                icon: "assignment_ind",
                time: "1 min ago",
                route: "/views/others/dashboard",
                color: "primary",
            },
            {
                message: "New message",
                icon: "chat",
                time: "4 min ago",
                route: "/",
                color: "accent",
            },
            {
                message: "Server rebooted",
                icon: "settings_backup_restore",
                time: "12 min ago",
                route: "/",
                color: "warn",
            },
        ];
        this.slipEnable = false;
    }
    ngOnInit() {
        var user = this.jwtService.getUser();
        if (user) {
            this.userRole = user.roleId;
            this.tellerId = user.userId;
        }
        this.router.events.subscribe((routeChange) => {
            if (routeChange instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.notificPanel.close();
            }
        });
        this.getNotifications();
    }
    getNotifications() {
        this.api.fetchNotification(this.tellerId).subscribe((resp) => {
            this.tokenNotifications = resp;
        });
        //   this.tokenNotifications=[
        //     {
        //        "notificationId":53763,
        //        "notificationMessage":"VidyashreeAcharya Has assigned a token CHD4265 to you.",
        //        "createdTime":1671775751212,
        //        "tellerId":19954,
        //        "tokenId":44518
        //     },
        //     {
        //       "notificationId":53762,
        //       "notificationMessage":"VidyashreeAcharya Has assigned a token CHD4264 to you.",
        //       "createdTime":1671775751215,
        //       "tellerId":19954,
        //       "tokenId":44518
        //    },
        //    {
        //     "notificationId":53763,
        //     "notificationMessage":"VidyashreeAcharya Has assigned a token CHD4265 to you.",
        //     "createdTime":1671775751212,
        //     "tellerId":19954,
        //     "tokenId":44518
        //  },
        //  {
        //    "notificationId":53762,
        //    "notificationMessage":"VidyashreeAcharya Has assigned a token CHD4264 to you.",
        //    "createdTime":1671775751215,
        //    "tellerId":19954,
        //    "tokenId":44518
        // },
        // {
        //   "notificationId":53763,
        //   "notificationMessage":"VidyashreeAcharya Has assigned a token CHD4265 to you.",
        //   "createdTime":1671775751212,
        //   "tellerId":19954,
        //   "tokenId":44518
        // },
        // {
        //  "notificationId":53762,
        //  "notificationMessage":"VidyashreeAcharya Has assigned a token CHD4264 to you.",
        //  "createdTime":1671775751215,
        //  "tellerId":19954,
        //  "tokenId":44518
        // },
        // {
        //   "notificationId":53763,
        //   "notificationMessage":"VidyashreeAcharya Has assigned a token CHD4265 to you.",
        //   "createdTime":1671775751212,
        //   "tellerId":19954,
        //   "tokenId":44518
        // },
        // {
        //  "notificationId":53762,
        //  "notificationMessage":"VidyashreeAcharya Has assigned a token CHD4264 to you.",
        //  "createdTime":1671775751215,
        //  "tellerId":19954,
        //  "tokenId":44518
        // },
        // {
        //   "notificationId":10002,
        //   "notificationMessage":"VidyashreeAcharya Has assigned a token CHW4967 to you.",
        //   "createdTime":1671775751212,
        //   "tellerId":19954,
        //   "tokenId":'CHW4967'
        // },
        // {
        //  "notificationId":10001,
        //  "notificationMessage":"VidyashreeAcharya Has assigned a token CHD4264 to you.",
        //  "createdTime":1671775751215,
        //  "tellerId":19954,
        //  "tokenId":44518
        // },
        //  ]
    }
    clearAll(e) {
        e.preventDefault();
        this.notifications = [];
        this.tokenNotifications = [];
        this.api.deleteAllToken(this.tellerId).subscribe((resp) => { }, (error) => { });
    }
    deleteIndividualTokenNotification(index) {
        this.tokenNotifications.splice(index, 1);
        this.api.deleteIndividualToken(this.tellerId).subscribe((resp) => { }, (error) => { });
    }
    callTokenMethod(tellerNotification) {
        // this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
        //   this.router.navigate(["others/dashboard"]);
        // });
        this.notificPanel.close();
        this.api.setToken({
            token: tellerNotification.tokenNumber,
        });
    }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsComponent, selectors: [["app-notifications"]], inputs: { notificPanel: "notificPanel" }, decls: 7, vars: 3, consts: [[1, "text-center", "mat-bg-primary", "pt-16", "pb-16"], [1, "m-0", "text-white"], ["role", "list", 1, "notification-list"], ["class", "notific-item", "role", "listitem", "routerLinkActive", "open", 4, "ngFor", "ngForOf"], ["class", "notific-item", "role", "listitem", "routerLinkActive", "open", 3, "click", 4, "ngFor", "ngForOf"], ["class", "text-center mt-16", 4, "ngIf"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item"], [1, "notific-icon", "mr-16", 3, "color"], [1, "mat-list-text"], [1, "message"], [1, "time", "text-muted"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item", 3, "click"], ["color", "warn", 1, "notific-icon", "mr-16"], [1, "deleteButton"], [1, "notific-icon", "mr-14", "fontSize", 3, "click"], [1, "text-center", "mt-16"], ["href", "#", 1, "box", 3, "click"]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-nav-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotificationsComponent_mat_list_item_4_Template, 9, 4, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotificationsComponent_mat_list_item_5_Template, 13, 4, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotificationsComponent_div_6_Template, 4, 0, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tokenNotifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notifications.length);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".box[_ngcontent-%COMP%] {\n  border: 1px solid blue;\n  background-color: lightblue;\n  padding-top: 10px;\n  padding-right: 50px;\n  padding-bottom: 10px;\n  padding-left: 50px;\n}\n\n.deleteButton[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  background-color: white;\n}\n\n.deleteIcon[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  font-size: 20px;\n}\n\n.fontSize[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3RCOztBQUNBO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFDSjtBQUNBOztBQUFBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBR25COztBQURBO0VBQ0ksZUFBZTtBQUluQiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxufVxyXG4uZGVsZXRlQnV0dG9ue1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXHJcbn1cclxuLmRlbGV0ZUljb257XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uZm9udFNpemV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-notifications",
                templateUrl: "./notifications.component.html",
                styleUrls: ["./notifications.component.scss"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__["JwtAuthService"] }, { type: app_shared_services_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, { notificPanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "XsgX":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts ***!
  \********************************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthLayoutComponent {
    constructor(translate) {
        this.translate = translate;
        // Translator init
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    ngOnInit() {
    }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 1, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-layout',
                templateUrl: './auth-layout.component.html'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "YyUd":
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/get-value-by-key.pipe.ts ***!
  \*******************************************************/
/*! exports provided: GetValueByKeyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetValueByKeyPipe", function() { return GetValueByKeyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GetValueByKeyPipe {
    transform(value, id, property) {
        const filteredObj = value.find(item => {
            if (item.id !== undefined) {
                return item.id === id;
            }
            return false;
        });
        if (filteredObj) {
            return filteredObj[property];
        }
    }
}
GetValueByKeyPipe.ɵfac = function GetValueByKeyPipe_Factory(t) { return new (t || GetValueByKeyPipe)(); };
GetValueByKeyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "getValueByKey", type: GetValueByKeyPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetValueByKeyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "getValueByKey",
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/error-handler.service */ "nAk8");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/shared-material.module */ "zMWy");




// import { GestureConfig } from '@angular/material/core';








//






// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](httpClient, "./assets/i18n/", ".json");
}
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlerService"] },
        // { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
        { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_13__["SharedMaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
                preventDuplicates: true,
            }),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                }
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["rootRouterConfig"], { useHash: true, relativeLinkResolution: 'legacy' })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_13__["SharedMaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_13__["SharedMaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
                        preventDuplicates: true,
                    }),
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                        }
                    }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["rootRouterConfig"], { useHash: true, relativeLinkResolution: 'legacy' })
                ],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlerService"] },
                    // { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
                    { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aYsj":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
  \*****************************************************/
/*! exports provided: SharedPipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function() { return SharedPipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relative-time.pipe */ "336X");
/* harmony import */ var _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./excerpt.pipe */ "IZEZ");
/* harmony import */ var _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-value-by-key.pipe */ "YyUd");






const pipes = [
    _relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeTimePipe"],
    _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__["ExcerptPipe"],
    _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__["GetValueByKeyPipe"]
];
class SharedPipesModule {
}
SharedPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedPipesModule });
SharedPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedPipesModule_Factory(t) { return new (t || SharedPipesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedPipesModule, { declarations: [_relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeTimePipe"],
        _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__["ExcerptPipe"],
        _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__["GetValueByKeyPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeTimePipe"],
        _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__["ExcerptPipe"],
        _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__["GetValueByKeyPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: pipes,
                exports: pipes
            }]
    }], null, null); })();


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: rootRouterConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function() { return rootRouterConfig; });
/* harmony import */ var _shared_components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/layouts/admin-layout/admin-layout.component */ "hOig");
/* harmony import */ var _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/layouts/auth-layout/auth-layout.component */ "XsgX");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "LjFu");



const rootRouterConfig = [
    {
        path: '',
        redirectTo: 'sessions/signin',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
        children: [
            {
                path: 'sessions',
                loadChildren: () => Promise.all(/*! import() | views-sessions-sessions-module */[__webpack_require__.e("default~views-maintenance-maintenance-module~views-others-others-module~views-sessions-sessions-module"), __webpack_require__.e("common"), __webpack_require__.e("views-sessions-sessions-module")]).then(__webpack_require__.bind(null, /*! ./views/sessions/sessions.module */ "VVaf")).then(m => m.SessionsModule),
                data: { title: 'Session' }
            },
        ]
    },
    {
        path: '',
        component: _shared_components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            {
                path: 'others',
                loadChildren: () => Promise.all(/*! import() | views-others-others-module */[__webpack_require__.e("default~views-others-others-module~views-settings-settings-module~views-video-verification-video-ver~6754191d"), __webpack_require__.e("default~views-maintenance-maintenance-module~views-others-others-module~views-sessions-sessions-module"), __webpack_require__.e("default~views-maintenance-maintenance-module~views-others-others-module"), __webpack_require__.e("default~views-others-others-module~views-video-verification-video-verification-module"), __webpack_require__.e("common"), __webpack_require__.e("views-others-others-module")]).then(__webpack_require__.bind(null, /*! ./views/others/others.module */ "KVVp")).then(m => m.OthersModule),
            }, {
                path: 'settings',
                loadChildren: () => Promise.all(/*! import() | views-settings-settings-module */[__webpack_require__.e("default~views-others-others-module~views-settings-settings-module~views-video-verification-video-ver~6754191d"), __webpack_require__.e("views-settings-settings-module")]).then(__webpack_require__.bind(null, /*! ./views/settings/settings.module */ "Ty4v")).then(m => m.SettingsModule),
            }, {
                path: 'video-verification',
                loadChildren: () => Promise.all(/*! import() | views-video-verification-video-verification-module */[__webpack_require__.e("default~views-others-others-module~views-settings-settings-module~views-video-verification-video-ver~6754191d"), __webpack_require__.e("default~views-others-others-module~views-video-verification-video-verification-module"), __webpack_require__.e("views-video-verification-video-verification-module")]).then(__webpack_require__.bind(null, /*! ./views/video-verification/video-verification.module */ "Qc9N")).then(m => m.VideoVerificationModule),
            }, {
                path: 'maintenance',
                loadChildren: () => Promise.all(/*! import() | views-maintenance-maintenance-module */[__webpack_require__.e("default~views-maintenance-maintenance-module~views-others-others-module~views-sessions-sessions-module"), __webpack_require__.e("default~views-maintenance-maintenance-module~views-others-others-module"), __webpack_require__.e("views-maintenance-maintenance-module")]).then(__webpack_require__.bind(null, /*! ./views/maintenance/maintenance.module */ "eXOA")).then(m => m.MaintenanceModule),
                data: { title: '', breadcrumb: '' }
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'sessions/404'
    }
];


/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "hOig":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout/admin-layout.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/theme.service */ "ETNk");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/layout.service */ "rmxa");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth/jwt-auth.service */ "nZzT");
/* harmony import */ var app_shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/loader/loader.service */ "sTnX");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../breadcrumb/breadcrumb.component */ "+803");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../profile/profile.component */ "P6Hk");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../notifications/notifications.component */ "X2tk");
/* harmony import */ var _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../header-side/header-side.component */ "Hkp+");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");


























function AdminLayoutComponent_app_header_side_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-side", 18);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r6)("profilePanel", _r5);
} }
function AdminLayoutComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminLayoutComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminLayoutComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 25);
} }
function AdminLayoutComponent_app_footer_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer", 26);
} }
const _c0 = function (a0) { return { "visible": a0 }; };
class AdminLayoutComponent {
    constructor(router, translate, themeService, layout, cdr, jwtAuth, loaderService) {
        this.router = router;
        this.translate = translate;
        this.themeService = themeService;
        this.layout = layout;
        this.cdr = cdr;
        this.jwtAuth = jwtAuth;
        this.loaderService = loaderService;
        this.isModuleLoading = false;
        this.scrollConfig = {};
        this.layoutConf = {};
        this.adminContainerClasses = {};
        // Close sidenav after route change in mobile
        this.routerEventSub = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe((routeChange) => {
            this.layout.adjustLayout({ route: routeChange.url });
            this.scrollToTop();
        });
        // Translator init
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    ngOnInit() {
        // this.layoutConf = this.layout.layoutConf;
        this.layoutConfSub = this.layout.layoutConf$.subscribe((layoutConf) => {
            this.layoutConf = layoutConf;
            // console.log(this.layoutConf);
            this.adminContainerClasses = this.updateAdminContainerClasses(this.layoutConf);
            this.cdr.markForCheck();
        });
        // FOR MODULE LOADER FLAG
        this.moduleLoaderSub = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveStart"]) {
                this.isModuleLoading = true;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveEnd"]) {
                this.isModuleLoading = false;
            }
        });
    }
    onResize(event) {
        this.layout.adjustLayout(event);
    }
    ngAfterViewInit() {
    }
    scrollToTop() {
        if (document) {
            setTimeout(() => {
                let element;
                if (this.layoutConf.topbarFixed) {
                    element = document.querySelector('#rightside-content-hold');
                }
                else {
                    element = document.querySelector('#main-content-wrap');
                }
                element.scrollTop = 0;
            });
        }
    }
    ngOnDestroy() {
        if (this.moduleLoaderSub) {
            this.moduleLoaderSub.unsubscribe();
        }
        if (this.layoutConfSub) {
            this.layoutConfSub.unsubscribe();
        }
        if (this.routerEventSub) {
            this.routerEventSub.unsubscribe();
        }
    }
    closeSidebar() {
        this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
        });
    }
    sidebarMouseenter(e) {
        // console.log(this.layoutConf);
        if (this.layoutConf.sidebarStyle === 'compact') {
            this.layout.publishLayoutChange({ sidebarStyle: 'full' }, { transitionClass: true });
        }
    }
    sidebarMouseleave(e) {
        // console.log(this.layoutConf);
        if (this.layoutConf.sidebarStyle === 'full' &&
            this.layoutConf.sidebarCompactToggle) {
            this.layout.publishLayoutChange({ sidebarStyle: 'compact' }, { transitionClass: true });
        }
    }
    updateAdminContainerClasses(layoutConf) {
        return {
            'navigation-top': layoutConf.navigationPos === 'top',
            'sidebar-full': layoutConf.sidebarStyle === 'full',
            'sidebar-compact': layoutConf.sidebarStyle === 'compact' && layoutConf.navigationPos === 'side',
            'compact-toggle-active': layoutConf.sidebarCompactToggle,
            'sidebar-compact-big': layoutConf.sidebarStyle === 'compact-big' && layoutConf.navigationPos === 'side',
            'sidebar-opened': layoutConf.sidebarStyle !== 'closed' && layoutConf.navigationPos === 'side',
            'sidebar-closed': layoutConf.sidebarStyle === 'closed',
            'fixed-topbar': layoutConf.topbarFixed && layoutConf.navigationPos === 'side'
        };
    }
}
AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) { return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_6__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"])); };
AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminLayoutComponent, selectors: [["app-admin-layout"]], hostBindings: function AdminLayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AdminLayoutComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 23, vars: 23, consts: [[1, "app-admin-wrap", 3, "dir"], [3, "dir", "ngClass"], ["id", "main-content-wrap", 1, "main-content-wrap", 3, "perfectScrollbar", "disabled"], [3, "notificPanel", "profilePanel", 4, "ngIf"], ["id", "rightside-content-hold", 1, "rightside-content-hold", 3, "perfectScrollbar", "disabled"], ["class", "view-loader", "style", "position:fixed;", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["style", "\n        position:fixed;\n        width:100%;\n        z-index:99;\n        padding-top: 12px;\n        margin-left: -15px;\n        ", 4, "ngIf"], [1, "container-dynamic"], ["class", "m-auto", 4, "ngIf"], ["style", "margin: 0 -.33rem -.33rem", 4, "ngIf"], [1, "sidebar-backdrop", 3, "ngClass", "click"], ["mode", "over", "position", "top", 1, "right-side"], ["profilePagePanel", ""], ["fxLayout", "column", 1, "nofication-panel"], [3, "profilePanel"], ["mode", "over", "position", "end", 1, "left-side"], ["notificationPanel", ""], [3, "notificPanel"], [3, "notificPanel", "profilePanel"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "view-loader", 2, "position", "fixed"], [1, "spinner"], [1, "double-bounce1", "mat-bg-accent"], [1, "double-bounce2", "mat-bg-primary"], [2, "position", "fixed", "width", "100%", "z-index", "99", "padding-top", "12px", "margin-left", "-15px"], ["mode", "indeterminate"], [1, "m-auto"], [2, "margin", "0 -.33rem -.33rem"]], template: function AdminLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminLayoutComponent_app_header_side_4_Template, 1, 2, "app-header-side", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminLayoutComponent_div_6_Template, 4, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminLayoutComponent_div_7_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdminLayoutComponent_span_12_Template, 1, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminLayoutComponent_app_footer_13_Template, 1, 0, "app-footer", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_div_click_14_listener() { return ctx.closeSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-sidenav", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-profile", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-sidenav", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-notifications", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.layoutConf == null ? null : ctx.layoutConf.dir);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate3"]("app-admin-container app-side-nav-container mat-drawer-transition sidebar-", ctx.layoutConf == null ? null : ctx.layoutConf.sidebarColor, " topbar-", ctx.layoutConf == null ? null : ctx.layoutConf.topbarColor, " footer-", ctx.layoutConf == null ? null : ctx.layoutConf.footerColor, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.layoutConf.dir)("ngClass", ctx.adminContainerClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.layoutConf.topbarFixed || !ctx.layoutConf.perfectScrollbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.scrollConfig)("disabled", !ctx.layoutConf.topbarFixed || !ctx.layoutConf.perfectScrollbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isModuleLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 19, ctx.loaderService.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.layoutConf.footerFixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.layoutConf.footerFixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.layoutConf.sidebarStyle !== "closed" && ctx.layoutConf.isMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("profilePanel", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r6);
    } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Dir"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenav"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_17__["HeaderSideComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-layout',
                templateUrl: './admin-layout.template.html',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_6__["JwtAuthService"] }, { type: app_shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "iSAc":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/directives/egret-sidenav-helper/egret-sidenav-helper.service.ts ***!
  \****************************************************************************************/
/*! exports provided: EgretSidenavHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretSidenavHelperService", function() { return EgretSidenavHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EgretSidenavHelperService {
    constructor() {
        this.sidenavList = [];
    }
    setSidenav(id, sidenav) {
        this.sidenavList[id] = sidenav;
    }
    getSidenav(id) {
        return this.sidenavList[id];
    }
}
EgretSidenavHelperService.ɵfac = function EgretSidenavHelperService_Factory(t) { return new (t || EgretSidenavHelperService)(); };
EgretSidenavHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EgretSidenavHelperService, factory: EgretSidenavHelperService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSidenavHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iiaH":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");




class DataService {
    constructor() {
        this.auditLogData = {};
        this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.getNavParam = this.paramSource.asObservable();
        this.searchItem = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.getSearchItem = this.searchItem.asObservable();
        this.sendCustomerId = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
        this.getCustomerId = this.sendCustomerId.asObservable();
        this.item = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.getBankItem = this.item.asObservable();
        this.navSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.currentNav = this.navSource.asObservable();
        this.items = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.getTillVaultMap = this.items.asObservable();
        this.vaultStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.getTillVaultStatus = this.vaultStatus.asObservable();
        this.TrxnCashStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.getTrxnCashMaster = this.TrxnCashStatus.asObservable();
        this.denomMasterStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.getDenomMasterStatus = this.denomMasterStatus.asObservable();
        this.CcyBalStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.getCcyBal = this.CcyBalStatus.asObservable();
        this.accTypeStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.getAccType = this.accTypeStatus.asObservable();
        this.baseDenomStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.getBaseDenom = this.baseDenomStatus.asObservable();
        this.vaultConfig = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.getTillVaultConfig = this.vaultConfig.asObservable();
        this.menuSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
        this.getMenus = this.menuSource.asObservable();
        this.childMenuData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subjectOfIcustUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getchildMenuDetails() {
        return this.childMenuData.asObservable();
    }
    setchildMenuDetails(childMenuData) {
        this.childMenuData.next(childMenuData);
    }
    changeNav(message) {
        this.navSource.next(message);
    }
    sendNavParam(params) {
        this.paramSource.next(params);
    }
    shareSearchItem(params) {
        this.searchItem.next(params);
    }
    shareCustomerId(customerId) {
        this.sendCustomerId.next(customerId);
    }
    shareBankItem(item) {
        this.item.next(item);
    }
    setAuditLogData(data) {
        console.log(data);
        this.auditLogData = data;
    }
    getAuditLogData() {
        return this.auditLogData;
    }
    sendClickEvent() {
        this.subject.next();
    }
    getClickEvent() {
        return this.subject.asObservable();
    }
    shareAccTypeItem(item) {
        this.item.next(item);
    }
    shareTillVaultItem(item) {
        this.item.next(item);
    }
    shareTillVaultStatus(item) {
        this.item.next(item);
    }
    onChangeOfIcustUser(value) {
        this.subjectOfIcustUser.next(value);
    }
    getIcustUser() {
        return this.subjectOfIcustUser.asObservable();
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "j/fj":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/voice-recognition.service.ts ***!
  \**************************************************************/
/*! exports provided: VoiceRecognitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceRecognitionService", function() { return VoiceRecognitionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class VoiceRecognitionService {
    constructor() {
        this.recognition = new webkitSpeechRecognition();
        this.isStoppedSpeechRecog = false;
        this.text = '';
        this.speechStop = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    init() {
        this.recognition.interimResults = true;
        this.recognition.lang = 'en-US';
        this.recognition.addEventListener('result', (e) => {
            const transcript = Array.from(e.results)
                .map((result) => result[0])
                .map((result) => result.transcript)
                .join('');
            this.tempWords = transcript;
            console.log(transcript, "first one, tempword", this.tempWords);
        });
    }
    start() {
        this.tempWords = '';
        this.isStoppedSpeechRecog = false;
        this.recognition.start();
        console.log("Speech recognition started");
        this.recognition.addEventListener('end', (condition) => {
            console.log(condition);
            this.pauseTimer();
            if (this.isStoppedSpeechRecog) {
                this.recognition.stop();
                this.wordConcat();
                // this.text =  this.tempWords;
                console.log("End speech recognition");
            }
            else {
                // this.wordConcat();
                this.text = this.tempWords;
                this.startTimer();
            }
        });
    }
    stop() {
        this.pauseTimer();
        this.isStoppedSpeechRecog = true;
        this.recognition.stop();
        this.speechStop.next(true);
        console.log("End speech recognition");
    }
    wordConcat() {
        this.text = this.tempWords;
        this.tempWords = '';
        console.log(" Last binding text", this.text);
    }
    startTimer() {
        this.interval = setInterval(() => {
            this.stop();
        }, 1000);
    }
    pauseTimer() {
        clearInterval(this.interval);
    }
}
VoiceRecognitionService.ɵfac = function VoiceRecognitionService_Factory(t) { return new (t || VoiceRecognitionService)(); };
VoiceRecognitionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VoiceRecognitionService, factory: VoiceRecognitionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoiceRecognitionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jgPy":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/shared-components.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-material.module */ "zMWy");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/shared-pipes.module */ "aYsj");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../directives/shared-directives.module */ "mnDI");
/* harmony import */ var _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header-side/header-side.component */ "Hkp+");
/* harmony import */ var _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar-side/sidebar-side.component */ "UnY0");
/* harmony import */ var _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header-top/header-top.component */ "urBs");
/* harmony import */ var _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebar-top/sidebar-top.component */ "s0uO");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "hOig");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "XsgX");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notifications/notifications.component */ "X2tk");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "TgYD");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "+803");
/* harmony import */ var _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/app-confirm/app-confirm.component */ "3BvT");
/* harmony import */ var _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/app-loader/app-loader.component */ "5alQ");
/* harmony import */ var _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./button-loading/button-loading.component */ "wl2U");
/* harmony import */ var _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bottom-sheet-share/bottom-sheet-share.component */ "qj9C");
/* harmony import */ var _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./date-picker/date-picker.component */ "+MiJ");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./input/input.component */ "QlUG");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./profile/profile.component */ "P6Hk");
/* harmony import */ var _speech_recognition_speech_recognition_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./speech-recognition/speech-recognition.component */ "w8r1");
/* harmony import */ var _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./egret-sidebar/egret-sidebar.component */ "l3Mw");










// ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT


// ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT


// ALWAYS REQUIRED 















const components = [
    _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__["HeaderTopComponent"],
    _profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"],
    _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__["SidebarTopComponent"],
    _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"],
    _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"],
    _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__["SidebarSideComponent"],
    _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__["HeaderSideComponent"],
    _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"],
    _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"],
    _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"],
    _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_19__["AppComfirmComponent"],
    _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_20__["AppLoaderComponent"],
    _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_21__["ButtonLoadingComponent"],
    _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_22__["BottomSheetShareComponent"],
    _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_23__["DatePickerComponent"],
    _input_input_component__WEBPACK_IMPORTED_MODULE_24__["InputComponent"],
    _speech_recognition_speech_recognition_component__WEBPACK_IMPORTED_MODULE_26__["SpeechRecognitionComponent"],
    _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_27__["EgretSidebarComponent"]
];
class SharedComponentsModule {
}
SharedComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedComponentsModule });
SharedComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedComponentsModule_Factory(t) { return new (t || SharedComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"],
            _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"],
            _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedComponentsModule, { declarations: [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__["HeaderTopComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"],
        _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__["SidebarTopComponent"],
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"],
        _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"],
        _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__["SidebarSideComponent"],
        _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__["HeaderSideComponent"],
        _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"],
        _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"],
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"],
        _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_19__["AppComfirmComponent"],
        _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_20__["AppLoaderComponent"],
        _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_21__["ButtonLoadingComponent"],
        _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_22__["BottomSheetShareComponent"],
        _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_23__["DatePickerComponent"],
        _input_input_component__WEBPACK_IMPORTED_MODULE_24__["InputComponent"],
        _speech_recognition_speech_recognition_component__WEBPACK_IMPORTED_MODULE_26__["SpeechRecognitionComponent"],
        _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_27__["EgretSidebarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
        _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"],
        _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"],
        _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]], exports: [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__["HeaderTopComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"],
        _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__["SidebarTopComponent"],
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"],
        _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"],
        _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__["SidebarSideComponent"],
        _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__["HeaderSideComponent"],
        _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"],
        _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"],
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"],
        _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_19__["AppComfirmComponent"],
        _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_20__["AppLoaderComponent"],
        _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_21__["ButtonLoadingComponent"],
        _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_22__["BottomSheetShareComponent"],
        _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_23__["DatePickerComponent"],
        _input_input_component__WEBPACK_IMPORTED_MODULE_24__["InputComponent"],
        _speech_recognition_speech_recognition_component__WEBPACK_IMPORTED_MODULE_26__["SpeechRecognitionComponent"],
        _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_27__["EgretSidebarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                    _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"],
                    _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"],
                    _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ],
                declarations: components,
                exports: components
            }]
    }], null, null); })();


/***/ }),

/***/ "l3Mw":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/egret-sidebar/egret-sidebar.component.ts ***!
  \****************************************************************************/
/*! exports provided: EgretSidebarComponent, EgretSidebarTogglerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretSidebarComponent", function() { return EgretSidebarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretSidebarTogglerDirective", function() { return EgretSidebarTogglerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/match-media.service */ "30N5");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _egret_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./egret-sidebar-helper.service */ "slWk");










const _c0 = ["*"];
class EgretSidebarComponent {
    constructor(matchMediaService, mediaObserver, sidebarHelperService, _renderer, _elementRef, cdr) {
        this.matchMediaService = matchMediaService;
        this.mediaObserver = mediaObserver;
        this.sidebarHelperService = sidebarHelperService;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.cdr = cdr;
        this.backdrop = null;
        this.lockedBreakpoint = "gt-sm";
        this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.sidebarHelperService.setSidebar(this.name, this);
        if (this.mediaObserver.isActive(this.lockedBreakpoint)) {
            this.sidebarLockedOpen = true;
            this.opened = true;
        }
        else {
            this.sidebarLockedOpen = false;
            this.opened = false;
        }
        this.matchMediaService.onMediaChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribeAll))
            .subscribe(() => {
            // console.log("medua sub");
            if (this.mediaObserver.isActive(this.lockedBreakpoint)) {
                this.sidebarLockedOpen = true;
                this.opened = true;
            }
            else {
                this.sidebarLockedOpen = false;
                this.opened = false;
            }
        });
    }
    open() {
        this.opened = true;
        if (!this.sidebarLockedOpen && !this.backdrop) {
            this.showBackdrop();
        }
    }
    close() {
        this.opened = false;
        this.hideBackdrop();
    }
    toggle() {
        if (this.opened) {
            this.close();
        }
        else {
            this.open();
        }
    }
    showBackdrop() {
        this.backdrop = this._renderer.createElement("div");
        this.backdrop.classList.add("egret-sidebar-overlay");
        this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this.backdrop);
        // Close sidebar onclick
        this.backdrop.addEventListener("click", () => {
            this.close();
        });
        this.cdr.markForCheck();
    }
    hideBackdrop() {
        if (this.backdrop) {
            this.backdrop.parentNode.removeChild(this.backdrop);
            this.backdrop = null;
        }
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
        this.sidebarHelperService.removeSidebar(this.name);
    }
}
EgretSidebarComponent.ɵfac = function EgretSidebarComponent_Factory(t) { return new (t || EgretSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_1__["MatchMediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_egret_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__["EgretSidebarHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
EgretSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EgretSidebarComponent, selectors: [["egret-sidebar"]], hostVars: 8, hostBindings: function EgretSidebarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("position-right", ctx.right)("open", ctx.opened)("sidebar-locked-open", ctx.sidebarLockedOpen)("is-over", ctx.isOver);
    } }, inputs: { name: "name", right: "right" }, ngContentSelectors: _c0, decls: 2, vars: 0, template: function EgretSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZ3JldC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "egret-sidebar",
                templateUrl: "./egret-sidebar.component.html",
                styleUrls: ["./egret-sidebar.component.scss"]
            }]
    }], function () { return [{ type: app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_1__["MatchMediaService"] }, { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] }, { type: _egret_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__["EgretSidebarHelperService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], right: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.position-right"]
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.open"]
        }], sidebarLockedOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.sidebar-locked-open"]
        }], isOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.is-over"]
        }] }); })();
class EgretSidebarTogglerDirective {
    constructor(egretSidebarHelperService) {
        this.egretSidebarHelperService = egretSidebarHelperService;
    }
    onClick() {
        this.egretSidebarHelperService.getSidebar(this.id).toggle();
    }
}
EgretSidebarTogglerDirective.ɵfac = function EgretSidebarTogglerDirective_Factory(t) { return new (t || EgretSidebarTogglerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_egret_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__["EgretSidebarHelperService"])); };
EgretSidebarTogglerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: EgretSidebarTogglerDirective, selectors: [["", "egretSidebarToggler", ""]], hostBindings: function EgretSidebarTogglerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EgretSidebarTogglerDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { id: ["egretSidebarToggler", "id"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSidebarTogglerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[egretSidebarToggler]"
            }]
    }], function () { return [{ type: _egret_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__["EgretSidebarHelperService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["egretSidebarToggler"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click"]
        }] }); })();


/***/ }),

/***/ "mnDI":
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/shared-directives.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedDirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDirectivesModule", function() { return SharedDirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _scroll_to_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll-to.directive */ "GyvL");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown.directive */ "Bp9c");
/* harmony import */ var _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown-anchor.directive */ "r/oB");
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown-link.directive */ "UGQK");
/* harmony import */ var _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./egret-side-nav-toggle.directive */ "/1WF");
/* harmony import */ var _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./egret-sidenav-helper/egret-sidenav-helper.directive */ "qrO7");









const directives = [
    _scroll_to_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"],
    _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["AppDropdownDirective"],
    _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__["DropdownAnchorDirective"],
    _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownLinkDirective"],
    _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_6__["EgretSideNavToggleDirective"],
    _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSidenavHelperDirective"],
    _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSidenavTogglerDirective"],
];
class SharedDirectivesModule {
}
SharedDirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedDirectivesModule });
SharedDirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedDirectivesModule_Factory(t) { return new (t || SharedDirectivesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedDirectivesModule, { declarations: [_scroll_to_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"],
        _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["AppDropdownDirective"],
        _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__["DropdownAnchorDirective"],
        _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownLinkDirective"],
        _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_6__["EgretSideNavToggleDirective"],
        _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSidenavHelperDirective"],
        _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSidenavTogglerDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_scroll_to_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"],
        _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["AppDropdownDirective"],
        _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__["DropdownAnchorDirective"],
        _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownLinkDirective"],
        _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_6__["EgretSideNavToggleDirective"],
        _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSidenavHelperDirective"],
        _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSidenavTogglerDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedDirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: directives,
                exports: directives
            }]
    }], null, null); })();


/***/ }),

/***/ "nAk8":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/error-handler.service.ts ***!
  \**********************************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ErrorHandlerService extends _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"] {
    constructor(injector) {
        super();
        this.injector = injector;
        this.errorCount = 0;
    }
    // https://github.com/angular/angular/issues/17010
    handleError(error) {
        let increment = 5;
        let max = 50;
        // Prevents change detection
        let debugCtx = error['ngDebugContext'];
        let changeDetectorRef = debugCtx && debugCtx.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]);
        if (changeDetectorRef)
            changeDetectorRef.detach();
        this.errorCount = this.errorCount + 1;
        if (this.errorCount % increment === 0) {
            console.log(' ');
            console.log(`errorHandler() was called ${this.errorCount} times.`);
            console.log(' ');
            super.handleError(error);
            if (this.errorCount === max) {
                console.log(' ');
                console.log(`Preventing recursive error after ${this.errorCount} recursive errors.`);
                console.log(' ');
                let appRef = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
                appRef.tick();
            }
        }
        else if (this.errorCount === 1) {
            super.handleError(error);
        }
    }
}
ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) { return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlerService, factory: ErrorHandlerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "nZzT":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/auth/jwt-auth.service.ts ***!
  \**********************************************************/
/*! exports provided: JwtAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtAuthService", function() { return JwtAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _local_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-store.service */ "tZUg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! environments/environment */ "AytR");










class JwtAuthService {
    constructor(ls, http, router, route) {
        this.ls = ls;
        this.http = http;
        this.router = router;
        this.route = route;
        this.user = {};
        this.user$ = (new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.user));
        this.APP_USER = "ICUST_USER";
        this.baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].DESKTOP_URL;
        this.route.queryParams
            .subscribe(params => this.return = params['return'] || '/');
    }
    signout() {
        this.setUserAndToken(null, false);
        this.ls.setItem("notification", false);
        this.ls.setItem("browserId", null);
        this.ls.setItem("denomRequired", null);
        this.router.navigateByUrl("sessions/signin");
    }
    isLoggedIn() {
        return !!this.getAuthStatus();
    }
    getAuthStatus() {
        return this.ls.getItem('isAuthenticated');
    }
    getUser() {
        return this.ls.getItem(this.APP_USER);
    }
    encodeData(data) {
        return btoa(data);
    }
    decodeData(data) {
        return atob(data);
    }
    getEncryptedToken() {
        let user = this.getUser();
        let encodedUser = this.encodeData(JSON.stringify(user));
        return encodedUser;
    }
    getAccessToken() {
        var _a;
        let user = this.getUser();
        let accessToken = (_a = user['jwtResp']) === null || _a === void 0 ? void 0 : _a.accessToken;
        if (accessToken != null) {
            return accessToken || null;
        }
    }
    setUserAndToken(user, isAuthenticated) {
        this.isAuthenticated = isAuthenticated;
        this.ls.setItem("isAuthenticated", isAuthenticated);
        this.ls.setItem(this.APP_USER, user);
        this.user$.next(user);
    }
    loginIcut(login) {
        return this.http.post(`${this.baseUrl}/loginApi/credentials`, login);
    }
}
JwtAuthService.ɵfac = function JwtAuthService_Factory(t) { return new (t || JwtAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
JwtAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtAuthService, factory: JwtAuthService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "ngOV":
/*!****************************************!*\
  !*** ./src/app/config/app.constant.ts ***!
  \****************************************/
/*! exports provided: AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ "AytR");

class AppConstants {
    /*
    *Base URL is not used anywhere so dont change it and dont delete it
    */
    static get baseURL() {
        return environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].DESKTOP_URL;
    }
}


/***/ }),

/***/ "nm5K":
/*!************************************************!*\
  !*** ./src/app/shared/services/api.service.ts ***!
  \************************************************/
/*! exports provided: API_URL, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_config_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/app.constant */ "ngOV");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showMessage/show-message.service */ "x/2q");





// export const API_URL1 = 'http://localhost:1212';




const API_URL = app_config_app_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].baseURL;
class ApiService {
    constructor(http, showMessageService) {
        this.http = http;
        this.showMessageService = showMessageService;
        this.newUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            prefix: '',
            firstName: '',
            lastName: '',
            primaryEmailAdress: '',
            phoneNumber: '',
        });
        //   getOtp(otp:Object) {
        //     return this.http.post<any>(`${API_URL}/rest/opt/generateOtp`,otp);
        //   }
        //   getDropDownValues(entityName:string){
        //     return this.http.get<string[]>(`${API_URL}/rest/data/getMasterData?entityName=${entityName}`)
        // }
        //Error Handler
        this.errorHandler = (errorResp) => {
            console.error('Error : ' + errorResp.message);
            console.error('status : ' + errorResp.status);
            this.showMessageService.errorMessage(errorResp.status, errorResp);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorResp);
        };
        // getOtp(data){
        //   // return this.http.post<any>(`${API_URL}/rest/otp/generateOtp`,data).pipe(catchError(this.errorHandler));
        //   return this.http.post<any>(`${API_URL}/rest/otp/generateOtp`,data);
        // }
        // verifyOtp(data){
        //   return this.http.put<any>(`${API_URL}/rest/otp/validateOtp`,data);
        //   // return this.http.put<any>(`${API_URL}/rest/otp/validateOtp`,data).pipe(catchError(this.errorHandler));
        // }
        // saveofCashWithdraw(data)
        // {
        //   return this.http.post<any>(`${API_URL}/cash-withdrawal-service`,data).pipe(catchError(this.errorHandler));
        // }
        // saveofChequeWithdraw(data)
        // {
        //   // return this.http.post<any>(`${API_URL}/cheque-withdrawal`,data);
        //   return this.http.post<any>(`${API_URL}/cheque-withdrawal`,data).pipe(catchError(this.errorHandler));
        this.token = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            token: '',
        });
        this.pickToken = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            pickToken: false
        });
        this.holidayData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    getToken() {
        return this.token.asObservable();
    }
    setToken(token) {
        this.token.next(token);
    }
    getPickToken() {
        return this.pickToken.asObservable();
    }
    setPickToken(pickToken) {
        this.pickToken.next(pickToken);
    }
    saveoftillVaultConfig(tillVault) {
        return this.http
            .post(`${API_URL}/maintenance/upsertTillVaultConfig`, tillVault)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchtillVaultConfigById(id) {
        return this.http
            .get(`${API_URL}/maintenance/fetchTillVaultConfigById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    gettillVaultResp() {
        return this.http
            .get(`${API_URL}/maintenance/fetchTillVaultConfigInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getTillVaultMaster() {
        return this.http
            .get(`${API_URL}/icTillVault/fetchTillVaultDetails`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getTillVaultById(id) {
        return this.http
            .get(`${API_URL}/icTillVault/fetchTillVaultById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    /////CountryState Starts
    getAllCountries() {
        return this.http
            .get(`${API_URL}/countryMaint/fetchAllCountry`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    upsertCountryDetails(payload) {
        return this.http
            .post(`${API_URL}/countryMaint/upsertCountry`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getCountryById(id) {
        return this.http
            .get(`${API_URL}/countryMaint/fetchCountryById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAllState() {
        return this.http
            .get(`${API_URL}/countryStateMaint/fetchAllCountryState`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getStateByCountry(id) {
        return this.http
            .get(`${API_URL}/countryStateMaint/fetchStateInfoByCountryId?countryId=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    upsertStateDetails(payload) {
        return this.http
            .post(`${API_URL}/countryStateMaint/upsertCountryState`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getStateById(id) {
        return this.http
            .get(`${API_URL}/countryStateMaint/fetchCountryStateById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    isCountryCodePresent(country) {
        return this.http
            .get(`${API_URL}/countryMaint/isCountryCodePresent?countryCode=${country}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    isCountryCode2Present(country) {
        return this.http
            .get(`${API_URL}/countryMaint/isCountryCode2Present?countryCode2=${country}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    isStateCodePresent(country, state) {
        return this.http
            .get(`${API_URL}/countryStateMaint/isStateCodePresent?countryCode=${country}&stateCode=${state}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    isStateCode2Present(state) {
        return this.http
            .get(`${API_URL}/countryStateMaint/isStateCode2Present?stateCode2=${state}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteCountry(id) {
        return this.http
            .delete(`${API_URL}/countryMaint/deleteCountry?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteSecurityPolicy(id) {
        return this.http
            .delete(`${API_URL}/maintenance/deleteSecuriryPolicy?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteState(id) {
        return this.http
            .delete(`${API_URL}/countryStateMaint/deleteCountryState?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    upsertSecurityPolicy(policy) {
        return this.http.post(`${API_URL}/maintenance/upsertSecurityPolicy`, policy)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
        ;
    }
    fetchSecurityPolicy(id) {
        return this.http.get(`${API_URL}/maintenance/fetchSecurityPolicyById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
        ;
    }
    getMainModuleInfo() {
        return this.http
            .get(`${API_URL}/workflow/getMainModuleInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getRoleId() {
        return this.http
            .get(`${API_URL}/workflow/getWorkflowRoleDetails`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    saveWorkflowRecord(data) {
        return this.http
            .post(`${API_URL}/workflow/saveWorkflowScreenDetails`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchSubmoduleById(id) {
        return this.http.get(`${API_URL}/workflow/getSubModuleInfo?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
        ;
    }
    /////CountryState ends
    //City Maintenance 
    fetchAllCity() {
        return this.http
            .get(`${API_URL}/iccity/fetchAllCities`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getCityById(id) {
        return this.http
            .get(`${API_URL}/iccity/fetchById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    upsertCities(payload) {
        return this.http
            .post(`${API_URL}/iccity/upsertCities`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteCity(id) {
        return this.http
            .delete(`${API_URL}/iccity/deleteCity?id=${id}`, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    updateCityAuditLog(payload) {
        return this.http
            .put(`${API_URL}/iccity/updateCityAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    //City Ends
    removetillVaultConfig(tillvaultconfigId) {
        return this.http
            .delete(`${API_URL}/maintenance/deleteTillVaultConfig?id=${tillvaultconfigId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    // Till Vault Currency Balance
    saveoftillVaultCurrencyBal(tillVault) {
        return this.http
            .post(`${API_URL}/maintenance/upsertTillVaultCcyBal`, tillVault)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    gettillCurrencyBalResp() {
        return this.http
            .get(`${API_URL}/maintenance/fetchTillVaultCcyBalInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchCurrencyBalId(id) {
        return this.http
            .get(`${API_URL}/maintenance/fetchTillVaultCcyBalById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    removetillVaultCurrencyBal(tillvaultccyBalId) {
        return this.http
            .delete(`${API_URL}/maintenance/deleteTillVaultCcyBal?id=${tillvaultccyBalId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    // Till Vault Currency Balance History
    saveoftillVaultCurrencyBalHistory(tillVault) {
        return this.http
            .post(`${API_URL}/maintenance/upsertTillVaultCcyBalHist`, tillVault)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    gettillCurrencyBalHistoryResp() {
        return this.http
            .get(`${API_URL}/maintenance/fetchTillVaultCcyBalHistInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    removetillVaultCurrencyBalHistory(tillvaultccyBalHistId) {
        return this.http
            .delete(`${API_URL}/maintenance/deleteTillVaultCcyBalHist?id=${tillvaultccyBalHistId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    //Currency Pair Maintenance
    saveCurrencyPair(data) {
        return this.http
            .post(`${API_URL}/currency-api/upsertCurrencyPair`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    saveCurrencyPairRates(data) {
        return this.http
            .post(`${API_URL}/currency-api/upsertCurrencyPairRates`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getCurrencyPair() {
        return this.http
            .get(`${API_URL}/currency-api/fetchCurrencyPairInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getCurrencyPairRates() {
        return this.http
            .get(`${API_URL}/currency-api/fetchCurrencyPairRatesInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getCurrencyPairById(id) {
        return this.http
            .get(`${API_URL}/currency-api/fetchCurrencyPairById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getCurrencyPairRatesById(id) {
        return this.http
            .get(`${API_URL}/currency-api/fetchCurrencyPairRatesById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsForCurrencyPair(payload) {
        return this.http
            .put(`${API_URL}/currency-api/updateCurrencyPairAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    updateAuditLogsForCurrencyPairRates(payload) {
        return this.http
            .put(`${API_URL}/currency-api/updateCurrencyPairRatesAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteCurrencyPair(id) {
        return this.http
            .delete(`${API_URL}/currency-api/deleteCurrencyPair?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteCurrencyPairRates(id) {
        return this.http
            .delete(`${API_URL}/currency-api/deleteCurrencyPairRates?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getTransactionDenomination() {
        return this.http
            .get(`${API_URL}/maintenance/fetchTxtDenomHistInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    saveoftransDenom(transDenom) {
        return this.http
            .post(`${API_URL}/maintenance/upsertTxtDenomHist`, transDenom)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteTransactionDenomination(id) {
        return this.http
            .delete(`${API_URL}/maintenance/deleteTxtDenomHist?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getTellerVaultDenomination() {
        return this.http
            .get(`${API_URL}/maintenance/fetchTillVaultDenomInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getTellerVaultBranchMap() {
        return this.http
            .get(`${API_URL}/maintenance/fetchTillVaultBrnMapInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchTellerVaultBranchMap(id) {
        return this.http
            .get(`${API_URL}/maintenance/fetchTillVaultBrnMapById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    saveTellerVaultDenomination(tellerDenomination) {
        return this.http
            .post(`${API_URL}/maintenance/upsertTillVaultDenom`, tellerDenomination)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getTellerVaultDenomById(id) {
        return this.http
            .get(`${API_URL}/maintenance/fetchTillVaultDenomById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    saveTellerVaultBranchMap(tellerVaultBrnMap) {
        return this.http
            .post(`${API_URL}/maintenance/upsertTillVaultBrnMap`, tellerVaultBrnMap)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteTellerVaultDenomination(id) {
        return this.http
            .delete(`${API_URL}/maintenance/deleteTillVaultDenom?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteTellerVaultBrnMap(id) {
        return this.http
            .delete(`${API_URL}/maintenance/deleteTillVaultBrnMap?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getTillVaultDenomById(id) {
        return this.http
            .get(`${API_URL}/maintenance/fetchTillVaultDenomById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    // }
    // chequeDepositSave(data:object)
    // {
    //   return this.http.post<any>(`${API_URL}/cheque-deposit/api`,data).pipe(catchError(this.errorHandler));
    // }
    // gettingTransactionDetails(phoneNumber){
    //   return this.http.get(`${API_URL}/customerdata/getPhoneNo/${phoneNumber}`,phoneNumber).pipe(catchError(this.errorHandler));
    // }
    // generateToken(data){
    //   return this.http.post(`${API_URL}/token/api`,data).pipe(catchError(this.errorHandler));
    // }
    // getTokenEstimatedWaitingTime(){
    //   return this.http.get(`${API_URL}/token/api/generate-token-slips`).pipe(catchError(this.errorHandler));
    // }
    // saveofChequeDeposit(data){
    //   return this.http.post<any>(`${API_URL}/cheque-deposit/api`,data).pipe(catchError(this.errorHandler));
    // }
    // saveofCashDeposit(data){
    //     return this.http.post<any>(`${API_URL}/cash-deposit/api`,data).pipe(catchError(this.errorHandler));
    // }
    // fetchingQRcodeforToken(accountId){
    //   return this.http.get(`${RL}/token/api/fetch-qr-code/${accountId}`,accountId).pipe(catchError(this.errorHandler));
    // }
    // uploadingQRcodeforToken(data){
    //   const payload : any = new FormData();
    //   payload.append('file',data);
    //   return this.http.post<any>(`${API_URL}/token/api/qr-code-reader`,payload).pipe(catchError(this.errorHandler));
    // }
    getCountryValues() {
        return this.http
            .get(`${API_URL}/currency`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getEntityCode() {
        return this.http
            .get(`${API_URL}/entity/fetchAuthrorizedEntityDetails`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getBankCode() {
        return this.http
            .get(`${API_URL}/bank`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getBankCode1(entityCode) {
        return this.http
            .get(`${API_URL}/bank/fetchBankInfoByEntityCode?entityCode=${entityCode}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchAuthBankInfo() {
        return this.http
            .get(`${API_URL}/bank/fetchAuthBankInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getBranchCode() {
        return this.http
            .get(`${API_URL}/branch`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getBranchCode1(entityCode, bankCode) {
        return this.http
            .get(`${API_URL}/branch/fetchBranchInfo?entityCode=${entityCode}&bankCode=${bankCode}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getBankInfoByEntityCode(key) {
        return this.http
            .get(`${API_URL}/bank/fetchBankInfoByEntityCode?entityCode=${key}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getDropDownValues(entityName) {
        return this.http
            .get(`${API_URL}/rest/data/getMasterData?entityName=${entityName}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getDropDownValues1(entityName, key) {
        return this.http
            .get(`${API_URL}/rest/data/getMasterDataInfo?entityName=${entityName}&key=${key}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    //Audit log starts
    getAuditLogsForBranch(payload) {
        return this.http
            .put(`${API_URL}/branch/updateBranchAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsForAccountType(payload) {
        return this.http
            .put(`${API_URL}/maintenance/updateAccountTypeAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsForDenominationMaster(payload) {
        return this.http
            .put(`${API_URL}/maintenance/updateDenomMasterAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsForBaseDenomination(payload) {
        return this.http
            .put(`${API_URL}/maintenance/updateBaseDenomAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsFortillvaultStatus(payload) {
        return this.http.put(`${API_URL}/maintenance/updateTillVaultStatusAuditLog`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsFortillvaultdenomination(payload) {
        return this.http
            .put(`${API_URL}/maintenance/updateTillVaultDenomAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsForTransactionCashMaster(payload) {
        return this.http
            .put(`${API_URL}/maintenance/updateTxnCashMasterAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsFortillvaultMaster(payload) {
        return this.http
            .put(`${API_URL}/icTillVault/updateTillVaultAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsForTransactioncharge(payload) {
        return this.http
            .put(`${API_URL}/txnChargesMaint/updateTxnChargesAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsForHolidayBranch(payload) {
        return this.http
            .put(`${API_URL}/holiday/updateBranchHolidayAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsForCurrencybal(payload) {
        return this.http
            .put(`${API_URL}/maintenance/updateTillVaultCcyBalAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsFortillvaultmaster(payload) {
        return this.http
            .put(`${API_URL}/maintenance/updateTillVaultMasterAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsFortillvaultconfig(payload) {
        return this.http
            .put(`${API_URL}/maintenance/updateTillVaultConfigAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsFortillvaulmap(payload) {
        return this.http
            .put(`${API_URL}/maintenance/updateTillVaultBrnMapAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsForEntity(payload) {
        return this.http
            .put(`${API_URL}/entity/updateEntityAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsForProductMaintenance(payload) {
        return this.http
            .put(`${API_URL}/maintenance/updateProductAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsForCountry(payload) {
        return this.http
            .put(`${API_URL}/countryMaint/updateCountryAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsSecurityPolicy(payload) {
        return this.http
            .put(`${API_URL}/maintenance/updateSecurityPolicyAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsForState(payload) {
        return this.http
            .put(`${API_URL}/countryStateMaint/updateStateAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsForBank(payload) {
        return this.http
            .put(`${API_URL}/bank/updateBankAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    allCountryCode() {
        return this.http
            .get(`${API_URL}/countryMaint/fetchCountryInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    //Audit log ends
    // Branch Endpoints Start
    getAllBranch() {
        return this.http
            .get(`${API_URL}/branch`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteBranch(branchId, currentUserId) {
        return this.http
            .delete(`${API_URL}/branch/${branchId}/${currentUserId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getBranchByCity(city) {
        return this.http
            .get(`${API_URL}/branch/fetchbranch/${city}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getBranchById(branchId) {
        return this.http
            .get(`${API_URL}/branch/${branchId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getBranchListByBankName(bankName) {
        return this.http
            .get(`${API_URL}/branch/fetchBranchListByBank?bankName=${bankName}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    createOrUpdateBranch(branchModel, currentUserId) {
        return this.http
            .post(`${API_URL}/branch/upsertDetails/${currentUserId}`, branchModel)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    createOrUpdateBank(bankModel, currentUserId) {
        return this.http
            .post(`${API_URL}/bank/${currentUserId}`, bankModel)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteBank(Id, currentUserId) {
        return this.http
            .delete(`${API_URL}/bank/${Id}/${currentUserId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchBankInfoByBranchCode(branchCode) {
        return this.http.get(`${API_URL}/bank/fetchBankInfoByBranchCode?branchCode=${branchCode}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    // Branch Endpoints END
    getTillId() {
        return this.http
            .get(`${API_URL}/till-service`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getTillData(tillOrVault) {
        return this.http
            .get(`${API_URL}/icTillVault/fetchTillOrVault?tillOrVault=${tillOrVault}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getDenomMaster() {
        return this.http
            .get(`${API_URL}/maintenance/fetchDenomMasterInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchDenomMasterAuthRecs() {
        return this.http
            .get(`${API_URL}/maintenance/fetchDenomMasterAuthRecs`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchDenomMasterById(id) {
        return this.http
            .get(`${API_URL}/maintenance/fetchDenomMasterById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    saveDenomMaster(dtu) {
        return this.http.post(`${API_URL}/maintenance/upsertDenomMaster`, dtu);
        // .pipe(catchError(this.errorHandler));
    }
    saveTillVaultMaster(dtu) {
        return this.http.post(`${API_URL}/icTillVault/upsertDetails`, dtu);
        // .pipe(catchError(this.errorHandler));
    }
    deleteDenomMaster(id) {
        return this.http
            .delete(`${API_URL}/maintenance/deleteDenomMaster?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    searchNames(name) {
        return this.http
            .get(`${API_URL}/customerdata/fetchCustomers/${name}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchTellerProfileInfo(tellerId) {
        return this.http
            .get(`${API_URL}/loginApi/fetchTellerProfileInfo?tellerId=${tellerId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    changeTellerPassword(passwordInfo) {
        return this.http
            .post(`${API_URL}/loginApi/changePassword`, passwordInfo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    updateTellerInfo(info) {
        return this.http
            .put(`${API_URL}/loginApi/updatetellerProfileInfo`, info)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    // getcurrencyDropDown(entityName: string) {
    // /maintenance/fetchTillVaultConfigInfo
    //  /maintenance/fetchTillVaultDenomById
    //   return this.http.get<string[]>(`${API_URL}/rest/data/getMasterData?entityName=${entityName}`).pipe(catchError(this.errorHandler))
    // }
    deleteTillVaultMaster(id) {
        return this.http
            .delete(`${API_URL}/icTillVault/deleteTillVault?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchTransactionTypeInfo() {
        return this.http
            .get(`${API_URL}/maintenance/fetchTransactiobTypeInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    upsertTransactionType(info) {
        return this.http
            .post(`${API_URL}/maintenance/upsertTransactionType`, info)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchAccountTypeInfo() {
        return this.http
            .get(`${API_URL}/maintenance/fetchAccountTypeInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchAccountTypeById(id) {
        return this.http
            .get(`${API_URL}/maintenance/fetchAccountTypeById?accountTypeId=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchTillVaultStatusInfoList() {
        return this.http
            .get(`${API_URL}/maintenance/fetchTillVaultStatusInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getTillVaultStatusById(id) {
        return this.http
            .get(`${API_URL}/maintenance/fetchTillVaultStatusById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    upsertTillVaultStatus(payloadObj) {
        return this.http.post(`${API_URL}/maintenance/upsertTillVaultStatus`, payloadObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteTillVaultStatusById(id) {
        return this.http
            .delete(`${API_URL}/maintenance/deleteTillVaultStatus?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getDenomInfoList() {
        return this.http
            .get(`${API_URL}/maintenance/fetchBaseDenominationInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getDenomInfoById(baseDenominationId) {
        return this.http
            .get(`${API_URL}/maintenance/fetchBaseDenominationById?baseDenominationId=${baseDenominationId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    saveBaseDenomination(baseDenom) {
        return this.http
            .post(`${API_URL}/maintenance/upsertBaseDenomination`, baseDenom)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    removeBaseDenominationById(baseDenominationId) {
        return this.http
            .delete(`${API_URL}/maintenance/deleteBaseDenomination?baseDenominationId=${baseDenominationId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    upsertAccountType(info) {
        return this.http
            .post(`${API_URL}/maintenance/upsertAccountType`, info)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteTransactionType(transactionTypeId) {
        return this.http
            .delete(`${API_URL}/maintenance/deleteTransactionType?transactionTypeId=${transactionTypeId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteAccountType(accountTypeId) {
        return this.http
            .delete(`${API_URL}/maintenance/deleteAccountType?accountTypeId=${accountTypeId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchTxnCashMasterInfo() {
        return this.http
            .get(`${API_URL}/maintenance/fetchTxnCashMasterInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchTxnCashMasterById(id) {
        return this.http
            .get(`${API_URL}/maintenance/fetchTxnCashMasterById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    upsertTxnCashMaster(info) {
        return this.http
            .post(`${API_URL}/maintenance/upsertTxnCashMaster`, info)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteTxnCashMaster(id) {
        return this.http
            .delete(`${API_URL}/maintenance/deleteTxnCashMaster?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchAccountInfo(accountId) {
        return this.http
            .get(`${API_URL}/accountdata/getAccountInfo?accountId=${accountId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    updateTokenStatus(tokenInfo) {
        return this.http
            .put(`${API_URL}/cash-deposit/api/updateTokenStatus`, tokenInfo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    updateEntityDetails(data) {
        return this.http
            .post(`${API_URL}/entity/upsertDetails`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchEntityDetails() {
        return this.http
            .get(`${API_URL}/entity/fetchEntityDetails`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteEntity(id) {
        return this.http
            .delete(`${API_URL}/entity/deleteEntity?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    editEntityById(id) {
        return this.http
            .get(`${API_URL}/entity/fetchEntityById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getBillerInfoById(id) {
        return this.http
            .get(`${API_URL}/billerInfoApi/getBillerInfoById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAllBillerInfoId() {
        return this.http
            .get(`${API_URL}/billerInfoApi/fetchBillerDetails`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteBillerInfo(id) {
        return this.http
            .delete(`${API_URL}/billerInfoApi/deleteBillerInfoById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    saveOrUpdateBillerInfo(data) {
        return this.http
            .post(`${API_URL}/billerInfoApi/saveOrUpdateBillerInfo`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getBranchHolidayInfo() {
        return this.http
            .get(`${API_URL}/holiday/fetchBranchHolidayInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    findByCalenderYearAndEntityCodeAndBankCodeAndBranchCode(params) {
        return this.http
            .get(`${API_URL}/holiday/fetchBranchHolidayInfoByParams/?${params}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    findByCalenderYearAndEntityCodeAndBankCodeAndCurrencyCode(params) {
        return this.http
            .get(`${API_URL}/holiday/fetchCurrencyHolidayInfoByParams/?${params}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getClearingHolidayInfo() {
        return this.http
            .get(`${API_URL}/holiday/fetchClearingHolidayInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getCurrencyHolidayInfo() {
        return this.http
            .get(`${API_URL}/holiday/fetchCurrencyHolidayInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteBranchHoliday(id) {
        return this.http
            .delete(`${API_URL}/holiday/deleteBranchHoliday?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteClearingHoliday(id) {
        return this.http
            .delete(`${API_URL}/holiday/deleteClearingHoliday?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteCurrencyHoliday(id) {
        return this.http
            .delete(`${API_URL}/holiday/deleteCurrencyHoliday?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    updateBranchHolidayDetails(data, isEdit) {
        return this.http
            .post(`${API_URL}/holiday/upsertBranchHolidayDetails/${isEdit}`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchBranchHolidayByCalendarDateDetails() {
        return this.http
            .get(`${API_URL}/holiday/fetchHolidayPerCalendarYear`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    upsertClearingHolidayDetails(data) {
        return this.http
            .post(`${API_URL}/holiday/upsertClearingHolidayDetails`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    upsertCurrencyHolidayDetails(data) {
        return this.http
            .post(`${API_URL}/holiday/upsertCurrencyHolidayDetails`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    updateBranchDetails(data, loggedInUser) {
        return this.http
            .post(`${API_URL}/branch/upsertDetails/${loggedInUser}`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getMaintenanceMenu() {
        return this.http
            .get(`${API_URL}/screen/fetchDynamicScreenInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getMaintenanceParentMenu() {
        return this.http
            .get(`${API_URL}/screen/fetchInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    upsertMenu(model) {
        return this.http
            .post(`${API_URL}/screen/upsertMenuDetails`, model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteMenu(id) {
        return this.http
            .delete(`${API_URL}/screen/deleteData?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getBankDetails(id) {
        return this.http
            .get(`${API_URL}/bank/{id}?Id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getEntityDropdown() {
        return this.http
            .get(`${API_URL}/entity/fetchEntityDetails `)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuthEntityDropdown() {
        return this.http
            .get(`${API_URL}/entity/fetchAuthrorizedEntityDetails `)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    editeditBranchHoliday(id) {
        return this.http
            .get(`${API_URL}/holiday/fetchBranchHolidayById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    editCurrencyHoliday(id) {
        return this.http
            .get(`${API_URL}/holiday/fetchCurrencyHolidayById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    updateTxnChargeDetails(data) {
        return this.http
            .post(`${API_URL}/txnChargesMaint/upsertTxnCharges`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getTxnChargesById(id) {
        return this.http
            .get(`${API_URL}/txnChargesMaint/fetchTxnChargesById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteTxnChargesById(id) {
        return this.http
            .delete(`${API_URL}/txnChargesMaint/deleteTxnCharges?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getTxnChargeDetails() {
        return this.http
            .get(`${API_URL}/txnChargesMaint/fetchAllTxnCharges`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getSecurityPolicyDetails() {
        return this.http
            .get(`${API_URL}/maintenance/fetchSecurityPolicynfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    updateTillVaultCcyDemonBalDetails(data) {
        return this.http.post(`${API_URL}/tillVaultCcyDemonBalApi/saveOrUpdateTillVaultCcyDemonBal`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteTillVaultCcyDemonById(id) {
        return this.http
            .delete(`${API_URL}/tillVaultCcyDemonBalApi/deleteTillVaultCcyDemonBalByTvcId?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getTillVaultCcyDemonById(tvcId) {
        return this.http.get(`${API_URL}/tillVaultCcyDemonBalApi/getTillVaultCcyDemonBalByTvcId?tvcId=${tvcId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchTillVaultCcyDemonBal() {
        return this.http
            .get(`${API_URL}/tillVaultCcyDemonBalApi/fetchTillVaultCcyDemonBalDetails`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getProductDetails() {
        return this.http
            .get(`${API_URL}/maintenance/fetchProductInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteProductById(id) {
        return this.http
            .delete(`${API_URL}/maintenance/deleteProduct?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    updateProductDetails(data) {
        return this.http
            .post(`${API_URL}/maintenance/upsertProduct`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getProductById(id) {
        return this.http
            .get(`${API_URL}/maintenance/fetchProductById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    uploadTxnChargesFile(data) {
        return this.http
            .post(`${API_URL}/upload-api/uploadDoc`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    isProductCodePresent(productCode) {
        return this.http
            .get(`${API_URL}/maintenance/productCodePresent?productCode=${productCode}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchCurrencyMaintDetails() {
        return this.http
            .get(`${API_URL}/currencyMaint-api/fetchCurrencyMaintInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    editCurrencyMaintById(currencyCode) {
        console.log(currencyCode);
        return this.http.get(`${API_URL}/currencyMaint-api/fetchCurrencyMaintByCurrencyCode?currencyCode=${currencyCode}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    upsertCurrencyMaintDetails(data) {
        return this.http
            .post(`${API_URL}/currencyMaint-api/upsertCurrencyMaint`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    updateAuditLogForCurrencyMaint(payload) {
        return this.http
            .put(`${API_URL}/currencyMaint-api/updateCurrencyMaintAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteCurrencyMaint(id) {
        return this.http
            .delete(`${API_URL}/currencyMaint-api/deleteCurrencyMaint?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getCurrencyDetails() {
        return this.http
            .get(`${API_URL}/currencyMaint-api/fetchCurrencyMaintAuthRecs`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    uploadFile(data) {
        return this.http
            .post(`${API_URL}/upload-api/uploadDoc`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    uploadexcelFile(data) {
        return this.http
            .post(`${API_URL}/upload-api/uploadDoc`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getTillVaultConfigUpload(file) {
        return this.http
            .post(`${API_URL}/upload-api/uploadDoc`, file)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    uploadExelFile(data) {
        return this.http.post(`${API_URL}/upload-api/uploadDoc`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getRoleInfo() {
        return this.http
            .get(`${API_URL}/role-api/fetchRoleInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchScreenPermissions() {
        return this.http.get(`${API_URL}/role-api/fetchAllTabs`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchRolePermissionByTabID(tabId) {
        return this.http.get(`${API_URL}/role-api/fetchScreenInfoByTabId?tabId=${tabId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    saveRole(data) {
        return this.http.post(`${API_URL}/role-api/upsertRole`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchRoleSummary() {
        return this.http.get(`${API_URL}/role-api/fetchRoleInfo`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchRoleById(id) {
        return this.http.get(`${API_URL}/role-api/fetchRoleById?id=${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteRole(id) {
        return this.http.delete(`${API_URL}/role-api/deleteRole?id=${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsForRoleMaintenance(payload) {
        return this.http.put(`${API_URL}/role-api/updateRoleAuditLog`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    upsertUserMaintenance(data) {
        return this.http
            .post(`${API_URL}/users/upsertUser`, data);
    }
    getUserInfo() {
        return this.http
            .get(`${API_URL}/users/fetchUserInfo`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteUserById(id) {
        return this.http.delete(`${API_URL}/users/deleteUser?id=${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getUserId(id) {
        return this.http.get(`${API_URL}/users/fetchUserById?id=${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsForUserMaintenance(payload) {
        return this.http.put(`${API_URL}/users/updateUserAuditLog`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    appLogout(username) {
        return this.http.put(`${API_URL}/loginApi/logoutUser`, username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    editMenuMaintenance(id) {
        return this.http
            .get(`${API_URL}/screen/fetchInfoByParentId?parentId=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsForTillVaultCcyDenomBal(payload) {
        return this.http.put(`${API_URL}/tillVaultCcyDemonBalApi/updateTillVaultCcyDemonBalAuditLog`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    updateBiller(data) {
        return this.http
            .put(`${API_URL}/billerInfoApi/updateBillerAuditLog`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsForMenu(payload) {
        return this.http.put(`${API_URL}/screen/updateDynamicMenuAuditLog`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getExchangeRateforCurrency(currency1, currency2) {
        return this.http
            .get(`${API_URL}/currency-api/fetchExchangeRateForCurrency?currency1=${currency1}&currency2=${currency2}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    transferToken(payload) {
        return this.http.post(`${API_URL}/transferToken`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getReport(tellerId, fromDate, endDate) {
        //console.log(data)
        // let reportid = 'HRRATTD';
        // let date = '2022-08-23';
        var bip = `http://192.168.0.14:8071/Icust-Digital-Banking/birt/downloadTransactionReport?tellerId=${tellerId}&fromDate=${fromDate}&toDate=${endDate}`;
        console.log("in service", bip);
        window.open(bip);
        /*return this.http.get<any>(`http://192.168.0.14:8071/Datamart/bipTest/getReportIdAndDate/${reportid}/${date}`).pipe(catchError(this.errorHandler));
         http://192.168.0.14:8071/Datamart/bipTest/getReportIdAndDate/${HRRATTD}/${2022-08-23}
        return this.http.get<any>(`${API_URL}/bip/getReport?data=${data}`).pipe(catchError(this.errorHandler)); */
    }
    getAuditLogsForCurrencyBranch(payload) {
        return this.http
            .put(`${API_URL}/holiday/updateCurrencyHolidayAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getHolidayData() {
        return this.holidayData.asObservable();
    }
    setHolidayData(holidayData) {
        this.holidayData.next(holidayData);
    }
    fetchAuthrorizedRoleInfo() {
        return this.http.get(`${API_URL}/role-api/fetchAuthrorizedRoleInfo`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    fetchNotification(tellerId) {
        return this.http.get(`${API_URL}/teller/notifications/getTellerNotifications?tellerId=${tellerId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteIndividualToken(tellerId) {
        return this.http.delete(`${API_URL}/teller/notifications/delete?notificationId=${tellerId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteAllToken(tellerId) {
        return this.http.delete(`${API_URL}/teller/notifications/deleteAll?tellerId=${tellerId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getCustomerCategory() {
        return this.http
            .get(`${API_URL}/maintenance/fetchCustomerCategoryDetails`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteCustomerCategory(id) {
        return this.http
            .delete(`${API_URL}/maintenance/deleteCustomerCategoryById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    saveCustomerCategory(dtu) {
        return this.http.post(`${API_URL}/maintenance/UpsertCustomerCategoryDetails`, dtu);
        // .pipe(catchError(this.errorHandler));
    }
    updateCustomerAuditLog(payload) {
        return this.http
            .put(`${API_URL}/maintenance/updateCustomerAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getCustomerCategoryById(id) {
        return this.http
            .get(`${API_URL}/maintenance/fetchCustomerCategoryById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getCustomerChargeCategory() {
        return this.http
            .get(`${API_URL}/maintenance/fetchCustomerChargeCategoryDetails`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteCustomerChargeCategory(id) {
        return this.http
            .delete(`${API_URL}/maintenance/deleteCustomerChargeCategoryById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    saveCustomerChargeCategory(dtu) {
        return this.http.post(`${API_URL}/maintenance/upsertCustomerChargeCategory`, dtu);
        // .pipe(catchError(this.errorHandler));
    }
    getCustomerChargeCategoryById(id) {
        return this.http
            .get(`${API_URL}/maintenance/fetchCustomerChargeCategoryById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    updateCustomerChargeAuditLog(payload) {
        return this.http
            .put(`${API_URL}/maintenance/updateCustomerChargeAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    createKioskBranch(data) {
        return this.http
            .post(`${API_URL}/kioskSystem/upsertDetails`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getKioskLoginDetails() {
        return this.http
            .get(`${API_URL}/kioskSystem/fetchKioskSystemDetails`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    deleteKioskLoginById(id) {
        return this.http
            .delete(`${API_URL}/kioskSystem/deleteKioskSystem?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getAuditLogsForKioskMaintenance(payload) {
        return this.http
            .put(`${API_URL}/kioskSystem/updateKioskSystemAuditLog`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getKioskDataById(id) {
        return this.http
            .get(`${API_URL}/kioskSystem/fetchKioskSystemById?id=${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    downloadReportConfiguration(tellerId, fromDate, toDate) {
        return this.http
            .get(`http://192.168.0.14:8081/BirtReport/downloadTransactionReport?tellerId=7&fromDate=2023-01-10&toDate=2023-01-10`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getRecentTransactionFilter(tellerId, filterOption) {
        return this.http
            .get(`${API_URL}/cash-deposit/api/fetchTellerRecentTrans?tellerId=${tellerId}&filterOption=${filterOption}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getRecentTransactionFilterBasedOnDate(tellerId, fromDate, toDate) {
        return this.http
            .get(`${API_URL}/cash-deposit/api/fetchTellerRecentTrans?tellerId=${tellerId}&fromDate=${fromDate}&toDate=${toDate}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_5__["ShowMessageService"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_5__["ShowMessageService"] }]; }, null); })();


/***/ }),

/***/ "qj9C":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/bottom-sheet-share/bottom-sheet-share.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BottomSheetShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetShareComponent", function() { return BottomSheetShareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






class BottomSheetShareComponent {
    constructor(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    ngOnInit() { }
    openLink(event) {
        this.bottomSheetRef.dismiss();
    }
}
BottomSheetShareComponent.ɵfac = function BottomSheetShareComponent_Factory(t) { return new (t || BottomSheetShareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"])); };
BottomSheetShareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BottomSheetShareComponent, selectors: [["app-bottom-sheet-share"]], decls: 5, vars: 0, consts: [["mat-list-item", "", "href", "#"], ["mat-line", ""]], template: function BottomSheetShareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatLine"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3R0b20tc2hlZXQtc2hhcmUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BottomSheetShareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bottom-sheet-share',
                templateUrl: './bottom-sheet-share.component.html',
                styleUrls: ['./bottom-sheet-share.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"] }]; }, null); })();


/***/ }),

/***/ "qrO7":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/directives/egret-sidenav-helper/egret-sidenav-helper.directive.ts ***!
  \******************************************************************************************/
/*! exports provided: EgretSidenavHelperDirective, EgretSidenavTogglerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretSidenavHelperDirective", function() { return EgretSidenavHelperDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretSidenavTogglerDirective", function() { return EgretSidenavTogglerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/match-media.service */ "30N5");
/* harmony import */ var _egret_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./egret-sidenav-helper.service */ "iSAc");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");












class EgretSidenavHelperDirective {
    constructor(matchMediaService, egretSidenavHelperService, matSidenav, mediaObserver) {
        this.matchMediaService = matchMediaService;
        this.egretSidenavHelperService = egretSidenavHelperService;
        this.matSidenav = matSidenav;
        this.mediaObserver = mediaObserver;
        // Set the default value
        this.isOpen = true;
        this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.egretSidenavHelperService.setSidenav(this.id, this.matSidenav);
        if (this.mediaObserver.isActive(this.isOpenBreakpoint)) {
            this.isOpen = true;
            this.matSidenav.mode = "side";
            this.matSidenav.toggle(true);
        }
        else {
            this.isOpen = false;
            this.matSidenav.mode = "over";
            this.matSidenav.toggle(false);
        }
        this.matchMediaService.onMediaChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribeAll))
            .subscribe(() => {
            if (this.mediaObserver.isActive(this.isOpenBreakpoint)) {
                this.isOpen = true;
                this.matSidenav.mode = "side";
                this.matSidenav.toggle(true);
            }
            else {
                this.isOpen = false;
                this.matSidenav.mode = "over";
                this.matSidenav.toggle(false);
            }
        });
    }
    ngOnDestroy() {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }
}
EgretSidenavHelperDirective.ɵfac = function EgretSidenavHelperDirective_Factory(t) { return new (t || EgretSidenavHelperDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_3__["MatchMediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_egret_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__["EgretSidenavHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["MediaObserver"])); };
EgretSidenavHelperDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: EgretSidenavHelperDirective, selectors: [["", "egretSidenavHelper", ""]], hostVars: 2, hostBindings: function EgretSidenavHelperDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-open", ctx.isOpen);
    } }, inputs: { id: ["egretSidenavHelper", "id"], isOpenBreakpoint: ["isOpen", "isOpenBreakpoint"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSidenavHelperDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[egretSidenavHelper]"
            }]
    }], function () { return [{ type: app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_3__["MatchMediaService"] }, { type: _egret_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__["EgretSidenavHelperService"] }, { type: _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"] }, { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["MediaObserver"] }]; }, { isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.is-open"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["egretSidenavHelper"]
        }], isOpenBreakpoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["isOpen"]
        }] }); })();
class EgretSidenavTogglerDirective {
    constructor(egretSidenavHelperService) {
        this.egretSidenavHelperService = egretSidenavHelperService;
    }
    onClick() {
        // console.log(this.egretSidenavHelperService.getSidenav(this.id))
        this.egretSidenavHelperService.getSidenav(this.id).toggle();
    }
}
EgretSidenavTogglerDirective.ɵfac = function EgretSidenavTogglerDirective_Factory(t) { return new (t || EgretSidenavTogglerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_egret_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__["EgretSidenavHelperService"])); };
EgretSidenavTogglerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: EgretSidenavTogglerDirective, selectors: [["", "egretSidenavToggler", ""]], hostBindings: function EgretSidenavTogglerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EgretSidenavTogglerDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { id: ["egretSidenavToggler", "id"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSidenavTogglerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[egretSidenavToggler]"
            }]
    }], function () { return [{ type: _egret_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__["EgretSidenavHelperService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["egretSidenavToggler"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click"]
        }] }); })();


/***/ }),

/***/ "r/oB":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-anchor.directive.ts ***!
  \****************************************************************/
/*! exports provided: DropdownAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownAnchorDirective", function() { return DropdownAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-link.directive */ "UGQK");




class DropdownAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
}
DropdownAnchorDirective.ɵfac = function DropdownAnchorDirective_Factory(t) { return new (t || DropdownAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"])); };
DropdownAnchorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownAnchorDirective, selectors: [["", "appDropdownToggle", ""]], hostBindings: function DropdownAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownAnchorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDropdownToggle]',
            }]
    }], function () { return [{ type: _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"]]
            }] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "rmxa":
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme.service */ "ETNk");





class LayoutService {
    constructor(themeService) {
        this.themeService = themeService;
        this.layoutConf = {};
        this.layoutConfSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.layoutConf);
        this.layoutConf$ = this.layoutConfSubject.asObservable();
        this.fullWidthRoutes = ['shop'];
        this.setAppLayout({
            navigationPos: 'side',
            sidebarStyle: 'full',
            sidebarColor: 'slate',
            sidebarCompactToggle: false,
            dir: 'ltr',
            useBreadcrumb: true,
            topbarFixed: false,
            footerFixed: false,
            topbarColor: 'white',
            footerColor: 'slate',
            matTheme: 'egret-navy',
            breadcrumb: 'simple',
            perfectScrollbar: true
        });
    }
    setAppLayout(layoutConf) {
        this.layoutConf = Object.assign(Object.assign({}, this.layoutConf), layoutConf);
        this.applyMatTheme(this.layoutConf.matTheme);
    }
    publishLayoutChange(lc, opt = {}) {
        if (this.layoutConf.matTheme !== lc.matTheme && lc.matTheme) {
            this.themeService.changeTheme(this.layoutConf.matTheme, lc.matTheme);
        }
        this.layoutConf = Object.assign(this.layoutConf, lc);
        this.layoutConfSubject.next(this.layoutConf);
    }
    applyMatTheme(theme) {
        this.themeService.applyMatTheme(this.layoutConf.matTheme);
    }
    adjustLayout(options = {}) {
        let sidebarStyle;
        this.isMobile = this.isSm();
        this.currentRoute = options.route || this.currentRoute;
        sidebarStyle = this.isMobile ? 'closed' : 'full';
        if (this.currentRoute) {
            this.fullWidthRoutes.forEach((route) => {
                if (this.currentRoute.indexOf(route) !== -1) {
                    sidebarStyle = 'closed';
                }
            });
        }
        this.publishLayoutChange({
            isMobile: this.isMobile,
            sidebarStyle,
        });
    }
    isSm() {
        return window.matchMedia(`(max-width: 959px)`).matches;
    }
}
LayoutService.ɵfac = function LayoutService_Factory(t) { return new (t || LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"])); };
LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LayoutService, factory: LayoutService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "s0uO":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/sidebar-top/sidebar-top.component.ts ***!
  \************************************************************************/
/*! exports provided: SidebarTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarTopComponent", function() { return SidebarTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/navigation.service */ "LFK6");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "TgYD");

// import PerfectScrollbar from 'perfect-scrollbar';






class SidebarTopComponent {
    constructor(navService) {
        this.navService = navService;
    }
    ngOnInit() {
        this.menuItemsSub = this.navService.menuItems$.subscribe(menuItem => {
            this.menuItems = menuItem.filter(item => item.type !== 'icon' && item.type !== 'separator');
        });
    }
    ngAfterViewInit() {
        // setTimeout(() => {
        //   this.sidebarPS = new PerfectScrollbar('#sidebar-top-scroll-area', {
        //     suppressScrollX: true
        //   })
        // })
    }
    ngOnDestroy() {
        // if(this.sidebarPS) {
        //   this.sidebarPS.destroy();
        // }
        if (this.menuItemsSub) {
            this.menuItemsSub.unsubscribe();
        }
    }
}
SidebarTopComponent.ɵfac = function SidebarTopComponent_Factory(t) { return new (t || SidebarTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"])); };
SidebarTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarTopComponent, selectors: [["app-sidebar-top"]], decls: 3, vars: 1, consts: [[1, "sidebar-panel"], ["id", "sidebar-top-scroll-area", "fxLayout", "column", 1, "navigation-hold", 3, "perfectScrollbar"], [3, "items"]], template: function SidebarTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.menuItems);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar-top',
                templateUrl: './sidebar-top.component.html'
            }]
    }], function () { return [{ type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"] }]; }, null); })();


/***/ }),

/***/ "sTnX":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/loader/loader.service.ts ***!
  \**********************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "slWk":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/egret-sidebar/egret-sidebar-helper.service.ts ***!
  \*********************************************************************************/
/*! exports provided: EgretSidebarHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgretSidebarHelperService", function() { return EgretSidebarHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EgretSidebarHelperService {
    constructor() {
        this.sidebarList = [];
    }
    setSidebar(name, sidebar) {
        this.sidebarList[name] = sidebar;
    }
    getSidebar(name) {
        return this.sidebarList[name];
    }
    removeSidebar(name) {
        if (!this.sidebarList[name]) {
            console.warn(`The sidebar with name '${name}' doesn't exist.`);
        }
        // remove sidebar
        delete this.sidebarList[name];
    }
}
EgretSidebarHelperService.ɵfac = function EgretSidebarHelperService_Factory(t) { return new (t || EgretSidebarHelperService)(); };
EgretSidebarHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EgretSidebarHelperService, factory: EgretSidebarHelperService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSidebarHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tZUg":
/*!********************************************************!*\
  !*** ./src/app/shared/services/local-store.service.ts ***!
  \********************************************************/
/*! exports provided: LocalStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStoreService", function() { return LocalStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LocalStoreService {
    constructor() {
        this.ls = window.localStorage;
    }
    setItem(key, value) {
        value = JSON.stringify(value);
        this.ls.setItem(key, value);
        return true;
    }
    getItem(key) {
        const value = this.ls.getItem(key);
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return null;
        }
    }
    clear() {
        this.ls.clear();
    }
}
LocalStoreService.ɵfac = function LocalStoreService_Factory(t) { return new (t || LocalStoreService)(); };
LocalStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStoreService, factory: LocalStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "urBs":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/header-top/header-top.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTopComponent", function() { return HeaderTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/navigation.service */ "LFK6");
/* harmony import */ var _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/theme.service */ "ETNk");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/layout.service */ "rmxa");
/* harmony import */ var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/auth/jwt-auth.service */ "nZzT");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var app_views_others_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/views/others/search/search.component */ "Adj1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






//import { User } from 'app/shared/models/user.model';
























function HeaderTopComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderTopComponent_mat_grid_tile_27_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderTopComponent_mat_grid_tile_27_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_mat_grid_tile_27_Template_mat_grid_tile_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const theme_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onChange(theme_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderTopComponent_mat_grid_tile_27_mat_icon_3_Template, 2, 0, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", theme_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", theme_r5.baseColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", theme_r5.isActive);
} }
function HeaderTopComponent_button_83_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_button_83_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.toggleSidenav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderTopComponent {
    constructor(layout, router, navService, themeService, translate, renderer, jwtAuth, ls, dialog, apiService) {
        this.layout = layout;
        this.router = router;
        this.navService = navService;
        this.themeService = themeService;
        this.translate = translate;
        this.renderer = renderer;
        this.jwtAuth = jwtAuth;
        this.ls = ls;
        this.dialog = dialog;
        this.apiService = apiService;
        this.rumangoThemes = [];
        this.currentLang = 'en';
        this.availableLangs = [{
                name: 'English',
                code: 'en',
            }, {
                name: 'Spanish',
                code: 'es',
            }];
    }
    ngOnInit() {
        this.currentUser = this.ls.getItem("ICUST_USER");
        this.flag = this.ls.getItem("notification");
        this.flag1 = this.ls.getItem("profile");
        this.layoutConf = this.layout.layoutConf;
        this.rumangoThemes = this.themeService.rumangoThemes;
        this.menuItemSub = this.navService.menuItems$
            .subscribe(res => {
            res = res.filter(item => item.type !== 'icon' && item.type !== 'separator');
            let limit = 4;
            let mainItems = res.slice(0, limit);
            if (res.length <= limit) {
                return this.menuItems = mainItems;
            }
            let subItems = res.slice(limit, res.length - 1);
            mainItems.push({
                name: 'More',
                type: 'dropDown',
                tooltip: 'More',
                icon: 'more_horiz',
                sub: subItems
            });
            this.menuItems = mainItems;
        });
        this.user = this.ls.getItem('ICUST_USER');
    }
    ngOnDestroy() {
        this.menuItemSub.unsubscribe();
    }
    setLang() {
        this.translate.use(this.currentLang);
    }
    changeTheme(theme) {
        //this.layout.publishLayoutChange({ matTheme: theme.name }) 
        this.layout.applyMatTheme(theme);
    }
    onChange(t) {
        console.log("t", t);
        if (t.checked) {
            this.themeService.changeTheme('egret-navy', 'egret-dark-purple');
        }
        else {
            this.themeService.changeTheme('egret-dark-purple', 'egret-navy');
        }
    }
    toggleNotific() {
        this.ls.setItem("notification", true);
        this.flag = this.ls.getItem('notification');
        this.notificPanel.toggle();
    }
    toggleProfile() {
        console.log("call profile");
        this.ls.setItem("profile", true);
        this.flag1 = this.ls.getItem('profile');
        this.profilePanel.toggle();
        console.log("next one");
    }
    toggleSidenav() {
        if (this.layoutConf.sidebarStyle === 'closed') {
            return this.layout.publishLayoutChange({
                sidebarStyle: 'full'
            });
        }
        this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
        });
    }
    //search implementation
    onSearch() {
        const dialogRef = this.dialog.open(app_views_others_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"], {
            width: '50%',
            disableClose: true,
            panelClass: "custom",
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    goToSettings() {
        console.log("enter inside settings");
        this.router.navigate(["/settings/profile"]);
    }
    goToPassword() {
        this.router.navigate(['/settings/change-password']);
    }
    goToMaintenance() {
        this.router.navigate(['/maintenance']);
    }
    gotoEmailchange() {
        this.router.navigate(['/settings/change-email']);
    }
    goToThemeChange() {
        this.router.navigate(['/settings/theme-change']);
    }
    onSignout(username) {
        console.log("Inside signout method");
        this.apiService.appLogout(username).subscribe((resp) => {
            console.log("resp ", resp);
            if (resp != null) {
                this.jwtAuth.signout();
            }
        });
    }
}
HeaderTopComponent.ɵfac = function HeaderTopComponent_Factory(t) { return new (t || HeaderTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"])); };
HeaderTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderTopComponent, selectors: [["app-header-top"]], inputs: { notificPanel: "notificPanel", profilePanel: "profilePanel" }, decls: 84, vars: 13, consts: [[1, "header-topnav", "mat-elevation-z2"], [1, "container"], [1, "topnav"], ["mat-icon-button", "", 1, "ml-16", 3, "click"], [1, "topbar-branding"], ["routerLink", "/others/dashboard", 2, "padding-bottom", "20%", "font-size", "larger", "color", "white"], ["fxFlex", ""], [1, "icons-padding"], ["mat-icon-button", ""], [3, "click"], ["mat-icon-button", "", "matTooltip", "Notifications", 1, "topbar-button-right", 3, "click"], ["class", "notification-number mat-bg-warn", 4, "ngIf"], ["mat-icon-button", "", "id", "schemeToggle", "matTooltip", "Color Schemes", 1, "topbar-button-right", 3, "matMenuTriggerFor"], ["themeMenu", "matMenu"], ["cols", "2", "rowHeight", "48px", 1, "theme-list"], [3, "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 1, "topbar-button-right", "mr-4", "img-button"], ["src", "assets/images/face-7.jpg", "alt", ""], [3, "matMenuTriggerFor"], ["accountMenu", "matMenu"], ["role", "list", 1, "notification-list"], ["matRipple", "", 1, "d-flex", "mb-16", "mx-8"], [1, "w-40", "h-40", "mr-16", "rounded-circle", "mat-bg-chip", "d-flex", "align-items-center", "justify-content-center"], [1, "d-flex", "flex-column", "justify-content-center", "flex-grow-1"], [1, "mb-4"], [1, "text-muted"], ["mat-icon-button", "", 3, "click"], ["color", "primary", 1, "text-muted"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item"], ["color", "primary", 1, "notific-icon", "mr-16"], ["fxLayout", "row"], [1, "message", "mx-4"], ["color", "primary", 1, "editbutton", 3, "click"], ["color", "primary", 1, "editlang", 3, "click"], ["mat-menu-item", "", 3, "click"], [2, "font-size", "medium"], ["mat-icon-button", "", "class", "mr-16", 3, "click", 4, "ngIf"], [1, "notification-number", "mat-bg-warn"], ["mat-menu-item", "", 3, "title"], [1, "egret-swatch"], ["class", "active-icon", 4, "ngIf"], [1, "active-icon"], ["mat-icon-button", "", 1, "mr-16", 3, "click"]], template: function HeaderTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_button_click_3_listener() { return ctx.toggleProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "YES BANK 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_mat_icon_click_12_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_button_click_14_listener() { return ctx.toggleNotific(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "notifications_none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderTopComponent_span_17_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_mat_icon_click_19_listener() { return ctx.goToSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "format_color_fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-menu", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-grid-list", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HeaderTopComponent_mat_grid_tile_27_Template, 4, 4, "mat-grid-tile", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-menu", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-nav-list", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h6", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "small", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_button_click_45_listener() { return ctx.gotoEmailchange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-list-item", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Password Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_mat_icon_click_56_listener() { return ctx.goToPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-list-item", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "language icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_mat_icon_click_66_listener() { return ctx.gotoEmailchange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-list-item", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "adjust icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Theme change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_mat_icon_click_76_listener() { return ctx.goToThemeChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_button_click_78_listener() { return ctx.onSignout(ctx.currentUser.tellerName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, HeaderTopComponent_button_83_Template, 3, 0, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rumangoThemes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.tellerName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.tellerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Language-", ctx.currentUser.language, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.isMobile);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenu"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatNavList"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRipple"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuItem"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridTile"]], styles: [".header-topnav[_ngcontent-%COMP%] {\n  color: white;\n  height: 60px;\n}\n\n.topbar-branding[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n\n.icons-padding[_ngcontent-%COMP%] {\n  margin-right: 5%;\n  line-height: 60px;\n}\n\n.editright[_ngcontent-%COMP%] {\n  float: left;\n}\n\n#link[_ngcontent-%COMP%]:hover {\n  background-color: #eff2f5;\n  cursor: pointer;\n}\n\n.editbutton[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-left: 59px;\n}\n\n.editlang[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-left: 55px;\n}\n\n.editemail[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-left: -15px;\n}\n\n.mat-menu-content[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.mat-menu-panel[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLXRvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixZQUFZO0FBQ2hCOztBQUNBO0VBQ0ksaUJBQWlCO0FBRXJCOztBQUNBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUVyQjs7QUFBQTtFQUNJLFdBQVc7QUFHZjs7QUFBQTtFQUNJLHlCQUEwQjtFQUMxQixlQUFlO0FBR25COztBQURBO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtBQUl0Qjs7QUFEQTtFQUNJLGVBQWU7RUFDZixrQkFBa0I7QUFJdEI7O0FBRkE7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CO0FBS3ZCOztBQUhBO0VBQ0ksYUFBYTtBQU1qQjs7QUFIQTtFQUNJLGVBQWU7QUFNbkIiLCJmaWxlIjoiaGVhZGVyLXRvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdG9wbmF2e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi50b3BiYXItYnJhbmRpbmd7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG4uaWNvbnMtcGFkZGluZ3tcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxufVxyXG4uZWRpdHJpZ2h0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNsaW5rOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNlZmYyZjU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmVkaXRidXR0b257XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDU5cHg7XHJcblxyXG59XHJcbi5lZGl0bGFuZ3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNTVweDtcclxufVxyXG4uZWRpdGVtYWlse1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAtMTVweDtcclxufVxyXG4ubWF0LW1lbnUtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4ubWF0LW1lbnUtcGFuZWwge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-top',
                templateUrl: './header-top.component.html',
                styleUrls: ['./header-top.component.scss']
            }]
    }], function () { return [{ type: _services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"] }, { type: _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__["JwtAuthService"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] }]; }, { notificPanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], profilePanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vafs":
/*!********************************************************!*\
  !*** ./src/app/shared/services/route-parts.service.ts ***!
  \********************************************************/
/*! exports provided: RoutePartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePartsService", function() { return RoutePartsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




class RoutePartsService {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    generateRouteParts(snapshot) {
        var routeParts = [];
        if (snapshot) {
            if (snapshot.firstChild) {
                routeParts = routeParts.concat(this.generateRouteParts(snapshot.firstChild));
            }
            if (snapshot.data['title'] && snapshot.url.length) {
                // console.log(snapshot.data['title'], snapshot.url)
                routeParts.push({
                    title: snapshot.data['title'],
                    breadcrumb: snapshot.data['breadcrumb'],
                    url: snapshot.url[0].path,
                    urlSegments: snapshot.url,
                    params: snapshot.params
                });
            }
        }
        return routeParts;
    }
}
RoutePartsService.ɵfac = function RoutePartsService_Factory(t) { return new (t || RoutePartsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
RoutePartsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoutePartsService, factory: RoutePartsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutePartsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "w8r1":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/speech-recognition/speech-recognition.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SpeechRecognitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognitionComponent", function() { return SpeechRecognitionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_services_voice_recognition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/voice-recognition.service */ "j/fj");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







class SpeechRecognitionComponent {
    constructor(service) {
        this.service = service;
        this.service.init();
    }
    ngOnInit() {
    }
    startService() {
        this.service.start();
    }
    stopService() {
        this.service.stop();
    }
}
SpeechRecognitionComponent.ɵfac = function SpeechRecognitionComponent_Factory(t) { return new (t || SpeechRecognitionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_voice_recognition_service__WEBPACK_IMPORTED_MODULE_1__["VoiceRecognitionService"])); };
SpeechRecognitionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpeechRecognitionComponent, selectors: [["app-speech-recognition"]], decls: 8, vars: 1, consts: [[1, "tooltip"], ["matPrefix", "", "mat-icon-button", "", 3, "mousedown", "mouseup"], [1, "tooltiptext"], [1, "voiceText"]], template: function SpeechRecognitionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function SpeechRecognitionComponent_Template_button_mousedown_1_listener() { return ctx.startService(); })("mouseup", function SpeechRecognitionComponent_Template_button_mouseup_1_listener() { return ctx.stopService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "mic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search by voice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service.text);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatPrefix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 100px;\n  background-color: white;\n  color: #2b2b2b;\n  font-size: 11px;\n  text-align: center;\n  border-radius: 4px;\n  padding: 1px;\n  \n  position: absolute;\n  z-index: 1;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.voiceText[_ngcontent-%COMP%] {\n  text-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3BlZWNoLXJlY29nbml0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBb0M7RUFDcEMsY0FBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLHlCQUFBO0VBQ0Esa0JBQWtCO0VBQ2xCLFVBQVU7QUFBZDs7QUFHRTtFQUNFLG1CQUFtQjtBQUF2Qjs7QUFFRTtFQUNFLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcGVlY2gtcmVjb2duaXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgY29sb3I6IHJnYig0MywgNDMsIDQzKTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICBcclxuICAgIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbiAgLnZvaWNlVGV4dHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpeechRecognitionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-speech-recognition',
                templateUrl: './speech-recognition.component.html',
                styleUrls: ['./speech-recognition.component.scss']
            }]
    }], function () { return [{ type: app_shared_services_voice_recognition_service__WEBPACK_IMPORTED_MODULE_1__["VoiceRecognitionService"] }]; }, null); })();


/***/ }),

/***/ "wl2U":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/button-loading/button-loading.component.ts ***!
  \******************************************************************************/
/*! exports provided: ButtonLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonLoadingComponent", function() { return ButtonLoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");





function ButtonLoadingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} }
function ButtonLoadingComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ButtonLoadingComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.loadingText);
} }
const _c0 = function (a0, a1, a2) { return { loading: a0, "mat-button": a1, "mat-raised-button": a2 }; };
const _c1 = ["*"];
class ButtonLoadingComponent {
    constructor() {
        this.raised = true;
        this.loadingText = 'Please wait';
        this.type = 'submit';
    }
    ngOnInit() {
    }
}
ButtonLoadingComponent.ɵfac = function ButtonLoadingComponent_Factory(t) { return new (t || ButtonLoadingComponent)(); };
ButtonLoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonLoadingComponent, selectors: [["button-loading"]], inputs: { loading: "loading", btnClass: "btnClass", raised: "raised", loadingText: "loadingText", type: "type", color: "color" }, ngContentSelectors: _c1, decls: 4, vars: 14, consts: [["mat-button", "", 3, "color", "type", "disabled", "ngClass"], ["class", "btn-spinner", 4, "ngIf"], [4, "ngIf"], [1, "btn-spinner"]], template: function ButtonLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonLoadingComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonLoadingComponent_span_2_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ButtonLoadingComponent_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button-loading ", ctx.btnClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("type", ctx.type)("disabled", ctx.loading)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](10, _c0, ctx.loading, !ctx.raised, ctx.raised));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tbG9hZGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonLoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'button-loading',
                templateUrl: './button-loading.component.html',
                styleUrls: ['./button-loading.component.scss']
            }]
    }], function () { return []; }, { loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['loading']
        }], btnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['btnClass']
        }], raised: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['raised']
        }], loadingText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['loadingText']
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['type']
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['color']
        }] }); })();


/***/ }),

/***/ "x/2q":
/*!*********************************************************************!*\
  !*** ./src/app/shared/services/showMessage/show-message.service.ts ***!
  \*********************************************************************/
/*! exports provided: ShowMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowMessageService", function() { return ShowMessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);





class ShowMessageService {
    constructor(toast) {
        this.toast = toast;
        this.errorData = [
            { "code": 400, "message": "Bad Request" },
            { "code": 401, "message": "Unauthorized" },
            { "code": 403, "message": "Forbidden" },
            { "code": 404, "message": "Not Found" },
            { "code": 500, "message": "Internal Server Error" },
            { "code": 502, "message": "Bad Gateway" },
            { "code": 503, "message": "Service Unavailable" },
            { "code": 504, "message": "Gateway Timeout" },
            { "code": 0, "message": "Error" }
        ];
    }
    errorMessage(status, errorResp) {
        console.log("show msg", status);
        console.log(errorResp);
        let i = 0;
        while (i < this.errorData.length) {
            if (this.errorData[i].code === status) {
                var errCode = status.toString();
                // this.toast.error(this.errorData[i].message, '', {
                //   timeOut: 3000,
                //   progressBar: true,
                //   tapToDismiss: true,
                //   closeButton: true,
                //   easeTime: 300,
                //   extendedTimeOut: 1000
                // });
                // Swal.fire('Oops', this.errorData[i].message, 'error');
                // Swal.fire({
                //   title: this.errorData[i].message ,
                //   text:"<p style='font-size: 20px>status</p>",
                //   width: 600
                // })
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    icon: 'error',
                    title: "Error Code : " + this.errorData[i].code,
                    text: "Error message : " + this.errorData[i].message,
                    width: 500,
                    // timer: 10000,
                    // timerProgressBar: true,
                    confirmButtonText: "OK",
                    confirmButtonColor: '#456EFE'
                });
            }
            i++;
        }
    }
}
ShowMessageService.ɵfac = function ShowMessageService_Factory(t) { return new (t || ShowMessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
ShowMessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShowMessageService, factory: ShowMessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowMessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "zMWy":
/*!**************************************************!*\
  !*** ./src/app/shared/shared-material.module.ts ***!
  \**************************************************/
/*! exports provided: SharedMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedMaterialModule", function() { return SharedMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");






































class SharedMaterialModule {
}
SharedMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedMaterialModule });
SharedMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedMaterialModule_Factory(t) { return new (t || SharedMaterialModule)(); }, imports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__["MatMomentDateModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedMaterialModule, { exports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__["MatMomentDateModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                    _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__["MatMomentDateModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zt0U":
/*!**************************************************!*\
  !*** ./src/app/shared/guards/user-role.guard.ts ***!
  \**************************************************/
/*! exports provided: UserRoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleGuard", function() { return UserRoleGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/jwt-auth.service */ "nZzT");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");








class UserRoleGuard {
    constructor(router, jwtAuth, snack) {
        this.router = router;
        this.jwtAuth = jwtAuth;
        this.snack = snack;
    }
    canActivate(route, state) {
        var user = this.jwtAuth.getUser();
        if (user &&
            route.data &&
            route.data.roles &&
            route.data.roles.includes(user.role)) {
            return true;
        }
        else {
            this.snack.open('You do not have access to this page!', 'OK');
            return false;
        }
    }
}
UserRoleGuard.ɵfac = function UserRoleGuard_Factory(t) { return new (t || UserRoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
UserRoleGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserRoleGuard, factory: UserRoleGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoleGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map