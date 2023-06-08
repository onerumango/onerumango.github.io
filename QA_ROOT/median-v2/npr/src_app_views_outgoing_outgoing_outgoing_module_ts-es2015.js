"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_outgoing_outgoing_outgoing_module_ts"],{

/***/ 89513:
/*!******************************************************!*\
  !*** ./src/app/views/outgoing/outgoing.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutgoingComponent": function() { return /* binding */ OutgoingComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _incoming_incoming_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../incoming/incoming.component */ 56663);


class OutgoingComponent {
    constructor() { }
    ngOnInit() {
    }
}
OutgoingComponent.ɵfac = function OutgoingComponent_Factory(t) { return new (t || OutgoingComponent)(); };
OutgoingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OutgoingComponent, selectors: [["npr-outgoing"]], decls: 1, vars: 0, template: function OutgoingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "npr-incoming");
    } }, directives: [_incoming_incoming_component__WEBPACK_IMPORTED_MODULE_0__.IncomingComponent], encapsulation: 2 });


/***/ }),

/***/ 18639:
/*!********************************************************************!*\
  !*** ./src/app/views/outgoing/outgoing/outgoing-routing.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutgoingRoutingModule": function() { return /* binding */ OutgoingRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/guards/can-deactivate.guard */ 50215);
/* harmony import */ var _outgoing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../outgoing.component */ 89513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    { path: '',
        component: _outgoing_component__WEBPACK_IMPORTED_MODULE_1__.OutgoingComponent, canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard] },
];
class OutgoingRoutingModule {
}
OutgoingRoutingModule.ɵfac = function OutgoingRoutingModule_Factory(t) { return new (t || OutgoingRoutingModule)(); };
OutgoingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: OutgoingRoutingModule });
OutgoingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OutgoingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 78426:
/*!************************************************************!*\
  !*** ./src/app/views/outgoing/outgoing/outgoing.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutgoingModule": function() { return /* binding */ OutgoingModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _outgoing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outgoing-routing.module */ 18639);
/* harmony import */ var _outgoing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../outgoing.component */ 89513);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 50481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _incoming_incoming_incoming_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../incoming/incoming/incoming.module */ 50764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







class OutgoingModule {
}
OutgoingModule.ɵfac = function OutgoingModule_Factory(t) { return new (t || OutgoingModule)(); };
OutgoingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: OutgoingModule });
OutgoingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _outgoing_routing_module__WEBPACK_IMPORTED_MODULE_0__.OutgoingRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _incoming_incoming_incoming_module__WEBPACK_IMPORTED_MODULE_3__.IncomingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](OutgoingModule, { declarations: [_outgoing_component__WEBPACK_IMPORTED_MODULE_1__.OutgoingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _outgoing_routing_module__WEBPACK_IMPORTED_MODULE_0__.OutgoingRoutingModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _incoming_incoming_incoming_module__WEBPACK_IMPORTED_MODULE_3__.IncomingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_outgoing_outgoing_outgoing_module_ts-es2015.js.map