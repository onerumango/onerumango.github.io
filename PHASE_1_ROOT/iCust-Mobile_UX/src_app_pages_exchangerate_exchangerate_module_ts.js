"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_exchangerate_exchangerate_module_ts"],{

/***/ 29778:
/*!*******************************************************************!*\
  !*** ./src/app/pages/exchangerate/exchangerate-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeratePageRoutingModule": () => (/* binding */ ExchangeratePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _exchangerate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchangerate.page */ 77769);




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

/***/ 64966:
/*!***********************************************************!*\
  !*** ./src/app/pages/exchangerate/exchangerate.module.ts ***!
  \***********************************************************/
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
/* harmony import */ var _exchangerate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchangerate-routing.module */ 29778);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-flag-picker */ 96801);
/* harmony import */ var _exchangerate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchangerate.page */ 77769);








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

/***/ 77769:
/*!*********************************************************!*\
  !*** ./src/app/pages/exchangerate/exchangerate.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeratePage": () => (/* binding */ ExchangeratePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _exchangerate_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchangerate.page.html?ngResource */ 85751);
/* harmony import */ var _exchangerate_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchangerate.page.scss?ngResource */ 52771);
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

/***/ 52771:
/*!**********************************************************************!*\
  !*** ./src/app/pages/exchangerate/exchangerate.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".forex_header {\n  padding-top: 6%;\n  padding-bottom: 6%;\n  font-weight: bold;\n  height: 190px;\n}\n\n.screenname {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\n::ng-deep .wider-popover-exchange {\n  --width: 100%;\n  --max-width: 100%;\n  --offset-x: 12px;\n}\n\n.backicon {\n  font-size: x-large;\n  color: #FFFFFF;\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 2%;\n}\n\n.text {\n  margin-left: 10%;\n  font-weight: 100;\n}\n\nion-toolbar {\n  --background: #456EFE;\n  --color: white;\n  --border-color: transparent;\n}\n\n.currency {\n  width: 297pt;\n  height: 55pt;\n  margin: 13pt 13pt 13pt 5pt;\n  border-radius: 20px;\n  position: relative;\n  background: #FFFFFF;\n}\n\n.name {\n  font-size: 16px;\n  font-family: \"semi-bold\";\n  margin-bottom: 3px;\n}\n\n.currency_row {\n  display: flex;\n  width: 100%;\n}\n\n.currency_row ion-select {\n  width: 100%;\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n\n.box {\n  font-weight: bold;\n  border-width: thin;\n  border-radius: 13px;\n  padding-left: 15px;\n  font-size: 30px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  width: 100%;\n  height: 70px;\n  padding-right: 20px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.box ion-datetime {\n  font-weight: bold;\n}\n\n.countrybox {\n  padding-top: 0%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.countrybox .box {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2hhbmdlcmF0ZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxHSVRIVUIlMjBSRVBPU0lUT1JZX1VJXFxpQ3VzdE1vYmlsZS12Mlxcc3JjXFxhcHBcXHBhZ2VzXFxleGNoYW5nZXJhdGVcXGV4Y2hhbmdlcmF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUlBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDRkY7O0FESUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNGSjs7QURNQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFGQUFBO0VBRUEsaURBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUNKRjs7QURNRTtFQUNFLGlCQUFBO0FDSko7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0xGOztBRFNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDUEoiLCJmaWxlIjoiZXhjaGFuZ2VyYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JleF9oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiA2JTtcclxuICBwYWRkaW5nLWJvdHRvbTogNiU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgaGVpZ2h0OiAxOTBweDtcclxufVxyXG5cclxuLnNjcmVlbm5hbWUge1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAud2lkZXItcG9wb3Zlci1leGNoYW5nZSB7XHJcbiAgLS13aWR0aDogMTAwJTtcclxuICAtLW1heC13aWR0aDogMTAwJTtcclxuICAtLW9mZnNldC14OiAxMnB4O1xyXG59XHJcblxyXG4uYmFja2ljb24ge1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICM0NTZFRkU7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY3VycmVuY3kge1xyXG4gIHdpZHRoOiAyOTdwdDtcclxuICBoZWlnaHQ6IDU1cHQ7XHJcbiAgbWFyZ2luOiAxM3B0IDEzcHQgMTNwdCA1cHQ7XHJcbiAgLy8gaGVpZ2h0OiA1MHB4O1xyXG4gIC8vIHdpZHRoOiA1MHB4O1xyXG4gIC8vIG1pbi13aWR0aDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5jdXJyZW5jeV9yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcblxyXG4gIGlvbi1kYXRldGltZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbi5jb3VudHJ5Ym94IHtcclxuICBwYWRkaW5nLXRvcDogMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuXHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIC5ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG59IiwiLmZvcmV4X2hlYWRlciB7XG4gIHBhZGRpbmctdG9wOiA2JTtcbiAgcGFkZGluZy1ib3R0b206IDYlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiAxOTBweDtcbn1cblxuLnNjcmVlbm5hbWUge1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAud2lkZXItcG9wb3Zlci1leGNoYW5nZSB7XG4gIC0td2lkdGg6IDEwMCU7XG4gIC0tbWF4LXdpZHRoOiAxMDAlO1xuICAtLW9mZnNldC14OiAxMnB4O1xufVxuXG4uYmFja2ljb24ge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLnRleHQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzQ1NkVGRTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmN1cnJlbmN5IHtcbiAgd2lkdGg6IDI5N3B0O1xuICBoZWlnaHQ6IDU1cHQ7XG4gIG1hcmdpbjogMTNwdCAxM3B0IDEzcHQgNXB0O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJzZW1pLWJvbGRcIjtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4uY3VycmVuY3lfcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY3VycmVuY3lfcm93IGlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uYm94IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCByZ2JhKDAsIDAsIDAsIDAuMTYwNzg0MzEzNyk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XG59XG4uYm94IGlvbi1kYXRldGltZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY291bnRyeWJveCB7XG4gIHBhZGRpbmctdG9wOiAwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG4uY291bnRyeWJveCAuYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59Il19 */";

/***/ }),

/***/ 85751:
/*!**********************************************************************!*\
  !*** ./src/app/pages/exchangerate/exchangerate.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon class=\"backicon\" (click)=\"goToDashboard()\" name=\"chevron-back\"></ion-icon>\r\n    <span class=\"screenname\">Exchange Rate</span><br>\r\n    <span class=\"text\">Latest Update</span>\r\n\r\n    <form [formGroup]=\"exchangeRateForm\">\r\n      <div class=\"countrybox\">\r\n        <ion-card class=\"box\">\r\n          <div class=\"currency_row\">\r\n            <ngx-flag-picker [selectedCountryCode]=\"selectedCountryCode\" [showFlags]=\"isShow\" [showLabels]=\"!isShow\"\r\n              [showArrow]=\"!isShow\">\r\n            </ngx-flag-picker>\r\n            <ion-select placeholder=\"Transaction Currency\"\r\n              formControlName=\"transactionCurrency\" #code interface=\"popover\"\r\n              [interfaceOptions]=\"{'cssClass': 'wider-popover-exchange'}\" (ionChange)=\"selectCurrencyCode(code.value)\">\r\n              <ion-select-option *ngFor=\"let user of currencies\" [value]=\"user.countryCode\">\r\n                {{user.currencyCode}}\r\n                <!-- {{user.currency + ' : ' + user.countryName}} -->\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n        </ion-card>\r\n      </div>\r\n    </form>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_exchangerate_exchangerate_module_ts.js.map