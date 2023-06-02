"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_v2_onboarding-individual_onboarding-individual_module_ts"],{

/***/ 35751:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/v2/onboarding-individual/onboarding-individual-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingIndividualPageRoutingModule": () => (/* binding */ OnboardingIndividualPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _onboarding_individual_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding-individual.page */ 43398);




const routes = [
    {
        path: '',
        component: _onboarding_individual_page__WEBPACK_IMPORTED_MODULE_0__.OnboardingIndividualPage
    }
];
let OnboardingIndividualPageRoutingModule = class OnboardingIndividualPageRoutingModule {
};
OnboardingIndividualPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OnboardingIndividualPageRoutingModule);



/***/ }),

/***/ 64915:
/*!********************************************************************************!*\
  !*** ./src/app/pages/v2/onboarding-individual/onboarding-individual.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingIndividualPageModule": () => (/* binding */ OnboardingIndividualPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _onboarding_individual_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding-individual-routing.module */ 35751);
/* harmony import */ var _onboarding_individual_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding-individual.page */ 43398);







let OnboardingIndividualPageModule = class OnboardingIndividualPageModule {
};
OnboardingIndividualPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _onboarding_individual_routing_module__WEBPACK_IMPORTED_MODULE_0__.OnboardingIndividualPageRoutingModule
        ],
        declarations: [_onboarding_individual_page__WEBPACK_IMPORTED_MODULE_1__.OnboardingIndividualPage]
    })
], OnboardingIndividualPageModule);



/***/ }),

/***/ 43398:
/*!******************************************************************************!*\
  !*** ./src/app/pages/v2/onboarding-individual/onboarding-individual.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingIndividualPage": () => (/* binding */ OnboardingIndividualPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _onboarding_individual_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding-individual.page.html?ngResource */ 85077);
/* harmony import */ var _onboarding_individual_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding-individual.page.scss?ngResource */ 63537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let OnboardingIndividualPage = class OnboardingIndividualPage {
    constructor() { }
    ngOnInit() {
    }
    closeModal() {
    }
};
OnboardingIndividualPage.ctorParameters = () => [];
OnboardingIndividualPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-onboarding-individual',
        template: _onboarding_individual_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_onboarding_individual_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OnboardingIndividualPage);



/***/ }),

/***/ 63537:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/v2/onboarding-individual/onboarding-individual.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbmJvYXJkaW5nLWluZGl2aWR1YWwucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 85077:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/v2/onboarding-individual/onboarding-individual.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModal()\">\r\n        <ion-icon\r\n          slot=\"icon-only\"\r\n          name=\"chevron-back-outline\"\r\n          style=\"color: #004c97\"\r\n        ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Individual Customer Onboarding</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_v2_onboarding-individual_onboarding-individual_module_ts.js.map