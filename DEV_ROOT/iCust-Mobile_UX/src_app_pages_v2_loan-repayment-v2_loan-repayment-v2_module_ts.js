"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_v2_loan-repayment-v2_loan-repayment-v2_module_ts"],{

/***/ 19592:
/*!********************************************************************************!*\
  !*** ./src/app/pages/v2/loan-repayment-v2/loan-repayment-v2-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanRepaymentV2PageRoutingModule": () => (/* binding */ LoanRepaymentV2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_repayment_v2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-repayment-v2.page */ 21055);




const routes = [
    {
        path: '',
        component: _loan_repayment_v2_page__WEBPACK_IMPORTED_MODULE_0__.LoanRepaymentV2Page
    }
];
let LoanRepaymentV2PageRoutingModule = class LoanRepaymentV2PageRoutingModule {
};
LoanRepaymentV2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoanRepaymentV2PageRoutingModule);



/***/ }),

/***/ 71610:
/*!************************************************************************!*\
  !*** ./src/app/pages/v2/loan-repayment-v2/loan-repayment-v2.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanRepaymentV2PageModule": () => (/* binding */ LoanRepaymentV2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_repayment_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-repayment-v2-routing.module */ 19592);
/* harmony import */ var _loan_repayment_v2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-repayment-v2.page */ 21055);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-flag-picker */ 96801);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);
/* harmony import */ var src_app_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/directives/directive.module */ 27589);











let LoanRepaymentV2PageModule = class LoanRepaymentV2PageModule {
};
LoanRepaymentV2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_10__.NgxFlagPickerModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__.DirectiveModule,
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_3__.SharedMaterialModule,
            _loan_repayment_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoanRepaymentV2PageRoutingModule,
        ],
        declarations: [_loan_repayment_v2_page__WEBPACK_IMPORTED_MODULE_1__.LoanRepaymentV2Page],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe,
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_ELEMENTS_SCHEMA
        ],
    })
], LoanRepaymentV2PageModule);



/***/ }),

/***/ 21055:
/*!**********************************************************************!*\
  !*** ./src/app/pages/v2/loan-repayment-v2/loan-repayment-v2.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanRepaymentV2Page": () => (/* binding */ LoanRepaymentV2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _loan_repayment_v2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-repayment-v2.page.html?ngResource */ 74710);
/* harmony import */ var _loan_repayment_v2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-repayment-v2.page.scss?ngResource */ 75801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/branch/branch.component */ 6156);
/* harmony import */ var src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/time-slots/time-slots.component */ 19023);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_components_denomination_slide_denomination_slide_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/denomination-slide/denomination-slide.component */ 9340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var _token_v2_token_v2_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../token-v2/token-v2.page */ 68106);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var src_app_components_transaction_date_transaction_date_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/transaction-date/transaction-date.component */ 19693);



















let LoanRepaymentV2Page = class LoanRepaymentV2Page {
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
        this.productCode = 'LNR';
        this.tokenOrigin = 'Mobile';
        this.isShow = true;
        this.currencyControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('');
        this.chargeAmount = 5;
        this.homeIconToggle = false;
        this.animationState = 'out';
        this.isShowDenomError = false;
        this.paymentMode = ['Cash', 'Account', 'Cheque'];
        this.paymentModeSelected = 'Cash';
        this.editMode = false;
        this.filteredLoanAccount = [];
        this.filteredPaymentAccount = [];
        this.custAccounts = [];
        this.showMore = false;
        this.flag = true;
        this.loanAccounts = [];
        this.icon_arrow_svg = 'assets/icon/arrow-down.svg';
        this.module = "Repayment";
        this.isSelf = true;
        this.loanArr = [
            {
                id: 1,
                checked: true,
                name: 'Self',
            },
            {
                id: 2,
                checked: false,
                name: 'Others',
            },
        ];
        this.otpVerified = false;
        this.repFG = this.formBuilder.group({
            personName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            phoneNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(10)]],
            repdocumentId: [''],
            repdocumentNumber: [''],
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        this.currentUser = this.shareDataService.getCurrentUser();
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.customerId = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.customerId;
        this.currencies = JSON.parse(localStorage.getItem('COUNTRIES'));
        this.formInit();
        this.getLoanAccounts();
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
            let deposit_type = (data === null || data === void 0 ? void 0 : data.representativeInfo.length) != 0 ? 'representative' : 'self';
            this.depositType = deposit_type;
            (_e = this.loanForm.get('depositType')) === null || _e === void 0 ? void 0 : _e.patchValue(deposit_type);
            if (deposit_type == 'representative') {
                this.loanForm.addControl('representativeInfo', this.repFG);
                this.loanForm.get('representativeInfo').get('personName').patchValue((_g = (_f = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.personName);
                this.loanForm.get('representativeInfo').get('phoneNo').patchValue((_j = (_h = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.phoneNo);
                this.loanForm.get('representativeInfo').get('repdocumentId').patchValue((_l = (_k = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _k === void 0 ? void 0 : _k[0]) === null || _l === void 0 ? void 0 : _l.documentId);
                this.loanForm.get('representativeInfo').get('repdocumentNumber').patchValue((_o = (_m = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _m === void 0 ? void 0 : _m[0]) === null || _o === void 0 ? void 0 : _o.documentNumber);
            }
            else {
                this.loanForm.removeControl('representativeInfo');
            }
        }
        else {
            const countryCode = this.currencies.filter((i) => i.currencyCode === "INR");
            this.selectedCurrency = countryCode[0];
            this.depositType = 'self';
            (_p = this.loanForm.get('depositType')) === null || _p === void 0 ? void 0 : _p.patchValue('self');
        }
        this.shareDataService.getAccountInfo.subscribe(data => {
            this.accountInfo = data;
        });
        this.loanForm.get('transactionAmount').valueChanges.subscribe(val => {
            var _a;
            if (val) {
                (_a = this.denomButtonRef) === null || _a === void 0 ? void 0 : _a.nativeElement.classList.add('active-bg');
            }
        });
        this.filteredOptions = this.currencyControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)((value) => {
            const currencyCode = typeof value === 'string' ? value : value === null || value === void 0 ? void 0 : value.currencyCode;
            return currencyCode ? this._filter(currencyCode) : this.currencies.slice();
        }));
        let today = new Date().toISOString();
        const convertedDate = this.datepipe.transform(today, 'yyyy-MM-dd');
        this.loanForm.get('transactionDate').patchValue(convertedDate);
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
            productCode: [this.productCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            tokenOrigin: ['Mobile', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            loanAccountNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            accountNumber: [''],
            accountType: [''],
            accountPaymentNumber: [''],
            accountBalance: [''],
            accountCurrency: [''],
            denomination: [null],
            transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            branchFlag: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            accountBranch: [''],
            transactionDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            isMobileTrans: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            transactionTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            totalChargeAmount: [this.chargeAmount, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            totalTransactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            paymentMethod: [''],
            depositType: [''],
            chequeNo: [''],
            chequeAccBank: [''],
            chequeAccNo: [''],
            chequeType: [''],
            chequeName: [''],
            exchangeRate: [''],
            accountAmount: [''],
            totalAmount: [''],
            remarks: [''],
            loanAccount: [''],
            otpValue: ['']
        });
    }
    screenOneValidation() {
        var _a, _b, _c, _d, _e, _f, _g;
        let disable;
        if (((_a = this.loanForm.get('loanAccountNumber')) === null || _a === void 0 ? void 0 : _a.valid) &&
            ((_b = this.loanForm.get('accountPaymentNumber')) === null || _b === void 0 ? void 0 : _b.valid) &&
            ((_c = this.loanForm.get('transactionCurrency')) === null || _c === void 0 ? void 0 : _c.valid) &&
            ((_d = this.loanForm.get('chequeNo')) === null || _d === void 0 ? void 0 : _d.valid) &&
            ((_e = this.loanForm.get('chequeAccNo')) === null || _e === void 0 ? void 0 : _e.valid) &&
            ((_f = this.loanForm.get('chequeAccBank')) === null || _f === void 0 ? void 0 : _f.valid) &&
            ((_g = this.loanForm.get('transactionAmount')) === null || _g === void 0 ? void 0 : _g.valid)) {
            disable = false;
        }
        else {
            disable = true;
        }
        return disable;
    }
    _filter(currency) {
        const filterValue = currency.toLowerCase();
        return this.currencies.filter(option => option.currencyCode.toLowerCase().includes(filterValue));
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
    balanceCheck(event) {
        var _a;
        this.transAmt = event.target.value;
        this.transAmt = this.transAmt.toString().replace(/,/g, '');
        this.currentBalance = (_a = this.filteredLoanAccount) === null || _a === void 0 ? void 0 : _a.principalOutstanding;
        if (parseFloat(this.currentBalance) < parseFloat(this.transAmt)) {
            this.toastService.showToast("Loan disbursement amount should not exceed than Principal Outstanding");
        }
        else {
            return;
        }
    }
    getLoanAccounts() {
        this.api.getLoanAccounts(this.phoneNumber, this.module).subscribe((res) => {
            if ((res === null || res === void 0 ? void 0 : res.status) == 200) {
                this.loanAccounts = res === null || res === void 0 ? void 0 : res.data.filter((account) => (account === null || account === void 0 ? void 0 : account.repaymentAllowed) == true);
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
    onBlurEvent(e) {
        var _a;
        this.updateTransAmount();
        if (((_a = this.loanForm.get('paymentMethod')) === null || _a === void 0 ? void 0 : _a.value) == "Cash") {
            this.denomValidationListener();
        }
    }
    upsertAccount(filteredResponseSavingAccount) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
        this.custAccounts = filteredResponseSavingAccount.custAccount;
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
                    (_s = this.loanForm.get('accountPaymentNumber')) === null || _s === void 0 ? void 0 : _s.patchValue(modePayload === null || modePayload === void 0 ? void 0 : modePayload.accountNumber);
                    (_t = this.loanForm.get('chequeType')) === null || _t === void 0 ? void 0 : _t.patchValue(modePayload === null || modePayload === void 0 ? void 0 : modePayload.chequeType);
                    (_u = this.loanForm.get('chequeNo')) === null || _u === void 0 ? void 0 : _u.patchValue(modePayload === null || modePayload === void 0 ? void 0 : modePayload.chequeNo);
                    (_v = this.loanForm.get('chequeAccNo')) === null || _v === void 0 ? void 0 : _v.patchValue(modePayload === null || modePayload === void 0 ? void 0 : modePayload.accountNumber);
                    (_w = this.loanForm.get('chequeAccBank')) === null || _w === void 0 ? void 0 : _w.patchValue(modePayload === null || modePayload === void 0 ? void 0 : modePayload.accountBranch);
                }
            }
        }
        else {
            this.selectedCountryCode = this.selectedCurrency.countryCode.toLowerCase();
            (_x = this.loanForm.get('transactionCurrency')) === null || _x === void 0 ? void 0 : _x.patchValue(this.selectedCurrency.currencyCode);
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
        console.log("Events loan acc", e);
        let filteredLoanAccount = (_a = this.loanAccounts) === null || _a === void 0 ? void 0 : _a.filter(account => (account === null || account === void 0 ? void 0 : account.loanAccountId) === this.selectedLoanAccount);
        this.filteredLoanAccount = filteredLoanAccount[0];
        const countryCode = this.currencies.filter((i) => { var _a; return i.currencyCode === ((_a = this.filteredLoanAccount) === null || _a === void 0 ? void 0 : _a.accountCurrency); });
        this.selectedCurrency = countryCode[0];
        this.selectedCountryCode = (_b = this.selectedCurrency) === null || _b === void 0 ? void 0 : _b.countryCode.toLowerCase();
        (_c = this.loanForm.get('transactionCurrency')) === null || _c === void 0 ? void 0 : _c.patchValue((_d = this.filteredLoanAccount) === null || _d === void 0 ? void 0 : _d.accountCurrency);
    }
    onPaymentAccountSelect(e) {
        console.log("eee", this.selectedPaymentAccount);
        console.log("EEE", e);
        let filteredPaymentAccount = this.custAccounts.filter(account => (account === null || account === void 0 ? void 0 : account.accountId) === this.selectedPaymentAccount);
        this.filteredPaymentAccount = filteredPaymentAccount[0];
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
                this.selectedCurrency = filteredCurrency[0];
                this.selectedCountryCode = filteredCurrency[0].countryCode.toLowerCase();
                this.getExChangeRate(filteredCurrency[0].currencyCode);
                this.cdr.markForCheck();
            }
        }
    }
    expandMore() {
        this.showMore = !this.showMore;
        if (this.showMore) {
            this.icon_arrow_svg = 'assets/icon/arrow.svg';
        }
        else {
            this.icon_arrow_svg = 'assets/icon/arrow-down.svg';
        }
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
        this.loanViewRef.clear();
        let childComponentRef = this.loanViewRef.createComponent(src_app_components_denomination_slide_denomination_slide_component__WEBPACK_IMPORTED_MODULE_7__.DenominationSlideComponent);
        let childComponent = childComponentRef.instance;
        childComponent.unique_key = "loanViewRef";
        childComponent.denomData = (_a = this.loanForm.get('denomination')) === null || _a === void 0 ? void 0 : _a.value;
        childComponent.loanViewRef = this;
    }
    removeDynamicComponent() {
        this.loanViewRef.clear();
    }
    remove(view) {
        var _a;
        console.log("view disiss?", view);
        let data = JSON.parse(localStorage.getItem(view)) || null;
        console.log("Data??", data);
        if (view == 'loanViewRef') {
            this.loanViewRef.clear();
            if (data != null && data.total != 0) {
                this.denomAmountValidation(data.total);
                (_a = this.loanForm.get('denomination')) === null || _a === void 0 ? void 0 : _a.patchValue(data.denomination);
                console.log(this.loanForm.value);
            }
        }
    }
    denomAmountValidation(amount) {
        var _a, _b;
        if (Number((_b = (_a = this.loanForm.get('transactionAmount')) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.split(',').join('')) != Number(amount)) {
            this.isShowDenomError = true;
            this.toastService.showToast("Loan disbursement amount should not exceed than Principal Outstanding");
        }
        else {
            this.isShowDenomError = false;
        }
        this.cdr.markForCheck();
    }
    denomValidationListener() {
        let data = JSON.parse(localStorage.getItem('loanViewRef')) || null;
        console.log("Data??", data);
        if ((data === null || data === void 0 ? void 0 : data.title) == 'loanViewRef') {
            if (data != null && data.total != 0) {
                this.denomAmountValidation(data.total);
                console.log(this.loanForm.value);
            }
        }
    }
    getHomeBranch() {
        var _a, _b, _c;
        this.homeIconToggle = !this.homeIconToggle;
        if (this.homeIconToggle) {
            (_a = this.loanForm.get('transactionBranch')) === null || _a === void 0 ? void 0 : _a.patchValue((_b = this.custAccounts[0]) === null || _b === void 0 ? void 0 : _b.accountBranch);
        }
        else {
            (_c = this.loanForm.get('transactionBranch')) === null || _c === void 0 ? void 0 : _c.patchValue("");
        }
    }
    datePopup() {
        var _a;
        let oldDate = (_a = this.loanForm.get('transactionDate')) === null || _a === void 0 ? void 0 : _a.value;
        this.modalController.create({
            component: src_app_components_transaction_date_transaction_date_component__WEBPACK_IMPORTED_MODULE_10__.TransactionDateComponent,
            componentProps: {
                date: this.loanForm.get('transactionDate').value,
            }
        }).then(modalResp => {
            modalResp.present();
            modalResp.onDidDismiss().then(res => {
                var _a, _b;
                console.log(typeof (res === null || res === void 0 ? void 0 : res.data));
                if (typeof (res === null || res === void 0 ? void 0 : res.data) == "undefined") {
                    (_a = this.loanForm.get('transactionDate')) === null || _a === void 0 ? void 0 : _a.patchValue(oldDate);
                }
                else {
                    (_b = this.loanForm.get('transactionDate')) === null || _b === void 0 ? void 0 : _b.patchValue(res.data);
                }
            });
        });
    }
    openPopup() {
        this.modalController.create({
            component: src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_5__.TimeSlotsComponent,
            componentProps: {
                date: this.loanForm.get('transactionDate').value,
            }
        }).then(modalResp => {
            modalResp.present();
            modalResp.onDidDismiss().then(res => {
                var _a;
                if (res.data != null || res.data != undefined || res.data != "undefined") {
                    console.log(res);
                    this.loanForm.get('transactionTime').patchValue((_a = res.data) === null || _a === void 0 ? void 0 : _a.form);
                }
            });
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_4__.BranchComponent,
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
    goToFileUpload() {
        this.router.navigate(['file-upload']);
    }
    goToScan() {
        this.router.navigate(['scan']);
    }
    paymentModeChange(event) {
        this.paymentModeSelected = event.value;
        if (this.paymentModeSelected == "Account") {
            this.loanForm.get('accountPaymentNumber').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]); // Set Required Validator
            this.loanForm.get('accountPaymentNumber').updateValueAndValidity();
            if (!this.editMode) {
                this.selectedPaymentAccount = this.custAccounts[0].accountId;
                if (this.accountInfo.accountId != null) {
                    this.loanForm.get('accountPaymentNumber').patchValue(this.accountInfo.accountId);
                }
                else {
                    this.loanForm.get('accountPaymentNumber').patchValue(this.custAccounts[0].accountId);
                }
            }
            this.loanForm.get('chequeNo').clearValidators(); // 6. Clear All Validators
            this.loanForm.get('chequeNo').updateValueAndValidity();
            this.loanForm.get('chequeAccNo').clearValidators(); // Set Required Validator
            this.loanForm.get('chequeAccNo').updateValueAndValidity();
            this.loanForm.get('chequeAccBank').clearValidators(); // Set Required Validator
            this.loanForm.get('chequeAccBank').updateValueAndValidity();
        }
        else if (this.paymentModeSelected == 'Cheque') {
            this.loanForm.get('chequeNo').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]); // Set Required Validator
            this.loanForm.get('chequeNo').updateValueAndValidity();
            this.loanForm.get('chequeAccNo').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]); // Set Required Validator
            this.loanForm.get('chequeAccNo').updateValueAndValidity();
            this.loanForm.get('chequeAccBank').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]); // Set Required Validator
            this.loanForm.get('chequeAccBank').updateValueAndValidity();
            this.loanForm.get('accountPaymentNumber').clearValidators(); // 6. Clear All Validators
            this.loanForm.get('accountPaymentNumber').updateValueAndValidity();
        }
        else {
            this.loanForm.get('accountPaymentNumber').clearValidators(); // 6. Clear All Validators
            this.loanForm.get('accountPaymentNumber').updateValueAndValidity();
            this.loanForm.get('chequeNo').clearValidators(); // 6. Clear All Validators
            this.loanForm.get('chequeNo').updateValueAndValidity();
            this.loanForm.get('chequeAccNo').clearValidators(); // Set Required Validator
            this.loanForm.get('chequeAccNo').updateValueAndValidity();
            this.loanForm.get('chequeAccBank').clearValidators(); // Set Required Validator
            this.loanForm.get('chequeAccBank').updateValueAndValidity();
        }
        console.log(this.paymentModeSelected);
    }
    onScreenRefresh() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        this.editMode = ((_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) ? true : false;
        this.currentUser = this.shareDataService.getCurrentUser();
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.customerId = (_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.customerId;
        this.currencies = JSON.parse(localStorage.getItem('COUNTRIES'));
        this.formInit();
        this.loadData();
        if (this.editMode) {
            const data = (_c = this.routerData) === null || _c === void 0 ? void 0 : _c.data;
            const countryCode = this.currencies.filter((i) => i.currencyCode === (data === null || data === void 0 ? void 0 : data.transactionCurrency));
            this.selectedCurrency = countryCode[0];
            this.selectedCountryCode = (_d = this.selectedCurrency) === null || _d === void 0 ? void 0 : _d.countryCode.toLowerCase();
            let deposit_type = (data === null || data === void 0 ? void 0 : data.representativeInfo.length) != 0 ? 'representative' : 'self';
            this.depositType = deposit_type;
            (_e = this.loanForm.get('depositType')) === null || _e === void 0 ? void 0 : _e.patchValue(deposit_type);
            console.log("TESTON", (_g = (_f = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.personName);
            if (deposit_type == 'representative') {
                this.loanForm.addControl('representativeInfo', this.repFG);
                this.loanForm.get('representativeInfo').get('personName').patchValue((_j = (_h = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.personName);
                this.loanForm.get('representativeInfo').get('phoneNo').patchValue((_l = (_k = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _k === void 0 ? void 0 : _k[0]) === null || _l === void 0 ? void 0 : _l.phoneNo);
                this.loanForm.get('representativeInfo').get('repdocumentId').patchValue((_o = (_m = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _m === void 0 ? void 0 : _m[0]) === null || _o === void 0 ? void 0 : _o.documentId);
                this.loanForm.get('representativeInfo').get('repdocumentNumber').patchValue((_q = (_p = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _p === void 0 ? void 0 : _p[0]) === null || _q === void 0 ? void 0 : _q.documentNumber);
            }
            else {
                this.loanForm.removeControl('representativeInfo');
            }
        }
        else {
            const countryCode = this.currencies.filter((i) => i.currencyCode === "INR");
            this.selectedCurrency = countryCode[0];
            this.depositType = 'self';
            (_r = this.loanForm.get('depositType')) === null || _r === void 0 ? void 0 : _r.patchValue('self');
        }
        this.shareDataService.getAccountInfo.subscribe(data => {
            this.accountInfo = data;
        });
        this.loanForm.get('transactionAmount').valueChanges.subscribe(val => {
            var _a;
            if (val) {
                (_a = this.denomButtonRef) === null || _a === void 0 ? void 0 : _a.nativeElement.classList.add('active-bg');
            }
        });
        (_s = this.loanForm.get('transactionAmount')) === null || _s === void 0 ? void 0 : _s.valueChanges.subscribe(val => {
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
    segmentChanged(e) {
        if (e == 'representative') {
            this.loanForm.addControl('representativeInfo', this.repFG);
        }
        else {
            this.loanForm.removeControl('representativeInfo');
        }
        console.log(this.loanForm.value);
    }
    keyPressMob(event) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    loanrepayments(value) {
        if (value == 'Self') {
            this.isSelf = true;
        }
        else {
            this.isSelf = false;
        }
    }
    getOtp() {
        this.otpVerified = true;
    }
    submit(form) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (((_a = this.loanForm.get('paymentMethod')) === null || _a === void 0 ? void 0 : _a.value) == "Cash") {
            if (this.isShowDenomError) {
                this.toastService.showToast("Denomination total should match with the transaction amount");
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
        if (this.depositType == 'representative') {
            form.representativeInfo = [{
                    phoneNo: (_e = this.loanForm.get('representativeInfo').get('phoneNo')) === null || _e === void 0 ? void 0 : _e.value,
                    personName: (_f = this.loanForm.get('representativeInfo').get('personName')) === null || _f === void 0 ? void 0 : _f.value,
                    documentId: (_g = this.loanForm.get('representativeInfo').get('repdocumentId')) === null || _g === void 0 ? void 0 : _g.value,
                    documentNumber: (_h = this.loanForm.get('representativeInfo').get('repdocumentNumber')) === null || _h === void 0 ? void 0 : _h.value
                }];
        }
        else {
            form.representativeInfo = [];
        }
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
                    accountCurrency: (_j = this.filteredPaymentAccount) === null || _j === void 0 ? void 0 : _j.accountCurrency
                }
            ];
        }
        else if ((form === null || form === void 0 ? void 0 : form.paymentMethod) === 'Cheque') {
            modeInfo = [
                {
                    loanAccountNo: form === null || form === void 0 ? void 0 : form.loanAccountNumber,
                    rePaymentMode: form === null || form === void 0 ? void 0 : form.paymentMethod,
                    category: this.module,
                    accountCurrency: (_k = this.filteredPaymentAccount) === null || _k === void 0 ? void 0 : _k.accountCurrency,
                    chequeType: form === null || form === void 0 ? void 0 : form.chequeType,
                    accountNumber: form === null || form === void 0 ? void 0 : form.chequeAccNo,
                    accountBranch: form === null || form === void 0 ? void 0 : form.chequeAccBank,
                    chequeNo: form === null || form === void 0 ? void 0 : form.chequeNo
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
                this.loanRepaymentResponse = resp;
                this.transactionId = this.loanRepaymentResponse.transactionId;
                localStorage.setItem('AppointmentDetails', JSON.stringify(resp));
                if (this.loanRepaymentResponse === 200 || this.loanRepaymentResponse !== null) {
                    this.shareDataService.shareTransactionId(this.transactionId);
                    this.onClick(this.loanRepaymentResponse);
                    this.loanForm.reset();
                }
            });
        }
        else {
            form.transactionAmount = form.transactionAmount.toString().replace(/,/g, '');
            this.api.cashDepositSave(form).subscribe((resp) => {
                localStorage.setItem("TransactionTime", resp.transactionTime);
                this.loanRepaymentResponse = resp;
                this.transactionId = this.loanRepaymentResponse.transactionId;
                localStorage.setItem('AppointmentDetails', JSON.stringify(resp));
                if (this.loanRepaymentResponse === 200 || this.loanRepaymentResponse !== null) {
                    this.shareDataService.shareTransactionId(this.transactionId);
                    this.onClick(this.loanRepaymentResponse);
                    this.loanForm.reset();
                }
            });
        }
    }
    goToNextPage() {
        this.flag = false;
        console.log(this.loanForm.value);
    }
    goToPreviousPage() {
        this.flag = true;
    }
    onClick(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: _token_v2_token_v2_page__WEBPACK_IMPORTED_MODULE_9__.TokenV2Page,
                componentProps: {
                    value: event,
                    screen: 'onScreen'
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
    goToHomepage() {
        this.router.navigate(['/dashboard']);
    }
    ngOnDestroy() {
        localStorage.removeItem("loanViewRef");
    }
};
LoanRepaymentV2Page.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_8__.LoadingService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe }
];
LoanRepaymentV2Page.propDecorators = {
    loanViewRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ['dynamic', { read: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewContainerRef },] }],
    denomButtonRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ["denom", { read: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ElementRef },] }],
    autocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocompleteTrigger,] }]
};
LoanRepaymentV2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-loan-repayment-v2',
        template: _loan_repayment_v2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loan_repayment_v2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoanRepaymentV2Page);



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

/***/ 75801:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/v2/loan-repayment-v2/loan-repayment-v2.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ".example-right-align {\n  text-align: right;\n}\n\n.mat-form-field-appearance-outline .mat-form-field-suffix.denomination-action {\n  top: -3px !important;\n}\n\n.currency-card {\n  width: auto;\n  height: 42px;\n  color: #FFFFFF !important;\n  text-align: center;\n  border-radius: 5px;\n  margin-top: 0px;\n}\n\n:host ::ng-deep .mat-select-panel .mat-option.loan-text {\n  line-height: 1.5em !important;\n  height: 60px !important;\n}\n\n.white-box {\n  width: 30px;\n  height: 30px;\n  background: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  margin-left: 46%;\n  z-index: 1;\n  position: relative;\n  margin-top: -10px;\n}\n\n.currency-link {\n  left: 0;\n  top: 16px;\n  right: 0;\n  bottom: 6px;\n  position: relative;\n  text-decoration: underline !important;\n}\n\n.row {\n  margin-right: -6px !important;\n  margin-left: -6px !important;\n}\n\n.col-6 {\n  padding-right: 6px !important;\n  padding-left: 6px !important;\n}\n\nion-content.transpopover {\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #ffffff;\n}\n\nion-item.exchange::part(native) {\n  height: 65px;\n  background: #F2F2F2;\n}\n\nion-item.txn::part(native) {\n  height: 65px;\n}\n\n.suffix-icon {\n  margin-top: -14px;\n}\n\nion-popover.trans-pop::part(content) {\n  --width: 275px !important;\n  border-radius: 10px !important;\n  --offset-x: -10px !important;\n}\n\nion-popover.trans-pop,\n.popover-arrow::after {\n  --background: #004C97 !important;\n}\n\n.remark-field {\n  margin-top: 25px;\n  border: 1px solid #dee2e6;\n  border-radius: 16px;\n  height: 100px;\n  filter: drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.0901960784));\n}\n\n.full-width {\n  width: 100% !important;\n}\n\n.suffix-ion-icon {\n  position: absolute;\n  bottom: 0;\n  right: 10px;\n  top: 10px;\n}\n\n.suffix-ion-icon-total {\n  position: relative;\n  bottom: 0;\n  right: 32px;\n  top: 10px;\n}\n\n:host ::ng-deep .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0 !important;\n}\n\n:host ::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n:host ::ng-deep mat-form-field.mat-form-field.tta {\n  background: #F2F2F2 !important;\n}\n\n:host ::ng-deep mat-form-field.mat-form-field.excg {\n  background: #F2F2F2 !important;\n}\n\n:host ::ng-deep mat-form-field.mat-form-field.ttc {\n  background: #F2F2F2 !important;\n}\n\n:host ::ng-deep .mat-form-field {\n  display: inherit !important;\n}\n\n.mt-2 {\n  margin-top: 2px;\n}\n\n:host ::ng-deep .mat-input-element.auto-currency {\n  margin-left: 10px !important;\n}\n\nion-segment {\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px !important;\n  height: 50px !important;\n}\n\nion-segment-button {\n  --background-checked: linear-gradient(90deg, #051A2D, #004C97) !important;\n}\n\n.file-text {\n  color: #004C97;\n}\n\n.account-group {\n  background: #F2F2F2;\n  padding: 10px;\n  border-radius: 16px;\n}\n\n.lbl-title {\n  color: #102245;\n  font-size: 11px;\n  opacity: 50%;\n}\n\n.lbl-header {\n  color: #004C97;\n  font-size: 16px;\n}\n\n.lbl-content {\n  color: #262831;\n  font-size: 12px;\n  opacity: 100%;\n}\n\nion-item.item-textarea {\n  --min-height: 100px;\n}\n\nion-button.next {\n  width: 150px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #FFFFFF;\n}\n\nion-button.cancel {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #B20000;\n}\n\nion-button.back {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n\n.file-upload-container {\n  width: auto;\n  height: 100px;\n  border: 1px solid #ffffff;\n  background: #F8F8F8;\n  filter: drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.0901960784));\n  border-radius: 16px;\n}\n\n.file-upload-container .file-content {\n  margin-top: 6%;\n}\n\n.file-upload-container .file-img {\n  width: 25px;\n  height: 25px;\n}\n\n.loanheader ::ng-deep .mat-button-toggle-checked {\n  background-color: #ffffff !important;\n  color: #000000 !important;\n  border-bottom: 3px solid blue;\n}\n\n.loanheader ::ng-deep .mat-button-toggle {\n  width: 170px !important;\n  border-right: 0 !important;\n  border-left: 0 !important;\n}\n\n.loanheader ::ng-deep .mat-button-toggle-standalone.mat-button-toggle-appearance-standard, .loanheader .mat-button-toggle-group-appearance-standard {\n  border: 0 !important;\n}\n\nion-button .back-btn {\n  color: #004C97;\n  padding-bottom: 27px;\n}\n\n.loan-title {\n  padding-top: 15px;\n}\n\n.otp-btn-disable {\n  color: red;\n  padding: 15px 32px;\n  border-radius: 7px;\n  color: #292d32;\n}\n\n.otp-btn-enable {\n  background: rgb(5, 26, 45);\n  background: linear-gradient(91deg, rgb(5, 26, 45) 0%, rgb(0, 76, 151) 100%);\n  padding: 15px 32px;\n  border-radius: 7px;\n  color: #e7e7e7;\n}\n\nion-button.continue {\n  width: 90%;\n  height: 40px;\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  --color: #ffffff;\n  margin-bottom: 10px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tcmVwYXltZW50LXYyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FBQUo7O0FBR0E7RUFDSSw2QkFBQTtFQUNBLDRCQUFBO0FBQUo7O0FBSUE7RUFDSSw2QkFBQTtFQUNBLDRCQUFBO0FBREo7O0FBSUE7RUFDSSxzREFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7QUFESjs7QUFLQTs7RUFFSSxnQ0FBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZEQUFBO0FBRko7O0FBTUE7RUFDSSxzQkFBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFISjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBSEo7O0FBTUE7RUFDSSxvQkFBQTtBQUhKOztBQU1BO0VBQ0ksNEJBQUE7QUFISjs7QUFNQTtFQUNJLDhCQUFBO0FBSEo7O0FBTUE7RUFDSSw4QkFBQTtBQUhKOztBQU1BO0VBQ0ksOEJBQUE7QUFISjs7QUFNQTtFQUNJLDJCQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0FBSEo7O0FBTUE7RUFDSSw0QkFBQTtBQUhKOztBQU1BO0VBQ0ksZ0dBQUE7RUFDQSx1QkFBQTtBQUhKOztBQU1BO0VBQ0kseUVBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7QUFISjs7QUFPQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFKSjs7QUFPQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFKSjs7QUFXQTtFQUNJLG1CQUFBO0FBUko7O0FBV0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7QUFSSjs7QUFXQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBUko7O0FBV0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2REFBQTtFQUNBLG1CQUFBO0FBUko7O0FBVUk7RUFDSSxjQUFBO0FBUlI7O0FBV0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVRSOztBQWVJO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FBWlI7O0FBZUk7RUFDSSx1QkFBQTtFQUNELDBCQUFBO0VBQ0EseUJBQUE7QUFiUDs7QUFnQkk7RUFDSSxvQkFBQTtBQWRSOztBQW1CQTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtBQWhCSjs7QUFrQkE7RUFDSSxpQkFBQTtBQWZKOztBQWtCQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWZKOztBQXlCRTtFQVBFLDBCQUFBO0VBQ0EsMkVBQUE7RUFRQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXJCSjs7QUF1QkU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBcEJKIiwiZmlsZSI6ImxvYW4tcmVwYXltZW50LXYyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1zdWZmaXguZGVub21pbmF0aW9uLWFjdGlvbiB7XHJcbiAgICB0b3A6IC0zcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1cnJlbmN5LWNhcmQge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtcGFuZWwgLm1hdC1vcHRpb24ubG9hbi10ZXh0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ud2hpdGUtYm94IHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NiU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbi5jdXJyZW5jeS1saW5rIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDE2cHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC02cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uY29sLTYge1xyXG4gICAgcGFkZGluZy1yaWdodDogNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY29udGVudC50cmFuc3BvcG92ZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFBMkQsICMwMDRDOTcpO1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuaW9uLWl0ZW0uZXhjaGFuZ2U6OnBhcnQobmF0aXZlKSB7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xyXG59XHJcblxyXG5pb24taXRlbS50eG46OnBhcnQobmF0aXZlKSB7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbn1cclxuXHJcbi5zdWZmaXgtaWNvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcclxufVxyXG5cclxuaW9uLXBvcG92ZXIudHJhbnMtcG9wOjpwYXJ0KGNvbnRlbnQpIHtcclxuICAgIC0td2lkdGg6IDI3NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLW9mZnNldC14OiAtMTBweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gLS1vZmZzZXQteTogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1wb3BvdmVyLnRyYW5zLXBvcCxcclxuLnBvcG92ZXItYXJyb3c6OmFmdGVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwNEM5NyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVtYXJrLWZpZWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAzcHggMTVweCAjMDAwMDAwMTcpO1xyXG4gICAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNnB4IDI0cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggMHB4IDFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3VmZml4LWlvbi1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uc3VmZml4LWlvbi1pY29uLXRvdGFsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAzMnB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC50dGEge1xyXG4gICAgYmFja2dyb3VuZDogI0YyRjJGMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQuZXhjZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC50dGMge1xyXG4gICAgYmFja2dyb3VuZDogI0YyRjJGMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm10LTIge1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50LmF1dG8tY3VycmVuY3kge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQge1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNnB4IDI0cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggMHB4IDFweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxQTJELCAjMDA0Qzk3KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmlsZS10ZXh0IHtcclxuICAgIGNvbG9yOiAjMDA0Qzk3O1xyXG59XHJcblxyXG5cclxuLmFjY291bnQtZ3JvdXAge1xyXG4gICAgYmFja2dyb3VuZDogI0YyRjJGMjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcblxyXG4ubGJsLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMTAyMjQ1O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgb3BhY2l0eTogNTAlO1xyXG59XHJcblxyXG4ubGJsLWhlYWRlciB7XHJcbiAgICBjb2xvcjogIzAwNEM5NztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmxibC1jb250ZW50IHtcclxuICAgIGNvbG9yOiAjMjYyODMxO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxufVxyXG5cclxuLy8gaW9uLWl0ZW0uZXhjaGFuZ2UuaXRlbS1maWxsLW91dGxpbmUge1xyXG4vLyAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbmlvbi1pdGVtLml0ZW0tdGV4dGFyZWEge1xyXG4gICAgLS1taW4taGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5uZXh0IHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxQTJELCAjMDA0Qzk3KTtcclxuICAgIC0tY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbmlvbi1idXR0b24uY2FuY2VsIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICNCMjAwMDA7XHJcbn1cclxuXHJcbmlvbi1idXR0b24uYmFjayB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWxlLXVwbG9hZC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAzcHggMTVweCAjMDAwMDAwMTcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuXHJcbiAgICAuZmlsZS1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsZS1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuXHJcbiAgICB9XHJcbn1cclxuLmxvYW5oZWFkZXJ7XHJcblxyXG4gICAgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDsgXHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XHJcbiAgICAgICAgd2lkdGg6IDE3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICBib3JkZXItcmlnaHQ6IDAgICFpbXBvcnRhbnQ7XHJcbiAgICAgICBib3JkZXItbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLCAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZHtcclxuICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbmlvbi1idXR0b24gLmJhY2stYnRue1xyXG4gICAgY29sb3I6ICMwMDRDOTc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjdweDtcclxufVxyXG4ubG9hbi10aXRsZXtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ub3RwLWJ0bi1kaXNhYmxlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBjb2xvcjogIzI5MmQzMjtcclxuICB9XHJcbiAgQG1peGluIGJ0bi1ncmFkaWVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNSwgMjYsIDQ1KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgOTFkZWcsXHJcbiAgICAgIHJnYmEoNSwgMjYsIDQ1LCAxKSAwJSxcclxuICAgICAgcmdiYSgwLCA3NiwgMTUxLCAxKSAxMDAlXHJcbiAgICApO1xyXG4gIH1cclxuICAub3RwLWJ0bi1lbmFibGUge1xyXG4gICAgQGluY2x1ZGUgYnRuLWdyYWRpZW50O1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgY29sb3I6ICNlN2U3ZTc7XHJcbiAgfVxyXG4gIGlvbi1idXR0b24uY29udGludWUge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxYTJkLCAjMDA0Yzk3KTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 74710:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/v2/loan-repayment-v2/loan-repayment-v2.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar class=\"loanheader\">\r\n    <ion-buttons slot=\"start\" class=\"back-btn\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"bank\" class=\"loan-title\">Loan Repayment</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"loanForm.get('paymentMethod').value === 'Cheque'\">\r\n      <ion-button fill=\"clear\" (click)=\"goToFileUpload()\">\r\n        <ion-icon slot=\"icon-only\" src=\"assets/icon/upload-icon.svg\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button fill=\"clear\" (click)=\"goToScan()\">\r\n        <ion-icon slot=\"icon-only\" src=\"assets/icon/scan.svg\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <mat-button-toggle-group\r\n    class=\"auto-manual-toggle-group\"\r\n    (change)=\"loanrepayments($event.value)\"\r\n  >\r\n    <mat-button-toggle\r\n      *ngFor=\"let option of loanArr; let i = index\"\r\n      color=\"primary\"\r\n      [checked]=\"option.checked\"\r\n      [value]=\"option.name\"\r\n      class=\"auto-manual-toggle\"\r\n      >{{ option.name }}\r\n    </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"flag\" class=\"ion-padding\" [scrollEvents]=\"true\" (ionScroll)=\"onScroll()\">\r\n \r\n  <form *ngIf=\"loanForm && isSelf\" [formGroup]=\"loanForm\">\r\n    <!-- TODO: Reusable component start -->\r\n    <div class=\"account-group\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width my-2\" style=\"background: #ffffff;\">\r\n        <mat-label>Loan Account</mat-label>\r\n        <mat-select formControlName=\"loanAccountNumber\" [(ngModel)]=\"selectedLoanAccount\"\r\n          (ngModelChange)=\"onLoanAccountSelect($event)\" panelClass=\"nrpSelect\"\r\n          [ngClass]=\"loanAccounts.length == 1 ? 'removeArrow' : ''\">\r\n          <mat-select-trigger>\r\n            <p class=\"my-1 d-flex align-items-center\">\r\n              <span class=\"currency-label\">{{ filteredLoanAccount?.accountCurrency }} </span>\r\n              &nbsp; <span>{{ loanForm.get('loanAccountNumber')?.value }} </span>\r\n            </p>\r\n          </mat-select-trigger>\r\n          <mat-option *ngFor=\"let loan of loanAccounts\" [value]=\"loan.loanAccountId\" class=\"loan-text\">\r\n            {{loan?.loanAccountId}} <br>\r\n            <span class=\"sub-text\">{{loan?.loanType}}</span>\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-hint *ngIf=\"loanAccounts.length == 0\">\r\n        <small class=\"text-center\">“Repayment loan account not found”</small>\r\n      </mat-hint>\r\n\r\n      <div style=\"margin-left: 12px;margin-right: 12px;\" class=\"my-2\">\r\n        <ng-container *ngIf=\"!showMore;else showMoreTemplate\">\r\n          <div class=\"row justify-content-between text-left\">\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Current arrears</span>\r\n              <p class=\"lbl-content\">{{filteredLoanAccount?.currentArrears ?? 0}}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Principal Outstanding</span>\r\n              <p class=\"lbl-content\">{{ formatAccountBalance(filteredLoanAccount?.principalOutstanding) ?? 0 }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row justify-content-between text-left\">\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Interest Due</span>\r\n              <p class=\"lbl-content\">{{ formatAccountBalance(filteredLoanAccount?.principalOutstanding) ?? 0 }}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Account Branch</span>\r\n              <p class=\"lbl-content\">{{ filteredLoanAccount?.accountBranch }}</p>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <ng-template #showMoreTemplate>\r\n          <div class=\"row justify-content-between text-left\">\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Current arrears</span>\r\n              <p class=\"lbl-content\">{{ filteredLoanAccount?.currentArrears ?? 0 }}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Principal Outstanding</span>\r\n              <p class=\"lbl-content\">{{ formatAccountBalance(filteredLoanAccount?.principalOutstanding) ?? 0 }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row justify-content-between text-left\">\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Interest Due</span>\r\n              <p class=\"lbl-content\">{{ formatAccountBalance(filteredLoanAccount?.principalOutstanding) ?? 0 }}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Account Branch</span>\r\n              <p class=\"lbl-content\">{{ filteredLoanAccount?.accountBranch }}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row justify-content-between text-left\">\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Loan Breakup Dues</span>\r\n              <p class=\"lbl-content\">{{ filteredLoanAccount?.loanBreakupDues ?? 0 }}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Principal</span>\r\n              <p class=\"lbl-content\">{{ formatAccountBalance(filteredLoanAccount?.principalAmount) ?? 0 }}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Interest</span>\r\n              <p class=\"lbl-content\">{{ formatAccountBalance(filteredLoanAccount?.interestAmount) ?? 0 }}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Principal Penalty</span>\r\n              <p class=\"lbl-content\">{{filteredLoanAccount?.principalPenalty ?? 0 }}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Interest Penalty</span>\r\n              <p class=\"lbl-content\">{{ filteredLoanAccount?.interestPenalty ?? 0 }}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Fee</span>\r\n              <p class=\"lbl-content\">{{ filteredLoanAccount?.fee ?? 0 }}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Type</span>\r\n              <p class=\"lbl-content\">{{ filteredLoanAccount?.loanType }}</p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n    <div class=\"white-box\" (click)=\"expandMore()\">\r\n      <img [src]=\"icon_arrow_svg\" class=\"arrow-icon\">\r\n    </div>\r\n\r\n    <div class=\"denom-group my-2\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n        <mat-label>Payment Mode</mat-label>\r\n        <mat-select [(ngModel)]=\"paymentModeSelected\" formControlName=\"paymentMethod\"\r\n          (selectionChange)=\"paymentModeChange($event)\" panelClass=\"nrpSelect\">\r\n          <mat-option *ngFor=\"let mode of paymentMode\" [value]=\"mode\">{{mode}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"account-group my-2\" *ngIf=\"loanForm.get('paymentMethod').value === 'Account'\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width my-2\" style=\"background: #ffffff;\">\r\n        <mat-label>Account Number</mat-label>\r\n        <mat-select formControlName=\"accountPaymentNumber\" [(ngModel)]=\"selectedPaymentAccount\"\r\n          (ngModelChange)=\"onPaymentAccountSelect($event)\" panelClass=\"nrpSelect\"\r\n          [ngClass]=\"custAccounts.length == 1 ? 'removeArrow' : ''\">\r\n          <mat-select-trigger>\r\n            <p class=\"my-1 d-flex align-items-center\">\r\n              <span class=\"currency-label\">{{ filteredPaymentAccount?.accountCurrency }} </span>\r\n              &nbsp; <span>{{ loanForm.get('accountPaymentNumber')?.value }} </span>\r\n            </p>\r\n          </mat-select-trigger>\r\n          <mat-option *ngFor=\"let user of custAccounts\" [value]=\"user.accountId\" class=\"loan-text\" cdkScrollable>\r\n            {{user.accountId}}<br>\r\n            <span class=\"sub-text\">{{user?.accountType}}</span>\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <div style=\"margin-left: 12px;margin-right: 12px;\" class=\"my-2\">\r\n        <div class=\"row justify-content-between text-left\">\r\n          <div class=\"col-6\">\r\n            <span class=\" lbl-title\">Account Balance</span>\r\n            <p class=\"lbl-content\">{{ filteredPaymentAccount?.amount | currency: filteredLoanAccount?.accountCurrency }}\r\n            </p>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <span class=\" lbl-title\">Account Branch</span>\r\n            <p class=\"lbl-content\">{{ filteredPaymentAccount?.accountBranch }}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-6\">\r\n            <span class=\" lbl-title\">Customer Name</span>\r\n            <p class=\"lbl-content\">{{ currentUser?.firstName }}</p>\r\n          </div>\r\n          <!-- <div class=\"col-6\">\r\n            <span class=\" lbl-title\">Type</span>\r\n            <p class=\"lbl-content\">{{ filteredPaymentAccount?.accountType }}</p>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"denom-group\" *ngIf=\"loanForm.get('paymentMethod').value === 'Cheque'\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width my-1\">\r\n        <mat-label>Cheque Number</mat-label>\r\n        <input matInput placeholder=\"Cheque Number\" #myRef type=\"text\" min=\"1\" (keypress)=\"keyPressNumbers($event)\"\r\n          formControlName=\"chequeNo\" numbersOnly>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"outline\" class=\"full-width my-2\">\r\n        <mat-label>Account Number</mat-label>\r\n        <input matInput formControlName=\"chequeAccNo\" numbersOnly>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"outline\" class=\"full-width my-2\">\r\n        <mat-label>Account Bank</mat-label>\r\n        <input matInput formControlName=\"chequeAccBank\" specialText>\r\n      </mat-form-field>\r\n\r\n    </div>\r\n    <!-- End of payment mode section -->\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-6 my-3\">\r\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n          <mat-label>Transaction Currency</mat-label>\r\n          <ngx-flag-picker *ngIf=\"loanForm.get('transactionCurrency')?.value?.length === 3\" matPrefix\r\n            [selectedCountryCode]=\"selectedCountryCode\" [showFlags]=\"isShow\" [showLabels]=\"!isShow\"\r\n            [showArrow]=\"!isShow\" slot=\"start\"></ngx-flag-picker>\r\n          <input #autoCompleteInput matInput [matAutocomplete]=\"auto\" [(ngModel)]=\"transactionCurrency\"\r\n            formControlName=\"transactionCurrency\" (ngModelChange)=\"selectCurrencyCode($event)\"\r\n            [formControl]=\"currencyControl\" class=\"auto-currency\" oninput=\"this.value = this.value.toUpperCase()\"\r\n            appAlphabetOnly>\r\n          <mat-autocomplete #auto=\"matAutocomplete\" autoActiveFirstOption>\r\n            <mat-option *ngFor=\"let currency of filteredOptions | async\" [value]=\"currency.currencyCode\">\r\n              <img alt=\"\" class=\"example-option-img\"\r\n                src=\"assets/svg-country-flags/svg/{{currency?.countryCode.toLowerCase()}}.svg\" height=\"25\" width=\"25\">\r\n              <span> {{currency?.countryCode}} &nbsp;{{ currency?.countryName }}</span>\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n          <mat-icon matSuffix>arrow_drop_down</mat-icon>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-6\"\r\n        *ngIf=\"!filteredLoanAccount?.accountCurrency.toLowerCase().includes(selectedCountryCode.toLowerCase())\">\r\n        <mat-form-field appearance=\"outline\" class=\"excg full-width my-3\">\r\n          <mat-label>Exchange Rate</mat-label>\r\n          <input matInput placeholder=\"Exchange Rate\" readonly=\"true\" formControlName=\"exchangeRate\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"denom-group my-2\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width my-1\">\r\n        <mat-label>Loan Repayment Amount</mat-label>\r\n        <input matInput placeholder=\"Amount\" #myRef [(ngModel)]=\"transAmount\" type=\"tel\"\r\n          formControlName=\"transactionAmount\" separator (blur)=\"onBlurEvent($event)\" (keyup)=\"balanceCheck($event)\">\r\n        <button *ngIf=\"loanForm.get('paymentMethod').value === 'Cash'\" mat-button matSuffix\r\n          [ngClass]=\"loanForm.get('transactionAmount')?.value ? 'active-bg' : 'inactive-bg'\" class=\"action-button\"\r\n          #denom (click)=\"enableDisableAction('TXAM')\" style=\"width: 140px;\">\r\n          Denomination\r\n        </button>\r\n      </mat-form-field>\r\n      <mat-error style=\"margin-left: 5px;\" *ngIf=\"isShowDenomError\">\r\n        Denomination total should match with the transaction amount\r\n      </mat-error>\r\n      <mat-error style=\"margin-left: 5px;\" *ngIf=\"transAmt > currentBalance\">\r\n        Loan disbursement amount should not exceed than Principal Outstanding\r\n      </mat-error>\r\n      <div class=\"my-1\">\r\n        <ng-template #dynamic></ng-template>\r\n      </div>\r\n    </div>\r\n\r\n    <mat-hint *ngIf=\"!filteredLoanAccount?.accountCurrency.toLowerCase().includes(selectedCountryCode.toLowerCase())\">\r\n      <img src=\"assets/icon/error.svg\" class=\"small-info\">\r\n      <small> “Exchange rate may be changed at the time of transaction”</small>\r\n    </mat-hint>\r\n\r\n  </form>\r\n  <div *ngIf=\"!isSelf\" [formGroup]=\"loanForm\">\r\n    <mat-form-field appearance=\"outline\" class=\"full-width\" class=\"emailField\">\r\n      <mat-label>Loan Account</mat-label>\r\n      <input matInput formControlName=\"loanAccount\" />\r\n      <button\r\n        *ngIf=\"!otpVerified; else showEmailSuccess\"\r\n        matSuffix\r\n        (click)=\"getOtp()\"\r\n        class=\"otp-btn\"\r\n        [ngClass]=\"\r\n        loanForm.get('loanAccount').invalid\r\n            ? 'otp-btn-disable'\r\n            : 'otp-btn-enable'\r\n        \"\r\n      >\r\n        Get Otp\r\n      </button>\r\n      <ng-template #showEmailSuccess>\r\n        <ion-icon\r\n          matSuffix\r\n          size=\"large\"\r\n          name=\"checkmark-circle-outline\"\r\n          class=\"succss-btn\"\r\n          style=\"color: green;\"\r\n        ></ion-icon>\r\n      </ng-template>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field *ngIf=\"otpVerified\"\r\n  class=\"full-width\"\r\n  appearance=\"outline\"\r\n  class=\"input-field-cont\"\r\n>\r\n  <mat-label>Enter Otp</mat-label>\r\n  <input\r\n    type=\"number\"\r\n    matInput\r\n    numbersOnly\r\n    \r\n    class=\"alignment\"\r\n    formControlName=\"otpValue\"\r\n  />\r\n</mat-form-field>\r\n  </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\" *ngIf=\"flag\">\r\n  <ion-toolbar style=\"background: transparent !important;\">\r\n    <div  *ngIf=\"isSelf\" class=\"row text-center\">\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"next\" (click)=\"goToNextPage()\" [disabled]=\"screenOneValidation()\">Next\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"cancel\" (click)=\"goToHomepage()\">Cancel</ion-button>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!isSelf\">\r\n      <ion-button shape=\"round\" class=\"continue\"  >continue\r\n      </ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goToPreviousPage()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"bank\">Loan Repayment</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!flag\" overflow-scroll=\"true\" class=\"ion-padding\" force-overscroll=\"true\">\r\n  <form *ngIf=\"loanForm\" [formGroup]=\"loanForm\">\r\n    <div class=\"group-field\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width excg-fld\">\r\n        <mat-label>Transaction Branch</mat-label>\r\n        <input matInput placeholder=\"Transaction Branch\" formControlName=\"transactionBranch\" readonly=\"true\">\r\n        <img [src]=\"homeIconToggle ? 'assets/icon/dark-home.svg' : 'assets/icon/home-branch.svg'\" matSuffix\r\n          class=\"suffix-icon\" (click)=\"getHomeBranch()\">\r\n      </mat-form-field>\r\n      <div class=\"currency-card secondary\">\r\n        <a class=\"currency-link\" (click)=\"presentModal()\">Click here to find the nearest branch</a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row t-10 my-3\">\r\n      <div class=\"col-6\">\r\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n          <mat-label>Transaction Date</mat-label>\r\n          <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" formControlName=\"transactionDate\" readonly=\"true\">\r\n          <mat-datepicker-toggle matSuffix>\r\n            <img src=\"assets/icon/calendar.svg\" matDatepickerToggleIcon class=\"suffix-icon\" (click)=\"datePopup()\">\r\n          </mat-datepicker-toggle>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n          <mat-label>Time Slot</mat-label>\r\n          <input matInput placeholder=\"Time\" formControlName=\"transactionTime\" readonly=\"true\">\r\n          <img src=\"assets/icon/timer.svg\" matSuffix class=\"suffix-icon\" (click)=\"openPopup()\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row t-5 my-4\">\r\n      <div class=\"col-6\">\r\n        <mat-form-field appearance=\"outline\" class=\"ttc full-width\">\r\n          <mat-label>Total Charge Amount</mat-label>\r\n          <input matInput readonly=\"true\" formControlName=\"totalChargeAmount\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-6\">\r\n        <mat-form-field appearance=\"outline\" class=\"tta full-width\">\r\n          <mat-label>Total Transaction Amount</mat-label>\r\n          <input matInput [readonly]=\"true\" formControlName=\"totalTransactionAmount\">\r\n          <img src=\"assets/icon/info.svg\" matSuffix class=\"suffix-icon\" id=\"bottom-start\">\r\n          <ion-popover mode=\"ios\" size=\"auto\" arrow=\"true\" trigger=\"bottom-start\" side=\"bottom\" alignment=\"center\"\r\n            class=\"trans-pop\" reference=\"bottom-start\">\r\n            <ng-template>\r\n              <ion-content class=\"ion-padding transpopover\">\r\n                <p>Transaction Amount: {{ loanForm.get('transactionCurrency')?.value == 'INR' ? '₹' : '$' }}\r\n                  {{ loanForm.get('transactionAmount')?.value ? loanForm.get('transactionAmount')?.value : 0 }} </p>\r\n                <p>Total Charge Amount:{{ loanForm.get('transactionCurrency')?.value == 'INR' ? '₹' : '$' }}\r\n                  {{ loanForm.get('totalChargeAmount')?.value ? loanForm.get('totalChargeAmount')?.value : 0 }}</p>\r\n                <hr style=\"background: #ffffff;\">\r\n                <p>Total Transaction Amount: {{ loanForm.get('transactionCurrency')?.value == 'INR' ? '₹' : '$' }}\r\n                  {{ loanForm.get('totalTransactionAmount')?.value ? loanForm.get('totalTransactionAmount')?.value : 0\r\n                  }}</p>\r\n              </ion-content>\r\n            </ng-template>\r\n          </ion-popover>\r\n\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"remark-field t-15\">\r\n      <ion-item>\r\n        <ion-textarea [autoGrow]=\"true\" formControlName=\"remarks\" placeholder=\"Remarks\" specialText>\r\n        </ion-textarea>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <h5 class=\"lbl-header\">Walkin Type</h5>\r\n    <ion-segment mode=\"ios\" style=\"margin-top: 10px;\" [value]=\"depositType == 'self' ? 'self' : 'representative'\"\r\n      [(ngModel)]=\"depositType\" (ngModelChange)=\"segmentChanged($event)\" [ngModelOptions]=\"{standalone: true}\">\r\n      <ion-segment-button value=\"self\">\r\n        <ion-label>Self</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"representative\">\r\n        <ion-label>Representative</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <ng-container *ngIf=\"depositType == 'representative'\">\r\n      <div formGroupName=\"representativeInfo\" class=\"my-3\">\r\n        <mat-form-field appearance=\"outline\" class=\"full-width my-2\">\r\n          <mat-label>Representative Name</mat-label>\r\n          <input matInput placeholder=\"Person name\" formControlName=\"personName\" specialText>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"full-width my-2\">\r\n          <mat-label>Mobile No</mat-label>\r\n          <input matInput formControlName=\"phoneNo\" type=\"tel\" maxlength=\"10\" (keypress)=\"keyPressMob($event)\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"full-width my-2\">\r\n          <mat-label>Document ID</mat-label>\r\n          <mat-select matNativeControl formControlName=\"repdocumentId\">\r\n            <mat-option value=\"passport\">Passport</mat-option>\r\n            <mat-option value=\"visa\">Visa</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n          <mat-label>Document Number</mat-label>\r\n          <input matInput formControlName=\"repdocumentNumber\" numbersOnly>\r\n        </mat-form-field>\r\n\r\n        <mat-error style=\"margin-top: 7px;margin-left: 5px;\" *ngIf=\"isShowRepError\">\r\n          Please fill all information for representative!\r\n        </mat-error>\r\n\r\n      </div>\r\n    </ng-container>\r\n\r\n    <div class=\"file-upload-container my-2\" *ngIf=\"depositType !== 'self'\">\r\n      <div class=\"file-content text-center\">\r\n        <ion-icon src=\"assets/icon/fileicon.svg\" class=\"file-img\"></ion-icon>\r\n        <p class=\"file-text my-1\">File Upload</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </form>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\" *ngIf=\"!flag\">\r\n  <ion-toolbar style=\"background: transparent !important;\">\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"next\" [disabled]=\"loanForm.invalid\" (click)=\"submit(loanForm.value)\">Submit\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"back\" (click)=\"goToPreviousPage()\">Back</ion-button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_v2_loan-repayment-v2_loan-repayment-v2_module_ts.js.map