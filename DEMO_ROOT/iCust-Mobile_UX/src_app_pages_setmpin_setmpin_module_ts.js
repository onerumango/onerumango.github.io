"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_setmpin_setmpin_module_ts"],{

/***/ 82302:
/*!*********************************************************!*\
  !*** ./src/app/pages/setmpin/setmpin-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetmpinPageRoutingModule": () => (/* binding */ SetmpinPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _setmpin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setmpin.page */ 76088);




const routes = [
    {
        path: '',
        component: _setmpin_page__WEBPACK_IMPORTED_MODULE_0__.SetmpinPage
    }
];
let SetmpinPageRoutingModule = class SetmpinPageRoutingModule {
};
SetmpinPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SetmpinPageRoutingModule);



/***/ }),

/***/ 90933:
/*!*************************************************!*\
  !*** ./src/app/pages/setmpin/setmpin.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetmpinPageModule": () => (/* binding */ SetmpinPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _setmpin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setmpin-routing.module */ 82302);
/* harmony import */ var _setmpin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setmpin.page */ 76088);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ 2981);








let SetmpinPageModule = class SetmpinPageModule {
};
SetmpinPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_7__.NgOtpInputModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _setmpin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SetmpinPageRoutingModule
        ],
        declarations: [_setmpin_page__WEBPACK_IMPORTED_MODULE_1__.SetmpinPage]
    })
], SetmpinPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_setmpin_setmpin_module_ts.js.map