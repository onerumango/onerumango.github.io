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
/* harmony import */ var mat_currency_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mat-currency-format */ 73803);











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
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_3__.SharedMaterialModule,
            mat_currency_format__WEBPACK_IMPORTED_MODULE_10__.MatCurrencyFormatModule
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);

















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
    }
    ngOnInit() {
        var _a;
        if (this.router.getCurrentNavigation() != null) {
            this.routerData = this.router.getCurrentNavigation().extras.state;
            console.log("Values?", this.routerData);
            this.editMode = ((_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) ? true : false;
        }
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.customerId = sessionStorage.getItem('customer_id');
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
        this.onChanges();
        this.loadData();
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
    buildForm() {
        var _a, _b;
        this.depositForm = this.fb.group({
            transactionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            customerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            productCode: ['CHD', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            tokenOrigin: ['Mobile', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            accountBalance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            accountCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0)]],
            branchFlag: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            accountBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            isMobileTrans: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            depositType: [this.editMode && ((_b = (_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.representativeInfo.length) === 0 ? 'self' : 'representative', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
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
    }
    onScreenRefresh() {
        var _a, _b;
        this.editMode = ((_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) ? true : false;
        console.log((_b = this.routerData) === null || _b === void 0 ? void 0 : _b.data);
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.customerId = sessionStorage.getItem('customer_id');
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
        this.onChanges();
        this.loadData();
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
    onChanges() {
        this.depositForm.get('branchFlag').valueChanges.subscribe(val => {
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
    keyPress(event) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    numberOnlyValidation(event) {
        this.transAmt = event.target.value;
        console.log(this.transAmount);
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
    // compareWith(o1, o2) {
    //   return o1 && o2 ? o1.id === o2.id : o1 === o2;
    // }
    selectCurrencyCode(e) {
        var _a;
        console.log("Checking outsie?", e);
        console.log(typeof e);
        if (typeof e !== "undefined") {
            console.log("Checking inside?", e);
            console.log("Checking final?", this.currencies);
            const filteredCurrency = (_a = this.currencies) === null || _a === void 0 ? void 0 : _a.filter((i) => i.currencyCode === e);
            this.selectedCountryCode = filteredCurrency[0].countryCode.toLowerCase();
            this.getExChangeRate(filteredCurrency[0].currencyCode);
        }
        else {
            return;
        }
    }
    getExChangeRate(currency) {
        this.api.getExchangeRate(this.accountInfo.accountCurrency).subscribe((res) => {
            var _a, _b, _c;
            const code = this.currencies.filter((x) => x.currencyCode == currency);
            let filteredCurrency = code[0].currencyCode;
            const rate = (_a = res === null || res === void 0 ? void 0 : res.rates) === null || _a === void 0 ? void 0 : _a[filteredCurrency];
            this.depositForm.get('exchangeRate').patchValue(rate);
            if (!isNaN(Number(this.transAmount))) {
                let updatedAmount = (Number(this.transAmount) * Number((_b = this.depositForm.get('exchangeRate')) === null || _b === void 0 ? void 0 : _b.value)) + this.chargeAmount;
                if (!isNaN(Number(updatedAmount))) {
                    console.log(Number(updatedAmount));
                    let formatedAmount = this.shareDataService.formatCurrency(updatedAmount, (_c = this.depositForm.get('transactionCurrency')) === null || _c === void 0 ? void 0 : _c.value);
                    this.depositForm.get('totalTransactionAmount').patchValue(formatedAmount);
                    this.cdr.markForCheck();
                }
            }
        });
        this.updateTransAmount();
    }
    updateTransAmount() {
        var _a, _b;
        if (!isNaN(Number(this.transAmount))) {
            let updatedAmount = (Number(this.transAmount) * Number((_a = this.depositForm.get('exchangeRate')) === null || _a === void 0 ? void 0 : _a.value)) + this.chargeAmount;
            if (!isNaN(Number(updatedAmount))) {
                console.log(Number(updatedAmount));
                let formatedAmount = this.shareDataService.formatCurrency(updatedAmount, (_b = this.depositForm.get('transactionCurrency')) === null || _b === void 0 ? void 0 : _b.value);
                this.depositForm.get('totalTransactionAmount').patchValue(formatedAmount);
                this.cdr.markForCheck();
            }
        }
    }
    onKeyPress(event) {
        if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || event.keyCode == 32 || event.keyCode == 46) {
            return true;
        }
        else {
            return false;
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
        else {
            form.representativeInfo = [];
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
        // Total transaction convertion format
        let ttam = this.depositForm.value['totalTransactionAmount'].substring(1);
        form.totalTransactionAmount = ttam.replace(/,/g, '');
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
                this.flag = true;
                this.onScreenRefresh();
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
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
            let formatedAmount = this.shareDataService.formatCurrency(data === null || data === void 0 ? void 0 : data.totalTransactionAmount, data === null || data === void 0 ? void 0 : data.transactionCurrency);
            this.depositForm.get('totalTransactionAmount').patchValue(formatedAmount);
            (_g = this.depositForm.get('transactionBranch')) === null || _g === void 0 ? void 0 : _g.patchValue(data === null || data === void 0 ? void 0 : data.transactionBranch);
            (_h = this.depositForm.get('transactionDate')) === null || _h === void 0 ? void 0 : _h.patchValue(data === null || data === void 0 ? void 0 : data.transactionDate);
            (_j = this.depositForm.get('transactionTime')) === null || _j === void 0 ? void 0 : _j.patchValue(data === null || data === void 0 ? void 0 : data.transactionTime);
            this.depositForm.get('personName').patchValue((_l = (_k = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _k === void 0 ? void 0 : _k[0]) === null || _l === void 0 ? void 0 : _l.personName);
            this.depositForm.get('phoneNumber').patchValue((_o = (_m = data === null || data === void 0 ? void 0 : data.representativeInfo) === null || _m === void 0 ? void 0 : _m[0]) === null || _o === void 0 ? void 0 : _o.phoneNo);
            (_p = this.depositForm.get('remarks')) === null || _p === void 0 ? void 0 : _p.patchValue(data === null || data === void 0 ? void 0 : data.remarks);
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
                if (v.depositType === "self") {
                    if (v.transactionBranch != '' && v.transactionDate != '' && v.transactionTime != '') {
                        this.submitted1 = false;
                    }
                }
                if (v.depositType === "representative") {
                    if (v.transactionBranch != '' && v.transactionDate != '' && v.transactionTime != '' && v.personName != '' && v.phoneNumber.length == 10) {
                        this.submitted1 = false;
                    }
                    else {
                        this.submitted1 = true;
                    }
                }
            }
        });
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

/***/ 35318:
/*!********************************************************************!*\
  !*** ./src/app/pages/cashdeposit/cashdeposit.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".transactionAmounterrormsg {\n  color: red;\n  font-size: small;\n  padding-top: 7px;\n}\n\n.box {\n  font-weight: bold;\n  border-width: thin;\n  border-radius: 13px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  width: 100%;\n  height: 55px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.box ion-datetime {\n  font-weight: bold;\n}\n\n.chequeCard {\n  border-width: thin;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  width: 95%;\n  height: 100px;\n  display: inline-block;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.inputCard {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  position: relative;\n}\n\n.inputCard1 {\n  padding-top: 5px;\n}\n\n.inputCard1 ion-label {\n  color: #444;\n  letter-spacing: 0.5px;\n}\n\n.inputCard2 {\n  padding-top: 5px;\n}\n\n.inputCard2 ion-label {\n  color: #444;\n  letter-spacing: 0.5px;\n}\n\n.inputCard2 .box {\n  margin: 10px 0;\n}\n\n.textCard {\n  padding-left: 5%;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.icondate {\n  display: inline-block;\n}\n\nion-searchbar {\n  background-color: #f9fafb;\n}\n\nion-select {\n  font-family: \"Montserrat\" !important;\n  font-size: 14pt;\n  font-weight: bold;\n  letter-spacing: 0.4px;\n}\n\nion-text {\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-button {\n  width: 100%;\n  padding-left: 5%;\n  padding-right: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-input {\n  color: black !important;\n  font-size: 12pt;\n  font-weight: bold;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n  padding-left: 15px !important;\n}\n\nion-label {\n  font-size: 16px;\n}\n\nion-back-button {\n  color: rgb(73, 73, 226);\n  margin-bottom: 5%;\n  font-size: larger;\n  text-transform: none;\n}\n\nion-toolbar {\n  margin-top: 7%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  padding-bottom: 3%;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 5px;\n  padding-left: 20px;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.box7 .box {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n\n.backIcon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ioncontent {\n  height: 110%;\n  margin-top: -3%;\n}\n\n.ioncontent1 {\n  height: 135%;\n}\n\n.currency_row ion-select {\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477c6;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\n.crowdsCount {\n  padding-top: 8%;\n  padding-left: 5%;\n  font-size: 16px;\n  font-weight: bold;\n  color: #444;\n}\n\nion-header ion-buttons {\n  color: rgb(73, 73, 226);\n}\n\nion-header span {\n  font-weight: bold;\n}\n\nion-back-button {\n  color: #3477c6;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.forex_header {\n  padding-top: 4%;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.currency_row {\n  display: flex;\n  width: 100%;\n}\n\n.currency_row ion-select {\n  width: 100%;\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n\n.info_btn {\n  position: absolute;\n  right: 2%;\n  top: 22%;\n  color: #000;\n  font-size: 18px;\n  font-weight: 700;\n  border: 2px solid #000;\n  border-radius: 7px;\n  padding: 0 10px;\n  z-index: 2;\n}\n\n:host ::ng-deep .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0 !important;\n}\n\n:host ::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\nion-popover.trans-pop::part(content) {\n  --width: 275px !important;\n  border-radius: 10px !important;\n  --offset-x: -10px !important;\n}\n\nion-popover.trans-pop,\n.popover-arrow::after {\n  --background: #004C97 !important;\n}\n\nion-content.transpopover {\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  --color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2hkZXBvc2l0LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdJVEhVQiUyMFJFUE9TSVRPUllfVUlcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXGNhc2hkZXBvc2l0XFxjYXNoZGVwb3NpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUZBQUE7RUFFQSxpREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUNERjs7QURHRTtFQUNFLGlCQUFBO0FDREo7O0FES0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0VBRUEsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FES0U7RUFDRSxXQUFBO0VBR0EscUJBQUE7QUNMSjs7QURTQTtFQUNFLGdCQUFBO0FDTkY7O0FEUUU7RUFDRSxXQUFBO0VBR0EscUJBQUE7QUNSSjs7QURXRTtFQUNFLGNBQUE7QUNUSjs7QURhQTtFQUVFLGdCQUFBO0FDWEY7O0FEbUJBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNoQkY7O0FEb0JBO0VBQ0UsZ0JBQUE7QUNqQkY7O0FEcUJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDbEJGOztBRHFCQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2xCRjs7QURxQkE7RUFDRSxxQkFBQTtBQ2xCRjs7QURxQkE7RUFDRSx5QkFBQTtBQ2xCRjs7QURxQkE7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDbEJGOztBRHFCQTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUVBLG9DQUFBO0VBQ0EsNkJBQUE7QUNuQkY7O0FEdUJBO0VBQ0UsZUFBQTtBQ3BCRjs7QUR1QkE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ3BCRjs7QUR1QkE7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQ3BCRjs7QUR1QkE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUVBLHFCQUFBO0FDdEJGOztBRHlCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDdEJGOztBRDBCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUN4Qko7O0FENEJBO0VBQ0UsbUJBQUE7RUFFQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUMxQkY7O0FENkJBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUMxQkY7O0FENkJBO0VBQ0UsWUFBQTtBQzFCRjs7QUQ4QkU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QUQrQkE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUM1QkY7O0FEK0JBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQzdCRjs7QUQyQ0U7RUFDRSx1QkFBQTtBQ3hDSjs7QUQ0Q0U7RUFDRSxpQkFBQTtBQzFDSjs7QUQ4Q0E7RUFDRSxjQUFBO0FDM0NGOztBRDhDQTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDM0NGOztBRDhDQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDM0NGOztBRDhDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDM0NGOztBRDZDRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQzNDSjs7QUQrQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQzVDRjs7QUQrQ0E7RUFDRSxvQkFBQTtBQzVDRjs7QUQrQ0E7RUFDRSw0QkFBQTtBQzVDRjs7QUQrQ0E7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7QUM1Q0Y7O0FEZ0RBOztFQUVFLGdDQUFBO0FDN0NGOztBRGdEQTtFQUNFLHNEQUFBO0VBQ0EsZ0JBQUE7QUM3Q0YiLCJmaWxlIjoiY2FzaGRlcG9zaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYW5zYWN0aW9uQW1vdW50ZXJyb3Jtc2cge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBwYWRkaW5nLXRvcDogN3B4O1xyXG59XHJcblxyXG4uYm94IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG5cclxuICBpb24tZGF0ZXRpbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hlcXVlQ2FyZCB7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI2QzZDNkMztcclxuICB3aWR0aDogOTUlO1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiA0JTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG59XHJcblxyXG4uaW5wdXRDYXJkIHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbnB1dENhcmQxIHtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICAvLyBmb250LXNpemU6IDE2cHg7XHJcbiAgICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dENhcmQyIHtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICAvLyBmb250LXNpemU6IDE2cHg7XHJcbiAgICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB9XHJcblxyXG4gIC5ib3gge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dENhcmQge1xyXG4gIC8vIHBhZGRpbmctdG9wOiAtNiU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuLy8gIC5sYWJlbENhcmR7XHJcbi8vICAgICAgY29sb3I6IGdyYXk7XHJcbi8vICAgICAgLy9mb250LXNpemU6IDIwcHg7XHJcbi8vICB9XHJcblxyXG4udW5kZXJsaW5lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDQlO1xyXG59XHJcblxyXG4uaW9uLXBhZGRpbmctdG9wIHtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIC8vIHBhZGRpbmctbGVmdDogMyU7XHJcbn1cclxuXHJcbi5pb24tcGFkZGluZy10b3AyIHtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmNhbmNlbGNhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWxlZnQ6IDQ0JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5iYWNrY2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDglO1xyXG4gIHBhZGRpbmctbGVmdDogNDclO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmljb25kYXRlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmlvbi1zZWFyY2hiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRwdDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbn1cclxuXHJcbmlvbi10ZXh0IHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgb3BhY2l0eTogNzUlO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICBjb2xvcjogcmdiKDczLCA3MywgMjI2KTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIG1hcmdpbi10b3A6IDclO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcblxyXG5uZ3gtZmxhZy1waWNrZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICAvLyBwYWRkaW5nLXRvcDogMTRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgLy8gcGFkZGluZy10b3A6IDQlO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJveDcge1xyXG4gIHBhZGRpbmctdG9wOiAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG5cclxuICAvLyBtYXJnaW4tbGVmdDogMTBweDtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgLmJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxufVxyXG5cclxuLmJhY2tJY29uIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIC8vIGNvbG9yOiBibHVlO1xyXG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmlvbmNvbnRlbnQge1xyXG4gIGhlaWdodDogMTEwJTtcclxuICBtYXJnaW4tdG9wOiAtMyU7XHJcbn1cclxuXHJcbi5pb25jb250ZW50MSB7XHJcbiAgaGVpZ2h0OiAxMzUlO1xyXG59XHJcblxyXG4uY3VycmVuY3lfcm93IHtcclxuICBpb24tc2VsZWN0IHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxufVxyXG5cclxuLnRleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogIzM0NzdjNjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jcm93ZHNDb3VudCB7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDFjbTtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbn1cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbi8vICAgLmlvbmNvbnRlbnR7XHJcbi8vICAgICBoZWlnaHQ6IDEzMCU7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAtMyU7XHJcbi8vICAgfVxyXG4vLyAgIC5pb25jb250ZW50MXtcclxuLy8gICAgIGhlaWdodDogMTY1JTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIGlvbi1idXR0b25zIHtcclxuICAgIGNvbG9yOiByZ2IoNzMsIDczLCAyMjYpO1xyXG4gICAgLy8gZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgY29sb3I6ICMzNDc3YzY7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmZvcmV4X2hlYWRlciB7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmN1cnJlbmN5X3JvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgaW9uLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxufVxyXG5cclxuLmluZm9fYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDIlO1xyXG4gIHRvcDogMjIlO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXBvcG92ZXIudHJhbnMtcG9wOjpwYXJ0KGNvbnRlbnQpIHtcclxuICAtLXdpZHRoOiAyNzVweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAtLW9mZnNldC14OiAtMTBweCAhaW1wb3J0YW50O1xyXG4gIC8vIC0tb2Zmc2V0LXk6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tcG9wb3Zlci50cmFucy1wb3AsXHJcbi5wb3BvdmVyLWFycm93OjphZnRlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDA0Qzk3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50LnRyYW5zcG9wb3ZlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFBMkQsICMwMDRDOTcpO1xyXG4gIC0tY29sb3I6ICNmZmZmZmY7XHJcbn0iLCIudHJhbnNhY3Rpb25BbW91bnRlcnJvcm1zZyB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG59XG5cbi5ib3gge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgcmdiYSgwLCAwLCAwLCAwLjE2MDc4NDMxMzcpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xufVxuLmJveCBpb24tZGF0ZXRpbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNoZXF1ZUNhcmQge1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcbn1cblxuLmlucHV0Q2FyZCB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlucHV0Q2FyZDEge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmlucHV0Q2FyZDEgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICM0NDQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLmlucHV0Q2FyZDIge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmlucHV0Q2FyZDIgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICM0NDQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbi5pbnB1dENhcmQyIC5ib3gge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLnRleHRDYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLnVuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5pb24tcGFkZGluZy10b3Age1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4uaW9uLXBhZGRpbmctdG9wMiB7XG4gIHBhZGRpbmctdG9wOiA4JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLmNhbmNlbGNhcmQge1xuICBwYWRkaW5nLXRvcDogOCU7XG4gIHBhZGRpbmctbGVmdDogNDQlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5iYWNrY2FyZCB7XG4gIHBhZGRpbmctdG9wOiA4JTtcbiAgcGFkZGluZy1sZWZ0OiA0NyU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmljb25kYXRlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG59XG5cbmlvbi10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3BhY2l0eTogNzUlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIGNvbG9yOiByZ2IoNzMsIDczLCAyMjYpO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIG1hcmdpbi10b3A6IDclO1xuICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjZDNkM2QzO1xuICBwYWRkaW5nLWJvdHRvbTogMyU7XG59XG5cbm5neC1mbGFnLXBpY2tlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJveDcge1xuICBwYWRkaW5nLXRvcDogMCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xufVxuLmJveDcgLmJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4uYmFja0ljb24ge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBjb2xvcjogcmdiKDcwLCAxMTEsIDI1NCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmlvbmNvbnRlbnQge1xuICBoZWlnaHQ6IDExMCU7XG4gIG1hcmdpbi10b3A6IC0zJTtcbn1cblxuLmlvbmNvbnRlbnQxIHtcbiAgaGVpZ2h0OiAxMzUlO1xufVxuXG4uY3VycmVuY3lfcm93IGlvbi1zZWxlY3Qge1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi50ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjMzQ3N2M2O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xufVxuXG4uY3Jvd2RzQ291bnQge1xuICBwYWRkaW5nLXRvcDogOCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNDQ0O1xufVxuXG5pb24taGVhZGVyIGlvbi1idXR0b25zIHtcbiAgY29sb3I6IHJnYig3MywgNzMsIDIyNik7XG59XG5pb24taGVhZGVyIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6ICMzNDc3YzY7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5mb3JleF9oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogNCU7XG4gIHBhZGRpbmctYm90dG9tOiAzJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jdXJyZW5jeV9yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jdXJyZW5jeV9yb3cgaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5pbmZvX2J0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIlO1xuICB0b3A6IDIyJTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHotaW5kZXg6IDI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1wb3BvdmVyLnRyYW5zLXBvcDo6cGFydChjb250ZW50KSB7XG4gIC0td2lkdGg6IDI3NXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgLS1vZmZzZXQteDogLTEwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXBvcG92ZXIudHJhbnMtcG9wLFxuLnBvcG92ZXItYXJyb3c6OmFmdGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA0Qzk3ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50LnRyYW5zcG9wb3ZlciB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxQTJELCAjMDA0Qzk3KTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbn0iXX0= */";

/***/ }),

/***/ 57706:
/*!********************************************************************!*\
  !*** ./src/app/pages/cashdeposit/cashdeposit.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"flag\" class=\"ion-padding\">\r\n  <div>\r\n    <form *ngIf=\"depositForm\" [formGroup]=\"depositForm\">\r\n      <ion-item fill=\"outline\" class=\"my-1\">\r\n        <ion-label position=\"floating\" class=\"t-20\">Account Number*</ion-label>\r\n        <ion-select *ngIf=\"!accountflag\" [compareWith]=\"compareWith\" interface=\"popover\"\r\n          [interfaceOptions]=\"{'cssClass': 'wider-popover-acc-num'}\" formControlName=\"accountNumber\"\r\n          (ionChange)=\"accountEvent($event)\" ngDefaultControl>\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\">{{user.accountId}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-input mode=\"ios\" *ngIf=\"accountflag\" formControlName=\"accountNumber\" type=\"text\" readonly\r\n          (ionChange)=\"accountEvent($event)\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n\r\n      <div class=\"inputCard1 my-3\">\r\n        <ion-label position=\"stacked\">Account Balance : {{curr }} {{currentBalance}}\r\n        </ion-label>\r\n      </div>\r\n\r\n      <div class=\"inputCard1 my-3\">\r\n        <ion-label position=\"stacked\">Account Branch :\r\n          {{depositForm.controls.accountBranch.value}}</ion-label>\r\n      </div>\r\n\r\n      <div class=\"inputCard1 my-3\">\r\n        <ion-label position=\"stacked\">Account Currency :\r\n          {{depositForm.controls.accountCurrency.value}}</ion-label>\r\n      </div>\r\n\r\n      <mat-form-field class=\"full-width my-1\" appearance=\"outline\" style=\"width: 100%;\">\r\n        <mat-label>Transaction Currency</mat-label>\r\n        <mat-select [(ngModel)]=\"transactionCurrency\" (ngModelChange)=\"selectCurrencyCode($event)\"\r\n          [ngModelOptions]=\"{standalone: true}\" formControlName=\"transactionCurrency\">\r\n          <mat-select-trigger class=\"selection-text\">\r\n            <ngx-flag-picker [selectedCountryCode]=\"selectedCountryCode\" [showFlags]=\"isShow\" [showLabels]=\"!isShow\"\r\n              [showArrow]=\"!isShow\" slot=\"start\">\r\n            </ngx-flag-picker>\r\n            <span class=\"selection-text\">\r\n              {{ depositForm.get('transactionCurrency')?.value }}\r\n            </span>\r\n          </mat-select-trigger>\r\n\r\n          <mat-option *ngFor=\"let currency of currencies\" [value]=\"currency.currencyCode\">\r\n            {{currency.currencyCode}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"full-width\" appearance=\"outline\" class=\"my-3\" style=\"width: 100%;\">\r\n        <mat-label>Transaction Amount</mat-label>\r\n        <input matInput type=\"text\" mvndrMatCurrencyFormat (keyup)=\"updateTransAmount()\"\r\n          [currencyCode]=\"depositForm.get('transactionCurrency')?.value\" [(ngModel)]=\"transAmount\"\r\n          formControlName=\"transactionAmount\" (keyup)=\"numberOnlyValidation($event)\"\r\n          (keypress)=\"keyPressNumbers($event)\">\r\n      </mat-form-field>\r\n\r\n      <ion-item fill=\"outline\" class=\"my-3\"\r\n        *ngIf=\"selectedCountryCode && !depositForm.get('accountCurrency').value.toLowerCase().includes(selectedCountryCode)\">\r\n        <ion-label position=\"floating\">Exchange Rate</ion-label>\r\n        <ion-input placeholder=\"Exchange Rate\" formControlName=\"exchangeRate\" name=\"exchangeRate\" ngDefaultControl\r\n          readonly=\"true\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item fill=\"outline\" class=\"my-1\">\r\n        <ion-label position=\"floating\">Total Charge Amount*</ion-label>\r\n        <ion-input placeholder=\"Total Charge Amount\" name=\"chargeAMount\" formControlName=\"totalChargeAmount\"\r\n          name=\"totalchargeAmount\" ngDefaultControl readonly=\"true\"></ion-input>\r\n      </ion-item>\r\n\r\n\r\n      <ion-item fill=\"outline\" class=\"my-3\">\r\n        <ion-label position=\"floating\">Total Transaction Amount*</ion-label>\r\n        <ion-input placeholder=\"Placeholder\" placeholder=\"Total Transaction Amount\"\r\n          formControlName=\"totalTransactionAmount\" ngDefaultControl readonly=\"true\"></ion-input>\r\n        <span class=\"info_btn\" id=\"bottom-start\">i</span>\r\n        <ion-popover mode=\"ios\" size=\"auto\" arrow=\"true\" trigger=\"bottom-start\" side=\"bottom\" alignment=\"center\"\r\n          class=\"trans-pop\" reference=\"bottom-start\">\r\n          <ng-template>\r\n            <ion-content class=\"ion-padding transpopover\">\r\n              <p>Transaction Amount: {{ depositForm.get('transactionCurrency')?.value == 'INR' ? '₹' : '$' }}\r\n                {{ transAmount }} </p>\r\n              <p>Total Charge Amount:{{ depositForm.get('transactionCurrency')?.value == 'INR' ? '₹' : '$' }}\r\n                {{ depositForm.get('totalChargeAmount')?.value }}</p>\r\n              <hr style=\"background: #ffffff;\">\r\n              <p>Total Transaction Amount: {{ depositForm.get('totalTransactionAmount')?.value }}</p>\r\n            </ion-content>\r\n          </ng-template>\r\n        </ion-popover>\r\n      </ion-item>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" (click)=\"goToNextPage()\"\r\n            [disabled]=\"validateDisablebutton('disable1') || !transAmount || submitted\">\r\n            Next</ion-button>\r\n        </div>\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black\" (click)=\"goToHomepage()\">Cancel\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar>\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToPreviousPage()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!flag\" class=\"ion-padding\">\r\n  <div>\r\n    <form *ngIf=\"depositForm\" [formGroup]=\"depositForm\">\r\n      <!-- <div class=\"textCard\">\r\n            <ion-text>\r\n              <h5 style=\"color: gray;padding-left: 4%;\">Do you wish to perform this transaction in your home branch</h5>\r\n            </ion-text>\r\n          </div>\r\n  \r\n          <div class=\"inputCard2\">\r\n            <ion-radio-group>\r\n              <ion-row>\r\n               <ion-col>\r\n                 <ion-item lines=\"none\">\r\n                 <ion-radio mode=\"md\" value=\"buy\"></ion-radio>\r\n                 <ion-label position=\"start\" style=\"padding-left: 10px;\">yes</ion-label>\r\n                 </ion-item>\r\n                </ion-col>\r\n    \r\n               <ion-col>\r\n                 <ion-item lines=\"none\">\r\n                 <ion-radio mode=\"md\" value=\"sell\"></ion-radio>\r\n                 <ion-label style=\"padding-left: 10px;\">No</ion-label>\r\n                 </ion-item>\r\n               </ion-col>\r\n              </ion-row>\r\n            </ion-radio-group>\r\n         </div> -->\r\n\r\n      <div style=\"padding-left: 5%; padding-top: 8%; padding-right: 5%\">\r\n        <ion-label>Do you wish to perform this transaction in your home\r\n          branch?</ion-label>\r\n        <!-- <ion-label></ion-label> -->\r\n        <ion-radio-group name=\"branchFlags\" formControlName=\"branchFlag\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"start\">Yes</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagYes\" [value]=\"false\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label>No</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagNo\" [value]=\"true\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <a (click)=\"presentModal()\" [hidden]=\"!nearestBrn\" class=\"underline\">Click here to find the\r\n          nearest branch\r\n        </a>\r\n      </div>\r\n      <br />\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction Branch*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input appearence=\"none\" formControlName=\"transactionBranch\"\r\n              [readonly]=\"depositForm.get('branchFlag').value ? true : false\">\r\n            </ion-input>\r\n            <ion-icon *ngIf=\"depositForm.get('branchFlag').value == true\" name=\"home-outline\" color=\"primary\"\r\n              slot=\"end\"></ion-icon>\r\n            <ion-icon *ngIf=\"depositForm.get('branchFlag').value == false\" name=\"navigate-circle-outline\"\r\n              color=\"primary\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-note style=\"color: red; margin-left: 22px; top: 13px\"\r\n          *ngIf=\"f.transactionBranch.errors?.required && f.transactionBranch.touched\">\r\n          <small>Transaction Branch Required</small>\r\n        </ion-note>\r\n      </div>\r\n      <p class=\"crowdsCount\">\r\n        Number of Crowds : {{ tokenCount || '0' }}\r\n      </p>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction date*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-datetime-button datetime=\"datetime\" showTimeLabel=\"false\"></ion-datetime-button>\r\n            <ion-modal [keepContentsMounted]=\"true\">\r\n              <ng-template>\r\n                <ion-datetime presentation=\"date\" id=\"datetime\" [min]=\"minDate\" [max]=\"maxDate\"\r\n                  formControlName=\"transactionDate\" displayFormat=\"DDD. MMM DD, YY\" [showDefaultTitle]=\"true\"\r\n                  [showDefaultButtons]=\"true\" #datetime>\r\n                </ion-datetime>\r\n              </ng-template>\r\n            </ion-modal>\r\n            <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Time Slot*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input formControlName=\"transactionTime\" [readonly]=\"true\"></ion-input>\r\n            <ion-icon name=\"alarm-outline\" slot=\"end\" (click)=\"openPopup()\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard2 text-capitalize\">\r\n        <ion-label>Deposit type - {{depositForm.get('depositType').value}}*</ion-label>\r\n        <ion-card class=\"box text-white\">\r\n          <ion-segment\r\n            [value]=\"editMode && routerData?.data?.representativeInfo.length === 0 ? 'self' : 'representative'\"\r\n            mode=\"ios\" (ionChange)=\"handleChangeDepositType($event)\">\r\n            <ion-segment-button value=\"self\">\r\n              <ion-label>Self</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"representative\">\r\n              <ion-label>Representative</ion-label>\r\n            </ion-segment-button>\r\n          </ion-segment>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\" *ngIf=\"depositForm.get('depositType').value == 'representative'\">\r\n        <ion-label position=\"stacked\">Person Name*</ion-label>\r\n        <ion-input class=\"box\" formControlName=\"personName\" (keypress)=\"onKeyPress($event)\" type=\"text\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\" *ngIf=\"depositForm.get('depositType').value == 'representative'\">\r\n        <ion-label position=\"stacked\">Phone No*</ion-label>\r\n        <ion-input class=\"box\" formControlName=\"phoneNumber\" (keypress)=\"keyPress($event)\" type=\"text\" maxlength=\"10\">\r\n        </ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\" *ngIf=\"title == 'Cash Withdrawal' || title =='Cash Deposit'\">\r\n        <ion-label position=\"stacked\">Remark</ion-label>\r\n        <ion-input class=\"chequeCard\" formControlName=\"remarks\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" [disabled]=\"validateDisablebutton('disable2') || submitted1\"\r\n            (click)=\"goToNextScreen(depositForm.value)\">Next</ion-button>\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black\" (click)=\"goToPreviousPage()\">Back\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cashdeposit_cashdeposit_module_ts.js.map