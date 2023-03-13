"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_v2_loan-disbursement-v2_loan-disbursement-v2_module_ts"],{

/***/ 94144:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/v2/loan-disbursement-v2/loan-disbursement-v2-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanDisbursementV2PageRoutingModule": () => (/* binding */ LoanDisbursementV2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_disbursement_v2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-disbursement-v2.page */ 15968);




const routes = [
    {
        path: '',
        component: _loan_disbursement_v2_page__WEBPACK_IMPORTED_MODULE_0__.LoanDisbursementV2Page
    }
];
let LoanDisbursementV2PageRoutingModule = class LoanDisbursementV2PageRoutingModule {
};
LoanDisbursementV2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoanDisbursementV2PageRoutingModule);



/***/ }),

/***/ 45406:
/*!******************************************************************************!*\
  !*** ./src/app/pages/v2/loan-disbursement-v2/loan-disbursement-v2.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanDisbursementV2PageModule": () => (/* binding */ LoanDisbursementV2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_disbursement_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-disbursement-v2-routing.module */ 94144);
/* harmony import */ var _loan_disbursement_v2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-disbursement-v2.page */ 15968);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-flag-picker */ 96801);
/* harmony import */ var src_app_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/directives/directive.module */ 27589);











let LoanDisbursementV2PageModule = class LoanDisbursementV2PageModule {
};
LoanDisbursementV2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_10__.NgxFlagPickerModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            src_app_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__.DirectiveModule,
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__.SharedMaterialModule,
            _loan_disbursement_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoanDisbursementV2PageRoutingModule
        ],
        declarations: [_loan_disbursement_v2_page__WEBPACK_IMPORTED_MODULE_1__.LoanDisbursementV2Page],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_ELEMENTS_SCHEMA
        ],
    })
], LoanDisbursementV2PageModule);



/***/ }),

/***/ 15968:
/*!****************************************************************************!*\
  !*** ./src/app/pages/v2/loan-disbursement-v2/loan-disbursement-v2.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanDisbursementV2Page": () => (/* binding */ LoanDisbursementV2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _loan_disbursement_v2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-disbursement-v2.page.html?ngResource */ 33058);
/* harmony import */ var _loan_disbursement_v2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-disbursement-v2.page.scss?ngResource */ 9395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _token_v2_token_v2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../token-v2/token-v2.page */ 68106);
/* harmony import */ var src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/branch/branch.component */ 6156);
/* harmony import */ var src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/time-slots/time-slots.component */ 19023);
/* harmony import */ var src_app_components_add_account_add_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/add-account/add-account.component */ 44421);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var src_app_components_denomination_slide_denomination_slide_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/denomination-slide/denomination-slide.component */ 9340);
/* harmony import */ var src_app_components_transaction_date_transaction_date_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/transaction-date/transaction-date.component */ 19693);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material-moment-adapter */ 8441);
/* harmony import */ var _forex_cash_v2_forex_cash_v2_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../forex-cash-v2/forex-cash-v2.page */ 23342);























;
let LoanDisbursementV2Page = class LoanDisbursementV2Page {
    constructor(formBuilder, api, router, shareDataService, loading, cdr, modalController, toastService, datepipe) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router;
        this.shareDataService = shareDataService;
        this.loading = loading;
        this.cdr = cdr;
        this.modalController = modalController;
        this.toastService = toastService;
        this.datepipe = datepipe;
        this.productCode = 'LND';
        this.tokenOrigin = 'Mobile';
        this.isShow = true;
        this.animationState = 'out';
        this.editMode = false;
        this.chargeAmount = 5;
        this.currencyControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('');
        this.custAccounts = [];
        this.filteredLoanAccount = [];
        this.isShowDenomError = false;
        this.isShowDisburseValid = false;
        this.homeIconToggle = false;
        this.paymentMode = ['Cash', 'Account', 'Cheque'];
        this.cheque_types = ['Banker Cheque', 'Demand Draft'];
        this.LOAN_TYPE = ['Home Loan', 'Vehicle Loan', 'Educational Loan'];
        this.selecteCHQOption = 'Banker Cheque';
        this.paymentModeSelected = 'Cash';
        this.loanAccounts = [];
        this.module = "Disbursement";
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e;
        this.currentUser = this.shareDataService.getCurrentUser();
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.customerId = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.customerId;
        this.currencies = JSON.parse(localStorage.getItem('COUNTRIES'));
        this.formInit();
        this.getLoanAccounts();
        this.fetchDisbursementAccInfo();
        this.loadData();
        if (this.router.getCurrentNavigation() != null) {
            this.routerData = this.router.getCurrentNavigation().extras.state;
            console.log("Values?", this.routerData);
            this.editMode = ((_b = this.routerData) === null || _b === void 0 ? void 0 : _b.data) ? true : false;
        }
        if (this.editMode) {
            const data = (_c = this.routerData) === null || _c === void 0 ? void 0 : _c.data;
            const countryCode = this.currencies.filter((i) => i.currencyCode === (data === null || data === void 0 ? void 0 : data.transactionCurrency));
            this.selectedCurrency = countryCode[0];
            this.selectedCountryCode = (_d = this.selectedCurrency) === null || _d === void 0 ? void 0 : _d.countryCode.toLowerCase();
        }
        else {
            const countryCode = this.currencies.filter((i) => i.currencyCode === "INR");
            this.selectedCurrency = countryCode[0];
        }
        this.shareDataService.getAccountInfo.subscribe(data => {
            this.accountInfo = data;
        });
        (_e = this.loanForm.get('transactionAmount')) === null || _e === void 0 ? void 0 : _e.valueChanges.subscribe(val => {
            var _a;
            if (val) {
                (_a = this.denomButtonRef) === null || _a === void 0 ? void 0 : _a.nativeElement.classList.add('active-bg');
            }
        });
        this.filteredOptions = this.currencyControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)((value) => {
            const currencyCode = typeof value === 'string' ? value : value === null || value === void 0 ? void 0 : value.currencyCode;
            return currencyCode ? this._filter(currencyCode) : this.currencies.slice();
        }));
        let today = new Date().toISOString();
        const convertedDate = this.datepipe.transform(today, 'yyyy-MM-dd');
        this.loanForm.get('transactionDate').patchValue(convertedDate);
    }
    onScreenRefresh() {
        var _a, _b, _c, _d, _e;
        this.editMode = ((_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) ? true : false;
        this.currentUser = this.shareDataService.getCurrentUser();
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.customerId = (_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.customerId;
        this.currencies = JSON.parse(localStorage.getItem('COUNTRIES'));
        if (this.editMode) {
            const data = (_c = this.routerData) === null || _c === void 0 ? void 0 : _c.data;
            const countryCode = this.currencies.filter((i) => i.currencyCode === (data === null || data === void 0 ? void 0 : data.transactionCurrency));
            this.selectedCurrency = countryCode[0];
            this.selectedCountryCode = (_d = this.selectedCurrency) === null || _d === void 0 ? void 0 : _d.countryCode.toLowerCase();
        }
        else {
            const countryCode = this.currencies.filter((i) => i.currencyCode === "INR");
            this.selectedCurrency = countryCode[0];
        }
        this.formInit();
        this.loadData();
        this.shareDataService.getAccountInfo.subscribe(data => {
            this.accountInfo = data;
        });
        this.loanForm.get('transactionAmount').valueChanges.subscribe(val => {
            var _a;
            if (val) {
                (_a = this.denomButtonRef) === null || _a === void 0 ? void 0 : _a.nativeElement.classList.add('active-bg');
            }
        });
        (_e = this.loanForm.get('transactionAmount')) === null || _e === void 0 ? void 0 : _e.valueChanges.subscribe(val => {
            var _a, _b;
            if (val) {
                (_a = this.denomButtonRef) === null || _a === void 0 ? void 0 : _a.nativeElement.classList.add('active-bg');
                this.updateTransAmount();
                if (((_b = this.loanForm.get('paymentMethod')) === null || _b === void 0 ? void 0 : _b.value) == "Cash") {
                    this.denomValidationListener();
                }
            }
        });
    }
    onScroll() {
        var _a;
        if ((_a = this.autocomplete) === null || _a === void 0 ? void 0 : _a.panelOpen) {
            this.autocomplete.updatePosition();
        }
    }
    formInit() {
        this.loanForm = this.formBuilder.group({
            transactionId: [''],
            customerId: [''],
            productCode: [this.productCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            tokenOrigin: ['Mobile', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            loanAccountNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            accountNumber: [''],
            accountType: [''],
            accountPaymentNumber: [''],
            accountBalance: [''],
            accountCurrency: [''],
            denomination: [],
            transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            branchFlag: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            accountBranch: [''],
            transactionDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            isMobileTrans: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            transactionTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            totalChargeAmount: [this.chargeAmount, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            totalTransactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            paymentMethod: [''],
            chequeNumber: [''],
            chequeType: [''],
            chequeName: [''],
            exchangeRate: [''],
            accountAmount: [''],
            totalAmount: [''],
            remarks: ['']
        });
    }
    _filter(currency) {
        const filterValue = currency.toLowerCase();
        return this.currencies.filter(option => option.currencyCode.toLowerCase().includes(filterValue));
    }
    getLoanAccounts() {
        this.api.getLoanAccounts(this.phoneNumber, this.module).subscribe((res) => {
            if ((res === null || res === void 0 ? void 0 : res.status) == 200) {
                this.loanAccounts = res === null || res === void 0 ? void 0 : res.data.filter((account) => (account === null || account === void 0 ? void 0 : account.disbursementComplete) == false);
                this.loanForm.get('loanAccountNumber').patchValue(this.loanAccounts[0].loanAccountId);
            }
            else {
                this.loanAccounts = [];
                this.toastService.showToast(res === null || res === void 0 ? void 0 : res.message);
            }
        }, (err) => {
            this.toastService.showToast(err);
        });
    }
    fetchDisbursementAccInfo() {
        this.api.fetchDisbursementAccInfo(this.customerId).subscribe((res) => {
            if ((res === null || res === void 0 ? void 0 : res.status) == 200) {
                this.custAccounts = res === null || res === void 0 ? void 0 : res.data.reverse();
            }
            else {
                this.custAccounts = [];
                this.toastService.showToast(res === null || res === void 0 ? void 0 : res.message);
            }
        }, (err) => {
            this.toastService.showToast(err);
        });
    }
    loadData() {
        this.loading.present();
        this.api.custpomerDetails(this.phoneNumber).subscribe((resp) => {
            this.loading.dismiss();
            resp.custAccount = resp.custAccount.filter(card => card.status === "APPROVED");
            this.customerDetails = resp;
            this.upsertAccount(resp);
        }, (err) => {
            this.loading.dismiss();
        });
    }
    upsertAccount(filteredResponseSavingAccount) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        if (this.editMode) {
            const data = (_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data;
            (_b = this.loanForm.get('transactionId')) === null || _b === void 0 ? void 0 : _b.patchValue(data === null || data === void 0 ? void 0 : data.transactionId);
            (_c = this.loanForm.get('customerId')) === null || _c === void 0 ? void 0 : _c.patchValue(data === null || data === void 0 ? void 0 : data.customerId);
            (_d = this.loanForm.get('loanAccountNumber')) === null || _d === void 0 ? void 0 : _d.patchValue(data === null || data === void 0 ? void 0 : data.accountNumber);
            (_e = this.loanForm.get('accountNumber')) === null || _e === void 0 ? void 0 : _e.patchValue(data === null || data === void 0 ? void 0 : data.accountNumber);
            (_f = this.loanForm.get('accountCurrency')) === null || _f === void 0 ? void 0 : _f.patchValue(data === null || data === void 0 ? void 0 : data.accountCurrency);
            (_g = this.loanForm.get('transactionCurrency')) === null || _g === void 0 ? void 0 : _g.patchValue(data === null || data === void 0 ? void 0 : data.transactionCurrency);
            (_h = this.loanForm.get('exchangeRate')) === null || _h === void 0 ? void 0 : _h.patchValue(data === null || data === void 0 ? void 0 : data.exchangeRate);
            (_j = this.loanForm.get('denomination')) === null || _j === void 0 ? void 0 : _j.patchValue(data === null || data === void 0 ? void 0 : data.denomination);
            let toInt = parseInt(data === null || data === void 0 ? void 0 : data.transactionAmount);
            let toLocale = toInt.toLocaleString('en-IN');
            (_k = this.loanForm.get('transactionAmount')) === null || _k === void 0 ? void 0 : _k.patchValue(toLocale);
            let formatedAmount = this.shareDataService.formatCurrency(data === null || data === void 0 ? void 0 : data.totalTransactionAmount, data === null || data === void 0 ? void 0 : data.transactionCurrency);
            this.loanForm.get('totalTransactionAmount').patchValue(formatedAmount);
            (_l = this.loanForm.get('transactionBranch')) === null || _l === void 0 ? void 0 : _l.patchValue(data === null || data === void 0 ? void 0 : data.transactionBranch);
            (_m = this.loanForm.get('transactionDate')) === null || _m === void 0 ? void 0 : _m.patchValue(data === null || data === void 0 ? void 0 : data.transactionDate);
            (_o = this.loanForm.get('transactionTime')) === null || _o === void 0 ? void 0 : _o.patchValue(data === null || data === void 0 ? void 0 : data.transactionTime);
            (_p = this.loanForm.get('remarks')) === null || _p === void 0 ? void 0 : _p.patchValue(data === null || data === void 0 ? void 0 : data.remarks);
            // Mode Object TODO;
            if ((data === null || data === void 0 ? void 0 : data.modeInfo.length) != 0) {
                let modePayload = data === null || data === void 0 ? void 0 : data.modeInfo[0];
                (_q = this.loanForm.get('paymentMethod')) === null || _q === void 0 ? void 0 : _q.patchValue(modePayload === null || modePayload === void 0 ? void 0 : modePayload.rePaymentMode);
                if ((modePayload === null || modePayload === void 0 ? void 0 : modePayload.rePaymentMode) === 'Account') {
                    this.selectedPaymentAccount = modePayload === null || modePayload === void 0 ? void 0 : modePayload.accountNumber;
                    (_r = this.loanForm.get('accountPaymentNumber')) === null || _r === void 0 ? void 0 : _r.patchValue(modePayload === null || modePayload === void 0 ? void 0 : modePayload.accountNumber);
                }
                else if ((modePayload === null || modePayload === void 0 ? void 0 : modePayload.rePaymentMode) === 'Cheque') {
                    this.selecteCHQOption = modePayload === null || modePayload === void 0 ? void 0 : modePayload.chequeType;
                    (_s = this.loanForm.get('accountPaymentNumber')) === null || _s === void 0 ? void 0 : _s.patchValue(modePayload === null || modePayload === void 0 ? void 0 : modePayload.accountNumber);
                    (_t = this.loanForm.get('chequeType')) === null || _t === void 0 ? void 0 : _t.patchValue(modePayload === null || modePayload === void 0 ? void 0 : modePayload.chequeType);
                    (_u = this.loanForm.get('chequeName')) === null || _u === void 0 ? void 0 : _u.patchValue(modePayload === null || modePayload === void 0 ? void 0 : modePayload.nameOnCheque);
                }
            }
        }
        else {
            this.selectedCountryCode = this.selectedCurrency.countryCode.toLowerCase();
            (_v = this.loanForm.get('transactionCurrency')) === null || _v === void 0 ? void 0 : _v.patchValue(this.selectedCurrency.currencyCode);
            this.loanForm.controls.accountBranch.patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
            this.loanForm.get('transactionBranch').patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        }
        this.cdr.markForCheck();
    }
    getChargeDetails() {
        this.api.getChargeDetails(this.accountInfo.accountId).subscribe(resp => {
            var _a, _b;
            this.chargeAmount = (_a = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _a === void 0 ? void 0 : _a.amount;
            this.loanForm.get('totalChargeAmount').patchValue((_b = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _b === void 0 ? void 0 : _b.amount);
        }, err => console.log('Error: ', err));
    }
    onLoanAccountSelect(e) {
        var _a, _b, _c, _d;
        let filteredLoanAccount = (_a = this.loanAccounts) === null || _a === void 0 ? void 0 : _a.filter(account => (account === null || account === void 0 ? void 0 : account.loanAccountId) === this.selectedLoanAccount);
        this.filteredLoanAccount = filteredLoanAccount[0];
        const countryCode = this.currencies.filter((i) => { var _a; return i.currencyCode === ((_a = this.filteredLoanAccount) === null || _a === void 0 ? void 0 : _a.accountCurrency); });
        this.selectedCurrency = countryCode[0];
        this.selectedCountryCode = (_b = this.selectedCurrency) === null || _b === void 0 ? void 0 : _b.countryCode.toLowerCase();
        (_c = this.loanForm.get('transactionCurrency')) === null || _c === void 0 ? void 0 : _c.patchValue((_d = this.filteredLoanAccount) === null || _d === void 0 ? void 0 : _d.accountCurrency);
    }
    onPaymentAccountSelect(e) {
        var _a;
        let eAccountNumber = e.toString();
        this.selectedPaymentAccount = eAccountNumber;
        console.log("eAccountNumber", eAccountNumber);
        let filteredPaymentAccount = (_a = this.custAccounts) === null || _a === void 0 ? void 0 : _a.filter((account) => account.accountNumber === eAccountNumber);
        this.filteredPaymentAccount = filteredPaymentAccount[0];
        console.log(this.filteredPaymentAccount);
    }
    paymentModeChange(event) {
        this.paymentModeSelected = event.value;
        if (this.paymentModeSelected == "Account") {
            this.loanForm.get('accountPaymentNumber').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]); // Set Required Validator
            this.loanForm.get('accountPaymentNumber').updateValueAndValidity();
            this.loanForm.get('chequeType').clearValidators(); // 6. Clear All Validators
            this.loanForm.get('chequeType').updateValueAndValidity();
            this.loanForm.get('chequeName').clearValidators(); // 6. Clear All Validators
            this.loanForm.get('chequeName').updateValueAndValidity();
            if (!this.editMode) {
                this.selectedPaymentAccount = this.custAccounts[0].accountNumber;
                if (this.accountInfo.accountId != null) {
                    this.loanForm.get('accountPaymentNumber').patchValue(this.accountInfo.accountId);
                }
                else {
                    this.loanForm.get('accountPaymentNumber').patchValue(this.custAccounts[0].accountNumber);
                }
            }
        }
        else if (this.paymentModeSelected == 'Cheque') {
            this.loanForm.get('chequeType').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]); // Set Required Validator
            this.loanForm.get('chequeType').updateValueAndValidity();
            this.loanForm.get('chequeName').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]); // Set Required Validator
            this.loanForm.get('chequeName').updateValueAndValidity();
            this.loanForm.get('accountPaymentNumber').clearValidators(); // 6. Clear All Validators
            this.loanForm.get('accountPaymentNumber').updateValueAndValidity();
        }
        else {
            this.loanForm.get('accountPaymentNumber').clearValidators(); // 6. Clear All Validators
            this.loanForm.get('accountPaymentNumber').updateValueAndValidity();
            this.loanForm.get('chequeType').clearValidators(); // 6. Clear All Validators
            this.loanForm.get('chequeType').updateValueAndValidity();
            this.loanForm.get('chequeName').clearValidators(); // 6. Clear All Validators
            this.loanForm.get('chequeName').updateValueAndValidity();
        }
    }
    onBlurEvent(e) {
        var _a;
        this.updateTransAmount();
        if (((_a = this.loanForm.get('paymentMethod')) === null || _a === void 0 ? void 0 : _a.value) == "Cash") {
            this.denomValidationListener();
        }
    }
    submit(form) {
        var _a, _b, _c, _d, _e, _f;
        if (((_a = this.loanForm.get('paymentMethod')) === null || _a === void 0 ? void 0 : _a.value) == "Cash") {
            if (this.isShowDenomError) {
                this.toastService.showToast("Denomination total should match with the transaction amount");
                return;
            }
            if (this.isShowDisburseValid) {
                this.toastService.showToast("Loan disbursement amount should not exceed than sanctioned amount");
                return;
            }
        }
        var date = new Date(form.transactionDate);
        let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
        form.transactionDate = latest_date;
        form.customerId = this.customerId;
        form.productCode = this.productCode;
        form.accountType = (_b = this.filteredLoanAccount) === null || _b === void 0 ? void 0 : _b.loanType;
        form.tokenOrigin = this.tokenOrigin;
        form.accountCurrency = ((_c = this.filteredLoanAccount) === null || _c === void 0 ? void 0 : _c.accountCurrency) || "";
        form.isMobileTrans = true;
        form.holderName = (_d = this.filteredLoanAccount) === null || _d === void 0 ? void 0 : _d.customerName;
        form.representativeInfo = [];
        // Total transaction convertion format
        let ttam = this.loanForm.value['totalTransactionAmount'].substring(1);
        form.totalTransactionAmount = ttam.replace(/,/g, '');
        let modeInfo;
        if ((form === null || form === void 0 ? void 0 : form.paymentMethod) === 'Account') {
            modeInfo = [
                {
                    loanAccountNo: form === null || form === void 0 ? void 0 : form.loanAccountNumber,
                    rePaymentMode: form === null || form === void 0 ? void 0 : form.paymentMethod,
                    category: this.module,
                    accountNumber: form === null || form === void 0 ? void 0 : form.accountPaymentNumber,
                    accountCurrency: (_e = this.filteredPaymentAccount) === null || _e === void 0 ? void 0 : _e.accountCurrency
                }
            ];
        }
        else if ((form === null || form === void 0 ? void 0 : form.paymentMethod) === 'Cheque') {
            modeInfo = [
                {
                    loanAccountNo: form === null || form === void 0 ? void 0 : form.loanAccountNumber,
                    rePaymentMode: form === null || form === void 0 ? void 0 : form.paymentMethod,
                    category: this.module,
                    accountCurrency: (_f = this.filteredPaymentAccount) === null || _f === void 0 ? void 0 : _f.accountCurrency,
                    chequeType: form === null || form === void 0 ? void 0 : form.chequeType,
                    nameOnCheque: form === null || form === void 0 ? void 0 : form.chequeName,
                }
            ];
        }
        else {
            modeInfo = [
                {
                    loanAccountNo: form === null || form === void 0 ? void 0 : form.loanAccountNumber,
                    rePaymentMode: form === null || form === void 0 ? void 0 : form.paymentMethod,
                    category: this.module,
                }
            ];
        }
        form.modeInfo = modeInfo;
        form.accountNumber = form === null || form === void 0 ? void 0 : form.loanAccountNumber;
        form.transactionAmount = form.transactionAmount.toString().replace(/,/g, '');
        if (this.editMode) {
            form.appointmentId = this.routerData.data.appointmentId;
            form.operation = 'update';
        }
        if (this.editMode) {
            this.api.appointmentBooking(form).subscribe((resp) => {
                localStorage.setItem("TransactionTime", resp.transactionTime);
                this.loanDisbursementResponse = resp;
                this.transactionId = this.loanDisbursementResponse.transactionId;
                localStorage.setItem('AppointmentDetails', JSON.stringify(resp));
                console.log('transactionId::', this.transactionId);
                if (this.loanDisbursementResponse === 200 || this.loanDisbursementResponse !== null) {
                    this.shareDataService.shareTransactionId(this.transactionId);
                    this.onClick(this.loanDisbursementResponse);
                    this.loanForm.reset();
                }
            });
        }
        else {
            this.api.cashDepositSave(form).subscribe((resp) => {
                localStorage.setItem("TransactionTime", resp.transactionTime);
                this.loanDisbursementResponse = resp;
                this.transactionId = this.loanDisbursementResponse.transactionId;
                localStorage.setItem('AppointmentDetails', JSON.stringify(resp));
                console.log('transactionId::', this.transactionId);
                if (this.loanDisbursementResponse === 200 || this.loanDisbursementResponse !== null) {
                    this.shareDataService.shareTransactionId(this.transactionId);
                    this.onClick(this.loanDisbursementResponse);
                    this.loanForm.reset();
                }
            });
        }
    }
    onClick(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: _token_v2_token_v2_page__WEBPACK_IMPORTED_MODULE_6__.TokenV2Page,
                componentProps: {
                    value: event,
                    screen: "onScreen"
                },
            });
            modal.onDidDismiss().then((res) => {
                this.routerData = res;
                console.log("Getting Back Data", this.routerData);
                this.onScreenRefresh();
            });
            return yield modal.present();
        });
    }
    enableDisableAction(type) {
        switch (type) {
            case 'TXAM':
                this.toggleFrm();
                break;
            default:
                console.log("No such type exists!");
                break;
        }
    }
    toggleFrm() {
        this.frmToggle = !this.frmToggle;
        this.animationState = this.animationState === 'out' ? 'in' : 'out';
        this.createComponent();
    }
    createComponent() {
        var _a;
        this.loanDsbViewRef.clear();
        let childComponentRef = this.loanDsbViewRef.createComponent(src_app_components_denomination_slide_denomination_slide_component__WEBPACK_IMPORTED_MODULE_10__.DenominationSlideComponent);
        let childComponent = childComponentRef.instance;
        childComponent.unique_key = "loanDsbViewRef";
        childComponent.denomData = (_a = this.loanForm.get('denomination')) === null || _a === void 0 ? void 0 : _a.value;
        childComponent.loanDsbViewRef = this;
    }
    removeDynamicComponent() {
        this.loanDsbViewRef.clear();
    }
    remove(view) {
        var _a;
        console.log("view disiss?", view);
        let data = JSON.parse(localStorage.getItem(view)) || null;
        console.log("Data??", data);
        if (view == 'loanDsbViewRef') {
            this.loanDsbViewRef.clear();
            if (data != null && data.total != 0) {
                this.denomAmountValidation(data.total);
                (_a = this.loanForm.get('denomination')) === null || _a === void 0 ? void 0 : _a.patchValue(data.denomination);
                console.log(this.loanForm.value);
            }
        }
    }
    formatAccountBalance(balance) {
        if (balance > 0) {
            let toInt = parseInt(balance);
            let toLocale = toInt.toLocaleString('en-IN', { style: "currency", currency: "INR" });
            return toLocale;
        }
        else {
            let toInt = parseInt('0');
            let toLocale = toInt.toLocaleString('en-IN', { style: "currency", currency: "INR" });
            return toLocale;
        }
    }
    denomAmountValidation(amount) {
        var _a, _b;
        console.log("Amount", amount);
        if (Number((_b = (_a = this.loanForm.get('transactionAmount')) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.split(',').join('')) != Number(amount)) {
            this.isShowDenomError = true;
            this.cdr.markForCheck();
            this.toastService.showToast("Denomination total should match with the transaction amount");
        }
        else {
            this.isShowDenomError = false;
            this.cdr.markForCheck();
        }
    }
    denomValidationListener() {
        let data = JSON.parse(localStorage.getItem('loanDsbViewRef')) || null;
        console.log("Data??", data);
        if ((data === null || data === void 0 ? void 0 : data.title) == 'loanDsbViewRef') {
            if (data != null && data.total != 0) {
                this.denomAmountValidation(data.total);
                console.log(this.loanForm.value);
            }
        }
    }
    balanceCheck(event) {
        var _a, _b;
        this.transAmt = event.target.value;
        this.transAmt = this.transAmt.toString().replace(/,/g, '');
        let totalAmount = parseFloat((_a = this.filteredLoanAccount) === null || _a === void 0 ? void 0 : _a.sanctionedAmount) - parseFloat((_b = this.filteredLoanAccount) === null || _b === void 0 ? void 0 : _b.disbursedAmount);
        this.disbursementAmount = Number(totalAmount);
        if (parseFloat(this.disbursementAmount) < parseFloat(this.transAmt)) {
            this.isShowDisburseValid = true;
            this.toastService.showToast("Loan disbursement amount should not exceed than sanctioned/disbursed amount");
        }
        else {
            this.isShowDisburseValid = false;
            return;
        }
        this.cdr.markForCheck();
    }
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
    getExChangeRate(currency) {
        this.api.getExchangeRate(this.accountInfo.accountCurrency).subscribe((res) => {
            var _a, _b, _c, _d;
            const code = this.currencies.filter((x) => x.currencyCode == currency);
            let filteredCurrency = code[0].currencyCode;
            const rate = (_a = res === null || res === void 0 ? void 0 : res.rates) === null || _a === void 0 ? void 0 : _a[filteredCurrency];
            this.loanForm.get('exchangeRate').patchValue(rate);
            let toFix = (_b = this.loanForm.get('transactionAmount')) === null || _b === void 0 ? void 0 : _b.value;
            let val = (toFix != "undefined" || toFix != undefined) ? toFix === null || toFix === void 0 ? void 0 : toFix.replace(/,/g, '') : 0;
            if (!isNaN(val)) {
                let updatedAmount = (val * ((_c = this.loanForm.get('exchangeRate')) === null || _c === void 0 ? void 0 : _c.value)) + this.chargeAmount;
                if (!isNaN(updatedAmount)) {
                    let formatedAmount = this.shareDataService.formatCurrency(updatedAmount, (_d = this.loanForm.get('transactionCurrency')) === null || _d === void 0 ? void 0 : _d.value);
                    this.loanForm.get('totalTransactionAmount').patchValue(formatedAmount);
                    this.cdr.markForCheck();
                }
            }
        });
        this.updateTransAmount();
    }
    updateTransAmount() {
        var _a, _b, _c;
        let toFix = (_a = this.loanForm.get('transactionAmount')) === null || _a === void 0 ? void 0 : _a.value;
        console.log("check value", toFix);
        let val = (toFix != "undefined" || toFix != undefined) ? toFix === null || toFix === void 0 ? void 0 : toFix.replace(/,/g, '') : 0;
        console.log("check value after", val);
        if (!isNaN(val)) {
            let updatedAmount = (val * ((_b = this.loanForm.get('exchangeRate')) === null || _b === void 0 ? void 0 : _b.value)) + this.chargeAmount;
            if (!isNaN(updatedAmount)) {
                let formatedAmount = this.shareDataService.formatCurrency(updatedAmount, (_c = this.loanForm.get('transactionCurrency')) === null || _c === void 0 ? void 0 : _c.value);
                this.loanForm.get('totalTransactionAmount').patchValue(formatedAmount);
                this.cdr.markForCheck();
            }
        }
    }
    selectCurrencyCode(e) {
        var _a;
        if (typeof e == "undefined" || typeof e == undefined || typeof e == null || typeof e == "object") {
            return;
        }
        else {
            if (e.length > 2) {
                const filteredCurrency = (_a = this.currencies) === null || _a === void 0 ? void 0 : _a.filter((i) => i.currencyCode === e);
                this.selectedCountryCode = filteredCurrency[0].countryCode.toLowerCase();
                this.getExChangeRate(filteredCurrency[0].currencyCode);
                this.cdr.markForCheck();
            }
        }
    }
    getHomeBranch() {
        var _a, _b, _c, _d;
        this.homeIconToggle = !this.homeIconToggle;
        if (this.homeIconToggle) {
            (_a = this.loanForm.get('transactionBranch')) === null || _a === void 0 ? void 0 : _a.patchValue((_c = (_b = this.customerDetails) === null || _b === void 0 ? void 0 : _b.custAccount[0]) === null || _c === void 0 ? void 0 : _c.accountBranch);
        }
        else {
            (_d = this.loanForm.get('transactionBranch')) === null || _d === void 0 ? void 0 : _d.patchValue("");
        }
    }
    datePopup() {
        var _a;
        let oldDate = (_a = this.loanForm.get('transactionDate')) === null || _a === void 0 ? void 0 : _a.value;
        this.modalController.create({
            component: src_app_components_transaction_date_transaction_date_component__WEBPACK_IMPORTED_MODULE_11__.TransactionDateComponent,
            componentProps: {
                date: this.loanForm.get('transactionDate').value,
            }
        }).then(modalResp => {
            modalResp.present();
            modalResp.onDidDismiss().then(res => {
                var _a, _b;
                console.log(typeof (res === null || res === void 0 ? void 0 : res.data));
                if (typeof (res === null || res === void 0 ? void 0 : res.data) == "undefined") {
                    console.log("oldDate", oldDate);
                    (_a = this.loanForm.get('transactionDate')) === null || _a === void 0 ? void 0 : _a.patchValue(oldDate);
                }
                else {
                    const convertedDate = this.datepipe.transform(res.data, 'yyyy-MM-dd');
                    (_b = this.loanForm.get('transactionDate')) === null || _b === void 0 ? void 0 : _b.patchValue(convertedDate);
                }
            });
        });
    }
    openPopup() {
        this.modalController.create({
            component: src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_8__.TimeSlotsComponent,
            componentProps: {
                date: this.loanForm.get('transactionDate').value,
            }
        }).then(modalResp => {
            modalResp.present();
            modalResp.onDidDismiss().then(res => {
                if (res.data != null || res.data != undefined || res.data != "undefined") {
                    console.log(res);
                    this.loanForm.get('transactionTime').patchValue(res.data);
                }
            });
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_7__.BranchComponent,
                id: "branchModal",
                componentProps: {}
            });
            modal.onDidDismiss().then((modelData) => {
                if (modelData !== null) {
                    this.loanForm.get('transactionBranch').patchValue(modelData.data['data'].branchName);
                }
            });
            return yield modal.present();
        });
    }
    goBack() {
        this.router.navigate(['dashboard']);
    }
    addAccount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_add_account_add_account_component__WEBPACK_IMPORTED_MODULE_9__.AddAccountComponent,
                id: "accountModal",
                componentProps: {}
            });
            modal.onDidDismiss().then((modelData) => {
                this.fetchDisbursementAccInfo();
            });
            return yield modal.present();
        });
    }
    ngOnDestroy() {
        localStorage.removeItem("loanDsbViewRef");
    }
};
LoanDisbursementV2Page.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe }
];
LoanDisbursementV2Page.propDecorators = {
    loanDsbViewRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewChild, args: ['dynamic', { read: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewContainerRef },] }],
    denomButtonRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewChild, args: ["denom", { read: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ElementRef },] }],
    autocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewChild, args: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteTrigger,] }]
};
LoanDisbursementV2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-loan-disbursement-v2',
        template: _loan_disbursement_v2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_23__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MAT_DATE_FORMATS, useValue: _forex_cash_v2_forex_cash_v2_page__WEBPACK_IMPORTED_MODULE_12__.MY_FORMATS },
        ],
        styles: [_loan_disbursement_v2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoanDisbursementV2Page);



/***/ }),

/***/ 9395:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/v2/loan-disbursement-v2/loan-disbursement-v2.page.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = ".example-right-align {\n  text-align: right;\n}\n\n.mat-form-field-appearance-outline .mat-form-field-suffix.denomination-action {\n  top: -3px !important;\n}\n\n.currency-card {\n  width: auto;\n  height: 42px;\n  color: #FFFFFF !important;\n  text-align: center;\n  border-radius: 5px;\n  margin-top: 0px;\n  position: relative;\n}\n\n.currency-link {\n  left: 0;\n  top: 16px;\n  right: 0;\n  bottom: 6px;\n  position: relative;\n  text-decoration: underline !important;\n}\n\n.excg-fld {\n  z-index: 1;\n  position: relative;\n  background: #f8f9fa;\n  border-radius: 10px;\n  top: 10px;\n}\n\n.row {\n  margin-right: -6px !important;\n  margin-left: -6px !important;\n}\n\n.col-6 {\n  padding-right: 6px !important;\n  padding-left: 6px !important;\n}\n\nion-content.transpopover {\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #ffffff;\n}\n\nion-item.exchange::part(native) {\n  height: 65px;\n  background: #F2F2F2;\n}\n\nion-item.txn::part(native) {\n  height: 65px;\n}\n\n.suffix-icon {\n  margin-top: -14px;\n}\n\nion-popover.trans-pop::part(content) {\n  --width: 275px !important;\n  border-radius: 10px !important;\n  --offset-x: -10px !important;\n}\n\nion-popover.trans-pop,\n.popover-arrow::after {\n  --background: #004C97 !important;\n}\n\n.remark-field {\n  margin-top: 25px;\n  border: 1px solid #dee2e6;\n  border-radius: 16px;\n  height: 100px;\n  filter: drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.0901960784));\n}\n\n.full-width {\n  width: 100% !important;\n}\n\n.suffix-ion-icon {\n  position: absolute;\n  bottom: 0;\n  right: 10px;\n  top: 10px;\n}\n\n.suffix-ion-icon-total {\n  position: relative;\n  bottom: 0;\n  right: 32px;\n  top: 10px;\n}\n\n:host ::ng-deep .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0 !important;\n}\n\n:host ::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n:host ::ng-deep mat-form-field.mat-form-field.tta {\n  background: #F2F2F2 !important;\n}\n\n:host ::ng-deep mat-form-field.mat-form-field.excg {\n  background: #F2F2F2 !important;\n}\n\n:host ::ng-deep mat-form-field.mat-form-field.ttc {\n  background: #F2F2F2 !important;\n}\n\n:host ::ng-deep .mat-form-field {\n  display: inherit !important;\n}\n\n.mt-2 {\n  margin-top: 2px;\n}\n\n:host ::ng-deep .mat-input-element.auto-currency {\n  margin-left: 10px !important;\n}\n\nion-segment {\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px !important;\n  height: 50px !important;\n}\n\nion-segment-button {\n  --background-checked: linear-gradient(90deg, #051A2D, #004C97) !important;\n}\n\n.file-text {\n  color: #004C97;\n}\n\n.account-group {\n  background: #F2F2F2;\n  padding: 10px;\n  border-radius: 16px;\n}\n\n.lbl-title {\n  color: #102245;\n  font-size: 11px;\n  opacity: 50%;\n}\n\n.lbl-header {\n  color: #004C97;\n  font-size: 16px;\n}\n\n.lbl-content {\n  color: #262831;\n  font-size: 12px;\n  opacity: 100%;\n}\n\n.currency-label {\n  width: 43px;\n  height: 26px;\n  background: rgba(0, 76, 151, 0.1411764706);\n  border: 1pt solid #004C97;\n  margin: 0px;\n  display: inline-grid;\n  padding: 5px;\n  color: #004C97;\n}\n\nion-item.item-textarea {\n  --min-height: 100px;\n}\n\nion-button.next {\n  width: 150px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #FFFFFF;\n}\n\nion-button.cancel {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #B20000;\n}\n\nion-button.back {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tZGlzYnVyc2VtZW50LXYyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUdBO0VBQ0ksNkJBQUE7RUFDQSw0QkFBQTtBQUFKOztBQUdBO0VBQ0ksc0RBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0FBQUo7O0FBSUE7O0VBRUksZ0NBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw2REFBQTtBQURKOztBQUtBO0VBQ0ksc0JBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUZKOztBQUtBO0VBQ0ksb0JBQUE7QUFGSjs7QUFLQTtFQUNJLDRCQUFBO0FBRko7O0FBS0E7RUFDSSw4QkFBQTtBQUZKOztBQUtBO0VBQ0ksOEJBQUE7QUFGSjs7QUFLQTtFQUNJLDhCQUFBO0FBRko7O0FBS0E7RUFDSSwyQkFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtBQUZKOztBQUtBO0VBQ0ksNEJBQUE7QUFGSjs7QUFLQTtFQUNJLGdHQUFBO0VBQ0EsdUJBQUE7QUFGSjs7QUFLQTtFQUNJLHlFQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0FBRko7O0FBTUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUhKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBSEo7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUhKOztBQVVBO0VBQ0ksbUJBQUE7QUFQSjs7QUFVQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0RBQUE7RUFDQSxnQkFBQTtBQVBKOztBQVVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBUEo7O0FBVUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFQSiIsImZpbGUiOiJsb2FuLWRpc2J1cnNlbWVudC12Mi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtc3VmZml4LmRlbm9taW5hdGlvbi1hY3Rpb24ge1xyXG4gICAgdG9wOiAtM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXJyZW5jeS1jYXJkIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmN1cnJlbmN5LWxpbmsge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMTZweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiA2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXhjZy1mbGQge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbi1yaWdodDogLTZweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jb2wtNiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50LnRyYW5zcG9wb3ZlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MUEyRCwgIzAwNEM5Nyk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5pb24taXRlbS5leGNoYW5nZTo6cGFydChuYXRpdmUpIHtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnR4bjo6cGFydChuYXRpdmUpIHtcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG5cclxuLnN1ZmZpeC1pY29uIHtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG59XHJcblxyXG5pb24tcG9wb3Zlci50cmFucy1wb3A6OnBhcnQoY29udGVudCkge1xyXG4gICAgLS13aWR0aDogMjc1cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgIC0tb2Zmc2V0LXg6IC0xMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAtLW9mZnNldC15OiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXBvcG92ZXIudHJhbnMtcG9wLFxyXG4ucG9wb3Zlci1hcnJvdzo6YWZ0ZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA0Qzk3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZW1hcmstZmllbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDNweCAxNXB4ICMwMDAwMDAxNyk7XHJcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWZmaXgtaW9uLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zdWZmaXgtaW9uLWljb24tdG90YWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDMycHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLnR0YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC5leGNnIHtcclxuICAgIGJhY2tncm91bmQ6ICNGMkYyRjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLnR0YyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXQtMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQuYXV0by1jdXJyZW5jeSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tc2VnbWVudCB7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFBMkQsICMwMDRDOTcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWxlLXRleHQge1xyXG4gICAgY29sb3I6ICMwMDRDOTc7XHJcbn1cclxuXHJcblxyXG4uYWNjb3VudC1ncm91cCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi5sYmwtdGl0bGUge1xyXG4gICAgY29sb3I6ICMxMDIyNDU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBvcGFjaXR5OiA1MCU7XHJcbn1cclxuXHJcbi5sYmwtaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjMDA0Qzk3O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ubGJsLWNvbnRlbnQge1xyXG4gICAgY29sb3I6ICMyNjI4MzE7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG59XHJcblxyXG4uY3VycmVuY3ktbGFiZWwge1xyXG4gICAgd2lkdGg6IDQzcHg7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDc2LCAxNTEsIDAuMTQxMTc2NDcwNik7XHJcbiAgICBib3JkZXI6IDFwdCBzb2xpZCAjMDA0Qzk3O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiAjMDA0Qzk3O1xyXG59XHJcblxyXG4vLyBpb24taXRlbS5leGNoYW5nZS5pdGVtLWZpbGwtb3V0bGluZSB7XHJcbi8vICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuaW9uLWl0ZW0uaXRlbS10ZXh0YXJlYSB7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uLm5leHQge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFBMkQsICMwMDRDOTcpO1xyXG4gICAgLS1jb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5jYW5jZWwge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1jb2xvcjogI0IyMDAwMDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5iYWNrIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufSJdfQ== */";

/***/ }),

/***/ 33058:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/v2/loan-disbursement-v2/loan-disbursement-v2.page.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" style=\"color:#004C97\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"bank\">Loan Disbursement</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\" [scrollEvents]=\"true\" (ionScroll)=\"onScroll()\">\r\n\r\n  <form *ngIf=\"loanForm\" [formGroup]=\"loanForm\">\r\n    <!-- <pre>\r\n    {{ loanForm.value | json }}\r\n   </pre>\r\n    <p>Valid? {{loanForm.valid}}</p> -->\r\n    <div class=\"account-group\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width my-2\" style=\"background: #ffffff;\">\r\n        <mat-label>Loan Account</mat-label>\r\n        <mat-select formControlName=\"loanAccountNumber\" [(ngModel)]=\"selectedLoanAccount\"\r\n          (ngModelChange)=\"onLoanAccountSelect($event)\" panelClass=\"nrpSelect\"\r\n          [ngClass]=\"loanAccounts.length == 1 ? 'removeArrow' : ''\">\r\n          <mat-select-trigger>\r\n            <p class=\"my-1 d-flex align-items-center\">\r\n              <span class=\"currency-label\">{{ filteredLoanAccount?.accountCurrency }} </span>\r\n              &nbsp; <span>{{ loanForm.get('loanAccountNumber')?.value }} </span>\r\n            </p>\r\n          </mat-select-trigger>\r\n          <mat-option *ngFor=\"let loan of loanAccounts\" [value]=\"loan.loanAccountId\" class=\"loan-text\">\r\n            {{loan?.loanAccountId}} <br>\r\n            <span class=\"sub-text\">{{loan?.loanType}}</span>\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-hint *ngIf=\"loanAccounts.length == 0\">\r\n        <small class=\"text-center\">“Loan account not found”</small>\r\n      </mat-hint>\r\n\r\n      <div style=\"margin-left: 12px;margin-right: 12px;\" class=\"my-2\">\r\n        <div class=\"row justify-content-between text-left\">\r\n          <div class=\"col-6\">\r\n            <span class=\" lbl-title\">Sanctioned Amount</span>\r\n            <p class=\"lbl-content\">{{ formatAccountBalance(filteredLoanAccount?.sanctionedAmount) }}</p>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <span class=\" lbl-title\">Disbursed Amount</span>\r\n            <p class=\"lbl-content\">{{ formatAccountBalance(filteredLoanAccount?.disbursedAmount) }}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-6\">\r\n            <span class=\" lbl-title\">Customer Name</span>\r\n            <p class=\"lbl-content\">{{ filteredLoanAccount?.customerName }}</p>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <span class=\" lbl-title\">Account Branch</span>\r\n            <p class=\"lbl-content\">{{ filteredLoanAccount?.accountBranch }}</p>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <span class=\" lbl-title\">Type</span>\r\n            <p class=\"lbl-content\">{{ filteredLoanAccount?.loanType }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"denom-group my-3\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width my-2\">\r\n        <mat-label>Payment Mode</mat-label>\r\n        <mat-select [(ngModel)]=\"paymentModeSelected\" formControlName=\"paymentMethod\"\r\n          (selectionChange)=\"paymentModeChange($event)\">\r\n          <mat-option *ngFor=\"let mode of paymentMode\" [value]=\"mode\">{{mode}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"group-field my-2\" *ngIf=\"loanForm.get('paymentMethod').value === 'Account'\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width excg-fld\">\r\n        <mat-label>Account Number</mat-label>\r\n        <mat-select formControlName=\"accountPaymentNumber\" [(ngModel)]=\"selectedPaymentAccount\"\r\n          (ngModelChange)=\"onPaymentAccountSelect($event)\" panelClass=\"nrpSelect\"\r\n          [ngClass]=\"custAccounts.length == 1 ? 'removeArrow' : ''\">\r\n          <mat-select-trigger>\r\n            <p class=\"my-1\">\r\n              <span class=\"currency-label\">{{ filteredPaymentAccount?.accountCurrency }} </span>\r\n              &nbsp; <span>{{ loanForm.get('accountPaymentNumber')?.value }} </span>\r\n            </p>\r\n          </mat-select-trigger>\r\n          <mat-option *ngFor=\"let account of custAccounts\" [value]=\"account?.accountNumber\" class=\"loan-text\">\r\n            {{account?.accountNumber}} <br>\r\n            <span class=\"sub-text\">\r\n              {{(account?.transferType === 'Internal' || account?.transferType === 'Other Bank') ? account?.transferType\r\n              : account?.accountType }}</span>\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <div class=\"currency-card secondary\">\r\n        <a class=\"currency-link\" (click)=\"addAccount()\">Add account detail for Loan</a>\r\n      </div>\r\n    </div>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"full-width my-3\"\r\n      *ngIf=\"loanForm.get('paymentMethod').value === 'Cheque'\">\r\n      <mat-label>Cheque Type</mat-label>\r\n      <mat-select matNativeControl formControlName=\"chequeType\" [(ngModel)]=\"selecteCHQOption\">\r\n        <mat-option *ngFor=\"let type of cheque_types\" [value]=\"type\">{{ type }}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"full-width my-2\"\r\n      *ngIf=\"loanForm.get('paymentMethod').value === 'Cheque'\">\r\n      <mat-label>Name on the Cheque</mat-label>\r\n      <input matInput formControlName=\"chequeName\" appAlphabetOnly>\r\n    </mat-form-field>\r\n\r\n    <div class=\"row my-3\">\r\n      <div class=\"col-6\">\r\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n          <mat-label>Transaction Currency</mat-label>\r\n          <ngx-flag-picker *ngIf=\"loanForm.get('transactionCurrency')?.value?.length === 3\" matPrefix\r\n            [selectedCountryCode]=\"selectedCountryCode\" [showFlags]=\"isShow\" [showLabels]=\"!isShow\"\r\n            [showArrow]=\"!isShow\" slot=\"start\"></ngx-flag-picker>\r\n          <input #autoCompleteInput matInput [matAutocomplete]=\"auto\" [(ngModel)]=\"transactionCurrency\"\r\n            formControlName=\"transactionCurrency\" (ngModelChange)=\"selectCurrencyCode($event)\"\r\n            [formControl]=\"currencyControl\" class=\"auto-currency\" oninput=\"this.value = this.value.toUpperCase()\"\r\n            appAlphabetOnly>\r\n          <mat-autocomplete #auto=\"matAutocomplete\" autoActiveFirstOption>\r\n            <mat-option *ngFor=\"let currency of filteredOptions | async\" [value]=\"currency.currencyCode\">\r\n              <img alt=\"\" class=\"example-option-img\"\r\n                src=\"assets/svg-country-flags/svg/{{currency?.countryCode.toLowerCase()}}.svg\" height=\"25\" width=\"25\">\r\n              <span> {{currency?.countryCode}} &nbsp;{{ currency?.countryName }}</span>\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n          <mat-icon matSuffix>arrow_drop_down</mat-icon>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-6\"\r\n        *ngIf=\"!filteredLoanAccount?.accountCurrency.toLowerCase().includes(selectedCountryCode.toLowerCase())\">\r\n        <mat-form-field appearance=\"outline\" class=\"excg full-width\">\r\n          <mat-label>Exchange Rate</mat-label>\r\n          <input matInput placeholder=\"Exchange Rate\" readonly=\"true\" formControlName=\"exchangeRate\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"denom-group my-2\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width my-1\">\r\n        <mat-label>Loan Disbursement Amount</mat-label>\r\n        <input matInput placeholder=\"Amount\" #myRef [(ngModel)]=\"transAmount\" type=\"tel\"\r\n          formControlName=\"transactionAmount\" separator (blur)=\"onBlurEvent($event)\" (keyup)=\"balanceCheck($event)\">\r\n        <button *ngIf=\"loanForm.get('paymentMethod').value === 'Cash'\" mat-button matSuffix\r\n          [ngClass]=\"loanForm.get('transactionAmount')?.value ? 'active-bg' : 'inactive-bg'\" class=\"action-button\"\r\n          #denom (click)=\"enableDisableAction('TXAM')\" style=\"width: 140px;\">\r\n          Denomination\r\n        </button>\r\n      </mat-form-field>\r\n      <mat-error style=\"margin-left: 5px;\" *ngIf=\"isShowDenomError\">\r\n        Denomination total should match with the transaction amount\r\n      </mat-error>\r\n      <mat-error style=\"margin-left: 5px;\" *ngIf=\"transAmt > disbursementAmount\">\r\n        Loan disbursement amount should not exceed than sanctioned amount\r\n      </mat-error>\r\n      <div class=\"my-1\">\r\n        <ng-template #dynamic></ng-template>\r\n      </div>\r\n    </div>\r\n\r\n    <mat-hint *ngIf=\"!filteredLoanAccount?.accountCurrency.toLowerCase().includes(selectedCountryCode.toLowerCase())\">\r\n      <img src=\"assets/icon/error.svg\" class=\"small-info\">\r\n      <small> “Exchange rate may be changed at the time of transaction”</small>\r\n    </mat-hint>\r\n\r\n    <div class=\"group-field my-3\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width excg-fld\">\r\n        <mat-label>Transaction Branch</mat-label>\r\n        <input matInput placeholder=\"Transaction Branch\" formControlName=\"transactionBranch\" readonly=\"true\">\r\n        <img [src]=\"homeIconToggle ? 'assets/icon/dark-home.svg' : 'assets/icon/home-branch.svg'\" matSuffix\r\n          class=\"suffix-icon\" (click)=\"getHomeBranch()\">\r\n      </mat-form-field>\r\n      <div class=\"currency-card secondary\">\r\n        <a class=\"currency-link\" (click)=\"presentModal()\">Click here to find the nearest branch</a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row t-10 my-3\">\r\n      <div class=\"col-6\">\r\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n          <mat-label>Transaction Date</mat-label>\r\n          <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" formControlName=\"transactionDate\" readonly=\"true\">\r\n          <mat-datepicker-toggle matSuffix>\r\n            <img src=\"assets/icon/calendar.svg\" matDatepickerToggleIcon class=\"suffix-icon\" (click)=\"datePopup()\">\r\n          </mat-datepicker-toggle>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n          <mat-label>Time Slot</mat-label>\r\n          <input matInput placeholder=\"Time\" formControlName=\"transactionTime\" readonly=\"true\">\r\n          <img src=\"assets/icon/timer.svg\" matSuffix class=\"suffix-icon\" (click)=\"openPopup()\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row t-5 my-4\">\r\n      <div class=\"col-6\">\r\n        <mat-form-field appearance=\"outline\" class=\"ttc full-width\">\r\n          <mat-label>Total Charge Amount</mat-label>\r\n          <input matInput readonly=\"true\" formControlName=\"totalChargeAmount\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-6\">\r\n        <mat-form-field appearance=\"outline\" class=\"tta full-width\">\r\n          <mat-label>Total Transaction Amount</mat-label>\r\n          <input matInput [readonly]=\"true\" formControlName=\"totalTransactionAmount\">\r\n          <img src=\"assets/icon/info.svg\" matSuffix class=\"suffix-icon\" id=\"bottom-start\">\r\n          <ion-popover mode=\"ios\" size=\"auto\" arrow=\"true\" trigger=\"bottom-start\" side=\"bottom\" alignment=\"center\"\r\n            class=\"trans-pop\" reference=\"bottom-start\">\r\n            <ng-template>\r\n              <ion-content class=\"ion-padding transpopover\">\r\n                <p>Transaction Amount: {{ loanForm.get('transactionCurrency')?.value == 'INR' ? '₹' : '$' }}\r\n                  {{ loanForm.get('transactionAmount')?.value ? loanForm.get('transactionAmount')?.value : 0 }} </p>\r\n                <p>Total Charge Amount:{{ loanForm.get('transactionCurrency')?.value == 'INR' ? '₹' : '$' }}\r\n                  {{ loanForm.get('totalChargeAmount')?.value ? loanForm.get('totalChargeAmount')?.value : 0 }}</p>\r\n                <hr style=\"background: #ffffff;\">\r\n                <p>Total Transaction Amount:\r\n                  {{ loanForm.get('totalTransactionAmount')?.value ? loanForm.get('totalTransactionAmount')?.value : 0\r\n                  }}</p>\r\n              </ion-content>\r\n            </ng-template>\r\n          </ion-popover>\r\n\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"remark-field t-15\">\r\n      <ion-item>\r\n        <ion-textarea [autoGrow]=\"true\" formControlName=\"remarks\" placeholder=\"Remarks\" specialText>\r\n        </ion-textarea>\r\n      </ion-item>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar style=\"background: transparent !important;\">\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"next\"\r\n          [disabled]=\"loanForm.invalid || isShowDenomError || transAmt > currentBalance\"\r\n          (click)=\"submit(loanForm.value)\">\r\n          Submit\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"cancel\" (click)=\"goBack()\">Cancel</ion-button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_v2_loan-disbursement-v2_loan-disbursement-v2_module_ts.js.map