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
        this.maxDate = new Date(new Date().setDate(new Date().getDate() + 7)).toISOString();
        this.users = [];
        this.trnBrn = null;
        this.isShow = true;
        this.selectedCountryCode = '';
    }
    ngOnInit() {
        console.log(this.router);
        console.log(this.router.getCurrentNavigation());
        if (this.router.getCurrentNavigation() != null) {
            this.routerData = this.router.getCurrentNavigation().extras.state;
        }
        // if(this.router.getCurrentNavigation().extras.state){
        // }
        console.log('>>get router data -- :', this.routerData);
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.customerId = sessionStorage.getItem('customer_id');
        console.log("customer_id", this.customerId);
        this.getCountrynameValues();
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
            transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(/^[1-9]\d*$/)]],
            branchFlag: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            accountBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            isMobileTrans: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            transactionTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            depositType: ['representative', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            personName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
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
            version: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
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
            // if (this.submitted1 === false) {
            //   if (this.depositForm.get('personName').value != '' && this.depositForm.get('phoneNumber').value != '') {
            //     this.submitted1 = false;
            //   } else {
            //     this.submitted1 = true;
            //   }
            // }
        }
    }
    selectCurrencyCode(currency) {
        console.log(currency);
        this.currencyData = this.currencies.find(x => x.countryCode == currency);
        this.selectedCountryCode = this.currencyData.countryCode.toLowerCase();
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
        form.transactionCurrency = this.currencyData.currencyCode;
        // form.transactionTime = format(new Date(form.transactionTime), 'hh:mm:ss a');
        form.customerId = this.customerId;
        form.productCode = this.productCode;
        form.tokenOrigin = this.tokenOrigin;
        form.accountCurrency = this.accountDetails.accountCurrency;
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
        form.transactionTime = this.format24HrsTo12Hrs(form.transactionTime);
        localStorage.setItem("AccountNumber", this.accountNum);
        localStorage.setItem("TransactionDate", this.transDate);
        // localStorage.setItem("TransactionTime", form.transactionTime);
        localStorage.setItem("TransactionAmount", this.transactionAmount);
        localStorage.setItem("TransactionBranch", form.transactionBranch);
        form.transactionAmount = form.transactionAmount.toString().replace(/,/g, '');
        form.isMobileTrans = true;
        console.log(this.transactionAmount);
        console.log(form);
        console.log("form::", form);
        if (this.routerData) {
            this.api.appointmentBooking(form).subscribe((resp) => {
                localStorage.setItem("TransactionTime", resp.transactionTime);
                this.cashDepositResp = resp;
                this.transactionId = this.cashDepositResp.transactionId;
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
            this.api.cashDepositSave(form).subscribe((resp) => {
                localStorage.setItem("TransactionTime", resp.transactionTime);
                this.cashDepositResp = resp;
                this.transactionId = this.cashDepositResp.transactionId;
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
    accountEvent(event) {
        this.isedit = false;
        console.log("event", event.detail.value);
        this.api.accountBalance(event.detail.value).subscribe((accbal) => {
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
            // this.slideOneForm.controls.transactionCurrency.patchValue(accbal.accountCurrency);
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
                this.depositForm.controls.transactionCurrency.patchValue(this.currencies[i].countryCode);
            }
            // this.selectedCountryCode = (currency.code).toLowerCase();
            // this.users=dropdown;
            //8042666041 8042666055
        });
    }
    // accountEvent(event) {
    //   console.log("event", event.detail.value)
    //   this.api.accountBalance(event.detail.value).subscribe((accbal) => {
    //     console.log('backend accbal', accbal.currentBalance);
    //     this.valueSet(accbal.currentBalance);
    //     console.log('backend accbal', accbal.amount);
    //     this.currentBalance = accbal.amount;
    //     console.log(this.depositForm.controls)
    //     //;
    //     console.log(accbal.transactionAmount);
    //     this.depositForm.controls.accountBalance.patchValue(accbal.amount);
    //     this.depositForm.controls.accountBranch.patchValue(accbal.accountBranch);
    //     localStorage.setItem("AccBranch", accbal.accountBranch);
    //     // this.depositForm.controls.transactionCurrency.patchValue(accbal.countryCode);
    //     // this.selectCurrencyCode(accbal.accountCurrency);
    //     // this.depositForm.controls.transactionBranch.patchValue(accbal.accountBranch);
    //     console.log(accbal.transactionAmount);
    //     if (accbal.transactionAmount != null || accbal.transactionAmount != undefined) {
    //       this.numberOnlyValidation(accbal.transactionAmount);
    //     }
    //     if (accbal.lastTransactions != null) {
    //       if (accbal.lastTransactions.length <= 2) {
    //         this.depositForm.controls.transactionBranch.patchValue(accbal.accountBranch);
    //       }
    //       else {
    //         var brnCnt = 0;
    //         var brnOldCnt = 0;
    //         console.log("Else", accbal.lastTransactions);
    //         for (var i = 0; i < accbal.lastTransactions.length; i++) {
    //           if (accbal.lastTransactions[i].transactionBranch != null) {
    //             for (var n = 0; n < accbal.lastTransactions.length; n++) {
    //               if (accbal.lastTransactions[n].transactionBranch != null) {
    //                 if (accbal.lastTransactions[i].transactionBranch === accbal.lastTransactions[n].transactionBranch) {
    //                   brnCnt = brnCnt + 1;
    //                 }
    //               }
    //             }
    //           }
    //           if (brnOldCnt < brnCnt && brnCnt >= 2) {
    //             this.trnBrn = accbal.lastTransactions[i].transactionBranch;
    //             brnOldCnt = brnCnt;
    //           }
    //           brnCnt = 0;
    //         }
    //         if (this.trnBrn != null) {
    //           this.depositForm.controls.transactionBranch.patchValue(this.trnBrn);
    //         } else {
    //           this.depositForm.controls.transactionBranch.patchValue(accbal.accountBranch);
    //         }
    //       }
    //     }
    //     else {
    //       this.depositForm.controls.transactionBranch.patchValue(accbal.accountBranch);
    //     }
    //     // this.users=dropdown;
    //     for (let i in this.currencies) {
    //       this.selectedCountryCode = (this.currencies[i].countryCode).toLowerCase();
    //       this.depositForm.controls.transactionCurrency.patchValue(this.currencies[i].countryCode);
    //     }
    //   });
    // }
    savingAccountFun(filteredResponseSavingAccount) {
        console.log(filteredResponseSavingAccount);
        this.users = filteredResponseSavingAccount.custAccount;
        this.customerId = filteredResponseSavingAccount.customerId;
        this.curr = (0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.getCurrencySymbol)(filteredResponseSavingAccount.custAccount[0].accountCurrency, "narrow");
        this.currentBalance = this.users[0].amount;
        if (this.accountInfo.accountId != null) {
            this.depositForm.get('accountNumber').patchValue(this.accountInfo.accountId);
        }
        else {
            this.depositForm.get('accountNumber').patchValue(this.users[0].accountId);
        }
        this.selectedCountryCode = filteredResponseSavingAccount.countryCode.toLowerCase();
        this.depositForm.controls.accountBranch.patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        this.depositForm.controls.transactionCurrency.patchValue(filteredResponseSavingAccount.countryCode);
        this.depositForm.get('transactionBranch').patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        if (this.routerData) {
            this.depositForm
                .get('accountNumber').patchValue(this.routerData.data.accountNumber);
            this.depositForm
                .get('transactionAmount').patchValue(this.routerData.data.transactionAmount);
            this.depositForm
                .get('transactionCurrency').patchValue(this.routerData.data.transactionCurrency);
            this.depositForm
                .get('transactionBranch').patchValue(this.routerData.data.transactionBranch);
            this.depositForm
                .get('transactionDate').patchValue(this.routerData.data.transactionDate);
            this.depositForm
                .get('transactionTime').patchValue(this.routerData.data.transactionTime);
            this.depositForm
                .get('personName').patchValue(this.routerData.data.representativeInfo[0].personName);
            this.depositForm
                .get('phoneNumber').patchValue(this.routerData.data.representativeInfo[0].phoneNo);
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
                // if (v.transactionBranch != '' && v.transactionDate != '' && v.transactionTime != '' && v.accountNo != ''
                // && this.depositForm.controls['personName'].valid && this.depositForm.controls['phoneNumber'].valid) {
                if (v.transactionBranch != '' && v.transactionDate != '' && v.transactionTime != '' && v.accountNo != '') {
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

/***/ 35318:
/*!********************************************************************!*\
  !*** ./src/app/pages/cashdeposit/cashdeposit.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.transactionAmounterrormsg {\n  color: red;\n  font-size: small;\n  padding-top: 7px;\n}\n\n.box {\n  font-weight: bold;\n  border-width: thin;\n  border-radius: 13px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  width: 100%;\n  height: 55px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.box ion-datetime {\n  font-weight: bold;\n}\n\n.chequeCard {\n  border-width: thin;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  width: 95%;\n  margin-left: 4%;\n  height: 100px;\n  display: inline-block;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.inputCard1 {\n  padding-top: 10%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.inputCard1 ion-label {\n  color: #444;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n\n.inputCard2 {\n  padding-top: 8%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.inputCard2 ion-label {\n  color: #444;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n\n.inputCard2 .box {\n  margin: 10px 0;\n}\n\n.textCard {\n  padding-left: 5%;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.icondate {\n  display: inline-block;\n}\n\nion-searchbar {\n  background-color: #f9fafb;\n}\n\nion-select {\n  font-family: \"Montserrat\" !important;\n  font-size: 14pt;\n  font-weight: bold;\n  letter-spacing: 0.4px;\n}\n\nion-text {\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-button {\n  width: 100%;\n  padding-left: 5%;\n  padding-right: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-input {\n  color: black !important;\n  font-size: 14pt;\n  font-weight: bold;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: #102245;\n  font-family: \"Montserrat\" !important;\n  font-size: 16px;\n  opacity: 75%;\n}\n\nion-back-button {\n  color: rgb(73, 73, 226);\n  margin-bottom: 5%;\n  font-size: larger;\n  text-transform: none;\n}\n\nion-toolbar {\n  margin-top: 7%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  padding-bottom: 3%;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 5px;\n  padding-left: 20px;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.box7 .box {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n\n.backIcon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ioncontent {\n  height: 110%;\n  margin-top: -3%;\n}\n\n.ioncontent1 {\n  height: 135%;\n}\n\n.currency_row ion-select {\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477c6;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\n.crowdsCount {\n  padding-top: 8%;\n  padding-left: 5%;\n  font-size: 16px;\n  font-weight: bold;\n  color: #444;\n}\n\nion-header ion-buttons {\n  color: rgb(73, 73, 226);\n}\n\nion-header span {\n  font-weight: bold;\n}\n\nion-back-button {\n  color: #3477c6;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.forex_header {\n  padding-top: 4%;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.currency_row {\n  display: flex;\n  width: 100%;\n}\n\n.currency_row ion-select {\n  width: 100%;\n  font-size: large;\n  font-weight: bold;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2hkZXBvc2l0LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdEh1YiUyMFJlcG9zaXRvcnklMjBvbGRcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXGNhc2hkZXBvc2l0XFxjYXNoZGVwb3NpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxvQ0FBQTtFQUNBLDZDQUFBO0FDRkY7O0FESUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0RGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUZBQUE7RUFJQSxpREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUNKRjs7QURLRTtFQUNFLGlCQUFBO0FDSEo7O0FET0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0FDSkY7O0FETUE7RUFHRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURPRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0xKOztBRFFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURNRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0pKOztBRE1FO0VBQ0UsY0FBQTtBQ0pKOztBRFFBO0VBRUUsZ0JBQUE7QUNORjs7QURhQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVkY7O0FEYUE7RUFDRSxnQkFBQTtBQ1ZGOztBRGNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDWEY7O0FEYUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDVkY7O0FEWUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDVEY7O0FEV0E7RUFDRSxxQkFBQTtBQ1JGOztBRFdBO0VBQ0UseUJBQUE7QUNSRjs7QURXQTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNSRjs7QURVQTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNQRjs7QURVQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDUEY7O0FEU0E7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBRUEsb0NBQUE7QUNQRjs7QURTQTtFQUNFLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDTkY7O0FEUUE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0xGOztBRFFBO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURPQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBRUEscUJBQUE7QUNORjs7QURRQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDTEY7O0FEUUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDTko7O0FEU0E7RUFDRSxtQkFBQTtFQUVBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ1BGOztBRFNBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNORjs7QURRQTtFQUNFLFlBQUE7QUNMRjs7QURRRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDTEo7O0FEUUE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNMRjs7QURPQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNMRjs7QURtQkU7RUFDRSx1QkFBQTtBQ2hCSjs7QURtQkU7RUFDRSxpQkFBQTtBQ2pCSjs7QURvQkE7RUFDRSxjQUFBO0FDakJGOztBRG1CQTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDaEJGOztBRGtCQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDZkY7O0FEa0JBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNmRjs7QURnQkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNkSiIsImZpbGUiOiJjYXNoZGVwb3NpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAtb3BlcmF0aW9ue1xyXG4vLyAgICAgaGVpZ2h0OiA4MDAlO1xyXG4vLyB9XHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIC8qIEFkZCAhaW1wb3J0YW50IHRvIG92ZXJ3cml0ZSBhbGwgZWxlbWVudHMgKi9cclxufVxyXG4udHJhbnNhY3Rpb25BbW91bnRlcnJvcm1zZyB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuLmJveCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpXHJcbiAgKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICBpb24tZGF0ZXRpbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hlcXVlQ2FyZCB7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI2QzZDNkMztcclxuICB3aWR0aDogOTUlO1xyXG4gIG1hcmdpbi1sZWZ0OiA0JTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG59XHJcblxyXG5mb3JtOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uaW5wdXRDYXJkMSB7XHJcbiAgLy8gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgLy8gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB9XHJcbn1cclxuLmlucHV0Q2FyZDIge1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIH1cclxuICAuYm94IHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxufVxyXG5cclxuLnRleHRDYXJkIHtcclxuICAvLyBwYWRkaW5nLXRvcDogLTYlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuLy8gIC5sYWJlbENhcmR7XHJcbi8vICAgICAgY29sb3I6IGdyYXk7XHJcbi8vICAgICAgLy9mb250LXNpemU6IDIwcHg7XHJcbi8vICB9XHJcblxyXG4udW5kZXJsaW5lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDQlO1xyXG59XHJcbi5pb24tcGFkZGluZy10b3Age1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAzJTtcclxufVxyXG5cclxuLmlvbi1wYWRkaW5nLXRvcDIge1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcbi5jYW5jZWxjYXJkIHtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0NCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5iYWNrY2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDglO1xyXG4gIHBhZGRpbmctbGVmdDogNDclO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uaWNvbmRhdGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxufVxyXG5pb24tdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG9wYWNpdHk6IDc1JTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWxhYmVsIHtcclxuICBjb2xvcjogIzEwMjI0NTtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgb3BhY2l0eTogNzUlO1xyXG59XHJcbmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgY29sb3I6IHJnYig3MywgNzMsIDIyNik7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICBtYXJnaW4tdG9wOiA3JTtcclxuICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjZDNkM2QzO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcclxufVxyXG5uZ3gtZmxhZy1waWNrZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICAvLyBwYWRkaW5nLXRvcDogMTRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgLy8gcGFkZGluZy10b3A6IDQlO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYm94NyB7XHJcbiAgcGFkZGluZy10b3A6IDAlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIC5ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbn1cclxuLmJhY2tJY29uIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIC8vIGNvbG9yOiBibHVlO1xyXG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uaW9uY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMTAlO1xyXG4gIG1hcmdpbi10b3A6IC0zJTtcclxufVxyXG4uaW9uY29udGVudDEge1xyXG4gIGhlaWdodDogMTM1JTtcclxufVxyXG4uY3VycmVuY3lfcm93IHtcclxuICBpb24tc2VsZWN0IHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxufVxyXG4udGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiAjMzQ3N2M2O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG4uY3Jvd2RzQ291bnQge1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAxY207XHJcbiAgcGFkZGluZy10b3A6IDglO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4vLyAgIC5pb25jb250ZW50e1xyXG4vLyAgICAgaGVpZ2h0OiAxMzAlO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogLTMlO1xyXG4vLyAgIH1cclxuLy8gICAuaW9uY29udGVudDF7XHJcbi8vICAgICBoZWlnaHQ6IDE2NSU7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5pb24taGVhZGVyIHtcclxuICBpb24tYnV0dG9ucyB7XHJcbiAgICBjb2xvcjogcmdiKDczLCA3MywgMjI2KTtcclxuICAgIC8vIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB9XHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICBjb2xvcjogIzM0NzdjNjtcclxufVxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICBjb2xvcjogcmdiKDcwLCAxMTEsIDI1NCk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmZvcmV4X2hlYWRlciB7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmN1cnJlbmN5X3JvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBpb24tc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG59XHJcbiIsIioge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbiAgLyogQWRkICFpbXBvcnRhbnQgdG8gb3ZlcndyaXRlIGFsbCBlbGVtZW50cyAqL1xufVxuXG4udHJhbnNhY3Rpb25BbW91bnRlcnJvcm1zZyB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG59XG5cbi5ib3gge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgcmdiYSgwLCAwLCAwLCAwLjE2MDc4NDMxMzcpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xufVxuLmJveCBpb24tZGF0ZXRpbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNoZXF1ZUNhcmQge1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1sZWZ0OiA0JTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xufVxuXG5mb3JtOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pbnB1dENhcmQxIHtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG4uaW5wdXRDYXJkMSBpb24tbGFiZWwge1xuICBjb2xvcjogIzQ0NDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uaW5wdXRDYXJkMiB7XG4gIHBhZGRpbmctdG9wOiA4JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG4uaW5wdXRDYXJkMiBpb24tbGFiZWwge1xuICBjb2xvcjogIzQ0NDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuLmlucHV0Q2FyZDIgLmJveCB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4udGV4dENhcmQge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4udW5kZXJsaW5lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmlvbi1wYWRkaW5nLXRvcCB7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbi5pb24tcGFkZGluZy10b3AyIHtcbiAgcGFkZGluZy10b3A6IDglO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uY2FuY2VsY2FyZCB7XG4gIHBhZGRpbmctdG9wOiA4JTtcbiAgcGFkZGluZy1sZWZ0OiA0NCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJhY2tjYXJkIHtcbiAgcGFkZGluZy10b3A6IDglO1xuICBwYWRkaW5nLWxlZnQ6IDQ3JTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaWNvbmRhdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbn1cblxuaW9uLXRleHQge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvcGFjaXR5OiA3NSU7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMxMDIyNDU7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG9wYWNpdHk6IDc1JTtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHJnYig3MywgNzMsIDIyNik7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XG4gIHBhZGRpbmctYm90dG9tOiAzJTtcbn1cblxubmd4LWZsYWctcGlja2VyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uYm94NyB7XG4gIHBhZGRpbmctdG9wOiAwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG4uYm94NyAuYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5iYWNrSWNvbiB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uaW9uY29udGVudCB7XG4gIGhlaWdodDogMTEwJTtcbiAgbWFyZ2luLXRvcDogLTMlO1xufVxuXG4uaW9uY29udGVudDEge1xuICBoZWlnaHQ6IDEzNSU7XG59XG5cbi5jdXJyZW5jeV9yb3cgaW9uLXNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnRleHQge1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICMzNDc3YzY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG59XG5cbi5jcm93ZHNDb3VudCB7XG4gIHBhZGRpbmctdG9wOiA4JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM0NDQ7XG59XG5cbmlvbi1oZWFkZXIgaW9uLWJ1dHRvbnMge1xuICBjb2xvcjogcmdiKDczLCA3MywgMjI2KTtcbn1cbmlvbi1oZWFkZXIgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogIzM0NzdjNjtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBjb2xvcjogcmdiKDcwLCAxMTEsIDI1NCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmZvcmV4X2hlYWRlciB7XG4gIHBhZGRpbmctdG9wOiA0JTtcbiAgcGFkZGluZy1ib3R0b206IDMlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmN1cnJlbmN5X3JvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmN1cnJlbmN5X3JvdyBpb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbn0iXX0= */";

/***/ }),

/***/ 57706:
/*!********************************************************************!*\
  !*** ./src/app/pages/cashdeposit/cashdeposit.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<!-- <app-operation [title] = \"cashWithdrawal\"></app-operation> -->\r\n<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"flag\">\r\n  <div>\r\n    <form [formGroup]=\"depositForm\">\r\n      <div class=\"inputCard1\">\r\n        <ion-label>Account Number*</ion-label>\r\n        <!-- <ion-input class=\"box\"></ion-input> -->\r\n        <ion-select\r\n          mode=\"ios\"\r\n          [compareWith]=\"compareWith\"\r\n          class=\"box\"\r\n          (ionChange)=\"accountEvent($event)\"\r\n          formControlName=\"accountNumber\"\r\n          ngDefaultControl\r\n        >\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\"\r\n            >{{user.accountId}}</ion-select-option\r\n          >\r\n        </ion-select>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\"\r\n          >Account Balance : {{curr }} {{currentBalance}}\r\n        </ion-label>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\"\r\n          >Account Branch :\r\n          {{depositForm.controls.accountBranch.value}}</ion-label\r\n        >\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label>Transaction Currency*</ion-label>\r\n      </div>\r\n      <div class=\"box7\">\r\n        <ion-card class=\"box\">\r\n          <div class=\"currency_row\">\r\n            <ngx-flag-picker\r\n              [selectedCountryCode]=\"selectedCountryCode\"\r\n              [showFlags]=\"isShow\"\r\n              [showLabels]=\"!isShow\"\r\n              [showArrow]=\"!isShow\"\r\n            >\r\n            </ngx-flag-picker>\r\n            <ion-select\r\n              mode=\"ios\"\r\n              [compareWith]=\"compareWith\"\r\n              formControlName=\"transactionCurrency\"\r\n              #code\r\n              (ionChange)=\"selectCurrencyCode(code.value)\"\r\n            >\r\n              <ion-select-option\r\n                *ngFor=\"let currency of currencies\"\r\n                [value]=\"currency.countryCode\"\r\n              >\r\n                {{currency.currencyCode}}\r\n                <!-- {{currency.currencyCode + ' : ' +\r\n                  currency.countryName.toUpperCase()}} -->\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\">Transaction Amount*</ion-label>\r\n        <ion-input\r\n          class=\"box\"\r\n          #myRef\r\n          [(ngModel)]=\"transAmount\"\r\n          formControlName=\"transactionAmount\"\r\n          type=\"text\"\r\n          min=\"1\"\r\n          (keyup)=\"numberOnlyValidation($event)\"\r\n        ></ion-input>\r\n      </div>\r\n\r\n      <!-- <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\">Account Branch*</ion-label>\r\n        <ion-input class=\"box\" formControlName=\"accountBranch\" readonly #accountBranch></ion-input>\r\n      </div> -->\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            (click)=\"goToNextPage()\"\r\n            [disabled]=\"validateDisablebutton('disable1')||!transAmount || submitted\"\r\n          >\r\n            Next</ion-button\r\n          >\r\n        </div>\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            fill=\"clear\"\r\n            style=\"color: black\"\r\n            (click)=\"goToHomepage()\"\r\n            >Cancel\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar>\r\n    <ion-icon\r\n      class=\"backIcon\"\r\n      name=\"chevron-back-outline\"\r\n      (click)=\"goToPreviousPage()\"\r\n    ></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!flag\">\r\n  <div>\r\n    <form [formGroup]=\"depositForm\">\r\n      <!-- <div class=\"textCard\">\r\n            <ion-text>\r\n              <h5 style=\"color: gray;padding-left: 4%;\">Do you wish to perform this transaction in your home branch</h5>\r\n            </ion-text>\r\n          </div>\r\n  \r\n          <div class=\"inputCard2\">\r\n            <ion-radio-group>\r\n              <ion-row>\r\n               <ion-col>\r\n                 <ion-item lines=\"none\">\r\n                 <ion-radio mode=\"md\" value=\"buy\"></ion-radio>\r\n                 <ion-label position=\"start\" style=\"padding-left: 10px;\">yes</ion-label>\r\n                 </ion-item>\r\n                </ion-col>\r\n    \r\n               <ion-col>\r\n                 <ion-item lines=\"none\">\r\n                 <ion-radio mode=\"md\" value=\"sell\"></ion-radio>\r\n                 <ion-label style=\"padding-left: 10px;\">No</ion-label>\r\n                 </ion-item>\r\n               </ion-col>\r\n              </ion-row>\r\n            </ion-radio-group>\r\n         </div> -->\r\n\r\n      <div style=\"padding-left: 5%; padding-top: 8%; padding-right: 5%\">\r\n        <ion-label\r\n          >Do you wish to perform this transaction in your home\r\n          branch?</ion-label\r\n        >\r\n        <!-- <ion-label></ion-label> -->\r\n        <ion-radio-group name=\"branchFlags\" formControlName=\"branchFlag\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"start\">Yes</ion-label>\r\n                <ion-radio\r\n                  mode=\"md\"\r\n                  item-left\r\n                  name=\"flagYes\"\r\n                  [value]=\"true\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label>No</ion-label>\r\n                <ion-radio\r\n                  mode=\"md\"\r\n                  item-left\r\n                  name=\"flagNo\"\r\n                  [value]=\"false\"\r\n                ></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-radio-group>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-router-link\r\n          (click)=\"presentModal()\"\r\n          [hidden]=\"!nearestBrn\"\r\n          class=\"underline\"\r\n          >Click here to find the nearest branch</ion-router-link\r\n        >\r\n      </div>\r\n      <br />\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction Branch*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input\r\n              appearence=\"none\"\r\n              formControlName=\"transactionBranch\"\r\n              [readonly]=\"depositForm.get('branchFlag').value ? true : false\"\r\n            >\r\n            </ion-input>\r\n            <ion-icon\r\n              *ngIf=\"depositForm.get('branchFlag').value == true\"\r\n              name=\"home-outline\"\r\n              color=\"primary\"\r\n              slot=\"end\"\r\n            ></ion-icon>\r\n            <ion-icon\r\n              *ngIf=\"depositForm.get('branchFlag').value == false\"\r\n              name=\"navigate-circle-outline\"\r\n              color=\"primary\"\r\n              slot=\"end\"\r\n            ></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n        <ion-note\r\n          style=\"color: red; margin-left: 22px; top: 13px\"\r\n          *ngIf=\"f.transactionBranch.errors?.required && f.transactionBranch.touched\"\r\n        >\r\n          <small>Transaction Branch Required</small>\r\n        </ion-note>\r\n      </div>\r\n      <p class=\"crowdsCount\">\r\n        Number of Crowds : {{ tokenCount || '0' }}\r\n      </p>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Transaction date*</ion-label>\r\n        <ion-card class=\"box\">\r\n          \r\n          <ion-item lines=\"none\">\r\n            <ion-datetime-button datetime=\"datetime\" showTimeLabel=\"false\"></ion-datetime-button>\r\n            <ion-modal [keepContentsMounted]=\"true\" > \r\n              <ng-template>\r\n                <ion-datetime presentation=\"date\" id=\"datetime\" [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"transactionDate\" displayFormat=\"DDD. MMM DD, YY\"></ion-datetime>\r\n              </ng-template>\r\n            </ion-modal>\r\n            <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n           </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label>Time Slot*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-input formControlName=\"transactionTime\"></ion-input>\r\n            <!-- <ion-datetime displayFormat=\"hh:mm A\"  placeholder=\"Select time slot\" formControlName=\"transactionTime\"></ion-datetime> -->\r\n            <ion-icon\r\n              name=\"alarm-outline\"\r\n              slot=\"end\"\r\n              (click)=\"openPopup()\"\r\n            ></ion-icon>\r\n\r\n            <!-- <ion-datetime displayFormat=\"hh:mm A\" placeholder=\" Select Time Slot\" formControlName=\"transactionTime\">\r\n            </ion-datetime> -->\r\n            <!-- <ion-icon name=\"alarm-outline\" slot=\"end\"></ion-icon> -->\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard2 text-capitalize\">\r\n        <ion-label>Deposit type*</ion-label>\r\n        <ion-card class=\"box text-white\">\r\n          <ion-segment value=\"representative\" mode=\"ios\" (ionChange)=\"handleChangeDepositType($event)\">\r\n            <ion-segment-button value=\"self\">\r\n              <ion-label>Self</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"representative\">\r\n              <ion-label>Representative</ion-label>\r\n            </ion-segment-button>\r\n          </ion-segment>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\" *ngIf=\"depositForm.get('depositType').value !== 'self'\">\r\n        <ion-label position=\"stacked\">Person Name*</ion-label>\r\n        <ion-input class=\"box\" formControlName=\"personName\" type=\"text\"></ion-input>\r\n      </div>\r\n      \r\n      <div class=\"inputCard2\" *ngIf=\"depositForm.get('depositType').value !== 'self'\">\r\n        <ion-label position=\"stacked\">Phone No*</ion-label>\r\n        <ion-input class=\"box\" formControlName=\"phoneNumber\" (keypress)=\"keyPress($event)\" type=\"text\" minlength=\"10\">\r\n        </ion-input>\r\n      </div>\r\n\r\n      <div\r\n        class=\"inputCard2\"\r\n        *ngIf=\"title == 'Cheque Withdrawal' || title =='Cheque Deposit'\"\r\n      >\r\n        <ion-label position=\"stacked\">Remark</ion-label>\r\n        <ion-input class=\"chequeCard\" formControlName=\"accountNo\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            [disabled]=\"validateDisablebutton('disable2')  || submitted1\"\r\n            (click)=\"goToNextScreen(depositForm.value)\"\r\n            >Next</ion-button\r\n          >\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            fill=\"clear\"\r\n            style=\"color: black\"\r\n            (click)=\"goToPreviousPage()\"\r\n            >Back</ion-button\r\n          >\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cashdeposit_cashdeposit_module_ts.js.map