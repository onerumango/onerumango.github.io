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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cashwithdrawal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cashwithdrawal-routing.module */ 15616);
/* harmony import */ var _cashwithdrawal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cashwithdrawal.page */ 43148);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-flag-picker */ 96801);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);










let CashwithdrawalPageModule = class CashwithdrawalPageModule {
};
CashwithdrawalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cashwithdrawal_routing_module__WEBPACK_IMPORTED_MODULE_0__.CashwithdrawalPageRoutingModule,
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_8__.NgxFlagPickerModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
        declarations: [_cashwithdrawal_page__WEBPACK_IMPORTED_MODULE_1__.CashwithdrawalPage],
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
        //transAmount:number;
        this.isedit = true;
        //transactionAmount: string;
        this.accountBranch = 'Loita street';
        this.flag = true;
        this.users = [];
        this.selectAbleColor = 'secondary';
        this.trnBrn = null;
        this.accountflag = false;
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
        this.getCountrynameValues();
        if (this.router.getCurrentNavigation() != null) {
            this.routerData = this.router.getCurrentNavigation().extras.state;
        }
        this.customerId = sessionStorage.getItem('customer_id');
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.slideOneForm = this.fb.group({
            transactionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            customerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            productCode: ['CHW', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            tokenOrigin: ['Mobile', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            accountBalance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            branchFlag: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            accountBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            transactionDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            isMobileTrans: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            transactionTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            exchangeRate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
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
        });
        console.log(this.slideOneForm.value);
        this.loadData();
        this.slideOneForm.get('branchFlag').valueChanges.subscribe((val) => {
            console.log('branch flag? val', val);
            console.log('branch flag?', this.brnflg);
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
                // this.slideOneForm.controls.transactionBranch.patchValue(this.trnBrn);
                this.accBranch = localStorage.getItem('AccBranch');
                console.log(this.accBranch);
                this.slideOneForm.controls.transactionBranch.patchValue(this.accBranch);
                // this.slideOneForm.get('transactionBranch').patchValue(this.customerDetails.custAccount[0].accountBranch);
            }
            if (this.brnflg == true && val == false) {
                this.slideOneForm.controls.transactionBranch.patchValue(this.accBranch);
                this.nearestBrn = true;
            }
        });
        this.shareDataService.getAccountInfo.subscribe((data) => {
            var _a;
            this.accountInfo = data;
            console.log(data);
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
    }
    loadData() {
        this.loading.present();
        this.api.custpomerDetails(this.phoneNumber).subscribe((resp) => {
            this.loading.dismiss();
            resp.custAccount = resp.custAccount.filter((card) => card.status === 'APPROVED');
            console.log('backend resp in home', resp);
            this.customerDetails = resp;
            console.log(this.customerDetails);
            this.savingAccountFun(resp);
        }, (err) => {
            this.loading.dismiss();
        });
    }
    get f() {
        return this.slideOneForm.controls;
    }
    getCountrynameValues() {
        this.api.getCurrencyValues().subscribe((allCurrencyValues) => {
            this.currencies = allCurrencyValues;
            console.log(this.currencies);
        });
    }
    numberOnlyValidation(event) {
        this.transAmt = event.target.value;
        this.IntValue = Math.floor(this.slideOneForm.value.transactionAmount).toString().length;
        // if (this.IntValue > 3) {
        if (this.IntValue > 1) {
            let value;
            value = this.slideOneForm.value.transactionAmount;
            //let inputChar = String.fromCharCode(event.charCode);
            // debugger;
            this.transAmount = value;
            // debugger
            const pattern = value;
            let lastCharIsPoint = false;
            if (pattern.charAt(pattern.length - 1) === '.') {
                lastCharIsPoint = true;
            }
            const num = pattern.replace(/[^0-9.]/g, '');
            this.transAmt = Number(num);
            this.transAmount = this.transAmt.toLocaleString('en-US');
            if (lastCharIsPoint) {
                this.transAmount = this.transAmount.concat('.');
            }
            this.cdr.markForCheck();
        }
        // console.log(this.transAmt);
        console.log(this.currentBalance);
        // console.log(this.transAmt);
        this.transAmt = (this.transAmt + '').replace(/,/g, '');
        console.log(this.transAmt);
        if (parseFloat(this.currentBalance) < parseFloat(this.transAmt)) {
            console.log('Bigger');
            this.openToast1();
            // this.snack.open(`Transaction Amount should not exceed than Account Balance`, 'OK', {
            //   duration: 2000,
            //   verticalPosition: 'middle',
            //   horizontalPosition: 'right'
            // });
        }
        // this.slideOneForm.controls['transactionAmount'].setValidators();
        else {
            return;
        }
    }
    openToast1() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Transaction Amount should not exceed than Account Balance',
                duration: 2000,
                position: 'middle',
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
    selectCurrencyCode(currency) {
        var _a;
        console.log(currency);
        console.log(this.currencyData);
        console.log(this.currencies);
        this.currencyData = this.currencies.find((x) => x.currencyCode == currency);
        this.selectedCountryCode = this.currencyData.countryCode.toLowerCase();
        this.currencyData =
            this.currencies && this.currencies.find((x) => x.countryCode == currency);
        this.selectedCountryCode =
            this.currencyData && ((_a = this.currencyData) === null || _a === void 0 ? void 0 : _a.countryCode.toLowerCase());
        console.log(this.selectedCountryCode);
        if (this.routerData) {
            // this.selectedCountryCode =
            //   this.routerData.data.transactionCurrency.toLowerCase();
            this.slideOneForm.controls.transactionCurrency.patchValue(this.routerData.data.transactionCurrency);
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
        this.flag = false;
    }
    goToPreviousPage() {
        this.flag = true;
    }
    goToNextScreen(form) {
        var _a;
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
        // form.transactionTime=format(new Date(form.transactionTime), "HH:mm");
        this.currencyData = this.currencies.find((x) => x.countryCode == form.transactionCurrency);
        form.transactionCurrency = this.currencyData.currencyCode;
        form.accountNumber = form.accountNumber;
        form.productCode = this.productCode;
        form.accountCurrency = ((_a = this.customerDetails) === null || _a === void 0 ? void 0 : _a.currencyCode) || "";
        // form.transactionTime = this.format24HrsTo12Hrs(form.transactionTime);
        // form.transactionTime = format(new Date(form.transactionTime), 'hh:mm:ss a');
        form.customerId = this.customerId;
        if (this.routerData) {
            form.appointmentId = this.routerData.data.appointmentId;
            form.operation = 'update';
        }
        form.tokenOrigin = 'Mobile';
        console.log(form);
        this.accountNum = form.accountNumber;
        this.transactionAmount = form.transactionAmount;
        console.log(this.transactionAmount);
        this.transDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(form.transactionDate))
            .format('DD-MM-YYYY')
            .toString();
        localStorage.setItem('AccountNumber', form.accountNumber);
        localStorage.setItem('TransactionDate', this.transDate);
        localStorage.setItem('TransactionAmount', form.transactionAmount);
        console.log(this.transactionAmount);
        console.log(form);
        localStorage.setItem('TransactionBranch', form.transactionBranch);
        console.log(form);
        console.log('after', form);
        form.isMobileTrans = true;
        // this.format24HrsTo12Hrs(form.transactionTime);
        if (this.routerData) {
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
                    // this.router.navigate([
                    //   'appointmentpopup',
                    //   { transactionId: this.transactionId },
                    // ]);
                    console.log('transactionId::', this.transactionId);
                }
            });
        }
        else {
            form.transactionAmount = form.transactionAmount.toString().replace(/,/g, '');
            this.api.cashDepositSave(form).subscribe((resp) => {
                console.log('backend resp', resp);
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
                    // this.shareDataService.shareAppointmentId(this.appointmentId);
                    this.slideOneForm.reset();
                    this.onClick(this.cashWithdrawResponse);
                    // this.router.navigate([
                    //   'appointmentpopup',
                    //   { appointmentId: this.appointmentId },
                    // ]);
                    console.log('transactionId::', this.appointmentId);
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
                console.log(this.routerData);
                this.flag = true;
                // this.router.getCurrentNavigation().extras.state=res;
                this.ngOnInit();
            });
            return yield modal.present();
        });
    }
    openToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Account Number is not existing for this customer Id',
                duration: 5000,
                position: 'middle',
            });
            toast.present();
        });
    }
    accountEvent(event) {
        this.isedit = false;
        console.log('events::', event);
        console.log('events details::', event.detail);
        console.log('event', event.detail.value);
        this.api.accountBalance(event.detail.value).subscribe((accbal) => {
            this.accountDetails = accbal;
            // console.log('backend accbal', accbal.lastTransactions);
            this.valueSet(accbal.currentBalance);
            // console.log('backend accbal', accbal);
            // console.log(this.slideOneForm.controls.transactionCurrency);
            this.currentBalance = accbal.amount;
            this.slideOneForm.controls.accountBalance.patchValue(accbal.amount);
            this.slideOneForm.controls.accountBranch.patchValue(accbal.accountBranch);
            localStorage.setItem('AccBranch', accbal.accountBranch);
            // console.log(this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch));
            // console.log(accbal);
            // this.slideOneForm.controls.transactionCurrency.patchValue(accbal.accountCurrency);
            //debugger;
            // console.log(accbal.transactionAmount);
            if (accbal.transactionAmount != null ||
                accbal.transactionAmount != undefined) {
                this.numberOnlyValidation(accbal.transactionAmount);
            }
            // console.log('backend accbal', accbal.lastTransactions);
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
            // if (accbal.lastTransactions != null) {
            //   if (accbal.lastTransactions.length <= 2) {
            //     this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch);
            //   }
            //   else {
            //     var trnBrn = null;
            //     var brnCnt = 0;
            //     var brnOldCnt = 0;
            //     console.log("Else", accbal.lastTransactions);
            //     for (var i = 0; i < accbal.lastTransactions.length; i++) {
            //       if (accbal.lastTransactions[i].transactionBranch != null) {
            //         for (var n = 0; n < accbal.lastTransactions.length; n++) {
            //           if (accbal.lastTransactions[n].transactionBranch != null) {
            //             if (accbal.lastTransactions[i].transactionBranch === accbal.lastTransactions[n].transactionBranch) {
            //               brnCnt = brnCnt + 1;
            //             }
            //             if (accbal.lastTransactions[i].transactionBranch != accbal.lastTransactions[n].transactionBranch) {
            //               trnBrn = accbal.lastTransactions[i].accountBranch;
            //             }
            //           }
            //         }
            //       }
            //       if (brnOldCnt < brnCnt && brnCnt >= 2) {
            //         trnBrn = accbal.lastTransactions[i].transactionBranch;
            //         brnOldCnt = brnCnt;
            //       }
            //       brnCnt = 0;
            //     }
            //     if (trnBrn != null) {
            //       this.slideOneForm.controls.transactionBranch.patchValue(trnBrn);
            //     } else {
            //       this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch);
            //     }
            //   }
            // }
            // else {
            //   this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch);
            // }
            // console.log(accbal.accountCurrency.countryName);
            for (let i in this.currencies) {
                this.selectedCountryCode = this.currencies[i].countryCode.toLowerCase();
                this.slideOneForm.controls.transactionCurrency.patchValue(this.currencies[i].countryCode);
            }
            // this.selectedCountryCode = (currency.code).toLowerCase();
            // this.users=dropdown;
            //8042666041 8042666055
        });
    }
    valueSet(currentBalance) {
        this.currentBalance = currentBalance;
    }
    savingAccountFun(filteredResponseSavingAccount) {
        console.log(filteredResponseSavingAccount);
        this.users = filteredResponseSavingAccount.custAccount;
        this.customerId = filteredResponseSavingAccount.customerId;
        this.curr = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.getCurrencySymbol)(filteredResponseSavingAccount.custAccount[0].accountCurrency, 'narrow');
        this.currentBalance = this.users[0].amount;
        if (this.accountInfo.accountId != null) {
            this.slideOneForm
                .get('accountNumber')
                .patchValue(this.accountInfo.accountId);
        }
        else {
            this.slideOneForm
                .get('accountNumber')
                .patchValue(this.users[0].accountId);
        }
        console.log('user::', this.users);
        this.accountflag = this.users.length == 1 ? true : false;
        if (this.routerData) {
            this.selectedCountryCode =
                this.routerData.data.transactionCurrency.toLowerCase();
            this.slideOneForm.controls.transactionCurrency.patchValue(this.routerData.data.transactionCurrency);
        }
        else {
            this.selectedCountryCode =
                filteredResponseSavingAccount.countryCode.toLowerCase();
            this.slideOneForm.controls.transactionCurrency.patchValue(filteredResponseSavingAccount.countryCode);
            this.slideOneForm.controls.accountBranch.patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
            this.slideOneForm
                .get('transactionBranch')
                .patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        }
        if (this.routerData) {
            console.log("RouterData present", this.selectedCountryCode);
            this.slideOneForm
                .get('accountNumber').patchValue(this.routerData.data.accountNumber);
            this.slideOneForm
                .get('transactionAmount').patchValue(this.routerData.data.transactionAmount);
            // console.log(this.selectedCountryCode , this.routerData.data.transactionCurrency);
            // this.slideOneForm
            //   .get('transactionCurrency').patchValue(this.routerData.data.transactionCurrency);
            this.slideOneForm
                .get('transactionBranch').patchValue(this.routerData.data.transactionBranch);
            this.slideOneForm
                .get('transactionDate').setValue(this.routerData.data.transactionDate);
            this.slideOneForm
                .get('transactionTime').patchValue(this.routerData.data.transactionTime);
        }
        this.cdr.markForCheck();
    }
    showToast(errorMessage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${errorMessage}`,
                duration: 5000,
                position: 'middle',
            });
            toast.present();
        });
    }
    gettingAvailableSlots() {
        console.log('here in availabel slotshhhhhhhh');
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
        console.log('hitting', data);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_8__.TimeSlotsComponent,
                componentProps: {
                    date: this.slideOneForm.get('transactionDate').value,
                },
            });
            modal.present();
            const { data } = yield modal.onWillDismiss();
            console.log("DAta from modal close", data);
            if (data != null) {
                console.log("selected time", data);
                this.slideOneForm.get('transactionTime').patchValue(data);
            }
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

/***/ 4664:
/*!**************************************************************************!*\
  !*** ./src/app/pages/cashwithdrawal/cashwithdrawal.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.transactionAmounterrormsg {\n  color: red;\n  font-size: small;\n  padding-top: 7px;\n}\n\n.box {\n  font-weight: bold;\n  border-width: thin;\n  border-radius: 13px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  width: 100%;\n  height: 55px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.box ion-datetime {\n  font-weight: bold;\n}\n\n.chequeCard {\n  border-width: thin;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  width: 95%;\n  margin-left: 4%;\n  height: 100px;\n  display: inline-block;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.inputCard1 {\n  padding-top: 10%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.inputCard1 ion-label {\n  font-size: 16px;\n  letter-spacing: 0.5px;\n}\n\n.inputCard2 {\n  padding-top: 8%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.inputCard2 ion-label {\n  font-size: 16px;\n  letter-spacing: 0.5px;\n}\n\n.inputCard2 .box {\n  margin: 10px 0;\n}\n\n.textCard {\n  padding-left: 5%;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.icondate {\n  display: inline-block;\n}\n\nion-searchbar {\n  background-color: #f9fafb;\n}\n\nion-select {\n  font-family: \"Montserrat\" !important;\n  font-size: 14pt;\n  font-weight: bold;\n  letter-spacing: 0.4px;\n}\n\nion-text {\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-button {\n  width: 100%;\n  padding-left: 5%;\n  padding-right: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-input {\n  color: black !important;\n  font-size: 14pt;\n  font-weight: bold;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n  padding-left: 15px !important;\n}\n\nion-label {\n  font-family: \"Montserrat\" !important;\n  font-size: 16px;\n}\n\nion-back-button {\n  color: rgb(73, 73, 226);\n  margin-bottom: 5%;\n  font-size: larger;\n  text-transform: none;\n}\n\nion-item::part(native)::transaction-currency {\n  padding-left: 0px !important;\n}\n\nion-toolbar {\n  margin-top: 7%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  padding-bottom: 3%;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: larger;\n  padding-top: 5px;\n  padding-left: 0px;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.box7 .box {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n\n.backIcon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ioncontent {\n  height: 110%;\n  margin-top: -3%;\n}\n\n.ioncontent1 {\n  height: 135%;\n}\n\n.currency_row {\n  display: flex;\n  width: 100%;\n}\n\n.currency_row ion-select {\n  width: 100%;\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477c6;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\n.crowdsCount {\n  margin-left: 1cm;\n}\n\nion-header ion-buttons {\n  color: rgb(73, 73, 226);\n}\n\nion-header span {\n  font-weight: bold;\n}\n\nion-back-button {\n  color: #3477c6;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2h3aXRoZHJhd2FsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG9DQUFBO0VBQ0EsNkNBQUE7QUFGRjs7QUFLQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQUhGOztBQUtFO0VBQ0UsaUJBQUE7QUFISjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7QUFKRjs7QUFPQTtFQUdFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQU5GOztBQVFFO0VBRUUsZUFBQTtFQUVBLHFCQUFBO0FBUko7O0FBWUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVRGOztBQVdFO0VBRUUsZUFBQTtFQUVBLHFCQUFBO0FBWEo7O0FBY0U7RUFDRSxjQUFBO0FBWko7O0FBZ0JBO0VBRUUsZ0JBQUE7QUFkRjs7QUFzQkE7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQW5CRjs7QUF1QkE7RUFDRSxnQkFBQTtBQXBCRjs7QUF3QkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFyQkY7O0FBd0JBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQXJCRjs7QUF3QkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBckJGOztBQXdCQTtFQUNFLHFCQUFBO0FBckJGOztBQXdCQTtFQUNFLHlCQUFBO0FBckJGOztBQXdCQTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFyQkY7O0FBd0JBO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQXJCRjs7QUF3QkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQXJCRjs7QUF3QkE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBRUEsb0NBQUE7RUFDQSw2QkFBQTtBQXRCRjs7QUF5QkE7RUFFRSxvQ0FBQTtFQUNBLGVBQUE7QUF2QkY7O0FBMkJBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsNEJBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUF4QkY7O0FBMkJBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQXhCRjs7QUEyQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXhCRjs7QUE0QkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBMUJKOztBQThCQTtFQUNFLG1CQUFBO0VBRUEsd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBNUJGOztBQStCQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBNUJGOztBQStCQTtFQUNFLFlBQUE7QUE1QkY7O0FBK0JBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUE1QkY7O0FBOEJFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBNUJKOztBQWdDQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQTdCRjs7QUFnQ0E7RUFDRSxnQkFBQTtBQTdCRjs7QUEyQ0U7RUFDRSx1QkFBQTtBQXhDSjs7QUE0Q0U7RUFDRSxpQkFBQTtBQTFDSjs7QUE4Q0E7RUFDRSxjQUFBO0FBM0NGOztBQThDQTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBM0NGIiwiZmlsZSI6ImNhc2h3aXRoZHJhd2FsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC1vcGVyYXRpb257XHJcbi8vICAgICBoZWlnaHQ6IDgwMCU7XHJcbi8vIH1cclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgLyogQWRkICFpbXBvcnRhbnQgdG8gb3ZlcndyaXRlIGFsbCBlbGVtZW50cyAqL1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb25BbW91bnRlcnJvcm1zZyB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuXHJcbiAgaW9uLWRhdGV0aW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuLmNoZXF1ZUNhcmQge1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxufVxyXG5cclxuZm9ybTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dENhcmQxIHtcclxuICAvLyAgcGFkZGluZy10b3A6IDEwJTtcclxuICAvLyAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICAvLyBjb2xvcjogIzQ0NDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0Q2FyZDIge1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgLy8gY29sb3I6ICM0NDQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB9XHJcblxyXG4gIC5ib3gge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dENhcmQge1xyXG4gIC8vIHBhZGRpbmctdG9wOiAtNiU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuLy8gIC5sYWJlbENhcmR7XHJcbi8vICAgICAgY29sb3I6IGdyYXk7XHJcbi8vICAgICAgLy9mb250LXNpemU6IDIwcHg7XHJcbi8vICB9XHJcblxyXG4udW5kZXJsaW5lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDQlO1xyXG59XHJcblxyXG4uaW9uLXBhZGRpbmctdG9wIHtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIC8vIHBhZGRpbmctbGVmdDogMyU7XHJcbn1cclxuXHJcbi5pb24tcGFkZGluZy10b3AyIHtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmNhbmNlbGNhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWxlZnQ6IDQ0JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5iYWNrY2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDglO1xyXG4gIHBhZGRpbmctbGVmdDogNDclO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmljb25kYXRlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmlvbi1zZWFyY2hiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRwdDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbn1cclxuXHJcbmlvbi10ZXh0IHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgb3BhY2l0eTogNzUlO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgLy8gY29sb3I6ICMxMDIyNDU7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIC8vIG9wYWNpdHk6IDc1JTtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICBjb2xvcjogcmdiKDczLCA3MywgMjI2KTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuaW9uLWl0ZW06OnBhcnQobmF0aXZlKTo6dHJhbnNhY3Rpb24tY3VycmVuY3kge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICBtYXJnaW4tdG9wOiA3JTtcclxuICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjZDNkM2QzO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcclxufVxyXG5cclxubmd4LWZsYWctcGlja2VyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3g3IHtcclxuICBwYWRkaW5nLXRvcDogMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuXHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIC5ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbn1cclxuXHJcbi5iYWNrSWNvbiB7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAvLyBjb2xvcjogYmx1ZTtcclxuICBjb2xvcjogcmdiKDcwLCAxMTEsIDI1NCk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5pb25jb250ZW50IHtcclxuICBoZWlnaHQ6IDExMCU7XHJcbiAgbWFyZ2luLXRvcDogLTMlO1xyXG59XHJcblxyXG4uaW9uY29udGVudDEge1xyXG4gIGhlaWdodDogMTM1JTtcclxufVxyXG5cclxuLmN1cnJlbmN5X3JvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgaW9uLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxufVxyXG5cclxuLnRleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogIzM0NzdjNjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jcm93ZHNDb3VudCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFjbTtcclxufVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuLy8gICAuaW9uY29udGVudHtcclxuLy8gICAgIGhlaWdodDogMTMwJTtcclxuLy8gICAgIG1hcmdpbi10b3A6IC0zJTtcclxuLy8gICB9XHJcbi8vICAgLmlvbmNvbnRlbnQxe1xyXG4vLyAgICAgaGVpZ2h0OiAxNjUlO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgaW9uLWJ1dHRvbnMge1xyXG4gICAgY29sb3I6IHJnYig3MywgNzMsIDIyNik7XHJcbiAgICAvLyBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICBjb2xvcjogIzM0NzdjNjtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59Il19 */";

/***/ }),

/***/ 81537:
/*!**************************************************************************!*\
  !*** ./src/app/pages/cashwithdrawal/cashwithdrawal.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <app-operation [title] = \"cashWithdrawal\"></app-operation> -->\r\n<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"flag\">\r\n  <div>\r\n    <!-- <form [formGroup]=\"slideOneForm\" [disabled]=\"customerDetails.custAccount.status !== 'APPROVED'\"> -->\r\n    <form [formGroup]=\"slideOneForm\">\r\n      <div class=\"inputCard1\">\r\n        <ion-item fill=\"outline\">\r\n          <ion-label position=\"floating\" class=\"t-20\">Account Number*</ion-label>\r\n          <ion-select *ngIf=\"!accountflag\" [compareWith]=\"compareWith\" interface=\"popover\"\r\n            [interfaceOptions]=\"{'cssClass': 'wider-popover-acc-num'}\" formControlName=\"accountNumber\"\r\n            (ionChange)=\"accountEvent($event)\" ngDefaultControl>\r\n            <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\">{{user.accountId}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n          <ion-input mode=\"ios\" *ngIf=\"accountflag\" formControlName=\"accountNumber\" type=\"text\" readonly>\r\n          </ion-input>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <!-- <div class=\"inputCard1\">\r\n        <ion-label>Account Number*</ion-label>\r\n      <ion-input class=\"box\"></ion-input>\r\n        <ion-select *ngIf=\"!accountflag\" [compareWith]=\"compareWith\" class=\"box\"\r\n        interface=\"popover\"\r\n        [interfaceOptions]=\"{'cssClass': 'wider-popover-acc-num'}\"\r\n          formControlName=\"accountNumber\" (ionChange)=\"accountEvent($event)\" ngDefaultControl>\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\">{{user.accountId}}</ion-select-option>\r\n        </ion-select>\r\n        <ion-input mode=\"ios\" *ngIf=\"accountflag\" class=\"box\" formControlName=\"accountNumber\" type=\"text\" readonly>\r\n        </ion-input>\r\n      </div> -->\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\">Account Balance : {{curr }} {{currentBalance}}</ion-label>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\">Account Branch :\r\n          {{slideOneForm.controls.accountBranch.value}}</ion-label>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-item fill=\"outline\" id=\"transaction-currency\">\r\n          <ion-label position=\"floating\" class=\"t-20\">Transaction Currency*</ion-label>\r\n          <ngx-flag-picker [selectedCountryCode]=\"selectedCountryCode\" [showFlags]=\"isShow\" [showLabels]=\"!isShow\"\r\n            [showArrow]=\"!isShow\" slot=\"start\">\r\n          </ngx-flag-picker>\r\n          <ion-select [compareWith]=\"compareWith\" formControlName=\"transactionCurrency\" interface=\"popover\"\r\n            [interfaceOptions]=\"{'cssClass': 'wider-popover-acc-num'}\"\r\n            (ionChange)=\"selectCurrencyCode($event.target.value)\">\r\n            <ion-select-option *ngFor=\"let currency of currencies\" [value]=\"currency.countryCode\">\r\n              {{currency.currencyCode}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\">Transaction Amount*</ion-label>\r\n        <ion-input class=\"box\" #myRef [(ngModel)]=\"transAmount\" formControlName=\"transactionAmount\" type=\"text\" min=\"1\"\r\n          (keyup)=\"numberOnlyValidation($event)\">\r\n        </ion-input>\r\n        <div class=\"transactionAmounterrormsg\" *ngIf=\"  transAmt > currentBalance\">\r\n          Transaction Amount cannot be greater than Account Balance\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\"\r\n            [disabled]=\"validateDisablebutton('disable1') ||!transAmount  || submitted ||   transAmt > currentBalance\"\r\n            (click)=\"goToNextPage()\">Next</ion-button>\r\n          <!-- [disabled]=\"validateDisablebutton('disable1') ||!transAmount  || submitted ||  currentBalance < slideOneForm.controls['transactionAmount'].value\" -->\r\n        </div>\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black\" (click)=\"goToHomepage()\">Cancel\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar>\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToPreviousPage()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!flag\">\r\n  <div>\r\n    <form [formGroup]=\"slideOneForm\">\r\n      <!-- <div class=\"textCard\">\r\n            <ion-text>\r\n              <h5 style=\"color: gray;padding-left: 4%;\">Do you wish to perform this transaction in your home branch</h5>\r\n            </ion-text>\r\n          </div>\r\n  \r\n          <div class=\"inputCard2\">\r\n            <ion-radio-group>\r\n              <ion-row>\r\n               <ion-col>\r\n                 <ion-item lines=\"none\">\r\n                 <ion-radio mode=\"md\" value=\"buy\"></ion-radio>\r\n                 <ion-label position=\"start\" style=\"padding-left: 10px;\">yes</ion-label>\r\n                 </ion-item>\r\n                </ion-col>\r\n    \r\n               <ion-col>\r\n                 <ion-item lines=\"none\">\r\n                 <ion-radio mode=\"md\" value=\"sell\"></ion-radio>\r\n                 <ion-label style=\"padding-left: 10px;\">No</ion-label>\r\n                 </ion-item>\r\n               </ion-col>\r\n              </ion-row>\r\n            </ion-radio-group>\r\n         </div> -->\r\n\r\n      <div style=\"margin-left: 19px; margin-top: 19px; margin-right: 19px\">\r\n        <ion-label>Do you wish to perform this transaction in your home\r\n          branch?</ion-label>\r\n        <!-- <ion-label></ion-label> -->\r\n        <ion-radio-group name=\"branchFlags\" formControlName=\"branchFlag\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"start\">Yes</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagYes\" [value]=\"true\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label>No</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagNo\" [value]=\"false\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-router-link (click)=\"presentModal()\" [hidden]=\"!nearestBrn\" class=\"underline\">Click here to find the\r\n          nearest branch</ion-router-link>\r\n      </div>\r\n      <br />\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction Branch*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input appearence=\"none\" formControlName=\"transactionBranch\"\r\n              [readonly]=\"slideOneForm.get('branchFlag').value ? true : false\">\r\n            </ion-input>\r\n            <ion-icon *ngIf=\"slideOneForm.get('branchFlag').value == true\" name=\"home-outline\" color=\"primary\"\r\n              slot=\"end\"></ion-icon>\r\n            <ion-icon *ngIf=\"slideOneForm.get('branchFlag').value == false\" name=\"navigate-circle-outline\"\r\n              color=\"primary\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-note style=\"color: red; margin-left: 22px; top: 13px\"\r\n          *ngIf=\"f.transactionBranch.errors?.required && f.transactionBranch.touched\">\r\n          <small>Transaction Branch Required</small>\r\n        </ion-note>\r\n      </div>\r\n      <div class=\"inputCard2\">\r\n        <ion-label> Number of Crowds : {{ tokenCount || '0' }} </ion-label>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction date*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-datetime-button datetime=\"datetime\" showTimeLabel=\"false\"></ion-datetime-button>\r\n            <ion-modal [keepContentsMounted]=\"true\">\r\n              <ng-template>\r\n                <ion-datetime presentation=\"date\" id=\"datetime\" [min]=\"minDate\" [max]=\"maxDate\"\r\n                  formControlName=\"transactionDate\" displayFormat=\"DDD. MMM DD, YY\" [showDefaultTitle]=\"true\" #datetime\r\n                  ></ion-datetime>\r\n              </ng-template>\r\n            </ion-modal>\r\n            <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n          <!-- <ion-item lines=\"none\">\r\n            <ion-datetime\r\n              displayFormat=\"DD MMM YYYY\"\r\n              (ionChange)=\"gettingAvailableSlots()\"\r\n              placeholder=\"Select date\"\r\n              formControlName=\"transactionDate\"\r\n            >\r\n            </ion-datetime>\r\n           \r\n            <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n          </ion-item> -->\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Time Slot*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input formControlName=\"transactionTime\" [readonly]=\"true\"></ion-input>\r\n            <!-- <ion-datetime displayFormat=\"hh:mm A\"  placeholder=\"Select time slot\" formControlName=\"transactionTime\"></ion-datetime> -->\r\n            <ion-icon name=\"alarm-outline\" slot=\"end\" (click)=\"openPopup()\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n      <!-- <ion-label style=\"padding-left: 5%;\">Time Slot*</ion-label>\r\n      \r\n  \r\n             <ion-chip *ngFor=\"let slot of timeSlots;let i=index;\" [id]=\"i+1\"  color=\"warn\" >\r\n                <ion-label (click)=\"onSelectiongTimeSlots($event,slot)\">{{format24HrsTo12Hrs(slot)}}</ion-label>\r\n              \r\n              </ion-chip>\r\n            \r\n              <input type=\"text\" hidden formControlName=\"transactionTime\"> -->\r\n\r\n      <div class=\"inputCard2\" *ngIf=\"title == 'Cheque Withdrawal' || title =='Cheque Deposit'\">\r\n        <ion-label position=\"stacked\">Remark</ion-label>\r\n        <ion-input class=\"chequeCard\" formControlName=\"accountNo\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" [disabled]=\"validateDisablebutton('disable2')  || submitted1\"\r\n            (click)=\"goToNextScreen(slideOneForm.value)\">Next</ion-button>\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black\" (click)=\"goToPreviousPage()\">Back\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cashwithdrawal_cashwithdrawal_module_ts.js.map