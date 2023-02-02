"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_forex-transaction_forex-transaction_module_ts"],{

/***/ 78199:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/forex-transaction/forex-transaction-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForexTransactionPageRoutingModule": () => (/* binding */ ForexTransactionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _forex_transaction_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forex-transaction.page */ 20741);




const routes = [
    {
        path: '',
        component: _forex_transaction_page__WEBPACK_IMPORTED_MODULE_0__.ForexTransactionPage
    }
];
let ForexTransactionPageRoutingModule = class ForexTransactionPageRoutingModule {
};
ForexTransactionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForexTransactionPageRoutingModule);



/***/ }),

/***/ 67890:
/*!*********************************************************************!*\
  !*** ./src/app/pages/forex-transaction/forex-transaction.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForexTransactionPageModule": () => (/* binding */ ForexTransactionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _forex_transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forex-transaction-routing.module */ 78199);
/* harmony import */ var _forex_transaction_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forex-transaction.page */ 20741);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-flag-picker */ 96801);








let ForexTransactionPageModule = class ForexTransactionPageModule {
};
ForexTransactionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forex_transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForexTransactionPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__.NgxFlagPickerModule,
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
        declarations: [_forex_transaction_page__WEBPACK_IMPORTED_MODULE_1__.ForexTransactionPage]
    })
], ForexTransactionPageModule);



/***/ }),

/***/ 20741:
/*!*******************************************************************!*\
  !*** ./src/app/pages/forex-transaction/forex-transaction.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForexTransactionPage": () => (/* binding */ ForexTransactionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forex_transaction_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forex-transaction.page.html?ngResource */ 206);
/* harmony import */ var _forex_transaction_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forex-transaction.page.scss?ngResource */ 88991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/branch/branch.component */ 6156);
/* harmony import */ var src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/time-slots/time-slots.component */ 19023);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);













let ForexTransactionPage = class ForexTransactionPage {
    // changeSelectedCountryCode(value: string): void {
    //   this.selectedCountryCode = value;
    // }
    constructor(fb, api, loading, router, modalController, dataService) {
        this.fb = fb;
        this.api = api;
        this.loading = loading;
        this.router = router;
        this.modalController = modalController;
        this.dataService = dataService;
        this.flag = true;
        this.accountCurrencyFlag = 'in';
        this.submitted = true;
        this.submitted1 = true;
        this.users = [];
        this.negotiated = ['0.98', '78.90'];
        this.isShow = true;
        this.currencyList = [
            'BG',
            'BN'
        ];
        this.selectedCountryCode = 'in';
        this.countryCodes = ['us', 'lu', 'de', 'bs', 'br', 'pt'];
        this.minDate = new Date().toISOString();
        this.maxDate = "2025";
    }
    ngOnInit() {
        this.currentUser = this.dataService.getCurrentUser();
        console.log(this.currentUser);
        const dt = new Date();
        this.minDate = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + (dt.getDate() < 10 ? ('0' + dt.getDate()) : dt.getDate());
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        if (this.router.getCurrentNavigation() != null) {
            this.routerData = this.router.getCurrentNavigation().extras.state;
            console.log('>>get router data -- :', this.routerData);
        }
        this.forexForm = this.fb.group({
            transactionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            customerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            productCode: ['FTX', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            tokenOrigin: ['Mobile', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            accountBalance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            accountCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            transactionType: ['buy', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            branchFlag: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            accountBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            transactionDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            isMobileTrans: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            transactionTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            exchangeRate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            accountAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            totalChargeAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            narrative: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            denomination: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            totalAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            createdBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            createdTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            modifiedBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            modifiedTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            recordStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            authStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            version: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            totalTransactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            remarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
        });
        this.forexForm.get('branchFlag').valueChanges.subscribe(val => {
            localStorage.setItem("BranchFlag", val);
            this.brnflg = val;
            if (this.brnflg == false && val == false) {
                this.forexForm.controls.transactionBranch.patchValue(this.trnBrn);
                this.nearestBrn = true;
            }
            else {
                this.nearestBrn = false;
                this.accBranch = localStorage.getItem("AccBranch");
                this.forexForm.controls.transactionBranch.patchValue(this.accBranch);
            }
            if (this.brnflg == true && val == false) {
                this.forexForm.controls.transactionBranch.patchValue(this.accBranch);
                this.nearestBrn = true;
            }
        });
        this.loadData();
        let today = new Date().toISOString();
        this.forexForm.get('transactionDate').patchValue(today);
    }
    trnBrn(trnBrn) {
        throw new Error('Method not implemented.');
    }
    loadData() {
        this.loading.present();
        this.api.custpomerDetails(this.phoneNumber).subscribe((resp) => {
            this.loading.dismiss();
            resp.custAccount = resp.custAccount.filter((card) => card.status === 'APPROVED');
            this.resp = resp;
            console.log('backend resp in home', resp);
            this.users = resp.custAccount;
            this.forexForm.get('accountNumber').patchValue(this.users[0].accountId);
            this.forexForm.get('accountBranch').patchValue(resp.custAccount[0].accountBranch);
            this.currentBalance = this.users[0].amount;
            this.selectedCountryCode = resp.countryCode.toLowerCase();
            this.transactionCurrencyModel = resp.currencyCode;
            this.curr = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.getCurrencySymbol)(resp.custAccount[0].accountCurrency, 'narrow');
            this.api.getChargeDetails(this.forexForm.get('accountNumber').value).subscribe(resp => {
                var _a;
                console.log('getChargeDetails', resp);
                this.chargeAmount = ((_a = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _a === void 0 ? void 0 : _a.amount) || '';
                this.forexForm.get('totalChargeAmount').patchValue(this.chargeAmount);
            }, err => console.log('Error: ', err));
        }, (err) => {
            this.loading.dismiss();
        });
    }
    handleExchangeRate(event) {
        this.forexForm.get('totalTransactionAmount').patchValue(Number(event.target.value) + this.chargeAmount);
    }
    validateDisablebutton(button) {
        this.forexForm.valueChanges.subscribe(v => {
            // console.log("v:: ", v);
            if (button === 'disable1') {
                if (v.accountBranch != '' &&
                    v.accountNumber != '' &&
                    v.transactionCurrency != '' &&
                    v.transactionAmount != 0) {
                    this.submitted = false;
                }
                else {
                    this.submitted = true;
                }
            }
            if (button === 'disable2') {
                if (v.transactionBranch != '' &&
                    v.transactionDate != '' &&
                    v.transactionTime != '' &&
                    v.accountNo != '') {
                    this.submitted1 = false;
                }
                else {
                    this.submitted1 = true;
                }
            }
        });
        if (this.routerData) {
            this.submitted1 = false;
        }
    }
    accountEvent(event) {
        console.log('events::', event);
        console.log('events details::', event.detail);
        console.log('event', event.detail.value);
        this.api.accountBalance(event.detail.value).subscribe((accbal) => {
            this.currentBalance = accbal.amount;
        });
    }
    // compareWith(o1: User, o2: User) {
    //   return o1 && o2 ? o1.id === o2.id : o1 === o2;
    // }
    // isShow : boolean = true;
    // selectedCountryCode = 'ad';
    // // countryCodes = ['ad', 'ae', 'af', 'ag', 'al', 'ai'];
    selectCurrencyCode(code) {
        var _a;
        //console.log(code);
        console.log(code);
        const currencyCode = code.detail.value.currency;
        this.selectedCountryCode = code.detail.value.code.toLowerCase();
        localStorage.setItem("Transaction_Currency", code.target.value.currency);
        localStorage.setItem("Account_Currency", this.forexForm.value.accountCurrency);
        console.log(this.selectedCountryCode);
        if (this.routerData) {
            this.selectedCountryCode =
                this.routerData.data.transactionCurrency.toLowerCase();
            this.forexForm.controls.transactionCurrency.patchValue(this.routerData.data.transactionCurrency);
        }
        if (this.selectedCountryCode && !((_a = this.forexForm.get('accountCurrency')) === null || _a === void 0 ? void 0 : _a.value.toLowerCase().includes(this.selectedCountryCode))) {
            this.api.getCurrencyExRate(this.forexForm.get('accountCurrency').value, currencyCode).subscribe(resp => {
                var _a, _b;
                console.log(resp);
                this.exchangeRateInfo = resp;
                const transactionType = this.forexForm.get('transactionType').value;
                if (transactionType) {
                    if (transactionType === 'buy') {
                        this.forexForm.get('exchangeRate').patchValue((_a = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _a === void 0 ? void 0 : _a.buyRate);
                    }
                    if (transactionType === 'sell') {
                        this.forexForm.get('exchangeRate').patchValue((_b = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _b === void 0 ? void 0 : _b.sellRate);
                    }
                }
            }, err => console.log('Error: ', err));
        }
    }
    changeTransactionType(event) {
        var _a, _b, _c, _d;
        const transactionType = this.forexForm.get('transactionType').value;
        if (transactionType && this.exchangeRateInfo) {
            if (transactionType === 'buy') {
                this.forexForm.get('exchangeRate').patchValue((_b = (_a = this.exchangeRateInfo) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.buyRate);
            }
            if (transactionType === 'sell') {
                this.forexForm.get('exchangeRate').patchValue((_d = (_c = this.exchangeRateInfo) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.sellRate);
            }
        }
    }
    changeSelectedCountryCode(value) {
        // this.selectedCountryCode = value;
    }
    next() {
        const accBranch = this.resp.custAccount.find(obj => obj.accountId == this.forexForm.get('accountNumber').value).accountBranch;
        this.forexForm.get('transactionBranch').patchValue(accBranch);
        this.flag = false;
    }
    previous() {
        this.flag = true;
    }
    save(fb) {
        console.log(fb);
        this.router.navigate(['token-generation']);
        //  this.router.navigate(['loan-payment']);
    }
    openPopup() {
        console.log('popup');
        this.modalController
            .create({
            component: src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_3__.TimeSlotsComponent,
            componentProps: {
                date: this.forexForm.get('transactionDate').value,
            },
        })
            .then((modalResp) => {
            modalResp.present();
            modalResp.onDidDismiss().then((res) => {
                if (res.data != null) {
                    console.log(res);
                    this.forexForm.get('transactionTime').patchValue(res.data);
                }
            });
        });
    }
    previous1() {
        this.router.navigate(['dashboard']);
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_2__.BranchComponent,
                id: "branchModal",
                componentProps: {}
            });
            modal.onDidDismiss().then((modelData) => {
                var _a;
                if (modelData !== null) {
                    let branch = modelData.data;
                    console.log('Modal Data for branch: ', modelData.data);
                    this.forexForm.patchValue({
                        transactionBranch: (_a = modelData.data) === null || _a === void 0 ? void 0 : _a.branchName
                    });
                }
            });
            return yield modal.present();
        });
    }
    currencyScreen() {
        var _a;
        // this.router.navigate(['/currencyconverter']);
        this.router.navigateByUrl('/currencyconverter', {
            state: {
                data: {
                    amount: this.forexForm.get('transactionAmount').value,
                    transType: this.forexForm.get('transactionType').value,
                    exchangeRate: this.forexForm.get('exchangeRate').value,
                    fromCurrencyFlag: this.accountCurrencyFlag,
                    toCurrencyFlag: this.selectedCountryCode,
                    fromCurrency: this.forexForm.get('accountCurrency').value,
                    toCurrency: (_a = this.forexForm.get('transactionCurrency').value) === null || _a === void 0 ? void 0 : _a.currency,
                }
            },
        });
    }
};
ForexTransactionPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService }
];
ForexTransactionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-forex-transaction',
        template: _forex_transaction_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forex_transaction_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForexTransactionPage);



/***/ }),

/***/ 4471:
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.isLoading = false;
    }
    present() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                message: 'Fetching data.......',
                duration: 2500,
            }).then(a => {
                a.present().then(() => {
                    console.log('presented');
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss().then(() => console.log('dismissed'));
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 88991:
/*!********************************************************************************!*\
  !*** ./src/app/pages/forex-transaction/forex-transaction.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.forex_header {\n  padding-top: 4%;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.box {\n  font-weight: 600;\n  border-width: thin;\n  width: 100%;\n  height: 55px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  border-radius: 13px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.box1 {\n  font-weight: bold;\n  margin-top: 10px;\n  border-width: thin;\n  border-radius: 20px;\n  padding: 0 21px;\n  width: 100%;\n  height: 135px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n}\n\n.inputCard {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.ion_col {\n  display: flex;\n  align-items: center;\n  margin: 20px;\n}\n\n.ion_col:first-child {\n  margin: 20px 0;\n}\n\n.ion_col ion-input {\n  font-weight: 600;\n  padding: 0 21px !important;\n}\n\n.inputRemarks {\n  padding-top: 7%;\n  padding-left: 5%;\n}\n\n.inputCard1 {\n  padding-top: 7%;\n  padding-left: 5%;\n  border-radius: 10px !important;\n  background-color: rgb(244, 247, 248);\n}\n\n.inputCard1 ion-label {\n  font-size: 14px;\n  color: black;\n  opacity: 75%;\n}\n\n.inputCard1 .input {\n  font-weight: bold;\n  opacity: 100%;\n}\n\n.labelCard {\n  color: gray;\n  font-size: 14px;\n}\n\n.searchbar {\n  border-radius: 10%;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 16px;\n  font-weight: 600;\n}\n\nion-select {\n  font-size: large;\n  font-weight: bold;\n}\n\nion-input {\n  color: black !important;\n  font-size: 12pt;\n  padding: 0 20px !important;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: #102245;\n  font-size: 16px;\n  font-family: \"Montserrat\" !important;\n  opacity: 75%;\n}\n\nion-back-button {\n  color: blue;\n}\n\n.inputCard ion-item ion-label {\n  color: gray;\n}\n\n.inputCard ion-label {\n  font-size: 16px;\n  color: #444;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n\n.inputCard ion-item {\n  margin-left: 0px;\n}\n\n.inputCard .box {\n  margin: 10px 0;\n}\n\nion-textarea {\n  height: 500px;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: rgb(70, 111, 254);\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-button {\n  width: 95%;\n  padding-left: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\n.trans_branch {\n  padding-left: 5%;\n  padding-top: 8%;\n  padding-right: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n}\n\n.boxDrop {\n  display: inline-block;\n  width: 95%;\n  height: 55px;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-width: thin;\n  border-style: solid;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 5px;\n  padding-left: 20px;\n  align-content: center;\n}\n\n.inputCard5 {\n  padding-top: 5%;\n  padding-left: 5%;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.box7 {\n  padding-top: 0%;\n}\n\n.box7 ion-card {\n  margin-left: 0;\n}\n\n.box7 .box {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n  padding: 0 !important;\n}\n\n.currency_row {\n  display: flex;\n  width: 100%;\n}\n\n.currency_row ion-select {\n  font-size: large;\n  padding: 0 20px !important;\n}\n\n.currency_row ion-select {\n  width: 100%;\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n\n.total_trans_row {\n  position: relative;\n  width: 100%;\n}\n\n.total_trans_row .info_btn {\n  position: absolute;\n  right: 8%;\n  top: 50%;\n  color: #000;\n  font-size: 18px;\n  font-weight: 700;\n  border: 2px solid #000;\n  border-radius: 7px;\n  padding: 0 10px;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmV4LXRyYW5zYWN0aW9uLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdJVEhVQiUyMFJFUE9TSVRPUllfVUlcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXGZvcmV4LXRyYW5zYWN0aW9uXFxmb3JleC10cmFuc2FjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLDZDQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQU9BLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUZBQUE7RUFJQSxpREFBQTtFQUVBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFHQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUNURjs7QURXQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUZBQUE7RUFJQSxpREFBQTtBQ2JGOztBRHlCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDdEJGOztBRHlCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUN0Qko7O0FEdUJJO0VBQ0UsY0FBQTtBQ3JCTjs7QUR1QkU7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FDckJKOztBRHdCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ3JCRjs7QUR3QkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUtBLG9DQUFBO0FDekJGOztBRDJCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ3hCRjs7QUQwQkE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUN2QkY7O0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUN0QkY7O0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7O0FEdUJBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNwQkY7O0FEc0JBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ25CRjs7QURxQkE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHFDQUFBO0VBR0Esb0NBQUE7QUNwQkY7O0FEc0JBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QUNuQkY7O0FEcUJBO0VBQ0UsV0FBQTtBQ2xCRjs7QURvQkE7RUFDRSxXQUFBO0FDakJGOztBRG9CRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ2pCSjs7QURtQkU7RUFDRSxnQkFBQTtBQ2pCSjs7QURtQkU7RUFDRSxjQUFBO0FDakJKOztBRG9CQTtFQUNFLGFBQUE7QUNqQkY7O0FEbUJBO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNoQkY7O0FEa0JBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ2ZGOztBRGlCQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ2RGOztBRGdCQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDYkY7O0FEZUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDWkY7O0FEY0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNYRjs7QURhQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNWRjs7QURhQTtFQUNFLGdCQUFBO0FDVkY7O0FEYUE7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7QUNWRjs7QURZQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUNWRjs7QURhQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBSUEscUJBQUE7QUNiRjs7QURpQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNkRjs7QURpQkE7RUFDRSxhQUFBO0FDZEY7O0FEZ0JBO0VBQ0UsZUFBQTtBQ2JGOztBRGtCRTtFQUNFLGNBQUE7QUNoQko7O0FEa0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDaEJKOztBRG9CQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDakJGOztBRGtCRTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUNoQko7O0FEa0JFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDaEJKOztBRHFCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ2xCRjs7QURtQkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ2pCSiIsImZpbGUiOiJmb3JleC10cmFuc2FjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICAvKiBBZGQgIWltcG9ydGFudCB0byBvdmVyd3JpdGUgYWxsIGVsZW1lbnRzICovXHJcbn1cclxuLmZvcmV4X2hlYWRlciB7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYm94IHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC8vIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAvLyBwYWRkaW5nOiAwIDIxcHggIWltcG9ydGFudDtcclxuICAvLyBCbHVyOjZwdDtcclxuICAvLyBib3gtc2hhZG93OiAwIDAgNXB0IDAuNXB0ICNEM0QzRDM7XHJcbiAgLy8gYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjRDNEM0QzO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSlcclxuICApO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgLy8gb3BhY2l0eTogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxufVxyXG4uYm94MSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgLy8gYm9yZGVyLXN0eWxlOiB0aGluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMCAyMXB4O1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEzNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KVxyXG4gICk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAvLyBvcGFjaXR5OiA1MCU7XHJcbiAgLy8gYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gIC8vIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gIC8vIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgLy8gYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG59XHJcbi8vIGRpdiB7XHJcbi8vICAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIEhpZGUgaG9yaXpvbnRhbCBzY3JvbGxiYXIgKi9cclxuLy8gICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgLyogQWRkIHZlcnRpY2FsIHNjcm9sbGJhciAqL1xyXG4vLyAgIH1cclxuXHJcbi5pbnB1dENhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIC8vIG9wYWNpdHk6IDUwJTtcclxufVxyXG4gIC5pb25fY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gIH1cclxuICBpb24taW5wdXQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDAgMjFweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4uaW5wdXRSZW1hcmtzIHtcclxuICBwYWRkaW5nLXRvcDogNyU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmlucHV0Q2FyZDEge1xyXG4gIHBhZGRpbmctdG9wOiA3JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAvLyBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIC8vIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JheSAhaW1wb3J0YW50O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyNDcsIDI0OCk7XHJcbn1cclxuLmlucHV0Q2FyZDEgaW9uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDc1JTtcclxufVxyXG4uaW5wdXRDYXJkMSAuaW5wdXQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuLmxhYmVsQ2FyZCB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5zZWFyY2hiYXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG4udW5kZXJsaW5lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5pb24tc2VsZWN0IHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG4gIHBhZGRpbmc6IDAgMjBweCAhaW1wb3J0YW50O1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgLy8gLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDAlO1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gIGNvbG9yOiAjMTAyMjQ1O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiA3NSU7XHJcbn1cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG4uaW5wdXRDYXJkIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuLmlucHV0Q2FyZCB7XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB9XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgLmJveCB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbn1cclxuaW9uLXRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4udGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG4udHJhbnNfYnJhbmNoIHtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JVxyXG59XHJcbi5jYW5jZWxjYXJkIHtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0NCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5pb24tcGFkZGluZy10b3AyIHtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG4uYmFja2NhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWxlZnQ6IDQ3JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5pb24tcGFkZGluZy10b3Age1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAzJTtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI2QzZDNkMztcclxufVxyXG4uYm94RHJvcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIC8vOiA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG59XHJcblxyXG5uZ3gtZmxhZy1waWNrZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgLy8gcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIC8vIHBhZGRpbmctdG9wOiA0JTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uaW5wdXRDYXJkNSB7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbmZvcm06Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5ib3g3IHtcclxuICBwYWRkaW5nLXRvcDogMCU7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiA1JTtcclxuICAvLyBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAvLyBtYXJnaW4tbGVmdDogMTBweDtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5jdXJyZW5jeV9yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaW9uLXNlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgcGFkZGluZzogMCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbi50b3RhbF90cmFuc19yb3cge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICAuaW5mb19idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDglO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbn1cclxuIiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xuICAvKiBBZGQgIWltcG9ydGFudCB0byBvdmVyd3JpdGUgYWxsIGVsZW1lbnRzICovXG59XG5cbi5mb3JleF9oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogNCU7XG4gIHBhZGRpbmctYm90dG9tOiAzJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib3gge1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCByZ2JhKDAsIDAsIDAsIDAuMTYwNzg0MzEzNyk7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XG59XG5cbi5ib3gxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMCAyMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMzVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0IHJnYmEoMCwgMCwgMCwgMC4xNjA3ODQzMTM3KTtcbn1cblxuLmlucHV0Q2FyZCB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG5cbi5pb25fY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4O1xufVxuLmlvbl9jb2w6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi5pb25fY29sIGlvbi1pbnB1dCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDAgMjFweCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXRSZW1hcmtzIHtcbiAgcGFkZGluZy10b3A6IDclO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uaW5wdXRDYXJkMSB7XG4gIHBhZGRpbmctdG9wOiA3JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyNDcsIDI0OCk7XG59XG5cbi5pbnB1dENhcmQxIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiA3NSU7XG59XG5cbi5pbnB1dENhcmQxIC5pbnB1dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvcGFjaXR5OiAxMDAlO1xufVxuXG4ubGFiZWxDYXJkIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNlYXJjaGJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cblxuLnVuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgcGFkZGluZzogMCAyMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogIzEwMjI0NTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogNzUlO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmlucHV0Q2FyZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmlucHV0Q2FyZCBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNDQ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG4uaW5wdXRDYXJkIGlvbi1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cbi5pbnB1dENhcmQgLmJveCB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogcmdiKDcwLCAxMTEsIDI1NCk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xufVxuXG4udHJhbnNfYnJhbmNoIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy10b3A6IDglO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cblxuLmNhbmNlbGNhcmQge1xuICBwYWRkaW5nLXRvcDogOCU7XG4gIHBhZGRpbmctbGVmdDogNDQlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pb24tcGFkZGluZy10b3AyIHtcbiAgcGFkZGluZy10b3A6IDglO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uYmFja2NhcmQge1xuICBwYWRkaW5nLXRvcDogOCU7XG4gIHBhZGRpbmctbGVmdDogNDclO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pb24tcGFkZGluZy10b3Age1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjZDNkM2QzO1xufVxuXG4uYm94RHJvcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGhpZGRlbjtcbn1cblxubmd4LWZsYWctcGlja2VyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uaW5wdXRDYXJkNSB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuZm9ybTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYm94NyB7XG4gIHBhZGRpbmctdG9wOiAwJTtcbn1cbi5ib3g3IGlvbi1jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uYm94NyAuYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmN1cnJlbmN5X3JvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmN1cnJlbmN5X3JvdyBpb24tc2VsZWN0IHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgcGFkZGluZzogMCAyMHB4ICFpbXBvcnRhbnQ7XG59XG4uY3VycmVuY3lfcm93IGlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4udG90YWxfdHJhbnNfcm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b3RhbF90cmFuc19yb3cgLmluZm9fYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOCU7XG4gIHRvcDogNTAlO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgei1pbmRleDogMjtcbn0iXX0= */";

/***/ }),

/***/ 206:
/*!********************************************************************************!*\
  !*** ./src/app/pages/forex-transaction/forex-transaction.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n    <span class=\"text\">Forex Transaction</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"flag\">\r\n  <div>\r\n    <form [formGroup]=\"forexForm\">\r\n      <div class=\"inputCard\">\r\n        <ion-label>Account Number*</ion-label>\r\n        <!-- <ion-input class=\"box\"></ion-input> -->\r\n        <ion-select class=\"box\" mode=\"ios\" formControlName=\"accountNumber\" ngDefaultControl\r\n          (ionChange)=\"accountEvent($event)\">\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\">{{user.accountId}}</ion-select-option>\r\n        </ion-select>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\" formControlName=\"accountBalance\" ngDefaultControl>Account\r\n          Balance : {{curr}} {{currentBalance}}</ion-label>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\" ngDefaultControl>Holder Name : {{ currentUser?.firstName }}</ion-label>\r\n      </div>\r\n\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\">Account Currency : {{ currentUser?.currencyCode }}</ion-label>\r\n        <!-- <div class=\"box7\">\r\n          <ion-label>Account Currency</ion-label>\r\n          <ion-card class=\"box\">\r\n            <div class=\"currency_row\">\r\n              <ngx-flag-picker [selectedCountryCode]=\"accountCurrencyFlag\" [showFlags]=\"isShow\" [showLabels]=\"!isShow\"\r\n                [showArrow]=\"!isShow\">\r\n              </ngx-flag-picker>\r\n              <ion-input placeholder=\"Account Currency\" formControlName=\"accountCurrency\" readonly>\r\n              </ion-input>\r\n            </div>\r\n          </ion-card>\r\n        </div> -->\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label>Account Branch*</ion-label>\r\n        <ion-input class=\"box\" placeholder=\"Account Branch\" formControlName=\"accountBranch\" ngDefaultControl readonly>\r\n        </ion-input>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label>Transaction Type*</ion-label>\r\n        <ion-radio-group formControlName=\"transactionType\" (ionChange)=\"changeTransactionType($event)\" ngDefaultControl>\r\n          <ion-row>\r\n            <div class=\"ion_col\">\r\n              <ion-radio mode=\"md\" item-left value=\"buy\"></ion-radio> &nbsp;&nbsp;\r\n              <ion-label position=\"start\">Buy</ion-label>\r\n            </div>\r\n\r\n            <div class=\"ion_col\">\r\n              <ion-radio mode=\"md\" item-left value=\"sell\"></ion-radio> &nbsp;&nbsp;\r\n              <ion-label>Sell</ion-label>\r\n            </div>\r\n          </ion-row>\r\n        </ion-radio-group>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n\r\n        <div class=\"box7\">\r\n          <ion-card class=\"box\">\r\n            <div class=\"currency_row\">\r\n              <ngx-flag-picker [selectedCountryCode]=\"selectedCountryCode\" [showFlags]=\"isShow\" [showLabels]=\"!isShow\"\r\n                [showArrow]=\"!isShow\">\r\n              </ngx-flag-picker>\r\n              <ion-select mode=\"ios\" placeholder=\"Transaction Currency\" formControlName=\"transactionCurrency\"\r\n                [placeholder]=\"transactionCurrencyModel\" [compareWith]=\"compareWith\"\r\n                (ionChange)=\"selectCurrencyCode($event)\">\r\n                <ion-select-option *ngFor=\"let user of countries\" [value]=\"user\">\r\n                  {{user.currency}}\r\n                  <!-- {{user.currency + ' : ' + user.countryName}} -->\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </div>\r\n          </ion-card>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"inputCard\">\r\n    <ion-label>Transaction Currency</ion-label>\r\n    <ion-input class=\"box\">\r\n    <ngx-flag-picker\r\n    [selectedCountryCode]=\"selectedCountryCode\"\r\n    showFlags=\"isShow\"\r\n    showArrow=\"!isShow\"\r\n    [countryCodes]=\"countryCodes\"\r\n    (changedCountryCode)=\"changeSelectedCountryCode($event)\">\r\n  </ngx-flag-picker>\r\n</ion-input>\r\n    </div> -->\r\n      <!--     \r\n    <div class=\"inputCard\">\r\n      <ion-label>Transaction Currency</ion-label>\r\n       <ion-select [compareWith]=\"compareWith\" class=\"box\">\r\n      <ion-select-option *ngFor=\"let user of countries\" [value]=\"user\">\r\n      \r\n      </ion-select-option>\r\n      </ion-select> -->\r\n      <!-- <ngx-flag-picker  -->\r\n      <!-- [selectedCountryCode]=\"selectedCountryCode\"\r\n      [countryCodes]=\"countryCodes\"\r\n    \r\n      (changedCountryCode)=\"changeSelectedCountryCode($event)\"> -->\r\n      <!-- </ngx-flag-picker>\r\n   \r\n  </div> -->\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-input class=\"box\" placeholder=\"Fx Amount\" formControlName=\"transactionAmount\" (keyup)=\"handleExchangeRate($event)\" ngDefaultControl></ion-input>\r\n      </div>\r\n      <div class=\"inputCard\"\r\n        *ngIf=\"selectedCountryCode && !forexForm.get('accountCurrency').value.toLowerCase().includes(selectedCountryCode)\">\r\n        <ion-router-link (click)=\"currencyScreen()\" class=\"underline\">Check the Currency Converter</ion-router-link>\r\n      </div>\r\n      <div class=\"inputCard\"\r\n        *ngIf=\"selectedCountryCode && !forexForm.get('accountCurrency')?.value.toLowerCase().includes(selectedCountryCode)\">\r\n        <ion-input class=\"box\" placeholder=\"Exchange Rate\" formControlName=\"exchangeRate\" name=\"exchangeRate\"\r\n          ngDefaultControl></ion-input>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-input class=\"box\" placeholder=\"Total Charge Amount\" name=\"chargeAMount\" formControlName=\"totalChargeAmount\"\r\n          ngDefaultControl></ion-input>\r\n      </div>\r\n      <div class=\"inputCard total_trans_row\">\r\n        <ion-input class=\"box\" placeholder=\"Total Transaction Amount\" formControlName=\"totalTransactionAmount\"\r\n          ngDefaultControl></ion-input>\r\n        <span class=\"info_btn\">i</span>\r\n      </div>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\"\r\n          [disabled]=\"validateDisablebutton('disable1') || submitted ||   transactionAmount > currentBalance\"\r\n          (click)=\"next()\"\r\n          >Next</ion-button>\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black\" (click)=\"previous1()\">Cancel\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous()\"></ion-icon>\r\n    <span class=\"text\">Forex Transaction</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"!flag\">\r\n  <div>\r\n    <form [formGroup]=\"forexForm\">\r\n\r\n\r\n      <div class=\"trans_branch\">\r\n        <ion-label>Do you wish to perform this transaction in your branch?</ion-label>\r\n        <!-- <ion-label></ion-label> -->\r\n        <ion-radio-group formControlName=\"trasactionBranch\" ngDefaultControl>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"start\">Yes</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagYes\" [value]=\"true\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label>No</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagNo\" [value]=\"false\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-router-link (click)=\"presentModal()\" [hidden]=\"forexForm.get('trasactionBranch').value\"\r\n          class=\"underline\">Click here to find nearest branch</ion-router-link>\r\n      </div>\r\n\r\n    \r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction Branch*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input\r\n              appearence=\"none\"\r\n              formControlName=\"transactionBranch\"\r\n              [readonly]=\"forexForm.get('branchFlag').value ? true : false\"\r\n            >\r\n            </ion-input>\r\n            <ion-icon\r\n              *ngIf=\"forexForm.get('branchFlag').value == true\"\r\n              name=\"home-outline\"\r\n              color=\"primary\"\r\n              slot=\"end\"\r\n            ></ion-icon>\r\n            <ion-icon\r\n              *ngIf=\"forexForm.get('branchFlag').value == false\"\r\n              name=\"navigate-circle-outline\"\r\n              color=\"primary\"\r\n              slot=\"end\"\r\n            ></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-note\r\n          style=\"color: red; top: 13px\"\r\n          *ngIf=\"f.transactionBranch.errors?.required && f.transactionBranch.touched\"\r\n        >\r\n          <small>Transaction Branch Required</small>\r\n        </ion-note>\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label>Transaction date*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-datetime-button datetime=\"datetime\" showTimeLabel=\"false\"></ion-datetime-button>\r\n            <ion-modal [keepContentsMounted]=\"true\">\r\n              <ng-template>\r\n                <ion-datetime presentation=\"date\" id=\"datetime\" [max]=\"maxDate\"\r\n                  formControlName=\"transactionDate\" \r\n                  displayFormat=\"DDD. MMM DD, YY\" \r\n                  [showDefaultTitle]=\"true\" \r\n                  #datetime>\r\n                </ion-datetime>\r\n              </ng-template>\r\n            </ion-modal>\r\n            <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-card class=\"box ml-0\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input formControlName=\"transactionTime\" placeholder=\"Time Slot\" [readonly]=\"true\"></ion-input>\r\n            <!-- <ion-datetime displayFormat=\"hh:mm A\"  placeholder=\"Select time slot\" formControlName=\"transactionTime\"></ion-datetime> -->\r\n            <ion-icon name=\"alarm-outline\" slot=\"end\" (click)=\"openPopup()\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-textarea placeholder=\"Remark\" class=\"box1\" formControlName=\"remarks\" ngDefaultControl></ion-textarea>\r\n      </div>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" \r\n          (click)=\"save(forexForm.value)\"\r\n          [disabled]=\"validateDisablebutton('disable2') || submitted1\"\r\n          >Save</ion-button>\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button shape=\"round\" fill=\"clear\" (click)=\"previous()\" style=\"color: black\">Back</ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forex-transaction_forex-transaction_module_ts.js.map