"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_currencyconverter_currencyconverter_module_ts"],{

/***/ 60811:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/currencyconverter/currencyconverter-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyconverterPageRoutingModule": () => (/* binding */ CurrencyconverterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _currencyconverter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currencyconverter.page */ 62802);




const routes = [
    {
        path: '',
        component: _currencyconverter_page__WEBPACK_IMPORTED_MODULE_0__.CurrencyconverterPage
    }
];
let CurrencyconverterPageRoutingModule = class CurrencyconverterPageRoutingModule {
};
CurrencyconverterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CurrencyconverterPageRoutingModule);



/***/ }),

/***/ 14750:
/*!*********************************************************************!*\
  !*** ./src/app/pages/currencyconverter/currencyconverter.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyconverterPageModule": () => (/* binding */ CurrencyconverterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _currencyconverter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currencyconverter-routing.module */ 60811);
/* harmony import */ var _currencyconverter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currencyconverter.page */ 62802);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-flag-picker */ 96801);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);









let CurrencyconverterPageModule = class CurrencyconverterPageModule {
};
CurrencyconverterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_8__.NgxFlagPickerModule,
            _currencyconverter_routing_module__WEBPACK_IMPORTED_MODULE_0__.CurrencyconverterPageRoutingModule,
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__.SharedMaterialModule
        ],
        declarations: [_currencyconverter_page__WEBPACK_IMPORTED_MODULE_1__.CurrencyconverterPage],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA
        ],
    })
], CurrencyconverterPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_currencyconverter_currencyconverter_module_ts.js.map