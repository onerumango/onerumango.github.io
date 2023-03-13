"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_v2_cash-withdraw-v2_cash-withdraw-v2_module_ts"],{

/***/ 15401:
/*!******************************************************************************!*\
  !*** ./src/app/pages/v2/cash-withdraw-v2/cash-withdraw-v2-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashWithdrawV2PageRoutingModule": () => (/* binding */ CashWithdrawV2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _cash_withdraw_v2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cash-withdraw-v2.page */ 54780);




const routes = [
    {
        path: '',
        component: _cash_withdraw_v2_page__WEBPACK_IMPORTED_MODULE_0__.CashWithdrawV2Page
    }
];
let CashWithdrawV2PageRoutingModule = class CashWithdrawV2PageRoutingModule {
};
CashWithdrawV2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CashWithdrawV2PageRoutingModule);



/***/ }),

/***/ 18646:
/*!**********************************************************************!*\
  !*** ./src/app/pages/v2/cash-withdraw-v2/cash-withdraw-v2.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashWithdrawV2PageModule": () => (/* binding */ CashWithdrawV2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cash_withdraw_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cash-withdraw-v2-routing.module */ 15401);
/* harmony import */ var _cash_withdraw_v2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cash-withdraw-v2.page */ 54780);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-flag-picker */ 96801);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);
/* harmony import */ var src_app_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/directives/directive.module */ 27589);











let CashWithdrawV2PageModule = class CashWithdrawV2PageModule {
};
CashWithdrawV2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_3__.SharedMaterialModule,
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_10__.NgxFlagPickerModule,
            src_app_directives_directive_module__WEBPACK_IMPORTED_MODULE_4__.DirectiveModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _cash_withdraw_v2_routing_module__WEBPACK_IMPORTED_MODULE_0__.CashWithdrawV2PageRoutingModule
        ],
        declarations: [_cash_withdraw_v2_page__WEBPACK_IMPORTED_MODULE_1__.CashWithdrawV2Page],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe,
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_ELEMENTS_SCHEMA
        ],
    })
], CashWithdrawV2PageModule);



/***/ }),

/***/ 54780:
/*!********************************************************************!*\
  !*** ./src/app/pages/v2/cash-withdraw-v2/cash-withdraw-v2.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashWithdrawV2Page": () => (/* binding */ CashWithdrawV2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cash_withdraw_v2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cash-withdraw-v2.page.html?ngResource */ 48726);
/* harmony import */ var _cash_withdraw_v2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cash-withdraw-v2.page.scss?ngResource */ 77219);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material-moment-adapter */ 8441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_app_components_denomination_slide_denomination_slide_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/denomination-slide/denomination-slide.component */ 9340);
/* harmony import */ var src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/time-slots/time-slots.component */ 19023);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _forex_cash_v2_forex_cash_v2_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../forex-cash-v2/forex-cash-v2.page */ 23342);
/* harmony import */ var src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/branch/branch.component */ 6156);
/* harmony import */ var _token_v2_token_v2_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../token-v2/token-v2.page */ 68106);
/* harmony import */ var src_app_components_transaction_date_transaction_date_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/transaction-date/transaction-date.component */ 19693);






















let CashWithdrawV2Page = class CashWithdrawV2Page {
    constructor(router, formBuilder, api, toastCtrl, toastService, modalController, loading, datepipe, shareDataService, loadingController, cdr) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.toastService = toastService;
        this.modalController = modalController;
        this.loading = loading;
        this.datepipe = datepipe;
        this.shareDataService = shareDataService;
        this.loadingController = loadingController;
        this.cdr = cdr;
        this.productCode = 'CHW';
        this.tokenOrigin = 'Mobile';
        this.homeIconToggle = false;
        this.animationState = 'out';
        this.isShow = true;
        this.repFG = this.formBuilder.group({
            personName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
            phoneNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(10)]],
            repdocumentId: [''],
            repdocumentNumber: [''],
        });
        this.selectedCountryCodeForexTrans = '';
        this.editMode = false;
        this.chargeAmount = 5;
        this.filteredAccount = [];
        this.isShowDenomError = false;
        this.isShowRepError = false;
        this.users = [];
        this.currencyControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('');
        this.initialEx = "inr";
    }
    ngOnInit() {
        var _a, _b, _c;
        this.currentUser = this.shareDataService.getCurrentUser();
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.customerId = sessionStorage.getItem('customer_id');
        this.currencies = JSON.parse(localStorage.getItem('COUNTRIES'));
        this.flagValue = "in";
        if (this.router.getCurrentNavigation() != null) {
            this.routerData = this.router.getCurrentNavigation().extras.state;
            console.log("Values?", this.routerData);
            this.editMode = ((_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) ? true : false;
        }
        this.formInit();
        this.loadData();
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
        this.shareDataService.getAccountInfo.subscribe(data => {
            this.accountInfo = data;
        });
        this.form.get('transactionAmount').valueChanges.subscribe(val => {
            var _a;
            if (val) {
                (_a = this.denomButtonRef) === null || _a === void 0 ? void 0 : _a.nativeElement.classList.add('active-bg');
            }
        });
        this.filteredOptions = this.currencyControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)((value) => {
            const countryCode = typeof value === 'string' ? value : value === null || value === void 0 ? void 0 : value.countryCode;
            return countryCode ? this._filter(countryCode) : this.currencies.slice();
        }));
        let today = new Date().toISOString();
        const convertedDate = this.datepipe.transform(today, 'yyyy-MM-dd');
        this.form.get('transactionDate').patchValue(convertedDate);
    }
    formInit() {
        this.form = this.formBuilder.group({
            transactionId: [''],
            customerId: [''],
            productCode: ['CHW', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            tokenOrigin: ['Mobile', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            accountBalance: [''],
            accountCurrency: [''],
            transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            branchFlag: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            accountBranch: [''],
            transactionDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            isMobileTrans: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            transactionTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            totalChargeAmount: [this.chargeAmount, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            totalTransactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            exchangeRate: [''],
            accountAmount: [''],
            narrative: [''],
            denomination: [null],
            totalAmount: [''],
            createdBy: [''],
            createdTime: [''],
            modifiedBy: [''],
            modifiedTime: [''],
            recordStatus: [''],
            authStatus: [''],
            version: [''],
            remarks: ['']
        });
    }
    _filter(currency) {
        const filterValue = currency.toLowerCase();
        return this.currencies.filter(option => option.countryCode.toLowerCase().includes(filterValue));
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
        this.form.get('transactionAmount').valueChanges.subscribe(val => {
            var _a;
            if (val) {
                (_a = this.denomButtonRef) === null || _a === void 0 ? void 0 : _a.nativeElement.classList.add('active-bg');
                this.updateTransAmount();
                this.denomValidationListener();
            }
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
        this.updateTransAmount();
        this.denomValidationListener();
    }
    getExChangeRate(currency) {
        this.api.getExchangeRate(this.accountInfo.accountCurrency).subscribe((res) => {
            var _a, _b, _c, _d;
            const code = this.currencies.filter((x) => x.currencyCode == currency);
            let filteredCurrency = code[0].currencyCode;
            const rate = (_a = res === null || res === void 0 ? void 0 : res.rates) === null || _a === void 0 ? void 0 : _a[filteredCurrency];
            this.form.get('exchangeRate').patchValue(rate);
            let toFix = (_b = this.form.get('transactionAmount')) === null || _b === void 0 ? void 0 : _b.value;
            let val = (toFix != "undefined" || toFix != undefined) ? toFix === null || toFix === void 0 ? void 0 : toFix.replace(/,/g, '') : 0;
            if (!isNaN(val)) {
                let updatedAmount = (val * ((_c = this.form.get('exchangeRate')) === null || _c === void 0 ? void 0 : _c.value)) + this.chargeAmount;
                if (!isNaN(updatedAmount)) {
                    let formatedAmount = this.shareDataService.formatCurrency(updatedAmount, (_d = this.form.get('transactionCurrency')) === null || _d === void 0 ? void 0 : _d.value);
                    this.form.get('totalTransactionAmount').patchValue(formatedAmount);
                    this.cdr.markForCheck();
                }
            }
        });
        this.updateTransAmount();
    }
    updateTransAmount() {
        var _a, _b, _c;
        let toFix = (_a = this.form.get('transactionAmount')) === null || _a === void 0 ? void 0 : _a.value;
        let val = (toFix != "undefined" || toFix != undefined) ? toFix === null || toFix === void 0 ? void 0 : toFix.replace(/,/g, '') : 0;
        if (!isNaN(val)) {
            let updatedAmount = (Number(val) * (((_b = this.form.get('exchangeRate')) === null || _b === void 0 ? void 0 : _b.value) || 1)) + this.chargeAmount;
            if (!isNaN(updatedAmount)) {
                let formatedAmount = this.shareDataService.formatCurrency(updatedAmount, (_c = this.form.get('transactionCurrency')) === null || _c === void 0 ? void 0 : _c.value);
                this.form.get('totalTransactionAmount').patchValue(formatedAmount);
                this.cdr.markForCheck();
            }
        }
    }
    getHomeBranch() {
        var _a, _b, _c, _d;
        this.homeIconToggle = !this.homeIconToggle;
        if (this.homeIconToggle) {
            console.log((_a = this.filteredAccount) === null || _a === void 0 ? void 0 : _a.accountBranch);
            (_b = this.form.get('transactionBranch')) === null || _b === void 0 ? void 0 : _b.patchValue((_c = this.filteredAccount) === null || _c === void 0 ? void 0 : _c.accountBranch);
        }
        else {
            (_d = this.form.get('transactionBranch')) === null || _d === void 0 ? void 0 : _d.patchValue("");
        }
    }
    upsertAccount(filteredResponseSavingAccount) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        this.users = filteredResponseSavingAccount.custAccount;
        this.customerId = filteredResponseSavingAccount.customerId;
        if (this.editMode) {
            const data = (_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data;
            console.log(data === null || data === void 0 ? void 0 : data.transactionBranch, 'branch 2');
            (_b = this.form.get('accountNumber')) === null || _b === void 0 ? void 0 : _b.patchValue(data === null || data === void 0 ? void 0 : data.accountNumber);
            (_c = this.form.get('accountCurrency')) === null || _c === void 0 ? void 0 : _c.patchValue(data === null || data === void 0 ? void 0 : data.accountCurrency);
            (_d = this.form.get('transactionCurrency')) === null || _d === void 0 ? void 0 : _d.patchValue(data === null || data === void 0 ? void 0 : data.transactionCurrency);
            (_e = this.form.get('exchangeRate')) === null || _e === void 0 ? void 0 : _e.patchValue(data === null || data === void 0 ? void 0 : data.exchangeRate);
            let toInt = parseInt(data === null || data === void 0 ? void 0 : data.transactionAmount);
            let toLocale = toInt.toLocaleString('en-IN');
            (_f = this.form.get('transactionAmount')) === null || _f === void 0 ? void 0 : _f.patchValue(toLocale);
            let formatedAmount = this.shareDataService.formatCurrency(data === null || data === void 0 ? void 0 : data.totalTransactionAmount, data === null || data === void 0 ? void 0 : data.transactionCurrency);
            this.form.get('totalTransactionAmount').patchValue(formatedAmount);
            (_g = this.form.get('transactionBranch')) === null || _g === void 0 ? void 0 : _g.patchValue(data === null || data === void 0 ? void 0 : data.transactionBranch);
            (_h = this.form.get('transactionDate')) === null || _h === void 0 ? void 0 : _h.patchValue(data === null || data === void 0 ? void 0 : data.transactionDate);
            (_j = this.form.get('transactionTime')) === null || _j === void 0 ? void 0 : _j.patchValue(data === null || data === void 0 ? void 0 : data.transactionTime);
            (_k = this.form.get('remarks')) === null || _k === void 0 ? void 0 : _k.patchValue(data === null || data === void 0 ? void 0 : data.remarks);
        }
        else {
            if (this.accountInfo.accountId != null) {
                this.form.get('accountNumber').patchValue(this.accountInfo.accountId);
            }
            else {
                this.form.get('accountNumber').patchValue(this.users[0].accountId);
            }
            this.selectedCountryCode = this.selectedCurrency.countryCode.toLowerCase();
            (_l = this.form.get('transactionCurrency')) === null || _l === void 0 ? void 0 : _l.patchValue(this.selectedCurrency.currencyCode);
            this.form.controls.accountBranch.patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
            console.log(filteredResponseSavingAccount.custAccount[0].accountBranch, 'branch 3');
            // this.form.get('transactionBranch').patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        }
        this.cdr.markForCheck();
    }
    datePopup() {
        var _a;
        let oldDate = (_a = this.form.get('transactionDate')) === null || _a === void 0 ? void 0 : _a.value;
        this.modalController.create({
            component: src_app_components_transaction_date_transaction_date_component__WEBPACK_IMPORTED_MODULE_11__.TransactionDateComponent,
            componentProps: {
                date: this.form.get('transactionDate').value,
            }
        }).then(modalResp => {
            modalResp.present();
            modalResp.onDidDismiss().then(res => {
                var _a, _b;
                console.log(typeof (res === null || res === void 0 ? void 0 : res.data));
                if (typeof (res === null || res === void 0 ? void 0 : res.data) == "undefined") {
                    console.log("oldDate", oldDate);
                    (_a = this.form.get('transactionDate')) === null || _a === void 0 ? void 0 : _a.patchValue(oldDate);
                }
                else {
                    (_b = this.form.get('transactionDate')) === null || _b === void 0 ? void 0 : _b.patchValue(res.data);
                }
            });
        });
    }
    openPopup() {
        this.modalController.create({
            component: src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_3__.TimeSlotsComponent,
            componentProps: {
                date: this.form.get('transactionDate').value,
            }
        }).then(modalResp => {
            modalResp.present();
            modalResp.onDidDismiss().then(res => {
                if (res.data != null || res.data != undefined || res.data != "undefined") {
                    console.log(res);
                    this.form.get('transactionTime').patchValue(res.data);
                }
            });
        });
    }
    keyPressMob(event) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    selectCurrencyCode(e) {
        var _a;
        this.flagValue = e.value.toString().slice(0, 2);
        if (e.value == "undefined" || e.value == undefined || e.value == null || e.value == "object") {
            return;
        }
        else {
            if (e.value.length > 2) {
                const filteredCurrency = (_a = this.currencies) === null || _a === void 0 ? void 0 : _a.filter((i) => i.currencyCode === e.value);
                this.selectedCountryCode = filteredCurrency[0].countryCode.toLowerCase();
                console.log(typeof filteredCurrency[0].countryCode.toLowerCase());
                this.getExChangeRate(filteredCurrency[0].currencyCode);
                this.cdr.markForCheck();
            }
        }
    }
    onAccountSelect(e) {
        var _a, _b, _c;
        console.log("selected", this.selectedAccount);
        let filteredAccount = this.users.filter(account => account.accountId === this.selectedAccount);
        this.filteredAccount = filteredAccount[0];
        const countryCode = this.currencies.filter((i) => { var _a; return i.currencyCode === ((_a = this.filteredAccount) === null || _a === void 0 ? void 0 : _a.accountCurrency); });
        console.log("countryCode", countryCode);
        this.selectedCurrency = countryCode[0];
        this.selectedCountryCode = (_a = this.selectedCurrency) === null || _a === void 0 ? void 0 : _a.countryCode.toLowerCase();
        (_b = this.form.get('transactionCurrency')) === null || _b === void 0 ? void 0 : _b.patchValue((_c = this.filteredAccount) === null || _c === void 0 ? void 0 : _c.accountCurrency);
    }
    getChargeDetails() {
        this.api.getChargeDetails(this.accountInfo.accountId).subscribe(resp => {
            var _a, _b;
            this.chargeAmount = (_a = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _a === void 0 ? void 0 : _a.amount;
            this.form.get('totalChargeAmount').patchValue((_b = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _b === void 0 ? void 0 : _b.amount);
        }, err => console.log('Error: ', err));
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
    goBack() {
        this.router.navigate(['dashboard']);
    }
    balanceCheck(event) {
        this.transAmt = event.target.value;
        this.transAmt = this.transAmt.toString().replace(/,/g, '');
        this.currentBalance = this.filteredAccount.amount;
        this.updateTransAmount();
        if (parseFloat(this.currentBalance) < parseFloat(this.transAmt)) {
            this.showToast();
        }
        else {
            return;
        }
    }
    formatAccountBalance(balance) {
        if (balance > 0) {
            let toInt = parseInt(balance);
            let toLocale = toInt.toLocaleString('en-IN');
            return toLocale;
        }
        else {
            let toInt = parseInt('0');
            let toLocale = toInt.toLocaleString('en-IN');
            return toLocale;
        }
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
    showToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Transaction Amount should not exceed than Account Balance',
                duration: 2000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    toggleFrm() {
        this.frmToggle = !this.frmToggle;
        this.animationState = this.animationState === 'out' ? 'in' : 'out';
        this.createComponent();
    }
    createComponent() {
        this.chwViewRef.clear();
        let childComponentRef = this.chwViewRef.createComponent(src_app_components_denomination_slide_denomination_slide_component__WEBPACK_IMPORTED_MODULE_2__.DenominationSlideComponent);
        let childComponent = childComponentRef.instance;
        childComponent.unique_key = "chwViewRef";
        childComponent.chwViewRef = this;
    }
    removeDynamicComponent() {
        this.chwViewRef.clear();
    }
    remove(view) {
        console.log("view disiss?", view);
        let data = JSON.parse(localStorage.getItem(view)) || null;
        console.log("Data??", data);
        if (view == 'chwViewRef') {
            this.chwViewRef.clear();
            if (data != null && data.total != 0) {
                this.denomAmountValidation(data.total);
                console.log(this.form.value);
            }
        }
    }
    denomAmountValidation(amount) {
        var _a, _b;
        console.log('this.form.get?.value ', (_a = this.form.get('transactionAmount')) === null || _a === void 0 ? void 0 : _a.value);
        if (Number((_b = this.form.get('transactionAmount')) === null || _b === void 0 ? void 0 : _b.value.split(',').join('')) != Number(amount)) {
            this.isShowDenomError = true;
            this.toastService.showToast("Denomination total should match with the transaction amount");
        }
        else {
            this.isShowDenomError = false;
        }
        this.cdr.markForCheck();
    }
    denomValidationListener() {
        let data = JSON.parse(localStorage.getItem('chwViewRef')) || null;
        console.log("Data??", data);
        if ((data === null || data === void 0 ? void 0 : data.title) == 'chwViewRef') {
            if (data != null && data.total != 0) {
                this.denomAmountValidation(data.total);
                console.log(this.form.value);
            }
        }
    }
    submit(form) {
        var _a, _b;
        var date = new Date(form.transactionDate);
        let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
        form.transactionDate = latest_date;
        form.customerId = this.customerId;
        form.productCode = this.productCode;
        form.accountType = (_a = this.filteredAccount) === null || _a === void 0 ? void 0 : _a.accountType;
        form.tokenOrigin = this.tokenOrigin;
        form.accountCurrency = ((_b = this.filteredAccount) === null || _b === void 0 ? void 0 : _b.accountCurrency) || "";
        form.representativeInfo = [];
        if (this.editMode) {
            form.appointmentId = this.routerData.data.appointmentId;
            form.operation = 'update';
        }
        form.isMobileTrans = true;
        // Total transaction convertion format
        let ttam = this.form.value['totalTransactionAmount'].substring(1);
        form.totalTransactionAmount = ttam.replace(/,/g, '');
        if (this.editMode) {
            form.transactionAmount = form.transactionAmount.split(',').join('');
            this.api.appointmentBooking(form).subscribe((resp) => {
                localStorage.setItem("TransactionTime", resp.transactionTime);
                this.cashWithdrawResponse = resp;
                this.transactionId = this.cashWithdrawResponse.transactionId;
                localStorage.setItem('AppointmentDetails', JSON.stringify(resp));
                console.log('transactionId::', this.transactionId);
                if (this.cashWithdrawResponse === 200 || this.cashWithdrawResponse !== null) {
                    this.shareDataService.shareTransactionId(this.transactionId);
                    this.onClick(this.cashWithdrawResponse);
                    this.form.reset();
                }
            });
        }
        else {
            form.transactionAmount = form.transactionAmount.toString().replace(/,/g, '');
            this.api.cashDepositSave(form).subscribe((resp) => {
                localStorage.setItem("TransactionTime", resp.transactionTime);
                this.cashWithdrawResponse = resp;
                this.transactionId = this.cashWithdrawResponse.transactionId;
                localStorage.setItem('AppointmentDetails', JSON.stringify(resp));
                console.log('transactionId::', this.transactionId);
                if (this.cashWithdrawResponse === 200 || this.cashWithdrawResponse !== null) {
                    this.shareDataService.shareTransactionId(this.transactionId);
                    this.onClick(this.cashWithdrawResponse);
                    this.form.reset();
                }
            });
        }
    }
    onClick(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: _token_v2_token_v2_page__WEBPACK_IMPORTED_MODULE_10__.TokenV2Page,
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
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_9__.BranchComponent,
                id: "branchModal",
                componentProps: {}
            });
            modal.onDidDismiss().then((modelData) => {
                var _a;
                if (modelData.data != null || modelData.data != undefined || modelData.data != "undefined") {
                    console.log(modelData.data['data'].branchName, 'branch 4');
                    this.form.get('transactionBranch').patchValue(modelData.data['data'].branchName);
                    if (this.form.get('transactionBranch').value == ((_a = this.filteredAccount) === null || _a === void 0 ? void 0 : _a.accountBranch)) {
                        this.homeIconToggle = true;
                    }
                    else {
                        this.homeIconToggle = false;
                    }
                }
            });
            return yield modal.present();
        });
    }
    goToHomepage() {
        this.router.navigate(['/dashboard']);
    }
    ngOnDestroy() {
        localStorage.removeItem("chwViewRef");
    }
    onInput(value = '') {
        let commasRemoved = value && value.replace(/,/g, '');
        let toInt;
        let toLocale;
        if (commasRemoved && commasRemoved.split('.').length > 1) {
            let decimal = isNaN(parseInt(commasRemoved.split('.')[1])) ? '' : parseInt(commasRemoved.split('.')[1]);
            toInt = parseInt(commasRemoved);
            toLocale = toInt.toLocaleString('en-IN') + '.' + decimal;
        }
        else {
            toInt = parseInt(commasRemoved);
            toLocale = toInt.toLocaleString('en-IN');
        }
        if (toLocale === 'NaN') {
            return '';
        }
        else {
            return toLocale;
        }
    }
};
CashWithdrawV2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ToastController },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.LoadingController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef }
];
CashWithdrawV2Page.propDecorators = {
    chwViewRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['dynamic', { read: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewContainerRef },] }],
    denomButtonRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ["denom", { read: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ElementRef },] }],
    viewRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['dynamic', { read: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewContainerRef },] }]
};
CashWithdrawV2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
        selector: 'app-cash-withdraw-v2',
        template: _cash_withdraw_v2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.trigger)('openClose', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.style)({ height: '0px' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.transition)('false <=> true', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.animate)(500)])
            ])
        ],
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.DateAdapter, useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_22__.MomentDateAdapter, deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MAT_DATE_LOCALE] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MAT_DATE_FORMATS, useValue: _forex_cash_v2_forex_cash_v2_page__WEBPACK_IMPORTED_MODULE_8__.MY_FORMATS },
        ],
        styles: [_cash_withdraw_v2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CashWithdrawV2Page);



/***/ }),

/***/ 77219:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/v2/cash-withdraw-v2/cash-withdraw-v2.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".example-right-align {\n  text-align: right;\n}\n\n.mat-form-field-appearance-outline .mat-form-field-suffix.denomination-action {\n  top: -3px !important;\n}\n\n.currency-card {\n  width: auto;\n  height: 42px;\n  color: #FFFFFF !important;\n  text-align: center;\n  border-radius: 5px;\n  margin-top: 0px;\n  position: relative;\n}\n\n.excg-fld {\n  z-index: 1;\n  position: relative;\n  background: #f8f9fa;\n  border-radius: 10px;\n  top: 10px;\n}\n\n.currency-link {\n  left: 0;\n  top: 16px;\n  right: 0;\n  bottom: 6px;\n  position: relative;\n  text-decoration: underline !important;\n}\n\n.row {\n  margin-right: -6px !important;\n  margin-left: -6px !important;\n}\n\n.col-6 {\n  padding-right: 6px !important;\n  padding-left: 6px !important;\n}\n\nion-content.transpopover {\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #ffffff;\n}\n\nion-item.exchange::part(native) {\n  height: 65px;\n  background: #F2F2F2;\n}\n\nion-item.txn::part(native) {\n  height: 65px;\n}\n\n.suffix-icon {\n  margin-top: -14px;\n}\n\nion-popover.trans-pop::part(content) {\n  --width: 275px !important;\n  border-radius: 10px !important;\n  --offset-x: -10px !important;\n}\n\nion-popover.trans-pop,\n.popover-arrow::after {\n  --background: #004C97 !important;\n}\n\n.remark-field {\n  margin-top: 25px;\n  border: 1px solid #dee2e6;\n  border-radius: 16px;\n  height: 100px;\n  filter: drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.0901960784));\n}\n\n.full-width {\n  width: 100% !important;\n}\n\n.suffix-ion-icon {\n  position: absolute;\n  bottom: 0;\n  right: 10px;\n  top: 10px;\n}\n\n.suffix-ion-icon-total {\n  position: relative;\n  bottom: 0;\n  right: 32px;\n  top: 10px;\n}\n\n:host ::ng-deep .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0 !important;\n}\n\n:host ::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n:host ::ng-deep mat-form-field.mat-form-field.tta {\n  background: #F2F2F2 !important;\n}\n\n:host ::ng-deep mat-form-field.mat-form-field.excg {\n  background: #F2F2F2 !important;\n}\n\n:host ::ng-deep mat-form-field.mat-form-field.ttc {\n  background: #F2F2F2 !important;\n}\n\n:host ::ng-deep .mat-form-field-prefix {\n  top: 0px !important;\n}\n\n:host ::ng-deep .mat-form-field {\n  display: inherit !important;\n}\n\n.mt-2 {\n  margin-top: 2px;\n}\n\n.right-align {\n  text-align: right;\n}\n\n:host ::ng-deep .mat-input-element.auto-currency {\n  margin-left: 10px !important;\n}\n\nion-segment {\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px !important;\n  height: 50px !important;\n}\n\nion-segment-button {\n  --background-checked: linear-gradient(90deg, #051A2D, #004C97) !important;\n}\n\n.file-text {\n  color: #004C97;\n}\n\n.file-upload-container {\n  width: auto;\n  height: 100px;\n  border: 1px solid #ffffff;\n  background: #F8F8F8;\n  filter: drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.0901960784));\n  border-radius: 16px;\n}\n\n.file-upload-container .file-content {\n  margin-top: 6%;\n}\n\n.file-upload-container .file-img {\n  width: 25px;\n  height: 25px;\n}\n\n.account-group {\n  background: #F2F2F2;\n  padding: 10px;\n  border-radius: 16px;\n}\n\n.lbl-title {\n  color: #102245;\n  font-size: 11px;\n}\n\n.lbl-header {\n  color: #004C97;\n  font-size: 16px;\n}\n\n.lbl-content {\n  color: #262831;\n  font-size: 12px;\n}\n\nion-item.item-textarea {\n  --min-height: 100px;\n}\n\nion-button.next {\n  width: 150px;\n  height: 40px;\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #FFFFFF;\n}\n\nion-button.cancel {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #B20000;\n}\n\nion-button.back {\n  width: 150px;\n  height: 40px;\n  --background: #ffffff;\n  --color: #000000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2gtd2l0aGRyYXctdjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFBSjs7QUFHQTtFQUNJLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FBQUo7O0FBR0E7RUFDSSw2QkFBQTtFQUNBLDRCQUFBO0FBQUo7O0FBSUE7RUFDSSw2QkFBQTtFQUNBLDRCQUFBO0FBREo7O0FBSUE7RUFDSSxzREFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7QUFESjs7QUFLQTs7RUFFSSxnQ0FBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZEQUFBO0FBRko7O0FBTUE7RUFDSSxzQkFBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFISjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBSEo7O0FBTUE7RUFDSSxvQkFBQTtBQUhKOztBQU1BO0VBQ0ksNEJBQUE7QUFISjs7QUFNQTtFQUNJLDhCQUFBO0FBSEo7O0FBTUE7RUFDSSw4QkFBQTtBQUhKOztBQU1BO0VBQ0ksOEJBQUE7QUFISjs7QUFNQTtFQUNJLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSwyQkFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtBQUhKOztBQU1BO0VBQ0ksaUJBQUE7QUFISjs7QUFNQTtFQUNJLDRCQUFBO0FBSEo7O0FBTUE7RUFDSSxnR0FBQTtFQUNBLHVCQUFBO0FBSEo7O0FBTUE7RUFDSSx5RUFBQTtBQUhKOztBQU1BO0VBQ0ksY0FBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkRBQUE7RUFDQSxtQkFBQTtBQUhKOztBQUtJO0VBQ0ksY0FBQTtBQUhSOztBQU1JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFKUjs7QUFTQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVNBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFOSjs7QUFTQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBTko7O0FBYUE7RUFDSSxtQkFBQTtBQVZKOztBQWFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxzREFBQTtFQUNBLGdCQUFBO0FBVko7O0FBYUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFWSjs7QUFhQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQVZKIiwiZmlsZSI6ImNhc2gtd2l0aGRyYXctdjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeC5kZW5vbWluYXRpb24tYWN0aW9uIHtcclxuICAgIHRvcDogLTNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VycmVuY3ktY2FyZCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAvLyB6LWluZGV4OiAtMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmV4Y2ctZmxkIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLmN1cnJlbmN5LWxpbmsge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMTZweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiA2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbi1yaWdodDogLTZweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jb2wtNiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50LnRyYW5zcG9wb3ZlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MUEyRCwgIzAwNEM5Nyk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5pb24taXRlbS5leGNoYW5nZTo6cGFydChuYXRpdmUpIHtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnR4bjo6cGFydChuYXRpdmUpIHtcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG5cclxuLnN1ZmZpeC1pY29uIHtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG59XHJcblxyXG5pb24tcG9wb3Zlci50cmFucy1wb3A6OnBhcnQoY29udGVudCkge1xyXG4gICAgLS13aWR0aDogMjc1cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgIC0tb2Zmc2V0LXg6IC0xMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAtLW9mZnNldC15OiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXBvcG92ZXIudHJhbnMtcG9wLFxyXG4ucG9wb3Zlci1hcnJvdzo6YWZ0ZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA0Qzk3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZW1hcmstZmllbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDNweCAxNXB4ICMwMDAwMDAxNyk7XHJcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWZmaXgtaW9uLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zdWZmaXgtaW9uLWljb24tdG90YWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDMycHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLnR0YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC5leGNnIHtcclxuICAgIGJhY2tncm91bmQ6ICNGMkYyRjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLnR0YyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcHJlZml4IHtcclxuICAgIHRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXQtMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5yaWdodC1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudC5hdXRvLWN1cnJlbmN5IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50IHtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDZweCAyNHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMHB4IDBweCAxcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MUEyRCwgIzAwNEM5NykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpbGUtdGV4dCB7XHJcbiAgICBjb2xvcjogIzAwNEM5NztcclxufVxyXG5cclxuLmZpbGUtdXBsb2FkLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDNweCAxNXB4ICMwMDAwMDAxNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG5cclxuICAgIC5maWxlLWNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDYlO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWxlLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuLmFjY291bnQtZ3JvdXAge1xyXG4gICAgYmFja2dyb3VuZDogI0YyRjJGMjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcblxyXG4ubGJsLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMTAyMjQ1O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4ubGJsLWhlYWRlciB7XHJcbiAgICBjb2xvcjogIzAwNEM5NztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmxibC1jb250ZW50IHtcclxuICAgIGNvbG9yOiAjMjYyODMxO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4vLyBpb24taXRlbS5leGNoYW5nZS5pdGVtLWZpbGwtb3V0bGluZSB7XHJcbi8vICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuaW9uLWl0ZW0uaXRlbS10ZXh0YXJlYSB7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uLm5leHQge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFBMkQsICMwMDRDOTcpO1xyXG4gICAgLS1jb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5jYW5jZWwge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1jb2xvcjogI0IyMDAwMDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbi5iYWNrIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufSJdfQ== */";

/***/ }),

/***/ 48726:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/v2/cash-withdraw-v2/cash-withdraw-v2.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" style=\"color:#004C97\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"bank\">Cash Withdrawal</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n    <form *ngIf=\"form\" [formGroup]=\"form\">\r\n\r\n      <!-- TODO: Reusable component start -->\r\n      <div class=\"account-group\">\r\n        <mat-form-field appearance=\"outline\" class=\"full-width my-2\" style=\"background: #ffffff;\">\r\n          <mat-label>Account Number</mat-label>\r\n          <mat-select formControlName=\"accountNumber\" [(ngModel)]=\"selectedAccount\"\r\n            (ngModelChange)=\"onAccountSelect($event)\">\r\n            <mat-select-trigger>\r\n              <p class=\"my-1\">\r\n                <span class=\"currency-label\">{{ filteredAccount?.accountCurrency }} </span>\r\n                &nbsp; <span>{{ form.get('accountNumber')?.value }} </span>\r\n              </p>\r\n            </mat-select-trigger>\r\n            <mat-option *ngFor=\"let user of users\" [value]=\"user.accountId\">{{user.accountId}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <div style=\"margin-left: 12px;margin-right: 12px;\" class=\"my-2\">\r\n          <div class=\"row justify-content-between text-left\">\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Account Balance</span>\r\n              <p class=\"lbl-content\">{{ formatAccountBalance(filteredAccount?.amount) }}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Account Branch</span>\r\n              <p class=\"lbl-content\">{{ filteredAccount?.accountBranch }}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Customer Name</span>\r\n              <p class=\"lbl-content\">{{ currentUser?.firstName }}</p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <span class=\" lbl-title\">Type</span>\r\n              <p class=\"lbl-content\">{{ filteredAccount?.accountType }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    <!-- TODO: Reusable component end -->\r\n    <div class=\"row\">\r\n      <div class=\"col-6 my-3\">\r\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n          <mat-label>Transaction Currency </mat-label>\r\n           <mat-select  (selectionChange)=\"selectCurrencyCode($event)\" formControlName=\"transactionCurrency\">\r\n            <mat-select-trigger>\r\n              <span> <img alt=\"\" class=\"example-option-img\"\r\n                src=\"assets/svg-country-flags/svg/{{flagValue.toLowerCase()}}.svg\" height=\"25\" width=\"25\"> &nbsp;{{form.controls['transactionCurrency'].value}}</span>\r\n              \r\n            </mat-select-trigger>\r\n            <mat-option *ngFor=\"let currency of filteredOptions | async\" [value]=\"currency.currencyCode\">\r\n              <img alt=\"\" class=\"example-option-img\"\r\n                src=\"assets/svg-country-flags/svg/{{currency?.countryCode.toLowerCase()}}.svg\" height=\"25\" width=\"25\">\r\n              <!-- <span> {{ currency?.countryName }}</span> -->\r\n              <span> {{currency?.countryCode}} &nbsp;{{ currency?.countryName }}</span>\r\n            </mat-option>\r\n            \r\n          </mat-select>\r\n          <!-- </mat-autocomplete> -->\r\n\r\n          <!-- <mat-icon matSuffix>arrow_drop_down</mat-icon> -->\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-6\" *ngIf=\"!filteredAccount?.accountCurrency.toLowerCase().includes(selectedCountryCode.toLowerCase())\">\r\n        <mat-form-field appearance=\"outline\" class=\"excg full-width my-3\">\r\n          <mat-label>Exchange Rate</mat-label>\r\n          <input matInput placeholder=\"Exchange Rate\" readonly=\"true\" formControlName=\"exchangeRate\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n      <div class=\"denom-group\">\r\n        <mat-form-field appearance=\"outline\" class=\"full-width my-1\">\r\n          <mat-label>Transaction Amount</mat-label>\r\n          <input matInput placeholder=\"Amount\" #myRef [(ngModel)]=\"transAmount\" type=\"tel\"\r\n            formControlName=\"transactionAmount\" separator (blur)=\"onBlurEvent($event)\" (keyup)=\"balanceCheck($event)\">\r\n          <!-- <span matPrefix>{{ shareDataService?.getCurrencySymbol(form.get('transactionCurrency')?.value) }} &nbsp;&nbsp;</span> -->\r\n          <button mat-button matSuffix [ngClass]=\"form.get('transactionAmount')?.value ? 'active-bg' : 'inactive-bg'\"\r\n            class=\"action-button\" type=\"button\" #denom (click)=\"enableDisableAction('TXAM')\" style=\"width: 140px;\">\r\n            Denomination\r\n          </button>\r\n        </mat-form-field>\r\n        <mat-error style=\"margin-left: 5px;\" *ngIf=\"transAmt > currentBalance\">\r\n          Transaction Amount cannot be greater than Account\r\n          Balance\r\n        </mat-error>\r\n\r\n        <mat-error style=\"margin-left: 5px;\" *ngIf=\"isShowDenomError\">\r\n          Denomination total should match with the transaction amount\r\n        </mat-error>\r\n        <div class=\"my-1\">\r\n          <ng-template #dynamic></ng-template>\r\n        </div>\r\n      </div>\r\n\r\n      <mat-hint *ngIf=\"!filteredAccount?.accountCurrency.toLowerCase().includes(selectedCountryCode.toLowerCase())\">\r\n        <img src=\"assets/icon/error.svg\" class=\"small-info\">\r\n        <small> “Exchange rate may be changed at the time of transaction”</small>\r\n      </mat-hint>\r\n\r\n      <div class=\"group-field my-2\">\r\n        <mat-form-field appearance=\"outline\" class=\"full-width excg-fld\">\r\n          <mat-label>Transaction Branch</mat-label>\r\n          <input matInput placeholder=\"Transaction Branch\" formControlName=\"transactionBranch\" readonly=\"true\">\r\n          <img [src]=\"homeIconToggle ? 'assets/icon/dark-home.svg' : 'assets/icon/home-branch.svg'\" matSuffix\r\n            class=\"suffix-icon\" (click)=\"getHomeBranch()\">\r\n        </mat-form-field>\r\n        <div class=\"currency-card secondary\">\r\n          <a class=\"currency-link\" (click)=\"presentModal()\">Click here to find the nearest branch</a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row t-10 my-3\">\r\n        <div class=\"col-6\">\r\n          <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n            <mat-label>Transaction Date</mat-label>\r\n            <input matInput placeholder=\"Date\" formControlName=\"transactionDate\" readonly=\"true\">\r\n            <mat-datepicker-toggle matSuffix>\r\n              <img src=\"assets/icon/calendar.svg\" matDatepickerToggleIcon class=\"suffix-icon\" (click)=\"datePopup()\">\r\n            </mat-datepicker-toggle>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n            <mat-label>Time Slot</mat-label>\r\n            <input matInput placeholder=\"Time\" formControlName=\"transactionTime\" readonly=\"true\">\r\n            <img src=\"assets/icon/timer.svg\" matSuffix class=\"suffix-icon\" (click)=\"openPopup()\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row t-5 my-4\">\r\n        <div class=\"col-6\">\r\n          <mat-form-field appearance=\"outline\" class=\"ttc full-width\">\r\n            <mat-label>Total Charge Amount</mat-label>\r\n            <input matInput readonly=\"true\" formControlName=\"totalChargeAmount\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field appearance=\"outline\" class=\"tta full-width\">\r\n            <mat-label>Total Transaction Amount</mat-label>\r\n            <input matInput [readonly]=\"true\" formControlName=\"totalTransactionAmount\">\r\n            <img src=\"assets/icon/info.svg\" matSuffix class=\"suffix-icon\" id=\"bottom-start\">\r\n            <ion-popover mode=\"ios\" size=\"auto\" arrow=\"true\" trigger=\"bottom-start\" side=\"bottom\" alignment=\"center\"\r\n              class=\"trans-pop\" reference=\"bottom-start\">\r\n              <ng-template>\r\n                <ion-content class=\"ion-padding transpopover\">\r\n                  <p>Transaction Amount: {{ onInput(form.get('transactionAmount')?.value ? form.get('transactionAmount')?.value : 0) }}\r\n                    </p>\r\n                  <!-- <p>Transaction Amount: {{ form.get('transactionCurrency')?.value == 'INR' ? '₹' : '$' }}\r\n                    {{ form.get('transactionAmount')?.value ? form.get('transactionAmount')?.value : 0 }} </p> -->\r\n                  <p>Total Charge Amount:{{ form.get('transactionCurrency')?.value == 'INR' ? '₹' : '$' }}\r\n                    {{ form.get('totalChargeAmount')?.value ? form.get('totalChargeAmount')?.value : 0 }}</p>\r\n                  <hr style=\"background: #ffffff;\">\r\n                  <p>Total Transaction Amount:\r\n                    {{ form.get('totalTransactionAmount')?.value ? form.get('totalTransactionAmount')?.value : 0 }}</p>\r\n                </ion-content>\r\n              </ng-template>\r\n            </ion-popover>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"remark-field t-15\">\r\n        <ion-item>\r\n          <ion-textarea [autoGrow]=\"true\" formControlName=\"remarks\" placeholder=\"Remarks\">\r\n          </ion-textarea>\r\n        </ion-item>\r\n      </div>\r\n    </form>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar style=\"background: transparent !important;\">\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"next\" [disabled]=\"!form.valid\" (click)=\"submit(form.value)\">Submit\r\n        </ion-button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <ion-button shape=\"round\" class=\"back\" (click)=\"goToHomepage()\">Back</ion-button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_v2_cash-withdraw-v2_cash-withdraw-v2_module_ts.js.map