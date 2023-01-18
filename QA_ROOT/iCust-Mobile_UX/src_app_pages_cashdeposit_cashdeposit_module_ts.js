"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cashdeposit_cashdeposit_module_ts"],{

/***/ 46712:
/*!*****************************************************************!*\
  !*** ./src/app/pages/cashdeposit/cashdeposit-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashdepositPageRoutingModule": () => (/* binding */ CashdepositPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _cashdeposit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cashdeposit.page */ 91477);




const routes = [
    {
        path: '',
        component: _cashdeposit_page__WEBPACK_IMPORTED_MODULE_0__.CashdepositPage
    }
];
let CashdepositPageRoutingModule = class CashdepositPageRoutingModule {
};
CashdepositPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CashdepositPageRoutingModule);



/***/ }),

/***/ 19706:
/*!*********************************************************!*\
  !*** ./src/app/pages/cashdeposit/cashdeposit.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashdepositPageModule": () => (/* binding */ CashdepositPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cashdeposit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cashdeposit-routing.module */ 46712);
/* harmony import */ var _cashdeposit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cashdeposit.page */ 91477);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-flag-picker */ 96801);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);










let CashdepositPageModule = class CashdepositPageModule {
};
CashdepositPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _cashdeposit_routing_module__WEBPACK_IMPORTED_MODULE_0__.CashdepositPageRoutingModule,
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_9__.NgxFlagPickerModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_3__.SharedMaterialModule
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        declarations: [_cashdeposit_page__WEBPACK_IMPORTED_MODULE_1__.CashdepositPage],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA
        ],
    })
], CashdepositPageModule);



/***/ }),

/***/ 91477:
/*!*******************************************************!*\
  !*** ./src/app/pages/cashdeposit/cashdeposit.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashdepositPage": () => (/* binding */ CashdepositPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cashdeposit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cashdeposit.page.html?ngResource */ 57706);
/* harmony import */ var _cashdeposit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cashdeposit.page.scss?ngResource */ 35318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/branch/branch.component */ 6156);
/* harmony import */ var src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/time-slots/time-slots.component */ 19023);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var _appointmentpopup_appointmentpopup_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../appointmentpopup/appointmentpopup.page */ 14808);

















let CashdepositPage = class CashdepositPage {
    constructor(toastCtrl, router, modalCtrl, datepipe, fb, loading, api, toastController, modalController, shareDataService, cdr) {
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.datepipe = datepipe;
        this.fb = fb;
        this.loading = loading;
        this.api = api;
        this.toastController = toastController;
        this.modalController = modalController;
        this.shareDataService = shareDataService;
        this.cdr = cdr;
        this.title = 'Cash Deposit';
        this.productCode = "CHD";
        this.tokenOrigin = "Mobile";
        this.submitted = true;
        this.submitted1 = true;
        this.currencies = [];
        //transAmount:number;
        this.isedit = true;
        this.accountBranch = "Loita street";
        this.flag = true;
        this.minDate = new Date().toISOString();
        this.maxDate = "2025";
        this.users = [];
        this.trnBrn = null;
        this.accountflag = false;
        this.editMode = false;
        this.isShow = true;
        this.selectedCountryCode = '';
        this.getCountrynameValues();
    }
    ngOnInit() {
        var _a, _b, _c;
        if (this.router.getCurrentNavigation() != null) {
            this.routerData = this.router.getCurrentNavigation().extras.state;
            console.log("Values?", this.routerData);
            this.editMode = ((_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) ? true : false;
        }
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.customerId = sessionStorage.getItem('customer_id');
        this.depositForm = this.fb.group({
            transactionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            customerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            productCode: ['CHD', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            tokenOrigin: ['Mobile', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            accountBalance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            accountCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(/^[1-9]\d*$/)]],
            branchFlag: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            accountBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            isMobileTrans: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            depositType: [this.editMode && ((_c = (_b = this.routerData) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.representativeInfo.length) === 0 ? 'self' : 'representative', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            personName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            exchangeRate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            accountAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            totalChargeAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            totalTransactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
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
            remarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
        });
        console.log(this.depositForm.value);
        this.loadData();
        this.onChanges();
        this.shareDataService.getAccountInfo.subscribe(data => {
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
        let today = new Date().toISOString();
        this.depositForm.get('transactionDate').patchValue(today);
    }
    loadData() {
        this.loading.present();
        this.api.custpomerDetails(this.phoneNumber).subscribe((resp) => {
            this.loading.dismiss();
            resp.custAccount = resp.custAccount.filter(card => card.status === "APPROVED");
            console.log('backend resp in home', resp);
            this.customerDetails = resp;
            this.upsertAccount(resp);
        }, (err) => {
            this.loading.dismiss();
        });
    }
    onChanges() {
        this.depositForm.get('branchFlag').valueChanges.subscribe(val => {
            console.log("branch flag? val", val);
            console.log("branch flag?", this.brnflg);
            localStorage.setItem("BranchFlag", val);
            this.brnflg = val;
            if (this.brnflg == false && val == false) {
                console.log("1st if");
                this.depositForm.controls.transactionBranch.patchValue(this.trnBrn);
                this.nearestBrn = true;
            }
            else {
                console.log("else");
                this.nearestBrn = false;
                this.accBranch = localStorage.getItem("AccBranch");
                console.log(this.accBranch);
                this.depositForm.controls.transactionBranch.patchValue(this.accBranch);
            }
            if (this.brnflg == true && val == false) {
                console.log(this.accBranch);
                console.log("2nd if");
                this.depositForm.controls.transactionBranch.patchValue(this.accBranch);
                this.nearestBrn = true;
            }
        });
        this.depositForm.get('accountNumber').valueChanges.subscribe(val => {
            console.log("val", val);
            if (val) {
                this.accountEvent(val);
            }
        });
    }
    get f() { return this.depositForm.controls; }
    getCountrynameValues() {
        this.api.getCurrencyValues().subscribe((res) => {
            this.currencies = res;
            console.log(this.currencies);
            if (this.editMode) {
                const countryCode = this.currencies.filter((i) => { var _a, _b; return i.currencyCode === ((_b = (_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.transactionCurrency); });
                this.selectedCurrency = countryCode[0];
            }
            else {
                const countryCode = this.currencies.filter((i) => i.currencyCode === "INR");
                this.selectedCurrency = countryCode[0];
            }
        });
    }
    keyPress(event) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    numberOnlyValidation(event) {
        this.transAmt = event.target.value;
        console.log(event.target.value);
        this.IntValue = Math.floor(this.depositForm.value.transactionAmount).toString().length;
        if (this.IntValue > 1) {
            let value;
            value = this.depositForm.value.transactionAmount;
            this.transAmount = value;
            // 
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
            console.log(this.transAmount);
            this.cdr.markForCheck();
        }
        console.log(this.currentBalance);
        console.log(this.transAmt);
        this.transAmt = this.transAmt.toString().replace(/,/g, '');
        console.log(this.transAmt);
    }
    openToast1() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Transaction Amount should not exceed than Account Balance',
                duration: 2000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_5__.BranchComponent,
                id: "branchModal",
                componentProps: {}
            });
            modal.onDidDismiss().then((modelData) => {
                if (modelData !== null) {
                    let branch = modelData.data;
                    console.log('Modal Data for branch: ', modelData.data);
                    this.tokenCount = modelData.data.data.tokenCount;
                    this.depositForm.get('transactionBranch').patchValue(modelData.data['data'].branchName);
                }
            });
            return yield modal.present();
        });
    }
    handleChangeDepositType(event) {
        const eventVal = event.target.value;
        this.depositForm.get('depositType').setValue(eventVal);
        if (eventVal === 'self') {
            this.depositForm.get('personName').clearValidators();
            this.depositForm.get('personName').setValue('');
            this.depositForm.get('phoneNumber').clearValidators();
            this.depositForm.get('phoneNumber').setValue('');
        }
        else {
            this.depositForm.controls['personName'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
            this.depositForm.controls['phoneNumber'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
        }
    }
    compareWith(o1, o2) {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }
    selectCurrencyCode(e) {
        console.log("Checking final?", e);
        const filteredCurrency = this.currencies.filter((i) => i.currencyCode === e);
        this.selectedCountryCode = filteredCurrency[0].countryCode.toLowerCase();
        this.getExChangeRate(filteredCurrency[0].currencyCode);
    }
    getExChangeRate(currency) {
        this.api.getExchangeRate(this.accountInfo.accountCurrency).subscribe((res) => {
            var _a, _b, _c;
            const code = this.currencies.filter((x) => x.currencyCode == currency);
            let filteredCurrency = code[0].currencyCode;
            const rate = (_a = res === null || res === void 0 ? void 0 : res.rates) === null || _a === void 0 ? void 0 : _a[filteredCurrency];
            console.log("Rate?", rate);
            this.depositForm.get('exchangeRate').patchValue(rate);
            let updatedAmount = (Number((_b = this.depositForm.get('transactionAmount')) === null || _b === void 0 ? void 0 : _b.value) * Number((_c = this.depositForm.get('exchangeRate')) === null || _c === void 0 ? void 0 : _c.value)) + this.chargeAmount;
            if (!isNaN(Number(updatedAmount))) {
                console.log(Number(updatedAmount));
                this.depositForm.get('totalTransactionAmount').patchValue(Number(updatedAmount));
                this.cdr.markForCheck();
            }
        });
        this.updateTransAmount();
    }
    updateTransAmount() {
        var _a, _b;
        let updatedAmount = (Number((_a = this.depositForm.get('transactionAmount')) === null || _a === void 0 ? void 0 : _a.value) * Number((_b = this.depositForm.get('exchangeRate')) === null || _b === void 0 ? void 0 : _b.value)) + this.chargeAmount;
        if (!isNaN(Number(updatedAmount))) {
            console.log(Number(updatedAmount));
            this.depositForm.get('totalTransactionAmount').patchValue(Number(updatedAmount));
            this.cdr.markForCheck();
        }
    }
    goToHomepage() {
        this.depositForm.reset();
        this.router.navigate(['/dashboard']);
    }
    goToNextPage() {
        this.flag = false;
    }
    goToPreviousPage() {
        this.flag = true;
    }
    goToNextScreen(form) {
        var _a;
        this.api.setIndex({
            index: 'CHD'
        });
        form.transactionDate.toString();
        var date = new Date(form.transactionDate);
        console.log(date); //4/
        let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
        form.transactionDate = latest_date;
        form.customerId = this.customerId;
        form.productCode = this.productCode;
        form.accountType = this.accountDetails.accountType;
        form.tokenOrigin = this.tokenOrigin;
        form.accountCurrency = ((_a = this.customerDetails) === null || _a === void 0 ? void 0 : _a.currencyCode) || "";
        if (this.editMode) {
            form.appointmentId = this.routerData.data.appointmentId;
            form.operation = 'update';
        }
        if (this.depositForm.get('depositType').value === 'representative') {
            form.representativeInfo = [{
                    phoneNo: this.depositForm.get('phoneNumber').value,
                    personName: this.depositForm.get('personName').value,
                }];
        }
        console.log(form);
        this.accountNum = form.accountNumber;
        this.transactionAmount = form.transactionAmount;
        console.log(this.transactionAmount);
        this.transDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date(form.transactionDate)).format("DD-MM-YYYY").toString();
        // form.transactionTime = this.format24HrsTo12Hrs(form.transactionTime);
        localStorage.setItem("AccountNumber", this.accountNum);
        localStorage.setItem("TransactionDate", this.transDate);
        // localStorage.setItem("TransactionTime", form.transactionTime);
        localStorage.setItem("TransactionAmount", this.transactionAmount);
        localStorage.setItem("TransactionBranch", form.transactionBranch);
        form.isMobileTrans = true;
        console.log(this.transactionAmount);
        console.log(form);
        console.log("form::", form);
        if (this.editMode) {
            this.api.appointmentBooking(form).subscribe((resp) => {
                localStorage.setItem("TransactionTime", resp.transactionTime);
                this.cashDepositResp = resp;
                this.transactionId = this.cashDepositResp.transactionId;
                localStorage.setItem('AppointmentDetails', JSON.stringify(resp));
                console.log('transactionId::', this.transactionId);
                if (this.cashDepositResp === 200 || this.cashDepositResp !== null) {
                    this.shareDataService.shareTransactionId(this.transactionId);
                    this.depositForm.reset();
                    this.onClick(this.cashDepositResp);
                }
            });
        }
        else {
            form.transactionAmount = form.transactionAmount.toString().replace(/,/g, '');
            this.api.cashDepositSave(form).subscribe((resp) => {
                localStorage.setItem("TransactionTime", resp.transactionTime);
                this.cashDepositResp = resp;
                this.transactionId = this.cashDepositResp.transactionId;
                localStorage.setItem('AppointmentDetails', JSON.stringify(resp));
                console.log('transactionId::', this.transactionId);
                if (this.cashDepositResp === 200 || this.cashDepositResp !== null) {
                    this.shareDataService.shareTransactionId(this.transactionId);
                    this.depositForm.reset();
                    this.onClick(this.cashDepositResp);
                }
            });
        }
    }
    onClick(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _appointmentpopup_appointmentpopup_page__WEBPACK_IMPORTED_MODULE_8__.AppointmentpopupPage,
                componentProps: {
                    value: event,
                },
            });
            modal.onDidDismiss().then((res) => {
                this.routerData = res;
                console.log(this.routerData);
                this.flag = true;
            });
            return yield modal.present();
        });
    }
    accountEvent(e) {
        var _a, _b;
        this.isedit = false;
        let data = ((_a = e === null || e === void 0 ? void 0 : e.detail) === null || _a === void 0 ? void 0 : _a.value) ? (_b = e === null || e === void 0 ? void 0 : e.detail) === null || _b === void 0 ? void 0 : _b.value : e;
        console.log("event", data);
        this.api.accountBalance(data).subscribe((accbal) => {
            this.accountDetails = accbal;
            this.valueSet(accbal.currentBalance);
            this.currentBalance = accbal.amount;
            this.depositForm.controls.accountBalance.patchValue(accbal.amount);
            this.depositForm.controls.accountBranch.patchValue(accbal.accountBranch);
            localStorage.setItem("AccBranch", accbal.accountBranch);
            this.depositForm.controls.accountCurrency.patchValue(accbal.accountCurrency);
            if (accbal.transactionAmount != null || accbal.transactionAmount != undefined) {
                this.numberOnlyValidation(accbal.transactionAmount);
            }
            if (accbal.lastTransactions != null) {
                if (accbal.lastTransactions.length <= 2) {
                    this.depositForm.controls.transactionBranch.patchValue(accbal.accountBranch);
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
                        this.depositForm.controls.branchFlag.patchValue(false);
                        this.depositForm.controls.transactionBranch.patchValue(this.trnBrn);
                        console.log(localStorage.getItem("BranchFlag"));
                        this.brnflg = localStorage.getItem("BranchFlag");
                        this.brnflg = false;
                        this.nearestBrn = true;
                    }
                    else {
                        this.depositForm.controls.transactionBranch.patchValue(accbal.accountBranch);
                        this.nearestBrn = false;
                        this.brnflg = true;
                        console.log(this.nearestBrn);
                    }
                }
            }
            else {
                this.depositForm.controls.transactionBranch.patchValue(accbal.accountBranch);
                this.nearestBrn = false;
            }
        });
    }
    upsertAccount(filteredResponseSavingAccount) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        this.users = filteredResponseSavingAccount.custAccount;
        this.customerId = filteredResponseSavingAccount.customerId;
        this.curr = (0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.getCurrencySymbol)(filteredResponseSavingAccount.custAccount[0].accountCurrency, 'narrow');
        this.currentBalance = this.users[0].amount;
        this.selectedCountryCode = this.selectedCurrency.countryCode.toLowerCase();
        (_a = this.depositForm.get('transactionCurrency')) === null || _a === void 0 ? void 0 : _a.patchValue(this.selectedCurrency.currencyCode);
        if (this.editMode) {
            const data = (_b = this.routerData) === null || _b === void 0 ? void 0 : _b.data;
            (_c = this.depositForm.get('accountNumber')) === null || _c === void 0 ? void 0 : _c.patchValue(data === null || data === void 0 ? void 0 : data.accountNumber);
            (_d = this.depositForm.get('accountCurrency')) === null || _d === void 0 ? void 0 : _d.patchValue(data === null || data === void 0 ? void 0 : data.accountCurrency);
            (_e = this.depositForm.get('exchangeRate')) === null || _e === void 0 ? void 0 : _e.patchValue(data === null || data === void 0 ? void 0 : data.exchangeRate);
            (_f = this.depositForm.get('transactionAmount')) === null || _f === void 0 ? void 0 : _f.patchValue(data === null || data === void 0 ? void 0 : data.transactionAmount);
            (_g = this.depositForm.get('totalTransactionAmount')) === null || _g === void 0 ? void 0 : _g.patchValue(data === null || data === void 0 ? void 0 : data.totalTransactionAmount);
            (_h = this.depositForm.get('transactionBranch')) === null || _h === void 0 ? void 0 : _h.patchValue(data === null || data === void 0 ? void 0 : data.transactionBranch);
            (_j = this.depositForm.get('transactionDate')) === null || _j === void 0 ? void 0 : _j.patchValue(data === null || data === void 0 ? void 0 : data.transactionDate);
            (_k = this.depositForm.get('transactionTime')) === null || _k === void 0 ? void 0 : _k.patchValue(data === null || data === void 0 ? void 0 : data.transactionTime);
            this.depositForm.get('personName').patchValue((_m = (_l = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _l === void 0 ? void 0 : _l[0]) === null || _m === void 0 ? void 0 : _m.personName);
            this.depositForm.get('phoneNumber').patchValue((_p = (_o = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _o === void 0 ? void 0 : _o[0]) === null || _p === void 0 ? void 0 : _p.phoneNo);
            (_q = this.depositForm.get('remarks')) === null || _q === void 0 ? void 0 : _q.patchValue(data === null || data === void 0 ? void 0 : data.remarks);
            this.getChargeDetails();
        }
        else {
            if (this.accountInfo.accountId != null) {
                this.getChargeDetails();
                this.depositForm.get('accountNumber').patchValue(this.accountInfo.accountId);
            }
            else {
                this.depositForm.get('accountNumber').patchValue(this.users[0].accountId);
            }
            this.accountflag = this.users.length == 1 ? true : false;
            this.depositForm.controls.accountBranch.patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
            this.depositForm.get('transactionBranch').patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        }
        this.cdr.markForCheck();
    }
    getChargeDetails() {
        this.api.getChargeDetails(this.accountInfo.accountId).subscribe(resp => {
            var _a, _b;
            this.chargeAmount = (_a = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _a === void 0 ? void 0 : _a.amount;
            this.depositForm.get('totalChargeAmount').patchValue((_b = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _b === void 0 ? void 0 : _b.amount);
        }, err => console.log('Error: ', err));
    }
    validateDisablebutton(button) {
        this.depositForm.valueChanges.subscribe(v => {
            if (button === 'disable1') {
                if (v.accountBranch != '' && v.accountNumber != '' && v.transactionAmount != ''
                    && v.transactionCurrency != '' && v.transactionAmount != 0) {
                    this.submitted = false;
                }
                else {
                    this.submitted = true;
                }
            }
            if (button === 'disable2') {
                if (v.depositType === "self")
                    if (v.transactionBranch != '' && v.transactionDate != '' && v.transactionTime != '' && v.accountNo != '') {
                        this.submitted1 = false;
                    }
                if (v.depositType === "representative") {
                    if (v.transactionBranch != '' && v.transactionDate != '' && v.transactionTime != '' && v.accountNo != '' && v.personName != '' && v.phoneNumber != '') {
                        this.submitted1 = false;
                    }
                    else {
                        this.submitted1 = true;
                    }
                }
            }
        });
        if (this.editMode) {
            this.submitted1 = false;
        }
    }
    valueSet(currentBalance) {
        this.currentBalance = currentBalance;
    }
    previous1() {
        this.router.navigate(['dashboard']);
    }
    openToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Account Number is not existing for this customer Id',
                duration: 5000,
                position: 'middle'
            });
            toast.present();
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
                date: this.depositForm.get('transactionDate').value
            }
        }).then(modalResp => {
            modalResp.present();
            modalResp.onDidDismiss().then(res => {
                if (res.data != null) {
                    console.log(res);
                    this.depositForm.get('transactionTime').patchValue(res.data);
                }
            });
        });
    }
};
CashdepositPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef }
];
CashdepositPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-cashdeposit',
        template: _cashdeposit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cashdeposit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CashdepositPage);



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

/***/ 35318:
/*!********************************************************************!*\
  !*** ./src/app/pages/cashdeposit/cashdeposit.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".transactionAmounterrormsg {\n  color: red;\n  font-size: small;\n  padding-top: 7px;\n}\n\n.box {\n  font-weight: bold;\n  border-width: thin;\n  border-radius: 13px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  width: 100%;\n  height: 55px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.box ion-datetime {\n  font-weight: bold;\n}\n\n.chequeCard {\n  border-width: thin;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  width: 95%;\n  height: 100px;\n  display: inline-block;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.inputCard {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  position: relative;\n}\n\n.inputCard1 {\n  padding-top: 5px;\n}\n\n.inputCard1 ion-label {\n  letter-spacing: 0.5px;\n}\n\n.inputCard2 {\n  padding-top: 5px;\n}\n\n.inputCard2 ion-label {\n  letter-spacing: 0.5px;\n}\n\n.inputCard2 .box {\n  margin: 10px 0;\n}\n\n.textCard {\n  padding-left: 5%;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.icondate {\n  display: inline-block;\n}\n\nion-searchbar {\n  background-color: #f9fafb;\n}\n\nion-select {\n  font-family: \"Montserrat\" !important;\n  font-size: 14pt;\n  font-weight: bold;\n  letter-spacing: 0.4px;\n}\n\nion-text {\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-button {\n  width: 100%;\n  padding-left: 5%;\n  padding-right: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-input {\n  color: black !important;\n  font-size: 12pt;\n  font-weight: bold;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n  padding-left: 15px !important;\n}\n\nion-label {\n  font-size: 16px;\n}\n\nion-back-button {\n  color: rgb(73, 73, 226);\n  margin-bottom: 5%;\n  font-size: larger;\n  text-transform: none;\n}\n\nion-toolbar {\n  margin-top: 7%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  padding-bottom: 3%;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 5px;\n  padding-left: 20px;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.box7 .box {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n\n.backIcon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ioncontent {\n  height: 110%;\n  margin-top: -3%;\n}\n\n.ioncontent1 {\n  height: 135%;\n}\n\n.currency_row ion-select {\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477c6;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\n.crowdsCount {\n  padding-top: 8%;\n  padding-left: 5%;\n  font-size: 16px;\n  font-weight: bold;\n  color: #444;\n}\n\nion-header ion-buttons {\n  color: rgb(73, 73, 226);\n}\n\nion-header span {\n  font-weight: bold;\n}\n\nion-back-button {\n  color: #3477c6;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.forex_header {\n  padding-top: 4%;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.currency_row {\n  display: flex;\n  width: 100%;\n}\n\n.currency_row ion-select {\n  width: 100%;\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n\n.info_btn {\n  position: absolute;\n  right: 2%;\n  top: 22%;\n  color: #000;\n  font-size: 18px;\n  font-weight: 700;\n  border: 2px solid #000;\n  border-radius: 7px;\n  padding: 0 10px;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2hkZXBvc2l0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxRkFBQTtFQUVBLGlEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQURGOztBQUdFO0VBQ0UsaUJBQUE7QUFESjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFLRTtFQUlFLHFCQUFBO0FBTko7O0FBVUE7RUFDRSxnQkFBQTtBQVBGOztBQVNFO0VBSUUscUJBQUE7QUFWSjs7QUFhRTtFQUNFLGNBQUE7QUFYSjs7QUFlQTtFQUVFLGdCQUFBO0FBYkY7O0FBcUJBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFsQkY7O0FBc0JBO0VBQ0UsZ0JBQUE7QUFuQkY7O0FBdUJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBcEJGOztBQXVCQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQXBCRjs7QUF1QkE7RUFDRSxxQkFBQTtBQXBCRjs7QUF1QkE7RUFDRSx5QkFBQTtBQXBCRjs7QUF1QkE7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBcEJGOztBQXVCQTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUVBLG9DQUFBO0VBQ0EsNkJBQUE7QUFyQkY7O0FBeUJBO0VBQ0UsZUFBQTtBQXRCRjs7QUF5QkE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQXRCRjs7QUF5QkE7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQXRCRjs7QUF5QkE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUVBLHFCQUFBO0FBeEJGOztBQTJCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBeEJGOztBQTRCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUExQko7O0FBOEJBO0VBQ0UsbUJBQUE7RUFFQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUE1QkY7O0FBK0JBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUE1QkY7O0FBK0JBO0VBQ0UsWUFBQTtBQTVCRjs7QUFnQ0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQTdCSjs7QUFpQ0E7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUE5QkY7O0FBaUNBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQS9CRjs7QUE2Q0U7RUFDRSx1QkFBQTtBQTFDSjs7QUE4Q0U7RUFDRSxpQkFBQTtBQTVDSjs7QUFnREE7RUFDRSxjQUFBO0FBN0NGOztBQWdEQTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBN0NGOztBQWdEQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBN0NGOztBQWdEQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBN0NGOztBQStDRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQTdDSjs7QUFpREE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQTlDRiIsImZpbGUiOiJjYXNoZGVwb3NpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbnNhY3Rpb25BbW91bnRlcnJvcm1zZyB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcblxyXG4gIGlvbi1kYXRldGltZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbi5jaGVxdWVDYXJkIHtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjZDNkM2QzO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDQlO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbnB1dENhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmlucHV0Q2FyZDEge1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICAvLyBjb2xvcjogIzQ0NDtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0Q2FyZDIge1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICAvLyBjb2xvcjogIzQ0NDtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJveCB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0Q2FyZCB7XHJcbiAgLy8gcGFkZGluZy10b3A6IC02JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4vLyAgLmxhYmVsQ2FyZHtcclxuLy8gICAgICBjb2xvcjogZ3JheTtcclxuLy8gICAgICAvL2ZvbnQtc2l6ZTogMjBweDtcclxuLy8gIH1cclxuXHJcbi51bmRlcmxpbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIC8vIHBhZGRpbmctbGVmdDogNCU7XHJcbn1cclxuXHJcbi5pb24tcGFkZGluZy10b3Age1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAzJTtcclxufVxyXG5cclxuLmlvbi1wYWRkaW5nLXRvcDIge1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4uY2FuY2VsY2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDglO1xyXG4gIHBhZGRpbmctbGVmdDogNDQlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmJhY2tjYXJkIHtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0NyU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uaWNvbmRhdGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxufVxyXG5cclxuaW9uLXRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBvcGFjaXR5OiA3NSU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJwdDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gIGNvbG9yOiByZ2IoNzMsIDczLCAyMjYpO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgbWFyZ2luLXRvcDogNyU7XHJcbiAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI2QzZDNkMztcclxuICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbn1cclxuXHJcbm5neC1mbGFnLXBpY2tlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIC8vIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAvLyBwYWRkaW5nLXRvcDogNCU7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYm94NyB7XHJcbiAgcGFkZGluZy10b3A6IDAlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcblxyXG4gIC8vIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIC8vIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAuYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFja0ljb24ge1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgLy8gY29sb3I6IGJsdWU7XHJcbiAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uaW9uY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMTAlO1xyXG4gIG1hcmdpbi10b3A6IC0zJTtcclxufVxyXG5cclxuLmlvbmNvbnRlbnQxIHtcclxuICBoZWlnaHQ6IDEzNSU7XHJcbn1cclxuXHJcbi5jdXJyZW5jeV9yb3cge1xyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiAjMzQ3N2M2O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNyb3dkc0NvdW50IHtcclxuICAvLyBtYXJnaW4tbGVmdDogMWNtO1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzQ0NDtcclxufVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuLy8gICAuaW9uY29udGVudHtcclxuLy8gICAgIGhlaWdodDogMTMwJTtcclxuLy8gICAgIG1hcmdpbi10b3A6IC0zJTtcclxuLy8gICB9XHJcbi8vICAgLmlvbmNvbnRlbnQxe1xyXG4vLyAgICAgaGVpZ2h0OiAxNjUlO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgaW9uLWJ1dHRvbnMge1xyXG4gICAgY29sb3I6IHJnYig3MywgNzMsIDIyNik7XHJcbiAgICAvLyBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICBjb2xvcjogIzM0NzdjNjtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZm9yZXhfaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY3VycmVuY3lfcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBpb24tc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5mb19idG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMiU7XHJcbiAgdG9wOiAyMiU7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbn0iXX0= */";

/***/ }),

/***/ 57706:
/*!********************************************************************!*\
  !*** ./src/app/pages/cashdeposit/cashdeposit.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"flag\" class=\"ion-padding\">\r\n  <div>\r\n    <form [formGroup]=\"depositForm\">\r\n      <ion-item fill=\"outline\" class=\"my-1\">\r\n        <ion-label position=\"floating\" class=\"t-20\">Account Number*</ion-label>\r\n        <ion-select *ngIf=\"!accountflag\" [compareWith]=\"compareWith\" interface=\"popover\"\r\n          [interfaceOptions]=\"{'cssClass': 'wider-popover-acc-num'}\" formControlName=\"accountNumber\"\r\n          (ionChange)=\"accountEvent($event)\" ngDefaultControl>\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\">{{user.accountId}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-input mode=\"ios\" *ngIf=\"accountflag\" formControlName=\"accountNumber\" type=\"text\" readonly\r\n          (ionChange)=\"accountEvent($event)\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n\r\n      <div class=\"inputCard1 my-3\">\r\n        <ion-label position=\"stacked\">Account Balance : {{curr }} {{currentBalance}}\r\n        </ion-label>\r\n      </div>\r\n\r\n      <div class=\"inputCard1 my-3\">\r\n        <ion-label position=\"stacked\">Account Branch :\r\n          {{depositForm.controls.accountBranch.value}}</ion-label>\r\n      </div>\r\n\r\n      <div class=\"inputCard1 my-3\">\r\n        <ion-label position=\"stacked\">Account Currency :\r\n          {{depositForm.controls.accountCurrency.value}}</ion-label>\r\n      </div>\r\n\r\n      <mat-form-field class=\"full-width\" appearance=\"outline\" style=\"width: 100%;\">\r\n        <mat-label position=\"floating\" class=\"t-20\">Transaction Currency</mat-label>\r\n        <mat-select [(ngModel)]=\"transactionCurrency\" (ngModelChange)=\"selectCurrencyCode($event)\"\r\n          [ngModelOptions]=\"{standalone: true}\" formControlName=\"transactionCurrency\">\r\n          <mat-select-trigger class=\"selection-text\">\r\n            <ngx-flag-picker [selectedCountryCode]=\"selectedCountryCode\" [showFlags]=\"isShow\" [showLabels]=\"!isShow\"\r\n              [showArrow]=\"!isShow\" slot=\"start\">\r\n            </ngx-flag-picker>\r\n            <span class=\"selection-text\">\r\n              {{ depositForm.get('transactionCurrency')?.value }}\r\n            </span>\r\n          </mat-select-trigger>\r\n\r\n          <mat-option *ngFor=\"let currency of currencies\" [value]=\"currency.currencyCode\">\r\n            {{currency.currencyCode}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n\r\n      <ion-item fill=\"outline\">\r\n        <ion-label position=\"floating\">Transaction Amount*</ion-label>\r\n        <ion-input #myRef [(ngModel)]=\"transAmount\" (keyup)=\"updateTransAmount()\" formControlName=\"transactionAmount\"\r\n          type=\"text\" min=\"1\" (keyup)=\"numberOnlyValidation($event)\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item fill=\"outline\" class=\"my-3\"\r\n        *ngIf=\"selectedCountryCode && !depositForm.get('accountCurrency').value.toLowerCase().includes(selectedCountryCode)\">\r\n        <ion-label position=\"floating\">Exchange Rate</ion-label>\r\n        <ion-input placeholder=\"Exchange Rate\" formControlName=\"exchangeRate\" name=\"exchangeRate\" ngDefaultControl\r\n          readonly=\"true\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item fill=\"outline\" class=\"my-3\">\r\n        <ion-label position=\"floating\">Total Charge Amount*</ion-label>\r\n        <ion-input placeholder=\"Total Charge Amount\" name=\"chargeAMount\" formControlName=\"totalChargeAmount\"\r\n          name=\"totalchargeAmount\" ngDefaultControl readonly=\"true\"></ion-input>\r\n      </ion-item>\r\n\r\n\r\n      <ion-item fill=\"outline\" class=\"my-3\">\r\n        <ion-label position=\"floating\">Total Transaction Amount*</ion-label>\r\n        <ion-input placeholder=\"Placeholder\" placeholder=\"Total Transaction Amount\"\r\n          formControlName=\"totalTransactionAmount\" ngDefaultControl readonly=\"true\"></ion-input>\r\n        <span class=\"info_btn\">i</span>\r\n      </ion-item>\r\n\r\n\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" (click)=\"goToNextPage()\"\r\n            [disabled]=\"validateDisablebutton('disable1') || !transAmount || submitted\">\r\n            Next</ion-button>\r\n        </div>\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black\" (click)=\"goToHomepage()\">Cancel\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar>\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToPreviousPage()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!flag\" class=\"ion-padding\">\r\n  <div>\r\n    <form [formGroup]=\"depositForm\">\r\n      <!-- <div class=\"textCard\">\r\n            <ion-text>\r\n              <h5 style=\"color: gray;padding-left: 4%;\">Do you wish to perform this transaction in your home branch</h5>\r\n            </ion-text>\r\n          </div>\r\n  \r\n          <div class=\"inputCard2\">\r\n            <ion-radio-group>\r\n              <ion-row>\r\n               <ion-col>\r\n                 <ion-item lines=\"none\">\r\n                 <ion-radio mode=\"md\" value=\"buy\"></ion-radio>\r\n                 <ion-label position=\"start\" style=\"padding-left: 10px;\">yes</ion-label>\r\n                 </ion-item>\r\n                </ion-col>\r\n    \r\n               <ion-col>\r\n                 <ion-item lines=\"none\">\r\n                 <ion-radio mode=\"md\" value=\"sell\"></ion-radio>\r\n                 <ion-label style=\"padding-left: 10px;\">No</ion-label>\r\n                 </ion-item>\r\n               </ion-col>\r\n              </ion-row>\r\n            </ion-radio-group>\r\n         </div> -->\r\n\r\n      <div style=\"padding-left: 5%; padding-top: 8%; padding-right: 5%\">\r\n        <ion-label>Do you wish to perform this transaction in your home\r\n          branch?</ion-label>\r\n        <!-- <ion-label></ion-label> -->\r\n        <ion-radio-group name=\"branchFlags\" formControlName=\"branchFlag\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"start\">Yes</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagYes\" [value]=\"true\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label>No</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagNo\" [value]=\"false\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <a (click)=\"presentModal()\" [hidden]=\"!nearestBrn\" class=\"underline\">Click here to find the\r\n          nearest branch\r\n        </a>\r\n      </div>\r\n      <br />\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction Branch*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input appearence=\"none\" formControlName=\"transactionBranch\"\r\n              [readonly]=\"depositForm.get('branchFlag').value ? true : false\">\r\n            </ion-input>\r\n            <ion-icon *ngIf=\"depositForm.get('branchFlag').value == true\" name=\"home-outline\" color=\"primary\"\r\n              slot=\"end\"></ion-icon>\r\n            <ion-icon *ngIf=\"depositForm.get('branchFlag').value == false\" name=\"navigate-circle-outline\"\r\n              color=\"primary\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-note style=\"color: red; margin-left: 22px; top: 13px\"\r\n          *ngIf=\"f.transactionBranch.errors?.required && f.transactionBranch.touched\">\r\n          <small>Transaction Branch Required</small>\r\n        </ion-note>\r\n      </div>\r\n      <p class=\"crowdsCount\">\r\n        Number of Crowds : {{ tokenCount || '0' }}\r\n      </p>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction date*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-datetime-button datetime=\"datetime\" showTimeLabel=\"false\"></ion-datetime-button>\r\n            <ion-modal [keepContentsMounted]=\"true\">\r\n              <ng-template>\r\n                <ion-datetime presentation=\"date\" id=\"datetime\" [min]=\"minDate\" [max]=\"maxDate\"\r\n                  formControlName=\"transactionDate\" displayFormat=\"DDD. MMM DD, YY\" [showDefaultTitle]=\"true\"\r\n                  [showDefaultButtons]=\"true\" #datetime>\r\n                </ion-datetime>\r\n              </ng-template>\r\n            </ion-modal>\r\n            <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Time Slot*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input formControlName=\"transactionTime\" [readonly]=\"true\"></ion-input>\r\n            <ion-icon name=\"alarm-outline\" slot=\"end\" (click)=\"openPopup()\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard2 text-capitalize\">\r\n        <ion-label>Deposit type - {{depositForm.get('depositType').value}}*</ion-label>\r\n        <ion-card class=\"box text-white\">\r\n          <ion-segment\r\n            [value]=\"editMode && routerData?.data?.representativeInfo.length === 0 ? 'self' : 'representative'\"\r\n            mode=\"ios\" (ionChange)=\"handleChangeDepositType($event)\">\r\n            <ion-segment-button value=\"self\">\r\n              <ion-label>Self</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"representative\">\r\n              <ion-label>Representative</ion-label>\r\n            </ion-segment-button>\r\n          </ion-segment>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\" *ngIf=\"depositForm.get('depositType').value == 'representative'\">\r\n        <ion-label position=\"stacked\">Person Name*</ion-label>\r\n        <ion-input class=\"box\" formControlName=\"personName\" type=\"text\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\" *ngIf=\"depositForm.get('depositType').value == 'representative'\">\r\n        <ion-label position=\"stacked\">Phone No*</ion-label>\r\n        <ion-input class=\"box\" formControlName=\"phoneNumber\" (keypress)=\"keyPress($event)\" type=\"text\" minlength=\"10\">\r\n        </ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\" *ngIf=\"title == 'Cash Withdrawal' || title =='Cash Deposit'\">\r\n        <ion-label position=\"stacked\">Remark</ion-label>\r\n        <ion-input class=\"chequeCard\" formControlName=\"remarks\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" [disabled]=\"validateDisablebutton('disable2')  || submitted1\"\r\n            (click)=\"goToNextScreen(depositForm.value)\">Next</ion-button>\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black\" (click)=\"goToPreviousPage()\">Back\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cashdeposit_cashdeposit_module_ts.js.map