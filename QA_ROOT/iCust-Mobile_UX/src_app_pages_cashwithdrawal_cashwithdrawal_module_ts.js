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
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_3__.SharedMaterialModule
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
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
            accountCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
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
            totalTransactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            remarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]]
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
        this.slideOneForm.get('accountNumber').valueChanges.subscribe(val => {
            console.log("val", val);
            if (val) {
                this.accountEvent(val);
            }
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
        var _a, _b;
        console.log(currency);
        console.log(this.currencyData);
        console.log(this.currencies);
        this.currencyData = this.currencies.find((x) => x.currencyCode == currency);
        this.selectedCountryCode = (_a = this.currencyData) === null || _a === void 0 ? void 0 : _a.countryCode.toLowerCase();
        const currencyCode = this.currencies.find(x => x.currencyCode.includes(currency)).currencyCode;
        this.currencyData =
            this.currencies && this.currencies.find((x) => x.countryCode == currency);
        this.selectedCountryCode =
            this.currencyData && ((_b = this.currencyData) === null || _b === void 0 ? void 0 : _b.countryCode.toLowerCase());
        console.log(this.selectedCountryCode);
        this.api.getExchangeRate('INR').subscribe((res) => {
            var _a;
            console.log('res', res);
            console.log('rate---- ', res.rates[currencyCode]);
            const rate = (_a = res === null || res === void 0 ? void 0 : res.rates) === null || _a === void 0 ? void 0 : _a[currencyCode].toString();
            console.log(rate.toString());
            this.slideOneForm.get('exchangeRate').patchValue(rate);
        });
        console.log('selectCurrencyCode-- routerdata:: ', this.routerData);
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
        var _a, _b;
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
        form.transactionCurrency = (_a = this.currencyData) === null || _a === void 0 ? void 0 : _a.currencyCode;
        form.accountNumber = form.accountNumber;
        form.productCode = this.productCode;
        form.accountType = this.accountDetails.accountType;
        form.accountCurrency = ((_b = this.customerDetails) === null || _b === void 0 ? void 0 : _b.currencyCode) || "";
        // form.transactionTime = this.format24HrsTo12Hrs(form.transactionTime);
        // form.transactionTime = format(new Date(form.transactionTime), 'hh:mm:ss a');
        form.customerId = this.customerId;
        console.log(this.routerData);
        if (this.routerData) {
            form.appointmentId = this.routerData.data.appointmentId;
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
            console.log(form);
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
    accountEvent(e) {
        var _a, _b;
        this.isedit = false;
        console.log('events::', e);
        let data = ((_a = e === null || e === void 0 ? void 0 : e.detail) === null || _a === void 0 ? void 0 : _a.value) ? (_b = e === null || e === void 0 ? void 0 : e.detail) === null || _b === void 0 ? void 0 : _b.value : e;
        console.log("event", data);
        this.api.accountBalance(data).subscribe((accbal) => {
            console.log(accbal);
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
            this.slideOneForm.controls.accountCurrency.patchValue(accbal.accountCurrency);
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
    changeTransAmount(event) {
        this.slideOneForm.get('totalTransactionAmount').patchValue((event.target.value.split(',').join('') - 0) + this.chargeAmount);
    }
    valueSet(currentBalance) {
        this.currentBalance = currentBalance;
    }
    savingAccountFun(filteredResponseSavingAccount) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        console.log(filteredResponseSavingAccount);
        this.users = filteredResponseSavingAccount.custAccount;
        this.customerId = filteredResponseSavingAccount.customerId;
        this.curr = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.getCurrencySymbol)(filteredResponseSavingAccount.custAccount[0].accountCurrency, 'narrow');
        this.currentBalance = this.users[0].amount;
        if (this.accountInfo.accountId != null) {
            this.api.getChargeDetails(this.accountInfo.accountId).subscribe(resp => {
                var _a, _b;
                console.log('resp:: ', resp);
                this.chargeAmount = (_a = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _a === void 0 ? void 0 : _a.amount;
                this.slideOneForm.get('totalChargeAmount').patchValue((_b = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _b === void 0 ? void 0 : _b.amount);
            }, err => console.log('Error: ', err));
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
        this.selectedCountryCode = filteredResponseSavingAccount.countryCode.toLowerCase();
        this.slideOneForm.controls.accountBranch.patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        this.slideOneForm.controls.transactionCurrency.patchValue(filteredResponseSavingAccount.currencyCode);
        this.slideOneForm.get('transactionBranch').patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        // if (this.routerData) {
        //   this.selectedCountryCode =
        //     this.routerData.data.transactionCurrency.toLowerCase();
        //   this.slideOneForm.controls.transactionCurrency.patchValue(
        //     this.routerData.data.transactionCurrency
        //   );
        // } else {
        //   this.selectedCountryCode =
        //     filteredResponseSavingAccount.countryCode.toLowerCase();
        //   this.slideOneForm.controls.transactionCurrency.patchValue(
        //     filteredResponseSavingAccount.countryCode
        //   );
        //   this.slideOneForm.controls.accountBranch.patchValue(
        //     filteredResponseSavingAccount.custAccount[0].accountBranch
        //   );
        //   this.slideOneForm
        //     .get('transactionBranch')
        //     .patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        // }
        if (this.routerData) {
            console.log("RouterData present", this.selectedCountryCode);
            this.slideOneForm
                .get('accountNumber').patchValue((_b = (_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.accountNumber);
            this.slideOneForm
                .get('transactionAmount').patchValue((_d = (_c = this.routerData) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.transactionAmount);
            // console.log(this.selectedCountryCode , this.routerData.data.transactionCurrency);
            // this.slideOneForm
            //   .get('transactionCurrency').patchValue(this.routerData.data.transactionCurrency);
            this.slideOneForm
                .get('transactionBranch').patchValue((_f = (_e = this.routerData) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.transactionBranch);
            this.slideOneForm
                .get('transactionDate').patchValue((_h = (_g = this.routerData) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.transactionDate);
            this.slideOneForm
                .get('transactionTime').patchValue((_k = (_j = this.routerData) === null || _j === void 0 ? void 0 : _j.data) === null || _k === void 0 ? void 0 : _k.transactionTime);
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

module.exports = ".transactionAmounterrormsg {\n  color: red;\n  font-size: small;\n  padding-top: 7px;\n}\n\n.box {\n  font-weight: bold;\n  border-width: thin;\n  border-radius: 13px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  width: 100%;\n  height: 55px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.box ion-datetime {\n  font-weight: bold;\n}\n\n.chequeCard {\n  border-width: thin;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  width: 95%;\n  height: 100px;\n  display: inline-block;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.inputCard {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  position: relative;\n}\n\n.inputCard1 {\n  padding-top: 10%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.inputCard1 ion-label {\n  font-size: 16px;\n  letter-spacing: 0.5px;\n}\n\n.inputCard2 {\n  padding-top: 8%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.inputCard2 ion-label {\n  font-size: 16px;\n  letter-spacing: 0.5px;\n}\n\n.inputCard2 .box {\n  margin: 10px 0;\n}\n\n.textCard {\n  padding-left: 5%;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.icondate {\n  display: inline-block;\n}\n\nion-searchbar {\n  background-color: #f9fafb;\n}\n\nion-select {\n  font-family: \"Montserrat\" !important;\n  font-size: 14pt;\n  font-weight: bold;\n  letter-spacing: 0.4px;\n}\n\nion-text {\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-button {\n  width: 100%;\n  padding-left: 5%;\n  padding-right: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-input {\n  color: black !important;\n  font-size: 12pt;\n  font-weight: bold;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n  padding-left: 15px !important;\n}\n\nion-label {\n  font-family: \"Montserrat\" !important;\n  font-size: 16px;\n}\n\nion-back-button {\n  color: rgb(73, 73, 226);\n  margin-bottom: 5%;\n  font-size: larger;\n  text-transform: none;\n}\n\nion-item::part(native)::transaction-currency {\n  padding-left: 0px !important;\n}\n\nion-toolbar {\n  margin-top: 7%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  padding-bottom: 3%;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: larger;\n  padding-top: 5px;\n  padding-left: 0px;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.box7 .box {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n\n.backIcon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ioncontent {\n  height: 110%;\n  margin-top: -3%;\n}\n\n.ioncontent1 {\n  height: 135%;\n}\n\n.currency_row {\n  display: flex;\n  width: 100%;\n}\n\n.currency_row ion-select {\n  width: 100%;\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477c6;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\n.crowdsCount {\n  margin-left: 1cm;\n}\n\nion-header ion-buttons {\n  color: rgb(73, 73, 226);\n}\n\nion-header span {\n  font-weight: bold;\n}\n\nion-back-button {\n  color: #3477c6;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.info_btn {\n  position: absolute;\n  right: 8%;\n  top: 50%;\n  color: #000;\n  font-size: 18px;\n  font-weight: 700;\n  border: 2px solid #000;\n  border-radius: 7px;\n  padding: 0 10px;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2h3aXRoZHJhd2FsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUVFO0VBQ0UsaUJBQUE7QUFBSjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBR0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBTUU7RUFFRSxlQUFBO0VBRUEscUJBQUE7QUFOSjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBU0U7RUFFRSxlQUFBO0VBRUEscUJBQUE7QUFUSjs7QUFZRTtFQUNFLGNBQUE7QUFWSjs7QUFjQTtFQUVFLGdCQUFBO0FBWkY7O0FBb0JBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFqQkY7O0FBcUJBO0VBQ0UsZ0JBQUE7QUFsQkY7O0FBc0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBbkJGOztBQXNCQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQW5CRjs7QUFzQkE7RUFDRSxxQkFBQTtBQW5CRjs7QUFzQkE7RUFDRSx5QkFBQTtBQW5CRjs7QUFzQkE7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBbkJGOztBQXNCQTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUVBLG9DQUFBO0VBQ0EsNkJBQUE7QUFwQkY7O0FBdUJBO0VBRUUsb0NBQUE7RUFDQSxlQUFBO0FBckJGOztBQXlCQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBdEJGOztBQXlCQTtFQUNFLDRCQUFBO0FBdEJGOztBQXlCQTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FBdEJGOztBQXlCQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF0QkY7O0FBMEJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXhCSjs7QUE0QkE7RUFDRSxtQkFBQTtFQUVBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQTFCRjs7QUE2QkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQTFCRjs7QUE2QkE7RUFDRSxZQUFBO0FBMUJGOztBQTZCQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBMUJGOztBQTRCRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQTFCSjs7QUE4QkE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsZ0JBQUE7QUEzQkY7O0FBeUNFO0VBQ0UsdUJBQUE7QUF0Q0o7O0FBMENFO0VBQ0UsaUJBQUE7QUF4Q0o7O0FBNENBO0VBQ0UsY0FBQTtBQXpDRjs7QUE0Q0E7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQXpDRjs7QUE0Q0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQXpDRiIsImZpbGUiOiJjYXNod2l0aGRyYXdhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbnNhY3Rpb25BbW91bnRlcnJvcm1zZyB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuXHJcbiAgaW9uLWRhdGV0aW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuLmNoZXF1ZUNhcmQge1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XHJcbiAgd2lkdGg6IDk1JTtcclxuICAvLyBtYXJnaW4tbGVmdDogNCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxufVxyXG5cclxuZm9ybTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dENhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmlucHV0Q2FyZDEge1xyXG4gIC8vICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIC8vICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIC8vIGNvbG9yOiAjNDQ0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5wdXRDYXJkMiB7XHJcbiAgcGFkZGluZy10b3A6IDglO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICAvLyBjb2xvcjogIzQ0NDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJveCB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0Q2FyZCB7XHJcbiAgLy8gcGFkZGluZy10b3A6IC02JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4vLyAgLmxhYmVsQ2FyZHtcclxuLy8gICAgICBjb2xvcjogZ3JheTtcclxuLy8gICAgICAvL2ZvbnQtc2l6ZTogMjBweDtcclxuLy8gIH1cclxuXHJcbi51bmRlcmxpbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIC8vIHBhZGRpbmctbGVmdDogNCU7XHJcbn1cclxuXHJcbi5pb24tcGFkZGluZy10b3Age1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAzJTtcclxufVxyXG5cclxuLmlvbi1wYWRkaW5nLXRvcDIge1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4uY2FuY2VsY2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDglO1xyXG4gIHBhZGRpbmctbGVmdDogNDQlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmJhY2tjYXJkIHtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0NyU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uaWNvbmRhdGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxufVxyXG5cclxuaW9uLXRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBvcGFjaXR5OiA3NSU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJwdDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAvLyBjb2xvcjogIzEwMjI0NTtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgLy8gb3BhY2l0eTogNzUlO1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gIGNvbG9yOiByZ2IoNzMsIDczLCAyMjYpO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG5pb24taXRlbTo6cGFydChuYXRpdmUpOjp0cmFuc2FjdGlvbi1jdXJyZW5jeSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIG1hcmdpbi10b3A6IDclO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcblxyXG5uZ3gtZmxhZy1waWNrZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJveDcge1xyXG4gIHBhZGRpbmctdG9wOiAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG5cclxuICAvLyBtYXJnaW4tbGVmdDogMTBweDtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgLmJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxufVxyXG5cclxuLmJhY2tJY29uIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIC8vIGNvbG9yOiBibHVlO1xyXG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmlvbmNvbnRlbnQge1xyXG4gIGhlaWdodDogMTEwJTtcclxuICBtYXJnaW4tdG9wOiAtMyU7XHJcbn1cclxuXHJcbi5pb25jb250ZW50MSB7XHJcbiAgaGVpZ2h0OiAxMzUlO1xyXG59XHJcblxyXG4uY3VycmVuY3lfcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBpb24tc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiAjMzQ3N2M2O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNyb3dkc0NvdW50IHtcclxuICBtYXJnaW4tbGVmdDogMWNtO1xyXG59XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4vLyAgIC5pb25jb250ZW50e1xyXG4vLyAgICAgaGVpZ2h0OiAxMzAlO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogLTMlO1xyXG4vLyAgIH1cclxuLy8gICAuaW9uY29udGVudDF7XHJcbi8vICAgICBoZWlnaHQ6IDE2NSU7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5pb24taGVhZGVyIHtcclxuICBpb24tYnV0dG9ucyB7XHJcbiAgICBjb2xvcjogcmdiKDczLCA3MywgMjI2KTtcclxuICAgIC8vIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gIGNvbG9yOiAjMzQ3N2M2O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICBjb2xvcjogcmdiKDcwLCAxMTEsIDI1NCk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5pbmZvX2J0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA4JTtcclxuICB0b3A6IDUwJTtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgei1pbmRleDogMjtcclxufSJdfQ== */";

/***/ }),

/***/ 81537:
/*!**************************************************************************!*\
  !*** ./src/app/pages/cashwithdrawal/cashwithdrawal.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <app-operation [title] = \"cashWithdrawal\"></app-operation> -->\r\n<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"flag\">\r\n  <div>\r\n    <!-- <form [formGroup]=\"slideOneForm\" [disabled]=\"customerDetails.custAccount.status !== 'APPROVED'\"> -->\r\n    <form [formGroup]=\"slideOneForm\">\r\n      <div class=\"inputCard1\">\r\n        <ion-item fill=\"outline\">\r\n          <ion-label position=\"floating\" class=\"t-20\">Account Number*</ion-label>\r\n          <ion-select *ngIf=\"!accountflag\" [compareWith]=\"compareWith\" interface=\"popover\"\r\n            [interfaceOptions]=\"{'cssClass': 'wider-popover-acc-num'}\" formControlName=\"accountNumber\"\r\n            (ionChange)=\"accountEvent($event)\" ngDefaultControl>\r\n            <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\">{{user.accountId}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n          <ion-input mode=\"ios\" *ngIf=\"accountflag\" formControlName=\"accountNumber\" type=\"text\" readonly (ionChange)=\"accountEvent($event)\">\r\n          </ion-input>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <!-- <div class=\"inputCard1\">\r\n        <ion-label>Account Number*</ion-label>\r\n      <ion-input class=\"box\"></ion-input>\r\n        <ion-select *ngIf=\"!accountflag\" [compareWith]=\"compareWith\" class=\"box\"\r\n        interface=\"popover\"\r\n        [interfaceOptions]=\"{'cssClass': 'wider-popover-acc-num'}\"\r\n          formControlName=\"accountNumber\" (ionChange)=\"accountEvent($event)\" ngDefaultControl>\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\">{{user.accountId}}</ion-select-option>\r\n        </ion-select>\r\n        <ion-input mode=\"ios\" *ngIf=\"accountflag\" class=\"box\" formControlName=\"accountNumber\" type=\"text\" readonly>\r\n        </ion-input>\r\n      </div> -->\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\">Account Balance : {{curr }} {{currentBalance}}</ion-label>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\">Account Branch :\r\n          {{slideOneForm.controls.accountBranch.value}}</ion-label>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\">Account Currency :\r\n          {{slideOneForm.controls.accountCurrency.value}}</ion-label>\r\n      </div>\r\n\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-item fill=\"outline\" id=\"transaction-currency\">\r\n          <ion-label position=\"floating\" class=\"t-20\">Transaction Currency*</ion-label>\r\n          <ngx-flag-picker [selectedCountryCode]=\"selectedCountryCode\" [showFlags]=\"isShow\" [showLabels]=\"!isShow\"\r\n            [showArrow]=\"!isShow\" slot=\"start\">\r\n          </ngx-flag-picker>\r\n          <ion-select [compareWith]=\"compareWith\" formControlName=\"transactionCurrency\" interface=\"popover\"\r\n            [interfaceOptions]=\"{'cssClass': 'wider-popover-acc-num'}\"\r\n            (ionChange)=\"selectCurrencyCode($event.target.value)\">\r\n            <ion-select-option *ngFor=\"let currency of currencies\" [value]=\"currency.countryCode\">\r\n              {{currency.currencyCode}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\">Transaction Amount*</ion-label>\r\n        <ion-input class=\"box\" #myRef [(ngModel)]=\"transAmount\" (keyup)=\"changeTransAmount($event)\" formControlName=\"transactionAmount\" type=\"text\" min=\"1\"\r\n          (keyup)=\"numberOnlyValidation($event)\">\r\n        </ion-input>\r\n        <div class=\"transactionAmounterrormsg\" *ngIf=\"  transAmt > currentBalance\">\r\n          Transaction Amount cannot be greater than Account Balance\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inputCard\" *ngIf=\"selectedCountryCode && !slideOneForm.get('accountCurrency').value.toLowerCase().includes(selectedCountryCode.toLowerCase())\">\r\n        <ion-input class=\"box\" placeholder=\"Exchange Rate\" formControlName=\"exchangeRate\" name=\"exchangeRate\"\r\n          ngDefaultControl></ion-input>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-input class=\"box\" placeholder=\"Total Charge Amount\" name=\"chargeAMount\" formControlName=\"totalChargeAmount\" name=\"totalchargeAmount\"\r\n          ngDefaultControl></ion-input>\r\n      </div>\r\n      <div class=\"inputCard total_trans_row\">\r\n        <ion-input class=\"box\" placeholder=\"Total Transaction Amount\" formControlName=\"totalTransactionAmount\"\r\n          ngDefaultControl></ion-input>\r\n        <span class=\"info_btn\">i</span>\r\n      </div>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\"\r\n            [disabled]=\"validateDisablebutton('disable1') ||!transAmount  || submitted ||   transAmt > currentBalance\"\r\n            (click)=\"goToNextPage()\">Next</ion-button>\r\n          <!-- [disabled]=\"validateDisablebutton('disable1') ||!transAmount  || submitted ||  currentBalance < slideOneForm.controls['transactionAmount'].value\" -->\r\n        </div>\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black\" (click)=\"goToHomepage()\">Cancel\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar>\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToPreviousPage()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!flag\">\r\n  <div>\r\n    <form [formGroup]=\"slideOneForm\">\r\n      <!-- <div class=\"textCard\">\r\n            <ion-text>\r\n              <h5 style=\"color: gray;padding-left: 4%;\">Do you wish to perform this transaction in your home branch</h5>\r\n            </ion-text>\r\n          </div>\r\n  \r\n          <div class=\"inputCard2\">\r\n            <ion-radio-group>\r\n              <ion-row>\r\n               <ion-col>\r\n                 <ion-item lines=\"none\">\r\n                 <ion-radio mode=\"md\" value=\"buy\"></ion-radio>\r\n                 <ion-label position=\"start\" style=\"padding-left: 10px;\">yes</ion-label>\r\n                 </ion-item>\r\n                </ion-col>\r\n    \r\n               <ion-col>\r\n                 <ion-item lines=\"none\">\r\n                 <ion-radio mode=\"md\" value=\"sell\"></ion-radio>\r\n                 <ion-label style=\"padding-left: 10px;\">No</ion-label>\r\n                 </ion-item>\r\n               </ion-col>\r\n              </ion-row>\r\n            </ion-radio-group>\r\n         </div> -->\r\n\r\n      <div style=\"margin-left: 19px; margin-top: 19px; margin-right: 19px\">\r\n        <ion-label>Do you wish to perform this transaction in your home\r\n          branch?</ion-label>\r\n        <!-- <ion-label></ion-label> -->\r\n        <ion-radio-group name=\"branchFlags\" formControlName=\"branchFlag\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"start\">Yes</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagYes\" [value]=\"true\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label>No</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagNo\" [value]=\"false\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-router-link (click)=\"presentModal()\" [hidden]=\"!nearestBrn\" class=\"underline\">Click here to find the\r\n          nearest branch</ion-router-link>\r\n      </div>\r\n      <br />\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction Branch*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input appearence=\"none\" formControlName=\"transactionBranch\"\r\n              [readonly]=\"slideOneForm.get('branchFlag').value ? true : false\">\r\n            </ion-input>\r\n            <ion-icon *ngIf=\"slideOneForm.get('branchFlag').value == true\" name=\"home-outline\" color=\"primary\"\r\n              slot=\"end\"></ion-icon>\r\n            <ion-icon *ngIf=\"slideOneForm.get('branchFlag').value == false\" name=\"navigate-circle-outline\"\r\n              color=\"primary\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-note style=\"color: red; margin-left: 22px; top: 13px\"\r\n          *ngIf=\"f.transactionBranch.errors?.required && f.transactionBranch.touched\">\r\n          <small>Transaction Branch Required</small>\r\n        </ion-note>\r\n      </div>\r\n      <div class=\"inputCard2\">\r\n        <ion-label> Number of Crowds : {{ tokenCount || '0' }} </ion-label>\r\n      </div>\r\n\r\n    \r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction date*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-datetime-button datetime=\"datetime\" showTimeLabel=\"false\"></ion-datetime-button>\r\n            <ion-modal [keepContentsMounted]=\"true\">\r\n              <ng-template>\r\n                <ion-datetime presentation=\"date\" id=\"datetime\" [min]=\"minDate\" [max]=\"maxDate\"\r\n                  formControlName=\"transactionDate\" \r\n                  displayFormat=\"DDD. MMM DD, YY\" \r\n                  [showDefaultTitle]=\"true\" \r\n                  [showDefaultButtons]=\"true\"\r\n                  #datetime>\r\n                </ion-datetime>\r\n              </ng-template>\r\n            </ion-modal>\r\n            <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Time Slot*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input formControlName=\"transactionTime\" [readonly]=\"true\"></ion-input>\r\n            <ion-icon name=\"alarm-outline\" slot=\"end\" (click)=\"openPopup()\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n    \r\n\r\n      <div class=\"inputCard2\" *ngIf=\"title == 'Cash Withdrawal' || title =='Cash Deposit'\">\r\n        <ion-label position=\"stacked\">Remark</ion-label>\r\n        <ion-input class=\"chequeCard\" formControlName=\"remarks\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" [disabled]=\"validateDisablebutton('disable2')  || submitted1\"\r\n            (click)=\"goToNextScreen(slideOneForm.value)\">Next</ion-button>\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black\" (click)=\"goToPreviousPage()\">Back\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cashwithdrawal_cashwithdrawal_module_ts.js.map