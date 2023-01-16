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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cashdeposit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cashdeposit-routing.module */ 46712);
/* harmony import */ var _cashdeposit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cashdeposit.page */ 91477);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-flag-picker */ 96801);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);









let CashdepositPageModule = class CashdepositPageModule {
};
CashdepositPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _cashdeposit_routing_module__WEBPACK_IMPORTED_MODULE_0__.CashdepositPageRoutingModule,
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_8__.NgxFlagPickerModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
        declarations: [_cashdeposit_page__WEBPACK_IMPORTED_MODULE_1__.CashdepositPage]
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
        //transAmount:number;
        this.isedit = true;
        this.accountBranch = "Loita street";
        this.flag = true;
        this.minDate = new Date().toISOString();
        this.maxDate = "2025";
        this.users = [];
        this.trnBrn = null;
        this.accountflag = false;
        this.isShow = true;
        this.selectedCountryCode = '';
    }
    ngOnInit() {
        var _a, _b;
        this.getCountrynameValues();
        // console.log(this.router.getCurrentNavigation());
        if (this.router.getCurrentNavigation() != null) {
            this.routerData = this.router.getCurrentNavigation().extras.state;
            console.log('>>get router data -- :', this.routerData);
        }
        // if(this.router.getCurrentNavigation().extras.state){
        // }
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.customerId = sessionStorage.getItem('customer_id');
        // this.api.accountDropDown(this.customerId).subscribe((dropdown) => {
        //   console.log('backend dropdown', dropdown);
        //   this.users = dropdown;
        //   if (dropdown == null) {
        //     this.openToast();
        //   }
        // });
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
            depositType: [this.routerData ? ((_b = (_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.representativeInfo.length) === 0 ? 'self' : 'representative' : 'self', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
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
        //  let disableBtn = false;
        // this.depositForm.valueChanges 
        //             .subscribe((changedObj: any) => {
        //                 //  this.disableBtn = this.depositForm.valid;
        //                 console.log('transactionAmount :: ',this.depositForm.controls.transactionAmount)
        //             });
        //  console.log(this.countries);
        this.shareDataService.getAccountInfo.subscribe(data => {
            this.accountInfo = data;
            console.log(data);
            console.log(this.accountInfo);
            this.api.getNumberOfCrowd(this.accountInfo.accountBranch)
                .subscribe((data1) => {
                this.tokenCount = data1.tokenCount || '0';
            });
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
            this.savingAccountFun(resp);
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
            // if (val == false) {
            //   console.log("1st if");
            //   this.slideOneForm.get('transactionBranch').patchValue("");
            //   this.nearestBrn = true;
            // }
            if (this.brnflg == false && val == false) {
                console.log("1st if");
                this.depositForm.controls.transactionBranch.patchValue(this.trnBrn);
                this.nearestBrn = true;
            }
            else {
                console.log("else");
                this.nearestBrn = false;
                // this.slideOneForm.controls.transactionBranch.patchValue(this.trnBrn);
                this.accBranch = localStorage.getItem("AccBranch");
                console.log(this.accBranch);
                this.depositForm.controls.transactionBranch.patchValue(this.accBranch);
                // this.slideOneForm.get('transactionBranch').patchValue(this.customerDetails.custAccount[0].accountBranch);
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
        this.api.getCurrencyValues().subscribe((allCurrencyValues) => {
            this.currencies = allCurrencyValues;
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
        // if (this.IntValue > 3) {
        if (this.IntValue > 1) {
            //old changes
            // const pattern = /[0-9.,]/;
            // let inputChar = String.fromCharCode(event.charCode);
            // if (!pattern.test(inputChar)) {
            //   // invalid character, prevent input
            //   event.preventDefault();
            // }
            // new code added for transaction amount comma separator
            // 
            //  console.log(this.slideOneForm)
            //  console.log(event.value);
            //const pattern = /[0-9.,]/;
            let value;
            value = this.depositForm.value.transactionAmount;
            //let inputChar = String.fromCharCode(event.charCode);
            // ;
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
        // console.log(this.transAmt);
        console.log(this.currentBalance);
        console.log(this.transAmt);
        this.transAmt = this.transAmt.toString().replace(/,/g, '');
        console.log(this.transAmt);
        // if(parseFloat(this.currentBalance) < parseFloat(this.transAmt)){
        //   console.log("Bigger");
        //   this.openToast1();
        //   // this.snack.open(`Transaction Amount should not exceed than Account Balance`, 'OK', {
        //   //   duration: 2000,
        //   //   verticalPosition: 'top',
        //   //   horizontalPosition: 'right'
        //   // });
        // }
        //   // this.slideOneForm.controls['transactionAmount'].setValidators();
        //   else{
        //     return;
        //   }
    }
    method() {
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
    selectCurrencyCode(currency) {
        var _a;
        console.log(currency);
        console.log(this.currencyData);
        console.log(this.currencies);
        this.currencyData =
            this.currencies && this.currencies.find((x) => x.countryCode == currency);
        this.selectedCountryCode =
            this.currencyData && ((_a = this.currencyData) === null || _a === void 0 ? void 0 : _a.countryCode.toLowerCase());
        const currencyCode = this.currencies.find(x => x.currencyCode.includes(currency)).currencyCode;
        this.api.getExchangeRate('INR').subscribe((res) => {
            var _a;
            console.log('res', res);
            console.log('rate---- ', res.rates[currencyCode]);
            const rate = (_a = res === null || res === void 0 ? void 0 : res.rates) === null || _a === void 0 ? void 0 : _a[currencyCode].toString();
            console.log(rate.toString());
            this.depositForm.get('exchangeRate').patchValue(rate);
        });
        if (this.routerData) {
            // this.selectedCountryCode =
            //   this.routerData.data.transactionCurrency.toLowerCase();
            this.depositForm.controls.transactionCurrency.patchValue(this.routerData.data.transactionCurrency);
        }
    }
    changeSelectedCountryCode(value) {
        // this.selectedCountryCode = value;
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
        var _a, _b;
        this.api.setIndex({
            index: 'CHD'
        });
        form.transactionDate.toString();
        var date = new Date(form.transactionDate);
        console.log(date); //4/
        let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
        form.transactionDate = latest_date;
        // form.transactionTime=format(new Date(form.transactionTime), "HH:mm");
        this.currencyData = this.currencies.find(x => x.countryCode == form.transactionCurrency);
        form.transactionCurrency = (_a = this.currencyData) === null || _a === void 0 ? void 0 : _a.currencyCode;
        // form.transactionTime = format(new Date(form.transactionTime), 'hh:mm:ss a');
        form.customerId = this.customerId;
        form.productCode = this.productCode;
        form.accountType = this.accountDetails.accountType;
        form.tokenOrigin = this.tokenOrigin;
        form.accountCurrency = ((_b = this.customerDetails) === null || _b === void 0 ? void 0 : _b.currencyCode) || "";
        console.log(this.routerData);
        if (this.routerData) {
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
        if (this.routerData) {
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
                    // this.router.navigate(['token-generation', {transactionId: this.transactionId}]);
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
                    // this.router.navigate(['token-generation', {transactionId: this.transactionId}]);
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
                // this.router.getCurrentNavigation().extras.state=res;
                this.ngOnInit();
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
            console.log("appt details ====", accbal);
            this.accountDetails = accbal;
            // console.log('backend accbal', accbal.lastTransactions);
            this.valueSet(accbal.currentBalance);
            console.log('backend accbal', accbal);
            // console.log(this.slideOneForm.controls.transactionCurrency);
            this.currentBalance = accbal.amount;
            this.depositForm.controls.accountBalance.patchValue(accbal.amount);
            this.depositForm.controls.accountBranch.patchValue(accbal.accountBranch);
            localStorage.setItem("AccBranch", accbal.accountBranch);
            // console.log(this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch));
            // console.log(accbal);
            this.depositForm.controls.accountCurrency.patchValue(accbal.accountCurrency);
            // this.selectCurrencyCode(accbal.accountCurrency);
            //;
            // console.log(accbal.transactionAmount);
            if (accbal.transactionAmount != null || accbal.transactionAmount != undefined) {
                this.numberOnlyValidation(accbal.transactionAmount);
            }
            // console.log('backend accbal', accbal.lastTransactions);
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
            for (let i in this.currencies) {
                this.selectedCountryCode = (this.currencies[i].countryCode).toLowerCase();
                this.depositForm.controls.transactionCurrency.patchValue(this.currencies[i].countryCode);
            }
        });
    }
    savingAccountFun(filteredResponseSavingAccount) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
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
                this.depositForm.get('totalChargeAmount').patchValue((_b = resp === null || resp === void 0 ? void 0 : resp[0]) === null || _b === void 0 ? void 0 : _b.amount);
            }, err => console.log('Error: ', err));
            this.depositForm.get('accountNumber').patchValue(this.accountInfo.accountId);
        }
        else {
            this.depositForm.get('accountNumber').patchValue(this.users[0].accountId);
        }
        console.log('user::', this.users);
        this.accountflag = this.users.length == 1 ? true : false;
        this.selectedCountryCode = filteredResponseSavingAccount.countryCode.toLowerCase();
        this.depositForm.controls.accountBranch.patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        this.depositForm.controls.transactionCurrency.patchValue(filteredResponseSavingAccount.countryCode);
        this.depositForm.get('transactionBranch').patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        if (this.routerData) {
            console.log("routerdata", this.routerData);
            this.depositForm
                .get('accountNumber').patchValue((_b = (_a = this.routerData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.accountNumber);
            this.depositForm
                .get('transactionAmount').patchValue((_d = (_c = this.routerData) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.transactionAmount);
            this.depositForm
                .get('transactionCurrency').patchValue((_f = (_e = this.routerData) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.transactionCurrency);
            this.depositForm
                .get('transactionBranch').patchValue((_h = (_g = this.routerData) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.transactionBranch);
            this.depositForm
                .get('transactionDate').patchValue((_k = (_j = this.routerData) === null || _j === void 0 ? void 0 : _j.data) === null || _k === void 0 ? void 0 : _k.transactionDate);
            this.depositForm
                .get('transactionTime').patchValue((_m = (_l = this.routerData) === null || _l === void 0 ? void 0 : _l.data) === null || _m === void 0 ? void 0 : _m.transactionTime);
            this.depositForm
                .get('personName').patchValue((_r = (_q = (_p = (_o = this.routerData) === null || _o === void 0 ? void 0 : _o.data) === null || _p === void 0 ? void 0 : _p.representativeInfo) === null || _q === void 0 ? void 0 : _q[0]) === null || _r === void 0 ? void 0 : _r.personName);
            this.depositForm
                .get('phoneNumber').patchValue((_v = (_u = (_t = (_s = this.routerData) === null || _s === void 0 ? void 0 : _s.data) === null || _t === void 0 ? void 0 : _t.representativeInfo) === null || _u === void 0 ? void 0 : _u[0]) === null || _v === void 0 ? void 0 : _v.phoneNo);
        }
        this.cdr.markForCheck();
    }
    validateDisablebutton(button) {
        this.depositForm.valueChanges.subscribe(v => {
            // console.log("v:: ", v);
            if (button === 'disable1') {
                if (v.accountBranch != '' && v.accountNumber != '' && v.transactionAmount != ''
                    && v.transactionCurrency != '' && v.transactionAmount != 0) {
                    this.submitted = false;
                }
                else {
                    this.submitted = true;
                }
                // console.log(this.submitted);
            }
            if (button === 'disable2') {
                if (v.depositType === "self")
                    // if (v.transactionBranch != '' && v.transactionDate != '' && v.transactionTime != '' && v.accountNo != ''
                    // && this.depositForm.controls['personName'].valid && this.depositForm.controls['phoneNumber'].valid) {
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
        if (this.routerData) {
            this.submitted1 = false;
        }
    }
    changeTransactionAmount(event) {
        this.depositForm.get('totalTransactionAmount').patchValue((event.target.value.split(',').join('') - 0) + this.chargeAmount);
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

module.exports = "* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.transactionAmounterrormsg {\n  color: red;\n  font-size: small;\n  padding-top: 7px;\n}\n\n.box {\n  font-weight: bold;\n  border-width: thin;\n  border-radius: 13px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  width: 100%;\n  height: 55px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.box ion-datetime {\n  font-weight: bold;\n}\n\n.chequeCard {\n  border-width: thin;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  width: 95%;\n  height: 100px;\n  display: inline-block;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.inputCard {\n  padding-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n  position: relative;\n}\n\n.inputCard1 {\n  padding-top: 10%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.inputCard1 ion-label {\n  color: #444;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n\n.inputCard2 {\n  padding-top: 8%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.inputCard2 ion-label {\n  color: #444;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n\n.inputCard2 .box {\n  margin: 10px 0;\n}\n\n.textCard {\n  padding-left: 5%;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.icondate {\n  display: inline-block;\n}\n\nion-searchbar {\n  background-color: #f9fafb;\n}\n\nion-select {\n  font-family: \"Montserrat\" !important;\n  font-size: 14pt;\n  font-weight: bold;\n  letter-spacing: 0.4px;\n}\n\nion-text {\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-button {\n  width: 100%;\n  padding-left: 5%;\n  padding-right: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-input {\n  color: black !important;\n  font-size: 12pt;\n  font-weight: bold;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n  padding-left: 15px !important;\n}\n\nion-label {\n  color: #102245;\n  font-family: \"Montserrat\" !important;\n  font-size: 16px;\n  opacity: 75%;\n}\n\nion-back-button {\n  color: rgb(73, 73, 226);\n  margin-bottom: 5%;\n  font-size: larger;\n  text-transform: none;\n}\n\nion-toolbar {\n  margin-top: 7%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  padding-bottom: 3%;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 5px;\n  padding-left: 20px;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.box7 .box {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n\n.backIcon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ioncontent {\n  height: 110%;\n  margin-top: -3%;\n}\n\n.ioncontent1 {\n  height: 135%;\n}\n\n.currency_row ion-select {\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477c6;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\n.crowdsCount {\n  padding-top: 8%;\n  padding-left: 5%;\n  font-size: 16px;\n  font-weight: bold;\n  color: #444;\n}\n\nion-header ion-buttons {\n  color: rgb(73, 73, 226);\n}\n\nion-header span {\n  font-weight: bold;\n}\n\nion-back-button {\n  color: #3477c6;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.forex_header {\n  padding-top: 4%;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.currency_row {\n  display: flex;\n  width: 100%;\n}\n\n.currency_row ion-select {\n  width: 100%;\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n\n.info_btn {\n  position: absolute;\n  right: 8%;\n  top: 50%;\n  color: #000;\n  font-size: 18px;\n  font-weight: 700;\n  border: 2px solid #000;\n  border-radius: 7px;\n  padding: 0 10px;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2hkZXBvc2l0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG9DQUFBO0VBQ0EsNkNBQUE7QUFGRjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxRkFBQTtFQUlBLGlEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQUpGOztBQUtFO0VBQ0UsaUJBQUE7QUFISjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBR0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBU0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFQSjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBUUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFOSjs7QUFRRTtFQUNFLGNBQUE7QUFOSjs7QUFVQTtFQUVFLGdCQUFBO0FBUkY7O0FBZUE7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVpGOztBQWVBO0VBQ0UsZ0JBQUE7QUFaRjs7QUFnQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFiRjs7QUFlQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFaRjs7QUFjQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFYRjs7QUFhQTtFQUNFLHFCQUFBO0FBVkY7O0FBYUE7RUFDRSx5QkFBQTtBQVZGOztBQWFBO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQVZGOztBQVlBO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVRGOztBQVlBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUFURjs7QUFXQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFFQSxvQ0FBQTtFQUNBLDZCQUFBO0FBVEY7O0FBWUE7RUFDRSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVRGOztBQVdBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFSRjs7QUFXQTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FBUkY7O0FBVUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUVBLHFCQUFBO0FBVEY7O0FBV0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJGOztBQVdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVRKOztBQVlBO0VBQ0UsbUJBQUE7RUFFQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFWRjs7QUFZQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBVEY7O0FBV0E7RUFDRSxZQUFBO0FBUkY7O0FBV0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQVJKOztBQVdBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FBUkY7O0FBVUE7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBUkY7O0FBc0JFO0VBQ0UsdUJBQUE7QUFuQko7O0FBc0JFO0VBQ0UsaUJBQUE7QUFwQko7O0FBdUJBO0VBQ0UsY0FBQTtBQXBCRjs7QUFzQkE7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQW5CRjs7QUFxQkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQWxCRjs7QUFtQkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFqQko7O0FBb0JBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFqQkYiLCJmaWxlIjoiY2FzaGRlcG9zaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLW9wZXJhdGlvbntcclxuLy8gICAgIGhlaWdodDogODAwJTtcclxuLy8gfVxyXG4qIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICAvKiBBZGQgIWltcG9ydGFudCB0byBvdmVyd3JpdGUgYWxsIGVsZW1lbnRzICovXHJcbn1cclxuLnRyYW5zYWN0aW9uQW1vdW50ZXJyb3Jtc2cge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBwYWRkaW5nLXRvcDogN3B4O1xyXG59XHJcbi5ib3gge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KVxyXG4gICk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgaW9uLWRhdGV0aW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuLmNoZXF1ZUNhcmQge1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XHJcbiAgd2lkdGg6IDk1JTtcclxuICAvLyBtYXJnaW4tbGVmdDogNCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxufVxyXG5cclxuZm9ybTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dENhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmlucHV0Q2FyZDEge1xyXG4gIC8vICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIC8vICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgfVxyXG59XHJcbi5pbnB1dENhcmQyIHtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB9XHJcbiAgLmJveCB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0Q2FyZCB7XHJcbiAgLy8gcGFkZGluZy10b3A6IC02JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcbi8vICAubGFiZWxDYXJke1xyXG4vLyAgICAgIGNvbG9yOiBncmF5O1xyXG4vLyAgICAgIC8vZm9udC1zaXplOiAyMHB4O1xyXG4vLyAgfVxyXG5cclxuLnVuZGVybGluZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiA0JTtcclxufVxyXG4uaW9uLXBhZGRpbmctdG9wIHtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIC8vIHBhZGRpbmctbGVmdDogMyU7XHJcbn1cclxuXHJcbi5pb24tcGFkZGluZy10b3AyIHtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG4uY2FuY2VsY2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDglO1xyXG4gIHBhZGRpbmctbGVmdDogNDQlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYmFja2NhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWxlZnQ6IDQ3JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmljb25kYXRlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmlvbi1zZWFyY2hiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRwdDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbn1cclxuaW9uLXRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBvcGFjaXR5OiA3NSU7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5pb24tbGFiZWwge1xyXG4gIGNvbG9yOiAjMTAyMjQ1O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBvcGFjaXR5OiA3NSU7XHJcbn1cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICBjb2xvcjogcmdiKDczLCA3MywgMjI2KTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIG1hcmdpbi10b3A6IDclO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcbm5neC1mbGFnLXBpY2tlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIC8vIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAvLyBwYWRkaW5nLXRvcDogNCU7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbi5ib3g3IHtcclxuICBwYWRkaW5nLXRvcDogMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAvLyBtYXJnaW4tbGVmdDogMTBweDtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgLmJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxufVxyXG4uYmFja0ljb24ge1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgLy8gY29sb3I6IGJsdWU7XHJcbiAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5pb25jb250ZW50IHtcclxuICBoZWlnaHQ6IDExMCU7XHJcbiAgbWFyZ2luLXRvcDogLTMlO1xyXG59XHJcbi5pb25jb250ZW50MSB7XHJcbiAgaGVpZ2h0OiAxMzUlO1xyXG59XHJcbi5jdXJyZW5jeV9yb3cge1xyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG59XHJcbi50ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6ICMzNDc3YzY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG59XHJcbi5jcm93ZHNDb3VudCB7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDFjbTtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbn1cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbi8vICAgLmlvbmNvbnRlbnR7XHJcbi8vICAgICBoZWlnaHQ6IDEzMCU7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAtMyU7XHJcbi8vICAgfVxyXG4vLyAgIC5pb25jb250ZW50MXtcclxuLy8gICAgIGhlaWdodDogMTY1JTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIGlvbi1idXR0b25zIHtcclxuICAgIGNvbG9yOiByZ2IoNzMsIDczLCAyMjYpO1xyXG4gICAgLy8gZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gIGNvbG9yOiAjMzQ3N2M2O1xyXG59XHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uZm9yZXhfaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY3VycmVuY3lfcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbn1cclxuLmluZm9fYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDglO1xyXG4gIHRvcDogNTAlO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 57706:
/*!********************************************************************!*\
  !*** ./src/app/pages/cashdeposit/cashdeposit.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"flag\">\r\n  <div>\r\n    <form [formGroup]=\"depositForm\">\r\n      <div class=\"inputCard1\">\r\n        <ion-label>Account Number*</ion-label>\r\n        <!-- <ion-input class=\"box\"></ion-input> -->\r\n        <ion-select mode=\"ios\" *ngIf=\"!accountflag\" class=\"box\" (ionChange)=\"accountEvent($event)\"\r\n          formControlName=\"accountNumber\" ngDefaultControl [compareWith]=\"compareWith\">\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\">{{user.accountId}}</ion-select-option>\r\n        </ion-select>\r\n        <ion-input mode=\"ios\" *ngIf=\"accountflag\" class=\"box\" formControlName=\"accountNumber\" (ionChange)=\"accountEvent($event)\" \r\n        type=\"text\" readonly>\r\n        </ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\">Account Balance : {{curr }} {{currentBalance}}\r\n        </ion-label>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\">Account Branch :\r\n          {{depositForm.controls.accountBranch.value}}</ion-label>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\">Account Currency :\r\n          {{depositForm.controls.accountCurrency.value}}</ion-label>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label>Transaction Currency*</ion-label>\r\n      </div>\r\n      <div class=\"box7\">\r\n        <ion-card class=\"box\">\r\n          <div class=\"currency_row\">\r\n            <ngx-flag-picker [selectedCountryCode]=\"selectedCountryCode\" [showFlags]=\"isShow\" [showLabels]=\"!isShow\"\r\n              [showArrow]=\"!isShow\">\r\n            </ngx-flag-picker>\r\n            <ion-select mode=\"ios\" formControlName=\"transactionCurrency\" #code\r\n              (ionChange)=\"selectCurrencyCode(code.value)\">\r\n              <ion-select-option *ngFor=\"let currency of currencies\" [value]=\"currency.countryCode\">\r\n                {{currency.currencyCode}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\">Transaction Amount*</ion-label>\r\n        <ion-input class=\"box\" #myRef [(ngModel)]=\"transAmount\" (keyup)=\"changeTransactionAmount($event)\" formControlName=\"transactionAmount\" type=\"text\" min=\"1\"\r\n          (keyup)=\"numberOnlyValidation($event)\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard\" *ngIf=\"selectedCountryCode && !depositForm.get('accountCurrency').value.toLowerCase().includes(selectedCountryCode)\">\r\n        <ion-input class=\"box\" placeholder=\"Exchange Rate\" formControlName=\"exchangeRate\" name=\"exchangeRate\"\r\n          ngDefaultControl></ion-input>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-input class=\"box\" placeholder=\"Total Charge Amount\" name=\"chargeAMount\" formControlName=\"totalChargeAmount\" name=\"totalchargeAmount\"\r\n          ngDefaultControl></ion-input>\r\n      </div>\r\n      <div class=\"inputCard total_trans_row\">\r\n        <ion-input class=\"box\" placeholder=\"Total Transaction Amount\" formControlName=\"totalTransactionAmount\"\r\n          ngDefaultControl></ion-input>\r\n        <span class=\"info_btn\">i</span>\r\n      </div>\r\n\r\n      <!-- <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\">Account Branch*</ion-label>\r\n        <ion-input class=\"box\" formControlName=\"accountBranch\" readonly #accountBranch></ion-input>\r\n      </div> -->\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" (click)=\"goToNextPage()\"\r\n            [disabled]=\"validateDisablebutton('disable1')||!transAmount || submitted\">\r\n            Next</ion-button>\r\n        </div>\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black\" (click)=\"goToHomepage()\">Cancel\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar>\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToPreviousPage()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!flag\">\r\n  <div>\r\n    <form [formGroup]=\"depositForm\">\r\n      <!-- <div class=\"textCard\">\r\n            <ion-text>\r\n              <h5 style=\"color: gray;padding-left: 4%;\">Do you wish to perform this transaction in your home branch</h5>\r\n            </ion-text>\r\n          </div>\r\n  \r\n          <div class=\"inputCard2\">\r\n            <ion-radio-group>\r\n              <ion-row>\r\n               <ion-col>\r\n                 <ion-item lines=\"none\">\r\n                 <ion-radio mode=\"md\" value=\"buy\"></ion-radio>\r\n                 <ion-label position=\"start\" style=\"padding-left: 10px;\">yes</ion-label>\r\n                 </ion-item>\r\n                </ion-col>\r\n    \r\n               <ion-col>\r\n                 <ion-item lines=\"none\">\r\n                 <ion-radio mode=\"md\" value=\"sell\"></ion-radio>\r\n                 <ion-label style=\"padding-left: 10px;\">No</ion-label>\r\n                 </ion-item>\r\n               </ion-col>\r\n              </ion-row>\r\n            </ion-radio-group>\r\n         </div> -->\r\n\r\n      <div style=\"padding-left: 5%; padding-top: 8%; padding-right: 5%\">\r\n        <ion-label>Do you wish to perform this transaction in your home\r\n          branch?</ion-label>\r\n        <!-- <ion-label></ion-label> -->\r\n        <ion-radio-group name=\"branchFlags\" formControlName=\"branchFlag\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"start\">Yes</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagYes\" [value]=\"true\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label>No</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagNo\" [value]=\"false\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <a (click)=\"presentModal()\" [hidden]=\"!nearestBrn\" class=\"underline\">Click here to find the\r\n          nearest branch\r\n        </a>\r\n      </div>\r\n      <br />\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction Branch*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input appearence=\"none\" formControlName=\"transactionBranch\"\r\n              [readonly]=\"depositForm.get('branchFlag').value ? true : false\">\r\n            </ion-input>\r\n            <ion-icon *ngIf=\"depositForm.get('branchFlag').value == true\" name=\"home-outline\" color=\"primary\"\r\n              slot=\"end\"></ion-icon>\r\n            <ion-icon *ngIf=\"depositForm.get('branchFlag').value == false\" name=\"navigate-circle-outline\"\r\n              color=\"primary\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-note style=\"color: red; margin-left: 22px; top: 13px\"\r\n          *ngIf=\"f.transactionBranch.errors?.required && f.transactionBranch.touched\">\r\n          <small>Transaction Branch Required</small>\r\n        </ion-note>\r\n      </div>\r\n      <p class=\"crowdsCount\">\r\n        Number of Crowds : {{ tokenCount || '0' }}\r\n      </p>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction date*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-datetime-button datetime=\"datetime\" showTimeLabel=\"false\"></ion-datetime-button>\r\n            <ion-modal [keepContentsMounted]=\"true\">\r\n              <ng-template>\r\n                <ion-datetime presentation=\"date\" id=\"datetime\" [min]=\"minDate\" [max]=\"maxDate\"\r\n                  formControlName=\"transactionDate\" displayFormat=\"DDD. MMM DD, YY\" [showDefaultTitle]=\"true\" \r\n                  [showDefaultButtons]=\"true\"\r\n                  #datetime>\r\n                </ion-datetime>\r\n              </ng-template>\r\n            </ion-modal>\r\n            <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Time Slot*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input formControlName=\"transactionTime\" [readonly]=\"true\"></ion-input>\r\n            <ion-icon name=\"alarm-outline\" slot=\"end\" (click)=\"openPopup()\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard2 text-capitalize\">\r\n        <ion-label>Deposit type - {{depositForm.get('depositType').value}}*</ion-label>\r\n        <ion-card class=\"box text-white\">\r\n          <ion-segment\r\n            [value]=\"routerData ? routerData?.data?.representativeInfo.length === 0 ? 'self' : 'representative' : 'self'\"\r\n            mode=\"ios\" (ionChange)=\"handleChangeDepositType($event)\">\r\n            <ion-segment-button value=\"self\">\r\n              <ion-label>Self</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"representative\">\r\n              <ion-label>Representative</ion-label>\r\n            </ion-segment-button>\r\n          </ion-segment>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\" *ngIf=\"depositForm.get('depositType').value == 'representative'\">\r\n        <ion-label position=\"stacked\">Person Name*</ion-label>\r\n        <ion-input class=\"box\" formControlName=\"personName\" type=\"text\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\" *ngIf=\"depositForm.get('depositType').value == 'representative'\">\r\n        <ion-label position=\"stacked\">Phone No*</ion-label>\r\n        <ion-input class=\"box\" formControlName=\"phoneNumber\" (keypress)=\"keyPress($event)\" type=\"text\" minlength=\"10\">\r\n        </ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\" *ngIf=\"title == 'Cash Withdrawal' || title =='Cash Deposit'\">\r\n        <ion-label position=\"stacked\">Remark</ion-label>\r\n        <ion-input class=\"chequeCard\" formControlName=\"remarks\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" [disabled]=\"validateDisablebutton('disable2')  || submitted1\"\r\n            (click)=\"goToNextScreen(depositForm.value)\">Next</ion-button>\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black\" (click)=\"goToPreviousPage()\">Back\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cashdeposit_cashdeposit_module_ts.js.map