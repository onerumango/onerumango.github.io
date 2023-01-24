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
        if (this.router.getCurrentNavigation() != null) {
            this.routerData = this.router.getCurrentNavigation().extras.state;
            console.log(this.routerData);
        }
        this.currencyForm = this.fb.group({
            amount: [''],
            fromCurrency: [localStorage.getItem('Account_Currency')],
            toCurrency: [localStorage.getItem('Transaction_Currency')],
            exchangeRate: [''],
        });
        if (this.routerData) {
            const transType = this.routerData.data.transType;
            const exchangeRate = this.routerData.data.exchangeRate;
            this.currencyForm.get('amount').patchValue(this.routerData.data.amount);
            this.accountCurrencyFlag = this.routerData.data.fromCurrencyFlag;
            this.accountCurrencyFlag1 = this.routerData.data.toCurrencyFlag;
            this.currencyForm.get('fromCurrency').patchValue(this.routerData.data.fromCurrency);
            this.currencyForm.get('toCurrency').patchValue(this.routerData.data.toCurrency);
            this.currencyForm.get('exchangeRate').patchValue(exchangeRate);
        }
        // this.currency()
    }
    getExchangeRate() {
        this.api.getCurrencyExRate(this.currencyForm.get('fromCurrency').value, this.currencyForm.get('toCurrency').value)
            .subscribe(resp => {
            console.log(resp);
        });
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
    swapCurrency() {
        [this.accountCurrencyFlag, this.accountCurrencyFlag1] = [this.accountCurrencyFlag1, this.accountCurrencyFlag];
        const from = this.currencyForm.get('toCurrency').value;
        this.currencyForm.get('toCurrency').patchValue(this.currencyForm.get('fromCurrency').value);
        this.currencyForm.get('fromCurrency').patchValue(from);
    }
    onKeyUp(event) {
        console.log(event.target.value);
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

module.exports = "* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.currency_header {\n  padding-top: 4%;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: rgb(70, 111, 254);\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n}\n\nion-content form {\n  min-height: 76vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.box {\n  font-weight: 600;\n  border-width: thin;\n  padding: 0 21px !important;\n  width: 100%;\n  height: 55px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  border-radius: 13px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.inputCard {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  font-size: 16px;\n}\n\n.inputCard ion-grid {\n  padding: 0;\n}\n\n.inputCard ion-button {\n  height: 48px;\n  text-transform: capitalize;\n}\n\n.inputCard1 {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  font-size: 14px;\n}\n\n.inputCard1 ion-grid {\n  padding: 0;\n}\n\n.currency_row {\n  display: flex;\n  align-items: center;\n}\n\n.currency_row ion-input {\n  padding: 0 10px !important;\n  text-align: right;\n  color: #000;\n  font-weight: 700;\n  font-size: 18px;\n}\n\nion-card.box {\n  display: flex;\n  align-items: center;\n  margin: 0;\n}\n\n.icon {\n  margin: 0;\n  box-shadow: none;\n  display: grid;\n  place-items: center;\n  height: 100%;\n}\n\n.icon img {\n  opacity: 0.5;\n  height: 20pt;\n}\n\n.currency_flag {\n  transform: scale(1.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbmN5Y29udmVydGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsNkNBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUU7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUdKOztBQURFO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQUlKOztBQUZFO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0FBS0o7O0FBREk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBSVI7O0FBREU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBR0EsMEJBQUE7RUFJQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFGQUFBO0VBSUEsaURBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0VBR0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBUEo7O0FBU0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFOSjs7QUFRSTtFQUNJLFVBQUE7QUFOUjs7QUFRSTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtBQU5OOztBQVVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBUEo7O0FBU0k7RUFDSSxVQUFBO0FBUFI7O0FBWUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFVSTtFQUNJLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUlI7O0FBWUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBVEo7O0FBWUU7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBVEo7O0FBVUk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQVJOOztBQVlFO0VBQ0UscUJBQUE7QUFUSiIsImZpbGUiOiJjdXJyZW5jeWNvbnZlcnRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gICAgLyogQWRkICFpbXBvcnRhbnQgdG8gb3ZlcndyaXRlIGFsbCBlbGVtZW50cyAqL1xyXG4gIH1cclxuICAuY3VycmVuY3lfaGVhZGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiA0JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgLnRleHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XHJcbiAgfVxyXG5cclxuICBpb24tY29udGVudCB7XHJcbiAgICBmb3JtIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA3NnZoO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ib3gge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDIxcHggIWltcG9ydGFudDtcclxuICAgIC8vIEJsdXI6NnB0O1xyXG4gICAgLy8gYm94LXNoYWRvdzogMCAwIDVwdCAwLjVwdCAjRDNEM0QzO1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjRDNEM0QzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpXHJcbiAgICApO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAgIC8vIG9wYWNpdHk6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIFxyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICB9XHJcbiAgLmlucHV0Q2FyZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAvLyBvcGFjaXR5OiA1MCU7XHJcbiAgICBpb24tZ3JpZCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlucHV0Q2FyZDF7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAvLyBvcGFjaXR5OiA1MCU7XHJcbiAgICBpb24tZ3JpZCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9IFxyXG4gIFxyXG5cclxuICAuY3VycmVuY3lfcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1jYXJkLmJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmljb24ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgaW1nIHtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICBoZWlnaHQ6IDIwcHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY3VycmVuY3lfZmxhZyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuOCk7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 96415:
/*!********************************************************************************!*\
  !*** ./src/app/pages/currencyconverter/currencyconverter.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"currency_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous2()\"></ion-icon>\r\n    <span class=\"text\">Currency Converter</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div>\r\n    <form [formGroup]=\"currencyForm\">\r\n      <div class=\"inputCard1\">\r\n        <ion-item fill=\"outline\">\r\n          <ion-label position=\"floating\" class=\"t-20\">Amount*</ion-label>\r\n          <ion-input mode=\"ios\" value=\"\" placeholder=\"amount\" ngDefaultControl (ionChange)=\"onKeyUp($event)\"\r\n            formControlName=\"amount\">\r\n          </ion-input>\r\n        </ion-item>\r\n      </div>\r\n\r\n      \r\n      <div class=\"inputCard\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"7\">\r\n              <ion-label>From</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"5\">\r\n              <ion-label>To</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"5\">\r\n              <ion-card class=\"box\">\r\n                <div class=\"currency_row\">\r\n                  <ngx-flag-picker class=\"currency_flag\" [selectedCountryCode]=\"accountCurrencyFlag\"\r\n                    [showFlags]=\"isShow\" [showLabels]=\"!isShow\" [showArrow]=\"!isShow\">\r\n                  </ngx-flag-picker>\r\n                  <ion-input formControlName=\"fromCurrency\" placeholder=\"Account Currency\" readonly>\r\n                  </ion-input>\r\n                </div>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size=\"2\">\r\n              <ion-card class=\"icon\" (click)=\"swapCurrency()\">\r\n                <img src=\"assets/icon/exchange.png\" alt=\"\">\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size=\"5\">\r\n              <ion-card class=\"box\">\r\n                <div class=\"currency_row\">\r\n                  <ngx-flag-picker class=\"currency_flag\" [selectedCountryCode]=\"accountCurrencyFlag1\"\r\n                    [showFlags]=\"isShow1\" [showLabels]=\"!isShow1\" [showArrow]=\"!isShow1\">\r\n                  </ngx-flag-picker>\r\n                  <ion-input formControlName=\"toCurrency\" placeholder=\"Account Currency\" readonly>\r\n                  </ion-input>\r\n                </div>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n      <div class=\"inputCard1\">\r\n        <ion-item fill=\"outline\">\r\n          <ion-label position=\"floating\" class=\"t-20\">Exchange Rate*</ion-label>\r\n          <ion-input mode=\"ios\" value=\"\" placeholder=\"amount\" ngDefaultControl formControlName=\"exchangeRate\">\r\n          </ion-input>\r\n        </ion-item>\r\n      </div>\r\n      <div class=\"inputCard mt-auto\">\r\n        <ion-button expand=\"block\" shape=\"round\">continue</ion-button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_currencyconverter_currencyconverter_module_ts.js.map