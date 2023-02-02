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

module.exports = "ion-toolbar {\n  --color: #004C97;\n}\n\n.currency_header {\n  padding-top: 4%;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: rgb(70, 111, 254);\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\n.row {\n  margin-right: -6px !important;\n  margin-left: -6px !important;\n  text-align: center;\n}\n\n.col-6 {\n  padding-right: 6px !important;\n  padding-left: 6px !important;\n}\n\nion-item.exchange::part(native) {\n  height: 75px;\n}\n\nion-button.back {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n\nion-button.next {\n  width: 250px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #FFFFFF;\n}\n\nion-content form {\n  min-height: 76vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.box {\n  font-weight: 600;\n  border-width: thin;\n  padding: 0 21px !important;\n  width: 100%;\n  height: 55px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  border-radius: 13px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.inputCard {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  font-size: 16px;\n}\n\n.inputCard ion-grid {\n  padding: 0;\n}\n\n.inputCard ion-button {\n  height: 48px;\n  text-transform: capitalize;\n}\n\n.inputCard1 {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  font-size: 14px;\n}\n\n.inputCard1 ion-grid {\n  padding: 0;\n}\n\n.currency_row {\n  display: flex;\n  align-items: center;\n}\n\n.currency_row ion-input {\n  padding: 0 10px !important;\n  text-align: right;\n  color: #000;\n  font-weight: 700;\n  font-size: 18px;\n}\n\nion-card.box {\n  display: flex;\n  align-items: center;\n  margin: 0;\n}\n\n.icon {\n  margin: 0;\n  box-shadow: none;\n  display: grid;\n  place-items: center;\n  height: 100%;\n}\n\n.icon img {\n  opacity: 0.5;\n  height: 20pt;\n}\n\n.currency_flag {\n  transform: scale(1.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbmN5Y29udmVydGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBSUE7RUFDRSw2QkFBQTtFQUNBLDRCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0RBQUE7RUFDQSxnQkFBQTtBQURGOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUZKOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUdBLDBCQUFBO0VBSUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxxRkFBQTtFQUVBLGlEQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUdBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQVpGOztBQWVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBWkY7O0FBZUU7RUFDRSxVQUFBO0FBYko7O0FBZ0JFO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0FBZEo7O0FBa0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBZkY7O0FBa0JFO0VBQ0UsVUFBQTtBQWhCSjs7QUFxQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFsQkY7O0FBb0JFO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFsQko7O0FBc0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQW5CRjs7QUFzQkE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBbkJGOztBQXFCRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBbkJKOztBQXVCQTtFQUNFLHFCQUFBO0FBcEJGIiwiZmlsZSI6ImN1cnJlbmN5Y29udmVydGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWNvbG9yOiAjMDA0Qzk3O1xyXG59XHJcblxyXG4uY3VycmVuY3lfaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuLnRleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogcmdiKDcwLCAxMTEsIDI1NCk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBtYXJnaW4tcmlnaHQ6IC02cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogLTZweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5jb2wtNiB7XHJcbiAgcGFkZGluZy1yaWdodDogNnB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW0uZXhjaGFuZ2U6OnBhcnQobmF0aXZlKSB7XHJcbiAgaGVpZ2h0OiA3NXB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uLmJhY2sge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIC0tY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5uZXh0IHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxQTJELCAjMDA0Qzk3KTtcclxuICAtLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgZm9ybSB7XHJcbiAgICBtaW4taGVpZ2h0OiA3NnZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG59XHJcblxyXG4uYm94IHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC8vIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nOiAwIDIxcHggIWltcG9ydGFudDtcclxuICAvLyBCbHVyOjZwdDtcclxuICAvLyBib3gtc2hhZG93OiAwIDAgNXB0IDAuNXB0ICNEM0QzRDM7XHJcbiAgLy8gYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjRDNEM0QzO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgLy8gb3BhY2l0eTogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxufVxyXG5cclxuLmlucHV0Q2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICAvLyBvcGFjaXR5OiA1MCU7XHJcbiAgaW9uLWdyaWQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5wdXRDYXJkMSB7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAvLyBvcGFjaXR5OiA1MCU7XHJcbiAgaW9uLWdyaWQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uY3VycmVuY3lfcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmQuYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgaW1nIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGhlaWdodDogMjBwdDtcclxuICB9XHJcbn1cclxuXHJcbi5jdXJyZW5jeV9mbGFnIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuOCk7XHJcbn0iXX0= */";

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