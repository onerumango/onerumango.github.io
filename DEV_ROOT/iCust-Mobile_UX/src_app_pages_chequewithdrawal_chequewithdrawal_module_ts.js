"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_chequewithdrawal_chequewithdrawal_module_ts"],{

/***/ 40676:
/*!***************************************************************************!*\
  !*** ./src/app/pages/chequewithdrawal/chequewithdrawal-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChequewithdrawalPageRoutingModule": () => (/* binding */ ChequewithdrawalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _chequewithdrawal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chequewithdrawal.page */ 95149);




const routes = [
    {
        path: '',
        component: _chequewithdrawal_page__WEBPACK_IMPORTED_MODULE_0__.ChequewithdrawalPage
    }
];
let ChequewithdrawalPageRoutingModule = class ChequewithdrawalPageRoutingModule {
};
ChequewithdrawalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChequewithdrawalPageRoutingModule);



/***/ }),

/***/ 14314:
/*!*******************************************************************!*\
  !*** ./src/app/pages/chequewithdrawal/chequewithdrawal.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChequewithdrawalPageModule": () => (/* binding */ ChequewithdrawalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _chequewithdrawal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chequewithdrawal-routing.module */ 40676);
/* harmony import */ var _chequewithdrawal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chequewithdrawal.page */ 95149);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-flag-picker */ 96801);
/* harmony import */ var _operation_operation_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operation/operation.page */ 97329);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);











let ChequewithdrawalPageModule = class ChequewithdrawalPageModule {
};
ChequewithdrawalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _chequewithdrawal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChequewithdrawalPageRoutingModule,
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_9__.NgxFlagPickerModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        declarations: [_chequewithdrawal_page__WEBPACK_IMPORTED_MODULE_1__.ChequewithdrawalPage, _operation_operation_page__WEBPACK_IMPORTED_MODULE_2__.OperationPage]
    })
], ChequewithdrawalPageModule);



/***/ }),

/***/ 95149:
/*!*****************************************************************!*\
  !*** ./src/app/pages/chequewithdrawal/chequewithdrawal.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChequewithdrawalPage": () => (/* binding */ ChequewithdrawalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _chequewithdrawal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chequewithdrawal.page.html?ngResource */ 46844);
/* harmony import */ var _chequewithdrawal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chequewithdrawal.page.scss?ngResource */ 39110);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/branch/branch.component */ 6156);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/time-slots/time-slots.component */ 19023);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var _appointmentpopup_appointmentpopup_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../appointmentpopup/appointmentpopup.page */ 14808);

















let ChequewithdrawalPage = class ChequewithdrawalPage {
    constructor(router, fb, api, toastCtrl, modalController, datepipe, loading, shareDataService, cdr) {
        this.router = router;
        this.fb = fb;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.modalController = modalController;
        this.datepipe = datepipe;
        this.loading = loading;
        this.shareDataService = shareDataService;
        this.cdr = cdr;
        this.title = 'Cheque Withdrawal';
        this.productCode = 'CQW';
        this.tokenOrigin = 'Mobile';
        //transAmount:number;
        this.isedit = true;
        this.accountBranch = "Loita street";
        this.flag = true;
        this.submitted = true;
        this.trnBrn = null;
        this.minDate = new Date().toISOString();
        this.maxDate = new Date(new Date().setDate(new Date().getDate() + 7)).toISOString();
        this.isShow = true;
        this.selectedCountryCode = '';
    }
    ngOnInit() {
        // this.routerData = this.router.getCurrentNavigation().extras.state;
        if (this.router.getCurrentNavigation() != null) {
            this.routerData = this.router.getCurrentNavigation().extras.state;
        }
        console.log('>>get router data -- :', this.routerData);
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.customerId = sessionStorage.getItem('customer_id');
        // this.api.accountDropDown(this.customerId).subscribe((dropdown) => {
        //   console.log('backend dropdown', dropdown);
        //   this.users=dropdown;
        // });
        console.log("customer_id", this.customerId);
        this.slideOneForm = this.fb.group({
            transactionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            customerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            chequeDepositId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            productCode: ['CQW', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            tokenOrigin: ['Mobile', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            accountBalance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            accountCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            branchFlag: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            accountBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            isMobileTrans: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            exchangeRate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            accountAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            totalChargeAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            narrative: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            denomination: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            totalAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            createdBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            createdTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            modifiedBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            modifiedTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            recordStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            authStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            version: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            remarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            chequeNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(12)]],
        });
        console.log(this.slideOneForm.value);
        this.getCountrynameValues();
        this.loadData();
        this.slideOneForm.get('branchFlag').valueChanges.subscribe(val => {
            console.log("branch flag? val", val);
            console.log("branch flag?", this.brnflg);
            localStorage.setItem("BranchFlag", val);
            this.brnflg = val;
            // if (val == false) {
            //   console.log("1st if");
            //   this.slideOneForm.get('transactionBranch').patchValue("");
            //   this.nearestBrn = true;
            // }
            if (this.brnflg == false && val == false) {
                console.log("1st if");
                this.slideOneForm.controls.transactionBranch.patchValue(this.trnBrn);
                this.nearestBrn = true;
            }
            else {
                console.log("else");
                this.nearestBrn = false;
                // this.slideOneForm.controls.transactionBranch.patchValue(this.trnBrn);
                this.accBranch = localStorage.getItem("AccBranch");
                console.log(this.accBranch);
                this.slideOneForm.controls.transactionBranch.patchValue(this.accBranch);
                // this.slideOneForm.get('transactionBranch').patchValue(this.customerDetails.custAccount[0].accountBranch);
            }
            if (this.brnflg == true && val == false) {
                console.log(this.accBranch);
                console.log("2nd if");
                this.slideOneForm.controls.transactionBranch.patchValue(this.accBranch);
                this.nearestBrn = true;
            }
        });
        this.shareDataService.getAccountInfo.subscribe(data => {
            this.accountInfo = data;
            console.log(data);
            this.api.getNumberOfCrowd(this.accountInfo.accountBranch)
                .subscribe((data1) => {
                this.tokenCount = data1.tokenCount || '0';
            });
        });
    }
    loadData() {
        this.loading.present();
        this.api.custpomerDetails(this.phoneNumber).subscribe((resp) => {
            this.loading.dismiss();
            resp.custAccount = resp.custAccount.filter(card => card.status === "APPROVED");
            console.log('backend resp in home', resp);
            this.customerDetails = resp;
            if (resp === null || resp === void 0 ? void 0 : resp.accountCurrency) {
                this.accountCurrencyFlag = resp === null || resp === void 0 ? void 0 : resp.accountCurrency.toLowerCase();
                this.slideOneForm.get('accountCurrency').setValue(resp === null || resp === void 0 ? void 0 : resp.accountCurrency);
            }
            this.savingAccountFun(resp);
            // if(this.customerDetails.accountInfo.status == 'APPROVED'){
            //   this.savingAccountFun(resp);
            //   }
        }, (err) => {
            this.loading.dismiss();
        });
    }
    get f() { return this.slideOneForm.controls; }
    validateDisablebutton(button) {
        this.slideOneForm.valueChanges.subscribe(v => {
            // console.log("v:: ", v);
            if (button === 'disable1') {
                if (v.accountBranch != '' && v.accountNumber != '' && v.transactionAmount != ''
                    && v.transactionCurrency != '' && v.transactionAmount != 0) {
                    this.submitted = false;
                }
                else {
                    this.submitted = true;
                }
            }
        });
        if (this.routerData) {
            this.submitted = false;
        }
    }
    numberOnlyValidation(event) {
        this.transAmt = event.target.value;
        console.log(event.target.value);
        this.IntValue = Math.floor(this.slideOneForm.value.transactionAmount).toString().length;
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
            this.cdr.detectChanges();
        }
        // console.log(this.transAmt);
        console.log(this.currentBalance);
        console.log(this.transAmt);
        this.transAmt = this.transAmt.toString().replace(/,/g, '');
        console.log(this.transAmt);
        if (parseFloat(this.currentBalance) < parseFloat(this.transAmt)) {
            console.log("Bigger");
            this.openToast1();
        }
        // this.slideOneForm.controls['transactionAmount'].setValidators();
        else {
            return;
        }
    }
    openToast1() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Transaction Amount should not exceed than Account Balance',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        });
    }
    getCountrynameValues() {
        this.api.getCurrencyValues().subscribe((allCurrencyValues) => {
            this.currencies = allCurrencyValues;
        });
    }
    selectCurrencyCode(currency) {
        console.log(currency);
        this.currencyData = this.currencies.find(x => x.countryCode == currency);
        this.selectedCountryCode = this.currencyData.countryCode.toLowerCase();
        console.log(this.selectedCountryCode);
    }
    savingAccountFun(filteredResponseSavingAccount) {
        console.log(filteredResponseSavingAccount);
        this.users = filteredResponseSavingAccount.custAccount;
        this.customerId = filteredResponseSavingAccount.customerId;
        this.curr = (0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.getCurrencySymbol)(filteredResponseSavingAccount.custAccount[0].accountCurrency, "narrow");
        this.currentBalance = this.users[0].amount;
        if (this.accountInfo.accountId != null) {
            this.slideOneForm.get('accountNumber').patchValue(this.accountInfo.accountId);
        }
        else {
            this.slideOneForm.get('accountNumber').patchValue(this.users[0].accountId);
        }
        this.selectedCountryCode = filteredResponseSavingAccount.countryCode.toLowerCase();
        this.slideOneForm.controls.transactionCurrency.patchValue(filteredResponseSavingAccount.countryCode);
        // this.slideOneForm.controls.accountCurrency.patchValue(filteredResponseSavingAccount.accountCurrency);
        this.slideOneForm.controls.accountBranch.patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        this.slideOneForm.get('transactionBranch').patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        if (this.routerData) {
            this.slideOneForm
                .get('accountNumber').patchValue(this.routerData.data.accountNumber);
            this.slideOneForm
                .get('transactionAmount').patchValue(this.routerData.data.transactionAmount);
            this.slideOneForm
                .get('transactionCurrency').patchValue(this.routerData.data.transactionCurrency);
            this.slideOneForm
                .get('transactionBranch').patchValue(this.routerData.data.transactionBranch);
            this.slideOneForm
                .get('transactionDate').patchValue(this.routerData.data.transactionDate);
            this.slideOneForm
                .get('transactionTime').patchValue(this.routerData.data.transactionTime);
        }
        this.cdr.markForCheck();
    }
    changeSelectedCountryCode(value) {
        // this.selectedCountryCode = value;
    }
    previous1() {
        this.router.navigate(['dashboard']);
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
    goToNextScreen() {
        this.api.setIndex({
            index: 'CQW'
        });
        this.router.navigate([
            'token-generation',
            { transactionId: this.transactionId },
        ]);
    }
    save(form) {
        console.log(form);
        form.transactionDate.toString();
        var date = new Date(form.transactionDate);
        console.log(date); //4/
        let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
        form.transactionDate = latest_date;
        // form.transactionTime=format(new Date(form.transactionTime), "HH:mm");
        this.currencyData = this.currencies.find(x => x.countryCode == form.transactionCurrency);
        form.transactionCurrency = this.currencyData.currencyCode;
        // form.transactionTime = format(new Date(form.transactionTime), 'hh:mm:ss a');
        form.accountCurrency = this.accountDetails.accountCurrency;
        form.customerId = this.customerId;
        form.productCode = this.productCode;
        form.tokenOrigin = this.tokenOrigin;
        if (this.routerData) {
            form.appointmentId = this.routerData.data.appointmentId;
            form.operation = 'update';
        }
        console.log(form);
        form.transactionTime = this.format24HrsTo12Hrs(form.transactionTime);
        this.accountNum = form.accountNumber;
        this.transactionAmount = form.transactionAmount;
        console.log(this.transactionAmount);
        this.transDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date(form.transactionDate)).format("DD-MM-YYYY").toString();
        localStorage.setItem("AccountNumber", this.accountNum);
        localStorage.setItem("TransactionDate", this.transDate);
        // localStorage.setItem("TransactionTime", form.transactionTime);
        localStorage.setItem("TransactionAmount", this.transactionAmount);
        localStorage.setItem("TransactionBranch", form.transactionBranch);
        //console.log(this.transactionAmount);
        form.transactionAmount = form.transactionAmount.toString().replace(/,/g, '');
        console.log(this.transactionAmount);
        form.isMobileTrans = true;
        //console.log(form);
        if (this.routerData) {
            this.api.appointmentBooking(form).subscribe(resp => {
                console.log('backend resp', resp);
                this.chequeWithdrawal = resp;
                localStorage.setItem("TransactionTime", resp.transactionTime);
                this.transactionId = this.chequeWithdrawal.transactionId;
                console.log('transactionId::', this.transactionId);
                if (this.chequeWithdrawal === 200 || this.chequeWithdrawal !== null) {
                    this.shareDataService.shareTransactionId(this.transactionId);
                    this.slideOneForm.reset();
                    this.onClick(this.chequeWithdrawal);
                    // this.router.navigate(['token-generation', {transactionId: this.transactionId}]);
                }
            });
        }
        else {
            this.api.cashDepositSave(form).subscribe((resp) => {
                console.log('backend resp', resp);
                this.chequeWithdrawal = resp;
                localStorage.setItem("TransactionTime", resp.transactionTime);
                this.transactionId = this.chequeWithdrawal.transactionId;
                console.log('transactionId::', this.transactionId);
                if (this.chequeWithdrawal === 200 || this.chequeWithdrawal !== null) {
                    this.shareDataService.shareTransactionId(this.transactionId);
                    this.slideOneForm.reset();
                    this.onClick(this.chequeWithdrawal);
                    // this.router.navigate(['token-generation', {transactionId: this.transactionId}]);
                }
            });
        }
    }
    onClick(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: _appointmentpopup_appointmentpopup_page__WEBPACK_IMPORTED_MODULE_8__.AppointmentpopupPage,
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
    format24HrsTo12Hrs(time) {
        var formatted = moment__WEBPACK_IMPORTED_MODULE_2__(time, "HH:mm").format("LT");
        return formatted;
    }
    openPopup() {
        console.log("popup");
        this.modalController.create({
            component: src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_6__.TimeSlotsComponent,
            componentProps: {
                date: this.slideOneForm.get('transactionDate').value,
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
    // accountEvent(event) {
    //   console.log("event", event.detail.value)
    //   this.api.accountBalance(event.detail.value).subscribe((accbal) => {
    //     console.log('backend accbal', accbal);
    //     this.valueSet(accbal.currentBalance);
    //     this.currentBalance = accbal.amount;
    //     // console.log(this.slideOneForm.controls)
    //     this.slideOneForm.controls.accountBranch.patchValue(accbal.accountBranch);
    //     // this.slideOneForm.controls.transactionAmount.patchValue(accbal.amount);
    //     this.slideOneForm.controls.transactionCurrency.patchValue(accbal.accountCurrency);
    //     this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch);
    //     localStorage.setItem("AccBranch", accbal.accountBranch);
    //     for (let i in this.currencies) {
    //       this.selectedCountryCode = (this.currencies[i].countryCode).toLowerCase();
    //       this.slideOneForm.controls.transactionCurrency.patchValue(this.currencies[i].countryCode);
    //     }
    //     // this.users=dropdown;
    //   });
    // }
    accountEvent(event) {
        this.isedit = false;
        console.log("event", event.detail.value);
        this.api.accountBalance(event.detail.value).subscribe((accbal) => {
            // console.log('backend accbal', accbal.lastTransactions);
            this.accountDetails = accbal;
            this.valueSet(accbal.currentBalance);
            console.log('backend accbal', accbal);
            // console.log(this.slideOneForm.controls.transactionCurrency);
            this.currentBalance = accbal.amount;
            this.slideOneForm.controls.accountBalance.patchValue(accbal.amount);
            this.slideOneForm.controls.accountBranch.patchValue(accbal.accountBranch);
            localStorage.setItem("AccBranch", accbal.accountBranch);
            // console.log(this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch));
            // console.log(accbal);
            // this.slideOneForm.controls.transactionCurrency.patchValue(accbal.accountCurrency);
            // this.selectCurrencyCode(accbal.accountCurrency);
            //debugger;
            // console.log(accbal.transactionAmount);
            if (accbal.transactionAmount != null || accbal.transactionAmount != undefined) {
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
                    console.log("Else", accbal.lastTransactions);
                    for (var i = 0; i < accbal.lastTransactions.length; i++) {
                        if (accbal.lastTransactions[i].transactionBranch != null) {
                            for (var n = 0; n < accbal.lastTransactions.length; n++) {
                                if (accbal.lastTransactions[n].transactionBranch != null) {
                                    if (accbal.lastTransactions[i].transactionBranch === accbal.lastTransactions[n].transactionBranch) {
                                        brnCnt = brnCnt + 1;
                                    }
                                }
                            }
                        }
                        if (brnOldCnt < brnCnt && brnCnt >= 2) {
                            this.trnBrn = accbal.lastTransactions[i].transactionBranch;
                            brnOldCnt = brnCnt;
                            console.log("yhjghguuyjgh");
                        }
                        brnCnt = 0;
                    }
                    if (this.trnBrn != null && this.trnBrn !== accbal.accountBranch) {
                        console.log(this.trnBrn);
                        this.slideOneForm.controls.branchFlag.patchValue(false);
                        this.slideOneForm.controls.transactionBranch.patchValue(this.trnBrn);
                        console.log(localStorage.getItem("BranchFlag"));
                        this.brnflg = localStorage.getItem("BranchFlag");
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
                this.selectedCountryCode = (this.currencies[i].countryCode).toLowerCase();
                this.slideOneForm.controls.transactionCurrency.patchValue(this.currencies[i].csountryCode);
            }
            // this.selectedCountryCode = (currency.code).toLowerCase();
            // this.users=dropdown;
            //8042666041 8042666055
        });
    }
    valueSet(currentBalance) {
        this.currentBalance = currentBalance;
    }
    _keyPress(event) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_3__.BranchComponent,
                id: "branchModal",
                componentProps: {}
            });
            modal.onDidDismiss().then((modelData) => {
                if (modelData !== null) {
                    let branch = modelData.data;
                    console.log('Modal Data for branch: ', modelData.data);
                    this.tokenCount = modelData.data.data.tokenCount;
                    this.slideOneForm.get('transactionBranch').patchValue(modelData.data['data'].branchName);
                }
            });
            return yield modal.present();
        });
    }
};
ChequewithdrawalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef }
];
ChequewithdrawalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-chequewithdrawal',
        template: _chequewithdrawal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chequewithdrawal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChequewithdrawalPage);



/***/ }),

/***/ 39110:
/*!******************************************************************************!*\
  !*** ./src/app/pages/chequewithdrawal/chequewithdrawal.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.transactionAmounterrormsg {\n  color: red;\n  font-size: small;\n  padding-top: 7px;\n}\n\n.box {\n  font-weight: bold;\n  border-width: thin;\n  border-radius: 13px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  width: 100%;\n  height: 55px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.box ion-datetime {\n  font-weight: bold;\n}\n\n.chequeCard {\n  border-width: thin;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  width: 100%;\n  height: 100px;\n  display: inline-block;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.inputCard1 {\n  padding-top: 10%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.inputCard1 ion-label {\n  color: #444;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n\n.inputCard2 {\n  padding-top: 8%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.inputCard2 ion-label {\n  color: #444;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n\n.inputCard2 .box {\n  margin: 10px 0;\n}\n\n.textCard {\n  padding-left: 5%;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.icondate {\n  display: inline-block;\n}\n\nion-searchbar {\n  background-color: #f9fafb;\n}\n\nion-select {\n  font-family: \"Montserrat\" !important;\n  font-size: 14pt;\n  font-weight: bold;\n  letter-spacing: 0.4px;\n}\n\nion-text {\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-button {\n  width: 100%;\n  padding-left: 5%;\n  padding-right: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-input {\n  color: black !important;\n  font-size: 14pt;\n  font-weight: bold;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: #102245;\n  font-family: \"Montserrat\" !important;\n  font-size: 16px;\n  opacity: 75%;\n}\n\nion-back-button {\n  color: rgb(73, 73, 226);\n  margin-bottom: 5%;\n  font-size: larger;\n  text-transform: none;\n}\n\nion-toolbar {\n  margin-top: 7%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  padding-bottom: 3%;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 5px;\n  padding-left: 20px;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.box7 .box {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n\n.backIcon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ioncontent {\n  height: 110%;\n  margin-top: -3%;\n}\n\n.ioncontent1 {\n  height: 135%;\n}\n\n.currency_row ion-select {\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477c6;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\n.crowdsCount {\n  padding-top: 8%;\n  padding-left: 5%;\n  font-size: 16px;\n  font-weight: bold;\n  color: #444;\n}\n\nion-header ion-buttons {\n  color: rgb(73, 73, 226);\n}\n\nion-header span {\n  font-weight: bold;\n}\n\nion-back-button {\n  color: #3477c6;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.forex_header {\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.currency_row {\n  display: flex;\n  width: 100%;\n}\n\n.currency_row ion-select {\n  width: 100%;\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n\n.total_trans_row {\n  position: relative;\n  width: 100%;\n}\n\n.total_trans_row .info_btn {\n  position: absolute;\n  right: 3%;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #000;\n  font-size: 18px;\n  font-weight: 700;\n  border: 2px solid #000;\n  border-radius: 7px;\n  padding: 0 10px;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZXF1ZXdpdGhkcmF3YWwucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0SHViJTIwUmVwb3NpdG9yeSUyMG9sZFxcaUN1c3RNb2JpbGUtdjJcXHNyY1xcYXBwXFxwYWdlc1xcY2hlcXVld2l0aGRyYXdhbFxcY2hlcXVld2l0aGRyYXdhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxvQ0FBQTtFQUNBLDZDQUFBO0FDRkY7O0FESUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0RGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUZBQUE7RUFJQSxpREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUNKRjs7QURLRTtFQUNFLGlCQUFBO0FDSEo7O0FET0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7QUNMRjs7QURPQTtFQUdFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ05GOztBRFFFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDTko7O0FEU0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ05GOztBRE9FO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDTEo7O0FET0U7RUFDRSxjQUFBO0FDTEo7O0FEU0E7RUFFRSxnQkFBQTtBQ1BGOztBRGNBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNYRjs7QURjQTtFQUNFLGdCQUFBO0FDWEY7O0FEZUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNaRjs7QURjQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNYRjs7QURhQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNWRjs7QURZQTtFQUNFLHFCQUFBO0FDVEY7O0FEWUE7RUFDRSx5QkFBQTtBQ1RGOztBRFlBO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ1RGOztBRFdBO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ1JGOztBRFdBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUNSRjs7QURVQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFFQSxvQ0FBQTtBQ1JGOztBRFVBO0VBQ0UsY0FBQTtFQUNBLG9DQUFBO0VBRUEsZUFBQTtFQUVBLFlBQUE7QUNURjs7QURXQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDUkY7O0FEV0E7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQ1JGOztBRFVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFFQSxxQkFBQTtBQ1RGOztBRFdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNSRjs7QURXRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNUSjs7QURZQTtFQUNFLG1CQUFBO0VBRUEsd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDVkY7O0FEWUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ1RGOztBRFdBO0VBQ0UsWUFBQTtBQ1JGOztBRFdFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNSSjs7QURXQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ1JGOztBRFVBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ1JGOztBRHNCRTtFQUNFLHVCQUFBO0FDbkJKOztBRHNCRTtFQUNFLGlCQUFBO0FDcEJKOztBRHVCQTtFQUNFLGNBQUE7QUNwQkY7O0FEc0JBO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNuQkY7O0FEcUJBO0VBRUUsa0JBQUE7RUFDQSxpQkFBQTtBQ25CRjs7QURzQkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ25CRjs7QURvQkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNsQko7O0FEc0JBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDbkJGOztBRG9CRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNsQkoiLCJmaWxlIjoiY2hlcXVld2l0aGRyYXdhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAtb3BlcmF0aW9ue1xyXG4vLyAgICAgaGVpZ2h0OiA4MDAlO1xyXG4vLyB9XHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIC8qIEFkZCAhaW1wb3J0YW50IHRvIG92ZXJ3cml0ZSBhbGwgZWxlbWVudHMgKi9cclxufVxyXG4udHJhbnNhY3Rpb25BbW91bnRlcnJvcm1zZyB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuLmJveCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpXHJcbiAgKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICBpb24tZGF0ZXRpbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hlcXVlQ2FyZCB7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI2QzZDNkMztcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyBtYXJnaW4tbGVmdDogNCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxufVxyXG5cclxuZm9ybTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmlucHV0Q2FyZDEge1xyXG4gIC8vICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIC8vICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgfVxyXG59XHJcbi5pbnB1dENhcmQyIHtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB9XHJcbiAgLmJveCB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0Q2FyZCB7XHJcbiAgLy8gcGFkZGluZy10b3A6IC02JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcbi8vICAubGFiZWxDYXJke1xyXG4vLyAgICAgIGNvbG9yOiBncmF5O1xyXG4vLyAgICAgIC8vZm9udC1zaXplOiAyMHB4O1xyXG4vLyAgfVxyXG5cclxuLnVuZGVybGluZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiA0JTtcclxufVxyXG4uaW9uLXBhZGRpbmctdG9wIHtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIC8vIHBhZGRpbmctbGVmdDogMyU7XHJcbn1cclxuXHJcbi5pb24tcGFkZGluZy10b3AyIHtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG4uY2FuY2VsY2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDglO1xyXG4gIHBhZGRpbmctbGVmdDogNDQlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYmFja2NhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWxlZnQ6IDQ3JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmljb25kYXRlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmlvbi1zZWFyY2hiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRwdDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbn1cclxuaW9uLXRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBvcGFjaXR5OiA3NSU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgY29sb3I6ICMxMDIyNDU7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcblxyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgb3BhY2l0eTogNzUlO1xyXG59XHJcbmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgY29sb3I6IHJnYig3MywgNzMsIDIyNik7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICBtYXJnaW4tdG9wOiA3JTtcclxuICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjZDNkM2QzO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcclxufVxyXG5uZ3gtZmxhZy1waWNrZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICAvLyBwYWRkaW5nLXRvcDogMTRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgLy8gcGFkZGluZy10b3A6IDQlO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYm94NyB7XHJcbiAgcGFkZGluZy10b3A6IDAlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIC5ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbn1cclxuLmJhY2tJY29uIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIC8vIGNvbG9yOiBibHVlO1xyXG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uaW9uY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMTAlO1xyXG4gIG1hcmdpbi10b3A6IC0zJTtcclxufVxyXG4uaW9uY29udGVudDEge1xyXG4gIGhlaWdodDogMTM1JTtcclxufVxyXG4uY3VycmVuY3lfcm93IHtcclxuICBpb24tc2VsZWN0IHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxufVxyXG4udGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiAjMzQ3N2M2O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG4uY3Jvd2RzQ291bnQge1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAxY207XHJcbiAgcGFkZGluZy10b3A6IDglO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4vLyAgIC5pb25jb250ZW50e1xyXG4vLyAgICAgaGVpZ2h0OiAxMzAlO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogLTMlO1xyXG4vLyAgIH1cclxuLy8gICAuaW9uY29udGVudDF7XHJcbi8vICAgICBoZWlnaHQ6IDE2NSU7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5pb24taGVhZGVyIHtcclxuICBpb24tYnV0dG9ucyB7XHJcbiAgICBjb2xvcjogcmdiKDczLCA3MywgMjI2KTtcclxuICAgIC8vIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB9XHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICBjb2xvcjogIzM0NzdjNjtcclxufVxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICBjb2xvcjogcmdiKDcwLCAxMTEsIDI1NCk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmZvcmV4X2hlYWRlciB7XHJcbiAgLy8gcGFkZGluZy10b3A6IDQlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmN1cnJlbmN5X3JvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBpb24tc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG59XHJcblxyXG4udG90YWxfdHJhbnNfcm93IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLmluZm9fYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG59XHJcbiIsIioge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbiAgLyogQWRkICFpbXBvcnRhbnQgdG8gb3ZlcndyaXRlIGFsbCBlbGVtZW50cyAqL1xufVxuXG4udHJhbnNhY3Rpb25BbW91bnRlcnJvcm1zZyB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG59XG5cbi5ib3gge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgcmdiYSgwLCAwLCAwLCAwLjE2MDc4NDMxMzcpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xufVxuLmJveCBpb24tZGF0ZXRpbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNoZXF1ZUNhcmQge1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XG59XG5cbmZvcm06Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmlucHV0Q2FyZDEge1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cbi5pbnB1dENhcmQxIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjNDQ0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5pbnB1dENhcmQyIHtcbiAgcGFkZGluZy10b3A6IDglO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cbi5pbnB1dENhcmQyIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjNDQ0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG4uaW5wdXRDYXJkMiAuYm94IHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi50ZXh0Q2FyZCB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG5cbi51bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaW9uLXBhZGRpbmctdG9wIHtcbiAgcGFkZGluZy10b3A6IDEwJTtcbn1cblxuLmlvbi1wYWRkaW5nLXRvcDIge1xuICBwYWRkaW5nLXRvcDogOCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG5cbi5jYW5jZWxjYXJkIHtcbiAgcGFkZGluZy10b3A6IDglO1xuICBwYWRkaW5nLWxlZnQ6IDQ0JTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYmFja2NhcmQge1xuICBwYWRkaW5nLXRvcDogOCU7XG4gIHBhZGRpbmctbGVmdDogNDclO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pY29uZGF0ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xufVxuXG5pb24tdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG9wYWNpdHk6IDc1JTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogIzEwMjI0NTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3BhY2l0eTogNzUlO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogcmdiKDczLCA3MywgMjI2KTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI2QzZDNkMztcbiAgcGFkZGluZy1ib3R0b206IDMlO1xufVxuXG5uZ3gtZmxhZy1waWNrZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ib3g3IHtcbiAgcGFkZGluZy10b3A6IDAlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cbi5ib3g3IC5ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmJhY2tJY29uIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5pb25jb250ZW50IHtcbiAgaGVpZ2h0OiAxMTAlO1xuICBtYXJnaW4tdG9wOiAtMyU7XG59XG5cbi5pb25jb250ZW50MSB7XG4gIGhlaWdodDogMTM1JTtcbn1cblxuLmN1cnJlbmN5X3JvdyBpb24tc2VsZWN0IHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4udGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogIzM0NzdjNjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbn1cblxuLmNyb3dkc0NvdW50IHtcbiAgcGFkZGluZy10b3A6IDglO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzQ0NDtcbn1cblxuaW9uLWhlYWRlciBpb24tYnV0dG9ucyB7XG4gIGNvbG9yOiByZ2IoNzMsIDczLCAyMjYpO1xufVxuaW9uLWhlYWRlciBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiAjMzQ3N2M2O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uZm9yZXhfaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDMlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmN1cnJlbmN5X3JvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmN1cnJlbmN5X3JvdyBpb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnRvdGFsX3RyYW5zX3JvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4udG90YWxfdHJhbnNfcm93IC5pbmZvX2J0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDMlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgei1pbmRleDogMjtcbn0iXX0= */";

/***/ }),

/***/ 46844:
/*!******************************************************************************!*\
  !*** ./src/app/pages/chequewithdrawal/chequewithdrawal.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <app-operation [title] = \"cashWithdrawal\"></app-operation> -->\r\n<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"flag\">\r\n  <div>\r\n    <!-- <form [formGroup]=\"slideOneForm\" [disabled]=\"customerDetails.custAccount.status !== 'APPROVED'\" > -->\r\n    <form [formGroup]=\"slideOneForm\">\r\n      <div class=\"inputCard1\">\r\n        <ion-label>Account Number*</ion-label>\r\n        <!-- <ion-input class=\"box\"></ion-input> -->\r\n        <ion-select\r\n          mode=\"ios\"\r\n          class=\"box\"\r\n          (ionChange)=\"accountEvent($event)\"\r\n          formControlName=\"accountNumber\"\r\n          ngDefaultControl\r\n        >\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\"\r\n            >{{user.accountId}}</ion-select-option\r\n          >\r\n        </ion-select>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\"\r\n          >Account Balance : {{curr }} {{currentBalance}}</ion-label\r\n        >\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label>Account Currency*</ion-label>\r\n      </div>\r\n      <div class=\"box7\">\r\n        <ion-card class=\"box\">\r\n          <div class=\"currency_row\">\r\n            <ngx-flag-picker [selectedCountryCode]=\"accountCurrencyFlag\" [showFlags]=\"isShow\" [showLabels]=\"!isShow\"\r\n              [showArrow]=\"!isShow\">\r\n            </ngx-flag-picker>\r\n            <ion-input formControlName=\"accountCurrency\"\r\n              #myRef\r\n              type=\"text\"\r\n              readonly>\r\n            </ion-input>\r\n          </div>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\"\r\n          >Account Branch :\r\n          {{slideOneForm.controls.accountBranch.value}}</ion-label\r\n        >\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label>Transaction Currency*</ion-label>\r\n      </div>\r\n      <div class=\"box7\">\r\n        <ion-card class=\"box\">\r\n          <div class=\"currency_row\">\r\n            <ngx-flag-picker\r\n              [selectedCountryCode]=\"selectedCountryCode\"\r\n              [showFlags]=\"isShow\"\r\n              [showLabels]=\"!isShow\"\r\n              [showArrow]=\"!isShow\"\r\n            >\r\n            </ngx-flag-picker>\r\n            <ion-select\r\n              mode=\"ios\"\r\n              [compareWith]=\"compareWith\"\r\n              formControlName=\"transactionCurrency\"\r\n              #code\r\n              (ionChange)=\"selectCurrencyCode(code.value)\"\r\n            >\r\n              <ion-select-option\r\n                *ngFor=\"let currency of currencies\"\r\n                [value]=\"currency.countryCode\"\r\n              >\r\n                {{currency.currencyCode}}\r\n                <!-- {{currency.currencyCode + ' : ' +\r\n                  currency.countryName.toUpperCase()}} -->\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\">Transaction Amount*</ion-label>\r\n        <ion-input\r\n          class=\"box\"\r\n          #myRef\r\n          [(ngModel)]=\"transAmount\"\r\n          formControlName=\"transactionAmount\"\r\n          type=\"text\"\r\n          min=\"1\"\r\n          (keyup)=\"numberOnlyValidation($event)\"\r\n        >\r\n        </ion-input>\r\n        <div\r\n          class=\"transactionAmounterrormsg\"\r\n          *ngIf=\" transAmt > currentBalance\"\r\n        >\r\n          Transaction Amount cannot be greater than Account Balance\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\">Exchange rate*</ion-label>\r\n        <ion-input\r\n          class=\"box\"\r\n          type=\"text\"\r\n          readonly\r\n        >\r\n        </ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\">Total charge amount*</ion-label>\r\n        <ion-input\r\n          class=\"box\"\r\n          type=\"text\"\r\n        >\r\n        </ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\">Total transaction amount*</ion-label>\r\n        <div class=\"total_trans_row\">\r\n          <ion-input class=\"box\" type=\"text\">\r\n          </ion-input>\r\n          <span class=\"info_btn\">i</span>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"inputCard1\">\r\n        <ion-label>Cheque Number*</ion-label>\r\n        <!--<ion-input class=\"box\" formcontrolName=\"chequeNumber\" \r\n        type=\"number\" maxLength=\"12\"></ion-input>-->\r\n        <ion-input\r\n          class=\"box\"\r\n          formcontrolName=\"chequeNumber\"\r\n          (keypress)=\"_keyPress($event)\"\r\n          type=\"tel\"\r\n          maxLength=\"12\"\r\n        ></ion-input>\r\n      </div>\r\n\r\n      <!-- <div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\" >Account Branch*</ion-label>\r\n          <ion-input class=\"box\" formControlName=\"accountBranch\"></ion-input>\r\n      </div> -->\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            (click)=\"goToNextPage()\"\r\n            [disabled]=\"validateDisablebutton('disable1') ||!transAmount || submitted ||  transAmt > currentBalance\"\r\n            >Next</ion-button\r\n          >\r\n        </div>\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            fill=\"clear\"\r\n            style=\"color: black\"\r\n            (click)=\"goToHomepage()\"\r\n            >Cancel</ion-button\r\n          >\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar>\r\n    <ion-icon\r\n      class=\"backIcon\"\r\n      name=\"chevron-back-outline\"\r\n      (click)=\"goToPreviousPage()\"\r\n    ></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!flag\">\r\n  <div>\r\n    <form [formGroup]=\"slideOneForm\">\r\n      <!-- <div class=\"textCard\">\r\n          <ion-text>\r\n            <h5 style=\"color: gray;padding-left: 4%;\">Do you wish to perform this transaction in your home branch</h5>\r\n          </ion-text>\r\n        </div>\r\n\r\n        <div class=\"inputCard2\">\r\n          <ion-radio-group>\r\n            <ion-row>\r\n             <ion-col>\r\n               <ion-item lines=\"none\">\r\n               <ion-radio mode=\"md\" value=\"buy\"></ion-radio>\r\n               <ion-label position=\"start\" style=\"padding-left: 10px;\">yes</ion-label>\r\n               </ion-item>\r\n              </ion-col>\r\n  \r\n             <ion-col>\r\n               <ion-item lines=\"none\">\r\n               <ion-radio mode=\"md\" value=\"sell\"></ion-radio>\r\n               <ion-label style=\"padding-left: 10px;\">No</ion-label>\r\n               </ion-item>\r\n             </ion-col>\r\n            </ion-row>\r\n          </ion-radio-group>\r\n       </div> -->\r\n\r\n      <div style=\"padding-left: 5%; padding-top: 8%; padding-right: 5%\">\r\n        <ion-label\r\n          >Do you wish to perform this transaction in your home\r\n          branch?</ion-label\r\n        >\r\n        <!-- <ion-label></ion-label> -->\r\n        <ion-radio-group name=\"branchFlags\" formControlName=\"branchFlag\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"start\">Yes</ion-label>\r\n                <ion-radio\r\n                  mode=\"md\"\r\n                  item-left\r\n                  name=\"flagYes\"\r\n                  [value]=\"true\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label>No</ion-label>\r\n                <ion-radio\r\n                  mode=\"md\"\r\n                  item-left\r\n                  name=\"flagNo\"\r\n                  [value]=\"false\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-router-link\r\n          (click)=\"presentModal()\"\r\n          [hidden]=\"!nearestBrn\"\r\n          class=\"underline\"\r\n          >Click here to find the nearest branch</ion-router-link\r\n        >\r\n      </div>\r\n      <br />\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction Branch*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input\r\n              appearence=\"none\"\r\n              formControlName=\"transactionBranch\"\r\n              [readonly]=\"slideOneForm.get('branchFlag').value ? true : false\"\r\n            >\r\n            </ion-input>\r\n            <ion-icon\r\n              *ngIf=\"slideOneForm.get('branchFlag').value == true\"\r\n              name=\"home-outline\"\r\n              color=\"primary\"\r\n              slot=\"end\"\r\n            ></ion-icon>\r\n            <ion-icon\r\n              *ngIf=\"slideOneForm.get('branchFlag').value == false\"\r\n              name=\"navigate-circle-outline\"\r\n              color=\"primary\"\r\n              slot=\"end\"\r\n            ></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-note\r\n          style=\"color: red; margin-left: 22px; top: 13px\"\r\n          *ngIf=\"f.transactionBranch.errors?.required && f.transactionBranch.touched\"\r\n        >\r\n          <small>Transaction Branch Required</small>\r\n        </ion-note>\r\n      </div>\r\n      <p class=\"crowdsCount\">\r\n        Number of Crowds : {{ tokenCount || 0 }}\r\n      </p>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction date*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-datetime-button datetime=\"datetime\" showTimeLabel=\"false\"></ion-datetime-button>\r\n            <ion-modal [keepContentsMounted]=\"true\" > \r\n              <ng-template>\r\n                <ion-datetime presentation=\"date\" id=\"datetime\" displayFormat=\"DDD. MMM DD, YY\" [min]=\"minDate\"  [max]=\"maxDate\" placeholder=\"Select date\" formControlName=\"transactionDate\"></ion-datetime>\r\n              </ng-template>\r\n            </ion-modal>\r\n            <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n           </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Time Slot*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input formControlName=\"transactionTime\"></ion-input>\r\n            <!-- <ion-datetime displayFormat=\"hh:mm A\"  placeholder=\"Select time slot\" formControlName=\"transactionTime\"></ion-datetime> -->\r\n            <ion-icon\r\n              name=\"alarm-outline\"\r\n              slot=\"end\"\r\n              (click)=\"openPopup()\"\r\n            ></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div\r\n        class=\"inputCard2\"\r\n        *ngIf=\"title == 'Cheque Withdrawal' || title =='Cheque Deposit'\"\r\n      >\r\n        <ion-label position=\"stacked\">Remark</ion-label>\r\n        <ion-input class=\"chequeCard\" formControlName=\"remarks\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            (click)=\"save(slideOneForm.value)\"\r\n            >Next</ion-button\r\n          >\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            fill=\"clear\"\r\n            style=\"color: black\"\r\n            (click)=\"goToPreviousPage()\"\r\n            >Back</ion-button\r\n          >\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_chequewithdrawal_chequewithdrawal_module_ts.js.map