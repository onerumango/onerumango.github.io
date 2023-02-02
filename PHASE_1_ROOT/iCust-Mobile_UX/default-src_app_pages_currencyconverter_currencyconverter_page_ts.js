"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_currencyconverter_currencyconverter_page_ts"],{

/***/ 62802:
/*!*******************************************************************!*\
  !*** ./src/app/pages/currencyconverter/currencyconverter.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyconverterPage": () => (/* binding */ CurrencyconverterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _currencyconverter_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currencyconverter.page.html?ngResource */ 96415);
/* harmony import */ var _currencyconverter_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currencyconverter.page.scss?ngResource */ 63942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);









let CurrencyconverterPage = class CurrencyconverterPage {
    constructor(fb, router, api, modalController, loadingController, cdr) {
        this.fb = fb;
        this.router = router;
        this.api = api;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.cdr = cdr;
        this.isShow = true;
        this.isShow1 = true;
        this.currencies = [];
        this.selectedFromCurrency = '';
        this.selectedToCurrency = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        var _a, _b, _c, _d;
        this.currencies = JSON.parse(localStorage.getItem('COUNTRIES'));
        console.log(this.currencies);
        this.currencyForm = this.fb.group({
            amount: [""],
            fCurrency: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            tCurrency: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            exchangeRate: [""],
            total: [""],
        });
        console.log(this.model_data);
        const select_forex_countryCode = this.currencies.filter((i) => { var _a; return i.currencyCode == ((_a = this.model_data) === null || _a === void 0 ? void 0 : _a.fromCurrency); });
        const select_countryCode = this.currencies.filter((i) => { var _a; return i.currencyCode == ((_a = this.model_data) === null || _a === void 0 ? void 0 : _a.toCurrency); });
        this.selectedFromCurrency = select_forex_countryCode[0].countryCode.toLowerCase();
        this.selectedToCurrency = select_countryCode[0].countryCode.toLowerCase();
        this.currencyForm.patchValue(this.model_data);
        let fc = (_a = this.model_data) === null || _a === void 0 ? void 0 : _a.fromCurrency;
        let tc = (_b = this.model_data) === null || _b === void 0 ? void 0 : _b.toCurrency;
        (_c = this.currencyForm.get('fCurrency')) === null || _c === void 0 ? void 0 : _c.patchValue(fc);
        (_d = this.currencyForm.get('tCurrency')) === null || _d === void 0 ? void 0 : _d.patchValue(tc);
        this.currencyForm.valueChanges.subscribe(data => {
            console.log(data);
        });
        console.log(this.currencyForm.value);
        this.fetchRate();
        this.currencyForm.get('amount').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(1500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(res => res > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)())
            .subscribe(res => {
            this.getExChangeRate();
        });
        this.cdr.markForCheck();
    }
    compareWith(o1, o2) {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }
    selectFromCurrencyCode(e) {
        var _a;
        console.log(e);
        if (typeof e !== "undefined") {
            const filteredCurrency = (_a = this.currencies) === null || _a === void 0 ? void 0 : _a.filter((i) => i.currencyCode == e);
            this.selectedFromCurrency = filteredCurrency[0].countryCode.toLowerCase();
            this.cdr.markForCheck();
        }
        else {
        }
    }
    selectToCurrencyCode(e) {
        var _a;
        console.log(e);
        if (typeof e !== "undefined") {
            const filteredCurrency = (_a = this.currencies) === null || _a === void 0 ? void 0 : _a.filter((i) => i.currencyCode == e);
            this.selectedToCurrency = filteredCurrency[0].countryCode.toLowerCase();
            this.getExChangeRate();
            this.cdr.markForCheck();
        }
        else {
        }
    }
    getExChangeRate() {
        this.convert();
        this.fetchRate();
        // this.api.getNativeExchangeRate(fromCurr, toCurr).subscribe((res: any) => {
        //   const rate = res[0].sellRate;
        //   this.currencyForm.get('exchangeRate').patchValue(rate);
        //   let updatedAmount: number = (Number(this.currencyForm.get('amount')?.value) * Number(this.currencyForm.get('exchangeRate')?.value));
        //   if (!isNaN(Number(updatedAmount))) {
        //     console.log(Number(updatedAmount));
        //     this.currencyForm.get('total').patchValue(updatedAmount);
        //     this.cdr.markForCheck();
        //   }
        // });
        // this.updateTransAmount();
    }
    onKeyUp(event) {
        console.log(event.target.value);
    }
    convert() {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let fromCurrency = (_a = this.currencyForm.get('fCurrency')) === null || _a === void 0 ? void 0 : _a.value;
            let toCurrency = (_b = this.currencyForm.get('tCurrency')) === null || _b === void 0 ? void 0 : _b.value;
            let get_amount = Number((_c = this.currencyForm.get('amount')) === null || _c === void 0 ? void 0 : _c.value);
            if (fromCurrency != undefined && toCurrency != undefined && get_amount != undefined) {
                const loading = yield this.loadingController.create({
                    message: 'Fetching exchange rate'
                });
                loading.present();
                this.api.fetchRatesByExternal(fromCurrency, toCurrency, get_amount)
                    .subscribe(data => {
                    var _a;
                    console.log("Sync ", data);
                    if (data === null || data === void 0 ? void 0 : data.success) {
                        loading.dismiss();
                        this.currencyForm.get('exchangeRate').patchValue((_a = data === null || data === void 0 ? void 0 : data.info) === null || _a === void 0 ? void 0 : _a.rate);
                        this.currencyForm.get('total').patchValue(data === null || data === void 0 ? void 0 : data.result);
                    }
                    else {
                        loading.dismiss();
                    }
                }, err => {
                    loading.dismiss();
                });
            }
        });
    }
    fetchRate() {
        var _a;
        this.api.fetchRate((_a = this.currencyForm.get('tCurrency')) === null || _a === void 0 ? void 0 : _a.value)
            .subscribe(data => {
            var _a;
            console.log("Sync ", data);
            if (data === null || data === void 0 ? void 0 : data.success) {
                this.baseRate = data.rates[(_a = this.currencyForm.get('fCurrency')) === null || _a === void 0 ? void 0 : _a.value];
                this.cdr.markForCheck();
            }
        }, err => {
        });
    }
    swapCurrency() {
        var _a, _b, _c, _d, _e, _f;
        let fromCurrency = (_a = this.currencyForm.get('fCurrency')) === null || _a === void 0 ? void 0 : _a.value;
        let toCurrency = (_b = this.currencyForm.get('tCurrency')) === null || _b === void 0 ? void 0 : _b.value;
        (_c = this.currencyForm.get('fCurrency')) === null || _c === void 0 ? void 0 : _c.patchValue(toCurrency);
        (_d = this.currencyForm.get('tCurrency')) === null || _d === void 0 ? void 0 : _d.patchValue(fromCurrency);
        const filteredCurrencyFCurr = (_e = this.currencies) === null || _e === void 0 ? void 0 : _e.filter((i) => { var _a; return i.currencyCode == ((_a = this.currencyForm.get('fCurrency')) === null || _a === void 0 ? void 0 : _a.value); });
        this.selectedFromCurrency = filteredCurrencyFCurr[0].countryCode.toLowerCase();
        const filteredCurrencyToCurr = (_f = this.currencies) === null || _f === void 0 ? void 0 : _f.filter((i) => { var _a; return i.currencyCode == ((_a = this.currencyForm.get('tCurrency')) === null || _a === void 0 ? void 0 : _a.value); });
        this.selectedToCurrency = filteredCurrencyToCurr[0].countryCode.toLowerCase();
        this.getExChangeRate();
        this.cdr.markForCheck();
    }
    continue() {
        this.closeModel();
        this.router.navigate(['dashboard']);
    }
    closeModel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
};
CurrencyconverterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef }
];
CurrencyconverterPage.propDecorators = {
    model_data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
CurrencyconverterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
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

module.exports = "ion-toolbar {\n  --color: #004C97;\n}\n\n.currency_header {\n  padding-top: 4%;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: rgb(70, 111, 254);\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\n.row {\n  margin-right: -6px !important;\n  margin-left: -6px !important;\n  text-align: center;\n}\n\n.col-6 {\n  padding-right: 6px !important;\n  padding-left: 6px !important;\n}\n\nion-item.exchange::part(native) {\n  height: 75px;\n}\n\nion-button.back {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n\nion-button.next {\n  width: 250px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #FFFFFF;\n}\n\nion-content form {\n  min-height: 76vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.box {\n  font-weight: 600;\n  border-width: thin;\n  padding: 0 21px !important;\n  width: 100%;\n  height: 55px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  border-radius: 13px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.inputCard {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  font-size: 16px;\n}\n\n.inputCard ion-grid {\n  padding: 0;\n}\n\n.inputCard ion-button {\n  height: 48px;\n  text-transform: capitalize;\n}\n\n.inputCard1 {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  font-size: 14px;\n}\n\n.inputCard1 ion-grid {\n  padding: 0;\n}\n\n.currency_row {\n  display: flex;\n  align-items: center;\n}\n\n.currency_row ion-input {\n  padding: 0 10px !important;\n  text-align: right;\n  color: #000;\n  font-weight: 700;\n  font-size: 18px;\n}\n\nion-card.box {\n  display: flex;\n  align-items: center;\n  margin: 0;\n}\n\n.icon {\n  margin: 0;\n  box-shadow: none;\n  display: grid;\n  place-items: center;\n  height: 100%;\n}\n\n.icon img {\n  opacity: 0.5;\n  height: 20pt;\n}\n\n.currency_flag {\n  transform: scale(1.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbmN5Y29udmVydGVyLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdJVEhVQiUyMFJFUE9TSVRPUllfVUlcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXGN1cnJlbmN5Y29udmVydGVyXFxjdXJyZW5jeWNvbnZlcnRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNBRjs7QURHQTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBRElBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURLRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNGSjs7QURNQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFHQSwwQkFBQTtFQUlBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUZBQUE7RUFFQSxpREFBQTtFQUVBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFHQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUNaRjs7QURlQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1pGOztBRGVFO0VBQ0UsVUFBQTtBQ2JKOztBRGdCRTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtBQ2RKOztBRGtCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2ZGOztBRGtCRTtFQUNFLFVBQUE7QUNoQko7O0FEcUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDbEJGOztBRG9CRTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDbEJKOztBRHNCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNuQkY7O0FEc0JBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ25CRjs7QURxQkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ25CSjs7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRiIsImZpbGUiOiJjdXJyZW5jeWNvbnZlcnRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1jb2xvcjogIzAwNEM5NztcclxufVxyXG5cclxuLmN1cnJlbmN5X2hlYWRlciB7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbi50ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtNnB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IC02cHggIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uY29sLTYge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDZweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pdGVtLmV4Y2hhbmdlOjpwYXJ0KG5hdGl2ZSkge1xyXG4gIGhlaWdodDogNzVweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5iYWNrIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAtLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ubmV4dCB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MUEyRCwgIzAwNEM5Nyk7XHJcbiAgLS1jb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvcm0ge1xyXG4gICAgbWluLWhlaWdodDogNzZ2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxufVxyXG5cclxuLmJveCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZzogMCAyMXB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gQmx1cjo2cHQ7XHJcbiAgLy8gYm94LXNoYWRvdzogMCAwIDVwdCAwLjVwdCAjRDNEM0QzO1xyXG4gIC8vIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggI0QzRDNEMztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIC8vIG9wYWNpdHk6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbnB1dENhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgLy8gb3BhY2l0eTogNTAlO1xyXG4gIGlvbi1ncmlkIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0Q2FyZDEge1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgLy8gb3BhY2l0eTogNTAlO1xyXG4gIGlvbi1ncmlkIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmN1cnJlbmN5X3JvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpb24taW5wdXQge1xyXG4gICAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJkLmJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGltZyB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBoZWlnaHQ6IDIwcHQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY3VycmVuY3lfZmxhZyB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjgpO1xyXG59IiwiaW9uLXRvb2xiYXIge1xuICAtLWNvbG9yOiAjMDA0Qzk3O1xufVxuXG4uY3VycmVuY3lfaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDQlO1xuICBwYWRkaW5nLWJvdHRvbTogMyU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogcmdiKDcwLCAxMTEsIDI1NCk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG59XG5cbi5yb3cge1xuICBtYXJnaW4tcmlnaHQ6IC02cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IC02cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sLTYge1xuICBwYWRkaW5nLXJpZ2h0OiA2cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiA2cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0uZXhjaGFuZ2U6OnBhcnQobmF0aXZlKSB7XG4gIGhlaWdodDogNzVweDtcbn1cblxuaW9uLWJ1dHRvbi5iYWNrIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9uLm5leHQge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFBMkQsICMwMDRDOTcpO1xuICAtLWNvbG9yOiAjRkZGRkZGO1xufVxuXG5pb24tY29udGVudCBmb3JtIHtcbiAgbWluLWhlaWdodDogNzZ2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYm94IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICBwYWRkaW5nOiAwIDIxcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0IHJnYmEoMCwgMCwgMCwgMC4xNjA3ODQzMTM3KTtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcbn1cblxuLmlucHV0Q2FyZCB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5pbnB1dENhcmQgaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwO1xufVxuLmlucHV0Q2FyZCBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmlucHV0Q2FyZDEge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaW5wdXRDYXJkMSBpb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jdXJyZW5jeV9yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmN1cnJlbmN5X3JvdyBpb24taW5wdXQge1xuICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmlvbi1jYXJkLmJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cblxuLmljb24ge1xuICBtYXJnaW46IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pY29uIGltZyB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgaGVpZ2h0OiAyMHB0O1xufVxuXG4uY3VycmVuY3lfZmxhZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS44KTtcbn0iXX0= */";

/***/ }),

/***/ 96415:
/*!********************************************************************************!*\
  !*** ./src/app/pages/currencyconverter/currencyconverter.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"closeModel()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"bank\">Currency Converter</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <form [formGroup]=\"currencyForm\" *ngIf=\"currencyForm\">\r\n\r\n    <ion-item fill=\"outline\">\r\n      <ion-label position=\"floating\" class=\"t-20\">Amount</ion-label>\r\n      <ion-input mode=\"ios\" placeholder=\"amount\" ngDefaultControl (ionChange)=\"onKeyUp($event)\"\r\n        formControlName=\"amount\">\r\n      </ion-input>\r\n    </ion-item>\r\n\r\n    <div class=\"row justify-content-between my-3\">\r\n      <div class=\"col-5\">\r\n        <mat-form-field class=\"full-width my-2\" appearance=\"outline\" style=\"width: 100%;\">\r\n          <mat-label>FROM</mat-label>\r\n          <mat-select\r\n            (ngModelChange)=\"selectFromCurrencyCode($event)\"\r\n            formControlName=\"fCurrency\" id=\"fc\">\r\n            <mat-select-trigger class=\"selection-text\">\r\n              <ngx-flag-picker [selectedCountryCode]=\"selectedFromCurrency\" [showFlags]=\"isShow\" [showLabels]=\"!isShow\"\r\n                [showArrow]=\"!isShow\" slot=\"start\">\r\n              </ngx-flag-picker>\r\n              <span class=\"selection-text\">\r\n                {{ currencyForm.get('fCurrency')?.value }}\r\n              </span>\r\n            </mat-select-trigger>\r\n            <mat-option *ngFor=\"let currency of currencies\" [value]=\"currency.currencyCode\">\r\n              {{currency.currencyCode}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-2 align-self-center\" (click)=\"swapCurrency()\">\r\n        <img src=\"assets/icon/exchange.png\" style=\"width: 30px ; height:30px; opacity: 0.5;margin-top: -16px;\">\r\n      </div>\r\n      <div class=\"col-5\">\r\n        <mat-form-field class=\"full-width my-2\" appearance=\"outline\" style=\"width: 100%;\">\r\n          <mat-label>TO</mat-label>\r\n          <mat-select  formControlName=\"tCurrency\"\r\n            (ngModelChange)=\"selectToCurrencyCode($event)\" id=\"tc\">\r\n            <mat-select-trigger class=\"selection-text\">\r\n              <ngx-flag-picker [selectedCountryCode]=\"selectedToCurrency\" [showFlags]=\"isShow1\" [showLabels]=\"!isShow1\"\r\n                [showArrow]=\"!isShow1\" slot=\"start\">\r\n              </ngx-flag-picker>\r\n              <span class=\"selection-text\">\r\n                {{ currencyForm.get('tCurrency')?.value }}\r\n              </span>\r\n            </mat-select-trigger>\r\n\r\n            <mat-option *ngFor=\"let currency of currencies\" [value]=\"currency.currencyCode\">\r\n              {{currency.currencyCode}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <ion-item fill=\"outline\" class=\"exchange\">\r\n      <ion-label position=\"floating\" class=\"t-20\">Equivalent amount</ion-label>\r\n      <ion-input mode=\"ios\" placeholder=\"amount\" ngDefaultControl formControlName=\"total\"></ion-input>\r\n      <div slot=\"end\">\r\n        <h5 style=\"margin-top: 20px; color: #004C97;text-align: right;\">{{ currencyForm.get('exchangeRate')?.value }}\r\n        </h5>\r\n        <p class=\"suffix-ion-icon\" style=\"font-size: 10px;color: #B1B1B1;text-align: right;\">\r\n          1 {{ currencyForm.get('tCurrency')?.value }} = {{ baseRate }} {{ currencyForm.get('fCurrency')?.value }}\r\n        </p>\r\n      </div>\r\n    </ion-item>\r\n\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar style=\"background: transparent !important;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <ion-button shape=\"round\" class=\"next\" (click)=\"closeModel()\">Continue\r\n        </ion-button>\r\n      </div>\r\n      <!-- <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"back\" (click)=\"closeModel()\">Back</ion-button>\r\n      </div> -->\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_currencyconverter_currencyconverter_page_ts.js.map