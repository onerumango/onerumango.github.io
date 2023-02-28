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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_repayment_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-repayment-v2-routing.module */ 19592);
/* harmony import */ var _loan_repayment_v2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-repayment-v2.page */ 21055);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-flag-picker */ 96801);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);










let LoanRepaymentV2PageModule = class LoanRepaymentV2PageModule {
};
LoanRepaymentV2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_9__.NgxFlagPickerModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_3__.SharedMaterialModule,
            _loan_repayment_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoanRepaymentV2PageRoutingModule,
        ],
        declarations: [_loan_repayment_v2_page__WEBPACK_IMPORTED_MODULE_1__.LoanRepaymentV2Page],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe,
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _loan_repayment_v2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-repayment-v2.page.html?ngResource */ 74710);
/* harmony import */ var _loan_repayment_v2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-repayment-v2.page.scss?ngResource */ 75801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/branch/branch.component */ 6156);
/* harmony import */ var src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/time-slots/time-slots.component */ 19023);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_components_denomination_slide_denomination_slide_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/denomination-slide/denomination-slide.component */ 9340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var _token_v2_token_v2_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../token-v2/token-v2.page */ 68106);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
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
        this.depositType = "";
        this.repFG = this.formBuilder.group({
            personName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            phoneNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(10)]],
            repdocumentId: [''],
            repdocumentNumber: [''],
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        this.currentUser = this.shareDataService.getCurrentUser();
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.customerId = sessionStorage.getItem('customer_id');
        this.currencies = JSON.parse(localStorage.getItem('COUNTRIES'));
        this.formInit();
        this.getLoanAccounts();
        this.loadData();
        if (this.router.getCurrentNavigation() != null) {
            this.routerData = this.router.getCurrentNavigation().extras.state;
            console.log("Values?", this.routerData);
            this.editMode = ((_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) ? true : false;
        }
        if (this.editMode) {
            const data = (_b = this.routerData) === null || _b === void 0 ? void 0 : _b.data;
            const countryCode = this.currencies.filter((i) => i.currencyCode === (data === null || data === void 0 ? void 0 : data.transactionCurrency));
            this.selectedCurrency = countryCode[0];
            this.selectedCountryCode = (_c = this.selectedCurrency) === null || _c === void 0 ? void 0 : _c.countryCode.toLowerCase();
            let deposit_type = (data === null || data === void 0 ? void 0 : data.representativeInfo.length) != 0 ? 'representative' : 'self';
            this.depositType = deposit_type;
            (_d = this.loanForm.get('depositType')) === null || _d === void 0 ? void 0 : _d.patchValue(deposit_type);
            if (deposit_type == 'representative') {
                this.loanForm.addControl('representativeInfo', this.repFG);
                this.loanForm.get('representativeInfo').get('personName').patchValue((_f = (_e = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.personName);
                this.loanForm.get('representativeInfo').get('phoneNo').patchValue((_h = (_g = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.phoneNo);
                this.loanForm.get('representativeInfo').get('repdocumentId').patchValue((_k = (_j = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k.documentId);
                this.loanForm.get('representativeInfo').get('repdocumentNumber').patchValue((_m = (_l = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _l === void 0 ? void 0 : _l[0]) === null || _m === void 0 ? void 0 : _m.documentNumber);
            }
            else {
                this.loanForm.removeControl('representativeInfo');
            }
        }
        else {
            const countryCode = this.currencies.filter((i) => i.currencyCode === "INR");
            this.selectedCurrency = countryCode[0];
            this.depositType = 'self';
            (_o = this.loanForm.get('depositType')) === null || _o === void 0 ? void 0 : _o.patchValue('self');
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
        this.loanForm.get('transactionAmount').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(1500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(res => res > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)())
            .subscribe(res => {
            console.log("transaamount", this.transAmount);
            this.updateTransAmount();
            this.denomValidationListener();
        });
        this.filteredOptions = this.currencyControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((value) => {
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
            productCode: ['LNR', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            tokenOrigin: ['Mobile', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            loanAccountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            accountType: [''],
            accountCurrency: [''],
            accountBranch: [''],
            accountBalance: [''],
            transactionCurrency: [''],
            transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            isMobileTrans: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            transactionTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            totalChargeAmount: [this.chargeAmount, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            totalTransactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            transactionDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            paymentMethod: [''],
            chequeNumber: [''],
            accountPaymentNumber: [''],
            exchangeRate: [''],
            accountAmount: [''],
            narrative: [''],
            denomination: [null],
            totalAmount: "",
            remarks: [''],
            holderName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
        });
    }
    screenOneValidation() {
        var _a, _b, _c, _d, _e;
        let disable;
        if (((_a = this.loanForm.get('loanAccountNumber')) === null || _a === void 0 ? void 0 : _a.valid) &&
            ((_b = this.loanForm.get('accountPaymentNumber')) === null || _b === void 0 ? void 0 : _b.valid) &&
            ((_c = this.loanForm.get('transactionCurrency')) === null || _c === void 0 ? void 0 : _c.valid) &&
            ((_d = this.loanForm.get('chequeNumber')) === null || _d === void 0 ? void 0 : _d.valid) &&
            ((_e = this.loanForm.get('transactionAmount')) === null || _e === void 0 ? void 0 : _e.valid)) {
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
    getLoanAccounts() {
        this.api.getLoanAccounts(this.phoneNumber).subscribe((res) => {
            if ((res === null || res === void 0 ? void 0 : res.status) == 200) {
                this.loanAccounts = res === null || res === void 0 ? void 0 : res.data;
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
    upsertAccount(filteredResponseSavingAccount) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        this.custAccounts = filteredResponseSavingAccount.custAccount;
        this.customerId = filteredResponseSavingAccount.customerId;
        if (this.editMode) {
            const data = (_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data;
            (_b = this.loanForm.get('accountNumber')) === null || _b === void 0 ? void 0 : _b.patchValue(data === null || data === void 0 ? void 0 : data.accountNumber);
            (_c = this.loanForm.get('accountCurrency')) === null || _c === void 0 ? void 0 : _c.patchValue(data === null || data === void 0 ? void 0 : data.accountCurrency);
            (_d = this.loanForm.get('transactionCurrency')) === null || _d === void 0 ? void 0 : _d.patchValue(data === null || data === void 0 ? void 0 : data.transactionCurrency);
            (_e = this.loanForm.get('exchangeRate')) === null || _e === void 0 ? void 0 : _e.patchValue(data === null || data === void 0 ? void 0 : data.exchangeRate);
            (_f = this.loanForm.get('transactionAmount')) === null || _f === void 0 ? void 0 : _f.patchValue(data === null || data === void 0 ? void 0 : data.transactionAmount);
            let formatedAmount = this.shareDataService.formatCurrency(data === null || data === void 0 ? void 0 : data.totalTransactionAmount, data === null || data === void 0 ? void 0 : data.transactionCurrency);
            this.loanForm.get('totalTransactionAmount').patchValue(formatedAmount);
            (_g = this.loanForm.get('transactionBranch')) === null || _g === void 0 ? void 0 : _g.patchValue(data === null || data === void 0 ? void 0 : data.transactionBranch);
            (_h = this.loanForm.get('transactionDate')) === null || _h === void 0 ? void 0 : _h.patchValue(data === null || data === void 0 ? void 0 : data.transactionDate);
            (_j = this.loanForm.get('transactionTime')) === null || _j === void 0 ? void 0 : _j.patchValue(data === null || data === void 0 ? void 0 : data.transactionTime);
            (_k = this.loanForm.get('remarks')) === null || _k === void 0 ? void 0 : _k.patchValue(data === null || data === void 0 ? void 0 : data.remarks);
        }
        else {
            if (this.accountInfo.accountId != null) {
                this.loanForm.get('accountPaymentNumber').patchValue(this.accountInfo.accountId);
            }
            else {
                this.loanForm.get('accountPaymentNumber').patchValue(this.custAccounts[0].loanAccountId);
            }
            this.selectedCountryCode = this.selectedCurrency.countryCode.toLowerCase();
            (_l = this.loanForm.get('transactionCurrency')) === null || _l === void 0 ? void 0 : _l.patchValue(this.selectedCurrency.currencyCode);
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
            var _a, _b, _c;
            const code = this.currencies.filter((x) => x.currencyCode == currency);
            let filteredCurrency = code[0].currencyCode;
            const rate = (_a = res === null || res === void 0 ? void 0 : res.rates) === null || _a === void 0 ? void 0 : _a[filteredCurrency];
            this.loanForm.get('exchangeRate').patchValue(rate);
            if (!isNaN(Number(this.transAmount))) {
                let updatedAmount = (Number(this.transAmount) * Number((_b = this.loanForm.get('exchangeRate')) === null || _b === void 0 ? void 0 : _b.value)) + this.chargeAmount;
                if (!isNaN(Number(updatedAmount))) {
                    let formatedAmount = this.shareDataService.formatCurrency(updatedAmount, (_c = this.loanForm.get('transactionCurrency')) === null || _c === void 0 ? void 0 : _c.value);
                    this.loanForm.get('totalTransactionAmount').patchValue(formatedAmount);
                    this.cdr.markForCheck();
                }
            }
        });
        this.updateTransAmount();
    }
    updateTransAmount() {
        var _a, _b;
        if (!isNaN(Number(this.transAmount))) {
            let updatedAmount = (Number(this.transAmount) * Number((_a = this.loanForm.get('exchangeRate')) === null || _a === void 0 ? void 0 : _a.value)) + this.chargeAmount;
            if (!isNaN(Number(updatedAmount))) {
                let formatedAmount = this.shareDataService.formatCurrency(updatedAmount, (_b = this.loanForm.get('transactionCurrency')) === null || _b === void 0 ? void 0 : _b.value);
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
        this.loanViewRef.clear();
        let childComponentRef = this.loanViewRef.createComponent(src_app_components_denomination_slide_denomination_slide_component__WEBPACK_IMPORTED_MODULE_7__.DenominationSlideComponent);
        let childComponent = childComponentRef.instance;
        childComponent.unique_key = "loanViewRef";
        childComponent.loanViewRef = this;
    }
    removeDynamicComponent() {
        this.loanViewRef.clear();
    }
    remove(view) {
        console.log("view disiss?", view);
        let data = JSON.parse(localStorage.getItem(view)) || null;
        console.log("Data??", data);
        if (view == 'loanViewRef') {
            this.loanViewRef.clear();
            if (data != null && data.total != 0) {
                this.denomAmountValidation(data.total);
                console.log(this.loanForm.value);
            }
        }
    }
    denomAmountValidation(amount) {
        var _a;
        if (Number((_a = this.loanForm.get('transactionAmount')) === null || _a === void 0 ? void 0 : _a.value) != Number(amount)) {
            this.isShowDenomError = true;
            this.toastService.showToast("Denomination total should match with the transaction amount");
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
                    console.log("oldDate", oldDate);
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
                if (res.data != null || res.data != undefined || res.data != "undefined") {
                    console.log(res);
                    this.loanForm.get('transactionTime').patchValue(res.data);
                }
            });
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
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
            this.loanForm.get('chequeNumber').clearValidators(); // 6. Clear All Validators
            this.loanForm.get('chequeNumber').updateValueAndValidity();
        }
        else if (this.paymentModeSelected == 'Cheque') {
            this.loanForm.get('chequeNumber').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]); // Set Required Validator
            this.loanForm.get('chequeNumber').updateValueAndValidity();
            this.loanForm.get('accountPaymentNumber').clearValidators(); // 6. Clear All Validators
            this.loanForm.get('accountPaymentNumber').updateValueAndValidity();
        }
        else {
            this.loanForm.get('accountPaymentNumber').clearValidators(); // 6. Clear All Validators
            this.loanForm.get('accountPaymentNumber').updateValueAndValidity();
            this.loanForm.get('chequeNumber').clearValidators(); // 6. Clear All Validators
            this.loanForm.get('chequeNumber').updateValueAndValidity();
        }
        console.log(this.paymentModeSelected);
    }
    onScreenRefresh() {
        var _a, _b, _c;
        this.editMode = ((_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) ? true : false;
        this.currentUser = this.shareDataService.getCurrentUser();
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.customerId = sessionStorage.getItem('customer_id');
        this.currencies = JSON.parse(localStorage.getItem('COUNTRIES'));
        if (this.editMode) {
            const data = (_b = this.routerData) === null || _b === void 0 ? void 0 : _b.data;
            const countryCode = this.currencies.filter((i) => i.currencyCode === (data === null || data === void 0 ? void 0 : data.transactionCurrency));
            this.selectedCurrency = countryCode[0];
            this.selectedCountryCode = (_c = this.selectedCurrency) === null || _c === void 0 ? void 0 : _c.countryCode.toLowerCase();
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
        this.loanForm.get('transactionAmount').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(1500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(res => res > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)())
            .subscribe(res => {
            this.updateTransAmount();
            this.denomValidationListener();
        });
    }
    segmentChanged(e) {
        if (e == 'representative') {
            this.loanForm.addControl('representativeInfo', this.repFG);
        }
        else {
            this.loanForm.removeControl('representativeInfo');
        }
    }
    keyPressMob(event) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    submit(form) {
        var _a, _b;
        var date = new Date(form.transactionDate);
        let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
        form.transactionDate = latest_date;
        form.customerId = this.customerId;
        form.productCode = this.productCode;
        form.accountType = ((_a = this.filteredLoanAccount) === null || _a === void 0 ? void 0 : _a.loanType) || 'Loan';
        form.tokenOrigin = this.tokenOrigin;
        form.accountCurrency = ((_b = this.filteredLoanAccount) === null || _b === void 0 ? void 0 : _b.accountCurrency) || "";
        form.representativeInfo = [];
        if (this.editMode) {
            form.appointmentId = this.routerData.data.appointmentId;
            form.operation = 'update';
        }
        form.isMobileTrans = true;
        // Total transaction convertion format
        let ttam = this.loanForm.value['totalTransactionAmount'].substring(1);
        form.totalTransactionAmount = ttam.replace(/,/g, '');
        if (this.editMode) {
            this.api.appointmentBooking(form).subscribe((resp) => {
                localStorage.setItem("TransactionTime", resp.transactionTime);
                this.loanRepaymentResponse = resp;
                this.transactionId = this.loanRepaymentResponse.transactionId;
                localStorage.setItem('AppointmentDetails', JSON.stringify(resp));
                console.log('transactionId::', this.transactionId);
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
                console.log('transactionId::', this.transactionId);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: _token_v2_token_v2_page__WEBPACK_IMPORTED_MODULE_9__.TokenV2Page,
                componentProps: {
                    value: event,
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
    goToHomepage() {
        this.router.navigate(['/dashboard']);
    }
};
LoanRepaymentV2Page.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_8__.LoadingService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ModalController },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_21__.DatePipe }
];
LoanRepaymentV2Page.propDecorators = {
    loanViewRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['dynamic', { read: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewContainerRef },] }],
    denomButtonRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ["denom", { read: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ElementRef },] }],
    autocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__.MatAutocompleteTrigger,] }]
};
LoanRepaymentV2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
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

module.exports = ".example-right-align {\n  text-align: right;\n}\n\n.mat-form-field-appearance-outline .mat-form-field-suffix.denomination-action {\n  top: -3px !important;\n}\n\n.currency-card {\n  width: auto;\n  height: 42px;\n  color: #FFFFFF !important;\n  text-align: center;\n  border-radius: 5px;\n  margin-top: 0px;\n}\n\n:host ::ng-deep .mat-select-panel .mat-option.loan-text {\n  line-height: 1.5em !important;\n  height: 60px !important;\n}\n\n.white-box {\n  width: 30px;\n  height: 30px;\n  background: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  margin-left: 46%;\n  z-index: 1;\n  position: relative;\n  margin-top: -10px;\n}\n\n.currency-link {\n  left: 0;\n  top: 16px;\n  right: 0;\n  bottom: 6px;\n  position: relative;\n  text-decoration: underline !important;\n}\n\n.row {\n  margin-right: -6px !important;\n  margin-left: -6px !important;\n}\n\n.col-6 {\n  padding-right: 6px !important;\n  padding-left: 6px !important;\n}\n\nion-content.transpopover {\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #ffffff;\n}\n\nion-item.exchange::part(native) {\n  height: 65px;\n  background: #F2F2F2;\n}\n\nion-item.txn::part(native) {\n  height: 65px;\n}\n\n.suffix-icon {\n  margin-top: -14px;\n}\n\nion-popover.trans-pop::part(content) {\n  --width: 275px !important;\n  border-radius: 10px !important;\n  --offset-x: -10px !important;\n}\n\nion-popover.trans-pop,\n.popover-arrow::after {\n  --background: #004C97 !important;\n}\n\n.remark-field {\n  margin-top: 25px;\n  border: 1px solid #dee2e6;\n  border-radius: 16px;\n  height: 100px;\n  filter: drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.0901960784));\n}\n\n.full-width {\n  width: 100% !important;\n}\n\n.suffix-ion-icon {\n  position: absolute;\n  bottom: 0;\n  right: 10px;\n  top: 10px;\n}\n\n.suffix-ion-icon-total {\n  position: relative;\n  bottom: 0;\n  right: 32px;\n  top: 10px;\n}\n\n:host ::ng-deep .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0 !important;\n}\n\n:host ::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n:host ::ng-deep mat-form-field.mat-form-field.tta {\n  background: #F2F2F2 !important;\n}\n\n:host ::ng-deep mat-form-field.mat-form-field.excg {\n  background: #F2F2F2 !important;\n}\n\n:host ::ng-deep mat-form-field.mat-form-field.ttc {\n  background: #F2F2F2 !important;\n}\n\n:host ::ng-deep .mat-form-field {\n  display: inherit !important;\n}\n\n.mt-2 {\n  margin-top: 2px;\n}\n\n:host ::ng-deep .mat-input-element.auto-currency {\n  margin-left: 10px !important;\n}\n\nion-segment {\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px !important;\n  height: 50px !important;\n}\n\nion-segment-button {\n  --background-checked: linear-gradient(90deg, #051A2D, #004C97) !important;\n}\n\n.file-text {\n  color: #004C97;\n}\n\n.account-group {\n  background: #F2F2F2;\n  padding: 10px;\n  border-radius: 16px;\n}\n\n.lbl-title {\n  color: #102245;\n  font-size: 11px;\n  opacity: 50%;\n}\n\n.lbl-header {\n  color: #004C97;\n  font-size: 16px;\n}\n\n.lbl-content {\n  color: #262831;\n  font-size: 12px;\n  opacity: 100%;\n}\n\n.currency-label {\n  width: 43px;\n  height: 26px;\n  background: rgba(0, 76, 151, 0.1411764706);\n  border: 1pt solid #004C97;\n  margin: 0px;\n  display: inline-grid;\n  padding: 5px;\n  color: #004C97;\n  border-radius: 6px;\n  font-size: 10px;\n  text-align: center;\n  font-family: \"Poppins,Medium\";\n}\n\nion-item.item-textarea {\n  --min-height: 100px;\n}\n\nion-button.next {\n  width: 150px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #FFFFFF;\n}\n\nion-button.cancel {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #B20000;\n}\n\nion-button.back {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n\n.file-upload-container {\n  width: auto;\n  height: 100px;\n  border: 1px solid #ffffff;\n  background: #F8F8F8;\n  filter: drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.0901960784));\n  border-radius: 16px;\n}\n\n.file-upload-container .file-content {\n  margin-top: 6%;\n}\n\n.file-upload-container .file-img {\n  width: 25px;\n  height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tcmVwYXltZW50LXYyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FBQUo7O0FBR0E7RUFDSSw2QkFBQTtFQUNBLDRCQUFBO0FBQUo7O0FBSUE7RUFDSSw2QkFBQTtFQUNBLDRCQUFBO0FBREo7O0FBSUE7RUFDSSxzREFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7QUFESjs7QUFLQTs7RUFFSSxnQ0FBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZEQUFBO0FBRko7O0FBTUE7RUFDSSxzQkFBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFISjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBSEo7O0FBTUE7RUFDSSxvQkFBQTtBQUhKOztBQU1BO0VBQ0ksNEJBQUE7QUFISjs7QUFNQTtFQUNJLDhCQUFBO0FBSEo7O0FBTUE7RUFDSSw4QkFBQTtBQUhKOztBQU1BO0VBQ0ksOEJBQUE7QUFISjs7QUFNQTtFQUNJLDJCQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0FBSEo7O0FBTUE7RUFDSSw0QkFBQTtBQUhKOztBQU1BO0VBQ0ksZ0dBQUE7RUFDQSx1QkFBQTtBQUhKOztBQU1BO0VBQ0kseUVBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7QUFISjs7QUFPQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFKSjs7QUFPQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUpKOztBQVdBO0VBQ0ksbUJBQUE7QUFSSjs7QUFXQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0RBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBUko7O0FBV0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFSSjs7QUFXQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZEQUFBO0VBQ0EsbUJBQUE7QUFSSjs7QUFVSTtFQUNJLGNBQUE7QUFSUjs7QUFXSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBVFIiLCJmaWxlIjoibG9hbi1yZXBheW1lbnQtdjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeC5kZW5vbWluYXRpb24tYWN0aW9uIHtcclxuICAgIHRvcDogLTNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VycmVuY3ktY2FyZCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LXNlbGVjdC1wYW5lbCAubWF0LW9wdGlvbi5sb2FuLXRleHQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi53aGl0ZS1ib3gge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ2JTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuLmN1cnJlbmN5LWxpbmsge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMTZweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiA2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbi1yaWdodDogLTZweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jb2wtNiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50LnRyYW5zcG9wb3ZlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MUEyRCwgIzAwNEM5Nyk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5pb24taXRlbS5leGNoYW5nZTo6cGFydChuYXRpdmUpIHtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnR4bjo6cGFydChuYXRpdmUpIHtcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG5cclxuLnN1ZmZpeC1pY29uIHtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG59XHJcblxyXG5pb24tcG9wb3Zlci50cmFucy1wb3A6OnBhcnQoY29udGVudCkge1xyXG4gICAgLS13aWR0aDogMjc1cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgIC0tb2Zmc2V0LXg6IC0xMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAtLW9mZnNldC15OiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXBvcG92ZXIudHJhbnMtcG9wLFxyXG4ucG9wb3Zlci1hcnJvdzo6YWZ0ZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA0Qzk3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZW1hcmstZmllbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDNweCAxNXB4ICMwMDAwMDAxNyk7XHJcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWZmaXgtaW9uLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zdWZmaXgtaW9uLWljb24tdG90YWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDMycHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLnR0YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC5leGNnIHtcclxuICAgIGJhY2tncm91bmQ6ICNGMkYyRjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLnR0YyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXQtMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQuYXV0by1jdXJyZW5jeSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tc2VnbWVudCB7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFBMkQsICMwMDRDOTcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWxlLXRleHQge1xyXG4gICAgY29sb3I6ICMwMDRDOTc7XHJcbn1cclxuXHJcblxyXG4uYWNjb3VudC1ncm91cCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi5sYmwtdGl0bGUge1xyXG4gICAgY29sb3I6ICMxMDIyNDU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBvcGFjaXR5OiA1MCU7XHJcbn1cclxuXHJcbi5sYmwtaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjMDA0Qzk3O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ubGJsLWNvbnRlbnQge1xyXG4gICAgY29sb3I6ICMyNjI4MzE7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG59XHJcblxyXG4uY3VycmVuY3ktbGFiZWwge1xyXG4gICAgd2lkdGg6IDQzcHg7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDc2LCAxNTEsIDAuMTQxMTc2NDcwNik7XHJcbiAgICBib3JkZXI6IDFwdCBzb2xpZCAjMDA0Qzk3O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiAjMDA0Qzk3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLE1lZGl1bSc7XHJcbn1cclxuXHJcbi8vIGlvbi1pdGVtLmV4Y2hhbmdlLml0ZW0tZmlsbC1vdXRsaW5lIHtcclxuLy8gICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG5pb24taXRlbS5pdGVtLXRleHRhcmVhIHtcclxuICAgIC0tbWluLWhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ubmV4dCB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MUEyRCwgIzAwNEM5Nyk7XHJcbiAgICAtLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG5pb24tYnV0dG9uLmNhbmNlbCB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjQjIwMDAwO1xyXG59XHJcblxyXG5pb24tYnV0dG9uLmJhY2sge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmlsZS11cGxvYWQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggM3B4IDE1cHggIzAwMDAwMDE3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcblxyXG4gICAgLmZpbGUtY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbGUtaW1nIHtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcblxyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 74710:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/v2/loan-repayment-v2/loan-repayment-v2.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" style=\"color:#004C97\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"bank\">Loan Repayment</ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"loanForm.get('paymentMethod').value === 'Cheque'\">\r\n      <ion-button fill=\"clear\" (click)=\"goToFileUpload()\">\r\n        <ion-icon slot=\"icon-only\" src=\"assets/icon/upload-icon.svg\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button fill=\"clear\" (click)=\"goToScan()\">\r\n        <ion-icon slot=\"icon-only\" src=\"assets/icon/scan.svg\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content *ngIf=\"flag\" class=\"ion-padding\" [scrollEvents]=\"true\" (ionScroll)=\"onScroll()\">\r\n  <form *ngIf=\"loanForm\" [formGroup]=\"loanForm\">\r\n    <!-- TODO: Reusable component start -->\r\n    <div class=\"account-group\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width my-2\" style=\"background: #ffffff;\">\r\n        <mat-label>Loan Account</mat-label>\r\n        <mat-select formControlName=\"loanAccountNumber\" [(ngModel)]=\"selectedLoanAccount\"\r\n          (ngModelChange)=\"onLoanAccountSelect($event)\" panelClass=\"nrpSelect\">\r\n          <mat-select-trigger>\r\n            <p class=\"my-1 d-flex align-items-center\">\r\n              <span class=\"currency-label\">{{ filteredLoanAccount?.accountCurrency }} </span>\r\n              &nbsp; <span>{{ loanForm.get('loanAccountNumber')?.value }} </span>\r\n            </p>\r\n          </mat-select-trigger>\r\n          <mat-option *ngFor=\"let loan of loanAccounts\" [value]=\"loan.loanAccountId\" class=\"loan-text\">\r\n            {{loan?.loanAccountId}} <br>\r\n            <span class=\"sub-text\">{{loan?.accountType}}</span>\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <div style=\"margin-left: 12px;margin-right: 12px;\" class=\"my-2\">\r\n        <ng-container *ngIf=\"!showMore;else showMoreTemplate\">\r\n          <div class=\"row justify-content-between text-left\">\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Current arrears</span>\r\n              <p class=\"lbl-content\">{{filteredLoanAccount?.currentArrears || 0}}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Principal Outstanding</span>\r\n              <p class=\"lbl-content\">{{filteredLoanAccount?.principalOutstanding || 0}}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row justify-content-between text-left\">\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Interest Due</span>\r\n              <p class=\"lbl-content\">{{filteredLoanAccount?.principalOutstanding || 0}}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Account Branch</span>\r\n              <p class=\"lbl-content\">{{filteredLoanAccount?.accountBranch || 0}}</p>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <ng-template #showMoreTemplate>\r\n          <div class=\"row justify-content-between text-left\">\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Current arrears</span>\r\n              <p class=\"lbl-content\">{{filteredLoanAccount?.currentArrears || 0}}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Principal Outstanding</span>\r\n              <p class=\"lbl-content\">{{filteredLoanAccount?.principalOutstanding || 0}}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row justify-content-between text-left\">\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Interest Due</span>\r\n              <p class=\"lbl-content\">{{filteredLoanAccount?.principalOutstanding || 0}}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Account Branch</span>\r\n              <p class=\"lbl-content\">{{filteredLoanAccount?.accountBranch || 0}}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row justify-content-between text-left\">\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Loan Breakup Dues</span>\r\n              <p class=\"lbl-content\">{{filteredLoanAccount?.loanBreakupDues || 0}}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Principal</span>\r\n              <p class=\"lbl-content\">{{filteredLoanAccount?.principal || 0}}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Interest</span>\r\n              <p class=\"lbl-content\">{{filteredLoanAccount?.interest || 0}}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Principal Penalty</span>\r\n              <p class=\"lbl-content\">{{filteredLoanAccount?.principalPenalty || 0}}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Interest Penalty</span>\r\n              <p class=\"lbl-content\">{{filteredLoanAccount?.interestPenalty || 0}}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Fee</span>\r\n              <p class=\"lbl-content\">{{filteredLoanAccount?.fee || 0}}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Type</span>\r\n              <p class=\"lbl-content\">{{filteredLoanAccount?.accountType || 0}}</p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n    <div class=\"white-box\" (click)=\"expandMore()\">\r\n      <img [src]=\"icon_arrow_svg\" class=\"arrow-icon\">\r\n    </div>\r\n\r\n    <div class=\"denom-group my-2\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n        <mat-label>Payment Mode</mat-label>\r\n        <mat-select [(ngModel)]=\"paymentModeSelected\" formControlName=\"paymentMethod\"\r\n          (selectionChange)=\"paymentModeChange($event)\" panelClass=\"nrpSelect\">\r\n          <mat-option *ngFor=\"let mode of paymentMode\" [value]=\"mode\">{{mode}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"account-group my-2\" *ngIf=\"loanForm.get('paymentMethod').value === 'Account'\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width my-2\" style=\"background: #ffffff;\">\r\n        <mat-label>Account Number</mat-label>\r\n        <mat-select formControlName=\"accountPaymentNumber\" [(ngModel)]=\"selectedPaymentAccount\"\r\n          (ngModelChange)=\"onPaymentAccountSelect($event)\" panelClass=\"nrpSelect\">\r\n          <mat-select-trigger>\r\n            <p class=\"my-1 d-flex align-items-center\">\r\n              <span class=\"currency-label\">{{ filteredPaymentAccount?.accountCurrency }} </span>\r\n              &nbsp; <span>{{ loanForm.get('accountPaymentNumber')?.value }} </span>\r\n            </p>\r\n          </mat-select-trigger>\r\n          <mat-option *ngFor=\"let user of custAccounts\" [value]=\"user.accountId\" class=\"loan-text\" cdkScrollable>\r\n            {{user.accountId}}<br>\r\n            <span class=\"sub-text\">{{user?.accountType}}</span>\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <div style=\"margin-left: 12px;margin-right: 12px;\" class=\"my-2\">\r\n        <div class=\"row justify-content-between text-left\">\r\n          <div class=\"col-6\">\r\n            <span class=\" lbl-title\">Account Balance</span>\r\n            <p class=\"lbl-content\">{{ filteredPaymentAccount?.amount | currency: filteredLoanAccount?.accountCurrency }}\r\n            </p>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <span class=\" lbl-title\">Account Branch</span>\r\n            <p class=\"lbl-content\">{{ filteredPaymentAccount?.accountBranch }}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-6\">\r\n            <span class=\" lbl-title\">Customer Name</span>\r\n            <p class=\"lbl-content\">{{ currentUser?.firstName }}</p>\r\n          </div>\r\n          <!-- <div class=\"col-6\">\r\n            <span class=\" lbl-title\">Type</span>\r\n            <p class=\"lbl-content\">{{ filteredPaymentAccount?.accountType }}</p>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"denom-group\" *ngIf=\"loanForm.get('paymentMethod').value === 'Cheque'\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width my-1\">\r\n        <mat-label>Cheque Number</mat-label>\r\n        <input matInput placeholder=\"Cheque Number\" #myRef type=\"text\" min=\"1\" (keypress)=\"keyPressNumbers($event)\"\r\n          formControlName=\"chequeNumber\">\r\n      </mat-form-field>\r\n    </div>\r\n    <!-- End of payment mode section -->\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-6 my-3\">\r\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n          <mat-label>Transaction Currency</mat-label>\r\n            <ngx-flag-picker *ngIf=\"loanForm.get('transactionCurrency')?.value?.length === 3\" matPrefix [selectedCountryCode]=\"selectedCountryCode\" [showFlags]=\"isShow\"\r\n            [showLabels]=\"!isShow\" [showArrow]=\"!isShow\" slot=\"start\"></ngx-flag-picker>\r\n          <input #autoCompleteInput matInput [matAutocomplete]=\"auto\" [(ngModel)]=\"transactionCurrency\"\r\n            formControlName=\"transactionCurrency\" (ngModelChange)=\"selectCurrencyCode($event)\"\r\n            [formControl]=\"currencyControl\" class=\"auto-currency\" oninput=\"this.value = this.value.toUpperCase()\">\r\n          <mat-autocomplete #auto=\"matAutocomplete\" autoActiveFirstOption>\r\n            <mat-option *ngFor=\"let currency of filteredOptions | async\" [value]=\"currency.currencyCode\">\r\n              <img alt=\"\" class=\"example-option-img\"\r\n                src=\"assets/svg-country-flags/svg/{{currency?.countryCode.toLowerCase()}}.svg\" height=\"25\" width=\"25\">\r\n              <span> {{currency?.countryCode}} &nbsp;{{ currency?.countryName }}</span>\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n          <mat-icon matSuffix>arrow_drop_down</mat-icon>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <mat-form-field appearance=\"outline\" class=\"excg full-width my-3\">\r\n          <mat-label>Exchange Rate</mat-label>\r\n          <input matInput placeholder=\"Exchange Rate\" readonly=\"true\" formControlName=\"exchangeRate\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"denom-group\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width my-1\">\r\n        <mat-label>Loan Repayment Amount</mat-label>\r\n        <input matInput placeholder=\"Amount\" #myRef [(ngModel)]=\"transAmount\" type=\"text\" min=\"1\"\r\n          (keypress)=\"keyPressNumbers($event)\" formControlName=\"transactionAmount\">\r\n        <button mat-button matSuffix [ngClass]=\"loanForm.get('transactionAmount')?.value ? 'active-bg' : 'inactive-bg'\"\r\n          class=\"action-button\" #denom (click)=\"enableDisableAction('TXAM')\" style=\"width: 140px;\">\r\n          Denomination\r\n        </button>\r\n      </mat-form-field>\r\n      <mat-error style=\"margin-left: 5px;\" *ngIf=\"isShowDenomError\">\r\n        Denomination total should match with the transaction amount\r\n      </mat-error>\r\n      <div class=\"my-1\">\r\n        <ng-template #dynamic></ng-template>\r\n      </div>\r\n    </div>\r\n\r\n    <mat-hint>\r\n      <img src=\"assets/icon/error.svg\" class=\"small-info\">\r\n      <small> “Exchange rate may be changed at the time of transaction”</small>\r\n    </mat-hint>\r\n\r\n  </form>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\" *ngIf=\"flag\">\r\n  <ion-toolbar style=\"background: transparent !important;\">\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"next\" (click)=\"goToNextPage()\" [disabled]=\"screenOneValidation()\">Next\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"back\" (click)=\"goToHomepage()\">Back</ion-button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goToPreviousPage()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"bank\">Loan Repayment</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!flag\" overflow-scroll=\"true\" class=\"ion-padding\" force-overscroll=\"true\">\r\n  <form *ngIf=\"loanForm\" [formGroup]=\"loanForm\">\r\n    <div class=\"group-field\">\r\n      <mat-form-field appearance=\"outline\" class=\"full-width excg-fld\">\r\n        <mat-label>Transaction Branch</mat-label>\r\n        <input matInput placeholder=\"Transaction Branch\" formControlName=\"transactionBranch\">\r\n        <img [src]=\"homeIconToggle ? 'assets/icon/dark-home.svg' : 'assets/icon/home-branch.svg'\" matSuffix\r\n          class=\"suffix-icon\" (click)=\"getHomeBranch()\">\r\n      </mat-form-field>\r\n      <div class=\"currency-card secondary\">\r\n        <a class=\"currency-link\" (click)=\"presentModal()\">Click here to find the nearest branch</a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row t-10 my-3\">\r\n      <div class=\"col-6\">\r\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n          <mat-label>Transaction Date</mat-label>\r\n          <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" formControlName=\"transactionDate\">\r\n          <mat-datepicker-toggle matSuffix>\r\n            <img src=\"assets/icon/calendar.svg\" matDatepickerToggleIcon class=\"suffix-icon\" (click)=\"datePopup()\">\r\n          </mat-datepicker-toggle>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n          <mat-label>Time Slot</mat-label>\r\n          <input matInput placeholder=\"Time\" formControlName=\"transactionTime\" readonly=\"true\">\r\n          <img src=\"assets/icon/timer.svg\" matSuffix class=\"suffix-icon\" (click)=\"openPopup()\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row t-5 my-4\">\r\n      <div class=\"col-6\">\r\n        <mat-form-field appearance=\"outline\" class=\"ttc full-width\">\r\n          <mat-label>Total Charge Amount</mat-label>\r\n          <input matInput readonly=\"true\" formControlName=\"totalChargeAmount\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-6\">\r\n        <mat-form-field appearance=\"outline\" class=\"tta full-width\">\r\n          <mat-label>Total Transaction Amount</mat-label>\r\n          <input matInput [readonly]=\"true\" formControlName=\"totalTransactionAmount\">\r\n          <img src=\"assets/icon/info.svg\" matSuffix class=\"suffix-icon\" id=\"bottom-start\">\r\n          <ion-popover mode=\"ios\" size=\"auto\" arrow=\"true\" trigger=\"bottom-start\" side=\"bottom\" alignment=\"center\"\r\n            class=\"trans-pop\" reference=\"bottom-start\">\r\n            <ng-template>\r\n              <ion-content class=\"ion-padding transpopover\">\r\n                <p>Transaction Amount: {{ loanForm.get('transactionCurrency')?.value == 'INR' ? '₹' : '$' }}\r\n                  {{ loanForm.get('transactionAmount')?.value ? loanForm.get('transactionAmount')?.value : 0 }} </p>\r\n                <p>Total Charge Amount:{{ loanForm.get('transactionCurrency')?.value == 'INR' ? '₹' : '$' }}\r\n                  {{ loanForm.get('totalChargeAmount')?.value ? loanForm.get('totalChargeAmount')?.value : 0 }}</p>\r\n                <hr style=\"background: #ffffff;\">\r\n                <p>Total Transaction Amount: {{ loanForm.get('transactionCurrency')?.value == 'INR' ? '₹' : '$' }}\r\n                  {{ loanForm.get('totalTransactionAmount')?.value ? loanForm.get('totalTransactionAmount')?.value : 0\r\n                  }}</p>\r\n              </ion-content>\r\n            </ng-template>\r\n          </ion-popover>\r\n\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"remark-field t-15\">\r\n      <ion-item>\r\n        <ion-textarea [autoGrow]=\"true\" formControlName=\"remarks\" placeholder=\"Remarks\">\r\n        </ion-textarea>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <h5 class=\"lbl-header\">Walkin Type</h5>\r\n    <ion-segment mode=\"ios\" style=\"margin-top: 10px;\" [value]=\"depositType == 'self' ? 'self' : 'representative'\"\r\n      [(ngModel)]=\"depositType\" (ngModelChange)=\"segmentChanged($event)\" [ngModelOptions]=\"{standalone: true}\">\r\n      <ion-segment-button value=\"self\">\r\n        <ion-label>Self</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"representative\">\r\n        <ion-label>Representative</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n\r\n    <ng-container *ngIf=\"depositType == 'representative'\">\r\n      <div formGroupName=\"representativeInfo\" class=\"my-3\">\r\n        <mat-form-field appearance=\"outline\" class=\"full-width my-2\">\r\n          <mat-label>Representative Name</mat-label>\r\n          <input matInput placeholder=\"Person name\" formControlName=\"personName\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"full-width my-2\">\r\n          <mat-label>Mobile No</mat-label>\r\n          <input matInput formControlName=\"phoneNo\" type=\"tel\" maxlength=\"10\" (keypress)=\"keyPressMob($event)\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"full-width my-2\">\r\n          <mat-label>Document ID</mat-label>\r\n          <mat-select matNativeControl formControlName=\"repdocumentId\">\r\n            <mat-option value=\"passport\">Passport</mat-option>\r\n            <mat-option value=\"visa\">Visa</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n          <mat-label>Document Number</mat-label>\r\n          <input matInput formControlName=\"repdocumentNumber\">\r\n        </mat-form-field>\r\n\r\n        <mat-error style=\"margin-top: 7px;margin-left: 5px;\" *ngIf=\"isShowRepError\">\r\n          Please fill all information for representative!\r\n        </mat-error>\r\n\r\n      </div>\r\n    </ng-container>\r\n\r\n    <div class=\"file-upload-container my-2\" *ngIf=\"depositType !== 'self'\">\r\n      <div class=\"file-content text-center\">\r\n        <ion-icon src=\"assets/icon/fileicon.svg\" class=\"file-img\"></ion-icon>\r\n        <p class=\"file-text my-1\">File Upload</p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </form>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\" *ngIf=\"!flag\">\r\n  <ion-toolbar style=\"background: transparent !important;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"next\" [disabled]=\"loanForm.invalid\" (click)=\"submit(form.value)\">Submit\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"back\" (click)=\"goToPreviousPage()\">Back</ion-button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_v2_loan-repayment-v2_loan-repayment-v2_module_ts.js.map