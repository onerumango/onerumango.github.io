"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_v2_forex-cash-v2_forex-cash-v2_module_ts"],{

/***/ 18109:
/*!************************************************************************!*\
  !*** ./src/app/pages/v2/forex-cash-v2/forex-cash-v2-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForexCashV2PageRoutingModule": () => (/* binding */ ForexCashV2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _forex_cash_v2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forex-cash-v2.page */ 23342);




const routes = [
    {
        path: '',
        component: _forex_cash_v2_page__WEBPACK_IMPORTED_MODULE_0__.ForexCashV2Page
    }
];
let ForexCashV2PageRoutingModule = class ForexCashV2PageRoutingModule {
};
ForexCashV2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForexCashV2PageRoutingModule);



/***/ }),

/***/ 34538:
/*!****************************************************************!*\
  !*** ./src/app/pages/v2/forex-cash-v2/forex-cash-v2.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForexCashV2PageModule": () => (/* binding */ ForexCashV2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _forex_cash_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forex-cash-v2-routing.module */ 18109);
/* harmony import */ var _forex_cash_v2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forex-cash-v2.page */ 23342);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-flag-picker */ 96801);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular-material-extensions/select-country */ 96631);
/* harmony import */ var src_app_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/directives/directive.module */ 27589);












let ForexCashV2PageModule = class ForexCashV2PageModule {
};
ForexCashV2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _forex_cash_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForexCashV2PageRoutingModule,
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__.SharedMaterialModule,
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_10__.NgxFlagPickerModule,
            src_app_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__.DirectiveModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_11__.MatSelectCountryModule
        ],
        declarations: [_forex_cash_v2_page__WEBPACK_IMPORTED_MODULE_1__.ForexCashV2Page],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_ELEMENTS_SCHEMA
        ],
    })
], ForexCashV2PageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_v2_forex-cash-v2_forex-cash-v2_module_ts.js.map