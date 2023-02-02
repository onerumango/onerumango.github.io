"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cashwithdrawal_cashwithdrawal_module_ts"],{

/***/ 15616:
/*!***********************************************************************!*\
  !*** ./src/app/pages/cashwithdrawal/cashwithdrawal-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashwithdrawalPageRoutingModule": () => (/* binding */ CashwithdrawalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _cashwithdrawal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cashwithdrawal.page */ 43148);




const routes = [
    {
        path: '',
        component: _cashwithdrawal_page__WEBPACK_IMPORTED_MODULE_0__.CashwithdrawalPage
    },
];
let CashwithdrawalPageRoutingModule = class CashwithdrawalPageRoutingModule {
};
CashwithdrawalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CashwithdrawalPageRoutingModule);



/***/ }),

/***/ 41587:
/*!***************************************************************!*\
  !*** ./src/app/pages/cashwithdrawal/cashwithdrawal.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashwithdrawalPageModule": () => (/* binding */ CashwithdrawalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cashwithdrawal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cashwithdrawal-routing.module */ 15616);
/* harmony import */ var _cashwithdrawal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cashwithdrawal.page */ 43148);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-flag-picker */ 96801);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);
/* harmony import */ var mat_currency_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mat-currency-format */ 73803);












let CashwithdrawalPageModule = class CashwithdrawalPageModule {
};
CashwithdrawalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _cashwithdrawal_routing_module__WEBPACK_IMPORTED_MODULE_0__.CashwithdrawalPageRoutingModule,
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_9__.NgxFlagPickerModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_3__.SharedMaterialModule,
            mat_currency_format__WEBPACK_IMPORTED_MODULE_11__.MatCurrencyFormatModule
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        declarations: [_cashwithdrawal_page__WEBPACK_IMPORTED_MODULE_1__.CashwithdrawalPage],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA
        ],
    })
], CashwithdrawalPageModule);



/***/ }),

/***/ 43148:
/*!*************************************************************!*\
  !*** ./src/app/pages/cashwithdrawal/cashwithdrawal.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashwithdrawalPage": () => (/* binding */ CashwithdrawalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cashwithdrawal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cashwithdrawal.page.html?ngResource */ 81537);
/* harmony import */ var _cashwithdrawal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cashwithdrawal.page.scss?ngResource */ 4664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/branch/branch.component */ 6156);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/time-slots/time-slots.component */ 19023);
/* harmony import */ var _appointmentpopup_appointmentpopup_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../appointmentpopup/appointmentpopup.page */ 14808);


















let CashwithdrawalPage = class CashwithdrawalPage {
    constructor(router, modalController, fb, loading, datepipe, api, toastService, toastCtrl, shareDataService, cdr) {
        this.router = router;
        this.modalController = modalController;
        this.fb = fb;
        this.loading = loading;
        this.datepipe = datepipe;
        this.api = api;
        this.toastService = toastService;
        this.toastCtrl = toastCtrl;
        this.shareDataService = shareDataService;
        this.cdr = cdr;
        this.title = 'Cash Withdrawal';
        // maxData : any = (new Date()).getFullYear() + 3;
        this.minDate = new Date().toISOString();
        this.maxDate = "2025";
        this.submitted = true;
        this.submitted1 = true;
        this.productCode = 'CHW';
        this.tokenOrigin = 'Mobile';
        this.currencies = [];
        //transAmount:number;
        this.isedit = true;
        //transactionAmount: string;
        this.accountBranch = 'Loita street';
        this.flag = true;
        this.users = [];
        this.selectAbleColor = 'secondary';
        this.trnBrn = null;
        this.routerData = null;
        this.accountflag = false;
        this.editMode = false;
        this.isShow = true;
        this.selectedCountryCode = '';
        this.lastTranc = [
            {
                transBranch: 'asds',
                accBranch: 'Test',
            },
            {
                transBranch: 'Test',
                accBranch: 'Test',
            },
            {
                transBranch: 'Mananthavady',
                accBranch: 'Test',
            },
            {
                transBranch: 'Mananthavady',
                accBranch: 'Test',
            },
            {
                transBranch: 'Mananthavady',
                accBranch: 'Test',
            },
            {
                transBranch: 'Mananthavady',
                accBranch: 'Test',
            },
        ];
    }
    ngOnInit() {
        var _a;
        if (this.router.getCurrentNavigation() != null) {
            this.routerData = this.router.getCurrentNavigation().extras.state;
            console.log("Values?", this.routerData);
            this.editMode = ((_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) ? true : false;
        }
        this.customerId = sessionStorage.getItem('customer_id');
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.currencies = JSON.parse(localStorage.getItem('COUNTRIES'));
        if (this.editMode) {
            const countryCode = this.currencies.filter((i) => { var _a, _b; return i.currencyCode === ((_b = (_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.transactionCurrency); });
            this.selectedCurrency = countryCode[0];
        }
        else {
            const countryCode = this.currencies.filter((i) => i.currencyCode === "INR");
            this.selectedCurrency = countryCode[0];
        }
        this.buildForm();
        this.loadData();
        this.slideOneForm.get('branchFlag').valueChanges.subscribe((val) => {
            localStorage.setItem('BranchFlag', val);
            this.brnflg = val;
            if (this.brnflg == false && val == false) {
                console.log('2nd if');
                this.slideOneForm.controls.transactionBranch.patchValue(this.trnBrn);
                this.nearestBrn = true;
            }
            else {
                console.log('else');
                this.nearestBrn = false;
                this.accBranch = localStorage.getItem('AccBranch');
                console.log(this.accBranch);
                this.slideOneForm.controls.transactionBranch.patchValue(this.accBranch);
            }
            if (this.brnflg == true && val == false) {
                this.slideOneForm.controls.transactionBranch.patchValue(this.accBranch);
                this.nearestBrn = true;
            }
        });
        this.shareDataService.getAccountInfo.subscribe((data) => {
            var _a;
            console.log("Data from Service?", data);
            this.accountInfo = data;
            if ((_a = this.accountInfo) === null || _a === void 0 ? void 0 : _a.accountBranch) {
                this.api.getNumberOfCrowd(this.accountInfo.accountBranch).subscribe((data1) => {
                    this.tokenCount = (data1 === null || data1 === void 0 ? void 0 : data1.tokenCount) || '0';
                }, (err) => console.log('unable to fetch token count. ', err));
            }
            else {
                this.tokenCount = '0';
            }
        });
        let today = new Date().toISOString();
        this.slideOneForm.get('transactionDate').patchValue(today);
        this.slideOneForm.get('accountNumber').valueChanges.subscribe(val => {
            console.log("val", val);
            if (val) {
                this.accountEvent(val);
            }
        });
    }
    buildForm() {
        this.slideOneForm = this.fb.group({
            transactionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            customerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            productCode: ['CHW', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            tokenOrigin: ['Mobile', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            accountBalance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            accountCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            branchFlag: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            accountBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            transactionDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            isMobileTrans: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            transactionTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            exchangeRate: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            accountAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            totalChargeAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            narrative: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            denomination: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            totalAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            createdBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            createdTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            modifiedBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            modifiedTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            recordStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            authStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            version: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            totalTransactionAmount: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            remarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]]
        });
    }
    loadData() {
        this.loading.present();
        this.api.custpomerDetails(this.phoneNumber).subscribe((resp) => {
            this.loading.dismiss();
            resp.custAccount = resp.custAccount.filter(card => card.status === "APPROVED");
            console.log('backend resp in home', resp);
            this.customerDetails = resp;
            console.log(this.customerDetails);
            this.upsertAccount(resp);
        }, (err) => {
            this.loading.dismiss();
        });
    }
    onScreenRefresh() {
        var _a;
        this.editMode = ((_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) ? true : false;
        this.customerId = sessionStorage.getItem('customer_id');
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.currencies = JSON.parse(localStorage.getItem('COUNTRIES'));
        if (this.editMode) {
            const countryCode = this.currencies.filter((i) => { var _a, _b; return i.currencyCode === ((_b = (_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.transactionCurrency); });
            this.selectedCurrency = countryCode[0];
        }
        else {
            const countryCode = this.currencies.filter((i) => i.currencyCode === "INR");
            this.selectedCurrency = countryCode[0];
        }
        this.buildForm();
        this.loadData();
        this.slideOneForm.get('branchFlag').valueChanges.subscribe((val) => {
            localStorage.setItem('BranchFlag', val);
            this.brnflg = val;
            if (this.brnflg == false && val == false) {
                console.log('2nd if');
                this.slideOneForm.controls.transactionBranch.patchValue(this.trnBrn);
                this.nearestBrn = true;
            }
            else {
                console.log('else');
                this.nearestBrn = false;
                this.accBranch = localStorage.getItem('AccBranch');
                console.log(this.accBranch);
                this.slideOneForm.controls.transactionBranch.patchValue(this.accBranch);
            }
            if (this.brnflg == true && val == false) {
                this.slideOneForm.controls.transactionBranch.patchValue(this.accBranch);
                this.nearestBrn = true;
            }
        });
        this.shareDataService.getAccountInfo.subscribe((data) => {
            var _a;
            this.accountInfo = data;
            if ((_a = this.accountInfo) === null || _a === void 0 ? void 0 : _a.accountBranch) {
                this.api.getNumberOfCrowd(this.accountInfo.accountBranch).subscribe((data1) => {
                    this.tokenCount = (data1 === null || data1 === void 0 ? void 0 : data1.tokenCount) || '0';
                }, (err) => console.log('unable to fetch token count. ', err));
            }
            else {
                this.tokenCount = '0';
            }
        });
        this.slideOneForm.get('accountNumber').valueChanges.subscribe(val => {
            if (val) {
                this.accountEvent(val);
            }
        });
    }
    get f() {
        return this.slideOneForm.controls;
    }
    selectCurrencyCode(e) {
        var _a;
        if (typeof e !== "undefined") {
            const filteredCurrency = (_a = this.currencies) === null || _a === void 0 ? void 0 : _a.filter((i) => i.currencyCode === e);
            this.selectedCountryCode = filteredCurrency[0].countryCode.toLowerCase();
            this.getExChangeRate(filteredCurrency[0].currencyCode);
        }
        else {
            return;
        }
    }
    numberOnlyValidation(event) {
        this.transAmt = event.target.value;
        console.log(this.transAmount);
        if (parseFloat(this.currentBalance) < parseFloat(this.transAmt)) {
            console.log('Bigger');
            this.openToast1();
        }
        else {
            return;
        }
    }
    openToast1() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Transaction Amount should not exceed than Account Balance',
                duration: 2000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    validateDisablebutton(button) {
        this.slideOneForm.valueChanges.subscribe((v) => {
            // console.log("v:: ", v);
            if (button === 'disable1') {
                if (v.accountBranch != '' &&
                    v.accountNumber != '' &&
                    v.transactionAmount != '' &&
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
                    v.transactionTime != '') {
                    this.submitted1 = false;
                }
                else {
                    this.submitted1 = true;
                }
            }
        });
        if (this.editMode) {
            this.submitted1 = false;
        }
    }
    compareWithTransCurr(val1, val2) {
        return val1.includes(val2);
    }
    compareWith(o1, o2) {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }
    getExChangeRate(currency) {
        this.api.getExchangeRate(this.accountInfo.accountCurrency).subscribe((res) => {
            var _a, _b, _c;
            const code = this.currencies.filter((x) => x.currencyCode == currency);
            let filteredCurrency = code[0].currencyCode;
            const rate = (_a = res === null || res === void 0 ? void 0 : res.rates) === null || _a === void 0 ? void 0 : _a[filteredCurrency];
            this.slideOneForm.get('exchangeRate').patchValue(rate);
            console.log("tAmount", this.transAmount);
            if (!isNaN(Number(this.transAmount))) {
                let updatedAmount = (Number(this.transAmount) * Number((_b = this.slideOneForm.get('exchangeRate')) === null || _b === void 0 ? void 0 : _b.value)) + this.chargeAmount;
                if (!isNaN(Number(updatedAmount))) {
                    console.log(Number(updatedAmount));
                    let formatedAmount = this.shareDataService.formatCurrency(updatedAmount, (_c = this.slideOneForm.get('transactionCurrency')) === null || _c === void 0 ? void 0 : _c.value);
                    this.slideOneForm.get('totalTransactionAmount').patchValue(formatedAmount);
                    this.cdr.markForCheck();
                }
            }
        });
        this.updateTransAmount();
    }
    updateTransAmount() {
        var _a, _b;
        console.log("Values changing??", this.transAmount);
        if (!isNaN(Number(this.transAmount))) {
            let updatedAmount = (Number(this.transAmount) * Number((_a = this.slideOneForm.get('exchangeRate')) === null || _a === void 0 ? void 0 : _a.value)) + this.chargeAmount;
            if (!isNaN(Number(updatedAmount))) {
                console.log(Number(updatedAmount));
                let formatedAmount = this.shareDataService.formatCurrency(updatedAmount, (_b = this.slideOneForm.get('transactionCurrency')) === null || _b === void 0 ? void 0 : _b.value);
                this.slideOneForm.get('totalTransactionAmount').patchValue(formatedAmount);
                this.cdr.markForCheck();
            }
        }
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_6__.BranchComponent,
                id: 'branchModal',
                componentProps: {},
            });
            modal.onDidDismiss().then((modelData) => {
                if (modelData !== null) {
                    let branch = modelData.data;
                    console.log('Modal Data for branch: ', modelData.data);
                    this.tokenCount = modelData.data.data.tokenCount;
                    this.slideOneForm
                        .get('transactionBranch')
                        .patchValue(modelData.data['data'].branchName);
                }
            });
            return yield modal.present();
        });
    }
    goToBranch() {
        this.router.navigate(['cashwithdrawal/branch']);
    }
    goToHomepage() {
        this.router.navigate(['/dashboard']);
    }
    goToNextPage(fb) {
        console.log(this.slideOneForm.value);
        this.flag = false;
    }
    goToPreviousPage() {
        this.flag = true;
    }
    goToNextScreen(form) {
        var _a, _b, _c;
        // remove this line while cleaup
        localStorage.removeItem('AppointmentDetails');
        console.log(form);
        this.api.setIndex({
            index: 'CHW',
        });
        form.transactionDate.toString();
        var date = new Date(form.transactionDate);
        console.log(date); //4/
        let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
        form.transactionDate = latest_date;
        // form.transactionCurrency = this.currencyData?.currencyCode;
        form.accountNumber = form.accountNumber;
        form.productCode = this.productCode;
        form.accountType = this.accountDetails.accountType;
        form.accountCurrency = ((_a = this.customerDetails) === null || _a === void 0 ? void 0 : _a.currencyCode) || "";
        form.customerId = this.customerId;
        console.log(this.routerData);
        if (this.editMode) {
            form.appointmentId = (_c = (_b = this.routerData) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.appointmentId;
            form.operation = 'update';
        }
        form.tokenOrigin = 'Mobile';
        console.log(form);
        this.accountNum = form.accountNumber;
        this.transactionAmount = form.transactionAmount;
        console.log(this.transactionAmount);
        this.transDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(form.transactionDate)).format("DD-MM-YYYY").toString();
        localStorage.setItem('AccountNumber', form.accountNumber);
        localStorage.setItem('TransactionDate', this.transDate);
        localStorage.setItem('TransactionAmount', form.transactionAmount);
        localStorage.setItem('TransactionBranch', form.transactionBranch);
        console.log('after', form);
        form.isMobileTrans = true;
        // Total transaction convertion format
        let ttam = this.slideOneForm.value['totalTransactionAmount'].substring(1);
        form.totalTransactionAmount = ttam.replace(/,/g, '');
        if (this.editMode) {
            console.log('update resp -- ');
            this.api.appointmentBooking(form).subscribe((respUpdt) => {
                console.log('update resp -- ', respUpdt);
                this.cashWithdrawResponse = respUpdt;
                this.transactionId = this.cashWithdrawResponse.transactionId;
                localStorage.setItem('TransactionTime', respUpdt.transactionTime);
                localStorage.setItem('AccountNumber', respUpdt.accountId);
                localStorage.setItem('AppointmentId', respUpdt.appointmentId);
                localStorage.setItem('AppointmentDetails', JSON.stringify(respUpdt));
                if (this.cashWithdrawResponse === 200 ||
                    this.cashWithdrawResponse !== null) {
                    this.shareDataService.shareTransactionId(this.transactionId);
                    this.slideOneForm.reset();
                    this.onClick(this.cashWithdrawResponse);
                }
            });
        }
        else {
            console.log(form);
            form.transactionAmount = form.transactionAmount.toString().replace(/,/g, '');
            this.api.cashDepositSave(form).subscribe((resp) => {
                this.cashWithdrawResponse = resp;
                this.transactionId = this.cashWithdrawResponse.transactionId;
                this.appointmentId = this.cashWithdrawResponse.appointmentId;
                localStorage.setItem('AppointmentDetails', JSON.stringify(resp));
                localStorage.setItem('TransactionTime', resp.transactionTime);
                localStorage.setItem('AccountNumber', resp.accountNumber);
                localStorage.setItem('AppointmentId', resp.appointmentId);
                if (this.cashWithdrawResponse === 200 ||
                    this.cashWithdrawResponse !== null) {
                    this.shareDataService.shareTransactionId(this.transactionId);
                    this.slideOneForm.reset();
                    this.onClick(this.cashWithdrawResponse);
                }
            });
        }
    }
    onClick(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: _appointmentpopup_appointmentpopup_page__WEBPACK_IMPORTED_MODULE_9__.AppointmentpopupPage,
                componentProps: {
                    value: event,
                },
            });
            modal.onDidDismiss().then((res) => {
                this.routerData = res;
                console.log("Getting Back Data", this.routerData);
                this.flag = true;
                this.onScreenRefresh();
            });
            return yield modal.present();
        });
    }
    openToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Account Number is not existing for this customer Id',
                duration: 5000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    accountEvent(e) {
        var _a, _b;
        this.isedit = false;
        console.log('events::', e);
        let data = ((_a = e === null || e === void 0 ? void 0 : e.detail) === null || _a === void 0 ? void 0 : _a.value) ? (_b = e === null || e === void 0 ? void 0 : e.detail) === null || _b === void 0 ? void 0 : _b.value : e;
        console.log("event", data);
        this.api.accountBalance(data).subscribe((accbal) => {
            console.log(accbal);
            this.accountDetails = accbal;
            this.valueSet(accbal.currentBalance);
            this.currentBalance = accbal.amount;
            this.slideOneForm.controls.accountBalance.patchValue(accbal.amount);
            this.slideOneForm.controls.accountBranch.patchValue(accbal.accountBranch);
            localStorage.setItem('AccBranch', accbal.accountBranch);
            this.slideOneForm.controls.accountCurrency.patchValue(accbal.accountCurrency);
            if (accbal.transactionAmount != null ||
                accbal.transactionAmount != undefined) {
                this.numberOnlyValidation(accbal.transactionAmount);
            }
            if (accbal.lastTransactions != null) {
                if (accbal.lastTransactions.length <= 2) {
                    this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch);
                }
                else {
                    var brnCnt = 0;
                    var brnOldCnt = 0;
                    console.log('Else', accbal.lastTransactions);
                    for (var i = 0; i < accbal.lastTransactions.length; i++) {
                        if (accbal.lastTransactions[i].transactionBranch != null) {
                            for (var n = 0; n < accbal.lastTransactions.length; n++) {
                                if (accbal.lastTransactions[n].transactionBranch != null) {
                                    if (accbal.lastTransactions[i].transactionBranch ===
                                        accbal.lastTransactions[n].transactionBranch) {
                                        brnCnt = brnCnt + 1;
                                    }
                                }
                            }
                        }
                        if (brnOldCnt < brnCnt && brnCnt >= 2) {
                            this.trnBrn = accbal.lastTransactions[i].transactionBranch;
                            brnOldCnt = brnCnt;
                            console.log('yhjghguuyjgh');
                        }
                        brnCnt = 0;
                    }
                    if (this.trnBrn != null && this.trnBrn !== accbal.accountBranch) {
                        console.log(this.trnBrn);
                        this.slideOneForm.controls.branchFlag.patchValue(false);
                        this.slideOneForm.controls.transactionBranch.patchValue(this.trnBrn);
                        console.log(localStorage.getItem('BranchFlag'));
                        this.brnflg = localStorage.getItem('BranchFlag');
                        this.brnflg = false;
                        this.nearestBrn = true;
                    }
                    else {
                        this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch);
                        this.nearestBrn = false;
                        this.brnflg = true;
                        console.log(this.nearestBrn);
                    }
                }
            }
            else {
                this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch);
                this.nearestBrn = false;
            }
        });
    }
    valueSet(currentBalance) {
        this.currentBalance = currentBalance;
    }
    upsertAccount(filteredResponseSavingAccount) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.users = filteredResponseSavingAccount.custAccount;
        this.customerId = filteredResponseSavingAccount.customerId;
        this.curr = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.getCurrencySymbol)(filteredResponseSavingAccount.custAccount[0].accountCurrency, 'narrow');
        this.currentBalance = this.users[0].amount;
        this.selectedCountryCode = this.selectedCurrency.countryCode.toLowerCase();
        (_a = this.slideOneForm.get('transactionCurrency')) === null || _a === void 0 ? void 0 : _a.patchValue(this.selectedCurrency.currencyCode);
        if (this.editMode) {
            const data = (_b = this.routerData) === null || _b === void 0 ? void 0 : _b.data;
            console.log("populate", data);
            (_c = this.slideOneForm.get('accountNumber')) === null || _c === void 0 ? void 0 : _c.patchValue(data === null || data === void 0 ? void 0 : data.accountNumber);
            (_d = this.slideOneForm.get('accountCurrency')) === null || _d === void 0 ? void 0 : _d.patchValue(data === null || data === void 0 ? void 0 : data.accountCurrency);
            (_e = this.slideOneForm.get('exchangeRate')) === null || _e === void 0 ? void 0 : _e.patchValue(data === null || data === void 0 ? void 0 : data.exchangeRate);
            (_f = this.slideOneForm.get('transactionAmount')) === null || _f === void 0 ? void 0 : _f.patchValue(data === null || data === void 0 ? void 0 : data.transactionAmount);
            let formatedAmount = this.shareDataService.formatCurrency(data === null || data === void 0 ? void 0 : data.totalTransactionAmount, data === null || data === void 0 ? void 0 : data.transactionCurrency);
            this.slideOneForm.get('totalTransactionAmount').patchValue(formatedAmount);
            (_g = this.slideOneForm.get('transactionBranch')) === null || _g === void 0 ? void 0 : _g.patchValue(data === null || data === void 0 ? void 0 : data.transactionBranch);
            (_h = this.slideOneForm.get('transactionDate')) === null || _h === void 0 ? void 0 : _h.patchValue(data === null || data === void 0 ? void 0 : data.transactionDate);
            (_j = this.slideOneForm.get('transactionTime')) === null || _j === void 0 ? void 0 : _j.patchValue(data === null || data === void 0 ? void 0 : data.transactionTime);
            (_k = this.slideOneForm.get('remarks')) === null || _k === void 0 ? void 0 : _k.patchValue(data === null || data === void 0 ? void 0 : data.remarks);
            this.getChargeDetails();
        }
        else {
            if (this.accountInfo.accountId != null) {
                this.getChargeDetails();
                this.slideOneForm.get('accountNumber').patchValue(this.accountInfo.accountId);
            }
            else {
                this.slideOneForm.get('accountNumber').patchValue(this.users[0].accountId);
            }
            this.accountflag = this.users.length == 1 ? true : false;
            this.slideOneForm.controls.accountBranch.patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
            this.slideOneForm.get('transactionBranch').patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        }
        this.cdr.markForCheck();
    }
    getChargeDetails() {
        this.api.getChargeDetails(this.accountInfo.accountId).subscribe(resp => {
            var _a, _b;
            this.chargeAmount = (_a = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _a === void 0 ? void 0 : _a.amount;
            this.slideOneForm.get('totalChargeAmount').patchValue((_b = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _b === void 0 ? void 0 : _b.amount);
        }, err => console.log('Error: ', err));
    }
    showToast(errorMessage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${errorMessage}`,
                duration: 5000,
                position: 'bottom',
            });
            toast.present();
        });
    }
    // Only Integer Numbers
    keyPressNumbers(event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        // Only Numbers 0-9
        if ((charCode < 48 || charCode > 57)) {
            event.preventDefault();
            return false;
        }
        else {
            return true;
        }
    }
    gettingAvailableSlots() {
        console.log(this.slideOneForm.controls.transactionDate.value);
        // let date=new Date()
        if (this.slideOneForm.controls.transactionDate.value != null) {
            let date = this.datepipe.transform(this.slideOneForm.controls.transactionDate.value, 'yyyy-MM-dd');
            let date1 = this.datepipe.transform(date, 'yyyy-MM-dd');
            console.log('here in slots', date1);
            this.api.gettingAvailableSlots(date1).subscribe((resp) => {
                console.log(resp);
                this.timeSlots = resp;
            });
        }
        else {
            return;
        }
    }
    onSelectiongTimeSlots(event, data) {
        this.slideOneForm.get('transactionTime').patchValue(data);
        console.log(this.slideOneForm.value);
        if (this.selectAbleColor === 'secondary') {
            this.selectAbleColor = 'primary';
        }
        else {
            this.selectAbleColor = 'secondary';
        }
    }
    format24HrsTo12Hrs(time) {
        var formatted = moment__WEBPACK_IMPORTED_MODULE_4__(time, 'HH:mm').format('LT');
        return formatted;
    }
    previous1() {
        this.router.navigate(['dashboard']);
    }
    openPopup() {
        console.log("popup");
        this.modalController.create({
            component: src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_8__.TimeSlotsComponent,
            componentProps: {
                date: this.slideOneForm.get('transactionDate').value
            }
        }).then(modalResp => {
            modalResp.present();
            modalResp.onDidDismiss().then(res => {
                if (res.data != null) {
                    console.log(res);
                    this.slideOneForm.get('transactionTime').patchValue(res.data);
                }
            });
        });
    }
};
CashwithdrawalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ToastController },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef }
];
CashwithdrawalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-cashwithdrawal',
        template: _cashwithdrawal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cashwithdrawal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CashwithdrawalPage);



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

/***/ 4664:
/*!**************************************************************************!*\
  !*** ./src/app/pages/cashwithdrawal/cashwithdrawal.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".transactionAmounterrormsg {\n  color: red;\n  font-size: small;\n  padding-top: 7px;\n}\n\n.box {\n  font-weight: bold;\n  border-width: thin;\n  border-radius: 13px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  width: 100%;\n  height: 55px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.box ion-datetime {\n  font-weight: bold;\n}\n\n.chequeCard {\n  border-width: thin;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  width: 95%;\n  height: 100px;\n  display: inline-block;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.inputCard {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  position: relative;\n}\n\n.inputCard1 {\n  padding-top: 5px;\n}\n\n.inputCard1 ion-label {\n  letter-spacing: 0.5px;\n}\n\n.inputCard2 {\n  padding-top: 5px;\n}\n\n.inputCard2 ion-label {\n  letter-spacing: 0.5px;\n}\n\n.inputCard2 .box {\n  margin: 10px 0;\n}\n\n.textCard {\n  padding-left: 5%;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.icondate {\n  display: inline-block;\n}\n\nion-searchbar {\n  background-color: #f9fafb;\n}\n\nion-select {\n  font-family: \"Montserrat\" !important;\n  font-size: 14pt;\n  font-weight: bold;\n  letter-spacing: 0.4px;\n}\n\nion-text {\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-button {\n  width: 100%;\n  padding-left: 5%;\n  padding-right: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-input {\n  color: black !important;\n  font-size: 12pt;\n  font-weight: bold;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n  padding-left: 15px !important;\n}\n\nion-label {\n  font-size: 16px;\n}\n\nion-back-button {\n  color: rgb(73, 73, 226);\n  margin-bottom: 5%;\n  font-size: larger;\n  text-transform: none;\n}\n\nion-item::part(native)::transaction-currency {\n  padding-left: 0px !important;\n}\n\nion-toolbar {\n  margin-top: 7%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  padding-bottom: 3%;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: larger;\n  padding-top: 5px;\n  padding-left: 0px;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.box7 .box {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n\n.backIcon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ioncontent {\n  height: 110%;\n  margin-top: -3%;\n}\n\n.ioncontent1 {\n  height: 135%;\n}\n\n.currency_row {\n  display: flex;\n  width: 100%;\n}\n\n.currency_row ion-select {\n  width: 100%;\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477c6;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\n.crowdsCount {\n  margin-left: 1cm;\n}\n\nion-header ion-buttons {\n  color: rgb(73, 73, 226);\n}\n\nion-header span {\n  font-weight: bold;\n}\n\nion-back-button {\n  color: #3477c6;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.info_btn {\n  position: absolute;\n  right: 2%;\n  top: 22%;\n  color: #000;\n  font-size: 18px;\n  font-weight: 700;\n  border: 2px solid #000;\n  border-radius: 7px;\n  padding: 0 10px;\n  z-index: 2;\n}\n\n:host ::ng-deep .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0 !important;\n}\n\n:host ::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\nion-popover.trans-pop::part(content) {\n  --width: 275px !important;\n  border-radius: 10px !important;\n  --offset-x: -10px !important;\n}\n\nion-popover.trans-pop,\n.popover-arrow::after {\n  --background: #004C97 !important;\n}\n\nion-content.transpopover {\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2h3aXRoZHJhd2FsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUVFO0VBQ0UsaUJBQUE7QUFBSjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFJRTtFQUlFLHFCQUFBO0FBTEo7O0FBU0E7RUFDRSxnQkFBQTtBQU5GOztBQVFFO0VBSUUscUJBQUE7QUFUSjs7QUFZRTtFQUNFLGNBQUE7QUFWSjs7QUFjQTtFQUVFLGdCQUFBO0FBWkY7O0FBb0JBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFqQkY7O0FBcUJBO0VBQ0UsZ0JBQUE7QUFsQkY7O0FBc0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBbkJGOztBQXNCQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQW5CRjs7QUFzQkE7RUFDRSxxQkFBQTtBQW5CRjs7QUFzQkE7RUFDRSx5QkFBQTtBQW5CRjs7QUFzQkE7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBbkJGOztBQXNCQTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUVBLG9DQUFBO0VBQ0EsNkJBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsZUFBQTtBQXBCRjs7QUF1QkE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQXBCRjs7QUF1QkE7RUFDRSw0QkFBQTtBQXBCRjs7QUF1QkE7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQXBCRjs7QUF1QkE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBcEJGOztBQXVCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBcEJGOztBQXdCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUF0Qko7O0FBMEJBO0VBQ0UsbUJBQUE7RUFFQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsWUFBQTtBQXhCRjs7QUEyQkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQXhCRjs7QUEwQkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUF4Qko7O0FBNEJBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FBekJGOztBQTRCQTtFQUNFLGdCQUFBO0FBekJGOztBQXVDRTtFQUNFLHVCQUFBO0FBcENKOztBQXdDRTtFQUNFLGlCQUFBO0FBdENKOztBQTBDQTtFQUNFLGNBQUE7QUF2Q0Y7O0FBMENBO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUF2Q0Y7O0FBMENBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUF2Q0Y7O0FBMENBO0VBQ0Usb0JBQUE7QUF2Q0Y7O0FBMENBO0VBQ0UsNEJBQUE7QUF2Q0Y7O0FBMENBO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0FBdkNGOztBQTJDQTs7RUFFRSxnQ0FBQTtBQXhDRjs7QUEyQ0E7RUFDRSxzREFBQTtFQUNBLGdCQUFBO0FBeENGIiwiZmlsZSI6ImNhc2h3aXRoZHJhd2FsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc2FjdGlvbkFtb3VudGVycm9ybXNnIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgcGFkZGluZy10b3A6IDdweDtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG5cclxuICBpb24tZGF0ZXRpbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hlcXVlQ2FyZCB7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI2QzZDNkMztcclxuICB3aWR0aDogOTUlO1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiA0JTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG59XHJcblxyXG4uaW5wdXRDYXJkIHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbnB1dENhcmQxIHtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgLy8gY29sb3I6ICM0NDQ7XHJcbiAgICAvLyBmb250LXNpemU6IDE2cHg7XHJcbiAgICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dENhcmQyIHtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgLy8gY29sb3I6ICM0NDQ7XHJcbiAgICAvLyBmb250LXNpemU6IDE2cHg7XHJcbiAgICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB9XHJcblxyXG4gIC5ib3gge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dENhcmQge1xyXG4gIC8vIHBhZGRpbmctdG9wOiAtNiU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuLy8gIC5sYWJlbENhcmR7XHJcbi8vICAgICAgY29sb3I6IGdyYXk7XHJcbi8vICAgICAgLy9mb250LXNpemU6IDIwcHg7XHJcbi8vICB9XHJcblxyXG4udW5kZXJsaW5lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDQlO1xyXG59XHJcblxyXG4uaW9uLXBhZGRpbmctdG9wIHtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIC8vIHBhZGRpbmctbGVmdDogMyU7XHJcbn1cclxuXHJcbi5pb24tcGFkZGluZy10b3AyIHtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmNhbmNlbGNhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWxlZnQ6IDQ0JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5iYWNrY2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDglO1xyXG4gIHBhZGRpbmctbGVmdDogNDclO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmljb25kYXRlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmlvbi1zZWFyY2hiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRwdDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbn1cclxuXHJcbmlvbi10ZXh0IHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgb3BhY2l0eTogNzUlO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gIGNvbG9yOiByZ2IoNzMsIDczLCAyMjYpO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG5pb24taXRlbTo6cGFydChuYXRpdmUpOjp0cmFuc2FjdGlvbi1jdXJyZW5jeSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIG1hcmdpbi10b3A6IDclO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcblxyXG5uZ3gtZmxhZy1waWNrZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJveDcge1xyXG4gIHBhZGRpbmctdG9wOiAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG5cclxuICAvLyBtYXJnaW4tbGVmdDogMTBweDtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgLmJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxufVxyXG5cclxuLmJhY2tJY29uIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIC8vIGNvbG9yOiBibHVlO1xyXG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmlvbmNvbnRlbnQge1xyXG4gIGhlaWdodDogMTEwJTtcclxuICBtYXJnaW4tdG9wOiAtMyU7XHJcbn1cclxuXHJcbi5pb25jb250ZW50MSB7XHJcbiAgaGVpZ2h0OiAxMzUlO1xyXG59XHJcblxyXG4uY3VycmVuY3lfcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBpb24tc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiAjMzQ3N2M2O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNyb3dkc0NvdW50IHtcclxuICBtYXJnaW4tbGVmdDogMWNtO1xyXG59XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4vLyAgIC5pb25jb250ZW50e1xyXG4vLyAgICAgaGVpZ2h0OiAxMzAlO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogLTMlO1xyXG4vLyAgIH1cclxuLy8gICAuaW9uY29udGVudDF7XHJcbi8vICAgICBoZWlnaHQ6IDE2NSU7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5pb24taGVhZGVyIHtcclxuICBpb24tYnV0dG9ucyB7XHJcbiAgICBjb2xvcjogcmdiKDczLCA3MywgMjI2KTtcclxuICAgIC8vIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gIGNvbG9yOiAjMzQ3N2M2O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICBjb2xvcjogcmdiKDcwLCAxMTEsIDI1NCk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5pbmZvX2J0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyJTtcclxuICB0b3A6IDIyJTtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1wb3BvdmVyLnRyYW5zLXBvcDo6cGFydChjb250ZW50KSB7XHJcbiAgLS13aWR0aDogMjc1cHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLS1vZmZzZXQteDogLTEwcHggIWltcG9ydGFudDtcclxuICAvLyAtLW9mZnNldC15OiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXBvcG92ZXIudHJhbnMtcG9wLFxyXG4ucG9wb3Zlci1hcnJvdzo6YWZ0ZXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzAwNEM5NyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY29udGVudC50cmFuc3BvcG92ZXIge1xyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxQTJELCAjMDA0Qzk3KTtcclxuICAtLWNvbG9yOiAjZmZmZmZmO1xyXG59Il19 */";

/***/ }),

/***/ 81537:
/*!**************************************************************************!*\
  !*** ./src/app/pages/cashwithdrawal/cashwithdrawal.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <app-operation [title] = \"cashWithdrawal\"></app-operation> -->\r\n<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"flag\" class=\"ion-padding\">\r\n  <div>\r\n    <!-- <form [formGroup]=\"slideOneForm\" [disabled]=\"customerDetails.custAccount.status !== 'APPROVED'\"> -->\r\n    <form *ngIf=\"slideOneForm\" [formGroup]=\"slideOneForm\">\r\n\r\n      <ion-item fill=\"outline\" class=\"my-1\">\r\n        <ion-label position=\"floating\" class=\"t-20\">Account Number*</ion-label>\r\n        <ion-select *ngIf=\"!accountflag\" [compareWith]=\"compareWith\" interface=\"popover\"\r\n          [interfaceOptions]=\"{'cssClass': 'wider-popover-acc-num'}\" formControlName=\"accountNumber\"\r\n          (ionChange)=\"accountEvent($event)\" ngDefaultControl>\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\">{{user.accountId}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-input mode=\"ios\" *ngIf=\"accountflag\" formControlName=\"accountNumber\" type=\"text\" readonly\r\n          (ionChange)=\"accountEvent($event)\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n\r\n      <div class=\"inputCard1 my-3\">\r\n        <ion-label position=\"stacked\">Account Balance : {{curr }} {{currentBalance}}</ion-label>\r\n      </div>\r\n\r\n      <div class=\"inputCard1 my-3\">\r\n        <ion-label position=\"stacked\">Account Branch :\r\n          {{slideOneForm.controls.accountBranch.value}}</ion-label>\r\n      </div>\r\n\r\n      <div class=\"inputCard1 my-3\">\r\n        <ion-label position=\"stacked\">Account Currency :\r\n          {{slideOneForm.controls.accountCurrency.value}}</ion-label>\r\n      </div>\r\n\r\n      <mat-form-field class=\"full-width\" appearance=\"outline\" class=\"my-2\" style=\"width: 100%;\">\r\n        <mat-label>Transaction Currency</mat-label>\r\n        <mat-select [(ngModel)]=\"transactionCurrency\" (ngModelChange)=\"selectCurrencyCode($event)\"\r\n          [ngModelOptions]=\"{standalone: true}\" formControlName=\"transactionCurrency\">\r\n          <mat-select-trigger class=\"selection-text\">\r\n            <ngx-flag-picker [selectedCountryCode]=\"selectedCountryCode\" [showFlags]=\"isShow\" [showLabels]=\"!isShow\"\r\n              [showArrow]=\"!isShow\" slot=\"start\">\r\n            </ngx-flag-picker>\r\n            <span class=\"selection-text\">\r\n              {{ slideOneForm.get('transactionCurrency')?.value }}\r\n            </span>\r\n          </mat-select-trigger>\r\n\r\n          <mat-option *ngFor=\"let currency of currencies\" [value]=\"currency.currencyCode\">\r\n            {{currency.currencyCode}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"full-width\" appearance=\"outline\" class=\"my-3\" style=\"width: 100%;\">\r\n        <mat-label>Transaction Amount</mat-label>\r\n        <input matInput type=\"text\" mvndrMatCurrencyFormat (keyup)=\"updateTransAmount()\"\r\n          [currencyCode]=\"slideOneForm.get('transactionCurrency')?.value\" [(ngModel)]=\"transAmount\"\r\n          formControlName=\"transactionAmount\" (keyup)=\"numberOnlyValidation($event)\"\r\n          (keypress)=\"keyPressNumbers($event)\"\r\n          #tsm>\r\n        <mat-error *ngIf=\"transAmt > currentBalance\">\r\n          Transaction Amount cannot be greater than Account\r\n          Balance\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n\r\n      <ion-item fill=\"outline\" class=\"my-3\"\r\n        *ngIf=\"selectedCountryCode && !slideOneForm.get('accountCurrency').value.toLowerCase().includes(selectedCountryCode)\">\r\n        <ion-label position=\"floating\">Exchange Rate</ion-label>\r\n        <ion-input placeholder=\"Exchange Rate\" formControlName=\"exchangeRate\" name=\"exchangeRate\" ngDefaultControl\r\n          readonly=\"true\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item fill=\"outline\" class=\"my-3\">\r\n        <ion-label position=\"floating\">Total Charge Amount*</ion-label>\r\n        <ion-input placeholder=\"Total Charge Amount\" name=\"chargeAMount\" formControlName=\"totalChargeAmount\"\r\n          name=\"totalchargeAmount\" ngDefaultControl readonly=\"true\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item fill=\"outline\" class=\"my-3\">\r\n        <ion-label position=\"floating\">Total Transaction Amount*</ion-label>\r\n        <ion-input placeholder=\"Placeholder\" placeholder=\"Total Transaction Amount\"\r\n          formControlName=\"totalTransactionAmount\" ngDefaultControl readonly=\"true\" required></ion-input>\r\n        <span class=\"info_btn\" id=\"bottom-start\">i</span>\r\n        <ion-popover mode=\"ios\" size=\"auto\" arrow=\"true\" trigger=\"bottom-start\" side=\"bottom\" alignment=\"center\"\r\n          class=\"trans-pop\" reference=\"bottom-start\">\r\n          <ng-template>\r\n            <ion-content class=\"ion-padding transpopover\">\r\n              <p>Transaction Amount: {{ slideOneForm.get('transactionCurrency')?.value == 'INR' ? '₹' : '$' }}\r\n                {{ transAmount }} </p>\r\n              <p>Total Charge Amount:{{ slideOneForm.get('transactionCurrency')?.value == 'INR' ? '₹' : '$' }}\r\n                {{ slideOneForm.get('totalChargeAmount')?.value }}</p>\r\n              <hr style=\"background: #ffffff;\">\r\n              <p>Total Transaction Amount: {{ slideOneForm.get('totalTransactionAmount')?.value }}</p>\r\n            </ion-content>\r\n          </ng-template>\r\n        </ion-popover>\r\n      </ion-item>\r\n\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\"\r\n            [disabled]=\"validateDisablebutton('disable1') ||!transAmount  || submitted ||   transAmt > currentBalance\"\r\n            (click)=\"goToNextPage()\">Next</ion-button>\r\n          <!-- [disabled]=\"validateDisablebutton('disable1') ||!transAmount  || submitted ||  currentBalance < slideOneForm.controls['transactionAmount'].value\" -->\r\n        </div>\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black\" (click)=\"goToHomepage()\">Cancel\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar>\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToPreviousPage()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!flag\" class=\"ion-padding\">\r\n  <div>\r\n    <form *ngIf=\"slideOneForm\" [formGroup]=\"slideOneForm\">\r\n\r\n\r\n      <div style=\"margin-left: 19px; margin-top: 19px; margin-right: 19px\">\r\n        <ion-label>Do you wish to perform this transaction in your home\r\n          branch?</ion-label>\r\n        <!-- <ion-label></ion-label> -->\r\n        <ion-radio-group name=\"branchFlags\" formControlName=\"branchFlag\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"start\">Yes</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagYes\" [value]=\"true\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label>No</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagNo\" [value]=\"false\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-router-link (click)=\"presentModal()\" [hidden]=\"!nearestBrn\" class=\"underline\">Click here to find the\r\n          nearest branch</ion-router-link>\r\n      </div>\r\n      <br />\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction Branch*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input appearence=\"none\" formControlName=\"transactionBranch\"\r\n              [readonly]=\"slideOneForm.get('branchFlag').value ? true : false\">\r\n            </ion-input>\r\n            <ion-icon *ngIf=\"slideOneForm.get('branchFlag').value == true\" name=\"home-outline\" color=\"primary\"\r\n              slot=\"end\"></ion-icon>\r\n            <ion-icon *ngIf=\"slideOneForm.get('branchFlag').value == false\" name=\"navigate-circle-outline\"\r\n              color=\"primary\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-note style=\"color: red; margin-left: 22px; top: 13px\"\r\n          *ngIf=\"f.transactionBranch.errors?.required && f.transactionBranch.touched\">\r\n          <small>Transaction Branch Required</small>\r\n        </ion-note>\r\n      </div>\r\n      <div class=\"inputCard2\">\r\n        <ion-label> Number of Crowds : {{ tokenCount || '0' }} </ion-label>\r\n      </div>\r\n\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction date*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-datetime-button datetime=\"datetime\" showTimeLabel=\"false\"></ion-datetime-button>\r\n            <ion-modal [keepContentsMounted]=\"true\">\r\n              <ng-template>\r\n                <ion-datetime presentation=\"date\" id=\"datetime\" [min]=\"minDate\" [max]=\"maxDate\"\r\n                  formControlName=\"transactionDate\" displayFormat=\"DDD. MMM DD, YY\" [showDefaultTitle]=\"true\"\r\n                  [showDefaultButtons]=\"true\" #datetime>\r\n                </ion-datetime>\r\n              </ng-template>\r\n            </ion-modal>\r\n            <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Time Slot*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input formControlName=\"transactionTime\" [readonly]=\"true\"></ion-input>\r\n            <ion-icon name=\"alarm-outline\" slot=\"end\" (click)=\"openPopup()\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n\r\n      <div class=\"inputCard2\" *ngIf=\"title == 'Cash Withdrawal' || title =='Cash Deposit'\">\r\n        <ion-label position=\"stacked\">Remark</ion-label>\r\n        <ion-input class=\"chequeCard\" formControlName=\"remarks\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" [disabled]=\"validateDisablebutton('disable2')  || submitted1\"\r\n            (click)=\"goToNextScreen(slideOneForm.value)\">Next</ion-button>\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black\" (click)=\"goToPreviousPage()\">Back\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cashwithdrawal_cashwithdrawal_module_ts.js.map