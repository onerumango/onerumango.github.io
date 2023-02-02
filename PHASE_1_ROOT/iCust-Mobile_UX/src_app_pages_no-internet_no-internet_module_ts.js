"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_no-internet_no-internet_module_ts"],{

/***/ 54754:
/*!*****************************************************************!*\
  !*** ./src/app/pages/no-internet/no-internet-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoInternetPageRoutingModule": () => (/* binding */ NoInternetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _no_internet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-internet.page */ 8371);




const routes = [
    {
        path: '',
        component: _no_internet_page__WEBPACK_IMPORTED_MODULE_0__.NoInternetPage
    }
];
let NoInternetPageRoutingModule = class NoInternetPageRoutingModule {
};
NoInternetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NoInternetPageRoutingModule);



/***/ }),

/***/ 62692:
/*!*********************************************************!*\
  !*** ./src/app/pages/no-internet/no-internet.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoInternetPageModule": () => (/* binding */ NoInternetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _no_internet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-internet-routing.module */ 54754);
/* harmony import */ var _no_internet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-internet.page */ 8371);







let NoInternetPageModule = class NoInternetPageModule {
};
NoInternetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _no_internet_routing_module__WEBPACK_IMPORTED_MODULE_0__.NoInternetPageRoutingModule
        ],
        declarations: [_no_internet_page__WEBPACK_IMPORTED_MODULE_1__.NoInternetPage]
    })
], NoInternetPageModule);



/***/ }),

/***/ 8371:
/*!*******************************************************!*\
  !*** ./src/app/pages/no-internet/no-internet.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoInternetPage": () => (/* binding */ NoInternetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _no_internet_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-internet.page.html?ngResource */ 94162);
/* harmony import */ var _no_internet_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-internet.page.scss?ngResource */ 72000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let NoInternetPage = class NoInternetPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    done() {
        this.router.navigate(['login-landing'], { replaceUrl: true });
    }
};
NoInternetPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
NoInternetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-no-internet',
        template: _no_internet_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_no_internet_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NoInternetPage);



/***/ }),

/***/ 72000:
/*!********************************************************************!*\
  !*** ./src/app/pages/no-internet/no-internet.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".alert-icon-box-wrapper {\n  text-align: center;\n  margin-top: 50% !important;\n}\n\n.danger {\n  color: #C90303;\n  text-align: center;\n}\n\n.title {\n  color: #818181;\n  text-align: center;\n  font-size: 15px;\n}\n\n.bottom-btn {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vLWludGVybmV0LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdJVEhVQiUyMFJFUE9TSVRPUllfVUlcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXG5vLWludGVybmV0XFxuby1pbnRlcm5ldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6Im5vLWludGVybmV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydC1pY29uLWJveC13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjQzkwMzAzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5ib3R0b20tYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbjogMjVweDtcclxufSIsIi5hbGVydC1pY29uLWJveC13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MCUgIWltcG9ydGFudDtcbn1cblxuLmRhbmdlciB7XG4gIGNvbG9yOiAjQzkwMzAzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiAjODE4MTgxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmJvdHRvbS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogMjVweDtcbn0iXX0= */";

/***/ }),

/***/ 94162:
/*!********************************************************************!*\
  !*** ./src/app/pages/no-internet/no-internet.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"ion-padding\">\r\n  <div class=\"container\">\r\n    <div class=\"alert-icon-box-wrapper my-5\">\r\n      <img src=\"assets/images/1226.svg\" alt=\"noimage\">\r\n      <h3 class=\"danger\">Alert</h3>\r\n      <p class=\"title\">There seems to be a low network coverage area. Please try again later.</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"bottom-btn\">\r\n    <ion-button expand=\"block\" shape=\"round\" (click)=\"done()\">Done</ion-button>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_no-internet_no-internet_module_ts.js.map