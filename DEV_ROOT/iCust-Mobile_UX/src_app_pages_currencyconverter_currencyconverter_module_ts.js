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

module.exports = "* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.currency_header {\n  padding-top: 4%;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: rgb(70, 111, 254);\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n}\n\nion-content form {\n  min-height: 76vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.box {\n  font-weight: 600;\n  border-width: thin;\n  padding: 0 21px !important;\n  width: 100%;\n  height: 55px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  border-radius: 13px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.inputCard {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.inputCard ion-grid {\n  padding: 0;\n}\n\n.currency_row {\n  display: flex;\n  align-items: center;\n}\n\n.currency_row ion-input {\n  padding: 0 10px !important;\n  text-align: right;\n}\n\nion-card.box {\n  display: flex;\n  align-items: center;\n  margin: 0;\n}\n\n.icon {\n  margin: 0;\n  box-shadow: none;\n  display: grid;\n  place-items: center;\n  height: 100%;\n}\n\n.icon img {\n  opacity: 0.5;\n  height: 20pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbmN5Y29udmVydGVyLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdEh1YiUyMFJlcG9zaXRvcnklMjBvbGRcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXGN1cnJlbmN5Y29udmVydGVyXFxjdXJyZW5jeWNvbnZlcnRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLDZDQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFFO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNHSjs7QURERTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNJSjs7QURGRTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtBQ0tKOztBRERJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0lSOztBRERFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUdBLDBCQUFBO0VBSUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxxRkFBQTtFQUlBLGlEQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUdBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQ1BKOztBRFNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURRSTtFQUNJLFVBQUE7QUNOUjs7QURVRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ1BKOztBRFFJO0VBQ0ksMEJBQUE7RUFDQSxpQkFBQTtBQ05SOztBRFVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ1BKOztBRFVFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1BKOztBRFFJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNOTiIsImZpbGUiOiJjdXJyZW5jeWNvbnZlcnRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gICAgLyogQWRkICFpbXBvcnRhbnQgdG8gb3ZlcndyaXRlIGFsbCBlbGVtZW50cyAqL1xyXG4gIH1cclxuICAuY3VycmVuY3lfaGVhZGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiA0JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgLnRleHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XHJcbiAgfVxyXG5cclxuICBpb24tY29udGVudCB7XHJcbiAgICBmb3JtIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA3NnZoO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ib3gge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDIxcHggIWltcG9ydGFudDtcclxuICAgIC8vIEJsdXI6NnB0O1xyXG4gICAgLy8gYm94LXNoYWRvdzogMCAwIDVwdCAwLjVwdCAjRDNEM0QzO1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjRDNEM0QzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpXHJcbiAgICApO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAgIC8vIG9wYWNpdHk6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIFxyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICB9XHJcbiAgLmlucHV0Q2FyZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgICAvLyBvcGFjaXR5OiA1MCU7XHJcbiAgICBpb24tZ3JpZCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jdXJyZW5jeV9yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQuYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAuaWNvbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBpbWcge1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgIGhlaWdodDogMjBwdDtcclxuICAgIH1cclxuICB9IiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xuICAvKiBBZGQgIWltcG9ydGFudCB0byBvdmVyd3JpdGUgYWxsIGVsZW1lbnRzICovXG59XG5cbi5jdXJyZW5jeV9oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogNCU7XG4gIHBhZGRpbmctYm90dG9tOiAzJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi50ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI2QzZDNkMztcbn1cblxuaW9uLWNvbnRlbnQgZm9ybSB7XG4gIG1pbi1oZWlnaHQ6IDc2dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJveCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgcGFkZGluZzogMCAyMXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCByZ2JhKDAsIDAsIDAsIDAuMTYwNzg0MzEzNyk7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XG59XG5cbi5pbnB1dENhcmQge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xufVxuLmlucHV0Q2FyZCBpb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jdXJyZW5jeV9yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmN1cnJlbmN5X3JvdyBpb24taW5wdXQge1xuICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmlvbi1jYXJkLmJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cblxuLmljb24ge1xuICBtYXJnaW46IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pY29uIGltZyB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgaGVpZ2h0OiAyMHB0O1xufSJdfQ== */";

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