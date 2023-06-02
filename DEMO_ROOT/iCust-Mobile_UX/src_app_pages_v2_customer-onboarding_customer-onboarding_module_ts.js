"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_v2_customer-onboarding_customer-onboarding_module_ts"],{

/***/ 81299:
/*!************************************************************************************!*\
  !*** ./src/app/pages/v2/customer-onboarding/customer-onboarding-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerOnboardingPageRoutingModule": () => (/* binding */ CustomerOnboardingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _customer_onboarding_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-onboarding.page */ 65645);




const routes = [
    {
        path: '',
        component: _customer_onboarding_page__WEBPACK_IMPORTED_MODULE_0__.CustomerOnboardingPage
    }
];
let CustomerOnboardingPageRoutingModule = class CustomerOnboardingPageRoutingModule {
};
CustomerOnboardingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomerOnboardingPageRoutingModule);



/***/ }),

/***/ 87867:
/*!****************************************************************************!*\
  !*** ./src/app/pages/v2/customer-onboarding/customer-onboarding.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerOnboardingPageModule": () => (/* binding */ CustomerOnboardingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _customer_onboarding_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-onboarding-routing.module */ 81299);
/* harmony import */ var _customer_onboarding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-onboarding.page */ 65645);







let CustomerOnboardingPageModule = class CustomerOnboardingPageModule {
};
CustomerOnboardingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _customer_onboarding_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerOnboardingPageRoutingModule
        ],
        declarations: [_customer_onboarding_page__WEBPACK_IMPORTED_MODULE_1__.CustomerOnboardingPage]
    })
], CustomerOnboardingPageModule);



/***/ }),

/***/ 65645:
/*!**************************************************************************!*\
  !*** ./src/app/pages/v2/customer-onboarding/customer-onboarding.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerOnboardingPage": () => (/* binding */ CustomerOnboardingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _customer_onboarding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-onboarding.page.html?ngResource */ 73998);
/* harmony import */ var _customer_onboarding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-onboarding.page.scss?ngResource */ 27343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _kyc_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kyc/store */ 10910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);







let CustomerOnboardingPage = class CustomerOnboardingPage {
    constructor(router, toastCtrl) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.cards = _kyc_store__WEBPACK_IMPORTED_MODULE_2__.Store.onboardingMethod;
    }
    ngOnInit() {
    }
    goBack() {
        this.router.navigate(['dashboard']);
    }
    openLink(page) {
        if (page.link) {
            this.router.navigate([`${page.link}`]);
        }
        else {
            this.showToast();
        }
    }
    showToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Service not Available',
                duration: 2000,
                position: 'bottom',
            });
            toast.present();
        });
    }
};
CustomerOnboardingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
CustomerOnboardingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-customer-onboarding',
        template: _customer_onboarding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_customer_onboarding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomerOnboardingPage);



/***/ }),

/***/ 27343:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/v2/customer-onboarding/customer-onboarding.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".card_branch {\n  height: 250px !important;\n  filter: drop-shadow(0pt 3pt 15pt rgba(0, 0, 0, 0.0705882353));\n  border-radius: 16px;\n}\n\n.card-content {\n  margin: 30px;\n  text-align: center;\n  transition: ease-in-out all 0.35s;\n}\n\n.card-content .card-logo {\n  margin: 0 auto;\n}\n\n.card-content p {\n  margin: 16px !important;\n  color: #000000;\n  opacity: 100%;\n  font-size: 18px;\n}\n\n.hover-top:hover {\n  background: #d6dbea;\n  transition: ease-in-out all 0.15s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLW9uYm9hcmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usd0JBQUE7RUFDQSw2REFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUNKOztBQUFJO0VBQ0UsY0FBQTtBQUVOOztBQUFJO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFFTjs7QUFFRTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7QUFDSiIsImZpbGUiOiJjdXN0b21lci1vbmJvYXJkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5jYXJkX2JyYW5jaCB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBwdCAzcHQgMTVwdCAjMDAwMDAwMTIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICB9XHJcbiAgLmNhcmQtY29udGVudCB7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCBhbGwgMC4zNXM7XHJcbiAgICAuY2FyZC1sb2dvIHtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBvcGFjaXR5OiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3Zlci10b3A6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Q2ZGJlYTtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IGFsbCAwLjE1cztcclxuICB9Il19 */";

/***/ }),

/***/ 73998:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/v2/customer-onboarding/customer-onboarding.page.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n      <ion-button >\r\n        <ion-icon\r\n          slot=\"icon-only\"\r\n          name=\"chevron-back-outline\"\r\n          style=\"color: #004c97\"\r\n        ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"bank\" class=\"font-size-16\"\r\n      >Select Customer Type</ion-title\r\n    >\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-card\r\n    class=\"card_branch hover-top\"\r\n    *ngFor=\"let card of cards; let i = index\"\r\n  >\r\n    <div class=\"card-content\" (click)=\"openLink(card)\">\r\n      <div class=\"card-logo\">\r\n        <img [src]=\"card?.white_bg_img\" [alt]=\"card?.title\" />\r\n      </div>\r\n      <p>{{card?.title}}</p>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_v2_customer-onboarding_customer-onboarding_module_ts.js.map