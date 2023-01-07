"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_transaction_transaction_module_ts"],{

/***/ 44424:
/*!*****************************************************************!*\
  !*** ./src/app/pages/transaction/transaction-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionPageRoutingModule": () => (/* binding */ TransactionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _transaction_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction.page */ 65057);




const routes = [
    {
        path: '',
        component: _transaction_page__WEBPACK_IMPORTED_MODULE_0__.TransactionPage
    }
];
let TransactionPageRoutingModule = class TransactionPageRoutingModule {
};
TransactionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TransactionPageRoutingModule);



/***/ }),

/***/ 66924:
/*!*********************************************************!*\
  !*** ./src/app/pages/transaction/transaction.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionPageModule": () => (/* binding */ TransactionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction-routing.module */ 44424);
/* harmony import */ var _transaction_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction.page */ 65057);







let TransactionPageModule = class TransactionPageModule {
};
TransactionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransactionPageRoutingModule
        ],
        declarations: [_transaction_page__WEBPACK_IMPORTED_MODULE_1__.TransactionPage]
    })
], TransactionPageModule);



/***/ }),

/***/ 65057:
/*!*******************************************************!*\
  !*** ./src/app/pages/transaction/transaction.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionPage": () => (/* binding */ TransactionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _transaction_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction.page.html?ngResource */ 80954);
/* harmony import */ var _transaction_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction.page.scss?ngResource */ 34554);
/* harmony import */ var _services_trxn_pdf_doc_download_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/trxn-pdf-doc-download.service */ 72734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var _transaction_popup_transaction_popup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transaction-popup/transaction-popup.page */ 123);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 86527);
/* harmony import */ var _daterange_daterange_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../daterange/daterange.page */ 36675);
















let TransactionPage = class TransactionPage {
    constructor(router, alertController, navCtrl, loadingService, modalCtrl, apiService, cdr, location, shareDataService, pdfService, actionSheetController) {
        this.router = router;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.loadingService = loadingService;
        this.modalCtrl = modalCtrl;
        this.apiService = apiService;
        this.cdr = cdr;
        this.location = location;
        this.shareDataService = shareDataService;
        this.pdfService = pdfService;
        this.actionSheetController = actionSheetController;
        this.notToShowAll2 = false;
        this.displayInfo = false;
        this.users = [];
        this.currentDate = new Date();
        this.currentDate2 = new Date().toISOString();
        this.trxnArrayList = [];
        this.transactionDataArrDownLoad = [];
        this.accountsData = [];
        this.accountIdArray = [];
        this.noOfDaysList = [];
        this.isNoOfDays = false;
        this.originalTransArr = [];
        this.quickOptions = [
            {
                id: 1,
                options: '7 days'
            },
            {
                id: 2,
                options: 'Current Month'
            },
            {
                id: 3,
                options: 'Last Month'
            },
            {
                id: 4,
                options: 'Last 3 Month'
            },
            {
                id: 5,
                options: 'Select Date Range'
            },
        ];
        this.shareObjects = new _services_trxn_pdf_doc_download_service__WEBPACK_IMPORTED_MODULE_2__.shareObjects();
        this.noOfDaysList = Array.from({ length: 60 }, (v, k) => k + 1);
    }
    ngOnInit() {
        this.loginRespAccountId = localStorage.getItem('loginRespAccountId');
        // console.log("loginRespAccountId", this.loginRespAccountId);
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.accountsData = JSON.parse(localStorage.getItem('cardData'));
        // this.accountsData = this.accountsData.filter(acc => acc.status === 'APPROVED');
        // console.log(this.accountsData);
        this.accountsData.forEach((v, k) => {
            this.accountIdArray.push(v.accountId);
        });
        console.log(this.accountIdArray);
        this.shareDataService.getAccountInfo.subscribe(data => {
            // console.log("accountInfo :: ", data);
            this.accountInfo = data;
            if (this.accountInfo != null && this.accountInfo != undefined) {
                this.accountNumber = this.accountInfo.accountId;
            }
        });
        this.loadData();
        this.getTransactionByAccountId('onload', 0, '', null, null, 20);
        this.priviousDate = this.getYesterdayDate();
        this.priviousDate = this.priviousDate.toISOString();
        // this.getBeforeDateBasedOnDays(this.selectNoOfDaysVal);
    }
    ionViewDidEnter() {
        var _a, _b;
        this.slideNo = localStorage.getItem('slideNo') || 0;
        this.accountInfo.accountType = this.accountsData[this.slideNo].accountType;
        this.accountIdArrayVal = (_b = (_a = this.accountsData) === null || _a === void 0 ? void 0 : _a[this.slideNo]) === null || _b === void 0 ? void 0 : _b.accountId;
    }
    OnselectQuickOption(event) {
        console.log(event.target.value.options);
        if (event.target.value.options == 'Select Date Range') {
            console.log("Select Date Range....");
            this.addCustomTask();
        }
    }
    addCustomTask() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _daterange_daterange_page__WEBPACK_IMPORTED_MODULE_7__.DaterangePage,
                cssClass: 'small-modal'
            });
            return yield modal.present();
        });
    }
    openActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                // header: 'Albums',
                // subHeader: 'Subtitle',
                animated: false,
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                mode: 'ios',
                buttons: [
                    {
                        text: 'All items',
                        // icon: 'share',
                        handler: () => {
                            this.trxnArrayList = this.originalTransArr;
                            console.log('All items:: ', this.trxnArrayList);
                        }
                    },
                    {
                        text: 'Completion',
                        // icon: 'share',
                        handler: () => {
                            this.trxnArrayList = this.originalTransArr.filter(trans => trans.tokenStatus === 'COM');
                            console.log('Completion:: ', this.trxnArrayList);
                        }
                    },
                    {
                        text: 'Time delay',
                        // icon: 'share',
                        handler: () => {
                            // this.takePicture();
                            console.log('TIme delay');
                        }
                    },
                    {
                        text: 'Rejection',
                        // icon: 'share',
                        handler: () => {
                            // this.takePicture();
                            console.log('Rejection');
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        // icon: 'share',
                        handler: () => {
                            // this.takePicture();
                            console.log('Rejection');
                        }
                    },
                ]
            });
            yield actionSheet.present();
        });
    }
    compareAccNo(val1) {
        var _a;
        const accountsList = JSON.parse(localStorage.getItem('cardData')) || [];
        const slideNo = localStorage.getItem('slideNo') || 0;
        return val1 == ((_a = accountsList === null || accountsList === void 0 ? void 0 : accountsList[slideNo]) === null || _a === void 0 ? void 0 : _a.accountId);
    }
    accountIdArrayFn(event) {
        console.log('in accountIdArrayFn :: ', event.target.value);
        if (event.target.value) {
            this.trxnArrayList = [];
            this.loginRespAccountId = event.target.value;
            this.accountIdArrayVal = event.target.value;
            this.getTransactionByAccountId('onAccount', 0, '', null, null, 20);
        }
    }
    getBeforeDateBasedOnDays(event) {
        if (event.target.value != 0) {
            var d = new Date();
            console.log('Today is: ' + d.toLocaleString());
            d.setDate(d.getDate() - event.target.value);
            console.log('<br>5 days ago was: ' + d.toLocaleString());
            const formatFromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(d, "yyyy-MM-dd");
            this.fromDate = formatFromDate;
            const formatToDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(this.currentDate, "yyyy-MM-dd");
            this.toDate = formatToDate;
            console.log('formatFromDate :: ', formatFromDate, ' ::formatToDate::  ', formatToDate);
            this.isNoOfDays = true;
        }
    }
    getTransactionByAccountId(dataLoad, page, event, formattedFromDate, formattedToDate, size) {
        this.loadingService.present();
        this.loggedInCust = sessionStorage.getItem('customer_id');
        this.page = page;
        // console.log("Logged In Customer -- ", this.loggedInCust);
        this.apiService.getTransactionByAccountId(this.loginRespAccountId, this.page, formattedFromDate, formattedToDate, size)
            .subscribe(data => {
            this.loadingService.dismiss();
            if (data != null || data != undefined) {
                this.displayInfo = false;
                console.log("data:::", data);
                this.originalTransArr = data;
                if (formattedFromDate != null && dataLoad != 'download') {
                    if (this.page == 0) {
                        // console.log('from date not null :: ',formattedFromDate);
                        this.transactionDataArr = [];
                        this.trxnArrayList = [];
                    }
                }
                if (dataLoad != 'download') {
                    this.transactionDataArr = data;
                    this.totalElements = data;
                    this.pushArray(this.trxnArrayList, this.transactionDataArr);
                }
                if (dataLoad === 'download') {
                    // this.transactionDataArr = [];
                    // this.trxnArrayList = [];
                    this.loadAllTransactionData(data);
                }
                if (dataLoad === 'share') {
                    this.shareAllTransactionData(data);
                }
                if (dataLoad === 'scroll') {
                    event.target.disabled = false;
                }
            }
            else {
                this.transactionDataArr = [];
                this.trxnArrayList = [];
                if (this.trxnArrayList.length == 0) {
                    this.displayInfo = true;
                    this.message = "There are no transactions to display";
                }
            }
            this.cdr.markForCheck();
        }, (err) => {
            console.error('error :', err);
            if (err.error == null) {
                this.transactionDataArr = [];
                this.loadingService.dismiss();
                this.trxnArrayList = [];
                this.displayInfo = true;
                this.message = "There are no transactions to display";
            }
        });
    }
    pushArray(arr, arr2) {
        console.log('--push array--');
        arr.push.apply(arr, arr2);
        // console.log("trxnArrayList:::", arr);
        // Format of this.formattedFromDate and this.formattedToDate = 2022-10-12T12:59:49
        if (this.formattedFromDate && this.formattedToDate) {
            const fromDate = this.formattedFromDate.split('T')[0];
            const toDate = this.formattedToDate.split('T')[0];
            this.trxnArrayList = arr.filter(list => list.accountNumber == this.accountIdArrayVal && list.transactionDate >= fromDate && list.transactionDate <= toDate);
            this.trxnArrayList.map(i => console.log('trnx date', i.transactionDate));
        }
        else {
            this.trxnArrayList = arr;
        }
        this.cdr.markForCheck();
        this.cdr.detectChanges();
    }
    onScrollingFinished(event) {
        // console.log('event  called when scrolled :: ', event)
        event.target.complete();
        this.page = this.page + 1;
        if (this.transactionDataArr.length === 20) {
            // console.log('Done');
            event.target.disabled = true;
            this.getTransactionByAccountId('scroll', this.page, event, null, null, 20);
        }
    }
    changed(event, isNoOfDays) {
        console.log('change event :: ', event);
        var formatFromDate = null;
        var formatToDate = null;
        var currDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(this.currentDate, "yyyy-MM-dd");
        if (!isNoOfDays) {
            const formattedFromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.fromDate), "yyyy-MM-dd'T'HH:mm:ss");
            this.formattedFromDate = formattedFromDate;
            // console.log('fromDate :: ',this.formattedFromDate);
            const formattedToDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.toDate), "yyyy-MM-dd'T'HH:mm:ss");
            this.formattedToDate = formattedToDate;
            formatFromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.fromDate), "yyyy-MM-dd");
            formatToDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.toDate), "yyyy-MM-dd");
            this.compareDates(formatToDate, formatFromDate, event, currDate, isNoOfDays);
        }
        else {
            if (this.selectNoOfDaysVal != 0) {
                this.formattedFromDate = this.fromDate;
                this.formattedToDate = this.toDate;
                formatFromDate = this.fromDate;
                formatToDate = isNoOfDays ? this.toDate : currDate;
                this.toDate = currDate;
                console.log('formatToDate :: ', this.toDate, ' formatFromDate ', formatFromDate);
                this.compareDates(formatToDate, formatFromDate, event, currDate, isNoOfDays);
            }
        }
    }
    compareDates(formatToDate, formatFromDate, event, currDate, isNoOfDays) {
        if (!isNoOfDays && (formatToDate < formatFromDate)) {
            // this.fromDate=null;
            this.toDate = null;
            this.openAlert('To date should be greater than from date!');
            return;
        }
        if (formatToDate > currDate) {
            this.toDate = null;
            this.openAlert('Future dates not allowed!');
            return;
        }
        console.log('ev targ val ---', event.target.value);
        if (event.target.value) {
            this.getTransactionByAccountId("dateBase", 0, '', this.formattedFromDate, this.formattedToDate, 20);
        }
    }
    checkFromDate(event) {
        var currDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(this.currentDate, "yyyy-MM-dd");
        const formattedFromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.fromDate), "yyyy-MM-dd");
        console.log('formatted:: ', currDate, formattedFromDate);
        this.fromDateVal = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.fromDate).toISOString();
        this.toDate = '';
        if (formattedFromDate > currDate) {
            this.openAlert('Future dates not allowed!');
            this.fromDate = null;
            this.toDate = null;
        }
    }
    openAlert(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Alert",
                message: `${message}`,
                backdropDismiss: false,
                cssClass: "example-alert",
                buttons: [
                    {
                        text: "Ok"
                    }
                ]
            });
            yield alert.present();
        });
    }
    reset(trxnArrayList, fromDate, toDate) {
        console.log(trxnArrayList);
        if (fromDate == undefined || fromDate == null) {
            console.log("ytgtjh");
            this.getTransactionByAccountId('share', 0, '', null, null, this.totalElements);
        }
        else {
            this.getTransactionByAccountId('share', 0, '', this.formattedFromDate, this.formattedToDate, this.totalElements);
        }
        // this.trxnArrayList=[];
        // this.fromDate=null;
        // this.toDate=null;
        // this.accountIdArrayVal='';
        // this.selectNoOfDaysVal=0;
        // this.loginRespAccountId=localStorage.getItem('loginRespAccountId');
        // this.getTransactionByAccountId('onload', 0, '', null, null,20);
    }
    getYesterdayDate() {
        return new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    loadData() {
        this.loadingService.present();
        this.apiService.custpomerDetails(this.phoneNumber)
            .subscribe((resp) => {
            this.loadingService.dismiss();
            // console.log('backend resp in home', resp);
            this.customerDetails = resp;
            // console.log("phonenumber resp:", resp);
            this.accountNumber = resp.custAccount.accountId;
            this.custAccountData = resp.custAccount;
            if (resp.custAccount.accountId > 1) {
                this.accountNumber = resp.custAccount.accountId;
                if (this.accountInfo.accountId != null) {
                    resp.custAccount.accountId = this.accountInfo.accountId;
                }
            }
            this.savingAccountFun(resp);
            // if(this.customerDetails.accountInfo.status == 'APPROVED'){
            // this.savingAccountFun(resp);
            // }
        }, (err) => {
            this.loadingService.dismiss();
        });
    }
    savingAccountFun(filteredResponseSavingAccount) {
        // console.log(filteredResponseSavingAccount);
        this.users = filteredResponseSavingAccount.custAccount;
        this.cdr.markForCheck();
    }
    goBack() {
        this.loginRespAccountId = localStorage.getItem('loginRespAccountId');
        this.location.back();
    }
    onClick(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Inside onClick", event.transactionId);
            // this.loadingService.present();
            // this.apiService.getByTransactionId(event.transactionId).subscribe(response =>{
            //   console.log("response -- "+response);
            //   this.data = JSON.parse(JSON.stringify(response));
            //   console.log("response -- "+this.data);
            // });
            // let modal = await this.modalCtrl.create({component: TransactionPopupPage,
            //   componentProps: { 
            //     foo: 'hello',
            //     bar: 'world'
            // )},
            let modal = yield this.modalCtrl.create({
                component: _transaction_popup_transaction_popup_page__WEBPACK_IMPORTED_MODULE_6__.TransactionPopupPage,
                componentProps: {
                    value: event.transactionId
                }
            });
            //   modal.onDidDismiss()
            //   .then((data) => {
            //     const foo = data['data'];
            // });
            return yield modal.present();
        });
    }
    // return await modal.present();
    // modal.present();
    // console.log("Event = ",event);
    // this.loadingService.present();
    // this.apiService.getByTransactionId(event.transactionId).subscribe(response =>{
    //   console.log("response -- "+response);
    //   this.data = JSON.parse(JSON.stringify(response));
    //   console.log("response -- "+this.data);
    // });
    // setTimeout(() => {
    //   this.loadingService.dismiss();
    //   this.dialog(this.data);
    // }, 3000);
    // async dialog(data) {
    //   const alert = await this.alertController.create({
    // header: data.trnType,
    //       cssClass: 'alertColor',
    //       inputs: [
    //         {
    //           name: 'Transaction ID',
    //           type: 'text',
    //           value: 'Transaction ID: '+data.transactionId,
    //           disabled: true
    //         },
    //         {
    //           name: 'Account Number',
    //           type: 'text',
    //           value: 'Account Number: '+data.accountNumber,
    //           disabled: true
    //         },
    //         {
    //           name: 'Account Type',
    //           type: 'text',
    //           value: 'Account Type: '+this.accountInfo.accountType ,
    //           disabled: true
    //         },
    //         {
    //           name: 'Account Currency',
    //           type: 'text',
    //           value: 'Account Currency: '+data.transactionCurrency,
    //           disabled: true
    //         },
    //         {
    //           name: 'Transaction Amount',
    //           type: 'text',
    //           value: 'Transaction Amount: '+data.transactionAmount,
    //           disabled: true
    //         },
    //         {
    //           name: 'Balance',
    //           type: 'text',
    //           value: 'Balance: '+data.accountBalance,
    //           disabled: true
    //         },
    //       ],
    //       buttons: ['OK']
    //     });
    //     await alert.present();
    //     let result = await alert.onDidDismiss();
    //     console.log(result);
    //   }
    downloadPdf(trxnArrayList, fromDate, toDate) {
        console.log("inside download pdf", trxnArrayList, fromDate, toDate);
        if (fromDate == undefined || fromDate == null) {
            this.getTransactionByAccountId('download', 0, '', null, null, this.totalElements);
        }
        else {
            this.getTransactionByAccountId('download', 0, '', this.formattedFromDate, this.formattedToDate, this.totalElements);
        }
    }
    loadAllTransactionData(data) {
        var currDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(this.currentDate, "dd-MM-yyyy HH:mm:ss");
        this.pdfService.createPdf(data, this.customerDetails, currDate);
    }
    shareAllTransactionData(event) {
        console.log(event);
        // let emailId='gayathri.r@rumango.com';
        // const formdata = new FormData();
        // formdata.append('file', data);
        // console.log(formdata);
        // this.shareObjects.file=formdata;
        // this.shareObjects.primaryEmailAddress=emailId;
        // this.shareObjects.customerId='61052';
        // console.log(this.shareObjects);
        // this.apiService.shareTransactionDetails(this.shareObjects).subscribe((resp) => {
        // });
        var currDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(this.currentDate, "dd-MM-yyyy HH:mm:ss");
        this.pdfService.sharePdf(event, this.customerDetails, currDate);
    }
};
TransactionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.Location },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _services_trxn_pdf_doc_download_service__WEBPACK_IMPORTED_MODULE_2__.TrxnPdfDocDownloadService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController }
];
TransactionPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonInfiniteScroll,] }]
};
TransactionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-transaction',
        template: _transaction_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_transaction_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransactionPage);



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
            // duration: 5000,
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

/***/ 34554:
/*!********************************************************************!*\
  !*** ./src/app/pages/transaction/transaction.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-header .header {\n  display: flex;\n}\nion-header .header ion-icon {\n  font-size: x-large;\n}\nion-header .header_title {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\nion-header .header_title ion-title {\n  font-weight: 600;\n  text-align: left;\n  padding-left: 11%;\n  margin-top: 11px;\n}\nion-header .header_title ion-icon {\n  color: #5dade2;\n  padding-left: 323px;\n}\n.toolbar-bg {\n  margin-top: 0px;\n  background: rgba(31, 107, 255, 0.2) !important;\n  width: auto;\n  height: 60px;\n  padding: 1px;\n}\np {\n  font-size: 12px;\n}\n.selectAccId {\n  width: 100%;\n}\n.date_range ion-label {\n  padding: 0 4%;\n}\n.btnColumn {\n  display: flex;\n  justify-content: center;\n}\n.resetBtn {\n  background: #c0392b;\n  border-radius: 6px;\n  width: 175px;\n  height: 50px;\n}\n.shareIcon {\n  width: 50px;\n}\n.downloadBtn {\n  background: #5dade2;\n  border-radius: 6px;\n  width: 174px;\n  height: 50px;\n}\n.quickOption {\n  background-color: #8c0;\n  height: 80px;\n}\n.transactionCard {\n  min-height: 525px;\n  width: 100%;\n}\n#wrapper {\n  margin-left: auto;\n  margin-right: auto;\n  height: auto;\n  width: 75%;\n}\n.text-right {\n  text-align: end;\n}\n.secondary-text {\n  line-height: 1.5rem;\n  text-align: center;\n  color: #1f6bff !important;\n}\n.event {\n  flex-flow: row wrap;\n  box-sizing: border-box;\n  display: flex;\n}\n.cusNameClass {\n  font-size: small;\n}\n.cusHistoryContent {\n  color: #aba9a9;\n  font-size: 10px;\n}\n.email-icon {\n  color: #707070;\n  cursor: pointer;\n  float: right;\n  font-size: large;\n}\n.imgStyle {\n  margin-left: 10px;\n  margin-right: 10px;\n  height: 35px;\n  width: 30px;\n}\n.search-results {\n  height: 35rem;\n  overflow: scroll;\n}\n.dateLabel {\n  color: #5499c7;\n  font-weight: 400px;\n}\n.ion_list ion-label {\n  font-weight: 600;\n}\n.ion_list ion-label h3 {\n  font-size: 17px;\n  font-weight: 600;\n  line-height: 2;\n}\n.ion_list ion-label p {\n  font-size: 15px;\n  font-weight: 600;\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdEh1YiUyMFJlcG9zaXRvcnklMjBvbGRcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXHRyYW5zYWN0aW9uXFx0cmFuc2FjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FDQUo7QURFSTtFQUNFLGtCQUFBO0FDQU47QURFSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUNBTjtBRENNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBRENNO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDQ1I7QURLQTtFQUNFLGVBQUE7RUFDQSw4Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FESUE7RUFDRSxlQUFBO0FDREY7QURJQTtFQUNFLFdBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtBQ0RGO0FER0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNBRjtBREVBO0VBQ0UsbUJBQUE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0g7QURDQTtFQUNFLFdBQUE7QUNFRjtBREFBO0VBQ0csbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDR0g7QUREQTtFQUNFLHNCQUFBO0VBQXVCLFlBQUE7QUNLekI7QURIQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ01GO0FESkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNPRjtBRExBO0VBQ0UsZUFBQTtBQ1FGO0FETkE7RUFDRSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EseUJBQUE7QUNRRjtBRE5BO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNTRjtBRExBO0VBQ0UsZ0JBQUE7QUNRRjtBRE5BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNTRjtBRFBBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNVRjtBRFJBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDV0Y7QURUQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ1lGO0FEVkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNhRjtBRFRFO0VBQ0UsZ0JBQUE7QUNZSjtBRFhJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2FOO0FEWEk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDYU4iLCJmaWxlIjoidHJhbnNhY3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICB9XHJcbiAgICAmX3RpdGxlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMSU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgICAgfVxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICM1ZGFkZTI7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMjNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRvb2xiYXItYmcge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAxMDcsIDI1NSwgMC4yKSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiAxcHg7XHJcbn1cclxucCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uc2VsZWN0QWNjSWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGF0ZV9yYW5nZSBpb24tbGFiZWwge1xyXG4gIHBhZGRpbmc6IDAgNCU7XHJcbn1cclxuLmJ0bkNvbHVtbntcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG59XHJcbi5yZXNldEJ0bntcclxuICBiYWNrZ3JvdW5kOiAjYzAzOTJiO1xyXG4gICBib3JkZXItcmFkaXVzOiA2cHg7IFxyXG4gICB3aWR0aDogMTc1cHg7XHJcbiAgIGhlaWdodDogNTBweDtcclxufVxyXG4uc2hhcmVJY29ue1xyXG4gIHdpZHRoOiA1MHB4XHJcbn1cclxuLmRvd25sb2FkQnRue1xyXG4gICBiYWNrZ3JvdW5kOiAjNWRhZGUyO1xyXG4gICBib3JkZXItcmFkaXVzOiA2cHg7IFxyXG4gICB3aWR0aDogMTc0cHg7XHJcbiAgIGhlaWdodDogNTBweDtcclxufVxyXG4ucXVpY2tPcHRpb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjMDtoZWlnaHQ6IDgwcHg7XHJcbn1cclxuLnRyYW5zYWN0aW9uQ2FyZCB7XHJcbiAgbWluLWhlaWdodDogNTI1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI3dyYXBwZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG4udGV4dC1yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcbi5zZWNvbmRhcnktdGV4dCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAvLyAgbGluZS1oZWlnaHQ6IDAuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMxZjZiZmYgIWltcG9ydGFudDtcclxufVxyXG4uZXZlbnQge1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAvLyBoZWlnaHQ6IDUyNXB4O1xyXG59XHJcbi5jdXNOYW1lQ2xhc3Mge1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuLmN1c0hpc3RvcnlDb250ZW50IHtcclxuICBjb2xvcjogI2FiYTlhOTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLmVtYWlsLWljb24ge1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG4uaW1nU3R5bGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuLnNlYXJjaC1yZXN1bHRzIHtcclxuICBoZWlnaHQ6IDM1cmVtO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuLmRhdGVMYWJlbCB7XHJcbiAgY29sb3I6ICM1NDk5Yzc7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uaW9uX2xpc3Qge1xyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImlvbi1oZWFkZXIgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5pb24taGVhZGVyIC5oZWFkZXIgaW9uLWljb24ge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5pb24taGVhZGVyIC5oZWFkZXJfdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWhlYWRlciAuaGVhZGVyX3RpdGxlIGlvbi10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTElO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xufVxuaW9uLWhlYWRlciAuaGVhZGVyX3RpdGxlIGlvbi1pY29uIHtcbiAgY29sb3I6ICM1ZGFkZTI7XG4gIHBhZGRpbmctbGVmdDogMzIzcHg7XG59XG5cbi50b29sYmFyLWJnIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAxMDcsIDI1NSwgMC4yKSAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5zZWxlY3RBY2NJZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGF0ZV9yYW5nZSBpb24tbGFiZWwge1xuICBwYWRkaW5nOiAwIDQlO1xufVxuXG4uYnRuQ29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yZXNldEJ0biB7XG4gIGJhY2tncm91bmQ6ICNjMDM5MmI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgd2lkdGg6IDE3NXB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5zaGFyZUljb24ge1xuICB3aWR0aDogNTBweDtcbn1cblxuLmRvd25sb2FkQnRuIHtcbiAgYmFja2dyb3VuZDogIzVkYWRlMjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogMTc0cHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnF1aWNrT3B0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjMDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4udHJhbnNhY3Rpb25DYXJkIHtcbiAgbWluLWhlaWdodDogNTI1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jd3JhcHBlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDc1JTtcbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5zZWNvbmRhcnktdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMxZjZiZmYgIWltcG9ydGFudDtcbn1cblxuLmV2ZW50IHtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmN1c05hbWVDbGFzcyB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5jdXNIaXN0b3J5Q29udGVudCB7XG4gIGNvbG9yOiAjYWJhOWE5O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5lbWFpbC1pY29uIHtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uaW1nU3R5bGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uc2VhcmNoLXJlc3VsdHMge1xuICBoZWlnaHQ6IDM1cmVtO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uZGF0ZUxhYmVsIHtcbiAgY29sb3I6ICM1NDk5Yzc7XG4gIGZvbnQtd2VpZ2h0OiA0MDBweDtcbn1cblxuLmlvbl9saXN0IGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaW9uX2xpc3QgaW9uLWxhYmVsIGgzIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjtcbn1cbi5pb25fbGlzdCBpb24tbGFiZWwgcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM5OTk7XG59Il19 */";

/***/ }),

/***/ 80954:
/*!********************************************************************!*\
  !*** ./src/app/pages/transaction/transaction.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"header mb-0\">\r\n      <ion-icon name=\"chevron-back-outline\" (click)=\"goBack()\"></ion-icon>\r\n      <div class=\"header_title\">\r\n        <ion-title>My Transaction</ion-title>\r\n        <ion-icon name=\"funnel-outline\" (click)=\"openActionSheet()\"></ion-icon>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- <ion-item>\r\n    <ion-label>From date</ion-label>\r\n    <ion-input type=\"date\" class=\"datepicker-input\" displayFormat=\"DDD. MMM DD, YY\" placeholder=\"Select date\" \r\n    [(ngModel)]=\"date\" ngDefaultControl (input)=\"date = $event.target.value\" ></ion-input>\r\n  </ion-item> -->\r\n\r\n<div>\r\n  <!-- <ion-item>\r\n    <ion-label>Select AccountId</ion-label>\r\n    <ion-select [(ngModel)]=\"accountIdArrayVal\" (ngModelChange)=\"accountIdArrayFn(item)\">\r\n        <ion-option [value]=\"item\" *ngFor=\"let item of accountIdArray\">{{item}}</ion-option> \r\n    </ion-select>\r\n  </ion-item> -->\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-select class=\"selectAccId\" interface=\"popover\" placeholder=\"Select AccountId\">\r\n            <ion-select-option\r\n              *ngFor=\"let item of accountIdArray\"\r\n              [value]=\"item\"\r\n            >\r\n              <div\r\n                class=\"select_option\"\r\n                style=\"background-color: #8c0; height: 80px\"\r\n              >\r\n                <div class=\"acc_num\">\r\n                  {{item}} - {{accountInfo?.accountType}}\r\n                </div>\r\n              </div>\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-select class=\"selectAccId\" interface=\"popover\" placeholder=\"Quick Options\" (ionChange)=\"OnselectQuickOption($event)\">\r\n            <ion-select-option *ngFor=\"let item of quickOptions\" [value]=\"item\">\r\n                <div class=\"select_option\"  class=\"quickOption\">\r\n                  <div class=\"acc_num\" >{{item.options}}</div>\r\n                </div>\r\n              </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!-- <ion-row>\r\n    <ion-col>\r\n      <ion-item style=\" border-radius: 10px;\">\r\n    <ion-label position=\"floating\" class=\"dateLabel\">Select No. Of Days</ion-label>\r\n    <ion-select class=\"box\" (ionChange)=\"getBeforeDateBasedOnDays($event)\"\r\n    [(ngModel)]=\"selectNoOfDaysVal\" ngDefaultControl>\r\n      <ion-select-option *ngFor=\"let item of noOfDaysList; let i = index\" [value]=\"item\">{{item}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n</ion-col>\r\n  </ion-row> -->\r\n  <ion-row>\r\n    <ion-col class=\"date_range\">\r\n      <ion-label position=\"floating\" class=\"dateLabel\">From date</ion-label>\r\n      <ion-item>\r\n        <!--  [max]=\"currentDate2\"  -->\r\n        <ion-datetime-button datetime=\"datetime\" showTimeLabel=\"false\"></ion-datetime-button>\r\n        <ion-modal [keepContentsMounted]=\"true\">\r\n          <ng-template>\r\n            <ion-datetime\r\n            presentation=\"date\"\r\n            id=\"datetime\"\r\n            [(ngModel)]=\"fromDate\"\r\n            [max]=\"currentDate2\"\r\n            (ionChange)=\"checkFromDate($event)\"\r\n            displayFormat=\"DDD. MMM DD, YY\"\r\n            ></ion-datetime>\r\n          </ng-template>\r\n        </ion-modal>\r\n        <!-- <ion-datetime\r\n          presentation=\"fromDate\"\r\n          [(ngModel)]=\"fromDate\"\r\n          [max]=\"currentDate2\"\r\n          (ionChange)=\"checkFromDate($event)\"\r\n        ></ion-datetime> -->\r\n      </ion-item>\r\n    </ion-col>\r\n    <ion-col class=\"date_range\">\r\n      <ion-label position=\"floating\" class=\"dateLabel\">To date</ion-label>\r\n      <ion-item>\r\n        <!-- [min]=\"fromDateVal\" [max]=\"currentDate2\" -->\r\n        <ion-datetime-button datetime=\"datetime\" showTimeLabel=\"false\"></ion-datetime-button>\r\n        <ion-modal [keepContentsMounted]=\"true\">\r\n          <ng-template>\r\n            <ion-datetime\r\n            presentation=\"date\"\r\n            id=\"datetime\"\r\n            [(ngModel)]=\"toDate\"\r\n            [max]=\"currentDate2\"\r\n            (ionChange)=\"changed($event,isNoOfDays)\"\r\n            displayFormat=\"DDD. MMM DD, YY\"\r\n            ></ion-datetime>\r\n          </ng-template>\r\n        </ion-modal>\r\n        <!-- <ion-datetime\r\n          [(ngModel)]=\"toDate\"\r\n          [max]=\"currentDate2\"\r\n          (ionChange)=\"changed($event,isNoOfDays)\"\r\n        ></ion-datetime> -->\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col class=\"btnColumn\">\r\n      <ion-button\r\n        (click)=\"reset(trxnArrayList,fromDate,toDate)\"\r\n        color=\"light\"\r\n        fill=\"outline\"\r\n        class=\"resetBtn\"\r\n      >\r\n        <ion-icon name=\"share-social\" class=\"shareIcon\" (click)=\"reset(trxnArrayList,fromDate,toDate)\" ></ion-icon> \r\n       Share Details\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"btnColumn\">\r\n      <ion-button\r\n        (click)=\"downloadPdf(trxnArrayList,fromDate,toDate)\"\r\n        color=\"light\"\r\n        class=\"downloadBtn\"\r\n        fill=\"outline\"\r\n      >\r\n        <ion-icon\r\n          name=\"add-outline\"\r\n          (click)=\"downloadPdf(trxnArrayList,fromDate,toDate)\"\r\n        ></ion-icon\r\n        >&nbsp; Download\r\n        <!-- style=\"margin-top:15px;background:#2471A3;border-radius: 6px;width:20px;height:30px;margin-right:5px;\" -->\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!-- <ion-row>\r\n    <ion-col style=\"display: flex; justify-content: center\">\r\n      <ion-button\r\n        (click)=\"reset()\"\r\n        color=\"light\"\r\n        fill=\"outline\"\r\n        style=\"background: #c0392b; border-radius: 6px; width: 150px\"\r\n      >\r\n        <ion-icon name=\"refresh-outline\" (click)=\"reset()\"></ion-icon>\r\n        &nbsp;&nbsp;&nbsp;Reset\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col style=\"display: flex; justify-content: center\">\r\n      <ion-button\r\n        (click)=\"downloadPdf(trxnArrayList,fromDate,toDate)\"\r\n        style=\"background: #5dade2; border-radius: 6px; width: 150px\"\r\n        color=\"light\"\r\n        fill=\"outline\"\r\n      >\r\n        <ion-icon\r\n          name=\"arrow-down-outline\"\r\n          (click)=\"downloadPdf(trxnArrayList,fromDate,toDate)\"\r\n        ></ion-icon\r\n        >&nbsp; Download\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row> -->\r\n\r\n</div>\r\n\r\n<ion-content>\r\n  <div class=\"transactionCard\">\r\n    <div *ngIf=\"displayInfo\">\r\n      <p>{{message}}</p>\r\n    </div>\r\n    <ion-list class=\"ion_list\">\r\n      <ion-item *ngFor=\"let trans of trxnArrayList;\" (click)=\"onClick(trans)\">\r\n        <!-- <ion-button slot=\"start\">\r\n        <ion-icon slot=\"icon-only\" name=\"wallet-outline\"></ion-icon>\r\n      </ion-button> -->\r\n\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label>\r\n                <h3>Cash Deposit</h3>\r\n                <p>\r\n                  Ref No:{{ trans.transactionId }}-{{trans.transactionDate}}-{{\r\n                  trans.transactionTime }}\r\n                </p>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col class=\"ion-align-self-center\">\r\n              <ion-label\r\n                [color]=\"trans.trnType == 'Cash Withdrawal' || trans.trnType == 'Cheque Withdrawal' ? 'danger' : 'success'\"\r\n                class=\"text-xs text-right\"\r\n              >\r\n                {{trans.transactionAmount |\r\n                currency:trans.transactionCurrency:'symbol':'1.0-1'}}\r\n              </ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-infinite-scroll\r\n      threshold=\"100px\"\r\n      (ionInfinite)=\"onScrollingFinished($event)\"\r\n    >\r\n      <ion-infinite-scroll-content\r\n        loadingSpinner=\"bubbles\"\r\n        loadingText=\"Loading more data...\"\r\n      >\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n  </div>\r\n</ion-content>\r\n<!-- <app-footer></app-footer> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_transaction_transaction_module_ts.js.map