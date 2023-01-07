"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_fingerprint_fingerprint_module_ts"],{

/***/ 44290:
/*!*****************************************************************!*\
  !*** ./src/app/pages/fingerprint/fingerprint-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FingerprintPageRoutingModule": () => (/* binding */ FingerprintPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fingerprint_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fingerprint.page */ 41174);




const routes = [
    {
        path: '',
        component: _fingerprint_page__WEBPACK_IMPORTED_MODULE_0__.FingerprintPage
    }
];
let FingerprintPageRoutingModule = class FingerprintPageRoutingModule {
};
FingerprintPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FingerprintPageRoutingModule);



/***/ }),

/***/ 82006:
/*!*********************************************************!*\
  !*** ./src/app/pages/fingerprint/fingerprint.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FingerprintPageModule": () => (/* binding */ FingerprintPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fingerprint_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fingerprint-routing.module */ 44290);
/* harmony import */ var _fingerprint_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fingerprint.page */ 41174);







let FingerprintPageModule = class FingerprintPageModule {
};
FingerprintPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fingerprint_routing_module__WEBPACK_IMPORTED_MODULE_0__.FingerprintPageRoutingModule
        ],
        declarations: [_fingerprint_page__WEBPACK_IMPORTED_MODULE_1__.FingerprintPage]
    })
], FingerprintPageModule);



/***/ }),

/***/ 41174:
/*!*******************************************************!*\
  !*** ./src/app/pages/fingerprint/fingerprint.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FingerprintPage": () => (/* binding */ FingerprintPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _fingerprint_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fingerprint.page.html?ngResource */ 19972);
/* harmony import */ var _fingerprint_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fingerprint.page.scss?ngResource */ 78736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 52468);






let FingerprintPage = class FingerprintPage {
    constructor(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.currentUser = this.dataService.getCurrentUser();
    }
    back() {
        this.router.navigateByUrl('/login-landing');
    }
};
FingerprintPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
FingerprintPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-fingerprint',
        template: _fingerprint_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fingerprint_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FingerprintPage);



/***/ }),

/***/ 78736:
/*!********************************************************************!*\
  !*** ./src/app/pages/fingerprint/fingerprint.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "section {\n  position: relative;\n  padding: 10em;\n  background: url(\"/assets/images/finger-bg.png\");\n  color: #fff;\n  text-align: center;\n  height: 100%;\n}\n\n.otp-text {\n  color: #A2A0A8;\n  width: 240%;\n  margin-left: -60%;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 130px;\n  height: 130px;\n  margin-top: -40px;\n}\n\n.logo {\n  width: 150px;\n}\n\n.back-nav {\n  margin-top: -110px;\n  margin-left: -190% !important;\n  width: 60px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n  width: 290px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmdlcnByaW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLCtDQUFBO0VBRUEsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtFQUVBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImZpbmdlcnByaW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBlbTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Zpbmdlci1iZy5wbmcnKTtcclxuICAgIC8vIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5vdHAtdGV4dCB7XHJcbiAgICBjb2xvcjogI0EyQTBBODtcclxuICAgIHdpZHRoOiAyNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02MCU7XHJcbiAgfVxyXG4ubG9nby1pY29uIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgfVxyXG4ubG9nbyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAtMTUwcHg7XHJcbn1cclxuLmJhY2stbmF2IHtcclxuICAgIG1hcmdpbi10b3A6IC0xMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTkwJSAhaW1wb3J0YW50O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gIH1cclxuICBcclxuICAuYmFjay1uYXYtY29sb3Ige1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyOTBweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAtNjBweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gd2lkdGg6IDIwMCU7XHJcbiAgfVxyXG4gICJdfQ== */";

/***/ }),

/***/ 19972:
/*!********************************************************************!*\
  !*** ./src/app/pages/fingerprint/fingerprint.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n\r\n  <section>\r\n    <div class=\"back-nav\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n\r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\"><img src=\"assets/images/Demobank.svg\" class=\"w-100\"></div>\r\n    </div>\r\n\r\n    <div>\r\n      <ion-text>\r\n        <h4 style=\"color: #000000;font-weight: bold;\">Fingerprint</h4>\r\n        <p class=\"otp-text\">{{ currentUser?.firstName }} {{ currentUser?.lastName }} logs into his bank account using his fingerprint</p>\r\n        <!-- <h6>{{customerPhonenum}}</h6> -->\r\n      </ion-text>\r\n    </div>\r\n  </section>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_fingerprint_fingerprint_module_ts.js.map