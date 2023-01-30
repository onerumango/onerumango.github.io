"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_token-v2_token-v2_module_ts"],{

/***/ 96231:
/*!***********************************************************!*\
  !*** ./src/app/pages/token-v2/token-v2-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenV2PageRoutingModule": () => (/* binding */ TokenV2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _token_v2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-v2.page */ 68106);




const routes = [
    {
        path: '',
        component: _token_v2_page__WEBPACK_IMPORTED_MODULE_0__.TokenV2Page
    }
];
let TokenV2PageRoutingModule = class TokenV2PageRoutingModule {
};
TokenV2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TokenV2PageRoutingModule);



/***/ }),

/***/ 43218:
/*!***************************************************!*\
  !*** ./src/app/pages/token-v2/token-v2.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenV2PageModule": () => (/* binding */ TokenV2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _token_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-v2-routing.module */ 96231);
/* harmony import */ var _token_v2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-v2.page */ 68106);







let TokenV2PageModule = class TokenV2PageModule {
};
TokenV2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _token_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__.TokenV2PageRoutingModule
        ],
        declarations: [_token_v2_page__WEBPACK_IMPORTED_MODULE_1__.TokenV2Page]
    })
], TokenV2PageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_token-v2_token-v2_module_ts.js.map