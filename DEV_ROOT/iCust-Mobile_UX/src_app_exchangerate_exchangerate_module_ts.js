"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_exchangerate_exchangerate_module_ts"],{

/***/ 6218:
/*!*************************************************************!*\
  !*** ./src/app/exchangerate/exchangerate-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeratePageRoutingModule": () => (/* binding */ ExchangeratePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _exchangerate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchangerate.page */ 6605);




const routes = [
    {
        path: '',
        component: _exchangerate_page__WEBPACK_IMPORTED_MODULE_0__.ExchangeratePage
    }
];
let ExchangeratePageRoutingModule = class ExchangeratePageRoutingModule {
};
ExchangeratePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExchangeratePageRoutingModule);



/***/ }),

/***/ 37637:
/*!*****************************************************!*\
  !*** ./src/app/exchangerate/exchangerate.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeratePageModule": () => (/* binding */ ExchangeratePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _exchangerate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchangerate-routing.module */ 6218);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-flag-picker */ 96801);
/* harmony import */ var _exchangerate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchangerate.page */ 6605);








let ExchangeratePageModule = class ExchangeratePageModule {
};
ExchangeratePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__.NgxFlagPickerModule,
            _exchangerate_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExchangeratePageRoutingModule
        ],
        declarations: [_exchangerate_page__WEBPACK_IMPORTED_MODULE_1__.ExchangeratePage]
    })
], ExchangeratePageModule);



/***/ }),

/***/ 6605:
/*!***************************************************!*\
  !*** ./src/app/exchangerate/exchangerate.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeratePage": () => (/* binding */ ExchangeratePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _exchangerate_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchangerate.page.html?ngResource */ 81157);
/* harmony import */ var _exchangerate_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchangerate.page.scss?ngResource */ 76915);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);







let ExchangeratePage = class ExchangeratePage {
    constructor(router, api, fb) {
        this.router = router;
        this.api = api;
        this.fb = fb;
        this.selectedCountryCode = 'in';
        this.isShow = true;
    }
    ngOnInit() {
        this.getCountrynameValues();
        this.exchangeRateForm = this.fb.group({
            transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    goToDashboard() {
        this.router.navigate(['dashboard']);
    }
    getCountrynameValues() {
        console.log("All currency");
        this.api.getCurrencyValues().subscribe((allCurrencyValues) => {
            this.currencies = allCurrencyValues;
            console.log(this.currencies);
        });
    }
    selectCurrencyCode(currency) {
        var _a;
        console.log(currency.value);
        this.currencyData =
            this.currencies && this.currencies.find((x) => x.countryCode == currency);
        this.selectedCountryCode =
            this.currencyData && ((_a = this.currencyData) === null || _a === void 0 ? void 0 : _a.countryCode.toLowerCase());
    }
    changeSelectedCountryCode(value) {
        // this.selectedCountryCode = value;
    }
};
ExchangeratePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
ExchangeratePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-exchangerate',
        template: _exchangerate_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_exchangerate_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExchangeratePage);



/***/ }),

/***/ 76915:
/*!****************************************************************!*\
  !*** ./src/app/exchangerate/exchangerate.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".forex_header {\n  padding-top: 6%;\n  padding-bottom: 6%;\n  font-weight: bold;\n  height: 190px;\n}\n\n.screenname {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\n.backicon {\n  font-size: x-large;\n  color: #FFFFFF;\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 2%;\n}\n\n.text {\n  margin-left: 10%;\n  font-weight: 100;\n}\n\nion-toolbar {\n  --background: #456EFE;\n  --color: white;\n  --border-color: transparent;\n}\n\n.currency {\n  width: 297pt;\n  height: 55pt;\n  margin: 13pt 13pt 13pt 5pt;\n  border-radius: 20px;\n  position: relative;\n  background: #FFFFFF;\n}\n\n.name {\n  font-size: 16px;\n  font-family: \"semi-bold\";\n  margin-bottom: 3px;\n}\n\n.currency_row {\n  display: flex;\n  width: 100%;\n}\n\n.currency_row ion-select {\n  width: 100%;\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n\n.box {\n  font-weight: bold;\n  border-width: thin;\n  border-radius: 13px;\n  padding-left: 15px;\n  font-size: 30px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  width: 100%;\n  height: 70px;\n  padding-right: 20px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.box ion-datetime {\n  font-weight: bold;\n}\n\n.countrybox {\n  padding-top: 0%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.countrybox .box {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2hhbmdlcmF0ZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdEh1YiUyMFJlcG9zaXRvcnklMjBvbGRcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxcZXhjaGFuZ2VyYXRlXFxleGNoYW5nZXJhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDSUo7O0FERkU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQ0tKOztBREhBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUlBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QURGQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDS0Y7O0FESkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNNSjs7QURIQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFGQUFBO0VBSUEsaURBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUNHRjs7QURGRTtFQUNFLGlCQUFBO0FDSUo7O0FEREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0lGOztBRERFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDR0oiLCJmaWxlIjoiZXhjaGFuZ2VyYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JleF9oZWFkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDYlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gIH1cclxuICAuc2NyZWVubmFtZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICB9XHJcbi5iYWNraWNvbiB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgfVxyXG4gIC50ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gIH1cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0NTZFRkU7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uY3VycmVuY3kge1xyXG4gIHdpZHRoOiAyOTdwdDtcclxuICBoZWlnaHQ6IDU1cHQ7XHJcbiAgbWFyZ2luOiAxM3B0IDEzcHQgMTNwdCA1cHQ7XHJcbiAgLy8gaGVpZ2h0OiA1MHB4O1xyXG4gIC8vIHdpZHRoOiA1MHB4O1xyXG4gIC8vIG1pbi13aWR0aDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG59XHJcbi5uYW1lIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG4uY3VycmVuY3lfcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbn1cclxuLmJveCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSlcclxuICApO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICBpb24tZGF0ZXRpbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcbi5jb3VudHJ5Ym94e1xyXG4gIHBhZGRpbmctdG9wOiAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIC8vIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAuYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIH1cclxufSIsIi5mb3JleF9oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogNiU7XG4gIHBhZGRpbmctYm90dG9tOiA2JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMTkwcHg7XG59XG5cbi5zY3JlZW5uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xufVxuXG4uYmFja2ljb24ge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLnRleHQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzQ1NkVGRTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmN1cnJlbmN5IHtcbiAgd2lkdGg6IDI5N3B0O1xuICBoZWlnaHQ6IDU1cHQ7XG4gIG1hcmdpbjogMTNwdCAxM3B0IDEzcHQgNXB0O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJzZW1pLWJvbGRcIjtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4uY3VycmVuY3lfcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY3VycmVuY3lfcm93IGlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uYm94IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCByZ2JhKDAsIDAsIDAsIDAuMTYwNzg0MzEzNyk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XG59XG4uYm94IGlvbi1kYXRldGltZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY291bnRyeWJveCB7XG4gIHBhZGRpbmctdG9wOiAwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG4uY291bnRyeWJveCAuYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59Il19 */";

/***/ }),

/***/ 81157:
/*!****************************************************************!*\
  !*** ./src/app/exchangerate/exchangerate.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon  class=\"backicon\" (click)=\"goToDashboard()\" name=\"chevron-back\"></ion-icon>\r\n    <span class=\"screenname\">Exchange Rate</span><br>\r\n    <span class=\"text\">Latest Update</span>\r\n\r\n    <form [formGroup]=\"exchangeRateForm\">\r\n        <div class=\"countrybox\">\r\n        <ion-card class=\"box\">\r\n       <div class=\"currency_row\">\r\n        <ngx-flag-picker\r\n              [selectedCountryCode]=\"selectedCountryCode\"\r\n              [showFlags]=\"isShow\"\r\n              [showLabels]=\"!isShow\"\r\n              [showArrow]=\"!isShow\"\r\n            >\r\n            </ngx-flag-picker>\r\n            <ion-select\r\n            placeholder=\"Transaction Currency\"\r\n              [compareWith]=\"compareWith\"\r\n              formControlName=\"transactionCurrency\"\r\n              #code\r\n              (ionChange)=\"selectCurrencyCode(code.value)\"\r\n            >\r\n              <ion-select-option \r\n              *ngFor=\"let user of currencies\" \r\n              [value]=\"user.countryCode\"\r\n              >\r\n                {{user.currencyCode}}\r\n                <!-- {{user.currency + ' : ' + user.countryName}} -->\r\n              </ion-select-option>\r\n            </ion-select>\r\n        </div>\r\n        </ion-card>\r\n        </div>\r\n  </form>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_exchangerate_exchangerate_module_ts.js.map