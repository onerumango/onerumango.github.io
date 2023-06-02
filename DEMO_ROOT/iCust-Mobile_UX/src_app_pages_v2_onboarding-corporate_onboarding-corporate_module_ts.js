"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_v2_onboarding-corporate_onboarding-corporate_module_ts"],{

/***/ 65893:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/v2/onboarding-corporate/onboarding-corporate-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingCorporatePageRoutingModule": () => (/* binding */ OnboardingCorporatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _onboarding_corporate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding-corporate.page */ 42694);




const routes = [
    {
        path: '',
        component: _onboarding_corporate_page__WEBPACK_IMPORTED_MODULE_0__.OnboardingCorporatePage
    }
];
let OnboardingCorporatePageRoutingModule = class OnboardingCorporatePageRoutingModule {
};
OnboardingCorporatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OnboardingCorporatePageRoutingModule);



/***/ }),

/***/ 38275:
/*!******************************************************************************!*\
  !*** ./src/app/pages/v2/onboarding-corporate/onboarding-corporate.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingCorporatePageModule": () => (/* binding */ OnboardingCorporatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _onboarding_corporate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding-corporate-routing.module */ 65893);
/* harmony import */ var _onboarding_corporate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding-corporate.page */ 42694);







let OnboardingCorporatePageModule = class OnboardingCorporatePageModule {
};
OnboardingCorporatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _onboarding_corporate_routing_module__WEBPACK_IMPORTED_MODULE_0__.OnboardingCorporatePageRoutingModule
        ],
        declarations: [_onboarding_corporate_page__WEBPACK_IMPORTED_MODULE_1__.OnboardingCorporatePage]
    })
], OnboardingCorporatePageModule);



/***/ }),

/***/ 42694:
/*!****************************************************************************!*\
  !*** ./src/app/pages/v2/onboarding-corporate/onboarding-corporate.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingCorporatePage": () => (/* binding */ OnboardingCorporatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _onboarding_corporate_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding-corporate.page.html?ngResource */ 50347);
/* harmony import */ var _onboarding_corporate_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding-corporate.page.scss?ngResource */ 13529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let OnboardingCorporatePage = class OnboardingCorporatePage {
    constructor() { }
    ngOnInit() {
    }
};
OnboardingCorporatePage.ctorParameters = () => [];
OnboardingCorporatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-onboarding-corporate',
        template: _onboarding_corporate_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_onboarding_corporate_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OnboardingCorporatePage);



/***/ }),

/***/ 13529:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/v2/onboarding-corporate/onboarding-corporate.page.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbmJvYXJkaW5nLWNvcnBvcmF0ZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 50347:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/v2/onboarding-corporate/onboarding-corporate.page.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>onboarding-corporate</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_v2_onboarding-corporate_onboarding-corporate_module_ts.js.map