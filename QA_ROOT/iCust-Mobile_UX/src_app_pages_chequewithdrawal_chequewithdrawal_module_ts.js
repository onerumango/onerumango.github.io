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
        this.submitted1 = true;
        this.trnBrn = null;
        this.minDate = new Date().toISOString();
        this.maxDate = "2025";
        this.accountflag = false;
        this.defaultTransCurrency = 'INR';
        this.accountCurrencyFlag = 'in';
        this.chequeNumber = 2323232;
        this.isShow = true;
        this.selectedCountryCode = '';
    }
    ngOnInit() {
        this.getCountrynameValues();
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
            exchangeRate: [''],
            accountAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            totalChargeAmount: [''],
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
            totalTransactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            chequeNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(12)]],
        });
        console.log(this.slideOneForm.value);
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
        let today = new Date().toISOString();
        this.slideOneForm.get('transactionDate').patchValue(today);
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
                    && v.transactionCurrency != '' && v.chequeNumber != '' && v.transactionAmount != 0) {
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
        this.transAmt = this.transAmt.toString().replace(/,/g, '');
        if (parseFloat(this.currentBalance) < parseFloat(this.transAmt)) {
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
        var _a;
        console.log(currency);
        console.log(this.currencyData);
        console.log(this.currencies);
        this.currencyData = this.currencies.find(x => x.currencyCode.includes(currency));
        this.selectedCountryCode = (_a = this.currencyData) === null || _a === void 0 ? void 0 : _a.countryCode.toLowerCase();
        const currencyCode = this.currencies.find(x => x.currencyCode.includes(currency)).currencyCode;
        console.log(this.selectedCountryCode);
        this.api.getExchangeRate('INR').subscribe((res) => {
            var _a;
            console.log('res', res);
            console.log('rate---- ', res.rates[currencyCode]);
            const rate = (_a = res === null || res === void 0 ? void 0 : res.rates) === null || _a === void 0 ? void 0 : _a[currencyCode].toString();
            console.log(rate.toString());
            this.slideOneForm.get('exchangeRate').patchValue(rate);
        });
        console.log(this.selectedCountryCode);
        if (this.routerData) {
            // this.selectedCountryCode =
            //   this.routerData.data.transactionCurrency.toLowerCase();
            this.slideOneForm.controls.transactionCurrency.patchValue(this.routerData.data.transactionCurrency);
        }
    }
    savingAccountFun(filteredResponseSavingAccount) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        console.log(filteredResponseSavingAccount);
        this.users = filteredResponseSavingAccount.custAccount;
        this.customerId = filteredResponseSavingAccount.customerId;
        this.curr = (0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.getCurrencySymbol)(filteredResponseSavingAccount.custAccount[0].accountCurrency, "narrow");
        this.currentBalance = this.users[0].amount;
        if (this.accountInfo.accountId != null) {
            this.api.getChargeDetails(this.accountInfo.accountId).subscribe(resp => {
                var _a, _b;
                console.log('resp:: ', resp);
                this.chargeAmount = (_a = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _a === void 0 ? void 0 : _a.amount;
                this.slideOneForm.get('totalChargeAmount').patchValue((_b = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _b === void 0 ? void 0 : _b.amount);
            }, err => console.log('Error: ', err));
            this.slideOneForm.get('accountNumber').patchValue(this.accountInfo.accountId);
        }
        else {
            this.slideOneForm.get('accountNumber').patchValue(this.users[0].accountId);
        }
        console.log('user::', this.users);
        this.accountflag = this.users.length == 1 ? true : false;
        this.selectedCountryCode = filteredResponseSavingAccount.countryCode.toLowerCase();
        this.slideOneForm.controls.transactionCurrency.patchValue(filteredResponseSavingAccount.countryCode);
        // this.slideOneForm.controls.accountCurrency.patchValue(filteredResponseSavingAccount.accountCurrency);
        this.slideOneForm.controls.accountBranch.patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        this.slideOneForm.get('transactionBranch').patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        if (this.routerData) {
            console.log(this.routerData);
            // this.defaultTransCurrency = this.routerData?.data?.transactionCurrency;
            this.slideOneForm
                .get('accountNumber').patchValue((_b = (_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.accountNumber);
            this.slideOneForm
                .get('transactionAmount').patchValue((_d = (_c = this.routerData) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.transactionAmount);
            this.slideOneForm
                .get('totalTransactionAmount').patchValue((_f = (_e = this.routerData) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.totalTransactionAmount);
            this.slideOneForm
                .get('transactionCurrency').patchValue((_h = (_g = this.routerData) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.transactionCurrency);
            this.slideOneForm
                .get('transactionBranch').patchValue((_k = (_j = this.routerData) === null || _j === void 0 ? void 0 : _j.data) === null || _k === void 0 ? void 0 : _k.transactionBranch);
            this.slideOneForm
                .get('chequeNumber').patchValue((_m = (_l = this.routerData) === null || _l === void 0 ? void 0 : _l.data) === null || _m === void 0 ? void 0 : _m.chequeNumber);
            this.slideOneForm
                .get('transactionDate').patchValue((_p = (_o = this.routerData) === null || _o === void 0 ? void 0 : _o.data) === null || _p === void 0 ? void 0 : _p.transactionDate);
            this.slideOneForm
                .get('transactionTime').patchValue((_r = (_q = this.routerData) === null || _q === void 0 ? void 0 : _q.data) === null || _r === void 0 ? void 0 : _r.transactionTime);
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
        var _a, _b, _c;
        console.log(form);
        form.transactionDate.toString();
        var date = new Date(form.transactionDate);
        console.log(date); //4/
        let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
        form.transactionDate = latest_date;
        // form.transactionTime=format(new Date(form.transactionTime), "HH:mm");
        this.currencyData = this.currencies.find(x => x.countryCode == form.transactionCurrency);
        form.transactionCurrency = ((_a = this.currencyData) === null || _a === void 0 ? void 0 : _a.currencyCode) || '';
        form.accountCurrency = ((_b = this.accountDetails) === null || _b === void 0 ? void 0 : _b.accountCurrency) || '';
        // form.transactionTime = format(new Date(form.transactionTime), 'hh:mm:ss a');
        form.accountCurrency = ((_c = this.accountDetails) === null || _c === void 0 ? void 0 : _c.accountCurrency) || "";
        form.customerId = this.customerId;
        form.productCode = this.productCode;
        form.tokenOrigin = this.tokenOrigin;
        if (this.routerData) {
            form.appointmentId = this.routerData.data.appointmentId;
            form.operation = 'update';
        }
        console.log(form);
        // form.transactionTime = this.format24HrsTo12Hrs(form.transactionTime);
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
        console.log(this.transactionAmount);
        form.isMobileTrans = true;
        //console.log(form);
        if (this.routerData) {
            this.api.appointmentBooking(form).subscribe(resp => {
                console.log('backend resp', resp);
                this.chequeWithdrawal = resp;
                localStorage.setItem("TransactionTime", resp.transactionTime);
                this.transactionId = this.chequeWithdrawal.transactionId;
                localStorage.setItem('AppointmentDetails', JSON.stringify(resp));
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
            form.transactionAmount = form.transactionAmount.toString().replace(/,/g, '');
            this.api.cashDepositSave(form).subscribe((resp) => {
                console.log('backend resp', resp);
                this.chequeWithdrawal = resp;
                localStorage.setItem("TransactionTime", resp.transactionTime);
                this.transactionId = this.chequeWithdrawal.transactionId;
                localStorage.setItem('AppointmentDetails', JSON.stringify(resp));
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
            this.slideOneForm.controls.accountCurrency.patchValue(accbal.accountCurrency);
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
    _keyPress(event) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    changeChequeNumber(event) {
        this.chequeNumber = event.target.value;
        this.slideOneForm.get('chequeNumber').patchValue(event.target.value);
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

/***/ 39110:
/*!******************************************************************************!*\
  !*** ./src/app/pages/chequewithdrawal/chequewithdrawal.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.transactionAmounterrormsg {\n  color: red;\n  font-size: small;\n  padding-top: 7px;\n}\n\n.box {\n  font-weight: bold;\n  border-width: thin;\n  border-radius: 13px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  width: 100%;\n  height: 55px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.box ion-datetime {\n  font-weight: bold;\n}\n\n.chequeCard {\n  border-width: thin;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  width: 100%;\n  height: 100px;\n  display: inline-block;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.inputCard {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  position: relative;\n}\n\n.inputCard1 {\n  padding-top: 10%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.inputCard1 ion-label {\n  color: #444;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n\n.inputCard2 {\n  padding-top: 8%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.inputCard2 ion-label {\n  color: #444;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n\n.inputCard2 .box {\n  margin: 10px 0;\n}\n\n.textCard {\n  padding-left: 5%;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.icondate {\n  display: inline-block;\n}\n\nion-searchbar {\n  background-color: #f9fafb;\n}\n\nion-select {\n  font-family: \"Montserrat\" !important;\n  font-size: 14pt;\n  font-weight: bold;\n  letter-spacing: 0.4px;\n}\n\nion-text {\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-button {\n  width: 100%;\n  padding-left: 5%;\n  padding-right: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-input {\n  color: black !important;\n  font-size: 12pt;\n  font-weight: bold;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n  padding-left: 15px !important;\n}\n\nion-label {\n  color: #102245;\n  font-family: \"Montserrat\" !important;\n  font-size: 16px;\n  opacity: 75%;\n}\n\nion-back-button {\n  color: rgb(73, 73, 226);\n  margin-bottom: 5%;\n  font-size: larger;\n  text-transform: none;\n}\n\nion-toolbar {\n  margin-top: 7%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  padding-bottom: 3%;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 5px;\n  padding-left: 20px;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.box7 .box {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n\n.backIcon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ioncontent {\n  height: 110%;\n  margin-top: -3%;\n}\n\n.ioncontent1 {\n  height: 135%;\n}\n\n.currency_row ion-select {\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477c6;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\n.crowdsCount {\n  padding-top: 8%;\n  padding-left: 5%;\n  font-size: 16px;\n  font-weight: bold;\n  color: #444;\n}\n\nion-header ion-buttons {\n  color: rgb(73, 73, 226);\n}\n\nion-header span {\n  font-weight: bold;\n}\n\nion-back-button {\n  color: #3477c6;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.forex_header {\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.currency_row {\n  display: flex;\n  width: 100%;\n}\n\n.currency_row ion-select {\n  width: 100%;\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n\n.total_trans_row {\n  position: relative;\n  width: 100%;\n}\n\n.total_trans_row .info_btn {\n  position: absolute;\n  right: 5%;\n  top: 50%;\n  transform: translateX(-50%);\n  color: #000;\n  font-size: 18px;\n  font-weight: 700;\n  border: 2px solid #000;\n  border-radius: 7px;\n  padding: 0 10px;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZXF1ZXdpdGhkcmF3YWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usb0NBQUE7RUFDQSw2Q0FBQTtBQUZGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFGQUFBO0VBSUEsaURBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBSkY7O0FBS0U7RUFDRSxpQkFBQTtBQUhKOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0FBTEY7O0FBUUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFHRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFQRjs7QUFTRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQVBKOztBQVVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFQRjs7QUFRRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQU5KOztBQVFFO0VBQ0UsY0FBQTtBQU5KOztBQVVBO0VBRUUsZ0JBQUE7QUFSRjs7QUFlQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBWkY7O0FBZUE7RUFDRSxnQkFBQTtBQVpGOztBQWdCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQWJGOztBQWVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVpGOztBQWNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVhGOztBQWFBO0VBQ0UscUJBQUE7QUFWRjs7QUFhQTtFQUNFLHlCQUFBO0FBVkY7O0FBYUE7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBVkY7O0FBWUE7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBVEY7O0FBWUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQVRGOztBQVdBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUVBLG9DQUFBO0VBQ0EsNkJBQUE7QUFURjs7QUFXQTtFQUNFLGNBQUE7RUFDQSxvQ0FBQTtFQUVBLGVBQUE7RUFFQSxZQUFBO0FBVkY7O0FBWUE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQVRGOztBQVlBO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFURjs7QUFXQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBRUEscUJBQUE7QUFWRjs7QUFZQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBVEY7O0FBWUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBVko7O0FBYUE7RUFDRSxtQkFBQTtFQUVBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQVhGOztBQWFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFWRjs7QUFZQTtFQUNFLFlBQUE7QUFURjs7QUFZRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBVEo7O0FBWUE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFURjs7QUFXQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFURjs7QUF1QkU7RUFDRSx1QkFBQTtBQXBCSjs7QUF1QkU7RUFDRSxpQkFBQTtBQXJCSjs7QUF3QkE7RUFDRSxjQUFBO0FBckJGOztBQXVCQTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBcEJGOztBQXNCQTtFQUVFLGtCQUFBO0VBQ0EsaUJBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFwQkY7O0FBcUJFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBbkJKOztBQXVCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQXBCRjs7QUFxQkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBbkJKIiwiZmlsZSI6ImNoZXF1ZXdpdGhkcmF3YWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLW9wZXJhdGlvbntcclxuLy8gICAgIGhlaWdodDogODAwJTtcclxuLy8gfVxyXG4qIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICAvKiBBZGQgIWltcG9ydGFudCB0byBvdmVyd3JpdGUgYWxsIGVsZW1lbnRzICovXHJcbn1cclxuLnRyYW5zYWN0aW9uQW1vdW50ZXJyb3Jtc2cge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBwYWRkaW5nLXRvcDogN3B4O1xyXG59XHJcbi5ib3gge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KVxyXG4gICk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgaW9uLWRhdGV0aW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuLmNoZXF1ZUNhcmQge1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDQlO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbn1cclxuXHJcbmZvcm06Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaW5wdXRDYXJkIHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbnB1dENhcmQxIHtcclxuICAvLyAgcGFkZGluZy10b3A6IDEwJTtcclxuICAvLyAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIH1cclxufVxyXG4uaW5wdXRDYXJkMiB7XHJcbiAgcGFkZGluZy10b3A6IDglO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgfVxyXG4gIC5ib3gge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dENhcmQge1xyXG4gIC8vIHBhZGRpbmctdG9wOiAtNiU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG4vLyAgLmxhYmVsQ2FyZHtcclxuLy8gICAgICBjb2xvcjogZ3JheTtcclxuLy8gICAgICAvL2ZvbnQtc2l6ZTogMjBweDtcclxuLy8gIH1cclxuXHJcbi51bmRlcmxpbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIC8vIHBhZGRpbmctbGVmdDogNCU7XHJcbn1cclxuLmlvbi1wYWRkaW5nLXRvcCB7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDMlO1xyXG59XHJcblxyXG4uaW9uLXBhZGRpbmctdG9wMiB7XHJcbiAgcGFkZGluZy10b3A6IDglO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuLmNhbmNlbGNhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWxlZnQ6IDQ0JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmJhY2tjYXJkIHtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0NyU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5pY29uZGF0ZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG59XHJcbmlvbi10ZXh0IHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgb3BhY2l0eTogNzUlO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJwdDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gIGNvbG9yOiAjMTAyMjQ1O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG5cclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIG9wYWNpdHk6IDc1JTtcclxufVxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gIGNvbG9yOiByZ2IoNzMsIDczLCAyMjYpO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgbWFyZ2luLXRvcDogNyU7XHJcbiAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI2QzZDNkMztcclxuICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbn1cclxubmd4LWZsYWctcGlja2VyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgLy8gcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIC8vIHBhZGRpbmctdG9wOiA0JTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmJveDcge1xyXG4gIHBhZGRpbmctdG9wOiAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIC8vIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAuYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG59XHJcbi5iYWNrSWNvbiB7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAvLyBjb2xvcjogYmx1ZTtcclxuICBjb2xvcjogcmdiKDcwLCAxMTEsIDI1NCk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmlvbmNvbnRlbnQge1xyXG4gIGhlaWdodDogMTEwJTtcclxuICBtYXJnaW4tdG9wOiAtMyU7XHJcbn1cclxuLmlvbmNvbnRlbnQxIHtcclxuICBoZWlnaHQ6IDEzNSU7XHJcbn1cclxuLmN1cnJlbmN5X3JvdyB7XHJcbiAgaW9uLXNlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbn1cclxuLnRleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogIzM0NzdjNjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNyb3dkc0NvdW50IHtcclxuICAvLyBtYXJnaW4tbGVmdDogMWNtO1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzQ0NDtcclxufVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuLy8gICAuaW9uY29udGVudHtcclxuLy8gICAgIGhlaWdodDogMTMwJTtcclxuLy8gICAgIG1hcmdpbi10b3A6IC0zJTtcclxuLy8gICB9XHJcbi8vICAgLmlvbmNvbnRlbnQxe1xyXG4vLyAgICAgaGVpZ2h0OiAxNjUlO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgaW9uLWJ1dHRvbnMge1xyXG4gICAgY29sb3I6IHJnYig3MywgNzMsIDIyNik7XHJcbiAgICAvLyBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgfVxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcbmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgY29sb3I6ICMzNDc3YzY7XHJcbn1cclxuaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5mb3JleF9oZWFkZXIge1xyXG4gIC8vIHBhZGRpbmctdG9wOiA0JTtcclxuICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jdXJyZW5jeV9yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaW9uLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxufVxyXG5cclxuLnRvdGFsX3RyYW5zX3JvdyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC5pbmZvX2J0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 46844:
/*!******************************************************************************!*\
  !*** ./src/app/pages/chequewithdrawal/chequewithdrawal.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <app-operation [title] = \"cashWithdrawal\"></app-operation> -->\r\n<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"flag\">\r\n  <div>\r\n    <!-- <form [formGroup]=\"slideOneForm\" [disabled]=\"customerDetails.custAccount.status !== 'APPROVED'\" > -->\r\n    <form [formGroup]=\"slideOneForm\">\r\n      <div class=\"inputCard1\">\r\n        <ion-label>Account Number*</ion-label>\r\n        <!-- <ion-input class=\"box\"></ion-input> -->\r\n        <ion-select\r\n          mode=\"ios\" *ngIf=\"!accountflag\"\r\n          class=\"box\"\r\n          (ionChange)=\"accountEvent($event)\"\r\n          formControlName=\"accountNumber\"\r\n          ngDefaultControl\r\n        >\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\"\r\n            >{{user.accountId}}</ion-select-option>\r\n        </ion-select>\r\n        <ion-input\r\n        mode=\"ios\" *ngIf=\"accountflag\" \r\n        class=\"box\"\r\n        formControlName=\"accountNumber\"\r\n        type=\"text\"\r\n        readonly\r\n      >\r\n      </ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\"\r\n          >Account Balance : {{curr }} {{currentBalance}}</ion-label\r\n        >\r\n      </div>\r\n\r\n      <!-- <div class=\"inputCard1\">\r\n        <ion-label>Account Currency*</ion-label>\r\n      </div>\r\n      <div class=\"box7\">\r\n        <ion-card class=\"box\">\r\n          <div class=\"currency_row\">\r\n            <ngx-flag-picker [selectedCountryCode]=\"accountCurrencyFlag\" [showFlags]=\"isShow\" [showLabels]=\"!isShow\"\r\n              [showArrow]=\"!isShow\">\r\n            </ngx-flag-picker>\r\n            <ion-input formControlName=\"accountCurrency\"\r\n              #myRef\r\n              type=\"text\"\r\n              readonly>\r\n            </ion-input>\r\n          </div>\r\n        </ion-card>\r\n      </div> -->\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\"\r\n          >Account Branch :\r\n          {{slideOneForm.controls.accountBranch.value}}</ion-label\r\n        >\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\">Account Currency :\r\n          {{slideOneForm.controls.accountCurrency.value}}</ion-label>\r\n      </div>\r\n\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label>Transaction Currency*</ion-label>\r\n      </div>\r\n      <div class=\"box7\">\r\n        <ion-card class=\"box\">\r\n          <div class=\"currency_row\">\r\n            <ngx-flag-picker\r\n              [selectedCountryCode]=\"selectedCountryCode\"\r\n              [showFlags]=\"isShow\"\r\n              [showLabels]=\"!isShow\"\r\n              [showArrow]=\"!isShow\"\r\n            >\r\n            </ngx-flag-picker>\r\n            <ion-select\r\n              mode=\"ios\"\r\n              [(ngModel)]=\"defaultTransCurrency\"\r\n              [compareWith]=\"compareWith\"\r\n              formControlName=\"transactionCurrency\"\r\n              #code\r\n              (ionChange)=\"selectCurrencyCode(code.value)\"\r\n            >\r\n              <ion-select-option\r\n                *ngFor=\"let currency of currencies\"\r\n                [value]=\"currency.countryCode\"\r\n              >\r\n                {{currency.currencyCode}}\r\n                <!-- {{currency.currencyCode + ' : ' +\r\n                  currency.countryName.toUpperCase()}} -->\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\">Transaction Amount*</ion-label>\r\n        <ion-input\r\n          class=\"box\"\r\n          #myRef\r\n          [(ngModel)]=\"transAmount\"\r\n          (keyup)=\"changeTransAmount($event)\"\r\n          formControlName=\"transactionAmount\"\r\n          type=\"text\"\r\n          min=\"1\"\r\n          (keyup)=\"numberOnlyValidation($event)\"\r\n        >\r\n        </ion-input>\r\n        <div\r\n          class=\"transactionAmounterrormsg\"\r\n          *ngIf=\" transAmt > currentBalance\"\r\n        >\r\n          Transaction Amount cannot be greater than Account Balance\r\n        </div>\r\n      </div>\r\n      \r\n      <!-- <div class=\"inputCard1\" *ngIf=\"accountCurrencyFlag !== selectedCountryCode\">\r\n        <ion-label position=\"stacked\">Exchange rate*</ion-label>\r\n        <ion-input\r\n          class=\"box\"\r\n          type=\"text\"\r\n          formControlName=\"exchangeRate\"\r\n          readonly\r\n        >\r\n        </ion-input>\r\n      </div> -->\r\n\r\n      <!-- <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\">Total charge amount*</ion-label>\r\n        <ion-input\r\n          class=\"box\"\r\n          type=\"text\"\r\n          formControlName=\"totalChargeAmount\"\r\n        >\r\n        </ion-input>\r\n      </div> -->\r\n\r\n      <!-- <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\">Total transaction amount*</ion-label>\r\n        <div class=\"total_trans_row\">\r\n          <ion-input class=\"box\" type=\"text\" formControlName=\"totalTransactionAmount\">\r\n          </ion-input>\r\n          <span class=\"info_btn\">i</span>\r\n        </div>\r\n      </div> -->\r\n      \r\n      <div class=\"inputCard1\">\r\n        <ion-label>Cheque Number*</ion-label>\r\n        <!--<ion-input class=\"box\" formcontrolName=\"chequeNumber\" \r\n        type=\"number\" maxLength=\"12\"></ion-input>-->\r\n        <ion-input\r\n          class=\"box\"\r\n          [(ngModel)]=\"cheque\"\r\n          [ngModelOptions]=\"{standalone: true}\"\r\n          formcontrolName=\"chequeNumber\"\r\n          (keypress)=\"_keyPress($event)\"\r\n          type=\"tel\"\r\n          maxLength=\"12\"\r\n          (ionChange)=\"changeChequeNumber($event)\"\r\n        ></ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard\" *ngIf=\"selectedCountryCode && !slideOneForm.get('accountCurrency').value.toLowerCase().includes(selectedCountryCode.toLowerCase())\">\r\n        <ion-input class=\"box\" placeholder=\"Exchange Rate\" formControlName=\"exchangeRate\" name=\"exchangeRate\"\r\n          ngDefaultControl></ion-input>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-input class=\"box\" placeholder=\"Total Charge Amount\" name=\"chargeAMount\" formControlName=\"totalChargeAmount\" name=\"totalchargeAmount\"\r\n          ngDefaultControl></ion-input>\r\n      </div>\r\n      <div class=\"inputCard total_trans_row\">\r\n        <ion-input class=\"box\" placeholder=\"Total Transaction Amount\" formControlName=\"totalTransactionAmount\"\r\n          ngDefaultControl></ion-input>\r\n        <span class=\"info_btn\">i</span>\r\n      </div>\r\n      \r\n\r\n      <!-- <div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\" >Account Branch*</ion-label>\r\n          <ion-input class=\"box\" formControlName=\"accountBranch\"></ion-input>\r\n      </div> -->\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            (click)=\"goToNextPage()\"\r\n            [disabled]=\"validateDisablebutton('disable1') ||!transAmount ||!cheque || submitted ||  transAmt > currentBalance\"\r\n            >Next</ion-button\r\n          >\r\n        </div>\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            fill=\"clear\"\r\n            style=\"color: black\"\r\n            (click)=\"goToHomepage()\"\r\n            >Cancel</ion-button\r\n          >\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar>\r\n    <ion-icon\r\n      class=\"backIcon\"\r\n      name=\"chevron-back-outline\"\r\n      (click)=\"goToPreviousPage()\"\r\n    ></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!flag\">\r\n  <div>\r\n    <form [formGroup]=\"slideOneForm\">\r\n      <!-- <div class=\"textCard\">\r\n          <ion-text>\r\n            <h5 style=\"color: gray;padding-left: 4%;\">Do you wish to perform this transaction in your home branch</h5>\r\n          </ion-text>\r\n        </div>\r\n\r\n        <div class=\"inputCard2\">\r\n          <ion-radio-group>\r\n            <ion-row>\r\n             <ion-col>\r\n               <ion-item lines=\"none\">\r\n               <ion-radio mode=\"md\" value=\"buy\"></ion-radio>\r\n               <ion-label position=\"start\" style=\"padding-left: 10px;\">yes</ion-label>\r\n               </ion-item>\r\n              </ion-col>\r\n  \r\n             <ion-col>\r\n               <ion-item lines=\"none\">\r\n               <ion-radio mode=\"md\" value=\"sell\"></ion-radio>\r\n               <ion-label style=\"padding-left: 10px;\">No</ion-label>\r\n               </ion-item>\r\n             </ion-col>\r\n            </ion-row>\r\n          </ion-radio-group>\r\n       </div> -->\r\n\r\n      <div style=\"padding-left: 5%; padding-top: 8%; padding-right: 5%\">\r\n        <ion-label\r\n          >Do you wish to perform this transaction in your home\r\n          branch?</ion-label\r\n        >\r\n        <!-- <ion-label></ion-label> -->\r\n        <ion-radio-group name=\"branchFlags\" formControlName=\"branchFlag\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"start\">Yes</ion-label>\r\n                <ion-radio\r\n                  mode=\"md\"\r\n                  item-left\r\n                  name=\"flagYes\"\r\n                  [value]=\"true\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label>No</ion-label>\r\n                <ion-radio\r\n                  mode=\"md\"\r\n                  item-left\r\n                  name=\"flagNo\"\r\n                  [value]=\"false\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-router-link\r\n          (click)=\"presentModal()\"\r\n          [hidden]=\"!nearestBrn\"\r\n          class=\"underline\"\r\n          >Click here to find the nearest branch</ion-router-link\r\n        >\r\n      </div>\r\n      <br />\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction Branch*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input\r\n              appearence=\"none\"\r\n              formControlName=\"transactionBranch\"\r\n              [readonly]=\"slideOneForm.get('branchFlag').value ? true : false\"\r\n            >\r\n            </ion-input>\r\n            <ion-icon\r\n              *ngIf=\"slideOneForm.get('branchFlag').value == true\"\r\n              name=\"home-outline\"\r\n              color=\"primary\"\r\n              slot=\"end\"\r\n            ></ion-icon>\r\n            <ion-icon\r\n              *ngIf=\"slideOneForm.get('branchFlag').value == false\"\r\n              name=\"navigate-circle-outline\"\r\n              color=\"primary\"\r\n              slot=\"end\"\r\n            ></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-note\r\n          style=\"color: red; margin-left: 22px; top: 13px\"\r\n          *ngIf=\"f.transactionBranch.errors?.required && f.transactionBranch.touched\"\r\n        >\r\n          <small>Transaction Branch Required</small>\r\n        </ion-note>\r\n      </div>\r\n      <p class=\"crowdsCount\">\r\n        Number of Crowds : {{ tokenCount || 0 }}\r\n      </p>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction date*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-datetime-button datetime=\"datetime\" showTimeLabel=\"false\"></ion-datetime-button>\r\n            <ion-modal [keepContentsMounted]=\"true\" > \r\n              <ng-template>\r\n                <ion-datetime presentation=\"date\" id=\"datetime\" displayFormat=\"DDD. MMM DD, YY\" [min]=\"minDate\"  [max]=\"maxDate\" \r\n                placeholder=\"Select date\" formControlName=\"transactionDate\"\r\n                [showDefaultTitle]=\"true\"\r\n                [showDefaultButtons]=\"true\"\r\n                #datetime></ion-datetime>\r\n              </ng-template>\r\n            </ion-modal>\r\n            <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n           </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Time Slot*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input formControlName=\"transactionTime\" [readonly]=\"true\"></ion-input>\r\n            <!-- <ion-datetime displayFormat=\"hh:mm A\"  placeholder=\"Select time slot\" formControlName=\"transactionTime\"></ion-datetime> -->\r\n            <ion-icon\r\n              name=\"alarm-outline\"\r\n              slot=\"end\"\r\n              (click)=\"openPopup()\"\r\n            ></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div\r\n        class=\"inputCard2\"\r\n        *ngIf=\"title == 'Cheque Withdrawal' || title =='Cheque Deposit'\"\r\n      >\r\n        <ion-label position=\"stacked\">Remark</ion-label>\r\n        <ion-input class=\"chequeCard\" formControlName=\"remarks\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            (click)=\"save(slideOneForm.value)\"\r\n            [disabled]=\"validateDisablebutton('disable2')  || submitted1\"\r\n            >Next</ion-button\r\n          >\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            fill=\"clear\"\r\n            style=\"color: black\"\r\n            (click)=\"goToPreviousPage()\"\r\n            >Back</ion-button\r\n          >\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_chequewithdrawal_chequewithdrawal_module_ts.js.map