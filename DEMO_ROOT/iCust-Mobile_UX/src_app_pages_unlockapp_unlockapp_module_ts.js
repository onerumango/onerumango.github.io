"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_unlockapp_unlockapp_module_ts"],{

/***/ 97918:
/*!*************************************************************!*\
  !*** ./src/app/pages/unlockapp/unlockapp-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnlockappPageRoutingModule": () => (/* binding */ UnlockappPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _unlockapp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unlockapp.page */ 80581);




const routes = [
    {
        path: '',
        component: _unlockapp_page__WEBPACK_IMPORTED_MODULE_0__.UnlockappPage
    }
];
let UnlockappPageRoutingModule = class UnlockappPageRoutingModule {
};
UnlockappPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UnlockappPageRoutingModule);



/***/ }),

/***/ 12811:
/*!*****************************************************!*\
  !*** ./src/app/pages/unlockapp/unlockapp.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnlockappPageModule": () => (/* binding */ UnlockappPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _unlockapp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unlockapp-routing.module */ 97918);
/* harmony import */ var _unlockapp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unlockapp.page */ 80581);







let UnlockappPageModule = class UnlockappPageModule {
};
UnlockappPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _unlockapp_routing_module__WEBPACK_IMPORTED_MODULE_0__.UnlockappPageRoutingModule
        ],
        declarations: [_unlockapp_page__WEBPACK_IMPORTED_MODULE_1__.UnlockappPage]
    })
], UnlockappPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_unlockapp_unlockapp_module_ts.js.map