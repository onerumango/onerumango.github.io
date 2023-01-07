"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_currencyconverter_currencyconverter_module_ts"],{

/***/ 60811:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/currencyconverter/currencyconverter-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyconverterPageRoutingModule": () => (/* binding */ CurrencyconverterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _currencyconverter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currencyconverter.page */ 62802);




const routes = [
    {
        path: '',
        component: _currencyconverter_page__WEBPACK_IMPORTED_MODULE_0__.CurrencyconverterPage
    }
];
let CurrencyconverterPageRoutingModule = class CurrencyconverterPageRoutingModule {
};
CurrencyconverterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CurrencyconverterPageRoutingModule);



/***/ }),

/***/ 14750:
/*!*********************************************************************!*\
  !*** ./src/app/pages/currencyconverter/currencyconverter.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyconverterPageModule": () => (/* binding */ CurrencyconverterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _currencyconverter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currencyconverter-routing.module */ 60811);
/* harmony import */ var _currencyconverter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currencyconverter.page */ 62802);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-flag-picker */ 96801);








let CurrencyconverterPageModule = class CurrencyconverterPageModule {
};
CurrencyconverterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__.NgxFlagPickerModule,
            _currencyconverter_routing_module__WEBPACK_IMPORTED_MODULE_0__.CurrencyconverterPageRoutingModule
        ],
        declarations: [_currencyconverter_page__WEBPACK_IMPORTED_MODULE_1__.CurrencyconverterPage]
    })
], CurrencyconverterPageModule);



/***/ }),

/***/ 62802:
/*!*******************************************************************!*\
  !*** ./src/app/pages/currencyconverter/currencyconverter.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyconverterPage": () => (/* binding */ CurrencyconverterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _currencyconverter_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currencyconverter.page.html?ngResource */ 96415);
/* harmony import */ var _currencyconverter_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currencyconverter.page.scss?ngResource */ 63942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);







let CurrencyconverterPage = class CurrencyconverterPage {
    constructor(fb, router, api) {
        this.fb = fb;
        this.router = router;
        this.api = api;
        this.accountCurrencyFlag = 'in';
        this.isShow = true;
        this.accountCurrencyFlag1 = 'us';
        this.isShow1 = true;
        this.currjson = [];
    }
    ngOnInit() {
        this.currencyForm = this.fb.group({
            amount: [''],
            fromCurrency: [localStorage.getItem('Account_Currency')],
            toCurrency: [localStorage.getItem('Transaction_Currency')],
            exchangeRate: [''],
        });
        // this.currency()
    }
    amount(event) {
        this.currency();
    }
    currency() {
        this.api.getExchangeRate(this.currencyForm.value.fromCurrency).subscribe((item) => {
            this.currjson = item;
            var toCurrency = this.currencyForm.value.toCurrency;
            this.exchangeRate = this.currjson.rates[toCurrency];
            var finalExchange = this.exchangeRate * this.currencyForm.value.amount;
            this.currencyForm.get('exchangeRate').patchValue(finalExchange);
        });
    }
    previous2() {
        this.router.navigate(['forex-transaction']);
    }
};
CurrencyconverterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
CurrencyconverterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-currencyconverter',
        template: _currencyconverter_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_currencyconverter_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CurrencyconverterPage);



/***/ }),

/***/ 63942:
/*!********************************************************************************!*\
  !*** ./src/app/pages/currencyconverter/currencyconverter.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.currency_header {\n  padding-top: 4%;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: rgb(70, 111, 254);\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n}\n\nion-content form {\n  min-height: 76vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.box {\n  font-weight: 600;\n  border-width: thin;\n  padding: 0 21px !important;\n  width: 100%;\n  height: 55px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  border-radius: 13px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.inputCard {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.inputCard ion-grid {\n  padding: 0;\n}\n\n.currency_row {\n  display: flex;\n  align-items: center;\n}\n\n.currency_row ion-input {\n  padding: 0 10px !important;\n  text-align: right;\n}\n\nion-card.box {\n  display: flex;\n  align-items: center;\n  margin: 0;\n}\n\n.icon {\n  margin: 0;\n  box-shadow: none;\n  display: grid;\n  place-items: center;\n  height: 100%;\n}\n\n.icon img {\n  opacity: 0.5;\n  height: 20pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbmN5Y29udmVydGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsNkNBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUU7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUdKOztBQURFO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQUlKOztBQUZFO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0FBS0o7O0FBREk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBSVI7O0FBREU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBR0EsMEJBQUE7RUFJQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFGQUFBO0VBSUEsaURBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0VBR0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBUEo7O0FBU0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQU5KOztBQVFJO0VBQ0ksVUFBQTtBQU5SOztBQVVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBUEo7O0FBUUk7RUFDSSwwQkFBQTtFQUNBLGlCQUFBO0FBTlI7O0FBVUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBUEo7O0FBVUU7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBUEo7O0FBUUk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQU5OIiwiZmlsZSI6ImN1cnJlbmN5Y29udmVydGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgICAvKiBBZGQgIWltcG9ydGFudCB0byBvdmVyd3JpdGUgYWxsIGVsZW1lbnRzICovXHJcbiAgfVxyXG4gIC5jdXJyZW5jeV9oZWFkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDQlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBjb2xvcjogcmdiKDcwLCAxMTEsIDI1NCk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICAudGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI2QzZDNkMztcclxuICB9XHJcblxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIGZvcm0ge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDc2dmg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICB9XHJcbiAgLmJveCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmc6IDAgMjFweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gQmx1cjo2cHQ7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwIDAgNXB0IDAuNXB0ICNEM0QzRDM7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICNEM0QzRDM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSlcclxuICAgICk7XHJcbiAgICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gICAgLy8gb3BhY2l0eTogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgXHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gIH1cclxuICAuaW5wdXRDYXJkIHtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAgIC8vIG9wYWNpdHk6IDUwJTtcclxuICAgIGlvbi1ncmlkIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmN1cnJlbmN5X3JvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tY2FyZC5ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29uIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGltZyB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgaGVpZ2h0OiAyMHB0O1xyXG4gICAgfVxyXG4gIH0iXX0= */";

/***/ }),

/***/ 96415:
/*!********************************************************************************!*\
  !*** ./src/app/pages/currencyconverter/currencyconverter.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"currency_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous2()\"></ion-icon>\r\n    <span class=\"text\">Currency Converter</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div>\r\n    <form [formGroup]=\"currencyForm\">\r\n      <div class=\"inputCard\">\r\n        <ion-label>Amount*</ion-label>\r\n        <ion-input\r\n            class=\"box\"\r\n            placeholder=\"Amount\"\r\n            formControlName=\"amount\"\r\n            ngDefaultControl\r\n            (keyup)=\"amount($event)\"\r\n         >   \r\n        </ion-input>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"7\">\r\n              <ion-label>From</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"5\">\r\n              <ion-label>To</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"5\">\r\n              <ion-card class=\"box\">\r\n                <div class=\"currency_row\">\r\n                  <ngx-flag-picker\r\n                    [selectedCountryCode]=\"accountCurrencyFlag\"\r\n                    [showFlags]=\"isShow\"\r\n                    [showLabels]=\"!isShow\"\r\n                    [showArrow]=\"!isShow\"\r\n                  >\r\n                  </ngx-flag-picker>\r\n                  <ion-input\r\n                  formControlName=\"fromCurrency\"\r\n                    placeholder=\"Account Currency\"\r\n                    readonly\r\n                  >\r\n                  </ion-input>\r\n                </div>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size=\"2\">\r\n              <ion-card class=\"icon\">\r\n                <img src=\"assets/icon/exchange.png\" alt=\"\">\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size=\"5\">\r\n              <ion-card class=\"box\">\r\n                <div class=\"currency_row\">\r\n                  <ngx-flag-picker\r\n                    [selectedCountryCode]=\"accountCurrencyFlag1\"\r\n                    [showFlags]=\"isShow1\"\r\n                    [showLabels]=\"!isShow1\"\r\n                    [showArrow]=\"!isShow1\"\r\n                  >\r\n                  </ngx-flag-picker>\r\n                  <ion-input\r\n                  formControlName=\"toCurrency\"\r\n                    placeholder=\"Account Currency\"\r\n                    readonly\r\n                  >\r\n                  </ion-input>\r\n                </div>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label>Exchange Rate*</ion-label>\r\n        <ion-input\r\n            class=\"box\"\r\n            placeholder=\"Exchange Rate\"\r\n            formControlName=\"exchangeRate\"\r\n            ngDefaultControl\r\n         >   \r\n        </ion-input>\r\n      </div>\r\n      <div class=\"inputCard mt-auto\">\r\n        <ion-button expand=\"block\" shape=\"round\"\r\n          >continue</ion-button\r\n        >\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_currencyconverter_currencyconverter_module_ts.js.map